google.maps.__gjsload__('search', function(_) {
    var Tna = function() {},
        eC = function(a) {
            this.setValues(a);
            _.kk("search_impl")
        },
        Vna = function(a) {
            let b = _.gm,
                c = -1;
            a.tiles.forEach(e => {
                e.zoom > c && (b = e.ai, c = e.zoom)
            });
            if (c === -1) return [];
            const d = [];
            a.Ut().forEach(e => {
                e.a && e.a.length >= 2 && d.push(new Una(e, b, c))
            });
            return d
        },
        Wna = function(a) {
            const b = [];
            a.data.forEach(c => {
                b.push(...Vna(c))
            });
            return b
        };
    _.Ha(Tna, _.Ok);
    var Xna = {
            ["1"]: {}
        },
        Una = class {
            constructor(a, b, c) {
                this.up = b;
                this.zoom = c;
                this.bounds = this.anchor = null;
                this.Eg = Xna;
                this.source = a;
                this.featureId = this.source.id || "0";
                this.infoWindowOffset = (this.source.io || []).length === 2 ? new google.maps.Point(this.source.io[0], this.source.io[1]) : null
            }
            getAnchor() {
                if (!this.anchor) {
                    const a = 1 << this.zoom;
                    this.anchor = _.Rm(new _.fn((this.up.x * 256 + this.source.a[0]) / a, (this.up.y * 256 + this.source.a[1]) / a)).toJSON()
                }
                return this.anchor
            }
            getCompleteBounds() {
                return this.getBounds().reduce((a,
                    b) => {
                    a.extendByBounds(b);
                    return a
                }, _.Vm(0, 0, 0, 0))
            }
            getBounds() {
                if (this.bounds === null) {
                    this.bounds = [];
                    const a = this.source.bb || [];
                    if (a.length % 4 === 0)
                        for (let b = 0; b < a.length; b += 4) {
                            const c = this.bounds[this.bounds.length - 1],
                                d = _.Vm(a[b], a[b + 1], a[b + 2], a[b + 3]);
                            c && c.equals(d) || this.bounds.push(d)
                        }
                }
                return [...this.bounds]
            }
            getExtendedContent(a) {
                if (this.Eg === Xna) try {
                    this.Eg = this.source.c ? JSON.parse(this.source.c) : {}
                } catch (b) {
                    this.Eg = {}
                }
                return this.Eg[a] ? ? {}
            }
            getFeatureName() {
                return this.getExtendedContent("1") ? .title ? ?
                    null
            }
            isTransitStation() {
                return this.getExtendedContent("1") ? .is_transit_station ? ? !1
            }
        };
    var Yna = new WeakSet;
    _.Ha(eC, Tna);
    eC.prototype.changed = function() {
        const a = this;
        var b = this.get("map");
        let c = null;
        b && (c = b.__gm, b = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", b + 1), c.set("disableLabelingHysteresis", this.get("disableLabelingHysteresis")), c.set("tilePrefetchEnabled", this.get("tilePrefetchEnabled")));
        _.kk("search_impl").then(d => {
            d.IE(a);
            c && (d = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", d - 1))
        })
    };
    eC.enableFeatureMapEventsRasterOnly = function(a) {
        if (_.Nn[15]) {
            var b = a.__gm.Yg;
            if (!Yna.has(a)) {
                Yna.add(a);
                var c = [],
                    d = (f, g) => {
                        f = Vna(f);
                        f.length && _.Kk(a, g, f)
                    },
                    e = () => {
                        for (; c.length > 0;) c.pop().remove();
                        b.forEach(f => {
                            if (f = f.data) c.push(_.wk(f, "insert", g => d(g, "addfeatures"))), c.push(_.wk(f, "remove", g => d(g, "removefeatures")))
                        })
                    };
                b.addListener("insert_at", e);
                b.addListener("remove_at", e);
                b.addListener("set_at", e);
                e()
            }(() => {
                const f = [];
                b.forEach(g => {
                    f.push(...Wna(g))
                });
                f.length && _.Kk(a, "addfeatures", f)
            })()
        }
    };
    _.Fa("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly", eC.enableFeatureMapEventsRasterOnly);
    _.vl(eC.prototype, {
        map: _.lr
    });
    _.sa.google.maps.search = {
        GoogleLayer: eC
    };
    _.lk("search", {});
});