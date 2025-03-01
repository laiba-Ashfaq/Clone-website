(function(sttc) {
    'use strict';
    var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ea = {},
        fa = {};

    function ha(a, b, c) {
        if (!c || a != null) {
            c = fa[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ia(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ea ? f = ea : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (fa[d] === void 0 && (a = Math.random() * 1E9 >>> 0, fa[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ia("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var p = this || self;

    function ja(a, b) {
        var c = ka("CLOSURE_FLAGS");
        a = c && c[a];
        return a != null ? a : b
    }

    function ka(a) {
        a = a.split(".");
        for (var b = p, c = 0; c < a.length; c++)
            if (b = b[a[c]], b == null) return null;
        return b
    }

    function la(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function ma(a) {
        return Object.prototype.hasOwnProperty.call(a, na) && a[na] || (a[na] = ++oa)
    }
    var na = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        oa = 0;

    function pa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function qa(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ra(a, b, c) {
        ra = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? pa : qa;
        return ra.apply(null, arguments)
    }

    function sa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ta(a, b, c) {
        a = a.split(".");
        c = c || p;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ua(a) {
        return a
    };
    let va = (new Date).getTime();

    function wa(a) {
        p.setTimeout(() => {
            throw a;
        }, 0)
    };

    function xa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function ya(a, b) {
        let c = 0;
        a = xa(String(a)).split(".");
        b = xa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; c == 0 && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (e[0].length == 0 && f[0].length == 0) break;
                c = za(e[1].length == 0 ? 0 : parseInt(e[1], 10), f[1].length == 0 ? 0 : parseInt(f[1], 10)) || za(e[2].length == 0, f[2].length == 0) || za(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (c == 0)
        }
        return c
    }

    function za(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    const Aa = ja(1, !0);
    var Ba = ja(610401301, !1),
        Ca = ja(188588736, Aa),
        Da = ja(645172343, Aa);

    function Ea() {
        var a = p.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Fa;
    const Ga = p.navigator;
    Fa = Ga ? Ga.userAgentData || null : null;

    function Ha(a) {
        return Ba ? Fa ? Fa.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function r(a) {
        return Ea().indexOf(a) != -1
    };

    function Ia() {
        return Ba ? !!Fa && Fa.brands.length > 0 : !1
    }

    function Ja() {
        return Ia() ? !1 : r("Trident") || r("MSIE")
    }

    function Ka() {
        return Ia() ? Ha("Microsoft Edge") : r("Edg/")
    }

    function La() {
        !r("Safari") || Ma() || (Ia() ? 0 : r("Coast")) || (Ia() ? 0 : r("Opera")) || (Ia() ? 0 : r("Edge")) || Ka() || Ia() && Ha("Opera")
    }

    function Ma() {
        return Ia() ? Ha("Chromium") : (r("Chrome") || r("CriOS")) && !(Ia() ? 0 : r("Edge")) || r("Silk")
    }

    function Na(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Oa() {
        var a = Ea();
        if (Ja()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), c[1] == "7.0")
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Na(b);
        return (Ia() ? 0 : r("Opera")) ? a(["Version",
            "Opera"
        ]) : (Ia() ? 0 : r("Edge")) ? a(["Edge"]) : Ka() ? a(["Edg"]) : r("Silk") ? a(["Silk"]) : Ma() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Pa(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Qa(a, b) {
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

    function Ra(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Sa(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ta(a, b) {
        a: {
            var c = a.length;
            const d = typeof a === "string" ? a.split("") : a;
            for (--c; c >= 0; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function Ua(a, b) {
        return Pa(a, b) >= 0
    }

    function Va(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Wa(a) {
        Wa[" "](a);
        return a
    }
    Wa[" "] = function() {};
    var Ya = Ja();
    !r("Android") || Ma();
    Ma();
    La();
    var Za = null;

    function $a(a) {
        var b = [];
        ab(a, function(c) {
            b.push(c)
        });
        return b
    }

    function ab(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = Za[l];
                if (m != null) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        bb();
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

    function bb() {
        if (!Za) {
            Za = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    Za[f] === void 0 && (Za[f] = e)
                }
        }
    };
    let cb = 0,
        db = 0;

    function fb(a) {
        const b = a >>> 0;
        cb = b;
        db = (a - b) / 4294967296 >>> 0
    }

    function hb(a) {
        if (a < 0) {
            fb(-a);
            a = cb;
            var b = db;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            cb = c >>> 0;
            db = d >>> 0
        } else fb(a)
    }

    function ib() {
        var a = cb,
            b = db;
        if (b & 2147483648) var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else b >>>= 0, a >>>= 0, b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    };

    function jb(a) {
        return Array.prototype.slice.call(a)
    };
    var t = Symbol(),
        kb = Symbol(),
        lb = Symbol(),
        mb = Symbol(),
        nb = Symbol();

    function ob(a) {
        a[t] |= 32;
        return a
    }

    function pb(a, b) {
        b[t] = (a | 0) & -14591
    }

    function qb(a, b) {
        b[t] = (a | 34) & -14557
    };
    var rb = {},
        sb = {};

    function tb(a) {
        return !(!a || typeof a !== "object" || a.g !== sb)
    }

    function ub(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function vb(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[t] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[t] = d | 1;
        return !0
    }
    var wb;
    const xb = [];
    xb[t] = 55;
    wb = Object.freeze(xb);

    function yb(a) {
        if (a & 2) throw Error();
    }
    Object.freeze({});
    Object.freeze({});
    var zb = Object.freeze({});

    function Ab(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let Bb, Cb;

    function Db(a) {
        if (Cb) throw Error("");
        Cb = b => {
            p.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function Eb(a) {
        if (Cb) try {
            Cb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function Fb() {
        const a = Error();
        Ab(a, "incident");
        Cb ? Eb(a) : wa(a)
    }

    function Gb(a) {
        a = Error(a);
        Ab(a, "warning");
        Eb(a);
        return a
    };

    function Hb(a) {
        if (a != null && typeof a !== "boolean") {
            var b = typeof a;
            throw Error(`Expected boolean but got ${b!="object"?b:a?Array.isArray(a)?"array":b:"null"}: ${a}`);
        }
        return a
    }
    const Ib = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Jb(a) {
        const b = typeof a;
        return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : Ib.test(a)
    }

    function w(a) {
        if (a != null) {
            if (!Number.isFinite(a)) throw Gb("enum");
            a |= 0
        }
        return a
    }

    function Kb(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Lb(a) {
        if (typeof a !== "number") throw Gb("int32");
        if (!Number.isFinite(a)) throw Gb("int32");
        return a | 0
    }

    function Mb(a) {
        return a == null ? a : Lb(a)
    }

    function Nb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Ob(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Pb(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function Qb(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            hb(a);
            var b = cb,
                c = db;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Rb(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Pb(b) ? a = b : (hb(a), a = ib())
            }
        }
        return a
    }

    function Sb(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Pb(a) || (a.length < 16 ? hb(Number(a)) : (a = BigInt(a), cb = Number(a & BigInt(4294967295)) >>> 0, db = Number(a >> BigInt(32) & BigInt(4294967295))), a = ib());
        return a
    }

    function Tb(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function Ub(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Vb(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Xb(a, b, c, d) {
        if (a != null && typeof a === "object" && a.qa === rb) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Yb(b) : new b : void 0;
        let e = c = a[t] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[t] = e);
        return new b(a)
    }

    function Yb(a) {
        var b = a[kb];
        if (b) return b;
        b = new a;
        var c = b.D;
        c[t] |= 34;
        return a[kb] = b
    };
    let Zb;

    function $b(a, b) {
        Zb = b;
        a = new a(b);
        Zb = void 0;
        return a
    };

    function ac(a, b) {
        return bc(b)
    }

    function bc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (vb(a, void 0, 0)) return
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

    function cc(a, b, c) {
        a = jb(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function dc(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = vb(a, void 0, 0) ? void 0 : e && (a[t] | 0) & 2 ? a : ec(a, b, c, d !== void 0, e);
            else if (ub(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = dc(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function ec(a, b, c, d, e) {
        const f = d || c ? a[t] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = jb(a);
        for (let g = 0; g < a.length; g++) a[g] = dc(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function fc(a) {
        return a.qa === rb ? a.toJSON() : a != null && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function gc(a) {
        return a.qa === rb ? a.toJSON() : bc(a)
    }
    var hc = typeof structuredClone != "undefined" ? structuredClone : a => ec(a, fc, void 0, void 0, !1);

    function ic(a, b, c = qb) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[t] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[t] = (d | 34) & -12293, a) : ec(a, ic, d & 4 ? qb : c, !0, !0)
            }
            a.qa === rb && (c = a.D, d = c[t], a = d & 2 ? a : $b(a.constructor, jc(c, d, !0)));
            return a
        }
    }

    function jc(a, b, c) {
        const d = c || b & 2 ? qb : pb,
            e = !!(b & 32);
        a = cc(a, b, f => ic(f, e, d));
        a[t] = a[t] | 32 | (c ? 2 : 0);
        return a
    }

    function kc(a) {
        const b = a.D,
            c = b[t];
        return c & 2 ? $b(a.constructor, jc(b, c, !1)) : a
    };

    function lc(a) {
        if (typeof Proxy !== "function") return a;
        let b = mc ? .get(a);
        if (b) return b;
        b = new Proxy(a, {
            set(c, d, e) {
                nc();
                c[d] = e;
                return !0
            }
        });
        oc(a, b);
        return b
    }

    function nc() {
        Fb()
    }
    let mc = void 0,
        pc = void 0;

    function oc(a, b) {
        (mc || (mc = new WeakMap)).set(a, b);
        (pc || (pc = new WeakMap)).set(b, a)
    };

    function qc(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[mb] = (a.constructor[mb] | 0) + 1) < 5 && Fb();
        return c === 0 ? !1 : !(c & b)
    }

    function rc(a, b) {
        a = a.D;
        return sc(a, a[t], b)
    }

    function tc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function sc(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (tc(a, b, e, c) && lb != null && (a = Bb ? ? (Bb = {}), b = a[lb] || 0, b >= 4 || (a[lb] = b + 1, Fb())), d) : tc(a, b, e, c)
        }
    }

    function y(a, b, c) {
        const d = a.D;
        let e = d[t];
        yb(e);
        z(d, e, b, c);
        return a
    }

    function z(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Da) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[t] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function uc(a, b, c) {
        return vc(a, b, c, !1) !== void 0
    }

    function wc(a, b, c) {
        const d = a.D;
        var e = d[t];
        const f = 2 & e ? 1 : 2;
        let g = xc(d, e, b);
        var h = g[t] | 0;
        if (qc(a, h, void 0, !1)) {
            if (4 & h || Object.isFrozen(g)) g = jb(g), h = yc(h, e), e = z(d, e, b, g);
            let l = a = 0;
            for (; a < g.length; a++) {
                const m = c(g[a]);
                m != null && (g[l++] = m)
            }
            l < a && (g.length = l);
            h = zc(h, e);
            h = (h | 20) & -4097;
            h &= -8193;
            g[t] = h;
            2 & h && Object.freeze(g)
        }
        let k;
        f === 1 || f === 4 && 32 & h ? Ac(h) || (e = h, h |= 2, h !== e && (g[t] = h), Object.freeze(g)) : (c = f !== 5 ? !1 : !!(32 & h) || Ac(h) || !!mc ? .get(g), (f === 2 || c) && Ac(h) && (g = jb(g), h = yc(h, e), h = Bc(h, e, !1), g[t] = h, e = z(d, e, b,
            g)), Ac(h) || (b = h, h = Bc(h, e, !1), h !== b && (g[t] = h)), c && (k = lc(g)));
        return k || g
    }

    function xc(a, b, c) {
        a = sc(a, b, c);
        return Array.isArray(a) ? a : wb
    }

    function zc(a, b) {
        a === 0 && (a = yc(a, b));
        return a | 1
    }

    function Ac(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Cc(a, b, c, d) {
        const e = a.D;
        let f = e[t];
        yb(f);
        if (c == null) return z(e, f, b), a;
        c = pc ? .get(c) || c;
        let g = c[t] | 0,
            h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const l = !k && (void 0 === zb || !1);
        if (qc(a, g))
            for (g = 21, k && (c = jb(c), h = 0, g = yc(g, f), g = Bc(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = jb(c), h = 0, g = yc(g, f), g = Bc(g, f, !0));
        g !== h && (c[t] = g);
        z(e, f, b, c);
        return a
    }

    function A(a, b, c, d) {
        const e = a.D;
        let f = e[t];
        yb(f);
        z(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Dc(a, b) {
        var c = a.D,
            d = c[t] | 0;
        yb(a.D[t]);
        var e = d & 2;
        a = sc(c, d, 4, !1);
        Array.isArray(a) || (a = wb);
        const f = !!(d & 32);
        let g = a[t] | 0;
        g === 0 && f && !e ? (g |= 33, a[t] = g) : g & 1 || (g |= 1, a[t] = g);
        if (e) g & 2 || (a[t] |= 34), Object.freeze(a);
        else if (2 & g || 2048 & g) a = jb(a), e = 1, f && (e |= 32), a[t] = e, z(c, d, 4, a, !1);
        c = a;
        d = c[t] | 0;
        d = !!(4 & d) && !!(4096 & d);
        if (Array.isArray(b))
            for (var h = 0; h < b.length; h++) c.push(Tb(b[h], d));
        else
            for (h of b) c.push(Tb(h, d))
    }

    function Ec(a, b, c, d) {
        const e = a.D;
        var f = e[t];
        yb(f);
        if (d == null) {
            var g = Fc(e);
            if (Gc(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = Fc(e);
            const h = Gc(g, e, f, c);
            h !== b && (h && (f = z(e, f, h)), g.set(c, b))
        }
        z(e, f, b, d);
        return a
    }

    function Hc(a, b, c) {
        return Ic(a, b) === c ? c : -1
    }

    function Ic(a, b) {
        a = a.D;
        return Gc(Fc(a), a, a[t], b)
    }

    function Fc(a) {
        return a[nb] ? ? (a[nb] = new Map)
    }

    function Gc(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            sc(b, c, g) != null && (e !== 0 && (c = z(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Jc(a, b, c) {
        a = a.D;
        let d = a[t];
        yb(d);
        const e = sc(a, d, c);
        b = kc(Xb(e, b, !0, d));
        e !== b && z(a, d, c, b);
        return b
    }

    function vc(a, b, c, d) {
        a = a.D;
        let e = a[t];
        const f = sc(a, e, c, d);
        b = Xb(f, b, !1, e);
        b !== f && b != null && z(a, e, c, b, d);
        return b
    }

    function Kc(a) {
        var b = Lc;
        return (a = vc(a, b, 4, !1)) ? a : Yb(b)
    }

    function B(a, b, c) {
        b = vc(a, b, c, !1);
        if (b == null) return b;
        a = a.D;
        let d = a[t];
        if (!(d & 2)) {
            const e = kc(b);
            e !== b && (b = e, z(a, d, c, b, !1))
        }
        return b
    }

    function D(a, b, c) {
        const d = a.D;
        var e = d[t];
        a = e;
        var f = !(2 & e);
        const g = (e = !!(2 & a)) ? 1 : 2;
        f && (f = !e);
        e = xc(d, a, c);
        var h = e[t] | 0,
            k = !!(4 & h);
        if (!k) {
            h = zc(h, a);
            var l = e,
                m = a;
            const q = !!(2 & h);
            q && (m |= 2);
            let v = !q,
                u = !0,
                x = 0,
                K = 0;
            for (; x < l.length; x++) {
                const C = Xb(l[x], b, !1, m);
                if (C instanceof b) {
                    if (!q) {
                        const eb = !!((C.D[t] | 0) & 2);
                        v && (v = !eb);
                        u && (u = eb)
                    }
                    l[K++] = C
                }
            }
            K < x && (l.length = K);
            h |= 4;
            h = u ? h | 16 : h & -17;
            h = v ? h | 8 : h & -9;
            l[t] = h;
            q && Object.freeze(l)
        }
        if (f && !(8 & h || !e.length && (g === 1 || g === 4 && 32 & h))) {
            Ac(h) && (e = jb(e), h = yc(h, a), a = z(d, a, c, e));
            b = e;
            f = h;
            for (l = 0; l < b.length; l++) h = b[l], m = kc(h), h !== m && (b[l] = m);
            f |= 8;
            f = b.length ? f & -17 : f | 16;
            h = b[t] = f
        }
        let n;
        g === 1 || g === 4 && 32 & h ? Ac(h) || (c = h, h |= !e.length || 16 & h && (!k || 32 & h) ? 2 : 2048, h !== c && (e[t] = h), Object.freeze(e)) : (k = g !== 5 ? !1 : !!(32 & h) || Ac(h) || !!mc ? .get(e), (g === 2 || k) && Ac(h) && (e = jb(e), h = yc(h, a), h = Bc(h, a, !1), e[t] = h, a = z(d, a, c, e)), Ac(h) || (c = h, h = Bc(h, a, !1), h !== c && (e[t] = h)), k && (n = lc(e)));
        return n || e
    }

    function Mc(a, b, c) {
        c == null && (c = void 0);
        return y(a, b, c)
    }

    function Nc(a, b, c, d) {
        d == null && (d = void 0);
        return Ec(a, b, c, d)
    }

    function Oc(a, b, c) {
        const d = a.D;
        let e = d[t];
        yb(e);
        if (c == null) return z(d, e, b), a;
        c = pc ? .get(c) || c;
        let f = c[t] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c),
            l = !k && (void 0 === zb || !1);
        let m = !0,
            n = !0;
        for (let v = 0; v < c.length; v++) {
            var q = c[v];
            h || (q = !!((q.D[t] | 0) & 2), m && (m = !q), n && (n = q))
        }
        h || (f |= 5, f = m ? f | 8 : f & -9, f = n ? f | 16 : f & -17);
        if (l || k && f !== g) c = jb(c), g = 0, f = yc(f, e), f = Bc(f, e, !0);
        f !== g && (c[t] = f);
        z(d, e, b, c);
        return a
    }

    function yc(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Bc(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function Pc(a, b) {
        a = rc(a, b);
        var c;
        a == null ? c = a : Jb(a) ? typeof a === "number" ? c = Qb(a) : c = Sb(a) : c = void 0;
        return c
    }

    function Qc(a, b) {
        return a ? ? b
    }

    function Sc(a, b) {
        a = rc(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function Tc(a, b) {
        return Nb(rc(a, b))
    }

    function E(a, b) {
        return Vb(rc(a, b))
    }

    function F(a, b) {
        return Kb(rc(a, b))
    }

    function G(a, b, c = !1) {
        return Qc(Sc(a, b), c)
    }

    function Uc(a, b) {
        return Qc(Tc(a, b), 0)
    }

    function Vc(a, b) {
        return Qc(Pc(a, b), 0)
    }

    function Wc(a, b) {
        a = a.D;
        let c = a[t];
        const d = sc(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && z(a, c, b, e);
        return e ? ? 0
    }

    function H(a, b) {
        return Qc(E(a, b), "")
    }

    function I(a, b) {
        return Qc(F(a, b), 0)
    }

    function Xc(a, b) {
        return wc(a, b, Vb)
    }

    function Yc(a, b, c) {
        return I(a, Hc(a, c, b))
    }

    function Zc(a, b, c, d) {
        return B(a, b, Hc(a, d, c))
    }

    function J(a, b, c) {
        if (c != null) {
            var d = !!d;
            if (!Jb(c)) throw Gb("int64");
            c = typeof c === "string" ? Sb(c) : d ? Rb(c) : Qb(c)
        }
        return A(a, b, c, "0")
    }

    function $c(a, b) {
        var c = performance.now();
        if (c != null && typeof c !== "number") throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        A(a, b, c, 0)
    }

    function ad(a, b, c) {
        return A(a, b, Ub(c), "")
    };
    let bd;
    var L = class {
        constructor(a) {
            a: {
                a == null && (a = Zb);Zb = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[t] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, ub(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[t] = b
            }
            this.D = a
        }
        toJSON() {
            return cd(this)
        }
    };
    L.prototype.qa = rb;

    function cd(a) {
        var b = bd ? a.D : ec(a.D, gc, void 0, void 0, !1);
        var c = !bd;
        var d = Ca ? void 0 : a.constructor.B;
        var e = (c ? a.D : b)[t];
        if (a = b.length) {
            var f = b[a - 1],
                g = ub(f);
            g ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var h = b;
            if (g) {
                b: {
                    var k = f;
                    var l = {};g = !1;
                    if (k)
                        for (var m in k) {
                            if (!Object.prototype.hasOwnProperty.call(k, m)) continue;
                            if (isNaN(+m)) {
                                l[m] = k[m];
                                continue
                            }
                            let v = k[m];
                            Array.isArray(v) && (vb(v, d, +m) || tb(v) && v.size === 0) && (v = null);
                            v == null && (g = !0);
                            v != null && (l[m] = v)
                        }
                    if (g) {
                        for (var n in l) break b;
                        l = null
                    } else l = k
                }
                k = l == null ? f != null : l !==
                    f
            }
            for (var q; a > 0; a--) {
                n = a - 1;
                m = h[n];
                n -= e;
                if (!(m == null || vb(m, d, n) || tb(m) && m.size === 0)) break;
                q = !0
            }
            if (h !== b || k || q) {
                if (!c) h = Array.prototype.slice.call(h, 0, a);
                else if (q || k || l) h.length = a;
                l && h.push(l)
            }
            b = h
        }
        return b
    }

    function dd(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[t] |= 128;
        return $b(a, ob(b))
    };

    function ed(a, b) {
        const c = fd;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function gd(a) {
        a.nc = !0;
        return a
    }
    let fd = void 0;
    const hd = gd(a => a !== null && a !== void 0);

    function id(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = $b(a, ob(b))
            }
            return b
        }
    };
    var jd = class extends L {};
    var kd = class extends L {};
    kd.B = [2, 3, 4];

    function ld(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function md(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function nd(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function od(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function pd(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function qd(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function rd(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function sd(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function td(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var ud;
    var vd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function wd(a, b) {
        a = xd.exec(yd(a).toString());
        var c = a[3] || "";
        return zd(a[1] + Ad("?", a[2] || "", b) + Ad("#", c))
    }

    function yd(a) {
        return a instanceof vd && a.constructor === vd ? a.g : "type_error:TrustedResourceUrl"
    }
    var xd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Bd = {};

    function zd(a) {
        if (ud === void 0) {
            var b = null;
            var c = p.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ua,
                        createScript: ua,
                        createScriptURL: ua
                    })
                } catch (d) {
                    p.console && p.console.error(d.message)
                }
                ud = b
            } else ud = b
        }
        a = (b = ud) ? b.createScriptURL(a) : a;
        return new vd(a, Bd)
    }

    function Ad(a, b, c) {
        if (c == null) return b;
        if (typeof c === "string") return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    g != null && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Cd(a, ...b) {
        if (b.length === 0) return zd(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return zd(c)
    };

    function Dd(a, b) {
        this.width = a;
        this.height = b
    }
    Dd.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Dd.prototype.isEmpty = function() {
        return !(this.width * this.height)
    };
    Dd.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Dd.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Dd.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    Dd.prototype.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function Ed(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function Fd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Gd(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Hd(a) {
        this.g = a || p.document || document
    }
    Hd.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Id() {
        return Ba && Fa ? Fa.mobile : !Jd() && (r("iPod") || r("iPhone") || r("Android") || r("IEMobile"))
    }

    function Jd() {
        return Ba && Fa ? !Fa.mobile && (r("iPad") || r("Android") || r("Silk")) : r("iPad") || r("Android") && !r("Mobile") || r("Silk")
    };
    var Kd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ld = /#|$/;

    function Md(a, b) {
        var c = a.search(Ld);
        a: {
            var d = 0;
            for (var e = b.length;
                (d = a.indexOf(b, d)) >= 0 && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (f == 38 || f == 63)
                    if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                d += e + 1
            }
            d = -1
        }
        if (d < 0) return null;
        e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    };

    function Nd(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Wa(a.foo);
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

    function Od(a) {
        return Nd(a.top) ? a.top : null
    }

    function Pd(a, b) {
        const c = Qd("SCRIPT", a);
        c.src = yd(b);
        (void 0) ? .oc || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Rd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Sd() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Td(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Ud(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var Vd = /^([0-9.]+)px$/,
        Wd = /^(-?[0-9.]{1,30})$/;

    function Xd(a) {
        if (!Wd.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Yd(a) {
        return (a = Vd.exec(a)) ? +a[1] : null
    }
    var Zd = md(() => Id() ? 2 : Jd() ? 1 : 0),
        $d = a => {
            Td({
                display: "none"
            }, (b, c) => {
                a.style.setProperty(c, b, "important")
            })
        };
    let ae = [];
    const be = () => {
        const a = ae;
        ae = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function ce() {
        var a = M(de).A(ee.g, ee.defaultValue),
            b = N.document;
        if (a.length && b.head)
            for (const c of a) c && b.head && (a = Qd("META"), b.head.appendChild(a), a.httpEquiv = "origin-trial", a.content = c)
    }
    var fe = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        ge = a => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: fe(),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        ie = a => {
            var b = he;
            b.readyState === "complete" || b.readyState === "interactive" ? (ae.push(a), ae.length == 1 && (window.Promise ? Promise.resolve().then(be) : window.setImmediate ? setImmediate(be) : setTimeout(be, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function Qd(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function je(a, b, c = null, d = !1, e = !1) {
        le(a, b, c, d, e)
    }

    function le(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Qd("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Pa(h, f);
                    k >= 0 && Array.prototype.splice.call(h, k, 1)
                }
                pd(f, "load", g);
                pd(f, "error", g)
            };
            od(f, "load", g);
            od(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var ne = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Td(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            me(c)
        },
        me = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : je(b, a, void 0, !1, !1)
        };
    var he = document,
        N = window;

    function oe(a) {
        this.g = a || {
            cookie: ""
        }
    }
    oe.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.qc, g = c.sc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Bb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "")
    };
    oe.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = xa(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    oe.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    oe.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = xa(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; c >= 0; c--) a = b[c], this.get(a), this.set(a, "", {
            Bb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function pe(a, b = window) {
        if (G(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function qe(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    };
    let re = null;
    var se = (a, b = []) => {
        let c = !1;
        p.google_logging_queue || (c = !0, p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        if (a = c) {
            if (re == null) {
                re = !1;
                try {
                    const d = Od(p);
                    d && d.location.hash.indexOf("google_logging") !== -1 && (re = !0);
                    qe(p) ? .getItem("google_logging") && (re = !0)
                } catch (d) {}
            }
            a = re
        }
        a && Pd(p.document, Cd `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function te(a = p) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function ue(a = te()) {
        return a ? Nd(a.master) ? a.master : null : null
    };
    var ve = a => {
            a = ue(te(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        we = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        xe = () => {
            if (!N) return !1;
            try {
                return !(!N.navigator.standalone && !N.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        ye = a => {
            if (!a) return "";
            a = a.toLowerCase();
            a.substring(0, 3) != "ca-" && (a = "ca-" + a);
            return a
        };
    class ze {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var Ae = a => !!(a.error && a.meta && a.id);
    const Be = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Ce = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        De = class {
            constructor(a, b, c) {
                this.url = a;
                this.l = b;
                this.eb = !!c;
                this.depth = null
            }
        };
    let Ee = null;

    function Fe() {
        if (Ee === null) {
            Ee = "";
            try {
                let a = "";
                try {
                    a = p.top.location.hash
                } catch (b) {
                    a = p.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Ee = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Ee
    };

    function Ge() {
        const a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function He() {
        const a = p.performance;
        return a && a.now ? a.now() : null
    };
    var Ie = class {
        constructor(a, b) {
            var c = He() || Ge();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Je = p.performance,
        Ke = !!(Je && Je.mark && Je.measure && Je.clearMarks),
        Le = md(() => {
            var a;
            if (a = Ke) a = Fe(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function Me(a) {
        a && Je && Le() && (Je.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Je.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Ne(a) {
        a.g = !1;
        if (a.i != a.j.google_js_reporting_queue) {
            if (Le()) {
                var b = a.i;
                const c = b.length;
                b = typeof b === "string" ? b.split("") : b;
                for (let d = 0; d < c; d++) d in b && Me.call(void 0, b[d])
            }
            a.i.length = 0
        }
    }
    class Oe {
        constructor(a) {
            this.i = [];
            this.j = a || p;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Le() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Ie(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Je && Le() && Je.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (He() || Ge()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Je && Le() && Je.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function Pe(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Qe(a, b, c, d, e) {
        const f = [];
        Td(a, function(g, h) {
            (g = Re(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Re(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Re(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Qe(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Se(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Te(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Se(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let l = Qe(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
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
    class Ue {
        constructor() {
            this.j = "&";
            this.i = {};
            this.u = 0;
            this.g = []
        }
    };

    function Ve(a) {
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
    var Xe = class {
        constructor(a, b, c = null) {
            this.C = a;
            this.F = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.A = this.T
        }
        kb(a) {
            this.A = a
        }
        Ga(a) {
            this.g = a
        }
        u(a) {
            this.j = a
        }
        ha(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.F;
                try {
                    Me(e), b = this.A(a, new ze(f, {
                        message: Ve(f)
                    }), void 0, c)
                } catch (g) {
                    this.T(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        sa(a, b) {
            return (...c) => this.ha(a, () => b.apply(void 0, c))
        }
        T(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Xa = new Ue;
                var g = Xa;
                g.g.push(1);
                g.i[1] = Pe("context", a);
                Ae(b) || (b = new ze(b, {
                    message: Ve(b)
                }));
                if (b.msg) {
                    g = Xa;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = Pe("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (gb) {}
                if (d) try {
                    d(b)
                } catch (gb) {}
                d = Xa;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = p;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Nd(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new De(m || "", l));
                    try {
                        d = l.parent
                    } catch (gb) {
                        d = null
                    }
                } while (d && l != d);
                for (let gb = 0, Cg = k.length - 1; gb <= Cg; ++gb) k[gb].depth =
                    Cg - gb;
                l = p;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.eb = !0)
                    }
                var q = k;
                let Rc = new De(p.location.href, p, !1);
                l = null;
                const ke = q.length - 1;
                for (n = ke; n >= 0; --n) {
                    var v = q[n];
                    !l && Be.test(v.url) && (l = v);
                    if (v.url && !v.eb) {
                        Rc = v;
                        break
                    }
                }
                v = null;
                const zk = q.length && q[ke].url;
                Rc.depth != 0 && zk && (v = q[ke]);
                f = new Ce(Rc, v);
                if (f.i) {
                    q = Xa;
                    var u = f.i.url || "";
                    q.g.push(4);
                    q.i[4] = Pe("top", u)
                }
                var x = {
                    url: f.g.url ||
                        ""
                };
                if (f.g.url) {
                    var K = f.g.url.match(Kd),
                        C = K[1],
                        eb = K[3],
                        Wb = K[4];
                    u = "";
                    C && (u += C + ":");
                    eb && (u += "//", u += eb, Wb && (u += ":" + Wb));
                    var Dg = u
                } else Dg = "";
                C = Xa;
                x = [x, {
                    url: Dg
                }];
                C.g.push(5);
                C.i[5] = x;
                We(this.C, e, Xa, this.j, c)
            } catch (Xa) {
                try {
                    We(this.C, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ve(Xa),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (Rc) {}
            }
            return this.F
        }
        da(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.T(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    var Ye = gd(a => typeof a === "string"),
        Ze = gd(a => a === void 0);
    var $e = class extends L {
            constructor() {
                super()
            }
        },
        af = [2, 3, 4];
    var bf = class extends L {};
    bf.B = [2, 8];
    var cf = [3, 4, 5],
        df = [6, 7];
    var ef = class extends L {
            constructor() {
                super()
            }
        },
        ff = [4, 5];

    function gf(a, b) {
        var c = D(a, bf, 2);
        if (!c.length) return hf(a, b);
        a = I(a, 1);
        if (a === 1) return c = gf(c[0], b), c.success ? {
            success: !0,
            value: !c.value
        } : c;
        c = Ra(c, d => gf(d, b));
        switch (a) {
            case 2:
                return c.find(d => d.success && !d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !0
                };
            case 3:
                return c.find(d => d.success && d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !1
                };
            default:
                return {
                    success: !1,
                    O: 3
                }
        }
    }

    function hf(a, b) {
        var c = Ic(a, cf);
        a: {
            switch (c) {
                case 3:
                    var d = Yc(a, 3, cf);
                    break a;
                case 4:
                    d = Yc(a, 4, cf);
                    break a;
                case 5:
                    d = Yc(a, 5, cf);
                    break a
            }
            d = void 0
        }
        if (!d) return {
            success: !1,
            O: 2
        };
        b = (b = b[c]) && b[d];
        if (!b) return {
            success: !1,
            property: d,
            ga: c,
            O: 1
        };
        let e;
        try {
            var f = Xc(a, 8);
            e = b(...f)
        } catch (g) {
            return {
                success: !1,
                property: d,
                ga: c,
                O: 2
            }
        }
        f = I(a, 1);
        if (f === 4) return {
            success: !0,
            value: !!e
        };
        if (f === 5) return {
            success: !0,
            value: e != null
        };
        if (f === 12) a = H(a, Hc(a, df, 7));
        else a: {
            switch (c) {
                case 4:
                    a = Wc(a, Hc(a, df, 6));
                    break a;
                case 5:
                    a = H(a, Hc(a,
                        df, 7));
                    break a
            }
            a = void 0
        }
        if (a == null) return {
            success: !1,
            property: d,
            ga: c,
            O: 3
        };
        if (f === 6) return {
            success: !0,
            value: e === a
        };
        if (f === 9) return {
            success: !0,
            value: e != null && ya(String(e), a) === 0
        };
        if (e == null) return {
            success: !1,
            property: d,
            ga: c,
            O: 4
        };
        switch (f) {
            case 7:
                c = e < a;
                break;
            case 8:
                c = e > a;
                break;
            case 12:
                c = Ye(a) && Ye(e) && (new RegExp(a)).test(e);
                break;
            case 10:
                c = e != null && ya(String(e), a) === -1;
                break;
            case 11:
                c = e != null && ya(String(e), a) === 1;
                break;
            default:
                return {
                    success: !1,
                    O: 3
                }
        }
        return {
            success: !0,
            value: c
        }
    }

    function jf(a, b) {
        return a ? b ? gf(a, b) : {
            success: !1,
            O: 1
        } : {
            success: !0,
            value: !0
        }
    };
    var Lc = class extends L {};
    Lc.B = [4];
    var kf = class extends L {
        getValue() {
            return B(this, Lc, 2)
        }
    };
    var lf = class extends L {},
        mf = id(lf);
    lf.B = [5];
    var nf = [1, 2, 3, 6, 7, 8];
    var of = class extends L {
        constructor() {
            super()
        }
    };

    function pf(a, b) {
        try {
            const c = d => [{
                [d.Ha]: d.Ea
            }];
            return JSON.stringify([a.filter(d => d.pa).map(c), cd(b), a.filter(d => !d.pa).map(c)])
        } catch (c) {
            return qf(c, b), ""
        }
    }

    function qf(a, b) {
        try {
            ne({
                m: Ve(a instanceof Error ? a : Error(String(a))),
                b: I(b, 1) || null,
                v: H(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var rf = class {
        constructor(a, b) {
            var c = new of ;
            a = A(c, 1, w(a), 0);
            b = ad(a, 2, b);
            a = b.D;
            c = a[t];
            this.j = c & 2 ? b : $b(b.constructor, jc(a, c, !0))
        }
    };
    var sf = class extends L {
        constructor() {
            super()
        }
    };
    sf.B = [2];
    var tf = class extends L {
        constructor() {
            super()
        }
        getValue() {
            return I(this, 1)
        }
    };
    var uf = class extends L {
        constructor() {
            super()
        }
        getWidth() {
            return Vc(this, 1)
        }
        getHeight() {
            return Vc(this, 2)
        }
    };
    var vf = class extends L {
        constructor() {
            super()
        }
        getContentUrl() {
            return H(this, 4)
        }
    };
    var wf = class extends L {};

    function xf(a) {
        return Jc(a, wf, 3)
    }
    var yf = class extends L {};

    function zf(a, b) {
        return ad(a, 1, b)
    }
    var Af = class extends L {
        constructor() {
            super()
        }
        getContentUrl() {
            return H(this, 1)
        }
    };
    var Bf = class extends L {};

    function Cf(a) {
        var b = new Df;
        return A(b, 1, w(a), 0)
    }
    var Df = class extends L {
        constructor() {
            super()
        }
    };
    var Ef = class extends L {
            constructor() {
                super()
            }
        },
        Ff = [4, 5, 6, 8, 9, 10, 11, 12, 13];
    var Gf = class extends L {
        constructor() {
            super()
        }
    };

    function Hf(a, b) {
        return A(a, 1, w(b), 0)
    }

    function If(a, b) {
        return A(a, 2, w(b), 0)
    }
    var Jf = class extends L {
        constructor() {
            super()
        }
    };
    var Kf = class extends L {
            constructor() {
                super()
            }
        },
        Lf = [1, 2];

    function Mf(a, b) {
        return Mc(a, 1, b)
    }

    function Nf(a, b) {
        return Oc(a, 2, b)
    }

    function Of(a, b) {
        return Cc(a, 4, b, Lb)
    }

    function Pf(a, b) {
        return Oc(a, 5, b)
    }

    function Qf(a, b) {
        return A(a, 6, w(b), 0)
    }
    var Rf = class extends L {
        constructor() {
            super()
        }
    };
    Rf.B = [2, 4, 5];
    var Sf = class extends L {
        constructor() {
            super()
        }
    };
    Sf.B = [5];
    var Tf = [1, 2, 3, 4, 6];
    var Uf = class extends L {
        constructor() {
            super()
        }
    };
    Uf.B = [2, 3];

    function Vf(a) {
        var b = new Wf;
        return Nc(b, 4, Xf, a)
    }
    var Wf = class extends L {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return Vc(this, 2)
            }
        },
        Xf = [4, 5, 7, 8, 9];
    var Yf = class extends L {
        constructor() {
            super()
        }
    };
    var Zf = class extends L {
        constructor() {
            super()
        }
    };
    Zf.B = [4, 5];
    var $f = class extends L {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return Vc(this, 1)
        }
    };
    $f.B = [2];
    var ag = class extends L {
            constructor() {
                super()
            }
        },
        bg = [4, 6];
    class cg extends rf {
        constructor() {
            super(...arguments)
        }
    }

    function dg(a, ...b) {
        eg(a, ...b.map(c => ({
            pa: !0,
            Ha: 3,
            Ea: cd(c)
        })))
    }

    function fg(a, ...b) {
        eg(a, ...b.map(c => ({
            pa: !0,
            Ha: 4,
            Ea: cd(c)
        })))
    }

    function gg(a, ...b) {
        eg(a, ...b.map(c => ({
            pa: !0,
            Ha: 7,
            Ea: cd(c)
        })))
    }
    var hg = class extends cg {};
    var ig = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function eg(a, ...b) {
        try {
            a.F && pf(a.g.concat(b), a.j).length >= 65536 && jg(a), a.u && !a.A && (a.A = !0, kg(a.u, () => {
                jg(a)
            })), a.g.push(...b), a.g.length >= a.C && jg(a), a.g.length && a.i === null && (a.i = setTimeout(() => {
                jg(a)
            }, a.J))
        } catch (c) {
            qf(c, a.j)
        }
    }

    function jg(a) {
        a.i !== null && (clearTimeout(a.i), a.i = null);
        if (a.g.length) {
            var b = pf(a.g, a.j);
            a.I("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var lg = class extends hg {
            constructor(a, b, c, d, e, f) {
                super(a, b);
                this.I = ig;
                this.J = c;
                this.C = d;
                this.F = e;
                this.u = f;
                this.g = [];
                this.i = null;
                this.A = !1
            }
        },
        mg = class extends lg {
            constructor(a, b, c = 1E3, d = 100, e = !1, f) {
                super(a, b, c, d, e && !0, f)
            }
        };

    function ng(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = J(b, 1, c);
        c = ge(window);
        b = J(b, 2, c);
        return J(b, 6, a.A)
    }

    function og(a, b, c, d, e, f) {
        if (a.j) {
            var g = If(Hf(new Jf, b), c);
            b = Qf(Nf(Mf(Pf(Of(new Rf, d), e), g), a.g.slice()), f);
            b = Vf(b);
            fg(a.i, ng(a, b));
            if (f === 1 || f === 3 || f === 4 && !a.g.some(h => I(h, 1) === I(g, 1) && I(h, 2) === c)) a.g.push(g), a.g.length > 100 && a.g.shift()
        }
    }

    function pg(a, b, c, d) {
        if (a.j) {
            var e = new Gf;
            b = y(e, 1, Mb(b));
            c = y(b, 2, Mb(c));
            d = y(c, 3, w(d));
            c = new Wf;
            d = Nc(c, 8, Xf, d);
            fg(a.i, ng(a, d))
        }
    }

    function qg(a, b, c, d, e) {
        if (a.j) {
            var f = new ef;
            b = Mc(f, 1, b);
            c = y(b, 2, w(c));
            d = y(c, 3, Mb(d));
            if (e.ga === void 0) Ec(d, 4, ff, w(e.O));
            else switch (e.ga) {
                case 3:
                    c = new $e;
                    c = Ec(c, 2, af, w(e.property));
                    e = y(c, 1, w(e.O));
                    Nc(d, 5, ff, e);
                    break;
                case 4:
                    c = new $e;
                    c = Ec(c, 3, af, w(e.property));
                    e = y(c, 1, w(e.O));
                    Nc(d, 5, ff, e);
                    break;
                case 5:
                    c = new $e, c = Ec(c, 4, af, w(e.property)), e = y(c, 1, w(e.O)), Nc(d, 5, ff, e)
            }
            e = new Wf;
            e = Nc(e, 9, Xf, d);
            fg(a.i, ng(a, e))
        }
    }
    var rg = class {
        constructor(a, b, c, d = new mg(6, "unknown", b)) {
            this.A = a;
            this.u = c;
            this.i = d;
            this.g = [];
            this.j = a > 0 && Sd() < 1 / a
        }
    };
    var M = a => {
        var b = "Da";
        if (a.Da && a.hasOwnProperty(b)) return a.Da;
        b = new a;
        return a.Da = b
    };
    var sg = class {
        constructor() {
            this.N = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var tg = /^true$/.test("false");

    function ug(a, b) {
        switch (b) {
            case 1:
                return Yc(a, 1, nf);
            case 2:
                return Yc(a, 2, nf);
            case 3:
                return Yc(a, 3, nf);
            case 6:
                return Yc(a, 6, nf);
            case 8:
                return Yc(a, 8, nf);
            default:
                return null
        }
    }

    function vg(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return G(a, 1);
            case 7:
                return H(a, 3);
            case 2:
                return Wc(a, 2);
            case 3:
                return H(a, 3);
            case 6:
                return Xc(a, 4);
            case 8:
                return Xc(a, 4);
            default:
                return null
        }
    }
    const wg = md(() => {
        if (!tg) return {};
        try {
            var a = window;
            try {
                var b = a.sessionStorage
            } catch {
                b = null
            }
            if (b = b ? .getItem("GGDFSSK")) return JSON.parse(b)
        } catch {}
        return {}
    });

    function xg(a, b, c, d = 0) {
        M(yg).j[d] = M(yg).j[d] ? .add(b) ? ? (new Set).add(b);
        const e = wg();
        if (e[b] != null) return e[b];
        b = zg(d)[b];
        if (!b) return c;
        b = mf(JSON.stringify(b));
        b = Ag(b);
        a = vg(b, a);
        return a != null ? a : c
    }

    function Ag(a) {
        const b = M(sg).N;
        if (b && Ic(a, nf) !== 8) {
            const c = Ta(D(a, kf, 5), d => {
                d = jf(B(d, bf, 1), b);
                return d.success && d.value
            });
            if (c) return c.getValue() ? ? null
        }
        return B(a, Lc, 4) ? ? null
    }
    class yg {
        constructor() {
            this.i = {};
            this.u = [];
            this.j = {};
            this.g = new Map
        }
    }

    function Bg(a, b = !1, c) {
        return !!xg(1, a, b, c)
    }

    function Eg(a, b = 0, c) {
        a = Number(xg(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Fg(a, b = "", c) {
        a = xg(3, a, b, c);
        return typeof a === "string" ? a : b
    }

    function Gg(a, b = [], c) {
        a = xg(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Hg(a, b = [], c) {
        a = xg(8, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function zg(a) {
        return M(yg).i[a] || (M(yg).i[a] = {})
    }

    function Ig(a, b) {
        const c = zg(b);
        Td(a, (d, e) => {
            if (c[e]) {
                const g = mf(JSON.stringify(d));
                if (F(g, Hc(g, nf, 8)) != null) {
                    var f = mf(JSON.stringify(c[e]));
                    d = Jc(g, Lc, 4);
                    f = Xc(Kc(f), 4);
                    Dc(d, f)
                }
                c[e] = cd(g)
            } else c[e] = d
        })
    }

    function Jg(a, b, c, d, e = !1) {
        var f = [],
            g = [];
        for (const n of b) {
            b = zg(n);
            for (const q of a) {
                var h = Ic(q, nf);
                const v = ug(q, h);
                if (v) {
                    a: {
                        var k = v;
                        var l = h,
                            m = M(yg).g.get(n) ? .get(v) ? .slice(0) ? ? [];
                        const u = new Sf;
                        switch (l) {
                            case 1:
                                Ec(u, 1, Tf, w(k));
                                break;
                            case 2:
                                Ec(u, 2, Tf, w(k));
                                break;
                            case 3:
                                Ec(u, 3, Tf, w(k));
                                break;
                            case 6:
                                Ec(u, 4, Tf, w(k));
                                break;
                            case 8:
                                Ec(u, 6, Tf, w(k));
                                break;
                            default:
                                k = void 0;
                                break a
                        }
                        Cc(u, 5, m, Lb);k = u
                    }
                    k && M(yg).j[n] ? .has(v) && f.push(k);h === 8 && b[v] ? (k = mf(JSON.stringify(b[v])), h = Jc(q, Lc, 4), k = Xc(Kc(k), 4), Dc(h, k)) : k &&
                    M(yg).g.get(n) ? .has(v) && g.push(k);e || (h = v, k = n, l = d, m = M(yg), m.g.has(k) || m.g.set(k, new Map), m.g.get(k).has(h) || m.g.get(k).set(h, []), l && m.g.get(k).get(h).push(l));b[v] = cd(q)
                }
            }
        }
        if (f.length || g.length) a = d ? ? void 0, c.j && c.u && (d = new Uf, f = Oc(d, 2, f), g = Oc(f, 3, g), a && A(g, 1, Mb(a), 0), f = new Wf, g = Nc(f, 7, Xf, g), fg(c.i, ng(c, g)))
    }

    function Kg(a, b) {
        b = zg(b);
        for (const c of a) {
            a = mf(JSON.stringify(c));
            const d = Ic(a, nf);
            (a = ug(a, d)) && (b[a] || (b[a] = c))
        }
    }

    function Lg() {
        return Object.keys(M(yg).i).map(a => Number(a))
    }

    function Mg(a) {
        M(yg).u.includes(a) || Ig(zg(4), a)
    };

    function O(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Ng(a, b, c) {
        return b[a] || c
    }

    function Og(a) {
        O(5, Bg, a);
        O(6, Eg, a);
        O(7, Fg, a);
        O(8, Gg, a);
        O(17, Hg, a);
        O(13, Kg, a);
        O(15, Mg, a)
    }

    function Pg(a) {
        O(4, b => {
            M(sg).N = b
        }, a);
        O(9, (b, c) => {
            var d = M(sg);
            d.N[3][b] == null && (d.N[3][b] = c)
        }, a);
        O(10, (b, c) => {
            var d = M(sg);
            d.N[4][b] == null && (d.N[4][b] = c)
        }, a);
        O(11, (b, c) => {
            var d = M(sg);
            d.N[5][b] == null && (d.N[5][b] = c)
        }, a);
        O(14, b => {
            var c = M(sg);
            for (const d of [3, 4, 5]) Object.assign(c.N[d], b[d])
        }, a)
    }

    function Qg(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Rg(a, b, c) {
        a.j = Ng(1, b, () => {});
        a.u = (d, e) => Ng(2, b, () => [])(d, c, e);
        a.g = () => Ng(3, b, () => [])(c);
        a.i = d => {
            Ng(16, b, () => {})(d, c)
        }
    }
    class Sg {
        j() {}
        i() {}
        u() {
            return []
        }
        g() {
            return []
        }
    };

    function We(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Ue ? f = c : (f = new Ue, Td(c, (h, k) => {
                var l = f;
                const m = l.u++;
                h = Pe(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = Te(f, "/pagead/gen_204?id=" + b + "&");
            g && je(p, g)
        } catch (f) {}
    }

    function Tg(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Ug {
        constructor() {
            this.g = Math.random()
        }
    };
    let Vg, Wg;
    const Xg = new Oe(window);
    (a => {
        Vg = a ? ? new Ug;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Tg(Vg, window.google_srt);
        Wg = new Xe(Vg, !0, Xg);
        Wg.Ga(() => {});
        Wg.u(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || Ne(Xg) : Xg.g && od(window, "load", () => {
            window.google_measure_js_timing || Ne(Xg)
        })
    })();
    var Yg = {
        Wb: 0,
        Vb: 1,
        Sb: 2,
        Nb: 3,
        Tb: 4,
        Ob: 5,
        Ub: 6,
        Qb: 7,
        Rb: 8,
        Mb: 9,
        Pb: 10,
        Xb: 11
    };
    var Zg = {
        Zb: 0,
        ac: 1,
        Yb: 2
    };

    function $g(a) {
        if (a.g != 0) throw Error("Already resolved/rejected.");
    }
    var ch = class {
        constructor() {
            this.i = new ah(this);
            this.g = 0
        }
        resolve(a) {
            $g(this);
            this.g = 1;
            this.u = a;
            bh(this.i)
        }
        reject(a) {
            $g(this);
            this.g = 2;
            this.j = a;
            bh(this.i)
        }
    };

    function bh(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.g.u);
                break;
            case 2:
                a.j && a.j(a.g.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var ah = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.i) throw Error("Then functions already set.");
            this.i = a;
            this.j = b;
            bh(this)
        }
    };
    const dh = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new dh(Qa(this.g, a))
        }
        apply(a) {
            return new dh(a(this.g.slice(0)))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new dh(b)
        }
    };

    function eh(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const gh = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = fh(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = fh(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function fh(a) {
        return a instanceof Object ? String(ma(a)) : a + ""
    };

    function hh(a) {
        return new ih({
            value: a
        }, null)
    }

    function jh(a) {
        return new ih(null, a)
    }

    function kh(a) {
        try {
            return hh(a())
        } catch (b) {
            return jh(b)
        }
    }

    function lh(a) {
        return a.g != null ? a.getValue() : null
    }

    function mh(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function nh(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class ih {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof ih ? a : hh(a)) : this
        }
    };
    const oh = class {
        constructor(a) {
            this.g = new gh;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return this.g.g[fh(a)] !== void 0
        }
    };
    class ph {
        constructor() {
            this.g = new gh
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new oh, this.g.set(a, c));
            c.add(b)
        }
    };
    var P = class extends L {
        getId() {
            return E(this, 3)
        }
    };
    P.B = [4];
    class qh {
        constructor({
            qb: a,
            bc: b,
            mc: c,
            Eb: d
        }) {
            this.g = b;
            this.u = new dh(a || []);
            this.j = d;
            this.i = c
        }
    };
    const sh = a => {
            const b = [],
                c = a.u;
            c && c.g.length && b.push({
                ba: "a",
                fa: rh(c)
            });
            a.g != null && b.push({
                ba: "as",
                fa: a.g
            });
            a.i != null && b.push({
                ba: "i",
                fa: String(a.i)
            });
            a.j != null && b.push({
                ba: "rp",
                fa: String(a.j)
            });
            b.sort(function(d, e) {
                return d.ba.localeCompare(e.ba)
            });
            b.unshift({
                ba: "t",
                fa: "aa"
            });
            return b
        },
        rh = a => {
            a = a.g.slice(0).map(th);
            a = JSON.stringify(a);
            return Ud(a)
        },
        th = a => {
            const b = {};
            E(a, 7) != null && (b.q = E(a, 7));
            Tc(a, 2) != null && (b.o = Tc(a, 2));
            Tc(a, 5) != null && (b.p = Tc(a, 5));
            return b
        };
    var uh = class extends L {
        setLocation(a) {
            return y(this, 1, w(a))
        }
    };

    function vh(a) {
        const b = [].slice.call(arguments).filter(ld(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Za || []);
            d = Object.assign(d, e.jb)
        });
        return new wh(c, d)
    }

    function xh(a) {
        switch (a) {
            case 1:
                return new wh(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new wh(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new wh(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new wh(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function yh(a) {
        if (a == null) var b = null;
        else {
            var c = sh(a);
            a = [];
            for (b of c) c = String(b.fa), a.push(b.ba + "." + (c.length <= 20 ? c : c.slice(0, 19) + "_"));
            b = new wh(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class wh {
        constructor(a, b) {
            this.Za = a;
            this.jb = b
        }
    };
    const zh = new wh(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var Ah = id(class extends L {});
    var Bh = class extends L {};
    var Ch = class extends L {};
    var Dh = class extends L {};
    Dh.B = [6, 7, 9, 10, 11];
    var Eh = class extends L {};
    var Fh = class extends L {
        constructor() {
            super()
        }
    };
    Fh.B = [1];

    function Gh(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };
    var Q = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Hh = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Ih = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var Jh = new Q(1333),
        Kh = new Hh(1359),
        Lh = new Hh(1358),
        Mh = new Q(1360),
        Nh = new Hh(1357),
        Oh = new Q(1322, !0),
        Ph = new Q(1345),
        Qh = new Q(1355, !0),
        Rh = new Q(1332),
        Sh = new Hh(1130, 100),
        Th = new Hh(1340, .2),
        Uh = new Hh(1338, .3),
        Vh = new Hh(1336, 1.2),
        Wh = new Hh(1339, .3),
        Xh = new Q(1337),
        Yh = new class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        }(14),
        Zh = new Q(1342),
        $h = new Q(1344),
        ai = new Hh(1343, 300),
        bi = new Q(316),
        ci = new Q(1207, !0),
        di = new Q(313),
        ei = new Q(369),
        fi = new Q(1318, !0),
        gi = new Q(217),
        hi = new Q(1362),
        ii = new Q(626390500),
        ji = new Ih(627094447, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        ki = new Hh(643258048),
        li = new Hh(643258049),
        mi = new Hh(579884443, .7),
        ni = new Ih(641845510, ["33"]),
        oi = new Q(622128248, !0),
        pi = new Ih(635821288, ["30_19"]),
        qi = new Ih(636146137, ["30_6"]),
        ri = new Q(579884441, !0),
        si = new Ih(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        ti = new Hh(579884442, .7),
        ui = new Q(626062008),
        vi = new Q(643258050),
        wi = new Q(506914611),
        xi = new Q(626062007),
        yi = new Q(638621371, !0),
        zi = new Q(1120),
        Ai = new Q(45615403, !0),
        Bi = new Hh(1079, 5),
        Ci = new Q(10009, !0),
        Di = new Q(10013),
        ee = new class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        }(1934, ["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
            "A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ]),
        Ei = new Q(84);
    var de = class {
        constructor() {
            const a = {};
            this.i = (b, c) => a[b] != null ? a[b] : c;
            this.u = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.j = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.C = () => {}
        }
    };

    function R(a) {
        return M(de).i(a.g, a.defaultValue)
    }

    function S(a) {
        return M(de).u(a.g, a.defaultValue)
    }

    function Fi(a) {
        return M(de).j(a.g, a.defaultValue)
    };

    function Gi(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Gh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Hi(a, b) {
        const c = e => {
                e = Ii(e);
                return e == null ? !1 : 0 < e
            },
            d = e => {
                e = Ii(e);
                return e == null ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: Ji(a.previousSibling, c),
                    la: e => Ji(e.previousSibling, c),
                    ra: 0
                };
            case 2:
                return {
                    init: Ji(a.lastChild, c),
                    la: e => Ji(e.previousSibling, c),
                    ra: 0
                };
            case 3:
                return {
                    init: Ji(a.nextSibling, d),
                    la: e => Ji(e.nextSibling, d),
                    ra: 3
                };
            case 1:
                return {
                    init: Ji(a.firstChild, d),
                    la: e => Ji(e.nextSibling, d),
                    ra: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Ii(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ji(a, b) {
        return a && b(a) ? a : null
    };
    var Ki = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Li = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Mi(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function T(a) {
        return Mi(a).clientWidth ? ? void 0
    };

    function Ni(a, b) {
        do {
            const c = Rd(a, b);
            if (c && c.position == "fixed") return !1
        } while (a = a.parentElement);
        return !0
    };

    function Oi(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = Yd(a[c[e]]);
                d = d === null ? null : Math.round(d);
                d != null && (b[f] = d)
            }
        }
    }

    function Pi(a, b) {
        return !((Wd.test(b.google_ad_width) || Vd.test(a.style.width)) && (Wd.test(b.google_ad_height) || Vd.test(a.style.height)))
    }

    function Qi(a, b) {
        return (a = Ri(a, b)) ? a.y : 0
    }

    function Ri(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function Si(a, b, c, d, e) {
        if (a !== a.top) return Od(a) ? 3 : 16;
        if (!(T(a) < 488)) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        const f = T(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = e.google_full_width_responsive !== "true") a: {
                c = b.parentElement;
                for (b = T(a); c; c = c.parentElement)
                    if ((d = Rd(c, a)) && (e = Yd(d.width)) && !(e >= b) && d.overflow !== "visible") {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Ti(a, b, c, d) {
        const e = Si(b, c, a, S(Wh), d);
        e !== !0 ? a = e : d.google_full_width_responsive === "true" || Ni(c, b) ? (b = T(b), a = b - a, a = b && a >= 0 ? !0 : b ? a < -10 ? 11 : a < 0 ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Ui(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function Vi(a, b) {
        if (b.nodeType === 3) return /\S/.test(b.data);
        if (b.nodeType === 1) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            let c;
            try {
                c = Rd(b, a)
            } catch (d) {}
            return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
        }
        return !1
    }

    function Wi(a, b, c) {
        a = Ri(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function Xi(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Rd(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            Ui(b, c, "0px");
            d.width = `${T(a)}px`;
            if (Wi(a, b, c) !== 0) {
                Ui(b, c, "0px");
                var e = Wi(a, b, c);
                Ui(b, c, `${-1*e}px`);
                a = Wi(a, b, c);
                a !== 0 && a !== e && Ui(b, c, `${e/(a-e)*e}px`)
            }
            d.zIndex = "30"
        }
    };
    var Yi = class {
        constructor(a, b) {
            this.aa = a;
            this.j = b
        }
        height() {
            return this.j
        }
        g(a) {
            return a > S(ai) && this.j > 300 ? this.aa : Math.min(1200, Math.round(a))
        }
        i() {}
    };
    var Zi = (a, b, c) => {
            let d;
            return a.style && !!a.style[c] && Yd(a.style[c]) || (d = Rd(a, b)) && !!d[c] && Yd(d[c]) || null
        },
        $i = (a, b) => {
            let c;
            return a.style && a.style.zIndex || (c = Rd(a, b)) && c.zIndex || null
        },
        aj = a => b => b.aa <= a,
        dj = (a, b, c, d) => {
            const e = a && bj(c, b),
                f = cj(b, d);
            return g => !(e && g.height() >= f)
        },
        ej = a => b => b.height() <= a,
        bj = (a, b) => Qi(a, b) < Mi(b).clientHeight - 100,
        fj = (a, b) => {
            var c = Zi(b, a, "height");
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = Zi(b, a, "height");
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style &&
                Yd(b.style.height)) && (c = Math.min(c, d)), (d = Zi(b, a, "maxHeight")) && (c = Math.min(c, d)); while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
            return c
        };
    const cj = (a, b) => {
        const c = we(a) === 0;
        return b && c ? Math.max(250, 2 * Mi(a).clientHeight / 3) : 250
    };
    var gj = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_ad_start_delay_hint: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0,
        google_privacy_treatments: !0,
        google_special_category_data: !0,
        google_ad_intent_query: !0,
        google_ad_intent_qetid: !0,
        google_ad_intent_eids: !0
    };
    const hj = RegExp("(^| )adsbygoogle($| )");

    function ij(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Fd(d.property);
            a[e] = d.value
        }
    };
    var jj = class extends L {
        g() {
            return Sc(this, 23)
        }
    };
    var kj = class extends L {
        g() {
            return Pc(this, 1)
        }
    };
    var lj = class extends L {};
    var mj = class extends L {};
    var nj = class extends L {};
    var oj = class extends L {};
    var pj = class extends L {
            getName() {
                return E(this, 4)
            }
        },
        qj = [1, 2, 3];
    var rj = class extends L {};
    rj.B = [2, 5, 6, 11];
    var sj = class extends L {};
    var uj = class extends L {
            g() {
                return Zc(this, sj, 2, tj)
            }
        },
        tj = [1, 2];
    var vj = class extends L {
        g() {
            return B(this, uj, 3)
        }
    };
    vj.B = [1, 4];
    var wj = class extends L {},
        xj = id(wj);
    wj.B = [1, 2, 5, 7];

    function yj(a) {
        var b = [];
        eh(a.getElementsByTagName("p"), function(c) {
            zj(c) >= 100 && b.push(c)
        });
        return b
    }

    function zj(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        eh(a.childNodes, function(c) {
            b += zj(c)
        });
        return b
    }

    function Aj(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Bj(a, b) {
        if (a.g == null) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const Cj = class {
        constructor(a, b, c, d) {
            this.u = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.u)
            } catch (f) {}
            if (!b.length) return [];
            a = Va(b);
            a = Bj(this, a);
            typeof this.i === "number" && (b = this.i, b < 0 && (b += a.length), a = b >= 0 && b < a.length ? [a[b]] : []);
            if (typeof this.j === "number") {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = yj(a[c]),
                        e = this.j;
                    e < 0 && (e += d.length);
                    e >= 0 && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.u,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class Dj {
        constructor() {
            var a = Cd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.j = !1;
            this.A = Math.random();
            this.i = this.T;
            this.C = a
        }
        Ga(a) {
            this.g = a
        }
        u(a) {
            this.j = a
        }
        kb(a) {
            this.i = a
        }
        T(a, b, c = .01, d, e = "jserror") {
            if ((this.j ? this.A : Math.random()) > c) return !1;
            Ae(b) || (b = new ze(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            p.google_js_errors = p.google_js_errors || [];
            p.google_js_errors.push(b);
            p.error_rep_loaded || (Pd(p.document, this.C), p.error_rep_loaded = !0);
            return !1
        }
        ha(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.i(a, d, .01, c, "jserror")) throw d;
            }
        }
        sa(a, b) {
            return (...c) => this.ha(a, () => b.apply(void 0, c))
        }
        da(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.T(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    const Ej = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var Fj = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = typeof queueMicrotask !== "undefined";
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = He();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && Ej({
                        label: a.toString(),
                        value: h,
                        duration: (He() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        Gj = (a, b) => Fj(a, b, (c, d) => {
            (new Dj).T(c, d)
        }, void 0, !1);

    function Hj(a, b, c) {
        return Fj(a, b, void 0, c, !0).apply()
    }

    function Ij(a) {
        if (!a) return null;
        var b = E(a, 7);
        if (E(a, 1) || a.getId() || Xc(a, 4).length > 0) {
            var c = E(a, 3),
                d = E(a, 1),
                e = Xc(a, 4);
            b = Tc(a, 2);
            var f = Tc(a, 5);
            a = Jj(F(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Aj(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Aj(e[c]);
            b = (e = g) ? new Cj(e, b, f, a) : null
        } else b = b ? new Cj(b, Tc(a, 2), Tc(a, 5), Jj(F(a, 6))) : null;
        return b
    }
    var Kj = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Jj(a) {
        return a == null ? a : Kj[a]
    }
    var Lj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Mj(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Nj(a) {
        a = Mj(a);
        return a.optimization = a.optimization || {}
    };
    var Oj = a => {
        switch (F(a, 8)) {
            case 1:
            case 2:
                if (a == null) var b = null;
                else b = B(a, P, 1), b == null ? b = null : (a = F(a, 2), b = a == null ? null : new qh({
                    qb: [b],
                    Eb: a
                }));
                return b != null ? hh(b) : jh(Error("Missing dimension when creating placement id"));
            case 3:
                return jh(Error("Missing dimension when creating placement id"));
            default:
                return jh(Error("Invalid type: " + F(a, 8)))
        }
    };
    var Pj = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Qj(a, b) {
        const c = new ph,
            d = new oh;
        b.forEach(e => {
            if (Zc(e, nj, 1, qj)) {
                e = Zc(e, nj, 1, qj);
                if (B(e, Bh, 1) && B(B(e, Bh, 1), P, 1) && B(e, Bh, 2) && B(B(e, Bh, 2), P, 1)) {
                    const g = Rj(a, B(B(e, Bh, 1), P, 1)),
                        h = Rj(a, B(B(e, Bh, 2), P, 1));
                    if (g && h)
                        for (var f of Pj({
                                anchor: g,
                                position: F(B(e, Bh, 1), 2)
                            }, {
                                anchor: h,
                                position: F(B(e, Bh, 2), 2)
                            })) c.set(ma(f.anchor), f.position)
                }
                B(e, Bh, 3) && B(B(e, Bh, 3), P, 1) && (f = Rj(a, B(B(e, Bh, 3), P, 1))) && c.set(ma(f), F(B(e, Bh, 3), 2))
            } else Zc(e, oj, 2, qj) ? Sj(a, Zc(e, oj, 2, qj), c) : Zc(e, mj, 3, qj) && Tj(a, Zc(e, mj, 3, qj), d)
        });
        return new Uj(c,
            d)
    }
    class Uj {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const Sj = (a, b, c) => {
            B(b, Bh, 2) ? (b = B(b, Bh, 2), (a = Rj(a, B(b, P, 1))) && c.set(ma(a), F(b, 2))) : B(b, P, 1) && (a = Vj(a, B(b, P, 1))) && a.forEach(d => {
                d = ma(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Tj = (a, b, c) => {
            B(b, P, 1) && (a = Vj(a, B(b, P, 1))) && a.forEach(d => {
                c.add(ma(d))
            })
        },
        Rj = (a, b) => (a = Vj(a, b)) && a.length > 0 ? a[0] : null,
        Vj = (a, b) => (b = Ij(b)) ? b.query(a) : null;
    class U extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = Error().stack || ""
        }
    };
    let Wj, V;
    const Xj = new Oe(p);
    var Yj = a => {
        a != null && (p.google_measure_js_timing = a);
        p.google_measure_js_timing || Ne(Xj)
    };
    ((a, b = !0) => {
        Wj = a || new Ug;
        typeof p.google_srt !== "number" && (p.google_srt = Math.random());
        Tg(Wj, p.google_srt);
        V = new Xe(Wj, b, Xj);
        V.u(!0);
        p.document.readyState == "complete" ? Yj() : Xj.g && od(p, "load", () => {
            Yj()
        })
    })();
    var Zj = (a, b, c) => V.ha(a, b, c),
        ak = (a, b, c) => {
            const d = M(Sg).g();
            !b.eid && d.length && (b.eid = d.toString());
            We(Wj, a, b, !0, c)
        },
        bk = (a, b) => {
            V.da(a, b)
        },
        ck = (a, b, c, d) => {
            let e;
            Ae(b) ? e = b.msg || Ve(b.error) : e = Ve(b);
            return e.indexOf("TagError") == 0 ? ((b instanceof ze ? b.error : b).pbr = !0, !1) : V.T(a, b, c, d)
        };
    var dk = class {
        constructor() {
            this.g = fe();
            this.i = 0
        }
    };

    function ek(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (fk(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function gk(a) {
        a = hk(a);
        return a.has("all") || a.has("after")
    }

    function ik(a) {
        a = hk(a);
        return a.has("all") || a.has("before")
    }

    function hk(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function fk(a) {
        const b = hk(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var jk = class {
        constructor() {
            this.g = new Set;
            this.i = new dk
        }
    };

    function kk(a, b) {
        if (!a) return !1;
        a = Rd(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function lk(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function mk(a) {
        return !!a.nextSibling || !!a.parentNode && mk(a.parentNode)
    };

    function nk(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    const ok = a => {
        const b = nk(a);
        return b ? Qa(Ra(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
    };
    var pk = a => {
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

    function qk(a, b) {
        if (a.u) return !0;
        a.u = !0;
        const c = D(a.j, Dh, 1);
        a.i = 0;
        const d = rk(a.I);
        var e = a.g;
        var f;
        try {
            var g = (f = e.localStorage.getItem("google_ama_settings")) ? Ah(f) : null
        } catch (n) {
            g = null
        }
        f = g !== null && G(g, 2, !1);
        g = Mj(e);
        f && (g.eatf = !0, se(7, [!0, 0, !1]));
        b: {
            var h = {
                    yb: !1,
                    zb: !1
                },
                k = Va(e.document.querySelectorAll(".google-auto-placed"));
            const n = Va(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
                q = Va(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var l = (ok(e) || Va(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Va(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const v = Va(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                u = Va(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                x = Va(e.document.querySelectorAll("div.googlepublisherpluginad")),
                K = Va(e.document.querySelectorAll("html > ins.adsbygoogle"));
            let C = [].concat(Va(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Va(e.document.querySelectorAll("body ins.adsbygoogle")));f = [];
            for (const [eb, Wb] of [
                    [h.hc, k],
                    [h.yb, n],
                    [h.kc, q],
                    [h.ic, l],
                    [h.lc, v],
                    [h.fc, u],
                    [h.jc, x],
                    [h.zb, K]
                ]) eb === !1 ? f = f.concat(Wb) : C = C.concat(Wb);h = pk(C);f = pk(f);h = h.slice(0);
            for (m of f)
                for (f = 0; f < h.length; f++)(m.contains(h[f]) || h[f].contains(m)) &&
                    h.splice(f, 1);
            var m = h;e = Mi(e).clientHeight;
            for (f = 0; f < m.length; f++)
                if (!(m[f].getBoundingClientRect().top > e)) {
                    e = !0;
                    break b
                }
            e = !1
        }
        e = e ? g.eatfAbg = !0 : !1;
        if (e) return !0;
        e = new oh([2]);
        for (g = 0; g < c.length; g++) {
            m = a;
            h = c[g];
            f = g;
            l = b;
            if (B(h, uh, 4) && e.contains(F(B(h, uh, 4), 1)) && F(h, 8) === 1 && sk(h, d)) {
                m.i++;
                if (l = tk(m, h, l, d)) k = Mj(m.g), k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0), B(h, P, 1) && Tc(B(h, P, 1), 5) != null && (k.numPostPlacementsPlaced ? k.numPostPlacementsPlaced++ : k.numPostPlacementsPlaced = 1), k.placed == null && (k.placed = []),
                    k.numAutoAdsPlaced++, k.placed.push({
                        index: f,
                        element: l.ja
                    }), se(7, [!1, m.i, !0]);
                m = l
            } else m = null;
            if (m) return !0
        }
        se(7, [!1, a.i, !1]);
        return !1
    }

    function tk(a, b, c, d) {
        if (!sk(b, d) || F(b, 8) != 1) return null;
        d = B(b, P, 1);
        if (!d) return null;
        d = Ij(d);
        if (!d) return null;
        d = d.query(a.g.document);
        if (d.length == 0) return null;
        d = d[0];
        var e = F(b, 2);
        e = Lj[e];
        e = e === void 0 ? null : e;
        var f;
        if (!(f = e == null)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = kk(lk(d), f);
                        break a;
                    case 3:
                        f = kk(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = kk(g ? g.nodeType == 1 ? g : lk(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && e == 2 && !mk(d))) c = e == 1 || e == 2 ? d : d.parentNode,
            c = !(c && !Gh(c) && c.offsetWidth <= 0);f = !c
        }
        if (!(c = f)) {
            c = a.C;
            f = F(b, 2);
            g = c.i;
            var h = ma(d);
            g = g.g.get(h);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(ma(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(ma(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.F;
            g = F(b, 2);
            a: switch (g) {
                case 1:
                    f = gk(d.previousElementSibling) || ik(d);
                    break a;
                case 4:
                    f = gk(d) || ik(d.nextElementSibling);
                    break a;
                case 2:
                    f = ik(d.firstElementChild);
                    break a;
                case 3:
                    f = gk(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + g);
            }
            g = ek(c, d, g);
            c = c.i;
            ak("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.i++,
                dvc: Zd()
            }, .1);
            c = f || g
        }
        if (c) return null;
        f = B(b, Ch, 3);
        c = {};
        f && (c.nb = E(f, 1), c.Xa = E(f, 2), c.ub = !!Sc(f, 3));
        f = B(b, uh, 4) && F(B(b, uh, 4), 2) ? F(B(b, uh, 4), 2) : null;
        f = xh(f);
        g = Tc(b, 12) != null ? Tc(b, 12) : null;
        g = g == null ? null : new wh(null, {
            google_ml_rank: g
        });
        b = uk(a, b);
        b = vh(a.A, f, g, b);
        f = a.g;
        a = a.J;
        h = f.document;
        var k = c.ub || !1;
        g = Gd((new Hd(h)).g, "DIV");
        const l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.Db && ij(k, c.Db);
        h = Gd((new Hd(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.nb && (k.marginTop = c.nb);
        c.Xa && (k.marginBottom = c.Xa);
        c.pb && ij(k, c.pb);
        g.appendChild(h);
        c = {
            Ba: g,
            ja: h
        };
        c.ja.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Za) c.Ba.className = h.join(" ");
        h = c.ja;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = c.Ba;
                if (R(di)) {
                    {
                        const x = Hi(d, e);
                        if (x.init) {
                            var n =
                                x.init;
                            for (d = n; d = x.la(d);) n = d;
                            var q = {
                                anchor: n,
                                position: x.ra
                            }
                        } else q = {
                            anchor: d,
                            position: e
                        }
                    }
                    m["google-ama-order-assurance"] = 0;
                    Gi(m, q.anchor, q.position)
                } else Gi(m, d, e);
                b: {
                    var v = c.ja;v.dataset.adsbygoogleStatus = "reserved";v.className += " adsbygoogle-noablate";m = {
                        element: v
                    };
                    var u = b && b.jb;
                    if (v.hasAttribute("data-pub-vars")) {
                        try {
                            u = JSON.parse(v.getAttribute("data-pub-vars"))
                        } catch (x) {
                            break b
                        }
                        v.removeAttribute("data-pub-vars")
                    }
                    u && (m.params = u);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (x) {
                (v = c.Ba) && v.parentNode &&
                    (u = v.parentNode, u.removeChild(v), Gh(u) && (u.style.display = u.getAttribute("data-init-display") || "none"));
                v = !1;
                break a
            }
            v = !0
        }
        return v ? c : null
    }

    function uk(a, b) {
        return lh(nh(Oj(b).map(yh), c => {
            Mj(a.g).exception = c
        }))
    }
    const vk = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.J = b;
            this.j = c;
            this.A = e || null;
            (this.I = d) ? (a = a.document, d = D(d, pj, 5), d = Qj(a, d)) : d = Qj(a.document, []);
            this.C = d;
            this.F = new jk;
            this.i = 0;
            this.u = !1
        }
    };

    function rk(a) {
        const b = {};
        a && wc(a, 6, Kb).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function sk(a, b) {
        return a && uc(a, uh, 4) && b[F(B(a, uh, 4), 2)] ? !1 : !0
    };
    var wk = id(class extends L {});

    function xk(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? kh(() => wk(c)) : hh(null)
    };

    function yk() {
        if (Ak) return Ak;
        var a = ue() || window;
        const b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? Ak = b : a.google_persistent_state_async = Ak = new Bk
    }

    function Ck(a, b, c) {
        b = Dk[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function Ek(a, b, c) {
        return Ck(a, b, () => c)
    }

    function Fk(a, b, c) {
        a.S[Dk[b] || `google_ps_${b}`] = c
    }

    function Gk(a, b) {
        Fk(a, 38, b)
    }
    var Bk = class {
            constructor() {
                this.S = {}
            }
        },
        Ak = null;
    const Dk = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Hk(a) {
        var b = new Ik;
        return y(b, 5, Hb(a))
    }
    var Ik = class extends L {
        constructor() {
            super()
        }
    };
    Ik.B = [10];

    function Jk() {
        this.A = this.A;
        this.i = this.i
    }
    Jk.prototype.A = !1;
    Jk.prototype.dispose = function() {
        this.A || (this.A = !0, this.F())
    };
    Jk.prototype[ha(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function Kk(a, b) {
        a.A ? b() : (a.i || (a.i = []), a.i.push(b))
    }
    Jk.prototype.F = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };
    const Lk = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function Mk(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = Lk(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (ne({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function Nk(a) {
        if (a.g) return a.g;
        a: {
            let d = a.j;
            for (let e = 0; e < 50; ++e) {
                try {
                    var b = !(!d.frames || !d.frames.__tcfapiLocator)
                } catch {
                    b = !1
                }
                if (b) {
                    b = d;
                    break a
                }
                b: {
                    try {
                        const f = d.parent;
                        if (f && f != d) {
                            var c = f;
                            break b
                        }
                    } catch {}
                    c = null
                }
                if (!(d = c)) break
            }
            b = null
        }
        a.g = b;
        return a.g
    }

    function Ok(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (Nk(a)) {
            Pk(a);
            const e = ++a.X;
            a.C[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Pk(a) {
        a.u || (a.u = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, od(a.j, "message", a.u))
    }
    class Qk extends Jk {
        constructor(a) {
            var b = {};
            super();
            this.j = a;
            this.g = null;
            this.C = {};
            this.X = 0;
            this.J = b.mb ? ? 500;
            this.I = b.dc ? ? !1;
            this.u = null
        }
        F() {
            this.C = {};
            this.u && (pd(this.j, "message", this.u), delete this.u);
            delete this.C;
            delete this.j;
            delete this.g;
            super.F()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.I
            };
            const c = nd(() => a(b));
            let d = 0;
            this.J !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.J));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Lk(b),
                    b.internalBlockOnErrors = this.I, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Ok(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Ok(this, "removeEventListener", null, a.listenerId)
        }
    };
    var Vk = ({
            l: a,
            Y: b,
            mb: c,
            tb: d,
            ma: e = !1,
            na: f = !1
        }) => {
            b = Rk({
                l: a,
                Y: b,
                ma: e,
                na: f
            });
            b.g != null || b.i.message != "tcunav" ? d(b) : Sk(a, c).then(g => g.map(Tk)).then(g => g.map(h => Uk(a, h))).then(d)
        },
        Rk = ({
            l: a,
            Y: b,
            ma: c = !1,
            na: d = !1
        }) => {
            if (!Wk({
                    l: a,
                    Y: b,
                    ma: c,
                    na: d
                })) return Uk(a, Hk(!0));
            b = yk();
            return (b = Ek(b, 24)) ? Uk(a, Tk(b)) : jh(Error("tcunav"))
        };

    function Wk({
        l: a,
        Y: b,
        ma: c,
        na: d
    }) {
        if (d = !d) d = new Qk(a), d = typeof d.j.__tcfapi === "function" || Nk(d) != null;
        if (!d) {
            if (c = !c) {
                if (b) {
                    a = xk(a);
                    if (a.g != null)
                        if ((a = a.getValue()) && F(a, 1) != null) b: switch (a = F(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else V.T(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function Sk(a, b) {
        return Promise.race([Xk(), Yk(a, b)])
    }

    function Xk() {
        return (new Promise(a => {
            var b = yk();
            a = {
                resolve: a
            };
            const c = Ek(b, 25, []);
            c.push(a);
            Fk(b, 25, c)
        })).then(Zk)
    }

    function Yk(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, jh(Error("tcto")))
        })
    }

    function Zk(a) {
        return a ? hh(a) : jh(Error("tcnull"))
    }

    function Tk(a) {
        var b = {};
        if (Mk(a))
            if (a.gdprApplies === !1) a = !0;
            else if (a.tcString === "tcunavailable") a = !b.bb;
        else if ((b.bb || a.gdprApplies !== void 0 || b.ec) && (b.bb || typeof a.tcString === "string" && a.tcString.length)) {
            b: {
                if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], b !== void 0)) {
                    b = b["755"];
                    break b
                }
                b = void 0
            }
            b === 0 ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && a.publisherCC === "CH" ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
        }
        else a = !0;
        else a = !1;
        return Hk(a)
    }

    function Uk(a, b) {
        return (a = pe(b, a)) ? hh(a) : jh(Error("unav"))
    };
    var $k = class extends L {};
    $k.B = [1, 2, 3];
    var al = class extends L {};
    al.B = [1, 2, 3];
    var bl = class extends L {
        g() {
            return B(this, $k, 2)
        }
        i() {
            return B(this, al, 3)
        }
    };
    const cl = class {
        constructor(a) {
            this.exception = a
        }
    };

    function dl(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.g;
            Mj(e.g);
            D(e.j, Dh, 1);
            d.call(c, new cl(b))
        } catch (f) {
            a.i.reject(f)
        }
    }
    var el = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
        start() {
            this.u()
        }
        u() {
            try {
                switch (this.j.document.readyState) {
                    case "complete":
                    case "interactive":
                        qk(this.g, !0);
                        dl(this);
                        break;
                    default:
                        qk(this.g, !1) ? dl(this) : this.j.setTimeout(ra(this.u, this), 100)
                }
            } catch (a) {
                dl(this, a)
            }
        }
    };
    var fl = class extends L {
        constructor() {
            super()
        }
        getVersion() {
            return Uc(this, 2)
        }
    };
    fl.B = [3];

    function gl(a) {
        return $a(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function hl(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function il(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function jl(a) {
        var b = gl(a),
            c = hl(b.slice(0, 6));
        a = hl(b.slice(6, 12));
        var d = new fl;
        c = A(d, 1, Mb(c), 0);
        a = A(c, 2, Mb(a), 0);
        b = b.slice(12);
        c = hl(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = hl(e[0]) === 0;
            e = e.slice(1);
            var g = kl(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = il(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = kl(e, b);
                g = il(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Cc(a, 3, d, Lb)
    }

    function kl(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var ll = "a".charCodeAt(),
        ml = sd(Yg),
        nl = sd(Zg);

    function ol() {
        var a = new pl;
        return J(a, 1, 0)
    }

    function ql(a) {
        var b = Number;
        var c = rc(a, 1);
        c = c == null ? c : Jb(c) ? typeof c === "string" ? Sb(c) : Rb(c) : void 0;
        b = b(c ? ? "0");
        a = Uc(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var pl = class extends L {};

    function W(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function rl(a) {
        let b = W(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!W(a, 1) === !0,
                e = W(a, 16);
            if (d)
                for (d = W(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function sl(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (W(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function tl(a) {
        const b = W(a, 16);
        return !!W(a, 1) === !0 ? (a = rl(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : sl(a, b)
    }
    class ul {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var wl = a => {
        try {
            var b = $a(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new ul(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = W(c, 12);
            b.cmpVersion = W(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = W(c, 6);
            b.isServiceSpecific = !!W(c, 1);
            b.useNonStandardStacks = !!W(c, 1);
            b.specialFeatureOptins = vl(sl(c, 12, nl), nl);
            b.purpose = {
                consents: vl(sl(c, 24, ml), ml),
                legitimateInterests: vl(sl(c, 24, ml), ml)
            };
            b.purposeOneTreatment = !!W(c, 1);
            b.publisherCC = String.fromCharCode(ll + W(c, 6)) + String.fromCharCode(ll +
                W(c, 6));
            b.vendor = {
                consents: vl(tl(c), null),
                legitimateInterests: vl(tl(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const vl = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function xl() {
        return "m202407150101"
    };
    var yl = new Q(203);
    var zl = class extends L {
        g() {
            return E(this, 2) != null
        }
    };
    var Al = class extends L {
        g() {
            return E(this, 2) != null
        }
    };
    var Bl = class extends L {};
    var Cl = class extends L {},
        Dl = id(Cl);
    Cl.B = [7];

    function El(a) {
        a = Fl(a);
        try {
            var b = a ? Dl(a) : null
        } catch (c) {
            b = null
        }
        return b ? B(b, Bl, 4) || null : null
    }

    function Fl(a) {
        a = (new oe(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    sd(Yg).map(a => Number(a));
    sd(Zg).map(a => Number(a));

    function Gl(a) {
        a.__tcfapiPostMessageReady || Hl(new Il(a))
    }

    function Hl(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.l.__tcfapi)(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.l.addEventListener("message", a.g);
        a.l.__tcfapiPostMessageReady = !0
    }
    var Il = class {
        constructor(a) {
            this.l = a
        }
    };

    function Jl(a) {
        a.__uspapiPostMessageReady || Kl(new Ll(a))
    }

    function Kl(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.l.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.l.addEventListener("message", a.g);
        a.l.__uspapiPostMessageReady = !0
    }
    var Ll = class {
        constructor(a) {
            this.l = a;
            this.g = null
        }
    };
    var Ml = class extends L {};
    var Nl = class extends L {
            g() {
                return E(this, 1) != null
            }
        },
        Ol = id(Nl);
    Nl.B = [2];

    function Pl(a, b, c) {
        function d(n) {
            if (n.length < 10) return null;
            var q = h(n.slice(0, 4));
            q = k(q);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + q + n + "N"
        }

        function e(n) {
            if (n.length < 10) return null;
            var q = h(n.slice(0, 6));
            q = k(q);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + q + n + "N"
        }

        function f(n) {
            if (n.length < 12) return null;
            var q = h(n.slice(0, 6));
            q = k(q);
            n = h(n.slice(8, 12));
            n = l(n);
            return "1" + q + n + "N"
        }

        function g(n) {
            if (n.length < 18) return null;
            var q = h(n.slice(0, 8));
            q = k(q);
            n = h(n.slice(12, 18));
            n = l(n);
            return "1" + q + n + "N"
        }

        function h(n) {
            const q = [];
            let v = 0;
            for (let u = 0; u < n.length / 2; u++) q.push(hl(n.slice(v, v + 2))), v += 2;
            return q
        }

        function k(n) {
            return n.every(q => q === 1) ? "Y" : "N"
        }

        function l(n) {
            return n.some(q => q === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = gl(a[0]);
        const m = hl(a.slice(0, 6));
        a = a.slice(6);
        if (m !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return c ? g(a) : null;
            default:
                return null
        }
    };

    function Ql(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Qd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function Rl() {
        var a = R(Qh);
        N !== N.top || N.__uspapi || N.frames.__uspapiLocator || (a = new Sl(a), Tl(a), Ul(a))
    }

    function Tl(a) {
        !a.i || a.l.__uspapi || a.l.frames.__uspapiLocator || (a.l.__uspapiManager = "fc", Ql(a.l, "__uspapiLocator"), ta("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && d({
                version: 1,
                uspString: a.i
            }, !0)
        }, a.l), Jl(a.l))
    }

    function Ul(a) {
        !a.tcString || a.l.__tcfapi || a.l.frames.__tcfapiLocator || (a.l.__tcfapiManager = "fc", Ql(a.l, "__tcfapiLocator"), a.l.__tcfapiEventListeners = a.l.__tcfapiEventListeners || [], ta("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.l.__tcfapiEventListeners, b) {
                    case "ping":
                        d({
                            gdprApplies: !0,
                            cmpLoaded: !0,
                            cmpStatus: "loaded",
                            displayStatus: "disabled",
                            apiVersion: "2.2",
                            cmpVersion: 2,
                            cmpId: 300
                        });
                        break;
                    case "addEventListener":
                        b = c.push(d) - 1;
                        a.tcString ? (e = wl(a.tcString),
                            e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                        d(b, !0);
                        break;
                    case "removeEventListener":
                        e !== void 0 && c[e] ? (c[e] = null, d(!0)) : d(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        d(null, !1);
                        break;
                    case "getTCData":
                        d(null, !1)
                }
        }, a.l), Gl(a.l))
    }

    function Vl(a, b) {
        if (!b ? .g() || H(b, 1).length === 0 || D(b, Ml, 2).length === 0) return null;
        const c = H(b, 1);
        let d;
        try {
            var e = jl(c.split("~")[0]);
            d = c.includes("~") ? c.split("~").slice(1) : []
        } catch (f) {
            return null
        }
        b = D(b, Ml, 2).reduce((f, g) => Vc(Wl(f), 1) > Vc(Wl(g), 1) ? f : g);
        e = wc(e, 3, Nb).indexOf(Uc(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: Pl(d[e], Uc(b, 1), a.j),
            Aa: ql(Wl(b))
        }
    }

    function Xl(a) {
        a = a.find(b => b && I(b, 1) === 13);
        if (a ? .g()) try {
            return Ol(H(a, 2))
        } catch (b) {}
        return null
    }

    function Wl(a) {
        return uc(a, pl, 2) ? B(a, pl, 2) : ol()
    }
    var Sl = class {
        constructor(a) {
            var b = N;
            this.l = b;
            this.j = a;
            a = Fl(this.l.document);
            try {
                var c = a ? Dl(a) : null
            } catch (e) {
                c = null
            }(a = c) ? (c = B(a, Al, 5) || null, a = D(a, zl, 7), a = Xl(a ? ? []), c = {
                Ya: c,
                ab: a
            }) : c = {
                Ya: null,
                ab: null
            };
            a = c;
            c = Vl(this, a.ab);
            a = a.Ya;
            if (a ? .g() && H(a, 2).length !== 0) {
                var d = uc(a, pl, 1) ? B(a, pl, 1) : ol();
                a = {
                    uspString: H(a, 2),
                    Aa: ql(d)
                }
            } else a = null;
            this.i = a && c ? c.Aa > a.Aa ? c.uspString : a.uspString : a ? a.uspString : c ? c.uspString : null;
            this.tcString = (c = El(b.document)) && E(c, 1) != null ? H(c, 1) : null;
            this.g = (b = El(b.document)) && E(b, 2) !=
                null ? H(b, 2) : null
        }
    };
    const Yl = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function Zl(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        ak("ama", b, .01)
    }

    function $l(a) {
        const b = {};
        Td(Yl, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function am(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function bm(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function cm(a) {
        a = wc(a, 2, Kb);
        if (!a) return !1;
        for (let b = 0; b < a.length; b++)
            if (a[b] == 1) return !0;
        return !1
    }

    function dm(a, b) {
        a = bm(am(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = Ud(a),
            d = em(a);
        return b.find(e => {
            if (uc(e, lj, 7)) {
                var f = B(e, lj, 7);
                f = Ob(rc(f, 1))
            } else f = Ob(rc(e, 1));
            e = uc(e, lj, 7) ? F(B(e, lj, 7), 2) : 2;
            if (typeof f !== "number") return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function em(a) {
        const b = {};
        for (;;) {
            b[Ud(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var fm = class extends L {
        g() {
            return B(this, bl, 2)
        }
        i() {
            return G(this, 3)
        }
    };
    var gm = class extends L {
        g() {
            return Xc(this, 1)
        }
        i() {
            return B(this, fm, 2)
        }
        j() {
            return H(this, 4)
        }
        u() {
            return I(this, 5)
        }
    };
    gm.B = [1];
    var hm = class extends L {
        getId() {
            return Uc(this, 1)
        }
    };
    hm.B = [2];
    var im = class extends L {};
    im.B = [2];
    var jm = class extends L {};
    jm.B = [2];
    var km = class extends L {
        g() {
            return Vc(this, 2)
        }
        i() {
            return Vc(this, 4)
        }
        j() {
            return G(this, 3)
        }
    };
    var lm = class extends L {};
    lm.B = [1, 4, 2, 3];
    var nm = class extends L {
        i() {
            return Zc(this, fm, 13, mm)
        }
        u() {
            return vc(this, fm, Hc(this, mm, 13)) !== void 0
        }
        g() {
            return Zc(this, gm, 14, mm)
        }
        j() {
            return vc(this, gm, Hc(this, mm, 14)) !== void 0
        }
    };
    nm.B = [19];
    var mm = [13, 14];
    let om = void 0;

    function pm(a) {
        ed(om, Ze);
        om = a
    };

    function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function qm(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Va: !0,
            Jb: b,
            ya: a.ablation_viewport_offset
        } : null
    }

    function rm(a) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = 1
    }

    function sm(a) {
        X(N).allow_second_reactive_tag = a
    }

    function tm() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function um(a) {
        return X(a) ? .head_tag_slot_vars ? .google_ad_host ? ? vm(a)
    }

    function vm(a) {
        return a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };
    const wm = [2, 7, 1];
    var zm = (a, b, c = "", d = null) => b === 1 && xm(c, d) ? !0 : ym(a, c, e => Sa(D(e, jd, 2), f => F(f, 1) === b)),
        xm = (a, b) => b ? b.u() ? G(b.i(), 1) : b.j() && a !== "" && b.g().g().length === 1 && b.g().g()[0] === a ? G(b.g().i(), 1) : !1 : !1,
        Am = (a, b) => {
            b = Uc(b, 18);
            b !== -1 && (a.tmod = b)
        },
        Cm = a => {
            const b = Od(N) || N;
            return Bm(b, a) ? !0 : ym(N, "", c => Sa(wc(c, 3, Kb), d => d === a))
        };

    function Bm(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ua(a.split(","), b.toString())
    }

    function ym(a, b, c) {
        a = Od(a) || a;
        const d = Dm(a);
        b && (b = ye(String(b)));
        return rd(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Dm(a) {
        a = Em(a);
        const b = {};
        Td(a, (c, d) => {
            try {
                const e = new kd(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Em = a => {
        ed(om, hd);
        a = Rk({
            l: a,
            Y: om
        });
        return a.g != null ? Fm(a.getValue()) : {}
    };

    function Fm(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : qd(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Gm(a) {
        ak("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Hm = a => {
            ak("overlay_settings_from_ppabg", {
                p_s: a
            }, .01)
        },
        Im = (a, b) => {
            if (um(p)) return wm;
            if (b ? .u()) {
                var c = H(b.i(), 9);
                b = b ? .i() ? .g() ? .i();
                if (!a || c != a || !b) return wm;
                Hm(!1);
                return wc(b, 3, Kb)
            }
            if (b ? .j()) {
                c = b ? .g() ? .g();
                if (!c || c.length !== 1 || !a || c[0] !== a || H(b, 17) != p.location.host) return wm;
                a = b ? .g() ? .i() ? .g() ? .i();
                if (!a) return wm;
                Hm(!0);
                return wc(a, 3, Kb)
            }
            return wm
        };
    var Jm = (a, b) => {
        const c = [];
        a = Im(a, b);
        a.includes(1) || c.push(1);
        a.includes(2) || c.push(2);
        a.includes(7) || c.push(7);
        return c
    };

    function Km(a, b, c, d) {
        Lm(new Mm(a, b, c, d))
    }

    function Lm(a) {
        nh(mh(Rk({
            l: a.l,
            Y: G(a.g, 6)
        }), b => {
            Nm(a, b, !0)
        }), () => {
            Om(a)
        })
    }

    function Nm(a, b, c) {
        nh(mh(Pm(b), d => {
            Qm("ok");
            a.i(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                Zl(d, {
                    lserr: 1
                })
            }
            c ? Om(a) : a.i(null, null)
        })
    }

    function Om(a) {
        nh(mh(Rm(a), b => {
            a.i(b, {
                fromPABGSettings: !0
            })
        }), () => {
            Sm(a)
        })
    }

    function Pm(a) {
        if (R(bi)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? xj(b) : null
        } catch (d) {
            c = null
        }
        return (a = (a = c) ? (B(a, kj, 3) ? .g() ? ? 0) > Date.now() ? a : null : null) ? hh(a) : jh(Error("invlocst"))
    }

    function Rm(a) {
        if (um(a.l) && !G(a.g, 22)) return jh(Error("invtag"));
        a: {
            var b = a.l;
            var c = a.j;a = a.g;
            if (a ? .u())(b = a ? .i() ? .g() ? .g()) && (D(b, Dh, 1).length > 0 || R(ci) && D(b, Eh, 3).length > 0) ? Gm(!1) : b = null;
            else {
                if (a ? .j()) {
                    const d = a ? .g() ? .g(),
                        e = a ? .g() ? .i() ? .g() ? .g();
                    if (d && d.length === 1 && d[0] === c && e && (D(e, Dh, 1).length > 0 || R(ci) && D(e, Eh, 3).length > 0) && H(a, 17) === b.location.host) {
                        Gm(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new wj, a = D(b, Dh, 1), c = Oc(c, 1, a), a = D(b, rj, 2), c = Oc(c, 7, a), R(ci) && D(b, Eh, 3).length > 0 && (a = new Fh, b = D(b, Eh, 3), b = Oc(a,
            1, b), Mc(c, 6, b)), b = hh(c)) : b = jh(Error("invtag"));
        return b
    }

    function Sm(a) {
        Vk({
            l: a.l,
            Y: G(a.g, 6),
            mb: 50,
            tb: b => {
                Tm(a, b)
            }
        })
    }

    function Tm(a, b) {
        nh(mh(b, c => {
            Nm(a, c, !1)
        }), c => {
            Qm(c.message);
            a.i(null, null)
        })
    }

    function Qm(a) {
        ak("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class Mm {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = b;
            this.j = c;
            this.i = d
        }
    };
    var Wm = (a, b, c, d) => {
        try {
            const e = dm(a, D(c, rj, 7));
            if (e && cm(e)) {
                if (E(e, 4)) {
                    const g = new wh(null, {
                        google_package: E(e, 4)
                    });
                    d = vh(d, g)
                }
                const f = new vk(a, b, c, e, d);
                Hj(1E3, () => {
                    var g = new ch;
                    (new el(a, f, g)).start();
                    return g.i
                }, a).then(sa(Um, a), sa(Vm, a))
            }
        } catch (e) {
            Zl(a, {
                atf: -1
            })
        }
    };
    const Um = a => {
            Zl(a, {
                atf: 1
            })
        },
        Vm = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            Zl(a, {
                atf: 0
            })
        };

    function Xm(a) {
        return a.length ? a.join("~") : void 0
    };

    function Ym(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = Zm(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function Zm(a) {
        let b = "";
        Td(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    Ya || La();
    class $m {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function an() {
        const {
            promise: a,
            resolve: b
        } = new $m;
        return {
            promise: a,
            resolve: b
        }
    };

    function bn(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = an();
        b[a] = d;
        c();
        return d
    }

    function cn(a, b, c) {
        return bn(a, b, () => {
            Pd(b.document, c)
        }).promise
    };

    function dn() {
        const a = {};
        M(de).g(Yh.g, Yh.defaultValue) && (a.bust = M(de).g(Yh.g, Yh.defaultValue));
        var b = yk();
        b = Ek(b, 38, "");
        b !== "" && (a.sbust = b);
        return a
    }
    const en = new Map([
        [2, 7],
        [3, 1],
        [4, 3],
        [5, 12]
    ]);

    function fn(a, b, c) {
        c = wd(c, dn());
        if (a === 1) return {
            rc: Pd(b.document, c),
            Wa: new Promise(() => {})
        };
        if (en.has(a)) return {
            Wa: cn(en.get(a), b, c)
        };
        throw Error(`Unexpected chunkId: ${a}`);
    };

    function gn(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new hn;
        return a.google_reactive_ads_global_state
    }
    class hn {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new jn;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var jn = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var kn = a => {
        if (p.google_apltlad || a.google_ad_intent_query) return null;
        var b = a.google_loader_used !== "sd" && R(fi) && (p.top == p ? 0 : Nd(p.top) ? 1 : 2) === 1;
        if (p !== p.top && !b || !a.google_ad_client) return null;
        p.google_apltlad = !0;
        b = {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.google_ad_client
        };
        const c = b.enable_page_level_ads;
        Td(a, (d, e) => {
            gj[e] && e !== "google_ad_client" && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        c.easpi = R(zi);
        c.asro = R(wi);
        c.aihb = R(ii);
        c.ailel = Xm(Fi(si));
        c.aiael = Xm(Fi(ji));
        c.aifxl = Xm(Fi(pi));
        c.aiixl =
            Xm(Fi(qi));
        R(ri) && (c.slmct = S(ti), c.samct = S(mi));
        R(oi) || (c.aiict = !0, c.aicel = Xm(Fi(ni)));
        R(ui) && (c.aipaq = !0);
        R(xi) && (c.aigda = !0);
        R(yi) && (c.aisaib = !0);
        S(ki) && (c.aiapm = S(ki));
        S(li) && (c.aiapmi = S(li));
        R(vi) && (c.aiombap = !0);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function ln(a, b) {
        X(N).ama_ran_on_page || Hj(1001, () => {
            mn(new nn(a, b))
        }, p)
    }

    function mn(a) {
        Km(a.l, a.i, a.g.google_ad_client || "", (b, c) => {
            var d = a.l,
                e = a.g;
            X(N).ama_ran_on_page || b && on(d, e, b, c)
        })
    }
    class nn {
        constructor(a, b) {
            this.l = p;
            this.g = a;
            this.i = b
        }
    }

    function on(a, b, c, d) {
        d && (Mj(a).configSourceInAbg = d);
        uc(c, vj, 24) && (d = Nj(a), d.availableAbg = !0, d.ablationFromStorage = !!B(c, vj, 24) ? .g() ? .g());
        if (la(b.enable_page_level_ads) && b.enable_page_level_ads.google_pgb_reactive === 7) {
            if (!dm(a, D(c, rj, 7))) {
                ak("amaait", {
                    value: "true"
                });
                return
            }
            ak("amaait", {
                value: "false"
            })
        }
        X(N).ama_ran_on_page = !0;
        B(c, jj, 15) ? .g() && (X(a).enable_overlap_observer = !0);
        B(c, vj, 24) ? .g() ? .g() && (Nj(a).ablatingThisPageview = !0, rm(a));
        se(3, [cd(c)]);
        const e = b.google_ad_client || "";
        b = $l(la(b.enable_page_level_ads) ?
            b.enable_page_level_ads : {});
        const f = vh(zh, new wh(null, b));
        Zj(782, () => {
            Wm(a, e, c, f)
        })
    };

    function pn(a, b) {
        a = a.document;
        for (var c = void 0, d = 0; !c || a.getElementById(c + "_host");) c = "aswift_" + d++;
        a = c;
        c = Number(b.google_ad_width || 0);
        b = Number(b.google_ad_height || 0);
        d = document.createElement("div");
        d.id = a + "_host";
        const e = d.style;
        e.border = "none";
        e.height = `${b}px`;
        e.width = `${c}px`;
        e.margin = "0px";
        e.padding = "0px";
        e.position = "relative";
        e.visibility = "visible";
        e.backgroundColor = "transparent";
        e.display = "inline-block";
        return {
            xb: a,
            Lb: d
        }
    };

    function qn({
        za: a,
        Fa: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };
    var rn = {
        google_analytics_domain_name: !0,
        google_analytics_uacct: !0,
        google_pause_ad_requests: !0,
        google_user_agent_client_hint: !0
    };

    function sn(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function tn(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function un(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        const c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (b) {}
        }
    };

    function vn(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if ((b = X(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client")) == null) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !xe() ? sn : tn;
                    for (var c = b.length - 1; c >= 0; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = un(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };
    var wn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function xn(a, b) {
        if (b == 15) {
            if (a >= 728) return 728;
            if (a >= 468) return 468
        } else if (b == 90) {
            if (a >= 200) return 200;
            if (a >= 180) return 180;
            if (a >= 160) return 160;
            if (a >= 120) return 120
        }
        return null
    };
    var yn = class extends L {
        constructor() {
            super()
        }
        getVersion() {
            return H(this, 2)
        }
    };

    function zn(a, b) {
        return y(a, 2, Ub(b))
    }

    function An(a, b) {
        return y(a, 3, Ub(b))
    }

    function Bn(a, b) {
        return y(a, 4, Ub(b))
    }

    function Cn(a, b) {
        return y(a, 5, Ub(b))
    }

    function Dn(a, b) {
        return y(a, 9, Ub(b))
    }

    function En(a, b) {
        return Oc(a, 10, b)
    }

    function Fn(a, b) {
        return y(a, 11, Hb(b))
    }

    function Gn(a, b) {
        return y(a, 1, Ub(b))
    }

    function Hn(a, b) {
        return y(a, 7, Hb(b))
    }
    var In = class extends L {
        constructor() {
            super()
        }
    };
    In.B = [10, 6];
    const Jn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Kn() {
        var a = N;
        if (typeof a.navigator ? .userAgentData ? .getHighEntropyValues !== "function") return null;
        const b = a.google_tag_data ? ? (a.google_tag_data = {});
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Jn).then(c => {
            b.uach ? ? (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function Ln(a) {
        return Fn(En(Cn(zn(Gn(Bn(Hn(Dn(An(new In, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new yn;
            c = y(c, 1, Ub(b.brand));
            return y(c, 2, Ub(b.version))
        }) || []), a.wow64 || !1)
    }

    function Mn() {
        return Kn() ? .then(a => Ln(a)) ? ? null
    };

    function Nn(a, b) {
        b.google_ad_host || (a = vm(a)) && (b.google_ad_host = a)
    }

    function On(a, b, c = "") {
        N.google_sa_queue || (N.google_sa_queue = [], N.google_process_slots = V.sa(215, () => {
            Pn(N.google_sa_queue)
        }), a = Qn(c, a, b), fn(1, N, a))
    }

    function Pn(a) {
        const b = a.shift();
        typeof b === "function" && V.ha(216, b);
        a.length && p.setTimeout(V.sa(215, () => {
            Pn(a)
        }), 0)
    }

    function Rn(a, b) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? b() : a.google_sa_queue.push(b)
    }

    function Qn(a, b, c) {
        var d = N;
        b = G(c, 4) ? b.Fb : b.Gb;
        a: {
            if (G(c, 4)) {
                if (a = a || vn(d)) {
                    a = R(Oh) ? ye(a) : a;
                    d = R(Ai) ? {
                        client: a,
                        plah: d.location.host,
                        aplac: R(Ai).toString()
                    } : {
                        client: a,
                        plah: d.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            d = {}
        }
        return wd(b, d)
    }

    function Sn(a, b, c, d) {
        const {
            xb: e,
            Lb: f
        } = pn(a, b);
        c.appendChild(f);
        Tn(a, c, b);
        c = b.google_start_time ? ? va;
        const g = (new Date).getTime();
        b.google_lrv = qn({
            za: xl(),
            Fa: H(d, 2)
        });
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        Rn(a, () => {
            var h = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), h == null) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && V.da(911,
                h)
        })
    }

    function Tn(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || d !== "html" && d != null || (e = `${f}x${g}`);
        R(Di) && (c.google_reactive_ad_format === 10 ? e = "interstitial" : c.google_reactive_ad_format === 11 && (e = "rewarded"));
        d = !c.google_ad_slot || c.google_override_format || !wn[c.google_ad_width + "x" + c.google_ad_height] && c.google_loader_used === "aa";
        e = e && d ? e.toLowerCase() : "";
        c.google_ad_format = e;
        if (typeof c.google_reactive_sra_index !== "number" || !c.google_ad_unit_key) {
            e = [c.google_ad_slot,
                c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && f < 25; g = g.parentNode, ++f) g.nodeType === 9 ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Ud(e.join(":")).toString();
            e = [];
            for (d = 0; b && d < 25; ++d) {
                f = (f = b.nodeType !== 9 && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let l = 0; l < h.length; ++l) {
                            const m =
                                h[l];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                                if (b === m) {
                                    g = "." + k;
                                    break a
                                }++k
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && d < 25; ++d) {
                    const k = h.frames;
                    for (f = 0; f < k.length; ++f)
                        if (a === k[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = Ud(b + e.join()).toString()
        }
    }

    function Un() {
        var a = Od(p);
        a && (a = gn(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Vn() {
        const a = Mn();
        a != null && a.then(b => {
            try {
                bd = !0;
                var c = JSON.stringify(cd(b), ac)
            } finally {
                bd = !1
            }
            N.google_user_agent_client_hint = c
        });
        ce()
    };

    function Wn(a) {
        return b => !!(b.ia & a)
    }
    class Y extends Yi {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.ia = c;
            this.u = d
        }
        ta() {
            return this.ia
        }
        i(a, b, c) {
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    };
    const Xn = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        Yn = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        Zn = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function $n(a) {
        var b = 0;
        a.P && b++;
        a.K && b++;
        a.L && b++;
        if (b < 3) return {
            W: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.P.split(",");
        const c = a.L.split(",");
        a = a.K.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            W: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (b.length > 2) return {
            W: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || f === 0) return {
                W: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || f === 0) return {
                W: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            L: d,
            K: e,
            gb: b
        }
    }

    function ao(a) {
        return a >= 1200 ? {
            width: 1200,
            height: 600
        } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
        } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
        } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
        } : {
            width: a,
            height: Math.floor(a * 3.44)
        }
    }

    function bo(a, b, c, d) {
        b = Math.floor(((a - 8 * b - 8) / b * Xn[d] + Yn[d]) * c + 8 * c + 8);
        return a > 1500 ? {
            width: 0,
            height: 0,
            Hb: `Calculated slot width is too large: ${a}`
        } : b > 1500 ? {
            width: 0,
            height: 0,
            Hb: `Calculated slot height is too large: ${b}`
        } : {
            width: a,
            height: b
        }
    }

    function co(a, b) {
        const c = a - 8 - 8;
        --b;
        return {
            width: a,
            height: Math.floor(c / 1.91 + 70) + Math.floor((c * Xn.mobile_banner_image_sidebyside + Yn.mobile_banner_image_sidebyside) * b + 8 * b + 8)
        }
    };
    const eo = Wa("script");
    class fo {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, n = null) {
            this.C = a;
            this.ea = b;
            this.ia = c;
            this.g = d;
            this.X = e;
            this.i = f;
            this.j = g;
            this.F = h;
            this.I = k;
            this.u = l;
            this.A = m;
            this.J = n
        }
        size() {
            return this.ea
        }
    };
    const go = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var ho = class extends Yi {
        g(a) {
            return Math.min(1200, Math.max(this.aa, Math.round(a)))
        }
    };

    function io(a, b) {
        jo(a, b);
        if (b.google_content_recommendation_ui_type === "pedestal") return new fo(9, new ho(a, Math.floor(a * b.google_phwr)));
        if (R(Mh)) {
            var c = Id();
            var d = S(Nh);
            var e = S(Lh),
                f = S(Kh);
            a < 468 ? c ? (a = co(a, d), d = {
                V: a.width,
                U: a.height,
                K: 1,
                L: d,
                P: "mobile_banner_image_sidebyside"
            }) : (a = bo(a, 1, d, "image_sidebyside"), d = {
                V: a.width,
                U: a.height,
                K: 1,
                L: d,
                P: "image_sidebyside"
            }) : (d = ao(a), e === 1 && (d.height = Math.floor(d.height * .5)), d = {
                V: d.width,
                U: d.height,
                K: f,
                L: e,
                P: "image_stacked"
            })
        } else d = Id(), a < 468 ? d ? (d = co(a, 12), d = {
            V: d.width,
            U: d.height,
            K: 1,
            L: 12,
            P: "mobile_banner_image_sidebyside"
        }) : (d = ao(a), d = {
            V: d.width,
            U: d.height,
            K: 1,
            L: 13,
            P: "image_sidebyside"
        }) : (d = ao(a), d = {
            V: d.width,
            U: d.height,
            K: 4,
            L: 2,
            P: "image_stacked"
        });
        ko(b, d);
        return new fo(9, new ho(d.V, d.U))
    }

    function lo(a, b) {
        jo(a, b); {
            const f = $n({
                L: b.google_content_recommendation_rows_num,
                K: b.google_content_recommendation_columns_num,
                P: b.google_content_recommendation_ui_type
            });
            if (f.W) a = {
                V: 0,
                U: 0,
                K: 0,
                L: 0,
                P: "image_stacked",
                W: f.W
            };
            else {
                var c = f.gb.length === 2 && a >= 468 ? 1 : 0;
                var d = f.gb[c];
                d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
                var e = Zn[d];
                let g = f.K[c];
                for (; a / g < e && g > 1;) g--;
                e = g;
                c = f.L[c];
                a = bo(a, e, c, d);
                a = {
                    V: a.width,
                    U: a.height,
                    K: e,
                    L: c,
                    P: d
                }
            }
        }
        if (a.W) throw new U(a.W);
        ko(b, a);
        return new fo(9, new ho(a.V, a.U))
    }

    function jo(a, b) {
        if (a <= 0) throw new U(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }

    function ko(a, b) {
        a.google_content_recommendation_ui_type = b.P;
        a.google_content_recommendation_columns_num = b.K;
        a.google_content_recommendation_rows_num = b.L
    };
    var mo = class extends Yi {
        g() {
            return this.aa
        }
        i(a, b, c) {
            Xi(a, c);
            c.style.height = `${this.height()}px`;
            b.rpe = !0
        }
    };
    const no = {
        "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
        "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
        "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
        "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
        "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
    };
    var oo = class extends Yi {
        g() {
            return Math.min(1200, this.aa)
        }
    };

    function po(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if (f === "in-article") {
            var g = a;
            if (e.google_full_width_responsive === "false") a = g;
            else if (a = Si(b, c, g, S(Th), e), a !== !0) e.gfwrnwer = a, a = g;
            else if (a = T(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; h < 100 && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let l = 0; l < k.length; ++l) {
                                const m = k[l];
                                if (m !== g && Vi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Xi(b, c)
                }
            else a = g;
            else a =
                g
        }
        if (a < 250) throw new U("Fluid responsive ads must be at least 250px wide: " + `availableWidth=${a}`);
        a = Math.min(1200, Math.floor(a));
        if (d && f !== "in-article") {
            f = Math.ceil(d);
            if (f < 50) throw new U("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            return new fo(11, new Yi(a, f))
        }
        if (f !== "in-article" && (d = e.google_ad_layout_key)) {
            f = `${d}`;
            c = Math.pow(10, 3);
            if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
            else b = null;
            if (!b) throw new U(`Invalid data-ad-layout-key value: ${f}`);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(c * 1E3 - -725 + 10);
            if (isNaN(f)) throw new U(`Invalid height: height=${f}`);
            if (f < 50) throw new U("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            if (f > 1200) throw new U("Fluid responsive ads must be at most 1200px tall: " + `height=${f}`);
            return new fo(11, new Yi(a, f))
        }
        d = no[f];
        if (!d) throw new U("Invalid data-ad-layout value: " + f);
        c = bj(c, b);
        b = T(b);
        b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
        return new fo(11,
            f === "in-article" ? new oo(a, b) : new Yi(a, b))
    };

    function qo(a) {
        return b => {
            for (let c = a.length - 1; c >= 0; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function ro(a, b) {
        var c = so.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (b == null || b(g)) return g;
                e === null && (e = g)
            }
        }
        return e
    };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        so = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];

    function to(a, b, c, d, e) {
        e.google_full_width_responsive == "false" ? c = {
            G: a,
            H: 1
        } : b === "autorelaxed" && e.google_full_width_responsive || uo(b) || e.google_ad_resize ? (b = Ti(a, c, d, e), c = b !== !0 ? {
            G: a,
            H: b
        } : {
            G: T(c) || a,
            H: !0
        }) : c = {
            G: a,
            H: 2
        };
        const {
            G: f,
            H: g
        } = c;
        return g !== !0 ? {
            G: a,
            H: g
        } : d.parentElement ? {
            G: f,
            H: g
        } : {
            G: a,
            H: g
        }
    }

    function vo(a, b, c, d, e) {
        const {
            G: f,
            H: g
        } = Zj(247, () => to(a, b, c, d, e));
        var h = g === !0;
        const k = Yd(d.style.width),
            l = Yd(d.style.height),
            {
                ca: m,
                Z: n,
                ta: q,
                fb: v
            } = wo(f, b, c, d, e, h);
        h = xo(b, q);
        var u;
        const x = (u = Zi(d, c, "marginLeft")) ? `${u}px` : "",
            K = (u = Zi(d, c, "marginRight")) ? `${u}px` : "";
        u = $i(d, c) || "";
        return new fo(h, m, q, null, v, g, n, x, K, l, k, u)
    }

    function uo(a) {
        return a === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function wo(a, b, c, d, e, f) {
        b = yo(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var l = T(c) < 488;
        if (l) {
            g = Ni(d, c);
            var m = bj(d, c);
            h = !m && g;
            k = m && g
        }
        m = [aj(a), Wn(b)];
        R(Zh) || m.push(dj(l, c, d, k));
        e.google_max_responsive_height != null && m.push(ej(e.google_max_responsive_height));
        l = [u => !u.u];
        if (h || k) h = fj(c, d), l.push(ej(h));
        const n = ro(qo(m), qo(l));
        if (!n) throw new U(`No slot size for availableWidth=${a}`);
        const {
            ca: q,
            Z: v
        } = Zj(248, () => {
            var u;
            a: if (f) {
                if (e.gfwrnh && (u = Yd(e.gfwrnh))) {
                    u = {
                        ca: new mo(a, u),
                        Z: !0
                    };
                    break a
                }
                u = S(Vh);
                u = u > 0 ? a / u : a / 1.2;
                if (e.google_resizing_allowed || e.google_full_width_responsive == "true") var x = Infinity;
                else {
                    x = d;
                    let C = Infinity;
                    do {
                        var K = Zi(x, c, "height");
                        K && (C = Math.min(C, K));
                        (K = Zi(x, c, "maxHeight")) && (C = Math.min(C, K))
                    } while (x.parentElement && (x = x.parentElement) && x.tagName !== "HTML");
                    x = C
                }!(R(Xh) && x <= u * 2) && (x = Math.min(u, x), x < u * .5 || x < 100) && (x = u);
                u = {
                    ca: new mo(a, Math.floor(x)),
                    Z: x < u ? 102 : !0
                }
            } else u = {
                ca: n,
                Z: 100
            };
            return u
        });
        return e.google_ad_layout === "in-article" && zo(c) ? {
            ca: Ao(a, c, d, q, e),
            Z: !1,
            ta: b,
            fb: g
        } : {
            ca: q,
            Z: v,
            ta: b,
            fb: g
        }
    }

    function xo(a, b) {
        if (a === "auto") return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8;
            default:
                throw Error("bad mask");
        }
    }

    function yo(a, b, c) {
        if (c === "auto") c = Math.min(1200, T(a)), b = b / c <= .25 ? 4 : 3;
        else {
            b = 0;
            for (const d in Ki) c.indexOf(d) !== -1 && (b |= Ki[d])
        }
        return b
    }

    function Ao(a, b, c, d, e) {
        const f = e.google_ad_height || Zi(c, b, "height");
        b = po(a, b, c, f, e).size();
        return b.aa * b.height() > a * d.height() ? new Y(b.aa, b.height(), 1) : d
    }

    function zo(a) {
        return R(Jh) || a.location && a.location.hash === "#hffwroe2etoq"
    };

    function Bo(a, b, c, d, e) {
        var f;
        (f = T(b)) ? T(b) < 488 ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Xi(b, c), f = {
            G: f,
            H: !0
        }) : f = {
            G: a,
            H: 5
        } : f = {
            G: a,
            H: 4
        }: f = {
            G: a,
            H: 10
        };
        const {
            G: g,
            H: h
        } = f;
        if (h !== !0 || a === g) return new fo(12, new Yi(a, d), null, null, !0, h, 100);
        const {
            ca: k,
            Z: l,
            ta: m
        } = wo(g, "auto", b, c, e, !0);
        return new fo(1, k, m, 2, !0, h, l)
    };
    var Do = (a, b) => {
            var c = b.google_ad_format;
            if (c === "autorelaxed") {
                a: {
                    if (b.google_content_recommendation_ui_type !== "pedestal")
                        for (const d of go)
                            if (b[d] != null) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (uo(c)) return 1;
            if (c === "link") return 4;
            if (c === "fluid") {
                if (c = b.google_ad_layout === "in-article") c = R(Rh) || a.location && (a.location.hash == "#hffwroe2etop" || a.location.hash == "#hffwroe2etoq");
                return c ? (Co(b), 1) : 8
            }
            if (b.google_reactive_ad_format === 27) return Co(b), 1
        },
        Fo = (a, b, c, d, e = !1) => {
            var f = b.offsetWidth || (c.google_ad_resize ||
                e) && Zi(b, d, "width") || c.google_ad_width || 0;
            a === 4 && (c.google_ad_format = "auto", a = 1);
            e = (e = Eo(a, f, b, c, d)) ? e : vo(f, c.google_ad_format, d, b, c);
            e.size().i(d, c, b);
            e.ia != null && (c.google_responsive_formats = e.ia);
            e.X != null && (c.google_safe_for_responsive_override = e.X);
            e.i != null && (e.i === !0 ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = e.i));
            e.j != null && e.j !== !0 && (c.gfwrnher = e.j);
            d = e.A || c.google_ad_width;
            d != null && (c.google_resizing_width = d);
            d = e.u || c.google_ad_height;
            d != null && (c.google_resizing_height = d);
            d = e.size().g(f);
            const g = e.size().height();
            c.google_ad_width = d;
            c.google_ad_height = g;
            var h = e.size();
            f = h.g(f) + "x" + h.height();
            c.google_ad_format = f;
            c.google_responsive_auto_format = e.C;
            e.g != null && (c.armr = e.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            e.i === !0 && (c.gfwrnh = e.size().height() + "px");
            e.F != null && (c.gfwroml = e.F);
            e.I != null && (c.gfwromr = e.I);
            e.u != null && (c.gfwroh = e.u);
            e.A != null && (c.gfwrow = e.A);
            e.J != null && (c.gfwroz = e.J);
            f = Od(window) || window;
            Ym(f.location, "google_responsive_dummy_ad") && (Ua([1, 2, 3, 4, 5, 6, 7, 8], e.C) || e.g === 1) && e.g !== 2 && (f = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${eo}>window.top.postMessage('${f}', '*'); 
          </${eo}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`);
            a != 1 && (a = e.size().height(), b.style.height = a + "px")
        };
    const Eo = (a, b, c, d, e) => {
            const f = d.google_ad_height || Zi(c, e, "height");
            switch (a) {
                case 5:
                    const {
                        G: g,
                        H: h
                    } = Zj(247, () => to(b, d.google_ad_format, e, c, d));
                    h === !0 && b != g && Xi(e, c);
                    h === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return io(g, d);
                case 9:
                    return lo(b, d);
                case 8:
                    return po(b, e, c, f, d);
                case 10:
                    return Bo(b, e, c, f, d)
            }
        },
        Co = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function Go(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };

    function Ho(a, b) {
        var c = Od(b);
        if (c) {
            c = T(c);
            const d = Rd(a, b) || {},
                e = d.direction;
            if (d.width === "0px" && d.cssFloat !== "none") return -1;
            if (e === "ltr" && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if (e === "rtl" && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Io(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            default:
                return b
        }
    }

    function Jo(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Md(c, "client");
            d && (b.google_ad_client = Io("google_ad_client", d));
            (c = Md(c, "host")) && (b.google_ad_host = Io("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = xa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Io(f, e.value), e !== null && (b[f] = e))
            }
        }
    }

    function Ko(a) {
        if (a = te(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Lo(a, b, c, d) {
        Jo(a, b);
        if (c.document && c.document.body && !Do(c, b) && !b.google_reactive_ad_format && !b.google_ad_intent_query) {
            var e = parseInt(a.style.width, 10),
                f = Ho(a, c);
            if (f > 0 && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!wn[e + "x" + g];
                let h = f;
                if (e) {
                    const k = xn(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new U("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                Go(b, 4)
            }
        }
        if (R(Ph) ||
            T(c) < 488) {
            f = Od(c) || c;
            g = a.offsetWidth || Zi(a, c, "width") || b.google_ad_width || 0;
            e = b.google_ad_client;
            if (d = Ym(f.location, "google_responsive_slot_preview") || R(gi) || zm(f, 1, e, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || Do(c, b) || Pi(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = Rd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Ua(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    if (!R($h) && (d = S(Uh), d = Si(c, a, g, d, b), d !== !0)) {
                        b.gfwrnwer = d;
                        d = !1;
                        break b
                    }
                    d = c === c.top ? !0 : !1
                }
            d ? (Go(b, 1), d = !0) : d = !1
        } else d = !1;
        if (g = Do(c, b)) Fo(g, a, b, c, d);
        else {
            if (Pi(a, b)) {
                if (d = Rd(a, c)) a.style.width = d.width, a.style.height = d.height, Oi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Ko(c)
            } else Oi(a.style, b);
            c.location && c.location.hash === "#gfwmrp" || b.google_responsive_auto_format === 12 && b.google_full_width_responsive === "true" ? Fo(10, a, b, c, !1) : Math.random() < .01 && b.google_responsive_auto_format ===
                12 && (a = Ti(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), a !== !0 ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Mo(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && Nd(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function kg(a, b, c = 0) {
        a.g.size > 0 || No(a);
        c = Math.min(Math.max(0, c), 9);
        const d = a.g.get(c);
        d ? d.push(b) : a.g.set(c, [b])
    }

    function Oo(a, b, c, d) {
        od(b, c, d);
        Kk(a, () => pd(b, c, d))
    }

    function Po(a, b) {
        a.j !== 1 && (a.j = 1, a.g.size > 0 && Qo(a, b))
    }

    function No(a) {
        a.l.document.visibilityState ? Oo(a, a.l.document, "visibilitychange", b => {
            a.l.document.visibilityState === "hidden" && Po(a, b);
            a.l.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.l ? (Oo(a, a.l, "pagehide", b => {
            Po(a, b)
        }), Oo(a, a.l, "pageshow", () => {
            a.j = 0
        })) : Oo(a, a.l, "beforeunload", b => {
            Po(a, b)
        })
    }

    function Qo(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var Ro = class extends Jk {
        constructor(a) {
            super();
            this.l = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function So(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function To(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = ge(a.l)
    }

    function Uo(a) {
        const b = a.g.wpc;
        return b !== null && b !== "" ? b : a.g.wpc = vn(a.l)
    }

    function Vo(a, b) {
        var c = new Ef;
        var d = To(a);
        c = J(c, 1, d);
        d = Uo(a);
        c = ad(c, 2, d);
        c = J(c, 3, a.g.sd);
        return J(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function Wo(a) {
        await So(a.l, () => !(!To(a) || !Uo(a)))
    }

    function Xo(a) {
        var b = M(Yo);
        if (b.j) {
            var c = b.C;
            a(c);
            b.g.psi = cd(c)
        }
    }

    function Zo(a) {
        kg(a.u, () => {
            var b = Vo(a);
            b = Nc(b, 12, Ff, a.F);
            a.j && !a.g.le.includes(3) && (a.g.le.push(3), gg(a.i, b))
        }, 9)
    }

    function $o(a) {
        const b = zf(new Af, a.A);
        kg(a.u, () => {
            Mc(b, 2, a.C);
            J(b, 3, a.g.tar);
            var c = a.i;
            var d = Vo(a);
            d = Nc(d, 8, Ff, b);
            gg(c, d)
        }, 9)
    }
    async function ap(a) {
        var b = M(Yo);
        if (b.j && !b.g.le.includes(1)) {
            b.g.le.push(1);
            var c = b.l.performance.now();
            await Wo(b);
            var d = new vf;
            a = A(d, 5, Hb(a), !1);
            d = new uf;
            d = J(d, 1, Mi(b.l).scrollWidth);
            d = J(d, 2, Mi(b.l).scrollHeight);
            a = Mc(a, 2, d);
            d = new uf;
            var e = T(b.l);
            d = J(d, 1, e);
            d = J(d, 2, Mi(b.l).clientHeight);
            a = Mc(a, 1, d);
            a = ad(a, 4, b.A);
            d = Mo(b.l);
            d !== 0 && (e = new tf, d = y(e, 1, w(d)), Mc(a, 3, d));
            d = b.i;
            c = Vo(b, c);
            c = Nc(c, 4, Ff, a);
            gg(d, c);
            Zo(b);
            $o(b)
        }
    }
    async function bp(a, b, c) {
        if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await Wo(a);
            var e = a.i;
            a = Vo(a, d);
            d = new sf;
            b = A(d, 1, w(b), 0);
            c = Cc(b, 2, c, Lb);
            c = Nc(a, 9, Ff, c);
            gg(e, c)
        }
    }
    async function cp(a, b) {
        await Wo(a);
        var c = a.i;
        a = Vo(a);
        a = J(a, 3, 1);
        b = Nc(a, 10, Ff, b);
        gg(c, b)
    }
    var Yo = class {
        constructor(a, b) {
            this.l = ue() || window;
            this.u = b ? ? new Ro(this.l);
            this.i = a ? ? new mg(2, xl(), 100, 100, !0, this.u);
            this.g = Ck(yk(), 33, () => {
                const c = S(Sh);
                return {
                    sd: c,
                    ssp: c > 0 && Sd() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get j() {
            return this.g.ssp
        }
        get A() {
            return this.g.cu
        }
        set A(a) {
            this.g.cu = a
        }
        get C() {
            return Zj(1178, () => dd(yf, hc(this.g.psi || []))) || new yf
        }
        get F() {
            return Zj(1227, () => dd(Bf, hc(this.g.cc || []))) || new Bf
        }
    };

    function dp() {
        var a = window;
        return p.google_adtest === "on" || p.google_adbreak_test === "on" || a.location.host.endsWith("h5games.usercontent.goog") || a.location.host === "gamesnacks.com" ? a.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && b > 0) || [] : []
    };

    function ep(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function fp(a) {
        var b = N.document;
        if (b.currentScript) return ep(b.currentScript, a);
        for (const c of b.scripts)
            if (ep(c, a) === 0) return 0;
        return 1
    };

    function gp(a, b) {
        return {
            [3]: {
                [55]: () => a === 0,
                [23]: c => zm(N, Number(c)),
                [24]: c => Cm(Number(c)),
                [61]: () => G(b, 6),
                [63]: () => G(b, 6) || H(b, 8) === ".google.ch"
            },
            [4]: {},
            [5]: {
                [6]: () => H(b, 15)
            }
        }
    };

    function hp(a = p) {
        return a.ggeac || (a.ggeac = {})
    };

    function ip(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function jp(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function kp(a, b = navigator) {
        try {
            return !!b.protectedAudience ? .queryFeatureSupport ? .(a)
        } catch (c) {
            return !1
        }
    };

    function lp(a, b) {
        try {
            const d = a.split(".");
            a = p;
            let e = 0,
                f;
            for (; a != null && e < d.length; e++) f = a, a = a[d[e]], typeof a === "function" && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var mp = {
        [3]: {
            [8]: a => {
                try {
                    return ka(a) != null
                } catch {}
            },
            [9]: a => {
                try {
                    var b = ka(a)
                } catch {
                    return
                }
                if (a = typeof b === "function") b = b && b.toString && b.toString(), a = typeof b === "string" && b.indexOf("[native code]") != -1;
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Ua(M(Sg).g(), Number(a)),
            [27]: a => {
                a = lp(a, "boolean");
                return a !== void 0 ? a : void 0
            },
            [60]: a => {
                try {
                    return !!p.document.querySelector(a)
                } catch {}
            },
            [80]: a => {
                try {
                    return !!p.matchMedia(a).matches
                } catch {}
            },
            [69]: a => ip(a, p.document),
            [70]: a => jp(a, p.document),
            [79]: a => kp(a,
                p.navigator)
        },
        [4]: {
            [3]: () => Zd(),
            [6]: a => {
                a = lp(a, "number");
                return a !== void 0 ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = lp(a, "string");
                return a !== void 0 ? a : void 0
            }
        }
    };

    function np(a, b) {
        const c = new Map;
        for (const [f, g] of a[1].entries()) {
            var d = f,
                e = g;
            const {
                lb: h,
                hb: k,
                ib: l
            } = e[e.length - 1];
            c.set(d, h + k * l)
        }
        for (const f of b)
            for (const g of D(f, im, 2))
                if (D(g, hm, 2).length !== 0) {
                    b = Qc(Ob(rc(g, 8)), 0);
                    I(g, 4) && !I(g, 13) && (b = c.get(I(g, 4)) ? ? 0, d = Qc(Ob(rc(g, 1)), 0) * D(g, hm, 2).length, c.set(I(g, 4), b + d));
                    d = [];
                    for (e = 0; e < D(g, hm, 2).length; e++) {
                        const h = {
                            lb: b,
                            hb: Qc(Ob(rc(g, 1)), 0),
                            ib: D(g, hm, 2).length,
                            Cb: e,
                            ka: I(f, 1),
                            ua: g,
                            R: D(g, hm, 2)[e]
                        };
                        d.push(h)
                    }
                    op(a[2], I(g, 10), d) || op(a[1], I(g, 4), d) || op(a[0], D(g,
                        hm, 2)[0].getId(), d)
                }
        return a
    }

    function op(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    };

    function pp(a = Sd()) {
        return b => Ud(`${b} + ${a}`) % 1E3
    };
    const qp = [12, 13, 20];

    function rp(a, b) {
        var c = M(sg).N;
        const d = jf(B(b.ua, bf, 3), c);
        if (!d.success) return qg(a.M, B(b.ua, bf, 3), b.ka, b.R.getId(), d), !1;
        if (!d.value) return !1;
        c = jf(B(b.R, bf, 3), c);
        return c.success ? c.value ? !0 : !1 : (qg(a.M, B(b.R, bf, 3), b.ka, b.R.getId(), c), !1)
    }

    function sp(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }

    function tp(a, b, c, d) {
        const e = [];
        var f;
        if (f = b !== 9) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) return og(a.M, b, c, e, [], 4), e;
        f = qp.includes(b);
        const g = [],
            h = [];
        for (const n of [0, 1, 2])
            for (const [q, v] of a.oa[n].entries()) {
                var k = q,
                    l = v;
                const u = new Kf;
                var m = l.filter(x => x.ka === b && a.i[x.R.getId()] && rp(a, x));
                if (m.length)
                    for (const x of m) h.push(x.R);
                else if (!a.Ca && (n === 2 ? (m = d[1], Ec(u, 2, Lf, w(k))) : m = d[0], k = m ? .(String(k)) ? ? (n === 2 && I(l[0].ua, 11) === 1 ? void 0 : d[0](String(k))), k !== void 0)) {
                    for (const x of l) {
                        if (x.ka !== b) continue;
                        l =
                            k - x.lb;
                        m = x.hb;
                        const K = x.ib,
                            C = x.Cb;
                        l < 0 || l >= m * K || l % K !== C || !rp(a, x) || (l = I(x.ua, 13), l !== 0 && l !== void 0 && (m = a.j[String(l)], m !== void 0 && m !== x.R.getId() ? pg(a.M, a.j[String(l)], x.R.getId(), l) : a.j[String(l)] = x.R.getId()), h.push(x.R))
                    }
                    Ic(u, Lf) !== 0 && (A(u, 3, Mb(k), 0), g.push(u))
                }
            }
        for (const n of h) d = n.getId(), e.push(d), sp(a, d, f ? 4 : c), Jg(D(n, lf, 2), f ? Lg() : [c], a.M, d);
        og(a.M, b, c, e, g, 1);
        return e
    }

    function up(a, b) {
        b = b.map(c => new jm(c)).filter(c => !qp.includes(I(c, 1)));
        a.oa = np(a.oa, b)
    }

    function vp(a, b) {
        O(1, c => {
            a.i[c] = !0
        }, b);
        O(2, (c, d, e) => tp(a, c, d, e), b);
        O(3, c => (a.g[c] || []).concat(a.g[4]), b);
        O(12, c => void up(a, c), b);
        O(16, (c, d) => void sp(a, c, d), b)
    }
    var wp = class {
        constructor(a, b, c, {
            Ca: d = !1,
            tc: e = []
        } = {}) {
            this.oa = a;
            this.M = c;
            this.u = {};
            this.Ca = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.i = {};
            this.j = {};
            if (a = Fe()) {
                a = a.split(",") || [];
                for (const f of a)(a = Number(f)) && (this.i[a] = !0)
            }
            for (const f of e) this.i[f] = !0
        }
    };

    function xp(a, b) {
        a.g = Ng(14, b, () => {})
    }
    class yp {
        constructor() {
            this.g = () => {}
        }
    }

    function zp(a) {
        M(yp).g(a)
    };

    function Ap({
        wb: a,
        N: b,
        config: c,
        rb: d = hp(),
        sb: e = 0,
        M: f = new rg(B(a, km, 5) ? .g() ? ? 0, B(a, km, 5) ? .i() ? ? 0, B(a, km, 5) ? .j() ? ? !1),
        oa: g = np({
            [0]: new Map,
            [1]: new Map,
            [2]: new Map
        }, D(a, jm, 2))
    }) {
        d.hasOwnProperty("init-done") ? (Ng(12, d, () => {})(D(a, jm, 2).map(h => cd(h))), Ng(13, d, () => {})(D(a, lf, 1).map(h => cd(h)), e), b && Ng(14, d, () => {})(b), Bp(e, d)) : (vp(new wp(g, e, f, c), d), Og(d), Pg(d), Qg(d), Bp(e, d), Jg(D(a, lf, 1), [e], f, void 0, !0), tg = tg || !(!c || !c.Ab), zp(mp), b && zp(b))
    }

    function Bp(a, b = hp()) {
        Rg(M(Sg), b, a);
        Cp(b, a);
        xp(M(yp), b);
        M(de).C()
    }

    function Cp(a, b) {
        const c = M(de);
        c.i = (d, e) => Ng(5, a, () => !1)(d, e, b);
        c.u = (d, e) => Ng(6, a, () => 0)(d, e, b);
        c.g = (d, e) => Ng(7, a, () => "")(d, e, b);
        c.A = (d, e) => Ng(8, a, () => [])(d, e, b);
        c.j = (d, e) => Ng(17, a, () => [])(d, e, b);
        c.C = () => {
            Ng(15, a, () => {})(b)
        }
    };

    function Dp(a, b) {
        b = {
            [0]: pp(ge(b).toString())
        };
        b = M(Sg).u(a, b);
        Wg.da(1085, bp(M(Yo), a, b))
    }

    function Ep(a, b, c) {
        var d = X(a);
        if (d.plle) Bp(1, hp(a));
        else {
            d.plle = !0;
            d = B(b, lm, 12);
            var e = G(b, 9);
            Ap({
                wb: d,
                N: gp(c, b),
                config: {
                    Ca: e && !!a.google_disable_experiments,
                    Ab: e
                },
                rb: hp(a),
                sb: 1
            });
            if (c = H(b, 15)) c = Number(c), M(Sg).j(c);
            for (const f of wc(b, 19, Nb)) M(Sg).i(f);
            Dp(12, a);
            Dp(10, a);
            a = Od(a) || a;
            Ym(a.location, "google_mc_lab") && M(Sg).i(44738307);
            Ym(a.location, "google_auto_storify_swipeable") && M(Sg).i(44773747);
            Ym(a.location, "google_auto_storify_scrollable") && M(Sg).i(44773746)
        }
    };

    function Fp(a, b) {
        a.Ga(c => {
            c.shv = String(b);
            c.mjsv = qn({
                za: xl(),
                Fa: b
            });
            const d = M(Sg).g(),
                e = dp();
            c.eid = d.concat(e).join(",")
        })
    };

    function Gp(a) {
        var b = V;
        try {
            return ed(a, Ye), new nm(JSON.parse(a))
        } catch (c) {
            b.T(838, c instanceof Error ? c : Error(String(c)))
        }
        return new nm
    };

    function Hp(a, b) {
        if (G(b, 22)) return 7;
        if (G(b, 16)) return 6;
        if (R(hi)) {
            var c = b.g() ? .j();
            const d = b.g() ? .u() ? ? 0;
            c = c === a;
            switch (d) {
                case 1:
                    return c ? 9 : 8;
                case 2:
                    return c ? 11 : 10;
                case 3:
                    return c ? 13 : 12
            }
        }
        b = b.g() ? .g() ? ? [];
        return b.length === 0 ? 1 : b.length === 1 ? a === b[0] ? 3 : 2 : b.includes(a) ? 5 : 4
    }

    function Ip(a, b, c) {
        b.google_loader_used !== "sd" && (b.abgtt = Hp(a, c))
    };
    var Jp = () => {
        var a = N;
        try {
            var b = (a || window).document,
                c = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
            return (new Dd(c.clientWidth, c.clientHeight)).round()
        } catch (d) {
            return new Dd(-12245933, -12245933)
        }
    };
    var Kp = a => {
        od(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || c.googMsgType !== "sc-cnf" || a(c, b)
        })
    };

    function Lp(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function Mp(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function Np() {
        const a = new Set,
            b = nk();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function Op(a) {
        a = a.id;
        return a != null && (Np().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function Pp(a, b, c) {
        if (!a.sources) return !1;
        switch (Qp(a)) {
            case 2:
                const d = Rp(a);
                if (d) return c.some(f => Sp(d, f));
                break;
            case 1:
                const e = Tp(a);
                if (e) return b.some(f => Sp(e, f))
        }
        return !1
    }

    function Qp(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Tp(a) {
        return Up(a, b => b.currentRect)
    }

    function Rp(a) {
        return Up(a, b => b.previousRect)
    }

    function Up(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Sp(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function Vp() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(Op),
            b = [...Np()].map(c => document.getElementById(c)).filter(c => c !== null);
        Wp = window.scrollX;
        Xp = window.scrollY;
        return Yp = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function Zp() {
        var a = new $p;
        if (R(yl)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.ob.vb && b.push("event");
                for (const c of b) b = {
                    type: c,
                    buffered: !0
                }, c === "event" && (b.durationThreshold = 40), aq(a).observe(b);
                bq(a)
            }
        }
    }

    function cq(a, b) {
        const c = Wp !== window.scrollX || Xp !== window.scrollY ? [] : Yp,
            d = Vp();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                dq(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Na = Math.floor(b.renderTime || b.loadTime);
                a.Ma = b.size;
                break;
            case "first-input":
                b = e;
                a.Ja = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ka = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || eq(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.C +=
                    b;
                a.J = Math.max(a.J, b);
                a.wa += 1;
                break;
            case "event":
                eq(a, e);
                break;
            default:
                Ed(b, void 0)
        }
    }

    function aq(a) {
        a.M || (a.M = new PerformanceObserver(Gj(640, b => {
            cq(a, b)
        })));
        return a.M
    }

    function bq(a) {
        const b = Gj(641, () => {
                var d = document;
                (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) === 2 && fq(a)
            }),
            c = Gj(641, () => void fq(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Ia = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            aq(a).disconnect()
        }
    }

    function fq(a) {
        if (!a.Qa) {
            a.Qa = !0;
            aq(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Mp("cls", a.F), b += Mp("mls", a.X), b += Lp("nls", a.va), window.LayoutShiftAttribution && (b += Mp("cas", a.A), b += Lp("nas", a.Pa), b += Mp("was", a.Ua)), b += Mp("wls", a.xa), b += Mp("tls", a.Ta));
            window.LargestContentfulPaint && (b += Lp("lcp", a.Na), b += Lp("lcps", a.Ma));
            window.PerformanceEventTiming && a.Ka && (b += Lp("fid", a.Ja));
            window.PerformanceLongTaskTiming && (b += Lp("cbt", a.C),
                b += Lp("mbt", a.J), b += Lp("nlt", a.wa));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) Op(c) && d++;
            b += Lp("nif", d);
            b += Lp("ifi", we(window));
            c = M(Sg).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${p===p.top?1:0}`;
            b += a.Sa ? `&${"qqid"}=${encodeURIComponent(a.Sa)}` : Lp("pvsid", ge(p));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.M ? a.La : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += Lp("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Ia()
        }
    }

    function dq(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.F += Number(b.value);
            Number(b.value) > a.X && (a.X = Number(b.value));
            a.va += 1;
            if (c = Pp(b, c, d)) a.A += b.value, a.Pa++;
            if (b.startTime - a.Oa > 5E3 || b.startTime - a.Ra > 1E3) a.Oa = b.startTime, a.i = 0, a.j = 0;
            a.Ra = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.xa && (a.xa = a.i, a.Ua = a.j, a.Ta = b.startTime + b.duration)
        }
    }

    function eq(a, b) {
        gq(a, b);
        const c = a.g[a.g.length - 1],
            d = a.I[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.I[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.I[e.id]
        })
    }

    function gq(a, b) {
        b.interactionId && (a.ea = Math.min(a.ea, b.interactionId), a.u = Math.max(a.u, b.interactionId), a.La = a.u ? (a.u - a.ea) / 7 + 1 : 0)
    }
    var $p = class {
            constructor() {
                this.j = this.i = this.va = this.X = this.F = 0;
                this.Ra = this.Oa = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.I = {};
                this.La = 0;
                this.ea = Infinity;
                this.Ja = this.Ma = this.Na = this.Pa = this.Ua = this.A = this.Ta = this.xa = this.u = 0;
                this.Ka = !1;
                this.wa = this.J = this.C = 0;
                this.M = null;
                this.Qa = !1;
                this.Ia = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Sa = a ? a.getAttribute("data-google-query-id") : null;
                this.ob = {
                    vb: !0
                }
            }
        },
        Wp, Xp, Yp = [];
    let hq = null;
    const iq = [],
        jq = new Map;
    let kq = -1;

    function lq(a) {
        return hj.test(a.className) && a.dataset.adsbygoogleStatus !== "done"
    }

    function mq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        nq(a, b, c)
    }

    function nq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Lo);
        var e = b.google_reactive_ads_config;
        e || Lo(a, b, d, c);
        Nn(d, b);
        if (!oq(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(N).page_contains_reactive_tag && !X(N).allow_second_reactive_tag) {
                    if (e.pltais) {
                        sm(!1);
                        return
                    }
                    throw new U("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(N).page_contains_reactive_tag = !0;
                sm(e.google_pgb_reactive === 7)
            }
            b.google_unique_id = ve(d);
            Td(rn, (f, g) => {
                b[g] = b[g] || d[g]
            });
            b.google_loader_used !== "sd" && (b.google_loader_used =
                "aa");
            b.google_reactive_tag_first = (X(N).first_tag_on_page || 0) === 1;
            Zj(164, () => {
                Sn(d, b, a, c)
            })
        }
    }

    function oq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = typeof a.className === "string" && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = qm(c);
        if (f && f.Va && b.google_adtest !== "on" && !e) {
            e = Qi(a, c);
            const g = Mi(c).clientHeight;
            e = g === 0 ? null : e / g;
            if (!f.ya || f.ya && (e || 0) >= f.ya) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = ma(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), f.Jb === "slot" && (Xd(a.getAttribute("width")) !==
                null && a.setAttribute("width", "0"), Xd(a.getAttribute("height")) !== null && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Rd(a, c)) && f.display === "none" && !(b.google_adtest === "on" || b.google_reactive_ad_format > 0 || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = b.google_pgb_reactive == null || b.google_pgb_reactive === 3;
        return b.google_reactive_ad_format !== 1 && b.google_reactive_ad_format !==
            8 || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function pq(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (lq(c) && c.dataset.adsbygoogleStatus !== "reserved" && (!a || e.id === a)) return e
        }
        return null
    }

    function qq(a, b, c) {
        if (a && "shift" in a) {
            Xo(e => {
                Wc(xf(e), 2) || (e = xf(e), $c(e, 2))
            });
            for (var d = 20; a.length > 0 && d > 0;) {
                try {
                    rq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    }

    function sq() {
        const a = Qd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        $d(a);
        return a
    }

    function tq(a, b) {
        const c = {},
            d = Jm(a.google_ad_client, b);
        Td(Li, (g, h) => {
            a.enable_page_level_ads === !1 ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        la(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = sq();
        he.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(N).pause_ad_requests;
        Ip(uq(a) || vn(N), f, b);
        mq(e, f, b);
        Xo(g => {
            Wc(xf(g), 6) || (g = xf(g), $c(g, 6))
        })
    }

    function vq(a, b) {
        gn(p).wasPlaTagProcessed = !0;
        const c = () => {
                tq(a, b)
            },
            d = p.document;
        if (d.body || d.readyState === "complete" || d.readyState === "interactive") tq(a, b);
        else {
            const e = nd(V.sa(191, c));
            od(d, "DOMContentLoaded", e);
            p.MutationObserver != null && (new p.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function rq(a, b, c) {
        const d = {};
        Zj(165, () => {
            wq(a, d, b, c)
        }, e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function xq(a) {
        delete a.google_checked_head;
        Td(a, (b, c) => {
            gj[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), p.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function yq(a, b) {
        var c = N.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || N.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) zq(c);
            else {
                Xo(g => {
                    g = xf(g);
                    A(g, 7, Hb(!0), !1)
                });
                var e = {};
                Jo(c, e);
                xq(e);
                var f = td(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                e.google_ad_intent_query &&
                    (c.enable_ad_intent_display_ads = !0);
                e.google_overlays === "bottom" && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                N.adsbygoogle || (N.adsbygoogle = []);
                d = N.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.i() ? .i() ? Aq(f, a) : Kp(() => {
                    Aq(f, a)
                })
            }
        }
    }

    function zq(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Md(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function Bq(a) {
        if (typeof a === "object" && a != null) {
            if (typeof a.type === "string") return 2;
            if (typeof a.sound === "string" || typeof a.preloadAdBreaks === "string") return 3
        }
        return 0
    }

    function wq(a, b, c, d) {
        if (a == null) throw new U("push() called with no parameters.");
        Xo(f => {
            Wc(xf(f), 3) || (f = xf(f), $c(f, 3))
        });
        d.j() && Cq(a, d.g().g(), H(d, 2));
        var e = Bq(a);
        if (e !== 0)
            if (d = tm(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = va), hq == null) Dq(a), iq.push(a);
            else if (e === 3) {
            const f = hq;
            Zj(787, () => {
                f.handleAdConfig(a)
            })
        } else bk(730, hq.handleAdBreak(a));
        else {
            va = (new Date).getTime();
            On(c, d, uq(a));
            Eq();
            a: {
                if (!a.enable_ad_intent_display_ads &&
                    a.enable_page_level_ads != void 0) {
                    if (typeof a.google_ad_client === "string") {
                        e = !0;
                        break a
                    }
                    throw new U("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Xo(f => {
                Wc(xf(f), 4) || (f = xf(f), $c(f, 4))
            }), Fq(a, d);
            else if ((e = a.params) && Td(e, (f, g) => {
                    b[g] = f
                }), b.google_ad_output === "js") console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                Ip(uq(a) || vn(N), b, d);
                e = (c = !!b.google_wrap_fullscreen_ad) ?
                    Gq() : Hq(a.element);
                c && (c = Jp(), b.google_ad_height = c.height, b.google_ad_width = c.width, b.fsapi = !0);
                Jo(e, b);
                c = X(p).head_tag_slot_vars || {};
                Td(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") && !X(p).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
                if (c = (X(N).first_tag_on_page ||
                        0) === 0 && kn(b)) Xo(f => {
                    Wc(xf(f), 5) || (f = xf(f), $c(f, 5))
                }), Iq(c);
                (X(N).first_tag_on_page || 0) === 0 && (X(N).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(N).pause_ad_requests;
                mq(e, b, d)
            }
        }
    }
    let Jq = !1;

    function Cq(a, b, c) {
        Jq || (Jq = !0, a = uq(a) || vn(N), ak("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function uq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Eq() {
        if (R(ei)) {
            const a = qm(N);
            a && a.Va || rm(N)
        }
    }

    function Iq(a) {
        ie(() => {
            gn(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
        })
    }

    function Fq(a, b) {
        (X(N).first_tag_on_page || 0) === 0 && (X(N).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(p);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        ln(a, b);
        vq(a, b)
    }

    function Gq() {
        const a = sq();
        a.dataset.adsbygoogleStatus = "reserved";
        he.documentElement.appendChild(a);
        return a
    }

    function Hq(a) {
        if (a) {
            if (!lq(a) && (a.id ? a = pq(a.id) : a = null, !a)) throw new U("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
        } else if (a = pq(), !a) throw new U("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Kq(a) {
        a = {
            value: `${G(a,16)}`,
            host_v: `${G(a,22)}`,
            frequency: .01
        };
        ak("new_abg_tag", a, .01)
    }

    function Lq(a) {
        var b = yk();
        Fk(b, 26, !!Number(a))
    }

    function Mq(a) {
        Number(a) ? X(N).pause_ad_requests = !0 : (X(N).pause_ad_requests = !1, a = () => {
            if (!X(N).pause_ad_requests) {
                var b = {};
                let c;
                typeof window.CustomEvent === "function" ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                N.dispatchEvent(c)
            }
        }, p.setTimeout(a, 0), p.setTimeout(a, 1E3))
    }

    function Nq(a) {
        a && a.call && typeof a === "function" && window.setTimeout(a, 0)
    }

    function Aq(a, b) {
        b = fn(2, p, b.Ib).Wa.then(c => {
            hq == null && (c.init(a), hq = c, Oq(c))
        });
        V.da(723, b);
        b.finally(() => {
            iq.length = 0;
            ak("slotcar", {
                event: "api_ld",
                time: Date.now() - va,
                time_pr: Date.now() - kq
            });
            R(Ci) && cp(M(Yo), Cf(23))
        })
    }

    function Oq(a) {
        for (const [c, d] of jq) {
            var b = c;
            const e = d;
            e !== -1 && (p.clearTimeout(e), jq.delete(b))
        }
        for (b = 0; b < iq.length; b++) {
            if (jq.has(b)) continue;
            const c = iq[b],
                d = Bq(c);
            Zj(723, () => {
                if (d === 3) a.handleAdConfig(c);
                else if (d === 2) {
                    var e = a.handleAdBreakBeforeReady(c);
                    V.da(730, e)
                }
            })
        }
    }

    function Dq(a) {
        var b = iq.length;
        if (Bq(a) === 2 && a.type === "preroll" && a.adBreakDone != null) {
            var c = a.adBreakDone;
            kq === -1 && (kq = Date.now());
            var d = p.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), jq.set(b, -1), ak("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    }), R(Ci) && cp(M(Yo), Cf(22))
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, S(Bi) * 1E3);
            jq.set(b, d)
        }
    };
    (function(a, b, c, d = () => {}) {
        V.kb(ck);
        Zj(166, () => {
            const e = new mg(2, a);
            try {
                Db(m => {
                    var n = new ag;
                    var q = new $f;
                    try {
                        var v = ge(window);
                        J(q, 1, v)
                    } catch (C) {}
                    try {
                        var u = M(Sg).g();
                        Cc(q, 2, u, Lb)
                    } catch (C) {}
                    try {
                        ad(q, 3, window.document.URL)
                    } catch (C) {}
                    n = Mc(n, 2, q);
                    q = new Zf;
                    q = A(q, 1, w(1191), 0);
                    try {
                        var x = Ye(m ? .name) ? m.name : "Unknown error";
                        ad(q, 2, x)
                    } catch (C) {}
                    try {
                        var K = Ye(m ? .message) ? m.message : `Caught ${m}`;
                        ad(q, 3, K)
                    } catch (C) {}
                    try {
                        const C = Ye(m ? .stack) ? m.stack : Error().stack;
                        C && Cc(q, 4, C.split(/\n\s*/), Tb)
                    } catch (C) {}
                    m = Mc(n, 1, q);
                    x = new Yf;
                    try {
                        ad(x, 1, xl())
                    } catch {}
                    Nc(m, 6, bg, x);
                    J(m, 5, 1);
                    dg(e, m)
                })
            } catch (m) {}
            const f = Gp(b);
            Fp(V, H(f, 2));
            pm(G(f, 6));
            Gk(yk(), H(f, 24));
            d();
            se(16, [1, cd(f)]);
            var g = ue(te(N)) || N,
                h = qn({
                    za: a,
                    Fa: H(f, 2)
                });
            const k = c(h, f);
            h = N.document.currentScript === null ? 1 : fp(k.Kb);
            Am(g, f);
            Ep(g, f, h);
            Xo(m => {
                var n = Uc(m, 1) + 1;
                A(m, 1, Mb(n), 0);
                N.top === N && (n = Uc(m, 2) + 1, A(m, 2, Mb(n), 0));
                Wc(xf(m), 1) || (m = xf(m), $c(m, 1))
            });
            bk(1086, ap(h === 0));
            if (!Ja() || ya(Oa(), 11) >= 0) {
                Yj(R(Ei));
                Vn();
                Rl();
                try {
                    Zp()
                } catch {}
                Un();
                yq(k, f);
                g = window;
                h = g.adsbygoogle;
                if (!h || !h.loaded) {
                    Kq(f);
                    var l = {
                        push: m => {
                            rq(m, k, f)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(l, "requestNonPersonalizedAds", {
                            set: Lq
                        }), Object.defineProperty(l, "pauseAdRequests", {
                            set: Mq
                        }), Object.defineProperty(l, "onload", {
                            set: Nq
                        })
                    } catch {}
                    if (h)
                        for (const m of ["requestNonPersonalizedAds", "pauseAdRequests"]) h[m] !== void 0 && (l[m] = h[m]);
                    qq(h, k, f);
                    g.adsbygoogle = l;
                    h && (l.onload = h.onload)
                }
            }
        })
    })(xl(), typeof sttc === "undefined" ? void 0 : sttc, function(a, b) {
        const c = Uc(b, 1) > 2012 ? `_fy${Uc(b,1)}` : "",
            d = H(b, 3);
        b = H(b, 2);
        Cd `data:text/javascript,//show_ads_impl_preview.js`;
        return {
            Ib: Cd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            Gb: Cd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl${c}.js`,
            Fb: Cd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl_with_ama${c}.js`,
            uc: Cd `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            Kb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20240717\",\"r20190131\",null,null,null,null,\".google.com.pk\",null,null,null,[[[1321,null,null,[1]],[null,619278254,null,[null,10]],[1325,null,null,[1]],[1310,null,null,[1]],[1322,null,null,[1]],[1355,null,null,[1]],[1308,null,null,[1]],[1351,null,null,[1]],[null,1130,null,[null,100]],[null,1340,null,[null,0.2]],[null,1338,null,[null,0.3]],[1331,null,null,[1]],[1352,null,null,[1]],[1330,null,null,[1]],[null,1336,null,[null,1.2]],[null,1339,null,[null,0.3]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1224,null,[null,0.01]],[null,1346,null,[null,6]],[null,1347,null,[null,3]],[null,1343,null,[null,300]],[1320,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1323,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1318,null,null,[1]],[1362,null,null,[1]],[null,1072,null,[null,0.75]],[null,1364,null,[null,300]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"30\"]],null,null,null,627094447],[null,579884443,null,[null,0.7]],[null,624950166,null,[null,15000]],[null,null,null,[null,null,null,[\"33\"]],null,null,null,641845510],[622128248,null,null,[1]],[null,null,null,[null,null,null,[\"30_19\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"30_6\"]],null,null,null,636146137],[579884441,null,null,[1]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"30\"]],null,null,null,627094446],[null,579884442,null,[null,0.7]],[613534001,null,null,[1]],[null,626062006,null,[null,670]],[649667950,null,null,[1]],[638621371,null,null,[1]],[null,618163195,null,[null,15000]],[null,623405755,null,[null,300]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[null,650548030,null,[null,5]],[null,650548032,null,[null,300]],[null,650548031,null,[null,2]],[null,561668774,null,[null,0.1]],[null,469675170,null,[null,60000]],[645220285,null,null,[1]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\.\\\\d\"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[45615403,null,null,[1]],[45621722,null,null,[1]],[570804360,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[10010,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[10014,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[595827158,null,null,[1]],[45618987,null,null,[1]],[null,550718588,null,[null,250]],[null,629793592,null,[null,0.8]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0\/9AORwCSapUO\/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv\/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg\/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31083552],[44776368]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31084127],[31084128]]],[50,[[31084867],[31084868,[[643056383,null,null,[1]]]]]],[1000,[[31085361,[[null,null,14,[null,null,\"31085361\"]]],[6,null,null,null,6,null,\"31085361\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31085362,[[null,null,14,[null,null,\"31085362\"]]],[6,null,null,null,6,null,\"31085362\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31085385,[[null,null,14,[null,null,\"31085385\"]]],[6,null,null,null,6,null,\"31085385\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31085386,[[null,null,14,[null,null,\"31085386\"]]],[6,null,null,null,6,null,\"31085386\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31085449,[[null,null,14,[null,null,\"31085449\"]]],[6,null,null,null,6,null,\"31085449\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31085450,[[null,null,14,[null,null,\"31085450\"]]],[6,null,null,null,6,null,\"31085450\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[42532741],[42532742,[[1260,null,null,[1]],[null,1263,null,[null,16]],[null,1323,null,[null,50]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532743,[[1260,null,null,[1]],[null,1263,null,[null,13]],[null,1323,null,[null,180]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532744,[[1260,null,null,[1]],[null,1263,null,[null,11]],[null,1323,null,[null,350]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532745,[[1260,null,null,[1]],[null,1263,null,[null,10]],[null,1323,null,[null,420]],[1291,null,null,[1]],[1266,null,null,[1]]]]]],[null,[[42532746],[42532747],[42532748],[42532749],[42532750]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[200,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[10,[[95330276],[95330278,[[null,1336,null,[null,1]]]],[95330279,[[null,1336,null,[null,0.8]]]],[95332928,[[null,1336,null,[null,0.5]]]]]],[50,[[95331687,[[null,null,null,[null,null,null,[\"95331691\"]],null,null,null,630330362]]],[95331688,[[566279275,null,null,[1]],[null,null,null,[null,null,null,[\"95331692\"]],null,null,null,630330362]]],[95331689,[[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95331693\"]],null,null,null,630330362]]],[95331690,[[566279275,null,null,[1]],[566279276,null,null,[1]],[null,561668774,null,[]],[null,null,null,[null,null,null,[\"95331694\"]],null,null,null,630330362]]]],[4,null,55]],[null,[[95331695,[[null,null,null,[null,null,null,[\"95331697\"]],null,null,null,630330362]]],[95331696,[[1120,null,null,[1]],[null,null,null,[null,null,null,[\"95331698\"]],null,null,null,630330362]]]],[4,null,55]],[50,[[95331832],[95331833,[[1342,null,null,[1]]]]]],[10,[[95332584],[95332585,[[null,1343,null,[null,600]]]],[95332586,[[null,1343,null,[null,900]]]],[95332587,[[null,1343,null,[null,1200]]]]]],[10,[[95332589],[95332590,[[1344,null,null,[1]]]]]],[10,[[95332923],[95332924,[[null,1338,null,[null,0.8]]]],[95332925,[[null,1339,null,[null,0.8]]]],[95332926,[[null,1340,null,[null,0.8]]]],[95332927,[[null,1340,null,[null,0.8]],[null,1338,null,[null,0.8]],[null,1339,null,[null,0.8]]]]]],[10,[[95333409],[95333410,[[null,1346,null,[null,-1]],[null,1347,null,[null,-1]]]],[95333411,[[null,1346,null,[null,3]],[null,1347,null,[null,1]]]],[95333412,[[null,1346,null,[null,8]],[null,1347,null,[null,5]]]]]],[399,[[95334516,[[null,null,null,[null,null,null,[\"95334518\"]],null,null,null,630330362]]],[95334517,[[626390500,null,null,[1]],[null,null,null,[null,null,null,[\"95334519\"]],null,null,null,630330362]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"bjsvp14\\\\.space\/|bjsvp15\\\\.space\/|buzzfun\\\\.me\/|buzzsight\\\\.co\/|couponpac\\\\.com\/|darada\\\\.co\/|diggfun\\\\.co\/|dreamsnest\\\\.com\/|games2kings\\\\.com\/|gegen-hartz\\\\.de\/|indiaimagine\\\\.com\/|pepigame\\\\.com\/|postfunny\\\\.com\/|testname\\\\.me\/|yashbharat\\\\.com\/\"]]]],[166,[[95334524,[[null,null,null,[null,null,null,[\"95334530\"]],null,null,null,630330362]]],[95334525,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_15\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334531\"]],null,null,null,630330362]]],[95334526,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_9\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334532\"]],null,null,null,630330362]]],[95334527,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_8\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334533\"]],null,null,null,630330362]]],[95334528,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_4\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334534\"]],null,null,null,630330362]]],[95334529,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_14\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334535\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[333,[[95334828,[[null,null,null,[null,null,null,[\"95334831\"]],null,null,null,630330362]]],[95334829,[[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"32_18\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"32_9\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334832\"]],null,null,null,630330362]]],[95334830,[[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"32_7\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"32_9\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334833\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[50,[[95335245,[[null,null,null,[null,null,null,[\"95335250\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335246,[[626062008,null,null,[1]],[null,null,null,[null,null,null,[\"95335251\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335247,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335252\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335247\",\"95335252\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[10,[[95335248,[[null,null,null,[null,null,null,[\"95335253\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335249,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335254\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335249\",\"95335254\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[1,[[95336911],[95336912],[95336913,[[1361,null,null,[1]]]],[95336914],[95336915,[[1361,null,null,[1]]]]]],[250,[[95337026,[[null,null,null,[null,null,null,[\"95337028\"]],null,null,null,630330362]]],[95337027,[[null,null,null,[null,null,null,[\"34\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"34\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95337029\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[10,[[95337056],[95337057,[[null,1359,null,[null,3]],[null,1358,null,[null,2]],[1360,null,null,[1]],[null,1357,null,[null,6]]]],[95337061,[[null,1359,null,[null,4]],[null,1358,null,[null,1]],[1360,null,null,[1]],[null,1357,null,[null,4]]]],[95337065,[[null,1359,null,[null,3]],[null,1358,null,[null,1]],[1360,null,null,[1]],[null,1357,null,[null,3]]]],[95337069,[[null,1359,null,[null,2]],[null,1358,null,[null,1]],[1360,null,null,[1]],[null,1357,null,[null,2]]]]]],[10,[[95337195],[95337196,[[1354,null,null,[1]]]]],null,126],[10,[[95337197,null,[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]],[95337198,[[1354,null,null,[1]]],[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]]],null,126],[10,[[95337273,[[null,null,null,[null,null,null,[\"95337276\"]],null,null,null,630330362]]],[95337274,[[622128248,null,null,[]],[636570127,null,null,[1]],[null,null,null,[null,null,null,[\"95337277\"]],null,null,null,630330362]]],[95337275,[[622128248,null,null,[]],[null,null,null,[null,null,null,[\"95337278\"]],null,null,null,630330362]]]],[4,null,55]],[10,[[95337496],[95337497,[[1356,null,null,[1]]]]]],[10,[[95337584],[95337585,[[1350,null,null,[1]]]]]],[10,[[95337586],[95337587]]],[333,[[95337868,[[null,null,null,[null,null,null,[\"95337871\"]],null,null,null,630330362]]],[95337869,[[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"29_18\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"29_5\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95337872\"]],null,null,null,630330362]]],[95337870,[[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"29_5\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95337873\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[10,[[95337874],[95337875]]],[10,[[95338226,[[null,null,null,[null,null,null,[\"95338230\"]],null,null,null,630330362]]],[95338227,[[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338231\"]],null,null,null,630330362]]],[95338228,[[null,643258048,null,[null,0.41421]],[null,643258049,null,[null,0.44357]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338232\"]],null,null,null,630330362]]],[95338229,[[null,643258048,null,[null,0.46927]],[null,643258049,null,[null,0.48129]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338233\"]],null,null,null,630330362]]]],[4,null,55]],[10,[[95338242],[95338243,[[1318,null,null,[]]]]]],[50,[[95338246,[[null,null,null,[null,null,null,[\"95338266\"]],null,null,null,630330362]]],[95338247,[[null,508040914,null,[null,500]],[null,null,null,[null,null,null,[\"95338267\"]],null,null,null,630330362]]],[95338248,[[null,508040914,null,[null,300]],[null,null,null,[null,null,null,[\"95338268\"]],null,null,null,630330362]]],[95338249,[[null,508040914,null,[null,200]],[null,null,null,[null,null,null,[\"95338269\"]],null,null,null,630330362]]],[95338250,[[null,650548030,null,[null,1]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338270\"]],null,null,null,630330362]]],[95338251,[[null,508040914,null,[null,500]],[null,650548030,null,[null,1]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338271\"]],null,null,null,630330362]]],[95338252,[[null,650548030,null,[null,2]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338272\"]],null,null,null,630330362]]],[95338253,[[null,508040914,null,[null,500]],[null,650548030,null,[null,2]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338273\"]],null,null,null,630330362]]],[95338254,[[null,650548030,null,[null,2]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338274\"]],null,null,null,630330362]]],[95338255,[[null,508040914,null,[null,500]],[null,650548030,null,[null,2]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338275\"]],null,null,null,630330362]]],[95338256,[[null,650548030,null,[null,3]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338276\"]],null,null,null,630330362]]],[95338257,[[null,508040914,null,[null,500]],[null,650548030,null,[null,3]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338277\"]],null,null,null,630330362]]],[95338258,[[null,650548030,null,[null,3]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338278\"]],null,null,null,630330362]]],[95338259,[[null,508040914,null,[null,500]],[null,650548030,null,[null,3]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338279\"]],null,null,null,630330362]]],[95338260,[[null,650548030,null,[null,4]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338280\"]],null,null,null,630330362]]],[95338261,[[null,508040914,null,[null,500]],[null,650548030,null,[null,4]],[null,650548031,null,[null,2]],[null,null,null,[null,null,null,[\"95338281\"]],null,null,null,630330362]]],[95338262,[[null,650548030,null,[null,4]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338282\"]],null,null,null,630330362]]],[95338263,[[null,508040914,null,[null,500]],[null,650548030,null,[null,4]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338283\"]],null,null,null,630330362]]],[95338264,[[null,650548030,null,[null,5]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338284\"]],null,null,null,630330362]]],[95338265,[[null,508040914,null,[null,500]],[null,650548030,null,[null,5]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95338285\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]]]],[11,[[100,[[31084184,null,[1,[[1,[[4,null,10]]]]]]],null,122,null,null,null,null,null,null,null,null,23],[100,[[31084185,null,[1,[[1,[[4,null,10]]]]]]],null,122,null,null,null,200,null,null,null,null,23],[100,[[31084186,null,[1,[[1,[[4,null,10]]]]]]],null,122,null,null,null,600,null,null,null,null,23],[100,[[31084187,null,[1,[[1,[[4,null,10]]]]]]],null,122,null,null,null,800,null,null,null,null,23],[10,[[31084678],[31084679,[[45621722,null,null,[]]]]]],[50,[[95336521],[95336522,[[null,624290870,null,[null,50]]]]],null,120],[50,[[95337092],[95337093,[[null,624290870,null,[null,100]]]],[95337094,[[null,624290870,null,[null,150]]]]],null,120]]],[17,[[10,[[31084487],[31084488]],null,null,null,null,32,null,null,142,1],[50,[[95331953],[95331954,[[45618987,null,null,[]]]]],null,null,null,null,null,550,null,149],[200,[[95336266,[[null,null,null,[null,null,null,[\"95336268\"]],null,null,null,630330362]]],[95336267,[[null,null,589752731,[null,null,\"#FFFFFF\"]],[null,null,589752730,[null,null,\"#1A73E8\"]],[null,null,null,[null,null,null,[\"95336269\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,173]]]],null,null,[null,1000,1,1000]],[null,[],null,null,null,null,null,null,\"ca-pub-9588110352542484\"],null,null,1,\"www.dynamicdevelopers.com.pk\",2061401273,[44759876,44759927,44759837]]");