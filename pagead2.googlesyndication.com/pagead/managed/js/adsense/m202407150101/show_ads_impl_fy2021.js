(function(sttc) {
    'use strict';
    var r, aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
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
        ia = {};

    function ja(a, b, c) {
        if (!c || a != null) {
            c = ia[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ka(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ea ? f = ea : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var h = d[e];
                if (!(h in f)) break a;
                f = f[h]
            }
            d = d[d.length - 1];c = da && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ia[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ia[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var ma = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (da && typeof Object.setPrototypeOf == "function") oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function ta(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Nj = b.prototype
    }
    ka("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    ka("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    ka("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        ta(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ka("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ea.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var u = this || self;

    function ua(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = u, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function wa(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function xa(a) {
        var b = wa(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }

    function za(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function Aa(a) {
        return Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba] || (a[Ba] = ++Da)
    }
    var Ba = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Da = 0;

    function Ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Fa(a, b, c) {
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

    function Ga(a, b, c) {
        Ga = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ea : Fa;
        return Ga.apply(null, arguments)
    }

    function Ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ia(a, b, c) {
        a = a.split(".");
        c = c || u;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ja(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Nj = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.lo = function(d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    }

    function La(a) {
        return a
    };
    var Ma = {
        en: 0,
        dn: 1,
        cn: 2
    };

    function Na(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Na);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    Ja(Na, Error);
    Na.prototype.name = "CustomError";
    var Oa;

    function Pa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Na.call(this, c + a[d])
    }
    Ja(Pa, Na);
    Pa.prototype.name = "AssertionError";

    function Qa(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ra(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Sa(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Ta(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let h = 0; h < c; h++)
            if (h in f) {
                const k = f[h];
                b.call(void 0, k, h, a) && (d[e++] = k)
            }
        return d
    }

    function Ua(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Va(a, b, c) {
        let d = c;
        Ra(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Wa(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ya(a, b) {
        return Qa(a, b) >= 0
    }

    function Za(a, b) {
        b = Qa(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function bb(a, b) {
        let c = 0;
        Sa(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function cb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function db(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function eb(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (xa(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let h = 0; h < f; h++) a[e + h] = d[h]
            } else a.push(d)
        }
    }

    function fb(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function gb(a, b, c) {
        c = c || hb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const h = d + (e - d >>> 1);
            let k;
            k = c(b, a[h]);
            k > 0 ? d = h + 1 : (e = h, f = !k)
        }
        return f ? d : -d - 1
    }

    function ib(a, b) {
        if (!xa(a) || !xa(b) || a.length != b.length) return !1;
        const c = a.length,
            d = jb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function hb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function jb(a, b) {
        return a === b
    }

    function kb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = kb.apply(null, fb(d, e, e + 8192));
                    for (let h = 0; h < f.length; h++) b.push(f[h])
                } else b.push(d)
        }
        return b
    }

    function lb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var mb = {
        ak: "google_adtest",
        ek: "google_ad_client",
        nk: "google_ad_intent_query",
        mk: "google_ad_intent_qetid",
        lk: "google_ad_intent_eids",
        fk: "google_ad_format",
        hk: "google_ad_height",
        zk: "google_ad_width",
        pk: "google_ad_layout",
        qk: "google_ad_layout_key",
        rk: "google_ad_output",
        sk: "google_ad_region",
        vk: "google_ad_slot",
        xk: "google_ad_type",
        yk: "google_ad_url",
        Tk: "google_analytics_domain_name",
        Uk: "google_analytics_uacct",
        kl: "google_container_id",
        zl: "google_gl",
        Tl: "google_enable_ose",
        dm: "google_full_width_responsive",
        hn: "google_rl_filtering",
        gn: "google_rl_mode",
        jn: "google_rt",
        fn: "google_rl_dest_url",
        Km: "google_max_radlink_len",
        Qm: "google_num_radlinks",
        Rm: "google_num_radlinks_per_unit",
        dk: "google_ad_channel",
        Jm: "google_max_num_ads",
        Lm: "google_max_responsive_height",
        el: "google_color_border",
        Sl: "google_enable_content_recommendations",
        wl: "google_content_recommendation_ui_type",
        vl: "google_source_type",
        ul: "google_content_recommendation_rows_num",
        rl: "google_content_recommendation_columns_num",
        ql: "google_content_recommendation_ad_positions",
        xl: "google_content_recommendation_use_square_imgs",
        gl: "google_color_link",
        fl: "google_color_line",
        jl: "google_color_url",
        bk: "google_ad_block",
        uk: "google_ad_section",
        ck: "google_ad_callback",
        al: "google_captcha_token",
        il: "google_color_text",
        Lk: "google_alternate_ad_url",
        kk: "google_ad_host_tier_id",
        bl: "google_city",
        ik: "google_ad_host",
        jk: "google_ad_host_channel",
        Mk: "google_alternate_color",
        dl: "google_color_bg",
        Ul: "google_encoding",
        bm: "google_font_face",
        Cl: "google_cust_ch",
        Fl: "google_cust_job",
        El: "google_cust_interests",
        Dl: "google_cust_id",
        Gl: "google_cust_u_url",
        fm: "google_hints",
        vm: "google_image_size",
        Mm: "google_mtl",
        Nn: "google_cpm",
        ml: "google_contents",
        Om: "google_native_settings_key",
        yl: "google_country",
        Fn: "google_targeting",
        cm: "google_font_size",
        Jl: "google_disable_video_autoplay",
        co: "google_video_product_type",
        bo: "google_video_doc_id",
        ao: "google_cust_gender",
        zn: "google_cust_lh",
        yn: "google_cust_l",
        Mn: "google_tfs",
        Nm: "google_native_ad_template",
        Bm: "google_kw",
        Cn: "google_tag_for_child_directed_treatment",
        Dn: "google_tag_for_under_age_of_consent",
        ln: "google_region",
        Bl: "google_cust_criteria",
        tk: "google_safe",
        Al: "google_ctr_threshold",
        mn: "google_resizing_allowed",
        on: "google_resizing_width",
        nn: "google_resizing_height",
        Zn: "google_cust_age",
        Em: "google_language",
        Cm: "google_kw_type",
        Zm: "google_pucrd",
        Xm: "google_page_url",
        En: "google_tag_partner",
        sn: "google_restrict_data_processing",
        Wj: "google_adbreak_test",
        gk: "google_ad_frequency_hint",
        Yj: "google_admob_interstitial_slot",
        Zj: "google_admob_rewarded_slot",
        Xj: "google_admob_ads_only",
        wk: "google_ad_start_delay_hint",
        Im: "google_max_ad_content_rating",
        bn: "google_ad_public_floor",
        an: "google_ad_private_floor",
        Xn: "google_traffic_source",
        wn: "google_shadow_mode",
        Um: "google_overlays",
        Ym: "google_privacy_treatments",
        An: "google_special_category_data",
        eo: "google_wrap_fullscreen_ad"
    };

    function qb(a, b) {
        this.g = a === rb && b || "";
        this.i = sb
    }
    qb.prototype.toString = function() {
        return this.g
    };

    function tb(a) {
        return a instanceof qb && a.constructor === qb && a.i === sb ? a.g : "type_error:Const"
    }
    var sb = {},
        rb = {};

    function ub() {
        return !1
    }

    function vb() {
        return !0
    }

    function wb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function xb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function zb(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Ab(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Eb(a, b) {
        let c = 0;
        return function(d) {
            u.clearTimeout(c);
            const e = arguments;
            c = u.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Fb(a, b) {
        function c() {
            e = u.setTimeout(d, 63);
            let k = h;
            h = [];
            a.apply(b, k)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            h = [];
        return function(k) {
            h = arguments;
            e ? f = !0 : c()
        }
    };
    var Gb = {
            passive: !0
        },
        Hb = zb(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                u.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ib(a) {
        return a ? a.passive && Hb() ? a : a.capture || !1 : !1
    }

    function Jb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Ib(d)), !0) : !1
    }

    function Lb(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Ib(d)), !0) : !1
    };
    const Mb = ua(1, !0);
    var Nb = ua(610401301, !1),
        Ob = ua(188588736, Mb),
        Pb = ua(645172343, Mb);

    function Rb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Sb(a) {
        if (!Tb.test(a)) return a;
        a.indexOf("&") != -1 && (a = a.replace(Ub, "&amp;"));
        a.indexOf("<") != -1 && (a = a.replace(Vb, "&lt;"));
        a.indexOf(">") != -1 && (a = a.replace(Wb, "&gt;"));
        a.indexOf('"') != -1 && (a = a.replace(Xb, "&quot;"));
        a.indexOf("'") != -1 && (a = a.replace(Yb, "&#39;"));
        a.indexOf("\x00") != -1 && (a = a.replace(Zb, "&#0;"));
        return a
    }
    var Ub = /&/g,
        Vb = /</g,
        Wb = />/g,
        Xb = /"/g,
        Yb = /'/g,
        Zb = /\x00/g,
        Tb = /[\x00&<>"']/;

    function $b(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };

    function ac() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var bc;
    const cc = u.navigator;
    bc = cc ? cc.userAgentData || null : null;

    function dc(a) {
        return Nb ? bc ? bc.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function v(a) {
        return ac().indexOf(a) != -1
    };

    function ec() {
        return Nb ? !!bc && bc.brands.length > 0 : !1
    }

    function fc() {
        return ec() ? !1 : v("Opera")
    }

    function gc() {
        return ec() ? !1 : v("Trident") || v("MSIE")
    }

    function hc() {
        return v("Firefox") || v("FxiOS")
    }

    function ic() {
        return v("Safari") && !(lc() || (ec() ? 0 : v("Coast")) || fc() || (ec() ? 0 : v("Edge")) || (ec() ? dc("Microsoft Edge") : v("Edg/")) || (ec() ? dc("Opera") : v("OPR")) || hc() || v("Silk") || v("Android"))
    }

    function lc() {
        return ec() ? dc("Chromium") : (v("Chrome") || v("CriOS")) && !(ec() ? 0 : v("Edge")) || v("Silk")
    }

    function mc() {
        return v("Android") && !(lc() || hc() || fc() || v("Silk"))
    };

    function nc(a) {
        nc[" "](a);
        return a
    }
    nc[" "] = function() {};

    function oc(a, b) {
        try {
            return nc(a[b]), !0
        } catch (c) {}
        return !1
    };
    var pc = gc(),
        qc = v("Edge") || pc,
        rc = v("Gecko") && !($b(ac(), "WebKit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
        sc = $b(ac(), "WebKit") && !v("Edge");

    function tc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function uc(a) {
        var b = vc;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function wc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function xc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const yc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function zc(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < yc.length; f++) c = yc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ac = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Bc;

    function Gc() {
        if (Bc === void 0) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: La,
                        createScript: La,
                        createScriptURL: La
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                Bc = a
            } else Bc = a
        }
        return Bc
    };
    var Hc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function Ic(a, b) {
        a = Jc.exec(Kc(a).toString());
        var c = a[3] || "";
        return Lc(a[1] + Mc("?", a[2] || "", b) + Mc("#", c))
    }

    function Kc(a) {
        return a instanceof Hc && a.constructor === Hc ? a.g : "type_error:TrustedResourceUrl"
    }

    function Nc(a, b) {
        var c = tb(a);
        if (!Oc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Pc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof qb ? tb(d) : encodeURIComponent(String(d))
        });
        return Lc(a)
    }
    var Pc = /%{(\w+)}/g,
        Oc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Jc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;

    function Qc(a, b) {
        return Ic(Nc(new qb(rb, "https://fundingchoicesmessages.google.com/i/%{id}"), a), b)
    }
    var Rc = {};

    function Lc(a) {
        const b = Gc();
        a = b ? b.createScriptURL(a) : a;
        return new Hc(a, Rc)
    }

    function Mc(a, b, c) {
        if (c == null) return b;
        if (typeof c === "string") return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var h = e[f];
                    h != null && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                }
            }
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var Sc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        Tc = new Sc("about:invalid#zClosurez");

    function Uc(a) {
        if (a instanceof Sc) return a.g;
        throw Error("");
    };
    class Xc {
        constructor(a) {
            this.bj = a
        }
    }

    function Yc(a) {
        return new Xc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Zc = [Yc("data"), Yc("http"), Yc("https"), Yc("mailto"), Yc("ftp"), new Xc(a => /^[^:]*([/?#]|$)/.test(a))];

    function $c(a, b = Zc) {
        if (a instanceof Sc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Xc && d.bj(a)) return new Sc(a)
        }
    }

    function ad(a) {
        return $c(a, Zc) || Tc
    }
    var bd = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function cd(a) {
        if (bd.test(a)) return a
    }

    function dd(a) {
        return a instanceof Sc ? Uc(a) : cd(a)
    };
    const ed = {};

    function fd(a) {
        return a instanceof gd && a.constructor === gd ? a.g : "type_error:SafeStyle"
    }
    class gd {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    var hd = new gd("", ed);

    function id(a) {
        if (a instanceof Sc) return 'url("' + a.toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof qb) a = tb(a);
        else {
            a = String(a);
            var b = a.replace(jd, "$1").replace(jd, "$1").replace(kd, "url");
            if (ld.test(b)) {
                if (b = !md.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        e == "'" && c ? b = !b : e == '"' && b && (c = !c)
                    }
                    b = b && c && nd(a)
                }
                a = b ? od(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Pa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function nd(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if (e == "]") {
                if (b) return !1;
                b = !0
            } else if (e == "[") {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const ld = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        kd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        jd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        md = /\/\*/;

    function od(a) {
        return a.replace(kd, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (h, k, l) => {
                f = k;
                return l
            });
            b = ad(d).toString();
            return c + f + b + f + e
        })
    };
    const pd = {};

    function qd(a) {
        return a instanceof rd && a.constructor === rd ? a.g : "type_error:SafeStyleSheet"
    }
    class rd {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    const sd = {};

    function ud(a) {
        return a instanceof vd && a.constructor === vd ? a.g : "type_error:SafeHtml"
    }

    function wd(a) {
        const b = Gc();
        a = b ? b.createHTML(a) : a;
        return new vd(a, sd)
    }

    function xd(a) {
        var b = yd;
        b = b instanceof vd ? b : wd(Sb(String(b)));
        const c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof vd ? e : wd(Sb(String(e))), c.push(ud(e).toString()))
            };
        a.forEach(d);
        return wd(c.join(ud(b).toString()))
    }

    function zd(a) {
        return xd(Array.prototype.slice.call(arguments))
    }
    class vd {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    const Ad = /^[a-zA-Z0-9-]+$/,
        Bd = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Cd = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var yd = new vd(u.trustedTypes && u.trustedTypes.emptyHTML || "", sd);
    var Dd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function Ed(a) {
        return new Dd(a[0].toLowerCase())
    };

    function Fd(a) {
        return new rd(a[0], pd)
    };

    function Gd(a) {
        var b = {};
        if (a instanceof vd) return a;
        a = Hd(String(a));
        b.yo && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.xo && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.zo && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return wd(a)
    }

    function Hd(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function Id(a) {
        const b = Gd("");
        return wd(a.map(c => ud(Gd(c))).join(ud(b).toString()))
    }
    const Jd = /^[a-z][a-z\d-]*$/i,
        Kd = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var Ld = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const Md = ["action", "formaction", "href"];

    function Nd(a, b) {
        if (!Jd.test("body")) throw Error("");
        if (Kd.indexOf("BODY") !== -1) throw Error("");
        let c = "<body";
        a && (c += Od(a));
        Array.isArray(b) || (b = b === void 0 ? [] : [b]);
        Ld.indexOf("BODY") !== -1 ? c += ">" : (a = Id(b.map(d => d instanceof vd ? d : Gd(String(d)))), c += ">" + a.toString() + "</body>");
        return wd(c)
    }

    function Od(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!Jd.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on/i.test(d)) throw Error("");
                Md.indexOf(d.toLowerCase()) !== -1 && (e = e instanceof Sc ? e.toString() : cd(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${Gd(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function Pd(a) {
        const b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function Qd(a, ...b) {
        if (b.length === 0) return Lc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Lc(c)
    }

    function Rd(a) {
        var b = Qd `https://cse.google.com/cse.js`;
        b = Pd(Kc(b).toString());
        let c = b.params,
            d = c.length ? "&" : "?";
        a.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let h = 0; h < e.length; h++) {
                const k = e[h];
                k !== null && k !== void 0 && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(k)), d = "&")
            }
        });
        return Lc(b.path + c + b.hash)
    };

    function Sd(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return new gd(c, ed)
    };
    var Td = zb(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ud(yd);
        return !b.parentElement
    });

    function Ud(a, b) {
        if (Td())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = ud(b)
    }
    var Vd = /^[\w+/_-]+[=]{0,2}$/;

    function Wd(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Xd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Yd(a) {
        return Xd.apply(null, arguments) / arguments.length
    };

    function Zd(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    Zd.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Zd.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Zd.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    Zd.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };

    function ce(a, b) {
        this.width = a;
        this.height = b
    }

    function de(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    r = ce.prototype;
    r.aspectRatio = function() {
        return this.width / this.height
    };
    r.isEmpty = function() {
        return !(this.width * this.height)
    };
    r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    r.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function ee(a) {
        var b = ad("#");
        b = dd(b);
        b !== void 0 && (a.href = b)
    };

    function fe(a, b, c) {
        var d = [Ed `width`, Ed `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof Dd) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function ge(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function he(a, b) {
        a.src = Kc(b);
        (void 0) ? .wo || (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function ie(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function je(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : u.document.createElement("div");
        return a.replace(ke, function(e, f) {
            var h = c[e];
            if (h) return h;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (h = String.fromCharCode(f)));
            if (!h) {
                h = wd(e + " ");
                if (d.nodeType === 1 && (f = d.tagName, f === "SCRIPT" || f === "STYLE")) throw Error("");
                d.innerHTML = ud(h);
                h = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = h
        })
    }
    var ke = /&([^;\s<&]+);?/g;

    function le(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function me(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function ne(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function oe(a) {
        return a ? new pe(qe(a)) : Oa || (Oa = new pe)
    }

    function re(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new ce(a.clientWidth, a.clientHeight)
    }

    function se(a) {
        var b = a.scrollingElement ? a.scrollingElement : sc || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = te(a);
        return new Zd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function te(a) {
        return a.parentWindow || a.defaultView
    }

    function ue(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function ve(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function we(a) {
        var b;
        if (sc && (b = a.parentElement)) return b;
        b = a.parentNode;
        return za(b) && b.nodeType == 1 ? b : null
    }

    function qe(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var xe = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        ye = {
            IMG: " ",
            BR: "\n"
        };

    function ze(a) {
        var b = [];
        Ae(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Ae(a, b, c) {
        if (!(a.nodeName in xe))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ye) b.push(ye[a.nodeName]);
        else
            for (a = a.firstChild; a;) Ae(a, b, c), a = a.nextSibling
    }

    function Be(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Ce(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && Ya(e.className.split(/\s+/), c))
        })
    }

    function Ce(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function pe(a) {
        this.g = a || u.document || document
    }
    r = pe.prototype;
    r.uh = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    r.Vj = pe.prototype.uh;

    function De(a, b) {
        return ue(a.g, b)
    }

    function Ee(a, b) {
        var c = a.g;
        a = ue(c, "DIV");
        Ud(a, b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    r.da = function() {
        return te(this.g)
    };
    r.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    r.Gi = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (c == 1) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], h = arguments[b]; h;) f.unshift(h), h = h.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var k = 1; k < c; k++)
                if (h != d[k][b]) return f;
            f = h
        }
        return f
    };

    function Fe() {
        return Nb && bc ? bc.mobile : !Ge() && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
    }

    function Ge() {
        return Nb && bc ? !bc.mobile && (v("iPad") || v("Android") || v("Silk")) : v("iPad") || v("Android") && !v("Mobile") || v("Silk")
    };
    var He = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ie(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        c < 0 && (c = a.length);
        var d = a.indexOf("?");
        if (d < 0 || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function Je(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Je(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };

    function Ke(a) {
        try {
            return !!a && a.location.href != null && oc(a, "foo")
        } catch {
            return !1
        }
    }

    function Le(a, b = u) {
        b = Me(b);
        let c = 0;
        for (; b && c++ < 40 && !a(b);) b = Me(b)
    }

    function Me(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function Ne(a) {
        return Ke(a.top) ? a.top : null
    }

    function Oe(a, b) {
        const c = Pe("SCRIPT", a);
        he(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Ue(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Ve() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function We(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Xe(a) {
        const b = [];
        We(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ye(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var $e = zb(() => Wa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ze) || Math.random() < 1E-4);
    const Ze = a => ac().indexOf(a) != -1;
    var af = /^([0-9.]+)px$/,
        bf = /^(-?[0-9.]{1,30})$/;

    function cf(a) {
        if (!bf.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function df(a) {
        return (a = af.exec(a)) ? +a[1] : null
    }
    var ef = {
        Ak: "allow-forms",
        Bk: "allow-modals",
        Ck: "allow-orientation-lock",
        Dk: "allow-pointer-lock",
        Ek: "allow-popups",
        Fk: "allow-popups-to-escape-sandbox",
        Gk: "allow-presentation",
        Hk: "allow-same-origin",
        Ik: "allow-scripts",
        Jk: "allow-top-navigation",
        Kk: "allow-top-navigation-by-user-activation"
    };
    const ff = zb(() => Xe(ef));

    function gf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = ff();
        return a.length ? Ta(b, c => !Ya(a, c)) : b
    }

    function hf() {
        const a = Pe("IFRAME"),
            b = {};
        Ra(ff(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var jf = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        kf = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (jf(a, b)) return a;
                if (!(a = Me(a))) break
            }
            return null
        },
        lf = zb(() => Fe() ? 2 : Ge() ? 1 : 0),
        x = (a, b) => {
            We(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        nf = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = mf(a.style.cssText), We(a, b)
        },
        mf = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ra((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d &&
                            e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        of = a => {
            const b = /!\s*important/i;
            nf(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const pf = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        qf = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        rf = /.*domain\.test$/,
        sf = /\.prod\.google\.com(:\d+)?$/;
    var tf = a => pf[a] || qf.test(a) || rf.test(a) || sf.test(a);
    let uf = [];
    const vf = () => {
        const a = uf;
        uf = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var wf = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        xf = (a, b) => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: wf(),
                    configurable: !1
                })
            } catch (c) {
                b && b.ba(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || a <= 0) && b.ba(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        yf = (a, b) => {
            a.document.readyState === "complete" ? (uf.push(b), uf.length == 1 && (window.Promise ? Promise.resolve().then(vf) : window.setImmediate ? setImmediate(vf) : setTimeout(vf, 0))) : a.addEventListener("load", b)
        },
        zf = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Pe(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Af = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, Ke(a) && (b = a);
            return b
        },
        Cf = a => lc() && Fe() ? Bf(a) : 1,
        Bf = a => {
            var b = Ne(a);
            if (!b) return 1;
            a = lf() === 0;
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (d === 0) return 1;
            const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
            return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
        };

    function Df(a) {
        u.setTimeout(() => {
            throw a;
        }, 0)
    };
    mc();
    lc();
    ic();
    var Ef = {},
        Ff = null;

    function Gf(a) {
        var b = 3;
        b === void 0 && (b = 0);
        Hf();
        b = Ef[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var h = a[e],
                k = a[e + 1],
                l = a[e + 2],
                m = b[h >> 2];
            h = b[(h & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = m + h + k + l
        }
        m = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                m = a[e + 1], l = b[(m & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
        }
        return c.join("")
    }

    function If(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Gf(b)
    }

    function Jf(a) {
        var b = [];
        Kf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Kf(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    n = Ff[m];
                if (n != null) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        Hf();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                h = c(64),
                k = c(64);
            if (k === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            h != 64 && (b(f << 4 & 240 | h >> 2), k != 64 && b(h << 6 & 192 | k))
        }
    }

    function Hf() {
        if (!Ff) {
            Ff = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                Ef[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    Ff[f] === void 0 && (Ff[f] = e)
                }
            }
        }
    };

    function Lf(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const Mf = /[-_.]/g,
        Nf = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function Of(a) {
        return Nf[a] || ""
    }

    function Pf(a) {
        return a != null && a instanceof Uint8Array
    }
    var Qf = {},
        Rf = typeof structuredClone != "undefined";
    let Sf;

    function Tf(a) {
        if (a !== Qf) throw Error("illegal external caller");
    }

    function Uf() {
        return Sf || (Sf = new Vf(null, Qf))
    }
    var Vf = class {
        constructor(a, b) {
            Tf(b);
            this.g = a;
            if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return this.g == null
        }
    };
    let Wf = 0,
        Xf = 0;

    function Yf(a) {
        const b = a >>> 0;
        Wf = b;
        Xf = (a - b) / 4294967296 >>> 0
    }

    function Zf(a) {
        if (a < 0) {
            Yf(-a);
            a = Wf;
            var b = Xf;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Wf = c >>> 0;
            Xf = d >>> 0
        } else Yf(a)
    }

    function $f(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function ag() {
        var a = Wf,
            b = Xf,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = $f(a, b);
        return c
    }

    function bg(a) {
        a.length < 16 ? Zf(Number(a)) : (a = BigInt(a), Wf = Number(a & BigInt(4294967295)) >>> 0, Xf = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function cg(a) {
        return Array.prototype.slice.call(a)
    };
    var y = Symbol(),
        dg = Symbol(),
        eg = Symbol(),
        fg = Symbol(),
        gg = Symbol();

    function hg(a) {
        return !!((a[y] | 0) & 2)
    }

    function ig(a) {
        a[y] |= 34;
        return a
    }

    function jg(a) {
        a[y] |= 32;
        return a
    }

    function kg(a, b) {
        b[y] = (a | 0) & -14591
    }

    function lg(a, b) {
        b[y] = (a | 34) & -14557
    };
    var mg = {},
        ng = {};

    function og(a) {
        return !(!a || typeof a !== "object" || a.fj !== ng)
    }

    function pg(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function qg(a, b, c) {
        if (a != null)
            if (typeof a === "string") a = a ? new Vf(a, Qf) : Uf();
            else if (a.constructor !== Vf)
            if (Pf(a)) a = a.length ? new Vf(c ? a : new Uint8Array(a), Qf) : Uf();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }

    function rg(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[y] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[y] = d | 1;
        return !0
    }
    var sg;
    const tg = [];
    tg[y] = 55;
    sg = Object.freeze(tg);

    function ug(a) {
        if (a & 2) throw Error();
    }
    class Ig {
        constructor(a, b, c) {
            this.j = 0;
            this.g = a;
            this.i = b;
            this.l = c
        }
        next() {
            if (this.j < this.g.length) {
                const a = this.g[this.j++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new Ig(this.g, this.i, this.l)
        }
    }
    Object.freeze({});
    Object.freeze({});
    var Jg = Object.freeze({});
    let Kg, Lg;

    function Mg(a) {
        if (Lg) throw Error("");
        Lg = b => {
            u.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function Ng(a) {
        if (Lg) try {
            Lg(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function Og() {
        const a = Error();
        ie(a, "incident");
        Lg ? Ng(a) : Df(a)
    }

    function Pg(a) {
        a = Error(a);
        ie(a, "warning");
        Ng(a);
        return a
    };

    function Qg(a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function Rg(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${wa(a)}: ${a}`);
        return a
    }
    const Sg = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Tg(a) {
        const b = typeof a;
        return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : Sg.test(a)
    }

    function Ug(a) {
        if (!Number.isFinite(a)) throw Pg("enum");
        return a | 0
    }

    function Vg(a) {
        return a == null ? a : Ug(a)
    }

    function Wg(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Xg(a) {
        if (typeof a !== "number") throw Pg("int32");
        if (!Number.isFinite(a)) throw Pg("int32");
        return a | 0
    }

    function Yg(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Zg(a) {
        if (typeof a !== "number") throw Pg("uint32");
        if (!Number.isFinite(a)) throw Pg("uint32");
        return a >>> 0
    }

    function $g(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function ah(a, b) {
        b = !!b;
        if (!Tg(a)) throw Pg("int64");
        return typeof a === "string" ? bh(a) : b ? ch(a) : dh(a)
    }

    function eh(a) {
        return a == null ? a : ah(a)
    }

    function fh(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function gh(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function hh(a) {
        if (a < 0) {
            Zf(a);
            const b = $f(Wf, Xf);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (fh(String(a))) return a;
        Zf(a);
        return Xf * 4294967296 + (Wf >>> 0)
    }

    function dh(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Zf(a);
            var b = Wf,
                c = Xf;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function ch(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                gh(b) ? a = b : (Zf(a), a = ag())
            }
        }
        return a
    }

    function ih(a) {
        a = Math.trunc(a);
        if (a >= 0 && Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                fh(b) ? a = b : (Zf(a), a = $f(Wf, Xf))
            }
        }
        return a
    }

    function bh(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        gh(a) || (bg(a), a = ag());
        return a
    }

    function jh(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        fh(a) || (bg(a), a = $f(Wf, Xf));
        return a
    }

    function kh(a) {
        if (a == null) return a;
        if (Tg(a)) {
            var b;
            typeof a === "number" ? b = dh(a) : b = bh(a);
            return b
        }
    }

    function lh(a, b) {
        b = !!b;
        if (!Tg(a)) throw Pg("uint64");
        typeof a === "string" ? a = jh(a) : b ? a = ih(a) : (a = Math.trunc(a), a = a >= 0 && Number.isSafeInteger(a) ? a : hh(a));
        return a
    }

    function mh(a) {
        return a == null ? a : lh(a)
    }

    function nh(a) {
        if (a == null) return a;
        if (Tg(a)) return typeof a === "string" ? jh(a) : ih(a)
    }

    function oh(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function ph(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function qh(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function rh(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Fd === mg) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? sh(b) : new b : void 0;
        let e = c = a[y] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[y] = e);
        return new b(a)
    }

    function sh(a) {
        var b = a[dg];
        if (b) return b;
        b = new a;
        ig(b.T);
        return a[dg] = b
    }

    function th(a, b, c) {
        return b ? oh(a) : qh(a) ? ? (c ? "" : void 0)
    };
    const uh = {},
        vh = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function wh(a) {
        return a
    }

    function xh(a) {
        if (a.dc & 2) throw Error("Cannot mutate an immutable Map");
    }
    var Bh = class extends vh {
        constructor(a, b, c = wh, d = wh) {
            super();
            let e = a[y] | 0;
            e |= 64;
            this.dc = a[y] = e;
            this.Yd = b;
            this.zc = c;
            this.xf = this.Yd ? yh : d;
            for (let f = 0; f < a.length; f++) {
                const h = a[f],
                    k = c(h[0], !1, !0);
                let l = h[1];
                b ? l === void 0 && (l = null) : l = d(h[1], !1, !0, void 0, void 0, e);
                super.set(k, l)
            }
        }
        tf(a = zh) {
            if (this.size !== 0) return this.sf(a)
        }
        sf(a = zh) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            xh(this);
            super.clear()
        }
        delete(a) {
            xh(this);
            return super.delete(this.zc(a, !0, !1))
        }
        entries() {
            var a = this.yg();
            return new Ig(a, Ah, this)
        }
        keys() {
            return this.cj()
        }
        values() {
            var a = this.yg();
            return new Ig(a, Bh.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            xh(this);
            a = this.zc(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.xf(b, !0, !0, this.Yd, !1, this.dc))
        }
        has(a) {
            return super.has(this.zc(a, !1, !1))
        }
        get(a) {
            a = this.zc(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.Yd;
                return c ? (c = this.xf(b, !1, !0, c, this.Uh,
                    this.dc), c !== b && super.set(a, c), c) : b
            }
        }
        yg() {
            return Array.from(super.keys())
        }
        cj() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    Bh.prototype.toJSON = void 0;
    Bh.prototype.fj = ng;

    function yh(a, b, c, d, e, f) {
        a = rh(a, d, c, f);
        e && (a = Ch(a));
        return a
    }

    function zh(a) {
        return a
    }

    function Ah(a) {
        return [a, this.get(a)]
    }
    let Dh;

    function Eh() {
        return Dh || (Dh = new Bh(ig([]), void 0, void 0, void 0, uh))
    };
    let Fh;

    function Gh(a, b) {
        Fh = b;
        a = new a(b);
        Fh = void 0;
        return a
    };

    function Hh(a, b) {
        return Ih(b)
    }

    function Ih(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (rg(a, void 0, 0)) return
                    } else {
                        if (Pf(a)) return Lf(a);
                        if (a instanceof Vf) {
                            const b = a.g;
                            return b == null ? "" : typeof b === "string" ? b : a.g = Lf(b)
                        }
                        if (a instanceof Bh) return a.tf()
                    }
        }
        return a
    };

    function Jh(a, b, c) {
        a = cg(a);
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

    function Kh(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = rg(a, void 0, 0) ? void 0 : e && (a[y] | 0) & 2 ? a : Lh(a, b, c, d !== void 0, e);
            else if (pg(a)) {
                const f = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (f[h] = Kh(a[h], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Lh(a, b, c, d, e) {
        const f = d || c ? a[y] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = cg(a);
        for (let h = 0; h < a.length; h++) a[h] = Kh(a[h], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Mh(a) {
        return Kh(a, Nh, void 0, void 0, !1)
    }

    function Nh(a) {
        a.Fd === mg ? a = a.toJSON() : a instanceof Vf ? (a = a.g || "", a = typeof a === "string" ? a : new Uint8Array(a)) : a = Pf(a) ? new Uint8Array(a) : a instanceof Bh ? a.tf(Mh) : a;
        return a
    }

    function Oh(a) {
        return Kh(a, Ph, void 0, void 0, !1)
    }

    function Ph(a) {
        return a.Fd === mg ? a.toJSON() : a instanceof Bh ? a.tf(Oh) : Ih(a)
    }
    var Qh = Rf ? structuredClone : a => Lh(a, Nh, void 0, void 0, !1);

    function Rh(a, b, c = lg) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[y] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[y] = (d | 34) & -12293, a) : Lh(a, Rh, d & 4 ? lg : c, !0, !0)
            }
            a.Fd === mg ? (c = a.T, d = c[y], a = d & 2 ? a : Gh(a.constructor, Sh(c, d, !0))) : a instanceof Bh && !(a.dc & 2) && (c = ig(a.sf(Rh)), a = new Bh(c, a.Yd, a.zc, a.xf));
            return a
        }
    }

    function Th(a) {
        const b = a.T;
        return Gh(a.constructor, Sh(b, b[y], !1))
    }

    function Sh(a, b, c) {
        const d = c || b & 2 ? lg : kg,
            e = !!(b & 32);
        a = Jh(a, b, f => Rh(f, e, d));
        a[y] = a[y] | 32 | (c ? 2 : 0);
        return a
    }

    function Ch(a) {
        const b = a.T,
            c = b[y];
        return c & 2 ? Gh(a.constructor, Sh(b, c, !1)) : a
    };

    function Uh(a) {
        if (typeof Proxy !== "function") return a;
        let b = Vh ? .get(a);
        if (b) return b;
        b = new Proxy(a, {
            set(c, d, e) {
                Wh();
                c[d] = e;
                return !0
            }
        });
        Xh(a, b);
        return b
    }

    function Wh() {
        Og()
    }
    let Vh = void 0,
        Yh = void 0;

    function Xh(a, b) {
        (Vh || (Vh = new WeakMap)).set(a, b);
        (Yh || (Yh = new WeakMap)).set(b, a)
    };

    function Zh(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[fg] = (a.constructor[fg] | 0) + 1) < 5 && Og();
        return c === 0 ? !1 : !(c & b)
    }

    function $h(a, b) {
        a = a.T;
        return ai(a, a[y], b)
    }

    function bi(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function ai(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (bi(a, b, e, c) && eg != null && (a = Kg ? ? (Kg = {}), b = a[eg] || 0, b >= 4 || (a[eg] = b + 1, Og())), d) : bi(a, b, e, c)
        }
    }

    function ci(a, b, c) {
        const d = a.T;
        let e = d[y];
        ug(e);
        di(d, e, b, c);
        return a
    }

    function di(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Pb) {
            let h = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return h;
                e = a[f + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && (a[y] = h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function ei(a, b, c) {
        return fi(a, b, c, !1) !== void 0
    }

    function gi(a, b, c, d) {
        var e = b & 2;
        let f = ai(a, b, c, d);
        Array.isArray(f) || (f = sg);
        const h = !!(b & 32);
        let k = f[y] | 0;
        k === 0 && h && !e ? (k |= 33, f[y] = k) : k & 1 || (k |= 1, f[y] = k);
        if (e) k & 2 || ig(f), Object.freeze(f);
        else if (2 & k || 2048 & k) f = cg(f), e = 1, h && (e |= 32), f[y] = e, di(a, b, c, f, d);
        return f
    }

    function hi(a, b) {
        a = a.T;
        let c = a[y];
        const d = ai(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && di(a, c, b, e);
        return e
    }

    function ii(a, b, c, d) {
        const e = a.T;
        var f = e[y];
        const h = 2 & f ? 1 : 2;
        let k = ji(e, f, b);
        var l = k[y] | 0;
        if (Zh(a, l, d, !1)) {
            if (4 & l || Object.isFrozen(k)) k = cg(k), l = ki(l, f), f = di(e, f, b, k);
            let n = a = 0;
            for (; a < k.length; a++) {
                const p = c(k[a]);
                p != null && (k[n++] = p)
            }
            n < a && (k.length = n);
            l = li(l, f);
            l = (l | 20) & -4097;
            l &= -8193;
            d && (l |= d);
            k[y] = l;
            2 & l && Object.freeze(k)
        }
        let m;
        h === 1 || h === 4 && 32 & l ? mi(l) || (f = l, l |= 2, l !== f && (k[y] = l), Object.freeze(k)) : (d = h !== 5 ? !1 : !!(32 & l) || mi(l) || !!Vh ? .get(k), (h === 2 || d) && mi(l) && (k = cg(k), l = ki(l, f), l = ni(l, f, !1), k[y] = l, f =
            di(e, f, b, k)), mi(l) || (b = l, l = ni(l, f, !1), l !== b && (k[y] = l)), d && (m = Uh(k)));
        return m || k
    }

    function ji(a, b, c, d) {
        a = ai(a, b, c, d);
        return Array.isArray(a) ? a : sg
    }

    function li(a, b) {
        a === 0 && (a = ki(a, b));
        return a | 1
    }

    function mi(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function oi(a) {
        var b = pi,
            c = a.T;
        const d = c[y];
        var e = ai(c, d, 14);
        a = d & 2;
        a: {
            var f = e,
                h = d & 2;e = !1;
            if (f == null) {
                if (h) {
                    c = Eh();
                    break a
                }
                f = []
            } else if (f.constructor === Bh) {
                if ((f.dc & 2) == 0 || h) {
                    c = f;
                    break a
                }
                f = f.sf()
            } else Array.isArray(f) ? e = hg(f) : f = [];
            if (h) {
                if (!f.length) {
                    c = Eh();
                    break a
                }
                e || (e = !0, ig(f))
            } else if (e) {
                e = !1;
                h = cg(f);
                for (f = 0; f < h.length; f++) {
                    const k = h[f] = cg(h[f]);
                    Array.isArray(k[1]) && (k[1] = ig(k[1]))
                }
                f = h
            }
            e || ((f[y] | 0) & 64 ? f[y] &= -33 : 32 & d && jg(f));e = new Bh(f, b, th, void 0);di(c, d, 14, e, !1);c = e
        }!a && b && (c.Uh = !0);
        return c
    }

    function qi(a, b, c, d) {
        const e = a.T;
        let f = e[y];
        ug(f);
        if (c == null) return di(e, f, b), a;
        c = Yh ? .get(c) || c;
        let h = c[y] | 0,
            k = h;
        var l = !!(2 & h) || Object.isFrozen(c);
        const m = !l && (void 0 === Jg || !1);
        if (Zh(a, h))
            for (h = 21, l && (c = cg(c), k = 0, h = ki(h, f), h = ni(h, f, !0)), l = 0; l < c.length; l++) c[l] = d(c[l]);
        m && (c = cg(c), k = 0, h = ki(h, f), h = ni(h, f, !0));
        h !== k && (c[y] = h);
        di(e, f, b, c);
        return a
    }

    function ri(a, b, c, d) {
        const e = a.T;
        let f = e[y];
        ug(f);
        di(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function si(a, b) {
        var c = a.T,
            d = c[y] | 0;
        ug(a.T[y]);
        c = gi(c, d, 3, !1);
        d = c[y] | 0;
        d = !!(4 & d) && !!(4096 & d);
        if (Array.isArray(b))
            for (var e = 0; e < b.length; e++) c.push(ah(b[e], d));
        else
            for (e of b) c.push(ah(e, d));
        return a
    }

    function ti(a, b, c, d) {
        var e = a.T;
        const f = e[y];
        ug(f);
        b = gi(e, f, b);
        e = b[y] | 0;
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    }

    function ui(a, b, c, d) {
        const e = a.T;
        var f = e[y];
        ug(f);
        if (d == null) {
            var h = vi(e);
            if (wi(h, e, f, c) === b) h.set(c, 0);
            else return a
        } else {
            h = vi(e);
            const k = wi(h, e, f, c);
            k !== b && (k && (f = di(e, f, k)), h.set(c, b))
        }
        di(e, f, b, d);
        return a
    }

    function xi(a, b) {
        a = a.T;
        return wi(vi(a), a, a[y], b)
    }

    function vi(a) {
        return a[gg] ? ? (a[gg] = new Map)
    }

    function wi(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const h = d[f];
            ai(b, c, h) != null && (e !== 0 && (c = di(b, c, e)), e = h)
        }
        a.set(d, e);
        return e
    }

    function fi(a, b, c, d) {
        a = a.T;
        let e = a[y];
        const f = ai(a, e, c, d);
        b = rh(f, b, !1, e);
        b !== f && b != null && di(a, e, c, b, d);
        return b
    }

    function yi(a) {
        var b = zi;
        return (a = fi(a, b, 1, !1)) ? a : sh(b)
    }

    function z(a, b, c) {
        b = fi(a, b, c, !1);
        if (b == null) return b;
        a = a.T;
        let d = a[y];
        if (!(d & 2)) {
            const e = Ch(b);
            e !== b && (b = e, di(a, d, c, b, !1))
        }
        return b
    }

    function Ai(a, b, c, d, e, f, h, k) {
        var l = !!(2 & b);
        e = l ? 1 : e;
        h = !!h;
        k && (k = !l);
        l = ji(a, b, d, f);
        var m = l[y] | 0,
            n = !!(4 & m);
        if (!n) {
            m = li(m, b);
            var p = l,
                q = b;
            const w = !!(2 & m);
            w && (q |= 2);
            let C = !w,
                E = !0,
                F = 0,
                L = 0;
            for (; F < p.length; F++) {
                const G = rh(p[F], c, !1, q);
                if (G instanceof c) {
                    if (!w) {
                        const Z = hg(G.T);
                        C && (C = !Z);
                        E && (E = Z)
                    }
                    p[L++] = G
                }
            }
            L < F && (p.length = L);
            m |= 4;
            m = E ? m | 16 : m & -17;
            m = C ? m | 8 : m & -9;
            p[y] = m;
            w && Object.freeze(p)
        }
        if (k && !(8 & m || !l.length && (e === 1 || e === 4 && 32 & m))) {
            mi(m) && (l = cg(l), m = ki(m, b), b = di(a, b, d, l, f));
            c = l;
            k = m;
            for (p = 0; p < c.length; p++) m = c[p],
                q = Ch(m), m !== q && (c[p] = q);
            k |= 8;
            k = c.length ? k & -17 : k | 16;
            m = c[y] = k
        }
        let t;
        e === 1 || e === 4 && 32 & m ? mi(m) || (b = m, m |= !l.length || 16 & m && (!n || 32 & m) ? 2 : 2048, m !== b && (l[y] = m), Object.freeze(l)) : (n = e !== 5 ? !1 : !!(32 & m) || mi(m) || !!Vh ? .get(l), (e === 2 || n) && mi(m) && (l = cg(l), m = ki(m, b), m = ni(m, b, h), l[y] = m, b = di(a, b, d, l, f)), mi(m) || (a = m, m = ni(m, b, h), m !== a && (l[y] = m)), n && (t = Uh(l)));
        return t || l
    }

    function Bi(a, b, c) {
        a = a.T;
        const d = a[y];
        return Ai(a, d, b, c, 2, void 0, !1, !(2 & d))
    }

    function A(a, b, c) {
        c == null && (c = void 0);
        return ci(a, b, c)
    }

    function B(a, b, c, d) {
        d == null && (d = void 0);
        return ui(a, b, c, d)
    }

    function Ci(a, b, c) {
        const d = a.T;
        let e = d[y];
        ug(e);
        if (c == null) return di(d, e, b), a;
        c = Yh ? .get(c) || c;
        let f = c[y] | 0,
            h = f;
        const k = !!(2 & f) || !!(2048 & f),
            l = k || Object.isFrozen(c),
            m = !l && (void 0 === Jg || !1);
        let n = !0,
            p = !0;
        for (let t = 0; t < c.length; t++) {
            var q = c[t];
            k || (q = hg(q.T), n && (n = !q), p && (p = q))
        }
        k || (f |= 5, f = n ? f | 8 : f & -9, f = p ? f | 16 : f & -17);
        if (m || l && f !== h) c = cg(c), h = 0, f = ki(f, e), f = ni(f, e, !0);
        f !== h && (c[y] = f);
        di(d, e, b, c);
        return a
    }

    function ki(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function ni(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function Di(a, b, c, d, e, f, h) {
        a = a.T;
        const k = a[y];
        ug(k);
        b = Ai(a, k, c, b, 2, f, !0);
        c = d != null ? d : new c;
        if (h && (typeof e !== "number" || e < 0 || e > b.length)) throw Error();
        e != void 0 ? b.splice(e, h, c) : b.push(c);
        b[y] = hg(c.T) ? b[y] & -9 : b[y] & -17
    }

    function Ei(a, b, c, d) {
        Di(a, b, c, d);
        return a
    }

    function Fi(a, b) {
        return a ? ? b
    }

    function Gi(a, b) {
        a = $h(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function Hi(a, b) {
        return Yg($h(a, b))
    }

    function D(a, b) {
        return qh($h(a, b))
    }

    function Ii(a, b) {
        return Wg($h(a, b))
    }

    function H(a, b, c = !1) {
        return Fi(Gi(a, b), c)
    }

    function Ji(a, b) {
        return Fi(Hi(a, b), 0)
    }

    function Ki(a, b) {
        return Fi(kh($h(a, b)), 0)
    }

    function Li(a, b, c = 0) {
        return Fi(hi(a, b), c)
    }

    function I(a, b) {
        return Fi(D(a, b), "")
    }

    function Mi(a, b) {
        return Fi(Ii(a, b), 0)
    }

    function Ni(a, b, c, d) {
        c = xi(a, d) === c ? c : -1;
        return z(a, b, c)
    }

    function Oi(a, b) {
        a = Hi(a, b);
        return a == null ? void 0 : a
    }

    function Pi(a) {
        a = hi(a, 4);
        return a == null ? void 0 : a
    }

    function Qi(a, b) {
        a = Ii(a, b);
        return a == null ? void 0 : a
    }

    function Ri(a, b, c) {
        return ci(a, b, c == null ? c : Rg(c))
    }

    function J(a, b, c) {
        return ri(a, b, c == null ? c : Rg(c), !1)
    }

    function Si(a, b, c) {
        return ci(a, b, c == null ? c : Xg(c))
    }

    function Ti(a, b, c) {
        return ri(a, b, c == null ? c : Xg(c), 0)
    }

    function Ui(a, b, c) {
        return ci(a, b, eh(c))
    }

    function mj(a, b, c) {
        return ri(a, b, eh(c), "0")
    }

    function nj(a, b, c) {
        return ci(a, b, ph(c))
    }

    function oj(a, b, c) {
        return ri(a, b, ph(c), "")
    }

    function K(a, b, c) {
        return ri(a, b, Vg(c), 0)
    };
    let pj;

    function qj(a) {
        try {
            return pj = !0, JSON.stringify(rj(a), Hh)
        } finally {
            pj = !1
        }
    }
    var M = class {
        constructor(a) {
            a: {
                a == null && (a = Fh);Fh = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[y] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, pg(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[y] = b
            }
            this.T = a
        }
        toJSON() {
            return rj(this)
        }
        i() {
            const a = this.T,
                b = a[y];
            return b & 2 ? this : Gh(this.constructor, Sh(a, b, !0))
        }
    };
    M.prototype.Fd = mg;

    function rj(a) {
        var b = pj ? a.T : Lh(a.T, Ph, void 0, void 0, !1);
        var c = !pj;
        var d = Ob ? void 0 : a.constructor.O;
        var e = (c ? a.T : b)[y];
        if (a = b.length) {
            var f = b[a - 1],
                h = pg(f);
            h ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var k = b;
            if (h) {
                b: {
                    var l = f;
                    var m = {};h = !1;
                    if (l)
                        for (var n in l) {
                            if (!Object.prototype.hasOwnProperty.call(l, n)) continue;
                            if (isNaN(+n)) {
                                m[n] = l[n];
                                continue
                            }
                            let t = l[n];
                            Array.isArray(t) && (rg(t, d, +n) || og(t) && t.size === 0) && (t = null);
                            t == null && (h = !0);
                            t != null && (m[n] = t)
                        }
                    if (h) {
                        for (var p in m) break b;
                        m = null
                    } else m = l
                }
                l = m == null ? f != null : m !==
                    f
            }
            for (var q; a > 0; a--) {
                p = a - 1;
                n = k[p];
                p -= e;
                if (!(n == null || rg(n, d, p) || og(n) && n.size === 0)) break;
                q = !0
            }
            if (k !== b || l || q) {
                if (!c) k = Array.prototype.slice.call(k, 0, a);
                else if (q || l || m) k.length = a;
                m && k.push(m)
            }
            b = k
        }
        return b
    }

    function sj(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[y] |= 128;
        return Gh(a, jg(b))
    };

    function tj(a, b) {
        const c = uj;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function vj(a) {
        a.to = !0;
        return a
    }
    let uj = void 0;
    const wj = vj(a => a !== null && a !== void 0);

    function xj(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = Gh(a, jg(b))
            }
            return b
        }
    };
    Qd `https://www.google.com/recaptcha/api2/aframe`;

    function yj(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            he(f, a);
            b.document.readyState !== "complete" ? Jb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function zj(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.Xb}`;
        let c = void 0;
        try {
            c = await Aj(b)
        } catch (h) {}
        if (c) {
            b = a.yc || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.j ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                Ph: c.bg_hash_basename,
                Oh: c.bg_binary,
                dj: a.g + "_" + a.i,
                yc: b,
                Xb: a.Xb,
                wd: d,
                Td: e,
                ud: f
            }
        }
    }
    let Aj = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Bj(a) {
        var b = await zj(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Ph,
                _bgp_: b.Oh,
                _li_: b.dj,
                _jk_: b.yc,
                _st_: b.Xb,
                _rc_: b.wd,
                _dl_: b.Td,
                _g2_: b.ud
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Qd `https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            yj(a)
        }
    };

    function Cj(a, b) {
        return oj(a, 1, b)
    }
    var Dj = class extends M {
        g() {
            return I(this, 1)
        }
    };

    function Ej(a, b) {
        return A(a, 5, b)
    }

    function Fj(a, b) {
        return oj(a, 3, b)
    }

    function Gj(a, b) {
        return J(a, 6, b)
    }
    var Hj = class extends M {
        constructor() {
            super()
        }
    };

    function Ij(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Jj = class {
            constructor(a) {
                this.g = a.i;
                this.i = a.j;
                this.l = a.l;
                this.yc = a.yc;
                this.win = a.da();
                this.Xb = a.Xb;
                this.wd = a.wd;
                this.Td = a.Td;
                this.ud = a.ud;
                this.j = a.g
            }
        },
        Kj = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.l = c;
                this.win = window;
                this.Xb = "env";
                this.wd = "n";
                this.Td = "0";
                this.ud = "1";
                this.g = !0
            }
            da() {
                return this.win
            }
            build() {
                return new Jj(this)
            }
        };

    function Lj(a) {
        var b = new Mj;
        return nj(b, 1, a)
    }
    var Mj = class extends M {
        getValue() {
            return I(this, 1)
        }
        getVersion() {
            return Mi(this, 5)
        }
    };
    var Nj = class extends M {};
    Nj.O = [2, 3, 4];
    var Oj = class extends M {};

    function Pj(a, b, c = null, d = !1, e = !1) {
        Qj(a, b, c, d, e)
    }

    function Qj(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Pe("IMG", a.document);
        if (c || d) {
            const h = k => {
                c && c(k);
                d && Za(a.google_image_requests, f);
                Lb(f, "load", h);
                Lb(f, "error", h)
            };
            Jb(f, "load", h);
            Jb(f, "error", h)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Sj = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            We(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            Rj(c)
        },
        Rj = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Pj(b, a, void 0, !1, !1)
        };
    let Tj = null;
    var Uj = window;
    var Vj = class extends M {
        constructor() {
            super()
        }
    };
    Vj.O = [15];
    var Wj = class extends M {
        constructor() {
            super()
        }
        getCorrelator() {
            return Ki(this, 1)
        }
        setCorrelator(a) {
            return mj(this, 1, a)
        }
    };
    var Xj = class extends M {
        constructor() {
            super()
        }
    };

    function Yj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    r = Yj.prototype;
    r.set = function(a, b, c) {
        let d, e, f, h = !1,
            k;
        typeof c === "object" && (k = c.Wg, h = c.Rd || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Cd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (h ? ";secure" : "") + (k != null ? ";samesite=" + k : "")
    };
    r.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Rb(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };

    function Zj(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Cd: 0,
            path: c,
            domain: d
        })
    }
    r.isEmpty = function() {
        return !this.g.cookie
    };
    r.wc = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    r.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Rb(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) Zj(this, b[a])
    };

    function ak(a, b = window) {
        if (a.g()) try {
            return b.localStorage
        } catch {}
        return null
    }

    function bk(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }
    let ck;

    function dk(a) {
        return ck ? ck : a.origin === "null" ? ck = !1 : ck = ek(a)
    }

    function ek(a) {
        if (!a.navigator.cookieEnabled) return !1;
        const b = new Yj(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            Cd: 60,
            Wg: a.isSecureContext ? "none" : void 0,
            Rd: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        Zj(b, "TESTCOOKIESENABLED");
        return !0
    }

    function fk(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new Yj({
            cookie: b
        })).get(a) || ""
    }

    function gk(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = { ...c,
            Wg: "none",
            Rd: !0
        }), (new Yj(d.document)).set(a, b, c))
    };
    let hk = null,
        ik = null;

    function jk() {
        if (hk != null) return hk;
        hk = !1;
        try {
            const a = Ne(u);
            a && a.location.hash.indexOf("google_logging") !== -1 && (hk = !0);
            bk(u) ? .getItem("google_logging") && (hk = !0)
        } catch (a) {}
        return hk
    }

    function kk() {
        if (ik != null) return ik;
        ik = !1;
        try {
            const a = Ne(u),
                b = bk(u);
            if (a && a.location.hash.indexOf("auto_ads_logging") !== -1 || b && b.getItem("auto_ads_logging")) ik = !0
        } catch (a) {}
        return ik
    }
    var lk = (a, b = []) => {
        let c = !1;
        u.google_logging_queue || (c = !0, u.google_logging_queue = []);
        u.google_logging_queue.push([a, b]);
        c && jk() && Oe(u.document, Qd `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function mk(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    r = mk.prototype;
    r.getWidth = function() {
        return this.right - this.left
    };
    r.getHeight = function() {
        return this.bottom - this.top
    };

    function nk(a) {
        return new mk(a.top, a.right, a.bottom, a.left)
    }
    r.contains = function(a) {
        return this && a ? a instanceof mk ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function ok(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    r.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    r.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    r.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    r.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function pk(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function qk(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new pk(c, e, d - c, a - e)
        }
        return null
    }

    function rk(a, b) {
        var c = qk(a, b);
        if (!c || !c.height || !c.width) return [new pk(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            h = a.top + a.height,
            k = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new pk(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < h && (c.push(new pk(a.left, l, a.width, h - l)), e = l - d);
        b.left > a.left && c.push(new pk(a.left, d, b.left - a.left, e));
        k < f && c.push(new pk(k, d, f - k, e));
        return c
    }
    r = pk.prototype;
    r.contains = function(a) {
        return a instanceof Zd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    r.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    r.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    r.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    r.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    const sk = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function tk(a = u) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function uk(a = tk()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function vk(a = tk()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(sk[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function wk() {
        var a = tk();
        return a && a.initialIntersection
    }

    function xk() {
        const a = wk();
        return a && za(a.rootBounds) ? new ce(a.rootBounds.width, a.rootBounds.height) : null
    }

    function yk(a = tk()) {
        return a ? Ke(a.master) ? a.master : null : null
    }

    function zk(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Za(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = h => {
            if (a.ampInaboxInitialized) h = !0;
            else {
                var k, l = h.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !l && (k = /^amp-(\d{15,20})?/.exec(h.data)) && (a.ampInaboxPendingMessages.push(h), h = k[1], a.ampInaboxInitialized ||
                    h && !/^\d{15,20}$/.test(h) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Oe(a.document, h ? Qd `https://cdn.ampproject.org/rtv/${h}/amp4ads-host-v0.js` : Qd `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                h = !1
            }
            h && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Jb(a, "message", f), d = () => {
            Lb(a, "message", f)
        });
        return e
    };
    var Ak = () => a => {
        a = {
            id: "unsafeurl",
            ctx: 638,
            url: a
        };
        var b = [];
        for (c in a) Je(c, a[c], b);
        var c = Ie("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
        navigator.sendBeacon && navigator.sendBeacon(c, "")
    };

    function Bk(a, b, c) {
        if (typeof b === "string")(b = Ck(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Ck(c, d);
                f && (c.style[f] = e)
            }
    }
    var Dk = {};

    function Ck(a, b) {
        var c = Dk[b];
        if (!c) {
            var d = me(b);
            c = d;
            a.style[d] === void 0 && (d = (sc ? "Webkit" : rc ? "Moz" : pc ? "ms" : null) + ne(d), a.style[d] !== void 0 && (c = d));
            Dk[b] = c
        }
        return c
    }

    function Ek(a, b) {
        var c = a.style[me(b)];
        return typeof c !== "undefined" ? c : a.style[Ck(a, b)] || ""
    }

    function Fk(a, b) {
        var c = qe(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Gk(a, b) {
        return Fk(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Hk(a) {
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

    function Ik(a) {
        var b = qe(a),
            c = new Zd(0, 0);
        if (a == (b ? qe(b) : document).documentElement) return c;
        a = Hk(a);
        b = se(oe(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Jk(a) {
        var b = Kk;
        if (Gk(a, "display") != "none") return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Kk(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = sc && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Hk(a), new ce(a.right - a.left, a.bottom - a.top)) : new ce(b, c)
    };
    var Lk = a => typeof a === "number" && a > 0,
        Nk = (a, b) => {
            a = Mk(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + (c === "?" || c === "#" ? "" : "&") + a
        },
        Mk = a => Object.entries(Ok(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        Ok = a => {
            const b = {};
            We(a, (c, d) => {
                if (c || c === 0 || c === !1) typeof c === "boolean" && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        Pk = () => {
            try {
                return Uj.history.length
            } catch (a) {
                return 0
            }
        },
        Qk = a => {
            a = yk(tk(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        Rk = a => {
            a = a.google_unique_id;
            return typeof a === "number" ?
                a : 0
        },
        Sk = a => {
            let b;
            b = a.nodeType !== 9 && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const h = d[f];
                        if (h.nodeName && h.nodeName.toString().toLowerCase() === c) {
                            if (a === h) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        Tk = () => {
            if (!Uj) return !1;
            try {
                return !(!Uj.navigator.standalone && !Uj.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        Uk = a => (a = a.google_ad_format) ?
        a.indexOf("_0ads") > 0 : !1,
        Vk = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(b > 0 && c > 0)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const h = parseInt(f[1], 10),
                                    k = parseInt(f[2], 10);
                                if (h > 0 && k > 0) {
                                    var d = {
                                        width: h,
                                        height: k
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = b > 0 ? b : a.width;c = c > 0 ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class Wk {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Xk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Yk = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        Zk = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.vg = !!c;
                this.depth = null
            }
        };
    let $k = null;

    function al() {
        if ($k === null) {
            $k = "";
            try {
                let a = "";
                try {
                    a = u.top.location.hash
                } catch (b) {
                    a = u.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    $k = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return $k
    };

    function bl() {
        const a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function cl() {
        const a = u.performance;
        return a && a.now ? a.now() : null
    };
    var dl = class {
        constructor(a, b) {
            var c = cl() || bl();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const el = u.performance,
        fl = !!(el && el.mark && el.measure && el.clearMarks),
        gl = zb(() => {
            var a;
            if (a = fl) a = al(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function hl(a) {
        a && el && gl() && (el.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), el.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function il(a) {
        a.g = !1;
        a.i != a.j.google_js_reporting_queue && (gl() && Ra(a.i, hl), a.i.length = 0)
    }

    function jl(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw hl(c), e;
        }
        a.end(c);
        return d
    }
    class kl {
        constructor(a) {
            this.i = [];
            this.j = a || u;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = gl() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new dl(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            el && gl() && el.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (cl() || bl()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                el && gl() && el.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function ll(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function ml(a, b, c, d, e) {
        const f = [];
        We(a, function(h, k) {
            (h = nl(h, b, c, d, e)) && f.push(k + "=" + h)
        });
        return f.join(b)
    }

    function nl(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let h = 0; h < a.length; h++) f.push(nl(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(ml(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ol(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function pl(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = ol(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, h) {
            return f - h
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const h = a.g[f],
                k = a.i[h];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    b = b == null ? h : b;
                    break
                }
                let m = ml(k[l], a.j, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.j;
                        break
                    }
                    b = b == null ? h : b
                }
            }
        }
        a = "";
        b != null && (a = e + "trn=" + b);
        return c + a
    }
    class ql {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function rl(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = sl(a.stack, b));
        return b
    }

    function sl(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var ul = class {
        constructor(a, b, c = null) {
            this.ta = a;
            this.A = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.C = this.ba
        }
        lf(a) {
            this.g = a
        }
        l(a) {
            this.j = a
        }
        vb(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    hl(e), b = this.C(a, new Wk(f, {
                        message: rl(f)
                    }), void 0, c)
                } catch (h) {
                    this.ba(217, h)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Da(a, b, c, d) {
            return (...e) => this.vb(a, () => b.apply(c, e), d)
        }
        ba(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const O = new ql;
                var h = O;
                h.g.push(1);
                h.i[1] = ll("context", a);
                b.error && b.meta && b.id || (b = new Wk(b, {
                    message: rl(b)
                }));
                if (b.msg) {
                    h = O;
                    var k = b.msg.substring(0, 512);
                    h.g.push(2);
                    h.i[2] = ll("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.g) try {
                    this.g(b)
                } catch (la) {}
                if (d) try {
                    d(b)
                } catch (la) {}
                d = O;
                l = [l];
                d.g.push(3);
                d.i[3] = l;
                d = u;
                l = [];
                b = null;
                do {
                    var m = d;
                    if (Ke(m)) {
                        var n = m.location.href;
                        b = m.document && m.document.referrer || null
                    } else n = b, b = null;
                    l.push(new Zk(n || "", m));
                    try {
                        d = m.parent
                    } catch (la) {
                        d = null
                    }
                } while (d && m != d);
                for (let la = 0, yb = l.length - 1; la <= yb; ++la) l[la].depth =
                    yb - la;
                m = u;
                if (m.location && m.location.ancestorOrigins && m.location.ancestorOrigins.length == l.length - 1)
                    for (n = 1; n < l.length; ++n) {
                        var p = l[n];
                        p.url || (p.url = m.location.ancestorOrigins[n - 1] || "", p.vg = !0)
                    }
                var q = l;
                let Ca = new Zk(u.location.href, u, !1);
                m = null;
                const ab = q.length - 1;
                for (p = ab; p >= 0; --p) {
                    var t = q[p];
                    !m && Xk.test(t.url) && (m = t);
                    if (t.url && !t.vg) {
                        Ca = t;
                        break
                    }
                }
                t = null;
                const Kb = q.length && q[ab].url;
                Ca.depth != 0 && Kb && (t = q[ab]);
                f = new Yk(Ca, t);
                if (f.i) {
                    q = O;
                    var w = f.i.url || "";
                    q.g.push(4);
                    q.i[4] = ll("top", w)
                }
                var C = {
                    url: f.g.url ||
                        ""
                };
                if (f.g.url) {
                    var E = f.g.url.match(He),
                        F = E[1],
                        L = E[3],
                        G = E[4];
                    w = "";
                    F && (w += F + ":");
                    L && (w += "//", w += L, G && (w += ":" + G));
                    var Z = w
                } else Z = "";
                F = O;
                C = [C, {
                    url: Z
                }];
                F.g.push(5);
                F.i[5] = C;
                tl(this.ta, e, O, this.j, c)
            } catch (O) {
                try {
                    tl(this.ta, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: rl(O),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (Ca) {}
            }
            return this.A
        }
        na(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    var vl = vj(a => typeof a === "string"),
        wl = vj(a => a === void 0);

    function xl() {
        var a = yl;
        return vj(b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    };
    var zl = class extends M {
        constructor() {
            super()
        }
    };

    function Al(a, b) {
        try {
            const c = d => [{
                [d.vf]: d.Ue
            }];
            return JSON.stringify([a.filter(d => d.yd).map(c), rj(b), a.filter(d => !d.yd).map(c)])
        } catch (c) {
            return Bl(c, b), ""
        }
    }

    function Bl(a, b) {
        try {
            Sj({
                m: rl(a instanceof Error ? a : Error(String(a))),
                b: Mi(b, 1) || null,
                v: I(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Cl = class {
        constructor(a, b) {
            var c = new zl;
            a = K(c, 1, a);
            this.i = oj(a, 2, b).i()
        }
    };
    var Dl = class extends M {},
        El = [1, 2, 3];
    var Fl = class extends M {
            constructor() {
                super()
            }
        },
        Gl = [2, 4];

    function Hl(a) {
        var b = new Il;
        return oj(b, 1, a)
    }
    var Il = class extends M {
        constructor() {
            super()
        }
    };
    Il.O = [4];
    var Jl = class extends M {
        getValue() {
            return Mi(this, 1)
        }
    };

    function Kl(a) {
        var b = new Ll;
        return ci(b, 1, Vg(a))
    }
    var Ll = class extends M {
        getValue() {
            return Mi(this, 1)
        }
    };
    var Ml = class extends M {
        constructor() {
            super()
        }
        getValue() {
            return Mi(this, 1)
        }
    };

    function Nl(a, b) {
        return mj(a, 1, b)
    }

    function Ol(a, b) {
        return mj(a, 2, b)
    }

    function Pl(a, b) {
        return mj(a, 3, b)
    }

    function Ql(a, b) {
        return mj(a, 4, b)
    }

    function Rl(a, b) {
        return mj(a, 5, b)
    }

    function Sl(a, b) {
        return ri(a, 8, Qg(b), 0)
    }

    function Tl(a, b) {
        return ri(a, 9, Qg(b), 0)
    }
    var Ul = class extends M {
        constructor() {
            super()
        }
    };

    function Vl(a, b) {
        return mj(a, 1, b)
    }

    function Wl(a, b) {
        return mj(a, 2, b)
    }
    var Xl = class extends M {};

    function Yl(a, b) {
        Ei(a, 1, Xl, b)
    }
    var pi = class extends M {
        Zg(a) {
            Di(this, 1, Xl, void 0, a, !1, 1);
            return this
        }
    };
    pi.O = [1];
    var Zl = class extends M {
        constructor() {
            super()
        }
    };

    function $l(a, b) {
        return qi(a, 1, b, oh)
    }

    function am(a, b) {
        return qi(a, 12, b, lh)
    }

    function bm() {
        var a = new cm;
        return ti(a, 2, oh, "irr")
    }

    function dm(a, b) {
        return J(a, 3, b)
    }

    function em(a, b) {
        return J(a, 4, b)
    }

    function fm(a, b) {
        return J(a, 5, b)
    }

    function gm(a, b) {
        return J(a, 7, b)
    }

    function hm(a, b) {
        return J(a, 8, b)
    }

    function im(a, b) {
        return mj(a, 9, b)
    }

    function jm(a, b) {
        return Ci(a, 10, b)
    }

    function km(a, b) {
        return qi(a, 11, b, ah)
    }
    var cm = class extends M {
        constructor() {
            super()
        }
    };
    cm.O = [1, 12, 2, 10, 11];

    function lm(a) {
        var b = mm();
        A(a, 1, b)
    }

    function nm(a, b) {
        return mj(a, 2, b)
    }

    function om(a, b) {
        return Ci(a, 3, b)
    }

    function pm(a, b) {
        return Ci(a, 4, b)
    }

    function qm(a, b) {
        return Ei(a, 4, Ll, b)
    }

    function rm(a, b) {
        return Ci(a, 5, b)
    }

    function sm(a, b) {
        return qi(a, 6, b, oh)
    }

    function tm(a, b) {
        return mj(a, 7, b)
    }

    function um(a, b) {
        A(a, 9, b)
    }

    function vm(a, b) {
        return J(a, 10, b)
    }

    function wm(a, b) {
        return J(a, 11, b)
    }

    function xm(a, b) {
        return J(a, 12, b)
    }
    var ym = class extends M {
        constructor() {
            super()
        }
        H(a) {
            Di(this, 3, Jl, void 0, a, !1, 1);
            return this
        }
        G(a) {
            return mj(this, 8, a)
        }
    };
    ym.O = [3, 4, 5, 15, 6];
    var zm = class extends M {
        constructor() {
            super()
        }
    };
    zm.O = [2];
    var Am = class extends M {};

    function Bm(a) {
        var b = new Cm;
        return K(b, 1, a)
    }
    var Cm = class extends M {
        constructor() {
            super()
        }
    };
    var Dm = class extends M {
        constructor() {
            super()
        }
    };
    var Em = class extends M {
        constructor() {
            super()
        }
    };
    var Fm = class extends M {
        constructor() {
            super()
        }
    };
    Fm.O = [7];
    var Gm = class extends M {
            constructor() {
                super()
            }
        },
        Hm = [1, 2];
    var Im = class extends M {
        constructor() {
            super()
        }
    };
    var Jm = class extends M {
            constructor() {
                super()
            }
        },
        Km = [1];

    function Lm(a) {
        var b = new Mm;
        return K(b, 1, a)
    }
    var Mm = class extends M {
        constructor() {
            super()
        }
    };
    var Nm = class extends M {
        constructor() {
            super()
        }
    };
    var Om = class extends M {
        constructor() {
            super()
        }
    };
    var Pm = class extends M {
        constructor() {
            super()
        }
    };
    var Qm = class extends M {
        constructor() {
            super()
        }
    };
    var Rm = class extends M {
        constructor() {
            super()
        }
    };
    var Sm = class extends M {
        constructor() {
            super()
        }
    };
    var Tm = class extends M {
        constructor() {
            super()
        }
        getContentUrl() {
            return I(this, 1)
        }
    };
    var Um = class extends M {
        constructor() {
            super()
        }
    };
    Um.O = [1];
    var Vm = class extends M {
        constructor() {
            super()
        }
    };

    function Wm() {
        var a = new Xm,
            b = new Vm;
        return B(a, 1, Ym, b)
    }
    var Xm = class extends M {
            constructor() {
                super()
            }
        },
        Ym = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var Zm = class extends M {
        constructor() {
            super()
        }
    };
    Zm.O = [1];
    var $m = class extends M {
        constructor() {
            super()
        }
    };
    $m.O = [2];
    var an = class extends M {
        constructor() {
            super()
        }
    };
    var bn = class extends M {
        constructor() {
            super()
        }
    };

    function cn(a, b) {
        return ri(a, 10, mh(b), "0")
    }

    function dn(a, b) {
        return K(a, 1, b)
    }
    var en = class extends M {};
    en.O = [9];
    var fn = class extends M {
        constructor() {
            super()
        }
    };
    fn.O = [2];
    var gn = class extends M {
        constructor() {
            super()
        }
    };
    var hn = class extends M {
            constructor() {
                super()
            }
        },
        jn = [4, 5];

    function kn(a) {
        var b = new Pn;
        return oj(b, 4, a)
    }

    function Qn(a, b) {
        return ci(a, 6, mh(b))
    }
    var Pn = class extends M {
        constructor() {
            super()
        }
    };

    function Rn(a) {
        var b = new Sn;
        return Ti(b, 2, a)
    }
    var Sn = class extends M {
        constructor() {
            super()
        }
    };
    Sn.O = [3];
    var Tn = class extends M {
        constructor() {
            super()
        }
    };
    var Un = class extends M {
        constructor() {
            super()
        }
    };
    var Vn = class extends M {
        constructor() {
            super()
        }
    };
    var Wn = class extends M {
        constructor() {
            super()
        }
    };
    var Xn = class extends M {
        constructor() {
            super()
        }
    };
    var Yn = class extends M {
            constructor() {
                super()
            }
        },
        Zn = [2, 3];
    var $n = class extends M {
            constructor() {
                super()
            }
        },
        ao = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17];

    function bo(a, b) {
        return mj(a, 3, b)
    }
    var co = class extends M {
            constructor() {
                super()
            }
            Vb(a) {
                return oj(this, 2, a)
            }
        },
        eo = [4, 5, 6, 8, 9, 10, 11, 12, 13];
    var fo = class extends M {
        constructor() {
            super()
        }
    };
    var go = class extends M {
        constructor() {
            super()
        }
    };
    go.O = [4, 5];
    var ho = class extends M {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return Ki(this, 1)
        }
    };
    ho.O = [2];
    var io = class extends M {
            constructor() {
                super()
            }
        },
        jo = [4, 6];
    class ko {
        constructor(a) {
            this.g = new lo(a)
        }
    }
    class lo {
        constructor(a) {
            this.g = new mo(a)
        }
    }
    class mo {
        constructor(a) {
            this.g = new no(a)
        }
    }
    class no {
        constructor(a) {
            this.i = new oo(a);
            this.g = new po(a)
        }
    }
    class oo {
        constructor(a) {
            this.g = ({
                hf: b,
                status: c
            }) => {
                var d = Hl("xR0Czf"),
                    e = new Dl;
                c = ui(e, 1, El, ph(c));
                d = Ei(d, 4, Dl, c);
                c = new Fl;
                b = ui(c, 4, Gl, Qg(b));
                b = A(d, 3, b);
                a(b)
            }
        }
    }
    class po {
        constructor(a) {
            this.g = ({
                hf: b,
                Qj: c
            }) => {
                var d = Hl("jM4CPd"),
                    e = new Dl;
                c = ui(e, 2, El, eh(Math.round(c)));
                d = Ei(d, 4, Dl, c);
                c = new Fl;
                b = ui(c, 4, Gl, Qg(b));
                b = A(d, 3, b);
                a(b)
            }
        }
    }
    class qo extends Cl {
        constructor() {
            super(...arguments);
            this.B = new ko(a => ro(this, a))
        }
    }

    function ro(a, ...b) {
        a.l(...b.map(c => ({
            yd: !1,
            vf: 1,
            Ue: rj(c)
        })))
    }

    function so(a, ...b) {
        a.l(...b.map(c => ({
            yd: !0,
            vf: 3,
            Ue: rj(c)
        })))
    }

    function to(a, ...b) {
        a.l(...b.map(c => ({
            yd: !0,
            vf: 7,
            Ue: rj(c)
        })))
    }
    var uo = class extends qo {};
    var vo = (a, b) => {
            globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: b.length < 65536,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(() => {})
        },
        wo = class extends uo {
            constructor(a) {
                super(2, a);
                this.g = vo
            }
            l(...a) {
                try {
                    const b = Al(a, this.i);
                    this.g("https://pagead2.googlesyndication.com/pagead/ping?e=1", b)
                } catch (b) {
                    Bl(b, this.i)
                }
            }
        },
        xo = class extends wo {};

    function yo(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Al(a.g, a.i);
            a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Ao = class extends uo {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.G = vo;
                this.I = b;
                this.F = c;
                this.H = d;
                this.A = e;
                this.g = [];
                this.j = null;
                this.C = !1
            }
            l(...a) {
                try {
                    this.H && Al(this.g.concat(a), this.i).length >= 65536 && yo(this), this.A && !this.C && (this.C = !0, zo(this.A, () => {
                        yo(this)
                    })), this.g.push(...a), this.g.length >= this.F && yo(this), this.g.length && this.j === null && (this.j = setTimeout(() => {
                        yo(this)
                    }, this.I))
                } catch (b) {
                    Bl(b, this.i)
                }
            }
        },
        Bo = class extends Ao {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var N = a => {
        var b = "Oe";
        if (a.Oe && a.hasOwnProperty(b)) return a.Oe;
        b = new a;
        return a.Oe = b
    };

    function Co(a, b, c) {
        return b[a] || c
    };

    function Do(a, b) {
        a.i = (c, d) => Co(2, b, () => [])(c, 1, d);
        a.g = () => Co(3, b, () => [])(1)
    }
    class Eo {
        i() {
            return []
        }
        g() {
            return []
        }
    }

    function Fo(a, b) {
        return N(Eo).i(a, b)
    };

    function tl(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof ql ? f = c : (f = new ql, We(c, (k, l) => {
                var m = f;
                const n = m.l++;
                k = ll(l, k);
                m.g.push(n);
                m.i[n] = k
            }));
            const h = pl(f, "/pagead/gen_204?id=" + b + "&");
            h && Pj(u, h)
        } catch (f) {}
    }

    function Go(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Ho {
        constructor() {
            this.g = Math.random()
        }
    };
    let Io, Jo;
    const Ko = new kl(window);
    (a => {
        Io = a ? ? new Ho;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Go(Io, window.google_srt);
        Jo = new ul(Io, !0, Ko);
        Jo.lf(() => {});
        Jo.l(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || il(Ko) : Ko.g && Jb(window, "load", () => {
            window.google_measure_js_timing || il(Ko)
        })
    })();
    let Lo = (new Date).getTime();
    var Mo = {
        qm: 0,
        pm: 1,
        mm: 2,
        hm: 3,
        nm: 4,
        im: 5,
        om: 6,
        km: 7,
        lm: 8,
        gm: 9,
        jm: 10,
        rm: 11
    };
    var No = {
        tm: 0,
        um: 1,
        sm: 2
    };

    function Oo(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Po(a) {
        a = Ua(a, b => new mk(b.top, b.right, b.bottom, b.left));
        a = Qo(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Qo(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Va(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, nk(a[0]))
    };
    var vc = {
        kn: 0,
        Vl: 1,
        Yl: 2,
        Wl: 3,
        Xl: 4,
        em: 8,
        vn: 9,
        Gm: 10,
        Hm: 11,
        rn: 16,
        Il: 17,
        Hl: 24,
        Dm: 25,
        Wk: 26,
        Vk: 27,
        xh: 30,
        xm: 32,
        Am: 40,
        Bn: 41,
        xn: 42
    };
    var Ro = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        So = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var To = 728 * 1.38;

    function Uo(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = Vo(a, !0, !0),
                    d = Wo(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function Xo(a, b = 420, c = !1, d = !1) {
        return (a = Vo(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function Yo(a) {
        return Math.max(0, Zo(a, !0) - Wo(a))
    }

    function $o(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function Wo(a, b = !1) {
        const c = $o(a).clientHeight;
        return b ? c * Cf(a) : c
    }

    function Vo(a, b = !1, c = !1) {
        c = $o(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * Cf(a) : c
    }

    function Zo(a, b) {
        const c = $o(a);
        return b ? (a = Wo(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function ap(a, b) {
        return bp(b) || b === 10 || !a.adCount ? !1 : b == 1 || b == 2 ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? a >= 1 : !1
    }

    function cp(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function dp(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function ep(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function fp(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }

    function gp(a, b, c, d) {
        tl(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function hp(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Ra(Object.keys(b), c => {
            Ek(a, c) || Bk(a, c, b[c])
        }); of (a)
    }

    function bp(a) {
        return a === 26 || a === 27 || a === 40 || a === 41
    };

    function ip(a, b) {
        jp(a).forEach(b, void 0)
    }

    function jp(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function kp(a, b) {
        return a.g[lp(b)] !== void 0
    }

    function mp(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function np(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const op = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = lp(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = lp(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        wc() {
            return mp(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function lp(a) {
        return a instanceof Object ? String(Aa(a)) : a + ""
    };
    const pp = class {
        constructor(a) {
            this.g = new op;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return kp(this.g, a)
        }
    };
    const qp = new pp("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function rp(a, {
        eb: b,
        Xa: c,
        Db: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? sp(a, {
            eb: b,
            Xa: c,
            Db: !0
        }) : null
    }

    function sp(a, {
        eb: b,
        Xa: c,
        Db: d = !1
    }) {
        const e = tp({
                eb: b,
                Xa: c,
                Db: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = rp(a, {
            eb: b,
            Xa: c,
            Db: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var up = class {
        constructor() {
            this.g = new Map
        }
    };

    function tp({
        eb: a,
        Xa: b,
        Db: c
    }) {
        a = Aa(a);
        b = Aa(b);
        return `${a}:${b}:${c}`
    };

    function vp(a) {
        nc(a.document.body.offsetHeight)
    };

    function wp(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function P() {
        this.C = this.C;
        this.G = this.G
    }
    P.prototype.C = !1;
    P.prototype.dispose = function() {
        this.C || (this.C = !0, this.i())
    };
    P.prototype[ja(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function xp(a, b) {
        yp(a, Ha(wp, b))
    }

    function yp(a, b) {
        a.C ? b() : (a.G || (a.G = []), a.G.push(b))
    }
    P.prototype.i = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function zp(a) {
        a.g.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function Ap(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.g.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.g.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var Bp = class extends P {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.g = b
        }
        i() {
            zp(this);
            super.i()
        }
    };

    function Cp(a) {
        const b = new Q(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function Dp(a, b) {
        const c = new Q({
            first: a.P,
            second: b.P
        });
        a.listen(() => c.g({
            first: a.P,
            second: b.P
        }));
        b.listen(() => c.g({
            first: a.P,
            second: b.P
        }));
        return c
    }

    function Ep(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new Q(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Fp(d)
    }

    function Gp(...a) {
        const b = [...a],
            c = () => b.findIndex(f => f.P) !== -1,
            d = new Q(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Fp(d)
    }

    function Fp(a, b = Hp) {
        var c = a.P;
        const d = new Q(a.P);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function Ip(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function Jp(a, b, c) {
        if (a.P === b) return c(), () => {};
        const d = {
            ec: null
        };
        d.ec = Ip(a, b, () => {
            d.ec && (d.ec(), d.ec = null);
            c()
        });
        return d.ec
    }

    function Kp(a, b, c) {
        Fp(a).listen(d => {
            d === b && c()
        })
    }

    function Lp(a, b) {
        a.l && a.l();
        a.l = b.listen(c => a.g(c), !0)
    }

    function Mp(a, b, c, d) {
        const e = new Q(!1);
        var f = null;
        a = a.map(d);
        Ip(a, !0, () => {
            f === null && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        Ip(a, !1, () => {
            e.g(!1);
            f !== null && (b.clearTimeout(f), f = null)
        });
        return Fp(e)
    }

    function Np(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.P
        }
    }
    class Q {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.C = 1;
            this.l = null
        }
        listen(a, b = !1) {
            const c = this.C++;
            this.j.set(c, a);
            b && a(this.P);
            return () => {
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.P
        }
        g(a) {
            this.P = a;
            this.j.forEach(b => {
                b(this.P)
            })
        }
        map(a) {
            const b = new Q(a(this.P));
            this.listen(c => b.g(a(c)));
            return b
        }
    }

    function Hp(a, b) {
        return a == b
    };

    function Op(a) {
        return new Pp(a)
    }

    function Qp(a, b) {
        Ra(a.g, c => {
            c(b)
        })
    }
    var Rp = class {
        constructor() {
            this.g = []
        }
    };
    class Pp {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new Rp;
            this.listen(c => Qp(b, a(c)));
            return Op(b)
        }
        delay(a, b) {
            const c = new Rp;
            this.listen(d => {
                a.setTimeout(() => {
                    Qp(c, d)
                }, b)
            });
            return Op(c)
        }
    }

    function Sp(...a) {
        const b = new Rp;
        a.forEach(c => {
            c.listen(d => {
                Qp(b, d)
            })
        });
        return Op(b)
    };

    function Tp(a) {
        return Fp(Dp(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Up(c, b)
        }))
    }
    var Wp = class {
        constructor(a) {
            this.i = a;
            this.g = new Q(null);
            this.j = new Q(null);
            this.l = new Rp;
            this.B = b => {
                this.g.P == null && b.touches.length == 1 && this.g.g(b.touches[0])
            };
            this.A = b => {
                const c = this.g.P;
                c != null && (b = Vp(c, b.changedTouches), b != null && (this.g.g(null), this.j.g(null), Qp(this.l, Up(c, b))))
            };
            this.C = b => {
                var c = this.g.P;
                c != null && (c = Vp(c, b.changedTouches), c != null && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function Up(a, b) {
        return {
            qh: b.pageX - a.pageX,
            rh: b.pageY - a.pageY
        }
    }

    function Vp(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Xp(a) {
        return Fp(Dp(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Yp(c, b)
        }))
    }
    var Zp = class {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.g = new Q(null);
            this.i = new Q(null);
            this.j = new Rp;
            this.G = c => {
                this.g.g(c)
            };
            this.C = c => {
                const d = this.g.P;
                d != null && (this.g.g(null), this.i.g(null), Qp(this.j, Yp(d, c)))
            };
            this.B = c => {
                this.g.P != null && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function Yp(a, b) {
        return {
            qh: b.screenX - a.screenX,
            rh: b.screenY - a.screenY
        }
    };
    var bq = (a, b, c) => {
        const d = new $p(a, b, c);
        return () => aq(d)
    };

    function aq(a) {
        if (a.g) return !1;
        if (a.i == null) return cq(a), !0;
        const b = a.i + a.A - (new Date).getTime();
        if (b < 1) return cq(a), !0;
        dq(a, b);
        return !0
    }

    function cq(a) {
        a.i = (new Date).getTime();
        a.l()
    }

    function dq(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            cq(a)
        }, b)
    }
    class $p {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    };

    function eq(a) {
        return fq(Xp(a.g), Tp(a.i))
    }

    function gq(a) {
        return Sp(Op(a.g.j), Op(a.i.l))
    }
    var hq = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function fq(a, b) {
        return Dp(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var iq = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function jq(a) {
        a.A == null && (a.A = new Q(a.B.getBoundingClientRect()));
        return a.A
    }
    class kq extends P {
        constructor(a, b) {
            super();
            this.j = a;
            this.B = b;
            this.F = !1;
            this.A = null;
            this.l = () => {
                jq(this).g(this.B.getBoundingClientRect())
            }
        }
        g() {
            this.F || (this.F = !0, this.j.addEventListener("resize", this.l), this.j.addEventListener("scroll", this.l));
            return jq(this)
        }
        i() {
            this.j.removeEventListener("resize", this.l);
            this.j.removeEventListener("scroll", this.l);
            super.i()
        }
    };

    function lq(a, b) {
        return new mq(a, b)
    }

    function nq(a) {
        a.win.requestAnimationFrame(() => {
            a.C || a.j.g(new ce(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function oq(a) {
        a.g || (a.g = !0, a.l.observe(a.element));
        return Fp(a.j, de)
    }
    var mq = class extends P {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.g = !1;
            this.j = new Q(new ce(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                nq(this)
            })
        }
        i() {
            this.l.disconnect();
            super.i()
        }
    };

    function pq(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class qq {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
    };

    function rq(a, b) {
        a = a.getBoundingClientRect();
        return new sq(a.top + dp(b), a.bottom - a.top)
    }

    function tq(a) {
        return new sq(Math.round(a.g), Math.round(a.i))
    }
    class sq {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var vq = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new pp(c);
        b = b.filter(e => !d.contains(e));
        b.length && (uq(a, b), eb(c, b))
    };

    function uq(a, b) {
        for (const f of b) {
            b = Pe("LINK", a.document);
            b.type = "text/css";
            var c = Qd `//fonts.googleapis.com/css`,
                d = Ak(),
                e = b;
            c = Ic(c, {
                family: f
            });
            if (c instanceof Hc) d = c;
            else a: {
                if (c instanceof Sc) {
                    d = c;
                    break a
                }
                const h = ad(c);h === Tc && d(c);d = h
            }
            e.rel = "stylesheet";
            if ($b("stylesheet", "stylesheet")) {
                e.href = Kc(d).toString();
                a: if (d = (e.ownerDocument && e.ownerDocument.defaultView || u).document, d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) &&
                        Vd.test(d)) break a;
                    d = ""
                } else d = "";
                d && e.setAttribute("nonce", d)
            } else d instanceof Hc ? d = Kc(d).toString() : (d = dd(d), d = d === void 0 ? Tc.toString() : d), e.href = d;
            a.document.head.appendChild(b)
        }
    };

    function wq(a, b) {
        a.F ? b(a.l) : a.j.push(b)
    }

    function xq(a, b) {
        a.F = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    class yq extends P {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.F = !1;
            this.B = this.l = null;
            this.H = bq(a, 1E3, () => {
                if (this.B != null) {
                    var b = Zo(this.g, !0) - this.B;
                    b > 1E3 && xq(this, b)
                }
            });
            this.A = null
        }
        J(a, b) {
            a == null ? (this.B = a = Zo(this.g, !0), this.g.addEventListener("scroll", this.H), b != null && b(a)) : this.A = this.g.setTimeout(() => {
                this.J(void 0, b)
            }, a)
        }
        i() {
            this.A != null && this.g.clearTimeout(this.A);
            this.g.removeEventListener("scroll", this.H);
            this.j = [];
            this.l = null;
            super.i()
        }
    };
    var zq = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Aq {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function Bq(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new Cq(d)
    }

    function Dq(a) {
        return a.g.slice(0)
    }

    function Eq(a, b = 1) {
        a = Dq(a);
        const c = new Aq(b);
        lb(a, () => c.next());
        return new Cq(a)
    }
    const Cq = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Cq(Ta(this.g, a))
        }
        apply(a) {
            return new Cq(a(Dq(this)))
        }
        sort(a) {
            return new Cq(Dq(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = Dq(this);
            b.push(a);
            return new Cq(b)
        }
    };
    class Fq {
        constructor(a) {
            this.g = new pp(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function Gq(a) {
        return new Hq({
            value: a
        }, null)
    }

    function Iq(a) {
        return new Hq(null, Error(a))
    }

    function Jq(a) {
        try {
            return Gq(a())
        } catch (b) {
            return new Hq(null, b)
        }
    }

    function Kq(a) {
        return a.g != null ? a.getValue() : null
    }

    function Lq(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function Mq(a, b) {
        return a.g != null ? a : new Hq(null, b(a.i))
    }

    function Nq(a, b) {
        return Mq(a, c => Error(`${b}${c.message}`))
    }

    function Oq(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class Hq {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof Hq ? a : Gq(a)) : this
        }
    };
    class Pq {
        constructor() {
            this.g = new op
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new pp, this.g.set(a, c));
            c.add(b)
        }
    };

    function Qq(a) {
        return !a
    }

    function Rq(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function Sq(a) {
        return a !== null
    };
    var Tq = class extends M {
        getId() {
            return D(this, 3)
        }
    };
    Tq.O = [4];
    class Uq {
        constructor(a, {
            Lf: b,
            zh: c,
            Ui: d,
            Ug: e
        }) {
            this.A = a;
            this.j = c;
            this.l = new Cq(b || []);
            this.i = e;
            this.g = d
        }
    };
    var Vq = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new op;
            for (const c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Xq = a => {
            var b = Wq(a);
            a = [];
            for (let c of b) b = String(c.jc), a.push(c.yb + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Wq = a => {
            const b = [],
                c = a.l;
            c && c.g.length && b.push({
                yb: "a",
                jc: Yq(c)
            });
            a.j != null && b.push({
                yb: "as",
                jc: a.j
            });
            a.g != null && b.push({
                yb: "i",
                jc: String(a.g)
            });
            a.i != null && b.push({
                yb: "rp",
                jc: String(a.i)
            });
            b.sort(function(d, e) {
                return d.yb.localeCompare(e.yb)
            });
            b.unshift({
                yb: "t",
                jc: Zq(a.A)
            });
            return b
        },
        Zq = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Yq = a => {
            a = Dq(a).map($q);
            a = JSON.stringify(a);
            return Ye(a)
        },
        $q = a => {
            const b = {};
            D(a, 7) != null && (b.q = D(a, 7));
            Hi(a, 2) != null &&
                (b.o = Hi(a, 2));
            Hi(a, 5) != null && (b.p = Hi(a, 5));
            return b
        };

    function ar() {
        var a = new br;
        return ci(a, 2, Vg(1))
    }
    var br = class extends M {
        setLocation(a) {
            return ci(this, 1, Vg(a))
        }
        g() {
            return Qi(this, 1)
        }
    };

    function cr(a) {
        const b = [].slice.call(arguments).filter(xb(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Sf || []);
            d = Object.assign(d, e.xc())
        });
        return new dr(c, d)
    }

    function er(a) {
        switch (a) {
            case 1:
                return new dr(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new dr(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new dr(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new dr(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function fr(a) {
        return a == null ? null : new dr(null, {
            google_ml_rank: a
        })
    }

    function gr(a) {
        return a == null ? null : new dr(null, {
            google_placement_id: Xq(a)
        })
    }

    function hr({
        ji: a,
        Di: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new dr(null, a)
    }
    class dr {
        constructor(a, b) {
            this.Sf = a;
            this.g = b
        }
        xc() {
            return this.g
        }
    };
    var ir = class extends M {};
    var jr = class extends M {};
    var kr = class extends M {
        C() {
            return D(this, 2)
        }
        A() {
            return D(this, 5)
        }
        g() {
            return Bi(this, jr, 3)
        }
        j() {
            return Hi(this, 4)
        }
        l() {
            return hi(this, 6)
        }
        B() {
            return ei(this, ir, 7)
        }
    };
    kr.O = [3];
    var lr = class extends M {};
    var mr = class extends M {
        l() {
            return H(this, 12, !1)
        }
        j() {
            return kh($h(this, 13))
        }
        g() {
            const a = Gi(this, 23);
            return a == null ? void 0 : a
        }
    };
    var nr = class extends M {
        constructor() {
            super()
        }
    };
    var or = class extends M {
        g() {
            return Ii(this, 3)
        }
        j() {
            return Gi(this, 6)
        }
    };
    var pr = class extends M {};
    var qr = class extends M {};
    var rr = class extends M {
        ja() {
            return z(this, Tq, 1)
        }
        g() {
            return Ii(this, 2)
        }
    };
    var sr = class extends M {};
    var tr = class extends M {};
    var ur = class extends M {
            getName() {
                return D(this, 4)
            }
        },
        vr = [1, 2, 3];
    var wr = class extends M {
        g() {
            return z(this, or, 10)
        }
    };
    wr.O = [2, 5, 6, 11];
    var xr = class extends M {
        g() {
            return Gi(this, 2)
        }
        j() {
            return Gi(this, 3)
        }
    };
    var yr = class extends M {
        g() {
            return kh($h(this, 1))
        }
    };
    var zr = class extends M {};
    var Ar = class extends M {
        g() {
            return Ki(this, 1)
        }
    };
    var Br = class extends M {
        g() {
            return I(this, 1)
        }
        j() {
            return I(this, 2)
        }
    };
    var Cr = class extends M {};
    var Dr = class extends M {
        l() {
            return H(this, 1)
        }
        A() {
            return H(this, 3)
        }
        C() {
            return H(this, 7)
        }
        g() {
            return H(this, 4)
        }
        j() {
            return H(this, 5)
        }
    };
    var Er = class extends M {
        j() {
            return z(this, Br, 5)
        }
        g() {
            return z(this, Ar, 6)
        }
        A() {
            return I(this, 8)
        }
        C() {
            return H(this, 9)
        }
        B() {
            return I(this, 13)
        }
        G() {
            return H(this, 11)
        }
        l() {
            return z(this, Dr, 12)
        }
    };
    var Fr = class extends M {};
    var Gr = class extends M {
        g() {
            return z(this, Fr, 1)
        }
    };
    var Hr = class extends M {};
    Hr.O = [2];
    var Ir = class extends M {};
    var Jr = class extends M {
        g() {
            return Bi(this, Ir, 1)
        }
    };
    Jr.O = [1];
    var Kr = class extends M {
        setProperty(a) {
            return nj(this, 1, a)
        }
        getValue() {
            return D(this, 2)
        }
    };
    var Lr = class extends M {};
    Lr.O = [3, 4];
    var Mr = class extends M {};
    var Nr = class extends M {
        ja() {
            return z(this, Tq, 1)
        }
        g() {
            return Ii(this, 2)
        }
    };
    Nr.O = [6, 7, 9, 10, 11];
    var Or = class extends M {};
    Or.O = [4];
    var Pr = class extends M {};
    var Qr = class extends M {
        g() {
            return ii(this, 6, qh)
        }
    };
    Qr.O = [6];
    var Rr = class extends M {
        He() {
            return ei(this, Pr, 2)
        }
    };
    var Sr = class extends M {
        g() {
            return Ki(this, 1)
        }
    };
    var Tr = class extends M {};
    var Vr = class extends M {
            g() {
                return Ni(this, Tr, 2, Ur)
            }
        },
        Ur = [1, 2];
    var Wr = class extends M {
        g() {
            return z(this, Vr, 3)
        }
    };
    var Xr = class extends M {};
    var Yr = class extends M {
        g() {
            return Bi(this, Xr, 1)
        }
    };
    Yr.O = [1];
    var Zr = class extends M {
        g() {
            return ii(this, 1, qh)
        }
        j() {
            return z(this, Wr, 3)
        }
    };
    Zr.O = [1, 4];
    var $r = class extends M {
            g() {
                return z(this, mr, 15)
            }
        },
        as = xj($r);
    $r.O = [1, 2, 5, 7];
    var bs = class extends M {},
        cs = xj(bs);

    function ds(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? cs(b) : null
        } catch (b) {
            return null
        }
    }

    function es(a, b) {
        if (a.Ae !== void 0) {
            var c = ds(b);
            c || (c = new bs);
            a.Ae !== void 0 && Ri(c, 2, a.Ae);
            a = Date.now() + 864E5;
            Number.isFinite(a) && Ui(c, 1, Math.round(a));
            c = qj(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = ds(b)) && kh($h(c, 1)) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };
    var fs = {
            qb: "ama_success",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        gs = {
            qb: "ama_failure",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        hs = {
            qb: "ama_coverage",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        is = {
            qb: "ama_opt",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        js = {
            qb: "ama_auto_rs",
            Pa: 1,
            Ua: !0,
            rb: !1
        },
        ks = {
            qb: "ama_improv",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        ls = {
            qb: "ama_constraints",
            Pa: 0,
            Ua: !0,
            rb: !0
        };

    function ms(a, b) {
        ns(a.i, js, { ...b,
            evt: "place",
            vh: Wo(a.win),
            eid: a.g.g() ? .g() || 0,
            hl: a.g.j() ? .g() || ""
        })
    }

    function os(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && sl(c.stack, "") || "");
        ms(a, b)
    }
    var ps = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    };
    const qs = ["-webkit-text-fill-color"];

    function rs(a) {
        if (qc) {
            {
                const c = Ue(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = ss(a)
                } else a = ts()
            }
        } else a = ts();
        return a
    }
    var ts = () => {
        const a = {
            all: "initial"
        };
        Ra(qs, b => {
            a[b] = "unset"
        });
        return a
    };

    function ss(a) {
        Ra(qs, b => {
            delete a[b]
        });
        return a
    };
    var us = class {
        constructor(a) {
            this.g = a
        }
        Ja(a) {
            const b = a.document.createElement("div");
            x(b, rs(a));
            x(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            x(c, rs(a));
            x(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function vs(a) {
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
    }

    function ws(a) {
        return jp(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var R = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        S = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        xs = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        ys = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        },
        zs = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var As = new R(1321, !0),
        Bs = new S(619278254, 10),
        Cs = new R(1325, !0),
        Ds = new R(1310, !0),
        Es = new R(1355, !0),
        Fs = new R(1351, !0),
        Gs = new S(1130, 100),
        Hs = new R(1331, !0),
        Is = new R(1352, !0),
        Js = new R(1330, !0),
        Ks = new S(1339, .3),
        Ls = new S(1032, 200),
        Ms = new xs(14),
        Ns = new S(1224, .01),
        Os = new S(1346, 6),
        Ps = new S(1347, 3),
        Qs = new R(1320, !0),
        Rs = new R(1260),
        Ss = new R(1239),
        Ts = new R(1196),
        Us = new R(1160),
        Vs = new R(316),
        Ws = new R(1290),
        Xs = new R(334),
        Ys = new S(1263, -1),
        Zs = new S(54),
        $s = new S(1323, -1),
        at = new S(1265, -1),
        bt = new S(1264, -1),
        ct =
        new R(1291),
        dt = new R(1267, !0),
        et = new R(1266),
        ft = new R(313),
        gt = new S(66, -1),
        ht = new S(65, -1),
        it = new R(1256),
        jt = new R(369),
        kt = new R(1241, !0),
        lt = new R(368),
        mt = new R(1300, !0),
        nt = new ys(1273, ["en", "de"]),
        ot = new R(1223, !0),
        pt = new ys(1261, ["44786015", "44786016"]),
        qt = new R(1309),
        rt = new R(1250),
        st = new R(1151),
        tt = new R(1361),
        ut = new R(1349),
        vt = new S(1072, .75),
        wt = new R(290),
        xt = new R(1222),
        yt = new R(1354),
        zt = new R(1341),
        At = new R(1237),
        Bt = new S(1363),
        Ct = new R(1350),
        Dt = new R(1356),
        Et = new R(626390500),
        Ft = new zs(627094447,
            "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        Gt = new S(643258048),
        Ht = new S(643258049),
        It = new S(579884443, .7),
        Jt = new S(624950166, 15E3),
        Kt = new xs(622128249),
        Lt = new xs(622128250),
        Mt = new zs(641845510, ["33"]),
        Nt = new R(566279275),
        Ot = new R(622128248, !0),
        Pt = new R(566279276),
        Qt = new xs(589752731),
        Rt = new xs(589752730),
        St = new zs(635821288, ["30_19"]),
        Tt = new zs(631402549),
        Ut = new zs(636146137, ["30_6"]),
        Vt = new R(579884441, !0),
        Wt = new R(636570127),
        Xt = new zs(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        Yt = new S(579884442, .7),
        Zt = new R(613534001, !0),
        $t = new S(626062006, 670),
        au = new R(626062008),
        bu = new R(643258050),
        cu = new R(649667950),
        du = new R(506914611),
        eu = new R(597181299),
        fu = new R(626062007),
        gu = new R(638621371, !0),
        hu = new R(1120),
        iu = new zs(630330362),
        ju = new S(618163195, 15E3),
        ku = new S(623405755, 300),
        lu = new S(508040914, 100),
        mu = new S(547455356, 49),
        nu = new S(650548030, 5),
        ou = new S(650548032, 300),
        pu = new S(650548031, 2),
        qu = new S(561668774, .1),
        ru = new S(469675170, 6E4),
        su = new R(562896595),
        tu = new R(644381219),
        uu =
        new R(644381220),
        vu = new R(570863962, !0),
        wu = new xs(570879859, "control_1\\.\\d"),
        xu = new S(570863961, 50),
        yu = new R(570879858, !0),
        zu = new R(45615403, !0),
        Au = new R(45621722, !0),
        Bu = new R(570804360, !0),
        Cu = new S(63, 30),
        Du = new R(1134),
        Eu = new R(562874197),
        Fu = new R(562874196),
        Gu = new R(555237685, !0),
        Hu = new R(45460956),
        Iu = new R(45414947, !0),
        Ju = new S(472785970, 500),
        Ku = new R(643056383),
        Lu = new S(550718588, 250),
        Mu = new R(45545710),
        Nu = new S(624290870),
        Ou = new S(629793592, .8),
        Pu = new R(506738118),
        Qu = new R(77),
        Ru = new R(78),
        Su = new R(83),
        Tu = new R(80),
        Uu = new R(76),
        Vu = new R(84),
        Wu = new R(1973),
        Xu = new R(188),
        Yu = new R(485990406);
    var Zu = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.C = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.i = () => {}
        }
    };

    function T(a) {
        return N(Zu).j(a.g, a.defaultValue)
    }

    function U(a) {
        return N(Zu).A(a.g, a.defaultValue)
    }

    function $u(a) {
        return N(Zu).C(a.g, a.defaultValue)
    }

    function av(a) {
        return N(Zu).l(a.g, a.defaultValue)
    };

    function bv(a, b) {
        a = De(new pe(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function cv(a, b, c) {
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
        vs(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function dv(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            vs(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var fv = (a, b, c, d = 0) => {
            var e = ev(b, c, d);
            if (e.J) {
                for (c = b = e.J; c = e.pd(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Ld
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            cv(a, e.anchor, e.position)
        },
        gv = (a, b, c, d = 0) => {
            T(ft) ? fv(a, b, c, d) : cv(a, b, c)
        };

    function ev(a, b, c) {
        const d = f => {
                f = hv(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = hv(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    J: iv(a.previousSibling, d),
                    pd: f => iv(f.previousSibling, d),
                    Ld: 0
                };
            case 2:
                return {
                    J: iv(a.lastChild, d),
                    pd: f => iv(f.previousSibling, d),
                    Ld: 0
                };
            case 3:
                return {
                    J: iv(a.nextSibling, e),
                    pd: f => iv(f.nextSibling, e),
                    Ld: 3
                };
            case 1:
                return {
                    J: iv(a.firstChild, e),
                    pd: f => iv(f.nextSibling, e),
                    Ld: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function hv(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function iv(a, b) {
        return a && b(a) ? a : null
    };

    function jv(a, b) {
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

    function kv(a, b) {
        const c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function lv(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function mv(a, b, c) {
        a = jv(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function nv(a, b) {
        b = b.parentElement;
        return b ? (a = Ue(b, a)) ? a.direction : "" : ""
    }

    function ov(a, b, c) {
        if (mv(a, b, c) !== 0) {
            lv(b, c, "0px");
            var d = mv(a, b, c);
            lv(b, c, `${-1*d}px`);
            a = mv(a, b, c);
            a !== 0 && a !== d && lv(b, c, `${d/(a-d)*d}px`)
        }
    };
    const pv = RegExp("(^| )adsbygoogle($| )");

    function qv(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = me(d.property);
            a[e] = d.value
        }
    }

    function rv(a, b, c, d, e, f) {
        a = sv(a, e);
        a.va.setAttribute("data-ad-format", d ? d : "auto");
        tv(a, b, c, f);
        return a
    }

    function uv(a, b, c = null) {
        a = sv(a, {});
        tv(a, b, null, c);
        return a
    }

    function tv(a, b, c, d) {
        var e = [];
        if (d = d && d.Sf) a.nb.className = d.join(" ");
        a = a.va;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function sv(a, b) {
        const c = bv(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Kd && qv(d, b.Kd);
        a = De(new pe(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.uf && (d.marginTop = b.uf);
        b.me && (d.marginBottom = b.me);
        b.Zb && qv(d, b.Zb);
        c.appendChild(a);
        return {
            nb: c,
            va: a
        }
    }

    function vv(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.xc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function wv(a) {
        const b = ws(a.document);
        Ra(b, function(c) {
            const d = xv(a, c);
            var e;
            if (e = d) {
                e = (e = jv(c, a)) ? e.y : 0;
                const f = Wo(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), vv(a, c))
        })
    }

    function xv(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in mb) a[mb[c]] && (b[mb[c]] = a[mb[c]]);
        return b
    };
    var zv = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (yv(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const yv = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? je(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && qp.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (yv(a, b[c])) return !0
        }
        return !1
    };
    var Av = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Bv = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return rv(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return Av(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Cv(a) {
        var b = [];
        ip(a.getElementsByTagName("p"), function(c) {
            Dv(c) >= 100 && b.push(c)
        });
        return b
    }

    function Dv(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        ip(a.childNodes, function(c) {
            b += Dv(c)
        });
        return b
    }

    function Ev(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Fv(a, b) {
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
    const Gv = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.l)
            } catch (f) {}
            if (!b.length) return [];
            a = db(b);
            a = Fv(this, a);
            typeof this.i === "number" && (b = this.i, b < 0 && (b += a.length), a = b >= 0 && b < a.length ? [a[b]] : []);
            if (typeof this.j === "number") {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Cv(a[c]),
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
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class Hv {
        constructor() {
            var a = Qd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.A = Math.random();
            this.j = this.ba;
            this.C = a
        }
        lf(a) {
            this.g = a
        }
        l(a) {
            this.i = a
        }
        ba(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new Wk(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded || (Oe(u.document, this.C), u.error_rep_loaded = !0);
            return !1
        }
        vb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.j(a, d, .01, c, "jserror")) throw d;
            }
        }
        Da(a, b, c, d) {
            return (...e) => this.vb(a, () => b.apply(c, e), d)
        }
        na(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    const Iv = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var Jv = (a, b, c, d, e = !1) => {
            const f = d || window,
                h = typeof queueMicrotask !== "undefined";
            return function() {
                e && h && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const k = cl();
                let l, m = 3;
                try {
                    l = b.apply(this, arguments)
                } catch (n) {
                    m = 13;
                    if (!c) throw n;
                    c(a, n)
                } finally {
                    f.google_measure_js_timing && k && Iv({
                        label: a.toString(),
                        value: k,
                        duration: (cl() || 0) - k,
                        type: m,
                        ...(e && h && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return l
            }
        },
        Kv = (a, b, c, d = !1) => Jv(a, b, (e, f) => {
            (new Hv).ba(e, f)
        }, c, d);

    function Lv(a, b, c) {
        return Jv(a, b, void 0, c, !0).apply()
    }

    function Mv(a, b) {
        return Kv(754, a, b, !0).apply()
    }

    function Nv(a) {
        if (!a) return null;
        var b = D(a, 7);
        if (D(a, 1) || a.getId() || ii(a, 4, qh).length > 0) {
            var c = D(a, 3),
                d = D(a, 1),
                e = ii(a, 4, qh);
            b = Hi(a, 2);
            var f = Hi(a, 5);
            a = Ov(Ii(a, 6));
            var h = "";
            d && (h += d);
            c && (h += "#" + Ev(c));
            if (e)
                for (c = 0; c < e.length; c++) h += "." + Ev(e[c]);
            b = (e = h) ? new Gv(e, b, f, a) : null
        } else b = b ? new Gv(b, Hi(a, 2), Hi(a, 5), Ov(Ii(a, 6))) : null;
        return b
    }
    var Pv = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ov(a) {
        return a == null ? a : Pv[a]
    }

    function Qv(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = D(a[c], 1),
                e = D(a[c], 2);
            if (d && e != null) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Rv(a, b) {
        var c = {};
        a && (c.uf = D(a, 1), c.me = D(a, 2), c.clearBoth = !!Gi(a, 3));
        b && (c.Kd = Qv(Bi(b, Kr, 3)), a = Bi(b, Kr, 4), c.Zb = Qv(a));
        return c
    }
    var Sv = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Tv = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Uv = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return rv(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    class Vv {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.i);
            const b = Av(a);
            return new dr(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Wv = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        i() {
            return this.l
        }
        g() {
            return this.j
        }
    };
    const Xv = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = Bi(this.g, Lr, 9).length > 0 ? Bi(this.g, Lr, 9)[0] : null,
                f = Rv(z(this.g, Mr, 3), e);
            if (!e) return null;
            if (e = D(e, 1)) {
                d = d.document;
                var h = c.tagName;
                c = De(new pe(d), h);
                c.style.clear = f.clearBoth ? "both" : "none";
                h == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Kd && qv(c.style, f.Kd);
                d = De(new pe(d), "INS");
                f.Zb && qv(d.style, f.Zb);
                c.appendChild(d);
                f = {
                    nb: c,
                    va: d
                };
                f.va.setAttribute("data-ad-type", "text");
                f.va.setAttribute("data-native-settings-key",
                    e);
                tv(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = Bi(this.g, Lr, 9).length > 0 ? Bi(this.g, Lr, 9)[0] : null;
            if (!a) return null;
            a = Bi(a, Kr, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (D(c, 1) == "height" && parseInt(D(c, 2), 10) > 0) return parseInt(D(c, 2), 10)
            }
            return null
        }
    };
    const Yv = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g) return null;
            const e = this.g.google_ad_format || null,
                f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var h = [];
                for (let k = 0; k < c.length; k++) {
                    const l = c.item(k);
                    l !== "width" && l !== "height" && h.push({
                        property: l,
                        value: c.getPropertyValue(l)
                    })
                }
                c = {
                    Zb: h
                }
            } else c = {};
            a = rv(d.document, a, f, e, c, b);
            a.va.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        xc() {
            return this.g
        }
    };
    class Zv {
        constructor(a) {
            this.i = a
        }
        g() {
            return new dr([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const $v = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g() {
            return this.j
        }
        i(a) {
            a = this.l.query(a.document);
            return a.length > 0 ? a[0] : null
        }
    };

    function aw(a, b, c) {
        const d = [];
        for (let t = 0; t < a.length; t++) {
            var e = a[t];
            var f = t,
                h = b,
                k = c,
                l = e.ja();
            if (l) {
                var m = Nv(l);
                if (m) {
                    var n = Ii(e, 2);
                    n = Sv[n];
                    var p = n === void 0 ? null : n;
                    if (p === null) e = null;
                    else {
                        n = (n = z(e, Mr, 3)) ? Gi(n, 3) : null;
                        m = new $v(m, p);
                        p = ii(e, 10, Wg).slice(0);
                        Hi(l, 5) != null && p.push(1);
                        var q = k ? k : {};
                        k = Hi(e, 12);
                        l = ei(e, br, 4) ? z(e, br, 4) : null;
                        Ii(e, 8) == 1 ? (q = q.Mh || null, e = new bw(m, new Uv(Rv(z(e, Mr, 3), null)), q, n, 0, p, l, h, f, k, e)) : e = Ii(e, 8) == 2 ? new bw(m, new Xv(e), q.Vi || new Zv("text"), n, 1, p, l, h, f, k, e) : null
                    }
                } else e = null
            } else e =
                null;
            e !== null && d.push(e)
        }
        return d
    }

    function cw(a) {
        return a.A
    }

    function dw(a) {
        return a.Fa
    }

    function ew(a) {
        return T(Ts) ? (a.M || (a.M = a.F.i(a.j)), a.M) : a.F.i(a.j)
    }

    function fw(a) {
        var b = a.H;
        a = a.j.document.createElement("div");
        T(Ts) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function gw(a) {
        return a.B instanceof Yv ? a.B.xc() : null
    }

    function hw(a, b, c) {
        kp(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }

    function iw(a, b) {
        a.A = !0;
        T(Ts) && (a.i && dv(a.i), a.i = null);
        b != null && a.ca.push(b)
    }

    function jw(a) {
        return bv(a.j.document, a.H || !1)
    }

    function kw(a) {
        return a.B.j(a.j)
    }

    function lw(a, b = null, c = null) {
        return new bw(a.F, b || a.B, c || a.R, a.H, a.Lb, a.Ac, a.Sd, a.j, a.ua, a.G, a.l, a.C, a.ia)
    }
    class bw {
        constructor(a, b, c, d, e, f, h, k, l, m = null, n = null, p = null, q = null) {
            this.F = a;
            this.B = b;
            this.R = c;
            this.H = d;
            this.Lb = e;
            this.Ac = f;
            this.Sd = h ? h : new br;
            this.j = k;
            this.ua = l;
            this.G = m;
            this.l = n;
            (a = !n) || (a = !(n.ja() && Hi(n.ja(), 5) != null));
            this.Fa = !a;
            this.C = p;
            this.ia = q;
            this.ca = [];
            this.A = !1;
            this.I = new op;
            this.M = this.i = null
        }
        da() {
            return this.j
        }
        g() {
            return this.F.g()
        }
    };

    function mw(a, b, c, d, e, f) {
        const h = ar();
        return new bw(new Wv(c, e), new Bv, new Vv(a), !0, 2, [], h, d, null, null, null, b, f)
    }

    function nw(a, b, c, d, e) {
        const f = ar();
        return new bw(new Wv(b, d), new Uv({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var ow = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        da() {
            return this.win
        }
        A(a) {
            return mw(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return nw(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const pw = {
        TABLE: {
            nc: new Fq([1, 2])
        },
        THEAD: {
            nc: new Fq([0, 3, 1, 2])
        },
        TBODY: {
            nc: new Fq([0, 3, 1, 2])
        },
        TR: {
            nc: new Fq([0, 3, 1, 2])
        },
        TD: {
            nc: new Fq([0, 3])
        }
    };

    function qw(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Qa(e, f), c < 0 || b.push(new rw(a, [f], c, f, 3, ze(f).trim(), d));
        return b
    }

    function sw(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            h = f.length;
        let k = 0,
            l = "";
        for (let p = 0; p < h; p++) {
            var m = f[p];
            if (m.nodeType == 1 || m.nodeType == 3) {
                if (m.nodeType != 1) var n = null;
                else m.tagName == "BR" ? n = m : (n = c.getComputedStyle(m).getPropertyValue("display"), n = n == "inline" || n == "inline-block" ? null : m);
                n ? (d.length && l && e.push(new rw(a, d, p - 1, n, 0, l, c)), d = [], k = p + 1, l = "") : (d.push(m), m = ze(m).trim(), l += m && l ? " " + m : m)
            }
        }
        d.length && l && e.push(new rw(a, d, k, b, 2, l, c));
        return e
    }

    function tw(a, b) {
        return a.g - b.g
    }
    class rw {
        constructor(a, b, c, d, e, f, h) {
            this.l = a;
            this.Zc = b.slice(0);
            this.g = c;
            this.Zd = d;
            this.ae = e;
            this.C = f;
            this.i = h
        }
        da() {
            return this.i
        }
        A(a) {
            return mw(a, this.l, this.Zd, this.i, this.ae, this.g)
        }
        j() {
            return nw(this.l, this.Zd, this.i, this.ae, this.g)
        }
    };

    function uw(a) {
        return cb(a.C ? sw(a.i, a.g, a.j) : [], a.A ? qw(a.i, a.A, a.g, a.j) : []).filter(b => {
            var c = b.Zd.tagName;
            c ? (c = pw[c.toUpperCase()], b = c != null && c.nc.contains(b.ae)) : b = !1;
            return !b
        })
    }
    class vw {
        constructor(a, b, c) {
            this.g = a;
            this.A = b.Wc;
            this.C = b.fg;
            this.i = b.articleStructure;
            this.j = c;
            this.l = b.Kf
        }
    };

    function ww(a, b) {
        if (!b) return !1;
        const c = Aa(b),
            d = a.g.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.i.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.g.set(c, !0), !0;
        b = ww(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function xw(a, b) {
        return Wa(b.Zc, c => ww(a, c))
    }
    class yw {
        constructor(a) {
            this.g = new op;
            this.i = a
        }
    };
    class zw {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var Bw = (a, {
            sg: b = !1,
            mf: c = !1,
            Bg: d = c || T(Ss) ? 2 : 3,
            kf: e = null
        } = {}) => {
            a = uw(a);
            return Aw(a, {
                sg: b,
                mf: c,
                Bg: d,
                kf: e
            })
        },
        Aw = (a, {
            sg: b = !1,
            mf: c = !1,
            Bg: d = c || T(Ss) ? 2 : 3,
            kf: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(tw);
            a = [];
            b = new zw(b, e);
            for (const h of f) {
                e = {
                    Md: h,
                    rd: h.C.length < 51 ? !1 : b.j != null ? !xw(b.j, h) : !0
                };
                if (b.l || e.rd) b.g.length ? (f = b.g[b.g.length - 1].Md, f = zv(f.da(), f.Zc[f.Zc.length - 1], e.Md.Zc[0])) : f = !0, f ? (b.g.push(e), e.rd && b.i.push(e.Md)) : (b.g = [e], b.i = e.rd ? [e.Md] : []);
                if (b.i.length >= d) {
                    e = b;
                    f = c || T(Ss) ? 0 : 1;
                    if (f < 0 || f >= e.i.length) e = null;
                    else {
                        for (f = e.i[f]; e.g.length && !e.g[0].rd;) e.g.shift();
                        e.g.shift();
                        e.i.shift();
                        e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var Dw = (a, b, c = !1) => {
            a = Cw(a, b);
            const d = new yw(b);
            return zq(a, e => Bw(e, {
                mf: c,
                kf: d
            }))
        },
        Ew = (a, b) => {
            a = Cw(a, b);
            const c = new yw(b);
            return zq(a, d => {
                if (d.l) {
                    var e = d.i;
                    var f = d.j;
                    d = d.g.querySelectorAll(d.l);
                    var h = [];
                    for (var k of d) h.push(new ow(e, k, f));
                    e = h
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (h = 1; h < d.length; h++) {
                        const n = d[h];
                        k = f;
                        b: {
                            if (k.element.hasAttributes())
                                for (m of k.element.attributes)
                                    if (m.name.toLowerCase() === "style" && m.value.toLowerCase().includes("background-image")) {
                                        var l = !0;
                                        break b
                                    }
                            l =
                            k.element.tagName;l = l === "IMG" || l === "SVG"
                        }(l || k.element.textContent.length > 1) && !ww(c, f.element) && zv(n.da(), f.element, n.element) && e.push(f);
                        f = n
                    }
                    var m = e
                } else m = [];
                return m
            })
        },
        Cw = (a, b) => {
            const c = new op;
            a.forEach(d => {
                var e = Nv(z(d, Tq, 1));
                if (e) {
                    var f = e.toString();
                    kp(c, f) || c.set(f, {
                        articleStructure: d,
                        Eh: e,
                        Wc: null,
                        fg: !1,
                        Kf: null
                    });
                    e = c.get(f);
                    (f = (f = z(d, Tq, 2)) ? D(f, 7) : null) ? e.Wc = e.Wc ? e.Wc + "," + f : f: e.fg = !0;
                    d = z(d, Tq, 4);
                    e.Kf = d ? D(d, 7) : null
                }
            });
            return np(c).map(d => {
                const e = d.Eh.query(b.document);
                return e.length ? new vw(e[0],
                    d, b) : null
            }).filter(d => d != null)
        };
    var Fw = a => a ? .google_ad_slot ? Gq(new Uq(1, {
            zh: a.google_ad_slot
        })) : Iq("Missing dimension when creating placement id"),
        Hw = a => {
            switch (a.Lb) {
                case 0:
                case 1:
                    var b = a.l;
                    b == null ? a = null : (a = b.ja(), a == null ? a = null : (b = Ii(b, 2), a = b == null ? null : new Uq(0, {
                        Lf: [a],
                        Ug: b
                    })));
                    return a != null ? Gq(a) : Iq("Missing dimension when creating placement id");
                case 2:
                    return a = Gw(a), a != null ? Gq(a) : Iq("Missing dimension when creating placement id");
                default:
                    return Iq("Invalid type: " + a.Lb)
            }
        };
    const Gw = a => {
        if (a == null || a.C == null) return null;
        const b = z(a.C, Tq, 1),
            c = z(a.C, Tq, 2);
        if (b == null || c == null) return null;
        const d = a.ia;
        if (d == null) return null;
        a = a.g();
        return a == null ? null : new Uq(0, {
            Lf: [b, c],
            Ui: d,
            Ug: Tv[a]
        })
    };

    function Iw(a) {
        const b = gw(a.ha);
        return (b ? Fw(b) : Hw(a.ha)).map(c => Xq(c))
    }

    function Jw(a) {
        a.g = a.g || Iw(a);
        return a.g
    }

    function Kw(a, b) {
        if (a.ha.A) throw Error("AMA:AP:AP");
        gv(b, a.ja(), a.ha.g());
        iw(a.ha, b)
    }
    const Lw = class {
        constructor(a, b, c) {
            this.ha = a;
            this.i = b;
            this.la = c;
            this.g = null
        }
        ja() {
            return this.i
        }
        fill(a, b) {
            var c = this.ha;
            (a = c.B.i(a, b, this.i, c.j)) && Kw(this, a.nb);
            return a
        }
    };

    function Mw(a, b) {
        return Mv(() => {
            if (T(Ts)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        h = ew(f);
                    if (h) {
                        if (!f.i && !f.A) {
                            a: {
                                var k = null;
                                try {
                                    var l = ew(f);
                                    if (l) {
                                        k = fw(f);
                                        gv(k, l, f.g());
                                        var m = k;
                                        break a
                                    }
                                    m = null;
                                    break a
                                } catch (t) {
                                    throw dv(k), t;
                                }
                                m = void 0
                            }
                            f.i = m
                        }(k = f.i) && d.push({
                            xj: f,
                            anchorElement: h,
                            Fi: k
                        })
                    }
                }
                if (d.length > 0)
                    for (m = dp(b), l = ep(b), e = 0; e < d.length; e++) {
                        const {
                            xj: t,
                            anchorElement: w,
                            Fi: C
                        } = d[e];
                        f = Nw(C, l, m);
                        c.push(new Lw(t, w, f))
                    }
                m = c
            } else {
                m = [];
                l = [];
                try {
                    const t = [];
                    for (let w = 0; w < a.length; w++) {
                        var n = a[w],
                            p = ew(n);
                        p && t.push({
                            Og: n,
                            anchorElement: p
                        })
                    }
                    for (p = 0; p < t.length; p++) {
                        n = l;
                        h = n.push; {
                            var q = t[p];
                            const w = q.anchorElement,
                                C = q.Og,
                                E = fw(C);
                            try {
                                gv(E, w, C.g()), k = E
                            } catch (F) {
                                throw dv(E), F;
                            }
                        }
                        h.call(n, k)
                    }
                    c = dp(b);
                    d = ep(b);
                    for (h = 0; h < l.length; h++) e = Nw(l[h], d, c), f = t[h], m.push(new Lw(f.Og, f.anchorElement, e))
                } finally {
                    for (c = 0; c < l.length; c++) dv(l[c])
                }
            }
            return m
        }, b)
    }

    function Nw(a, b, c) {
        a = a.getBoundingClientRect();
        return new qq(a.left + b, a.top + c, a.right - a.left)
    };
    const Ow = {
            1: "0.5vp",
            2: "300px"
        },
        Pw = {
            1: 700,
            2: 1200
        },
        Qw = {
            [1]: {
                fh: "3vp",
                pf: "1vp",
                eh: "0.3vp"
            },
            [2]: {
                fh: "900px",
                pf: "300px",
                eh: "90px"
            }
        };

    function Rw(a, b, c) {
        var d = Sw(a),
            e = Wo(a) || Pw[d],
            f = void 0;
        c && (f = (c = (c = Tw(Bi(c, kr, 2), d)) ? z(c, ir, 7) : void 0) ? Uw(c, e) : void 0);
        c = f;
        f = Sw(a);
        a = Wo(a) || Pw[f];
        const h = Vw(Qw[f].pf, a);
        a = h === null ? Ww(f, a) : new Xw(h, h, Yw(h, 8), 8, .3, c);
        c = Vw(Qw[d].fh, e);
        f = Vw(Qw[d].pf, e);
        d = Vw(Qw[d].eh, e);
        e = a.j;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Xw(e, e, Yw(e, a.i), a.i, a.l, a.g)
    }

    function Zw(a, b) {
        const c = kh($h(a, 4));
        a = hi(a, 5);
        return c == null || a == null ? b : new Xw(a, 0, [], c, 1)
    }

    function $w(a, b) {
        const c = Sw(a);
        a = Wo(a) || Pw[c];
        if (!b) return Ww(c, a);
        if (b = Tw(Bi(b, kr, 2), c))
            if (b = ax(b, a)) return b;
        return Ww(c, a)
    }

    function bx(a) {
        const b = Sw(a);
        a = Wo(a) || Pw[b];
        return Ww(b, a)
    }

    function cx(a, b) {
        let c = {
            Hc: a.j,
            tb: a.C
        };
        for (let d of a.A) d.adCount <= b && (c = d.Mc);
        return c
    }

    function dx(a, b, c) {
        var d = Gi(b, 2);
        b = z(b, kr, 1);
        var e = Sw(c);
        var f = Wo(c) || Pw[e];
        c = Vw(b ? .C(), f) ? ? a.j;
        e = Vw(b ? .A(), f) ? ? a.C;
        d = d ? [] : ex(b ? .g(), f) ? ? a.A;
        const h = b ? .j() ? ? a.i,
            k = b ? .l() ? ? a.l;
        a = (b ? .B() ? Uw(z(b, ir, 7), f) : null) ? ? a.g;
        return new Xw(c, e, d, h, k, a)
    }

    function fx(a, b) {
        var c = Sw(b);
        const d = new lr,
            e = new kr;
        let f = !1;
        var h = U(Ys);
        h >= 0 && (Si(e, 4, h), f = !0);
        h = null;
        c === 1 ? (c = U(bt), c >= 0 && (h = c + "vp")) : (c = U(at), c >= 0 && (h = c + "px"));
        c = U($s);
        c >= 0 && (h = c + "px");
        h !== null && (nj(e, 2, h), f = !0);
        c = T(dt) ? "0px" : null;
        c !== null && (nj(e, 5, c), f = !0);
        if (T(et)) Ri(d, 2, !0), f = !0;
        else if (c !== null || h !== null) {
            const n = [];
            for (const p of a.A) {
                var k = n,
                    l = k.push;
                var m = new jr;
                m = Si(m, 1, p.adCount);
                m = nj(m, 3, c ? ? p.Mc.tb + "px");
                m = nj(m, 2, h ? ? p.Mc.Hc + "px");
                l.call(k, m)
            }
            Ci(e, 3, n)
        }
        return f ? (A(d, 1, e), dx(a, d, b)) : a
    }
    class Xw {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.C = b;
            this.A = c.sort((h, k) => h.adCount - k.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
    }

    function Tw(a, b) {
        for (let c of a)
            if (Ii(c, 1) == b) return c;
        return null
    }

    function ex(a, b) {
        if (a === void 0) return null;
        const c = [];
        for (let d of a) {
            a = Hi(d, 1);
            const e = Vw(D(d, 2), b),
                f = Vw(D(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                Mc: {
                    Hc: e,
                    tb: f
                }
            })
        }
        return c
    }

    function ax(a, b) {
        const c = Vw(D(a, 2), b),
            d = Vw(D(a, 5), b);
        if (c === null) return null;
        const e = Hi(a, 4);
        if (e == null) return null;
        var f = a.g();
        f = ex(f, b);
        if (f === null) return null;
        const h = z(a, ir, 7);
        b = h ? Uw(h, b) : void 0;
        return new Xw(c, d, f, e, hi(a, 6), b)
    }

    function Ww(a, b) {
        a = Vw(Ow[a], b);
        return T(Ws) ? new Xw(a === null ? Infinity : a, null, [], 8, .3) : new Xw(a === null ? Infinity : a, null, [], 3, null)
    }

    function Vw(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Sw(a) {
        a = Vo(a) >= 900;
        return Fe() && !a ? 1 : 2
    }

    function Yw(a, b) {
        if (b < 4) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Mc: {
                Hc: a * 2,
                tb: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Mc: {
                Hc: a * 3,
                tb: a * 3
            }
        }]
    }

    function Uw(a, b) {
        const c = Vw(D(a, 2), b) || 0,
            d = Hi(a, 3) || 1;
        a = Vw(D(a, 1), b) || 0;
        return {
            Cg: c,
            Ag: d,
            hc: a
        }
    };

    function gx(a, b, c) {
        return Oo({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function hx(a) {
        if (!a.length) return null;
        const b = Po(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new ix(b, a)
    }
    class ix {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };
    let jx, V;
    const kx = new kl(u);
    ((a, b = !0) => {
        jx = a || new Ho;
        typeof u.google_srt !== "number" && (u.google_srt = Math.random());
        Go(jx, u.google_srt);
        V = new ul(jx, b, kx);
        V.l(!0);
        u.document.readyState == "complete" ? u.google_measure_js_timing || il(kx) : kx.g && Jb(u, "load", () => {
            u.google_measure_js_timing || il(kx)
        })
    })();
    var lx = (a, b) => V.vb(a, b),
        mx = (a, b) => V.Da(a, b),
        nx = (a, b, c) => {
            const d = N(Eo).g();
            !b.eid && d.length && (b.eid = d.toString());
            tl(jx, a, b, !0, c)
        },
        ox = (a, b, c) => {
            V.na(a, b, c)
        };

    function px(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var My = (a, b) => {
        var c = db(b.document.querySelectorAll(".google-auto-placed"));
        const d = db(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = qx(b),
            f = Jy(b),
            h = Ky(b),
            k = db(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = db(b.document.querySelectorAll("div.googlepublisherpluginad")),
            m = db(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let n = [].concat(db(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), db(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [p, q] of [
                [a.qd, c],
                [a.Kb, d],
                [a.Si, e],
                [a.Le, f],
                [a.Me, h],
                [a.Qi, k],
                [a.Ri, l],
                [a.Ti, m]
            ]) p === !1 ? b = b.concat(q) : n = n.concat(q);
        a = Ly(n);
        c = Ly(b);
        a = a.slice(0);
        for (const p of c)
            for (c = 0; c < a.length; c++)(p.contains(a[c]) || a[c].contains(p)) && a.splice(c, 1);
        return a
    };
    const Ny = a => {
            const b = px(a);
            return b ? Ta(Ua(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
        },
        qx = a => db(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        Jy = a => (Ny(a) || db(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(db(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Ky = a => db(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Ly = a => {
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
    var Oy = V.Da(453, My),
        Py;
    Py = V.Da(454, (a, b) => {
        const c = db(b.document.querySelectorAll(".google-auto-placed")),
            d = db(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = qx(b),
            f = Jy(b),
            h = Ky(b),
            k = db(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = db(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = db(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return Ly([].concat(a.qd === !0 ? c : [], a.Kb === !0 ? d : [], a.Si === !0 ? e : [], a.Le === !0 ? f : [], a.Me === !0 ? h : [], a.Qi === !0 ? k : [], a.Ri === !0 ? l : [], a.Ti ===
            !0 ? b : []))
    });

    function Qy(a, b, c) {
        const d = Ry(a);
        b = Sy(d, b, c);
        return new Ty(a, d, b)
    }

    function Uy(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function Vy(a) {
        return a.g.map(b => b.box)
    }

    function Wy(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class Ty {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }

    function Ry(a) {
        const b = Oy({
                Kb: !1
            }, a),
            c = ep(a),
            d = dp(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && e.className.indexOf("google-auto-placed") != -1) || Uy(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                fo: e ? 1 : 0
            } : null
        }).filter(xb(e => e === null))
    }

    function Sy(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? Xy(a, b) : Ua(a, d => new ix(d.box, 1))
    }

    function Xy(a, b) {
        a = Ua(a, d => new ix(d.box, 1));
        const c = [];
        for (; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (gx(d, a[f], b)) {
                        d = hx([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Yy(a, b, c) {
        const d = pq(c, b);
        return !Wa(a, e => Oo(e, d))
    }

    function Zy(a, b, c, d, e) {
        e = e.la;
        const f = pq(e, b),
            h = pq(e, c),
            k = pq(e, d);
        return !Wa(a, l => Oo(l, h) || Oo(l, f) && !Oo(l, k))
    }

    function $y(a, b, c, d) {
        const e = Vy(a);
        if (Yy(e, b, d.la)) return !0;
        if (!Zy(e, b, c.Cg, c.hc, d)) return !1;
        const f = new ix(pq(d.la, 0), 1);
        a = Ta(a.l, h => gx(h, f, c.hc));
        b = Va(a, (h, k) => h + k.i, 1);
        return a.length === 0 || b > c.Ag ? !1 : !0
    };
    var az = (a, b) => {
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

    function bz(a, b) {
        const c = new Pq,
            d = new pp;
        b.forEach(e => {
            if (Ni(e, sr, 1, vr)) {
                e = Ni(e, sr, 1, vr);
                if (z(e, rr, 1) && z(e, rr, 1).ja() && z(e, rr, 2) && z(e, rr, 2).ja()) {
                    const h = cz(a, z(e, rr, 1).ja()),
                        k = cz(a, z(e, rr, 2).ja());
                    if (h && k)
                        for (var f of az({
                                anchor: h,
                                position: Ii(z(e, rr, 1), 2)
                            }, {
                                anchor: k,
                                position: Ii(z(e, rr, 2), 2)
                            })) c.set(Aa(f.anchor), f.position)
                }
                z(e, rr, 3) && z(e, rr, 3).ja() && (f = cz(a, z(e, rr, 3).ja())) && c.set(Aa(f), Ii(z(e, rr, 3), 2))
            } else Ni(e, tr, 2, vr) ? dz(a, Ni(e, tr, 2, vr), c) : Ni(e, qr, 3, vr) && ez(a, Ni(e, qr, 3, vr), d)
        });
        return new fz(c,
            d)
    }
    class fz {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const dz = (a, b, c) => {
            z(b, rr, 2) ? (b = z(b, rr, 2), (a = cz(a, b.ja())) && c.set(Aa(a), Ii(b, 2))) : z(b, Tq, 1) && (a = gz(a, z(b, Tq, 1))) && a.forEach(d => {
                d = Aa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        ez = (a, b, c) => {
            z(b, Tq, 1) && (a = gz(a, z(b, Tq, 1))) && a.forEach(d => {
                c.add(Aa(d))
            })
        },
        cz = (a, b) => (a = gz(a, b)) && a.length > 0 ? a[0] : null,
        gz = (a, b) => (b = Nv(b)) ? b.query(a) : null;
    var hz = class {
        constructor() {
            this.g = wf();
            this.i = 0
        }
    };

    function iz(a, b, c) {
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
            if (jz(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function kz(a) {
        a = lz(a);
        return a.has("all") || a.has("after")
    }

    function mz(a) {
        a = lz(a);
        return a.has("all") || a.has("before")
    }

    function lz(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function jz(a) {
        const b = lz(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var nz = class {
        constructor() {
            this.g = new Set;
            this.i = new hz
        }
    };

    function oz(a) {
        return function(b) {
            return Mw(b, a)
        }
    }

    function pz(a) {
        const b = Wo(a);
        return b ? Ha(qz, b + dp(a)) : ub
    }

    function rz(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return ub;
        const d = Vy(c || Qy(b));
        return e => Yy(d, a, e.la)
    }

    function sz(a, b, c, d) {
        if (a < 0 || b.Cg < 0 || b.Ag < 0 || b.hc < 0) throw Error("ama::ead:nd");
        return a === Infinity ? ub : e => $y(d || Qy(c, b.hc), a, b, e)
    }

    function tz(a) {
        if (!a.length) return ub;
        const b = new Fq(a);
        return c => b.contains(c.Lb)
    }

    function uz(a) {
        return function(b) {
            for (let c of b.Ac)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function vz(a) {
        return a.length ? function(b) {
            const c = b.Ac;
            return a.some(d => c.indexOf(d) > -1)
        } : vb
    }

    function wz(a, b) {
        if (a <= 0) return vb;
        const c = $o(b).scrollHeight - a;
        return function(d) {
            return d.la.g <= c
        }
    }

    function xz(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[Ii(c.Sd, 2) || 0]
        }
    }

    function yz(a) {
        return a.length ? b => a.includes(Ii(b.Sd, 1) || 0) : vb
    }

    function zz(a, b) {
        const c = bz(a, b);
        return function(d) {
            var e = d.ja();
            d = Tv[d.ha.g()];
            var f = c.i,
                h = Aa(e);
            f = f.g.get(h);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(Aa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(Aa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Az() {
        const a = new nz;
        return function(b) {
            var c = b.ja(),
                d = Tv[b.ha.g()];
            a: switch (d) {
                case 1:
                    b = kz(c.previousElementSibling) || mz(c);
                    break a;
                case 4:
                    b = kz(c) || mz(c.nextElementSibling);
                    break a;
                case 2:
                    b = mz(c.firstElementChild);
                    break a;
                case 3:
                    b = kz(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = iz(a, c, d);
            d = a.i;
            nx("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: lf()
            }, .1);
            return !(b || c)
        }
    }
    const qz = (a, b) => b.la.g >= a,
        Bz = (a, b, c) => {
            c = c.la.i;
            return a <= c && c <= b
        };

    function Cz(a, b, c, d, e) {
        var f = Dz(Ez(a, b), a);
        if (f.length === 0) {
            var h = !!z(b, Jr, 6) ? .g() ? .length;
            f = z(b, Er, 28) ? .l() ? .j() && h ? Dz(Fz(a, b), a) : f
        }
        if (f.length === 0) return os(d, "pfno"), [];
        b = f;
        a = e.hd ? Gz(a, b, c) : {
            kb: b,
            kd: null
        };
        const {
            kb: k,
            kd: l
        } = a;
        f = k;
        return f.length === 0 && l ? (os(d, l), []) : [f[e.Sj ? 0 : e.Rj ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function Gz(a, b, c) {
        c = c ? Bi(c, ur, 5) : [];
        const d = zz(a.document, c),
            e = Az();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            kb: [],
            kd: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            kb: [],
            kd: "pfet"
        } : {
            kb: b,
            kd: null
        }
    }

    function Hz(a, b) {
        return a.la.g - b.la.g
    }

    function Ez(a, b) {
        const c = z(b, Jr, 6);
        if (!c) return [];
        b = z(b, Er, 28) ? .l();
        return (b ? .g() ? Ew(c.g(), a) : Dw(c.g(), a, !!b ? .l())).map(d => d.j())
    }

    function Fz(a, b) {
        b = Bi(b, Nr, 1) || [];
        return aw(b, a, {}).filter(c => !c.Ac.includes(6))
    }

    function Dz(a, b) {
        a = Mw(a, b);
        const c = pz(b);
        a = a.filter(d => c(d));
        return a.sort(Hz)
    };
    var Iz = {},
        Jz = {},
        Kz = {},
        Lz = {};

    function Mz() {
        throw Error("Do not instantiate directly");
    }
    Mz.prototype.Uf = null;
    Mz.prototype.Ja = function() {
        return this.content
    };
    Mz.prototype.toString = function() {
        return this.content
    };

    function Nz(a) {
        if (a.Vf !== Iz) throw Error("Sanitized content was not of kind HTML.");
        return wd(a.toString())
    }

    function Oz() {
        Mz.call(this)
    }
    Ja(Oz, Mz);
    Oz.prototype.Vf = Iz;

    function Pz(a) {
        if (a != null) switch (a.Uf) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Qz(a) {
        return Rz(a, Iz) ? a : a instanceof vd ? Sz(ud(a).toString()) : Sz(String(String(a)).replace(Tz, Uz), Pz(a))
    }
    var Sz = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.Uf = d);
            return c
        }
    }(Oz);

    function Vz(a) {
        return Wz(String(a), () => "").replace(Xz, "&lt;")
    }
    const Yz = RegExp.prototype.hasOwnProperty("sticky"),
        Zz = new RegExp((Yz ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", Yz ? "gy" : "g");

    function Wz(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            h, k, l = 0;
        for (; l < d;) {
            switch (e) {
                case 0:
                    var m = a.indexOf("<", l);
                    if (m < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(l));
                        l = d
                    } else c.push(a.substring(l, m)), k = m, l = m + 1, Yz ? (Zz.lastIndex = l, m = Zz.exec(a)) : (Zz.lastIndex = 0, m = Zz.exec(a.substring(l))), m ? (f = ["<", m[0]], h = m[1], e = 1, l += m[0].length) : c.push("<");
                    break;
                case 1:
                    m = a.charAt(l++);
                    switch (m) {
                        case "'":
                        case '"':
                            let n = a.indexOf(m, l);
                            n < 0 ? l = d : (f.push(m, a.substring(l, n + 1)), l = n + 1);
                            break;
                        case ">":
                            f.push(m);
                            c.push(b(f.join(""),
                                h));
                            e = 0;
                            f = [];
                            k = h = null;
                            break;
                        default:
                            f.push(m)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && l >= d && (l = k + 1, c.push("<"), e = 0, f = [], k = h = null)
        }
        return c.join("")
    }

    function $z(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function aA(a) {
        return Rz(a, Iz) ? String(Vz(a.Ja())).replace(bA, Uz) : String(a).replace(Tz, Uz)
    }

    function cA(a) {
        return Rz(a, Iz) ? String(Vz(a.Ja())).replace(dA, Uz) : String(a).replace(eA, Uz)
    }
    const fA = /['()]/g;

    function gA(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function W(a) {
        Rz(a, Lz) ? a = $z(a.Ja()) : a == null ? a = "" : a instanceof gd ? a = $z(fd(a)) : a instanceof rd ? a = $z(qd(a)) : (a = String(a), a = hA.test(a) ? a : "zSoyz");
        return a
    }

    function Rz(a, b) {
        return a != null && a.Vf === b
    }
    const iA = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Uz(a) {
        return iA[a]
    }
    const jA = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function kA(a) {
        return jA[a]
    }
    const lA = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function mA(a) {
        return lA[a]
    }
    const Tz = /[\x00\x22\x26\x27\x3c\x3e]/g,
        bA = /[\x00\x22\x27\x3c\x3e]/g,
        eA = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        dA = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        nA = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        oA = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        hA = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        pA =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        Xz = /</g;
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const qA = Math.floor;
    var rA = /^xn--/,
        sA = /[\x2E\u3002\uFF0E\uFF61]/g;
    const tA = {
        Tm: "Overflow: input needs wider integers to process",
        Pm: "Illegal input >= 0x80 (not a basic code point)",
        zm: "Invalid input"
    };

    function uA(a) {
        throw RangeError(tA[a]);
    }

    function vA(a, b) {
        const c = a.split("@");
        let d = "";
        c.length > 1 && (d = c[0] + "@", a = c[1]);
        a = a.replace(sA, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function wA(a) {
        return vA(a, b => {
            if (rA.test(b) && b.length > 4) {
                b = b.slice(4).toLowerCase();
                const k = [],
                    l = b.length;
                let m = 0,
                    n = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                d < 0 && (d = 0);
                for (var e = 0; e < d; ++e) b.charCodeAt(e) >= 128 && uA("Illegal input >= 0x80 (not a basic code point)"), k.push(b.charCodeAt(e));
                for (d = d > 0 ? d + 1 : 0; d < l;) {
                    e = m;
                    for (let p = 1, q = 36;; q += 36) {
                        d >= l && uA("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36;
                        (f >= 36 || f > qA((2147483647 - m) / p)) && uA("Overflow: input needs wider integers to process");
                        m += f * p;
                        var h = q <= c ? 1 : q >= c + 26 ? 26 : q - c;
                        if (f < h) break;
                        f = 36 - h;
                        p > qA(2147483647 / f) && uA("Overflow: input needs wider integers to process");
                        p *= f
                    }
                    f = k.length + 1;
                    c = m - e;
                    h = 0;
                    c = e == 0 ? qA(c / 700) : c >> 1;
                    for (c += qA(c / f); c > 455; h += 36) c = qA(c / 35);
                    c = qA(h + 36 * c / (c + 38));
                    qA(m / f) > 2147483647 - n && uA("Overflow: input needs wider integers to process");
                    n += qA(m / f);
                    m %= f;
                    k.splice(m++, 0, n)
                }
                b = String.fromCodePoint.apply(null, k)
            }
            return b
        })
    };
    const xA = new qb(rb, "558153351");

    function yA(a, b, c) {
        var d = a.Na.contentWindow;
        const e = !a.A && typeof a.g === "number";
        a.C ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        }, e && (b.experimentId = a.g), a.i.length > 0 && (b.adfiliateWp = a.i), d.postMessage(b, "https://www.gstatic.com")) : (d = d.google.search.cse.element.getElement(a.B), c = {
            rsToken: c,
            hostName: a.host
        }, e && (c.afsExperimentId = a.g), a.i.length > 0 && (c.adfiliateWp = a.i), d.execute(b, void 0, c))
    }
    var zA = class {
        constructor(a, b, c, d, e, f, h, k, l, m, n, p = !1, q = !1, t = !1, w = "") {
            this.Na = a;
            this.l = b;
            this.B = c;
            this.j = d;
            this.M = e;
            this.host = f.host;
            this.origin = f.origin;
            this.language = h;
            this.G = k;
            this.g = l;
            this.H = p;
            this.C = m;
            this.F = n;
            this.I = q;
            this.A = t;
            this.i = w
        }
        J() {
            this.Na.setAttribute("id", "prose-iframe");
            this.Na.setAttribute("width", "100%");
            this.Na.setAttribute("height", "100%");
            var a = Sd `box-sizing:border-box;border:unset;`;
            this.Na.style.cssText = fd(a);
            var b = ad("https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host)),
                c = wA(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.B;
            var d = this.j,
                e = this.M;
            const f = this.host;
            c = this.G.replace("${website}", c);
            const h = this.I;
            var k = Sz,
                l = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.H ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(nA, kA) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            Rz(b, Jz) || Rz(b, Kz) ? b = String(b).replace(oA, mA) : b instanceof Sc ? b = String(Uc(b)).replace(oA, mA) : b instanceof Hc ? b = String(Kc(b).toString()).replace(oA, mA) : (b = String(b), b = pA.test(b) ? b.replace(oA, mA) : "about:invalid#zSoyz");
            a = k(l + aA(b) + '" alt="' + aA(f) + ' icon"><p class="cse-header"><strong>' +
                Qz(c) + '</strong></p><div class="gcse-search" data-gname="' + aA(a) + '" data-adclient="' + aA(d) + '" data-adchannel="' + aA(e) + '" data-as_sitesearch="' + aA(f) + '" data-personalizedAds="false"></div></div>' + (h ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = Nz(a);
            this.C ? (a = this.Na, d = Nc(new qb(rb, "https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: this.F || xA,
                cxId: this.l,
                host: this.host,
                lang: this.language,
                lrh: this.G,
                client: this.j,
                origin: this.origin
            }), a.src = Kc(d).toString()) : (d = new Map([
                    ["cx", this.l],
                    ["language", this.language]
                ]), this.A && (e = Array.isArray(this.g) ? this.g : [this.g], e.length && d.set("fexp", e.join())), e = Rd(d), d = {}, e = `<script src="${Hd(Kc(e).toString())}"`,
                d.async && (e += " async"), d.gi && (e += ` custom-element="${Hd(d.gi)}"`), d.defer && (e += " defer"), d.id && (e += ` id="${Hd(d.id)}"`), d.nonce && (e += ` nonce="${Hd(d.nonce)}"`), d.type && (e += ` type="${Hd(d.type)}"`), d.di && (e += ` crossorigin="${Hd(d.di)}"`), d = wd(e + ">\x3c/script>"), a = Nd({
                    style: Sd `margin:${0};`
                }, [a, d]), this.Na.srcdoc = ud(a))
        }
    };

    function AA(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new BA;
        return a.google_reactive_ads_global_state
    }
    class BA {
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
            this.floatingAdsStacking = new CA;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.i = [];
            this.g = null
        }
    }
    var CA = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function DA(a, b) {
        return new EA(a, b)
    }

    function FA(a) {
        const b = GA(a);
        Ra(a.g.maxZIndexListeners, c => c(b))
    }

    function GA(a) {
        a = Xe(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function HA(a, b) {
        bb(a.g.maxZIndexListeners, c => c === b)
    }
    class IA {
        constructor(a) {
            this.g = AA(a).floatingAdsStacking
        }
    }

    function JA(a) {
        if (a.g == null) {
            var b = a.i,
                c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            FA(b);
            a.g = d
        }
    }

    function KA(a) {
        if (a.g != null) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            FA(b);
            a.g = null
        }
    }
    class EA {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    };

    function LA(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? LA(b) || a : a
    }

    function MA(a, b) {
        return NA(b, a.document.body).flatMap(c => OA(c))
    }

    function NA(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function OA(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function PA(a) {
        a.g !== null && (a.g.Ai.forEach(b => {
            b.inert = !1
        }), a.g.zj ? .focus(), a.g = null)
    }

    function QA(a, b) {
        PA(a);
        const c = LA(a.win.document);
        b = MA(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.g = {
            zj: c,
            Ai: b
        }
    }
    var RA = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
        Xd() {
            PA(this)
        }
    };

    function SA(a) {
        return new TA(a, new Bp(a, a.document.body), new Bp(a, a.document.documentElement), new Bp(a, a.document.documentElement))
    }

    function UA(a) {
        Ap(a.j, "scroll-behavior", "auto");
        const b = VA(a.win);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.win.scrollY);
        Ap(a.g, "position", "fixed");
        Ap(a.g, "top", `${-b.previousWindowScroll}px`);
        Ap(a.g, "width", "100%");
        Ap(a.g, "overflow-x", "hidden");
        Ap(a.g, "overflow-y", "hidden");
        Ap(a.i, "overflow-x", "hidden");
        Ap(a.i, "overflow-y", "hidden")
    }

    function WA(a) {
        zp(a.g);
        zp(a.i);
        const b = VA(a.win);
        b.activePageScrollPreventers.delete(a);
        b.activePageScrollPreventers.size === 0 && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        zp(a.j)
    }
    var TA = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    };

    function VA(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    }

    function XA(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function YA(a, b) {
        return ZA(`#${a}`, b)
    }

    function $A(a, b) {
        return ZA(`.${a}`, b)
    }

    function ZA(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function aB(a, b) {
        const c = a.document.createElement("div");
        x(c, rs(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Za: c,
            shadowRoot: a
        }
    };

    function bB(a, b) {
        b = aB(a, b);
        a.document.body.appendChild(b.Za);
        return b
    }

    function cB(a, b) {
        const c = new Q(b.P);
        Kp(b, !0, () => void c.g(!0));
        Kp(b, !1, () => {
            a.setTimeout(() => {
                b.P || c.g(!1)
            }, 700)
        });
        return Fp(c)
    };

    function dB(a) {
        const b = a.md;
        var c = a.ff,
            d = a.jd;
        const e = a.Yc,
            f = a.Pf,
            h = a.he,
            k = a.Ma;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            W(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? k ? 20 : 16 : 0;
        a += W(c) + "px; transition: transform " + W(h) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + W(c) + "px; border-bottom-right-radius: " + W(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + W(c) + "px; border-bottom-left-radius: " + W(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (k ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (k ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            aA(f) + '">';
        d = k ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + aA(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + aA(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + aA(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return Sz(a)
    };

    function eB(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && typeof b.pushState === "function" ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new fB(a, b);
        b.J();
        return b ? a.googNavStack = b : null
    }

    function gB(a, b) {
        return b ? b.googNavStackId === a.j ? b : null : null
    }

    function hB(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            const d = c === 0;
            a.K.requestAnimationFrame(() => void b[c].Ij({
                isFinal: d
            }))
        }
    }

    function iB(a, b) {
        b = gb(a.stack, b, (c, d) => c - d.og.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class fB extends P {
        constructor(a, b) {
            super();
            this.K = a;
            this.g = b;
            this.stack = [];
            this.j = Math.random() * 1E9 >>> 0;
            this.A = 0;
            this.l = c => {
                (c = gB(this, c.state)) ? hB(this, iB(this, c.googNavStackStateId + .5)): hB(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.j,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        Ij: c,
                        og: a
                    })
                });
            this.g.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = iB(this, a.googNavStackStateId);
                    var d;
                    if (d = c.length > 0) {
                        d = c[0].og;
                        const e = gB(this, this.g.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.g.go(-c.length);
                    hB(this, c)
                }
            }
        }
        J() {
            this.K.addEventListener("popstate", this.l)
        }
        i() {
            this.K.removeEventListener("popstate", this.l);
            super.i()
        }
    };

    function jB(a) {
        return (a = eB(a)) ? new kB(a) : null
    }

    function lB(a) {
        if (!a.g) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.g = c;
            b.then(() => {
                a.g && !a.C && (a.g = null, Qp(a.j))
            })
        }
    }
    var kB = class extends P {
        constructor(a) {
            super();
            this.l = a;
            this.j = new Rp;
            this.g = null
        }
    };

    function mB(a, b, c) {
        var d = c.ye ? null : new RA(a);
        const e = DA(new IA(a), c.zIndex - 1);
        b = nB(a, b, c);
        d = new oB(a, b, d, c.uc, SA(a), e);
        d.J();
        (c.cg || c.cg === void 0) && pB(d);
        c.qc && ((a = jB(a)) ? qB(d, a, c.Ye) : c.Ye ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function pB(a) {
        a.A = b => {
            b.key === "Escape" && a.g.P && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function qB(a, b, c) {
        Kp(a.g, !0, () => {
            try {
                lB(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Kp(a.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Op(b.j).listen(() => void a.collapse());
        xp(a, b)
    }

    function rB(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function sB(a) {
        a.win.setTimeout(() => {
            a.g.P && rB(a).Ha.focus()
        }, 500)
    }

    function tB(a) {
        const {
            We: b,
            Wh: c
        } = rB(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function uB(a) {
        Kp(a.j, !1, () => {
            rB(a).Ha.classList.add("hd-hidden")
        })
    }
    var oB = class extends P {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.B = b;
            this.l = c;
            this.uc = d;
            this.g = new Q(!1);
            this.j = cB(a, this.g);
            Kp(this.j, !0, () => {
                UA(e);
                JA(f)
            });
            Kp(this.j, !1, () => {
                WA(e);
                KA(f)
            })
        }
        show({
            Zf: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            rB(this).Ha.classList.remove("hd-hidden");
            vp(this.win);
            rB(this).Ha.classList.add("hd-revealed");
            this.g.g(!0);
            this.l && (QA(this.l, rB(this).bb.Za), this.uc && sB(this));
            a && Kp(this.j, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            rB(this).Ha.classList.remove("hd-revealed");
            this.g.g(!1);
            this.l ? .Xd()
        }
        isVisible() {
            return this.j
        }
        J() {
            tB(this);
            uB(this)
        }
        i() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.B.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .Xd();
            super.i()
        }
    };

    function nB(a, b, c) {
        const d = bB(a, c.ze),
            e = d.shadowRoot;
        e.appendChild(Ee(new pe(a.document), Nz(dB({
            md: c.md,
            ff: c.ff ? ? !0,
            jd: c.jd || !1,
            Yc: c.Yc,
            Pf: c.Pf || "",
            zIndex: c.zIndex,
            he: .5,
            Ma: c.Ma || !1
        }))));
        const f = YA("hd-drawer-container", e);
        c.Ee ? .i(h => {
            f.setAttribute("aria-label", h)
        });
        c = YA("hd-content-container", e);
        c.appendChild(b);
        vp(a);
        return {
            Ha: f,
            We: YA("hd-modal-background", e),
            se: c,
            Wh: YA("hd-close-button", e),
            ko: YA("hd-back-arrow-button", e),
            bb: d
        }
    };

    function vB(a) {
        const b = a.tj,
            c = a.Ji;
        var d = a.he;
        const e = a.Ma;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            W(c) + "%; transition: transform " + W(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += W(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            W(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + W((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            W(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + W(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + W(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            W(d) + "px " + W(d) + "px 0 0; background: white; display: flex; height: " + W(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            wB("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + wB("ved-fixed-handle") + "</div></div></div>";
        return Sz(a)
    }

    function wB(a) {
        return Sz('<div class="ved-handle" id="' + aA(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function xB(a) {
        return eq(a.g).map(b => b ? yB(a, b) : 0)
    }

    function yB(a, b) {
        switch (a.direction) {
            case 0:
                return zB(-b.rh);
            case 1:
                return zB(-b.qh);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function AB(a) {
        return gq(a.g).map(b => yB(a, b))
    }
    var BB = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function zB(a) {
        return a === 0 ? 0 : a
    };

    function Y(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function CB(a) {
        a.win.setTimeout(() => {
            a.g.P && Y(a).Ha.focus()
        }, 500)
    }

    function DB(a) {
        Y(a).Ha.classList.remove("ved-hidden");
        vp(a.win);
        const {
            pa: b,
            Ya: c
        } = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || EB(a);
        Y(a).Ha.classList.add("ved-revealed");
        a.g.g(!0);
        a.j && (QA(a.j, Y(a).bb.Za), a.uc && CB(a))
    }

    function FB(a) {
        return cB(a.win, a.g)
    }

    function GB(a, b) {
        const c = new Q(b());
        Op(a.H).listen(() => void c.g(b()));
        return Fp(c)
    }

    function HB(a) {
        const {
            pa: b,
            Hd: c
        } = Y(a);
        return GB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function IB(a) {
        const {
            pa: b,
            Hd: c
        } = Y(a);
        return GB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function JB(a) {
        const {
            pa: b
        } = Y(a);
        return GB(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function KB(a) {
        return Gp(HB(a), JB(a))
    }

    function LB(a) {
        const {
            pa: b,
            Ya: c
        } = Y(a);
        return GB(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function EB(a) {
        Y(a).Ya.classList.add("ved-snap-point-top");
        var b = MB(a, Y(a).Ya);
        Y(a).pa.scrollTop = b;
        NB(a)
    }

    function OB(a) {
        Ip(HB(a), !0, () => {
            const {
                hg: b,
                Lc: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Ip(HB(a), !1, () => {
            const {
                hg: b,
                Lc: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function PB(a) {
        const b = lq(a.win, Y(a).se);
        oq(b).i(() => void QB(a));
        xp(a, b)
    }

    function RB(a) {
        Ip(SB(a), !0, () => {
            Y(a).Ig.classList.remove("ved-hidden")
        });
        Ip(SB(a), !1, () => {
            Y(a).Ig.classList.add("ved-hidden")
        })
    }

    function TB(a) {
        const b = () => void Qp(a.F),
            {
                We: c,
                Ya: d,
                Ii: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Kp(UB(a), !0, b)
    }

    function VB(a) {
        Kp(FB(a), !1, () => {
            EB(a);
            Y(a).Ha.classList.add("ved-hidden")
        })
    }

    function NB(a) {
        Jp(a.l, !1, () => void Qp(a.H))
    }

    function QB(a) {
        if (!a.l.P) {
            var {
                Wf: b,
                se: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(WB(a), d);
            a.l.g(!0);
            var e = XB(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function SB(a) {
        const {
            pa: b,
            Ya: c
        } = Y(a);
        return GB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function UB(a) {
        return Ep(a.A.map(Qq), YB(a))
    }

    function YB(a) {
        return GB(a, () => Y(a).pa.scrollTop === 0)
    }

    function MB(a, b) {
        ({
            Lc: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function ZB(a, b) {
        a.A.g(!0);
        const {
            Lc: c,
            pa: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void $B(a, b)
    }

    function $B(a, b) {
        const {
            Lc: c,
            pa: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).pa.scrollTop = b;
        NB(a);
        a.A.g(!1)
    }

    function XB(a) {
        const b = Y(a).pa.scrollTop;
        ZB(a, b);
        return () => void $B(a, b)
    }

    function WB(a) {
        const {
            pa: b,
            Hd: c,
            Wf: d,
            Ya: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var h = d.getBoundingClientRect();
        const k = e.getBoundingClientRect();
        h = h.top - f.top;
        return Math.max(a.height - k.height - h, Math.min(a.height, a.bottom - f.top) - h)
    }
    var aC = class extends P {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.B = b;
            this.I = c;
            this.j = d;
            this.uc = e;
            this.F = new Rp;
            this.H = new Rp;
            this.g = new Q(!1);
            this.A = new Q(!1);
            this.l = new Q(!1)
        }
        J() {
            EB(this);
            OB(this);
            PB(this);
            RB(this);
            TB(this);
            VB(this);
            Y(this).pa.addEventListener("scroll", () => void NB(this))
        }
        i() {
            const a = this.B.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .Xd();
            super.i()
        }
    };

    function bC(a, b, c) {
        const d = bB(a, c.ze),
            e = d.shadowRoot;
        e.appendChild(Ee(new pe(a.document), Nz(vB({
            tj: c.Mg * 100,
            Ji: c.ig * 100,
            zIndex: c.zIndex,
            he: .5,
            Ma: c.Ma || !1
        }))));
        const f = YA("ved-drawer-container", e);
        c.Ee ? .i(h => {
            f.setAttribute("aria-label", h)
        });
        c = YA("ved-content-container", e);
        c.appendChild(b);
        vp(a);
        return {
            Ha: f,
            We: YA("ved-modal-background", e),
            ih: YA("ved-ui-revealer", e),
            pa: YA("ved-scroller", e),
            Lc: YA("ved-scrolled-stack", e),
            Ii: YA("ved-fully-closed-anchor", e),
            Ya: YA("ved-partially-extended-anchor", e),
            Wf: YA("ved-content-sizer",
                e),
            se: c,
            uo: YA("ved-moving-handle", e),
            Hd: YA("ved-moving-handle-holder", e),
            Hi: YA("ved-fixed-handle", e),
            hg: YA("ved-fixed-handle-holder", e),
            Ig: YA("ved-over-scroll-block", e),
            bb: d
        }
    };

    function cC(a, b, c) {
        var d = DA(new IA(a), c.zIndex - 1);
        b = bC(a, b, c);
        const e = c.ye ? null : new RA(a);
        var f = b.Hi;
        f = new hq(new Zp(a, f), new Wp(f));
        var h = f.g;
        h.A.addEventListener("mousedown", h.G);
        h.l.addEventListener("mouseup", h.C);
        h.l.addEventListener("mousemove", h.B, {
            passive: !1
        });
        h = f.i;
        h.i.addEventListener("touchstart", h.B);
        h.i.addEventListener("touchend", h.A);
        h.i.addEventListener("touchmove", h.C, {
            passive: !1
        });
        b = new aC(a, b, new BB(f), e, c.uc);
        b.J();
        d = new dC(a, b, SA(a), d);
        xp(d, b);
        d.J();
        c.qc && ((a = jB(a)) ? eC(d, a, c.Ye) :
            c.Ye ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function eC(a, b, c) {
        Kp(a.g.g, !0, () => {
            try {
                lB(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Kp(a.g.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Op(b.j).listen(() => void a.collapse());
        xp(a, b)
    }

    function fC(a) {
        Kp(Ep(KB(a.g), LB(a.g)), !0, () => {
            Y(a.g).Ya.classList.remove("ved-snap-point-top")
        });
        Ip(IB(a.g), !0, () => {
            Y(a.g).pa.classList.add("ved-no-snap")
        });
        Ip(IB(a.g), !1, () => {
            Y(a.g).pa.classList.remove("ved-no-snap")
        });
        Kp(IB(a.g), !1, () => {
            var b = a.g;
            var c = Y(b).Hd;
            c = ZB(b, MB(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function gC(a) {
        const b = a.g.I;
        xB(b).listen(c => {
            c = -c;
            if (c > 0) {
                const {
                    ih: d
                } = Y(a.g);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                ih: c
            } = Y(a.g)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        AB(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var dC = class extends P {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.g = b;
            Kp(FB(b), !0, () => {
                UA(c);
                JA(d)
            });
            Kp(FB(b), !1, () => {
                WA(c);
                KA(d)
            })
        }
        show({
            Zf: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            DB(this.g);
            a && Kp(FB(this.g), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.g;
            Y(a).Ha.classList.remove("ved-revealed");
            a.g.g(!1);
            a.j ? .Xd()
        }
        isVisible() {
            return FB(this.g)
        }
        J() {
            Op(this.g.F).listen(() => {
                this.collapse()
            });
            fC(this);
            gC(this);
            vp(this.win)
        }
    };

    function hC(a, b) {
        return lf() === 2 ? cC(a.win, b, {
            Mg: .95,
            ig: .95,
            zIndex: 2147483645,
            qc: !0,
            Ma: !0
        }) : mB(a.win, b, {
            md: "min(65vw, 768px)",
            Yc: "",
            jd: !1,
            zIndex: 2147483645,
            qc: !0,
            ff: !1,
            Ma: !0
        })
    }

    function iC(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.R.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.H,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.B,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.Bb.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.I
            };
        a.ua && (c.adLoadedCallback = a.Ka.bind(a));
        a.j && a.A instanceof
        Array && (c.fexp = a.A.join(","));
        a.win._googCsa("relatedsearch", c, b)
    }

    function jC(a) {
        a.win.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.g.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var kC = class extends P {
        constructor(a, b, c, d, e, f, h, k, l, m = () => {}) {
            super();
            this.win = a;
            this.R = b;
            this.M = e;
            this.B = f;
            this.l = k;
            this.Fa = l;
            this.ib = m;
            this.language = d ? .g() || "en";
            this.hb = d ? .j() || "Search results from ${website}";
            this.ua = T(kt);
            this.H = c.replace("ca", "partner");
            this.ca = new pe(a.document);
            this.g = De(this.ca, "IFRAME");
            this.I = h.i ? h.g : "9d449ff4a772956c6";
            this.A = (this.j = T(qt)) ? N(Eo).g().concat(this.B) : this.B;
            this.F = new zA(this.g, this.I, "auto-rs-prose", this.H, "AutoRsVariant", a.location, this.language, this.hb,
                this.A, this.l, this.Fa, this.j);
            this.ia = hC(this, this.g);
            xp(this, this.ia)
        }
        J() {
            this.R.length !== 0 && (this.ua || Lv(1075, () => {
                this.F.J()
            }, this.win), Lv(1076, () => {
                const a = De(this.ca, "SCRIPT");
                he(a, Qd `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), iC(this), ms(this.M, {
                sts: "ok"
            }), this.l && jC(this))
        }
        Ka(a, b) {
            b ? Lv(1075, () => {
                this.F.J()
            }, this.win) : (this.ib(), os(this.M, "pfns"))
        }
        Bb(a, b) {
            yA(this.F, a, b);
            (() => {
                if (!this.l) {
                    const c = new ResizeObserver(async e => {
                            this.g.height =
                                "0";
                            await new Promise(f => {
                                this.win.requestAnimationFrame(f)
                            });
                            this.g.height = e[0].target.scrollHeight.toString()
                        }),
                        d = () => {
                            const e = this.g.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.ia.show()
            })()
        }
    };
    var lC = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };

    function mC(a) {
        const b = jw(a.l.ha),
            c = a.C.Ja(a.G, () => a.i());
        b.appendChild(c);
        a.A && (b.className = a.A);
        return {
            xi: b,
            ci: c
        }
    }
    class nC {
        constructor(a, b, c, d) {
            this.G = a;
            this.l = b;
            this.C = c;
            this.A = d || null;
            this.g = null;
            this.j = new Q(null)
        }
        J() {
            const a = mC(this);
            this.g = a.xi;
            Kw(this.l, this.g);
            this.j.g(a.ci)
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.j.g(null)
        }
        B() {
            return this.j
        }
    };
    async function oC(a) {
        await new Promise(b => {
            setTimeout(() => {
                try {
                    pC(a)
                } catch (c) {
                    os(a.i, "pfere", c)
                }
                b()
            })
        })
    }

    function pC(a) {
        if ((!a.hd || !qC(a.config, a.aa, a.i)) && rC(a.g ? .j(), a.i)) {
            var b = a.g ? .l();
            b = Cz(a.win, a.config, a.aa, a.i, {
                Sj: !!b ? .A(),
                hd: a.hd,
                vo: !!b ? .g(),
                Rj: !!b ? .C()
            });
            b = sC(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = a.g ? .g() ? .g() || 0,
                f = tC(a.g),
                h = !!a.g ? .C(),
                k = String(a.g ? .B());
            if (!z(a.config, xr, 25) ? .g()) {
                var l = () => {
                    d.forEach(m => {
                        m.i()
                    })
                };
                Lv(1074, () => {
                    (new kC(a.win, c, a.webPropertyCode, a.g ? .j(), a.i, e, f, h, k, l)).J()
                }, a.win)
            }
        }
    }
    var uC = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.aa = e;
            this.hd = f;
            this.i = new ps(a, b, z(this.config, Er, 28) || new Er);
            this.g = z(this.config, Er, 28)
        }
    };

    function qC(a, b, c) {
        a = z(a, Er, 28) ? .g() ? .g() || 0;
        const d = N(Zu).g(pt.g, pt.defaultValue);
        return d && d.includes(a.toString()) ? !1 : (b ? ii(b, 2, Wg) : []).length === 0 ? (os(c, "pfeu"), !0) : !1
    }

    function rC(a, b) {
        const c = N(Zu).g(nt.g, nt.defaultValue);
        a = a ? .g() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (os(b, "pflna"), !1) : !0
    }

    function sC(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                h = b.document.createElement("div");
            h.setAttribute("id", f);
            d = new nC(b, d, new us(h), "autors-widget");
            d.J();
            c[f] = d
        }
        return c
    }

    function tC(a) {
        const b = a ? .G() || !1;
        a = a ? .A() || "";
        return new lC(b, a)
    };
    var vC = (a, b) => {
        const c = [];
        z(a, Or, 18) && c.push(2);
        b.aa && c.push(0);
        z(a, Er, 28) && Mi(z(a, Er, 28), 1) == 1 && c.push(1);
        z(a, Cr, 31) && Mi(z(a, Cr, 31), 1) == 1 && c.push(5);
        z(a, zr, 32) && c.push(6);
        z(a, Rr, 34) && H(z(a, Rr, 34), 3) && c.push(7);
        return c
    };

    function wC(a, b) {
        const c = De(oe(a), "IMG");
        xC(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        x(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: b == null ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function yC(a, b) {
        const c = b.document.createElement("button");
        xC(b, c);
        x(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.i));
        c.addEventListener("click", d => {
            a.j();
            d.stopPropagation()
        });
        return c
    }

    function zC(a, b, c) {
        const d = De(oe(b), "IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.l);
        xC(b, d);
        x(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function AC(a) {
        const b = a.document.createElement("ins");
        xC(a, b);
        x(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class BC {
        constructor(a, b, c) {
            this.i = a;
            this.l = b;
            this.j = c;
            this.g = new Q(!1)
        }
        Ja(a, b, c, d) {
            const e = wC(a, d),
                f = wC(a),
                h = yC(this, a),
                k = zC(this, a, c);
            a = AC(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(h);
            a.appendChild(k);
            this.g.listen(l => {
                x(e, {
                    display: l ? "none" : "inline"
                });
                x(f, {
                    display: l ? "inline" : "none"
                });
                l ? (x(h, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), x(k, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (x(h, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), x(k, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        jg() {
            return 40
        }
        Gg() {
            this.g.g(!1);
            return 0
        }
        Hg() {
            this.g.g(!0)
        }
    }

    function xC(a, b) {
        x(b, rs(a));
        x(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };
    var CC = a => a.googlefc = a.googlefc || {},
        DC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        },
        EC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        FC = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new Fr;
                b = nj(b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = nj(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = nj(b, 3, a.defaultFloatingToolbarDismissPrivacySettings).i()
            } else a = null;
            return a
        };

    function GC(a, b) {
        const c = b.document.createElement("button");
        HC(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.i
        };
        a.g && (b["border-top"] = a.g, b["border-bottom"] = a.g);
        x(c, b);
        c.addEventListener("click", d => {
            a.C();
            d.stopPropagation()
        });
        return c
    }

    function IC(a, b, c, d) {
        const e = b.document.createElement("div");
        x(e, rs(b));
        x(e, {
            "align-items": "center",
            "background-color": a.i,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        x(f, rs(b));
        x(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = h => {
            h.matches ? (x(e, {
                    "flex-direction": "row"
                }), a.g && x(e, {
                    "border-top": a.g,
                    "border-bottom": a.g
                }), x(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                x(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (x(e, {
                border: "0",
                "flex-direction": "column"
            }), x(f, {
                "margin-left": "0",
                "text-align": "center"
            }), x(c, {
                "margin-right": "0",
                width: "100%"
            }), a.g && x(c, {
                "border-top": a.g,
                "border-bottom": a.g
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function HC(a, b, c) {
        x(c, rs(b));
        x(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.B,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class JC {
        constructor(a, b, c, d, e, f = null, h = null, k = null) {
            this.A = a;
            this.C = b;
            this.G = c;
            this.i = d;
            this.B = e;
            this.l = f;
            this.g = h;
            this.j = k
        }
        Ja(a) {
            const b = a.document.createElement("div");
            HC(this, a, b);
            x(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.i
            });
            if (this.l) {
                var c = De(oe(a), "IMG");
                c.src = this.l;
                HC(this, a, c);
                x(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            HC(this, a, c);
            x(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = GC(this, a);
            c.appendChild(b);
            return this.j ? IC(this, a, c, this.j) : c
        }
    };

    function KC(a, b) {
        b = b.filter(c => z(c, br, 4) ? .g() === 5 && Qi(c, 8) === 1);
        b = aw(b, a);
        a = Mw(b, a);
        a.sort((c, d) => d.la.g - c.la.g);
        return a[0] || null
    };

    function LC({
        Vd: a,
        ed: b,
        Id: c,
        Wd: d,
        gd: e,
        Jd: f
    }) {
        const h = [];
        for (let p = 0; p < f; p++)
            for (let q = 0; q < c; q++) {
                var k = q,
                    l = c - 1,
                    m = p,
                    n = f - 1;
                h.push({
                    x: a + (l === 0 ? 0 : k / l) * (b - a),
                    y: d + (n === 0 ? 0 : m / n) * (e - d)
                })
            }
        return h
    }

    function MC(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function NC(a, b) {
        var c = LC({
            Vd: b.left,
            ed: b.right,
            Id: 10,
            Wd: b.top,
            gd: b.bottom,
            Jd: 10
        });
        b = new Set;
        for (const d of c)(c = OC(a, d)) && b.add(c);
        return b
    }

    function PC(a, b) {
        for (const c of b)
            if (b = OC(a, c)) return b;
        return null
    }

    function QC(a, b, c) {
        if (Gk(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || Jk(b).width <= 1 && Jk(b).height <= 1 || a.g.yi && !a.g.yi(b) ? !0 : !1;
        a.g.gg && a.g.gg(b, c, d);
        return d ? null : b
    }

    function OC(a, b) {
        var c = MC(a.K.document, b);
        if (c) {
            var d;
            if (!(d = QC(a, c, b))) a: {
                d = a.K.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = QC(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var RC = class {
        constructor(a, b = {}) {
            this.K = a;
            this.g = b
        }
    };

    function SC({
        K: a,
        nj: b,
        gj: c,
        Vh: d,
        Do: e,
        Eo: f,
        ta: h
    }) {
        let k = 0;
        try {
            k |= Uo(a, f);
            const n = Math.min(a.screen.width || 0, a.screen.height || 0);
            k |= n ? n < 320 ? 8192 : 0 : 2048;
            k |= a.navigator && TC(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = k;
                const p = a.innerHeight;
                var l = Cf(a) * p >= b;
                var m = f | (l ? 0 : 1024)
            } else m = k | (a.innerHeight >= a.innerWidth ? 0 : 8);
            k = m;
            k |= Xo(a, c, !0, e)
        } catch {
            k |= 32
        }
        switch (d) {
            case 2:
                UC(a, h) && (k |= 16777216);
                break;
            case 1:
                VC(a, h) && (k |= 16777216)
        }
        return k
    }

    function TC(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var UC = (a, b = null) => {
            const c = LC({
                Vd: 0,
                ed: a.innerWidth,
                Id: 3,
                Wd: 0,
                gd: Math.min(Math.round(a.innerWidth / 320 * 50), WC) + 15,
                Jd: 3
            });
            return PC(XC(a, b), c) != null
        },
        VC = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), WC) + 15,
                f = LC({
                    Vd: 0,
                    ed: c,
                    Id: 3,
                    Wd: d - e,
                    gd: d,
                    Jd: 3
                });
            e > 25 && f.push({
                x: c - 25,
                y: d - 25
            });
            return PC(XC(a, b), f) != null
        };

    function YC(a, b) {
        var c = T(Ds);
        a: {
            const e = a.innerWidth,
                f = a.innerHeight;
            let h = f;
            for (; h > b;) {
                var d = LC({
                    Vd: 0,
                    ed: e,
                    Id: 9,
                    Wd: h - b,
                    gd: h,
                    Jd: 9
                });
                d = PC(XC(a), d);
                if (!d) {
                    a = f - h;
                    break a
                }
                h = c ? Math.min(d.getBoundingClientRect().top - 1, h - 1) : d.getBoundingClientRect().top - 1
            }
            a = null
        }
        return a
    }

    function XC(a, b = null) {
        return new RC(a, {
            gg: ZC(a, b)
        })
    }

    function ZC(a, b = null) {
        if (b) return (c, d, e) => {
            tl(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const WC = 90 * 1.38;

    function $C(a) {
        a = new aD(a);
        a.J();
        return a
    }

    function bD(a) {
        if (!XA(a.win)) {
            if (a.j.P) {
                const b = dp(a.win);
                if (b > a.g + 100 || b < a.g - 100) a.j.g(!1), a.g = Yo(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void cD(a), 200)
        }
    }

    function cD(a) {
        if (!XA(a.win)) {
            var b = Yo(a.win);
            a.g && a.g > b && (a.g = b);
            b = dp(a.win);
            b >= a.g - 100 && (a.g = Math.max(a.g, b), a.j.g(!0))
        }
    }
    var aD = class extends P {
        constructor(a) {
            super();
            this.win = a;
            this.j = new Q(!1);
            this.g = 0;
            this.l = null;
            this.A = () => void bD(this)
        }
        J() {
            this.win.addEventListener("scroll", this.A);
            this.g = Yo(this.win);
            cD(this)
        }
        i() {
            this.win.removeEventListener("scroll", this.A);
            this.j.g(!1);
            super.i()
        }
    };

    function dD(a) {
        a.g || (a.g = eD(a));
        x(a.g, {
            display: "block"
        });
        a.A.Hg();
        a.j.g(a.C)
    }

    function fD(a) {
        const b = a.A.Gg();
        switch (b) {
            case 0:
                a.j.g(a.C);
                break;
            case 1:
                a.g && (x(a.g, {
                    display: "none"
                }), a.j.g(null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function eD(a) {
        var b = YC(a.l, a.A.jg() + 60);
        b = b == null ? 30 : b + 30;
        const c = a.l.document.createElement("div");
        x(c, rs(a.l));
        x(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.C = a.A.Ja(a.l, () => a.i(), () => {
            a.G.dispose();
            fD(a)
        }, () => {
            a.G.dispose();
            dD(a)
        });
        c.appendChild(a.C);
        a.F && (c.className = a.F);
        a.l.document.body.appendChild(c);
        return c
    }
    class gD {
        constructor(a, b, c) {
            this.l = a;
            this.A = b;
            this.C = null;
            this.j = new Q(null);
            this.F = c || null;
            this.G = $C(a);
            this.g = null
        }
        J() {
            const a = Fp(this.G.j);
            Ip(a, !0, () => void dD(this));
            Kp(a, !1, () => void fD(this))
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.G.dispose();
            this.j.g(null)
        }
        B() {
            return this.j
        }
    };

    function hD(a) {
        a.G.g(0);
        a.l != null && (a.l.i(), a.l = null);
        a.j != null && (a.j.i(), a.j = null)
    }

    function iD(a) {
        a.j = new gD(a.C, a.I, a.F);
        a.j.J();
        Lp(a.A, a.j.B());
        a.G.g(2)
    }
    class jD {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.H = b;
            this.M = c;
            this.I = d;
            this.F = e;
            this.G = new Q(0);
            this.A = new Q(null);
            this.j = this.l = this.g = null
        }
        J() {
            this.H ? (this.l = new nC(this.C, this.H, this.M, this.F), this.l.J(), Lp(this.A, this.l.B()), this.G.g(1), this.g == null && (this.g = new yq(this.C), this.g.J(2E3)), wq(this.g, () => {
                hD(this);
                iD(this)
            })) : iD(this)
        }
        i() {
            hD(this);
            this.g && (this.g.dispose(), this.g = null)
        }
        B() {
            return this.A
        }
    };
    var kD = class {
        constructor(a, b, c) {
            this.position = a;
            this.Ab = b;
            this.Ie = c
        }
    };

    function lD(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function mD(a, b, c) {
        var d = Wo(a);
        d = new kD(b.Ub.Dg(b.mb), b.Ab + 2 * b.mb, Math.min(d, b.Dd) - b.Ub.od() + 2 * b.mb);
        d = d.position.Xf(a, d.Ab, d.Ie);
        var e = Vo(a),
            f = Wo(a);
        c = nD(a, new mk(Wd(d.top, 0, f - 1), Wd(d.right, 0, e - 1), Wd(d.bottom, 0, f - 1), Wd(d.left, 0, e - 1)), c);
        f = oD(c);
        let h = d.top;
        e = [];
        for (let k = 0; k < f.length; k++) f[k].start > h && e.push(new lD(h, f[k].start)), h = f[k].end;
        h < d.bottom && e.push(new lD(h, d.bottom));
        a = Wo(a);
        d = [];
        for (f = e.length - 1; f >= 0; f--) d.push(new lD(a - e[f].end, a - e[f].start));
        a: {
            for (const k of d)
                if (a = k.start + b.mb, a >
                    b.Ub.od() + b.Se ? a = null : (d = Math.min(k.end - b.mb, b.Dd) - a, a = d < b.Ve ? null : {
                        position: b.Ub.oh(a),
                        Ec: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            ke: b,
            jo: c
        }
    }

    function nD(a, b, c) {
        const d = NC(new RC(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function oD(a) {
        return Array.from(a).map(pD).sort((b, c) => b.start - c.start)
    }

    function pD(a) {
        a = a.getBoundingClientRect();
        return new lD(a.top, a.bottom)
    };

    function qD({
        ga: a,
        sa: b
    }) {
        return new rD(a, b)
    }
    var rD = class {
        constructor(a, b) {
            this.ga = a;
            this.sa = b
        }
        Dg(a) {
            return new rD(this.ga - a, this.sa - a)
        }
        Xf(a, b, c) {
            a = Wo(a) - this.ga - c;
            return new mk(a, this.sa + b, a + c, this.sa)
        }
        Mf(a) {
            a.bottom = `${this.ga}px`;
            a.left = `${this.sa}px`;
            a.right = ""
        }
        kg() {
            return 0
        }
        od() {
            return this.ga
        }
        oh(a) {
            return new rD(a, this.sa)
        }
    };

    function sD({
        ga: a,
        Ca: b
    }) {
        return new tD(a, b)
    }
    var tD = class {
        constructor(a, b) {
            this.ga = a;
            this.Ca = b
        }
        Dg(a) {
            return new tD(this.ga - a, this.Ca - a)
        }
        Xf(a, b, c) {
            var d = Vo(a);
            a = Wo(a) - this.ga - c;
            d = d - this.Ca - b;
            return new mk(a, d + b, a + c, d)
        }
        Mf(a) {
            a.bottom = `${this.ga}px`;
            a.right = `${this.Ca}px`;
            a.left = ""
        }
        kg() {
            return 1
        }
        od() {
            return this.ga
        }
        oh(a) {
            return new tD(a, this.Ca)
        }
    };

    function uD(a) {
        const b = a.Ci,
            c = a.Yh,
            d = a.Rh,
            e = a.Mj,
            f = a.Sh;
        a = a.Qh;
        return Sz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + W(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            W(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + W(a) + "px; border-radius: " + W(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + W(a) + "px; margin: 0; border-radius: " + W(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            W(d) + "px; height: " + W(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + W(d) + "px; margin-bottom: " + W(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + W(d) + "px; width: " + W(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            W(d - 6) + "px; width: " + W(d - 6) + "px; border-radius: " + W(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            W(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + W(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            W(16) + "px; max-width: calc(90vw - " + W(d * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + W(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + W(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            W(d * 2) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            aA(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + aA(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function vD(a) {
        const b = a.googleIconName,
            c = a.ariaLabel,
            d = a.backgroundColorCss,
            e = a.iconColorCss;
        a = a.hi;
        return Sz('<div class="ft-button ft-collapsible ft-collapsed ft-last-button">' + ((a instanceof Mz ? a.Ja() : a) ? "<style>@scope {" + W(a) + "}</style>" : "") + '<button class="ft-styless-button" aria-label="' + aA(c) + '" style="background-color: ' + aA(W(d)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + aA(W(e)) + '" aria-hidden="true">' + Qz(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const wD = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function xD(a, b) {
        a = new yD(a, b, zD(a, b));
        a.J();
        return a
    }

    function AD() {
        ({
            ic: a
        } = {
            ic: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function BD(a, b, c) {
        CD(a) === 0 && b.classList.remove("ft-collapsed");
        DD(b, c);
        vp(a.win);
        b.classList.remove("ft-collapsed");
        ED(a);
        return () => void FD(a, b, c)
    }

    function GD(a) {
        HD(a.g.ka.Gc).length === 0 ? (a.l.P ? .Cj(), a.l.g(null), a.g.ka.He.g(!1), a.g.ka.ug.g(!1), a.g.ka.Pe.g(!1)) : (a.g.ka.He.g(!0), ID(a))
    }

    function JD(a, {
        Ah: b = 0,
        ho: c = 0
    }) {
        b = Math.max(HD(a.g.Eb).length + b, 0);
        c = Math.max(HD(a.g.lb).length + c, 0);
        const d = b + c;
        let e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.j.ic && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function CD(a) {
        const b = a.g.lb;
        return HD(a.g.Eb).length + HD(b).length
    }

    function ED(a) {
        const b = a.g.lb,
            c = a.g.separator;
        HD(a.g.Eb).length > 0 && HD(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        CD(a) >= a.j.ic ? a.g.tg.g(!0) : a.g.tg.g(!1);
        CD(a) > 1 ? a.g.ng.g(!0) : a.g.ng.g(!1);
        CD(a) > 0 ? a.g.isVisible.g(!0) : a.g.isVisible.g(!1);
        KD(a);
        LD(a)
    }

    function FD(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), ED(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function KD(a) {
        const b = HD(a.g.Eb).concat(HD(a.g.lb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        CD(a) >= a.j.ic || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function LD(a) {
        const b = HD(a.g.Eb).concat(HD(a.g.lb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.F.g(b.length > 0)
    }

    function MD(a) {
        ip(a.g.ka.Gc.children, b => {
            const c = a.g.ka.Jc;
            FD(a, b, a.g.ka.Gc);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        GD(a)
    }

    function ID(a) {
        if (!a.l.P) {
            var b = ND(a.win, {
                googleIconName: "verified_user",
                ariaLabel: I(a.j.Oa, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.g.ka.ug.g(!a.g.ka.isVisible.P);
                    for (const [, c] of a.g.ka.Jc) c.xg = !0;
                    a.g.ka.Pe.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Tc.classList.add("ft-reg-button");
            BD(a, b.Tc, a.g.lb);
            Lp(b.Zi, a.g.ka.isVisible);
            a.l.g({
                no: b,
                Cj: () => void FD(a, b.Tc, a.g.lb)
            })
        }
    }

    function OD(a) {
        var b = a.g.ka.Pe,
            c = b.g;
        a: {
            for ([, d] of a.g.ka.Jc)
                if (a = d, a.showUnlessUserInControl && !a.xg) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function PD(a) {
        a.g.ka.Xh.listen(() => {
            MD(a)
        })
    }
    var yD = class extends P {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.g = c;
            this.l = new Q(null);
            this.F = new Q(!1)
        }
        addButton(a) {
            a = ND(this.win, a);
            return BD(this, a.Tc, this.g.Eb)
        }
        addRegulatoryMessage(a) {
            const b = this.g.ka.Gc,
                c = QD(this.win, a);
            DD(c.Te, b);
            this.g.ka.Jc.set(c.Te, c);
            GD(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    OD(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    OD(this)
                },
                isDismissed: Np(c.isDismissed),
                removeCallback: () => {
                    var d = c.Te;
                    const e = this.g.ka.Gc;
                    d.parentNode === e && e.removeChild(d);
                    this.g.ka.Jc.delete(d);
                    GD(this)
                }
            }
        }
        H() {
            return Fp(this.l.map(a => a != null))
        }
        B() {
            return Fp(this.F)
        }
        A() {
            return [this.g.container]
        }
        i() {
            const a = this.g.bb.Za;
            a.parentNode ? .removeChild(a);
            super.i()
        }
        J() {
            vq(this.win, wD);
            Lp(this.g.Uj, this.j.Fc);
            this.win.document.body.appendChild(this.g.bb.Za);
            PD(this)
        }
    };

    function zD(a, b) {
        const c = aB(a),
            d = c.shadowRoot;
        d.appendChild(Ee(new pe(a.document), Nz(uD({
            Ci: I(b.Oa, 1),
            Yh: I(b.Oa, 3),
            Rh: 50,
            Mj: 11,
            Sh: 10,
            Qh: 5
        }))));
        const e = $A("ft-container", d),
            f = $A("ft-expand-toggle", d),
            h = $A("ft-expand-toggle-container", d),
            k = new Q(null);
        k.i(q => {
            e.style.zIndex = String(q ? ? 2147483647)
        });
        const l = new Q(!0);
        Ip(l, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        Ip(l, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                l.g(!l.P)
            });
        const m = new Q(!1);
        Ip(m, !0, () => {
            h.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        Ip(m, !1, () => {
            h.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            l.g(!0)
        });
        const n = new Q(!1);
        Ip(n, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        Ip(n, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(q => {
            if (q) {
                q.Mf(e.style);
                q = q.kg();
                switch (q) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${q}`);
                }
                vp(a)
            }
        });
        const p = new Q(!1);
        b = Ep(RD(a, d), p, b.position.map(q => q !== null));
        Ip(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        Ip(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = SD(a, $A("ft-reg-bubble", d));
        return {
            container: e,
            Eb: $A("ft-button-holder", d),
            lb: $A("ft-bottom-button-holder", d),
            separator: $A("ft-separator", d),
            bb: c,
            Uj: k,
            so: l,
            tg: m,
            ng: n,
            isVisible: p,
            ka: b
        }
    }

    function SD(a, b) {
        const c = new Q(!1),
            d = new Q(!1),
            e = Gp(c, d);
        Ip(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        Ip(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new Q(!1);
        Ip(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        Ip(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const h = $A("ft-reg-bubble-close", b),
            k = new Rp;
        h.addEventListener("click", () => {
            Qp(k)
        });
        const l = $A("ft-reg-message-holder", b);
        oq(lq(a, l)).i(() => {
            b.style.height = `${l.offsetHeight}px`
        });
        return {
            Gc: l,
            ug: c,
            Pe: d,
            isVisible: e,
            He: f,
            Jc: new Map,
            Xh: Op(k)
        }
    }

    function ND(a, b) {
        const c = Ee(new pe(a.document), Nz(vD({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043",
            hi: b.buttonExtension ? .styleSheet
        })));
        if (b.cornerNumber !== void 0) {
            const d = Wd(Math.round(b.cornerNumber), 0, 99);
            $A("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && ZA("BUTTON", c).addEventListener("click", b.onClick);
        a = new Q(!1);
        Ip(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        Ip(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Tc: c,
            Zi: a
        }
    }

    function QD(a, b) {
        a = new pe(a.document);
        var c = Sz('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = Ee(a, Nz(c));
        c = $A("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = $A("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            Te: a,
            showUnlessUserInControl: !1,
            xg: !1,
            isDismissed: new Q(!1)
        }
    }

    function DD(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function HD(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function RD(a, b) {
        const c = new Q(!1),
            d = $A("ft-symbol-font-load-test", b);
        b = $A("ft-symbol-reference", d);
        const e = $A("ft-text-reference", d),
            f = lq(a, b);
        Jp(oq(f).map(h => h.width > 0 && h.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function TD(a) {
        const b = new Rp,
            c = bq(a, 2500, () => void Qp(b));
        return new UD(a, () => void VD(a, () => void c()), Op(b))
    }

    function WD(a) {
        const b = new MutationObserver(() => {
            a.g()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        yp(a, () => void b.disconnect())
    }

    function XD(a) {
        a.win.addEventListener("resize", a.g);
        yp(a, () => void a.win.removeEventListener("resize", a.g))
    }
    var UD = class extends P {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = !1
        }
    };

    function VD(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function YD(a) {
        return a.g[a.g.length - 1]
    }
    var $D = class {
        constructor() {
            this.j = ZD;
            this.g = [];
            this.i = new Set
        }
        add(a) {
            if (this.i.has(a)) return !1;
            const b = gb(this.g, a, this.j);
            this.g.splice(b >= 0 ? b : -b - 1, 0, a);
            this.i.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.i.has(a)
        }
        delete(a) {
            bb(this.g, b => b === a);
            return this.i.delete(a)
        }
        clear() {
            this.i.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    };

    function aE(a) {
        var b = a.Ec.P;
        let c;
        for (; a.j.fi() > b && (c = a.i.first());) {
            var d = a,
                e = c;
            bE(d, e);
            d.g.add(e)
        }
        for (;
            (d = YD(a.g)) && a.j.Oi() <= b;) cE(a, d);
        for (;
            (d = YD(a.g)) && (c = a.i.first()) && d.priority > c.priority;) b = a, e = c, bE(b, e), b.g.add(e), cE(a, d)
    }

    function cE(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.wf = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function bE(a, b) {
        b.wf && b.wf();
        b.wf = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var dE = class {
        constructor(a, b) {
            this.Ec = a;
            this.j = b;
            this.g = new $D;
            this.i = new $D;
            this.l = 0;
            this.Ec.listen(() => void aE(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                Cf: this.l++,
                isInToolbar: new Q(!1)
            };
            this.g.add(b);
            aE(this);
            return {
                isInToolbar: Np(Fp(b.isInToolbar)),
                removeCallback: () => {
                    bE(this, b);
                    this.g.delete(b);
                    aE(this)
                }
            }
        }
    };

    function ZD(a, b) {
        return a.priority === b.priority ? b.Cf - a.Cf : a.priority - b.priority
    };

    function eE(a) {
        if (!a.g) {
            const b = $C(a.win);
            a.g = Fp(b.j);
            xp(a, b)
        }
        return a.g
    }

    function fE(a, b, c) {
        const d = a.j.addRegulatoryMessage(b.messageSpec);
        b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow || gE(a, d, c);
        Jp(c, !0, () => {
            d.removeCallback()
        })
    }

    function gE(a, b, c) {
        a = eE(a);
        const d = Ip(a, !0, () => void b.showUnlessUserInControl()),
            e = Ip(a, !1, () => void b.hideUnlessUserInControl());
        Ip(Cp(b.isDismissed), !0, () => {
            d();
            e()
        });
        Jp(c, !0, () => {
            d();
            e()
        })
    }
    var hE = class extends P {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.g = null
        }
        addRegulatoryMessage(a) {
            const b = new Q(!1),
                c = Jp(eE(this), !0, () => {
                    fE(this, a, b)
                });
            return {
                removeCallback: () => {
                    b.g(!0);
                    c()
                }
            }
        }
    };

    function iE(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new jE(a, b));
        return a.googFloatingToolbarManager
    }

    function kE(a) {
        a.g || (a.g = lE(a.win, a.Hb, a.Fc), xp(a, a.g.Ib), xp(a, a.g.Tg), mE(a), nE(a, a.g.Ib));
        return a.g
    }

    function oE(a) {
        var b = [];
        a.g ? .Ib ? .B().A() ? (b.push(() => pE(a)), b.push(() => qE(a))) : (b.push(() => qE(a)), b.push(() => pE(a)));
        a.g ? .Ib ? .H() ? .A() && b.push(() => {
            const c = Wo(a.win);
            return {
                position: qD({
                    ga: Math.floor(c / 3),
                    sa: 10
                }),
                Ec: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function mE(a) {
        a.Fc.P === null && a.g ? .position.g(oE(a))
    }

    function nE(a, b) {
        const c = TD(a.win);
        c.j || (WD(c), XD(c), c.j = !0);
        c.l.listen(() => void mE(a));
        xp(a, c);
        b.H().listen(() => void mE(a));
        b.B().listen(() => void mE(a));
        a.Fc.listen(() => void mE(a))
    }

    function pE(a) {
        var b = a.win;
        const c = Wo(a.win);
        return mD(b, {
            Ub: sD({
                ga: 50,
                Ca: 10
            }),
            Se: Math.floor(c / 3),
            Ab: 60,
            Ve: AD(),
            Dd: Math.floor(c / 2),
            mb: 20
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).ke
    }

    function qE(a) {
        var b = a.win;
        const c = Wo(a.win);
        return mD(b, {
            Ub: qD({
                ga: 50,
                sa: 10
            }),
            Se: Math.floor(c / 3),
            Ab: 60,
            Ve: AD(),
            Dd: Math.floor(c / 2),
            mb: 40
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).ke
    }
    class jE extends P {
        constructor(a, b) {
            super();
            this.win = a;
            this.Hb = b;
            this.g = null;
            this.Fc = rE(this.win, this)
        }
        addButton(a) {
            return kE(this).oj.addButton(a)
        }
        addRegulatoryMessage(a) {
            return kE(this).Tg.addRegulatoryMessage(a)
        }
    }

    function lE(a, b, c) {
        const d = new Q(null),
            e = xD(a, {
                ic: 2,
                position: d.map(f => f ? .position ? ? null),
                Oa: b,
                Fc: c
            });
        b = new dE(d.map(f => f ? .Ec || 0), {
            addButton: f => e.addButton(f),
            fi: () => JD(e, {}),
            Oi: () => JD(e, {
                Ah: 1
            })
        });
        a = new hE(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Ib: e,
            position: d,
            oj: b,
            Tg: a
        }
    }

    function rE(a, b) {
        const c = new IA(a),
            d = new Q(null),
            e = f => void d.g(f);
        yp(b, () => {
            HA(c, e)
        });
        c.g.maxZIndexListeners.push(e);
        d.g(GA(c));
        return d
    };
    const sE = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function tE(a, b, c, d, e) {
        a = new uE(a, b, c, d, e);
        if (a.l) {
            vq(a.win, sE);
            var f = a.win;
            b = a.message;
            c = aB(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new pe(f.document);
            var h = Sz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                Ee(f, Nz(h)));
            d = $A("ipr-container", e);
            e = $A("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = $A("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.g = c.Za;
            Kw(a.l, a.g);
            a.j && a.j(Lm(1));
            vE(a)
        } else wE(a);
        return a
    }

    function vE(a) {
        const b = new yq(a.win);
        b.J(2E3);
        xp(a, b);
        wq(b, () => {
            xE(a);
            wE(a);
            b.dispose()
        })
    }

    function wE(a) {
        const b = iE(a.win, a.Hb).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        yp(a, () => void b.removeCallback());
        a.j && a.j(Lm(2))
    }

    function xE(a) {
        a.g && (a.g.parentNode ? .removeChild(a.g), a.g = null)
    }
    var uE = class extends P {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.l = b;
            this.message = c;
            this.Hb = d;
            this.j = e;
            this.g = null
        }
        i() {
            xE(this);
            super.i()
        }
    };
    var AE = (a, b, c, d, e) => T(Hs) ? yE(a, b, d, e) : zE(a, b, c, d, e);

    function zE(a, b, c, d, e) {
        const f = new jD(a, KC(a, e), new JC(b, d, "#FFF", "#4A4A4A", "normal"), new BC(b, c, d), "google-dns-link-placeholder");
        f.J();
        return () => f.i()
    }

    function yE(a, b, c, d) {
        const e = tE(a, KC(a, d), {
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, BE(a));
        return () => e.dispose()
    }

    function BE(a) {
        if (a = FC(a)) return a;
        V.ba(1234, Error("No messages"), void 0, void 0);
        return (new Fr).i()
    };

    function CE(a, b) {
        b && (a.i = AE(a.g, b.localizedDnsText, b.localizedDnsCollapseText, () => DE(a, b), a.l))
    }

    function EE(a) {
        var b = DC(a.g);
        if (FE(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            c != null && b != null && (a.i = AE(a.g, c, b, () => GE(a), a.l))
        }
    }

    function HE(a) {
        const b = CC(a.g);
        b.callbackQueue = b.callbackQueue || [];
        T(Qs) ? (EC(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => CE(a, c)
        })) : (DC(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => EE(a)
        }))
    }

    function GE(a) {
        JA(a.j);
        DC(a.g).openConfirmationDialog(b => IE(a, b))
    }

    function DE(a, b) {
        JA(a.j);
        b.openConfirmationDialog(c => IE(a, c))
    }

    function IE(a, b) {
        b && a.i && (a.i(), a.i = null);
        KA(a.j)
    }
    class JE {
        constructor(a, b, c) {
            this.g = a;
            this.j = DA(b, 2147483643);
            this.l = c;
            this.i = null
        }
    }

    function FE(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function KE(a) {
        const b = a.document.createElement("ins");
        LE(a, b);
        x(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function ME(a, b, c, d) {
        const e = De(oe(a), "IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        LE(a, e);
        x(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function NE(a, b) {
        const c = b.document.createElement("span");
        LE(b, c);
        x(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.i();
            d.stopPropagation()
        });
        return c
    }

    function OE(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.j));
        x(c, rs(b));
        x(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function PE(a) {
        const b = a.document.createElement("div");
        x(b, rs(a));
        x(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class QE {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.i = d;
            this.g = new Q(!1)
        }
        Ja(a, b, c, d) {
            c = KE(a);
            const e = ME(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = ME(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.i),
                h = NE(this, a),
                k = ME(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            x(k, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(h);
            c.appendChild(k);
            const l = OE(this, a);
            a = PE(a);
            a.appendChild(c);
            a.appendChild(l);
            this.g.listen(m => {
                x(e, {
                    display: m ? "none" : "inline"
                });
                x(f, {
                    display: m ? "inline" : "none"
                });
                m ? (x(h, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), x(k, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), x(l, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (x(h, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), x(k, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), x(l, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        jg() {
            return 71
        }
        Gg() {
            this.g.g(!1);
            return 0
        }
        Hg() {
            this.g.g(!0)
        }
    }

    function LE(a, b) {
        x(b, rs(a));
        x(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function RE(a) {
        SE(a.j, b => {
                var c = a.i,
                    d = b.Jj,
                    e = b.Zh,
                    f = b.Gh;
                b = b.showRevocationMessage;
                var h = a.l;
                T(Js) ? (e = KC(c, h), d = {
                    actionButton: {
                        buttonText: c.document.createTextNode(d),
                        onClick: b
                    },
                    informationText: c.document.createTextNode(f)
                }, f = FC(c), f || (V.ba(1233, Error("No messages"), void 0, void 0), f = (new Fr).i()), tE(c, e, d, f)) : (new jD(c, KC(c, h), new JC(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new QE(d, e, f, b), "google-revocation-link-placeholder")).J()
            },
            () => {
                KA(a.g);
                TE(a)
            })
    }

    function UE(a) {
        JA(a.g);
        RE(a)
    }

    function TE(a) {
        T(Is) && (a.i.__tcfapi ? a.i.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? JA(a.g) : KA(a.g)
        }) : V.ba(1250, Error("No TCF API function"), void 0, void 0))
    }
    class VE {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = DA(b, 2147483643);
            this.l = c;
            this.j = d
        }
    };
    var WE = a => {
            if (!a || Ii(a, 1) == null) return !1;
            a = Ii(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        XE = a => {
            if (!a || Ii(a, 3) == null) return !1;
            a = Ii(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        YE = a => a ? Gi(a, 5) === !0 : !1,
        ZE = a => a ? Gi(a, 6) === !0 : !1;

    function $E() {
        return "m202407150101"
    };

    function aF(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Re: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b.indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            Re: c
        }
    };

    function bF(a, b) {
        We(a, (c, d) => {
            b[d] = c
        })
    }

    function cF(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && Ke(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function dF() {
        if (eF) return eF;
        const a = yk() || window,
            b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? eF = b : a.google_persistent_state_async = eF = new fF
    }

    function gF(a, b, c) {
        b = hF[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function iF(a, b, c) {
        return gF(a, b, () => c)
    }

    function jF(a, b, c) {
        return a.S[hF[b] || `google_ps_${b}`] = c
    }

    function kF(a, b) {
        return jF(a, b, iF(a, b, 0) + 1)
    }

    function lF() {
        var a = dF();
        return iF(a, 20, {})
    }

    function mF() {
        var a = dF();
        const b = iF(a, 31, !1);
        b || jF(a, 31, !0);
        return !b
    }

    function nF() {
        var a = dF();
        const b = iF(a, 41, !1);
        b || jF(a, 41, !0);
        return !b
    }

    function oF() {
        var a = dF();
        return iF(a, 26)
    }

    function pF() {
        var a = dF();
        return iF(a, 28, [])
    }

    function qF() {
        var a = dF();
        return gF(a, 39, rF)
    }
    var fF = class {
            constructor() {
                this.S = {}
            }
        },
        eF = null;
    const hF = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function sF(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function tF(a, b) {
        a = sF(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };
    var uF = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_intent_query: "ait_q",
        google_ad_output: "output",
        google_ad_callback: "callback",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_ad_intent_qetid: "aiqeid",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        google_ad_width: "w",
        abgtt: "abgtt",
        google_captcha_token: "captok",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        google_cust_criteria: "cust_params",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_image_size: "image_size",
        google_last_modified_time: "lmt",
        google_loeid: "loeid",
        google_max_num_ads: "num_ads",
        google_max_radlink_len: "max_radlink_len",
        google_mtl: "mtl",
        google_native_settings_key: "nsk",
        google_enable_content_recommendations: "ecr",
        google_num_radlinks: "num_radlinks",
        google_num_radlinks_per_unit: "num_radlinks_per_unit",
        google_pucrd: "pucrd",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_plas: "plas",
        google_rl_dest_url: "rl_dest_url",
        google_rl_filtering: "rl_filtering",
        google_rl_mode: "rl_mode",
        google_rt: "rt",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_tfs: "tfs",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_apsail: "psa",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_cpm: "cpm",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_hints: "hints",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_ad_host_tier_id: "ht_id",
        google_kw_type: "kw_type",
        google_kw: "kw",
        google_contents: "contents",
        google_targeting: "targeting",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_alternate_ad_url: "alternate_ad_url",
        google_cust_age: "cust_age",
        google_cust_gender: "cust_gender",
        google_cust_l: "cust_l",
        google_cust_lh: "cust_lh",
        google_language: "hl",
        google_city: "gcs",
        google_country: "gl",
        google_region: "gr",
        google_content_recommendation_ad_positions: "ad_pos",
        google_content_recommendation_ui_type: "crui",
        google_content_recommendation_use_square_imgs: "cr_sq_img",
        sso: "sso",
        google_color_line: "color_line",
        google_disable_video_autoplay: "disable_video_autoplay",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        google_video_doc_id: "video_doc_id",
        google_video_product_type: "video_product_type",
        google_webgl_support: "wgl",
        easpi: "easpi",
        aihb: "aihb",
        asro: "asro",
        ailel: "ailel",
        aiael: "aiael",
        aicel: "aicel",
        aifxl: "aifxl",
        aiixl: "aiixl",
        slmct: "aslmct",
        samct: "asamct",
        aiict: "aiict",
        aigda: "aifgd",
        aipaq: "aipaq",
        aisaib: "aisaib",
        vmsli: "itsi",
        dap: "dap",
        aiapm: "aiapm",
        aiapmi: "aiapmi",
        aiombap: "aiombap"
    };

    function vF(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function wF(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function xF(a) {
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

    function zo(a, b) {
        a.g.size > 0 || yF(a);
        const c = a.g.get(0);
        c ? c.push(b) : a.g.set(0, [b])
    }

    function zF(a, b, c, d) {
        Jb(b, c, d);
        yp(a, () => Lb(b, c, d))
    }

    function AF(a, b) {
        a.j !== 1 && (a.j = 1, a.g.size > 0 && BF(a, b))
    }

    function yF(a) {
        a.win.document.visibilityState ? zF(a, a.win.document, "visibilitychange", b => {
            a.win.document.visibilityState === "hidden" && AF(a, b);
            a.win.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.win ? (zF(a, a.win, "pagehide", b => {
            AF(a, b)
        }), zF(a, a.win, "pageshow", () => {
            a.j = 0
        })) : zF(a, a.win, "beforeunload", b => {
            AF(a, b)
        })
    }

    function BF(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var CF = class extends P {
        constructor(a) {
            super();
            this.win = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function DF(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function EF(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = xf(a.win)
    }

    function FF(a) {
        var b = a.g.wpc;
        if (b === null || b === "") {
            b = a.g;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if ((a = sF(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client")) == null) {
                    b: {
                        a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                        /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !Tk() ? vF : wF;
                        for (var d = a.length - 1; d >= 0; d--) {
                            var e = a[d];
                            if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                a = e;
                                break b
                            }
                        }
                        a = null
                    }
                    if (a) {
                        c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (d = {}; e = c.exec(a);) d[e[1]] = xF(e[2]);
                        a = d;
                        a = a.google_ad_client ? a.google_ad_client : ""
                    } else a = ""
                }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function GF(a, b) {
        var c = new co;
        var d = EF(a);
        c = mj(c, 1, d);
        c = bo(c.Vb(FF(a)), a.g.sd);
        return mj(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function HF(a) {
        await DF(a.win, () => !(!EF(a) || !FF(a)))
    }

    function IF() {
        var a = N(JF);
        a.i && (a.g.tar += 1)
    }

    function KF(a) {
        var b = N(JF);
        if (b.i) {
            var c = b.l;
            a(c);
            b.g.cc = rj(c)
        }
    }
    async function LF(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await HF(a);
            var e = a.ta;
            a = GF(a, d);
            d = new zm;
            b = K(d, 1, b);
            c = qi(b, 2, c, Xg);
            c = B(a, 9, eo, c);
            to(e, c)
        }
    }
    async function MF(a, b) {
        await HF(a);
        var c = GF(a);
        b = B(c, 5, eo, b);
        a.i && !a.g.le.includes(2) && (a.g.le.push(2), to(a.ta, b))
    }
    async function NF(a, b, c) {
        await HF(a);
        var d = a.ta;
        a = bo(GF(a, c), 1);
        b = B(a, 6, eo, b);
        to(d, b)
    }
    async function OF(a, b) {
        await HF(a);
        var c = a.ta;
        a = bo(GF(a), 1);
        b = B(a, 13, eo, b);
        to(c, b)
    }
    async function PF(a, b) {
        if (a.i) {
            await HF(a);
            var c = a.ta;
            a = GF(a);
            b = B(a, 11, eo, b);
            to(c, b)
        }
    }
    var JF = class {
        constructor(a, b) {
            this.win = yk() || window;
            this.j = b ? ? new CF(this.win);
            this.ta = a ? ? new Bo($E(), 100, 100, !0, this.j);
            this.g = gF(dF(), 33, () => {
                const c = U(Gs);
                return {
                    sd: c,
                    ssp: c > 0 && Ve() < 1 / c,
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
        get i() {
            return this.g.ssp
        }
        get bd() {
            return this.g.cu
        }
        set bd(a) {
            this.g.cu = a
        }
        get l() {
            return lx(1227, () => sj(Am, Qh(this.g.cc || []))) || new Am
        }
    };

    function QF(a) {
        var b = new RF;
        return Ri(b, 1, a)
    }
    var RF = class extends M {
        constructor() {
            super()
        }
    };

    function SF(a) {
        if (a.i.adsbygoogle_ama_fc_has_run !== !0) {
            var b = WE(a.g),
                c = XE(a.g),
                d = !1;
            b && (UE(new VE(a.i, a.A, a.l || Bi(a.g, Nr, 4), a.j)), d = !0);
            c && (HE(new JE(a.i, a.A, a.l || Bi(a.g, Nr, 4))), d = !0);
            KF(h => {
                h = J(h, 9, !0);
                h = J(h, 10, b);
                J(h, 11, c)
            });
            var e = YE(a.g),
                f = ZE(a.g) || T(st);
            e && (d = !0);
            d && (d = QF(e && f), a.j.start(T(Cs), d), a.i.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class TF {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.A = d;
            this.l = e || null
        }
    };

    function UF(a, b, c, d, e, f) {
        try {
            const h = a.g,
                k = Pe("SCRIPT", h);
            k.async = !0;
            he(k, b);
            h.head.appendChild(k);
            k.addEventListener("load", () => {
                e();
                d && h.head.removeChild(k)
            });
            k.addEventListener("error", () => {
                c > 0 ? UF(a, b, c - 1, d, e, f) : (d && h.head.removeChild(k), f())
            })
        } catch (h) {
            f()
        }
    }

    function VF(a, b, c = () => {}, d = () => {}) {
        UF(oe(a), b, 0, !1, c, d)
    };

    function WF(a = null) {
        a = a || u;
        return a.googlefc || (a.googlefc = {})
    };
    wc(Mo).map(a => Number(a));
    wc(No).map(a => Number(a));
    const XF = u.URL;

    function YF(a) {
        const b = c => encodeURIComponent(c).replace(/[!()~']|(%20)/g, d => ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E"
        })[d]);
        return Array.from(a, c => b(c[0]) + "=" + b(c[1])).join("&")
    };

    function ZF(a) {
        var b = (new XF(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function $F(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new XF(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function aG(a) {
        var b = new XF(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + YF(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol +
            "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = (new XF(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function bG(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Pe("IFRAME", c);
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
    var cG = xj(class extends M {});

    function dG(a) {
        if (a.g) return a.g;
        a.I && a.I(a.j) ? a.g = a.j : a.g = kf(a.j, a.M);
        return a.g ? ? null
    }

    function eG(a) {
        a.l || (a.l = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.bf,
                        e = a.F.get(d);
                    e && (e.wj || a.F.delete(d), e.Qb ? .(e.li, c.payload))
                }
            } catch (f) {}
        }, Jb(a.j, "message", a.l))
    }

    function fG(a, b, c) {
        if (dG(a))
            if (a.g === a.j)(b = a.B.get(b)) && b(a.g, c);
            else {
                var d = a.A.get(b);
                if (d && d.Cc) {
                    eG(a);
                    var e = ++a.R;
                    a.F.set(e, {
                        Qb: d.Qb,
                        li: d.zd(c),
                        wj: b === "addEventListener"
                    });
                    a.g.postMessage(d.Cc(c, e), "*")
                }
            }
    }
    var gG = class extends P {
        constructor(a, b, c, d) {
            super();
            this.M = b;
            this.I = c;
            this.H = d;
            this.B = new Map;
            this.R = 0;
            this.A = new Map;
            this.F = new Map;
            this.l = void 0;
            this.j = a
        }
        i() {
            delete this.g;
            this.B.clear();
            this.A.clear();
            this.F.clear();
            this.l && (Lb(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.H;
            super.i()
        }
    };
    const hG = (a, b) => {
            const c = {
                cb: d => {
                    d = cG(d);
                    b.Ra({
                        kc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        iG = {
            zd: a => a.Ra,
            Cc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Qb: (a, b) => {
                a({
                    kc: b
                })
            }
        };

    function jG(a) {
        a = cG(a.data.__fciReturn);
        return {
            payload: a,
            bf: Ki(a, 1)
        }
    }

    function kG(a, b = !1) {
        if (b) return !1;
        a.j || (a.g = !!dG(a.caller), a.j = !0);
        return a.g
    }

    function lG(a) {
        return new Promise(b => {
            kG(a) && fG(a.caller, "getDataWithCallback", {
                command: "loaded",
                Ra: c => {
                    b(c.kc)
                }
            })
        })
    }

    function mG(a, b) {
        kG(a) && fG(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: qj(b),
            Ra: () => {}
        })
    }
    var nG = class extends P {
        constructor(a) {
            super();
            this.g = this.j = !1;
            this.caller = new gG(a, "googlefcPresent", void 0, jG);
            this.caller.B.set("getDataWithCallback", hG);
            this.caller.A.set("getDataWithCallback", iG)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };
    const oG = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function pG(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = oG(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (Sj({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function qG(a, b = {}) {
        return pG(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.po) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? rG(a, "1", 0) : !0 : !1
    }

    function rG(a, b, c) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (d !== void 0) {
                    d = d["755"];
                    break a
                }
            }
            d = void 0
        }
        if (d === 0) return !1;
        let e = c;c === 2 ? (e = 0, d === 2 && (e = 1)) : c === 3 && (e = 1, d === 1 && (e = 0));
        if (e === 0) a = a.purpose && a.vendor ? (c = sG(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && sG(a.purpose.consents, b) : !0;
        else {
            var f;
            e === 1 ? f = a.purpose && a.vendor ? sG(a.purpose.legitimateInterests, b) && sG(a.vendor.legitimateInterests, "755") : !0 : f = !0;
            a = f
        }
        return a
    }

    function sG(a, b) {
        return !(!a || !a[b])
    }

    function tG(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(d => rG(a, d, c))
    }

    function uG(a) {
        if (a.g) return a.g;
        a.g = kf(a.j, "__tcfapiLocator");
        return a.g
    }

    function vG(a) {
        return typeof a.j.__tcfapi === "function" || uG(a) != null
    }

    function wG(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (uG(a)) {
            xG(a);
            const e = ++a.H;
            a.B[e] = c;
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

    function yG(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = Ab(() => b(c));
        let e = 0;
        a.F !== -1 && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        wG(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = oG(c), c.internalBlockOnErrors = a.A, pG(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), wG(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function xG(a) {
        a.l || (a.l = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Jb(a.j, "message", a.l))
    }
    class zG extends P {
        constructor(a, b = {}) {
            super();
            this.j = a;
            this.g = null;
            this.B = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.Nh ? ? !1;
            this.l = null
        }
        i() {
            this.B = {};
            this.l && (Lb(this.j, "message", this.l), delete this.l);
            delete this.B;
            delete this.j;
            delete this.g;
            super.i()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = Ab(() => a(b));
            let d = 0;
            this.F !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, h) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = oG(b),
                    b.internalBlockOnErrors = this.A, h && b.internalErrorState === 0 || (b.tcString = "tcunavailable", h || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                wG(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && wG(this, "removeEventListener", null, a.listenerId)
        }
    };

    function SE(a, b, c) {
        const d = WF(a.win);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = WF(a.win),
                    f = new zG(a.win);
                vG(f) && yG(f, h => {
                    h.cmpId === 300 && h.tcString && h.tcString !== "tcunavailable" && b({
                        Jj: (0, e.getDefaultConsentRevocationText)(),
                        Zh: (0, e.getDefaultConsentRevocationCloseText)(),
                        Gh: (0, e.getDefaultConsentRevocationAttestationText)(),
                        showRevocationMessage: () => {
                            (0, e.showRevocationMessage)()
                        }
                    })
                });
                c()
            }
        })
    }

    function AG(a, b = !1, c) {
        const d = {};
        try {
            const f = ZF(a.win),
                h = $F(a.win);
            d.fc = f;
            d.fctype = h
        } catch (f) {}
        let e;
        try {
            e = aG(a.win.location.href)
        } catch (f) {}
        b && e && (d.href = e);
        b = Qc({
            id: a.g
        }, { ...d,
            ers: 2
        });
        VF(a.win, b, () => {}, () => {});
        c && mG(new nG(a.win), c)
    }
    var BG = class {
        constructor(a, b) {
            this.win = a;
            this.g = b
        }
        start(a = !1, b) {
            if (this.win === this.win.top) try {
                bG(this.win, "googlefcPresent"), AG(this, a, b)
            } catch (c) {}
        }
    };
    const CG = new Set(["ARTICLE", "SECTION"]);
    var DG = class {
        constructor(a) {
            this.g = a
        }
    };

    function EG(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function FG(a) {
        return a.classList.length > 0
    }

    function GG(a) {
        return CG.has(a.tagName)
    };
    var HG = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function IG(a) {
        return za(a) && a.nodeType == 1 && a.tagName == "FIGURE" ? a : (a = a.parentNode) ? IG(a) : null
    };
    var JG = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = IG(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new HG(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var KG = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b), c.size === 0 && this.map.delete(a), b) : !1
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function*() {
                for (const b of a.values()) yield* b
            }()
        }[Symbol.iterator]() {
            const a = this.map;
            return function*() {
                for (const [b,
                        c
                    ] of a) {
                    const d = b,
                        e = c;
                    for (const f of e) yield [d, f]
                }
            }()
        }
    };

    function LG(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function MG(a) {
        return Array.from(NG(a).map.values()).filter(b => b.size >= 3).map(b => [...b])
    }

    function OG(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = d.height >= 50 && d.width >= a.A) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new lD(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && sp(a.j, {
                eb: c.g,
                Xa: PG,
                Db: !0
            }) === null
        })
    }

    function QG(a) {
        return MG(a).sort(RG).find(b => OG(a, b)) || []
    }

    function NG(a) {
        return SG(Array.from(a.win.document.getElementsByTagName("IMG")).map(JG).filter(Sq), b => {
            var c = [...EG("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? EG("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? EG("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = sp(a.i.g, {
                eb: b.g,
                Xa: FG
            })) ? EG("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(sp(a.i.g, {
                eb: b.g,
                Xa: GG
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var TG = class {
        constructor(a, b, c, d, e) {
            var f = new iq;
            this.win = a;
            this.l = b;
            this.A = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function SG(a, b) {
        const c = new KG;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function PG(a) {
        return a.tagName === "A" && a.hasAttribute("href")
    }

    function RG(a, b) {
        return b.length - a.length
    };

    function UG(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = VG(a.j),
            d = WG(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.A.g().i(e => {
            var f = a.j;
            const h = d.getBoundingClientRect(),
                k = h.top - e.top,
                l = h.left - e.left,
                m = h.width - e.width;
            e = h.height - e.height;
            Math.abs(k) < 1 && Math.abs(l) < 1 && Math.abs(m) < 1 && Math.abs(e) < 1 || (f = f.getComputedStyle(d), x(d, {
                top: parseInt(f.top, 10) - k + "px",
                left: parseInt(f.left, 10) - l + "px",
                width: parseInt(f.width, 10) - m + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function XG(a) {
        a.g || (a.g = UG(a));
        return a.g
    }
    var YG = class extends P {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.A = c;
            this.g = null
        }
        i() {
            if (this.g) {
                var a = this.g;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.g = null
            }
            super.i()
        }
    };

    function WG(a) {
        const b = a.document.createElement("div");
        x(b, rs(a));
        x(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function VG(a) {
        const b = a.document.createElement("div");
        x(b, rs(a));
        x(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function ZG(a) {
        const b = new Q(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return Fp(b)
    };
    const $G = ["Google Material Icons", "Roboto"];

    function aH({
        win: a,
        Aa: b,
        Pi: c,
        webPropertyCode: d,
        Oa: e,
        L: f
    }) {
        const h = new kq(a, c);
        c = new YG(a, c, h);
        xp(c, h);
        a = new bH(a, d, e, b, c, f);
        xp(a, c);
        a.J()
    }
    var bH = class extends P {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Oa = c;
            this.Aa = d;
            this.j = e;
            this.L = f;
            this.g = new Q(!1)
        }
        J() {
            const a = cH(this.win, this.webPropertyCode, this.Oa);
            XG(this.j).appendChild(a.zi);
            vv(this.win, a.va);
            ZG(a.va).i(b => {
                if (b !== null) {
                    switch (b) {
                        case "unfilled":
                            this.dispose();
                            break;
                        case "filled":
                            this.g.g(!0);
                            break;
                        default:
                            this.L ? .reportError("Unhandled AdStatus: " + String(b)), this.dispose()
                    }
                    this.L ? .Fj(this.Aa, b)
                }
            });
            Jp(this.g, !0, () => void a.Xi.g(!0));
            a.ui.listen(() =>
                void this.dispose());
            a.ti.listen(() => void this.L ? .Dj(this.Aa))
        }
    };

    function cH(a, b, c) {
        const d = new Q(!1),
            e = a.document.createElement("div");
        x(e, rs(a));
        x(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        Ip(d, !0, () => void x(e, {
            opacity: "1"
        }));
        Ip(d, !1, () => void x(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        x(f, rs(a));
        x(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            yh: h,
            Wi: k
        } = dH(a, b);
        f.appendChild(h);
        e.appendChild(eH(a, I(c, 1)));
        b = fH(a, I(c, 2));
        e.appendChild(b.Th);
        b.re.listen(() => void d.g(!1));
        return {
            Xi: d,
            zi: e,
            va: k,
            ti: b.re,
            ui: b.re.delay(a, 450)
        }
    }

    function eH(a, b) {
        const c = a.document.createElement("div");
        x(c, rs(a));
        x(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function fH(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        x(c, rs(a));
        x(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new Rp;
        c.addEventListener("click", () => void Qp(d));
        return {
            Th: c,
            re: Op(d)
        }
    }

    function dH(a, b) {
        a = rv(a.document, b, null, null, {});
        return {
            yh: a.nb,
            Wi: a.va
        }
    };

    function gH({
        target: a,
        threshold: b = 0
    }) {
        const c = new hH;
        c.J(a, b);
        return c
    }
    var hH = class extends P {
        constructor() {
            super();
            this.g = new Q(!1)
        }
        J(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.g.g(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            yp(this, () => void c.disconnect())
        }
    };

    function iH(a) {
        const b = jH(a.win, Oi(a.g, 2) ? ? 250, Oi(a.g, 3) ? ? 300);
        let c = 1;
        return QG(a.l).map(d => ({
            Aa: c++,
            image: d,
            gb: b(d)
        }))
    }

    function kH(a, b) {
        const c = gH({
            target: b.image.g,
            threshold: Pi(a.g) ? ? .8
        });
        a.j.push(c);
        Jp(Mp(c.g, a.win, Oi(a.g, 5) ? ? 3E3, d => d), !0, () => {
            if (a.i < (Oi(a.g, 1) ? ? 1)) {
                aH({
                    win: a.win,
                    Aa: b.Aa,
                    Pi: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Oa: a.Oa,
                    L: a.L
                });
                a.i++;
                if (!(a.i < (Oi(a.g, 1) ? ? 1)))
                    for (; a.j.length;) a.j.pop() ? .dispose();
                a.L ? .Ej(b.Aa)
            }
        })
    }

    function lH(a) {
        const b = iH(a);
        b.filter(mH).forEach(c => void kH(a, c));
        a.L ? .Gj(b.map(c => ({
            Aa: c.Aa,
            gb: c.gb
        })))
    }
    var nH = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.g = c;
            this.Oa = d;
            this.l = e;
            this.L = f;
            this.j = [];
            this.i = 0
        }
    };

    function mH(a) {
        return a.gb.rejectionReasons.length === 0
    }

    function jH(a, b, c) {
        const d = Wo(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                Ab: e.width,
                Ie: e.height,
                vi: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function oH(a, b) {
        a.Aa = b;
        return a
    }
    var pH = class {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.Aa = this.g = null
        }
    };

    function qH(a, b) {
        return new pH(b, a.webPropertyCode, a.hostname, a.i, a.l)
    }

    function rH(a, b, c) {
        var d = a.j++;
        a.g === null ? (a.g = bl(), a = 0) : a = bl() - a.g;
        var e = b.A,
            f = b.webPropertyCode,
            h = b.hostname,
            k = b.j,
            l = b.l.map(encodeURIComponent).join(",");
        if (b.g) {
            var m = {
                imcnt: b.g.length
            };
            var n = Math.min(b.g.length, 10);
            for (let p = 0; p < n; p++) {
                const q = `im${p}`;
                m[`${q}_id`] = b.g[p].Aa;
                m[`${q}_s_w`] = b.g[p].gb.Ab;
                m[`${q}_s_h`] = b.g[p].gb.Ie;
                m[`${q}_s_dbf`] = b.g[p].gb.vi;
                b.g[p].gb.rejectionReasons.length > 0 && (m[`${q}_s_rej`] = b.g[p].gb.rejectionReasons.join(","))
            }
        } else m = null;
        nx("abg::imovad", {
            typ: e,
            wpc: f,
            hst: h,
            pvsid: k,
            peid: l,
            rate: c,
            num: d,
            tim: a,
            ...(b.Aa === null ? {} : {
                imid: b.Aa
            }),
            ...(b.i === null ? {} : {
                astat: b.i
            }),
            ...(b.errorMessage === null ? {} : {
                errm: b.errorMessage
            }),
            ...m
        }, c)
    }
    var sH = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        Gj(a) {
            var b = qH(this, "fndi");
            b.g = a;
            rH(this, b, a.length > 0 ? 1 : .1)
        }
        Ej(a) {
            a = oH(qH(this, "adpl"), a);
            rH(this, a, 1)
        }
        Fj(a, b) {
            a = oH(qH(this, "adst"), a);
            a.i = b;
            rH(this, a, 1)
        }
        Dj(a) {
            a = oH(qH(this, "adis"), a);
            rH(this, a, 1)
        }
        reportError(a) {
            var b = qH(this, "err");
            b.errorMessage = a;
            rH(this, b, .1)
        }
    };

    function tH(a, b, c) {
        return (a = a.g()) && Gi(a, 11) ? c.map(d => d.j()) : c.map(d => d.A(b))
    };
    var uH = class extends M {
        getHeight() {
            return Ji(this, 2)
        }
    };

    function vH(a, b) {
        return Si(a, 1, b)
    }

    function wH(a, b) {
        return Ci(a, 2, b)
    }
    var xH = class extends M {};
    xH.O = [2];
    var yH = class extends M {
        constructor() {
            super()
        }
    };
    yH.O = [5];
    var zH = class extends M {
            constructor() {
                super()
            }
        },
        AH = [1, 2];
    const BH = new Set([7, 1]);
    var CH = class {
        constructor() {
            this.j = new KG;
            this.l = []
        }
        g(a, b) {
            BH.has(b) || Oq(Lq(Jw(a), c => void this.j.add(c, b)), c => void this.l.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function DH(a) {
        return new dr(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class EH {
        g(a) {
            return DH(Math.floor(a.i))
        }
    };
    var FH = class extends M {
        constructor() {
            super()
        }
    };

    function GH(a, b) {
        var c = b.adClient;
        if (typeof c !== "string" || !c) return !1;
        a.be = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        za(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.C = {};
            for (const d of b.fillMessage) a.C[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        Lk(a.l) && Lk(a.i) || nx("rctnosize", b);
        return !0
    }
    var HH = class {
        constructor() {
            this.C = this.D = this.j = this.be = null;
            this.i = this.l = 0
        }
        B() {
            return !0
        }
    };

    function IH(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function JH(a, b = []) {
        const c = Date.now();
        return Ta(b, d => c - d < a * 1E3)
    }

    function KH(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Wa(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = JH(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function LH(a, b, c) {
        return b <= 0 || a == null || !IH(a) ? null : KH(a, b, c)
    };
    var MH = (a, b, c) => {
        let d = 0;
        try {
            var e = d |= Uo(a);
            const k = Vo(a),
                l = a.innerWidth;
            var f = k && l ? k / l : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= Xo(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var h;
            if (h = b) h = LH(c, 3600, "__lsv__") ? .length !== 0;
            h && (d |= 134217728)
        } catch (k) {
            d |= 32
        }
        return d
    };
    var NH = class extends HH {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.g = null
        }
        B(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = as(a)
            } catch (c) {
                b = null
            } else b = null;
            this.g = b;
            return !0
        }
    };
    const OH = {};

    function PH(a, b, c) {
        let d = QH(a, c, b);
        if (!d) return !0;
        const e = c.B.i;
        for (; d.Sb && d.Sb.length;) {
            const f = d.Sb.shift(),
                h = kw(f.ha);
            if (h && !(h <= d.Sc)) c.C ? .g(f, 18);
            else if (RH(c, f, {
                    Bd: d.Sc
                })) {
                if (d.Pc.g.length + 1 >= e) return c.C ? .i(d.Sb, 19), !0;
                d = QH(a, c, b);
                if (!d) return !0
            }
        }
        return c.l
    }
    const QH = (a, b, c) => {
        var d = b.B.i,
            e = b.B.l,
            f = b.B;
        f = Qy(b.da(), f.g ? f.g.hc : void 0, d);
        if (f.g.length >= d) return b.C ? .i(SH(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = $o(f.j).scrollHeight || null), e = !d || d < 0 ? -1 : f.i * e - Wy(f)) : e = void 0;
        const h = (d = e == null || e >= 50) ? SH(b, f, {
            types: a
        }, c) : null;
        d || b.C ? .i(SH(b, f, {
            types: a
        }, c), 18);
        return {
            Pc: f,
            Sc: e,
            Sb: h
        }
    };
    OH[2] = Ha(function(a, b) {
        a = SH(b, Qy(b.da()), {
            types: a,
            Cb: bx(b.da())
        }, 2);
        if (a.length == 0) return !0;
        for (var c = 0; c < a.length; c++)
            if (RH(b, a[c])) return !0;
        return b.l ? (b.A.push(11), !0) : !1
    }, [0]);
    OH[5] = Ha(PH, [0], 5);
    OH[10] = Ha(function(a, b) {
        a = [];
        const c = b.Ka;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !T(Us) && a.push(1);
        return PH(a, 10, b)
    }, 10);
    OH[3] = function(a) {
        if (!a.l) return !1;
        var b = SH(a, Qy(a.da()), {
            types: [0],
            Cb: bx(a.da())
        }, 3);
        if (b.length == 0) return !0;
        for (var c = b.length - 1; c >= 0; c--)
            if (RH(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const TH = a => {
            var b;
            a.j.kh ? b = T(Ws) ? new Xw(0, null, [], 8, .3) : new Xw(0, null, [], 3, null) : b = bx(a.da());
            return {
                types: [0],
                Cb: b
            }
        },
        VH = a => {
            const b = a.da().document.body.getBoundingClientRect().width;
            UH(a, DH(b))
        },
        XH = (a, b) => {
            var c = TH(a);
            c.Hj = [5];
            c = SH(a, Qy(a.da()), c, 8);
            WH(a, c.reverse(), b)
        },
        WH = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.la), RH(a, d, {
                        ce: b
                    })) return !0;
            return !1
        };
    OH[8] = function(a) {
        var b = a.da().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => OH[8](a), {
            once: !0
        }), !0;
        if (!a.l) return !1;
        if (!a.vd()) return !0;
        b = TH(a);
        b.df = [2, 4, 5];
        b = SH(a, Qy(a.da()), b, 8);
        const c = new EH;
        if (WH(a, b, c)) return !0;
        if (a.j.dg) switch (a.j.Ng || 0) {
            case 1:
                XH(a, c);
                break;
            default:
                VH(a)
        }
        return !0
    };
    OH[6] = Ha(PH, [2], 6);
    OH[7] = Ha(PH, [1], 7);
    OH[9] = function(a) {
        const b = QH([0, 2], a, 9);
        if (!b || !b.Sb) return a.A.push(17), a.l;
        for (const d of b.Sb) {
            var c = a.j.Fe || null;
            c == null ? c = null : (c = lw(d.ha, new YH, new ZH(c, a.da())), c = new Lw(c, d.ja(), d.la));
            if (c && !(kw(c.ha) > b.Sc) && RH(a, c, {
                    Bd: b.Sc,
                    pe: !0
                })) return a = c.ha.ca, iw(d.ha, a.length > 0 ? a[0] : null), !0
        }
        a.A.push(17);
        return a.l
    };
    class YH {
        i(a, b, c, d) {
            return uv(d.document, a, b)
        }
        j(a) {
            return Wo(a) || 0
        }
    };
    var $H = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Pc = c
        }
        Ba(a) {
            return this.g ? sz(this.i, this.g, a, this.Pc) : rz(this.i, a, this.Pc)
        }
        za() {
            return this.g ? 16 : 9
        }
    };
    var aI = class {
        constructor(a) {
            this.de = a
        }
        Ba(a) {
            return zz(a.document, this.de)
        }
        za() {
            return 11
        }
    };
    var bI = class {
        constructor(a) {
            this.tb = a
        }
        Ba(a) {
            return wz(this.tb, a)
        }
        za() {
            return 13
        }
    };
    var cI = class {
        Ba(a) {
            return pz(a)
        }
        za() {
            return 12
        }
    };
    var dI = class {
        constructor(a) {
            this.tc = a
        }
        Ba() {
            return uz(this.tc)
        }
        za() {
            return 2
        }
    };
    var eI = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return xz(this.g)
        }
        za() {
            return 3
        }
    };
    var fI = class {
        Ba() {
            return Az()
        }
        za() {
            return 17
        }
    };
    var gI = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return tz(this.g)
        }
        za() {
            return 1
        }
    };
    var hI = class {
        Ba() {
            return xb(cw)
        }
        za() {
            return 7
        }
    };
    var iI = class {
        constructor(a) {
            this.df = a
        }
        Ba() {
            return vz(this.df)
        }
        za() {
            return 6
        }
    };
    var jI = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return yz(this.g)
        }
        za() {
            return 5
        }
    };
    var kI = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Ba() {
            return Ha(Bz, this.minWidth, this.maxWidth)
        }
        za() {
            return 10
        }
    };
    var lI = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.A = a.l;
            this.g = a.A
        }
    };

    function mI(a) {
        var b = new nI;
        b.A = a;
        b.i.push(new gI(a));
        return b
    }

    function oI(a, b) {
        a.i.push(new iI(b));
        return a
    }

    function pI(a, b) {
        a.i.push(new dI(b));
        return a
    }

    function qI(a, b) {
        a.i.push(new jI(b));
        return a
    }

    function rI(a, b) {
        a.i.push(new eI(b));
        return a
    }

    function sI(a) {
        a.i.push(new hI);
        return a
    }

    function tI(a) {
        a.g.push(new cI);
        return a
    }

    function uI(a, b = 0, c, d) {
        a.g.push(new $H(b, c, d));
        return a
    }

    function vI(a, b = 0, c = Infinity) {
        a.g.push(new kI(b, c));
        return a
    }

    function wI(a) {
        a.g.push(new fI);
        return a
    }

    function xI(a, b = 0) {
        a.g.push(new bI(b));
        return a
    }

    function yI(a, b) {
        a.j = b;
        return a
    }
    var nI = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new lI(this)
        }
    };
    class ZH {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.D || {};
            c.google_ad_client = a.be;
            c.google_ad_height = Wo(b) || 0;
            c.google_ad_width = Vo(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new FH;
            b = Ri(b, 1, a.A);
            a.g && A(b, 2, a.g);
            c.google_rasc = qj(b);
            a.j && (c.google_adtest = "on");
            return new dr(["fsi_container"], c)
        }
    };
    var zI = Xq(new Uq(0, {})),
        AI = Xq(new Uq(1, {})),
        BI = a => a === zI || a === AI;

    function CI(a, b, c) {
        kp(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class DI {
        constructor() {
            this.g = new op
        }
    };

    function EI(a, b) {
        for (var c = 0; c < b.length; c++) a.wa(b[c]);
        return a
    }

    function FI(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class GI {
        constructor(a) {
            this.B = {};
            this.B.c = a;
            this.A = [];
            this.j = null;
            this.C = [];
            this.F = 0
        }
        Vb(a) {
            this.B.wpc = a;
            return this
        }
        wa(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        l(a) {
            var b = xc(this.B);
            this.F > 0 && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.C.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && sl(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function HI(a, b) {
        if (b && (a.g.apv = D(b, 4), ei(b, yr, 23))) {
            var c = a.g;
            b = z(b, yr, 23);
            b = kh($h(b, 1));
            c.sat = "" + b
        }
        return a
    }

    function II(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var JI = class extends GI {
        constructor(a) {
            super(a);
            this.g = {}
        }
        H(a) {
            this.g.a = a.join(",");
            return this
        }
        G(a) {
            a != null && (this.g.allp = a);
            return this
        }
        Zg(a) {
            if (a) {
                const b = [];
                for (const c of mp(a))
                    if (a.get(c).length > 0) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.kb, d.lh].join() + ")")
                    }
                this.g.fd = b.join(",")
            }
            return this
        }
        l(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.l(a);
            zc(a, this.g);
            return a
        }
    };

    function KI(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function LI(a, b, c, d = 30) {
        c.length <= d ? a[b] = MI(c) : (a[b] = MI(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function MI(a) {
        const b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ja(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function NI(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function OI(a, b) {
        a.i.op = NI(b)
    }

    function PI(a, b, c) {
        LI(a.i, "fap", b);
        a.i.fad = NI(c)
    }

    function QI(a, b, c) {
        LI(a.i, "fmp", b);
        a.i.fmd = NI(c)
    }

    function RI(a, b, c) {
        LI(a.i, "vap", b);
        a.i.vad = NI(c)
    }

    function SI(a, b, c) {
        LI(a.i, "vmp", b);
        a.i.vmd = NI(c)
    }

    function TI(a, b, c) {
        LI(a.i, "pap", b);
        a.i.pad = NI(c)
    }

    function UI(a, b, c) {
        LI(a.i, "pmp", b);
        a.i.pmd = NI(c)
    }

    function VI(a, b) {
        LI(a.i, "psq", b)
    }
    var WI = class extends JI {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            this.errors.length > 0 && (a.e = MI(this.errors));
            return a
        }
    };

    function XI(a, b, c) {
        const d = b.ha;
        kp(a.g, d) || a.g.set(d, new YI(Kq(Jw(b)) ? ? ""));
        c(a.g.get(d))
    }

    function ZI(a, b) {
        XI(a, b, c => {
            c.g = !0
        })
    }

    function $I(a, b) {
        XI(a, b, c => {
            c.i = !0
        })
    }

    function aJ(a, b) {
        XI(a, b, c => {
            c.j = !0
        });
        a.I.push(b.ha)
    }

    function bJ(a, b, c) {
        XI(a, b, d => {
            d.Mb = c
        })
    }

    function cJ(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) BI(f.Mb ? ? "") ? ++e : (b = a.i.get(f.Mb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, h) => (f ? ? -1) - (h ? ? -1)),
            Nb: e
        }
    }

    function dJ(a, b) {
        OI(b, a.i.wc());
        var c = np(a.g).filter(f => (f.xb.startsWith(zI) ? 0 : 1) === 0),
            d = np(a.g).filter(f => (f.xb.startsWith(zI) ? 0 : 1) === 1),
            e = cJ(a, f => f.g, c);
        PI(b, e.list, e.Nb);
        e = cJ(a, f => f.g, d);
        QI(b, e.list, e.Nb);
        e = cJ(a, f => f.i, c);
        RI(b, e.list, e.Nb);
        e = cJ(a, f => f.i, d);
        SI(b, e.list, e.Nb);
        c = cJ(a, f => f.j, c);
        TI(b, c.list, c.Nb);
        d = cJ(a, f => f.j, d);
        UI(b, d.list, d.Nb);
        VI(b, a.I.map(f => a.g.get(f) ? .Mb).map(f => a.i.get(f) ? ? null))
    }

    function mm() {
        var a = N(eJ);
        if (!a.A) return bm();
        const b = km(jm(im(hm(gm(fm(em(dm(am($l(new cm, a.A ? ? []), a.H ? ? []), a.C), a.G), a.F), a.M), a.R), a.B ? ? 0), np(a.g).map(c => {
            var d = new Zl;
            d = oj(d, 1, c.xb);
            var e = a.i.get(c.Mb ? ? "", -1);
            d = mj(d, 2, e);
            d = J(d, 3, c.g);
            return J(d, 4, c.i)
        })), a.I.map(c => a.g.get(c) ? .Mb).map(c => a.i.get(c) ? ? -1));
        a.j != null && J(b, 6, a.j);
        a.l != null && ri(b, 13, mh(a.l), "0");
        return b
    }
    var eJ = class {
        constructor() {
            this.l = this.H = this.A = null;
            this.F = this.G = !1;
            this.j = null;
            this.R = this.C = this.M = !1;
            this.B = null;
            this.i = new op;
            this.g = new op;
            this.I = []
        }
    };
    class YI {
        constructor(a) {
            this.j = this.i = this.g = !1;
            this.Mb = null;
            this.xb = a
        }
    };
    class fJ {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function gJ(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function hJ(a, b) {
        const c = a.H.filter(d => mp(d.cd).every(e => d.cd.get(e) === b.get(e)));
        return c.length === 0 ? (a.i.push(19), null) : c.reduce((d, e) => d.cd.wc() > e.cd.wc() ? d : e, c[0])
    }

    function iJ(a, b) {
        b = Jw(b);
        if (b.g == null) return a.i.push(18), null;
        b = b.getValue();
        if (kp(a.j, b)) return a.j.get(b);
        var c = Vq(b);
        c = hJ(a, c);
        a.j.set(b, c);
        return c
    }
    var jJ = class {
        constructor(a) {
            this.g = a;
            this.j = new op;
            this.H = (z(a, Yr, 2) ? .g() || []).map(b => {
                const c = Vq(I(b, 1)),
                    d = Ki(b, 2);
                return {
                    cd: c,
                    Rg: d,
                    xb: I(b, 1)
                }
            });
            this.i = []
        }
        F() {
            const a = N(eJ);
            var b = this.l();
            a.A = b;
            b = this.C();
            a.H = b;
            b = this.A();
            b != null && (a.l = b);
            b = !!this.g.j() ? .g() ? .g();
            a.F = b;
            b = new op;
            for (const c of z(this.g, Yr, 2) ? .g() ? ? []) b.set(I(c, 1), Ki(c, 2));
            a.i = b
        }
        B() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        C() {
            return [...ii(this.g, 4, kh, 0)]
        }
        A() {
            return z(this.g, Sr, 5) ? .g() ? ? null
        }
        G(a) {
            const b = iJ(this, a);
            b ? .xb != null &&
                bJ(N(eJ), a, b.xb)
        }
        I(a) {
            const b = U(vt) || 0;
            if (a.length == 0 || b == 0) return !0;
            const c = (new Cq(a)).filter(d => {
                d = iJ(this, d) ? .xb || "";
                return d != "" && !(d === zI || d === AI)
            });
            return b <= c.g.length / a.length
        }
    };

    function kJ(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => (iJ(a.g, c) ? .Rg ? ? Number.MAX_VALUE) - (iJ(a.g, d) ? .Rg ? ? Number.MAX_VALUE))
    }

    function lJ(a, b) {
        var c = b.la.g,
            d = Math,
            e = d.min;
        const f = b.ja(),
            h = b.ha.g();
        c += 200 * e.call(d, 20, h == 0 || h == 3 ? gJ(f.parentElement) : gJ(f));
        a = a.i;
        a.g < 0 && (a.g = $o(a.i).scrollHeight || 0);
        a = a.g - b.la.g;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.ja();
        return a
    }

    function mJ(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => lJ(a, c) - lJ(a, d))
    }

    function nJ(a, b) {
        return b.sort((c, d) => {
            const e = c.ha.G,
                f = d.ha.G;
            var h;
            e == null || f == null ? h = e == null && f == null ? lJ(a, c) - lJ(a, d) : e == null ? 1 : -1 : h = e - f;
            return h
        })
    }
    class oJ {
        constructor(a, b = null) {
            this.i = new fJ(a);
            this.g = b && new jJ(b)
        }
    };

    function pJ(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.l) e = Bq(e, f.Ba(a.j), qJ(f.za(), c));
        f = e = e.apply(oz(a.j));
        for (const h of b.i) f = Bq(f, h.Ba(a.j), Rq([rJ(h.za(), c), k => {
            d ? .g(k, h.za())
        }]));
        switch (b.j) {
            case 1:
                f = mJ(a.g, f);
                break;
            case 2:
                f = nJ(a.g, f);
                break;
            case 3:
                const h = N(eJ);
                f = kJ(a.g, f);
                e.forEach(k => {
                    ZI(h, k);
                    a.g.g ? .G(k)
                });
                f.forEach(k => $I(h, k))
        }
        b.A && (f = Eq(f, le(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        b.g ? .length === 1 && CI(a.l, b.g[0], {
            kb: e.g.length,
            lh: f.g.length
        });
        return Dq(f)
    }
    class sJ {
        constructor(a, b, c = null) {
            this.i = new Cq(a);
            this.g = new oJ(b, c);
            this.j = b;
            this.l = new DI
        }
        A() {
            this.i.forEach(a => {
                a.i && dv(a.i);
                a.i = null
            })
        }
    }
    const qJ = (a, b) => c => hw(c, b, a),
        rJ = (a, b) => c => hw(c.ha, b, a);

    function tJ(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = uJ(vJ(c), a);
                    break a;
                case 3:
                    a = uJ(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = uJ(e ? e.nodeType == 1 ? e : vJ(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !wJ(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !vs(b) && b.offsetWidth <= 0);
        return d
    }

    function uJ(a, b) {
        if (!a) return !1;
        a = Ue(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function vJ(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function wJ(a) {
        return !!a.nextSibling || !!a.parentNode && wJ(a.parentNode)
    };
    var xJ = !pc && !ic();

    function yJ(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (xJ && a.dataset) {
            if (mc() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var zJ = (a, b, c) => {
            if (!b) return null;
            const d = ue(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && e.position != "static") {
                    var h = c.parentNode.lastElementChild;
                    for (f = e.position; h && h != c;) {
                        if (a.getComputedStyle(h).display != "none") {
                            f = a.getComputedStyle(h).position;
                            break
                        }
                        h = h.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var k = a.document;
                f = k.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Wo(a);
                e = k.body.scrollHeight;
                a = a.innerHeight;
                h = k.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var l = f.getBoundingClientRect().top;
                k = k.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && c > 0 && h > 0 && (f = h - k);
                a = l - k >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        AJ = a => {
            const b = a.document.body;
            var c = zJ(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; d.length >
                    0;) {
                    const k = d.pop(),
                        l = k.element;
                    var h = k.height;
                    k.depth > 0 && h > e && (e = h, f = l);
                    if (k.depth < 5)
                        for (h = 0; h < l.children.length; h++) {
                            const m = l.children[h],
                                n = m.getBoundingClientRect().width;
                            (n == null || c == null ? 0 : n >= c * .9 && n <= c * 1.01) && d.push({
                                element: m,
                                depth: k.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? zJ(a, c.parentNode || b, c) : null
        },
        CJ = a => {
            let b = 0;
            try {
                b |= Uo(a), Fe() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), BJ(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        BJ = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if (yJ(a[b]) == "autorelaxed") return !0;
            return !1
        };

    function DJ(a) {
        const b = Zo(a, !0),
            c = $o(a).scrollWidth,
            d = $o(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = dp(a);
        const h = [];
        var k = [];
        const l = [],
            m = [];
        var n = [],
            p = [],
            q = [];
        let t = 0,
            w = 0,
            C = Infinity,
            E = Infinity,
            F = null;
        var L = My({
            Kb: !1
        }, a);
        for (var G of L) {
            L = G.getBoundingClientRect();
            const Ca = b - (L.bottom + f);
            var Z = void 0,
                O = void 0;
            if (G.className && G.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                Z = G.getAttribute("google_element_uid");
                O = a.google_sv_map;
                if (!Z ||
                    !O || !O[Z]) continue;
                Z = (O = Vk(O[Z])) ? O.height : 0;
                O = O ? O.width : 0
            } else if (Z = L.bottom - L.top, O = L.right - L.left, Z <= 1 || O <= 1) continue;
            h.push(Z);
            l.push(O);
            m.push(Z * O);
            G.className && G.className.indexOf("google-auto-placed") != -1 ? (w += 1, G.className && G.className.indexOf("pedestal_container") != -1 && (F = Z)) : (C = Math.min(C, Ca), p.push(L), t += 1, k.push(Z), n.push(Z * O));
            E = Math.min(E, Ca);
            q.push(L)
        }
        C = C === Infinity ? null : C;
        E = E === Infinity ? null : E;
        f = EJ(p);
        q = EJ(q);
        k = FJ(b, k);
        p = FJ(b, h);
        n = FJ(b * c, n);
        G = FJ(b * c, m);
        return new GJ(a, {
            wi: e,
            Ic: b,
            sj: c,
            rj: d,
            ej: t,
            Hh: w,
            Jh: HJ(h),
            Kh: HJ(l),
            Ih: HJ(m),
            mj: f,
            lj: q,
            kj: C,
            jj: E,
            xe: k,
            we: p,
            Ch: n,
            Bh: G,
            uj: F
        })
    }

    function IJ(a, b, c, d) {
        const e = Fe() && !(Vo(a.i) >= 900);
        d = Ta(d, f => Ya(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.wi,
            pg_h: JJ(a.g.Ic),
            pg_w: JJ(a.g.sj),
            pg_hs: JJ(a.g.rj),
            c: JJ(a.g.ej),
            aa_c: JJ(a.g.Hh),
            av_h: JJ(a.g.Jh),
            av_w: JJ(a.g.Kh),
            av_a: JJ(a.g.Ih),
            s: JJ(a.g.mj),
            all_s: JJ(a.g.lj),
            b: JJ(a.g.kj),
            all_b: JJ(a.g.jj),
            d: JJ(a.g.xe),
            all_d: JJ(a.g.we),
            ard: JJ(a.g.Ch),
            all_ard: JJ(a.g.Bh),
            pd_h: JJ(a.g.uj),
            dt: e ? "m" : "d"
        }
    }
    class GJ {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function HJ(a) {
        return Yd.apply(null, Ta(a, b => b > 0)) || null
    }

    function FJ(a, b) {
        return a <= 0 ? null : Xd.apply(null, b) / a
    }

    function EJ(a) {
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

    function JJ(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function KJ(a) {
        var b = Oy({
            Kb: !1,
            qd: !1
        }, a);
        a = (Wo(a) || 0) - dp(a);
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d].getBoundingClientRect();
            Uy(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function LJ(a) {
        const b = {};
        var c = Oy({
            Kb: !1,
            qd: !1,
            Le: !1,
            Me: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Uy);
        b.Df = c.length;
        c = Py({
            Le: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Uy);
        b.bg = c.length;
        c = Py({
            Me: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Uy);
        b.Eg = c.length;
        c = Py({
            qd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Uy);
        b.If = c.length;
        c = (Wo(a) || 0) - dp(a);
        c = Oy({
            Kb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Uy).filter(Ga(MJ, null, c));
        b.Ef = c.length;
        a = DJ(a);
        c = a.g.xe != null ? a.g.xe : null;
        c !=
            null && (b.zg = c);
        a = a.g.we != null ? a.g.we : null;
        a != null && (b.Ff = a);
        return b
    }

    function RH(a, b, {
        Bd: c,
        ce: d,
        pe: e
    } = {}) {
        return Lv(997, () => NJ(a, b, {
            Bd: c,
            ce: d,
            pe: e
        }), a.g)
    }

    function SH(a, b, c, d) {
        var e = c.Cb ? c.Cb : a.B;
        const f = cx(e, b.g.length);
        e = a.j.Gf ? e.g : void 0;
        const h = wI(xI(tI(vI(uI(sI(qI(rI(oI(pI(mI(c.types), a.ia), c.df || []), a.ca), c.Hj || [])), f.Hc || void 0, e, b), c.minWidth, c.maxWidth)), f.tb || void 0));
        a.R && h.g.push(new aI(a.R));
        b = 1;
        a.j.jh ? b = 2 : a.sb() && (b = 3);
        yI(h, b);
        a.j.bh && (h.l = !0);
        return Lv(995, () => pJ(a.i, h.build(), d, a.C || void 0), a.g)
    }

    function UH(a, b) {
        const c = AJ(a.g);
        if (c) {
            const d = cr(a.I, b),
                e = rv(a.g.document, a.G, null, null, {}, d);
            e && (gv(e.nb, c, 2, 256), Lv(996, () => OJ(a, e, d), a.g))
        }
    }

    function PJ(a) {
        return a.F ? a.F : a.F = a.g.google_ama_state
    }

    function NJ(a, b, {
        Bd: c,
        ce: d,
        pe: e
    } = {}) {
        const f = b.ha;
        if (f.A) return !1;
        var h = b.ja(),
            k = f.g();
        if (!tJ(a.g, k, h, a.l)) return !1;
        k = null;
        f.Ac ? .includes(6) ? (k = Math.round(h.getBoundingClientRect().height), k = new dr(null, {
            google_max_responsive_height: c == null ? k : Math.min(c, k),
            google_full_width_responsive: "false"
        })) : k = c == null ? null : new dr(null, {
            google_max_responsive_height: c
        });
        c = er(Ii(f.Sd, 2) || 0);
        h = fr(f.G);
        const l = QJ(a, f),
            m = RJ(a),
            n = cr(a.I, f.R ? f.R.g(b.la) : null, k, d || null, c, h, l, m),
            p = b.fill(a.G, n);
        if (e && !SJ(a, p, n) || !Lv(996,
                () => OJ(a, p, n), a.g)) return !1;
        lk(9, [f.G, f.Lb]);
        a.sb() && aJ(N(eJ), b);
        return !0
    }

    function QJ(a, b) {
        return Kq(Oq(Hw(b).map(gr), () => {
            a.A.push(18)
        }))
    }

    function RJ(a) {
        if (!a.sb()) return null;
        var b = a.i.g.g ? .C();
        if (b == null) return null;
        b = b.join("~");
        a = a.i.g.g ? .A() ? ? null;
        return hr({
            ji: b,
            Di: a
        })
    }

    function SJ(a, b, c) {
        if (!b) return !1;
        var d = b.va,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.va;
        c = c && c.xc() || {};
        var h = U(Ks);
        if (d !== d.top) h = Ne(d) ? 3 : 16;
        else if (Vo(d) < 488)
            if (d.innerHeight >= d.innerWidth) {
                var k = Vo(d);
                if (!k || (k - f) / k > h) h = 6;
                else {
                    if (h = c.google_full_width_responsive !== "true") b: {
                        k = e.parentElement;
                        for (h = Vo(d); k; k = k.parentElement) {
                            const l = Ue(k, d);
                            if (!l) continue;
                            const m = df(l.width);
                            if (m && !(m >= h) && l.overflow !== "visible") {
                                h = !0;
                                break b
                            }
                        }
                        h = !1
                    }
                    h = h ? 7 : !0
                }
            } else h = 5;
        else h =
            4;
        if (h !== !0) f = h;
        else {
            if (!(c = c.google_full_width_responsive === "true")) a: {
                do
                    if ((c = Ue(e, d)) && c.position == "fixed") {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Vo(d), f = d - f, f = d && f >= 0 ? !0 : d ? f < -10 ? 11 : f < 0 ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.va;
            if (d = nv(a, b)) f = b.style, f.border = f.borderStyle = f.outline = f.outlineStyle = f.transition = "none", f.borderSpacing = f.padding = "0", lv(b, d, "0px"), f.width = `${Vo(a)}px`, ov(a, b, d), f.zIndex = "30";
            return !0
        }
        dv(b.nb);
        return !1
    }

    function OJ(a, b, c) {
        if (!b) return !1;
        try {
            vv(a.g, b.va, c)
        } catch (d) {
            return dv(b.nb), a.A.push(6), !1
        }
        return !0
    }
    class TJ {
        constructor(a, b, c, d, e = {}, f = [], h = !1) {
            this.i = a;
            this.G = b;
            this.g = c;
            this.B = d.Cb;
            this.ia = d.tc || [];
            this.I = d.Ei || null;
            this.ca = d.ni || [];
            this.R = d.de || [];
            this.j = e;
            this.l = !1;
            this.M = [];
            this.A = [];
            this.H = this.F = void 0;
            this.Ka = f;
            this.C = h ? new CH : null
        }
        Fa() {
            return this.i
        }
        da() {
            return this.g
        }
        wa(a) {
            this.M.push(a)
        }
        sb() {
            if ((this.i.g.g ? .l().length ? ? 0) == 0) return !1;
            if ((U(vt) || 0) == 0) return !0;
            if (this.H === void 0) {
                const a = yI(tI(sI(mI([0, 1, 2]))), 1).build(),
                    b = Lv(995, () => pJ(this.i, a), this.g);
                this.H = this.i.g.g ? .I(b) || !1
            }
            return this.H
        }
        Qe() {
            return !!this.j.Vg
        }
        vd() {
            return !BJ(this.g)
        }
        ua() {
            return this.C
        }
    }
    const MJ = (a, b) => b.top <= a;

    function UJ(a, b, c, d, e, f = 0, h = 0) {
        this.La = a;
        this.Od = f;
        this.Nd = h;
        this.errors = b;
        this.zb = c;
        this.g = d;
        this.i = e
    };
    var VJ = (a, {
        vd: b = !1,
        Qe: c = !1,
        Kj: d = !1,
        sb: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !T(Us);
            const h = a.includes(1);
            (d || e || h) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !T(Us) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function WJ(a, b, c) {
        a = VJ(a, {
            vd: b.vd(),
            Qe: b.Qe(),
            Kj: !!b.j.Fe,
            sb: b.sb()
        });
        return new XJ(a, b, c)
    }

    function YJ(a, b) {
        const c = OH[b];
        return c ? Lv(998, () => c(a.g), a.A) : (a.g.wa(12), !0)
    }

    function ZJ(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(YJ(a, b))
            })
        })
    }

    function $J(a) {
        a.g.l = !0;
        return Promise.all(a.i.map(b => ZJ(a, b))).then(b => {
            b.includes(!1) && a.g.wa(5);
            a.i.splice(0, a.i.length)
        })
    }
    class XJ {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = Za(this.i, 1);
            this.g = b;
            this.A = c
        }
    };
    const aK = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function bK(a) {
        return $J(a).then(() => {
            var b = a.g.i.i.filter(cw).g.length;
            var c = a.g.M.slice(0);
            var d = a.g;
            d = [...d.A, ...(d.i.g.g ? .B() || [])];
            b = new UJ(b, c, d, a.g.i.i.g.length, a.g.i.l.g, a.g.i.i.filter(cw).filter(dw).g.length, a.g.i.i.filter(dw).g.length);
            return new aK(b)
        })
    };
    var cK = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > b * .5
        },
        dK = a => {
            const b = Wo(a) || 0;
            return c => c.getBoundingClientRect().height >= b * .75
        };
    var eK = (a, b) => {
        b = Cw(b, a);
        const c = b.map(d => d.g);
        b = b.filter(d => {
            d = d.g.getBoundingClientRect();
            return d.width > 0 && d.height > 0
        }).filter(d => cK(c)(d.g)).filter(d => dK(a)(d.g));
        b.sort((d, e) => {
            e = e.g;
            return d.g.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };

    function fK(a) {
        return a.reduce((b, c) => b.g.getBoundingClientRect().bottom < c.g.getBoundingClientRect().bottom ? c : b)
    }

    function gK(a, b, c, d) {
        let e = !1;
        const f = new IntersectionObserver(h => {
            for (const k of h)
                if (k.isIntersecting) e = !0;
                else {
                    if (h = e) h = a, h = b.getBoundingClientRect().bottom <= Wo(h.win) / 2;
                    h && (hK(a.L, {
                        typ: "cee",
                        cet: c
                    }), e = !1)
                }
        }, {
            rootMargin: d
        });
        f.observe(b);
        yp(a, () => {
            f.disconnect()
        })
    }
    var iK = class extends P {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.L = c
        }
    };

    function jK(a, b) {
        hK(a, {
            typ: "cdr",
            af: b.je,
            ...(b.je > 0 ? {
                vh: b.W,
                ph: b.Ic,
                ah: b.Dh,
                at: b.Fh
            } : {})
        })
    }

    function hK(a, b) {
        a = { ...b,
            wpc: a.webPropertyCode,
            cor: a.g,
            tim: Math.round(cl() ? ? -1),
            num: a.i++
        };
        nx("ama_vignette", a, 1)
    }
    var kK = class {
        constructor(a) {
            var b = wf();
            this.webPropertyCode = a;
            this.g = b;
            this.i = 0
        }
    };
    class lK {
        g() {
            return new dr([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class mK {
        g() {
            return new dr(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function nK(a) {
        return ws(a.g.document).map(b => {
            const c = new Wv(b, 3);
            b = new Yv(xv(a.g, b));
            return new bw(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    class oK {
        constructor(a) {
            var b = new mK;
            this.g = a;
            this.i = b || null
        }
    };
    const pK = {
        uf: "10px",
        me: "10px"
    };

    function qK(a) {
        return jp(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new bw(new Wv(b, 1), new Uv(pK), a.i, !1, 0, [], null, a.g, null))
    }
    class rK {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function sK(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(ja(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        LI(a.i, "cnstr", c, 80)
    }
    var tK = class extends GI {
        constructor() {
            super(-1);
            this.i = {}
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            return a
        }
    };

    function uK(a, b) {
        return a == null ? b + "ShouldNotBeNull" : a == 0 ? b + "ShouldNotBeZero" : a < -1 ? b + "ShouldNotBeLessMinusOne" : null
    }

    function vK(a, b, c) {
        const d = uK(c.nd, "gapsMeasurementWindow") || uK(c.vc, "gapsPerMeasurementWindow") || uK(c.Dc, "maxGapsToReport");
        return d != null ? Iq(d) : c.Hf || c.vc != -1 || c.Dc != -1 ? Gq(new wK(a, b, c)) : Iq("ShouldHaveLimits")
    }

    function xK(a) {
        return PJ(a.j) && PJ(a.j).placed || []
    }

    function yK(a) {
        return xK(a).map(b => tq(rq(b.element, a.g)))
    }

    function zK(a) {
        return xK(a).map(b => b.index)
    }

    function AK(a, b) {
        const c = b.ha;
        return !a.C && c.l && Ii(c.l, 8) != null && Ii(c.l, 8) == 1 ? [] : c.A ? (c.ca || []).map(d => tq(rq(d, a.g))) : [tq(new sq(b.la.g, 0))]
    }

    function BK(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new sq(c, f - c)), c = d)
        }
        return b
    }

    function CK(a, b) {
        b = b.map(c => {
            var d = new uH;
            d = Si(d, 1, c.g);
            c = c.getHeight();
            return Si(d, 2, c)
        });
        return wH(vH(new xH, a), b)
    }

    function DK(a) {
        const b = Bi(a, uH, 2).map(c => `G${Ji(c,1)}~${c.getHeight()}`);
        return `W${Ji(a,1)}${b.join("")}`
    }

    function EK(a, b) {
        const c = [];
        let d = 0;
        for (const e of mp(b)) {
            const f = b.get(e);
            f.sort((h, k) => k.getHeight() - h.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.B && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(CK(e, f));
            d += f.length;
            if (!a.B && d >= a.i) break
        }
        return c
    }

    function FK(a) {
        const b = Bi(a, xH, 5).map(c => DK(c));
        return `M${Ji(a,1)}H${Ji(a,2)}C${Ji(a,3)}B${Number(!!H(a,4))}${b.join("")}`
    }

    function GK(a) {
        var b = Mw(Dq(a.j.i.i), a.g),
            c = yK(a),
            d = new pp(zK(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = AK(a, b[e]);
                c.push(...f)
            }
        c.push(new sq(0, 0));
        c.push(tq(new sq($o(a.g).scrollHeight, 0)));
        b = BK(c);
        c = new op;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.g / a.l), kp(c, f) || c.set(f, []), c.get(f).push(e);
        b = EK(a, c);
        c = new yH;
        c = Si(c, 1, a.i);
        c = Si(c, 2, a.l);
        c = Si(c, 3, a.A);
        a = Ri(c, 4, a.C);
        return Ci(a, 5, b)
    }

    function HK(a) {
        a = GK(a);
        return FK(a)
    }
    var wK = class {
        constructor(a, b, c) {
            this.G = c.nd == -1;
            this.l = c.nd;
            this.F = c.vc == -1;
            this.A = c.vc;
            this.B = c.Dc == -1;
            this.i = c.Dc;
            this.C = c.rg;
            this.j = b;
            this.g = a
        }
    };

    function ns(a, b, c) {
        let d = b.Pa;
        b.rb && T(it) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.Ua || "pvc" in c || (c.pvc = xf(a.g)), nx(b.qb, c, d))
    }

    function IK(a, b, c) {
        c = c.l(a.g);
        b.Ua && (c.pvc = xf(a.g));
        0 <= b.Pa && (c.r = b.Pa, ns(a, b, c))
    }
    var JK = class {
        constructor(a) {
            this.g = a
        }
    };
    const KK = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function LK(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        nx("ama", b, .01)
    }

    function MK(a) {
        const b = {};
        We(KK, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function NK(a) {
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

    function OK(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function PK(a, b) {
        a = ii(a, 2, Wg);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function QK(a, b) {
        a = OK(NK(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = Ye(a),
            d = RK(a);
        return b.find(e => {
            const f = ei(e, pr, 7) ? $g($h(z(e, pr, 7), 1)) : $g($h(e, 1));
            e = ei(e, pr, 7) ? Ii(z(e, pr, 7), 2) : 2;
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

    function RK(a) {
        const b = {};
        for (;;) {
            b[Ye(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function SK(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            LK(a, {
                lserr: 1
            })
        }
    };

    function TK() {
        var a = new Fr;
        a = nj(a, 1, "Toggle toolbar expansion");
        a = nj(a, 2, "Toggle privacy and legal settings display");
        return nj(a, 3, "Dismiss privacy and legal settings display").i()
    };
    var VK = (a, b, c, d, e, f = null, h = null) => {
            UK(a, new JK(a), b, c, d, e, f, h)
        },
        UK = (a, b, c, d, e, f, h = null, k = null) => {
            if (c)
                if (d) {
                    var l = vC(d, e);
                    try {
                        const m = new WK(a, b, c, d, e, l, f, h, k);
                        Lv(990, () => XK(m), a)
                    } catch (m) {
                        kk() && lk(15, [m]), IK(b, gs, FI(II(HI((new JI(0)).Vb(c), d), l).wa(1), m)), MF(N(JF), qm(new ym, Kl(1)))
                    }
                } else IK(b, gs, (new JI(0)).Vb(c).wa(8)), MF(N(JF), qm(new ym, Kl(8)));
            else IK(b, gs, (new JI(0)).wa(9)), MF(N(JF), qm(new ym, Kl(9)))
        };

    function XK(a) {
        a.G.forEach(b => {
            switch (b) {
                case 0:
                    Lv(991, () => YK(a), a.g);
                    break;
                case 1:
                    Lv(1073, () => {
                        const c = T(ot);
                        oC(new uC(a.g, a.C, a.j, a.A, a.i.aa, c))
                    }, a.g);
                    break;
                case 2:
                    ZK(a);
                    break;
                case 6:
                    a.runAutoGames();
                    break;
                case 7:
                    Lv(1203, () => {
                        var c = z(a.j, Rr, 34);
                        if (c) {
                            var d = a.g,
                                e = a.A,
                                f = c.i();
                            c = d.location.hostname;
                            var h = z(f, Qr, 1) ? .g() ? ? [];
                            c = new sH(e, c, xf(u), h);
                            if (h = z(f, Qr, 1))
                                if (f = z(f, Pr, 2)) {
                                    vq(d, $G);
                                    const m = new up;
                                    var k = d.innerWidth;
                                    var l = .375 * k;
                                    k = new lD(l, k - l);
                                    l = d.innerWidth;
                                    l = Vo(d) >= 900 ? .2 * l : .5 * l;
                                    lH(new nH(d, e,
                                        h, f, new TG(d, k, l, m, new DG(m)), c))
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g)
            }
        })
    }

    function YK(a) {
        var b = T(Ws) ? void 0 : a.i.yj;
        let c = null;
        c = T(Ws) ? bx(a.g) : $w(a.g, b);
        if (a.i.aa && ei(a.i.aa, or, 10)) {
            var d = hi(a.i.aa.g(), 1);
            d !== null && d !== void 0 && (c = Rw(a.g, d, b));
            T(mt) && a.i.aa.g() ? .g() === 2 && (c = Zw(a.i.aa.g(), c))
        }
        ei(a.j, lr, 26) && (c = dx(c, z(a.j, lr, 26), a.g));
        c = fx(c, a.g);
        b = a.i.aa ? ii(a.i.aa, 6, Wg) : [];
        d = a.i.aa ? Bi(a.i.aa, ur, 5) : [];
        const e = a.i.aa ? ii(a.i.aa, 2, Wg) : [],
            f = Lv(993, () => {
                var h = a.j,
                    k = Bi(h, Nr, 1),
                    l = a.i.aa && PK(a.i.aa, 1);
                l = T(rt) ? "" : l ? "text_image" : "text";
                var m = new lK,
                    n = aw(k, a.g, {
                        Mh: m,
                        Vi: new Zv(l)
                    });
                k.length !=
                    n.length && a.H.push(13);
                n = n.concat(qK(new rK(a.g, m)));
                k = T(jt);
                m = z(h, Zr, 24) ? .j() ? .g() ? .g() || !1;
                if (k || m) k = nK(new oK(a.g)), m = N(eJ), n = n.concat(k), m.M = !0, m.B = k.length, a.F === "n" && (a.F = z(h, Zr, 24) ? .g() ? .length ? "o" : "p");
                k = T(mt) && a.i.aa.g() ? .g() === 2 && a.i.aa.g() ? .j();
                k = T(Rs) || k;
                a: {
                    if (m = z(h, Jr, 6))
                        for (p of m.g())
                            if (ei(p, Tq, 4)) {
                                var p = !0;
                                break a
                            }
                    p = !1
                }
                k && p ? (p = n.concat, k = a.g, (m = z(h, Jr, 6)) ? (k = Ew(m.g(), k), l = tH(h, l, k)) : l = [], l = p.call(n, l)) : (p = n.concat, k = a.g, (m = z(h, Jr, 6)) ? (k = Dw(m.g(), k), l = tH(h, l, k)) : l = [], l = p.call(n, l));
                n = l;
                h = z(h, Zr, 24);
                return new sJ(n, a.g, h)
            }, a.g);
        a.l = new TJ(f, a.A, a.g, {
            Cb: c,
            Ei: a.M,
            tc: a.i.tc,
            ni: b,
            de: d
        }, $K(a), e, T(it));
        PJ(a.l) ? .optimization ? .ablatingThisPageview && !a.l.sb() && (wv(a.g), N(eJ).C = !0, a.F = "f");
        a.B = WJ(e, a.l, a.g);
        Lv(992, () => bK(a.B), a.g).then(Lv(994, () => a.ia.bind(a), a.g), a.ca.bind(a));
        aL(a)
    }

    function ZK(a) {
        const b = z(a.j, Or, 18);
        b && SF(new TF(a.g, new BG(a.g, a.A), b, new IA(a.g), Bi(a.j, Nr, 1)))
    }

    function $K(a) {
        const b = T(lt);
        if (!a.j.g()) return {
            bh: b,
            jh: !1,
            oi: !1,
            kh: !1,
            dg: !1,
            Vg: !1,
            vj: 0,
            Ng: 0,
            Gf: bL(a),
            Fe: a.I
        };
        const c = a.j.g();
        return {
            bh: b || H(c, 14, !1),
            jh: H(c, 2, !1),
            oi: H(c, 3, !1),
            kh: H(c, 4, !1),
            dg: H(c, 5, !1),
            Vg: H(c, 6, !1),
            vj: Li(c, 8, 0),
            Ng: Ii(c, 10),
            Gf: bL(a),
            Fe: a.I
        }
    }

    function aL(a) {
        if (T(Mu)) {
            var b = new kK(a.A);
            const e = z(a.j, Jr, 6) ? .g(),
                f = e ? .length > 0;
            var c = b,
                d = !!AA(a.g).reactiveTypeEnabledInAsfe[8];
            hK(c, {
                typ: "pv",
                asp: Number(f),
                ve: Number(d)
            });
            f && (a = new iK(a.g, e, b), b = eK(a.win, a.g), b.length === 0 ? jK(a.L, {
                je: 0
            }) : (c = fK(b), d = c.g.getBoundingClientRect(), jK(a.L, {
                je: b.length,
                W: Wo(a.win),
                Ic: $o(a.win).scrollHeight,
                Dh: d.height,
                Fh: a.win.scrollY + d.top
            }), c = c.g, gK(a, c, 0, "-50% 0px 0px 0px"), gK(a, c, 1, "0px 0px 0px 0px")))
        }
    }

    function bL(a) {
        return T(ct) || T(mt) && a.i.aa ? .g() ? .g() === 2 ? !1 : a.i.aa && ei(a.i.aa, or, 10) ? (hi(a.i.aa.g(), 1) || 0) >= .5 : !0
    }

    function cL(a, b) {
        for (var c = EI(EI(new JI(b.La), b.errors), a.H), d = b.zb, e = 0; e < d.length; e++) a: {
            for (var f = c, h = d[e], k = 0; k < f.C.length; k++)
                if (f.C[k] == h) break a;f.C.push(h)
        }
        c.g.pp = b.Nd;
        c.g.ppp = b.Od;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.lc;
        c.g.eatfAbg = b.mc;
        c.g.reatf = b.Jb;
        c = II(HI(c.H(a.B.l.slice(0)), a.j), a.G).Vb(a.A);
        if (d = b.Ga) c.g.as_count = d.Df, c.g.d_count = d.bg, c.g.ng_count = d.Eg, c.g.am_count = d.If, c.g.atf_count = d.Ef, c.g.mdns = KI(d.zg), c.g.alldns = KI(d.Ff);
        c = c.G(b.Rb).Zg(b.ld);
        d = b.Ic;
        d != null && (c.g.pgh = d);
        c.g.abl = b.mg;
        c.g.rr = a.F;
        b.exception !== void 0 && FI(c, b.exception).wa(1);
        return c
    }

    function dL(a, b) {
        var c = cL(a, b);
        IK(a.C, b.errors.length > 0 || a.H.length > 0 || b.exception !== void 0 ? gs : fs, c);
        if (z(a.j, Zr, 24)) {
            a.l.i.g.g ? .F();
            b = PJ(a.l);
            const d = N(eJ);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.R = !!b ? .optimization ? .availableAbg;
            b = N(eJ);
            c = new WI(c);
            b.A ? (c.i.sl = MI(b.A ? ? []), c.i.daaos = MI(b.H ? ? []), c.i.ab = NI(b.G), c.i.rr = NI(b.M), c.i.oab = NI(b.F), b.j != null && (c.i.sab = NI(b.j)), b.C && (c.i.fb = NI(b.C)), c.i.ls = NI(b.R), OI(c, b.i.wc()), b.B != null && (c.i.rp = NI(b.B)),
                b.l != null && (c.i.expl = NI(b.l)), dJ(b, c)) : c.errors.push("irr");
            IK(a.C, is, c)
        }
        c = a.l ? .ua();
        T(it) && c != null && (c = new Map([...c.j.map.entries()].map(LG)), b = new tK, sK(b, c), IK(a.C, ls, b))
    }

    function eL(a, b) {
        const c = N(JF);
        if (c.i) {
            var d = new ym,
                e = b.zb.filter(h => h !== null),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(h => h !== null);
            um(sm(xm(wm(vm(tm(nm(pm(rm(om(d, a.B.l.slice(0).map(h => {
                var k = new Jl;
                return ci(k, 1, Vg(h))
            })), e.map(h => {
                var k = new Ml;
                return ci(k, 1, Vg(h))
            })), f.map(h => Kl(h))), z(a.j, yr, 23) ? .g()), b.La).G(b.Rb), b.Jb), b.lc), b.mc), a.G.map(h => h.toString())), Tl(Sl(Rl(Ql(Pl(Ol(Nl(new Ul, b.Ga ? .Df), b.Ga ? .bg), b.Ga ? .Eg), b.Ga ? .If), b.Ga ? .Ef), b.Ga ? .zg), b.Ga ? .Ff));
            if (b.ld)
                for (let h of mp(b.ld)) {
                    e =
                        new pi;
                    for (let k of b.ld.get(h)) Yl(e, Wl(Vl(new Xl, k.kb), k.lh));
                    oi(d).set(h.toString(), e)
                }
            z(a.j, Zr, 24) && lm(d);
            MF(c, d)
        }
    }

    function fL(a, b) {
        try {
            T(Ts) && a.l ? .Fa() ? .A()
        } catch (c) {
            IK(a.C, ks, FI(II(HI((new JI(b)).Vb(a.A), a.j), a.G).wa(14), c))
        }
    }

    function gL(a, b, c) {
        {
            var d = PJ(a.l),
                e = b.g;
            const f = e.g,
                h = e.Nd;
            let k = e.La,
                l = e.Od,
                m = e.errors.slice(),
                n = e.zb.slice(),
                p = b.exception;
            const q = sF(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? k += d.numAutoAdsPlaced : a.B.j && n.push(13), d.exception !== void 0 && (p = d.exception), d.numPostPlacementsPlaced && (l += d.numPostPlacementsPlaced), c = {
                La: k,
                Nd: h,
                Od: l,
                Rb: f,
                errors: e.errors.slice(),
                zb: n,
                exception: p,
                Jb: c,
                lc: !!d.eatf,
                mc: !!d.eatfAbg,
                mg: q
            }) : (n.push(12), a.B.j && n.push(13), c = {
                La: k,
                Nd: h,
                Od: l,
                Rb: f,
                errors: m,
                zb: n,
                exception: p,
                Jb: c,
                lc: !1,
                mc: !1,
                mg: q
            })
        }
        c.Ga = LJ(a.l.g);
        if (b = b.g.i) c.ld = b;
        c.Ic = $o(a.g).scrollHeight;
        if (kk() || z(a.j, xr, 25) ? .j()) {
            d = Dq(a.l.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const h of mp(e)) d[h] = e.get(h);
                d = {
                    anchorElement: ew(f),
                    position: f.g(),
                    clearBoth: f.H,
                    locationType: f.Lb,
                    placed: f.A,
                    placementProto: f.l ? rj(f.l) : null,
                    articleStructure: f.C ? rj(f.C) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            lk(14, [{
                placementIdentifiers: b
            }, a.l.G, c.Ga])
        }
        return c
    }

    function hL(a, b) {
        var c = a.l.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Rb;
        c.numAutoAdsPlaced = b.La;
        c.hasAtfAd = b.Jb;
        b.exception !== void 0 && (c.exception = b.exception);
        a.l != null && (a = vK(a.g, a.l, {
            nd: -1,
            vc: -1,
            Dc: -1,
            rg: !0,
            Hf: !0
        }), a.g != null ? (c.placementPositionDiffs = HK(a.getValue()), b = GK(a.getValue()), a = new zH, a = B(a, 2, AH, b), c.placementPositionDiffsReport = qj(a)) : (b = a.i.message, c.placementPositionDiffs = "E" + b, a = new zH, a = ui(a, 1, AH, ph(b)), c.placementPositionDiffsReport = qj(a)))
    }

    function iL(a, b) {
        dL(a, {
            La: 0,
            Rb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            lc: void 0,
            mc: void 0,
            Ga: void 0
        });
        eL(a, {
            La: 0,
            Rb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            lc: void 0,
            mc: void 0,
            Ga: void 0
        })
    }
    class WK {
        constructor(a, b, c, d, e, f, h, k, l) {
            this.g = a;
            this.C = b;
            this.A = c;
            this.j = d;
            this.i = e;
            this.G = f;
            this.M = k || null;
            this.H = [];
            this.I = l;
            this.R = h;
            this.F = "n"
        }
        runAutoGames() {
            const a = z(this.j, zr, 32);
            a && this.R.runAutoGames({
                win: this.g,
                webPropertyCode: this.A,
                Nf: a,
                Hb: (z(this.j, Gr, 33) ? .g() ? .i() ? ? null) || TK()
            })
        }
        ia(a) {
            try {
                fL(this, a.g.La);
                const b = KJ(this.l.g) || void 0;
                es({
                    Ae: b
                }, this.g);
                const c = gL(this, a, KJ(this.l.g));
                ei(this.j, xr, 25) && Gi(z(this.j, xr, 25), 1) && hL(this, c);
                dL(this, c);
                eL(this, c);
                mx(753, () => {
                    if (T(Xs) && this.l !=
                        null) {
                        var d = vK(this.g, this.l, {
                                nd: U(ht),
                                vc: U(gt),
                                Dc: U(Zs),
                                rg: !0,
                                Hf: !1
                            }),
                            e = xc(c);
                        d.g != null ? (d = HK(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.i.message;
                        e = cL(this, e);
                        IK(this.C, hs, e)
                    }
                })()
            } catch (b) {
                iL(this, b)
            }
        }
        ca(a) {
            fL(this, 0);
            iL(this, a)
        }
    };
    var jL = class extends M {},
        kL = xj(jL);

    function lL(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Jq(() => kL(c)) : Gq(null)
    };

    function mL(a, b) {
        return Ri(a, 5, b)
    }

    function nL(a, b) {
        return Ri(a, 14, b)
    }
    var oL = class extends M {
        constructor() {
            super()
        }
        l() {
            return D(this, 1) != null
        }
        j() {
            return D(this, 2) != null
        }
        A() {
            return H(this, 3)
        }
        C() {
            return Gi(this, 3) != null
        }
        g() {
            return H(this, 5)
        }
    };
    oL.O = [10];
    var rL = ({
        win: a,
        Va: b,
        pg: c = !1,
        qg: d = !1
    }) => pL({
        win: a,
        Va: b,
        pg: c,
        qg: d
    }) ? (b = iF(dF(), 24)) ? qL(a, mL(new oL, qG(b))) : new Hq(null, Error("tcunav")) : qL(a, mL(new oL, !0));

    function pL({
        win: a,
        Va: b,
        pg: c,
        qg: d
    }) {
        if (!(d = !d && vG(new zG(a)))) {
            if (c = !c) {
                if (b) {
                    a = lL(a);
                    if (a.g != null)
                        if ((a = a.getValue()) && Ii(a, 1) != null) b: switch (a = Ii(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else V.ba(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function qL(a, b) {
        return (a = ak(b, a)) ? Gq(a) : new Hq(null, Error("unav"))
    };
    var sL = class extends M {};
    class tL {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.C = c;
            this.i = !1;
            this.j = d;
            this.A = e
        }
    };
    class uL {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function vL() {
        const {
            promise: a,
            resolve: b
        } = new uL;
        return {
            promise: a,
            resolve: b
        }
    };

    function wL(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = vL();
        b[a] = d;
        c();
        return d
    }

    function xL(a, b, c) {
        return wL(a, b, () => {
            Oe(b.document, c)
        }).promise
    };

    function yL() {
        const a = {};
        $u(Ms) && (a.bust = $u(Ms));
        var b = dF();
        b = iF(b, 38, "");
        b !== "" && (a.sbust = b);
        return a
    }
    const zL = new Map([
        [2, 7],
        [3, 1],
        [4, 3],
        [5, 12]
    ]);

    function AL(a, b, c) {
        c = Ic(c, yL());
        if (a === 1) return {
            Ao: Oe(b.document, c),
            Rc: new Promise(() => {})
        };
        if (zL.has(a)) return {
            Rc: xL(zL.get(a), b, c)
        };
        throw Error(`Unexpected chunkId: ${a}`);
    };
    var BL = class {
        constructor(a) {
            this.jb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            Nf: c,
            Hb: d
        }) {
            ox(1116, AL(5, a, this.jb).Rc.then(e => {
                e.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: qj(c),
                    serializedFloatingToolbarMessages: qj(d)
                })
            }))
        }
    };
    var CL = {
            Xk: "google_ads_preview",
            Kl: "google_mc_lab",
            am: "google_anchor_debug",
            Zl: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            wm: "google_scr_debug",
            ym: "google_ia_debug_allow_onclick",
            Wm: "googleads",
            xh: "google_pedestal_debug",
            qn: "google_responsive_slot_preview",
            pn: "google_responsive_dummy_ad",
            Nk: "google_audio_sense",
            Qk: "google_auto_gallery",
            Sk: "google_auto_storify_swipeable",
            Rk: "google_auto_storify_scrollable",
            Pk: "google_games_single_game",
            Ok: "google_games_catalog"
        },
        DL = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var EL = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function FL(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = GL(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function GL(a) {
        let b = "";
        We(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function HL() {
        var a = u.location;
        let b = !1;
        We(CL, c => {
            FL(a, c) && (b = !0)
        });
        return b
    }

    function IL(a, b) {
        switch (a) {
            case 1:
                return FL(b, "google_ia_debug");
            case 2:
                return FL(b, "google_bottom_anchor_debug");
            case 3:
                return FL(b, "google_anchor_debug") || FL(b, "googleads")
        }
    };

    function JL({
        win: a,
        webPropertyCode: b,
        jb: c
    }) {
        FL(a.location, "google_games_single_game") ? KL(a, b, 1, c) : FL(a.location, "google_games_catalog") && KL(a, b, 2, c)
    }

    function KL(a, b, c, d) {
        var e = new zr;
        c = ci(e, 1, Vg(c));
        (new BL(d)).runAutoGames({
            win: a,
            webPropertyCode: b,
            Nf: c,
            Hb: TK()
        })
    };
    var LL = class extends M {
        constructor() {
            super()
        }
        Ki() {
            return Mi(this, 3)
        }
    };
    const ML = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var NL = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return Ji(this, 2)
        }
    };
    NL.O = [3];

    function OL(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function PL(a) {
        return Jf(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function QL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function RL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function SL(a, b) {
        a = PL(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function TL(a) {
        var b = PL(a),
            c = QL(b.slice(0, 6));
        a = QL(b.slice(6, 12));
        var d = new NL;
        c = Ti(d, 1, c);
        a = Ti(c, 2, a);
        b = b.slice(12);
        c = QL(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let l = 0; l < c; l++) {
            if (e.length === 0) throw Error(`Found ${l} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = QL(e[0]) === 0;
            e = e.slice(1);
            var h = UL(e, b),
                k = d.length === 0 ? 0 : d[d.length - 1];
            k = RL(h) + k;
            e = e.slice(h.length);
            if (f) d.push(k);
            else {
                f = UL(e, b);
                h = RL(f);
                for (let m = 0; m <= h; m++) d.push(k + m);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return qi(a, 3, d, Xg)
    }

    function UL(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var VL = class extends M {
        constructor() {
            super()
        }
    };
    var WL = class extends M {
        constructor() {
            super()
        }
    };
    var XL = class extends M {
        getVersion() {
            return Ji(this, 1)
        }
    };
    var YL = class extends M {
        constructor() {
            super()
        }
    };

    function ZL(a) {
        var b = new $L;
        return A(b, 1, a)
    }
    var $L = class extends M {
        constructor() {
            super()
        }
    };
    const aM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        bM = 6 + aM.reduce((a, b) => a + b);
    var cM = class extends M {
        constructor() {
            super()
        }
    };
    var dM = class extends M {
        getVersion() {
            return Ji(this, 1)
        }
    };
    var eM = class extends M {
        constructor() {
            super()
        }
    };

    function fM(a) {
        var b = new gM;
        return A(b, 1, a)
    }
    var gM = class extends M {
        constructor() {
            super()
        }
    };
    const hM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        iM = 6 + hM.reduce((a, b) => a + b);
    var jM = class extends M {
        constructor() {
            super()
        }
    };
    var kM = class extends M {
        constructor() {
            super()
        }
    };
    var lM = class extends M {
        getVersion() {
            return Ji(this, 1)
        }
    };
    var mM = class extends M {
        constructor() {
            super()
        }
    };

    function nM(a) {
        var b = new oM;
        return A(b, 1, a)
    }
    var oM = class extends M {
        constructor() {
            super()
        }
    };
    const pM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        qM = 6 + pM.reduce((a, b) => a + b);
    var rM = class extends M {
        constructor() {
            super()
        }
    };
    var sM = class extends M {
        constructor() {
            super()
        }
    };
    var tM = class extends M {
        getVersion() {
            return Ji(this, 1)
        }
    };
    var uM = class extends M {
        constructor() {
            super()
        }
    };

    function vM(a) {
        var b = new wM;
        return A(b, 1, a)
    }
    var wM = class extends M {
        constructor() {
            super()
        }
    };
    const xM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        yM = 6 + xM.reduce((a, b) => a + b);
    var zM = class extends M {
        constructor() {
            super()
        }
    };
    var AM = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return Ji(this, 1)
        }
    };
    const BM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        CM = 6 + BM.reduce((a, b) => a + b);

    function DM() {
        var a = new EM;
        return mj(a, 1, 0)
    }

    function FM(a) {
        var b = Number;
        var c = $h(a, 1);
        c = c == null ? c : Tg(c) ? typeof c === "string" ? bh(c) : ch(c) : void 0;
        b = b(c ? ? "0");
        a = Ji(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var EM = class extends M {};
    var GM = "a".charCodeAt(),
        HM = wc(Mo),
        IM = wc(No);

    function JM(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function KM(a) {
        let b = JM(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!JM(a, 1) === !0,
                e = JM(a, 16);
            if (d)
                for (d = JM(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, h) => f - h);
        return c
    }

    function LM(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (JM(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function MM(a) {
        const b = JM(a, 16);
        return !!JM(a, 1) === !0 ? (a = KM(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : LM(a, b)
    }
    class NM {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var PM = a => {
        try {
            var b = Jf(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new NM(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = JM(c, 12);
            b.cmpVersion = JM(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = JM(c, 6);
            b.isServiceSpecific = !!JM(c, 1);
            b.useNonStandardStacks = !!JM(c, 1);
            b.specialFeatureOptins = OM(LM(c, 12, IM), IM);
            b.purpose = {
                consents: OM(LM(c, 24, HM), HM),
                legitimateInterests: OM(LM(c, 24, HM), HM)
            };
            b.purposeOneTreatment = !!JM(c, 1);
            b.publisherCC = String.fromCharCode(GM + JM(c, 6)) + String.fromCharCode(GM +
                JM(c, 6));
            b.vendor = {
                consents: OM(MM(c), null),
                legitimateInterests: OM(MM(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const OM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var QM = class extends M {
        g() {
            return D(this, 2) != null
        }
    };
    var RM = class extends M {
        l() {
            return D(this, 2) != null
        }
    };
    var SM = class extends M {
        j() {
            return D(this, 1) != null
        }
    };
    var TM = class extends M {},
        UM = xj(TM);
    TM.O = [7];

    function VM(a) {
        a = WM(a);
        try {
            var b = a ? UM(a) : null
        } catch (c) {
            b = null
        }
        return b ? z(b, SM, 4) || null : null
    }

    function WM(a) {
        a = (new Yj(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function XM(a) {
        a.__tcfapiPostMessageReady || YM(new ZM(a))
    }

    function YM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.win.__tcfapi)(e.command, e.version, (f, h) => {
                const k = {};
                k.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: h,
                    callId: e.callId
                };
                f = c ? JSON.stringify(k) : k;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.win.addEventListener("message", a.g);
        a.win.__tcfapiPostMessageReady = !0
    }
    var ZM = class {
        constructor(a) {
            this.win = a
        }
    };

    function $M(a) {
        a.__uspapiPostMessageReady || aN(new bN(a))
    }

    function aN(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.win.__uspapi(e.command, e.version, (f, h) => {
                const k = {};
                k.__uspapiReturn = {
                    returnValue: f,
                    success: h,
                    callId: e.callId
                };
                f = c ? JSON.stringify(k) : k;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.win.addEventListener("message", a.g);
        a.win.__uspapiPostMessageReady = !0
    }
    var bN = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    };
    var cN = class extends M {};
    var dN = class extends M {
            g() {
                return D(this, 1) != null
            }
        },
        eN = xj(dN);
    dN.O = [2];

    function fN(a, b, c) {
        function d(p) {
            if (p.length < 10) return null;
            var q = k(p.slice(0, 4));
            q = l(q);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + q + p + "N"
        }

        function e(p) {
            if (p.length < 10) return null;
            var q = k(p.slice(0, 6));
            q = l(q);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + q + p + "N"
        }

        function f(p) {
            if (p.length < 12) return null;
            var q = k(p.slice(0, 6));
            q = l(q);
            p = k(p.slice(8, 12));
            p = m(p);
            return "1" + q + p + "N"
        }

        function h(p) {
            if (p.length < 18) return null;
            var q = k(p.slice(0, 8));
            q = l(q);
            p = k(p.slice(12, 18));
            p = m(p);
            return "1" + q + p + "N"
        }

        function k(p) {
            const q = [];
            let t = 0;
            for (let w = 0; w < p.length / 2; w++) q.push(QL(p.slice(t, t + 2))), t += 2;
            return q
        }

        function l(p) {
            return p.every(q => q === 1) ? "Y" : "N"
        }

        function m(p) {
            return p.some(q => q === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = PL(a[0]);
        const n = QL(a.slice(0, 6));
        a = a.slice(6);
        if (n !== 1) return null;
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
                return c ? h(a) : null;
            default:
                return null
        }
    };

    function gN(a) {
        var b = T(Es);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new hN(a, b), iN(a), jN(a))
    }

    function iN(a) {
        !a.i || a.win.__uspapi || a.win.frames.__uspapiLocator || (a.win.__uspapiManager = "fc", bG(a.win, "__uspapiLocator"), Ia("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && d({
                version: 1,
                uspString: a.i
            }, !0)
        }, a.win), $M(a.win))
    }

    function jN(a) {
        !a.tcString || a.win.__tcfapi || a.win.frames.__tcfapiLocator || (a.win.__tcfapiManager = "fc", bG(a.win, "__tcfapiLocator"), a.win.__tcfapiEventListeners = a.win.__tcfapiEventListeners || [], Ia("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.win.__tcfapiEventListeners, b) {
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
                        a.tcString ?
                            (e = PM(a.tcString), e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
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
        }, a.win), XM(a.win))
    }

    function kN(a, b) {
        if (!b ? .g() || I(b, 1).length === 0 || Bi(b, cN, 2).length === 0) return null;
        const c = I(b, 1);
        let d;
        try {
            var e = TL(c.split("~")[0]);
            d = OL(c)
        } catch (f) {
            return null
        }
        b = Bi(b, cN, 2).reduce((f, h) => Ki(lN(f), 1) > Ki(lN(h), 1) ? f : h);
        e = ii(e, 3, Yg).indexOf(Ji(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: fN(d[e], Ji(b, 1), a.j),
            ue: FM(lN(b))
        }
    }

    function mN(a) {
        a = a.find(b => b && Mi(b, 1) === 13);
        if (a ? .g()) try {
            return eN(I(a, 2))
        } catch (b) {}
        return null
    }

    function lN(a) {
        return ei(a, EM, 2) ? z(a, EM, 2) : DM()
    }
    var hN = class {
        constructor(a, b) {
            this.win = a;
            this.j = b;
            b = WM(this.win.document);
            try {
                var c = b ? UM(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = z(b, RM, 5) || null, b = Bi(b, QM, 7), b = mN(b ? ? []), c = {
                Rf: c,
                lg: b
            }) : c = {
                Rf: null,
                lg: null
            };
            b = c;
            c = kN(this, b.lg);
            b = b.Rf;
            if (b ? .l() && I(b, 2).length !== 0) {
                var d = ei(b, EM, 1) ? z(b, EM, 1) : DM();
                b = {
                    uspString: I(b, 2),
                    ue: FM(d)
                }
            } else b = null;
            this.i = b && c ? c.ue > b.ue ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.tcString = (c = VM(a.document)) && c.j() ? I(c, 1) : null;
            this.g = (a = VM(a.document)) && D(a, 2) != null ? I(a,
                2) : null
        }
    };

    function nN() {
        const a = ac();
        return a ? Wa("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), b => $b(a, b)) || $b(a, "OMI/") && !$b(a, "XiaoMi/") ? !0 : $b(a, "Presto") && $b(a, "Linux") && !$b(a, "X11") && !$b(a, "Android") && !$b(a, "Mobi") : !1
    };

    function oN(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var pN = (a, b) => {
        a = oN(a);
        b = oN(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var qN = (a, b, c, d = null) => {
            const e = h => {
                let k;
                try {
                    k = JSON.parse(h.data)
                } catch (l) {
                    return
                }!k || k.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(h.data) && !d(k, h) || c(k, h)
            };
            Jb(a, "message", e);
            let f = !1;
            return () => {
                let h = !1;
                f || (f = !0, h = Lb(a, "message", e));
                return h
            }
        },
        rN = (a, b, c, d = null) => {
            const e = qN(a, b, wb(c, () => e()), d);
            return e
        },
        sN = (a, b, c, d, e) => {
            if (!(e <= 0) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) e > 1 && sN(a[f], b, c, d, --e)
        };

    function tN(a, b, c, d) {
        return qN(a, "fullscreen", d.Da(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    async function uN(a) {
        return a.A.promise
    }
    async function vN(a) {
        return a.j.promise
    }
    async function wN(a) {
        return a.l.promise
    }

    function xN(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.B.Oj;
        b.version = a.B.version;
        tl(a.ta, "fullscreen_tag", b, !1, .25)
    }
    class yN extends P {
        constructor(a, b, c) {
            var d = V,
                e = jx,
                f = {
                    Oj: 2,
                    version: $E()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.te = c;
            this.Ia = d;
            this.ta = e;
            this.B = f;
            this.g = 1;
            this.qem = null;
            this.A = new uL;
            this.j = new uL;
            this.l = new uL
        }
        J() {
            const a = tN(this.pubWin, this.te, b => {
                if (b.eventType === "adError") this.l.resolve(), this.g = 4;
                else if (b.eventType === "adReady" && this.g === 1) this.qem = b.qem, b.slotType !== this.slotType && (xN(this, {
                    cur_st: this.g,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.g = 4), this.A.resolve(), this.g = 2;
                else if (b.eventType ===
                    "adClosed" && this.g === 2) this.j.resolve(b.result), this.g = 3;
                else if (b.eventType !== "adClosed" || this.g !== 3) xN(this, {
                    cur_st: this.g,
                    evt: b.eventType
                }), this.g = 4
            }, this.Ia);
            yp(this, a)
        }
    };
    var zN = Promise;
    class AN {
        constructor(a) {
            this.j = a
        }
        i(a, b, c) {
            this.j.then(d => {
                d.i(a, b, c)
            })
        }
        g(a, b) {
            return this.j.then(c => c.g(a, b))
        }
    };
    class BN {
        constructor(a) {
            this.data = a
        }
    };

    function CN(a, b) {
        DN(a, b);
        return new EN(a)
    }
    class EN {
        constructor(a) {
            this.j = a
        }
        i(a, b, c = []) {
            const d = new MessageChannel;
            DN(d.port1, b);
            this.j.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new zN(c => {
                this.i(a, c, b)
            })
        }
    }

    function DN(a, b) {
        b && (a.onmessage = c => {
            b(new BN(c.data, CN(c.ports[0])))
        })
    };
    var FN = class {
        constructor(a) {
            this.g = a
        }
    };
    const GN = a => {
        const b = Object.create(null);
        (typeof a === "string" ? [a] : a).forEach(c => {
            if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return c => b[c] === !0
    };
    var IN = ({
        destination: a,
        Na: b,
        origin: c,
        ne: d = "ZNWN1d",
        onMessage: e,
        Fg: f
    }) => HN({
        destination: a,
        Li: () => b.contentWindow,
        pj: c instanceof FN ? c : typeof c === "function" ? new FN(c) : new FN(GN(c)),
        ne: d,
        onMessage: e,
        Fg: f
    });
    const HN = ({
        destination: a,
        Li: b,
        pj: c,
        Co: d,
        ne: e,
        onMessage: f,
        Fg: h
    }) => new AN(new zN((k, l) => {
        const m = n => {
            n.source && n.source === b() && c.g(n.origin) && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(CN(n.ports[0], f)), h && h(n)))
        };
        a.addEventListener("message", m, !1)
    }));

    function JN(a, b, c, d, e, f, h = null) {
        if (e) {
            if (T(Vs)) var k = null;
            else try {
                k = e.getItem("google_ama_config")
            } catch (n) {
                k = null
            }
            try {
                var l = k ? as(k) : null
            } catch (n) {
                l = null
            }
        } else l = null;
        a: {
            if (d) try {
                var m = as(d);
                break a
            } catch (n) {
                LK(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            m = null
        }
        if (d = m) {
            if (e) {
                m = new nr;
                A(d, 3, m);
                l = d ? .g() ? .j() || 1;
                l = Date.now() + 864E5 * l;
                Number.isFinite(l) && Ui(m, 1, Math.round(l));
                m = Th(d);
                d.g() && (l = new mr, k = d ? .g() ? .g(), l = Ri(l, 23, k), k = d ? .g() ? .l(), l = Ri(l, 12, k), A(m, 15, l));
                l = Bi(m, Nr, 1);
                for (k = 0; k < l.length; k++) ci(l[k], 11);
                ci(m, 22);
                if (T(Vs)) SK(a,
                    e);
                else try {
                    e.setItem("google_ama_config", qj(m))
                } catch (n) {
                    LK(a, {
                        lserr: 1
                    })
                }
            }
            e = QK(a, Bi(d, wr, 7));
            m = {};
            T(Ws) || (m.yj = z(d, Hr, 8) || new Hr);
            e && (m.aa = e);
            e && PK(e, 3) && (m.tc = [1]);
            e = m;
            if (!T(As) && c.google_pgb_reactive === 7 && !e.aa) return !1;
            tF(a, 2) && (lk(5, [rj(d)]), c = MK(c), f = new BL(f), m = (m = e.aa) && D(m, 4) || "", c.google_package = m, VK(a, b, d, e, f, new dr(["google-auto-placed"], c), h));
            return !0
        }
        l && (LK(a, {
            cfg: 1,
            cl: 1
        }), e != null && SK(a, e));
        return !1
    };

    function KN(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = re(a.g.da() || window);
        if (c.bottom <= 0 || c.bottom > d.height || c.right <= 0 || c.left >= d.width) return null;
        var e = LN(a, b, c, a.g.g.elementsFromPoint(Wd(c.left + c.width / 2, c.left, c.right - 1), Wd(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = LN(a, b, c, a.g.g.elementsFromPoint(Wd(c.left + c.width / 2, c.left, c.right - 1), Wd(c.top + 2, c.top, c.bottom - 1)), 2, e.ob),
            h = LN(a, b, c, a.g.g.elementsFromPoint(Wd(c.left + 2, c.left, c.right - 1), Wd(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ob, ...f.ob]);
        const k = LN(a, b, c, a.g.g.elementsFromPoint(Wd(c.right - 1 - 2, c.left, c.right - 1), Wd(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ob, ...f.ob, ...h.ob]);
        var l = MN(a, b, c),
            m = p => Ya(a.j, p.ub) && Ya(a.l, p.Jg) && Ya(a.i, p.Kg);
        e = Ta([...e.entries, ...f.entries, ...h.entries, ...k.entries], m);
        m = Ta(l, m);
        l = [...e, ...m];
        f = c.left < -2 || c.right > d.width + 2;
        f = l.length > 0 || f;
        h = se(a.g.g);
        const n = new pk(c.left, c.top, c.width, c.height);
        e = [...Ua(e, p => new pk(p.oc.left, p.oc.top, p.oc.width, p.oc.height)), ...kb(Ua(m,
            p => rk(n, p.oc))), ...Ta(rk(n, new pk(0, 0, d.width, d.height)), p => p.top >= 0 && p.top + p.height <= d.height)];
        return {
            entries: l,
            wg: f,
            Xg: {
                scrollX: h.x,
                scrollY: h.y
            },
            target: b,
            Yb: c,
            mh: {
                width: d.width,
                height: d.height
            },
            qj: e.length < 20 ? NN(n, e) : ON(c, e)
        }
    }

    function PN(a, b) {
        const c = a.g.da(),
            d = a.g.g;
        return new Promise((e, f) => {
            const h = c.IntersectionObserver;
            if (h)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var k = new h(l => {
                                    const m = new kl,
                                        n = jl(m, () => KN(a, l));
                                    n && (m.i.length && (n.Bi = Math.round(Number(m.i[0].duration))), k.disconnect(), e(n))
                                }, QN);
                                k.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function LN(a, b, c, d, e, f) {
        if (c.width === 0 || c.height === 0) return {
            entries: [],
            ob: []
        };
        const h = [],
            k = [];
        for (let n = 0; n < d.length; n++) {
            const p = d[n];
            if (p === b) continue;
            if (Ya(f, p)) continue;
            k.push(p);
            const q = p.getBoundingClientRect();
            if (a.g.contains(p, b)) {
                h.push(RN(a, c, p, q, 1, e));
                continue
            }
            if (a.g.contains(b, p)) {
                h.push(RN(a, c, p, q, 2, e));
                continue
            }
            a: {
                var l = a;
                var m = b;
                const C = l.g.Gi(m, p);
                if (!C) {
                    l = null;
                    break a
                }
                const {
                    Ea: E,
                    Fb: F
                } = SN(l, m, C, p) || {},
                {
                    Ea: L,
                    Fb: G
                } = SN(l, p, C, m) || {};l = E && F && L && G ? F <= G ? {
                    Ea: E,
                    ub: TN[F]
                } : {
                    Ea: L,
                    ub: UN[G]
                } : E && F ? {
                    Ea: E,
                    ub: TN[F]
                } : L && G ? {
                    Ea: L,
                    ub: UN[G]
                } : null
            }
            const {
                Ea: t,
                ub: w
            } = l || {};
            t && w ? h.push(RN(a, c, p, q, w, e, t)) : h.push(RN(a, c, p, q, 9, e))
        }
        return {
            entries: h,
            ob: k
        }
    }

    function MN(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Ue(b, a.g.da());
                e && e.overflow !== "visible" && (e.overflowY !== "auto" && e.overflowY !== "scroll" && c.bottom > f.bottom + 2 ? d.push(RN(a, c, b, f, 5, 1)) : (e = e.overflowX === "auto" || e.overflowX === "scroll", !e && c.left < f.left - 2 ? d.push(RN(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(RN(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function NN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let h = 0; h < b.length && (!(d & 1 << h) || (f++, e = qk(e, b[h]), e)); h++);
            e && (c = f % 2 === 1 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function ON(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function RN(a, b, c, d, e, f, h) {
        const k = {
            element: c,
            oc: d,
            ub: e,
            Kg: f
        };
        if (Ya(a.j, e) && Ya(a.i, f)) {
            b = new mk(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = VN(a, c)) && ok(b, a)) c = 4;
            else {
                a = WN(c, d);
                e = Fk(c, "paddingLeft");
                f = Fk(c, "paddingRight");
                var l = Fk(c, "paddingTop"),
                    m = Fk(c, "paddingBottom");
                e = new mk(parseFloat(l), parseFloat(f), parseFloat(m), parseFloat(e));
                ok(b, new mk(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = WN(c, d), c = ok(b, c) ? 2 : 1)
            }
            k.Jg = c
        }
        h && (k.Ea = h);
        return k
    }

    function SN(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.da();
        for (f = 0; f < e.length; f++) {
            const k = e[f];
            var h = Ue(k, c);
            if (h) {
                if (h.position === "fixed") return {
                    Ea: k,
                    Fb: 1
                };
                if (h.position === "sticky" && a.g.contains(k.parentElement, d)) return {
                    Ea: k,
                    Fb: 2
                };
                if (h.position === "absolute") return {
                    Ea: k,
                    Fb: 3
                };
                if (h.cssFloat !== "none") {
                    h = k === e[0];
                    const l = XN(a, e.slice(0, f), k);
                    if (h || l) return {
                        Ea: k,
                        Fb: 4
                    }
                }
            }
        }
        return (a = XN(a, e, b)) ? {
            Ea: a,
            Fb: 5
        } : null
    }

    function XN(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const h = f.getBoundingClientRect();
            if (!h) continue;
            const k = Ue(f, a.g.da());
            if (k && d.bottom > h.bottom + 2 && k.overflowY === "visible") return f
        }
        return null
    }

    function VN(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return a.width === 0 || a.height === 0 ? null : new mk(a.top, a.right, a.bottom, a.left)
    }

    function WN(a, b) {
        var c = Fk(a, "borderLeftWidth");
        var d = Fk(a, "borderRightWidth"),
            e = Fk(a, "borderTopWidth");
        a = Fk(a, "borderBottomWidth");
        c = new mk(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
        return new mk(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class YN {
        constructor(a) {
            var b = ZN;
            this.g = oe(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const TN = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        UN = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Ta(Xe({
        Ql: 1,
        Rl: 2,
        Hn: 3,
        In: 4,
        Kn: 5,
        Ml: 6,
        Nl: 7,
        Pl: 8,
        Sm: 9,
        Jn: 10,
        Ol: 11,
        Gn: 12,
        Ll: 13
    }), a => !Ya([1, 2], a));
    Xe({
        Yk: 1,
        Vm: 2,
        ll: 3,
        Ln: 4
    });
    const ZN = Xe({
            Zk: 1,
            On: 2,
            Fm: 3,
            un: 4
        }),
        QN = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function $N(a) {
        a.g != null || a.C || (a.g = new MutationObserver(b => {
            for (const c of b)
                for (const d of c.addedNodes) za(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && Qp(b.j, d))
        }), a.g.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var aO = class extends P {
        constructor(a) {
            super();
            this.win = a;
            this.j = new Rp;
            this.g = null;
            yp(this, () => {
                this.g ? .disconnect();
                this.g = null
            })
        }
    };

    function bO(a, b) {
        b.addEventListener("click", () => {
            var c = a.g;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? Gq(Bm(4)) : d.startsWith("#") ? Gq(Bm(5)) : cO(d, c) : Iq("Empty href");
            if (c.g != null) {
                d = c.getValue();
                c = a.L;
                var e = new Dm;
                d = A(e, 1, d);
                c.call(a, d)
            } else a.i(c.i)
        })
    }
    var eO = class {
        constructor(a, b, c) {
            var d = dO();
            this.win = a;
            this.g = b;
            this.L = c;
            this.i = d
        }
        J() {
            const a = new aO(this.win);
            Array.from(a.win.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                bO(this, b)
            });
            $N(a);
            Op(a.j).listen(b => {
                bO(this, b)
            })
        }
    };

    function cO(a, b) {
        return fO(a, b).map(c => fO(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = Bm(2);
                e = oj(e, 2, `${c.host}${c.pathname}`);
                d = oj(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? Bm(3) : Bm(1);
            return d
        }))
    }

    function fO(a, b) {
        return Mq(Jq(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function gO(a) {
        if (a < 0 || !Number.isInteger(a)) return Iq(`Not a non-negative integer: ${a}`);
        const b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return Gq(b.reverse().join(""))
    };
    class hO {
        constructor() {
            this.wh = 5E3
        }
        bi() {
            return 5E3
        }
    }

    function iO(a, b) {
        return a.g ? Math.floor(b / 5E3) * 5E3 / a.g.wh : b
    }

    function jO(a, b) {
        b = b.map(c => iO(a, c));
        return kO(b, a.i === void 0 ? void 0 : iO(a, a.i)).map(c => {
            a: {
                var d = lO;
                const e = [];
                for (const f of c) {
                    c = d(f);
                    if (c.g == null) {
                        d = new Hq(null, c.i);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = Gq(e)
            }
            return d
        }).map(c => c.join(".")).map(c => mO(c, a.g ? .bi()))
    }
    var nO = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function lO(a) {
        const b = gO(a.value);
        if (b.g == null) return b;
        const c = b.getValue();
        return a.Qd === 1 ? Gq(`${c}`) : a.Qd === 2 ? Gq(`${c}${"~"}`) : Oq(gO(a.Qd - 2), d => {
            throw d;
        }).map(d => `${c}${"~"}${d}`)
    }

    function kO(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d] ? ? b;
            if (e === void 0) return Iq("Sparse but no default");
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                Qd: 1
            }) : c[c.length - 1].Qd++
        }
        return Gq(c)
    }

    function mO(a, b) {
        return a === "" ? Gq("") : oO(b).map(c => `${c}${a}`)
    }

    function oO(a) {
        return a === void 0 || a === 1 ? Gq("") : Nq(gO(a), "ComFactor: ").map(b => `${"~"}${b}${"."}`)
    };
    var pO = class extends P {
        constructor(a) {
            super();
            this.win = a;
            this.j = new Q(!1);
            this.g = () => {
                this.j.g(this.win.document.hasFocus())
            }
        }
        J() {
            this.win.addEventListener("focus", this.g);
            this.win.addEventListener("blur", this.g);
            yp(this, () => void this.win.removeEventListener("focus", this.g));
            yp(this, () => void this.win.removeEventListener("blur", this.g));
            this.j.g(this.win.document.hasFocus())
        }
    };

    function qO(a) {
        a.j.g(a.win.document.visibilityState === "visible")
    }
    var rO = class extends P {
        constructor(a) {
            super();
            this.win = a;
            this.j = new Q(!1);
            this.g = () => void qO(this)
        }
        J() {
            this.win.addEventListener("visibilitychange", this.g);
            yp(this, () => void this.win.removeEventListener("visibilitychange", this.g));
            qO(this)
        }
    };

    function sO(a) {
        return a.g !== null ? a.i + a.j() - a.g : a.i
    }
    var uO = class {
        constructor(a) {
            this.win = a;
            this.j = tO(this.win);
            this.i = 0;
            this.g = null
        }
        start() {
            this.g === null && (this.g = this.j())
        }
    };

    function tO(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function vO(a) {
        a = new wO(a);
        a.J();
        return a
    }

    function xO(a) {
        const b = bq(a.win, 1E3, () => void a.handleEvent());
        a.win.addEventListener("scroll", () => void b())
    }

    function yO(a) {
        const b = zO(a.win),
            c = () => {
                const d = zO(a.win),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.F = !0, a.win.removeEventListener("resize", c)
            };
        a.win.addEventListener("resize", c)
    }

    function AO(a) {
        a.l = !a.g.P;
        Jp(a.g, !1, () => {
            a.win.setTimeout(() => {
                a.l = !0
            }, 100)
        })
    }

    function BO(a) {
        Ip(a.g, !0, () => void a.j.start());
        Ip(a.g, !1, () => {
            var b = a.j;
            b.g !== null && (b.i += b.j() - b.g);
            b.g = null
        });
        a.G.start()
    }

    function CO(a) {
        var b = a.win.scrollY;
        var c = Wo(a.win);
        b = {
            Ud: Math.floor(b / 100),
            dd: Math.floor((b + c) / 100),
            gh: a.win.performance.now()
        };
        if (b.Ud < 0 || b.dd < 0 || b.Ud > 1E3 || b.dd > 1E3) a.B = !0, a.i = null;
        else {
            if (a.i) {
                c = a.i;
                var d = new lD(c.Ud, c.dd),
                    e = new lD(b.Ud, b.dd);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new lD(f, d) : null)
                    for (c = b.gh - c.gh, d = f.start; d <= f.end; d++) a.C[d] = (a.C[d] ? ? 0) + c
            }
            a.i = a.A.P ? b : null
        }
    }
    var wO = class {
        constructor(a) {
            this.win = a;
            this.C = [];
            a = this.win;
            var b = new pO(a);
            b.J();
            b = Fp(b.j);
            a = new rO(a);
            a.J();
            this.A = this.g = Ep(b, Fp(a.j));
            this.j = new uO(this.win);
            this.G = new uO(this.win);
            this.H = new nO((new nO(new hO)).g, 0);
            this.F = this.l = this.B = !1;
            this.i = null
        }
        J() {
            xO(this);
            yO(this);
            AO(this);
            BO(this);
            this.A.listen(() => void CO(this));
            u.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.A.P && CO(this)
        }
    };

    function zO(a) {
        return new ce(Vo(a), Wo(a))
    };

    function DO(a, {
        Va: b
    }) {
        a = new EO(a, b);
        if (!a.Va && T(Ct)) {
            b = a.win;
            var c = FO(GO(a));
            (new eO(b, b.document.baseURI, c)).J()
        }
        HO(a)
    }

    function HO(a) {
        if (T(Dt)) {
            var b = vO(a.win);
            zo(new CF(a.win), IO(() => {
                var c = GO(a),
                    d = new Gm,
                    e = jO(b.H, b.C);
                if (e.g == null) throw Nq(e, "PVDC: ").i;
                var f = new Fm;
                f = Ti(f, 2, 5E3);
                f = Ti(f, 1, 100);
                e = e.getValue();
                e = oj(f, 3, e);
                f = zO(b.win);
                var h = new Em;
                h = Ti(h, 1, f.width);
                f = Ti(h, 2, f.height);
                e = A(e, 4, f);
                f = new Em;
                f = Ti(f, 1, $o(b.win).scrollWidth);
                f = Ti(f, 2, $o(b.win).scrollHeight);
                e = A(e, 5, f);
                e = J(e, 6, b.l);
                f = Math.round(sO(b.G) / 1E3);
                e = Ti(e, 8, f);
                f = Math.round(sO(b.j) / 1E3);
                e = Ti(e, 9, f);
                b.B && ti(e, 7, Ug, 1);
                b.F && ti(e, 7, Ug, 2);
                d = B(d, 2, Hm, e);
                c(d)
            }))
        }
    }

    function GO(a) {
        if (!a.L) {
            const b = N(JF);
            a.L = c => {
                OF(b, c)
            }
        }
        return a.L
    }
    var EO = class {
        constructor(a, b) {
            this.win = a;
            this.Va = b;
            this.L = null
        }
    };

    function FO(a) {
        return b => {
            var c = new Gm;
            b = B(c, 1, Hm, b);
            return void a(b)
        }
    }

    function dO() {
        return a => {
            V.ba(1243, a, void 0, JO("LCC"))
        }
    }

    function IO(a) {
        return () => void V.vb(1243, a, JO("PVC"))
    }

    function JO(a) {
        return b => {
            b.errSrc = a
        }
    };
    var LO = a => {
        const b = a.D;
        b.google_ad_output == null && (b.google_ad_output = "html");
        if (b.google_ad_client != null) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), c.substring(0, 3) != "ca-" && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        b.google_ad_slot != null && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!Uj.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = KO(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = KO(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = KO(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = KO(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = KO(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = KO(a, b.google_color_line, c))
    };

    function KO(a, b, c) {
        a.i |= 2;
        return b[c % b.length]
    };
    const MO = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    var NO = (a, b = !1) => {
        try {
            return b ? (new ce(a.innerWidth, a.innerHeight)).round() : re(a || window).round()
        } catch (c) {
            return new ce(-12245933, -12245933)
        }
    };

    function OO(a = u) {
        a = a.devicePixelRatio;
        return typeof a === "number" ? +a.toFixed(3) : null
    }

    function PO(a, b = u) {
        a = a.scrollingElement || (a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return new Zd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function QO(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function RO(a, b) {
        var c = V,
            d;
        var e;
        d = (e = (e = tk()) && (d = e.initialLayoutRect) && typeof d.top === "number" && typeof d.left === "number" && typeof d.width === "number" && typeof d.height === "number" ? new pk(d.left, d.top, d.width, d.height) : null) ? new Zd(e.left, e.top) : (d = wk()) && za(d.rootBounds) ? new Zd(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new Zd(0, 0),
                h = qe(b);
            var k = h ? te(h) : window;
            if (oc(k, "parent")) {
                do {
                    if (k == a) var l = Ik(b);
                    else {
                        var m = Hk(b);
                        l = new Zd(m.left,
                            m.top)
                    }
                    h = l;
                    f.x += h.x;
                    f.y += h.y
                } while (k && k != a && k != k.parent && (b = k.frameElement) && (k = k.parent))
            }
            return f
        } catch (n) {
            return c.ba(888, n), new Zd(-12245933, -12245933)
        }
    };

    function SO(a, b) {
        return dk(a.win) ? !!b.g() : !1
    }

    function TO(a, b, c) {
        c ? (a = a.win, b = c.g() ? fk(b, a) : null) : b = null;
        return b
    }

    function UO(a, b, c, d) {
        if (d) {
            var e = Ki(c, 2) - Date.now() / 1E3;
            e = {
                Cd: Math.max(e, 0),
                path: I(c, 3),
                domain: I(c, 4),
                Rd: !1
            };
            c = c.getValue();
            a = a.win;
            d.g() && gk(b, c, e, a)
        }
    }

    function VO(a, b, c) {
        var d;
        (d = !c) || (d = a.win, d = !(c.g() && fk(b, d)));
        if (!d)
            for (const f of WO(a.win.location.hostname)) {
                d = b;
                var e = a.win;
                c.g() && e.origin !== "null" && Zj(new Yj(e.document), d, "/", f)
            }
    }
    var XO = class {
        constructor(a) {
            this.win = a
        }
    };

    function WO(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function YO(a, b, c) {
        var d = TO(a, "__gpi_opt_out", b);
        d && (d = nj(Ui(Lj(d), 2, 2147483647), 3, "/"), c = nj(d, 4, c), UO(a, "__gpi_opt_out", c, b))
    }

    function ZO(a, b, c, d) {
        const e = qN(a, "gpi-uoo", (f, h) => {
            if (h.source === c) {
                h = nj(Ui(Lj(f.userOptOut ? "1" : "0"), 2, 2147483647), 3, "/");
                h = nj(h, 4, a.location.hostname);
                var k = new XO(a);
                UO(k, "__gpi_opt_out", h, b);
                if (f.userOptOut || f.clearAdsData) VO(k, "__gads", b), VO(k, "__gpi", b)
            }
        });
        d.push(e)
    };
    const $O = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        aP = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        bP = {
            zd: a => a.listener,
            Cc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Qb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        cP = {
            zd: a => a.listener,
            Cc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Qb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function dP(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            bf: b.__gppReturn.callId
        }
    }

    function eP(a, b) {
        if (!a) return !1;
        const c = TL(a.split("~")[0]),
            d = OL(a),
            e = ii(c, 3, Yg);
        for (let Vi = 0; Vi < e.length; ++Vi) {
            const rx = e[Vi];
            if (!b.includes(rx)) continue;
            const nb = d[Vi];
            switch (rx) {
                case 7:
                    if (nb.length === 0) throw Error("Cannot decode empty USNat section string.");
                    const vg = nb.split(".");
                    if (vg.length > 2) throw Error(`Expected at most 2 segments but got ${vg.length} when decoding ${nb}.`);
                    var f = void 0,
                        h = void 0,
                        k = void 0,
                        l = void 0,
                        m = void 0,
                        n = void 0,
                        p = void 0,
                        q = void 0,
                        t = void 0,
                        w = void 0,
                        C = void 0,
                        E = void 0,
                        F = void 0,
                        L = void 0,
                        G = void 0,
                        Z = void 0,
                        O = void 0,
                        Ca = void 0,
                        ab = void 0,
                        Kb = void 0,
                        la = void 0,
                        yb = void 0,
                        Cc = void 0,
                        Dc = void 0,
                        $d = void 0,
                        fa = void 0,
                        Vc = void 0,
                        Wi = void 0,
                        Xi = void 0,
                        Yi = void 0,
                        Zi = vg[0];
                    if (Zi.length === 0) throw Error("Cannot decode empty core segment string.");
                    let $i = SL(Zi, yM);
                    const ln = QL($i.slice(0, 6));
                    $i = $i.slice(6);
                    if (ln !== 1) throw Error(`Unable to decode unsupported USNat Section specification version ${ln} - only version 1 is supported.`);
                    let mn = 0;
                    const na = [];
                    for (let ha = 0; ha < xM.length; ha++) {
                        const X = xM[ha];
                        na.push(QL($i.slice(mn, mn + X)));
                        mn += X
                    }
                    var nn = new tM;
                    Yi = Ti(nn, 1, ln);
                    var on = na.shift();
                    Xi = K(Yi, 2, on);
                    var pn = na.shift();
                    Wi = K(Xi, 3, pn);
                    var qn = na.shift();
                    Vc = K(Wi, 4, qn);
                    var rn = na.shift();
                    fa = K(Vc, 5, rn);
                    var sn = na.shift();
                    $d = K(fa, 6, sn);
                    var tn = na.shift();
                    Dc = K($d, 7, tn);
                    var un = na.shift();
                    Cc = K(Dc, 8, un);
                    var vn = na.shift();
                    yb = K(Cc, 9, vn);
                    var wn = na.shift();
                    la = K(yb, 10, wn);
                    var xn = new sM,
                        yn = na.shift();
                    Kb = K(xn, 1, yn);
                    var wg = na.shift();
                    ab = K(Kb, 2, wg);
                    var zn = na.shift();
                    Ca = K(ab, 3, zn);
                    var aj = na.shift();
                    O = K(Ca, 4, aj);
                    var An = na.shift();
                    Z = K(O, 5, An);
                    var xg = na.shift();
                    G = K(Z, 6, xg);
                    var Bn = na.shift();
                    L = K(G, 7, Bn);
                    var Cn = na.shift();
                    F = K(L, 8, Cn);
                    var Qe = na.shift();
                    E = K(F, 9, Qe);
                    var yg = na.shift();
                    C = K(E, 10, yg);
                    var Dn = na.shift();
                    w = K(C, 11, Dn);
                    var Bb = na.shift();
                    t = K(w, 12, Bb);
                    q = A(la, 11, t);
                    var En = new rM,
                        Fn = na.shift();
                    p = K(En, 1, Fn);
                    var bj = na.shift();
                    n = K(p, 2, bj);
                    m = A(q, 12, n);
                    var cj = na.shift();
                    l = K(m, 13, cj);
                    var dj = na.shift();
                    k = K(l, 14, dj);
                    var ej = na.shift();
                    h = K(k, 15, ej);
                    var fj = na.shift();
                    const sx = f = K(h, 16, fj);
                    if (vg.length === 1) var Qb = vM(sx);
                    else {
                        var Wc = vM(sx),
                            Cb = void 0,
                            ob = void 0,
                            gj = void 0,
                            ae = vg[1];
                        if (ae.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ha = SL(ae, 3),
                            X = QL(ha.slice(0, 2));
                        if (X < 0 || X > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${X}.`);
                        gj = X + 1;
                        const be = QL(ha.charAt(2));
                        var zg = new uM;
                        ob = K(zg, 2, gj);
                        Cb = J(ob, 1, !!be);
                        Qb = A(Wc, 2, Cb)
                    }
                    const Gn = z(Qb, tM, 1);
                    if (Mi(Gn, 8) === 1 || Mi(Gn, 9) === 1 || Mi(Gn, 10) === 1) return !0;
                    break;
                case 8:
                    if (nb.length === 0) throw Error("Cannot decode empty USCA section string.");
                    const Ag = nb.split(".");
                    if (Ag.length > 2) throw Error(`Expected at most 1 sub-section but got ${Ag.length-1} when decoding ${nb}.`);
                    var jc = void 0,
                        pb = void 0,
                        kc = void 0,
                        Ec = void 0,
                        $a = void 0,
                        Db = void 0,
                        Bg = void 0,
                        hj = void 0,
                        Cg = void 0,
                        Fc = void 0,
                        Dg = void 0,
                        Re = void 0,
                        Se = void 0,
                        td = void 0,
                        Eg = void 0,
                        Te = void 0,
                        Fg = void 0,
                        tx = void 0,
                        ux = void 0,
                        vx = void 0,
                        wx = void 0,
                        xx = void 0,
                        yx = void 0,
                        zx = Ag[0];
                    if (zx.length === 0) throw Error("Cannot decode empty core segment string.");
                    let ij = SL(zx, bM);
                    const Hn = QL(ij.slice(0, 6));
                    ij = ij.slice(6);
                    if (Hn !== 1) throw Error(`Unable to decode unsupported USCA Section specification version ${Hn} - only version 1 is supported.`);
                    let In = 0;
                    const va = [];
                    for (let ha = 0; ha < aM.length; ha++) {
                        const X = aM[ha];
                        va.push(QL(ij.slice(In, In + X)));
                        In += X
                    }
                    var zS = new XL;
                    yx = Ti(zS, 1, Hn);
                    var AS = va.shift();
                    xx = K(yx, 2, AS);
                    var BS = va.shift();
                    wx = K(xx, 3, BS);
                    var CS = va.shift();
                    vx = K(wx, 4, CS);
                    var DS = va.shift();
                    ux = K(vx, 5, DS);
                    var ES = va.shift();
                    tx = K(ux, 6, ES);
                    var FS = new WL,
                        GS = va.shift();
                    Fg = K(FS, 1, GS);
                    var HS = va.shift();
                    Te = K(Fg, 2, HS);
                    var IS = va.shift();
                    Eg = K(Te, 3, IS);
                    var JS = va.shift();
                    td = K(Eg, 4, JS);
                    var KS = va.shift();
                    Se = K(td, 5, KS);
                    var LS = va.shift();
                    Re = K(Se, 6, LS);
                    var MS =
                        va.shift();
                    Dg = K(Re, 7, MS);
                    var NS = va.shift();
                    Fc = K(Dg, 8, NS);
                    var OS = va.shift();
                    Cg = K(Fc, 9, OS);
                    hj = A(tx, 7, Cg);
                    var PS = new VL,
                        QS = va.shift();
                    Bg = K(PS, 1, QS);
                    var RS = va.shift();
                    Db = K(Bg, 2, RS);
                    $a = A(hj, 8, Db);
                    var SS = va.shift();
                    Ec = K($a, 9, SS);
                    var TS = va.shift();
                    kc = K(Ec, 10, TS);
                    var US = va.shift();
                    pb = K(kc, 11, US);
                    var VS = va.shift();
                    const Ax = jc = K(pb, 12, VS);
                    if (Ag.length === 1) var Bx = ZL(Ax);
                    else {
                        var WS = ZL(Ax),
                            Cx = void 0,
                            Dx = void 0,
                            Ex = void 0,
                            Fx = Ag[1];
                        if (Fx.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ha =
                            SL(Fx, 3),
                            X = QL(ha.slice(0, 2));
                        if (X < 0 || X > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${X}.`);
                        Ex = X + 1;
                        const be = QL(ha.charAt(2));
                        var XS = new YL;
                        Dx = K(XS, 2, Ex);
                        Cx = J(Dx, 1, !!be);
                        Bx = A(WS, 2, Cx)
                    }
                    const Gx = z(Bx, XL, 1);
                    if (Mi(Gx, 5) === 1 || Mi(Gx, 6) === 1) return !0;
                    break;
                case 9:
                    if (nb.length === 0) throw Error("Cannot decode empty USVA section string.");
                    let jj = SL(nb, CM);
                    const Jn = QL(jj.slice(0, 6));
                    jj = jj.slice(6);
                    if (Jn !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${Jn} - only version 1 is supported.`);
                    let Kn = 0;
                    const Ka = [];
                    for (let ha = 0; ha < BM.length; ha++) {
                        const X = BM[ha];
                        Ka.push(QL(jj.slice(Kn, Kn + X)));
                        Kn += X
                    }
                    var YS = Jn,
                        ZS = new AM,
                        $S = Ti(ZS, 1, YS),
                        aT = Ka.shift(),
                        bT = K($S, 2, aT),
                        cT = Ka.shift(),
                        dT = K(bT, 3, cT),
                        eT = Ka.shift(),
                        fT = K(dT, 4, eT),
                        gT = Ka.shift(),
                        hT = K(fT, 5, gT),
                        iT = Ka.shift();
                    var jT = K(hT, 6, iT);
                    var kT = new zM,
                        lT = Ka.shift(),
                        mT = K(kT, 1, lT),
                        nT = Ka.shift(),
                        oT = K(mT, 2, nT),
                        pT = Ka.shift(),
                        qT = K(oT, 3, pT),
                        rT = Ka.shift(),
                        sT = K(qT, 4, rT),
                        tT = Ka.shift(),
                        uT = K(sT, 5, tT),
                        vT = Ka.shift(),
                        wT = K(uT, 6, vT),
                        xT = Ka.shift(),
                        yT = K(wT, 7, xT),
                        zT = Ka.shift();
                    var AT = K(yT, 8, zT);
                    var BT = A(jT, 7, AT),
                        CT = Ka.shift(),
                        DT = K(BT, 8, CT),
                        ET = Ka.shift(),
                        FT = K(DT, 9, ET),
                        GT = Ka.shift(),
                        HT = K(FT, 10, GT),
                        IT = Ka.shift(),
                        Hx = K(HT, 11, IT);
                    if (Mi(Hx, 5) === 1 || Mi(Hx, 6) === 1) return !0;
                    break;
                case 10:
                    if (nb.length === 0) throw Error("Cannot decode empty USCO section string.");
                    const Gg = nb.split(".");
                    if (Gg.length > 2) throw Error(`Expected at most 2 segments but got ${Gg.length} when decoding ${nb}.`);
                    var JT = void 0,
                        Ix = void 0,
                        Jx = void 0,
                        Kx = void 0,
                        Lx = void 0,
                        Mx = void 0,
                        Nx = void 0,
                        Ox = void 0,
                        Px = void 0,
                        Qx = void 0,
                        Rx = void 0,
                        Sx = void 0,
                        Tx = void 0,
                        Ux = void 0,
                        Vx = void 0,
                        Wx = void 0,
                        Xx = void 0,
                        Yx = void 0,
                        Zx = Gg[0];
                    if (Zx.length === 0) throw Error("Cannot decode empty core segment string.");
                    let kj = SL(Zx, iM);
                    const Ln = QL(kj.slice(0, 6));
                    kj = kj.slice(6);
                    if (Ln !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${Ln} - only version 1 is supported.`);
                    let Mn = 0;
                    const Xa = [];
                    for (let ha = 0; ha < hM.length; ha++) {
                        const X = hM[ha];
                        Xa.push(QL(kj.slice(Mn, Mn + X)));
                        Mn += X
                    }
                    var KT = new dM;
                    Yx = Ti(KT, 1, Ln);
                    var LT = Xa.shift();
                    Xx =
                        K(Yx, 2, LT);
                    var MT = Xa.shift();
                    Wx = K(Xx, 3, MT);
                    var NT = Xa.shift();
                    Vx = K(Wx, 4, NT);
                    var OT = Xa.shift();
                    Ux = K(Vx, 5, OT);
                    var PT = Xa.shift();
                    Tx = K(Ux, 6, PT);
                    var QT = new cM,
                        RT = Xa.shift();
                    Sx = K(QT, 1, RT);
                    var ST = Xa.shift();
                    Rx = K(Sx, 2, ST);
                    var TT = Xa.shift();
                    Qx = K(Rx, 3, TT);
                    var UT = Xa.shift();
                    Px = K(Qx, 4, UT);
                    var VT = Xa.shift();
                    Ox = K(Px, 5, VT);
                    var WT = Xa.shift();
                    Nx = K(Ox, 6, WT);
                    var XT = Xa.shift();
                    Mx = K(Nx, 7, XT);
                    Lx = A(Tx, 7, Mx);
                    var YT = Xa.shift();
                    Kx = K(Lx, 8, YT);
                    var ZT = Xa.shift();
                    Jx = K(Kx, 9, ZT);
                    var $T = Xa.shift();
                    Ix = K(Jx, 10, $T);
                    var aU = Xa.shift();
                    const $x = JT = K(Ix, 11, aU);
                    if (Gg.length === 1) var ay = fM($x);
                    else {
                        var bU = fM($x),
                            by = void 0,
                            cy = void 0,
                            dy = void 0,
                            ey = Gg[1];
                        if (ey.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ha = SL(ey, 3),
                            X = QL(ha.slice(0, 2));
                        if (X < 0 || X > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${X}.`);
                        dy = X + 1;
                        const be = QL(ha.charAt(2));
                        var cU = new eM;
                        cy = K(cU, 2, dy);
                        by = J(cy, 1, !!be);
                        ay = A(bU, 2, by)
                    }
                    const fy = z(ay, dM, 1);
                    if (Mi(fy, 5) === 1 || Mi(fy, 6) === 1) return !0;
                    break;
                case 12:
                    if (nb.length === 0) throw Error("Cannot decode empty usct section string.");
                    const Hg = nb.split(".");
                    if (Hg.length > 2) throw Error(`Expected at most 2 segments but got ${Hg.length} when decoding ${nb}.`);
                    var dU = void 0,
                        gy = void 0,
                        hy = void 0,
                        iy = void 0,
                        jy = void 0,
                        ky = void 0,
                        ly = void 0,
                        my = void 0,
                        ny = void 0,
                        oy = void 0,
                        py = void 0,
                        qy = void 0,
                        ry = void 0,
                        sy = void 0,
                        ty = void 0,
                        uy = void 0,
                        vy = void 0,
                        wy = void 0,
                        xy = void 0,
                        yy = void 0,
                        zy = void 0,
                        Ay = void 0,
                        By = Hg[0];
                    if (By.length === 0) throw Error("Cannot decode empty core segment string.");
                    let lj = SL(By, qM);
                    const Nn = QL(lj.slice(0, 6));
                    lj = lj.slice(6);
                    if (Nn !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${Nn} - only version 1 is supported.`);
                    let On = 0;
                    const ya = [];
                    for (let ha = 0; ha < pM.length; ha++) {
                        const X = pM[ha];
                        ya.push(QL(lj.slice(On, On + X)));
                        On += X
                    }
                    var eU = new lM;
                    Ay = Ti(eU, 1, Nn);
                    var fU = ya.shift();
                    zy = K(Ay, 2, fU);
                    var gU = ya.shift();
                    yy = K(zy, 3, gU);
                    var hU = ya.shift();
                    xy = K(yy, 4, hU);
                    var iU = ya.shift();
                    wy = K(xy, 5, iU);
                    var jU = ya.shift();
                    vy = K(wy, 6, jU);
                    var kU = new kM,
                        lU = ya.shift();
                    uy = K(kU, 1, lU);
                    var mU = ya.shift();
                    ty = K(uy, 2, mU);
                    var nU = ya.shift();
                    sy = K(ty, 3, nU);
                    var oU = ya.shift();
                    ry = K(sy, 4, oU);
                    var pU = ya.shift();
                    qy = K(ry, 5, pU);
                    var qU = ya.shift();
                    py = K(qy, 6, qU);
                    var rU =
                        ya.shift();
                    oy = K(py, 7, rU);
                    var sU = ya.shift();
                    ny = K(oy, 8, sU);
                    my = A(vy, 7, ny);
                    var tU = new jM,
                        uU = ya.shift();
                    ly = K(tU, 1, uU);
                    var vU = ya.shift();
                    ky = K(ly, 2, vU);
                    var wU = ya.shift();
                    jy = K(ky, 3, wU);
                    iy = A(my, 8, jy);
                    var xU = ya.shift();
                    hy = K(iy, 9, xU);
                    var yU = ya.shift();
                    gy = K(hy, 10, yU);
                    var zU = ya.shift();
                    const Cy = dU = K(gy, 11, zU);
                    if (Hg.length === 1) var Dy = nM(Cy);
                    else {
                        var AU = nM(Cy),
                            Ey = void 0,
                            Fy = void 0,
                            Gy = void 0,
                            Hy = Hg[1];
                        if (Hy.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ha = SL(Hy, 3),
                            X = QL(ha.slice(0, 2));
                        if (X <
                            0 || X > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${X}.`);
                        Gy = X + 1;
                        const be = QL(ha.charAt(2));
                        var BU = new mM;
                        Fy = K(BU, 2, Gy);
                        Ey = J(Fy, 1, !!be);
                        Dy = A(AU, 2, Ey)
                    }
                    const Iy = z(Dy, lM, 1);
                    if (Mi(Iy, 5) === 1 || Mi(Iy, 6) === 1) return !0
            }
        }
        return !1
    }
    var iP = class extends P {
        constructor(a) {
            ({
                timeoutMs: c,
                cmpInteractionEventReporter: b
            } = {});
            var b, c;
            super();
            this.caller = new gG(a, "__gppLocator", d => typeof d.__gpp === "function", dP);
            this.caller.B.set("addEventListener", $O);
            this.caller.A.set("addEventListener", bP);
            this.caller.B.set("removeEventListener", aP);
            this.caller.A.set("removeEventListener", cP);
            this.timeoutMs = c ? ? 500;
            this.cmpInteractionEventReporter = b
        }
        i() {
            this.caller.dispose();
            super.i()
        }
        addEventListener(a) {
            const b = Ab(() => {
                    a(fP, !0)
                }),
                c = this.timeoutMs ===
                -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            fG(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (d.pingData ? .gppVersion === void 0 || d.pingData.gppVersion === "1" || d.pingData.gppVersion === "1.0") {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) ? f = d : (this.removeEventListener(d.listenerId), f = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                        a(f, e);
                        this.cmpInteractionEventReporter ? .g()
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(gP, !0);
                            return
                        }
                        a(hP, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            fG(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const hP = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        fP = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        gP = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function jP(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function kP(a, b) {
        if (b.internalErrorState) nj(a, 11, b.gppString);
        else if (jP(b.applicableSections)) {
            var c = qi(a, 10, b.applicableSections, ah);
            Ri(c, 12, !1)
        } else {
            c = !1;
            try {
                c = eP(b.gppString, b.applicableSections)
            } catch (d) {
                V.ba(1182, d, void 0, void 0)
            }
            a = qi(a, 10, b.applicableSections, ah);
            b = nj(a, 11, b.gppString);
            Ri(b, 12, c)
        }
    }

    function lP(a) {
        const b = new iP(a.pubWin);
        if (!dG(b.caller)) return Promise.resolve(null);
        const c = dF(),
            d = iF(c, 35);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const h = iF(c, 36, []);
            h.push(f);
            jF(c, 36, h)
        });
        d || d === null || (jF(c, 35, null), b.addEventListener(f => {
            if (f.pingData.signalStatus === "ready" || jP(f.pingData.applicableSections)) {
                f = f.pingData;
                jF(c, 35, f);
                kP(a.g, f);
                for (const h of iF(c, 36, [])) h.resolve(f);
                jF(c, 36, [])
            }
        }));
        return e
    };

    function mP(a) {
        return a.length ? a.join("~") : void 0
    };

    function nP(a, b) {
        return SC({
            K: a,
            gj: 3E3,
            nj: a.innerWidth > To ? 650 : 0,
            ta: jx,
            Vh: b
        })
    };

    function oP(a) {
        let b = 0;
        try {
            b |= Uo(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function pP(a) {
        let b = 0;
        try {
            b |= Uo(a), b |= Xo(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function qP(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function rP(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function sP(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function tP(a, b) {
        if (qP(b) == 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                Lb(b, "prerenderingchange", d);
                a()
            };
            Jb(b, "prerenderingchange", d)
        }
    };
    var uP = a => {
        let b = 0;
        try {
            b |= Uo(a);
            var c;
            if (!(c = !a.navigator)) {
                var d = a.navigator;
                c = "brave" in d && "isBrave" in d.brave || !1
            }
            b |= c || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            b |= Xo(a, 2500, !0)
        } catch (e) {
            b |= 32
        }
        return b
    };
    const vP = "body div footer header html main section".split(" ");

    function wP(a, b, c = null, d = !1, e = !1) {
        let f = Uo(a);
        TC(a.navigator ? .userAgent) && (f |= 1048576);
        const h = a.innerWidth;
        h < 1200 && (f |= 65536);
        const k = a.innerHeight;
        k < 650 && (f |= 2097152);
        c && f === 0 && (c = c === 3 ? "left" : "right", (b = xP({
            K: a,
            aj: b,
            Lj: 1,
            position: c,
            U: h,
            W: k,
            Gb: new Set,
            minWidth: 120,
            minHeight: 500,
            Ke: d,
            Ze: e
        })) ? AA(a).sideRailPlasParam.set(c, `${b.width}x${b.height}_${String(c).charAt(0)}`) : f |= 16);
        return f
    }

    function yP(a) {
        a = AA(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function zP(a, b) {
        return Ce(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function AP(a, b) {
        return Ce(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function BP(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function CP(a, b) {
        const {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function DP(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function EP(a) {
        return `${a.position}-${DP(a.U)}x${DP(a.W)}-${DP(a.scrollY+a.Tb)}Y`
    }

    function FP(a) {
        return `f-${EP({position:a.position,Tb:a.Tb,scrollY:0,U:a.U,W:a.W})}`
    }

    function GP(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function HP(a, b, c) {
        const d = AA(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    h = Math.min(e.bottom + 10, c.W),
                    k = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.U);
                for (var l = c.U * .3; f <= h; f += 10) {
                    if (e > 0 && k < l) {
                        var m = FP({
                            position: "left",
                            Tb: f,
                            U: c.U,
                            W: c.W
                        });
                        b.set(m, GP(b.get(m), k))
                    }
                    if (k < c.U && e > c.U - l) {
                        m = FP({
                            position: "right",
                            Tb: f,
                            U: c.U,
                            W: c.W
                        });
                        const n = c.U - e;
                        b.set(m, GP(b.get(m), n))
                    }
                }
                d.add(a)
            }
        }
    }

    function IP(a, b) {
        const c = b.K,
            d = b.Ke;
        var e = `f-${DP(b.U)}x${DP(b.W)}`;
        a.has(e) || (a.set(e, 0), e = BP(c), d ? (JP(a, b, e.filter(f => CP(c, f))), KP(c, e.filter(f => !CP(c, f)))) : JP(a, b, e))
    }

    function JP(a, b, c) {
        var d = b.Gb;
        const e = b.K;
        AA(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c) zP(f, d) || HP(f, a, b)
    }

    function LP(a) {
        if (a.U < 1200 || a.W < 650) return null;
        var b = AA(a.K).sideRailAvailableSpace;
        a.aj || IP(b, {
            K: a.K,
            U: a.U,
            W: a.W,
            Gb: a.Gb,
            Ke: a.Ke
        });
        const c = [];
        var d = a.W * .9,
            e = dp(a.K),
            f = (a.W - d) / 2,
            h = f,
            k = d / 7;
        for (var l = 0; l < 8; l++) {
            var m = c,
                n = m.push;
            a: {
                var p = h;
                var q = a.position,
                    t = b,
                    w = {
                        K: a.K,
                        U: a.U,
                        W: a.W,
                        Gb: a.Gb,
                        Ze: a.Ze
                    };
                const L = FP({
                        position: q,
                        Tb: p,
                        U: w.U,
                        W: w.W
                    }),
                    G = EP({
                        position: q,
                        Tb: p,
                        scrollY: e,
                        U: w.U,
                        W: w.W
                    });
                if (t.has(G)) {
                    p = GP(t.get(L), t.get(G));
                    break a
                }
                const Z = q === "left" ? 20 : w.U - 20;
                let O = Z;q = w.U * .3 / 5 * (q === "left" ? 1 : -1);
                for (let Ca =
                        0; Ca < 6; Ca++) {
                    var C = MC(w.K.document, {
                            x: Math.round(O),
                            y: Math.round(p)
                        }),
                        E = zP(C, w.Gb),
                        F = AP(C, w.K);
                    if (!E && F !== null) {
                        HP(F, t, w);
                        t.delete(G);
                        break
                    }
                    E || (E = w, C.getAttribute("google-side-rail-overlap") === "true" ? E = !0 : C.getAttribute("google-side-rail-overlap") === "false" || E.Ze && !vP.includes(C.tagName.toLowerCase()) ? E = !1 : (F = C.offsetHeight >= E.W * .25, E = C.offsetWidth >= E.U * .9 && F));
                    if (E) t.set(G, Math.round(Math.abs(O - Z) + 20));
                    else if (O !== Z) O -= q, q /= 2;
                    else {
                        t.set(G, 0);
                        break
                    }
                    O += q
                }
                p = GP(t.get(L), t.get(G))
            }
            n.call(m, p);
            h += k
        }
        b =
            a.Lj;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        h = a.minWidth;
        a = a.minHeight;
        n = [];
        k = Array(c.length).fill(0);
        for (m = 0; m < c.length; m++) {
            for (; n.length !== 0 && c[n[n.length - 1]] >= c[m];) n.pop();
            k[m] = n.length === 0 ? 0 : n[n.length - 1] + 1;
            n.push(m)
        }
        n = [];
        l = c.length - 1;
        m = Array(c.length).fill(0);
        for (p = l; p >= 0; p--) {
            for (; n.length !== 0 && c[n[n.length - 1]] >= c[p];) n.pop();
            m[p] = n.length === 0 ? l : n[n.length - 1] - 1;
            n.push(p)
        }
        n = null;
        for (l = 0; l < c.length; l++)
            if (p = {
                    position: e,
                    width: Math.round(c[l]),
                    height: Math.round((m[l] - k[l] + 1) * d),
                    offsetY: f +
                        k[l] * d
                }, t = p.width >= h && p.height >= a, b === 0 && t) {
                n = p;
                break
            } else b === 1 && t && (!n || p.width * p.height > n.width * n.height) && (n = p);
        return n
    }

    function KP(a, b) {
        const c = AA(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    MP(a);
                    for (const e of c.i) e()
                }, 500)
            });
            for (const e of b) d.observe(e, {
                attributes: !0
            });
            c.g = d
        }
    }

    function MP(a) {
        ({
            sideRailAvailableSpace: a
        } = AA(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b) a.delete(c)
    }

    function xP(a) {
        if (a.Ia) return a.Ia.vb(1228, () => LP(a)) || null;
        try {
            return LP(a)
        } catch {}
        return null
    };
    const NP = {
        [27]: 512,
        [26]: 128
    };
    var OP = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return nP(a, c) === 0;
                case 3:
                case 4:
                    return wP(a, !1, c, !0, T(zt)) === 0;
                case 8:
                    return uP(a) == 0;
                case 9:
                    return b = !(b.google_adtest === "on" || FL(a.location, "google_scr_debug")), !MH(a, b, d);
                case 30:
                    return CJ(a) == 0;
                case 26:
                    return pP(a) === 0;
                case 27:
                    return oP(a) === 0;
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        PP = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return nP(a, c);
                case 3:
                case 4:
                    return wP(a, T(At), c, !1, T(zt));
                case 8:
                    return uP(a);
                case 9:
                    return MH(a, !(b.google_adtest === "on" || FL(a.location, "google_scr_debug")), d);
                case 16:
                    return kv(b, a) ? 0 : 8388608;
                case 30:
                    return CJ(a);
                case 26:
                    return pP(a);
                case 27:
                    return oP(a);
                default:
                    return 32
            }
        },
        QP = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!uc(d)) return !1;
            a = Ne(a);
            if (!a || !OP(a, b, d, c)) return !1;
            b = AA(a);
            if (ap(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        SP = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && RP(a) && b !== 16 && b !== 10 && b !== 11 && b !== 40 && b !== 41
        },
        TP = a => {
            if (!a.hash) return null;
            let b = null;
            We(CL, c => {
                !b && FL(a, c) && (b = DL[c])
            });
            return b
        },
        VP = (a, b) => {
            const c = AA(a).tagSpecificState[1] || null;
            c != null && c.debugCard == null && We(EL, d => {
                !c.debugCardRequested && typeof d === "number" && IL(d, a.location) && (c.debugCardRequested = !0, UP(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        XP = (a, b, c) => {
            if (!b) return null;
            const d = AA(b);
            let e = 0;
            We(vc, f => {
                const h = NP[f];
                h && WP(a, b, f, c) === 0 && (e |= h)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        YP = (a, b, c) => {
            const d = [];
            We(vc, e => {
                const f = WP(b, a, e, c);
                f !== 0 && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        ZP = a => {
            const b = [],
                c = {};
            We(a, (d, e) => {
                if ((e = Ro[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        $P = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return typeof a === "boolean" ? a ? "1" : "0" : ""
        },
        WP = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = AA(b),
                h = ap(f, c);
            if (a.google_reactive_ad_format == c || h) e |= 64;
            let k = !1;
            We(f.reactiveTypeDisabledByPublisher, (l, m) => {
                String(c) ===
                    String(m) && (k = !0)
            });
            return k && TP(b.location) !== c && (e |= 128, c == 2 || c == 1 || c == 3 || c == 4 || c == 8) ? e : e | PP(b, a, c, d)
        },
        aQ = (a, b) => {
            if (a) {
                var c = AA(a),
                    d = {};
                We(b, (e, f) => {
                    (f = Ro[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                We(vc, e => {
                    d[So[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        bQ = (a, b, c) => {
            b = V.Da(b, c);
            return AL(3, window, a).Rc.then(b)
        },
        UP = (a, b, c) => {
            c = V.Da(212, c);
            AL(4, a, b).Rc.then(c)
        },
        cQ = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "reserved";
            a.className += " adsbygoogle-noablate";
            c.adsbygoogle || (c.adsbygoogle = [],
                Oe(c.document, Qd `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        dQ = a => {
            a = a.google_reactive_ad_format;
            return uc(a) ? "" + a : null
        },
        RP = a => !!dQ(a) || a.google_pgb_reactive != null,
        eQ = a => {
            a = dQ(a);
            return a == 26 || a == 27 || a == 30 || a == 16 || a == 40 || a == 41
        };

    function fQ(a) {
        return typeof a.google_reactive_sra_index === "number"
    }

    function gQ(a, b, c) {
        const d = b.K || b.pubWin,
            e = b.D;
        var f = YP(d, e, c);
        e.google_reactive_plat = f;
        (f = ZP(a)) && (e.google_reactive_plaf = f);
        (f = $P(a)) && (e.google_reactive_fba = f);
        (f = yP(d)) && (e.google_plas = f);
        hQ(a, e);
        f = TP(b.pubWin.location);
        iQ(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        e.easpi = T(hu);
        e.asro = T(du);
        e.aihb = T(Et);
        e.ailel = mP(av(Xt));
        e.aiael = mP(av(Ft));
        e.aifxl = mP(av(St));
        e.aiixl = mP(av(Ut));
        T(Vt) && (e.slmct = U(Yt), e.samct = U(It));
        T(Ot) || (e.aiict = !0, e.aicel = mP(av(Mt)));
        T(au) && (e.aipaq = !0);
        T(fu) && (e.aigda = !0);
        T(gu) && (e.aisaib = !0);
        U(Gt) && (e.aiapm = U(Gt));
        U(Ht) && (e.aiapmi = U(Ht));
        T(bu) && (e.aiombap = !0);
        e.fsapi = !0;
        f !== 8 && (c && IH(c) ? (f = LH(c, 86400, "__lsv__"), f ? .length && (f = Math.floor((Date.now() - Math.max(...f)) / 6E4), f >= 0 && (e.vmsli = f))) : e.vmsli = -1);
        f = LH(c, 600, "__lsa__");
        f ? .length && Math.floor((Date.now() - Math.max(...f)) / 6E4) <= U(Bs) && (e.dap = 3);
        xk() || NO(b.pubWin.top);
        f = rN(b.pubWin, "rsrai", mx(429, (h, k) => jQ(b, d, e.google_ad_client, a, h, k, c)), mx(430, (h, k) => gp(b.pubWin, "431", jx, k)));
        b.j.push(f);
        AA(d).wasReactiveTagRequestSent = !0;
        kQ(b, a, c)
    }

    function kQ(a, b, c) {
        const d = a.D,
            e = za(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = rN(a.pubWin, "apcnf", mx(353, (f, h) => {
            const k = Ic(a.xa.jb, yL());
            var l = a.pubWin,
                m = d.google_ad_client;
            return tf(h.origin) ? JN(l, m, e, f.config, c, k, null) : !1
        }), mx(353, (f, h) => gp(a.pubWin, "353", jx, h)));
        a.j.push(b)
    }

    function jQ(a, b, c, d, e, f, h) {
        if (!tf(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!tF(b, 1)) return !0;
        f && lk(6, [f]);
        e = e.amaConfig;
        const k = [],
            l = [],
            m = AA(b);
        let n = null;
        for (let p = 0; p < f.length; p++) {
            if (!f[p]) continue;
            const q = f[p],
                t = q.adFormat;
            m && q.enabledInAsfe && (m.reactiveTypeEnabledInAsfe[t] = !0);
            if (!q.noCreative) {
                q.google_reactive_sra_index = p;
                if (t === 9 && e) {
                    q.pubVars = Object.assign(q.pubVars || {}, lQ(d, q));
                    const w = new NH;
                    if (GH(w, q) && w.B(q)) {
                        n = w;
                        continue
                    }
                }
                k.push(q);
                l.push(t)
            }
        }
        k.length && bQ(a.xa.Sg,
            522, p => {
                mQ(k, b, p, d, h)
            });
        e && JN(b, c, d, e, h, a.xa.jb, n);
        return !0
    }

    function lQ(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        za(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function mQ(a, b, c, d, e) {
        const f = [];
        for (let h = 0; h < a.length; h++) {
            const k = a[h],
                l = k.adFormat,
                m = k.adKey,
                n = c.configProcessorForAdFormat(l);
            l && n && m && (k.pubVars = lQ(d, k), delete k.google_reactive_sra_index, f.push(l), lx(466, () => n.verifyAndProcessConfig(b, k, e)))
        }
    }

    function hQ(a, b) {
        const c = [];
        let d = !1;
        We(Ro, (e, f) => {
            let h;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (h = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = h ? h.replace(/,/g, "+") : "+", d || (d = !!h))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function iQ(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    nc("script");
    var nQ = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function oQ(a, b) {
        if (!kv(b, a)) return () => {};
        a = pQ(b, a);
        if (!a) return () => {};
        const c = pF();
        b = xc(b);
        const d = {
            wb: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Za(c, d)
    }

    function pQ(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !pv.test(a.className);) a = a.parentElement;
        return a
    }

    function qQ(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const h = {},
                k = a.childNodes[f];
            var c = k.style,
                d = ["width", "height"];
            for (let l = 0; l < d.length; l++) {
                const m = "google_ad_" + d[l];
                if (!h.hasOwnProperty(m)) {
                    var e = df(c[d[l]]);
                    e = e === null ? null : Math.round(e);
                    e != null && (h[m] = e)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function rQ(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function sQ(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.g != c) {
            a.g = c;
            a = pF();
            for (const d of a)
                if (d.wb.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.wb.offsetWidth, lx(467, () => {
                    var e = d.wb,
                        f = d.D;
                    const h = qQ(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? `${f.gfwroh}px` : "", e.style.width = f.gfwrow ? `${f.gfwrow}px` : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const k = qQ(e, f);
                    !k && h && e.childNodes.length == 1 ? (rQ(h, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", cQ(e, f, b)) : k && h && k != h && (rQ(h, !1), rQ(k, !0))
                })
        }
    }
    var tQ = class extends P {
        constructor() {
            super(...arguments);
            this.g = null
        }
        J(a) {
            const b = dF();
            if (!iF(b, 27, !1)) {
                jF(b, 27, !0);
                this.g = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    sQ(this, a)
                };
                Jb(a, "resize", c);
                yp(this, () => {
                    Lb(a, "resize", c)
                })
            }
        }
    };
    var uQ = class {
        constructor(a, b) {
            this.K = a;
            this.wb = b;
            this.g = null;
            this.j = 0
        }
        i() {
            ++this.j >= 10 && u.clearInterval(this.g);
            var a = nv(this.K, this.wb);
            ov(this.K, this.wb, a);
            a = jv(this.wb, this.K);
            a != null && a.x === 0 || u.clearInterval(this.g)
        }
    };

    function vQ(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function wQ(a, b) {
        b && !a.g && (b = b.split(":"), a.g = b.find(c => c.indexOf("ID=") === 0) || null, a.j = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null)
    }
    var xQ = class {
            constructor() {
                this.l = new Date(Date.now());
                this.j = this.g = null;
                this.i = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.i[3] = {
                    [71]: (...a) => {
                        var b = this.g;
                        var c = this.l,
                            d = Number(a[0]);
                        a = Number(a[1]);
                        b = b !== null ? Ye(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                        return b
                    }
                };
                this.i[4] = {
                    [15]: () => {
                        var a = Number(this.j || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(a * 1E3), a = a.getFullYear() * 1E4 + (a.getMonth() + 1) * 100 + a.getDate());
                        return a
                    }
                }
            }
        },
        yQ;
    var zQ = class extends M {
        g() {
            return H(this, 10)
        }
    };
    var AQ = class extends M {
        g() {
            return ii(this, 1, qh)
        }
    };
    AQ.O = [1];
    var BQ = class extends M {};
    BQ.O = [19];
    var CQ = [13, 14];
    let DQ = void 0;

    function EQ() {
        tj(DQ, wj);
        return DQ
    }

    function FQ(a) {
        tj(DQ, wl);
        DQ = a
    };

    function GQ(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : tc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function HQ(a = u) {
        return a.ggeac || (a.ggeac = {})
    };

    function IQ(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function JQ(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function KQ(a = navigator) {
        try {
            return !!a.protectedAudience ? .queryFeatureSupport ? .("deprecatedRenderURLReplacements")
        } catch (b) {
            return !1
        }
    };

    function LQ(a = Ve()) {
        return b => Ye(`${b} + ${a}`) % 1E3
    };

    function MQ(a, b) {
        a.g = Co(14, b, () => {})
    }
    class NQ {
        constructor() {
            this.g = () => {}
        }
    }

    function OQ(a) {
        N(NQ).g(a)
    };

    function PQ(a = HQ()) {
        Do(N(Eo), a);
        QQ(a);
        MQ(N(NQ), a);
        N(Zu).i()
    }

    function QQ(a) {
        const b = N(Zu);
        b.j = (c, d) => Co(5, a, () => !1)(c, d, 1);
        b.A = (c, d) => Co(6, a, () => 0)(c, d, 1);
        b.C = (c, d) => Co(7, a, () => "")(c, d, 1);
        b.g = (c, d) => Co(8, a, () => [])(c, d, 1);
        b.l = (c, d) => Co(17, a, () => [])(c, d, 1);
        b.i = () => {
            Co(15, a, () => {})(1)
        }
    };

    function RQ(a, b, c) {
        var d = {
            [0]: LQ(xf(b).toString())
        };
        if (c) {
            c = TO(new XO(b), "__gads", c) || "";
            yQ || (yQ = new xQ);
            b = yQ;
            wQ(b, c);
            OQ(b.i);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? LQ(e)(f) : void 0
        }
        d = Fo(a, d);
        Jo.na(1085, LF(N(JF), a, d))
    }

    function SQ(a, b) {
        RQ(20, a, b);
        RQ(17, a, b)
    }

    function TQ(a) {
        const b = N(Eo).g();
        a = vQ(a);
        return b.concat(a).join(",")
    }

    function UQ(a) {
        const b = al();
        b && (a.debug_experiment_id = b)
    };
    var VQ = class {
        constructor(a) {
            this.i = 0;
            this.g = this.I = null;
            this.H = 0;
            this.j = [];
            this.sc = this.B = "";
            this.l = this.G = null;
            this.F = !1;
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.ma = a.ma;
            this.xa = a.xa;
            this.Wa = a.Wa;
            this.ea = a.ea
        }
    };

    function WQ(a, b, c) {
        c = mL(a, qG(b, {
            idpcApplies: c && !nN()
        }));
        c = nj(c, 2, b.tcString);
        c = nj(c, 4, b.addtlConsent || "");
        ci(c, 7, Vg(b.internalErrorState));
        c = !tG(b, ["2", "7", "9", "10"], 3);
        Ri(a, 8, c);
        c = !tG(b, ["3", "4"], 0);
        Ri(a, 9, c);
        b.gdprApplies != null && Ri(a, 3, b.gdprApplies)
    }

    function XQ(a) {
        const b = new zG(a.pubWin, {
            timeoutMs: -1,
            Nh: !0
        });
        if (!vG(b)) return Promise.resolve(null);
        const c = dF(),
            d = iF(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const h = iF(c, 25, []);
            h.push(f);
            jF(c, 25, h)
        });
        d || d === null || (jF(c, 24, null), b.addEventListener(f => {
            if (pG(f)) {
                jF(c, 24, f);
                WQ(a.g, f, H(a.ma, 6));
                for (const h of iF(c, 25, [])) h.resolve(f);
                jF(c, 25, [])
            } else jF(c, 24, null)
        }));
        return e
    };

    function YQ(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    var yl = {
        Wn: 0,
        Sn: 1,
        Tn: 9,
        Pn: 2,
        Qn: 3,
        Vn: 5,
        Un: 7,
        Rn: 10
    };
    var ZQ = class extends M {},
        $Q = xj(ZQ),
        aR = [1, 3];
    const bR = Qd `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function cR(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(k) {
                return h.g(k).then(({
                    data: l
                }) => l)
            }
            const e = Pe("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Kc(bR).toString();
            const f = (new URL(bR.toString())).origin,
                h = IN({
                    destination: a,
                    Na: e,
                    origin: f,
                    ne: "goog:gRpYw:doubleclick"
                });
            h.g("goog:topics:frame:handshake:ack").then(({
                data: k
            }) => {
                k === "goog:topics:frame:handshake:ack" &&
                    c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function dR(a, b, c) {
        var d = V,
            e = T(Iu);
        const {
            Vc: f,
            Uc: h
        } = eR(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(k => {
            let l = h;
            if (k instanceof Uint8Array) l || (l = !(f instanceof Uint8Array && ib(k, f)));
            else if (xl()(k)) l || (l = k !== f);
            else return d.ba(989, Error(JSON.stringify(k))), 7;
            if (l && c) try {
                var m = new ZQ;
                var n = Ui(m, 2, bl());
                k instanceof Uint8Array ? ui(n, 1, aR, qg(k, !1, !1)) : ui(n, 3, aR, Vg(k));
                c.setItem("goog:cached:topics",
                    qj(n))
            } catch {}
            return k
        }), b.getTopicsPromise = a);
        return f && !h ? Promise.resolve(f) : b.getTopicsPromise
    }

    function eR(a) {
        if (!a) return {
            Vc: null,
            Uc: !0
        };
        try {
            const m = a.getItem("goog:cached:topics");
            if (!m) return {
                Vc: null,
                Uc: !0
            };
            const n = $Q(m);
            let p;
            const q = xi(n, aR);
            switch (q) {
                case 0:
                    p = null;
                    break;
                case 1:
                    a = n;
                    var b = xi(n, aR) === 1 ? 1 : -1;
                    const w = a.T;
                    let C = w[y];
                    const E = ai(w, C, b),
                        F = qg(E, !0, !!(C & 34));
                    F != null && F !== E && di(w, C, b, F);
                    var c = F;
                    var d = c == null ? Uf() : c;
                    b = Uint8Array;
                    Tf(Qf);
                    var e = d.g;
                    if (e == null || Pf(e)) var f = e;
                    else {
                        if (typeof e === "string") {
                            Mf.test(e) && (e = e.replace(Mf, Of));
                            let L;
                            L = atob(e);
                            const G = new Uint8Array(L.length);
                            for (e = 0; e < L.length; e++) G[e] = L.charCodeAt(e);
                            var h = G
                        } else h = null;
                        f = h
                    }
                    var k = f;
                    var l = k == null ? k : d.g = k;
                    p = new b(l || 0);
                    break;
                case 3:
                    p = Mi(n, xi(n, aR) === 3 ? 3 : -1);
                    break;
                default:
                    ge(q, void 0)
            }
            const t = Ki(n, 2) + 6048E5 < bl();
            return {
                Vc: p,
                Uc: t
            }
        } catch {
            return {
                Vc: null,
                Uc: !0
            }
        }
    };

    function fR(a) {
        return T(yu) && a ? !!a.match($u(wu)) : !1
    }

    function gR(a, b) {
        if (!T(Gu) && (!T(zu) || b.g())) {
            b = JQ("shared-storage", a.document);
            const c = JQ("browsing-topics", a.document);
            if (b || c) try {
                return cR(a)
            } catch (d) {
                V.ba(984, d, void 0, void 0)
            }
        }
        return null
    }
    async function hR(a, b, c, d, e, f) {
        if (JQ("browsing-topics", b.document) && e && !T(Fu) && !fR(f ? .label))
            if (iR(c, d)) {
                a.l = 1;
                const h = ak(c, b);
                c = e.then(async k => {
                    await dR(k, b, h).then(l => {
                        a.l = l
                    })
                });
                T(Hu) && (d = U(Ju), d > 0 ? await Promise.race([c, zf(d)]) : await c)
            } else a.l = 5
    }

    function iR(a, b) {
        return !b.google_restrict_data_processing && b.google_tag_for_under_age_of_consent !== 1 && b.google_tag_for_child_directed_treatment !== 1 && !!a.g() && !oF() && !H(a, 9) && !H(a, 13) && !H(a, 12) && (typeof b.google_privacy_treatments !== "string" || !b.google_privacy_treatments.split(",").includes("disablePersonalization")) && !H(a, 14)
    };
    var kR = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => jR(d));
        return rN(a, "adpnt", (e, f) => {
            if (cp(f, c.contentWindow)) {
                e = fp(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function jR(a) {
        setTimeout(() => {
            a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function lR(a, b, {
        Pg: c,
        Qg: d
    }) {
        return !dk(a.g) || H(b, 8) || (c || !b.g()) && d ? !1 : !0
    }

    function mR(a, b, {
        Pg: c,
        Qg: d
    }) {
        if (!H(b, 8) && (!c && b.g() || !d)) return fk("__eoi", a.g) ? ? void 0
    }
    var nR = class {
        constructor(a) {
            this.g = a
        }
    };

    function oR(a, b, c) {
        try {
            if (!tf(c.origin) || !cp(c, a.g.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        typeof d === "string" && (e = a.ua[d]) && a.Ia.vb(168, () => {
            e.call(a, b, c)
        })
    }
    class pR extends P {
        constructor(a, b) {
            var c = V,
                d = jx;
            super();
            this.j = a;
            this.g = b;
            this.Ia = c;
            this.ta = d;
            this.ua = {};
            this.Fa = this.Ia.Da(168, (e, f) => void oR(this, e, f));
            this.ib = this.Ia.Da(169, (e, f) => gp(this.j, "ras::xsf", this.ta, f));
            this.R = [];
            this.ca(this.ua);
            this.R.push(qN(this.j, "sth", this.Fa, this.ib))
        }
        i() {
            for (const a of this.R) a();
            this.R.length = 0;
            super.i()
        }
    };
    var qR = class extends pR {};

    function rR(a, b, c = null) {
        return new sR(a, b, c)
    }
    var sR = class extends qR {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.B = N(JF);
            this.l = () => {};
            Jb(this.g, "load", this.l)
        }
        i() {
            Lb(this.g, "load", this.l);
            super.i()
        }
        ca(a) {
            a["adsense-labs"] = b => {
                if (b = fp(b).settings)
                    if (b = sj(Nj, JSON.parse(b)), D(b, 1) != null) {
                        var c = b.T;
                        if (Ai(c, c[y], Mj, 4, 3, !1, !0).length > 0) {
                            var d = c = Bi(b, Mj, 4),
                                e = this.B;
                            const k = new Im;
                            for (var f of d) switch (f.getVersion()) {
                                case 1:
                                    Ri(k, 1, !0);
                                    break;
                                case 2:
                                    Ri(k, 2, !0)
                            }
                            f = new Jm;
                            f = B(f, 1, Km, k);
                            PF(e, f);
                            f = this.j;
                            e = this.A;
                            if (!iF(dF(), 37, !1)) {
                                f = new XO(f);
                                for (var h of c) switch (h.getVersion()) {
                                    case 1:
                                        UO(f,
                                            "__gads", h, e);
                                        break;
                                    case 2:
                                        UO(f, "__gpi", h, e)
                                }
                                jF(dF(), 37, !0)
                            }
                            ci(b, 4)
                        }
                        if (h = z(b, Mj, 5)) c = this.j, iF(dF(), 40, !1) || (c = new nR(c), f = Ki(h, 2) - Date.now() / 1E3, f = {
                            Cd: Math.max(f, 0),
                            path: I(h, 3),
                            domain: I(h, 4),
                            Rd: !1
                        }, gk("__eoi", h.getValue(), f, c.g), jF(dF(), 40, !0));
                        ci(b, 5);
                        h = this.j;
                        c = I(b, 1) || "";
                        if (rL({
                                win: h,
                                Va: EQ()
                            }).g != null) {
                            f = rL({
                                win: h,
                                Va: EQ()
                            });
                            f = f.g != null ? GQ(f.getValue()) : {};
                            b !== null && (f[c] = rj(b));
                            try {
                                h.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (k) {}
                        }
                    }
            }
        }
    };

    function tR(a) {
        a.A = a.B;
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.g.style.transition = "height 500ms";
        uR(a)
    }

    function vR(a, b) {
        a.g.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function uR(a) {
        const b = `rect(0px, ${a.g.width}px, ${a.A}px, 0px)`;
        a.g.style.clip = b;
        a.l.style.clip = b;
        a.g.setAttribute("height", a.A);
        a.g.style.height = a.A + "px";
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function wR(a, b) {
        b = cf(b.r_nh);
        a.B = b == null ? 0 : b;
        if (a.B <= 0) return "1";
        a.I = Ik(a.F).y;
        a.H = dp(a.j);
        if (a.I + a.A < a.H) return "2";
        if (a.I > Zo(a.j) - a.j.innerHeight) return "3";
        b = a.H;
        a.g.setAttribute("height", a.B);
        a.g.style.height = a.B + "px";
        a.l.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.g.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.I, a.A);
        Bk(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.g.width}px, ${b}px, 0px)`;
        Bk(a.g, {
            clip: b
        });
        Bk(a.l, {
            clip: b
        });
        return "0"
    }
    class xR extends qR {
        constructor(a, b) {
            super(a.K, b);
            this.l = a.ea;
            this.F = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Ka = this.hb = !1;
            this.ia = this.H = this.B = 0;
            this.Nc = this.A / 5;
            this.I = Ik(this.F).y;
            this.Bb = Fb(mx(651, () => {
                this.I = Ik(this.F).y;
                var c = this.H;
                this.H = dp(this.j);
                this.A < this.B ? (c = this.H - c, c > 0 && (this.ia += c, this.ia >= this.Nc ? (tR(this), vR(this, this.B)) : (this.A = Math.min(this.B, this.A + c), vR(this, c), uR(this)))) :
                    Lb(this.j, "scroll", this.M)
            }), this);
            this.M = () => {
                var c = this.Bb;
                Uj.requestAnimationFrame ? Uj.requestAnimationFrame(c) : c()
            }
        }
        ca(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = fp(b);
                this.hb || (this.hb = !0, b = wR(this, b), b === "0" && Jb(this.j, "scroll", this.M, Gb), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0",
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ka || (this.Ka = !0, tR(this), Lb(this.j, "scroll", this.M))
            }
        }
        i() {
            this.M && Lb(this.j, "scroll", this.M, Gb);
            super.i()
        }
    };

    function yR(a) {
        const b = a.I.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.j.innerHeight) && !c
    }
    class zR extends P {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.A = b;
            this.I = c;
            this.B = 0;
            this.l = yR(this);
            this.H = Eb(this.F, this);
            this.g = mx(433, () => {
                var d = this.H;
                Uj.requestAnimationFrame ? Uj.requestAnimationFrame(d) : d()
            });
            Jb(this.j, "scroll", this.g, Gb)
        }
        F() {
            const a = yR(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (sN(c, "ig", b, "*", 2), ++this.B >= 10 && this.g && Lb(this.j, "scroll", this.g, Gb))
            }
            this.l = a
        }
    };

    function AR(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Bk(a, "transition", b.join(","))
    }
    var BR = zb(function() {
        var a = ue(document, "DIV"),
            b = sc ? "-webkit" : rc ? "-moz" : pc ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        c = {
            style: c
        };
        if (!Ad.test("div")) throw Error("");
        if ("DIV" in Cd) throw Error("");
        b = void 0;
        var d = "";
        if (c)
            for (k in c)
                if (Object.prototype.hasOwnProperty.call(c, k)) {
                    if (!Ad.test(k)) throw Error("");
                    var e = c[k];
                    if (e != null) {
                        var f = k;
                        if (e instanceof qb) e = tb(e);
                        else if (f.toLowerCase() == "style") {
                            if (!za(e)) throw Error("");
                            if (!(e instanceof gd)) {
                                let l = "";
                                for (var h in e)
                                    if (Object.prototype.hasOwnProperty.call(e, h)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(h)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${h}`);
                                        let m = e[h];
                                        m != null && (m = Array.isArray(m) ? m.map(id).join(" ") : id(m), l += `${h}:${m};`)
                                    }
                                e = l ? new gd(l, ed) : hd
                            }
                            e = fd(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in Bd)
                                if (e instanceof Hc) e = Kc(e).toString();
                                else if (e instanceof Sc) e = Uc(e);
                            else if (typeof e === "string") e = ad(e).toString();
                            else throw Error("");
                        }
                        f = `${f}="` + Sb(String(e)) + '"';
                        d += " " + f
                    }
                }
        var k =
            "<div" + d;
        b == null ? b = [] : Array.isArray(b) || (b = [b]);
        Ac.div === !0 ? k += ">" : (h = zd(b), k += ">" + ud(h).toString() + "</div>");
        k = wd(k);
        Ud(a, k);
        return Ek(a.firstChild, "transition") != ""
    });

    function CR(a, b, c) {
        a.i[b].indexOf(c) < 0 && (a.i[b] += c)
    }

    function DR(a, b) {
        a.g.indexOf(b) >= 0 || (a.g = b + a.g)
    }

    function ER(a, b, c, d) {
        return a.errors != "" || b ? null : a.g.replace(FR, "") == "" ? c != null && a.i[0] || d != null && a.i[1] ? !1 : !0 : !1
    }

    function GR(a) {
        var b = ER(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var HR = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        wa(a) {
            this.errors.indexOf(a) < 0 && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    };

    function IR(a) {
        let b = a.R;
        a.G = () => {};
        JR(a, a.C, b);
        let c = a.C.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Ue(c, b)
            } catch (h) {
                a.g.wa("c")
            }
            const f = KR(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.M = !0);
            if (d && !f && LR(e)) {
                DR(a.g, "l");
                a.F = c;
                break
            }
            d = d && f;
            if (e && MR(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Ke(b)) {
                        DR(a.g, "c");
                        break
                    }
                } catch (h) {
                    DR(a.g,
                        "c");
                    break
                }
            }
        }
        a.B && a.A && NR(a);
        return a.g
    }

    function OR(a) {
        function b(n) {
            for (let p = 0; p < n.length; p++) Bk(l, n[p], "0px")
        }

        function c() {
            PR(d, h, k);
            !l || m || k || (b(QR), b(RR))
        }
        const d = a.C;
        d.style.overflow = a.Qc ? "visible" : "hidden";
        a.B && (a.F ? (AR(d, SR()), AR(a.F, SR())) : AR(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.I !== null && (d.style.opacity = String(a.I));
        const e = a.width != null && a.j != null && (a.Pd || a.j > a.width) ? a.j : null,
            f = a.height != null && a.i != null && (a.Pd || a.i > a.height) ? a.i : null;
        if (a.H) {
            const n =
                a.H.length;
            for (let p = 0; p < n; p++) PR(a.H[p], e, f)
        }
        const h = a.j,
            k = a.i,
            l = a.F,
            m = a.M;
        a.B ? u.setTimeout(c, 1E3) : c()
    }

    function TR(a) {
        if (a.A && !a.ca || a.j == null && a.i == null && a.I == null && a.A) return a.g;
        var b = a.A;
        a.A = !1;
        IR(a);
        a.A = b;
        if (!b || a.check != null && !ER(a.g, a.check, a.j, a.i)) return a.g;
        a.g.g.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.j !== null || a.height == null && a.i !== null) a.B = !1;
        (a.j == 0 || a.i == 0) && a.g.g.indexOf("l") >= 0 && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        OR(a);
        return IR(a)
    }

    function MR(a, b) {
        let c = !1;
        b.display == "none" && (DR(a.g, "n"), a.A && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || DR(a.g, "v");
        b.overflow == "hidden" && DR(a.g, "o");
        b.position == "absolute" ? (DR(a.g, "a"), c = !0) : b.position == "fixed" && (DR(a.g, "f"), c = !0);
        return c
    }

    function JR(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const h = b.parentElement.childNodes;
        for (let l = 0; l < h.length; l++) {
            var k = h[l];
            k == b ? e = !0 : (k = UR(a, k, c), d |= k, e && (f |= k))
        }
        f & 1 && (d & 2 && CR(a.g, 0, "o"), d & 4 && CR(a.g, 1, "o"));
        return !(d & 1)
    }

    function KR(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (C) {
            a.g.wa("s")
        }
        var f = c.getAttribute("width"),
            h = cf(f),
            k = c.getAttribute("height"),
            l = cf(k),
            m = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = JR(a, c, b);
        var n = d && d.width;
        const p = d && d.height;
        var q = e && e.width,
            t = e && e.height,
            w = df(n) == a.width && df(p) == a.height;
        n = w ? n : q;
        t = w ? p : t;
        q = df(n);
        w = df(t);
        h = a.width !== null && (q !== null && a.width >= q || h !== null && a.width >= h);
        w = a.height !== null && (w !== null && a.height >= w || l !== null && a.height >= l);
        l = !b && LR(d);
        w = b || w || l || !(f ||
            n || d && (!VR(String(d.minWidth)) || !WR(String(d.maxWidth))));
        m = b || h || l || m || !(k || t || d && (!VR(String(d.minHeight)) || !WR(String(d.maxHeight))));
        YR(a, 0, w, c, "width", f, a.width, a.j);
        ZR(a, 0, "d", w, e, d, "width", n, a.width, a.j);
        ZR(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        ZR(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.ef ? (c = /^html|body$/i.test(c.nodeName), f = df(p), k = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, k = a.i != null && d && f && Math.round(f) !== a.i && !k && d.minHeight !== "100%", a.A && !c && k && (e.setProperty("height",
            "auto", "important"), d && !VR(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !WR(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (YR(a, 1, m, c, "height", k, a.height, a.i), ZR(a, 1, "d", m, e, d, "height", t, a.height, a.i), ZR(a, 1, "m", m, e, d, "minHeight", e && e.minHeight, a.height, a.i), ZR(a, 1, "M", m, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function NR(a) {
        function b() {
            if (c > 0) {
                var m = Ue(e, d) || {
                    width: 0,
                    height: 0
                };
                const n = df(m.width);
                m = df(m.height);
                n !== null && f !== null && k && k(0, f - n);
                m !== null && h !== null && k && k(1, h - m);
                --c
            } else u.clearInterval(l), k && (k(0, 0), k(1, 0))
        }
        let c = 31.25;
        const d = a.R,
            e = a.C,
            f = a.j,
            h = a.i,
            k = a.G;
        let l;
        u.setTimeout(() => {
            l = u.setInterval(b, 16)
        }, 990)
    }

    function UR(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Ue(b, c)
            } catch (e) {}
            if (d) {
                if (d.display == "none" || d.position == "fixed") return 0;
                if (d.position == "absolute") {
                    if (!a.l.boundingClientRect || d.visibility == "hidden" || d.visibility == "collapse") return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.l.boundingClientRect.left ? 2 : 0) | (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function YR(a, b, c, d, e, f, h, k) {
        if (k != null) {
            if (typeof f == "string") {
                if (f == "100%" || !f) return;
                f = cf(f);
                f == null && (a.g.wa("n"), CR(a.g, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.A)
                        if (a.B) {
                            const l = Math.max(f + k - (h || 0), 0),
                                m = a.G;
                            a.G = (n, p) => {
                                n == b && fe(d, e, String(l - p));
                                m && m(n, p)
                            }
                        } else fe(d, e, String(k))
                } else CR(a.g, b, "d")
        }
    }

    function ZR(a, b, c, d, e, f, h, k, l, m) {
        if (m != null) {
            f = f && f[h];
            typeof f != "string" || (c == "m" ? VR(f) : WR(f)) || (f = df(f), f == null ? DR(a.g, "p") : l != null && DR(a.g, f == l ? "E" : "e"));
            if (typeof k == "string") {
                if (c == "m" ? VR(k) : WR(k)) return;
                k = df(k);
                k == null && (a.g.wa("p"), CR(a.g, b, c))
            }
            if (k != null)
                if (d && e) {
                    if (a.A)
                        if (a.B) {
                            const n = Math.max(k + m - (l || 0), 0),
                                p = a.G;
                            a.G = (q, t) => {
                                q == b && (e[h] = n - t + "px");
                                p && p(q, t)
                            }
                        } else e[h] = m + "px"
                } else CR(a.g, b, c)
        }
    }
    var dS = class {
        constructor(a, b, c, d, e, f, h) {
            this.pubWin = a;
            this.C = b;
            this.H = c;
            this.l = new $R(this.C);
            this.F = this.G = null;
            this.M = !1;
            this.R = (a = this.C.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new $R(this.C);
            this.A = h;
            this.ca = aS(this.l, d.qf, d.height, d.Kc);
            this.width = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = bS(d.width);
            this.i = bS(d.height);
            this.I = this.A ? bS(d.opacity) : null;
            this.check = d.check;
            this.Kc = !!d.Kc;
            this.B = d.qf == "animate" && !cS(this.l, this.i, this.Kc) && BR();
            this.Qc = !!d.Qc;
            this.g = new HR;
            cS(this.l, this.i, this.Kc) && DR(this.g, "r");
            e = this.l;
            e.g && e.i >= e.W && DR(this.g, "b");
            this.Pd = !!d.Pd;
            this.ef = !!d.ef
        }
    };

    function cS(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, bS(a.getHeight())), a = a.g && b >= a.W) : a = a.g && a.i >= a.W, d = a);
        return d
    }
    var $R = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Ne(c);
            this.g = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (h) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const h = d.ownerDocument,
                    k = h && (h.defaultView || h.parentWindow);
                (d = k && k.frameElement) && (f = d.getBoundingClientRect())
            } catch (h) {
                break
            }
            this.i = e;
            c = c || u;
            this.W = (c.document.compatMode == "CSS1Compat" ? c.document.documentElement : c.document.body).clientHeight;
            b = b && qP(b);
            this.visible = !!a && !(b == 2 || b == 3) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function aS(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return cS(a, c, d)
        }
    }

    function LR(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function eS(a, b, c, d) {
        return TR(new dS(a, b, d, c, null, null, !0))
    }
    var fS = new HR("s", ""),
        FR = RegExp("[lonvafrbpEe]", "g");

    function WR(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function VR(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function PR(a, b, c) {
        b !== null && cf(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && cf(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = b + "px");
        c !== null && (a.style.height = c + "px")
    }
    var QR = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        RR = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function SR() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = QR;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = RR;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function bS(a) {
        return typeof a === "string" ? cf(a) : typeof a === "number" && isFinite(a) ? a : null
    };
    var gS = class extends qR {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        ca(a) {
            a["resize-me"] = (b, c) => {
                b = fp(b);
                var d = b.r_chk;
                if (d == null || d === "") {
                    var e = cf(b.r_nw),
                        f = cf(b.r_nh),
                        h = cf(b.r_no);
                    h != null || e !== 0 && f !== 0 || (h = 0);
                    var k = b.r_str;
                    k = k ? k : null; {
                        var l = /^true$/.test(b.r_ao),
                            m = /^true$/.test(b.r_ifr),
                            n = /^true$/.test(b.r_cab);
                        const t = window;
                        if (t)
                            if (k === "no_rsz") b.err = "7", e = !0;
                            else {
                                var p = new $R(this.g);
                                if (p.g) {
                                    var q = p.getWidth();
                                    q != null && (b.w = q);
                                    q = p.getHeight();
                                    q != null && (b.h = q);
                                    aS(p, k, f, n) ? (p = this.l, d = eS(t, p, {
                                        width: e,
                                        height: f,
                                        opacity: h,
                                        check: d,
                                        qf: k,
                                        Qc: l,
                                        Pd: m,
                                        Kc: n
                                    }, [this.g]), b.r_cui && /^true$/.test(b.r_cui.toString()) && x(p, {
                                        height: (f === null ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), e != null && (b.nw = e), f != null && (b.nh = f), b.rsz = d.toString(), b.abl = GR(d), b.frsz = (k === "force").toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: k,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.g.dataset.googleQueryId || this.g.setAttribute("data-google-query-id",
                        b.qid)
                }
            }
        }
    };

    function hS(a, b, c) {
        return new IntersectionObserver(c, b)
    }

    function iS(a, b, c) {
        Jb(a, b, c);
        return () => Lb(a, b, c)
    }
    let jS = null;

    function kS() {
        jS = bl()
    }

    function lS(a, b) {
        return b ? jS === null ? (Jb(a, "mousemove", kS, {
            passive: !0
        }), Jb(a, "scroll", kS, {
            passive: !0
        }), kS(), !1) : bl() - jS >= b * 1E3 : !1
    }

    function mS({
        win: a,
        element: b,
        B: c,
        C: d,
        A: e = 0,
        Ra: f,
        i: h,
        g: k = {},
        l = !0,
        j: m = hS
    }) {
        let n, p = !1,
            q = !1;
        const t = [],
            w = m(a, k, (C, E) => {
                try {
                    const F = () => {
                        t.length || (d && (t.push(iS(b, "mouseenter", () => {
                            p = !0;
                            F()
                        })), t.push(iS(b, "mouseleave", () => {
                            p = !1;
                            F()
                        }))), t.push(iS(a.document, "visibilitychange", () => F())));
                        const L = lS(a, e),
                            G = sP(a.document);
                        if (q && !p && !L && !G) n = n || a.setTimeout(() => {
                            lS(a, e) ? F() : (f(), E.disconnect())
                        }, c * 1E3);
                        else if (l || p || L || G) a.clearTimeout(n), n = void 0
                    };
                    ({
                        isIntersecting: q
                    } = C[C.length - 1]);
                    F()
                } catch (F) {
                    h && h(F)
                }
            });
        w.observe(b);
        return () => {
            w.disconnect();
            for (const C of t) C();
            n != null && a.clearTimeout(n)
        }
    };

    function nS(a, b, c, d, e) {
        return new oS(a, b, c, d, e)
    }

    function pS(a, b, c) {
        const d = a.g,
            e = a.F;
        if (e != null && d != null && cp(c, d.contentWindow) && (b = b.config, typeof b === "string")) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = new Oj(f)
            } catch (h) {
                return
            }
            a.dispose();
            f = Ji(a.l, 1);
            f <= 0 || (a.B = mS({
                win: a.j,
                element: e,
                B: f - .2,
                C: !Fe(),
                A: Ji(a.l, 3),
                Ra: () => void qS(a, e),
                i: h => Jo.ba(1223, h, void 0, void 0),
                g: {
                    threshold: Li(a.l, 2, 1)
                },
                l: !0,
                j: void 0
            }))
        }
    }

    function qS(a, b) {
        a.H();
        setTimeout(Jo.Da(1224, () => {
            a.A.rc = (parseInt(a.A.rc, 10) || 0) + 1;
            var c = we(b);
            c && pv.test(c.className) || (c = ue(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            T(tt) ? (rS(a, c, b), a.A.no_resize = !0, Jp(ZG(c), "filled", () => {
                ve(b)
            })) : ve(b);
            cQ(c, a.A, a.j)
        }), 200)
    }

    function rS(a, b, c) {
        a.j.getComputedStyle(b).position == "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var oS = class extends qR {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.F = d;
            this.A = c;
            this.H = e;
            this.l = this.B = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.R.push(qN(b, "sth", this.Fa, this.ib))
        }
        ca(a) {
            a.av_ref = (b, c) => pS(this, b, c)
        }
        i() {
            super.i();
            this.F = null;
            this.B && this.B()
        }
    };
    const sS = ["google_ad_client", "google_ad_format", "google_ad_height", "google_ad_width", "google_page_url"];

    function tS(a) {
        if (T(ut)) {
            var b = we(a.ea);
            b && pv.test(b.className) && Jp(ZG(b), "unfilled", () => {
                var c;
                if (c = T(ut))
                    if (c = !iF(dF(), 42, !1)) {
                        a: switch (a.D.google_reactive_ad_format) {
                            case 0:
                            case 27:
                            case 40:
                                c = !0;
                                break a;
                            default:
                                c = !1
                        }
                        if (c = c && (a.g ? SO(new XO(a.pubWin), a.g) : !1)) c = (c = a.g ? ak(a.g, a.pubWin) : null) ? (c.getItem("google_survey_fcap") ? Number(c.getItem("google_survey_fcap")) : 0) <= bl() : !1;c && (c = (c = Wo(a.pubWin)) ? b.getBoundingClientRect().top > c : !1)
                    }
                if (c) {
                    c = a.pubWin.document.createElement("ins");
                    var d = b.getAttribute("style");
                    d && c.setAttribute("style", d);
                    a.D.google_ad_height && (c.style.height = `${a.D.google_ad_height}px`);
                    (d = b.getAttribute("class")) && c.setAttribute("class", d);
                    (d = b.getAttribute("id")) && c.setAttribute("id", d);
                    b.replaceWith(c);
                    d = a.D;
                    const f = {};
                    for (var e of sS) d[e] && (f[e] = d[e]);
                    f.sso = !0;
                    cQ(c, f, a.pubWin);
                    jF(dF(), 42, !0);
                    if (c = a.g ? ak(a.g, a.pubWin) : null) e = bl() + U(Bt) * 36E5, c.setItem("google_survey_fcap", String(e))
                }
            })
        }
    };
    const uS = /^blogger$/,
        vS = /^wordpress(.|\s|$)/i,
        wS = /^joomla!/i,
        xS = /^drupal/i,
        yS = /\/wp-content\//,
        CU = /\/wp-content\/plugins\/advanced-ads/,
        DU = /\/wp-content\/themes\/genesis/,
        EU = /\/wp-content\/plugins\/genesis/;

    function FU(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (CU.test(e)) return 5;
                if (EU.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", DU.test(e) || EU.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (uS.test(f)) return 1;
                if (vS.test(f)) return 2;
                if (wS.test(f)) return 3;
                if (xS.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", yS.test(d))) return 2;
        return 0
    };
    let GU = navigator;

    function HU(a) {
        let b = 1;
        let c;
        if (a !== void 0 && a !== "")
            for (b = 0, c = a.length - 1; c >= 0; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = d !== 0 ? b ^ d >> 21 : b
            }
        return b
    }

    function IU(a, b) {
        if (!a || a === "none") return 1;
        a = String(a);
        "auto" === a && (a = b, "www." === a.substring(0, 4) && (a = a.substring(4, a.length)));
        return HU(a.toLowerCase())
    }
    const JU = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        KU = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        LU = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function MU(a) {
        a.g === -1 && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var NU = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b = !0) {
            0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function OU() {
        const a = new NU;
        "SVGElement" in u && "createElementNS" in u.document && a.set(0);
        const b = hf();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        u.crypto && u.crypto.subtle && a.set(3);
        "TextDecoder" in u && "TextEncoder" in u && a.set(4);
        return MU(a)
    };
    const PU = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        QU = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function RU(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return PU.get(b.type) ? ? null
        } catch {}
        return QU.get(a.performance ? .navigation ? .type) ? ? null
    };
    var SU = class extends M {
        constructor() {
            super()
        }
    };

    function TU(a, b) {
        if (lc()) {
            var c = a.document.documentElement.lang;
            UU(a) ? VU(b, xf(a), !0, "", c) : (new MutationObserver((d, e) => {
                UU(a) && (VU(b, xf(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function UU(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function VU(a, b, c, d, e) {
        Sj({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function WU(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const XU = /[+, ]/;

    function YU(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document,
            h = Af(d),
            k = !1,
            l = "",
            m = 1;
        a: {
            m = c.google_ad_width || d.google_ad_width;
            var n = c.google_ad_height || d.google_ad_height;
            if (d && d.top === d) k = !1;
            else {
                k = d.document;
                l = k.documentElement;
                if (m && n) {
                    var p = 1;
                    let t = 1;
                    d.innerHeight ? (p = d.innerWidth, t = d.innerHeight) : l && l.clientHeight ? (p = l.clientWidth, t = l.clientHeight) : k.body && (p = k.body.clientWidth, t = k.body.clientHeight);
                    if (t > 2 * n || p > 2 * m) {
                        k = !1;
                        break a
                    }
                }
                k = !0
            }
        }
        l = k;
        m = aF(h).Re;
        n = d.top == d ? 0 : Ke(d.top) ? 1 : 2;
        p = 4;
        l || n !== 1 ? l ||
            n !== 2 ? l && n === 1 ? p = 7 : l && n === 2 && (p = 8) : p = 6 : p = 5;
        m && (p |= 16);
        l = String(p);
        m = cF(d);
        n = !!c.google_page_url;
        e.google_iframing = l;
        m !== 0 && (e.google_iframing_environment = m);
        if (!n && f.domain === "ad.yieldmanager.com") {
            for (l = f.URL.substring(f.URL.lastIndexOf("http")); l.indexOf("%") > -1;) try {
                l = decodeURIComponent(l)
            } catch (t) {
                break
            }
            c.google_page_url = l;
            n = !!l
        }
        n ? (e.google_page_url = c.google_page_url, e.google_page_location = (k ? f.referrer : f.URL) || "EMPTY") : (k && Ke(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url =
            d.top.document.URL : e.google_page_url = k ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var q = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            q = null
        } else q = null;
        e.google_last_modified_time = q;
        d = h === h.top ? h.document.referrer : (d = tk()) && d.referrer || "";
        e.google_referrer_url = d;
        bF(e, c);
        T(zu) && !b.g() ? e = "pagead2.googlesyndication.com" : (e = c.google_page_location || c.google_page_url, "EMPTY" === e && (e = c.google_page_url), e ? (e = e.toString(), e.indexOf("http://") == 0 ? e = e.substring(7,
            e.length) : e.indexOf("https://") == 0 && (e = e.substring(8, e.length)), d = e.indexOf("/"), d === -1 && (d = e.length), e = e.substring(0, d).split("."), d = !1, e.length >= 3 && (d = e[e.length - 3] in MO), e.length >= 2 && (d = d || e[e.length - 2] in MO), e = d) : e = !1, e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net");
        b = ZU(a, b);
        d = a.D;
        f = d.google_ad_channel;
        h = "/pagead/ads?";
        d.google_ad_client === "ca-pub-6219811747049371" && $U.test(f) && (h = "/pagead/lopri?");
        e = `https://${e}${h}`;
        a = H(a.ma, 9) && c.google_debug_params ? c.google_debug_params :
            "";
        a = Nk(b, e + a);
        return c.google_ad_url = a
    }

    function aV(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (a.nodeType === 9) a: {
            try {
                const c = a ? te(a) : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && Ke(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function bV(a, b) {
        var c = TQ(a.pubWin);
        a.D.saaei && (c += (c === "" ? "" : ",") + a.D.saaei);
        a.D.google_ad_intent_eids && (c += `${c===""?"":","}${a.D.google_ad_intent_eids}`);
        b.eid = c;
        c = a.D.google_loeid;
        typeof c === "string" && (a.i |= 4096, b.loeid = c)
    }

    function cV(a, b) {
        a = (a = Ne(a.pubWin)) && a.document ? PO(a.document, a) : new Zd(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function dV(a) {
        try {
            const b = u.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function eV(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.K,
            h = Af(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var k;
        (k = tk(e)) && za(k.data) && typeof k.data.type === "string" ? (k = k.data.type.toLowerCase(), k = k == "doubleclick" || k == "adsense" ? null : k) : k = null;
        k && (b.apn = k.substr(0, 10));
        h = aF(h);
        b.url || b.loc || !h.url || (b.url = h.url, h.Re || (b.usrc = 1));
        h.url != (b.loc || b.url) && (b.top = h.url);
        a.sc && (b.etu = a.sc);
        c = f ? ak(c, f) : null;
        (c = XP(d, f, c)) && (b.fc = c);
        if (!Uk(d)) {
            c = a.pubWin.document;
            h = "";
            if (c.documentMode &&
                (k = De(new pe(c), "IFRAME"), k.frameBorder = "0", k.style.height = 0, k.style.width = 0, k.style.position = "absolute", c.body)) {
                c.body.appendChild(k);
                try {
                    const fa = k.contentWindow.document;
                    fa.open();
                    var l = wd("<!DOCTYPE html>");
                    fa.write(ud(l));
                    fa.close();
                    h += fa.documentMode
                } catch (fa) {}
                c.body.removeChild(k)
            }
            b.docm = h
        }
        let m, n, p, q, t, w, C, E, F, L;
        try {
            m = e.screenX, n = e.screenY
        } catch (fa) {}
        try {
            p = e.outerWidth, q = e.outerHeight
        } catch (fa) {}
        try {
            t = e.innerWidth, w = e.innerHeight
        } catch (fa) {}
        try {
            C = e.screenLeft, E = e.screenTop
        } catch (fa) {}
        try {
            t =
                e.innerWidth, w = e.innerHeight
        } catch (fa) {}
        try {
            F = e.screen.availWidth, L = e.screen.availTop
        } catch (fa) {}
        b.brdim = [C, E, m, n, F, L, p, q, t, w].join();
        l = 0;
        u.postMessage === void 0 && (l |= 1);
        l > 0 && (b.osd = l);
        b.vis = qP(e.document);
        l = a.ea;
        e = RP(d) ? fS : TR(new dS(e, l, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = GR(e);
        if (!RP(d) && (e = Vk(d), e != null)) {
            l = 0;
            a: {
                try {
                    {
                        var G = d.google_async_iframe_id;
                        const fa = window.document;
                        if (G) var Z = fa.getElementById(G);
                        else {
                            var O = fa.getElementsByTagName("script"),
                                Ca = O[O.length - 1];
                            Z = Ca && Ca.parentNode || null
                        }
                    }
                    if (G = Z) {
                        Z = [];
                        O = 0;
                        for (var ab = Date.now(); ++O <= 100 && Date.now() - ab < 50 && (G = aV(G));) G.nodeType === 1 && Z.push(G);
                        var Kb = Z;
                        b: {
                            for (ab = 0; ab < Kb.length; ab++) {
                                c: {
                                    var la = Kb[ab];
                                    try {
                                        if (la.parentNode && la.offsetWidth > 0 && la.offsetHeight > 0 && la.style && la.style.display !== "none" && la.style.visibility !== "hidden" && (!la.style.opacity || Number(la.style.opacity) !== 0)) {
                                            const fa = la.getBoundingClientRect();
                                            var yb = fa.right > 0 && fa.bottom > 0;
                                            break c
                                        }
                                    } catch (fa) {}
                                    yb = !1
                                }
                                if (!yb) {
                                    var Cc = !1;
                                    break b
                                }
                            }
                            Cc = !0
                        }
                        if (Cc) {
                            b: {
                                const fa = Date.now();Cc = /^html|body$/i;yb = /^fixed/i;
                                for (la = 0; la < Kb.length && Date.now() - fa < 50; la++) {
                                    const Vc = Kb[la];
                                    if (!Cc.test(Vc.tagName) && yb.test(Vc.style.position || Gk(Vc, "position"))) {
                                        var Dc = Vc;
                                        break b
                                    }
                                }
                                Dc = null
                            }
                            break a
                        }
                    }
                } catch {}
                Dc = null
            }
            Dc && Dc.offsetWidth * Dc.offsetHeight <= 4 * e.width * e.height && (l = 1);
            b.pfx = l
        }
        a: {
            if (Math.random() < .05 && f) try {
                const fa = f.document.getElementsByTagName("head")[0];
                var $d = fa ? FU(fa) : 0;
                break a
            } catch (fa) {}
            $d = 0
        }
        f = $d;
        f !== 0 && (b.cms = f);
        d.google_lrv !== a.Wa && (b.alvm = d.google_lrv ||
            "none")
    }

    function fV(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Le(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function gV(a, b) {
        const c = iF(b, 8, {});
        b = iF(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function hV(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = Lo;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = u.performance;
                if (f && f.timing && f.now) {
                    var h = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (F) {}
            h = null
        }(e = (e = h) ? YQ(e, u.Date.now() - Lo, 1E6) : null) && (b.bdt = e);
        b.idt = YQ(a.H, Lo);
        e = a.D;
        b.shv = I(a.ma, 2);
        a.Wa && (b.mjsv = a.Wa);
        e.google_loader_used == "sd" ? b.ptt = 5 : e.google_loader_used == "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = tk(a.pubWin)) b.is_amp = 1, b.amp_v = uk(e), (e = vk(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new XO(a.pubWin);
        (h = TO(e, "__gads", c)) ? b.cookie = h: SO(e, c) && (b.cookie_enabled = "1");
        (h = TO(e, "__gpi", c)) && !h.includes("&") && (b.gpic = h);
        TO(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
        e = new nR(a.pubWin);
        h = {
            Pg: !1,
            Qg: !a.F
        };
        (f = mR(e, c, h)) ? b.eo_id_str = f: lR(e, c, h) && (b.eoidce = "1");
        e = dF();
        f = iF(e, 8, {});
        h = d.google_ad_section;
        f[h] && (b.prev_fmts = f[h]);
        f = iF(e, 9, {});
        f[h] && (b.prev_slotnames = f[h].toLowerCase());
        gV(d, e);
        h = iF(e,
            15, 0);
        h > 0 && (b.nras = String(h));
        (f = tk(window)) ? (f ? (h = f.pageViewId, f = f.clientId, typeof f === "string" && (h += f.replace(/\D/g, "").substr(0, 6))) : h = null, h = +h) : (h = Af(window), f = h.google_global_correlator, f || (h.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), h = f);
        b.correlator = iF(e, 7, h);
        T(Su) && (b.rume = 1);
        if (d.google_ad_channel) {
            h = iF(e, 10, {});
            f = "";
            var k = d.google_ad_channel.split(XU);
            for (var l = 0; l < k.length; l++) {
                var m = k[l];
                h[m] ? f += m + "+" : h[m] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            h = d.google_ad_host_channel;
            f = iF(e, 11, []);
            k = h.split("|");
            e = -1;
            h = [];
            for (l = 0; l < k.length; l++) {
                m = k[l].split(XU);
                f[l] || (f[l] = {});
                var n = "";
                for (var p = 0; p < m.length; p++) {
                    const F = m[p];
                    F !== "" && (f[l][F] ? n += "+" + F : f[l][F] = !0)
                }
                n = n.slice(1);
                h[l] = n;
                n !== "" && (e = l)
            }
            f = "";
            if (e > -1) {
                for (k = 0; k < e; k++) f += h[k] + "|";
                f += h[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        a: {
            e = d.google_ad_client;
            try {
                var q = Af(window),
                    t = q.google_prev_clients;
                t || (t = q.google_prev_clients = {});
                if (e in t) {
                    var w = 1;
                    break a
                }
                t[e] = !0;
                w = 2;
                break a
            } catch {
                w = 0;
                break a
            }
            w =
            void 0
        }
        b.pv = w;
        a.K && T(xt) && (w = a.K, w = lc() && UU(w) ? w.document.documentElement.lang : void 0, w && (b.tl = w));
        T(yt) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        if (!T(Ku)) {
            q = a.pubWin.document;
            w = a.D;
            t = a.pubWin;
            t = c.g() ? t.origin !== "null" ? t.document.cookie : null : null;
            c = q.domain;
            e = t || "";
            k = a.pubWin.screen;
            l = q.referrer;
            m = Pk();
            if (tk()) var C = window.gaGlobal || {};
            else {
                h = Math.round((new Date).getTime() / 1E3);
                f = w.google_analytics_domain_name;
                c = typeof f === "undefined" ? IU("auto",
                    c) : IU(f, c);
                p = e.indexOf(`__utma=${c}.`) > -1;
                n = e.indexOf(`__utmb=${c}`) > -1;
                (q = (yk() || window).gaGlobal) || (q = {}, (yk() || window).gaGlobal = q);
                t = !1;
                if (p) {
                    var E = e.split(`__utma=${c}.`)[1].split(";")[0].split(".");
                    n ? q.sid = String(E[3]) : q.sid || (q.sid = String(h));
                    q.vid = `${E[0]}.${E[1]}`;
                    q.from_cookie = !0
                } else {
                    q.sid || (q.sid = String(h));
                    if (!q.vid) {
                        t = !0;
                        n = Math.round(Math.random() * 2147483647);
                        try {
                            E = GU.javaEnabled()
                        } catch (F) {
                            E = !1
                        }
                        E = [GU.appName, GU.version, GU.language ? GU.language : GU.browserLanguage, GU.platform, GU.userAgent,
                            E ? 1 : 0
                        ].join("");
                        k ? E += `${k.width}x${k.height}${k.colorDepth}` : u.g && u.g.Lh && (k = u.g.Lh.Yn.qo().ro(), E += `${k.screen.width}x${k.screen.height}`);
                        E = E + e + (l || "");
                        for (k = E.length; m > 0;) E += m-- ^ k++;
                        q.vid = `${n^HU(E)&2147483647}.${h}`
                    }
                    q.from_cookie || (q.from_cookie = !1)
                }
                if (!q.cid) {
                    b: for (h = f, E = 999, h && (h = h.indexOf(".") === 0 ? h.substr(1) : h, E = h.split(".").length), h = 999, e = e.split(";"), f = 0; f < e.length; f++)
                        if (k = JU.exec(e[f]) || KU.exec(e[f]) || LU.exec(e[f])) {
                            l = parseInt(k[1], 10) || 0;
                            if (l === E) {
                                C = k[2];
                                break b
                            }
                            l < h && (h = l, C = k[2])
                        }t &&
                    C && C.search(/^\d+\.\d+$/) !== -1 ? (q.vid = C, q.from_cookie = !0) : C !== q.vid && (q.cid = C)
                }
                q.dh = c;
                q.hid || (q.hid = Math.round(Math.random() * 2147483647));
                C = q
            }
            b.ga_vid = C.vid;
            b.ga_sid = C.sid;
            b.ga_hid = C.hid;
            b.ga_fc = C.from_cookie;
            b.ga_cid = C.cid;
            b.ga_wpids = w.google_analytics_uacct
        }
        fV(a.pubWin, b);
        (a = d.google_ad_layout) && nQ[a] >= 0 && (b.rplot = nQ[a])
    }

    function iV(a, b) {
        var c = a.g;
        a = a.ma;
        oF() && (b.npa = 1);
        H(a, 6) && !c ? .C() && (b.ltd_cs = 1);
        c && (c.C() && (b.gdpr = c.A() ? "1" : "0"), (a = D(c, 1)) && (b.us_privacy = a), (a = D(c, 2)) && (b.gdpr_consent = a), (a = D(c, 4)) && (b.addtl_consent = a), (a = Ii(c, 7)) && (b.tcfe = a), (a = I(c, 11)) && (b.gpp = a), (c = ii(c, 10, kh, 0)) && c.length > 0 && (b.gpp_sid = c.join(",")))
    }

    function jV(a, b) {
        const c = a.D;
        iV(a, b);
        We(uF, (d, e) => {
            b[d] = c[e]
        });
        RP(c) && (a = dQ(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = Fw(c), a.g != null && (a = Xq(a.getValue()), b.pi = a))
    }

    function kV(a, b) {
        var c = xk() || NO(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = NO(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function lV(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = NO(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Ye(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function mV(a, b) {
        (a = lF()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function nV(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function oV(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = If(a))
    }

    function pV(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                d >= 0 && (b.wsm = d + 1)
            }
        } catch {}
    }

    function qV(a, b) {
        a.D.google_ad_public_floor >= 0 && (b.pubf = a.D.google_ad_public_floor);
        a.D.google_ad_private_floor >= 0 && (b.pvtf = a.D.google_ad_private_floor)
    }

    function rV(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Ma).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function sV(a, b) {
        var c;
        if (c = !T(Yu)) c = a.C ? .label, c = !(T(yu) && c && c.match($u(wu)));
        c && ("runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1), c = a.pubWin.navigator, a.pubWin.isSecureContext && "runAdAuction" in c && c.runAdAuction instanceof Function && JQ("run-ad-auction", a.pubWin.document) && (c = new NU, c.set(1, KQ(a.pubWin.navigator)), b.tdf = MU(c)))
    }

    function tV(a, b) {
        if (a.C != null && lc()) {
            var c = new SU,
                d = oj(c, 3, a.C.label);
            K(d, 4, a.C.status);
            b.psd = If(qj(c))
        }
    }

    function uV(a, b) {
        T(Pu) || JQ("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function vV(a, b) {
        if (typeof a.D.google_privacy_treatments === "string") {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.D.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function wV(a, b) {
        if (a.A) {
            a.A.Yi && (b.xatf = 1);
            try {
                a.A.Je ? .disconnect(), a.A.Je = void 0
            } catch {}
        }
    }

    function ZU(a, b) {
        const c = {};
        jV(a, c);
        oV(a, c);
        hV(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        c.u_his = Pk();
        c.u_h = Uj.screen ? .height;
        c.u_w = Uj.screen ? .width;
        c.u_ah = Uj.screen ? .availHeight;
        c.u_aw = Uj.screen ? .availWidth;
        c.u_cd = Uj.screen ? .colorDepth;
        c.u_sd = OO(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        lx(889, () => {
            if (a.K == null) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = RO(a.K, a.ea);
                c.adx && c.adx != -12245933 && c.ady && c.ady != -12245933 || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                QO(a.ea) || (c.adx = -12245933,
                    c.ady = -12245933, a.i |= 32768)
            }
        });
        kV(a, c);
        lV(a, c);
        cV(a, c);
        bV(a, c);
        c.oid = 2;
        mV(a, c);
        c.pvsid = xf(a.pubWin, V);
        nV(a, c);
        pV(a, c);
        c.uas = WU(a.pubWin);
        const d = RU(a.pubWin);
        d && (c.nvt = d);
        a.B && (c.scar = a.B);
        a.l instanceof Uint8Array ? c.topics = Gf(a.l) : a.l && (c.topics = a.l, c.tps = a.l);
        wV(a, c);
        eV(a, c, b);
        c.fu = a.i;
        c.bc = OU();
        H(a.ma, 9) && (UQ(c), c.creatives = dV(/\b(?:creatives)=([\d,]+)/), c.adgroups = dV(/\b(?:adgroups)=([\d,]+)/), c.adgroups || c.sso) && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0);
        jk() && (c.atl = !0);
        c.bz = Bf(a.pubWin);
        qV(a, c);
        rV(a, c);
        sV(a, c);
        tV(a, c);
        uV(a, c);
        vV(a, c);
        T(Bu) && String(a.D.google_special_category_data) === "true" && (c.scd = 1);
        return c
    }
    const $U = /YtLoPri/;
    var xV = class extends M {};
    xV.O = [3];

    function yV(a) {
        return Bi(a, xV, 15)
    }
    var zi = class extends M {},
        zV = xj(zi);
    zi.O = [15, 24];

    function AV() {
        var a = new BV;
        var b = new Nr;
        b = ci(b, 2, Vg(4));
        b = ci(b, 8, Vg(1));
        var c = new Tq;
        c = nj(c, 7, "#dpId");
        b = A(b, 1, c);
        return Ei(a, 3, Nr, b)
    }
    var BV = class extends M {},
        CV = xj(BV);
    BV.O = [3];
    var DV = Symbol(),
        EV = Symbol();
    var FV = class {
        constructor(a) {
            this.Pb = a.Pb ? ? [];
            this.Lg = a.Lg ? ? .1;
            this.Be = !!a.Be;
            this.De = !!a.De;
            this.ac = a.ac ? ? 0;
            this.ee = a.ee ? ? "";
            this.Qa = a.Qa ? ? "";
            this.fe = a.fe ? ? 15E3;
            this.ge = a.ge ? ? 0;
            this.Ce = a.Ce ? ? !0;
            this.qe = a.qe || "#0B57D0";
            this.Xc = a.Xc || "#FFFFFF";
            this.Ed = a.Ed ? ? 0;
            this.Wb = !!a.Wb;
            this.Ge = a.Ge ? ? [];
            this.Ne = !!a.Ne;
            this.nf = !!a.nf;
            this.cf = !!a.cf
        }
    };

    function GV(a, b) {
        a = Mw(aw([...b], a), a);
        if (a.length !== 0) return a.reduce((c, d) => c.la.g > d.la.g ? c : d)
    };

    function HV(a, b, c, d, e, f, h, k) {
        var l = new hn,
            m = new Tm;
        c = oj(m, 1, c);
        d = oj(c, 2, d);
        b = J(d, 3, b);
        l = A(l, 1, b);
        b = new Um;
        b = oj(b, 2, a.language);
        e = oj(b, 3, e);
        e = A(l, 2, e);
        h = mj(e, 3, Math.round(h));
        c = yV(f);
        e = l = b = d = 0;
        for (n of c) d += IV(I(n, 6) !== "") + IV(I(n, 7) !== ""), b += IV(I(n, 6) !== "") + IV(I(n, 7) !== ""), l += IV(I(n, 6) !== ""), e += IV(I(n, 7) !== "");
        var n = new gn;
        n = Si(n, 1, c.length);
        n = Si(n, 2, d);
        n = ci(n, 3, b == null ? b : Zg(b));
        n = ci(n, 4, l == null ? l : Zg(l));
        n = ci(n, 5, e == null ? e : Zg(e));
        n = A(h, 6, n);
        if (k.length) f = new Zm, f = Ci(f, 1, k), B(n, 5, jn, f);
        else {
            a.g = a.entries.length;
            k = new fn;
            a = a.entries;
            h = k.T;
            e = h[y];
            ug(e);
            h = Ai(h, e, en, 2, 2, !1, !0);
            l = e = 0;
            if (Array.isArray(a))
                for (var p = 0; p < a.length; p++) b = a[p], h.push(b), (b = hg(b.T)) && !e++ && (h[y] &= -9), b || l++ || (h[y] &= -17);
            else
                for (p of a) a = p, h.push(a), (a = hg(a.T)) && !e++ && (h[y] &= -9), a || l++ || (h[y] &= -17);
            f = yV(f).length;
            f = mj(k, 3, f);
            B(n, 4, jn, f)
        }
        return n
    }

    function JV(a, b) {
        const c = a.g;
        a.g = a.entries.length;
        var d = new Tn,
            e = new fn;
        a = Ci(e, 2, a.entries.slice(c));
        b = yV(b).length;
        b = mj(a, 3, b);
        return A(d, 1, b)
    }
    var KV = class {
        constructor() {
            this.entries = [];
            this.language = null;
            this.g = 0
        }
    };

    function IV(a) {
        return a ? 1 : 0
    };
    async function LV(a, b) {
        await new Promise(c => void a.win.setTimeout(c, 0));
        a.i = a.g.qa(b) + a.j
    }
    var MV = class {
        constructor(a, b) {
            var c = U(mu);
            this.win = a;
            this.g = b;
            this.j = c;
            this.i = b.qa(2) + c
        }
    };
    var NV = class {
            constructor(a) {
                this.performance = a
            }
            qa() {
                return this.performance.now()
            }
        },
        OV = class {
            qa() {
                return Date.now()
            }
        };
    const PV = [255, 255, 255];

    function QV(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), d.length > 4 ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if (a === "transparent" || a === "") return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function RV(a) {
        var b = getComputedStyle(a);
        if (b.backgroundImage !== "none") return null;
        b = QV(b.backgroundColor);
        var c = SV(b);
        if (c) return c;
        a = (a = a.parentElement) ? RV(a) : PV;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function SV(a) {
        return a[3] === 1 ? [a[0], a[1], a[2]] : null
    };
    var UV = class {
        constructor(a, b, c, d) {
            this.gf = b;
            this.ie = c;
            this.Ob = d;
            this.i = 0;
            this.g = new TV(a)
        }
    };

    function VV(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            e > 0 && a.g.set(c, d.slice(e))
        }
    }
    class TV {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function WV(a) {
        x(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function XV(a, b) {
        a = YV(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z");
        x(a, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        return a
    }

    function ZV(a, b, c, d) {
        a = YV(a, "0 -960 960 960", b, b, $V[d]);
        x(a, {
            fill: c || "white",
            cursor: "inherit"
        });
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function aW(a, b, c) {
        a = YV(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        x(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none",
            fill: c ? "#1A73E8" : "white"
        });
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }
    const $V = {
        [0]: "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z",
        [1]: "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z",
        [2]: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
        [3]: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm200-500 54-18 16-54q-32-48-77-82.5T574-786l-54 38v56l160 112Zm-400 0 160-112v-56l-54-38q-54 17-99 51.5T210-652l16 54 54 18Zm-42 308 46-4 30-54-58-174-56-20-40 30q0 65 18 118.5T238-272Zm242 112q26 0 51-4t49-12l28-60-26-44H378l-26 44 28 60q24 8 49 12t51 4Zm-90-200h180l56-160-146-102-144 102 54 160Zm332 88q42-50 60-103.5T800-494l-40-28-56 18-58 174 30 54 46 4Z",
        [4]: "M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80Zm0 640q-76-2-141.5-12.5t-114-26.5Q136-135 108-156t-28-44v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-28 44t-76.5 37q-48.5 16-114 26.5T520-80v-160h-80v160Zm40-440q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-154h240v154q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z",
        [5]: "M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z",
        [6]: "M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z",
        [7]: "M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z",
        [8]: "M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
        [9]: "M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"
    };

    function YV(a, b, c, d, e) {
        const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        x(e, rs(a));
        e.setAttribute("viewBox", b);
        e.setAttribute("width", c);
        e.setAttribute("height", d);
        WV(e);
        e.appendChild(f);
        return e
    };

    function bW(a, b, c, d) {
        const e = document.createElement("DIV");
        e.className = "google-anno-skip";
        d = a.getComputedStyle(d).fontSize || "16px";
        var f = e.appendChild,
            h = ZV(a, d, b.V.Xc, b.g.get(c) || 0);
        x(h, {
            position: "relative",
            top: "3px"
        });
        const k = document.createElement("SPAN");
        x(k, {
            display: "inline-block",
            "padding-left": b.Z() ? "" : "3px",
            "padding-right": b.Z() ? "3px" : ""
        });
        k.appendChild(h);
        f.call(e, k);
        f = e.appendChild;
        h = a.document.createElement("SPAN");
        h.appendChild(a.document.createTextNode(c));
        x(h, {
            position: "relative",
            left: b.Z() ?
                "" : "3px",
            right: b.Z() ? "3px" : "",
            "padding-left": b.Z() ? "6px" : "",
            "padding-right": b.Z() ? "" : "6px"
        });
        f.call(e, h);
        x(e, {
            display: "inline-block",
            "border-radius": "20px",
            "padding-left": b.Z() ? "7px" : "6px",
            "padding-right": b.Z() ? "6px" : "7px",
            "padding-top": "3px",
            "padding-bottom": "3px",
            "border-width": "1px",
            "border-style": "solid",
            color: b.V.Xc,
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: b.V.qe,
            cursor: "pointer"
        });
        return e
    };
    const cW = [{
        jf: "1907259590",
        Gd: 480,
        Oc: 220
    }, {
        jf: "2837189651",
        Gd: 400,
        Oc: 180
    }, {
        jf: "9211025045",
        Gd: 360,
        Oc: 160
    }, {
        jf: "6584860439",
        Gd: -Infinity,
        Oc: 150
    }];

    function dW(a) {
        return cW.find(b => b.Gd <= a)
    };

    function eW(a, b) {
        return b ? a.replace("ca", "partner") : "pub-adfiliates-query-origin"
    };
    const fW = new class {
        constructor() {
            this.g = []
        }
    };
    let gW = !1;

    function hW(a) {
        iW(a.config, 1065, a.win, () => {
            if (!a.g) {
                var b = new Yn;
                b = mj(b, 1, a.i);
                var c = new Xn;
                b = B(b, 2, Zn, c);
                jW(a.config.L, b)
            }
        }, 1E4)
    }
    class kW {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function lW(a, b, c, d, e, f, h = null) {
        const k = dW(a.document.body.clientWidth);
        d = b.ra ? mW(a, b, d, k, e, f, h) : nW(a, b, d, k, e, f, h);
        Kp(d.isVisible(), !1, () => {
            gW = !1;
            for (const m of fW.g) m();
            fW.g.length = 0
        });
        d.show({
            Zf: !0
        });
        gW = !0;
        const l = new kW(a, b, c);
        hW(l);
        fW.g.push(() => {
            var m = b.L;
            var n = new Yn;
            n = mj(n, 1, c);
            var p = new Wn;
            n = B(n, 3, Zn, p);
            jW(m, n);
            l.g = !0
        })
    }

    function mW(a, b, c, d, e, f, h) {
        d = oW(a, b, c, e, f, {
            ei: d,
            ag: a.innerWidth,
            si: "100%",
            hj: "15px",
            ri: "13px",
            ij: "center",
            hh: 0
        }, h);
        return cC(a, d, {
            Mg: .95,
            ig: .95,
            zIndex: 2147483647,
            qc: !0,
            ze: "adpub-drawer-root",
            ye: !1,
            Ma: !0,
            Ee: new Q(pW(b.X, c))
        })
    }

    function nW(a, b, c, d, e, f, h) {
        a: {
            var k = b.V;
            var l = a.document.body.clientWidth;
            if (k.Ed) k = Math.min(l, k.Ed);
            else
                for (k = l * .9, l = l <= 768 ? 3 : 4; l >= 1; l--) {
                    const m = d.Oc * l + 42;
                    if (m <= k) {
                        k = m;
                        break a
                    }
                }
        }
        d = oW(a, b, c, e, f, {
            ei: d,
            ag: k,
            si: "600px",
            hj: "24px",
            ri: "24px",
            ij: "start",
            hh: 0
        }, h);
        return mB(a, d, {
            md: `${k}px`,
            jd: b.Z(),
            Yc: I(b.X, 14),
            zIndex: 2147483647,
            qc: !0,
            cg: !0,
            ze: "adpub-drawer-root",
            ye: !1,
            Ma: !0,
            Ee: new Q(pW(b.X, c))
        })
    }

    function oW(a, b, c, d, e, f, h) {
        if (e === DV)
            if (b.V.Wb) {
                d = b.ra ? .95 * a.innerHeight - 30 : a.innerHeight;
                e = b.l;
                var k = f.ag,
                    l = d,
                    m = b.Z(),
                    n = !!H(b.X, 13),
                    p = b.V.Ge.join(","),
                    q = Sz;
                m = "<style>#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans Text'; padding-bottom: 6px;" + (m ? "padding-right: 16px;" : "padding-left: 16px;") + '}</style><div id="gda-search-term">' + Qz(c) + "</div>";
                n ? h = "" : (h = "<script data-ad-intent-query=" + cA(c) + " data-ad-intent-qetid=" + cA(h) + " data-ad-intent-eids=" +
                    cA(p) + ' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=', p = encodeURIComponent(String(e)), fA.lastIndex = 0, p = fA.test(p) ? p.replace(fA, gA) : p, h = h + p + '" crossorigin="anonymous">\x3c/script>');
                c = q(m + h + '<ins class="adsbygoogle" style="display:inline-block;width:' + aA(W(k)) + "px;height:" + aA(W(l - 30)) + 'px" data-ad-client="' + aA(e) + '"></ins><script>(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1; (adsbygoogle = window.adsbygoogle || []).push({});\x3c/script>' + (n ?
                    "<script>const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " + String(c).replace(nA, kA) + ' and " + "property code = ' + String(e).replace(nA, kA) + '";\x3c/script>' : ""));
                e = b.Z() ? "rtl" : "ltr";
                b = Nd({
                    dir: e,
                    lang: I(b.X, 7),
                    style: Sd `margin:0px;height:100%;padding-top: ${f.hh}px;overflow: hidden;`
                }, Nz(c));
                a = a.document.createElement("IFRAME");
                x(a, {
                    border: "0",
                    width: "100%",
                    height: d + "px"
                });
                a.srcdoc = ud(b)
            } else a = qW(a, b, c, d);
        else a = e.mo(a, c, d);
        return a
    }

    function pW(a, b) {
        return I(a, 10).replace("TERM", b)
    }

    function qW(a, b, c, d) {
        const e = a.document.createElement("iframe");
        var f = b.X;
        const h = pW(f, c);
        f = new zA(e, I(f, 16), "anno-cse", eW(b.l, H(f, 22)), "ShoppingVariant", a.location, I(f, 7), h, b.V.Pb.filter(k => k !== 42), !1, void 0, !0, void 0, !0, b.l);
        f.J();
        rW(a, b, e, c, f, d);
        return e
    }

    function rW(a, b, c, d, e, f) {
        const h = sW(b, a.top, function(k) {
            k.data.action === "init" && k.data.adChannel === "ShoppingVariant" && tW(a, b, c, e, d, f)
        });
        fW.g.push(() => {
            a.top.removeEventListener("message", h)
        })
    }

    function tW(a, b, c, d, e, f) {
        H(b.X, 13) || yA(d, e, f);
        const h = c.contentDocument.documentElement,
            k = new ResizeObserver(() => {
                c.height = `${Math.ceil(h.offsetHeight+22)}px`
            });
        k.observe(h);
        const l = uW(b, 1066, a, () => {
            const m = h.offsetHeight;
            m && (c.height = `${m+22}px`)
        }, 1E3);
        fW.g.push(() => {
            k.disconnect();
            a.clearInterval(l)
        })
    };

    function vW(a, b, c) {
        b = b.getBoundingClientRect();
        a = dn(cn(new en, a), 3);
        c = oj(a, 4, c);
        c = Ti(c, 6, Math.round(b.x));
        return Ti(c, 7, Math.round(b.y))
    }

    function wW(a) {
        a = QV(a);
        var b = new an;
        b = Ti(b, 1, a[0]);
        b = Ti(b, 2, a[1]);
        b = Ti(b, 3, a[2]);
        return ri(b, 4, Qg(a[3]), 0)
    };
    const xW = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function yW(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || xW.test(a)
        }
    };

    function zW(a, b) {
        const c = new AW(b);
        for (const d of a) I(d, 5) && ii(d, 3, qh).forEach(e => {
            BW(c, e, e)
        });
        CW(c);
        return new DW(c)
    }

    function EW(a, b) {
        b = a.match(b);
        a = new Map;
        for (const c of b)
            if (b = c.l, a.has(b)) {
                const d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return Array.from(a.values())
    }
    var DW = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    };

    function BW(a, b, c) {
        const d = a.i.has(c) ? a.i.get(c) : a.l++;
        a.i.set(c, d);
        a.A.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.g[c].contains(f) || (a.g.push(new FW), a.g[a.size].A = c, a.g[a.size].B = f, a.g[c].j.set(f, a.size), a.size++);
            c = a.g[c].j.get(f)
        }
        a.g[c].l = !0;
        a.g[c].C = d;
        a.g[c].G = a.j.length;
        a.j.push(b.length)
    }

    function CW(a) {
        const b = [];
        for (b.push(0); b.length > 0;) {
            const f = b.shift();
            var c = a,
                d = c.g[f];
            if (f === 0) d.g = 0, d.i = 0;
            else if (d.A === 0) d.g = 0, d.i = d.l ? f : c.g[c.g[f].g].i;
            else {
                d = c.g[c.g[f].A].g;
                for (var e = c.g[f].B;;) {
                    if (c.g[d].contains(e)) {
                        c.g[f].g = c.g[d].j.get(e);
                        break
                    }
                    if (d === 0) {
                        c.g[f].g = 0;
                        break
                    }
                    d = c.g[d].g
                }
                c.g[f].i = c.g[f].l ? f : c.g[c.g[f].g].i
            }
            for (const h of a.g[f].ua) b.push(h)
        }
    }
    class AW {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.g = [new FW];
            this.j = [];
            this.i = new Map;
            this.A = new Map;
            this.l = 0
        }
        isEmpty() {
            return this.l === 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let h = 0; h < a.length; h++) {
                for (;;) {
                    var d = a.charCodeAt(h),
                        e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (b === 0) break;
                    b = e.g
                }
                let k = b;
                for (;;) {
                    k = this.g[k].i;
                    if (k === 0) break;
                    const l = h + 1 - this.j[this.g[k].G],
                        m = h;
                    d = a;
                    e = m;
                    var f = this.C;
                    yW(d.charAt(l - 1), f) && yW(d.charAt(e + 1), f) && c.push(new GW(l, m, this.A.get(this.g[k].C)));
                    k = this.g[k].g
                }
            }
            return c
        }
    }
    class FW {
        constructor() {
            this.j = new Map;
            this.I = !1;
            this.ia = this.H = this.F = this.ca = this.M = this.R = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set A(a) {
            this.R = a
        }
        get A() {
            return this.R
        }
        set B(a) {
            this.M = a
        }
        get B() {
            return this.M
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set C(a) {
            this.H = a
        }
        get C() {
            return this.H
        }
        set g(a) {
            this.ca = a
        }
        get g() {
            return this.ca
        }
        set i(a) {
            this.F = a
        }
        get i() {
            return this.F
        }
        set G(a) {
            this.ia = a
        }
        get G() {
            return this.ia
        }
        get ua() {
            return this.j.values()
        }
    }
    var GW = class {
        constructor(a, b, c) {
            this.j = a;
            this.i = b;
            this.C = c
        }
        get l() {
            return this.j
        }
        get A() {
            return this.i
        }
        get g() {
            return this.C
        }
        get length() {
            return this.i - this.j
        }
    };
    async function HW(a, b, c, d, e) {
        const f = zW(yV(b.X), b.i);
        if (!f.isEmpty()) {
            var h = new Map;
            for (const k of yV(b.X).filter(l => I(l, 5))) ii(k, 3, qh).forEach(l => {
                h.set(l, I(k, 1))
            });
            await IW(a, a.document.body, b, f, h, new Set, c, d, e)
        }
    }
    async function IW(a, b, c, d, e, f, h, k, l) {
        h.g.qa(9) >= h.i && await LV(h, 10);
        if (b.nodeType !== Node.ELEMENT_NODE || !b.classList ? .contains("google-anno-skip"))
            if (c.V.Ne && f.size && b.nodeType === Node.ELEMENT_NODE && JW(a, b) && b.parentElement && KW(a, f, c, k, b.parentElement, b), b.nodeType === Node.TEXT_NODE && b.textContent) EW(d, b.textContent).map(m => e.get(m.g)).filter(m => !!m).forEach(m => void f.add(m));
            else {
                for (const m of b.childNodes) await IW(a, m, c, d, e, f, h, k, l);
                f.size && b.nodeType === Node.ELEMENT_NODE && ["block", "table-cell"].includes(a.getComputedStyle(b).display) &&
                    KW(a, f, c, k, b, null)
            }
    }

    function KW(a, b, c, d, e, f) {
        for (const h of b) {
            const k = vW(c.L.Xe++, f ? ? e, h);
            d.entries.push(Th(k));
            if (H(c.X, 17)) continue;
            const l = bW(a, c, h, e),
                m = LW(l, c, Fi(nh($h(k, 10)), "0"));
            MW(c, 999, l, n => {
                try {
                    if (c.Ta === EV) return !1;
                    var p = c.L,
                        q = Qn(kn(h), Fi(nh($h(k, 10)), "0"));
                    var t = Ui(q, 7, m.i);
                    const w = NW(p, t);
                    lW(a, c, w, h, c.C.get(h) || "", c.Ta);
                    return !1
                } finally {
                    n.preventDefault()
                }
            });
            e.insertBefore(l, f)
        }
        b.clear()
    }

    function JW(a, b) {
        return ["BR", "IMG", "TABLE"].includes(b.tagName) || a.getComputedStyle(b).display === "block"
    }
    class OW {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function LW(a, b, c) {
        const d = new OW;
        PW(b, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = c;
                    e = b.L;
                    var h = new Om;
                    h = f = ri(h, 1, mh(f), "0");
                    f = e.handle;
                    var k = QW(e, 17);
                    h = B(k, 16, ao, h);
                    e = f.call(e, h);
                    d.g = e
                } else d.g && (e = b.L, f = new Nm, h = f = mj(f, 1, d.g), f = e.handle, k = QW(e, 18), h = B(k, 17, ao, h), f.call(e, h), d.g = null)
        }).observe(a);
        return d
    };

    function RW(a, b, c, d, e, f) {
        if (!a.g) {
            var h = b.document.createElement("span");
            h.appendChild(XV(b, "12px"));
            h.appendChild(b.document.createTextNode(d));
            tE(b, c || null, {
                informationText: h
            }, e, f ? k => {
                var l = f.handle,
                    m = QW(f, 20);
                k = B(m, 11, ao, k);
                l.call(f, k)
            } : f);
            a.g = !0
        }
    }
    var SW = class {
        constructor() {
            this.g = !1
        }
    };

    function TW(a, b) {
        const c = b.ra === b.Z;
        var d = UW(a, b, c);
        if (!d) return null;
        d = d.position.od();
        a = VW(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.U - f.right : f.left
        });
        if (!a || a - 16 < 200) return null;
        const e = b.U;
        return {
            sa: c ? e - a : 16,
            Ca: c ? 16 : e - a,
            ga: d
        }
    }

    function WW(a, b) {
        const c = Vo(a),
            d = Wo(a);
        return NC(new RC(a), new mk(d - b.ga - 50, c - b.Ca, d - b.ga, b.sa)).size > 0
    }

    function UW(a, b, c) {
        b = Math.floor(b.W * .3);
        return b < 66 ? null : mD(a, {
            Ub: c ? sD({
                ga: 16,
                Ca: 16
            }) : qD({
                ga: 16,
                sa: 16
            }),
            Se: b - 66,
            Ab: 50,
            Ve: 50,
            Dd: b,
            mb: 16
        }, [a.document.body]).ke
    }

    function VW(a, b, c, d) {
        a = c.ra ? XW(a, b, c) : YW(a, b, c);
        b = c.U;
        let e = c.ra ? b : b * .35;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return e < 16 ? null : e - 16
    }

    function XW(a, b, c) {
        const d = c.W;
        return NC(new RC(a), new mk(d - b - 50, c.U - 16, d - b, 16))
    }

    function YW(a, b, c) {
        const d = c.W,
            e = c.U;
        c = c.Z;
        return NC(new RC(a), new mk(d - b - 50, (c ? e * .35 : e) - 16, d - b, (c ? 16 : e * .65) + 16))
    }

    function ZW(a, b, c) {
        const d = a.Z;
        return {
            sa: d ? $W(a, b, c) : c,
            Ca: d ? c : $W(a, b, c),
            ga: 16
        }
    }

    function $W(a, b, c) {
        const d = a.U;
        return a.ra ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function aX(a, b) {
        const c = b.Z,
            d = b.U;
        a = b.ra ? XW(a, 16, b) : YW(a, 16, b);
        return Array.from(a).map(e => new lD(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function bX(a, b, c, d, e, f, h, k, l) {
        x(c, {
            width: "50px",
            bottom: h ? h.ga + "px" : "16px",
            left: b.Z() === b.ra ? "" : h ? h.sa + "px" : "16px",
            right: b.Z() === b.ra ? h ? h.Ca + "px" : "16px" : ""
        });
        c.role = "button";
        c.ariaLabel = I(b.X, 20);
        x(e, {
            display: "none"
        });
        x(d, {
            display: "none"
        });
        const m = ZV(a, "20px", b.V.Qa || "inherit", b.g.get(l.ya) || 0);
        a = a.document.createElement("SPAN");
        x(a, {
            display: "inline-block",
            position: "absolute",
            top: "14px",
            left: "15px",
            cursor: "pointer"
        });
        x(m, {
            cursor: "pointer"
        });
        c.appendChild(a);
        a.appendChild(m);
        MW(b, 1064, c, n => {
            k ? .();
            m.remove();
            x(c, {
                bottom: h ? h.ga + "px" : "16px",
                left: h ? h.sa + "px" : b.ra ? "16px" : b.Z() ? "16px" : "65%",
                right: h ? h.Ca + "px" : cX(b),
                width: ""
            });
            c.role = "";
            c.ariaLabel = "";
            x(e, {
                display: ""
            });
            x(d, {
                display: "flex"
            });
            f.focus();
            n.preventDefault();
            return !1
        });
        c.focus()
    }

    function cX(a) {
        return a.Z() ? a.ra ? "16px" : "65%" : "16px"
    }

    function dX(a) {
        return {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (a.Z(), "50px"),
            right: a.Z() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: a.V.Qa || "#FFFFFF",
            cursor: "pointer",
            transition: "width 5s"
        }
    }

    function eX(a) {
        return {
            "margin-left": a ? "6px" : "4px",
            "margin-right": a ? "4px" : "6px",
            "margin-top": "12px"
        }
    }

    function fX(a, b, c) {
        a.tabIndex = 0;
        a.role = "link";
        a.ariaLive = "polite";
        a.ariaLabel = c.replace("TERM", b)
    };

    function gX(a, b, c, d, e, f, h, k, l) {
        const m = document.createElement("SPAN");
        x(m, rs(a));
        m.id = "gda";
        m.appendChild(aW(a, I(b.X, 18), b.V.Qa));
        MW(b, 1064, m, n => {
            h ? .();
            bX(a, b, c, d, m, e, f, k, l);
            n.preventDefault();
            n.stopImmediatePropagation();
            return !1
        });
        return m
    }

    function hX(a, b, c, d) {
        const e = document.createElement("SPAN");
        x(e, rs(a));
        WV(e);
        x(e, dX(b));
        b.ra || x(e, {
            "justify-content": ""
        });
        const f = ZV(a, "20px", b.V.Qa, b.g.get(d.ya) || 0),
            h = document.createElement("SPAN");
        x(h, {
            display: "inline-block",
            cursor: "inherit"
        });
        x(h, eX(b.Z()));
        e.appendChild(h);
        h.appendChild(f);
        c.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        fX(c, d.ya, I(b.X, 19));
        x(c, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: b.V.Qa || "inherit"
        });
        MW(b, 999, e, k => {
            k.preventDefault();
            if (b.Ta !== EV && (d.Jf ? ? 0) + 800 <= b.qa(25)) {
                k = d.ya;
                const n = b.A.get(k) || "";
                var l = b.L;
                var m = Qn(kn(k), d.Bc);
                m = Ui(m, 3, d.xd);
                l = NW(l, m);
                lW(a, b, l, k, n, b.Ta, b.V.Wb ? b.j.get(k) || "" : null)
            }
            return !1
        });
        e.appendChild(c);
        return e
    }

    function iX(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                c.type === "attributes" && a.document.body.style.paddingBottom === "0px" && x(a.document.body, {
                    "padding-bottom": "66px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function jX(a, b, c, d, e, f) {
        var h = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
        x(a.document.body, {
            "padding-bottom": (h && h.length ? Number(h[0]) : 0) + 66 + "px"
        });
        iX(a);
        h = document.createElement("div");
        x(h, rs(a));
        h.id = "google-anno-sa";
        h.dir = b.Z() ? "rtl" : "ltr";
        h.tabIndex = 0;
        var k = {
            background: b.V.ee || "#1A73E8",
            "border-style": "solid",
            bottom: d ? d.ga + "px" : "16px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: d ? d.sa + "px" : b.ra ? "16px" : b.Z() ? "16px" : "65%",
            right: d ?
                d.Ca + "px" : cX(b),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        };
        x(h, k);
        x(h, {
            fill: "white"
        });
        const l = document.createElement("SPAN");
        x(l, rs(a));
        x(l, {
            cursor: "inherit"
        });
        k = hX(a, b, l, c);
        a = gX(a, b, h, k, l, d, e, f, c);
        h.appendChild(k);
        h.appendChild(a);
        return h
    }

    function kX(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.ya);
        if ((d.g.get(e) || 0) !== (d.g.get(a.ya) || 0)) {
            b = ZV(b, "20px", d.V.Qa, d.g.get(a.ya) || 0);
            for (var h of c.getElementsByClassName("google-anno-sa-intent-icon")) h.replaceWith(b)
        }
        c = a.ya;
        h = I(d.X, 19);
        f.ariaLabel = h.replace("TERM", c);
        d = d.L;
        f = new Sm;
        f = ci(f, 2, mh(a.Bc));
        f = oj(f, 4, a.ya);
        a = d.handle;
        c = QW(d, 15);
        f = B(c, 6, ao, f);
        return a.call(d, f)
    }

    function lX(a, b, c, d) {
        if (WW(b, d)) return null;
        a.Jf = c.qa(24);
        d = jX(b, c, a, d, () => {
            var f = c.L;
            var h = new Pm;
            h = ri(h, 3, mh(a.Bc), "0");
            var k = oj(h, 2, a.ya);
            h = f.handle;
            var l = QW(f, 22);
            k = B(l, 12, ao, k);
            return h.call(f, k)
        }, () => {
            var f = c.L,
                h = new Qm,
                k = f.handle,
                l = QW(f, 23);
            h = B(l, 13, ao, h);
            return k.call(f, h)
        });
        const e = kX(a, b, d, c, a.ya);
        b.document.body.appendChild(d);
        return e
    }

    function mX(a, b, c, d, e, f, h) {
        if (a.ya !== e || a.Bc !== d || a.g !== f) {
            if (a.xd !== null) {
                var k = a.xd,
                    l = c.L;
                var m = new Rm;
                m = mj(m, 1, k);
                k = l.handle;
                var n = QW(l, 16);
                m = B(n, 7, ao, m);
                k.call(l, m)
            }
            l = a.ya;
            a.ya = e;
            a.Bc = d;
            a.g = f;
            H(c.X, 17) || (d = b.document.getElementById("google-anno-sa"), a.xd = d ? kX(a, b, d, c, l) : lX(a, b, c, h))
        }
    }
    var nX = class {
        constructor() {
            this.ya = "";
            this.Bc = null;
            this.g = "";
            this.Jf = this.xd = null
        }
    };

    function oX(a, b) {
        a.g >= a.i.length && (a.g = 0);
        if (gW) fW.g.push(() => void oX(a, b));
        else {
            var c = a.i[a.g++];
            a.j = !1;
            mX(a.A, a.win, a.config, c.i, c.g, c.j, a.l);
            iW(a.config, 898, a.win, () => void oX(a, b), a.rf)
        }
    }
    var pX = class {
        constructor(a, b, c) {
            var d = new nX;
            this.win = a;
            this.config = b;
            this.A = d;
            this.l = c;
            this.i = [];
            this.j = !0;
            this.g = 0;
            this.rf = b.params.rf
        }
    };
    class qX {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.j = c
        }
    };

    function rX(a, b, c, d, e) {
        c.forEach(f => {
            var h = a.L.Xe++;
            h = dn(cn(new en, h), 1);
            h = oj(h, 4, f);
            d.entries.push(Th(h));
            h = Fi(nh($h(h, 10)), "0");
            e.i.push(new qX(h, f, f));
            e.j && oX(e, b)
        })
    };
    const sX = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function tX(a, b, c, d, e) {
        d.g.qa(5) >= d.i && await LV(d, 6);
        if (!c.V.Be) {
            const f = yV(c.X);
            f.length && uX(a, b, c, e, f)
        }
        c.V.Ce || await c.na(898, HW(a, c, d, e, b));
        c.V.De || await vX(a, c, () => new SW, d, e)
    }
    async function vX(a, b, c, d, e) {
        var f = yV(b.X);
        var h = new AW(b.i);
        for (const k of f) I(k, 6) !== "" && (f = I(k, 1), BW(h, f, f));
        CW(h);
        h = new DW(h);
        h.isEmpty() || await b.na(898, wX(a, b, d, e, h, new UV(b.params.Tj, b.params.gf, b.params.ie, b.params.Ob), c()))
    }
    async function wX(a, b, c, d, e, f, h) {
        let k = a.document.body;
        if (H(b.X, 17) || z(b.X, Fr, 21))
            for (; k;) {
                c.g.qa(7) >= c.i && await LV(c, 8);
                if (k.nodeType === Node.TEXT_NODE && k.textContent !== "" && k.parentElement) {
                    const Qb = k.parentElement;
                    a: {
                        var l = a,
                            m = b,
                            n = Qb,
                            p = k.textContent,
                            q = d,
                            t = e,
                            w = f;
                        const Cb = [];b: {
                            var C = p;
                            switch (m.i) {
                                case 1:
                                    var E = C;
                                    const jc = Array(E.length);
                                    let pb = 0;
                                    for (let Db = 0; Db < E.length; Db++) xW.test(E[Db]) || pb++, jc[Db] = pb;
                                    var F = jc;
                                    break b;
                                default:
                                    var L = C;
                                    const kc = Array(L.length);
                                    let Ec = 0,
                                        $a = 0;
                                    for (; $a < L.length;) {
                                        for (;
                                            /\s/.test(L[$a]);) kc[$a] =
                                            Ec, $a++;
                                        let Db = !1;
                                        for (; $a < L.length && !/\s/.test(L[$a]);) Db = !0, kc[$a] = Ec, $a++;
                                        Db && (Ec++, kc[$a - 1] = Ec)
                                    }
                                    F = kc
                            }
                        }
                        const ob = F,
                            gj = p.includes("\u00bb") ? [] : EW(t, p);
                        let ae = -1;
                        for (const jc of gj) {
                            const pb = jc.l,
                                kc = jc.A;
                            if (m.V.cf && pb < ae) continue;
                            var G = w,
                                Z = jc.g;
                            VV(G.g, G.i + ob[pb]);
                            var O = G,
                                Ca = O.g,
                                ab = Z;
                            if (!((Ca.g.has(ab) ? Ca.g.get(ab).length : 0) < O.gf && G.g.j < G.ie)) continue;
                            const Ec = l.getComputedStyle(n),
                                $a = Ec.fontSize.match(/\d+/);
                            if (!($a && Number($a[0]) >= 12 && Number($a[0]) <= 22 && Ya(sX, Ec.display))) {
                                w.i += ob[ob.length - 1];
                                var Kb = [];
                                break a
                            }
                            const Db = ae + 1;
                            Db < pb && Cb.push(l.document.createTextNode(p.substring(Db, pb)));
                            const Bg = p.substring(pb, kc + 1);
                            var la = p,
                                yb = pb,
                                Cc = kc + 1;
                            const hj = la.substring(Math.max(yb - 30, 0), yb) + "~~" + la.substring(Cc, Math.min(Cc + 30, la.length));
                            var Dc = l,
                                $d = m.L.Xe++,
                                fa = n,
                                Vc = Bg,
                                Wi = hj,
                                Xi = jc.g,
                                Yi = ob[pb];
                            const Cg = fa.getBoundingClientRect();
                            var Zi = dn(cn(new en, $d), 2);
                            var nn = oj(Zi, 2, Vc);
                            var on = oj(nn, 3, Wi);
                            var pn = oj(on, 4, Xi);
                            var qn = Ti(pn, 5, Yi);
                            var rn = Ti(qn, 6, Math.round(Cg.x));
                            var sn = Ti(rn, 7, Math.round(Cg.y));
                            const Fc =
                                Dc.getComputedStyle(fa);
                            var tn = new bn;
                            var un = oj(tn, 1, Fc.fontFamily);
                            var vn = wW(Fc.color);
                            var wn = A(un, 7, vn);
                            var xn = wW(Fc.backgroundColor);
                            var yn = A(wn, 8, xn);
                            const Dg = Fc.fontSize.match(/^(\d+(\.\d+)?)px$/);
                            var wg = Ti(yn, 4, Dg ? Math.round(Number(Dg[1])) : 0);
                            const Re = Math.round(Number(Fc.fontWeight));
                            isNaN(Re) || Re === 400 || Ti(wg, 5, Re);
                            Fc.textDecorationLine !== "none" && oj(wg, 6, Fc.textDecorationLine);
                            var zn = A(sn, 8, wg);
                            const Se = [];
                            let td = fa;
                            for (; td && Se.length < 20;) {
                                var aj = Se,
                                    An = aj.push,
                                    xg = td,
                                    Bn = new $m;
                                const Fg = oj(Bn,
                                    1, xg.tagName);
                                xg.className !== "" && qi(Fg, 2, xg.className.split(" "), oh);
                                An.call(aj, Fg);
                                if (td.tagName === "BODY") break;
                                td = td.parentElement
                            }
                            var Cn = Se.reverse();
                            const Eg = Ci(zn, 9, Cn);
                            q.entries.push(Th(Eg));
                            Cb.push(xX(l, m, Fi(nh($h(Eg, 10)), "0"), jc.g, Bg, n));
                            var Qe = w.g,
                                yg = jc.g,
                                Dn = w.i + ob[pb];
                            let Te = [];
                            Qe.g.has(yg) && (Te = Qe.g.get(yg));
                            Te.push(Dn);
                            Qe.i++;
                            Qe.g.set(yg, Te);
                            ae = kc;
                            if (w.Ob > 0 && w.g.j >= w.Ob) break
                        }
                        const zg = ae + 1;zg !== 0 && zg < p.length && Cb.push(l.document.createTextNode(p.substring(zg)));w.i += ob[ob.length - 1];Kb =
                        Cb
                    }
                    const Wc = Kb;
                    if (Wc.length && !H(b.X, 17)) {
                        !b.V.Wb && RW(h, a, b.params.Yf ? GV(a, b.params.Yf) : void 0, I(b.X, 3), z(b.X, Fr, 21).i(), b.L);
                        for (const Cb of Wc) Qb.insertBefore(Cb, k), yX(Cb);
                        Qb.removeChild(k);
                        for (k = Wc[Wc.length - 1]; k.lastChild;) k = k.lastChild;
                        if (f.Ob > 0 && f.g.j >= f.Ob) break
                    }
                }
                a: {
                    var Bb = k,
                        En = f,
                        Fn = b.i;
                    if (Bb.firstChild && (Bb.nodeType !== Node.ELEMENT_NODE ? 0 : !Bb.classList ? .contains("google-anno-skip") && Bb.offsetHeight)) {
                        b: {
                            switch (Bb.tagName ? .toUpperCase ? .()) {
                                case "IFRAME":
                                case "A":
                                case "AUDIO":
                                case "BUTTON":
                                case "CANVAS":
                                case "CITE":
                                case "CODE":
                                case "EMBED":
                                case "FOOTER":
                                case "FORM":
                                case "KBD":
                                case "LABEL":
                                case "OBJECT":
                                case "PRE":
                                case "SAMP":
                                case "SCRIPT":
                                case "SELECT":
                                case "STYLE":
                                case "SUB":
                                case "SUPER":
                                case "SVG":
                                case "TEXTAREA":
                                case "TIME":
                                case "VAR":
                                case "VIDEO":
                                case null:
                                    var bj = !1;
                                    break b
                            }
                            bj = !(Bb.className.toUpperCase ? .() ? .includes("CRUMB") || Bb.id.toUpperCase ? .() ? .includes("CRUMB"))
                        }
                        if (bj) {
                            k = Bb.firstChild;
                            break a
                        }
                        if (Bb.textContent ? .length) {
                            var cj = En;
                            b: {
                                var dj = Bb.textContent;
                                switch (Fn) {
                                    case 1:
                                        var ej = dj;
                                        let Wc = 0;
                                        for (let ob = ej.length - 1; ob >= 0; ob--) xW.test(ej[ob]) || Wc++;
                                        var fj = Wc;
                                        break b;
                                    default:
                                        const Cb = dj.trim();
                                        fj = Cb === "" ? 0 : Cb.split(/\s+/).length
                                }
                            }
                            VV(cj.g, cj.i + fj)
                        }
                    }
                    let Qb = Bb;
                    for (;;) {
                        if (Qb.nextSibling) {
                            k = Qb.nextSibling;
                            break a
                        }
                        if (!Qb.parentNode) {
                            k = null;
                            break a
                        }
                        Qb = Qb.parentNode
                    }
                    k =
                    void 0
                }
            }
    }

    function zX(a, b) {
        b = {
            Z: b.Z(),
            ra: b.ra,
            U: Vo(a),
            W: Wo(a)
        };
        if (b.W >= 400) {
            var c;
            if ((c = TW(a, b)) != null) var d = c;
            else a: {
                c = b.U;
                var e = aX(a, b);a = 16;
                for (d of e) {
                    e = d.start;
                    const f = d.end;
                    if (e > a) {
                        if (e - a - 16 >= 200) {
                            d = ZW(b, e, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                d = c - a - 16 >= 200 ? ZW(b, c, a) : null
            }
        } else d = null;
        return d
    }

    function uX(a, b, c, d, e) {
        function f() {
            return k ? ? (k = uW(c, 898, a, () => {
                h || (a.clearInterval(k), h = !0, AX(a, b, c, d, e), BX(c.L, JV(d, c.X)))
            }, c.V.ac))
        }
        let h = !1,
            k = void 0;
        const l = CX(c, a, () => {
            window.scrollY <= c.V.ge || h || (c.V.ac > 0 && !zX(a, c) ? k = f() : (h = !0, a.removeEventListener("scroll", l), AX(a, b, c, d, e), BX(c.L, JV(d, c.X))))
        });
        iW(c, 898, a, () => {
            h || (c.V.ac > 0 && !zX(a, c) ? k = f() : (h = !0, AX(a, b, c, d, e), BX(c.L, JV(d, c.X))))
        }, c.V.fe)
    }

    function AX(a, b, c, d, e) {
        e = e.filter(h => I(h, 7).length).map(h => I(h, 1));
        if (e.length !== 0) {
            var f = zX(a, c);
            f && (c.V.nf || lb(e), rX(c, b, e, d, new pX(a, c, f)))
        }
    }

    function yX(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if (a.tagName === "A") {
                var b = SV(QV(getComputedStyle(a.parentElement).color)),
                    c = SV(QV(getComputedStyle(a).color));
                var d = RV(a);
                if (d = b && c && d ? pN(c, d) < Math.min(pN(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = b < 16 ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    x(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) yX(a.children[b])
        }
    }
    class DX {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function xX(a, b, c, d, e, f) {
        const h = a.document.createElement("SPAN");
        h.className = "google-anno-t";
        WV(h);
        x(h, {
            "text-decoration": "underline"
        });
        x(h, {
            "text-decoration-style": "dotted"
        });
        x(h, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        h.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        WV(e);
        x(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        ee(e);
        e.className = "google-anno";
        e.appendChild(XV(a, a.getComputedStyle(f).fontSize));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(h);
        const k = EX(b, c, e);
        MW(b, 999, e, l => {
            try {
                if (b.Ta === EV) return !1;
                var m = b.L,
                    n = Qn(kn(d), c);
                var p = Ui(n, 2, k.i);
                const q = NW(m, p);
                lW(a, b, q, d, b.B.get(d) || "", b.Ta, b.V.Wb ? b.j.get(d) || "" : null);
                return !1
            } finally {
                l.preventDefault(), l.stopImmediatePropagation()
            }
        });
        return e
    }

    function EX(a, b, c) {
        const d = new DX;
        PW(a, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = b;
                    e = a.L;
                    var h = new Vn;
                    h = f = ri(h, 2, mh(f), "0");
                    f = e.handle;
                    var k = QW(e, 13);
                    h = B(k, 4, ao, h);
                    e = f.call(e, h);
                    d.g = e
                } else d.g && (e = a.L, f = new Un, h = f = mj(f, 1, d.g), f = e.handle, k = QW(e, 14), h = B(k, 5, ao, h), f.call(e, h), d.g = null)
        }).observe(c);
        return d
    };

    function jW(a, b) {
        var c = a.handle,
            d = QW(a, 19);
        b = B(d, 9, ao, b);
        c.call(a, b)
    }

    function NW(a, b) {
        var c = a.handle,
            d = QW(a, 12);
        b = B(d, 8, ao, b);
        return c.call(a, b)
    }

    function BX(a, b) {
        var c = a.handle,
            d = QW(a, 11);
        b = B(d, 14, ao, b);
        c.call(a, b)
    }

    function QW(a, b) {
        var c = new $n;
        var d = a.C++;
        c = mj(c, 1, d);
        b = mj(c, 2, Math.round(a.g.qa(b) - a.i));
        b = A(b, 10, a.j);
        return Ri(b, 15, a.l ? !0 : void 0)
    }
    var FX = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.i = b;
            this.j = c;
            this.l = d;
            this.Xe = this.C = 1;
            this.A = [...e]
        }
        handle(a) {
            for (const b of this.A) b(a);
            return Ki(a, 1)
        }
    };

    function iW(a, b, c, d, e) {
        c.setTimeout(GX(a, b, d), e)
    }

    function sW(a, b, c) {
        a = GX(a, 999, c);
        b.addEventListener("message", a);
        return a
    }

    function uW(a, b, c, d, e) {
        return c.setInterval(GX(a, b, d), e)
    }

    function MW(a, b, c, d) {
        c.addEventListener("click", GX(a, b, d))
    }

    function PW(a, b) {
        return new IntersectionObserver(GX(a, 1065, b), {
            threshold: .98
        })
    }

    function CX(a, b, c) {
        a = GX(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function GX(a, b, c) {
        return a.Ia.Da(b, c, void 0, d => {
            d.es = a.V.Pb.join(",")
        })
    }
    var IX = class {
        constructor(a, b, c, d, e, f, h, k, l, m) {
            this.l = a;
            this.ra = b;
            this.X = c;
            this.Ia = d;
            this.L = e;
            this.ta = f;
            this.G = h;
            this.params = k;
            this.V = l;
            this.Ta = m;
            this.B = new Map;
            this.A = new Map;
            this.C = new Map;
            this.g = new Map;
            this.j = new Map;
            this.i = Ya(HX, I(c, 7)) ? 1 : 0;
            for (const n of yV(this.X)) D(n, 6) != null && this.B.set(I(n, 1), I(n, 6)), D(n, 7) != null && this.A.set(I(n, 1), I(n, 7)), D(n, 5) != null && this.C.set(I(n, 1), I(n, 5)), Ii(n, 10) != null && this.g.set(I(n, 1), Mi(n, 10)), D(n, 11) != null && this.j.set(I(n, 1), I(n, 11))
        }
        na(a, b) {
            this.Ia.na(a, b, c => {
                c.es = this.V.Pb.join(",")
            });
            return b
        }
        qa(a) {
            return this.G.qa(a)
        }
        Z() {
            return Mi(this.X, 12) === 2
        }
    };
    const HX = ["ja", "zh_CN", "zh_TW"];

    function JX(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function KX(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function LX() {
        const a = new Set,
            b = px();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function MX(a) {
        a = a.id;
        return a != null && (LX().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function NX(a, b, c) {
        if (!a.sources) return !1;
        switch (OX(a)) {
            case 2:
                const d = PX(a);
                if (d) return c.some(f => QX(d, f));
                break;
            case 1:
                const e = RX(a);
                if (e) return b.some(f => QX(e, f))
        }
        return !1
    }

    function OX(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function RX(a) {
        return SX(a, b => b.currentRect)
    }

    function PX(a) {
        return SX(a, b => b.previousRect)
    }

    function SX(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function QX(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function TX() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(MX),
            b = [...LX()].map(c => document.getElementById(c)).filter(c => c !== null);
        UX = window.scrollX;
        VX = window.scrollY;
        return WX = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function XX(a, b) {
        const c = UX !== window.scrollX || VX !== window.scrollY ? [] : WX,
            d = TX();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                YX(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Bb = Math.floor(b.renderTime || b.loadTime);
                a.ib = b.size;
                break;
            case "first-input":
                b = e;
                a.Fa = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ka = !0;
                a.g.some(f => f.entries.some(h => e.duration === h.duration && e.startTime === h.startTime)) || ZX(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.B +=
                    b;
                a.H = Math.max(a.H, b);
                a.ca += 1;
                break;
            case "event":
                ZX(a, e);
                break;
            default:
                ge(b, void 0)
        }
    }

    function $X(a) {
        a.A || (a.A = new PerformanceObserver(Kv(640, b => {
            XX(a, b)
        })));
        return a.A
    }

    function aY(a) {
        const b = Kv(641, () => {
                qP(document) === 2 && bY(a)
            }),
            c = Kv(641, () => void bY(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.ua = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            $X(a).disconnect()
        }
    }

    function bY(a) {
        if (!a.zf) {
            a.zf = !0;
            $X(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += KX("cls", a.G), b += KX("mls", a.I), b += JX("nls", a.R), window.LayoutShiftAttribution && (b += KX("cas", a.C), b += JX("nas", a.yf), b += KX("was", a.Qf)), b += KX("wls", a.ia), b += KX("tls", a.Of));
            window.LargestContentfulPaint && (b += JX("lcp", a.Bb), b += JX("lcps", a.ib));
            window.PerformanceEventTiming && a.Ka && (b += JX("fid", a.Fa));
            window.PerformanceLongTaskTiming && (b += JX("cbt", a.B),
                b += JX("mbt", a.H), b += JX("nlt", a.ca));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) MX(c) && d++;
            b += JX("nif", d);
            b += JX("ifi", Rk(window));
            c = N(Eo).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${u===u.top?1:0}`;
            b += a.Bf ? `&${"qqid"}=${encodeURIComponent(a.Bf)}` : JX("pvsid", xf(u));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.A ? a.hb : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += JX("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.ua()
        }
    }

    function YX(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.G += Number(b.value);
            Number(b.value) > a.I && (a.I = Number(b.value));
            a.R += 1;
            if (c = NX(b, c, d)) a.C += b.value, a.yf++;
            if (b.startTime - a.Nc > 5E3 || b.startTime - a.Af > 1E3) a.Nc = b.startTime, a.i = 0, a.j = 0;
            a.Af = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.ia && (a.ia = a.i, a.Qf = a.j, a.Of = b.startTime + b.duration)
        }
    }

    function ZX(a, b) {
        cY(a, b);
        const c = a.g[a.g.length - 1],
            d = a.F[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.F[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.F[e.id]
        })
    }

    function cY(a, b) {
        b.interactionId && (a.M = Math.min(a.M, b.interactionId), a.l = Math.max(a.l, b.interactionId), a.hb = a.l ? (a.l - a.M) / 7 + 1 : 0)
    }
    var dY = class {
            constructor() {
                this.j = this.i = this.R = this.I = this.G = 0;
                this.Af = this.Nc = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.F = {};
                this.hb = 0;
                this.M = Infinity;
                this.Fa = this.ib = this.Bb = this.yf = this.Qf = this.C = this.Of = this.ia = this.l = 0;
                this.Ka = !1;
                this.ca = this.H = this.B = 0;
                this.A = null;
                this.zf = !1;
                this.ua = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Bf = a ? a.getAttribute("data-google-query-id") : null;
                this.ii = {
                    ai: !1
                }
            }
            observe() {
                var a = window;
                if (!a.google_plmetrics && window.PerformanceObserver) {
                    a.google_plmetrics = !0;
                    a = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    this.ii.ai && a.push("event");
                    for (const b of a) a = {
                        type: b,
                        buffered: !0
                    }, b === "event" && (a.durationThreshold = 40), $X(this).observe(a);
                    aY(this)
                }
            }
        },
        UX, VX, WX = [];
    async function eY(a, b, c, d, e, f, h, k) {
        var l = V,
            m = jx,
            n = ((k = TO(new XO(a), "__gads", k)) ? Ye(k + "t2Z7mVic") % 20 : null) ? ? Math.floor(Ve() * 20);
        k = f.qa(0);
        const p = Vo(a) < 488,
            q = c.X;
        var t = c.V;
        n = Rn(n);
        t = si(n, t.Pb);
        e = new FX(f, k, t, H(q, 17), e);
        l = new IX(d, p, q, l, e, m, f, c.params, c.V, c.Ta);
        d = new KV;
        b = await fY(a, a.document, b, l, h, d);
        c = HV(d, p, c.bd, a.location.hostname, c.Mi, q, f.qa(11) - k, b);
        a = e.handle;
        f = QW(e, 11);
        c = B(f, 3, ao, c);
        a.call(e, c)
    }
    async function fY(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !gY(b)) return [Wm()];
        e.g.qa(3) >= e.i && await LV(e, 4);
        b = (b = I(d.X, 7)) ? (b = b.match(/^[a-z]{2,3}/i)) ? b[0].toLowerCase() : "" : "";
        f.language = b;
        b = [];
        if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) {
            var h = b.push;
            var k = new Xm;
            var l = new Vm;
            k = B(k, 3, Ym, l);
            h.call(b, k)
        }
        b.length || await tX(a, c, d, e, f);
        return b
    }

    function gY(a) {
        try {
            (new ResizeObserver(() => {})).disconnect(), (new MutationObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    }

    function hY() {
        var a = U(qu),
            b = V;
        if (Math.random() < a) try {
            (new dY).observe()
        } catch (c) {
            b.ba(1161, c instanceof Error ? c : Error("Unknown error."))
        }
    };
    async function iY(a, b, c, d, e, f, h) {
        hc() || (hY(), d.push(async () => {
            delete window.google_plmetrics
        }));
        T(eu) || (a = await jY(a, b, c, d, e, f, h), a.pb.length && kY(b, c, h, a))
    }
    async function jY(a, b, c, d, e, f, h) {
        const k = a.performance ? .now ? new NV(a.performance) : new OV;
        a = new MV(a, k);
        if (typeof e !== "string") return e = new Xm, b = new Vm, {
            Sa: null,
            pb: [B(e, 12, Ym, b)]
        };
        const l = CV(e);
        e = yi(l);
        if (!b) return b = new Xm, d = new Vm, b = B(b, 9, Ym, d), {
            Sa: e,
            pb: [b]
        };
        const m = c.google_ad_client;
        if (typeof m !== "string") return b = new Xm, d = new Vm, b = B(b, 11, Ym, d), {
            Sa: e,
            pb: [b]
        };
        if (gc()) return {
            Sa: e,
            pb: [Wm()]
        };
        if ($e()) return b = new Xm, d = new Vm, b = B(b, 13, Ym, d), {
            Sa: e,
            pb: [b]
        };
        var n = T(Zt) ? N(JF) : null;
        c = lY(c);
        var p = mY(e);
        a: {
            try {
                const w =
                    b ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (!w) {
                    var q = null;
                    break a
                }
                var t = decodeURIComponent(w[1]);
                q = zV(t);
                break a
            } catch (w) {
                q = null;
                break a
            }
            q = void 0
        }
        q = q || yi(l);
        t = l.T;
        t = Ai(t, t[y], Nr, 3, 1);
        t = {
            Tj: U(lu),
            gf: U(pu),
            ie: U(nu),
            Ob: U(ou),
            Yf: t,
            rf: U(ru)
        };
        h = {
            X: q,
            bd: c,
            Mi: h,
            params: t,
            V: new FV({
                Pb: p,
                Lg: U(qu),
                Be: T(Nt),
                De: T(Pt),
                ac: U(Jt),
                ee: $u(Qt),
                Qa: $u(Rt),
                fe: U(ju),
                ge: U(ku),
                Ce: T(Ot),
                qe: $u(Kt),
                Xc: $u(Lt),
                Ed: U($t),
                Wb: T(fu),
                Ge: av(Tt),
                nf: T(gu),
                Ne: T(Wt),
                cf: T(cu)
            }),
            Ta: DV
        };
        await nY(b, d, n, h, m, k, a, f);
        return {
            Sa: e,
            pb: []
        }
    }

    function mY(a) {
        const b = N(Eo).g();
        a && b.push(...ii(a, 24, Yg));
        b.push(...av(iu).map(Number));
        b.push(42);
        b.sort((c, d) => c - d);
        return b
    }

    function kY(a, b, c, d) {
        a = HV(new KV, !!a && Vo(a) < 488, lY(b), a ? .location ? .hostname ? ? "", c, d.Sa ? ? new zi, 0, d.pb);
        c = Math.floor(Ve() * 20);
        b = new $n;
        b = mj(b, 1, 1);
        b = mj(b, 2, 0);
        c = Rn(c);
        var e = mY(d.Sa);
        c = si(c, e);
        b = A(b, 10, c);
        a = B(b, 3, ao, a);
        oY(T(Zt) ? N(JF) : null, a, Date.now(), d.Sa)
    }
    async function nY(a, b, c, d, e, f, h, k) {
        const l = AA(a);
        l.wasReactiveAdConfigReceived[42] || (l.wasReactiveAdConfigReceived[42] = !0, await eY(a, b, d, e, [m => {
            oY(c, m, f.qa(21), d.X)
        }], f, h, k))
    }

    function oY(a, b, c, d) {
        a && V.na(1214, NF(a, b, c), e => {
            e.es = mY(d).join(",")
        })
    }

    function lY(a) {
        a = a.google_page_url;
        return typeof a === "string" ? a : ""
    };
    const pY = (a, b) => {
        const c = Pe("STYLE", a);
        c.textContent = qd(Fd `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    };
    var rY = (a, b, c) => {
        if (!a.body) return null;
        const d = new qY;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && pY(b.document, e);
            Bk(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.j,
                position: d.l,
                top: d.A
            });
            b.scrollTo(0, d.i)
        }
    };
    class qY {
        constructor() {
            this.g = this.A = this.l = this.j = null;
            this.i = 0
        }
        apply(a, b) {
            this.j = a.body.style.overflow;
            this.l = a.body.style.position;
            this.A = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.i = dp(b);
            Bk(a.body, "top", -this.i + "px")
        }
    };

    function sY(a, b) {
        var c;
        if (!a.j)
            for (a.j = [], c = a.g.parentElement; c;) {
                a.j.push(c);
                if (a.H(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.j.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var tY = class extends P {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.M = b;
            this.B = c;
            this.j = null;
            yp(this, () => this.j = null)
        }
        H(a) {
            return this.B === a
        }
    };

    function uY(a, b) {
        const c = a.B;
        c && (b ? (JA(a.F), x(c, {
            display: "block"
        }), a.A.body && !a.l && (a.l = rY(a.A, a.M, a.R)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.A.body.setAttribute("aria-hidden", "true")) : (KA(a.F), x(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function vY(a) {
        uY(a, !1);
        const b = a.B;
        if (b) {
            var c = wY(a.I);
            sY(a, d => {
                x(d, c);
                hp(d)
            });
            a.g.setAttribute("width", "");
            a.g.setAttribute("height", "");
            Bk(a.g, c);
            Bk(a.g, xY);
            Bk(b, yY);
            Bk(b, {
                background: "transparent"
            });
            x(b, {
                display: "none",
                position: "fixed"
            });
            hp(b);
            hp(a.g);
            Cf(a.I) <= 1 || (Bk(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), of (b))
        }
    }
    class zY extends tY {
        constructor(a, b, c) {
            var d = U(Lu);
            super(a, b, c);
            this.l = null;
            this.A = b.document;
            this.R = d;
            this.F = DA(new IA(b), 2147483646);
            this.I = b
        }
    }

    function wY(a) {
        a = Cf(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var yY = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        xY = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var AY = class extends zY {
        constructor(a, b, c) {
            super(b, a, c);
            vY(this)
        }
        H(a) {
            return a.classList ? a.classList.contains("adsbygoogle") : Ya(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
        }
    };
    const BY = {
        [1]: "closed",
        [2]: "granted",
        [3]: "cancelled"
    };
    async function CY(a, b, c, d) {
        a = new DY(a, b, c, d);
        await a.J();
        return a
    }

    function EY(a) {
        return setTimeout(mx(728, () => {
            FY(() => {
                a.A.reject()
            });
            a.dispose()
        }), U(Cu) * 1E3)
    }

    function GY(a, b) {
        var c = uN(a.g).then(() => {
            clearTimeout(b);
            a.A.resolve()
        });
        V.na(1005, c);
        c = vN(a.g).then(d => {
            HY(a, BY[d.status])
        });
        V.na(1006, c);
        c = wN(a.g).then(() => {
            HY(a, "error")
        });
        V.na(1004, c)
    }

    function IY(a) {
        if (T(Du)) {
            a.win.location.hash !== "" && nx("pub_hash", {
                o_url: a.win.location.href
            }, .1);
            a.win.location.hash = "goog_fullscreen_ad";
            var b = mx(950, c => {
                c.oldURL.endsWith("#goog_fullscreen_ad") && (a.l === 10 ? HY(a, "closed") : a.g.te.postMessage(JSON.stringify({
                    eventType: "backButton",
                    googMsgType: "fullscreen"
                }), "*"), a.win.removeEventListener("hashchange", b))
            });
            a.win.addEventListener("hashchange", b);
            yp(a, () => {
                a.win.removeEventListener("hashchange", b);
                a.win.location.hash === "#goog_fullscreen_ad" && a.win.history.back()
            })
        }
    }

    function FY(a) {
        try {
            a()
        } catch (b) {}
    }

    function HY(a, b) {
        uY(a.F, !1);
        a.j && FY(() => {
            a.j(b)
        });
        a.dispose()
    }
    var DY = class extends P {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.B = b;
            this.H = c;
            this.l = d;
            this.j = null;
            this.F = new AY(a, c, b);
            a = new yN(this.l === 10 ? 1 : 2, this.win, this.H.contentWindow);
            a.J();
            this.g = a;
            this.A = new uL;
            this.B.dataset["slotcar" + (this.l === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async J() {
            const a = EY(this);
            GY(this, a);
            yp(this, () => {
                this.g.dispose();
                clearTimeout(a);
                ve(this.B)
            });
            await this.A.promise
        }
        show(a) {
            this.C || (this.j = a, uY(this.F, !0), u.IntersectionObserver || this.g.te.postMessage(JSON.stringify({
                eventType: "visible",
                googMsgType: "fullscreen"
            }), "*"), IY(this))
        }
        disposeAd() {
            this.dispose()
        }
    };

    function JY({
        Tf: a,
        Yg: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function KY(a, b) {
        a.lf(c => {
            c.shv = String(b);
            c.mjsv = JY({
                Tf: $E(),
                Yg: b
            });
            c.eid = TQ(u)
        })
    };

    function LY(a) {
        var b = V;
        try {
            return tj(a, vl), new BQ(JSON.parse(a))
        } catch (c) {
            b.ba(838, c instanceof Error ? c : Error(String(c)))
        }
        return new BQ
    };
    const MY = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.Ra({
                    kc: c ? ? void 0,
                    eg: d ? void 0 : 2
                })
            })
        },
        NY = {
            zd: a => a.Ra,
            Cc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Qb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    kc: b.returnValue ? ? void 0,
                    eg: b.success ? void 0 : 2
                })
            }
        };

    function OY(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            bf: b.__uspapiReturn.callId
        }
    }

    function PY(a, b) {
        let c = {};
        if (dG(a.caller)) {
            var d = Ab(() => {
                b(c)
            });
            fG(a.caller, "getDataWithCallback", {
                Ra: e => {
                    e.eg || (c = e.kc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var QY = class extends P {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new gG(a, "__uspapiLocator", b => typeof b.__uspapi === "function", OY);
            this.caller.B.set("getDataWithCallback", MY);
            this.caller.A.set("getDataWithCallback", NY)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };

    function RY(a, b, c, d) {
        const e = new uL;
        let f = "";
        const h = l => {
            try {
                const m = typeof l.data === "object" ? l.data : JSON.parse(l.data);
                f === m.paw_id && (Lb(a, "message", h), m.error ? e.reject(Error(m.error)) : e.resolve(d(m)))
            } catch (m) {}
        };
        var k = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (k) return Jb(a, "message", h), f = c(k), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers :
            void 0;
        return c ? (f = String(Math.floor(Ve() * 2147483647)), Jb(a, "message", h), b(c, f), e.promise) : null
    }

    function SY(a) {
        return RY(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };
    const TY = (a, b) => {
        try {
            const l = H(b, 6) === void 0 ? !0 : H(b, 6);
            var c = Ij(Mi(b, 2)),
                d = I(b, 3);
            a: switch (Mi(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Kj(c, d, e),
                h = z(b, Dj, 5) ? .g() ? ? "";
            f.yc = h;
            f.g = l;
            f.win = a;
            var k = f.build();
            Bj(k)
        } catch {}
    };

    function UY(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? TY(a, b) : Jb(a, "load", () => void TY(a, b)))
    };

    function VY(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function WY(a) {
        if (a === a.top || Ke(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && VY(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new uL;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                sc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function rF() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), zf(U(xu), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function XY(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function YY({
        ma: a,
        xa: b,
        Wa: c,
        slot: d
    }) {
        const e = d.vars,
            f = Ne(d.pubWin),
            h = XY(d),
            k = new VQ({
                K: f,
                pubWin: d.pubWin,
                D: e,
                ma: a,
                xa: b,
                Wa: c,
                ea: h
            });
        k.H = Date.now();
        lk(1, [k.D]);
        lx(1032, () => {
            if (f && T(Wu)) {
                var l = k.D;
                iF(dF(), 32, !1) || (jF(dF(), 32, !0), TU(f, l.google_loader_used === "sd" ? 5 : 9))
            }
        });
        try {
            await ZY(k)
        } catch (l) {
            if (!V.ba(159, l, void 0, void 0)) throw l;
        }
        lx(639, () => {
            var l;
            var m = k.D;
            (l = k.K) && m.google_responsive_auto_format === 1 && m.google_full_width_responsive_allowed === !0 ? (m = (m = l.document.getElementById(m.google_async_iframe_id)) ?
                Be(m, "INS", "adsbygoogle") : null) ? (l = new uQ(l, m), l.g = u.setInterval(Ga(l.i, l), 500), l.i(), l = !0) : l = !1 : l = !1;
            return l
        });
        f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? ox(1008, $Y(d.pubWin, f, e, k.j, qj(AV()), k.g, I(a, 8)), l => {
            l.es = mY(null).join(",")
        }) : rN(k.pubWin, "affa", l => {
            ox(1008, $Y(d.pubWin, f, e, k.j, l.config, k.g, I(a, 8)), m => {
                m.es = mY(null).join(",")
            });
            return !0
        });
        aZ(k);
        return k
    }
    async function $Y(a, b, c, d, e, f, h) {
        await iY(a, b, c, d, e, f, h)
    }

    function ZY(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        RQ(13, b);
        RQ(11, b);
        a.F = Ni(a.ma, zQ, 13, CQ) ? .g() ? ? T(Au);
        b = dF();
        var c = iF(b, 23, !1);
        c || jF(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.ma;
            b = fi(c, zQ, xi(c, CQ) === 13 ? 13 : -1) !== void 0 ? z(Ni(c, zQ, 13, CQ), sL, 2) : ib(Ni(c, AQ, 14, CQ) ? .g() ? ? [], [b]) ? z(z(Ni(c, AQ, 14, CQ), zQ, 2), sL, 2) : new sL;
            c = a.pubWin;
            var d = a.D.google_ad_client,
                e = H(a.ma, 6),
                f = H(a.ma, 20);
            b = new tL(c, d, b, e, f);
            b.i = !0;
            c = z(b.C, Or, 1);
            if (b.i && (d = b.g, b.j && !WE(c) ? (e = new jL, e = ci(e,
                    1, Vg(1))) : e = null, e)) {
                e = qj(e);
                try {
                    d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                } catch (h) {}
            }
            d = WE(c) && (b.j || b.A);
            c && d && SF(new TF(b.g, new BG(b.g, b.l), c, new IA(b.g)))
        }
        b = !tk() && !fc();
        return !b || b && !bZ(a) ? cZ(a) : Promise.resolve()
    }

    function dZ(a, b, c = !1) {
        b = RO(a.K, b);
        const d = xk() || NO(a.pubWin.top);
        if (!b || b.y === -12245933 || d.width === -12245933 || d.height === -12245933 || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = PO(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function bZ(a) {
        return eZ(a) || fZ(a)
    }

    function eZ(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = u.setTimeout(() => {
                nx("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = mx(450, () => {
                b.google_pause_ad_requests = !1;
                u.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                if (!bZ(a)) {
                    const e = cZ(a);
                    V.na(1222, e)
                }
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function fZ(a) {
        const b = a.pubWin.document,
            c = a.ea;
        if (qP(b) === 3) return tP(mx(332, () => {
            if (!gZ(a, hZ().visible, c)) {
                const h = cZ(a);
                V.na(1222, h)
            }
        }), b), !0;
        const d = hZ();
        if (d.hidden < 0 && d.visible < 0) return !1;
        const e = rP(b);
        if (!e) return !1;
        if (!sP(b)) return gZ(a, d.visible, c);
        if (dZ(a, c) <= d.hidden) return !1;
        let f = mx(332, () => {
            if (!sP(b) && f) {
                Lb(b, e, f);
                if (!gZ(a, d.visible, c)) {
                    const h = cZ(a);
                    V.na(1222, h)
                }
                f = null
            }
        });
        return Jb(b, e, f)
    }

    function hZ() {
        var a = U(Os);
        const b = U(Ps);
        return b === 3 && a === 6 ? (a = {
            hidden: 0,
            visible: 3
        }, u.IntersectionObserver || (a.visible = -1), Fe() && (a.visible *= 2), a) : {
            hidden: 0,
            visible: u.IntersectionObserver ? Fe() ? a : b : -1
        }
    }

    function gZ(a, b, c) {
        if (!c || b < 0) return !1;
        var d = a.D;
        if (!bp(d.google_reactive_ad_format) && (RP(d) || d.google_reactive_ads_config) || !QO(c) || dZ(a, c) <= b) return !1;
        var e = dF(),
            f = iF(e, 8, {});
        e = iF(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const h = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !h) return !1;
        f = new Promise(k => {
            const l = new u.IntersectionObserver((m, n) => {
                Ra(m, p => {
                    p.intersectionRatio <= 0 || (n.unobserve(p.target), k(void 0))
                })
            }, {
                rootMargin: `${b*100}%`
            });
            a.I = l;
            l.observe(c)
        });
        e = new Promise(k => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    k(void 0)
                })
        });
        ja(Promise, "any").call(Promise, [f, e]).then(() => {
            lx(294, () => {
                const k = cZ(a);
                V.na(1222, k)
            })
        });
        return !0
    }

    function cZ(a) {
        lx(326, () => {
            var c = a.pubWin,
                d = a.K,
                e = a.ma,
                f = a.xa;
            if (Rk(a.D) === 1) {
                var h = T(Xu);
                if ((h || T(Vu)) && c === d) {
                    var k = new Wj;
                    d = new Xj;
                    var l = k.setCorrelator(xf(c));
                    var m = TQ(c);
                    l = oj(l, 5, m);
                    K(l, 2, 1);
                    k = A(d, 1, k);
                    l = new Vj;
                    l = J(l, 10, !0);
                    m = T(Qu);
                    l = J(l, 8, m);
                    m = T(Ru);
                    l = J(l, 12, m);
                    m = T(Uu);
                    l = J(l, 7, m);
                    m = T(Tu);
                    l = J(l, 13, m);
                    A(k, 2, l);
                    c.google_rum_config = rj(d);
                    e = H(e, 9) && h ? f.Aj : f.Bj;
                    Oe(c.document, e)
                } else il(kx)
            }
        });
        a.D.google_ad_channel = iZ(a, a.D.google_ad_channel);
        a.D.google_tag_partner = jZ(a, a.D.google_tag_partner);
        kZ(a);
        const b = a.D.google_start_time;
        typeof b === "number" && (Lo = b, a.D.google_start_time = null);
        LO(a);
        a.K && VP(a.K, Ic(a.xa.ki, yL()));
        mF() && JL({
            win: a.pubWin,
            webPropertyCode: a.D.google_ad_client,
            jb: Ic(a.xa.jb, yL())
        });
        RP(a.D) && (HL() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        return lZ(a)
    }

    function iZ(a, b) {
        return (b ? [b] : []).concat(sF(a.pubWin).ad_channels || []).join("+")
    }

    function jZ(a, b) {
        return (b ? [b] : []).concat(sF(a.pubWin).tag_partners || []).join("+")
    }

    function mZ(a) {
        const b = Pe("IFRAME");
        We(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    }

    function nZ(a, b, c) {
        return a.D.google_reactive_ad_format === 9 && Be(a.ea, null, "fsi_container") ? (a.ea.appendChild(b), Promise.resolve(b)) : bQ(a.xa.Sg, 525, d => {
            a.ea.appendChild(b);
            const e = ak(c, a.pubWin);
            d.createAdSlot(a.K, a.D, b, a.ea.parentElement, e);
            return b
        })
    }

    function oZ(a, b, c, d) {
        IF();
        N(JF).bd = a.D.google_page_url;
        UY(a.pubWin, Gj(Fj(K(K(Ej(new Hj, Cj(new Dj, String(xf(a.pubWin)))), 4, 1), 2, 1), I(a.ma, 2)), d.g()));
        const e = a.K;
        if (a.D.google_acr)
            if (a.D.google_wrap_fullscreen_ad) {
                const h = a.D.google_acr;
                CY(a.pubWin, a.ea.parentElement, b, a.D.google_reactive_ad_format).then(h).catch(() => {
                    h(null)
                })
            } else a.D.google_acr(b);
        Jb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const h = e ? sF(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || h) && e && e === a.pubWin && pZ(e, a, a.ea,
                b)
        });
        d = h => {
            h && a.j.push(() => {
                h.dispose()
            })
        };
        const f = qZ(a, b);
        ZO(a.pubWin, a.g, b.contentWindow, a.j);
        !e || RP(a.D) && !eQ(a.D) || (a.D.no_resize || d(new gS(e, b, a.ea)), d(new xR(a, b)), d(e.IntersectionObserver ? null : new zR(e, b, a.ea)), d(nS(e, b, a.D, a.ea, mx(1225, () => {
            f();
            for (const h of a.j) h();
            a.j.length = 0
        }))));
        e && (d(rR(e, b, a.g)), a.j.push(oQ(e, a.D)), N(tQ).J(e), a.j.push(kR(e, a.ea, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        if (c != null) {
            d = a.ea;
            const h = d.parentElement;
            (h && pv.test(h.className) ? h : d).setAttribute("data-auto-ad-size",
                c)
        }
        b.setAttribute("tabindex", "0");
        b.setAttribute("title", "Advertisement");
        b.setAttribute("aria-label", "Advertisement");
        rZ(a);
        tS(a)
    }

    function qZ(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = lF();
        let f = null;
        const h = qN(c, "pvt", (k, l) => {
            typeof k.token === "string" && l.source === b.contentWindow && (f = k.token, h(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
        });
        a.j.push(h);
        return () => {
            f && Array.isArray(e[d]) && (Za(e[d], f), e[d].length || delete e[d], f = null)
        }
    }

    function rZ(a) {
        const b = tk(a.pubWin);
        if (b)
            if (b.container === "AMP-STICKY-AD") {
                const c = d => {
                    d.data === "fill_sticky" && b.renderStart && b.renderStart()
                };
                Jb(a.pubWin, "message", V.Da(616, c));
                a.j.push(() => {
                    Lb(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function pZ(a, b, c, d) {
        PN(new YN(a), c).then(e => {
            lk(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && pv.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", String(e.wg));
            return e
        }).then(e => {
            const f = b.D.armr || "",
                h = e.Bi || "",
                k = b.D.iaaso == null ? "" : Number(b.D.iaaso),
                l = Number(e.wg),
                m = Ua(e.entries, E => `${E.ub}:${E.Jg}:${E.Kg}`),
                n = Number(e.qj.toFixed(2)),
                p = d.dataset.googleQueryId || "",
                q = n * e.Yb.width * e.Yb.height,
                t = `${e.Xg.scrollX},${e.Xg.scrollY}`,
                w = Sk(e.target),
                C = [e.Yb.left, e.Yb.top, e.Yb.right,
                    e.Yb.bottom
                ].join();
            e = `${e.mh.width}x${e.mh.height}`;
            nx("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: TQ(b.D),
                et: h,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: k,
                io: l,
                saldr: b.D.google_loader_used,
                oa: n,
                oe: m.join(","),
                qid: p,
                rafmt: b.D.google_responsive_auto_format,
                roa: q,
                slot: b.D.google_ad_slot,
                sp: t,
                tgt: w,
                tr: C,
                url: b.D.google_page_url,
                vp: e,
                pvc: xf(a)
            }, 1)
        }).catch(e => {
            lk(8, ["Error:", e.message, c]);
            nx("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function sZ(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }

    function tZ(a, b, c) {
        var d = a.D,
            e = d.google_async_iframe_id;
        const f = d.google_ad_width,
            h = d.google_ad_height,
            k = fQ(d);
        e = {
            id: e,
            name: e
        };
        var l = a.D,
            m = a.C;
        JQ("browsing-topics", a.pubWin.document) && iR(c, l) && !T(Eu) && !fR(m ? .label) && (e.browsingTopics = "true");
        e.style = k ? [`width:${f}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${h}px;`;
        l = hf();
        l["allow-top-navigation-by-user-activation"] && l["allow-popups-to-escape-sandbox"] && (k || (l = "=" + encodeURIComponent("1"),
            b = Ie(b, "fsb" + l)), e.sandbox = gf().join(" "));
        d.google_video_play_muted === !1 && sZ("autoplay", e);
        l = b;
        l.length > 61440 && (l = l.substring(0, 61432), l = l.replace(/%\w?$/, ""), l = l.replace(/&[^=]*=?$/, ""), l += "&trunc=1");
        l !== b && (m = b.lastIndexOf("&", 61432), m === -1 && (m = b.lastIndexOf("?", 61432)), nx("trn", {
            ol: b.length,
            tr: m === -1 ? "" : b.substring(m + 1),
            url: b
        }, .01));
        b = l;
        f != null && (e.width = String(f));
        h != null && (e.height = String(h));
        e.frameborder = "0";
        e.marginwidth = "0";
        e.marginheight = "0";
        e.vspace = "0";
        e.hspace = "0";
        e.allowtransparency =
            "true";
        e.scrolling = "no";
        d.dash && (e.srcdoc = d.dash);
        IQ("attribution-reporting", a.pubWin.document) && sZ("attribution-reporting", e);
        IQ("run-ad-auction", a.pubWin.document) && sZ("run-ad-auction", e);
        T(tu) && (d = a.pubWin, d.credentialless !== void 0 && (T(uu) || d.crossOriginIsolated) && (e.credentialless = "true"));
        if (k) e.src = b, e = mZ(e), a = nZ(a, e, c);
        else {
            c = {};
            c.dtd = YQ((new Date).getTime(), Lo);
            c = Nk(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = mZ(e);
            c && a.j.push(zk(a.pubWin, e));
            a.ea.style.visibility = "visible";
            for (a = a.ea; c = a.firstChild;) a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function uZ(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.g;
        vZ(a);
        d.g() && YO(new XO(a.pubWin), a.g, a.pubWin.location.hostname);
        var e = ak(d, a.pubWin);
        if (!(d.g() || T(zu) && a.F)) return nx("afc_noc_req", {
            client: a.D.google_ad_client,
            isGdprCountry: H(a.ma, 6).toString()
        }, U(Ns)), Promise.resolve();
        var f = wZ(a.xa, d);
        f && document.documentElement.appendChild(f);
        !T(vu) || T(zu) && !d.g() || (a.C = await qF());
        a.G = gR(a.pubWin, d);
        SQ(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) {
            aQ(a.K, f);
            const h = ak(d);
            gQ(f, a, h);
            f = f.page_level_pubvars;
            za(f) && zc(a.D, f)
        }
        f = JQ("shared-storage", a.pubWin.document);
        a.G && d.g() && f && !T(su) && !iF(dF(), 34, !1) && (jF(dF(), 34, !0), f = a.G.then(h => {
            h({
                message: "goog:spam:client_age",
                pvsid: xf(a.pubWin)
            })
        }), V.na(1069, f));
        await hR(a, a.pubWin, d, a.D, a.G, a.C);
        await a.A ? .mi;
        f = "";
        fQ(b) ? (f = (d.g() ? a.xa.th : a.xa.sh).toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + Mk({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), gV(b, dF()), xZ(b)) : (b.google_pgb_reactive === 5 && b.google_reactive_ads_config ||
            !SP(b) || QP(c, b, e)) && xZ(b) && (f = YU(a, d));
        lk(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || Qk(c);
        e = Rk(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`;
        c = dZ(a, a.ea, !0) > 0;
        e = {
            ifi: e,
            uci: b
        };
        c && (c = dF(), e.btvi = iF(c, 21, 1), kF(c, 21));
        f = Nk(e, f);
        c = tZ(a, f, d);
        a.D.rpe && eS(a.pubWin, a.ea, {
            height: a.D.google_ad_height,
            qf: "force",
            Qc: !0,
            ef: !0,
            be: a.D.google_ad_client
        });
        c = await c;
        try {
            oZ(a, c, b, d)
        } catch (h) {
            V.ba(223, h, void 0, void 0)
        }
    }

    function yZ(a) {
        const b = new QY(a);
        return new Promise(c => {
            PY(b, d => {
                d && typeof d.uspString === "string" ? c(d.uspString) : c(null)
            })
        })
    }

    function zZ(a) {
        var b = jf(u.top, "googlefcPresent");
        u.googlefc && !b && nx("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function AZ(a, b) {
        return kG(a, b === ".google.cn") ? lG(a) : Promise.resolve(null)
    }

    function BZ(a, b, c) {
        var d = c.Pj,
            e = c.uspString;
        c = c.Ni;
        d && WQ(a, d, b);
        e && (b = nj(a, 1, e), e = e.toUpperCase(), e.length == 4 && (e.indexOf("-") == -1 || e.substring(1) === "---") && e[0] >= "1" && e[0] <= "9" && ML.hasOwnProperty(e[1]) && ML.hasOwnProperty(e[2]) && ML.hasOwnProperty(e[3]) ? (d = new LL, d = Ti(d, 1, parseInt(e[0], 10)), d = K(d, 2, ML[e[1]]), d = K(d, 3, ML[e[2]]), e = K(d, 4, ML[e[3]])) : e = null, e = e ? .Ki() === 2, Ri(b, 13, e));
        c && kP(a, c)
    }

    function CZ(a) {
        const b = U(Ls);
        if (b <= 0) return null;
        const c = bl(),
            d = SY(a.pubWin);
        if (!d) return null;
        a.B = "0";
        return Promise.race([d, zf(b, "0")]).then(e => {
            nx("adsense_paw", {
                time: bl() - c
            });
            e ? .length > 1E4 ? V.ba(809, Error(`ML:${e.length}`), void 0, void 0) : a.B = e
        }).catch(e => {
            V.ba(809, e, void 0, void 0)
        })
    }

    function vZ(a) {
        var b = a.pubWin;
        const c = a.ea;
        var d = a.D;
        const e = a.Wa,
            f = U(Nu);
        d = !bp(d.google_reactive_ad_format) && (RP(d) || d.google_reactive_ads_config);
        if (!(a.A ? .Je || f <= 0 || Ne(b) || !u.IntersectionObserver || d)) {
            a.A = {};
            var h = U(Ou),
                k = new xo(e),
                l = bl();
            b = new Promise(m => {
                let n = 0;
                const p = a.A,
                    q = new u.IntersectionObserver(mx(1236, t => {
                        if (t = t.find(w => w.target === c)) k.B.g.g.g.g.g({
                            hf: bl() - l,
                            Qj: ++n
                        }), p.Yi = t.isIntersecting && t.intersectionRatio >= h, m()
                    }), {
                        threshold: [h]
                    });
                q.observe(c);
                p.Je = q
            });
            a.A.mi = Promise.race([b, zf(f,
                null)]).then(m => {
                k.B.g.g.g.i.g({
                    hf: bl() - l,
                    status: m === null ? "TIMEOUT" : "OK"
                })
            })
        }
    }

    function DZ(a) {
        const b = bl();
        return Promise.race([lx(832, () => WY(a)), zf(200)]).then(c => {
            nx("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: bl() - b,
                tms: 200
            });
            return c ? .sc
        })
    }
    async function EZ(a) {
        const b = bl(),
            c = a.ma;
        KF(h => {
            if (Mi(h, 1) === 0) {
                var k = !!H(c, 6);
                h = J(h, 2, k);
                k = !!H(c, 20);
                h = J(h, 6, k);
                K(h, 1, 1)
            }
        });
        gN(a.pubWin);
        zZ(a.D.google_ad_client);
        KF(h => {
            Mi(h, 1) === 1 && K(h, 1, 2)
        });
        var d = new nG(a.pubWin);
        await AZ(d, I(c, 8));
        KF(h => {
            Mi(h, 1) === 2 && (h = J(h, 3, !0), K(h, 1, 3))
        });
        d = H(c, 6);
        var e = H(c, 25);
        a.g = nL(mL(new oL, !(d && !nN())), e && navigator.globalPrivacyControl);
        e = [XQ(a), yZ(a.pubWin), lP(a)];
        e = await Promise.all(e);
        BZ(a.g, d, {
            Pj: e[0],
            uspString: e[1],
            Ni: e[2]
        });
        const f = bl();
        KF(h => {
            if (Mi(h, 1) === 3) {
                h =
                    J(h, 3, f - b > 500);
                var k = !!a.g ? .A();
                h = J(h, 4, k);
                k = !!a.g ? .g();
                h = J(h, 5, k);
                k = !!a.g ? .j();
                h = J(h, 7, k);
                k = !!a.g ? .l();
                h = J(h, 8, k);
                K(h, 1, 4)
            }
        })
    }
    async function FZ(a) {
        const b = CZ(a),
            c = lx(868, () => DZ(a.pubWin));
        await EZ(a);
        await b;
        a.sc = await c || "";
        await uZ(a)
    }

    function lZ(a) {
        Af(a.pubWin) !== a.pubWin && (a.i |= 4);
        qP(a.pubWin.document) === 3 && (a.i |= 32);
        var b;
        if (b = a.K) {
            b = a.K;
            const c = Vo(b);
            b = !($o(b).scrollWidth <= c)
        }
        b && (a.i |= 1024);
        a.pubWin.Prototype ? .Version && (a.i |= 16384);
        a.D.google_loader_features_used && (a.i |= a.D.google_loader_features_used);
        return FZ(a)
    }

    function xZ(a) {
        const b = dF(),
            c = a.google_ad_section;
        RP(a) && kF(b, 15);
        if (Uk(a)) {
            if (kF(b, 5) > 100) return !1
        } else if (kF(b, 6) - iF(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }

    function wZ(a, b) {
        a: {
            var c = [u.top];
            var d = [];
            let f = 0,
                h;
            for (; h = c[f++];) {
                d.push(h);
                try {
                    if (h.frames)
                        for (let k = 0; k < h.frames.length && c.length < 1024; ++k) c.push(h.frames[k])
                } catch {}
            }
            c = d;
            for (d = 0; d < c.length; d++) try {
                var e = c[d].frames.google_esf;
                if (e) {
                    Tj = e;
                    break a
                }
            } catch (k) {}
            Tj = null
        }
        if (Tj) return null;e = Pe("IFRAME");e.id = "google_esf";e.name = "google_esf";a = b.g() ? a.th : a.sh;e.src = Kc(a).toString();e.style.display = "none";
        return e
    }

    function aZ(a) {
        T(Fs) && nF() && u.setTimeout(mx(1244, () => void DO(a.K || a.pubWin, {
            Va: H(a.ma, 6)
        })), 1E3)
    }

    function kZ(a) {
        const b = a.K;
        if (b && !sF(b).ads_density_stats_processed && !tk(b) && (sF(b).ads_density_stats_processed = !0, T(wt) || Ve() < .01)) {
            const c = () => {
                if (b) {
                    var d = IJ(DJ(b), a.D.google_ad_client, b.location.hostname, TQ(a.D).split(","));
                    nx("ama_stats", d, 1)
                }
            };
            yf(b, () => {
                u.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        lx(843, () => {
            if (!u.google_sa_impl) {
                var d = new Bo(b);
                try {
                    Mg(l => {
                        var m = new io;
                        var n = new ho;
                        try {
                            var p = xf(window);
                            mj(n, 1, p)
                        } catch (C) {}
                        try {
                            var q = N(Eo).g();
                            qi(n, 2, q, Xg)
                        } catch (C) {}
                        try {
                            oj(n, 3, window.document.URL)
                        } catch (C) {}
                        m = A(m, 2, n);
                        n = new go;
                        n = K(n, 1, 1192);
                        try {
                            var t = vl(l ? .name) ? l.name : "Unknown error";
                            oj(n, 2, t)
                        } catch (C) {}
                        try {
                            var w = vl(l ? .message) ? l.message : `Caught ${l}`;
                            oj(n, 3, w)
                        } catch (C) {}
                        try {
                            const C = vl(l ? .stack) ? l.stack : Error().stack;
                            C && qi(n, 4, C.split(/\n\s*/), oh)
                        } catch (C) {}
                        l = A(m, 1, n);
                        t = new fo;
                        try {
                            oj(t, 1, $E())
                        } catch {}
                        B(l, 6, jo, t);
                        mj(l, 5, 1);
                        so(d, l)
                    })
                } catch (l) {}
                var e = LY(a);
                KY(V, I(e, 2));
                FQ(H(e, 6));
                lk(16, [3, rj(e)]);
                var f = JY({
                        Tf: b,
                        Yg: I(e, 2)
                    }),
                    h = c(f, e);
                u.google_sa_impl = l => YY({
                    ma: e,
                    xa: h,
                    Wa: f,
                    slot: l
                });
                PQ(HQ(u));
                u.google_process_slots ? .();
                var k = (u.Prototype || {}).Version;
                k != null && nx("prtpjs", {
                    version: k
                })
            }
        })
    })(typeof sttc === "undefined" ? void 0 : sttc, $E(), function(a, b) {
        const c = Ji(b, 1) > 2012 ? `_fy${Ji(b,1)}` : "",
            d = I(b, 3);
        b = I(b, 2);
        return {
            Bj: Qd `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            Aj: Qd `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Sg: Qd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}reactive_library${c}.js`,
            ki: Qd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}debug_card_library${c}.js`,
            Bo: Qd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            oo: Qd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            jb: Qd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}autogames${c}.js`,
            th: Qd `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            sh: Qd `https://pagead2.googlesyndication.com/pagead/html/${b}/${d}/zrt_lookup${c}.html`
        }
    });
}).call(this, "[2021,\"r20240717\",\"r20110914\",null,null,null,null,\".google.com.pk\",null,null,null,null,null,null,null,null,null,-1,[44759876,44759927,44759842]]");