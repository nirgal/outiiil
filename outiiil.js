/*
    outiiil - A greasemonkey extension for fourmizzz game
    Copyright (C) 2013 Hraesvleg

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

//-----------------------------------------
//----  Routage                        ----
//-----------------------------------------
var uri = location.pathname;
connecte = $('.boite_connexion_titre').text() == "Connexion" ? false : true;
comptePlus = $('#boiteComptePlus').find("table").length ? true : false;
test_alliance = $("#tag_alliance").text() == "AD" && location.host == "s1.fourmizzz.fr";

jTableSorter(jQuery);
jColorPicker(jQuery);

if (!comptePlus)
        $("head").append('<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js"></script><link type="text/css" rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />');

if (connecte) {
        box = new Box();
        if (!comptePlus)
                box.__construct();
        box.__initChasse();

        if (test_alliance) {
                utilitaire = new Utilitaire();
                utilitaire.__initDataPlayer();
        }
}
if (uri == "/Armee.php") {
        pageLaboratoire = new PageLaboratoire();
        pageLaboratoire.__initAjax();

        page = new PageArmee();
        page.__construct()
}
if (uri == "/chat.php" || (uri == "/alliance.php" && location.search == "")) {
        window.chat = new Chat();
        chat.__construct()
}
if (uri == "/classement.php" || (uri == "/classementAlliance.php" && location.search == "")) {
        table = new Table();
        table.__construct()
}
if (uri == "/classementAlliance.php" && location.search != "") {
        page = new PageDescriptionAlliance();
        page.__construct();
}
if (uri == "/commerce.php") {
        pageConstruction = new PageConstruction();
        pageConstruction.__initAjax();

        page = new PageCommerce();
        page.__construct()
}
if (uri == "/construction.php") {
        page = new PageConstruction();
        page.__construct()
}
if (uri == "/ennemie.php" && location.search == "") {
        page = new PageEnnemie();
        page.__construct()
}
if (uri == "/laboratoire.php") {
        page = new PageLaboratoire();
        page.__construct()
}
if (uri == "/Reine.php") {
        pageConstruction = new PageConstruction();
        pageConstruction.__initAjax();

        pageLaboratoire = new PageLaboratoire();
        pageLaboratoire.__initAjax();

        page = new PageReine();
        page.__construct()
}
if (uri == "/Ressources.php") {
        armee = new Armee();
        armee.__initAjax();

        pageConstruction = new PageConstruction();
        pageConstruction.__initAjax();

        pageLaboratoire = new PageLaboratoire();
        pageLaboratoire.__initAjax();

        page = new PageRessource();
        page.__construct()
}
if (location.href.indexOf("/alliance.php?Membres") > 0) {
        page = new PageAlliance();
        page.__construct()
}
if (location.href.indexOf("/ennemie.php?Attaquer") > 0) {
        if ($('#formulaireChoixArmee').length) {
                pageLaboratoire = new PageLaboratoire();
                pageLaboratoire.__initAjax();

                pageArmee = new PageArmee();
                pageArmee.__initAjax();

                joueur1 = new PageProfil();
                joueur1.__initAjax($("#pseudo").text());

                joueur2 = new PageProfil();
                joueur2.__initAjax($('input[name=pseudoCible]').val());

                armee = new Armee();
        }
        page = new PageAttaquer();
        page.__construct()
}
if (location.href.indexOf("/Membre.php?Pseudo") > 0) {
        joueur = new PageProfil();
        joueur.__initAjax($("#pseudo").text());
        page = new PageProfil();
        page.__construct()
}

//-----------------------------------------
//----  Function                       ----
//-----------------------------------------
function datetimeFormate(val) {
        if (val < 10) {
                return "0" + val
        } else {
                return val
        }
};

function timeFormate(val) {
        var c, b, d, e, a;
        var f = "";
        if (val > 0) {
                c = Math.floor(val / 86400);
                b = val - c * 86400;
                d = Math.floor(b / 3600);
                e = Math.floor(((b / 3600) - Math.floor(b / 3600)) * 60);
                a = b - ((Math.floor(b / 60)) * 60);
                if (c >= 1) {
                        f += c + "J "
                }
                if (d >= 1) {
                        f += d + "H "
                }
                if (e >= 1) {
                        f += e + "m "
                }
                if (a >= 1) {
                        f += a + "s "
                }
        } else {
                f = "0 sec"
        }
        return f
};

function linkTop() {
        var a = "<div><span id='top' class='scroll odd'>Top</span></div>";
        $(".Bas").before(a);
        $("#top").click(function () {
                $("html, body").animate({
                        scrollTop: $("html, body").offset().top
                }, "slow")
        })
}

function linkBottom() {
        var a = "<div><span id='bottom' class='scroll odd'>Bottom</span></div>";
        $("#centre").prepend(a);
        $("#bottom").click(function () {
                $("html, body").animate({
                        scrollTop: $(document).height()
                }, "slow")
        })
}

function extractUrlParams() {
        var e = new Array();
        var d = location.search.substring(1).split("&");
        if (d != "") {
                for (var b = 0; b < d.length; b++) {
                        var a = d[b].split("=");
                        e["" + a[0]] = "" + a[1]
                }
        }
        return e
}

function decrementTime(a, b) {
        $("#" + b).html(timeFormate(a));
        if (a > 0) {
                setTimeout(function () {
                        decrementTime(a - 1, b)
                }, 1000)
        }
};

function showHide(a) {
        if ($("." + a).css("display") == "none") {
                $("." + a).css("display", "")
        } else {
                $("." + a).css("display", "none")
        }
}

//-----------------------------------------
//----  Extension of jQuery            ----
//-----------------------------------------
function jColorPicker(b) {
        var c = function () {
                var S = {}, a, N = 65,
                        t, P = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
                        B = {
                                eventName: "click",
                                onShow: function () {},
                                onBeforeShow: function () {},
                                onHide: function () {},
                                onChange: function () {},
                                onSubmit: function () {},
                                color: "ff0000",
                                livePreview: true,
                                flat: false
                        }, J = function (T, V) {
                                var U = j(T);
                                b(V).data("colorpicker").fields.eq(1).val(U.r).end().eq(2).val(U.g).end().eq(3).val(U.b).end()
                        }, u = function (T, U) {
                                b(U).data("colorpicker").fields.eq(4).val(T.h).end().eq(5).val(T.s).end().eq(6).val(T.b).end()
                        }, g = function (T, U) {
                                b(U).data("colorpicker").fields.eq(0).val(R(T)).end()
                        }, l = function (T, U) {
                                b(U).data("colorpicker").selector.css("backgroundColor", "#" + R({
                                        h: T.h,
                                        s: 100,
                                        b: 100
                                }));
                                b(U).data("colorpicker").selectorIndic.css({
                                        left: parseInt(150 * T.s / 100, 10),
                                        top: parseInt(150 * (100 - T.b) / 100, 10)
                                })
                        }, G = function (T, U) {
                                b(U).data("colorpicker").hue.css("top", parseInt(150 - 150 * T.h / 360, 10))
                        }, h = function (T, U) {
                                b(U).data("colorpicker").currentColor.css("backgroundColor", "#" + R(T))
                        }, E = function (T, U) {
                                b(U).data("colorpicker").newColor.css("backgroundColor", "#" + R(T))
                        }, n = function (T) {
                                var V = T.charCode || T.keyCode || -1;
                                if ((V > N && V <= 90) || V == 32) {
                                        return false
                                }
                                var U = b(this).parent().parent();
                                if (U.data("colorpicker").livePreview === true) {
                                        e.apply(this)
                                }
                        }, e = function (U) {
                                var V = b(this).parent().parent(),
                                        T;
                                if (this.parentNode.className.indexOf("_hex") > 0) {
                                        V.data("colorpicker").color = T = m(y(this.value))
                                } else {
                                        if (this.parentNode.className.indexOf("_hsb") > 0) {
                                                V.data("colorpicker").color = T = f({
                                                        h: parseInt(V.data("colorpicker").fields.eq(4).val(), 10),
                                                        s: parseInt(V.data("colorpicker").fields.eq(5).val(), 10),
                                                        b: parseInt(V.data("colorpicker").fields.eq(6).val(), 10)
                                                })
                                        } else {
                                                V.data("colorpicker").color = T = i(M({
                                                        r: parseInt(V.data("colorpicker").fields.eq(1).val(), 10),
                                                        g: parseInt(V.data("colorpicker").fields.eq(2).val(), 10),
                                                        b: parseInt(V.data("colorpicker").fields.eq(3).val(), 10)
                                                }))
                                        }
                                } if (U) {
                                        J(T, V.get(0));
                                        g(T, V.get(0));
                                        u(T, V.get(0))
                                }
                                l(T, V.get(0));
                                G(T, V.get(0));
                                E(T, V.get(0));
                                V.data("colorpicker").onChange.apply(V, [T, R(T), j(T)])
                        }, o = function (T) {
                                var U = b(this).parent().parent();
                                U.data("colorpicker").fields.parent().removeClass("colorpicker_focus")
                        }, K = function () {
                                N = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65;
                                b(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus");
                                b(this).parent().addClass("colorpicker_focus")
                        }, I = function (T) {
                                var V = b(this).parent().find("input").focus();
                                var U = {
                                        el: b(this).parent().addClass("colorpicker_slider"),
                                        max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : (this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255),
                                        y: T.pageY,
                                        field: V,
                                        val: parseInt(V.val(), 10),
                                        preview: b(this).parent().parent().data("colorpicker").livePreview
                                };
                                b(document).bind("mouseup", U, s);
                                b(document).bind("mousemove", U, L)
                        }, L = function (T) {
                                T.data.field.val(Math.max(0, Math.min(T.data.max, parseInt(T.data.val + T.pageY - T.data.y, 10))));
                                if (T.data.preview) {
                                        e.apply(T.data.field.get(0), [true])
                                }
                                return false
                        }, s = function (T) {
                                e.apply(T.data.field.get(0), [true]);
                                T.data.el.removeClass("colorpicker_slider").find("input").focus();
                                b(document).unbind("mouseup", s);
                                b(document).unbind("mousemove", L);
                                return false
                        }, w = function (T) {
                                var U = {
                                        cal: b(this).parent(),
                                        y: b(this).offset().top
                                };
                                U.preview = U.cal.data("colorpicker").livePreview;
                                b(document).bind("mouseup", U, r);
                                b(document).bind("mousemove", U, k)
                        }, k = function (T) {
                                e.apply(T.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, (T.pageY - T.data.y)))) / 150, 10)).get(0), [T.data.preview]);
                                return false
                        }, r = function (T) {
                                J(T.data.cal.data("colorpicker").color, T.data.cal.get(0));
                                g(T.data.cal.data("colorpicker").color, T.data.cal.get(0));
                                b(document).unbind("mouseup", r);
                                b(document).unbind("mousemove", k);
                                return false
                        }, x = function (T) {
                                var U = {
                                        cal: b(this).parent(),
                                        pos: b(this).offset()
                                };
                                U.preview = U.cal.data("colorpicker").livePreview;
                                b(document).bind("mouseup", U, A);
                                b(document).bind("mousemove", U, q)
                        }, q = function (T) {
                                e.apply(T.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, (T.pageY - T.data.pos.top)))) / 150, 10)).end().eq(5).val(parseInt(100 * (Math.max(0, Math.min(150, (T.pageX - T.data.pos.left)))) / 150, 10)).get(0), [T.data.preview]);
                                return false
                        }, A = function (T) {
                                J(T.data.cal.data("colorpicker").color, T.data.cal.get(0));
                                g(T.data.cal.data("colorpicker").color, T.data.cal.get(0));
                                b(document).unbind("mouseup", A);
                                b(document).unbind("mousemove", q);
                                return false
                        }, v = function (T) {
                                b(this).addClass("colorpicker_focus")
                        }, Q = function (T) {
                                b(this).removeClass("colorpicker_focus")
                        }, p = function (U) {
                                var V = b(this).parent();
                                var T = V.data("colorpicker").color;
                                V.data("colorpicker").origColor = T;
                                h(T, V.get(0));
                                V.data("colorpicker").onSubmit(T, R(T), j(T), V.data("colorpicker").el)
                        }, D = function (T) {
                                var X = b("#" + b(this).data("colorpickerId"));
                                X.data("colorpicker").onBeforeShow.apply(this, [X.get(0)]);
                                var Y = b(this).offset();
                                var W = z();
                                var V = Y.top + this.offsetHeight;
                                var U = Y.left;
                                if (V + 176 > W.t + W.h) {
                                        V -= this.offsetHeight + 176
                                }
                                if (U + 356 > W.l + W.w) {
                                        U -= 356
                                }
                                X.css({
                                        left: U + "px",
                                        top: V + "px"
                                });
                                if (X.data("colorpicker").onShow.apply(this, [X.get(0)]) != false) {
                                        X.show()
                                }
                                b(document).bind("mousedown", {
                                        cal: X
                                }, O);
                                return false
                        }, O = function (T) {
                                if (!H(T.data.cal.get(0), T.target, T.data.cal.get(0))) {
                                        if (T.data.cal.data("colorpicker").onHide.apply(this, [T.data.cal.get(0)]) != false) {
                                                T.data.cal.hide()
                                        }
                                        b(document).unbind("mousedown", O)
                                }
                        }, H = function (V, U, T) {
                                if (V == U) {
                                        return true
                                }
                                if (V.contains) {
                                        return V.contains(U)
                                }
                                if (V.compareDocumentPosition) {
                                        return !!(V.compareDocumentPosition(U) & 16)
                                }
                                var W = U.parentNode;
                                while (W && W != T) {
                                        if (W == V) {
                                                return true
                                        }
                                        W = W.parentNode
                                }
                                return false
                        }, z = function () {
                                var T = document.compatMode == "CSS1Compat";
                                return {
                                        l: window.pageXOffset || (T ? document.documentElement.scrollLeft : document.body.scrollLeft),
                                        t: window.pageYOffset || (T ? document.documentElement.scrollTop : document.body.scrollTop),
                                        w: window.innerWidth || (T ? document.documentElement.clientWidth : document.body.clientWidth),
                                        h: window.innerHeight || (T ? document.documentElement.clientHeight : document.body.clientHeight)
                                }
                        }, f = function (T) {
                                return {
                                        h: Math.min(360, Math.max(0, T.h)),
                                        s: Math.min(100, Math.max(0, T.s)),
                                        b: Math.min(100, Math.max(0, T.b))
                                }
                        }, M = function (T) {
                                return {
                                        r: Math.min(255, Math.max(0, T.r)),
                                        g: Math.min(255, Math.max(0, T.g)),
                                        b: Math.min(255, Math.max(0, T.b))
                                }
                        }, y = function (V) {
                                var T = 6 - V.length;
                                if (T > 0) {
                                        var W = [];
                                        for (var U = 0; U < T; U++) {
                                                W.push("0")
                                        }
                                        W.push(V);
                                        V = W.join("")
                                }
                                return V
                        }, d = function (T) {
                                var T = parseInt(((T.indexOf("#") > -1) ? T.substring(1) : T), 16);
                                return {
                                        r: T >> 16,
                                        g: (T & 65280) >> 8,
                                        b: (T & 255)
                                }
                        }, m = function (T) {
                                return i(d(T))
                        }, i = function (V) {
                                var U = {
                                        h: 0,
                                        s: 0,
                                        b: 0
                                };
                                var W = Math.min(V.r, V.g, V.b);
                                var T = Math.max(V.r, V.g, V.b);
                                var X = T - W;
                                U.b = T;
                                if (T != 0) {}
                                U.s = T != 0 ? 255 * X / T : 0;
                                if (U.s != 0) {
                                        if (V.r == T) {
                                                U.h = (V.g - V.b) / X
                                        } else {
                                                if (V.g == T) {
                                                        U.h = 2 + (V.b - V.r) / X
                                                } else {
                                                        U.h = 4 + (V.r - V.g) / X
                                                }
                                        }
                                } else {
                                        U.h = -1
                                }
                                U.h *= 60;
                                if (U.h < 0) {
                                        U.h += 360
                                }
                                U.s *= 100 / 255;
                                U.b *= 100 / 255;
                                return U
                        }, j = function (T) {
                                var V = {};
                                var Z = Math.round(T.h);
                                var Y = Math.round(T.s * 255 / 100);
                                var U = Math.round(T.b * 255 / 100);
                                if (Y == 0) {
                                        V.r = V.g = V.b = U
                                } else {
                                        var aa = U;
                                        var X = (255 - Y) * U / 255;
                                        var W = (aa - X) * (Z % 60) / 60;
                                        if (Z == 360) {
                                                Z = 0
                                        }
                                        if (Z < 60) {
                                                V.r = aa;
                                                V.b = X;
                                                V.g = X + W
                                        } else {
                                                if (Z < 120) {
                                                        V.g = aa;
                                                        V.b = X;
                                                        V.r = aa - W
                                                } else {
                                                        if (Z < 180) {
                                                                V.g = aa;
                                                                V.r = X;
                                                                V.b = X + W
                                                        } else {
                                                                if (Z < 240) {
                                                                        V.b = aa;
                                                                        V.r = X;
                                                                        V.g = aa - W
                                                                } else {
                                                                        if (Z < 300) {
                                                                                V.b = aa;
                                                                                V.g = X;
                                                                                V.r = X + W
                                                                        } else {
                                                                                if (Z < 360) {
                                                                                        V.r = aa;
                                                                                        V.g = X;
                                                                                        V.b = aa - W
                                                                                } else {
                                                                                        V.r = 0;
                                                                                        V.g = 0;
                                                                                        V.b = 0
                                                                                }
                                                                        }
                                                                }
                                                        }
                                                }
                                        }
                                }
                                return {
                                        r: Math.round(V.r),
                                        g: Math.round(V.g),
                                        b: Math.round(V.b)
                                }
                        }, C = function (T) {
                                var U = [T.r.toString(16), T.g.toString(16), T.b.toString(16)];
                                b.each(U, function (V, W) {
                                        if (W.length == 1) {
                                                U[V] = "0" + W
                                        }
                                });
                                return U.join("")
                        }, R = function (T) {
                                return C(j(T))
                        }, F = function () {
                                var U = b(this).parent();
                                var T = U.data("colorpicker").origColor;
                                U.data("colorpicker").color = T;
                                J(T, U.get(0));
                                g(T, U.get(0));
                                u(T, U.get(0));
                                l(T, U.get(0));
                                G(T, U.get(0));
                                E(T, U.get(0))
                        };
                return {
                        init: function (T) {
                                T = b.extend({}, B, T || {});
                                if (typeof T.color == "string") {
                                        T.color = m(T.color)
                                } else {
                                        if (T.color.r != undefined && T.color.g != undefined && T.color.b != undefined) {
                                                T.color = i(T.color)
                                        } else {
                                                if (T.color.h != undefined && T.color.s != undefined && T.color.b != undefined) {
                                                        T.color = f(T.color)
                                                } else {
                                                        return this
                                                }
                                        }
                                }
                                return this.each(function () {
                                        if (!b(this).data("colorpickerId")) {
                                                var U = b.extend({}, T);
                                                U.origColor = T.color;
                                                var W = "collorpicker_" + parseInt(Math.random() * 1000);
                                                b(this).data("colorpickerId", W);
                                                var V = b(P).attr("id", W);
                                                if (U.flat) {
                                                        V.appendTo(this).show()
                                                } else {
                                                        V.appendTo(document.body)
                                                }
                                                U.fields = V.find("input").bind("keyup", n).bind("change", e).bind("blur", o).bind("focus", K);
                                                V.find("span").bind("mousedown", I).end().find(">div.colorpicker_current_color").bind("click", F);
                                                U.selector = V.find("div.colorpicker_color").bind("mousedown", x);
                                                U.selectorIndic = U.selector.find("div div");
                                                U.el = this;
                                                U.hue = V.find("div.colorpicker_hue div");
                                                V.find("div.colorpicker_hue").bind("mousedown", w);
                                                U.newColor = V.find("div.colorpicker_new_color");
                                                U.currentColor = V.find("div.colorpicker_current_color");
                                                V.data("colorpicker", U);
                                                V.find("div.colorpicker_submit").bind("mouseenter", v).bind("mouseleave", Q).bind("click", p);
                                                J(U.color, V.get(0));
                                                u(U.color, V.get(0));
                                                g(U.color, V.get(0));
                                                G(U.color, V.get(0));
                                                l(U.color, V.get(0));
                                                h(U.color, V.get(0));
                                                E(U.color, V.get(0));
                                                if (U.flat) {
                                                        V.css({
                                                                position: "relative",
                                                                display: "block"
                                                        })
                                                } else {
                                                        b(this).bind(U.eventName, D)
                                                }
                                        }
                                })
                        },
                        showPicker: function () {
                                return this.each(function () {
                                        if (b(this).data("colorpickerId")) {
                                                D.apply(this)
                                        }
                                })
                        },
                        hidePicker: function () {
                                return this.each(function () {
                                        if (b(this).data("colorpickerId")) {
                                                b("#" + b(this).data("colorpickerId")).hide()
                                        }
                                })
                        },
                        setColor: function (T) {
                                if (typeof T == "string") {
                                        T = m(T)
                                } else {
                                        if (T.r != undefined && T.g != undefined && T.b != undefined) {
                                                T = i(T)
                                        } else {
                                                if (T.h != undefined && T.s != undefined && T.b != undefined) {
                                                        T = f(T)
                                                } else {
                                                        return this
                                                }
                                        }
                                }
                                return this.each(function () {
                                        if (b(this).data("colorpickerId")) {
                                                var U = b("#" + b(this).data("colorpickerId"));
                                                U.data("colorpicker").color = T;
                                                U.data("colorpicker").origColor = T;
                                                J(T, U.get(0));
                                                u(T, U.get(0));
                                                g(T, U.get(0));
                                                G(T, U.get(0));
                                                l(T, U.get(0));
                                                h(T, U.get(0));
                                                E(T, U.get(0))
                                        }
                                })
                        }
                }
        }();
        b.fn.extend({
                ColorPicker: c.init,
                ColorPickerHide: c.hidePicker,
                ColorPickerShow: c.showPicker,
                ColorPickerSetColor: c.setColor
        })
};

function jTableSorter(a) {
        a.extend({
                tablesorter: new function () {
                        var parsers = [],
                                widgets = [];
                        this.defaults = {
                                cssHeader: "header",
                                cssAsc: "headerSortUp",
                                cssDesc: "headerSortDown",
                                cssChildRow: "expand-child",
                                sortInitialOrder: "asc",
                                sortMultiSortKey: "shiftKey",
                                sortForce: null,
                                sortAppend: null,
                                sortLocaleCompare: true,
                                textExtraction: "simple",
                                parsers: {},
                                widgets: [],
                                widgetZebra: {
                                        css: ["even", "odd"]
                                },
                                headers: {},
                                widthFixed: false,
                                cancelSelection: true,
                                sortList: [],
                                headerList: [],
                                dateFormat: "us",
                                decimal: "/.|,/g",
                                onRenderHeader: null,
                                selectorHeaders: "thead th",
                                debug: false
                        };

                        function benchmark(s, d) {
                                log(s + "," + (new Date().getTime() - d.getTime()) + "ms")
                        }
                        this.benchmark = benchmark;

                        function log(s) {
                                if (typeof console != "undefined" && typeof console.debug != "undefined") {
                                        console.log(s)
                                } else {
                                        alert(s)
                                }
                        }

                        function buildParserCache(table, aheaders) {
                                if (table.config.debug) {
                                        var parsersDebug = ""
                                }
                                if (table.tBodies.length == 0) {
                                        return
                                }
                                var rows = table.tBodies[0].rows;
                                if (rows[0]) {
                                        var list = [],
                                                cells = rows[0].cells,
                                                l = cells.length;
                                        for (var i = 0; i < l; i++) {
                                                var p = false;
                                                if (a.metadata && (a(aheaders[i]).metadata() && a(aheaders[i]).metadata().sorter)) {
                                                        p = getParserById(a(aheaders[i]).metadata().sorter)
                                                } else {
                                                        if ((table.config.headers[i] && table.config.headers[i].sorter)) {
                                                                p = getParserById(table.config.headers[i].sorter)
                                                        }
                                                } if (!p) {
                                                        p = detectParserForColumn(table, rows, -1, i)
                                                }
                                                if (table.config.debug) {
                                                        parsersDebug += "column:" + i + " parser:" + p.id + "\n"
                                                }
                                                list.push(p)
                                        }
                                }
                                if (table.config.debug) {
                                        log(parsersDebug)
                                }
                                return list
                        }

                        function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                                var l = parsers.length,
                                        node = false,
                                        nodeValue = false,
                                        keepLooking = true;
                                while (nodeValue == "" && keepLooking) {
                                        rowIndex++;
                                        if (rows[rowIndex]) {
                                                node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                                                nodeValue = trimAndGetNodeText(table.config, node);
                                                if (table.config.debug) {
                                                        log("Checking if value was empty on row:" + rowIndex)
                                                }
                                        } else {
                                                keepLooking = false
                                        }
                                }
                                for (var i = 1; i < l; i++) {
                                        if (parsers[i].is(nodeValue, table, node)) {
                                                return parsers[i]
                                        }
                                }
                                return parsers[0]
                        }

                        function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
                                return rows[rowIndex].cells[cellIndex]
                        }

                        function trimAndGetNodeText(config, node) {
                                return a.trim(getElementText(config, node))
                        }

                        function getParserById(name) {
                                var l = parsers.length;
                                for (var i = 0; i < l; i++) {
                                        if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
                                                return parsers[i]
                                        }
                                }
                                return false
                        }

                        function buildCache(table) {
                                if (table.config.debug) {
                                        var cacheTime = new Date()
                                }
                                var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0,
                                        totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0,
                                        parsers = table.config.parsers,
                                        cache = {
                                                row: [],
                                                normalized: []
                                        };
                                for (var i = 0; i < totalRows; ++i) {
                                        var c = a(table.tBodies[0].rows[i]),
                                                cols = [];
                                        if (c.hasClass(table.config.cssChildRow)) {
                                                cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
                                                continue
                                        }
                                        cache.row.push(c);
                                        for (var j = 0; j < totalCells; ++j) {
                                                cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]))
                                        }
                                        cols.push(cache.normalized.length);
                                        cache.normalized.push(cols);
                                        cols = null
                                }
                                if (table.config.debug) {
                                        benchmark("Building cache for " + totalRows + " rows:", cacheTime)
                                }
                                return cache
                        }

                        function getElementText(config, node) {
                                var text = "";
                                if (!node) {
                                        return ""
                                }
                                if (!config.supportsTextContent) {
                                        config.supportsTextContent = node.textContent || false
                                }
                                if (config.textExtraction == "simple") {
                                        if (config.supportsTextContent) {
                                                text = node.textContent
                                        } else {
                                                if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                                                        text = node.childNodes[0].innerHTML
                                                } else {
                                                        text = node.innerHTML
                                                }
                                        }
                                } else {
                                        if (typeof (config.textExtraction) == "function") {
                                                text = config.textExtraction(node)
                                        } else {
                                                text = a(node).text()
                                        }
                                }
                                return text
                        }

                        function appendToTable(table, cache) {
                                if (table.config.debug) {
                                        var appendTime = new Date()
                                }
                                var c = cache,
                                        r = c.row,
                                        n = c.normalized,
                                        totalRows = n.length,
                                        checkCell = (n[0].length - 1),
                                        tableBody = a(table.tBodies[0]),
                                        rows = [];
                                for (var i = 0; i < totalRows; i++) {
                                        var pos = n[i][checkCell];
                                        rows.push(r[pos]);
                                        if (!table.config.appender) {
                                                var l = r[pos].length;
                                                for (var j = 0; j < l; j++) {
                                                        tableBody[0].appendChild(r[pos][j])
                                                }
                                        }
                                }
                                if (table.config.appender) {
                                        table.config.appender(table, rows)
                                }
                                rows = null;
                                if (table.config.debug) {
                                        benchmark("Rebuilt table:", appendTime)
                                }
                                applyWidget(table);
                                setTimeout(function () {
                                        a(table).trigger("sortEnd")
                                }, 0)
                        }

                        function buildHeaders(table) {
                                if (table.config.debug) {
                                        var time = new Date()
                                }
                                var meta = (a.metadata) ? true : false;
                                var header_index = computeTableHeaderCellIndexes(table);
                                atableHeaders = a(table.config.selectorHeaders, table).each(function (index) {
                                        this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                                        this.order = formatSortingOrder(table.config.sortInitialOrder);
                                        this.count = this.order;
                                        if (checkHeaderMetadata(this) || checkHeaderOptions(table, index)) {
                                                this.sortDisabled = true
                                        }
                                        if (checkHeaderOptionsSortingLocked(table, index)) {
                                                this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index)
                                        }
                                        if (!this.sortDisabled) {
                                                var ath = a(this).addClass(table.config.cssHeader);
                                                if (table.config.onRenderHeader) {
                                                        table.config.onRenderHeader.apply(ath)
                                                }
                                        }
                                        table.config.headerList[index] = this
                                });
                                if (table.config.debug) {
                                        benchmark("Built headers:", time);
                                        log(atableHeaders)
                                }
                                return atableHeaders
                        }

                        function computeTableHeaderCellIndexes(t) {
                                var matrix = [];
                                var lookup = {};
                                var thead = t.getElementsByTagName("THEAD")[0];
                                var trs = thead.getElementsByTagName("TR");
                                for (var i = 0; i < trs.length; i++) {
                                        var cells = trs[i].cells;
                                        for (var j = 0; j < cells.length; j++) {
                                                var c = cells[j];
                                                var rowIndex = c.parentNode.rowIndex;
                                                var cellId = rowIndex + "-" + c.cellIndex;
                                                var rowSpan = c.rowSpan || 1;
                                                var colSpan = c.colSpan || 1;
                                                var firstAvailCol;
                                                if (typeof (matrix[rowIndex]) == "undefined") {
                                                        matrix[rowIndex] = []
                                                }
                                                for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                                                        if (typeof (matrix[rowIndex][k]) == "undefined") {
                                                                firstAvailCol = k;
                                                                break
                                                        }
                                                }
                                                lookup[cellId] = firstAvailCol;
                                                for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                                                        if (typeof (matrix[k]) == "undefined") {
                                                                matrix[k] = []
                                                        }
                                                        var matrixrow = matrix[k];
                                                        for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                                                                matrixrow[l] = "x"
                                                        }
                                                }
                                        }
                                }
                                return lookup
                        }

                        function checkCellColSpan(table, rows, row) {
                                var arr = [],
                                        r = table.tHead.rows,
                                        c = r[row].cells;
                                for (var i = 0; i < c.length; i++) {
                                        var cell = c[i];
                                        if (cell.colSpan > 1) {
                                                arr = arr.concat(checkCellColSpan(table, headerArr, row++))
                                        } else {
                                                if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                                                        arr.push(cell)
                                                }
                                        }
                                }
                                return arr
                        }

                        function checkHeaderMetadata(cell) {
                                if ((a.metadata) && (a(cell).metadata().sorter === false)) {
                                        return true
                                }
                                return false
                        }

                        function checkHeaderOptions(table, i) {
                                if ((table.config.headers[i]) && (table.config.headers[i].sorter === false)) {
                                        return true
                                }
                                return false
                        }

                        function checkHeaderOptionsSortingLocked(table, i) {
                                if ((table.config.headers[i]) && (table.config.headers[i].lockedOrder)) {
                                        return table.config.headers[i].lockedOrder
                                }
                                return false
                        }

                        function applyWidget(table) {
                                var c = table.config.widgets;
                                var l = c.length;
                                for (var i = 0; i < l; i++) {
                                        getWidgetById(c[i]).format(table)
                                }
                        }

                        function getWidgetById(name) {
                                var l = widgets.length;
                                for (var i = 0; i < l; i++) {
                                        if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
                                                return widgets[i]
                                        }
                                }
                        }

                        function formatSortingOrder(v) {
                                if (typeof (v) != "Number") {
                                        return (v.toLowerCase() == "desc") ? 1 : 0
                                } else {
                                        return (v == 1) ? 1 : 0
                                }
                        }

                        function isValueInArray(v, a) {
                                var l = a.length;
                                for (var i = 0; i < l; i++) {
                                        if (a[i][0] == v) {
                                                return true
                                        }
                                }
                                return false
                        }

                        function setHeadersCss(table, aheaders, list, css) {
                                aheaders.removeClass(css[0]).removeClass(css[1]);
                                var h = [];
                                aheaders.each(function (offset) {
                                        if (!this.sortDisabled) {
                                                h[this.column] = a(this)
                                        }
                                });
                                var l = list.length;
                                for (var i = 0; i < l; i++) {
                                        h[list[i][0]].addClass(css[list[i][1]])
                                }
                        }

                        function fixColumnWidth(table, aheaders) {
                                var c = table.config;
                                if (c.widthFixed) {
                                        var colgroup = a("<colgroup>");
                                        a("tr:first td", table.tBodies[0]).each(function () {
                                                colgroup.append(a("<col>").css("width", a(this).width()))
                                        });
                                        a(table).prepend(colgroup)
                                }
                        }

                        function updateHeaderSortCount(table, sortList) {
                                var c = table.config,
                                        l = sortList.length;
                                for (var i = 0; i < l; i++) {
                                        var s = sortList[i],
                                                o = c.headerList[s[0]];
                                        o.count = s[1];
                                        o.count++
                                }
                        }

                        function multisort(table, sortList, cache) {
                                if (table.config.debug) {
                                        var sortTime = new Date()
                                }
                                var dynamicExp = "var sortWrapper = function(a,b) {",
                                        l = sortList.length;
                                for (var i = 0; i < l; i++) {
                                        var c = sortList[i][0];
                                        var order = sortList[i][1];
                                        var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
                                        var e = "e" + i;
                                        dynamicExp += "var " + e + " = " + s;
                                        dynamicExp += "if(" + e + ") { return " + e + "; } ";
                                        dynamicExp += "else { "
                                }
                                var orgOrderCol = cache.normalized[0].length - 1;
                                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                                for (var i = 0; i < l; i++) {
                                        dynamicExp += "}; "
                                }
                                dynamicExp += "return 0; ";
                                dynamicExp += "}; ";
                                if (table.config.debug) {
                                        benchmark("Evaling expression:" + dynamicExp, new Date())
                                }
                                eval(dynamicExp);
                                cache.normalized.sort(sortWrapper);
                                if (table.config.debug) {
                                        benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime)
                                }
                                return cache
                        }

                        function makeSortFunction(type, direction, index) {
                                var a = "a[" + index + "]",
                                        b = "b[" + index + "]";
                                if (type == "text" && direction == "asc") {
                                        return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));"
                                } else {
                                        if (type == "text" && direction == "desc") {
                                                return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));"
                                        } else {
                                                if (type == "numeric" && direction == "asc") {
                                                        return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));"
                                                } else {
                                                        if (type == "numeric" && direction == "desc") {
                                                                return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));"
                                                        }
                                                }
                                        }
                                }
                        }

                        function makeSortText(i) {
                                return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));"
                        }

                        function makeSortTextDesc(i) {
                                return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));"
                        }

                        function makeSortNumeric(i) {
                                return "a[" + i + "]-b[" + i + "];"
                        }

                        function makeSortNumericDesc(i) {
                                return "b[" + i + "]-a[" + i + "];"
                        }

                        function sortText(a, b) {
                                if (table.config.sortLocaleCompare) {
                                        return a.localeCompare(b)
                                }
                                return ((a < b) ? -1 : ((a > b) ? 1 : 0))
                        }

                        function sortTextDesc(a, b) {
                                if (table.config.sortLocaleCompare) {
                                        return b.localeCompare(a)
                                }
                                return ((b < a) ? -1 : ((b > a) ? 1 : 0))
                        }

                        function sortNumeric(a, b) {
                                return a - b
                        }

                        function sortNumericDesc(a, b) {
                                return b - a
                        }

                        function getCachedSortType(parsers, i) {
                                return parsers[i].type
                        }
                        this.construct = function (settings) {
                                return this.each(function () {
                                        if (!this.tHead || !this.tBodies) {
                                                return
                                        }
                                        var athis, adocument, aheaders, cache, config, shiftDown = 0,
                                                sortOrder;
                                        this.config = {};
                                        config = a.extend(this.config, a.tablesorter.defaults, settings);
                                        athis = a(this);
                                        a.data(this, "tablesorter", config);
                                        aheaders = buildHeaders(this);
                                        this.config.parsers = buildParserCache(this, aheaders);
                                        cache = buildCache(this);
                                        var sortCSS = [config.cssDesc, config.cssAsc];
                                        fixColumnWidth(this);
                                        aheaders.click(function (e) {
                                                var totalRows = (athis[0].tBodies[0] && athis[0].tBodies[0].rows.length) || 0;
                                                if (!this.sortDisabled && totalRows > 0) {
                                                        athis.trigger("sortStart");
                                                        var i = this.column;
                                                        this.order = this.count++ % 2;
                                                        if (this.lockedOrder) {
                                                                this.order = this.lockedOrder
                                                        }
                                                        if (!e[config.sortMultiSortKey]) {
                                                                config.sortList = [];
                                                                if (config.sortForce != null) {
                                                                        var a = config.sortForce;
                                                                        for (var j = 0; j < a.length; j++) {
                                                                                if (a[j][0] != i) {
                                                                                        config.sortList.push(a[j])
                                                                                }
                                                                        }
                                                                }
                                                                config.sortList.push([i, this.order])
                                                        } else {
                                                                if (isValueInArray(i, config.sortList)) {
                                                                        for (var j = 0; j < config.sortList.length; j++) {
                                                                                var s = config.sortList[j],
                                                                                        o = config.headerList[s[0]];
                                                                                if (s[0] == i) {
                                                                                        o.count = s[1];
                                                                                        o.count++;
                                                                                        s[1] = o.count % 2
                                                                                }
                                                                        }
                                                                } else {
                                                                        config.sortList.push([i, this.order])
                                                                }
                                                        }
                                                        setTimeout(function () {
                                                                setHeadersCss(athis[0], aheaders, config.sortList, sortCSS);
                                                                appendToTable(athis[0], multisort(athis[0], config.sortList, cache))
                                                        }, 1);
                                                        return false
                                                }
                                        }).mousedown(function () {
                                                if (config.cancelSelection) {
                                                        this.onselectstart = function () {
                                                                return false
                                                        };
                                                        return false
                                                }
                                        });
                                        athis.bind("update", function () {
                                                var me = this;
                                                setTimeout(function () {
                                                        me.config.parsers = buildParserCache(me, aheaders);
                                                        cache = buildCache(me)
                                                }, 1)
                                        }).bind("updateCell", function (e, cell) {
                                                var config = this.config;
                                                var pos = [(cell.parentNode.rowIndex - 1), cell.cellIndex];
                                                cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(getElementText(config, cell), cell)
                                        }).bind("sorton", function (e, list) {
                                                a(this).trigger("sortStart");
                                                config.sortList = list;
                                                var sortList = config.sortList;
                                                updateHeaderSortCount(this, sortList);
                                                setHeadersCss(this, aheaders, sortList, sortCSS);
                                                appendToTable(this, multisort(this, sortList, cache))
                                        }).bind("appendCache", function () {
                                                appendToTable(this, cache)
                                        }).bind("applyWidgetId", function (e, id) {
                                                getWidgetById(id).format(this)
                                        }).bind("applyWidgets", function () {
                                                applyWidget(this)
                                        });
                                        if (a.metadata && (a(this).metadata() && a(this).metadata().sortlist)) {
                                                config.sortList = a(this).metadata().sortlist
                                        }
                                        if (config.sortList.length > 0) {
                                                athis.trigger("sorton", [config.sortList])
                                        }
                                        applyWidget(this)
                                })
                        };
                        this.addParser = function (parser) {
                                var l = parsers.length,
                                        a = true;
                                for (var i = 0; i < l; i++) {
                                        if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
                                                a = false
                                        }
                                }
                                if (a) {
                                        parsers.push(parser)
                                }
                        };
                        this.addWidget = function (widget) {
                                widgets.push(widget)
                        };
                        this.formatFloat = function (s) {
                                var i = parseFloat(s);
                                return (isNaN(i)) ? 0 : i
                        };
                        this.formatInt = function (s) {
                                var i = parseInt(s);
                                return (isNaN(i)) ? 0 : i
                        };
                        this.isDigit = function (s, config) {
                                return /^[-+]?\d*a/.test(a.trim(s.replace(/[,.']/g, "")))
                        };
                        this.clearTableBody = function (table) {
                                if (a.browser.msie) {
                                        function empty() {
                                                while (this.firstChild) {
                                                        this.removeChild(this.firstChild)
                                                }
                                        }
                                        empty.apply(table.tBodies[0])
                                } else {
                                        table.tBodies[0].innerHTML = ""
                                }
                        }
                }
        });
        a.fn.extend({
                tablesorter: a.tablesorter.construct
        });
        var ts = a.tablesorter;
        ts.addParser({
                id: "text",
                is: function (s) {
                        return true
                },
                format: function (s) {
                        return a.trim(s.toLocaleLowerCase())
                },
                type: "text"
        });
        ts.addParser({
                id: "digit",
                is: function (s, table) {
                        var c = table.config;
                        return a.tablesorter.isDigit(s, c)
                },
                format: function (s) {
                        return a.tablesorter.formatFloat(s)
                },
                type: "numeric"
        });
        ts.addParser({
                id: "currency",
                is: function (s) {
                        return /^[£a€?.]/.test(s)
                },
                format: function (s) {
                        return a.tablesorter.formatFloat(s.replace(new RegExp(/[£a€]/g), ""))
                },
                type: "numeric"
        });
        ts.addParser({
                id: "ipAddress",
                is: function (s) {
                        return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}a/.test(s)
                },
                format: function (s) {
                        var a = s.split("."),
                                r = "",
                                l = a.length;
                        for (var i = 0; i < l; i++) {
                                var item = a[i];
                                if (item.length == 2) {
                                        r += "0" + item
                                } else {
                                        r += item
                                }
                        }
                        return a.tablesorter.formatFloat(r)
                },
                type: "numeric"
        });
        ts.addParser({
                id: "url",
                is: function (s) {
                        return /^(https?|ftp|file):\/\/a/.test(s)
                },
                format: function (s) {
                        return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ""))
                },
                type: "text"
        });
        ts.addParser({
                id: "isoDate",
                is: function (s) {
                        return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}a/.test(s)
                },
                format: function (s) {
                        return a.tablesorter.formatFloat((s != "") ? new Date(s.replace(new RegExp(/-/g), "/")).getTime() : "0")
                },
                type: "numeric"
        });
        ts.addParser({
                id: "percent",
                is: function (s) {
                        return /\%a/.test(a.trim(s))
                },
                format: function (s) {
                        return a.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""))
                },
                type: "numeric"
        });
        ts.addParser({
                id: "usLongDate",
                is: function (s) {
                        return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))a/))
                },
                format: function (s) {
                        return a.tablesorter.formatFloat(new Date(s).getTime())
                },
                type: "numeric"
        });
        ts.addParser({
                id: "shortDate",
                is: function (s) {
                        return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s)
                },
                format: function (s, table) {
                        var c = table.config;
                        s = s.replace(/\-/g, "/");
                        if (c.dateFormat == "us") {
                                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "a3/a1/a2")
                        } else {
                                if (c.dateFormat == "uk") {
                                        s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "a3/a2/a1")
                                } else {
                                        if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
                                                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "a1/a2/a3")
                                        }
                                }
                        }
                        return a.tablesorter.formatFloat(new Date(s).getTime())
                },
                type: "numeric"
        });
        ts.addParser({
                id: "time",
                is: function (s) {
                        return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))a/.test(s)
                },
                format: function (s) {
                        return a.tablesorter.formatFloat(new Date("2000/01/01 " + s).getTime())
                },
                type: "numeric"
        });
        ts.addParser({
                id: "metadata",
                is: function (s) {
                        return false
                },
                format: function (s, table, cell) {
                        var c = table.config,
                                p = (!c.parserMetadataName) ? "sortValue" : c.parserMetadataName;
                        return a(cell).metadata()[p]
                },
                type: "numeric"
        });
        ts.addWidget({
                id: "zebra",
                format: function (table) {
                        if (table.config.debug) {
                                var time = new Date()
                        }
                        var atr, row = -1,
                                odd;
                        a("tr:visible", table.tBodies[0]).each(function (i) {
                                atr = a(this);
                                if (!atr.hasClass(table.config.cssChildRow)) {
                                        row++
                                }
                                odd = (row % 2 == 0);
                                atr.removeClass(table.config.widgetZebra.css[odd ? 0 : 1]).addClass(table.config.widgetZebra.css[odd ? 1 : 0])
                        });
                        if (table.config.debug) {
                                a.tablesorter.benchmark("Applying Zebra widget", time)
                        }
                }
        })
};

//-----------------------------------------
//----  Class                          ----
//-----------------------------------------
function Armee() {
        var F = {
                "Jeune Soldate Naine": [0, 8, 3, 2, 16, 300],
                "Soldate Naine": [0, 10, 5, 4, 20, 450],
                "Naine d'Elite": [0, 13, 7, 6, 26, 570],
                "Jeune Soldate": [0, 16, 10, 9, 30, 740],
                Soldate: [0, 20, 15, 14, 36, 1000],
                Concierge: [0, 30, 1, 25, 70, 1410],
                "Concierge d'élite": [0, 40, 1, 35, 100, 1410],
                Artilleuse: [0, 10, 30, 15, 30, 1440],
                "Artilleuse d'élite": [0, 12, 35, 18, 34, 1520],
                "Soldate d'élite": [0, 27, 24, 23, 44, 1450],
                Tank: [0, 35, 55, 1, 100, 1860],
                "Tank d'élite": [0, 50, 80, 1, 150, 1860],
                Tueuse: [0, 50, 50, 50, 80, 2740],
                "Tueuse d'élite": [0, 55, 55, 55, 90, 2740]
        };
        var e = [1, 2, 3, 4, 5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10];
        var m = [0, 0, 0, 0.016, 0.093, 0.345, 0.577777778, 0.753, 0.837, 0.874, 0.937, 0.96, 0.989];
        var v = [0.103971824, 0.066805442, 0.036854146, 0.014477073, 0.010067247, 0.008361713, 0.00751662, 0.007060666, 0.006692853, 0.006402339, 0.006090569, 0.0057788, 0.005080623];
        var t = [0.14183641, 0.089382202, 0.065595625, 0.037509208, 0.024982573, 0.018532185, 0.014281932, 0.011725921, 0.010437083, 0.009834768, 0.009339662, 0.008844556, 0.008502895];
        var y = [0.33333334, 0.176739357, 0.113191158, 0.08245817, 0.051342954, 0.036955988, 0.03395735, 0.032083615, 0.026461955, 0.024588162, 0.021774264, 0.018960366, 0.017190797];
        var a = [12, 10, 7, 5, 4, 3, 1, 13, 11, 9, 8, 6, 2];
        var B = [12, 10, 7, 5, 4, 3, 1];
        var h = [3, 5, 7, 10, 15, 1, 1, 30, 35, 24, 55, 80, 50, 55];
        var c = 0;
        var j = 0;
        var o = 0;
        var u = 0;
        var w = 0;
        var b = 0;
        var l = new Array();
        var s = new Array();
        var E = new Array();
        this.getUnite = function (G) {
                return F[G][0]
        };
        this.getArmes = function () {
                return c
        };
        this.setArmes = function (G) {
                c = G
        };
        this.getBouclier = function () {
                return j
        };
        this.setBouclier = function (G) {
                j = G
        };
        this.getNbrJSN = function () {
                return o
        };
        this.setNbrJSN = function (G) {
                F["Jeune Soldate Naine"][0] = o - G
        };
        this.getNbrAtt = function () {
                return u
        };
        this.setNbrAtt = function (G) {
                u = G
        };
        this.getVC = function () {
                return b
        };
        this.setVC = function (G) {
                b = G
        };
        this.getNbrChs = function () {
                return w
        };
        this.setNbrChs = function (G) {
                w = G
        };
        this.getHuntRatio = function (G) {
                return e[G]
        };
        this.getHuntReply = function (G) {
                return m[G]
        };
        this.getLossMax = function (G) {
                return y[G]
        };
        this.getSommeUnite = function () {
                var G = 0;
                for (element in F) {
                        G += F[element][0]
                }
                return G
        };
        this.getTime = function () {
                var G = 0;
                for (element in F) {
                        G += (F[element][0] * F[element][5])
                }
                return G
        };
        this.getBaseVie = function () {
                var G = 0;
                for (element in F) {
                        G += (F[element][0] * F[element][1])
                }
                return G
        };
        this.getBonusVie = function (G) {
                return Math.round(this.getBaseVie() * G / 10)
        };
        this.getBonusLieuVie = function (H, G) {
                if (G == 2) {
                        return Math.round(this.getBaseVie() * ((H + 2) / 20))
                }
                if (G == 3) {
                        return Math.round(this.getBaseVie() * (((H + 2) * 3) / 20))
                } else {
                        return 0
                }
        };
        this.getTotalVie = function (I, G, H) {
                return this.getBaseVie() + this.getBonusVie(I) + this.getBonusLieuVie(H, G)
        };
        this.getBaseAtt = function () {
                var G = 0;
                for (element in F) {
                        G += (F[element][0] * F[element][2])
                }
                return G
        };
        this.getBonusAtt = function (G) {
                return Math.round(this.getBaseAtt() * G / 10)
        };
        this.getTotalAtt = function (G) {
                return this.getBaseAtt() + this.getBonusAtt(G)
        };
        this.getBaseDef = function () {
                var G = 0;
                for (element in F) {
                        G += (F[element][0] * F[element][3])
                }
                return G
        };
        this.getBonusDef = function (G) {
                return Math.round(this.getBaseDef() * G / 10)
        };
        this.getTotalDef = function (G) {
                return this.getBaseDef() + this.getBonusDef(G)
        };
        this.getConsommation = function (G) {
                var H = 0;
                for (element in F) {
                        H += Math.round(F[element][0] * F[element][4] * 0.05 * G)
                }
                return H
        };
        this.toString = function () {
                var G = false;
                var H = "";
                for (element in F) {
                        if (F[element][0] > 0) {
                                H += (F[element][0]).nombreFormate(0) + " " + element + ", "
                        }
                }
                return H.slice(0, -2) + "."
        };
        this.__initAjax = function () {
                $.ajax({
                        url: "/Armee.php",
                        async: false,
                        success: function (G) {
                                $(G).find('.simulateur tr[align="center"]:lt(14)').each(function () {
                                        var H = $(this).find(".pas_sur_telephone").text();
                                        if (H && H in F) {
                                                $(this).find("td span").each(function () {
                                                        F[H][0] += parseInt($(this).text().replace(/[^0-9]/g, ""))
                                                })
                                        }
                                });
                                o = F["Jeune Soldate Naine"][0]
                        }
                })
        };
        this.__initAttaquer = function () {
                if ($("#unite1").length) {
                        F["Jeune Soldate Naine"][0] = parseInt(supprEspace($("#unite1").val()))
                }
                if ($("#unite2").length) {
                        F["Soldate Naine"][0] = parseInt(supprEspace($("#unite2").val()))
                }
                if ($("#unite3").length) {
                        F["Naine d'Elite"][0] = parseInt(supprEspace($("#unite3").val()))
                }
                if ($("#unite4").length) {
                        F["Jeune Soldate"][0] = parseInt(supprEspace($("#unite4").val()))
                }
                if ($("#unite5").length) {
                        F.Soldate[0] = parseInt(supprEspace($("#unite5").val()))
                }
                if ($("#unite6").length) {
                        F.Concierge[0] = parseInt(supprEspace($("#unite6").val()))
                }
                if ($("#unite7").length) {
                        F.Artilleuse[0] = parseInt(supprEspace($("#unite7").val()))
                }
                if ($("#unite8").length) {
                        F["Artilleuse d'élite"][0] = parseInt(supprEspace($("#unite8").val()))
                }
                if ($("#unite9").length) {
                        F["Soldate d'élite"][0] = parseInt(supprEspace($("#unite9").val()))
                }
                if ($("#unite10").length) {
                        F.Tank[0] = parseInt(supprEspace($("#unite10").val()))
                }
                if ($("#unite11").length) {
                        F.Tueuse[0] = parseInt(supprEspace($("#unite11").val()))
                }
                if ($("#unite12").length) {
                        F["Tueuse d'élite"][0] = parseInt(supprEspace($("#unite12").val()))
                }
                if ($("#unite13").length) {
                        F["Tank d'élite"][0] = parseInt(supprEspace($("#unite13").val()))
                }
                if ($("#unite14").length) {
                        F["Concierge d'élite"][0] = parseInt(supprEspace($("#unite14").val()))
                }
                o = F["Jeune Soldate Naine"][0]
        };
        this.__initArmeeTdc = function () {
                $(".simulateur tr[align=center]:lt(14)").each(function (G) {
                        var H = $(this).find(".pas_sur_telephone").text();
                        var I = parseInt(supprEspace($(this).find("td:nth-child(3) span").text()));
                        if (I && H in F) {
                                F[H][0] = I
                        }
                })
        };
        this.__initArmeeDome = function () {
                $(".simulateur tr[align=center]:lt(14)").each(function (G) {
                        var H = $(this).find(".pas_sur_telephone").text();
                        $(this).find("td").slice(3, ($(this).find("td").length - 2)).each(function () {
                                var I = parseInt(supprEspace($(this).text()));
                                if (I && H in F) {
                                        F[H][0] = I
                                }
                        })
                })
        };
        this.__initArmeeLoge = function () {
                $(".simulateur tr[align=center]:lt(14)").each(function (G) {
                        var H = $(this).find(".pas_sur_telephone").text();
                        var I = parseInt(supprEspace($(this).find("td:nth-last-child(2)").text()));
                        if (I && H in F) {
                                F[H][0] = I
                        }
                })
        };
        var f = function () {
                var N = parseInt(supprEspace($("#tdc_depart").val()));
                var O = parseInt(supprEspace($("#tdc_cible").val()));
                var L = O;
                if ($("#boite_lance_flood").length) {
                        $("#boite_lance_flood").remove()
                }
                var M = "<fieldset id='boite_lance_flood'><legend><span class='titre'>Lanceur</span></legend><center><table class='tab_attaque centre' style='width:80%' cellspacing=0><tr class='gras even'><td>Étape</td><td>Troupes</td><td>Votre TDC</td><td>TDC Cible</td><td></td></tr>";
                if (O >= (N * 0.5) && O <= (N * 3)) {
                        var G = 0,
                                J = -1;
                        if ($("#methode").val() == 1 && $("#oui").is(":checked")) {
                                G = armee.getSommeUnite();
                                for (var K = 0; K < s.length; K++) {
                                        G -= s[K]
                                }
                                if (G > 0) {
                                        J = s.length == 2 ? 1 : 0
                                }
                        }
                        var I = D();
                        M += "<tr><td colspan='2'>Données initiales</td><td>" + (N).nombreFormate(0) + "</td><td>" + (O).nombreFormate(0) + "</td><td></td></tr>";
                        for (var K = 0; K < s.length; K++) {
                                M += "<tr" + (K % 2 ? "" : " class='even'") + "><td>" + (K + 1) + "</td>";
                                var H = Math.ceil(s[K] * 100 / L);
                                var Q = s[K];
                                if (H > 20) {
                                        H = 20;
                                        Q = Math.floor(L * 0.2)
                                }
                                var P = K == J ? s[K] + G : s[K];
                                L -= Q;
                                M += "<td>" + (P).nombreFormate(0) + " (" + H + " %)</td>";
                                if (I[K]) {
                                        M += "<td class='red' colspan='2'>Troupes insuffisantes</td></tr>"
                                } else {
                                        if (O < (N * 0.5) || O > (N * 3)) {
                                                M += "<td colspan='2'>Cible trop faible</td></tr>"
                                        } else {
                                                M += "<td>" + (N += Q).nombreFormate(0) + "</td>";
                                                M += "<td>" + (O -= Q).nombreFormate(0) + "</td></tr>"
                                        }
                                }
                        }
                } else {
                        M += "<tr><td colspan='2'>Données initiales</td><td colspan='2' class='red'>Données incorrectes</td><td></td></tr>"
                }
                M += "</table></center></fieldset>";
                $("#formulaireChoixArmee").append(M)
        };
        var z = function (G, J) {
                s = new Array();
                var I = u;
                var H = 0;
                while (G < Math.floor(J * 1.4) && I > 0) {
                        s[H++] = Math.floor(J * 0.2);
                        G += s[H - 1];
                        J -= s[H - 1];
                        I--
                }
                if (I >= 2) {
                        var K = Math.floor((J * 2 - G) / 3) - 1;
                        if (K > 0) {
                                s[H++] = K;
                                G += s[H - 1];
                                J -= s[H - 1]
                        }
                        s[H++] = Math.floor(J * 0.2);
                        G += s[H - 1];
                        J -= s[H - 1]
                } else {
                        if (I == 1) {
                                s[H++] = Math.floor(J * 0.2);
                                G += s[H - 1];
                                J -= s[H - 1]
                        }
                }
        };
        var D = function () {
                var H = new Array();
                var I = armee.getSommeUnite();
                for (var G = 0; G < s.length; G++) {
                        H[G] = I >= s[G] ? 0 : 1;
                        I -= s[G]
                }
                return H
        };
        var p = function () {
                E = new Array();
                var H = new Array();
                H[0] = F["Jeune Soldate Naine"][0];
                H[1] = F["Soldate Naine"][0];
                H[2] = F["Naine d'Elite"][0];
                H[3] = F["Jeune Soldate"][0];
                H[4] = F.Soldate[0];
                H[5] = F.Concierge[0];
                H[6] = F["Concierge d'élite"][0];
                H[7] = F.Artilleuse[0];
                H[8] = F["Artilleuse d'élite"][0];
                H[9] = F["Soldate d'élite"][0];
                H[10] = F.Tank[0];
                H[11] = F["Tank d'élite"][0];
                H[12] = F.Tueuse[0];
                H[13] = F["Tueuse d'élite"][0];
                for (var G = 0; G < s.length; G++) {
                        E[G] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        if (H[0] != 0) {
                                E[G][0] = H[0] >= s[G] ? s[G] : H[0];
                                s[G] -= E[G][0];
                                H[0] -= E[G][0];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[1] != 0) {
                                E[G][1] = H[1] >= s[G] ? s[G] : H[1];
                                s[G] -= E[G][1];
                                H[1] -= E[G][1];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[2] != 0) {
                                E[G][2] = H[2] >= s[G] ? s[G] : H[2];
                                s[G] -= E[G][2];
                                H[2] -= E[G][2];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[3] != 0) {
                                E[G][3] = H[3] >= s[G] ? s[G] : H[3];
                                s[G] -= E[G][3];
                                H[3] -= E[G][3];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[4] != 0) {
                                E[G][4] = H[4] >= s[G] ? s[G] : H[4];
                                s[G] -= E[G][4];
                                H[4] -= E[G][4];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[5] != 0) {
                                E[G][5] = H[5] >= s[G] ? s[G] : H[5];
                                s[G] -= E[G][5];
                                H[5] -= E[G][5];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[6] != 0) {
                                E[G][6] = H[6] >= s[G] ? s[G] : H[6];
                                s[G] -= E[G][6];
                                H[6] -= E[G][6];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[7] != 0) {
                                E[G][7] = H[7] >= s[G] ? s[G] : H[7];
                                s[G] -= E[G][7];
                                H[7] -= E[G][7];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[8] != 0) {
                                E[G][8] = H[8] >= s[G] ? s[G] : H[8];
                                s[G] -= E[G][8];
                                H[8] -= E[G][8];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[9] != 0) {
                                E[G][9] = H[9] >= s[G] ? s[G] : H[9];
                                s[G] -= E[G][9];
                                H[9] -= E[G][9];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[10] != 0) {
                                E[G][10] = H[10] >= s[G] ? s[G] : H[10];
                                s[G] -= E[G][10];
                                H[10] -= E[G][10];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[11] != 0) {
                                E[G][11] = H[11] >= s[G] ? s[G] : H[11];
                                s[G] -= E[G][11];
                                H[11] -= E[G][11];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[12] != 0) {
                                E[G][12] = H[12] >= s[G] ? s[G] : H[12];
                                s[G] -= E[G][12];
                                H[12] -= E[G][12];
                                if (s[G] == 0) {
                                        continue
                                }
                        }
                        if (H[13] != 0) {
                                E[G][13] = H[13] >= s[G] ? s[G] : H[13];
                                s[G] -= E[G][13];
                                H[13] -= E[G][13]
                        }
                }
                return H
        };
        var n = function (H) {
                if (s.length == 2) {
                        for (var G = 0; G < H.length; G++) {
                                E[1][G] += H[G]
                        }
                } else {
                        for (var G = 0; G < H.length; G++) {
                                E[0][G] += H[G]
                        }
                }
        };
        this.simulerFlood = function () {
                var G = parseInt(supprEspace($("#tdc_depart").val()));
                var I = parseInt(supprEspace($("#tdc_cible").val()));
                if (I >= (G * 0.5) && I <= (G * 3)) {
                        if ($("#methode").val() == 1) {
                                z(G, I)
                        }
                        if ($("#methode").val() == 2) {
                                s = new Array();
                                for (var H = 0; H < ~~($("#nbr_flood").val()); H++) {
                                        s[H] = parseInt(supprEspace($("#qte_flood").val()))
                                }
                        }
                        if ($("#methode").val() == 3) {
                                s = new Array();
                                var J = I;
                                for (var H = 0; H < ~~($("#nbr_flood").val()); H++) {
                                        prise = Math.floor(J * 0.2);
                                        J -= prise;
                                        s[H] = prise
                                }
                        }
                }
                f()
        };
        this.lancerFlood = function (N) {
                var O = parseInt(supprEspace($("#tdc_depart").val()));
                var P = parseInt(supprEspace($("#tdc_cible").val()));
                if (P >= (O * 0.5) && P <= (O * 3)) {
                        if ($("#methode").val() == 1) {
                                z(O, P)
                        }
                        if ($("#methode").val() == 2) {
                                s = new Array();
                                for (var J = 0; J < ~~($("#nbr_flood").val()); J++) {
                                        s[J] = parseInt(supprEspace($("#qte_flood").val()))
                                }
                        }
                        if ($("#methode").val() == 3) {
                                s = new Array();
                                var K = P;
                                for (var J = 0; J < ~~($("#nbr_flood").val()); J++) {
                                        prise = Math.floor(K * 0.2);
                                        K -= prise;
                                        s[J] = prise
                                }
                        }
                        f();
                        var H = p();
                        if ($("#methode").val() == 1 && $("#oui").is(":checked")) {
                                n(H)
                        }
                        if ($("#adj").is(":checked")) {
                                var I = 60 - (2 * s.length);
                                var G = new Date();
                                var M = (G.getSeconds() + N) % 60;
                                var L = I - M;
                                if (L >= 0) {
                                        $("#sync").html("Synchronisation en cours, veuillez attendre : <span id='dec_sync'>" + L + "</span>.");
                                        decrementTime(L, "dec_sync");
                                        setTimeout(function () {
                                                armee.sendFlood(1);
                                                $("#boite_lance_flood table tr:gt(1)").each(function () {
                                                        $(this).addClass("red")
                                                })
                                        }, L * 1000)
                                } else {
                                        $("#sync").html("Synchronisation en cours, veuillez attendre : <span id='dec_sync'>" + L + "</span>.");
                                        decrementTime(L, "dec_sync");
                                        setTimeout(function () {
                                                armee.sendFlood(1);
                                                $("#boite_lance_flood table tr:gt(1)").each(function () {
                                                        $(this).addClass("red")
                                                })
                                        }, (60 - L) * 1000)
                                }
                        } else {
                                this.sendFlood(1);
                                $("#boite_lance_flood table tr:gt(1)").each(function () {
                                        $(this).addClass("red")
                                })
                        }
                } else {
                        alert("Données incorrectes !")
                }
        };
        this.sendFlood = function (H) {
                if (E.length > 0) {
                        var G = {};
                        G[String($("#tabChoixArmee input:hidden").attr("name"))] = $("#tabChoixArmee input:hidden").attr("value");
                        G.pseudoCible = $("input[name=pseudoCible]").val();
                        G.lieu = "1";
                        G.ChoixArmee = "1";
                        G.unite1 = E[0][0];
                        G.unite2 = E[0][1];
                        G.unite3 = E[0][2];
                        G.unite4 = E[0][3];
                        G.unite5 = E[0][4];
                        G.unite6 = E[0][5];
                        G.unite7 = E[0][7];
                        G.unite8 = E[0][8];
                        G.unite9 = E[0][9];
                        G.unite10 = E[0][10];
                        G.unite11 = E[0][12];
                        G.unite12 = E[0][13];
                        G.unite13 = E[0][11];
                        G.unite14 = E[0][6];
                        E.splice(0, 1);
                        $.ajax({
                                type: "post",
                                url: "/ennemie.php",
                                cache: false,
                                data: G,
                                dataType: "text",
                                error: function (K, I, J) {
                                        alert(I)
                                },
                                success: function (K) {
                                        var I = $("<div/>").append(K);
                                        var J = I.find("#centre").contents().filter(function () {
                                                return this.nodeType == 3
                                        }).text();
                                        if (J.indexOf("Vos troupes sont en marche") == -1) {
                                                $("#boite_lance_flood table tr:eq(" + (H + 1) + ")").html("<td class='red'>" + H + "</td><td colspan='3' class='red'>" + J + "</td>")
                                        } else {
                                                $("#boite_lance_flood table tr:eq(" + (H + 1) + ")").html("<td class='green'>" + H+++"</td><td colspan='3' class='green'>" + J + "</td>")
                                        } if (E.length == 0) {
                                                document.location = "/Armee.php"
                                        } else {
                                                setTimeout(function () {
                                                        armee.sendFlood(H)
                                                }, 2000)
                                        }
                                }
                        })
                }
        };
        var A = function (J) {
                if ($("#boite_lance_hunt").length) {
                        $("#boite_lance_hunt").remove()
                }
                var K = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var G = "<br/><div id='boite_lance_hunt' class='boite_amelioration my_boite'><br/><h2>Lanceur</h2><br/><table cellspacing=0><tr class='even gras'><td>Chasse</td><td>JSN</td><td>SN</td><td>NE</td><td>JS</td><td>S</td><td>C</td><td>CE</td><td>A</td><td>AE</td><td>SE</td><td>Tk</td><td>TkE</td><td>Tu</td><td>TuE</td></tr>";
                for (var I = 0; I < J; I++) {
                        G += "<tr" + (I % 2 ? " class='even'" : "") + "><td>" + (I + 1) + "</td>";
                        for (var H = 0; H < 14; H++) {
                                G += "<td class='small'>" + (E[I][H] > 0 ? (E[I][H]).nombreFormate(0) : "") + "</td>";
                                K[H] += E[I][H]
                        }
                        G += "</tr>"
                }
                G += "<tr" + (I % 2 ? " class='even'" : "") + "><td class='gras total'>Total</td>";
                for (var H = 0; H < 14; H++) {
                        G += "<td class='total small'>" + (K[H]).nombreFormate(0) + "</td>"
                }
                G += "</tr></table></div>";
                $(".boite_amelioration:last").after(G)
        };
        var q = function () {
                var H = parseInt($("#quantite_tdc").text());
                var P = parseInt(supprEspace($("#tdc_depart").val()));
                var U = Math.round(P * 3 / 10);
                var K = 0;
                var J = 0;
                var R = $("#diff_chasse").val();
                var I = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
                var L = new Date();
                if (P > 0 && U > 0) {
                        var S = $("#tdc_chasse").val() && !$("#autoFieldHunt").is(":checked") ? ~~(supprEspace($("#tdc_chasse").val())) : 0;
                        var T = $("#nbr_chasse").val() && !$("#autoNumberHunt").is(":checked") ? ~~($("#nbr_chasse").val()) : 0;
                        var N = x(e[R], P, U, T, S);
                        var O = i(P, N.HF, N.NB);
                        var M = k(R, O);
                        if ($("#autoNumberHunt").is(":checked")) {
                                $("#nbr_chasse").val(N.NB)
                        }
                        K = ~~ ($("#nbr_chasse").val());
                        if ($("#autoFieldHunt").is(":checked")) {
                                $("#tdc_chasse").val((N.HF).nombreFormate(0))
                        }
                        J = ~~ (supprEspace($("#tdc_chasse").val()));
                        var Q = d(P, J, K);
                        $("#ratio_chasse").text(Q.toFixed(2) + " ~ " + C(Q).toFixed(2));
                        if (R < 4) {
                                $("#diff_chasse").css("color", "black")
                        } else {
                                if (R >= 4 && R <= 5) {
                                        $("#diff_chasse").css("color", "red")
                                } else {
                                        if (R > 5 && R < 9) {
                                                $("#diff_chasse").css("color", "orange")
                                        } else {
                                                $("#diff_chasse").css("color", "green")
                                        }
                                }
                        }
                        $("#valueTotal").text((K * J).nombreFormate(0) + " cm²");
                        L.setSeconds(L.getSeconds() + Math.round((H + J) * Math.pow(0.9, b)));
                        $("#dureeTotal").html(timeFormate(Math.round((H + J) * Math.pow(0.9, b))) + " <span class='retour'>retour le " + L.getDate() + " " + I[L.getMonth()] + " à " + datetimeFormate(L.getHours()) + "h" + datetimeFormate(L.getMinutes()) + "</span><span id='temps_js' style='display:none'>" + Math.round((H + J) * Math.pow(0.9, b)) + "</span>");
                        var G = K * J / Math.round((H + J) * Math.pow(0.9, b));
                        $("#rapport").text((G * 86400).toFixed(2) + " cm² / jour");
                        $("#perteJSN").text((Math.round(M.AVG)).nombreFormate(0) + " JSN (max : " + (Math.round(M.MAX)).nombreFormate(0) + ")")
                }
        };
        var x = function (M, L, Q, K, J) {
                var H = new Array();
                var G = L;
                var N = J > 0 ? J : Q;
                var P = K > 0 ? K : 1;
                if (K == 0) {
                        while (d(G, N, P + 1) >= M && P < w) {
                                P += 1
                        }
                }
                if (J == 0) {
                        var O = (N > 5000000000000);
                        for (var I = 5000000000000; I > 4; I = I / 10) {
                                O = (N > I);
                                if (O) {
                                        O = (d(G, N - I, P) < M && N > 1)
                                }
                                while (O) {
                                        N -= I;
                                        O = N > I;
                                        if (O) {
                                                O = (d(G, N - I, P) < M && N > 1)
                                        }
                                }
                        }
                        O = N > 1;
                        if (O) {
                                O = (d(G, N - 1, P) < M && N > 1)
                        }
                        while (O) {
                                N -= 1;
                                O = N > 1;
                                if (O) {
                                        O = (d(G, N - 1, P) < M && N > 1)
                                }
                        }
                        for (var I = 5000000000000; I > 4; I = I / 10) {
                                while (d(G, N + I, P) >= M) {
                                        N += I
                                }
                        }
                        while (d(G, N + 1, P) >= M) {
                                N += 1
                        }
                }
                H.NB = P;
                H.HF = N;
                return H
        };
        var d = function (I, G, H) {
                return armee.getTotalAtt(c) / i(I, G, H)
        };
        var i = function (L, H, K) {
                var G = 0;
                for (var I = 0; I < K; I++) {
                        var J = L + H * I;
                        G += ((H + J * 0.01) * (Math.pow(1.04, (Math.round(Math.log(J / 50) / Math.log(Math.pow(10, 0.1)))))) * 3)
                }
                return G
        };
        var r = function (L, G, K) {
                var I = new Array();
                for (var H = 0; H < K; H++) {
                        var J = L + G * H;
                        I[H] = (G + J * 0.01) * (Math.pow(1.04, (Math.round(Math.log(J / 50) / Math.log(Math.pow(10, 0.1)))))) * 3
                }
                return I
        };
        var k = function (G, I) {
                var H = new Array();
                H.MIN = (v[G]) * I / (10 + j) * 10;
                H.AVG = (t[G]) * I / (10 + j) * 10;
                H.MAX = (y[G]) * I / (10 + j) * 10;
                return H
        };
        var C = function (I) {
                var G = 0;
                for (var H = 0; H < e.length; H++) {
                        if (I >= e[H]) {
                                G = e[H]
                        }
                }
                return G
        };
        var g = function (Q, P, I, M, K) {
                E = new Array();
                var L = new Array();
                L[0] = F["Jeune Soldate Naine"][0];
                L[1] = F["Soldate Naine"][0];
                L[2] = F["Naine d'Elite"][0];
                L[3] = F["Jeune Soldate"][0];
                L[4] = F.Soldate[0];
                L[5] = F.Concierge[0];
                L[6] = F["Concierge d'élite"][0];
                L[7] = F.Artilleuse[0];
                L[8] = F["Artilleuse d'élite"][0];
                L[9] = F["Soldate d'élite"][0];
                L[10] = F.Tank[0];
                L[11] = F["Tank d'élite"][0];
                L[12] = F.Tueuse[0];
                L[13] = F["Tueuse d'élite"][0];
                for (var N = Q - 1; N >= 0; N--) {
                        E[N] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        var R = (I[N] / P) * armee.getBaseAtt();
                        var O = false;
                        for (var H = 0; H < B.length; H++) {
                                O = O || ((L[B[H]]) > 0)
                        }
                        if (O) {
                                E[N][0] = Math.round(M * I[N] / (10 + j) * 10 * K)
                        } else {
                                var G = I[N];
                                for (var J = N - 1; J >= 0; J--) {
                                        G += I[J]
                                }
                                E[N][0] = Math.round(L[0] * I[N] / G)
                        } if (N == 0 || E[N][0] > L[0] || E[N][0] < 0) {
                                E[N][0] = L[0]
                        }
                        L[0] -= E[N][0];
                        R -= (E[N][0] * h[0]);
                        for (var H = 0; H < a.length; H++) {
                                var S = a[H];
                                if (L[S] > 0 && R > 0) {
                                        if (L[S] * h[S] > R) {
                                                E[N][S] = Math.round(R / h[S])
                                        } else {
                                                E[N][S] = L[S]
                                        } if (N == 0 || E[N][S] > L[S] || E[N][S] < 0) {
                                                E[N][S] = L[S]
                                        }
                                        L[S] -= E[N][S];
                                        R -= (E[N][S] * h[S])
                                }
                        }
                }
        };
        this.simulerHunt = function () {
                q();
                var K = parseInt(supprEspace($("#tdc_depart").val()));
                var J = ~~ ($("#nbr_chasse").val());
                var G = ~~ (supprEspace($("#tdc_chasse").val()));
                var I = this.getTotalAtt(c) / i(K, G, J);
                var L = e.indexOf(C(I));
                var M = i(K, G, J);
                var H = r(K, G, J);
                g(J, M, H, this.getLossMax(L), 2);
                A(J)
        };
        this.lancerHunt = function () {
                q();
                var K = parseInt(supprEspace($("#tdc_depart").val()));
                var J = ~~ ($("#nbr_chasse").val());
                var G = ~~ (supprEspace($("#tdc_chasse").val()));
                var I = this.getTotalAtt(c) / i(K, G, J);
                var L = e.indexOf(C(I));
                var M = i(K, G, J);
                var H = r(K, G, J);
                g(J, M, H, this.getLossMax(L), 2);
                A(J);
                $.ajax({
                        url: "/AcquerirTerrain.php",
                        async: false,
                        success: function (O) {
                                var N = $("<div/>").append(O);
                                $("#boite_lance_hunt table tr").slice(1, $("#boite_lance_hunt table tr").length - 1).each(function () {
                                        $(this).addClass("red")
                                });
                                armee.sendHunt(G, J, N.find("table #t").attr("name"), N.find("table #t").val(), 1)
                        }
                })
        };
        this.sendHunt = function (G, J, H, K, L) {
                if (E.length > 0 && H != "" && K != "") {
                        var I = {};
                        I[H] = K;
                        I.ChoixArmee = "1";
                        I.AcquerirTerrain = G;
                        I.unite1 = E[0][0];
                        I.unite2 = E[0][1];
                        I.unite3 = E[0][2];
                        I.unite4 = E[0][3];
                        I.unite5 = E[0][4];
                        I.unite6 = E[0][5];
                        I.unite7 = E[0][7];
                        I.unite8 = E[0][8];
                        I.unite9 = E[0][9];
                        I.unite10 = E[0][10];
                        I.unite11 = E[0][12];
                        I.unite12 = E[0][13];
                        I.unite13 = E[0][11];
                        I.unite14 = E[0][6];
                        E.splice(0, 1);
                        $.ajax({
                                type: "post",
                                url: "/AcquerirTerrain.php",
                                cache: false,
                                data: I,
                                dataType: "text",
                                error: function (O, M, N) {
                                        alert(M)
                                },
                                success: function (M) {
                                        $("#boite_lance_hunt tr:eq(" + (L) + ")").css("color", "green");
                                        if (M.indexOf("Vous n'avez pas") > -1) {
                                                $("#boite_lance_hunt tr:eq(" + (L) + ")").html("<td class='red'>" + L+++"</td><td colspan='14' class='red'>Vous n'avez pas assez de troupes.</td>")
                                        } else {
                                                $("#boite_lance_hunt tr:eq(" + (L) + ")").html("<td>" + L+++"</td><td colspan='14'>La chasse est lancée.</td>")
                                        } if (E.length == 0) {
                                                document.location = "/Ressources.php"
                                        } else {
                                                setTimeout(function () {
                                                        armee.sendHunt(G, J, H, K, L)
                                                }, $("#intervalle_chasse").val() * 1000)
                                        }
                                }
                        })
                }
        }
};

function Box() {
        var d = {
                unite: "Aucune ponte",
                time: ""
        };
        var f = {
                evolution: "Aucune construction",
                time: ""
        };
        var c = {
                evolution: "Aucune recherche",
                time: ""
        };
        var e = {
                materiaux: 0,
                nourriture: 0
        };
        var b = {
                quantite: "Aucune chasse",
                time: 152
        };
        this.__construct = function () {
                var i = null;
                var g = new Date();
                i = getCookie("Ponte");
                if (i) {
                        d.unite = i.split(",")[0];
                        d.time = parseInt((i.split(",")[1] - g.getTime()) / 1000)
                }
                i = getCookie("Construction");
                if (i) {
                        f.evolution = i.split(",")[0];
                        f.time = parseInt((i.split(",")[1] - g.getTime()) / 1000)
                }
                i = getCookie("Laboratoire");
                if (i) {
                        c.evolution = i.split(",")[0];
                        c.time = parseInt((i.split(",")[1] - g.getTime()) / 1000)
                }
                i = getCookie("Production");
                if (i) {
                        e.materiaux = parseInt(i.split(",")[0]);
                        e.nourriture = parseInt(i.split(",")[1])
                }
                creerBoiteComptePlus("fr_FR", false, d.unite, d.time, f.evolution, f.time, c.evolution, c.time, 0, 0, 0, "", "", "", 0, "", "");
                $("#boiteComptePlus .titre_colonne_cliquable").html("<a href='http://outiiil.fr/'>Outiiil 1.2</a>");
                $("#boiteComptePlus .contenu_boite_compte_plus tr:eq(3)").css("display", "none");
                $("#boiteComptePlus .contenu_boite_compte_plus tr:eq(4)").css("display", "none");
                var k = parseInt($("#quantite_tdc").text());
                var h = ~~ (e.materiaux * 100 / k);
                var j = ~~ (e.nourriture * 100 / k);
                var m = j == 100 ? 0 : ~~((100 - j - h) * 100 / (100 - j));
                $("#boiteInfo table").append("<tr onclick='document.location.href=\"Ressources.php\"' class='lien' title='Ressources'><td style='text-align:left'><a href='Ressources.php'><span class='icone_tdc'></span> " + a($("#quantite_tdc").text()) + "</a></td><td id='jauge-terrain' title='TDC : " + (100 - j - h) + "% rien, " + h + "% materiaux, " + j + "% nourriture'><div class='jauge' style='background-color:green'><!-- couleur bouffe--><div class='decor_jauge'></div><div class='plein_marron' style='width:" + (100 - j) + "%;'> <!-- largeur materiaux + rien, couleur materiaux--><div class='plein' style='width:" + m + "% ; float :left'></div><!-- largeur rien, couleur rien--></div></div></td></tr>");
                var l = ~~ ($("#boiteInfo").css("top")) + $(".contenu_boite_info").height() + 70;
                $("#boiteComptePlus").css("top", l + "px")
        };
        var a = function (h) {
                var g = parseInt(h).nombreFormate(0);
                if (g.length >= 14) {
                        g = g.substring(0, g.length - 11) + "<span style='font-size:0.7em'>" + g.substring(g.length - 11, g.length) + "</span>"
                }
                if (g.length <= 13 && g.length >= 11) {
                        g = g.substring(0, g.length - 7) + "<span style='font-size:0.8em'>" + g.substring(g.length - 7, g.length) + "</span>"
                }
                return g
        };
        this.__initChasse = function () {
                var h = null;
                var g = new Date();
                h = getCookie("Chasse");
                if (h) {
                        b.quantite = h.split(",")[0];
                        b.time = parseInt((h.split(",")[1] - g.getTime()) / 1000);
                        $(".contenu_boite_compte_plus table tr:eq(2)").after("<tr><td><img src='http://fourmizzz.fr/images/icone/icone_chasse.gif'/></td><td colspan='2'><span>" + b.quantite + "</span><br/><span id='tempsChasse'></span></td></tr>");
                        decrementTime(b.time, "tempsChasse")
                }
        };
        this.updatePonte = function (g, h) {
                $("a[href='Reine.php'] .ligne_boite_compte_plus:first").text(g);
                decrementTime(h, "tempsUnite")
        };
        this.updateConstruction = function (h, g) {
                $("a[href='construction.php'] .ligne_boite_compte_plus:first").text(h);
                decrementTime(g, "tempsBatiment")
        };
        this.updateRecherche = function (g, h) {
                $("a[href='laboratoire.php'] .ligne_boite_compte_plus:first").text(g);
                decrementTime(h, "tempsRecherche")
        };
        this.updateProduction = function (h, j) {
                var k = parseInt($("#quantite_tdc").text());
                var g = ~~ (h * 100 / k);
                var i = ~~ (j * 100 / k);
                var l = i == 100 ? 0 : ~~((100 - i - g) * 100 / (100 - i));
                $("#jauge-terrain").attr("title", "TDC : " + (100 - i - g) + "% rien, " + g + "% materiaux, " + i + "% nourriture");
                $("#jauge-terrain .plein_marron").css("width", "" + (100 - i) + "%");
                $("#jauge-terrain .plein").css("width", "" + l + "%")
        };
        this.updateChasse = function (g, h) {
                $(".contenu_boite_compte_plus table tr:eq(2)").after("<tr><td><img src='http://fourmizzz.fr/images/icone/icone_chasse.gif'/></td><td colspan='2'><span>" + g + "</span><br/><span id='tempsChasse'></span></td></tr>");
                decrementTime(h, "tempsChasse")
        }
};

function Chat() {
        var a = "";
        var h = {
                emo1: "http://outiiil.fr/images/outiiil/1.gif",
                emo2: "http://outiiil.fr/images/outiiil/2.gif",
                emo3: "http://outiiil.fr/images/outiiil/3.gif",
                emo4: "http://outiiil.fr/images/outiiil/4.gif",
                emo5: "http://outiiil.fr/images/outiiil/5.gif",
                emo6: "http://outiiil.fr/images/outiiil/6.gif",
                emo7: "http://outiiil.fr/images/outiiil/7.gif",
                emo8: "http://outiiil.fr/images/outiiil/8.gif",
                emo9: "http://outiiil.fr/images/outiiil/9.gif",
                emo10: "http://outiiil.fr/images/outiiil/10.gif",
                emo11: "http://outiiil.fr/images/outiiil/11.gif",
                emo12: "http://outiiil.fr/images/outiiil/12.gif",
                emo13: "http://outiiil.fr/images/outiiil/13.gif",
                emo14: "http://outiiil.fr/images/outiiil/14.gif",
                emo15: "http://outiiil.fr/images/outiiil/15.gif",
                emo16: "http://outiiil.fr/images/outiiil/16.gif",
                emo17: "http://outiiil.fr/images/outiiil/17.gif",
                emo18: "http://outiiil.fr/images/outiiil/18.gif",
                emo19: "http://outiiil.fr/images/outiiil/19.gif",
                emo20: "http://outiiil.fr/images/outiiil/20.gif",
                emo21: "http://outiiil.fr/images/outiiil/21.gif",
                emo22: "http://outiiil.fr/images/outiiil/22.gif",
                emo23: "http://outiiil.fr/images/outiiil/23.gif",
                emo24: "http://outiiil.fr/images/outiiil/24.gif",
                emo25: "http://outiiil.fr/images/outiiil/25.gif",
                emo26: "http://outiiil.fr/images/outiiil/26.gif"
        };
        this.__construct = function () {
                if (c = getCookie("color")) {
                        $("#inputCouleur").val(c)
                }
                $("#listeSmiley10").attr("id", "liste1");
                $("#listeSmiley20").attr("id", "liste2");
                $("#listeSmiley30").attr("id", "liste3");
                $("#listeSmiley40").attr("id", "liste4");
                $("#listeSmiley50").attr("id", "liste5");
                if (!(comptePlus)) {
                        f()
                }
                d();
                g();
                b();
                e();
                $("#boutonCouleur").remove();
                $("#smileySuivant0").after(" <strong id='color' title='Couleur' class='cursor' style='color:#" + $("#inputCouleur").val() + "'>Couleur</strong>");
                $("#color").ColorPicker({
                        color: "#" + $("#inputCouleur").val(),
                        onShow: function (k) {
                                $(k).fadeIn(500);
                                return false
                        },
                        onSubmit: function (k, n, l, m) {
                                $(m).val(n);
                                $(m).ColorPickerHide();
                                $("#inputCouleur").val(n);
                                setCookie("color", $("#inputCouleur").val(), 30);
                                $("#color").css("color", "#" + n)
                        },
                        onChange: function (k, m, l) {
                                $("#color").css("color", "#" + m)
                        }
                })
        };
        var d = function () {
                $("#smileyPrecedent0").removeAttr("onclick");
                $("#smileyPrecedent0").click(function () {
                        switch ($("#tousLesSmiley0").find("div:visible").attr("id")) {
                        case "liste1":
                                $("#liste6").removeAttr("style");
                                $("#liste1").css("display", "none");
                                break;
                        case "liste2":
                                $("#liste1").removeAttr("style");
                                $("#liste2").css("display", "none");
                                break;
                        case "liste3":
                                $("#liste2").removeAttr("style");
                                $("#liste3").css("display", "none");
                                break;
                        case "liste4":
                                $("#liste3").removeAttr("style");
                                $("#liste4").css("display", "none");
                                break;
                        case "liste5":
                                $("#liste4").removeAttr("style");
                                $("#liste5").css("display", "none");
                                break;
                        case "liste6":
                                $("#liste5").removeAttr("style");
                                $("#liste6").css("display", "none");
                                break;
                        default:
                                break
                        }
                })
        };
        var g = function () {
                $("#smileySuivant0").removeAttr("onclick");
                $("#smileySuivant0").click(function () {
                        switch ($("#tousLesSmiley0").find("div:visible").attr("id")) {
                        case "liste1":
                                $("#liste2").removeAttr("style");
                                $("#liste1").css("display", "none");
                                break;
                        case "liste2":
                                $("#liste3").removeAttr("style");
                                $("#liste2").css("display", "none");
                                break;
                        case "liste3":
                                $("#liste4").removeAttr("style");
                                $("#liste3").css("display", "none");
                                break;
                        case "liste4":
                                $("#liste5").removeAttr("style");
                                $("#liste4").css("display", "none");
                                break;
                        case "liste5":
                                $("#liste6").removeAttr("style");
                                $("#liste5").css("display", "none");
                                break;
                        case "liste6":
                                $("#liste1").removeAttr("style");
                                $("#liste6").css("display", "none");
                                break;
                        default:
                                break
                        }
                })
        };
        var b = function () {
                lineImg = "<div id='liste6' style='display: none;'>";
                for (elem in h) {
                        lineImg += "<img id='smiley_" + elem + "' src='" + h[elem] + "'>"
                }
                lineImg += "<img width='1' height='39' src='images/carte/rien.gif'></div>";
                $("#tousLesSmiley0").append(lineImg);
                $("img[id^=smiley_]").click(function () {
                        $("#message").val($("#message").val() + "[img]" + h[$(this).attr("id").slice(7)] + "[/img]")
                })
        };
        var e = function () {
                block = " <img src='http://outiiil.fr/images/outiiil/up.png' title='Up'> <img src='http://outiiil.fr/images/outiiil/down.png' title='Down'>";
                $("img[title=Gras]").before(block);
                block = " <img src='http://outiiil.fr/images/outiiil/center.png' title='Center'> <img src='http://outiiil.fr/images/outiiil/right.png' title='Right'>";
                $("img[title=Souligné]").after(block);
                $("img[title=Up]").click(function () {
                        replaceSelection($("#message")[0], "[size=4]" + getSelection($("#message")[0]) + "[/size]", true);
                        $("#message")[0].selectionStart += 8;
                        $("#message")[0].selectionEnd -= 7;
                        $("#message").focus()
                });
                $("img[title=Down]").click(function () {
                        replaceSelection($("#message")[0], "[size=2]" + getSelection($("#message")[0]) + "[/size]", true);
                        $("#message")[0].selectionStart += 8;
                        $("#message")[0].selectionEnd -= 7;
                        $("#message").focus()
                });
                $("img[title=Center]").click(function () {
                        miseEnForme("message", "center")
                });
                $("img[title=Right]").click(function () {
                        miseEnForme("message", "right")
                })
        };
        var f = function () {
                j();
                i();
                $("#smileyPrecedent0").html("<img title='Précédent' class='cursor' src='images/bouton/fleche-champs-gauche.gif' />");
                $("#smileyPrecedent0").css({
                        position: "relative",
                        top: "2px"
                });
                $("#smileySuivant0").html("<img title='Suivant' class='cursor' src='images/bouton/fleche-champs-droite.gif' />");
                $("#smileySuivant0").css({
                        position: "relative",
                        top: "2px"
                });
                if ($("#inputCouleur").val() != "000000" && $("#inputCouleur").val() != "0000000") {
                        $("#message").val("[color=#" + $("#inputCouleur").val() + "][/color]");
                        $("#message")[0].selectionStart = 15;
                        $("#message")[0].selectionEnd = 15
                }
                $("form").submit(function () {
                        if ($("#inputCouleur").val() != "000000" && $("#inputCouleur").val() != "0000000") {
                                $("#message").val("[color=#" + $("#inputCouleur").val() + "][/color]");
                                $("#message")[0].selectionStart = 15;
                                $("#message")[0].selectionEnd = 15
                        }
                })
        };
        var j = function () {
                $("#liste2").html("<img onclick='addRaccourciSmiley(\"message\",\"doctor\")' src='images/smiley/doctor.gif'> <img onclick='addRaccourciSmiley(\"message\",\"borg\")' src='images/smiley/borg.gif'> <img onclick='addRaccourciSmiley(\"message\",\"pirate\")' src='images/smiley/pirate.gif'> <img onclick='addRaccourciSmiley(\"message\",\"sick2\")' src='images/smiley/sick2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"asian\")' src='images/smiley/asian.gif'> <img onclick='addRaccourciSmiley(\"message\",\"dunce\")' src='images/smiley/dunce.gif'> <img onclick='addRaccourciSmiley(\"message\",\"canadian\")' src='images/smiley/canadian.gif'> <img onclick='addRaccourciSmiley(\"message\",\"captain\")' src='images/smiley/captain.gif'> <img onclick='addRaccourciSmiley(\"message\",\"police\")' src='images/smiley/police.gif'> <img onclick='addRaccourciSmiley(\"message\",\"santa\")' src='images/smiley/santa.gif'> <img onclick='addRaccourciSmiley(\"message\",\"cook\")' src='images/smiley/cook.gif'> <img onclick='addRaccourciSmiley(\"message\",\"farmer\")' src='images/smiley/farmer.gif'> <img onclick='addRaccourciSmiley(\"message\",\"smurf\")' src='images/smiley/smurf.gif'> <img onclick='addRaccourciSmiley(\"message\",\"gangster\")' src='images/smiley/gangster.gif'> <img onclick='addRaccourciSmiley(\"message\",\"king\")' src='images/smiley/king.gif'> <img onclick='addRaccourciSmiley(\"message\",\"king2\")' src='images/smiley/king2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"pixie\")' src='images/smiley/pixie.gif'> <img onclick='addRaccourciSmiley(\"message\",\"pirate2\")' src='images/smiley/pirate2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"pirate3\")' src='images/smiley/pirate3.gif'> <img onclick='addRaccourciSmiley(\"message\",\"warrior\")' src='images/smiley/warrior.gif'> <img onclick='addRaccourciSmiley(\"message\",\"card\")' src='images/smiley/card.gif'> <img onclick='addRaccourciSmiley(\"message\",\"egypt\")' src='images/smiley/egypt.gif'> <img onclick='addRaccourciSmiley(\"message\",\"fool\")' src='images/smiley/fool.gif'> <img onclick='addRaccourciSmiley(\"message\",\"hat\")' src='images/smiley/hat.gif'> <img width='1' height='39' src='images/carte/rien.gif'>");
                $("#liste3").html("<img onclick='addRaccourciSmiley(\"message\",\"dead\")' src='images/smiley/dead.gif'> <img onclick='addRaccourciSmiley(\"message\",\"inv\")' src='images/smiley/inv.gif'> <img onclick='addRaccourciSmiley(\"message\",\"stretcher\")' src='images/smiley/stretcher.gif'> <img onclick='addRaccourciSmiley(\"message\",\"blue\")' src='images/smiley/blue.gif'> <img onclick='addRaccourciSmiley(\"message\",\"sick\")' src='images/smiley/sick.gif'> <img onclick='addRaccourciSmiley(\"message\",\"love\")' src='images/smiley/love.gif'> <img onclick='addRaccourciSmiley(\"message\",\"cupid\")' src='images/smiley/cupid.gif'> <img onclick='addRaccourciSmiley(\"message\",\"diablo\")' src='images/smiley/diablo.gif'> <img onclick='addRaccourciSmiley(\"message\",\"crossbones\")' src='images/smiley/crossbones.gif'> <img onclick='addRaccourciSmiley(\"message\",\"fish\")' src='images/smiley/fish.gif'> <img onclick='addRaccourciSmiley(\"message\",\"cupid2\")' src='images/smiley/cupid2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"construction\")' src='images/smiley/construction.gif'> <img onclick='addRaccourciSmiley(\"message\",\"flower\")' src='images/smiley/flower.gif'> <img onclick='addRaccourciSmiley(\"message\",\"drinks\")' src='images/smiley/drinks.gif'> <img onclick='addRaccourciSmiley(\"message\",\"burp\")' src='images/smiley/burp.gif'> <img onclick='addRaccourciSmiley(\"message\",\"rain\")' src='images/smiley/rain.gif'> <img onclick='addRaccourciSmiley(\"message\",\"surf\")' src='images/smiley/surf.gif'> <img onclick='addRaccourciSmiley(\"message\",\"baloon\")' src='images/smiley/baloon.gif'> <img onclick='addRaccourciSmiley(\"message\",\"sleep2\")' src='images/smiley/sleep2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"rip\")' src='images/smiley/rip.gif'> <img onclick='addRaccourciSmiley(\"message\",\"scooter\")' src='images/smiley/scooter.gif'> <img onclick='addRaccourciSmiley(\"message\",\"moto\")' src='images/smiley/moto.gif'> <img width='1' height='39' src='images/carte/rien.gif'>");
                $("#liste4").html("<img onclick='addRaccourciSmiley(\"message\",\"whip\")' src='images/smiley/whip.gif'><img onclick='addRaccourciSmiley(\"message\",\"shades\")' src='images/smiley/shades.gif'><img onclick='addRaccourciSmiley(\"message\",\"kiss\")' src='images/smiley/kiss.gif'><img onclick='addRaccourciSmiley(\"message\",\"boxer\")' src='images/smiley/boxer.gif'><img onclick='addRaccourciSmiley(\"message\",\"gun\")' src='images/smiley/gun.gif'><img onclick='addRaccourciSmiley(\"message\",\"bross\")' src='images/smiley/bross.gif'><img onclick='addRaccourciSmiley(\"message\",\"whistling\")' src='images/smiley/whistling.gif'><img onclick='addRaccourciSmiley(\"message\",\"showoff\")' src='images/smiley/showoff.gif'><img onclick='addRaccourciSmiley(\"message\",\"noel_vache\")' src='images/smiley/noel_vache.gif'><img onclick='addRaccourciSmiley(\"message\",\"app\")' src='images/smiley/app.gif'><img onclick='addRaccourciSmiley(\"message\",\"book\")' src='images/smiley/book.gif'><img onclick='addRaccourciSmiley(\"message\",\"cake\")' src='images/smiley/cake.gif'><img onclick='addRaccourciSmiley(\"message\",\"dance\")' src='images/smiley/dance.gif'><img onclick='addRaccourciSmiley(\"message\",\"harhar\")' src='images/smiley/harhar.gif'><img onclick='addRaccourciSmiley(\"message\",\"juggle\")' src='images/smiley/juggle.gif'><img onclick='addRaccourciSmiley(\"message\",\"worthy\")' src='images/smiley/worthy.gif'><img onclick='addRaccourciSmiley(\"message\",\"fishing\")' src='images/smiley/fishing.gif'><img onclick='addRaccourciSmiley(\"message\",\"stereo\")' src='images/smiley/stereo.gif'><img onclick='addRaccourciSmiley(\"message\",\"music\")' src='images/smiley/music.gif'><img onclick='addRaccourciSmiley(\"message\",\"prison\")' src='images/smiley/prison.gif'><img onclick='addRaccourciSmiley(\"message\",\"piece\")' src='images/smiley/piece.gif'><img width='1' height='39' src='images/carte/rien.gif'>");
                $("#liste5").html("<img onclick='addRaccourciSmiley(\"message\",\"noel_etoile\")' src='images/smiley/noel_etoile.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman10\")' src='images/smiley/noel_snowman10.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman11\")' src='images/smiley/noel_snowman11.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_cadeau3\")' src='images/smiley/noel_cadeau3.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_vache\")' src='images/smiley/noel_vache.gif'> <img onclick='addRaccourciSmiley(\"message\",\"santa\")' src='images/smiley/santa.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_pere\")' src='images/smiley/noel_pere.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_santa\")' src='images/smiley/noel_santa.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_bougie\")' src='images/smiley/noel_bougie.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_chien2\")' src='images/smiley/noel_chien2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_chapeau\")' src='images/smiley/noel_chapeau.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_cadeau\")' src='images/smiley/noel_cadeau.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_sapin3\")' src='images/smiley/noel_sapin3.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman4\")' src='images/smiley/noel_snowman4.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman3\")' src='images/smiley/noel_snowman3.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_chaussette\")' src='images/smiley/noel_chaussette.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_flocon\")' src='images/smiley/noel_flocon.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman5\")' src='images/smiley/noel_snowman5.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_sapin2\")' src='images/smiley/noel_sapin2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman8\")' src='images/smiley/noel_snowman8.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_bonnet\")' src='images/smiley/noel_bonnet.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_renne\")' src='images/smiley/noel_renne.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_renne3\")' src='images/smiley/noel_renne3.gif'> <img width='1' height='39' src='images/carte/rien.gif'>")
        };
        var i = function () {
                block = "<span style='cursor: pointer;position:relative;top:3px'> <img src='images/BBCode/bold.png' title='Gras' onclick=\"miseEnForme('message','gras');\"> <img src='images/BBCode/italic.png' title='Italique' onclick=\"miseEnForme('message','italic');\"> <img src='images/BBCode/underline.png' title='Souligné' onclick=\"miseEnForme('message','souligne');\"> <img src='images/BBCode/picture.png' title='Image' onclick=\"miseEnForme('message','img');\"> <img src='images/BBCode/link.png' title='Lien' onclick=\"miseEnForme('message','url');\"> <img height='15' src='images/BBCode/membre.gif' title='Pseudo' onclick=\"miseEnForme('message','player');\"> <img height='15' src='images/BBCode/groupe.gif' title='Alliance' onclick=\"miseEnForme('message','ally');\"></span>";
                $("#formulaireChat").append(block)
        }
};

function Table() {
        this.__construct = function () {
                var a = $(".tab_triable tr:first").html();
                $(".tab_triable tr:first").remove();
                $(".tab_triable").prepend("<thead class='cursor'><tr class='alt'>" + a + "</tr></thead>");
                $.tablesorter.addParser({
                        id: "myNumeric",
                        is: function (b) {
                                return false
                        },
                        format: function (b) {
                                return b.replace(/\s+/g, "").replace(/,/g, ".")
                        },
                        type: "numeric"
                });
                $(".tab_triable").tablesorter({
                        headers: {
                                0: {
                                        sorter: "myNumeric"
                                },
                                3: {
                                        sorter: "myNumeric"
                                },
                                4: {
                                        sorter: "myNumeric"
                                },
                                5: {
                                        sorter: "myNumeric"
                                },
                                6: {
                                        sorter: "myNumeric"
                                }
                        },
                        widgets: ["zebra"]
                })
        }
};

function Utilitaire() {
        var a = "https://ad.nirgal.com/utilitaire/ajax/";
        var k = new Array();
        var p = new Array();
        var h = new Array();
        var e = new Array();
        var m = new Array();
        var i = new Array();
        var o = function (q) {
                var r = q.split("-");
                return r[2] + "-" + r[1] + "-" + r[0]
        };
        var n = function (r) {
                var q = new Date();
                r = r.getTime() / 86400000;
                q = q.getTime() / 86400000;
                return new Number(q - r).toFixed(0)
        };
        var d = function (r) {
                if (r > 10000000000000) {
                        return (r / 1000000000000).toFixed(0) + " T"
                }
                if (r > 1000000000000) {
                        return (r / 1000000000000).toFixed(1) + " T"
                }
                if (r > 10000000000) {
                        return (r / 1000000000).toFixed(0) + " G"
                }
                if (r > 1000000000) {
                        return (r / 1000000000).toFixed(1) + " G"
                }
                if (r > 10000000) {
                        return (r / 1000000).toFixed(0) + " M"
                }
                if (r > 1000000) {
                        return (r / 1000000).toFixed(1) + " M"
                }
                return r
        };
        var c = function (q, w, v) {
                var u = 0;
                var s = 0;
                var t = "";
                if (p.length > 0) {
                        for (var r = 0; r < p.length; r++) {
                                if (p[r]["etat"] == "WAIT") {
                                        t += "<tr class='command_hidden' style='display:none;'>"
                                } else {
                                        t += "<tr>"
                                }
                                t += "<td>" + p[r]["pseudo"] + "</td><td><img width='18' heigth='18' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif'/></td><td class='right'>" + (p[r]["reste"]).nombreFormate(0) + "</td>";
                                if (p[r]["etat"] == "P1") {
                                        t += "<td><img src='http://img3.fourmizzz.fr/images/icone/3rondrouge.gif' /></td>"
                                } else {
                                        if (p[r]["etat"] == "P2") {
                                                t += "<td><img src='http://img3.fourmizzz.fr/images/icone/2rondorange.gif' /></td>"
                                        } else {
                                                if (p[r]["etat"] == "P3") {
                                                        t += "<td><img src='http://img3.fourmizzz.fr/images/icone/1rondvert.gif' /></td>"
                                                } else {
                                                        t += "<td><img src='http://outiiil.fr/images/outiiil/croix.png' title='Ne pas livrer avant le " + p[r]["date_apres"] + "'/></td>"
                                                }
                                        }
                                }
                                time = Math.ceil(Math.pow(0.9, v) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(p[r]["coord_x"] - q, 2) + Math.pow(p[r]["coord_y"] - w, 2)) / 350))));
                                t += "<td>" + timeFormate(time) + "</td>";
                                if (p[r]["etat"] != "WAIT") {
                                        t += "<td><span id='commande_nou_" + r + "' class='cursor'><img title='livrer' src='http://img3.fourmizzz.fr/images/icone/icone_ouvriere.gif'/></span></td>"
                                } else {
                                        t += "<td></td>"
                                }
                                attente = n(new Date(p[r]["date_prevue"]));
                                if (attente > 0) {
                                        t += "<td><img src='http://outiiil.fr/images/outiiil/question.png' alt='question' title='Date soumise : " + o(p[r]["date_soumise"]) + "&#10;Date prevue : " + o(p[r]["date_prevue"]) + "&#10;Attente : " + attente + " jours'/></td>"
                                } else {
                                        t += "<td><img src='http://outiiil.fr/images/outiiil/question.png' alt='question' title='Date soumise : " + o(p[r]["date_soumise"]) + "&#10;Date prevue : " + o(p[r]["date_prevue"]) + "'/></td>"
                                }
                                t += "</tr>"
                        }
                }
                if (k.length > 0) {
                        for (var r = 0; r < k.length; r++) {
                                if (k[r]["etat"] == "WAIT" || r > 10) {
                                        t += "<tr class='command_hidden' style='display:none;'>"
                                } else {
                                        t += "<tr>"
                                }
                                t += "<td>" + k[r]["pseudo"] + "</td><td><img src='http://img3.fourmizzz.fr/images/icone/icone_bois.gif'/></td><td class='right'>" + (k[r]["reste"]).nombreFormate(0) + "</td>";
                                if (k[r]["etat"] == "P1") {
                                        s += parseInt(k[r]["reste"]);
                                        t += "<td><img src='http://img3.fourmizzz.fr/images/icone/3rondrouge.gif' /></td>"
                                } else {
                                        if (k[r]["etat"] == "P2") {
                                                t += "<td><img src='http://img3.fourmizzz.fr/images/icone/2rondorange.gif' /></td>"
                                        } else {
                                                if (k[r]["etat"] == "P3") {
                                                        t += "<td><img src='http://img3.fourmizzz.fr/images/icone/1rondvert.gif' /></td>"
                                                } else {
                                                        t += "<td><img src='http://outiiil.fr/images/outiiil/croix.png' title='Ne pas livrer avant le " + k[r]["date_apres"] + "'/></td>"
                                                }
                                        }
                                }
                                u += parseInt(k[r]["reste"]);
                                time = Math.ceil(Math.pow(0.9, v) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(k[r]["coord_x"] - q, 2) + Math.pow(k[r]["coord_y"] - w, 2)) / 350))));
                                t += "<td>" + timeFormate(time) + "</td>";
                                if (k[r]["etat"] != "WAIT") {
                                        t += "<td><span id='commande_mat_" + r + "' class='cursor'><img title='livrer' src='http://img3.fourmizzz.fr/images/icone/icone_ouvriere.gif'/></span></td>"
                                } else {
                                        t += "<td></td>"
                                }
                                attente = n(new Date(k[r]["date_prevue"]));
                                if (attente > 0) {
                                        t += "<td><img src='http://outiiil.fr/images/outiiil/question.png' alt='question'  title='Priorité : " + k[r]["priorite"].toFixed(2) + "&#10;Date soumise : " + o(k[r]["date_soumise"]) + "&#10;Date prevue : " + o(k[r]["date_prevue"]) + "&#10;Attente : " + attente + " jours'/></td>"
                                } else {
                                        t += "<td><img src='http://outiiil.fr/images/outiiil/question.png' alt='question'  title='Priorité : " + k[r]["priorite"].toFixed(2) + "&#10;Date soumise : " + o(k[r]["date_soumise"]) + "&#10;Date prevue : " + o(k[r]["date_prevue"]) + "'/></td>"
                                }
                                t += "</tr>"
                        }
                }
                $("#tabConvois").append("<thead><tr class='cursor'><th>Pseudo</th><th>Type</th><th>Quantité</th><th>État</th><th>Temps de trajet</th><th>Livrer</th><th>Infos</th></tr></thead>");
                $("#tabConvois").append(t);
                $("#tabConvois").append("<tfoot><tr class='gras'><td colspan=8>Total : " + (u).nombreFormate(0) + " dont : <span class='red'>" + (s).nombreFormate(0) + " en retard !</span></td></tr></tfoot>");
                $.tablesorter.addParser({
                        id: "myNumeric",
                        is: function (x) {
                                return false
                        },
                        format: function (x) {
                                return x.replace(/\s+/g, "").replace(/,/g, ".")
                        },
                        type: "numeric"
                });
                $.tablesorter.addParser({
                        id: "myTime",
                        is: function (x) {
                                return false
                        },
                        format: function (x) {
                                regexp = new RegExp("((\\d+)J )?s*((\\d+)H )?s*((\\d+)m )?s*((\\d+)s )?s*");
                                duree = 0;
                                if (x.replace(regexp, "$2")) {
                                        duree += ~~(x.replace(regexp, "$2")) * 24
                                }
                                if (x.replace(regexp, "$4")) {
                                        duree = (duree + ~~(x.replace(regexp, "$4"))) * 60
                                }
                                if (x.replace(regexp, "$6")) {
                                        duree = (duree + ~~(x.replace(regexp, "$6"))) * 60
                                }
                                if (x.replace(regexp, "$8")) {
                                        duree += ~~(x.replace(regexp, "$8"))
                                }
                                return duree
                        },
                        type: "numeric"
                });
                $("#tabConvois").tablesorter({
                        headers: {
                                2: {
                                        sorter: "myNumeric"
                                },
                                4: {
                                        sorter: "myTime"
                                },
                                5: {
                                        sorter: false
                                },
                                6: {
                                        sorter: false
                                }
                        },
                        widgets: ["zebra"]
                });
                $("#tabConvois tr").filter(":visible:even").css("background", "#C9AD63")
        };
        var g = function () {
                $("span[id^=commande_nou_]").click(function () {
                        var q = $(this).attr("id").slice(13);
                        page.fillForm(p[q]["id"], p[q]["coord_x"], p[q]["coord_y"], p[q]["pseudo"], "N", p[q]["reste"])
                });
                $("span[id^=commande_mat_]").click(function () {
                        var q = $(this).attr("id").slice(13);
                        page.fillForm(k[q]["id"], k[q]["coord_x"], k[q]["coord_y"], k[q]["pseudo"], "M", k[q]["reste"])
                })
        };
        var j = function () {
                for (var r = 0; r < h.length; r++) {
                        if (h[r]["delai"] > 0) {
                                var q = new Date();
                                var s = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
                                q.setSeconds(q.getSeconds() + h[r]["delai"]);
                                if (h[r]["type"] == "M") {
                                        $("#centre form").before("<br/><strong>- Vous allez recevoir " + (h[r]["quantite"]).nombreFormate(0) + " <img src='http://img3.fourmizzz.fr/images/icone/icone_bois.gif'/> de " + h[r]["pseudo_fourmizzz"] + " dans <span id='convoi_" + r + "'>" + formatTime(h[r]["delai"]) + "</span></strong> - <small><em>Retour le " + q.getDate() + " " + s[q.getMonth()] + " à " + formatDateTime(q.getHours()) + "h" + formatDateTime(q.getMinutes()) + "</em></small>")
                                } else {
                                        $("#centre form").before("<br/><strong>- Vous allez recevoir " + (h[r]["quantite"]).nombreFormate(0) + " <img width='18' heigth='18' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif'/> de " + h[r]["pseudo_fourmizzz"] + " dans <span id='convoi_" + r + "'>" + formatTime(h[r]["delai"]) + "</span></strong> - <small><em>Retour le " + q.getDate() + " " + s[q.getMonth()] + " à " + formatDateTime(q.getHours()) + "h" + formatDateTime(q.getMinutes()) + "</em></small>")
                                }
                                decrementTime(h[r]["delai"], "convoi_" + r)
                        }
                }
        };
        this.__initCommand = function (q, s, r) {
                $.ajax({
                        url: a + "liste_commande.php",
                        dataType: "json",
                        timeout: 5000,
                        xhrFields: {
                                withCredentials: true
                        },
                        error: function (u, t) {
                                alert("Désolé, utilitaire indisponible, veuillez réessayer plus tard !")
                        },
                        success: function (t) {
                                if (t.errorcode == 0) {
                                        k = t.liste_materiaux;
                                        p = t.liste_nourriture;
                                        c(q, s, r);
                                        g();
                                        if (!comptePlus) {
                                                h = t.incoming;
                                                j()
                                        }
                                } else {
                                        $("#tabConvois").html("<tr><td>" + t.errortext + "</td></tr>")
                                }
                        }
                })
        };
        this.sendConvoi = function (r, q) {
                $.ajax({
                        url: a + "ajout_livraison.php",
                        dataType: "json",
                        xhrFields: {
                                withCredentials: true
                        },
                        data: {
                                commande_id: r,
                                quantite: q
                        },
                        error: function (t, s) {
                                alert("Désolé, utilitaire indisponible, veuillez réessayer plus tard !")
                        },
                        success: function (t) {
                                alert(t.errortext);
                                var s = {};
                                s[String($("form center input:hidden").attr("name"))] = $("form center input:hidden").attr("value");
                                s.convoi = "1";
                                s.x = $("#x").val();
                                s.y = $("#y").val();
                                s.nbMateriaux = supprEspace($("#nbMateriaux").val());
                                s.nbNourriture = supprEspace($("#nbNourriture").val());
                                $.ajax({
                                        url: "/commerce.php",
                                        type: "post",
                                        data: s,
                                        success: function () {
                                                document.location = "/commerce.php"
                                        }
                                })
                        }
                })
        };
        this.sendDemande = function (r, s, q) {
                $.ajax({
                        url: a + "ajout_commande.php",
                        dataType: "json",
                        xhrFields: {
                                withCredentials: true
                        },
                        data: {
                                evolution: r,
                                date_prevue: s,
                                date_apres: q
                        },
                        error: function (u, t) {
                                alert("Désolé, utilitaire indisponible, veuillez réessayer plus tard !")
                        },
                        success: function (t) {
                                alert(t.errortext)
                        }
                })
        };
        var l = function (q) {
                $(".simulateur table[class='ligne_paire']").append("<tr><td colspan=2><input id='showPlace' type='checkbox' name='showPlace'>Afficher Place</input></td><td colspan=2><input id='showLevel' type='checkbox' name='showLevel'>Afficher Niveaux</input></td></tr>");
                $(".simulateur table[class='ligne_paire']").append("<tr><td colspan=2><input id='showOption' type='checkbox' name='showOption' checked>Afficher Option</input></td><td colspan=2><input id='showInfo' type='checkbox' name='showInfo' checked>Afficher Temps</input></td></tr>");
                $("#tabMembresAlliance th:eq(1)").css("display", "none");
                $("#tabMembresAlliance th:eq(5)").css("display", "none");
                $("#tabMembresAlliance th:eq(6)").css("display", "none");
                $("#tabMembresAlliance tr:eq(0)").append("<th style='width:120px'>Temps de trajet</th>");
                $("#tabMembresAlliance tfoot td:eq(1)").css("display", "none");
                $("#tabMembresAlliance tfoot td:eq(5)").css("display", "none");
                $("#tabMembresAlliance tfoot td:eq(6)").css("display", "none");
                $("#tabMembresAlliance tbody tr").each(function () {
                        $(this).find("td:eq(1)").css("display", "none");
                        $(this).find("td:eq(5)").css("display", "none");
                        $(this).find("td:eq(6)").css("display", "none");
                        if ($(this).index() >= 0) {
                                $(this).append("<td align='center'></td>")
                        }
                        var r = $(this).find("td:eq(3)").text();
                        if (r in e) {
                                if (e[r]["colonisateur"]) {
                                        $(this).find("td:eq(8) img").attr("title", "Colonisé par : " + e[r]["colonisateur"]);
                                        if (!(e[r]["colonisateur"] in e)) {
                                                $(this).find("td:eq(8) img").attr("src", "http://outiiil.fr/images/outiiil/attention.gif")
                                        }
                                }
                                $(this).find("td:eq(0)").removeAttr("align");
                                $(this).find("td:eq(0)").css("white-space", "nowrap");
                                $(this).find("td:eq(0)").append(" <a href='https://ad.nirgal.com/utilitaire/profil.php?user_id=" + e[r]["phpbb_id"] + "' target='_blank'><img title='Profil utilitaire' src='http://outiiil.fr/images/outiiil/utilitaire.png' alt='chasse' /></a>");
                                var t = $("#pseudo").text();
                                var s = $("#quantite_tdc").text();
                                var v = parseInt(supprEspace($(this).find("td:eq(4)").text()));
                                if (v >= ((s * 0.5) + 1) && v <= ((s * 3) - 1) && $(this).find("td:eq(3)").text() != t && e[r]["floodme"]) {
                                        $(this).find("td:eq(4)").addClass("gras");
                                        $(this).find("td:eq(4)").wrapInner("<a title='Attaquer' href='/ennemie.php?Attaquer=" + e[r]["fourmizzz_id"] + "&lieu=1' />")
                                }
                                if (e[r]["status_code"] == 2) {
                                        $(this).find("td:eq(0)").append(" <img title='En chasse' src='http://img3.fourmizzz.fr/images/icone/icone_chasse.gif' alt='chasse' />")
                                }
                                if (e[r]["status_code"] == 3) {
                                        $(this).find("td:eq(0)").append(" <img title='En descente' src='http://outiiil.fr/images/outiiil/descente.png' alt='descente' />")
                                }
                                if (e[r]["status_code"] == 4) {
                                        $(this).find("td:eq(0)").append(" <img title='Ne pas flooder' src='http://outiiil.fr/images/outiiil/croix.png' alt='noflood' />")
                                }
                                var u = Math.ceil(Math.pow(0.9, q) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(e[r]["coord_x"] - e[t]["coord_x"], 2) + Math.pow(e[r]["coord_y"] - e[$("#pseudo").text()]["coord_y"], 2)) / 350))));
                                $(this).find("td:eq(10)").append(timeFormate(u))
                        }
                })
        };
        var f = function () {
                $("#showPlace").change(function () {
                        if ($(this).is(":checked")) {
                                $("#tabMembresAlliance th:eq(1)").css("display", "");
                                $("#tabMembresAlliance tr").each(function () {
                                        $(this).find("td:eq(1)").css("display", "")
                                })
                        } else {
                                $("#tabMembresAlliance th:eq(1)").css("display", "none");
                                $("#tabMembresAlliance tr").each(function () {
                                        $(this).find("td:eq(1)").css("display", "none")
                                })
                        }
                });
                $("#showLevel").click(function () {
                        if ($(this).is(":checked")) {
                                $("#tabMembresAlliance th:eq(5)").css("display", "");
                                $("#tabMembresAlliance th:eq(6)").css("display", "");
                                $("#tabMembresAlliance tr").each(function () {
                                        $(this).find("td:eq(5)").css("display", "");
                                        $(this).find("td:eq(6)").css("display", "")
                                })
                        } else {
                                $("#tabMembresAlliance th:eq(5)").css("display", "none");
                                $("#tabMembresAlliance th:eq(6)").css("display", "none");
                                $("#tabMembresAlliance tr").each(function () {
                                        $(this).find("td:eq(5)").css("display", "none");
                                        $(this).find("td:eq(6)").css("display", "none")
                                })
                        }
                });
                $("#showOption").click(function () {
                        if ($(this).is(":checked")) {
                                $("#tabMembresAlliance th:eq(0)").css("display", "");
                                $("#tabMembresAlliance th:eq(8)").css("display", "");
                                $("#tabMembresAlliance tr").each(function () {
                                        $(this).find("td:eq(0)").css("display", "");
                                        $(this).find("td:eq(9)").css("display", "")
                                })
                        } else {
                                $("#tabMembresAlliance th:eq(0)").css("display", "none");
                                $("#tabMembresAlliance th:eq(8)").css("display", "none");
                                $("#tabMembresAlliance tr").each(function () {
                                        $(this).find("td:eq(0)").css("display", "none");
                                        $(this).find("td:eq(9)").css("display", "none")
                                })
                        }
                });
                $("#showInfo").click(function () {
                        if ($(this).is(":checked")) {
                                $("#tabMembresAlliance th:eq(9)").css("display", "");
                                $("#tabMembresAlliance tr").each(function () {
                                        $(this).find("td:eq(10)").css("display", "")
                                })
                        } else {
                                $("#tabMembresAlliance th:eq(9)").css("display", "none");
                                $("#tabMembresAlliance tr").each(function () {
                                        $(this).find("td:eq(10)").css("display", "none")
                                })
                        }
                })
        };
        this.__initStatus = function (q) {
                $.ajax({
                        url: a + "info_sdc.php",
                        dataType: "json",
                        timeout: 5000,
                        xhrFields: {
                                withCredentials: true
                        },
                        error: function (s, r) {
                                alert("Désolé, utilitaire indisponible, veuillez réessayer plus tard !")
                        },
                        success: function (r) {
                                if (r.errorcode == 0) {
                                        e = r.info;
                                        l(q);
                                        f()
                                } else {
                                        $(".simulateur h2:first").after("<p>" + r.errortext + "</p>")
                                }
                        }
                })
        };
        var b = function () {
                var content = "";
                if (m.messages != undefined) {
                        content += "<tr><td>Messages</td><td class=center>";
                        var i;
                        for (i=0; i<m.messages.length; ++i) {
                                msg = m.messages[i];
                                content += msg.unread + '<a href="' + msg.url + '" target=_tab><img src="' + msg.icon + '" width="18" height="18" title="'+msg.name+'" src="images/carte/rien.gif" alt="'+msg.name+'" style="vertical-align:bottom"></img></a> ';
                        }
                        content += '</td></tr>';
                }
                if (m.tdc_virtuel !== undefined) {
                        var s = Math.pow(2, m.ent_materiaux) * 1200 + 500;
                        var r = (m.solde >= 2 * s || m.solde <= -1 * s) ? "red" : "";
                        content += "<tr title='Vous récoltez : " + d(m.tdc_virtuel * 48) + " / jour, " + d(m.tdc_virtuel * 48 * 31) + " / mois'><td>Terrain</td><td>" + (m.tdc_virtuel).nombreFormate(0) + " cm²</td><td><img alt='TDC' src='http://img3.fourmizzz.fr/images/icone/icone_tdc.gif' width='18' height='18'/></td></tr><tr class='lien' onclick='document.location.href=\"commerce.php\"' title='- " + (s).nombreFormate(0) + " ≤ Solde ≤ " + (2 * s).nombreFormate(0) + "'><td>Solde</td><td class='" + r + "'>" + (m.solde).nombreFormate(0) + "</td><td><img alt='materiaux' src='http://s1.fourmizzz.fr/images/smiley/wood.gif' width='18' height='18'/></td></tr>";
                }
                if (content) {
                        $("#menuBoite").append("<div id='boiteAD' class='boite_compte_plus'><div class='titre_colonne_cliquable'><a class='titre_compte_plus'>Alliance Défensive</a></div><div class='contenu_boite_compte_plus'><table></table></div></div>");
                        $("#boiteAD table").append(content);
                        var t = parseInt($("#boiteComptePlus").css("top")) + $(".contenu_boite_compte_plus").height() + 60;
                        $("#boiteAD").css({
                                position: "absolute",
                                left: "15px",
                                top: t + "px"
                        })
                }
        };
        this.__initDataPlayer = function () {
                $.ajax({
                        url: a + "info_player.php",
                        dataType: "json",
                        timeout: 5000,
                        xhrFields: {
                                withCredentials: true
                        },
                        success: function (q) {
                                if (q.errorcode == 0) {
                                        m.activite = q.mul_tantieme;
                                        m.solde = q.solde_virtuel;
                                        m.ent_materiaux = q.ent_materiaux;
                                        m.tdc_virtuel = q.tdc_virtuel;
                                        m.messages = q.messages;
                                        b()
                                }
                        }
                })
        }
};

function PageAlliance() {
        this.__construct = function () {
                linkBottom();
                linkTop();
                b();
                if (!(comptePlus)) {
                        c()
                }
                if (test_alliance) {
                        a()
                }
        };
        var b = function () {
                var e = 0;
                var f = 0;
                var d = 0;
                var h = $("#pseudo").text();
                var g = $("#quantite_tdc").text();
                $("#tabMembresAlliance tbody tr:gt(0)").each(function () {
                        e += parseInt(supprEspace($(this).find("td:eq(4)").text()));
                        f += ~~($(this).find("td:eq(6)").text());
                        d += ~~($(this).find("td:eq(5)").text());
                        var i = parseInt(supprEspace($(this).find("td:eq(4)").text()));
                        if (i >= ((g * 0.5) + 1) && i <= ((g * 3) - 1) && $(this).find("td:eq(3)").text() != h) {
                                $(this).find("td:eq(4)").addClass("bleu")
                        }
                });
                $(".simulateur table[class='ligne_paire'] tr:eq(0) td:eq(1)").append("  (" + $("img[alt='Actif']").length + ")");
                $(".simulateur table[class='ligne_paire'] tr:eq(0) td:eq(3)").append("  (" + $("img[alt='Vacances']").length + ")");
                $(".simulateur table[class='ligne_paire'] tr:eq(1) td:eq(1)").append("  (" + $("img[alt='Inactif depuis 3 jours']").length + ")");
                $(".simulateur table[class='ligne_paire'] tr:eq(1) td:eq(3)").append("  (" + $("img[alt='Bannie']").length + ")");
                $(".simulateur table[class='ligne_paire'] tr:eq(2) td:eq(1)").append("  (" + $("img[alt='Inactif depuis 10 jours']").length + ")");
                $(".simulateur table[class='ligne_paire'] tr:eq(2) td:eq(3)").append("  (" + $("img[alt='Colonisé']").length + ")");
                $(".simulateur h2:first").after("<span class='retour'>Terrain : <span id='totalTerrain'>" + (e).nombreFormate(0) + "</span> cm², Fourmilière : " + (f).nombreFormate(0) + ", Technologie : " + (d).nombreFormate(0) + ".</span>")
        };
        var c = function () {
                var d = $("#tabMembresAlliance tr:first").html();
                $("#tabMembresAlliance tr:first").remove();
                $("#tabMembresAlliance").prepend("<thead class='cursor'><tr class='alt'>" + d + "</tr></thead>");
                $.tablesorter.addParser({
                        id: "myNumeric",
                        is: function (e) {
                                return false
                        },
                        format: function (e) {
                                return e.replace(/\s+/g, "").replace(/,/g, ".")
                        },
                        type: "numeric"
                });
                $("#tabMembresAlliance").tablesorter({
                        headers: {
                                0: {
                                        sorter: false
                                },
                                1: {
                                        sorter: "myNumeric"
                                },
                                4: {
                                        sorter: "myNumeric"
                                },
                                5: {
                                        sorter: "myNumeric"
                                },
                                6: {
                                        sorter: "myNumeric"
                                },
                                8: {
                                        sorter: false
                                }
                        },
                        widgets: ["zebra"]
                })
        };
        var a = function () {
                var m = new PageLaboratoire();
                var i = new Utilitaire();
                var k = $("#tabMembresAlliance").text().match(/Récolteur/g).length;
                var d = 0;
                var e = $("#tabMembresAlliance").text().match(/Passeur/g).length;
                var g = 0;
                var h = $("#tabMembresAlliance").text().match(/CHASSEUR/g).length;
                var f = 0;
                var l = $("#tabMembresAlliance").text().match(/ADsien/g).length;
                var j = 0;
                $("#tabMembresAlliance tr").each(function () {
                        if ($(this).find("td:eq(2)").text().indexOf("Récolteur") != -1) {
                                d += parseInt(supprEspace($(this).find("td:eq(4)").text()))
                        }
                        if ($(this).find("td:eq(2)").text().indexOf("Passeur") != -1) {
                                g += parseInt(supprEspace($(this).find("td:eq(4)").text()))
                        }
                        if ($(this).find("td:eq(2)").text().indexOf("CHASSEUR") != -1) {
                                f += parseInt(supprEspace($(this).find("td:eq(4)").text()))
                        }
                        if ($(this).find("td:eq(2)").text().indexOf("ADsien") != -1) {
                                j += parseInt(supprEspace($(this).find("td:eq(4)").text()))
                        }
                });
                var n = "<br/><br/><span class='retour'>Récolteurs  (" + k + " - " + (k * 100 / ($("#tabMembresAlliance tr").length - 1)).toFixed(2) + "%) : " + (d).nombreFormate(0) + " cm²</br>Passeurs (" + e + " - " + (e * 100 / ($("#tabMembresAlliance tr").length - 1)).toFixed(2) + "%) : " + (g).nombreFormate(0) + " cm²</br>Chasseurs (" + h + " - " + (h * 100 / ($("#tabMembresAlliance tr").length - 1)).toFixed(2) + "%) : " + (f).nombreFormate(0) + " cm²</br>ADsiens (" + l + " - " + (l * 100 / ($("#tabMembresAlliance tr").length - 1)).toFixed(2) + "%) : " + (j).nombreFormate(0) + " cm²</br>";
                $(".retour").after(n);
                m.__initAjax();
                i.__initStatus(m.getNiveau("Vitesse d'attaque"))
        }
};

function PageArmee() {
        var j = new Armee();
        var h = new Armee();
        var i = new Armee();
        var g = 0;
        this.getNbrAtt = function () {
                return g
        };
        this.__construct = function () {
                j.__initArmeeTdc();
                h.__initArmeeDome();
                i.__initArmeeLoge();
                g = $("#centre").text().split("- Vous allez attaquer").length - 1;
                $("h3:eq(2)").append(" " + g + ", reste : " + (pageLaboratoire.getNiveau("Vitesse d'attaque") + 1 - g) + ".</p>");
                if (connecte)
                        $("#centre").prepend("<p class='centre'>Temps <span class='gras' title='Hall Of Fame' >HOF</span> de votre armée : <span class='gras'>" + f(j.getTime() + h.getTime() + i.getTime()) + "</span>.</p>");
                var k = j.getSommeUnite() + h.getSommeUnite() + i.getSommeUnite();
                if (k > 1) {
                        $("h3:first").append(" (" + (k).nombreFormate(0) + " unités)</p>")
                } else {
                        $("h3:first").append(" (" + k + " unité)</p>")
                }
                $(".simulateur:eq(1)").append("<tr class='centre'><td colspan='5'><input id='sondeTerrain' type='button' value='Envoyer une unité sur le terrain'/></td></tr>");
                $("#sondeTerrain").click(function () {
                        $("#nbTroupes").val(1);
                        $("#TerrainDestination").attr("checked", "checked");
                        if (h.getUnite($("#ChoixUnite option:selected").text()) > 0) {
                                $("#FourmiliereOrigine").attr("checked", "checked")
                        }
                        $("input[name=Transferer]").click()
                });
                if (!(comptePlus)) {
                        d()
                }
        };
        this.__initAjax = function () {
                $.ajax({
                        url: "/Armee.php",
                        async: false,
                        success: function (k) {
                                g = $(k).text().split("- Vous allez attaquer").length - 1
                        }
                })
        };
        var f = function (k) {
                if (k > 0) {
                        annees = Math.floor(k / 31536000);
                        k = k - (Math.floor(k / 31536000) * 31536000);
                        jours = Math.floor(k / 86400);
                        temp = k - jours * 86400;
                        heures = Math.floor(temp / 3600);
                        minutes = Math.floor(((temp / 3600) - Math.floor(temp / 3600)) * 60);
                        secondes = temp - ((Math.floor(temp / 60)) * 60);
                        message = "";
                        if (annees >= 1) {
                                message += (annees).nombreFormate(0) + "A "
                        }
                        if (jours >= 1) {
                                message += jours + "J "
                        }
                        if (heures >= 1) {
                                message += heures + "H "
                        }
                        if (minutes >= 1) {
                                message += minutes + "m "
                        }
                        if (secondes >= 1) {
                                message += secondes + "s "
                        }
                } else {
                        message = "0 sec"
                }
                return message
        };
        var e = function () {
                var l = pageLaboratoire.getNiveau("Bouclier Thoracique");
                var n = ~~ ($('span:contains("Dôme")').text().replace(/\D/g, ""));
                var m = ~~ ($('span:contains("Loge")').text().replace(/\D/g, ""));
                var k = "<tr id='lineVie' align='center' class='cursor'><td>Vie</td><td colspan=3><img alt='Vie :' src='http://img3.fourmizzz.fr/images/icone/icone_coeur.gif' width='19' height='19' title='Vie' > " + (j.getTotalVie(l, 1, 0)).nombreFormate(0) + "</td><td colspan=3><img alt='Vie :' src='http://img3.fourmizzz.fr/images/icone/icone_coeur.gif' width='19' height='19' title='Vie' > " + (h.getTotalVie(l, 2, n)).nombreFormate(0) + "</td><td colspan=3><img alt='Vie :' src='http://img3.fourmizzz.fr/images/icone/icone_coeur.gif' width='19' height='19' title='Vie' > " + (i.getTotalVie(l, 3, m)).nombreFormate(0) + "</td></tr><tr align='center' class='vie' style='display:none;'><td>Base</td><td colspan=3>" + (j.getBaseVie()).nombreFormate(0) + "</td><td colspan=3>" + (h.getBaseVie()).nombreFormate(0) + "</td><td colspan=3>" + (i.getBaseVie()).nombreFormate(0) + "</td></tr><tr align='center' class='vie' style='display:none;'><td>Bonus Bouclier (" + l + ")</td><td colspan=3>+ " + (j.getBonusVie(l)).nombreFormate(0) + "</td><td colspan=3>+ " + (h.getBonusVie(l)).nombreFormate(0) + "</td><td colspan=3>+ " + (i.getBonusVie(l)).nombreFormate(0) + "</td></tr><tr align='center' class='vie' style='display:none;'><td>Bonus du lieu</td><td colspan=3>+ " + (j.getBonusLieuVie(0, 0).nombreFormate(0)) + "</td><td colspan=3>+ " + (h.getBonusLieuVie(n, 2)).nombreFormate(0) + "</td><td colspan=3>+ " + (i.getBonusLieuVie(m, 3)).nombreFormate(0) + "</td></tr>";
                $(".simulateur tr[align=center]:last").after(k);
                $("#lineVie").click(function () {
                        showHide("vie")
                })
        };
        var b = function () {
                var k = pageLaboratoire.getNiveau("Armes");
                var l = "<tr id='lineAtt' align='center' class='ligne_paire cursor'><td>Dégats en Attaque</td><td colspan=3><img alt='Dégat en défense :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégat en défense :' /> " + (j.getTotalAtt(k)).nombreFormate(0) + "</td><td colspan=3><img alt='Dégat en défense :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégat en défense :' /> " + (h.getTotalAtt(k)).nombreFormate(0) + "</td><td colspan=3><img alt='Dégat en défense :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégat en défense :' /> " + (i.getTotalAtt(k)).nombreFormate(0) + "</td></tr><tr align='center' class='ligne_paire att' style='display:none;'><td>Base</td><td colspan=3>" + (j.getBaseAtt()).nombreFormate(0) + "</td><td colspan=3>" + (h.getBaseAtt()).nombreFormate(0) + "</td><td colspan=3>" + (i.getBaseAtt()).nombreFormate(0) + "</td></tr><tr align='center' class='ligne_paire att' style='display:none;'><td>Bonus Arme (" + k + ")</td><td colspan=3>+ " + (j.getBonusAtt(k)).nombreFormate(0) + "</td><td colspan=3>+ " + (h.getBonusAtt(k)).nombreFormate(0) + "</td><td colspan=3>+ " + (i.getBonusAtt(k)).nombreFormate(0) + "</td></tr>";
                $(".simulateur tr[align=center]:last").after(l);
                $("#lineAtt").click(function () {
                        showHide("att")
                })
        };
        var c = function () {
                var k = pageLaboratoire.getNiveau("Armes");
                var l = "<tr id='lineDef' align='center' class='cursor'><td>Dégats en Défense</td><td colspan=3><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_defense.gif' width='18' height='18' title='Dégats en attaque :' /> " + (j.getTotalDef(k)).nombreFormate(0) + "</td><td colspan=3><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_defense.gif' width='18' height='18' title='Dégats en attaque :' /> " + (h.getTotalDef(k)).nombreFormate(0) + "</td><td colspan=3><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_defense.gif' width='18' height='18' title='Dégats en attaque :' /> " + (i.getTotalDef(k)).nombreFormate(0) + "</td></tr><tr align='center' class='def' style='display:none;'><td>Base</td><td colspan=3>" + (j.getBaseDef()).nombreFormate(0) + "</td><td colspan=3>" + (h.getBaseDef()).nombreFormate(0) + "</td><td colspan=3>" + (i.getBaseDef()).nombreFormate(0) + "</td></tr><tr align='center' class='def' style='display:none;'><td>Bonus Arme (" + k + ")</td><td colspan=3>+ " + (j.getBonusDef(k)).nombreFormate(0) + "</td><td colspan=3>+ " + (h.getBonusDef(k)).nombreFormate(0) + "</td><td colspan=3>+ " + (i.getBonusDef(k)).nombreFormate(0) + "</td></tr>";
                $(".simulateur tr[align=center]:last").after(l);
                $("#lineDef").click(function () {
                        showHide("def")
                })
        };
        var a = function () {
                var k = "<tr align='center' class='ligne_paire'><td>Consommation Journalière</td><td colspan=3><img alt='Consommation Journalière' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif' width='18' height='18' title='Consommation Journalière' /> " + (j.getConsommation(1)).nombreFormate(0) + "</td><td colspan=3><img alt='Consommation Journalière' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif' width='18' height='18' title='Consommation Journalière' /> " + (h.getConsommation(2)).nombreFormate(0) + "</td><td colspan=3><img alt='Consommation Journalière' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif' width='18' height='18' title='Consommation Journalière' /> " + (i.getConsommation(3)).nombreFormate(0) + "</td></tr>";
                $(".simulateur tr[align=center]:last").after(k)
        };
        var d = function () {
                $(".simulateur td").each(function () {
                        if (/^[0-9,]+$/.test($(this).text().replace(/ /g, ""))) {
                                var p = $(this).find("span").attr("id").replace(/\(|\)/g, "");
                                var q = p.split(",")[0];
                                var l = p.split(",")[1].replace(/\'/g, "");
                                var k = p.split(",")[2];
                                if (k != 3) {
                                        var m = ~~ (k) + 1;
                                        var n = $("input:hidden").attr("name") + "=" + $("input:hidden").attr("value");
                                        var o = "Armee.php?Transferer&nbTroupes=" + q + "&ChoixUnite=" + l + "&LieuOrigine=" + k + "&LieuDestination=" + m + "&" + n;
                                        $(this).next().html("<a href=" + o + " class='cursor'><img width='9' height='15' src='http://img2.fourmizzz.fr/images/bouton/fleche-champs-droite.gif'/></a>")
                                }
                                if (k != 1) {
                                        var m = ~~ (k) - 1;
                                        var n = $("input:hidden").attr("name") + "=" + $("input:hidden").attr("value");
                                        var o = "Armee.php?Transferer&nbTroupes=" + q + "&ChoixUnite=" + l + "&LieuOrigine=" + k + "&LieuDestination=" + m + "&" + n;
                                        $(this).prev().html("<a href=" + o + " class='cursor'><img width='9' height='15' src='http://img2.fourmizzz.fr/images/bouton/fleche-champs-gauche.gif'/></a>")
                                }
                        }
                });
                e();
                b();
                c();
                a()
        }
};

function PageAttaquer() {
        this.__construct = function () {
                if ($("#formulaireChoixArmee").length) {
                        armee.__initAttaquer();
                        armee.setNbrAtt(pageLaboratoire.getNiveau("Vitesse d'attaque") + 1 - pageArmee.getNbrAtt());
                        a()
                }
        };
        var a = function () {
                var b = new Date();
                var d = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
                b.setSeconds(b.getSeconds() + joueur1.getDistance(joueur2.getX(), joueur2.getY(), pageLaboratoire.getNiveau("Vitesse d'attaque")));
                var e = "<select id='nbr_flood' class='my_input' title='Nombre d'attaque compris entre 1 et votre vitesse d'attaque + 1'>";
                for (var c = 1; c <= pageLaboratoire.getNiveau("Vitesse d'attaque") + 1 - pageArmee.getNbrAtt(); c++) {
                        e += "<option " + (c == 5 ? "selected" : "") + ">" + c + "</option>"
                }
                e += "</select>";
                var f = "<fieldset><legend><span class='titre'>Lancer vos Attaques</span></legend><center><table id='tableOpti'><tr><td>Méthode</td><td>:</td><td><select id='methode' class='my_input'><option value='1'>Optimisée</option><option value='2'>Uniforme</option><option value='3'>Dégressive</option></select></td></tr><tr><td>TDC estimé à l'arrivée</td><td>:</td><td><input id='tdc_depart' class='my_input' type='text' value='" + (parseInt($("#quantite_tdc").text())).nombreFormate(0) + "' /></td></tr><tr><td>TDC estimé de la cible à l'arrivée</td><td>:</td><td><input id='tdc_cible' class='my_input' type='text' value='" + parseInt(joueur2.getTerrain()).nombreFormate(0) + "' /></td></tr><tr><td>Lancer le surplus d'armée</td><td>:</td><td><input type='radio' name='surplus' value='oui' id='oui'/><label for='oui'>oui</label><input type='radio' name='surplus' value='non' id='non' checked/><label for='non'>non</label></td></tr><tr style='display:none;'><td>Nombre d'attaques</td><td>:</td><td>" + e + "</td></tr><tr style='display:none;'><td>Troupes par attaque</td><td>:</td><td><input id='qte_flood' class='my_input' type='text' value='1 000 000'/></td></tr><tr><td>Synchroniser</td><td>:</td><td><input type='radio' name='adjust' value='oui' id='adj' checked/><label for='adj'>oui</label><input type='radio' name='adjust' value='non' id='nadj'/><label for='nadj'>non</label></td></tr><tr class='centre'><td colspan='3'><span class='retour'>Arrivée le " + b.getDate() + " " + d[b.getMonth()] + " à " + datetimeFormate(b.getHours()) + "h" + datetimeFormate(b.getMinutes()) + "</span></td></tr><tr class='centre'><td colspan='3'><input name='lancer' type='button' value='Lancer flood' /></td></tr></table><p class='gras' id='sync'></p><p class='gras'>Info : Veuillez rester sur cette page le temps du lancement ! (2 secondes entre floods).</p></center></fieldset>";
                $("#formulaireChoixArmee").append(f);
                armee.simulerFlood();
                $("#methode").change(function () {
                        if ($(this).val() == 1) {
                                $("input[name=surplus]").parent().parent().css("display", "");
                                $("#nbr_flood").parent().parent().css("display", "none");
                                $("#qte_flood").parent().parent().css("display", "none")
                        }
                        if ($(this).val() == 2) {
                                $("input[name=surplus]").parent().parent().css("display", "none");
                                $("#nbr_flood").parent().parent().css("display", "");
                                $("#qte_flood").parent().parent().css("display", "")
                        }
                        if ($(this).val() == 3) {
                                $("input[name=surplus]").parent().parent().css("display", "none");
                                $("#nbr_flood").parent().parent().css("display", "");
                                $("#qte_flood").parent().parent().css("display", "none")
                        }
                        armee.simulerFlood()
                });
                $("input[name=surplus]").change(function () {
                        armee.simulerFlood()
                });
                $("#nbr_flood").change(function () {
                        armee.simulerFlood()
                });
                $("#qte_flood").keyup(function () {
                        $(this).val(~~(supprEspace($(this).val())).nombreFormate(0));
                        armee.simulerFlood()
                });
                $("#tdc_depart").keyup(function () {
                        $(this).val(parseInt(supprEspace($(this).val())).nombreFormate(0));
                        armee.simulerFlood()
                });
                $("#tdc_cible").keyup(function () {
                        $(this).val(parseInt(supprEspace($(this).val())).nombreFormate(0));
                        armee.simulerFlood()
                });
                $("input[name=lancer]").click(function () {
                        armee.lancerFlood(joueur1.getDistance(joueur2.getX(), joueur2.getY(), pageLaboratoire.getNiveau("Vitesse d'attaque")))
                })
        }
};

function PageCommerce() {
        var c = new Utilitaire();
        var b = 0;
        var f = 0;
        this.__construct = function () {
                var i = parseInt($("#nb_materiaux").text());
                var h = parseInt($("#nb_nourriture").text());
                var j = Math.ceil((parseInt($("#nb_ouvrieres").text()) - parseInt($("#quantite_tdc").text())) * (10 + (pageConstruction.getNiveau("Etable à pucerons") / 2)));
                f = j > h ? h : j;
                b = j > i ? i : j;
                f = f < 0 ? 0 : f;
                b = b < 0 ? 0 : b;
                g();
                $("#login").val(extractUrlParams()["pseudo"]);
                if (test_alliance) {
                        a()
                }
        };
        var g = function () {
                var i = pageConstruction.getNiveau("Etable à pucerons");
                var h = "<span class='titre'>Organiser un convoi</span><table class='tab_commerce'><tr><td><img width='18' height='18' title='Nourriture' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif' alt='nourriture'/><strong><span id='maxNourriture' class='cursor'> (max : " + (f).nombreFormate(0) + ")</span></strong></td><td>:</td><td><input id='nbNourriture' type='tel' size='15' onkeyup='javascript:calculOuvriere();' name='nbNourriture' value='0'/></td><td>, necessite :</td><td><input id='nbOuvriereNourriture' type='tel' size='15' onkeyup='javascript:calculRessource();' name='nbOuvriereNourriture' value='0'/></td><td> ouvrières.</td></tr><tr><td><img width='18' height='18' title='Materiaux' src='http://img3.fourmizzz.fr/images/icone/icone_bois.gif' alt='materiaux'/><strong><span id='maxMateriaux' class='cursor'> (max : " + (b).nombreFormate(0) + ")</span></strong></td><td>:</td><td><input id='nbMateriaux' type='tel' size='15' onkeyup='javascript:calculOuvriere();' name='nbMateriaux' value='0'/></td><td>, necessite :</td><td><input id='nbOuvriereMateriaux' type='tel' size='15' onkeyup='javascript:calculRessource();' name='nbOuvriereMateriaux' value='0'/></td><td> ouvrières.</td></tr><tr><td colspan=6>X : <input id='x' type='tel' size='4' name='x' value='" + $("#x").val() + "'/>, Y : <input id='y' type='tel' size='4' name='y' value='" + $("#y").val() + "'/>, Pseudo : <input id='login' class='my_input' type='text' name='login'/>, Ami : <select onchange='completeDestination(this.options[this.selectedIndex].value);' name='id'>" + $("select[name='id']").html() + "</select></td></tr><tr class='centre'><td colspan=6>Info : Niveau d'étable <strong>" + i + "</strong>, 1 ouvrière peut transporter : <strong>" + (10 + (i / 2)) + "</strong> ressources.</td></tr><tr class='centre'><td colspan=6><input type='button' value='Lancer le convoi' name='convoi'/><input type='button' value='Effacer' name='reset'/></td></tr></table>";
                $(".boite_membre").html(h);
                $("#maxNourriture").click(function () {
                        var k = pageConstruction.getNiveau("Etable à pucerons");
                        var j = parseInt($(this).text().replace(/\D+/g, ""));
                        if (j == supprEspace($("#nbNourriture").val())) {
                                $("#nbNourriture").val(0);
                                $("#nbOuvriereNourriture").val(0)
                        } else {
                                $("#nbNourriture").val((j).nombreFormate(0));
                                $("#nbOuvriereNourriture").val((Math.ceil(j / (10 + (k / 2)))).nombreFormate(0))
                        }
                });
                $("#maxMateriaux").click(function () {
                        var k = pageConstruction.getNiveau("Etable à pucerons");
                        var j = parseInt($(this).text().replace(/\D+/g, ""));
                        if (j == supprEspace($("#nbMateriaux").val())) {
                                $("#nbMateriaux").val(0);
                                $("#nbOuvriereMateriaux").val(0)
                        } else {
                                $("#nbMateriaux").val((j).nombreFormate(0));
                                $("#nbOuvriereMateriaux").val((Math.ceil(j / (10 + (k / 2)))).nombreFormate(0))
                        }
                });
                $("input[name=convoi]").click(function () {
                        if ($("#idCommand").length && $("#idCommand").val() != "") {
                                if (qte = parseInt(supprEspace($("#nbNourriture").val()))) {
                                        c.sendConvoi($("#idCommand").val(), qte)
                                }
                                if (qte = parseInt(supprEspace($("#nbMateriaux").val()))) {
                                        c.sendConvoi($("#idCommand").val(), qte)
                                }
                        } else {
                                var j = {};
                                j[String($("form center input:hidden").attr("name"))] = $("form center input:hidden").attr("value");
                                j.convoi = "1";
                                j.x = $("#x").val();
                                j.y = $("#y").val();
                                j.nbMateriaux = supprEspace($("#nbMateriaux").val());
                                j.nbNourriture = supprEspace($("#nbNourriture").val());
                                $.ajax({
                                        url: "/commerce.php",
                                        type: "post",
                                        data: j,
                                        success: function () {
                                                document.location = "/commerce.php"
                                        }
                                })
                        }
                });
                $("input[name=reset]").click(function () {
                        $("#nbNourriture").val(0);
                        $("#nbOuvriereNourriture").val(0);
                        $("#nbMateriaux").val(0);
                        $("#nbOuvriereMateriaux").val(0);
                        $("#x").val("");
                        $("#y").val("");
                        $("#login").val("");
                        $("#idCommand").val("")
                })
        };
        var a = function () {
                linkBottom();
                linkTop();
                $("input[name='convoi']").parent().parent().before("<tr class='centre'><td colspan=6><strong>Info : Envoi automatique vers l'utilitaire, uniquement si vous avez cliqué sur livrer auparavant !</strong></td></tr>");
                $(".boite_membre:first").append("<input type='hidden' id='idCommand' name='command'/>");
                d();
                e()
        };
        var d = function () {
                var n = extractUrlParams()["evolution"] ? extractUrlParams()["evolution"] : 0;
                var l = ["Champignonnière", "Entrepôt de Nourriture", "Entrepôt de Matériaux", "Couveuse", "Solarium", "Laboratoire", "Salle d'analyse", "Salle de combat", "Caserne", "Dôme", "Loge Impériale", "Etable à pucerons", "Etable à cochenilles", "Technique de ponte", "Bouclier Thoracique", "Armes", "Architecture", "Communication avec les animaux", "Vitesse de chasse", "Vitesse d'attaque", "Génétique", "Acide", "Poison"];
                var o = ["champi", "ent_nourriture", "ent_materiaux", "couveuse", "solarium", "laboratoire", "salle_analyse", "salle_combat", "caserne", "dome", "loge", "etable_pucerons", "etable_cochenille", "technique_ponte", "bouclier", "armes", "architecture", "com_annimaux", "vitesse_chasse", "vitesse_attaque", "genetique", "acide", "poison"];
                var m = "<select id='evoDemande' class='my_input' title='Evolution souhaité'>";
                for (var h = 0; h < 23; h++) {
                        var j = (h == o.indexOf(n)) ? "selected" : "";
                        m += "<option value='" + h + "' " + j + ">" + l[h] + "</option>"
                }
                m += "</select>";
                var k = "<div class='boite_membre'><span class='titre'>Demander des ressources</span><table class='tab_commerce'><tr><td>Évolution*</td><td>:</td><td class='left'>" + m + "</td></tr><tr><td>Pour le*</td><td>:</td><td class='left'><input id='dateDemande' class='my_input' name='date' type='text' /> (format : aaaa-mm-jj)</td></tr><tr><td>&Agrave; Partir du</td><td>:</td><td class='left'><input id='dateDebut' class='my_input' name='dateD' type='text' /> (format : aaaa-mm-jj)</td></tr><tr class='centre'><td colspan=3><input type='button' id='envoyer' value='Envoyer'/></td></tr></table></div>";
                $(".boite_membre:last").after(k);
                $("#dateDemande").datepicker({
                        dateFormat: "yy-mm-dd",
                        minDate: 0
                });
                $("#dateDebut").datepicker({
                        dateFormat: "yy-mm-dd",
                        minDate: 0
                });
                $("#envoyer").click(function () {
                        var i = ["champi", "ent_nourriture", "ent_materiaux", "couveuse", "solarium", "laboratoire", "salle_analyse", "salle_combat", "caserne", "dome", "loge", "etable_pucerons", "etable_cochenille", "technique_ponte", "bouclier", "armes", "architecture", "com_annimaux", "vitesse_chasse", "vitesse_attaque", "genetique", "acide", "poison"];
                        var q = i[$("#evoDemande").val()];
                        var r = $("#dateDemande").val();
                        var p = new RegExp("^[0-9]{4}-{1}[0-9]{2}-{1}[0-9]{2}$", "g");
                        if (q && p.test(r)) {
                                c.sendDemande(q, r, $("#dateDebut").val())
                        } else {
                                alert("Erreur de saisie !")
                        }
                })
        };
        var e = function () {
                var h = new PageLaboratoire();
                h.__initAjax();
                var i = new PageProfil();
                i.__initAjax($("#pseudo").text());
                $(".boite_membre:first").after("<div class='boite_membre'><span class='titre'>Commandes en cours</span><table id='tabConvois' class='tab_commerce' style='width:85%' cellspacing=0></table><p id='show-all' class='cursor gras'>afficher/cacher</p></div>");
                c.__initCommand(i.getX(), i.getY(), h.getNiveau("Vitesse d'attaque"));
                $("#show-all").click(function () {
                        showHide("command_hidden");
                        $("#tabConvois tr").filter(":visible:even").css("background", "#C9AD63");
                        $("#tabConvois tr").filter(":visible:odd").css("background", "#D7C384")
                })
        };
        this.fillForm = function (m, h, l, k, i, j) {
                if (i == "M") {
                        if (j < b) {
                                $("#nbMateriaux").val((j).nombreFormate(0))
                        }
                }
                if (i == "N") {
                        if (j < f) {
                                $("#nbNourriture").val((j).nombreFormate(0))
                        }
                }
                $("#x").val(h);
                $("#y").val(l);
                $("#idCommand").val(m);
                $("#login").val(k)
        }
};

function PageConstruction() {
        var c = {
                "Champignonnière": 0,
                "Entrepôt de Nourriture": 0,
                "Entrepôt de Matériaux": 0,
                Couveuse: 0,
                Solarium: 0,
                Laboratoire: 0,
                "Salle d'analyse": 0,
                "Salle de combat": 0,
                Caserne: 0,
                "Dôme": 0,
                "Loge Impériale": 0,
                "Etable à pucerons": 0,
                "Etable à cochenilles": 0
        };
        this.getNiveau = function (e) {
                return c[e]
        };
        this.__construct = function () {
                $(".ligneAmelioration").each(function () {
                        c[$(this).find("h2").text()] = ~~ ($(this).find(".niveau_amelioration").text().substring(6))
                });
                if (comptePlus) {
                        var i = $("#centre strong:eq(0)").text();
                        var h = i.substring(2, i.indexOf("se termine") - 1);
                        var i = $("#centre strong:eq(1)").text();
                        var f = i.substring(2, i.indexOf("se termine") - 1);
                        if (h)
                               c[h]--;
                        if (f)
                               c[f]--;
                }
                var g = (21 + c["Etable à pucerons"]) * 40 * Math.pow(2, (c["Etable à pucerons"] + 3));
                var e = (parseInt($("#nb_ouvrieres").text()) - parseInt($("#quantite_tdc").text())) > g ? "green" : "red";
                $(".desciption_amelioration:eq(11) table").append("<tr><td>Utile si:</td><td class='" + e + "'><img width='18' height='18' src='http://img3.fourmizzz.fr/images/icone/icone_ouvriere.gif' alt='ouvrieres'/> de livraison &gt; " + (g).nombreFormate(0) + "</td></tr>");
                if (!(comptePlus)) {
                        d()
                }
                if (test_alliance) {
                        a()
                }
        };
        this.__initAjax = function () {
                $.ajax({
                        url: "/construction.php",
                        async: false,
                        success: function (f) {
                                var e = $("<div/>").append(f);
                                e.find(".ligneAmelioration").each(function () {
                                        c[$(this).find("h2").text()] = ~~ ($(this).find(".niveau_amelioration").text().substring(6))
                                });
                                if (comptePlus) {
                                        var i = e.find("#centre strong:eq(0)").text();
                                        var h = i.substring(2, i.indexOf("se termine") - 1);
                                        var i = e.find("#centre strong:eq(1)").text();
                                        var g = i.substring(2, i.indexOf("se termine") - 1);
                                        if (h)
                                                c[h]--;
                                        if (g)
                                                c[g]--;
                                }
                        }
                })
        };
        var d = function () {
                var g = $("#centre strong").text();
                var h = g.substring(2, g.indexOf("se termine") - 1);
                if (h && !(getCookie("Construction"))) {
                        var e = new Date();
                        var f = parseInt(g.split(",")[0].split("(")[1]);
                        h = h.substr(0, 1).toUpperCase() + h.substr(1);
                        setCookie("Construction", h + "," + ((f * 1000) + e.getTime()), f / 86400);
                        box.updateConstruction(h, f)
                }
                if ($("a:contains('Annuler')").length) {
                        $("a:contains('Annuler')").click(function () {
                                deleteCookie("Construction")
                        })
                }
        };
        var a = function () {
                var f = new PageLaboratoire();
                f.__initAjax();
                var e = b(f.getSommeNiveau());
                if (c["Champignonnière"] < e) {
                        $(".desciption_amelioration:eq(0) div br:eq(2)").after("Demandé : <span class='red'>" + e + "</span> <img src='http://outiiil.fr/images/outiiil/question.png' alt='question' title='Niveau de champignonnière insuffisant, votre terrain de chasse virtuel est réduit de " + Math.round((e - c["Champignonnière"]) * 100 / e) + "%.' />.")
                } else {
                        $(".desciption_amelioration:eq(0) div br:eq(2)").after("Demandé : <span class='green'>" + e + "</span>.")
                }
                $(".cout_amelioration table").each(function (g) {
                        $(this).append("<tr><td></td><td><input type='button' name='commander" + g + "' value='Commander'/></td></tr>")
                });
                $("input[name^=commander]").click(function () {
                        evol = ["champi", "ent_nourriture", "ent_materiaux", "couveuse", "solarium", "laboratoire", "salle_analyse", "salle_combat", "caserne", "dome", "loge", "etable_pucerons", "etable_cochenille"];
                        document.location = "/commerce.php?evolution=" + evol[$(this).attr("name").slice(9)]
                })
        };
        var b = function (e) {
                if (e <= 100) {
                        return Math.floor(e * 25 / 100)
                } else {
                        if (e <= 190) {
                                return Math.floor(25 + (e - 100) / 10)
                        } else {
                                if (e <= 200) {
                                        return 34
                                } else {
                                        return Math.floor(34 + (e - 200) / 10)
                                }
                        }
                }
        }
};

function PageDescriptionAlliance() {
        this.__construct = function () {
                linkBottom();
                linkTop();
                $("#top").before("<br/>");
                $("#centre center:first").remove();
                var c = 0;
                var d = 0;
                var b = 0;
                var f = $("#pseudo").text();
                var e = $("#quantite_tdc").text();
                $("#tabMembresAlliance tbody tr:gt(0)").each(function () {
                        c += parseInt(supprEspace($(this).find("td:eq(3)").text()));
                        d += ~~($(this).find("td:eq(5)").text());
                        b += ~~($(this).find("td:eq(4)").text());
                        var g = parseInt(supprEspace($(this).find("td:eq(3)").text()));
                        if (g >= ((e * 0.5) + 1) && g <= ((e * 3) - 1) && $(this).find("td:eq(2)").text() != f) {
                                $(this).find("td:eq(3)").addClass("blue")
                        }
                });
                $("#tabMembresAlliance").after("<br/><p class='retour'>Terrain : <span id='totalTerrain'>" + (c).nombreFormate(0) + "</span> cm², Fourmilière : " + (d).nombreFormate(0) + ", Technologie : " + (b).nombreFormate(0) + ".</p>");
                if (!(comptePlus)) {
                        a()
                }
        };
        var a = function () {
                var b = $("#tabMembresAlliance tr:first").html();
                $("#tabMembresAlliance tr:first").remove();
                $("#tabMembresAlliance").prepend("<thead class='cursor'><tr class='alt'>" + b + "</tr></thead>");
                $.tablesorter.addParser({
                        id: "myNumeric",
                        is: function (c) {
                                return false
                        },
                        format: function (c) {
                                return c.replace(/\s+/g, "").replace(/,/g, ".")
                        },
                        type: "numeric"
                });
                $("#tabMembresAlliance").tablesorter({
                        headers: {
                                0: {
                                        sorter: "myNumeric"
                                },
                                3: {
                                        sorter: "myNumeric"
                                },
                                4: {
                                        sorter: "myNumeric"
                                },
                                5: {
                                        sorter: "myNumeric"
                                }
                        },
                        widgets: ["zebra"]
                })
        }
};

function PageEnnemie() {
        this.__construct = function () {
                if (test_alliance) {
                        a()
                }
        };
        var a = function () {
                var b = "<table id='tabAttaquer' class='simulateur' cellspacing=0><tr><td colspan=10 style='padding-bottom:10px'><h2>Ennemies</h2></td></tr><table><br/>";
                $(".simulateur:first").before(b)
        }
};

function PageLaboratoire() {
        var b = {
                "Technique de ponte": 0,
                "Bouclier Thoracique": 0,
                Armes: 0,
                Architecture: 0,
                "Communication avec les animaux": 0,
                "Vitesse de chasse": 0,
                "Vitesse d'attaque": 0,
                "Génétique": 0,
                Acide: 0,
                Poison: 0
        };
        this.getNiveau = function (d) {
                return b[d]
        };
        this.getSommeNiveau = function () {
                var e = 0;
                for (var d in b) {
                        e += b[d]
                }
                return e
        };
        this.__construct = function () {
                $(".ligneAmelioration").each(function () {
                        b[$(this).find("h2").text()] = ~~ ($(this).find(".niveau_amelioration").text().substring(6))
                });
                if (comptePlus) {
                        var f = $("#centre strong:eq(0)").text();
                        var e = f.substring(2, f.indexOf("termin") - 1);
                        var f = $("#centre strong:eq(1)").text();
                        var d = f.substring(2, f.indexOf("termin") - 1);
                        if (e)
                                b[e]--;
                        if (d)
                                b[d]--;
                }
                if (!(comptePlus)) {
                        c()
                }
                if (test_alliance) {
                        a()
                }
        };
        this.__initAjax = function () {
                $.ajax({
                        url: "/laboratoire.php",
                        async: false,
                        success: function (f) {
                                var d = $("<div/>").append(f);
                                d.find(".ligneAmelioration").each(function () {
                                        b[$(this).find("h2").text()] = ~~ ($(this).find(".niveau_amelioration").text().substring(6))
                                });
                                if (comptePlus) {
                                        var h = d.find("#centre strong:eq(0)").text();
                                        var g = h.substring(2, h.indexOf("termin") - 1);
                                        var h = d.find("#centre strong:eq(1)").text();
                                        var e = h.substring(2, h.indexOf("termin") - 1);
                                        if (g)
                                                b[g]--;
                                        if (e)
                                                b[e]--;
                                }
                        }
                })
        };
        var c = function () {
                var g = $("#centre strong").text();
                var e = g.substring(2, g.indexOf("termin") - 1);
                if (e && !(getCookie("Laboratoire"))) {
                        var d = new Date();
                        var f = parseInt(g.split(",")[0].split("(")[1]);
                        e = e.substr(0, 1).toUpperCase() + e.substr(1);
                        setCookie("Laboratoire", e + "," + ((f * 1000) + d.getTime()), f / 86400);
                        box.updateRecherche(e, f)
                }
                if ($("a:contains('Annuler')").length) {
                        $("a:contains('Annuler')").click(function () {
                                deleteCookie("Laboratoire")
                        })
                }
        };
        var a = function () {
                $(".cout_amelioration table").each(function (d) {
                        $(this).append("<tr><td></td><td><input type='button' value='Commander' name='commander" + d + "' /></td></tr>")
                });
                $("input[name^=commander]").click(function () {
                        evol = ["technique_ponte", "bouclier", "armes", "architecture", "com_annimaux", "vitesse_chasse", "vitesse_attaque", "genetique", "acide", "poison"];
                        document.location = "/commerce.php?evolution=" + evol[$(this).attr("name").slice(9)]
                })
        }
};

function PageProfil() {
        var a = 0;
        var g = 0;
        var f = 0;
        var d = 0;
        var c = 0;
        var b = 0;
        this.getID = function () {
                return f
        };
        this.getLogin = function () {
                return login
        };
        this.getTerrain = function () {
                return d
        };
        this.getFourmiliere = function () {
                return c
        };
        this.getTechnologie = function () {
                return b
        };
        this.getX = function () {
                return a
        };
        this.getY = function () {
                return g
        };
        this.getDistance = function (i, h, j) {
                return Math.ceil(Math.pow(0.9, j) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(a - i, 2) + Math.pow(g - h, 2)) / 350))))
        };
        this.getNextDistance = function (i, h, j) {
                return Math.ceil(Math.pow(0.9, (j + 1)) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(a - i, 2) + Math.pow(g - h, 2)) / 350))))
        };
        this.__construct = function () {
                var k = new RegExp("x=(\\d*) et y=(\\d*)");
                var h = $(".boite_membre").find("a[href^='carte2.php?']").text();
                a = ~~ (h.replace(k, "$1"));
                g = ~~ (h.replace(k, "$2"));
                var l = extractUrlParams()["Pseudo"];
                if ($("#pseudo").text() != l) {
                        pageLaboratoire = new PageLaboratoire();
                        pageLaboratoire.__initAjax();
                        if (!comptePlus) {
                                e()
                        }
                        var i = new Date();
                        var j = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
                        i.setSeconds(i.getSeconds() + joueur.getDistance(a, g, pageLaboratoire.getNiveau("Vitesse d'attaque")));
                        $("td:contains('Temps de trajet')").parent().attr("title", "Retour le " + i.getDate() + " " + j[i.getMonth()] + " à " + i.getHours() + "h" + i.getMinutes() + "\nVA suivante : " + timeFormate(joueur.getNextDistance(a, g, pageLaboratoire.getNiveau("Vitesse d'attaque"))))
                }
                $("a[href^='commerce.php?ID=']").attr("href", $("a[href^='commerce.php?ID=']").attr("href") + "&pseudo=" + $("h2").text());
                if (l == "Hraesvelg" && location.host.split(".")[0] == "s1") {
                        $("#centre h2").text("Hraesvelg - Développeur d'Outiiil")
                }
        };
        this.__initAjax = function (h) {
                $.ajax({
                        url: "/Membre.php?Pseudo=" + h,
                        async: false,
                        success: function (j) {
                                var i = new RegExp("x=(\\d*) et y=(\\d*)");
                                f = $(j).find(".boite_membre:eq(1) td:first a").attr("href").replace("commerce.php?ID=", "");
                                d = supprEspace($(j).find(".tableau_score tr:eq(3) td:eq(1)").text());
                                c = supprEspace($(j).find(".tableau_score tr:eq(1) td:eq(1)").text());
                                b = supprEspace($(j).find(".tableau_score tr:eq(2) td:eq(1)").text());
                                line = $(j).find("a[href^='carte2.php?']").text();
                                a = ~~ (line.replace(i, "$1"));
                                g = ~~ (line.replace(i, "$2"))
                        }
                })
        };
        var e = function () {
                $(".boite_membre:first div:first table").append("<tr><td style='text-align:right'>Temps de trajet :</td><td>" + timeFormate(joueur.getDistance(a, g, pageLaboratoire.getNiveau("Vitesse d'attaque"))) + "</td></tr>")
        }
};

function PageReine() {
        this.__construct = function () {
                a();
                $("select[name='destination']").each(function () {
                        $(this).val("3")
                });
                if (!(comptePlus)) {
                        b()
                }
        };
        var a = function () {
                var e = [5, 16, 20, 26, 30, 36, 70, 100, 30, 34, 44, 100, 150, 80, 90];
                var d = parseInt($("#nb_nourriture").text());
                var f = [60, 300, 450, 570, 740, 1000, 1410, -1, 1440, 1520, 1450, 1860, -1, 2740, 2740];
                var c = pageConstruction.getNiveau("Couveuse") + pageConstruction.getNiveau("Solarium") + pageLaboratoire.getNiveau("Technique de ponte");
                $(".ligneAmelioration").each(function (h) {
                        if ($(this).find("input").length > 3) {
                                var g = (Math.floor(d / e[h])).nombreFormate(0);
                                if (h == 0) {
                                        line = "<br/><br/><table><tr><td>Max:</td><td class='cursor'>" + g + "</td></tr><tr><td>Temps:</td><td id='time_total_" + h + "'>0 sec</td></tr></table>"
                                } else {
                                        line = "<tr><td>Max:</td><td class='cursor'>" + g + "</td></tr><tr><td>Temps:</td><td id='time_total_" + h + "'>0 sec</td></tr>"
                                }
                                $(this).find(".desciption_amelioration").append(line)
                        }
                        $(this).find("input[name=nombreDePonte]").keyup(function () {
                                var i = $(this).val() ? parseInt(supprEspace($(this).val())) : 0;
                                $(this).val((i).nombreFormate(0));
                                $("#time_total_" + h).text(timeFormate(Math.ceil(i * f[h] * Math.pow(0.9, c))))
                        });
                        $(this).find(".cursor").click(function () {
                                var i = supprEspace($(this).closest(".ligneAmelioration").find("input[name=nombreDePonte]").val()) == Math.floor(d / e[h]) ? 0 : Math.floor(d / e[h]);
                                $(this).closest(".ligneAmelioration").find("input[name=nombreDePonte]").val((i).nombreFormate(0));
                                $("#time_total_" + h).text(timeFormate(Math.ceil(i * f[h] * Math.pow(0.9, c))))
                        })
                })
        };
        var b = function () {
                var f = pageLaboratoire.getNiveau("Armes");
                var i = pageLaboratoire.getNiveau("Bouclier Thoracique");
                var h = [8, 10, 13, 16, 20, 30, 40, 10, 12, 27, 35, 50, 50, 55];
                var g = [3, 5, 7, 10, 15, 1, 1, 30, 35, 24, 55, 80, 50, 55];
                var k = [2, 4, 6, 9, 14, 25, 35, 15, 18, 23, 1, 1, 50, 55];
                $(".vie").each(function (l) {
                        $(this).text(h[l] + " (+" + (h[l] / 10 * i).toFixed(1) + ")")
                });
                $(".icone_degat_attaque").each(function (l) {
                        $(this).next().text(g[l] + " (+" + (g[l] / 10 * f).toFixed(1) + ")")
                });
                $(".degat_defense").each(function (l) {
                        $(this).text(k[l] + " (+" + (k[l] / 10 * f).toFixed(1) + ")")
                });
                var c = $("#unites_restantes_premiere_ponte").text().replace(/[0-9]+/g, "").trim();
                if (c && !getCookie("Ponte")) {
                        var e = new Date();
                        var j = $("#centre script:contains(unites_restantes_premiere_ponte)").html();
                        var d = parseInt(j.split(",")[0].split("(")[1]);
                        c = c.substr(0, 1).toUpperCase() + c.substr(1);
                        setCookie("Ponte", c + "," + ((d * 1000) + e.getTime()), d / 86400);
                        box.updatePonte(c, d)
                }
                if ($("a:contains('Annuler')").length) {
                        $("a:contains('Annuler')").click(function () {
                                deleteCookie("Ponte")
                        })
                }
        }
};

function PageRessource() {
        this.__construct = function () {
                var g = 0;
                if ($("#centre .titre:contains('Chasse en cours')").length) {
                        g = $("#centre").text().split("Vos chasseuses vont conquérir").length - 1;
                        $("#centre .titre:contains('Chasse en cours')").html("Chasse(s) en cours " + g + ", reste : " + (pageLaboratoire.getNiveau("Vitesse de chasse") + 1 - g) + ".<br/>")
                }
                c();
                e();
                if (!(comptePlus)) {
                        d()
                }
                if (g > 0 && !(getCookie("Chasse"))) {
                        var h = $("#centre").text().split("Vos chasseuses vont conquérir");
                        var f = 0;
                        for (i = 1; i < h.length; i++) {
                                f += ~~(supprEspace(h[i].split("cm2")[0]))
                        }
                        b((f).nombreFormate(0) + " cm² (" + g + ")", h[1].split("reste(")[1].split(",")[0])
                }
                if ($("a:contains('Annuler')").length) {
                        $("a:contains('Annuler')").click(function () {
                                deleteCookie("Chasse")
                        })
                }
        };
        this.computeField = function () {
                var j = 0;
                var f = parseInt($("#nb_ouvrieres").text());
                var h = pageConstruction.getNiveau("Etable à pucerons");
                var g = ~~ ($("#etable_colo").val());
                if ($("#nbr_convoi").length && $("#nbr_convoi").val() != "") {
                        j = parseFloat($("#nbr_convoi").val())
                }
                if ($("#nbr_ouv").length && $("#nbr_ouv").val() != "") {
                        f = parseInt(supprEspace($("#nbr_ouv").val()))
                }
                if (j == 0) {
                        return f
                }
                if ($("input[name='colonise']:checked").val() == "oui") {
                        return Math.round((f * j * (10 + (h / 2))) / ((48 + (j * (10 + (h / 2)))) - (48 * ((20 + g) / 100))))
                } else {
                        return Math.round((f * j * (10 + (h / 2))) / (48 + (j * (10 + (h / 2)))))
                }
        };
        var c = function () {
                var g = "<select id='etable_colo' class='my_input' disabled='true'>";
                for (var h = 0; h <= 50; h++) {
                        g += "<option>" + h + "</option>"
                }
                g += "</select>";
                var f = "<br/><table id='boite_tdc_exploitable' class='boite_amelioration my_boite' cellspacing='15'><tr><td class='centre' colspan=4><span class='titre'>Terrain Exploitable</span></td></tr><tr><td>Nombre d'ouvrière</td><td>:</td><td class='left'><input id='nbr_ouv' class='my_input' type='text' value='" + (parseInt($("#nb_ouvrieres").text())).nombreFormate(0) + "' /></td></tr><tr><td>Nombre de convoi par jour (Ex : 4.65864)</td><td>:</td><td class='left'><input id='nbr_convoi' class='my_input' type='text' value='0' /></td></tr><tr><td>Colonisé</td><td>:</td><td class='left'><input type='radio' name='colonise' value='oui' id='oui' /><label for='oui'>oui</label><input type='radio' name='colonise' value='non' id='non' checked/><label for='non'>non</label></td></tr><tr><td>Etable colonisateur</td><td>:</td><td class='left'>" + g + "</td></tr><tr><td>Terrain exploitable</td><td>:</td><td id='tdc_exploitable' class='left'><strong>" + (page.computeField()).nombreFormate(0) + " cm²</strong></td></tr><tr><td class='centre' colspan=4><strong>Info : sans colonie et sans part personnelle.</strong></td></tr></table><br/>";
                $("#boite_tdc").after(f);
                $("#nbr_ouv").keyup(function () {
                        $(this).val(parseInt(supprEspace($(this).val())).nombreFormate(0));
                        $("#tdc_exploitable").html("<strong>" + (page.computeField()).nombreFormate(0) + " cm²</strong>")
                });
                $("#nbr_convoi").keyup(function () {
                        $("#tdc_exploitable").html("<strong>" + (page.computeField()).nombreFormate(0) + " cm²</strong>")
                });
                $("#etable_colo").change(function () {
                        $("#tdc_exploitable").html("<strong>" + (page.computeField()).nombreFormate(0) + " cm²</strong>")
                });
                $("#oui").click(function () {
                        $("#etable_colo").removeAttr("disabled");
                        $("#tdc_exploitable").html("<strong>" + (page.computeField()).nombreFormate(0) + " cm²</strong>")
                });
                $("#non").click(function () {
                        $("#etable_colo").attr("disabled", "true");
                        $("#tdc_exploitable").html("<strong>" + (page.computeField()).nombreFormate(0) + " cm²</strong>")
                })
        };
        var e = function () {
                var m = parseInt($("#quantite_tdc").text());
                var h = pageLaboratoire.getNiveau("Vitesse de chasse") + 2 - $("#boite_tdc").text().split("Vos chasseuses vont conquérir").length;
                armee.setArmes(pageLaboratoire.getNiveau("Armes"));
                armee.setBouclier(pageLaboratoire.getNiveau("Bouclier Thoracique"));
                armee.setVC(pageLaboratoire.getNiveau("Vitesse de chasse"));
                armee.setNbrChs(h);
                var k = "<select id='diff_chasse' class='my_input' title='Ratio (Attaque de votre Armée) / (Difficulté de chasse) : détermine les pertes et taux de réplique de votre chasse...'>";
                for (var g = 0; g < 13; g++) {
                        if (armee.getHuntRatio(g) < 5) {
                                k += "<option value='" + g + "' class='black'>"
                        } else {
                                if (armee.getHuntRatio(g) >= 5 && armee.getHuntRatio(g) < 6.5) {
                                        k += "<option value='" + g + "' class='red'>"
                                } else {
                                        if (armee.getHuntRatio(g) >= 6.5 && armee.getHuntRatio(g) < 8) {
                                                k += "<option value='" + g + "' class='orange'>"
                                        } else {
                                                var j = g == 9 ? "selected" : "";
                                                k += "<option value='" + g + "' class='green' " + j + ">"
                                        }
                                }
                        }
                        k += armee.getHuntRatio(g).toFixed(2) + " → Rep10% : " + (armee.getHuntReply(g) >= 0.2 ? (100 * armee.getHuntReply(g)).toFixed(2) + "%" : "< 20%") + "</option>"
                }
                var l = "<select id='nbr_chasse' class='my_input' disabled='true' title='Nombre de chasse compris entre 1 et votre vitesse de chasse + 1'>";
                for (var g = 1; g <= h; g++) {
                        l += "<option>" + g + "</option>"
                }
                l += "</select>";
                var f = "<br/><table class='boite_amelioration my_boite' cellspacing='15'><tr><td class='centre' colspan=4><span class='titre'>Lancer vos Chasses</span></td></tr><tr><td>TDC estimé à l'arrivée</td><td>:</td><td class='left'><input id='tdc_depart' class='my_input' type='text' value='" + (m >= 1000000 ? "1 000 000" : (m).nombreFormate(0)) + "' /></td></tr><tr><td>Nombre de chasse</td><td>:</td><td class='left'>" + l + "</td><td><input id='autoNumberHunt' type='checkbox' checked='checked' name='optionAuto' value='Auto'>Auto</input></td></tr><tr><td>TDC par chasse</td><td>:</td><td class='left'><input id='tdc_chasse' class='my_input' type='text' disabled='true'/></td><td><input id='autoFieldHunt' type='checkbox' checked='checked' name='optionAuto' value='Auto'>Auto</input></td></tr><tr><td>Ratio ~ Référence</td><td>:</td><td id='ratio_chasse' class='left'>8.33 ~ 8.33</td></tr><tr><td>Difficulté</td><td>:</td><td class='left'>" + k + "</td></tr><tr><td>Garder des JSN</td><td>:</td><td class='left'><input id='keepJSN' class='my_input' type='text' name='keepJSN' value='0' /></td><td>max : " + (armee.getNbrJSN()).nombreFormate(0) + "</td></tr><tr><td>Intervalle entre les chasses</td><td>:</td><td class='left'><select id='intervalle_chasse' class='my_input' title='Intervalle entre les chasses'><option value='2' selected>2 secondes</option><option value='15'>15 secondes</option><option value='30'>30 secondes</option><option value='45'>45 secondes</option><option value='60'>1 minute</option></select></td></tr><tr id='details' class='gras even'><td  class='cursor centre' colspan='4'>Détails</td></tr><tr style='display:none' class='detail'><td>Total</td><td>:</td><td id='valueTotal' class='left'></td></tr><tr style='display:none' class='detail'><td>Temps requis</td><td>:</td><td colspan=2 id='dureeTotal' class='left'></td></tr><tr style='display:none' class='detail'><td>Total / Temps</td><td>:</td><td colspan=2 id='rapport' class='left'></td></tr><tr style='display:none' class='detail'><td>Perte estimé JSN</td><td>:</td><td colspan=2 id='perteJSN' class='left'></td></tr><tr><td class='centre' colspan='4'><input type='button' id='envoyer' value='Envoyer'/></td></tr><tr><td class='centre' colspan='4'><span class='gras'>Info : Veuillez rester sur cette page le temps du lancement !</span></td></tr><tr><td class='centre' colspan='4'><span class='gras'>Info : Basé sur le lanceur de <span class='violet'>Calystene</span>.</span></td></tr></table>";
                $("#boite_tdc_exploitable").after(f);
                armee.simulerHunt();
                $("#tdc_depart").keyup(function () {
                        $(this).val(parseInt(supprEspace($(this).val())).nombreFormate(0));
                        armee.simulerHunt()
                });
                $("#nbr_chasse").click(function () {
                        armee.simulerHunt()
                });
                $("#autoNumberHunt").click(function () {
                        if (!$("#autoNumberHunt").is(":checked")) {
                                $("#nbr_chasse").removeAttr("disabled")
                        } else {
                                $("#nbr_chasse").attr("disabled", "true")
                        }
                        armee.simulerHunt()
                });
                $("#tdc_chasse").keyup(function () {
                        $(this).val(~~(supprEspace($(this).val())).nombreFormate(0));
                        if ($(this).val() == "") {
                                $(this).val(0)
                        }
                        armee.simulerHunt()
                });
                $("#autoFieldHunt").click(function () {
                        if (!$("#autoFieldHunt").is(":checked")) {
                                $("#tdc_chasse").removeAttr("disabled")
                        } else {
                                $("#tdc_chasse").attr("disabled", "true")
                        }
                        armee.simulerHunt()
                });
                $("#keepJSN").keyup(function () {
                        $(this).val(parseInt(supprEspace($(this).val())).nombreFormate(0));
                        armee.setNbrJSN(parseInt(supprEspace($(this).val())));
                        armee.simulerHunt()
                });
                $("#diff_chasse").change(function () {
                        armee.simulerHunt()
                });
                $("#details").click(function () {
                        showHide("detail")
                });
                $("#envoyer").click(function () {
                        b($("#valueTotal").text() + " (" + $("#nbr_chasse").val() + ")", parseInt($("#temps_js").text()));
                        armee.lancerHunt()
                })
        };
        var d = function () {
                $("#RecolteNourriture").after("<a title='Affecter un maximum d’ouvrière à la nourriture' class='button_max' onclick='javascript:maxNourriture();' href='#max'><img width='23' height='23' src='http://img2.fourmizzz.fr/images/bouton/fleche_haut.gif'/></a>");
                $("#RecolteMateriaux").after("<a title='Affecter un maximum d’ouvrière aux matériaux' class='button_max' onclick='javascript:maxMateriaux();' href='#max'><img width='23' height='23' src='http://img2.fourmizzz.fr/images/bouton/fleche_haut.gif'/></a>");
                if (!(getCookie("Production"))) {
                        a()
                }
                $("#ChangeRessource").click(function () {
                        a()
                })
        };
        var a = function () {
                var g = supprEspace($("#RecolteMateriaux").val());
                var f = supprEspace($("#RecolteNourriture").val());
                setCookie("Production", g + "," + f, 1);
                box.updateProduction(g, f)
        };
        var b = function (h, g) {
                var f = new Date();
                setCookie("Chasse", h + "," + ((g * 1000) + f.getTime()), g / 86400);
                box.updateChasse(h, g)
        }
};
