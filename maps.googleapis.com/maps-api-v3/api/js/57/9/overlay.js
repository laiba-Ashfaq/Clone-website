google.maps.__gjsload__('overlay', function(_) {
    var OC = function(a) {
            this.Eg = a
        },
        ora = function() {},
        PC = function(a) {
            a.Sy = a.Sy || new ora;
            return a.Sy
        },
        pra = function(a) {
            this.Ch = new _.xn(() => {
                const b = a.Sy;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.lx && a.onAdd) a.onAdd();
                        b.lx = !0;
                        a.draw()
                    }
                } else {
                    if (b.lx)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.lx = !1
                }
            }, 0)
        },
        qra = function(a, b) {
            const c = PC(a);
            let d = c.pw;
            d || (d = c.pw = new pra(a));
            _.Ob(c.Ph || [], _.yk);
            var e = c.ni = c.ni || new _.Sla;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.HC = c.HC || new OC(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.yn(d.Ch);
            c.Ph = [_.wk(a, "panes_changed", e), _.wk(f, "zoom_changed", e), _.wk(f, "offset_changed", e), _.wk(b, "projection_changed", e), _.wk(f, "projectioncenterq_changed", e)];
            _.yn(d.Ch);
            b instanceof _.Uk ? (_.Il(b, "Ox"), _.Gl(b, 148440)) : b instanceof _.cm && (_.Il(b, "Oxs"),
                _.Gl(b, 181451))
        },
        vra = function(a) {
            if (a) {
                var b = a.getMap();
                if (rra(a) !== b && b && b instanceof _.Uk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new sra(b, a, c.overlayLayer) : c.Fg.then(({
                        kh: d
                    }) => {
                        const e = new tra(b, d);
                        d.Bi(e);
                        c.overlayLayer = e;
                        ura(a);
                        vra(a)
                    })
                }
            }
        },
        ura = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes", null), b.Eg.set("projection", null), b.Gg.ul(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        rra = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        wra = function(a,
            b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        };
    _.Ha(OC, _.Ok);
    OC.prototype.changed = function(a) {
        a != "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.jj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Eg : null))
    };
    var QC = {};
    _.Ha(pra, _.Ok);
    QC.El = function(a) {
        if (a) {
            var b = a.getMap();
            (PC(a).qC || null) !== b && (b && qra(a, b), PC(a).qC = b)
        }
    };
    QC.ul = function(a) {
        const b = PC(a);
        var c = b.ni;
        c && c.unbindAll();
        (c = b.HC) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Ph && _.Ob(b.Ph, _.yk);
        b.Ph = null;
        b.pw && (b.pw.Ch.Dj(), b.pw = null);
        delete PC(a).qC
    };
    var RC = {},
        sra = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Gg = c;
                this.Fg = !1;
                _.Il(this.map, "Ox");
                _.Gl(this.map, 148440);
                c.El(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        tra = class {
            constructor(a, b) {
                this.Ig = a;
                this.Gg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            ri(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.aA(this.Ig, this.Gg, () => {});
                k.ri(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) wra(m, k), m.draw()
            }
            El(a) {
                this.Fg.push(a);
                this.Eg && wra(a, this.Eg);
                this.Gg.refresh()
            }
            ul(a) {
                _.Wb(this.Fg,
                    a)
            }
        };
    RC.El = vra;
    RC.ul = ura;
    _.lk("overlay", {
        DA: function(a) {
            if (a) {
                (0, QC.ul)(a);
                (0, RC.ul)(a);
                var b = a.getMap();
                b && (b instanceof _.Uk ? (0, RC.El)(a) : (0, QC.El)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.Vv(a, {
                Uk: ({
                    event: b
                }) => {
                    _.Xt(b.Hh)
                },
                ak: b => _.Gv(b),
                Xp: b => _.Hv(b),
                Vk: b => _.Hv(b),
                sk: b => _.Iv(b)
            }).Jr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.uk);
            a.addEventListener("contextmenu", _.uk);
            a.addEventListener("dblclick", _.uk);
            a.addEventListener("mousedown", _.uk);
            a.addEventListener("mousemove", _.uk);
            a.addEventListener("MSPointerDown",
                _.uk);
            a.addEventListener("pointerdown", _.uk);
            a.addEventListener("touchstart", _.uk);
            a.addEventListener("wheel", _.uk)
        }
    });
});