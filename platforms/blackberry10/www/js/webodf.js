// Input 0
var webodf_version = "0.4.2-2009-gb122af0";
// Input 1
function Runtime() {
}
Runtime.prototype.getVariable = function (h) {
};
Runtime.prototype.toJson = function (h) {
};
Runtime.prototype.fromJson = function (h) {
};
Runtime.prototype.byteArrayFromString = function (h, g) {
};
Runtime.prototype.byteArrayToString = function (h, g) {
};
Runtime.prototype.read = function (h, g, b, p) {
};
Runtime.prototype.readFile = function (h, g, b) {
};
Runtime.prototype.readFileSync = function (h, g) {
};
Runtime.prototype.loadXML = function (h, g) {
};
Runtime.prototype.writeFile = function (h, g, b) {
};
Runtime.prototype.isFile = function (h, g) {
};
Runtime.prototype.getFileSize = function (h, g) {
};
Runtime.prototype.deleteFile = function (h, g) {
};
Runtime.prototype.log = function (h, g) {
};
Runtime.prototype.setTimeout = function (h, g) {
};
Runtime.prototype.clearTimeout = function (h) {
};
Runtime.prototype.libraryPaths = function () {
};
Runtime.prototype.currentDirectory = function () {
};
Runtime.prototype.setCurrentDirectory = function (h) {
};
Runtime.prototype.type = function () {
};
Runtime.prototype.getDOMImplementation = function () {
};
Runtime.prototype.parseXML = function (h) {
};
Runtime.prototype.exit = function (h) {
};
Runtime.prototype.getWindow = function () {
};
Runtime.prototype.assert = function (h, g, b) {
};
var IS_COMPILED_CODE = !0;
Runtime.byteArrayToString = function (h, g) {
    function b(b) {
        var d = "", n, g = b.length;
        for (n = 0; n < g; n += 1)d += String.fromCharCode(b[n] & 255);
        return d
    }

    function p(b) {
        var d = "", n, g = b.length, k = [], e, c, a, l;
        for (n = 0; n < g; n += 1)e = b[n], 128 > e ? k.push(e) : (n += 1, c = b[n], 194 <= e && 224 > e ? k.push((e & 31) << 6 | c & 63) : (n += 1, a = b[n], 224 <= e && 240 > e ? k.push((e & 15) << 12 | (c & 63) << 6 | a & 63) : (n += 1, l = b[n], 240 <= e && 245 > e && (e = (e & 7) << 18 | (c & 63) << 12 | (a & 63) << 6 | l & 63, e -= 65536, k.push((e >> 10) + 55296, (e & 1023) + 56320))))), 1E3 === k.length && (d += String.fromCharCode.apply(null,
            k), k.length = 0);
        return d + String.fromCharCode.apply(null, k)
    }

    var q;
    "utf8" === g ? q = p(h) : ("binary" !== g && this.log("Unsupported encoding: " + g), q = b(h));
    return q
};
Runtime.getVariable = function (h) {
    try {
        return eval(h)
    } catch (g) {
    }
};
Runtime.toJson = function (h) {
    return JSON.stringify(h)
};
Runtime.fromJson = function (h) {
    return JSON.parse(h)
};
Runtime.getFunctionName = function (h) {
    return void 0 === h.name ? (h = /function\s+(\w+)/.exec(h)) && h[1] : h.name
};
function BrowserRuntime(h) {
    function g(e) {
        var c = e.length, a, l, f = 0;
        for (a = 0; a < c; a += 1)l = e.charCodeAt(a), f += 1 + (128 < l) + (2048 < l), 55040 < l && 57344 > l && (f += 1, a += 1);
        return f
    }

    function b(e, c, a) {
        var l = e.length, f, b;
        c = new Uint8Array(new ArrayBuffer(c));
        a ? (c[0] = 239, c[1] = 187, c[2] = 191, b = 3) : b = 0;
        for (a = 0; a < l; a += 1)f = e.charCodeAt(a), 128 > f ? (c[b] = f, b += 1) : 2048 > f ? (c[b] = 192 | f >>> 6, c[b + 1] = 128 | f & 63, b += 2) : 55040 >= f || 57344 <= f ? (c[b] = 224 | f >>> 12 & 15, c[b + 1] = 128 | f >>> 6 & 63, c[b + 2] = 128 | f & 63, b += 3) : (a += 1, f = (f - 55296 << 10 | e.charCodeAt(a) - 56320) + 65536,
            c[b] = 240 | f >>> 18 & 7, c[b + 1] = 128 | f >>> 12 & 63, c[b + 2] = 128 | f >>> 6 & 63, c[b + 3] = 128 | f & 63, b += 4);
        return c
    }

    function p(e) {
        var c = e.length, a = new Uint8Array(new ArrayBuffer(c)), l;
        for (l = 0; l < c; l += 1)a[l] = e.charCodeAt(l) & 255;
        return a
    }

    function q(e, c) {
        var a, l, f;
        void 0 !== c ? f = e : c = e;
        h ? (l = h.ownerDocument, f && (a = l.createElement("span"), a.className = f, a.appendChild(l.createTextNode(f)), h.appendChild(a), h.appendChild(l.createTextNode(" "))), a = l.createElement("span"), 0 < c.length && "<" === c[0] ? a.innerHTML = c : a.appendChild(l.createTextNode(c)),
            h.appendChild(a), h.appendChild(l.createElement("br"))) : console && console.log(c);
        "alert" === f && alert(c)
    }

    function m(e, c, a) {
        if (0 !== a.status || a.responseText)if (200 === a.status || 0 === a.status) {
            if (a.response && "string" !== typeof a.response)"binary" === c ? (a = a.response, a = new Uint8Array(a)) : a = String(a.response); else if ("binary" === c)if (null !== a.responseBody && "undefined" !== String(typeof VBArray)) {
                a = (new VBArray(a.responseBody)).toArray();
                var l = a.length, f = new Uint8Array(new ArrayBuffer(l));
                for (c = 0; c < l; c += 1)f[c] = a[c];
                a = f
            } else {
                (c = a.getResponseHeader("Content-Length")) && (c = parseInt(c, 10));
                if (c && c !== a.responseText.length)a:{
                    var l = a.responseText, f = !1, n = g(l);
                    if ("number" === typeof c) {
                        if (c !== n && c !== n + 3) {
                            l = void 0;
                            break a
                        }
                        f = n + 3 === c;
                        n = c
                    }
                    l = b(l, n, f)
                }
                void 0 === l && (l = p(a.responseText));
                a = l
            } else a = a.responseText;
            k[e] = a;
            e = {err: null, data: a}
        } else e = {err: a.responseText || a.statusText, data: null}; else e = {err: "File " + e + " is empty.", data: null};
        return e
    }

    function d(e, c, a) {
        var l = new XMLHttpRequest;
        l.open("GET", e, a);
        l.overrideMimeType && ("binary" !==
            c ? l.overrideMimeType("text/plain; charset=" + c) : l.overrideMimeType("text/plain; charset=x-user-defined"));
        return l
    }

    function n(e, c, a) {
        function l() {
            var l;
            4 === f.readyState && (l = m(e, c, f), a(l.err, l.data))
        }

        if (k.hasOwnProperty(e))a(null, k[e]); else {
            var f = d(e, c, !0);
            f.onreadystatechange = l;
            try {
                f.send(null)
            } catch (b) {
                a(b.message, null)
            }
        }
    }

    var r = this, k = {};
    this.byteArrayFromString = function (e, c) {
        var a;
        "utf8" === c ? a = b(e, g(e), !1) : ("binary" !== c && r.log("unknown encoding: " + c), a = p(e));
        return a
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.readFile = n;
    this.read = function (e, c, a, l) {
        n(e, "binary", function (f, e) {
            var b = null;
            if (e) {
                if ("string" === typeof e)throw"This should not happen.";
                b = e.subarray(c, c + a)
            }
            l(f, b)
        })
    };
    this.readFileSync = function (e, c) {
        var a = d(e, c, !1), l;
        try {
            a.send(null);
            l = m(e, c, a);
            if (l.err)throw l.err;
            if (null === l.data)throw"No data read from " + e + ".";
        } catch (f) {
            throw f;
        }
        return l.data
    };
    this.writeFile = function (e, c, a) {
        k[e] = c;
        var l = new XMLHttpRequest,
            f;
        l.open("PUT", e, !0);
        l.onreadystatechange = function () {
            4 === l.readyState && (0 !== l.status || l.responseText ? 200 <= l.status && 300 > l.status || 0 === l.status ? a(null) : a("Status " + String(l.status) + ": " + l.responseText || l.statusText) : a("File " + e + " is empty."))
        };
        f = c.buffer && !l.sendAsBinary ? c.buffer : r.byteArrayToString(c, "binary");
        try {
            l.sendAsBinary ? l.sendAsBinary(f) : l.send(f)
        } catch (b) {
            r.log("HUH? " + b + " " + c), a(b.message)
        }
    };
    this.deleteFile = function (e, c) {
        delete k[e];
        var a = new XMLHttpRequest;
        a.open("DELETE", e, !0);
        a.onreadystatechange =
            function () {
                4 === a.readyState && (200 > a.status && 300 <= a.status ? c(a.responseText) : c(null))
            };
        a.send(null)
    };
    this.loadXML = function (e, c) {
        var a = new XMLHttpRequest;
        a.open("GET", e, !0);
        a.overrideMimeType && a.overrideMimeType("text/xml");
        a.onreadystatechange = function () {
            4 === a.readyState && (0 !== a.status || a.responseText ? 200 === a.status || 0 === a.status ? c(null, a.responseXML) : c(a.responseText, null) : c("File " + e + " is empty.", null))
        };
        try {
            a.send(null)
        } catch (l) {
            c(l.message, null)
        }
    };
    this.isFile = function (e, c) {
        r.getFileSize(e, function (a) {
            c(-1 !==
                a)
        })
    };
    this.getFileSize = function (e, c) {
        if (k.hasOwnProperty(e) && "string" !== typeof k[e])c(k[e].length); else {
            var a = new XMLHttpRequest;
            a.open("HEAD", e, !0);
            a.onreadystatechange = function () {
                if (4 === a.readyState) {
                    var l = a.getResponseHeader("Content-Length");
                    l ? c(parseInt(l, 10)) : n(e, "binary", function (a, e) {
                        a ? c(-1) : c(e.length)
                    })
                }
            };
            a.send(null)
        }
    };
    this.log = q;
    this.assert = function (e, c, a) {
        if (!e)throw q("alert", "ASSERTION FAILED:\n" + c), a && a(), c;
    };
    this.setTimeout = function (e, c) {
        return setTimeout(function () {
            e()
        }, c)
    };
    this.clearTimeout =
        function (e) {
            clearTimeout(e)
        };
    this.libraryPaths = function () {
        return["lib"]
    };
    this.setCurrentDirectory = function () {
    };
    this.currentDirectory = function () {
        return""
    };
    this.type = function () {
        return"BrowserRuntime"
    };
    this.getDOMImplementation = function () {
        return window.document.implementation
    };
    this.parseXML = function (e) {
        return(new DOMParser).parseFromString(e, "text/xml")
    };
    this.exit = function (e) {
        q("Calling exit with code " + String(e) + ", but exit() is not implemented.")
    };
    this.getWindow = function () {
        return window
    }
}
function NodeJSRuntime() {
    function h(b) {
        var k = b.length, e, c = new Uint8Array(new ArrayBuffer(k));
        for (e = 0; e < k; e += 1)c[e] = b[e];
        return c
    }

    function g(b, k, e) {
        function c(a, c) {
            if (a)return e(a, null);
            if (!c)return e("No data for " + b + ".", null);
            if ("string" === typeof c)return e(a, c);
            e(a, h(c))
        }

        b = q.resolve(m, b);
        "binary" !== k ? p.readFile(b, k, c) : p.readFile(b, null, c)
    }

    var b = this, p = require("fs"), q = require("path"), m = "", d, n;
    this.byteArrayFromString = function (b, k) {
        var e = new Buffer(b, k), c, a = e.length, l = new Uint8Array(new ArrayBuffer(a));
        for (c = 0; c < a; c += 1)l[c] = e[c];
        return l
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.readFile = g;
    this.loadXML = function (n, k) {
        g(n, "utf-8", function (e, c) {
            if (e)return k(e, null);
            if (!c)return k("No data for " + n + ".", null);
            k(null, b.parseXML(c))
        })
    };
    this.writeFile = function (b, k, e) {
        k = new Buffer(k);
        b = q.resolve(m, b);
        p.writeFile(b, k, "binary", function (c) {
            e(c || null)
        })
    };
    this.deleteFile = function (b, k) {
        b = q.resolve(m, b);
        p.unlink(b, k)
    };
    this.read = function (b, k, e, c) {
        b = q.resolve(m, b);
        p.open(b, "r+", 666, function (a, l) {
            if (a)c(a, null); else {
                var f = new Buffer(e);
                p.read(l, f, 0, e, k, function (a) {
                    p.close(l);
                    c(a, h(f))
                })
            }
        })
    };
    this.readFileSync = function (b, k) {
        var e;
        e = p.readFileSync(b, "binary" === k ? null : k);
        if (null === e)throw"File " + b + " could not be read.";
        "binary" === k && (e = h(e));
        return e
    };
    this.isFile = function (b, k) {
        b = q.resolve(m, b);
        p.stat(b, function (e, c) {
            k(!e && c.isFile())
        })
    };
    this.getFileSize = function (b, k) {
        b = q.resolve(m, b);
        p.stat(b, function (e, c) {
            e ? k(-1) : k(c.size)
        })
    };
    this.log = function (b, k) {
        var e;
        void 0 !== k ? e = b : k = b;
        "alert" === e && process.stderr.write("\n!!!!! ALERT !!!!!\n");
        process.stderr.write(k + "\n");
        "alert" === e && process.stderr.write("!!!!! ALERT !!!!!\n")
    };
    this.assert = function (b, k, e) {
        b || (process.stderr.write("ASSERTION FAILED: " + k), e && e())
    };
    this.setTimeout = function (b, k) {
        return setTimeout(function () {
            b()
        }, k)
    };
    this.clearTimeout = function (b) {
        clearTimeout(b)
    };
    this.libraryPaths = function () {
        return[__dirname]
    };
    this.setCurrentDirectory = function (b) {
        m =
            b
    };
    this.currentDirectory = function () {
        return m
    };
    this.type = function () {
        return"NodeJSRuntime"
    };
    this.getDOMImplementation = function () {
        return n
    };
    this.parseXML = function (b) {
        return d.parseFromString(b, "text/xml")
    };
    this.exit = process.exit;
    this.getWindow = function () {
        return null
    };
    d = new (require("xmldom").DOMParser);
    n = b.parseXML("<a/>").implementation
}
function RhinoRuntime() {
    function h(b, d) {
        var k;
        void 0 !== d ? k = b : d = b;
        "alert" === k && print("\n!!!!! ALERT !!!!!");
        print(d);
        "alert" === k && print("!!!!! ALERT !!!!!")
    }

    var g = this, b = {}, p = b.javax.xml.parsers.DocumentBuilderFactory.newInstance(), q, m, d = "";
    p.setValidating(!1);
    p.setNamespaceAware(!0);
    p.setExpandEntityReferences(!1);
    p.setSchema(null);
    m = b.org.xml.sax.EntityResolver({resolveEntity: function (n, d) {
        var k = new b.java.io.FileReader(d);
        return new b.org.xml.sax.InputSource(k)
    }});
    q = p.newDocumentBuilder();
    q.setEntityResolver(m);
    this.byteArrayFromString = function (b, d) {
        var k, e = b.length, c = new Uint8Array(new ArrayBuffer(e));
        for (k = 0; k < e; k += 1)c[k] = b.charCodeAt(k) & 255;
        return c
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.loadXML = function (n, d) {
        var k = new b.java.io.File(n), e = null;
        try {
            e = q.parse(k)
        } catch (c) {
            return print(c), d(c, null)
        }
        d(null, e)
    };
    this.readFile = function (n, q, k) {
        d && (n = d + "/" + n);
        var e = new b.java.io.File(n), c = "binary" === q ?
            "latin1" : q;
        e.isFile() ? ((n = readFile(n, c)) && "binary" === q && (n = g.byteArrayFromString(n, "binary")), k(null, n)) : k(n + " is not a file.", null)
    };
    this.writeFile = function (n, g, k) {
        d && (n = d + "/" + n);
        n = new b.java.io.FileOutputStream(n);
        var e, c = g.length;
        for (e = 0; e < c; e += 1)n.write(g[e]);
        n.close();
        k(null)
    };
    this.deleteFile = function (n, g) {
        d && (n = d + "/" + n);
        var k = new b.java.io.File(n), e = n + Math.random(), e = new b.java.io.File(e);
        k.rename(e) ? (e.deleteOnExit(), g(null)) : g("Could not delete " + n)
    };
    this.read = function (n, g, k, e) {
        d && (n = d + "/" +
            n);
        var c;
        c = n;
        var a = "binary";
        (new b.java.io.File(c)).isFile() ? ("binary" === a && (a = "latin1"), c = readFile(c, a)) : c = null;
        c ? e(null, this.byteArrayFromString(c.substring(g, g + k), "binary")) : e("Cannot read " + n, null)
    };
    this.readFileSync = function (b, d) {
        if (!d)return"";
        var k = readFile(b, d);
        if (null === k)throw"File could not be read.";
        return k
    };
    this.isFile = function (n, g) {
        d && (n = d + "/" + n);
        var k = new b.java.io.File(n);
        g(k.isFile())
    };
    this.getFileSize = function (n, g) {
        d && (n = d + "/" + n);
        var k = new b.java.io.File(n);
        g(k.length())
    };
    this.log =
        h;
    this.assert = function (b, d, k) {
        b || (h("alert", "ASSERTION FAILED: " + d), k && k())
    };
    this.setTimeout = function (b) {
        b();
        return 0
    };
    this.clearTimeout = function () {
    };
    this.libraryPaths = function () {
        return["lib"]
    };
    this.setCurrentDirectory = function (b) {
        d = b
    };
    this.currentDirectory = function () {
        return d
    };
    this.type = function () {
        return"RhinoRuntime"
    };
    this.getDOMImplementation = function () {
        return q.getDOMImplementation()
    };
    this.parseXML = function (d) {
        d = new b.java.io.StringReader(d);
        d = new b.org.xml.sax.InputSource(d);
        return q.parse(d)
    };
    this.exit = quit;
    this.getWindow = function () {
        return null
    }
}
Runtime.create = function () {
    return"undefined" !== String(typeof window) ? new BrowserRuntime(window.document.getElementById("logoutput")) : "undefined" !== String(typeof require) ? new NodeJSRuntime : new RhinoRuntime
};
var runtime = Runtime.create(), core = {}, gui = {}, xmldom = {}, odf = {}, ops = {};
(function () {
    function h(b, d, k) {
        var e = b + "/manifest.json", c, a;
        runtime.log("Loading manifest: " + e);
        try {
            c = runtime.readFileSync(e, "utf-8")
        } catch (l) {
            if (k)runtime.log("No loadable manifest found."); else throw console.log(String(l)), l;
            return
        }
        k = JSON.parse(c);
        for (a in k)k.hasOwnProperty(a) && (d[a] = {dir: b, deps: k[a]})
    }

    function g(b, d, k) {
        function e(f) {
            if (!l[f] && !k(f)) {
                if (a[f])throw"Circular dependency detected for " + f + ".";
                a[f] = !0;
                if (!d[f])throw"Missing dependency information for class " + f + ".";
                var b = d[f], g = b.deps,
                    n, q = g.length;
                for (n = 0; n < q; n += 1)e(g[n]);
                a[f] = !1;
                l[f] = !0;
                c.push(b.dir + "/" + f.replace(".", "/") + ".js")
            }
        }

        var c = [], a = {}, l = {};
        b.forEach(e);
        return c
    }

    function b(b, d) {
        return d = d + ("\n//# sourceURL=" + b) + ("\n//@ sourceURL=" + b)
    }

    function p(d) {
        var g, k;
        for (g = 0; g < d.length; g += 1)k = runtime.readFileSync(d[g], "utf-8"), k = b(d[g], k), eval(k)
    }

    function q(b) {
        b = b.split(".");
        var g, k = d, e = b.length;
        for (g = 0; g < e; g += 1) {
            if (!k.hasOwnProperty(b[g]))return!1;
            k = k[b[g]]
        }
        return!0
    }

    var m, d = {core: core, gui: gui, xmldom: xmldom, odf: odf, ops: ops};
    runtime.loadClasses =
        function (b, d) {
            if (IS_COMPILED_CODE || 0 === b.length)return d && d();
            var k;
            if (!(k = m)) {
                k = [];
                var e = runtime.libraryPaths(), c;
                runtime.currentDirectory() && -1 === e.indexOf(runtime.currentDirectory()) && h(runtime.currentDirectory(), k, !0);
                for (c = 0; c < e.length; c += 1)h(e[c], k)
            }
            m = k;
            b = g(b, m, q);
            if (0 === b.length)return d && d();
            if ("BrowserRuntime" === runtime.type() && d) {
                k = b;
                e = document.currentScript || document.documentElement.lastChild;
                c = document.createDocumentFragment();
                var a, l;
                for (l = 0; l < k.length; l += 1)a = document.createElement("script"),
                    a.type = "text/javascript", a.charset = "utf-8", a.async = !1, a.setAttribute("src", k[l]), c.appendChild(a);
                d && (a.onload = d);
                e.parentNode.insertBefore(c, e)
            } else p(b), d && d()
        };
    runtime.loadClass = function (b, d) {
        runtime.loadClasses([b], d)
    }
})();
(function () {
    var h = function (g) {
        return g
    };
    runtime.getTranslator = function () {
        return h
    };
    runtime.setTranslator = function (g) {
        h = g
    };
    runtime.tr = function (g) {
        var b = h(g);
        return b && "string" === String(typeof b) ? b : g
    }
})();
(function (h) {
    function g(b) {
        if (b.length) {
            var g = b[0];
            runtime.readFile(g, "utf8", function (q, m) {
                function d() {
                    var b;
                    (b = eval(h)) && runtime.exit(b)
                }

                var n = "", n = g.lastIndexOf("/"), h = m, n = -1 !== n ? g.substring(0, n) : ".";
                runtime.setCurrentDirectory(n);
                q ? (runtime.log(q), runtime.exit(1)) : null === h ? (runtime.log("No code found for " + g), runtime.exit(1)) : d.apply(null, b)
            })
        }
    }

    h = h ? Array.prototype.slice.call(h) : [];
    "NodeJSRuntime" === runtime.type() ? g(process.argv.slice(2)) : "RhinoRuntime" === runtime.type() ? g(h) : g(h.slice(1))
})("undefined" !==
    String(typeof arguments) && arguments);
// Input 2
core.Async = function () {
    this.forEach = function (h, g, b) {
        function p(g) {
            d !== m && (g ? (d = m, b(g)) : (d += 1, d === m && b(null)))
        }

        var q, m = h.length, d = 0;
        for (q = 0; q < m; q += 1)g(h[q], p)
    };
    this.destroyAll = function (h, g) {
        function b(p, q) {
            if (q)g(q); else if (p < h.length)h[p](function (g) {
                b(p + 1, g)
            }); else g()
        }

        b(0, void 0)
    }
};
// Input 3
function makeBase64() {
    function h(a) {
        var c, f = a.length, e = new Uint8Array(new ArrayBuffer(f));
        for (c = 0; c < f; c += 1)e[c] = a.charCodeAt(c) & 255;
        return e
    }

    function g(a) {
        var c, f = "", e, b = a.length - 2;
        for (e = 0; e < b; e += 3)c = a[e] << 16 | a[e + 1] << 8 | a[e + 2], f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c >>> 18], f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c >>> 12 & 63], f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c >>> 6 & 63], f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c &
            63];
        e === b + 1 ? (c = a[e] << 4, f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c >>> 6], f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c & 63], f += "==") : e === b && (c = a[e] << 10 | a[e + 1] << 2, f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c >>> 12], f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c >>> 6 & 63], f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c & 63], f += "=");
        return f
    }

    function b(a) {
        a = a.replace(/[^A-Za-z0-9+\/]+/g,
            "");
        var c = a.length, e = new Uint8Array(new ArrayBuffer(3 * c)), b = a.length % 4, l = 0, d, g;
        for (d = 0; d < c; d += 4)g = (f[a.charAt(d)] || 0) << 18 | (f[a.charAt(d + 1)] || 0) << 12 | (f[a.charAt(d + 2)] || 0) << 6 | (f[a.charAt(d + 3)] || 0), e[l] = g >> 16, e[l + 1] = g >> 8 & 255, e[l + 2] = g & 255, l += 3;
        c = 3 * c - [0, 0, 2, 1][b];
        return e.subarray(0, c)
    }

    function p(a) {
        var c, f, e = a.length, b = 0, l = new Uint8Array(new ArrayBuffer(3 * e));
        for (c = 0; c < e; c += 1)f = a[c], 128 > f ? l[b++] = f : (2048 > f ? l[b++] = 192 | f >>> 6 : (l[b++] = 224 | f >>> 12 & 15, l[b++] = 128 | f >>> 6 & 63), l[b++] = 128 | f & 63);
        return l.subarray(0,
            b)
    }

    function q(a) {
        var c, f, e, b, l = a.length, d = new Uint8Array(new ArrayBuffer(l)), g = 0;
        for (c = 0; c < l; c += 1)f = a[c], 128 > f ? d[g++] = f : (c += 1, e = a[c], 224 > f ? d[g++] = (f & 31) << 6 | e & 63 : (c += 1, b = a[c], d[g++] = (f & 15) << 12 | (e & 63) << 6 | b & 63));
        return d.subarray(0, g)
    }

    function m(a) {
        return g(h(a))
    }

    function d(a) {
        return String.fromCharCode.apply(String, b(a))
    }

    function n(a) {
        return q(h(a))
    }

    function r(a) {
        a = q(a);
        for (var c = "", f = 0; f < a.length;)c += String.fromCharCode.apply(String, a.subarray(f, f + 45E3)), f += 45E3;
        return c
    }

    function k(a, c, f) {
        var e, b,
            l, d = "";
        for (l = c; l < f; l += 1)c = a.charCodeAt(l) & 255, 128 > c ? d += String.fromCharCode(c) : (l += 1, e = a.charCodeAt(l) & 255, 224 > c ? d += String.fromCharCode((c & 31) << 6 | e & 63) : (l += 1, b = a.charCodeAt(l) & 255, d += String.fromCharCode((c & 15) << 12 | (e & 63) << 6 | b & 63)));
        return d
    }

    function e(a, c) {
        function f() {
            var l = b + 1E5;
            l > a.length && (l = a.length);
            e += k(a, b, l);
            b = l;
            l = b === a.length;
            c(e, l) && !l && runtime.setTimeout(f, 0)
        }

        var e = "", b = 0;
        1E5 > a.length ? c(k(a, 0, a.length), !0) : ("string" !== typeof a && (a = a.slice()), f())
    }

    function c(a) {
        return p(h(a))
    }

    function a(a) {
        return String.fromCharCode.apply(String,
            p(a))
    }

    function l(a) {
        return String.fromCharCode.apply(String, p(h(a)))
    }

    var f = function (a) {
        var c = {}, f, e;
        f = 0;
        for (e = a.length; f < e; f += 1)c[a.charAt(f)] = f;
        return c
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), s, C, x = runtime.getWindow(), w, v;
    x && x.btoa ? (w = x.btoa, s = function (a) {
        return w(l(a))
    }) : (w = m, s = function (a) {
        return g(c(a))
    });
    x && x.atob ? (v = x.atob, C = function (a) {
        a = v(a);
        return k(a, 0, a.length)
    }) : (v = d, C = function (a) {
        return r(b(a))
    });
    core.Base64 = function () {
        this.convertByteArrayToBase64 = this.convertUTF8ArrayToBase64 =
            g;
        this.convertBase64ToByteArray = this.convertBase64ToUTF8Array = b;
        this.convertUTF16ArrayToByteArray = this.convertUTF16ArrayToUTF8Array = p;
        this.convertByteArrayToUTF16Array = this.convertUTF8ArrayToUTF16Array = q;
        this.convertUTF8StringToBase64 = m;
        this.convertBase64ToUTF8String = d;
        this.convertUTF8StringToUTF16Array = n;
        this.convertByteArrayToUTF16String = this.convertUTF8ArrayToUTF16String = r;
        this.convertUTF8StringToUTF16String = e;
        this.convertUTF16StringToByteArray = this.convertUTF16StringToUTF8Array = c;
        this.convertUTF16ArrayToUTF8String =
            a;
        this.convertUTF16StringToUTF8String = l;
        this.convertUTF16StringToBase64 = s;
        this.convertBase64ToUTF16String = C;
        this.fromBase64 = d;
        this.toBase64 = m;
        this.atob = v;
        this.btoa = w;
        this.utob = l;
        this.btou = e;
        this.encode = s;
        this.encodeURI = function (a) {
            return s(a).replace(/[+\/]/g,function (a) {
                return"+" === a ? "-" : "_"
            }).replace(/\\=+$/, "")
        };
        this.decode = function (a) {
            return C(a.replace(/[\-_]/g, function (a) {
                return"-" === a ? "+" : "/"
            }))
        };
        return this
    };
    return core.Base64
}
core.Base64 = makeBase64();
// Input 4
core.ByteArray = function (h) {
    this.pos = 0;
    this.data = h;
    this.readUInt32LE = function () {
        this.pos += 4;
        var g = this.data, b = this.pos;
        return g[--b] << 24 | g[--b] << 16 | g[--b] << 8 | g[--b]
    };
    this.readUInt16LE = function () {
        this.pos += 2;
        var g = this.data, b = this.pos;
        return g[--b] << 8 | g[--b]
    }
};
// Input 5
core.ByteArrayWriter = function (h) {
    function g(b) {
        b > q - p && (q = Math.max(2 * q, p + b), b = new Uint8Array(new ArrayBuffer(q)), b.set(m), m = b)
    }

    var b = this, p = 0, q = 1024, m = new Uint8Array(new ArrayBuffer(q));
    this.appendByteArrayWriter = function (d) {
        b.appendByteArray(d.getByteArray())
    };
    this.appendByteArray = function (b) {
        var q = b.length;
        g(q);
        m.set(b, p);
        p += q
    };
    this.appendArray = function (b) {
        var q = b.length;
        g(q);
        m.set(b, p);
        p += q
    };
    this.appendUInt16LE = function (d) {
        b.appendArray([d & 255, d >> 8 & 255])
    };
    this.appendUInt32LE = function (d) {
        b.appendArray([d &
            255, d >> 8 & 255, d >> 16 & 255, d >> 24 & 255])
    };
    this.appendString = function (d) {
        b.appendByteArray(runtime.byteArrayFromString(d, h))
    };
    this.getLength = function () {
        return p
    };
    this.getByteArray = function () {
        var b = new Uint8Array(new ArrayBuffer(p));
        b.set(m.subarray(0, p));
        return b
    }
};
// Input 6
core.CSSUnits = function () {
    var h = this, g = {"in": 1, cm: 2.54, mm: 25.4, pt: 72, pc: 12};
    this.convert = function (b, h, q) {
        return b * g[q] / g[h]
    };
    this.convertMeasure = function (b, g) {
        var q, m;
        b && g ? (q = parseFloat(b), m = b.replace(q.toString(), ""), q = h.convert(q, m, g).toString()) : q = "";
        return q
    };
    this.getUnits = function (b) {
        return b.substr(b.length - 2, b.length)
    }
};
// Input 7
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
(function () {
    function h() {
        var b, h, q, m, d, n, r, k, e;
        void 0 === g && (h = (b = runtime.getWindow()) && b.document, n = h.documentElement, r = h.body, g = {rangeBCRIgnoresElementBCR: !1, unscaledRangeClientRects: !1, elementBCRIgnoresBodyScroll: !1}, h && (m = h.createElement("div"), m.style.position = "absolute", m.style.left = "-99999px", m.style.transform = "scale(2)", m.style["-webkit-transform"] = "scale(2)", d = h.createElement("div"), m.appendChild(d), r.appendChild(m), b = h.createRange(), b.selectNode(d), g.rangeBCRIgnoresElementBCR = 0 === b.getClientRects().length,
            d.appendChild(h.createTextNode("Rect transform test")), h = d.getBoundingClientRect(), q = b.getBoundingClientRect(), g.unscaledRangeClientRects = 2 < Math.abs(h.height - q.height), m.style.transform = "", m.style["-webkit-transform"] = "", h = n.style.overflow, q = r.style.overflow, k = r.style.height, e = r.scrollTop, n.style.overflow = "visible", r.style.overflow = "visible", r.style.height = "200%", r.scrollTop = r.scrollHeight, g.elementBCRIgnoresBodyScroll = b.getBoundingClientRect().top !== d.getBoundingClientRect().top, r.scrollTop = e, r.style.height =
            k, r.style.overflow = q, n.style.overflow = h, b.detach(), r.removeChild(m), b = Object.keys(g).map(function (c) {
            return c + ":" + String(g[c])
        }).join(", "), runtime.log("Detected browser quirks - " + b)));
        return g
    }

    var g;
    core.DomUtils = function () {
        function b(e, c) {
            for (var a = 0, b; e.parentNode !== c;)runtime.assert(null !== e.parentNode, "parent is null"), e = e.parentNode;
            for (b = c.firstChild; b !== e;)a += 1, b = b.nextSibling;
            return a
        }

        function g(e, c) {
            return 0 >= e.compareBoundaryPoints(Range.START_TO_START, c) && 0 <= e.compareBoundaryPoints(Range.END_TO_END,
                c)
        }

        function q(e, c) {
            var a = null;
            e.nodeType === Node.TEXT_NODE && (0 === e.length ? (e.parentNode.removeChild(e), c.nodeType === Node.TEXT_NODE && (a = c)) : (c.nodeType === Node.TEXT_NODE && (e.appendData(c.data), c.parentNode.removeChild(c)), a = e));
            return a
        }

        function m(e) {
            for (var c = e.parentNode; e.firstChild;)c.insertBefore(e.firstChild, e);
            c.removeChild(e);
            return c
        }

        function d(e, c) {
            for (var a = e.parentNode, b = e.firstChild, f; b;)f = b.nextSibling, d(b, c), b = f;
            a && c(e) && m(e);
            return a
        }

        function n(e, c) {
            return e === c || Boolean(e.compareDocumentPosition(c) &
                Node.DOCUMENT_POSITION_CONTAINED_BY)
        }

        function r(e, c, a) {
            Object.keys(c).forEach(function (b) {
                var f = b.split(":"), d = f[1], g = a(f[0]), f = c[b], k = typeof f;
                "object" === k ? Object.keys(f).length && (b = g ? e.getElementsByTagNameNS(g, d)[0] || e.ownerDocument.createElementNS(g, b) : e.getElementsByTagName(d)[0] || e.ownerDocument.createElement(b), e.appendChild(b), r(b, f, a)) : g && (runtime.assert("number" === k || "string" === k, "attempting to map unsupported type '" + k + "' (key: " + b + ")"), e.setAttributeNS(g, b, String(f)))
            })
        }

        var k = null;
        this.splitBoundaries =
            function (e) {
                var c, a = [], l, f, d;
                if (e.startContainer.nodeType === Node.TEXT_NODE || e.endContainer.nodeType === Node.TEXT_NODE) {
                    l = e.endContainer;
                    f = e.endContainer.nodeType !== Node.TEXT_NODE ? e.endOffset === e.endContainer.childNodes.length : !1;
                    d = e.endOffset;
                    c = e.endContainer;
                    if (d < c.childNodes.length)for (c = c.childNodes.item(d), d = 0; c.firstChild;)c = c.firstChild; else for (; c.lastChild;)c = c.lastChild, d = c.nodeType === Node.TEXT_NODE ? c.textContent.length : c.childNodes.length;
                    c === l && (l = null);
                    e.setEnd(c, d);
                    d = e.endContainer;
                    0 !==
                        e.endOffset && d.nodeType === Node.TEXT_NODE && (c = d, e.endOffset !== c.length && (a.push(c.splitText(e.endOffset)), a.push(c)));
                    d = e.startContainer;
                    0 !== e.startOffset && d.nodeType === Node.TEXT_NODE && (c = d, e.startOffset !== c.length && (d = c.splitText(e.startOffset), a.push(c), a.push(d), e.setStart(d, 0)));
                    if (null !== l) {
                        for (d = e.endContainer; d.parentNode && d.parentNode !== l;)d = d.parentNode;
                        f = f ? l.childNodes.length : b(d, l);
                        e.setEnd(l, f)
                    }
                }
                return a
            };
        this.containsRange = g;
        this.rangesIntersect = function (b, c) {
            return 0 >= b.compareBoundaryPoints(Range.END_TO_START,
                c) && 0 <= b.compareBoundaryPoints(Range.START_TO_END, c)
        };
        this.getNodesInRange = function (b, c, a) {
            var l = [], f = b.commonAncestorContainer;
            a = b.startContainer.ownerDocument.createTreeWalker(f.nodeType === Node.TEXT_NODE ? f.parentNode : f, a, c, !1);
            var d;
            b.endContainer.childNodes[b.endOffset - 1] ? (f = b.endContainer.childNodes[b.endOffset - 1], d = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY) : (f = b.endContainer, d = Node.DOCUMENT_POSITION_PRECEDING);
            b.startContainer.childNodes[b.startOffset] ? (b = b.startContainer.childNodes[b.startOffset],
                a.currentNode = b) : b.startOffset === (b.startContainer.nodeType === Node.TEXT_NODE ? b.startContainer.length : b.startContainer.childNodes.length) ? (b = b.startContainer, a.currentNode = b, a.lastChild(), b = a.nextNode()) : (b = b.startContainer, a.currentNode = b);
            b && c(b) === NodeFilter.FILTER_ACCEPT && l.push(b);
            for (b = a.nextNode(); b;) {
                c = f.compareDocumentPosition(b);
                if (0 !== c && 0 === (c & d))break;
                l.push(b);
                b = a.nextNode()
            }
            return l
        };
        this.normalizeTextNodes = function (b) {
            b && b.nextSibling && (b = q(b, b.nextSibling));
            b && b.previousSibling && q(b.previousSibling,
                b)
        };
        this.rangeContainsNode = function (b, c) {
            var a = c.ownerDocument.createRange(), l = c.ownerDocument.createRange(), f;
            a.setStart(b.startContainer, b.startOffset);
            a.setEnd(b.endContainer, b.endOffset);
            l.selectNodeContents(c);
            f = g(a, l);
            a.detach();
            l.detach();
            return f
        };
        this.mergeIntoParent = m;
        this.removeUnwantedNodes = d;
        this.getElementsByTagNameNS = function (b, c, a) {
            var l = [];
            b = b.getElementsByTagNameNS(c, a);
            l.length = a = b.length;
            for (c = 0; c < a; c += 1)l[c] = b.item(c);
            return l
        };
        this.containsNode = function (b, c) {
            return b === c || b.contains(c)
        };
        this.comparePoints = function (e, c, a, l) {
            if (e === a)return l - c;
            var f = e.compareDocumentPosition(a);
            2 === f ? f = -1 : 4 === f ? f = 1 : 10 === f ? (c = b(e, a), f = c < l ? 1 : -1) : (l = b(a, e), f = l < c ? -1 : 1);
            return f
        };
        this.adaptRangeDifferenceToZoomLevel = function (b, c) {
            return h().unscaledRangeClientRects ? b : b / c
        };
        this.getBoundingClientRect = function (b) {
            var c = b.ownerDocument, a = h(), l = c.body;
            if ((!1 === a.unscaledRangeClientRects || a.rangeBCRIgnoresElementBCR) && b.nodeType === Node.ELEMENT_NODE)return b = b.getBoundingClientRect(), a.elementBCRIgnoresBodyScroll ?
            {left: b.left + l.scrollLeft, right: b.right + l.scrollLeft, top: b.top + l.scrollTop, bottom: b.bottom + l.scrollTop} : b;
            var f;
            k ? f = k : k = f = c.createRange();
            a = f;
            a.selectNode(b);
            return a.getBoundingClientRect()
        };
        this.mapKeyValObjOntoNode = function (b, c, a) {
            Object.keys(c).forEach(function (l) {
                var f = l.split(":"), d = f[1], f = a(f[0]), g = c[l];
                f ? (d = b.getElementsByTagNameNS(f, d)[0], d || (d = b.ownerDocument.createElementNS(f, l), b.appendChild(d)), d.textContent = g) : runtime.log("Key ignored: " + l)
            })
        };
        this.removeKeyElementsFromNode = function (b, c, a) {
            c.forEach(function (c) {
                var f = c.split(":"), d = f[1];
                (f = a(f[0])) ? (d = b.getElementsByTagNameNS(f, d)[0]) ? d.parentNode.removeChild(d) : runtime.log("Element for " + c + " not found.") : runtime.log("Property Name ignored: " + c)
            })
        };
        this.getKeyValRepresentationOfNode = function (b, c) {
            for (var a = {}, l = b.firstElementChild, f; l;) {
                if (f = c(l.namespaceURI))a[f + ":" + l.localName] = l.textContent;
                l = l.nextElementSibling
            }
            return a
        };
        this.mapObjOntoNode = r;
        (function (b) {
            var c, a;
            a = runtime.getWindow();
            null !== a && (c = a.navigator.appVersion.toLowerCase(),
                a = -1 === c.indexOf("chrome") && (-1 !== c.indexOf("applewebkit") || -1 !== c.indexOf("safari")), c = c.indexOf("msie"), a || c) && (b.containsNode = n)
        })(this)
    };
    return core.DomUtils
})();
// Input 8
core.Cursor = function (h, g) {
    function b(c) {
        c.parentNode && (n.push(c.previousSibling), n.push(c.nextSibling), c.parentNode.removeChild(c))
    }

    function p(c, a, b) {
        if (a.nodeType === Node.TEXT_NODE) {
            runtime.assert(Boolean(a), "putCursorIntoTextNode: invalid container");
            var f = a.parentNode;
            runtime.assert(Boolean(f), "putCursorIntoTextNode: container without parent");
            runtime.assert(0 <= b && b <= a.length, "putCursorIntoTextNode: offset is out of bounds");
            0 === b ? f.insertBefore(c, a) : (b !== a.length && a.splitText(b), f.insertBefore(c,
                a.nextSibling))
        } else a.nodeType === Node.ELEMENT_NODE && a.insertBefore(c, a.childNodes.item(b));
        n.push(c.previousSibling);
        n.push(c.nextSibling)
    }

    var q = h.createElementNS("urn:webodf:names:cursor", "cursor"), m = h.createElementNS("urn:webodf:names:cursor", "anchor"), d, n = [], r = h.createRange(), k, e = new core.DomUtils;
    this.getNode = function () {
        return q
    };
    this.getAnchorNode = function () {
        return m.parentNode ? m : q
    };
    this.getSelectedRange = function () {
        if(r.startContainer.nodeName!="#text")
        {
        k ? (r.setStartBefore(q), r.collapse(!0)) : (r.setStartAfter(d ? m : q), r.setEndBefore(d ?
            q : m));
        }
        return r
    };
    this.setSelectedRange = function (c, a) {
        r && r !== c && r.detach();
        r = c;
        d = !1 !== a;
        (k = c.collapsed) ? (b(m), b(q), p(q, c.startContainer, c.startOffset)) : (b(m), b(q), p(d ? q : m, c.endContainer, c.endOffset), p(d ? m : q, c.startContainer, c.startOffset));
        n.forEach(e.normalizeTextNodes);
        n.length = 0
    };
    this.hasForwardSelection = function () {
        return d
    };
    this.remove = function () {
        b(q);
        n.forEach(e.normalizeTextNodes);
        n.length = 0
    };
    q.setAttributeNS("urn:webodf:names:cursor", "memberId", g);
    m.setAttributeNS("urn:webodf:names:cursor", "memberId",
        g)
};
// Input 9
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
core.Destroyable = function () {
};
core.Destroyable.prototype.destroy = function (h) {
};
// Input 10
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
core.EventNotifier = function (h) {
    var g = {};
    this.emit = function (b, h) {
        var q, m;
        runtime.assert(g.hasOwnProperty(b), 'unknown event fired "' + b + '"');
        m = g[b];
        for (q = 0; q < m.length; q += 1)m[q](h)
    };
    this.subscribe = function (b, h) {
        runtime.assert(g.hasOwnProperty(b), 'tried to subscribe to unknown event "' + b + '"');
        g[b].push(h)
    };
    this.unsubscribe = function (b, h) {
        var q;
        runtime.assert(g.hasOwnProperty(b), 'tried to unsubscribe from unknown event "' + b + '"');
        q = g[b].indexOf(h);
        runtime.assert(-1 !== q, 'tried to unsubscribe unknown callback from event "' +
            b + '"');
        -1 !== q && g[b].splice(q, 1)
    };
    (function () {
        var b, p;
        for (b = 0; b < h.length; b += 1)p = h[b], runtime.assert(!g.hasOwnProperty(p), 'Duplicated event ids: "' + p + '" registered more than once.'), g[p] = []
    })()
};
// Input 11
/*

 Copyright (C) 2012 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
core.LoopWatchDog = function (h, g) {
    var b = Date.now(), p = 0;
    this.check = function () {
        var q;
        if (h && (q = Date.now(), q - b > h))throw runtime.log("alert", "watchdog timeout"), "timeout!";
        if (0 < g && (p += 1, p > g))throw runtime.log("alert", "watchdog loop overflow"), "loop overflow";
    }
};
// Input 12
core.PositionIterator = function (h, g, b, p) {
    function q() {
        this.acceptNode = function (a) {
            return!a || a.nodeType === l && 0 === a.length ? C : s
        }
    }

    function m(a) {
        this.acceptNode = function (c) {
            return!c || c.nodeType === l && 0 === c.length ? C : a.acceptNode(c)
        }
    }

    function d() {
        var a = e.currentNode, b = a.nodeType;
        c = b === l ? a.length - 1 : b === f ? 1 : 0
    }

    function n() {
        if (null === e.previousSibling()) {
            if (!e.parentNode() || e.currentNode === h)return e.firstChild(), !1;
            c = 0
        } else d();
        return!0
    }

    function r() {
        var b = e.currentNode, f;
        f = a(b);
        if (b !== h)for (b = b.parentNode; b &&
            b !== h;)a(b) === C && (e.currentNode = b, f = C), b = b.parentNode;
        f === C ? (c = 1, b = k.nextPosition()) : b = f === s ? !0 : k.nextPosition();
        b && runtime.assert(a(e.currentNode) === s, "moveToAcceptedNode did not result in walker being on an accepted node");
        return b
    }

    var k = this, e, c, a, l = Node.TEXT_NODE, f = Node.ELEMENT_NODE, s = NodeFilter.FILTER_ACCEPT, C = NodeFilter.FILTER_REJECT;
    this.nextPosition = function () {
        var a = e.currentNode, b = a.nodeType;
        if (a === h)return!1;
        if (0 === c && b === f)null === e.firstChild() && (c = 1); else if (b === l && c + 1 < a.length)c += 1; else if (null !==
            e.nextSibling())c = 0; else if (e.parentNode())c = 1; else return!1;
        return!0
    };
    this.previousPosition = function () {
        var a = !0, b = e.currentNode;
        0 === c ? a = n() : b.nodeType === l ? c -= 1 : null !== e.lastChild() ? d() : b === h ? a = !1 : c = 0;
        return a
    };
    this.previousNode = n;
    this.container = function () {
        var a = e.currentNode, b = a.nodeType;
        0 === c && b !== l && (a = a.parentNode);
        return a
    };
    this.rightNode = function () {
        var b = e.currentNode, d = b.nodeType;
        if (d === l && c === b.length)for (b = b.nextSibling; b && a(b) !== s;)b = b.nextSibling; else d === f && 1 === c && (b = null);
        return b
    };
    this.leftNode =
        function () {
            var b = e.currentNode;
            if (0 === c)for (b = b.previousSibling; b && a(b) !== s;)b = b.previousSibling; else if (b.nodeType === f)for (b = b.lastChild; b && a(b) !== s;)b = b.previousSibling;
            return b
        };
    this.getCurrentNode = function () {
        return e.currentNode
    };
    this.unfilteredDomOffset = function () {
        if (e.currentNode.nodeType === l)return c;
        for (var a = 0, b = e.currentNode, b = 1 === c ? b.lastChild : b.previousSibling; b;)a += 1, b = b.previousSibling;
        return a
    };
    this.getPreviousSibling = function () {
        var a = e.currentNode, c = e.previousSibling();
        e.currentNode =
            a;
        return c
    };
    this.getNextSibling = function () {
        var a = e.currentNode, c = e.nextSibling();
        e.currentNode = a;
        return c
    };
    this.setPositionBeforeElement = function (a) {
        runtime.assert(Boolean(a), "setPositionBeforeElement called without element");
        e.currentNode = a;
        c = 0;
        return r()
    };
    this.setUnfilteredPosition = function (a, b) {
        runtime.assert(Boolean(a), "PositionIterator.setUnfilteredPosition called without container");
        e.currentNode = a;
        if (a.nodeType === l)return c = b, runtime.assert(b <= a.length, "Error in setPosition: " + b + " > " + a.length),
            runtime.assert(0 <= b, "Error in setPosition: " + b + " < 0"), b === a.length && (e.nextSibling() ? c = 0 : e.parentNode() ? c = 1 : runtime.assert(!1, "Error in setUnfilteredPosition: position not valid.")), !0;
        b < a.childNodes.length ? (e.currentNode = a.childNodes.item(b), c = 0) : c = 1;
        return r()
    };
    this.moveToEnd = function () {
        e.currentNode = h;
        c = 1
    };
    this.moveToEndOfNode = function (a) {
        a.nodeType === l ? k.setUnfilteredPosition(a, a.length) : (e.currentNode = a, c = 1)
    };
    this.isBeforeNode = function () {
        return 0 === c
    };
    this.getNodeFilter = function () {
        return a
    };
    a = (b ? new m(b) : new q).acceptNode;
    a.acceptNode = a;
    g = g || NodeFilter.SHOW_ALL;
    runtime.assert(h.nodeType !== Node.TEXT_NODE, "Internet Explorer doesn't allow tree walker roots to be text nodes");
    e = h.ownerDocument.createTreeWalker(h, g, a, p);
    c = 0;
    null === e.firstChild() && (c = 1)
};
// Input 13
core.PositionFilter = function () {
};
core.PositionFilter.FilterResult = {FILTER_ACCEPT: 1, FILTER_REJECT: 2, FILTER_SKIP: 3};
core.PositionFilter.prototype.acceptPosition = function (h) {
};
(function () {
    return core.PositionFilter
})();
// Input 14
core.PositionFilterChain = function () {
    var h = [], g = core.PositionFilter.FilterResult.FILTER_ACCEPT, b = core.PositionFilter.FilterResult.FILTER_REJECT;
    this.acceptPosition = function (p) {
        var q;
        for (q = 0; q < h.length; q += 1)if (h[q].acceptPosition(p) === b)return b;
        return g
    };
    this.addFilter = function (b) {
        h.push(b)
    }
};
// Input 15
core.zip_HuftNode = function () {
    this.n = this.b = this.e = 0;
    this.t = null
};
core.zip_HuftList = function () {
    this.list = this.next = null
};
core.RawInflate = function () {
    function h(a, c, b, f, l, e) {
        this.BMAX = 16;
        this.N_MAX = 288;
        this.status = 0;
        this.root = null;
        this.m = 0;
        var d = Array(this.BMAX + 1), g, k, q, h, y, m, n, p = Array(this.BMAX + 1), s, H, r, t = new core.zip_HuftNode, M = Array(this.BMAX);
        h = Array(this.N_MAX);
        var v, I = Array(this.BMAX + 1), O, D, u;
        u = this.root = null;
        for (y = 0; y < d.length; y++)d[y] = 0;
        for (y = 0; y < p.length; y++)p[y] = 0;
        for (y = 0; y < M.length; y++)M[y] = null;
        for (y = 0; y < h.length; y++)h[y] = 0;
        for (y = 0; y < I.length; y++)I[y] = 0;
        g = 256 < c ? a[256] : this.BMAX;
        s = a;
        H = 0;
        y = c;
        do d[s[H]]++, H++;
        while (0 < --y);
        if (d[0] === c)this.root = null, this.status = this.m = 0; else {
            for (m = 1; m <= this.BMAX && 0 === d[m]; m++);
            n = m;
            e < m && (e = m);
            for (y = this.BMAX; 0 !== y && 0 === d[y]; y--);
            q = y;
            e > y && (e = y);
            for (O = 1 << m; m < y; m++, O <<= 1)if (O -= d[m], 0 > O) {
                this.status = 2;
                this.m = e;
                return
            }
            O -= d[y];
            if (0 > O)this.status = 2, this.m = e; else {
                d[y] += O;
                I[1] = m = 0;
                s = d;
                H = 1;
                for (r = 2; 0 < --y;)m += s[H++], I[r++] = m;
                s = a;
                y = H = 0;
                do m = s[H++], 0 !== m && (h[I[m]++] = y); while (++y < c);
                c = I[q];
                I[0] = y = 0;
                s = h;
                H = 0;
                h = -1;
                v = p[0] = 0;
                r = null;
                D = 0;
                for (n = n - 1 + 1; n <= q; n++)for (a = d[n]; 0 < a--;) {
                    for (; n > v + p[1 + h];) {
                        v +=
                            p[1 + h];
                        h++;
                        D = q - v;
                        D = D > e ? e : D;
                        m = n - v;
                        k = 1 << m;
                        if (k > a + 1)for (k -= a + 1, r = n; ++m < D;) {
                            k <<= 1;
                            if (k <= d[++r])break;
                            k -= d[r]
                        }
                        v + m > g && v < g && (m = g - v);
                        D = 1 << m;
                        p[1 + h] = m;
                        r = Array(D);
                        for (k = 0; k < D; k++)r[k] = new core.zip_HuftNode;
                        u = null === u ? this.root = new core.zip_HuftList : u.next = new core.zip_HuftList;
                        u.next = null;
                        u.list = r;
                        M[h] = r;
                        0 < h && (I[h] = y, t.b = p[h], t.e = 16 + m, t.t = r, m = (y & (1 << v) - 1) >> v - p[h], M[h - 1][m].e = t.e, M[h - 1][m].b = t.b, M[h - 1][m].n = t.n, M[h - 1][m].t = t.t)
                    }
                    t.b = n - v;
                    H >= c ? t.e = 99 : s[H] < b ? (t.e = 256 > s[H] ? 16 : 15, t.n = s[H++]) : (t.e = l[s[H] - b], t.n = f[s[H++] -
                        b]);
                    k = 1 << n - v;
                    for (m = y >> v; m < D; m += k)r[m].e = t.e, r[m].b = t.b, r[m].n = t.n, r[m].t = t.t;
                    for (m = 1 << n - 1; 0 !== (y & m); m >>= 1)y ^= m;
                    for (y ^= m; (y & (1 << v) - 1) !== I[h];)v -= p[h], h--
                }
                this.m = p[1];
                this.status = 0 !== O && 1 !== q ? 1 : 0
            }
        }
    }

    function g(b) {
        for (; a < b;) {
            var f = c, l;
            l = t.length === y ? -1 : t[y++];
            c = f | l << a;
            a += 8
        }
    }

    function b(a) {
        return c & M[a]
    }

    function p(b) {
        c >>= b;
        a -= b
    }

    function q(a, c, f) {
        var e, k, y;
        if (0 === f)return 0;
        for (y = 0; ;) {
            g(v);
            k = x.list[b(v)];
            for (e = k.e; 16 < e;) {
                if (99 === e)return-1;
                p(k.b);
                e -= 16;
                g(e);
                k = k.t[b(e)];
                e = k.e
            }
            p(k.b);
            if (16 === e)n &= 32767, a[c +
                y++] = d[n++] = k.n; else {
                if (15 === e)break;
                g(e);
                s = k.n + b(e);
                p(e);
                g(u);
                k = w.list[b(u)];
                for (e = k.e; 16 < e;) {
                    if (99 === e)return-1;
                    p(k.b);
                    e -= 16;
                    g(e);
                    k = k.t[b(e)];
                    e = k.e
                }
                p(k.b);
                g(e);
                C = n - k.n - b(e);
                for (p(e); 0 < s && y < f;)s--, C &= 32767, n &= 32767, a[c + y++] = d[n++] = d[C++]
            }
            if (y === f)return f
        }
        l = -1;
        return y
    }

    function m(a, c, f) {
        var e, l, d, k, y, m, n, s = Array(316);
        for (e = 0; e < s.length; e++)s[e] = 0;
        g(5);
        m = 257 + b(5);
        p(5);
        g(5);
        n = 1 + b(5);
        p(5);
        g(4);
        e = 4 + b(4);
        p(4);
        if (286 < m || 30 < n)return-1;
        for (l = 0; l < e; l++)g(3), s[I[l]] = b(3), p(3);
        for (l = e; 19 > l; l++)s[I[l]] = 0;
        v =
            7;
        l = new h(s, 19, 19, null, null, v);
        if (0 !== l.status)return-1;
        x = l.root;
        v = l.m;
        k = m + n;
        for (e = d = 0; e < k;)if (g(v), y = x.list[b(v)], l = y.b, p(l), l = y.n, 16 > l)s[e++] = d = l; else if (16 === l) {
            g(2);
            l = 3 + b(2);
            p(2);
            if (e + l > k)return-1;
            for (; 0 < l--;)s[e++] = d
        } else {
            17 === l ? (g(3), l = 3 + b(3), p(3)) : (g(7), l = 11 + b(7), p(7));
            if (e + l > k)return-1;
            for (; 0 < l--;)s[e++] = 0;
            d = 0
        }
        v = 9;
        l = new h(s, m, 257, O, D, v);
        0 === v && (l.status = 1);
        if (0 !== l.status)return-1;
        x = l.root;
        v = l.m;
        for (e = 0; e < n; e++)s[e] = s[e + m];
        u = 6;
        l = new h(s, n, 0, H, Q, u);
        w = l.root;
        u = l.m;
        return 0 === u && 257 < m || 0 !== l.status ?
            -1 : q(a, c, f)
    }

    var d = [], n, r = null, k, e, c, a, l, f, s, C, x, w, v, u, t, y, M = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], O = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], D = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], H = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], Q = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], I = [16, 17, 18, 0, 8, 7, 9, 6,
        10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], J;
    this.inflate = function (M, I) {
        d.length = 65536;
        a = c = n = 0;
        l = -1;
        f = !1;
        s = C = 0;
        x = null;
        t = M;
        y = 0;
        var G = new Uint8Array(new ArrayBuffer(I));
        a:for (var T = 0, z; T < I && (!f || -1 !== l);) {
            if (0 < s) {
                if (0 !== l)for (; 0 < s && T < I;)s--, C &= 32767, n &= 32767, G[0 + T] = d[n] = d[C], T += 1, n += 1, C += 1; else {
                    for (; 0 < s && T < I;)s -= 1, n &= 32767, g(8), G[0 + T] = d[n] = b(8), T += 1, n += 1, p(8);
                    0 === s && (l = -1)
                }
                if (T === I)break
            }
            if (-1 === l) {
                if (f)break;
                g(1);
                0 !== b(1) && (f = !0);
                p(1);
                g(2);
                l = b(2);
                p(2);
                x = null;
                s = 0
            }
            switch (l) {
                case 0:
                    z = G;
                    var U = 0 + T, S = I - T, K = void 0, K = a &
                        7;
                    p(K);
                    g(16);
                    K = b(16);
                    p(16);
                    g(16);
                    if (K !== (~c & 65535))z = -1; else {
                        p(16);
                        s = K;
                        for (K = 0; 0 < s && K < S;)s--, n &= 32767, g(8), z[U + K++] = d[n++] = b(8), p(8);
                        0 === s && (l = -1);
                        z = K
                    }
                    break;
                case 1:
                    if (null !== x)z = q(G, 0 + T, I - T); else b:{
                        z = G;
                        U = 0 + T;
                        S = I - T;
                        if (null === r) {
                            for (var P = void 0, K = Array(288), P = void 0, P = 0; 144 > P; P++)K[P] = 8;
                            for (P = 144; 256 > P; P++)K[P] = 9;
                            for (P = 256; 280 > P; P++)K[P] = 7;
                            for (P = 280; 288 > P; P++)K[P] = 8;
                            e = 7;
                            P = new h(K, 288, 257, O, D, e);
                            if (0 !== P.status) {
                                alert("HufBuild error: " + P.status);
                                z = -1;
                                break b
                            }
                            r = P.root;
                            e = P.m;
                            for (P = 0; 30 > P; P++)K[P] = 5;
                            J = 5;
                            P = new h(K, 30, 0, H, Q, J);
                            if (1 < P.status) {
                                r = null;
                                alert("HufBuild error: " + P.status);
                                z = -1;
                                break b
                            }
                            k = P.root;
                            J = P.m
                        }
                        x = r;
                        w = k;
                        v = e;
                        u = J;
                        z = q(z, U, S)
                    }
                    break;
                case 2:
                    z = null !== x ? q(G, 0 + T, I - T) : m(G, 0 + T, I - T);
                    break;
                default:
                    z = -1
            }
            if (-1 === z)break a;
            T += z
        }
        t = new Uint8Array(new ArrayBuffer(0));
        return G
    }
};
// Input 16
core.ScheduledTask = function (h, g) {
    function b() {
        m && (runtime.clearTimeout(q), m = !1)
    }

    function p() {
        b();
        h.apply(void 0, d);
        d = null
    }

    var q, m = !1, d = [];
    this.trigger = function () {
        d = Array.prototype.slice.call(arguments);
        m || (m = !0, q = runtime.setTimeout(p, g))
    };
    this.triggerImmediate = function () {
        d = Array.prototype.slice.call(arguments);
        p()
    };
    this.processRequests = function () {
        m && p()
    };
    this.cancel = b;
    this.destroy = function (d) {
        b();
        d()
    }
};
// Input 17
/*

 Copyright (C) 2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
core.StepIterator = function (h, g) {
    function b() {
        e = null;
        a = c = void 0
    }

    function p() {
        void 0 === a && (a = h.acceptPosition(g) === k);
        return a
    }

    function q(a, c) {
        b();
        return g.setUnfilteredPosition(a, c)
    }

    function m() {
        e || (e = g.container());
        return e
    }

    function d() {
        void 0 === c && (c = g.unfilteredDomOffset());
        return c
    }

    function n() {
        for (b(); g.nextPosition();)if (b(), p())return!0;
        return!1
    }

    function r() {
        for (b(); g.previousPosition();)if (b(), p())return!0;
        return!1
    }

    var k = core.PositionFilter.FilterResult.FILTER_ACCEPT, e, c, a;
    this.isStep = p;
    this.setPosition =
        q;
    this.container = m;
    this.offset = d;
    this.nextStep = n;
    this.previousStep = r;
    this.roundToClosestStep = function () {
        var a = m(), c = d(), b = p();
        b || (b = r(), b || (q(a, c), b = n()));
        return b
    };
    this.roundToPreviousStep = function () {
        var a = p();
        a || (a = r());
        return a
    };
    this.roundToNextStep = function () {
        var a = p();
        a || (a = n());
        return a
    }
};
// Input 18
core.UnitTest = function () {
};
core.UnitTest.prototype.setUp = function () {
};
core.UnitTest.prototype.tearDown = function () {
};
core.UnitTest.prototype.description = function () {
};
core.UnitTest.prototype.tests = function () {
};
core.UnitTest.prototype.asyncTests = function () {
};
core.UnitTest.provideTestAreaDiv = function () {
    var h = runtime.getWindow().document, g = h.getElementById("testarea");
    runtime.assert(!g, 'Unclean test environment, found a div with id "testarea".');
    g = h.createElement("div");
    g.setAttribute("id", "testarea");
    h.body.appendChild(g);
    return g
};
core.UnitTest.cleanupTestAreaDiv = function () {
    var h = runtime.getWindow().document, g = h.getElementById("testarea");
    runtime.assert(!!g && g.parentNode === h.body, 'Test environment broken, found no div with id "testarea" below body.');
    h.body.removeChild(g)
};
core.UnitTest.createOdtDocument = function (h, g) {
    var b = "<?xml version='1.0' encoding='UTF-8'?>", b = b + "<office:document";
    Object.keys(g).forEach(function (h) {
        b += " xmlns:" + h + '="' + g[h] + '"'
    });
    b += ">";
    b += h;
    b += "</office:document>";
    return runtime.parseXML(b)
};
core.UnitTestLogger = function () {
    var h = [], g = 0, b = 0, p = "", q = "";
    this.startTest = function (m, d) {
        h = [];
        g = 0;
        p = m;
        q = d;
        b = (new Date).getTime()
    };
    this.endTest = function () {
        var m = (new Date).getTime();
        return{description: q, suite: [p, q], success: 0 === g, log: h, time: m - b}
    };
    this.debug = function (b) {
        h.push({category: "debug", message: b})
    };
    this.fail = function (b) {
        g += 1;
        h.push({category: "fail", message: b})
    };
    this.pass = function (b) {
        h.push({category: "pass", message: b})
    }
};
core.UnitTestRunner = function (h, g) {
    function b(a) {
        r += 1;
        c ? g.debug(a) : g.fail(a)
    }

    function p(a, c) {
        var f;
        try {
            if (a.length !== c.length)return b("array of length " + a.length + " should be " + c.length + " long"), !1;
            for (f = 0; f < a.length; f += 1)if (a[f] !== c[f])return b(a[f] + " should be " + c[f] + " at array index " + f), !1
        } catch (e) {
            return!1
        }
        return!0
    }

    function q(a, c, f) {
        var e = a.attributes, d = e.length, k, g, m;
        for (k = 0; k < d; k += 1)if (g = e.item(k), "xmlns" !== g.prefix && "urn:webodf:names:steps" !== g.namespaceURI) {
            m = c.getAttributeNS(g.namespaceURI,
                g.localName);
            if (!c.hasAttributeNS(g.namespaceURI, g.localName))return b("Attribute " + g.localName + " with value " + g.value + " was not present"), !1;
            if (m !== g.value)return b("Attribute " + g.localName + " was " + m + " should be " + g.value), !1
        }
        return f ? !0 : q(c, a, !0)
    }

    function m(a, c) {
        var f, e;
        f = a.nodeType;
        e = c.nodeType;
        if (f !== e)return b("Nodetype '" + f + "' should be '" + e + "'"), !1;
        if (f === Node.TEXT_NODE) {
            if (a.data === c.data)return!0;
            b("Textnode data '" + a.data + "' should be '" + c.data + "'");
            return!1
        }
        runtime.assert(f === Node.ELEMENT_NODE,
            "Only textnodes and elements supported.");
        if (a.namespaceURI !== c.namespaceURI)return b("namespace '" + a.namespaceURI + "' should be '" + c.namespaceURI + "'"), !1;
        if (a.localName !== c.localName)return b("localName '" + a.localName + "' should be '" + c.localName + "'"), !1;
        if (!q(a, c, !1))return!1;
        f = a.firstChild;
        for (e = c.firstChild; f;) {
            if (!e)return b("Nodetype '" + f.nodeType + "' is unexpected here."), !1;
            if (!m(f, e))return!1;
            f = f.nextSibling;
            e = e.nextSibling
        }
        return e ? (b("Nodetype '" + e.nodeType + "' is missing here."), !1) : !0
    }

    function d(a, c) {
        return 0 === c ? a === c && 1 / a === 1 / c : a === c ? !0 : null === a || null === c ? !1 : "number" === typeof c && isNaN(c) ? "number" === typeof a && isNaN(a) : Object.prototype.toString.call(c) === Object.prototype.toString.call([]) ? p(a, c) : "object" === typeof c && "object" === typeof a ? c.constructor === Element || c.constructor === Node ? m(a, c) : e(a, c) : !1
    }

    function n(a, c, f) {
        "string" === typeof c && "string" === typeof f || g.debug("WARN: shouldBe() expects string arguments");
        var e, k;
        try {
            k = eval(c)
        } catch (m) {
            e = m
        }
        a = eval(f);
        e ? b(c + " should be " + a + ". Threw exception " +
            e) : d(k, a) ? g.pass(c + " is " + f) : String(typeof k) === String(typeof a) ? (f = 0 === k && 0 > 1 / k ? "-0" : String(k), b(c + " should be " + a + ". Was " + f + ".")) : b(c + " should be " + a + " (of type " + typeof a + "). Was " + k + " (of type " + typeof k + ").")
    }

    var r = 0, k, e, c = !1;
    this.resourcePrefix = function () {
        return h
    };
    this.beginExpectFail = function () {
        k = r;
        c = !0
    };
    this.endExpectFail = function () {
        var a = k === r;
        c = !1;
        r = k;
        a && (r += 1, g.fail("Expected at least one failed test, but none registered."))
    };
    e = function (a, c) {
        var f = Object.keys(a), e = Object.keys(c);
        f.sort();
        e.sort();
        return p(f, e) && Object.keys(a).every(function (f) {
            var e = a[f], k = c[f];
            return d(e, k) ? !0 : (b(e + " should be " + k + " for key " + f), !1)
        })
    };
    this.areNodesEqual = m;
    this.shouldBeNull = function (a, c) {
        n(a, c, "null")
    };
    this.shouldBeNonNull = function (a, c) {
        var f, e;
        try {
            e = eval(c)
        } catch (d) {
            f = d
        }
        f ? b(c + " should be non-null. Threw exception " + f) : null !== e ? g.pass(c + " is non-null.") : b(c + " should be non-null. Was " + e)
    };
    this.shouldBe = n;
    this.testFailed = b;
    this.countFailedTests = function () {
        return r
    };
    this.name = function (a) {
        var c, b, e =
            [], d = a.length;
        e.length = d;
        for (c = 0; c < d; c += 1) {
            b = Runtime.getFunctionName(a[c]) || "";
            if ("" === b)throw"Found a function without a name.";
            e[c] = {f: a[c], name: b}
        }
        return e
    }
};
core.UnitTester = function () {
    function h(b, d) {
        return"<span style='color:blue;cursor:pointer' onclick='" + d + "'>" + b + "</span>"
    }

    function g(d) {
        b.reporter && b.reporter(d)
    }

    var b = this, p = 0, q = new core.UnitTestLogger, m = {}, d = "BrowserRuntime" === runtime.type();
    this.resourcePrefix = "";
    this.reporter = function (b) {
        var g, k;
        d ? runtime.log("<span>Running " + h(b.description, 'runTest("' + b.suite[0] + '","' + b.description + '")') + "</span>") : runtime.log("Running " + b.description);
        if (!b.success)for (g = 0; g < b.log.length; g += 1)k = b.log[g], runtime.log(k.category,
            k.message)
    };
    this.runTests = function (n, r, k) {
        function e(b) {
            if (0 === b.length)m[c] = f, p += a.countFailedTests(), r(); else {
                C = b[0].f;
                var d = b[0].name, h = !0 === b[0].expectFail;
                v = a.countFailedTests();
                k.length && -1 === k.indexOf(d) ? e(b.slice(1)) : (l.setUp(), q.startTest(c, d), h && a.beginExpectFail(), C(function () {
                    h && a.endExpectFail();
                    g(q.endTest());
                    l.tearDown();
                    f[d] = v === a.countFailedTests();
                    e(b.slice(1))
                }))
            }
        }

        var c = Runtime.getFunctionName(n) || "", a = new core.UnitTestRunner(b.resourcePrefix, q), l = new n(a), f = {}, s, C, x, w, v;
        if (m.hasOwnProperty(c))runtime.log("Test " +
            c + " has already run."); else {
            d ? runtime.log("<span>Running " + h(c, 'runSuite("' + c + '");') + ": " + l.description() + "</span>") : runtime.log("Running " + c + ": " + l.description);
            x = l.tests();
            for (s = 0; s < x.length; s += 1)if (C = x[s].f, n = x[s].name, w = !0 === x[s].expectFail, !k.length || -1 !== k.indexOf(n)) {
                v = a.countFailedTests();
                l.setUp();
                q.startTest(c, n);
                w && a.beginExpectFail();
                try {
                    C()
                } catch (u) {
                    a.testFailed("Unexpected exception encountered: " + u.toString() + "\n" + u.stack)
                }
                w && a.endExpectFail();
                g(q.endTest());
                l.tearDown();
                f[n] = v === a.countFailedTests()
            }
            e(l.asyncTests())
        }
    };
    this.countFailedTests = function () {
        return p
    };
    this.results = function () {
        return m
    }
};
// Input 19
core.Utils = function () {
    function h(g, b) {
        if (b && Array.isArray(b)) {
            g = g || [];
            if (!Array.isArray(g))throw"Destination is not an array.";
            g = g.concat(b.map(function (b) {
                return h(null, b)
            }))
        } else if (b && "object" === typeof b) {
            g = g || {};
            if ("object" !== typeof g)throw"Destination is not an object.";
            Object.keys(b).forEach(function (p) {
                g[p] = h(g[p], b[p])
            })
        } else g = b;
        return g
    }

    this.hashString = function (g) {
        var b = 0, h, q;
        h = 0;
        for (q = g.length; h < q; h += 1)b = (b << 5) - b + g.charCodeAt(h), b |= 0;
        return b
    };
    this.mergeObjects = function (g, b) {
        Object.keys(b).forEach(function (p) {
            g[p] =
                h(g[p], b[p])
        });
        return g
    }
};
// Input 20
/*

 WebODF
 Copyright (c) 2010 Jos van den Oever
 Licensed under the ... License:

 Project home: http://www.webodf.org/
 */
core.Zip = function (h, g) {
    function b(a) {
        var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728,
            853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
            4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804,
            225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542,
            2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035,
            2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], b, f, e = a.length, d = 0, d = 0;
        b = -1;
        for (f = 0; f < e; f += 1)d = (b ^ a[f]) & 255, d = c[d], b = b >>> 8 ^ d;
        return b ^ -1
    }

    function p(a) {
        return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 15, a >> 5 & 63, (a & 31) << 1)
    }

    function q(a) {
        var c = a.getFullYear();
        return 1980 > c ? 0 : c - 1980 <<
            25 | a.getMonth() + 1 << 21 | a.getDate() << 16 | a.getHours() << 11 | a.getMinutes() << 5 | a.getSeconds() >> 1
    }

    function m(a, c) {
        var b, e, d, l, k, g, m, h = this;
        this.load = function (c) {
            if (null !== h.data)c(null, h.data); else {
                var b = k + 34 + e + d + 256;
                b + m > f && (b = f - m);
                runtime.read(a, m, b, function (b, f) {
                    if (b || null === f)c(b, f); else a:{
                        var e = f, d = new core.ByteArray(e), m = d.readUInt32LE(), y;
                        if (67324752 !== m)c("File entry signature is wrong." + m.toString() + " " + e.length.toString(), null); else {
                            d.pos += 22;
                            m = d.readUInt16LE();
                            y = d.readUInt16LE();
                            d.pos += m + y;
                            if (l) {
                                e =
                                    e.subarray(d.pos, d.pos + k);
                                if (k !== e.length) {
                                    c("The amount of compressed bytes read was " + e.length.toString() + " instead of " + k.toString() + " for " + h.filename + " in " + a + ".", null);
                                    break a
                                }
                                e = C(e, g)
                            } else e = e.subarray(d.pos, d.pos + g);
                            g !== e.length ? c("The amount of bytes read was " + e.length.toString() + " instead of " + g.toString() + " for " + h.filename + " in " + a + ".", null) : (h.data = e, c(null, e))
                        }
                    }
                })
            }
        };
        this.set = function (a, c, b, f) {
            h.filename = a;
            h.data = c;
            h.compressed = b;
            h.date = f
        };
        this.error = null;
        c && (b = c.readUInt32LE(), 33639248 !==
            b ? this.error = "Central directory entry has wrong signature at position " + (c.pos - 4).toString() + ' for file "' + a + '": ' + c.data.length.toString() : (c.pos += 6, l = c.readUInt16LE(), this.date = p(c.readUInt32LE()), c.readUInt32LE(), k = c.readUInt32LE(), g = c.readUInt32LE(), e = c.readUInt16LE(), d = c.readUInt16LE(), b = c.readUInt16LE(), c.pos += 8, m = c.readUInt32LE(), this.filename = runtime.byteArrayToString(c.data.subarray(c.pos, c.pos + e), "utf8"), this.data = null, c.pos += e + d + b))
    }

    function d(a, c) {
        if (22 !== a.length)c("Central directory length should be 22.",
            x); else {
            var b = new core.ByteArray(a), e;
            e = b.readUInt32LE();
            101010256 !== e ? c("Central directory signature is wrong: " + e.toString(), x) : (e = b.readUInt16LE(), 0 !== e ? c("Zip files with non-zero disk numbers are not supported.", x) : (e = b.readUInt16LE(), 0 !== e ? c("Zip files with non-zero disk numbers are not supported.", x) : (e = b.readUInt16LE(), s = b.readUInt16LE(), e !== s ? c("Number of entries is inconsistent.", x) : (e = b.readUInt32LE(), b = b.readUInt16LE(), b = f - 22 - e, runtime.read(h, b, f - b, function (a, b) {
                if (a || null === b)c(a, x); else a:{
                    var f =
                        new core.ByteArray(b), e, d;
                    l = [];
                    for (e = 0; e < s; e += 1) {
                        d = new m(h, f);
                        if (d.error) {
                            c(d.error, x);
                            break a
                        }
                        l[l.length] = d
                    }
                    c(null, x)
                }
            })))))
        }
    }

    function n(a, c) {
        var b = null, f, e;
        for (e = 0; e < l.length; e += 1)if (f = l[e], f.filename === a) {
            b = f;
            break
        }
        b ? b.data ? c(null, b.data) : b.load(c) : c(a + " not found.", null)
    }

    function r(a) {
        var c = new core.ByteArrayWriter("utf8"), f = 0;
        c.appendArray([80, 75, 3, 4, 20, 0, 0, 0, 0, 0]);
        a.data && (f = a.data.length);
        c.appendUInt32LE(q(a.date));
        c.appendUInt32LE(a.data ? b(a.data) : 0);
        c.appendUInt32LE(f);
        c.appendUInt32LE(f);
        c.appendUInt16LE(a.filename.length);
        c.appendUInt16LE(0);
        c.appendString(a.filename);
        a.data && c.appendByteArray(a.data);
        return c
    }

    function k(a, c) {
        var f = new core.ByteArrayWriter("utf8"), e = 0;
        f.appendArray([80, 75, 1, 2, 20, 0, 20, 0, 0, 0, 0, 0]);
        a.data && (e = a.data.length);
        f.appendUInt32LE(q(a.date));
        f.appendUInt32LE(a.data ? b(a.data) : 0);
        f.appendUInt32LE(e);
        f.appendUInt32LE(e);
        f.appendUInt16LE(a.filename.length);
        f.appendArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        f.appendUInt32LE(c);
        f.appendString(a.filename);
        return f
    }

    function e(a, c) {
        if (a === l.length)c(null); else {
            var b = l[a];
            null !== b.data ? e(a + 1, c) : b.load(function (b) {
                b ? c(b) : e(a + 1, c)
            })
        }
    }

    function c(a, c) {
        e(0, function (b) {
            if (b)c(b); else {
                var f, e, d = new core.ByteArrayWriter("utf8"), g = [0];
                for (f = 0; f < l.length; f += 1)d.appendByteArrayWriter(r(l[f])), g.push(d.getLength());
                b = d.getLength();
                for (f = 0; f < l.length; f += 1)e = l[f], d.appendByteArrayWriter(k(e, g[f]));
                f = d.getLength() - b;
                d.appendArray([80, 75, 5, 6, 0, 0, 0, 0]);
                d.appendUInt16LE(l.length);
                d.appendUInt16LE(l.length);
                d.appendUInt32LE(f);
                d.appendUInt32LE(b);
                d.appendArray([0, 0]);
                a(d.getByteArray())
            }
        })
    }

    function a(a, b) {
        c(function (c) {
            runtime.writeFile(a, c, b)
        }, b)
    }

    var l, f, s, C = (new core.RawInflate).inflate, x = this, w = new core.Base64;
    this.load = n;
    this.save = function (a, c, b, f) {
        var e, d;
        for (e = 0; e < l.length; e += 1)if (d = l[e], d.filename === a) {
            d.set(a, c, b, f);
            return
        }
        d = new m(h);
        d.set(a, c, b, f);
        l.push(d)
    };
    this.remove = function (a) {
        var c, b;
        for (c = 0; c < l.length; c += 1)if (b = l[c], b.filename === a)return l.splice(c, 1), !0;
        return!1
    };
    this.write = function (c) {
        a(h, c)
    };
    this.writeAs = a;
    this.createByteArray =
        c;
    this.loadContentXmlAsFragments = function (a, c) {
        x.loadAsString(a, function (a, b) {
            if (a)return c.rootElementReady(a);
            c.rootElementReady(null, b, !0)
        })
    };
    this.loadAsString = function (a, c) {
        n(a, function (a, b) {
            if (a || null === b)return c(a, null);
            var f = runtime.byteArrayToString(b, "utf8");
            c(null, f)
        })
    };
    this.loadAsDOM = function (a, c) {
        x.loadAsString(a, function (a, b) {
            if (a || null === b)c(a, null); else {
                var f = (new DOMParser).parseFromString(b, "text/xml");
                c(null, f)
            }
        })
    };
    this.loadAsDataURL = function (a, c, b) {
        n(a, function (a, f) {
            if (a || !f)return b(a,
                null);
            var e = 0, d;
            c || (c = 80 === f[1] && 78 === f[2] && 71 === f[3] ? "image/png" : 255 === f[0] && 216 === f[1] && 255 === f[2] ? "image/jpeg" : 71 === f[0] && 73 === f[1] && 70 === f[2] ? "image/gif" : "");
            for (d = "data:" + c + ";base64,"; e < f.length;)d += w.convertUTF8ArrayToBase64(f.subarray(e, Math.min(e + 45E3, f.length))), e += 45E3;
            b(null, d)
        })
    };
    this.getEntries = function () {
        return l.slice()
    };
    f = -1;
    null === g ? l = [] : runtime.getFileSize(h, function (a) {
        f = a;
        0 > f ? g("File '" + h + "' cannot be read.", x) : runtime.read(h, f - 22, 22, function (a, c) {
            a || null === g || null === c ? g(a, x) :
                d(c, g)
        })
    })
};
// Input 21
xmldom.LSSerializerFilter = function () {
};
xmldom.LSSerializerFilter.prototype.acceptNode = function (h) {
};
// Input 22
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.OdfNodeFilter = function () {
    this.acceptNode = function (h) {
        return"http://www.w3.org/1999/xhtml" === h.namespaceURI ? NodeFilter.FILTER_SKIP : h.namespaceURI && h.namespaceURI.match(/^urn:webodf:/) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    }
};
// Input 23
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.Namespaces = {namespaceMap: {db: "urn:oasis:names:tc:opendocument:xmlns:database:1.0", dc: "http://purl.org/dc/elements/1.1/", dr3d: "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", draw: "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", chart: "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", fo: "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", form: "urn:oasis:names:tc:opendocument:xmlns:form:1.0", meta: "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", number: "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    office: "urn:oasis:names:tc:opendocument:xmlns:office:1.0", presentation: "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", style: "urn:oasis:names:tc:opendocument:xmlns:style:1.0", svg: "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", table: "urn:oasis:names:tc:opendocument:xmlns:table:1.0", text: "urn:oasis:names:tc:opendocument:xmlns:text:1.0", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace"}, prefixMap: {}, dbns: "urn:oasis:names:tc:opendocument:xmlns:database:1.0",
    dcns: "http://purl.org/dc/elements/1.1/", dr3dns: "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", drawns: "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", chartns: "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", fons: "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", formns: "urn:oasis:names:tc:opendocument:xmlns:form:1.0", metans: "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", numberns: "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", officens: "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    presentationns: "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", stylens: "urn:oasis:names:tc:opendocument:xmlns:style:1.0", svgns: "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", tablens: "urn:oasis:names:tc:opendocument:xmlns:table:1.0", textns: "urn:oasis:names:tc:opendocument:xmlns:text:1.0", xlinkns: "http://www.w3.org/1999/xlink", xmlns: "http://www.w3.org/XML/1998/namespace"};
(function () {
    var h = odf.Namespaces.namespaceMap, g = odf.Namespaces.prefixMap, b;
    for (b in h)h.hasOwnProperty(b) && (g[h[b]] = b)
})();
odf.Namespaces.forEachPrefix = function (h) {
    var g = odf.Namespaces.namespaceMap, b;
    for (b in g)g.hasOwnProperty(b) && h(b, g[b])
};
odf.Namespaces.lookupNamespaceURI = function (h) {
    var g = null;
    odf.Namespaces.namespaceMap.hasOwnProperty(h) && (g = odf.Namespaces.namespaceMap[h]);
    return g
};
odf.Namespaces.lookupPrefix = function (h) {
    var g = odf.Namespaces.prefixMap;
    return g.hasOwnProperty(h) ? g[h] : null
};
odf.Namespaces.lookupNamespaceURI.lookupNamespaceURI = odf.Namespaces.lookupNamespaceURI;
// Input 24
xmldom.XPathIterator = function () {
};
xmldom.XPathIterator.prototype.next = function () {
};
xmldom.XPathIterator.prototype.reset = function () {
};
function createXPathSingleton() {
    function h(b, c, a) {
        return-1 !== b && (b < c || -1 === c) && (b < a || -1 === a)
    }

    function g(b) {
        for (var c = [], a = 0, d = b.length, f; a < d;) {
            var g = b, m = d, q = c, n = "", p = [], r = g.indexOf("[", a), t = g.indexOf("/", a), y = g.indexOf("=", a);
            h(t, r, y) ? (n = g.substring(a, t), a = t + 1) : h(r, t, y) ? (n = g.substring(a, r), a = k(g, r, p)) : h(y, t, r) ? (n = g.substring(a, y), a = y) : (n = g.substring(a, m), a = m);
            q.push({location: n, predicates: p});
            if (a < d && "=" === b[a]) {
                f = b.substring(a + 1, d);
                if (2 < f.length && ("'" === f[0] || '"' === f[0]))f = f.slice(1, f.length - 1);
                else try {
                    f = parseInt(f, 10)
                } catch (M) {
                }
                a = d
            }
        }
        return{steps: c, value: f}
    }

    function b() {
        var b = null, c = !1;
        this.setNode = function (a) {
            b = a
        };
        this.reset = function () {
            c = !1
        };
        this.next = function () {
            var a = c ? null : b;
            c = !0;
            return a
        }
    }

    function p(b, c, a) {
        this.reset = function () {
            b.reset()
        };
        this.next = function () {
            for (var d = b.next(); d;) {
                d.nodeType === Node.ELEMENT_NODE && (d = d.getAttributeNodeNS(c, a));
                if (d)break;
                d = b.next()
            }
            return d
        }
    }

    function q(b, c) {
        var a = b.next(), d = null;
        this.reset = function () {
            b.reset();
            a = b.next();
            d = null
        };
        this.next = function () {
            for (; a;) {
                if (d)if (c &&
                    d.firstChild)d = d.firstChild; else {
                    for (; !d.nextSibling && d !== a;)d = d.parentNode;
                    d === a ? a = b.next() : d = d.nextSibling
                } else {
                    do(d = a.firstChild) || (a = b.next()); while (a && !d)
                }
                if (d && d.nodeType === Node.ELEMENT_NODE)return d
            }
            return null
        }
    }

    function m(b, c) {
        this.reset = function () {
            b.reset()
        };
        this.next = function () {
            for (var a = b.next(); a && !c(a);)a = b.next();
            return a
        }
    }

    function d(b, c, a) {
        c = c.split(":", 2);
        var d = a(c[0]), f = c[1];
        return new m(b, function (a) {
            return a.localName === f && a.namespaceURI === d
        })
    }

    function n(e, c, a) {
        var d = new b, f = r(d,
            c, a), k = c.value;
        return void 0 === k ? new m(e, function (a) {
            d.setNode(a);
            f.reset();
            return null !== f.next()
        }) : new m(e, function (a) {
            d.setNode(a);
            f.reset();
            return(a = f.next()) ? a.nodeValue === k : !1
        })
    }

    var r, k;
    k = function (b, c, a) {
        for (var d = c, f = b.length, k = 0; d < f;)"]" === b[d] ? (k -= 1, 0 >= k && a.push(g(b.substring(c, d)))) : "[" === b[d] && (0 >= k && (c = d + 1), k += 1), d += 1;
        return d
    };
    r = function (b, c, a) {
        var k, f, g, m;
        for (k = 0; k < c.steps.length; k += 1) {
            g = c.steps[k];
            f = g.location;
            if ("" === f)b = new q(b, !1); else if ("@" === f[0]) {
                f = f.substr(1).split(":", 2);
                m =
                    a(f[0]);
                if (!m)throw"No namespace associated with the prefix " + f[0];
                b = new p(b, m, f[1])
            } else"." !== f && (b = new q(b, !1), -1 !== f.indexOf(":") && (b = d(b, f, a)));
            for (f = 0; f < g.predicates.length; f += 1)m = g.predicates[f], b = n(b, m, a)
        }
        return b
    };
    return{getODFElementsWithXPath: function (e, c, a) {
        var d = e.ownerDocument, f = [], k = null;
        if (d && "function" === typeof d.evaluate)for (a = d.evaluate(c, e, a, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null), k = a.iterateNext(); null !== k;)k.nodeType === Node.ELEMENT_NODE && f.push(k), k = a.iterateNext(); else {
            f =
                new b;
            f.setNode(e);
            e = g(c);
            f = r(f, e, a);
            e = [];
            for (a = f.next(); a;)e.push(a), a = f.next();
            f = e
        }
        return f
    }}
}
xmldom.XPath = createXPathSingleton();
// Input 25
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.StyleInfo = function () {
    function h(a, c) {
        var b, f, e, d, k, g = 0;
        if (b = O[a.localName])if (e = b[a.namespaceURI])g = e.length;
        for (b = 0; b < g; b += 1)f = e[b], d = f.ns, k = f.localname, (f = a.getAttributeNS(d, k)) && a.setAttributeNS(d, y[d] + k, c + f);
        for (e = a.firstElementChild; e;)h(e, c), e = e.nextElementSibling
    }

    function g(a, c) {
        var b, f, e, d, k, l = 0;
        if (b = O[a.localName])if (e = b[a.namespaceURI])l = e.length;
        for (b = 0; b < l; b += 1)if (f = e[b], d = f.ns, k = f.localname, f = a.getAttributeNS(d, k))f = f.replace(c, ""), a.setAttributeNS(d, y[d] + k, f);
        for (e = a.firstElementChild; e;)g(e,
            c), e = e.nextElementSibling
    }

    function b(a, c) {
        var b, f, e, d, k, g = 0;
        if (b = O[a.localName])if (e = b[a.namespaceURI])g = e.length;
        for (b = 0; b < g; b += 1)if (d = e[b], f = d.ns, k = d.localname, f = a.getAttributeNS(f, k))c = c || {}, d = d.keyname, c.hasOwnProperty(d) ? c[d][f] = 1 : (k = {}, k[f] = 1, c[d] = k);
        return c
    }

    function p(a, c) {
        var f, e;
        b(a, c);
        for (f = a.firstChild; f;)f.nodeType === Node.ELEMENT_NODE && (e = f, p(e, c)), f = f.nextSibling
    }

    function q(a, c, b) {
        this.key = a;
        this.name = c;
        this.family = b;
        this.requires = {}
    }

    function m(a, c, b) {
        var f = a + '"' + c, e = b[f];
        e || (e = b[f] =
            new q(f, a, c));
        return e
    }

    function d(a, c, b) {
        var f, e, k, g, l, h = 0;
        f = a.getAttributeNS(v, "name");
        g = a.getAttributeNS(v, "family");
        f && g && (c = m(f, g, b));
        if (c) {
            if (f = O[a.localName])if (k = f[a.namespaceURI])h = k.length;
            for (f = 0; f < h; f += 1)if (g = k[f], e = g.ns, l = g.localname, e = a.getAttributeNS(e, l))g = g.keyname, g = m(e, g, b), c.requires[g.key] = g
        }
        for (a = a.firstElementChild; a;)d(a, c, b), a = a.nextElementSibling;
        return b
    }

    function n(a, c) {
        var b = c[a.family];
        b || (b = c[a.family] = {});
        b[a.name] = 1;
        Object.keys(a.requires).forEach(function (b) {
            n(a.requires[b],
                c)
        })
    }

    function r(a, c) {
        var b = d(a, null, {});
        Object.keys(b).forEach(function (a) {
            a = b[a];
            var f = c[a.family];
            f && f.hasOwnProperty(a.name) && n(a, c)
        })
    }

    function k(a, c) {
        function b(c) {
            (c = d.getAttributeNS(v, c)) && (a[c] = !0)
        }

        var f = ["font-name", "font-name-asian", "font-name-complex"], e, d;
        for (e = c && c.firstElementChild; e;)d = e, f.forEach(b), k(a, d), e = e.nextElementSibling
    }

    function e(a, c) {
        function b(a) {
            var f = k.getAttributeNS(v, a);
            f && c.hasOwnProperty(f) && k.setAttributeNS(v, "style:" + a, c[f])
        }

        var f = ["font-name", "font-name-asian",
            "font-name-complex"], d, k;
        for (d = a && a.firstElementChild; d;)k = d, f.forEach(b), e(k, c), d = d.nextElementSibling
    }

    var c = odf.Namespaces.chartns, a = odf.Namespaces.dbns, l = odf.Namespaces.dr3dns, f = odf.Namespaces.drawns, s = odf.Namespaces.formns, C = odf.Namespaces.numberns, x = odf.Namespaces.officens, w = odf.Namespaces.presentationns, v = odf.Namespaces.stylens, u = odf.Namespaces.tablens, t = odf.Namespaces.textns, y = {"urn:oasis:names:tc:opendocument:xmlns:chart:1.0": "chart:", "urn:oasis:names:tc:opendocument:xmlns:database:1.0": "db:",
        "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0": "dr3d:", "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0": "draw:", "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0": "fo:", "urn:oasis:names:tc:opendocument:xmlns:form:1.0": "form:", "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": "number:", "urn:oasis:names:tc:opendocument:xmlns:office:1.0": "office:", "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0": "presentation:", "urn:oasis:names:tc:opendocument:xmlns:style:1.0": "style:", "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0": "svg:",
        "urn:oasis:names:tc:opendocument:xmlns:table:1.0": "table:", "urn:oasis:names:tc:opendocument:xmlns:text:1.0": "chart:", "http://www.w3.org/XML/1998/namespace": "xml:"}, M = {text: [
        {ens: v, en: "tab-stop", ans: v, a: "leader-text-style"},
        {ens: v, en: "drop-cap", ans: v, a: "style-name"},
        {ens: t, en: "notes-configuration", ans: t, a: "citation-body-style-name"},
        {ens: t, en: "notes-configuration", ans: t, a: "citation-style-name"},
        {ens: t, en: "a", ans: t, a: "style-name"},
        {ens: t, en: "alphabetical-index", ans: t, a: "style-name"},
        {ens: t, en: "linenumbering-configuration",
            ans: t, a: "style-name"},
        {ens: t, en: "list-level-style-number", ans: t, a: "style-name"},
        {ens: t, en: "ruby-text", ans: t, a: "style-name"},
        {ens: t, en: "span", ans: t, a: "style-name"},
        {ens: t, en: "a", ans: t, a: "visited-style-name"},
        {ens: v, en: "text-properties", ans: v, a: "text-line-through-text-style"},
        {ens: t, en: "alphabetical-index-source", ans: t, a: "main-entry-style-name"},
        {ens: t, en: "index-entry-bibliography", ans: t, a: "style-name"},
        {ens: t, en: "index-entry-chapter", ans: t, a: "style-name"},
        {ens: t, en: "index-entry-link-end", ans: t, a: "style-name"},
        {ens: t, en: "index-entry-link-start", ans: t, a: "style-name"},
        {ens: t, en: "index-entry-page-number", ans: t, a: "style-name"},
        {ens: t, en: "index-entry-span", ans: t, a: "style-name"},
        {ens: t, en: "index-entry-tab-stop", ans: t, a: "style-name"},
        {ens: t, en: "index-entry-text", ans: t, a: "style-name"},
        {ens: t, en: "index-title-template", ans: t, a: "style-name"},
        {ens: t, en: "list-level-style-bullet", ans: t, a: "style-name"},
        {ens: t, en: "outline-level-style", ans: t, a: "style-name"}
    ], paragraph: [
        {ens: f, en: "caption", ans: f, a: "text-style-name"},
        {ens: f,
            en: "circle", ans: f, a: "text-style-name"},
        {ens: f, en: "connector", ans: f, a: "text-style-name"},
        {ens: f, en: "control", ans: f, a: "text-style-name"},
        {ens: f, en: "custom-shape", ans: f, a: "text-style-name"},
        {ens: f, en: "ellipse", ans: f, a: "text-style-name"},
        {ens: f, en: "frame", ans: f, a: "text-style-name"},
        {ens: f, en: "line", ans: f, a: "text-style-name"},
        {ens: f, en: "measure", ans: f, a: "text-style-name"},
        {ens: f, en: "path", ans: f, a: "text-style-name"},
        {ens: f, en: "polygon", ans: f, a: "text-style-name"},
        {ens: f, en: "polyline", ans: f, a: "text-style-name"},
        {ens: f, en: "rect", ans: f, a: "text-style-name"},
        {ens: f, en: "regular-polygon", ans: f, a: "text-style-name"},
        {ens: x, en: "annotation", ans: f, a: "text-style-name"},
        {ens: s, en: "column", ans: s, a: "text-style-name"},
        {ens: v, en: "style", ans: v, a: "next-style-name"},
        {ens: u, en: "body", ans: u, a: "paragraph-style-name"},
        {ens: u, en: "even-columns", ans: u, a: "paragraph-style-name"},
        {ens: u, en: "even-rows", ans: u, a: "paragraph-style-name"},
        {ens: u, en: "first-column", ans: u, a: "paragraph-style-name"},
        {ens: u, en: "first-row", ans: u, a: "paragraph-style-name"},
        {ens: u, en: "last-column", ans: u, a: "paragraph-style-name"},
        {ens: u, en: "last-row", ans: u, a: "paragraph-style-name"},
        {ens: u, en: "odd-columns", ans: u, a: "paragraph-style-name"},
        {ens: u, en: "odd-rows", ans: u, a: "paragraph-style-name"},
        {ens: t, en: "notes-configuration", ans: t, a: "default-style-name"},
        {ens: t, en: "alphabetical-index-entry-template", ans: t, a: "style-name"},
        {ens: t, en: "bibliography-entry-template", ans: t, a: "style-name"},
        {ens: t, en: "h", ans: t, a: "style-name"},
        {ens: t, en: "illustration-index-entry-template", ans: t, a: "style-name"},
        {ens: t, en: "index-source-style", ans: t, a: "style-name"},
        {ens: t, en: "object-index-entry-template", ans: t, a: "style-name"},
        {ens: t, en: "p", ans: t, a: "style-name"},
        {ens: t, en: "table-index-entry-template", ans: t, a: "style-name"},
        {ens: t, en: "table-of-content-entry-template", ans: t, a: "style-name"},
        {ens: t, en: "table-index-entry-template", ans: t, a: "style-name"},
        {ens: t, en: "user-index-entry-template", ans: t, a: "style-name"},
        {ens: v, en: "page-layout-properties", ans: v, a: "register-truth-ref-style-name"}
    ], chart: [
        {ens: c, en: "axis", ans: c,
            a: "style-name"},
        {ens: c, en: "chart", ans: c, a: "style-name"},
        {ens: c, en: "data-label", ans: c, a: "style-name"},
        {ens: c, en: "data-point", ans: c, a: "style-name"},
        {ens: c, en: "equation", ans: c, a: "style-name"},
        {ens: c, en: "error-indicator", ans: c, a: "style-name"},
        {ens: c, en: "floor", ans: c, a: "style-name"},
        {ens: c, en: "footer", ans: c, a: "style-name"},
        {ens: c, en: "grid", ans: c, a: "style-name"},
        {ens: c, en: "legend", ans: c, a: "style-name"},
        {ens: c, en: "mean-value", ans: c, a: "style-name"},
        {ens: c, en: "plot-area", ans: c, a: "style-name"},
        {ens: c, en: "regression-curve",
            ans: c, a: "style-name"},
        {ens: c, en: "series", ans: c, a: "style-name"},
        {ens: c, en: "stock-gain-marker", ans: c, a: "style-name"},
        {ens: c, en: "stock-loss-marker", ans: c, a: "style-name"},
        {ens: c, en: "stock-range-line", ans: c, a: "style-name"},
        {ens: c, en: "subtitle", ans: c, a: "style-name"},
        {ens: c, en: "title", ans: c, a: "style-name"},
        {ens: c, en: "wall", ans: c, a: "style-name"}
    ], section: [
        {ens: t, en: "alphabetical-index", ans: t, a: "style-name"},
        {ens: t, en: "bibliography", ans: t, a: "style-name"},
        {ens: t, en: "illustration-index", ans: t, a: "style-name"},
        {ens: t, en: "index-title", ans: t, a: "style-name"},
        {ens: t, en: "object-index", ans: t, a: "style-name"},
        {ens: t, en: "section", ans: t, a: "style-name"},
        {ens: t, en: "table-of-content", ans: t, a: "style-name"},
        {ens: t, en: "table-index", ans: t, a: "style-name"},
        {ens: t, en: "user-index", ans: t, a: "style-name"}
    ], ruby: [
        {ens: t, en: "ruby", ans: t, a: "style-name"}
    ], table: [
        {ens: a, en: "query", ans: a, a: "style-name"},
        {ens: a, en: "table-representation", ans: a, a: "style-name"},
        {ens: u, en: "background", ans: u, a: "style-name"},
        {ens: u, en: "table", ans: u, a: "style-name"}
    ],
        "table-column": [
            {ens: a, en: "column", ans: a, a: "style-name"},
            {ens: u, en: "table-column", ans: u, a: "style-name"}
        ], "table-row": [
            {ens: a, en: "query", ans: a, a: "default-row-style-name"},
            {ens: a, en: "table-representation", ans: a, a: "default-row-style-name"},
            {ens: u, en: "table-row", ans: u, a: "style-name"}
        ], "table-cell": [
            {ens: a, en: "column", ans: a, a: "default-cell-style-name"},
            {ens: u, en: "table-column", ans: u, a: "default-cell-style-name"},
            {ens: u, en: "table-row", ans: u, a: "default-cell-style-name"},
            {ens: u, en: "body", ans: u, a: "style-name"},
            {ens: u, en: "covered-table-cell", ans: u, a: "style-name"},
            {ens: u, en: "even-columns", ans: u, a: "style-name"},
            {ens: u, en: "covered-table-cell", ans: u, a: "style-name"},
            {ens: u, en: "even-columns", ans: u, a: "style-name"},
            {ens: u, en: "even-rows", ans: u, a: "style-name"},
            {ens: u, en: "first-column", ans: u, a: "style-name"},
            {ens: u, en: "first-row", ans: u, a: "style-name"},
            {ens: u, en: "last-column", ans: u, a: "style-name"},
            {ens: u, en: "last-row", ans: u, a: "style-name"},
            {ens: u, en: "odd-columns", ans: u, a: "style-name"},
            {ens: u, en: "odd-rows", ans: u, a: "style-name"},
            {ens: u, en: "table-cell", ans: u, a: "style-name"}
        ], graphic: [
            {ens: l, en: "cube", ans: f, a: "style-name"},
            {ens: l, en: "extrude", ans: f, a: "style-name"},
            {ens: l, en: "rotate", ans: f, a: "style-name"},
            {ens: l, en: "scene", ans: f, a: "style-name"},
            {ens: l, en: "sphere", ans: f, a: "style-name"},
            {ens: f, en: "caption", ans: f, a: "style-name"},
            {ens: f, en: "circle", ans: f, a: "style-name"},
            {ens: f, en: "connector", ans: f, a: "style-name"},
            {ens: f, en: "control", ans: f, a: "style-name"},
            {ens: f, en: "custom-shape", ans: f, a: "style-name"},
            {ens: f, en: "ellipse", ans: f, a: "style-name"},
            {ens: f, en: "frame", ans: f, a: "style-name"},
            {ens: f, en: "g", ans: f, a: "style-name"},
            {ens: f, en: "line", ans: f, a: "style-name"},
            {ens: f, en: "measure", ans: f, a: "style-name"},
            {ens: f, en: "page-thumbnail", ans: f, a: "style-name"},
            {ens: f, en: "path", ans: f, a: "style-name"},
            {ens: f, en: "polygon", ans: f, a: "style-name"},
            {ens: f, en: "polyline", ans: f, a: "style-name"},
            {ens: f, en: "rect", ans: f, a: "style-name"},
            {ens: f, en: "regular-polygon", ans: f, a: "style-name"},
            {ens: x, en: "annotation", ans: f, a: "style-name"}
        ], presentation: [
            {ens: l, en: "cube", ans: w,
                a: "style-name"},
            {ens: l, en: "extrude", ans: w, a: "style-name"},
            {ens: l, en: "rotate", ans: w, a: "style-name"},
            {ens: l, en: "scene", ans: w, a: "style-name"},
            {ens: l, en: "sphere", ans: w, a: "style-name"},
            {ens: f, en: "caption", ans: w, a: "style-name"},
            {ens: f, en: "circle", ans: w, a: "style-name"},
            {ens: f, en: "connector", ans: w, a: "style-name"},
            {ens: f, en: "control", ans: w, a: "style-name"},
            {ens: f, en: "custom-shape", ans: w, a: "style-name"},
            {ens: f, en: "ellipse", ans: w, a: "style-name"},
            {ens: f, en: "frame", ans: w, a: "style-name"},
            {ens: f, en: "g", ans: w, a: "style-name"},
            {ens: f, en: "line", ans: w, a: "style-name"},
            {ens: f, en: "measure", ans: w, a: "style-name"},
            {ens: f, en: "page-thumbnail", ans: w, a: "style-name"},
            {ens: f, en: "path", ans: w, a: "style-name"},
            {ens: f, en: "polygon", ans: w, a: "style-name"},
            {ens: f, en: "polyline", ans: w, a: "style-name"},
            {ens: f, en: "rect", ans: w, a: "style-name"},
            {ens: f, en: "regular-polygon", ans: w, a: "style-name"},
            {ens: x, en: "annotation", ans: w, a: "style-name"}
        ], "drawing-page": [
            {ens: f, en: "page", ans: f, a: "style-name"},
            {ens: w, en: "notes", ans: f, a: "style-name"},
            {ens: v, en: "handout-master",
                ans: f, a: "style-name"},
            {ens: v, en: "master-page", ans: f, a: "style-name"}
        ], "list-style": [
            {ens: t, en: "list", ans: t, a: "style-name"},
            {ens: t, en: "numbered-paragraph", ans: t, a: "style-name"},
            {ens: t, en: "list-item", ans: t, a: "style-override"},
            {ens: v, en: "style", ans: v, a: "list-style-name"}
        ], data: [
            {ens: v, en: "style", ans: v, a: "data-style-name"},
            {ens: v, en: "style", ans: v, a: "percentage-data-style-name"},
            {ens: w, en: "date-time-decl", ans: v, a: "data-style-name"},
            {ens: t, en: "creation-date", ans: v, a: "data-style-name"},
            {ens: t, en: "creation-time",
                ans: v, a: "data-style-name"},
            {ens: t, en: "database-display", ans: v, a: "data-style-name"},
            {ens: t, en: "date", ans: v, a: "data-style-name"},
            {ens: t, en: "editing-duration", ans: v, a: "data-style-name"},
            {ens: t, en: "expression", ans: v, a: "data-style-name"},
            {ens: t, en: "meta-field", ans: v, a: "data-style-name"},
            {ens: t, en: "modification-date", ans: v, a: "data-style-name"},
            {ens: t, en: "modification-time", ans: v, a: "data-style-name"},
            {ens: t, en: "print-date", ans: v, a: "data-style-name"},
            {ens: t, en: "print-time", ans: v, a: "data-style-name"},
            {ens: t,
                en: "table-formula", ans: v, a: "data-style-name"},
            {ens: t, en: "time", ans: v, a: "data-style-name"},
            {ens: t, en: "user-defined", ans: v, a: "data-style-name"},
            {ens: t, en: "user-field-get", ans: v, a: "data-style-name"},
            {ens: t, en: "user-field-input", ans: v, a: "data-style-name"},
            {ens: t, en: "variable-get", ans: v, a: "data-style-name"},
            {ens: t, en: "variable-input", ans: v, a: "data-style-name"},
            {ens: t, en: "variable-set", ans: v, a: "data-style-name"}
        ], "page-layout": [
            {ens: w, en: "notes", ans: v, a: "page-layout-name"},
            {ens: v, en: "handout-master", ans: v,
                a: "page-layout-name"},
            {ens: v, en: "master-page", ans: v, a: "page-layout-name"}
        ]}, O, D = xmldom.XPath;
    this.collectUsedFontFaces = k;
    this.changeFontFaceNames = e;
    this.UsedStyleList = function (a, c) {
        var b = {};
        this.uses = function (a) {
            var c = a.localName, e = a.getAttributeNS(f, "name") || a.getAttributeNS(v, "name");
            a = "style" === c ? a.getAttributeNS(v, "family") : a.namespaceURI === C ? "data" : c;
            return(a = b[a]) ? 0 < a[e] : !1
        };
        p(a, b);
        c && r(c, b)
    };
    this.hasDerivedStyles = function (a, c, b) {
        var f = b.getAttributeNS(v, "name");
        b = b.getAttributeNS(v, "family");
        return D.getODFElementsWithXPath(a, "//style:*[@style:parent-style-name='" + f + "'][@style:family='" + b + "']", c).length ? !0 : !1
    };
    this.prefixStyleNames = function (a, c, b) {
        var e;
        if (a) {
            for (e = a.firstChild; e;) {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var d = e, k = c, g = d.getAttributeNS(f, "name"), l = void 0;
                    g ? l = f : (g = d.getAttributeNS(v, "name")) && (l = v);
                    l && d.setAttributeNS(l, y[l] + "name", k + g)
                }
                e = e.nextSibling
            }
            h(a, c);
            b && h(b, c)
        }
    };
    this.removePrefixFromStyleNames = function (a, c, b) {
        var e = RegExp("^" + c);
        if (a) {
            for (c = a.firstChild; c;) {
                if (c.nodeType ===
                    Node.ELEMENT_NODE) {
                    var d = c, k = e, l = d.getAttributeNS(f, "name"), m = void 0;
                    l ? m = f : (l = d.getAttributeNS(v, "name")) && (m = v);
                    m && (l = l.replace(k, ""), d.setAttributeNS(m, y[m] + "name", l))
                }
                c = c.nextSibling
            }
            g(a, e);
            b && g(b, e)
        }
    };
    this.determineStylesForNode = b;
    O = function () {
        var a, c, b, f, e, d = {}, k, g, l, m;
        for (b in M)if (M.hasOwnProperty(b))for (f = M[b], c = f.length, a = 0; a < c; a += 1)e = f[a], l = e.en, m = e.ens, d.hasOwnProperty(l) ? k = d[l] : d[l] = k = {}, k.hasOwnProperty(m) ? g = k[m] : k[m] = g = [], g.push({ns: e.ans, localname: e.a, keyname: b});
        return d
    }()
};
// Input 26
"function" !== typeof Object.create && (Object.create = function (h) {
    var g = function () {
    };
    g.prototype = h;
    return new g
});
xmldom.LSSerializer = function () {
    function h(b) {
        var g = b || {}, d = function (b) {
            var c = {}, a;
            for (a in b)b.hasOwnProperty(a) && (c[b[a]] = a);
            return c
        }(b), h = [g], p = [d], k = 0;
        this.push = function () {
            k += 1;
            g = h[k] = Object.create(g);
            d = p[k] = Object.create(d)
        };
        this.pop = function () {
            h.pop();
            p.pop();
            k -= 1;
            g = h[k];
            d = p[k]
        };
        this.getLocalNamespaceDefinitions = function () {
            return d
        };
        this.getQName = function (b) {
            var c = b.namespaceURI, a = 0, k;
            if (!c)return b.localName;
            if (k = d[c])return k + ":" + b.localName;
            do {
                k || !b.prefix ? (k = "ns" + a, a += 1) : k = b.prefix;
                if (g[k] ===
                    c)break;
                if (!g[k]) {
                    g[k] = c;
                    d[c] = k;
                    break
                }
                k = null
            } while (null === k);
            return k + ":" + b.localName
        }
    }

    function g(b) {
        return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
    }

    function b(h, m) {
        var d = "", n = p.filter ? p.filter.acceptNode(m) : NodeFilter.FILTER_ACCEPT, r;
        if (n === NodeFilter.FILTER_ACCEPT && m.nodeType === Node.ELEMENT_NODE) {
            h.push();
            r = h.getQName(m);
            var k, e = m.attributes, c, a, l, f = "", s;
            k = "<" + r;
            c = e.length;
            for (a = 0; a < c; a += 1)l = e.item(a), "http://www.w3.org/2000/xmlns/" !==
                l.namespaceURI && (s = p.filter ? p.filter.acceptNode(l) : NodeFilter.FILTER_ACCEPT, s === NodeFilter.FILTER_ACCEPT && (s = h.getQName(l), l = "string" === typeof l.value ? g(l.value) : l.value, f += " " + (s + '="' + l + '"')));
            c = h.getLocalNamespaceDefinitions();
            for (a in c)c.hasOwnProperty(a) && ((e = c[a]) ? "xmlns" !== e && (k += " xmlns:" + c[a] + '="' + a + '"') : k += ' xmlns="' + a + '"');
            d += k + (f + ">")
        }
        if (n === NodeFilter.FILTER_ACCEPT || n === NodeFilter.FILTER_SKIP) {
            for (n = m.firstChild; n;)d += b(h, n), n = n.nextSibling;
            m.nodeValue && (d += g(m.nodeValue))
        }
        r && (d += "</" +
            r + ">", h.pop());
        return d
    }

    var p = this;
    this.filter = null;
    this.writeToString = function (g, m) {
        if (!g)return"";
        var d = new h(m);
        return b(d, g)
    }
};
// Input 27
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
(function () {
    function h(c, a, b) {
        for (c = c ? c.firstChild : null; c;) {
            if (c.localName === b && c.namespaceURI === a)return c;
            c = c.nextSibling
        }
        return null
    }

    function g(c) {
        var a, b = r.length;
        for (a = 0; a < b; a += 1)if ("urn:oasis:names:tc:opendocument:xmlns:office:1.0" === c.namespaceURI && c.localName === r[a])return a;
        return-1
    }

    function b(c, a) {
        var b = new m.UsedStyleList(c, a), f = new odf.OdfNodeFilter;
        this.acceptNode = function (c) {
            var e = f.acceptNode(c);
            e === NodeFilter.FILTER_ACCEPT && c.parentNode === a && c.nodeType === Node.ELEMENT_NODE && (e = b.uses(c) ?
                NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT);
            return e
        }
    }

    function p(c, a) {
        var e = new b(c, a);
        this.acceptNode = function (a) {
            var c = e.acceptNode(a);
            c !== NodeFilter.FILTER_ACCEPT || !a.parentNode || a.parentNode.namespaceURI !== odf.Namespaces.textns || "s" !== a.parentNode.localName && "tab" !== a.parentNode.localName || (c = NodeFilter.FILTER_REJECT);
            return c
        }
    }

    function q(c, a) {
        if (a) {
            var b = g(a), f, e = c.firstChild;
            if (-1 !== b) {
                for (; e;) {
                    f = g(e);
                    if (-1 !== f && f > b)break;
                    e = e.nextSibling
                }
                c.insertBefore(a, e)
            }
        }
    }

    var m = new odf.StyleInfo,
        d = new core.DomUtils, n = odf.Namespaces.stylens, r = "meta settings scripts font-face-decls styles automatic-styles master-styles body".split(" "), k = (new Date).getTime() + "_webodf_", e = new core.Base64;
    odf.ODFElement = function () {
    };
    odf.ODFDocumentElement = function () {
    };
    odf.ODFDocumentElement.prototype = new odf.ODFElement;
    odf.ODFDocumentElement.prototype.constructor = odf.ODFDocumentElement;
    odf.ODFDocumentElement.prototype.fontFaceDecls = null;
    odf.ODFDocumentElement.prototype.manifest = null;
    odf.ODFDocumentElement.prototype.settings =
        null;
    odf.ODFDocumentElement.namespaceURI = "urn:oasis:names:tc:opendocument:xmlns:office:1.0";
    odf.ODFDocumentElement.localName = "document";
    odf.AnnotationElement = function () {
    };
    odf.OdfPart = function (c, a, b, f) {
        var e = this;
        this.size = 0;
        this.type = null;
        this.name = c;
        this.container = b;
        this.url = null;
        this.mimetype = a;
        this.onstatereadychange = this.document = null;
        this.EMPTY = 0;
        this.LOADING = 1;
        this.DONE = 2;
        this.state = this.EMPTY;
        this.data = "";
        this.load = function () {
            null !== f && (this.mimetype = a, f.loadAsDataURL(c, a, function (a, c) {
                a &&
                runtime.log(a);
                e.url = c;
                if (e.onchange)e.onchange(e);
                if (e.onstatereadychange)e.onstatereadychange(e)
            }))
        }
    };
    odf.OdfPart.prototype.load = function () {
    };
    odf.OdfPart.prototype.getUrl = function () {
        return this.data ? "data:;base64," + e.toBase64(this.data) : null
    };
    odf.OdfContainer = function a(g, f) {
        function r(a) {
            for (var b = a.firstChild, f; b;)f = b.nextSibling, b.nodeType === Node.ELEMENT_NODE ? r(b) : b.nodeType === Node.PROCESSING_INSTRUCTION_NODE && a.removeChild(b), b = f
        }

        function C(a) {
            var b = {}, f, e, d = a.ownerDocument.createNodeIterator(a,
                NodeFilter.SHOW_ELEMENT, null, !1);
            for (a = d.nextNode(); a;)"urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && ("annotation" === a.localName ? (f = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "name")) && (b.hasOwnProperty(f) ? runtime.log("Warning: annotation name used more than once with <office:annotation/>: '" + f + "'") : b[f] = a) : "annotation-end" === a.localName && ((f = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "name")) ? b.hasOwnProperty(f) ? (e = b[f], e.annotationEndElement ?
                runtime.log("Warning: annotation name used more than once with <office:annotation-end/>: '" + f + "'") : e.annotationEndElement = a) : runtime.log("Warning: annotation end without an annotation start, name: '" + f + "'") : runtime.log("Warning: annotation end without a name found"))), a = d.nextNode()
        }

        function x(a, b) {
            for (var f = a && a.firstChild; f;)f.nodeType === Node.ELEMENT_NODE && f.setAttributeNS("urn:webodf:names:scope", "scope", b), f = f.nextSibling
        }

        function w(a) {
            var b = {}, f;
            for (a = a.firstChild; a;)a.nodeType === Node.ELEMENT_NODE &&
                a.namespaceURI === n && "font-face" === a.localName && (f = a.getAttributeNS(n, "name"), b[f] = a), a = a.nextSibling;
            return b
        }

        function v(a, b) {
            var f = null, e, d, k;
            if (a)for (f = a.cloneNode(!0), e = f.firstElementChild; e;)d = e.nextElementSibling, (k = e.getAttributeNS("urn:webodf:names:scope", "scope")) && k !== b && f.removeChild(e), e = d;
            return f
        }

        function u(a, b) {
            var f, e, d, k = null, g = {};
            if (a)for (b.forEach(function (a) {
                m.collectUsedFontFaces(g, a)
            }), k = a.cloneNode(!0), f = k.firstElementChild; f;)e = f.nextElementSibling, d = f.getAttributeNS(n, "name"),
                g[d] || k.removeChild(f), f = e;
            return k
        }

        function t(a) {
            var b = F.rootElement.ownerDocument, f;
            if (a) {
                r(a.documentElement);
                try {
                    f = b.importNode(a.documentElement, !0)
                } catch (e) {
                }
            }
            return f
        }

        function y(a) {
            F.state = a;
            if (F.onchange)F.onchange(F);
            if (F.onstatereadychange)F.onstatereadychange(F)
        }

        function M(a) {
            X = null;
            F.rootElement = a;
            a.fontFaceDecls = h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls");
            a.styles = h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "styles");
            a.automaticStyles = h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "automatic-styles");
            a.masterStyles = h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles");
            a.body = h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "body");
            a.meta = h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta");
            C(a)
        }

        function O(b) {
            var f = t(b), e = F.rootElement, d;
            f && "document-styles" === f.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === f.namespaceURI ? (e.fontFaceDecls = h(f, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls"), q(e, e.fontFaceDecls),
                d = h(f, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "styles"), e.styles = d || b.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "styles"), q(e, e.styles), d = h(f, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles"), e.automaticStyles = d || b.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles"), x(e.automaticStyles, "document-styles"), q(e, e.automaticStyles), f = h(f, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles"), e.masterStyles =
                f || b.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles"), q(e, e.masterStyles), m.prefixStyleNames(e.automaticStyles, k, e.masterStyles)) : y(a.INVALID)
        }

        function D(b) {
            b = t(b);
            var f, e, d, k;
            if (b && "document-content" === b.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === b.namespaceURI) {
                f = F.rootElement;
                d = h(b, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls");
                if (f.fontFaceDecls && d) {
                    k = f.fontFaceDecls;
                    var g, l, p, r, s = {};
                    e = w(k);
                    r = w(d);
                    for (d = d.firstElementChild; d;) {
                        g =
                            d.nextElementSibling;
                        if (d.namespaceURI === n && "font-face" === d.localName)if (l = d.getAttributeNS(n, "name"), e.hasOwnProperty(l)) {
                            if (!d.isEqualNode(e[l])) {
                                p = l;
                                for (var H = e, G = r, M = 0, D = void 0, D = p = p.replace(/\d+$/, ""); H.hasOwnProperty(D) || G.hasOwnProperty(D);)M += 1, D = p + M;
                                p = D;
                                d.setAttributeNS(n, "style:name", p);
                                k.appendChild(d);
                                e[p] = d;
                                delete r[l];
                                s[l] = p
                            }
                        } else k.appendChild(d), e[l] = d, delete r[l];
                        d = g
                    }
                    k = s
                } else d && (f.fontFaceDecls = d, q(f, d));
                e = h(b, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles");
                x(e, "document-content");
                k && m.changeFontFaceNames(e, k);
                if (f.automaticStyles && e)for (k = e.firstChild; k;)f.automaticStyles.appendChild(k), k = e.firstChild; else e && (f.automaticStyles = e, q(f, e));
                b = h(b, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "body");
                if (null === b)throw"<office:body/> tag is mising.";
                f.body = b;
                q(f, f.body)
            } else y(a.INVALID)
        }

        function H(a) {
            a = t(a);
            var b;
            a && "document-meta" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && (b = F.rootElement, b.meta = h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "meta"), q(b, b.meta))
        }

        function Q(a) {
            a = t(a);
            var b;
            a && "document-settings" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && (b = F.rootElement, b.settings = h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "settings"), q(b, b.settings))
        }

        function I(a) {
            a = t(a);
            var b;
            if (a && "manifest" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" === a.namespaceURI)for (b = F.rootElement, b.manifest = a, a = b.manifest.firstElementChild; a;)"file-entry" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" ===
                a.namespaceURI && (W[a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "full-path")] = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "media-type")), a = a.nextElementSibling
        }

        function J(b) {
            var f = b.shift();
            f ? E.loadAsDOM(f.path, function (e, d) {
                f.handler(d);
                e || F.state === a.INVALID || J(b)
            }) : (C(F.rootElement), y(a.DONE))
        }

        function aa(a) {
            var b = "";
            odf.Namespaces.forEachPrefix(function (a, f) {
                b += " xmlns:" + a + '="' + f + '"'
            });
            return'<?xml version="1.0" encoding="UTF-8"?><office:' + a +
                " " + b + ' office:version="1.2">'
        }

        function Z() {
            var a = new xmldom.LSSerializer, b = aa("document-meta");
            a.filter = new odf.OdfNodeFilter;
            b += a.writeToString(F.rootElement.meta, odf.Namespaces.namespaceMap);
            return b + "</office:document-meta>"
        }

        function G(a, b) {
            var f = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "manifest:file-entry");
            f.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "manifest:full-path", a);
            f.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0",
                "manifest:media-type", b);
            return f
        }

        function T() {
            var a = runtime.parseXML('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2"></manifest:manifest>'), b = h(a, "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "manifest"), f = new xmldom.LSSerializer, e;
            for (e in W)W.hasOwnProperty(e) && b.appendChild(G(e, W[e]));
            f.filter = new odf.OdfNodeFilter;
            return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' + f.writeToString(a, odf.Namespaces.namespaceMap)
        }

        function z() {
            var a = new xmldom.LSSerializer, b = aa("document-settings");
            a.filter = new odf.OdfNodeFilter;
            F.rootElement.settings.firstElementChild && (b += a.writeToString(F.rootElement.settings, odf.Namespaces.namespaceMap));
            return b + "</office:document-settings>"
        }

        function U() {
            var a, f, e, d = odf.Namespaces.namespaceMap, g = new xmldom.LSSerializer, l = aa("document-styles");
            f = v(F.rootElement.automaticStyles, "document-styles");
            e = F.rootElement.masterStyles.cloneNode(!0);
            a = u(F.rootElement.fontFaceDecls, [e, F.rootElement.styles,
                f]);
            m.removePrefixFromStyleNames(f, k, e);
            g.filter = new b(e, f);
            l += g.writeToString(a, d);
            l += g.writeToString(F.rootElement.styles, d);
            l += g.writeToString(f, d);
            l += g.writeToString(e, d);
            return l + "</office:document-styles>"
        }

        function S() {
            var a, b, f = odf.Namespaces.namespaceMap, e = new xmldom.LSSerializer, d = aa("document-content");
            b = v(F.rootElement.automaticStyles, "document-content");
            a = u(F.rootElement.fontFaceDecls, [b]);
            e.filter = new p(F.rootElement.body, b);
            d += e.writeToString(a, f);
            d += e.writeToString(b, f);
            d += e.writeToString(F.rootElement.body,
                f);
            return d + "</office:document-content>"
        }

        function K(b, f) {
            runtime.loadXML(b, function (b, e) {
                if (b)f(b); else {
                    var d = t(e);
                    d && "document" === d.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === d.namespaceURI ? (M(d), y(a.DONE)) : y(a.INVALID)
                }
            })
        }

        function P(a, b) {
            var f;
            f = F.rootElement;
            var e = f.meta;
            e || (f.meta = e = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta"), q(f, e));
            f = e;
            a && d.mapKeyValObjOntoNode(f, a, odf.Namespaces.lookupNamespaceURI);
            b && d.removeKeyElementsFromNode(f,
                b, odf.Namespaces.lookupNamespaceURI)
        }

        function ba() {
            function b(a, f) {
                var e;
                f || (f = a);
                e = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", f);
                d[a] = e;
                d.appendChild(e)
            }

            var f = new core.Zip("", null), e = runtime.byteArrayFromString("application/vnd.oasis.opendocument.text", "utf8"), d = F.rootElement, k = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "text");
            f.save("mimetype", e, !1, new Date);
            b("meta");
            b("settings");
            b("scripts");
            b("fontFaceDecls", "font-face-decls");
            b("styles");
            b("automaticStyles", "automatic-styles");
            b("masterStyles", "master-styles");
            b("body");
            d.body.appendChild(k);
            W["/"] = "application/vnd.oasis.opendocument.text";
            W["settings.xml"] = "text/xml";
            W["meta.xml"] = "text/xml";
            W["styles.xml"] = "text/xml";
            W["content.xml"] = "text/xml";
            y(a.DONE);
            return f
        }

        function $() {
            var a, b = new Date, f = runtime.getWindow();
            a = "WebODF/" + ("undefined" !== String(typeof webodf_version) ? webodf_version : "FromSource");
            f && (a = a + " " + f.navigator.userAgent);
            P({"meta:generator": a}, null);
            a = runtime.byteArrayFromString(z(),
                "utf8");
            E.save("settings.xml", a, !0, b);
            a = runtime.byteArrayFromString(Z(), "utf8");
            E.save("meta.xml", a, !0, b);
            a = runtime.byteArrayFromString(U(), "utf8");
            E.save("styles.xml", a, !0, b);
            a = runtime.byteArrayFromString(S(), "utf8");
            E.save("content.xml", a, !0, b);
            a = runtime.byteArrayFromString(T(), "utf8");
            E.save("META-INF/manifest.xml", a, !0, b)
        }

        function ia(a, b) {
            $();
            E.writeAs(a, function (a) {
                b(a)
            })
        }

        var F = this, E, W = {}, X;
        this.onstatereadychange = f;
        this.state = this.onchange = null;
        this.setRootElement = M;
        this.getContentElement =
            function () {
                var a;
                X || (a = F.rootElement.body, X = h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "text") || h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "presentation") || h(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "spreadsheet"));
                if (!X)throw"Could not find content element in <office:body/>.";
                return X
            };
        this.getDocumentType = function () {
            var a = F.getContentElement();
            return a && a.localName
        };
        this.getPart = function (a) {
            return new odf.OdfPart(a, W[a], F, E)
        };
        this.getPartData = function (a, b) {
            E.load(a,
                b)
        };
        this.setMetadata = P;
        this.incrementEditingCycles = function () {
            var a;
            for (a = (a = F.rootElement.meta) && a.firstChild; a && (a.namespaceURI !== odf.Namespaces.metans || "editing-cycles" !== a.localName);)a = a.nextSibling;
            for (a = a && a.firstChild; a && a.nodeType !== Node.TEXT_NODE;)a = a.nextSibling;
            a = a ? a.data : null;
            a = a ? parseInt(a, 10) : 0;
            isNaN(a) && (a = 0);
            P({"meta:editing-cycles": a + 1}, null)
        };
        this.createByteArray = function (a, b) {
            $();
            E.createByteArray(a, b)
        };
        this.saveAs = ia;
        this.save = function (a) {
            ia(g, a)
        };
        this.getUrl = function () {
            return g
        };
        this.setBlob = function (a, b, f) {
            f = e.convertBase64ToByteArray(f);
            E.save(a, f, !1, new Date);
            W.hasOwnProperty(a) && runtime.log(a + " has been overwritten.");
            W[a] = b
        };
        this.removeBlob = function (a) {
            var b = E.remove(a);
            runtime.assert(b, "file is not found: " + a);
            delete W[a]
        };
        this.state = a.LOADING;
        this.rootElement = function (a) {
            var b = document.createElementNS(a.namespaceURI, a.localName), f;
            a = new a.Type;
            for (f in a)a.hasOwnProperty(f) && (b[f] = a[f]);
            return b
        }({Type: odf.ODFDocumentElement, namespaceURI: odf.ODFDocumentElement.namespaceURI,
            localName: odf.ODFDocumentElement.localName});
        E = g ? new core.Zip(g, function (b, f) {
            E = f;
            b ? K(g, function (f) {
                b && (E.error = b + "\n" + f, y(a.INVALID))
            }) : J([
                {path: "styles.xml", handler: O},
                {path: "content.xml", handler: D},
                {path: "meta.xml", handler: H},
                {path: "settings.xml", handler: Q},
                {path: "META-INF/manifest.xml", handler: I}
            ])
        }) : ba()
    };
    odf.OdfContainer.EMPTY = 0;
    odf.OdfContainer.LOADING = 1;
    odf.OdfContainer.DONE = 2;
    odf.OdfContainer.INVALID = 3;
    odf.OdfContainer.SAVING = 4;
    odf.OdfContainer.MODIFIED = 5;
    odf.OdfContainer.getContainer = function (a) {
        return new odf.OdfContainer(a,
            null)
    };
    return odf.OdfContainer
})();
// Input 28
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.OdfUtils = function () {
    function h(a) {
        return"image" === (a && a.localName) && a.namespaceURI === I
    }

    function g(a) {
        return null !== a && a.nodeType === Node.ELEMENT_NODE && "frame" === a.localName && a.namespaceURI === I && "as-char" === a.getAttributeNS(Q, "anchor-type")
    }

    function b(a) {
        var c;
        (c = "annotation" === (a && a.localName) && a.namespaceURI === odf.Namespaces.officens) || (c = "div" === (a && a.localName) && "annotationWrapper" === a.className);
        return c
    }

    function p(a) {
        return"a" === (a && a.localName) && a.namespaceURI === Q
    }

    function q(a) {
        var c = a &&
            a.localName;
        return("p" === c || "h" === c) && a.namespaceURI === Q
    }

    function m(a) {
        for (; a && !q(a);)a = a.parentNode;
        return a
    }

    function d(a) {
        return/^[ \t\r\n]+$/.test(a)
    }

    function n(a) {
        if (null === a || a.nodeType !== Node.ELEMENT_NODE)return!1;
        var c = a.localName;
        return/^(span|p|h|a|meta)$/.test(c) && a.namespaceURI === Q || "span" === c && "annotationHighlight" === a.className
    }

    function r(a) {
        var c = a && a.localName, b = !1;
        c && (a = a.namespaceURI, a === Q && (b = "s" === c || "tab" === c || "line-break" === c));
        return b
    }

    function k(a) {
        return r(a) || g(a) || b(a)
    }

    function e(a) {
        var c =
            a && a.localName, b = !1;
        c && (a = a.namespaceURI, a === Q && (b = "s" === c));
        return b
    }

    function c(a) {
        for (; null !== a.firstChild && n(a);)a = a.firstChild;
        return a
    }

    function a(a) {
        for (; null !== a.lastChild && n(a);)a = a.lastChild;
        return a
    }

    function l(c) {
        for (; !q(c) && null === c.previousSibling;)c = c.parentNode;
        return q(c) ? null : a(c.previousSibling)
    }

    function f(a) {
        for (; !q(a) && null === a.nextSibling;)a = a.parentNode;
        return q(a) ? null : c(a.nextSibling)
    }

    function s(a) {
        for (var c = !1; a;)if (a.nodeType === Node.TEXT_NODE)if (0 === a.length)a = l(a); else return!d(a.data.substr(a.length -
            1, 1)); else k(a) ? (c = !1 === e(a), a = null) : a = l(a);
        return c
    }

    function C(a) {
        var b = !1, e;
        for (a = a && c(a); a;) {
            e = a.nodeType === Node.TEXT_NODE ? a.length : 0;
            if (0 < e && !d(a.data)) {
                b = !0;
                break
            }
            if (k(a)) {
                b = !0;
                break
            }
            a = f(a)
        }
        return b
    }

    function x(a, c) {
        return d(a.data.substr(c)) ? !C(f(a)) : !1
    }

    function w(a, c) {
        var b = a.data, f;
        if (!d(b[c]) || k(a.parentNode))return!1;
        0 < c ? d(b[c - 1]) || (f = !0) : s(l(a)) && (f = !0);
        return!0 === f ? x(a, c) ? !1 : !0 : !1
    }

    function v(a) {
        return(a = /(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px)|(%))/.exec(a)) ?
        {value: parseFloat(a[1]), unit: a[3]} : null
    }

    function u(a) {
        return(a = v(a)) && (0 > a.value || "%" === a.unit) ? null : a
    }

    function t(a) {
        return(a = v(a)) && "%" !== a.unit ? null : a
    }

    function y(a) {
        switch (a.namespaceURI) {
            case odf.Namespaces.drawns:
            case odf.Namespaces.svgns:
            case odf.Namespaces.dr3dns:
                return!1;
            case odf.Namespaces.textns:
                switch (a.localName) {
                    case "note-body":
                    case "ruby-text":
                        return!1
                }
                break;
            case odf.Namespaces.officens:
                switch (a.localName) {
                    case "annotation":
                    case "binary-data":
                    case "event-listeners":
                        return!1
                }
                break;
            default:
                switch (a.localName) {
                    case "cursor":
                    case "editinfo":
                        return!1
                }
        }
        return!0
    }

    function M(a, c) {
        for (; 0 < c.length && !Z.rangeContainsNode(a, c[0]);)c.shift();
        for (; 0 < c.length && !Z.rangeContainsNode(a, c[c.length - 1]);)c.pop()
    }

    function O(a, c, f) {
        var e;
        e = Z.getNodesInRange(a, function (a) {
            var c = NodeFilter.FILTER_REJECT;
            if (r(a.parentNode) || b(a))c = NodeFilter.FILTER_REJECT; else if (a.nodeType === Node.TEXT_NODE) {
                if (f || Boolean(m(a) && (!d(a.textContent) || w(a, 0))))c = NodeFilter.FILTER_ACCEPT
            } else if (k(a))c = NodeFilter.FILTER_ACCEPT; else if (y(a) || n(a))c = NodeFilter.FILTER_SKIP;
            return c
        }, NodeFilter.SHOW_ELEMENT |
            NodeFilter.SHOW_TEXT);
        c || M(a, e);
        return e
    }

    function D(a, c, f) {
        for (; a;) {
            if (f(a)) {
                c[0] !== a && c.unshift(a);
                break
            }
            if (b(a))break;
            a = a.parentNode
        }
    }

    function H(a, c) {
        var b = a;
        if (c < b.childNodes.length - 1)b = b.childNodes[c + 1]; else {
            for (; !b.nextSibling;)b = b.parentNode;
            b = b.nextSibling
        }
        for (; b.firstChild;)b = b.firstChild;
        return b
    }

    var Q = odf.Namespaces.textns, I = odf.Namespaces.drawns, J = odf.Namespaces.xlinkns, aa = /^\s*$/, Z = new core.DomUtils;
    this.isImage = h;
    this.isCharacterFrame = g;
    this.isInlineRoot = b;
    this.isTextSpan = function (a) {
        return"span" ===
            (a && a.localName) && a.namespaceURI === Q
    };
    this.isHyperlink = p;
    this.getHyperlinkTarget = function (a) {
        return a.getAttributeNS(J, "href")
    };
    this.isParagraph = q;
    this.getParagraphElement = m;
    this.isWithinTrackedChanges = function (a, c) {
        for (; a && a !== c;) {
            if (a.namespaceURI === Q && "tracked-changes" === a.localName)return!0;
            a = a.parentNode
        }
        return!1
    };
    this.isListItem = function (a) {
        return"list-item" === (a && a.localName) && a.namespaceURI === Q
    };
    this.isLineBreak = function (a) {
        return"line-break" === (a && a.localName) && a.namespaceURI === Q
    };
    this.isODFWhitespace =
        d;
    this.isGroupingElement = n;
    this.isCharacterElement = r;
    this.isAnchoredAsCharacterElement = k;
    this.isSpaceElement = e;
    this.firstChild = c;
    this.lastChild = a;
    this.previousNode = l;
    this.nextNode = f;
    this.scanLeftForNonSpace = s;
    this.lookLeftForCharacter = function (a) {
        var c, b = c = 0;
        a.nodeType === Node.TEXT_NODE && (b = a.length);
        0 < b ? (c = a.data, c = d(c.substr(b - 1, 1)) ? 1 === b ? s(l(a)) ? 2 : 0 : d(c.substr(b - 2, 1)) ? 0 : 2 : 1) : k(a) && (c = 1);
        return c
    };
    this.lookRightForCharacter = function (a) {
        var c = !1, b = 0;
        a && a.nodeType === Node.TEXT_NODE && (b = a.length);
        0 <
            b ? c = !d(a.data.substr(0, 1)) : k(a) && (c = !0);
        return c
    };
    this.scanLeftForAnyCharacter = function (c) {
        var b = !1, f;
        for (c = c && a(c); c;) {
            f = c.nodeType === Node.TEXT_NODE ? c.length : 0;
            if (0 < f && !d(c.data)) {
                b = !0;
                break
            }
            if (k(c)) {
                b = !0;
                break
            }
            c = l(c)
        }
        return b
    };
    this.scanRightForAnyCharacter = C;
    this.isTrailingWhitespace = x;
    this.isSignificantWhitespace = w;
    this.isDowngradableSpaceElement = function (a) {
        return a.namespaceURI === Q && "s" === a.localName ? s(l(a)) && C(f(a)) : !1
    };
    this.getFirstNonWhitespaceChild = function (a) {
        for (a = a && a.firstChild; a && a.nodeType ===
            Node.TEXT_NODE && aa.test(a.nodeValue);)a = a.nextSibling;
        return a
    };
    this.parseLength = v;
    this.parseNonNegativeLength = u;
    this.parseFoFontSize = function (a) {
        var c;
        c = (c = v(a)) && (0 >= c.value || "%" === c.unit) ? null : c;
        return c || t(a)
    };
    this.parseFoLineHeight = function (a) {
        return u(a) || t(a)
    };
    this.isTextContentContainingNode = y;
    this.getTextNodes = function (a, c) {
        var b;
        b = Z.getNodesInRange(a, function (a) {
            var c = NodeFilter.FILTER_REJECT;
            a.nodeType === Node.TEXT_NODE ? Boolean(m(a) && (!d(a.textContent) || w(a, 0))) && (c = NodeFilter.FILTER_ACCEPT) :
                y(a) && (c = NodeFilter.FILTER_SKIP);
            return c
        }, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        c || M(a, b);
        return b
    };
    this.getTextElements = O;
    this.getParagraphElements = function (a) {
        var c;
        c = Z.getNodesInRange(a, function (a) {
            var c = NodeFilter.FILTER_REJECT;
            if (q(a))c = NodeFilter.FILTER_ACCEPT; else if (y(a) || n(a))c = NodeFilter.FILTER_SKIP;
            return c
        }, NodeFilter.SHOW_ELEMENT);
        D(a.startContainer, c, q);
        return c
    };
    this.getImageElements = function (a) {
        var c;
        c = Z.getNodesInRange(a, function (a) {
            var c = NodeFilter.FILTER_SKIP;
            h(a) && (c =
                NodeFilter.FILTER_ACCEPT);
            return c
        }, NodeFilter.SHOW_ELEMENT);
        D(a.startContainer, c, h);
        return c
    };
    this.getHyperlinkElements = function (a) {
        var c = [], b = a.cloneRange();
        a.collapsed && a.endContainer.nodeType === Node.ELEMENT_NODE && (a = H(a.endContainer, a.endOffset), a.nodeType === Node.TEXT_NODE && b.setEnd(a, 1));
        O(b, !0, !1).forEach(function (a) {
            for (a = a.parentNode; !q(a);) {
                if (p(a) && -1 === c.indexOf(a)) {
                    c.push(a);
                    break
                }
                a = a.parentNode
            }
        });
        b.detach();
        return c
    }
};
// Input 29
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.AnnotatableCanvas = function () {
};
gui.AnnotatableCanvas.prototype.refreshSize = function () {
};
gui.AnnotatableCanvas.prototype.getZoomLevel = function () {
};
gui.AnnotatableCanvas.prototype.getSizer = function () {
};
gui.AnnotationViewManager = function (h, g, b, p) {
    function q(a) {
        var c = a.annotationEndElement, b = k.createRange(), d = a.getAttributeNS(odf.Namespaces.officens, "name");
        c && (b.setStart(a, a.childNodes.length), b.setEnd(c, 0), a = e.getTextNodes(b, !1), a.forEach(function (a) {
            var c = k.createElement("span");
            c.className = "annotationHighlight";
            c.setAttribute("annotation", d);
            a.parentNode.insertBefore(c, a);
            c.appendChild(a)
        }));
        b.detach()
    }

    function m(a) {
        var e = h.getSizer();
        a ? (b.style.display = "inline-block", e.style.paddingRight = c.getComputedStyle(b).width) :
            (b.style.display = "none", e.style.paddingRight = 0);
        h.refreshSize()
    }

    function d() {
        r.sort(function (a, c) {
            return 0 !== (a.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1
        })
    }

    function n() {
        var a;
        for (a = 0; a < r.length; a += 1) {
            var c = r[a], f = c.parentNode, e = f.nextElementSibling, d = e.nextElementSibling, k = f.parentNode, g = 0, g = r[r.indexOf(c) - 1], m = void 0, c = h.getZoomLevel();
            f.style.left = (b.getBoundingClientRect().left - k.getBoundingClientRect().left) / c + "px";
            f.style.width = b.getBoundingClientRect().width / c + "px";
            e.style.width =
                parseFloat(f.style.left) - 30 + "px";
            g && (m = g.parentNode.getBoundingClientRect(), 20 >= (k.getBoundingClientRect().top - m.bottom) / c ? f.style.top = Math.abs(k.getBoundingClientRect().top - m.bottom) / c + 20 + "px" : f.style.top = "0px");
            d.style.left = e.getBoundingClientRect().width / c + "px";
            var e = d.style, k = d.getBoundingClientRect().left / c, g = d.getBoundingClientRect().top / c, m = f.getBoundingClientRect().left / c, q = f.getBoundingClientRect().top / c, n = 0, y = 0, n = m - k, n = n * n, y = q - g, y = y * y, k = Math.sqrt(n + y);
            e.width = k + "px";
            g = Math.asin((f.getBoundingClientRect().top -
                d.getBoundingClientRect().top) / (c * parseFloat(d.style.width)));
            d.style.transform = "rotate(" + g + "rad)";
            d.style.MozTransform = "rotate(" + g + "rad)";
            d.style.WebkitTransform = "rotate(" + g + "rad)";
            d.style.msTransform = "rotate(" + g + "rad)"
        }
    }

    var r = [], k = g.ownerDocument, e = new odf.OdfUtils, c = runtime.getWindow();
    runtime.assert(Boolean(c), "Expected to be run in an environment which has a global window, like a browser.");
    this.rerenderAnnotations = n;
    this.getMinimumHeightForAnnotationPane = function () {
        return"none" !== b.style.display &&
            0 < r.length ? (r[r.length - 1].parentNode.getBoundingClientRect().bottom - b.getBoundingClientRect().top) / h.getZoomLevel() + "px" : null
    };
    this.addAnnotation = function (a) {
        m(!0);
        r.push(a);
        d();
        var c = k.createElement("div"), b = k.createElement("div"), e = k.createElement("div"), g = k.createElement("div"), h;
        c.className = "annotationWrapper";
        a.parentNode.insertBefore(c, a);
        b.className = "annotationNote";
        b.appendChild(a);
        p && (h = k.createElement("div"), h.className = "annotationRemoveButton", b.appendChild(h));
        e.className = "annotationConnector horizontal";
        g.className = "annotationConnector angular";
        c.appendChild(b);
        c.appendChild(e);
        c.appendChild(g);
        a.annotationEndElement && q(a);
        n()
    };
    this.forgetAnnotations = function () {
        for (; r.length;) {
            var a = r[0], c = r.indexOf(a), b = a.parentNode.parentNode;
            "div" === b.localName && (b.parentNode.insertBefore(a, b), b.parentNode.removeChild(b));
            for (var a = a.getAttributeNS(odf.Namespaces.officens, "name"), a = k.querySelectorAll('span.annotationHighlight[annotation="' + a + '"]'), e = b = void 0, b = 0; b < a.length; b += 1) {
                for (e = a.item(b); e.firstChild;)e.parentNode.insertBefore(e.firstChild,
                    e);
                e.parentNode.removeChild(e)
            }
            -1 !== c && r.splice(c, 1);
            0 === r.length && m(!1)
        }
    }
};
// Input 30
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
(function () {
    function h(g, q, m, d, n) {
        var r, k = 0, e;
        for (e in g)if (g.hasOwnProperty(e)) {
            if (k === m) {
                r = e;
                break
            }
            k += 1
        }
        r ? q.getPartData(g[r].href, function (c, a) {
            if (c)runtime.log(c); else if (a) {
                var e = "@font-face { font-family: '" + (g[r].family || r) + "'; src: url(data:application/x-font-ttf;charset=binary;base64," + b.convertUTF8ArrayToBase64(a) + ') format("truetype"); }';
                try {
                    d.insertRule(e, d.cssRules.length)
                } catch (f) {
                    runtime.log("Problem inserting rule in CSS: " + runtime.toJson(f) + "\nRule: " + e)
                }
            } else runtime.log("missing font data for " +
                g[r].href);
            h(g, q, m + 1, d, n)
        }) : n && n()
    }

    var g = xmldom.XPath, b = new core.Base64;
    odf.FontLoader = function () {
        this.loadFonts = function (b, q) {
            for (var m = b.rootElement.fontFaceDecls; q.cssRules.length;)q.deleteRule(q.cssRules.length - 1);
            if (m) {
                var d = {}, n, r, k, e;
                if (m)for (m = g.getODFElementsWithXPath(m, "style:font-face[svg:font-face-src]", odf.Namespaces.lookupNamespaceURI), n = 0; n < m.length; n += 1)r = m[n], k = r.getAttributeNS(odf.Namespaces.stylens, "name"), e = r.getAttributeNS(odf.Namespaces.svgns, "font-family"), r = g.getODFElementsWithXPath(r,
                    "svg:font-face-src/svg:font-face-uri", odf.Namespaces.lookupNamespaceURI), 0 < r.length && (r = r[0].getAttributeNS(odf.Namespaces.xlinkns, "href"), d[k] = {href: r, family: e});
                h(d, b, 0, q)
            }
        }
    };
    return odf.FontLoader
})();
// Input 31
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.Formatting = function () {
    function h(a) {
        return(a = t[a]) ? u.mergeObjects({}, a) : {}
    }

    function g(a, c, b) {
        for (a = a && a.firstElementChild; a && (a.namespaceURI !== c || a.localName !== b);)a = a.nextElementSibling;
        return a
    }

    function b() {
        for (var a = c.rootElement.fontFaceDecls, b = {}, e, d, a = a && a.firstElementChild; a;) {
            if (e = a.getAttributeNS(f, "name"))if ((d = a.getAttributeNS(l, "font-family")) || 0 < a.getElementsByTagNameNS(l, "font-face-uri").length)b[e] = d;
            a = a.nextElementSibling
        }
        return b
    }

    function p(a) {
        for (var b = c.rootElement.styles.firstElementChild; b;) {
            if (b.namespaceURI ===
                f && "default-style" === b.localName && b.getAttributeNS(f, "family") === a)return b;
            b = b.nextElementSibling
        }
        return null
    }

    function q(a, b, e) {
        var d, k, g;
        e = e || [c.rootElement.automaticStyles, c.rootElement.styles];
        for (g = 0; g < e.length; g += 1)for (d = e[g], d = d.firstElementChild; d;) {
            k = d.getAttributeNS(f, "name");
            if (d.namespaceURI === f && "style" === d.localName && d.getAttributeNS(f, "family") === b && k === a || "list-style" === b && d.namespaceURI === s && "list-style" === d.localName && k === a || "data" === b && d.namespaceURI === C && k === a)return d;
            d = d.nextElementSibling
        }
        return null
    }

    function m(a) {
        for (var c, b, e, d, k = {}, g = a.firstElementChild; g;) {
            if (g.namespaceURI === f)for (e = k[g.nodeName] = {}, b = g.attributes, c = 0; c < b.length; c += 1)d = b.item(c), e[d.name] = d.value;
            g = g.nextElementSibling
        }
        b = a.attributes;
        for (c = 0; c < b.length; c += 1)d = b.item(c), k[d.name] = d.value;
        return k
    }

    function d(a, b) {
        for (var e = c.rootElement.styles, d, k = {}, g = a.getAttributeNS(f, "family"), l = a; l;)d = m(l), k = u.mergeObjects(d, k), l = (d = l.getAttributeNS(f, "parent-style-name")) ? q(d, g, [e]) : null;
        if (l = p(g))d = m(l), k = u.mergeObjects(d, k);
        !1 !== b &&
        (d = h(g), k = u.mergeObjects(d, k));
        return k
    }

    function n(c, b) {
        function f(a) {
            Object.keys(a).forEach(function (c) {
                Object.keys(a[c]).forEach(function (a) {
                    g += "|" + c + ":" + a + "|"
                })
            })
        }

        for (var e = c.nodeType === Node.TEXT_NODE ? c.parentNode : c, d, k = [], g = "", l = !1; e;)!l && w.isGroupingElement(e) && (l = !0), (d = a.determineStylesForNode(e)) && k.push(d), e = e.parentNode;
        l && (k.forEach(f), b && (b[g] = k));
        return l ? k : void 0
    }

    function r(a) {
        var b = {orderedStyles: []};
        a.forEach(function (a) {
            Object.keys(a).forEach(function (e) {
                var k = Object.keys(a[e])[0],
                    g = {name: k, family: e, displayName: void 0, isCommonStyle: !1}, l;
                (l = q(k, e)) ? (e = d(l), b = u.mergeObjects(e, b), g.displayName = l.getAttributeNS(f, "display-name"), g.isCommonStyle = l.parentNode === c.rootElement.styles) : runtime.log("No style element found for '" + k + "' of family '" + e + "'");
                b.orderedStyles.push(g)
            })
        });
        return b
    }

    function k(a, c) {
        var b = {}, f = [];
        c || (c = {});
        a.forEach(function (a) {
            n(a, b)
        });
        Object.keys(b).forEach(function (a) {
            c[a] || (c[a] = r(b[a]));
            f.push(c[a])
        });
        return f
    }

    function e(a, c) {
        var b = w.parseLength(a), f = c;
        if (b)switch (b.unit) {
            case "cm":
                f =
                    b.value;
                break;
            case "mm":
                f = 0.1 * b.value;
                break;
            case "in":
                f = 2.54 * b.value;
                break;
            case "pt":
                f = 0.035277778 * b.value;
                break;
            case "pc":
            case "px":
            case "em":
                break;
            default:
                runtime.log("Unit identifier: " + b.unit + " is not supported.")
        }
        return f
    }

    var c, a = new odf.StyleInfo, l = odf.Namespaces.svgns, f = odf.Namespaces.stylens, s = odf.Namespaces.textns, C = odf.Namespaces.numberns, x = odf.Namespaces.fons, w = new odf.OdfUtils, v = new core.DomUtils, u = new core.Utils, t = {paragraph: {"style:paragraph-properties": {"fo:text-align": "left"}}};
    this.getSystemDefaultStyleAttributes =
        h;
    this.setOdfContainer = function (a) {
        c = a
    };
    this.getFontMap = b;
    this.getAvailableParagraphStyles = function () {
        for (var a = c.rootElement.styles, b, e, d = [], a = a && a.firstElementChild; a;)"style" === a.localName && a.namespaceURI === f && (b = a.getAttributeNS(f, "family"), "paragraph" === b && (b = a.getAttributeNS(f, "name"), e = a.getAttributeNS(f, "display-name") || b, b && e && d.push({name: b, displayName: e}))), a = a.nextElementSibling;
        return d
    };
    this.isStyleUsed = function (b) {
        var f, e = c.rootElement;
        f = a.hasDerivedStyles(e, odf.Namespaces.lookupNamespaceURI,
            b);
        b = (new a.UsedStyleList(e.styles)).uses(b) || (new a.UsedStyleList(e.automaticStyles)).uses(b) || (new a.UsedStyleList(e.body)).uses(b);
        return f || b
    };
    this.getDefaultStyleElement = p;
    this.getStyleElement = q;
    this.getStyleAttributes = m;
    this.getInheritedStyleAttributes = d;
    this.getFirstCommonParentStyleNameOrSelf = function (a) {
        var b = c.rootElement.automaticStyles, e = c.rootElement.styles, d;
        for (d = q(a, "paragraph", [b]); d;)a = d.getAttributeNS(f, "parent-style-name"), d = q(a, "paragraph", [b]);
        return(d = q(a, "paragraph", [e])) ?
            a : null
    };
    this.hasParagraphStyle = function (a) {
        return Boolean(q(a, "paragraph"))
    };
    this.getAppliedStyles = k;
    this.getAppliedStylesForElement = function (a, c) {
        return k([a], c)[0]
    };
    this.updateStyle = function (a, e) {
        var d, k;
        v.mapObjOntoNode(a, e, odf.Namespaces.lookupNamespaceURI);
        (d = e["style:text-properties"] && e["style:text-properties"]["style:font-name"]) && !b().hasOwnProperty(d) && (k = a.ownerDocument.createElementNS(f, "style:font-face"), k.setAttributeNS(f, "style:name", d), k.setAttributeNS(l, "svg:font-family", d), c.rootElement.fontFaceDecls.appendChild(k))
    };
    this.createDerivedStyleObject = function (a, b, f) {
        var e = q(a, b);
        runtime.assert(Boolean(e), "No style element found for '" + a + "' of family '" + b + "'");
        a = e.parentNode === c.rootElement.styles ? {"style:parent-style-name": a} : m(e);
        a["style:family"] = b;
        u.mergeObjects(a, f);
        return a
    };
    this.getDefaultTabStopDistance = function () {
        for (var a = p("paragraph"), a = a && a.firstElementChild, c; a;)a.namespaceURI === f && "paragraph-properties" === a.localName && (c = a.getAttributeNS(f, "tab-stop-distance")), a = a.nextElementSibling;
        c || (c = "1.25cm");
        return w.parseNonNegativeLength(c)
    };
    this.getContentSize = function (a, b) {
        var d, k, l, m, h, n, p, r, s, t, C;
        a:{
            var w, u, K;
            d = q(a, b);
            runtime.assert("paragraph" === b || "table" === b, "styleFamily has to be either paragraph or table");
            if (d) {
                w = d.getAttributeNS(f, "master-page-name") || "Standard";
                for (d = c.rootElement.masterStyles.lastElementChild; d && d.getAttributeNS(f, "name") !== w;)d = d.previousElementSibling;
                w = d.getAttributeNS(f, "page-layout-name");
                u = v.getElementsByTagNameNS(c.rootElement.automaticStyles, f, "page-layout");
                for (K =
                         0; K < u.length; K += 1)if (d = u[K], d.getAttributeNS(f, "name") === w)break a
            }
            d = null
        }
        d || (d = g(c.rootElement.styles, f, "default-page-layout"));
        if (d = g(d, f, "page-layout-properties"))k = d.getAttributeNS(f, "print-orientation") || "portrait", "portrait" === k ? (k = 21.001, l = 29.7) : (k = 29.7, l = 21.001), k = e(d.getAttributeNS(x, "page-width"), k), l = e(d.getAttributeNS(x, "page-height"), l), m = e(d.getAttributeNS(x, "margin"), null), null === m ? (m = e(d.getAttributeNS(x, "margin-left"), 2), h = e(d.getAttributeNS(x, "margin-right"), 2), n = e(d.getAttributeNS(x,
            "margin-top"), 2), p = e(d.getAttributeNS(x, "margin-bottom"), 2)) : m = h = n = p = m, r = e(d.getAttributeNS(x, "padding"), null), null === r ? (r = e(d.getAttributeNS(x, "padding-left"), 0), s = e(d.getAttributeNS(x, "padding-right"), 0), t = e(d.getAttributeNS(x, "padding-top"), 0), C = e(d.getAttributeNS(x, "padding-bottom"), 0)) : r = s = t = C = r;
        return{width: k - m - h - r - s, height: l - n - p - t - C}
    }
};
// Input 32
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.StyleTreeNode = function (h) {
    this.derivedStyles = {};
    this.element = h
};
odf.Style2CSS = function () {
    function h(a) {
        var c, b, e, d = {};
        if (!a)return d;
        for (a = a.firstElementChild; a;) {
            if (b = a.namespaceURI !== f || "style" !== a.localName && "default-style" !== a.localName ? a.namespaceURI === x && "list-style" === a.localName ? "list" : a.namespaceURI !== f || "page-layout" !== a.localName && "default-page-layout" !== a.localName ? void 0 : "page" : a.getAttributeNS(f, "family"))(c = a.getAttributeNS(f, "name")) || (c = ""), d.hasOwnProperty(b) ? e = d[b] : d[b] = e = {}, e[c] = a;
            a = a.nextElementSibling
        }
        return d
    }

    function g(a, c) {
        if (a.hasOwnProperty(c))return a[c];
        var b, f = null;
        for (b in a)if (a.hasOwnProperty(b) && (f = g(a[b].derivedStyles, c)))break;
        return f
    }

    function b(a, c, e) {
        var d, k, l;
        if (!c.hasOwnProperty(a))return null;
        d = new odf.StyleTreeNode(c[a]);
        k = d.element.getAttributeNS(f, "parent-style-name");
        l = null;
        k && (l = g(e, k) || b(k, c, e));
        l ? l.derivedStyles[a] = d : e[a] = d;
        delete c[a];
        return d
    }

    function p(a, c) {
        for (var f in a)a.hasOwnProperty(f) && b(f, a, c)
    }

    function q(a, c, b) {
        var f = [];
        b = b.derivedStyles;
        var e;
        var d = u[a], k;
        void 0 === d ? c = null : (k = c ? "[" + d + '|style-name="' + c + '"]' : "", "presentation" ===
            d && (d = "draw", k = c ? '[presentation|style-name="' + c + '"]' : ""), c = d + "|" + t[a].join(k + "," + d + "|") + k);
        null !== c && f.push(c);
        for (e in b)b.hasOwnProperty(e) && (c = q(a, e, b[e]), f = f.concat(c));
        return f
    }

    function m(a, c, b) {
        for (a = a && a.firstElementChild; a && (a.namespaceURI !== c || a.localName !== b);)a = a.nextElementSibling;
        return a
    }

    function d(a, c) {
        var b = "", f, e, d;
        for (f = 0; f < c.length; f += 1)if (e = c[f], d = a.getAttributeNS(e[0], e[1])) {
            d = d.trim();
            if (G.hasOwnProperty(e[1])) {
                var k = d.indexOf(" "), g = void 0, l = void 0;
                -1 !== k ? (g = d.substring(0, k),
                    l = d.substring(k)) : (g = d, l = "");
                (g = z.parseLength(g)) && "pt" === g.unit && 0.75 > g.value && (d = "0.75pt" + l)
            }
            e[2] && (b += e[2] + ":" + d + ";")
        }
        return b
    }

    function n(c) {
        return(c = m(c, f, "text-properties")) ? z.parseFoFontSize(c.getAttributeNS(a, "font-size")) : null
    }

    function r(a, c, b, f) {
        return c + c + b + b + f + f
    }

    function k(c, b, e, d) {
        b = 'text|list[text|style-name="' + b + '"]';
        var k = e.getAttributeNS(x, "level");
        e = m(e, f, "list-level-properties");
        e = m(e, f, "list-level-label-alignment");
        var g, l;
        e && (g = e.getAttributeNS(a, "text-indent"), l = e.getAttributeNS(a,
            "margin-left"));
        g || (g = "-0.6cm");
        e = "-" === g.charAt(0) ? g.substring(1) : "-" + g;
        for (k = k && parseInt(k, 10); 1 < k;)b += " > text|list-item > text|list", k -= 1;
        if (l) {
            k = b + " > text|list-item > *:not(text|list):first-child";
            k += "{";
            k = k + ("margin-left:" + l + ";") + "}";
            try {
                c.insertRule(k, c.cssRules.length)
            } catch (h) {
                runtime.log("cannot load rule: " + k)
            }
        }
        d = b + " > text|list-item > *:not(text|list):first-child:before{" + d + ";";
        d = d + "counter-increment:list;" + ("margin-left:" + g + ";");
        d += "width:" + e + ";";
        d += "display:inline-block}";
        try {
            c.insertRule(d,
                c.cssRules.length)
        } catch (n) {
            runtime.log("cannot load rule: " + d)
        }
    }

    function e(b, g, h, p) {
        if ("list" === g)for (var s = p.element.firstChild, t, u; s;) {
            if (s.namespaceURI === x)if (t = s, "list-level-style-number" === s.localName) {
                var G = t;
                u = G.getAttributeNS(f, "num-format");
                var N = G.getAttributeNS(f, "num-suffix") || "", G = G.getAttributeNS(f, "num-prefix") || "", Y = {1: "decimal", a: "lower-latin", A: "upper-latin", i: "lower-roman", I: "upper-roman"}, V = "";
                G && (V += ' "' + G + '"');
                V = Y.hasOwnProperty(u) ? V + (" counter(list, " + Y[u] + ")") : u ? V + (' "' + u +
                    '"') : V + " ''";
                u = "content:" + V + ' "' + N + '"';
                k(b, h, t, u)
            } else"list-level-style-image" === s.localName ? (u = "content: none;", k(b, h, t, u)) : "list-level-style-bullet" === s.localName && (u = "content: '" + t.getAttributeNS(x, "bullet-char") + "';", k(b, h, t, u));
            s = s.nextSibling
        } else if ("page" === g) {
            if (u = p.element, G = N = h = "", s = m(u, f, "page-layout-properties"))if (t = u.getAttributeNS(f, "name"), h += d(s, aa), (N = m(s, f, "background-image")) && (G = N.getAttributeNS(w, "href")) && (h = h + ("background-image: url('odfkit:" + G + "');") + d(N, M)), "presentation" ===
                U)for (u = (u = m(u.parentNode.parentNode, l, "master-styles")) && u.firstElementChild; u;) {
                if (u.namespaceURI === f && "master-page" === u.localName && u.getAttributeNS(f, "page-layout-name") === t) {
                    G = u.getAttributeNS(f, "name");
                    N = "draw|page[draw|master-page-name=" + G + "] {" + h + "}";
                    G = "office|body, draw|page[draw|master-page-name=" + G + "] {" + d(s, Z) + " }";
                    try {
                        b.insertRule(N, b.cssRules.length), b.insertRule(G, b.cssRules.length)
                    } catch (ga) {
                        throw ga;
                    }
                }
                u = u.nextElementSibling
            } else if ("text" === U) {
                N = "office|text {" + h + "}";
                G = "office|body {width: " +
                    s.getAttributeNS(a, "page-width") + ";}";
                try {
                    b.insertRule(N, b.cssRules.length), b.insertRule(G, b.cssRules.length)
                } catch (ha) {
                    throw ha;
                }
            }
        } else {
            h = q(g, h, p).join(",");
            s = "";
            if (t = m(p.element, f, "text-properties")) {
                G = t;
                u = V = "";
                N = 1;
                t = "" + d(G, y);
                Y = G.getAttributeNS(f, "text-underline-style");
                "solid" === Y && (V += " underline");
                Y = G.getAttributeNS(f, "text-line-through-style");
                "solid" === Y && (V += " line-through");
                V.length && (t += "text-decoration:" + V + ";");
                if (V = G.getAttributeNS(f, "font-name") || G.getAttributeNS(a, "font-family"))Y =
                    T[V], t += "font-family: " + (Y || V) + ";";
                Y = G.parentNode;
                if (G = n(Y)) {
                    for (; Y;) {
                        if (G = n(Y)) {
                            if ("%" !== G.unit) {
                                u = "font-size: " + G.value * N + G.unit + ";";
                                break
                            }
                            N *= G.value / 100
                        }
                        G = Y;
                        V = Y = "";
                        Y = null;
                        "default-style" === G.localName ? Y = null : (Y = G.getAttributeNS(f, "parent-style-name"), V = G.getAttributeNS(f, "family"), Y = P.getODFElementsWithXPath(S, Y ? "//style:*[@style:name='" + Y + "'][@style:family='" + V + "']" : "//style:default-style[@style:family='" + V + "']", odf.Namespaces.lookupNamespaceURI)[0])
                    }
                    u || (u = "font-size: " + parseFloat(K) * N + ba.getUnits(K) +
                        ";");
                    t += u
                }
                s += t
            }
            if (t = m(p.element, f, "paragraph-properties"))u = t, t = "" + d(u, O), (N = m(u, f, "background-image")) && (G = N.getAttributeNS(w, "href")) && (t = t + ("background-image: url('odfkit:" + G + "');") + d(N, M)), (u = u.getAttributeNS(a, "line-height")) && "normal" !== u && (u = z.parseFoLineHeight(u), t = "%" !== u.unit ? t + ("line-height: " + u.value + u.unit + ";") : t + ("line-height: " + u.value / 100 + ";")), s += t;
            if (t = m(p.element, f, "graphic-properties"))G = t, t = "" + d(G, D), u = G.getAttributeNS(c, "opacity"), N = G.getAttributeNS(c, "fill"), G = G.getAttributeNS(c,
                "fill-color"), "solid" === N || "hatch" === N ? G && "none" !== G ? (u = isNaN(parseFloat(u)) ? 1 : parseFloat(u) / 100, N = G.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, r), (G = (N = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(N)) ? {r: parseInt(N[1], 16), g: parseInt(N[2], 16), b: parseInt(N[3], 16)} : null) && (t += "background-color: rgba(" + G.r + "," + G.g + "," + G.b + "," + u + ");")) : t += "background: none;" : "none" === N && (t += "background: none;"), s += t;
            if (t = m(p.element, f, "drawing-page-properties"))u = "" + d(t, D), "true" === t.getAttributeNS(v, "background-visible") &&
                (u += "background: none;"), s += u;
            if (t = m(p.element, f, "table-cell-properties"))t = "" + d(t, H), s += t;
            if (t = m(p.element, f, "table-row-properties"))t = "" + d(t, I), s += t;
            if (t = m(p.element, f, "table-column-properties"))t = "" + d(t, Q), s += t;
            if (t = m(p.element, f, "table-properties"))u = t, t = "" + d(u, J), u = u.getAttributeNS(C, "border-model"), "collapsing" === u ? t += "border-collapse:collapse;" : "separating" === u && (t += "border-collapse:separate;"), s += t;
            if (0 !== s.length)try {
                b.insertRule(h + "{" + s + "}", b.cssRules.length)
            } catch (R) {
                throw R;
            }
        }
        for (var da in p.derivedStyles)p.derivedStyles.hasOwnProperty(da) &&
        e(b, g, da, p.derivedStyles[da])
    }

    var c = odf.Namespaces.drawns, a = odf.Namespaces.fons, l = odf.Namespaces.officens, f = odf.Namespaces.stylens, s = odf.Namespaces.svgns, C = odf.Namespaces.tablens, x = odf.Namespaces.textns, w = odf.Namespaces.xlinkns, v = odf.Namespaces.presentationns, u = {graphic: "draw", "drawing-page": "draw", paragraph: "text", presentation: "presentation", ruby: "text", section: "text", table: "table", "table-cell": "table", "table-column": "table", "table-row": "table", text: "text", list: "text", page: "office"}, t = {graphic: "circle connected control custom-shape ellipse frame g line measure page page-thumbnail path polygon polyline rect regular-polygon".split(" "),
            paragraph: "alphabetical-index-entry-template h illustration-index-entry-template index-source-style object-index-entry-template p table-index-entry-template table-of-content-entry-template user-index-entry-template".split(" "), presentation: "caption circle connector control custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "), "drawing-page": "caption circle connector control page custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),
            ruby: ["ruby", "ruby-text"], section: "alphabetical-index bibliography illustration-index index-title object-index section table-of-content table-index user-index".split(" "), table: ["background", "table"], "table-cell": "body covered-table-cell even-columns even-rows first-column first-row last-column last-row odd-columns odd-rows table-cell".split(" "), "table-column": ["table-column"], "table-row": ["table-row"], text: "a index-entry-chapter index-entry-link-end index-entry-link-start index-entry-page-number index-entry-span index-entry-tab-stop index-entry-text index-title-template linenumbering-configuration list-level-style-number list-level-style-bullet outline-level-style span".split(" "),
            list: ["list-item"]}, y = [
            [a, "color", "color"],
            [a, "background-color", "background-color"],
            [a, "font-weight", "font-weight"],
            [a, "font-style", "font-style"]
        ], M = [
            [f, "repeat", "background-repeat"]
        ], O = [
            [a, "background-color", "background-color"],
            [a, "text-align", "text-align"],
            [a, "text-indent", "text-indent"],
            [a, "padding", "padding"],
            [a, "padding-left", "padding-left"],
            [a, "padding-right", "padding-right"],
            [a, "padding-top", "padding-top"],
            [a, "padding-bottom", "padding-bottom"],
            [a, "border-left", "border-left"],
            [a, "border-right",
                "border-right"],
            [a, "border-top", "border-top"],
            [a, "border-bottom", "border-bottom"],
            [a, "margin", "margin"],
            [a, "margin-left", "margin-left"],
            [a, "margin-right", "margin-right"],
            [a, "margin-top", "margin-top"],
            [a, "margin-bottom", "margin-bottom"],
            [a, "border", "border"]
        ], D = [
            [a, "background-color", "background-color"],
            [a, "min-height", "min-height"],
            [c, "stroke", "border"],
            [s, "stroke-color", "border-color"],
            [s, "stroke-width", "border-width"],
            [a, "border", "border"],
            [a, "border-left", "border-left"],
            [a, "border-right", "border-right"],
            [a, "border-top", "border-top"],
            [a, "border-bottom", "border-bottom"]
        ], H = [
            [a, "background-color", "background-color"],
            [a, "border-left", "border-left"],
            [a, "border-right", "border-right"],
            [a, "border-top", "border-top"],
            [a, "border-bottom", "border-bottom"],
            [a, "border", "border"]
        ], Q = [
            [f, "column-width", "width"]
        ], I = [
            [f, "row-height", "height"],
            [a, "keep-together", null]
        ], J = [
            [f, "width", "width"],
            [a, "margin-left", "margin-left"],
            [a, "margin-right", "margin-right"],
            [a, "margin-top", "margin-top"],
            [a, "margin-bottom", "margin-bottom"]
        ],
        aa = [
            [a, "background-color", "background-color"],
            [a, "padding", "padding"],
            [a, "padding-left", "padding-left"],
            [a, "padding-right", "padding-right"],
            [a, "padding-top", "padding-top"],
            [a, "padding-bottom", "padding-bottom"],
            [a, "border", "border"],
            [a, "border-left", "border-left"],
            [a, "border-right", "border-right"],
            [a, "border-top", "border-top"],
            [a, "border-bottom", "border-bottom"],
            [a, "margin", "margin"],
            [a, "margin-left", "margin-left"],
            [a, "margin-right", "margin-right"],
            [a, "margin-top", "margin-top"],
            [a, "margin-bottom",
                "margin-bottom"]
        ], Z = [
            [a, "page-width", "width"],
            [a, "page-height", "height"]
        ], G = {border: !0, "border-left": !0, "border-right": !0, "border-top": !0, "border-bottom": !0, "stroke-width": !0}, T = {}, z = new odf.OdfUtils, U, S, K, P = xmldom.XPath, ba = new core.CSSUnits;
    this.style2css = function (a, c, b, f, d) {
        for (var k, g, l, m; c.cssRules.length;)c.deleteRule(c.cssRules.length - 1);
        k = null;
        f && (k = f.ownerDocument, S = f.parentNode);
        d && (k = d.ownerDocument, S = d.parentNode);
        if (k)for (m in odf.Namespaces.forEachPrefix(function (a, b) {
            g = "@namespace " +
                a + " url(" + b + ");";
            try {
                c.insertRule(g, c.cssRules.length)
            } catch (f) {
            }
        }), T = b, U = a, K = runtime.getWindow().getComputedStyle(document.body, null).getPropertyValue("font-size") || "12pt", a = h(f), f = h(d), d = {}, u)if (u.hasOwnProperty(m))for (l in b = d[m] = {}, p(a[m], b), p(f[m], b), b)b.hasOwnProperty(l) && e(c, m, l, b[l])
    }
};
// Input 33
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.Canvas = function () {
};
ops.Canvas.prototype.getZoomLevel = function () {
};
ops.Canvas.prototype.getElement = function () {
};
// Input 34
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
(function () {
    function h() {
        function a(f) {
            b = !0;
            runtime.setTimeout(function () {
                try {
                    f()
                } catch (e) {
                    runtime.log(String(e))
                }
                b = !1;
                0 < c.length && a(c.pop())
            }, 10)
        }

        var c = [], b = !1;
        this.clearQueue = function () {
            c.length = 0
        };
        this.addToQueue = function (f) {
            if (0 === c.length && !b)return a(f);
            c.push(f)
        }
    }

    function g(a) {
        function c() {
            for (; 0 < b.cssRules.length;)b.deleteRule(0);
            b.insertRule("#shadowContent draw|page {display:none;}", 0);
            b.insertRule("office|presentation draw|page {display:none;}", 1);
            b.insertRule("#shadowContent draw|page:nth-of-type(" +
                f + ") {display:block;}", 2);
            b.insertRule("office|presentation draw|page:nth-of-type(" + f + ") {display:block;}", 3)
        }

        var b = a.sheet, f = 1;
        this.showFirstPage = function () {
            f = 1;
            c()
        };
        this.showNextPage = function () {
            f += 1;
            c()
        };
        this.showPreviousPage = function () {
            1 < f && (f -= 1, c())
        };
        this.showPage = function (a) {
            0 < a && (f = a, c())
        };
        this.css = a;
        this.destroy = function (c) {
            a.parentNode.removeChild(a);
            c()
        }
    }

    function b(a) {
        for (; a.firstChild;)a.removeChild(a.firstChild)
    }

    function p(a) {
        a = a.sheet;
        for (var c = a.cssRules; c.length;)a.deleteRule(c.length -
            1)
    }

    function q(a, c, b) {
        (new odf.Style2CSS).style2css(a.getDocumentType(), b.sheet, c.getFontMap(), a.rootElement.styles, a.rootElement.automaticStyles)
    }

    function m(a, c, b) {
        var f = null;
        a = a.rootElement.body.getElementsByTagNameNS(D, b + "-decl");
        b = c.getAttributeNS(D, "use-" + b + "-name");
        var e;
        if (b && 0 < a.length)for (c = 0; c < a.length; c += 1)if (e = a[c], e.getAttributeNS(D, "name") === b) {
            f = e.textContent;
            break
        }
        return f
    }

    function d(a, c, f, e) {
        var d = a.ownerDocument;
        c = a.getElementsByTagNameNS(c, f);
        for (a = 0; a < c.length; a += 1)b(c[a]), e && (f =
            c[a], f.appendChild(d.createTextNode(e)))
    }

    function n(a, c, b) {
        c.setAttributeNS("urn:webodf:names:helper", "styleid", a);
        var f, e = c.getAttributeNS(y, "anchor-type"), d = c.getAttributeNS(u, "x"), k = c.getAttributeNS(u, "y"), g = c.getAttributeNS(u, "width"), l = c.getAttributeNS(u, "height"), m = c.getAttributeNS(x, "min-height"), h = c.getAttributeNS(x, "min-width");
        if ("as-char" === e)f = "display: inline-block;"; else if (e || d || k)f = "position: absolute;"; else if (g || l || m || h)f = "display: block;";
        d && (f += "left: " + d + ";");
        k && (f += "top: " + k +
            ";");
        g && (f += "width: " + g + ";");
        l && (f += "height: " + l + ";");
        m && (f += "min-height: " + m + ";");
        h && (f += "min-width: " + h + ";");
        f && (f = "draw|" + c.localName + '[webodfhelper|styleid="' + a + '"] {' + f + "}", b.insertRule(f, b.cssRules.length))
    }

    function r(a) {
        for (a = a.firstChild; a;) {
            if (a.namespaceURI === w && "binary-data" === a.localName)return"data:image/png;base64," + a.textContent.replace(/[\r\n\s]/g, "");
            a = a.nextSibling
        }
        return""
    }

    function k(a, c, b, f) {
        function e(c) {
            c && (c = 'draw|image[webodfhelper|styleid="' + a + '"] {' + ("background-image: url(" +
                c + ");") + "}", f.insertRule(c, f.cssRules.length))
        }

        function d(a) {
            e(a.url)
        }

        b.setAttributeNS("urn:webodf:names:helper", "styleid", a);
        var k = b.getAttributeNS(M, "href"), g;
        if (k)try {
            g = c.getPart(k), g.onchange = d, g.load()
        } catch (l) {
            runtime.log("slight problem: " + String(l))
        } else k = r(b), e(k)
    }

    function e(a) {
        var c = a.ownerDocument;
        J.getElementsByTagNameNS(a, y, "line-break").forEach(function (a) {
            a.hasChildNodes() || a.appendChild(c.createElement("br"))
        })
    }

    function c(a) {
        var c = a.ownerDocument;
        J.getElementsByTagNameNS(a, y, "s").forEach(function (a) {
            for (var b,
                     f; a.firstChild;)a.removeChild(a.firstChild);
            a.appendChild(c.createTextNode(" "));
            f = parseInt(a.getAttributeNS(y, "c"), 10);
            if (1 < f)for (a.removeAttributeNS(y, "c"), b = 1; b < f; b += 1)a.parentNode.insertBefore(a.cloneNode(!0), a)
        })
    }

    function a(a) {
        J.getElementsByTagNameNS(a, y, "tab").forEach(function (a) {
            a.textContent = "\t"
        })
    }

    function l(a, c) {
        function b(a, f) {
            var k = g.documentElement.namespaceURI;
            "video/" === f.substr(0, 6) ? (e = g.createElementNS(k, "video"), e.setAttribute("controls", "controls"), d = g.createElementNS(k, "source"),
                a && d.setAttribute("src", a), d.setAttribute("type", f), e.appendChild(d), c.parentNode.appendChild(e)) : c.innerHtml = "Unrecognised Plugin"
        }

        function f(a) {
            b(a.url, a.mimetype)
        }

        var e, d, k, g = c.ownerDocument, l;
        if (k = c.getAttributeNS(M, "href"))try {
            l = a.getPart(k), l.onchange = f, l.load()
        } catch (m) {
            runtime.log("slight problem: " + String(m))
        } else runtime.log("using MP4 data fallback"), k = r(c), b(k, "video/mp4")
    }

    function f(a) {
        var c = a.getElementsByTagName("head")[0], b, f;
        b = a.styleSheets.length;
        for (f = c.firstElementChild; f && ("style" !==
            f.localName || !f.hasAttribute("webodfcss"));)f = f.nextElementSibling;
        if (f)return b = parseInt(f.getAttribute("webodfcss"), 10), f.setAttribute("webodfcss", b + 1), f;
        "string" === String(typeof webodf_css) ? b = webodf_css : (f = "webodf.css", runtime.currentDirectory && (f = runtime.currentDirectory(), 0 < f.length && "/" !== f.substr(-1) && (f += "/"), f += "../webodf.css"), b = runtime.readFileSync(f, "utf-8"));
        f = a.createElementNS(c.namespaceURI, "style");
        f.setAttribute("media", "screen, print, handheld, projection");
        f.setAttribute("type",
            "text/css");
        f.setAttribute("webodfcss", "1");
        f.appendChild(a.createTextNode(b));
        c.appendChild(f);
        return f
    }

    function s(a) {
        var c = a.getElementsByTagName("head")[0], b = a.createElementNS(c.namespaceURI, "style"), f = "";
        b.setAttribute("type", "text/css");
        b.setAttribute("media", "screen, print, handheld, projection");
        odf.Namespaces.forEachPrefix(function (a, c) {
            f += "@namespace " + a + " url(" + c + ");\n"
        });
        f += "@namespace webodfhelper url(urn:webodf:names:helper);\n";
        b.appendChild(a.createTextNode(f));
        c.appendChild(b);
        return b
    }

    var C = odf.Namespaces.drawns, x = odf.Namespaces.fons, w = odf.Namespaces.officens, v = odf.Namespaces.stylens, u = odf.Namespaces.svgns, t = odf.Namespaces.tablens, y = odf.Namespaces.textns, M = odf.Namespaces.xlinkns, O = odf.Namespaces.xmlns, D = odf.Namespaces.presentationns, H = runtime.getWindow(), Q = xmldom.XPath, I = new odf.OdfUtils, J = new core.DomUtils;
    odf.OdfCanvas = function (r) {
        function u(a, c, b) {
            function f(a, c, b, e) {
                B.addToQueue(function () {
                    k(a, c, b, e)
                })
            }

            var e, d;
            e = c.getElementsByTagNameNS(C, "image");
            for (c = 0; c < e.length; c += 1)d =
                e.item(c), f("image" + String(c), a, d, b)
        }

        function M(a, c) {
            function b(a, c) {
                B.addToQueue(function () {
                    l(a, c)
                })
            }

            var f, e, d;
            e = c.getElementsByTagNameNS(C, "plugin");
            for (f = 0; f < e.length; f += 1)d = e.item(f), b(a, d)
        }

        function x() {
            var a;
            E.firstChild && (1 < R ? (E.style.MozTransformOrigin = "center top", E.style.WebkitTransformOrigin = "center top", E.style.OTransformOrigin = "center top", E.style.msTransformOrigin = "center top") : (E.style.MozTransformOrigin = "left top", E.style.WebkitTransformOrigin = "left top", E.style.OTransformOrigin = "left top",
                E.style.msTransformOrigin = "left top"), E.style.WebkitTransform = "scale(" + R + ")", E.style.MozTransform = "scale(" + R + ")", E.style.OTransform = "scale(" + R + ")", E.style.msTransform = "scale(" + R + ")", ca && ((a = ca.getMinimumHeightForAnnotationPane()) ? E.style.minHeight = a : E.style.removeProperty("min-height")), r.style.width = Math.round(R * E.offsetWidth) + "px", r.style.height = Math.round(R * E.offsetHeight) + "px")
        }

        function z(a) {
            X ? (W.parentNode || E.appendChild(W), ca && ca.forgetAnnotations(), ca = new gui.AnnotationViewManager(K, a.body,
                W, fa), J.getElementsByTagNameNS(a.body, w, "annotation").forEach(ca.addAnnotation), ca.rerenderAnnotations(), x()) : W.parentNode && (E.removeChild(W), ca.forgetAnnotations(), x())
        }

        function U(f) {
            function k() {
                p(Y);
                p(V);
                p(ga);
                b(r);
                r.style.display = "inline-block";
                var g = $.rootElement;
                r.ownerDocument.importNode(g, !0);
                ia.setOdfContainer($);
                var l = $, h = Y;
                (new odf.FontLoader).loadFonts(l, h.sheet);
                q($, ia, V);
                h = $;
                l = ga.sheet;
                b(r);
                E = P.createElementNS(r.namespaceURI, "div");
                E.style.display = "inline-block";
                E.style.background = "white";
                E.appendChild(g);
                r.appendChild(E);
                W = P.createElementNS(r.namespaceURI, "div");
                W.id = "annotationsPane";
                ha = P.createElementNS(r.namespaceURI, "div");
                ha.id = "shadowContent";
                ha.style.position = "absolute";
                ha.style.top = 0;
                ha.style.left = 0;
                h.getContentElement().appendChild(ha);
                var s = g.body, J, U = [], A;
                for (J = s.firstElementChild; J && J !== s;)if (J.namespaceURI === C && (U[U.length] = J), J.firstElementChild)J = J.firstElementChild; else {
                    for (; J && J !== s && !J.nextElementSibling;)J = J.parentNode;
                    J && J.nextElementSibling && (J = J.nextElementSibling)
                }
                for (A =
                         0; A < U.length; A += 1)J = U[A], n("frame" + String(A), J, l);
                U = Q.getODFElementsWithXPath(s, ".//*[*[@text:anchor-type='paragraph']]", odf.Namespaces.lookupNamespaceURI);
                for (J = 0; J < U.length; J += 1)s = U[J], s.setAttributeNS && s.setAttributeNS("urn:webodf:names:helper", "containsparagraphanchor", !0);
                var s = ha, B, S, K;
                K = 0;
                var F, L, U = h.rootElement.ownerDocument;
                if ((J = g.body.firstElementChild) && J.namespaceURI === w && ("presentation" === J.localName || "drawing" === J.localName))for (J = J.firstElementChild; J;) {
                    A = J.getAttributeNS(C, "master-page-name");
                    if (A) {
                        for (B = h.rootElement.masterStyles.firstElementChild; B && (B.getAttributeNS(v, "name") !== A || "master-page" !== B.localName || B.namespaceURI !== v);)B = B.nextElementSibling;
                        A = B
                    } else A = null;
                    if (A) {
                        B = J.getAttributeNS("urn:webodf:names:helper", "styleid");
                        S = U.createElementNS(C, "draw:page");
                        L = A.firstElementChild;
                        for (F = 0; L;)"true" !== L.getAttributeNS(D, "placeholder") && (K = L.cloneNode(!0), S.appendChild(K), n(B + "_" + F, K, l)), L = L.nextElementSibling, F += 1;
                        L = F = K = void 0;
                        var ba = S.getElementsByTagNameNS(C, "frame");
                        for (K = 0; K <
                            ba.length; K += 1)F = ba[K], (L = F.getAttributeNS(D, "class")) && !/^(date-time|footer|header|page-number)$/.test(L) && F.parentNode.removeChild(F);
                        s.appendChild(S);
                        K = String(s.getElementsByTagNameNS(C, "page").length);
                        d(S, y, "page-number", K);
                        d(S, D, "header", m(h, J, "header"));
                        d(S, D, "footer", m(h, J, "footer"));
                        n(B, S, l);
                        S.setAttributeNS(C, "draw:master-page-name", A.getAttributeNS(v, "name"))
                    }
                    J = J.nextElementSibling
                }
                s = r.namespaceURI;
                U = g.body.getElementsByTagNameNS(t, "table-cell");
                for (J = 0; J < U.length; J += 1)A = U.item(J), A.hasAttributeNS(t,
                    "number-columns-spanned") && A.setAttributeNS(s, "colspan", A.getAttributeNS(t, "number-columns-spanned")), A.hasAttributeNS(t, "number-rows-spanned") && A.setAttributeNS(s, "rowspan", A.getAttributeNS(t, "number-rows-spanned"));
                e(g.body);
                c(g.body);
                a(g.body);
                u(h, g.body, l);
                M(h, g.body);
                A = g.body;
                h = r.namespaceURI;
                J = {};
                var U = {}, N;
                B = H.document.getElementsByTagNameNS(y, "list-style");
                for (s = 0; s < B.length; s += 1)F = B.item(s), (L = F.getAttributeNS(v, "name")) && (U[L] = F);
                A = A.getElementsByTagNameNS(y, "list");
                for (s = 0; s < A.length; s +=
                    1)if (F = A.item(s), B = F.getAttributeNS(O, "id")) {
                    S = F.getAttributeNS(y, "continue-list");
                    F.setAttributeNS(h, "id", B);
                    K = "text|list#" + B + " > text|list-item > *:first-child:before {";
                    if (L = F.getAttributeNS(y, "style-name")) {
                        F = U[L];
                        N = I.getFirstNonWhitespaceChild(F);
                        F = void 0;
                        if (N)if ("list-level-style-number" === N.localName) {
                            F = N.getAttributeNS(v, "num-format");
                            L = N.getAttributeNS(v, "num-suffix") || "";
                            var ba = "", ba = {1: "decimal", a: "lower-latin", A: "upper-latin", i: "lower-roman", I: "upper-roman"}, R = void 0, R = N.getAttributeNS(v,
                                "num-prefix") || "", R = ba.hasOwnProperty(F) ? R + (" counter(list, " + ba[F] + ")") : F ? R + ("'" + F + "';") : R + " ''";
                            L && (R += " '" + L + "'");
                            F = ba = "content: " + R + ";"
                        } else"list-level-style-image" === N.localName ? F = "content: none;" : "list-level-style-bullet" === N.localName && (F = "content: '" + N.getAttributeNS(y, "bullet-char") + "';");
                        N = F
                    }
                    if (S) {
                        for (F = J[S]; F;)F = J[F];
                        K += "counter-increment:" + S + ";";
                        N ? (N = N.replace("list", S), K += N) : K += "content:counter(" + S + ");"
                    } else S = "", N ? (N = N.replace("list", B), K += N) : K += "content: counter(" + B + ");", K += "counter-increment:" +
                        B + ";", l.insertRule("text|list#" + B + " {counter-reset:" + B + "}", l.cssRules.length);
                    K += "}";
                    J[B] = S;
                    K && l.insertRule(K, l.cssRules.length)
                }
                E.insertBefore(ha, E.firstChild);
                x();
                z(g);
                if (!f && (g = [$], da.hasOwnProperty("statereadychange")))for (l = da.statereadychange, N = 0; N < l.length; N += 1)l[N].apply(null, g)
            }

            $.state === odf.OdfContainer.DONE ? k() : (runtime.log("WARNING: refreshOdf called but ODF was not DONE."), ea = runtime.setTimeout(function na() {
                $.state === odf.OdfContainer.DONE ? k() : (runtime.log("will be back later..."), ea =
                    runtime.setTimeout(na, 500))
            }, 100))
        }

        function S(a) {
            B.clearQueue();
            r.innerHTML = runtime.tr("Loading") + " " + a + "...";
            r.removeAttribute("style");
            $ = new odf.OdfContainer(a, function (a) {
                $ = a;
                U(!1)
            })
        }

        runtime.assert(null !== r && void 0 !== r, "odf.OdfCanvas constructor needs DOM element");
        runtime.assert(null !== r.ownerDocument && void 0 !== r.ownerDocument, "odf.OdfCanvas constructor needs DOM");
        var K = this, P = r.ownerDocument, ba = new core.Async, $, ia = new odf.Formatting, F, E = null, W = null, X = !1, fa = !1, ca = null, N, Y, V, ga, ha, R = 1, da = {}, ea,
            ja, L = !1, A = !1, B = new h;
        this.refreshCSS = function () {
            L = !0;
            ja.trigger()
        };
        this.refreshSize = function () {
            ja.trigger()
        };
        this.odfContainer = function () {
            return $
        };
        this.setOdfContainer = function (a, c) {
            $ = a;
            U(!0 === c)
        };
        this.load = this.load = S;
        this.save = function (a) {
            $.save(a)
        };
        this.addListener = function (a, c) {
            switch (a) {
                case "click":
                    var b = r, f = a;
                    b.addEventListener ? b.addEventListener(f, c, !1) : b.attachEvent ? b.attachEvent("on" + f, c) : b["on" + f] = c;
                    break;
                default:
                    b = da.hasOwnProperty(a) ? da[a] : da[a] = [], c && -1 === b.indexOf(c) && b.push(c)
            }
        };
        this.getFormatting = function () {
            return ia
        };
        this.getAnnotationViewManager = function () {
            return ca
        };
        this.refreshAnnotations = function () {
            z($.rootElement)
        };
        this.rerenderAnnotations = function () {
            ca && (A = !0, ja.trigger())
        };
        this.getSizer = function () {
            return E
        };
        this.enableAnnotations = function (a, c) {
            a !== X && (X = a, fa = c, $ && z($.rootElement))
        };
        this.addAnnotation = function (a) {
            ca && (ca.addAnnotation(a), x())
        };
        this.forgetAnnotations = function () {
            ca && (ca.forgetAnnotations(), x())
        };
        this.setZoomLevel = function (a) {
            R = a;
            x()
        };
        this.getZoomLevel =
            function () {
                return R
            };
        this.fitToContainingElement = function (a, c) {
            var b = r.offsetHeight / R;
            R = a / (r.offsetWidth / R);
            c / b < R && (R = c / b);
            x()
        };
        this.fitToWidth = function (a) {
            R = a / (r.offsetWidth / R);
            x()
        };
        this.fitSmart = function (a, c) {
            var b, f;
            b = r.offsetWidth / R;
            f = r.offsetHeight / R;
            b = a / b;
            void 0 !== c && c / f < b && (b = c / f);
            R = Math.min(1, b);
            x()
        };
        this.fitToHeight = function (a) {
            R = a / (r.offsetHeight / R);
            x()
        };
        this.showFirstPage = function () {
            F.showFirstPage()
        };
        this.showNextPage = function () {
            F.showNextPage()
        };
        this.showPreviousPage = function () {
            F.showPreviousPage()
        };
        this.showPage = function (a) {
            F.showPage(a);
            x()
        };
        this.getElement = function () {
            return r
        };
        this.addCssForFrameWithImage = function (a) {
            var c = a.getAttributeNS(C, "name"), b = a.firstElementChild;
            n(c, a, ga.sheet);
            b && k(c + "img", $, b, ga.sheet)
        };
        this.destroy = function (a) {
            var c = P.getElementsByTagName("head")[0], b = [F.destroy, ja.destroy];
            runtime.clearTimeout(ea);
            W && W.parentNode && W.parentNode.removeChild(W);
            E && (r.removeChild(E), E = null);
            var f = N, e = parseInt(f.getAttribute("webodfcss"), 10);
            1 === e ? f.parentNode.removeChild(f) : f.setAttribute("count",
                e - 1);
            c.removeChild(Y);
            c.removeChild(V);
            c.removeChild(ga);
            ba.destroyAll(b, a)
        };
        N = f(P);
        F = new g(s(P));
        Y = s(P);
        V = s(P);
        ga = s(P);
        ja = new core.ScheduledTask(function () {
            L && (q($, ia, V), L = !1);
            A && (ca && ca.rerenderAnnotations(), A = !1);
            x()
        }, 0)
    }
})();
// Input 35
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.MemberProperties = function () {
};
ops.Member = function (h, g) {
    var b = new ops.MemberProperties;
    this.getMemberId = function () {
        return h
    };
    this.getProperties = function () {
        return b
    };
    this.setProperties = function (g) {
        Object.keys(g).forEach(function (h) {
            b[h] = g[h]
        })
    };
    this.removeProperties = function (g) {
        Object.keys(g).forEach(function (g) {
            "fullName" !== g && "color" !== g && "imageUrl" !== g && b.hasOwnProperty(g) && delete b[g]
        })
    };
    runtime.assert(Boolean(h), "No memberId was supplied!");
    g.fullName || (g.fullName = runtime.tr("Unknown Author"));
    g.color || (g.color = "black");
    g.imageUrl ||
    (g.imageUrl = "avatar-joe.png");
    b = g
};
// Input 36
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.SelectionMover = function (h, g) {
    function b() {
        e.setUnfilteredPosition(h.getNode(), 0);
        return e
    }

    function p(a, c) {
        var b, e = null;
        a && 0 < a.length && (b = c ? a.item(a.length - 1) : a.item(0));
        b && (e = {top: b.top, left: c ? b.right : b.left, bottom: b.bottom});
        return e
    }

    function q(a, c, b, e) {
        var d = a.nodeType;
        b.setStart(a, c);
        b.collapse(!e);
        e = p(b.getClientRects(), !0 === e);
        !e && 0 < c && (b.setStart(a, c - 1), b.setEnd(a, c), e = p(b.getClientRects(), !0));
        e || (d === Node.ELEMENT_NODE && 0 < c && a.childNodes.length >= c ? e = q(a, c - 1, b, !0) : a.nodeType === Node.TEXT_NODE &&
            0 < c ? e = q(a, c - 1, b, !0) : a.previousSibling ? e = q(a.previousSibling, a.previousSibling.nodeType === Node.TEXT_NODE ? a.previousSibling.textContent.length : a.previousSibling.childNodes.length, b, !0) : a.parentNode && a.parentNode !== g ? e = q(a.parentNode, 0, b, !1) : (b.selectNode(g), e = p(b.getClientRects(), !1)));
        runtime.assert(Boolean(e), "No visible rectangle found");
        return e
    }

    function m(a, e, f) {
        for (var d = b(), k = new core.LoopWatchDog(1E4), g = 0, h = 0; 0 < a && d.nextPosition();)k.check(), f.acceptPosition(d) === c && (g += 1, e.acceptPosition(d) ===
            c && (h += g, g = 0, a -= 1));
        return h
    }

    function d(a, e, f) {
        for (var d = b(), k = new core.LoopWatchDog(1E4), g = 0, h = 0; 0 < a && d.previousPosition();)k.check(), f.acceptPosition(d) === c && (g += 1, e.acceptPosition(d) === c && (h += g, g = 0, a -= 1));
        return h
    }

    function n(a, e) {
        var f = b(), d = 0, k = 0, h = 0 > a ? -1 : 1;
        for (a = Math.abs(a); 0 < a;) {
            for (var m = e, n = h, p = f, r = p.container(), y = 0, M = null, O = void 0, D = 10, H = void 0, Q = 0, I = void 0, J = void 0, aa = void 0, H = void 0, Z = g.ownerDocument.createRange(), G = new core.LoopWatchDog(1E4), H = q(r, p.unfilteredDomOffset(), Z), I = H.top, J =
                H.left, aa = I; !0 === (0 > n ? p.previousPosition() : p.nextPosition());)if (G.check(), m.acceptPosition(p) === c && (y += 1, r = p.container(), H = q(r, p.unfilteredDomOffset(), Z), H.top !== I)) {
                if (H.top !== aa && aa !== I)break;
                aa = H.top;
                H = Math.abs(J - H.left);
                if (null === M || H < D)M = r, O = p.unfilteredDomOffset(), D = H, Q = y
            }
            null !== M ? (p.setUnfilteredPosition(M, O), y = Q) : y = 0;
            Z.detach();
            d += y;
            if (0 === d)break;
            k += d;
            a -= 1
        }
        return k * h
    }

    function r(a, e) {
        var f, d, h, m, n = b(), p = k.getParagraphElement(n.getCurrentNode()), r = 0, t = g.ownerDocument.createRange();
        0 > a ? (f =
            n.previousPosition, d = -1) : (f = n.nextPosition, d = 1);
        for (h = q(n.container(), n.unfilteredDomOffset(), t); f.call(n);)if (e.acceptPosition(n) === c) {
            if (k.getParagraphElement(n.getCurrentNode()) !== p)break;
            m = q(n.container(), n.unfilteredDomOffset(), t);
            if (m.bottom !== h.bottom && (h = m.top >= h.top && m.bottom < h.bottom || m.top <= h.top && m.bottom > h.bottom, !h))break;
            r += d;
            h = m
        }
        t.detach();
        return r
    }

    var k = new odf.OdfUtils, e, c = core.PositionFilter.FilterResult.FILTER_ACCEPT;
    this.getStepCounter = function () {
        return{convertForwardStepsBetweenFilters: m,
            convertBackwardStepsBetweenFilters: d, countLinesSteps: n, countStepsToLineBoundary: r}
    };
    (function () {
        e = gui.SelectionMover.createPositionIterator(g);
        var a = g.ownerDocument.createRange();
        a.setStart(e.container(), e.unfilteredDomOffset());
        a.collapse(!0);
        h.setSelectedRange(a)
    })()
};
gui.SelectionMover.createPositionIterator = function (h) {
    var g = new function () {
        this.acceptNode = function (b) {
            return b && "urn:webodf:names:cursor" !== b.namespaceURI && "urn:webodf:names:editinfo" !== b.namespaceURI ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        }
    };
    return new core.PositionIterator(h, 5, g, !1)
};
(function () {
    return gui.SelectionMover
})();
// Input 37
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.Document = function () {
};
ops.Document.prototype.getMemberIds = function () {
};
ops.Document.prototype.removeCursor = function (h) {
};
ops.Document.prototype.getDocumentElement = function () {
};
ops.Document.prototype.getRootNode = function () {
};
ops.Document.prototype.getDOMDocument = function () {
};
ops.Document.prototype.cloneDocumentElement = function () {
};
ops.Document.prototype.setDocumentElement = function (h) {
};
ops.Document.prototype.subscribe = function (h, g) {
};
ops.Document.prototype.unsubscribe = function (h, g) {
};
ops.Document.prototype.getCanvas = function () {
};
ops.Document.prototype.createRootFilter = function (h) {
};
ops.Document.signalCursorAdded = "cursor/added";
ops.Document.signalCursorRemoved = "cursor/removed";
ops.Document.signalCursorMoved = "cursor/moved";
ops.Document.signalMemberAdded = "member/added";
ops.Document.signalMemberUpdated = "member/updated";
ops.Document.signalMemberRemoved = "member/removed";
// Input 38
ops.OdtCursor = function (h, g) {
    var b = this, p = {}, q, m, d, n = new core.EventNotifier([ops.OdtCursor.signalCursorUpdated]);
    this.removeFromDocument = function () {
        d.remove()
    };
    this.subscribe = function (b, d) {
        n.subscribe(b, d)
    };
    this.unsubscribe = function (b, d) {
        n.unsubscribe(b, d)
    };
    this.getStepCounter = function () {
        return m.getStepCounter()
    };
    this.getMemberId = function () {
        return h
    };
    this.getNode = function () {
        return d.getNode()
    };
    this.getAnchorNode = function () {
        return d.getAnchorNode()
    };
    this.getSelectedRange = function () {
        return d.getSelectedRange()
    };
    this.setSelectedRange = function (g, k) {
        d.setSelectedRange(g, k);
        n.emit(ops.OdtCursor.signalCursorUpdated, b)
    };
    this.hasForwardSelection = function () {
        return d.hasForwardSelection()
    };
    this.getDocument = function () {
        return g
    };
    this.getSelectionType = function () {
        return q
    };
    this.setSelectionType = function (b) {
        p.hasOwnProperty(b) ? q = b : runtime.log("Invalid selection type: " + b)
    };
    this.resetSelectionType = function () {
        b.setSelectionType(ops.OdtCursor.RangeSelection)
    };
    d = new core.Cursor(g.getDOMDocument(), h);
    m = new gui.SelectionMover(d,
        g.getRootNode());
    p[ops.OdtCursor.RangeSelection] = !0;
    p[ops.OdtCursor.RegionSelection] = !0;
    b.resetSelectionType()
};
ops.OdtCursor.RangeSelection = "Range";
ops.OdtCursor.RegionSelection = "Region";
ops.OdtCursor.signalCursorUpdated = "cursorUpdated";
(function () {
    return ops.OdtCursor
})();
// Input 39
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.Operation = function () {
};
ops.Operation.prototype.init = function (h) {
};
ops.Operation.prototype.execute = function (h) {
};
ops.Operation.prototype.spec = function () {
};
// Input 40
/*

 Copyright (C) 2010-2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
(function () {
    var h = 0;
    ops.StepsCache = function (g, b, p) {
        function q(a, c, f) {
            this.nodeId = a;
            this.steps = c;
            this.node = f;
            this.previousBookmark = this.nextBookmark = null;
            this.setIteratorPosition = function (a) {
                a.setPositionBeforeElement(f);
                do if (b.acceptPosition(a) === u)break; while (a.nextPosition())
            }
        }

        function m(a, c, f) {
            this.nodeId = a;
            this.steps = c;
            this.node = f;
            this.previousBookmark = this.nextBookmark = null;
            this.setIteratorPosition = function (a) {
                a.setUnfilteredPosition(f, 0);
                do if (b.acceptPosition(a) === u)break; while (a.nextPosition())
            }
        }

        function d(a, c) {
            var b = "[" + a.nodeId;
            c && (b += " => " + c.nodeId);
            return b + "]"
        }

        function n() {
            for (var a = w, c, b, f, e = new core.LoopWatchDog(0, 1E5); a;) {
                e.check();
                (c = a.previousBookmark) ? runtime.assert(c.nextBookmark === a, "Broken bookmark link to previous @" + d(c, a)) : (runtime.assert(a === w, "Broken bookmark link @" + d(a)), runtime.assert(void 0 === v || w.steps <= v, "Base point is damaged @" + d(a)));
                (b = a.nextBookmark) && runtime.assert(b.previousBookmark === a, "Broken bookmark link to next @" + d(a, b));
                if (void 0 === v || a.steps <= v)runtime.assert(x.containsNode(g,
                    a.node), "Disconnected node is being reported as undamaged @" + d(a)), c && (f = a.node.compareDocumentPosition(c.node), runtime.assert(0 === f || 0 !== (f & Node.DOCUMENT_POSITION_PRECEDING), "Bookmark order with previous does not reflect DOM order @" + d(c, a))), b && x.containsNode(g, b.node) && (f = a.node.compareDocumentPosition(b.node), runtime.assert(0 === f || 0 !== (f & Node.DOCUMENT_POSITION_FOLLOWING), "Bookmark order with next does not reflect DOM order @" + d(a, b)));
                a = a.nextBookmark
            }
        }

        function r(a) {
            var c = "";
            a.nodeType === Node.ELEMENT_NODE &&
            (c = a.getAttributeNS(l, "nodeId"));
            return c
        }

        function k(a) {
            var c = h.toString();
            a.setAttributeNS(l, "nodeId", c);
            h += 1;
            return c
        }

        function e(a) {
            var c, b, e = new core.LoopWatchDog(0, 1E4);
            void 0 !== v && a > v && (a = v);
            for (c = Math.floor(a / p) * p; !b && 0 !== c;)b = f[c], c -= p;
            for (b = b || w; b.nextBookmark && b.nextBookmark.steps <= a;)e.check(), b = b.nextBookmark;
            return b
        }

        function c(a) {
            a.previousBookmark && (a.previousBookmark.nextBookmark = a.nextBookmark);
            a.nextBookmark && (a.nextBookmark.previousBookmark = a.previousBookmark)
        }

        function a(a) {
            for (var c,
                     b = null; !b && a && a !== g;)(c = r(a)) && (b = s[c]) && b.node !== a && (runtime.log("Cloned node detected. Creating new bookmark"), b = null, a.removeAttributeNS(l, "nodeId")), a = a.parentNode;
            return b
        }

        var l = "urn:webodf:names:steps", f = {}, s = {}, C = new odf.OdfUtils, x = new core.DomUtils, w, v, u = core.PositionFilter.FilterResult.FILTER_ACCEPT, t;
        this.updateCache = function (a, b, d) {
            var h;
            h = b.getCurrentNode();
            if (b.isBeforeNode() && C.isParagraph(h)) {
                d || (a += 1);
                b = a;
                var l, m, n;
                if (void 0 !== v && v < b) {
                    l = e(v);
                    for (d = l.nextBookmark; d && d.steps <= b;)m = d.nextBookmark,
                        n = Math.ceil(d.steps / p) * p, f[n] === d && delete f[n], x.containsNode(g, d.node) ? d.steps = b + 1 : (c(d), delete s[d.nodeId]), d = m;
                    v = b
                } else l = e(b);
                b = l;
                d = r(h) || k(h);
                (l = s[d]) ? l.node === h ? l.steps = a : (runtime.log("Cloned node detected. Creating new bookmark"), d = k(h), l = s[d] = new q(d, a, h)) : l = s[d] = new q(d, a, h);
                h = l;
                b !== h && b.nextBookmark !== h && (c(h), a = b.nextBookmark, h.nextBookmark = b.nextBookmark, h.previousBookmark = b, b.nextBookmark = h, a && (a.previousBookmark = h));
                a = Math.ceil(h.steps / p) * p;
                b = f[a];
                if (!b || h.steps > b.steps)f[a] = h;
                t()
            }
        };
        this.setToClosestStep = function (a, c) {
            var b;
            t();
            b = e(a);
            b.setIteratorPosition(c);
            return b.steps
        };
        this.setToClosestDomPoint = function (c, b, d) {
            var k, h;
            t();
            if (c === g && 0 === b)k = w; else if (c === g && b === g.childNodes.length)for (h in k = w, f)f.hasOwnProperty(h) && (c = f[h], c.steps > k.steps && (k = c)); else if (k = a(c.childNodes.item(b) || c), !k)for (d.setUnfilteredPosition(c, b); !k && d.previousNode();)k = a(d.getCurrentNode());
            k = k || w;
            void 0 !== v && k.steps > v && (k = e(v));
            k.setIteratorPosition(d);
            return k.steps
        };
        this.damageCacheAfterStep = function (a) {
            0 >
                a && (a = 0);
            void 0 === v ? v = a : a < v && (v = a);
            t()
        };
        (function () {
            var a = r(g) || k(g);
            w = new m(a, 0, g);
            t = ops.StepsCache.ENABLE_CACHE_VERIFICATION ? n : function () {
            }
        })()
    };
    ops.StepsCache.ENABLE_CACHE_VERIFICATION = !1;
    ops.StepsCache.Bookmark = function () {
    };
    ops.StepsCache.Bookmark.prototype.setIteratorPosition = function (g) {
    }
})();
// Input 41
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
(function () {
    ops.StepsTranslator = function (h, g, b, p) {
        function q() {
            var c = h();
            c !== d && (runtime.log("Undo detected. Resetting steps cache"), d = c, n = new ops.StepsCache(d, b, p), k = g(d))
        }

        function m(c, a) {
            if (!a || b.acceptPosition(c) === e)return!0;
            for (; c.previousPosition();)if (b.acceptPosition(c) === e) {
                if (a(0, c.container(), c.unfilteredDomOffset()))return!0;
                break
            }
            for (; c.nextPosition();)if (b.acceptPosition(c) === e) {
                if (a(1, c.container(), c.unfilteredDomOffset()))return!0;
                break
            }
            return!1
        }

        var d = h(), n = new ops.StepsCache(d, b,
            p), r = new core.DomUtils, k = g(h()), e = core.PositionFilter.FilterResult.FILTER_ACCEPT;
        this.convertStepsToDomPoint = function (c) {
            var a, d;
            if (isNaN(c))throw new TypeError("Requested steps is not numeric (" + c + ")");
            if (0 > c)throw new RangeError("Requested steps is negative (" + c + ")");
            q();
            for (a = n.setToClosestStep(c, k); a < c && k.nextPosition();)(d = b.acceptPosition(k) === e) && (a += 1), n.updateCache(a, k, d);
            if (a !== c)throw new RangeError("Requested steps (" + c + ") exceeds available steps (" + a + ")");
            return{node: k.container(), offset: k.unfilteredDomOffset()}
        };
        this.convertDomPointToSteps = function (c, a, g) {
            var f;
            q();
            r.containsNode(d, c) || (a = 0 > r.comparePoints(d, 0, c, a), c = d, a = a ? 0 : d.childNodes.length);
            k.setUnfilteredPosition(c, a);
            m(k, g) || k.setUnfilteredPosition(c, a);
            g = k.container();
            a = k.unfilteredDomOffset();
            c = n.setToClosestDomPoint(g, a, k);
            if (0 > r.comparePoints(k.container(), k.unfilteredDomOffset(), g, a))return 0 < c ? c - 1 : c;
            for (; (k.container() !== g || k.unfilteredDomOffset() !== a) && k.nextPosition();)(f = b.acceptPosition(k) === e) && (c += 1), n.updateCache(c, k, f);
            return c + 0
        };
        this.prime =
            function () {
                var c, a;
                q();
                for (c = n.setToClosestStep(0, k); k.nextPosition();)(a = b.acceptPosition(k) === e) && (c += 1), n.updateCache(c, k, a)
            };
        this.handleStepsInserted = function (c) {
            q();
            n.damageCacheAfterStep(c.position)
        };
        this.handleStepsRemoved = function (c) {
            q();
            n.damageCacheAfterStep(c.position - 1)
        }
    };
    ops.StepsTranslator.PREVIOUS_STEP = 0;
    ops.StepsTranslator.NEXT_STEP = 1;
    return ops.StepsTranslator
})();
// Input 42
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.TextPositionFilter = function (h) {
    function g(g, h, k) {
        var e, c;
        if (h) {
            if (b.isInlineRoot(h) && b.isGroupingElement(k))return d;
            e = b.lookLeftForCharacter(h);
            if (1 === e || 2 === e && (b.scanRightForAnyCharacter(k) || b.scanRightForAnyCharacter(b.nextNode(g))))return m
        }
        e = null === h && b.isParagraph(g);
        c = b.lookRightForCharacter(k);
        if (e)return c ? m : b.scanRightForAnyCharacter(k) ? d : m;
        if (!c)return d;
        h = h || b.previousNode(g);
        return b.scanLeftForAnyCharacter(h) ? d : m
    }

    var b = new odf.OdfUtils, p = Node.ELEMENT_NODE, q = Node.TEXT_NODE, m = core.PositionFilter.FilterResult.FILTER_ACCEPT,
        d = core.PositionFilter.FilterResult.FILTER_REJECT;
    this.acceptPosition = function (n) {
        var r = n.container(), k = r.nodeType, e, c, a;
        if (k !== p && k !== q)return d;
        if (k === q) {
            if (!b.isGroupingElement(r.parentNode) || b.isWithinTrackedChanges(r.parentNode, h()))return d;
            k = n.unfilteredDomOffset();
            e = r.data;
            runtime.assert(k !== e.length, "Unexpected offset.");
            if (0 < k) {
                n = e[k - 1];
                if (!b.isODFWhitespace(n))return m;
                if (1 < k)if (n = e[k - 2], !b.isODFWhitespace(n))c = m; else {
                    if (!b.isODFWhitespace(e.substr(0, k)))return d
                } else a = b.previousNode(r),
                    b.scanLeftForNonSpace(a) && (c = m);
                if (c === m)return b.isTrailingWhitespace(r, k) ? d : m;
                c = e[k];
                return b.isODFWhitespace(c) ? d : b.scanLeftForAnyCharacter(b.previousNode(r)) ? d : m
            }
            a = n.leftNode();
            c = r;
            r = r.parentNode;
            c = g(r, a, c)
        } else!b.isGroupingElement(r) || b.isWithinTrackedChanges(r, h()) ? c = d : (a = n.leftNode(), c = n.rightNode(), c = g(r, a, c));
        return c
    }
};
// Input 43
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OdtDocument = function (h) {
    function g() {
        var a = h.odfContainer().getContentElement(), c = a && a.localName;
        runtime.assert("text" === c, "Unsupported content element type '" + c + "' for OdtDocument");
        return a
    }

    function b() {
        return c.getDocumentElement().ownerDocument
    }

    function p(a) {
        for (; a && !(a.namespaceURI === odf.Namespaces.officens && "text" === a.localName || a.namespaceURI === odf.Namespaces.officens && "annotation" === a.localName);)a = a.parentNode;
        return a
    }

    function q(a) {
        this.acceptPosition = function (c) {
            c = c.container();
            var b;
            b = "string" === typeof a ? f[a].getNode() : a;
            return p(c) === p(b) ? x : w
        }
    }

    function m(a, c, b, f) {
        f = gui.SelectionMover.createPositionIterator(f);
        var e;
        1 === b.length ? e = b[0] : (e = new core.PositionFilterChain, b.forEach(e.addFilter));
        b = new core.StepIterator(e, f);
        b.setPosition(a, c);
        return b
    }

    function d(a) {
        var c = gui.SelectionMover.createPositionIterator(g());
        a = u.convertStepsToDomPoint(a);
        c.setUnfilteredPosition(a.node, a.offset);
        return c
    }

    function n(c) {
        return a.getParagraphElement(c)
    }

    function r(a, c) {
        return h.getFormatting().getStyleElement(a,
            c)
    }

    function k(a) {
        return r(a, "paragraph")
    }

    function e(a, c, b) {
        a = a.childNodes.item(c) || a;
        return(a = n(a)) && l.containsNode(b, a) ? a : b
    }

    var c = this, a, l, f = {}, s = {}, C = new core.EventNotifier([ops.Document.signalMemberAdded, ops.Document.signalMemberUpdated, ops.Document.signalMemberRemoved, ops.Document.signalCursorAdded, ops.Document.signalCursorRemoved, ops.Document.signalCursorMoved, ops.OdtDocument.signalParagraphChanged, ops.OdtDocument.signalParagraphStyleModified, ops.OdtDocument.signalCommonStyleCreated, ops.OdtDocument.signalCommonStyleDeleted,
        ops.OdtDocument.signalTableAdded, ops.OdtDocument.signalOperationStart, ops.OdtDocument.signalOperationEnd, ops.OdtDocument.signalProcessingBatchStart, ops.OdtDocument.signalProcessingBatchEnd, ops.OdtDocument.signalUndoStackChanged, ops.OdtDocument.signalStepsInserted, ops.OdtDocument.signalStepsRemoved]), x = core.PositionFilter.FilterResult.FILTER_ACCEPT, w = core.PositionFilter.FilterResult.FILTER_REJECT, v, u, t;
    this.getDocumentElement = function () {
        return h.odfContainer().rootElement
    };
    this.getDOMDocument = function () {
        return this.getDocumentElement().ownerDocument
    };
    this.cloneDocumentElement = function () {
        var a = c.getDocumentElement(), b = h.getAnnotationViewManager();
        b && b.forgetAnnotations();
        a = a.cloneNode(!0);
        h.refreshAnnotations();
        return a
    };
    this.setDocumentElement = function (a) {
        var c = h.odfContainer();
        c.setRootElement(a);
        h.setOdfContainer(c, !0);
        h.refreshCSS()
    };
    this.getDOMDocument = b;
    this.getRootElement = p;
    this.createStepIterator = m;
    this.getIteratorAtPosition = d;
    this.convertDomPointToCursorStep = function (a, c, b) {
        return u.convertDomPointToSteps(a, c, b)
    };
    this.convertDomToCursorRange =
        function (a, c) {
            var b, f;
            b = c && c(a.anchorNode, a.anchorOffset);
            b = u.convertDomPointToSteps(a.anchorNode, a.anchorOffset, b);
            c || a.anchorNode !== a.focusNode || a.anchorOffset !== a.focusOffset ? (f = c && c(a.focusNode, a.focusOffset), f = u.convertDomPointToSteps(a.focusNode, a.focusOffset, f)) : f = b;
            return{position: b, length: f - b}
        };
    this.convertCursorToDomRange = function (a, c) {
        var f = b().createRange(), e, d;
        e = u.convertStepsToDomPoint(a);
        c ? (d = u.convertStepsToDomPoint(a + c), 0 < c ? (f.setStart(e.node, e.offset), f.setEnd(d.node, d.offset)) :
            (f.setStart(d.node, d.offset), f.setEnd(e.node, e.offset))) : f.setStart(e.node, e.offset);
        return f
    };
    this.getStyleElement = r;
    this.upgradeWhitespacesAtPosition = function (c) {
        c = d(c);
        var b, f, e;
        c.previousPosition();
        c.previousPosition();
        for (e = -1; 1 >= e; e += 1) {
            b = c.container();
            f = c.unfilteredDomOffset();
            if (b.nodeType === Node.TEXT_NODE && " " === b.data[f] && a.isSignificantWhitespace(b, f)) {
                runtime.assert(" " === b.data[f], "upgradeWhitespaceToElement: textNode.data[offset] should be a literal space");
                var k = b.ownerDocument.createElementNS(odf.Namespaces.textns,
                    "text:s"), g = b.parentNode, h = b;
                k.appendChild(b.ownerDocument.createTextNode(" "));
                1 === b.length ? g.replaceChild(k, b) : (b.deleteData(f, 1), 0 < f && (f < b.length && b.splitText(f), h = b.nextSibling), g.insertBefore(k, h));
                b = k;
                c.moveToEndOfNode(b)
            }
            c.nextPosition()
        }
    };
    this.downgradeWhitespacesAtPosition = function (c) {
        var b = d(c), f;
        c = b.container();
        for (b = b.unfilteredDomOffset(); !a.isSpaceElement(c) && c.childNodes.item(b);)c = c.childNodes.item(b), b = 0;
        c.nodeType === Node.TEXT_NODE && (c = c.parentNode);
        a.isDowngradableSpaceElement(c) &&
        (b = c.firstChild, f = c.lastChild, l.mergeIntoParent(c), f !== b && l.normalizeTextNodes(f), l.normalizeTextNodes(b))
    };
    this.getParagraphStyleElement = k;
    this.getParagraphElement = n;
    this.getParagraphStyleAttributes = function (a) {
        return(a = k(a)) ? h.getFormatting().getInheritedStyleAttributes(a, !1) : null
    };
    this.getTextNodeAtStep = function (a, e) {
        var k = d(a), g = k.container(), h, l = 0, m = null;
        g.nodeType === Node.TEXT_NODE ? (h = g, l = k.unfilteredDomOffset(), 0 < h.length && (0 < l && (h = h.splitText(l)), h.parentNode.insertBefore(b().createTextNode(""),
            h), h = h.previousSibling, l = 0)) : (h = b().createTextNode(""), l = 0, g.insertBefore(h, k.rightNode()));
        if (e) {
            if (f[e] && c.getCursorPosition(e) === a) {
                for (m = f[e].getNode(); m.nextSibling && "cursor" === m.nextSibling.localName;)m.parentNode.insertBefore(m.nextSibling, m);
                0 < h.length && h.nextSibling !== m && (h = b().createTextNode(""), l = 0);
                m.parentNode.insertBefore(h, m)
            }
        } else for (; h.nextSibling && "cursor" === h.nextSibling.localName;)h.parentNode.insertBefore(h.nextSibling, h);
        for (; h.previousSibling && h.previousSibling.nodeType ===
            Node.TEXT_NODE;)k = h.previousSibling, k.appendData(h.data), l = k.length, h = k, h.parentNode.removeChild(h.nextSibling);
        for (; h.nextSibling && h.nextSibling.nodeType === Node.TEXT_NODE;)k = h.nextSibling, h.appendData(k.data), h.parentNode.removeChild(k);
        return{textNode: h, offset: l}
    };
    this.fixCursorPositions = function () {
        Object.keys(f).forEach(function (a) {
            var b = f[a], d = p(b.getNode()), k = c.createRootFilter(d), g, h, l, n = !1;
            l = b.getSelectedRange();
            g = e(l.startContainer, l.startOffset, d);
            h = m(l.startContainer, l.startOffset, [v, k],
                g);
            l.collapsed ? d = h : (g = e(l.endContainer, l.endOffset, d), d = m(l.endContainer, l.endOffset, [v, k], g));
            h.isStep() && d.isStep() ? h.container() !== d.container() || h.offset() !== d.offset() || l.collapsed && b.getAnchorNode() === b.getNode() || (n = !0, l.setStart(h.container(), h.offset()), l.collapse(!0)) : (n = !0, runtime.assert(h.roundToClosestStep(), "No walkable step found for cursor owned by " + a), l.setStart(h.container(), h.offset()), runtime.assert(d.roundToClosestStep(), "No walkable step found for cursor owned by " + a), l.setEnd(d.container(),
                d.offset()));
            n && (b.setSelectedRange(l, b.hasForwardSelection()), c.emit(ops.Document.signalCursorMoved, b))
        })
    };
    this.getCursorPosition = function (a) {
        return(a = f[a]) ? u.convertDomPointToSteps(a.getNode(), 0) : 0
    };
    this.getCursorSelection = function (a) {
        a = f[a];
        var c = 0, b = 0;
        a && (c = u.convertDomPointToSteps(a.getNode(), 0), b = u.convertDomPointToSteps(a.getAnchorNode(), 0));
        return{position: b, length: c - b}
    };
    this.getPositionFilter = function () {
        return v
    };
    this.getOdfCanvas = function () {
        return h
    };
    this.getCanvas = function () {
        return h
    };
    this.getRootNode = g;
    this.addMember = function (a) {
        runtime.assert(void 0 === s[a.getMemberId()], "This member already exists");
        s[a.getMemberId()] = a
    };
    this.getMember = function (a) {
        return s.hasOwnProperty(a) ? s[a] : null
    };
    this.removeMember = function (a) {
        delete s[a]
    };
    this.getCursor = function (a) {
        return f[a]
    };
    this.getMemberIds = function () {
        var a = [], c;
        for (c in f)f.hasOwnProperty(c) && a.push(f[c].getMemberId());
        return a
    };
    this.addCursor = function (a) {
        runtime.assert(Boolean(a), "OdtDocument::addCursor without cursor");
        var b = a.getMemberId(),
            e = c.convertCursorToDomRange(0, 0);
        runtime.assert("string" === typeof b, "OdtDocument::addCursor has cursor without memberid");
        runtime.assert(!f[b], "OdtDocument::addCursor is adding a duplicate cursor with memberid " + b);
        a.setSelectedRange(e, !0);
        f[b] = a
    };
    this.removeCursor = function (a) {
        var b = f[a];
        return b ? (b.removeFromDocument(), delete f[a], c.emit(ops.Document.signalCursorRemoved, a), !0) : !1
    };
    this.moveCursor = function (a, b, e, d) {
        a = f[a];
        b = c.convertCursorToDomRange(b, e);
        a && (a.setSelectedRange(b, 0 <= e), a.setSelectionType(d ||
            ops.OdtCursor.RangeSelection))
    };
    this.getFormatting = function () {
        return h.getFormatting()
    };
    this.emit = function (a, c) {
        C.emit(a, c)
    };
    this.subscribe = function (a, c) {
        C.subscribe(a, c)
    };
    this.unsubscribe = function (a, c) {
        C.unsubscribe(a, c)
    };
    this.createRootFilter = function (a) {
        return new q(a)
    };
    this.close = function (a) {
        a()
    };
    this.destroy = function (a) {
        a()
    };
    v = new ops.TextPositionFilter(g);
    a = new odf.OdfUtils;
    l = new core.DomUtils;
    u = new ops.StepsTranslator(g, gui.SelectionMover.createPositionIterator, v, 500);
    C.subscribe(ops.OdtDocument.signalStepsInserted,
        u.handleStepsInserted);
    C.subscribe(ops.OdtDocument.signalStepsRemoved, u.handleStepsRemoved);
    C.subscribe(ops.OdtDocument.signalOperationEnd, function (a) {
        var b = a.spec(), f = b.memberid, b = (new Date(b.timestamp)).toISOString(), e = h.odfContainer();
        a.isEdit && (f = c.getMember(f).getProperties().fullName, e.setMetadata({"dc:creator": f, "dc:date": b}, null), t || (e.incrementEditingCycles(), e.setMetadata(null, ["meta:editing-duration", "meta:document-statistic"])), t = a)
    })
};
ops.OdtDocument.signalParagraphChanged = "paragraph/changed";
ops.OdtDocument.signalTableAdded = "table/added";
ops.OdtDocument.signalCommonStyleCreated = "style/created";
ops.OdtDocument.signalCommonStyleDeleted = "style/deleted";
ops.OdtDocument.signalParagraphStyleModified = "paragraphstyle/modified";
ops.OdtDocument.signalOperationStart = "operation/start";
ops.OdtDocument.signalOperationEnd = "operation/end";
ops.OdtDocument.signalProcessingBatchStart = "router/batchstart";
ops.OdtDocument.signalProcessingBatchEnd = "router/batchend";
ops.OdtDocument.signalUndoStackChanged = "undo/changed";
ops.OdtDocument.signalStepsInserted = "steps/inserted";
ops.OdtDocument.signalStepsRemoved = "steps/removed";
(function () {
    return ops.OdtDocument
})();
// Input 44
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpAddAnnotation = function () {
    function h(b, d, k) {
        var e = b.getTextNodeAtStep(k, g);
        e && (b = e.textNode, k = b.parentNode, e.offset !== b.length && b.splitText(e.offset), k.insertBefore(d, b.nextSibling), 0 === b.length && k.removeChild(b))
    }

    var g, b, p, q, m, d;
    this.init = function (d) {
        g = d.memberid;
        b = parseInt(d.timestamp, 10);
        p = parseInt(d.position, 10);
        q = parseInt(d.length, 10) || 0;
        m = d.name
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (n) {
        var r = n.getCursor(g), k, e;
        e = new core.DomUtils;
        d = n.getDOMDocument();
        var c = new Date(b),
            a, l, f, s;
        a = d.createElementNS(odf.Namespaces.officens, "office:annotation");
        a.setAttributeNS(odf.Namespaces.officens, "office:name", m);
        k = d.createElementNS(odf.Namespaces.dcns, "dc:creator");
        k.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", g);
        k.textContent = n.getMember(g).getProperties().fullName;
        l = d.createElementNS(odf.Namespaces.dcns, "dc:date");
        l.appendChild(d.createTextNode(c.toISOString()));
        c = d.createElementNS(odf.Namespaces.textns, "text:list");
        f = d.createElementNS(odf.Namespaces.textns,
            "text:list-item");
        s = d.createElementNS(odf.Namespaces.textns, "text:p");
        f.appendChild(s);
        c.appendChild(f);
        a.appendChild(k);
        a.appendChild(l);
        a.appendChild(c);
        q && (k = d.createElementNS(odf.Namespaces.officens, "office:annotation-end"), k.setAttributeNS(odf.Namespaces.officens, "office:name", m), a.annotationEndElement = k, h(n, k, p + q));
        h(n, a, p);
        n.emit(ops.OdtDocument.signalStepsInserted, {position: p, length: q});
        r && (k = d.createRange(), e = e.getElementsByTagNameNS(a, odf.Namespaces.textns, "p")[0], k.selectNodeContents(e),
            r.setSelectedRange(k, !1), n.emit(ops.Document.signalCursorMoved, r));
        n.getOdfCanvas().addAnnotation(a);
        n.fixCursorPositions();
        return!0
    };
    this.spec = function () {
        return{optype: "AddAnnotation", memberid: g, timestamp: b, position: p, length: q, name: m}
    }
};
// Input 45
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpAddCursor = function () {
    var h, g;
    this.init = function (b) {
        h = b.memberid;
        g = b.timestamp
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (b) {
        var g = b.getCursor(h);
        if (g)return!1;
        g = new ops.OdtCursor(h, b);
        b.addCursor(g);
        b.emit(ops.Document.signalCursorAdded, g);
        return!0
    };
    this.spec = function () {
        return{optype: "AddCursor", memberid: h, timestamp: g}
    }
};
// Input 46
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpAddMember = function () {
    var h, g, b;
    this.init = function (p) {
        h = p.memberid;
        g = parseInt(p.timestamp, 10);
        b = p.setProperties
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (g) {
        var q;
        if (g.getMember(h))return!1;
        q = new ops.Member(h, b);
        g.addMember(q);
        g.emit(ops.Document.signalMemberAdded, q);
        return!0
    };
    this.spec = function () {
        return{optype: "AddMember", memberid: h, timestamp: g, setProperties: b}
    }
};
// Input 47
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpAddStyle = function () {
    var h, g, b, p, q, m, d = odf.Namespaces.stylens;
    this.init = function (d) {
        h = d.memberid;
        g = d.timestamp;
        b = d.styleName;
        p = d.styleFamily;
        q = "true" === d.isAutomaticStyle || !0 === d.isAutomaticStyle;
        m = d.setProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (g) {
        var h = g.getOdfCanvas().odfContainer(), k = g.getFormatting(), e = g.getDOMDocument().createElementNS(d, "style:style");
        if (!e)return!1;
        m && k.updateStyle(e, m);
        e.setAttributeNS(d, "style:family", p);
        e.setAttributeNS(d, "style:name", b);
        q ?
            h.rootElement.automaticStyles.appendChild(e) : h.rootElement.styles.appendChild(e);
        g.getOdfCanvas().refreshCSS();
        q || g.emit(ops.OdtDocument.signalCommonStyleCreated, {name: b, family: p});
        return!0
    };
    this.spec = function () {
        return{optype: "AddStyle", memberid: h, timestamp: g, styleName: b, styleFamily: p, isAutomaticStyle: q, setProperties: m}
    }
};
// Input 48
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.ObjectNameGenerator = function (h, g) {
    function b(a, c) {
        var b = {};
        this.generateName = function () {
            var e = c(), d = 0, k;
            do k = a + d, d += 1; while (b[k] || e[k]);
            b[k] = !0;
            return k
        }
    }

    function p() {
        var a = {};
        [h.rootElement.automaticStyles, h.rootElement.styles].forEach(function (c) {
            for (c = c.firstElementChild; c;)c.namespaceURI === q && "style" === c.localName && (a[c.getAttributeNS(q, "name")] = !0), c = c.nextElementSibling
        });
        return a
    }

    var q = odf.Namespaces.stylens, m = odf.Namespaces.drawns, d = odf.Namespaces.xlinkns, n = new core.DomUtils, r = (new core.Utils).hashString(g),
        k = null, e = null, c = null, a = {}, l = {};
    this.generateStyleName = function () {
        null === k && (k = new b("auto" + r + "_", function () {
            return p()
        }));
        return k.generateName()
    };
    this.generateFrameName = function () {
        null === e && (n.getElementsByTagNameNS(h.rootElement.body, m, "frame").forEach(function (c) {
            a[c.getAttributeNS(m, "name")] = !0
        }), e = new b("fr" + r + "_", function () {
            return a
        }));
        return e.generateName()
    };
    this.generateImageName = function () {
        null === c && (n.getElementsByTagNameNS(h.rootElement.body, m, "image").forEach(function (a) {
            a = a.getAttributeNS(d,
                "href");
            a = a.substring(9, a.lastIndexOf("."));
            l[a] = !0
        }), c = new b("img" + r + "_", function () {
            return l
        }));
        return c.generateName()
    }
};
// Input 49
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.TextStyleApplicator = function (h, g, b) {
    function p(b) {
        function e(a, c) {
            return"object" === typeof a && "object" === typeof c ? Object.keys(a).every(function (b) {
                return e(a[b], c[b])
            }) : a === c
        }

        var c = {};
        this.isStyleApplied = function (a) {
            a = g.getAppliedStylesForElement(a, c);
            return e(b, a)
        }
    }

    function q(d) {
        var e = {};
        this.applyStyleToContainer = function (c) {
            var a;
            a = c.getAttributeNS(n, "style-name");
            var l = c.ownerDocument;
            a = a || "";
            if (!e.hasOwnProperty(a)) {
                var f = a, m;
                m = a ? g.createDerivedStyleObject(a, "text", d) : d;
                l = l.createElementNS(r,
                    "style:style");
                g.updateStyle(l, m);
                l.setAttributeNS(r, "style:name", h.generateStyleName());
                l.setAttributeNS(r, "style:family", "text");
                l.setAttributeNS("urn:webodf:names:scope", "scope", "document-content");
                b.appendChild(l);
                e[f] = l
            }
            a = e[a].getAttributeNS(r, "name");
            c.setAttributeNS(n, "text:style-name", a)
        }
    }

    function m(b, e) {
        var c = b.ownerDocument, a = b.parentNode, g, f, h = new core.LoopWatchDog(1E4);
        f = [];
        "span" !== a.localName || a.namespaceURI !== n ? (g = c.createElementNS(n, "text:span"), a.insertBefore(g, b), a = !1) : (b.previousSibling && !d.rangeContainsNode(e, a.firstChild) ? (g = a.cloneNode(!1), a.parentNode.insertBefore(g, a.nextSibling)) : g = a, a = !0);
        f.push(b);
        for (c = b.nextSibling; c && d.rangeContainsNode(e, c);)h.check(), f.push(c), c = c.nextSibling;
        f.forEach(function (a) {
            a.parentNode !== g && g.appendChild(a)
        });
        if (c && a)for (f = g.cloneNode(!1), g.parentNode.insertBefore(f, g.nextSibling); c;)h.check(), a = c.nextSibling, f.appendChild(c), c = a;
        return g
    }

    var d = new core.DomUtils, n = odf.Namespaces.textns, r = odf.Namespaces.stylens;
    this.applyStyle = function (b, e, c) {
        var a =
        {}, d, f, g, h;
        runtime.assert(c && c.hasOwnProperty("style:text-properties"), "applyStyle without any text properties");
        a["style:text-properties"] = c["style:text-properties"];
        g = new q(a);
        h = new p(a);
        b.forEach(function (a) {
            d = h.isStyleApplied(a);
            !1 === d && (f = m(a, e), g.applyStyleToContainer(f))
        })
    }
};
// Input 50
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpApplyDirectStyling = function () {
    function h(b, k, e) {
        var c = b.getOdfCanvas().odfContainer(), a = n.splitBoundaries(k), h = d.getTextNodes(k, !1);
        k = {startContainer: k.startContainer, startOffset: k.startOffset, endContainer: k.endContainer, endOffset: k.endOffset};
        (new odf.TextStyleApplicator(new odf.ObjectNameGenerator(c, g), b.getFormatting(), c.rootElement.automaticStyles)).applyStyle(h, k, e);
        a.forEach(n.normalizeTextNodes)
    }

    var g, b, p, q, m, d = new odf.OdfUtils, n = new core.DomUtils;
    this.init = function (d) {
        g = d.memberid;
        b =
            d.timestamp;
        p = parseInt(d.position, 10);
        q = parseInt(d.length, 10);
        m = d.setProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (n) {
        var k = n.convertCursorToDomRange(p, q), e = d.getParagraphElements(k);
        h(n, k, m);
        k.detach();
        n.getOdfCanvas().refreshCSS();
        n.fixCursorPositions();
        e.forEach(function (c) {
            n.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: c, memberId: g, timeStamp: b})
        });
        n.getOdfCanvas().rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "ApplyDirectStyling", memberid: g,
            timestamp: b, position: p, length: q, setProperties: m}
    }
};
// Input 51
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpApplyHyperlink = function () {
    function h(b) {
        for (; b;) {
            if (n.isHyperlink(b))return!0;
            b = b.parentNode
        }
        return!1
    }

    var g, b, p, q, m, d = new core.DomUtils, n = new odf.OdfUtils;
    this.init = function (d) {
        g = d.memberid;
        b = d.timestamp;
        p = d.position;
        q = d.length;
        m = d.hyperlink
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (r) {
        var k = r.getDOMDocument(), e = r.convertCursorToDomRange(p, q), c = d.splitBoundaries(e), a = [], l = n.getTextNodes(e, !1);
        if (0 === l.length)return!1;
        l.forEach(function (c) {
            var b = n.getParagraphElement(c);
            runtime.assert(!1 ===
                h(c), "The given range should not contain any link.");
            var d = m, e = k.createElementNS(odf.Namespaces.textns, "text:a");
            e.setAttributeNS(odf.Namespaces.xlinkns, "xlink:type", "simple");
            e.setAttributeNS(odf.Namespaces.xlinkns, "xlink:href", d);
            c.parentNode.insertBefore(e, c);
            e.appendChild(c);
            -1 === a.indexOf(b) && a.push(b)
        });
        c.forEach(d.normalizeTextNodes);
        e.detach();
        r.getOdfCanvas().refreshSize();
        r.getOdfCanvas().rerenderAnnotations();
        a.forEach(function (a) {
            r.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: a,
                memberId: g, timeStamp: b})
        });
        return!0
    };
    this.spec = function () {
        return{optype: "ApplyHyperlink", memberid: g, timestamp: b, position: p, length: q, hyperlink: m}
    }
};
// Input 52
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpInsertImage = function () {
    var h, g, b, p, q, m, d, n, r = odf.Namespaces.drawns, k = odf.Namespaces.svgns, e = odf.Namespaces.textns, c = odf.Namespaces.xlinkns;
    this.init = function (a) {
        h = a.memberid;
        g = a.timestamp;
        b = a.position;
        p = a.filename;
        q = a.frameWidth;
        m = a.frameHeight;
        d = a.frameStyleName;
        n = a.frameName
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (a) {
        var l = a.getOdfCanvas(), f = a.getTextNodeAtStep(b, h), s, C;
        if (!f)return!1;
        s = f.textNode;
        C = a.getParagraphElement(s);
        var f = f.offset !== s.length ? s.splitText(f.offset) : s.nextSibling,
            x = a.getDOMDocument(), w = x.createElementNS(r, "draw:image"), x = x.createElementNS(r, "draw:frame");
        w.setAttributeNS(c, "xlink:href", p);
        w.setAttributeNS(c, "xlink:type", "simple");
        w.setAttributeNS(c, "xlink:show", "embed");
        w.setAttributeNS(c, "xlink:actuate", "onLoad");
        x.setAttributeNS(r, "draw:style-name", d);
        x.setAttributeNS(r, "draw:name", n);
        x.setAttributeNS(e, "text:anchor-type", "as-char");
        x.setAttributeNS(k, "svg:width", q);
        x.setAttributeNS(k, "svg:height", m);
        x.appendChild(w);
        s.parentNode.insertBefore(x, f);
        a.emit(ops.OdtDocument.signalStepsInserted,
            {position: b, length: 1});
        0 === s.length && s.parentNode.removeChild(s);
        l.addCssForFrameWithImage(x);
        l.refreshCSS();
        a.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: C, memberId: h, timeStamp: g});
        l.rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "InsertImage", memberid: h, timestamp: g, filename: p, position: b, frameWidth: q, frameHeight: m, frameStyleName: d, frameName: n}
    }
};
// Input 53
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpInsertTable = function () {
    function h(b, c) {
        var a;
        if (1 === k.length)a = k[0]; else if (3 === k.length)switch (b) {
            case 0:
                a = k[0];
                break;
            case p - 1:
                a = k[2];
                break;
            default:
                a = k[1]
        } else a = k[b];
        if (1 === a.length)return a[0];
        if (3 === a.length)switch (c) {
            case 0:
                return a[0];
            case q - 1:
                return a[2];
            default:
                return a[1]
        }
        return a[c]
    }

    var g, b, p, q, m, d, n, r, k;
    this.init = function (e) {
        g = e.memberid;
        b = e.timestamp;
        m = e.position;
        p = e.initialRows;
        q = e.initialColumns;
        d = e.tableName;
        n = e.tableStyleName;
        r = e.tableColumnStyleName;
        k = e.tableCellStyleMatrix
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (e) {
        var c = e.getTextNodeAtStep(m), a = e.getRootNode();
        if (c) {
            var k = e.getDOMDocument(), f = k.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table"), s = k.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-column"), C, x, w, v;
            n && f.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", n);
            d && f.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:name", d);
            s.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "table:number-columns-repeated", q);
            r && s.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", r);
            f.appendChild(s);
            for (w = 0; w < p; w += 1) {
                s = k.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-row");
                for (v = 0; v < q; v += 1)C = k.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-cell"), (x = h(w, v)) && C.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", x), x = k.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                    "text:p"), C.appendChild(x), s.appendChild(C);
                f.appendChild(s)
            }
            c = e.getParagraphElement(c.textNode);
            a.insertBefore(f, c.nextSibling);
            e.emit(ops.OdtDocument.signalStepsInserted, {position: m, length: q * p + 1});
            e.getOdfCanvas().refreshSize();
            e.emit(ops.OdtDocument.signalTableAdded, {tableElement: f, memberId: g, timeStamp: b});
            e.getOdfCanvas().rerenderAnnotations();
            return!0
        }
        return!1
    };
    this.spec = function () {
        return{optype: "InsertTable", memberid: g, timestamp: b, position: m, initialRows: p, initialColumns: q, tableName: d, tableStyleName: n,
            tableColumnStyleName: r, tableCellStyleMatrix: k}
    }
};
// Input 54
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpInsertText = function () {
    var h, g, b, p, q;
    this.init = function (m) {
        h = m.memberid;
        g = m.timestamp;
        b = m.position;
        q = m.text;
        p = "true" === m.moveCursor || !0 === m.moveCursor
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (m) {
        var d, n, r, k = null, e = m.getDOMDocument(), c, a = 0, l, f = m.getCursor(h), s;
        m.upgradeWhitespacesAtPosition(b);
        if (d = m.getTextNodeAtStep(b)) {
            n = d.textNode;
            k = n.nextSibling;
            r = n.parentNode;
            c = m.getParagraphElement(n);
            for (s = 0; s < q.length; s += 1)if (" " === q[s] && (0 === s || s === q.length - 1 || " " === q[s - 1]) || "\t" === q[s])0 ===
                a ? (d.offset !== n.length && (k = n.splitText(d.offset)), 0 < s && n.appendData(q.substring(0, s))) : a < s && (a = q.substring(a, s), r.insertBefore(e.createTextNode(a), k)), a = s + 1, l = " " === q[s] ? "text:s" : "text:tab", l = e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", l), l.appendChild(e.createTextNode(q[s])), r.insertBefore(l, k);
            0 === a ? n.insertData(d.offset, q) : a < q.length && (d = q.substring(a), r.insertBefore(e.createTextNode(d), k));
            r = n.parentNode;
            k = n.nextSibling;
            r.removeChild(n);
            r.insertBefore(n, k);
            0 === n.length &&
            n.parentNode.removeChild(n);
            m.emit(ops.OdtDocument.signalStepsInserted, {position: b, length: q.length});
            f && p && (m.moveCursor(h, b + q.length, 0), m.emit(ops.Document.signalCursorMoved, f));
            0 < b && (1 < b && m.downgradeWhitespacesAtPosition(b - 2), m.downgradeWhitespacesAtPosition(b - 1));
            m.downgradeWhitespacesAtPosition(b);
            m.downgradeWhitespacesAtPosition(b + q.length - 1);
            m.downgradeWhitespacesAtPosition(b + q.length);
            m.getOdfCanvas().refreshSize();
            m.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: c, memberId: h,
                timeStamp: g});
            m.getOdfCanvas().rerenderAnnotations();
            return!0
        }
        return!1
    };
    this.spec = function () {
        return{optype: "InsertText", memberid: h, timestamp: g, position: b, text: q, moveCursor: p}
    }
};
// Input 55
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpMoveCursor = function () {
    var h, g, b, p, q;
    this.init = function (m) {
        h = m.memberid;
        g = m.timestamp;
        b = m.position;
        p = m.length || 0;
        q = m.selectionType || ops.OdtCursor.RangeSelection
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (g) {
        var d = g.getCursor(h), n;
        if (!d)return!1;
        n = g.convertCursorToDomRange(b, p);
        d.setSelectedRange(n, 0 <= p);
        d.setSelectionType(q);
        g.emit(ops.Document.signalCursorMoved, d);
        return!0
    };
    this.spec = function () {
        return{optype: "MoveCursor", memberid: h, timestamp: g, position: b, length: p, selectionType: q}
    }
};
// Input 56
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpRemoveAnnotation = function () {
    var h, g, b, p, q;
    this.init = function (m) {
        h = m.memberid;
        g = m.timestamp;
        b = parseInt(m.position, 10);
        p = parseInt(m.length, 10);
        q = new core.DomUtils
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (g) {
        function d(b) {
            r.parentNode.insertBefore(b, r)
        }

        for (var h = g.getIteratorAtPosition(b).container(), r; h.namespaceURI !== odf.Namespaces.officens || "annotation" !== h.localName;)h = h.parentNode;
        if (null === h)return!1;
        r = h;
        h = r.annotationEndElement;
        g.getOdfCanvas().forgetAnnotations();
        q.getElementsByTagNameNS(r,
            "urn:webodf:names:cursor", "cursor").forEach(d);
        q.getElementsByTagNameNS(r, "urn:webodf:names:cursor", "anchor").forEach(d);
        r.parentNode.removeChild(r);
        h && h.parentNode.removeChild(h);
        g.emit(ops.OdtDocument.signalStepsRemoved, {position: 0 < b ? b - 1 : b, length: p});
        g.fixCursorPositions();
        g.getOdfCanvas().refreshAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveAnnotation", memberid: h, timestamp: g, position: b, length: p}
    }
};
// Input 57
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpRemoveBlob = function () {
    var h, g, b;
    this.init = function (p) {
        h = p.memberid;
        g = p.timestamp;
        b = p.filename
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (g) {
        g.getOdfCanvas().odfContainer().removeBlob(b);
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveBlob", memberid: h, timestamp: g, filename: b}
    }
};
// Input 58
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpRemoveCursor = function () {
    var h, g;
    this.init = function (b) {
        h = b.memberid;
        g = b.timestamp
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (b) {
        return b.removeCursor(h) ? !0 : !1
    };
    this.spec = function () {
        return{optype: "RemoveCursor", memberid: h, timestamp: g}
    }
};
// Input 59
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpRemoveHyperlink = function () {
    var h, g, b, p, q = new core.DomUtils, m = new odf.OdfUtils;
    this.init = function (d) {
        h = d.memberid;
        g = d.timestamp;
        b = d.position;
        p = d.length
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (d) {
        var n = d.convertCursorToDomRange(b, p), r = m.getHyperlinkElements(n);
        runtime.assert(1 === r.length, "The given range should only contain a single link.");
        r = q.mergeIntoParent(r[0]);
        n.detach();
        d.getOdfCanvas().refreshSize();
        d.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: m.getParagraphElement(r),
            memberId: h, timeStamp: g});
        d.getOdfCanvas().rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveHyperlink", memberid: h, timestamp: g, position: b, length: p}
    }
};
// Input 60
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpRemoveMember = function () {
    var h, g;
    this.init = function (b) {
        h = b.memberid;
        g = parseInt(b.timestamp, 10)
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (b) {
        if (!b.getMember(h))return!1;
        b.removeMember(h);
        b.emit(ops.Document.signalMemberRemoved, h);
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveMember", memberid: h, timestamp: g}
    }
};
// Input 61
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpRemoveStyle = function () {
    var h, g, b, p;
    this.init = function (q) {
        h = q.memberid;
        g = q.timestamp;
        b = q.styleName;
        p = q.styleFamily
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (g) {
        var h = g.getStyleElement(b, p);
        if (!h)return!1;
        h.parentNode.removeChild(h);
        g.getOdfCanvas().refreshCSS();
        g.emit(ops.OdtDocument.signalCommonStyleDeleted, {name: b, family: p});
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveStyle", memberid: h, timestamp: g, styleName: b, styleFamily: p}
    }
};
// Input 62
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpRemoveText = function () {
    function h(b) {
        function g(a) {
            return n.hasOwnProperty(a.namespaceURI) || "br" === a.localName && m.isLineBreak(a.parentNode) || a.nodeType === Node.TEXT_NODE && n.hasOwnProperty(a.parentNode.namespaceURI)
        }

        function e(a) {
            if (m.isCharacterElement(a))return!1;
            if (a.nodeType === Node.TEXT_NODE)return 0 === a.textContent.length;
            for (a = a.firstChild; a;) {
                if (n.hasOwnProperty(a.namespaceURI) || !e(a))return!1;
                a = a.nextSibling
            }
            return!0
        }

        function c(a) {
            var h;
            a.nodeType === Node.TEXT_NODE ? (h = a.parentNode, h.removeChild(a)) :
                h = d.removeUnwantedNodes(a, g);
            return h && !m.isParagraph(h) && h !== b && e(h) ? c(h) : h
        }

        this.isEmpty = e;
        this.mergeChildrenIntoParent = c
    }

    var g, b, p, q, m, d, n = {};
    this.init = function (h) {
        runtime.assert(0 <= h.length, "OpRemoveText only supports positive lengths");
        g = h.memberid;
        b = h.timestamp;
        p = parseInt(h.position, 10);
        q = parseInt(h.length, 10);
        m = new odf.OdfUtils;
        d = new core.DomUtils;
        n[odf.Namespaces.dbns] = !0;
        n[odf.Namespaces.dcns] = !0;
        n[odf.Namespaces.dr3dns] = !0;
        n[odf.Namespaces.drawns] = !0;
        n[odf.Namespaces.chartns] = !0;
        n[odf.Namespaces.formns] = !0;
        n[odf.Namespaces.numberns] = !0;
        n[odf.Namespaces.officens] = !0;
        n[odf.Namespaces.presentationns] = !0;
        n[odf.Namespaces.stylens] = !0;
        n[odf.Namespaces.svgns] = !0;
        n[odf.Namespaces.tablens] = !0;
        n[odf.Namespaces.textns] = !0
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (n) {
        var k, e, c, a, l = n.getCursor(g), f = new h(n.getRootNode());
        n.upgradeWhitespacesAtPosition(p);
        n.upgradeWhitespacesAtPosition(p + q);
        e = n.convertCursorToDomRange(p, q);
        d.splitBoundaries(e);
        k = n.getParagraphElement(e.startContainer);
        c = m.getTextElements(e,
            !1, !0);
        a = m.getParagraphElements(e);
        e.detach();
        c.forEach(function (a) {
            f.mergeChildrenIntoParent(a)
        });
        e = a.reduce(function (a, c) {
            var b, d = a, e = c, g, k = null;
            f.isEmpty(a) && (c.parentNode !== a.parentNode && (g = c.parentNode, a.parentNode.insertBefore(c, a.nextSibling)), e = a, d = c, k = d.getElementsByTagNameNS("urn:webodf:names:editinfo", "editinfo").item(0) || d.firstChild);
            for (; e.firstChild;)b = e.firstChild, e.removeChild(b), "editinfo" !== b.localName && d.insertBefore(b, k);
            g && f.isEmpty(g) && f.mergeChildrenIntoParent(g);
            f.mergeChildrenIntoParent(e);
            return d
        });
        n.emit(ops.OdtDocument.signalStepsRemoved, {position: p, length: q});
        n.downgradeWhitespacesAtPosition(p);
        n.fixCursorPositions();
        n.getOdfCanvas().refreshSize();
        n.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: e || k, memberId: g, timeStamp: b});
        l && (l.resetSelectionType(), n.emit(ops.Document.signalCursorMoved, l));
        n.getOdfCanvas().rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "RemoveText", memberid: g, timestamp: b, position: p, length: q}
    }
};
// Input 63
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpSetBlob = function () {
    var h, g, b, p, q;
    this.init = function (m) {
        h = m.memberid;
        g = m.timestamp;
        b = m.filename;
        p = m.mimetype;
        q = m.content
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (g) {
        g.getOdfCanvas().odfContainer().setBlob(b, p, q);
        return!0
    };
    this.spec = function () {
        return{optype: "SetBlob", memberid: h, timestamp: g, filename: b, mimetype: p, content: q}
    }
};
// Input 64
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpSetParagraphStyle = function () {
    var h, g, b, p;
    this.init = function (q) {
        h = q.memberid;
        g = q.timestamp;
        b = q.position;
        p = q.styleName
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (q) {
        var m;
        m = q.getIteratorAtPosition(b);
        return(m = q.getParagraphElement(m.container())) ? ("" !== p ? m.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:style-name", p) : m.removeAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "style-name"), q.getOdfCanvas().refreshSize(), q.emit(ops.OdtDocument.signalParagraphChanged,
            {paragraphElement: m, timeStamp: g, memberId: h}), q.getOdfCanvas().rerenderAnnotations(), !0) : !1
    };
    this.spec = function () {
        return{optype: "SetParagraphStyle", memberid: h, timestamp: g, position: b, styleName: p}
    }
};
// Input 65
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpSplitParagraph = function () {
    var h, g, b, p, q;
    this.init = function (m) {
        h = m.memberid;
        g = m.timestamp;
        b = m.position;
        p = "true" === m.moveCursor || !0 === m.moveCursor;
        q = new odf.OdfUtils
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (m) {
        var d, n, r, k, e, c, a, l = m.getCursor(h);
        m.upgradeWhitespacesAtPosition(b);
        d = m.getTextNodeAtStep(b);
        if (!d)return!1;
        n = m.getParagraphElement(d.textNode);
        if (!n)return!1;
        r = q.isListItem(n.parentNode) ? n.parentNode : n;
        0 === d.offset ? (a = d.textNode.previousSibling, c = null) : (a = d.textNode, c = d.offset >=
            d.textNode.length ? null : d.textNode.splitText(d.offset));
        for (k = d.textNode; k !== r;) {
            k = k.parentNode;
            e = k.cloneNode(!1);
            c && e.appendChild(c);
            if (a)for (; a && a.nextSibling;)e.appendChild(a.nextSibling); else for (; k.firstChild;)e.appendChild(k.firstChild);
            k.parentNode.insertBefore(e, k.nextSibling);
            a = k;
            c = e
        }
        q.isListItem(c) && (c = c.childNodes.item(0));
        0 === d.textNode.length && d.textNode.parentNode.removeChild(d.textNode);
        m.emit(ops.OdtDocument.signalStepsInserted, {position: b, length: 1});
        l && p && (m.moveCursor(h, b + 1, 0), m.emit(ops.Document.signalCursorMoved,
            l));
        m.fixCursorPositions();
        m.getOdfCanvas().refreshSize();
        m.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: n, memberId: h, timeStamp: g});
        m.emit(ops.OdtDocument.signalParagraphChanged, {paragraphElement: c, memberId: h, timeStamp: g});
        m.getOdfCanvas().rerenderAnnotations();
        return!0
    };
    this.spec = function () {
        return{optype: "SplitParagraph", memberid: h, timestamp: g, position: b, moveCursor: p}
    }
};
// Input 66
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpUpdateMember = function () {
    function h(b) {
        var d = "//dc:creator[@editinfo:memberid='" + g + "']";
        b = xmldom.XPath.getODFElementsWithXPath(b.getRootNode(), d, function (b) {
            return"editinfo" === b ? "urn:webodf:names:editinfo" : odf.Namespaces.lookupNamespaceURI(b)
        });
        for (d = 0; d < b.length; d += 1)b[d].textContent = p.fullName
    }

    var g, b, p, q;
    this.init = function (h) {
        g = h.memberid;
        b = parseInt(h.timestamp, 10);
        p = h.setProperties;
        q = h.removedProperties
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function (b) {
        var d = b.getMember(g);
        if (!d)return!1;
        q && d.removeProperties(q);
        p && (d.setProperties(p), p.fullName && h(b));
        b.emit(ops.Document.signalMemberUpdated, d);
        return!0
    };
    this.spec = function () {
        return{optype: "UpdateMember", memberid: g, timestamp: b, setProperties: p, removedProperties: q}
    }
};
// Input 67
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpUpdateMetadata = function () {
    var h, g, b, p;
    this.init = function (q) {
        h = q.memberid;
        g = parseInt(q.timestamp, 10);
        b = q.setProperties;
        p = q.removedProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (g) {
        g = g.getOdfCanvas().odfContainer();
        var h = [];
        p && (h = p.attributes.split(","));
        g.setMetadata(b, h);
        return!0
    };
    this.spec = function () {
        return{optype: "UpdateMetadata", memberid: h, timestamp: g, setProperties: b, removedProperties: p}
    }
};
// Input 68
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OpUpdateParagraphStyle = function () {
    function h(b, d) {
        var g, e, c = d ? d.split(",") : [];
        for (g = 0; g < c.length; g += 1)e = c[g].split(":"), b.removeAttributeNS(odf.Namespaces.lookupNamespaceURI(e[0]), e[1])
    }

    var g, b, p, q, m, d = odf.Namespaces.stylens;
    this.init = function (d) {
        g = d.memberid;
        b = d.timestamp;
        p = d.styleName;
        q = d.setProperties;
        m = d.removedProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function (b) {
        var g = b.getFormatting(), k, e, c;
        return(k = "" !== p ? b.getParagraphStyleElement(p) : g.getDefaultStyleElement("paragraph")) ?
            (e = k.getElementsByTagNameNS(d, "paragraph-properties").item(0), c = k.getElementsByTagNameNS(d, "text-properties").item(0), q && g.updateStyle(k, q), m && (g = m["style:paragraph-properties"], e && g && (h(e, g.attributes), 0 === e.attributes.length && k.removeChild(e)), g = m["style:text-properties"], c && g && (h(c, g.attributes), 0 === c.attributes.length && k.removeChild(c)), h(k, m.attributes)), b.getOdfCanvas().refreshCSS(), b.emit(ops.OdtDocument.signalParagraphStyleModified, p), b.getOdfCanvas().rerenderAnnotations(), !0) : !1
    };
    this.spec =
        function () {
            return{optype: "UpdateParagraphStyle", memberid: g, timestamp: b, styleName: p, setProperties: q, removedProperties: m}
        }
};
// Input 69
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OperationFactory = function () {
    var h;
    this.register = function (g, b) {
        h[g] = b
    };
    this.create = function (g) {
        var b = null, p = h[g.optype];
        p && (b = new p, b.init(g));
        return b
    };
    h = {AddMember: ops.OpAddMember, UpdateMember: ops.OpUpdateMember, RemoveMember: ops.OpRemoveMember, AddCursor: ops.OpAddCursor, ApplyDirectStyling: ops.OpApplyDirectStyling, SetBlob: ops.OpSetBlob, RemoveBlob: ops.OpRemoveBlob, InsertImage: ops.OpInsertImage, InsertTable: ops.OpInsertTable, InsertText: ops.OpInsertText, RemoveText: ops.OpRemoveText, SplitParagraph: ops.OpSplitParagraph,
        SetParagraphStyle: ops.OpSetParagraphStyle, UpdateParagraphStyle: ops.OpUpdateParagraphStyle, AddStyle: ops.OpAddStyle, RemoveStyle: ops.OpRemoveStyle, MoveCursor: ops.OpMoveCursor, RemoveCursor: ops.OpRemoveCursor, AddAnnotation: ops.OpAddAnnotation, RemoveAnnotation: ops.OpRemoveAnnotation, UpdateMetadata: ops.OpUpdateMetadata, ApplyHyperlink: ops.OpApplyHyperlink, RemoveHyperlink: ops.OpRemoveHyperlink}
};
// Input 70
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OperationRouter = function () {
};
ops.OperationRouter.prototype.setOperationFactory = function (h) {
};
ops.OperationRouter.prototype.setPlaybackFunction = function (h) {
};
ops.OperationRouter.prototype.push = function (h) {
};
ops.OperationRouter.prototype.close = function (h) {
};
ops.OperationRouter.prototype.subscribe = function (h, g) {
};
ops.OperationRouter.prototype.unsubscribe = function (h, g) {
};
ops.OperationRouter.prototype.hasLocalUnsyncedOps = function () {
};
ops.OperationRouter.prototype.hasSessionHostConnection = function () {
};
ops.OperationRouter.signalProcessingBatchStart = "router/batchstart";
ops.OperationRouter.signalProcessingBatchEnd = "router/batchend";
// Input 71
/*

 Copyright (C) 2012 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.TrivialOperationRouter = function () {
    var h = new core.EventNotifier([ops.OperationRouter.signalProcessingBatchStart, ops.OperationRouter.signalProcessingBatchEnd]), g, b, p = 0;
    this.setOperationFactory = function (b) {
        g = b
    };
    this.setPlaybackFunction = function (g) {
        b = g
    };
    this.push = function (q) {
        p += 1;
        h.emit(ops.OperationRouter.signalProcessingBatchStart, {});
        q.forEach(function (h) {
            h = h.spec();
            h.timestamp = (new Date).getTime();
            h = g.create(h);
            h.group = "g" + p;
            b(h)
        });
        h.emit(ops.OperationRouter.signalProcessingBatchEnd, {})
    };
    this.close =
        function (b) {
            b()
        };
    this.subscribe = function (b, g) {
        h.subscribe(b, g)
    };
    this.unsubscribe = function (b, g) {
        h.unsubscribe(b, g)
    };
    this.hasLocalUnsyncedOps = function () {
        return!1
    };
    this.hasSessionHostConnection = function () {
        return!0
    }
};
// Input 72
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.Session = function (h) {
    function g(b) {
        q.emit(ops.OdtDocument.signalProcessingBatchStart, b)
    }

    function b(b) {
        q.emit(ops.OdtDocument.signalProcessingBatchEnd, b)
    }

    var p = new ops.OperationFactory, q = new ops.OdtDocument(h), m = null;
    this.setOperationFactory = function (b) {
        p = b;
        m && m.setOperationFactory(p)
    };
    this.setOperationRouter = function (d) {
        m && (m.unsubscribe(ops.OperationRouter.signalProcessingBatchStart, g), m.unsubscribe(ops.OperationRouter.signalProcessingBatchEnd, b));
        m = d;
        m.subscribe(ops.OperationRouter.signalProcessingBatchStart,
            g);
        m.subscribe(ops.OperationRouter.signalProcessingBatchEnd, b);
        d.setPlaybackFunction(function (b) {
            q.emit(ops.OdtDocument.signalOperationStart, b);
            return b.execute(q) ? (q.emit(ops.OdtDocument.signalOperationEnd, b), !0) : !1
        });
        d.setOperationFactory(p)
    };
    this.getOperationFactory = function () {
        return p
    };
    this.getOdtDocument = function () {
        return q
    };
    this.enqueue = function (b) {
        m.push(b)
    };
    this.close = function (b) {
        m.close(function (g) {
            g ? b(g) : q.close(b)
        })
    };
    this.destroy = function (b) {
        q.destroy(b)
    };
    this.setOperationRouter(new ops.TrivialOperationRouter)
};
// Input 73
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.AnnotationController = function (h, g) {
    function b() {
        var b = d.getCursor(g), b = b && b.getNode(), c = !1;
        if (b) {
            a:{
                for (c = d.getRootNode(); b && b !== c;) {
                    if (b.namespaceURI === k && "annotation" === b.localName) {
                        b = !0;
                        break a
                    }
                    b = b.parentNode
                }
                b = !1
            }
            c = !b
        }
        c !== n && (n = c, r.emit(gui.AnnotationController.annotatableChanged, n))
    }

    function p(d) {
        d.getMemberId() === g && b()
    }

    function q(d) {
        d === g && b()
    }

    function m(d) {
        d.getMemberId() === g && b()
    }

    var d = h.getOdtDocument(), n = !1, r = new core.EventNotifier([gui.AnnotationController.annotatableChanged]), k = odf.Namespaces.officens;
    this.isAnnotatable = function () {
        return n
    };
    this.addAnnotation = function () {
        var b = new ops.OpAddAnnotation, c = d.getCursorSelection(g), a = c.length, c = c.position;
        n && (c = 0 <= a ? c : c + a, a = Math.abs(a), b.init({memberid: g, position: c, length: a, name: g + Date.now()}), h.enqueue([b]))
    };
    this.removeAnnotation = function (b) {
        var c, a;
        c = d.convertDomPointToCursorStep(b, 0) + 1;
        a = d.convertDomPointToCursorStep(b, b.childNodes.length);
        b = new ops.OpRemoveAnnotation;
        b.init({memberid: g, position: c, length: a - c});
        a = new ops.OpMoveCursor;
        a.init({memberid: g,
            position: 0 < c ? c - 1 : c, length: 0});
        h.enqueue([b, a])
    };
    this.subscribe = function (b, c) {
        r.subscribe(b, c)
    };
    this.unsubscribe = function (b, c) {
        r.unsubscribe(b, c)
    };
    this.destroy = function (b) {
        d.unsubscribe(ops.Document.signalCursorAdded, p);
        d.unsubscribe(ops.Document.signalCursorRemoved, q);
        d.unsubscribe(ops.Document.signalCursorMoved, m);
        b()
    };
    d.subscribe(ops.Document.signalCursorAdded, p);
    d.subscribe(ops.Document.signalCursorRemoved, q);
    d.subscribe(ops.Document.signalCursorMoved, m);
    b()
};
gui.AnnotationController.annotatableChanged = "annotatable/changed";
(function () {
    return gui.AnnotationController
})();
// Input 74
gui.Avatar = function (h, g) {
    var b = this, p, q, m;
    this.setColor = function (b) {
        q.style.borderColor = b
    };
    this.setImageUrl = function (d) {
        b.isVisible() ? q.src = d : m = d
    };
    this.isVisible = function () {
        return"block" === p.style.display
    };
    this.show = function () {
        m && (q.src = m, m = void 0);
        p.style.display = "block"
    };
    this.hide = function () {
        p.style.display = "none"
    };
    this.markAsFocussed = function (b) {
        b ? p.classList.add("active") : p.classList.remove("active")
    };
    this.destroy = function (b) {
        h.removeChild(p);
        b()
    };
    (function () {
        var b = h.ownerDocument, m = b.documentElement.namespaceURI;
        p = b.createElementNS(m, "div");
        q = b.createElementNS(m, "img");
        q.width = 64;
        q.height = 64;
        p.appendChild(q);
        p.style.width = "64px";
        p.style.height = "70px";
        p.style.position = "absolute";
        p.style.top = "-80px";
        p.style.left = "-34px";
        p.style.display = g ? "block" : "none";
        p.className = "handle";
        h.appendChild(p)
    })()
};
// Input 75
gui.Caret = function (h, g, b) {
    function p() {
        r.style.opacity = "0" === r.style.opacity ? "1" : "0";
        s.trigger()
    }

    function q(a, b) {
        var c = a.getBoundingClientRect(), f = 0, d = 0;
        c && b && (f = Math.max(c.top, b.top), d = Math.min(c.bottom, b.bottom));
        return d - f
    }

    function m() {
        Object.keys(v).forEach(function (a) {
            u[a] = v[a]
        })
    }

    function d() {
        var f, d, e, g;
        if (!1 === v.isShown || h.getSelectionType() !== ops.OdtCursor.RangeSelection || !b && !h.getSelectedRange().collapsed)v.visibility = "hidden", r.style.visibility = "hidden", s.cancel(); else {
            v.visibility = "visible";
            r.style.visibility = "visible";
            if (!1 === v.isFocused)r.style.opacity = "1", s.cancel(); else {
                if (C || u.visibility !== v.visibility)r.style.opacity = "1", s.cancel();
                s.trigger()
            }
            if (w || x || u.visibility !== v.visibility) {
                f = h.getSelectedRange().cloneRange();
                d = h.getNode();
                var l = null;
                d.previousSibling && (e = d.previousSibling.nodeType === Node.TEXT_NODE ? d.previousSibling.textContent.length : d.previousSibling.childNodes.length, f.setStart(d.previousSibling, 0 < e ? e - 1 : 0), f.setEnd(d.previousSibling, e), (e = f.getBoundingClientRect()) &&
                    e.height && (l = e));
                d.nextSibling && (f.setStart(d.nextSibling, 0), f.setEnd(d.nextSibling, 0 < (d.nextSibling.nodeType === Node.TEXT_NODE ? d.nextSibling.textContent.length : d.nextSibling.childNodes.length) ? 1 : 0), (e = f.getBoundingClientRect()) && e.height && (!l || q(d, e) > q(d, l)) && (l = e));
                d = l;
                l = h.getDocument().getCanvas();
                f = l.getZoomLevel();
                l = a.getBoundingClientRect(l.getSizer());
                d ? (r.style.top = "0", e = a.getBoundingClientRect(r), 8 > d.height && (d = {top: d.top - (8 - d.height) / 2, height: 8}), r.style.height = a.adaptRangeDifferenceToZoomLevel(d.height,
                    f) + "px", r.style.top = a.adaptRangeDifferenceToZoomLevel(d.top - e.top, f) + "px") : (r.style.height = "1em", r.style.top = "5%");
                c && (d = runtime.getWindow().getComputedStyle(r, null), e = a.getBoundingClientRect(r), c.style.bottom = a.adaptRangeDifferenceToZoomLevel(l.bottom - e.bottom, f) + "px", c.style.left = a.adaptRangeDifferenceToZoomLevel(e.right - l.left, f) + "px", d.font ? c.style.font = d.font : (c.style.fontStyle = d.fontStyle, c.style.fontVariant = d.fontVariant, c.style.fontWeight = d.fontWeight, c.style.fontSize = d.fontSize, c.style.lineHeight =
                    d.lineHeight, c.style.fontFamily = d.fontFamily))
            }
            if (x) {
                var l = h.getDocument().getCanvas().getElement().parentNode, n;
                e = l.offsetWidth - l.clientWidth + 5;
                g = l.offsetHeight - l.clientHeight + 5;
                n = r.getBoundingClientRect();
                f = n.left - e;
                d = n.top - g;
                e = n.right + e;
                g = n.bottom + g;
                n = l.getBoundingClientRect();
                d < n.top ? l.scrollTop -= n.top - d : g > n.bottom && (l.scrollTop += g - n.bottom);
                f < n.left ? l.scrollLeft -= n.left - f : e > n.right && (l.scrollLeft += e - n.right)
            }
        }
        u.isFocused !== v.isFocused && k.markAsFocussed(v.isFocused);
        m();
        w = x = C = !1
    }

    function n(a) {
        e.removeChild(r);
        a()
    }

    var r, k, e, c, a = new core.DomUtils, l = new core.Async, f, s, C = !1, x = !1, w = !1, v = {isFocused: !1, isShown: !0, visibility: "hidden"}, u = {isFocused: !v.isFocused, isShown: !v.isShown, visibility: "hidden"};
    this.handleUpdate = function () {
        w = !0;
        "hidden" !== v.visibility && (v.visibility = "hidden", r.style.visibility = "hidden");
        f.trigger()
    };
    this.refreshCursorBlinking = function () {
        C = !0;
        f.trigger()
    };
    this.setFocus = function () {
        v.isFocused = !0;
        f.trigger()
    };
    this.removeFocus = function () {
        v.isFocused = !1;
        f.trigger()
    };
    this.show = function () {
        v.isShown = !0;
        f.trigger()
    };
    this.hide = function () {
        v.isShown = !1;
        f.trigger()
    };
    this.setAvatarImageUrl = function (a) {
        k.setImageUrl(a)
    };
    this.setColor = function (a) {
        r.style.borderColor = a;
        k.setColor(a)
    };
    this.getCursor = function () {
        return h
    };
    this.getFocusElement = function () {
        return r
    };
    this.toggleHandleVisibility = function () {
        k.isVisible() ? k.hide() : k.show()
    };
    this.showHandle = function () {
        k.show()
    };
    this.hideHandle = function () {
        k.hide()
    };
    this.setOverlayElement = function (a) {
        c = a;
        w = !0;
        f.trigger()
    };
    this.ensureVisible = function () {
        x = !0;
        f.trigger()
    };
    this.destroy = function (a) {
        l.destroyAll([f.destroy, s.destroy, k.destroy, n], a)
    };
    (function () {
        var a = h.getDocument().getDOMDocument();
        r = a.createElementNS(a.documentElement.namespaceURI, "span");
        r.className = "caret";
        r.style.top = "5%";
        e = h.getNode();
        e.appendChild(r);
        k = new gui.Avatar(e, g);
        f = new core.ScheduledTask(d, 0);
        s = new core.ScheduledTask(p, 500);
        f.triggerImmediate()
    })()
};
// Input 76
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.TextSerializer = function () {
    function h(p) {
        var q = "", m = g.filter ? g.filter.acceptNode(p) : NodeFilter.FILTER_ACCEPT, d = p.nodeType, n;
        if ((m === NodeFilter.FILTER_ACCEPT || m === NodeFilter.FILTER_SKIP) && b.isTextContentContainingNode(p))for (n = p.firstChild; n;)q += h(n), n = n.nextSibling;
        m === NodeFilter.FILTER_ACCEPT && (d === Node.ELEMENT_NODE && b.isParagraph(p) ? q += "\n" : d === Node.TEXT_NODE && p.textContent && (q += p.textContent));
        return q
    }

    var g = this, b = new odf.OdfUtils;
    this.filter = null;
    this.writeToString = function (b) {
        if (!b)return"";
        b = h(b);
        "\n" === b[b.length - 1] && (b = b.substr(0, b.length - 1));
        return b
    }
};
// Input 77
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.MimeDataExporter = function () {
    var h, g;
    this.exportRangeToDataTransfer = function (b, g) {
        var q = !0, m;
        m = g.startContainer.ownerDocument.createElement("span");
        m.appendChild(g.cloneContents());
        m = b.setData("text/plain", h.writeToString(m));
        return q && m
    };
    h = new odf.TextSerializer;
    g = new odf.OdfNodeFilter;
    h.filter = g
};
// Input 78
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.Clipboard = function (h) {
    this.setDataFromRange = function (g, b) {
        var p;
        p = g.clipboardData;
        var q = runtime.getWindow();
        !p && q && (p = q.clipboardData);
        p ? (p = h.exportRangeToDataTransfer(p, b), g.preventDefault()) : p = !1;
        return p
    }
};
// Input 79
/*

 Copyright (C) 2012-2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.StyleSummary = function (h) {
    function g(b, d) {
        var g = b + "|" + d, p;
        q.hasOwnProperty(g) || (p = [], h.forEach(function (g) {
            g = (g = g[b]) && g[d];
            -1 === p.indexOf(g) && p.push(g)
        }), q[g] = p);
        return q[g]
    }

    function b(b, d, h) {
        return function () {
            var q = g(b, d);
            return h.length >= q.length && q.every(function (b) {
                return-1 !== h.indexOf(b)
            })
        }
    }

    function p(b, d) {
        var h = g(b, d);
        return 1 === h.length ? h[0] : void 0
    }

    var q = {};
    this.getPropertyValues = g;
    this.getCommonValue = p;
    this.isBold = b("style:text-properties", "fo:font-weight", ["bold"]);
    this.isItalic = b("style:text-properties",
        "fo:font-style", ["italic"]);
    this.hasUnderline = b("style:text-properties", "style:text-underline-style", ["solid"]);
    this.hasStrikeThrough = b("style:text-properties", "style:text-line-through-style", ["solid"]);
    this.fontSize = function () {
        var b = p("style:text-properties", "fo:font-size");
        return b && parseFloat(b)
    };
    this.fontName = function () {
        return p("style:text-properties", "style:font-name")
    };
    this.isAlignedLeft = b("style:paragraph-properties", "fo:text-align", ["left", "start"]);
    this.isAlignedCenter = b("style:paragraph-properties",
        "fo:text-align", ["center"]);
    this.isAlignedRight = b("style:paragraph-properties", "fo:text-align", ["right", "end"]);
    this.isAlignedJustified = b("style:paragraph-properties", "fo:text-align", ["justify"]);
    this.text = {isBold: this.isBold, isItalic: this.isItalic, hasUnderline: this.hasUnderline, hasStrikeThrough: this.hasStrikeThrough, fontSize: this.fontSize, fontName: this.fontName};
    this.paragraph = {isAlignedLeft: this.isAlignedLeft, isAlignedCenter: this.isAlignedCenter, isAlignedRight: this.isAlignedRight, isAlignedJustified: this.isAlignedJustified}
};
// Input 80
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.DirectFormattingController = function (h, g, b, p) {
    function q(a) {
        var b;
        a.collapsed ? (b = a.startContainer, b.hasChildNodes() && a.startOffset < b.childNodes.length && (b = b.childNodes.item(a.startOffset)), a = [b]) : a = I.getTextNodes(a, !0);
        return a
    }

    function m(a, b) {
        var c = {};
        Object.keys(a).forEach(function (f) {
            var d = a[f](), e = b[f]();
            d !== e && (c[f] = e)
        });
        return c
    }

    function d() {
        var a, b, c;
        a = (a = (a = H.getCursor(g)) && a.getSelectedRange()) ? q(a) : [];
        a = H.getFormatting().getAppliedStyles(a);
        a[0] && G && (a[0] = Q.mergeObjects(a[0], G));
        T = a;
        c = new gui.StyleSummary(T);
        a = m(z.text, c.text);
        b = m(z.paragraph, c.paragraph);
        z = c;
        0 < Object.keys(a).length && J.emit(gui.DirectFormattingController.textStylingChanged, a);
        0 < Object.keys(b).length && J.emit(gui.DirectFormattingController.paragraphStylingChanged, b)
    }

    function n(a) {
        ("string" === typeof a ? a : a.getMemberId()) === g && d()
    }

    function r() {
        d()
    }

    function k(a) {
        var b = H.getCursor(g);
        a = a.paragraphElement;
        b && H.getParagraphElement(b.getNode()) === a && d()
    }

    function e(a, b) {
        b(!a());
        return!0
    }

    function c(a) {
        var b = H.getCursorSelection(g),
            c = {"style:text-properties": a};
        0 !== b.length ? (a = new ops.OpApplyDirectStyling, a.init({memberid: g, position: b.position, length: b.length, setProperties: c}), h.enqueue([a])) : (G = Q.mergeObjects(G || {}, c), d())
    }

    function a(a, b) {
        var f = {};
        f[a] = b;
        c(f)
    }

    function l(a) {
        a = a.spec();
        G && a.memberid === g && "SplitParagraph" !== a.optype && (G = null, d())
    }

    function f(b) {
        a("fo:font-weight", b ? "bold" : "normal")
    }

    function s(b) {
        a("fo:font-style", b ? "italic" : "normal")
    }

    function C(b) {
        a("style:text-underline-style", b ? "solid" : "none")
    }

    function x(b) {
        a("style:text-line-through-style",
            b ? "solid" : "none")
    }

    function w(a) {
        return a === ops.StepsTranslator.NEXT_STEP
    }

    function v(a) {
        var c = H.getCursor(g).getSelectedRange(), c = I.getParagraphElements(c), f = H.getFormatting(), d = [], e = {}, k;
        c.forEach(function (c) {
            var h = H.convertDomPointToCursorStep(c, 0, w), l = c.getAttributeNS(odf.Namespaces.textns, "style-name"), m;
            c = l ? e.hasOwnProperty(l) ? e[l] : void 0 : k;
            c || (c = b.generateStyleName(), l ? (e[l] = c, m = f.createDerivedStyleObject(l, "paragraph", {})) : (k = c, m = {}), m = a(m), l = new ops.OpAddStyle, l.init({memberid: g, styleName: c.toString(),
                styleFamily: "paragraph", isAutomaticStyle: !0, setProperties: m}), d.push(l));
            l = new ops.OpSetParagraphStyle;
            l.init({memberid: g, styleName: c.toString(), position: h});
            d.push(l)
        });
        h.enqueue(d)
    }

    function u(a) {
        v(function (b) {
            return Q.mergeObjects(b, a)
        })
    }

    function t(a) {
        u({"style:paragraph-properties": {"fo:text-align": a}})
    }

    function y(a, b) {
        var c = H.getFormatting().getDefaultTabStopDistance(), f = b["style:paragraph-properties"], d;
        f && (f = f["fo:margin-left"]) && (d = I.parseLength(f));
        return Q.mergeObjects(b, {"style:paragraph-properties": {"fo:margin-left": d &&
            d.unit === c.unit ? d.value + a * c.value + d.unit : a * c.value + c.unit}})
    }

    function M(a, b) {
        var c = q(a), f = H.getFormatting().getAppliedStyles(c)[0], d = H.getFormatting().getAppliedStylesForElement(b);
        if (!f || "text" !== f["style:family"] || !f["style:text-properties"])return!1;
        if (!d || !d["style:text-properties"])return!0;
        f = f["style:text-properties"];
        d = d["style:text-properties"];
        return!Object.keys(f).every(function (a) {
            return f[a] === d[a]
        })
    }

    function O() {
    }

    var D = this, H = h.getOdtDocument(), Q = new core.Utils, I = new odf.OdfUtils, J = new core.EventNotifier([gui.DirectFormattingController.textStylingChanged,
        gui.DirectFormattingController.paragraphStylingChanged]), aa = odf.Namespaces.textns, Z = core.PositionFilter.FilterResult.FILTER_ACCEPT, G, T = [], z = new gui.StyleSummary(T);
    this.formatTextSelection = c;
    this.createCursorStyleOp = function (a, b, c) {
        var f = null;
        (c = c ? T[0] : G) && c["style:text-properties"] && (f = new ops.OpApplyDirectStyling, f.init({memberid: g, position: a, length: b, setProperties: {"style:text-properties": c["style:text-properties"]}}), G = null, d());
        return f
    };
    this.setBold = f;
    this.setItalic = s;
    this.setHasUnderline = C;
    this.setHasStrikethrough = x;
    this.setFontSize = function (b) {
        a("fo:font-size", b + "pt")
    };
    this.setFontName = function (b) {
        a("style:font-name", b)
    };
    this.getAppliedStyles = function () {
        return T
    };
    this.toggleBold = e.bind(D, function () {
        return z.isBold()
    }, f);
    this.toggleItalic = e.bind(D, function () {
        return z.isItalic()
    }, s);
    this.toggleUnderline = e.bind(D, function () {
        return z.hasUnderline()
    }, C);
    this.toggleStrikethrough = e.bind(D, function () {
        return z.hasStrikeThrough()
    }, x);
    this.isBold = function () {
        return z.isBold()
    };
    this.isItalic = function () {
        return z.isItalic()
    };
    this.hasUnderline = function () {
        return z.hasUnderline()
    };
    this.hasStrikeThrough = function () {
        return z.hasStrikeThrough()
    };
    this.fontSize = function () {
        return z.fontSize()
    };
    this.fontName = function () {
        return z.fontName()
    };
    this.isAlignedLeft = function () {
        return z.isAlignedLeft()
    };
    this.isAlignedCenter = function () {
        return z.isAlignedCenter()
    };
    this.isAlignedRight = function () {
        return z.isAlignedRight()
    };
    this.isAlignedJustified = function () {
        return z.isAlignedJustified()
    };
    this.alignParagraphLeft = function () {
        t("left");
        return!0
    };
    this.alignParagraphCenter = function () {
        t("center");
        return!0
    };
    this.alignParagraphRight = function () {
        t("right");
        return!0
    };
    this.alignParagraphJustified = function () {
        t("justify");
        return!0
    };
    this.indent = function () {
        v(y.bind(null, 1));
        return!0
    };
    this.outdent = function () {
        v(y.bind(null, -1));
        return!0
    };
    this.createParagraphStyleOps = function (a) {
        var c = H.getCursor(g), f = c.getSelectedRange(), d = [], e, k;
        c.hasForwardSelection() ? (e = c.getAnchorNode(), k = c.getNode()) : (e = c.getNode(), k = c.getAnchorNode());
        c = H.getParagraphElement(k);
        runtime.assert(Boolean(c),
            "DirectFormattingController: Cursor outside paragraph");
        var h;
        a:{
            h = c;
            var l = gui.SelectionMover.createPositionIterator(h), m = new core.PositionFilterChain;
            m.addFilter(H.getPositionFilter());
            m.addFilter(H.createRootFilter(g));
            for (l.setUnfilteredPosition(f.endContainer, f.endOffset); l.nextPosition();)if (m.acceptPosition(l) === Z) {
                h = H.getParagraphElement(l.getCurrentNode()) !== h;
                break a
            }
            h = !0
        }
        if (!h)return d;
        k !== e && (c = H.getParagraphElement(e));
        if (!G && !M(f, c))return d;
        f = T[0];
        if (!f)return d;
        if (e = c.getAttributeNS(aa,
            "style-name"))f = {"style:text-properties": f["style:text-properties"]}, f = H.getFormatting().createDerivedStyleObject(e, "paragraph", f);
        c = b.generateStyleName();
        e = new ops.OpAddStyle;
        e.init({memberid: g, styleName: c, styleFamily: "paragraph", isAutomaticStyle: !0, setProperties: f});
        d.push(e);
        e = new ops.OpSetParagraphStyle;
        e.init({memberid: g, styleName: c, position: a});
        d.push(e);
        return d
    };
    this.subscribe = function (a, b) {
        J.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        J.unsubscribe(a, b)
    };
    this.destroy = function (a) {
        H.unsubscribe(ops.Document.signalCursorAdded,
            n);
        H.unsubscribe(ops.Document.signalCursorRemoved, n);
        H.unsubscribe(ops.Document.signalCursorMoved, n);
        H.unsubscribe(ops.OdtDocument.signalParagraphStyleModified, r);
        H.unsubscribe(ops.OdtDocument.signalParagraphChanged, k);
        H.unsubscribe(ops.OdtDocument.signalOperationEnd, l);
        a()
    };
    (function () {
        H.subscribe(ops.Document.signalCursorAdded, n);
        H.subscribe(ops.Document.signalCursorRemoved, n);
        H.subscribe(ops.Document.signalCursorMoved, n);
        H.subscribe(ops.OdtDocument.signalParagraphStyleModified, r);
        H.subscribe(ops.OdtDocument.signalParagraphChanged,
            k);
        H.subscribe(ops.OdtDocument.signalOperationEnd, l);
        d();
        p || (D.alignParagraphCenter = O, D.alignParagraphJustified = O, D.alignParagraphLeft = O, D.alignParagraphRight = O, D.createParagraphStyleOps = function () {
            return[]
        }, D.indent = O, D.outdent = O)
    })()
};
gui.DirectFormattingController.textStylingChanged = "textStyling/changed";
gui.DirectFormattingController.paragraphStylingChanged = "paragraphStyling/changed";
(function () {
    return gui.DirectFormattingController
})();
// Input 81
gui.HyperlinkClickHandler = function (h) {
    function g() {
        h().removeAttributeNS("urn:webodf:names:helper", "links")
    }

    function b() {
        h().setAttributeNS("urn:webodf:names:helper", "links", "inactive")
    }

    var p = gui.HyperlinkClickHandler.Modifier.None, q = gui.HyperlinkClickHandler.Modifier.Ctrl, m = gui.HyperlinkClickHandler.Modifier.Meta, d = new odf.OdfUtils, n = xmldom.XPath, r = p;
    this.handleClick = function (b) {
        var e = b.target || b.srcElement, c, a;
        b.ctrlKey ? c = q : b.metaKey && (c = m);
        if (r === p || r === c) {
            a:{
                for (; null !== e;) {
                    if (d.isHyperlink(e))break a;
                    if (d.isParagraph(e))break;
                    e = e.parentNode
                }
                e = null
            }
            e && (e = d.getHyperlinkTarget(e), "" !== e && ("#" === e[0] ? (e = e.substring(1), c = h(), a = n.getODFElementsWithXPath(c, "//text:bookmark-start[@text:name='" + e + "']", odf.Namespaces.lookupNamespaceURI), 0 === a.length && (a = n.getODFElementsWithXPath(c, "//text:bookmark[@text:name='" + e + "']", odf.Namespaces.lookupNamespaceURI)), 0 < a.length && a[0].scrollIntoView(!0)) : runtime.getWindow().open(e), b.preventDefault ? b.preventDefault() : b.returnValue = !1))
        }
    };
    this.showPointerCursor = g;
    this.showTextCursor =
        b;
    this.setModifier = function (d) {
        r = d;
        r !== p ? b() : g()
    }
};
gui.HyperlinkClickHandler.Modifier = {None: 0, Ctrl: 1, Meta: 2};
// Input 82
gui.HyperlinkController = function (h, g) {
    var b = new odf.OdfUtils, p = h.getOdtDocument();
    this.addHyperlink = function (b, m) {
        var d = p.getCursorSelection(g), n = new ops.OpApplyHyperlink, r = [];
        if (0 === d.length || m)m = m || b, n = new ops.OpInsertText, n.init({memberid: g, position: d.position, text: m}), d.length = m.length, r.push(n);
        n = new ops.OpApplyHyperlink;
        n.init({memberid: g, position: d.position, length: d.length, hyperlink: b});
        r.push(n);
        h.enqueue(r)
    };
    this.removeHyperlinks = function () {
        var q = gui.SelectionMover.createPositionIterator(p.getRootNode()),
            m = p.getCursor(g).getSelectedRange(), d = b.getHyperlinkElements(m), n = m.collapsed && 1 === d.length, r = p.getDOMDocument().createRange(), k = [], e, c;
        0 !== d.length && (d.forEach(function (a) {
            r.selectNodeContents(a);
            e = p.convertDomToCursorRange({anchorNode: r.startContainer, anchorOffset: r.startOffset, focusNode: r.endContainer, focusOffset: r.endOffset});
            c = new ops.OpRemoveHyperlink;
            c.init({memberid: g, position: e.position, length: e.length});
            k.push(c)
        }), n || (n = d[0], -1 === m.comparePoint(n, 0) && (r.setStart(n, 0), r.setEnd(m.startContainer,
            m.startOffset), e = p.convertDomToCursorRange({anchorNode: r.startContainer, anchorOffset: r.startOffset, focusNode: r.endContainer, focusOffset: r.endOffset}), 0 < e.length && (c = new ops.OpApplyHyperlink, c.init({memberid: g, position: e.position, length: e.length, hyperlink: b.getHyperlinkTarget(n)}), k.push(c))), d = d[d.length - 1], q.moveToEndOfNode(d), q = q.unfilteredDomOffset(), 1 === m.comparePoint(d, q) && (r.setStart(m.endContainer, m.endOffset), r.setEnd(d, q), e = p.convertDomToCursorRange({anchorNode: r.startContainer, anchorOffset: r.startOffset,
            focusNode: r.endContainer, focusOffset: r.endOffset}), 0 < e.length && (c = new ops.OpApplyHyperlink, c.init({memberid: g, position: e.position, length: e.length, hyperlink: b.getHyperlinkTarget(d)}), k.push(c)))), h.enqueue(k), r.detach())
    }
};
// Input 83
gui.EventManager = function (h) {
    function g() {
        var a = this, b = [];
        this.filters = [];
        this.handlers = [];
        this.handleEvent = function (c) {
            -1 === b.indexOf(c) && (b.push(c), a.filters.every(function (a) {
                return a(c)
            }) && a.handlers.forEach(function (a) {
                a(c)
            }), runtime.setTimeout(function () {
                b.splice(b.indexOf(c), 1)
            }, 0))
        }
    }

    function b(a) {
        var b = a.scrollX, c = a.scrollY;
        this.restore = function () {
            a.scrollX === b && a.scrollY === c || a.scrollTo(b, c)
        }
    }

    function p(a) {
        var b = a.scrollTop, c = a.scrollLeft;
        this.restore = function () {
            if (a.scrollTop !== b || a.scrollLeft !==
                c)a.scrollTop = b, a.scrollLeft = c
        }
    }

    function q(a, b, c) {
        var d = "on" + b, e = !1;
        a.attachEvent && (a.attachEvent(d, c), e = !0);
        !e && a.addEventListener && (a.addEventListener(b, c, !1), e = !0);
        e && !k[b] || !a.hasOwnProperty(d) || (a[d] = c)
    }

    function m(b, d) {
        var k = c[b] || null;
        !k && d && (k = c[b] = new g, e[b] && q(r, b, k.handleEvent), q(a, b, k.handleEvent), q(l, b, k.handleEvent));
        return k
    }

    function d() {
        return h.getDOMDocument().activeElement === a
    }

    function n(a) {
        for (var c = []; a;)(a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight) && c.push(new p(a)),
            a = a.parentNode;
        c.push(new b(r));
        return c
    }

    var r = runtime.getWindow(), k = {beforecut: !0, beforepaste: !0}, e = {mousedown: !0, mouseup: !0, focus: !0}, c = {}, a, l = h.getCanvas().getElement();
    this.addFilter = function (a, b) {
        m(a, !0).filters.push(b)
    };
    this.removeFilter = function (a, b) {
        var c = m(a, !0), d = c.filters.indexOf(b);
        -1 !== d && c.filters.splice(d, 1)
    };
    this.subscribe = function (a, b) {
        m(a, !0).handlers.push(b)
    };
    this.unsubscribe = function (a, b) {
        var c = m(a, !1), d = c && c.handlers.indexOf(b);
        c && -1 !== d && c.handlers.splice(d, 1)
    };
    this.hasFocus =
        d;
    this.focus = function () {
        var b;
        d() || (b = n(a), a.focus(), b.forEach(function (a) {
            a.restore()
        }))
    };
    this.getEventTrap = function () {
        return a
    };
    this.blur = function () {
        d() && a.blur()
    };
    this.destroy = function (b) {
        a.parentNode.removeChild(a);
        b()
    };
    (function () {
        var b = h.getOdfCanvas().getSizer(), c = b.ownerDocument;
        runtime.assert(Boolean(r), "EventManager requires a window object to operate correctly");
        a = c.createElement("input");
        a.id = "eventTrap";
        a.setAttribute("tabindex", -1);
        b.appendChild(a)
    })()
};
// Input 84
/*

 Copyright (C) 2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.IOSSafariSupport = function (h) {
    function g() {
        b.innerHeight !== b.outerHeight && (p.style.display = "none", b.requestAnimationFrame(function () {
            p.style.display = "block"
        }))
    }

    var b = runtime.getWindow(), p = h.getEventTrap();
    this.destroy = function (b) {
        h.unsubscribe("focus", g);
        p.removeAttribute("autocapitalize");
        b()
    };
    h.subscribe("focus", g);
    p.setAttribute("autocapitalize", "off")
};
// Input 85
gui.ImageController = function (h, g, b) {
    var p = {"image/gif": ".gif", "image/jpeg": ".jpg", "image/png": ".png"}, q = odf.Namespaces.textns, m = h.getOdtDocument(), d = m.getFormatting(), n = {};
    this.insertImage = function (r, k, e, c) {
        var a;
        runtime.assert(0 < e && 0 < c, "Both width and height of the image should be greater than 0px.");
        a = m.getParagraphElement(m.getCursor(g).getNode()).getAttributeNS(q, "style-name");
        n.hasOwnProperty(a) || (n[a] = d.getContentSize(a, "paragraph"));
        a = n[a];
        e *= 0.0264583333333334;
        c *= 0.0264583333333334;
        var l =
            1, f = 1;
        e > a.width && (l = a.width / e);
        c > a.height && (f = a.height / c);
        l = Math.min(l, f);
        a = e * l;
        e = c * l;
        f = m.getOdfCanvas().odfContainer().rootElement.styles;
        c = r.toLowerCase();
        var l = p.hasOwnProperty(c) ? p[c] : null, s;
        c = [];
        runtime.assert(null !== l, "Image type is not supported: " + r);
        l = "Pictures/" + b.generateImageName() + l;
        s = new ops.OpSetBlob;
        s.init({memberid: g, filename: l, mimetype: r, content: k});
        c.push(s);
        d.getStyleElement("Graphics", "graphic", [f]) || (r = new ops.OpAddStyle, r.init({memberid: g, styleName: "Graphics", styleFamily: "graphic",
            isAutomaticStyle: !1, setProperties: {"style:graphic-properties": {"text:anchor-type": "paragraph", "svg:x": "0cm", "svg:y": "0cm", "style:wrap": "dynamic", "style:number-wrapped-paragraphs": "no-limit", "style:wrap-contour": "false", "style:vertical-pos": "top", "style:vertical-rel": "paragraph", "style:horizontal-pos": "center", "style:horizontal-rel": "paragraph"}}}), c.push(r));
        r = b.generateStyleName();
        k = new ops.OpAddStyle;
        k.init({memberid: g, styleName: r, styleFamily: "graphic", isAutomaticStyle: !0, setProperties: {"style:parent-style-name": "Graphics",
            "style:graphic-properties": {"style:vertical-pos": "top", "style:vertical-rel": "baseline", "style:horizontal-pos": "center", "style:horizontal-rel": "paragraph", "fo:background-color": "transparent", "style:background-transparency": "100%", "style:shadow": "none", "style:mirror": "none", "fo:clip": "rect(0cm, 0cm, 0cm, 0cm)", "draw:luminance": "0%", "draw:contrast": "0%", "draw:red": "0%", "draw:green": "0%", "draw:blue": "0%", "draw:gamma": "100%", "draw:color-inversion": "false", "draw:image-opacity": "100%", "draw:color-mode": "standard"}}});
        c.push(k);
        s = new ops.OpInsertImage;
        s.init({memberid: g, position: m.getCursorPosition(g), filename: l, frameWidth: a + "cm", frameHeight: e + "cm", frameStyleName: r, frameName: b.generateFrameName()});
        c.push(s);
        h.enqueue(c)
    }
};
// Input 86
gui.ImageSelector = function (h) {
    function g() {
        var b = h.getSizer(), g = q.createElement("div");
        g.id = "imageSelector";
        g.style.borderWidth = "1px";
        b.appendChild(g);
        p.forEach(function (b) {
            var d = q.createElement("div");
            d.className = b;
            g.appendChild(d)
        });
        return g
    }

    var b = odf.Namespaces.svgns, p = "topLeft topRight bottomRight bottomLeft topMiddle rightMiddle bottomMiddle leftMiddle".split(" "), q = h.getElement().ownerDocument, m = !1;
    this.select = function (d) {
        var n, p, k = q.getElementById("imageSelector");
        k || (k = g());
        m = !0;
        n = k.parentNode;
        p = d.getBoundingClientRect();
        var e = n.getBoundingClientRect(), c = h.getZoomLevel();
        n = (p.left - e.left) / c - 1;
        p = (p.top - e.top) / c - 1;
        k.style.display = "block";
        k.style.left = n + "px";
        k.style.top = p + "px";
        k.style.width = d.getAttributeNS(b, "width");
        k.style.height = d.getAttributeNS(b, "height")
    };
    this.clearSelection = function () {
        var b;
        m && (b = q.getElementById("imageSelector")) && (b.style.display = "none");
        m = !1
    };
    this.isSelectorElement = function (b) {
        var g = q.getElementById("imageSelector");
        return g ? b === g || b.parentNode === g : !1
    }
};
// Input 87
(function () {
    function h(g) {
        function b(b) {
            d = b.which && String.fromCharCode(b.which) === m;
            m = void 0;
            return!1 === d
        }

        function h() {
            d = !1
        }

        function q(b) {
            m = b.data;
            d = !1
        }

        var m, d = !1;
        this.destroy = function (d) {
            g.unsubscribe("textInput", h);
            g.unsubscribe("compositionend", q);
            g.removeFilter("keypress", b);
            d()
        };
        g.subscribe("textInput", h);
        g.subscribe("compositionend", q);
        g.addFilter("keypress", b)
    }

    gui.InputMethodEditor = function (g, b) {
        function p(a) {
            f && (a ? f.getNode().setAttributeNS(l, "composing", "true") : (f.getNode().removeAttributeNS(l,
                "composing"), x.textContent = ""))
        }

        function q() {
            t && (t = !1, p(!1), M.emit(gui.InputMethodEditor.signalCompositionEnd, {data: y}), y = "")
        }

        function m() {
            var b = a.getSelection(), c;
            for (q(); 1 < s.childNodes.length;)s.removeChild(s.firstChild);
            c = s.firstChild;
            if (!c || c.nodeType !== Node.TEXT_NODE) {
                for (; s.firstChild;)s.removeChild(s.firstChild);
                c = s.appendChild(C.createTextNode(""))
            }
            f && f.getSelectedRange().collapsed ? c.deleteData(0, c.length) : c.replaceData(0, c.length, v);
            b.collapse(s.firstChild, 0);
            b.extend && b.extend(s, s.childNodes.length)
        }

        function d() {
            O = void 0;
            u.cancel();
            p(!0);
            t || M.emit(gui.InputMethodEditor.signalCompositionStart, {data: ""})
        }

        function n(a) {
            a = O = a.data;
            t = !0;
            y += a;
            u.trigger()
        }

        function r(a) {
            a.data !== O && (a = a.data, t = !0, y += a, u.trigger());
            O = void 0
        }

        function k() {
            x.textContent = s.textContent
        }

        function e() {
            b.blur();
            s.setAttribute("disabled", !0)
        }

        function c() {
            var a = b.hasFocus();
            a && b.blur();
            Q ? s.removeAttribute("disabled") : s.setAttribute("disabled", !0);
            a && b.focus()
        }

        var a = runtime.getWindow(), l = "urn:webodf:names:cursor", f = null, s = b.getEventTrap(),
            C = s.ownerDocument, x, w = new core.Async, v = "b", u, t = !1, y = "", M = new core.EventNotifier([gui.InputMethodEditor.signalCompositionStart, gui.InputMethodEditor.signalCompositionEnd]), O, D = [], H, Q = !1;
        this.subscribe = M.subscribe;
        this.unsubscribe = M.unsubscribe;
        this.registerCursor = function (a) {
            a.getMemberId() === g && (f = a, f.getNode().appendChild(x), b.subscribe("input", k), b.subscribe("compositionupdate", k))
        };
        this.removeCursor = function (a) {
            f && a === g && (f.getNode().removeChild(x), b.unsubscribe("input", k), b.unsubscribe("compositionupdate",
                k), f = null)
        };
        this.setEditing = function (a) {
            Q = a;
            c()
        };
        this.destroy = function (a) {
            b.unsubscribe("compositionstart", d);
            b.unsubscribe("compositionend", n);
            b.unsubscribe("textInput", r);
            b.unsubscribe("keypress", q);
            b.unsubscribe("mousedown", e);
            b.unsubscribe("mouseup", c);
            b.unsubscribe("focus", m);
            w.destroyAll(H, a)
        };
        (function () {
            b.subscribe("compositionstart", d);
            b.subscribe("compositionend", n);
            b.subscribe("textInput", r);
            b.subscribe("keypress", q);
            b.subscribe("mousedown", e);
            b.subscribe("mouseup", c);
            b.subscribe("focus",
                m);
            D.push(new h(b));
            H = D.map(function (a) {
                return a.destroy
            });
            x = C.createElement("span");
            x.setAttribute("id", "composer");
            u = new core.ScheduledTask(m, 1);
            H.push(u.destroy)
        })()
    };
    gui.InputMethodEditor.signalCompositionStart = "input/compositionstart";
    gui.InputMethodEditor.signalCompositionEnd = "input/compositionend";
    return gui.InputMethodEditor
})();
// Input 88
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.KeyboardHandler = function () {
    function h(b, h) {
        h || (h = g.None);
        return b + ":" + h
    }

    var g = gui.KeyboardHandler.Modifier, b = null, p = {};
    this.setDefault = function (g) {
        b = g
    };
    this.bind = function (b, g, d, n) {
        b = h(b, g);
        runtime.assert(n || !1 === p.hasOwnProperty(b), "tried to overwrite the callback handler of key combo: " + b);
        p[b] = d
    };
    this.unbind = function (b, g) {
        var d = h(b, g);
        delete p[d]
    };
    this.reset = function () {
        b = null;
        p = {}
    };
    this.handleEvent = function (q) {
        var m = q.keyCode, d = g.None;
        q.metaKey && (d |= g.Meta);
        q.ctrlKey && (d |= g.Ctrl);
        q.altKey &&
        (d |= g.Alt);
        q.shiftKey && (d |= g.Shift);
        m = h(m, d);
        m = p[m];
        d = !1;
        m ? d = m() : null !== b && (d = b(q));
        d && (q.preventDefault ? q.preventDefault() : q.returnValue = !1)
    }
};
gui.KeyboardHandler.Modifier = {None: 0, Meta: 1, Ctrl: 2, Alt: 4, CtrlAlt: 6, Shift: 8, MetaShift: 9, CtrlShift: 10, AltShift: 12};
gui.KeyboardHandler.KeyCode = {Backspace: 8, Tab: 9, Clear: 12, Enter: 13, Ctrl: 17, End: 35, Home: 36, Left: 37, Up: 38, Right: 39, Down: 40, Delete: 46, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, LeftMeta: 91, MetaInMozilla: 224};
(function () {
    return gui.KeyboardHandler
})();
// Input 89
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.PlainTextPasteboard = function (h, g) {
    function b(b, g) {
        b.init(g);
        return b
    }

    this.createPasteOps = function (p) {
        var q = h.getCursorPosition(g), m = q, d = [];
        p.replace(/\r/g, "").split("\n").forEach(function (h) {
            d.push(b(new ops.OpSplitParagraph, {memberid: g, position: m, moveCursor: !0}));
            m += 1;
            d.push(b(new ops.OpInsertText, {memberid: g, position: m, text: h, moveCursor: !0}));
            m += h.length
        });
        d.push(b(new ops.OpRemoveText, {memberid: g, position: q, length: 1}));
        return d
    }
};
// Input 90
/*

 Copyright (C) 2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
odf.WordBoundaryFilter = function (h, g) {
    function b(a, b, c) {
        for (var d = null, e = h.getRootNode(), g; a !== e && null !== a && null === d;)g = 0 > b ? a.previousSibling : a.nextSibling, c(g) === NodeFilter.FILTER_ACCEPT && (d = g), a = a.parentNode;
        return d
    }

    function p(a, b) {
        var c;
        return null === a ? l.NO_NEIGHBOUR : d.isCharacterElement(a) ? l.SPACE_CHAR : a.nodeType === q || d.isTextSpan(a) || d.isHyperlink(a) ? (c = a.textContent.charAt(b()), r.test(c) ? l.SPACE_CHAR : n.test(c) ? l.PUNCTUATION_CHAR : l.WORD_CHAR) : l.OTHER
    }

    var q = Node.TEXT_NODE, m = Node.ELEMENT_NODE,
        d = new odf.OdfUtils, n = /[!-#%-*,-\/:-;?-@\[-\]_{}\u00a1\u00ab\u00b7\u00bb\u00bf;\u00b7\u055a-\u055f\u0589-\u058a\u05be\u05c0\u05c3\u05c6\u05f3-\u05f4\u0609-\u060a\u060c-\u060d\u061b\u061e-\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0964-\u0965\u0970\u0df4\u0e4f\u0e5a-\u0e5b\u0f04-\u0f12\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u104a-\u104f\u10fb\u1361-\u1368\u166d-\u166e\u169b-\u169c\u16eb-\u16ed\u1735-\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944-\u1945\u19de-\u19df\u1a1e-\u1a1f\u1b5a-\u1b60\u1c3b-\u1c3f\u1c7e-\u1c7f\u2000-\u206e\u207d-\u207e\u208d-\u208e\u3008-\u3009\u2768-\u2775\u27c5-\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc-\u29fd\u2cf9-\u2cfc\u2cfe-\u2cff\u2e00-\u2e7e\u3000-\u303f\u30a0\u30fb\ua60d-\ua60f\ua673\ua67e\ua874-\ua877\ua8ce-\ua8cf\ua92e-\ua92f\ua95f\uaa5c-\uaa5f\ufd3e-\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a-\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a-\uff1b\uff1f-\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]|\ud800[\udd00-\udd01\udf9f\udfd0]|\ud802[\udd1f\udd3f\ude50-\ude58]|\ud809[\udc00-\udc7e]/,
        r = /\s/, k = core.PositionFilter.FilterResult.FILTER_ACCEPT, e = core.PositionFilter.FilterResult.FILTER_REJECT, c = odf.WordBoundaryFilter.IncludeWhitespace.TRAILING, a = odf.WordBoundaryFilter.IncludeWhitespace.LEADING, l = {NO_NEIGHBOUR: 0, SPACE_CHAR: 1, PUNCTUATION_CHAR: 2, WORD_CHAR: 3, OTHER: 4};
    this.acceptPosition = function (f) {
        var d = f.container(), h = f.leftNode(), n = f.rightNode(), q = f.unfilteredDomOffset, r = function () {
            return f.unfilteredDomOffset() - 1
        };
        d.nodeType === m && (null === n && (n = b(d, 1, f.getNodeFilter())), null === h && (h =
            b(d, -1, f.getNodeFilter())));
        d !== n && (q = function () {
            return 0
        });
        d !== h && null !== h && (r = function () {
            return h.textContent.length - 1
        });
        d = p(h, r);
        n = p(n, q);
        return d === l.WORD_CHAR && n === l.WORD_CHAR || d === l.PUNCTUATION_CHAR && n === l.PUNCTUATION_CHAR || g === c && d !== l.NO_NEIGHBOUR && n === l.SPACE_CHAR || g === a && d === l.SPACE_CHAR && n !== l.NO_NEIGHBOUR ? e : k
    }
};
odf.WordBoundaryFilter.IncludeWhitespace = {None: 0, TRAILING: 1, LEADING: 2};
(function () {
    return odf.WordBoundaryFilter
})();
// Input 91
gui.SelectionController = function (h, g) {
    function b() {
        var a = w.getCursor(g).getNode();
        return w.createStepIterator(a, 0, [t, M], w.getRootElement(a))
    }

    function p(a, b, c) {
        c = new odf.WordBoundaryFilter(w, c);
        return w.createStepIterator(a, b, [t, M, c], w.getRootElement(a))
    }

    function q(a) {
        return function (b) {
            var c = a(b);
            return function (b, d) {
                return a(d) === c
            }
        }
    }

    function m(a, b) {
        return b ? {anchorNode: a.startContainer, anchorOffset: a.startOffset, focusNode: a.endContainer, focusOffset: a.endOffset} : {anchorNode: a.endContainer, anchorOffset: a.endOffset,
            focusNode: a.startContainer, focusOffset: a.startOffset}
    }

    function d(a, b, c) {
        var d = new ops.OpMoveCursor;
        d.init({memberid: g, position: a, length: b || 0, selectionType: c});
        return d
    }

    function n(a) {
        var b;
        b = p(a.startContainer, a.startOffset, O);
        b.roundToPreviousStep() && a.setStart(b.container(), b.offset());
        b = p(a.endContainer, a.endOffset, D);
        b.roundToNextStep() && a.setEnd(b.container(), b.offset())
    }

    function r(a) {
        var b = u.getParagraphElements(a), c = b[0], b = b[b.length - 1];
        c && a.setStart(c, 0);
        b && (u.isParagraph(a.endContainer) &&
            0 === a.endOffset ? a.setEndBefore(b) : a.setEnd(b, b.childNodes.length))
    }

    function k(a) {
        var b = w.getCursorSelection(g), c = w.getCursor(g).getStepCounter();
        0 !== a && (a = 0 < a ? c.convertForwardStepsBetweenFilters(a, y, t) : -c.convertBackwardStepsBetweenFilters(-a, y, t), a = b.length + a, h.enqueue([d(b.position, a)]))
    }

    function e(a) {
        var c = b(), f = w.getCursor(g).getAnchorNode();
        a(c) && (a = w.convertDomToCursorRange({anchorNode: f, anchorOffset: 0, focusNode: c.container(), focusOffset: c.offset()}), h.enqueue([d(a.position, a.length)]))
    }

    function c(a) {
        var b =
            w.getCursorPosition(g), c = w.getCursor(g).getStepCounter();
        0 !== a && (a = 0 < a ? c.convertForwardStepsBetweenFilters(a, y, t) : -c.convertBackwardStepsBetweenFilters(-a, y, t), h.enqueue([d(b + a, 0)]))
    }

    function a(a) {
        var c = b();
        a(c) && (a = w.convertDomPointToCursorStep(c.container(), c.offset()), h.enqueue([d(a, 0)]))
    }

    function l(a, b) {
        var d = w.getParagraphElement(w.getCursor(g).getNode());
        runtime.assert(Boolean(d), "SelectionController: Cursor outside paragraph");
        d = w.getCursor(g).getStepCounter().countLinesSteps(a, y);
        b ? k(d) : c(d)
    }

    function f(a, b) {
        var d = w.getCursor(g).getStepCounter().countStepsToLineBoundary(a, y);
        b ? k(d) : c(d)
    }

    function s(a, b) {
        var c = w.getCursor(g), c = m(c.getSelectedRange(), c.hasForwardSelection()), f = p(c.focusNode, c.focusOffset, O);
        if (0 <= a ? f.nextStep() : f.previousStep())c.focusNode = f.container(), c.focusOffset = f.offset(), b || (c.anchorNode = c.focusNode, c.anchorOffset = c.focusOffset), c = w.convertDomToCursorRange(c), h.enqueue([d(c.position, c.length)])
    }

    function C(a, b) {
        var c = w.getCursor(g), f = b(c.getNode()), c = m(c.getSelectedRange(),
            c.hasForwardSelection());
        runtime.assert(Boolean(f), "SelectionController: Cursor outside root");
        0 > a ? (c.focusNode = f, c.focusOffset = 0) : (c.focusNode = f, c.focusOffset = f.childNodes.length);
        f = w.convertDomToCursorRange(c, q(b));
        h.enqueue([d(f.position, f.length)])
    }

    function x(a) {
        var b = w.getCursor(g), b = w.getRootElement(b.getNode());
        runtime.assert(Boolean(b), "SelectionController: Cursor outside root");
        a = 0 > a ? w.convertDomPointToCursorStep(b, 0, function (a) {
            return a === ops.StepsTranslator.NEXT_STEP
        }) : w.convertDomPointToCursorStep(b,
            b.childNodes.length);
        h.enqueue([d(a, 0)]);
        return!0
    }

    var w = h.getOdtDocument(), v = new core.DomUtils, u = new odf.OdfUtils, t = w.getPositionFilter(), y = new core.PositionFilterChain, M = w.createRootFilter(g), O = odf.WordBoundaryFilter.IncludeWhitespace.TRAILING, D = odf.WordBoundaryFilter.IncludeWhitespace.LEADING;
    this.selectionToRange = function (a) {
        var b = 0 <= v.comparePoints(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset), c = a.focusNode.ownerDocument.createRange();
        b ? (c.setStart(a.anchorNode, a.anchorOffset), c.setEnd(a.focusNode,
            a.focusOffset)) : (c.setStart(a.focusNode, a.focusOffset), c.setEnd(a.anchorNode, a.anchorOffset));
        return{range: c, hasForwardSelection: b}
    };
    this.rangeToSelection = m;
    this.selectImage = function (a) {
        var b = w.getRootElement(a), c = w.createRootFilter(b), b = w.createStepIterator(a, 0, [c, w.getPositionFilter()], b), f;
        b.roundToPreviousStep() || runtime.assert(!1, "No walkable position before frame");
        c = b.container();
        f = b.offset();
        b.setPosition(a, a.childNodes.length);
        b.roundToNextStep() || runtime.assert(!1, "No walkable position after frame");
        a = w.convertDomToCursorRange({anchorNode: c, anchorOffset: f, focusNode: b.container(), focusOffset: b.offset()});
        a = d(a.position, a.length, ops.OdtCursor.RegionSelection);
        h.enqueue([a])
    };
    this.expandToWordBoundaries = n;
    this.expandToParagraphBoundaries = r;
    this.selectRange = function (a, b, c) {
        var f = w.getOdfCanvas().getElement(), e;
        e = v.containsNode(f, a.startContainer);
        f = v.containsNode(f, a.endContainer);
        if (e || f)if (e && f && (2 === c ? n(a) : 3 <= c && r(a)), a = m(a, b), b = w.convertDomToCursorRange(a, q(u.getParagraphElement)), a = w.getCursorSelection(g),
            b.position !== a.position || b.length !== a.length)a = d(b.position, b.length, ops.OdtCursor.RangeSelection), h.enqueue([a])
    };
    this.moveCursorToLeft = function () {
        a(function (a) {
            return a.previousStep()
        });
        return!0
    };
    this.moveCursorToRight = function () {
        a(function (a) {
            return a.nextStep()
        });
        return!0
    };
    this.extendSelectionToLeft = function () {
        e(function (a) {
            return a.previousStep()
        });
        return!0
    };
    this.extendSelectionToRight = function () {
        e(function (a) {
            return a.nextStep()
        });
        return!0
    };
    this.moveCursorUp = function () {
        l(-1, !1);
        return!0
    };
    this.moveCursorDown =
        function () {
            l(1, !1);
            return!0
        };
    this.extendSelectionUp = function () {
        l(-1, !0);
        return!0
    };
    this.extendSelectionDown = function () {
        l(1, !0);
        return!0
    };
    this.moveCursorBeforeWord = function () {
        s(-1, !1);
        return!0
    };
    this.moveCursorPastWord = function () {
        s(1, !1);
        return!0
    };
    this.extendSelectionBeforeWord = function () {
        s(-1, !0);
        return!0
    };
    this.extendSelectionPastWord = function () {
        s(1, !0);
        return!0
    };
    this.moveCursorToLineStart = function () {
        f(-1, !1);
        return!0
    };
    this.moveCursorToLineEnd = function () {
        f(1, !1);
        return!0
    };
    this.extendSelectionToLineStart =
        function () {
            f(-1, !0);
            return!0
        };
    this.extendSelectionToLineEnd = function () {
        f(1, !0);
        return!0
    };
    this.extendSelectionToParagraphStart = function () {
        C(-1, w.getParagraphElement);
        return!0
    };
    this.extendSelectionToParagraphEnd = function () {
        C(1, w.getParagraphElement);
        return!0
    };
    this.moveCursorToDocumentStart = function () {
        x(-1);
        return!0
    };
    this.moveCursorToDocumentEnd = function () {
        x(1);
        return!0
    };
    this.extendSelectionToDocumentStart = function () {
        C(-1, w.getRootElement);
        return!0
    };
    this.extendSelectionToDocumentEnd = function () {
        C(1, w.getRootElement);
        return!0
    };
    this.extendSelectionToEntireDocument = function () {
        var a = w.getCursor(g), a = w.getRootElement(a.getNode());
        runtime.assert(Boolean(a), "SelectionController: Cursor outside root");
        a = w.convertDomToCursorRange({anchorNode: a, anchorOffset: 0, focusNode: a, focusOffset: a.childNodes.length}, q(w.getRootElement));
        h.enqueue([d(a.position, a.length)]);
        return!0
    };
    y.addFilter(t);
    y.addFilter(w.createRootFilter(g))
};
// Input 92
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.TextController = function (h, g, b, p) {
    function q(b) {
        var d = new ops.OpRemoveText;
        d.init({memberid: g, position: b.position, length: b.length});
        return d
    }

    function m(b) {
        0 > b.length && (b.position += b.length, b.length = -b.length);
        return b
    }

    function d(b, d) {
        var c = new core.PositionFilterChain, a = gui.SelectionMover.createPositionIterator(n.getRootElement(b)), h = d ? a.nextPosition : a.previousPosition;
        c.addFilter(n.getPositionFilter());
        c.addFilter(n.createRootFilter(g));
        for (a.setUnfilteredPosition(b, 0); h();)if (c.acceptPosition(a) ===
            r)return!0;
        return!1
    }

    var n = h.getOdtDocument(), r = core.PositionFilter.FilterResult.FILTER_ACCEPT;
    this.enqueueParagraphSplittingOps = function () {
        var b = m(n.getCursorSelection(g)), d, c = [];
        0 < b.length && (d = q(b), c.push(d));
        d = new ops.OpSplitParagraph;
        d.init({memberid: g, position: b.position, moveCursor: !0});
        c.push(d);
        p && (b = p(b.position + 1), c = c.concat(b));
        h.enqueue(c);
        return!0
    };
    this.removeTextByBackspaceKey = function () {
        var b = n.getCursor(g), e = m(n.getCursorSelection(g)), c = null;
        0 === e.length ? d(b.getNode(), !1) && (c = new ops.OpRemoveText,
            c.init({memberid: g, position: e.position - 1, length: 1}), h.enqueue([c])) : (c = q(e), h.enqueue([c]));
        return null !== c
    };
    this.removeTextByDeleteKey = function () {
        var b = n.getCursor(g), e = m(n.getCursorSelection(g)), c = null;
        0 === e.length ? d(b.getNode(), !0) && (c = new ops.OpRemoveText, c.init({memberid: g, position: e.position, length: 1}), h.enqueue([c])) : (c = q(e), h.enqueue([c]));
        return null !== c
    };
    this.removeCurrentSelection = function () {
        var b = m(n.getCursorSelection(g));
        0 !== b.length && (b = q(b), h.enqueue([b]));
        return!0
    };
    this.insertText =
        function (d) {
            var e = m(n.getCursorSelection(g)), c, a = [], l = !1;
            0 < e.length && (c = q(e), a.push(c), l = !0);
            c = new ops.OpInsertText;
            c.init({memberid: g, position: e.position, text: d, moveCursor: !0});
            a.push(c);
            b && (d = b(e.position, d.length, l)) && a.push(d);
            h.enqueue(a)
        }
};
(function () {
    return gui.TextController
})();
// Input 93
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.UndoManager = function () {
};
gui.UndoManager.prototype.subscribe = function (h, g) {
};
gui.UndoManager.prototype.unsubscribe = function (h, g) {
};
gui.UndoManager.prototype.setDocument = function (h) {
};
gui.UndoManager.prototype.setInitialState = function () {
};
gui.UndoManager.prototype.initialize = function () {
};
gui.UndoManager.prototype.purgeInitialState = function () {
};
gui.UndoManager.prototype.setPlaybackFunction = function (h) {
};
gui.UndoManager.prototype.hasUndoStates = function () {
};
gui.UndoManager.prototype.hasRedoStates = function () {
};
gui.UndoManager.prototype.moveForward = function (h) {
};
gui.UndoManager.prototype.moveBackward = function (h) {
};
gui.UndoManager.prototype.onOperationExecuted = function (h) {
};
gui.UndoManager.signalUndoStackChanged = "undoStackChanged";
gui.UndoManager.signalUndoStateCreated = "undoStateCreated";
gui.UndoManager.signalUndoStateModified = "undoStateModified";
(function () {
    return gui.UndoManager
})();
// Input 94
(function () {
    var h = core.PositionFilter.FilterResult.FILTER_ACCEPT;
    gui.SessionController = function (g, b, p, q) {
        function m(a) {
            var c = I.getCursor(b).getSelectedRange();
            c.collapsed ? a.preventDefault() : T.setDataFromRange(a, c) ? fa.removeCurrentSelection() : runtime.log("Cut operation failed")
        }

        function d() {
            return!1 !== I.getCursor(b).getSelectedRange().collapsed
        }

        function n(a) {
            var c = I.getCursor(b).getSelectedRange();
            c.collapsed ? a.preventDefault() : T.setDataFromRange(a, c) || runtime.log("Copy operation failed")
        }

        function r(a) {
            var b;
            Q.clipboardData && Q.clipboardData.getData ? b = Q.clipboardData.getData("Text") : a.clipboardData && a.clipboardData.getData && (b = a.clipboardData.getData("text/plain"));
            b && (fa.removeCurrentSelection(), g.enqueue(ha.createPasteOps(b)));
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }

        function k() {
            return!1
        }

        function e(a) {
            if (F)F.onOperationExecuted(a)
        }

        function c(a) {
            I.emit(ops.OdtDocument.signalUndoStackChanged, a)
        }

        function a() {
            var a = E.getEventTrap(), b, c;
            return F ? (c = E.hasFocus(), F.moveBackward(1), b = I.getOdfCanvas().getSizer(),
                aa.containsNode(b, a) || (b.appendChild(a), c && E.focus()), !0) : !1
        }

        function l() {
            var a;
            return F ? (a = E.hasFocus(), F.moveForward(1), a && E.focus(), !0) : !1
        }

        function f() {
            var a = Q.getSelection(), b = 0 < a.rangeCount && L.selectionToRange(a);
            K && b && (ba = !0, N.clearSelection(), Y.setUnfilteredPosition(a.focusNode, a.focusOffset), $.acceptPosition(Y) === h && (2 === da ? L.expandToWordBoundaries(b.range) : 3 <= da && L.expandToParagraphBoundaries(b.range), p.setSelectedRange(b.range, b.hasForwardSelection), I.emit(ops.Document.signalCursorMoved,
                p)))
        }

        function s(a) {
            var c = a.target || a.srcElement || null, d = I.getCursor(b);
            if (K = null !== c && aa.containsNode(I.getOdfCanvas().getElement(), c))ba = !1, $ = I.createRootFilter(c), da = a.detail, d && a.shiftKey ? Q.getSelection().collapse(d.getAnchorNode(), 0) : (a = Q.getSelection(), c = d.getSelectedRange(), a.extend ? d.hasForwardSelection() ? (a.collapse(c.startContainer, c.startOffset), a.extend(c.endContainer, c.endOffset)) : (a.collapse(c.endContainer, c.endOffset), a.extend(c.startContainer, c.startOffset)) : (a.removeAllRanges(), a.addRange(c.cloneRange()))),
                1 < da && f()
        }

        function C(a) {
            var b = I.getRootElement(a), c = I.createRootFilter(b), b = I.createStepIterator(a, 0, [c, I.getPositionFilter()], b);
            b.setPosition(a, a.childNodes.length);
            return b.roundToNextStep() ? {container: b.container(), offset: b.offset()} : null
        }

        function x(a) {
            var b;
            b = (b = Q.getSelection()) ? {anchorNode: b.anchorNode, anchorOffset: b.anchorOffset, focusNode: b.focusNode, focusOffset: b.focusOffset} : null;
            var c, d;
            if (!b.anchorNode && !b.focusNode) {
                d = a.clientX;
                var f = a.clientY, e = I.getDOMDocument();
                c = null;
                e.caretRangeFromPoint ?
                    (d = e.caretRangeFromPoint(d, f), c = {container: d.startContainer, offset: d.startOffset}) : e.caretPositionFromPoint && (d = e.caretPositionFromPoint(d, f)) && d.offsetNode && (c = {container: d.offsetNode, offset: d.offset});
                c && (b.anchorNode = c.container, b.anchorOffset = c.offset, b.focusNode = b.anchorNode, b.focusOffset = b.anchorOffset)
            }
            if (Z.isImage(b.focusNode) && 0 === b.focusOffset && Z.isCharacterFrame(b.focusNode.parentNode)) {
                if (d = b.focusNode.parentNode, c = d.getBoundingClientRect(), a.clientX > c.right && (c = C(d)))b.anchorNode = b.focusNode =
                    c.container, b.anchorOffset = b.focusOffset = c.offset
            } else Z.isImage(b.focusNode.firstChild) && 1 === b.focusOffset && Z.isCharacterFrame(b.focusNode) && (c = C(b.focusNode)) && (b.anchorNode = b.focusNode = c.container, b.anchorOffset = b.focusOffset = c.offset);
            b.anchorNode && b.focusNode && (b = L.selectionToRange(b), L.selectRange(b.range, b.hasForwardSelection, a.detail));
            E.focus()
        }

        function w(a) {
            var b = a.target || a.srcElement || null, c, d;
            V.processRequests();
            Z.isImage(b) && Z.isCharacterFrame(b.parentNode) && Q.getSelection().isCollapsed ?
                (L.selectImage(b.parentNode), E.focus()) : N.isSelectorElement(b) ? E.focus() : K && (ba ? (b = p.getSelectedRange(), c = b.collapsed, Z.isImage(b.endContainer) && 0 === b.endOffset && Z.isCharacterFrame(b.endContainer.parentNode) && (d = b.endContainer.parentNode, d = C(d)) && (b.setEnd(d.container, d.offset), c && b.collapse(!1)), L.selectRange(b, p.hasForwardSelection(), a.detail), E.focus()) : ma ? x(a) : ia = runtime.setTimeout(function () {
                x(a)
            }, 0));
            da = 0;
            ba = K = !1
        }

        function v(a) {
            var c = I.getCursor(b).getSelectedRange();
            c.collapsed || G.exportRangeToDataTransfer(a.dataTransfer,
                c)
        }

        function u() {
            K && E.focus();
            da = 0;
            ba = K = !1
        }

        function t(a) {
            w(a)
        }

        function y(a) {
            var b = a.target || a.srcElement || null, c = null;
            "annotationRemoveButton" === b.className ? (c = aa.getElementsByTagNameNS(b.parentNode, odf.Namespaces.officens, "annotation")[0], W.removeAnnotation(c), E.focus()) : w(a)
        }

        function M(a) {
            (a = a.data) && fa.insertText(a)
        }

        function O(a) {
            return function () {
                a();
                return!0
            }
        }

        function D(a) {
            return function (c) {
                return I.getCursor(b).getSelectionType() === ops.OdtCursor.RangeSelection ? a(c) : !0
            }
        }

        function H(a) {
            E.unsubscribe("keydown",
                z.handleEvent);
            E.unsubscribe("keypress", U.handleEvent);
            E.unsubscribe("keyup", S.handleEvent);
            E.unsubscribe("copy", n);
            E.unsubscribe("mousedown", s);
            E.unsubscribe("mousemove", V.trigger);
            E.unsubscribe("mouseup", y);
            E.unsubscribe("contextmenu", t);
            E.unsubscribe("dragstart", v);
            E.unsubscribe("dragend", u);
            E.unsubscribe("click", ea.handleClick);
            I.unsubscribe(ops.OdtDocument.signalOperationEnd, ga.trigger);
            I.unsubscribe(ops.Document.signalCursorAdded, R.registerCursor);
            I.unsubscribe(ops.Document.signalCursorRemoved,
                R.removeCursor);
            I.unsubscribe(ops.OdtDocument.signalOperationEnd, e);
            a()
        }

        var Q = runtime.getWindow(), I = g.getOdtDocument(), J = new core.Async, aa = new core.DomUtils, Z = new odf.OdfUtils, G = new gui.MimeDataExporter, T = new gui.Clipboard(G), z = new gui.KeyboardHandler, U = new gui.KeyboardHandler, S = new gui.KeyboardHandler, K = !1, P = new odf.ObjectNameGenerator(I.getOdfCanvas().odfContainer(), b), ba = !1, $ = null, ia, F = null, E = new gui.EventManager(I), W = new gui.AnnotationController(g, b), X = new gui.DirectFormattingController(g, b, P,
                q.directParagraphStylingEnabled), fa = new gui.TextController(g, b, X.createCursorStyleOp, X.createParagraphStyleOps), ca = new gui.ImageController(g, b, P), N = new gui.ImageSelector(I.getOdfCanvas()), Y = gui.SelectionMover.createPositionIterator(I.getRootNode()), V, ga, ha = new gui.PlainTextPasteboard(I, b), R = new gui.InputMethodEditor(b, E), da = 0, ea = new gui.HyperlinkClickHandler(I.getRootNode), ja = new gui.HyperlinkController(g, b), L = new gui.SelectionController(g, b), A = gui.KeyboardHandler.Modifier, B = gui.KeyboardHandler.KeyCode,
            ka = -1 !== Q.navigator.appVersion.toLowerCase().indexOf("mac"), ma = -1 !== ["iPad", "iPod", "iPhone"].indexOf(Q.navigator.platform), la;
        runtime.assert(null !== Q, "Expected to be run in an environment which has a global window, like a browser.");
        this.undo = a;
        this.redo = l;
        this.insertLocalCursor = function () {
            runtime.assert(void 0 === g.getOdtDocument().getCursor(b), "Inserting local cursor a second time.");
            var a = new ops.OpAddCursor;
            a.init({memberid: b});
            g.enqueue([a]);
            E.focus()
        };
        this.removeLocalCursor = function () {
            runtime.assert(void 0 !==
                g.getOdtDocument().getCursor(b), "Removing local cursor without inserting before.");
            var a = new ops.OpRemoveCursor;
            a.init({memberid: b});
            g.enqueue([a])
        };
        this.startEditing = function () {
            R.subscribe(gui.InputMethodEditor.signalCompositionStart, fa.removeCurrentSelection);
            R.subscribe(gui.InputMethodEditor.signalCompositionEnd, M);
            E.subscribe("beforecut", d);
            E.subscribe("cut", m);
            E.subscribe("beforepaste", k);
            E.subscribe("paste", r);
            Q.addEventListener("focus", ea.showTextCursor, !1);
            F && F.initialize();
            R.setEditing(!0);
            ea.setModifier(ka ? gui.HyperlinkClickHandler.Modifier.Meta : gui.HyperlinkClickHandler.Modifier.Ctrl);
            z.bind(B.Backspace, A.None, O(fa.removeTextByBackspaceKey), !0);
            z.bind(B.Delete, A.None, fa.removeTextByDeleteKey);
            z.bind(B.Tab, A.None, D(function () {
                fa.insertText("\t");
                return!0
            }));
            ka ? (z.bind(B.Clear, A.None, fa.removeCurrentSelection), z.bind(B.B, A.Meta, D(X.toggleBold)), z.bind(B.I, A.Meta, D(X.toggleItalic)), z.bind(B.U, A.Meta, D(X.toggleUnderline)), z.bind(B.L, A.MetaShift, D(X.alignParagraphLeft)), z.bind(B.E, A.MetaShift,
                D(X.alignParagraphCenter)), z.bind(B.R, A.MetaShift, D(X.alignParagraphRight)), z.bind(B.J, A.MetaShift, D(X.alignParagraphJustified)), z.bind(B.C, A.MetaShift, W.addAnnotation), z.bind(B.Z, A.Meta, a), z.bind(B.Z, A.MetaShift, l), z.bind(B.LeftMeta, A.Meta, ea.showPointerCursor), z.bind(B.MetaInMozilla, A.Meta, ea.showPointerCursor), S.bind(B.LeftMeta, A.None, ea.showTextCursor), S.bind(B.MetaInMozilla, A.None, ea.showTextCursor)) : (z.bind(B.B, A.Ctrl, D(X.toggleBold)), z.bind(B.I, A.Ctrl, D(X.toggleItalic)), z.bind(B.U, A.Ctrl, D(X.toggleUnderline)),
                z.bind(B.L, A.CtrlShift, D(X.alignParagraphLeft)), z.bind(B.E, A.CtrlShift, D(X.alignParagraphCenter)), z.bind(B.R, A.CtrlShift, D(X.alignParagraphRight)), z.bind(B.J, A.CtrlShift, D(X.alignParagraphJustified)), z.bind(B.C, A.CtrlAlt, W.addAnnotation), z.bind(B.Z, A.Ctrl, a), z.bind(B.Z, A.CtrlShift, l), z.bind(B.Ctrl, A.Ctrl, ea.showPointerCursor), S.bind(B.Ctrl, A.None, ea.showTextCursor));
            U.setDefault(D(function (a) {
                var b;
                b = null === a.which || void 0 === a.which ? String.fromCharCode(a.keyCode) : 0 !== a.which && 0 !== a.charCode ? String.fromCharCode(a.which) :
                    null;
                return!b || a.altKey || a.ctrlKey || a.metaKey ? !1 : (fa.insertText(b), !0)
            }));
            U.bind(B.Enter, A.None, D(fa.enqueueParagraphSplittingOps))
        };
        this.endEditing = function () {
            R.unsubscribe(gui.InputMethodEditor.signalCompositionStart, fa.removeCurrentSelection);
            R.unsubscribe(gui.InputMethodEditor.signalCompositionEnd, M);
            E.unsubscribe("cut", m);
            E.unsubscribe("beforecut", d);
            E.unsubscribe("paste", r);
            E.unsubscribe("beforepaste", k);
            Q.removeEventListener("focus", ea.showTextCursor, !1);
            R.setEditing(!1);
            ea.setModifier(gui.HyperlinkClickHandler.Modifier.None);
            z.bind(B.Backspace, A.None, function () {
                return!0
            }, !0);
            z.unbind(B.Delete, A.None);
            z.unbind(B.Tab, A.None);
            ka ? (z.unbind(B.Clear, A.None), z.unbind(B.B, A.Meta), z.unbind(B.I, A.Meta), z.unbind(B.U, A.Meta), z.unbind(B.L, A.MetaShift), z.unbind(B.E, A.MetaShift), z.unbind(B.R, A.MetaShift), z.unbind(B.J, A.MetaShift), z.unbind(B.C, A.MetaShift), z.unbind(B.Z, A.Meta), z.unbind(B.Z, A.MetaShift), z.unbind(B.LeftMeta, A.Meta), z.unbind(B.MetaInMozilla, A.Meta), S.unbind(B.LeftMeta, A.None), S.unbind(B.MetaInMozilla, A.None)) : (z.unbind(B.B,
                A.Ctrl), z.unbind(B.I, A.Ctrl), z.unbind(B.U, A.Ctrl), z.unbind(B.L, A.CtrlShift), z.unbind(B.E, A.CtrlShift), z.unbind(B.R, A.CtrlShift), z.unbind(B.J, A.CtrlShift), z.unbind(B.C, A.CtrlAlt), z.unbind(B.Z, A.Ctrl), z.unbind(B.Z, A.CtrlShift), z.unbind(B.Ctrl, A.Ctrl), S.unbind(B.Ctrl, A.None));
            U.setDefault(null);
            U.unbind(B.Enter, A.None)
        };
        this.getInputMemberId = function () {
            return b
        };
        this.getSession = function () {
            return g
        };
        this.setUndoManager = function (a) {
            F && F.unsubscribe(gui.UndoManager.signalUndoStackChanged, c);
            if (F = a)F.setDocument(I),
                F.setPlaybackFunction(g.enqueue), F.subscribe(gui.UndoManager.signalUndoStackChanged, c)
        };
        this.getUndoManager = function () {
            return F
        };
        this.getAnnotationController = function () {
            return W
        };
        this.getDirectFormattingController = function () {
            return X
        };
        this.getHyperlinkController = function () {
            return ja
        };
        this.getImageController = function () {
            return ca
        };
        this.getSelectionController = function () {
            return L
        };
        this.getTextController = function () {
            return fa
        };
        this.getEventManager = function () {
            return E
        };
        this.getKeyboardHandlers = function () {
            return{keydown: z,
                keypress: U}
        };
        this.destroy = function (a) {
            var b = [];
            la && b.push(la.destroy);
            b = b.concat([V.destroy, ga.destroy, X.destroy, R.destroy, E.destroy, H]);
            runtime.clearTimeout(ia);
            J.destroyAll(b, a)
        };
        V = new core.ScheduledTask(f, 0);
        ga = new core.ScheduledTask(function () {
            var a = I.getCursor(b);
            if (a && a.getSelectionType() === ops.OdtCursor.RegionSelection && (a = Z.getImageElements(a.getSelectedRange())[0])) {
                N.select(a.parentNode);
                return
            }
            N.clearSelection()
        }, 0);
        z.bind(B.Left, A.None, D(L.moveCursorToLeft));
        z.bind(B.Right, A.None, D(L.moveCursorToRight));
        z.bind(B.Up, A.None, D(L.moveCursorUp));
        z.bind(B.Down, A.None, D(L.moveCursorDown));
        z.bind(B.Left, A.Shift, D(L.extendSelectionToLeft));
        z.bind(B.Right, A.Shift, D(L.extendSelectionToRight));
        z.bind(B.Up, A.Shift, D(L.extendSelectionUp));
        z.bind(B.Down, A.Shift, D(L.extendSelectionDown));
        z.bind(B.Home, A.None, D(L.moveCursorToLineStart));
        z.bind(B.End, A.None, D(L.moveCursorToLineEnd));
        z.bind(B.Home, A.Ctrl, D(L.moveCursorToDocumentStart));
        z.bind(B.End, A.Ctrl, D(L.moveCursorToDocumentEnd));
        z.bind(B.Home, A.Shift, D(L.extendSelectionToLineStart));
        z.bind(B.End, A.Shift, D(L.extendSelectionToLineEnd));
        z.bind(B.Up, A.CtrlShift, D(L.extendSelectionToParagraphStart));
        z.bind(B.Down, A.CtrlShift, D(L.extendSelectionToParagraphEnd));
        z.bind(B.Home, A.CtrlShift, D(L.extendSelectionToDocumentStart));
        z.bind(B.End, A.CtrlShift, D(L.extendSelectionToDocumentEnd));
        ka ? (z.bind(B.Left, A.Alt, D(L.moveCursorBeforeWord)), z.bind(B.Right, A.Alt, D(L.moveCursorPastWord)), z.bind(B.Left, A.Meta, D(L.moveCursorToLineStart)), z.bind(B.Right, A.Meta, D(L.moveCursorToLineEnd)), z.bind(B.Home,
            A.Meta, D(L.moveCursorToDocumentStart)), z.bind(B.End, A.Meta, D(L.moveCursorToDocumentEnd)), z.bind(B.Left, A.AltShift, D(L.extendSelectionBeforeWord)), z.bind(B.Right, A.AltShift, D(L.extendSelectionPastWord)), z.bind(B.Left, A.MetaShift, D(L.extendSelectionToLineStart)), z.bind(B.Right, A.MetaShift, D(L.extendSelectionToLineEnd)), z.bind(B.Up, A.AltShift, D(L.extendSelectionToParagraphStart)), z.bind(B.Down, A.AltShift, D(L.extendSelectionToParagraphEnd)), z.bind(B.Up, A.MetaShift, D(L.extendSelectionToDocumentStart)),
            z.bind(B.Down, A.MetaShift, D(L.extendSelectionToDocumentEnd)), z.bind(B.A, A.Meta, D(L.extendSelectionToEntireDocument))) : (z.bind(B.Left, A.Ctrl, D(L.moveCursorBeforeWord)), z.bind(B.Right, A.Ctrl, D(L.moveCursorPastWord)), z.bind(B.Left, A.CtrlShift, D(L.extendSelectionBeforeWord)), z.bind(B.Right, A.CtrlShift, D(L.extendSelectionPastWord)), z.bind(B.A, A.Ctrl, D(L.extendSelectionToEntireDocument)));
        ma && (la = new gui.IOSSafariSupport(E));
        E.subscribe("keydown", z.handleEvent);
        E.subscribe("keypress", U.handleEvent);
        E.subscribe("keyup",
            S.handleEvent);
        E.subscribe("copy", n);
        E.subscribe("mousedown", s);
        E.subscribe("mousemove", V.trigger);
        E.subscribe("mouseup", y);
        E.subscribe("contextmenu", t);
        E.subscribe("dragstart", v);
        E.subscribe("dragend", u);
        E.subscribe("click", ea.handleClick);
        I.subscribe(ops.OdtDocument.signalOperationEnd, ga.trigger);
        I.subscribe(ops.Document.signalCursorAdded, R.registerCursor);
        I.subscribe(ops.Document.signalCursorRemoved, R.removeCursor);
        I.subscribe(ops.OdtDocument.signalOperationEnd, e)
    };
    return gui.SessionController
})();
// Input 95
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.CaretManager = function (h) {
    function g(b) {
        return a.hasOwnProperty(b) ? a[b] : null
    }

    function b() {
        return Object.keys(a).map(function (b) {
            return a[b]
        })
    }

    function p(b) {
        var c = a[b];
        c && (c.destroy(function () {
        }), delete a[b])
    }

    function q(a) {
        a = a.getMemberId();
        a === h.getInputMemberId() && (a = g(a)) && a.refreshCursorBlinking()
    }

    function m() {
        var a = g(h.getInputMemberId());
        C = !1;
        a && a.ensureVisible()
    }

    function d() {
        var a = g(h.getInputMemberId());
        a && (a.handleUpdate(), C || (C = !0, s = runtime.setTimeout(m, 50)))
    }

    function n(a) {
        a.memberId ===
            h.getInputMemberId() && d()
    }

    function r() {
        var a = g(h.getInputMemberId());
        a && a.setFocus()
    }

    function k() {
        var a = g(h.getInputMemberId());
        a && a.removeFocus()
    }

    function e() {
        var a = g(h.getInputMemberId());
        a && a.show()
    }

    function c() {
        var a = g(h.getInputMemberId());
        a && a.hide()
    }

    var a = {}, l = new core.Async, f = runtime.getWindow(), s, C = !1;
    this.registerCursor = function (b, c, f) {
        var e = b.getMemberId();
        c = new gui.Caret(b, c, f);
        f = h.getEventManager();
        a[e] = c;
        e === h.getInputMemberId() ? (runtime.log("Starting to track input on new cursor of " +
            e), b.subscribe(ops.OdtCursor.signalCursorUpdated, d), c.setOverlayElement(f.getEventTrap())) : b.subscribe(ops.OdtCursor.signalCursorUpdated, c.handleUpdate);
        return c
    };
    this.getCaret = g;
    this.getCarets = b;
    this.destroy = function (d) {
        var g = h.getSession().getOdtDocument(), m = h.getEventManager(), u = b().map(function (a) {
            return a.destroy
        });
        runtime.clearTimeout(s);
        g.unsubscribe(ops.OdtDocument.signalParagraphChanged, n);
        g.unsubscribe(ops.Document.signalCursorMoved, q);
        g.unsubscribe(ops.Document.signalCursorRemoved, p);
        m.unsubscribe("focus",
            r);
        m.unsubscribe("blur", k);
        f.removeEventListener("focus", e, !1);
        f.removeEventListener("blur", c, !1);
        a = {};
        l.destroyAll(u, d)
    };
    (function () {
        var a = h.getSession().getOdtDocument(), b = h.getEventManager();
        a.subscribe(ops.OdtDocument.signalParagraphChanged, n);
        a.subscribe(ops.Document.signalCursorMoved, q);
        a.subscribe(ops.Document.signalCursorRemoved, p);
        b.subscribe("focus", r);
        b.subscribe("blur", k);
        f.addEventListener("focus", e, !1);
        f.addEventListener("blur", c, !1)
    })()
};
// Input 96
gui.EditInfoHandle = function (h) {
    var g = [], b, p = h.ownerDocument, q = p.documentElement.namespaceURI;
    this.setEdits = function (h) {
        g = h;
        var d, n, r, k;
        b.innerHTML = "";
        for (h = 0; h < g.length; h += 1)d = p.createElementNS(q, "div"), d.className = "editInfo", n = p.createElementNS(q, "span"), n.className = "editInfoColor", n.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", g[h].memberid), r = p.createElementNS(q, "span"), r.className = "editInfoAuthor", r.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", g[h].memberid),
            k = p.createElementNS(q, "span"), k.className = "editInfoTime", k.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", g[h].memberid), k.innerHTML = g[h].time, d.appendChild(n), d.appendChild(r), d.appendChild(k), b.appendChild(d)
    };
    this.show = function () {
        b.style.display = "block"
    };
    this.hide = function () {
        b.style.display = "none"
    };
    this.destroy = function (g) {
        h.removeChild(b);
        g()
    };
    b = p.createElementNS(q, "div");
    b.setAttribute("class", "editInfoHandle");
    b.style.display = "none";
    h.appendChild(b)
};
// Input 97
/*

 Copyright (C) 2012 KO GmbH <aditya.bhatt@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.EditInfo = function (h, g) {
    function b() {
        var b = [], d;
        for (d in q)q.hasOwnProperty(d) && b.push({memberid: d, time: q[d].time});
        b.sort(function (b, d) {
            return b.time - d.time
        });
        return b
    }

    var p, q = {};
    this.getNode = function () {
        return p
    };
    this.getOdtDocument = function () {
        return g
    };
    this.getEdits = function () {
        return q
    };
    this.getSortedEdits = function () {
        return b()
    };
    this.addEdit = function (b, d) {
        q[b] = {time: d}
    };
    this.clearEdits = function () {
        q = {}
    };
    this.destroy = function (b) {
        h.parentNode && h.removeChild(p);
        b()
    };
    p = g.getDOMDocument().createElementNS("urn:webodf:names:editinfo",
        "editinfo");
    h.insertBefore(p, h.firstChild)
};
// Input 98
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.EditInfoMarker = function (h, g) {
    function b(b, c) {
        return runtime.setTimeout(function () {
            d.style.opacity = b
        }, c)
    }

    var p = this, q, m, d, n, r, k;
    this.addEdit = function (e, c) {
        var a = Date.now() - c;
        h.addEdit(e, c);
        m.setEdits(h.getSortedEdits());
        d.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", e);
        runtime.clearTimeout(r);
        runtime.clearTimeout(k);
        1E4 > a ? (n = b(1, 0), r = b(0.5, 1E4 - a), k = b(0.2, 2E4 - a)) : 1E4 <= a && 2E4 > a ? (n = b(0.5, 0), k = b(0.2, 2E4 - a)) : n = b(0.2, 0)
    };
    this.getEdits = function () {
        return h.getEdits()
    };
    this.clearEdits =
        function () {
            h.clearEdits();
            m.setEdits([]);
            d.hasAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid") && d.removeAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid")
        };
    this.getEditInfo = function () {
        return h
    };
    this.show = function () {
        d.style.display = "block"
    };
    this.hide = function () {
        p.hideHandle();
        d.style.display = "none"
    };
    this.showHandle = function () {
        m.show()
    };
    this.hideHandle = function () {
        m.hide()
    };
    this.destroy = function (b) {
        runtime.clearTimeout(n);
        runtime.clearTimeout(r);
        runtime.clearTimeout(k);
        q.removeChild(d);
        m.destroy(function (c) {
            c ? b(c) : h.destroy(b)
        })
    };
    (function () {
        var b = h.getOdtDocument().getDOMDocument();
        d = b.createElementNS(b.documentElement.namespaceURI, "div");
        d.setAttribute("class", "editInfoMarker");
        d.onmouseover = function () {
            p.showHandle()
        };
        d.onmouseout = function () {
            p.hideHandle()
        };
        q = h.getNode();
        q.appendChild(d);
        m = new gui.EditInfoHandle(q);
        g || p.hide()
    })()
};
// Input 99
gui.ShadowCursor = function (h) {
    var g = h.getDOMDocument().createRange(), b = !0;
    this.removeFromDocument = function () {
    };
    this.getMemberId = function () {
        return gui.ShadowCursor.ShadowCursorMemberId
    };
    this.getSelectedRange = function () {
        return g
    };
    this.setSelectedRange = function (h, q) {
        g = h;
        b = !1 !== q
    };
    this.hasForwardSelection = function () {
        return b
    };
    this.getDocument = function () {
        return h
    };
    this.getSelectionType = function () {
        return ops.OdtCursor.RangeSelection
    };
    g.setStart(h.getRootNode(), 0)
};
gui.ShadowCursor.ShadowCursorMemberId = "";
(function () {
    return gui.ShadowCursor
})();
// Input 100
gui.SelectionView = function (h) {
};
gui.SelectionView.prototype.rerender = function () {
};
gui.SelectionView.prototype.show = function () {
};
gui.SelectionView.prototype.hide = function () {
};
gui.SelectionView.prototype.destroy = function (h) {
};
// Input 101
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.SelectionViewManager = function (h) {
    function g() {
        return Object.keys(b).map(function (g) {
            return b[g]
        })
    }

    var b = {};
    this.getSelectionView = function (g) {
        return b.hasOwnProperty(g) ? b[g] : null
    };
    this.getSelectionViews = g;
    this.removeSelectionView = function (g) {
        b.hasOwnProperty(g) && (b[g].destroy(function () {
        }), delete b[g])
    };
    this.hideSelectionView = function (g) {
        b.hasOwnProperty(g) && b[g].hide()
    };
    this.showSelectionView = function (g) {
        b.hasOwnProperty(g) && b[g].show()
    };
    this.rerenderSelectionViews = function () {
        Object.keys(b).forEach(function (g) {
            b[g].rerender()
        })
    };
    this.registerCursor = function (g, q) {
        var m = g.getMemberId(), d = new h(g);
        q ? d.show() : d.hide();
        return b[m] = d
    };
    this.destroy = function (b) {
        function h(d, g) {
            g ? b(g) : d < m.length ? m[d].destroy(function (b) {
                h(d + 1, b)
            }) : b()
        }

        var m = g();
        h(0, void 0)
    }
};
// Input 102
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.SessionViewOptions = function () {
    this.caretBlinksOnRangeSelect = this.caretAvatarsInitiallyVisible = this.editInfoMarkersInitiallyVisible = !0
};
(function () {
    gui.SessionView = function (h, g, b, p, q) {
        function m(a, b, c) {
            function d(b, c, f) {
                c = b + '[editinfo|memberid="' + a + '"]' + f + c;
                a:{
                    var e = l.firstChild;
                    for (b = b + '[editinfo|memberid="' + a + '"]' + f + "{"; e;) {
                        if (e.nodeType === Node.TEXT_NODE && 0 === e.data.indexOf(b)) {
                            b = e;
                            break a
                        }
                        e = e.nextSibling
                    }
                    b = null
                }
                b ? b.data = c : l.appendChild(document.createTextNode(c))
            }

            d("div.editInfoMarker", "{ background-color: " + c + "; }", "");
            d("span.editInfoColor", "{ background-color: " + c + "; }", "");
            d("span.editInfoAuthor", '{ content: "' + b + '"; }', ":before");
            d("dc|creator", "{ background-color: " + c + "; }", "");
            d(".selectionOverlay", "{ fill: " + c + "; stroke: " + c + ";}", "")
        }

        function d(a) {
            var b, c;
            for (c in s)s.hasOwnProperty(c) && (b = s[c], a ? b.show() : b.hide())
        }

        function n(a) {
            p.getCarets().forEach(function (b) {
                a ? b.showHandle() : b.hideHandle()
            })
        }

        function r(a) {
            var b = a.getMemberId();
            a = a.getProperties();
            m(b, a.fullName, a.color);
            g === b && m("", "", a.color)
        }

        function k(a) {
            var c = a.getMemberId(), d = b.getOdtDocument().getMember(c).getProperties();
            p.registerCursor(a, x, w);
            q.registerCursor(a,
                !0);
            if (a = p.getCaret(c))a.setAvatarImageUrl(d.imageUrl), a.setColor(d.color);
            runtime.log("+++ View here +++ eagerly created an Caret for '" + c + "'! +++")
        }

        function e(a) {
            a = a.getMemberId();
            var b = q.getSelectionView(g), c = q.getSelectionView(gui.ShadowCursor.ShadowCursorMemberId), d = p.getCaret(g);
            a === g ? (c.hide(), b && b.show(), d && d.show()) : a === gui.ShadowCursor.ShadowCursorMemberId && (c.show(), b && b.hide(), d && d.hide())
        }

        function c(a) {
            q.removeSelectionView(a)
        }

        function a(a) {
            var c = a.paragraphElement, d = a.memberId;
            a = a.timeStamp;
            var e, g = "", h = c.getElementsByTagNameNS(f, "editinfo").item(0);
            h ? (g = h.getAttributeNS(f, "id"), e = s[g]) : (g = Math.random().toString(), e = new ops.EditInfo(c, b.getOdtDocument()), e = new gui.EditInfoMarker(e, C), h = c.getElementsByTagNameNS(f, "editinfo").item(0), h.setAttributeNS(f, "id", g), s[g] = e);
            e.addEdit(d, new Date(a))
        }

        var l, f = "urn:webodf:names:editinfo", s = {}, C = void 0 !== h.editInfoMarkersInitiallyVisible ? Boolean(h.editInfoMarkersInitiallyVisible) : !0, x = void 0 !== h.caretAvatarsInitiallyVisible ? Boolean(h.caretAvatarsInitiallyVisible) :
            !0, w = void 0 !== h.caretBlinksOnRangeSelect ? Boolean(h.caretBlinksOnRangeSelect) : !0;
        this.showEditInfoMarkers = function () {
            C || (C = !0, d(C))
        };
        this.hideEditInfoMarkers = function () {
            C && (C = !1, d(C))
        };
        this.showCaretAvatars = function () {
            x || (x = !0, n(x))
        };
        this.hideCaretAvatars = function () {
            x && (x = !1, n(x))
        };
        this.getSession = function () {
            return b
        };
        this.getCaret = function (a) {
            return p.getCaret(a)
        };
        this.destroy = function (d) {
            var f = b.getOdtDocument(), g = Object.keys(s).map(function (a) {
                return s[a]
            });
            f.unsubscribe(ops.Document.signalMemberAdded,
                r);
            f.unsubscribe(ops.Document.signalMemberUpdated, r);
            f.unsubscribe(ops.Document.signalCursorAdded, k);
            f.unsubscribe(ops.Document.signalCursorRemoved, c);
            f.unsubscribe(ops.OdtDocument.signalParagraphChanged, a);
            f.unsubscribe(ops.Document.signalCursorMoved, e);
            f.unsubscribe(ops.OdtDocument.signalParagraphChanged, q.rerenderSelectionViews);
            f.unsubscribe(ops.OdtDocument.signalTableAdded, q.rerenderSelectionViews);
            f.unsubscribe(ops.OdtDocument.signalParagraphStyleModified, q.rerenderSelectionViews);
            l.parentNode.removeChild(l);
            (function M(a, b) {
                b ? d(b) : a < g.length ? g[a].destroy(function (b) {
                    M(a + 1, b)
                }) : d()
            })(0, void 0)
        };
        (function () {
            var d = b.getOdtDocument(), f = document.getElementsByTagName("head").item(0);
            d.subscribe(ops.Document.signalMemberAdded, r);
            d.subscribe(ops.Document.signalMemberUpdated, r);
            d.subscribe(ops.Document.signalCursorAdded, k);
            d.subscribe(ops.Document.signalCursorRemoved, c);
            d.subscribe(ops.OdtDocument.signalParagraphChanged, a);
            d.subscribe(ops.Document.signalCursorMoved, e);
            d.subscribe(ops.OdtDocument.signalParagraphChanged,
                q.rerenderSelectionViews);
            d.subscribe(ops.OdtDocument.signalTableAdded, q.rerenderSelectionViews);
            d.subscribe(ops.OdtDocument.signalParagraphStyleModified, q.rerenderSelectionViews);
            l = document.createElementNS(f.namespaceURI, "style");
            l.type = "text/css";
            l.media = "screen, print, handheld, projection";
            l.appendChild(document.createTextNode("@namespace editinfo url(urn:webodf:names:editinfo);"));
            l.appendChild(document.createTextNode("@namespace dc url(http://purl.org/dc/elements/1.1/);"));
            f.appendChild(l)
        })()
    }
})();
// Input 103
gui.SvgSelectionView = function (h) {
    function g() {
        var b = a.getRootNode();
        l !== b && (l = b, f = l.parentNode.parentNode.parentNode, f.appendChild(x), x.setAttribute("class", "selectionOverlay"), x.appendChild(w))
    }

    function b(b) {
        var c = u.getBoundingClientRect(f), d = a.getCanvas().getZoomLevel(), e = {};
        e.top = u.adaptRangeDifferenceToZoomLevel(b.top - c.top, d);
        e.left = u.adaptRangeDifferenceToZoomLevel(b.left - c.left, d);
        e.bottom = u.adaptRangeDifferenceToZoomLevel(b.bottom - c.top, d);
        e.right = u.adaptRangeDifferenceToZoomLevel(b.right -
            c.left, d);
        e.width = u.adaptRangeDifferenceToZoomLevel(b.width, d);
        e.height = u.adaptRangeDifferenceToZoomLevel(b.height, d);
        return e
    }

    function p(a) {
        a = a.getBoundingClientRect();
        return Boolean(a && 0 !== a.height)
    }

    function q(a) {
        var b = v.getTextElements(a, !0, !1), c = a.cloneRange(), d = a.cloneRange();
        a = a.cloneRange();
        if (!b.length)return null;
        var f;
        a:{
            f = 0;
            var e = b[f], g = c.startContainer === e ? c.startOffset : 0, h = g;
            c.setStart(e, g);
            for (c.setEnd(e, h); !p(c);) {
                if (e.nodeType === Node.ELEMENT_NODE && h < e.childNodes.length)h = e.childNodes.length;
                else if (e.nodeType === Node.TEXT_NODE && h < e.length)h += 1; else if (b[f])e = b[f], f += 1, g = h = 0; else {
                    f = !1;
                    break a
                }
                c.setStart(e, g);
                c.setEnd(e, h)
            }
            f = !0
        }
        if (!f)return null;
        a:{
            f = b.length - 1;
            e = b[f];
            h = g = d.endContainer === e ? d.endOffset : e.nodeType === Node.TEXT_NODE ? e.length : e.childNodes.length;
            d.setStart(e, g);
            for (d.setEnd(e, h); !p(d);) {
                if (e.nodeType === Node.ELEMENT_NODE && 0 < g)g = 0; else if (e.nodeType === Node.TEXT_NODE && 0 < g)g -= 1; else if (b[f])e = b[f], f -= 1, g = h = e.length || e.childNodes.length; else {
                    b = !1;
                    break a
                }
                d.setStart(e, g);
                d.setEnd(e,
                    h)
            }
            b = !0
        }
        if (!b)return null;
        a.setStart(c.startContainer, c.startOffset);
        a.setEnd(d.endContainer, d.endOffset);
        return{firstRange: c, lastRange: d, fillerRange: a}
    }

    function m(a, b) {
        var c = {};
        c.top = Math.min(a.top, b.top);
        c.left = Math.min(a.left, b.left);
        c.right = Math.max(a.right, b.right);
        c.bottom = Math.max(a.bottom, b.bottom);
        c.width = c.right - c.left;
        c.height = c.bottom - c.top;
        return c
    }

    function d(a, b) {
        b && 0 < b.width && 0 < b.height && (a = a ? m(a, b) : b);
        return a
    }

    function n(b) {
        function c(a) {
            y.setUnfilteredPosition(a, 0);
            return w.acceptNode(a) ===
                M && t.acceptPosition(y) === M ? M : O
        }

        function f(a) {
            var b = null;
            c(a) === M && (b = u.getBoundingClientRect(a));
            return b
        }

        var e = b.commonAncestorContainer, g = b.startContainer, h = b.endContainer, k = b.startOffset, l = b.endOffset, m, n, q = null, p, r = s.createRange(), t, w = new odf.OdfNodeFilter, x;
        if (g === e || h === e)return r = b.cloneRange(), q = r.getBoundingClientRect(), r.detach(), q;
        for (b = g; b.parentNode !== e;)b = b.parentNode;
        for (n = h; n.parentNode !== e;)n = n.parentNode;
        t = a.createRootFilter(g);
        for (e = b.nextSibling; e && e !== n;)p = f(e), q = d(q, p), e = e.nextSibling;
        if (v.isParagraph(b))q = d(q, u.getBoundingClientRect(b)); else if (b.nodeType === Node.TEXT_NODE)e = b, r.setStart(e, k), r.setEnd(e, e === n ? l : e.length), p = r.getBoundingClientRect(), q = d(q, p); else for (x = s.createTreeWalker(b, NodeFilter.SHOW_TEXT, c, !1), e = x.currentNode = g; e && e !== h;)r.setStart(e, k), r.setEnd(e, e.length), p = r.getBoundingClientRect(), q = d(q, p), m = e, k = 0, e = x.nextNode();
        m || (m = g);
        if (v.isParagraph(n))q = d(q, u.getBoundingClientRect(n)); else if (n.nodeType === Node.TEXT_NODE)e = n, r.setStart(e, e === b ? k : 0), r.setEnd(e, l),
            p = r.getBoundingClientRect(), q = d(q, p); else for (x = s.createTreeWalker(n, NodeFilter.SHOW_TEXT, c, !1), e = x.currentNode = h; e && e !== m;)if (r.setStart(e, 0), r.setEnd(e, l), p = r.getBoundingClientRect(), q = d(q, p), e = x.previousNode())l = e.length;
        return q
    }

    function r(a, b) {
        var c = a.getBoundingClientRect(), d = {width: 0};
        d.top = c.top;
        d.bottom = c.bottom;
        d.height = c.height;
        d.left = d.right = b ? c.right : c.left;
        return d
    }

    function k() {
        var a = h.getSelectedRange(), c;
        if (c = t && h.getSelectionType() === ops.OdtCursor.RangeSelection && !a.collapsed) {
            g();
            var a = q(a), d, f, e, k, l, p, s, u;
            if (a) {
                c = a.firstRange;
                d = a.lastRange;
                f = a.fillerRange;
                e = b(r(c, !1));
                l = b(r(d, !0));
                k = (k = n(f)) ? b(k) : m(e, l);
                p = k.left;
                k = e.left + Math.max(0, k.width - (e.left - k.left));
                s = Math.min(e.top, l.top);
                u = l.top + l.height;
                e = [
                    {x: e.left, y: s + e.height},
                    {x: e.left, y: s},
                    {x: k, y: s},
                    {x: k, y: u - l.height},
                    {x: l.right, y: u - l.height},
                    {x: l.right, y: u},
                    {x: p, y: u},
                    {x: p, y: s + e.height},
                    {x: e.left, y: s + e.height}
                ];
                l = "";
                for (p = 0; p < e.length; p += 1)l += e[p].x + "," + e[p].y + " ";
                w.setAttribute("points", l);
                c.detach();
                d.detach();
                f.detach()
            }
            c =
                Boolean(a)
        }
        x.style.display = c ? "block" : "none"
    }

    function e(a) {
        t && a === h && D.trigger()
    }

    function c(a) {
        f.removeChild(x);
        h.getDocument().unsubscribe(ops.Document.signalCursorMoved, e);
        a()
    }

    var a = h.getDocument(), l, f, s = a.getDOMDocument(), C = new core.Async, x = s.createElementNS("http://www.w3.org/2000/svg", "svg"), w = s.createElementNS("http://www.w3.org/2000/svg", "polygon"), v = new odf.OdfUtils, u = new core.DomUtils, t = !0, y = gui.SelectionMover.createPositionIterator(a.getRootNode()), M = NodeFilter.FILTER_ACCEPT, O = NodeFilter.FILTER_REJECT,
        D;
    this.rerender = function () {
        t && D.trigger()
    };
    this.show = function () {
        t = !0;
        D.trigger()
    };
    this.hide = function () {
        t = !1;
        D.trigger()
    };
    this.destroy = function (a) {
        C.destroyAll([D.destroy, c], a)
    };
    (function () {
        var a = h.getMemberId();
        D = new core.ScheduledTask(k, 0);
        g();
        x.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", a);
        h.getDocument().subscribe(ops.Document.signalCursorMoved, e)
    })()
};
// Input 104
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.UndoStateRules = function () {
    function h(b, g) {
        var d = b.length;
        this.previous = function () {
            for (d -= 1; 0 <= d; d -= 1)if (g(b[d]))return b[d];
            return null
        }
    }

    function g(b) {
        b = b.spec();
        var g;
        b.hasOwnProperty("position") && (g = b.position);
        return g
    }

    function b(b) {
        return b.isEdit
    }

    function p(b, h, d) {
        if (!d)return d = g(b) - g(h), 0 === d || 1 === Math.abs(d);
        b = g(b);
        h = g(h);
        d = g(d);
        return b - h === h - d
    }

    this.isEditOperation = b;
    this.isPartOfOperationSet = function (g, m) {
        var d = void 0 !== g.group, n;
        if (!g.isEdit || 0 === m.length)return!0;
        n = m[m.length - 1];
        if (d &&
            g.group === n.group)return!0;
        a:switch (g.spec().optype) {
            case "RemoveText":
            case "InsertText":
                n = !0;
                break a;
            default:
                n = !1
        }
        if (n && m.some(b)) {
            if (d) {
                var r;
                d = g.spec().optype;
                n = new h(m, b);
                var k = n.previous(), e = null, c, a;
                runtime.assert(Boolean(k), "No edit operations found in state");
                a = k.group;
                runtime.assert(void 0 !== a, "Operation has no group");
                for (c = 1; k && k.group === a;) {
                    if (d === k.spec().optype) {
                        r = k;
                        break
                    }
                    k = n.previous()
                }
                if (r) {
                    for (k = n.previous(); k;) {
                        if (k.group !== a) {
                            if (2 === c)break;
                            a = k.group;
                            c += 1
                        }
                        if (d === k.spec().optype) {
                            e =
                                k;
                            break
                        }
                        k = n.previous()
                    }
                    r = p(g, r, e)
                } else r = !1;
                return r
            }
            r = g.spec().optype;
            d = new h(m, b);
            n = d.previous();
            runtime.assert(Boolean(n), "No edit operations found in state");
            r = r === n.spec().optype ? p(g, n, d.previous()) : !1;
            return r
        }
        return!1
    }
};
// Input 105
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
gui.TrivialUndoManager = function (h) {
    function g(a) {
        0 < a.length && (u = !0, l(a), u = !1)
    }

    function b() {
        w.emit(gui.UndoManager.signalUndoStackChanged, {undoAvailable: r.hasUndoStates(), redoAvailable: r.hasRedoStates()})
    }

    function p() {
        s !== a && s !== C[C.length - 1] && C.push(s)
    }

    function q(a) {
        var b = a.previousSibling || a.nextSibling;
        a.parentNode.removeChild(a);
        e.normalizeTextNodes(b)
    }

    function m(a) {
        return Object.keys(a).map(function (b) {
            return a[b]
        })
    }

    function d(a) {
        function b(a) {
            var f = a.spec();
            if (e[f.memberid])switch (f.optype) {
                case "AddCursor":
                    c[f.memberid] ||
                    (c[f.memberid] = a, delete e[f.memberid], g -= 1);
                    break;
                case "MoveCursor":
                    d[f.memberid] || (d[f.memberid] = a)
            }
        }

        var c = {}, d = {}, e = {}, g, h = a.pop();
        f.getMemberIds().forEach(function (a) {
            e[a] = !0
        });
        for (g = Object.keys(e).length; h && 0 < g;)h.reverse(), h.forEach(b), h = a.pop();
        return m(c).concat(m(d))
    }

    function n() {
        var g = c = f.cloneDocumentElement();
        e.getElementsByTagNameNS(g, k, "cursor").forEach(q);
        e.getElementsByTagNameNS(g, k, "anchor").forEach(q);
        p();
        s = a = d([a].concat(C));
        C.length = 0;
        x.length = 0;
        b()
    }

    var r = this, k = "urn:webodf:names:cursor",
        e = new core.DomUtils, c, a = [], l, f, s = [], C = [], x = [], w = new core.EventNotifier([gui.UndoManager.signalUndoStackChanged, gui.UndoManager.signalUndoStateCreated, gui.UndoManager.signalUndoStateModified, gui.TrivialUndoManager.signalDocumentRootReplaced]), v = h || new gui.UndoStateRules, u = !1;
    this.subscribe = function (a, b) {
        w.subscribe(a, b)
    };
    this.unsubscribe = function (a, b) {
        w.unsubscribe(a, b)
    };
    this.hasUndoStates = function () {
        return 0 < C.length
    };
    this.hasRedoStates = function () {
        return 0 < x.length
    };
    this.setDocument = function (a) {
        f =
            a
    };
    this.purgeInitialState = function () {
        C.length = 0;
        x.length = 0;
        a.length = 0;
        s.length = 0;
        c = null;
        b()
    };
    this.setInitialState = n;
    this.initialize = function () {
        c || n()
    };
    this.setPlaybackFunction = function (a) {
        l = a
    };
    this.onOperationExecuted = function (c) {
        u || (v.isEditOperation(c) && (s === a || 0 < x.length) || !v.isPartOfOperationSet(c, s) ? (x.length = 0, p(), s = [c], C.push(s), w.emit(gui.UndoManager.signalUndoStateCreated, {operations: s}), b()) : (s.push(c), w.emit(gui.UndoManager.signalUndoStateModified, {operations: s})))
    };
    this.moveForward = function (a) {
        for (var c =
            0, d; a && x.length;)d = x.pop(), C.push(d), g(d), a -= 1, c += 1;
        c && (s = C[C.length - 1], b());
        return c
    };
    this.moveBackward = function (d) {
        for (var e = 0; d && C.length;)x.push(C.pop()), d -= 1, e += 1;
        e && (f.setDocumentElement(c.cloneNode(!0)), w.emit(gui.TrivialUndoManager.signalDocumentRootReplaced, {}), f.getMemberIds().forEach(function (a) {
            f.removeCursor(a)
        }), g(a), C.forEach(g), s = C[C.length - 1] || a, b());
        return e
    }
};
gui.TrivialUndoManager.signalDocumentRootReplaced = "documentRootReplaced";
(function () {
    return gui.TrivialUndoManager
})();
// Input 106
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OperationTransformMatrix = function () {
    function h(b) {
        b.position += b.length;
        b.length *= -1
    }

    function g(b) {
        var a = 0 > b.length;
        a && h(b);
        return a
    }

    function b(b, a) {
        function d(e) {
            b[e] === a && f.push(e)
        }

        var f = [];
        b && ["style:parent-style-name", "style:next-style-name"].forEach(d);
        return f
    }

    function p(b, a) {
        function d(f) {
            b[f] === a && delete b[f]
        }

        b && ["style:parent-style-name", "style:next-style-name"].forEach(d)
    }

    function q(b) {
        var a = {};
        Object.keys(b).forEach(function (d) {
            a[d] = "object" === typeof b[d] ? q(b[d]) : b[d]
        });
        return a
    }

    function m(b, a, d, f) {
        var e, g = !1, h = !1, k, m = [];
        f && f.attributes && (m = f.attributes.split(","));
        b && (d || 0 < m.length) && Object.keys(b).forEach(function (a) {
            var f = b[a], e;
            "object" !== typeof f && (d && (e = d[a]), void 0 !== e ? (delete b[a], h = !0, e === f && (delete d[a], g = !0)) : -1 !== m.indexOf(a) && (delete b[a], h = !0))
        });
        if (a && a.attributes && (d || 0 < m.length)) {
            k = a.attributes.split(",");
            for (f = 0; f < k.length; f += 1)if (e = k[f], d && void 0 !== d[e] || m && -1 !== m.indexOf(e))k.splice(f, 1), f -= 1, h = !0;
            0 < k.length ? a.attributes = k.join(",") : delete a.attributes
        }
        return{majorChanged: g,
            minorChanged: h}
    }

    function d(b) {
        for (var a in b)if (b.hasOwnProperty(a))return!0;
        return!1
    }

    function n(b) {
        for (var a in b)if (b.hasOwnProperty(a) && ("attributes" !== a || 0 < b.attributes.length))return!0;
        return!1
    }

    function r(b, a, e, f, g) {
        var h = b ? b[g] : null, k = a ? a[g] : null, q = e ? e[g] : null, p = f ? f[g] : null, r;
        r = m(h, k, q, p);
        h && !d(h) && delete b[g];
        k && !n(k) && delete a[g];
        q && !d(q) && delete e[g];
        p && !n(p) && delete f[g];
        return r
    }

    function k(b, a) {
        return{opSpecsA: [b], opSpecsB: [a]}
    }

    var e;
    e = {AddCursor: {AddCursor: k, AddMember: k, AddStyle: k, ApplyDirectStyling: k,
        InsertText: k, MoveCursor: k, RemoveCursor: k, RemoveMember: k, RemoveStyle: k, RemoveText: k, SetParagraphStyle: k, SplitParagraph: k, UpdateMember: k, UpdateMetadata: k, UpdateParagraphStyle: k}, AddMember: {AddStyle: k, InsertText: k, MoveCursor: k, RemoveCursor: k, RemoveStyle: k, RemoveText: k, SetParagraphStyle: k, SplitParagraph: k, UpdateMetadata: k, UpdateParagraphStyle: k}, AddStyle: {AddStyle: k, ApplyDirectStyling: k, InsertText: k, MoveCursor: k, RemoveCursor: k, RemoveMember: k, RemoveStyle: function (c, a) {
        var d, f = [c], e = [a];
        c.styleFamily ===
            a.styleFamily && (d = b(c.setProperties, a.styleName), 0 < d.length && (d = {optype: "UpdateParagraphStyle", memberid: a.memberid, timestamp: a.timestamp, styleName: c.styleName, removedProperties: {attributes: d.join(",")}}, e.unshift(d)), p(c.setProperties, a.styleName));
        return{opSpecsA: f, opSpecsB: e}
    }, RemoveText: k, SetParagraphStyle: k, SplitParagraph: k, UpdateMember: k, UpdateMetadata: k, UpdateParagraphStyle: k}, ApplyDirectStyling: {ApplyDirectStyling: function (b, a, e) {
        var f, g, h, k, m, n, p, t;
        k = [b];
        h = [a];
        if (!(b.position + b.length <= a.position ||
            b.position >= a.position + a.length)) {
            f = e ? b : a;
            g = e ? a : b;
            if (b.position !== a.position || b.length !== a.length)n = q(f), p = q(g);
            a = r(g.setProperties, null, f.setProperties, null, "style:text-properties");
            if (a.majorChanged || a.minorChanged)h = [], b = [], k = f.position + f.length, m = g.position + g.length, g.position < f.position ? a.minorChanged && (t = q(p), t.length = f.position - g.position, b.push(t), g.position = f.position, g.length = m - g.position) : f.position < g.position && a.majorChanged && (t = q(n), t.length = g.position - f.position, h.push(t), f.position =
                g.position, f.length = k - f.position), m > k ? a.minorChanged && (n = p, n.position = k, n.length = m - k, b.push(n), g.length = k - g.position) : k > m && a.majorChanged && (n.position = m, n.length = k - m, h.push(n), f.length = m - f.position), f.setProperties && d(f.setProperties) && h.push(f), g.setProperties && d(g.setProperties) && b.push(g), e ? (k = h, h = b) : k = b
        }
        return{opSpecsA: k, opSpecsB: h}
    }, InsertText: function (b, a) {
        a.position <= b.position ? b.position += a.text.length : a.position <= b.position + b.length && (b.length += a.text.length);
        return{opSpecsA: [b], opSpecsB: [a]}
    },
        MoveCursor: k, RemoveCursor: k, RemoveStyle: k, RemoveText: function (b, a) {
            var d = b.position + b.length, f = a.position + a.length, e = [b], g = [a];
            f <= b.position ? b.position -= a.length : a.position < d && (b.position < a.position ? b.length = f < d ? b.length - a.length : a.position - b.position : (b.position = a.position, f < d ? b.length = d - f : e = []));
            return{opSpecsA: e, opSpecsB: g}
        }, SetParagraphStyle: k, SplitParagraph: function (b, a) {
            a.position < b.position ? b.position += 1 : a.position < b.position + b.length && (b.length += 1);
            return{opSpecsA: [b], opSpecsB: [a]}
        }, UpdateMetadata: k,
        UpdateParagraphStyle: k}, InsertText: {InsertText: function (b, a, d) {
        b.position < a.position ? a.position += b.text.length : b.position > a.position ? b.position += a.text.length : d ? a.position += b.text.length : b.position += a.text.length;
        return{opSpecsA: [b], opSpecsB: [a]}
    }, MoveCursor: function (b, a) {
        var d = g(a);
        b.position < a.position ? a.position += b.text.length : b.position < a.position + a.length && (a.length += b.text.length);
        d && h(a);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, RemoveCursor: k, RemoveMember: k, RemoveStyle: k, RemoveText: function (b, a) {
        var d;
        d = a.position + a.length;
        var f = [b], e = [a];
        d <= b.position ? b.position -= a.length : b.position <= a.position ? a.position += b.text.length : (a.length = b.position - a.position, d = {optype: "RemoveText", memberid: a.memberid, timestamp: a.timestamp, position: b.position + b.text.length, length: d - b.position}, e.unshift(d), b.position = a.position);
        return{opSpecsA: f, opSpecsB: e}
    }, SplitParagraph: function (b, a, d) {
        if (b.position < a.position)a.position += b.text.length; else if (b.position > a.position)b.position += 1; else return d ? a.position += b.text.length :
            b.position += 1, null;
        return{opSpecsA: [b], opSpecsB: [a]}
    }, UpdateMember: k, UpdateMetadata: k, UpdateParagraphStyle: k}, MoveCursor: {MoveCursor: k, RemoveCursor: function (b, a) {
        return{opSpecsA: b.memberid === a.memberid ? [] : [b], opSpecsB: [a]}
    }, RemoveMember: k, RemoveStyle: k, RemoveText: function (b, a) {
        var d = g(b), f = b.position + b.length, e = a.position + a.length;
        e <= b.position ? b.position -= a.length : a.position < f && (b.position < a.position ? b.length = e < f ? b.length - a.length : a.position - b.position : (b.position = a.position, b.length = e < f ? f - e : 0));
        d && h(b);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, SetParagraphStyle: k, SplitParagraph: function (b, a) {
        var d = g(b);
        a.position < b.position ? b.position += 1 : a.position < b.position + b.length && (b.length += 1);
        d && h(b);
        return{opSpecsA: [b], opSpecsB: [a]}
    }, UpdateMember: k, UpdateMetadata: k, UpdateParagraphStyle: k}, RemoveCursor: {RemoveCursor: function (b, a) {
        var d = b.memberid === a.memberid;
        return{opSpecsA: d ? [] : [b], opSpecsB: d ? [] : [a]}
    }, RemoveMember: k, RemoveStyle: k, RemoveText: k, SetParagraphStyle: k, SplitParagraph: k, UpdateMember: k, UpdateMetadata: k,
        UpdateParagraphStyle: k}, RemoveMember: {RemoveStyle: k, RemoveText: k, SetParagraphStyle: k, SplitParagraph: k, UpdateMetadata: k, UpdateParagraphStyle: k}, RemoveStyle: {RemoveStyle: function (b, a) {
        var d = b.styleName === a.styleName && b.styleFamily === a.styleFamily;
        return{opSpecsA: d ? [] : [b], opSpecsB: d ? [] : [a]}
    }, RemoveText: k, SetParagraphStyle: function (b, a) {
        var d, f = [b], e = [a];
        "paragraph" === b.styleFamily && b.styleName === a.styleName && (d = {optype: "SetParagraphStyle", memberid: b.memberid, timestamp: b.timestamp, position: a.position,
            styleName: ""}, f.unshift(d), a.styleName = "");
        return{opSpecsA: f, opSpecsB: e}
    }, SplitParagraph: k, UpdateMember: k, UpdateMetadata: k, UpdateParagraphStyle: function (c, a) {
        var d, f = [c], e = [a];
        "paragraph" === c.styleFamily && (d = b(a.setProperties, c.styleName), 0 < d.length && (d = {optype: "UpdateParagraphStyle", memberid: c.memberid, timestamp: c.timestamp, styleName: a.styleName, removedProperties: {attributes: d.join(",")}}, f.unshift(d)), c.styleName === a.styleName ? e = [] : p(a.setProperties, c.styleName));
        return{opSpecsA: f, opSpecsB: e}
    }},
        RemoveText: {RemoveText: function (b, a) {
            var d = b.position + b.length, f = a.position + a.length, e = [b], g = [a];
            f <= b.position ? b.position -= a.length : d <= a.position ? a.position -= b.length : a.position < d && (b.position < a.position ? (b.length = f < d ? b.length - a.length : a.position - b.position, d < f ? (a.position = b.position, a.length = f - d) : g = []) : (d < f ? a.length -= b.length : a.position < b.position ? a.length = b.position - a.position : g = [], f < d ? (b.position = a.position, b.length = d - f) : e = []));
            return{opSpecsA: e, opSpecsB: g}
        }, SplitParagraph: function (b, a) {
            var d =
                b.position + b.length, f = [b], e = [a];
            a.position <= b.position ? b.position += 1 : a.position < d && (b.length = a.position - b.position, d = {optype: "RemoveText", memberid: b.memberid, timestamp: b.timestamp, position: a.position + 1, length: d - a.position}, f.unshift(d));
            b.position + b.length <= a.position ? a.position -= b.length : b.position < a.position && (a.position = b.position);
            return{opSpecsA: f, opSpecsB: e}
        }, UpdateMember: k, UpdateMetadata: k, UpdateParagraphStyle: k}, SetParagraphStyle: {UpdateMember: k, UpdateMetadata: k, UpdateParagraphStyle: k}, SplitParagraph: {SplitParagraph: function (b, a, d) {
            b.position < a.position ? a.position += 1 : b.position > a.position ? b.position += 1 : b.position === a.position && (d ? a.position += 1 : b.position += 1);
            return{opSpecsA: [b], opSpecsB: [a]}
        }, UpdateMember: k, UpdateMetadata: k, UpdateParagraphStyle: k}, UpdateMember: {UpdateMetadata: k, UpdateParagraphStyle: k}, UpdateMetadata: {UpdateMetadata: function (b, a, e) {
            var f, g = [b], h = [a];
            f = e ? b : a;
            b = e ? a : b;
            m(b.setProperties || null, b.removedProperties || null, f.setProperties || null, f.removedProperties || null);
            f.setProperties && d(f.setProperties) || f.removedProperties &&
                n(f.removedProperties) || (e ? g = [] : h = []);
            b.setProperties && d(b.setProperties) || b.removedProperties && n(b.removedProperties) || (e ? h = [] : g = []);
            return{opSpecsA: g, opSpecsB: h}
        }, UpdateParagraphStyle: k}, UpdateParagraphStyle: {UpdateParagraphStyle: function (b, a, e) {
            var f, g = [b], h = [a];
            b.styleName === a.styleName && (f = e ? b : a, b = e ? a : b, r(b.setProperties, b.removedProperties, f.setProperties, f.removedProperties, "style:paragraph-properties"), r(b.setProperties, b.removedProperties, f.setProperties, f.removedProperties, "style:text-properties"),
                m(b.setProperties || null, b.removedProperties || null, f.setProperties || null, f.removedProperties || null), f.setProperties && d(f.setProperties) || f.removedProperties && n(f.removedProperties) || (e ? g = [] : h = []), b.setProperties && d(b.setProperties) || b.removedProperties && n(b.removedProperties) || (e ? h = [] : g = []));
            return{opSpecsA: g, opSpecsB: h}
        }}};
    this.passUnchanged = k;
    this.extendTransformations = function (b) {
        Object.keys(b).forEach(function (a) {
            var d = b[a], f, g = e.hasOwnProperty(a);
            runtime.log((g ? "Extending" : "Adding") + " map for optypeA: " +
                a);
            g || (e[a] = {});
            f = e[a];
            Object.keys(d).forEach(function (b) {
                var c = f.hasOwnProperty(b);
                runtime.assert(a <= b, "Wrong order:" + a + ", " + b);
                runtime.log("  " + (c ? "Overwriting" : "Adding") + " entry for optypeB: " + b);
                f[b] = d[b]
            })
        })
    };
    this.transformOpspecVsOpspec = function (b, a) {
        var d = b.optype <= a.optype, f;
        runtime.log("Crosstransforming:");
        runtime.log(runtime.toJson(b));
        runtime.log(runtime.toJson(a));
        d || (f = b, b = a, a = f);
        (f = (f = e[b.optype]) && f[a.optype]) ? (f = f(b, a, !d), d || null === f || (f = {opSpecsA: f.opSpecsB, opSpecsB: f.opSpecsA})) :
            f = null;
        runtime.log("result:");
        f ? (runtime.log(runtime.toJson(f.opSpecsA)), runtime.log(runtime.toJson(f.opSpecsB))) : runtime.log("null");
        return f
    }
};
// Input 107
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.OperationTransformer = function () {
    function h(g) {
        var h = [];
        g.forEach(function (d) {
            h.push(b.create(d))
        });
        return h
    }

    function g(b, h) {
        for (var d, n, r = [], k = []; 0 < b.length && h;) {
            d = b.shift();
            d = p.transformOpspecVsOpspec(d, h);
            if (!d)return null;
            r = r.concat(d.opSpecsA);
            if (0 === d.opSpecsB.length) {
                r = r.concat(b);
                h = null;
                break
            }
            for (; 1 < d.opSpecsB.length;) {
                n = g(b, d.opSpecsB.shift());
                if (!n)return null;
                k = k.concat(n.opSpecsB);
                b = n.opSpecsA
            }
            h = d.opSpecsB.pop()
        }
        h && k.push(h);
        return{opSpecsA: r, opSpecsB: k}
    }

    var b, p = new ops.OperationTransformMatrix;
    this.setOperationFactory = function (g) {
        b = g
    };
    this.getOperationTransformMatrix = function () {
        return p
    };
    this.transform = function (b, m) {
        for (var d, n = []; 0 < m.length;) {
            d = g(b, m.shift());
            if (!d)return null;
            b = d.opSpecsA;
            n = n.concat(d.opSpecsB)
        }
        return{opsA: h(b), opsB: h(n)}
    }
};
// Input 108
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
 */
ops.Server = function () {
};
ops.Server.prototype.connect = function (h, g) {
};
ops.Server.prototype.networkStatus = function () {
};
ops.Server.prototype.login = function (h, g, b, p) {
};
ops.Server.prototype.joinSession = function (h, g, b, p) {
};
ops.Server.prototype.leaveSession = function (h, g, b, p) {
};
ops.Server.prototype.getGenesisUrl = function (h) {
};
// Input 109
var webodf_css = '@namespace draw url(urn:oasis:names:tc:opendocument:xmlns:drawing:1.0);\n@namespace fo url(urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0);\n@namespace office url(urn:oasis:names:tc:opendocument:xmlns:office:1.0);\n@namespace presentation url(urn:oasis:names:tc:opendocument:xmlns:presentation:1.0);\n@namespace style url(urn:oasis:names:tc:opendocument:xmlns:style:1.0);\n@namespace svg url(urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0);\n@namespace table url(urn:oasis:names:tc:opendocument:xmlns:table:1.0);\n@namespace text url(urn:oasis:names:tc:opendocument:xmlns:text:1.0);\n@namespace webodfhelper url(urn:webodf:names:helper);\n@namespace cursor url(urn:webodf:names:cursor);\n@namespace editinfo url(urn:webodf:names:editinfo);\n@namespace annotation url(urn:webodf:names:annotation);\n@namespace dc url(http://purl.org/dc/elements/1.1/);\n@namespace svgns url(http://www.w3.org/2000/svg);\n\noffice|document > *, office|document-content > * {\n  display: none;\n}\noffice|body, office|document {\n  display: inline-block;\n  position: relative;\n}\n\ntext|p, text|h {\n  display: block;\n  padding: 0;\n  margin: 0;\n  line-height: normal;\n  position: relative;\n  min-height: 1.3em; /* prevent empty paragraphs and headings from collapsing if they are empty */\n}\n*[webodfhelper|containsparagraphanchor] {\n  position: relative;\n}\ntext|s {\n    white-space: pre;\n}\ntext|tab {\n  display: inline;\n  white-space: pre;\n}\ntext|tracked-changes {\n  /*Consumers that do not support change tracking, should ignore changes.*/\n  display: none;\n}\noffice|binary-data {\n  display: none;\n}\noffice|text {\n  display: block;\n  text-align: left;\n  overflow: visible;\n  word-wrap: break-word;\n}\n\noffice|text::selection {\n  /** Let\'s not draw selection highlight that overflows into the office|text\n   * node when selecting content across several paragraphs\n   */\n  background: transparent;\n}\n\noffice|document *::selection {\n  background: transparent;\n}\noffice|document *::-moz-selection {\n  background: transparent;\n}\n\noffice|text * draw|text-box {\n/** only for text documents */\n    display: block;\n    border: 1px solid #d3d3d3;\n}\ndraw|frame {\n  /** make sure frames are above the main body. */\n  z-index: 1;\n}\noffice|spreadsheet {\n  display: block;\n  border-collapse: collapse;\n  empty-cells: show;\n  font-family: sans-serif;\n  font-size: 10pt;\n  text-align: left;\n  page-break-inside: avoid;\n  overflow: hidden;\n}\noffice|presentation {\n  display: inline-block;\n  text-align: left;\n}\n#shadowContent {\n  display: inline-block;\n  text-align: left;\n}\ndraw|page {\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\npresentation|notes, presentation|footer-decl, presentation|date-time-decl {\n    display: none;\n}\n@media print {\n  draw|page {\n    border: 1pt solid black;\n    page-break-inside: avoid;\n  }\n  presentation|notes {\n    /*TODO*/\n  }\n}\noffice|spreadsheet text|p {\n  border: 0px;\n  padding: 1px;\n  margin: 0px;\n}\noffice|spreadsheet table|table {\n  margin: 3px;\n}\noffice|spreadsheet table|table:after {\n  /* show sheet name the end of the sheet */\n  /*content: attr(table|name);*/ /* gives parsing error in opera */\n}\noffice|spreadsheet table|table-row {\n  counter-increment: row;\n}\noffice|spreadsheet table|table-row:before {\n  width: 3em;\n  background: #cccccc;\n  border: 1px solid black;\n  text-align: center;\n  content: counter(row);\n  display: table-cell;\n}\noffice|spreadsheet table|table-cell {\n  border: 1px solid #cccccc;\n}\ntable|table {\n  display: table;\n}\ndraw|frame table|table {\n  width: 100%;\n  height: 100%;\n  background: white;\n}\ntable|table-header-rows {\n  display: table-header-group;\n}\ntable|table-row {\n  display: table-row;\n}\ntable|table-column {\n  display: table-column;\n}\ntable|table-cell {\n  width: 0.889in;\n  display: table-cell;\n  word-break: break-all; /* prevent long words from extending out the table cell */\n}\ndraw|frame {\n  display: block;\n}\ndraw|image {\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  -moz-background-size: 100% 100%;\n}\n/* only show the first image in frame */\ndraw|frame > draw|image:nth-of-type(n+2) {\n  display: none;\n}\ntext|list:before {\n    display: none;\n    content:"";\n}\ntext|list {\n    counter-reset: list;\n}\ntext|list-item {\n    display: block;\n}\ntext|number {\n    display:none;\n}\n\ntext|a {\n    color: blue;\n    text-decoration: underline;\n    cursor: pointer;\n}\noffice|text[webodfhelper|links="inactive"] text|a {\n    cursor: text;\n}\ntext|note-citation {\n    vertical-align: super;\n    font-size: smaller;\n}\ntext|note-body {\n    display: none;\n}\ntext|note:hover text|note-citation {\n    background: #dddddd;\n}\ntext|note:hover text|note-body {\n    display: block;\n    left:1em;\n    max-width: 80%;\n    position: absolute;\n    background: #ffffaa;\n}\nsvg|title, svg|desc {\n    display: none;\n}\nvideo {\n    width: 100%;\n    height: 100%\n}\n\n/* below set up the cursor */\ncursor|cursor {\n    display: inline;\n    width: 0;\n    height: 1em;\n    /* making the position relative enables the avatar to use\n       the cursor as reference for its absolute position */\n    position: relative;\n    z-index: 1;\n    pointer-events: none;\n}\n\ncursor|cursor > .caret {\n    /* IMPORTANT: when changing these values ensure DEFAULT_CARET_TOP and DEFAULT_CARET_HEIGHT\n        in Caret.js remain in sync */\n    display: inline;\n    position: absolute;\n    top: 5%; /* push down the caret; 0px can do the job, 5% looks better, 10% is a bit over */\n    height: 1em;\n    border-left: 2px solid black;\n    outline: none;\n}\n\ncursor|cursor > .handle {\n    padding: 3px;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    border: none !important;\n    border-radius: 5px;\n    opacity: 0.3;\n}\n\ncursor|cursor > .handle > img {\n    border-radius: 5px;\n}\n\ncursor|cursor > .handle.active {\n    opacity: 0.8;\n}\n\ncursor|cursor > .handle:after {\n    content: \' \';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 43%;\n}\n\n/** Input Method Editor input pane & behaviours */\n/* not within a cursor */\n#eventTrap {\n    height: auto;\n    display: block;\n    position: absolute;\n    width: 1px;\n    outline: none;\n    opacity: 0;\n    color: rgba(255, 255, 255, 0); /* hide the blinking caret by setting the colour to fully transparent */\n    overflow: hidden; /* The overflow visibility is used to hide and show characters being entered */\n    pointer-events: none;\n}\n\n/* within a cursor */\ncursor|cursor > #composer {\n    text-decoration: underline;\n}\n\ncursor|cursor[cursor|composing="true"] > #composer {\n    display: inline-block;\n    height: auto;\n    width: auto;\n}\n\ncursor|cursor[cursor|composing="true"] {\n    display: inline-block;\n    width: auto;\n    height: inherit;\n}\n\ncursor|cursor[cursor|composing="true"] > .caret {\n    /* during composition, the caret should be pushed along by the composition text, inline with the text */\n    position: static;\n    /* as it is now part of an inline-block, it will no longer need correct to top or height values to align properly */\n    height: auto !important;\n    top: auto !important;\n}\n\neditinfo|editinfo {\n    /* Empty or invisible display:inline elements respond very badly to mouse selection.\n       Inline blocks are much more reliably selectable in Chrome & friends */\n    display: inline-block;\n}\n\n.editInfoMarker {\n    position: absolute;\n    width: 10px;\n    height: 100%;\n    left: -20px;\n    opacity: 0.8;\n    top: 0;\n    border-radius: 5px;\n    background-color: transparent;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n}\n.editInfoMarker:hover {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);\n}\n\n.editInfoHandle {\n    position: absolute;\n    background-color: black;\n    padding: 5px;\n    border-radius: 5px;\n    opacity: 0.8;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    bottom: 100%;\n    margin-bottom: 10px;\n    z-index: 3;\n    left: -25px;\n}\n.editInfoHandle:after {\n    content: \' \';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 5px;\n}\n.editInfo {\n    font-family: sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    color: white;\n    width: 100%;\n    height: 12pt;\n}\n.editInfoColor {\n    float: left;\n    width: 10pt;\n    height: 10pt;\n    border: 1px solid white;\n}\n.editInfoAuthor {\n    float: left;\n    margin-left: 5pt;\n    font-size: 10pt;\n    text-align: left;\n    height: 12pt;\n    line-height: 12pt;\n}\n.editInfoTime {\n    float: right;\n    margin-left: 30pt;\n    font-size: 8pt;\n    font-style: italic;\n    color: yellow;\n    height: 12pt;\n    line-height: 12pt;\n}\n\n.annotationWrapper {\n    display: inline;\n    position: relative;\n}\n\n.annotationRemoveButton:before {\n    content: \'\u00d7\';\n    color: white;\n    padding: 5px;\n    line-height: 1em;\n}\n\n.annotationRemoveButton {\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    background-color: black;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    z-index: 3;\n    text-align: center;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: none;\n    font-size: 15px;\n}\n.annotationRemoveButton:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);\n}\n\n.annotationNote {\n    width: 4cm;\n    position: absolute;\n    display: inline;\n    z-index: 10;\n}\n.annotationNote > office|annotation {\n    display: block;\n    text-align: left;\n}\n\n.annotationConnector {\n    position: absolute;\n    display: inline;\n    z-index: 2;\n    border-top: 1px dashed brown;\n}\n.annotationConnector.angular {\n    -moz-transform-origin: left top;\n    -webkit-transform-origin: left top;\n    -ms-transform-origin: left top;\n    transform-origin: left top;\n}\n.annotationConnector.horizontal {\n    left: 0;\n}\n.annotationConnector.horizontal:before {\n    content: \'\';\n    display: inline;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: brown transparent transparent transparent;\n    top: -1px;\n    left: -5px;\n}\n\noffice|annotation {\n    width: 100%;\n    height: 100%;\n    display: none;\n    background: rgb(198, 238, 184);\n    background: -moz-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -webkit-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -o-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -ms-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: linear-gradient(180deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    box-shadow: 0 3px 4px -3px #ccc;\n}\n\noffice|annotation > dc|creator {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    color: white;\n    background-color: brown;\n    padding: 4px;\n}\noffice|annotation > dc|date {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    border: 4px solid transparent;\n    color: black;\n}\noffice|annotation > text|list {\n    display: block;\n    padding: 5px;\n}\n\n/* This is very temporary CSS. This must go once\n * we start bundling webodf-default ODF styles for annotations.\n */\noffice|annotation text|p {\n    font-size: 10pt;\n    color: black;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    font-family: sans-serif;\n}\n\ndc|*::selection {\n    background: transparent;\n}\ndc|*::-moz-selection {\n    background: transparent;\n}\n\n#annotationsPane {\n    background-color: #EAEAEA;\n    width: 4cm;\n    height: 100%;\n    display: none;\n    position: absolute;\n    outline: 1px solid #ccc;\n}\n\n.annotationHighlight {\n    background-color: yellow;\n    position: relative;\n}\n\n.selectionOverlay {\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 15;\n}\n.selectionOverlay > polygon {\n    fill-opacity: 0.3;\n    stroke-opacity: 0.8;\n    stroke-width: 1;\n    fill-rule: evenodd;\n}\n\n#imageSelector {\n    display: none;\n    position: absolute;\n    border-style: solid;\n    border-color: black;\n}\n\n#imageSelector > div {\n    width: 5px;\n    height: 5px;\n    display: block;\n    position: absolute;\n    border: 1px solid black;\n    background-color: #ffffff;\n}\n\n#imageSelector > .topLeft {\n    top: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topRight {\n    top: -4px;\n    right: -4px;\n}\n\n#imageSelector > .bottomRight {\n    right: -4px;\n    bottom: -4px;\n}\n\n#imageSelector > .bottomLeft {\n    bottom: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topMiddle {\n    top: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .rightMiddle {\n    top: 50%;\n    right: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n\n#imageSelector > .bottomMiddle {\n    bottom: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .leftMiddle {\n    top: 50%;\n    left: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n';
