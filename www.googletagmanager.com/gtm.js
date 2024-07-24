// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [50, "__e", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getEventData"]],
                    ["$0", "event"]
                ]]
            ]

        ],
        "entities": {
            "__e": {
                "2": true,
                "4": true
            }


        },
        "blob": {
            "1": "1"
        },
        "permissions": {
            "__e": {
                "read_event_data": {
                    "eventDataAccess": "specific",
                    "keyPatterns": ["event"]
                }
            }


        }



        ,
        "security_groups": {
            "google": [
                "__e"

            ]


        }



    };




    var h, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        da = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ea = function(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        fa = ea(this),
        ha = function(a, b) {
            if (b) a: {
                for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                var g = d[d.length - 1],
                    k = c[g],
                    m = b(k);m != k && m != null && da(c, g, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
        };
    ha("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            da(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    var ja = function(a) {
            return a.raw = a
        },
        ka = function(a, b) {
            a.raw = b;
            return a
        },
        la = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        na = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        pa = function(a) {
            return a instanceof Array ? a : na(la(a))
        },
        qa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d =
                    arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    ha("Object.assign", function(a) {
        return a || qa
    });
    var ra = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        sa;
    if (typeof Object.setPrototypeOf == "function") sa = Object.setPrototypeOf;
    else {
        var ta;
        a: {
            var ua = {
                    a: !0
                },
                va = {};
            try {
                va.__proto__ = ua;
                ta = va.a;
                break a
            } catch (a) {}
            ta = !1
        }
        sa = ta ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var wa = sa,
        xa = function(a, b) {
            a.prototype = ra(b.prototype);
            a.prototype.constructor = a;
            if (wa) wa(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Tn = b.prototype
        },
        za = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Aa = this || self,
        Ba = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ca = function(a, b, c) {
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
        },
        Ea = function(a, b, c) {
            Ea = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ba : Ca;
            return Ea.apply(null, arguments)
        },
        Fa =
        function(a) {
            return a
        };
    var Ha = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Ia = function() {
        this.j = {};
        this.H = {}
    };
    h = Ia.prototype;
    h.get = function(a) {
        return this.j["dust." + a]
    };
    h.set = function(a, b) {
        a = "dust." + a;
        this.H.hasOwnProperty(a) || (this.j[a] = b)
    };
    h.Nh = function(a, b) {
        this.set(a, b);
        this.H["dust." + a] = !0
    };
    h.has = function(a) {
        return this.j.hasOwnProperty("dust." + a)
    };
    h.vf = function(a) {
        a = "dust." + a;
        this.H.hasOwnProperty(a) || delete this.j[a]
    };
    var Ka = function() {};
    Ka.prototype.reset = function() {};
    var La = function(a, b) {
        this.R = a;
        this.parent = b;
        this.j = this.D = void 0;
        this.K = !1;
        this.H = function(c, d, e) {
            return c.apply(d, e)
        };
        this.values = new Ia
    };
    La.prototype.add = function(a, b) {
        Ma(this, a, b, !1)
    };
    var Ma = function(a, b, c, d) {
        a.K || (d ? a.values.Nh(b, c) : a.values.set(b, c))
    };
    La.prototype.set = function(a, b) {
        this.K || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b))
    };
    La.prototype.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    La.prototype.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    };
    var Na = function(a) {
        var b = new La(a.R, a);
        a.D && (b.D = a.D);
        b.H = a.H;
        b.j = a.j;
        return b
    };
    La.prototype.rd = function() {
        return this.R
    };
    La.prototype.La = function() {
        this.K = !0
    };

    function Oa(a, b) {
        for (var c, d = 0; d < b.length && !(c = Pa(a, b[d]), c instanceof Ha); d++);
        return c
    }

    function Pa(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!c || typeof c.invoke !== "function") throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.invoke.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.D;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    };
    var Qa = function() {
        this.D = new Ka;
        this.j = new La(this.D)
    };
    h = Qa.prototype;
    h.rd = function() {
        return this.D
    };
    h.execute = function(a) {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.Lh(b)
    };
    h.Lh = function() {
        for (var a, b = 0; b < arguments.length; b++) a = Pa(this.j, arguments[b]);
        return a
    };
    h.Ik = function(a) {
        var b = Na(this.j);
        b.j = a;
        for (var c, d = 1; d < arguments.length; d++) c = Pa(b, arguments[d]);
        return c
    };
    h.La = function() {
        this.j.La()
    };
    var Ra = function() {
        Ia.call(this);
        this.D = !1
    };
    xa(Ra, Ia);
    var Sa = function(a, b) {
        var c = [],
            d;
        for (d in a.j)
            if (a.j.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
            }
        return c
    };
    Ra.prototype.set = function(a, b) {
        this.D || Ia.prototype.set.call(this, a, b)
    };
    Ra.prototype.Nh = function(a, b) {
        this.D || Ia.prototype.Nh.call(this, a, b)
    };
    Ra.prototype.vf = function(a) {
        this.D || Ia.prototype.vf.call(this, a)
    };
    Ra.prototype.La = function() {
        this.D = !0
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
    */
    var Ta = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ua = function(a) {
            if (a == null) return String(a);
            var b = Ta.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Va = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Wa = function(a) {
            if (!a || Ua(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Va(a, "constructor") && !Va(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return b === void 0 ||
                Va(a, b)
        },
        l = function(a, b) {
            var c = b || (Ua(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (Va(a, d)) {
                    var e = a[d];
                    Ua(e) == "array" ? (Ua(c[d]) != "array" && (c[d] = []), c[d] = l(e, c[d])) : Wa(e) ? (Wa(c[d]) || (c[d] = {}), c[d] = l(e, c[d])) : c[d] = e
                }
            return c
        };

    function Xa(a) {
        if (a == void 0 || Array.isArray(a) || Wa(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    }

    function Za(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    };
    var $a = function(a) {
        this.j = [];
        this.H = !1;
        this.D = new Ra;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (Za(b) ? this.j[Number(b)] = a[Number(b)] : this.D.set(b, a[b]))
    };
    h = $a.prototype;
    h.toString = function(a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.j.length; c++) {
            var d = this.j[c];
            d === null || d === void 0 ? b.push("") : d instanceof $a ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    h.set = function(a, b) {
        if (!this.H)
            if (a === "length") {
                if (!Za(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.j.length = Number(b)
            } else Za(a) ? this.j[Number(a)] = b : this.D.set(a, b)
    };
    h.get = function(a) {
        return a === "length" ? this.length() : Za(a) ? this.j[Number(a)] : this.D.get(a)
    };
    h.length = function() {
        return this.j.length
    };
    h.Ob = function() {
        for (var a = Sa(this.D, 1), b = 0; b < this.j.length; b++) a.push(b + "");
        return new $a(a)
    };
    var ab = function(a, b) {
        Za(b) ? delete a.j[Number(b)] : a.D.vf(b)
    };
    h = $a.prototype;
    h.pop = function() {
        return this.j.pop()
    };
    h.push = function() {
        return this.j.push.apply(this.j, Array.prototype.slice.call(arguments))
    };
    h.shift = function() {
        return this.j.shift()
    };
    h.splice = function(a, b) {
        return new $a(this.j.splice.apply(this.j, arguments))
    };
    h.unshift = function() {
        return this.j.unshift.apply(this.j, Array.prototype.slice.call(arguments))
    };
    h.has = function(a) {
        return Za(a) && this.j.hasOwnProperty(a) || this.D.has(a)
    };
    h.La = function() {
        this.H = !0;
        Object.freeze(this.j);
        this.D.La()
    };

    function bb(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var cb = function() {
        Ra.call(this)
    };
    xa(cb, Ra);
    cb.prototype.Ob = function() {
        return new $a(Sa(this, 1))
    };
    var db = function(a) {
        for (var b = Sa(a, 3), c = new $a, d = 0; d < b.length; d++) {
            var e = new $a(b[d]);
            c.push(e)
        }
        return c
    };

    function eb() {
        for (var a = fb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function gb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var fb, hb;

    function ib(a) {
        fb = fb || gb();
        hb = hb || eb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(fb[m], fb[n], fb[p], fb[q])
        }
        return b.join("")
    }

    function jb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = hb[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        fb = fb || gb();
        hb = hb || eb();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (k === 64 && e === -1) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2), k !== 64 && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var kb = {};

    function lb(a, b) {
        kb[a] = kb[a] || [];
        kb[a][b] = !0
    }

    function mb(a) {
        var b = kb[a];
        if (!b || b.length === 0) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return ib(c.join("")).replace(/\.+$/, "")
    }

    function nb() {
        for (var a = [], b = kb.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    };

    function ob() {}

    function pb(a) {
        return typeof a === "function"
    }

    function z(a) {
        return typeof a === "string"
    }

    function qb(a) {
        return typeof a === "number" && !isNaN(a)
    }

    function rb(a) {
        return Array.isArray(a) ? a : [a]
    }

    function sb(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function tb(a, b) {
        if (!qb(a) || !qb(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    function ub(a, b) {
        for (var c = new vb, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e])) return !0;
        return !1
    }

    function G(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function wb(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }

    function xb(a) {
        return Math.round(Number(a)) || 0
    }

    function yb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }

    function zb(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }

    function Ab(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }

    function Bb() {
        return new Date(Date.now())
    }

    function Cb() {
        return Bb().getTime()
    }
    var vb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    vb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    vb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };

    function Db(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }

    function Eb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }

    function Fb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function Gb(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }

    function Hb(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }

    function Ib(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    }

    function Jb(a, b) {
        var c = H;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0) return
        }
        return d
    }

    function Kb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var Lb = /^\w{1,9}$/;

    function Mb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        G(a, function(d, e) {
            Lb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }

    function Nb(a, b) {
        function c() {
            e && ++d === b && (e(), e = null, c.done = !0)
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c
    }

    function Ob(a) {
        if (a) {
            var b = a.split(",");
            if (b.length === 2 && b[0] === b[1]) return b[0]
        }
        return a
    };
    var Pb = [],
        Qb = {};

    function Rb(a) {
        return Pb[a] === void 0 ? !1 : Pb[a]
    };
    var Sb, Tb = function() {
        if (Sb === void 0) {
            var a = null,
                b = Aa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Fa,
                        createScript: Fa,
                        createScriptURL: Fa
                    })
                } catch (c) {
                    Aa.console && Aa.console.error(c.message)
                }
                Sb = a
            } else Sb = a
        }
        return Sb
    };
    var Ub = function(a) {
        this.j = a
    };
    Ub.prototype.toString = function() {
        return this.j + ""
    };
    var Vb = function(a) {
            return a instanceof Ub && a.constructor === Ub ? a.j : "type_error:TrustedResourceUrl"
        },
        Wb = {},
        Xb = function(a) {
            var b = a,
                c = Tb(),
                d = c ? c.createScriptURL(b) : b;
            return new Ub(d, Wb)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Yb = ja([""]),
        Zb = ka(["\x00"], ["\\0"]),
        $b = ka(["\n"], ["\\n"]),
        ac = ka(["\x00"], ["\\u0000"]);

    function bc(a) {
        return a.toString().indexOf("`") === -1
    }
    bc(function(a) {
        return a(Yb)
    }) || bc(function(a) {
        return a(Zb)
    }) || bc(function(a) {
        return a($b)
    }) || bc(function(a) {
        return a(ac)
    });
    var cc = function(a) {
        this.j = a
    };
    cc.prototype.toString = function() {
        return this.j
    };
    var dc = new cc("about:invalid#zClosurez");
    var ec = function(a) {
        this.am = a
    };

    function fc(a) {
        return new ec(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var gc = [fc("data"), fc("http"), fc("https"), fc("mailto"), fc("ftp"), new ec(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function hc(a, b) {
        b = b === void 0 ? gc : b;
        if (a instanceof cc) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof ec && d.am(a)) return new cc(a)
        }
    }

    function ic(a) {
        var b;
        b = b === void 0 ? gc : b;
        return hc(a, b) || dc
    }
    var jc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function kc(a) {
        var b;
        if (a instanceof cc)
            if (a instanceof cc) b = a.j;
            else throw Error("");
        else b = jc.test(a) ? a : void 0;
        return b
    };
    var mc = function() {
        this.j = lc[0].toLowerCase()
    };
    mc.prototype.toString = function() {
        return this.j
    };
    var nc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var oc = {},
        pc = function(a) {
            this.j = a
        };
    pc.prototype.toString = function() {
        return this.j.toString()
    };

    function qc(a, b) {
        var c = [new mc];
        if (c.length === 0) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof mc) g = f.j;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return e.indexOf(f) !== 0
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };

    function rc(a, b) {
        var c = kc(b);
        c !== void 0 && (a.action = c)
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function sc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var H = window,
        I = document,
        tc = navigator,
        uc = function() {
            var a;
            try {
                a = tc.serviceWorker
            } catch (b) {
                return
            }
            return a
        },
        vc = I.currentScript,
        wc = vc && vc.src,
        xc = function(a, b) {
            var c = H[a];
            H[a] = c === void 0 ? b : c;
            return H[a]
        };

    function yc(a) {
        return (tc.userAgent || "").indexOf(a) !== -1
    }
    var zc = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ac = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Bc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Cc(a, b, c) {
        b && G(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Dc = function(a, b, c, d, e) {
            var f = I.createElement("script");
            Cc(f, d, Ac);
            f.type = "text/javascript";
            f.async = d && d.async === !1 ? !1 : !0;
            var g;
            g = Xb(sc(a));
            f.src = Vb(g);
            var k, m, n, p = (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : n.call(m, "script[nonce]");
            (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
            zc(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var q = I.getElementsByTagName("script")[0] || I.body || I.head;
                q.parentNode.insertBefore(f,
                    q)
            }
            return f
        },
        Ec = function() {
            if (wc) {
                var a = wc.toLowerCase();
                if (a.indexOf("https://") === 0) return 2;
                if (a.indexOf("http://") === 0) return 3
            }
            return 1
        },
        Fc = function(a, b, c, d, e) {
            var f;
            f = f === void 0 ? !0 : f;
            var g = e,
                k = !1;
            g || (g = I.createElement("iframe"), k = !0);
            Cc(g, c, Bc);
            d && G(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            a !== void 0 && (g.src = a);
            if (k) {
                var m = I.body && I.body.lastChild || I.body || I.head;
                m.parentNode.insertBefore(g, m)
            }
            zc(g, b);
            return g
        },
        Gc = function(a,
            b, c, d) {
            var e = new Image(1, 1);
            Cc(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a;
            return e
        },
        Hc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Ic = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        J = function(a) {
            H.setTimeout(a, 0)
        },
        Jc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Kc = function(a) {
            function b(e) {
                e &&
                    e != " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
                e && e != " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
                e && (e = e.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
                return e
            }
            var c = b(a.innerText || a.textContent || "");
            if (Rb(10)) {
                var d = b(a.textContent || "");
                lb("TAGGING", 26);
                d !== c && lb("TAGGING", 25)
            }
            return c
        },
        Lc = function(a) {
            var b = I.createElement("div"),
                c = b,
                d, e = sc("A<div>" + a + "</div>"),
                f = Tb(),
                g = f ? f.createHTML(e) : e;
            d = new pc(g, oc);
            if (c.nodeType === 1) {
                var k = c.tagName;
                if (k === "SCRIPT" || k === "STYLE") throw Error("");
            }
            c.innerHTML =
                d instanceof pc && d.constructor === pc ? d.j : "type_error:SafeHtml";
            b = b.lastChild;
            for (var m = []; b.firstChild;) m.push(b.removeChild(b.firstChild));
            return m
        },
        Mc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Nc = function(a) {
            var b;
            try {
                b = tc.sendBeacon && tc.sendBeacon(a)
            } catch (c) {
                lb("TAGGING", 15)
            }
            b || Gc(a)
        },
        Oc = function(a, b) {
            try {
                return tc.sendBeacon(a, b)
            } catch (c) {
                lb("TAGGING", 15)
            }
            return !1
        },
        Pc = {
            cache: "no-store",
            credentials: "include",
            keepalive: !0,
            method: "POST",
            mode: "no-cors",
            redirect: "follow"
        },
        Rc = function(a, b, c) {
            if (Qc()) {
                var d = Object.assign({}, Pc);
                b && (d.body = b);
                c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting), c.browsingTopics && (d.browsingTopics = c.browsingTopics));
                try {
                    var e = H.fetch(a, d);
                    e && e.catch(ob);
                    return !0
                } catch (f) {}
            }
            if (c && c.noFallback) return !1;
            if (b) return Oc(a, b);
            Nc(a);
            return !0
        },
        Qc = function() {
            return typeof H.fetch === "function"
        },
        Sc = function(a, b) {
            var c = a[b];
            c && typeof c.animVal === "string" && (c = c.animVal);
            return c
        },
        Tc = function() {
            var a = H.performance;
            if (a && pb(a.now)) return a.now()
        },
        Vc = function() {
            return H.performance || void 0
        };

    function Wc(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function Xc(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }

    function Yc(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function Zc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        return String(a).indexOf(String(b)) > -1
    }

    function $c(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }

    function ad(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        switch (a) {
            case "pageLocation":
                var c = H.location.href;
                b instanceof cb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                return c
        }
    };
    var bd = function(a, b) {
        Ra.call(this);
        this.Lj = a;
        this.fh = b
    };
    xa(bd, Ra);
    h = bd.prototype;
    h.toString = function() {
        return this.Lj
    };
    h.getName = function() {
        return this.Lj
    };
    h.Ob = function() {
        return new $a(Sa(this, 1))
    };
    h.invoke = function(a) {
        return this.fh.apply(new cd(this, a), Array.prototype.slice.call(arguments, 1))
    };
    h.fb = function(a) {
        try {
            return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (b) {}
    };
    var cd = function(a, b) {
        this.fh = a;
        this.F = b
    };
    cd.prototype.evaluate = function(a) {
        var b = this.F;
        return Array.isArray(a) ? Pa(b, a) : a
    };
    cd.prototype.getName = function() {
        return this.fh.getName()
    };
    cd.prototype.rd = function() {
        return this.F.rd()
    };
    var dd = function() {
        this.map = new Map
    };
    dd.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    dd.prototype.get = function(a) {
        return this.map.get(a)
    };
    var ed = function() {
        this.keys = [];
        this.values = []
    };
    ed.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    ed.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b]
    };

    function fd() {
        try {
            return Map ? new dd : new ed
        } catch (a) {
            return new ed
        }
    };
    var gd = function(a) {
        if (a instanceof gd) return a;
        if (Xa(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    gd.prototype.getValue = function() {
        return this.value
    };
    gd.prototype.toString = function() {
        return String(this.value)
    };
    var id = function(a) {
        Ra.call(this);
        this.promise = a;
        this.set("then", hd(this));
        this.set("catch", hd(this, !0));
        this.set("finally", hd(this, !1, !0))
    };
    xa(id, cb);
    var hd = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new bd("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof bd || (d = void 0);
            e instanceof bd || (e = void 0);
            var f = Na(this.F),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.promise) : m.invoke(f, n)
                    }
                },
                k = a.promise.then(d && g(d), e && g(e));
            return new id(k)
        })
    };

    function K(a, b, c) {
        var d = fd(),
            e = function(g, k) {
                for (var m = Sa(g, 1), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (g instanceof $a) {
                    var m = [];
                    d.set(g, m);
                    for (var n = g.Ob(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
                    return m
                }
                if (g instanceof id) return g.promise;
                if (g instanceof cb) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                if (g instanceof bd) {
                    var r = function() {
                        for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = jd(u[v], b, c);
                        var w = new La(b ? b.rd() :
                            new Ka);
                        b && (w.j = b.j);
                        return f(g.invoke.apply(g, [w].concat(u)))
                    };
                    d.set(g, r);
                    e(g, r);
                    return r
                }
                var t = !1;
                switch (c) {
                    case 1:
                        t = !0;
                        break;
                    case 2:
                        t = !1;
                        break;
                    case 3:
                        t = !1;
                        break;
                    default:
                }
                if (g instanceof gd && t) return g.getValue();
                switch (typeof g) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return g;
                    case "object":
                        if (g === null) return null
                }
            };
        return f(a)
    }

    function jd(a, b, c) {
        var d = fd(),
            e = function(g, k) {
                for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (Array.isArray(g) || wb(g)) {
                    var m = new $a([]);
                    d.set(g, m);
                    for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                    return m
                }
                if (Wa(g)) {
                    var p = new cb;
                    d.set(g, p);
                    e(g, p);
                    return p
                }
                if (typeof g === "function") {
                    var q = new bd("", function() {
                        for (var x = Array.prototype.slice.call(arguments, 0), y = 0; y < x.length; y++) x[y] = K(this.evaluate(x[y]), b, c);
                        return f((0, this.F.H)(g, g, x))
                    });
                    d.set(g,
                        q);
                    e(g, q);
                    return q
                }
                var v = typeof g;
                if (g === null || v === "string" || v === "number" || v === "boolean") return g;
                var w = !1;
                switch (c) {
                    case 1:
                        w = !0;
                        break;
                    case 2:
                        w = !1;
                        break;
                    default:
                }
                if (g !== void 0 && w) return new gd(g)
            };
        return f(a)
    };

    function kd() {
        var a = !1;
        return a
    };
    var ld = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof $a)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new $a(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new $a(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new $a(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var k = f; k >= 0; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reverse: function() {
            for (var a = bb(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : ab(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c === void 0 ? d :
                c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new $a(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = bb(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ab(this, d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var md = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    xa(md, Error);
    var nd = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        od = new Ha("break"),
        pd = new Ha("continue");

    function qd(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }

    function rd(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function sd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof $a)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (a === null || a === void 0) {
            var d = "TypeError: Can't read property " + b + " of " + a + ".";
            if (kd()) throw new md(d);
            throw Error(d);
        }
        var e = typeof a === "number";
        if (typeof a === "boolean" || e) {
            if (b === "toString") {
                if (e && c.length()) {
                    var f = K(c.get(0));
                    try {
                        return a.toString(f)
                    } catch (y) {}
                }
                return a.toString()
            }
            var g = "TypeError: " + a + "." + b + " is not a function.";
            if (kd()) throw new md(g);
            throw Error(g);
        }
        if (typeof a === "string") {
            if (nd.hasOwnProperty(b)) {
                var k = 2;
                k = 1;
                var m = K(c, void 0, k);
                return jd(a[b].apply(a, m), this.F)
            }
            var n = "TypeError: " + b + " is not a function";
            if (kd()) throw new md(n);
            throw Error(n);
        }
        if (a instanceof $a) {
            if (a.has(b)) {
                var p = a.get(b);
                if (p instanceof bd) {
                    var q = bb(c);
                    q.unshift(this.F);
                    return p.invoke.apply(p, q)
                }
                var r =
                    "TypeError: " + b + " is not a function";
                if (kd()) throw new md(r);
                throw Error(r);
            }
            if (ld.supportedMethods.indexOf(b) >= 0) {
                var t = bb(c);
                t.unshift(this.F);
                return ld[b].apply(a, t)
            }
        }
        if (a instanceof bd || a instanceof cb) {
            if (a.has(b)) {
                var u = a.get(b);
                if (u instanceof bd) {
                    var v = bb(c);
                    v.unshift(this.F);
                    return u.invoke.apply(u, v)
                }
                var w = "TypeError: " + b + " is not a function";
                if (kd()) throw new md(w);
                throw Error(w);
            }
            if (b === "toString") return a instanceof bd ? a.getName() : a.toString();
            if (b === "hasOwnProperty") return a.has.apply(a,
                bb(c))
        }
        if (a instanceof gd && b === "toString") return a.toString();
        var x = "TypeError: Object has no '" + b + "' property.";
        if (kd()) throw new md(x);
        throw Error(x);
    }

    function td(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.F;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }

    function ud() {
        var a = Na(this.F),
            b = Oa(a, Array.prototype.slice.apply(arguments));
        if (b instanceof Ha) return b
    }

    function vd() {
        return od
    }

    function wd(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof Ha) return d
        }
    }

    function xd() {
        for (var a = this.F, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                Ma(a, c, d, !0)
            }
        }
    }

    function yd() {
        return pd
    }

    function zd(a, b) {
        return new Ha(a, this.evaluate(b))
    }

    function Ad(a, b) {
        var c = new $a;
        b = this.evaluate(b);
        for (var d = 0; d < b.length; d++) c.push(b[d]);
        var e = [51, a, c].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.F.add(a, this.evaluate(e))
    }

    function Bd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }

    function Cd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        var c = a instanceof gd,
            d = b instanceof gd;
        return c || d ? c && d ? a.getValue() === b.getValue() : !1 : a == b
    }

    function Dd() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a
    }

    function Ed(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Oa(f, d);
            if (g instanceof Ha) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
        }
    }

    function Fd(a, b, c) {
        if (typeof b === "string") return Ed(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof cb || b instanceof $a || b instanceof bd) {
            var d = b.Ob(),
                e = d.length();
            return Ed(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }

    function Gd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Fd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Hd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Fd(function(e) {
            var f = Na(d);
            Ma(f, a, e, !0);
            return f
        }, b, c)
    }

    function Id(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Fd(function(e) {
            var f = Na(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Jd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Kd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Ld(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Kd(function(e) {
            var f = Na(d);
            Ma(f, a, e, !0);
            return f
        }, b, c)
    }

    function Md(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F;
        return Kd(function(e) {
            var f = Na(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Kd(a, b, c) {
        if (typeof b === "string") return Ed(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof $a) return Ed(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (kd()) throw new md("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }

    function Nd(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof $a)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.F;
        d = this.evaluate(d);
        var k = Na(g);
        for (e(g, k); Pa(k, b);) {
            var m = Oa(k, d);
            if (m instanceof Ha) {
                if (m.type === "break") break;
                if (m.type === "return") return m
            }
            var n = Na(g);
            e(k, n);
            Pa(n, c);
            k = n
        }
    }

    function Od(a, b) {
        var c = this.F,
            d = this.evaluate(b);
        if (!(d instanceof $a)) throw Error("Error: non-List value given for Fn argument names.");
        var e = Array.prototype.slice.call(arguments, 2);
        return new bd(a, function() {
            return function(f) {
                var g = Na(c);
                g.j === void 0 && (g.j = this.F.j);
                for (var k = Array.prototype.slice.call(arguments, 0), m = 0; m < k.length; m++)
                    if (k[m] = this.evaluate(k[m]), k[m] instanceof Ha) return k[m];
                for (var n = d.get("length"), p = 0; p < n; p++) p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
                g.add("arguments",
                    new $a(k));
                var q = Oa(g, e);
                if (q instanceof Ha) return q.type === "return" ? q.data : q
            }
        }())
    }

    function Pd(a) {
        a = this.evaluate(a);
        var b = this.F;
        if (Qd && !b.has(a)) throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }

    function Rd(a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (a === void 0 || a === null) {
            var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
            if (kd()) throw new md(d);
            throw Error(d);
        }
        if (a instanceof cb || a instanceof $a || a instanceof bd) c = a.get(b);
        else if (typeof a === "string") b === "length" ? c = a.length : Za(b) && (c = a[b]);
        else if (a instanceof gd) return;
        return c
    }

    function Sd(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }

    function Td(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }

    function Ud(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        a instanceof gd && (a = a.getValue());
        b instanceof gd && (b = b.getValue());
        return a === b
    }

    function Vd(a, b) {
        return !Ud.call(this, a, b)
    }

    function Wd(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Oa(this.F, d);
        if (e instanceof Ha) return e
    }
    var Qd = !1;

    function Xd(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }

    function Yd(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }

    function Zd() {
        for (var a = new $a, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }

    function $d() {
        for (var a = new cb, b = 0; b < arguments.length - 1; b += 2) {
            var c = this.evaluate(arguments[b]) + "",
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }

    function be(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }

    function ce(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }

    function de(a) {
        return -this.evaluate(a)
    }

    function ee(a) {
        return !this.evaluate(a)
    }

    function fe(a, b) {
        return !Cd.call(this, a, b)
    }

    function ge() {
        return null
    }

    function he(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function ie(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }

    function je(a) {
        return this.evaluate(a)
    }

    function ke() {
        return Array.prototype.slice.apply(arguments)
    }

    function le(a) {
        return new Ha("return", this.evaluate(a))
    }

    function me(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (a === null || a === void 0) {
            var d = "TypeError: Can't set property " + b + " of " + a + ".";
            if (kd()) throw new md(d);
            throw Error(d);
        }(a instanceof bd || a instanceof $a || a instanceof cb) && a.set(b, c);
        return c
    }

    function ne(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }

    function oe(a, b, c) {
        a = this.evaluate(a);
        var d = this.evaluate(b),
            e = this.evaluate(c);
        if (!Array.isArray(d) || !Array.isArray(e)) throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, k = 0; k < d.length; k++)
            if (g || a === this.evaluate(d[k]))
                if (f = this.evaluate(e[k]), f instanceof Ha) {
                    var m = f.type;
                    if (m === "break") return;
                    if (m === "return" || m === "continue") return f
                } else g = !0;
        if (e.length === d.length + 1 && (f = this.evaluate(e[e.length - 1]), f instanceof Ha && (f.type === "return" || f.type === "continue"))) return f
    }

    function pe(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }

    function qe(a) {
        a = this.evaluate(a);
        return a instanceof bd ? "function" : typeof a
    }

    function re() {
        for (var a = this.F, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }

    function se(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Oa(this.F, e);
            if (f instanceof Ha) {
                if (f.type === "break") return;
                if (f.type === "return") return f
            }
        }
        for (; this.evaluate(a);) {
            var g = Oa(this.F, e);
            if (g instanceof Ha) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
            this.evaluate(b)
        }
    }

    function te(a) {
        return ~Number(this.evaluate(a))
    }

    function ue(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }

    function ve(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }

    function we(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }

    function xe(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }

    function ye(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }

    function ze(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }

    function Ae() {}

    function Be(a, b, c, d, e) {
        var f = !0;
        try {
            var g = this.evaluate(c);
            if (g instanceof Ha) return g
        } catch (r) {
            if (!(r instanceof md && a)) throw f = r instanceof md, r;
            var k = Na(this.F),
                m = new gd(r);
            k.add(b, m);
            var n = this.evaluate(d),
                p = Oa(k, n);
            if (p instanceof Ha) return p
        } finally {
            if (f && e !== void 0) {
                var q = this.evaluate(e);
                if (q instanceof Ha) return q
            }
        }
    };
    var De = function() {
        this.j = new Qa;
        Ce(this)
    };
    De.prototype.execute = function(a) {
        return this.j.Lh(a)
    };
    var Ce = function(a) {
        var b = function(c, d) {
            var e = new bd(String(c), d);
            e.La();
            a.j.j.set(String(c), e)
        };
        b("map", $d);
        b("and", Wc);
        b("contains", Zc);
        b("equals", Xc);
        b("or", Yc);
        b("startsWith", $c);
        b("variable", ad)
    };
    var Fe = function() {
        this.D = !1;
        this.j = new Qa;
        Ee(this);
        this.D = !0
    };
    Fe.prototype.execute = function(a) {
        return Ge(this.j.Lh(a))
    };
    var He = function(a, b, c) {
        return Ge(a.j.Ik(b, c))
    };
    Fe.prototype.La = function() {
        this.j.La()
    };
    var Ee = function(a) {
        var b = function(c, d) {
            var e = String(c),
                f = new bd(e, d);
            f.La();
            a.j.j.set(e, f)
        };
        b(0, qd);
        b(1, rd);
        b(2, sd);
        b(3, td);
        b(56, xe);
        b(57, ue);
        b(58, te);
        b(59, ze);
        b(60, ve);
        b(61, we);
        b(62, ye);
        b(53, ud);
        b(4, vd);
        b(5, wd);
        b(52, xd);
        b(6, yd);
        b(49, zd);
        b(7, Zd);
        b(8, $d);
        b(9, wd);
        b(50, Ad);
        b(10, Bd);
        b(12, Cd);
        b(13, Dd);
        b(51, Od);
        b(47, Gd);
        b(54, Hd);
        b(55, Id);
        b(63, Nd);
        b(64, Jd);
        b(65, Ld);
        b(66, Md);
        b(15, Pd);
        b(16, Rd);
        b(17, Rd);
        b(18, Sd);
        b(19, Td);
        b(20, Ud);
        b(21, Vd);
        b(22, Wd);
        b(23, Xd);
        b(24, Yd);
        b(25, be);
        b(26, ce);
        b(27, de);
        b(28, ee);
        b(29,
            fe);
        b(45, ge);
        b(30, he);
        b(32, ie);
        b(33, ie);
        b(34, je);
        b(35, je);
        b(46, ke);
        b(36, le);
        b(43, me);
        b(37, ne);
        b(38, oe);
        b(39, pe);
        b(67, Be);
        b(40, qe);
        b(44, Ae);
        b(41, re);
        b(42, se)
    };
    Fe.prototype.rd = function() {
        return this.j.rd()
    };

    function Ge(a) {
        if (a instanceof Ha || a instanceof bd || a instanceof $a || a instanceof cb || a instanceof gd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
    };
    var Je = function(a) {
        this.message = a
    };

    function Ke(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return b === void 0 ? new Je("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function Le(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var Me = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Ne(a, b) {
        for (var c = "", d = !0; a > 7;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + Ke(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + Ke(a | b) + c
    };
    var Oe = function() {
        function a(b) {
            return {
                toString: function() {
                    return b
                }
            }
        }
        return {
            lk: a("consent"),
            Xh: a("convert_case_to"),
            Yh: a("convert_false_to"),
            Zh: a("convert_null_to"),
            ai: a("convert_true_to"),
            bi: a("convert_undefined_to"),
            hn: a("debug_mode_metadata"),
            oa: a("function"),
            Jg: a("instance_name"),
            Lk: a("live_only"),
            Mk: a("malware_disabled"),
            Nk: a("metadata"),
            Qk: a("original_activity_id"),
            vn: a("original_vendor_template_id"),
            un: a("once_on_load"),
            Pk: a("once_per_event"),
            kj: a("once_per_load"),
            zn: a("priority_override"),
            An: a("respected_consent_types"),
            sj: a("setup_tags"),
            me: a("tag_id"),
            yj: a("teardown_tags")
        }
    }();
    var kf;
    var lf = [],
        mf = [],
        nf = [],
        of = [],
        pf = [],
        qf = {},
        rf, sf;

    function tf(a) {
        sf = sf || a
    }

    function uf(a) {}
    var vf, wf = [],
        xf = [];

    function yf(a, b) {
        var c = {};
        c[Oe.oa] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }

    function zf(a, b, c) {
        try {
            return rf(Af(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }

    function Bf(a) {
        var b = a[Oe.oa];
        if (!b) throw Error("Error: No function name given for function call.");
        return !!qf[b]
    }
    var Af = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Cf(a[e], b, c));
            return d
        },
        Cf = function(a, b, c) {
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Cf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = lf[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var k = String(g[Oe.Jg]);
                        try {
                            var m = Af(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Df(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            vf && (d = vf.kl(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Cf(a[n], b, c)] = Cf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Cf(a[q], b, c);
                            sf && (p = p || sf.Xl(r));
                            d.push(r)
                        }
                        return sf && p ? sf.ol(d) : d.join("");
                    case "escape":
                        d = Cf(a[1], b, c);
                        if (sf && Array.isArray(a[1]) && a[1][0] === "macro" && sf.Yl(a)) return sf.ym(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Pe[a[t]] && (d = Pe[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (! of [u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return {
                            Fj: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[Oe.oa] = a[1];
                        var w = zf(v, b, c),
                            x = !!a[4];
                        return x || w !== 2 ? x !== (w === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Df = function(a, b) {
            var c = a[Oe.oa],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = qf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
                e && wf.indexOf(c) !== -1,
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && Hb(m, "vtp_") && (e && (g[m] = a[m]), !e || f) && (k[m.substring(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (b.name == null) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (q == null) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = lf[q];
                                    break;
                                case 1:
                                    r = of [q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var t = r && r[Oe.Jg];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var u, v, w;
            if (f && xf.indexOf(c) === -1) {
                xf.push(c);
                var x = Cb();
                u = e(g);
                var y = Cb() - x,
                    B = Cb();
                v = kf(c, k, b);
                w = y - (Cb() - B)
            } else if (e && (u = e(g)), !e || f) v = kf(c, k, b);
            f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0), Xa(u) ? (Array.isArray(u) ? Array.isArray(v) : Wa(u) ? Wa(v) : typeof u === "function" ? typeof v === "function" : u === v) || d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c), w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
            return e ? u : v
        };
    var Ef = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    xa(Ef, Error);

    function Ff(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Ff(a[c], b[c])
        }
    };
    var Gf = function(a, b) {
        var c;
        c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.om = a;
        this.j = [];
        this.D = b
    };
    xa(Gf, Error);
    var If = function() {
        return function(a, b) {
            a instanceof Gf || (a = new Gf(a, Hf));
            b && a.j.push(b);
            throw a;
        }
    };

    function Hf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--) qb(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };

    function Jf(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++) d[r[t]] = !0
        }
        for (var c = [], d = [], e = Kf(a), f = 0; f < mf.length; f++) {
            var g = mf[f],
                k = Lf(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else k === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < of .length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }

    function Lf(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0) return !1;
            if (e === 2) return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (k === 2) return null;
            if (k === 1) return !1
        }
        return !0
    }

    function Kf(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = zf(nf[c], a));
            return b[c]
        }
    };
    var Mf = {
        kl: function(a, b) {
            b[Oe.Xh] && typeof a === "string" && (a = b[Oe.Xh] === 1 ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Oe.Zh) && a === null && (a = b[Oe.Zh]);
            b.hasOwnProperty(Oe.bi) && a === void 0 && (a = b[Oe.bi]);
            b.hasOwnProperty(Oe.ai) && a === !0 && (a = b[Oe.ai]);
            b.hasOwnProperty(Oe.Yh) && a === !1 && (a = b[Oe.Yh]);
            return a
        }
    };
    var Nf = function() {
            this.j = {}
        },
        Pf = function(a, b) {
            var c = Of.D,
                d;
            (d = c.j)[a] != null || (d[a] = []);
            c.j[a].push(function() {
                return b.apply(null, pa(za.apply(0, arguments)))
            })
        };

    function Qf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (k) {
                    g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new Ef(c, d, g);
            }
    }

    function Rf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.j[d],
                    f = a.j.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Qf(e, b, d, g);
                    Qf(f, b, d, g)
                }
            }
        }
    };
    var Vf = function() {
            var a = data.permissions || {},
                b = Sf.ctid,
                c = this;
            this.j = {};
            this.D = new Nf;
            var d = {},
                e = {},
                f = Rf(this.D, b, function() {
                    var g = arguments[0];
                    return g && d[g] ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            G(a, function(g, k) {
                function m(p) {
                    var q = za.apply(1, arguments);
                    if (!n[p]) throw Tf(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(pa(q)))
                }
                var n = {};
                G(k, function(p, q) {
                    var r = Uf(p, q);
                    n[p] = r.assert;
                    d[p] || (d[p] = r.N);
                    r.Bj && !e[p] && (e[p] = r.Bj)
                });
                c.j[g] = function(p, q) {
                    var r = n[p];
                    if (!r) throw Tf(p, {}, "The requested permission " + p + " is not configured.");
                    var t = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, t);
                    f.apply(void 0, t);
                    var u = e[p];
                    u && u.apply(null, [m].concat(pa(t.slice(1))))
                }
            })
        },
        Wf = function(a) {
            return Of.j[a] || function() {}
        };

    function Uf(a, b) {
        var c = yf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Tf;
        try {
            return Df(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Ef(e, {}, "Permission " + e + " is unknown.");
                },
                N: function() {
                    throw new Ef(a, {}, "Permission " + a + " is unknown.");
                }
            }
        }
    }

    function Tf(a, b, c) {
        return new Ef(a, b, c)
    };
    var Xf = !1;
    var Yf = {};
    Yf.dk = yb('');
    Yf.rl = yb('');
    var dg = {},
        eg = (dg.uaa = !0, dg.uab = !0, dg.uafvl = !0, dg.uamb = !0, dg.uam = !0, dg.uap = !0, dg.uapv = !0, dg.uaw = !0, dg);
    var mg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!kg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (d.length === 0) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!lg.exec(n[p])) {
                                m = !1;
                                break a
                            }
                        m = !0
                    }
                if (!m || k.length > d.length || !g && d.length !== e.length ? 0 : g ? Hb(d, k) && (d === k || d.charAt(k.length) === ".") : d === k) return !0
            }
            return !1
        },
        lg = /^[a-z$_][\w$]*$/i,
        kg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
    var ng = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function og(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) === c
    }
    var pg = new vb;

    function qg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = pg.get(e);
            f || (f = new RegExp(b, d), pg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function rg(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }

    function sg(a, b) {
        return String(a) === String(b)
    }

    function tg(a, b) {
        return Number(a) >= Number(b)
    }

    function ug(a, b) {
        return Number(a) <= Number(b)
    }

    function vg(a, b) {
        return Number(a) > Number(b)
    }

    function wg(a, b) {
        return Number(a) < Number(b)
    }

    function xg(a, b) {
        return Hb(String(a), String(b))
    };
    var Eg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Fg = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        };

    function N(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = Eg.exec(b[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                k = e[3],
                m = c[d];
            if (m == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (k !== "*") {
                var n = typeof m;
                m instanceof bd ? n = "Fn" : m instanceof $a ? n = "List" : m instanceof cb ? n = "PixieMap" : m instanceof gd && (n = "OpaqueValue");
                if (n !== k) throw Error("Error in " + a + ". Argument " + f + " has type " + ((Fg[n] || n) + ", which does not match required type ") + ((Fg[k] ||
                    k) + "."));
            }
        }
    };

    function Gg(a) {
        return "" + a
    }

    function Hg(a, b) {
        var c = [];
        return c
    };

    function Ig(a, b) {
        var c = new bd(a, function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (kd()) throw new md(g.message);
                throw g;
            }
        });
        c.La();
        return c
    }

    function Jg(a, b) {
        var c = new cb,
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                pb(e) ? c.set(d, Ig(a + "_" + d, e)) : Wa(e) ? c.set(d, Jg(a + "_" + d, e)) : (qb(e) || z(e) || typeof e === "boolean") && c.set(d, e)
            }
        c.La();
        return c
    };

    function Kg(a, b) {
        N(this.getName(), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new cb;
        return d = Jg("AssertApiSubject", c)
    };

    function Lg(a, b) {
        N(this.getName(), ["actual:?*", "message:?string"], arguments);
        if (a instanceof id) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new cb;
        return d = Jg("AssertThatSubject", c)
    };

    function Mg(a) {
        return function() {
            for (var b = [], c = this.F, d = 0; d < arguments.length; ++d) b.push(K(arguments[d], c));
            return jd(a.apply(null, b))
        }
    }

    function Ng() {
        for (var a = Math, b = Og, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Mg(a[e].bind(a)))
        }
        return c
    };

    function Pg(a) {
        var b;
        return b
    };

    function Qg(a) {
        var b;
        return b
    };

    function Rg(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };

    function Sg(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };

    function Xg(a) {
        N(this.getName(), ["message:?string"], arguments);
    };

    function Yg(a, b) {
        N(this.getName(), ["min:!number", "max:!number"], arguments);
        return tb(a, b)
    };

    function Zg() {
        return (new Date).getTime()
    };

    function $g(a) {
        if (a === null) return "null";
        if (a instanceof $a) return "array";
        if (a instanceof bd) return "function";
        if (a instanceof gd) {
            var b;
            a = (b = a) == null ? void 0 : b.getValue();
            var c;
            if (((c = a) == null ? void 0 : c.constructor) === void 0 || a.constructor.name === void 0) {
                var d = String(a);
                return d.substring(8, d.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };

    function ah(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Xf || Yf.dk) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return jd(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(K(c))
            })
        }
    };
    var bh = function(a) {
        return xb(K(a, this.F))
    };
    var ch = function(a) {
        return Number(K(a, this.F))
    };
    var dh = function(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };
    var eh = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var Og = "floor ceil round max min abs pow sqrt".split(" ");
    var fh = function() {
            var a = {};
            return {
                Cl: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Yj: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        gh = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return bd.prototype.invoke.apply(a, c)
            }
        },
        hh = function(a, b) {
            N(this.getName(), ["apiName:!string", "mock:?*"], arguments);
        },
        ih = function(a, b) {
            N(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
        };
    var jh = {};
    jh.keys = function(a) {
        return new $a
    };
    jh.values = function(a) {
        return new $a
    };
    jh.entries = function(a) {
        return new $a
    };
    jh.freeze = function(a) {
        return a
    };
    jh.delete = function(a, b) {
        return !1
    };

    function O(a, b) {
        var c = za.apply(2, arguments),
            d = a.F.j;
        if (!d) throw Error("Missing program state.");
        if (d.Em) {
            try {
                d.Cj.apply(null, [b].concat(pa(c)))
            } catch (e) {
                throw lb("TAGGING", 21), e;
            }
            return
        }
        d.Cj.apply(null, [b].concat(pa(c)))
    };
    var lh = function() {
        this.j = {};
        this.D = {};
        this.H = !0;
    };
    lh.prototype.get = function(a, b) {
        var c = this.j.hasOwnProperty(a) ? this.j[a] : void 0;
        return c
    };
    lh.prototype.add = function(a, b, c) {
        if (this.j.hasOwnProperty(a)) throw Error("Attempting to add a function which already exists: " + a + ".");
        if (this.D.hasOwnProperty(a)) throw Error("Attempting to add an API with an existing private API name: " + a + ".");
        this.j[a] = c ? void 0 : pb(b) ? Ig(a, b) : Jg(a, b)
    };

    function mh(a, b) {
        var c = void 0;
        return c
    };

    function nh() {
        var a = {};
        return a
    };

    function oh(a) {
        return ph ? I.querySelectorAll(a) : null
    }

    function qh(a, b) {
        if (!ph) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!I.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (d !== null && d.nodeType === 1);
        return null
    }
    var rh = !1;
    if (I.querySelectorAll) try {
        var sh = I.querySelectorAll(":root");
        sh && sh.length == 1 && sh[0] == I.documentElement && (rh = !0)
    } catch (a) {}
    var ph = rh;
    var th = /^[0-9A-Fa-f]{64}$/;

    function uh(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        }
    }

    function vh(a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        var b;
        if ((b = H.crypto) == null ? 0 : b.subtle) {
            if (th.test(a)) return Promise.resolve(a);
            try {
                var c = uh(a);
                return H.crypto.subtle.digest("SHA-256", c).then(function(d) {
                    var e = Array.from(new Uint8Array(d)).map(function(f) {
                        return String.fromCharCode(f)
                    }).join("");
                    return H.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (d) {
                return Promise.resolve("e2")
            }
        } else return Promise.resolve("e1")
    };

    function P(a) {
        lb("GTM", a)
    };
    var Q = {
            g: {
                ya: "ad_personalization",
                P: "ad_storage",
                O: "ad_user_data",
                U: "analytics_storage",
                Cb: "region",
                Rb: "consent_updated",
                Qe: "wait_for_update",
                ei: "app_remove",
                fi: "app_store_refund",
                gi: "app_store_subscription_cancel",
                hi: "app_store_subscription_convert",
                ii: "app_store_subscription_renew",
                pk: "consent_update",
                Sf: "add_payment_info",
                Tf: "add_shipping_info",
                mc: "add_to_cart",
                nc: "remove_from_cart",
                Uf: "view_cart",
                Sb: "begin_checkout",
                oc: "select_item",
                hb: "view_item_list",
                Db: "select_promotion",
                ib: "view_promotion",
                Ia: "purchase",
                qc: "refund",
                Na: "view_item",
                Vf: "add_to_wishlist",
                qk: "exception",
                ji: "first_open",
                ki: "first_visit",
                ba: "gtag.config",
                Ta: "gtag.get",
                li: "in_app_purchase",
                Tb: "page_view",
                rk: "screen_view",
                mi: "session_start",
                sk: "timing_complete",
                tk: "track_social",
                Mc: "user_engagement",
                uk: "user_id_update",
                jb: "gclgb",
                Ua: "gclid",
                ni: "gclgs",
                oi: "gclst",
                fa: "ads_data_redaction",
                ri: "gad_source",
                Fd: "gclid_url",
                si: "gclsrc",
                Wf: "gbraid",
                Re: "wbraid",
                ka: "allow_ad_personalization_signals",
                Se: "allow_custom_scripts",
                Te: "allow_display_features",
                Gd: "allow_enhanced_conversions",
                kb: "allow_google_signals",
                Ca: "allow_interest_groups",
                vk: "app_id",
                wk: "app_installer_id",
                xk: "app_name",
                yk: "app_version",
                Eb: "auid",
                ui: "auto_detection_enabled",
                Ub: "aw_remarketing",
                Ue: "aw_remarketing_only",
                Hd: "discount",
                Id: "aw_feed_country",
                Jd: "aw_feed_language",
                da: "items",
                Kd: "aw_merchant_id",
                Xf: "aw_basket_type",
                Nc: "campaign_content",
                Oc: "campaign_id",
                Pc: "campaign_medium",
                Qc: "campaign_name",
                Rc: "campaign",
                Sc: "campaign_source",
                Tc: "campaign_term",
                lb: "client_id",
                vi: "rnd",
                Yf: "consent_update_type",
                wi: "content_group",
                xi: "content_type",
                Za: "conversion_cookie_prefix",
                Uc: "conversion_id",
                ra: "conversion_linker",
                yi: "conversion_linker_disabled",
                Vb: "conversion_api",
                Ve: "cookie_deprecation",
                Va: "cookie_domain",
                Wa: "cookie_expires",
                ab: "cookie_flags",
                rc: "cookie_name",
                Fb: "cookie_path",
                Oa: "cookie_prefix",
                sc: "cookie_update",
                uc: "country",
                za: "currency",
                Ld: "customer_lifetime_value",
                Vc: "custom_map",
                Zf: "gcldc",
                Md: "dclid",
                zi: "debug_mode",
                la: "developer_id",
                Ai: "disable_merchant_reported_purchases",
                Wc: "dc_custom_params",
                Bi: "dc_natural_search",
                cg: "dynamic_event_settings",
                dg: "affiliation",
                Nd: "checkout_option",
                We: "checkout_step",
                eg: "coupon",
                Xc: "item_list_name",
                Xe: "list_name",
                Ci: "promotions",
                Yc: "shipping",
                Ye: "tax",
                Od: "engagement_time_msec",
                Pd: "enhanced_client_id",
                Qd: "enhanced_conversions",
                fg: "enhanced_conversions_automatic_settings",
                Rd: "estimated_delivery_date",
                Ze: "euid_logged_in_state",
                Zc: "event_callback",
                zk: "event_category",
                ob: "event_developer_id_string",
                Ak: "event_label",
                vc: "event",
                Sd: "event_settings",
                Td: "event_timeout",
                Bk: "description",
                Ck: "fatal",
                Di: "experiments",
                af: "firebase_id",
                wc: "first_party_collection",
                Ud: "_x_20",
                pb: "_x_19",
                Ei: "fledge_drop_reason",
                gg: "fledge",
                hg: "flight_error_code",
                ig: "flight_error_message",
                Fi: "fl_activity_category",
                Gi: "fl_activity_group",
                jg: "fl_advertiser_id",
                Hi: "fl_ar_dedupe",
                kg: "match_id",
                Ii: "fl_random_number",
                Ji: "tran",
                Ki: "u",
                Vd: "gac_gclid",
                xc: "gac_wbraid",
                lg: "gac_wbraid_multiple_conversions",
                mg: "ga_restrict_domain",
                ng: "ga_temp_client_id",
                yc: "gdpr_applies",
                og: "geo_granularity",
                Gb: "value_callback",
                qb: "value_key",
                zc: "_google_ng",
                Wb: "google_signals",
                pg: "google_tld",
                Wd: "groups",
                qg: "gsa_experiment_id",
                Li: "gtm_up",
                Hb: "iframe_state",
                bd: "ignore_referrer",
                bf: "internal_traffic_results",
                Xb: "is_legacy_converted",
                Ib: "is_legacy_loaded",
                Xd: "is_passthrough",
                dd: "_lps",
                Pa: "language",
                Yd: "legacy_developer_id_string",
                sa: "linker",
                Ac: "accept_incoming",
                sb: "decorate_forms",
                W: "domains",
                Jb: "url_position",
                rg: "method",
                Dk: "name",
                ed: "new_customer",
                sg: "non_interaction",
                Mi: "optimize_id",
                Ni: "page_hostname",
                fd: "page_path",
                Da: "page_referrer",
                Kb: "page_title",
                ug: "passengers",
                vg: "phone_conversion_callback",
                Oi: "phone_conversion_country_code",
                wg: "phone_conversion_css_class",
                Pi: "phone_conversion_ids",
                xg: "phone_conversion_number",
                yg: "phone_conversion_options",
                zg: "_protected_audience_enabled",
                gd: "quantity",
                Zd: "redact_device_info",
                cf: "referral_exclusion_definition",
                Yb: "restricted_data_processing",
                Qi: "retoken",
                Ek: "sample_rate",
                df: "screen_name",
                Lb: "screen_resolution",
                Ri: "search_term",
                Ja: "send_page_view",
                Zb: "send_to",
                hd: "server_container_url",
                jd: "session_duration",
                ae: "session_engaged",
                ef: "session_engaged_time",
                tb: "session_id",
                be: "session_number",
                ff: "_shared_user_id",
                kd: "delivery_postal_code",
                Fk: "temporary_client_id",
                hf: "topmost_url",
                Si: "tracking_id",
                jf: "traffic_type",
                Aa: "transaction_id",
                Mb: "transport_url",
                Ag: "trip_type",
                ac: "update",
                Xa: "url_passthrough",
                kf: "_user_agent_architecture",
                lf: "_user_agent_bitness",
                nf: "_user_agent_full_version_list",
                pf: "_user_agent_mobile",
                qf: "_user_agent_model",
                rf: "_user_agent_platform",
                tf: "_user_agent_platform_version",
                uf: "_user_agent_wow64",
                Ea: "user_data",
                Bg: "user_data_auto_latency",
                Cg: "user_data_auto_meta",
                Dg: "user_data_auto_multi",
                Eg: "user_data_auto_selectors",
                Fg: "user_data_auto_status",
                ld: "user_data_mode",
                ce: "user_data_settings",
                Ba: "user_id",
                cb: "user_properties",
                Ti: "_user_region",
                de: "us_privacy_string",
                na: "value",
                Gg: "wbraid_multiple_conversions",
                bj: "_host_name",
                cj: "_in_page_command",
                dj: "_is_passthrough_cid",
                Nb: "non_personalized_ads",
                je: "_sst_parameters",
                nb: "conversion_label",
                wa: "page_location",
                rb: "global_developer_id_string",
                Bc: "tc_privacy_string"
            }
        },
        Th = {},
        Uh = Object.freeze((Th[Q.g.ka] = 1, Th[Q.g.Te] = 1, Th[Q.g.Gd] = 1, Th[Q.g.kb] = 1, Th[Q.g.da] = 1, Th[Q.g.Va] = 1, Th[Q.g.Wa] = 1, Th[Q.g.ab] = 1, Th[Q.g.rc] = 1, Th[Q.g.Fb] = 1, Th[Q.g.Oa] = 1, Th[Q.g.sc] = 1, Th[Q.g.Vc] = 1, Th[Q.g.la] = 1, Th[Q.g.cg] = 1, Th[Q.g.Zc] = 1, Th[Q.g.Sd] = 1, Th[Q.g.Td] = 1, Th[Q.g.wc] = 1, Th[Q.g.mg] = 1, Th[Q.g.Wb] = 1, Th[Q.g.pg] = 1, Th[Q.g.Wd] = 1, Th[Q.g.bf] = 1, Th[Q.g.Xb] = 1, Th[Q.g.Ib] = 1, Th[Q.g.sa] = 1, Th[Q.g.cf] = 1, Th[Q.g.Yb] = 1, Th[Q.g.Ja] = 1, Th[Q.g.Zb] = 1, Th[Q.g.hd] = 1, Th[Q.g.jd] = 1, Th[Q.g.ef] = 1, Th[Q.g.kd] =
            1, Th[Q.g.Mb] = 1, Th[Q.g.ac] = 1, Th[Q.g.ce] = 1, Th[Q.g.cb] = 1, Th[Q.g.je] = 1, Th));
    Object.freeze([Q.g.wa, Q.g.Da, Q.g.Kb, Q.g.Pa, Q.g.df, Q.g.Ba, Q.g.af, Q.g.wi]);
    var Vh = {},
        Wh = Object.freeze((Vh[Q.g.ei] = 1, Vh[Q.g.fi] = 1, Vh[Q.g.gi] = 1, Vh[Q.g.hi] = 1, Vh[Q.g.ii] = 1, Vh[Q.g.ji] = 1, Vh[Q.g.ki] = 1, Vh[Q.g.li] = 1, Vh[Q.g.mi] = 1, Vh[Q.g.Mc] = 1, Vh)),
        Xh = {},
        Yh = Object.freeze((Xh[Q.g.Sf] = 1, Xh[Q.g.Tf] = 1, Xh[Q.g.mc] = 1, Xh[Q.g.nc] = 1, Xh[Q.g.Uf] = 1, Xh[Q.g.Sb] = 1, Xh[Q.g.oc] = 1, Xh[Q.g.hb] = 1, Xh[Q.g.Db] = 1, Xh[Q.g.ib] = 1, Xh[Q.g.Ia] = 1, Xh[Q.g.qc] = 1, Xh[Q.g.Na] = 1, Xh[Q.g.Vf] = 1, Xh)),
        Zh = Object.freeze([Q.g.ka, Q.g.kb, Q.g.sc, Q.g.wc, Q.g.bd, Q.g.Ja, Q.g.ac]),
        $h = Object.freeze([].concat(pa(Zh))),
        ai = Object.freeze([Q.g.Wa,
            Q.g.Td, Q.g.jd, Q.g.ef, Q.g.Od
        ]),
        bi = Object.freeze([].concat(pa(ai))),
        ci = {},
        di = (ci[Q.g.P] = "1", ci[Q.g.U] = "2", ci[Q.g.O] = "3", ci[Q.g.ya] = "4", ci),
        ei = {},
        fi = Object.freeze((ei[Q.g.ka] = 1, ei[Q.g.Gd] = 1, ei[Q.g.Ca] = 1, ei[Q.g.Ub] = 1, ei[Q.g.Ue] = 1, ei[Q.g.Hd] = 1, ei[Q.g.Id] = 1, ei[Q.g.Jd] = 1, ei[Q.g.da] = 1, ei[Q.g.Kd] = 1, ei[Q.g.Za] = 1, ei[Q.g.ra] = 1, ei[Q.g.Va] = 1, ei[Q.g.Wa] = 1, ei[Q.g.ab] = 1, ei[Q.g.Oa] = 1, ei[Q.g.za] = 1, ei[Q.g.Ld] = 1, ei[Q.g.la] = 1, ei[Q.g.Ai] = 1, ei[Q.g.Qd] = 1, ei[Q.g.Rd] = 1, ei[Q.g.af] = 1, ei[Q.g.wc] = 1, ei[Q.g.Xb] = 1, ei[Q.g.Ib] = 1, ei[Q.g.Pa] =
            1, ei[Q.g.ed] = 1, ei[Q.g.wa] = 1, ei[Q.g.Da] = 1, ei[Q.g.vg] = 1, ei[Q.g.wg] = 1, ei[Q.g.xg] = 1, ei[Q.g.yg] = 1, ei[Q.g.Yb] = 1, ei[Q.g.Ja] = 1, ei[Q.g.Zb] = 1, ei[Q.g.hd] = 1, ei[Q.g.kd] = 1, ei[Q.g.Aa] = 1, ei[Q.g.Mb] = 1, ei[Q.g.ac] = 1, ei[Q.g.Xa] = 1, ei[Q.g.Ea] = 1, ei[Q.g.Ba] = 1, ei[Q.g.na] = 1, ei)),
        gi = {},
        hi = Object.freeze((gi.search = "s", gi.youtube = "y", gi.playstore = "p", gi.shopping = "h", gi.ads = "a", gi.maps = "m", gi));
    Object.freeze(Q.g);
    var ii = {},
        ji = H.google_tag_manager = H.google_tag_manager || {};
    ii.Kg = "47h0";
    ii.ie = Number("0") || 0;
    ii.Ya = "dataLayer";
    ii.fn = "ChEI8MDttAYQhrSKwd3+rrrbARIkAK9oXAmohYBKtFpj0eUwf+JODqyTZCGJ7a8FDXy6gU8K7SoCGgKfwg\x3d\x3d";
    var ki = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        li = {
            __paused: 1,
            __tg: 1
        },
        mi;
    for (mi in ki) ki.hasOwnProperty(mi) && (li[mi] = 1);
    var ni = yb(""),
        oi, pi = !1;
    oi = pi;
    var qi, ri = !1;
    qi = ri;
    var si, ti = !1;
    si = ti;
    ii.Ed = "www.googletagmanager.com";
    var ui = "" + ii.Ed + (oi ? "/gtag/js" : "/gtm.js"),
        vi = null,
        wi = null,
        xi = {},
        yi = {};

    function zi() {
        var a = ji.sequence || 1;
        ji.sequence = a + 1;
        return a
    }
    ii.mk = "true";
    var Ai = "";
    ii.yf = Ai;
    var Bi = new function() {
        this.j = "";
        this.H = this.D = !1;
        this.Qa = this.R = this.Z = this.K = ""
    };

    function Ci() {
        var a = Bi.K.length;
        return Bi.K[a - 1] === "/" ? Bi.K.substring(0, a - 1) : Bi.K
    }

    function Di(a) {
        for (var b = {}, c = la(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    }
    var Ei = new vb,
        Fi = {},
        Gi = {},
        Ji = {
            name: ii.Ya,
            set: function(a, b) {
                l(Kb(a, b), Fi);
                Hi()
            },
            get: function(a) {
                return Ii(a, 2)
            },
            reset: function() {
                Ei = new vb;
                Fi = {};
                Hi()
            }
        };

    function Ii(a, b) {
        return b != 2 ? Ei.get(a) : Ki(a)
    }

    function Ki(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Fi, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return
        }
        return d
    }

    function Li(a, b) {
        Gi.hasOwnProperty(a) || (Ei.set(a, b), l(Kb(a, b), Fi), Hi())
    }

    function Mi() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = Ii(c, 1);
            if (Array.isArray(d) || Wa(d)) d = l(d);
            Gi[c] = d
        }
    }

    function Hi(a) {
        G(Gi, function(b, c) {
            Ei.set(b, c);
            l(Kb(b), Fi);
            l(Kb(b, c), Fi);
            a && delete Gi[b]
        })
    }

    function Ni(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? Ki(a) : Ei.get(a);
        Ua(d) === "array" || Ua(d) === "object" ? c = l(d) : c = d;
        return c
    };
    var Ri = /:[0-9]+$/,
        Si = /^\d+\.fls\.doubleclick\.net$/;

    function Ti(a, b, c, d) {
        for (var e = [], f = la(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var k = la(g.value.split("=")),
                m = k.next().value,
                n = na(k);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }

    function Ui(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = Vi(a.protocol) || Vi(H.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : H.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || H.location.hostname).replace(Ri, "").toLowerCase());
        return Wi(a, b, c, d, e)
    }

    function Wi(a, b, c, d, e) {
        var f, g = Vi(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = Xi(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(Ri, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substring(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || lb("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                (d || []).indexOf(m[m.length -
                    1]) >= 0 && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Ti(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }

    function Vi(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }

    function Xi(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c)
        }
        return b
    }
    var Yi = {},
        Zi = 0;

    function $i(a) {
        var b = Yi[a];
        if (!b) {
            var c = I.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || lb("TAGGING", 1), d = "/" + d);
            var e = c.hostname.replace(Ri, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            Zi < 5 && (Yi[a] = b, Zi++)
        }
        return b
    }

    function aj(a) {
        function b(n) {
            var p = n.split("=")[0];
            return d.indexOf(p) < 0 ? n : p + "=0"
        }

        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
            e = $i(a),
            f = a.split(/[?#]/)[0],
            g = e.search,
            k = e.hash;
        g[0] === "?" && (g = g.substring(1));
        k[0] === "#" && (k = k.substring(1));
        g = c(g);
        k = c(k);
        g !== "" && (g = "?" + g);
        k !== "" && (k = "#" + k);
        var m = "" + f + g + k;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m
    }

    function bj(a) {
        var b = $i(H.location.href),
            c = Ui(b, "host", !1);
        if (c && c.match(Si)) {
            var d = Ui(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0]
            }
        }
    };
    var cj = {
        "https://www.google.com": "/g",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };

    function dj(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return $i("" + c + b).href
        }
    }

    function ej(a, b) {
        if (Bi.D || qi) return dj(a, b)
    }

    function fj() {
        return !!ii.yf && ii.yf.split("@@").join("") !== "SGTM_TOKEN"
    }

    function gj(a) {
        for (var b = la([Q.g.hd, Q.g.Mb]), c = b.next(); !c.done; c = b.next()) {
            var d = T(a, c.value);
            if (d) return d
        }
    }

    function hj(a, b) {
        return Bi.D ? "" + Ci() + (b ? cj[a] || "" : "") : a
    };

    function ij(a, b) {
        if (a === "") return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var jj = [];

    function kj(a) {
        switch (a) {
            case 0:
                return 0;
            case 41:
                return 1;
            case 42:
                return 2;
            case 54:
                return 3;
            case 60:
                return 6;
            case 72:
                return 4;
            case 78:
                return 5;
            case 79:
                return 10;
            case 81:
                return 8;
            case 82:
                return 9;
            case 85:
                return 7
        }
    }

    function U(a) {
        jj[a] = !0;
        var b = kj(a);
        b !== void 0 && (Pb[b] = !0)
    }
    U(29);
    U(25);
    U(26);
    U(27);
    U(28);
    U(43);
    U(65);
    U(51);
    U(62);
    U(32);
    U(15);
    U(88);
    U(14);
    U(92);
    U(87);
    U(55);
    U(73);
    U(7);
    U(44);
    U(4);
    U(69);
    U(83);
    U(59);
    U(58);
    U(71);
    U(96);
    U(93);
    U(72);
    U(5);
    U(78);
    Qb[1] = ij('1', 6E4);
    Qb[3] = ij('10', 1);
    Qb[2] = ij('', 50);
    U(22);

    U(12);
    U(57);
    U(84);


    U(46);
    U(45);
    U(85);
    U(68);
    U(52);
    U(74);
    U(70);
    U(79);

    function W(a) {
        return !!jj[a]
    }

    function oj(a) {
        var b = String(a[Oe.oa] || "").replace(/_/g, "");
        return Hb(b, "cvt") ? "cvt" : b
    }
    var pj = H.location.search.indexOf("?gtm_latency=") >= 0 || H.location.search.indexOf("&gtm_latency=") >= 0;
    var qj = {
            sampleRate: "0.005000",
            ik: "",
            bn: "0.005"
        },
        rj = Math.random(),
        sj;
    if (!(sj = pj)) {
        var tj = qj.sampleRate;
        sj = rj < Number(tj)
    }
    var uj = sj,
        vj = (wc == null ? void 0 : wc.includes("gtm_debug=d")) || pj || !W(46) && uj || W(46) && rj >= 1 - Number(qj.bn);
    var wj = /gtag[.\/]js/,
        xj = /gtm[.\/]js/,
        yj = !1;

    function zj(a) {
        if ((a.scriptContainerId || "").indexOf("GTM-") >= 0) {
            var b;
            a: {
                if (a.scriptSource) {
                    for (var c = Bi.H, d = $i(a.scriptSource), e = c ? d.pathname : "" + d.hostname + d.pathname, f = I.scripts, g = "", k = 0; k < f.length; ++k) {
                        var m = f[k];
                        if (!(m.innerHTML.length === 0 || !c && m.innerHTML.indexOf(a.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || m.innerHTML.indexOf(e) < 0)) {
                            if (m.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                b = String(k);
                                break a
                            }
                            g = String(k)
                        }
                    }
                    if (g) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            var n = b;
            if (n) return yj = !0, n
        }
        var p = [].slice.call(document.scripts);
        return a.scriptElement ? String(p.indexOf(a.scriptElement)) : "-1"
    }

    function Aj(a) {
        if (yj) return "1";
        var b = a.scriptSource;
        if (b) {
            if (wj.test(b)) return "3";
            if (xj.test(b)) return "2"
        }
        return "0"
    }

    function Bj(a, b) {
        var c = Cj();
        c.pending || (c.pending = []);
        sb(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }
    var Fj = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = []
    };

    function Cj() {
        var a = xc("google_tag_data", {}),
            b = a.tidr;
        b || (b = new Fj, a.tidr = b);
        return b
    };
    var Gj = {},
        Hj = !1,
        Sf = {
            ctid: "GTM-NW94V6J",
            canonicalContainerId: "",
            Oj: "GTM-NW94V6J",
            Pj: "GTM-NW94V6J"
        };
    Gj.fe = yb("");

    function Ij() {
        var a = Jj();
        return Hj ? a.map(Kj) : a
    }

    function Lj() {
        var a = Mj();
        return Hj ? a.map(Kj) : a
    }

    function Nj() {
        return Oj(Sf.ctid)
    }

    function Pj() {
        return Oj(Sf.canonicalContainerId || "_" + Sf.ctid)
    }

    function Jj() {
        return Sf.Oj ? Sf.Oj.split("|") : [Sf.ctid]
    }

    function Mj() {
        return Sf.Pj ? Sf.Pj.split("|") : []
    }

    function Qj() {
        var a = Rj(Sj()),
            b = a && a.parent;
        if (b) return Rj(b)
    }

    function Rj(a) {
        var b = Cj();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }

    function Oj(a) {
        return Hj ? Kj(a) : a
    }

    function Kj(a) {
        return "siloed_" + a
    }

    function Tj(a) {
        return Hj ? Uj(a) : a
    }

    function Uj(a) {
        a = String(a);
        return Hb(a, "siloed_") ? a.substring(7) : a
    }

    function Vj() {
        var a = !1;
        if (a) {
            var b = Cj();
            if (b.siloed) {
                for (var c = [], d = Jj().map(Kj), e = Mj().map(Kj), f = {}, g = 0; g < b.siloed.length; f = {
                        Bf: void 0
                    }, g++) f.Bf = b.siloed[g], !Hj && sb(f.Bf.isDestination ? e : d, function(k) {
                    return function(m) {
                        return m === k.Bf.ctid
                    }
                }(f)) ? Hj = !0 : c.push(f.Bf);
                b.siloed = c
            }
        }
    }

    function Wj() {
        var a = Cj();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Ij(), f = Lj(), g = {}, k = 0; k < a.pending.length; g = {
                    Ke: void 0
                }, k++) g.Ke = a.pending[k], sb(g.Ke.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ke.target.ctid
                }
            }(g)) ? d || (b = g.Ke.onLoad, d = !0) : c.push(g.Ke);
            a.pending = c;
            if (b) try {
                b(Pj())
            } catch (m) {}
        }
    }

    function Xj() {
        for (var a = Sf.ctid, b = Ij(), c = Lj(), d = function(n, p) {
                var q = {
                    canonicalContainerId: Sf.canonicalContainerId,
                    scriptContainerId: a,
                    state: 2,
                    containers: b.slice(),
                    destinations: c.slice()
                };
                vc && (q.scriptElement = vc);
                wc && (q.scriptSource = wc);
                W(45) && Qj() === void 0 && (q.htmlLoadOrder = zj(q), q.loadScriptType = Aj(q));
                var r = p ? e.destination : e.container,
                    t = r[n];
                t ? (p && t.state === 0 && P(93), Object.assign(t, q)) : r[n] = q
            }, e = Cj(), f = la(b), g = f.next(); !g.done; g = f.next()) d(g.value, !1);
        for (var k = la(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
        e.canonical[Pj()] = {};
        Wj()
    }

    function Yj(a) {
        return !!Cj().container[a]
    }

    function Zj(a) {
        var b = Cj().destination[a];
        return !!b && !!b.state
    }

    function Sj() {
        return {
            ctid: Nj(),
            isDestination: Gj.fe
        }
    }

    function ak(a) {
        var b = Cj();
        (b.siloed = b.siloed || []).push(a)
    }

    function bk() {
        var a = Cj().container,
            b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1
    }

    function ck() {
        var a = {};
        G(Cj().destination, function(b, c) {
            c.state === 0 && (a[Uj(b)] = c)
        });
        return a
    }

    function dk(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }
    var ek = "/td?id=" + Sf.ctid,
        fk = ["v", "t", "pid", "dl", "tdp"],
        gk = ["mcc"],
        hk = {},
        ik = {};

    function jk(a, b, c) {
        ik[a] = b;
        (c === void 0 || c) && kk(a)
    }

    function kk(a, b) {
        if (hk[a] === void 0 || (b === void 0 ? 0 : b)) hk[a] = !0
    }

    function lk(a) {
        a = a === void 0 ? !1 : a;
        var b = Object.keys(hk).filter(function(c) {
            return hk[c] === !0 && ik[c] !== void 0 && (a || !gk.includes(c))
        }).map(function(c) {
            var d = ik[c];
            typeof d === "function" && (d = d());
            return d ? "&" + c + "=" + d : ""
        }).join("");
        return "" + hj("https://www.googletagmanager.com") + ek + ("" + b + "&z=0")
    }

    function mk() {
        Object.keys(hk).forEach(function(a) {
            fk.indexOf(a) < 0 && (hk[a] = !1)
        })
    }

    function nk(a) {
        a = a === void 0 ? !1 : a;
        if (vj) {
            var b = lk(a);
            a ? Rc(b) : Gc(b);
            mk()
        }
    }

    function ok() {
        Object.keys(hk).filter(function(a) {
            return hk[a] && !fk.includes(a)
        }).length > 0 && nk(!0)
    }
    var pk = tb();

    function qk() {
        pk = tb()
    }

    function rk() {
        jk("v", "3");
        jk("t", "t");
        jk("pid", function() {
            return String(pk)
        });
        Hc(H, "pagehide", ok);
        H.setInterval(qk, 864E5)
    }

    function sk(a) {
        lb("HEALTH", a)
    };
    var tk;
    try {
        tk = JSON.parse(jb("eyIwIjoiUEsiLCIxIjoiUEstSVMiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20ucGsiLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"))
    } catch (a) {
        P(123), sk(2), tk = {}
    }

    function uk() {
        return tk["0"] || ""
    }

    function vk() {
        return tk["1"] || ""
    }

    function wk() {
        var a = !1;
        return a
    }

    function xk() {
        return tk["6"] !== !1
    }

    function yk() {
        var a = "";
        return a
    }

    function zk() {
        var a = !1;
        return a
    }

    function Ak() {
        var a = "";
        return a
    }
    var Bk = new function(a, b) {
        this.j = a;
        this.defaultValue = b === void 0 ? !1 : b
    }(1933);

    function Ck() {
        var a = xc("google_tag_data", {});
        return a.ics = a.ics || new Dk
    }
    var Dk = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.j = []
    };
    Dk.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        lb("TAGGING", 19);
        b == null ? lb("TAGGING", 18) : Ek(this, a, b === "granted", c, d, e, f, g)
    };
    Dk.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) Ek(this, a[d], void 0, void 0, "", "", b, c)
    };
    var Ek = function(a, b, c, d, e, f, g, k) {
        var m = a.entries,
            n = m[b] || {},
            p = n.region,
            q = d && z(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0),
                t = {
                    region: q,
                    declare_region: n.declare_region,
                    implicit: n.implicit,
                    default: c !== void 0 ? c : n.default,
                    declare: n.declare,
                    update: n.update,
                    quiet: r
                };
            if (e !== "" || n.default !== !1) m[b] = t;
            r && H.setTimeout(function() {
                m[b] === t && t.quiet && (lb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, k),
                    a.notifyListeners())
            }, g)
        }
    };
    h = Dk.prototype;
    h.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            k = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = la(d), n = m.next(); !n.done; n = m.next()) Fk(this, n.value)
        } else if (b !== void 0 && k !== b)
            for (var p = la(d), q = p.next(); !q.done; q = p.next()) Fk(this, q.value)
    };
    h.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    h.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            k = g.declare_region,
            m = c && z(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: b === "granted",
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if (d !== "" || g.declare !== !1) f[a] = n
        }
    };
    h.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    };
    h.getConsentState = function(a, b) {
        var c = this.entries,
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (Rb(8)) {
            var f = b.containerScopedDefaults[a];
            if (f === 3) return 1;
            if (f === 2) return 2
        }
        e = d.default;
        if (e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var g = b.delegatedConsentTypes[a],
                k = c[g] || {};
            e = k.update;
            if (e !== void 0) return e ? 1 : 2;
            if (Rb(8)) {
                var m = b.containerScopedDefaults[g];
                if (m === 3) return 1;
                if (m === 2) return 2
            }
            e = k.default;
            if (e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ?
            1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    h.addListener = function(a, b) {
        this.j.push({
            consentTypes: a,
            xl: b
        })
    };
    var Fk = function(a, b) {
        for (var c = 0; c < a.j.length; ++c) {
            var d = a.j[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Qj = !0)
        }
    };
    Dk.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.j.length; ++c) {
            var d = this.j[c];
            if (d.Qj) {
                d.Qj = !1;
                try {
                    d.xl({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var Gk = function(a) {
        Gk[" "](a);
        return a
    };
    Gk[" "] = function() {};
    var Ik = function() {
        var a = Hk,
            b = "oh";
        if (a.oh && a.hasOwnProperty(b)) return a.oh;
        var c = new a;
        return a.oh = c
    };
    var Hk = function() {
        var a = {};
        this.j = function() {
            var b = Bk.j,
                c = Bk.defaultValue;
            return a[b] != null ? a[b] : c
        };
        this.D = function() {
            a[Bk.j] = !0
        }
    };
    var Jk = !1,
        Kk = !1,
        Lk = {},
        Mk = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (Lk.ad_storage = 1, Lk.analytics_storage = 1, Lk.ad_user_data = 1, Lk.ad_personalization = 1, Lk)
        },
        Nk = function(a) {
            var b = Ck();
            b.accessedAny = !0;
            return (z(a) ? [a] : a).every(function(c) {
                switch (b.getConsentState(c, Mk)) {
                    case 1:
                    case 3:
                        return !0;
                    case 2:
                    case 4:
                        return !1;
                    default:
                        return !0
                }
            })
        },
        Ok = function(a) {
            var b = Ck();
            b.accessedAny = !0;
            return b.getConsentState(a, Mk)
        },
        Pk = function(a) {
            for (var b = {}, c = la(a), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                b[e] = Mk.corePlatformServices[e] !== !1
            }
            return b
        },
        Qk = function(a) {
            var b = Ck();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Rk = function() {
            if (!Ik().j()) return !1;
            var a = Ck();
            a.accessedAny = !0;
            return a.active
        },
        Sk = function(a, b) {
            Ck().addListener(a, b)
        },
        Tk = function(a, b) {
            Ck().notifyListeners(a, b)
        },
        Uk = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Qk(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Sk(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Vk = function(a, b) {
            function c() {
                for (var k = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    Nk(n) && !f[n] && k.push(n)
                }
                return k
            }

            function d(k) {
                for (var m = 0; m < k.length; m++) f[k[m]] = !0
            }
            var e = z(b) ? [b] : b,
                f = {},
                g = c();
            g.length !== e.length && (d(g), Sk(e, function(k) {
                function m(q) {
                    q.length !== 0 && (d(q), k.consentTypes = q, a(k))
                }
                var n = c();
                if (n.length !== 0) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length ? m(n) : H.setTimeout(function() {
                        m(c())
                    }, 500)
                }
            }))
        };
    var Wk = [Q.g.P, Q.g.U, Q.g.O, Q.g.ya],
        Xk, Yk;

    function Zk(a) {
        for (var b = a[Q.g.Cb], c = Array.isArray(b) ? b : [b], d = {
                Ae: 0
            }; d.Ae < c.length; d = {
                Ae: d.Ae
            }, ++d.Ae) G(a, function(e) {
            return function(f, g) {
                if (f !== Q.g.Cb) {
                    var k = c[e.Ae],
                        m = uk(),
                        n = vk();
                    Kk = !0;
                    Jk && lb("TAGGING", 20);
                    Ck().declare(f, g, k, m, n)
                }
            }
        }(d))
    }

    function $k(a) {
        !Yk && Xk && vj && (jk("crc", "1"), nk());
        Yk = !0;
        var b = a[Q.g.Cb];
        b && P(40);
        var c = a[Q.g.Qe];
        c && P(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
                Be: 0
            }; e.Be < d.length; e = {
                Be: e.Be
            }, ++e.Be) G(a, function(f) {
            return function(g, k) {
                if (g !== Q.g.Cb && g !== Q.g.Qe) {
                    var m = d[f.Be],
                        n = Number(c),
                        p = uk(),
                        q = vk();
                    n = n === void 0 ? 0 : n;
                    Jk = !0;
                    Kk && lb("TAGGING", 20);
                    Ck().default(g, k, m, p, q, n, Mk)
                }
            }
        }(e))
    }

    function al(a) {
        if (W(82)) {
            var b = a[Q.g.Cb];
            if (b) {
                var c = Array.isArray(b) ? b : [b];
                if (!c.includes(vk()) && !c.includes(uk())) return
            }
            G(a, function(d, e) {
                switch (d) {
                    case "ad_storage":
                    case "analytics_storage":
                    case "ad_user_data":
                    case "ad_personalization":
                        break;
                    default:
                        return
                }
                Mk.containerScopedDefaults[d] = e === "granted" ? 3 : 2
            })
        }
    }

    function bl(a, b) {
        Xk = !0;
        G(a, function(c, d) {
            Jk = !0;
            Kk && lb("TAGGING", 20);
            Ck().update(c, d, Mk)
        });
        Tk(b.eventId, b.priorityId)
    }

    function cl(a) {
        a.hasOwnProperty("all") && (Mk.selectedAllCorePlatformServices = !0, G(hi, function(b) {
            Mk.corePlatformServices[b] = a.all === "granted";
            Mk.usedCorePlatformServices = !0
        }));
        G(a, function(b, c) {
            b !== "all" && (Mk.corePlatformServices[b] = c === "granted", Mk.usedCorePlatformServices = !0)
        })
    }

    function X(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return Nk(b)
        })
    }

    function dl(a, b) {
        Sk(a, b)
    }

    function el(a, b) {
        Vk(a, b)
    }

    function fl(a, b) {
        Uk(a, b)
    }

    function gl() {
        var a = [Q.g.P, Q.g.ya, Q.g.O];
        Ck().waitForUpdate(a, 500, Mk)
    }

    function hl(a) {
        for (var b = la(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            Ck().clearTimeout(d, void 0, Mk)
        }
        Tk()
    }
    var il = function() {
        if (ji.pscdl === void 0) {
            var a = function(b) {
                ji.pscdl = b
            };
            try {
                "cookieDeprecationLabel" in tc ? (a("pending"), tc.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
            } catch (b) {
                a("error")
            }
        }
    };
    var jl = /[A-Z]+/,
        kl = /\s/;

    function ll(a, b) {
        if (z(a)) {
            a = Ab(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (jl.test(d)) {
                    var e = a.substring(c + 1),
                        f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var k = g(f[1]);
                            k.length === 2 && (f[1] = k[0], f.push(k[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || kl.test(f[m]) && (d !== "AW" || m !== 1)) return
                    }
                    return {
                        id: a,
                        prefix: d,
                        ia: d + "-" + f[0],
                        ma: f
                    }
                }
            }
        }
    }

    function ml(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = ll(a[d], b);
            e && (c[e.id] = e)
        }
        nl(c);
        var f = [];
        G(c, function(g, k) {
            f.push(k)
        });
        return f
    }

    function nl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.ma[ol[2]] && b.push(d.ia)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    }
    var pl = {},
        ol = (pl[0] = 0, pl[1] = 0, pl[2] = 1, pl[3] = 0, pl[4] = 1, pl[5] = 2, pl[6] = 0, pl[7] = 0, pl[8] = 0, pl);
    var ql = Number('') || 500,
        rl = {},
        sl = {},
        tl = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        ul = {},
        vl = Object.freeze((ul[Q.g.Ja] = !0, ul)),
        wl = I.location.search.indexOf("?gtm_diagnostics=") >= 0 || I.location.search.indexOf("&gtm_diagnostics=") >= 0,
        xl = void 0;

    function yl(a, b) {
        if (b.length && vj) {
            var c;
            (c = rl)[a] != null || (c[a] = []);
            sl[a] != null || (sl[a] = []);
            var d = b.filter(function(e) {
                return !sl[a].includes(e)
            });
            rl[a].push.apply(rl[a], pa(d));
            sl[a].push.apply(sl[a], pa(d));
            !xl && d.length > 0 && (kk("tdc", !0), xl = H.setTimeout(function() {
                nk();
                rl = {};
                xl = void 0
            }, ql))
        }
    }

    function zl(a, b, c) {
        if (vj && a === "config") {
            var d, e = (d = ll(b)) == null ? void 0 : d.ma;
            if (!(e && e.length > 1)) {
                var f, g = xc("google_tag_data", {});
                g.td || (g.td = {});
                f = g.td;
                var k = l(c.K);
                l(c.j, k);
                var m = [],
                    n;
                for (n in f)
                    if (f.hasOwnProperty(n)) {
                        var p = Al(f[n], k);
                        p.length && (wl && console.log(p), m.push(n))
                    }
                m.length && (yl(b, m), lb("TAGGING", tl[I.readyState] || 14));
                f[b] = k
            }
        }
    }

    function Bl(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Al(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function(r, t) {
                var u;
                Ua(t) === "object" ? u = t[r] : Ua(t) === "array" && (u = t[r]);
                return u === void 0 ? vl[r] : u
            },
            f = Bl(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var k = (d ? d + "." : "") + g,
                    m = e(g, a),
                    n = e(g, b),
                    p = Ua(m) === "object" || Ua(m) === "array",
                    q = Ua(n) === "object" || Ua(n) === "array";
                if (p && q) Al(m, n, c, k);
                else if (p || q || m !== n) c[k] = !0
            }
        return Object.keys(c)
    }

    function Cl() {
        jk("tdc", function() {
            xl && (H.clearTimeout(xl), xl = void 0);
            var a = [],
                b;
            for (b in rl) rl.hasOwnProperty(b) && a.push(b + "*" + rl[b].join("."));
            return a.length ? a.join("!") : void 0
        }, !1)
    };
    var Dl = function(a, b, c, d, e, f, g, k, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.j = c;
            this.R = d;
            this.H = e;
            this.K = f;
            this.D = g;
            this.eventMetadata = k;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        El = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.j);
                    c.push(a.R);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.D);
                    break;
                case 2:
                    c.push(a.j);
                    break;
                case 1:
                    c.push(a.R);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.D);
                    break;
                case 4:
                    c.push(a.j), c.push(a.R), c.push(a.H), c.push(a.K)
            }
            return c
        },
        T = function(a, b, c, d) {
            for (var e = la(El(a, d === void 0 ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b]
            }
            return c
        },
        Fl = function(a) {
            for (var b = {}, c = El(a, 4), d = la(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = la(f), k = g.next(); !k.done; k = g.next()) b[k.value] = 1;
            return Object.keys(b)
        },
        Gl = function(a, b, c) {
            function d(n) {
                Wa(n) && G(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = El(a, c === void 0 ? 3 : c);
            g.reverse();
            for (var k = la(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
            return f ? e : void 0
        },
        Hl = function(a) {
            for (var b = [Q.g.Rc,
                    Q.g.Nc, Q.g.Oc, Q.g.Pc, Q.g.Qc, Q.g.Sc, Q.g.Tc
                ], c = El(a, 3), d = la(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, k = !1, m = la(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    f[p] !== void 0 && (g[p] = f[p], k = !0)
                }
                var q = k ? g : void 0;
                if (q) return q
            }
            return {}
        },
        Il = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.D = {};
            this.R = {};
            this.j = {};
            this.H = {};
            this.Z = {};
            this.K = {};
            this.eventMetadata = {};
            this.isGtmEvent = !1;
            this.onSuccess = function() {};
            this.onFailure = function() {}
        },
        Jl = function(a, b) {
            a.D = b;
            return a
        },
        Kl = function(a,
            b) {
            a.R = b;
            return a
        },
        Ll = function(a, b) {
            a.j = b;
            return a
        },
        Ml = function(a, b) {
            a.H = b;
            return a
        },
        Nl = function(a, b) {
            a.Z = b;
            return a
        },
        Ol = function(a, b) {
            a.K = b;
            return a
        },
        Pl = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        Ql = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Rl = function(a, b) {
            a.onFailure = b;
            return a
        },
        Sl = function(a, b) {
            a.isGtmEvent = b;
            return a
        },
        Tl = function(a) {
            return new Dl(a.eventId, a.priorityId, a.D, a.R, a.j, a.H, a.K, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
        };
    var Ul = {
            hk: Number("5"),
            Un: Number("")
        },
        Vl = [];

    function Wl(a) {
        Vl.push(a)
    }
    var Xl = "?id=" + Sf.ctid,
        Yl = void 0,
        Zl = {},
        $l = void 0,
        am = new function() {
            var a = 5;
            Ul.hk > 0 && (a = Ul.hk);
            this.D = a;
            this.j = 0;
            this.H = []
        },
        bm = 1E3;

    function cm(a, b) {
        var c = Yl;
        if (c === void 0)
            if (b) c = zi();
            else return "";
        for (var d = [hj("https://www.googletagmanager.com"), "/a", Xl], e = la(Vl), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, k = g({
                    eventId: c,
                    Lc: !!a
                }), m = la(k), n = m.next(); !n.done; n = m.next()) {
                var p = la(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }

    function dm() {
        $l && (H.clearTimeout($l), $l = void 0);
        if (Yl !== void 0 && em) {
            var a;
            (a = Zl[Yl]) || (a = am.j < am.D ? !1 : Cb() - am.H[am.j % am.D] < 1E3);
            if (a || bm-- <= 0) P(1), Zl[Yl] = !0;
            else {
                var b = am.j++ % am.D;
                am.H[b] = Cb();
                var c = cm(!0);
                Gc(c);
                em = !1
            }
        }
    }
    var em = !1;

    function fm(a) {
        Zl[a] || (a !== Yl && (dm(), Yl = a), em = !0, $l || ($l = H.setTimeout(dm, 500)), cm().length >= 2022 && dm())
    }
    var gm = tb();

    function hm() {
        gm = tb()
    }

    function im() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", String(gm)]
        ]
    }
    var jm = {};

    function km(a, b, c) {
        uj && a !== void 0 && (jm[a] = jm[a] || [], jm[a].push(c + b), fm(a))
    }

    function lm(a) {
        var b = a.eventId,
            c = a.Lc,
            d = [],
            e = jm[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete jm[b];
        return d
    };

    function mm(a, b) {
        var c = ll(Oj(a), !0);
        c && nm.register(c, b)
    }

    function om(a, b, c, d) {
        var e = ll(c, d.isGtmEvent);
        e && nm.push("event", [b, a], e, d)
    }

    function pm(a, b, c, d) {
        var e = ll(c, d.isGtmEvent);
        e && nm.push("get", [a, b], e, d)
    }

    function qm(a) {
        var b = ll(Oj(a), !0),
            c;
        b ? c = rm(nm, b).j : c = {};
        return c
    }

    function sm(a, b) {
        var c = ll(Oj(a), !0);
        if (c) {
            var d = nm,
                e = l(b, null);
            l(rm(d, c).j, e);
            rm(d, c).j = e
        }
    }
    var tm = function() {
            this.R = {};
            this.j = {};
            this.D = {};
            this.Z = null;
            this.K = {};
            this.H = !1;
            this.status = 1
        },
        um = function(a, b, c, d) {
            this.D = Cb();
            this.j = b;
            this.args = c;
            this.messageContext = d;
            this.type = a
        },
        vm = function() {
            this.destinations = {};
            this.D = {};
            this.j = []
        },
        rm = function(a, b) {
            var c = b.ia;
            return a.destinations[c] = a.destinations[c] || new tm
        },
        wm = function(a, b, c, d) {
            if (d.j) {
                var e = rm(a, d.j),
                    f = e.Z;
                if (f) {
                    var g = l(c, null),
                        k = l(e.R[d.j.id], null),
                        m = l(e.K, null),
                        n = l(e.j, null),
                        p = l(a.D, null),
                        q = {};
                    if (uj) try {
                        q = l(Fi)
                    } catch (v) {
                        P(72)
                    }
                    var r =
                        d.j.prefix,
                        t = function(v) {
                            km(d.messageContext.eventId, r, v)
                        },
                        u = Tl(Sl(Rl(Ql(Pl(Nl(Ml(Ol(Ll(Kl(Jl(new Il(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        km(d.messageContext.eventId, r, "1"), zl(d.type, d.j.id, u),
                            f(d.j.id, b, d.D, u)
                    } catch (v) {
                        km(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    vm.prototype.register = function(a, b, c) {
        var d = rm(this, a);
        d.status !== 3 && (d.Z = b, d.status = 3, c && (l(d.j, c), d.j = c), this.flush())
    };
    vm.prototype.push = function(a, b, c, d) {
        c !== void 0 && (rm(this, c).status === 1 && (rm(this, c).status = 2, this.push("require", [{}], c, {})), rm(this, c).H && (d.deferrable = !1));
        this.j.push(new um(a, c, b, d));
        d.deferrable || this.flush()
    };
    vm.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.j.length; e = {
                Cc: void 0,
                eh: void 0
            }) {
            var f = this.j[0],
                g = f.j;
            if (f.messageContext.deferrable) !g || rm(this, g).H ? (f.messageContext.deferrable = !1, this.j.push(f)) : c.push(f), this.j.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (rm(this, g).status !== 3 && !a) {
                            this.j.push.apply(this.j, c);
                            return
                        }
                        break;
                    case "set":
                        G(f.args[0], function(r, t) {
                            l(Kb(r, t), b.D)
                        });
                        break;
                    case "config":
                        var k = rm(this, g);
                        e.Cc = {};
                        G(f.args[0], function(r) {
                            return function(t, u) {
                                l(Kb(t, u),
                                    r.Cc)
                            }
                        }(e));
                        var m = !!e.Cc[Q.g.ac];
                        delete e.Cc[Q.g.ac];
                        var n = g.ia === g.id;
                        m || (n ? k.K = {} : k.R[g.id] = {});
                        k.H && m || wm(this, Q.g.ba, e.Cc, f);
                        k.H = !0;
                        n ? l(e.Cc, k.K) : (l(e.Cc, k.R[g.id]), P(70));
                        d = !0;
                        break;
                    case "event":
                        e.eh = {};
                        G(f.args[0], function(r) {
                            return function(t, u) {
                                l(Kb(t, u), r.eh)
                            }
                        }(e));
                        wm(this, f.args[1], e.eh, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[Q.g.qb] = f.args[0], p[Q.g.Gb] = f.args[1], p);
                        wm(this, Q.g.Ta, q, f)
                }
                this.j.shift();
                xm(this, f)
            }
        }
        this.j.push.apply(this.j, c);
        d && this.flush()
    };
    var xm = function(a, b) {
            if (b.type !== "require")
                if (b.j)
                    for (var c = rm(a, b.j).D[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.D)
                                for (var g = f.D[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        nm = new vm;
    var ym = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        zm = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Am = function(a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1)
        },
        Bm = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        };
    var Cm, Dm;
    a: {
        for (var Em = ["CLOSURE_FLAGS"], Fm = Aa, Gm = 0; Gm < Em.length; Gm++)
            if (Fm = Fm[Em[Gm]], Fm == null) {
                Dm = null;
                break a
            }
        Dm = Fm
    }
    var Hm = Dm && Dm[610401301];
    Cm = Hm != null ? Hm : !1;

    function Im() {
        var a = Aa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Jm, Km = Aa.navigator;
    Jm = Km ? Km.userAgentData || null : null;

    function Lm(a) {
        return Cm ? Jm ? Jm.brands.some(function(b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1
        }) : !1 : !1
    }

    function Mm(a) {
        return Im().indexOf(a) != -1
    };

    function Nm() {
        return Cm ? !!Jm && Jm.brands.length > 0 : !1
    }

    function Om() {
        return Nm() ? !1 : Mm("Opera")
    }

    function Pm() {
        return Mm("Firefox") || Mm("FxiOS")
    }

    function Qm() {
        return Nm() ? Lm("Chromium") : (Mm("Chrome") || Mm("CriOS")) && !(Nm() ? 0 : Mm("Edge")) || Mm("Silk")
    };

    function Rm() {
        return Cm ? !!Jm && !!Jm.platform : !1
    }

    function Sm() {
        return Mm("iPhone") && !Mm("iPod") && !Mm("iPad")
    }

    function Tm() {
        Sm() || Mm("iPad") || Mm("iPod")
    };
    Om();
    Nm() || Mm("Trident") || Mm("MSIE");
    Mm("Edge");
    !Mm("Gecko") || Im().toLowerCase().indexOf("webkit") != -1 && !Mm("Edge") || Mm("Trident") || Mm("MSIE") || Mm("Edge");
    Im().toLowerCase().indexOf("webkit") != -1 && !Mm("Edge") && Mm("Mobile");
    Rm() || Mm("Macintosh");
    Rm() || Mm("Windows");
    (Rm() ? Jm.platform === "Linux" : Mm("Linux")) || Rm() || Mm("CrOS");
    Rm() || Mm("Android");
    Sm();
    Mm("iPad");
    Mm("iPod");
    Tm();
    Im().toLowerCase().indexOf("kaios");
    var Um = function(a, b, c, d) {
            for (var e = b, f = c.length;
                (e = a.indexOf(c, e)) >= 0 && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (g == 38 || g == 63) {
                    var k = a.charCodeAt(e + f);
                    if (!k || k == 61 || k == 38 || k == 35) return e
                }
                e += f + 1
            }
            return -1
        },
        Vm = /#|$/,
        Wm = function(a, b) {
            var c = a.search(Vm),
                d = Um(a, 0, b, c);
            if (d < 0) return null;
            var e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
        },
        Xm = /[?&]($|#)/,
        Ym = function(a, b, c) {
            for (var d, e = a.search(Vm), f = 0, g, k = [];
                (g = Um(a, f, b, e)) >= 0;) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(Xm, "$1");
            var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                r < 0 && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                t < 0 || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Zm = function(a) {
            try {
                var b;
                if (b = !!a && a.location.href != null) a: {
                    try {
                        Gk(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        $m = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        an = function(a) {
            if (H.top == H) return 0;
            if (a === void 0 ? 0 : a) {
                var b = H.location.ancestorOrigins;
                if (b) return b[b.length - 1] == H.location.origin ? 1 : 2
            }
            return Zm(H.top) ? 1 : 2
        },
        bn = function(a) {
            a = a === void 0 ? document : a;
            return a.createElement("img")
        };

    function cn(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = bn(a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = nc(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                Bm(e, "load", f);
                Bm(e, "error", f)
            };
            Am(e, "load", f);
            Am(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var en = function(a) {
            var b;
            b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            $m(a, function(d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            dn(c, b)
        },
        dn = function(a, b) {
            var c = window,
                d;
            b = b === void 0 ? !1 : b;
            d = d === void 0 ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else cn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
        };
    var fn = function() {
        this.R = this.R;
        this.D = this.D
    };
    fn.prototype.R = !1;
    fn.prototype.dispose = function() {
        this.R || (this.R = !0, this.Qa())
    };
    fn.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    fn.prototype.addOnDisposeCallback = function(a, b) {
        this.R ? b !== void 0 ? a.call(b) : a() : (this.D || (this.D = []), this.D.push(b !== void 0 ? Ea(a, b) : a))
    };
    fn.prototype.Qa = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };
    var gn = function(a) {
            a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
            a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
            return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
        },
        hn = function(a, b) {
            b = b === void 0 ? {} : b;
            fn.call(this);
            this.H = a;
            this.j = null;
            this.Z = {};
            this.md = 0;
            var c;
            this.fc = (c = b.Um) != null ? c : 500;
            var d;
            this.bc = (d = b.In) != null ? d : !1;
            this.K =
                null
        };
    xa(hn, fn);
    hn.prototype.Qa = function() {
        this.Z = {};
        this.K && (Bm(this.H, "message", this.K), delete this.K);
        delete this.Z;
        delete this.H;
        delete this.j;
        fn.prototype.Qa.call(this)
    };
    var kn = function(a) {
        return typeof a.H.__tcfapi === "function" || jn(a) != null
    };
    hn.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.bc
            },
            d = zm(function() {
                return a(c)
            }),
            e = 0;
        this.fc !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.fc));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = gn(c), c.internalBlockOnErrors = b.bc, k && c.internalErrorState === 0 || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            ln(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    hn.prototype.removeEventListener = function(a) {
        a && a.listenerId && ln(this, "removeEventListener", null, a.listenerId)
    };
    var nn = function(a, b, c) {
            var d;
            d = d === void 0 ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (f !== void 0) {
                        e = f[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (g === 0) return !1;
            var k = c;
            c === 2 ? (k = 0, g === 2 && (k = 1)) : c === 3 && (k = 1, g === 1 && (k = 0));
            var m;
            if (k === 0)
                if (a.purpose && a.vendor) {
                    var n = mn(a.vendor.consents, d === void 0 ? "755" : d);
                    m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && mn(a.purpose.consents, b)
                } else m = !0;
            else m = k === 1 ? a.purpose && a.vendor ? mn(a.purpose.legitimateInterests,
                b) && mn(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return m
        },
        mn = function(a, b) {
            return !(!a || !a[b])
        },
        ln = function(a, b, c, d) {
            c || (c = function() {});
            if (typeof a.H.__tcfapi === "function") {
                var e = a.H.__tcfapi;
                e(b, 2, c, d)
            } else if (jn(a)) {
                on(a);
                var f = ++a.md;
                a.Z[f] = c;
                if (a.j) {
                    var g = {};
                    a.j.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        jn = function(a) {
            if (a.j) return a.j;
            var b;
            a: {
                for (var c = a.H, d = 0; d < 50; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.j = b;
            return a.j
        },
        on = function(a) {
            a.K || (a.K = function(b) {
                try {
                    var c;
                    c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.Z[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Am(a.H, "message", a.K))
        },
        pn = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = gn(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
                (en({
                    e: String(a.internalErrorState)
                }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        };
    var qn = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function rn() {
        var a = ji.tcf || {};
        return ji.tcf = a
    }
    var sn = function() {
            return new hn(H, {
                Um: -1
            })
        },
        yn = function() {
            var a = rn(),
                b = sn();
            kn(b) && !tn() && !un() && P(124);
            if (!a.active && kn(b)) {
                tn() && (a.active = !0, a.kc = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Ck().active = !0, a.tcString = "tcunavailable");
                gl();
                try {
                    b.addEventListener(function(c) {
                        if (c.internalErrorState !== 0) vn(a), hl([Q.g.P, Q.g.ya, Q.g.O]), Ck().active = !0;
                        else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, un() && (a.active = !0), !wn(c) || tn() || un()) {
                            a.tcfPolicyVersion =
                                c.tcfPolicyVersion;
                            var d;
                            if (c.gdprApplies === !1) {
                                var e = {},
                                    f;
                                for (f in qn) qn.hasOwnProperty(f) && (e[f] = !0);
                                d = e;
                                b.removeEventListener(c)
                            } else if (wn(c)) {
                                var g = {},
                                    k;
                                for (k in qn)
                                    if (qn.hasOwnProperty(k))
                                        if (k === "1") {
                                            var m, n = c,
                                                p = {
                                                    Bl: !0
                                                };
                                            p = p === void 0 ? {} : p;
                                            m = pn(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.Ij : (p.Ij || n.gdprApplies !== void 0 || p.Bl) && (p.Ij || typeof n.tcString === "string" && n.tcString.length) ? nn(n, "1", 0) : !0 : !1;
                                            g["1"] = m
                                        } else g[k] = nn(c, k, qn[k]);
                                d = g
                            }
                            if (d) {
                                a.tcString = c.tcString || "tcempty";
                                a.kc =
                                    d;
                                var q = {},
                                    r = (q[Q.g.P] = a.kc["1"] ? "granted" : "denied", q);
                                a.gdprApplies !== !0 ? (hl([Q.g.P, Q.g.ya, Q.g.O]), Ck().active = !0) : (r[Q.g.ya] = a.kc["3"] && a.kc["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[Q.g.O] = a.kc["1"] && a.kc["7"] ? "granted" : "denied" : hl([Q.g.O]), bl(r, {
                                    eventId: 0
                                }, {
                                    gdprApplies: a ? a.gdprApplies : void 0,
                                    tcString: xn() || ""
                                }))
                            }
                        } else hl([Q.g.P, Q.g.ya, Q.g.O])
                    })
                } catch (c) {
                    vn(a), hl([Q.g.P, Q.g.ya, Q.g.O]), Ck().active = !0
                }
            }
        };

    function vn(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function wn(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }
    var tn = function() {
        return H.gtag_enable_tcf_support === !0
    };

    function un() {
        return rn().enableAdvertiserConsentMode === !0
    }
    var xn = function() {
            var a = rn();
            if (a.active) return a.tcString
        },
        zn = function() {
            var a = rn();
            if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
        },
        An = function(a) {
            if (!qn.hasOwnProperty(String(a))) return !0;
            var b = rn();
            return b.active && b.kc ? !!b.kc[String(a)] : !0
        };
    var Bn = [Q.g.P, Q.g.U, Q.g.O, Q.g.ya],
        Cn = {},
        Dn = (Cn[Q.g.P] = 1, Cn[Q.g.U] = 2, Cn);

    function En(a) {
        if (a === void 0) return 0;
        switch (T(a, Q.g.ka)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var Fn = function(a) {
            if (vk() === "US-CO" && tc.globalPrivacyControl === !0) return !1;
            var b = En(a);
            if (b === 3) return !1;
            switch (Ok(Q.g.ya)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                    return !1;
                case 4:
                    return b === 2;
                case 0:
                    return !0;
                default:
                    return !1
            }
        },
        Gn = function() {
            return Rk() || !Nk(Q.g.P) || !Nk(Q.g.U)
        },
        Hn = function() {
            var a = {},
                b;
            for (b in Dn) Dn.hasOwnProperty(b) && (a[Dn[b]] = Ok(b));
            return "G1" + Le(a[1] || 0) + Le(a[2] || 0)
        },
        In = {},
        Jn = (In[Q.g.P] = 0, In[Q.g.U] = 1, In[Q.g.O] = 2, In[Q.g.ya] = 3, In);

    function On(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var Pn = function(a) {
            for (var b = "1", c = 0; c < Bn.length; c++) {
                var d = b,
                    e, f = Bn[c],
                    g = Mk.delegatedConsentTypes[f];
                e = g === void 0 ? 0 : Jn.hasOwnProperty(g) ? 12 | Jn[g] : 8;
                var k = Ck();
                k.accessedAny = !0;
                var m = k.entries[f] || {};
                e = e << 2 | On(m.implicit);
                b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [On(m.declare) << 4 | On(m.default) << 2 | On(m.update)])
            }
            var n = b,
                p = (vk() === "US-CO" && tc.globalPrivacyControl === !0 ? 1 : 0) << 3,
                q = (Rk() ? 1 : 0) << 2,
                r = En(a);
            return b = n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [p | q | r]
        },
        Qn = function() {
            if (!Nk(Q.g.O)) return "-";
            for (var a = Object.keys(hi), b = Pk(a), c = "", d = la(a), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                b[f] && (c += hi[f])
            }
            W(52) && (Mk.usedCorePlatformServices ? Mk.selectedAllCorePlatformServices : 1) && (c += "o");
            return c || "-"
        },
        Rn = function() {
            return xk() || (tn() || un()) && zn() === "1" ? "1" : "0"
        },
        Sn = function() {
            return (xk() ? !0 : !(!tn() && !un()) && zn() === "1") || !Nk(Q.g.O)
        },
        Tn = function() {
            var a = "0",
                b = "0",
                c;
            var d =
                rn();
            c = d.active ? d.cmpId : void 0;
            typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
            var e = "0",
                f;
            var g = rn();
            f = g.active ? g.tcfPolicyVersion : void 0;
            typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var k = 0;
            xk() && (k |= 1);
            zn() === "1" && (k |= 2);
            tn() && (k |= 4);
            var m;
            var n = rn();
            m = n.enableAdvertiserConsentMode !== void 0 ?
                n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            m === "1" && (k |= 8);
            Ck().waitPeriodTimedOut && (k |= 16);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k]
        },
        Un = function() {
            return vk() === "US-CO"
        };

    function Vn() {
        var a = !1;
        return a
    };
    var Wn = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };

    function Xn(a) {
        a = a === void 0 ? {} : a;
        var b = Sf.ctid.split("-")[0].toUpperCase(),
            c = {};
        c.ctid = Sf.ctid;
        c.Dm = ii.ie;
        c.Hm = ii.Kg;
        c.bm = Gj.fe ? 2 : 1;
        c.Om = a.Xj;
        c.qe = Sf.canonicalContainerId;
        c.qe !== a.xa && (c.xa = a.xa);
        var d = Qj();
        c.qm = d ? d.canonicalContainerId : void 0;
        oi ? (c.Kf = Wn[b], c.Kf || (c.Kf = 0)) : c.Kf = si ? 13 : 10;
        Bi.H ? (c.Hf = 0, c.bl = 2) : qi ? c.Hf = 1 : Vn() ? c.Hf = 2 : c.Hf = 3;
        var e = {};
        e[6] = Hj;
        c.jl = e;
        var f = a.Af,
            g;
        var k = c.Kf,
            m = c.Hf;
        k === void 0 ? g = "" : (m || (m = 0), g = "" + Ne(1, 1) + Ke(k << 2 | m));
        var n = c.bl,
            p = "4" + g + (n ? "" + Ne(2, 1) + Ke(n) : ""),
            q, r = c.Hm;
        q = r &&
            Me.test(r) ? "" + Ne(3, 2) + r : "";
        var t, u = c.Dm;
        t = u ? "" + Ne(4, 1) + Ke(u) : "";
        var v;
        var w = c.ctid;
        if (w && f) {
            var x = w.split("-"),
                y = x[0].toUpperCase();
            if (y !== "GTM" && y !== "OPT") v = "";
            else {
                var B = x[1];
                v = "" + Ne(5, 3) + Ke(1 + B.length) + (c.bm || 0) + B
            }
        } else v = "";
        var A = c.Om,
            C = c.qe,
            E = c.xa,
            D = c.Sn,
            F = p + q + t + v + (A ? "" + Ne(6, 1) + Ke(A) : "") + (C ? "" + Ne(7, 3) + Ke(C.length) + C : "") + (E ? "" + Ne(8, 3) + Ke(E.length) + E : "") + (D ? "" + Ne(9, 3) + Ke(D.length) + D : ""),
            M;
        var L = c.jl;
        L = L === void 0 ? {} : L;
        for (var S = [], V = la(Object.keys(L)), ca = V.next(); !ca.done; ca = V.next()) {
            var ba = ca.value;
            S[Number(ba)] = L[ba]
        }
        if (S.length) {
            var R = Ne(10, 3),
                oa;
            if (S.length === 0) oa = Ke(0);
            else {
                for (var ma = [], ia = 0, ya = !1, Ja = 0; Ja < S.length; Ja++) {
                    ya = !0;
                    var Da = Ja % 6;
                    S[Ja] && (ia |= 1 << Da);
                    Da === 5 && (ma.push(Ke(ia)), ia = 0, ya = !1)
                }
                ya && ma.push(Ke(ia));
                oa = ma.join("")
            }
            var Ga = oa;
            M = "" + R + Ke(Ga.length) + Ga
        } else M = "";
        var Ya = c.qm;
        return F + M + (Ya ? "" + Ne(11, 3) + Ke(Ya.length) + Ya : "")
    };
    var Yn = {
            rj: "service_worker_endpoint",
            Lg: "shared_user_id",
            Mg: "shared_user_id_requested",
            ke: "shared_user_id_source"
        },
        Zn;

    function $n(a) {
        if (!Zn) {
            Zn = {};
            for (var b = la(Object.keys(Yn)), c = b.next(); !c.done; c = b.next()) Zn[Yn[c.value]] = !0
        }
        return !!Zn[a]
    }

    function ao(a, b) {
        b = b === void 0 ? !1 : b;
        if ($n(a)) {
            var c, d, e = (d = (c = xc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a]) return e[a];
            if (b) {
                var f = void 0,
                    g = 1,
                    k = {},
                    m = {
                        set: function(n) {
                            f = n;
                            m.notify()
                        },
                        get: function() {
                            return f
                        },
                        subscribe: function(n) {
                            k[String(g)] = n;
                            return g++
                        },
                        unsubscribe: function(n) {
                            var p = String(n);
                            return k.hasOwnProperty(p) ? (delete k[p], !0) : !1
                        },
                        notify: function() {
                            for (var n = la(Object.keys(k)), p = n.next(); !p.done; p = n.next()) {
                                var q = p.value;
                                try {
                                    k[q](a, f)
                                } catch (r) {}
                            }
                        }
                    };
                return e[a] = m
            }
        }
    }

    function bo(a, b) {
        var c = ao(a, !0);
        c && c.set(b)
    }

    function co(a) {
        var b;
        return (b = ao(a)) == null ? void 0 : b.get()
    }

    function eo(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = ao(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }

    function fo(a, b) {
        var c = ao(a);
        return c ? c.unsubscribe(b) : !1
    };

    function go(a) {
        return a.origin !== "null"
    };

    function ho(a, b, c, d) {
        var e;
        if (io(d)) {
            for (var f = [], g = String(b || jo()).split(";"), k = 0; k < g.length; k++) {
                var m = g[k].split("="),
                    n = m[0].replace(/^\s*|\s*$/g, "");
                if (n && n === a) {
                    var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    p && c && (p = decodeURIComponent(p));
                    f.push(p)
                }
            }
            e = f
        } else e = [];
        return e
    }

    function ko(a, b, c, d, e) {
        if (io(e)) {
            var f = lo(a, d, e);
            if (f.length === 1) return f[0].id;
            if (f.length !== 0) {
                f = mo(f, function(g) {
                    return g.ql
                }, b);
                if (f.length === 1) return f[0].id;
                f = mo(f, function(g) {
                    return g.vm
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    }

    function no(a, b, c, d) {
        var e = jo(),
            f = window;
        go(f) && (f.document.cookie = a);
        var g = jo();
        return e !== g || c !== void 0 && ho(b, g, !1, d).indexOf(c) >= 0
    }

    function oo(a, b, c, d) {
        function e(w, x, y) {
            if (y == null) return delete k[x], w;
            k[x] = y;
            return w + "; " + x + "=" + y
        }

        function f(w, x) {
            if (x == null) return w;
            k[x] = !0;
            return w + "; " + x
        }
        if (!io(c.Ab)) return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = po(b), g = a + "=" + b);
        var k = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.hm);
        g = e(g, "samesite", c.Im);
        c.Jm && (g = f(g,
            "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = qo(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = p[t] !== "none" ? p[t] : void 0,
                    v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, k)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!ro(u, c.path) && no(v, a, b, c.Ab)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, k);
        return ro(n, c.path) ? 1 : no(g, a, b, c.Ab) ? 0 : 1
    }

    function so(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return oo(a, b, c)
    }

    function mo(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : f === void 0 || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return d.length > 0 ? d : e
    }

    function lo(a, b, c) {
        for (var d = [], e = ho(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || !k || b.indexOf(k) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        id: g.join("."),
                        ql: Number(n[0]) || 1,
                        vm: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }

    function po(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var to = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        uo = /(^|\.)doubleclick\.net$/i;

    function ro(a, b) {
        return a !== void 0 && (uo.test(window.document.location.hostname) || b === "/" && to.test(a))
    }

    function vo(a) {
        if (!a) return 1;
        a = a.indexOf(".") === 0 ? a.substring(1) : a;
        return a.split(".").length
    }

    function wo(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function xo(a, b) {
        var c = "" + vo(a),
            d = wo(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var jo = function() {
            return go(window) ? window.document.cookie : ""
        },
        io = function(a) {
            return a && Ik().j() ? (Array.isArray(a) ? a : [a]).every(function(b) {
                return Qk(b) && Nk(b)
            }) : !0
        },
        qo = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            uo.test(e) || to.test(e) || a.push("none");
            return a
        };

    function yo(a) {
        var b = Math.round(Math.random() * 2147483647),
            c;
        if (a) {
            var d = 1,
                e, f, g;
            if (a)
                for (d = 0, f = a.length - 1; f >= 0; f--) g = a.charCodeAt(f), d = (d << 6 & 268435455) + g + (g << 14), e = d & 266338304, d = e !== 0 ? d ^ e >> 21 : d;
            c = String(b ^ d & 2147483647)
        } else c = String(b);
        return c
    }

    function zo(a) {
        return [yo(a), Math.round(Cb() / 1E3)].join(".")
    }

    function Ao(a, b, c, d, e) {
        var f = vo(b);
        return ko(a, f, wo(c), d, e)
    }

    function Bo(a, b, c, d) {
        return [b, xo(c, d), a].join(".")
    };

    function Co(a, b, c, d) {
        var e, f = Number(a.zb != null ? a.zb : void 0);
        f !== 0 && (e = new Date((b || Cb()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Ab: d
        }
    };
    var Do;

    function Eo() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }

        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = Fo,
            d = Go,
            e = Ho();
        if (!e.init) {
            Hc(I, "mousedown", a);
            Hc(I, "keyup", a);
            Hc(I, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            };
            e.init = !0
        }
    }

    function Io(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        Ho().decorators.push(f)
    }

    function Jo(a, b, c) {
        for (var d = Ho().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
                k;
            if (k = !c || g.forms) a: {
                var m = g.domains,
                    n = a,
                    p = !!g.sameHost;
                if (m && (p || n !== I.location.hostname))
                    for (var q = 0; q < m.length; q++)
                        if (m[q] instanceof RegExp) {
                            if (m[q].test(n)) {
                                k = !0;
                                break a
                            }
                        } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && Fb(e, g.callback())
            }
        }
        return e
    }

    function Ho() {
        var a = xc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Ko = /(.*?)\*(.*?)\*(.*)/,
        Lo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Mo = /^(?:www\.|m\.|amp\.)+/,
        No = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Oo(a) {
        var b = No.exec(a);
        if (b) return {
            Ch: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function Po(a, b) {
        var c = [tc.userAgent, (new Date).getTimezoneOffset(), tc.userLanguage || tc.language, Math.floor(Cb() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = Do)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Do = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Do[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Qo() {
        return function(a) {
            var b = $i(H.location.href),
                c = b.search.replace("?", ""),
                d = Ti(c, "_gl", !1, !0) || "";
            a.query = Ro(d) || {};
            var e = Ui(b, "fragment"),
                f;
            var g = -1;
            if (Hb(e, "_gl=")) g = 4;
            else {
                var k = e.indexOf("&_gl=");
                k > 0 && (g = k + 3 + 2)
            }
            if (g < 0) f = void 0;
            else {
                var m = e.indexOf("&", g);
                f = m < 0 ? e.substring(g) : e.substring(g, m)
            }
            a.fragment = Ro(f || "") || {}
        }
    }

    function So(a) {
        var b = Qo(),
            c = Ho();
        c.data || (c.data = {
            query: {},
            fragment: {}
        }, b(c.data));
        var d = {},
            e = c.data;
        e && (Fb(d, e.query), a && Fb(d, e.fragment));
        return d
    }
    var Ro = function(a) {
        try {
            var b = To(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = jb(d[e + 1]);
                    c[f] = g
                }
                lb("TAGGING", 6);
                return c
            }
        } catch (k) {
            lb("TAGGING", 8)
        }
    };

    function To(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = Ko.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && g[1] === "1") {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Po(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                lb("TAGGING", 7)
            }
        }
    }

    function Uo(a, b, c, d, e) {
        function f(p) {
            var q = p,
                r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                t = q;
            if (r) {
                var u = r[2],
                    v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && w !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = Oo(c);
        if (!g) return "";
        var k = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : k = "?" + f(k.substring(1));
        return "" + g.Ch + k + m
    }

    function Vo(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (v.push(w), v.push(ib(String(x))))
                    }
                var y = v.join("*");
                u = ["1", Po(y), y].join("*");
                d ? (Rb(3) || Rb(1) || !p) && Wo("_gl", u, a, p, q) : Xo("_gl", u, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = Jo(b, 1, d),
            f = Jo(b, 2, d),
            g = Jo(b, 4, d),
            k = Jo(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        Rb(1) && c(g, !0, !0);
        for (var m in k) k.hasOwnProperty(m) &&
            Yo(m, k[m], a)
    }

    function Yo(a, b, c) {
        c.tagName.toLowerCase() === "a" ? Xo(a, b, c) : c.tagName.toLowerCase() === "form" && Wo(a, b, c)
    }

    function Xo(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !Rb(4) || d)) {
                var k = H.location.href,
                    m = Oo(c.href),
                    n = Oo(k);
                g = !(m && n && m.Ch === n.Ch && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = Uo(a, b, c.href, d, e);
            jc.test(p) && (c.href = p)
        }
    }

    function Wo(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var g = Uo(a, b, c.action, d, e);
                    jc.test(g) && (c.action = g)
                }
            } else {
                for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
                    var p = k[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = I.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Fo(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || Vo(e, e.hostname)
            }
        } catch (g) {}
    }

    function Go(a) {
        try {
            if (a.action) {
                var b = Ui($i(a.action), "host");
                Vo(a, b)
            }
        } catch (c) {}
    }

    function Zo(a, b, c, d) {
        Eo();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        Io(a, b, e, d, !1);
        e === 2 && lb("TAGGING", 23);
        d && lb("TAGGING", 24)
    }

    function $o(a, b) {
        Eo();
        Io(a, [Wi(H.location, "host", !0)], b, !0, !0)
    }

    function ap() {
        var a = I.location.hostname,
            b = Lo.exec(I.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(Mo, ""),
            m = e.replace(Mo, "");
        return k === m || Ib(k, "." + m)
    }

    function bp(a, b) {
        return a === !1 ? !1 : a || b || ap()
    };
    var cp = ["1"],
        dp = {},
        ep = {};

    function fp(a, b) {
        b = b === void 0 ? !0 : b;
        var c = gp(a.prefix);
        if (!dp[c])
            if (hp(c, a.path, a.domain)) {
                var d = ep[gp(a.prefix)];
                ip(a, d ? d.id : void 0, d ? d.wh : void 0)
            } else {
                var e = bj("auiddc");
                if (e) lb("TAGGING", 17), dp[c] = e;
                else if (b) {
                    var f = gp(a.prefix),
                        g = zo();
                    jp(f, g, a);
                    hp(c, a.path, a.domain)
                }
            }
    }

    function ip(a, b, c) {
        var d = gp(a.prefix),
            e = dp[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(Cb() / 1E3)));
                    jp(d, k, a, g * 1E3)
                }
            }
        }
    }

    function jp(a, b, c, d) {
        var e = Bo(b, "1", c.domain, c.path),
            f = Co(c, d);
        f.Ab = kp();
        so(a, e, f)
    }

    function hp(a, b, c) {
        var d = Ao(a, b, c, cp, kp());
        if (!d) return !1;
        lp(a, d);
        return !0
    }

    function lp(a, b) {
        var c = b.split(".");
        c.length === 5 ? (dp[a] = c.slice(0, 2).join("."), ep[a] = {
            id: c.slice(2, 4).join("."),
            wh: Number(c[4]) || 0
        }) : c.length === 3 ? ep[a] = {
            id: c.slice(0, 2).join("."),
            wh: Number(c[2]) || 0
        } : dp[a] = b
    }

    function gp(a) {
        return (a || "_gcl") + "_au"
    }

    function mp(a) {
        function b() {
            Nk(c) && a()
        }
        var c = kp();
        Uk(function() {
            b();
            Nk(c) || Vk(b, c)
        }, c)
    }

    function np(a) {
        var b = So(!0),
            c = gp(a.prefix);
        mp(function() {
            var d = b[c];
            if (d) {
                lp(c, d);
                var e = Number(dp[c].split(".")[1]) * 1E3;
                if (e) {
                    lb("TAGGING", 16);
                    var f = Co(a, e);
                    f.Ab = kp();
                    var g = Bo(d, "1", a.domain, a.path);
                    so(c, g, f)
                }
            }
        })
    }

    function op(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = Ao(a, e.path, e.domain, cp, kp());
            k && (g[a] = k);
            return g
        };
        mp(function() {
            Zo(f, b, c, d)
        })
    }

    function kp() {
        return ["ad_storage", "ad_user_data"]
    };

    function pp(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Qh: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    }

    function qp(a, b) {
        var c = pp(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].Qh] || (d[c[e].Qh] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    aa: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].Qh].push(g)
            }
        }
        return d
    };
    var rp = {},
        sp = (rp.k = {
            Ma: /^[\w-]+$/
        }, rp.b = {
            Ma: /^[\w-]+$/,
            Jh: !0
        }, rp.i = {
            Ma: /^[1-9]\d*$/
        }, rp);
    var tp = {},
        wp = (tp[5] = {
            jk: {
                2: up
            },
            Tg: ["k", "i", "b"]
        }, tp[4] = {
            jk: {
                2: up,
                GCL: vp
            },
            Tg: ["k", "i", "b"]
        }, tp);

    function xp(a) {
        var b = wp[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.jk[c];
                if (d) return d(a, 5)
            }
        }
    }

    function up(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {},
                e = wp[b];
            if (e) {
                for (var f = e.Tg, g = la(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                    var m = k.value,
                        n = m[0];
                    if (f.indexOf(n) !== -1) try {
                        var p = decodeURIComponent(m.substring(1)),
                            q = sp[n];
                        q && (q.Jh ? (d[n] = d[n] || [], d[n].push(p)) : d[n] = p)
                    } catch (r) {}
                }
                return d
            }
        }
    }

    function yp(a, b) {
        var c = wp[5];
        if (c) {
            for (var d = [], e = la(c.Tg), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = sp[g];
                if (k) {
                    var m = a[g];
                    if (m !== void 0)
                        if (k.Jh && Array.isArray(m))
                            for (var n = la(m), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
                        else d.push(encodeURIComponent("" + g + m))
                }
            }
            return ["2", b || "1", d.join("$")].join(".")
        }
    }

    function vp(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return e.k = d, e.i = c, e.b = b, e
    };
    var zp = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]]
    ]);

    function Ap(a) {
        if (wp[5]) {
            for (var b = [], c = ho(a, void 0, void 0, zp.get(5)), d = la(c), e = d.next(); !e.done; e = d.next()) {
                var f = xp(e.value);
                f && (Bp(f), b.push(f))
            }
            return b
        }
    }

    function Cp(a, b, c, d) {
        c = c || {};
        var e = xo(c.domain, c.path),
            f = yp(b, e);
        if (f) {
            var g = Co(c, d, void 0, zp.get(5));
            so(a, f, g)
        }
    }

    function Dp(a, b) {
        var c = b.Ma;
        return typeof c === "function" ? c(a) : c.test(a)
    }

    function Bp(a) {
        for (var b = la(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                te: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.te = sp[e];
            d.te ? d.te.Jh ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(k) {
                    return Dp(k, g.te)
                }
            }(d)) : void 0 : typeof f === "string" && Dp(f, d.te) || (a[e] = void 0) : a[e] = void 0
        }
    };
    var Ep = /^\w+$/,
        Fp = /^[\w-]+$/,
        Gp = {},
        Hp = (Gp.aw = "_aw", Gp.dc = "_dc", Gp.gf = "_gf", Gp.gp = "_gp", Gp.gs = "_gs", Gp.ha = "_ha", Gp.ag = "_ag", Gp.gb = "_gb", Gp);

    function Ip() {
        return ["ad_storage", "ad_user_data"]
    }

    function Jp(a) {
        return !Ik().j() || Nk(a)
    }

    function Kp(a, b) {
        function c() {
            var d = Jp(b);
            d && a();
            return d
        }
        Uk(function() {
            c() || Vk(c, b)
        }, b)
    }

    function Lp(a) {
        return Mp(a).map(function(b) {
            return b.aa
        })
    }

    function Np(a) {
        return Op(a).filter(function(b) {
            return b.aa
        }).map(function(b) {
            return b.aa
        })
    }

    function Op(a) {
        var b = Pp(a.prefix),
            c = Qp("gb", b),
            d = Qp("ag", b);
        if (!d || !c) return [];
        var e = function(k) {
                return function(m) {
                    m.type = k;
                    return m
                }
            },
            f = Mp(c).map(e("gb")),
            g = (Rb(6) ? Rp(d) : []).map(e("ag"));
        return f.concat(g).sort(function(k, m) {
            return m.timestamp - k.timestamp
        })
    }

    function Sp(a, b, c, d, e) {
        var f = sb(a, function(g) {
            return g.aa === c
        });
        f ? (f.timestamp = Math.max(f.timestamp, d), f.labels = Tp(f.labels || [], e || [])) : a.push({
            version: b,
            aa: c,
            timestamp: d,
            labels: e
        })
    }

    function Rp(a) {
        for (var b = Ap(a) || [], c = [], d = la(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                k = Up(f);
            k && Sp(c, "2", g.k, k, g.b || [])
        }
        return c.sort(function(m, n) {
            return n.timestamp - m.timestamp
        })
    }

    function Mp(a) {
        for (var b = [], c = ho(a, I.cookie, void 0, Ip()), d = la(c), e = d.next(); !e.done; e = d.next()) {
            var f = Vp(e.value);
            if (f != null) {
                var g = f;
                Sp(b, g.version, g.aa, g.timestamp, g.labels)
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Wp(b)
    }

    function Tp(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function Pp(a) {
        return a && typeof a === "string" && a.match(Ep) ? a : "_gcl"
    }

    function Xp(a, b) {
        var c = Rb(6),
            d = $i(a),
            e = Ui(d, "query", !1, void 0, "gclid"),
            f = Ui(d, "query", !1, void 0, "gclsrc"),
            g = Ui(d, "query", !1, void 0, "wbraid");
        Rb(7) && (g = Ob(g));
        var k;
        c && (k = Ui(d, "query", !1, void 0, "gbraid"));
        var m = Ui(d, "query", !1, void 0, "gad_source"),
            n = Ui(d, "query", !1, void 0, "dclid");
        if (b && (!e || !f || !g || c && !k)) {
            var p = d.hash.replace("#", "");
            e = e || Ti(p, "gclid", !1);
            f = f || Ti(p, "gclsrc", !1);
            g = g || Ti(p, "wbraid", !1);
            c && (k = k || Ti(p, "gbraid", !1));
            m = m || Ti(p, "gad_source", !1)
        }
        return Yp(e, f, n, g, k, m)
    }

    function Zp() {
        return Xp(H.location.href, !0)
    }

    function Yp(a, b, c, d, e, f) {
        var g = {},
            k = function(m, n) {
                g[n] || (g[n] = []);
                g[n].push(m)
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(Fp)) switch (b) {
            case void 0:
                k(a, "aw");
                break;
            case "aw.ds":
                k(a, "aw");
                k(a, "dc");
                break;
            case "ds":
                k(a, "dc");
                break;
            case "3p.ds":
                k(a, "dc");
                break;
            case "gf":
                k(a, "gf");
                break;
            case "ha":
                k(a, "ha")
        }
        c && k(c, "dc");
        d !== void 0 && Fp.test(d) && (g.wbraid = d, k(d, "gb"));
        Rb(6) && e !== void 0 && Fp.test(e) && (g.gbraid = e, k(e, "ag"));
        f !== void 0 && Fp.test(f) && (g.gad_source = f, k(f, "gs"));
        return g
    }

    function $p(a) {
        var b = Zp();
        if (Rb(5)) {
            for (var c = !0, d = la(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                if (b[e.value] !== void 0) {
                    c = !1;
                    break
                }
            c && (b = Xp(H.document.referrer, !1))
        }
        aq(b, !1, a)
    }

    function aq(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = Pp(c.prefix),
            g = d || Cb(),
            k = Math.round(g / 1E3),
            m = Ip(),
            n = !1,
            p = !1,
            q = function() {
                if (Jp(m)) {
                    var r = Co(c, g, !0);
                    r.Ab = m;
                    for (var t = function(F, M) {
                            var L = Qp(F, f);
                            L && (so(L, M, r), F !== "gb" && (n = !0))
                        }, u = function(F) {
                            var M = ["GCL", k, F];
                            e.length > 0 && M.push(e.join("."));
                            return M.join(".")
                        }, v = la(["aw", "dc", "gf", "ha", "gp"]), w = v.next(); !w.done; w = v.next()) {
                        var x = w.value;
                        a[x] && t(x, u(a[x][0]))
                    }
                    if (!n && a.gb) {
                        var y = a.gb[0],
                            B = Qp("gb", f);
                        !b && Mp(B).some(function(F) {
                            return F.aa === y && F.labels &&
                                F.labels.length > 0
                        }) || t("gb", u(y))
                    }
                }
                if (!p && Rb(6) && a.gbraid && Jp("ad_storage") && (p = !0, !n)) {
                    var A = a.gbraid,
                        C = Qp("ag", f);
                    if (b || !(Rb(6) ? Rp(C) : []).some(function(F) {
                            return F.aa === A && F.labels && F.labels.length > 0
                        })) {
                        var E = {},
                            D = (E.k = A, E.i = "" + k, E.b = e, E);
                        Cp(C, D, c, g)
                    }
                }
                bq(a, f, g, c)
            };
        Uk(function() {
            q();
            Jp(m) || Vk(q, m)
        }, m)
    }

    function bq(a, b, c, d) {
        if (a.gad_source !== void 0 && Jp("ad_storage")) {
            var e = Qp("gs", b);
            if (e) {
                var f = Math.round((Cb() - (Tc() || 0)) / 1E3),
                    g = {},
                    k = (g.k = a.gad_source, g.i = "" + f, g);
                Cp(e, k, d, c)
            }
        }
    }

    function cq(a, b) {
        var c = So(!0);
        Kp(function() {
            for (var d = Pp(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (Hp[f] !== void 0) {
                    var g = Qp(f, d),
                        k = c[g];
                    if (k) {
                        var m = Math.min(dq(k), Cb()),
                            n;
                        b: {
                            for (var p = m, q = ho(g, I.cookie, void 0, Ip()), r = 0; r < q.length; ++r)
                                if (dq(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var t = Co(b, m, !0);
                            t.Ab = Ip();
                            so(g, k, t)
                        }
                    }
                }
            }
            aq(Yp(c.gclid, c.gclsrc), !1, b)
        }, Ip())
    }

    function eq(a) {
        var b = [];
        Rb(6) && b.push("ag");
        if (b.length !== 0) {
            var c = So(!0),
                d = Pp(a.prefix);
            Kp(function() {
                for (var e = 0; e < b.length; ++e) {
                    var f = Qp(b[e], d);
                    if (f) {
                        var g = c[f];
                        if (g) {
                            var k = xp(g);
                            if (k) {
                                var m = Up(k);
                                m || (m = Cb());
                                var n;
                                a: {
                                    for (var p = m, q = Ap(f), r = 0; r < q.length; ++r)
                                        if (Up(q[r]) > p) {
                                            n = !0;
                                            break a
                                        }
                                    n = !1
                                }
                                if (n) break;
                                k.i = "" + Math.round(m / 1E3);
                                Cp(f, k, a, m)
                            }
                        }
                    }
                }
            }, ["ad_storage"])
        }
    }

    function Qp(a, b) {
        var c = Hp[a];
        if (c !== void 0) return b + c
    }

    function dq(a) {
        return fq(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function Up(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }

    function Vp(a) {
        var b = fq(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            aa: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }

    function fq(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !Fp.test(a[2]) ? [] : a
    }

    function gq(a, b, c, d, e) {
        if (Array.isArray(b) && go(H)) {
            var f = Pp(e),
                g = function() {
                    for (var k = {}, m = 0; m < a.length; ++m) {
                        var n = Qp(a[m], f);
                        if (n) {
                            var p = ho(n, I.cookie, void 0, Ip());
                            p.length && (k[n] = p.sort()[p.length - 1])
                        }
                    }
                    return k
                };
            Kp(function() {
                Zo(g, b, c, d)
            }, Ip())
        }
    }

    function hq(a, b, c, d) {
        if (Array.isArray(a) && go(H)) {
            var e = [];
            Rb(6) && e.push("ag");
            if (e.length !== 0) {
                var f = Pp(d),
                    g = function() {
                        for (var k = {}, m = 0; m < e.length; ++m) {
                            var n = Qp(e[m], f);
                            if (!n) return {};
                            var p = Ap(n);
                            if (p.length) {
                                var q = p.sort(function(r, t) {
                                    return Up(t) - Up(r)
                                })[0];
                                k[n] = yp(q)
                            }
                        }
                        return k
                    };
                Kp(function() {
                    Zo(g, a, b, c)
                }, ["ad_storage"])
            }
        }
    }

    function Wp(a) {
        return a.filter(function(b) {
            return Fp.test(b.aa)
        })
    }

    function iq(a, b) {
        if (go(H)) {
            for (var c = Pp(b.prefix), d = {}, e = 0; e < a.length; e++) Hp[a[e]] && (d[a[e]] = Hp[a[e]]);
            Kp(function() {
                G(d, function(f, g) {
                    var k = ho(c + g, I.cookie, void 0, Ip());
                    k.sort(function(t, u) {
                        return dq(u) - dq(t)
                    });
                    if (k.length) {
                        var m = k[0],
                            n = dq(m),
                            p = fq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = fq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        aq(q, !0, b, n, p)
                    }
                })
            }, Ip())
        }
    }

    function jq(a) {
        var b = [],
            c = [];
        Rb(6) && (b.push("ag"), c.push("gbraid"));
        b.length !== 0 && Kp(function() {
            for (var d = Pp(a.prefix), e = 0; e < b.length; ++e) {
                var f = Qp(b[e], d);
                if (!f) break;
                var g = Ap(f);
                if (g.length) {
                    var k = g.sort(function(q, r) {
                            return Up(r) - Up(q)
                        })[0],
                        m = Up(k),
                        n = k.b,
                        p = {};
                    p[c[e]] = k.k;
                    aq(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }

    function kq(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }

    function lq(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Rk()) {
            var c = Zp();
            if (kq(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.wbraid);
                Rb(6) && b(d, "gbraid", c.gbraid);
                $o(function() {
                    return d
                }, 3);
                $o(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    }

    function mq(a) {
        if (!Rb(1)) return null;
        var b = So(!0).gad_source;
        if (b != null) return H.location.hash = "", b;
        if (Rb(2)) {
            var c = $i(H.location.href);
            b = Ui(c, "query", !1, void 0, "gad_source");
            if (b != null) return b;
            var d = Zp();
            if (kq(d, a)) return "0"
        }
        return null
    }

    function nq(a) {
        var b = mq(a);
        b != null && $o(function() {
            var c = {};
            return c.gad_source = b, c
        }, 4)
    }

    function oq(a, b, c) {
        var d = [];
        if (b.length === 0) return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                k = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[k] || d.push(g)) : a.push(1);
            e[k] = !0
        }
        return d
    }

    function pq(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Jp(Ip())) return e;
        var f = Mp(a),
            g = oq(e, f, b);
        if (g.length && !d)
            for (var k = la(g), m = k.next(); !m.done; m = k.next()) {
                var n = m.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1E3), n.aa].concat(n.labels || [], [b]).join("."),
                    r = Co(c, p, !0);
                r.Ab = Ip();
                so(a, q, r)
            }
        return e
    }

    function qq(a, b) {
        var c = [];
        b = b || {};
        var d = Op(b),
            e = oq(c, d, a);
        if (e.length)
            for (var f = la(e), g = f.next(); !g.done; g = f.next()) {
                var k = g.value,
                    m = Pp(b.prefix),
                    n = Qp(k.type, m);
                if (!n) break;
                var p = k,
                    q = p.version,
                    r = p.aa,
                    t = p.labels,
                    u = p.timestamp,
                    v = Math.round(u / 1E3);
                if (k.type === "ag") {
                    var w = {},
                        x = (w.k = r, w.i = "" + v, w.b = (t || []).concat([a]), w);
                    Cp(n, x, b, u)
                } else if (k.type === "gb") {
                    var y = [q, v, r].concat(t || [], [a]).join("."),
                        B = Co(b, u, !0);
                    B.Ab = Ip();
                    so(n, y, B)
                }
            }
        return c
    }

    function rq(a, b) {
        var c = Pp(b),
            d = Qp(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? Rb(6) ? Rp(d) : [] : Mp(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function sq(a) {
        for (var b = 0, c = la(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b
    }

    function tq(a, b) {
        var c = Math.max(rq("aw", a), sq(Jp(Ip()) ? qp() : {})),
            d = Math.max(rq("gb", a), sq(Jp(Ip()) ? qp("_gac_gb", !0) : {}));
        Rb(6) && b && (d = Math.max(d, rq("ag", a)));
        return d > c
    };
    var Hq, Iq = !1;

    function Jq() {
        Iq = !0;
        Hq = Hq || {}
    }

    function Kq(a) {
        Iq || Jq();
        return Hq[a]
    }
    var Lq = function(a, b, c) {
        this.eventName = b;
        this.m = c;
        this.o = {};
        this.isAborted = !1;
        this.target = a;
        this.metadata = l(c.eventMetadata || {}, {})
    };
    Lq.prototype.copyToHitData = function(a, b, c) {
        var d = T(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && z(d) && W(58)) try {
            d = c(d)
        } catch (e) {}
        d !== void 0 && (this.o[a] = d)
    };
    var Mq = function(a, b, c) {
        var d = Kq(a.target.ia);
        return d && d[b] !== void 0 ? d[b] : c
    };

    function Nq() {
        ji.dedupe_gclid || (ji.dedupe_gclid = zo());
        return ji.dedupe_gclid
    };
    var Oq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Pq = /^www.googleadservices.com$/;

    function Qq(a) {
        a || (a = Rq());
        return a.Ym ? !1 : a.Ml || a.Nl || a.Pl || a.Ol || a.mh || a.hh || a.Al || a.El ? !0 : !1
    }

    function Rq() {
        var a = {},
            b = So(!0);
        a.Ym = !!b._up;
        var c = Zp();
        a.Ml = c.aw !== void 0;
        a.Nl = c.dc !== void 0;
        a.Pl = c.wbraid !== void 0;
        a.Ol = c.gbraid !== void 0;
        var d = $i(H.location.href),
            e = Ui(d, "query", !1, void 0, "gad");
        a.mh = e !== void 0;
        if (!a.mh) {
            var f = d.hash.replace("#", ""),
                g = Ti(f, "gad", !1);
            a.mh = g !== void 0
        }
        a.hh = Ui(d, "query", !1, void 0, "gad_source");
        if (a.hh === void 0) {
            var k = d.hash.replace("#", ""),
                m = Ti(k, "gad_source", !1);
            a.hh = m
        }
        var n = I.referrer ? Ui($i(I.referrer), "host") : "";
        a.El = Oq.test(n);
        a.Al = Pq.test(n);
        return a
    };
    var Sq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Tq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Uq = /^\d+\.fls\.doubleclick\.net$/,
        Vq = /;gac=([^;?]+)/,
        Wq = /;gacgb=([^;?]+)/;

    function Xq(a, b) {
        if (Uq.test(I.location.host)) {
            var c = I.location.href.match(b);
            return c && c.length === 2 && c[1].match(Sq) ? decodeURIComponent(c[1]) : ""
        }
        for (var d = [], e = la(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++) k.push(m[n].aa);
            d.push(g + ":" + k.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }

    function Yq(a, b, c) {
        for (var d = Jp(Ip()) ? qp("_gac_gb", !0) : {}, e = [], f = !1, g = la(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
            var m = k.value,
                n = pq("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            zl: f ? e.join(";") : "",
            yl: Xq(d, Wq)
        }
    }

    function Zq(a) {
        var b = I.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(Tq) ? b[1] : void 0
    }

    function $q(a) {
        var b = {
                ih: void 0,
                jh: void 0
            },
            c, d;
        Uq.test(I.location.host) && (c = Zq("gclgs"), d = Zq("gclst"));
        if (c && d) b.ih = c, b.jh = d;
        else {
            var e = Cb(),
                f = Rp((a || "_gcl") + "_gs"),
                g = f.map(function(m) {
                    return m.aa
                }),
                k = f.map(function(m) {
                    return e - m.timestamp
                });
            g.length > 0 && k.length > 0 && (b.ih = g.join("."), b.jh = k.join("."))
        }
        return b
    }

    function ar(a, b, c) {
        if (Uq.test(I.location.host)) {
            var d = Zq(c);
            if (d) return [{
                aa: d
            }]
        } else {
            if (b === "gclid") return Mp((a || "_gcl") + "_aw");
            if (b === "wbraid") return Mp((a || "_gcl") + "_gb");
            if (b === "braids") return Op({
                prefix: a
            })
        }
        return []
    }

    function br(a) {
        return ar(a, "gclid", "gclaw").map(function(b) {
            return b.aa
        }).join(".")
    }

    function cr(a) {
        return ar(a, "wbraid", "gclgb").map(function(b) {
            return b.aa
        }).join(".")
    }

    function dr(a) {
        return ar(a, "braids", "gclgb").map(function(b) {
            return b.aa
        }).join(".")
    }

    function er(a, b) {
        return Uq.test(I.location.host) ? !(Zq("gclaw") || Zq("gac")) : tq(a, b)
    }

    function fr(a, b, c) {
        var d;
        d = c ? qq(a, b) : pq((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    };

    function gr() {
        var a = H.__uspapi;
        if (pb(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function(c, d) {
                    if (d && c) {
                        var e = c.uspString;
                        e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e)
                    }
                })
            } catch (c) {}
            return b
        }
    };

    function or(a) {
        var b = T(a.m, Q.g.Ib),
            c = T(a.m, Q.g.Xb);
        b && !c ? (a.eventName !== Q.g.ba && a.eventName !== Q.g.Mc && P(131), a.isAborted = !0) : !b && c && (P(132), a.isAborted = !0)
    }

    function pr(a) {
        var b = X(Q.g.P) ? ji.pscdl : "denied";
        b != null && (a.o[Q.g.Ve] = b)
    }

    function qr(a) {
        var b = an(!0);
        a.o[Q.g.Hb] = b
    }

    function rr(a) {
        Un() && (a.o[Q.g.zc] = 1)
    };

    function yr(a, b, c, d) {
        var e = Ec(),
            f;
        if (e === 1) a: {
            var g = ui;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = I.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (r.indexOf(m) === 0) {
                        f = 3;
                        break a
                    }
                    n === 1 && r.indexOf(k) === 0 && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (f === 2 || d || "http:" != H.location.protocol ? a : b) + c
    };

    function Lr(a) {
        return {
            getDestinationId: function() {
                return a.target.ia
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.o[b]
            },
            setHitData: function(b, c) {
                a.o[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                a.o[b] === void 0 && (a.o[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return T(a.m, b)
            },
            Gj: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.o)
            }
        }
    };

    function Sr() {
        var a = H.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }

    function Tr(a) {
        if (I.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !H.getComputedStyle) return !0;
        var c = H.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (var d = a, e = c; d;) {
            if (e.display === "none") return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                k >= 0 && (g = g.substring(k + 8, g.indexOf(")", k)), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), f = String(Math.min(Number(g), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0) return !0;
            (d = d.parentElement) &&
            (e = H.getComputedStyle(d, null))
        }
        return !1
    }
    var Ss = Number('') || 5,
        Ts = Number('') || 50,
        Us = tb();
    var Zs = {
        Uk: Number('') || 500,
        Hk: Number('') || 5E3,
        gj: Number('20') || 10,
        nk: Number('') || 5E3
    };

    function $s(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var at = function(a, b) {
        var c;
        return c
    };
    var bt = "https://" + ii.Ed + "/gtm/static/",
        ct;

    function ht(a, b) {}
    var it = function(a, b, c, d) {};

    function jt(a, b, c, d) {}

    function kt(a, b, c, d) {}
    var lt = void 0;

    function mt(a) {
        var b = [];
        return b
    };
    var nt = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Pm();
    Sm() || Mm("iPod");
    Mm("iPad");
    !Mm("Android") || Qm() || Pm() || Om() || Mm("Silk");
    Qm();
    !Mm("Safari") || Qm() || (Nm() ? 0 : Mm("Coast")) || Om() || (Nm() ? 0 : Mm("Edge")) || (Nm() ? Lm("Microsoft Edge") : Mm("Edg/")) || (Nm() ? Lm("Opera") : Mm("OPR")) || Pm() || Mm("Silk") || Mm("Android") || Tm();
    var ot = {},
        pt = null,
        qt = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                e > 255 && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            f === void 0 && (f = 0);
            if (!pt) {
                pt = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                    var n = g.concat(k[m].split(""));
                    ot[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        pt[q] === void 0 && (pt[q] = p)
                    }
                }
            }
            for (var r = ot[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    B = b[v + 2],
                    A = r[x >> 2],
                    C = r[(x & 3) << 4 | y >> 4],
                    E = r[(y & 15) << 2 | B >> 6],
                    D = r[B & 63];
                t[w++] = "" + A + C + E + D
            }
            var F = 0,
                M = u;
            switch (b.length - v) {
                case 2:
                    F = b[v + 1], M = r[(F & 15) << 2] || u;
                case 1:
                    var L = b[v];
                    t[w] = "" + r[L >> 2] + r[(L & 3) << 4 | F >> 4] + M + u
            }
            return t.join("")
        };
    var rt = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function st(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function tt() {
        var a = H.google_tag_data,
            b;
        if (a != null && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function ut() {
        var a, b;
        return (b = (a = H.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }

    function vt(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function wt() {
        var a = H;
        if (!vt(a)) return null;
        var b = st(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(rt).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };

    function Dt(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    };

    function Et() {
        return Dt("join-ad-interest-group") && pb(tc.joinAdInterestGroup)
    }

    function Ft(a, b) {
        var c = Qb[3] === void 0 ? 1 : Qb[3],
            d = 'iframe[data-tagging-id="' + b + '"]',
            e = [];
        try {
            if (c === 1) {
                var f = I.querySelector(d);
                f && (e = [f])
            } else e = Array.from(I.querySelectorAll(d))
        } catch (q) {}
        var g;
        a: {
            try {
                g = I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a
            } catch (q) {}
            g = void 0
        }
        var k = g,
            m = ((k == null ? void 0 : k.length) || 0) >= (Qb[2] === void 0 ? 50 : Qb[2]),
            n;
        if (n = e.length >= 1) {
            var p = Number(e[e.length - 1].dataset.loadTime);
            p !== void 0 && Cb() - p < (Qb[1] === void 0 ? 6E4 : Qb[1]) ? (lb("TAGGING",
                9), n = !0) : n = !1
        }
        if (!n) {
            if (c === 1)
                if (e.length >= 1) Gt(e[0]);
                else {
                    if (m) {
                        lb("TAGGING", 10);
                        return
                    }
                }
            else e.length >= c ? Gt(e[0]) : m && Gt(k[0]);
            Fc(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: b,
                loadTime: Cb()
            })
        }
    }

    function Gt(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }

    function Ht() {
        return "https://td.doubleclick.net"
    };
    var Au = {
        M: {
            Sh: "ads_conversion_hit",
            Dd: "container_execute_start",
            Vh: "container_setup_end",
            Pf: "container_setup_start",
            Th: "container_blocking_end",
            Uh: "container_execute_end",
            Wh: "container_yield_end",
            Qf: "container_yield_start",
            Vi: "event_execute_end",
            Ui: "event_evaluation_end",
            Hg: "event_evaluation_start",
            Wi: "event_setup_end",
            ee: "event_setup_start",
            Yi: "ga4_conversion_hit",
            he: "page_load",
            wn: "pageview",
            hc: "snippet_load",
            uj: "tag_callback_error",
            vj: "tag_callback_failure",
            wj: "tag_callback_success",
            xj: "tag_execute_end",
            nd: "tag_execute_start"
        }
    };

    function Bu() {
        function a(c, d) {
            var e = mb(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Cu = !1;

    function kv(a, b) {}

    function lv(a, b) {}

    function mv(a, b) {}

    function nv(a, b) {}

    function ov() {
        var a = {};
        return a
    }

    function cv(a) {
        a = a === void 0 ? !0 : a;
        var b = {};
        return b
    }

    function pv() {}

    function qv(a, b) {}

    function rv(a, b, c) {}

    function sv() {}

    function tv(a, b) {
        var c = H,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var uv = function(a, b, c) {
        var d = Wm(a, "fmt");
        if (b) {
            var e = Wm(a, "random"),
                f = Wm(a, "label") || "";
            if (!e) return !1;
            var g = qt(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!tv(g, b)) return !1
        }
        d && d != 4 && (a = Ym(a, "rfmt", d));
        var k = Ym(a, "fmt", 4);
        Dc(k, function() {
            H.google_noFurtherRedirects && b && b.call && (H.google_noFurtherRedirects = null, b())
        }, void 0, c, I.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };

    function Mv(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b]
        }
    };

    function Nv(a, b, c) {
        c = c === void 0 ? !1 : c;
        Ov().addRestriction(0, a, b, c)
    }

    function Pv(a, b, c) {
        c = c === void 0 ? !1 : c;
        Ov().addRestriction(1, a, b, c)
    }

    function Qv() {
        var a = Pj();
        return Ov().getRestrictions(1, a)
    }
    var Rv = function() {
            this.j = {};
            this.D = {}
        },
        Sv = function(a, b) {
            var c = a.j[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.j[b] = c);
            return c
        };
    Rv.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.D[b]) {
            var e = Sv(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    Rv.prototype.getRestrictions = function(a, b) {
        var c = Sv(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(pa((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), pa((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(pa((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), pa((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    };
    Rv.prototype.getExternalRestrictions = function(a, b) {
        var c = Sv(this, b),
            d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    };
    Rv.prototype.removeExternalRestrictions = function(a) {
        var b = Sv(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.D[a] = !0
    };

    function Ov() {
        var a = ji.r;
        a || (a = new Rv, ji.r = a);
        return a
    };
    var Tv = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Uv = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Vv = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Wv = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

    function Xv() {
        var a = Ii("gtm.allowlist") || Ii("gtm.whitelist");
        a && P(9);
        oi && (a = ["google", "gtagfl", "lcl", "zone"]);
        Tv.test(H.location && H.location.hostname) && (oi ? P(116) : (P(117), Yv && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && Gb(zb(a), Uv),
            c = Ii("gtm.blocklist") || Ii("gtm.blacklist");
        c || (c = Ii("tagTypeBlacklist")) && P(3);
        c ? P(8) : c = [];
        Tv.test(H.location && H.location.hostname) && (c = zb(c), c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        zb(c).indexOf("google") >= 0 && P(2);
        var d = c && Gb(zb(c), Vv),
            e = {};
        return function(f) {
            var g = f && f[Oe.oa];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var k = yi[g] || [],
                m = !0;
            if (a) {
                var n;
                if (n = m) a: {
                    if (b.indexOf(g) < 0)
                        if (k && k.length > 0)
                            for (var p = 0; p < k.length; p++) {
                                if (b.indexOf(k[p]) < 0) {
                                    P(11);
                                    n = !1;
                                    break a
                                }
                            } else {
                                n = !1;
                                break a
                            }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r) q = r;
                else {
                    var t = ub(d, k || []);
                    t && P(10);
                    q = t
                }
            }
            var u = !m || q;
            u || !(k.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !==
                -1 || (u = ub(d, Wv));
            return e[g] = u
        }
    }
    var Yv = !1;
    Yv = !0;

    function Zv() {
        Hj && Nv(Pj(), function(a) {
            var b = yf(a.entityId),
                c;
            if (Bf(b)) {
                var d = b[Oe.oa];
                if (!d) throw Error("Error: No function name given for function call.");
                var e = qf[d];
                c = !!e && !!e.runInSiloedMode
            } else c = !!Mv(b[Oe.oa], 4);
            return c
        })
    }
    var aw = function(a, b, c, d, e) {
            if (!$v()) {
                var f = d.siloed ? Kj(a) : a;
                if (!Yj(f)) {
                    var g = "?id=" + encodeURIComponent(a) + "&l=" + ii.Ya,
                        k = Hb(a, "GTM-");
                    k || (g += "&cx=c");
                    W(63) && (g += "&gtm=" + Xn());
                    var m = fj();
                    m && (g += "&sign=" + ii.yf);
                    var n = c ? "/gtag/js" : "/gtm.js",
                        p = ej(b, n + g);
                    if (!p) {
                        var q = ii.Ed + n;
                        m && wc && k ? (q = wc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0], p = yr("https://", "http://", q + g)) : p = Bi.D ? Ci() + n + g : yr("https://", "http://", q + g)
                    }
                    d.siloed && ak({
                        ctid: f,
                        isDestination: !1
                    });
                    var r = Sj();
                    Cj().container[f] = {
                        state: 1,
                        context: d,
                        parent: r
                    };
                    Bj({
                        ctid: f,
                        isDestination: !1
                    }, e);
                    Dc(p)
                }
            }
        },
        bw = function(a, b, c, d) {
            if (!$v()) {
                var e = c.siloed ? Kj(a) : a;
                if (!Zj(e))
                    if (!c.siloed && bk()) Cj().destination[e] = {
                        state: 0,
                        transportUrl: b,
                        context: c,
                        parent: Sj()
                    }, Bj({
                        ctid: e,
                        isDestination: !0
                    }, d), P(91);
                    else {
                        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ii.Ya + "&cx=c";
                        W(63) && (f += "&gtm=" + Xn());
                        fj() && (f += "&sign=" + ii.yf);
                        var g = ej(b, f);
                        g || (g = Bi.D ? Ci() + f : yr("https://", "http://", ii.Ed + f));
                        c.siloed && ak({
                            ctid: e,
                            isDestination: !0
                        });
                        Cj().destination[e] = {
                            state: 1,
                            context: c,
                            parent: Sj()
                        };
                        Bj({
                            ctid: e,
                            isDestination: !0
                        }, d);
                        Dc(g)
                    }
            }
        };

    function $v() {
        if (Vn()) {
            return !0
        }
        return !1
    };
    var cw = [];

    function dw() {
        var a = $i(H.location.href);
        return a.hostname + a.pathname
    }

    function ew() {
        var a = dw();
        a && jk("dl", encodeURIComponent(a));
        jk("tdp", function() {
            return cw.length > 0 ? cw.join(".") : void 0
        });
        var b = an(!0);
        b !== void 0 && jk("frm", String(b))
    };
    var fw = !1,
        gw = 0,
        hw = [];

    function iw(a) {
        if (!fw) {
            var b = I.createEventObject,
                c = I.readyState === "complete",
                d = I.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                fw = !0;
                for (var e = 0; e < hw.length; e++) J(hw[e])
            }
            hw.push = function() {
                for (var f = za.apply(0, arguments), g = 0; g < f.length; g++) J(f[g]);
                return 0
            }
        }
    }

    function jw() {
        if (!fw && gw < 140) {
            gw++;
            try {
                var a, b;
                (b = (a = I.documentElement).doScroll) == null || b.call(a, "left");
                iw()
            } catch (c) {
                H.setTimeout(jw, 50)
            }
        }
    }

    function kw(a) {
        fw ? a() : hw.push(a)
    };

    function mw(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Nj()
        }
    };
    var ow = function(a, b) {
            this.j = !1;
            this.K = [];
            this.eventData = {
                tags: []
            };
            this.R = !1;
            this.D = this.H = 0;
            nw(this, a, b)
        },
        pw = function(a, b, c, d) {
            if (li.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            Wa(d) && (e = l(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1
        },
        qw = function(a, b, c, d) {
            var e = a.eventData.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        rw = function(a) {
            if (!a.j) {
                for (var b = a.K, c = 0; c < b.length; c++) b[c]();
                a.j = !0;
                a.K.length = 0
            }
        },
        nw = function(a, b, c) {
            b !== void 0 && a.ne(b);
            c && H.setTimeout(function() {
                    rw(a)
                },
                Number(c))
        };
    ow.prototype.ne = function(a) {
        var b = this,
            c = Eb(function() {
                J(function() {
                    a(Nj(), b.eventData)
                })
            });
        this.j ? c() : this.K.push(c)
    };
    var sw = function(a) {
            a.H++;
            return Eb(function() {
                a.D++;
                a.R && a.D >= a.H && rw(a)
            })
        },
        tw = function(a) {
            a.R = !0;
            a.D >= a.H && rw(a)
        };
    var uw = {},
        ww = function() {
            return H[vw()]
        };

    function vw() {
        return H.GoogleAnalyticsObject || "ga"
    }
    var zw = function() {
            var a = Nj();
        },
        Aw = function(a, b) {
            return function() {
                var c = ww(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = g.indexOf("&tid=" + b) < 0;
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Fw = ["es", "1"],
        Gw = {},
        Hw = {};

    function Iw(a, b) {
        if (uj) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Gw[a] = [
                ["e", c],
                ["eid", a]
            ];
            fm(a)
        }
    }

    function Jw(a) {
        var b = a.eventId,
            c = a.Lc;
        if (!Gw[b]) return [];
        var d = [];
        Hw[b] || d.push(Fw);
        d.push.apply(d, pa(Gw[b]));
        c && (Hw[b] = !0);
        return d
    };
    var Kw = {},
        Lw = {},
        Mw = {};

    function Nw(a, b, c, d) {
        uj && W(73) && ((d === void 0 ? 0 : d) ? (Mw[b] = Mw[b] || 0, ++Mw[b]) : c !== void 0 ? (Lw[a] = Lw[a] || {}, Lw[a][b] = Math.round(c)) : (Kw[a] = Kw[a] || {}, Kw[a][b] = (Kw[a][b] || 0) + 1))
    }

    function Ow(a) {
        var b = a.eventId,
            c = a.Lc,
            d = Kw[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Kw[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function Pw(a) {
        var b = a.eventId,
            c = a.Lc,
            d = Lw[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Lw[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function Qw() {
        for (var a = [], b = la(Object.keys(Mw)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + Mw[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var Rw = {},
        Sw = {};

    function Tw(a, b, c) {
        if (uj && b) {
            var d = oj(b);
            Rw[a] = Rw[a] || [];
            Rw[a].push(c + d);
            var e = (Bf(b) ? "1" : "2") + d;
            Sw[a] = Sw[a] || [];
            Sw[a].push(e);
            fm(a)
        }
    }

    function Uw(a) {
        var b = a.eventId,
            c = a.Lc,
            d = [],
            e = Rw[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = Sw[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete Rw[b], delete Sw[b]);
        return d
    };

    function Vw(a, b, c, d) {
        var e = of [a],
            f = Ww(a, b, c, d);
        if (!f) return null;
        var g = Cf(e[Oe.sj], c, []);
        if (g && g.length) {
            var k = g[0];
            f = Vw(k.index, {
                onSuccess: f,
                onFailure: k.Fj === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Ww(a, b, c, d) {
        function e() {
            function w() {
                sk(3);
                var D = Cb() - E;
                Tw(c.id, f, "7");
                qw(c.ic, A, "exception", D);
                W(64) && rv(c, f, Au.M.uj);
                C || (C = !0, k())
            }
            if (f[Oe.Mk]) k();
            else {
                var x = Af(f, c, []),
                    y = x[Oe.lk];
                if (y != null)
                    for (var B = 0; B < y.length; B++)
                        if (!X(y[B])) {
                            k();
                            return
                        }
                var A = pw(c.ic, String(f[Oe.oa]), Number(f[Oe.me]), x[Oe.Nk]),
                    C = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!C) {
                        C = !0;
                        var D = Cb() - E;
                        Tw(c.id, of [a], "5");
                        qw(c.ic, A, "success", D);
                        W(64) && rv(c, f, Au.M.wj);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!C) {
                        C = !0;
                        var D = Cb() - E;
                        Tw(c.id, of [a], "6");
                        qw(c.ic, A, "failure", D);
                        W(64) && rv(c, f, Au.M.vj);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                Tw(c.id, f, "1");
                W(64) && qv(c, f);
                var E = Cb();
                try {
                    Df(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    w(D)
                }
                W(64) && rv(c, f, Au.M.xj)
            }
        }
        var f = of [a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = Cf(f[Oe.yj], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Vw(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = p.Fj === 2 ? m : q
        }
        if (f[Oe.kj] ||
            f[Oe.Pk]) {
            var r = f[Oe.kj] ? pf : c.Pm,
                t = g,
                u = k;
            if (!r[a]) {
                var v = Xw(a, r, Eb(e));
                g = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function Xw(a, b, c) {
        var d = [],
            e = [];
        b[a] = Yw(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Zw;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = $w;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Yw(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Zw(a) {
        a()
    }

    function $w(a, b) {
        b()
    };
    var cx = function(a, b) {
        for (var c = [], d = 0; d < of .length; d++)
            if (a[d]) {
                var e = of [d];
                var f = sw(b.ic);
                try {
                    var g = Vw(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[Oe.oa];
                        if (!k) throw Error("Error: No function name given for function call.");
                        var m = qf[k];
                        c.push({
                            bk: d,
                            Rj: (m ? m.priorityOverride || 0 : 0) || Mv(e[Oe.oa], 1) || 0,
                            execute: g
                        })
                    } else ax(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(bx);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length >
            0
    };

    function bx(a, b) {
        var c, d = b.Rj,
            e = a.Rj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.bk,
                k = b.bk;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function ax(a, b) {
        if (uj) {
            var c = function(d) {
                var e = b.isBlocked( of [d]) ? "3" : "4",
                    f = Cf( of [d][Oe.sj], b, []);
                f && f.length && c(f[0].index);
                Tw(b.id, of [d], e);
                var g = Cf( of [d][Oe.yj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var fx = !1,
        dx;
    var ox = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (W(64)) {}
        if (d === "gtm.js") {
            if (fx) return !1;
            fx = !0
        }
        var e = !1,
            f = Qv(),
            g = l(a);
        if (!f.every(function(t) {
                return t({
                    originalEventData: g
                })
            })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0
        }
        Iw(b, d);
        var k = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: hx(g, e),
                Pm: [],
                logMacroError: function() {
                    P(6);
                    sk(0)
                },
                cachedModelValues: ix(),
                ic: new ow(function() {
                    if (W(64)) {}
                    k &&
                        k.apply(k, [].slice.call(arguments, 0))
                }, m),
                originalEventData: g
            };
        W(73) && uj && (n.reportMacroDiscrepancy = Nw);
        W(64) && mv(n.id, n.name);
        var p = Jf(n);
        W(64) && nv(n.id, n.name);
        e && (p = jx(p));
        if (W(64)) {}
        var q = cx(p, n),
            r = !1;
        tw(n.ic);
        d !== "gtm.js" && d !== "gtm.sync" || zw();
        return kx(p, q) || r
    };

    function ix() {
        var a = {};
        a.event = Ni("event", 1);
        a.ecommerce = Ni("ecommerce", 1);
        a.gtm = Ni("gtm");
        a.eventModel = Ni("eventModel");
        return a
    }

    function hx(a, b) {
        var c = Xv();
        return function(d) {
            if (c(d)) return !0;
            var e = d && d[Oe.oa];
            if (!e || typeof e != "string") return !0;
            e = e.replace(/^_*/, "");
            var f, g = Pj();
            f = Ov().getRestrictions(0, g);
            var k = a;
            b && (k = l(a), k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = yi[e] || [], n = la(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                            entityId: e,
                            securityGroups: m,
                            originalEventData: k
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }

    function jx(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String( of [c][Oe.oa]);
                if (ki[d] || of [c][Oe.Qk] !== void 0 || Mv(d, 2)) b[c] = !0
            }
        return b
    }

    function kx(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && of [c] && !li[String( of [c][Oe.oa])]) return !0;
        return !1
    }
    var px = 0;

    function qx(a, b) {
        return arguments.length === 1 ? rx("set", a) : rx("set", a, b)
    }

    function sx(a, b) {
        return arguments.length === 1 ? rx("config", a) : rx("config", a, b)
    }

    function tx(a, b, c) {
        c = c || {};
        c[Q.g.Zb] = a;
        return rx("event", b, c)
    }

    function rx() {
        return arguments
    };
    var ux = function() {
        this.messages = [];
        this.j = []
    };
    ux.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, {
                eventId: b,
                priorityId: d,
                fromContainerExecution: !0
            }),
            f = {
                message: a,
                notBeforeEventId: b,
                priorityId: d,
                messageContext: e
            };
        this.messages.push(f);
        for (var g = 0; g < this.j.length; g++) try {
            this.j[g](f)
        } catch (k) {}
    };
    ux.prototype.listen = function(a) {
        this.j.push(a)
    };
    ux.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    ux.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    };

    function vx(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Sf.canonicalContainerId;
        wx().enqueue(a, b, c)
    }

    function xx() {
        var a = yx;
        wx().listen(a)
    }

    function wx() {
        var a = ji.mb;
        a || (a = new ux, ji.mb = a);
        return a
    };
    var Of;
    var zx = {},
        Ax = {};

    function Bx(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                Eh: void 0,
                lh: void 0
            }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.Eh = ll(g, b), e.Eh) {
                    var k = Lj();
                    sb(k, function(r) {
                        return function(t) {
                            return r.Eh.ia === t
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = zx[g] || [];
                e.lh = {};
                m.forEach(function(r) {
                    return function(t) {
                        r.lh[t] = !0
                    }
                }(e));
                for (var n = Ij(), p = 0; p < n.length; p++)
                    if (e.lh[n[p]]) {
                        c = c.concat(Lj());
                        break
                    }
                var q = Ax[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            fm: c,
            im: d
        }
    }

    function Cx(a) {
        G(zx, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }

    function Dx(a) {
        G(Ax, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    var Ex = "HA GF G UA AW DC MC".split(" "),
        Fx = !1,
        Gx = !1,
        Hx = !1,
        Ix = !1;

    function Jx(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: zi()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Kx = void 0,
        Lx = void 0;

    function Mx(a, b, c) {
        var d = l(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && P(136);
        var e = l(b);
        l(c, e);
        vx(sx(Ij()[0], e), a.eventId, d)
    }

    function Nx(a) {
        for (var b = la([Q.g.hd, Q.g.Mb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || nm.D[d];
            if (e) return e
        }
    }
    var Ox = [Q.g.hd, Q.g.Mb, Q.g.wc, Q.g.lb, Q.g.tb, Q.g.Ba, Q.g.sa, Q.g.Oa, Q.g.Va, Q.g.Fb],
        Px = {
            config: function(a, b) {
                var c = Jx(a, b);
                if (!(a.length < 2) && z(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if (a[2] != void 0 && !Wa(a[2]) || a.length > 3) return;
                        d = a[2]
                    }
                    var e = ll(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, k;
                        a: {
                            if (!Gj.fe) {
                                var m = Rj(Sj());
                                if (dk(m)) {
                                    var n = m.parent,
                                        p = n.isDestination;
                                    k = {
                                        sm: Rj(n),
                                        dm: p
                                    };
                                    break a
                                }
                            }
                            k = void 0
                        }
                        var q = k;
                        q && (f = q.sm, g = q.dm);
                        Iw(c.eventId, "gtag.config");
                        var r = e.ia,
                            t = e.id !== r;
                        if (t ? Lj().indexOf(r) === -1 : Ij().indexOf(r) === -1) {
                            if (!b.inheritParentConfig &&
                                !d[Q.g.Ib]) {
                                var u = Nx(d);
                                if (t) bw(r, u, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var v = d;
                                    Kx ? Mx(b, v, Kx) : Lx || (Lx = l(v))
                                } else aw(r, u, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (f && (P(128), g && P(130), b.inheritParentConfig)) {
                                var w;
                                var x = d;
                                Lx ? (Mx(b, Lx, x), w = !1) : (!x[Q.g.ac] && ni && Kx || (Kx = l(x)), w = !0);
                                w && f.containers && f.containers.join(",");
                                return
                            }
                            var y = d;
                            if (!Hx && (Hx = !0, Gx))
                                for (var B = la(Ox), A = B.next(); !A.done; A = B.next())
                                    if (y.hasOwnProperty(A.value)) {
                                        vj &&
                                            (jk("erc", "1"), nk());
                                        break
                                    }
                            vj && !Hj && (px === 1 && (hk.mcc = !1), px = 2);
                            if (ni && !t && !d[Q.g.ac]) {
                                var C = Ix;
                                Ix = !0;
                                if (C) return
                            }
                            Fx || P(43);
                            if (!b.noTargetGroup)
                                if (t) {
                                    Dx(e.id);
                                    var E = e.id,
                                        D = d[Q.g.Wd] || "default";
                                    D = String(D).split(",");
                                    for (var F = 0; F < D.length; F++) {
                                        var M = Ax[D[F]] || [];
                                        Ax[D[F]] = M;
                                        M.indexOf(E) < 0 && M.push(E)
                                    }
                                } else {
                                    Cx(e.id);
                                    var L = e.id,
                                        S = d[Q.g.Wd] || "default";
                                    S = S.toString().split(",");
                                    for (var V = 0; V < S.length; V++) {
                                        var ca = zx[S[V]] || [];
                                        zx[S[V]] = ca;
                                        ca.indexOf(L) < 0 && ca.push(L)
                                    }
                                }
                            delete d[Q.g.Wd];
                            var ba = b.eventMetadata || {};
                            ba.hasOwnProperty("is_external_event") || (ba.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = ba;
                            delete d[Q.g.Zc];
                            for (var R = t ? [e.id] : Lj(), oa = 0; oa < R.length; oa++) {
                                var ma = d,
                                    ia = R[oa],
                                    ya = l(b),
                                    Ja = ll(ia, ya.isGtmEvent);
                                Ja && nm.push("config", [ma], Ja, ya)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (a.length === 3) {
                    P(39);
                    var c = Jx(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[Q.g.O] && P(139), e[Q.g.ya] && P(140));
                    d === "default" ? $k(e) : d === "update" ? bl(e, c) : d === "declare" && b.fromContainerExecution && Zk(e)
                }
            },
            event: function(a,
                b) {
                var c = a[1];
                if (!(a.length < 2) && z(c)) {
                    var d;
                    if (a.length > 2) {
                        if (!Wa(a[2]) && a[2] != void 0 || a.length > 3) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = l(e), e[Q.g.Zc] && (g.eventCallback = e[Q.g.Zc]), e[Q.g.Td] && (g.eventTimeout = e[Q.g.Td]));
                    var k = Jx(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if (c === "optimize.callback") return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[Q.g.Zb];
                    r === void 0 && (r = Ii(Q.g.Zb, 2), r === void 0 && (r = "default"));
                    if (z(r) || Array.isArray(r)) {
                        var t;
                        t = b.isGtmEvent ? z(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                        var u = Bx(t, b.isGtmEvent),
                            v = u.fm,
                            w = u.im;
                        if (w.length)
                            for (var x = Nx(q), y = 0; y < w.length; y++) {
                                var B = ll(w[y], b.isGtmEvent);
                                B && bw(B.ia, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = ml(v, b.isGtmEvent)
                    } else p = void 0;
                    var A = p;
                    if (A) {
                        var C;
                        !A.length || ((C = b.eventMetadata) == null ? 0 : C.em_event) || (Gx = !0);
                        Iw(m, c);
                        for (var E = [], D = 0; D < A.length; D++) {
                            var F = A[D],
                                M = l(b);
                            if (Ex.indexOf(Tj(F.prefix)) !== -1) {
                                var L = l(d),
                                    S = M.eventMetadata || {};
                                S.hasOwnProperty("is_external_event") ||
                                    (S.is_external_event = !M.fromContainerExecution);
                                M.eventMetadata = S;
                                delete L[Q.g.Zc];
                                om(c, L, F.id, M);
                                vj && !Hj && px === 0 && (jk("mcc", "1"), px = 1)
                            }
                            E.push(F.id)
                        }
                        g.eventModel = g.eventModel || {};
                        A.length > 0 ? g.eventModel[Q.g.Zb] = E.join() : delete g.eventModel[Q.g.Zb];
                        Fx || P(43);
                        b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[Q.g.Xb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                P(53);
                if (a.length === 4 && z(a[1]) && z(a[2]) && pb(a[3])) {
                    var c = ll(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Fx || P(43);
                        var f = Nx();
                        if (!sb(Lj(), function(k) {
                                return c.ia === k
                            })) bw(c.ia, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (Ex.indexOf(Tj(c.prefix)) !== -1) {
                            Jx(a, b);
                            var g = {};
                            l((g[Q.g.qb] = d, g[Q.g.Gb] = e, g));
                            pm(d, function(k) {
                                J(function() {
                                    return e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (a.length == 2 && a[1].getTime) {
                    Fx = !0;
                    var c = Jx(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] =
                        e, f
                }
            },
            policy: function(a) {
                if (a.length === 3 && z(a[1]) && pb(a[2])) {
                    if (Pf(a[1], a[2]), P(74), a[1] === "all") {
                        P(75);
                        var b = !1;
                        try {
                            b = a[2](Nj(), "unknown", {})
                        } catch (c) {}
                        b || P(76)
                    }
                } else P(73)
            },
            set: function(a, b) {
                var c;
                a.length == 2 && Wa(a[1]) ? c = l(a[1]) : a.length == 3 && z(a[1]) && (c = {}, Wa(a[2]) || Array.isArray(a[2]) ? c[a[1]] = l(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Jx(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    l(c);
                    var g = l(c);
                    nm.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Qx = {
            policy: !0
        };
    var Sx = function(a) {
        if (Rx(a)) return a;
        this.value = a
    };
    Sx.prototype.getUntrustedMessageValue = function() {
        return this.value
    };
    var Rx = function(a) {
        return !a || Ua(a) !== "object" || Wa(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Sx.prototype.getUntrustedMessageValue = Sx.prototype.getUntrustedMessageValue;
    var Tx = !1,
        Ux = [];

    function Vx() {
        if (!Tx) {
            Tx = !0;
            for (var a = 0; a < Ux.length; a++) J(Ux[a])
        }
    }

    function Wx(a) {
        Tx ? J(a) : Ux.push(a)
    };
    var Xx = 0,
        Yx = {},
        Zx = [],
        $x = [],
        ay = !1,
        by = !1;

    function cy(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var dy = function(a) {
            return H[ii.Ya].push(a)
        },
        ey = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return dy(a)
        },
        fy = function(a, b) {
            if (!qb(b) || b < 0) b = 0;
            var c = ji[ii.Ya],
                d = 0,
                e = !1,
                f = void 0;
            f = H.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var g = c ? c.subscribers : 1;
                ++d === g && (f && (H.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function gy(a, b) {
        var c = a._clear || b.overwriteModelFields;
        G(a, function(e, f) {
            e !== "_clear" && (c && Li(e), Li(e, f))
        });
        vi || (vi = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        typeof d !== "number" && (d = zi(), a["gtm.uniqueEventId"] = d, Li("gtm.uniqueEventId", d));
        return ox(a)
    }

    function hy(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (wb(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0
        }
        return !1
    }

    function iy() {
        var a;
        if ($x.length) a = $x.shift();
        else if (Zx.length) a = Zx.shift();
        else return;
        var b;
        var c = a;
        if (ay || !hy(c.message)) b = c;
        else {
            ay = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = zi());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Zx.unshift(k, c);
            if (vj) {
                var m = Sf.ctid;
                if (m) {
                    var n, p = Rj(Sj());
                    n = p && p.context;
                    cw.push(m + ";" + Sf.canonicalContainerId + ";" + (n && n.fromContainerExecution ? 1 : 0) + ";" + (n && n.source || 0) + ";" + (Gj.fe ? 1 : 0));
                    nk()
                }
            }
            b = f
        }
        return b
    }

    function jy() {
        for (var a = !1, b; !by && (b = iy());) {
            by = !0;
            delete Fi.eventModel;
            Hi();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) by = !1;
            else {
                e.fromContainerExecution && Mi();
                try {
                    if (pb(d)) try {
                        d.call(Ji)
                    } catch (v) {} else if (Array.isArray(d)) {
                        var f = d;
                        if (z(f[0])) {
                            var g = f[0].split("."),
                                k = g.pop(),
                                m = f.slice(1),
                                n = Ii(g.join("."), 2);
                            if (n != null) try {
                                n[k].apply(n, m)
                            } catch (v) {}
                        }
                    } else {
                        var p = void 0;
                        if (wb(d)) a: {
                            if (d.length && z(d[0])) {
                                var q = Px[d[0]];
                                if (q && (!e.fromContainerExecution || !Qx[d[0]])) {
                                    p = q(d, e);
                                    break a
                                }
                            }
                            p = void 0
                        }
                        else p =
                            d;
                        p && (a = gy(p, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && Hi(!0);
                    var r = d["gtm.uniqueEventId"];
                    if (typeof r === "number") {
                        for (var t = Yx[String(r)] || [], u = 0; u < t.length; u++) $x.push(ky(t[u]));
                        t.length && $x.sort(cy);
                        delete Yx[String(r)];
                        r > Xx && (Xx = r)
                    }
                    by = !1
                }
            }
        }
        return !a
    }

    function ly() {
        if (W(64)) {
            var a = my();
        }
        var b = jy();
        if (W(64)) {}
        try {
            var c = Nj(),
                d = H[ii.Ya].hide;
            if (d && d[c] !== void 0 && d.end) {
                d[c] = !1;
                var e = !0,
                    f;
                for (f in d)
                    if (d.hasOwnProperty(f) && d[f] ===
                        !0) {
                        e = !1;
                        break
                    }
                e && (d.end(), d.end = null)
            }
        } catch (g) {}
        return b
    }

    function yx(a) {
        if (Xx < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Yx[b] = Yx[b] || [];
            Yx[b].push(a)
        } else $x.push(ky(a)), $x.sort(cy), J(function() {
            by || jy()
        })
    }

    function ky(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var ny = function() {
            function a(f) {
                var g = {};
                if (Rx(f)) {
                    var k = f;
                    f = Rx(k) ? k.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = xc(ii.Ya, []),
                c = ji[ii.Ya] = ji[ii.Ya] || {};
            c.pruned === !0 && P(83);
            Yx = wx().get();
            xx();
            kw(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            Wx(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (ji.SANDBOXED_JS_SEMAPHORE >
                    0) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new Sx(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var k = f.map(function(q) {
                    return a(q)
                });
                Zx.push.apply(Zx, k);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (P(4), c.pruned = !0; this.length > n;) this.shift();
                var p = typeof m !== "boolean" || m;
                return jy() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Zx.push.apply(Zx, e);
            if (my()) {
                if (W(64)) {}
                J(ly)
            }
        },
        my = function() {
            var a = !0;
            return a
        };

    function oy(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = Cb();
        return b < c + 3E5 && b > c - 9E5
    }

    function py(a) {
        return a && a.indexOf("pending:") === 0 ? oy(a.substr(8)) : !1
    };
    var Ky = function() {};
    var Ly = function() {};
    Ly.prototype.toString = function() {
        return "undefined"
    };
    var My = new Ly;

    function Ty(a, b) {
        function c(g) {
            var k = $i(g),
                m = Ui(k, "protocol"),
                n = Ui(k, "host", !0),
                p = Ui(k, "port"),
                q = Ui(k, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443") m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Uy(a) {
        return Vy(a) ? 1 : 0
    }

    function Vy(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = l(a, {});
                l({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Uy(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return rg(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < ng.length; g++) {
                            var k = ng[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return og(b, c);
            case "_eq":
                return sg(b, c);
            case "_ge":
                return tg(b, c);
            case "_gt":
                return vg(b, c);
            case "_lc":
                return String(b).split(",").indexOf(String(c)) >=
                    0;
            case "_le":
                return ug(b, c);
            case "_lt":
                return wg(b, c);
            case "_re":
                return qg(b, c, a.ignore_case);
            case "_sw":
                return xg(b, c);
            case "_um":
                return Ty(b, c)
        }
        return !1
    };

    function Wy() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    };

    function Xy() {
        var a = [
            ["cv", W(84) ? Wy() : "1"],
            ["rv", ii.Kg],
            ["tc", of .filter(function(b) {
                return b
            }).length]
        ];
        ii.ie && a.push(["x", ii.ie]);
        Bi.j && a.push(["tag_exp", Bi.j]);
        return a
    };

    function Yy() {
        var a = uk();
        return a.length ? [
            ["exp_geo", a]
        ] : []
    }
    var Zy;

    function $y() {
        try {
            Zy != null || (Zy = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return ((a = Zy) == null ? 0 : a.length) ? [
            ["exp_tz", Zy]
        ] : []
    };

    function az() {
        return !1
    }

    function bz() {
        var a = {};
        return function(b, c, d) {}
    };

    function cz() {
        var a = dz;
        return function(b, c, d) {
            var e = d && d.event;
            ez(c);
            var f = Hb(b, "__cvt_") ? void 0 : 1,
                g = new cb;
            G(c, function(r, t) {
                var u = jd(t, void 0, f);
                u === void 0 && t !== void 0 && P(44);
                g.set(r, u)
            });
            a.j.j.D = If();
            var k = {
                Cj: Wf(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                ne: e !== void 0 ? function(r) {
                    e.ic.ne(r)
                } : void 0,
                wb: function() {
                    return b
                },
                log: function() {},
                wl: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                Em: !!Mv(b, 3),
                originalEventData: e == null ?
                    void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (k.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (az()) {
                var m = bz(),
                    n, p;
                k.Sa = {
                    Ph: [],
                    oe: {},
                    xb: function(r, t, u) {
                        t === 1 && (n = r);
                        t === 7 && (p = u);
                        m(r, t, u)
                    },
                    If: fh()
                };
                k.log = function(r) {
                    var t = za.apply(1, arguments);
                    n && m(n, 4, {
                        level: r,
                        source: p,
                        message: t
                    })
                }
            }
            var q = He(a, k, [b, g]);
            a.j.j.D = void 0;
            q instanceof Ha && q.type === "return" && (q = q.data);
            return K(q, void 0, f)
        }
    }

    function ez(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        pb(b) && (a.gtmOnSuccess = function() {
            J(b)
        });
        pb(c) && (a.gtmOnFailure = function() {
            J(c)
        })
    };

    function fz(a, b) {
        var c = this;
    }
    fz.T = "addConsentListener";
    var gz = !1;

    function hz(a) {
        for (var b = 0; b < a.length; ++b)
            if (gz) try {
                a[b]()
            } catch (c) {
                P(77)
            } else a[b]()
    }

    function iz(a, b, c) {
        var d = this,
            e;
        return e
    }
    iz.J = "internal.addDataLayerEventListener";

    function jz(a, b, c) {}
    jz.T = "addDocumentEventListener";

    function kz(a, b, c, d) {}
    kz.T = "addElementEventListener";

    function lz(a) {
        return a.F.j
    };

    function mz(a) {}
    mz.T = "addEventCallback";

    function Cz(a) {}
    Cz.J = "internal.addFormAbandonmentListener";

    function Dz(a, b, c, d) {}
    Dz.J = "internal.addFormData";
    var Ez = {},
        Fz = [],
        Gz = {},
        Hz = 0,
        Iz = 0;

    function Pz(a, b) {}
    Pz.J = "internal.addFormInteractionListener";

    function Wz(a, b) {}
    Wz.J = "internal.addFormSubmitListener";

    function aA(a) {}
    aA.J = "internal.addGaSendListener";

    function bA(a) {
        if (!a) return {};
        var b = a.wl;
        return mw(b.type, b.index, b.name)
    }

    function cA(a) {
        return a ? {
            originatingEntity: bA(a)
        } : {}
    };

    function kA(a) {
        var b = ji.zones;
        return b ? b.getIsAllowedFn(Ij(), a) : function() {
            return !0
        }
    }

    function lA() {
        Pv(Pj(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = ji.zones;
            return c ? c.isActive(Ij(), b) : !0
        });
        Nv(Pj(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return kA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var mA = function(a, b) {
        this.tagId = a;
        this.qe = b
    };

    function nA(a, b) {
        var c = this,
            d;
        return d
    }
    nA.J = "internal.loadGoogleTag";

    function oA(a) {
        return new bd("", function(b) {
            var c = this.evaluate(b);
            if (c instanceof bd) return new bd("", function() {
                var d = za.apply(0, arguments),
                    e = this,
                    f = l(lz(this), null);
                f.eventId = a.eventId;
                f.priorityId = a.priorityId;
                f.originalEventData = a.originalEventData;
                var g = d.map(function(m) {
                        return e.evaluate(m)
                    }),
                    k = Na(this.F);
                k.j = f;
                return c.fb.apply(c, [k].concat(pa(g)))
            })
        })
    };

    function pA(a, b, c) {
        var d = this;
    }
    pA.J = "internal.addGoogleTagRestriction";
    var qA = {},
        rA = [];

    function yA(a, b) {}
    yA.J = "internal.addHistoryChangeListener";

    function zA(a, b, c) {}
    zA.T = "addWindowEventListener";

    function AA(a, b) {
        return !0
    }
    AA.T = "aliasInWindow";

    function BA(a, b, c) {}
    BA.J = "internal.appendRemoteConfigParameter";

    function CA(a) {
        var b;
        return b
    }
    CA.T = "callInWindow";

    function DA(a) {}
    DA.T = "callLater";

    function EA(a) {}
    EA.J = "callOnDomReady";

    function FA(a) {}
    FA.J = "callOnWindowLoad";

    function GA(a, b) {
        var c;
        return c
    }
    GA.J = "internal.computeGtmParameter";

    function HA(a) {
        var b;
        return b
    }
    HA.J = "internal.copyFromCrossContainerData";

    function IA(a, b) {
        var c;
        var d = jd(c, this.F, Hb(lz(this).wb(), "__cvt_") ? 2 : 1);
        d === void 0 && c !== void 0 && P(45);
        return d
    }
    IA.T = "copyFromDataLayer";

    function JA(a) {
        var b = void 0;
        return b
    }
    JA.J = "internal.copyFromDataLayerCache";

    function KA(a) {
        var b;
        return b
    }
    KA.T = "copyFromWindow";

    function LA(a) {
        var b = void 0;
        return jd(b, this.F, 1)
    }
    LA.J = "internal.copyKeyFromWindow";

    function MA(a, b) {
        var c;
        return c
    }
    MA.J = "internal.copyPreHit";

    function NA(a, b) {
        var c = null;
        return jd(c, this.F, 2)
    }
    NA.T = "createArgumentsQueue";

    function OA(a) {
        return jd(function(c) {
            var d = ww();
            if (typeof c === "function") d(function() {
                c(function(f, g, k) {
                    var m = ww(),
                        n = m && m.getByName &&
                        m.getByName(f);
                    return ym(H.gaplugins.Linker, n).decorate(g, k)
                })
            });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded") return !!d.loaded
        }, this.F, 1)
    }
    OA.J = "internal.createGaCommandQueue";

    function PA(a) {
        return jd(function() {
            if (!pb(e.push)) throw Error("Object at " + a + " in window is not an array.");
            e.push.apply(e, Array.prototype.slice.call(arguments, 0))
        }, this.F, Hb(lz(this).wb(),
            "__cvt_") ? 2 : 1)
    }
    PA.T = "createQueue";

    function QA(a, b) {
        var c = null;
        return c
    }
    QA.J = "internal.createRegex";

    function RA() {
        var a = {};
        return a
    };

    function SA(a) {}
    SA.J = "internal.declareConsentState";

    function TA(a) {
        var b = "";
        return b
    }
    TA.J = "internal.decodeUrlHtmlEntities";

    function UA(a, b, c) {
        var d;
        return d
    }
    UA.J = "internal.decorateUrlWithGaCookies";

    function VA(a) {
        var b;
        return b
    }
    VA.J = "internal.detectUserProvidedData";

    function ZA(a, b) {
        return b
    }
    ZA.J = "internal.enableAutoEventOnClick";

    function gB(a, b) {
        return b
    }
    gB.J = "internal.enableAutoEventOnElementVisibility";

    function hB() {}
    hB.J = "internal.enableAutoEventOnError";
    var iB = {},
        jB = [],
        kB = {},
        lB = 0,
        mB = 0;

    function sB(a, b) {
        var c = this;
        return b
    }
    sB.J = "internal.enableAutoEventOnFormInteraction";

    function xB(a, b) {
        var c = this;
        return b
    }
    xB.J = "internal.enableAutoEventOnFormSubmit";

    function CB() {
        var a = this;
    }
    CB.J = "internal.enableAutoEventOnGaSend";
    var DB = {},
        EB = [];

    function LB(a, b) {
        var c = this;
        return b
    }
    LB.J = "internal.enableAutoEventOnHistoryChange";
    var MB = ["http://", "https://", "javascript:", "file://"];

    function QB(a, b) {
        var c = this;
        return b
    }
    QB.J = "internal.enableAutoEventOnLinkClick";
    var RB, SB;

    function cC(a, b) {
        var c = this;
        return b
    }
    cC.J = "internal.enableAutoEventOnScroll";

    function dC(a) {
        return function() {
            if (a.xh && a.zh >= a.xh) a.Gf && H.clearInterval(a.Gf);
            else {
                a.zh++;
                var b = Cb();
                dy({
                    event: a.eventName,
                    "gtm.timerId": a.Gf,
                    "gtm.timerEventNumber": a.zh,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.xh,
                    "gtm.timerStartTime": a.Zj,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Zj,
                    "gtm.triggers": a.Wm
                })
            }
        }
    }

    function eC(a, b) {
        return b
    }
    eC.J = "internal.enableAutoEventOnTimer";
    var lc = ja(["data-gtm-yt-inspected-"]),
        gC = ["www.youtube.com", "www.youtube-nocookie.com"],
        hC, iC = !1;

    function sC(a, b) {
        var c = this;
        return b
    }
    sC.J = "internal.enableAutoEventOnYouTubeActivity";

    function tC(a, b) {
        N(this.getName(), ["booleanExpression:!string", "context:?PixieMap"], arguments);
        var c = b ? K(b) : {},
            d = a,
            e = !1;
        return e
    }
    tC.J = "internal.evaluateBooleanExpression";
    var uC;

    function vC(a) {
        var b = !1;
        return b
    }
    vC.J = "internal.evaluateMatchingRules";
    var cD = function() {
        var a = !0;
        An(7) && An(9) && An(10) || (a = !1);
        return a
    };

    function YD(a, b, c, d) {}
    YD.J = "internal.executeEventProcessor";

    function ZD(a) {
        var b;
        return jd(b, this.F, 1)
    }
    ZD.J = "internal.executeJavascriptString";

    function $D(a) {
        var b;
        return b
    };
    var aE = null;

    function bE() {
        var a = new cb;
        return a
    }
    bE.T = "getContainerVersion";

    function cE(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    cE.T = "getCookieValues";

    function dE() {
        return uk()
    }
    dE.J = "internal.getCountryCode";

    function eE() {
        var a = [];
        return jd(a)
    }
    eE.J = "internal.getDestinationIds";

    function fE(a, b) {
        var c = null;
        return c
    }
    fE.J = "internal.getElementAttribute";

    function gE(a) {
        var b = null;
        return b
    }
    gE.J = "internal.getElementById";

    function hE(a) {
        var b = "";
        return b
    }
    hE.J = "internal.getElementInnerText";

    function iE(a, b) {
        var c = null;
        return c
    }
    iE.J = "internal.getElementProperty";

    function jE(a) {
        var b;
        return b
    }
    jE.J = "internal.getElementValue";

    function kE(a) {
        var b = 0;
        return b
    }
    kE.J = "internal.getElementVisibilityRatio";

    function lE(a) {
        var b = null;
        return b
    }
    lE.J = "internal.getElementsByCssSelector";

    function mE(a) {
        var b;
        N(this.getName(), ["keyPath:!string"], arguments);
        O(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = lz(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
                        for (var u = r[t].split("."), v = 0; v < u.length; v++) n.push(u[v]), v !== u.length - 1 && n.push(m);
                        t !== r.length - 1 && n.push(k)
                    }
                    q !== p.length - 1 && n.push(g)
                }
                for (var w = [], x = "", y = la(n), B = y.next(); !B.done; B =
                    y.next()) {
                    var A = B.value;
                    A === m ? (w.push(x), x = "") : x = A === g ? x + "\\" : A === k ? x + "." : x + A
                }
                x && w.push(x);
                for (var C = la(w), E = C.next(); !E.done; E = C.next()) {
                    if (f == null) {
                        c = void 0;
                        break a
                    }
                    f = f[E.value]
                }
                c = f
            } else c = void 0
        }
        b = jd(c, this.F, 1);
        return b
    }
    mE.J = "internal.getEventData";
    var nE = {};
    nE.enableAWFledge = W(25);
    nE.enableAdsConversionValidation = W(14);
    nE.enableAutoPiiOnPhoneAndAddress = W(24);
    nE.enableCachedEcommerceData = W(31);
    nE.enableCcdPreAutoPiiDetection = W(32);
    nE.enableCloudRecommentationsErrorLogging = W(33);
    nE.enableCloudRecommentationsSchemaIngestion = W(34);
    nE.enableCloudRetailInjectPurchaseMetadata = W(36);
    nE.enableCloudRetailLogging = W(35);
    nE.enableCloudRetailPageCategories = W(37);
    nE.enableConsentDisclosureActivity = W(38);
    nE.enableConversionMarkerPageViewRename = W(40);
    nE.enableDCFledge = W(43);
    nE.enableDecodeUri = W(58);
    nE.enableDeferAllEnhancedMeasurement = W(44);
    nE.enableDmaBlockDisclosure = W(47);
    nE.enableEuidAutoMode = W(51);
    nE.enableFormSkipValidation = W(55);
    nE.enableUrlDecodeEventUsage = W(83);
    nE.enableZoneConfigInChildContainers = W(86);
    nE.useEnableAutoEventOnFormApis = W(94);
    nE.autoPiiEligible = zk();

    function oE() {
        return jd(nE)
    }
    oE.J = "internal.getFlags";

    function pE() {
        return new gd(My)
    }
    pE.J = "internal.getHtmlId";

    function qE(a, b) {
        var c;
        return c
    }
    qE.J = "internal.getProductSettingsParameter";

    function rE(a, b) {
        var c;
        return c
    }
    rE.T = "getQueryParameters";

    function sE(a, b) {
        var c;
        return c
    }
    sE.T = "getReferrerQueryParameters";

    function tE(a) {
        var b = "";
        return b
    }
    tE.T = "getReferrerUrl";

    function uE() {
        return vk()
    }
    uE.J = "internal.getRegionCode";

    function vE(a, b) {
        var c;
        return c
    }
    vE.J = "internal.getRemoteConfigParameter";

    function wE(a) {
        var b = "";
        return b
    }
    wE.T = "getUrl";

    function xE() {
        O(this, "get_user_agent");
        return tc.userAgent
    }
    xE.J = "internal.getUserAgent";

    function FE() {
        return H.gaGlobal = H.gaGlobal || {}
    }
    var GE = function() {
            var a = FE();
            a.hid = a.hid || tb();
            return a.hid
        },
        HE = function(a, b) {
            var c = FE();
            if (c.vid == void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var rF = function(a) {
            this.D = a;
            this.H = "";
            this.j = this.D
        },
        sF = function(a, b) {
            a.j = b;
            return a
        },
        tF = function(a, b) {
            a.K = b;
            return a
        };

    function uF(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function vF(a, b, c) {
        if (a) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = Wa(b) ? b : {}, f = la(d), g = f.next(); !g.done; g = f.next()) c(g.value, e)
        }
    };
    var dG = window,
        eG = document,
        fG = function(a) {
            var b = dG._gaUserPrefs;
            if (b && b.ioo && b.ioo() || eG.documentElement.hasAttribute("data-google-analytics-opt-out") || a && dG["ga-disable-" + a] === !0) return !0;
            try {
                var c = dG.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
            } catch (p) {}
            for (var d = [], e = String(eG.cookie).split(";"), f = 0; f < e.length; f++) {
                var g = e[f].split("="),
                    k = g[0].replace(/^\s*|\s*$/g, "");
                if (k && k == "AMP_TOKEN") {
                    var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    m && (m = decodeURIComponent(m));
                    d.push(m)
                }
            }
            for (var n =
                    0; n < d.length; n++)
                if (d[n] == "$OPT_OUT") return !0;
            return eG.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function pG(a) {
        G(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[Q.g.cb] || {};
        G(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    };
    var TG = function(a, b) {};

    function SG(a, b) {
        var c = function() {};
        return c
    }

    function UG(a, b, c) {};
    var VG = SG;

    function XG(a, b, c) {
        var d = this;
    }
    XG.J = "internal.gtagConfig";

    function YG() {
        var a = {};
        return a
    };

    function $G(a, b) {}
    $G.T = "gtagSet";

    function aH(a, b) {}
    aH.T = "injectHiddenIframe";

    function bH(a, b, c, d, e) {}
    bH.J = "internal.injectHtml";
    var fH = {};

    function hH(a, b, c, d) {}
    var iH = {
            dl: 1,
            id: 1
        },
        jH = {};

    function kH(a, b, c, d) {}
    hH.T = "injectScript";
    kH.J = "internal.injectScript";

    function lH(a) {
        var b = !0;
        return b
    }
    lH.T = "isConsentGranted";

    function mH() {
        return xk()
    }
    mH.J = "internal.isDmaRegion";

    function nH(a) {
        var b = !1;
        return b
    }
    nH.J = "internal.isEntityInfrastructure";

    function oH() {
        var a = ah(function(b) {
            lz(this).log("error", b)
        });
        a.T = "JSON";
        return a
    };

    function pH(a) {
        var b = void 0;
        return jd(b)
    }
    pH.J = "internal.legacyParseUrl";

    function qH() {
        return !1
    }
    var rH = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };

    function sH() {}
    sH.T = "logToConsole";

    function tH(a, b) {}
    tH.J = "internal.mergeRemoteConfig";

    function uH(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return jd(d)
    }
    uH.J = "internal.parseCookieValuesFromString";

    function vH(a) {
        var b = void 0;
        return b
    }
    vH.T = "parseUrl";

    function wH(a) {}
    wH.J = "internal.processAsNewEvent";

    function xH(a, b, c) {
        var d;
        return d
    }
    xH.J = "internal.pushToDataLayer";

    function yH(a) {
        var b = !1;
        return b
    }
    yH.T = "queryPermission";

    function zH() {
        var a = "";
        return a
    }
    zH.T = "readCharacterSet";

    function AH() {
        return ii.Ya
    }
    AH.J = "internal.readDataLayerName";

    function BH() {
        var a = "";
        return a
    }
    BH.T = "readTitle";

    function CH(a, b) {
        var c = this;
    }
    CH.J = "internal.registerCcdCallback";

    function DH(a) {
        return !0
    }
    DH.J = "internal.registerDestination";
    var EH = ["config", "event", "get", "set"];

    function FH(a, b, c) {}
    FH.J = "internal.registerGtagCommandListener";

    function GH(a, b) {
        var c = !1;
        return c
    }
    GH.J = "internal.removeDataLayerEventListener";

    function HH(a, b) {}
    HH.J = "internal.removeFormData";

    function IH() {}
    IH.T = "resetDataLayer";

    function JH(a, b, c, d) {}
    JH.J = "internal.sendGtagEvent";

    function KH(a, b, c) {}
    KH.T = "sendPixel";

    function LH(a, b) {}
    LH.J = "internal.setAnchorHref";

    function MH(a) {}
    MH.J = "internal.setContainerConsentDefaults";

    function NH(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    NH.T = "setCookie";

    function OH(a) {}
    OH.J = "internal.setCorePlatformServices";

    function PH(a, b) {}
    PH.J = "internal.setDataLayerValue";

    function QH(a) {}
    QH.T = "setDefaultConsentState";

    function RH(a, b) {}
    RH.J = "internal.setDelegatedConsentType";

    function SH(a, b) {}
    SH.J = "internal.setFormAction";

    function TH(a, b, c) {}
    TH.J = "internal.setInCrossContainerData";

    function UH(a, b, c) {
        return !1
    }
    UH.T = "setInWindow";

    function VH(a, b, c) {}
    VH.J = "internal.setProductSettingsParameter";

    function WH(a, b, c) {}
    WH.J = "internal.setRemoteConfigParameter";

    function XH(a, b, c, d) {
        var e = this;
    }
    XH.T = "sha256";

    function YH(a, b, c) {}
    YH.J = "internal.sortRemoteConfigParameters";

    function ZH(a, b) {
        var c = void 0;
        return c
    }
    ZH.J = "internal.subscribeToCrossContainerData";
    var $H = {},
        aI = {};
    $H.getItem = function(a) {
        var b = null;
        return b
    };
    $H.setItem = function(a, b) {};
    $H.removeItem = function(a) {};
    $H.clear = function() {};
    $H.T = "templateStorage";

    function bI(a, b) {
        var c = !1;
        return c
    }
    bI.J = "internal.testRegex";

    function cI(a) {
        var b;
        return b
    };

    function dI(a) {
        var b;
        return b
    }
    dI.J = "internal.unsiloId";

    function eI(a, b) {
        var c;
        return c
    }
    eI.J = "internal.unsubscribeFromCrossContainerData";

    function fI(a) {}
    fI.T = "updateConsentState";
    var gI;

    function hI(a, b, c) {
        gI = gI || new lh;
        gI.add(a, b, c)
    }

    function iI(a, b) {
        var c = gI = gI || new lh;
        if (c.D.hasOwnProperty(a)) throw Error("Attempting to add a private function which already exists: " + a + ".");
        if (c.j.hasOwnProperty(a)) throw Error("Attempting to add a private function with an existing API name: " + a + ".");
        c.D[a] = pb(b) ? Ig(a, b) : Jg(a, b)
    }

    function jI() {
        return function(a) {
            var b;
            var c = gI;
            if (c.j.hasOwnProperty(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.D.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.F.j;
                    if (f) {
                        var g = f.wb();
                        if (g) {
                            g.indexOf("__cvt_") !== 0 && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var k = c.D.hasOwnProperty(a) ? c.D[a] : void 0;
                    b = k
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };
    var kI = function() {
        var a = function(c) {
                return iI(c.J, c)
            },
            b = function(c) {
                return hI(c.T, c)
            };
        b(fz);
        b(mz);
        b(AA);
        b(CA);
        b(DA);
        b(IA);
        b(KA);
        b(NA);
        b(PA);
        b(bE);
        b(cE);
        b(rE);
        b(sE);
        b(tE);
        b(wE);
        b($G);
        b(aH);
        b(hH);
        b(lH);
        b(sH);
        b(vH);
        b(yH);
        b(zH);
        b(BH);
        b(KH);
        b(NH);
        b(QH);
        b(UH);
        b(XH);
        b($H);
        b(fI);
        b(oH());
        hI("Math", Ng());
        hI("Object", jh);
        hI("TestHelper", nh());
        hI("assertApi", Kg);
        hI("assertThat", Lg);
        hI("decodeUri", Pg);
        hI("decodeUriComponent", Qg);
        hI("encodeUri", Rg);
        hI("encodeUriComponent", Sg);
        hI("fail", Xg);
        hI("generateRandom",
            Yg);
        hI("getTimestamp", Zg);
        hI("getTimestampMillis", Zg);
        hI("getType", $g);
        hI("makeInteger", bh);
        hI("makeNumber", ch);
        hI("makeString", dh);
        hI("makeTableMap", eh);
        hI("mock", hh);
        hI("fromBase64", $D, !("atob" in H));
        hI("localStorage", rH, !qH());
        hI("toBase64", cI, !("btoa" in H));
        a(iz);
        a(Dz);
        a(Pz);
        a(Wz);
        a(aA);
        a(pA);
        a(yA);
        a(BA);
        a(EA);
        a(FA);
        a(GA);
        a(HA);
        a(JA);
        a(LA);
        a(MA);
        a(OA);
        a(QA);
        a(SA);
        a(TA);
        a(UA);
        a(VA);
        a(ZA);
        a(gB);
        a(hB);
        a(sB);
        a(xB);
        a(CB);
        a(LB);
        a(QB);
        a(cC);
        a(eC);
        a(sC);
        a(tC);
        a(vC);
        a(YD);
        a(ZD);
        a(dE);
        a(eE);
        a(fE);
        a(gE);
        a(hE);
        a(iE);
        a(jE);
        a(kE);
        a(lE);
        a(mE);
        a(oE);
        a(pE);
        a(qE);
        a(uE);
        a(vE);
        a(XG);
        a(bH);
        a(kH);
        a(mH);
        a(nH);
        a(pH);
        a(nA);
        a(tH);
        a(uH);
        a(wH);
        a(xH);
        a(AH);
        a(CH);
        a(DH);
        a(FH);
        a(GH);
        a(HH);
        a(JH);
        a(LH);
        a(MH);
        a(OH);
        a(PH);
        a(RH);
        a(SH);
        a(TH);
        a(VH);
        a(WH);
        a(YH);
        a(ZH);
        a(bI);
        a(dI);
        a(eI);
        iI("internal.CrossContainerSchema", RA());
        iI("internal.GtagSchema", YG());
        hI("mockObject", ih);
        return jI()
    };
    var dz;

    function lI() {
        dz.j.j.H = function(a, b, c) {
            ji.SANDBOXED_JS_SEMAPHORE = ji.SANDBOXED_JS_SEMAPHORE || 0;
            ji.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                ji.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function mI(a) {
        a && G(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                yi[e] = yi[e] || [];
                yi[e].push(b)
            }
        })
    };
    var nI = encodeURI,
        Y = encodeURIComponent,
        oI = Array.isArray,
        pI = function(a, b, c) {
            Gc(a, b, c)
        },
        qI = function(a, b) {
            if (!a) return !1;
            var c = Ui($i(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    f > 0 && e.charAt(0) != "." && (f--, e = "." + e);
                    if (f >= 0 && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        rI = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] &&
                a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var AI = H.clearTimeout,
        BI = H.setTimeout,
        CI = function(a, b, c) {
            if (Vn()) {
                b && J(b)
            } else return Dc(a, b, c)
        },
        DI = function() {
            return H.location.href
        },
        EI = function(a, b) {
            return Ii(a, b || 2)
        },
        FI = function(a, b) {
            H[a] = b
        },
        GI = function(a, b, c) {
            b && (H[a] === void 0 || c && !H[a]) && (H[a] = b);
            return H[a]
        },
        HI = function(a, b) {
            if (Vn()) {
                b && J(b)
            } else Fc(a, b)
        };
    var II = {};
    var Z = {
        securityGroups: {}
    };
    Z.securityGroups.f = ["google"], Z.__f = function(a) {
        var b = EI("gtm.referrer", 1) || I.referrer;
        return b ? a.vtp_component && a.vtp_component != "URL" ? Ui($i(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Xi($i(String(b))) : String(b)
    }, Z.__f.C = "f", Z.__f.isVendorTemplate = !0, Z.__f.priorityOverride = 0, Z.__f.isInfrastructure = !0, Z.__f.runInSiloedMode = !1;

    Z.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.C = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !0;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : EI("gtm.url", 1)) || DI();
                var d = b[a("vtp_component")];
                if (!d || d == "URL") return Xi($i(String(c)));
                var e = $i(String(c)),
                    f;
                if (d === "QUERY") a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;n = g ? Array.isArray(k) ? k : String(k).replace(/\s+/g, "").split(",") : [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Ui(e, "QUERY", void 0, void 0, n[p]);
                        if (q != void 0 && (!m || q !== "")) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Ui(e, d, d == "HOST" ? b[a("vtp_stripWww")] : void 0, d == "PATH" ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();

    Z.securityGroups.read_event_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_event_data = b;
                Z.__read_event_data.C = "read_event_data";
                Z.__read_event_data.isVendorTemplate = !0;
                Z.__read_event_data.priorityOverride = 0;
                Z.__read_event_data.isInfrastructure = !1;
                Z.__read_event_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_eventDataAccess,
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (g != null && !z(g)) throw e(f, {
                            key: g
                        }, "Key must be a string.");
                        if (c !== "any") {
                            try {
                                if (c === "specific" && g != null && mg(g, d)) return
                            } catch (k) {
                                throw e(f, {
                                    key: g
                                }, "Invalid key filter.");
                            }
                            throw e(f, {
                                key: g
                            }, "Prohibited read from event data.");
                        }
                    },
                    N: a
                }
            })
        }();

















    var JI = {};
    JI.dataLayer = Ji;
    JI.callback = function(a) {
        xi.hasOwnProperty(a) && pb(xi[a]) && xi[a]();
        delete xi[a]
    };
    JI.bootstrap = 0;
    JI._spx = !1;

    function KI() {
        ji[Nj()] = ji[Nj()] || JI;
        Xj();
        bk() || G(ck(), function(d, e) {
            bw(d, e.transportUrl, e.context);
            P(92)
        });
        Fb(yi, Z.securityGroups);
        var a = Rj(Sj()),
            b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        c !== 2 && c !== 4 && c !== 3 || P(142);
        vf = Mf
    }
    (function(a) {
        function b() {
            n = I.documentElement.getAttribute("data-tag-assistant-present");
            oy(n) && (m = k.Xi)
        }

        function c() {
            m && wc ? g(m) : a()
        }
        if (!H["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (I.referrer) {
                var e = $i(I.referrer);
                d = Wi(e, "host") === "cct.google"
            }
            if (!d) {
                var f = ho("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (H["__TAGGY_INSTALLED"] = !0, Dc("https://cct.google/taggy/agent.js"))
        }
        var g = function(u) {
                var v = "GTM",
                    w = "GTM";
                oi && (v = "OGT", w = "GTAG");
                var x = H["google.tagmanager.debugui2.queue"];
                x || (x = [], H["google.tagmanager.debugui2.queue"] = x, Dc("https://" + ii.Ed + "/debug/bootstrap?id=" + Sf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + Xn()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: wc,
                        containerProduct: v,
                        debug: !1,
                        id: Sf.ctid,
                        targetRef: {
                            ctid: Sf.ctid,
                            isDestination: Gj.fe
                        },
                        aliases: Jj(),
                        destinations: Mj()
                    }
                };
                y.data.resume = function() {
                    a()
                };
                ii.mk && (y.data.initialPublish = !0);
                x.push(y)
            },
            k = {
                Gk: 1,
                Zi: 2,
                pj: 3,
                di: 4,
                Xi: 5
            };
        k[k.Gk] = "GTM_DEBUG_LEGACY_PARAM";
        k[k.Zi] = "GTM_DEBUG_PARAM";
        k[k.pj] = "REFERRER";
        k[k.di] = "COOKIE";
        k[k.Xi] = "EXTENSION_PARAM";
        var m = void 0,
            n = void 0,
            p = Ui(H.location, "query", !1, void 0, "gtm_debug");
        oy(p) && (m = k.Zi);
        if (!m && I.referrer) {
            var q = $i(I.referrer);
            Wi(q, "host") === "tagassistant.google.com" && (m = k.pj)
        }
        if (!m) {
            var r = ho("__TAG_ASSISTANT");
            r.length && r[0].length && (m = k.di)
        }
        m || b();
        if (!m && py(n)) {
            var t = !1;
            Hc(I, "TADebugSignal", function() {
                t || (t = !0, b(), c())
            }, !1);
            H.setTimeout(function() {
                t || (t = !0, b(), c())
            }, 200)
        } else c()
    })(function() {
        try {
            Vj();
            if (W(64)) {}
            Ik().D();
            yn();
            il();
            var a = Pj();
            if (Cj().canonical[a]) {
                var b = ji.zones;
                b && b.unregisterChild(Ij());
                Ov().removeExternalRestrictions(Pj());
            } else {
                a: {}
                Bi.j =
                "0";Bi.D = Bi.H;Bi.K = "";Bi.Z = "ad_storage|analytics_storage|ad_user_data|ad_personalization";Bi.R = "ad_storage|analytics_storage|ad_user_data";Bi.Qa = "";Zv();
                for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) lf.push(d[e]);
                for (var f = c.tags || [], g = 0; g < f.length; g++) of .push(f[g]);
                for (var k = c.predicates || [], m = 0; m < k.length; m++) nf.push(k[m]);
                for (var n = c.rules || [], p = 0; p < n.length; p++) {
                    for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
                        var u = q[t][0];
                        r[u] = Array.prototype.slice.call(q[t], 1);
                        u !== "if" && u !== "unless" || uf(r[u])
                    }
                    mf.push(r)
                }
                qf = Z;rf = Uy;Of = new Vf;
                var v = data.sandboxed_scripts,
                    w = data.security_groups;a: {
                    var x = data.runtime || [],
                        y = data.runtime_lines;dz = new Fe;lI();kf = cz();
                    var B = dz,
                        A = kI(),
                        C = new bd("require",
                            A);C.La();B.j.j.set("require", C);
                    for (var E = [], D = 0; D < x.length; D++) {
                        var F = x[D];
                        if (!Array.isArray(F) || F.length < 3) {
                            if (F.length === 0) continue;
                            break a
                        }
                        y && y[D] && y[D].length && Ff(F, y[D]);
                        try {
                            dz.execute(F), W(73) && uj && F[0] === 50 && E.push(F[1])
                        } catch (Kn) {}
                    }
                    W(73) && (wf = E)
                }
                if (v && v.length)
                    for (var M = ["sandboxedScripts"], L = 0; L < v.length; L++) {
                        var S = v[L].replace(/^_*/, "");
                        yi[S] = M
                    }
                mI(w);KI();
                if (!si)
                    for (var V = xk() ? Di(Bi.R) : Di(Bi.Z), ca = 0; ca < Wk.length; ca++) {
                        var ba = Wk[ca],
                            R = ba,
                            oa = V[ba] ? "granted" : "denied";
                        Ck().implicit(R, oa)
                    }
                ny();
                fw = !1;gw = 0;
                if (I.readyState === "interactive" && !I.createEventObject || I.readyState === "complete") iw();
                else {
                    Hc(I, "DOMContentLoaded", iw);
                    Hc(I, "readystatechange", iw);
                    if (I.createEventObject && I.documentElement.doScroll) {
                        var ma = !0;
                        try {
                            ma = !H.frameElement
                        } catch (Kn) {}
                        ma && jw()
                    }
                    Hc(H, "load", iw)
                }
                Tx = !1;I.readyState === "complete" ? Vx() : Hc(H, "load", Vx);uj && (Wl(im),
                    H.setInterval(hm, 864E5), Wl(Xy), Wl(Jw), Wl(Bu), Wl(lm), Wl(Uw), Wl(mt), W(73) && (Wl(Ow), Wl(Pw), Wl(Qw)), W(61) && (Wl(Yy), Wl($y)));
                if (vj) {
                    rk();
                    Cl();
                    ew();
                    var ya;
                    var Ja = Rj(Sj());
                    if (Ja) {
                        for (; Ja.parent;) {
                            var Da = Rj(Ja.parent);
                            if (!Da) break;
                            Ja = Da
                        }
                        ya = Ja
                    } else ya = void 0;
                    var Ga = ya;
                    if (!Ga) P(144);
                    else if (Ga.canonicalContainerId) {
                        var Ya;
                        a: {
                            if (Ga.scriptSource) {
                                var Uc;
                                try {
                                    var ae;
                                    Uc = (ae = Vc()) == null ? void 0 : ae.getEntriesByType("resource")
                                } catch (Kn) {}
                                if (Uc) {
                                    for (var Ie = {}, Dj = 0; Dj < Uc.length; ++Dj) {
                                        var lx = Uc[Dj],
                                            Ln = lx.initiatorType;
                                        if (Ln === "script" && lx.name === Ga.scriptSource) {
                                            Ya = {
                                                Fm: Dj,
                                                Gm: Ie
                                            };
                                            break a
                                        }
                                        Ie[Ln] = 1 + (Ie[Ln] || 0)
                                    }
                                    P(146)
                                } else P(145)
                            }
                            Ya = void 0
                        }
                        var Mn = Ya;
                        Mn && (jk("rtg", String(Ga.canonicalContainerId)), jk("rlo", String(Mn.Fm)), jk("slo", String(Mn.Gm.script || "0")), W(68) && (jk("hlo", Ga.htmlLoadOrder || zj(Ga)), jk("lst", String(Ga.loadScriptType || Aj(Ga)))))
                    }
                    var Nn;
                    var Ej = Qj();
                    if (Ej) {
                        var mx;
                        Nn = Ej.canonicalContainerId || "_" + (Ej.scriptContainerId || ((mx = Ej.destinations) == null ? void 0 : mx[0]))
                    } else Nn = void 0;
                    var nx = Nn;
                    nx && jk("pcid", nx);
                    W(30) &&
                        (jk("bt", String(Bi.H ? 2 : qi ? 1 : 0)), jk("ct", String(Bi.H ? 0 : qi ? 1 : Vn() ? 2 : 3)))
                }
                Ky();sk(1);lA();wi = Cb();JI.bootstrap = wi;
                if (W(64)) {}
            }
        } catch (Kn) {
            if (sk(4),
                uj) {
                var LI = cm(!0, !0);
                Gc(LI)
            }
        }
    });

})()