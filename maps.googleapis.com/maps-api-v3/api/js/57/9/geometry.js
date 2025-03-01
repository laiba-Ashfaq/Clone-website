google.maps.__gjsload__('geometry', function(_) {
    var Vla = function(a, b) {
            return Math.abs(_.gj(b - a, -180, 180))
        },
        Wla = function(a, b, c, d, e) {
            if (!d) {
                c = Vla(a.lng(), c) / Vla(a.lng(), b.lng());
                if (!e) return e = Math.sin(_.Nf(a.lat())), e = Math.log((1 + e) / (1 - e)) / 2, b = Math.sin(_.Nf(b.lat())), _.Of(2 * Math.atan(Math.exp(e + c * (Math.log((1 + b) / (1 - b)) / 2 - e))) - Math.PI / 2);
                a = e.fromLatLngToPoint(a);
                b = e.fromLatLngToPoint(b);
                return e.fromPointToLatLng(new _.Pl(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))).lat()
            }
            e = _.Nf(a.lat());
            a = _.Nf(a.lng());
            d = _.Nf(b.lat());
            b = _.Nf(b.lng());
            c = _.Nf(c);
            return _.gj(_.Of(Math.atan2(Math.sin(e) *
                Math.cos(d) * Math.sin(c - b) - Math.sin(d) * Math.cos(e) * Math.sin(c - a), Math.cos(e) * Math.cos(d) * Math.sin(a - b))), -90, 90)
        },
        Xla = function(a, b) {
            a = new _.Qj(a, !1);
            b = new _.Qj(b, !1);
            return a.equals(b)
        },
        Yla = function(a, b) {
            const c = [];
            let d = [0, 0],
                e;
            for (let f = 0, g = _.cj(a); f < g; ++f) e = b ? b(a[f]) : a[f], UA.FC(e[0] - d[0], c), UA.FC(e[1] - d[1], c), d = e;
            return c.join("")
        },
        VA = {
            containsLocation: function(a, b) {
                a = _.Wj(a);
                const c = _.gj(a.lng(), -180, 180),
                    d = !!b.get("geodesic"),
                    e = b.get("latLngs");
                var f = b.get("map");
                f = !d && f ? f.getProjection() : null;
                let g = !1;
                for (let k = 0, m = e.getLength(); k < m; ++k) {
                    const p = e.getAt(k);
                    for (let t = 0, v = p.getLength(); t < v; ++t) {
                        const w = p.getAt(t),
                            y = p.getAt((t + 1) % v);
                        var h = _.gj(w.lng(), -180, 180);
                        const z = _.gj(y.lng(), -180, 180),
                            B = Math.max(h, z);
                        h = Math.min(h, z);
                        (B - h > 180 ? c >= B || c < h : c < B && c >= h) && Wla(w, y, c, d, f) < a.lat() && (g = !g)
                    }
                }
                return g || VA.isLocationOnEdge(a, b)
            }
        };
    _.Fa("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation", VA.containsLocation);
    VA.isLocationOnEdge = function(a, b, c) {
        a = _.Wj(a);
        c = c || 1E-9;
        const d = _.gj(a.lng(), -180, 180),
            e = b instanceof _.Xo,
            f = !!b.get("geodesic"),
            g = b.get("latLngs");
        b = b.get("map");
        b = !f && b ? b.getProjection() : null;
        for (let t = 0, v = g.getLength(); t < v; ++t) {
            const w = g.getAt(t),
                y = w.getLength(),
                z = e ? y : y - 1;
            for (let B = 0; B < z; ++B) {
                var h = w.getAt(B);
                const C = w.getAt((B + 1) % y);
                if (Xla(h, a) || Xla(C, a)) return !0;
                var k = _.gj(h.lng(), -180, 180),
                    m = _.gj(C.lng(), -180, 180);
                const F = Math.max(k, m),
                    P = Math.min(k, m);
                if (k = Math.abs(_.gj(k - m, -180, 180)) <= 1E-9 &&
                    (Math.abs(_.gj(k - d, -180, 180)) <= c || Math.abs(_.gj(m - d, -180, 180)) <= c)) {
                    k = a.lat();
                    m = Math.min(h.lat(), C.lat()) - c;
                    var p = Math.max(h.lat(), C.lat()) + c;
                    k = k >= m && k <= p
                }
                if (k) return !0;
                if (F - P > 180 ? d + c >= F || d - c <= P : d + c >= P && d - c <= F)
                    if (h = Wla(h, C, d, f, b), Math.abs(h - a.lat()) < c) return !0
            }
        }
        return !1
    };
    _.Fa("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge", VA.isLocationOnEdge);
    var UA = {
        decodePath: function(a) {
            const b = _.cj(a),
                c = Array(Math.floor(a.length / 2));
            let d = 0,
                e = 0,
                f = 0,
                g;
            for (g = 0; d < b; ++g) {
                let h = 1,
                    k = 0,
                    m;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                e += h & 1 ? ~(h >> 1) : h >> 1;
                h = 1;
                k = 0;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                f += h & 1 ? ~(h >> 1) : h >> 1;
                c[g] = new _.Qj(e * 1E-5, f * 1E-5, !0)
            }
            c.length = g;
            return c
        }
    };
    _.Fa("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath", UA.decodePath);
    UA.encodePath = function(a) {
        a instanceof _.Tm && (a = a.getArray());
        a = (0, _.Yk)(a);
        return Yla(a, function(b) {
            return [Math.round(b.lat() * 1E5), Math.round(b.lng() * 1E5)]
        })
    };
    _.Fa("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath", UA.encodePath);
    UA.FC = function(a, b) {
        for (a = a < 0 ? ~(a << 1) : a << 1; a >= 32;) b.push(String.fromCharCode((32 | a & 31) + 63)), a >>= 5;
        b.push(String.fromCharCode(a + 63))
    };
    var Zla = {
        encoding: UA,
        spherical: _.bs,
        poly: VA
    };
    _.sa.google.maps.geometry = Zla;
    _.lk("geometry", Zla);
});