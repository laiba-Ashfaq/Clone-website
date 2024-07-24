(function(sttc) {
    'use strict';
    var r, ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this),
        ea = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ha = {},
        ja = {};

    function ka(a, b, c) {
        if (!c || a != null) {
            c = ja[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ma(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = da;
            for (e = 0; e < d.length - 1; e++) {
                var h = d[e];
                if (!(h in f)) break a;
                f = f[h]
            }
            d = d[d.length - 1];c = ea && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ba(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ja[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ja[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, ja[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var na = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        pa;
    if (ea && typeof Object.setPrototypeOf == "function") pa = Object.setPrototypeOf;
    else {
        var ra;
        a: {
            var sa = {
                    a: !0
                },
                ta = {};
            try {
                ta.__proto__ = sa;
                ra = ta.a;
                break a
            } catch (a) {}
            ra = !1
        }
        pa = ra ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ua = pa;

    function va(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (ua) ua(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Oj = b.prototype
    }
    ma("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    ma("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    ma("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        va(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ma("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c, "All promises were rejected");
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

    function wa(a, b) {
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

    function za(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Aa(a) {
        var b = za(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }

    function Ca(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function Da(a) {
        return Object.prototype.hasOwnProperty.call(a, Ea) && a[Ea] || (a[Ea] = ++Fa)
    }
    var Ea = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Fa = 0;

    function Ga(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ha(a, b, c) {
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

    function Ia(a, b, c) {
        Ia = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ga : Ha;
        return Ia.apply(null, arguments)
    }

    function Ja(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ka(a, b, c) {
        a = a.split(".");
        c = c || u;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function La(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Oj = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.mo = function(d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    }

    function Na(a) {
        return a
    };
    var Oa = {
        fn: 0,
        en: 1,
        dn: 2
    };

    function Pa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Pa);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    La(Pa, Error);
    Pa.prototype.name = "CustomError";
    var Qa;

    function Ra(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Pa.call(this, c + a[d])
    }
    La(Ra, Pa);
    Ra.prototype.name = "AssertionError";

    function Sa(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ta(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ua(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Va(a, b) {
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

    function Wa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Xa(a, b, c) {
        let d = c;
        Ta(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ya(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function $a(a, b) {
        return Sa(a, b) >= 0
    }

    function ab(a, b) {
        b = Sa(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function cb(a, b) {
        let c = 0;
        Ua(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function db(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function eb(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function hb(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (Aa(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let h = 0; h < f; h++) a[e + h] = d[h]
            } else a.push(d)
        }
    }

    function ib(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function jb(a, b, c) {
        c = c || kb;
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

    function lb(a, b) {
        if (!Aa(a) || !Aa(b) || a.length != b.length) return !1;
        const c = a.length,
            d = mb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function kb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function mb(a, b) {
        return a === b
    }

    function nb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = nb.apply(null, ib(d, e, e + 8192));
                    for (let h = 0; h < f.length; h++) b.push(f[h])
                } else b.push(d)
        }
        return b
    }

    function ob(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var pb = {
        bk: "google_adtest",
        fk: "google_ad_client",
        pk: "google_ad_intent_query",
        nk: "google_ad_intent_qetid",
        mk: "google_ad_intent_eids",
        gk: "google_ad_format",
        ik: "google_ad_height",
        Ak: "google_ad_width",
        qk: "google_ad_layout",
        rk: "google_ad_layout_key",
        sk: "google_ad_output",
        tk: "google_ad_region",
        wk: "google_ad_slot",
        yk: "google_ad_type",
        zk: "google_ad_url",
        Uk: "google_analytics_domain_name",
        Vk: "google_analytics_uacct",
        ll: "google_container_id",
        Al: "google_gl",
        Ul: "google_enable_ose",
        em: "google_full_width_responsive",
        jn: "google_rl_filtering",
        hn: "google_rl_mode",
        kn: "google_rt",
        gn: "google_rl_dest_url",
        Lm: "google_max_radlink_len",
        Rm: "google_num_radlinks",
        Sm: "google_num_radlinks_per_unit",
        ek: "google_ad_channel",
        Km: "google_max_num_ads",
        Mm: "google_max_responsive_height",
        fl: "google_color_border",
        Tl: "google_enable_content_recommendations",
        xl: "google_content_recommendation_ui_type",
        wl: "google_source_type",
        vl: "google_content_recommendation_rows_num",
        ul: "google_content_recommendation_columns_num",
        rl: "google_content_recommendation_ad_positions",
        yl: "google_content_recommendation_use_square_imgs",
        il: "google_color_link",
        gl: "google_color_line",
        kl: "google_color_url",
        ck: "google_ad_block",
        vk: "google_ad_section",
        dk: "google_ad_callback",
        bl: "google_captcha_token",
        jl: "google_color_text",
        Mk: "google_alternate_ad_url",
        lk: "google_ad_host_tier_id",
        dl: "google_city",
        jk: "google_ad_host",
        kk: "google_ad_host_channel",
        Nk: "google_alternate_color",
        el: "google_color_bg",
        Vl: "google_encoding",
        cm: "google_font_face",
        Dl: "google_cust_ch",
        Gl: "google_cust_job",
        Fl: "google_cust_interests",
        El: "google_cust_id",
        Hl: "google_cust_u_url",
        gm: "google_hints",
        wm: "google_image_size",
        Nm: "google_mtl",
        On: "google_cpm",
        ql: "google_contents",
        Pm: "google_native_settings_key",
        zl: "google_country",
        Gn: "google_targeting",
        dm: "google_font_size",
        Kl: "google_disable_video_autoplay",
        eo: "google_video_product_type",
        co: "google_video_doc_id",
        bo: "google_cust_gender",
        An: "google_cust_lh",
        zn: "google_cust_l",
        Nn: "google_tfs",
        Om: "google_native_ad_template",
        Cm: "google_kw",
        Dn: "google_tag_for_child_directed_treatment",
        En: "google_tag_for_under_age_of_consent",
        mn: "google_region",
        Cl: "google_cust_criteria",
        uk: "google_safe",
        Bl: "google_ctr_threshold",
        nn: "google_resizing_allowed",
        pn: "google_resizing_width",
        on: "google_resizing_height",
        ao: "google_cust_age",
        Fm: "google_language",
        Dm: "google_kw_type",
        an: "google_pucrd",
        Ym: "google_page_url",
        Fn: "google_tag_partner",
        un: "google_restrict_data_processing",
        Xj: "google_adbreak_test",
        hk: "google_ad_frequency_hint",
        Zj: "google_admob_interstitial_slot",
        ak: "google_admob_rewarded_slot",
        Yj: "google_admob_ads_only",
        xk: "google_ad_start_delay_hint",
        Jm: "google_max_ad_content_rating",
        cn: "google_ad_public_floor",
        bn: "google_ad_private_floor",
        Yn: "google_traffic_source",
        xn: "google_shadow_mode",
        Vm: "google_overlays",
        Zm: "google_privacy_treatments",
        Bn: "google_special_category_data",
        fo: "google_wrap_fullscreen_ad"
    };

    function rb(a, b) {
        this.g = a === sb && b || "";
        this.i = tb
    }
    rb.prototype.toString = function() {
        return this.g
    };

    function ub(a) {
        return a instanceof rb && a.constructor === rb && a.i === tb ? a.g : "type_error:Const"
    }
    var tb = {},
        sb = {};

    function vb() {
        return !1
    }

    function wb() {
        return !0
    }

    function xb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function yb(a) {
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

    function Bb(a, b) {
        let c = 0;
        return function(d) {
            u.clearTimeout(c);
            const e = arguments;
            c = u.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Cb(a, b) {
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
    var Db = {
            passive: !0
        },
        Eb = zb(function() {
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

    function Fb(a) {
        return a ? a.passive && Eb() ? a : a.capture || !1 : !1
    }

    function Gb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Fb(d)), !0) : !1
    }

    function Hb(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Fb(d)), !0) : !1
    };
    var Ib = wa(610401301, !1),
        Jb = wa(188588736, !0),
        Kb = wa(645172343, wa(1, !0));

    function Lb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Mb(a) {
        if (!Nb.test(a)) return a;
        a.indexOf("&") != -1 && (a = a.replace(Ob, "&amp;"));
        a.indexOf("<") != -1 && (a = a.replace(Pb, "&lt;"));
        a.indexOf(">") != -1 && (a = a.replace(Qb, "&gt;"));
        a.indexOf('"') != -1 && (a = a.replace(Rb, "&quot;"));
        a.indexOf("'") != -1 && (a = a.replace(Sb, "&#39;"));
        a.indexOf("\x00") != -1 && (a = a.replace(Tb, "&#0;"));
        return a
    }
    var Ob = /&/g,
        Pb = /</g,
        Qb = />/g,
        Rb = /"/g,
        Sb = /'/g,
        Tb = /\x00/g,
        Nb = /[\x00&<>"']/;

    function Ub(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };

    function Vb() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Wb;
    const Xb = u.navigator;
    Wb = Xb ? Xb.userAgentData || null : null;

    function Yb(a) {
        return Ib ? Wb ? Wb.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function v(a) {
        return Vb().indexOf(a) != -1
    };

    function Zb() {
        return Ib ? !!Wb && Wb.brands.length > 0 : !1
    }

    function $b() {
        return Zb() ? !1 : v("Opera")
    }

    function ac() {
        return Zb() ? !1 : v("Trident") || v("MSIE")
    }

    function bc() {
        return v("Firefox") || v("FxiOS")
    }

    function cc() {
        return v("Safari") && !(dc() || (Zb() ? 0 : v("Coast")) || $b() || (Zb() ? 0 : v("Edge")) || (Zb() ? Yb("Microsoft Edge") : v("Edg/")) || (Zb() ? Yb("Opera") : v("OPR")) || bc() || v("Silk") || v("Android"))
    }

    function dc() {
        return Zb() ? Yb("Chromium") : (v("Chrome") || v("CriOS")) && !(Zb() ? 0 : v("Edge")) || v("Silk")
    }

    function ec() {
        return v("Android") && !(dc() || bc() || $b() || v("Silk"))
    };

    function fc(a) {
        fc[" "](a);
        return a
    }
    fc[" "] = function() {};

    function gc(a, b) {
        try {
            return fc(a[b]), !0
        } catch (c) {}
        return !1
    };
    var hc = ac(),
        ic = v("Edge") || hc,
        jc = v("Gecko") && !(Ub(Vb(), "WebKit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
        kc = Ub(Vb(), "WebKit") && !v("Edge");

    function lc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function mc(a) {
        var b = nc;
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

    function oc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function pc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const qc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function rc(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < qc.length; f++) c = qc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var sc = {
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
    var tc;

    function uc() {
        if (tc === void 0) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Na,
                        createScript: Na,
                        createScriptURL: Na
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                tc = a
            } else tc = a
        }
        return tc
    };
    var vc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function wc(a, b) {
        a = xc.exec(yc(a).toString());
        const c = a[3] || "";
        return zc(a[1] + Ac("?", a[2] || "", b) + Ac("#", c))
    }

    function yc(a) {
        return a instanceof vc && a.constructor === vc ? a.g : "type_error:TrustedResourceUrl"
    }

    function Bc(a, b) {
        var c = ub(a);
        if (!Cc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Dc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof rb ? ub(d) : encodeURIComponent(String(d))
        });
        return zc(a)
    }
    var Dc = /%{(\w+)}/g,
        Cc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        xc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;

    function Ec(a, b) {
        return wc(Bc(new rb(sb, "https://fundingchoicesmessages.google.com/i/%{id}"), a), b)
    }
    var Fc = {};

    function zc(a) {
        const b = uc();
        a = b ? b.createScriptURL(a) : a;
        return new vc(a, Fc)
    }

    function Ac(a, b, c) {
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
    var Gc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        Hc = new Gc("about:invalid#zClosurez");

    function Ic(a) {
        if (a instanceof Gc) return a.g;
        throw Error("");
    };
    class Jc {
        constructor(a) {
            this.cj = a
        }
    }

    function Kc(a) {
        return new Jc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Lc = [Kc("data"), Kc("http"), Kc("https"), Kc("mailto"), Kc("ftp"), new Jc(a => /^[^:]*([/?#]|$)/.test(a))];

    function Mc(a, b = Lc) {
        if (a instanceof Gc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Jc && d.cj(a)) return new Gc(a)
        }
    }

    function Nc(a) {
        return Mc(a, Lc) || Hc
    }
    var Oc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Pc(a) {
        if (Oc.test(a)) return a
    }

    function Qc(a) {
        return a instanceof Gc ? Ic(a) : Pc(a)
    };
    const Rc = {};

    function Sc(a) {
        return a instanceof Tc && a.constructor === Tc ? a.g : "type_error:SafeStyle"
    }
    class Tc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    var Uc = new Tc("", Rc);

    function Vc(a) {
        if (a instanceof Gc) return 'url("' + a.toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof rb) a = ub(a);
        else {
            a = String(a);
            var b = a.replace(Wc, "$1").replace(Wc, "$1").replace(Xc, "url");
            if (Yc.test(b)) {
                if (b = !Zc.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        e == "'" && c ? b = !b : e == '"' && b && (c = !c)
                    }
                    b = b && c && $c(a)
                }
                a = b ? ad(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Ra("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function $c(a) {
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
    const Yc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Xc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Wc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Zc = /\/\*/;

    function ad(a) {
        return a.replace(Xc, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (h, k, l) => {
                f = k;
                return l
            });
            b = Nc(d).toString();
            return c + f + b + f + e
        })
    };
    const bd = {};

    function cd(a) {
        return a instanceof dd && a.constructor === dd ? a.g : "type_error:SafeStyleSheet"
    }
    class dd {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    const ed = {};

    function fd(a) {
        return a instanceof gd && a.constructor === gd ? a.g : "type_error:SafeHtml"
    }

    function hd(a) {
        const b = uc();
        a = b ? b.createHTML(a) : a;
        return new gd(a, ed)
    }

    function id(a) {
        var b = jd;
        b = b instanceof gd ? b : hd(Mb(String(b)));
        const c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof gd ? e : hd(Mb(String(e))), c.push(fd(e).toString()))
            };
        a.forEach(d);
        return hd(c.join(fd(b).toString()))
    }

    function kd(a) {
        return id(Array.prototype.slice.call(arguments))
    }
    class gd {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    const ld = /^[a-zA-Z0-9-]+$/,
        md = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        nd = {
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
    var jd = new gd(u.trustedTypes && u.trustedTypes.emptyHTML || "", ed);
    var od = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function pd(a) {
        return new od(a[0].toLowerCase())
    };

    function qd(a) {
        return new dd(a[0], bd)
    };

    function rd(a) {
        var b = {};
        if (a instanceof gd) return a;
        a = sd(String(a));
        b.zo && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.yo && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.Ao && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return hd(a)
    }

    function sd(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function td(a) {
        const b = rd("");
        return hd(a.map(c => fd(rd(c))).join(fd(b).toString()))
    }
    const ud = /^[a-z][a-z\d-]*$/i,
        vd = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var wd = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const xd = ["action", "formaction", "href"];

    function yd(a, b) {
        if (!ud.test("body")) throw Error("");
        if (vd.indexOf("BODY") !== -1) throw Error("");
        let c = "<body";
        a && (c += zd(a));
        Array.isArray(b) || (b = b === void 0 ? [] : [b]);
        wd.indexOf("BODY") !== -1 ? c += ">" : (a = td(b.map(d => d instanceof gd ? d : rd(String(d)))), c += ">" + a.toString() + "</body>");
        return hd(c)
    }

    function zd(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!ud.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on/i.test(d)) throw Error("");
                xd.indexOf(d.toLowerCase()) !== -1 && (e = e instanceof Gc ? e.toString() : Pc(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${rd(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function Ad(a) {
        const b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function Bd(a, ...b) {
        if (b.length === 0) return zc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return zc(c)
    }

    function Cd(a) {
        var b = Bd `https://cse.google.com/cse.js`;
        b = Ad(yc(b).toString());
        let c = b.params,
            d = c.length ? "&" : "?";
        a.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let h = 0; h < e.length; h++) {
                const k = e[h];
                k !== null && k !== void 0 && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(k)), d = "&")
            }
        });
        return zc(b.path + c + b.hash)
    };

    function Dd(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return new Tc(c, Rc)
    };
    var Ed = zb(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = fd(jd);
        return !b.parentElement
    });

    function Fd(a, b) {
        if (Ed())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = fd(b)
    }
    var Gd = /^[\w+/_-]+[=]{0,2}$/;

    function Hd(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Id(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Jd(a) {
        return Id.apply(null, arguments) / arguments.length
    };

    function Kd(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    Kd.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Kd.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Kd.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    Kd.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };

    function Ld(a, b) {
        this.width = a;
        this.height = b
    }

    function Od(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    r = Ld.prototype;
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

    function Pd(a) {
        var b = Nc("#");
        b = Qc(b);
        b !== void 0 && (a.href = b)
    };

    function Qd(a, b, c) {
        var d = [pd `width`, pd `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof od) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function Rd(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function Sd(a, b) {
        a.src = yc(b);
        (void 0) ? .xo || (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function Td(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function Ud(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : u.document.createElement("div");
        return a.replace(Vd, function(e, f) {
            var h = c[e];
            if (h) return h;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (h = String.fromCharCode(f)));
            if (!h) {
                h = hd(e + " ");
                if (d.nodeType === 1 && (f = d.tagName, f === "SCRIPT" || f === "STYLE")) throw Error("");
                d.innerHTML = fd(h);
                h = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = h
        })
    }
    var Vd = /&([^;\s<&]+);?/g;

    function Wd(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Xd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Yd(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Zd(a) {
        return a ? new $d(ae(a)) : Qa || (Qa = new $d)
    }

    function be(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new Ld(a.clientWidth, a.clientHeight)
    }

    function ce(a) {
        var b = a.scrollingElement ? a.scrollingElement : kc || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = de(a);
        return new Kd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function de(a) {
        return a.parentWindow || a.defaultView
    }

    function ee(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function fe(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function ge(a) {
        var b;
        if (kc && (b = a.parentElement)) return b;
        b = a.parentNode;
        return Ca(b) && b.nodeType == 1 ? b : null
    }

    function ae(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var he = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        ie = {
            IMG: " ",
            BR: "\n"
        };

    function je(a) {
        var b = [];
        ke(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function ke(a, b, c) {
        if (!(a.nodeName in he))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ie) b.push(ie[a.nodeName]);
        else
            for (a = a.firstChild; a;) ke(a, b, c), a = a.nextSibling
    }

    function le(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return me(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && $a(e.className.split(/\s+/), c))
        })
    }

    function me(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function $d(a) {
        this.g = a || u.document || document
    }
    r = $d.prototype;
    r.wh = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    r.Wj = $d.prototype.wh;

    function ne(a, b) {
        return ee(a.g, b)
    }

    function oe(a, b) {
        var c = a.g;
        a = ee(c, "DIV");
        Fd(a, b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    r.da = function() {
        return de(this.g)
    };
    r.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    r.Hi = function(a) {
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

    function pe() {
        return Ib && Wb ? Wb.mobile : !qe() && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
    }

    function qe() {
        return Ib && Wb ? !Wb.mobile && (v("iPad") || v("Android") || v("Silk")) : v("iPad") || v("Android") && !v("Mobile") || v("Silk")
    };
    var re = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function se(a, b) {
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

    function te(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) te(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };

    function ue(a) {
        try {
            return !!a && a.location.href != null && gc(a, "foo")
        } catch {
            return !1
        }
    }

    function ve(a, b = u) {
        b = we(b);
        let c = 0;
        for (; b && c++ < 40 && !a(b);) b = we(b)
    }

    function we(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function xe(a) {
        return ue(a.top) ? a.top : null
    }

    function ye(a, b) {
        const c = ze("SCRIPT", a);
        Sd(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Ae(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Be() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Ce(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function De(a) {
        const b = [];
        Ce(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ee(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var Ge = zb(() => Ya(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Fe) || Math.random() < 1E-4);
    const Fe = a => Vb().indexOf(a) != -1;
    var He = /^([0-9.]+)px$/,
        Ie = /^(-?[0-9.]{1,30})$/;

    function Je(a) {
        if (!Ie.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Ke(a) {
        return (a = He.exec(a)) ? +a[1] : null
    }
    var Le = {
        Bk: "allow-forms",
        Ck: "allow-modals",
        Dk: "allow-orientation-lock",
        Ek: "allow-pointer-lock",
        Fk: "allow-popups",
        Gk: "allow-popups-to-escape-sandbox",
        Hk: "allow-presentation",
        Ik: "allow-same-origin",
        Jk: "allow-scripts",
        Kk: "allow-top-navigation",
        Lk: "allow-top-navigation-by-user-activation"
    };
    const Me = zb(() => De(Le));

    function Ne() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = Me();
        return a.length ? Va(b, c => !$a(a, c)) : b
    }

    function Oe() {
        const a = ze("IFRAME"),
            b = {};
        Ta(Me(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Pe = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Qe = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (Pe(a, b)) return a;
                if (!(a = we(a))) break
            }
            return null
        },
        Re = zb(() => pe() ? 2 : qe() ? 1 : 0),
        x = (a, b) => {
            Ce(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Te = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Se(a.style.cssText), Ce(a, b)
        },
        Se = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ta((a || "").split(/\s*;\s*/), d => {
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
        Ue = a => {
            const b = /!\s*important/i;
            Te(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const Ve = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        We = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Xe = /.*domain\.test$/,
        Ye = /\.prod\.google\.com(:\d+)?$/;
    var Ze = a => Ve[a] || We.test(a) || Xe.test(a) || Ye.test(a);
    let $e = [];
    const af = () => {
        const a = $e;
        $e = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var bf = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        cf = (a, b) => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: bf(),
                    configurable: !1
                })
            } catch (c) {
                b && b.ba(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || a <= 0) && b.ba(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        df = (a, b) => {
            a.document.readyState === "complete" ? ($e.push(b), $e.length == 1 && (window.Promise ? Promise.resolve().then(af) : window.setImmediate ? setImmediate(af) : setTimeout(af, 0))) : a.addEventListener("load", b)
        },
        ef = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function ze(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var ff = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, ue(a) && (b = a);
            return b
        },
        hf = a => dc() && pe() ? gf(a) : 1,
        gf = a => {
            var b = xe(a);
            if (!b) return 1;
            a = Re() === 0;
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (d === 0) return 1;
            const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
            return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
        };

    function jf(a) {
        u.setTimeout(() => {
            throw a;
        }, 0)
    };
    ec();
    dc();
    cc();
    var kf = {},
        lf = null;

    function mf(a) {
        var b = 3;
        b === void 0 && (b = 0);
        nf();
        b = kf[b];
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

    function of (a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return mf(b)
    }

    function pf(a) {
        var b = [];
        qf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function qf(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    n = lf[m];
                if (n != null) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        nf();
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

    function nf() {
        if (!lf) {
            lf = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                kf[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    lf[f] === void 0 && (lf[f] = e)
                }
            }
        }
    };

    function rf(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const sf = /[-_.]/g,
        tf = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function uf(a) {
        return tf[a] || ""
    }

    function vf(a) {
        return a != null && a instanceof Uint8Array
    }
    var wf = {},
        xf = typeof structuredClone != "undefined";
    let yf;

    function zf(a) {
        if (a !== wf) throw Error("illegal external caller");
    }

    function Af() {
        return yf || (yf = new Bf(null, wf))
    }
    var Bf = class {
        constructor(a, b) {
            zf(b);
            this.g = a;
            if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return this.g == null
        }
    };
    let Cf = 0,
        Df = 0;

    function Ef(a) {
        const b = a >>> 0;
        Cf = b;
        Df = (a - b) / 4294967296 >>> 0
    }

    function Ff(a) {
        if (a < 0) {
            Ef(-a);
            a = Cf;
            var b = Df;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Cf = c >>> 0;
            Df = d >>> 0
        } else Ef(a)
    }

    function Gf(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Hf() {
        var a = Cf,
            b = Df,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Gf(a, b);
        return c
    }

    function If(a) {
        a.length < 16 ? Ff(Number(a)) : (a = BigInt(a), Cf = Number(a & BigInt(4294967295)) >>> 0, Df = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function Jf(a) {
        return Array.prototype.slice.call(a)
    };
    var y = Symbol(),
        Kf = Symbol(),
        Lf = Symbol(),
        Mf = Symbol(),
        Nf = Symbol();

    function Of(a) {
        return !!((a[y] | 0) & 2)
    }

    function Pf(a) {
        a[y] |= 34;
        return a
    }

    function Qf(a) {
        a[y] |= 32;
        return a
    }

    function Rf(a, b) {
        b[y] = (a | 0) & -14591
    }

    function Sf(a, b) {
        b[y] = (a | 34) & -14557
    };
    var Tf = {},
        Uf = {};

    function Vf(a) {
        return !(!a || typeof a !== "object" || a.gj !== Uf)
    }

    function Wf(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Xf(a, b, c) {
        if (a != null)
            if (typeof a === "string") a = a ? new Bf(a, wf) : Af();
            else if (a.constructor !== Bf)
            if (vf(a)) a = a.length ? new Bf(c ? a : new Uint8Array(a), wf) : Af();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }

    function Yf(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[y] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[y] = d | 1;
        return !0
    }
    var Zf;
    const $f = [];
    $f[y] = 55;
    Zf = Object.freeze($f);

    function ag(a) {
        if (a & 2) throw Error();
    }
    class bg {
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
            return new bg(this.g, this.i, this.l)
        }
    }
    Object.freeze({});
    Object.freeze({});
    var hg = Object.freeze({});
    let ig, jg;

    function kg(a) {
        if (jg) throw Error("");
        jg = b => {
            u.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function lg(a) {
        if (jg) try {
            jg(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function mg() {
        const a = Error();
        Td(a, "incident");
        jg ? lg(a) : jf(a)
    }

    function ng(a) {
        a = Error(a);
        Td(a, "warning");
        lg(a);
        return a
    };

    function og(a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function pg(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${za(a)}: ${a}`);
        return a
    }
    const qg = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function rg(a) {
        const b = typeof a;
        return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : qg.test(a)
    }

    function sg(a) {
        if (!Number.isFinite(a)) throw ng("enum");
        return a | 0
    }

    function tg(a) {
        return a == null ? a : sg(a)
    }

    function ug(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function vg(a) {
        if (typeof a !== "number") throw ng("int32");
        if (!Number.isFinite(a)) throw ng("int32");
        return a | 0
    }

    function wg(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function xg(a) {
        if (typeof a !== "number") throw ng("uint32");
        if (!Number.isFinite(a)) throw ng("uint32");
        return a >>> 0
    }

    function yg(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function zg(a, b) {
        b = !!b;
        if (!rg(a)) throw ng("int64");
        return typeof a === "string" ? Ag(a) : b ? Bg(a) : Cg(a)
    }

    function Dg(a) {
        return a == null ? a : zg(a)
    }

    function Eg(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function Fg(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function Gg(a) {
        if (a < 0) {
            Ff(a);
            const b = Gf(Cf, Df);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Eg(String(a))) return a;
        Ff(a);
        return Df * 4294967296 + (Cf >>> 0)
    }

    function Cg(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Ff(a);
            var b = Cf,
                c = Df;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Bg(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Fg(b) ? a = b : (Ff(a), a = Hf())
            }
        }
        return a
    }

    function Hg(a) {
        a = Math.trunc(a);
        if (a >= 0 && Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Eg(b) ? a = b : (Ff(a), a = Gf(Cf, Df))
            }
        }
        return a
    }

    function Ag(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Fg(a) || (If(a), a = Hf());
        return a
    }

    function Ig(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Eg(a) || (If(a), a = Gf(Cf, Df));
        return a
    }

    function Jg(a) {
        if (a == null) return a;
        if (rg(a)) {
            var b;
            typeof a === "number" ? b = Cg(a) : b = Ag(a);
            return b
        }
    }

    function Kg(a, b) {
        b = !!b;
        if (!rg(a)) throw ng("uint64");
        typeof a === "string" ? a = Ig(a) : b ? a = Hg(a) : (a = Math.trunc(a), a = a >= 0 && Number.isSafeInteger(a) ? a : Gg(a));
        return a
    }

    function Lg(a) {
        return a == null ? a : Kg(a)
    }

    function Mg(a) {
        if (a == null) return a;
        if (rg(a)) return typeof a === "string" ? Ig(a) : Hg(a)
    }

    function Ng(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function Og(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Pg(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Qg(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Gd === Tf) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Rg(b) : new b : void 0;
        let e = c = a[y] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[y] = e);
        return new b(a)
    }

    function Rg(a) {
        var b = a[Kf];
        if (b) return b;
        b = new a;
        Pf(b.U);
        return a[Kf] = b
    }

    function Sg(a, b, c) {
        return b ? Ng(a) : Pg(a) ? ? (c ? "" : void 0)
    };
    const Tg = {},
        Ug = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function Vg(a) {
        return a
    }

    function Wg(a) {
        if (a.ac & 2) throw Error("Cannot mutate an immutable Map");
    }
    var $g = class extends Ug {
        constructor(a, b, c = Vg, d = Vg) {
            super();
            let e = a[y] | 0;
            e |= 64;
            this.ac = a[y] = e;
            this.Zd = b;
            this.yc = c;
            this.yf = this.Zd ? Xg : d;
            for (let f = 0; f < a.length; f++) {
                const h = a[f],
                    k = c(h[0], !1, !0);
                let l = h[1];
                b ? l === void 0 && (l = null) : l = d(h[1], !1, !0, void 0, void 0, e);
                super.set(k, l)
            }
        }
        uf(a = Yg) {
            if (this.size !== 0) return this.tf(a)
        }
        tf(a = Yg) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            Wg(this);
            super.clear()
        }
        delete(a) {
            Wg(this);
            return super.delete(this.yc(a, !0, !1))
        }
        entries() {
            var a = this.zg();
            return new bg(a, Zg, this)
        }
        keys() {
            return this.dj()
        }
        values() {
            var a = this.zg();
            return new bg(a, $g.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            Wg(this);
            a = this.yc(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.yf(b, !0, !0, this.Zd, !1, this.ac))
        }
        has(a) {
            return super.has(this.yc(a, !1, !1))
        }
        get(a) {
            a = this.yc(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.Zd;
                return c ? (c = this.yf(b, !1, !0, c, this.Vh,
                    this.ac), c !== b && super.set(a, c), c) : b
            }
        }
        zg() {
            return Array.from(super.keys())
        }
        dj() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    $g.prototype.toJSON = void 0;
    $g.prototype.gj = Uf;

    function Xg(a, b, c, d, e, f) {
        a = Qg(a, d, c, f);
        e && (a = ah(a));
        return a
    }

    function Yg(a) {
        return a
    }

    function Zg(a) {
        return [a, this.get(a)]
    }
    let bh;

    function ch() {
        return bh || (bh = new $g(Pf([]), void 0, void 0, void 0, Tg))
    };
    let dh;

    function eh(a, b) {
        dh = b;
        a = new a(b);
        dh = void 0;
        return a
    };

    function fh(a, b) {
        return gh(b)
    }

    function gh(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Yf(a, void 0, 0)) return
                    } else {
                        if (vf(a)) return rf(a);
                        if (a instanceof Bf) {
                            const b = a.g;
                            return b == null ? "" : typeof b === "string" ? b : a.g = rf(b)
                        }
                        if (a instanceof $g) return a.uf()
                    }
        }
        return a
    };

    function hh(a, b, c) {
        a = Jf(a);
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

    function ih(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Yf(a, void 0, 0) ? void 0 : e && (a[y] | 0) & 2 ? a : jh(a, b, c, d !== void 0, e);
            else if (Wf(a)) {
                const f = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (f[h] = ih(a[h], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function jh(a, b, c, d, e) {
        const f = d || c ? a[y] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Jf(a);
        for (let h = 0; h < a.length; h++) a[h] = ih(a[h], b, c, d, e);
        c && c(f, a);
        return a
    }

    function kh(a) {
        return ih(a, lh, void 0, void 0, !1)
    }

    function lh(a) {
        a.Gd === Tf ? a = a.toJSON() : a instanceof Bf ? (a = a.g || "", a = typeof a === "string" ? a : new Uint8Array(a)) : a = vf(a) ? new Uint8Array(a) : a instanceof $g ? a.uf(kh) : a;
        return a
    }

    function mh(a) {
        return ih(a, nh, void 0, void 0, !1)
    }

    function nh(a) {
        return a.Gd === Tf ? a.toJSON() : a instanceof $g ? a.uf(mh) : gh(a)
    }
    var oh = xf ? structuredClone : a => jh(a, lh, void 0, void 0, !1);

    function ph(a, b, c = Sf) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[y] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[y] = (d | 34) & -12293, a) : jh(a, ph, d & 4 ? Sf : c, !0, !0)
            }
            a.Gd === Tf ? (c = a.U, d = c[y], a = d & 2 ? a : eh(a.constructor, qh(c, d, !0))) : a instanceof $g && !(a.ac & 2) && (c = Pf(a.tf(ph)), a = new $g(c, a.Zd, a.yc, a.yf));
            return a
        }
    }

    function rh(a) {
        const b = a.U;
        return eh(a.constructor, qh(b, b[y], !1))
    }

    function qh(a, b, c) {
        const d = c || b & 2 ? Sf : Rf,
            e = !!(b & 32);
        a = hh(a, b, f => ph(f, e, d));
        a[y] = a[y] | 32 | (c ? 2 : 0);
        return a
    }

    function ah(a) {
        const b = a.U,
            c = b[y];
        return c & 2 ? eh(a.constructor, qh(b, c, !1)) : a
    };

    function sh(a) {
        if (typeof Proxy !== "function") return a;
        let b = th ? .get(a);
        if (b) return b;
        b = new Proxy(a, {
            set(c, d, e) {
                uh();
                c[d] = e;
                return !0
            }
        });
        vh(a, b);
        return b
    }

    function uh() {
        mg()
    }
    let th = void 0,
        wh = void 0;

    function vh(a, b) {
        (th || (th = new WeakMap)).set(a, b);
        (wh || (wh = new WeakMap)).set(b, a)
    };

    function xh(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[Mf] = (a.constructor[Mf] | 0) + 1) < 5 && mg();
        return c === 0 ? !1 : !(c & b)
    }

    function yh(a, b) {
        a = a.U;
        return zh(a, a[y], b)
    }

    function Ah(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function zh(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Ah(a, b, e, c) && Lf != null && (a = ig ? ? (ig = {}), b = a[Lf] || 0, b >= 4 || (a[Lf] = b + 1, mg())), d) : Ah(a, b, e, c)
        }
    }

    function Bh(a, b, c) {
        const d = a.U;
        let e = d[y];
        ag(e);
        Ch(d, e, b, c);
        return a
    }

    function Ch(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Kb) {
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

    function Dh(a, b, c) {
        return Eh(a, b, c, !1) !== void 0
    }

    function Fh(a, b, c, d) {
        var e = b & 2;
        let f = zh(a, b, c, d);
        Array.isArray(f) || (f = Zf);
        const h = !!(b & 32);
        let k = f[y] | 0;
        k === 0 && h && !e ? (k |= 33, f[y] = k) : k & 1 || (k |= 1, f[y] = k);
        if (e) k & 2 || Pf(f), Object.freeze(f);
        else if (2 & k || 2048 & k) f = Jf(f), e = 1, h && (e |= 32), f[y] = e, Ch(a, b, c, f, d);
        return f
    }

    function Gh(a, b) {
        a = a.U;
        let c = a[y];
        const d = zh(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && Ch(a, c, b, e);
        return e
    }

    function Hh(a, b, c, d) {
        const e = a.U;
        var f = e[y];
        const h = 2 & f ? 1 : 2;
        let k = Ih(e, f, b);
        var l = k[y] | 0;
        if (xh(a, l, d, !1)) {
            if (4 & l || Object.isFrozen(k)) k = Jf(k), l = Jh(l, f), f = Ch(e, f, b, k);
            let n = a = 0;
            for (; a < k.length; a++) {
                const p = c(k[a]);
                p != null && (k[n++] = p)
            }
            n < a && (k.length = n);
            l = Kh(l, f);
            l = (l | 20) & -4097;
            l &= -8193;
            d && (l |= d);
            k[y] = l;
            2 & l && Object.freeze(k)
        }
        let m;
        h === 1 || h === 4 && 32 & l ? Lh(l) || (f = l, l |= 2, l !== f && (k[y] = l), Object.freeze(k)) : (d = h !== 5 ? !1 : !!(32 & l) || Lh(l) || !!th ? .get(k), (h === 2 || d) && Lh(l) && (k = Jf(k), l = Jh(l, f), l = Mh(l, f, !1), k[y] = l, f =
            Ch(e, f, b, k)), Lh(l) || (b = l, l = Mh(l, f, !1), l !== b && (k[y] = l)), d && (m = sh(k)));
        return m || k
    }

    function Ih(a, b, c, d) {
        a = zh(a, b, c, d);
        return Array.isArray(a) ? a : Zf
    }

    function Kh(a, b) {
        a === 0 && (a = Jh(a, b));
        return a | 1
    }

    function Lh(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Nh(a) {
        var b = Oh,
            c = a.U;
        const d = c[y];
        var e = zh(c, d, 14);
        a = d & 2;
        a: {
            var f = e,
                h = d & 2;e = !1;
            if (f == null) {
                if (h) {
                    c = ch();
                    break a
                }
                f = []
            } else if (f.constructor === $g) {
                if ((f.ac & 2) == 0 || h) {
                    c = f;
                    break a
                }
                f = f.tf()
            } else Array.isArray(f) ? e = Of(f) : f = [];
            if (h) {
                if (!f.length) {
                    c = ch();
                    break a
                }
                e || (e = !0, Pf(f))
            } else if (e) {
                e = !1;
                h = Jf(f);
                for (f = 0; f < h.length; f++) {
                    const k = h[f] = Jf(h[f]);
                    Array.isArray(k[1]) && (k[1] = Pf(k[1]))
                }
                f = h
            }
            e || ((f[y] | 0) & 64 ? f[y] &= -33 : 32 & d && Qf(f));e = new $g(f, b, Sg, void 0);Ch(c, d, 14, e, !1);c = e
        }!a && b && (c.Vh = !0);
        return c
    }

    function Ph(a, b, c, d) {
        const e = a.U;
        let f = e[y];
        ag(f);
        if (c == null) return Ch(e, f, b), a;
        c = wh ? .get(c) || c;
        let h = c[y] | 0,
            k = h;
        var l = !!(2 & h) || Object.isFrozen(c);
        const m = !l && (void 0 === hg || !1);
        if (xh(a, h))
            for (h = 21, l && (c = Jf(c), k = 0, h = Jh(h, f), h = Mh(h, f, !0)), l = 0; l < c.length; l++) c[l] = d(c[l]);
        m && (c = Jf(c), k = 0, h = Jh(h, f), h = Mh(h, f, !0));
        h !== k && (c[y] = h);
        Ch(e, f, b, c);
        return a
    }

    function Qh(a, b, c, d) {
        const e = a.U;
        let f = e[y];
        ag(f);
        Ch(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Rh(a, b) {
        var c = a.U,
            d = c[y] | 0;
        ag(a.U[y]);
        c = Fh(c, d, 3, !1);
        d = c[y] | 0;
        d = !!(4 & d) && !!(4096 & d);
        if (Array.isArray(b))
            for (var e = 0; e < b.length; e++) c.push(zg(b[e], d));
        else
            for (e of b) c.push(zg(e, d));
        return a
    }

    function Sh(a, b, c, d) {
        var e = a.U;
        const f = e[y];
        ag(f);
        b = Fh(e, f, b);
        e = b[y] | 0;
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    }

    function Th(a, b, c, d) {
        const e = a.U;
        var f = e[y];
        ag(f);
        if (d == null) {
            var h = Uh(e);
            if (Vh(h, e, f, c) === b) h.set(c, 0);
            else return a
        } else {
            h = Uh(e);
            const k = Vh(h, e, f, c);
            k !== b && (k && (f = Ch(e, f, k)), h.set(c, b))
        }
        Ch(e, f, b, d);
        return a
    }

    function Wh(a, b) {
        a = a.U;
        return Vh(Uh(a), a, a[y], b)
    }

    function Uh(a) {
        return a[Nf] ? ? (a[Nf] = new Map)
    }

    function Vh(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const h = d[f];
            zh(b, c, h) != null && (e !== 0 && (c = Ch(b, c, e)), e = h)
        }
        a.set(d, e);
        return e
    }

    function Eh(a, b, c, d) {
        a = a.U;
        let e = a[y];
        const f = zh(a, e, c, d);
        b = Qg(f, b, !1, e);
        b !== f && b != null && Ch(a, e, c, b, d);
        return b
    }

    function Xh(a) {
        var b = Yh;
        return (a = Eh(a, b, 1, !1)) ? a : Rg(b)
    }

    function z(a, b, c) {
        b = Eh(a, b, c, !1);
        if (b == null) return b;
        a = a.U;
        let d = a[y];
        if (!(d & 2)) {
            const e = ah(b);
            e !== b && (b = e, Ch(a, d, c, b, !1))
        }
        return b
    }

    function Zh(a, b, c, d, e, f, h, k) {
        var l = !!(2 & b);
        e = l ? 1 : e;
        h = !!h;
        k && (k = !l);
        l = Ih(a, b, d, f);
        var m = l[y] | 0,
            n = !!(4 & m);
        if (!n) {
            m = Kh(m, b);
            var p = l,
                q = b;
            const w = !!(2 & m);
            w && (q |= 2);
            let A = !w,
                D = !0,
                G = 0,
                I = 0;
            for (; G < p.length; G++) {
                const B = Qg(p[G], c, !1, q);
                if (B instanceof c) {
                    if (!w) {
                        const J = Of(B.U);
                        A && (A = !J);
                        D && (D = J)
                    }
                    p[I++] = B
                }
            }
            I < G && (p.length = I);
            m |= 4;
            m = D ? m | 16 : m & -17;
            m = A ? m | 8 : m & -9;
            p[y] = m;
            w && Object.freeze(p)
        }
        if (k && !(8 & m || !l.length && (e === 1 || e === 4 && 32 & m))) {
            Lh(m) && (l = Jf(l), m = Jh(m, b), b = Ch(a, b, d, l, f));
            c = l;
            k = m;
            for (p = 0; p < c.length; p++) m = c[p],
                q = ah(m), m !== q && (c[p] = q);
            k |= 8;
            k = c.length ? k & -17 : k | 16;
            m = c[y] = k
        }
        let t;
        e === 1 || e === 4 && 32 & m ? Lh(m) || (b = m, m |= !l.length || 16 & m && (!n || 32 & m) ? 2 : 2048, m !== b && (l[y] = m), Object.freeze(l)) : (n = e !== 5 ? !1 : !!(32 & m) || Lh(m) || !!th ? .get(l), (e === 2 || n) && Lh(m) && (l = Jf(l), m = Jh(m, b), m = Mh(m, b, h), l[y] = m, b = Ch(a, b, d, l, f)), Lh(m) || (a = m, m = Mh(m, b, h), m !== a && (l[y] = m)), n && (t = sh(l)));
        return t || l
    }

    function $h(a, b, c) {
        a = a.U;
        const d = a[y];
        return Zh(a, d, b, c, 2, void 0, !1, !(2 & d))
    }

    function C(a, b, c) {
        c == null && (c = void 0);
        return Bh(a, b, c)
    }

    function E(a, b, c, d) {
        d == null && (d = void 0);
        return Th(a, b, c, d)
    }

    function ai(a, b, c) {
        const d = a.U;
        let e = d[y];
        ag(e);
        if (c == null) return Ch(d, e, b), a;
        c = wh ? .get(c) || c;
        let f = c[y] | 0,
            h = f;
        const k = !!(2 & f) || !!(2048 & f),
            l = k || Object.isFrozen(c),
            m = !l && (void 0 === hg || !1);
        let n = !0,
            p = !0;
        for (let t = 0; t < c.length; t++) {
            var q = c[t];
            k || (q = Of(q.U), n && (n = !q), p && (p = q))
        }
        k || (f |= 5, f = n ? f | 8 : f & -9, f = p ? f | 16 : f & -17);
        if (m || l && f !== h) c = Jf(c), h = 0, f = Jh(f, e), f = Mh(f, e, !0);
        f !== h && (c[y] = f);
        Ch(d, e, b, c);
        return a
    }

    function Jh(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Mh(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function bi(a, b, c, d, e, f, h) {
        a = a.U;
        const k = a[y];
        ag(k);
        b = Zh(a, k, c, b, 2, f, !0);
        c = d != null ? d : new c;
        if (h && (typeof e !== "number" || e < 0 || e > b.length)) throw Error();
        e != void 0 ? b.splice(e, h, c) : b.push(c);
        b[y] = Of(c.U) ? b[y] & -9 : b[y] & -17
    }

    function ci(a, b, c, d) {
        bi(a, b, c, d);
        return a
    }

    function di(a, b) {
        return a ? ? b
    }

    function ei(a, b) {
        a = yh(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function fi(a, b) {
        return wg(yh(a, b))
    }

    function F(a, b) {
        return Pg(yh(a, b))
    }

    function gi(a, b) {
        return ug(yh(a, b))
    }

    function K(a, b, c = !1) {
        return di(ei(a, b), c)
    }

    function hi(a, b) {
        return di(fi(a, b), 0)
    }

    function ii(a, b) {
        return di(Jg(yh(a, b)), 0)
    }

    function ji(a, b, c = 0) {
        return di(Gh(a, b), c)
    }

    function L(a, b) {
        return di(F(a, b), "")
    }

    function ki(a, b) {
        return di(gi(a, b), 0)
    }

    function li(a, b, c, d) {
        c = Wh(a, d) === c ? c : -1;
        return z(a, b, c)
    }

    function mi(a, b) {
        a = fi(a, b);
        return a == null ? void 0 : a
    }

    function ni(a) {
        a = Gh(a, 4);
        return a == null ? void 0 : a
    }

    function oi(a, b) {
        a = gi(a, b);
        return a == null ? void 0 : a
    }

    function pi(a, b, c) {
        return Bh(a, b, c == null ? c : pg(c))
    }

    function M(a, b, c) {
        return Qh(a, b, c == null ? c : pg(c), !1)
    }

    function qi(a, b, c) {
        return Bh(a, b, c == null ? c : vg(c))
    }

    function ri(a, b, c) {
        return Qh(a, b, c == null ? c : vg(c), 0)
    }

    function si(a, b, c) {
        return Bh(a, b, Dg(c))
    }

    function ti(a, b, c) {
        return Qh(a, b, Dg(c), "0")
    }

    function Ai(a, b, c) {
        return Bh(a, b, Og(c))
    }

    function Bi(a, b, c) {
        return Qh(a, b, Og(c), "")
    }

    function N(a, b, c) {
        return Qh(a, b, tg(c), 0)
    };
    let Ci;

    function Di(a) {
        try {
            return Ci = !0, JSON.stringify(Ei(a), fh)
        } finally {
            Ci = !1
        }
    }
    var O = class {
        constructor(a) {
            a: {
                a == null && (a = dh);dh = void 0;
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
                    if (d && (--d, Wf(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[y] = b
            }
            this.U = a
        }
        toJSON() {
            return Ei(this)
        }
        i() {
            const a = this.U,
                b = a[y];
            return b & 2 ? this : eh(this.constructor, qh(a, b, !0))
        }
    };
    O.prototype.Gd = Tf;

    function Ei(a) {
        var b = Ci ? a.U : jh(a.U, nh, void 0, void 0, !1);
        var c = !Ci;
        var d = Jb ? void 0 : a.constructor.O;
        var e = (c ? a.U : b)[y];
        if (a = b.length) {
            var f = b[a - 1],
                h = Wf(f);
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
                            Array.isArray(t) && (Yf(t, d, +n) || Vf(t) && t.size === 0) && (t = null);
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
                if (!(n == null || Yf(n, d, p) || Vf(n) && n.size === 0)) break;
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

    function Fi(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[y] |= 128;
        return eh(a, Qf(b))
    };

    function Gi(a, b) {
        const c = Hi;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function Ii(a) {
        a.uo = !0;
        return a
    }
    let Hi = void 0;
    const Ji = Ii(a => a !== null && a !== void 0);

    function Ki(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = eh(a, Qf(b))
            }
            return b
        }
    };
    Bd `https://www.google.com/recaptcha/api2/aframe`;

    function Li(a) {
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
            Sd(f, a);
            b.document.readyState !== "complete" ? Gb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Mi(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.Wb}`;
        let c = void 0;
        try {
            c = await Ni(b)
        } catch (h) {}
        if (c) {
            b = a.xc || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.j ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                Qh: c.bg_hash_basename,
                Ph: c.bg_binary,
                ej: a.g + "_" + a.i,
                xc: b,
                Wb: a.Wb,
                vd: d,
                Ud: e,
                rd: f
            }
        }
    }
    let Ni = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Oi(a) {
        var b = await Mi(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Qh,
                _bgp_: b.Ph,
                _li_: b.ej,
                _jk_: b.xc,
                _st_: b.Wb,
                _rc_: b.vd,
                _dl_: b.Ud,
                _g2_: b.rd
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Bd `https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            Li(a)
        }
    };

    function Pi(a, b) {
        return Bi(a, 1, b)
    }
    var Qi = class extends O {
        g() {
            return L(this, 1)
        }
    };

    function Ri(a, b) {
        return C(a, 5, b)
    }

    function Si(a, b) {
        return Bi(a, 3, b)
    }

    function Ti(a, b) {
        return M(a, 6, b)
    }
    var Ui = class extends O {
        constructor() {
            super()
        }
    };

    function Vi(a) {
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
    var Wi = class {
            constructor(a) {
                this.g = a.i;
                this.i = a.j;
                this.l = a.l;
                this.xc = a.xc;
                this.win = a.da();
                this.Wb = a.Wb;
                this.vd = a.vd;
                this.Ud = a.Ud;
                this.rd = a.rd;
                this.j = a.g
            }
        },
        Xi = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.l = c;
                this.win = window;
                this.Wb = "env";
                this.vd = "n";
                this.Ud = "0";
                this.rd = "1";
                this.g = !0
            }
            da() {
                return this.win
            }
            build() {
                return new Wi(this)
            }
        };

    function Yi(a) {
        var b = new Zi;
        return Ai(b, 1, a)
    }
    var Zi = class extends O {
        getValue() {
            return L(this, 1)
        }
        getVersion() {
            return ki(this, 5)
        }
    };
    var $i = class extends O {};
    $i.O = [2, 3, 4];
    var aj = class extends O {};

    function bj(a, b, c = null, d = !1, e = !1) {
        cj(a, b, c, d, e)
    }

    function cj(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = ze("IMG", a.document);
        if (c || d) {
            const h = k => {
                c && c(k);
                d && ab(a.google_image_requests, f);
                Hb(f, "load", h);
                Hb(f, "error", h)
            };
            Gb(f, "load", h);
            Gb(f, "error", h)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var ej = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Ce(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            dj(c)
        },
        dj = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : bj(b, a, void 0, !1, !1)
        };
    let fj = null;
    var gj = window;
    var hj = class extends O {
        constructor() {
            super()
        }
    };
    hj.O = [15];
    var ij = class extends O {
        constructor() {
            super()
        }
        getCorrelator() {
            return ii(this, 1)
        }
        setCorrelator(a) {
            return ti(this, 1, a)
        }
    };
    var jj = class extends O {
        constructor() {
            super()
        }
    };

    function kj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    r = kj.prototype;
    r.set = function(a, b, c) {
        let d, e, f, h = !1,
            k;
        typeof c === "object" && (k = c.Xg, h = c.Sd || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Bd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (h ? ";secure" : "") + (k != null ? ";samesite=" + k : "")
    };
    r.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Lb(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };

    function lj(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Bd: 0,
            path: c,
            domain: d
        })
    }
    r.isEmpty = function() {
        return !this.g.cookie
    };
    r.vc = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    r.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Lb(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) lj(this, b[a])
    };

    function mj(a, b = window) {
        if (a.g()) try {
            return b.localStorage
        } catch {}
        return null
    }

    function nj(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }
    let oj;

    function pj(a) {
        return oj ? oj : a.origin === "null" ? oj = !1 : oj = qj(a)
    }

    function qj(a) {
        if (!a.navigator.cookieEnabled) return !1;
        const b = new kj(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            Bd: 60,
            Xg: a.isSecureContext ? "none" : void 0,
            Sd: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        lj(b, "TESTCOOKIESENABLED");
        return !0
    }

    function rj(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new kj({
            cookie: b
        })).get(a) || ""
    }

    function sj(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = { ...c,
            Xg: "none",
            Sd: !0
        }), (new kj(d.document)).set(a, b, c))
    };
    let tj = null,
        uj = null;

    function vj() {
        if (tj != null) return tj;
        tj = !1;
        try {
            const a = xe(u);
            a && a.location.hash.indexOf("google_logging") !== -1 && (tj = !0);
            nj(u) ? .getItem("google_logging") && (tj = !0)
        } catch (a) {}
        return tj
    }

    function wj() {
        if (uj != null) return uj;
        uj = !1;
        try {
            const a = xe(u),
                b = nj(u);
            if (a && a.location.hash.indexOf("auto_ads_logging") !== -1 || b && b.getItem("auto_ads_logging")) uj = !0
        } catch (a) {}
        return uj
    }
    var xj = (a, b = []) => {
        let c = !1;
        u.google_logging_queue || (c = !0, u.google_logging_queue = []);
        u.google_logging_queue.push([a, b]);
        c && vj() && ye(u.document, Bd `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function yj(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    r = yj.prototype;
    r.getWidth = function() {
        return this.right - this.left
    };
    r.getHeight = function() {
        return this.bottom - this.top
    };

    function zj(a) {
        return new yj(a.top, a.right, a.bottom, a.left)
    }
    r.contains = function(a) {
        return this && a ? a instanceof yj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Aj(a, b) {
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

    function Bj(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Cj(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Bj(c, e, d - c, a - e)
        }
        return null
    }

    function Dj(a, b) {
        var c = Cj(a, b);
        if (!c || !c.height || !c.width) return [new Bj(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            h = a.top + a.height,
            k = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new Bj(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < h && (c.push(new Bj(a.left, l, a.width, h - l)), e = l - d);
        b.left > a.left && c.push(new Bj(a.left, d, b.left - a.left, e));
        k < f && c.push(new Bj(k, d, f - k, e));
        return c
    }
    r = Bj.prototype;
    r.contains = function(a) {
        return a instanceof Kd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
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
    const Ej = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Fj(a = u) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Gj(a = Fj()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Hj(a = Fj()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Ej[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Ij() {
        var a = Fj();
        return a && a.initialIntersection
    }

    function Jj() {
        const a = Ij();
        return a && Ca(a.rootBounds) ? new Ld(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Kj(a = Fj()) {
        return a ? ue(a.master) ? a.master : null : null
    }

    function Lj(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            ab(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = h => {
            if (a.ampInaboxInitialized) h = !0;
            else {
                var k, l = h.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !l && (k = /^amp-(\d{15,20})?/.exec(h.data)) && (a.ampInaboxPendingMessages.push(h), h = k[1], a.ampInaboxInitialized ||
                    h && !/^\d{15,20}$/.test(h) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || ye(a.document, h ? Bd `https://cdn.ampproject.org/rtv/${h}/amp4ads-host-v0.js` : Bd `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                h = !1
            }
            h && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Gb(a, "message", f), d = () => {
            Hb(a, "message", f)
        });
        return e
    };
    var Mj = () => a => {
        a = {
            id: "unsafeurl",
            ctx: 638,
            url: a
        };
        var b = [];
        for (c in a) te(c, a[c], b);
        var c = se("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
        navigator.sendBeacon && navigator.sendBeacon(c, "")
    };

    function Nj(a, b, c) {
        if (typeof b === "string")(b = Oj(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Oj(c, d);
                f && (c.style[f] = e)
            }
    }
    var Pj = {};

    function Oj(a, b) {
        var c = Pj[b];
        if (!c) {
            var d = Xd(b);
            c = d;
            a.style[d] === void 0 && (d = (kc ? "Webkit" : jc ? "Moz" : hc ? "ms" : null) + Yd(d), a.style[d] !== void 0 && (c = d));
            Pj[b] = c
        }
        return c
    }

    function Qj(a, b) {
        var c = a.style[Xd(b)];
        return typeof c !== "undefined" ? c : a.style[Oj(a, b)] || ""
    }

    function Rj(a, b) {
        var c = ae(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Sj(a, b) {
        return Rj(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Tj(a) {
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

    function Uj(a) {
        var b = ae(a),
            c = new Kd(0, 0);
        if (a == (b ? ae(b) : document).documentElement) return c;
        a = Tj(a);
        b = ce(Zd(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Vj(a) {
        var b = Wj;
        if (Sj(a, "display") != "none") return b(a);
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

    function Wj(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = kc && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Tj(a), new Ld(a.right - a.left, a.bottom - a.top)) : new Ld(b, c)
    };
    var Xj = a => typeof a === "number" && a > 0,
        Zj = (a, b) => {
            a = Yj(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + (c === "?" || c === "#" ? "" : "&") + a
        },
        Yj = a => Object.entries(ak(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        ak = a => {
            const b = {};
            Ce(a, (c, d) => {
                if (c || c === 0 || c === !1) typeof c === "boolean" && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        bk = () => {
            try {
                return gj.history.length
            } catch (a) {
                return 0
            }
        },
        ck = a => {
            a = Kj(Fj(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        dk = a => {
            a = a.google_unique_id;
            return typeof a === "number" ?
                a : 0
        },
        ek = a => {
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
        fk = () => {
            if (!gj) return !1;
            try {
                return !(!gj.navigator.standalone && !gj.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        gk = a => (a = a.google_ad_format) ?
        a.indexOf("_0ads") > 0 : !1,
        hk = a => {
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
    class ik {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const jk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var kk = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        lk = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.wg = !!c;
                this.depth = null
            }
        };
    let mk = null;

    function nk() {
        if (mk === null) {
            mk = "";
            try {
                let a = "";
                try {
                    a = u.top.location.hash
                } catch (b) {
                    a = u.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    mk = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return mk
    };

    function ok() {
        const a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function pk() {
        const a = u.performance;
        return a && a.now ? a.now() : null
    };
    var qk = class {
        constructor(a, b) {
            var c = pk() || ok();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const rk = u.performance,
        sk = !!(rk && rk.mark && rk.measure && rk.clearMarks),
        tk = zb(() => {
            var a;
            if (a = sk) a = nk(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function uk(a) {
        a && rk && tk() && (rk.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), rk.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function vk(a) {
        a.g = !1;
        a.i != a.j.google_js_reporting_queue && (tk() && Ta(a.i, uk), a.i.length = 0)
    }

    function wk(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw uk(c), e;
        }
        a.end(c);
        return d
    }
    class xk {
        constructor(a) {
            this.i = [];
            this.j = a || u;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = tk() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new qk(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            rk && tk() && rk.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (pk() || ok()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                rk && tk() && rk.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function yk(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function zk(a, b, c, d, e) {
        const f = [];
        Ce(a, function(h, k) {
            (h = Ak(h, b, c, d, e)) && f.push(k + "=" + h)
        });
        return f.join(b)
    }

    function Ak(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let h = 0; h < a.length; h++) f.push(Ak(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(zk(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Bk(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Ck(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Bk(a) - b.length;
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
                let m = zk(k[l], a.j, ",$");
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
    class Dk {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function Ek(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = Fk(a.stack, b));
        return b
    }

    function Fk(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var Hk = class {
        constructor(a, b, c = null) {
            this.ta = a;
            this.A = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.C = this.ba
        }
        nf(a) {
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
                    uk(e), b = this.C(a, new ik(f, {
                        message: Ek(f)
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
                const H = new Dk;
                var h = H;
                h.g.push(1);
                h.i[1] = yk("context", a);
                b.error && b.meta && b.id || (b = new ik(b, {
                    message: Ek(b)
                }));
                if (b.msg) {
                    h = H;
                    var k = b.msg.substring(0, 512);
                    h.g.push(2);
                    h.i[2] = yk("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.g) try {
                    this.g(b)
                } catch (fa) {}
                if (d) try {
                    d(b)
                } catch (fa) {}
                d = H;
                l = [l];
                d.g.push(3);
                d.i[3] = l;
                d = u;
                l = [];
                b = null;
                do {
                    var m = d;
                    if (ue(m)) {
                        var n = m.location.href;
                        b = m.document && m.document.referrer || null
                    } else n = b, b = null;
                    l.push(new lk(n || "", m));
                    try {
                        d = m.parent
                    } catch (fa) {
                        d = null
                    }
                } while (d && m != d);
                for (let fa = 0, la = l.length - 1; fa <= la; ++fa) l[fa].depth =
                    la - fa;
                m = u;
                if (m.location && m.location.ancestorOrigins && m.location.ancestorOrigins.length == l.length - 1)
                    for (n = 1; n < l.length; ++n) {
                        var p = l[n];
                        p.url || (p.url = m.location.ancestorOrigins[n - 1] || "", p.wg = !0)
                    }
                var q = l;
                let aa = new lk(u.location.href, u, !1);
                m = null;
                const bb = q.length - 1;
                for (p = bb; p >= 0; --p) {
                    var t = q[p];
                    !m && jk.test(t.url) && (m = t);
                    if (t.url && !t.wg) {
                        aa = t;
                        break
                    }
                }
                t = null;
                const xa = q.length && q[bb].url;
                aa.depth != 0 && xa && (t = q[bb]);
                f = new kk(aa, t);
                if (f.i) {
                    q = H;
                    var w = f.i.url || "";
                    q.g.push(4);
                    q.i[4] = yk("top", w)
                }
                var A = {
                    url: f.g.url ||
                        ""
                };
                if (f.g.url) {
                    var D = f.g.url.match(re),
                        G = D[1],
                        I = D[3],
                        B = D[4];
                    w = "";
                    G && (w += G + ":");
                    I && (w += "//", w += I, B && (w += ":" + B));
                    var J = w
                } else J = "";
                G = H;
                A = [A, {
                    url: J
                }];
                G.g.push(5);
                G.i[5] = A;
                Gk(this.ta, e, H, this.j, c)
            } catch (H) {
                try {
                    Gk(this.ta, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ek(H),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (aa) {}
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
    var Ik = Ii(a => typeof a === "string"),
        Jk = Ii(a => a === void 0);

    function Kk() {
        var a = Lk;
        return Ii(b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    };
    var Mk = class extends O {
        constructor() {
            super()
        }
    };

    function Nk(a, b) {
        try {
            const c = d => [{
                [d.wf]: d.We
            }];
            return JSON.stringify([a.filter(d => d.xd).map(c), Ei(b), a.filter(d => !d.xd).map(c)])
        } catch (c) {
            return Ok(c, b), ""
        }
    }

    function Ok(a, b) {
        try {
            ej({
                m: Ek(a instanceof Error ? a : Error(String(a))),
                b: ki(b, 1) || null,
                v: L(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Pk = class {
        constructor(a, b) {
            var c = new Mk;
            a = N(c, 1, a);
            this.i = Bi(a, 2, b).i()
        }
    };
    var Qk = class extends O {},
        Rk = [1, 2, 3];
    var Sk = class extends O {
            constructor() {
                super()
            }
        },
        Tk = [2, 4];

    function Uk(a) {
        var b = new Vk;
        return Bi(b, 1, a)
    }
    var Vk = class extends O {
        constructor() {
            super()
        }
    };
    Vk.O = [4];
    var Wk = class extends O {
        getValue() {
            return ki(this, 1)
        }
    };

    function Xk(a) {
        var b = new Yk;
        return Bh(b, 1, tg(a))
    }
    var Yk = class extends O {
        getValue() {
            return ki(this, 1)
        }
    };
    var Zk = class extends O {
        constructor() {
            super()
        }
        getValue() {
            return ki(this, 1)
        }
    };

    function $k(a, b) {
        return ti(a, 1, b)
    }

    function al(a, b) {
        return ti(a, 2, b)
    }

    function bl(a, b) {
        return ti(a, 3, b)
    }

    function cl(a, b) {
        return ti(a, 4, b)
    }

    function dl(a, b) {
        return ti(a, 5, b)
    }

    function el(a, b) {
        return Qh(a, 8, og(b), 0)
    }

    function fl(a, b) {
        return Qh(a, 9, og(b), 0)
    }
    var gl = class extends O {
        constructor() {
            super()
        }
    };

    function hl(a, b) {
        return ti(a, 1, b)
    }

    function il(a, b) {
        return ti(a, 2, b)
    }
    var jl = class extends O {};

    function kl(a, b) {
        ci(a, 1, jl, b)
    }
    var Oh = class extends O {
        bh(a) {
            bi(this, 1, jl, void 0, a, !1, 1);
            return this
        }
    };
    Oh.O = [1];
    var ll = class extends O {
        constructor() {
            super()
        }
    };

    function ml(a, b) {
        return Ph(a, 1, b, Ng)
    }

    function nl(a, b) {
        return Ph(a, 12, b, Kg)
    }

    function ol() {
        var a = new pl;
        return Sh(a, 2, Ng, "irr")
    }

    function ql(a, b) {
        return M(a, 3, b)
    }

    function rl(a, b) {
        return M(a, 4, b)
    }

    function sl(a, b) {
        return M(a, 5, b)
    }

    function tl(a, b) {
        return M(a, 7, b)
    }

    function ul(a, b) {
        return M(a, 8, b)
    }

    function vl(a, b) {
        return ti(a, 9, b)
    }

    function wl(a, b) {
        return ai(a, 10, b)
    }

    function xl(a, b) {
        return Ph(a, 11, b, zg)
    }
    var pl = class extends O {
        constructor() {
            super()
        }
    };
    pl.O = [1, 12, 2, 10, 11];

    function yl(a) {
        var b = zl();
        C(a, 1, b)
    }

    function Al(a, b) {
        return ti(a, 2, b)
    }

    function Bl(a, b) {
        return ai(a, 3, b)
    }

    function Cl(a, b) {
        return ai(a, 4, b)
    }

    function Dl(a, b) {
        return ci(a, 4, Yk, b)
    }

    function El(a, b) {
        return ai(a, 5, b)
    }

    function Fl(a, b) {
        return Ph(a, 6, b, Ng)
    }

    function Gl(a, b) {
        return ti(a, 7, b)
    }

    function Hl(a, b) {
        C(a, 9, b)
    }

    function Il(a, b) {
        return M(a, 10, b)
    }

    function Jl(a, b) {
        return M(a, 11, b)
    }

    function Kl(a, b) {
        return M(a, 12, b)
    }
    var Ll = class extends O {
        constructor() {
            super()
        }
        H(a) {
            bi(this, 3, Wk, void 0, a, !1, 1);
            return this
        }
        G(a) {
            return ti(this, 8, a)
        }
    };
    Ll.O = [3, 4, 5, 15, 6];
    var Ml = class extends O {
        constructor() {
            super()
        }
    };
    Ml.O = [2];
    var Nl = class extends O {};

    function Ol(a) {
        var b = new Pl;
        return N(b, 1, a)
    }
    var Pl = class extends O {
        constructor() {
            super()
        }
    };
    var Ql = class extends O {
        constructor() {
            super()
        }
    };
    var Rl = class extends O {
        constructor() {
            super()
        }
    };
    var Sl = class extends O {
        constructor() {
            super()
        }
    };
    Sl.O = [7];
    var Tl = class extends O {
            constructor() {
                super()
            }
        },
        Ul = [1, 2];
    var Vl = class extends O {
        constructor() {
            super()
        }
    };
    var Wl = class extends O {
            constructor() {
                super()
            }
        },
        Xl = [1];

    function Yl(a) {
        var b = new Zl;
        return N(b, 1, a)
    }
    var Zl = class extends O {
        constructor() {
            super()
        }
    };
    var $l = class extends O {
        constructor() {
            super()
        }
    };
    var am = class extends O {
        constructor() {
            super()
        }
    };
    var bm = class extends O {
        constructor() {
            super()
        }
    };
    var cm = class extends O {
        constructor() {
            super()
        }
    };
    var dm = class extends O {
        constructor() {
            super()
        }
    };
    var em = class extends O {
        constructor() {
            super()
        }
    };
    var fm = class extends O {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 1)
        }
    };
    var gm = class extends O {
        constructor() {
            super()
        }
    };
    gm.O = [1];
    var hm = class extends O {
        constructor() {
            super()
        }
    };

    function im() {
        var a = new jm,
            b = new hm;
        return E(a, 1, km, b)
    }
    var jm = class extends O {
            constructor() {
                super()
            }
        },
        km = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var lm = class extends O {
        constructor() {
            super()
        }
    };
    lm.O = [1];
    var mm = class extends O {
        constructor() {
            super()
        }
    };
    mm.O = [2];
    var nm = class extends O {
        constructor() {
            super()
        }
    };
    var om = class extends O {
        constructor() {
            super()
        }
    };

    function pm(a, b) {
        return Qh(a, 10, Lg(b), "0")
    }

    function qm(a, b) {
        return N(a, 1, b)
    }
    var rm = class extends O {};
    rm.O = [9];
    var sm = class extends O {
        constructor() {
            super()
        }
    };
    sm.O = [2];
    var tm = class extends O {
        constructor() {
            super()
        }
    };
    var um = class extends O {
            constructor() {
                super()
            }
        },
        vm = [4, 5];

    function wm(a) {
        var b = new xm;
        return Bi(b, 4, a)
    }

    function Jm(a, b) {
        return Bh(a, 6, Lg(b))
    }
    var xm = class extends O {
        constructor() {
            super()
        }
    };

    function Km(a) {
        var b = new Lm;
        return ri(b, 2, a)
    }
    var Lm = class extends O {
        constructor() {
            super()
        }
    };
    Lm.O = [3];
    var Mm = class extends O {
        constructor() {
            super()
        }
    };
    var Nm = class extends O {
        constructor() {
            super()
        }
    };
    var Om = class extends O {
        constructor() {
            super()
        }
    };
    var Pm = class extends O {
        constructor() {
            super()
        }
    };
    var Qm = class extends O {
        constructor() {
            super()
        }
    };
    var Rm = class extends O {
            constructor() {
                super()
            }
        },
        Sm = [2, 3];
    var Tm = class extends O {
            constructor() {
                super()
            }
        },
        Um = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17];

    function Vm(a, b) {
        return ti(a, 3, b)
    }
    var Wm = class extends O {
            constructor() {
                super()
            }
            Ub(a) {
                return Bi(this, 2, a)
            }
        },
        Xm = [4, 5, 6, 8, 9, 10, 11, 12, 13];
    var Ym = class extends O {
        constructor() {
            super()
        }
    };
    var Zm = class extends O {
        constructor() {
            super()
        }
    };
    Zm.O = [4, 5];
    var $m = class extends O {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return ii(this, 1)
        }
    };
    $m.O = [2];
    var an = class extends O {
            constructor() {
                super()
            }
        },
        bn = [4, 6];
    class cn {
        constructor(a) {
            this.g = new dn(a)
        }
    }
    class dn {
        constructor(a) {
            this.g = new en(a)
        }
    }
    class en {
        constructor(a) {
            this.g = new fn(a)
        }
    }
    class fn {
        constructor(a) {
            this.i = new gn(a);
            this.g = new hn(a)
        }
    }
    class gn {
        constructor(a) {
            this.g = ({
                kf: b,
                status: c
            }) => {
                var d = Uk("xR0Czf"),
                    e = new Qk;
                c = Th(e, 1, Rk, Og(c));
                d = ci(d, 4, Qk, c);
                c = new Sk;
                b = Th(c, 4, Tk, og(b));
                b = C(d, 3, b);
                a(b)
            }
        }
    }
    class hn {
        constructor(a) {
            this.g = ({
                kf: b,
                Rj: c
            }) => {
                var d = Uk("jM4CPd"),
                    e = new Qk;
                c = Th(e, 2, Rk, Dg(Math.round(c)));
                d = ci(d, 4, Qk, c);
                c = new Sk;
                b = Th(c, 4, Tk, og(b));
                b = C(d, 3, b);
                a(b)
            }
        }
    }
    class jn extends Pk {
        constructor() {
            super(...arguments);
            this.B = new cn(a => kn(this, a))
        }
    }

    function kn(a, ...b) {
        a.l(...b.map(c => ({
            xd: !1,
            wf: 1,
            We: Ei(c)
        })))
    }

    function ln(a, ...b) {
        a.l(...b.map(c => ({
            xd: !0,
            wf: 3,
            We: Ei(c)
        })))
    }

    function mn(a, ...b) {
        a.l(...b.map(c => ({
            xd: !0,
            wf: 7,
            We: Ei(c)
        })))
    }
    var nn = class extends jn {};
    var on = (a, b) => {
            globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: b.length < 65536,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(() => {})
        },
        pn = class extends nn {
            constructor(a) {
                super(2, a);
                this.g = on
            }
            l(...a) {
                try {
                    const b = Nk(a, this.i);
                    this.g("https://pagead2.googlesyndication.com/pagead/ping?e=1", b)
                } catch (b) {
                    Ok(b, this.i)
                }
            }
        },
        qn = class extends pn {};

    function rn(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Nk(a.g, a.i);
            a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var tn = class extends nn {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.G = on;
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
                    this.H && Nk(this.g.concat(a), this.i).length >= 65536 && rn(this), this.A && !this.C && (this.C = !0, sn(this.A, () => {
                        rn(this)
                    })), this.g.push(...a), this.g.length >= this.F && rn(this), this.g.length && this.j === null && (this.j = setTimeout(() => {
                        rn(this)
                    }, this.I))
                } catch (b) {
                    Ok(b, this.i)
                }
            }
        },
        un = class extends tn {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var P = a => {
        var b = "Qe";
        if (a.Qe && a.hasOwnProperty(b)) return a.Qe;
        b = new a;
        return a.Qe = b
    };

    function vn(a, b, c) {
        return b[a] || c
    };

    function wn(a, b) {
        a.i = (c, d) => vn(2, b, () => [])(c, 1, d);
        a.g = () => vn(3, b, () => [])(1)
    }
    class xn {
        i() {
            return []
        }
        g() {
            return []
        }
    }

    function yn(a, b) {
        return P(xn).i(a, b)
    };

    function Gk(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Dk ? f = c : (f = new Dk, Ce(c, (k, l) => {
                var m = f;
                const n = m.l++;
                k = yk(l, k);
                m.g.push(n);
                m.i[n] = k
            }));
            const h = Ck(f, "/pagead/gen_204?id=" + b + "&");
            h && bj(u, h)
        } catch (f) {}
    }

    function zn(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class An {
        constructor() {
            this.g = Math.random()
        }
    };
    let Bn, Cn;
    const Dn = new xk(window);
    (a => {
        Bn = a ? ? new An;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        zn(Bn, window.google_srt);
        Cn = new Hk(Bn, !0, Dn);
        Cn.nf(() => {});
        Cn.l(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || vk(Dn) : Dn.g && Gb(window, "load", () => {
            window.google_measure_js_timing || vk(Dn)
        })
    })();
    let En = (new Date).getTime();
    var Fn = {
        rm: 0,
        qm: 1,
        nm: 2,
        im: 3,
        om: 4,
        jm: 5,
        pm: 6,
        lm: 7,
        mm: 8,
        hm: 9,
        km: 10,
        sm: 11
    };
    var Gn = {
        um: 0,
        vm: 1,
        tm: 2
    };

    function Hn(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function In(a) {
        a = Wa(a, b => new yj(b.top, b.right, b.bottom, b.left));
        a = Jn(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Jn(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Xa(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, zj(a[0]))
    };
    var nc = {
        ln: 0,
        Wl: 1,
        Zl: 2,
        Xl: 3,
        Yl: 4,
        fm: 8,
        wn: 9,
        Hm: 10,
        Im: 11,
        sn: 16,
        Jl: 17,
        Il: 24,
        Em: 25,
        Xk: 26,
        Wk: 27,
        yh: 30,
        ym: 32,
        Bm: 40,
        Cn: 41,
        yn: 42
    };
    var Kn = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Ln = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var Mn = 728 * 1.38;

    function Nn(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = On(a, !0, !0),
                    d = Pn(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function Qn(a, b = 420, c = !1, d = !1) {
        return (a = On(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function Rn(a) {
        return Math.max(0, Sn(a, !0) - Pn(a))
    }

    function Tn(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function Pn(a, b = !1) {
        const c = Tn(a).clientHeight;
        return b ? c * hf(a) : c
    }

    function On(a, b = !1, c = !1) {
        c = Tn(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * hf(a) : c
    }

    function Sn(a, b) {
        const c = Tn(a);
        return b ? (a = Pn(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function Un(a, b) {
        return Vn(b) || b === 10 || !a.adCount ? !1 : b == 1 || b == 2 ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? a >= 1 : !1
    }

    function Wn(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function Xn(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function Yn(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function Zn(a) {
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

    function $n(a, b, c, d) {
        Gk(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function ao(a) {
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
        Ta(Object.keys(b), c => {
            Qj(a, c) || Nj(a, c, b[c])
        });
        Ue(a)
    }

    function Vn(a) {
        return a === 26 || a === 27 || a === 40 || a === 41
    };

    function bo(a, b) {
        co(a).forEach(b, void 0)
    }

    function co(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function eo(a, b) {
        return a.g[fo(b)] !== void 0
    }

    function go(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function ho(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const io = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = fo(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = fo(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        vc() {
            return go(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function fo(a) {
        return a instanceof Object ? String(Da(a)) : a + ""
    };
    const jo = class {
        constructor(a) {
            this.g = new io;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return eo(this.g, a)
        }
    };
    const ko = new jo("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function lo(a, {
        eb: b,
        Xa: c,
        Db: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? mo(a, {
            eb: b,
            Xa: c,
            Db: !0
        }) : null
    }

    function mo(a, {
        eb: b,
        Xa: c,
        Db: d = !1
    }) {
        const e = no({
                eb: b,
                Xa: c,
                Db: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = lo(a, {
            eb: b,
            Xa: c,
            Db: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var oo = class {
        constructor() {
            this.g = new Map
        }
    };

    function no({
        eb: a,
        Xa: b,
        Db: c
    }) {
        a = Da(a);
        b = Da(b);
        return `${a}:${b}:${c}`
    };

    function po(a) {
        fc(a.document.body.offsetHeight)
    };

    function qo(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function Q() {
        this.C = this.C;
        this.G = this.G
    }
    Q.prototype.C = !1;
    Q.prototype.dispose = function() {
        this.C || (this.C = !0, this.i())
    };
    Q.prototype[ka(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function ro(a, b) {
        so(a, Ja(qo, b))
    }

    function so(a, b) {
        a.C ? b() : (a.G || (a.G = []), a.G.push(b))
    }
    Q.prototype.i = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function to(a) {
        a.g.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function uo(a, b, c) {
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
    var vo = class extends Q {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.g = b
        }
        i() {
            to(this);
            super.i()
        }
    };

    function wo(a) {
        const b = new R(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function xo(a, b) {
        const c = new R({
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

    function yo(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return zo(d)
    }

    function Ao(...a) {
        const b = [...a],
            c = () => b.findIndex(f => f.P) !== -1,
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return zo(d)
    }

    function zo(a, b = Bo) {
        var c = a.P;
        const d = new R(a.P);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function Co(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function Do(a, b, c) {
        if (a.P === b) return c(), () => {};
        const d = {
            dc: null
        };
        d.dc = Co(a, b, () => {
            d.dc && (d.dc(), d.dc = null);
            c()
        });
        return d.dc
    }

    function Eo(a, b, c) {
        zo(a).listen(d => {
            d === b && c()
        })
    }

    function Fo(a, b) {
        a.l && a.l();
        a.l = b.listen(c => a.g(c), !0)
    }

    function Go(a, b, c, d) {
        const e = new R(!1);
        var f = null;
        a = a.map(d);
        Co(a, !0, () => {
            f === null && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        Co(a, !1, () => {
            e.g(!1);
            f !== null && (b.clearTimeout(f), f = null)
        });
        return zo(e)
    }

    function Ho(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.P
        }
    }
    class R {
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
            const b = new R(a(this.P));
            this.listen(c => b.g(a(c)));
            return b
        }
    }

    function Bo(a, b) {
        return a == b
    };

    function Io(a) {
        return new Jo(a)
    }

    function Ko(a, b) {
        Ta(a.g, c => {
            c(b)
        })
    }
    var Lo = class {
        constructor() {
            this.g = []
        }
    };
    class Jo {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new Lo;
            this.listen(c => Ko(b, a(c)));
            return Io(b)
        }
        delay(a, b) {
            const c = new Lo;
            this.listen(d => {
                a.setTimeout(() => {
                    Ko(c, d)
                }, b)
            });
            return Io(c)
        }
    }

    function Mo(...a) {
        const b = new Lo;
        a.forEach(c => {
            c.listen(d => {
                Ko(b, d)
            })
        });
        return Io(b)
    };

    function No(a) {
        return zo(xo(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Oo(c, b)
        }))
    }
    var Qo = class {
        constructor(a) {
            this.i = a;
            this.g = new R(null);
            this.j = new R(null);
            this.l = new Lo;
            this.B = b => {
                this.g.P == null && b.touches.length == 1 && this.g.g(b.touches[0])
            };
            this.A = b => {
                const c = this.g.P;
                c != null && (b = Po(c, b.changedTouches), b != null && (this.g.g(null), this.j.g(null), Ko(this.l, Oo(c, b))))
            };
            this.C = b => {
                var c = this.g.P;
                c != null && (c = Po(c, b.changedTouches), c != null && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function Oo(a, b) {
        return {
            rh: b.pageX - a.pageX,
            sh: b.pageY - a.pageY
        }
    }

    function Po(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Ro(a) {
        return zo(xo(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : So(c, b)
        }))
    }
    var To = class {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.g = new R(null);
            this.i = new R(null);
            this.j = new Lo;
            this.G = c => {
                this.g.g(c)
            };
            this.C = c => {
                const d = this.g.P;
                d != null && (this.g.g(null), this.i.g(null), Ko(this.j, So(d, c)))
            };
            this.B = c => {
                this.g.P != null && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function So(a, b) {
        return {
            rh: b.screenX - a.screenX,
            sh: b.screenY - a.screenY
        }
    };
    var Wo = (a, b, c) => {
        const d = new Uo(a, b, c);
        return () => Vo(d)
    };

    function Vo(a) {
        if (a.g) return !1;
        if (a.i == null) return Xo(a), !0;
        const b = a.i + a.A - (new Date).getTime();
        if (b < 1) return Xo(a), !0;
        Yo(a, b);
        return !0
    }

    function Xo(a) {
        a.i = (new Date).getTime();
        a.l()
    }

    function Yo(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            Xo(a)
        }, b)
    }
    class Uo {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    };

    function Zo(a) {
        return $o(Ro(a.g), No(a.i))
    }

    function ap(a) {
        return Mo(Io(a.g.j), Io(a.i.l))
    }
    var bp = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function $o(a, b) {
        return xo(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var cp = class {
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

    function dp(a) {
        a.A == null && (a.A = new R(a.B.getBoundingClientRect()));
        return a.A
    }
    class ep extends Q {
        constructor(a, b) {
            super();
            this.j = a;
            this.B = b;
            this.F = !1;
            this.A = null;
            this.l = () => {
                dp(this).g(this.B.getBoundingClientRect())
            }
        }
        g() {
            this.F || (this.F = !0, this.j.addEventListener("resize", this.l), this.j.addEventListener("scroll", this.l));
            return dp(this)
        }
        i() {
            this.j.removeEventListener("resize", this.l);
            this.j.removeEventListener("scroll", this.l);
            super.i()
        }
    };

    function fp(a, b) {
        return new gp(a, b)
    }

    function hp(a) {
        a.win.requestAnimationFrame(() => {
            a.C || a.j.g(new Ld(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function ip(a) {
        a.g || (a.g = !0, a.l.observe(a.element));
        return zo(a.j, Od)
    }
    var gp = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.g = !1;
            this.j = new R(new Ld(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                hp(this)
            })
        }
        i() {
            this.l.disconnect();
            super.i()
        }
    };

    function jp(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class kp {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
    };

    function lp(a, b) {
        a = a.getBoundingClientRect();
        return new mp(a.top + Xn(b), a.bottom - a.top)
    }

    function np(a) {
        return new mp(Math.round(a.g), Math.round(a.i))
    }
    class mp {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var pp = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new jo(c);
        b = b.filter(e => !d.contains(e));
        b.length && (op(a, b), hb(c, b))
    };

    function op(a, b) {
        for (const f of b) {
            b = ze("LINK", a.document);
            b.type = "text/css";
            var c = Bd `//fonts.googleapis.com/css`,
                d = Mj(),
                e = b;
            c = wc(c, {
                family: f
            });
            if (c instanceof vc) d = c;
            else a: {
                if (c instanceof Gc) {
                    d = c;
                    break a
                }
                const h = Nc(c);h === Hc && d(c);d = h
            }
            e.rel = "stylesheet";
            if (Ub("stylesheet", "stylesheet")) {
                e.href = yc(d).toString();
                a: if (d = (e.ownerDocument && e.ownerDocument.defaultView || u).document, d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) &&
                        Gd.test(d)) break a;
                    d = ""
                } else d = "";
                d && e.setAttribute("nonce", d)
            } else d instanceof vc ? d = yc(d).toString() : (d = Qc(d), d = d === void 0 ? Hc.toString() : d), e.href = d;
            a.document.head.appendChild(b)
        }
    };

    function qp(a, b) {
        a.F ? b(a.l) : a.j.push(b)
    }

    function rp(a, b) {
        a.F = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    class sp extends Q {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.F = !1;
            this.B = this.l = null;
            this.H = Wo(a, 1E3, () => {
                if (this.B != null) {
                    var b = Sn(this.g, !0) - this.B;
                    b > 1E3 && rp(this, b)
                }
            });
            this.A = null
        }
        J(a, b) {
            a == null ? (this.B = a = Sn(this.g, !0), this.g.addEventListener("scroll", this.H), b != null && b(a)) : this.A = this.g.setTimeout(() => {
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
    var tp = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class up {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function vp(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new wp(d)
    }

    function xp(a) {
        return a.g.slice(0)
    }

    function yp(a, b = 1) {
        a = xp(a);
        const c = new up(b);
        ob(a, () => c.next());
        return new wp(a)
    }
    const wp = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new wp(Va(this.g, a))
        }
        apply(a) {
            return new wp(a(xp(this)))
        }
        sort(a) {
            return new wp(xp(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = xp(this);
            b.push(a);
            return new wp(b)
        }
    };
    class zp {
        constructor(a) {
            this.g = new jo(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function Ap(a) {
        return new Bp({
            value: a
        }, null)
    }

    function Cp(a) {
        return new Bp(null, Error(a))
    }

    function Dp(a) {
        try {
            return Ap(a())
        } catch (b) {
            return new Bp(null, b)
        }
    }

    function Ep(a) {
        return a.g != null ? a.getValue() : null
    }

    function Fp(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function Gp(a, b) {
        return a.g != null ? a : new Bp(null, b(a.i))
    }

    function Hp(a, b) {
        return Gp(a, c => Error(`${b}${c.message}`))
    }

    function Ip(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class Bp {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof Bp ? a : Ap(a)) : this
        }
    };
    class Jp {
        constructor() {
            this.g = new io
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new jo, this.g.set(a, c));
            c.add(b)
        }
    };

    function Kp(a) {
        return !a
    }

    function Lp(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function Mp(a) {
        return a !== null
    };
    var Np = class extends O {
        getId() {
            return F(this, 3)
        }
    };
    Np.O = [4];
    class Op {
        constructor(a, {
            Mf: b,
            Ah: c,
            Vi: d,
            Vg: e
        }) {
            this.A = a;
            this.j = c;
            this.l = new wp(b || []);
            this.i = e;
            this.g = d
        }
    };
    var Pp = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new io;
            for (const c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Rp = a => {
            var b = Qp(a);
            a = [];
            for (let c of b) b = String(c.ic), a.push(c.yb + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Qp = a => {
            const b = [],
                c = a.l;
            c && c.g.length && b.push({
                yb: "a",
                ic: Sp(c)
            });
            a.j != null && b.push({
                yb: "as",
                ic: a.j
            });
            a.g != null && b.push({
                yb: "i",
                ic: String(a.g)
            });
            a.i != null && b.push({
                yb: "rp",
                ic: String(a.i)
            });
            b.sort(function(d, e) {
                return d.yb.localeCompare(e.yb)
            });
            b.unshift({
                yb: "t",
                ic: Tp(a.A)
            });
            return b
        },
        Tp = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Sp = a => {
            a = xp(a).map(Up);
            a = JSON.stringify(a);
            return Ee(a)
        },
        Up = a => {
            const b = {};
            F(a, 7) != null && (b.q = F(a, 7));
            fi(a, 2) != null &&
                (b.o = fi(a, 2));
            fi(a, 5) != null && (b.p = fi(a, 5));
            return b
        };

    function Vp() {
        var a = new Wp;
        return Bh(a, 2, tg(1))
    }
    var Wp = class extends O {
        setLocation(a) {
            return Bh(this, 1, tg(a))
        }
        g() {
            return oi(this, 1)
        }
    };

    function Xp(a) {
        const b = [].slice.call(arguments).filter(yb(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Tf || []);
            d = Object.assign(d, e.wc())
        });
        return new Yp(c, d)
    }

    function Zp(a) {
        switch (a) {
            case 1:
                return new Yp(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Yp(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Yp(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Yp(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function $p(a) {
        return a == null ? null : new Yp(null, {
            google_ml_rank: a
        })
    }

    function aq(a) {
        return a == null ? null : new Yp(null, {
            google_placement_id: Rp(a)
        })
    }

    function bq({
        ki: a,
        Ei: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new Yp(null, a)
    }
    class Yp {
        constructor(a, b) {
            this.Tf = a;
            this.g = b
        }
        wc() {
            return this.g
        }
    };
    var cq = class extends O {};
    var dq = class extends O {};
    var eq = class extends O {
        C() {
            return F(this, 2)
        }
        A() {
            return F(this, 5)
        }
        g() {
            return $h(this, dq, 3)
        }
        j() {
            return fi(this, 4)
        }
        l() {
            return Gh(this, 6)
        }
        B() {
            return Dh(this, cq, 7)
        }
    };
    eq.O = [3];
    var fq = class extends O {};
    var gq = class extends O {
        l() {
            return K(this, 12, !1)
        }
        j() {
            return Jg(yh(this, 13))
        }
        g() {
            const a = ei(this, 23);
            return a == null ? void 0 : a
        }
    };
    var hq = class extends O {
        constructor() {
            super()
        }
    };
    var iq = class extends O {
        g() {
            return gi(this, 3)
        }
        j() {
            return ei(this, 6)
        }
    };
    var jq = class extends O {};
    var kq = class extends O {};
    var lq = class extends O {
        ja() {
            return z(this, Np, 1)
        }
        g() {
            return gi(this, 2)
        }
    };
    var mq = class extends O {};
    var nq = class extends O {};
    var oq = class extends O {
            getName() {
                return F(this, 4)
            }
        },
        pq = [1, 2, 3];
    var qq = class extends O {
        g() {
            return z(this, iq, 10)
        }
    };
    qq.O = [2, 5, 6, 11];
    var rq = class extends O {
        g() {
            return ei(this, 2)
        }
        j() {
            return ei(this, 3)
        }
    };
    var sq = class extends O {
        g() {
            return Jg(yh(this, 1))
        }
    };
    var tq = class extends O {};
    var uq = class extends O {
        g() {
            return ii(this, 1)
        }
    };
    var vq = class extends O {
        g() {
            return L(this, 1)
        }
        j() {
            return L(this, 2)
        }
    };
    var wq = class extends O {};
    var xq = class extends O {
        l() {
            return K(this, 1)
        }
        A() {
            return K(this, 3)
        }
        C() {
            return K(this, 7)
        }
        g() {
            return K(this, 4)
        }
        j() {
            return K(this, 5)
        }
    };
    var yq = class extends O {
        j() {
            return z(this, vq, 5)
        }
        g() {
            return z(this, uq, 6)
        }
        A() {
            return L(this, 8)
        }
        C() {
            return K(this, 9)
        }
        B() {
            return L(this, 13)
        }
        G() {
            return K(this, 11)
        }
        l() {
            return z(this, xq, 12)
        }
    };
    var zq = class extends O {};
    var Aq = class extends O {
        g() {
            return z(this, zq, 1)
        }
    };
    var Bq = class extends O {};
    Bq.O = [2];
    var Cq = class extends O {};
    var Dq = class extends O {
        g() {
            return $h(this, Cq, 1)
        }
    };
    Dq.O = [1];
    var Eq = class extends O {
        setProperty(a) {
            return Ai(this, 1, a)
        }
        getValue() {
            return F(this, 2)
        }
    };
    var Fq = class extends O {};
    Fq.O = [3, 4];
    var Gq = class extends O {};
    var Hq = class extends O {
        ja() {
            return z(this, Np, 1)
        }
        g() {
            return gi(this, 2)
        }
    };
    Hq.O = [6, 7, 9, 10, 11];
    var Iq = class extends O {};
    Iq.O = [4];
    var Jq = class extends O {};
    var Kq = class extends O {
        g() {
            return Hh(this, 6, Pg)
        }
    };
    Kq.O = [6];
    var Lq = class extends O {
        Je() {
            return Dh(this, Jq, 2)
        }
    };
    var Mq = class extends O {
        g() {
            return ii(this, 1)
        }
    };
    var Nq = class extends O {};
    var Pq = class extends O {
            g() {
                return li(this, Nq, 2, Oq)
            }
        },
        Oq = [1, 2];
    var Qq = class extends O {
        g() {
            return z(this, Pq, 3)
        }
    };
    var Rq = class extends O {};
    var Sq = class extends O {
        g() {
            return $h(this, Rq, 1)
        }
    };
    Sq.O = [1];
    var Tq = class extends O {
        g() {
            return Hh(this, 1, Pg)
        }
        j() {
            return z(this, Qq, 3)
        }
    };
    Tq.O = [1, 4];
    var Uq = class extends O {
            g() {
                return z(this, gq, 15)
            }
        },
        Vq = Ki(Uq);
    Uq.O = [1, 2, 5, 7];
    var Wq = class extends O {},
        Xq = Ki(Wq);

    function Yq(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Xq(b) : null
        } catch (b) {
            return null
        }
    }

    function Zq(a, b) {
        if (a.Be !== void 0) {
            var c = Yq(b);
            c || (c = new Wq);
            a.Be !== void 0 && pi(c, 2, a.Be);
            a = Date.now() + 864E5;
            Number.isFinite(a) && si(c, 1, Math.round(a));
            c = Di(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = Yq(b)) && Jg(yh(c, 1)) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };
    var $q = {
            qb: "ama_success",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        ar = {
            qb: "ama_failure",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        br = {
            qb: "ama_coverage",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        cr = {
            qb: "ama_opt",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        dr = {
            qb: "ama_auto_rs",
            Pa: 1,
            Ua: !0,
            rb: !1
        },
        er = {
            qb: "ama_improv",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        fr = {
            qb: "ama_constraints",
            Pa: 0,
            Ua: !0,
            rb: !0
        };

    function gr(a, b) {
        hr(a.i, dr, { ...b,
            evt: "place",
            vh: Pn(a.win),
            eid: a.g.g() ? .g() || 0,
            hl: a.g.j() ? .g() || ""
        })
    }

    function ir(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && Fk(c.stack, "") || "");
        gr(a, b)
    }
    var jr = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    };
    const kr = ["-webkit-text-fill-color"];

    function lr(a) {
        if (ic) {
            {
                const c = Ae(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = mr(a)
                } else a = nr()
            }
        } else a = nr();
        return a
    }
    var nr = () => {
        const a = {
            all: "initial"
        };
        Ta(kr, b => {
            a[b] = "unset"
        });
        return a
    };

    function mr(a) {
        Ta(kr, b => {
            delete a[b]
        });
        return a
    };
    var or = class {
        constructor(a) {
            this.g = a
        }
        Ja(a) {
            const b = a.document.createElement("div");
            x(b, lr(a));
            x(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            x(c, lr(a));
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

    function pr(a) {
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

    function qr(a) {
        return co(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var S = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        T = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        rr = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        sr = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        },
        tr = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var ur = new S(1321, !0),
        vr = new T(619278254, 10),
        wr = new S(1325, !0),
        xr = new S(1310, !0),
        yr = new S(1355, !0),
        zr = new S(1351, !0),
        Ar = new T(1130, 100),
        Br = new S(1331, !0),
        Cr = new S(1352, !0),
        Dr = new S(1330, !0),
        Er = new T(1339, .3),
        Fr = new T(1032, 200),
        Gr = new rr(14),
        Hr = new T(1224, .01),
        Ir = new T(1346, 6),
        Jr = new T(1347, 3),
        Kr = new S(1320, !0),
        Lr = new S(1260),
        Mr = new S(1239),
        Nr = new S(1196),
        Or = new S(1160),
        Pr = new S(316),
        Qr = new S(1290),
        Rr = new S(334),
        Sr = new T(1263, -1),
        Tr = new T(54),
        Ur = new T(1323, -1),
        Vr = new T(1265, -1),
        Wr = new T(1264, -1),
        Xr =
        new S(1291),
        Yr = new S(1267, !0),
        Zr = new S(1266),
        $r = new S(313),
        as = new T(66, -1),
        bs = new T(65, -1),
        cs = new S(1256),
        ds = new S(369),
        es = new S(1241, !0),
        fs = new S(368),
        gs = new S(1300, !0),
        hs = new sr(1273, ["en", "de"]),
        is = new S(1223, !0),
        js = new sr(1261, ["44786015", "44786016"]),
        ks = new S(1309),
        ls = new S(1250),
        ms = new S(1151),
        ns = new S(1361),
        os = new S(1349),
        ps = new T(1072, .75),
        qs = new S(290),
        rs = new S(1222),
        ss = new S(1354),
        ts = new S(1341),
        us = new S(1237),
        vs = new T(1363),
        ws = new S(1350),
        xs = new S(1356),
        ys = new S(626390500),
        zs = new tr(627094447,
            "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        As = new T(643258048),
        Bs = new T(643258049),
        Cs = new T(579884443, .7),
        Ds = new T(624950166, 15E3),
        Es = new S(652479164),
        Fs = new rr(622128249),
        Gs = new rr(622128250),
        Hs = new tr(641845510, ["33"]),
        Is = new S(566279275),
        Js = new S(622128248, !0),
        Ks = new S(566279276),
        Ls = new rr(589752731),
        Ms = new rr(589752730),
        Ns = new tr(635821288, ["30_19"]),
        Os = new tr(631402549),
        Ps = new tr(636146137, ["30_6"]),
        Qs = new S(579884441, !0),
        Rs = new S(636570127),
        Ss = new tr(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        Ts = new T(579884442, .7),
        Us = new S(613534001, !0),
        Vs = new T(652486359),
        Ws = new T(626062006, 670),
        Xs = new S(626062008),
        Ys = new S(643258050),
        Zs = new S(649667950, !0),
        $s = new S(506914611),
        at = new S(597181299),
        bt = new S(626062007),
        ct = new S(1120),
        dt = new tr(630330362),
        et = new T(618163195, 15E3),
        ft = new T(623405755, 300),
        gt = new T(508040914, 100),
        ht = new T(547455356, 49),
        it = new T(650548030, 5),
        jt = new T(650548032, 300),
        kt = new T(650548031, 2),
        lt = new T(561668774, .1),
        mt = new T(469675170, 6E4),
        nt = new S(562896595),
        ot = new S(644381219),
        pt =
        new S(644381220),
        qt = new S(570863962, !0),
        rt = new rr(570879859, "control_1\\.\\d"),
        st = new T(570863961, 50),
        tt = new S(570879858, !0),
        ut = new S(45615403, !0),
        vt = new S(45621722, !0),
        wt = new S(570804360, !0),
        xt = new T(63, 30),
        yt = new S(1134),
        zt = new S(562874197),
        At = new S(562874196),
        Bt = new S(555237685, !0),
        Ct = new S(45460956),
        Dt = new S(45414947, !0),
        Et = new T(472785970, 500),
        Ft = new S(643056383),
        Gt = new T(550718588, 250),
        Ht = new S(45545710),
        It = new T(624290870),
        Jt = new T(629793592, .8),
        Kt = new S(506738118),
        Lt = new S(77),
        Mt = new S(78),
        Nt = new S(83),
        Ot = new S(80),
        Pt = new S(76),
        Qt = new S(84),
        Rt = new S(1973),
        St = new S(188),
        Tt = new S(485990406);
    var Ut = class {
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

    function U(a) {
        return P(Ut).j(a.g, a.defaultValue)
    }

    function V(a) {
        return P(Ut).A(a.g, a.defaultValue)
    }

    function Vt(a) {
        return P(Ut).C(a.g, a.defaultValue)
    }

    function Wt(a) {
        return P(Ut).l(a.g, a.defaultValue)
    };

    function Xt(a, b) {
        a = ne(new $d(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Yt(a, b, c) {
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
        pr(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Zt(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            pr(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var au = (a, b, c, d = 0) => {
            var e = $t(b, c, d);
            if (e.J) {
                for (c = b = e.J; c = e.od(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Md
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Yt(a, e.anchor, e.position)
        },
        bu = (a, b, c, d = 0) => {
            U($r) ? au(a, b, c, d) : Yt(a, b, c)
        };

    function $t(a, b, c) {
        const d = f => {
                f = cu(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = cu(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    J: du(a.previousSibling, d),
                    od: f => du(f.previousSibling, d),
                    Md: 0
                };
            case 2:
                return {
                    J: du(a.lastChild, d),
                    od: f => du(f.previousSibling, d),
                    Md: 0
                };
            case 3:
                return {
                    J: du(a.nextSibling, e),
                    od: f => du(f.nextSibling, e),
                    Md: 3
                };
            case 1:
                return {
                    J: du(a.firstChild, e),
                    od: f => du(f.nextSibling, e),
                    Md: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function cu(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function du(a, b) {
        return a && b(a) ? a : null
    };

    function eu(a, b) {
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

    function fu(a, b) {
        const c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function gu(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function hu(a, b, c) {
        a = eu(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function iu(a, b) {
        b = b.parentElement;
        return b ? (a = Ae(b, a)) ? a.direction : "" : ""
    }

    function ju(a, b, c) {
        if (hu(a, b, c) !== 0) {
            gu(b, c, "0px");
            var d = hu(a, b, c);
            gu(b, c, `${-1*d}px`);
            a = hu(a, b, c);
            a !== 0 && a !== d && gu(b, c, `${d/(a-d)*d}px`)
        }
    };
    const ku = RegExp("(^| )adsbygoogle($| )");

    function lu(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Xd(d.property);
            a[e] = d.value
        }
    }

    function mu(a, b, c, d, e, f) {
        a = nu(a, e);
        a.va.setAttribute("data-ad-format", d ? d : "auto");
        ou(a, b, c, f);
        return a
    }

    function pu(a, b, c = null) {
        a = nu(a, {});
        ou(a, b, null, c);
        return a
    }

    function ou(a, b, c, d) {
        var e = [];
        if (d = d && d.Tf) a.nb.className = d.join(" ");
        a = a.va;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function nu(a, b) {
        const c = Xt(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Ld && lu(d, b.Ld);
        a = ne(new $d(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.vf && (d.marginTop = b.vf);
        b.ne && (d.marginBottom = b.ne);
        b.Yb && lu(d, b.Yb);
        c.appendChild(a);
        return {
            nb: c,
            va: a
        }
    }

    function qu(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.wc();
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

    function ru(a) {
        const b = qr(a.document);
        Ta(b, function(c) {
            const d = su(a, c);
            var e;
            if (e = d) {
                e = (e = eu(c, a)) ? e.y : 0;
                const f = Pn(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), qu(a, c))
        })
    }

    function su(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in pb) a[pb[c]] && (b[pb[c]] = a[pb[c]]);
        return b
    };
    var uu = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (tu(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const tu = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? Ud(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && ko.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (tu(a, b[c])) return !0
        }
        return !1
    };
    var vu = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const wu = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return mu(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return vu(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function xu(a) {
        var b = [];
        bo(a.getElementsByTagName("p"), function(c) {
            yu(c) >= 100 && b.push(c)
        });
        return b
    }

    function yu(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        bo(a.childNodes, function(c) {
            b += yu(c)
        });
        return b
    }

    function zu(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Au(a, b) {
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
    const Bu = class {
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
            a = eb(b);
            a = Au(this, a);
            typeof this.i === "number" && (b = this.i, b < 0 && (b += a.length), a = b >= 0 && b < a.length ? [a[b]] : []);
            if (typeof this.j === "number") {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = xu(a[c]),
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
    class Cu {
        constructor() {
            var a = Bd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.A = Math.random();
            this.j = this.ba;
            this.C = a
        }
        nf(a) {
            this.g = a
        }
        l(a) {
            this.i = a
        }
        ba(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new ik(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded || (ye(u.document, this.C), u.error_rep_loaded = !0);
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
    const Du = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var Eu = (a, b, c, d, e = !1) => {
            const f = d || window,
                h = typeof queueMicrotask !== "undefined";
            return function() {
                e && h && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const k = pk();
                let l, m = 3;
                try {
                    l = b.apply(this, arguments)
                } catch (n) {
                    m = 13;
                    if (!c) throw n;
                    c(a, n)
                } finally {
                    f.google_measure_js_timing && k && Du({
                        label: a.toString(),
                        value: k,
                        duration: (pk() || 0) - k,
                        type: m,
                        ...(e && h && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return l
            }
        },
        Fu = (a, b, c, d = !1) => Eu(a, b, (e, f) => {
            (new Cu).ba(e, f)
        }, c, d);

    function Gu(a, b, c) {
        return Eu(a, b, void 0, c, !0).apply()
    }

    function Hu(a, b) {
        return Fu(754, a, b, !0).apply()
    }

    function Iu(a) {
        if (!a) return null;
        var b = F(a, 7);
        if (F(a, 1) || a.getId() || Hh(a, 4, Pg).length > 0) {
            var c = F(a, 3),
                d = F(a, 1),
                e = Hh(a, 4, Pg);
            b = fi(a, 2);
            var f = fi(a, 5);
            a = Ju(gi(a, 6));
            var h = "";
            d && (h += d);
            c && (h += "#" + zu(c));
            if (e)
                for (c = 0; c < e.length; c++) h += "." + zu(e[c]);
            b = (e = h) ? new Bu(e, b, f, a) : null
        } else b = b ? new Bu(b, fi(a, 2), fi(a, 5), Ju(gi(a, 6))) : null;
        return b
    }
    var Ku = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ju(a) {
        return a == null ? a : Ku[a]
    }

    function Lu(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = F(a[c], 1),
                e = F(a[c], 2);
            if (d && e != null) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Mu(a, b) {
        var c = {};
        a && (c.vf = F(a, 1), c.ne = F(a, 2), c.clearBoth = !!ei(a, 3));
        b && (c.Ld = Lu($h(b, Eq, 3)), a = $h(b, Eq, 4), c.Yb = Lu(a));
        return c
    }
    var Nu = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Ou = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Pu = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return mu(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    class Qu {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.i);
            const b = vu(a);
            return new Yp(["ap_container"], {
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
    const Ru = class {
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
    const Su = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = $h(this.g, Fq, 9).length > 0 ? $h(this.g, Fq, 9)[0] : null,
                f = Mu(z(this.g, Gq, 3), e);
            if (!e) return null;
            if (e = F(e, 1)) {
                d = d.document;
                var h = c.tagName;
                c = ne(new $d(d), h);
                c.style.clear = f.clearBoth ? "both" : "none";
                h == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Ld && lu(c.style, f.Ld);
                d = ne(new $d(d), "INS");
                f.Yb && lu(d.style, f.Yb);
                c.appendChild(d);
                f = {
                    nb: c,
                    va: d
                };
                f.va.setAttribute("data-ad-type", "text");
                f.va.setAttribute("data-native-settings-key",
                    e);
                ou(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = $h(this.g, Fq, 9).length > 0 ? $h(this.g, Fq, 9)[0] : null;
            if (!a) return null;
            a = $h(a, Eq, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (F(c, 1) == "height" && parseInt(F(c, 2), 10) > 0) return parseInt(F(c, 2), 10)
            }
            return null
        }
    };
    const Tu = class {
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
                    Yb: h
                }
            } else c = {};
            a = mu(d.document, a, f, e, c, b);
            a.va.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        wc() {
            return this.g
        }
    };
    class Uu {
        constructor(a) {
            this.i = a
        }
        g() {
            return new Yp([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Vu = class {
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

    function Wu(a, b, c) {
        const d = [];
        for (let t = 0; t < a.length; t++) {
            var e = a[t];
            var f = t,
                h = b,
                k = c,
                l = e.ja();
            if (l) {
                var m = Iu(l);
                if (m) {
                    var n = gi(e, 2);
                    n = Nu[n];
                    var p = n === void 0 ? null : n;
                    if (p === null) e = null;
                    else {
                        n = (n = z(e, Gq, 3)) ? ei(n, 3) : null;
                        m = new Vu(m, p);
                        p = Hh(e, 10, ug).slice(0);
                        fi(l, 5) != null && p.push(1);
                        var q = k ? k : {};
                        k = fi(e, 12);
                        l = Dh(e, Wp, 4) ? z(e, Wp, 4) : null;
                        gi(e, 8) == 1 ? (q = q.Nh || null, e = new Xu(m, new Pu(Mu(z(e, Gq, 3), null)), q, n, 0, p, l, h, f, k, e)) : e = gi(e, 8) == 2 ? new Xu(m, new Su(e), q.Wi || new Uu("text"), n, 1, p, l, h, f, k, e) : null
                    }
                } else e = null
            } else e =
                null;
            e !== null && d.push(e)
        }
        return d
    }

    function Yu(a) {
        return a.A
    }

    function Zu(a) {
        return a.Fa
    }

    function $u(a) {
        return U(Nr) ? (a.M || (a.M = a.F.i(a.j)), a.M) : a.F.i(a.j)
    }

    function av(a) {
        var b = a.H;
        a = a.j.document.createElement("div");
        U(Nr) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function bv(a) {
        return a.B instanceof Tu ? a.B.wc() : null
    }

    function cv(a, b, c) {
        eo(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }

    function dv(a, b) {
        a.A = !0;
        U(Nr) && (a.i && Zt(a.i), a.i = null);
        b != null && a.ca.push(b)
    }

    function ev(a) {
        return Xt(a.j.document, a.H || !1)
    }

    function fv(a) {
        return a.B.j(a.j)
    }

    function gv(a, b = null, c = null) {
        return new Xu(a.F, b || a.B, c || a.T, a.H, a.Lb, a.zc, a.Td, a.j, a.ua, a.G, a.l, a.C, a.ia)
    }
    class Xu {
        constructor(a, b, c, d, e, f, h, k, l, m = null, n = null, p = null, q = null) {
            this.F = a;
            this.B = b;
            this.T = c;
            this.H = d;
            this.Lb = e;
            this.zc = f;
            this.Td = h ? h : new Wp;
            this.j = k;
            this.ua = l;
            this.G = m;
            this.l = n;
            (a = !n) || (a = !(n.ja() && fi(n.ja(), 5) != null));
            this.Fa = !a;
            this.C = p;
            this.ia = q;
            this.ca = [];
            this.A = !1;
            this.I = new io;
            this.M = this.i = null
        }
        da() {
            return this.j
        }
        g() {
            return this.F.g()
        }
    };

    function hv(a, b, c, d, e, f) {
        const h = Vp();
        return new Xu(new Ru(c, e), new wu, new Qu(a), !0, 2, [], h, d, null, null, null, b, f)
    }

    function iv(a, b, c, d, e) {
        const f = Vp();
        return new Xu(new Ru(b, d), new Pu({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var jv = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        da() {
            return this.win
        }
        A(a) {
            return hv(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return iv(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const kv = {
        TABLE: {
            mc: new zp([1, 2])
        },
        THEAD: {
            mc: new zp([0, 3, 1, 2])
        },
        TBODY: {
            mc: new zp([0, 3, 1, 2])
        },
        TR: {
            mc: new zp([0, 3, 1, 2])
        },
        TD: {
            mc: new zp([0, 3])
        }
    };

    function lv(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Sa(e, f), c < 0 || b.push(new mv(a, [f], c, f, 3, je(f).trim(), d));
        return b
    }

    function nv(a, b, c) {
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
                n ? (d.length && l && e.push(new mv(a, d, p - 1, n, 0, l, c)), d = [], k = p + 1, l = "") : (d.push(m), m = je(m).trim(), l += m && l ? " " + m : m)
            }
        }
        d.length && l && e.push(new mv(a, d, k, b, 2, l, c));
        return e
    }

    function ov(a, b) {
        return a.g - b.g
    }
    class mv {
        constructor(a, b, c, d, e, f, h) {
            this.l = a;
            this.Yc = b.slice(0);
            this.g = c;
            this.ae = d;
            this.be = e;
            this.C = f;
            this.i = h
        }
        da() {
            return this.i
        }
        A(a) {
            return hv(a, this.l, this.ae, this.i, this.be, this.g)
        }
        j() {
            return iv(this.l, this.ae, this.i, this.be, this.g)
        }
    };

    function pv(a) {
        return db(a.C ? nv(a.i, a.g, a.j) : [], a.A ? lv(a.i, a.A, a.g, a.j) : []).filter(b => {
            var c = b.ae.tagName;
            c ? (c = kv[c.toUpperCase()], b = c != null && c.mc.contains(b.be)) : b = !1;
            return !b
        })
    }
    class qv {
        constructor(a, b, c) {
            this.g = a;
            this.A = b.Vc;
            this.C = b.gg;
            this.i = b.articleStructure;
            this.j = c;
            this.l = b.Lf
        }
    };

    function rv(a, b) {
        if (!b) return !1;
        const c = Da(b),
            d = a.g.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.i.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.g.set(c, !0), !0;
        b = rv(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function sv(a, b) {
        return Ya(b.Yc, c => rv(a, c))
    }
    class tv {
        constructor(a) {
            this.g = new io;
            this.i = a
        }
    };
    class uv {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var wv = (a, {
            tg: b = !1,
            pf: c = !1,
            Cg: d = c || U(Mr) ? 2 : 3,
            mf: e = null
        } = {}) => {
            a = pv(a);
            return vv(a, {
                tg: b,
                pf: c,
                Cg: d,
                mf: e
            })
        },
        vv = (a, {
            tg: b = !1,
            pf: c = !1,
            Cg: d = c || U(Mr) ? 2 : 3,
            mf: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(ov);
            a = [];
            b = new uv(b, e);
            for (const h of f) {
                e = {
                    Nd: h,
                    qd: h.C.length < 51 ? !1 : b.j != null ? !sv(b.j, h) : !0
                };
                if (b.l || e.qd) b.g.length ? (f = b.g[b.g.length - 1].Nd, f = uu(f.da(), f.Yc[f.Yc.length - 1], e.Nd.Yc[0])) : f = !0, f ? (b.g.push(e), e.qd && b.i.push(e.Nd)) : (b.g = [e], b.i = e.qd ? [e.Nd] : []);
                if (b.i.length >= d) {
                    e = b;
                    f = c || U(Mr) ? 0 : 1;
                    if (f < 0 || f >= e.i.length) e = null;
                    else {
                        for (f = e.i[f]; e.g.length && !e.g[0].qd;) e.g.shift();
                        e.g.shift();
                        e.i.shift();
                        e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var yv = (a, b, c = !1) => {
            a = xv(a, b);
            const d = new tv(b);
            return tp(a, e => wv(e, {
                pf: c,
                mf: d
            }))
        },
        zv = (a, b) => {
            a = xv(a, b);
            const c = new tv(b);
            return tp(a, d => {
                if (d.l) {
                    var e = d.i;
                    var f = d.j;
                    d = d.g.querySelectorAll(d.l);
                    var h = [];
                    for (var k of d) h.push(new jv(e, k, f));
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
                        }(l || k.element.textContent.length > 1) && !rv(c, f.element) && uu(n.da(), f.element, n.element) && e.push(f);
                        f = n
                    }
                    var m = e
                } else m = [];
                return m
            })
        },
        xv = (a, b) => {
            const c = new io;
            a.forEach(d => {
                var e = Iu(z(d, Np, 1));
                if (e) {
                    var f = e.toString();
                    eo(c, f) || c.set(f, {
                        articleStructure: d,
                        Fh: e,
                        Vc: null,
                        gg: !1,
                        Lf: null
                    });
                    e = c.get(f);
                    (f = (f = z(d, Np, 2)) ? F(f, 7) : null) ? e.Vc = e.Vc ? e.Vc + "," + f : f: e.gg = !0;
                    d = z(d, Np, 4);
                    e.Lf = d ? F(d, 7) : null
                }
            });
            return ho(c).map(d => {
                const e = d.Fh.query(b.document);
                return e.length ? new qv(e[0],
                    d, b) : null
            }).filter(d => d != null)
        };
    var Av = a => a ? .google_ad_slot ? Ap(new Op(1, {
            Ah: a.google_ad_slot
        })) : Cp("Missing dimension when creating placement id"),
        Cv = a => {
            switch (a.Lb) {
                case 0:
                case 1:
                    var b = a.l;
                    b == null ? a = null : (a = b.ja(), a == null ? a = null : (b = gi(b, 2), a = b == null ? null : new Op(0, {
                        Mf: [a],
                        Vg: b
                    })));
                    return a != null ? Ap(a) : Cp("Missing dimension when creating placement id");
                case 2:
                    return a = Bv(a), a != null ? Ap(a) : Cp("Missing dimension when creating placement id");
                default:
                    return Cp("Invalid type: " + a.Lb)
            }
        };
    const Bv = a => {
        if (a == null || a.C == null) return null;
        const b = z(a.C, Np, 1),
            c = z(a.C, Np, 2);
        if (b == null || c == null) return null;
        const d = a.ia;
        if (d == null) return null;
        a = a.g();
        return a == null ? null : new Op(0, {
            Mf: [b, c],
            Vi: d,
            Vg: Ou[a]
        })
    };

    function Dv(a) {
        const b = bv(a.ha);
        return (b ? Av(b) : Cv(a.ha)).map(c => Rp(c))
    }

    function Ev(a) {
        a.g = a.g || Dv(a);
        return a.g
    }

    function Fv(a, b) {
        if (a.ha.A) throw Error("AMA:AP:AP");
        bu(b, a.ja(), a.ha.g());
        dv(a.ha, b)
    }
    const Gv = class {
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
            (a = c.B.i(a, b, this.i, c.j)) && Fv(this, a.nb);
            return a
        }
    };

    function Hv(a, b) {
        return Hu(() => {
            if (U(Nr)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        h = $u(f);
                    if (h) {
                        if (!f.i && !f.A) {
                            a: {
                                var k = null;
                                try {
                                    var l = $u(f);
                                    if (l) {
                                        k = av(f);
                                        bu(k, l, f.g());
                                        var m = k;
                                        break a
                                    }
                                    m = null;
                                    break a
                                } catch (t) {
                                    throw Zt(k), t;
                                }
                                m = void 0
                            }
                            f.i = m
                        }(k = f.i) && d.push({
                            yj: f,
                            anchorElement: h,
                            Gi: k
                        })
                    }
                }
                if (d.length > 0)
                    for (m = Xn(b), l = Yn(b), e = 0; e < d.length; e++) {
                        const {
                            yj: t,
                            anchorElement: w,
                            Gi: A
                        } = d[e];
                        f = Iv(A, l, m);
                        c.push(new Gv(t, w, f))
                    }
                m = c
            } else {
                m = [];
                l = [];
                try {
                    const t = [];
                    for (let w = 0; w < a.length; w++) {
                        var n = a[w],
                            p = $u(n);
                        p && t.push({
                            Pg: n,
                            anchorElement: p
                        })
                    }
                    for (p = 0; p < t.length; p++) {
                        n = l;
                        h = n.push; {
                            var q = t[p];
                            const w = q.anchorElement,
                                A = q.Pg,
                                D = av(A);
                            try {
                                bu(D, w, A.g()), k = D
                            } catch (G) {
                                throw Zt(D), G;
                            }
                        }
                        h.call(n, k)
                    }
                    c = Xn(b);
                    d = Yn(b);
                    for (h = 0; h < l.length; h++) e = Iv(l[h], d, c), f = t[h], m.push(new Gv(f.Pg, f.anchorElement, e))
                } finally {
                    for (c = 0; c < l.length; c++) Zt(l[c])
                }
            }
            return m
        }, b)
    }

    function Iv(a, b, c) {
        a = a.getBoundingClientRect();
        return new kp(a.left + b, a.top + c, a.right - a.left)
    };
    const Jv = {
            1: "0.5vp",
            2: "300px"
        },
        Kv = {
            1: 700,
            2: 1200
        },
        Lv = {
            [1]: {
                gh: "3vp",
                qf: "1vp",
                fh: "0.3vp"
            },
            [2]: {
                gh: "900px",
                qf: "300px",
                fh: "90px"
            }
        };

    function Mv(a, b, c) {
        var d = Nv(a),
            e = Pn(a) || Kv[d],
            f = void 0;
        c && (f = (c = (c = Ov($h(c, eq, 2), d)) ? z(c, cq, 7) : void 0) ? Pv(c, e) : void 0);
        c = f;
        f = Nv(a);
        a = Pn(a) || Kv[f];
        const h = Qv(Lv[f].qf, a);
        a = h === null ? Rv(f, a) : new Sv(h, h, Tv(h, 8), 8, .3, c);
        c = Qv(Lv[d].gh, e);
        f = Qv(Lv[d].qf, e);
        d = Qv(Lv[d].fh, e);
        e = a.j;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Sv(e, e, Tv(e, a.i), a.i, a.l, a.g)
    }

    function Uv(a, b) {
        const c = Jg(yh(a, 4));
        a = Gh(a, 5);
        return c == null || a == null ? b : new Sv(a, 0, [], c, 1)
    }

    function Vv(a, b) {
        const c = Nv(a);
        a = Pn(a) || Kv[c];
        if (!b) return Rv(c, a);
        if (b = Ov($h(b, eq, 2), c))
            if (b = Wv(b, a)) return b;
        return Rv(c, a)
    }

    function Xv(a) {
        const b = Nv(a);
        a = Pn(a) || Kv[b];
        return Rv(b, a)
    }

    function Yv(a, b) {
        let c = {
            Gc: a.j,
            tb: a.C
        };
        for (let d of a.A) d.adCount <= b && (c = d.Lc);
        return c
    }

    function Zv(a, b, c) {
        var d = ei(b, 2);
        b = z(b, eq, 1);
        var e = Nv(c);
        var f = Pn(c) || Kv[e];
        c = Qv(b ? .C(), f) ? ? a.j;
        e = Qv(b ? .A(), f) ? ? a.C;
        d = d ? [] : $v(b ? .g(), f) ? ? a.A;
        const h = b ? .j() ? ? a.i,
            k = b ? .l() ? ? a.l;
        a = (b ? .B() ? Pv(z(b, cq, 7), f) : null) ? ? a.g;
        return new Sv(c, e, d, h, k, a)
    }

    function aw(a, b) {
        var c = Nv(b);
        const d = new fq,
            e = new eq;
        let f = !1;
        var h = V(Sr);
        h >= 0 && (qi(e, 4, h), f = !0);
        h = null;
        c === 1 ? (c = V(Wr), c >= 0 && (h = c + "vp")) : (c = V(Vr), c >= 0 && (h = c + "px"));
        c = V(Ur);
        c >= 0 && (h = c + "px");
        h !== null && (Ai(e, 2, h), f = !0);
        c = U(Yr) ? "0px" : null;
        c !== null && (Ai(e, 5, c), f = !0);
        if (U(Zr)) pi(d, 2, !0), f = !0;
        else if (c !== null || h !== null) {
            const n = [];
            for (const p of a.A) {
                var k = n,
                    l = k.push;
                var m = new dq;
                m = qi(m, 1, p.adCount);
                m = Ai(m, 3, c ? ? p.Lc.tb + "px");
                m = Ai(m, 2, h ? ? p.Lc.Gc + "px");
                l.call(k, m)
            }
            ai(e, 3, n)
        }
        return f ? (C(d, 1, e), Zv(a, d, b)) : a
    }
    class Sv {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.C = b;
            this.A = c.sort((h, k) => h.adCount - k.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
    }

    function Ov(a, b) {
        for (let c of a)
            if (gi(c, 1) == b) return c;
        return null
    }

    function $v(a, b) {
        if (a === void 0) return null;
        const c = [];
        for (let d of a) {
            a = fi(d, 1);
            const e = Qv(F(d, 2), b),
                f = Qv(F(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                Lc: {
                    Gc: e,
                    tb: f
                }
            })
        }
        return c
    }

    function Wv(a, b) {
        const c = Qv(F(a, 2), b),
            d = Qv(F(a, 5), b);
        if (c === null) return null;
        const e = fi(a, 4);
        if (e == null) return null;
        var f = a.g();
        f = $v(f, b);
        if (f === null) return null;
        const h = z(a, cq, 7);
        b = h ? Pv(h, b) : void 0;
        return new Sv(c, d, f, e, Gh(a, 6), b)
    }

    function Rv(a, b) {
        a = Qv(Jv[a], b);
        return U(Qr) ? new Sv(a === null ? Infinity : a, null, [], 8, .3) : new Sv(a === null ? Infinity : a, null, [], 3, null)
    }

    function Qv(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Nv(a) {
        a = On(a) >= 900;
        return pe() && !a ? 1 : 2
    }

    function Tv(a, b) {
        if (b < 4) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Lc: {
                Gc: a * 2,
                tb: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Lc: {
                Gc: a * 3,
                tb: a * 3
            }
        }]
    }

    function Pv(a, b) {
        const c = Qv(F(a, 2), b) || 0,
            d = fi(a, 3) || 1;
        a = Qv(F(a, 1), b) || 0;
        return {
            Dg: c,
            Bg: d,
            ec: a
        }
    };

    function bw(a, b, c) {
        return Hn({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function cw(a) {
        if (!a.length) return null;
        const b = In(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new dw(b, a)
    }
    class dw {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };
    let ew, W;
    const fw = new xk(u);
    ((a, b = !0) => {
        ew = a || new An;
        typeof u.google_srt !== "number" && (u.google_srt = Math.random());
        zn(ew, u.google_srt);
        W = new Hk(ew, b, fw);
        W.l(!0);
        u.document.readyState == "complete" ? u.google_measure_js_timing || vk(fw) : fw.g && Gb(u, "load", () => {
            u.google_measure_js_timing || vk(fw)
        })
    })();
    var gw = (a, b) => W.vb(a, b),
        hw = (a, b) => W.Da(a, b),
        iw = (a, b, c) => {
            const d = P(xn).g();
            !b.eid && d.length && (b.eid = d.toString());
            Gk(ew, a, b, !0, c)
        },
        jw = (a, b, c) => {
            W.na(a, b, c)
        };

    function ay(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var fy = (a, b) => {
        var c = eb(b.document.querySelectorAll(".google-auto-placed"));
        const d = eb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = by(b),
            f = cy(b),
            h = dy(b),
            k = eb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = eb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            m = eb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let n = [].concat(eb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), eb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [p, q] of [
                [a.pd, c],
                [a.Kb, d],
                [a.Ti, e],
                [a.Ne, f],
                [a.Oe, h],
                [a.Ri, k],
                [a.Si, l],
                [a.Ui, m]
            ]) p === !1 ? b = b.concat(q) : n = n.concat(q);
        a = ey(n);
        c = ey(b);
        a = a.slice(0);
        for (const p of c)
            for (c = 0; c < a.length; c++)(p.contains(a[c]) || a[c].contains(p)) && a.splice(c, 1);
        return a
    };
    const gy = a => {
            const b = ay(a);
            return b ? Va(Wa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
        },
        by = a => eb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        cy = a => (gy(a) || eb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(eb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        dy = a => eb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var ey = a => {
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
    var hy = W.Da(453, fy),
        iy;
    iy = W.Da(454, (a, b) => {
        const c = eb(b.document.querySelectorAll(".google-auto-placed")),
            d = eb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = by(b),
            f = cy(b),
            h = dy(b),
            k = eb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = eb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = eb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return ey([].concat(a.pd === !0 ? c : [], a.Kb === !0 ? d : [], a.Ti === !0 ? e : [], a.Ne === !0 ? f : [], a.Oe === !0 ? h : [], a.Ri === !0 ? k : [], a.Si === !0 ? l : [], a.Ui ===
            !0 ? b : []))
    });

    function jy(a, b, c) {
        const d = ky(a);
        b = ly(d, b, c);
        return new my(a, d, b)
    }

    function ny(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function oy(a) {
        return a.g.map(b => b.box)
    }

    function py(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class my {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }

    function ky(a) {
        const b = hy({
                Kb: !1
            }, a),
            c = Yn(a),
            d = Xn(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && e.className.indexOf("google-auto-placed") != -1) || ny(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                ho: e ? 1 : 0
            } : null
        }).filter(yb(e => e === null))
    }

    function ly(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? qy(a, b) : Wa(a, d => new dw(d.box, 1))
    }

    function qy(a, b) {
        a = Wa(a, d => new dw(d.box, 1));
        const c = [];
        for (; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (bw(d, a[f], b)) {
                        d = cw([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function ry(a, b, c) {
        const d = jp(c, b);
        return !Ya(a, e => Hn(e, d))
    }

    function sy(a, b, c, d, e) {
        e = e.la;
        const f = jp(e, b),
            h = jp(e, c),
            k = jp(e, d);
        return !Ya(a, l => Hn(l, h) || Hn(l, f) && !Hn(l, k))
    }

    function ty(a, b, c, d) {
        const e = oy(a);
        if (ry(e, b, d.la)) return !0;
        if (!sy(e, b, c.Dg, c.ec, d)) return !1;
        const f = new dw(jp(d.la, 0), 1);
        a = Va(a.l, h => bw(h, f, c.ec));
        b = Xa(a, (h, k) => h + k.i, 1);
        return a.length === 0 || b > c.Bg ? !1 : !0
    };
    var uy = (a, b) => {
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

    function vy(a, b) {
        const c = new Jp,
            d = new jo;
        b.forEach(e => {
            if (li(e, mq, 1, pq)) {
                e = li(e, mq, 1, pq);
                if (z(e, lq, 1) && z(e, lq, 1).ja() && z(e, lq, 2) && z(e, lq, 2).ja()) {
                    const h = wy(a, z(e, lq, 1).ja()),
                        k = wy(a, z(e, lq, 2).ja());
                    if (h && k)
                        for (var f of uy({
                                anchor: h,
                                position: gi(z(e, lq, 1), 2)
                            }, {
                                anchor: k,
                                position: gi(z(e, lq, 2), 2)
                            })) c.set(Da(f.anchor), f.position)
                }
                z(e, lq, 3) && z(e, lq, 3).ja() && (f = wy(a, z(e, lq, 3).ja())) && c.set(Da(f), gi(z(e, lq, 3), 2))
            } else li(e, nq, 2, pq) ? xy(a, li(e, nq, 2, pq), c) : li(e, kq, 3, pq) && yy(a, li(e, kq, 3, pq), d)
        });
        return new zy(c,
            d)
    }
    class zy {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const xy = (a, b, c) => {
            z(b, lq, 2) ? (b = z(b, lq, 2), (a = wy(a, b.ja())) && c.set(Da(a), gi(b, 2))) : z(b, Np, 1) && (a = Ay(a, z(b, Np, 1))) && a.forEach(d => {
                d = Da(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        yy = (a, b, c) => {
            z(b, Np, 1) && (a = Ay(a, z(b, Np, 1))) && a.forEach(d => {
                c.add(Da(d))
            })
        },
        wy = (a, b) => (a = Ay(a, b)) && a.length > 0 ? a[0] : null,
        Ay = (a, b) => (b = Iu(b)) ? b.query(a) : null;
    var By = class {
        constructor() {
            this.g = bf();
            this.i = 0
        }
    };

    function Cy(a, b, c) {
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
            if (Dy(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function Ey(a) {
        a = Fy(a);
        return a.has("all") || a.has("after")
    }

    function Gy(a) {
        a = Fy(a);
        return a.has("all") || a.has("before")
    }

    function Fy(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Dy(a) {
        const b = Fy(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var Hy = class {
        constructor() {
            this.g = new Set;
            this.i = new By
        }
    };

    function Iy(a) {
        return function(b) {
            return Hv(b, a)
        }
    }

    function Jy(a) {
        const b = Pn(a);
        return b ? Ja(Ky, b + Xn(a)) : vb
    }

    function Ly(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return vb;
        const d = oy(c || jy(b));
        return e => ry(d, a, e.la)
    }

    function My(a, b, c, d) {
        if (a < 0 || b.Dg < 0 || b.Bg < 0 || b.ec < 0) throw Error("ama::ead:nd");
        return a === Infinity ? vb : e => ty(d || jy(c, b.ec), a, b, e)
    }

    function Ny(a) {
        if (!a.length) return vb;
        const b = new zp(a);
        return c => b.contains(c.Lb)
    }

    function Oy(a) {
        return function(b) {
            for (let c of b.zc)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function Py(a) {
        return a.length ? function(b) {
            const c = b.zc;
            return a.some(d => c.indexOf(d) > -1)
        } : wb
    }

    function Qy(a, b) {
        if (a <= 0) return wb;
        const c = Tn(b).scrollHeight - a;
        return function(d) {
            return d.la.g <= c
        }
    }

    function Ry(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[gi(c.Td, 2) || 0]
        }
    }

    function Sy(a) {
        return a.length ? b => a.includes(gi(b.Td, 1) || 0) : wb
    }

    function Ty(a, b) {
        const c = vy(a, b);
        return function(d) {
            var e = d.ja();
            d = Ou[d.ha.g()];
            var f = c.i,
                h = Da(e);
            f = f.g.get(h);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(Da(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(Da(e))) {
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

    function Uy() {
        const a = new Hy;
        return function(b) {
            var c = b.ja(),
                d = Ou[b.ha.g()];
            a: switch (d) {
                case 1:
                    b = Ey(c.previousElementSibling) || Gy(c);
                    break a;
                case 4:
                    b = Ey(c) || Gy(c.nextElementSibling);
                    break a;
                case 2:
                    b = Gy(c.firstElementChild);
                    break a;
                case 3:
                    b = Ey(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = Cy(a, c, d);
            d = a.i;
            iw("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: Re()
            }, .1);
            return !(b || c)
        }
    }
    const Ky = (a, b) => b.la.g >= a,
        Vy = (a, b, c) => {
            c = c.la.i;
            return a <= c && c <= b
        };

    function Wy(a, b, c, d, e) {
        var f = Xy(Yy(a, b), a);
        if (f.length === 0) {
            var h = !!z(b, Dq, 6) ? .g() ? .length;
            f = z(b, yq, 28) ? .l() ? .j() && h ? Xy(Zy(a, b), a) : f
        }
        if (f.length === 0) return ir(d, "pfno"), [];
        b = f;
        a = e.gd ? $y(a, b, c) : {
            kb: b,
            jd: null
        };
        const {
            kb: k,
            jd: l
        } = a;
        f = k;
        return f.length === 0 && l ? (ir(d, l), []) : [f[e.Tj ? 0 : e.Sj ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function $y(a, b, c) {
        c = c ? $h(c, oq, 5) : [];
        const d = Ty(a.document, c),
            e = Uy();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            kb: [],
            jd: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            kb: [],
            jd: "pfet"
        } : {
            kb: b,
            jd: null
        }
    }

    function az(a, b) {
        return a.la.g - b.la.g
    }

    function Yy(a, b) {
        const c = z(b, Dq, 6);
        if (!c) return [];
        b = z(b, yq, 28) ? .l();
        return (b ? .g() ? zv(c.g(), a) : yv(c.g(), a, !!b ? .l())).map(d => d.j())
    }

    function Zy(a, b) {
        b = $h(b, Hq, 1) || [];
        return Wu(b, a, {}).filter(c => !c.zc.includes(6))
    }

    function Xy(a, b) {
        a = Hv(a, b);
        const c = Jy(b);
        a = a.filter(d => c(d));
        return a.sort(az)
    };
    var bz = {},
        cz = {},
        dz = {},
        ez = {};

    function fz() {
        throw Error("Do not instantiate directly");
    }
    fz.prototype.Vf = null;
    fz.prototype.Ja = function() {
        return this.content
    };
    fz.prototype.toString = function() {
        return this.content
    };

    function gz(a) {
        if (a.Wf !== bz) throw Error("Sanitized content was not of kind HTML.");
        return hd(a.toString())
    }

    function hz() {
        fz.call(this)
    }
    La(hz, fz);
    hz.prototype.Wf = bz;

    function iz(a) {
        if (a != null) switch (a.Vf) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function jz(a) {
        return kz(a, bz) ? a : a instanceof gd ? lz(fd(a).toString()) : lz(String(String(a)).replace(mz, nz), iz(a))
    }
    var lz = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.Vf = d);
            return c
        }
    }(hz);

    function oz(a) {
        return pz(String(a), () => "").replace(qz, "&lt;")
    }
    const rz = RegExp.prototype.hasOwnProperty("sticky"),
        sz = new RegExp((rz ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", rz ? "gy" : "g");

    function pz(a, b) {
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
                    } else c.push(a.substring(l, m)), k = m, l = m + 1, rz ? (sz.lastIndex = l, m = sz.exec(a)) : (sz.lastIndex = 0, m = sz.exec(a.substring(l))), m ? (f = ["<", m[0]], h = m[1], e = 1, l += m[0].length) : c.push("<");
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

    function tz(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function uz(a) {
        return kz(a, bz) ? String(oz(a.Ja())).replace(vz, nz) : String(a).replace(mz, nz)
    }

    function wz(a) {
        return kz(a, bz) ? String(oz(a.Ja())).replace(xz, nz) : String(a).replace(yz, nz)
    }
    const zz = /['()]/g;

    function Az(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function X(a) {
        kz(a, ez) ? a = tz(a.Ja()) : a == null ? a = "" : a instanceof Tc ? a = tz(Sc(a)) : a instanceof dd ? a = tz(cd(a)) : (a = String(a), a = Bz.test(a) ? a : "zSoyz");
        return a
    }

    function kz(a, b) {
        return a != null && a.Wf === b
    }
    const Cz = {
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

    function nz(a) {
        return Cz[a]
    }
    const Dz = {
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

    function Ez(a) {
        return Dz[a]
    }
    const Fz = {
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

    function Gz(a) {
        return Fz[a]
    }
    const mz = /[\x00\x22\x26\x27\x3c\x3e]/g,
        vz = /[\x00\x22\x27\x3c\x3e]/g,
        yz = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        xz = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Hz = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Iz = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Bz = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Jz =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        qz = /</g;
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
    const Kz = Math.floor;
    var Lz = /^xn--/,
        Mz = /[\x2E\u3002\uFF0E\uFF61]/g;
    const Nz = {
        Um: "Overflow: input needs wider integers to process",
        Qm: "Illegal input >= 0x80 (not a basic code point)",
        Am: "Invalid input"
    };

    function Oz(a) {
        throw RangeError(Nz[a]);
    }

    function Pz(a, b) {
        const c = a.split("@");
        let d = "";
        c.length > 1 && (d = c[0] + "@", a = c[1]);
        a = a.replace(Mz, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function Qz(a) {
        return Pz(a, b => {
            if (Lz.test(b) && b.length > 4) {
                b = b.slice(4).toLowerCase();
                const k = [],
                    l = b.length;
                let m = 0,
                    n = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                d < 0 && (d = 0);
                for (var e = 0; e < d; ++e) b.charCodeAt(e) >= 128 && Oz("Illegal input >= 0x80 (not a basic code point)"), k.push(b.charCodeAt(e));
                for (d = d > 0 ? d + 1 : 0; d < l;) {
                    e = m;
                    for (let p = 1, q = 36;; q += 36) {
                        d >= l && Oz("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36;
                        (f >= 36 || f > Kz((2147483647 - m) / p)) && Oz("Overflow: input needs wider integers to process");
                        m += f * p;
                        var h = q <= c ? 1 : q >= c + 26 ? 26 : q - c;
                        if (f < h) break;
                        f = 36 - h;
                        p > Kz(2147483647 / f) && Oz("Overflow: input needs wider integers to process");
                        p *= f
                    }
                    f = k.length + 1;
                    c = m - e;
                    h = 0;
                    c = e == 0 ? Kz(c / 700) : c >> 1;
                    for (c += Kz(c / f); c > 455; h += 36) c = Kz(c / 35);
                    c = Kz(h + 36 * c / (c + 38));
                    Kz(m / f) > 2147483647 - n && Oz("Overflow: input needs wider integers to process");
                    n += Kz(m / f);
                    m %= f;
                    k.splice(m++, 0, n)
                }
                b = String.fromCodePoint.apply(null, k)
            }
            return b
        })
    };
    const Rz = new rb(sb, "558153351");

    function Sz(a, b, c) {
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
    var Tz = class {
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
            var a = Dd `box-sizing:border-box;border:unset;`;
            this.Na.style.cssText = Sc(a);
            var b = Nc("https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host)),
                c = Qz(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.B;
            var d = this.j,
                e = this.M;
            const f = this.host;
            c = this.G.replace("${website}", c);
            const h = this.I;
            var k = lz,
                l = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.H ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(Hz, Ez) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            kz(b, cz) || kz(b, dz) ? b = String(b).replace(Iz, Gz) : b instanceof Gc ? b = String(Ic(b)).replace(Iz, Gz) : b instanceof vc ? b = String(yc(b).toString()).replace(Iz, Gz) : (b = String(b), b = Jz.test(b) ? b.replace(Iz, Gz) : "about:invalid#zSoyz");
            a = k(l + uz(b) + '" alt="' + uz(f) + ' icon"><p class="cse-header"><strong>' +
                jz(c) + '</strong></p><div class="gcse-search" data-gname="' + uz(a) + '" data-adclient="' + uz(d) + '" data-adchannel="' + uz(e) + '" data-as_sitesearch="' + uz(f) + '" data-personalizedAds="false"></div></div>' + (h ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = gz(a);
            this.C ? (a = this.Na, d = Bc(new rb(sb, "https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: this.F || Rz,
                cxId: this.l,
                host: this.host,
                lang: this.language,
                lrh: this.G,
                client: this.j,
                origin: this.origin
            }), a.src = yc(d).toString()) : (d = new Map([
                    ["cx", this.l],
                    ["language", this.language]
                ]), this.A && (e = Array.isArray(this.g) ? this.g : [this.g], e.length && d.set("fexp", e.join())), e = Cd(d), d = {}, e = `<script src="${sd(yc(e).toString())}"`,
                d.async && (e += " async"), d.hi && (e += ` custom-element="${sd(d.hi)}"`), d.defer && (e += " defer"), d.id && (e += ` id="${sd(d.id)}"`), d.nonce && (e += ` nonce="${sd(d.nonce)}"`), d.type && (e += ` type="${sd(d.type)}"`), d.ei && (e += ` crossorigin="${sd(d.ei)}"`), d = hd(e + ">\x3c/script>"), a = yd({
                    style: Dd `margin:${0};`
                }, [a, d]), this.Na.srcdoc = fd(a))
        }
    };

    function Uz(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new Vz;
        return a.google_reactive_ads_global_state
    }
    class Vz {
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
            this.floatingAdsStacking = new Wz;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.i = [];
            this.g = null
        }
    }
    var Wz = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function Xz(a, b) {
        return new Yz(a, b)
    }

    function Zz(a) {
        const b = $z(a);
        Ta(a.g.maxZIndexListeners, c => c(b))
    }

    function $z(a) {
        a = De(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function aA(a, b) {
        cb(a.g.maxZIndexListeners, c => c === b)
    }
    class bA {
        constructor(a) {
            this.g = Uz(a).floatingAdsStacking
        }
    }

    function cA(a) {
        if (a.g == null) {
            var b = a.i,
                c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            Zz(b);
            a.g = d
        }
    }

    function dA(a) {
        if (a.g != null) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            Zz(b);
            a.g = null
        }
    }
    class Yz {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    };

    function eA(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? eA(b) || a : a
    }

    function fA(a, b) {
        return gA(b, a.document.body).flatMap(c => hA(c))
    }

    function gA(a, b) {
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

    function hA(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function iA(a) {
        a.g !== null && (a.g.Bi.forEach(b => {
            b.inert = !1
        }), a.g.Aj ? .focus(), a.g = null)
    }

    function jA(a, b) {
        iA(a);
        const c = eA(a.win.document);
        b = fA(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.g = {
            Aj: c,
            Bi: b
        }
    }
    var kA = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
        Yd() {
            iA(this)
        }
    };

    function lA(a) {
        return new mA(a, new vo(a, a.document.body), new vo(a, a.document.documentElement), new vo(a, a.document.documentElement))
    }

    function nA(a) {
        uo(a.j, "scroll-behavior", "auto");
        const b = oA(a.win);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.win.scrollY);
        uo(a.g, "position", "fixed");
        uo(a.g, "top", `${-b.previousWindowScroll}px`);
        uo(a.g, "width", "100%");
        uo(a.g, "overflow-x", "hidden");
        uo(a.g, "overflow-y", "hidden");
        uo(a.i, "overflow-x", "hidden");
        uo(a.i, "overflow-y", "hidden")
    }

    function pA(a) {
        to(a.g);
        to(a.i);
        const b = oA(a.win);
        b.activePageScrollPreventers.delete(a);
        b.activePageScrollPreventers.size === 0 && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        to(a.j)
    }
    var mA = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    };

    function oA(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    }

    function qA(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function rA(a, b) {
        return sA(`#${a}`, b)
    }

    function tA(a, b) {
        return sA(`.${a}`, b)
    }

    function sA(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function uA(a, b) {
        const c = a.document.createElement("div");
        x(c, lr(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Za: c,
            shadowRoot: a
        }
    };

    function vA(a, b) {
        b = uA(a, b);
        a.document.body.appendChild(b.Za);
        return b
    }

    function wA(a, b) {
        const c = new R(b.P);
        Eo(b, !0, () => void c.g(!0));
        Eo(b, !1, () => {
            a.setTimeout(() => {
                b.P || c.g(!1)
            }, 700)
        });
        return zo(c)
    };

    function xA(a) {
        const b = a.ld;
        var c = a.hf,
            d = a.hd;
        const e = a.Xc,
            f = a.Qf,
            h = a.ie,
            k = a.Ma;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            X(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? k ? 20 : 16 : 0;
        a += X(c) + "px; transition: transform " + X(h) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + X(c) + "px; border-bottom-right-radius: " + X(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + X(c) + "px; border-bottom-left-radius: " + X(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (k ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (k ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            uz(f) + '">';
        d = k ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + uz(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + uz(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + uz(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return lz(a)
    };

    function yA(a) {
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
        b = new zA(a, b);
        b.J();
        return b ? a.googNavStack = b : null
    }

    function AA(a, b) {
        return b ? b.googNavStackId === a.j ? b : null : null
    }

    function BA(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            const d = c === 0;
            a.K.requestAnimationFrame(() => void b[c].Jj({
                isFinal: d
            }))
        }
    }

    function CA(a, b) {
        b = jb(a.stack, b, (c, d) => c - d.pg.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class zA extends Q {
        constructor(a, b) {
            super();
            this.K = a;
            this.g = b;
            this.stack = [];
            this.j = Math.random() * 1E9 >>> 0;
            this.A = 0;
            this.l = c => {
                (c = AA(this, c.state)) ? BA(this, CA(this, c.googNavStackStateId + .5)): BA(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.j,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        Jj: c,
                        pg: a
                    })
                });
            this.g.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = CA(this, a.googNavStackStateId);
                    var d;
                    if (d = c.length > 0) {
                        d = c[0].pg;
                        const e = AA(this, this.g.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.g.go(-c.length);
                    BA(this, c)
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

    function DA(a) {
        return (a = yA(a)) ? new EA(a) : null
    }

    function FA(a) {
        if (!a.g) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.g = c;
            b.then(() => {
                a.g && !a.C && (a.g = null, Ko(a.j))
            })
        }
    }
    var EA = class extends Q {
        constructor(a) {
            super();
            this.l = a;
            this.j = new Lo;
            this.g = null
        }
    };

    function GA(a, b, c) {
        var d = c.ze ? null : new kA(a);
        const e = Xz(new bA(a), c.zIndex - 1);
        b = HA(a, b, c);
        d = new IA(a, b, d, c.tc, lA(a), e);
        d.J();
        (c.dg || c.dg === void 0) && JA(d);
        c.oc && ((a = DA(a)) ? KA(d, a, c.bf) : c.bf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function JA(a) {
        a.A = b => {
            b.key === "Escape" && a.g.P && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function KA(a, b, c) {
        Eo(a.g, !0, () => {
            try {
                FA(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Eo(a.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Io(b.j).listen(() => void a.collapse());
        ro(a, b)
    }

    function LA(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function MA(a) {
        a.win.setTimeout(() => {
            a.g.P && LA(a).Ha.focus()
        }, 500)
    }

    function NA(a) {
        const {
            Ye: b,
            Xh: c
        } = LA(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function OA(a) {
        Eo(a.j, !1, () => {
            LA(a).Ha.classList.add("hd-hidden")
        })
    }
    var IA = class extends Q {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.B = b;
            this.l = c;
            this.tc = d;
            this.g = new R(!1);
            this.j = wA(a, this.g);
            Eo(this.j, !0, () => {
                nA(e);
                cA(f)
            });
            Eo(this.j, !1, () => {
                pA(e);
                dA(f)
            })
        }
        show({
            ag: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            LA(this).Ha.classList.remove("hd-hidden");
            po(this.win);
            LA(this).Ha.classList.add("hd-revealed");
            this.g.g(!0);
            this.l && (jA(this.l, LA(this).bb.Za), this.tc && MA(this));
            a && Eo(this.j, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            LA(this).Ha.classList.remove("hd-revealed");
            this.g.g(!1);
            this.l ? .Yd()
        }
        isVisible() {
            return this.j
        }
        J() {
            NA(this);
            OA(this)
        }
        i() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.B.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .Yd();
            super.i()
        }
    };

    function HA(a, b, c) {
        const d = vA(a, c.Ae),
            e = d.shadowRoot;
        e.appendChild(oe(new $d(a.document), gz(xA({
            ld: c.ld,
            hf: c.hf ? ? !0,
            hd: c.hd || !1,
            Xc: c.Xc,
            Qf: c.Qf || "",
            zIndex: c.zIndex,
            ie: .5,
            Ma: c.Ma || !1
        }))));
        const f = rA("hd-drawer-container", e);
        c.Fe ? .i(h => {
            f.setAttribute("aria-label", h)
        });
        c = rA("hd-content-container", e);
        c.appendChild(b);
        po(a);
        return {
            Ha: f,
            Ye: rA("hd-modal-background", e),
            te: c,
            Xh: rA("hd-close-button", e),
            lo: rA("hd-back-arrow-button", e),
            bb: d
        }
    };

    function PA(a) {
        const b = a.uj,
            c = a.Ki;
        var d = a.ie;
        const e = a.Ma;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            X(c) + "%; transition: transform " + X(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += X(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            X(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + X((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            X(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + X(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + X(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            X(d) + "px " + X(d) + "px 0 0; background: white; display: flex; height: " + X(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            QA("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + QA("ved-fixed-handle") + "</div></div></div>";
        return lz(a)
    }

    function QA(a) {
        return lz('<div class="ved-handle" id="' + uz(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function RA(a) {
        return Zo(a.g).map(b => b ? SA(a, b) : 0)
    }

    function SA(a, b) {
        switch (a.direction) {
            case 0:
                return TA(-b.sh);
            case 1:
                return TA(-b.rh);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function UA(a) {
        return ap(a.g).map(b => SA(a, b))
    }
    var VA = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function TA(a) {
        return a === 0 ? 0 : a
    };

    function Z(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function WA(a) {
        a.win.setTimeout(() => {
            a.g.P && Z(a).Ha.focus()
        }, 500)
    }

    function XA(a) {
        Z(a).Ha.classList.remove("ved-hidden");
        po(a.win);
        const {
            pa: b,
            Ya: c
        } = Z(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || YA(a);
        Z(a).Ha.classList.add("ved-revealed");
        a.g.g(!0);
        a.j && (jA(a.j, Z(a).bb.Za), a.tc && WA(a))
    }

    function ZA(a) {
        return wA(a.win, a.g)
    }

    function $A(a, b) {
        const c = new R(b());
        Io(a.H).listen(() => void c.g(b()));
        return zo(c)
    }

    function aB(a) {
        const {
            pa: b,
            Id: c
        } = Z(a);
        return $A(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function bB(a) {
        const {
            pa: b,
            Id: c
        } = Z(a);
        return $A(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function cB(a) {
        const {
            pa: b
        } = Z(a);
        return $A(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function dB(a) {
        return Ao(aB(a), cB(a))
    }

    function eB(a) {
        const {
            pa: b,
            Ya: c
        } = Z(a);
        return $A(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function YA(a) {
        Z(a).Ya.classList.add("ved-snap-point-top");
        var b = fB(a, Z(a).Ya);
        Z(a).pa.scrollTop = b;
        gB(a)
    }

    function hB(a) {
        Co(aB(a), !0, () => {
            const {
                ig: b,
                Kc: c
            } = Z(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Co(aB(a), !1, () => {
            const {
                ig: b,
                Kc: c
            } = Z(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function iB(a) {
        const b = fp(a.win, Z(a).te);
        ip(b).i(() => void jB(a));
        ro(a, b)
    }

    function kB(a) {
        Co(lB(a), !0, () => {
            Z(a).Jg.classList.remove("ved-hidden")
        });
        Co(lB(a), !1, () => {
            Z(a).Jg.classList.add("ved-hidden")
        })
    }

    function mB(a) {
        const b = () => void Ko(a.F),
            {
                Ye: c,
                Ya: d,
                Ji: e
            } = Z(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Eo(nB(a), !0, b)
    }

    function oB(a) {
        Eo(ZA(a), !1, () => {
            YA(a);
            Z(a).Ha.classList.add("ved-hidden")
        })
    }

    function gB(a) {
        Do(a.l, !1, () => void Ko(a.H))
    }

    function jB(a) {
        if (!a.l.P) {
            var {
                Xf: b,
                te: c
            } = Z(a), d = c.getBoundingClientRect().height;
            d = Math.max(pB(a), d);
            a.l.g(!0);
            var e = qB(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function lB(a) {
        const {
            pa: b,
            Ya: c
        } = Z(a);
        return $A(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function nB(a) {
        return yo(a.A.map(Kp), rB(a))
    }

    function rB(a) {
        return $A(a, () => Z(a).pa.scrollTop === 0)
    }

    function fB(a, b) {
        ({
            Kc: a
        } = Z(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function sB(a, b) {
        a.A.g(!0);
        const {
            Kc: c,
            pa: d
        } = Z(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void tB(a, b)
    }

    function tB(a, b) {
        const {
            Kc: c,
            pa: d
        } = Z(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Z(a).pa.scrollTop = b;
        gB(a);
        a.A.g(!1)
    }

    function qB(a) {
        const b = Z(a).pa.scrollTop;
        sB(a, b);
        return () => void tB(a, b)
    }

    function pB(a) {
        const {
            pa: b,
            Id: c,
            Xf: d,
            Ya: e
        } = Z(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var h = d.getBoundingClientRect();
        const k = e.getBoundingClientRect();
        h = h.top - f.top;
        return Math.max(a.height - k.height - h, Math.min(a.height, a.bottom - f.top) - h)
    }
    var uB = class extends Q {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.B = b;
            this.I = c;
            this.j = d;
            this.tc = e;
            this.F = new Lo;
            this.H = new Lo;
            this.g = new R(!1);
            this.A = new R(!1);
            this.l = new R(!1)
        }
        J() {
            YA(this);
            hB(this);
            iB(this);
            kB(this);
            mB(this);
            oB(this);
            Z(this).pa.addEventListener("scroll", () => void gB(this))
        }
        i() {
            const a = this.B.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .Yd();
            super.i()
        }
    };

    function vB(a, b, c) {
        const d = vA(a, c.Ae),
            e = d.shadowRoot;
        e.appendChild(oe(new $d(a.document), gz(PA({
            uj: c.Ng * 100,
            Ki: c.jg * 100,
            zIndex: c.zIndex,
            ie: .5,
            Ma: c.Ma || !1
        }))));
        const f = rA("ved-drawer-container", e);
        c.Fe ? .i(h => {
            f.setAttribute("aria-label", h)
        });
        c = rA("ved-content-container", e);
        c.appendChild(b);
        po(a);
        return {
            Ha: f,
            Ye: rA("ved-modal-background", e),
            jh: rA("ved-ui-revealer", e),
            pa: rA("ved-scroller", e),
            Kc: rA("ved-scrolled-stack", e),
            Ji: rA("ved-fully-closed-anchor", e),
            Ya: rA("ved-partially-extended-anchor", e),
            Xf: rA("ved-content-sizer",
                e),
            te: c,
            vo: rA("ved-moving-handle", e),
            Id: rA("ved-moving-handle-holder", e),
            Ii: rA("ved-fixed-handle", e),
            ig: rA("ved-fixed-handle-holder", e),
            Jg: rA("ved-over-scroll-block", e),
            bb: d
        }
    };

    function wB(a, b, c) {
        var d = Xz(new bA(a), c.zIndex - 1);
        b = vB(a, b, c);
        const e = c.ze ? null : new kA(a);
        var f = b.Ii;
        f = new bp(new To(a, f), new Qo(f));
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
        b = new uB(a, b, new VA(f), e, c.tc);
        b.J();
        d = new xB(a, b, lA(a), d);
        ro(d, b);
        d.J();
        c.oc && ((a = DA(a)) ? yB(d, a, c.bf) :
            c.bf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function yB(a, b, c) {
        Eo(a.g.g, !0, () => {
            try {
                FA(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Eo(a.g.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Io(b.j).listen(() => void a.collapse());
        ro(a, b)
    }

    function zB(a) {
        Eo(yo(dB(a.g), eB(a.g)), !0, () => {
            Z(a.g).Ya.classList.remove("ved-snap-point-top")
        });
        Co(bB(a.g), !0, () => {
            Z(a.g).pa.classList.add("ved-no-snap")
        });
        Co(bB(a.g), !1, () => {
            Z(a.g).pa.classList.remove("ved-no-snap")
        });
        Eo(bB(a.g), !1, () => {
            var b = a.g;
            var c = Z(b).Id;
            c = sB(b, fB(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function AB(a) {
        const b = a.g.I;
        RA(b).listen(c => {
            c = -c;
            if (c > 0) {
                const {
                    jh: d
                } = Z(a.g);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                jh: c
            } = Z(a.g)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        UA(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var xB = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.g = b;
            Eo(ZA(b), !0, () => {
                nA(c);
                cA(d)
            });
            Eo(ZA(b), !1, () => {
                pA(c);
                dA(d)
            })
        }
        show({
            ag: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            XA(this.g);
            a && Eo(ZA(this.g), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.g;
            Z(a).Ha.classList.remove("ved-revealed");
            a.g.g(!1);
            a.j ? .Yd()
        }
        isVisible() {
            return ZA(this.g)
        }
        J() {
            Io(this.g.F).listen(() => {
                this.collapse()
            });
            zB(this);
            AB(this);
            po(this.win)
        }
    };

    function BB(a, b) {
        return Re() === 2 ? wB(a.win, b, {
            Ng: .95,
            jg: .95,
            zIndex: 2147483645,
            oc: !0,
            Ma: !0
        }) : GA(a.win, b, {
            ld: "min(65vw, 768px)",
            Xc: "",
            hd: !1,
            zIndex: 2147483645,
            oc: !0,
            hf: !1,
            Ma: !0
        })
    }

    function CB(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.T.map(d => ({
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

    function DB(a) {
        a.win.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.g.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var EB = class extends Q {
        constructor(a, b, c, d, e, f, h, k, l, m = () => {}) {
            super();
            this.win = a;
            this.T = b;
            this.M = e;
            this.B = f;
            this.l = k;
            this.Fa = l;
            this.ib = m;
            this.language = d ? .g() || "en";
            this.hb = d ? .j() || "Search results from ${website}";
            this.ua = U(es);
            this.H = c.replace("ca", "partner");
            this.ca = new $d(a.document);
            this.g = ne(this.ca, "IFRAME");
            this.I = h.i ? h.g : "9d449ff4a772956c6";
            this.A = (this.j = U(ks)) ? P(xn).g().concat(this.B) : this.B;
            this.F = new Tz(this.g, this.I, "auto-rs-prose", this.H, "AutoRsVariant", a.location, this.language, this.hb,
                this.A, this.l, this.Fa, this.j);
            this.ia = BB(this, this.g);
            ro(this, this.ia)
        }
        J() {
            this.T.length !== 0 && (this.ua || Gu(1075, () => {
                this.F.J()
            }, this.win), Gu(1076, () => {
                const a = ne(this.ca, "SCRIPT");
                Sd(a, Bd `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), CB(this), gr(this.M, {
                sts: "ok"
            }), this.l && DB(this))
        }
        Ka(a, b) {
            b ? Gu(1075, () => {
                this.F.J()
            }, this.win) : (this.ib(), ir(this.M, "pfns"))
        }
        Bb(a, b) {
            Sz(this.F, a, b);
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
    var FB = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };

    function GB(a) {
        const b = ev(a.l.ha),
            c = a.C.Ja(a.G, () => a.i());
        b.appendChild(c);
        a.A && (b.className = a.A);
        return {
            yi: b,
            di: c
        }
    }
    class HB {
        constructor(a, b, c, d) {
            this.G = a;
            this.l = b;
            this.C = c;
            this.A = d || null;
            this.g = null;
            this.j = new R(null)
        }
        J() {
            const a = GB(this);
            this.g = a.yi;
            Fv(this.l, this.g);
            this.j.g(a.di)
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
    async function IB(a) {
        await new Promise(b => {
            setTimeout(() => {
                try {
                    JB(a)
                } catch (c) {
                    ir(a.i, "pfere", c)
                }
                b()
            })
        })
    }

    function JB(a) {
        if ((!a.gd || !KB(a.config, a.aa, a.i)) && LB(a.g ? .j(), a.i)) {
            var b = a.g ? .l();
            b = Wy(a.win, a.config, a.aa, a.i, {
                Tj: !!b ? .A(),
                gd: a.gd,
                wo: !!b ? .g(),
                Sj: !!b ? .C()
            });
            b = MB(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = a.g ? .g() ? .g() || 0,
                f = NB(a.g),
                h = !!a.g ? .C(),
                k = String(a.g ? .B());
            if (!z(a.config, rq, 25) ? .g()) {
                var l = () => {
                    d.forEach(m => {
                        m.i()
                    })
                };
                Gu(1074, () => {
                    (new EB(a.win, c, a.webPropertyCode, a.g ? .j(), a.i, e, f, h, k, l)).J()
                }, a.win)
            }
        }
    }
    var OB = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.aa = e;
            this.gd = f;
            this.i = new jr(a, b, z(this.config, yq, 28) || new yq);
            this.g = z(this.config, yq, 28)
        }
    };

    function KB(a, b, c) {
        a = z(a, yq, 28) ? .g() ? .g() || 0;
        const d = P(Ut).g(js.g, js.defaultValue);
        return d && d.includes(a.toString()) ? !1 : (b ? Hh(b, 2, ug) : []).length === 0 ? (ir(c, "pfeu"), !0) : !1
    }

    function LB(a, b) {
        const c = P(Ut).g(hs.g, hs.defaultValue);
        a = a ? .g() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (ir(b, "pflna"), !1) : !0
    }

    function MB(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                h = b.document.createElement("div");
            h.setAttribute("id", f);
            d = new HB(b, d, new or(h), "autors-widget");
            d.J();
            c[f] = d
        }
        return c
    }

    function NB(a) {
        const b = a ? .G() || !1;
        a = a ? .A() || "";
        return new FB(b, a)
    };
    var PB = (a, b) => {
        const c = [];
        z(a, Iq, 18) && c.push(2);
        b.aa && c.push(0);
        z(a, yq, 28) && ki(z(a, yq, 28), 1) == 1 && c.push(1);
        z(a, wq, 31) && ki(z(a, wq, 31), 1) == 1 && c.push(5);
        z(a, tq, 32) && c.push(6);
        z(a, Lq, 34) && K(z(a, Lq, 34), 3) && c.push(7);
        return c
    };

    function QB(a, b) {
        const c = ne(Zd(a), "IMG");
        RB(a, c);
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

    function SB(a, b) {
        const c = b.document.createElement("button");
        RB(b, c);
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

    function TB(a, b, c) {
        const d = ne(Zd(b), "IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.l);
        RB(b, d);
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

    function UB(a) {
        const b = a.document.createElement("ins");
        RB(a, b);
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
    class VB {
        constructor(a, b, c) {
            this.i = a;
            this.l = b;
            this.j = c;
            this.g = new R(!1)
        }
        Ja(a, b, c, d) {
            const e = QB(a, d),
                f = QB(a),
                h = SB(this, a),
                k = TB(this, a, c);
            a = UB(a);
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
        kg() {
            return 40
        }
        Hg() {
            this.g.g(!1);
            return 0
        }
        Ig() {
            this.g.g(!0)
        }
    }

    function RB(a, b) {
        x(b, lr(a));
        x(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };
    var WB = a => a.googlefc = a.googlefc || {},
        XB = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        },
        YB = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        ZB = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new zq;
                b = Ai(b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = Ai(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = Ai(b, 3, a.defaultFloatingToolbarDismissPrivacySettings).i()
            } else a = null;
            return a
        };

    function $B(a, b) {
        const c = b.document.createElement("button");
        aC(a, b, c);
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

    function bC(a, b, c, d) {
        const e = b.document.createElement("div");
        x(e, lr(b));
        x(e, {
            "align-items": "center",
            "background-color": a.i,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        x(f, lr(b));
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

    function aC(a, b, c) {
        x(c, lr(b));
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
    class cC {
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
            aC(this, a, b);
            x(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.i
            });
            if (this.l) {
                var c = ne(Zd(a), "IMG");
                c.src = this.l;
                aC(this, a, c);
                x(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            aC(this, a, c);
            x(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = $B(this, a);
            c.appendChild(b);
            return this.j ? bC(this, a, c, this.j) : c
        }
    };

    function dC(a, b) {
        b = b.filter(c => z(c, Wp, 4) ? .g() === 5 && oi(c, 8) === 1);
        b = Wu(b, a);
        a = Hv(b, a);
        a.sort((c, d) => d.la.g - c.la.g);
        return a[0] || null
    };

    function eC({
        Wd: a,
        dd: b,
        Jd: c,
        Xd: d,
        ed: e,
        Kd: f
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

    function fC(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function gC(a, b) {
        var c = eC({
            Wd: b.left,
            dd: b.right,
            Jd: 10,
            Xd: b.top,
            ed: b.bottom,
            Kd: 10
        });
        b = new Set;
        for (const d of c)(c = hC(a, d)) && b.add(c);
        return b
    }

    function iC(a, b) {
        for (const c of b)
            if (b = hC(a, c)) return b;
        return null
    }

    function jC(a, b, c) {
        if (Sj(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || Vj(b).width <= 1 && Vj(b).height <= 1 || a.g.zi && !a.g.zi(b) ? !0 : !1;
        a.g.hg && a.g.hg(b, c, d);
        return d ? null : b
    }

    function hC(a, b) {
        var c = fC(a.K.document, b);
        if (c) {
            var d;
            if (!(d = jC(a, c, b))) a: {
                d = a.K.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = jC(a, c, b);
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
    var kC = class {
        constructor(a, b = {}) {
            this.K = a;
            this.g = b
        }
    };

    function lC({
        K: a,
        oj: b,
        hj: c,
        Wh: d,
        Eo: e,
        Fo: f,
        ta: h
    }) {
        let k = 0;
        try {
            k |= Nn(a, f);
            const n = Math.min(a.screen.width || 0, a.screen.height || 0);
            k |= n ? n < 320 ? 8192 : 0 : 2048;
            k |= a.navigator && mC(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = k;
                const p = a.innerHeight;
                var l = hf(a) * p >= b;
                var m = f | (l ? 0 : 1024)
            } else m = k | (a.innerHeight >= a.innerWidth ? 0 : 8);
            k = m;
            k |= Qn(a, c, !0, e)
        } catch {
            k |= 32
        }
        switch (d) {
            case 2:
                nC(a, h) && (k |= 16777216);
                break;
            case 1:
                oC(a, h) && (k |= 16777216)
        }
        return k
    }

    function mC(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var nC = (a, b = null) => {
            const c = eC({
                Wd: 0,
                dd: a.innerWidth,
                Jd: 3,
                Xd: 0,
                ed: Math.min(Math.round(a.innerWidth / 320 * 50), pC) + 15,
                Kd: 3
            });
            return iC(qC(a, b), c) != null
        },
        oC = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), pC) + 15,
                f = eC({
                    Wd: 0,
                    dd: c,
                    Jd: 3,
                    Xd: d - e,
                    ed: d,
                    Kd: 3
                });
            e > 25 && f.push({
                x: c - 25,
                y: d - 25
            });
            return iC(qC(a, b), f) != null
        };

    function rC(a, b) {
        var c = U(xr);
        a: {
            const e = a.innerWidth,
                f = a.innerHeight;
            let h = f;
            for (; h > b;) {
                var d = eC({
                    Wd: 0,
                    dd: e,
                    Jd: 9,
                    Xd: h - b,
                    ed: h,
                    Kd: 9
                });
                d = iC(qC(a), d);
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

    function qC(a, b = null) {
        return new kC(a, {
            hg: sC(a, b)
        })
    }

    function sC(a, b = null) {
        if (b) return (c, d, e) => {
            Gk(b, "ach_evt", {
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
    const pC = 90 * 1.38;

    function tC(a) {
        a = new uC(a);
        a.J();
        return a
    }

    function vC(a) {
        if (!qA(a.win)) {
            if (a.j.P) {
                const b = Xn(a.win);
                if (b > a.g + 100 || b < a.g - 100) a.j.g(!1), a.g = Rn(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void wC(a), 200)
        }
    }

    function wC(a) {
        if (!qA(a.win)) {
            var b = Rn(a.win);
            a.g && a.g > b && (a.g = b);
            b = Xn(a.win);
            b >= a.g - 100 && (a.g = Math.max(a.g, b), a.j.g(!0))
        }
    }
    var uC = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = 0;
            this.l = null;
            this.A = () => void vC(this)
        }
        J() {
            this.win.addEventListener("scroll", this.A);
            this.g = Rn(this.win);
            wC(this)
        }
        i() {
            this.win.removeEventListener("scroll", this.A);
            this.j.g(!1);
            super.i()
        }
    };

    function xC(a) {
        a.g || (a.g = yC(a));
        x(a.g, {
            display: "block"
        });
        a.A.Ig();
        a.j.g(a.C)
    }

    function zC(a) {
        const b = a.A.Hg();
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

    function yC(a) {
        var b = rC(a.l, a.A.kg() + 60);
        b = b == null ? 30 : b + 30;
        const c = a.l.document.createElement("div");
        x(c, lr(a.l));
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
            zC(a)
        }, () => {
            a.G.dispose();
            xC(a)
        });
        c.appendChild(a.C);
        a.F && (c.className = a.F);
        a.l.document.body.appendChild(c);
        return c
    }
    class AC {
        constructor(a, b, c) {
            this.l = a;
            this.A = b;
            this.C = null;
            this.j = new R(null);
            this.F = c || null;
            this.G = tC(a);
            this.g = null
        }
        J() {
            const a = zo(this.G.j);
            Co(a, !0, () => void xC(this));
            Eo(a, !1, () => void zC(this))
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

    function BC(a) {
        a.G.g(0);
        a.l != null && (a.l.i(), a.l = null);
        a.j != null && (a.j.i(), a.j = null)
    }

    function CC(a) {
        a.j = new AC(a.C, a.I, a.F);
        a.j.J();
        Fo(a.A, a.j.B());
        a.G.g(2)
    }
    class DC {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.H = b;
            this.M = c;
            this.I = d;
            this.F = e;
            this.G = new R(0);
            this.A = new R(null);
            this.j = this.l = this.g = null
        }
        J() {
            this.H ? (this.l = new HB(this.C, this.H, this.M, this.F), this.l.J(), Fo(this.A, this.l.B()), this.G.g(1), this.g == null && (this.g = new sp(this.C), this.g.J(2E3)), qp(this.g, () => {
                BC(this);
                CC(this)
            })) : CC(this)
        }
        i() {
            BC(this);
            this.g && (this.g.dispose(), this.g = null)
        }
        B() {
            return this.A
        }
    };
    var EC = class {
        constructor(a, b, c) {
            this.position = a;
            this.Ab = b;
            this.Ke = c
        }
    };

    function FC(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function GC(a, b, c) {
        var d = Pn(a);
        d = new EC(b.Tb.Eg(b.mb), b.Ab + 2 * b.mb, Math.min(d, b.Cd) - b.Tb.nd() + 2 * b.mb);
        d = d.position.Yf(a, d.Ab, d.Ke);
        var e = On(a),
            f = Pn(a);
        c = HC(a, new yj(Hd(d.top, 0, f - 1), Hd(d.right, 0, e - 1), Hd(d.bottom, 0, f - 1), Hd(d.left, 0, e - 1)), c);
        f = IC(c);
        let h = d.top;
        e = [];
        for (let k = 0; k < f.length; k++) f[k].start > h && e.push(new FC(h, f[k].start)), h = f[k].end;
        h < d.bottom && e.push(new FC(h, d.bottom));
        a = Pn(a);
        d = [];
        for (f = e.length - 1; f >= 0; f--) d.push(new FC(a - e[f].end, a - e[f].start));
        a: {
            for (const k of d)
                if (a = k.start + b.mb, a >
                    b.Tb.nd() + b.Ue ? a = null : (d = Math.min(k.end - b.mb, b.Cd) - a, a = d < b.Xe ? null : {
                        position: b.Tb.qh(a),
                        Dc: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            me: b,
            ko: c
        }
    }

    function HC(a, b, c) {
        const d = gC(new kC(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function IC(a) {
        return Array.from(a).map(JC).sort((b, c) => b.start - c.start)
    }

    function JC(a) {
        a = a.getBoundingClientRect();
        return new FC(a.top, a.bottom)
    };

    function KC({
        ga: a,
        sa: b
    }) {
        return new LC(a, b)
    }
    var LC = class {
        constructor(a, b) {
            this.ga = a;
            this.sa = b
        }
        Eg(a) {
            return new LC(this.ga - a, this.sa - a)
        }
        Yf(a, b, c) {
            a = Pn(a) - this.ga - c;
            return new yj(a, this.sa + b, a + c, this.sa)
        }
        Nf(a) {
            a.bottom = `${this.ga}px`;
            a.left = `${this.sa}px`;
            a.right = ""
        }
        lg() {
            return 0
        }
        nd() {
            return this.ga
        }
        qh(a) {
            return new LC(a, this.sa)
        }
    };

    function MC({
        ga: a,
        Ca: b
    }) {
        return new NC(a, b)
    }
    var NC = class {
        constructor(a, b) {
            this.ga = a;
            this.Ca = b
        }
        Eg(a) {
            return new NC(this.ga - a, this.Ca - a)
        }
        Yf(a, b, c) {
            var d = On(a);
            a = Pn(a) - this.ga - c;
            d = d - this.Ca - b;
            return new yj(a, d + b, a + c, d)
        }
        Nf(a) {
            a.bottom = `${this.ga}px`;
            a.right = `${this.Ca}px`;
            a.left = ""
        }
        lg() {
            return 1
        }
        nd() {
            return this.ga
        }
        qh(a) {
            return new NC(a, this.Ca)
        }
    };

    function OC(a) {
        const b = a.Di,
            c = a.Zh,
            d = a.Sh,
            e = a.Nj,
            f = a.Th;
        a = a.Rh;
        return lz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + X(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            X(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + X(a) + "px; border-radius: " + X(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + X(a) + "px; margin: 0; border-radius: " + X(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            X(d) + "px; height: " + X(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + X(d) + "px; margin-bottom: " + X(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + X(d) + "px; width: " + X(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            X(d - 6) + "px; width: " + X(d - 6) + "px; border-radius: " + X(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            X(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + X(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            X(16) + "px; max-width: calc(90vw - " + X(d * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + X(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + X(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            X(d * 2) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            uz(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + uz(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function PC(a) {
        const b = a.googleIconName,
            c = a.ariaLabel,
            d = a.backgroundColorCss,
            e = a.iconColorCss;
        a = a.ii;
        return lz('<div class="ft-button ft-collapsible ft-collapsed ft-last-button">' + ((a instanceof fz ? a.Ja() : a) ? "<style>@scope {" + X(a) + "}</style>" : "") + '<button class="ft-styless-button" aria-label="' + uz(c) + '" style="background-color: ' + uz(X(d)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + uz(X(e)) + '" aria-hidden="true">' + jz(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const QC = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function RC(a, b) {
        a = new SC(a, b, TC(a, b));
        a.J();
        return a
    }

    function UC() {
        ({
            hc: a
        } = {
            hc: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function VC(a, b, c) {
        WC(a) === 0 && b.classList.remove("ft-collapsed");
        XC(b, c);
        po(a.win);
        b.classList.remove("ft-collapsed");
        YC(a);
        return () => void ZC(a, b, c)
    }

    function $C(a) {
        aD(a.g.ka.Fc).length === 0 ? (a.l.P ? .Dj(), a.l.g(null), a.g.ka.Je.g(!1), a.g.ka.vg.g(!1), a.g.ka.Re.g(!1)) : (a.g.ka.Je.g(!0), bD(a))
    }

    function cD(a, {
        Bh: b = 0,
        jo: c = 0
    }) {
        b = Math.max(aD(a.g.Eb).length + b, 0);
        c = Math.max(aD(a.g.lb).length + c, 0);
        const d = b + c;
        let e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.j.hc && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function WC(a) {
        const b = a.g.lb;
        return aD(a.g.Eb).length + aD(b).length
    }

    function YC(a) {
        const b = a.g.lb,
            c = a.g.separator;
        aD(a.g.Eb).length > 0 && aD(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        WC(a) >= a.j.hc ? a.g.ug.g(!0) : a.g.ug.g(!1);
        WC(a) > 1 ? a.g.og.g(!0) : a.g.og.g(!1);
        WC(a) > 0 ? a.g.isVisible.g(!0) : a.g.isVisible.g(!1);
        dD(a);
        eD(a)
    }

    function ZC(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), YC(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function dD(a) {
        const b = aD(a.g.Eb).concat(aD(a.g.lb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        WC(a) >= a.j.hc || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function eD(a) {
        const b = aD(a.g.Eb).concat(aD(a.g.lb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.F.g(b.length > 0)
    }

    function fD(a) {
        bo(a.g.ka.Fc.children, b => {
            const c = a.g.ka.Ic;
            ZC(a, b, a.g.ka.Fc);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        $C(a)
    }

    function bD(a) {
        if (!a.l.P) {
            var b = gD(a.win, {
                googleIconName: "verified_user",
                ariaLabel: L(a.j.Oa, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.g.ka.vg.g(!a.g.ka.isVisible.P);
                    for (const [, c] of a.g.ka.Ic) c.yg = !0;
                    a.g.ka.Re.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Sc.classList.add("ft-reg-button");
            VC(a, b.Sc, a.g.lb);
            Fo(b.aj, a.g.ka.isVisible);
            a.l.g({
                oo: b,
                Dj: () => void ZC(a, b.Sc, a.g.lb)
            })
        }
    }

    function hD(a) {
        var b = a.g.ka.Re,
            c = b.g;
        a: {
            for ([, d] of a.g.ka.Ic)
                if (a = d, a.showUnlessUserInControl && !a.yg) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function iD(a) {
        a.g.ka.Yh.listen(() => {
            fD(a)
        })
    }
    var SC = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.g = c;
            this.l = new R(null);
            this.F = new R(!1)
        }
        addButton(a) {
            a = gD(this.win, a);
            return VC(this, a.Sc, this.g.Eb)
        }
        addRegulatoryMessage(a) {
            const b = this.g.ka.Fc,
                c = jD(this.win, a);
            XC(c.Ve, b);
            this.g.ka.Ic.set(c.Ve, c);
            $C(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    hD(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    hD(this)
                },
                isDismissed: Ho(c.isDismissed),
                removeCallback: () => {
                    var d = c.Ve;
                    const e = this.g.ka.Fc;
                    d.parentNode === e && e.removeChild(d);
                    this.g.ka.Ic.delete(d);
                    $C(this)
                }
            }
        }
        H() {
            return zo(this.l.map(a => a != null))
        }
        B() {
            return zo(this.F)
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
            pp(this.win, QC);
            Fo(this.g.Vj, this.j.Ec);
            this.win.document.body.appendChild(this.g.bb.Za);
            iD(this)
        }
    };

    function TC(a, b) {
        const c = uA(a),
            d = c.shadowRoot;
        d.appendChild(oe(new $d(a.document), gz(OC({
            Di: L(b.Oa, 1),
            Zh: L(b.Oa, 3),
            Sh: 50,
            Nj: 11,
            Th: 10,
            Rh: 5
        }))));
        const e = tA("ft-container", d),
            f = tA("ft-expand-toggle", d),
            h = tA("ft-expand-toggle-container", d),
            k = new R(null);
        k.i(q => {
            e.style.zIndex = String(q ? ? 2147483647)
        });
        const l = new R(!0);
        Co(l, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        Co(l, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                l.g(!l.P)
            });
        const m = new R(!1);
        Co(m, !0, () => {
            h.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        Co(m, !1, () => {
            h.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            l.g(!0)
        });
        const n = new R(!1);
        Co(n, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        Co(n, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(q => {
            if (q) {
                q.Nf(e.style);
                q = q.lg();
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
                po(a)
            }
        });
        const p = new R(!1);
        b = yo(kD(a, d), p, b.position.map(q => q !== null));
        Co(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        Co(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = lD(a, tA("ft-reg-bubble", d));
        return {
            container: e,
            Eb: tA("ft-button-holder", d),
            lb: tA("ft-bottom-button-holder", d),
            separator: tA("ft-separator", d),
            bb: c,
            Vj: k,
            to: l,
            ug: m,
            og: n,
            isVisible: p,
            ka: b
        }
    }

    function lD(a, b) {
        const c = new R(!1),
            d = new R(!1),
            e = Ao(c, d);
        Co(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        Co(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new R(!1);
        Co(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        Co(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const h = tA("ft-reg-bubble-close", b),
            k = new Lo;
        h.addEventListener("click", () => {
            Ko(k)
        });
        const l = tA("ft-reg-message-holder", b);
        ip(fp(a, l)).i(() => {
            b.style.height = `${l.offsetHeight}px`
        });
        return {
            Fc: l,
            vg: c,
            Re: d,
            isVisible: e,
            Je: f,
            Ic: new Map,
            Yh: Io(k)
        }
    }

    function gD(a, b) {
        const c = oe(new $d(a.document), gz(PC({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043",
            ii: b.buttonExtension ? .styleSheet
        })));
        if (b.cornerNumber !== void 0) {
            const d = Hd(Math.round(b.cornerNumber), 0, 99);
            tA("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && sA("BUTTON", c).addEventListener("click", b.onClick);
        a = new R(!1);
        Co(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        Co(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Sc: c,
            aj: a
        }
    }

    function jD(a, b) {
        a = new $d(a.document);
        var c = lz('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = oe(a, gz(c));
        c = tA("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = tA("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            Ve: a,
            showUnlessUserInControl: !1,
            yg: !1,
            isDismissed: new R(!1)
        }
    }

    function XC(a, b) {
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

    function aD(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function kD(a, b) {
        const c = new R(!1),
            d = tA("ft-symbol-font-load-test", b);
        b = tA("ft-symbol-reference", d);
        const e = tA("ft-text-reference", d),
            f = fp(a, b);
        Do(ip(f).map(h => h.width > 0 && h.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function mD(a) {
        const b = new Lo,
            c = Wo(a, 2500, () => void Ko(b));
        return new nD(a, () => void oD(a, () => void c()), Io(b))
    }

    function pD(a) {
        const b = new MutationObserver(() => {
            a.g()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        so(a, () => void b.disconnect())
    }

    function qD(a) {
        a.win.addEventListener("resize", a.g);
        so(a, () => void a.win.removeEventListener("resize", a.g))
    }
    var nD = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = !1
        }
    };

    function oD(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function rD(a) {
        return a.g[a.g.length - 1]
    }
    var tD = class {
        constructor() {
            this.j = sD;
            this.g = [];
            this.i = new Set
        }
        add(a) {
            if (this.i.has(a)) return !1;
            const b = jb(this.g, a, this.j);
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
            cb(this.g, b => b === a);
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

    function uD(a) {
        var b = a.Dc.P;
        let c;
        for (; a.j.gi() > b && (c = a.i.first());) {
            var d = a,
                e = c;
            vD(d, e);
            d.g.add(e)
        }
        for (;
            (d = rD(a.g)) && a.j.Pi() <= b;) wD(a, d);
        for (;
            (d = rD(a.g)) && (c = a.i.first()) && d.priority > c.priority;) b = a, e = c, vD(b, e), b.g.add(e), wD(a, d)
    }

    function wD(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.xf = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function vD(a, b) {
        b.xf && b.xf();
        b.xf = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var xD = class {
        constructor(a, b) {
            this.Dc = a;
            this.j = b;
            this.g = new tD;
            this.i = new tD;
            this.l = 0;
            this.Dc.listen(() => void uD(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                Df: this.l++,
                isInToolbar: new R(!1)
            };
            this.g.add(b);
            uD(this);
            return {
                isInToolbar: Ho(zo(b.isInToolbar)),
                removeCallback: () => {
                    vD(this, b);
                    this.g.delete(b);
                    uD(this)
                }
            }
        }
    };

    function sD(a, b) {
        return a.priority === b.priority ? b.Df - a.Df : a.priority - b.priority
    };

    function yD(a) {
        if (!a.g) {
            const b = tC(a.win);
            a.g = zo(b.j);
            ro(a, b)
        }
        return a.g
    }

    function zD(a, b, c) {
        const d = a.j.addRegulatoryMessage(b.messageSpec);
        b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow || AD(a, d, c);
        Do(c, !0, () => {
            d.removeCallback()
        })
    }

    function AD(a, b, c) {
        a = yD(a);
        const d = Co(a, !0, () => void b.showUnlessUserInControl()),
            e = Co(a, !1, () => void b.hideUnlessUserInControl());
        Co(wo(b.isDismissed), !0, () => {
            d();
            e()
        });
        Do(c, !0, () => {
            d();
            e()
        })
    }
    var BD = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.g = null
        }
        addRegulatoryMessage(a) {
            const b = new R(!1),
                c = Do(yD(this), !0, () => {
                    zD(this, a, b)
                });
            return {
                removeCallback: () => {
                    b.g(!0);
                    c()
                }
            }
        }
    };

    function CD(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new DD(a, b));
        return a.googFloatingToolbarManager
    }

    function ED(a) {
        a.g || (a.g = FD(a.win, a.Hb, a.Ec), ro(a, a.g.Ib), ro(a, a.g.Ug), GD(a), HD(a, a.g.Ib));
        return a.g
    }

    function ID(a) {
        var b = [];
        a.g ? .Ib ? .B().A() ? (b.push(() => JD(a)), b.push(() => KD(a))) : (b.push(() => KD(a)), b.push(() => JD(a)));
        a.g ? .Ib ? .H() ? .A() && b.push(() => {
            const c = Pn(a.win);
            return {
                position: KC({
                    ga: Math.floor(c / 3),
                    sa: 10
                }),
                Dc: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function GD(a) {
        a.Ec.P === null && a.g ? .position.g(ID(a))
    }

    function HD(a, b) {
        const c = mD(a.win);
        c.j || (pD(c), qD(c), c.j = !0);
        c.l.listen(() => void GD(a));
        ro(a, c);
        b.H().listen(() => void GD(a));
        b.B().listen(() => void GD(a));
        a.Ec.listen(() => void GD(a))
    }

    function JD(a) {
        var b = a.win;
        const c = Pn(a.win);
        return GC(b, {
            Tb: MC({
                ga: 50,
                Ca: 10
            }),
            Ue: Math.floor(c / 3),
            Ab: 60,
            Xe: UC(),
            Cd: Math.floor(c / 2),
            mb: 20
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).me
    }

    function KD(a) {
        var b = a.win;
        const c = Pn(a.win);
        return GC(b, {
            Tb: KC({
                ga: 50,
                sa: 10
            }),
            Ue: Math.floor(c / 3),
            Ab: 60,
            Xe: UC(),
            Cd: Math.floor(c / 2),
            mb: 40
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).me
    }
    class DD extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.Hb = b;
            this.g = null;
            this.Ec = LD(this.win, this)
        }
        addButton(a) {
            return ED(this).pj.addButton(a)
        }
        addRegulatoryMessage(a) {
            return ED(this).Ug.addRegulatoryMessage(a)
        }
    }

    function FD(a, b, c) {
        const d = new R(null),
            e = RC(a, {
                hc: 2,
                position: d.map(f => f ? .position ? ? null),
                Oa: b,
                Ec: c
            });
        b = new xD(d.map(f => f ? .Dc || 0), {
            addButton: f => e.addButton(f),
            gi: () => cD(e, {}),
            Pi: () => cD(e, {
                Bh: 1
            })
        });
        a = new BD(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Ib: e,
            position: d,
            pj: b,
            Ug: a
        }
    }

    function LD(a, b) {
        const c = new bA(a),
            d = new R(null),
            e = f => void d.g(f);
        so(b, () => {
            aA(c, e)
        });
        c.g.maxZIndexListeners.push(e);
        d.g($z(c));
        return d
    };
    const MD = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function ND(a, b, c, d, e) {
        a = new OD(a, b, c, d, e);
        if (a.l) {
            pp(a.win, MD);
            var f = a.win;
            b = a.message;
            c = uA(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new $d(f.document);
            var h = lz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                oe(f, gz(h)));
            d = tA("ipr-container", e);
            e = tA("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = tA("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.g = c.Za;
            Fv(a.l, a.g);
            a.j && a.j(Yl(1));
            PD(a)
        } else QD(a);
        return a
    }

    function PD(a) {
        const b = new sp(a.win);
        b.J(2E3);
        ro(a, b);
        qp(b, () => {
            RD(a);
            QD(a);
            b.dispose()
        })
    }

    function QD(a) {
        const b = CD(a.win, a.Hb).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        so(a, () => void b.removeCallback());
        a.j && a.j(Yl(2))
    }

    function RD(a) {
        a.g && (a.g.parentNode ? .removeChild(a.g), a.g = null)
    }
    var OD = class extends Q {
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
            RD(this);
            super.i()
        }
    };
    var UD = (a, b, c, d, e) => U(Br) ? SD(a, b, d, e) : TD(a, b, c, d, e);

    function TD(a, b, c, d, e) {
        const f = new DC(a, dC(a, e), new cC(b, d, "#FFF", "#4A4A4A", "normal"), new VB(b, c, d), "google-dns-link-placeholder");
        f.J();
        return () => f.i()
    }

    function SD(a, b, c, d) {
        const e = ND(a, dC(a, d), {
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, VD(a));
        return () => e.dispose()
    }

    function VD(a) {
        if (a = ZB(a)) return a;
        W.ba(1234, Error("No messages"), void 0, void 0);
        return (new zq).i()
    };

    function WD(a, b) {
        b && (a.i = UD(a.g, b.localizedDnsText, b.localizedDnsCollapseText, () => XD(a, b), a.l))
    }

    function YD(a) {
        var b = XB(a.g);
        if (ZD(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            c != null && b != null && (a.i = UD(a.g, c, b, () => $D(a), a.l))
        }
    }

    function aE(a) {
        const b = WB(a.g);
        b.callbackQueue = b.callbackQueue || [];
        U(Kr) ? (YB(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => WD(a, c)
        })) : (XB(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => YD(a)
        }))
    }

    function $D(a) {
        cA(a.j);
        XB(a.g).openConfirmationDialog(b => bE(a, b))
    }

    function XD(a, b) {
        cA(a.j);
        b.openConfirmationDialog(c => bE(a, c))
    }

    function bE(a, b) {
        b && a.i && (a.i(), a.i = null);
        dA(a.j)
    }
    class cE {
        constructor(a, b, c) {
            this.g = a;
            this.j = Xz(b, 2147483643);
            this.l = c;
            this.i = null
        }
    }

    function ZD(a, b) {
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

    function dE(a) {
        const b = a.document.createElement("ins");
        eE(a, b);
        x(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function fE(a, b, c, d) {
        const e = ne(Zd(a), "IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        eE(a, e);
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

    function gE(a, b) {
        const c = b.document.createElement("span");
        eE(b, c);
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

    function hE(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.j));
        x(c, lr(b));
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

    function iE(a) {
        const b = a.document.createElement("div");
        x(b, lr(a));
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
    class jE {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.i = d;
            this.g = new R(!1)
        }
        Ja(a, b, c, d) {
            c = dE(a);
            const e = fE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = fE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.i),
                h = gE(this, a),
                k = fE(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            x(k, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(h);
            c.appendChild(k);
            const l = hE(this, a);
            a = iE(a);
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
        kg() {
            return 71
        }
        Hg() {
            this.g.g(!1);
            return 0
        }
        Ig() {
            this.g.g(!0)
        }
    }

    function eE(a, b) {
        x(b, lr(a));
        x(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function kE(a) {
        lE(a.j, b => {
                var c = a.i,
                    d = b.Kj,
                    e = b.ai,
                    f = b.Hh;
                b = b.showRevocationMessage;
                var h = a.l;
                U(Dr) ? (e = dC(c, h), d = {
                    actionButton: {
                        buttonText: c.document.createTextNode(d),
                        onClick: b
                    },
                    informationText: c.document.createTextNode(f)
                }, f = ZB(c), f || (W.ba(1233, Error("No messages"), void 0, void 0), f = (new zq).i()), ND(c, e, d, f)) : (new DC(c, dC(c, h), new cC(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new jE(d, e, f, b), "google-revocation-link-placeholder")).J()
            },
            () => {
                dA(a.g);
                mE(a)
            })
    }

    function nE(a) {
        cA(a.g);
        kE(a)
    }

    function mE(a) {
        U(Cr) && (a.i.__tcfapi ? a.i.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? cA(a.g) : dA(a.g)
        }) : W.ba(1250, Error("No TCF API function"), void 0, void 0))
    }
    class oE {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = Xz(b, 2147483643);
            this.l = c;
            this.j = d
        }
    };
    var pE = a => {
            if (!a || gi(a, 1) == null) return !1;
            a = gi(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        qE = a => {
            if (!a || gi(a, 3) == null) return !1;
            a = gi(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        rE = a => a ? ei(a, 5) === !0 : !1,
        sE = a => a ? ei(a, 6) === !0 : !1;

    function tE() {
        return "m202407180101"
    };

    function uE(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Te: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b.indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            Te: c
        }
    };

    function vE(a, b) {
        Ce(a, (c, d) => {
            b[d] = c
        })
    }

    function wE(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && ue(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function xE() {
        if (yE) return yE;
        const a = Kj() || window,
            b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? yE = b : a.google_persistent_state_async = yE = new zE
    }

    function AE(a, b, c) {
        b = BE[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function CE(a, b, c) {
        return AE(a, b, () => c)
    }

    function DE(a, b, c) {
        return a.S[BE[b] || `google_ps_${b}`] = c
    }

    function EE(a, b) {
        return DE(a, b, CE(a, b, 0) + 1)
    }

    function FE() {
        var a = xE();
        return CE(a, 20, {})
    }

    function GE() {
        var a = xE();
        const b = CE(a, 31, !1);
        b || DE(a, 31, !0);
        return !b
    }

    function HE() {
        var a = xE();
        const b = CE(a, 41, !1);
        b || DE(a, 41, !0);
        return !b
    }

    function IE() {
        var a = xE();
        return CE(a, 26)
    }

    function JE() {
        var a = xE();
        return CE(a, 28, [])
    }

    function KE() {
        var a = xE();
        return AE(a, 39, LE)
    }
    var zE = class {
            constructor() {
                this.S = {}
            }
        },
        yE = null;
    const BE = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function ME(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function NE(a, b) {
        a = ME(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };
    var OE = {
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
        vmsli: "itsi",
        dap: "dap",
        aiapm: "aiapm",
        aiapmi: "aiapmi",
        aiombap: "aiombap"
    };

    function PE(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function QE(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function RE(a) {
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

    function sn(a, b) {
        a.g.size > 0 || SE(a);
        const c = a.g.get(0);
        c ? c.push(b) : a.g.set(0, [b])
    }

    function TE(a, b, c, d) {
        Gb(b, c, d);
        so(a, () => Hb(b, c, d))
    }

    function UE(a, b) {
        a.j !== 1 && (a.j = 1, a.g.size > 0 && VE(a, b))
    }

    function SE(a) {
        a.win.document.visibilityState ? TE(a, a.win.document, "visibilitychange", b => {
            a.win.document.visibilityState === "hidden" && UE(a, b);
            a.win.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.win ? (TE(a, a.win, "pagehide", b => {
            UE(a, b)
        }), TE(a, a.win, "pageshow", () => {
            a.j = 0
        })) : TE(a, a.win, "beforeunload", b => {
            UE(a, b)
        })
    }

    function VE(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var WE = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function XE(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function YE(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = cf(a.win)
    }

    function ZE(a) {
        var b = a.g.wpc;
        if (b === null || b === "") {
            b = a.g;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if ((a = ME(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client")) == null) {
                    b: {
                        a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                        /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !fk() ? PE : QE;
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
                        for (d = {}; e = c.exec(a);) d[e[1]] = RE(e[2]);
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

    function $E(a, b) {
        var c = new Wm;
        var d = YE(a);
        c = ti(c, 1, d);
        c = Vm(c.Ub(ZE(a)), a.g.sd);
        return ti(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function aF(a) {
        await XE(a.win, () => !(!YE(a) || !ZE(a)))
    }

    function bF() {
        var a = P(cF);
        a.i && (a.g.tar += 1)
    }

    function dF(a) {
        var b = P(cF);
        if (b.i) {
            var c = b.l;
            a(c);
            b.g.cc = Ei(c)
        }
    }
    async function eF(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await aF(a);
            var e = a.ta;
            a = $E(a, d);
            d = new Ml;
            b = N(d, 1, b);
            c = Ph(b, 2, c, vg);
            c = E(a, 9, Xm, c);
            mn(e, c)
        }
    }
    async function fF(a, b) {
        await aF(a);
        var c = $E(a);
        b = E(c, 5, Xm, b);
        a.i && !a.g.le.includes(2) && (a.g.le.push(2), mn(a.ta, b))
    }
    async function gF(a, b, c) {
        await aF(a);
        var d = a.ta;
        a = Vm($E(a, c), 1);
        b = E(a, 6, Xm, b);
        mn(d, b)
    }
    async function hF(a, b) {
        await aF(a);
        var c = a.ta;
        a = Vm($E(a), 1);
        b = E(a, 13, Xm, b);
        mn(c, b)
    }
    async function iF(a, b) {
        if (a.i) {
            await aF(a);
            var c = a.ta;
            a = $E(a);
            b = E(a, 11, Xm, b);
            mn(c, b)
        }
    }
    var cF = class {
        constructor(a, b) {
            this.win = Kj() || window;
            this.j = b ? ? new WE(this.win);
            this.ta = a ? ? new un(tE(), 100, 100, !0, this.j);
            this.g = AE(xE(), 33, () => {
                const c = V(Ar);
                return {
                    sd: c,
                    ssp: c > 0 && Be() < 1 / c,
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
        get Zc() {
            return this.g.cu
        }
        set Zc(a) {
            this.g.cu = a
        }
        get l() {
            return gw(1227, () => Fi(Nl, oh(this.g.cc || []))) || new Nl
        }
    };

    function jF(a) {
        var b = new kF;
        return pi(b, 1, a)
    }
    var kF = class extends O {
        constructor() {
            super()
        }
    };

    function lF(a) {
        if (a.i.adsbygoogle_ama_fc_has_run !== !0) {
            var b = pE(a.g),
                c = qE(a.g),
                d = !1;
            b && (nE(new oE(a.i, a.A, a.l || $h(a.g, Hq, 4), a.j)), d = !0);
            c && (aE(new cE(a.i, a.A, a.l || $h(a.g, Hq, 4))), d = !0);
            dF(h => {
                h = M(h, 9, !0);
                h = M(h, 10, b);
                M(h, 11, c)
            });
            var e = rE(a.g),
                f = sE(a.g) || U(ms);
            e && (d = !0);
            d && (d = jF(e && f), a.j.start(U(wr), d), a.i.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class mF {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.A = d;
            this.l = e || null
        }
    };

    function nF(a, b, c, d, e, f) {
        try {
            const h = a.g,
                k = ze("SCRIPT", h);
            k.async = !0;
            Sd(k, b);
            h.head.appendChild(k);
            k.addEventListener("load", () => {
                e();
                d && h.head.removeChild(k)
            });
            k.addEventListener("error", () => {
                c > 0 ? nF(a, b, c - 1, d, e, f) : (d && h.head.removeChild(k), f())
            })
        } catch (h) {
            f()
        }
    }

    function oF(a, b, c = () => {}, d = () => {}) {
        nF(Zd(a), b, 0, !1, c, d)
    };

    function pF(a = null) {
        a = a || u;
        return a.googlefc || (a.googlefc = {})
    };
    oc(Fn).map(a => Number(a));
    oc(Gn).map(a => Number(a));
    const qF = u.URL;

    function rF(a) {
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

    function sF(a) {
        var b = (new qF(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function tF(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new qF(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function uF(a) {
        var b = new qF(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + rF(c.searchParams), a.searchParams = void 0);
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
        a = (new qF(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function vF(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = ze("IFRAME", c);
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
    var wF = Ki(class extends O {});

    function xF(a) {
        if (a.g) return a.g;
        a.I && a.I(a.j) ? a.g = a.j : a.g = Qe(a.j, a.M);
        return a.g ? ? null
    }

    function yF(a) {
        a.l || (a.l = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.df,
                        e = a.F.get(d);
                    e && (e.xj || a.F.delete(d), e.Pb ? .(e.mi, c.payload))
                }
            } catch (f) {}
        }, Gb(a.j, "message", a.l))
    }

    function zF(a, b, c) {
        if (xF(a))
            if (a.g === a.j)(b = a.B.get(b)) && b(a.g, c);
            else {
                var d = a.A.get(b);
                if (d && d.Bc) {
                    yF(a);
                    var e = ++a.T;
                    a.F.set(e, {
                        Pb: d.Pb,
                        mi: d.yd(c),
                        xj: b === "addEventListener"
                    });
                    a.g.postMessage(d.Bc(c, e), "*")
                }
            }
    }
    var AF = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.M = b;
            this.I = c;
            this.H = d;
            this.B = new Map;
            this.T = 0;
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
            this.l && (Hb(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.H;
            super.i()
        }
    };
    const BF = (a, b) => {
            const c = {
                cb: d => {
                    d = wF(d);
                    b.Ra({
                        jc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        CF = {
            yd: a => a.Ra,
            Bc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Pb: (a, b) => {
                a({
                    jc: b
                })
            }
        };

    function DF(a) {
        a = wF(a.data.__fciReturn);
        return {
            payload: a,
            df: ii(a, 1)
        }
    }

    function EF(a, b = !1) {
        if (b) return !1;
        a.j || (a.g = !!xF(a.caller), a.j = !0);
        return a.g
    }

    function FF(a) {
        return new Promise(b => {
            EF(a) && zF(a.caller, "getDataWithCallback", {
                command: "loaded",
                Ra: c => {
                    b(c.jc)
                }
            })
        })
    }

    function GF(a, b) {
        EF(a) && zF(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: Di(b),
            Ra: () => {}
        })
    }
    var HF = class extends Q {
        constructor(a) {
            super();
            this.g = this.j = !1;
            this.caller = new AF(a, "googlefcPresent", void 0, DF);
            this.caller.B.set("getDataWithCallback", BF);
            this.caller.A.set("getDataWithCallback", CF)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };
    const IF = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function JF(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = IF(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (ej({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function KF(a, b = {}) {
        return JF(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.qo) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? LF(a, "1", 0) : !0 : !1
    }

    function LF(a, b, c) {
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
        if (e === 0) a = a.purpose && a.vendor ? (c = MF(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && MF(a.purpose.consents, b) : !0;
        else {
            var f;
            e === 1 ? f = a.purpose && a.vendor ? MF(a.purpose.legitimateInterests, b) && MF(a.vendor.legitimateInterests, "755") : !0 : f = !0;
            a = f
        }
        return a
    }

    function MF(a, b) {
        return !(!a || !a[b])
    }

    function NF(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(d => LF(a, d, c))
    }

    function OF(a) {
        if (a.g) return a.g;
        a.g = Qe(a.j, "__tcfapiLocator");
        return a.g
    }

    function PF(a) {
        return typeof a.j.__tcfapi === "function" || OF(a) != null
    }

    function QF(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (OF(a)) {
            RF(a);
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

    function SF(a, b) {
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
        QF(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = IF(c), c.internalBlockOnErrors = a.A, JF(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), QF(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function RF(a) {
        a.l || (a.l = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Gb(a.j, "message", a.l))
    }
    class TF extends Q {
        constructor(a, b = {}) {
            super();
            this.j = a;
            this.g = null;
            this.B = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.Oh ? ? !1;
            this.l = null
        }
        i() {
            this.B = {};
            this.l && (Hb(this.j, "message", this.l), delete this.l);
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
                f ? (b = f, b.internalErrorState = IF(b),
                    b.internalBlockOnErrors = this.A, h && b.internalErrorState === 0 || (b.tcString = "tcunavailable", h || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                QF(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && QF(this, "removeEventListener", null, a.listenerId)
        }
    };

    function lE(a, b, c) {
        const d = pF(a.win);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = pF(a.win),
                    f = new TF(a.win);
                PF(f) && SF(f, h => {
                    h.cmpId === 300 && h.tcString && h.tcString !== "tcunavailable" && b({
                        Kj: (0, e.getDefaultConsentRevocationText)(),
                        ai: (0, e.getDefaultConsentRevocationCloseText)(),
                        Hh: (0, e.getDefaultConsentRevocationAttestationText)(),
                        showRevocationMessage: () => {
                            (0, e.showRevocationMessage)()
                        }
                    })
                });
                c()
            }
        })
    }

    function UF(a, b = !1, c) {
        const d = {};
        try {
            const f = sF(a.win),
                h = tF(a.win);
            d.fc = f;
            d.fctype = h
        } catch (f) {}
        let e;
        try {
            e = uF(a.win.location.href)
        } catch (f) {}
        b && e && (d.href = e);
        b = Ec({
            id: a.g
        }, { ...d,
            ers: 2
        });
        oF(a.win, b, () => {}, () => {});
        c && GF(new HF(a.win), c)
    }
    var VF = class {
        constructor(a, b) {
            this.win = a;
            this.g = b
        }
        start(a = !1, b) {
            if (this.win === this.win.top) try {
                vF(this.win, "googlefcPresent"), UF(this, a, b)
            } catch (c) {}
        }
    };
    const WF = new Set(["ARTICLE", "SECTION"]);
    var XF = class {
        constructor(a) {
            this.g = a
        }
    };

    function YF(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function ZF(a) {
        return a.classList.length > 0
    }

    function $F(a) {
        return WF.has(a.tagName)
    };
    var aG = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function bG(a) {
        return Ca(a) && a.nodeType == 1 && a.tagName == "FIGURE" ? a : (a = a.parentNode) ? bG(a) : null
    };
    var cG = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = bG(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new aG(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var dG = class {
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

    function eG(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function fG(a) {
        return Array.from(gG(a).map.values()).filter(b => b.size >= 3).map(b => [...b])
    }

    function hG(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = d.height >= 50 && d.width >= a.A) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new FC(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && mo(a.j, {
                eb: c.g,
                Xa: iG,
                Db: !0
            }) === null
        })
    }

    function jG(a) {
        return fG(a).sort(kG).find(b => hG(a, b)) || []
    }

    function gG(a) {
        return lG(Array.from(a.win.document.getElementsByTagName("IMG")).map(cG).filter(Mp), b => {
            var c = [...YF("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? YF("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? YF("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = mo(a.i.g, {
                eb: b.g,
                Xa: ZF
            })) ? YF("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(mo(a.i.g, {
                eb: b.g,
                Xa: $F
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var mG = class {
        constructor(a, b, c, d, e) {
            var f = new cp;
            this.win = a;
            this.l = b;
            this.A = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function lG(a, b) {
        const c = new dG;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function iG(a) {
        return a.tagName === "A" && a.hasAttribute("href")
    }

    function kG(a, b) {
        return b.length - a.length
    };

    function nG(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = oG(a.j),
            d = pG(a.j);
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

    function qG(a) {
        a.g || (a.g = nG(a));
        return a.g
    }
    var rG = class extends Q {
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

    function pG(a) {
        const b = a.document.createElement("div");
        x(b, lr(a));
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

    function oG(a) {
        const b = a.document.createElement("div");
        x(b, lr(a));
        x(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function sG(a) {
        const b = new R(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return zo(b)
    };
    const tG = ["Google Material Icons", "Roboto"];

    function uG({
        win: a,
        Aa: b,
        Qi: c,
        webPropertyCode: d,
        Oa: e,
        L: f
    }) {
        const h = new ep(a, c);
        c = new rG(a, c, h);
        ro(c, h);
        a = new vG(a, d, e, b, c, f);
        ro(a, c);
        a.J()
    }
    var vG = class extends Q {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Oa = c;
            this.Aa = d;
            this.j = e;
            this.L = f;
            this.g = new R(!1)
        }
        J() {
            const a = wG(this.win, this.webPropertyCode, this.Oa);
            qG(this.j).appendChild(a.Ai);
            qu(this.win, a.va);
            sG(a.va).i(b => {
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
                    this.L ? .Gj(this.Aa, b)
                }
            });
            Do(this.g, !0, () => void a.Yi.g(!0));
            a.vi.listen(() =>
                void this.dispose());
            a.ui.listen(() => void this.L ? .Ej(this.Aa))
        }
    };

    function wG(a, b, c) {
        const d = new R(!1),
            e = a.document.createElement("div");
        x(e, lr(a));
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
        Co(d, !0, () => void x(e, {
            opacity: "1"
        }));
        Co(d, !1, () => void x(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        x(f, lr(a));
        x(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            zh: h,
            Xi: k
        } = xG(a, b);
        f.appendChild(h);
        e.appendChild(yG(a, L(c, 1)));
        b = zG(a, L(c, 2));
        e.appendChild(b.Uh);
        b.se.listen(() => void d.g(!1));
        return {
            Yi: d,
            Ai: e,
            va: k,
            ui: b.se,
            vi: b.se.delay(a, 450)
        }
    }

    function yG(a, b) {
        const c = a.document.createElement("div");
        x(c, lr(a));
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

    function zG(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        x(c, lr(a));
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
        const d = new Lo;
        c.addEventListener("click", () => void Ko(d));
        return {
            Uh: c,
            se: Io(d)
        }
    }

    function xG(a, b) {
        a = mu(a.document, b, null, null, {});
        return {
            zh: a.nb,
            Xi: a.va
        }
    };

    function AG({
        target: a,
        threshold: b = 0
    }) {
        const c = new BG;
        c.J(a, b);
        return c
    }
    var BG = class extends Q {
        constructor() {
            super();
            this.g = new R(!1)
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
            so(this, () => void c.disconnect())
        }
    };

    function CG(a) {
        const b = DG(a.win, mi(a.g, 2) ? ? 250, mi(a.g, 3) ? ? 300);
        let c = 1;
        return jG(a.l).map(d => ({
            Aa: c++,
            image: d,
            gb: b(d)
        }))
    }

    function EG(a, b) {
        const c = AG({
            target: b.image.g,
            threshold: ni(a.g) ? ? .8
        });
        a.j.push(c);
        Do(Go(c.g, a.win, mi(a.g, 5) ? ? 3E3, d => d), !0, () => {
            if (a.i < (mi(a.g, 1) ? ? 1)) {
                uG({
                    win: a.win,
                    Aa: b.Aa,
                    Qi: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Oa: a.Oa,
                    L: a.L
                });
                a.i++;
                if (!(a.i < (mi(a.g, 1) ? ? 1)))
                    for (; a.j.length;) a.j.pop() ? .dispose();
                a.L ? .Fj(b.Aa)
            }
        })
    }

    function FG(a) {
        const b = CG(a);
        b.filter(GG).forEach(c => void EG(a, c));
        a.L ? .Hj(b.map(c => ({
            Aa: c.Aa,
            gb: c.gb
        })))
    }
    var HG = class {
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

    function GG(a) {
        return a.gb.rejectionReasons.length === 0
    }

    function DG(a, b, c) {
        const d = Pn(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                Ab: e.width,
                Ke: e.height,
                wi: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function IG(a, b) {
        a.Aa = b;
        return a
    }
    var JG = class {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.Aa = this.g = null
        }
    };

    function KG(a, b) {
        return new JG(b, a.webPropertyCode, a.hostname, a.i, a.l)
    }

    function LG(a, b, c) {
        var d = a.j++;
        a.g === null ? (a.g = ok(), a = 0) : a = ok() - a.g;
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
                m[`${q}_s_h`] = b.g[p].gb.Ke;
                m[`${q}_s_dbf`] = b.g[p].gb.wi;
                b.g[p].gb.rejectionReasons.length > 0 && (m[`${q}_s_rej`] = b.g[p].gb.rejectionReasons.join(","))
            }
        } else m = null;
        iw("abg::imovad", {
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
    var MG = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        Hj(a) {
            var b = KG(this, "fndi");
            b.g = a;
            LG(this, b, a.length > 0 ? 1 : .1)
        }
        Fj(a) {
            a = IG(KG(this, "adpl"), a);
            LG(this, a, 1)
        }
        Gj(a, b) {
            a = IG(KG(this, "adst"), a);
            a.i = b;
            LG(this, a, 1)
        }
        Ej(a) {
            a = IG(KG(this, "adis"), a);
            LG(this, a, 1)
        }
        reportError(a) {
            var b = KG(this, "err");
            b.errorMessage = a;
            LG(this, b, .1)
        }
    };

    function NG(a, b, c) {
        return (a = a.g()) && ei(a, 11) ? c.map(d => d.j()) : c.map(d => d.A(b))
    };
    var OG = class extends O {
        getHeight() {
            return hi(this, 2)
        }
    };

    function PG(a, b) {
        return qi(a, 1, b)
    }

    function QG(a, b) {
        return ai(a, 2, b)
    }
    var RG = class extends O {};
    RG.O = [2];
    var SG = class extends O {
        constructor() {
            super()
        }
    };
    SG.O = [5];
    var TG = class extends O {
            constructor() {
                super()
            }
        },
        UG = [1, 2];
    const VG = new Set([7, 1]);
    var WG = class {
        constructor() {
            this.j = new dG;
            this.l = []
        }
        g(a, b) {
            VG.has(b) || Ip(Fp(Ev(a), c => void this.j.add(c, b)), c => void this.l.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function XG(a) {
        return new Yp(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class YG {
        g(a) {
            return XG(Math.floor(a.i))
        }
    };
    var ZG = class extends O {
        constructor() {
            super()
        }
    };

    function $G(a, b) {
        var c = b.adClient;
        if (typeof c !== "string" || !c) return !1;
        a.ce = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        Ca(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.C = {};
            for (const d of b.fillMessage) a.C[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        Xj(a.l) && Xj(a.i) || iw("rctnosize", b);
        return !0
    }
    var aH = class {
        constructor() {
            this.C = this.D = this.j = this.ce = null;
            this.i = this.l = 0
        }
        B() {
            return !0
        }
    };

    function bH(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function cH(a, b = []) {
        const c = Date.now();
        return Va(b, d => c - d < a * 1E3)
    }

    function dH(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Ya(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = cH(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function eH(a, b, c) {
        return b <= 0 || a == null || !bH(a) ? null : dH(a, b, c)
    };
    var fH = (a, b, c) => {
        let d = 0;
        try {
            var e = d |= Nn(a);
            const k = On(a),
                l = a.innerWidth;
            var f = k && l ? k / l : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= Qn(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var h;
            if (h = b) h = eH(c, 3600, "__lsv__") ? .length !== 0;
            h && (d |= 134217728)
        } catch (k) {
            d |= 32
        }
        return d
    };
    var gH = class extends aH {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.g = null
        }
        B(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = Vq(a)
            } catch (c) {
                b = null
            } else b = null;
            this.g = b;
            return !0
        }
    };
    const hH = {};

    function iH(a, b, c) {
        let d = jH(a, c, b);
        if (!d) return !0;
        const e = c.B.i;
        for (; d.Rb && d.Rb.length;) {
            const f = d.Rb.shift(),
                h = fv(f.ha);
            if (h && !(h <= d.Rc)) c.C ? .g(f, 18);
            else if (kH(c, f, {
                    zd: d.Rc
                })) {
                if (d.Oc.g.length + 1 >= e) return c.C ? .i(d.Rb, 19), !0;
                d = jH(a, c, b);
                if (!d) return !0
            }
        }
        return c.l
    }
    const jH = (a, b, c) => {
        var d = b.B.i,
            e = b.B.l,
            f = b.B;
        f = jy(b.da(), f.g ? f.g.ec : void 0, d);
        if (f.g.length >= d) return b.C ? .i(lH(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = Tn(f.j).scrollHeight || null), e = !d || d < 0 ? -1 : f.i * e - py(f)) : e = void 0;
        const h = (d = e == null || e >= 50) ? lH(b, f, {
            types: a
        }, c) : null;
        d || b.C ? .i(lH(b, f, {
            types: a
        }, c), 18);
        return {
            Oc: f,
            Rc: e,
            Rb: h
        }
    };
    hH[2] = Ja(function(a, b) {
        a = lH(b, jy(b.da()), {
            types: a,
            Cb: Xv(b.da())
        }, 2);
        if (a.length == 0) return !0;
        for (var c = 0; c < a.length; c++)
            if (kH(b, a[c])) return !0;
        return b.l ? (b.A.push(11), !0) : !1
    }, [0]);
    hH[5] = Ja(iH, [0], 5);
    hH[10] = Ja(function(a, b) {
        a = [];
        const c = b.Ka;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !U(Or) && a.push(1);
        return iH(a, 10, b)
    }, 10);
    hH[3] = function(a) {
        if (!a.l) return !1;
        var b = lH(a, jy(a.da()), {
            types: [0],
            Cb: Xv(a.da())
        }, 3);
        if (b.length == 0) return !0;
        for (var c = b.length - 1; c >= 0; c--)
            if (kH(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const mH = a => {
            var b;
            a.j.lh ? b = U(Qr) ? new Sv(0, null, [], 8, .3) : new Sv(0, null, [], 3, null) : b = Xv(a.da());
            return {
                types: [0],
                Cb: b
            }
        },
        oH = a => {
            const b = a.da().document.body.getBoundingClientRect().width;
            nH(a, XG(b))
        },
        qH = (a, b) => {
            var c = mH(a);
            c.Ij = [5];
            c = lH(a, jy(a.da()), c, 8);
            pH(a, c.reverse(), b)
        },
        pH = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.la), kH(a, d, {
                        de: b
                    })) return !0;
            return !1
        };
    hH[8] = function(a) {
        var b = a.da().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => hH[8](a), {
            once: !0
        }), !0;
        if (!a.l) return !1;
        if (!a.ud()) return !0;
        b = mH(a);
        b.ff = [2, 4, 5];
        b = lH(a, jy(a.da()), b, 8);
        const c = new YG;
        if (pH(a, b, c)) return !0;
        if (a.j.eg) switch (a.j.Og || 0) {
            case 1:
                qH(a, c);
                break;
            default:
                oH(a)
        }
        return !0
    };
    hH[6] = Ja(iH, [2], 6);
    hH[7] = Ja(iH, [1], 7);
    hH[9] = function(a) {
        const b = jH([0, 2], a, 9);
        if (!b || !b.Rb) return a.A.push(17), a.l;
        for (const d of b.Rb) {
            var c = a.j.He || null;
            c == null ? c = null : (c = gv(d.ha, new rH, new sH(c, a.da())), c = new Gv(c, d.ja(), d.la));
            if (c && !(fv(c.ha) > b.Rc) && kH(a, c, {
                    zd: b.Rc,
                    qe: !0
                })) return a = c.ha.ca, dv(d.ha, a.length > 0 ? a[0] : null), !0
        }
        a.A.push(17);
        return a.l
    };
    class rH {
        i(a, b, c, d) {
            return pu(d.document, a, b)
        }
        j(a) {
            return Pn(a) || 0
        }
    };
    var tH = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Oc = c
        }
        Ba(a) {
            return this.g ? My(this.i, this.g, a, this.Oc) : Ly(this.i, a, this.Oc)
        }
        za() {
            return this.g ? 16 : 9
        }
    };
    var uH = class {
        constructor(a) {
            this.ee = a
        }
        Ba(a) {
            return Ty(a.document, this.ee)
        }
        za() {
            return 11
        }
    };
    var vH = class {
        constructor(a) {
            this.tb = a
        }
        Ba(a) {
            return Qy(this.tb, a)
        }
        za() {
            return 13
        }
    };
    var wH = class {
        Ba(a) {
            return Jy(a)
        }
        za() {
            return 12
        }
    };
    var xH = class {
        constructor(a) {
            this.sc = a
        }
        Ba() {
            return Oy(this.sc)
        }
        za() {
            return 2
        }
    };
    var yH = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return Ry(this.g)
        }
        za() {
            return 3
        }
    };
    var zH = class {
        Ba() {
            return Uy()
        }
        za() {
            return 17
        }
    };
    var AH = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return Ny(this.g)
        }
        za() {
            return 1
        }
    };
    var BH = class {
        Ba() {
            return yb(Yu)
        }
        za() {
            return 7
        }
    };
    var CH = class {
        constructor(a) {
            this.ff = a
        }
        Ba() {
            return Py(this.ff)
        }
        za() {
            return 6
        }
    };
    var DH = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return Sy(this.g)
        }
        za() {
            return 5
        }
    };
    var EH = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Ba() {
            return Ja(Vy, this.minWidth, this.maxWidth)
        }
        za() {
            return 10
        }
    };
    var FH = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.A = a.l;
            this.g = a.A
        }
    };

    function GH(a) {
        var b = new HH;
        b.A = a;
        b.i.push(new AH(a));
        return b
    }

    function IH(a, b) {
        a.i.push(new CH(b));
        return a
    }

    function JH(a, b) {
        a.i.push(new xH(b));
        return a
    }

    function KH(a, b) {
        a.i.push(new DH(b));
        return a
    }

    function LH(a, b) {
        a.i.push(new yH(b));
        return a
    }

    function MH(a) {
        a.i.push(new BH);
        return a
    }

    function NH(a) {
        a.g.push(new wH);
        return a
    }

    function OH(a, b = 0, c, d) {
        a.g.push(new tH(b, c, d));
        return a
    }

    function PH(a, b = 0, c = Infinity) {
        a.g.push(new EH(b, c));
        return a
    }

    function QH(a) {
        a.g.push(new zH);
        return a
    }

    function RH(a, b = 0) {
        a.g.push(new vH(b));
        return a
    }

    function SH(a, b) {
        a.j = b;
        return a
    }
    var HH = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new FH(this)
        }
    };
    class sH {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.D || {};
            c.google_ad_client = a.ce;
            c.google_ad_height = Pn(b) || 0;
            c.google_ad_width = On(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new ZG;
            b = pi(b, 1, a.A);
            a.g && C(b, 2, a.g);
            c.google_rasc = Di(b);
            a.j && (c.google_adtest = "on");
            return new Yp(["fsi_container"], c)
        }
    };
    var TH = Rp(new Op(0, {})),
        UH = Rp(new Op(1, {})),
        VH = a => a === TH || a === UH;

    function WH(a, b, c) {
        eo(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class XH {
        constructor() {
            this.g = new io
        }
    };

    function YH(a, b) {
        for (var c = 0; c < b.length; c++) a.wa(b[c]);
        return a
    }

    function ZH(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class $H {
        constructor(a) {
            this.B = {};
            this.B.c = a;
            this.A = [];
            this.j = null;
            this.C = [];
            this.F = 0
        }
        Ub(a) {
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
            var b = pc(this.B);
            this.F > 0 && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.C.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && Fk(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function aI(a, b) {
        if (b && (a.g.apv = F(b, 4), Dh(b, sq, 23))) {
            var c = a.g;
            b = z(b, sq, 23);
            b = Jg(yh(b, 1));
            c.sat = "" + b
        }
        return a
    }

    function bI(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var cI = class extends $H {
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
        bh(a) {
            if (a) {
                const b = [];
                for (const c of go(a))
                    if (a.get(c).length > 0) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.kb, d.mh].join() + ")")
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
            rc(a, this.g);
            return a
        }
    };

    function dI(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function eI(a, b, c, d = 30) {
        c.length <= d ? a[b] = fI(c) : (a[b] = fI(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function fI(a) {
        const b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ka(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function gI(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function hI(a, b) {
        a.i.op = gI(b)
    }

    function iI(a, b, c) {
        eI(a.i, "fap", b);
        a.i.fad = gI(c)
    }

    function jI(a, b, c) {
        eI(a.i, "fmp", b);
        a.i.fmd = gI(c)
    }

    function kI(a, b, c) {
        eI(a.i, "vap", b);
        a.i.vad = gI(c)
    }

    function lI(a, b, c) {
        eI(a.i, "vmp", b);
        a.i.vmd = gI(c)
    }

    function mI(a, b, c) {
        eI(a.i, "pap", b);
        a.i.pad = gI(c)
    }

    function nI(a, b, c) {
        eI(a.i, "pmp", b);
        a.i.pmd = gI(c)
    }

    function oI(a, b) {
        eI(a.i, "psq", b)
    }
    var pI = class extends cI {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            this.errors.length > 0 && (a.e = fI(this.errors));
            return a
        }
    };

    function qI(a, b, c) {
        const d = b.ha;
        eo(a.g, d) || a.g.set(d, new rI(Ep(Ev(b)) ? ? ""));
        c(a.g.get(d))
    }

    function sI(a, b) {
        qI(a, b, c => {
            c.g = !0
        })
    }

    function tI(a, b) {
        qI(a, b, c => {
            c.i = !0
        })
    }

    function uI(a, b) {
        qI(a, b, c => {
            c.j = !0
        });
        a.I.push(b.ha)
    }

    function vI(a, b, c) {
        qI(a, b, d => {
            d.Mb = c
        })
    }

    function wI(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) VH(f.Mb ? ? "") ? ++e : (b = a.i.get(f.Mb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, h) => (f ? ? -1) - (h ? ? -1)),
            Nb: e
        }
    }

    function xI(a, b) {
        hI(b, a.i.vc());
        var c = ho(a.g).filter(f => (f.xb.startsWith(TH) ? 0 : 1) === 0),
            d = ho(a.g).filter(f => (f.xb.startsWith(TH) ? 0 : 1) === 1),
            e = wI(a, f => f.g, c);
        iI(b, e.list, e.Nb);
        e = wI(a, f => f.g, d);
        jI(b, e.list, e.Nb);
        e = wI(a, f => f.i, c);
        kI(b, e.list, e.Nb);
        e = wI(a, f => f.i, d);
        lI(b, e.list, e.Nb);
        c = wI(a, f => f.j, c);
        mI(b, c.list, c.Nb);
        d = wI(a, f => f.j, d);
        nI(b, d.list, d.Nb);
        oI(b, a.I.map(f => a.g.get(f) ? .Mb).map(f => a.i.get(f) ? ? null))
    }

    function zl() {
        var a = P(yI);
        if (!a.A) return ol();
        const b = xl(wl(vl(ul(tl(sl(rl(ql(nl(ml(new pl, a.A ? ? []), a.H ? ? []), a.C), a.G), a.F), a.M), a.T), a.B ? ? 0), ho(a.g).map(c => {
            var d = new ll;
            d = Bi(d, 1, c.xb);
            var e = a.i.get(c.Mb ? ? "", -1);
            d = ti(d, 2, e);
            d = M(d, 3, c.g);
            return M(d, 4, c.i)
        })), a.I.map(c => a.g.get(c) ? .Mb).map(c => a.i.get(c) ? ? -1));
        a.j != null && M(b, 6, a.j);
        a.l != null && Qh(b, 13, Lg(a.l), "0");
        return b
    }
    var yI = class {
        constructor() {
            this.l = this.H = this.A = null;
            this.F = this.G = !1;
            this.j = null;
            this.T = this.C = this.M = !1;
            this.B = null;
            this.i = new io;
            this.g = new io;
            this.I = []
        }
    };
    class rI {
        constructor(a) {
            this.j = this.i = this.g = !1;
            this.Mb = null;
            this.xb = a
        }
    };
    class zI {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function AI(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function BI(a, b) {
        const c = a.H.filter(d => go(d.bd).every(e => d.bd.get(e) === b.get(e)));
        return c.length === 0 ? (a.i.push(19), null) : c.reduce((d, e) => d.bd.vc() > e.bd.vc() ? d : e, c[0])
    }

    function CI(a, b) {
        b = Ev(b);
        if (b.g == null) return a.i.push(18), null;
        b = b.getValue();
        if (eo(a.j, b)) return a.j.get(b);
        var c = Pp(b);
        c = BI(a, c);
        a.j.set(b, c);
        return c
    }
    var DI = class {
        constructor(a) {
            this.g = a;
            this.j = new io;
            this.H = (z(a, Sq, 2) ? .g() || []).map(b => {
                const c = Pp(L(b, 1)),
                    d = ii(b, 2);
                return {
                    bd: c,
                    Sg: d,
                    xb: L(b, 1)
                }
            });
            this.i = []
        }
        F() {
            const a = P(yI);
            var b = this.l();
            a.A = b;
            b = this.C();
            a.H = b;
            b = this.A();
            b != null && (a.l = b);
            b = !!this.g.j() ? .g() ? .g();
            a.F = b;
            b = new io;
            for (const c of z(this.g, Sq, 2) ? .g() ? ? []) b.set(L(c, 1), ii(c, 2));
            a.i = b
        }
        B() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        C() {
            return [...Hh(this.g, 4, Jg, 0)]
        }
        A() {
            return z(this.g, Mq, 5) ? .g() ? ? null
        }
        G(a) {
            const b = CI(this, a);
            b ? .xb != null &&
                vI(P(yI), a, b.xb)
        }
        I(a) {
            const b = V(ps) || 0;
            if (a.length == 0 || b == 0) return !0;
            const c = (new wp(a)).filter(d => {
                d = CI(this, d) ? .xb || "";
                return d != "" && !(d === TH || d === UH)
            });
            return b <= c.g.length / a.length
        }
    };

    function EI(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => (CI(a.g, c) ? .Sg ? ? Number.MAX_VALUE) - (CI(a.g, d) ? .Sg ? ? Number.MAX_VALUE))
    }

    function FI(a, b) {
        var c = b.la.g,
            d = Math,
            e = d.min;
        const f = b.ja(),
            h = b.ha.g();
        c += 200 * e.call(d, 20, h == 0 || h == 3 ? AI(f.parentElement) : AI(f));
        a = a.i;
        a.g < 0 && (a.g = Tn(a.i).scrollHeight || 0);
        a = a.g - b.la.g;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.ja();
        return a
    }

    function GI(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => FI(a, c) - FI(a, d))
    }

    function HI(a, b) {
        return b.sort((c, d) => {
            const e = c.ha.G,
                f = d.ha.G;
            var h;
            e == null || f == null ? h = e == null && f == null ? FI(a, c) - FI(a, d) : e == null ? 1 : -1 : h = e - f;
            return h
        })
    }
    class II {
        constructor(a, b = null) {
            this.i = new zI(a);
            this.g = b && new DI(b)
        }
    };

    function JI(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.l) e = vp(e, f.Ba(a.j), KI(f.za(), c));
        f = e = e.apply(Iy(a.j));
        for (const h of b.i) f = vp(f, h.Ba(a.j), Lp([LI(h.za(), c), k => {
            d ? .g(k, h.za())
        }]));
        switch (b.j) {
            case 1:
                f = GI(a.g, f);
                break;
            case 2:
                f = HI(a.g, f);
                break;
            case 3:
                const h = P(yI);
                f = EI(a.g, f);
                e.forEach(k => {
                    sI(h, k);
                    a.g.g ? .G(k)
                });
                f.forEach(k => tI(h, k))
        }
        b.A && (f = yp(f, Wd(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        b.g ? .length === 1 && WH(a.l, b.g[0], {
            kb: e.g.length,
            mh: f.g.length
        });
        return xp(f)
    }
    class MI {
        constructor(a, b, c = null) {
            this.i = new wp(a);
            this.g = new II(b, c);
            this.j = b;
            this.l = new XH
        }
        A() {
            this.i.forEach(a => {
                a.i && Zt(a.i);
                a.i = null
            })
        }
    }
    const KI = (a, b) => c => cv(c, b, a),
        LI = (a, b) => c => cv(c.ha, b, a);

    function NI(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = OI(PI(c), a);
                    break a;
                case 3:
                    a = OI(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = OI(e ? e.nodeType == 1 ? e : PI(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !QI(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !pr(b) && b.offsetWidth <= 0);
        return d
    }

    function OI(a, b) {
        if (!a) return !1;
        a = Ae(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function PI(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function QI(a) {
        return !!a.nextSibling || !!a.parentNode && QI(a.parentNode)
    };
    var RI = !hc && !cc();

    function SI(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (RI && a.dataset) {
            if (ec() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var TI = (a, b, c) => {
            if (!b) return null;
            const d = ee(document, "INS");
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
                c = Pn(a);
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
        UI = a => {
            const b = a.document.body;
            var c = TI(a, b, null);
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
            return c ? TI(a, c.parentNode || b, c) : null
        },
        WI = a => {
            let b = 0;
            try {
                b |= Nn(a), pe() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), VI(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        VI = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if (SI(a[b]) == "autorelaxed") return !0;
            return !1
        };

    function XI(a) {
        const b = Sn(a, !0),
            c = Tn(a).scrollWidth,
            d = Tn(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Xn(a);
        const h = [];
        var k = [];
        const l = [],
            m = [];
        var n = [],
            p = [],
            q = [];
        let t = 0,
            w = 0,
            A = Infinity,
            D = Infinity,
            G = null;
        var I = fy({
            Kb: !1
        }, a);
        for (var B of I) {
            I = B.getBoundingClientRect();
            const aa = b - (I.bottom + f);
            var J = void 0,
                H = void 0;
            if (B.className && B.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                J = B.getAttribute("google_element_uid");
                H = a.google_sv_map;
                if (!J ||
                    !H || !H[J]) continue;
                J = (H = hk(H[J])) ? H.height : 0;
                H = H ? H.width : 0
            } else if (J = I.bottom - I.top, H = I.right - I.left, J <= 1 || H <= 1) continue;
            h.push(J);
            l.push(H);
            m.push(J * H);
            B.className && B.className.indexOf("google-auto-placed") != -1 ? (w += 1, B.className && B.className.indexOf("pedestal_container") != -1 && (G = J)) : (A = Math.min(A, aa), p.push(I), t += 1, k.push(J), n.push(J * H));
            D = Math.min(D, aa);
            q.push(I)
        }
        A = A === Infinity ? null : A;
        D = D === Infinity ? null : D;
        f = YI(p);
        q = YI(q);
        k = ZI(b, k);
        p = ZI(b, h);
        n = ZI(b * c, n);
        B = ZI(b * c, m);
        return new $I(a, {
            xi: e,
            Hc: b,
            tj: c,
            sj: d,
            fj: t,
            Ih: w,
            Kh: aJ(h),
            Lh: aJ(l),
            Jh: aJ(m),
            nj: f,
            mj: q,
            lj: A,
            kj: D,
            ye: k,
            xe: p,
            Dh: n,
            Ch: B,
            vj: G
        })
    }

    function bJ(a, b, c, d) {
        const e = pe() && !(On(a.i) >= 900);
        d = Va(d, f => $a(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.xi,
            pg_h: cJ(a.g.Hc),
            pg_w: cJ(a.g.tj),
            pg_hs: cJ(a.g.sj),
            c: cJ(a.g.fj),
            aa_c: cJ(a.g.Ih),
            av_h: cJ(a.g.Kh),
            av_w: cJ(a.g.Lh),
            av_a: cJ(a.g.Jh),
            s: cJ(a.g.nj),
            all_s: cJ(a.g.mj),
            b: cJ(a.g.lj),
            all_b: cJ(a.g.kj),
            d: cJ(a.g.ye),
            all_d: cJ(a.g.xe),
            ard: cJ(a.g.Dh),
            all_ard: cJ(a.g.Ch),
            pd_h: cJ(a.g.vj),
            dt: e ? "m" : "d"
        }
    }
    class $I {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function aJ(a) {
        return Jd.apply(null, Va(a, b => b > 0)) || null
    }

    function ZI(a, b) {
        return a <= 0 ? null : Id.apply(null, b) / a
    }

    function YI(a) {
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

    function cJ(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function dJ(a) {
        var b = hy({
            Kb: !1,
            pd: !1
        }, a);
        a = (Pn(a) || 0) - Xn(a);
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d].getBoundingClientRect();
            ny(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function eJ(a) {
        const b = {};
        var c = hy({
            Kb: !1,
            pd: !1,
            Ne: !1,
            Oe: !1
        }, a).map(d => d.getBoundingClientRect()).filter(ny);
        b.Ef = c.length;
        c = iy({
            Ne: !0
        }, a).map(d => d.getBoundingClientRect()).filter(ny);
        b.cg = c.length;
        c = iy({
            Oe: !0
        }, a).map(d => d.getBoundingClientRect()).filter(ny);
        b.Fg = c.length;
        c = iy({
            pd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(ny);
        b.Jf = c.length;
        c = (Pn(a) || 0) - Xn(a);
        c = hy({
            Kb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(ny).filter(Ia(fJ, null, c));
        b.Ff = c.length;
        a = XI(a);
        c = a.g.ye != null ? a.g.ye : null;
        c !=
            null && (b.Ag = c);
        a = a.g.xe != null ? a.g.xe : null;
        a != null && (b.Gf = a);
        return b
    }

    function kH(a, b, {
        zd: c,
        de: d,
        qe: e
    } = {}) {
        return Gu(997, () => gJ(a, b, {
            zd: c,
            de: d,
            qe: e
        }), a.g)
    }

    function lH(a, b, c, d) {
        var e = c.Cb ? c.Cb : a.B;
        const f = Yv(e, b.g.length);
        e = a.j.Hf ? e.g : void 0;
        const h = QH(RH(NH(PH(OH(MH(KH(LH(IH(JH(GH(c.types), a.ia), c.ff || []), a.ca), c.Ij || [])), f.Gc || void 0, e, b), c.minWidth, c.maxWidth)), f.tb || void 0));
        a.T && h.g.push(new uH(a.T));
        b = 1;
        a.j.kh ? b = 2 : a.sb() && (b = 3);
        SH(h, b);
        a.j.eh && (h.l = !0);
        return Gu(995, () => JI(a.i, h.build(), d, a.C || void 0), a.g)
    }

    function nH(a, b) {
        const c = UI(a.g);
        if (c) {
            const d = Xp(a.I, b),
                e = mu(a.g.document, a.G, null, null, {}, d);
            e && (bu(e.nb, c, 2, 256), Gu(996, () => hJ(a, e, d), a.g))
        }
    }

    function iJ(a) {
        return a.F ? a.F : a.F = a.g.google_ama_state
    }

    function gJ(a, b, {
        zd: c,
        de: d,
        qe: e
    } = {}) {
        const f = b.ha;
        if (f.A) return !1;
        var h = b.ja(),
            k = f.g();
        if (!NI(a.g, k, h, a.l)) return !1;
        k = null;
        f.zc ? .includes(6) ? (k = Math.round(h.getBoundingClientRect().height), k = new Yp(null, {
            google_max_responsive_height: c == null ? k : Math.min(c, k),
            google_full_width_responsive: "false"
        })) : k = c == null ? null : new Yp(null, {
            google_max_responsive_height: c
        });
        c = Zp(gi(f.Td, 2) || 0);
        h = $p(f.G);
        const l = jJ(a, f),
            m = kJ(a),
            n = Xp(a.I, f.T ? f.T.g(b.la) : null, k, d || null, c, h, l, m),
            p = b.fill(a.G, n);
        if (e && !lJ(a, p, n) || !Gu(996,
                () => hJ(a, p, n), a.g)) return !1;
        xj(9, [f.G, f.Lb]);
        a.sb() && uI(P(yI), b);
        return !0
    }

    function jJ(a, b) {
        return Ep(Ip(Cv(b).map(aq), () => {
            a.A.push(18)
        }))
    }

    function kJ(a) {
        if (!a.sb()) return null;
        var b = a.i.g.g ? .C();
        if (b == null) return null;
        b = b.join("~");
        a = a.i.g.g ? .A() ? ? null;
        return bq({
            ki: b,
            Ei: a
        })
    }

    function lJ(a, b, c) {
        if (!b) return !1;
        var d = b.va,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.va;
        c = c && c.wc() || {};
        var h = V(Er);
        if (d !== d.top) h = xe(d) ? 3 : 16;
        else if (On(d) < 488)
            if (d.innerHeight >= d.innerWidth) {
                var k = On(d);
                if (!k || (k - f) / k > h) h = 6;
                else {
                    if (h = c.google_full_width_responsive !== "true") b: {
                        k = e.parentElement;
                        for (h = On(d); k; k = k.parentElement) {
                            const l = Ae(k, d);
                            if (!l) continue;
                            const m = Ke(l.width);
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
                    if ((c = Ae(e, d)) && c.position == "fixed") {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = On(d), f = d - f, f = d && f >= 0 ? !0 : d ? f < -10 ? 11 : f < 0 ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.va;
            if (d = iu(a, b)) f = b.style, f.border = f.borderStyle = f.outline = f.outlineStyle = f.transition = "none", f.borderSpacing = f.padding = "0", gu(b, d, "0px"), f.width = `${On(a)}px`, ju(a, b, d), f.zIndex = "30";
            return !0
        }
        Zt(b.nb);
        return !1
    }

    function hJ(a, b, c) {
        if (!b) return !1;
        try {
            qu(a.g, b.va, c)
        } catch (d) {
            return Zt(b.nb), a.A.push(6), !1
        }
        return !0
    }
    class mJ {
        constructor(a, b, c, d, e = {}, f = [], h = !1) {
            this.i = a;
            this.G = b;
            this.g = c;
            this.B = d.Cb;
            this.ia = d.sc || [];
            this.I = d.Fi || null;
            this.ca = d.oi || [];
            this.T = d.ee || [];
            this.j = e;
            this.l = !1;
            this.M = [];
            this.A = [];
            this.H = this.F = void 0;
            this.Ka = f;
            this.C = h ? new WG : null
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
            if ((V(ps) || 0) == 0) return !0;
            if (this.H === void 0) {
                const a = SH(NH(MH(GH([0, 1, 2]))), 1).build(),
                    b = Gu(995, () => JI(this.i, a), this.g);
                this.H = this.i.g.g ? .I(b) || !1
            }
            return this.H
        }
        Se() {
            return !!this.j.Wg
        }
        ud() {
            return !VI(this.g)
        }
        ua() {
            return this.C
        }
    }
    const fJ = (a, b) => b.top <= a;

    function nJ(a, b, c, d, e, f = 0, h = 0) {
        this.La = a;
        this.Pd = f;
        this.Od = h;
        this.errors = b;
        this.zb = c;
        this.g = d;
        this.i = e
    };
    var oJ = (a, {
        ud: b = !1,
        Se: c = !1,
        Lj: d = !1,
        sb: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !U(Or);
            const h = a.includes(1);
            (d || e || h) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !U(Or) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function pJ(a, b, c) {
        a = oJ(a, {
            ud: b.ud(),
            Se: b.Se(),
            Lj: !!b.j.He,
            sb: b.sb()
        });
        return new qJ(a, b, c)
    }

    function rJ(a, b) {
        const c = hH[b];
        return c ? Gu(998, () => c(a.g), a.A) : (a.g.wa(12), !0)
    }

    function sJ(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(rJ(a, b))
            })
        })
    }

    function tJ(a) {
        a.g.l = !0;
        return Promise.all(a.i.map(b => sJ(a, b))).then(b => {
            b.includes(!1) && a.g.wa(5);
            a.i.splice(0, a.i.length)
        })
    }
    class qJ {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = ab(this.i, 1);
            this.g = b;
            this.A = c
        }
    };
    const uJ = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function vJ(a) {
        return tJ(a).then(() => {
            var b = a.g.i.i.filter(Yu).g.length;
            var c = a.g.M.slice(0);
            var d = a.g;
            d = [...d.A, ...(d.i.g.g ? .B() || [])];
            b = new nJ(b, c, d, a.g.i.i.g.length, a.g.i.l.g, a.g.i.i.filter(Yu).filter(Zu).g.length, a.g.i.i.filter(Zu).g.length);
            return new uJ(b)
        })
    };
    var wJ = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > b * .5
        },
        xJ = a => {
            const b = Pn(a) || 0;
            return c => c.getBoundingClientRect().height >= b * .75
        };
    var yJ = (a, b) => {
        b = xv(b, a);
        const c = b.map(d => d.g);
        b = b.filter(d => {
            d = d.g.getBoundingClientRect();
            return d.width > 0 && d.height > 0
        }).filter(d => wJ(c)(d.g)).filter(d => xJ(a)(d.g));
        b.sort((d, e) => {
            e = e.g;
            return d.g.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };

    function zJ(a) {
        return a.reduce((b, c) => b.g.getBoundingClientRect().bottom < c.g.getBoundingClientRect().bottom ? c : b)
    }

    function AJ(a, b, c, d) {
        let e = !1;
        const f = new IntersectionObserver(h => {
            for (const k of h)
                if (k.isIntersecting) e = !0;
                else {
                    if (h = e) h = a, h = b.getBoundingClientRect().bottom <= Pn(h.win) / 2;
                    h && (BJ(a.L, {
                        typ: "cee",
                        cet: c
                    }), e = !1)
                }
        }, {
            rootMargin: d
        });
        f.observe(b);
        so(a, () => {
            f.disconnect()
        })
    }
    var CJ = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.L = c
        }
    };

    function DJ(a, b) {
        BJ(a, {
            typ: "cdr",
            af: b.ke,
            ...(b.ke > 0 ? {
                vh: b.W,
                ph: b.Hc,
                ah: b.Eh,
                at: b.Gh
            } : {})
        })
    }

    function BJ(a, b) {
        a = { ...b,
            wpc: a.webPropertyCode,
            cor: a.g,
            tim: Math.round(pk() ? ? -1),
            num: a.i++
        };
        iw("ama_vignette", a, 1)
    }
    var EJ = class {
        constructor(a) {
            var b = bf();
            this.webPropertyCode = a;
            this.g = b;
            this.i = 0
        }
    };
    class FJ {
        g() {
            return new Yp([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class GJ {
        g() {
            return new Yp(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function HJ(a) {
        return qr(a.g.document).map(b => {
            const c = new Ru(b, 3);
            b = new Tu(su(a.g, b));
            return new Xu(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    class IJ {
        constructor(a) {
            var b = new GJ;
            this.g = a;
            this.i = b || null
        }
    };
    const JJ = {
        vf: "10px",
        ne: "10px"
    };

    function KJ(a) {
        return co(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Xu(new Ru(b, 1), new Pu(JJ), a.i, !1, 0, [], null, a.g, null))
    }
    class LJ {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function MJ(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(ka(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        eI(a.i, "cnstr", c, 80)
    }
    var NJ = class extends $H {
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

    function OJ(a, b) {
        return a == null ? b + "ShouldNotBeNull" : a == 0 ? b + "ShouldNotBeZero" : a < -1 ? b + "ShouldNotBeLessMinusOne" : null
    }

    function PJ(a, b, c) {
        const d = OJ(c.md, "gapsMeasurementWindow") || OJ(c.uc, "gapsPerMeasurementWindow") || OJ(c.Cc, "maxGapsToReport");
        return d != null ? Cp(d) : c.If || c.uc != -1 || c.Cc != -1 ? Ap(new QJ(a, b, c)) : Cp("ShouldHaveLimits")
    }

    function RJ(a) {
        return iJ(a.j) && iJ(a.j).placed || []
    }

    function SJ(a) {
        return RJ(a).map(b => np(lp(b.element, a.g)))
    }

    function TJ(a) {
        return RJ(a).map(b => b.index)
    }

    function UJ(a, b) {
        const c = b.ha;
        return !a.C && c.l && gi(c.l, 8) != null && gi(c.l, 8) == 1 ? [] : c.A ? (c.ca || []).map(d => np(lp(d, a.g))) : [np(new mp(b.la.g, 0))]
    }

    function VJ(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new mp(c, f - c)), c = d)
        }
        return b
    }

    function WJ(a, b) {
        b = b.map(c => {
            var d = new OG;
            d = qi(d, 1, c.g);
            c = c.getHeight();
            return qi(d, 2, c)
        });
        return QG(PG(new RG, a), b)
    }

    function XJ(a) {
        const b = $h(a, OG, 2).map(c => `G${hi(c,1)}~${c.getHeight()}`);
        return `W${hi(a,1)}${b.join("")}`
    }

    function YJ(a, b) {
        const c = [];
        let d = 0;
        for (const e of go(b)) {
            const f = b.get(e);
            f.sort((h, k) => k.getHeight() - h.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.B && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(WJ(e, f));
            d += f.length;
            if (!a.B && d >= a.i) break
        }
        return c
    }

    function ZJ(a) {
        const b = $h(a, RG, 5).map(c => XJ(c));
        return `M${hi(a,1)}H${hi(a,2)}C${hi(a,3)}B${Number(!!K(a,4))}${b.join("")}`
    }

    function $J(a) {
        var b = Hv(xp(a.j.i.i), a.g),
            c = SJ(a),
            d = new jo(TJ(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = UJ(a, b[e]);
                c.push(...f)
            }
        c.push(new mp(0, 0));
        c.push(np(new mp(Tn(a.g).scrollHeight, 0)));
        b = VJ(c);
        c = new io;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.g / a.l), eo(c, f) || c.set(f, []), c.get(f).push(e);
        b = YJ(a, c);
        c = new SG;
        c = qi(c, 1, a.i);
        c = qi(c, 2, a.l);
        c = qi(c, 3, a.A);
        a = pi(c, 4, a.C);
        return ai(a, 5, b)
    }

    function aK(a) {
        a = $J(a);
        return ZJ(a)
    }
    var QJ = class {
        constructor(a, b, c) {
            this.G = c.md == -1;
            this.l = c.md;
            this.F = c.uc == -1;
            this.A = c.uc;
            this.B = c.Cc == -1;
            this.i = c.Cc;
            this.C = c.sg;
            this.j = b;
            this.g = a
        }
    };

    function hr(a, b, c) {
        let d = b.Pa;
        b.rb && U(cs) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.Ua || "pvc" in c || (c.pvc = cf(a.g)), iw(b.qb, c, d))
    }

    function bK(a, b, c) {
        c = c.l(a.g);
        b.Ua && (c.pvc = cf(a.g));
        0 <= b.Pa && (c.r = b.Pa, hr(a, b, c))
    }
    var cK = class {
        constructor(a) {
            this.g = a
        }
    };
    const dK = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function eK(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        iw("ama", b, .01)
    }

    function fK(a) {
        const b = {};
        Ce(dK, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function gK(a) {
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

    function hK(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function iK(a, b) {
        a = Hh(a, 2, ug);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function jK(a, b) {
        a = hK(gK(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = Ee(a),
            d = kK(a);
        return b.find(e => {
            const f = Dh(e, jq, 7) ? yg(yh(z(e, jq, 7), 1)) : yg(yh(e, 1));
            e = Dh(e, jq, 7) ? gi(z(e, jq, 7), 2) : 2;
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

    function kK(a) {
        const b = {};
        for (;;) {
            b[Ee(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function lK(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            eK(a, {
                lserr: 1
            })
        }
    };

    function mK() {
        var a = new zq;
        a = Ai(a, 1, "Toggle toolbar expansion");
        a = Ai(a, 2, "Toggle privacy and legal settings display");
        return Ai(a, 3, "Dismiss privacy and legal settings display").i()
    };
    var oK = (a, b, c, d, e, f = null, h = null) => {
            nK(a, new cK(a), b, c, d, e, f, h)
        },
        nK = (a, b, c, d, e, f, h = null, k = null) => {
            if (c)
                if (d) {
                    var l = PB(d, e);
                    try {
                        const m = new pK(a, b, c, d, e, l, f, h, k);
                        Gu(990, () => qK(m), a)
                    } catch (m) {
                        wj() && xj(15, [m]), bK(b, ar, ZH(bI(aI((new cI(0)).Ub(c), d), l).wa(1), m)), fF(P(cF), Dl(new Ll, Xk(1)))
                    }
                } else bK(b, ar, (new cI(0)).Ub(c).wa(8)), fF(P(cF), Dl(new Ll, Xk(8)));
            else bK(b, ar, (new cI(0)).wa(9)), fF(P(cF), Dl(new Ll, Xk(9)))
        };

    function qK(a) {
        a.G.forEach(b => {
            switch (b) {
                case 0:
                    Gu(991, () => rK(a), a.g);
                    break;
                case 1:
                    Gu(1073, () => {
                        const c = U(is);
                        IB(new OB(a.g, a.C, a.j, a.A, a.i.aa, c))
                    }, a.g);
                    break;
                case 2:
                    sK(a);
                    break;
                case 6:
                    a.runAutoGames();
                    break;
                case 7:
                    Gu(1203, () => {
                        var c = z(a.j, Lq, 34);
                        if (c) {
                            var d = a.g,
                                e = a.A,
                                f = c.i();
                            c = d.location.hostname;
                            var h = z(f, Kq, 1) ? .g() ? ? [];
                            c = new MG(e, c, cf(u), h);
                            if (h = z(f, Kq, 1))
                                if (f = z(f, Jq, 2)) {
                                    pp(d, tG);
                                    const m = new oo;
                                    var k = d.innerWidth;
                                    var l = .375 * k;
                                    k = new FC(l, k - l);
                                    l = d.innerWidth;
                                    l = On(d) >= 900 ? .2 * l : .5 * l;
                                    FG(new HG(d, e,
                                        h, f, new mG(d, k, l, m, new XF(m)), c))
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g)
            }
        })
    }

    function rK(a) {
        var b = U(Qr) ? void 0 : a.i.zj;
        let c = null;
        c = U(Qr) ? Xv(a.g) : Vv(a.g, b);
        if (a.i.aa && Dh(a.i.aa, iq, 10)) {
            var d = Gh(a.i.aa.g(), 1);
            d !== null && d !== void 0 && (c = Mv(a.g, d, b));
            U(gs) && a.i.aa.g() ? .g() === 2 && (c = Uv(a.i.aa.g(), c))
        }
        Dh(a.j, fq, 26) && (c = Zv(c, z(a.j, fq, 26), a.g));
        c = aw(c, a.g);
        b = a.i.aa ? Hh(a.i.aa, 6, ug) : [];
        d = a.i.aa ? $h(a.i.aa, oq, 5) : [];
        const e = a.i.aa ? Hh(a.i.aa, 2, ug) : [],
            f = Gu(993, () => {
                var h = a.j,
                    k = $h(h, Hq, 1),
                    l = a.i.aa && iK(a.i.aa, 1);
                l = U(ls) ? "" : l ? "text_image" : "text";
                var m = new FJ,
                    n = Wu(k, a.g, {
                        Nh: m,
                        Wi: new Uu(l)
                    });
                k.length !=
                    n.length && a.H.push(13);
                n = n.concat(KJ(new LJ(a.g, m)));
                k = U(ds);
                m = z(h, Tq, 24) ? .j() ? .g() ? .g() || !1;
                if (k || m) k = HJ(new IJ(a.g)), m = P(yI), n = n.concat(k), m.M = !0, m.B = k.length, a.F === "n" && (a.F = z(h, Tq, 24) ? .g() ? .length ? "o" : "p");
                k = U(gs) && a.i.aa.g() ? .g() === 2 && a.i.aa.g() ? .j();
                k = U(Lr) || k;
                a: {
                    if (m = z(h, Dq, 6))
                        for (p of m.g())
                            if (Dh(p, Np, 4)) {
                                var p = !0;
                                break a
                            }
                    p = !1
                }
                k && p ? (p = n.concat, k = a.g, (m = z(h, Dq, 6)) ? (k = zv(m.g(), k), l = NG(h, l, k)) : l = [], l = p.call(n, l)) : (p = n.concat, k = a.g, (m = z(h, Dq, 6)) ? (k = yv(m.g(), k), l = NG(h, l, k)) : l = [], l = p.call(n, l));
                n = l;
                h = z(h, Tq, 24);
                return new MI(n, a.g, h)
            }, a.g);
        a.l = new mJ(f, a.A, a.g, {
            Cb: c,
            Fi: a.M,
            sc: a.i.sc,
            oi: b,
            ee: d
        }, tK(a), e, U(cs));
        iJ(a.l) ? .optimization ? .ablatingThisPageview && !a.l.sb() && (ru(a.g), P(yI).C = !0, a.F = "f");
        a.B = pJ(e, a.l, a.g);
        Gu(992, () => vJ(a.B), a.g).then(Gu(994, () => a.ia.bind(a), a.g), a.ca.bind(a));
        uK(a)
    }

    function sK(a) {
        const b = z(a.j, Iq, 18);
        b && lF(new mF(a.g, new VF(a.g, a.A), b, new bA(a.g), $h(a.j, Hq, 1)))
    }

    function tK(a) {
        const b = U(fs);
        if (!a.j.g()) return {
            eh: b,
            kh: !1,
            ri: !1,
            lh: !1,
            eg: !1,
            Wg: !1,
            wj: 0,
            Og: 0,
            Hf: vK(a),
            He: a.I
        };
        const c = a.j.g();
        return {
            eh: b || K(c, 14, !1),
            kh: K(c, 2, !1),
            ri: K(c, 3, !1),
            lh: K(c, 4, !1),
            eg: K(c, 5, !1),
            Wg: K(c, 6, !1),
            wj: ji(c, 8, 0),
            Og: gi(c, 10),
            Hf: vK(a),
            He: a.I
        }
    }

    function uK(a) {
        if (U(Ht)) {
            var b = new EJ(a.A);
            const e = z(a.j, Dq, 6) ? .g(),
                f = e ? .length > 0;
            var c = b,
                d = !!Uz(a.g).reactiveTypeEnabledInAsfe[8];
            BJ(c, {
                typ: "pv",
                asp: Number(f),
                ve: Number(d)
            });
            f && (a = new CJ(a.g, e, b), b = yJ(a.win, a.g), b.length === 0 ? DJ(a.L, {
                ke: 0
            }) : (c = zJ(b), d = c.g.getBoundingClientRect(), DJ(a.L, {
                ke: b.length,
                W: Pn(a.win),
                Hc: Tn(a.win).scrollHeight,
                Eh: d.height,
                Gh: a.win.scrollY + d.top
            }), c = c.g, AJ(a, c, 0, "-50% 0px 0px 0px"), AJ(a, c, 1, "0px 0px 0px 0px")))
        }
    }

    function vK(a) {
        return U(Xr) || U(gs) && a.i.aa ? .g() ? .g() === 2 ? !1 : a.i.aa && Dh(a.i.aa, iq, 10) ? (Gh(a.i.aa.g(), 1) || 0) >= .5 : !0
    }

    function wK(a, b) {
        for (var c = YH(YH(new cI(b.La), b.errors), a.H), d = b.zb, e = 0; e < d.length; e++) a: {
            for (var f = c, h = d[e], k = 0; k < f.C.length; k++)
                if (f.C[k] == h) break a;f.C.push(h)
        }
        c.g.pp = b.Od;
        c.g.ppp = b.Pd;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.kc;
        c.g.eatfAbg = b.lc;
        c.g.reatf = b.Jb;
        c = bI(aI(c.H(a.B.l.slice(0)), a.j), a.G).Ub(a.A);
        if (d = b.Ga) c.g.as_count = d.Ef, c.g.d_count = d.cg, c.g.ng_count = d.Fg, c.g.am_count = d.Jf, c.g.atf_count = d.Ff, c.g.mdns = dI(d.Ag), c.g.alldns = dI(d.Gf);
        c = c.G(b.Qb).bh(b.kd);
        d = b.Hc;
        d != null && (c.g.pgh = d);
        c.g.abl = b.ng;
        c.g.rr = a.F;
        b.exception !== void 0 && ZH(c, b.exception).wa(1);
        return c
    }

    function xK(a, b) {
        var c = wK(a, b);
        bK(a.C, b.errors.length > 0 || a.H.length > 0 || b.exception !== void 0 ? ar : $q, c);
        if (z(a.j, Tq, 24)) {
            a.l.i.g.g ? .F();
            b = iJ(a.l);
            const d = P(yI);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.T = !!b ? .optimization ? .availableAbg;
            b = P(yI);
            c = new pI(c);
            b.A ? (c.i.sl = fI(b.A ? ? []), c.i.daaos = fI(b.H ? ? []), c.i.ab = gI(b.G), c.i.rr = gI(b.M), c.i.oab = gI(b.F), b.j != null && (c.i.sab = gI(b.j)), b.C && (c.i.fb = gI(b.C)), c.i.ls = gI(b.T), hI(c, b.i.vc()), b.B != null && (c.i.rp = gI(b.B)),
                b.l != null && (c.i.expl = gI(b.l)), xI(b, c)) : c.errors.push("irr");
            bK(a.C, cr, c)
        }
        c = a.l ? .ua();
        U(cs) && c != null && (c = new Map([...c.j.map.entries()].map(eG)), b = new NJ, MJ(b, c), bK(a.C, fr, b))
    }

    function yK(a, b) {
        const c = P(cF);
        if (c.i) {
            var d = new Ll,
                e = b.zb.filter(h => h !== null),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(h => h !== null);
            Hl(Fl(Kl(Jl(Il(Gl(Al(Cl(El(Bl(d, a.B.l.slice(0).map(h => {
                var k = new Wk;
                return Bh(k, 1, tg(h))
            })), e.map(h => {
                var k = new Zk;
                return Bh(k, 1, tg(h))
            })), f.map(h => Xk(h))), z(a.j, sq, 23) ? .g()), b.La).G(b.Qb), b.Jb), b.kc), b.lc), a.G.map(h => h.toString())), fl(el(dl(cl(bl(al($k(new gl, b.Ga ? .Ef), b.Ga ? .cg), b.Ga ? .Fg), b.Ga ? .Jf), b.Ga ? .Ff), b.Ga ? .Ag), b.Ga ? .Gf));
            if (b.kd)
                for (let h of go(b.kd)) {
                    e =
                        new Oh;
                    for (let k of b.kd.get(h)) kl(e, il(hl(new jl, k.kb), k.mh));
                    Nh(d).set(h.toString(), e)
                }
            z(a.j, Tq, 24) && yl(d);
            fF(c, d)
        }
    }

    function zK(a, b) {
        try {
            U(Nr) && a.l ? .Fa() ? .A()
        } catch (c) {
            bK(a.C, er, ZH(bI(aI((new cI(b)).Ub(a.A), a.j), a.G).wa(14), c))
        }
    }

    function AK(a, b, c) {
        {
            var d = iJ(a.l),
                e = b.g;
            const f = e.g,
                h = e.Od;
            let k = e.La,
                l = e.Pd,
                m = e.errors.slice(),
                n = e.zb.slice(),
                p = b.exception;
            const q = ME(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? k += d.numAutoAdsPlaced : a.B.j && n.push(13), d.exception !== void 0 && (p = d.exception), d.numPostPlacementsPlaced && (l += d.numPostPlacementsPlaced), c = {
                La: k,
                Od: h,
                Pd: l,
                Qb: f,
                errors: e.errors.slice(),
                zb: n,
                exception: p,
                Jb: c,
                kc: !!d.eatf,
                lc: !!d.eatfAbg,
                ng: q
            }) : (n.push(12), a.B.j && n.push(13), c = {
                La: k,
                Od: h,
                Pd: l,
                Qb: f,
                errors: m,
                zb: n,
                exception: p,
                Jb: c,
                kc: !1,
                lc: !1,
                ng: q
            })
        }
        c.Ga = eJ(a.l.g);
        if (b = b.g.i) c.kd = b;
        c.Hc = Tn(a.g).scrollHeight;
        if (wj() || z(a.j, rq, 25) ? .j()) {
            d = xp(a.l.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const h of go(e)) d[h] = e.get(h);
                d = {
                    anchorElement: $u(f),
                    position: f.g(),
                    clearBoth: f.H,
                    locationType: f.Lb,
                    placed: f.A,
                    placementProto: f.l ? Ei(f.l) : null,
                    articleStructure: f.C ? Ei(f.C) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            xj(14, [{
                placementIdentifiers: b
            }, a.l.G, c.Ga])
        }
        return c
    }

    function BK(a, b) {
        var c = a.l.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Qb;
        c.numAutoAdsPlaced = b.La;
        c.hasAtfAd = b.Jb;
        b.exception !== void 0 && (c.exception = b.exception);
        a.l != null && (a = PJ(a.g, a.l, {
            md: -1,
            uc: -1,
            Cc: -1,
            sg: !0,
            If: !0
        }), a.g != null ? (c.placementPositionDiffs = aK(a.getValue()), b = $J(a.getValue()), a = new TG, a = E(a, 2, UG, b), c.placementPositionDiffsReport = Di(a)) : (b = a.i.message, c.placementPositionDiffs = "E" + b, a = new TG, a = Th(a, 1, UG, Og(b)), c.placementPositionDiffsReport = Di(a)))
    }

    function CK(a, b) {
        xK(a, {
            La: 0,
            Qb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            kc: void 0,
            lc: void 0,
            Ga: void 0
        });
        yK(a, {
            La: 0,
            Qb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            kc: void 0,
            lc: void 0,
            Ga: void 0
        })
    }
    class pK {
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
            this.T = h;
            this.F = "n"
        }
        runAutoGames() {
            const a = z(this.j, tq, 32);
            a && this.T.runAutoGames({
                win: this.g,
                webPropertyCode: this.A,
                Of: a,
                Hb: (z(this.j, Aq, 33) ? .g() ? .i() ? ? null) || mK()
            })
        }
        ia(a) {
            try {
                zK(this, a.g.La);
                const b = dJ(this.l.g) || void 0;
                Zq({
                    Be: b
                }, this.g);
                const c = AK(this, a, dJ(this.l.g));
                Dh(this.j, rq, 25) && ei(z(this.j, rq, 25), 1) && BK(this, c);
                xK(this, c);
                yK(this, c);
                hw(753, () => {
                    if (U(Rr) && this.l !=
                        null) {
                        var d = PJ(this.g, this.l, {
                                md: V(bs),
                                uc: V(as),
                                Cc: V(Tr),
                                sg: !0,
                                If: !1
                            }),
                            e = pc(c);
                        d.g != null ? (d = aK(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.i.message;
                        e = wK(this, e);
                        bK(this.C, br, e)
                    }
                })()
            } catch (b) {
                CK(this, b)
            }
        }
        ca(a) {
            zK(this, 0);
            CK(this, a)
        }
    };
    var DK = class extends O {},
        EK = Ki(DK);

    function FK(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Dp(() => EK(c)) : Ap(null)
    };

    function GK(a, b) {
        return pi(a, 5, b)
    }

    function HK(a, b) {
        return pi(a, 14, b)
    }
    var IK = class extends O {
        constructor() {
            super()
        }
        l() {
            return F(this, 1) != null
        }
        j() {
            return F(this, 2) != null
        }
        A() {
            return K(this, 3)
        }
        C() {
            return ei(this, 3) != null
        }
        g() {
            return K(this, 5)
        }
    };
    IK.O = [10];
    var LK = ({
        win: a,
        Va: b,
        qg: c = !1,
        rg: d = !1
    }) => JK({
        win: a,
        Va: b,
        qg: c,
        rg: d
    }) ? (b = CE(xE(), 24)) ? KK(a, GK(new IK, KF(b))) : new Bp(null, Error("tcunav")) : KK(a, GK(new IK, !0));

    function JK({
        win: a,
        Va: b,
        qg: c,
        rg: d
    }) {
        if (!(d = !d && PF(new TF(a)))) {
            if (c = !c) {
                if (b) {
                    a = FK(a);
                    if (a.g != null)
                        if ((a = a.getValue()) && gi(a, 1) != null) b: switch (a = gi(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else W.ba(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function KK(a, b) {
        return (a = mj(b, a)) ? Ap(a) : new Bp(null, Error("unav"))
    };
    var MK = class extends O {};
    class NK {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.C = c;
            this.i = !1;
            this.j = d;
            this.A = e
        }
    };
    class OK {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function PK() {
        const {
            promise: a,
            resolve: b
        } = new OK;
        return {
            promise: a,
            resolve: b
        }
    };

    function QK(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = PK();
        b[a] = d;
        c();
        return d
    }

    function RK(a, b, c) {
        return QK(a, b, () => {
            ye(b.document, c)
        }).promise
    };

    function SK() {
        const a = {};
        Vt(Gr) && (a.bust = Vt(Gr));
        var b = xE();
        b = CE(b, 38, "");
        b !== "" && (a.sbust = b);
        return a
    }
    const TK = new Map([
        [2, 7],
        [3, 1],
        [4, 3],
        [5, 12]
    ]);

    function UK(a, b, c) {
        c = wc(c, SK());
        if (a === 1) return {
            Bo: ye(b.document, c),
            Qc: new Promise(() => {})
        };
        if (TK.has(a)) return {
            Qc: RK(TK.get(a), b, c)
        };
        throw Error(`Unexpected chunkId: ${a}`);
    };
    var VK = class {
        constructor(a) {
            this.jb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            Of: c,
            Hb: d
        }) {
            jw(1116, UK(5, a, this.jb).Qc.then(e => {
                e.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: Di(c),
                    serializedFloatingToolbarMessages: Di(d)
                })
            }))
        }
    };
    var WK = {
            Yk: "google_ads_preview",
            Ll: "google_mc_lab",
            bm: "google_anchor_debug",
            am: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            xm: "google_scr_debug",
            zm: "google_ia_debug_allow_onclick",
            Xm: "googleads",
            yh: "google_pedestal_debug",
            rn: "google_responsive_slot_preview",
            qn: "google_responsive_dummy_ad",
            Ok: "google_audio_sense",
            Rk: "google_auto_gallery",
            Tk: "google_auto_storify_swipeable",
            Sk: "google_auto_storify_scrollable",
            Qk: "google_games_single_game",
            Pk: "google_games_catalog"
        },
        XK = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var YK = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function ZK(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = $K(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function $K(a) {
        let b = "";
        Ce(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function aL() {
        var a = u.location;
        let b = !1;
        Ce(WK, c => {
            ZK(a, c) && (b = !0)
        });
        return b
    }

    function bL(a, b) {
        switch (a) {
            case 1:
                return ZK(b, "google_ia_debug");
            case 2:
                return ZK(b, "google_bottom_anchor_debug");
            case 3:
                return ZK(b, "google_anchor_debug") || ZK(b, "googleads")
        }
    };

    function cL({
        win: a,
        webPropertyCode: b,
        jb: c
    }) {
        ZK(a.location, "google_games_single_game") ? dL(a, b, 1, c) : ZK(a.location, "google_games_catalog") && dL(a, b, 2, c)
    }

    function dL(a, b, c, d) {
        var e = new tq;
        c = Bh(e, 1, tg(c));
        (new VK(d)).runAutoGames({
            win: a,
            webPropertyCode: b,
            Of: c,
            Hb: mK()
        })
    };
    var eL = class extends O {
        constructor() {
            super()
        }
        Li() {
            return ki(this, 3)
        }
    };
    const fL = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var gL = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return hi(this, 2)
        }
    };
    gL.O = [3];

    function hL(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function iL(a) {
        return pf(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function jL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function kL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function lL(a, b) {
        a = iL(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function mL(a) {
        var b = iL(a),
            c = jL(b.slice(0, 6));
        a = jL(b.slice(6, 12));
        var d = new gL;
        c = ri(d, 1, c);
        a = ri(c, 2, a);
        b = b.slice(12);
        c = jL(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let l = 0; l < c; l++) {
            if (e.length === 0) throw Error(`Found ${l} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = jL(e[0]) === 0;
            e = e.slice(1);
            var h = nL(e, b),
                k = d.length === 0 ? 0 : d[d.length - 1];
            k = kL(h) + k;
            e = e.slice(h.length);
            if (f) d.push(k);
            else {
                f = nL(e, b);
                h = kL(f);
                for (let m = 0; m <= h; m++) d.push(k + m);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Ph(a, 3, d, vg)
    }

    function nL(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var oL = class extends O {
        constructor() {
            super()
        }
    };
    var pL = class extends O {
        constructor() {
            super()
        }
    };
    var qL = class extends O {
        getVersion() {
            return hi(this, 1)
        }
    };
    var rL = class extends O {
        constructor() {
            super()
        }
    };

    function sL(a) {
        var b = new tL;
        return C(b, 1, a)
    }
    var tL = class extends O {
        constructor() {
            super()
        }
    };
    const uL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        vL = 6 + uL.reduce((a, b) => a + b);
    var wL = class extends O {
        constructor() {
            super()
        }
    };
    var xL = class extends O {
        getVersion() {
            return hi(this, 1)
        }
    };
    var yL = class extends O {
        constructor() {
            super()
        }
    };

    function zL(a) {
        var b = new AL;
        return C(b, 1, a)
    }
    var AL = class extends O {
        constructor() {
            super()
        }
    };
    const BL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        CL = 6 + BL.reduce((a, b) => a + b);
    var DL = class extends O {
        constructor() {
            super()
        }
    };
    var EL = class extends O {
        constructor() {
            super()
        }
    };
    var FL = class extends O {
        getVersion() {
            return hi(this, 1)
        }
    };
    var GL = class extends O {
        constructor() {
            super()
        }
    };

    function HL(a) {
        var b = new IL;
        return C(b, 1, a)
    }
    var IL = class extends O {
        constructor() {
            super()
        }
    };
    const JL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        KL = 6 + JL.reduce((a, b) => a + b);
    var LL = class extends O {
        constructor() {
            super()
        }
    };
    var ML = class extends O {
        constructor() {
            super()
        }
    };
    var NL = class extends O {
        getVersion() {
            return hi(this, 1)
        }
    };
    var OL = class extends O {
        constructor() {
            super()
        }
    };

    function PL(a) {
        var b = new QL;
        return C(b, 1, a)
    }
    var QL = class extends O {
        constructor() {
            super()
        }
    };
    const RL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        SL = 6 + RL.reduce((a, b) => a + b);
    var TL = class extends O {
        constructor() {
            super()
        }
    };
    var UL = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return hi(this, 1)
        }
    };
    const VL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        WL = 6 + VL.reduce((a, b) => a + b);

    function XL() {
        var a = new YL;
        return ti(a, 1, 0)
    }

    function ZL(a) {
        var b = Number;
        var c = yh(a, 1);
        c = c == null ? c : rg(c) ? typeof c === "string" ? Ag(c) : Bg(c) : void 0;
        b = b(c ? ? "0");
        a = hi(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var YL = class extends O {};
    var $L = "a".charCodeAt(),
        aM = oc(Fn),
        bM = oc(Gn);

    function cM(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function dM(a) {
        let b = cM(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!cM(a, 1) === !0,
                e = cM(a, 16);
            if (d)
                for (d = cM(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, h) => f - h);
        return c
    }

    function eM(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (cM(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function fM(a) {
        const b = cM(a, 16);
        return !!cM(a, 1) === !0 ? (a = dM(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : eM(a, b)
    }
    class gM {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var iM = a => {
        try {
            var b = pf(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new gM(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = cM(c, 12);
            b.cmpVersion = cM(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = cM(c, 6);
            b.isServiceSpecific = !!cM(c, 1);
            b.useNonStandardStacks = !!cM(c, 1);
            b.specialFeatureOptins = hM(eM(c, 12, bM), bM);
            b.purpose = {
                consents: hM(eM(c, 24, aM), aM),
                legitimateInterests: hM(eM(c, 24, aM), aM)
            };
            b.purposeOneTreatment = !!cM(c, 1);
            b.publisherCC = String.fromCharCode($L + cM(c, 6)) + String.fromCharCode($L +
                cM(c, 6));
            b.vendor = {
                consents: hM(fM(c), null),
                legitimateInterests: hM(fM(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const hM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var jM = class extends O {
        g() {
            return F(this, 2) != null
        }
    };
    var kM = class extends O {
        l() {
            return F(this, 2) != null
        }
    };
    var lM = class extends O {
        j() {
            return F(this, 1) != null
        }
    };
    var mM = class extends O {},
        nM = Ki(mM);
    mM.O = [7];

    function oM(a) {
        a = pM(a);
        try {
            var b = a ? nM(a) : null
        } catch (c) {
            b = null
        }
        return b ? z(b, lM, 4) || null : null
    }

    function pM(a) {
        a = (new kj(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function qM(a) {
        a.__tcfapiPostMessageReady || rM(new sM(a))
    }

    function rM(a) {
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
    var sM = class {
        constructor(a) {
            this.win = a
        }
    };

    function tM(a) {
        a.__uspapiPostMessageReady || uM(new vM(a))
    }

    function uM(a) {
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
    var vM = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    };
    var wM = class extends O {};
    var xM = class extends O {
            g() {
                return F(this, 1) != null
            }
        },
        yM = Ki(xM);
    xM.O = [2];

    function zM(a, b, c) {
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
            for (let w = 0; w < p.length / 2; w++) q.push(jL(p.slice(t, t + 2))), t += 2;
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
        a = iL(a[0]);
        const n = jL(a.slice(0, 6));
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

    function AM(a) {
        var b = U(yr);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new BM(a, b), CM(a), DM(a))
    }

    function CM(a) {
        !a.i || a.win.__uspapi || a.win.frames.__uspapiLocator || (a.win.__uspapiManager = "fc", vF(a.win, "__uspapiLocator"), Ka("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && d({
                version: 1,
                uspString: a.i
            }, !0)
        }, a.win), tM(a.win))
    }

    function DM(a) {
        !a.tcString || a.win.__tcfapi || a.win.frames.__tcfapiLocator || (a.win.__tcfapiManager = "fc", vF(a.win, "__tcfapiLocator"), a.win.__tcfapiEventListeners = a.win.__tcfapiEventListeners || [], Ka("__tcfapi", (b, c, d, e) => {
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
                            (e = iM(a.tcString), e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
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
        }, a.win), qM(a.win))
    }

    function EM(a, b) {
        if (!b ? .g() || L(b, 1).length === 0 || $h(b, wM, 2).length === 0) return null;
        const c = L(b, 1);
        let d;
        try {
            var e = mL(c.split("~")[0]);
            d = hL(c)
        } catch (f) {
            return null
        }
        b = $h(b, wM, 2).reduce((f, h) => ii(FM(f), 1) > ii(FM(h), 1) ? f : h);
        e = Hh(e, 3, wg).indexOf(hi(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: zM(d[e], hi(b, 1), a.j),
            we: ZL(FM(b))
        }
    }

    function GM(a) {
        a = a.find(b => b && ki(b, 1) === 13);
        if (a ? .g()) try {
            return yM(L(a, 2))
        } catch (b) {}
        return null
    }

    function FM(a) {
        return Dh(a, YL, 2) ? z(a, YL, 2) : XL()
    }
    var BM = class {
        constructor(a, b) {
            this.win = a;
            this.j = b;
            b = pM(this.win.document);
            try {
                var c = b ? nM(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = z(b, kM, 5) || null, b = $h(b, jM, 7), b = GM(b ? ? []), c = {
                Sf: c,
                mg: b
            }) : c = {
                Sf: null,
                mg: null
            };
            b = c;
            c = EM(this, b.mg);
            b = b.Sf;
            if (b ? .l() && L(b, 2).length !== 0) {
                var d = Dh(b, YL, 1) ? z(b, YL, 1) : XL();
                b = {
                    uspString: L(b, 2),
                    we: ZL(d)
                }
            } else b = null;
            this.i = b && c ? c.we > b.we ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.tcString = (c = oM(a.document)) && c.j() ? L(c, 1) : null;
            this.g = (a = oM(a.document)) && F(a, 2) != null ? L(a,
                2) : null
        }
    };

    function HM() {
        const a = Vb();
        return a ? Ya("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), b => Ub(a, b)) || Ub(a, "OMI/") && !Ub(a, "XiaoMi/") ? !0 : Ub(a, "Presto") && Ub(a, "Linux") && !Ub(a, "X11") && !Ub(a, "Android") && !Ub(a, "Mobi") : !1
    };

    function IM(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var JM = (a, b) => {
        a = IM(a);
        b = IM(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var KM = (a, b, c, d = null) => {
            const e = h => {
                let k;
                try {
                    k = JSON.parse(h.data)
                } catch (l) {
                    return
                }!k || k.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(h.data) && !d(k, h) || c(k, h)
            };
            Gb(a, "message", e);
            let f = !1;
            return () => {
                let h = !1;
                f || (f = !0, h = Hb(a, "message", e));
                return h
            }
        },
        LM = (a, b, c, d = null) => {
            const e = KM(a, b, xb(c, () => e()), d);
            return e
        },
        MM = (a, b, c, d, e) => {
            if (!(e <= 0) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) e > 1 && MM(a[f], b, c, d, --e)
        };

    function NM(a, b, c, d) {
        return KM(a, "fullscreen", d.Da(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    async function OM(a) {
        return a.A.promise
    }
    async function PM(a) {
        return a.j.promise
    }
    async function QM(a) {
        return a.l.promise
    }

    function RM(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.B.Pj;
        b.version = a.B.version;
        Gk(a.ta, "fullscreen_tag", b, !1, .25)
    }
    class SM extends Q {
        constructor(a, b, c) {
            var d = W,
                e = ew,
                f = {
                    Pj: 2,
                    version: tE()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.ue = c;
            this.Ia = d;
            this.ta = e;
            this.B = f;
            this.g = 1;
            this.qem = null;
            this.A = new OK;
            this.j = new OK;
            this.l = new OK
        }
        J() {
            const a = NM(this.pubWin, this.ue, b => {
                if (b.eventType === "adError") this.l.resolve(), this.g = 4;
                else if (b.eventType === "adReady" && this.g === 1) this.qem = b.qem, b.slotType !== this.slotType && (RM(this, {
                    cur_st: this.g,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.g = 4), this.A.resolve(), this.g = 2;
                else if (b.eventType ===
                    "adClosed" && this.g === 2) this.j.resolve(b.result), this.g = 3;
                else if (b.eventType !== "adClosed" || this.g !== 3) RM(this, {
                    cur_st: this.g,
                    evt: b.eventType
                }), this.g = 4
            }, this.Ia);
            so(this, a)
        }
    };
    var TM = Promise;
    class UM {
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
    class VM {
        constructor(a) {
            this.data = a
        }
    };

    function WM(a, b) {
        XM(a, b);
        return new YM(a)
    }
    class YM {
        constructor(a) {
            this.j = a
        }
        i(a, b, c = []) {
            const d = new MessageChannel;
            XM(d.port1, b);
            this.j.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new TM(c => {
                this.i(a, c, b)
            })
        }
    }

    function XM(a, b) {
        b && (a.onmessage = c => {
            b(new VM(c.data, WM(c.ports[0])))
        })
    };
    var ZM = class {
        constructor(a) {
            this.g = a
        }
    };
    const $M = a => {
        const b = Object.create(null);
        (typeof a === "string" ? [a] : a).forEach(c => {
            if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return c => b[c] === !0
    };
    var bN = ({
        destination: a,
        Na: b,
        origin: c,
        pe: d = "ZNWN1d",
        onMessage: e,
        Gg: f
    }) => aN({
        destination: a,
        Mi: () => b.contentWindow,
        qj: c instanceof ZM ? c : typeof c === "function" ? new ZM(c) : new ZM($M(c)),
        pe: d,
        onMessage: e,
        Gg: f
    });
    const aN = ({
        destination: a,
        Mi: b,
        qj: c,
        Do: d,
        pe: e,
        onMessage: f,
        Gg: h
    }) => new UM(new TM((k, l) => {
        const m = n => {
            n.source && n.source === b() && c.g(n.origin) && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(WM(n.ports[0], f)), h && h(n)))
        };
        a.addEventListener("message", m, !1)
    }));

    function cN(a, b, c, d, e, f, h = null) {
        if (e) {
            if (U(Pr)) var k = null;
            else try {
                k = e.getItem("google_ama_config")
            } catch (n) {
                k = null
            }
            try {
                var l = k ? Vq(k) : null
            } catch (n) {
                l = null
            }
        } else l = null;
        a: {
            if (d) try {
                var m = Vq(d);
                break a
            } catch (n) {
                eK(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            m = null
        }
        if (d = m) {
            if (e) {
                m = new hq;
                C(d, 3, m);
                l = d ? .g() ? .j() || 1;
                l = Date.now() + 864E5 * l;
                Number.isFinite(l) && si(m, 1, Math.round(l));
                m = rh(d);
                d.g() && (l = new gq, k = d ? .g() ? .g(), l = pi(l, 23, k), k = d ? .g() ? .l(), l = pi(l, 12, k), C(m, 15, l));
                l = $h(m, Hq, 1);
                for (k = 0; k < l.length; k++) Bh(l[k], 11);
                Bh(m, 22);
                if (U(Pr)) lK(a,
                    e);
                else try {
                    e.setItem("google_ama_config", Di(m))
                } catch (n) {
                    eK(a, {
                        lserr: 1
                    })
                }
            }
            e = jK(a, $h(d, qq, 7));
            m = {};
            U(Qr) || (m.zj = z(d, Bq, 8) || new Bq);
            e && (m.aa = e);
            e && iK(e, 3) && (m.sc = [1]);
            e = m;
            if (!U(ur) && c.google_pgb_reactive === 7 && !e.aa) return !1;
            NE(a, 2) && (xj(5, [Ei(d)]), c = fK(c), f = new VK(f), m = (m = e.aa) && F(m, 4) || "", c.google_package = m, oK(a, b, d, e, f, new Yp(["google-auto-placed"], c), h));
            return !0
        }
        l && (eK(a, {
            cfg: 1,
            cl: 1
        }), e != null && lK(a, e));
        return !1
    };

    function dN(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = be(a.g.da() || window);
        if (c.bottom <= 0 || c.bottom > d.height || c.right <= 0 || c.left >= d.width) return null;
        var e = eN(a, b, c, a.g.g.elementsFromPoint(Hd(c.left + c.width / 2, c.left, c.right - 1), Hd(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = eN(a, b, c, a.g.g.elementsFromPoint(Hd(c.left + c.width / 2, c.left, c.right - 1), Hd(c.top + 2, c.top, c.bottom - 1)), 2, e.ob),
            h = eN(a, b, c, a.g.g.elementsFromPoint(Hd(c.left + 2, c.left, c.right - 1), Hd(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ob, ...f.ob]);
        const k = eN(a, b, c, a.g.g.elementsFromPoint(Hd(c.right - 1 - 2, c.left, c.right - 1), Hd(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ob, ...f.ob, ...h.ob]);
        var l = fN(a, b, c),
            m = p => $a(a.j, p.ub) && $a(a.l, p.Kg) && $a(a.i, p.Lg);
        e = Va([...e.entries, ...f.entries, ...h.entries, ...k.entries], m);
        m = Va(l, m);
        l = [...e, ...m];
        f = c.left < -2 || c.right > d.width + 2;
        f = l.length > 0 || f;
        h = ce(a.g.g);
        const n = new Bj(c.left, c.top, c.width, c.height);
        e = [...Wa(e, p => new Bj(p.nc.left, p.nc.top, p.nc.width, p.nc.height)), ...nb(Wa(m,
            p => Dj(n, p.nc))), ...Va(Dj(n, new Bj(0, 0, d.width, d.height)), p => p.top >= 0 && p.top + p.height <= d.height)];
        return {
            entries: l,
            xg: f,
            Yg: {
                scrollX: h.x,
                scrollY: h.y
            },
            target: b,
            Xb: c,
            oh: {
                width: d.width,
                height: d.height
            },
            rj: e.length < 20 ? gN(n, e) : hN(c, e)
        }
    }

    function iN(a, b) {
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
                                    const m = new xk,
                                        n = wk(m, () => dN(a, l));
                                    n && (m.i.length && (n.Ci = Math.round(Number(m.i[0].duration))), k.disconnect(), e(n))
                                }, jN);
                                k.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function eN(a, b, c, d, e, f) {
        if (c.width === 0 || c.height === 0) return {
            entries: [],
            ob: []
        };
        const h = [],
            k = [];
        for (let n = 0; n < d.length; n++) {
            const p = d[n];
            if (p === b) continue;
            if ($a(f, p)) continue;
            k.push(p);
            const q = p.getBoundingClientRect();
            if (a.g.contains(p, b)) {
                h.push(kN(a, c, p, q, 1, e));
                continue
            }
            if (a.g.contains(b, p)) {
                h.push(kN(a, c, p, q, 2, e));
                continue
            }
            a: {
                var l = a;
                var m = b;
                const A = l.g.Hi(m, p);
                if (!A) {
                    l = null;
                    break a
                }
                const {
                    Ea: D,
                    Fb: G
                } = lN(l, m, A, p) || {},
                {
                    Ea: I,
                    Fb: B
                } = lN(l, p, A, m) || {};l = D && G && I && B ? G <= B ? {
                    Ea: D,
                    ub: mN[G]
                } : {
                    Ea: I,
                    ub: nN[B]
                } : D && G ? {
                    Ea: D,
                    ub: mN[G]
                } : I && B ? {
                    Ea: I,
                    ub: nN[B]
                } : null
            }
            const {
                Ea: t,
                ub: w
            } = l || {};
            t && w ? h.push(kN(a, c, p, q, w, e, t)) : h.push(kN(a, c, p, q, 9, e))
        }
        return {
            entries: h,
            ob: k
        }
    }

    function fN(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Ae(b, a.g.da());
                e && e.overflow !== "visible" && (e.overflowY !== "auto" && e.overflowY !== "scroll" && c.bottom > f.bottom + 2 ? d.push(kN(a, c, b, f, 5, 1)) : (e = e.overflowX === "auto" || e.overflowX === "scroll", !e && c.left < f.left - 2 ? d.push(kN(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(kN(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function gN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let h = 0; h < b.length && (!(d & 1 << h) || (f++, e = Cj(e, b[h]), e)); h++);
            e && (c = f % 2 === 1 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function hN(a, b) {
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

    function kN(a, b, c, d, e, f, h) {
        const k = {
            element: c,
            nc: d,
            ub: e,
            Lg: f
        };
        if ($a(a.j, e) && $a(a.i, f)) {
            b = new yj(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = oN(a, c)) && Aj(b, a)) c = 4;
            else {
                a = pN(c, d);
                e = Rj(c, "paddingLeft");
                f = Rj(c, "paddingRight");
                var l = Rj(c, "paddingTop"),
                    m = Rj(c, "paddingBottom");
                e = new yj(parseFloat(l), parseFloat(f), parseFloat(m), parseFloat(e));
                Aj(b, new yj(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = pN(c, d), c = Aj(b, c) ? 2 : 1)
            }
            k.Kg = c
        }
        h && (k.Ea = h);
        return k
    }

    function lN(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.da();
        for (f = 0; f < e.length; f++) {
            const k = e[f];
            var h = Ae(k, c);
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
                    const l = qN(a, e.slice(0, f), k);
                    if (h || l) return {
                        Ea: k,
                        Fb: 4
                    }
                }
            }
        }
        return (a = qN(a, e, b)) ? {
            Ea: a,
            Fb: 5
        } : null
    }

    function qN(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const h = f.getBoundingClientRect();
            if (!h) continue;
            const k = Ae(f, a.g.da());
            if (k && d.bottom > h.bottom + 2 && k.overflowY === "visible") return f
        }
        return null
    }

    function oN(a, b) {
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
        return a.width === 0 || a.height === 0 ? null : new yj(a.top, a.right, a.bottom, a.left)
    }

    function pN(a, b) {
        var c = Rj(a, "borderLeftWidth");
        var d = Rj(a, "borderRightWidth"),
            e = Rj(a, "borderTopWidth");
        a = Rj(a, "borderBottomWidth");
        c = new yj(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
        return new yj(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class rN {
        constructor(a) {
            var b = sN;
            this.g = Zd(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const mN = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        nN = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Va(De({
        Rl: 1,
        Sl: 2,
        In: 3,
        Jn: 4,
        Ln: 5,
        Nl: 6,
        Ol: 7,
        Ql: 8,
        Tm: 9,
        Kn: 10,
        Pl: 11,
        Hn: 12,
        Ml: 13
    }), a => !$a([1, 2], a));
    De({
        Zk: 1,
        Wm: 2,
        ml: 3,
        Mn: 4
    });
    const sN = De({
            al: 1,
            Pn: 2,
            Gm: 3,
            vn: 4
        }),
        jN = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function tN(a) {
        a.g != null || a.C || (a.g = new MutationObserver(b => {
            for (const c of b)
                for (const d of c.addedNodes) Ca(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && Ko(b.j, d))
        }), a.g.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var uN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new Lo;
            this.g = null;
            so(this, () => {
                this.g ? .disconnect();
                this.g = null
            })
        }
    };

    function vN(a, b) {
        b.addEventListener("click", () => {
            var c = a.g;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? Ap(Ol(4)) : d.startsWith("#") ? Ap(Ol(5)) : wN(d, c) : Cp("Empty href");
            if (c.g != null) {
                d = c.getValue();
                c = a.L;
                var e = new Ql;
                d = C(e, 1, d);
                c.call(a, d)
            } else a.i(c.i)
        })
    }
    var yN = class {
        constructor(a, b, c) {
            var d = xN();
            this.win = a;
            this.g = b;
            this.L = c;
            this.i = d
        }
        J() {
            const a = new uN(this.win);
            Array.from(a.win.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                vN(this, b)
            });
            tN(a);
            Io(a.j).listen(b => {
                vN(this, b)
            })
        }
    };

    function wN(a, b) {
        return zN(a, b).map(c => zN(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = Ol(2);
                e = Bi(e, 2, `${c.host}${c.pathname}`);
                d = Bi(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? Ol(3) : Ol(1);
            return d
        }))
    }

    function zN(a, b) {
        return Gp(Dp(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function AN(a) {
        if (a < 0 || !Number.isInteger(a)) return Cp(`Not a non-negative integer: ${a}`);
        const b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return Ap(b.reverse().join(""))
    };
    class BN {
        constructor() {
            this.xh = 5E3
        }
        ci() {
            return 5E3
        }
    }

    function CN(a, b) {
        return a.g ? Math.floor(b / 5E3) * 5E3 / a.g.xh : b
    }

    function DN(a, b) {
        b = b.map(c => CN(a, c));
        return EN(b, a.i === void 0 ? void 0 : CN(a, a.i)).map(c => {
            a: {
                var d = FN;
                const e = [];
                for (const f of c) {
                    c = d(f);
                    if (c.g == null) {
                        d = new Bp(null, c.i);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = Ap(e)
            }
            return d
        }).map(c => c.join(".")).map(c => GN(c, a.g ? .ci()))
    }
    var HN = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function FN(a) {
        const b = AN(a.value);
        if (b.g == null) return b;
        const c = b.getValue();
        return a.Rd === 1 ? Ap(`${c}`) : a.Rd === 2 ? Ap(`${c}${"~"}`) : Ip(AN(a.Rd - 2), d => {
            throw d;
        }).map(d => `${c}${"~"}${d}`)
    }

    function EN(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d] ? ? b;
            if (e === void 0) return Cp("Sparse but no default");
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                Rd: 1
            }) : c[c.length - 1].Rd++
        }
        return Ap(c)
    }

    function GN(a, b) {
        return a === "" ? Ap("") : IN(b).map(c => `${c}${a}`)
    }

    function IN(a) {
        return a === void 0 || a === 1 ? Ap("") : Hp(AN(a), "ComFactor: ").map(b => `${"~"}${b}${"."}`)
    };
    var JN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => {
                this.j.g(this.win.document.hasFocus())
            }
        }
        J() {
            this.win.addEventListener("focus", this.g);
            this.win.addEventListener("blur", this.g);
            so(this, () => void this.win.removeEventListener("focus", this.g));
            so(this, () => void this.win.removeEventListener("blur", this.g));
            this.j.g(this.win.document.hasFocus())
        }
    };

    function KN(a) {
        a.j.g(a.win.document.visibilityState === "visible")
    }
    var LN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => void KN(this)
        }
        J() {
            this.win.addEventListener("visibilitychange", this.g);
            so(this, () => void this.win.removeEventListener("visibilitychange", this.g));
            KN(this)
        }
    };

    function MN(a) {
        return a.g !== null ? a.i + a.j() - a.g : a.i
    }
    var ON = class {
        constructor(a) {
            this.win = a;
            this.j = NN(this.win);
            this.i = 0;
            this.g = null
        }
        start() {
            this.g === null && (this.g = this.j())
        }
    };

    function NN(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function PN(a) {
        a = new QN(a);
        a.J();
        return a
    }

    function RN(a) {
        const b = Wo(a.win, 1E3, () => void a.handleEvent());
        a.win.addEventListener("scroll", () => void b())
    }

    function SN(a) {
        const b = TN(a.win),
            c = () => {
                const d = TN(a.win),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.F = !0, a.win.removeEventListener("resize", c)
            };
        a.win.addEventListener("resize", c)
    }

    function UN(a) {
        a.l = !a.g.P;
        Do(a.g, !1, () => {
            a.win.setTimeout(() => {
                a.l = !0
            }, 100)
        })
    }

    function VN(a) {
        Co(a.g, !0, () => void a.j.start());
        Co(a.g, !1, () => {
            var b = a.j;
            b.g !== null && (b.i += b.j() - b.g);
            b.g = null
        });
        a.G.start()
    }

    function WN(a) {
        var b = a.win.scrollY;
        var c = Pn(a.win);
        b = {
            Vd: Math.floor(b / 100),
            cd: Math.floor((b + c) / 100),
            hh: a.win.performance.now()
        };
        if (b.Vd < 0 || b.cd < 0 || b.Vd > 1E3 || b.cd > 1E3) a.B = !0, a.i = null;
        else {
            if (a.i) {
                c = a.i;
                var d = new FC(c.Vd, c.cd),
                    e = new FC(b.Vd, b.cd);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new FC(f, d) : null)
                    for (c = b.hh - c.hh, d = f.start; d <= f.end; d++) a.C[d] = (a.C[d] ? ? 0) + c
            }
            a.i = a.A.P ? b : null
        }
    }
    var QN = class {
        constructor(a) {
            this.win = a;
            this.C = [];
            a = this.win;
            var b = new JN(a);
            b.J();
            b = zo(b.j);
            a = new LN(a);
            a.J();
            this.A = this.g = yo(b, zo(a.j));
            this.j = new ON(this.win);
            this.G = new ON(this.win);
            this.H = new HN((new HN(new BN)).g, 0);
            this.F = this.l = this.B = !1;
            this.i = null
        }
        J() {
            RN(this);
            SN(this);
            UN(this);
            VN(this);
            this.A.listen(() => void WN(this));
            u.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.A.P && WN(this)
        }
    };

    function TN(a) {
        return new Ld(On(a), Pn(a))
    };

    function XN(a, {
        Va: b
    }) {
        a = new YN(a, b);
        if (!a.Va && U(ws)) {
            b = a.win;
            var c = ZN($N(a));
            (new yN(b, b.document.baseURI, c)).J()
        }
        aO(a)
    }

    function aO(a) {
        if (U(xs)) {
            var b = PN(a.win);
            sn(new WE(a.win), bO(() => {
                var c = $N(a),
                    d = new Tl,
                    e = DN(b.H, b.C);
                if (e.g == null) throw Hp(e, "PVDC: ").i;
                var f = new Sl;
                f = ri(f, 2, 5E3);
                f = ri(f, 1, 100);
                e = e.getValue();
                e = Bi(f, 3, e);
                f = TN(b.win);
                var h = new Rl;
                h = ri(h, 1, f.width);
                f = ri(h, 2, f.height);
                e = C(e, 4, f);
                f = new Rl;
                f = ri(f, 1, Tn(b.win).scrollWidth);
                f = ri(f, 2, Tn(b.win).scrollHeight);
                e = C(e, 5, f);
                e = M(e, 6, b.l);
                f = Math.round(MN(b.G) / 1E3);
                e = ri(e, 8, f);
                f = Math.round(MN(b.j) / 1E3);
                e = ri(e, 9, f);
                b.B && Sh(e, 7, sg, 1);
                b.F && Sh(e, 7, sg, 2);
                d = E(d, 2, Ul, e);
                c(d)
            }))
        }
    }

    function $N(a) {
        if (!a.L) {
            const b = P(cF);
            a.L = c => {
                hF(b, c)
            }
        }
        return a.L
    }
    var YN = class {
        constructor(a, b) {
            this.win = a;
            this.Va = b;
            this.L = null
        }
    };

    function ZN(a) {
        return b => {
            var c = new Tl;
            b = E(c, 1, Ul, b);
            return void a(b)
        }
    }

    function xN() {
        return a => {
            W.ba(1243, a, void 0, cO("LCC"))
        }
    }

    function bO(a) {
        return () => void W.vb(1243, a, cO("PVC"))
    }

    function cO(a) {
        return b => {
            b.errSrc = a
        }
    };
    var eO = a => {
        const b = a.D;
        b.google_ad_output == null && (b.google_ad_output = "html");
        if (b.google_ad_client != null) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), c.substring(0, 3) != "ca-" && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        b.google_ad_slot != null && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!gj.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = dO(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = dO(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = dO(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = dO(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = dO(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = dO(a, b.google_color_line, c))
    };

    function dO(a, b, c) {
        a.i |= 2;
        return b[c % b.length]
    };
    const fO = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    var gO = (a, b = !1) => {
        try {
            return b ? (new Ld(a.innerWidth, a.innerHeight)).round() : be(a || window).round()
        } catch (c) {
            return new Ld(-12245933, -12245933)
        }
    };

    function hO(a = u) {
        a = a.devicePixelRatio;
        return typeof a === "number" ? +a.toFixed(3) : null
    }

    function iO(a, b = u) {
        a = a.scrollingElement || (a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return new Kd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function jO(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function kO(a, b) {
        var c = W,
            d;
        var e;
        d = (e = (e = Fj()) && (d = e.initialLayoutRect) && typeof d.top === "number" && typeof d.left === "number" && typeof d.width === "number" && typeof d.height === "number" ? new Bj(d.left, d.top, d.width, d.height) : null) ? new Kd(e.left, e.top) : (d = Ij()) && Ca(d.rootBounds) ? new Kd(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new Kd(0, 0),
                h = ae(b);
            var k = h ? de(h) : window;
            if (gc(k, "parent")) {
                do {
                    if (k == a) var l = Uj(b);
                    else {
                        var m = Tj(b);
                        l = new Kd(m.left,
                            m.top)
                    }
                    h = l;
                    f.x += h.x;
                    f.y += h.y
                } while (k && k != a && k != k.parent && (b = k.frameElement) && (k = k.parent))
            }
            return f
        } catch (n) {
            return c.ba(888, n), new Kd(-12245933, -12245933)
        }
    };

    function lO(a, b) {
        return pj(a.win) ? !!b.g() : !1
    }

    function mO(a, b, c) {
        c ? (a = a.win, b = c.g() ? rj(b, a) : null) : b = null;
        return b
    }

    function nO(a, b, c, d) {
        if (d) {
            var e = ii(c, 2) - Date.now() / 1E3;
            e = {
                Bd: Math.max(e, 0),
                path: L(c, 3),
                domain: L(c, 4),
                Sd: !1
            };
            c = c.getValue();
            a = a.win;
            d.g() && sj(b, c, e, a)
        }
    }

    function oO(a, b, c) {
        var d;
        (d = !c) || (d = a.win, d = !(c.g() && rj(b, d)));
        if (!d)
            for (const f of pO(a.win.location.hostname)) {
                d = b;
                var e = a.win;
                c.g() && e.origin !== "null" && lj(new kj(e.document), d, "/", f)
            }
    }
    var qO = class {
        constructor(a) {
            this.win = a
        }
    };

    function pO(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function rO(a, b, c) {
        var d = mO(a, "__gpi_opt_out", b);
        d && (d = Ai(si(Yi(d), 2, 2147483647), 3, "/"), c = Ai(d, 4, c), nO(a, "__gpi_opt_out", c, b))
    }

    function sO(a, b, c, d) {
        const e = KM(a, "gpi-uoo", (f, h) => {
            if (h.source === c) {
                h = Ai(si(Yi(f.userOptOut ? "1" : "0"), 2, 2147483647), 3, "/");
                h = Ai(h, 4, a.location.hostname);
                var k = new qO(a);
                nO(k, "__gpi_opt_out", h, b);
                if (f.userOptOut || f.clearAdsData) oO(k, "__gads", b), oO(k, "__gpi", b)
            }
        });
        d.push(e)
    };
    const tO = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        uO = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        vO = {
            yd: a => a.listener,
            Bc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Pb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        wO = {
            yd: a => a.listener,
            Bc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Pb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function xO(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            df: b.__gppReturn.callId
        }
    }

    function yO(a, b) {
        if (!a) return !1;
        const c = mL(a.split("~")[0]),
            d = hL(a),
            e = Hh(c, 3, wg);
        for (let ui = 0; ui < e.length; ++ui) {
            const kw = e[ui];
            if (!b.includes(kw)) continue;
            const qb = d[ui];
            switch (kw) {
                case 7:
                    if (qb.length === 0) throw Error("Cannot decode empty USNat section string.");
                    const cg = qb.split(".");
                    if (cg.length > 2) throw Error(`Expected at most 2 segments but got ${cg.length} when decoding ${qb}.`);
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
                        A = void 0,
                        D = void 0,
                        G = void 0,
                        I = void 0,
                        B = void 0,
                        J = void 0,
                        H = void 0,
                        aa = void 0,
                        bb = void 0,
                        xa = void 0,
                        fa = void 0,
                        la = void 0,
                        fb = void 0,
                        gb = void 0,
                        dg = void 0,
                        qa = void 0,
                        Md = void 0,
                        lw = void 0,
                        mw = void 0,
                        nw = void 0,
                        ow = cg[0];
                    if (ow.length === 0) throw Error("Cannot decode empty core segment string.");
                    let vi = lL(ow, SL);
                    const ym = jL(vi.slice(0, 6));
                    vi = vi.slice(6);
                    if (ym !== 1) throw Error(`Unable to decode unsupported USNat Section specification version ${ym} - only version 1 is supported.`);
                    let zm = 0;
                    const oa = [];
                    for (let ia = 0; ia < RL.length; ia++) {
                        const Y = RL[ia];
                        oa.push(jL(vi.slice(zm, zm + Y)));
                        zm += Y
                    }
                    var VR = new NL;
                    nw = ri(VR, 1, ym);
                    var WR = oa.shift();
                    mw = N(nw, 2, WR);
                    var YR = oa.shift();
                    lw = N(mw, 3, YR);
                    var ZR = oa.shift();
                    Md = N(lw, 4, ZR);
                    var $R = oa.shift();
                    qa = N(Md, 5, $R);
                    var aS = oa.shift();
                    dg = N(qa, 6, aS);
                    var bS = oa.shift();
                    gb = N(dg, 7, bS);
                    var cS = oa.shift();
                    fb = N(gb, 8, cS);
                    var dS = oa.shift();
                    la = N(fb, 9, dS);
                    var eS = oa.shift();
                    fa = N(la, 10, eS);
                    var fS = new ML,
                        gS = oa.shift();
                    xa = N(fS, 1, gS);
                    var hS = oa.shift();
                    bb = N(xa, 2, hS);
                    var iS = oa.shift();
                    aa = N(bb, 3, iS);
                    var jS = oa.shift();
                    H = N(aa, 4, jS);
                    var kS = oa.shift();
                    J = N(H, 5, kS);
                    var lS = oa.shift();
                    B = N(J, 6, lS);
                    var mS = oa.shift();
                    I = N(B, 7, mS);
                    var nS = oa.shift();
                    G = N(I, 8, nS);
                    var oS = oa.shift();
                    D = N(G, 9, oS);
                    var pS = oa.shift();
                    A = N(D, 10, pS);
                    var qS = oa.shift();
                    w = N(A, 11, qS);
                    var rS = oa.shift();
                    t = N(w, 12, rS);
                    q = C(fa, 11, t);
                    var sS = new LL,
                        tS = oa.shift();
                    p = N(sS, 1, tS);
                    var uS = oa.shift();
                    n = N(p, 2, uS);
                    m = C(q, 12, n);
                    var vS = oa.shift();
                    l = N(m, 13, vS);
                    var wS = oa.shift();
                    k = N(l, 14, wS);
                    var xS = oa.shift();
                    h = N(k, 15, xS);
                    var yS = oa.shift();
                    const pw = f = N(h, 16, yS);
                    if (cg.length === 1) var qw = PL(pw);
                    else {
                        var zS = PL(pw),
                            rw = void 0,
                            sw = void 0,
                            tw = void 0,
                            uw = cg[1];
                        if (uw.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ia = lL(uw, 3),
                            Y = jL(ia.slice(0, 2));
                        if (Y < 0 || Y > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Y}.`);
                        tw = Y + 1;
                        const Nd = jL(ia.charAt(2));
                        var AS = new OL;
                        sw = N(AS, 2, tw);
                        rw = M(sw, 1, !!Nd);
                        qw = C(zS, 2, rw)
                    }
                    const Am = z(qw, NL, 1);
                    if (ki(Am, 8) === 1 || ki(Am, 9) === 1 || ki(Am, 10) === 1) return !0;
                    break;
                case 8:
                    if (qb.length === 0) throw Error("Cannot decode empty USCA section string.");
                    const eg = qb.split(".");
                    if (eg.length > 2) throw Error(`Expected at most 1 sub-section but got ${eg.length-1} when decoding ${qb}.`);
                    var BS = void 0,
                        vw = void 0,
                        ww = void 0,
                        xw = void 0,
                        yw = void 0,
                        zw = void 0,
                        Aw = void 0,
                        Bw = void 0,
                        Cw = void 0,
                        Dw = void 0,
                        Ew = void 0,
                        Fw = void 0,
                        Gw = void 0,
                        Hw = void 0,
                        Iw = void 0,
                        Jw = void 0,
                        Kw = void 0,
                        Lw = void 0,
                        Mw = void 0,
                        Nw = void 0,
                        Ow = void 0,
                        Pw = void 0,
                        Qw = void 0,
                        Rw = eg[0];
                    if (Rw.length === 0) throw Error("Cannot decode empty core segment string.");
                    let wi = lL(Rw, vL);
                    const Bm = jL(wi.slice(0, 6));
                    wi = wi.slice(6);
                    if (Bm !== 1) throw Error(`Unable to decode unsupported USCA Section specification version ${Bm} - only version 1 is supported.`);
                    let Cm = 0;
                    const ya = [];
                    for (let ia = 0; ia < uL.length; ia++) {
                        const Y = uL[ia];
                        ya.push(jL(wi.slice(Cm, Cm + Y)));
                        Cm += Y
                    }
                    var CS = new qL;
                    Qw = ri(CS, 1, Bm);
                    var DS = ya.shift();
                    Pw = N(Qw, 2, DS);
                    var ES = ya.shift();
                    Ow = N(Pw, 3, ES);
                    var FS = ya.shift();
                    Nw = N(Ow, 4, FS);
                    var GS = ya.shift();
                    Mw = N(Nw, 5, GS);
                    var HS = ya.shift();
                    Lw = N(Mw, 6, HS);
                    var IS = new pL,
                        JS = ya.shift();
                    Kw = N(IS, 1, JS);
                    var KS = ya.shift();
                    Jw = N(Kw, 2, KS);
                    var LS = ya.shift();
                    Iw = N(Jw, 3, LS);
                    var MS = ya.shift();
                    Hw = N(Iw, 4, MS);
                    var NS = ya.shift();
                    Gw = N(Hw, 5, NS);
                    var OS = ya.shift();
                    Fw = N(Gw, 6, OS);
                    var PS =
                        ya.shift();
                    Ew = N(Fw, 7, PS);
                    var QS = ya.shift();
                    Dw = N(Ew, 8, QS);
                    var RS = ya.shift();
                    Cw = N(Dw, 9, RS);
                    Bw = C(Lw, 7, Cw);
                    var SS = new oL,
                        TS = ya.shift();
                    Aw = N(SS, 1, TS);
                    var US = ya.shift();
                    zw = N(Aw, 2, US);
                    yw = C(Bw, 8, zw);
                    var VS = ya.shift();
                    xw = N(yw, 9, VS);
                    var WS = ya.shift();
                    ww = N(xw, 10, WS);
                    var XS = ya.shift();
                    vw = N(ww, 11, XS);
                    var YS = ya.shift();
                    const Sw = BS = N(vw, 12, YS);
                    if (eg.length === 1) var Tw = sL(Sw);
                    else {
                        var ZS = sL(Sw),
                            Uw = void 0,
                            Vw = void 0,
                            Ww = void 0,
                            Xw = eg[1];
                        if (Xw.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ia =
                            lL(Xw, 3),
                            Y = jL(ia.slice(0, 2));
                        if (Y < 0 || Y > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Y}.`);
                        Ww = Y + 1;
                        const Nd = jL(ia.charAt(2));
                        var $S = new rL;
                        Vw = N($S, 2, Ww);
                        Uw = M(Vw, 1, !!Nd);
                        Tw = C(ZS, 2, Uw)
                    }
                    const Yw = z(Tw, qL, 1);
                    if (ki(Yw, 5) === 1 || ki(Yw, 6) === 1) return !0;
                    break;
                case 9:
                    if (qb.length === 0) throw Error("Cannot decode empty USVA section string.");
                    let xi = lL(qb, WL);
                    const Dm = jL(xi.slice(0, 6));
                    xi = xi.slice(6);
                    if (Dm !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${Dm} - only version 1 is supported.`);
                    let Em = 0;
                    const Ma = [];
                    for (let ia = 0; ia < VL.length; ia++) {
                        const Y = VL[ia];
                        Ma.push(jL(xi.slice(Em, Em + Y)));
                        Em += Y
                    }
                    var aT = Dm,
                        bT = new UL,
                        cT = ri(bT, 1, aT),
                        dT = Ma.shift(),
                        eT = N(cT, 2, dT),
                        fT = Ma.shift(),
                        gT = N(eT, 3, fT),
                        hT = Ma.shift(),
                        iT = N(gT, 4, hT),
                        jT = Ma.shift(),
                        kT = N(iT, 5, jT),
                        lT = Ma.shift();
                    var mT = N(kT, 6, lT);
                    var nT = new TL,
                        oT = Ma.shift(),
                        pT = N(nT, 1, oT),
                        qT = Ma.shift(),
                        rT = N(pT, 2, qT),
                        sT = Ma.shift(),
                        tT = N(rT, 3, sT),
                        uT = Ma.shift(),
                        vT = N(tT, 4, uT),
                        wT = Ma.shift(),
                        xT = N(vT, 5, wT),
                        yT = Ma.shift(),
                        zT = N(xT, 6, yT),
                        AT = Ma.shift(),
                        BT = N(zT, 7, AT),
                        CT = Ma.shift();
                    var DT = N(BT, 8, CT);
                    var ET = C(mT, 7, DT),
                        FT = Ma.shift(),
                        GT = N(ET, 8, FT),
                        HT = Ma.shift(),
                        IT = N(GT, 9, HT),
                        JT = Ma.shift(),
                        KT = N(IT, 10, JT),
                        LT = Ma.shift(),
                        Zw = N(KT, 11, LT);
                    if (ki(Zw, 5) === 1 || ki(Zw, 6) === 1) return !0;
                    break;
                case 10:
                    if (qb.length === 0) throw Error("Cannot decode empty USCO section string.");
                    const fg = qb.split(".");
                    if (fg.length > 2) throw Error(`Expected at most 2 segments but got ${fg.length} when decoding ${qb}.`);
                    var MT = void 0,
                        $w = void 0,
                        ax = void 0,
                        bx = void 0,
                        cx = void 0,
                        dx = void 0,
                        ex = void 0,
                        fx = void 0,
                        gx = void 0,
                        hx = void 0,
                        ix = void 0,
                        jx = void 0,
                        kx = void 0,
                        lx = void 0,
                        mx = void 0,
                        nx = void 0,
                        ox = void 0,
                        px = void 0,
                        qx = fg[0];
                    if (qx.length === 0) throw Error("Cannot decode empty core segment string.");
                    let yi = lL(qx, CL);
                    const Fm = jL(yi.slice(0, 6));
                    yi = yi.slice(6);
                    if (Fm !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${Fm} - only version 1 is supported.`);
                    let Gm = 0;
                    const Za = [];
                    for (let ia = 0; ia < BL.length; ia++) {
                        const Y = BL[ia];
                        Za.push(jL(yi.slice(Gm, Gm + Y)));
                        Gm += Y
                    }
                    var NT = new xL;
                    px = ri(NT, 1, Fm);
                    var OT = Za.shift();
                    ox =
                        N(px, 2, OT);
                    var PT = Za.shift();
                    nx = N(ox, 3, PT);
                    var QT = Za.shift();
                    mx = N(nx, 4, QT);
                    var RT = Za.shift();
                    lx = N(mx, 5, RT);
                    var ST = Za.shift();
                    kx = N(lx, 6, ST);
                    var TT = new wL,
                        UT = Za.shift();
                    jx = N(TT, 1, UT);
                    var VT = Za.shift();
                    ix = N(jx, 2, VT);
                    var WT = Za.shift();
                    hx = N(ix, 3, WT);
                    var XT = Za.shift();
                    gx = N(hx, 4, XT);
                    var YT = Za.shift();
                    fx = N(gx, 5, YT);
                    var ZT = Za.shift();
                    ex = N(fx, 6, ZT);
                    var $T = Za.shift();
                    dx = N(ex, 7, $T);
                    cx = C(kx, 7, dx);
                    var aU = Za.shift();
                    bx = N(cx, 8, aU);
                    var bU = Za.shift();
                    ax = N(bx, 9, bU);
                    var cU = Za.shift();
                    $w = N(ax, 10, cU);
                    var dU = Za.shift();
                    const rx = MT = N($w, 11, dU);
                    if (fg.length === 1) var sx = zL(rx);
                    else {
                        var eU = zL(rx),
                            tx = void 0,
                            ux = void 0,
                            vx = void 0,
                            wx = fg[1];
                        if (wx.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ia = lL(wx, 3),
                            Y = jL(ia.slice(0, 2));
                        if (Y < 0 || Y > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Y}.`);
                        vx = Y + 1;
                        const Nd = jL(ia.charAt(2));
                        var fU = new yL;
                        ux = N(fU, 2, vx);
                        tx = M(ux, 1, !!Nd);
                        sx = C(eU, 2, tx)
                    }
                    const xx = z(sx, xL, 1);
                    if (ki(xx, 5) === 1 || ki(xx, 6) === 1) return !0;
                    break;
                case 12:
                    if (qb.length === 0) throw Error("Cannot decode empty usct section string.");
                    const gg = qb.split(".");
                    if (gg.length > 2) throw Error(`Expected at most 2 segments but got ${gg.length} when decoding ${qb}.`);
                    var gU = void 0,
                        yx = void 0,
                        zx = void 0,
                        Ax = void 0,
                        Bx = void 0,
                        Cx = void 0,
                        Dx = void 0,
                        Ex = void 0,
                        Fx = void 0,
                        Gx = void 0,
                        Hx = void 0,
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
                        Tx = gg[0];
                    if (Tx.length === 0) throw Error("Cannot decode empty core segment string.");
                    let zi = lL(Tx, KL);
                    const Hm = jL(zi.slice(0, 6));
                    zi = zi.slice(6);
                    if (Hm !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${Hm} - only version 1 is supported.`);
                    let Im = 0;
                    const Ba = [];
                    for (let ia = 0; ia < JL.length; ia++) {
                        const Y = JL[ia];
                        Ba.push(jL(zi.slice(Im, Im + Y)));
                        Im += Y
                    }
                    var hU = new FL;
                    Sx = ri(hU, 1, Hm);
                    var iU = Ba.shift();
                    Rx = N(Sx, 2, iU);
                    var jU = Ba.shift();
                    Qx = N(Rx, 3, jU);
                    var kU = Ba.shift();
                    Px = N(Qx, 4, kU);
                    var lU = Ba.shift();
                    Ox = N(Px, 5, lU);
                    var mU = Ba.shift();
                    Nx = N(Ox, 6, mU);
                    var nU = new EL,
                        oU = Ba.shift();
                    Mx = N(nU, 1, oU);
                    var pU = Ba.shift();
                    Lx = N(Mx, 2, pU);
                    var qU = Ba.shift();
                    Kx = N(Lx, 3, qU);
                    var rU = Ba.shift();
                    Jx = N(Kx, 4, rU);
                    var sU = Ba.shift();
                    Ix = N(Jx, 5, sU);
                    var tU = Ba.shift();
                    Hx = N(Ix, 6, tU);
                    var uU =
                        Ba.shift();
                    Gx = N(Hx, 7, uU);
                    var vU = Ba.shift();
                    Fx = N(Gx, 8, vU);
                    Ex = C(Nx, 7, Fx);
                    var wU = new DL,
                        xU = Ba.shift();
                    Dx = N(wU, 1, xU);
                    var yU = Ba.shift();
                    Cx = N(Dx, 2, yU);
                    var zU = Ba.shift();
                    Bx = N(Cx, 3, zU);
                    Ax = C(Ex, 8, Bx);
                    var AU = Ba.shift();
                    zx = N(Ax, 9, AU);
                    var BU = Ba.shift();
                    yx = N(zx, 10, BU);
                    var CU = Ba.shift();
                    const Ux = gU = N(yx, 11, CU);
                    if (gg.length === 1) var Vx = HL(Ux);
                    else {
                        var DU = HL(Ux),
                            Wx = void 0,
                            Xx = void 0,
                            Yx = void 0,
                            Zx = gg[1];
                        if (Zx.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ia = lL(Zx, 3),
                            Y = jL(ia.slice(0, 2));
                        if (Y <
                            0 || Y > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Y}.`);
                        Yx = Y + 1;
                        const Nd = jL(ia.charAt(2));
                        var EU = new GL;
                        Xx = N(EU, 2, Yx);
                        Wx = M(Xx, 1, !!Nd);
                        Vx = C(DU, 2, Wx)
                    }
                    const $x = z(Vx, FL, 1);
                    if (ki($x, 5) === 1 || ki($x, 6) === 1) return !0
            }
        }
        return !1
    }
    var CO = class extends Q {
        constructor(a) {
            ({
                timeoutMs: c,
                cmpInteractionEventReporter: b
            } = {});
            var b, c;
            super();
            this.caller = new AF(a, "__gppLocator", d => typeof d.__gpp === "function", xO);
            this.caller.B.set("addEventListener", tO);
            this.caller.A.set("addEventListener", vO);
            this.caller.B.set("removeEventListener", uO);
            this.caller.A.set("removeEventListener", wO);
            this.timeoutMs = c ? ? 500;
            this.cmpInteractionEventReporter = b
        }
        i() {
            this.caller.dispose();
            super.i()
        }
        addEventListener(a) {
            const b = Ab(() => {
                    a(zO, !0)
                }),
                c = this.timeoutMs ===
                -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            zF(this.caller, "addEventListener", {
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
                            a(AO, !0);
                            return
                        }
                        a(BO, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            zF(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const BO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        zO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        AO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function DO(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function EO(a, b) {
        if (b.internalErrorState) Ai(a, 11, b.gppString);
        else if (DO(b.applicableSections)) {
            var c = Ph(a, 10, b.applicableSections, zg);
            pi(c, 12, !1)
        } else {
            c = !1;
            try {
                c = yO(b.gppString, b.applicableSections)
            } catch (d) {
                W.ba(1182, d, void 0, void 0)
            }
            a = Ph(a, 10, b.applicableSections, zg);
            b = Ai(a, 11, b.gppString);
            pi(b, 12, c)
        }
    }

    function FO(a) {
        const b = new CO(a.pubWin);
        if (!xF(b.caller)) return Promise.resolve(null);
        const c = xE(),
            d = CE(c, 35);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const h = CE(c, 36, []);
            h.push(f);
            DE(c, 36, h)
        });
        d || d === null || (DE(c, 35, null), b.addEventListener(f => {
            if (f.pingData.signalStatus === "ready" || DO(f.pingData.applicableSections)) {
                f = f.pingData;
                DE(c, 35, f);
                EO(a.g, f);
                for (const h of CE(c, 36, [])) h.resolve(f);
                DE(c, 36, [])
            }
        }));
        return e
    };

    function GO(a) {
        return a.length ? a.join("~") : void 0
    };

    function HO(a, b) {
        return lC({
            K: a,
            hj: 3E3,
            oj: a.innerWidth > Mn ? 650 : 0,
            ta: ew,
            Wh: b
        })
    };

    function IO(a) {
        let b = 0;
        try {
            b |= Nn(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function JO(a) {
        let b = 0;
        try {
            b |= Nn(a), b |= Qn(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function KO(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function LO(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function MO(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function NO(a, b) {
        if (KO(b) == 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                Hb(b, "prerenderingchange", d);
                a()
            };
            Gb(b, "prerenderingchange", d)
        }
    };
    var OO = a => {
        let b = 0;
        try {
            b |= Nn(a);
            var c;
            if (!(c = !a.navigator)) {
                var d = a.navigator;
                c = "brave" in d && "isBrave" in d.brave || !1
            }
            b |= c || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            b |= Qn(a, 2500, !0)
        } catch (e) {
            b |= 32
        }
        return b
    };
    const PO = "body div footer header html main section".split(" ");

    function QO(a, b, c = null, d = !1, e = !1) {
        let f = Nn(a);
        mC(a.navigator ? .userAgent) && (f |= 1048576);
        const h = a.innerWidth;
        h < 1200 && (f |= 65536);
        const k = a.innerHeight;
        k < 650 && (f |= 2097152);
        c && f === 0 && (c = c === 3 ? "left" : "right", (b = RO({
            K: a,
            bj: b,
            Mj: 1,
            position: c,
            V: h,
            W: k,
            Gb: new Set,
            minWidth: 120,
            minHeight: 500,
            Me: d,
            cf: e
        })) ? Uz(a).sideRailPlasParam.set(c, `${b.width}x${b.height}_${String(c).charAt(0)}`) : f |= 16);
        return f
    }

    function SO(a) {
        a = Uz(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function TO(a, b) {
        return me(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function UO(a, b) {
        return me(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function VO(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function WO(a, b) {
        const {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function XO(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function YO(a) {
        return `${a.position}-${XO(a.V)}x${XO(a.W)}-${XO(a.scrollY+a.Sb)}Y`
    }

    function ZO(a) {
        return `f-${YO({position:a.position,Sb:a.Sb,scrollY:0,V:a.V,W:a.W})}`
    }

    function $O(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function aP(a, b, c) {
        const d = Uz(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    h = Math.min(e.bottom + 10, c.W),
                    k = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.V);
                for (var l = c.V * .3; f <= h; f += 10) {
                    if (e > 0 && k < l) {
                        var m = ZO({
                            position: "left",
                            Sb: f,
                            V: c.V,
                            W: c.W
                        });
                        b.set(m, $O(b.get(m), k))
                    }
                    if (k < c.V && e > c.V - l) {
                        m = ZO({
                            position: "right",
                            Sb: f,
                            V: c.V,
                            W: c.W
                        });
                        const n = c.V - e;
                        b.set(m, $O(b.get(m), n))
                    }
                }
                d.add(a)
            }
        }
    }

    function bP(a, b) {
        const c = b.K,
            d = b.Me;
        var e = `f-${XO(b.V)}x${XO(b.W)}`;
        a.has(e) || (a.set(e, 0), e = VO(c), d ? (cP(a, b, e.filter(f => WO(c, f))), dP(c, e.filter(f => !WO(c, f)))) : cP(a, b, e))
    }

    function cP(a, b, c) {
        var d = b.Gb;
        const e = b.K;
        Uz(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c) TO(f, d) || aP(f, a, b)
    }

    function eP(a) {
        if (a.V < 1200 || a.W < 650) return null;
        var b = Uz(a.K).sideRailAvailableSpace;
        a.bj || bP(b, {
            K: a.K,
            V: a.V,
            W: a.W,
            Gb: a.Gb,
            Me: a.Me
        });
        const c = [];
        var d = a.W * .9,
            e = Xn(a.K),
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
                        V: a.V,
                        W: a.W,
                        Gb: a.Gb,
                        cf: a.cf
                    };
                const I = ZO({
                        position: q,
                        Sb: p,
                        V: w.V,
                        W: w.W
                    }),
                    B = YO({
                        position: q,
                        Sb: p,
                        scrollY: e,
                        V: w.V,
                        W: w.W
                    });
                if (t.has(B)) {
                    p = $O(t.get(I), t.get(B));
                    break a
                }
                const J = q === "left" ? 20 : w.V - 20;
                let H = J;q = w.V * .3 / 5 * (q === "left" ? 1 : -1);
                for (let aa =
                        0; aa < 6; aa++) {
                    var A = fC(w.K.document, {
                            x: Math.round(H),
                            y: Math.round(p)
                        }),
                        D = TO(A, w.Gb),
                        G = UO(A, w.K);
                    if (!D && G !== null) {
                        aP(G, t, w);
                        t.delete(B);
                        break
                    }
                    D || (D = w, A.getAttribute("google-side-rail-overlap") === "true" ? D = !0 : A.getAttribute("google-side-rail-overlap") === "false" || D.cf && !PO.includes(A.tagName.toLowerCase()) ? D = !1 : (G = A.offsetHeight >= D.W * .25, D = A.offsetWidth >= D.V * .9 && G));
                    if (D) t.set(B, Math.round(Math.abs(H - J) + 20));
                    else if (H !== J) H -= q, q /= 2;
                    else {
                        t.set(B, 0);
                        break
                    }
                    H += q
                }
                p = $O(t.get(I), t.get(B))
            }
            n.call(m, p);
            h += k
        }
        b =
            a.Mj;
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

    function dP(a, b) {
        const c = Uz(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    fP(a);
                    for (const e of c.i) e()
                }, 500)
            });
            for (const e of b) d.observe(e, {
                attributes: !0
            });
            c.g = d
        }
    }

    function fP(a) {
        ({
            sideRailAvailableSpace: a
        } = Uz(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b) a.delete(c)
    }

    function RO(a) {
        if (a.Ia) return a.Ia.vb(1228, () => eP(a)) || null;
        try {
            return eP(a)
        } catch {}
        return null
    };
    const gP = {
        [27]: 512,
        [26]: 128
    };
    var hP = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return HO(a, c) === 0;
                case 3:
                case 4:
                    return QO(a, !1, c, !0, U(ts)) === 0;
                case 8:
                    return OO(a) == 0;
                case 9:
                    return b = !(b.google_adtest === "on" || ZK(a.location, "google_scr_debug")), !fH(a, b, d);
                case 30:
                    return WI(a) == 0;
                case 26:
                    return JO(a) === 0;
                case 27:
                    return IO(a) === 0;
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        iP = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return HO(a, c);
                case 3:
                case 4:
                    return QO(a, U(us), c, !1, U(ts));
                case 8:
                    return OO(a);
                case 9:
                    return fH(a, !(b.google_adtest === "on" || ZK(a.location, "google_scr_debug")), d);
                case 16:
                    return fu(b, a) ? 0 : 8388608;
                case 30:
                    return WI(a);
                case 26:
                    return JO(a);
                case 27:
                    return IO(a);
                default:
                    return 32
            }
        },
        jP = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!mc(d)) return !1;
            a = xe(a);
            if (!a || !hP(a, b, d, c)) return !1;
            b = Uz(a);
            if (Un(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        lP = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && kP(a) && b !== 16 && b !== 10 && b !== 11 && b !== 40 && b !== 41
        },
        mP = a => {
            if (!a.hash) return null;
            let b = null;
            Ce(WK, c => {
                !b && ZK(a, c) && (b = XK[c])
            });
            return b
        },
        oP = (a, b) => {
            const c = Uz(a).tagSpecificState[1] || null;
            c != null && c.debugCard == null && Ce(YK, d => {
                !c.debugCardRequested && typeof d === "number" && bL(d, a.location) && (c.debugCardRequested = !0, nP(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        qP = (a, b, c) => {
            if (!b) return null;
            const d = Uz(b);
            let e = 0;
            Ce(nc, f => {
                const h = gP[f];
                h && pP(a, b, f, c) === 0 && (e |= h)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        rP = (a, b, c) => {
            const d = [];
            Ce(nc, e => {
                const f = pP(b, a, e, c);
                f !== 0 && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        sP = a => {
            const b = [],
                c = {};
            Ce(a, (d, e) => {
                if ((e = Kn[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        tP = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return typeof a === "boolean" ? a ? "1" : "0" : ""
        },
        pP = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = Uz(b),
                h = Un(f, c);
            if (a.google_reactive_ad_format == c || h) e |= 64;
            let k = !1;
            Ce(f.reactiveTypeDisabledByPublisher, (l, m) => {
                String(c) ===
                    String(m) && (k = !0)
            });
            return k && mP(b.location) !== c && (e |= 128, c == 2 || c == 1 || c == 3 || c == 4 || c == 8) ? e : e | iP(b, a, c, d)
        },
        uP = (a, b) => {
            if (a) {
                var c = Uz(a),
                    d = {};
                Ce(b, (e, f) => {
                    (f = Kn[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                Ce(nc, e => {
                    d[Ln[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        vP = (a, b, c) => {
            b = W.Da(b, c);
            return UK(3, window, a).Qc.then(b)
        },
        nP = (a, b, c) => {
            c = W.Da(212, c);
            UK(4, a, b).Qc.then(c)
        },
        wP = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "reserved";
            a.className += " adsbygoogle-noablate";
            c.adsbygoogle || (c.adsbygoogle = [],
                ye(c.document, Bd `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        xP = a => {
            a = a.google_reactive_ad_format;
            return mc(a) ? "" + a : null
        },
        kP = a => !!xP(a) || a.google_pgb_reactive != null,
        yP = a => {
            a = xP(a);
            return a == 26 || a == 27 || a == 30 || a == 16 || a == 40 || a == 41
        };

    function zP(a) {
        return typeof a.google_reactive_sra_index === "number"
    }

    function AP(a, b, c) {
        const d = b.K || b.pubWin,
            e = b.D;
        var f = rP(d, e, c);
        e.google_reactive_plat = f;
        (f = sP(a)) && (e.google_reactive_plaf = f);
        (f = tP(a)) && (e.google_reactive_fba = f);
        (f = SO(d)) && (e.google_plas = f);
        BP(a, e);
        f = mP(b.pubWin.location);
        CP(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        e.easpi = U(ct);
        e.asro = U($s);
        e.aihb = U(ys);
        e.ailel = GO(Wt(Ss));
        e.aiael = GO(Wt(zs));
        e.aifxl = GO(Wt(Ns));
        e.aiixl = GO(Wt(Ps));
        U(Qs) && (e.slmct = V(Ts), e.samct = V(Cs));
        U(Js) || (e.aiict = !0, e.aicel = GO(Wt(Hs)));
        U(Xs) && (e.aipaq = !0);
        U(bt) && (e.aigda = !0);
        V(As) && (e.aiapm = V(As));
        V(Bs) && (e.aiapmi = V(Bs));
        U(Ys) && (e.aiombap = !0);
        e.fsapi = !0;
        f !== 8 && (c && bH(c) ? (f = eH(c, 86400, "__lsv__"), f ? .length && (f = Math.floor((Date.now() - Math.max(...f)) / 6E4), f >= 0 && (e.vmsli = f))) : e.vmsli = -1);
        f = eH(c, 600, "__lsa__");
        f ? .length && Math.floor((Date.now() - Math.max(...f)) / 6E4) <= V(vr) && (e.dap = 3);
        Jj() || gO(b.pubWin.top);
        f = LM(b.pubWin, "rsrai", hw(429, (h, k) => DP(b, d, e.google_ad_client, a, h, k, c)), hw(430, (h, k) => $n(b.pubWin, "431", ew, k)));
        b.j.push(f);
        Uz(d).wasReactiveTagRequestSent = !0;
        EP(b, a, c)
    }

    function EP(a, b, c) {
        const d = a.D,
            e = Ca(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = LM(a.pubWin, "apcnf", hw(353, (f, h) => {
            const k = wc(a.xa.jb, SK());
            var l = a.pubWin,
                m = d.google_ad_client;
            return Ze(h.origin) ? cN(l, m, e, f.config, c, k, null) : !1
        }), hw(353, (f, h) => $n(a.pubWin, "353", ew, h)));
        a.j.push(b)
    }

    function DP(a, b, c, d, e, f, h) {
        if (!Ze(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!NE(b, 1)) return !0;
        f && xj(6, [f]);
        e = e.amaConfig;
        const k = [],
            l = [],
            m = Uz(b);
        let n = null;
        for (let p = 0; p < f.length; p++) {
            if (!f[p]) continue;
            const q = f[p],
                t = q.adFormat;
            m && q.enabledInAsfe && (m.reactiveTypeEnabledInAsfe[t] = !0);
            if (!q.noCreative) {
                q.google_reactive_sra_index = p;
                if (t === 9 && e) {
                    q.pubVars = Object.assign(q.pubVars || {}, FP(d, q));
                    const w = new gH;
                    if ($G(w, q) && w.B(q)) {
                        n = w;
                        continue
                    }
                }
                k.push(q);
                l.push(t)
            }
        }
        k.length && vP(a.xa.Tg,
            522, p => {
                GP(k, b, p, d, h)
            });
        e && cN(b, c, d, e, h, a.xa.jb, n);
        return !0
    }

    function FP(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        Ca(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function GP(a, b, c, d, e) {
        const f = [];
        for (let h = 0; h < a.length; h++) {
            const k = a[h],
                l = k.adFormat,
                m = k.adKey,
                n = c.configProcessorForAdFormat(l);
            l && n && m && (k.pubVars = FP(d, k), delete k.google_reactive_sra_index, f.push(l), gw(466, () => n.verifyAndProcessConfig(b, k, e)))
        }
    }

    function BP(a, b) {
        const c = [];
        let d = !1;
        Ce(Kn, (e, f) => {
            let h;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (h = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = h ? h.replace(/,/g, "+") : "+", d || (d = !!h))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function CP(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    fc("script");
    var HP = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function IP(a, b) {
        if (!fu(b, a)) return () => {};
        a = JP(b, a);
        if (!a) return () => {};
        const c = JE();
        b = pc(b);
        const d = {
            wb: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => ab(c, d)
    }

    function JP(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !ku.test(a.className);) a = a.parentElement;
        return a
    }

    function KP(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const h = {},
                k = a.childNodes[f];
            var c = k.style,
                d = ["width", "height"];
            for (let l = 0; l < d.length; l++) {
                const m = "google_ad_" + d[l];
                if (!h.hasOwnProperty(m)) {
                    var e = Ke(c[d[l]]);
                    e = e === null ? null : Math.round(e);
                    e != null && (h[m] = e)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function LP(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function MP(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.g != c) {
            a.g = c;
            a = JE();
            for (const d of a)
                if (d.wb.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.wb.offsetWidth, gw(467, () => {
                    var e = d.wb,
                        f = d.D;
                    const h = KP(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? `${f.gfwroh}px` : "", e.style.width = f.gfwrow ? `${f.gfwrow}px` : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const k = KP(e, f);
                    !k && h && e.childNodes.length == 1 ? (LP(h, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", wP(e, f, b)) : k && h && k != h && (LP(h, !1), LP(k, !0))
                })
        }
    }
    var NP = class extends Q {
        constructor() {
            super(...arguments);
            this.g = null
        }
        J(a) {
            const b = xE();
            if (!CE(b, 27, !1)) {
                DE(b, 27, !0);
                this.g = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    MP(this, a)
                };
                Gb(a, "resize", c);
                so(this, () => {
                    Hb(a, "resize", c)
                })
            }
        }
    };
    var OP = class {
        constructor(a, b) {
            this.K = a;
            this.wb = b;
            this.g = null;
            this.j = 0
        }
        i() {
            ++this.j >= 10 && u.clearInterval(this.g);
            var a = iu(this.K, this.wb);
            ju(this.K, this.wb, a);
            a = eu(this.wb, this.K);
            a != null && a.x === 0 || u.clearInterval(this.g)
        }
    };

    function PP(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function QP(a, b) {
        b && !a.g && (b = b.split(":"), a.g = b.find(c => c.indexOf("ID=") === 0) || null, a.j = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null)
    }
    var RP = class {
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
                        b = b !== null ? Ee(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
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
        SP;
    var TP = class extends O {
        g() {
            return K(this, 10)
        }
    };
    var UP = class extends O {
        g() {
            return Hh(this, 1, Pg)
        }
    };
    UP.O = [1];
    var VP = class extends O {};
    VP.O = [19];
    var WP = [13, 14];
    let XP = void 0;

    function YP() {
        Gi(XP, Ji);
        return XP
    }

    function ZP(a) {
        Gi(XP, Jk);
        XP = a
    };

    function $P(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : lc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function aQ(a = u) {
        return a.ggeac || (a.ggeac = {})
    };

    function bQ(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function cQ(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function dQ(a = navigator) {
        try {
            return !!a.protectedAudience ? .queryFeatureSupport ? .("deprecatedRenderURLReplacements")
        } catch (b) {
            return !1
        }
    };

    function eQ(a = Be()) {
        return b => Ee(`${b} + ${a}`) % 1E3
    };

    function fQ(a, b) {
        a.g = vn(14, b, () => {})
    }
    class gQ {
        constructor() {
            this.g = () => {}
        }
    }

    function hQ(a) {
        P(gQ).g(a)
    };

    function iQ(a = aQ()) {
        wn(P(xn), a);
        jQ(a);
        fQ(P(gQ), a);
        P(Ut).i()
    }

    function jQ(a) {
        const b = P(Ut);
        b.j = (c, d) => vn(5, a, () => !1)(c, d, 1);
        b.A = (c, d) => vn(6, a, () => 0)(c, d, 1);
        b.C = (c, d) => vn(7, a, () => "")(c, d, 1);
        b.g = (c, d) => vn(8, a, () => [])(c, d, 1);
        b.l = (c, d) => vn(17, a, () => [])(c, d, 1);
        b.i = () => {
            vn(15, a, () => {})(1)
        }
    };

    function kQ(a, b, c) {
        var d = {
            [0]: eQ(cf(b).toString())
        };
        if (c) {
            c = mO(new qO(b), "__gads", c) || "";
            SP || (SP = new RP);
            b = SP;
            QP(b, c);
            hQ(b.i);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? eQ(e)(f) : void 0
        }
        d = yn(a, d);
        Cn.na(1085, eF(P(cF), a, d))
    }

    function lQ(a, b) {
        kQ(20, a, b);
        kQ(17, a, b)
    }

    function mQ(a) {
        const b = P(xn).g();
        a = PP(a);
        return b.concat(a).join(",")
    }

    function nQ(a) {
        const b = nk();
        b && (a.debug_experiment_id = b)
    };
    var oQ = class {
        constructor(a) {
            this.i = 0;
            this.g = this.I = null;
            this.H = 0;
            this.j = [];
            this.qc = this.B = "";
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

    function pQ(a, b, c) {
        c = GK(a, KF(b, {
            idpcApplies: c && !HM()
        }));
        c = Ai(c, 2, b.tcString);
        c = Ai(c, 4, b.addtlConsent || "");
        Bh(c, 7, tg(b.internalErrorState));
        c = !NF(b, ["2", "7", "9", "10"], 3);
        pi(a, 8, c);
        c = !NF(b, ["3", "4"], 0);
        pi(a, 9, c);
        b.gdprApplies != null && pi(a, 3, b.gdprApplies)
    }

    function qQ(a) {
        const b = new TF(a.pubWin, {
            timeoutMs: -1,
            Oh: !0
        });
        if (!PF(b)) return Promise.resolve(null);
        const c = xE(),
            d = CE(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const h = CE(c, 25, []);
            h.push(f);
            DE(c, 25, h)
        });
        d || d === null || (DE(c, 24, null), b.addEventListener(f => {
            if (JF(f)) {
                DE(c, 24, f);
                pQ(a.g, f, K(a.ma, 6));
                for (const h of CE(c, 25, [])) h.resolve(f);
                DE(c, 25, [])
            } else DE(c, 24, null)
        }));
        return e
    };

    function rQ(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    var Lk = {
        Xn: 0,
        Tn: 1,
        Un: 9,
        Qn: 2,
        Rn: 3,
        Wn: 5,
        Vn: 7,
        Sn: 10
    };
    var sQ = class extends O {},
        tQ = Ki(sQ),
        uQ = [1, 3];
    const vQ = Bd `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function wQ(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(k) {
                return h.g(k).then(({
                    data: l
                }) => l)
            }
            const e = ze("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = yc(vQ).toString();
            const f = (new URL(vQ.toString())).origin,
                h = bN({
                    destination: a,
                    Na: e,
                    origin: f,
                    pe: "goog:gRpYw:doubleclick"
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

    function xQ(a, b, c) {
        var d = W,
            e = U(Dt);
        const {
            Uc: f,
            Tc: h
        } = yQ(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(k => {
            let l = h;
            if (k instanceof Uint8Array) l || (l = !(f instanceof Uint8Array && lb(k, f)));
            else if (Kk()(k)) l || (l = k !== f);
            else return d.ba(989, Error(JSON.stringify(k))), 7;
            if (l && c) try {
                var m = new sQ;
                var n = si(m, 2, ok());
                k instanceof Uint8Array ? Th(n, 1, uQ, Xf(k, !1, !1)) : Th(n, 3, uQ, tg(k));
                c.setItem("goog:cached:topics",
                    Di(n))
            } catch {}
            return k
        }), b.getTopicsPromise = a);
        return f && !h ? Promise.resolve(f) : b.getTopicsPromise
    }

    function yQ(a) {
        if (!a) return {
            Uc: null,
            Tc: !0
        };
        try {
            const m = a.getItem("goog:cached:topics");
            if (!m) return {
                Uc: null,
                Tc: !0
            };
            const n = tQ(m);
            let p;
            const q = Wh(n, uQ);
            switch (q) {
                case 0:
                    p = null;
                    break;
                case 1:
                    a = n;
                    var b = Wh(n, uQ) === 1 ? 1 : -1;
                    const w = a.U;
                    let A = w[y];
                    const D = zh(w, A, b),
                        G = Xf(D, !0, !!(A & 34));
                    G != null && G !== D && Ch(w, A, b, G);
                    var c = G;
                    var d = c == null ? Af() : c;
                    b = Uint8Array;
                    zf(wf);
                    var e = d.g;
                    if (e == null || vf(e)) var f = e;
                    else {
                        if (typeof e === "string") {
                            sf.test(e) && (e = e.replace(sf, uf));
                            let I;
                            I = atob(e);
                            const B = new Uint8Array(I.length);
                            for (e = 0; e < I.length; e++) B[e] = I.charCodeAt(e);
                            var h = B
                        } else h = null;
                        f = h
                    }
                    var k = f;
                    var l = k == null ? k : d.g = k;
                    p = new b(l || 0);
                    break;
                case 3:
                    p = ki(n, Wh(n, uQ) === 3 ? 3 : -1);
                    break;
                default:
                    Rd(q, void 0)
            }
            const t = ii(n, 2) + 6048E5 < ok();
            return {
                Uc: p,
                Tc: t
            }
        } catch {
            return {
                Uc: null,
                Tc: !0
            }
        }
    };

    function zQ(a) {
        return U(tt) && a ? !!a.match(Vt(rt)) : !1
    }

    function AQ(a, b) {
        if (!U(Bt) && (!U(ut) || b.g())) {
            b = cQ("shared-storage", a.document);
            const c = cQ("browsing-topics", a.document);
            if (b || c) try {
                return wQ(a)
            } catch (d) {
                W.ba(984, d, void 0, void 0)
            }
        }
        return null
    }
    async function BQ(a, b, c, d, e, f) {
        if (cQ("browsing-topics", b.document) && e && !U(At) && !zQ(f ? .label))
            if (CQ(c, d)) {
                a.l = 1;
                const h = mj(c, b);
                c = e.then(async k => {
                    await xQ(k, b, h).then(l => {
                        a.l = l
                    })
                });
                U(Ct) && (d = V(Et), d > 0 ? await Promise.race([c, ef(d)]) : await c)
            } else a.l = 5
    }

    function CQ(a, b) {
        return !b.google_restrict_data_processing && b.google_tag_for_under_age_of_consent !== 1 && b.google_tag_for_child_directed_treatment !== 1 && !!a.g() && !IE() && !K(a, 9) && !K(a, 13) && !K(a, 12) && (typeof b.google_privacy_treatments !== "string" || !b.google_privacy_treatments.split(",").includes("disablePersonalization")) && !K(a, 14)
    };
    var EQ = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => DQ(d));
        return LM(a, "adpnt", (e, f) => {
            if (Wn(f, c.contentWindow)) {
                e = Zn(e).qid;
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

    function DQ(a) {
        setTimeout(() => {
            a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function FQ(a, b, {
        Qg: c,
        Rg: d
    }) {
        return !pj(a.g) || K(b, 8) || (c || !b.g()) && d ? !1 : !0
    }

    function GQ(a, b, {
        Qg: c,
        Rg: d
    }) {
        if (!K(b, 8) && (!c && b.g() || !d)) return rj("__eoi", a.g) ? ? void 0
    }
    var HQ = class {
        constructor(a) {
            this.g = a
        }
    };

    function IQ(a, b, c) {
        try {
            if (!Ze(c.origin) || !Wn(c, a.g.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        typeof d === "string" && (e = a.ua[d]) && a.Ia.vb(168, () => {
            e.call(a, b, c)
        })
    }
    class JQ extends Q {
        constructor(a, b) {
            var c = W,
                d = ew;
            super();
            this.j = a;
            this.g = b;
            this.Ia = c;
            this.ta = d;
            this.ua = {};
            this.Fa = this.Ia.Da(168, (e, f) => void IQ(this, e, f));
            this.ib = this.Ia.Da(169, (e, f) => $n(this.j, "ras::xsf", this.ta, f));
            this.T = [];
            this.ca(this.ua);
            this.T.push(KM(this.j, "sth", this.Fa, this.ib))
        }
        i() {
            for (const a of this.T) a();
            this.T.length = 0;
            super.i()
        }
    };
    var KQ = class extends JQ {};

    function LQ(a, b, c = null) {
        return new MQ(a, b, c)
    }
    var MQ = class extends KQ {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.B = P(cF);
            this.l = () => {};
            Gb(this.g, "load", this.l)
        }
        i() {
            Hb(this.g, "load", this.l);
            super.i()
        }
        ca(a) {
            a["adsense-labs"] = b => {
                if (b = Zn(b).settings)
                    if (b = Fi($i, JSON.parse(b)), F(b, 1) != null) {
                        var c = b.U;
                        if (Zh(c, c[y], Zi, 4, 3, !1, !0).length > 0) {
                            var d = c = $h(b, Zi, 4),
                                e = this.B;
                            const k = new Vl;
                            for (var f of d) switch (f.getVersion()) {
                                case 1:
                                    pi(k, 1, !0);
                                    break;
                                case 2:
                                    pi(k, 2, !0)
                            }
                            f = new Wl;
                            f = E(f, 1, Xl, k);
                            iF(e, f);
                            f = this.j;
                            e = this.A;
                            if (!CE(xE(), 37, !1)) {
                                f = new qO(f);
                                for (var h of c) switch (h.getVersion()) {
                                    case 1:
                                        nO(f,
                                            "__gads", h, e);
                                        break;
                                    case 2:
                                        nO(f, "__gpi", h, e)
                                }
                                DE(xE(), 37, !0)
                            }
                            Bh(b, 4)
                        }
                        if (h = z(b, Zi, 5)) c = this.j, CE(xE(), 40, !1) || (c = new HQ(c), f = ii(h, 2) - Date.now() / 1E3, f = {
                            Bd: Math.max(f, 0),
                            path: L(h, 3),
                            domain: L(h, 4),
                            Sd: !1
                        }, sj("__eoi", h.getValue(), f, c.g), DE(xE(), 40, !0));
                        Bh(b, 5);
                        h = this.j;
                        c = L(b, 1) || "";
                        if (LK({
                                win: h,
                                Va: YP()
                            }).g != null) {
                            f = LK({
                                win: h,
                                Va: YP()
                            });
                            f = f.g != null ? $P(f.getValue()) : {};
                            b !== null && (f[c] = Ei(b));
                            try {
                                h.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (k) {}
                        }
                    }
            }
        }
    };

    function NQ(a) {
        a.A = a.B;
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.g.style.transition = "height 500ms";
        OQ(a)
    }

    function PQ(a, b) {
        a.g.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function OQ(a) {
        const b = `rect(0px, ${a.g.width}px, ${a.A}px, 0px)`;
        a.g.style.clip = b;
        a.l.style.clip = b;
        a.g.setAttribute("height", a.A);
        a.g.style.height = a.A + "px";
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function QQ(a, b) {
        b = Je(b.r_nh);
        a.B = b == null ? 0 : b;
        if (a.B <= 0) return "1";
        a.I = Uj(a.F).y;
        a.H = Xn(a.j);
        if (a.I + a.A < a.H) return "2";
        if (a.I > Sn(a.j) - a.j.innerHeight) return "3";
        b = a.H;
        a.g.setAttribute("height", a.B);
        a.g.style.height = a.B + "px";
        a.l.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.g.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.I, a.A);
        Nj(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.g.width}px, ${b}px, 0px)`;
        Nj(a.g, {
            clip: b
        });
        Nj(a.l, {
            clip: b
        });
        return "0"
    }
    class RQ extends KQ {
        constructor(a, b) {
            super(a.K, b);
            this.l = a.ea;
            this.F = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Ka = this.hb = !1;
            this.ia = this.H = this.B = 0;
            this.Mc = this.A / 5;
            this.I = Uj(this.F).y;
            this.Bb = Cb(hw(651, () => {
                this.I = Uj(this.F).y;
                var c = this.H;
                this.H = Xn(this.j);
                this.A < this.B ? (c = this.H - c, c > 0 && (this.ia += c, this.ia >= this.Mc ? (NQ(this), PQ(this, this.B)) : (this.A = Math.min(this.B, this.A + c), PQ(this, c), OQ(this)))) :
                    Hb(this.j, "scroll", this.M)
            }), this);
            this.M = () => {
                var c = this.Bb;
                gj.requestAnimationFrame ? gj.requestAnimationFrame(c) : c()
            }
        }
        ca(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Zn(b);
                this.hb || (this.hb = !0, b = QQ(this, b), b === "0" && Gb(this.j, "scroll", this.M, Db), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0",
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ka || (this.Ka = !0, NQ(this), Hb(this.j, "scroll", this.M))
            }
        }
        i() {
            this.M && Hb(this.j, "scroll", this.M, Db);
            super.i()
        }
    };

    function SQ(a) {
        const b = a.I.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.j.innerHeight) && !c
    }
    class TQ extends Q {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.A = b;
            this.I = c;
            this.B = 0;
            this.l = SQ(this);
            this.H = Bb(this.F, this);
            this.g = hw(433, () => {
                var d = this.H;
                gj.requestAnimationFrame ? gj.requestAnimationFrame(d) : d()
            });
            Gb(this.j, "scroll", this.g, Db)
        }
        F() {
            const a = SQ(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (MM(c, "ig", b, "*", 2), ++this.B >= 10 && this.g && Hb(this.j, "scroll", this.g, Db))
            }
            this.l = a
        }
    };

    function UQ(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Nj(a, "transition", b.join(","))
    }
    var VQ = zb(function() {
        var a = ee(document, "DIV"),
            b = kc ? "-webkit" : jc ? "-moz" : hc ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        c = {
            style: c
        };
        if (!ld.test("div")) throw Error("");
        if ("DIV" in nd) throw Error("");
        b = void 0;
        var d = "";
        if (c)
            for (k in c)
                if (Object.prototype.hasOwnProperty.call(c, k)) {
                    if (!ld.test(k)) throw Error("");
                    var e = c[k];
                    if (e != null) {
                        var f = k;
                        if (e instanceof rb) e = ub(e);
                        else if (f.toLowerCase() == "style") {
                            if (!Ca(e)) throw Error("");
                            if (!(e instanceof Tc)) {
                                let l = "";
                                for (var h in e)
                                    if (Object.prototype.hasOwnProperty.call(e, h)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(h)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${h}`);
                                        let m = e[h];
                                        m != null && (m = Array.isArray(m) ? m.map(Vc).join(" ") : Vc(m), l += `${h}:${m};`)
                                    }
                                e = l ? new Tc(l, Rc) : Uc
                            }
                            e = Sc(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in md)
                                if (e instanceof vc) e = yc(e).toString();
                                else if (e instanceof Gc) e = Ic(e);
                            else if (typeof e === "string") e = Nc(e).toString();
                            else throw Error("");
                        }
                        f = `${f}="` + Mb(String(e)) + '"';
                        d += " " + f
                    }
                }
        var k =
            "<div" + d;
        b == null ? b = [] : Array.isArray(b) || (b = [b]);
        sc.div === !0 ? k += ">" : (h = kd(b), k += ">" + fd(h).toString() + "</div>");
        k = hd(k);
        Fd(a, k);
        return Qj(a.firstChild, "transition") != ""
    });

    function WQ(a, b, c) {
        a.i[b].indexOf(c) < 0 && (a.i[b] += c)
    }

    function XQ(a, b) {
        a.g.indexOf(b) >= 0 || (a.g = b + a.g)
    }

    function YQ(a, b, c, d) {
        return a.errors != "" || b ? null : a.g.replace(ZQ, "") == "" ? c != null && a.i[0] || d != null && a.i[1] ? !1 : !0 : !1
    }

    function $Q(a) {
        var b = YQ(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var aR = class {
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

    function bR(a) {
        let b = a.T;
        a.G = () => {};
        cR(a, a.C, b);
        let c = a.C.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Ae(c, b)
            } catch (h) {
                a.g.wa("c")
            }
            const f = dR(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.M = !0);
            if (d && !f && eR(e)) {
                XQ(a.g, "l");
                a.F = c;
                break
            }
            d = d && f;
            if (e && fR(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !ue(b)) {
                        XQ(a.g, "c");
                        break
                    }
                } catch (h) {
                    XQ(a.g,
                        "c");
                    break
                }
            }
        }
        a.B && a.A && gR(a);
        return a.g
    }

    function hR(a) {
        function b(n) {
            for (let p = 0; p < n.length; p++) Nj(l, n[p], "0px")
        }

        function c() {
            iR(d, h, k);
            !l || m || k || (b(jR), b(kR))
        }
        const d = a.C;
        d.style.overflow = a.Pc ? "visible" : "hidden";
        a.B && (a.F ? (UQ(d, lR()), UQ(a.F, lR())) : UQ(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.I !== null && (d.style.opacity = String(a.I));
        const e = a.width != null && a.j != null && (a.Qd || a.j > a.width) ? a.j : null,
            f = a.height != null && a.i != null && (a.Qd || a.i > a.height) ? a.i : null;
        if (a.H) {
            const n =
                a.H.length;
            for (let p = 0; p < n; p++) iR(a.H[p], e, f)
        }
        const h = a.j,
            k = a.i,
            l = a.F,
            m = a.M;
        a.B ? u.setTimeout(c, 1E3) : c()
    }

    function mR(a) {
        if (a.A && !a.ca || a.j == null && a.i == null && a.I == null && a.A) return a.g;
        var b = a.A;
        a.A = !1;
        bR(a);
        a.A = b;
        if (!b || a.check != null && !YQ(a.g, a.check, a.j, a.i)) return a.g;
        a.g.g.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.j !== null || a.height == null && a.i !== null) a.B = !1;
        (a.j == 0 || a.i == 0) && a.g.g.indexOf("l") >= 0 && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        hR(a);
        return bR(a)
    }

    function fR(a, b) {
        let c = !1;
        b.display == "none" && (XQ(a.g, "n"), a.A && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || XQ(a.g, "v");
        b.overflow == "hidden" && XQ(a.g, "o");
        b.position == "absolute" ? (XQ(a.g, "a"), c = !0) : b.position == "fixed" && (XQ(a.g, "f"), c = !0);
        return c
    }

    function cR(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const h = b.parentElement.childNodes;
        for (let l = 0; l < h.length; l++) {
            var k = h[l];
            k == b ? e = !0 : (k = nR(a, k, c), d |= k, e && (f |= k))
        }
        f & 1 && (d & 2 && WQ(a.g, 0, "o"), d & 4 && WQ(a.g, 1, "o"));
        return !(d & 1)
    }

    function dR(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (A) {
            a.g.wa("s")
        }
        var f = c.getAttribute("width"),
            h = Je(f),
            k = c.getAttribute("height"),
            l = Je(k),
            m = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = cR(a, c, b);
        var n = d && d.width;
        const p = d && d.height;
        var q = e && e.width,
            t = e && e.height,
            w = Ke(n) == a.width && Ke(p) == a.height;
        n = w ? n : q;
        t = w ? p : t;
        q = Ke(n);
        w = Ke(t);
        h = a.width !== null && (q !== null && a.width >= q || h !== null && a.width >= h);
        w = a.height !== null && (w !== null && a.height >= w || l !== null && a.height >= l);
        l = !b && eR(d);
        w = b || w || l || !(f ||
            n || d && (!oR(String(d.minWidth)) || !pR(String(d.maxWidth))));
        m = b || h || l || m || !(k || t || d && (!oR(String(d.minHeight)) || !pR(String(d.maxHeight))));
        qR(a, 0, w, c, "width", f, a.width, a.j);
        rR(a, 0, "d", w, e, d, "width", n, a.width, a.j);
        rR(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        rR(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.gf ? (c = /^html|body$/i.test(c.nodeName), f = Ke(p), k = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, k = a.i != null && d && f && Math.round(f) !== a.i && !k && d.minHeight !== "100%", a.A && !c && k && (e.setProperty("height",
            "auto", "important"), d && !oR(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !pR(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (qR(a, 1, m, c, "height", k, a.height, a.i), rR(a, 1, "d", m, e, d, "height", t, a.height, a.i), rR(a, 1, "m", m, e, d, "minHeight", e && e.minHeight, a.height, a.i), rR(a, 1, "M", m, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function gR(a) {
        function b() {
            if (c > 0) {
                var m = Ae(e, d) || {
                    width: 0,
                    height: 0
                };
                const n = Ke(m.width);
                m = Ke(m.height);
                n !== null && f !== null && k && k(0, f - n);
                m !== null && h !== null && k && k(1, h - m);
                --c
            } else u.clearInterval(l), k && (k(0, 0), k(1, 0))
        }
        let c = 31.25;
        const d = a.T,
            e = a.C,
            f = a.j,
            h = a.i,
            k = a.G;
        let l;
        u.setTimeout(() => {
            l = u.setInterval(b, 16)
        }, 990)
    }

    function nR(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Ae(b, c)
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

    function qR(a, b, c, d, e, f, h, k) {
        if (k != null) {
            if (typeof f == "string") {
                if (f == "100%" || !f) return;
                f = Je(f);
                f == null && (a.g.wa("n"), WQ(a.g, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.A)
                        if (a.B) {
                            const l = Math.max(f + k - (h || 0), 0),
                                m = a.G;
                            a.G = (n, p) => {
                                n == b && Qd(d, e, String(l - p));
                                m && m(n, p)
                            }
                        } else Qd(d, e, String(k))
                } else WQ(a.g, b, "d")
        }
    }

    function rR(a, b, c, d, e, f, h, k, l, m) {
        if (m != null) {
            f = f && f[h];
            typeof f != "string" || (c == "m" ? oR(f) : pR(f)) || (f = Ke(f), f == null ? XQ(a.g, "p") : l != null && XQ(a.g, f == l ? "E" : "e"));
            if (typeof k == "string") {
                if (c == "m" ? oR(k) : pR(k)) return;
                k = Ke(k);
                k == null && (a.g.wa("p"), WQ(a.g, b, c))
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
                } else WQ(a.g, b, c)
        }
    }
    var wR = class {
        constructor(a, b, c, d, e, f, h) {
            this.pubWin = a;
            this.C = b;
            this.H = c;
            this.l = new sR(this.C);
            this.F = this.G = null;
            this.M = !1;
            this.T = (a = this.C.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new sR(this.C);
            this.A = h;
            this.ca = tR(this.l, d.rf, d.height, d.Jc);
            this.width = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = uR(d.width);
            this.i = uR(d.height);
            this.I = this.A ? uR(d.opacity) : null;
            this.check = d.check;
            this.Jc = !!d.Jc;
            this.B = d.rf == "animate" && !vR(this.l, this.i, this.Jc) && VQ();
            this.Pc = !!d.Pc;
            this.g = new aR;
            vR(this.l, this.i, this.Jc) && XQ(this.g, "r");
            e = this.l;
            e.g && e.i >= e.W && XQ(this.g, "b");
            this.Qd = !!d.Qd;
            this.gf = !!d.gf
        }
    };

    function vR(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, uR(a.getHeight())), a = a.g && b >= a.W) : a = a.g && a.i >= a.W, d = a);
        return d
    }
    var sR = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && xe(c);
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
            b = b && KO(b);
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

    function tR(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return vR(a, c, d)
        }
    }

    function eR(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function xR(a, b, c, d) {
        return mR(new wR(a, b, d, c, null, null, !0))
    }
    var yR = new aR("s", ""),
        ZQ = RegExp("[lonvafrbpEe]", "g");

    function pR(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function oR(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function iR(a, b, c) {
        b !== null && Je(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && Je(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = b + "px");
        c !== null && (a.style.height = c + "px")
    }
    var jR = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        kR = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function lR() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = jR;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = kR;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function uR(a) {
        return typeof a === "string" ? Je(a) : typeof a === "number" && isFinite(a) ? a : null
    };
    var zR = class extends KQ {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        ca(a) {
            a["resize-me"] = (b, c) => {
                b = Zn(b);
                var d = b.r_chk;
                if (d == null || d === "") {
                    var e = Je(b.r_nw),
                        f = Je(b.r_nh),
                        h = Je(b.r_no);
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
                                var p = new sR(this.g);
                                if (p.g) {
                                    var q = p.getWidth();
                                    q != null && (b.w = q);
                                    q = p.getHeight();
                                    q != null && (b.h = q);
                                    tR(p, k, f, n) ? (p = this.l, d = xR(t, p, {
                                        width: e,
                                        height: f,
                                        opacity: h,
                                        check: d,
                                        rf: k,
                                        Pc: l,
                                        Qd: m,
                                        Jc: n
                                    }, [this.g]), b.r_cui && /^true$/.test(b.r_cui.toString()) && x(p, {
                                        height: (f === null ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), e != null && (b.nw = e), f != null && (b.nh = f), b.rsz = d.toString(), b.abl = $Q(d), b.frsz = (k === "force").toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
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

    function AR(a, b, c) {
        return new IntersectionObserver(c, b)
    }

    function BR(a, b, c) {
        Gb(a, b, c);
        return () => Hb(a, b, c)
    }
    let CR = null;

    function DR() {
        CR = ok()
    }

    function ER(a, b) {
        return b ? CR === null ? (Gb(a, "mousemove", DR, {
            passive: !0
        }), Gb(a, "scroll", DR, {
            passive: !0
        }), DR(), !1) : ok() - CR >= b * 1E3 : !1
    }

    function FR({
        win: a,
        element: b,
        B: c,
        C: d,
        A: e = 0,
        Ra: f,
        i: h,
        g: k = {},
        l = !0,
        j: m = AR
    }) {
        let n, p = !1,
            q = !1;
        const t = [],
            w = m(a, k, (A, D) => {
                try {
                    const G = () => {
                        t.length || (d && (t.push(BR(b, "mouseenter", () => {
                            p = !0;
                            G()
                        })), t.push(BR(b, "mouseleave", () => {
                            p = !1;
                            G()
                        }))), t.push(BR(a.document, "visibilitychange", () => G())));
                        const I = ER(a, e),
                            B = MO(a.document);
                        if (q && !p && !I && !B) n = n || a.setTimeout(() => {
                            ER(a, e) ? G() : (f(), D.disconnect())
                        }, c * 1E3);
                        else if (l || p || I || B) a.clearTimeout(n), n = void 0
                    };
                    ({
                        isIntersecting: q
                    } = A[A.length - 1]);
                    G()
                } catch (G) {
                    h && h(G)
                }
            });
        w.observe(b);
        return () => {
            w.disconnect();
            for (const A of t) A();
            n != null && a.clearTimeout(n)
        }
    };

    function GR(a, b, c, d, e) {
        return new HR(a, b, c, d, e)
    }

    function IR(a, b, c) {
        const d = a.g,
            e = a.F;
        if (e != null && d != null && Wn(c, d.contentWindow) && (b = b.config, typeof b === "string")) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = new aj(f)
            } catch (h) {
                return
            }
            a.dispose();
            f = hi(a.l, 1);
            f <= 0 || (a.B = FR({
                win: a.j,
                element: e,
                B: f - .2,
                C: !pe(),
                A: hi(a.l, 3),
                Ra: () => void JR(a, e),
                i: h => Cn.ba(1223, h, void 0, void 0),
                g: {
                    threshold: ji(a.l, 2, 1)
                },
                l: !0,
                j: void 0
            }))
        }
    }

    function JR(a, b) {
        a.H();
        setTimeout(Cn.Da(1224, () => {
            a.A.rc = (parseInt(a.A.rc, 10) || 0) + 1;
            var c = ge(b);
            c && ku.test(c.className) || (c = ee(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            U(ns) ? (KR(a, c, b), a.A.no_resize = !0, Do(sG(c), "filled", () => {
                fe(b)
            })) : fe(b);
            wP(c, a.A, a.j)
        }), 200)
    }

    function KR(a, b, c) {
        a.j.getComputedStyle(b).position == "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var HR = class extends KQ {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.F = d;
            this.A = c;
            this.H = e;
            this.l = this.B = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.T.push(KM(b, "sth", this.Fa, this.ib))
        }
        ca(a) {
            a.av_ref = (b, c) => IR(this, b, c)
        }
        i() {
            super.i();
            this.F = null;
            this.B && this.B()
        }
    };
    const LR = ["google_ad_client", "google_ad_format", "google_ad_height", "google_ad_width", "google_page_url"];

    function MR(a) {
        if (U(os)) {
            var b = ge(a.ea);
            b && ku.test(b.className) && Do(sG(b), "unfilled", () => {
                var c;
                if (c = U(os))
                    if (c = !CE(xE(), 42, !1)) {
                        a: switch (a.D.google_reactive_ad_format) {
                            case 0:
                            case 27:
                            case 40:
                                c = !0;
                                break a;
                            default:
                                c = !1
                        }
                        if (c = c && (a.g ? lO(new qO(a.pubWin), a.g) : !1)) c = (c = a.g ? mj(a.g, a.pubWin) : null) ? (c.getItem("google_survey_fcap") ? Number(c.getItem("google_survey_fcap")) : 0) <= ok() : !1;c && (c = (c = Pn(a.pubWin)) ? b.getBoundingClientRect().top > c : !1)
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
                    for (var e of LR) d[e] && (f[e] = d[e]);
                    f.sso = !0;
                    wP(c, f, a.pubWin);
                    DE(xE(), 42, !0);
                    if (c = a.g ? mj(a.g, a.pubWin) : null) e = ok() + V(vs) * 36E5, c.setItem("google_survey_fcap", String(e))
                }
            })
        }
    };
    const NR = /^blogger$/,
        OR = /^wordpress(.|\s|$)/i,
        PR = /^joomla!/i,
        QR = /^drupal/i,
        RR = /\/wp-content\//,
        SR = /\/wp-content\/plugins\/advanced-ads/,
        TR = /\/wp-content\/themes\/genesis/,
        UR = /\/wp-content\/plugins\/genesis/;

    function FU(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (SR.test(e)) return 5;
                if (UR.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", TR.test(e) || UR.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (NR.test(f)) return 1;
                if (OR.test(f)) return 2;
                if (PR.test(f)) return 3;
                if (QR.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", RR.test(d))) return 2;
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
        const b = Oe();
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
    var SU = class extends O {
        constructor() {
            super()
        }
    };

    function TU(a, b) {
        if (dc()) {
            var c = a.document.documentElement.lang;
            UU(a) ? VU(b, cf(a), !0, "", c) : (new MutationObserver((d, e) => {
                UU(a) && (VU(b, cf(a), !1, c, a.document.documentElement.lang), e.disconnect())
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
        ej({
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
            h = ff(d),
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
        m = uE(h).Te;
        n = d.top == d ? 0 : ue(d.top) ? 1 : 2;
        p = 4;
        l || n !== 1 ? l ||
            n !== 2 ? l && n === 1 ? p = 7 : l && n === 2 && (p = 8) : p = 6 : p = 5;
        m && (p |= 16);
        l = String(p);
        m = wE(d);
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
        n ? (e.google_page_url = c.google_page_url, e.google_page_location = (k ? f.referrer : f.URL) || "EMPTY") : (k && ue(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url =
            d.top.document.URL : e.google_page_url = k ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var q = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            q = null
        } else q = null;
        e.google_last_modified_time = q;
        d = h === h.top ? h.document.referrer : (d = Fj()) && d.referrer || "";
        e.google_referrer_url = d;
        vE(e, c);
        U(ut) && !b.g() ? e = "pagead2.googlesyndication.com" : (e = c.google_page_location || c.google_page_url, "EMPTY" === e && (e = c.google_page_url), e ? (e = e.toString(), e.indexOf("http://") == 0 ? e = e.substring(7,
            e.length) : e.indexOf("https://") == 0 && (e = e.substring(8, e.length)), d = e.indexOf("/"), d === -1 && (d = e.length), e = e.substring(0, d).split("."), d = !1, e.length >= 3 && (d = e[e.length - 3] in fO), e.length >= 2 && (d = d || e[e.length - 2] in fO), e = d) : e = !1, e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net");
        b = ZU(a, b);
        d = a.D;
        f = d.google_ad_channel;
        h = "/pagead/ads?";
        d.google_ad_client === "ca-pub-6219811747049371" && $U.test(f) && (h = "/pagead/lopri?");
        e = `https://${e}${h}`;
        a = K(a.ma, 9) && c.google_debug_params ? c.google_debug_params :
            "";
        a = Zj(b, e + a);
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
                const c = a ? de(a) : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && ue(c.parent)) {
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
        var c = mQ(a.pubWin);
        a.D.saaei && (c += (c === "" ? "" : ",") + a.D.saaei);
        a.D.google_ad_intent_eids && (c += `${c===""?"":","}${a.D.google_ad_intent_eids}`);
        b.eid = c;
        c = a.D.google_loeid;
        typeof c === "string" && (a.i |= 4096, b.loeid = c)
    }

    function cV(a, b) {
        a = (a = xe(a.pubWin)) && a.document ? iO(a.document, a) : new Kd(-12245933, -12245933);
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
            h = ff(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var k;
        (k = Fj(e)) && Ca(k.data) && typeof k.data.type === "string" ? (k = k.data.type.toLowerCase(), k = k == "doubleclick" || k == "adsense" ? null : k) : k = null;
        k && (b.apn = k.substr(0, 10));
        h = uE(h);
        b.url || b.loc || !h.url || (b.url = h.url, h.Te || (b.usrc = 1));
        h.url != (b.loc || b.url) && (b.top = h.url);
        a.qc && (b.etu = a.qc);
        c = f ? mj(c, f) : null;
        (c = qP(d, f, c)) && (b.fc = c);
        if (!gk(d)) {
            c = a.pubWin.document;
            h = "";
            if (c.documentMode &&
                (k = ne(new $d(c), "IFRAME"), k.frameBorder = "0", k.style.height = 0, k.style.width = 0, k.style.position = "absolute", c.body)) {
                c.body.appendChild(k);
                try {
                    const qa = k.contentWindow.document;
                    qa.open();
                    var l = hd("<!DOCTYPE html>");
                    qa.write(fd(l));
                    qa.close();
                    h += qa.documentMode
                } catch (qa) {}
                c.body.removeChild(k)
            }
            b.docm = h
        }
        let m, n, p, q, t, w, A, D, G, I;
        try {
            m = e.screenX, n = e.screenY
        } catch (qa) {}
        try {
            p = e.outerWidth, q = e.outerHeight
        } catch (qa) {}
        try {
            t = e.innerWidth, w = e.innerHeight
        } catch (qa) {}
        try {
            A = e.screenLeft, D = e.screenTop
        } catch (qa) {}
        try {
            t =
                e.innerWidth, w = e.innerHeight
        } catch (qa) {}
        try {
            G = e.screen.availWidth, I = e.screen.availTop
        } catch (qa) {}
        b.brdim = [A, D, m, n, G, I, p, q, t, w].join();
        l = 0;
        u.postMessage === void 0 && (l |= 1);
        l > 0 && (b.osd = l);
        b.vis = KO(e.document);
        l = a.ea;
        e = kP(d) ? yR : mR(new wR(e, l, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = $Q(e);
        if (!kP(d) && (e = hk(d), e != null)) {
            l = 0;
            a: {
                try {
                    {
                        var B = d.google_async_iframe_id;
                        const qa = window.document;
                        if (B) var J = qa.getElementById(B);
                        else {
                            var H = qa.getElementsByTagName("script"),
                                aa = H[H.length - 1];
                            J = aa && aa.parentNode || null
                        }
                    }
                    if (B = J) {
                        J = [];
                        H = 0;
                        for (var bb = Date.now(); ++H <= 100 && Date.now() - bb < 50 && (B = aV(B));) B.nodeType === 1 && J.push(B);
                        var xa = J;
                        b: {
                            for (bb = 0; bb < xa.length; bb++) {
                                c: {
                                    var fa = xa[bb];
                                    try {
                                        if (fa.parentNode && fa.offsetWidth > 0 && fa.offsetHeight > 0 && fa.style && fa.style.display !== "none" && fa.style.visibility !== "hidden" && (!fa.style.opacity || Number(fa.style.opacity) !== 0)) {
                                            const qa = fa.getBoundingClientRect();
                                            var la = qa.right > 0 && qa.bottom > 0;
                                            break c
                                        }
                                    } catch (qa) {}
                                    la = !1
                                }
                                if (!la) {
                                    var fb = !1;
                                    break b
                                }
                            }
                            fb = !0
                        }
                        if (fb) {
                            b: {
                                const qa = Date.now();fb = /^html|body$/i;la = /^fixed/i;
                                for (fa = 0; fa < xa.length && Date.now() - qa < 50; fa++) {
                                    const Md = xa[fa];
                                    if (!fb.test(Md.tagName) && la.test(Md.style.position || Sj(Md, "position"))) {
                                        var gb = Md;
                                        break b
                                    }
                                }
                                gb = null
                            }
                            break a
                        }
                    }
                } catch {}
                gb = null
            }
            gb && gb.offsetWidth * gb.offsetHeight <= 4 * e.width * e.height && (l = 1);
            b.pfx = l
        }
        a: {
            if (Math.random() < .05 && f) try {
                const qa = f.document.getElementsByTagName("head")[0];
                var dg = qa ? FU(qa) : 0;
                break a
            } catch (qa) {}
            dg = 0
        }
        f = dg;
        f !== 0 && (b.cms = f);
        d.google_lrv !== a.Wa && (b.alvm = d.google_lrv ||
            "none")
    }

    function fV(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : ve(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function gV(a, b) {
        const c = CE(b, 8, {});
        b = CE(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function hV(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = En;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = u.performance;
                if (f && f.timing && f.now) {
                    var h = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (G) {}
            h = null
        }(e = (e = h) ? rQ(e, u.Date.now() - En, 1E6) : null) && (b.bdt = e);
        b.idt = rQ(a.H, En);
        e = a.D;
        b.shv = L(a.ma, 2);
        a.Wa && (b.mjsv = a.Wa);
        e.google_loader_used == "sd" ? b.ptt = 5 : e.google_loader_used == "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Fj(a.pubWin)) b.is_amp = 1, b.amp_v = Gj(e), (e = Hj(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new qO(a.pubWin);
        (h = mO(e, "__gads", c)) ? b.cookie = h: lO(e, c) && (b.cookie_enabled = "1");
        (h = mO(e, "__gpi", c)) && !h.includes("&") && (b.gpic = h);
        mO(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
        e = new HQ(a.pubWin);
        h = {
            Qg: !1,
            Rg: !a.F
        };
        (f = GQ(e, c, h)) ? b.eo_id_str = f: FQ(e, c, h) && (b.eoidce = "1");
        e = xE();
        f = CE(e, 8, {});
        h = d.google_ad_section;
        f[h] && (b.prev_fmts = f[h]);
        f = CE(e, 9, {});
        f[h] && (b.prev_slotnames = f[h].toLowerCase());
        gV(d, e);
        h = CE(e,
            15, 0);
        h > 0 && (b.nras = String(h));
        (f = Fj(window)) ? (f ? (h = f.pageViewId, f = f.clientId, typeof f === "string" && (h += f.replace(/\D/g, "").substr(0, 6))) : h = null, h = +h) : (h = ff(window), f = h.google_global_correlator, f || (h.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), h = f);
        b.correlator = CE(e, 7, h);
        U(Nt) && (b.rume = 1);
        if (d.google_ad_channel) {
            h = CE(e, 10, {});
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
            f = CE(e, 11, []);
            k = h.split("|");
            e = -1;
            h = [];
            for (l = 0; l < k.length; l++) {
                m = k[l].split(XU);
                f[l] || (f[l] = {});
                var n = "";
                for (var p = 0; p < m.length; p++) {
                    const G = m[p];
                    G !== "" && (f[l][G] ? n += "+" + G : f[l][G] = !0)
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
                var q = ff(window),
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
        a.K && U(rs) && (w = a.K, w = dc() && UU(w) ? w.document.documentElement.lang : void 0, w && (b.tl = w));
        U(ss) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        if (!U(Ft)) {
            q = a.pubWin.document;
            w = a.D;
            t = a.pubWin;
            t = c.g() ? t.origin !== "null" ? t.document.cookie : null : null;
            c = q.domain;
            e = t || "";
            k = a.pubWin.screen;
            l = q.referrer;
            m = bk();
            if (Fj()) var A = window.gaGlobal || {};
            else {
                h = Math.round((new Date).getTime() / 1E3);
                f = w.google_analytics_domain_name;
                c = typeof f === "undefined" ? IU("auto",
                    c) : IU(f, c);
                p = e.indexOf(`__utma=${c}.`) > -1;
                n = e.indexOf(`__utmb=${c}`) > -1;
                (q = (Kj() || window).gaGlobal) || (q = {}, (Kj() || window).gaGlobal = q);
                t = !1;
                if (p) {
                    var D = e.split(`__utma=${c}.`)[1].split(";")[0].split(".");
                    n ? q.sid = String(D[3]) : q.sid || (q.sid = String(h));
                    q.vid = `${D[0]}.${D[1]}`;
                    q.from_cookie = !0
                } else {
                    q.sid || (q.sid = String(h));
                    if (!q.vid) {
                        t = !0;
                        n = Math.round(Math.random() * 2147483647);
                        try {
                            D = GU.javaEnabled()
                        } catch (G) {
                            D = !1
                        }
                        D = [GU.appName, GU.version, GU.language ? GU.language : GU.browserLanguage, GU.platform, GU.userAgent,
                            D ? 1 : 0
                        ].join("");
                        k ? D += `${k.width}x${k.height}${k.colorDepth}` : u.g && u.g.Mh && (k = u.g.Mh.Zn.ro().so(), D += `${k.screen.width}x${k.screen.height}`);
                        D = D + e + (l || "");
                        for (k = D.length; m > 0;) D += m-- ^ k++;
                        q.vid = `${n^HU(D)&2147483647}.${h}`
                    }
                    q.from_cookie || (q.from_cookie = !1)
                }
                if (!q.cid) {
                    b: for (h = f, D = 999, h && (h = h.indexOf(".") === 0 ? h.substr(1) : h, D = h.split(".").length), h = 999, e = e.split(";"), f = 0; f < e.length; f++)
                        if (k = JU.exec(e[f]) || KU.exec(e[f]) || LU.exec(e[f])) {
                            l = parseInt(k[1], 10) || 0;
                            if (l === D) {
                                A = k[2];
                                break b
                            }
                            l < h && (h = l, A = k[2])
                        }t &&
                    A && A.search(/^\d+\.\d+$/) !== -1 ? (q.vid = A, q.from_cookie = !0) : A !== q.vid && (q.cid = A)
                }
                q.dh = c;
                q.hid || (q.hid = Math.round(Math.random() * 2147483647));
                A = q
            }
            b.ga_vid = A.vid;
            b.ga_sid = A.sid;
            b.ga_hid = A.hid;
            b.ga_fc = A.from_cookie;
            b.ga_cid = A.cid;
            b.ga_wpids = w.google_analytics_uacct
        }
        fV(a.pubWin, b);
        (a = d.google_ad_layout) && HP[a] >= 0 && (b.rplot = HP[a])
    }

    function iV(a, b) {
        var c = a.g;
        a = a.ma;
        IE() && (b.npa = 1);
        K(a, 6) && !c ? .C() && (b.ltd_cs = 1);
        c && (c.C() && (b.gdpr = c.A() ? "1" : "0"), (a = F(c, 1)) && (b.us_privacy = a), (a = F(c, 2)) && (b.gdpr_consent = a), (a = F(c, 4)) && (b.addtl_consent = a), (a = gi(c, 7)) && (b.tcfe = a), (a = L(c, 11)) && (b.gpp = a), (c = Hh(c, 10, Jg, 0)) && c.length > 0 && (b.gpp_sid = c.join(",")))
    }

    function jV(a, b) {
        const c = a.D;
        iV(a, b);
        Ce(OE, (d, e) => {
            b[d] = c[e]
        });
        kP(c) && (a = xP(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = Av(c), a.g != null && (a = Rp(a.getValue()), b.pi = a))
    }

    function kV(a, b) {
        var c = Jj() || gO(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = gO(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function lV(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = gO(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Ee(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function mV(a, b) {
        (a = FE()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function nV(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function oV(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = of (a))
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
        c && Object.values(Oa).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function sV(a, b) {
        var c;
        if (c = !U(Tt)) c = a.C ? .label, c = !(U(tt) && c && c.match(Vt(rt)));
        c && ("runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1), c = a.pubWin.navigator, a.pubWin.isSecureContext && "runAdAuction" in c && c.runAdAuction instanceof Function && cQ("run-ad-auction", a.pubWin.document) && (c = new NU, c.set(1, dQ(a.pubWin.navigator)), b.tdf = MU(c)))
    }

    function tV(a, b) {
        if (a.C != null && dc()) {
            var c = new SU,
                d = Bi(c, 3, a.C.label);
            N(d, 4, a.C.status);
            b.psd = of (Di(c))
        }
    }

    function uV(a, b) {
        U(Kt) || cQ("attribution-reporting", a.pubWin.document) && (b.nt = 1)
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
            a.A.Zi && (b.xatf = 1);
            try {
                a.A.Le ? .disconnect(), a.A.Le = void 0
            } catch {}
        }
    }

    function ZU(a, b) {
        const c = {};
        jV(a, c);
        oV(a, c);
        hV(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        c.u_his = bk();
        c.u_h = gj.screen ? .height;
        c.u_w = gj.screen ? .width;
        c.u_ah = gj.screen ? .availHeight;
        c.u_aw = gj.screen ? .availWidth;
        c.u_cd = gj.screen ? .colorDepth;
        c.u_sd = hO(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        gw(889, () => {
            if (a.K == null) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = kO(a.K, a.ea);
                c.adx && c.adx != -12245933 && c.ady && c.ady != -12245933 || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                jO(a.ea) || (c.adx = -12245933,
                    c.ady = -12245933, a.i |= 32768)
            }
        });
        kV(a, c);
        lV(a, c);
        cV(a, c);
        bV(a, c);
        c.oid = 2;
        mV(a, c);
        c.pvsid = cf(a.pubWin, W);
        nV(a, c);
        pV(a, c);
        c.uas = WU(a.pubWin);
        const d = RU(a.pubWin);
        d && (c.nvt = d);
        a.B && (c.scar = a.B);
        a.l instanceof Uint8Array ? c.topics = mf(a.l) : a.l && (c.topics = a.l, c.tps = a.l);
        wV(a, c);
        eV(a, c, b);
        c.fu = a.i;
        c.bc = OU();
        K(a.ma, 9) && (nQ(c), c.creatives = dV(/\b(?:creatives)=([\d,]+)/), c.adgroups = dV(/\b(?:adgroups)=([\d,]+)/), c.adgroups || c.sso) && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0);
        vj() && (c.atl = !0);
        c.bz = gf(a.pubWin);
        qV(a, c);
        rV(a, c);
        sV(a, c);
        tV(a, c);
        uV(a, c);
        vV(a, c);
        U(wt) && String(a.D.google_special_category_data) === "true" && (c.scd = 1);
        return c
    }
    const $U = /YtLoPri/;
    var xV = class extends O {};
    xV.O = [3];

    function yV(a) {
        return $h(a, xV, 15)
    }
    var Yh = class extends O {},
        zV = Ki(Yh);
    Yh.O = [15, 24];

    function AV() {
        var a = new BV;
        var b = new Hq;
        b = Bh(b, 2, tg(4));
        b = Bh(b, 8, tg(1));
        var c = new Np;
        c = Ai(c, 7, "#dpId");
        b = C(b, 1, c);
        return ci(a, 3, Hq, b)
    }
    var BV = class extends O {},
        CV = Ki(BV);
    BV.O = [3];
    var DV = Symbol(),
        EV = Symbol();
    var FV = class {
        constructor(a) {
            this.Ob = a.Ob ? ? [];
            this.Mg = a.Mg ? ? .1;
            this.Ce = !!a.Ce;
            this.Ee = !!a.Ee;
            this.Zb = a.Zb ? ? 0;
            this.fe = a.fe ? ? "";
            this.Qa = a.Qa ? ? "";
            this.ge = a.ge ? ? 15E3;
            this.he = a.he ? ? 0;
            this.De = a.De ? ? !0;
            this.re = a.re || "#0B57D0";
            this.Wc = a.Wc || "#FFFFFF";
            this.Fd = a.Fd ? ? 0;
            this.Vb = !!a.Vb;
            this.Ie = a.Ie ? ? [];
            this.Pe = !!a.Pe;
            this.ef = !!a.ef;
            this.Ed = a.Ed ? ? 0;
            this.Ge = !!a.Ge
        }
    };

    function GV(a, b) {
        a = Hv(Wu([...b], a), a);
        if (a.length !== 0) return a.reduce((c, d) => c.la.g > d.la.g ? c : d)
    };

    function HV(a, b, c, d, e, f, h, k) {
        var l = new um,
            m = new fm;
        c = Bi(m, 1, c);
        d = Bi(c, 2, d);
        b = M(d, 3, b);
        l = C(l, 1, b);
        b = new gm;
        b = Bi(b, 2, a.language);
        e = Bi(b, 3, e);
        e = C(l, 2, e);
        h = ti(e, 3, Math.round(h));
        c = yV(f);
        e = l = b = d = 0;
        for (n of c) d += IV(L(n, 6) !== "") + IV(L(n, 7) !== ""), b += IV(L(n, 6) !== "") + IV(L(n, 7) !== ""), l += IV(L(n, 6) !== ""), e += IV(L(n, 7) !== "");
        var n = new tm;
        n = qi(n, 1, c.length);
        n = qi(n, 2, d);
        n = Bh(n, 3, b == null ? b : xg(b));
        n = Bh(n, 4, l == null ? l : xg(l));
        n = Bh(n, 5, e == null ? e : xg(e));
        n = C(h, 6, n);
        if (k.length) f = new lm, f = ai(f, 1, k), E(n, 5, vm, f);
        else {
            a.g = a.entries.length;
            k = new sm;
            a = a.entries;
            h = k.U;
            e = h[y];
            ag(e);
            h = Zh(h, e, rm, 2, 2, !1, !0);
            l = e = 0;
            if (Array.isArray(a))
                for (var p = 0; p < a.length; p++) b = a[p], h.push(b), (b = Of(b.U)) && !e++ && (h[y] &= -9), b || l++ || (h[y] &= -17);
            else
                for (p of a) a = p, h.push(a), (a = Of(a.U)) && !e++ && (h[y] &= -9), a || l++ || (h[y] &= -17);
            f = yV(f).length;
            f = ti(k, 3, f);
            E(n, 4, vm, f)
        }
        return n
    }

    function JV(a, b) {
        const c = a.g;
        a.g = a.entries.length;
        var d = new Mm,
            e = new sm;
        a = ai(e, 2, a.entries.slice(c));
        b = yV(b).length;
        b = ti(a, 3, b);
        return C(d, 1, b)
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
            var c = V(ht);
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

    function TV(a) {
        return a.Dd > 0 && a.i.j >= a.Dd
    }
    var VV = class {
        constructor(a, b, c, d) {
            this.jf = b;
            this.je = c;
            this.Dd = d;
            this.g = 0;
            this.i = new UV(a)
        }
    };

    function WV(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            e > 0 && a.g.set(c, d.slice(e))
        }
    }

    function XV(a, b, c) {
        let d = [];
        a.g.has(b) && (d = a.g.get(b));
        d.push(c);
        a.i++;
        a.g.set(b, d)
    }
    class UV {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function YV(a) {
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

    function ZV(a, b) {
        a = $V(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z");
        x(a, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        return a
    }

    function aW(a, b, c, d) {
        a = $V(a, "0 -960 960 960", b, b, bW[d]);
        x(a, {
            fill: c || "white",
            cursor: "inherit"
        });
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function cW(a, b, c) {
        a = $V(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
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
    const bW = {
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

    function $V(a, b, c, d, e) {
        const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        x(e, lr(a));
        e.setAttribute("viewBox", b);
        e.setAttribute("width", c);
        e.setAttribute("height", d);
        YV(e);
        e.appendChild(f);
        return e
    };

    function dW(a, b, c, d) {
        const e = document.createElement("DIV");
        e.className = "google-anno-skip";
        d = a.getComputedStyle(d).fontSize || "16px";
        var f = e.appendChild,
            h = aW(a, d, b.R.Wc, b.g.get(c) || 0);
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
            color: b.R.Wc,
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: b.R.re,
            cursor: "pointer"
        });
        return e
    };
    const eW = [{
        lf: "1907259590",
        Hd: 480,
        Nc: 220
    }, {
        lf: "2837189651",
        Hd: 400,
        Nc: 180
    }, {
        lf: "9211025045",
        Hd: 360,
        Nc: 160
    }, {
        lf: "6584860439",
        Hd: -Infinity,
        Nc: 150
    }];

    function fW(a) {
        return eW.find(b => b.Hd <= a)
    };

    function gW(a, b) {
        return b ? a.replace("ca", "partner") : "pub-adfiliates-query-origin"
    };
    const hW = new class {
        constructor() {
            this.g = []
        }
    };
    let iW = !1;

    function jW(a) {
        kW(a.config, 1065, a.win, () => {
            if (!a.g) {
                var b = new Rm;
                b = ti(b, 1, a.i);
                var c = new Qm;
                b = E(b, 2, Sm, c);
                lW(a.config.L, b)
            }
        }, 1E4)
    }
    class mW {
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

    function nW(a, b, c, d, e, f, h = null) {
        const k = fW(a.document.body.clientWidth);
        d = b.ra ? oW(a, b, d, k, e, f, h) : pW(a, b, d, k, e, f, h);
        Eo(d.isVisible(), !1, () => {
            iW = !1;
            for (const m of hW.g) m();
            hW.g.length = 0
        });
        d.show({
            ag: !0
        });
        iW = !0;
        const l = new mW(a, b, c);
        jW(l);
        hW.g.push(() => {
            var m = b.L;
            var n = new Rm;
            n = ti(n, 1, c);
            var p = new Pm;
            n = E(n, 3, Sm, p);
            lW(m, n);
            l.g = !0
        })
    }

    function oW(a, b, c, d, e, f, h) {
        d = qW(a, b, c, e, f, {
            fi: d,
            bg: a.innerWidth,
            ti: "100%",
            ij: "15px",
            si: "13px",
            jj: "center",
            ih: 0
        }, h);
        return wB(a, d, {
            Ng: .95,
            jg: .95,
            zIndex: 2147483647,
            oc: !0,
            Ae: "adpub-drawer-root",
            ze: !1,
            Ma: !0,
            Fe: new R(rW(b.X, c))
        })
    }

    function pW(a, b, c, d, e, f, h) {
        a: {
            var k = b.R;
            var l = a.document.body.clientWidth;
            if (k.Fd) k = Math.min(l, k.Fd);
            else
                for (k = l * .9, l = l <= 768 ? 3 : 4; l >= 1; l--) {
                    const m = d.Nc * l + 42;
                    if (m <= k) {
                        k = m;
                        break a
                    }
                }
        }
        d = qW(a, b, c, e, f, {
            fi: d,
            bg: k,
            ti: "600px",
            ij: "24px",
            si: "24px",
            jj: "start",
            ih: 0
        }, h);
        return GA(a, d, {
            ld: `${k}px`,
            hd: b.Z(),
            Xc: L(b.X, 14),
            zIndex: 2147483647,
            oc: !0,
            dg: !0,
            Ae: "adpub-drawer-root",
            ze: !1,
            Ma: !0,
            Fe: new R(rW(b.X, c))
        })
    }

    function qW(a, b, c, d, e, f, h) {
        if (e === DV)
            if (b.R.Vb) {
                d = b.ra ? .95 * a.innerHeight - 30 : a.innerHeight;
                e = b.l;
                var k = f.bg,
                    l = d,
                    m = b.Z(),
                    n = !!K(b.X, 13),
                    p = b.R.Ie.join(","),
                    q = lz;
                m = "<style>#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans Text'; padding-bottom: 6px;" + (m ? "padding-right: 16px;" : "padding-left: 16px;") + '}</style><div id="gda-search-term">' + jz(c) + "</div>";
                n ? h = "" : (h = "<script data-ad-intent-query=" + wz(c) + " data-ad-intent-qetid=" + wz(h) + " data-ad-intent-eids=" +
                    wz(p) + ' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=', p = encodeURIComponent(String(e)), zz.lastIndex = 0, p = zz.test(p) ? p.replace(zz, Az) : p, h = h + p + '" crossorigin="anonymous">\x3c/script>');
                c = q(m + h + '<ins class="adsbygoogle" style="display:inline-block;width:' + uz(X(k)) + "px;height:" + uz(X(l - 30)) + 'px" data-ad-client="' + uz(e) + '"></ins><script>(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>' + (n ? "<script>const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " +
                    String(c).replace(Hz, Ez) + ' and " + "property code = ' + String(e).replace(Hz, Ez) + '";\x3c/script>' : ""));
                e = b.Z() ? "rtl" : "ltr";
                b = yd({
                    dir: e,
                    lang: L(b.X, 7),
                    style: Dd `margin:0px;height:100%;padding-top: ${f.ih}px;overflow: hidden;`
                }, gz(c));
                a = a.document.createElement("IFRAME");
                x(a, {
                    border: "0",
                    width: "100%",
                    height: d + "px"
                });
                a.srcdoc = fd(b)
            } else a = sW(a, b, c, d);
        else a = e.no(a, c, d);
        return a
    }

    function rW(a, b) {
        return L(a, 10).replace("TERM", b)
    }

    function sW(a, b, c, d) {
        const e = a.document.createElement("iframe");
        var f = b.X;
        const h = rW(f, c);
        f = new Tz(e, L(f, 16), "anno-cse", gW(b.l, K(f, 22)), "ShoppingVariant", a.location, L(f, 7), h, b.R.Ob.filter(k => k !== 42), !1, void 0, !0, void 0, !0, b.l);
        f.J();
        tW(a, b, e, c, f, d);
        return e
    }

    function tW(a, b, c, d, e, f) {
        const h = uW(b, a.top, function(k) {
            k.data.action === "init" && k.data.adChannel === "ShoppingVariant" && vW(a, b, c, e, d, f)
        });
        hW.g.push(() => {
            a.top.removeEventListener("message", h)
        })
    }

    function vW(a, b, c, d, e, f) {
        K(b.X, 13) || Sz(d, e, f);
        const h = c.contentDocument.documentElement,
            k = new ResizeObserver(() => {
                c.height = `${Math.ceil(h.offsetHeight+22)}px`
            });
        k.observe(h);
        const l = wW(b, 1066, a, () => {
            const m = h.offsetHeight;
            m && (c.height = `${m+22}px`)
        }, 1E3);
        hW.g.push(() => {
            k.disconnect();
            a.clearInterval(l)
        })
    };

    function xW(a, b, c) {
        b = b.getBoundingClientRect();
        a = qm(pm(new rm, a), 3);
        c = Bi(a, 4, c);
        c = ri(c, 6, Math.round(b.x));
        return ri(c, 7, Math.round(b.y))
    }

    function yW(a) {
        a = QV(a);
        var b = new nm;
        b = ri(b, 1, a[0]);
        b = ri(b, 2, a[1]);
        b = ri(b, 3, a[2]);
        return Qh(b, 4, og(a[3]), 0)
    };
    const zW = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function AW(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || zW.test(a)
        }
    };

    function BW(a, b) {
        const c = new CW(b);
        for (const d of a) L(d, 5) && Hh(d, 3, Pg).forEach(e => {
            DW(c, e, e)
        });
        EW(c);
        return new FW(c)
    }

    function GW(a, b) {
        b = a.match(b);
        a = new Map;
        for (const c of b)
            if (b = c.l, a.has(b)) {
                const d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return Array.from(a.values())
    }
    var FW = class {
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

    function DW(a, b, c) {
        const d = a.i.has(c) ? a.i.get(c) : a.l++;
        a.i.set(c, d);
        a.A.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.g[c].contains(f) || (a.g.push(new HW), a.g[a.size].A = c, a.g[a.size].B = f, a.g[c].j.set(f, a.size), a.size++);
            c = a.g[c].j.get(f)
        }
        a.g[c].l = !0;
        a.g[c].C = d;
        a.g[c].G = a.j.length;
        a.j.push(b.length)
    }

    function EW(a) {
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
    class CW {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.g = [new HW];
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
                    AW(d.charAt(l - 1), f) && AW(d.charAt(e + 1), f) && c.push(new IW(l, m, this.A.get(this.g[k].C)));
                    k = this.g[k].g
                }
            }
            return c
        }
    }
    class HW {
        constructor() {
            this.j = new Map;
            this.I = !1;
            this.ia = this.H = this.F = this.ca = this.M = this.T = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set A(a) {
            this.T = a
        }
        get A() {
            return this.T
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
    var IW = class {
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
    async function JW(a, b, c, d, e) {
        const f = BW(yV(b.X), b.i);
        if (!f.isEmpty()) {
            var h = new Map;
            for (const k of yV(b.X).filter(l => L(l, 5))) Hh(k, 3, Pg).forEach(l => {
                h.set(l, L(k, 1))
            });
            await KW(a, a.document.body, b, f, h, new Set, c, d, b.R.Ed ? new VV(0, 0, 0, b.R.Ed) : null, e)
        }
    }
    async function KW(a, b, c, d, e, f, h, k, l, m) {
        h.g.qa(9) >= h.i && await LV(h, 10);
        if (b.nodeType !== Node.ELEMENT_NODE || !b.classList ? .contains("google-anno-skip"))
            if (c.R.Pe && f.size && b.nodeType === Node.ELEMENT_NODE && LW(a, b) && b.parentElement && MW(a, f, c, k, b.parentElement, b, l), b.nodeType === Node.TEXT_NODE && b.textContent) GW(d, b.textContent).map(n => e.get(n.g)).filter(n => !!n).forEach(n => void f.add(n));
            else {
                for (const n of b.childNodes) await KW(a, n, c, d, e, f, h, k, l, m);
                f.size && b.nodeType === Node.ELEMENT_NODE && ["block", "table-cell"].includes(a.getComputedStyle(b).display) &&
                    MW(a, f, c, k, b, null, l)
            }
    }

    function MW(a, b, c, d, e, f, h) {
        for (const k of b) {
            if (h && TV(h)) return;
            const l = xW(c.L.Ze++, f ? ? e, k);
            d.entries.push(rh(l));
            h && XV(h.i, k, h.g);
            if (K(c.X, 17)) continue;
            const m = dW(a, c, k, e),
                n = NW(m, c, di(Mg(yh(l, 10)), "0"));
            OW(c, 999, m, p => {
                try {
                    if (c.Ta === EV) return !1;
                    var q = c.L,
                        t = Jm(wm(k), di(Mg(yh(l, 10)), "0"));
                    var w = si(t, 7, n.i);
                    const A = PW(q, w);
                    nW(a, c, A, k, c.C.get(k) || "", c.Ta);
                    return !1
                } finally {
                    p.preventDefault()
                }
            });
            e.insertBefore(m, f)
        }
        b.clear()
    }

    function LW(a, b) {
        return ["BR", "IMG", "TABLE"].includes(b.tagName) || a.getComputedStyle(b).display === "block"
    }
    class QW {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function NW(a, b, c) {
        const d = new QW;
        RW(b, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = c;
                    e = b.L;
                    var h = new am;
                    h = f = Qh(h, 1, Lg(f), "0");
                    f = e.handle;
                    var k = SW(e, 17);
                    h = E(k, 16, Um, h);
                    e = f.call(e, h);
                    d.g = e
                } else d.g && (e = b.L, f = new $l, h = f = ti(f, 1, d.g), f = e.handle, k = SW(e, 18), h = E(k, 17, Um, h), f.call(e, h), d.g = null)
        }).observe(a);
        return d
    };

    function TW(a, b, c, d, e, f) {
        if (!a.g) {
            var h = b.document.createElement("span");
            h.appendChild(ZV(b, "12px"));
            h.appendChild(b.document.createTextNode(d));
            ND(b, c || null, {
                informationText: h
            }, e, f ? k => {
                var l = f.handle,
                    m = SW(f, 20);
                k = E(m, 11, Um, k);
                l.call(f, k)
            } : f);
            a.g = !0
        }
    }
    var UW = class {
        constructor() {
            this.g = !1
        }
    };

    function VW(a, b) {
        const c = b.ra === b.Z;
        var d = WW(a, b, c);
        if (!d) return null;
        d = d.position.nd();
        a = XW(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.V - f.right : f.left
        });
        if (!a || a - 16 < 200) return null;
        const e = b.V;
        return {
            sa: c ? e - a : 16,
            Ca: c ? 16 : e - a,
            ga: d
        }
    }

    function YW(a, b) {
        const c = On(a),
            d = Pn(a);
        return gC(new kC(a), new yj(d - b.ga - 50, c - b.Ca, d - b.ga, b.sa)).size > 0
    }

    function WW(a, b, c) {
        b = Math.floor(b.W * .3);
        return b < 66 ? null : GC(a, {
            Tb: c ? MC({
                ga: 16,
                Ca: 16
            }) : KC({
                ga: 16,
                sa: 16
            }),
            Ue: b - 66,
            Ab: 50,
            Xe: 50,
            Cd: b,
            mb: 16
        }, [a.document.body]).me
    }

    function XW(a, b, c, d) {
        a = c.ra ? ZW(a, b, c) : $W(a, b, c);
        b = c.V;
        let e = c.ra ? b : b * .35;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return e < 16 ? null : e - 16
    }

    function ZW(a, b, c) {
        const d = c.W;
        return gC(new kC(a), new yj(d - b - 50, c.V - 16, d - b, 16))
    }

    function $W(a, b, c) {
        const d = c.W,
            e = c.V;
        c = c.Z;
        return gC(new kC(a), new yj(d - b - 50, (c ? e * .35 : e) - 16, d - b, (c ? 16 : e * .65) + 16))
    }

    function aX(a, b, c) {
        const d = a.Z;
        return {
            sa: d ? bX(a, b, c) : c,
            Ca: d ? c : bX(a, b, c),
            ga: 16
        }
    }

    function bX(a, b, c) {
        const d = a.V;
        return a.ra ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function cX(a, b) {
        const c = b.Z,
            d = b.V;
        a = b.ra ? ZW(a, 16, b) : $W(a, 16, b);
        return Array.from(a).map(e => new FC(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function dX(a, b, c, d, e, f, h, k, l) {
        x(c, {
            width: "50px",
            bottom: h ? h.ga + "px" : "16px",
            left: b.Z() === b.ra ? "" : h ? h.sa + "px" : "16px",
            right: b.Z() === b.ra ? h ? h.Ca + "px" : "16px" : ""
        });
        c.role = "button";
        c.ariaLabel = L(b.X, 20);
        x(e, {
            display: "none"
        });
        x(d, {
            display: "none"
        });
        const m = aW(a, "20px", b.R.Qa || "inherit", b.g.get(l.ya) || 0);
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
        OW(b, 1064, c, n => {
            k ? .();
            m.remove();
            x(c, {
                bottom: h ? h.ga + "px" : "16px",
                left: h ? h.sa + "px" : b.ra ? "16px" : b.Z() ? "16px" : "65%",
                right: h ? h.Ca + "px" : eX(b),
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

    function eX(a) {
        return a.Z() ? a.ra ? "16px" : "65%" : "16px"
    }

    function fX(a) {
        return {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (a.Z(), "50px"),
            right: a.Z() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: a.R.Qa || "#FFFFFF",
            cursor: "pointer",
            transition: "width 5s"
        }
    }

    function gX(a) {
        return {
            "margin-left": a ? "6px" : "4px",
            "margin-right": a ? "4px" : "6px",
            "margin-top": "12px"
        }
    }

    function hX(a, b, c) {
        a.tabIndex = 0;
        a.role = "link";
        a.ariaLive = "polite";
        a.ariaLabel = c.replace("TERM", b)
    };

    function iX(a, b, c, d, e, f, h, k, l) {
        const m = document.createElement("SPAN");
        x(m, lr(a));
        m.id = "gda";
        m.appendChild(cW(a, L(b.X, 18), b.R.Qa));
        OW(b, 1064, m, n => {
            h ? .();
            dX(a, b, c, d, m, e, f, k, l);
            n.preventDefault();
            n.stopImmediatePropagation();
            return !1
        });
        return m
    }

    function jX(a, b, c, d) {
        const e = document.createElement("SPAN");
        x(e, lr(a));
        YV(e);
        x(e, fX(b));
        b.ra || x(e, {
            "justify-content": ""
        });
        const f = aW(a, "20px", b.R.Qa, b.g.get(d.ya) || 0),
            h = document.createElement("SPAN");
        x(h, {
            display: "inline-block",
            cursor: "inherit"
        });
        x(h, gX(b.Z()));
        e.appendChild(h);
        h.appendChild(f);
        c.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        hX(c, d.ya, L(b.X, 19));
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
            color: b.R.Qa || "inherit"
        });
        OW(b, 999, e, k => {
            k.preventDefault();
            if (b.Ta !== EV && (d.Kf ? ? 0) + 800 <= b.qa(25)) {
                k = d.ya;
                const n = b.A.get(k) || "";
                var l = b.L;
                var m = Jm(wm(k), d.Ac);
                m = si(m, 3, d.wd);
                l = PW(l, m);
                nW(a, b, l, k, n, b.Ta, b.R.Vb ? b.j.get(k) || "" : null)
            }
            return !1
        });
        e.appendChild(c);
        return e
    }

    function kX(a) {
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

    function lX(a, b, c, d, e, f) {
        var h = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
        x(a.document.body, {
            "padding-bottom": (h && h.length ? Number(h[0]) : 0) + 66 + "px"
        });
        kX(a);
        h = document.createElement("div");
        x(h, lr(a));
        h.id = "google-anno-sa";
        h.dir = b.Z() ? "rtl" : "ltr";
        h.tabIndex = 0;
        var k = {
            background: b.R.fe || "#1A73E8",
            "border-style": "solid",
            bottom: d ? d.ga + "px" : "16px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: d ? d.sa + "px" : b.ra ? "16px" : b.Z() ? "16px" : "65%",
            right: d ?
                d.Ca + "px" : eX(b),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        };
        x(h, k);
        x(h, {
            fill: "white"
        });
        const l = document.createElement("SPAN");
        x(l, lr(a));
        x(l, {
            cursor: "inherit"
        });
        k = jX(a, b, l, c);
        a = iX(a, b, h, k, l, d, e, f, c);
        h.appendChild(k);
        h.appendChild(a);
        return h
    }

    function mX(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.ya);
        if ((d.g.get(e) || 0) !== (d.g.get(a.ya) || 0)) {
            b = aW(b, "20px", d.R.Qa, d.g.get(a.ya) || 0);
            for (var h of c.getElementsByClassName("google-anno-sa-intent-icon")) h.replaceWith(b)
        }
        c = a.ya;
        h = L(d.X, 19);
        f.ariaLabel = h.replace("TERM", c);
        d = d.L;
        f = new em;
        f = Bh(f, 2, Lg(a.Ac));
        f = Bi(f, 4, a.ya);
        a = d.handle;
        c = SW(d, 15);
        f = E(c, 6, Um, f);
        return a.call(d, f)
    }

    function nX(a, b, c, d) {
        if (YW(b, d)) return null;
        a.Kf = c.qa(24);
        d = lX(b, c, a, d, () => {
            var f = c.L;
            var h = new bm;
            h = Qh(h, 3, Lg(a.Ac), "0");
            var k = Bi(h, 2, a.ya);
            h = f.handle;
            var l = SW(f, 22);
            k = E(l, 12, Um, k);
            return h.call(f, k)
        }, () => {
            var f = c.L,
                h = new cm,
                k = f.handle,
                l = SW(f, 23);
            h = E(l, 13, Um, h);
            return k.call(f, h)
        });
        const e = mX(a, b, d, c, a.ya);
        b.document.body.appendChild(d);
        return e
    }

    function oX(a, b, c, d, e, f, h) {
        if (a.ya !== e || a.Ac !== d || a.g !== f) {
            if (a.wd !== null) {
                var k = a.wd,
                    l = c.L;
                var m = new dm;
                m = ti(m, 1, k);
                k = l.handle;
                var n = SW(l, 16);
                m = E(n, 7, Um, m);
                k.call(l, m)
            }
            l = a.ya;
            a.ya = e;
            a.Ac = d;
            a.g = f;
            K(c.X, 17) || (d = b.document.getElementById("google-anno-sa"), a.wd = d ? mX(a, b, d, c, l) : nX(a, b, c, h))
        }
    }
    var pX = class {
        constructor() {
            this.ya = "";
            this.Ac = null;
            this.g = "";
            this.Kf = this.wd = null
        }
    };

    function qX(a, b) {
        a.g >= a.i.length && (a.g = 0);
        if (iW) hW.g.push(() => void qX(a, b));
        else {
            var c = a.i[a.g++];
            a.j = !1;
            oX(a.A, a.win, a.config, c.i, c.g, c.j, a.l);
            kW(a.config, 898, a.win, () => void qX(a, b), a.sf)
        }
    }
    var rX = class {
        constructor(a, b, c) {
            var d = new pX;
            this.win = a;
            this.config = b;
            this.A = d;
            this.l = c;
            this.i = [];
            this.j = !0;
            this.g = 0;
            this.sf = b.params.sf
        }
    };
    class sX {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.j = c
        }
    };

    function tX(a, b, c, d, e) {
        c.forEach(f => {
            var h = a.L.Ze++;
            h = qm(pm(new rm, h), 1);
            h = Bi(h, 4, f);
            d.entries.push(rh(h));
            h = di(Mg(yh(h, 10)), "0");
            e.i.push(new sX(h, f, f));
            e.j && qX(e, b)
        })
    };
    const uX = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function vX(a, b, c, d, e) {
        d.g.qa(5) >= d.i && await LV(d, 6);
        if (!c.R.Ce) {
            const f = yV(c.X);
            f.length && wX(a, b, c, e, f)
        }
        c.R.De || await c.na(898, JW(a, c, d, e, b));
        c.R.Ee || await xX(a, c, () => new UW, d, e)
    }
    async function xX(a, b, c, d, e) {
        var f = yV(b.X);
        var h = new CW(b.i);
        for (const k of f) L(k, 6) !== "" && (f = L(k, 1), DW(h, f, f));
        EW(h);
        h = new FW(h);
        h.isEmpty() || await b.na(898, yX(a, b, d, e, h, new VV(b.params.Uj, b.params.jf, b.params.je, b.params.Dd), c()))
    }
    async function yX(a, b, c, d, e, f, h) {
        var k = a.document.body;
        if (K(b.X, 17) || z(b.X, zq, 21))
            for (; k;) {
                c.g.qa(7) >= c.i && await LV(c, 8);
                if (k.nodeType === Node.TEXT_NODE && k.textContent !== "" && k.parentElement) {
                    var l = k.parentElement;
                    a: {
                        var m = a;
                        var n = b,
                            p = l,
                            q = k.textContent,
                            t = d,
                            w = e,
                            A = f;
                        const fb = [];b: {
                            var D = q;
                            switch (n.i) {
                                case 1:
                                    var G = Array(D.length),
                                        I = 0;
                                    for (var B = 0; B < D.length; B++) zW.test(D[B]) || I++, G[B] = I;
                                    D = G;
                                    break b;
                                default:
                                    G = Array(D.length);
                                    for (B = I = 0; B < D.length;) {
                                        for (;
                                            /\s/.test(D[B]);) G[B] = I, B++;
                                        for (var J = !1; B < D.length &&
                                            !/\s/.test(D[B]);) J = !0, G[B] = I, B++;
                                        J && (I++, G[B - 1] = I)
                                    }
                                    D = G
                            }
                        }
                        w = q.includes("\u00bb") ? [] : GW(w, q);I = -1;
                        for (const gb of w)
                            if (w = gb.l, G = gb.A, !(n.R.ef && w < I)) {
                                B = A;
                                var H = gb.g;
                                WV(B.i, B.g + D[w]);
                                J = B;
                                var aa = J.i;
                                if ((aa.g.has(H) ? aa.g.get(H).length : 0) < J.jf && B.i.j < B.je) {
                                    B = m.getComputedStyle(p);
                                    J = B.fontSize.match(/\d+/);
                                    if (!(J && Number(J[0]) >= 12 && Number(J[0]) <= 22 && $a(uX, B.display))) {
                                        A.g += D[D.length - 1];
                                        m = [];
                                        break a
                                    }
                                    I += 1;
                                    I < w && fb.push(m.document.createTextNode(q.substring(I, w)));
                                    I = q.substring(w, G + 1);
                                    B = q;
                                    J = w;
                                    aa = G + 1;
                                    aa = B.substring(Math.max(J -
                                        30, 0), J) + "~~" + B.substring(aa, Math.min(aa + 30, B.length));
                                    J = m;
                                    var bb = n.L.Ze++;
                                    B = p;
                                    var xa = I,
                                        fa = aa,
                                        la = gb.g;
                                    H = D[w];
                                    aa = B.getBoundingClientRect();
                                    bb = qm(pm(new rm, bb), 2);
                                    xa = Bi(bb, 2, xa);
                                    xa = Bi(xa, 3, fa);
                                    la = Bi(xa, 4, la);
                                    H = ri(la, 5, H);
                                    H = ri(H, 6, Math.round(aa.x));
                                    aa = ri(H, 7, Math.round(aa.y));
                                    J = J.getComputedStyle(B);
                                    H = new om;
                                    H = Bi(H, 1, J.fontFamily);
                                    la = yW(J.color);
                                    H = C(H, 7, la);
                                    la = yW(J.backgroundColor);
                                    H = C(H, 8, la);
                                    la = J.fontSize.match(/^(\d+(\.\d+)?)px$/);
                                    H = ri(H, 4, la ? Math.round(Number(la[1])) : 0);
                                    la = Math.round(Number(J.fontWeight));
                                    isNaN(la) || la === 400 || ri(H, 5, la);
                                    J.textDecorationLine !== "none" && Bi(H, 6, J.textDecorationLine);
                                    J = C(aa, 8, H);
                                    aa = [];
                                    for (xa = B; xa && aa.length < 20;) {
                                        B = aa;
                                        H = B.push;
                                        la = xa;
                                        fa = new mm;
                                        fa = Bi(fa, 1, la.tagName);
                                        la.className !== "" && Ph(fa, 2, la.className.split(" "), Ng);
                                        H.call(B, fa);
                                        if (xa.tagName === "BODY") break;
                                        xa = xa.parentElement
                                    }
                                    B = aa.reverse();
                                    B = ai(J, 9, B);
                                    t.entries.push(rh(B));
                                    fb.push(zX(m, n, di(Mg(yh(B, 10)), "0"), gb.g, I, p));
                                    XV(A.i, gb.g, A.g + D[w]);
                                    I = G;
                                    if (TV(A)) break
                                }
                            }
                        n = I + 1;n !== 0 && n < q.length && fb.push(m.document.createTextNode(q.substring(n)));
                        A.g += D[D.length - 1];m = fb
                    }
                    if (m.length && !K(b.X, 17)) {
                        !b.R.Vb && TW(h, a, b.params.Zf ? GV(a, b.params.Zf) : void 0, L(b.X, 3), z(b.X, zq, 21).i(), b.L);
                        for (const fb of m) l.insertBefore(fb, k), AX(fb);
                        l.removeChild(k);
                        for (k = m[m.length - 1]; k.lastChild;) k = k.lastChild;
                        if (TV(f)) break
                    }
                }
                a: {
                    l = f;m = b.i;
                    if (k.firstChild && (k.nodeType !== Node.ELEMENT_NODE ? 0 : !k.classList ? .contains("google-anno-skip") && k.offsetHeight)) {
                        b: {
                            switch (k.tagName ? .toUpperCase ? .()) {
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
                                    q = !1;
                                    break b
                            }
                            q = !(k.className.toUpperCase ? .() ? .includes("CRUMB") || k.id.toUpperCase ? .() ? .includes("CRUMB"))
                        }
                        if (q) {
                            k = k.firstChild;
                            break a
                        }
                        if (k.textContent ? .length) {
                            b: switch (q = k.textContent, m) {
                                case 1:
                                    m = q;
                                    q = 0;
                                    for (A = m.length - 1; A >= 0; A--) zW.test(m[A]) || q++;
                                    m = q;
                                    break b;
                                default:
                                    m = q.trim(), m = m === "" ? 0 : m.split(/\s+/).length
                            }
                            WV(l.i, l.g + m)
                        }
                    }
                    for (;;) {
                        if (k.nextSibling) {
                            k = k.nextSibling;
                            break a
                        }
                        if (!k.parentNode) {
                            k = null;
                            break a
                        }
                        k = k.parentNode
                    }
                    k = void 0
                }
            }
    }

    function BX(a, b) {
        b = {
            Z: b.Z(),
            ra: b.ra,
            V: On(a),
            W: Pn(a)
        };
        if (b.W >= 400) {
            var c;
            if ((c = VW(a, b)) != null) var d = c;
            else a: {
                c = b.V;
                var e = cX(a, b);a = 16;
                for (d of e) {
                    e = d.start;
                    const f = d.end;
                    if (e > a) {
                        if (e - a - 16 >= 200) {
                            d = aX(b, e, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                d = c - a - 16 >= 200 ? aX(b, c, a) : null
            }
        } else d = null;
        return d
    }

    function wX(a, b, c, d, e) {
        function f() {
            return k ? ? (k = wW(c, 898, a, () => {
                h || (a.clearInterval(k), h = !0, CX(a, b, c, d, e), DX(c.L, JV(d, c.X)))
            }, c.R.Zb))
        }
        let h = !1,
            k = void 0;
        const l = EX(c, a, () => {
            (c.R.Ge ? a : window).scrollY <= c.R.he || h || (c.R.Zb > 0 && !BX(a, c) ? k = f() : (h = !0, a.removeEventListener("scroll", l), CX(a, b, c, d, e), DX(c.L, JV(d, c.X))))
        });
        kW(c, 898, a, () => {
            h || (c.R.Zb > 0 && !BX(a, c) ? k = f() : (h = !0, CX(a, b, c, d, e), DX(c.L, JV(d, c.X))))
        }, c.R.ge)
    }

    function CX(a, b, c, d, e) {
        e = e.filter(h => L(h, 7).length).map(h => L(h, 1));
        if (e.length !== 0) {
            var f = BX(a, c);
            f && tX(c, b, e, d, new rX(a, c, f))
        }
    }

    function AX(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if (a.tagName === "A") {
                var b = SV(QV(getComputedStyle(a.parentElement).color)),
                    c = SV(QV(getComputedStyle(a).color));
                var d = RV(a);
                if (d = b && c && d ? JM(c, d) < Math.min(JM(b, d), 2.5) ? b : null : b) {
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
            for (b = 0; b < a.childElementCount; b++) AX(a.children[b])
        }
    }
    class FX {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function zX(a, b, c, d, e, f) {
        const h = a.document.createElement("SPAN");
        h.className = "google-anno-t";
        YV(h);
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
        YV(e);
        x(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        Pd(e);
        e.className = "google-anno";
        e.appendChild(ZV(a, a.getComputedStyle(f).fontSize));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(h);
        const k = GX(b, c, e);
        OW(b, 999, e, l => {
            try {
                if (b.Ta === EV) return !1;
                var m = b.L,
                    n = Jm(wm(d), c);
                var p = si(n, 2, k.i);
                const q = PW(m, p);
                nW(a, b, q, d, b.B.get(d) || "", b.Ta, b.R.Vb ? b.j.get(d) || "" : null);
                return !1
            } finally {
                l.preventDefault(), l.stopImmediatePropagation()
            }
        });
        return e
    }

    function GX(a, b, c) {
        const d = new FX;
        RW(a, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = b;
                    e = a.L;
                    var h = new Om;
                    h = f = Qh(h, 2, Lg(f), "0");
                    f = e.handle;
                    var k = SW(e, 13);
                    h = E(k, 4, Um, h);
                    e = f.call(e, h);
                    d.g = e
                } else d.g && (e = a.L, f = new Nm, h = f = ti(f, 1, d.g), f = e.handle, k = SW(e, 14), h = E(k, 5, Um, h), f.call(e, h), d.g = null)
        }).observe(c);
        return d
    };

    function lW(a, b) {
        var c = a.handle,
            d = SW(a, 19);
        b = E(d, 9, Um, b);
        c.call(a, b)
    }

    function PW(a, b) {
        var c = a.handle,
            d = SW(a, 12);
        b = E(d, 8, Um, b);
        return c.call(a, b)
    }

    function DX(a, b) {
        var c = a.handle,
            d = SW(a, 11);
        b = E(d, 14, Um, b);
        c.call(a, b)
    }

    function SW(a, b) {
        var c = new Tm;
        var d = a.C++;
        c = ti(c, 1, d);
        b = ti(c, 2, Math.round(a.g.qa(b) - a.i));
        b = C(b, 10, a.j);
        return pi(b, 15, a.l ? !0 : void 0)
    }
    var HX = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.i = b;
            this.j = c;
            this.l = d;
            this.Ze = this.C = 1;
            this.A = [...e]
        }
        handle(a) {
            for (const b of this.A) b(a);
            return ii(a, 1)
        }
    };

    function kW(a, b, c, d, e) {
        c.setTimeout(IX(a, b, d), e)
    }

    function uW(a, b, c) {
        a = IX(a, 999, c);
        b.addEventListener("message", a);
        return a
    }

    function wW(a, b, c, d, e) {
        return c.setInterval(IX(a, b, d), e)
    }

    function OW(a, b, c, d) {
        c.addEventListener("click", IX(a, b, d))
    }

    function RW(a, b) {
        return new IntersectionObserver(IX(a, 1065, b), {
            threshold: .98
        })
    }

    function EX(a, b, c) {
        a = IX(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function IX(a, b, c) {
        return a.Ia.Da(b, c, void 0, d => {
            d.es = a.R.Ob.join(",")
        })
    }
    var KX = class {
        constructor(a, b, c, d, e, f, h, k, l, m) {
            this.l = a;
            this.ra = b;
            this.X = c;
            this.Ia = d;
            this.L = e;
            this.ta = f;
            this.G = h;
            this.params = k;
            this.R = l;
            this.Ta = m;
            this.B = new Map;
            this.A = new Map;
            this.C = new Map;
            this.g = new Map;
            this.j = new Map;
            this.i = $a(JX, L(c, 7)) ? 1 : 0;
            for (const n of yV(this.X)) F(n, 6) != null && this.B.set(L(n, 1), L(n, 6)), F(n, 7) != null && this.A.set(L(n, 1), L(n, 7)), F(n, 5) != null && this.C.set(L(n, 1), L(n, 5)), gi(n, 10) != null && this.g.set(L(n, 1), ki(n, 10)), F(n, 11) != null && this.j.set(L(n, 1), L(n, 11))
        }
        na(a, b) {
            this.Ia.na(a, b, c => {
                c.es = this.R.Ob.join(",")
            });
            return b
        }
        qa(a) {
            return this.G.qa(a)
        }
        Z() {
            return ki(this.X, 12) === 2
        }
    };
    const JX = ["ja", "zh_CN", "zh_TW"];

    function LX(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function MX(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function NX() {
        const a = new Set,
            b = ay();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function OX(a) {
        a = a.id;
        return a != null && (NX().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function PX(a, b, c) {
        if (!a.sources) return !1;
        switch (QX(a)) {
            case 2:
                const d = RX(a);
                if (d) return c.some(f => SX(d, f));
                break;
            case 1:
                const e = TX(a);
                if (e) return b.some(f => SX(e, f))
        }
        return !1
    }

    function QX(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function TX(a) {
        return UX(a, b => b.currentRect)
    }

    function RX(a) {
        return UX(a, b => b.previousRect)
    }

    function UX(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function SX(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function VX() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(OX),
            b = [...NX()].map(c => document.getElementById(c)).filter(c => c !== null);
        WX = window.scrollX;
        XX = window.scrollY;
        return YX = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function ZX(a, b) {
        const c = WX !== window.scrollX || XX !== window.scrollY ? [] : YX,
            d = VX();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                $X(a, e, c, d);
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
                a.g.some(f => f.entries.some(h => e.duration === h.duration && e.startTime === h.startTime)) || aY(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.B +=
                    b;
                a.H = Math.max(a.H, b);
                a.ca += 1;
                break;
            case "event":
                aY(a, e);
                break;
            default:
                Rd(b, void 0)
        }
    }

    function bY(a) {
        a.A || (a.A = new PerformanceObserver(Fu(640, b => {
            ZX(a, b)
        })));
        return a.A
    }

    function cY(a) {
        const b = Fu(641, () => {
                KO(document) === 2 && dY(a)
            }),
            c = Fu(641, () => void dY(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.ua = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            bY(a).disconnect()
        }
    }

    function dY(a) {
        if (!a.Af) {
            a.Af = !0;
            bY(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += MX("cls", a.G), b += MX("mls", a.I), b += LX("nls", a.T), window.LayoutShiftAttribution && (b += MX("cas", a.C), b += LX("nas", a.zf), b += MX("was", a.Rf)), b += MX("wls", a.ia), b += MX("tls", a.Pf));
            window.LargestContentfulPaint && (b += LX("lcp", a.Bb), b += LX("lcps", a.ib));
            window.PerformanceEventTiming && a.Ka && (b += LX("fid", a.Fa));
            window.PerformanceLongTaskTiming && (b += LX("cbt", a.B),
                b += LX("mbt", a.H), b += LX("nlt", a.ca));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) OX(c) && d++;
            b += LX("nif", d);
            b += LX("ifi", dk(window));
            c = P(xn).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${u===u.top?1:0}`;
            b += a.Cf ? `&${"qqid"}=${encodeURIComponent(a.Cf)}` : LX("pvsid", cf(u));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.A ? a.hb : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += LX("inp", c)));
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

    function $X(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.G += Number(b.value);
            Number(b.value) > a.I && (a.I = Number(b.value));
            a.T += 1;
            if (c = PX(b, c, d)) a.C += b.value, a.zf++;
            if (b.startTime - a.Mc > 5E3 || b.startTime - a.Bf > 1E3) a.Mc = b.startTime, a.i = 0, a.j = 0;
            a.Bf = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.ia && (a.ia = a.i, a.Rf = a.j, a.Pf = b.startTime + b.duration)
        }
    }

    function aY(a, b) {
        eY(a, b);
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

    function eY(a, b) {
        b.interactionId && (a.M = Math.min(a.M, b.interactionId), a.l = Math.max(a.l, b.interactionId), a.hb = a.l ? (a.l - a.M) / 7 + 1 : 0)
    }
    var fY = class {
            constructor() {
                this.j = this.i = this.T = this.I = this.G = 0;
                this.Bf = this.Mc = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.F = {};
                this.hb = 0;
                this.M = Infinity;
                this.Fa = this.ib = this.Bb = this.zf = this.Rf = this.C = this.Pf = this.ia = this.l = 0;
                this.Ka = !1;
                this.ca = this.H = this.B = 0;
                this.A = null;
                this.Af = !1;
                this.ua = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Cf = a ? a.getAttribute("data-google-query-id") : null;
                this.ji = {
                    bi: !1
                }
            }
            observe() {
                var a = window;
                if (!a.google_plmetrics && window.PerformanceObserver) {
                    a.google_plmetrics = !0;
                    a = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    this.ji.bi && a.push("event");
                    for (const b of a) a = {
                        type: b,
                        buffered: !0
                    }, b === "event" && (a.durationThreshold = 40), bY(this).observe(a);
                    cY(this)
                }
            }
        },
        WX, XX, YX = [];
    async function gY(a, b, c, d, e, f, h, k) {
        var l = W,
            m = ew,
            n = ((k = mO(new qO(a), "__gads", k)) ? Ee(k + "t2Z7mVic") % 20 : null) ? ? Math.floor(Be() * 20);
        k = f.qa(0);
        const p = On(a) < 488,
            q = c.X;
        var t = c.R;
        n = Km(n);
        t = Rh(n, t.Ob);
        e = new HX(f, k, t, K(q, 17), e);
        l = new KX(d, p, q, l, e, m, f, c.params, c.R, c.Ta);
        d = new KV;
        b = await hY(a, a.document, b, l, h, d);
        c = HV(d, p, c.Zc, a.location.hostname, c.Ni, q, f.qa(11) - k, b);
        a = e.handle;
        f = SW(e, 11);
        c = E(f, 3, Um, c);
        a.call(e, c)
    }
    async function hY(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !iY(b)) return [im()];
        e.g.qa(3) >= e.i && await LV(e, 4);
        b = (b = L(d.X, 7)) ? (b = b.match(/^[a-z]{2,3}/i)) ? b[0].toLowerCase() : "" : "";
        f.language = b;
        b = [];
        if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) {
            var h = b.push;
            var k = new jm;
            var l = new hm;
            k = E(k, 3, km, l);
            h.call(b, k)
        }
        b.length || await vX(a, c, d, e, f);
        return b
    }

    function iY(a) {
        try {
            (new ResizeObserver(() => {})).disconnect(), (new MutationObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    }

    function jY() {
        var a = V(lt),
            b = W;
        if (Math.random() < a) try {
            (new fY).observe()
        } catch (c) {
            b.ba(1161, c instanceof Error ? c : Error("Unknown error."))
        }
    };
    async function kY(a, b, c, d, e, f, h) {
        bc() || (jY(), d.push(async () => {
            delete window.google_plmetrics
        }));
        U(at) || (a = await lY(a, b, c, d, e, f, h), a.pb.length && mY(b, c, h, a))
    }
    async function lY(a, b, c, d, e, f, h) {
        const k = a.performance ? .now ? new NV(a.performance) : new OV;
        a = new MV(a, k);
        if (typeof e !== "string") return e = new jm, b = new hm, {
            Sa: null,
            pb: [E(e, 12, km, b)]
        };
        const l = CV(e);
        e = Xh(l);
        if (!b) return b = new jm, d = new hm, b = E(b, 9, km, d), {
            Sa: e,
            pb: [b]
        };
        const m = c.google_ad_client;
        if (typeof m !== "string") return b = new jm, d = new hm, b = E(b, 11, km, d), {
            Sa: e,
            pb: [b]
        };
        if (ac()) return {
            Sa: e,
            pb: [im()]
        };
        if (Ge()) return b = new jm, d = new hm, b = E(b, 13, km, d), {
            Sa: e,
            pb: [b]
        };
        var n = U(Us) ? P(cF) : null;
        c = nY(c);
        var p = oY(e);
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
        q = q || Xh(l);
        t = l.U;
        t = Zh(t, t[y], Hq, 3, 1);
        t = {
            Uj: V(gt),
            jf: V(kt),
            je: V(it),
            Dd: V(jt),
            Zf: t,
            sf: V(mt)
        };
        h = {
            X: q,
            Zc: c,
            Ni: h,
            params: t,
            R: new FV({
                Ob: p,
                Mg: V(lt),
                Ce: U(Is),
                Ee: U(Ks),
                Zb: V(Ds),
                fe: Vt(Ls),
                Qa: Vt(Ms),
                ge: V(et),
                he: V(ft),
                De: U(Js),
                re: Vt(Fs),
                Wc: Vt(Gs),
                Fd: V(Ws),
                Vb: U(bt),
                Ie: Wt(Os),
                Pe: U(Rs),
                ef: U(Zs),
                Ed: V(Vs),
                Ge: U(Es)
            }),
            Ta: DV
        };
        await pY(b, d, n, h, m, k, a, f);
        return {
            Sa: e,
            pb: []
        }
    }

    function oY(a) {
        const b = P(xn).g();
        a && b.push(...Hh(a, 24, wg));
        b.push(...Wt(dt).map(Number));
        b.push(42);
        b.sort((c, d) => c - d);
        return b
    }

    function mY(a, b, c, d) {
        a = HV(new KV, !!a && On(a) < 488, nY(b), a ? .location ? .hostname ? ? "", c, d.Sa ? ? new Yh, 0, d.pb);
        c = Math.floor(Be() * 20);
        b = new Tm;
        b = ti(b, 1, 1);
        b = ti(b, 2, 0);
        c = Km(c);
        var e = oY(d.Sa);
        c = Rh(c, e);
        b = C(b, 10, c);
        a = E(b, 3, Um, a);
        qY(U(Us) ? P(cF) : null, a, Date.now(), d.Sa)
    }
    async function pY(a, b, c, d, e, f, h, k) {
        const l = Uz(a);
        l.wasReactiveAdConfigReceived[42] || (l.wasReactiveAdConfigReceived[42] = !0, await gY(a, b, d, e, [m => {
            qY(c, m, f.qa(21), d.X)
        }], f, h, k))
    }

    function qY(a, b, c, d) {
        a && W.na(1214, gF(a, b, c), e => {
            e.es = oY(d).join(",")
        })
    }

    function nY(a) {
        a = a.google_page_url;
        return typeof a === "string" ? a : ""
    };
    const rY = (a, b) => {
        const c = ze("STYLE", a);
        c.textContent = cd(qd `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    };
    var tY = (a, b, c) => {
        if (!a.body) return null;
        const d = new sY;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && rY(b.document, e);
            Nj(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.j,
                position: d.l,
                top: d.A
            });
            b.scrollTo(0, d.i)
        }
    };
    class sY {
        constructor() {
            this.g = this.A = this.l = this.j = null;
            this.i = 0
        }
        apply(a, b) {
            this.j = a.body.style.overflow;
            this.l = a.body.style.position;
            this.A = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.i = Xn(b);
            Nj(a.body, "top", -this.i + "px")
        }
    };

    function uY(a, b) {
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
    var vY = class extends Q {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.M = b;
            this.B = c;
            this.j = null;
            so(this, () => this.j = null)
        }
        H(a) {
            return this.B === a
        }
    };

    function wY(a, b) {
        const c = a.B;
        c && (b ? (cA(a.F), x(c, {
            display: "block"
        }), a.A.body && !a.l && (a.l = tY(a.A, a.M, a.T)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.A.body.setAttribute("aria-hidden", "true")) : (dA(a.F), x(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function xY(a) {
        wY(a, !1);
        const b = a.B;
        if (b) {
            var c = yY(a.I);
            uY(a, d => {
                x(d, c);
                ao(d)
            });
            a.g.setAttribute("width", "");
            a.g.setAttribute("height", "");
            Nj(a.g, c);
            Nj(a.g, zY);
            Nj(b, AY);
            Nj(b, {
                background: "transparent"
            });
            x(b, {
                display: "none",
                position: "fixed"
            });
            ao(b);
            ao(a.g);
            hf(a.I) <= 1 || (Nj(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Ue(b))
        }
    }
    class BY extends vY {
        constructor(a, b, c) {
            var d = V(Gt);
            super(a, b, c);
            this.l = null;
            this.A = b.document;
            this.T = d;
            this.F = Xz(new bA(b), 2147483646);
            this.I = b
        }
    }

    function yY(a) {
        a = hf(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var AY = {
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
        zY = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var CY = class extends BY {
        constructor(a, b, c) {
            super(b, a, c);
            xY(this)
        }
        H(a) {
            return a.classList.contains("adsbygoogle")
        }
    };
    const DY = {
        [1]: "closed",
        [2]: "granted",
        [3]: "cancelled"
    };
    async function EY(a, b, c, d) {
        a = new FY(a, b, c, d);
        await a.J();
        return a
    }

    function GY(a) {
        return setTimeout(hw(728, () => {
            HY(() => {
                a.A.reject()
            });
            a.dispose()
        }), V(xt) * 1E3)
    }

    function IY(a, b) {
        var c = OM(a.g).then(() => {
            clearTimeout(b);
            a.A.resolve()
        });
        W.na(1005, c);
        c = PM(a.g).then(d => {
            JY(a, DY[d.status])
        });
        W.na(1006, c);
        c = QM(a.g).then(() => {
            JY(a, "error")
        });
        W.na(1004, c)
    }

    function KY(a) {
        if (U(yt)) {
            a.win.location.hash !== "" && iw("pub_hash", {
                o_url: a.win.location.href
            }, .1);
            a.win.location.hash = "goog_fullscreen_ad";
            var b = hw(950, c => {
                c.oldURL.endsWith("#goog_fullscreen_ad") && (a.l === 10 ? JY(a, "closed") : a.g.ue.postMessage(JSON.stringify({
                    eventType: "backButton",
                    googMsgType: "fullscreen"
                }), "*"), a.win.removeEventListener("hashchange", b))
            });
            a.win.addEventListener("hashchange", b);
            so(a, () => {
                a.win.removeEventListener("hashchange", b);
                a.win.location.hash === "#goog_fullscreen_ad" && a.win.history.back()
            })
        }
    }

    function HY(a) {
        try {
            a()
        } catch (b) {}
    }

    function JY(a, b) {
        wY(a.F, !1);
        a.j && HY(() => {
            a.j(b)
        });
        a.dispose()
    }
    var FY = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.B = b;
            this.H = c;
            this.l = d;
            this.j = null;
            this.F = new CY(a, c, b);
            a = new SM(this.l === 10 ? 1 : 2, this.win, this.H.contentWindow);
            a.J();
            this.g = a;
            this.A = new OK;
            this.B.dataset["slotcar" + (this.l === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async J() {
            const a = GY(this);
            IY(this, a);
            so(this, () => {
                this.g.dispose();
                clearTimeout(a);
                fe(this.B)
            });
            await this.A.promise
        }
        show(a) {
            this.C || (this.j = a, wY(this.F, !0), u.IntersectionObserver || this.g.ue.postMessage(JSON.stringify({
                eventType: "visible",
                googMsgType: "fullscreen"
            }), "*"), KY(this))
        }
        disposeAd() {
            this.dispose()
        }
    };

    function LY({
        Uf: a,
        Zg: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function MY(a, b) {
        a.nf(c => {
            c.shv = String(b);
            c.mjsv = LY({
                Uf: tE(),
                Zg: b
            });
            c.eid = mQ(u)
        })
    };

    function NY(a) {
        var b = W;
        try {
            return Gi(a, Ik), new VP(JSON.parse(a))
        } catch (c) {
            b.ba(838, c instanceof Error ? c : Error(String(c)))
        }
        return new VP
    };
    const OY = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.Ra({
                    jc: c ? ? void 0,
                    fg: d ? void 0 : 2
                })
            })
        },
        PY = {
            yd: a => a.Ra,
            Bc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Pb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    jc: b.returnValue ? ? void 0,
                    fg: b.success ? void 0 : 2
                })
            }
        };

    function QY(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            df: b.__uspapiReturn.callId
        }
    }

    function RY(a, b) {
        let c = {};
        if (xF(a.caller)) {
            var d = Ab(() => {
                b(c)
            });
            zF(a.caller, "getDataWithCallback", {
                Ra: e => {
                    e.fg || (c = e.jc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var SY = class extends Q {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new AF(a, "__uspapiLocator", b => typeof b.__uspapi === "function", QY);
            this.caller.B.set("getDataWithCallback", OY);
            this.caller.A.set("getDataWithCallback", PY)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };

    function TY(a, b, c, d) {
        const e = new OK;
        let f = "";
        const h = l => {
            try {
                const m = typeof l.data === "object" ? l.data : JSON.parse(l.data);
                f === m.paw_id && (Hb(a, "message", h), m.error ? e.reject(Error(m.error)) : e.resolve(d(m)))
            } catch (m) {}
        };
        var k = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (k) return Gb(a, "message", h), f = c(k), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers :
            void 0;
        return c ? (f = String(Math.floor(Be() * 2147483647)), Gb(a, "message", h), b(c, f), e.promise) : null
    }

    function UY(a) {
        return TY(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };
    const VY = (a, b) => {
        try {
            const l = K(b, 6) === void 0 ? !0 : K(b, 6);
            var c = Vi(ki(b, 2)),
                d = L(b, 3);
            a: switch (ki(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Xi(c, d, e),
                h = z(b, Qi, 5) ? .g() ? ? "";
            f.xc = h;
            f.g = l;
            f.win = a;
            var k = f.build();
            Oi(k)
        } catch {}
    };

    function WY(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? VY(a, b) : Gb(a, "load", () => void VY(a, b)))
    };

    function XY(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function YY(a) {
        if (a === a.top || ue(a.top)) return Promise.resolve({
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
        if (a.parent === a.top && XY(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new OK;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                qc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function LE() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), ef(V(st), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function ZY(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function $Y({
        ma: a,
        xa: b,
        Wa: c,
        slot: d
    }) {
        const e = d.vars,
            f = xe(d.pubWin),
            h = ZY(d),
            k = new oQ({
                K: f,
                pubWin: d.pubWin,
                D: e,
                ma: a,
                xa: b,
                Wa: c,
                ea: h
            });
        k.H = Date.now();
        xj(1, [k.D]);
        gw(1032, () => {
            if (f && U(Rt)) {
                var l = k.D;
                CE(xE(), 32, !1) || (DE(xE(), 32, !0), TU(f, l.google_loader_used === "sd" ? 5 : 9))
            }
        });
        try {
            await aZ(k)
        } catch (l) {
            if (!W.ba(159, l, void 0, void 0)) throw l;
        }
        gw(639, () => {
            var l;
            var m = k.D;
            (l = k.K) && m.google_responsive_auto_format === 1 && m.google_full_width_responsive_allowed === !0 ? (m = (m = l.document.getElementById(m.google_async_iframe_id)) ?
                le(m, "INS", "adsbygoogle") : null) ? (l = new OP(l, m), l.g = u.setInterval(Ia(l.i, l), 500), l.i(), l = !0) : l = !1 : l = !1;
            return l
        });
        f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? jw(1008, bZ(d.pubWin, f, e, k.j, Di(AV()), k.g, L(a, 8)), l => {
            l.es = oY(null).join(",")
        }) : LM(k.pubWin, "affa", l => {
            jw(1008, bZ(d.pubWin, f, e, k.j, l.config, k.g, L(a, 8)), m => {
                m.es = oY(null).join(",")
            });
            return !0
        });
        cZ(k);
        return k
    }
    async function bZ(a, b, c, d, e, f, h) {
        await kY(a, b, c, d, e, f, h)
    }

    function aZ(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        kQ(13, b);
        kQ(11, b);
        a.F = li(a.ma, TP, 13, WP) ? .g() ? ? U(vt);
        b = xE();
        var c = CE(b, 23, !1);
        c || DE(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.ma;
            b = Eh(c, TP, Wh(c, WP) === 13 ? 13 : -1) !== void 0 ? z(li(c, TP, 13, WP), MK, 2) : lb(li(c, UP, 14, WP) ? .g() ? ? [], [b]) ? z(z(li(c, UP, 14, WP), TP, 2), MK, 2) : new MK;
            c = a.pubWin;
            var d = a.D.google_ad_client,
                e = K(a.ma, 6),
                f = K(a.ma, 20);
            b = new NK(c, d, b, e, f);
            b.i = !0;
            c = z(b.C, Iq, 1);
            if (b.i && (d = b.g, b.j && !pE(c) ? (e = new DK, e = Bh(e,
                    1, tg(1))) : e = null, e)) {
                e = Di(e);
                try {
                    d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                } catch (h) {}
            }
            d = pE(c) && (b.j || b.A);
            c && d && lF(new mF(b.g, new VF(b.g, b.l), c, new bA(b.g)))
        }
        b = !Fj() && !$b();
        return !b || b && !dZ(a) ? eZ(a) : Promise.resolve()
    }

    function fZ(a, b, c = !1) {
        b = kO(a.K, b);
        const d = Jj() || gO(a.pubWin.top);
        if (!b || b.y === -12245933 || d.width === -12245933 || d.height === -12245933 || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = iO(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function dZ(a) {
        return gZ(a) || hZ(a)
    }

    function gZ(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = u.setTimeout(() => {
                iw("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = hw(450, () => {
                b.google_pause_ad_requests = !1;
                u.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                if (!dZ(a)) {
                    const e = eZ(a);
                    W.na(1222, e)
                }
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function hZ(a) {
        const b = a.pubWin.document,
            c = a.ea;
        if (KO(b) === 3) return NO(hw(332, () => {
            if (!iZ(a, jZ().visible, c)) {
                const h = eZ(a);
                W.na(1222, h)
            }
        }), b), !0;
        const d = jZ();
        if (d.hidden < 0 && d.visible < 0) return !1;
        const e = LO(b);
        if (!e) return !1;
        if (!MO(b)) return iZ(a, d.visible, c);
        if (fZ(a, c) <= d.hidden) return !1;
        let f = hw(332, () => {
            if (!MO(b) && f) {
                Hb(b, e, f);
                if (!iZ(a, d.visible, c)) {
                    const h = eZ(a);
                    W.na(1222, h)
                }
                f = null
            }
        });
        return Gb(b, e, f)
    }

    function jZ() {
        var a = V(Ir);
        const b = V(Jr);
        return b === 3 && a === 6 ? (a = {
            hidden: 0,
            visible: 3
        }, u.IntersectionObserver || (a.visible = -1), pe() && (a.visible *= 2), a) : {
            hidden: 0,
            visible: u.IntersectionObserver ? pe() ? a : b : -1
        }
    }

    function iZ(a, b, c) {
        if (!c || b < 0) return !1;
        var d = a.D;
        if (!Vn(d.google_reactive_ad_format) && (kP(d) || d.google_reactive_ads_config) || !jO(c) || fZ(a, c) <= b) return !1;
        var e = xE(),
            f = CE(e, 8, {});
        e = CE(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const h = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !h) return !1;
        f = new Promise(k => {
            const l = new u.IntersectionObserver((m, n) => {
                Ta(m, p => {
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
        ka(Promise, "any").call(Promise, [f, e]).then(() => {
            gw(294, () => {
                const k = eZ(a);
                W.na(1222, k)
            })
        });
        return !0
    }

    function eZ(a) {
        gw(326, () => {
            var c = a.pubWin,
                d = a.K,
                e = a.ma,
                f = a.xa;
            if (dk(a.D) === 1) {
                var h = U(St);
                if ((h || U(Qt)) && c === d) {
                    var k = new ij;
                    d = new jj;
                    var l = k.setCorrelator(cf(c));
                    var m = mQ(c);
                    l = Bi(l, 5, m);
                    N(l, 2, 1);
                    k = C(d, 1, k);
                    l = new hj;
                    l = M(l, 10, !0);
                    m = U(Lt);
                    l = M(l, 8, m);
                    m = U(Mt);
                    l = M(l, 12, m);
                    m = U(Pt);
                    l = M(l, 7, m);
                    m = U(Ot);
                    l = M(l, 13, m);
                    C(k, 2, l);
                    c.google_rum_config = Ei(d);
                    e = K(e, 9) && h ? f.Bj : f.Cj;
                    ye(c.document, e)
                } else vk(fw)
            }
        });
        a.D.google_ad_channel = kZ(a, a.D.google_ad_channel);
        a.D.google_tag_partner = lZ(a, a.D.google_tag_partner);
        mZ(a);
        const b = a.D.google_start_time;
        typeof b === "number" && (En = b, a.D.google_start_time = null);
        eO(a);
        a.K && oP(a.K, wc(a.xa.li, SK()));
        GE() && cL({
            win: a.pubWin,
            webPropertyCode: a.D.google_ad_client,
            jb: wc(a.xa.jb, SK())
        });
        kP(a.D) && (aL() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        return nZ(a)
    }

    function kZ(a, b) {
        return (b ? [b] : []).concat(ME(a.pubWin).ad_channels || []).join("+")
    }

    function lZ(a, b) {
        return (b ? [b] : []).concat(ME(a.pubWin).tag_partners || []).join("+")
    }

    function oZ(a) {
        const b = ze("IFRAME");
        Ce(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    }

    function pZ(a, b, c) {
        return a.D.google_reactive_ad_format === 9 && le(a.ea, null, "fsi_container") ? (a.ea.appendChild(b), Promise.resolve(b)) : vP(a.xa.Tg, 525, d => {
            a.ea.appendChild(b);
            const e = mj(c, a.pubWin);
            d.createAdSlot(a.K, a.D, b, a.ea.parentElement, e);
            return b
        })
    }

    function qZ(a, b, c, d) {
        bF();
        P(cF).Zc = a.D.google_page_url;
        WY(a.pubWin, Ti(Si(N(N(Ri(new Ui, Pi(new Qi, String(cf(a.pubWin)))), 4, 1), 2, 1), L(a.ma, 2)), d.g()));
        const e = a.K;
        if (a.D.google_acr)
            if (a.D.google_wrap_fullscreen_ad) {
                const h = a.D.google_acr;
                EY(a.pubWin, a.ea.parentElement, b, a.D.google_reactive_ad_format).then(h).catch(() => {
                    h(null)
                })
            } else a.D.google_acr(b);
        Gb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const h = e ? ME(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || h) && e && e === a.pubWin && rZ(e, a, a.ea,
                b)
        });
        d = h => {
            h && a.j.push(() => {
                h.dispose()
            })
        };
        const f = sZ(a, b);
        sO(a.pubWin, a.g, b.contentWindow, a.j);
        !e || kP(a.D) && !yP(a.D) || (a.D.no_resize || d(new zR(e, b, a.ea)), d(new RQ(a, b)), d(e.IntersectionObserver ? null : new TQ(e, b, a.ea)), d(GR(e, b, a.D, a.ea, hw(1225, () => {
            f();
            for (const h of a.j) h();
            a.j.length = 0
        }))));
        e && (d(LQ(e, b, a.g)), a.j.push(IP(e, a.D)), P(NP).J(e), a.j.push(EQ(e, a.ea, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        if (c != null) {
            d = a.ea;
            const h = d.parentElement;
            (h && ku.test(h.className) ? h : d).setAttribute("data-auto-ad-size",
                c)
        }
        b.setAttribute("tabindex", "0");
        b.setAttribute("title", "Advertisement");
        b.setAttribute("aria-label", "Advertisement");
        tZ(a);
        MR(a)
    }

    function sZ(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = FE();
        let f = null;
        const h = KM(c, "pvt", (k, l) => {
            typeof k.token === "string" && l.source === b.contentWindow && (f = k.token, h(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
        });
        a.j.push(h);
        return () => {
            f && Array.isArray(e[d]) && (ab(e[d], f), e[d].length || delete e[d], f = null)
        }
    }

    function tZ(a) {
        const b = Fj(a.pubWin);
        if (b)
            if (b.container === "AMP-STICKY-AD") {
                const c = d => {
                    d.data === "fill_sticky" && b.renderStart && b.renderStart()
                };
                Gb(a.pubWin, "message", W.Da(616, c));
                a.j.push(() => {
                    Hb(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function rZ(a, b, c, d) {
        iN(new rN(a), c).then(e => {
            xj(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && ku.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", String(e.xg));
            return e
        }).then(e => {
            const f = b.D.armr || "",
                h = e.Ci || "",
                k = b.D.iaaso == null ? "" : Number(b.D.iaaso),
                l = Number(e.xg),
                m = Wa(e.entries, D => `${D.ub}:${D.Kg}:${D.Lg}`),
                n = Number(e.rj.toFixed(2)),
                p = d.dataset.googleQueryId || "",
                q = n * e.Xb.width * e.Xb.height,
                t = `${e.Yg.scrollX},${e.Yg.scrollY}`,
                w = ek(e.target),
                A = [e.Xb.left, e.Xb.top, e.Xb.right,
                    e.Xb.bottom
                ].join();
            e = `${e.oh.width}x${e.oh.height}`;
            iw("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: mQ(b.D),
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
                tr: A,
                url: b.D.google_page_url,
                vp: e,
                pvc: cf(a)
            }, 1)
        }).catch(e => {
            xj(8, ["Error:", e.message, c]);
            iw("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function uZ(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }

    function vZ(a, b, c) {
        var d = a.D,
            e = d.google_async_iframe_id;
        const f = d.google_ad_width,
            h = d.google_ad_height,
            k = zP(d);
        e = {
            id: e,
            name: e
        };
        var l = a.D,
            m = a.C;
        cQ("browsing-topics", a.pubWin.document) && CQ(c, l) && !U(zt) && !zQ(m ? .label) && (e.browsingTopics = "true");
        e.style = k ? [`width:${f}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${h}px;`;
        l = Oe();
        l["allow-top-navigation-by-user-activation"] && l["allow-popups-to-escape-sandbox"] && (k || (l = "=" + encodeURIComponent("1"),
            b = se(b, "fsb" + l)), e.sandbox = Ne().join(" "));
        d.google_video_play_muted === !1 && uZ("autoplay", e);
        l = b;
        l.length > 61440 && (l = l.substring(0, 61432), l = l.replace(/%\w?$/, ""), l = l.replace(/&[^=]*=?$/, ""), l += "&trunc=1");
        l !== b && (m = b.lastIndexOf("&", 61432), m === -1 && (m = b.lastIndexOf("?", 61432)), iw("trn", {
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
        bQ("attribution-reporting", a.pubWin.document) && uZ("attribution-reporting", e);
        bQ("run-ad-auction", a.pubWin.document) && uZ("run-ad-auction", e);
        U(ot) && (d = a.pubWin, d.credentialless !== void 0 && (U(pt) || d.crossOriginIsolated) && (e.credentialless = "true"));
        if (k) e.src = b, e = oZ(e), a = pZ(a, e, c);
        else {
            c = {};
            c.dtd = rQ((new Date).getTime(), En);
            c = Zj(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = oZ(e);
            c && a.j.push(Lj(a.pubWin, e));
            a.ea.style.visibility = "visible";
            for (a = a.ea; c = a.firstChild;) a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function wZ(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.g;
        xZ(a);
        d.g() && rO(new qO(a.pubWin), a.g, a.pubWin.location.hostname);
        var e = mj(d, a.pubWin);
        if (!(d.g() || U(ut) && a.F)) return iw("afc_noc_req", {
            client: a.D.google_ad_client,
            isGdprCountry: K(a.ma, 6).toString()
        }, V(Hr)), Promise.resolve();
        var f = yZ(a.xa, d);
        f && document.documentElement.appendChild(f);
        !U(qt) || U(ut) && !d.g() || (a.C = await KE());
        a.G = AQ(a.pubWin, d);
        lQ(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) {
            uP(a.K, f);
            const h = mj(d);
            AP(f, a, h);
            f = f.page_level_pubvars;
            Ca(f) && rc(a.D, f)
        }
        f = cQ("shared-storage", a.pubWin.document);
        a.G && d.g() && f && !U(nt) && !CE(xE(), 34, !1) && (DE(xE(), 34, !0), f = a.G.then(h => {
            h({
                message: "goog:spam:client_age",
                pvsid: cf(a.pubWin)
            })
        }), W.na(1069, f));
        await BQ(a, a.pubWin, d, a.D, a.G, a.C);
        await a.A ? .ni;
        f = "";
        zP(b) ? (f = (d.g() ? a.xa.uh : a.xa.th).toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + Yj({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), gV(b, xE()), zZ(b)) : (b.google_pgb_reactive === 5 && b.google_reactive_ads_config ||
            !lP(b) || jP(c, b, e)) && zZ(b) && (f = YU(a, d));
        xj(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || ck(c);
        e = dk(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`;
        c = fZ(a, a.ea, !0) > 0;
        e = {
            ifi: e,
            uci: b
        };
        c && (c = xE(), e.btvi = CE(c, 21, 1), EE(c, 21));
        f = Zj(e, f);
        c = vZ(a, f, d);
        a.D.rpe && xR(a.pubWin, a.ea, {
            height: a.D.google_ad_height,
            rf: "force",
            Pc: !0,
            gf: !0,
            ce: a.D.google_ad_client
        });
        c = await c;
        try {
            qZ(a, c, b, d)
        } catch (h) {
            W.ba(223, h, void 0, void 0)
        }
    }

    function AZ(a) {
        const b = new SY(a);
        return new Promise(c => {
            RY(b, d => {
                d && typeof d.uspString === "string" ? c(d.uspString) : c(null)
            })
        })
    }

    function BZ(a) {
        var b = Pe(u.top, "googlefcPresent");
        u.googlefc && !b && iw("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function CZ(a, b) {
        return EF(a, b === ".google.cn") ? FF(a) : Promise.resolve(null)
    }

    function DZ(a, b, c) {
        var d = c.Qj,
            e = c.uspString;
        c = c.Oi;
        d && pQ(a, d, b);
        e && (b = Ai(a, 1, e), e = e.toUpperCase(), e.length == 4 && (e.indexOf("-") == -1 || e.substring(1) === "---") && e[0] >= "1" && e[0] <= "9" && fL.hasOwnProperty(e[1]) && fL.hasOwnProperty(e[2]) && fL.hasOwnProperty(e[3]) ? (d = new eL, d = ri(d, 1, parseInt(e[0], 10)), d = N(d, 2, fL[e[1]]), d = N(d, 3, fL[e[2]]), e = N(d, 4, fL[e[3]])) : e = null, e = e ? .Li() === 2, pi(b, 13, e));
        c && EO(a, c)
    }

    function EZ(a) {
        const b = V(Fr);
        if (b <= 0) return null;
        const c = ok(),
            d = UY(a.pubWin);
        if (!d) return null;
        a.B = "0";
        return Promise.race([d, ef(b, "0")]).then(e => {
            iw("adsense_paw", {
                time: ok() - c
            });
            e ? .length > 1E4 ? W.ba(809, Error(`ML:${e.length}`), void 0, void 0) : a.B = e
        }).catch(e => {
            W.ba(809, e, void 0, void 0)
        })
    }

    function xZ(a) {
        var b = a.pubWin;
        const c = a.ea;
        var d = a.D;
        const e = a.Wa,
            f = V(It);
        d = !Vn(d.google_reactive_ad_format) && (kP(d) || d.google_reactive_ads_config);
        if (!(a.A ? .Le || f <= 0 || xe(b) || !u.IntersectionObserver || d)) {
            a.A = {};
            var h = V(Jt),
                k = new qn(e),
                l = ok();
            b = new Promise(m => {
                let n = 0;
                const p = a.A,
                    q = new u.IntersectionObserver(hw(1236, t => {
                        if (t = t.find(w => w.target === c)) k.B.g.g.g.g.g({
                            kf: ok() - l,
                            Rj: ++n
                        }), p.Zi = t.isIntersecting && t.intersectionRatio >= h, m()
                    }), {
                        threshold: [h]
                    });
                q.observe(c);
                p.Le = q
            });
            a.A.ni = Promise.race([b, ef(f,
                null)]).then(m => {
                k.B.g.g.g.i.g({
                    kf: ok() - l,
                    status: m === null ? "TIMEOUT" : "OK"
                })
            })
        }
    }

    function FZ(a) {
        const b = ok();
        return Promise.race([gw(832, () => YY(a)), ef(200)]).then(c => {
            iw("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: ok() - b,
                tms: 200
            });
            return c ? .qc
        })
    }
    async function GZ(a) {
        const b = ok(),
            c = a.ma;
        dF(h => {
            if (ki(h, 1) === 0) {
                var k = !!K(c, 6);
                h = M(h, 2, k);
                k = !!K(c, 20);
                h = M(h, 6, k);
                N(h, 1, 1)
            }
        });
        AM(a.pubWin);
        BZ(a.D.google_ad_client);
        dF(h => {
            ki(h, 1) === 1 && N(h, 1, 2)
        });
        var d = new HF(a.pubWin);
        await CZ(d, L(c, 8));
        dF(h => {
            ki(h, 1) === 2 && (h = M(h, 3, !0), N(h, 1, 3))
        });
        d = K(c, 6);
        var e = K(c, 25);
        a.g = HK(GK(new IK, !(d && !HM())), e && navigator.globalPrivacyControl);
        e = [qQ(a), AZ(a.pubWin), FO(a)];
        e = await Promise.all(e);
        DZ(a.g, d, {
            Qj: e[0],
            uspString: e[1],
            Oi: e[2]
        });
        const f = ok();
        dF(h => {
            if (ki(h, 1) === 3) {
                h =
                    M(h, 3, f - b > 500);
                var k = !!a.g ? .A();
                h = M(h, 4, k);
                k = !!a.g ? .g();
                h = M(h, 5, k);
                k = !!a.g ? .j();
                h = M(h, 7, k);
                k = !!a.g ? .l();
                h = M(h, 8, k);
                N(h, 1, 4)
            }
        })
    }
    async function HZ(a) {
        const b = EZ(a),
            c = gw(868, () => FZ(a.pubWin));
        await GZ(a);
        await b;
        a.qc = await c || "";
        await wZ(a)
    }

    function nZ(a) {
        ff(a.pubWin) !== a.pubWin && (a.i |= 4);
        KO(a.pubWin.document) === 3 && (a.i |= 32);
        var b;
        if (b = a.K) {
            b = a.K;
            const c = On(b);
            b = !(Tn(b).scrollWidth <= c)
        }
        b && (a.i |= 1024);
        a.pubWin.Prototype ? .Version && (a.i |= 16384);
        a.D.google_loader_features_used && (a.i |= a.D.google_loader_features_used);
        return HZ(a)
    }

    function zZ(a) {
        const b = xE(),
            c = a.google_ad_section;
        kP(a) && EE(b, 15);
        if (gk(a)) {
            if (EE(b, 5) > 100) return !1
        } else if (EE(b, 6) - CE(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }

    function yZ(a, b) {
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
                    fj = e;
                    break a
                }
            } catch (k) {}
            fj = null
        }
        if (fj) return null;e = ze("IFRAME");e.id = "google_esf";e.name = "google_esf";a = b.g() ? a.uh : a.th;e.src = yc(a).toString();e.style.display = "none";
        return e
    }

    function cZ(a) {
        U(zr) && HE() && u.setTimeout(hw(1244, () => void XN(a.K || a.pubWin, {
            Va: K(a.ma, 6)
        })), 1E3)
    }

    function mZ(a) {
        const b = a.K;
        if (b && !ME(b).ads_density_stats_processed && !Fj(b) && (ME(b).ads_density_stats_processed = !0, U(qs) || Be() < .01)) {
            const c = () => {
                if (b) {
                    var d = bJ(XI(b), a.D.google_ad_client, b.location.hostname, mQ(a.D).split(","));
                    iw("ama_stats", d, 1)
                }
            };
            df(b, () => {
                u.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        gw(843, () => {
            if (!u.google_sa_impl) {
                var d = new un(b);
                try {
                    kg(l => {
                        var m = new an;
                        var n = new $m;
                        try {
                            var p = cf(window);
                            ti(n, 1, p)
                        } catch (A) {}
                        try {
                            var q = P(xn).g();
                            Ph(n, 2, q, vg)
                        } catch (A) {}
                        try {
                            Bi(n, 3, window.document.URL)
                        } catch (A) {}
                        m = C(m, 2, n);
                        n = new Zm;
                        n = N(n, 1, 1192);
                        try {
                            var t = Ik(l ? .name) ? l.name : "Unknown error";
                            Bi(n, 2, t)
                        } catch (A) {}
                        try {
                            var w = Ik(l ? .message) ? l.message : `Caught ${l}`;
                            Bi(n, 3, w)
                        } catch (A) {}
                        try {
                            const A = Ik(l ? .stack) ? l.stack : Error().stack;
                            A && Ph(n, 4, A.split(/\n\s*/), Ng)
                        } catch (A) {}
                        l = C(m, 1, n);
                        t = new Ym;
                        try {
                            Bi(t, 1, tE())
                        } catch {}
                        E(l, 6, bn, t);
                        ti(l, 5, 1);
                        ln(d, l)
                    })
                } catch (l) {}
                var e = NY(a);
                MY(W, L(e, 2));
                ZP(K(e, 6));
                xj(16, [3, Ei(e)]);
                var f = LY({
                        Uf: b,
                        Zg: L(e, 2)
                    }),
                    h = c(f, e);
                u.google_sa_impl = l => $Y({
                    ma: e,
                    xa: h,
                    Wa: f,
                    slot: l
                });
                iQ(aQ(u));
                u.google_process_slots ? .();
                var k = (u.Prototype || {}).Version;
                k != null && iw("prtpjs", {
                    version: k
                })
            }
        })
    })(typeof sttc === "undefined" ? void 0 : sttc, tE(), function(a, b) {
        const c = hi(b, 1) > 2012 ? `_fy${hi(b,1)}` : "",
            d = L(b, 3);
        b = L(b, 2);
        return {
            Cj: Bd `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            Bj: Bd `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Tg: Bd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}reactive_library${c}.js`,
            li: Bd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}debug_card_library${c}.js`,
            Co: Bd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            po: Bd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            jb: Bd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}autogames${c}.js`,
            uh: Bd `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            th: Bd `https://pagead2.googlesyndication.com/pagead/html/${b}/${d}/zrt_lookup${c}.html`
        }
    });
}).call(this, "[2021,\"r20240718\",\"r20110914\",null,null,null,null,\".google.com.pk\",null,null,null,null,null,null,null,null,null,-1,[44759875,44759926,44759837]]");