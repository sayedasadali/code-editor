(function () {
    function g(a) {
        throw a;
    }
    var aa = void 0,
        j = !0,
        k = null,
        l = !1;

    function ba(a) {
        return function () {
            return this[a]
        }
    }

    function o(a) {
        return function () {
            return a
        }
    }
    var s, ca = this;

    function da() {}

    function ea(a) {
        a.mb = function () {
            return a.ed ? a.ed : a.ed = new a
        }
    }

    function fa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function t(a) {
        return a !== aa
    }

    function ga(a) {
        var b = fa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function u(a) {
        return "string" == typeof a
    }

    function ha(a) {
        return "number" == typeof a
    }

    function ia(a) {
        var b = typeof a;
        return "object" == b && a != k || "function" == b
    }
    Math.floor(2147483648 * Math.random()).toString(36);

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ka(a, b, c) {
        a || g(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function v(a, b, c) {
        v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return v.apply(k, arguments)
    }

    function la(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Yd = b.prototype;
        a.prototype = new c
    };

    function ma(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        g(Error("Invalid JSON string: " + a))
    }

    function na() {
        this.gc = aa
    }

    function oa(a, b, c) {
        switch (typeof b) {
        case "string":
            pa(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? b : "null");
            break;
        case "boolean":
            c.push(b);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (b == k) {
                c.push("null");
                break
            }
            if ("array" == fa(b)) {
                var d = b.length;
                c.push("[");
                for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], oa(a, a.gc ? a.gc.call(b, String(f), e) : e, c), e = ",";
                c.push("]");
                break
            }
            c.push("{");
            d = "";
            for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d),
                pa(f, c), c.push(":"), oa(a, a.gc ? a.gc.call(b, f, e) : e, c), d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            g(Error("Unknown type: " + typeof b))
        }
    }
    var qa = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        ra = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function pa(a, b) {
        b.push('"', a.replace(ra, function (a) {
            if (a in qa) return qa[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return qa[a] = e + b.toString(16)
        }), '"')
    };

    function sa(a) {
        return "undefined" !== typeof JSON && t(JSON.parse) ? JSON.parse(a) : ma(a)
    }

    function w(a) {
        if ("undefined" !== typeof JSON && t(JSON.stringify)) a = JSON.stringify(a);
        else {
            var b = [];
            oa(new na, a, b);
            a = b.join("")
        }
        return a
    };

    function ta(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            55296 <= e && 56319 >= e && (e -= 55296, d++, y(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320));
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function z(a, b, c, d) {
        var e;
        d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
        e && g(Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + "."))
    }

    function A(a, b, c) {
        var d = "";
        switch (b) {
        case 1:
            d = c ? "first" : "First";
            break;
        case 2:
            d = c ? "second" : "Second";
            break;
        case 3:
            d = c ? "third" : "Third";
            break;
        case 4:
            d = c ? "fourth" : "Fourth";
            break;
        default:
            ua.assert(l, "errorPrefix_ called with argumentNumber > 4.  Need to update it?")
        }
        return a + " failed: " + (d + " argument ")
    }

    function B(a, b, c, d) {
        (!d || t(c)) && "function" != fa(c) && g(Error(A(a, b, d) + "must be a valid function."))
    }

    function va(a, b, c) {
        t(c) && (!ia(c) || c === k) && g(Error(A(a, b, j) + "must be a valid context object."))
    };

    function C(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function wa(a, b) {
        if (Object.prototype.hasOwnProperty.call(a, b)) return a[b]
    };
    var ua = {},
        xa = /[\[\].#$\/]/,
        ya = /[\[\].#$]/;

    function za(a) {
        return u(a) && 0 !== a.length && !xa.test(a)
    }

    function Aa(a, b, c) {
        (!c || t(b)) && Ba(A(a, 1, c), b)
    }

    function Ba(a, b, c, d) {
        c || (c = 0);
        d || (d = []);
        t(b) || g(Error(a + "contains undefined" + Ca(d)));
        "function" == fa(b) && g(Error(a + "contains a function" + Ca(d) + " with contents: " + b.toString()));
        Da(b) && g(Error(a + "contains " + b.toString() + Ca(d)));
        1E3 < c && g(new TypeError(a + "contains a cyclic object value (" + d.slice(0, 100).join(".") + "...)"));
        u(b) && (b.length > 10485760 / 3 && 10485760 < ta(b).length) && g(Error(a + "contains a string greater than 10485760 utf8 bytes" + Ca(d) + " ('" + b.substring(0, 50) + "...')"));
        if (ia(b))
            for (var e in b) C(b,
                e) && (".priority" !== e && (".value" !== e && ".sv" !== e && !za(e)) && g(Error(a + "contains an invalid key (" + e + ")" + Ca(d) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')), d.push(e), Ba(a, b[e], c + 1, d), d.pop())
    }

    function Ca(a) {
        return 0 == a.length ? "" : " in property '" + a.join(".") + "'"
    }

    function Ea(a, b) {
        ia(b) || g(Error(A(a, 1, l) + " must be an object containing the children to replace."));
        Aa(a, b, l)
    }

    function Fa(a, b, c, d) {
        if (!d || t(c)) c !== k && (!ha(c) && !u(c) && (!ia(c) || !C(c, ".sv"))) && g(Error(A(a, b, d) + "must be a valid firebase priority (a string, number, or null)."))
    }

    function Ga(a, b, c) {
        if (!c || t(b)) switch (b) {
        case "value":
        case "child_added":
        case "child_removed":
        case "child_changed":
        case "child_moved":
            break;
        default:
            g(Error(A(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".'))
        }
    }

    function Ha(a, b) {
        t(b) && !za(b) && g(Error(A(a, 2, j) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'))
    }

    function Ia(a, b) {
        (!u(b) || 0 === b.length || ya.test(b)) && g(Error(A(a, 1, l) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'))
    }

    function D(a, b) {
        ".info" === E(b) && g(Error(a + " failed: Can't modify data under /.info/"))
    };

    function F(a, b, c, d, e, f, h) {
        this.n = a;
        this.path = b;
        this.Ca = c;
        this.da = d;
        this.va = e;
        this.Aa = f;
        this.Ra = h;
        t(this.da) && (t(this.Aa) && t(this.Ca)) && g("Query: Can't combine startAt(), endAt(), and limit().")
    }
    F.prototype.Nc = function () {
        z("Query.ref", 0, 0, arguments.length);
        return new H(this.n, this.path)
    };
    F.prototype.ref = F.prototype.Nc;
    F.prototype.Xa = function (a, b) {
        z("Query.on", 2, 4, arguments.length);
        Ga("Query.on", a, l);
        B("Query.on", 2, b, l);
        var c = Ja("Query.on", arguments[2], arguments[3]);
        this.n.Mb(this, a, b, c.cancel, c.T);
        return b
    };
    F.prototype.on = F.prototype.Xa;
    F.prototype.ub = function (a, b, c) {
        z("Query.off", 0, 3, arguments.length);
        Ga("Query.off", a, j);
        B("Query.off", 2, b, j);
        va("Query.off", 3, c);
        this.n.fc(this, a, b, c)
    };
    F.prototype.off = F.prototype.ub;
    F.prototype.Ld = function (a, b) {
        function c(h) {
            f && (f = l, e.ub(a, c), b.call(d.T, h))
        }
        z("Query.once", 2, 4, arguments.length);
        Ga("Query.once", a, l);
        B("Query.once", 2, b, l);
        var d = Ja("Query.once", arguments[2], arguments[3]),
            e = this,
            f = j;
        this.Xa(a, c, function (b) {
            e.ub(a, c);
            d.cancel && d.cancel.call(d.T, b)
        })
    };
    F.prototype.once = F.prototype.Ld;
    F.prototype.Ed = function (a) {
        z("Query.limit", 1, 1, arguments.length);
        (!ha(a) || Math.floor(a) !== a || 0 >= a) && g("Query.limit: First argument must be a positive integer.");
        return new F(this.n, this.path, a, this.da, this.va, this.Aa, this.Ra)
    };
    F.prototype.limit = F.prototype.Ed;
    F.prototype.Ud = function (a, b) {
        z("Query.startAt", 0, 2, arguments.length);
        Fa("Query.startAt", 1, a, j);
        Ha("Query.startAt", b);
        t(a) || (b = a = k);
        return new F(this.n, this.path, this.Ca, a, b, this.Aa, this.Ra)
    };
    F.prototype.startAt = F.prototype.Ud;
    F.prototype.zd = function (a, b) {
        z("Query.endAt", 0, 2, arguments.length);
        Fa("Query.endAt", 1, a, j);
        Ha("Query.endAt", b);
        return new F(this.n, this.path, this.Ca, this.da, this.va, a, b)
    };
    F.prototype.endAt = F.prototype.zd;

    function Ka(a) {
        var b = {};
        t(a.da) && (b.sp = a.da);
        t(a.va) && (b.sn = a.va);
        t(a.Aa) && (b.ep = a.Aa);
        t(a.Ra) && (b.en = a.Ra);
        t(a.Ca) && (b.l = a.Ca);
        t(a.da) && (t(a.va) && a.da === k && a.va === k) && (b.vf = "l");
        return b
    }
    F.prototype.La = function () {
        var a = La(Ka(this));
        return "{}" === a ? "default" : a
    };

    function Ja(a, b, c) {
        var d = {};
        b && c ? (d.cancel = b, B(a, 3, d.cancel, j), d.T = c, va(a, 4, d.T)) : b && ("object" === typeof b && b !== k ? d.T = b : "function" === typeof b ? d.cancel = b : g(Error(A(a, 3, j) + "must either be a cancel callback or a context object.")));
        return d
    };

    function J(a) {
        if (a instanceof J) return a;
        if (1 == arguments.length) {
            this.m = a.split("/");
            for (var b = 0, c = 0; c < this.m.length; c++) 0 < this.m[c].length && (this.m[b] = this.m[c], b++);
            this.m.length = b;
            this.Z = 0
        } else this.m = arguments[0], this.Z = arguments[1]
    }

    function E(a) {
        return a.Z >= a.m.length ? k : a.m[a.Z]
    }

    function Ma(a) {
        var b = a.Z;
        b < a.m.length && b++;
        return new J(a.m, b)
    }
    s = J.prototype;
    s.toString = function () {
        for (var a = "", b = this.Z; b < this.m.length; b++) "" !== this.m[b] && (a += "/" + this.m[b]);
        return a || "/"
    };
    s.parent = function () {
        if (this.Z >= this.m.length) return k;
        for (var a = [], b = this.Z; b < this.m.length - 1; b++) a.push(this.m[b]);
        return new J(a, 0)
    };
    s.F = function (a) {
        for (var b = [], c = this.Z; c < this.m.length; c++) b.push(this.m[c]);
        if (a instanceof J)
            for (c = a.Z; c < a.m.length; c++) b.push(a.m[c]);
        else {
            a = a.split("/");
            for (c = 0; c < a.length; c++) 0 < a[c].length && b.push(a[c])
        }
        return new J(b, 0)
    };
    s.f = function () {
        return this.Z >= this.m.length
    };

    function Na(a, b) {
        var c = E(a);
        if (c === k) return b;
        if (c === E(b)) return Na(Ma(a), Ma(b));
        g("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")")
    }
    s.contains = function (a) {
        var b = 0;
        if (this.m.length > a.m.length) return l;
        for (; b < this.m.length;) {
            if (this.m[b] !== a.m[b]) return l;
            ++b
        }
        return j
    };

    function Oa() {
        this.children = {};
        this.sc = 0;
        this.value = k
    }

    function Pa(a, b, c) {
        this.Da = a ? a : "";
        this.Ab = b ? b : k;
        this.z = c ? c : new Oa
    }

    function K(a, b) {
        for (var c = b instanceof J ? b : new J(b), d = a, e;
            (e = E(c)) !== k;) d = new Pa(e, d, wa(d.z.children, e) || new Oa), c = Ma(c);
        return d
    }
    s = Pa.prototype;
    s.k = function () {
        return this.z.value
    };

    function Qa(a, b) {
        y("undefined" !== typeof b);
        a.z.value = b;
        Ra(a)
    }
    s.nb = function () {
        return 0 < this.z.sc
    };
    s.f = function () {
        return this.k() === k && !this.nb()
    };
    s.w = function (a) {
        for (var b in this.z.children) a(new Pa(b, this, this.z.children[b]))
    };

    function Sa(a, b, c, d) {
        c && !d && b(a);
        a.w(function (a) {
            Sa(a, b, j, d)
        });
        c && d && b(a)
    }

    function Ta(a, b, c) {
        for (a = c ? a : a.parent(); a !== k;) {
            if (b(a)) return j;
            a = a.parent()
        }
        return l
    }
    s.path = function () {
        return new J(this.Ab === k ? this.Da : this.Ab.path() + "/" + this.Da)
    };
    s.name = ba("Da");
    s.parent = ba("Ab");

    function Ra(a) {
        if (a.Ab !== k) {
            var b = a.Ab,
                c = a.Da,
                d = a.f(),
                e = C(b.z.children, c);
            d && e ? (delete b.z.children[c], b.z.sc--, Ra(b)) : !d && !e && (b.z.children[c] = a.z, b.z.sc++, Ra(b))
        }
    };

    function Ua(a, b) {
        this.Oa = a ? a : Va;
        this.ca = b ? b : Wa
    }

    function Va(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    s = Ua.prototype;
    s.oa = function (a, b) {
        return new Ua(this.Oa, this.ca.oa(a, b, this.Oa).copy(k, k, l, k, k))
    };
    s.remove = function (a) {
        return new Ua(this.Oa, this.ca.remove(a, this.Oa).copy(k, k, l, k, k))
    };
    s.get = function (a) {
        for (var b, c = this.ca; !c.f();) {
            b = this.Oa(a, c.key);
            if (0 === b) return c.value;
            0 > b ? c = c.left : 0 < b && (c = c.right)
        }
        return k
    };

    function Xa(a, b) {
        for (var c, d = a.ca, e = k; !d.f();) {
            c = a.Oa(b, d.key);
            if (0 === c) {
                if (d.left.f()) return e ? e.key : k;
                for (d = d.left; !d.right.f();) d = d.right;
                return d.key
            }
            0 > c ? d = d.left : 0 < c && (e = d, d = d.right)
        }
        g(Error("Attempted to find predecessor key for a nonexistent key.  What gives?"))
    }
    s.f = function () {
        return this.ca.f()
    };
    s.count = function () {
        return this.ca.count()
    };
    s.tb = function () {
        return this.ca.tb()
    };
    s.Va = function () {
        return this.ca.Va()
    };
    s.Ba = function (a) {
        return this.ca.Ba(a)
    };
    s.Ma = function (a) {
        return this.ca.Ma(a)
    };
    s.Ua = function (a) {
        return new Ya(this.ca, a)
    };

    function Ya(a, b) {
        this.md = b;
        for (this.Tb = []; !a.f();) this.Tb.push(a), a = a.left
    }

    function Za(a) {
        if (0 === a.Tb.length) return k;
        var b = a.Tb.pop(),
            c;
        c = a.md ? a.md(b.key, b.value) : {
            key: b.key,
            value: b.value
        };
        for (b = b.right; !b.f();) a.Tb.push(b), b = b.left;
        return c
    }

    function $a(a, b, c, d, e) {
        this.key = a;
        this.value = b;
        this.color = c != k ? c : j;
        this.left = d != k ? d : Wa;
        this.right = e != k ? e : Wa
    }
    s = $a.prototype;
    s.copy = function (a, b, c, d, e) {
        return new $a(a != k ? a : this.key, b != k ? b : this.value, c != k ? c : this.color, d != k ? d : this.left, e != k ? e : this.right)
    };
    s.count = function () {
        return this.left.count() + 1 + this.right.count()
    };
    s.f = o(l);
    s.Ba = function (a) {
        return this.left.Ba(a) || a(this.key, this.value) || this.right.Ba(a)
    };
    s.Ma = function (a) {
        return this.right.Ma(a) || a(this.key, this.value) || this.left.Ma(a)
    };

    function ab(a) {
        return a.left.f() ? a : ab(a.left)
    }
    s.tb = function () {
        return ab(this).key
    };
    s.Va = function () {
        return this.right.f() ? this.key : this.right.Va()
    };
    s.oa = function (a, b, c) {
        var d, e;
        e = this;
        d = c(a, e.key);
        e = 0 > d ? e.copy(k, k, k, e.left.oa(a, b, c), k) : 0 === d ? e.copy(k, b, k, k, k) : e.copy(k, k, k, k, e.right.oa(a, b, c));
        return db(e)
    };

    function eb(a) {
        if (a.left.f()) return Wa;
        !a.left.N() && !a.left.left.N() && (a = fb(a));
        a = a.copy(k, k, k, eb(a.left), k);
        return db(a)
    }
    s.remove = function (a, b) {
        var c, d;
        c = this;
        if (0 > b(a, c.key))!c.left.f() && (!c.left.N() && !c.left.left.N()) && (c = fb(c)), c = c.copy(k, k, k, c.left.remove(a, b), k);
        else {
            c.left.N() && (c = gb(c));
            !c.right.f() && (!c.right.N() && !c.right.left.N()) && (c = hb(c), c.left.left.N() && (c = gb(c), c = hb(c)));
            if (0 === b(a, c.key)) {
                if (c.right.f()) return Wa;
                d = ab(c.right);
                c = c.copy(d.key, d.value, k, k, eb(c.right))
            }
            c = c.copy(k, k, k, k, c.right.remove(a, b))
        }
        return db(c)
    };
    s.N = ba("color");

    function db(a) {
        a.right.N() && !a.left.N() && (a = ib(a));
        a.left.N() && a.left.left.N() && (a = gb(a));
        a.left.N() && a.right.N() && (a = hb(a));
        return a
    }

    function fb(a) {
        a = hb(a);
        a.right.left.N() && (a = a.copy(k, k, k, k, gb(a.right)), a = ib(a), a = hb(a));
        return a
    }

    function ib(a) {
        var b;
        b = a.copy(k, k, j, k, a.right.left);
        return a.right.copy(k, k, a.color, b, k)
    }

    function gb(a) {
        var b;
        b = a.copy(k, k, j, a.left.right, k);
        return a.left.copy(k, k, a.color, k, b)
    }

    function hb(a) {
        var b, c;
        b = a.left.copy(k, k, !a.left.color, k, k);
        c = a.right.copy(k, k, !a.right.color, k, k);
        return a.copy(k, k, !a.color, b, c)
    }

    function jb() {}
    s = jb.prototype;
    s.copy = function () {
        return this
    };
    s.oa = function (a, b) {
        return new $a(a, b, aa, aa, aa)
    };
    s.remove = function () {
        return this
    };
    s.count = o(0);
    s.f = o(j);
    s.Ba = o(l);
    s.Ma = o(l);
    s.tb = o(k);
    s.Va = o(k);
    s.N = o(l);
    var Wa = new jb;

    function kb(a) {
        this.Pb = a;
        this.bc = "firebase:"
    }
    kb.prototype.set = function (a, b) {
        b == k ? this.Pb.removeItem(this.bc + a) : this.Pb.setItem(this.bc + a, w(b))
    };
    kb.prototype.get = function (a) {
        a = this.Pb.getItem(this.bc + a);
        return a == k ? k : sa(a)
    };
    kb.prototype.remove = function (a) {
        this.Pb.removeItem(this.bc + a)
    };

    function lb() {
        this.ib = {}
    }
    lb.prototype.set = function (a, b) {
        b == k ? delete this.ib[a] : this.ib[a] = b
    };
    lb.prototype.get = function (a) {
        return C(this.ib, a) ? this.ib[a] : k
    };
    lb.prototype.remove = function (a) {
        delete this.ib[a]
    };

    function mb(a) {
        try {
            if ("undefined" !== typeof window && "undefined" !== typeof window[a]) {
                var b = window[a];
                b.setItem("firebase:sentinel", "cache");
                b.removeItem("firebase:sentinel");
                return new kb(b)
            }
        } catch (c) {}
        return new lb
    }
    var nb = mb("localStorage"),
        ob = mb("sessionStorage");

    function pb(a, b, c, d) {
        this.host = a.toLowerCase();
        this.domain = this.host.substr(this.host.indexOf(".") + 1);
        this.hc = b;
        this.Sb = c;
        this.fa = d || nb.get("host:" + a) || this.host
    }

    function qb(a, b) {
        b !== a.fa && (a.fa = b, "s-" === a.fa.substr(0, 2) && nb.set("host:" + a.host, a.fa))
    }
    pb.prototype.toString = function () {
        return (this.hc ? "https://" : "http://") + this.host
    };

    function rb() {};

    function sb() {
        this.B = [];
        this.rc = [];
        this.ud = [];
        this.Zb = [];
        this.Zb[0] = 128;
        for (var a = 1; 64 > a; ++a) this.Zb[a] = 0;
        this.reset()
    }
    la(sb, rb);
    sb.prototype.reset = function () {
        this.B[0] = 1732584193;
        this.B[1] = 4023233417;
        this.B[2] = 2562383102;
        this.B[3] = 271733878;
        this.B[4] = 3285377520;
        this.Vc = this.ob = 0
    };

    function tb(a, b) {
        var c;
        c || (c = 0);
        for (var d = a.ud, e = c; e < c + 64; e += 4) d[e / 4] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3];
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        c = a.B[0];
        for (var h = a.B[1], i = a.B[2], m = a.B[3], n = a.B[4], p, e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = m ^ h & (i ^ m), p = 1518500249) : (f = h ^ i ^ m, p = 1859775393) : 60 > e ? (f = h & i | m & (h | i), p = 2400959708) : (f = h ^ i ^ m, p = 3395469782), f = (c << 5 | c >>> 27) + f + n + p + d[e] & 4294967295, n = m, m = i, i = (h << 30 | h >>> 2) & 4294967295, h = c, c = f;
        a.B[0] = a.B[0] + c & 4294967295;
        a.B[1] = a.B[1] + h &
            4294967295;
        a.B[2] = a.B[2] + i & 4294967295;
        a.B[3] = a.B[3] + m & 4294967295;
        a.B[4] = a.B[4] + n & 4294967295
    }
    sb.prototype.update = function (a, b) {
        t(b) || (b = a.length);
        var c = this.rc,
            d = this.ob,
            e = 0;
        if (u(a))
            for (; e < b;) c[d++] = a.charCodeAt(e++), 64 == d && (tb(this, c), d = 0);
        else
            for (; e < b;) c[d++] = a[e++], 64 == d && (tb(this, c), d = 0);
        this.ob = d;
        this.Vc += b
    };
    var ub = Array.prototype,
        vb = ub.forEach ? function (a, b, c) {
            ub.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        wb = ub.map ? function (a, b, c) {
            return ub.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        },
        xb = ub.every ? function (a, b, c) {
            return ub.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f,
                    a)) return l;
            return j
        };
    var yb, zb, Ab, Bb;

    function Cb() {
        return ca.navigator ? ca.navigator.userAgent : k
    }
    Bb = Ab = zb = yb = l;
    var Db;
    if (Db = Cb()) {
        var Eb = ca.navigator;
        yb = 0 == Db.indexOf("Opera");
        zb = !yb && -1 != Db.indexOf("MSIE");
        Ab = !yb && -1 != Db.indexOf("WebKit");
        Bb = !yb && !Ab && "Gecko" == Eb.product
    }
    var Fb = zb,
        Gb = Bb,
        Hb = Ab;
    var Ib;
    if (yb && ca.opera) {
        var Jb = ca.opera.version;
        "function" == typeof Jb && Jb()
    } else Gb ? Ib = /rv\:([^\);]+)(\)|;)/ : Fb ? Ib = /MSIE\s+([^\);]+)(\)|;)/ : Hb && (Ib = /WebKit\/(\S+)/), Ib && Ib.exec(Cb());
    var Kb = k,
        Lb = k;

    function Mb(a, b) {
        ga(a) || g(Error("encodeByteArray takes an array as a parameter"));
        if (!Kb) {
            Kb = {};
            Lb = {};
            for (var c = 0; 65 > c; c++) Kb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Lb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
        }
        for (var c = b ? Lb : Kb, d = [], e = 0; e < a.length; e += 3) {
            var f = a[e],
                h = e + 1 < a.length,
                i = h ? a[e + 1] : 0,
                m = e + 2 < a.length,
                n = m ? a[e + 2] : 0,
                p = f >> 2,
                f = (f & 3) << 4 | i >> 4,
                i = (i & 15) << 2 | n >> 6,
                n = n & 63;
            m || (n = 64, h || (i = 64));
            d.push(c[p], c[f], c[i], c[n])
        }
        return d.join("")
    };
    var Nb, Ob = 1;
    Nb = function () {
        return Ob++
    };

    function y(a, b) {
        a || g(Error("Firebase INTERNAL ASSERT FAILED:" + b))
    }

    function Pb(a) {
        var b = ta(a),
            a = new sb;
        a.update(b);
        var b = [],
            c = 8 * a.Vc;
        56 > a.ob ? a.update(a.Zb, 56 - a.ob) : a.update(a.Zb, 64 - (a.ob - 56));
        for (var d = 63; 56 <= d; d--) a.rc[d] = c & 255, c /= 256;
        tb(a, a.rc);
        for (d = c = 0; 5 > d; d++)
            for (var e = 24; 0 <= e; e -= 8) b[c++] = a.B[d] >> e & 255;
        return Mb(b)
    }

    function Qb() {
        for (var a = "", b = 0; b < arguments.length; b++) a = ga(arguments[b]) ? a + Qb.apply(k, arguments[b]) : "object" === typeof arguments[b] ? a + w(arguments[b]) : a + arguments[b], a += " ";
        return a
    }
    var Rb = k,
        Sb = j;

    function L() {
        Sb === j && (Sb = l, Rb === k && ob.get("logging_enabled") === j && Tb(j));
        if (Rb) {
            var a = Qb.apply(k, arguments);
            Rb(a)
        }
    }

    function Ub(a) {
        return function () {
            L(a, arguments)
        }
    }

    function Vb() {
        if ("undefined" !== typeof console) {
            var a = "FIREBASE INTERNAL ERROR: " + Qb.apply(k, arguments);
            "undefined" !== typeof console.error ? console.error(a) : console.log(a)
        }
    }

    function Wb() {
        var a = Qb.apply(k, arguments);
        g(Error("FIREBASE FATAL ERROR: " + a))
    }

    function M() {
        if ("undefined" !== typeof console) {
            var a = "FIREBASE WARNING: " + Qb.apply(k, arguments);
            "undefined" !== typeof console.warn ? console.warn(a) : console.log(a)
        }
    }

    function Da(a) {
        return ha(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
    }

    function Xb(a, b) {
        return a !== b ? a === k ? -1 : b === k ? 1 : typeof a !== typeof b ? "number" === typeof a ? -1 : 1 : a > b ? 1 : -1 : 0
    }

    function Yb(a, b) {
        if (a === b) return 0;
        var c = Zb(a),
            d = Zb(b);
        return c !== k ? d !== k ? c - d : -1 : d !== k ? 1 : a < b ? -1 : 1
    }

    function $b(a, b) {
        if (b && a in b) return b[a];
        g(Error("Missing required key (" + a + ") in object: " + w(b)))
    }

    function La(a) {
        if ("object" !== typeof a || a === k) return w(a);
        var b = [],
            c;
        for (c in a) b.push(c);
        b.sort();
        c = "{";
        for (var d = 0; d < b.length; d++) 0 !== d && (c += ","), c += w(b[d]), c += ":", c += La(a[b[d]]);
        return c + "}"
    }

    function ac(a, b) {
        if (a.length <= b) return [a];
        for (var c = [], d = 0; d < a.length; d += b) d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
        return c
    }

    function bc(a, b) {
        if ("array" == fa(a))
            for (var c = 0; c < a.length; ++c) b(c, a[c]);
        else cc(a, b)
    }

    function dc(a) {
        y(!Da(a));
        var b, c, d, e;
        0 === a ? (d = c = 0, b = -Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
        e = [];
        for (a = 52; a; a -= 1) e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
        for (a = 11; a; a -= 1) e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
        e.push(b ? 1 : 0);
        e.reverse();
        b = e.join("");
        c = "";
        for (a = 0; 64 > a; a += 8) d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length && (d = "0" + d), c += d;
        return c.toLowerCase()
    }
    var ec = /^-?\d{1,10}$/;

    function Zb(a) {
        return ec.test(a) && (a = Number(a), -2147483648 <= a && 2147483647 >= a) ? a : k
    }

    function fc(a) {
        try {
            a()
        } catch (b) {
            setTimeout(function () {
                g(b)
            })
        }
    };

    function gc(a, b) {
        this.D = a;
        y(this.D !== k, "LeafNode shouldn't be created with null value.");
        this.Ya = "undefined" !== typeof b ? b : k
    }
    s = gc.prototype;
    s.M = o(j);
    s.j = ba("Ya");
    s.Ga = function (a) {
        return new gc(this.D, a)
    };
    s.L = function () {
        return N
    };
    s.Q = function (a) {
        return E(a) === k ? this : N
    };
    s.ea = o(k);
    s.H = function (a, b) {
        return (new O).H(a, b).Ga(this.Ya)
    };
    s.ya = function (a, b) {
        var c = E(a);
        return c === k ? b : this.H(c, N.ya(Ma(a), b))
    };
    s.f = o(l);
    s.Ub = o(0);
    s.V = function (a) {
        return a && this.j() !== k ? {
            ".value": this.k(),
            ".priority": this.j()
        } : this.k()
    };
    s.hash = function () {
        var a = "";
        this.j() !== k && (a += "priority:" + hc(this.j()) + ":");
        var b = typeof this.D,
            a = a + (b + ":"),
            a = "number" === b ? a + dc(this.D) : a + this.D;
        return Pb(a)
    };
    s.k = ba("D");
    s.toString = function () {
        return "string" === typeof this.D ? '"' + this.D + '"' : this.D
    };

    function ic(a, b) {
        return Xb(a.ia, b.ia) || Yb(a.name, b.name)
    }

    function jc(a, b) {
        return Yb(a.name, b.name)
    }

    function kc(a, b) {
        return Yb(a, b)
    };

    function O(a, b) {
        this.o = a || new Ua(kc);
        this.Ya = "undefined" !== typeof b ? b : k
    }
    s = O.prototype;
    s.M = o(l);
    s.j = ba("Ya");
    s.Ga = function (a) {
        return new O(this.o, a)
    };
    s.H = function (a, b) {
        var c = this.o.remove(a);
        b && b.f() && (b = k);
        b !== k && (c = c.oa(a, b));
        return b && b.j() !== k ? new lc(c, k, this.Ya) : new O(c, this.Ya)
    };
    s.ya = function (a, b) {
        var c = E(a);
        if (c === k) return b;
        var d = this.L(c).ya(Ma(a), b);
        return this.H(c, d)
    };
    s.f = function () {
        return this.o.f()
    };
    s.Ub = function () {
        return this.o.count()
    };
    var mc = /^\d+$/;
    s = O.prototype;
    s.V = function (a) {
        if (this.f()) return k;
        var b = {},
            c = 0,
            d = 0,
            e = j;
        this.w(function (f, h) {
            b[f] = h.V(a);
            c++;
            e && mc.test(f) ? d = Math.max(d, Number(f)) : e = l
        });
        if (!a && e && d < 2 * c) {
            var f = [],
                h;
            for (h in b) f[h] = b[h];
            return f
        }
        a && this.j() !== k && (b[".priority"] = this.j());
        return b
    };
    s.hash = function () {
        var a = "";
        this.j() !== k && (a += "priority:" + hc(this.j()) + ":");
        this.w(function (b, c) {
            var d = c.hash();
            "" !== d && (a += ":" + b + ":" + d)
        });
        return "" === a ? "" : Pb(a)
    };
    s.L = function (a) {
        a = this.o.get(a);
        return a === k ? N : a
    };
    s.Q = function (a) {
        var b = E(a);
        return b === k ? this : this.L(b).Q(Ma(a))
    };
    s.ea = function (a) {
        return Xa(this.o, a)
    };
    s.cd = function () {
        return this.o.tb()
    };
    s.dd = function () {
        return this.o.Va()
    };
    s.w = function (a) {
        return this.o.Ba(a)
    };
    s.yc = function (a) {
        return this.o.Ma(a)
    };
    s.Ua = function () {
        return this.o.Ua()
    };
    s.toString = function () {
        var a = "{",
            b = j;
        this.w(function (c, d) {
            b ? b = l : a += ", ";
            a += '"' + c + '" : ' + d.toString()
        });
        return a += "}"
    };
    var N = new O;

    function lc(a, b, c) {
        O.call(this, a, c);
        b === k && (b = new Ua(ic), a.Ba(function (a, c) {
            b = b.oa({
                name: a,
                ia: c.j()
            }, c)
        }));
        this.ua = b
    }
    la(lc, O);
    s = lc.prototype;
    s.H = function (a, b) {
        var c = this.L(a),
            d = this.o,
            e = this.ua;
        c !== k && (d = d.remove(a), e = e.remove({
            name: a,
            ia: c.j()
        }));
        b && b.f() && (b = k);
        b !== k && (d = d.oa(a, b), e = e.oa({
            name: a,
            ia: b.j()
        }, b));
        return new lc(d, e, this.j())
    };
    s.ea = function (a, b) {
        var c = Xa(this.ua, {
            name: a,
            ia: b.j()
        });
        return c ? c.name : k
    };
    s.w = function (a) {
        return this.ua.Ba(function (b, c) {
            return a(b.name, c)
        })
    };
    s.yc = function (a) {
        return this.ua.Ma(function (b, c) {
            return a(b.name, c)
        })
    };
    s.Ua = function () {
        return this.ua.Ua(function (a, b) {
            return {
                key: a.name,
                value: b
            }
        })
    };
    s.cd = function () {
        return this.ua.f() ? k : this.ua.tb().name
    };
    s.dd = function () {
        return this.ua.f() ? k : this.ua.Va().name
    };

    function Q(a, b) {
        if (a === k) return N;
        var c = k;
        "object" === typeof a && ".priority" in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
        y(c === k || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv" in c);
        "object" === typeof a && (".value" in a && a[".value"] !== k) && (a = a[".value"]);
        if ("object" !== typeof a || ".sv" in a) return new gc(a, c);
        if (a instanceof Array) {
            var d = N;
            cc(a, function (b, c) {
                if (C(a, c) && "." !== c.substring(0, 1)) {
                    var e = Q(b);
                    if (e.M() || !e.f()) d = d.H(c, e)
                }
            });
            return d.Ga(c)
        }
        var e = [],
            f = {},
            h = l;
        bc(a, function (b,
            c) {
            if ("string" !== typeof c || "." !== c.substring(0, 1)) {
                var d = Q(a[c]);
                d.f() || (h = h || d.j() !== k, e.push({
                    name: c,
                    ia: d.j()
                }), f[c] = d)
            }
        });
        var i = nc(e, f, l);
        if (h) {
            var m = nc(e, f, j);
            return new lc(i, m, c)
        }
        return new O(i, c)
    }
    var oc = Math.log(2);

    function qc(a) {
        this.count = parseInt(Math.log(a + 1) / oc);
        this.$c = this.count - 1;
        this.wd = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
    }

    function nc(a, b, c) {
        function d(d, f) {
            var h = n - d,
                p = n;
            n -= d;
            var q = a[h].name,
                h = new $a(c ? a[h] : q, b[q], f, k, e(h + 1, p));
            i ? i.left = h : m = h;
            i = h
        }

        function e(d, f) {
            var h = f - d;
            if (0 == h) return k;
            if (1 == h) {
                var h = a[d].name,
                    i = c ? a[d] : h;
                return new $a(i, b[h], l, k, k)
            }
            var i = parseInt(h / 2) + d,
                m = e(d, i),
                n = e(i + 1, f),
                h = a[i].name,
                i = c ? a[i] : h;
            return new $a(i, b[h], l, m, n)
        }
        var f = c ? ic : jc;
        a.sort(f);
        var h, f = new qc(a.length),
            i = k,
            m = k,
            n = a.length;
        for (h = 0; h < f.count; ++h) {
            var p = !(f.wd & 1 << f.$c);
            f.$c--;
            var q = Math.pow(2, f.count - (h + 1));
            p ? d(q, l) : (d(q, l), d(q, j))
        }
        h =
            m;
        f = c ? ic : kc;
        return h !== k ? new Ua(f, h) : new Ua(f)
    }

    function hc(a) {
        return "number" === typeof a ? "number:" + dc(a) : "string:" + a
    };

    function R(a, b) {
        this.z = a;
        this.ec = b
    }
    R.prototype.V = function () {
        z("Firebase.DataSnapshot.val", 0, 0, arguments.length);
        return this.z.V()
    };
    R.prototype.val = R.prototype.V;
    R.prototype.Ad = function () {
        z("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
        return this.z.V(j)
    };
    R.prototype.exportVal = R.prototype.Ad;
    R.prototype.F = function (a) {
        z("Firebase.DataSnapshot.child", 0, 1, arguments.length);
        ha(a) && (a = String(a));
        Ia("Firebase.DataSnapshot.child", a);
        var b = new J(a),
            c = this.ec.F(b);
        return new R(this.z.Q(b), c)
    };
    R.prototype.child = R.prototype.F;
    R.prototype.Cc = function (a) {
        z("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
        Ia("Firebase.DataSnapshot.hasChild", a);
        var b = new J(a);
        return !this.z.Q(b).f()
    };
    R.prototype.hasChild = R.prototype.Cc;
    R.prototype.j = function () {
        z("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
        return this.z.j()
    };
    R.prototype.getPriority = R.prototype.j;
    R.prototype.forEach = function (a) {
        z("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
        B("Firebase.DataSnapshot.forEach", 1, a, l);
        if (this.z.M()) return l;
        var b = this;
        return this.z.w(function (c, d) {
            return a(new R(d, b.ec.F(c)))
        })
    };
    R.prototype.forEach = R.prototype.forEach;
    R.prototype.nb = function () {
        z("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
        return this.z.M() ? l : !this.z.f()
    };
    R.prototype.hasChildren = R.prototype.nb;
    R.prototype.name = function () {
        z("Firebase.DataSnapshot.name", 0, 0, arguments.length);
        return this.ec.name()
    };
    R.prototype.name = R.prototype.name;
    R.prototype.Ub = function () {
        z("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
        return this.z.Ub()
    };
    R.prototype.numChildren = R.prototype.Ub;
    R.prototype.Nc = function () {
        z("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
        return this.ec
    };
    R.prototype.ref = R.prototype.Nc;

    function rc(a) {
        y("array" == fa(a) && 0 < a.length);
        this.vd = a;
        this.sb = {}
    }
    rc.prototype.Ac = function () {};
    rc.prototype.Xc = function (a) {
        for (var b = this.sb[a] || [], c = 0; c < b.length; c++) b[c].X.apply(b[c].T, Array.prototype.slice.call(arguments, 1))
    };
    rc.prototype.Xa = function (a, b, c) {
        sc(this, a);
        this.sb[a] = this.sb[a] || [];
        this.sb[a].push({
            X: b,
            T: c
        });
        (a = this.Ac(a)) && b.apply(c, a)
    };
    rc.prototype.ub = function (a, b, c) {
        sc(this, a);
        for (var a = this.sb[a] || [], d = 0; d < a.length; d++)
            if (a[d].X === b && (!c || c === a[d].T)) {
                a.splice(d, 1);
                break
            }
    };

    function sc(a, b) {
        var c = a.vd,
            d;
        a: {
            d = function (a) {
                return a === b
            };
            for (var e = c.length, f = u(c) ? c.split("") : c, h = 0; h < e; h++)
                if (h in f && d.call(aa, f[h])) {
                    d = h;
                    break a
                }
            d = -1
        }
        y(0 > d ? k : u(c) ? c.charAt(d) : c[d], "Unknown event: " + b)
    };

    function tc() {
        rc.call(this, ["visible"]);
        var a, b;
        "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
        this.gb = j;
        if (b) {
            var c = this;
            document.addEventListener(b,
                function () {
                    var b = !document[a];
                    if (b !== c.gb) {
                        c.gb = b;
                        c.Xc("visible", b)
                    }
                }, l)
        }
    }
    la(tc, rc);
    ea(tc);
    tc.prototype.Ac = function (a) {
        y("visible" === a);
        return [this.gb]
    };

    function uc(a) {
        this.Jc = a;
        this.ac = [];
        this.Qa = 0;
        this.tc = -1;
        this.Ka = k
    };

    function cc(a, b) {
        for (var c in a) b.call(aa, a[c], c, a)
    }

    function vc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };

    function wc() {
        this.jb = {}
    }

    function xc(a, b, c) {
        t(c) || (c = 1);
        C(a.jb, b) || (a.jb[b] = 0);
        a.jb[b] += c
    }
    wc.prototype.get = function () {
        return vc(this.jb)
    };

    function yc(a) {
        this.xd = a;
        this.Qb = k
    }
    yc.prototype.get = function () {
        var a = this.xd.get(),
            b = vc(a);
        if (this.Qb)
            for (var c in this.Qb) b[c] -= this.Qb[c];
        this.Qb = a;
        return b
    };

    function zc(a, b) {
        this.Sc = {};
        this.kc = new yc(a);
        this.u = b;
        setTimeout(v(this.kd, this), 10 + 6E4 * Math.random())
    }
    zc.prototype.kd = function () {
        var a = this.kc.get(),
            b = {},
            c = l,
            d;
        for (d in a) 0 < a[d] && C(this.Sc, d) && (b[d] = a[d], c = j);
        c && (a = this.u, a.P && (b = {
            c: b
        }, a.e("reportStats", b), a.Fa("s", b)));
        setTimeout(v(this.kd, this), 6E5 * Math.random())
    };
    var Ac = {},
        Bc = {};

    function Cc(a) {
        a = a.toString();
        Ac[a] || (Ac[a] = new wc);
        return Ac[a]
    };

    function Dc() {
        this.set = {}
    }
    s = Dc.prototype;
    s.add = function (a, b) {
        this.set[a] = b !== k ? b : j
    };
    s.contains = function (a) {
        return C(this.set, a)
    };
    s.get = function (a) {
        return this.contains(a) ? this.set[a] : aa
    };
    s.remove = function (a) {
        delete this.set[a]
    };
    s.f = function () {
        var a;
        a: {
            for (a in this.set) {
                a = l;
                break a
            }
            a = j
        }
        return a
    };
    s.count = function () {
        var a = 0,
            b;
        for (b in this.set) a++;
        return a
    };

    function Ec(a, b) {
        for (var c in a.set) C(a.set, c) && b(c, a.set[c])
    }
    s.keys = function () {
        var a = [],
            b;
        for (b in this.set) C(this.set, b) && a.push(b);
        return a
    };
    var Fc = "pLPCommand",
        Gc = "pRTLPCB";

    function Hc(a, b, c) {
        this.uc = a;
        this.e = Ub(a);
        this.Xd = b;
        this.$ = Cc(b);
        this.jc = c;
        this.kb = l;
        this.Lb = function (a) {
            b.host !== b.fa && (a.ns = b.Sb);
            var c = [],
                f;
            for (f in a) a.hasOwnProperty(f) && c.push(f + "=" + a[f]);
            return (b.hc ? "https://" : "http://") + b.fa + "/.lp?" + c.join("&")
        }
    }
    var Ic, Jc;
    Hc.prototype.open = function (a, b) {
        function c() {
            if (!d.Ja) {
                d.ka = new Kc(function (a, b, c, e, f) {
                    xc(d.$, "bytes_received", w(arguments).length);
                    if (d.ka)
                        if (d.ba && (clearTimeout(d.ba), d.ba = k), d.kb = j, "start" == a) d.id = b, d.jd = c;
                        else if ("close" === a)
                        if (b) {
                            d.ka.ic = l;
                            var h = d.fd;
                            h.tc = b;
                            h.Ka = function () {
                                d.Ea()
                            };
                            h.tc < h.Qa && (h.Ka(), h.Ka = k)
                        } else d.Ea();
                    else g(Error("Unrecognized command received: " + a))
                }, function (a, b) {
                    xc(d.$, "bytes_received", w(arguments).length);
                    var c = d.fd;
                    for (c.ac[a] = b; c.ac[c.Qa];) {
                        var e = c.ac[c.Qa];
                        delete c.ac[c.Qa];
                        for (var f = 0; f < e.length; ++f)
                            if (e[f]) {
                                var h = c;
                                fc(function () {
                                    h.Jc(e[f])
                                })
                            }
                        if (c.Qa === c.tc) {
                            c.Ka && (clearTimeout(c.Ka), c.Ka(), c.Ka = k);
                            break
                        }
                        c.Qa++
                    }
                }, function () {
                    d.Ea()
                }, d.Lb);
                var a = {
                    start: "t"
                };
                a.ser = Math.floor(1E8 * Math.random());
                d.ka.mc && (a.cb = d.ka.mc);
                a.v = "5";
                d.jc && (a.s = d.jc);
                a = d.Lb(a);
                d.e("Connecting via long-poll to " + a);
                Lc(d.ka, a, function () {})
            }
        }
        this.Zc = 0;
        this.R = b;
        this.fd = new uc(a);
        this.Ja = l;
        var d = this;
        this.ba = setTimeout(function () {
            d.e("Timed out trying to connect.");
            d.Ea();
            d.ba = k
        }, 3E4);
        if ("complete" ===
            document.readyState) c();
        else {
            var e = l,
                f = function () {
                    document.body ? e || (e = j, c()) : setTimeout(f, 10)
                };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", f, l), window.addEventListener("load", f, l)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
                "complete" === document.readyState && f()
            }, l), window.attachEvent("onload", f, l))
        }
    };
    Hc.prototype.start = function () {
        var a = this.ka,
            b = this.jd;
        a.Gd = this.id;
        a.Hd = b;
        for (a.pc = j; Mc(a););
        a = this.id;
        b = this.jd;
        this.Wa = document.createElement("iframe");
        var c = {
            dframe: "t"
        };
        c.id = a;
        c.pw = b;
        a = this.Lb(c);
        this.Wa.src = a;
        this.Wa.style.display = "none";
        document.body.appendChild(this.Wa)
    };
    Hc.isAvailable = function () {
        return !Jc && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.Wd) && (Ic || j)
    };
    Hc.prototype.Ib = function () {
        this.Ja = j;
        this.ka && (this.ka.close(), this.ka = k);
        this.Wa && (document.body.removeChild(this.Wa), this.Wa = k);
        this.ba && (clearTimeout(this.ba), this.ba = k)
    };
    Hc.prototype.Ea = function () {
        this.Ja || (this.e("Longpoll is closing itself"), this.Ib(), this.R && (this.R(this.kb), this.R = k))
    };
    Hc.prototype.close = function () {
        this.Ja || (this.e("Longpoll is being closed."), this.Ib())
    };
    Hc.prototype.send = function (a) {
        a = w(a);
        xc(this.$, "bytes_sent", a.length);
        for (var a = ta(a), a = Mb(a, j), a = ac(a, 1840), b = 0; b < a.length; b++) {
            var c = this.ka;
            c.Cb.push({
                Qd: this.Zc,
                Vd: a.length,
                ad: a[b]
            });
            c.pc && Mc(c);
            this.Zc++
        }
    };

    function Kc(a, b, c, d) {
        this.Lb = d;
        this.ha = c;
        this.Lc = new Dc;
        this.Cb = [];
        this.vc = Math.floor(1E8 * Math.random());
        this.ic = j;
        this.mc = Nb();
        window[Fc + this.mc] = a;
        window[Gc + this.mc] = b;
        a = document.createElement("iframe");
        a.style.display = "none";
        if (document.body) {
            document.body.appendChild(a);
            try {
                a.contentWindow.document || L("No IE domain setting required")
            } catch (e) {
                a.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
            }
        } else g("Document body has not initialized. Wait to initialize Firebase until after the document is ready.");
        a.contentDocument ? a.za = a.contentDocument : a.contentWindow ? a.za = a.contentWindow.document : a.document && (a.za = a.document);
        this.Y = a;
        a = "";
        this.Y.src && "javascript:" === this.Y.src.substr(0, 11) && (a = '<script>document.domain="' + document.domain + '";<\/script>');
        a = "<html><body>" + a + "</body></html>";
        try {
            this.Y.za.open(), this.Y.za.write(a), this.Y.za.close()
        } catch (f) {
            L("frame writing exception"), f.stack && L(f.stack), L(f)
        }
    }
    Kc.prototype.close = function () {
        this.pc = l;
        if (this.Y) {
            this.Y.za.body.innerHTML = "";
            var a = this;
            setTimeout(function () {
                a.Y !== k && (document.body.removeChild(a.Y), a.Y = k)
            }, 0)
        }
        var b = this.ha;
        b && (this.ha = k, b())
    };

    function Mc(a) {
        if (a.pc && a.ic && a.Lc.count() < (0 < a.Cb.length ? 2 : 1)) {
            a.vc++;
            var b = {};
            b.id = a.Gd;
            b.pw = a.Hd;
            b.ser = a.vc;
            for (var b = a.Lb(b), c = "", d = 0; 0 < a.Cb.length;)
                if (1870 >= a.Cb[0].ad.length + 30 + c.length) {
                    var e = a.Cb.shift(),
                        c = c + "&seg" + d + "=" + e.Qd + "&ts" + d + "=" + e.Vd + "&d" + d + "=" + e.ad;
                    d++
                } else break;
            var b = b + c,
                f = a.vc;
            a.Lc.add(f);
            var h = function () {
                    a.Lc.remove(f);
                    Mc(a)
                },
                i = setTimeout(h, 25E3);
            Lc(a, b, function () {
                clearTimeout(i);
                h()
            });
            return j
        }
        return l
    }

    function Lc(a, b, c) {
        setTimeout(function () {
            try {
                if (a.ic) {
                    var d = a.Y.za.createElement("script");
                    d.type = "text/javascript";
                    d.async = j;
                    d.src = b;
                    d.onload = d.onreadystatechange = function () {
                        var a = d.readyState;
                        if (!a || "loaded" === a || "complete" === a) d.onload = d.onreadystatechange = k, d.parentNode && d.parentNode.removeChild(d), c()
                    };
                    d.onerror = function () {
                        L("Long-poll script failed to load: " + b);
                        a.ic = l;
                        a.close()
                    };
                    a.Y.za.body.appendChild(d)
                }
            } catch (e) {}
        }, 1)
    };
    var Nc = k;
    "undefined" !== typeof MozWebSocket ? Nc = MozWebSocket : "undefined" !== typeof WebSocket && (Nc = WebSocket);

    function S(a, b, c) {
        this.uc = a;
        this.e = Ub(this.uc);
        this.frames = this.qb = k;
        this.Uc = 0;
        this.$ = Cc(b);
        this.Pa = (b.hc ? "wss://" : "ws://") + b.fa + "/.ws?v=5";
        b.host !== b.fa && (this.Pa = this.Pa + "&ns=" + b.Sb);
        c && (this.Pa = this.Pa + "&s=" + c)
    }
    var Oc;
    S.prototype.open = function (a, b) {
        this.ha = b;
        this.Id = a;
        this.e("Websocket connecting to " + this.Pa);
        this.W = new Nc(this.Pa);
        this.kb = l;
        nb.set("previous_websocket_failure", j);
        var c = this;
        this.ba = setTimeout(function () {
            c.e("Websocket timed out trying to connect.");
            Pc(c);
            c.Ea()
        }, 3E4);
        this.W.onopen = function () {
            c.e("Websocket connected.");
            c.kb = j;
            Pc(c);
            nb.remove("previous_websocket_failure")
        };
        this.W.onclose = function () {
            c.e("Websocket connection was disconnected.");
            c.W = k;
            c.Ea()
        };
        this.W.onmessage = function (a) {
            if (c.W !==
                k)
                if (a = a.data, xc(c.$, "bytes_received", a.length), Qc(c), c.frames !== k) Rc(c, a);
                else {
                    a: {
                        y(c.frames === k, "We already have a frame buffer");
                        if (6 >= a.length) {
                            var b = Number(a);
                            if (!isNaN(b)) {
                                c.Uc = b;
                                c.frames = [];
                                a = k;
                                break a
                            }
                        }
                        c.Uc = 1;
                        c.frames = []
                    }
                    a !== k && Rc(c, a)
                }
        };
        this.W.onerror = function (a) {
            c.e("WebSocket error.  Closing connection.");
            a.data && c.e(a.data);
            c.Ea()
        }
    };
    S.prototype.start = function () {};
    S.isAvailable = function () {
        var a = l;
        if ("undefined" !== typeof navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
            b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = j)
        }
        return !a && Nc !== k && !Oc
    };

    function Rc(a, b) {
        a.frames.push(b);
        if (a.frames.length == a.Uc) {
            var c = a.frames.join("");
            a.frames = k;
            c = sa(c);
            a.Id(c)
        }
    }
    S.prototype.send = function (a) {
        Qc(this);
        a = w(a);
        xc(this.$, "bytes_sent", a.length);
        a = ac(a, 16384);
        1 < a.length && this.W.send(String(a.length));
        for (var b = 0; b < a.length; b++) this.W.send(a[b])
    };
    S.prototype.Ib = function () {
        this.Ja = j;
        Pc(this);
        this.qb && (clearInterval(this.qb), this.qb = k);
        this.W && (this.W.close(), this.W = k)
    };
    S.prototype.Ea = function () {
        this.Ja || (this.e("WebSocket is closing itself"), this.Ib(), this.ha && (this.ha(this.kb), this.ha = k))
    };
    S.prototype.close = function () {
        this.Ja || (this.e("WebSocket is being closed"), this.Ib())
    };

    function Qc(a) {
        clearInterval(a.qb);
        a.qb = setInterval(function () {
            a.W && a.W.send("0");
            Qc(a)
        }, 45E3)
    }

    function Pc(a) {
        a.ba && (clearTimeout(a.ba), a.ba = k)
    };

    function Sc() {
        var a = [];
        S && S.isAvailable() && !nb.get("previous_websocket_failure") ? a.push(S) : bc(Tc, function (b, c) {
            c && c.isAvailable() && a.push(c)
        });
        this.lc = a
    }
    var Tc = [Hc, {
            isAvailable: o(l)
        },
        S
    ];

    function Uc(a, b, c, d, e, f) {
        this.id = a;
        this.e = Ub("c:" + this.id + ":");
        this.Jc = c;
        this.xb = d;
        this.R = e;
        this.Ic = f;
        this.J = b;
        this.$b = [];
        this.Yc = 0;
        this.Wc = new Sc;
        this.wa = 0;
        this.e("Connection created");
        Vc(this)
    }

    function Vc(a) {
        var b;
        var c = a.Wc;
        0 < c.lc.length ? b = c.lc[0] : g(Error("No transports available"));
        a.K = new b("c:" + a.id + ":" + a.Yc++, a.J);
        var d = Wc(a, a.K),
            e = Xc(a, a.K);
        a.Jb = a.K;
        a.Hb = a.K;
        a.A = k;
        setTimeout(function () {
            a.K && a.K.open(d, e)
        }, 0)
    }

    function Xc(a, b) {
        return function (c) {
            b === a.K ? (a.K = k, !c && 0 === a.wa ? (a.e("Realtime connection failed."), "s-" === a.J.fa.substr(0, 2) && (nb.remove("host:" + a.J.host), a.J.fa = a.J.host)) : 1 === a.wa && a.e("Realtime connection lost."), a.close()) : b === a.A ? (c = a.A, a.A = k, (a.Jb === c || a.Hb === c) && a.close()) : a.e("closing an old connection")
        }
    }

    function Wc(a, b) {
        return function (c) {
            if (2 != a.wa)
                if (b === a.Hb) {
                    var d = $b("t", c),
                        c = $b("d", c);
                    if ("c" == d) {
                        if (d = $b("t", c), "d" in c)
                            if (c = c.d, "h" === d) {
                                var d = c.ts,
                                    e = c.v,
                                    f = c.h;
                                a.jc = c.s;
                                qb(a.J, f);
                                if (0 == a.wa && (a.K.start(), c = a.K, a.e("Realtime connection established."), a.K = c, a.wa = 1, a.xb && (a.xb(d), a.xb = k), "5" !== e && M("Protocol version mismatch detected"), c = 1 < a.Wc.lc.length ? a.Wc.lc[1] : k)) a.A = new c("c:" + a.id + ":" + a.Yc++, a.J, a.jc), a.A.open(Wc(a, a.A), Xc(a, a.A))
                            } else if ("n" === d) {
                            a.e("recvd end transmission on primary");
                            a.Hb =
                                a.A;
                            for (c = 0; c < a.$b.length; ++c) a.Xb(a.$b[c]);
                            a.$b = [];
                            Yc(a)
                        } else "s" === d ? (a.e("Connection shutdown command received. Shutting down..."), a.Ic && (a.Ic(c), a.Ic = k), a.R = k, a.close()) : "r" === d ? (a.e("Reset packet received.  New host: " + c), qb(a.J, c), 1 === a.wa ? a.close() : ($c(a), Vc(a))) : "e" === d ? Vb("Server Error: " + c) : Vb("Unknown control packet command: " + d)
                    } else "d" == d && a.Xb(c)
                } else b === a.A ? (d = $b("t", c), c = $b("d", c), "c" == d ? "t" in c && (c = c.t, "a" === c ? (a.A.start(), a.e("sending client ack on secondary"), a.A.send({
                    t: "c",
                    d: {
                        t: "a",
                        d: {}
                    }
                }), a.e("Ending transmission on primary"), a.K.send({
                    t: "c",
                    d: {
                        t: "n",
                        d: {}
                    }
                }), a.Jb = a.A, Yc(a)) : "r" === c && (a.e("Got a reset on secondary, closing it"), a.A.close(), (a.Jb === a.A || a.Hb === a.A) && a.close())) : "d" == d ? a.$b.push(c) : g(Error("Unknown protocol layer: " + d))) : a.e("message on old connection")
        }
    }
    Uc.prototype.od = function (a) {
        a = {
            t: "d",
            d: a
        };
        1 !== this.wa && g("Connection is not connected");
        this.Jb.send(a)
    };

    function Yc(a) {
        a.Jb === a.A && a.Hb === a.A && (a.e("cleaning up and promoting a connection: " + a.A.uc), a.K = a.A, a.A = k)
    }
    Uc.prototype.Xb = function (a) {
        this.Jc(a)
    };
    Uc.prototype.close = function () {
        2 !== this.wa && (this.e("Closing realtime connection."), this.wa = 2, $c(this), this.R && (this.R(), this.R = k))
    };

    function $c(a) {
        a.e("Shutting down all connections");
        a.K && (a.K.close(), a.K = k);
        a.A && (a.A.close(), a.A = k)
    };

    function ad() {
        rc.call(this, ["online"]);
        this.yb = j;
        if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener) {
            var a = this;
            window.addEventListener("online", function () {
                a.yb || a.Xc("online", j);
                a.yb = j
            }, l);
            window.addEventListener("offline", function () {
                a.yb && a.Xc("online", l);
                a.yb = l
            }, l)
        }
    }
    la(ad, rc);
    ea(ad);
    ad.prototype.Ac = function (a) {
        y("online" === a);
        return [this.yb]
    };

    function bd(a, b, c, d, e, f) {
        this.id = cd++;
        this.e = Ub("p:" + this.id + ":");
        this.Na = j;
        this.ga = {};
        this.U = [];
        this.zb = 0;
        this.wb = [];
        this.P = l;
        this.qa = 1E3;
        this.Rb = 3E5;
        this.Yb = b || da;
        this.Wb = c || da;
        this.vb = d || da;
        this.Kc = e || da;
        this.Bc = f || da;
        this.J = a;
        this.Oc = k;
        this.Gb = {};
        this.Pd = 0;
        this.rb = this.Fc = k;
        dd(this, 0);
        tc.mb().Xa("visible", this.Kd, this); - 1 === a.host.indexOf("fblocal") && ad.mb().Xa("online", this.Jd, this)
    }
    var cd = 0,
        ed = 0;
    s = bd.prototype;
    s.Fa = function (a, b, c) {
        var d = ++this.Pd,
            a = {
                r: d,
                a: a,
                b: b
            };
        this.e(w(a));
        y(this.P, "sendRequest_ call when we're not connected not allowed.");
        this.ja.od(a);
        c && (this.Gb[d] = c)
    };

    function fd(a, b, c, d, e) {
        a.e("Listen on " + b + " for " + c);
        var f = {
                p: b
            },
            d = wb(d, function (a) {
                return Ka(a)
            });
        "{}" !== c && (f.q = d);
        f.h = a.Bc(b);
        a.Fa("l", f, function (d) {
            a.e("listen response", d);
            d = d.s;
            "ok" !== d && gd(a, b, c);
            e && e(d)
        })
    }
    s.hb = function (a, b, c) {
        this.Ha = {
            yd: a,
            bd: l,
            X: b,
            Nb: c
        };
        this.e("Authenticating using credential: " + this.Ha);
        hd(this);
        if (!(b = 40 == a.length)) a: {
            var d;
            try {
                var e = a.split(".");
                if (3 !== e.length) {
                    b = l;
                    break a
                }
                var f;
                b: {
                    try {
                        if ("undefined" !== typeof atob) {
                            f = atob(e[1]);
                            break b
                        }
                    } catch (h) {
                        L("base64DecodeIfNativeSupport failed: ", h)
                    }
                    f = k
                }
                f !== k && (d = sa(f))
            } catch (i) {
                L("isAdminAuthToken_ failed", i)
            }
            b = "object" === typeof d && wa(d, "admin") === j
        }
        b && (this.e("Admin auth credential detected.  Reducing max reconnect time."), this.Rb = 3E4)
    };
    s.Kb = function (a) {
        delete this.Ha;
        this.vb(l);
        this.P && this.Fa("unauth", {}, function (b) {
            a(b.s, b.d)
        })
    };

    function hd(a) {
        var b = a.Ha;
        a.P && b && a.Fa("auth", {
            cred: b.yd
        }, function (c) {
            var d = c.s,
                c = c.d || "error";
            "ok" !== d && a.Ha === b && delete a.Ha;
            a.vb("ok" === d);
            b.bd ? "ok" !== d && b.Nb && b.Nb(d, c) : (b.bd = j, b.X && b.X(d, c))
        })
    }

    function id(a, b, c, d) {
        b = b.toString();
        gd(a, b, c) && a.P && (a.e("Unlisten on " + b + " for " + c), b = {
            p: b
        }, d = wb(d, function (a) {
            return Ka(a)
        }), "{}" !== c && (b.q = d), a.Fa("u", b))
    }

    function jd(a, b, c, d) {
        a.P ? kd(a, "o", b, c, d) : a.wb.push({
            Mc: b,
            action: "o",
            data: c,
            C: d
        })
    }
    s.Hc = function (a, b) {
        this.P ? kd(this, "oc", a, k, b) : this.wb.push({
            Mc: a,
            action: "oc",
            data: k,
            C: b
        })
    };

    function kd(a, b, c, d, e) {
        c = {
            p: c,
            d: d
        };
        a.e("onDisconnect " + b, c);
        a.Fa(b, c, function (a) {
            e && setTimeout(function () {
                e(a.s, a.d)
            }, 0)
        })
    }
    s.put = function (a, b, c, d) {
        ld(this, "p", a, b, c, d)
    };

    function ld(a, b, c, d, e, f) {
        c = {
            p: c,
            d: d
        };
        t(f) && (c.h = f);
        a.U.push({
            action: b,
            ld: c,
            C: e
        });
        a.zb++;
        b = a.U.length - 1;
        a.P && md(a, b)
    }

    function md(a, b) {
        var c = a.U[b].action,
            d = a.U[b].ld,
            e = a.U[b].C;
        a.U[b].Md = a.P;
        a.Fa(c, d, function (d) {
            a.e(c + " response", d);
            delete a.U[b];
            a.zb--;
            0 === a.zb && (a.U = []);
            e && e(d.s, d.d)
        })
    }
    s.Xb = function (a) {
        if ("r" in a) {
            this.e("from server: " + w(a));
            var b = a.r,
                c = this.Gb[b];
            c && (delete this.Gb[b], c(a.b))
        } else "error" in a && g("A server-side error has occurred: " + a.error), "a" in a && (b = a.a, a = a.b, this.e("handleServerMessage", b, a), "d" === b ? this.Yb(a.p, a.d) : "m" === b ? this.Yb(a.p, a.d, j) : "c" === b ? (b = a.p, a = (a = a.q) ? wb(a, function (a) {
                return La(a)
            }).join("$") : "{}", (a = gd(this, b, a)) && a.C && a.C("permission_denied")) : "ac" === b ? (b = a.s, a = a.d, c = this.Ha, delete this.Ha, c && c.Nb && c.Nb(b, a), this.vb(l)) : "sd" === b ? this.Oc ? this.Oc(a) :
            "msg" in a && "undefined" !== typeof console && console.log("FIREBASE: " + a.msg.replace("\n", "\nFIREBASE: ")) : Vb("Unrecognized action received from server: " + w(b) + "\nAre you using the latest client?"))
    };
    s.xb = function (a) {
        this.e("connection ready");
        this.P = j;
        this.rb = (new Date).getTime();
        this.Kc({
            serverTimeOffset: a - (new Date).getTime()
        });
        hd(this);
        for (var b in this.ga)
            for (var c in this.ga[b]) a = this.ga[b][c], fd(this, b, c, a.Za, a.C);
        for (b = 0; b < this.U.length; b++) this.U[b] && md(this, b);
        for (; this.wb.length;) b = this.wb.shift(), kd(this, b.action, b.Mc, b.data, b.C);
        this.Wb(j)
    };

    function dd(a, b) {
        y(!a.ja, "Scheduling a connect when we're already connected/ing?");
        a.Sa && clearTimeout(a.Sa);
        a.Sa = setTimeout(function () {
            a.Sa = k;
            if (a.Na) {
                a.e("Making a connection attempt");
                a.Fc = (new Date).getTime();
                a.rb = k;
                var b = v(a.Xb, a),
                    d = v(a.xb, a),
                    e = v(a.gd, a),
                    f = a.id + ":" + ed++;
                a.ja = new Uc(f, a.J, b, d, e, function (b) {
                    M(b + " (" + a.J.toString() + ")");
                    a.Na = l
                })
            }
        }, b)
    }
    s.Kd = function (a) {
        a && (!this.gb && this.qa === this.Rb) && (this.e("Window became visible.  Reducing delay."), this.qa = 1E3, this.ja || dd(this, 0));
        this.gb = a
    };
    s.Jd = function (a) {
        a ? (this.e("Browser went online.  Reconnecting."), this.qa = 1E3, this.Na = j, this.ja || dd(this, 0)) : (this.e("Browser went offline.  Killing connection; don't reconnect."), this.Na = l, this.ja && this.ja.close())
    };
    s.gd = function () {
        this.e("data client disconnected");
        this.P = l;
        this.ja = k;
        for (var a = 0; a < this.U.length; a++) {
            var b = this.U[a];
            b && ("h" in b.ld && b.Md) && (b.C && b.C("disconnect"), delete this.U[a], this.zb--)
        }
        0 === this.zb && (this.U = []);
        if (this.Na) this.gb ? this.rb && (3E4 < (new Date).getTime() - this.rb && (this.qa = 1E3), this.rb = k) : (this.e("Window isn't visible.  Delaying reconnect."), this.qa = this.Rb, this.Fc = (new Date).getTime()), a = Math.max(0, this.qa - ((new Date).getTime() - this.Fc)), a *= Math.random(), this.e("Trying to reconnect in " +
            a + "ms"), dd(this, a), this.qa = Math.min(this.Rb, 1.3 * this.qa);
        else
            for (var c in this.Gb) delete this.Gb[c];
        this.Wb(l)
    };
    s.Ia = function () {
        this.Na = l;
        this.ja ? this.ja.close() : (this.Sa && (clearTimeout(this.Sa), this.Sa = k), this.P && this.gd())
    };
    s.ab = function () {
        this.Na = j;
        this.qa = 1E3;
        this.P || dd(this, 0)
    };

    function gd(a, b, c) {
        b = (new J(b)).toString();
        c || (c = "{}");
        var d = a.ga[b][c];
        delete a.ga[b][c];
        return d
    };

    function nd() {
        this.o = this.D = k
    }

    function od(a, b, c) {
        if (b.f()) a.D = c, a.o = k;
        else if (a.D !== k) a.D = a.D.ya(b, c);
        else {
            a.o == k && (a.o = new Dc);
            var d = E(b);
            a.o.contains(d) || a.o.add(d, new nd);
            a = a.o.get(d);
            b = Ma(b);
            od(a, b, c)
        }
    }

    function pd(a, b) {
        if (b.f()) return a.D = k, a.o = k, j;
        if (a.D !== k) {
            if (a.D.M()) return l;
            var c = a.D;
            a.D = k;
            c.w(function (b, c) {
                od(a, new J(b), c)
            });
            return pd(a, b)
        }
        return a.o !== k ? (c = E(b), b = Ma(b), a.o.contains(c) && pd(a.o.get(c), b) && a.o.remove(c), a.o.f() ? (a.o = k, j) : l) : j
    }

    function qd(a, b, c) {
        a.D !== k ? c(b, a.D) : a.w(function (a, e) {
            var f = new J(b.toString() + "/" + a);
            qd(e, f, c)
        })
    }
    nd.prototype.w = function (a) {
        this.o !== k && Ec(this.o, function (b, c) {
            a(b, c)
        })
    };

    function rd() {
        this.ra = N
    }

    function T(a, b) {
        return a.ra.Q(b)
    }

    function U(a, b, c) {
        a.ra = a.ra.ya(b, c)
    }
    rd.prototype.toString = function () {
        return this.ra.toString()
    };

    function sd() {
        this.sa = new rd;
        this.O = new rd;
        this.ma = new rd;
        this.Bb = new Pa
    }

    function td(a, b) {
        for (var c = T(a.sa, b), d = T(a.O, b), e = K(a.Bb, b), f = l, h = e; h !== k;) {
            if (h.k() !== k) {
                f = j;
                break
            }
            h = h.parent()
        }
        if (f) return l;
        c = ud(c, d, e);
        return c !== d ? (U(a.O, b, c), j) : l
    }

    function ud(a, b, c) {
        if (c.f()) return a;
        if (c.k() !== k) return b;
        a = a || N;
        c.w(function (d) {
            var d = d.name(),
                e = a.L(d),
                f = b.L(d),
                h = K(c, d),
                e = ud(e, f, h);
            a = a.H(d, e)
        });
        return a
    }
    sd.prototype.set = function (a, b) {
        var c = this,
            d = [];
        vb(b, function (a) {
            var b = a.path,
                a = a.pa,
                h = Nb();
            Qa(K(c.Bb, b), h);
            U(c.O, b, a);
            d.push({
                path: b,
                Rd: h
            })
        });
        return d
    };

    function vd(a, b) {
        vb(b, function (b) {
            var d = b.Rd,
                b = K(a.Bb, b.path),
                e = b.k();
            y(e !== k, "pendingPut should not be null.");
            e === d && Qa(b, k)
        })
    };

    function wd() {
        this.Ta = []
    }

    function xd(a, b) {
        if (0 !== b.length)
            for (var c = 0; c < b.length; c++) a.Ta.push(b[c])
    }
    wd.prototype.Eb = function () {
        for (var a = 0; a < this.Ta.length; a++)
            if (this.Ta[a]) {
                var b = this.Ta[a];
                this.Ta[a] = k;
                yd(b)
            }
        this.Ta = []
    };

    function yd(a) {
        var b = a.X,
            c = a.pd,
            d = a.Db;
        fc(function () {
            b(c, d)
        })
    };

    function V(a, b, c, d) {
        this.type = a;
        this.ta = b;
        this.aa = c;
        this.Db = d
    };

    function zd(a) {
        this.I = a;
        this.na = [];
        this.xc = new wd
    }

    function Ad(a, b, c, d, e) {
        a.na.push({
            type: b,
            X: c,
            cancel: d,
            T: e
        });
        var d = [],
            f = Bd(a.i);
        a.pb && f.push(new V("value", a.i));
        for (var h = 0; h < f.length; h++)
            if (f[h].type === b) {
                var i = new H(a.I.n, a.I.path);
                f[h].aa && (i = i.F(f[h].aa));
                d.push({
                    X: e ? v(c, e) : c,
                    pd: new R(f[h].ta, i),
                    Db: f[h].Db
                })
            }
        xd(a.xc, d)
    }
    zd.prototype.cc = function (a, b) {
        b = this.dc(a, b);
        b != k && Cd(this, b)
    };

    function Cd(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
                f = e.type,
                h = new H(a.I.n, a.I.path);
            b[d].aa && (h = h.F(b[d].aa));
            h = new R(b[d].ta, h);
            "value" === e.type && !h.nb() ? f += "(" + h.V() + ")" : "value" !== e.type && (f += " " + h.name());
            L(a.I.n.u.id + ": event:" + a.I.path + ":" + a.I.La() + ":" + f);
            for (f = 0; f < a.na.length; f++) {
                var i = a.na[f];
                b[d].type === i.type && c.push({
                    X: i.T ? v(i.X, i.T) : i.X,
                    pd: h,
                    Db: e.Db
                })
            }
        }
        xd(a.xc, c)
    }
    zd.prototype.Eb = function () {
        this.xc.Eb()
    };

    function Bd(a) {
        var b = [];
        if (!a.M()) {
            var c = k;
            a.w(function (a, e) {
                b.push(new V("child_added", e, a, c));
                c = a
            })
        }
        return b
    }

    function Ed(a) {
        a.pb || (a.pb = j, Cd(a, [new V("value", a.i)]))
    };

    function Fd(a, b) {
        zd.call(this, a);
        this.i = b
    }
    la(Fd, zd);
    Fd.prototype.dc = function (a, b) {
        this.i = a;
        this.pb && b != k && b.push(new V("value", this.i));
        return b
    };
    Fd.prototype.lb = function () {
        return {}
    };

    function Gd(a, b) {
        this.Ob = a;
        this.Gc = b
    }

    function Hd(a, b, c, d, e) {
        var f = a.Q(c),
            h = b.Q(c),
            d = new Gd(d, e),
            e = Id(d, c, f, h),
            h = !f.f() && !h.f() && f.j() !== h.j();
        if (e || h) {
            f = c;
            for (c = e; f.parent() !== k;) {
                var i = a.Q(f),
                    e = b.Q(f),
                    m = f.parent();
                if (!d.Ob || K(d.Ob, m).k()) {
                    var n = b.Q(m),
                        p = [],
                        f = f.Z < f.m.length ? f.m[f.m.length - 1] : k;
                    i.f() ? (i = n.ea(f, e), p.push(new V("child_added", e, f, i))) : e.f() ? p.push(new V("child_removed", i, f)) : (i = n.ea(f, e), h && p.push(new V("child_moved", e, f, i)), c && p.push(new V("child_changed", e, f, i)));
                    d.Gc(m, n, p)
                }
                h && (h = l, c = j);
                f = m
            }
        }
    }

    function Id(a, b, c, d) {
        var e, f = [];
        c === d ? e = l : c.M() && d.M() ? e = c.k() !== d.k() : c.M() ? (Jd(a, b, N, d, f), e = j) : d.M() ? (Jd(a, b, c, N, f), e = j) : e = Jd(a, b, c, d, f);
        e ? a.Gc(b, d, f) : c.j() !== d.j() && a.Gc(b, d, k);
        return e
    }

    function Jd(a, b, c, d, e) {
        var f = l,
            h = !a.Ob || !K(a.Ob, b).f(),
            i = [],
            m = [],
            n = [],
            p = [],
            q = {},
            r = {},
            x, P, I, G;
        x = c.Ua();
        I = Za(x);
        P = d.Ua();
        for (G = Za(P); I !== k || G !== k;) {
            c = I === k ? 1 : G === k ? -1 : I.key === G.key ? 0 : ic({
                name: I.key,
                ia: I.value.j()
            }, {
                name: G.key,
                ia: G.value.j()
            });
            if (0 > c) f = wa(q, I.key), t(f) ? (n.push({
                zc: I,
                Tc: i[f]
            }), i[f] = k) : (r[I.key] = m.length, m.push(I)), f = j, I = Za(x);
            else {
                if (0 < c) f = wa(r, G.key), t(f) ? (n.push({
                    zc: m[f],
                    Tc: G
                }), m[f] = k) : (q[G.key] = i.length, i.push(G)), f = j;
                else {
                    c = b.F(G.key);
                    if (c = Id(a, c, I.value, G.value)) p.push(G), f = j;
                    I.value.j() !==
                        G.value.j() && (n.push({
                            zc: I,
                            Tc: G
                        }), f = j);
                    I = Za(x)
                }
                G = Za(P)
            } if (!h && f) return j
        }
        for (h = 0; h < m.length; h++)
            if (q = m[h]) c = b.F(q.key), Id(a, c, q.value, N), e.push(new V("child_removed", q.value, q.key));
        for (h = 0; h < i.length; h++)
            if (q = i[h]) c = b.F(q.key), m = d.ea(q.key, q.value), Id(a, c, N, q.value), e.push(new V("child_added", q.value, q.key, m));
        for (h = 0; h < n.length; h++) q = n[h].zc, i = n[h].Tc, c = b.F(i.key), m = d.ea(i.key, i.value), e.push(new V("child_moved", i.value, i.key, m)), (c = Id(a, c, q.value, i.value)) && p.push(i);
        for (h = 0; h < p.length; h++) a = p[h],
            m = d.ea(a.key, a.value), e.push(new V("child_changed", a.value, a.key, m));
        return f
    };

    function Kd() {
        this.S = this.xa = k;
        this.set = {}
    }
    la(Kd, Dc);
    s = Kd.prototype;
    s.setActive = function (a) {
        this.xa = a
    };

    function Ld(a) {
        return a.contains("default")
    }

    function Md(a) {
        return a.xa != k && Ld(a)
    }
    s.defaultView = function () {
        return Ld(this) ? this.get("default") : k
    };
    s.path = ba("S");
    s.toString = function () {
        return wb(this.keys(), function (a) {
            return "default" === a ? "{}" : a
        }).join("$")
    };
    s.Za = function () {
        var a = [];
        Ec(this, function (b, c) {
            a.push(c.I)
        });
        return a
    };

    function Nd(a, b) {
        zd.call(this, a);
        this.i = N;
        this.dc(b, Bd(b))
    }
    la(Nd, zd);
    Nd.prototype.dc = function (a, b) {
        if (b === k) return b;
        var c = [],
            d = this.I;
        t(d.da) && (t(d.va) && d.va != k ? c.push(function (a, b) {
            var c = Xb(b, d.da);
            return 0 < c || 0 === c && 0 <= Yb(a, d.va)
        }) : c.push(function (a, b) {
            return 0 <= Xb(b, d.da)
        }));
        t(d.Aa) && (t(d.Ra) ? c.push(function (a, b) {
            var c = Xb(b, d.Aa);
            return 0 > c || 0 === c && 0 >= Yb(a, d.Ra)
        }) : c.push(function (a, b) {
            return 0 >= Xb(b, d.Aa)
        }));
        var e = k,
            f = k;
        if (t(this.I.Ca))
            if (t(this.I.da)) {
                if (e = Od(a, c, this.I.Ca, l)) {
                    var h = a.L(e).j();
                    c.push(function (a, b) {
                        var c = Xb(b, h);
                        return 0 > c || 0 === c && 0 >= Yb(a, e)
                    })
                }
            } else if (f =
            Od(a, c, this.I.Ca, j)) {
            var i = a.L(f).j();
            c.push(function (a, b) {
                var c = Xb(b, i);
                return 0 < c || 0 === c && 0 <= Yb(a, f)
            })
        }
        for (var m = [], n = [], p = [], q = [], r = 0; r < b.length; r++) {
            var x = b[r].aa,
                P = b[r].ta;
            switch (b[r].type) {
            case "child_added":
                Pd(c, x, P) && (this.i = this.i.H(x, P), n.push(b[r]));
                break;
            case "child_removed":
                this.i.L(x).f() || (this.i = this.i.H(x, k), m.push(b[r]));
                break;
            case "child_changed":
                !this.i.L(x).f() && Pd(c, x, P) && (this.i = this.i.H(x, P), q.push(b[r]));
                break;
            case "child_moved":
                var I = !this.i.L(x).f(),
                    G = Pd(c, x, P);
                I ? G ? (this.i =
                    this.i.H(x, P), p.push(b[r])) : (m.push(new V("child_removed", this.i.L(x), x)), this.i = this.i.H(x, k)) : G && (this.i = this.i.H(x, P), n.push(b[r]))
            }
        }
        var Zc = e || f;
        if (Zc) {
            var Dd = (r = f !== k) ? this.i.cd() : this.i.dd(),
                pc = l,
                bb = l,
                cb = this;
            (r ? a.yc : a.w).call(a, function (a, b) {
                !bb && Dd === k && (bb = j);
                if (bb && pc) return j;
                pc ? (m.push(new V("child_removed", cb.i.L(a), a)), cb.i = cb.i.H(a, k)) : bb && (n.push(new V("child_added", b, a)), cb.i = cb.i.H(a, b));
                Dd === a && (bb = j);
                a === Zc && (pc = j)
            })
        }
        for (r = 0; r < n.length; r++) c = n[r], x = this.i.ea(c.aa, c.ta), m.push(new V("child_added",
            c.ta, c.aa, x));
        for (r = 0; r < p.length; r++) c = p[r], x = this.i.ea(c.aa, c.ta), m.push(new V("child_moved", c.ta, c.aa, x));
        for (r = 0; r < q.length; r++) c = q[r], x = this.i.ea(c.aa, c.ta), m.push(new V("child_changed", c.ta, c.aa, x));
        this.pb && 0 < m.length && m.push(new V("value", this.i));
        return m
    };

    function Od(a, b, c, d) {
        if (a.M()) return k;
        var e = k;
        (d ? a.yc : a.w).call(a, function (a, d) {
            if (Pd(b, a, d) && (e = a, c--, 0 === c)) return j
        });
        return e
    }

    function Pd(a, b, c) {
        for (var d = 0; d < a.length; d++)
            if (!a[d](b, c.j())) return l;
        return j
    }
    Nd.prototype.Cc = function (a) {
        return this.i.L(a) !== N
    };
    Nd.prototype.lb = function (a, b, c) {
        var d = {};
        this.i.M() || this.i.w(function (a) {
            d[a] = 3
        });
        var e = this.i,
            c = T(c, new J("")),
            f = new Pa;
        Qa(K(f, this.I.path), j);
        var b = N.ya(a, b),
            h = this;
        Hd(c, b, a, f, function (a, b, c) {
            c !== k && a.toString() === h.I.path.toString() && h.dc(b, c)
        });
        this.i.M() ? cc(d, function (a, b) {
            d[b] = 2
        }) : (this.i.w(function (a) {
            C(d, a) || (d[a] = 1)
        }), cc(d, function (a, b) {
            h.i.L(b).f() && (d[b] = 2)
        }));
        this.i = e;
        return d
    };

    function Qd(a, b) {
        this.u = a;
        this.g = b;
        this.Vb = b.ra;
        this.la = new Pa
    }
    Qd.prototype.Mb = function (a, b, c, d, e) {
        var f = a.path,
            h = K(this.la, f),
            i = h.k();
        i === k ? (i = new Kd, Qa(h, i)) : y(!i.f(), "We shouldn't be storing empty QueryMaps");
        var m = a.La();
        if (i.contains(m)) a = i.get(m), Ad(a, b, c, d, e);
        else {
            var n = this.g.ra.Q(f),
                n = a = "default" === a.La() ? new Fd(a, n) : new Nd(a, n);
            if (Md(i) || Rd(h)) i.add(m, n), i.S || (i.S = n.I.path);
            else {
                var p, q;
                i.f() || (p = i.toString(), q = i.Za());
                i.add(m, n);
                i.S || (i.S = n.I.path);
                i.setActive(Sd(this, i));
                p && q && id(this.u, i.path(), p, q)
            }
            Md(i) && Sa(h, function (a) {
                if (a = a.k()) {
                    a.xa && a.xa();
                    a.xa = k
                }
            });
            Ad(a, b, c, d, e);
            (b = (b = Ta(K(this.la, f), function (a) {
                var b;
                if (b = a.k())
                    if (b = a.k().defaultView()) b = a.k().defaultView().pb;
                if (b) return j
            }, j)) || this.u === k && !T(this.g, f).f()) && Ed(a)
        }
        a.Eb()
    };

    function Td(a, b, c, d, e) {
        var f = a.get(b),
            h;
        if (h = f) {
            h = l;
            for (var i = f.na.length - 1; 0 <= i; i--) {
                var m = f.na[i];
                if ((!c || m.type === c) && (!d || m.X === d) && (!e || m.T === e))
                    if (f.na.splice(i, 1), h = j, c && d) break
            }
            h = h && !(0 < f.na.length)
        }(c = h) && a.remove(b);
        return c
    }
    Qd.prototype.fc = function (a, b, c, d) {
        var e = K(this.la, a.path).k();
        return e === k ? k : Ud(this, e, a, b, c, d)
    };

    function Ud(a, b, c, d, e, f) {
        var h = b.path(),
            h = K(a.la, h),
            c = c ? c.La() : k,
            i = [];
        c && "default" !== c ? Td(b, c, d, e, f) && i.push(c) : vb(b.keys(), function (a) {
            Td(b, a, d, e, f) && i.push(a)
        });
        b.f() && Qa(h, k);
        c = Rd(h);
        if (0 < i.length && !c) {
            for (var m = h, n = h.parent(), c = l; !c && n;) {
                var p = n.k();
                if (p) {
                    y(!Md(p));
                    var q = m.name(),
                        r = l;
                    Ec(p, function (a, b) {
                        r = b.Cc(q) || r
                    });
                    r && (c = j)
                }
                m = n;
                n = n.parent()
            }
            m = k;
            if (!Md(b)) {
                n = b.xa;
                b.xa = k;
                var x = [],
                    P = function (b) {
                        var c = b.k();
                        if (c && Ld(c)) x.push(c.path()), c.xa == k && c.setActive(Sd(a, c));
                        else {
                            if (c) {
                                c.xa != k || c.setActive(Sd(a,
                                    c));
                                var d = {};
                                Ec(c, function (a, b) {
                                    b.i.w(function (a) {
                                        C(d, a) || (d[a] = j, a = c.path().F(a), x.push(a))
                                    })
                                })
                            }
                            b.w(P)
                        }
                    };
                P(h);
                m = x;
                n && n()
            }
            return c ? k : m
        }
        return k
    }

    function Vd(a, b, c) {
        Sa(K(a.la, b), function (a) {
            (a = a.k()) && Ec(a, function (a, b) {
                Ed(b)
            })
        }, c, j)
    }

    function W(a, b, c) {
        function d(a) {
            do {
                if (h[a.toString()]) return j;
                a = a.parent()
            } while (a !== k);
            return l
        }
        var e = a.Vb,
            f = a.g.ra;
        a.Vb = f;
        for (var h = {}, i = 0; i < c.length; i++) h[c[i].toString()] = j;
        Hd(e, f, b, a.la, function (c, e, f) {
            if (b.contains(c)) {
                var h = d(c);
                h && Vd(a, c, l);
                a.cc(c, e, f);
                h && Vd(a, c, j)
            } else a.cc(c, e, f)
        });
        d(b) && Vd(a, b, j);
        Wd(a, b)
    }

    function Wd(a, b) {
        var c = K(a.la, b);
        Sa(c, function (a) {
            (a = a.k()) && Ec(a, function (a, b) {
                b.Eb()
            })
        }, j, j);
        Ta(c, function (a) {
            (a = a.k()) && Ec(a, function (a, b) {
                b.Eb()
            })
        }, l)
    }
    Qd.prototype.cc = function (a, b, c) {
        a = K(this.la, a).k();
        a !== k && Ec(a, function (a, e) {
            e.cc(b, c)
        })
    };

    function Rd(a) {
        return Ta(a, function (a) {
            return a.k() && Md(a.k())
        })
    }

    function Sd(a, b) {
        if (a.u) {
            var c = a.u,
                d = b.path(),
                e = b.toString(),
                f = b.Za(),
                h, i = b.keys(),
                m = Ld(b),
                n = a.u,
                p = function (c) {
                    if ("ok" !== c) {
                        var d = "Unknown Error";
                        "too_big" === c ? d = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == c ? d = "Client doesn't have permission to access the desired data." : "unavailable" == c && (d = "The service is unavailable");
                        var e = Error(c + ": " + d);
                        e.code = c.toUpperCase();
                        M("on() or once() for " + b.path().toString() + " failed: " + e.toString());
                        b && (Ec(b, function (a, b) {
                            for (var c = 0; c < b.na.length; c++) {
                                var d = b.na[c];
                                d.cancel && (d.T ? v(d.cancel, d.T) : d.cancel)(e)
                            }
                        }), Ud(a, b))
                    } else h || (m ? Vd(a, b.path(), j) : vb(i, function (a) {
                        (a = b.get(a)) && Ed(a)
                    }), Wd(a, b.path()))
                },
                q = b.toString(),
                r = b.path().toString();
            n.ga[r] = n.ga[r] || {};
            y(!n.ga[r][q], "listen() called twice for same path/queryId.");
            n.ga[r][q] = {
                Za: b.Za(),
                C: p
            };
            n.P && fd(n, r, q, b.Za(), p);
            return function () {
                h = j;
                id(c, d, e, f)
            }
        }
        return da
    }
    Qd.prototype.lb = function (a, b, c, d) {
        var e = {};
        Ec(b, function (b, h) {
            var i = h.lb(a, c, d);
            cc(i, function (a, b) {
                e[b] = 3 === a ? 3 : (wa(e, b) || a) === a ? a : 3
            })
        });
        c.M() || c.w(function (a) {
            C(e, a) || (e[a] = 4)
        });
        return e
    };

    function Xd(a, b, c, d, e) {
        var f = b.path(),
            b = a.lb(f, b, d, e),
            h = N,
            i = [];
        cc(b, function (b, n) {
            var p = new J(n);
            3 === b || 1 === b ? h = h.H(n, d.Q(p)) : (2 === b && i.push({
                path: f.F(n),
                pa: N
            }), i = i.concat(Yd(a, d.Q(p), K(c, p), e)))
        });
        return [{
            path: f,
            pa: h
        }].concat(i)
    }

    function Zd(a, b, c, d) {
        var e;
        a: {
            var f = K(a.la, b);
            e = f.parent();
            for (var h = []; e !== k;) {
                var i = e.k();
                if (i !== k) {
                    if (Ld(i)) {
                        e = [{
                            path: b,
                            pa: c
                        }];
                        break a
                    }
                    i = a.lb(b, i, c, d);
                    f = wa(i, f.name());
                    if (3 === f || 1 === f) {
                        e = [{
                            path: b,
                            pa: c
                        }];
                        break a
                    }
                    2 === f && h.push({
                        path: b,
                        pa: N
                    })
                }
                f = e;
                e = e.parent()
            }
            e = h
        }
        if (1 == e.length && (!e[0].pa.f() || c.f())) return e;
        h = K(a.la, b);
        f = h.k();
        f !== k ? Ld(f) ? e.push({
            path: b,
            pa: c
        }) : e = e.concat(Xd(a, f, h, c, d)) : e = e.concat(Yd(a, c, h, d));
        return e
    }

    function Yd(a, b, c, d) {
        var e = c.k();
        if (e !== k) return Ld(e) ? [{
            path: c.path(),
            pa: b
        }] : Xd(a, e, c, b, d);
        var f = [];
        c.w(function (c) {
            var e = b.M() ? N : b.L(c.name()),
                c = Yd(a, e, c, d);
            f = f.concat(c)
        });
        return f
    };

    function $d(a, b) {
        if (!a || "object" !== typeof a) return a;
        y(".sv" in a, "Unexpected leaf node or priority contents");
        return b[a[".sv"]]
    }

    function ae(a, b) {
        var c = $d(a.j(), b),
            d;
        if (a.M()) {
            var e = $d(a.k(), b);
            return e !== a.k() || c !== a.j() ? new gc(e, c) : a
        }
        d = a;
        c !== a.j() && (d = d.Ga(c));
        a.w(function (a, c) {
            var e = ae(c, b);
            e !== c && (d = d.H(a, e))
        });
        return d
    };

    function be(a) {
        this.J = a;
        this.$ = Cc(a);
        this.u = new bd(this.J, v(this.Yb, this), v(this.Wb, this), v(this.vb, this), v(this.Kc, this), v(this.Bc, this));
        var b = v(function () {
                return new zc(this.$, this.u)
            }, this),
            a = a.toString();
        Bc[a] || (Bc[a] = b());
        this.qd = Bc[a];
        this.eb = new Pa;
        this.fb = new rd;
        this.g = new sd;
        this.G = new Qd(this.u, this.g.ma);
        this.Dc = new rd;
        this.Ec = new Qd(k, this.Dc);
        ce(this, "connected", l);
        ce(this, "authenticated", l);
        this.R = new nd;
        this.wc = 0
    }
    s = be.prototype;
    s.toString = function () {
        return (this.J.hc ? "https://" : "http://") + this.J.host
    };
    s.name = function () {
        return this.J.Sb
    };

    function de(a) {
        a = T(a.Dc, new J(".info/serverTimeOffset")).V() || 0;
        return (new Date).getTime() + a
    }

    function ee(a) {
        a = a = {
            timestamp: de(a)
        };
        a.timestamp = a.timestamp || (new Date).getTime();
        return a
    }
    s.Yb = function (a, b, c) {
        this.wc++;
        var d, e, f = [];
        9 <= a.length && a.lastIndexOf(".priority") === a.length - 9 ? (d = new J(a.substring(0, a.length - 9)), e = T(this.g.sa, d).Ga(b), f.push(d)) : c ? (d = new J(a), e = T(this.g.sa, d), cc(b, function (a, b) {
            var c = new J(b);
            ".priority" === b ? e = e.Ga(a) : (e = e.ya(c, Q(a)), f.push(d.F(b)))
        })) : (d = new J(a), e = Q(b), f.push(d));
        a = Zd(this.G, d, e, this.g.O);
        b = l;
        for (c = 0; c < a.length; ++c) {
            var h = a[c],
                i = this.g,
                m = h.path;
            U(i.sa, m, h.pa);
            b = td(i, m) || b
        }
        b && (d = fe(this, d));
        W(this.G, d, f)
    };
    s.Wb = function (a) {
        ce(this, "connected", a);
        if (a === l) {
            this.e("onDisconnectEvents");
            var b = this,
                c = [],
                d = ee(this),
                a = qd,
                e = new nd;
            qd(this.R, new J(""), function (a, b) {
                od(e, a, ae(b, d))
            });
            a(e, new J(""), function (a, d) {
                var e = Zd(b.G, a, d, b.g.O);
                c.push.apply(c, b.g.set(a, e));
                e = ge(b, a);
                fe(b, e);
                W(b.G, e, [a])
            });
            vd(this.g, c);
            this.R = new nd
        }
    };
    s.Kc = function (a) {
        var b = this;
        bc(a, function (a, d) {
            ce(b, d, a)
        })
    };
    s.Bc = function (a) {
        a = new J(a);
        return T(this.g.sa, a).hash()
    };
    s.vb = function (a) {
        ce(this, "authenticated", a)
    };

    function ce(a, b, c) {
        b = new J("/.info/" + b);
        U(a.Dc, b, Q(c));
        W(a.Ec, b, [b])
    }
    s.hb = function (a, b, c) {
        "firebaseio-demo.com" === this.J.domain && M("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only.");
        this.u.hb(a, function (a, c) {
            X(b, a, c)
        }, function (a, b) {
            M("auth() was canceled: " + b);
            if (c) {
                var f = Error(b);
                f.code = a.toUpperCase();
                c(f)
            }
        })
    };
    s.Kb = function (a) {
        this.u.Kb(function (b, c) {
            X(a, b, c)
        })
    };
    s.bb = function (a, b, c, d) {
        this.e("set", {
            path: a.toString(),
            value: b,
            ia: c
        });
        var e = ee(this),
            b = Q(b, c),
            e = ae(b, e),
            e = Zd(this.G, a, e, this.g.O),
            f = this.g.set(a, e),
            h = this;
        this.u.put(a.toString(), b.V(j), function (b, c) {
            "ok" !== b && M("set at " + a + " failed: " + b);
            vd(h.g, f);
            td(h.g, a);
            var e = fe(h, a);
            W(h.G, e, []);
            X(d, b, c)
        });
        e = ge(this, a);
        fe(this, e);
        W(this.G, e, [a])
    };
    s.update = function (a, b, c) {
        this.e("update", {
            path: a.toString(),
            value: b
        });
        var d = T(this.g.ma, a),
            e = j,
            f = [],
            h = ee(this),
            i = [],
            m;
        for (m in b) {
            var e = l,
                n = Q(b[m]),
                n = ae(n, h),
                d = d.H(m, n),
                p = a.F(m);
            f.push(p);
            n = Zd(this.G, p, n, this.g.O);
            i = i.concat(this.g.set(a, n))
        }
        if (e) L("update() called with empty data.  Don't do anything."), X(c, "ok");
        else {
            var q = this;
            ld(this.u, "m", a.toString(), b, function (b, d) {
                y("ok" === b || "permission_denied" === b, "merge at " + a + " failed.");
                "ok" !== b && M("update at " + a + " failed: " + b);
                vd(q.g, i);
                td(q.g, a);
                var e =
                    fe(q, a);
                W(q.G, e, []);
                X(c, b, d)
            }, aa);
            b = ge(this, a);
            fe(this, b);
            W(q.G, b, f)
        }
    };
    s.Pc = function (a, b, c) {
        this.e("setPriority", {
            path: a.toString(),
            ia: b
        });
        var d = ee(this),
            d = $d(b, d),
            d = T(this.g.O, a).Ga(d),
            d = Zd(this.G, a, d, this.g.O),
            e = this.g.set(a, d),
            f = this;
        this.u.put(a.toString() + "/.priority", b, function (b, d) {
            "permission_denied" === b && M("setPriority at " + a + " failed: " + b);
            vd(f.g, e);
            td(f.g, a);
            var m = fe(f, a);
            W(f.G, m, []);
            X(c, b, d)
        });
        b = fe(this, a);
        W(f.G, b, [])
    };
    s.Hc = function (a, b) {
        var c = this;
        this.u.Hc(a.toString(), function (d, e) {
            "ok" === d && pd(c.R, a);
            X(b, d, e)
        })
    };

    function he(a, b, c, d) {
        var e = Q(c);
        jd(a.u, b.toString(), e.V(j), function (c, h) {
            "ok" === c && od(a.R, b, e);
            X(d, c, h)
        })
    }

    function ie(a) {
        xc(a.$, "deprecated_on_disconnect");
        a.qd.Sc.deprecated_on_disconnect = j
    }
    s.Mb = function (a, b, c, d, e) {
        ".info" === E(a.path) ? this.Ec.Mb(a, b, c, d, e) : this.G.Mb(a, b, c, d, e)
    };
    s.fc = function (a, b, c, d) {
        if (".info" === E(a.path)) this.Ec.fc(a, b, c, d);
        else {
            b = this.G.fc(a, b, c, d);
            if (c = b !== k) {
                for (var c = this.g, d = a.path, e = [], f = 0; f < b.length; ++f) e[f] = T(c.sa, b[f]);
                U(c.sa, d, N);
                for (f = 0; f < b.length; ++f) U(c.sa, b[f], e[f]);
                c = td(c, d)
            }
            c && (y(this.g.ma.ra === this.G.Vb, "We should have raised any outstanding events by now.  Else, we'll blow them away."), U(this.g.ma, a.path, T(this.g.O, a.path)), this.G.Vb = this.g.ma.ra)
        }
    };
    s.Ia = function () {
        this.u.Ia()
    };
    s.ab = function () {
        this.u.ab()
    };
    s.Qc = function (a) {
        if ("undefined" !== typeof console) {
            a ? (this.kc || (this.kc = new yc(this.$)), a = this.kc.get()) : a = this.$.get();
            var b = a,
                c = [],
                d = 0,
                e;
            for (e in b) c[d++] = e;
            var f = function (a, b) {
                return Math.max(b.length, a)
            };
            if (c.reduce) e = c.reduce(f, 0);
            else {
                var h = 0;
                vb(c, function (a) {
                    h = f.call(aa, h, a)
                });
                e = h
            }
            for (var i in a) {
                b = a[i];
                for (c = i.length; c < e + 2; c++) i += " ";
                console.log(i + b)
            }
        }
    };
    s.Rc = function (a) {
        xc(this.$, a);
        this.qd.Sc[a] = j
    };
    s.e = function () {
        L("r:" + this.u.id + ":", arguments)
    };

    function X(a, b, c) {
        a && fc(function () {
            if ("ok" == b) a(k, c);
            else {
                var d = (b || "error").toUpperCase(),
                    e = d;
                c && (e += ": " + c);
                e = Error(e);
                e.code = d;
                a(e)
            }
        })
    };

    function je(a, b) {
        var c = b || a.eb;
        b || ke(a, c);
        if (c.k() !== k) {
            var d = le(a, c);
            y(0 < d.length);
            if (xb(d, function (a) {
                return 1 === a.status
            })) {
                for (var e = c.path(), f = 0; f < d.length; f++) y(1 === d[f].status, "tryToSendTransactionQueue_: items in queue should all be run."), d[f].status = 2, d[f].nd++;
                c = T(a.g.O, e).hash();
                U(a.g.O, e, T(a.g.ma, e));
                for (var h = T(a.fb, e).V(j), i = Nb(), m = {}, n = 0; n < d.length; n++) d[n].qc && (m[d[n].path.toString()] = d[n].path);
                var p = [],
                    q;
                for (q in m) p.push(m[q]);
                for (f = 0; f < p.length; f++) Qa(K(a.g.Bb, p[f]), i);
                a.u.put(e.toString(),
                    h, function (b) {
                        a.e("transaction put response", {
                            path: e.toString(),
                            status: b
                        });
                        for (f = 0; f < p.length; f++) {
                            var c = K(a.g.Bb, p[f]),
                                h = c.k();
                            y(h !== k, "sendTransactionQueue_: pendingPut should not be null.");
                            h === i && (Qa(c, k), U(a.g.O, p[f], T(a.g.sa, p[f])))
                        }
                        if ("ok" === b) {
                            b = [];
                            for (f = 0; f < d.length; f++) d[f].status = 3, d[f].C && (c = me(a, d[f].path), b.push(v(d[f].C, k, k, j, c))), d[f].nc();
                            ke(a, K(a.eb, e));
                            je(a);
                            for (f = 0; f < b.length; f++) fc(b[f])
                        } else {
                            if ("datastale" === b)
                                for (f = 0; f < d.length; f++) d[f].status = 4 === d[f].status ? 5 : 1;
                            else {
                                M("transaction at " +
                                    e + " failed: " + b);
                                for (f = 0; f < d.length; f++) d[f].status = 5, d[f].oc = b
                            }
                            b = fe(a, e);
                            W(a.G, b, [e])
                        }
                    }, c)
            }
        } else c.nb() && c.w(function (b) {
            je(a, b)
        })
    }

    function fe(a, b) {
        var c = ne(a, b),
            d = c.path(),
            c = le(a, c);
        U(a.g.ma, d, T(a.g.O, d));
        U(a.fb, d, T(a.g.O, d));
        if (0 !== c.length) {
            for (var e = T(a.g.ma, d), f = e, h = [], i = 0; i < c.length; i++) {
                var m = Na(d, c[i].path),
                    n = l,
                    p;
                y(m !== k, "rerunTransactionsUnderNode_: relativePath should not be null.");
                if (5 === c[i].status) n = j, p = c[i].oc;
                else if (1 === c[i].status)
                    if (25 <= c[i].nd) n = j, p = "maxretry";
                    else {
                        var q = e.Q(m),
                            r = c[i].update(q.V());
                        if (t(r)) {
                            Ba("transaction failed: Data returned ", r);
                            var x = Q(r);
                            "object" === typeof r && r != k && C(r, ".priority") ||
                                (x = x.Ga(q.j()));
                            e = e.ya(m, x);
                            c[i].qc && (f = f.ya(m, x))
                        } else n = j, p = "nodata"
                    }
                n && (c[i].status = 3, setTimeout(c[i].nc, 0), c[i].C && (n = new H(a, c[i].path), m = new R(e.Q(m), n), "nodata" === p ? h.push(v(c[i].C, k, k, l, m)) : h.push(v(c[i].C, k, Error(p), l, m))))
            }
            U(a.fb, d, e);
            U(a.g.ma, d, f);
            ke(a, a.eb);
            for (i = 0; i < h.length; i++) fc(h[i]);
            je(a)
        }
        return d
    }

    function ne(a, b) {
        for (var c, d = a.eb;
            (c = E(b)) !== k && d.k() === k;) d = K(d, c), b = Ma(b);
        return d
    }

    function le(a, b) {
        var c = [];
        oe(a, b, c);
        c.sort(function (a, b) {
            return a.hd - b.hd
        });
        return c
    }

    function oe(a, b, c) {
        var d = b.k();
        if (d !== k)
            for (var e = 0; e < d.length; e++) c.push(d[e]);
        b.w(function (b) {
            oe(a, b, c)
        })
    }

    function ke(a, b) {
        var c = b.k();
        if (c) {
            for (var d = 0, e = 0; e < c.length; e++) 3 !== c[e].status && (c[d] = c[e], d++);
            c.length = d;
            Qa(b, 0 < c.length ? c : k)
        }
        b.w(function (b) {
            ke(a, b)
        })
    }

    function ge(a, b) {
        var c = ne(a, b).path(),
            d = K(a.eb, b);
        Ta(d, function (a) {
            pe(a)
        });
        pe(d);
        Sa(d, function (a) {
            pe(a)
        });
        return c
    }

    function pe(a) {
        var b = a.k();
        if (b !== k) {
            for (var c = [], d = -1, e = 0; e < b.length; e++) 4 !== b[e].status && (2 === b[e].status ? (y(d === e - 1, "All SENT items should be at beginning of queue."), d = e, b[e].status = 4, b[e].oc = "set") : (y(1 === b[e].status), b[e].nc(), b[e].C && c.push(v(b[e].C, k, Error("set"), l, k)))); - 1 === d ? Qa(a, k) : b.length = d + 1;
            for (e = 0; e < c.length; e++) fc(c[e])
        }
    }

    function me(a, b) {
        var c = new H(a, b);
        return new R(T(a.fb, b), c)
    };

    function Y() {
        this.$a = {}
    }
    ea(Y);
    Y.prototype.Ia = function () {
        for (var a in this.$a) this.$a[a].Ia()
    };
    Y.prototype.interrupt = Y.prototype.Ia;
    Y.prototype.ab = function () {
        for (var a in this.$a) this.$a[a].ab()
    };
    Y.prototype.resume = Y.prototype.ab;
    var Z = {
        Dd: function (a) {
            var b = O.prototype.hash;
            O.prototype.hash = a;
            var c = gc.prototype.hash;
            gc.prototype.hash = a;
            return function () {
                O.prototype.hash = b;
                gc.prototype.hash = c
            }
        }
    };
    Z.hijackHash = Z.Dd;
    Z.La = function (a) {
        return a.La()
    };
    Z.queryIdentifier = Z.La;
    Z.Fd = function (a) {
        return a.n.u.ga
    };
    Z.listens = Z.Fd;
    Z.Nd = function (a) {
        return a.n.u.ja
    };
    Z.refConnection = Z.Nd;
    Z.sd = bd;
    Z.DataConnection = Z.sd;
    bd.prototype.sendRequest = bd.prototype.Fa;
    bd.prototype.interrupt = bd.prototype.Ia;
    Z.td = Uc;
    Z.RealTimeConnection = Z.td;
    Uc.prototype.sendRequest = Uc.prototype.od;
    Uc.prototype.close = Uc.prototype.close;
    Z.rd = pb;
    Z.ConnectionTarget = Z.rd;
    Z.Bd = function () {
        Ic = Oc = j
    };
    Z.forceLongPolling = Z.Bd;
    Z.Cd = function () {
        Jc = j
    };
    Z.forceWebSockets = Z.Cd;
    Z.Td = function (a, b) {
        a.n.u.Oc = b
    };
    Z.setSecurityDebugCallback = Z.Td;
    Z.Qc = function (a, b) {
        a.n.Qc(b)
    };
    Z.stats = Z.Qc;
    Z.Rc = function (a, b) {
        a.n.Rc(b)
    };
    Z.statsIncrementCounter = Z.Rc;
    Z.wc = function (a) {
        return a.n.wc
    };

    function $(a, b, c) {
        this.Fb = a;
        this.S = b;
        this.Da = c
    }
    $.prototype.cancel = function (a) {
        z("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
        B("Firebase.onDisconnect().cancel", 1, a, j);
        this.Fb.Hc(this.S, a)
    };
    $.prototype.cancel = $.prototype.cancel;
    $.prototype.remove = function (a) {
        z("Firebase.onDisconnect().remove", 0, 1, arguments.length);
        D("Firebase.onDisconnect().remove", this.S);
        B("Firebase.onDisconnect().remove", 1, a, j);
        he(this.Fb, this.S, k, a)
    };
    $.prototype.remove = $.prototype.remove;
    $.prototype.set = function (a, b) {
        z("Firebase.onDisconnect().set", 1, 2, arguments.length);
        D("Firebase.onDisconnect().set", this.S);
        Aa("Firebase.onDisconnect().set", a, l);
        B("Firebase.onDisconnect().set", 2, b, j);
        he(this.Fb, this.S, a, b)
    };
    $.prototype.set = $.prototype.set;
    $.prototype.bb = function (a, b, c) {
        z("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
        D("Firebase.onDisconnect().setWithPriority", this.S);
        Aa("Firebase.onDisconnect().setWithPriority", a, l);
        Fa("Firebase.onDisconnect().setWithPriority", 2, b, l);
        B("Firebase.onDisconnect().setWithPriority", 3, c, j);
        (".length" === this.Da || ".keys" === this.Da) && g("Firebase.onDisconnect().setWithPriority failed: " + this.Da + " is a read-only object.");
        var d = this.Fb,
            e = this.S,
            f = Q(a, b);
        jd(d.u, e.toString(), f.V(j), function (a,
            b) {
            "ok" === a && od(d.R, e, f);
            X(c, a, b)
        })
    };
    $.prototype.setWithPriority = $.prototype.bb;
    $.prototype.update = function (a, b) {
        z("Firebase.onDisconnect().update", 1, 2, arguments.length);
        D("Firebase.onDisconnect().update", this.S);
        Ea("Firebase.onDisconnect().update", a);
        B("Firebase.onDisconnect().update", 2, b, j);
        var c = this.Fb,
            d = this.S,
            e = j,
            f;
        for (f in a) e = l;
        if (e) L("onDisconnect().update() called with empty data.  Don't do anything."), X(b, "ok");
        else {
            e = c.u;
            f = d.toString();
            var h = function (e, f) {
                if ("ok" === e)
                    for (var h in a) {
                        var p = Q(a[h]);
                        od(c.R, d.F(h), p)
                    }
                X(b, e, f)
            };
            e.P ? kd(e, "om", f, a, h) : e.wb.push({
                Mc: f,
                action: "om",
                data: a,
                C: h
            })
        }
    };
    $.prototype.update = $.prototype.update;
    var qe, re = 0,
        se = [];
    qe = function (a) {
        var b = a === re;
        re = a;
        for (var c = Array(8), d = 7; 0 <= d; d--) c[d] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(a % 64), a = Math.floor(a / 64);
        y(0 === a);
        a = c.join("");
        if (b) {
            for (d = 11; 0 <= d && 63 === se[d]; d--) se[d] = 0;
            se[d]++
        } else
            for (d = 0; 12 > d; d++) se[d] = Math.floor(64 * Math.random());
        for (d = 0; 12 > d; d++) a += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(se[d]);
        y(20 === a.length, "NextPushId: Length should be 20.");
        return a
    };

    function H() {
        var a, b, c;
        if (arguments[0] instanceof be) c = arguments[0], a = arguments[1];
        else {
            z("new Firebase", 1, 2, arguments.length);
            var d = arguments[0];
            b = a = "";
            var e = j,
                f = "";
            if (u(d)) {
                var h = d.indexOf("//");
                if (0 <= h) var i = d.substring(0, h - 1),
                    d = d.substring(h + 2);
                h = d.indexOf("/"); - 1 === h && (h = d.length);
                a = d.substring(0, h);
                var d = d.substring(h + 1),
                    m = a.split(".");
                if (3 == m.length) {
                    h = m[2].indexOf(":");
                    e = 0 <= h ? "https" === i : j;
                    if ("firebase" === m[1]) Wb(a + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
                    else {
                        b = m[0];
                        f = "";
                        d = ("/" + d).split("/");
                        for (i = 0; i < d.length; i++)
                            if (0 < d[i].length) {
                                h = d[i];
                                try {
                                    h = decodeURIComponent(h.replace(/\+/g, " "))
                                } catch (n) {}
                                f += "/" + h
                            }
                    }
                    b = b.toLowerCase()
                } else b = k
            }
            e || "undefined" !== typeof window && (window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:")) && M("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
            a = new pb(a, e, b);
            b = new J(f);
            e = b.toString();
            if (!(d = !u(a.host)))
                if (!(d = 0 === a.host.length))
                    if (!(d = !za(a.Sb)))
                        if (d =
                            0 !== e.length) e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), d = !(u(e) && 0 !== e.length && !ya.test(e));
            d && g(Error(A("new Firebase", 1, l) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'));
            arguments[1] ? arguments[1] instanceof Y ? c = arguments[1] : g(Error("Expected a valid Firebase.Context for second argument to new Firebase()")) : c = Y.mb();
            e = a.toString();
            d = wa(c.$a, e);
            d || (d = new be(a), c.$a[e] = d);
            c = d;
            a = b
        }
        F.call(this, c, a)
    }
    la(H, F);
    var te = H,
        ue = ["Firebase"],
        ve = ca;
    !(ue[0] in ve) && ve.execScript && ve.execScript("var " + ue[0]);
    for (var we; ue.length && (we = ue.shift());)!ue.length && t(te) ? ve[we] = te : ve = ve[we] ? ve[we] : ve[we] = {};
    H.prototype.name = function () {
        z("Firebase.name", 0, 0, arguments.length);
        return this.path.f() ? k : this.path.Z < this.path.m.length ? this.path.m[this.path.m.length - 1] : k
    };
    H.prototype.name = H.prototype.name;
    H.prototype.F = function (a) {
        z("Firebase.child", 1, 1, arguments.length);
        if (ha(a)) a = String(a);
        else if (!(a instanceof J))
            if (E(this.path) === k) {
                var b = a;
                b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
                Ia("Firebase.child", b)
            } else Ia("Firebase.child", a);
        return new H(this.n, this.path.F(a))
    };
    H.prototype.child = H.prototype.F;
    H.prototype.parent = function () {
        z("Firebase.parent", 0, 0, arguments.length);
        var a = this.path.parent();
        return a === k ? k : new H(this.n, a)
    };
    H.prototype.parent = H.prototype.parent;
    H.prototype.root = function () {
        z("Firebase.ref", 0, 0, arguments.length);
        for (var a = this; a.parent() !== k;) a = a.parent();
        return a
    };
    H.prototype.root = H.prototype.root;
    H.prototype.toString = function () {
        z("Firebase.toString", 0, 0, arguments.length);
        var a;
        if (this.parent() === k) a = this.n.toString();
        else {
            a = this.parent().toString() + "/";
            var b = this.name();
            a += encodeURIComponent(String(b))
        }
        return a
    };
    H.prototype.toString = H.prototype.toString;
    H.prototype.set = function (a, b) {
        z("Firebase.set", 1, 2, arguments.length);
        D("Firebase.set", this.path);
        Aa("Firebase.set", a, l);
        B("Firebase.set", 2, b, j);
        return this.n.bb(this.path, a, k, b)
    };
    H.prototype.set = H.prototype.set;
    H.prototype.update = function (a, b) {
        z("Firebase.update", 1, 2, arguments.length);
        D("Firebase.update", this.path);
        Ea("Firebase.update", a);
        B("Firebase.update", 2, b, j);
        C(a, ".priority") && g(Error("update() does not currently support updating .priority."));
        return this.n.update(this.path, a, b)
    };
    H.prototype.update = H.prototype.update;
    H.prototype.bb = function (a, b, c) {
        z("Firebase.setWithPriority", 2, 3, arguments.length);
        D("Firebase.setWithPriority", this.path);
        Aa("Firebase.setWithPriority", a, l);
        Fa("Firebase.setWithPriority", 2, b, l);
        B("Firebase.setWithPriority", 3, c, j);
        (".length" === this.name() || ".keys" === this.name()) && g("Firebase.setWithPriority failed: " + this.name() + " is a read-only object.");
        return this.n.bb(this.path, a, b, c)
    };
    H.prototype.setWithPriority = H.prototype.bb;
    H.prototype.remove = function (a) {
        z("Firebase.remove", 0, 1, arguments.length);
        D("Firebase.remove", this.path);
        B("Firebase.remove", 1, a, j);
        this.set(k, a)
    };
    H.prototype.remove = H.prototype.remove;
    H.prototype.transaction = function (a, b, c) {
        function d() {}
        z("Firebase.transaction", 1, 3, arguments.length);
        D("Firebase.transaction", this.path);
        B("Firebase.transaction", 1, a, l);
        B("Firebase.transaction", 2, b, j);
        t(c) && "boolean" != typeof c && g(Error(A("Firebase.transaction", 3, j) + "must be a boolean."));
        (".length" === this.name() || ".keys" === this.name()) && g("Firebase.transaction failed: " + this.name() + " is a read-only object.");
        "undefined" === typeof c && (c = j);
        var e = this.n,
            f = this.path,
            h = c;
        e.e("transaction on " + f);
        var i =
            new H(e, f);
        i.Xa("value", d);
        var h = {
                path: f,
                update: a,
                C: b,
                status: k,
                hd: Nb(),
                qc: h,
                nd: 0,
                nc: function () {
                    i.ub("value", d)
                },
                oc: k
            },
            m = h.update(T(e.fb, f).V());
        if (t(m)) {
            Ba("transaction failed: Data returned ", m);
            h.status = 1;
            var n = K(e.eb, f),
                p = n.k() || [];
            p.push(h);
            Qa(n, p);
            p = "object" === typeof m && m !== k && C(m, ".priority") ? m[".priority"] : T(e.g.O, f).j();
            n = ee(e);
            m = Q(m, p);
            m = ae(m, n);
            U(e.fb, f, m);
            h.qc && (U(e.g.ma, f, m), W(e.G, f, [f]));
            je(e)
        } else h.nc(), h.C && (e = me(e, f), h.C(k, l, e))
    };
    H.prototype.transaction = H.prototype.transaction;
    H.prototype.Pc = function (a, b) {
        z("Firebase.setPriority", 1, 2, arguments.length);
        D("Firebase.setPriority", this.path);
        Fa("Firebase.setPriority", 1, a, l);
        B("Firebase.setPriority", 2, b, j);
        this.n.Pc(this.path, a, b)
    };
    H.prototype.setPriority = H.prototype.Pc;
    H.prototype.push = function (a, b) {
        z("Firebase.push", 0, 2, arguments.length);
        D("Firebase.push", this.path);
        Aa("Firebase.push", a, j);
        B("Firebase.push", 2, b, j);
        var c = de(this.n),
            c = qe(c),
            c = this.F(c);
        "undefined" !== typeof a && a !== k && c.set(a, b);
        return c
    };
    H.prototype.push = H.prototype.push;
    H.prototype.ha = function () {
        return new $(this.n, this.path, this.name())
    };
    H.prototype.onDisconnect = H.prototype.ha;
    H.prototype.Od = function () {
        M("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead.");
        this.ha().remove();
        ie(this.n)
    };
    H.prototype.removeOnDisconnect = H.prototype.Od;
    H.prototype.Sd = function (a) {
        M("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead.");
        this.ha().set(a);
        ie(this.n)
    };
    H.prototype.setOnDisconnect = H.prototype.Sd;
    H.prototype.hb = function (a, b, c) {
        z("Firebase.auth", 1, 3, arguments.length);
        u(a) || g(Error(A("Firebase.auth", 1, l) + "must be a valid credential (a string)."));
        B("Firebase.auth", 2, b, j);
        B("Firebase.auth", 3, b, j);
        this.n.hb(a, b, c)
    };
    H.prototype.auth = H.prototype.hb;
    H.prototype.Kb = function (a) {
        z("Firebase.unauth", 0, 1, arguments.length);
        B("Firebase.unauth", 1, a, j);
        this.n.Kb(a)
    };
    H.prototype.unauth = H.prototype.Kb;
    H.goOffline = function () {
        z("Firebase.goOffline", 0, 0, arguments.length);
        Y.mb().Ia()
    };
    H.goOnline = function () {
        z("Firebase.goOnline", 0, 0, arguments.length);
        Y.mb().ab()
    };

    function Tb(a, b) {
        y(!b || a === j || a === l, "Can't turn on custom loggers persistently.");
        a === j ? ("undefined" !== typeof console && ("function" === typeof console.log ? Rb = v(console.log, console) : "object" === typeof console.log && (Rb = function (a) {
            console.log(a)
        })), b && ob.set("logging_enabled", j)) : a ? Rb = a : (Rb = k, ob.remove("logging_enabled"))
    }
    H.enableLogging = Tb;
    H.ServerValue = {
        TIMESTAMP: {
            ".sv": "timestamp"
        }
    };
    H.INTERNAL = Z;
    H.Context = Y;
})();