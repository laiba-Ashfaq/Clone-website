(function() {
    'use strict';
    var aa = {};
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n = this || self;

    function ba(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = n, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ca(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function da(a) {
        return a
    };
    var ea;
    let fa;

    function ha(a) {
        return (fa || (fa = new TextEncoder)).encode(a)
    };

    function ia(a) {
        n.setTimeout(() => {
            throw a;
        }, 0)
    };

    function ja(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    var ka = ba(610401301, !1),
        la = ba(188588736, !0),
        ma = ba(645172343, ba(1, !0));

    function na() {
        var a = n.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var q;
    const oa = n.navigator;
    q = oa ? oa.userAgentData || null : null;

    function pa(a) {
        return ka ? q ? q.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function u(a) {
        return na().indexOf(a) != -1
    };

    function sa() {
        return ka ? !!q && q.brands.length > 0 : !1
    }

    function ta() {
        return sa() ? pa("Chromium") : (u("Chrome") || u("CriOS")) && !(sa() ? 0 : u("Edge")) || u("Silk")
    };

    function ua(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function x(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function va(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function wa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function xa(a, b) {
        a: {
            const c = a.length,
                d = typeof a === "string" ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function A(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function ya(a, b) {
        for (let d = 1; d < arguments.length; d++) {
            const e = arguments[d];
            var c = ca(e);
            if (c == "array" || c == "object" && typeof e.length == "number") {
                c = a.length || 0;
                const f = e.length || 0;
                a.length = c + f;
                for (let g = 0; g < f; g++) a[c + g] = e[g]
            } else a.push(e)
        }
    }

    function Aa(a, b) {
        a.sort(b || Ea)
    }

    function Ea(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };

    function Fa(a) {
        Fa[" "](a);
        return a
    }
    Fa[" "] = function() {};
    var Ga = u("Gecko") && !(na().toLowerCase().indexOf("webkit") != -1 && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        Ha = na().toLowerCase().indexOf("webkit") != -1 && !u("Edge");
    !u("Android") || ta();
    ta();
    var Ia = u("Safari") && !(ta() || (sa() ? 0 : u("Coast")) || (sa() ? 0 : u("Opera")) || (sa() ? 0 : u("Edge")) || (sa() ? pa("Microsoft Edge") : u("Edg/")) || (sa() ? pa("Opera") : u("OPR")) || u("Firefox") || u("FxiOS") || u("Silk") || u("Android")) && !(u("iPhone") && !u("iPod") && !u("iPad") || u("iPad") || u("iPod"));
    var Ja = {},
        Ka = null,
        La = Ga || Ha || !Ia && typeof n.atob == "function";

    function Na(a) {
        var b = 4;
        b === void 0 && (b = 0);
        Oa();
        b = Ja[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                l = a[e + 2],
                k = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = k + g + h + l
        }
        k = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                k = a[e + 1], l = b[(k & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | k >> 4] + l + d
        }
        return c.join("")
    }

    function Pa(a) {
        if (La) return n.atob(a);
        var b = "";
        Ra(a, function(c) {
            b += String.fromCharCode(c)
        });
        return b
    }

    function Ra(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var k = a.charAt(d++),
                    p = Ka[k];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
            }
            return l
        }
        Oa();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (h === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
        }
    }

    function Oa() {
        if (!Ka) {
            Ka = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                Ja[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    Ka[f] === void 0 && (Ka[f] = e)
                }
            }
        }
    };
    var Sa = {};
    let B = 0,
        Ta = 0;

    function Ua(a) {
        const b = a >>> 0;
        B = b;
        Ta = (a - b) / 4294967296 >>> 0
    }

    function Va(a) {
        if (a < 0) {
            Ua(-a);
            a = B;
            var b = Ta;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            B = c >>> 0;
            Ta = d >>> 0
        } else Ua(a)
    }

    function Wa() {
        var a = B,
            b = Ta;
        if (b & 2147483648) var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else b >>>= 0, a >>>= 0, b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Xa(a) {
        a.length < 16 ? Va(Number(a)) : (a = BigInt(a), B = Number(a & BigInt(4294967295)) >>> 0, Ta = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function Ya(a) {
        if (!a) return Za || (Za = new $a(0, 0));
        if (!/^-?\d+$/.test(a)) return null;
        Xa(a);
        return new $a(B, Ta)
    }
    var $a = class {
        constructor(a, b) {
            this.h = a >>> 0;
            this.g = b >>> 0
        }
    };
    let Za;

    function ab(a, b, c) {
        for (; c > 0 || b > 127;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.g.push(b)
    }

    function bb(a, b) {
        for (; b > 127;) a.g.push(b & 127 | 128), b >>>= 7;
        a.g.push(b)
    }

    function cb(a, b) {
        if (b >= 0) bb(a, b);
        else {
            for (let c = 0; c < 9; c++) a.g.push(b & 127 | 128), b >>= 7;
            a.g.push(1)
        }
    }
    var db = class {
        constructor() {
            this.g = []
        }
        length() {
            return this.g.length
        }
        end() {
            const a = this.g;
            this.g = [];
            return a
        }
    };

    function eb(a, b) {
        b.length !== 0 && (a.i.push(b), a.h += b.length)
    }

    function C(a, b, c) {
        bb(a.g, b * 8 + c)
    }

    function fb(a, b) {
        C(a, b, 2);
        b = a.g.end();
        eb(a, b);
        b.push(a.h);
        return b
    }

    function gb(a, b) {
        var c = b.pop();
        for (c = a.h + a.g.length() - c; c > 127;) b.push(c & 127 | 128), c >>>= 7, a.h++;
        b.push(c);
        a.h++
    }
    var hb = class {
        constructor() {
            this.i = [];
            this.h = 0;
            this.g = new db
        }
    };
    class E {
        constructor(a, b, c, d) {
            this.g = a;
            this.h = b;
            this.i = c;
            this.Y = d
        }
    };

    function F(a) {
        return Array.prototype.slice.call(a)
    };
    var G = Symbol(),
        ib = Symbol(),
        jb = Symbol(),
        kb = Symbol();

    function lb(a, b) {
        b[G] = (a | 0) & -14591
    }

    function mb(a, b) {
        b[G] = (a | 34) & -14557
    };
    var nb = {},
        ob = {};

    function pb(a) {
        return !(!a || typeof a !== "object" || a.g !== ob)
    }

    function qb(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function rb(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[G] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[G] = d | 1;
        return !0
    }
    var tb;
    const ub = [];
    ub[G] = 55;
    tb = Object.freeze(ub);

    function vb(a) {
        if (a & 2) throw Error();
    }
    let H;

    function wb(a, b) {
        if (b) {
            H || (H = Symbol());
            var c = a[H];
            c ? c.push(b) : a[H] = [b]
        }
    }

    function xb(a, b) {
        (b = H ? b[H] : void 0) && (a[H] = F(b))
    }
    let yb;
    var zb = Object.freeze({});
    Object.freeze({});
    var Ab = Object.freeze({});

    function Bb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let Cb;

    function Db() {
        const a = Error();
        Bb(a, "incident");
        ia(a)
    }

    function Eb(a) {
        a = Error(a);
        Bb(a, "warning");
        return a
    };

    function Fb(a) {
        if (a != null && typeof a !== "boolean") throw Error(`Expected boolean but got ${ca(a)}: ${a}`);
        return a
    }

    function Gb(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    const Hb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Ib(a) {
        const b = typeof a;
        return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : Hb.test(a)
    }

    function Jb(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Kb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Lb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Mb(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function Nb(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Va(a);
            var b = B,
                c = Ta;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Ob(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Mb(a) || (Xa(a), a = Wa());
        return a
    }

    function Pb(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function Qb(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Rb(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Sb(a, b, c) {
        if (a != null && typeof a === "object" && a.O === nb) return a;
        if (Array.isArray(a)) {
            var d = a[G] | 0,
                e = d;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== d && (a[G] = e);
            return new b(a)
        }
    };
    let Tb, Ub, Vb;

    function Wb(a) {
        switch (typeof a) {
            case "boolean":
                return Ub || (Ub = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? Vb || (Vb = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function Xb(a, b, c) {
        a == null && (a = Tb);
        Tb = void 0;
        if (a == null) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = a[G] | 0;
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                const e = c.length;
                if (e) {
                    const f = e - 1;
                    if (qb(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (b > 1024) throw Error("spvt");
                    d = d & -16760833 |
                        (b & 1023) << 14
                }
            }
        }
        a[G] = d;
        return a
    };

    function Yb(a) {
        if (typeof Proxy !== "function") return a;
        let b = Zb ? .get(a);
        if (b) return b;
        b = new Proxy(a, {
            set(c, d, e) {
                $b();
                c[d] = e;
                return !0
            }
        });
        ac(a, b);
        return b
    }

    function $b() {
        Db()
    }
    let Zb = void 0,
        bc = void 0;

    function ac(a, b) {
        (Zb || (Zb = new WeakMap)).set(a, b);
        (bc || (bc = new WeakMap)).set(b, a)
    };

    function cc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (rb(a, void 0, 0)) return
                    } else if (a != null && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function dc(a, b, c) {
        const d = F(a);
        var e = d.length;
        const f = b & 256 ? d[e - 1] : void 0;
        e += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
        if (f) {
            b = d[b] = {};
            for (const g in f) Object.prototype.hasOwnProperty.call(f, g) && (b[g] = c(f[g]))
        }
        xb(d, a);
        return d
    }

    function ec(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = rb(a, void 0, 0) ? void 0 : e && (a[G] | 0) & 2 ? a : fc(a, b, c, d !== void 0, e);
            else if (qb(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = ec(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function fc(a, b, c, d, e) {
        const f = d || c ? a[G] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        const g = F(a);
        for (let h = 0; h < g.length; h++) g[h] = ec(g[h], b, c, d, e);
        c && (xb(g, a), c(f, g));
        return g
    }

    function gc(a) {
        return a.O === nb ? a.toJSON() : cc(a)
    };

    function hc(a, b, c = mb) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[G] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[G] = (d | 34) & -12293, a) : fc(a, hc, d & 4 ? mb : c, !0, !0)
            }
            a.O === nb && (c = a.l, d = c[G], a = d & 2 ? a : ic(a, c, d, !0));
            return a
        }
    }

    function ic(a, b, c, d) {
        a = a.constructor;
        Tb = b = jc(b, c, d);
        b = new a(b);
        Tb = void 0;
        return b
    }

    function jc(a, b, c) {
        const d = c || b & 2 ? mb : lb,
            e = !!(b & 32);
        a = dc(a, b, f => hc(f, e, d));
        a[G] = a[G] | 32 | (c ? 2 : 0);
        return a
    }

    function kc(a) {
        const b = a.l,
            c = b[G];
        return c & 2 ? ic(a, b, c, !1) : a
    };

    function lc(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[jb] = (a.constructor[jb] | 0) + 1) < 5 && Db();
        return c === 0 ? !1 : !(c & b)
    }

    function I(a, b) {
        a = a.l;
        return mc(a, a[G], b)
    }

    function nc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function mc(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (nc(a, b, e, c) && ib != null && (a = Cb ? ? (Cb = {}), b = a[ib] || 0, b >= 4 || (a[ib] = b + 1, Db())), d) : nc(a, b, e, c)
        }
    }

    function J(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !ma) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[G] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function oc(a, b, c, d, e) {
        var f = b & 2;
        let g = mc(a, b, c, e);
        Array.isArray(g) || (g = tb);
        const h = !(d & 2);
        d = !(d & 1);
        const l = !!(b & 32);
        let k = g[G] | 0;
        k !== 0 || !l || f || h ? k & 1 || (k |= 1, g[G] = k) : (k |= 33, g[G] = k);
        f ? (a = !1, k & 2 || (g[G] |= 34, a = !!(4 & k)), (d || a) && Object.freeze(g)) : (f = !!(2 & k) || !!(2048 & k), d && f ? (g = F(g), d = 1, l && !h && (d |= 32), g[G] = d, J(a, b, c, g, e)) : h && k & 32 && !f && (a = g, a[G] &= -33));
        return g
    }

    function pc(a, b, c) {
        a = mc(a, b, c);
        return Array.isArray(a) ? a : tb
    }

    function qc(a, b) {
        a === 0 && (a = rc(a, b));
        return a | 1
    }

    function K(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function M(a, b, c, d) {
        const e = a.l;
        let f = e[G];
        vb(f);
        J(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function sc(a, b, c, d) {
        const e = a[G];
        vb(e);
        a = oc(a, e, b, 2);
        b = a[G] | 0;
        d = c(d, !!(4 & b) && !!(4096 & b));
        a.push(d)
    }

    function tc(a) {
        return a
    }

    function uc(a, b, c, d) {
        const e = a[kb] ? ? (a[kb] = new Map),
            f = vc(e, a, b, c);
        f !== d && (f && (b = J(a, b, f)), e.set(c, d));
        return b
    }

    function vc(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            mc(b, c, g) != null && (e !== 0 && (c = J(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function wc(a, b, c, d) {
        let e = a[G];
        const f = mc(a, e, c, d);
        let g;
        if (f != null && f.O === nb) return b = kc(f), b !== f && J(a, e, c, b, d), b.l;
        if (Array.isArray(f)) {
            const h = f[G] | 0;
            h & 2 ? g = jc(f, h, !1) : g = f;
            g = Xb(g, b[0], b[1])
        } else g = Xb(void 0, b[0], b[1]);
        g !== f && J(a, e, c, g, d);
        return g
    }

    function xc(a, b, c) {
        var d = a.l,
            e = d[G],
            f = mc(d, e, c, !1);
        b = Sb(f, b, e);
        b !== f && b != null && J(d, e, c, b, !1);
        d = b;
        if (d == null) return d;
        a = a.l;
        e = a[G];
        e & 2 || (f = kc(d), f !== d && (d = f, J(a, e, c, d, !1)));
        return d
    }

    function yc(a, b, c) {
        c == null && (c = void 0);
        a = a.l;
        let d = a[G];
        vb(d);
        J(a, d, b, c)
    }

    function rc(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function zc(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function Ac(a, b, c, d) {
        a = a.l;
        var e = a[G];
        vb(e);
        var f, g, h = !!(2 & e);
        const l = h ? 1 : 2;
        g && (g = !h);
        h = pc(a, e, b);
        var k = h[G] | 0,
            p = !!(4 & k);
        if (!p) {
            k = qc(k, e);
            var r = h,
                t = e,
                m = !!(2 & k);
            m && (t |= 2);
            let w = !m,
                v = !0,
                y = 0,
                z = 0;
            for (; y < r.length; y++) {
                const D = Sb(r[y], c, t);
                if (D instanceof c) {
                    if (!m) {
                        const L = !!((D.l[G] | 0) & 2);
                        w && (w = !L);
                        v && (v = L)
                    }
                    r[z++] = D
                }
            }
            z < y && (r.length = z);
            k |= 4;
            k = v ? k | 16 : k & -17;
            k = w ? k | 8 : k & -9;
            r[G] = k;
            m && Object.freeze(r)
        }
        if (g && !(8 & k || !h.length && (l === 1 || l === 4 && 32 & k))) {
            K(k) && (h = F(h), k = rc(k, e), e = J(a, e, b, h));
            g = h;
            r = k;
            for (k = 0; k < g.length; k++) t =
                g[k], m = kc(t), t !== m && (g[k] = m);
            r |= 8;
            r = g.length ? r & -17 : r | 16;
            k = g[G] = r
        }
        l === 1 || l === 4 && 32 & k ? K(k) || (b = k, k |= !h.length || 16 & k && (!p || 32 & k) ? 2 : 2048, k !== b && (h[G] = k), Object.freeze(h)) : (p = l !== 5 ? !1 : !!(32 & k) || K(k) || !!Zb ? .get(h), (l === 2 || p) && K(k) && (h = F(h), k = rc(k, e), k = zc(k, e, !0), h[G] = k, e = J(a, e, b, h)), K(k) || (b = k, k = zc(k, e, !0), k !== b && (h[G] = k)), p && (f = Yb(h)));
        f = f || h;
        c = d != null ? d : new c;
        f.push(c);
        f[G] = (c.l[G] | 0) & 2 ? f[G] & -9 : f[G] & -17
    }

    function Bc(a, b) {
        return a ? ? b
    }

    function P(a, b) {
        return Bc(Gb(I(a, b)), !1)
    }

    function Cc(a) {
        a = I(a, 1);
        var b;
        a == null ? b = a : Ib(a) ? typeof a === "number" ? b = Nb(a) : b = Ob(a) : b = void 0;
        return b ? ? 0
    }

    function Dc(a, b) {
        return Bc(Rb(I(a, b)), "")
    }

    function Q(a, b, c) {
        if (c != null) {
            var d = !!d;
            if (!Ib(c)) throw Eb("int64");
            typeof c === "string" ? c = Ob(c) : d ? (c = Math.trunc(c), Number.isSafeInteger(c) ? c = String(c) : (d = String(c), Mb(d) ? c = d : (Va(c), c = Wa()))) : c = Nb(c)
        }
        return M(a, b, c, "0")
    }

    function R(a, b, c) {
        if (c != null) {
            if (!Number.isFinite(c)) throw Eb("enum");
            c |= 0
        }
        return M(a, b, c, 0)
    };
    let Ec;
    var S = class {
        constructor(a, b) {
            this.l = Xb(a, b)
        }
        toJSON() {
            return Fc(this)
        }
    };
    S.prototype.O = nb;
    S.prototype.toString = function() {
        try {
            return Ec = !0, Fc(this).toString()
        } finally {
            Ec = !1
        }
    };

    function Fc(a) {
        var b = Ec ? a.l : fc(a.l, gc, void 0, void 0, !1);
        var c = !Ec;
        var d = la ? void 0 : a.constructor.I;
        var e = (c ? a.l : b)[G];
        if (a = b.length) {
            var f = b[a - 1],
                g = qb(f);
            g ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var h = b;
            if (g) {
                b: {
                    var l = f;
                    var k = {};g = !1;
                    if (l)
                        for (var p in l) {
                            if (!Object.prototype.hasOwnProperty.call(l, p)) continue;
                            if (isNaN(+p)) {
                                k[p] = l[p];
                                continue
                            }
                            let m = l[p];
                            Array.isArray(m) && (rb(m, d, +p) || pb(m) && m.size === 0) && (m = null);
                            m == null && (g = !0);
                            m != null && (k[p] = m)
                        }
                    if (g) {
                        for (var r in k) break b;
                        k = null
                    } else k = l
                }
                l = k == null ? f != null : k !==
                    f
            }
            for (var t; a > 0; a--) {
                r = a - 1;
                p = h[r];
                r -= e;
                if (!(p == null || rb(p, d, r) || pb(p) && p.size === 0)) break;
                t = !0
            }
            if (h !== b || l || t) {
                if (!c) h = Array.prototype.slice.call(h, 0, a);
                else if (t || l || k) h.length = a;
                k && h.push(k)
            }
            b = h
        }
        return b
    };

    function Gc(a) {
        return Array.isArray(a) ? a[0] instanceof E ? a : [Ic, a] : [a, void 0]
    }

    function Jc(a, b) {
        if (Array.isArray(b)) {
            var c = b[G] | 0;
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                const f = a(b[d]);
                f != null && (b[e++] = f)
            }
            e < d && (b.length = e);
            b[G] = (c | 5) & -12289;
            c & 2 && Object.freeze(b);
            return b
        }
    }

    function Kc(a, b) {
        return a instanceof S ? a.l : Array.isArray(a) ? Xb(a, b[0], b[1]) : void 0
    }
    const Lc = Symbol();

    function Mc(a) {
        let b = a[Lc];
        if (!b) {
            const c = Nc(a),
                d = Oc(a),
                e = d.i;
            b = e ? (f, g) => e(f, g, d) : (f, g) => {
                for (; g.j() && !g.i();) {
                    const l = g.G();
                    let k = d[l];
                    if (!k) {
                        var h = d.N;
                        h && (h = h[l]) && (k = d[l] = Pc(h))
                    }
                    k && k(g, f, l) || wb(f, g.v())
                }
                c === Qc || c === Rc || c.m || (f[yb || (yb = Symbol())] = c)
            };
            a[Lc] = b
        }
        return b
    }

    function Pc(a) {
        a = Gc(a);
        const b = a[0].g;
        if (a = a[1]) {
            const c = Mc(a),
                d = Oc(a).D;
            return (e, f, g) => b(e, f, g, d, c)
        }
        return b
    }
    class Sc {}
    let Qc, Rc;
    const Tc = Symbol();

    function Uc(a, b, c) {
        const d = c[1];
        let e;
        if (d) {
            const f = d[Tc];
            e = f ? f.D : Wb(d[0]);
            a[b] = f ? ? d
        }
        e && e === Ub ? (a.g || (a.g = new Set)).add(b) : c[0] && (a.h || (a.h = new Set)).add(b)
    }

    function Vc(a, b) {
        return [a.i, !b || b[0] > 0 ? void 0 : b]
    }

    function Nc(a) {
        var b = a[Tc];
        if (b) return b;
        b = Wc(a, a[Tc] = new Sc, Vc, Vc, Uc);
        if (!b.N && !b.h && !b.g) {
            let c = !0;
            for (let d in b) isNaN(d) || (c = !1);
            c ? (Wb(a[0]) === Ub ? Rc ? b = Rc : (b = new Sc, b.D = Wb(!0), b = Rc = b) : b = Qc || (Qc = new Sc), b = a[Tc] = b) : b.m = !0
        }
        return b
    }

    function Xc(a, b, c) {
        a[b] = c
    }

    function Wc(a, b, c, d, e = Xc) {
        b.D = Wb(a[0]);
        let f = 0;
        var g = a[++f];
        g && g.constructor === Object && (b.N = g, g = a[++f], typeof g === "function" && (b.i = g, b.j = a[++f], g = a[++f]));
        const h = {};
        for (; Array.isArray(g) && typeof g[0] === "number" && g[0] > 0;) {
            for (var l = 0; l < g.length; l++) h[g[l]] = g;
            g = a[++f]
        }
        for (l = 1; g !== void 0;) {
            typeof g === "number" && (l += g, g = a[++f]);
            let r;
            var k = void 0;
            g instanceof E ? r = g : (r = Yc, f--);
            if (r.Y) {
                g = a[++f];
                k = a;
                var p = f;
                typeof g == "function" && (g = g(), k[p] = g);
                k = g
            }
            g = a[++f];
            p = l + 1;
            typeof g === "number" && g < 0 && (p -= g, g = a[++f]);
            for (; l < p; l++) {
                const t = h[l];
                e(b, l, k ? d(r, k, t) : c(r, t))
            }
        }
        return b
    }
    const Zc = Symbol();

    function $c(a) {
        let b = a[Zc];
        if (!b) {
            const c = ad(a);
            b = (d, e) => bd(d, e, c);
            a[Zc] = b
        }
        return b
    }
    const cd = Symbol();

    function dd(a) {
        return a.h
    }

    function ed(a, b) {
        let c, d;
        const e = a.h;
        return (f, g, h) => e(f, g, h, d || (d = ad(b).D), c || (c = $c(b)))
    }

    function ad(a) {
        let b = a[cd];
        if (b) return b;
        b = Wc(a, a[cd] = {}, dd, ed);
        fd(a);
        return b
    }
    const gd = Symbol();

    function hd(a, b) {
        const c = a.g;
        return b ? (d, e, f) => c(d, e, f, b) : c
    }

    function id(a, b, c) {
        const d = a.g;
        let e, f;
        return (g, h, l) => d(g, h, l, f || (f = Oc(b).D), e || (e = Mc(b)), c)
    }

    function Oc(a) {
        let b = a[gd];
        if (b) return b;
        Nc(a);
        b = Wc(a, a[gd] = {}, hd, id);
        fd(a);
        return b
    }

    function fd(a) {
        gd in a && Tc in a && cd in a && (a.length = 0)
    }

    function jd(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.N)
            if (c = c[b]) {
                c = Gc(c);
                var d = c[0].h;
                if (c = c[1]) {
                    const e = $c(c),
                        f = ad(c).D;
                    c = (c = a.j) ? c(f, e) : (g, h, l) => d(g, h, l, f, e)
                } else c = d;
                return a[b] = c
            }
    }

    function bd(a, b, c) {
        for (var d = a[G], e = +!!(d & 512) - 1, f = a.length, g = d & 512 ? 1 : 0, h = f + (d & 256 ? -1 : 0); g < h; g++) {
            const l = a[g];
            if (l == null) continue;
            const k = g - e,
                p = jd(c, k);
            p && p(b, l, k)
        }
        if (d & 256) {
            d = a[f - 1];
            for (let l in d) Object.prototype.hasOwnProperty.call(d, l) && (e = +l, Number.isNaN(e) || (f = d[l], f != null && (h = jd(c, e)) && h(b, f, e)))
        }
        if (a = H ? a[H] : void 0)
            for (eb(b, b.g.end()), c = 0; c < a.length; c++) eb(b, a[c].g(Sa) || new Uint8Array(0))
    }

    function kd(a, b) {
        return new E(a, b, !1, !1)
    }

    function ld(a, b, c) {
        J(a, a[G], b, c)
    }

    function md(a, b, c) {
        a: if (b != null) {
            if (Ib(b)) {
                if (typeof b === "string") {
                    b = Ob(b);
                    break a
                }
                if (typeof b === "number") {
                    b = Nb(b);
                    break a
                }
            }
            b = void 0
        }b != null && (typeof b === "string" && Ya(b), b != null && (C(a, c, 0), typeof b === "number" ? (a = a.g, Va(b), ab(a, B, Ta)) : (c = Ya(b), ab(a.g, c.h, c.g))))
    }

    function nd(a, b, c, d, e) {
        b = Kc(b, d);
        b != null && (c = fb(a, c), e(b, a), gb(a, c))
    }
    var od = kd(function(a, b, c) {
            if (a.g() !== 0) return !1;
            ld(b, c, a.m());
            return !0
        }, md),
        T = kd(function(a, b, c) {
            if (a.g() !== 0) return !1;
            a = a.m();
            ld(b, c, a === 0 ? void 0 : a);
            return !0
        }, md),
        pd;
    pd = new E(function(a, b, c) {
        if (a.g() !== 0 && a.g() !== 2) return !1;
        var d = a.R;
        b = oc(b, b[G], c, 2, !1);
        d.call(a, b);
        return !0
    }, function(a, b, c) {
        b = Jc(Kb, b);
        if (b != null && b.length) {
            c = fb(a, c);
            for (let d = 0; d < b.length; d++) cb(a.g, b[d]);
            gb(a, c)
        }
    }, !0, !1);
    var qd = kd(function(a, b, c) {
            if (a.g() !== 0) return !1;
            a = a.L();
            ld(b, c, a === 0 ? void 0 : a);
            return !0
        }, function(a, b, c) {
            b = Kb(b);
            b != null && b != null && (C(a, c, 0), cb(a.g, b))
        }),
        rd = kd(function(a, b, c) {
            if (a.g() !== 5) return !1;
            ld(b, c, a.K());
            return !0
        }, function(a, b, c) {
            b = Lb(b);
            b != null && (C(a, c, 5), a = a.g, a.g.push(b >>> 0 & 255), a.g.push(b >>> 8 & 255), a.g.push(b >>> 16 & 255), a.g.push(b >>> 24 & 255))
        }),
        U = kd(function(a, b, c) {
            if (a.g() !== 0) return !1;
            a = a.H();
            ld(b, c, a === !1 ? void 0 : a);
            return !0
        }, function(a, b, c) {
            b = Gb(b);
            b != null && (C(a, c, 0), a.g.g.push(b ? 1 : 0))
        }),
        sd;
    sd = new E(function(a, b, c) {
        if (a.g() !== 2) return !1;
        a = a.u();
        sc(b, c, tc, a);
        return !0
    }, function(a, b, c) {
        b = Jc(Rb, b);
        if (b != null)
            for (let g = 0; g < b.length; g++) {
                var d = a,
                    e = c,
                    f = b[g];
                f != null && (f = ha(f), C(d, e, 2), bb(d.g, f.length), eb(d, d.g.end()), eb(d, f))
            }
    }, !0, !1);
    var td = kd(function(a, b, c) {
            if (a.g() !== 2) return !1;
            a = a.u();
            ld(b, c, a === "" ? void 0 : a);
            return !0
        }, function(a, b, c) {
            b = Rb(b);
            b != null && (b = ha(b), C(a, c, 2), bb(a.g, b.length), eb(a, a.g.end()), eb(a, b))
        }),
        Ic = new E(function(a, b, c, d, e) {
            if (a.g() !== 2) return !1;
            a.h(wc(b, d, c, !0), e);
            return !0
        }, nd, !1, !0),
        Yc = new E(function(a, b, c, d, e) {
            if (a.g() !== 2) return !1;
            a.h(wc(b, d, c), e);
            return !0
        }, nd, !1, !0),
        ud;
    ud = new E(function(a, b, c, d, e) {
        if (a.g() !== 2) return !1;
        var f = a.h;
        d = Xb(void 0, d[0], d[1]);
        let g = b[G];
        vb(g);
        let h = oc(b, g, c, 3);
        g = b[G];
        (h[G] | 0) & 4 && (h = F(h), h[G] = (h[G] | 1) & -2079, J(b, g, c, h));
        h.push(d);
        f.call(a, d, e);
        return !0
    }, function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (let f = 0; f < b.length; f++) nd(a, b[f], c, d, e)
    }, !0, !0);
    var vd = new E(function(a, b, c, d, e, f) {
            if (a.g() !== 2) return !1;
            var g = a.h;
            uc(b, b[G], f, c);
            b = wc(b, d, c);
            g.call(a, b, e);
            return !0
        }, nd, !1, !0),
        wd = kd(function(a, b, c) {
            if (a.g() !== 0) return !1;
            a = a.J();
            ld(b, c, a === 0 ? void 0 : a);
            return !0
        }, function(a, b, c) {
            b = Kb(b);
            b != null && (b = parseInt(b, 10), C(a, c, 0), cb(a.g, b))
        });

    function V(a) {
        return function() {
            const b = new hb;
            bd(this.l, b, ad(a));
            eb(b, b.g.end());
            const c = new Uint8Array(b.h),
                d = b.i,
                e = d.length;
            let f = 0;
            for (let g = 0; g < e; g++) {
                const h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.i = [c];
            return c
        }
    };

    function xd(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function yd(a) {
        function b() {
            d = n.setTimeout(c, 1E3);
            let g = f;
            f = [];
            a.apply(void 0, g)
        }

        function c() {
            d = 0;
            e && (e = !1, b())
        }
        let d = 0,
            e = !1,
            f = [];
        return function(g) {
            f = arguments;
            d ? e = !0 : b()
        }
    };
    var zd = xd(function() {
        let a = !1;
        try {
            const b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            n.addEventListener("test", null, b)
        } catch (b) {}
        return a
    });

    function Ad(a) {
        return a ? a.passive && zd() ? a : a.capture || !1 : !1
    }

    function Bd(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Ad(d))
    }

    function Cd(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, Ad())
    };

    function Dd(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return c
    }

    function Ed(a) {
        for (const b in a) delete a[b]
    };
    var Fd;
    var Gd = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g + ""
            }
        },
        Hd = {};

    function Id(a) {
        if (Fd === void 0) {
            var b = null;
            var c = n.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: da,
                        createScript: da,
                        createScriptURL: da
                    })
                } catch (d) {
                    n.console && n.console.error(d.message)
                }
                Fd = b
            } else Fd = b
        }
        a = (b = Fd) ? b.createScriptURL(a) : a;
        return new Gd(a, Hd)
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Jd(a, ...b) {
        if (b.length === 0) return Id(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Id(c)
    };

    function Kd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Ld(a) {
        return Kd.apply(null, arguments) / arguments.length
    };

    function Md(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    Md.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Md.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Md.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Nd(a, b) {
        this.width = a;
        this.height = b
    }
    Nd.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Nd.prototype.isEmpty = function() {
        return !(this.width * this.height)
    };
    Nd.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Nd.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Nd.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Od(a, b) {
        for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling;
        return a
    }

    function Pd(a) {
        var b;
        if (Ha && (b = a.parentElement)) return b;
        b = a.parentNode;
        a = typeof b;
        return (a == "object" && b != null || a == "function") && b.nodeType == 1 ? b : null
    }

    function Qd(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }

    function Rd(a) {
        var b = Sd;
        a && (a = a.parentNode);
        for (var c = 0; a && c <= 6;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Td(a) {
        this.g = a || n.document || document
    }
    Td.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Ud = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Vd(a) {
        return a ? decodeURI(a) : a
    };

    function Wd(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Fa(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function Xd(a) {
        return Wd(a.top) ? a.top : null
    }

    function Yd(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Zd(a, b) {
        return Dd(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    }

    function $d(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var ae = a => {
        a = a && a.toString && a.toString();
        return typeof a === "string" && a.indexOf("[native code]") != -1
    };

    function be(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function ce(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        const c = be("IMG", a.document);
        c.src = b;
        a.google_image_requests.push(c)
    };

    function de(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    de.prototype.contains = function(a) {
        return a instanceof Md ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    de.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    de.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    de.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var ee = !! function(a = n) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }() && n != n.top;

    function fe(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function ge(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Ha && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = fe(a), new Nd(a.right - a.left, a.bottom - a.top)) : new Nd(b, c)
    };
    class he {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const ie = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var je = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        ke = class {
            constructor(a, b) {
                this.url = a;
                this.W = !!b;
                this.depth = null
            }
        };
    let le = null;

    function me() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function ne() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var oe = class {
        constructor(a, b, c, d = 0) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = d;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const W = n.performance,
        pe = !!(W && W.mark && W.measure && W.clearMarks),
        qe = xd(() => {
            var a;
            if (a = pe) {
                var b;
                if (le === null) {
                    le = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (le = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = le;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function re(a) {
        a && W && qe() && (W.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), W.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function se(a, b, c, d, e = 0) {
        a.h && a.G(new oe(b, c, d, e))
    }

    function te(a, b) {
        if (a.h) {
            var c = a.start("243", 3);
            try {
                b()
            } catch (d) {
                throw re(c), d;
            }
            a.end(c)
        } else b()
    }
    class ue {
        constructor(a) {
            this.m = [];
            this.g = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.m = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = qe() || (b != null ? b : Math.random() < 1)
        }
        C() {
            this.h = !1;
            this.m != this.g.google_js_reporting_queue && (qe() && x(this.m, re), this.m.length = 0)
        }
        G(a) {
            !this.h || this.m.length > 2048 || this.m.push(a)
        }
        start(a, b) {
            if (!this.h) return null;
            a = new oe(a, b, ne() || me());
            b = `goog_${a.label}_${a.uniqueId}_start`;
            W && qe() && W.mark(b);
            return a
        }
        end(a) {
            if (this.h &&
                typeof a.value === "number") {
                a.duration = (ne() || me()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                W && qe() && W.mark(b);
                this.G(a)
            }
        }
    };

    function ve(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function we(a, b, c, d, e) {
        const f = [];
        Yd(a, function(g, h) {
            (g = xe(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function xe(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(xe(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(we(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ye(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function ze(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = ye(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let k = we(h[l], a.i, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.i;
                        break
                    }
                    b = b == null ? g : b
                }
            }
        }
        a = "";
        b != null && (a = e + "trn=" + b);
        return c + a
    }
    class Ae {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function Fe(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (d) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    }
    var Ie = class {
        constructor(a = null) {
            this.m = Ge;
            this.h = a;
            this.i = null;
            this.j = !1;
            this.C = this.g
        }
        u(a) {
            this.i = a
        }
        v(a) {
            this.j = a
        }
        P(a, b) {
            let c, d;
            try {
                this.h && this.h.h ? (d = this.h.start(a.toString(), 3), c = b(), this.h.end(d)) : c = b()
            } catch (e) {
                b = !0;
                try {
                    re(d), b = this.C(a, new he(e, {
                        message: Fe(e)
                    }), void 0, void 0)
                } catch (f) {
                    this.g(217, f)
                }
                if (b) window.console ? .error ? .(e);
                else throw e;
            }
            return c
        }
        X(a, b) {
            return (...c) => this.P(a, () => b.apply(void 0, c))
        }
        g(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const N = new Ae;
                var g = N;
                g.g.push(1);
                g.h[1] = ve("context",
                    a);
                b.error && b.meta && b.id || (b = new he(b, {
                    message: Fe(b)
                }));
                if (b.msg) {
                    g = N;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = ve("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.i) try {
                    this.i(b)
                } catch (O) {}
                if (d) try {
                    d(b)
                } catch (O) {}
                d = N;
                l = [l];
                d.g.push(3);
                d.h[3] = l;
                d = n;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Wd(k)) {
                        var p = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else p = b, b = null;
                    l.push(new ke(p || ""));
                    try {
                        d = k.parent
                    } catch (O) {
                        d = null
                    }
                } while (d && k != d);
                for (let O = 0, Ma = l.length - 1; O <= Ma; ++O) l[O].depth = Ma - O;
                k = n;
                if (k.location && k.location.ancestorOrigins &&
                    k.location.ancestorOrigins.length == l.length - 1)
                    for (p = 1; p < l.length; ++p) {
                        var r = l[p];
                        r.url || (r.url = k.location.ancestorOrigins[p - 1] || "", r.W = !0)
                    }
                var t = l;
                let za = new ke(n.location.href, !1);
                k = null;
                const qa = t.length - 1;
                for (r = qa; r >= 0; --r) {
                    var m = t[r];
                    !k && ie.test(m.url) && (k = m);
                    if (m.url && !m.W) {
                        za = m;
                        break
                    }
                }
                m = null;
                const sb = t.length && t[qa].url;
                za.depth != 0 && sb && (m = t[qa]);
                f = new je(za, m);
                if (f.h) {
                    t = N;
                    var w = f.h.url || "";
                    t.g.push(4);
                    t.h[4] = ve("top", w)
                }
                var v = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var y = f.g.url.match(Ud),
                        z = y[1],
                        D = y[3],
                        L = y[4];
                    w = "";
                    z && (w += z + ":");
                    D && (w += "//", w += D, L && (w += ":" + L));
                    var ra = w
                } else ra = "";
                z = N;
                v = [v, {
                    url: ra
                }];
                z.g.push(5);
                z.h[5] = v;
                He(this.m, e, N, this.j, c)
            } catch (N) {
                try {
                    He(this.m, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Fe(N),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (za) {}
            }
            return !0
        }
    };
    var Je = [0, od, rd, -1];
    (class extends S {
        constructor(a) {
            super(a)
        }
    }).prototype.o = V(Je);
    var Ke = {};
    (class extends S {
        constructor(a) {
            super(a, 1)
        }
    }).prototype.o = V([-1, Ke, function(a, b, c) {
        const d = c.N;
        for (; b.j() && !b.i();)
            if (b.F()) {
                const e = b.C();
                let f = !1;
                b.M((g, h) => {
                    let l = c[g];
                    if (!l) {
                        const k = d[g];
                        if (k) {
                            const p = Mc(k),
                                r = Oc(k).D;
                            l = c[g] = (t, m, w) => p(wc(m, r, w, !0), t)
                        }
                    }
                    l ? l(h, a, g) : (f = !0, h.T())
                });
                f && wb(a, b.S(e))
            } else wb(a, b.v())
    }, function(a, b) {
        return (c, d, e) => {
            d = Kc(d, a);
            d != null && (C(c, 1, 3), C(c, 2, 0), cb(c.g, e), e = fb(c, 3), b(d, c), gb(c, e), C(c, 1, 4))
        }
    }]);
    Ke[4156379] = Je;
    (class extends S {
        constructor(a) {
            super(a, 1)
        }
    }).prototype.o = V([-1, {}]);
    class Le {};

    function He(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Ae ? f = c : (f = new Ae, Yd(c, (h, l) => {
                var k = f;
                const p = k.j++;
                h = ve(l, h);
                k.g.push(p);
                k.h[p] = h
            }));
            const g = ze(f, "/pagead/gen_204?id=" + b + "&");
            g && ce(n, g)
        } catch (f) {}
    }

    function Me() {
        var a = Ge,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Ne {
        constructor() {
            this.g = Math.random()
        }
    };
    let Ge, Oe;
    const Pe = new ue(window);
    (a => {
        Ge = a ? ? new Ne;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Me();
        Oe = new Ie(Pe);
        Oe.u(() => {});
        Oe.v(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || Pe.C() : Pe.h && Bd(window, "load", () => {
            window.google_measure_js_timing || Pe.C()
        })
    })();
    var Qe = (a, b) => Oe.X(a, b);
    var Re = class extends S {
            constructor(a) {
                super(a)
            }
        },
        Se = [0, wd, -1, td, -2, U];
    Re.prototype.o = V(Se);
    var Te = class extends S {
        constructor() {
            super()
        }
    };
    Te.I = [2];
    var Ue = [0, wd, ud, Se];
    Te.prototype.o = V(Ue);
    var Ve = class extends S {
            constructor(a) {
                super(a)
            }
            getName() {
                return Dc(this, 1)
            }
        },
        We = [5],
        Xe = [0, We, td, wd, T, -1, vd, Ue];
    Ve.prototype.o = V(Xe);
    var Ye = class extends S {
        constructor() {
            super()
        }
    };
    Ye.I = [1];
    Ye.prototype.o = V([0, ud, Xe]);
    class Ze {
        constructor() {
            var a = Jd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.h = null;
            this.i = !1;
            this.m = Math.random();
            this.j = this.g;
            this.C = a
        }
        u(a) {
            this.h = a
        }
        v(a) {
            this.i = a
        }
        g(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.m : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new he(b, {
                context: a,
                id: e
            }));
            if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
            n.google_js_errors = n.google_js_errors || [];
            n.google_js_errors.push(b);
            n.error_rep_loaded || (b = n.document, a = be("SCRIPT", b), c = this.C, a.src =
                c instanceof Gd && c.constructor === Gd ? c.g : "type_error:TrustedResourceUrl", (void 0) ? .Fa || (c = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? c.nonce || c.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b), n.error_rep_loaded = !0);
            return !1
        }
        P(a, b) {
            try {
                return b()
            } catch (c) {
                if (!this.j(a, c, .01, void 0, "jserror")) throw c;
            }
        }
        X(a, b) {
            return (...c) => this.P(a, () => b.apply(void 0,
                c))
        }
    };

    function $e(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };

    function af(a) {
        var b;
        void 0 === zb ? b = 2 : b = 2;
        var c = a.l,
            d = c[G];
        const e = 2 & d ? 1 : b;
        b = pc(c, d, 15);
        var f = b[G] | 0;
        if (lc(a, f, void 0, !1)) {
            if (4 & f || Object.isFrozen(b)) b = F(b), f = rc(f, d), d = J(c, d, 15, b);
            let h = a = 0;
            for (; a < b.length; a++) {
                const l = Kb(b[a]);
                l != null && (b[h++] = l)
            }
            h < a && (b.length = h);
            f = qc(f, d);
            f = (f | 20) & -4097;
            f &= -8193;
            b[G] = f;
            2 & f && Object.freeze(b)
        }
        let g;
        e === 1 || e === 4 && 32 & f ? K(f) || (d = f, f |= 2, f !== d && (b[G] = f), Object.freeze(b)) : (a = e !== 5 ? !1 : !!(32 & f) || K(f) || !!Zb ? .get(b), (e === 2 || a) && K(f) && (b = F(b), f = rc(f, d), f = zc(f, d, !1), b[G] = f,
            d = J(c, d, 15, b)), K(f) || (c = f, f = zc(f, d, !1), f !== c && (b[G] = f)), a && (g = Yb(b)));
        return g || b
    }
    var bf = class extends S {
        constructor(a) {
            super(a)
        }
    };
    bf.I = [15];
    var cf = [0, U, -1, qd, U, -1, 1, U, -3, 1, U, -2, pd, U, 1, U, -1];
    bf.prototype.o = V(cf);
    var df = class extends S {
            constructor(a) {
                super(a)
            }
            getCorrelator() {
                return Cc(this)
            }
            setCorrelator(a) {
                return Q(this, 1, a)
            }
        },
        ef = [0, T, wd, td, -2, T];
    df.prototype.o = V(ef);
    var ff = class extends S {
        constructor() {
            super(n.google_rum_config || null)
        }
    };
    ff.prototype.o = V([0, ef, cf]);
    var gf = a => a._google_rum_ns_ = a._google_rum_ns_ || {},
        hf = a => {
            a = gf(a);
            return a.pq = a.pq || []
        };
    var jf = () => {
            if (!n._google_rum_ns_) return !1;
            const a = gf(n);
            return !(!a.raf || !a.ric)
        },
        kf = () => {
            const a = gf(n);
            a.raf = a.raf || [];
            a.ric = a.ric || [];
            return {
                ma: a.raf,
                na: a.ric
            }
        };

    function lf(a, b, c) {
        Yd(b, (d, e) => {
            const f = c && c[e];
            !d && d !== 0 || f || (a += `&${encodeURIComponent(e)}=${encodeURIComponent(String(d))}`, c && (c[e] = !0))
        });
        return a
    }

    function mf(a, b) {
        let c = `${a}`;
        Yd(b, (d, e) => {
            d != null && (c += `.${e}_${d}`)
        });
        return c
    }

    function X(a, b, c) {
        c = String(c);
        a.j = a.u[b] != null ? a.j + (c.length - a.u[b].length) : a.j + (b.length + c.length + 2);
        a.u[b] = c
    }

    function Y(a) {
        if (a.h) {
            try {
                a.i && (a.sendBeacon(a.v), a.F === a.S && a.C())
            } catch (b) {
                (new Ze).g(358, b)
            }
            a.v = {};
            a.i = 0;
            a.m.length = 0;
            a.g.clearTimeout(a.H);
            a.H = 0
        }
    }

    function nf(a, b) {
        const c = `met.${b.type}`,
            d = typeof b.value === "number" ? Math.round(b.value).toString(36) : b.value,
            e = Math.round(b.duration);
        b = `${b.label}` + (b.slotId != null ? `_${b.slotId}` : "") + `.${d}` + (e > 0 ? `_${e.toString(36)}` : "") + (b.taskId != null ? `__${Math.round(b.taskId).toString(36)}` : ""); of (a, c, b, !0, "~")
    }

    function pf(a) {
        a.g.document.readyState === "complete" ? a.g.setTimeout(() => {
            Y(a)
        }, 0) : Bd(a.g, "load", a.T);
        const b = $e(a.g.document);
        typeof b !== "undefined" && Bd(a.g, b, a.Z);
        Bd(a.g, "pagehide", a.U)
    }

    function qf(a, b) {
        a.J.push(b)
    }

    function of (a, b, c, d, e = "") {
        let f = rf(a, b, c, d, e);
        a.j + a.i + f > 8E3 && (Y(a), f = b.length + c.length + 2);
        sf(a, b, c, d, e);
        a.i += f;
        a.j + a.i >= 6E3 && Y(a)
    }

    function tf(a, b) {
        const c = `${"ec"}=${b}`;
        a.L[c] || ( of (a, "ec", b, !1), c.length < 1E3 && (a.L[c] = !0))
    }

    function rf(a, b, c, d, e = "") {
        return a.v[b] == null ? b.length + c.length + 2 : d ? c.length + e.length : c.length - a.v[b].length
    }

    function sf(a, b, c, d, e = "") {
        a.v[b] = d && a.v[b] != null ? a.v[b] + `${e}${c}` : c
    }

    function uf(a, b) {
        let c = `${"https:"}//${a.domain}${a.path}${"csi_pagead"}`;
        const d = {};
        c = lf(c, a.u, d);
        c = lf(c, b, d);
        b = a.g;
        b.google_timing_params && (c = lf(c, b.google_timing_params, d), b.google_timing_params = void 0);
        x(a.K, e => {
            const [f, g] = e;
            c = lf(c, {
                [f]: g
            })
        });
        a.K.length = 0;
        return c
    }

    function vf(a, b, c, d = !1, e = "~") { of (a, `met.${b}`, c, d, e)
    }
    var wf = class extends ue {
        constructor(a = Infinity) {
            super();
            this.domain = "csi.gstatic.com";
            this.path = "/csi?v=2&s=pagead&action=";
            this.F = 0;
            this.u = {};
            this.L = {};
            this.J = [];
            this.v = {};
            this.i = 0;
            this.K = [];
            this.S = a;
            a = this.g.navigator;
            this.R = !(this.domain !== "csi.gstatic.com" || !a || !a.sendBeacon);
            this.g.performance && this.g.performance.now || X(this, "dat", 1);
            a && a.deviceMemory && X(this, "dmc", a.deviceMemory);
            this.g === this.g.top && X(this, "top", 1);
            this.T = () => {
                this.g.setTimeout(() => {
                    Y(this)
                }, 1100)
            };
            this.U = () => {
                X(this, "uet",
                    2);
                for (var c of this.J) try {
                    c()
                } catch (f) {}
                c = this.g;
                var d = {};
                let e;
                typeof window.CustomEvent === "function" ? e = new CustomEvent("rum_blp", d) : (e = document.createEvent("CustomEvent"), e.initCustomEvent("rum_blp", !!d.bubbles, !!d.cancelable, d.detail));
                c.dispatchEvent(e);
                Y(this);
                this.u.uet != null && (this.j -= this.u.uet.length + 5, delete this.u.uet)
            };
            this.M = yd(() => {
                Y(this)
            });
            this.Z = () => {
                var c = this.g.document;
                (c.hidden != null ? c.hidden : c.mozHidden != null ? c.mozHidden : c.webkitHidden != null && c.webkitHidden) && this.M()
            };
            this.H =
                this.g.setTimeout(() => {
                    Y(this)
                }, 5E3);
            this.j = 59;
            x(this.m, c => {
                nf(this, c)
            });
            a = hf(this.g);
            const b = (...c) => {
                var d = c[0];
                c = d[0];
                d = d[1];
                const e = c.length + d.length + 2;
                this.j + this.i + e > 8E3 && Y(this);
                this.K.push([c, d]);
                this.i += e;
                this.j + this.i >= 6E3 && Y(this);
                return 0
            };
            x(a, c => b(c));
            a.length = 0;
            a.push = b;
            X(this, "puid", `${(this.F+1).toString(36)}~${Date.now().toString(36)}`);
            pf(this)
        }
        sendBeacon(a) {
            this.F++;
            a = uf(this, a);
            let b = !1;
            try {
                b = !!(this.R && this.g.navigator && this.g.navigator.sendBeacon(a, null))
            } catch (c) {
                this.R = !1
            }
            b ||
                ce(this.g, a);
            X(this, "puid", `${(this.F+1).toString(36)}~${Date.now().toString(36)}`)
        }
        G(a) {
            this.h && this.F < this.S && (super.G(a), nf(this, a))
        }
        C() {
            super.C();
            this.g.clearTimeout(this.H);
            this.i = this.H = 0;
            this.v = {};
            Ed(this.L);
            Ed(this.u);
            Cd(this.g, "load", this.T);
            Cd(this.g, "pagehide", this.U)
        }
    };
    const xf = {
            self: 1,
            "same-origin-ancestor": 2,
            "same-origin-descendant": 3,
            "same-origin": 4,
            "cross-origin-ancestor": 5,
            "cross-origin-descendant": 6,
            "cross-origin-unreachable": 7,
            "multiple-contexts": 8
        },
        yf = {
            script: 1,
            layout: 2
        },
        zf = {
            iframe: 1,
            embed: 2,
            object: 3
        },
        Af = a => {
            const b = new Te;
            R(b, 1, xf[a.name]);
            x(a.attribution, c => {
                const d = new Re;
                R(d, 1, yf[c.name]);
                R(d, 2, zf[c.containerType]);
                typeof c.containerId === "string" && M(d, 6, Fb(c.containerId.lastIndexOf("google_ads_iframe", 0) == 0), !1);
                Ac(b, 2, Re, d)
            });
            return b
        },
        Bf = (a, b) => {
            b =
                Na(b.o());
            b = mf(6, {
                [1]: b
            });
            a.sendBeacon({
                ["met.6"]: b
            })
        };
    var Cf = (a, b) => {
        if (b.PerformanceLongTaskTiming && b.PerformanceObserver) {
            var c = 0;
            (new b.PerformanceObserver(Qe(246, (d, e) => {
                const f = new Ye;
                x(d.getEntries(), g => {
                    const h = new Ve;
                    Q(h, 3, Math.round(g.startTime));
                    Q(h, 4, Math.round(g.duration));
                    g = Af(g);
                    g == null && (g = void 0);
                    a: {
                        const l = h.l;
                        let k = l[G];vb(k);
                        if (g == null) {
                            const p = l[kb] ? ? (l[kb] = new Map);
                            if (vc(p, l, k, We) === 5) p.set(We, 0);
                            else break a
                        } else k = uc(l, k, We, 5);J(l, k, 5, g)
                    }
                    Ac(f, 1, Ve, h)
                });
                Bf(a, f);
                ++c >= 10 && e.disconnect()
            }))).observe({
                type: "longtask",
                buffered: !0
            })
        }
    };
    var Df = class extends S {
            constructor() {
                super()
            }
        },
        Ef = [0, td, T];
    Df.prototype.o = V(Ef);
    var Ff = class extends S {
        constructor() {
            super()
        }
    };
    Ff.I = [3];
    Ff.prototype.o = V([0, td, U, ud, Ef, T]);

    function Gf(a, b, c = 0) {
        var d = a.g !== a.g.top,
            e = b.slice(a.h);
        b = e.splice(0, 250 - a.h);
        if (d && a.i && b) {
            d = new Ff;
            d = M(d, 1, Qb(a.j), ""); {
                e = M(d, 2, Fb(!!e.length), !1);
                d = b;
                const m = e.l;
                let w = m[G];
                vb(w);
                if (d == null) J(m, w, 3);
                else {
                    d = bc ? .get(d) || d;
                    var f = d[G] | 0,
                        g = f,
                        h = !!(2 & f) || !!(2048 & f),
                        l = h || Object.isFrozen(d),
                        k = !l && (void 0 === Ab || !1),
                        p = !0,
                        r = !0;
                    for (let v = 0; v < d.length; v++) {
                        var t = d[v];
                        h || (t = !!((t.l[G] | 0) & 2), p && (p = !t), r && (r = t))
                    }
                    h || (f |= 5, f = p ? f | 8 : f & -9, f = r ? f | 16 : f & -17);
                    if (k || l && f !== g) d = F(d), g = 0, f = rc(f, w), f = zc(f, w, !0);
                    f !== g && (d[G] =
                        f);
                    J(m, w, 3, d)
                }
            }
            c = Q(e, 4, c);
            c = Na(c.o());
            try {
                a.i && a.g.navigator ? .sendBeacon("https://pagead2.googlesyndication.com/pagead/gen_204?id=urind", c)
            } catch (m) {
                a.i = !1
            }
            a.h += b.length
        }
    }
    var Hf = class {
        constructor(a, b = n) {
            this.j = a;
            this.g = b;
            this.h = 0;
            this.i = this.g.navigator ? .sendBeacon != null
        }
    };

    function If({
        position: a,
        timestamp: b
    }) {
        return `${Math.round(a).toString(36)}.${Math.round(b).toString(36)}`
    }

    function Jf(a) {
        var b = n.pageYOffset || 0;
        const c = ne() || 0;
        if (Math.abs(b - a.i) > 100 || c - a.j > 200) a.i = b, a.j = c, a.g.push({
            position: b,
            timestamp: c
        }) >= 400 && (Kf(a), a.m >= 8 && (Cd(n, "scroll", a.v), b = a.h.J, a = ua(b, a.u), a >= 0 && Array.prototype.splice.call(b, a, 1)))
    }

    function Kf(a) {
        a.g.length && (vf(a.h, 12, wa(a.g, If).join("~")), a.g = [], a.m++)
    }
    class Lf {
        constructor(a) {
            this.i = -1;
            this.j = -Infinity;
            this.g = [];
            this.h = a;
            this.m = 0;
            this.v = Qe(456, () => Jf(this));
            this.u = () => Kf(this)
        }
        install() {
            n.performance && (Jf(this), Bd(n, "scroll", this.v, {
                passive: !0
            }), qf(this.h, this.u))
        }
    };

    function Mf(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    const Nf = a => {
        const b = Mf(a);
        return b ? va(wa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
    };
    var Of = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };

    function Pf(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    };

    function Qf(a, b) {
        const c = (ka && q ? q.mobile : !(ka && q ? !q.mobile && (u("iPad") || u("Android") || u("Silk")) : u("iPad") || u("Android") && !u("Mobile") || u("Silk")) && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))) && !((Pf(a.i).clientWidth ? ? void 0) >= 900),
            d = va([], e => ua(a.h, e) >= 0).join(",");
        return {
            wpc: "",
            su: b,
            eid: d,
            doc: a.g.ia,
            pg_h: Z(a.g.ua),
            pg_w: Z(a.g.wa),
            pg_hs: Z(a.g.va),
            c: Z(a.g.pa),
            aa_c: Z(a.g.ca),
            av_h: Z(a.g.ea),
            av_w: Z(a.g.fa),
            av_a: Z(a.g.da),
            s: Z(a.g.ta),
            all_s: Z(a.g.sa),
            b: Z(a.g.ra),
            all_b: Z(a.g.qa),
            d: Z(a.g.ha),
            all_d: Z(a.g.ga),
            ard: Z(a.g.ba),
            all_ard: Z(a.g.aa),
            pd_h: Z(a.g.xa),
            dt: c ? "m" : "d"
        }
    }
    class Rf {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.h = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function Sf(a) {
        return Ld.apply(null, va(a, b => b > 0)) || null
    }

    function Tf(a, b) {
        return a <= 0 ? null : Kd.apply(null, b) / a
    }

    function Uf(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }

    function Z(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Vf(a, b) {
        var c = navigator;
        c = c.getBattery && c.getBattery();
        c ? .then ? c.then(d => {
            const e = d.level,
                f = d.charging;
            setTimeout(() => {
                b(e * 100 | 0, d.level * 100 | 0, f || d.charging)
            }, a)
        }) : b()
    };
    const Wf = /^.+\.((googlesyndication|googletagservices)\.com|doubleclick\.net)$/,
        Xf = /^(aswift_\d+|google_ads_iframe_.+)$/,
        Yf = /^div-gpt-ad-.+$/,
        Zf = ["ZGl2LnRhYm9vbGE=", "ZGl2Lk9VVEJSQUlO"];

    function $f(a) {
        if (!a) return "";
        const b = Math.floor(Math.random() * a.length);
        return `${`${b.toString(36)}`+`${encodeURIComponent(a.charAt(b))}`}.${$d(a).toString(36)}`
    }

    function ag(a) {
        return (a = Vd(ja(a).match(Ud)[3] || null)) ? a.toLowerCase() : ""
    }

    function bg(a) {
        return a.offsetWidth >= 10 && a.offsetHeight >= 10
    }

    function Sd(a) {
        return a && a.nodeType === 1 && a.nodeName === "DIV" ? Yf.test(a.id) || a.hasAttribute("data-google-query-id") : !1
    }

    function cg(a) {
        const b = [];
        if (!a.body) return b;
        const c = a.body;
        a = c.getElementsByTagName("script");
        const d = a.length;
        for (let g = 0; g < d; g++) {
            var e = a[g],
                f = e.src;
            f && (e = (e.nextElementSibling !== void 0 ? e.nextElementSibling : Od(e.nextSibling, !0)) || Pd(e)) && e.nodeName === "DIV" && bg(e) && (f = ag(f)) && !Wf.test(f) && b.push(new dg(e, f))
        }
        if (!c.querySelectorAll) return b;
        x(Zf, g => {
            const h = c.querySelectorAll(Pa(g)),
                l = h.length;
            for (let k = 0; k < l; k++) {
                const p = h[k];
                bg(p) && b.push(new dg(p, g))
            }
        });
        return b
    }

    function eg(a) {
        a = Xd(a);
        if (!a) return null;
        var b = a.document;
        a = cg(b);
        const c = [];
        ya(c, b.getElementsByTagName("iframe"));
        for (b = 0; b < Math.min(c.length, 50); b++) {
            const g = c[b];
            var d = g.src ? ja(g.src) : "";
            const h = g.id || g.name || "";
            if (!Xf.test(h)) try {
                const l = g.contentDocument || g.contentWindow.document;
                if (d && g.src !== "about:blank") ya(a, cg(l)), ya(c, l.getElementsByTagName("iframe"));
                else {
                    var e = null;
                    const k = g.previousElementSibling !== void 0 ? g.previousElementSibling : Od(g.previousSibling, !1);
                    if (k && k.nodeName === "SCRIPT" &&
                        k.src) {
                        const p = ag(k.src);
                        e = Wf.test(p) ? null : p
                    }((e = e || h) || !Rd(g)) && bg(g) && a.push(new dg(g, e))
                }
            } catch (l) {
                e = ag(d), d = (d = Vd(d.match(Ud)[5] || null)) && d.charAt(0) === "/" ? d.split("/", 2)[1] : "", bg(g) && !Wf.test(e) && a.push(new dg(g, e || h, d))
            }
        }
        Aa(a, (g, h) => g.top !== h.top ? g.top - h.top : g.left - h.left);
        let f = null;
        return va(a, function(g) {
            if (f != null && g.top + g.height <= f.top + f.height && g.left + g.width <= f.left + f.width) return !1;
            f = g;
            return !0
        })
    }
    var dg = class {
        constructor(a, b, c = null) {
            this.id = b;
            this.g = c;
            var d = Qd(a);
            b = new Md(0, 0);
            if (a != (d ? Qd(d) : document).documentElement) {
                c = fe(a);
                var e = (d ? new Td(Qd(d)) : ea || (ea = new Td)).g;
                d = e.scrollingElement ? e.scrollingElement : Ha || e.compatMode != "CSS1Compat" ? e.body || e.documentElement : e.documentElement;
                e = e.parentWindow || e.defaultView;
                d = new Md(e.pageXOffset || d.scrollLeft, e.pageYOffset || d.scrollTop);
                b.x = c.left + d.x;
                b.y = c.top + d.y
            }
            b: {
                c = Qd(a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a,
                        null))) {
                    c = c.display || c.getPropertyValue("display") || "";
                    break b
                }
                c = ""
            }
            c || (c = a.currentStyle ? a.currentStyle.display : null);
            if ((c || a.style && a.style.display) != "none") a = ge(a);
            else {
                c = a.style;
                d = c.display;
                e = c.visibility;
                var f = c.position;
                c.visibility = "hidden";
                c.position = "absolute";
                c.display = "inline";
                a = ge(a);
                c.display = d;
                c.position = f;
                c.visibility = e
            }
            a = new de(b.x, b.y, a.width, a.height);
            this.top = a.top;
            this.left = a.left;
            this.width = a.width;
            this.height = a.height
        }
    };
    let fg = !1;

    function gg(a, b, c) {
        function d(p) {
            fg && (b.push(p - f), f = p, k && (c.push(g || 0), h || (g = 0, h = k(l))), e(d))
        }
        if (!fg) {
            fg = !0;
            var e = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
            if (ae(e)) {
                var f, g, h, l, k = a.requestIdleCallback;
                k && (l = p => {
                    g = p.timeRemaining();
                    h = 0
                });
                e(p => {
                    f = p;
                    k && (h = k(l));
                    e(d)
                })
            }
        }
    };

    function hg(a) {
        let b = 0,
            c = 0;
        a = a.performance ? .getEntriesByType ? .("paint") ? ? [];
        for (const {
                name: d,
                startTime: e
            } of a) switch (d) {
            case "first-paint":
                b = e;
                break;
            case "first-contentful-paint":
                c = e
        }
        return {
            la: b,
            ka: c
        }
    };
    var ig = class extends S {
        constructor() {
            super()
        }
    };
    ig.I = [1];
    var jg = [0, sd, T, wd];
    ig.prototype.o = V(jg);
    var kg = class extends S {
        constructor() {
            super()
        }
    };
    kg.prototype.o = V([0, wd, -2, T, -16, jg, U, wd, T, U]);

    function lg(a) {
        return new RegExp(`/pagead/js/(r\\d+|dev)/r\\d+/(.*/)?${a}(_fy20\\d\\d)?\\.js`)
    }
    const mg = [{
                B: RegExp("^https?://((tpc|pagead2)\\.googlesyndication\\.com|static\\.googleadsserving\\.cn)/pagead/"),
                resources: {
                    [1]: /adsbygoogle\.js/,
                    [2]: /show_ads\.js/,
                    [3]: /show_ads_impl(_with_ama)?(_fy20\d\d)?\.js/,
                    [21]: /js\/r\d+\/r\d+\/osd\.js/,
                    [22]: /\/osd\.js/,
                    [7]: /activeview\/osd_listener\.js/,
                    [8]: /lidar\.js/,
                    [4]: /imgad\?id=/,
                    [24]: /js\/(r\d+|dev)\/r\d+\/rum\.js/,
                    [25]: /js\/rum\.js/,
                    [33]: /\/pagead\/adview\?ai=/,
                    [61]: /\/pagead\/managed\/js\/config_2_5__\d+\.json\?domain=/,
                    [62]: /\/pagead\/managed\/js\/config_12_5__\d+\.json\?domain=/,
                    [60]: /\/pagead\/ppub_config/,
                    [67]: /pagead\/managed\/js\/gpt\/m\d+\/pubads_impl(_fy\d+)?\.js/,
                    [10]: lg("m_js_controller"),
                    [9]: lg("abg_lite"),
                    [65]: lg("spam_signals_bundle"),
                    [66]: lg("bgl"),
                    [30]: lg("window_focus"),
                    [75]: lg("interstitial_ad_frame"),
                    [76]: lg("fullscreen_api_adapter")
                },
                A: 28
            }, {
                B: /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com\//,
                resources: {
                    [4]: /pageadimg(\/imgad)?\?id=/,
                    [23]: /(daca_images\/)?simgad\/\d+/,
                    [29]: /icore_images\/\d+/,
                    [11]: /pub-config\/r\d+\/ca-pub-\d+\.js/,
                    [16]: /\/safeframe\/\d+-\d+-\d+\/html\/container\.html/,
                    [17]: /\/safeframe\/\d+-\d+-\d+\/js\/ext\.js/,
                    [31]: /\/sadbundle\//,
                    [32]: /(\/pcs)?\/activeview\?(xai|avi)=/,
                    [80]: /\/tag\/js\/gpt\.js/
                },
                A: 39
            }, {
                B: /^https?:\/\/\w+\.g\.doubleclick\.net/,
                resources: {
                    [59]: /\/tag\/js\/gpt\.js/,
                    [14]: /\/gpt\/pubads_impl_\d+\.js/,
                    [67]: /pagead\/managed\/js\/gpt\/m\d+\/pubads_impl(_fy\d+)?\.js/,
                    [43]: /\/gpt\/pubads_impl_core_\d+\.js/,
                    [15]: /\/gampad\/ads\?/,
                    [34]: /\/pcs\/view\?xai=/,
                    [36]: /^https?:\/\/cm\.g\./,
                    [5]: /pagead\/ads\?/,
                    [12]: /pagead\/html\/.*\/zrt_lookup\.html/,
                    [33]: /\/pagead\/adview\?ai=/,
                    [61]: /\/pagead\/managed\/js\/config_2_5__\d+\.json\?domain=/,
                    [62]: /\/pagead\/managed\/js\/config_12_5__\d+\.json\?domain=/,
                    [60]: /\/pagead\/ppub_config/,
                    [70]: /\/td\/sts/,
                    [71]: /\/td\/sjs/,
                    [72]: /\/td\/bts/,
                    [73]: /\/td\/bjs/,
                    [74]: /\/td\/adfetch\/gda\?/
                },
                A: 40
            }, {
                B: /^https?:\/\/www\.googletagservices\.com/,
                resources: {
                    [13]: /\/tag\/js\/gpt\.js/,
                    [37]: /\/dcmads\.js/,
                    [38]: /\/dcm\/impl_v\d+\.js/,
                    [77]: /\/activeview\/js\/current\/rx_lidar\.js/,
                    [81]: /\/activeview\/js\/current\/ufs_web_display\.js/
                },
                A: 42
            }, {
                B: /^https?:\/\/fonts\.googleapis\.com\/css/,
                resources: {
                    [18]: /[?&]family=/
                },
                A: 27
            }, {
                B: /^https?:\/\/fonts\.gstatic\.com/,
                resources: {
                    [19]: /\/s\//,
                    [20]: /\/l\//
                },
                A: 27
            }, {
                B: /^https:\/\/[\w.]+.2mdn.net/,
                resources: {
                    [31]: /\/sadbundle\//
                },
                A: 41
            }, {
                B: /^https:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}/,
                resources: {
                    [46]: /\/adsid\/integrator\.json/,
                    [47]: /\/adsid\/integrator\.js/,
                    [48]: /\/adsid\/integrator\.sync\.js/
                },
                A: 45
            }, {
                B: /^https?:\/\/cdn\.ampproject\.org/,
                resources: {
                    [49]: /\/rtv\/\d{15,20}\/amp4ads-host-v0\.js\b/,
                    [50]: /\.org\/amp4ads-host-v0\.js\b/
                },
                A: 51
            },
            {
                B: /^https?:\/\/imasdk.googleapis.com/,
                resources: {
                    [54]: /js\/sdkloader\/ima3.js/,
                    [55]: /js\/core\/bridge3.*html/,
                    [56]: /js\/sdkloader\/loader.js/,
                    [57]: /js\/sdkloader\/vpaid_adapter.js/
                },
                A: 58
            }, {
                B: /^https?:\/\/fundingchoicesmessages\.google\.com/,
                resources: {
                    [64]: /\/i\/.*\?ers=\d.*/
                },
                A: 63
            }, {
                B: /^https?:\/\/.*\.googlevideo\.com/,
                resources: {
                    [78]: /\/videoplayback/
                },
                A: 79
            }, {
                B: /./,
                resources: {},
                A: 27
            }
        ],
        ng = [{
            B: /^https?:\/\//,
            resources: {
                [26]: function(a) {
                    return ee && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(a)
                }
            },
            A: 27
        }],
        og = a => {
            switch (a) {
                case "audio":
                    return 15;
                case "beacon":
                    return 1;
                case "css":
                    return 2;
                case "fetch":
                    return 4;
                case "iframe":
                    return 5;
                case "img":
                    return 6;
                case "link":
                    return 7;
                case "navigation":
                    return 8;
                case "object":
                    return 9;
                case "script":
                    return 10;
                case "subdocument":
                    return 11;
                case "svg":
                    return 12;
                case "track":
                    return 16;
                case "video":
                    return 14;
                case "xmlhttprequest":
                    return 13;
                default:
                    return 0
            }
        },
        pg = {
            woff: 1,
            woff2: 2,
            eot: 3,
            ttf: 4
        },
        qg = /^https?:\/\/[^/?#]*\b(google(adservices|tag(manager|services)|apis|usercontent|syndication|video)?|doubleclick|gstatic|2mdn|cdn.ampproject)\./,
        rg = {
            [1]: !0,
            [4]: !0,
            [13]: !0
        };

    function sg(a, b, c, d = !1) {
        const e = qg.test(a) ? 1 : 0,
            f = e != 1;
        var g = xa(f ? ng : mg, ({
            B: h
        }) => h.test(a));
        if (!g) return null;
        g = Zd(g.resources, h => typeof h === "function" ? h(a) : h.test(a)) || g.A;
        return !g || f && b != 2 && rg[c] && (!d || c != 13) ? null : {
            ja: e,
            id: parseInt(g, 10)
        }
    }

    function tg(a, b, c, d, e, f = "") {
        var g = og(a.initiatorType),
            h = sg(f || a.name, d, g, e);
        if (h) {
            d = b.push;
            f = h.id;
            h = h.ja;
            var l = new kg;
            l = R(l, 1, f);
            l = R(l, 3, h);
            g = R(l, 2, g);
            g = Q(g, 4, Math.round(a.startTime));
            g = Q(g, 7, Math.round(a.duration));
            l = a.name;
            try {
                if (e) {
                    e = 125;
                    var k = /[\?#;]/.exec(l);
                    k && k.index != -1 && k.index < e && (e = k.index);
                    Q(g, 24, $d(l.substr(0, e)))
                }
            } catch (t) {}
            if (h == 1 || f == 26) {
                k = Q(g, 5, Math.round(a.fetchStart));
                Q(k, 6, Math.round(a.responseEnd));
                b: {
                    e = a.name;f = Bc(Jb(I(g, 1)), 0);k = new ig;
                    switch (f) {
                        case 18:
                            if (e = e.match(/[?&]family=([^&]+)/)) {
                                f =
                                    n.decodeURIComponent(e[1]).split("|");
                                e = k;
                                const t = e.l;
                                let m = t[G];
                                vb(m);
                                if (f == null) J(t, m, 1);
                                else {
                                    f = bc ? .get(f) || f;
                                    l = h = f[G] | 0;
                                    var p = !!(2 & h) || Object.isFrozen(f),
                                        r = !p && (void 0 === Ab || !1);
                                    if (lc(e, h))
                                        for (h = 21, p && (f = F(f), l = 0, h = rc(h, m), h = zc(h, m, !0)), e = 0; e < f.length; e++) f[e] = Pb(f[e]);
                                    r && (f = F(f), l = 0, h = rc(h, m), h = zc(h, m, !0));
                                    h !== l && (f[G] = h);
                                    J(t, m, 1, f)
                                }
                            }
                            break;
                        case 19:
                            if (e = e.match(/\/s\/(\w+)\/v(\d+)\/[^.\/]+\.(\w+)$/)) f = k, h = n.parseInt(e[2], 10), f = Q(f, 2, h), f = R(f, 3, pg[e[3]] || 0), sc(f.l, 1, Pb, e[1]);
                            break;
                        case 20:
                            (f = e.match(/[?&]skey=([^&]+)/)) &&
                            sc(k.l, 1, Pb, f[1]);
                            if (f = e.match(/[?&]v=v(\d+)/)) e = k, f = n.parseInt(f[1], 10), Q(e, 2, f);
                            break;
                        default:
                            break b
                    }
                    yc(g, 21, k)
                }
                a.responseStart && (M(g, 22, Fb(!0), !1), a.domainLookupStart != a.domainLookupEnd && (k = Q(g, 8, Math.round(a.domainLookupStart)), Q(k, 9, Math.round(a.domainLookupEnd))), a.connectStart != a.connectEnd && (k = Q(g, 10, Math.round(a.connectStart)), Q(k, 11, Math.round(a.connectEnd)), a.secureConnectionStart && Q(g, 12, Math.round(a.secureConnectionStart))), k = Q(g, 13, Math.round(a.requestStart)), Q(k, 14, Math.round(a.responseStart)),
                    a.transferSize !== void 0 && (k = Q(g, 15, a.transferSize), k = Q(k, 17, a.decodedBodySize || 0), Q(k, 16, a.encodedBodySize || 0), a.transferSize > 0 ? R(g, 23, a.transferSize > (a.encodedBodySize || 0) ? 3 : 2) : R(g, 23, 1)), a.redirectStart && (k = Q(g, 18, Math.round(a.redirectStart)), Q(k, 19, Math.round(a.redirectEnd))), c && window.performance.timing && Q(g, 20, c))
            }
            d.call(b, g)
        }
    }

    function ug(a) {
        return a.performance && a.performance.timing && a != n && n.performance != null && n.performance.timing != null ? a.performance.timing.navigationStart - n.performance.timing.navigationStart : 0
    }

    function vg(a, b, c, d, e) {
        if (d && d.length) {
            var f = [],
                g = !1;
            for (const h of d) h.entryType === "resource" ? tg(h, f, ug(b), c, e) : h.entryType !== "navigation" || g || (tg(h, f, ug(b), c, e, b.location ? b.location.href : ""), g = !0);
            b = wa(f, h => Na(h.o())).join("~");
            vf(a, 7, b, !0)
        }
    }
    var wg = a => wa(a.performance && a.performance.getEntriesByType ? a.performance.getEntriesByType("resource") : [], b => {
        var c = (b && b.name || "").replace(/\?.*$/, ""),
            d = new Df;
        c = M(d, 1, Qb(c), "");
        return Q(c, 2, b.startTime)
    });
    var xg = class extends S {
        constructor() {
            super()
        }
    };
    xg.prototype.o = V([0, T, wd]);
    const yg = window == window.top ? 32 : 16,
        zg = {
            unloadEventStart: 2,
            unloadEventEnd: 3,
            redirectStart: 4,
            redirectEnd: 5,
            fetchStart: 6,
            domainLookupStart: 7,
            domainLookupEnd: 8,
            connectStart: 9,
            connectEnd: 10,
            secureConnectionStart: 11,
            requestStart: 12,
            responseStart: 13,
            responseEnd: 14,
            domLoading: 15,
            domInteractive: 16,
            domContentLoadedEventStart: 17,
            domContentLoadedEventEnd: 18,
            domComplete: 19,
            loadEventStart: 20,
            loadEventEnd: 21
        },
        Ag = a => (a = xc(a, df, 1)) ? Bc(Jb(I(a, 2)), 0) : 0,
        Bg = a => {
            let b = xc(a, bf, 2);
            b || (b = new bf, yc(a, 2, b));
            Ag(a) == 2 && (a = M(b,
                7, Fb(!0), !1), a = M(a, 9, Fb(!0), !1), M(a, 10, Fb(!0), !1));
            return b
        };
    var Cg = (a, b) => {
            Bc(Jb(I(b, 2)), 0) !== 2 || gf(n).chp || X(a, "chm", 1);
            Cc(b) && X(a, "c", Cc(b));
            Dc(b, 5) && X(a, "e", Dc(b, 5));
            X(a, "ctx", Bc(Jb(I(b, 2)), 0));
            X(a, "gqid", Dc(b, 3));
            X(a, "qqid", Dc(b, 4))
        },
        Fg = a => {
            const b = new ff,
                c = Bg(b);
            var d = af(c),
                e = xc(b, df, 1) || new df;
            d.length && M(e, 5, Qb(d.join()), "");
            Cg(a, e);
            d = new Hf(Dc(e, 4), n);
            if (e = n.google_js_reporting_queue) {
                const f = g => {
                    a.G(g);
                    re(g)
                };
                e.push = f;
                x(e, f);
                e.length = 0
            }
            qf(a, () => {
                const f = ne();
                f && se(a, "24", 1, f, 0)
            });
            Dg(n, a, b, c, d);
            Ag(b) === 2 && Eg() && Dg(n.parent, a, b, c, d)
        };

    function Eg() {
        var a = n.parent;
        return Wd(a) && a !== a.top && a.document.querySelector("iframe#ad_iframe") != null
    }

    function Dg(a, b, c, d, e) {
        (P(d, 12) || P(d, 9) && Math.random() < .1) && Cf(b, a);
        const f = Ag(c);
        let g = null;
        if (P(d, 7) && a.PerformanceObserver) {
            g = new a.PerformanceObserver(h => {
                vg(b, a, f, h ? .getEntries(), P(d, 13))
            });
            try {
                try {
                    g.observe({
                        type: "resource",
                        buffered: !0
                    }), g.observe({
                        type: "navigation",
                        buffered: !0
                    })
                } catch (h) {
                    g.observe({
                        entryTypes: ["resource", "navigation"]
                    })
                }
                qf(b, () => {
                    vg(b, a, f, g.takeRecords ? .(), P(d, 13))
                });
                f == 1 && Gg(a, b, d, f, g)
            } catch (h) {}
        }
        qf(b, () => {
            P(d, 18) && P(d, 19) ? Gf(e, wg(a), ne() ? ? 0) : P(d, 18) && Gf(e, wg(a))
        });
        a == a.top &&
            P(d, 14) && (new Lf(b)).install();
        Hg(b, a, d, f, g, e)
    }

    function Hg(a, b, c, d, e, f) {
        const g = Qe(113, () => {
            P(c, 10) && Ig(a, b);
            Jg(a, b);
            Kg(a, b, c, d, e, f);
            if (d == 1 && P(c, 16)) {
                var h = Pf(b);
                h = h.scrollHeight === Pf(b).clientHeight ? h.offsetHeight : h.scrollHeight;
                var l = Pf(b).scrollWidth,
                    k = Pf(b).scrollHeight;
                let N = "unknown";
                b && b.document && b.document.readyState && (N = b.document.readyState);
                const za = b.pageYOffset === void 0 ? (b.document.documentElement || b.document.body.parentNode || b.document.body).scrollTop : b.pageYOffset,
                    qa = [];
                var p = [];
                const sb = [],
                    O = [];
                var r = [];
                const Ma = [];
                var t = [];
                let Be = 0,
                    Ce = 0,
                    Ba = Infinity,
                    Ca = Infinity,
                    De = null;
                var m = {
                        oa: !1
                    },
                    w = A(b.document.querySelectorAll(".google-auto-placed"));
                const Lg = A(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
                    Mg = A(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
                var v = (Nf(b) || A(b.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(A(b.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
                const Ng = A(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                    Og = A(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                    Pg = A(b.document.querySelectorAll("div.googlepublisherpluginad")),
                    Qg = A(b.document.querySelectorAll("html > ins.adsbygoogle"));
                let Hc = [].concat(A(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), A(b.document.querySelectorAll("body ins.adsbygoogle")));
                var y = [];
                for (const [Da, Qa] of [
                        [m.za, w],
                        [m.oa, Lg],
                        [m.Ca, Mg],
                        [m.Aa, v],
                        [m.Da, Ng],
                        [m.ya, Og],
                        [m.Ba, Pg],
                        [m.Ea, Qg]
                    ]) Da === !1 ? y = y.concat(Qa) : Hc = Hc.concat(Qa);
                m = Of(Hc);
                y = Of(y);
                m = m.slice(0);
                for (z of y)
                    for (y = 0; y < m.length; y++)(z.contains(m[y]) || m[y].contains(z)) && m.splice(y, 1);
                var z = m;
                for (var D of z) {
                    z = D.getBoundingClientRect();
                    y = h - (z.bottom + za);
                    if (D.className && D.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                        m = D.getAttribute("google_element_uid");
                        v = b.google_sv_map;
                        if (!m || !v || !v[m]) continue;
                        a: {
                            w = v[m];m = Number(w.google_ad_width);v = Number(w.google_ad_height);
                            if (!(m > 0 && v > 0)) {
                                b: {
                                    try {
                                        var L = String(w.google_ad_format);
                                        if (L && L.match) {
                                            const Da = L.match(/(\d+)x(\d+)/i);
                                            if (Da) {
                                                const Qa = parseInt(Da[1], 10),
                                                    Ee = parseInt(Da[2], 10);
                                                if (Qa > 0 && Ee > 0) {
                                                    var ra = {
                                                        width: Qa,
                                                        height: Ee
                                                    };
                                                    break b
                                                }
                                            }
                                        }
                                    } catch (Da) {}
                                    ra = null
                                }
                                w = ra;
                                if (!w) {
                                    m = null;
                                    break a
                                }
                                m = m > 0 ? m : w.width;v = v > 0 ? v : w.height
                            }
                            m = {
                                width: m,
                                height: v
                            }
                        }
                        m = (v = m) ? v.height : 0;
                        v = v ? v.width : 0
                    } else if (m = z.bottom - z.top, v = z.right - z.left, m <= 1 || v <= 1) continue;
                    qa.push(m);
                    sb.push(v);
                    O.push(m * v);
                    D.className && D.className.indexOf("google-auto-placed") != -1 ? (Ce += 1, D.className && D.className.indexOf("pedestal_container") != -1 && (De = m)) : (Ba = Math.min(Ba, y), Ma.push(z),
                        Be += 1, p.push(m), r.push(m * v));
                    Ca = Math.min(Ca, y);
                    t.push(z)
                }
                Ba = Ba === Infinity ? null : Ba;
                Ca = Ca === Infinity ? null : Ca;
                ra = Uf(Ma);
                t = Uf(t);
                p = Tf(h, p);
                D = Tf(h, qa);
                r = Tf(h * l, r);
                L = Tf(h * l, O);
                h = new Rf(b, {
                    ia: N,
                    ua: h,
                    wa: l,
                    va: k,
                    pa: Be,
                    ca: Ce,
                    ea: Sf(qa),
                    fa: Sf(sb),
                    da: Sf(O),
                    ta: ra,
                    sa: t,
                    ra: Ba,
                    qa: Ca,
                    ha: p,
                    ga: D,
                    ba: r,
                    aa: L,
                    xa: De
                });
                h = Qf(h, b.location.hostname);
                l = Le;
                k = "V";
                l.V && l.hasOwnProperty(k) || (k = new l, l.V = k);
                l = [];
                !h.eid && l.length && (h.eid = l.toString());
                He(Ge, "ama_stats", h, !0, 1)
            }
        });
        b.document.readyState != "complete" ? Bd(b, "load", () => {
            b.setTimeout(g,
                0)
        }) : g()
    }
    var Jg = (a, b) => {
        const c = b.google_rum_values || gf(b).rv;
        b.google_rum_values = void 0;
        gf(b).rv = void 0;
        if (c && !(c.dt < 0) && (b = b.performance && b.performance.timing)) {
            var d = c.dt - b.navigationStart;
            Yd(c, (e, f) => {
                if (e != -1 && typeof e === "number") {
                    switch (f) {
                        case "dt":
                            e = d;
                            break;
                        case "bdt":
                            e = d - e;
                            break;
                        default:
                            e = d + e
                    }
                    se(a, f, 4, e)
                }
            })
        }
    };

    function Kg(a, b, c, d, e, f) {
        P(c, 1) && Rg(a, b);
        P(c, 2) && Bc(Kb(I(c, 3)), 0) > 0 && Sg(a, Bc(Kb(I(c, 3)), 0));
        P(c, 7) && vg(a, b, d, e.takeRecords ? .(), P(c, 13));
        P(c, 8) && Math.random() < .1 && te(a, () => Tg(a, b));
        P(c, 18) && Gf(f, wg(b))
    }
    const Ug = (a, b, c) => {
        var d = ne();
        d && (b.length || c.length) && (d = {
            [3]: d.toString(36)
        }, b.length && (d[1] = wa(b, e => {
            e = Math.min(Math.max(e, 0), 4095);
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_." [e >> 6] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_." [e & 63]
        }).join("")), c.length && (d[2] = wa(c, e => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_." [Math.min(Math.max(e, 0), 63) | 0]).join("")), vf(a, 5, mf(5, d), !0, "."))
    };
    var Vg = a => {
            if (jf()) {
                var {
                    ma: b,
                    na: c
                } = kf(), d = Qe(400, () => {
                    b.length || c.length ? (Ug(a, b, c), b.length = 0, c.length = 0, n.setTimeout(d, 1E4)) : (b.push = () => 0, c.push = () => 0)
                });
                n.setTimeout(d, 1E4)
            }
        },
        Rg = (a, b) => {
            const c = [],
                d = [];
            gg(b, c, d);
            b.setTimeout(Qe(400, () => {
                fg = !1;
                Ug(a, c, d)
            }), 1E4)
        },
        Sg = (a, b) => {
            Vf(b, (c, d, e) => {
                if (c != null && d != null && e != null) {
                    var f = {};
                    f[1] = b;
                    f[2] = c;
                    f[3] = d;
                    f[4] = e;
                    c = mf(8, f);
                    a.sendBeacon({
                        ["met.8"]: c
                    })
                }
            })
        },
        Ig = (a, b) => {
            const c = b.performance && b.performance.timing;
            if (c) {
                var d = c.navigationStart;
                d > 0 && (se(a, "1",
                    1, d), Yd(zg, (g, h) => {
                    h = c[h];
                    h > 0 && se(a, String(g), 1, h - d)
                }));
                var {
                    la: e,
                    ka: f
                } = hg(b);
                e && se(a, "22", 1, e);
                f && se(a, "23", 1, f)
            }
        },
        Tg = (a, b) => {
            if (b = eg(b)) 10 < b.length && (b.length = 10), tf(a, wa(b, c => {
                const d = $f(c.id) + (c.g ? "_" + $f(c.g) : ""),
                    e = Math.floor(c.top).toString(36),
                    f = Math.floor(c.left).toString(36),
                    g = Math.floor(c.width).toString(36);
                c = Math.floor(c.height).toString(36);
                return `${d}_${e}_${f}_${g}_${c}`
            }).join("~"))
        };

    function Gg(a, b, c, d, e) {
        const f = $e(a.document);
        f && Bd(a, f, () => {
            var g = ne();
            if (g) {
                var h = a.document;
                h = h.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[h.visibilityState || h.webkitVisibilityState || h.mozVisibilityState || ""] || 0;
                if (h == 1 || h == 2) {
                    var l = new xg;
                    g = Q(l, 1, Math.round(g));
                    g = R(g, 2, h);
                    g = Na(g.o());
                    P(c, 7) && vg(b, a, d, e.takeRecords ? .(), P(c, 13));
                    se(b, "1", 11, g);
                    h == 2 && typeof b.M === "function" && b.M()
                }
            }
        })
    };
    Oe.P(112, () => {
        const a = new wf(yg);
        a.h = !0;
        Fg(a);
        Vg(a)
    });
}).call(this);