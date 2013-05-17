// ==UserScript==
// @author         Hraesvelg
// @description	   Extension pour www.fourmizzz.fr
// @match          http://*.fourmizzz.fr/*
// @name           Outiiil - 1.1
// @namespace      http://www.outiiil.fr/
// @version        1.1
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require        http://code.jquery.com/ui/1.10.1/jquery-ui.js
// ==/UserScript==

style = " \
#centre { \
	padding-top: 35px !important; \
	text-align: center !important; \
} \
 \
.scroll { \
	color: green; \
	cursor: pointer; \
	display: block; \
	padding: 5px 10px; \
	text-align: right; \
	text-transform: uppercase; \
	font-weight: bold; \
} \
 \
#top { \
	border-top: 1px solid black; \
	border-right: 5px solid black; \
} \
 \
#bottom { \
	border-bottom: 1px solid black; \
	border-right: 5px solid black; \
} \
 \
.boite_info tr,.boite_compte_plus tr { \
	height: 24px !important; \
} \
 \
.boite_info td,.boite_compte_plus td { \
	font-size: 1em !important; \
} \
 \
#headTerrain { \
	width: 110px !important; \
} \
 \
.icone_loupe { \
	margin-left: 5px !important; \
	margin-top: -10px !important; \
} \
 \
.tableau_leger,.tab_triable { \
	margin: auto; \
} \
 \
.desciption_amelioration,.info { \
	padding-right: 5px; \
	text-align: justify !important; \
} \
 \
.my_boite { \
	border: 1px solid #665832; \
	padding: 0 50px !important; \
	min-width: 728px; \
} \
 \
.my_tab { \
	border: 1px solid #665832; \
	padding: 0 50px !important; \
	min-width: 100%; \
} \
 \
.black { \
	color: black; \
} \
 \
.green { \
	color: green; \
} \
 \
.red { \
	color: #c5130f; \
} \
 \
.blue { \
	color: blue; \
} \
 \
.orange { \
	color: #9c4b00; \
} \
 \
.violet { \
	color: #6D3A8A; \
} \
 \
.show { \
	z-index: 4; \
} \
 \
.cursor { \
	cursor: pointer; \
} \
 \
.centre { \
	text-align: center; \
} \
 \
.left { \
	text-align: left; \
} \
 \
.right { \
	text-align: right; \
} \
 \
.odd { \
	background-color: #D7C384 !important; \
} \
 \
.even { \
	background-color: #C9AD63 !important; \
} \
 \
.tab1 { \
	margin: 10px auto; \
	width: 80%; \
} \
 \
.tab2 { \
	margin: 10px auto; \
	width: 50%; \
} \
 \
.tab3 { \
	padding: 10px 40px !important; \
} \
 \
.tab1 tr,.tab2 tr,.tab3 tr { \
	height: 30px; \
} \
 \
.button_max { \
	position: relative; \
	top: 6px; \
} \
 \
.my_input { \
	width: 200px; \
} \
 \
.retour { \
	font-size: 0.8em; \
	font-style: italic; \
} \
 \
.total { \
	border-top: 1px solid black; \
} \
 \
#tabConvois tfoot { \
	font-weight: bold; \
} \
 \
#centre>h2,#alliance>.titre { \
	color: green !important; \
	text-align: center !important; \
} \
 \
#alliance form,#formulaireChatGeneral { \
	margin: 0 0 10px; \
} \
 \
#progressbar { \
	height: 10px !important; \
} \
 \
#recherche,#tabAttaquer { \
	width: 75%; \
} \
 \
#tabAttaquer .info { \
	background-color: #c7b178; \
} \
 \
.colorpicker { \
	width: 356px; \
	height: 176px; \
	overflow: hidden; \
	position: absolute; \
	background: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_background.png); \
	font-family: Arial, Helvetica, sans-serif; \
	display: none; \
	z-index: 3; \
} \
 \
.colorpicker_color { \
	width: 150px; \
	height: 150px; \
	left: 14px; \
	top: 13px; \
	position: absolute; \
	background: red; \
	overflow: hidden; \
	cursor: crosshair; \
} \
 \
.colorpicker_color div { \
	position: absolute; \
	top: 0; \
	left: 0; \
	width: 150px; \
	height: 150px; \
	background: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_overlay.png); \
} \
 \
.colorpicker_color div div { \
	position: absolute; \
	top: 0; \
	left: 0; \
	width: 11px; \
	height: 11px; \
	overflow: hidden; \
	background: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_select.gif); \
	margin: -5px 0 0 -5px; \
} \
 \
.colorpicker_hue { \
	position: absolute; \
	top: 13px; \
	left: 171px; \
	width: 35px; \
	height: 150px; \
	cursor: n-resize; \
} \
 \
.colorpicker_hue div { \
	position: absolute; \
	width: 35px; \
	height: 9px; \
	overflow: hidden; \
	background: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_indic.gif) left \
		top; \
	left: 0; \
	margin: -4px 0 0; \
} \
 \
.colorpicker_new_color { \
	position: absolute; \
	width: 60px; \
	height: 30px; \
	left: 213px; \
	top: 13px; \
	background: red; \
} \
 \
.colorpicker_current_color { \
	position: absolute; \
	width: 60px; \
	height: 30px; \
	left: 283px; \
	top: 13px; \
	background: red; \
} \
 \
.colorpicker input { \
	background-color: transparent; \
	border: 1px solid transparent; \
	position: absolute; \
	font-size: 10px; \
	font-family: Arial, Helvetica, sans-serif; \
	color: #898989; \
	top: 4px; \
	right: 11px; \
	text-align: right; \
	height: 11px; \
	margin: 0; \
	padding: 0; \
} \
 \
.colorpicker_hex { \
	position: absolute; \
	width: 72px; \
	height: 22px; \
	background: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_hex.png) top; \
	left: 212px; \
	top: 142px; \
} \
 \
.colorpicker_hex input { \
	right: 6px; \
} \
 \
.colorpicker_field { \
	height: 22px; \
	width: 62px; \
	background-position: top; \
	position: absolute; \
} \
 \
.colorpicker_field span { \
	position: absolute; \
	width: 12px; \
	height: 22px; \
	overflow: hidden; \
	top: 0; \
	right: 0; \
	cursor: n-resize; \
} \
 \
.colorpicker_rgb_r { \
	background-image: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_rgb_r.png); \
	top: 52px; \
	left: 212px; \
} \
 \
.colorpicker_rgb_g { \
	background-image: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_rgb_g.png); \
	top: 82px; \
	left: 212px; \
} \
 \
.colorpicker_rgb_b { \
	background-image: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_rgb_b.png); \
	top: 112px; \
	left: 212px; \
} \
 \
.colorpicker_hsb_h { \
	background-image: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_hsb_h.png); \
	top: 52px; \
	left: 282px; \
} \
 \
.colorpicker_hsb_s { \
	background-image: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_hsb_s.png); \
	top: 82px; \
	left: 282px; \
} \
 \
.colorpicker_hsb_b { \
	background-image: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_hsb_b.png); \
	top: 112px; \
	left: 282px; \
} \
 \
.colorpicker_submit { \
	position: absolute; \
	width: 22px; \
	height: 22px; \
	background: \
		url(http://outiiil.fr/images/colorpicker/colorpicker_submit.png) top; \
	left: 322px; \
	top: 142px; \
	overflow: hidden; \
} \
 \
.colorpicker_focus { \
	background-position: center; \
} \
 \
.colorpicker_hex.colorpicker_focus,.colorpicker_submit.colorpicker_focus,.colorpicker_slider { \
	background-position: bottom; \
} \
";

//-----------------------------------------
//----  Routage                        ----
//-----------------------------------------
window.addEventListener('load', function () {
    var uri = location.pathname;
    connecte = $("#loginForm").length ? false : true;
    comptePlus = $("#recherche").length ? true : false;

    jTableSorter(jQuery);
    jColorPicker(jQuery);
    jCookies(jQuery);

    //$("head").append('<link rel="stylesheet" type="text/css" href="http://userstyles.org/styles/80741.css" />');
    GM_addStyle(style);

    if (connecte && !comptePlus) {
        box = new Box();
        box.__init();
        box.show();
    }
    if (uri == "/Armee.php") {
        window.page = new PageArmee();
        page.__init();
        page.__construct()
    }
    if (uri == "/chat.php" || (uri == "/alliance.php" && location.search == "")) {
        window.chat = new Chat();
        chat.__init();
        chat.__construct()
    }
    if (uri == "/classement.php" || (uri == "/classementAlliance.php" && location.search == "")) {
        table = new Table(".tab_triable");
        table.comptePlus()
    }
    if (uri == "/classementAlliance.php" && location.search != "") {
        table = new Table("#tabMembresAlliance");
        table.__construct(3);
        if (!comptePlus) {
            table.comptePlus()
        }
    }
    if (uri == "/commerce.php") {
        $("head").append('<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />')
        $("head").append('<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js" />');
        window.page = new PageCommerce();
        page.__init();
        page.__construct()
    }
    if (uri == "/construction.php") {
        window.page = new PageConstruction();
        page.__init();
        page.__construct()
    }
    if (uri == "/ennemie.php" && location.search == "") {
        window.page = new PageEnnemie();
        page.__construct()
    }
    if (uri == "/laboratoire.php") {
        window.page = new PageLaboratoire();
        page.__construct()
    }
    if (uri == "/Reine.php") {
        window.page = new PageReine();
        page.__init();
        page.__construct()
    }
    if (uri == "/Ressources.php") {
        window.page = new PageRessource();
        page.__init();
        page.__construct()
    }
    if (location.href.indexOf("/alliance.php?Membres") > 0) {
        window.page = new PageAlliance();
        page.__construct()
    }
    if (location.href.indexOf("/ennemie.php?Attaquer") > 0) {
        window.page = new PageAttaquer();
        page.__init();
        page.__construct()
    }
    if (location.href.indexOf("/Membre.php?Pseudo") > 0) {
        joueur = new PageProfil();
        joueur.__initAjax($("#pseudo").text());
        window.page = new PageProfil();
        page.__init();
        page.__construct()
    }
}, false);

//-----------------------------------------
//----  Function                       ----
//-----------------------------------------

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

function removeSpace(a) {
    return a.replace(/ /g, "")
}

function formatDateTime(a) {
    if (a < 10) {
        a = "0" + a
    }
    return a
}

function formatTime(h) {
    var d, b, e, f, a;
    var g = "";
    if (h > 0) {
        d = Math.floor(h / 86400);
        b = h - d * 86400;
        e = Math.floor(b / 3600);
        f = Math.floor(((b / 3600) - Math.floor(b / 3600)) * 60);
        a = b - ((Math.floor(b / 60)) * 60);
        if (d >= 1) {
            g += d + "J "
        }
        if (e >= 1) {
            g += e + "H "
        }
        if (f >= 1) {
            g += f + "m "
        }
        if (a >= 1) {
            g += a + "s "
        }
    } else {
        g = "0 sec"
    }
    return g
}

function decrementTime(a, b) {
    $("#" + b).html(this.formatTime(a));
    if (a > 0) {
        setTimeout(function () {
            decrementTime(a - 1, b)
        }, 1000)
    }
}

function formatNumber(e) {
    var a = e.toString();
    var d = " ";
    var b = new RegExp("\\B(\\d{3})(" + d + "|$)");
    do {
        a = a.replace(b, d + "$1")
    } while (a.search(b) >= 0);
    return a
}

function showHide(a) {
    if ($("." + a).css("display") == "none") {
        $("." + a).css("display", "")
    } else {
        $("." + a).css("display", "none")
    }
}

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

function jCookies(b) {
    b.jCookies = function (n) {
        var e = b.extend({}, b.jCookies.defaults, n);
        if (e.get || e.erase) {
            var m = {}, d = "",
                l = [];
            var h = document.cookie.split(";");
            for (var j = 0; j < h.length; j++) {
                var k = h[j];
                while (k.charAt(0) == " ") {
                    k = k.substring(1, k.length)
                }
                d = k.split("=")[0];
                if (d.length == 0) {
                    break
                }
                m[d] = k.substring((d.length + 1), k.length);
                l[l.length] = d
            }
            if (e.erase) {
                var g = new Date();
                g.setTime(g.getTime() + (-1 * 24 * 60 * 60 * 1000));
                if (e.erase == "*") {
                    for (d in m) {
                        document.cookie = d + "=erase; expires=" + g.toGMTString() + "; path=/"
                    }
                    return true
                }
                for (d in l) {
                    if (l[d] == e.erase) {
                        document.cookie = e.erase + "=erase; expires=" + g.toGMTString() + "; path=/";
                        return true
                    }
                }
                return false
            } else {
                if (e.get) {
                    if (e.get == "*" && m) {
                        for (d in m) {
                            try {
                                m[d] = JSON.parse(atob(m[d]))
                            } catch (f) {
                                try {
                                    m[d] = JSON.parse(atob(decodeURIComponent(m[d])))
                                } catch (a) {
                                    if (e.error) {
                                        return a
                                    }
                                }
                                if (e.error) {
                                    return f
                                }
                            }
                        }
                        return m
                    }
                    for (x in l) {
                        if (l[x] == e.get) {
                            try {
                                return JSON.parse(atob(m[e.get]))
                            } catch (f) {
                                if (e.error) {
                                    return f
                                }
                            }
                        }
                    }
                    return false
                }
            }
        } else {
            if (e.name && (e.value || e.days)) {
                var g = new Date();
                if (!isNaN(e.seconds)) {
                    g.setTime(g.getTime() + (e.seconds * 1000))
                } else {
                    if (!isNaN(e.minutes)) {
                        g.setTime(g.getTime() + (e.minutes * 60 * 1000))
                    } else {
                        if (!isNaN(e.hours)) {
                            g.setTime(g.getTime() + (e.hours * 60 * 60 * 1000))
                        } else {
                            g.setTime(g.getTime() + (e.days * 24 * 60 * 60 * 1000))
                        }
                    }
                }
                document.cookie = e.name + "=" + btoa(JSON.stringify(e.value)) + "; expires=" + g.toGMTString() + "; path=/";
                return true
            } else {
                return false
            }
        }
    };
    b.jCookies.defaults = {
        name: "",
        value: "",
        days: 27
    }
}
if (typeof btoa == "undefined") {
    function btoa(i) {
        var j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var e = [];
        var h = 0;
        while (h < i.length) {
            var m = i.charCodeAt(h++);
            var l = i.charCodeAt(h++);
            var k = i.charCodeAt(h++);
            var a = (m << 16) + ((l || 0) << 8) + (k || 0);
            var g = (a & (63 << 18)) >> 18;
            var f = (a & (63 << 12)) >> 12;
            var d = isNaN(l) ? 64 : (a & (63 << 6)) >> 6;
            var b = isNaN(k) ? 64 : (a & 63);
            e[e.length] = j.charAt(g);
            e[e.length] = j.charAt(f);
            e[e.length] = j.charAt(d);
            e[e.length] = j.charAt(b)
        }
        return e.join("")
    }
}
if (typeof atob == "undefined") {
    function atob(i) {
        var j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var g = {
            strlen: (i.length % 4 != 0),
            chars: new RegExp("[^" + j + "]").test(i),
            equals: (/=/.test(i) && (/=[^=]/.test(i) || /={3}/.test(i)))
        };
        if (g.strlen || g.chars || g.equals) {
            throw new Error("Invalid base64 data")
        }
        var n = [];
        var h = 0;
        while (h < i.length) {
            var f = j.indexOf(i.charAt(h++));
            var e = j.indexOf(i.charAt(h++));
            var d = j.indexOf(i.charAt(h++));
            var b = j.indexOf(i.charAt(h++));
            var a = (f << 18) + (e << 12) + ((d & 63) << 6) + (b & 63);
            var m = (a & (255 << 16)) >> 16;
            var l = (d == 64) ? -1 : (a & (255 << 8)) >> 8;
            var k = (b == 64) ? -1 : (a & 255);
            n[n.length] = String.fromCharCode(m);
            if (l >= 0) {
                n[n.length] = String.fromCharCode(l)
            }
            if (k >= 0) {
                n[n.length] = String.fromCharCode(k)
            }
        }
        return n.join("")
    }
}
if (!this.JSON) {
    this.JSON = {}
}(function () {
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function (key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap,
            partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
        case "string":
            return quote(value);
        case "number":
            return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
            return String(value);
        case "object":
            if (!value) {
                return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null"
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === "string") {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());

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
    var t = {
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
        "Tueuse d'élite": [0, 55, 55, 55, 90, 2740],
    };
    var e = [1, 2, 3, 4, 5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10];
    var j = [0, 0, 0, 0.016, 0.093, 0.345, 0.577777778, 0.753, 0.837, 0.874, 0.937, 0.96, 0.989];
    var n = [0.103971824, 0.066805442, 0.036854146, 0.014477073, 0.010067247, 0.008361713, 0.00751662, 0.007060666, 0.006692853, 0.006402339, 0.006090569, 0.0057788, 0.005080623];
    var m = [0.14183641, 0.089382202, 0.065595625, 0.037509208, 0.024982573, 0.018532185, 0.014281932, 0.011725921, 0.010437083, 0.009834768, 0.009339662, 0.008844556, 0.008502895];
    var o = [0.33333334, 0.176739357, 0.113191158, 0.08245817, 0.051342954, 0.036955988, 0.03395735, 0.032083615, 0.026461955, 0.024588162, 0.021774264, 0.018960366, 0.017190797];
    var a = [12, 10, 7, 5, 4, 3, 1, 13, 11, 9, 8, 6, 2];
    var q = [12, 10, 7, 5, 4, 3, 1];
    var f = [3, 5, 7, 10, 15, 1, 1, 30, 35, 24, 55, 80, 50, 55];
    var p = 0;
    var k = 0;
    var c = 0;
    var g = 0;
    var d = 0;
    var b = 0;
    var h = new Array();
    var l = new Array();
    var r = new Array();
    this.__init = function (y, x, w, v, z) {
        k = t["Jeune Soldate Naine"][0];
        g = y;
        c = x;
        d = w;
        b = v;
        p = z
    };
    this.__initAjax = function () {
        $.ajax({
            url: "/Armee.php",
            async: false,
            success: function (v) {
                $(v).find('.simulateur tr[align="center"]:lt(14)').each(function () {
                    label = $(this).find(".pas_sur_telephone").text();
                    if (label && label in t) {
                        $(this).find("td span").each(function () {
                            t[label][0] += parseInt($(this).text().replace(/[^0-9]/g, ""))
                        })
                    }
                })
            }
        })
    };
    this.getNbrJSN = function () {
        return k
    };
    this.setNbrJSN = function (v) {
        t["Jeune Soldate Naine"][0] = k - v
    };
    this.getJSN = function () {
        return t["Jeune Soldate Naine"][0]
    };
    this.setJSN = function (v) {
        t["Jeune Soldate Naine"][0] = v
    };
    this.getSN = function () {
        return t["Soldate Naine"][0]
    };
    this.setSN = function (v) {
        t["Soldate Naine"][0] = v
    };
    this.getNE = function () {
        return t["Naine d'Elite"][0]
    };
    this.setNE = function (v) {
        t["Naine d'Elite"][0] = v
    };
    this.getJS = function () {
        return t["Jeune Soldate"][0]
    };
    this.setJS = function (v) {
        t["Jeune Soldate"][0] = v
    };
    this.getS = function () {
        return t.Soldate[0]
    };
    this.setS = function (v) {
        t.Soldate[0] = v
    };
    this.getC = function () {
        return t.Concierge[0]
    };
    this.setC = function (v) {
        t.Concierge[0] = v
    };
    this.getCE = function () {
        return t["Concierge d'élite"][0]
    };
    this.setCE = function (v) {
        t["Concierge d'élite"][0] = v
    };
    this.getA = function () {
        return t.Artilleuse[0]
    };
    this.setA = function (v) {
        t.Artilleuse[0] = v
    };
    this.getAE = function () {
        return t["Artilleuse d'élite"][0]
    };
    this.setAE = function (v) {
        t["Artilleuse d'élite"][0] = v
    };
    this.getSE = function () {
        return t["Soldate d'élite"][0]
    };
    this.setSE = function (v) {
        t["Soldate d'élite"][0] = v
    };
    this.getT = function () {
        return t.Tank[0]
    };
    this.setT = function (v) {
        t.Tank[0] = v
    };
    this.getTE = function () {
        return t["Tank d'élite"][0]
    };
    this.setTE = function (v) {
        t["Tank d'élite"][0] = v
    };
    this.getTu = function () {
        return t.Tueuse[0]
    };
    this.setTu = function (v) {
        t.Tueuse[0] = v
    };
    this.getTuE = function () {
        return t["Tueuse d'élite"][0]
    };
    this.setTuE = function (v) {
        t["Tueuse d'élite"][0] = v
    };
    this.getSommeUnite = function () {
        total = 0;
        for (element in t) {
            total += t[element][0]
        }
        return total
    };
    this.getTime = function () {
        total = 0;
        for (element in t) {
            total += (t[element][0] * t[element][5])
        }
        return total
    };
    this.getBaseVie = function () {
        total = 0;
        for (element in t) {
            total += (t[element][0] * t[element][1])
        }
        return total
    };
    this.getBonusVie = function (v) {
        return Math.round(this.getBaseVie() * v / 10)
    };
    this.getBonusLieuVie = function (w, v) {
        if (v == 2) {
            return Math.round(this.getBaseVie() * ((w + 2) / 20))
        }
        if (v == 3) {
            return Math.round(this.getBaseVie() * (((w + 2) * 3) / 20))
        } else {
            return 0
        }
    };
    this.getTotalVie = function (x, v, w) {
        return this.getBaseVie() + this.getBonusVie(x) + this.getBonusLieuVie(w, v)
    };
    this.getBaseAtt = function () {
        total = 0;
        for (element in t) {
            total += (t[element][0] * t[element][2])
        }
        return total
    };
    this.getBonusAtt = function (v) {
        return Math.round(this.getBaseAtt() * v / 10)
    };
    this.getTotalAtt = function (v) {
        return this.getBaseAtt() + this.getBonusAtt(v)
    };
    this.getBaseDef = function () {
        total = 0;
        for (element in t) {
            total += (t[element][0] * t[element][3])
        }
        return total
    };
    this.getBonusDef = function (v) {
        return Math.round(this.getBaseDef() * v / 10)
    };
    this.getTotalDef = function (v) {
        return this.getBaseDef() + this.getBonusDef(v)
    };
    this.getConsommation = function (v) {
        total = 0;
        for (element in t) {
            if (v == 1) {
                total += Math.round(t[element][0] * t[element][4] * 0.05)
            }
            if (v == 2) {
                total += Math.round(t[element][0] * t[element][4] * 0.1)
            }
            if (v == 3) {
                total += Math.round(t[element][0] * t[element][4] * 0.15)
            }
        }
        return total
    };
    this.toString = function () {
        tmp = false;
        s = "";
        for (element in t) {
            if (t[element][0] > 0) {
                s += formatNumber(t[element][0]) + " " + element + ", "
            }
        }
        return s.slice(0, -2) + "."
    };
    this.lancerFlood = function () {
        nbrFlood = parseInt($("#nbr_flood").val());
        qteFlood = parseInt(removeSpace($("#qte_flood").val()));
        r = new Array();
        nbAttDispo = d + 1 - p;
        iTabAvailableUnits = new Array();
        iTabAvailableUnits[0] = t["Jeune Soldate Naine"][0];
        iTabAvailableUnits[1] = t["Soldate Naine"][0];
        iTabAvailableUnits[2] = t["Naine d'Elite"][0];
        iTabAvailableUnits[3] = t["Jeune Soldate"][0];
        iTabAvailableUnits[4] = t.Soldate[0];
        iTabAvailableUnits[5] = t.Concierge[0];
        iTabAvailableUnits[6] = t["Concierge d'élite"][0];
        iTabAvailableUnits[7] = t.Artilleuse[0];
        iTabAvailableUnits[8] = t["Artilleuse d'élite"][0];
        iTabAvailableUnits[9] = t["Soldate d'élite"][0];
        iTabAvailableUnits[10] = t.Tank[0];
        iTabAvailableUnits[11] = t["Tank d'élite"][0];
        iTabAvailableUnits[12] = t.Tueuse[0];
        iTabAvailableUnits[13] = t["Tueuse d'élite"][0];
        for (var v = 0; v < nbrFlood && v < nbAttDispo; v++) {
            temp = qteFlood;
            r[v] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            if (iTabAvailableUnits[0] != 0) {
                r[v][0] = iTabAvailableUnits[0] >= temp ? temp : iTabAvailableUnits[0];
                temp -= r[v][0];
                iTabAvailableUnits[0] -= r[v][0];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[1] != 0) {
                r[v][1] = iTabAvailableUnits[1] >= temp ? temp : iTabAvailableUnits[1];
                temp -= r[v][1];
                iTabAvailableUnits[1] -= r[v][1];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[2] != 0) {
                r[v][2] = iTabAvailableUnits[2] >= temp ? temp : iTabAvailableUnits[2];
                temp -= r[v][2];
                iTabAvailableUnits[2] -= r[v][2];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[3] != 0) {
                r[v][3] = iTabAvailableUnits[3] >= temp ? temp : iTabAvailableUnits[3];
                temp -= r[v][3];
                iTabAvailableUnits[3] -= r[v][3];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[4] != 0) {
                r[v][4] = iTabAvailableUnits[4] >= temp ? temp : iTabAvailableUnits[4];
                temp -= r[v][4];
                iTabAvailableUnits[4] -= r[v][4];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[5] != 0) {
                r[v][5] = iTabAvailableUnits[5] >= temp ? temp : iTabAvailableUnits[5];
                temp -= r[v][5];
                iTabAvailableUnits[5] -= r[v][5];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[6] != 0) {
                r[v][6] = iTabAvailableUnits[6] >= temp ? temp : iTabAvailableUnits[6];
                temp -= r[v][6];
                iTabAvailableUnits[6] -= r[v][6];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[7] != 0) {
                r[v][7] = iTabAvailableUnits[7] >= temp ? temp : iTabAvailableUnits[7];
                temp -= r[v][7];
                iTabAvailableUnits[7] -= r[v][7];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[8] != 0) {
                r[v][8] = iTabAvailableUnits[8] >= temp ? temp : iTabAvailableUnits[8];
                temp -= r[v][8];
                iTabAvailableUnits[8] -= r[v][8];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[9] != 0) {
                r[v][9] = iTabAvailableUnits[9] >= temp ? temp : iTabAvailableUnits[9];
                temp -= r[v][9];
                iTabAvailableUnits[9] -= r[v][9];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[10] != 0) {
                r[v][10] = iTabAvailableUnits[10] >= temp ? temp : iTabAvailableUnits[10];
                temp -= r[v][10];
                iTabAvailableUnits[10] -= r[v][10];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[11] != 0) {
                r[v][11] = iTabAvailableUnits[11] >= temp ? temp : iTabAvailableUnits[11];
                temp -= r[v][11];
                iTabAvailableUnits[11] -= r[v][11];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[12] != 0) {
                r[v][12] = iTabAvailableUnits[12] >= temp ? temp : iTabAvailableUnits[12];
                temp -= r[v][12];
                iTabAvailableUnits[12] -= r[v][12];
                if (temp == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[13] != 0) {
                r[v][13] = iTabAvailableUnits[13] >= temp ? temp : iTabAvailableUnits[13];
                temp -= r[v][13];
                iTabAvailableUnits[13] -= r[v][13]
            }
        }
        this.sendFlood(1, r.length)
    };
    this.simulerFlood = function () {
        tdcAtt = parseInt(removeSpace($("#tdc_depart").val()));
        tdcCible = parseInt(removeSpace($("#tdc_cible").val()));
        total = 0;
        nbrUnitUse = 0;
        if (tdcCible >= (tdcAtt * 0.5) && tdcCible <= (tdcAtt * 3)) {
            uniteRestante = this.affectUnitFlood(tdcAtt, tdcCible);
            if ($("#oui").is(":checked")) {
                this.affectTotalUnitFlood(uniteRestante)
            }
            for (var w = 0; w < r.length; w++) {
                nb = 0;
                prise = Math.floor(tdcCible * 0.2);
                for (var v = 0; v < r[w].length; v++) {
                    nb += r[w][v];
                    nbrUnitUse += r[w][v]
                }
                if (nb > prise) {
                    tdcAtt += prise;
                    tdcCible -= prise;
                    total += prise
                } else {
                    total += nb;
                    tdcAtt += nb;
                    tdcCible -= nb
                }
            }
            if ($("#simulation").length) {
                $("#simulation").remove()
            }
            boite = "<fieldset id='simulation'>";
            boite += "<legend><span class='titre'>Simulateur</span></legend>";
            boite += "<center>";
            boite += "<table class='tab2' cellspacing=0>";
            boite += "<tr class='even'><td>TDC après attaque</td><td>:</td><td>" + formatNumber(tdcAtt) + " cm²</td></tr>";
            boite += "<tr><td>TDC cible après attaque</td><td>:</td><td>" + formatNumber(tdcCible) + " cm²</td></tr>";
            boite += "<tr class='even'><td>Quantité prise</td><td>:</td><td>" + formatNumber(total) + " cm²</td></tr>";
            boite += "<tr><td>Nombre de flood</td><td>:</td><td>" + r.length + "</td></tr>";
            boite += "<tr class='even'><td>Nombre d'unités necessaires</td><td>:</td><td>" + formatNumber(nbrUnitUse) + "</td></tr>";
            boite += "</table>";
            boite += "</center></fieldset>";
            $("#formulaireChoixArmee").append(boite)
        } else {
            alert("Données incorrectes !")
        }
    };
    this.optimiserFlood = function () {
        tdcAtt = parseInt(removeSpace($("#tdc_depart").val()));
        tdcCible = parseInt(removeSpace($("#tdc_cible").val()));
        if (tdcCible >= (tdcAtt * 0.5) && tdcCible <= (tdcAtt * 3)) {
            uniteRestante = this.affectUnitFlood(tdcAtt, tdcCible);
            if ($("#oui").is(":checked")) {
                this.affectTotalUnitFlood(uniteRestante)
            }
            this.sendFlood(1, r.length)
        } else {
            alert("Données incorrectes !")
        }
    };
    this.sendFlood = function (w, v) {
        if (r.length > 0) {
            dataSend = {};
            securiteKey = String($("#tabChoixArmee input:hidden").attr("name"));
            securiteValue = $("#tabChoixArmee input:hidden").attr("value");
            dataSend[securiteKey] = securiteValue;
            dataSend.pseudoCible = $("input[name=pseudoCible]").val();
            dataSend.lieu = "1";
            dataSend.ChoixArmee = "1";
            dataSend.unite1 = r[0][0];
            dataSend.unite2 = r[0][1];
            dataSend.unite3 = r[0][2];
            dataSend.unite4 = r[0][3];
            dataSend.unite5 = r[0][4];
            dataSend.unite6 = r[0][5];
            dataSend.unite7 = r[0][7];
            dataSend.unite8 = r[0][8];
            dataSend.unite9 = r[0][9];
            dataSend.unite10 = r[0][10];
            dataSend.unite11 = r[0][12];
            dataSend.unite12 = r[0][13];
            dataSend.unite13 = r[0][11];
            dataSend.unite14 = r[0][6];
            r.splice(0, 1);
            $.ajax({
                type: "post",
                url: "/ennemie.php",
                cache: false,
                data: dataSend,
                dataType: "text",
                error: function (z, x, y) {
                    alert(x)
                },
                success: function (result) {
                    res = $('<div>').append(result);
                    res = res.find("#centre").text().replace(res.find("#centre script").text(), "");
                    alert("Flood " + (w++) + "/" + v + " envoyé !\n" + res);
                }
            });
            setTimeout(function () {
                page.getArmee().sendFlood(w, v)
            }, 1000)
        } else {
            document.location = "/Armee.php"
        }
    };
    this.affectUnitFlood = function (v, x) {
        this.computeFlood(v, x);
        r = new Array();
        nbAttDispo = d + 1 - p;
        iTabAvailableUnits = new Array();
        iTabAvailableUnits[0] = t["Jeune Soldate Naine"][0];
        iTabAvailableUnits[1] = t["Soldate Naine"][0];
        iTabAvailableUnits[2] = t["Naine d'Elite"][0];
        iTabAvailableUnits[3] = t["Jeune Soldate"][0];
        iTabAvailableUnits[4] = t.Soldate[0];
        iTabAvailableUnits[5] = t.Concierge[0];
        iTabAvailableUnits[6] = t["Concierge d'élite"][0];
        iTabAvailableUnits[7] = t.Artilleuse[0];
        iTabAvailableUnits[8] = t["Artilleuse d'élite"][0];
        iTabAvailableUnits[9] = t["Soldate d'élite"][0];
        iTabAvailableUnits[10] = t.Tank[0];
        iTabAvailableUnits[11] = t["Tank d'élite"][0];
        iTabAvailableUnits[12] = t.Tueuse[0];
        iTabAvailableUnits[13] = t["Tueuse d'élite"][0];
        for (var w = 0; w < l.length && w < nbAttDispo; w++) {
            r[w] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            if (iTabAvailableUnits[0] != 0) {
                r[w][0] = iTabAvailableUnits[0] >= l[w] ? l[w] : iTabAvailableUnits[0];
                l[w] -= r[w][0];
                iTabAvailableUnits[0] -= r[w][0];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[1] != 0) {
                r[w][1] = iTabAvailableUnits[1] >= l[w] ? l[w] : iTabAvailableUnits[1];
                l[w] -= r[w][1];
                iTabAvailableUnits[1] -= r[w][1];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[2] != 0) {
                r[w][2] = iTabAvailableUnits[2] >= l[w] ? l[w] : iTabAvailableUnits[2];
                l[w] -= r[w][2];
                iTabAvailableUnits[2] -= r[w][2];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[3] != 0) {
                r[w][3] = iTabAvailableUnits[3] >= l[w] ? l[w] : iTabAvailableUnits[3];
                l[w] -= r[w][3];
                iTabAvailableUnits[3] -= r[w][3];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[4] != 0) {
                r[w][4] = iTabAvailableUnits[4] >= l[w] ? l[w] : iTabAvailableUnits[4];
                l[w] -= r[w][4];
                iTabAvailableUnits[4] -= r[w][4];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[5] != 0) {
                r[w][5] = iTabAvailableUnits[5] >= l[w] ? l[w] : iTabAvailableUnits[5];
                l[w] -= r[w][5];
                iTabAvailableUnits[5] -= r[w][5];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[6] != 0) {
                r[w][6] = iTabAvailableUnits[6] >= l[w] ? l[w] : iTabAvailableUnits[6];
                l[w] -= r[w][6];
                iTabAvailableUnits[6] -= r[w][6];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[7] != 0) {
                r[w][7] = iTabAvailableUnits[7] >= l[w] ? l[w] : iTabAvailableUnits[7];
                l[w] -= r[w][7];
                iTabAvailableUnits[7] -= r[w][7];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[8] != 0) {
                r[w][8] = iTabAvailableUnits[8] >= l[w] ? l[w] : iTabAvailableUnits[8];
                l[w] -= r[w][8];
                iTabAvailableUnits[8] -= r[w][8];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[9] != 0) {
                r[w][9] = iTabAvailableUnits[9] >= l[w] ? l[w] : iTabAvailableUnits[9];
                l[w] -= r[w][9];
                iTabAvailableUnits[9] -= r[w][9];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[10] != 0) {
                r[w][10] = iTabAvailableUnits[10] >= l[w] ? l[w] : iTabAvailableUnits[10];
                l[w] -= r[w][10];
                iTabAvailableUnits[10] -= r[w][10];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[11] != 0) {
                r[w][11] = iTabAvailableUnits[11] >= l[w] ? l[w] : iTabAvailableUnits[11];
                l[w] -= r[w][11];
                iTabAvailableUnits[11] -= r[w][11];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[12] != 0) {
                r[w][12] = iTabAvailableUnits[12] >= l[w] ? l[w] : iTabAvailableUnits[12];
                l[w] -= r[w][12];
                iTabAvailableUnits[12] -= r[w][12];
                if (l[w] == 0) {
                    continue
                }
            }
            if (iTabAvailableUnits[13] != 0) {
                r[w][13] = iTabAvailableUnits[13] >= l[w] ? l[w] : iTabAvailableUnits[13];
                l[w] -= r[w][13];
                iTabAvailableUnits[13] -= r[w][13]
            }
        }
        return iTabAvailableUnits
    };
    this.affectTotalUnitFlood = function (w) {
        if (l.length == 2) {
            for (var v = 0; v < w.length; v++) {
                r[1][v] += w[v]
            }
        } else {
            for (var v = 0; v < w.length; v++) {
                r[0][v] += w[v]
            }
        }
    };
    this.computeFlood = function (v, w) {
        l = new Array();
        i = 0;
        while (v < Math.floor(w * 1.4)) {
            l[i++] = Math.floor(w * 0.2);
            v += l[i - 1];
            w -= l[i - 1]
        }
        limite = Math.floor((w * 2 - v) / 3) - 1;
        if (limite > 0) {
            l[i++] = limite;
            v += l[i - 1];
            w -= l[i - 1]
        }
        l[i++] = Math.floor(w * 0.2);
        v += l[i - 1];
        w -= l[i - 1]
    };
    this.getHuntRatio = function () {
        return e
    };
    this.getHuntReply = function () {
        return j
    };
    this.getLossMax = function () {
        return o
    };
    this.computeData = function () {
        terrain = parseInt($("#quantite_tdc").text());
        baseHF = parseInt(removeSpace($("#tdc_depart").val()));
        huntMinHF = Math.round(baseHF * 3 / 10);
        huntNB = 0;
        huntHF = 0;
        huntDiff = $("#diff_chasse").val();
        mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
        date = new Date();
        if (baseHF > 0 && huntMinHF > 0) {
            fixHF = $("#tdc_chasse").val() && !$("#autoFieldHunt").is(":checked") ? parseInt(removeSpace($("#tdc_chasse").val())) : 0;
            fixNB = $("#nbr_chasse").val() && !$("#autoNumberHunt").is(":checked") ? parseInt($("#nbr_chasse").val()) : 0;
            iTabHunt = this.computeHunt(e[huntDiff], baseHF, huntMinHF, fixNB, fixHF);
            dDiff = this.computeDifficulty(baseHF, iTabHunt.HF, iTabHunt.NB);
            iTabLoss = this.computeLosses(huntDiff, dDiff);
            if ($("#autoNumberHunt").is(":checked")) {
                $("#nbr_chasse").val(iTabHunt.NB)
            }
            huntNB = parseInt($("#nbr_chasse").val());
            if ($("#autoFieldHunt").is(":checked")) {
                $("#tdc_chasse").val(formatNumber(iTabHunt.HF))
            }
            huntHF = parseInt(removeSpace($("#tdc_chasse").val()));
            $("#valueTotal").text(formatNumber(huntNB * huntHF) + " cm²");
            date.setSeconds(date.getSeconds() + Math.round((terrain + huntHF) * Math.pow(0.9, b)));
            $("#dureeTotal").html(formatTime(Math.round((terrain + huntHF) * Math.pow(0.9, b))) + " <span class='retour'>retour le " + date.getDate() + " " + mois[date.getMonth()] + " à " + formatDateTime(date.getHours()) + "h" + formatDateTime(date.getMinutes()) + "</span>");
            ratio = this.computeRatio(baseHF, huntHF, huntNB);
            ref = this.computeRefRatio(ratio);
            $("#ratio_chasse").text(ratio.toFixed(2) + " ~ " + ref.toFixed(2));
            if (huntDiff < 4) {
                $("#diff_chasse").css("color", "black")
            } else {
                if (huntDiff >= 4 && huntDiff <= 5) {
                    $("#diff_chasse").css("color", "red")
                } else {
                    if (huntDiff > 5 && huntDiff < 9) {
                        $("#diff_chasse").css("color", "orange")
                    } else {
                        $("#diff_chasse").css("color", "green")
                    }
                }
            }
            $("#perteJSN").text(formatNumber(Math.round(iTabLoss.AVG)) + " JSN (max : " + formatNumber(Math.round(iTabLoss.MAX)) + ")")
        }
    };
    this.computeHunt = function (z, A, y, B, x) {
        iTabRet = new Array();
        iStartingHF = A;
        iHuntCm2 = x > 0 ? x : y;
        iHuntNb = B > 0 ? B : 1;
        if (B == 0) {
            while (this.computeRatio(iStartingHF, iHuntCm2, iHuntNb + 1) >= z && iHuntNb < b + 1) {
                iHuntNb += 1
            }
        }
        if (x == 0) {
            var w = (iHuntCm2 > 5000000000000);
            for (var v = 5000000000000; v > 4; v = v / 10) {
                w = (iHuntCm2 > v);
                if (w) {
                    w = (this.computeRatio(iStartingHF, iHuntCm2 - v, iHuntNb) < z && iHuntCm2 > 1)
                }
                while (w) {
                    iHuntCm2 -= v;
                    w = iHuntCm2 > v;
                    if (w) {
                        w = (this.computeRatio(iStartingHF, iHuntCm2 - v, iHuntNb) < z && iHuntCm2 > 1)
                    }
                }
            }
            w = iHuntCm2 > 1;
            if (w) {
                w = (this.computeRatio(iStartingHF, iHuntCm2 - 1, iHuntNb) < z && iHuntCm2 > 1)
            }
            while (w) {
                iHuntCm2 -= 1;
                w = iHuntCm2 > 1;
                if (w) {
                    w = (this.computeRatio(iStartingHF, iHuntCm2 - 1, iHuntNb) < z && iHuntCm2 > 1)
                }
            }
            for (var v = 5000000000000; v > 4; v = v / 10) {
                while (this.computeRatio(iStartingHF, iHuntCm2 + v, iHuntNb) >= z) {
                    iHuntCm2 += v
                }
            }
            while (this.computeRatio(iStartingHF, iHuntCm2 + 1, iHuntNb) >= z) {
                iHuntCm2 += 1
            }
        }
        iTabRet.NB = iHuntNb;
        iTabRet.HF = iHuntCm2;
        return iTabRet
    };
    this.computeRatio = function (x, v, w) {
        return this.getTotalAtt(c) / this.computeDifficulty(x, v, w)
    };
    this.computeDifficulty = function (y, v, x) {
        dDiff = 0;
        for (var w = 0; w < x; w++) {
            dStart = y + v * w;
            dDiff += ((v + dStart * 0.01) * (Math.pow(1.04, (Math.round(Math.log(dStart / 50) / Math.log(Math.pow(10, 0.1)))))) * 3)
        }
        return dDiff
    };
    this.computeDifficulties = function (y, v, x) {
        dTabDiff = new Array();
        for (var w = 0; w < x; w++) {
            dStart = y + v * w;
            dTabDiff[w] = (v + dStart * 0.01) * (Math.pow(1.04, (Math.round(Math.log(dStart / 50) / Math.log(Math.pow(10, 0.1)))))) * 3
        }
        return dTabDiff
    };
    this.computeLosses = function (v, x) {
        var w = new Array();
        w.MIN = (n[v]) * x / (10 + g) * 10;
        w.AVG = (m[v]) * x / (10 + g) * 10;
        w.MAX = (o[v]) * x / (10 + g) * 10;
        return w
    };
    this.computeRefRatio = function (w) {
        iRet = 0;
        for (var v = 0; v < e.length; v++) {
            if (w >= e[v]) {
                iRet = e[v]
            } else {
                break
            }
        }
        return iRet
    };
    this.simulerHunt = function () {
        tdcDep = parseInt(removeSpace($("#tdc_depart").val()));
        huntNB = parseInt($("#nbr_chasse").val());
        huntHF = parseInt(removeSpace($("#tdc_chasse").val()));
        ratio = this.getTotalAtt(c) / this.computeDifficulty(tdcDep, huntHF, huntNB);
        ind = this.getHuntRatio().indexOf(this.computeRefRatio(ratio));
        diff = this.computeDifficulty(tdcDep, huntHF, huntNB);
        iTabDiff = this.computeDifficulties(tdcDep, huntHF, huntNB);
        this.affectUnitHunt(huntNB, diff, iTabDiff, this.getLossMax()[ind], 2);
        total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if ($("#simulation").length) {
            $("#simulation").remove()
        }
        boiteSimulation = "<br/><table id='simulation' class='boite_amelioration my_boite tab3' cellspacing=0>";
        boiteSimulation += "<tr><td colspan=15><span class='titre'>Simulateur</span></td></tr>";
        boiteSimulation += "<tr class='even'><td>Chasse</td><td>JSN</td><td>SN</td><td>NE</td><td>JS</td><td>S</td><td>C</td><td>CE</td><td>A</td><td>AE</td><td>SE</td><td>Tk</td><td>TkE</td><td>Tu</td><td>TuE</td></tr>";
        for (var w = 0; w < huntNB; w++) {
            if (w % 2) {
                boiteSimulation += "<tr class='even'>"
            } else {
                boiteSimulation += "<tr>"
            }
            boiteSimulation += "<td>" + (w + 1) + "</td>";
            for (var v = 0; v < 14; v++) {
                boiteSimulation += "<td>" + (r[w][v] > 0 ? formatNumber(r[w][v]) : "") + "</td>";
                total[v] += r[w][v]
            }
            boiteSimulation += "</tr>"
        }
        if (w % 2) {
            boiteSimulation += "<tr class='even'>"
        } else {
            boiteSimulation += "<tr>"
        }
        boiteSimulation += "<td class='gras total'>Total</td>";
        for (var v = 0; v < 14; v++) {
            boiteSimulation += "<td class='total'>" + formatNumber(total[v]) + "</td>"
        }
        boiteSimulation += "</tr>";
        boiteSimulation += "</table>";
        $(".boite_amelioration:last").after(boiteSimulation)
    };
    this.lancerHunt = function () {
        tdcDep = parseInt(removeSpace($("#tdc_depart").val()));
        huntNB = parseInt($("#nbr_chasse").val());
        huntHF = parseInt(removeSpace($("#tdc_chasse").val()));
        ratio = this.getTotalAtt(c) / this.computeDifficulty(tdcDep, huntHF, huntNB);
        ind = this.getHuntRatio().indexOf(this.computeRefRatio(ratio));
        diff = this.computeDifficulty(tdcDep, huntHF, huntNB);
        iTabDiff = this.computeDifficulties(tdcDep, huntHF, huntNB);
        this.affectUnitHunt(huntNB, diff, iTabDiff, this.getLossMax()[ind], 2);
        securiteKey = "";
        securiteValue = "";
        $("body").append("<iframe id='myFrame' style='display:none;' src='AcquerirTerrain.php' />");
        $("#myFrame").load(function () {
            securiteKey = $("#myFrame").contents().find("#tabChoixArmee input[type=hidden]").attr("name");
            securiteValue = $("#myFrame").contents().find("#tabChoixArmee input[type=hidden]").attr("value");
            page.getArmee().sendHunt(huntHF, huntNB, securiteKey, securiteValue, 1)
        })
    };
    this.sendHunt = function (v, x, w, y, z) {
        if (r.length > 0 && w != "" && y != "") {
            mess = "Chasse " + (z++) + "/" + x + " envoyée !";
            dataSend = {};
            dataSend[w] = y;
            dataSend.ChoixArmee = "1";
            dataSend.AcquerirTerrain = v;
            dataSend.unite1 = r[0][0];
            mess += "\n JSN = " + formatNumber(r[0][0]);
            dataSend.unite2 = r[0][1];
            mess += "\n SN = " + formatNumber(r[0][1]);
            dataSend.unite3 = r[0][2];
            mess += "\n NE = " + formatNumber(r[0][2]);
            dataSend.unite4 = r[0][3];
            mess += "\n JS = " + formatNumber(r[0][3]);
            dataSend.unite5 = r[0][4];
            mess += "\n S = " + formatNumber(r[0][4]);
            dataSend.unite6 = r[0][5];
            mess += "\n C = " + formatNumber(r[0][5]);
            dataSend.unite7 = r[0][7];
            mess += "\n A = " + formatNumber(r[0][7]);
            dataSend.unite8 = r[0][8];
            mess += "\n AE = " + formatNumber(r[0][8]);
            dataSend.unite9 = r[0][9];
            mess += "\n SE = " + formatNumber(r[0][9]);
            dataSend.unite10 = r[0][10];
            mess += "\n Tk = " + formatNumber(r[0][10]);
            dataSend.unite11 = r[0][12];
            mess += "\n T = " + formatNumber(r[0][12]);
            dataSend.unite12 = r[0][13];
            mess += "\n TE = " + formatNumber(r[0][13]);
            dataSend.unite13 = r[0][11];
            mess += "\n TkE = " + formatNumber(r[0][11]);
            dataSend.unite14 = r[0][6];
            mess += "\n CE = " + formatNumber(r[0][6]);
            r.splice(0, 1);
            $.ajax({
                type: "post",
                url: "/AcquerirTerrain.php",
                cache: false,
                async: false,
                data: dataSend,
                dataType: "text",
                error: function (C, A, B) {
                    alert(A)
                },
                success: function () {
                    alert(mess)
                }
            });
            if (r.length == 0) {
                document.location = "/Ressources.php"
            } else {
                setTimeout(function () {
                    page.getArmee().sendHunt(v, x, w, y, z)
                }, $("#intervalle_chasse").val() * 1000)
            }
        } else {
            document.location = "/Ressources.php"
        }
    };
    this.affectUnitHunt = function (z, B, v, y, x) {
        r = new Array();
        iTabAvailableUnits = new Array();
        iTabAvailableUnits[0] = t["Jeune Soldate Naine"][0];
        iTabAvailableUnits[1] = t["Soldate Naine"][0];
        iTabAvailableUnits[2] = t["Naine d'Elite"][0];
        iTabAvailableUnits[3] = t["Jeune Soldate"][0];
        iTabAvailableUnits[4] = t.Soldate[0];
        iTabAvailableUnits[5] = t.Concierge[0];
        iTabAvailableUnits[6] = t["Concierge d'élite"][0];
        iTabAvailableUnits[7] = t.Artilleuse[0];
        iTabAvailableUnits[8] = t["Artilleuse d'élite"][0];
        iTabAvailableUnits[9] = t["Soldate d'élite"][0];
        iTabAvailableUnits[10] = t.Tank[0];
        iTabAvailableUnits[11] = t["Tank d'élite"][0];
        iTabAvailableUnits[12] = t.Tueuse[0];
        iTabAvailableUnits[13] = t["Tueuse d'élite"][0];
        for (var A = z - 1; A >= 0; A--) {
            r[A] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            iHuntBaseAtt = (v[A] / B) * this.getBaseAtt();
            bXp = false;
            for (var w = 0; w < q.length; w++) {
                bXp = bXp || ((iTabAvailableUnits[q[w]]) > 0)
            }
            if (bXp) {
                r[A][0] = Math.round(y * v[A] / (10 + g) * 10 * x)
            } else {
                iDiffLet = v[A];
                for (var C = A - 1; C >= 0; C--) {
                    iDiffLet += v[C]
                }
                r[A][0] = Math.round(iTabAvailableUnits[0] * v[A] / iDiffLet)
            } if (A == 0 || r[A][0] > iTabAvailableUnits[0] || r[A][0] < 0) {
                r[A][0] = iTabAvailableUnits[0]
            }
            iTabAvailableUnits[0] -= r[A][0];
            iHuntBaseAtt -= (r[A][0] * f[0]);
            for (var w = 0; w < a.length; w++) {
                u = a[w];
                if (iTabAvailableUnits[u] > 0 && iHuntBaseAtt > 0) {
                    if (iTabAvailableUnits[u] * f[u] > iHuntBaseAtt) {
                        r[A][u] = Math.round(iHuntBaseAtt / f[u])
                    } else {
                        r[A][u] = iTabAvailableUnits[u]
                    } if (A == 0 || r[A][u] > iTabAvailableUnits[u] || r[A][u] < 0) {
                        r[A][u] = iTabAvailableUnits[u]
                    }
                    iTabAvailableUnits[u] -= r[A][u];
                    iHuntBaseAtt -= (r[A][u] * f[u])
                }
            }
        }
    }
};

function Box() {
    var c = parseInt($("#quantite_tdc").text());
    var b = new Array();
    var e = new Array();
    var a = new Array();
    var d = new Array();
    this.__init = function () {
        this.initPonte();
        this.initConstruction();
        this.initRecherche();
        $.ajax({
            url: "/Ressources.php",
            async: false,
            success: function (f) {
                d.prod = new Array();
                d.prod["materiaux"] = parseInt($(f).find("#RecolteMateriaux").val());
                d.prod["nourriture"] = parseInt($(f).find("#RecolteNourriture").val());
                d.prod["rien"] = c - d.prod["materiaux"] - d.prod["nourriture"];
                d.nourriture = new Array();
                d.nourriture["tdc"] = parseInt($(f).find("#RecolteNourriture").val()) * 48;
                d.nourriture["champi"] = parseInt(removeSpace($(f).find("strong:eq(7)").text()));
                d.nourriture["armee"] = parseInt(removeSpace($(f).find("strong:eq(8)").text()))
            }
        })
    };
    this.getPonte = function () {
        return b
    };
    this.setPonte = function (f) {
        b = f
    };
    this.initPonte = function () {
        cookie = $.jCookies({
            get: "Ponte"
        });
        if (cookie) {
            date = new Date();
            b.unit = cookie.unit.substr(0, 1).toUpperCase() + cookie.unit.substr(1);
            b.time = parseInt((cookie.time - date.getTime()) / 1000)
        }
    };
    this.updatePonte = function () {
        $("a[href='Reine.php'] .ligne_boite_compte_plus:first").text(b.unit);
        decrementTime(b.time, "tempsUnite")
    };
    this.getConstruction = function () {
        return e
    };
    this.setConstruction = function (f) {
        e = f
    };
    this.initConstruction = function () {
        cookie = $.jCookies({
            get: "Construction"
        });
        if (cookie) {
            date = new Date();
            e.evolution = cookie.evolution.substr(0, 1).toUpperCase() + cookie.evolution.substr(1);
            e.time = parseInt((cookie.time - date.getTime()) / 1000)
        }
    };
    this.updateConstruction = function () {
        $("a[href='construction.php'] .ligne_boite_compte_plus:first").text(e.evolution);
        decrementTime(e.time, "tempsBatiment")
    };
    this.getRecherche = function () {
        return a
    };
    this.setRecherche = function (f) {
        a = f
    };
    this.initRecherche = function () {
        cookie = $.jCookies({
            get: "Laboratoire"
        });
        if (cookie) {
            date = new Date();
            a.evolution = cookie.evolution.substr(0, 1).toUpperCase() + cookie.evolution.substr(1);
            a.time = parseInt((cookie.time - date.getTime()) / 1000)
        }
    };
    this.updateRecherche = function () {
        $("a[href='laboratoire.php'] .ligne_boite_compte_plus:first").text(a.evolution);
        decrementTime(a.time, "tempsRecherche")
    };
    this.show = function () {
        rien = ((d.prod["rien"] / c) * 100).toFixed(2);
        materiaux = ((d.prod["materiaux"] / c) * 100).toFixed(2);
        nourriture = ((d.prod["nourriture"] / c) * 100).toFixed(2);
        total_prod = d.nourriture["tdc"] + d.nourriture["champi"] - d.nourriture["armee"];
        conso_armee = (d.nourriture["armee"] * 100 / (d.nourriture["tdc"] + d.nourriture["champi"])).toFixed(2);
        if (conso_armee > 100) {
            conso_armee = 100
        }
        creerBoiteComptePlus("fr_FR", false, (b.unit ? b.unit : "Aucune ponte"), (b.unit ? b.time : ""), (e.evolution ? e.evolution : "Aucune construction"), (e.evolution ? e.time : ""), (a.evolution ? a.evolution : "Aucune recherche"), (a.evolution ? a.time : ""), rien, materiaux, formatNumber(c), "TDC : " + rien + "% rien, " + materiaux + "% materiaux, " + nourriture + "% nourriture", (total_prod >= 0 ? "+" : "") + formatNumber(total_prod), formatNumber(d.nourriture["champi"]) + "(champi) + " + formatNumber(d.nourriture["tdc"]) + "(tdc) - " + formatNumber(d.nourriture["armee"]) + "(armée), soit " + conso_armee + "% pour l’armée", conso_armee, "", "");
        $("#boiteComptePlus .titre_colonne_cliquable").html("<a href='http://outiiil.fr/'>Outiiil 1.1</a>")
    }
};

function Chat() {
    var b = "";
    var a = {
        emo1: "http://outiiil.fr/images/smiley/1.gif",
        emo2: "http://outiiil.fr/images/smiley/2.gif",
        emo3: "http://outiiil.fr/images/smiley/3.gif",
        emo4: "http://outiiil.fr/images/smiley/4.gif",
        emo5: "http://outiiil.fr/images/smiley/5.gif",
        emo6: "http://outiiil.fr/images/smiley/6.gif",
        emo7: "http://outiiil.fr/images/smiley/7.gif",
        emo8: "http://outiiil.fr/images/smiley/8.gif",
        emo9: "http://outiiil.fr/images/smiley/9.gif",
        emo10: "http://outiiil.fr/images/smiley/10.gif",
        emo11: "http://outiiil.fr/images/smiley/11.gif",
        emo12: "http://outiiil.fr/images/smiley/12.gif",
        emo13: "http://outiiil.fr/images/smiley/13.gif",
        emo14: "http://outiiil.fr/images/smiley/14.gif",
        emo15: "http://outiiil.fr/images/smiley/15.gif",
        emo16: "http://outiiil.fr/images/smiley/16.gif",
        emo17: "http://outiiil.fr/images/smiley/17.gif",
        emo18: "http://outiiil.fr/images/smiley/18.gif",
        emo19: "http://outiiil.fr/images/smiley/19.gif",
        emo20: "http://outiiil.fr/images/smiley/20.gif",
        emo21: "http://outiiil.fr/images/smiley/21.gif",
        emo22: "http://outiiil.fr/images/smiley/22.gif",
        emo23: "http://outiiil.fr/images/smiley/23.gif",
        emo24: "http://outiiil.fr/images/smiley/24.gif",
        emo25: "http://outiiil.fr/images/smiley/25.gif",
        emo26: "http://outiiil.fr/images/smiley/26.gif",
    };
    this.__init = function () {
        if (c = $.jCookies({
            get: "color"
        })) {
            $("#inputCouleur").val(c.color)
        }
        $("#listeSmiley10").attr("id", "liste1");
        $("#listeSmiley20").attr("id", "liste2");
        $("#listeSmiley30").attr("id", "liste3");
        $("#listeSmiley40").attr("id", "liste4");
        $("#listeSmiley50").attr("id", "liste5")
    };
    this.__construct = function () {
        if (!(comptePlus)) {
            this.comptePlus()
        }
        this.prevList();
        this.nextList();
        this.smileySupp();
        this.smileySuppEvent();
        this.buttonSupp();
        this.buttonSuppEvent();
        $("#boutonCouleur").remove();
        $("#smileySuivant0").after(" <strong id='color' title='Couleur' class='cursor' style='color:#" + $("#inputCouleur").val() + "'>Couleur</strong>");
        $("#color").ColorPicker({
            color: "#" + $("#inputCouleur").val(),
            onShow: function (d) {
                $(d).fadeIn(500);
                return false
            },
            onSubmit: function (d, g, e, f) {
                $(f).val(g);
                $(f).ColorPickerHide();
                $("#inputCouleur").val(g);
                $.jCookies({
                    name: "color",
                    value: {
                        color: $("#inputCouleur").val()
                    }
                });
                $("#color").css("color", "#" + g)
            },
            onChange: function (d, f, e) {
                $("#color").css("color", "#" + f)
            }
        })
    };
    this.prevList = function () {
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
    this.nextList = function () {
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
    this.smileySupp = function () {
        lineImg = "<div id='liste6' style='display: none;'>";
        for (elem in a) {
            lineImg += "<img id='smiley_" + elem + "' src='" + a[elem] + "'>"
        }
        lineImg += "<img width='1' height='39' src='images/carte/rien.gif'></div>";
        $("#tousLesSmiley0").append(lineImg)
    };
    this.smileySuppEvent = function () {
        $("img[id^=smiley_]").click(function () {
            $("#message").val($("#message").val() + "[img]" + a[$(this).attr("id").slice(7)] + "[/img]")
        })
    };
    this.buttonSupp = function () {
        block = " <img src='http://outiiil.fr/images/bbcode/up.png' title='Up'> <img src='http://outiiil.fr/images/bbcode/down.png' title='Down'>";
        $("img[title=Gras]").before(block);
        block = " <img src='http://outiiil.fr/images/bbcode/left.png' title='Left'> <img src='http://outiiil.fr/images/bbcode/center.png' title='Center'> <img src='http://outiiil.fr/images/bbcode/right.png' title='Right'>";
        $("img[title=Souligné]").after(block)
    };
    this.buttonSuppEvent = function () {
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
        $("img[title=Left]").click(function () {
            miseEnForme("message", "left")
        });
        $("img[title=Center]").click(function () {
            miseEnForme("message", "center")
        });
        $("img[title=Right]").click(function () {
            miseEnForme("message", "right")
        })
    };
    this.comptePlus = function () {
        this.addSmiley();
        this.addButton();
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
    this.addSmiley = function () {
        $("#liste2").html("<img onclick='addRaccourciSmiley(\"message\",\"doctor\")' src='images/smiley/doctor.gif'> <img onclick='addRaccourciSmiley(\"message\",\"borg\")' src='images/smiley/borg.gif'> <img onclick='addRaccourciSmiley(\"message\",\"pirate\")' src='images/smiley/pirate.gif'> <img onclick='addRaccourciSmiley(\"message\",\"sick2\")' src='images/smiley/sick2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"asian\")' src='images/smiley/asian.gif'> <img onclick='addRaccourciSmiley(\"message\",\"dunce\")' src='images/smiley/dunce.gif'> <img onclick='addRaccourciSmiley(\"message\",\"canadian\")' src='images/smiley/canadian.gif'> <img onclick='addRaccourciSmiley(\"message\",\"captain\")' src='images/smiley/captain.gif'> <img onclick='addRaccourciSmiley(\"message\",\"police\")' src='images/smiley/police.gif'> <img onclick='addRaccourciSmiley(\"message\",\"santa\")' src='images/smiley/santa.gif'> <img onclick='addRaccourciSmiley(\"message\",\"cook\")' src='images/smiley/cook.gif'> <img onclick='addRaccourciSmiley(\"message\",\"farmer\")' src='images/smiley/farmer.gif'> <img onclick='addRaccourciSmiley(\"message\",\"smurf\")' src='images/smiley/smurf.gif'> <img onclick='addRaccourciSmiley(\"message\",\"gangster\")' src='images/smiley/gangster.gif'> <img onclick='addRaccourciSmiley(\"message\",\"king\")' src='images/smiley/king.gif'> <img onclick='addRaccourciSmiley(\"message\",\"king2\")' src='images/smiley/king2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"pixie\")' src='images/smiley/pixie.gif'> <img onclick='addRaccourciSmiley(\"message\",\"pirate2\")' src='images/smiley/pirate2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"pirate3\")' src='images/smiley/pirate3.gif'> <img onclick='addRaccourciSmiley(\"message\",\"warrior\")' src='images/smiley/warrior.gif'> <img onclick='addRaccourciSmiley(\"message\",\"card\")' src='images/smiley/card.gif'> <img onclick='addRaccourciSmiley(\"message\",\"egypt\")' src='images/smiley/egypt.gif'> <img onclick='addRaccourciSmiley(\"message\",\"fool\")' src='images/smiley/fool.gif'> <img onclick='addRaccourciSmiley(\"message\",\"hat\")' src='images/smiley/hat.gif'> <img width='1' height='39' src='images/carte/rien.gif'>");
        $("#liste3").html("<img onclick='addRaccourciSmiley(\"message\",\"dead\")' src='images/smiley/dead.gif'> <img onclick='addRaccourciSmiley(\"message\",\"inv\")' src='images/smiley/inv.gif'> <img onclick='addRaccourciSmiley(\"message\",\"stretcher\")' src='images/smiley/stretcher.gif'> <img onclick='addRaccourciSmiley(\"message\",\"blue\")' src='images/smiley/blue.gif'> <img onclick='addRaccourciSmiley(\"message\",\"sick\")' src='images/smiley/sick.gif'> <img onclick='addRaccourciSmiley(\"message\",\"love\")' src='images/smiley/love.gif'> <img onclick='addRaccourciSmiley(\"message\",\"cupid\")' src='images/smiley/cupid.gif'> <img onclick='addRaccourciSmiley(\"message\",\"diablo\")' src='images/smiley/diablo.gif'> <img onclick='addRaccourciSmiley(\"message\",\"crossbones\")' src='images/smiley/crossbones.gif'> <img onclick='addRaccourciSmiley(\"message\",\"fish\")' src='images/smiley/fish.gif'> <img onclick='addRaccourciSmiley(\"message\",\"cupid2\")' src='images/smiley/cupid2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"construction\")' src='images/smiley/construction.gif'> <img onclick='addRaccourciSmiley(\"message\",\"flower\")' src='images/smiley/flower.gif'> <img onclick='addRaccourciSmiley(\"message\",\"drinks\")' src='images/smiley/drinks.gif'> <img onclick='addRaccourciSmiley(\"message\",\"burp\")' src='images/smiley/burp.gif'> <img onclick='addRaccourciSmiley(\"message\",\"rain\")' src='images/smiley/rain.gif'> <img onclick='addRaccourciSmiley(\"message\",\"surf\")' src='images/smiley/surf.gif'> <img onclick='addRaccourciSmiley(\"message\",\"baloon\")' src='images/smiley/baloon.gif'> <img onclick='addRaccourciSmiley(\"message\",\"sleep2\")' src='images/smiley/sleep2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"rip\")' src='images/smiley/rip.gif'> <img onclick='addRaccourciSmiley(\"message\",\"scooter\")' src='images/smiley/scooter.gif'> <img onclick='addRaccourciSmiley(\"message\",\"moto\")' src='images/smiley/moto.gif'> <img width='1' height='39' src='images/carte/rien.gif'>");
        $("#liste4").html("<img onclick='addRaccourciSmiley(\"message\",\"whip\")' src='images/smiley/whip.gif'><img onclick='addRaccourciSmiley(\"message\",\"shades\")' src='images/smiley/shades.gif'><img onclick='addRaccourciSmiley(\"message\",\"kiss\")' src='images/smiley/kiss.gif'><img onclick='addRaccourciSmiley(\"message\",\"boxer\")' src='images/smiley/boxer.gif'><img onclick='addRaccourciSmiley(\"message\",\"gun\")' src='images/smiley/gun.gif'><img onclick='addRaccourciSmiley(\"message\",\"bross\")' src='images/smiley/bross.gif'><img onclick='addRaccourciSmiley(\"message\",\"whistling\")' src='images/smiley/whistling.gif'><img onclick='addRaccourciSmiley(\"message\",\"showoff\")' src='images/smiley/showoff.gif'><img onclick='addRaccourciSmiley(\"message\",\"noel_vache\")' src='images/smiley/noel_vache.gif'><img onclick='addRaccourciSmiley(\"message\",\"app\")' src='images/smiley/app.gif'><img onclick='addRaccourciSmiley(\"message\",\"book\")' src='images/smiley/book.gif'><img onclick='addRaccourciSmiley(\"message\",\"cake\")' src='images/smiley/cake.gif'><img onclick='addRaccourciSmiley(\"message\",\"dance\")' src='images/smiley/dance.gif'><img onclick='addRaccourciSmiley(\"message\",\"harhar\")' src='images/smiley/harhar.gif'><img onclick='addRaccourciSmiley(\"message\",\"juggle\")' src='images/smiley/juggle.gif'><img onclick='addRaccourciSmiley(\"message\",\"worthy\")' src='images/smiley/worthy.gif'><img onclick='addRaccourciSmiley(\"message\",\"fishing\")' src='images/smiley/fishing.gif'><img onclick='addRaccourciSmiley(\"message\",\"stereo\")' src='images/smiley/stereo.gif'><img onclick='addRaccourciSmiley(\"message\",\"music\")' src='images/smiley/music.gif'><img onclick='addRaccourciSmiley(\"message\",\"prison\")' src='images/smiley/prison.gif'><img onclick='addRaccourciSmiley(\"message\",\"piece\")' src='images/smiley/piece.gif'><img width='1' height='39' src='images/carte/rien.gif'>");
        $("#liste5").html("<img onclick='addRaccourciSmiley(\"message\",\"noel_etoile\")' src='images/smiley/noel_etoile.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman10\")' src='images/smiley/noel_snowman10.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman11\")' src='images/smiley/noel_snowman11.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_cadeau3\")' src='images/smiley/noel_cadeau3.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_vache\")' src='images/smiley/noel_vache.gif'> <img onclick='addRaccourciSmiley(\"message\",\"santa\")' src='images/smiley/santa.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_pere\")' src='images/smiley/noel_pere.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_santa\")' src='images/smiley/noel_santa.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_bougie\")' src='images/smiley/noel_bougie.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_chien2\")' src='images/smiley/noel_chien2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_chapeau\")' src='images/smiley/noel_chapeau.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_cadeau\")' src='images/smiley/noel_cadeau.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_sapin3\")' src='images/smiley/noel_sapin3.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman4\")' src='images/smiley/noel_snowman4.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman3\")' src='images/smiley/noel_snowman3.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_chaussette\")' src='images/smiley/noel_chaussette.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_flocon\")' src='images/smiley/noel_flocon.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman5\")' src='images/smiley/noel_snowman5.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_sapin2\")' src='images/smiley/noel_sapin2.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_snowman8\")' src='images/smiley/noel_snowman8.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_bonnet\")' src='images/smiley/noel_bonnet.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_renne\")' src='images/smiley/noel_renne.gif'> <img onclick='addRaccourciSmiley(\"message\",\"noel_renne3\")' src='images/smiley/noel_renne3.gif'> <img width='1' height='39' src='images/carte/rien.gif'>")
    };
    this.addButton = function () {
        block = "<span style='cursor: pointer;position:relative;top:3px'> <img src='images/BBCode/bold.png' title='Gras' onclick=\"miseEnForme('message','gras');\"> <img src='images/BBCode/italic.png' title='Italique' onclick=\"miseEnForme('message','italic');\"> <img src='images/BBCode/underline.png' title='Souligné' onclick=\"miseEnForme('message','souligne');\"> <img src='images/BBCode/picture.png' title='Image' onclick=\"miseEnForme('message','img');\"> <img src='images/BBCode/link.png' title='Lien' onclick=\"miseEnForme('message','url');\"> <img height='15' src='images/BBCode/membre.gif' title='Pseudo' onclick=\"miseEnForme('message','player');\"> <img height='15' src='images/BBCode/groupe.gif' title='Alliance' onclick=\"miseEnForme('message','ally');\"></span>";
        $("#formulaireChat").append(block)
    }
};

function Table(b) {
    var a = b;
    this.__construct = function (c) {
        pseudo = $("#pseudo").text();
        terrain = $("#quantite_tdc").text();
        $(a + " tr").each(function () {
            if ($(this).index() > 0) {
                terrainCible = parseInt(removeSpace($(this).find("td:eq(" + c + ")").text()));
                if (terrainCible >= ((terrain * 0.5) + 1) && terrainCible <= ((terrain * 3) - 1) && $(this).find("td:eq(" + (c - 1) + ")").text() != pseudo) {
                    $(this).find("td:eq(" + c + ")").css("color", "#ff0000")
                }
            }
        });
        $(a + " th:contains('Terrain')").css("width", "100px");
        linkBottom();
        linkTop();
        $("#top").before("<br/>")
    };
    this.comptePlus = function () {
        head = $(a + " tr:first").html();
        $(a + " tr:first").remove();
        $(a).prepend("<thead class='cursor'><tr class='alt'>" + head + "</tr></thead>");
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
        if (a == "#tabMembresAlliance") {
            $(a).tablesorter({
                headers: {
                    3: {
                        sorter: "myNumeric"
                    }
                },
                widgets: ["zebra"]
            })
        }
        if (a == ".tab_triable") {
            $(a).tablesorter({
                headers: {
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
    }
};

function Utilitaire() {
    var a = "https://ad.nirgal.com/utilitaire/ajax/";
    var d = new Array();
    var j = new Array();
    var b = new Array();
    var e = new Array();
    var c = new Array();
    var h = this;
    var g = function (k) {
        splt = k.split("-");
        return splt[2] + "-" + splt[1] + "-" + splt[0]
    };
    var f = function (k) {
        d2 = new Date();
        k = k.getTime() / 86400000;
        d2 = d2.getTime() / 86400000;
        return new Number(d2 - k).toFixed(0)
    };
    this.getCommandeMat = function () {
        return d
    };
    this.getCommandeNou = function () {
        return j
    };
    this.__initCommand = function (k, m, l) {
        $.ajax({
            url: a + "liste_commande.php",
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            error: function (o, n) {
                alert("Désolé la procédure a echoué, veuillez réessayer plus tard !")
            },
            success: function (n) {
                if (n.errorcode == 0) {
                    d = n.liste_materiaux;
                    j = n.liste_nourriture;
                    h.command(k, m, l);
                    h.commandEvent()
                } else {
                    $("#tabConvois").html("<tr><td>" + n.errortext + "</td></tr>")
                }
            },
        })
    };
    this.command = function (k, n, m) {
        total = 0;
        totalRouge = 0;
        contenu = "";
        if (j.length > 0) {
            for (var l = 0; l < j.length; l++) {
                contenu += "<tr><td>" + j[l]["pseudo"] + "</td>";
                contenu += "<td><img width='18' heigth='18' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif'/></td>";
                contenu += "<td class='right'>" + formatNumber(j[l]["reste"]) + "</td>";
                if (j[l]["etat"] == "P1") {
                    contenu += "<td><img src='http://img3.fourmizzz.fr/images/icone/3rondrouge.gif' /></td>"
                } else {
                    if (j[l]["etat"] == "P2") {
                        contenu += "<td><img src='http://img3.fourmizzz.fr/images/icone/2rondorange.gif' /></td>"
                    } else {
                        if (j[l]["etat"] == "P3") {
                            contenu += "<td><img src='http://img3.fourmizzz.fr/images/icone/1rondvert.gif' /></td>"
                        } else {
                            contenu += "<td><img src='http://outiiil.fr/images/croix.png' title='Ne pas livrer avant le " + j[l]["date_apres"] + "'/></td>"
                        }
                    }
                }
                time = Math.ceil(Math.pow(0.9, m) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(j[l]["coord_x"] - k, 2) + Math.pow(j[l]["coord_y"] - n, 2)) / 350))));
                contenu += "<td>" + formatTime(time) + "</td>";
                if (j[l]["etat"] != "WAIT") {
                    contenu += "<td><span id='command_nou_" + l + "' class='cursor'><img title='livrer' src='http://img3.fourmizzz.fr/images/icone/icone_ouvriere.gif'/></a></td>"
                } else {
                    contenu += "<td></td>"
                }
                attente = f(new Date(j[l]["date_prevue"]));
                if (attente > 0) {
                    contenu += "<td><img src='http://outiiil.fr/images/question.png' alt='question' title='Date soumise : " + g(j[l]["date_soumise"]) + "&#10;Date prevue : " + g(j[l]["date_prevue"]) + "&#10;Attente : " + attente + " jours'/></td>"
                } else {
                    contenu += "<td><img src='http://outiiil.fr/images/question.png' alt='question' title='Date soumise : " + g(j[l]["date_soumise"]) + "&#10;Date prevue : " + g(j[l]["date_prevue"]) + "'/></td>"
                }
                contenu += "</tr>"
            }
        }
        if (d.length > 0) {
            for (var l = 0; l < d.length; l++) {
                contenu += "<tr><td>" + d[l]["pseudo"] + "</td>";
                contenu += "<td><img src='http://img3.fourmizzz.fr/images/icone/icone_bois.gif'/></td>";
                contenu += "<td class='right'>" + formatNumber(d[l]["reste"]) + "</td>";
                if (d[l]["etat"] == "P1") {
                    totalRouge += parseInt(d[l]["reste"]);
                    contenu += "<td><img src='http://img3.fourmizzz.fr/images/icone/3rondrouge.gif' /></td>"
                } else {
                    if (d[l]["etat"] == "P2") {
                        contenu += "<td><img src='http://img3.fourmizzz.fr/images/icone/2rondorange.gif' /></td>"
                    } else {
                        if (d[l]["etat"] == "P3") {
                            contenu += "<td><img src='http://img3.fourmizzz.fr/images/icone/1rondvert.gif' /></td>"
                        } else {
                            contenu += "<td><img src='http://outiiil.fr/images/croix.png' title='Ne pas livrer avant le " + d[l]["date_apres"] + "'/></td>"
                        }
                    }
                }
                total += parseInt(d[l]["reste"]);
                time = Math.ceil(Math.pow(0.9, m) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(d[l]["coord_x"] - k, 2) + Math.pow(d[l]["coord_y"] - n, 2)) / 350))));
                contenu += "<td>" + formatTime(time) + "</td>";
                if (d[l]["etat"] != "WAIT") {
                    contenu += "<td><span id='commande_mat_" + l + "' class='cursor'><img title='livrer' src='http://img3.fourmizzz.fr/images/icone/icone_ouvriere.gif'/></a></td>"
                } else {
                    contenu += "<td></td>"
                }
                attente = f(new Date(d[l]["date_prevue"]));
                if (attente > 0) {
                    contenu += "<td><img src='http://outiiil.fr/images/question.png' alt='question'  title='Priorité : " + d[l]["priorite"].toFixed(2) + "&#10;Date soumise : " + g(d[l]["date_soumise"]) + "&#10;Date prevue : " + g(d[l]["date_prevue"]) + "&#10;Attente : " + attente + " jours'/></td>"
                } else {
                    contenu += "<td><img src='http://outiiil.fr/images/question.png' alt='question'  title='Priorité : " + d[l]["priorite"].toFixed(2) + "&#10;Date soumise : " + g(d[l]["date_soumise"]) + "&#10;Date prevue : " + g(d[l]["date_prevue"]) + "'/></td>"
                }
                contenu += "</tr>"
            }
        }
        $("#tabConvois").append("<thead class='cursor'><tr class='even'><th>Pseudo</th><th>Type</th><th>Quantité</th><th>État</th><th>Temps de trajet</th><th>Livrer</th><th>Infos</th></tr></thead>");
        $("#tabConvois").append(contenu);
        if ((j.length + d.length) % 2) {
            $("#tabConvois").append("<tfoot><tr class='even'><td colspan=8>Total : " + formatNumber(total) + " dont : <span class='red'>" + formatNumber(totalRouge) + " en retard !</span></td></tr></tfoot>")
        } else {
            $("#tabConvois").append("<tfoot><tr><td colspan=8>Total : " + formatNumber(total) + " dont : <span class='red'>" + formatNumber(totalRouge) + " en retard !</span></td></tr></tfoot>")
        }
        $.tablesorter.addParser({
            id: "myNumeric",
            is: function (o) {
                return false
            },
            format: function (o) {
                return o.replace(/\s+/g, "").replace(/,/g, ".")
            },
            type: "numeric"
        });
        $.tablesorter.addParser({
            id: "myTime",
            is: function (o) {
                return false
            },
            format: function (o) {
                regexp = new RegExp("((\\d+)J )?s*((\\d+)H )?s*((\\d+)m )?s*((\\d+)s )?s*");
                duree = 0;
                if (o.replace(regexp, "$2")) {
                    duree += parseInt(o.replace(regexp, "$2")) * 24
                }
                if (o.replace(regexp, "$4")) {
                    duree = (duree + parseInt(o.replace(regexp, "$4"))) * 60
                }
                if (o.replace(regexp, "$6")) {
                    duree = (duree + parseInt(o.replace(regexp, "$6"))) * 60
                }
                if (o.replace(regexp, "$8")) {
                    duree += parseInt(o.replace(regexp, "$8"))
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
            },
            widgets: ["zebra"]
        })
    };
    this.commandEvent = function () {
        $("span[id^=commande_nou_]").click(function () {
            i = $(this).attr("id").slice(13);
            page.fillForm(j[i]["id"], j[i]["coord_x"], j[i]["coord_y"], j[i]["pseudo"], "N", j[i]["reste"]);
            $("html, body").animate({
                scrollTop: $(document).height()
            }, "slow")
        });
        $("span[id^=commande_mat_]").click(function () {
            i = $(this).attr("id").slice(13);
            page.fillForm(d[i]["id"], d[i]["coord_x"], d[i]["coord_y"], d[i]["pseudo"], "M", d[i]["reste"]);
            $("html, body").animate({
                scrollTop: $(document).height()
            }, "slow")
        })
    };
    this.sendConvoi = function (l, k) {
        $.ajax({
            url: a + "ajout_livraison.php",
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            data: {
                commande_id: l,
                quantite: k
            },
            error: function (n, m) {
                alert("Désolé la procédure a echoué, veuillez réessayer plus tard !")
            },
            success: function (m) {
                alert(m.errortext);
                securiteKey = String($("form center input:hidden").attr("name"));
                securiteValue = $("form center input:hidden").attr("value");
                dataSend = {};
                dataSend[securiteKey] = securiteValue;
                dataSend.convoi = "1";
                dataSend.x = $("#x").val();
                dataSend.y = $("#y").val();
                dataSend.nbMateriaux = removeSpace($("#nbMateriaux").val());
                dataSend.nbNourriture = removeSpace($("#nbNourriture").val());
                $.ajax({
                    url: "/commerce.php",
                    type: "post",
                    data: dataSend,
                    success: function () {
                        document.location = "/commerce.php"
                    }
                })
            }
        })
    };
    this.sendDemande = function (l, m, k) {
        $.ajax({
            url: a + "ajout_commande.php",
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            data: {
                evolution: l,
                date_prevue: m,
                date_apres: k
            },
            error: function (o, n) {
                alert("Désolé la procédure a echoué, veuillez réessayer plus tard !")
            },
            success: function (n) {
                alert(n.errortext)
            }
        })
    };
    this.getStatus = function () {
        return b
    };
    this.setStatus = function (k) {
        b = k
    };
    this.__initStatus = function (k) {
        $.ajax({
            url: a + "info_sdc.php",
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            error: function (m, l) {
                alert("Désolé, données indisponibles, veuillez réessayer plus tard !")
            },
            success: function (l) {
                if (l.errorcode == 0) {
                    b = l.info;
                    h.status(k);
                    h.statusEvent()
                } else {
                    $(".boite_amelioration:last").append("<tr class='even'><td colspan=8>" + l.errortext + "</td></tr>")
                }
            },
        })
    };
    this.status = function (k) {
        $(".simulateur table[class='ligne_paire']").append("<tr><td colspan=2><input id='showPlace' type='checkbox' name='showPlace'>Afficher Place</input></td><td colspan=2><input id='showLevel' type='checkbox' name='showLevel'>Afficher Niveau</input></td></tr>");
        $(".simulateur table[class='ligne_paire']").append("<tr><td colspan=2><input id='showOption' type='checkbox' name='showOption' checked>Afficher Option</input></td><td colspan=2><input id='showInfo' type='checkbox' name='showInfo' checked>Afficher Info</input></td></tr>");
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
            if ($(this).index() > 0) {
                $(this).append("<td align='center'></td>")
            }
            login = $(this).find("td:eq(3)").text();
            if (login in b) {
                if (b[login]["colonisateur"]) {
                    $(this).find("td:eq(8) img").attr("title", "Colonisé par : " + b[login]["colonisateur"]);
                    if (!(b[login]["colonisateur"] in b)) {
                        $(this).find("td:eq(8) img").attr("src", "http://outiiil.fr/images/attention.gif")
                    }
                }
                $(this).find("td:eq(0)").removeAttr("align");
                $(this).find("td:eq(0)").css("white-space", "nowrap");
                $(this).find("td:eq(0)").append(" <a href='https://ad.nirgal.com/utilitaire/profil.php?user_id=" + b[login]["phpbb_id"] + "' target='_blank'><img title='Profil utilitaire' src='http://outiiil.fr/images/utilitaire.png' alt='chasse' /></a>");
                $(this).find("td:eq(0)").append(" <a href='/commerce.php?ID=" + b[login]["fourmizzz_id"] + "'><img title='Envoyer un convoi' src='/images/icone/icone_tdc.gif' alt='convoi' /></a>");
                terrainCible = parseInt(removeSpace($(this).find("td:eq(4)").text()));
                if (terrainCible >= ((terrain * 0.5) + 1) && terrainCible <= ((terrain * 3) - 1) && $(this).find("td:eq(3)").text() != pseudo && b[login]["floodme"]) {
                    $(this).find("td:eq(4)").addClass("gras");
                    $(this).find("td:eq(4)").wrapInner("<a title='Attaquer' href='/ennemie.php?Attaquer=" + b[login]["fourmizzz_id"] + "&lieu=1' />")
                }
                if (b[login]["status_code"] == 2) {
                    $(this).find("td:eq(0)").append(" <img title='En chasse' src='http://img3.fourmizzz.fr/images/icone/icone_chasse.gif' alt='chasse' />")
                }
                if (b[login]["status_code"] == 3) {
                    $(this).find("td:eq(0)").append(" <img title='En descente' src='http://outiiil.fr/images/descente.png' alt='descente' />")
                }
                if (b[login]["status_code"] == 4) {
                    $(this).find("td:eq(0)").append(" <img title='Ne pas flooder' src='http://outiiil.fr/images/croix.png' alt='noflood' />")
                }
                time = Math.ceil(Math.pow(0.9, k) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(b[login]["coord_x"] - b[$("#pseudo").text()]["coord_x"], 2) + Math.pow(b[login]["coord_y"] - b[$("#pseudo").text()]["coord_y"], 2)) / 350))));
                $(this).find("td:eq(10)").append(formatTime(time))
            }
        })
    };
    this.statusEvent = function () {
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
    this.getDataPlayer = function () {
        return e
    };
    this.setDataPlayer = function (k) {
        e = k
    };
    this.__initDataPlayer = function () {
        $.ajax({
            url: a + "info_player.php",
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            success: function (k) {
                if (k.errorcode == 0) {
                    e.activite = k.mul_tantieme;
                    e.niveau_champi = k.needed_mushroom;
                    e.champi = k.champi;
                    e.solde = k.solde_virtuel;
                    h.showDataPlayer()
                }
            },
        })
    };
    this.showDataPlayer = function () {
        color = e.niveau_champi < e.champi ? "green" : "red";
        $("#tableau_demande").append("<tr class='centre'><td colspan=3><strong>Info : À votre niveau une Champignonnière niveau <span class='" + color + "'>" + e.niveau_champi + "</span> est exigée.</strong></td></tr>");
        $("#tableau_demande").append("<tr class='centre'><td colspan=3><strong>Info : Actuellement vous avez droit à " + formatNumber(e.solde) + " <img src='http://img3.fourmizzz.fr/images/icone/icone_bois.gif'/>.</strong></td></tr>");
        $("#tableau_demande").append("<tr><td colspan=3><strong><div title='Activité : " + e.activite + "%' id='progressbar'></div></strong></td></tr>");
        $("#progressbar").progressbar({
            value: e.activite,
        });
        if (e.activite > 75) {
            $("#progressbar > div").css({
                background: "#1F9412"
            })
        } else {
            if (e.activite > 50) {
                $("#progressbar > div").css({
                    background: "yellow"
                })
            } else {
                if (e.activite > 25) {
                    $("#progressbar > div").css({
                        background: "orange"
                    })
                } else {
                    $("#progressbar > div").css({
                        background: "red"
                    })
                }
            }
        }
    }
};

function PageAlliance() {
    var c = "/alliance.php?Membres";
    var b = new Utilitaire();
    var a = new PageLaboratoire();
    this.__construct = function () {
        linkBottom();
        linkTop();
        this.infoTotal();
        if (!(comptePlus)) {
            this.comptePlus()
        }
        if ($("#tag_alliance").text() == "AD" && location.host.split(".")[0] == "s1") {
            this.optionAD()
        }
    };
    this.infoTotal = function () {
        totalTerrain = 0;
        totalConstruction = 0;
        totalTechno = 0;
        totalActif = 0;
        totalAbsent = 0;
        totalDisparu = 0;
        totalVacance = 0;
        totalBani = 0;
        totalColonise = 0;
        pseudo = $("#pseudo").text();
        terrain = $("#quantite_tdc").text();
        $("#tabMembresAlliance tbody tr:gt(0)").each(function () {
            totalTerrain += parseInt(removeSpace($(this).find("td:eq(4)").text()));
            totalConstruction += parseInt($(this).find("td:eq(6)").text());
            totalTechno += parseInt($(this).find("td:eq(5)").text());
            if ($(this).find("td:eq(7)").find("img[alt='Actif']").length) {
                totalActif += 1
            }
            if ($(this).find("td:eq(7)").find("img[alt='Inactif depuis 3 jours']").length) {
                $(this).addClass("orange");
                totalAbsent += 1
            }
            if ($(this).find("td:eq(7)").find("img[alt='Inactif depuis 10 jours']").length) {
                $(this).addClass("red");
                totalDisparu += 1
            }
            if ($(this).find("td:eq(7)").find("img[alt='Vacances']").length) {
                totalVacance += 1
            }
            if ($(this).find("td:eq(7)").find("img[alt='Bannie']").length) {
                totalBani += 1
            }
            if ($(this).find("td:eq(8)").find("img[alt='Colonisé']").length) {
                totalColonise += 1
            }
            terrainCible = parseInt(removeSpace($(this).find("td:eq(4)").text()));
            if (terrainCible >= ((terrain * 0.5) + 1) && terrainCible <= ((terrain * 3) - 1) && $(this).find("td:eq(3)").text() != pseudo) {
                $(this).find("td:eq(4)").addClass("bleu")
            }
        });
        $(".simulateur table[class='ligne_paire'] tr:eq(0) td:eq(1)").append("  (" + totalActif + ")");
        $(".simulateur table[class='ligne_paire'] tr:eq(0) td:eq(3)").append("  (" + totalVacance + ")");
        $(".simulateur table[class='ligne_paire'] tr:eq(1) td:eq(1)").append("  (" + totalAbsent + ")");
        $(".simulateur table[class='ligne_paire'] tr:eq(1) td:eq(3)").append("  (" + totalBani + ")");
        $(".simulateur table[class='ligne_paire'] tr:eq(2) td:eq(1)").append("  (" + totalDisparu + ")");
        $(".simulateur table[class='ligne_paire'] tr:eq(2) td:eq(3)").append("  (" + totalColonise + ")");
        if ($("#tabMembresAlliance tr").length % 2 == 0) {
            ligne = "<tfoot class='centre'><tr class='even'><td></td><td></td><td></td><td></td><td id='totalTerrain' class='total'>" + formatNumber(totalTerrain) + "</td><td class='total'>" + formatNumber(totalConstruction) + "</td><td class='total'>" + formatNumber(totalTechno) + "</td><td></td><td></td><td></td><td></td></tr></tfoot>"
        } else {
            ligne = "<tfoot class='centre'><tr><td></td><td></td><td></td><td></td><td id='totalTerrain' class='total'>" + formatNumber(totalTerrain) + "</td><td class='total'>" + formatNumber(totalConstruction) + "</td><td class='total'>" + formatNumber(totalTechno) + "</td><td></td><td></td><td></td><td></td></tr></tfoot>"
        }
        $("#tabMembresAlliance").append(ligne)
    };
    this.comptePlus = function () {
        head = $("#tabMembresAlliance tr:first").html();
        $("#tabMembresAlliance tr:first").remove();
        $("#tabMembresAlliance").prepend("<thead class='cursor'><tr class='alt'>" + head + "</tr></thead>");
        $.tablesorter.addParser({
            id: "myNumeric",
            is: function (d) {
                return false
            },
            format: function (d) {
                return d.replace(/\s+/g, "").replace(/,/g, ".")
            },
            type: "numeric"
        });
        $("#tabMembresAlliance").tablesorter({
            headers: {
                4: {
                    sorter: "myNumeric"
                }
            },
            widgets: ["zebra"]
        })
    };
    this.optionAD = function () {
        nombreRecolteur = 0;
        totalRecolteur = 0;
        nombrePasseur = 0;
        totalPasseur = 0;
        nombreChasseur = 0;
        totalChasseur = 0;
        nombreADsien = 0;
        totalADsien = 0;
        $("#tabMembresAlliance tr").each(function () {
            if ($(this).find("td:eq(2)").text().indexOf("Récolteur") != -1) {
                nombreRecolteur += 1;
                totalRecolteur += parseInt(removeSpace($(this).find("td:eq(4)").text()))
            }
            if ($(this).find("td:eq(2)").text().indexOf("Passeur") != -1) {
                nombrePasseur += 1;
                totalPasseur += parseInt(removeSpace($(this).find("td:eq(4)").text()))
            }
            if ($(this).find("td:eq(2)").text().indexOf("CHASSEUR") != -1) {
                nombreChasseur += 1;
                totalChasseur += parseInt(removeSpace($(this).find("td:eq(4)").text()))
            }
            if ($(this).find("td:eq(2)").text().indexOf("ADsien") != -1) {
                nombreADsien += 1;
                totalADsien += parseInt(removeSpace($(this).find("td:eq(4)").text()))
            }
        });
        contenu = "<br/><table class='boite_amelioration my_tab centre' cellspacing='5'><tr><td colspan='8'><span class='titre'>Informations</span></td></tr><tr class='even'><td class='gras' colspan=2>Récolteur</td><td class='gras' colspan=2>Passeur</td><td class='gras' colspan=2>Chasseur</td><td class='gras' colspan=2>ADsien</td></tr><tr><td>Nombre</td><td>Terrain</td><td>Nombre</td><td>Terrain</td><td>Nombre</td><td>Terrain</td><td>Nombre</td><td>Terrain</td></tr><tr class='even'><td>" + nombreRecolteur + "</td><td>" + formatNumber(totalRecolteur) + "</td><td>" + nombrePasseur + "</td><td>" + formatNumber(totalPasseur) + "</td><td>" + nombreChasseur + "</td><td>" + formatNumber(totalChasseur) + "</td><td>" + nombreADsien + "</td><td>" + formatNumber(totalADsien) + "</td></tr><tr><td>" + (nombreRecolteur * 100 / ($("#tabMembresAlliance tr").length - 1)).toFixed(2) + "%</td><td>" + (totalRecolteur * 100 / parseInt(removeSpace($("#totalTerrain").text()))).toFixed(2) + "%</td><td>" + (nombrePasseur * 100 / ($("#tabMembresAlliance tr").length - 1)).toFixed(2) + "%</td><td>" + (totalPasseur * 100 / parseInt(removeSpace($("#totalTerrain").text()))).toFixed(2) + "%</td><td>" + (nombreChasseur * 100 / ($("#tabMembresAlliance tr").length - 1)).toFixed(2) + "%</td><td>" + (totalChasseur * 100 / parseInt(removeSpace($("#totalTerrain").text()))).toFixed(2) + "%</td><td>" + (nombreADsien * 100 / ($("#tabMembresAlliance tr").length - 1)).toFixed(2) + "%</td><td>" + (totalADsien * 100 / parseInt(removeSpace($("#totalTerrain").text()))).toFixed(2) + "%</td></tr></table>";
        $(".simulateur:last").after(contenu);
        a.__initAjax();
        b.__initStatus(a.getLevel()[6])
    }
};

function PageArmee() {
    var f = "/Armee.php";
    var a = new PageLaboratoire();
    var c = new Armee();
    var g = new Armee();
    var e = new Armee();
    var b = 0;
    var d = function (h) {
        if (h > 0) {
            annees = Math.floor(h / 31536000);
            h = h - (Math.floor(h / 31536000) * 31536000);
            jours = Math.floor(h / 86400);
            temp = h - jours * 86400;
            heures = Math.floor(temp / 3600);
            minutes = Math.floor(((temp / 3600) - Math.floor(temp / 3600)) * 60);
            secondes = temp - ((Math.floor(temp / 60)) * 60);
            message = "";
            if (annees >= 1) {
                message += formatNumber(annees) + "A "
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
    this.getNbrAtt = function () {
        return b
    };
    this.setNbrAtt = function (h) {
        b = h
    };
    this.__init = function () {
        a.__initAjax();
        $(".simulateur tr[align=center]:lt(14)").each(function (h) {
            unit = $(this).find(".pas_sur_telephone").text();
            nbrUnit = parseInt(removeSpace($(this).find("td:nth-child(3) span").text()));
            nbrUnit2 = parseInt(removeSpace($(this).find("td:nth-last-child(2)").text()));
            if (unit == "Jeune Soldate Naine") {
                if (nbrUnit) {
                    c.setJSN(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setJSN(nbrUnit2)
                }
            }
            if (unit == "Soldate Naine") {
                if (nbrUnit) {
                    c.setSN(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setSN(nbrUnit2)
                }
            }
            if (unit == "Naine d'Elite") {
                if (nbrUnit) {
                    c.setNE(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setNE(nbrUnit2)
                }
            }
            if (unit == "Jeune Soldate") {
                if (nbrUnit) {
                    c.setJS(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setJS(nbrUnit2)
                }
            }
            if (unit == "Soldate") {
                if (nbrUnit) {
                    c.setS(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setS(nbrUnit2)
                }
            }
            if (unit == "Concierge") {
                if (nbrUnit) {
                    c.setC(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setC(nbrUnit2)
                }
            }
            if (unit == "Concierge d'élite") {
                if (nbrUnit) {
                    c.setCE(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setCE(nbrUnit2)
                }
            }
            if (unit == "Artilleuse") {
                if (nbrUnit) {
                    c.setA(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setA(nbrUnit2)
                }
            }
            if (unit == "Artilleuse d'élite") {
                if (nbrUnit) {
                    c.setAE(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setAE(nbrUnit2)
                }
            }
            if (unit == "Soldate d'élite") {
                if (nbrUnit) {
                    c.setSE(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setSE(nbrUnit2)
                }
            }
            if (unit == "Tank") {
                if (nbrUnit) {
                    c.setT(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setT(nbrUnit2)
                }
            }
            if (unit == "Tank d'élite") {
                if (nbrUnit) {
                    c.setTE(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setTE(nbrUnit2)
                }
            }
            if (unit == "Tueuse") {
                if (nbrUnit) {
                    c.setTu(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setTu(nbrUnit2)
                }
            }
            if (unit == "Tueuse d'élite") {
                if (nbrUnit) {
                    c.setTuE(nbrUnit)
                }
                if (nbrUnit2) {
                    e.setTuE(nbrUnit2)
                }
            }
            $(this).find("td").slice(3, ($(this).find("td").length - 2)).each(function () {
                nbrUnit3 = parseInt(removeSpace($(this).text()));
                if (unit == "Jeune Soldate Naine" && nbrUnit3) {
                    g.setJSN(nbrUnit3)
                }
                if (unit == "Soldate Naine" && nbrUnit3) {
                    g.setSN(nbrUnit3)
                }
                if (unit == "Naine d'Elite" && nbrUnit3) {
                    g.setNE(nbrUnit3)
                }
                if (unit == "Jeune Soldate" && nbrUnit3) {
                    g.setJS(nbrUnit3)
                }
                if (unit == "Soldate" && nbrUnit3) {
                    g.setS(nbrUnit3)
                }
                if (unit == "Concierge" && nbrUnit3) {
                    g.setC(nbrUnit3)
                }
                if (unit == "Concierge d'élite" && nbrUnit3) {
                    g.setCE(nbrUnit3)
                }
                if (unit == "Artilleuse" && nbrUnit3) {
                    g.setA(nbrUnit3)
                }
                if (unit == "Artilleuse d'élite" && nbrUnit3) {
                    g.setAE(nbrUnit3)
                }
                if (unit == "Soldate d'élite" && nbrUnit3) {
                    g.setSE(nbrUnit3)
                }
                if (unit == "Tank" && nbrUnit3) {
                    g.setT(nbrUnit3)
                }
                if (unit == "Tank d'élite" && nbrUnit3) {
                    g.setTE(nbrUnit3)
                }
                if (unit == "Tueuse" && nbrUnit3) {
                    g.setTu(nbrUnit3)
                }
                if (unit == "Tueuse d'élite" && nbrUnit3) {
                    g.setTuE(nbrUnit3)
                }
            })
        });
        b = $("#centre center").text().split("- Vous allez attaquer").length - 1
    };
    this.__initAjax = function () {
        $.ajax({
            url: f,
            async: false,
            success: function (h) {
                b = $(h).find("#centre center").text().split("- Vous allez attaquer").length - 1
            }
        })
    };
    this.__construct = function () {
        $("h3:eq(2)").append(" " + b + ", reste : " + (a.getLevel()[6] + 1 - b) + ".</p>");
        timeUnit = c.getTime() + g.getTime() + e.getTime();
        $("#centre").prepend("<p>Temps <a href='http://fourmizzz.cforum.info/t10661-Top-10-Hall-Of-Fame.htm' title='Hall Of Fame' >HOF</a> de votre armée : <span class='gras'>" + d(timeUnit) + "</span>.</p>");
        totalUnit = c.getSommeUnite() + g.getSommeUnite() + e.getSommeUnite();
        if (totalUnit > 1) {
            $("h3:first").append(" (" + formatNumber(totalUnit) + " unités)</p>")
        } else {
            $("h3:first").append(" (" + totalUnit + " unité)</p>")
        } if (!(comptePlus)) {
            this.comptePlus()
        }
        this.showLineXP();
        this.lineEvent()
    };
    this.showLineXP = function () {
        bouclier = a.getLevel()[1];
        armes = a.getLevel()[2];
        totalAtt = c.getTotalAtt(armes) + g.getTotalAtt(armes) + e.getTotalAtt(armes);
        table = "<tr id='lineXP' align='center' style='height:30px;' class='cursor'><td colspan=10>Capacités de votre armée</td></tr><tr align='center'><td colspan=10><table cellspacing='0' class='centre mytab' style='display:none;'><tr class='ligne_paire' style='padding-top:10px;'><td>Victoire en Attaque</td><td>Réplique à 10%</td><td>Réplique à 30%</td><td>Réplique à 50%</td><td class='blue'>Réplique à 100%</td></tr><tr><td><img alt='Vie :' src='http://img3.fourmizzz.fr/images/icone/icone_coeur.gif' width='19' height='19' title='Vie' > (Vie ennemi AB)</td><td class='red'>< " + formatNumber(totalAtt) + "</td><td class='red'>< " + formatNumber(totalAtt) + "</td><td class='red'>< " + formatNumber(totalAtt) + "</td><td class='blue'>> " + formatNumber(totalAtt) + "</td></tr><tr><td><img alt='Vie :' src='http://img3.fourmizzz.fr/images/icone/icone_coeur.gif' width='19' height='19' title='Vie' > (Vie ennemi HB)</td><td class='red'>< " + formatNumber(Math.ceil(totalAtt / 3)) + "</td><td class='red'>< " + formatNumber(Math.ceil(totalAtt / 2)) + "</td><td class='red'>< " + formatNumber(Math.ceil(totalAtt * 2 / 3)) + "</td><td class='blue'>> " + formatNumber(Math.ceil(totalAtt * 2 / 3)) + "</td></tr><tr class='ligne_paire'><td>Défaite en Défense</td><td>Réplique à 10%</td><td>Réplique à 30%</td><td>Réplique à 50%</td><td class='blue'>Réplique à 100%</td></tr><tr><td><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégats en attaque :' /> (FDF ennemi AB) en dôme</td>";
        levelDome = parseInt($('span:contains("Dôme")').text().replace(/\D/g, ""));
        totalVieDome = g.getTotalVie(bouclier, 2, levelDome);
        if (totalVieDome) {
            if (totalVieDome > 3 * g.getBaseVie()) {
                table += "<td>> " + formatNumber(totalVieDome) + "</td><td>-</td><td>-</td><td class='blue'>< " + formatNumber(totalVieDome) + "</td></tr>"
            } else {
                table += "<td class='red'>> " + formatNumber(totalVieDome) + "</td><td class='red'>> " + formatNumber(totalVieDome) + "</td><td class='red'>> " + formatNumber(totalVieDome) + "</td><td class='blue'>< " + formatNumber(totalVieDome) + "</td></tr><tr><td><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégats en attaque :' /> (FDF ennemi HB) en dôme</td><td class='red'>> " + formatNumber(Math.ceil(totalVieDome * 2 / 3)) + "</td><td class='red'>> " + formatNumber(Math.ceil(totalVieDome / 2)) + "</td><td class='red'>> " + formatNumber(Math.ceil(totalVieDome / 3)) + "</td><td class='blue'>< " + formatNumber(Math.ceil(totalVieDome / 3)) + "</td></tr>"
            }
        } else {
            table += "<td>-</td><td>-</td><td>-</td><td>-</td></tr>"
        }
        table += "<tr class='ligne_paire' style='heigth:3px;'><td colspan=5></td></tr>";
        table += "<tr><td><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégats en attaque :' /> (FDF ennemi AB) en loge</td>";
        levelLoge = parseInt($('span:contains("Loge")').text().replace(/\D/g, ""));
        totalVieLoge = e.getTotalVie(bouclier, 3, levelLoge);
        if (totalVieLoge) {
            if (totalVieLoge > 3 * e.getBaseVie()) {
                table += "<td>> " + formatNumber(totalVieLoge) + "</td><td>-</td><td>-</td><td class='blue'>< " + formatNumber(totalVieLoge) + "</td></tr>"
            } else {
                table += "<td class='red'>> " + formatNumber(totalVieLoge) + "</td><td class='red'>> " + formatNumber(totalVieLoge) + "</td><td class='red'>> " + formatNumber(totalVieLoge) + "</td><td class='blue'>< " + formatNumber(totalVieLoge) + "</td></tr><tr><td><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégats en attaque :' /> (FDF ennemi HB) en loge</td><td class='red'>> " + formatNumber(Math.ceil(totalVieLoge * 2 / 3)) + "</td><td class='red'>> " + formatNumber(Math.ceil(totalVieLoge / 2)) + "</td><td class='red'>> " + formatNumber(Math.ceil(totalVieLoge / 3)) + "</td><td class='blue'>< " + formatNumber(Math.ceil(totalVieLoge / 3)) + "</td></tr>"
            }
        } else {
            table += "<td>-</td><td>-</td><td>-</td><td>-</td></tr>"
        }
        table += "</tr><tr class='ligne_paire'><td colspan=5 style='font-size:0.8em;'>Légende : en <span class='red'>rouge</span> les 2 conditions doivent être réunies, en <span class='blue'>bleu</span> une des deux suffit (issue du combat incertaine) !<br/>Note : les répliques à 30% et 50% sont quasi inexistantes (sauf les premiers mois de jeu), car les bonus multiplient très vite la vie HB (ie. vie AB > 3 * Vie HB).</td></tr></table></td></tr>";
        $(".simulateur tr[align=center]:last").after(table)
    };
    this.comptePlus = function () {
        $(".simulateur td").each(function () {
            if (/^[0-9,]+$/.test($(this).text().replace(/ /g, ""))) {
                info = $(this).find("span").attr("id").replace(/\(|\)/g, "");
                nbUnit = info.split(",")[0];
                nomUnit = info.split(",")[1].replace(/\'/g, "");
                lieuDep = info.split(",")[2];
                if (lieuDep != 3) {
                    lieuArr = parseInt(lieuDep) + 1;
                    securite = $("input:hidden").attr("name") + "=" + $("input:hidden").attr("value");
                    lien = "Armee.php?Transferer&nbTroupes=" + nbUnit + "&ChoixUnite=" + nomUnit + "&LieuOrigine=" + lieuDep + "&LieuDestination=" + lieuArr + "&" + securite;
                    $(this).next().html("<a href=" + lien + " class='cursor'><img width='9' height='15' src='http://img2.fourmizzz.fr/images/bouton/fleche-champs-droite.gif'/></a>")
                }
                if (lieuDep != 1) {
                    lieuArr = parseInt(lieuDep) - 1;
                    securite = $("input:hidden").attr("name") + "=" + $("input:hidden").attr("value");
                    lien = "Armee.php?Transferer&nbTroupes=" + nbUnit + "&ChoixUnite=" + nomUnit + "&LieuOrigine=" + lieuDep + "&LieuDestination=" + lieuArr + "&" + securite;
                    $(this).prev().html("<a href=" + lien + " class='cursor'><img width='9' height='15' src='http://img2.fourmizzz.fr/images/bouton/fleche-champs-gauche.gif'/></a>")
                }
            }
        });
        page.showLineVie();
        page.showLineAttaque();
        page.showLineDefense();
        page.showLineConsommation()
    };
    this.showLineVie = function () {
        bouclier = a.getLevel()[1];
        levelDome = parseInt($('span:contains("Dôme")').text().replace(/\D/g, ""));
        levelLoge = parseInt($('span:contains("Loge")').text().replace(/\D/g, ""));
        line = "<tr id='lineVie' align='center' class='cursor'><td>Vie</td><td colspan=3><img alt='Vie :' src='http://img3.fourmizzz.fr/images/icone/icone_coeur.gif' width='19' height='19' title='Vie' > " + formatNumber(c.getTotalVie(bouclier, 1, 0)) + "</td><td colspan=3><img alt='Vie :' src='http://img3.fourmizzz.fr/images/icone/icone_coeur.gif' width='19' height='19' title='Vie' > " + formatNumber(g.getTotalVie(bouclier, 2, levelDome)) + "</td><td colspan=3><img alt='Vie :' src='http://img3.fourmizzz.fr/images/icone/icone_coeur.gif' width='19' height='19' title='Vie' > " + formatNumber(e.getTotalVie(bouclier, 3, levelLoge)) + "</td></tr><tr align='center' class='vie' style='display:none;'><td>Base</td><td colspan=3>" + formatNumber(c.getBaseVie()) + "</td><td colspan=3>" + formatNumber(g.getBaseVie()) + "</td><td colspan=3>" + formatNumber(e.getBaseVie()) + "</td></tr><tr align='center' class='vie' style='display:none;'><td>Bonus Bouclier (" + bouclier + ")</td><td colspan=3>+ " + formatNumber(c.getBonusVie(bouclier)) + "</td><td colspan=3>+ " + formatNumber(g.getBonusVie(bouclier)) + "</td><td colspan=3>+ " + formatNumber(e.getBonusVie(bouclier)) + "</td></tr><tr align='center' class='vie' style='display:none;'><td>Bonus du lieu</td><td colspan=3>+ " + formatNumber(c.getBonusLieuVie(0, 0)) + "</td><td colspan=3>+ " + formatNumber(g.getBonusLieuVie(levelDome, 2)) + "</td><td colspan=3>+ " + formatNumber(e.getBonusLieuVie(levelLoge, 3)) + "</td></tr>";
        $(".simulateur tr[align=center]:last").after(line)
    };
    this.showLineAttaque = function () {
        armes = a.getLevel()[2];
        line = "<tr id='lineAtt' align='center' class='ligne_paire cursor'><td>Dégats en Attaque</td><td colspan=3><img alt='Dégat en défense :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégat en défense :' /> " + formatNumber(c.getTotalAtt(armes)) + "</td><td colspan=3><img alt='Dégat en défense :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégat en défense :' /> " + formatNumber(g.getTotalAtt(armes)) + "</td><td colspan=3><img alt='Dégat en défense :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_attaque.gif' width='18' height='18' title='Dégat en défense :' /> " + formatNumber(e.getTotalAtt(armes)) + "</td></tr><tr align='center' class='ligne_paire att' style='display:none;'><td>Base</td><td colspan=3>" + formatNumber(c.getBaseAtt()) + "</td><td colspan=3>" + formatNumber(g.getBaseAtt()) + "</td><td colspan=3>" + formatNumber(e.getBaseAtt()) + "</td></tr><tr align='center' class='ligne_paire att' style='display:none;'><td>Bonus Arme (" + armes + ")</td><td colspan=3>+ " + formatNumber(c.getBonusAtt(armes)) + "</td><td colspan=3>+ " + formatNumber(g.getBonusAtt(armes)) + "</td><td colspan=3>+ " + formatNumber(e.getBonusAtt(armes)) + "</td></tr>";
        $(".simulateur tr[align=center]:last").after(line)
    };
    this.showLineDefense = function () {
        armes = a.getLevel()[2];
        line = "<tr id='lineDef' align='center' class='cursor'><td>Dégats en Défense</td><td colspan=3><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_defense.gif' width='18' height='18' title='Dégats en attaque :' /> " + formatNumber(c.getTotalDef(armes)) + "</td><td colspan=3><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_defense.gif' width='18' height='18' title='Dégats en attaque :' /> " + formatNumber(g.getTotalDef(armes)) + "</td><td colspan=3><img alt='Dégats en attaque :' src='http://img3.fourmizzz.fr/images/icone/icone_degat_defense.gif' width='18' height='18' title='Dégats en attaque :' /> " + formatNumber(e.getTotalDef(armes)) + "</td></tr><tr align='center' class='def' style='display:none;'><td>Base</td><td colspan=3>" + formatNumber(c.getBaseDef()) + "</td><td colspan=3>" + formatNumber(g.getBaseDef()) + "</td><td colspan=3>" + formatNumber(e.getBaseDef()) + "</td></tr><tr align='center' class='def' style='display:none;'><td>Bonus Arme (" + armes + ")</td><td colspan=3>+ " + formatNumber(c.getBonusDef(armes)) + "</td><td colspan=3>+ " + formatNumber(g.getBonusDef(armes)) + "</td><td colspan=3>+ " + formatNumber(e.getBonusDef(armes)) + "</td></tr>";
        $(".simulateur tr[align=center]:last").after(line)
    };
    this.showLineConsommation = function () {
        line = "<tr align='center' class='ligne_paire'><td>Consommation Journalière</td><td colspan=3><img alt='Consommation Journalière' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif' width='18' height='18' title='Consommation Journalière' /> " + formatNumber(c.getConsommation(1)) + "</td><td colspan=3><img alt='Consommation Journalière' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif' width='18' height='18' title='Consommation Journalière' /> " + formatNumber(g.getConsommation(2)) + "</td><td colspan=3><img alt='Consommation Journalière' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif' width='18' height='18' title='Consommation Journalière' /> " + formatNumber(e.getConsommation(3)) + "</td></tr>";
        $(".simulateur tr[align=center]:last").after(line)
    };
    this.lineEvent = function () {
        $("#lineXP").click(function () {
            showHide("mytab")
        });
        $("#lineVie").click(function () {
            showHide("vie")
        });
        $("#lineAtt").click(function () {
            showHide("att")
        });
        $("#lineDef").click(function () {
            showHide("def")
        })
    }
};

function PageAttaquer() {
    var d = new PageLaboratoire();
    var a = new PageArmee();
    var c = new Armee();
    var e = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
    var b = new Date();
    this.getArmee = function () {
        return c
    };
    this.__init = function () {
        d.__initAjax();
        a.__initAjax();
        c.__initAjax();
        c.__init(d.getLevel()[1], d.getLevel()[2], d.getLevel()[6], d.getLevel()[5], a.getNbrAtt());
        if ($("input[name=pseudoCible]").length) {
            joueur1 = new PageProfil();
            joueur1.__initAjax($("#pseudo").text());
            joueur2 = new PageProfil();
            joueur2.__initAjax($("input[name=pseudoCible]").val());
            b.setSeconds(b.getSeconds() + joueur1.getDistance(joueur2.getX(), joueur2.getY(), d.getLevel()[6]))
        }
    };
    this.__construct = function () {
        this.launcher();
        this.launcherEvent();
        this.optimizer();
        this.optimizerEvent()
    };
    this.launcher = function () {
        selectNbrFlood = "<select id='nbr_flood' class='my_input' title='Nombre de flood compris entre 0 et votre vitesse de chasse'>";
        for (var f = 1; f < d.getLevel()[6] + 2; f++) {
            selectNbrFlood += "<option>" + f + "</option>"
        }
        selectNbrFlood += "</select>";
        boite = "<fieldset><legend><span class='titre'>Lancer vos Floods</span></legend><center><table><tr><td>Nombre de flood</td><td>:</td><td>" + selectNbrFlood + "</td></tr><tr><td>Quantité par flood</td><td>:</td><td><input id='qte_flood' class='my_input' type='text' value='1 000 000' /></td></tr><tr class='centre'><td colspan=3><span class='retour'>Retour le " + b.getDate() + " " + e[b.getMonth()] + " à " + formatDateTime(b.getHours()) + "h" + formatDateTime(b.getMinutes()) + "</span></td></tr></table><input name='lancer' type='button' value='Lancer flood' /><p class='gras'>Info : Veuillez rester sur cette page le temps du lancement ! (1 secondes entre floods).</p></center></fieldset>";
        $("#formulaireChoixArmee").append(boite)
    };
    this.launcherEvent = function () {
        $("#qte_flood").keyup(function () {
            $(this).val(formatNumber(removeSpace($(this).val())))
        });
        $("input[name=lancer]").click(function () {
            page.getArmee().lancerFlood()
        })
    };
    this.optimizer = function () {
        boite = "<fieldset><legend><span class='titre'>Optimiser vos Floods</span></legend><center><table id='tableOpti'><tr><td>TDC estimé à l'arrivée</td><td>:</td><td><input id='tdc_depart' class='my_input' type='text' value='" + formatNumber(parseInt($("#quantite_tdc").text())) + "' /></td></tr><tr><td>TDC estimé de la cible à l'arrivée</td><td>:</td><td><input id='tdc_cible' class='my_input' type='text' value='" + formatNumber(joueur2.getTerrain()) + "' /></td></tr><tr><td>Lancer le surplus d'armée</td><td>:</td><td><input type='radio' name='surplus' value='oui' id='oui'/><label for='oui'>oui</label><input type='radio' name='surplus' value='non' id='non' checked/><label for='non'>non</label></td></tr><tr class='centre'><td colspan=3><span class='retour'>Retour le " + b.getDate() + " " + e[b.getMonth()] + " à " + formatDateTime(b.getHours()) + "h" + formatDateTime(b.getMinutes()) + "</span></td></tr></table><input name='simuler' type='button' value='Simuler'/><input name='optimiser' type='button' value='Optimiser' /><p class='gras'>Info : Veuillez rester sur cette page le temps du lancement ! (1 secondes entre floods).</p><p class='gras'>Info : Le surplus de l'armée est envoyé au premier ou deuxième flood selon le nombre de floods.</p></center></fieldset>";
        $("#formulaireChoixArmee").append(boite)
    };
    this.optimizerEvent = function () {
        $("#tdc_depart").keyup(function () {
            $(this).val(formatNumber(removeSpace($(this).val())))
        });
        $("#tdc_cible").keyup(function () {
            $(this).val(formatNumber(removeSpace($(this).val())))
        });
        $("input[name=simuler]").click(function () {
            page.getArmee().simulerFlood()
        });
        $("input[name=optimiser]").click(function () {
            page.getArmee().optimiserFlood()
        })
    }
};

function PageCommerce() {
    var f = "/commerce.php";
    var e = new PageConstruction();
    var c = new PageLaboratoire();
    var d = new PageProfil();
    var b = new Utilitaire();
    var a = 0;
    var g = 0;
    this.getMaxMateriaux = function () {
        return a
    };
    this.setMaxMateriaux = function (h) {
        a = h
    };
    this.getMaxNourriture = function () {
        return g
    };
    this.setMaxNourriture = function (h) {
        g = h
    };
    this.__init = function () {
        e.__initAjax();
        etable = e.getLevel()[11];
        terrain = parseInt($("#quantite_tdc").text());
        ouvriere = parseInt($("#nb_ouvrieres").text());
        materiaux = parseInt($("#nb_materiaux").text());
        nourriture = parseInt($("#nb_nourriture").text());
        convoi = Math.ceil((ouvriere - terrain) * (10 + (etable / 2)));
        g = convoi > nourriture ? nourriture : convoi;
        a = convoi > materiaux ? materiaux : convoi
    };
    this.__construct = function () {
        this.boxConvoy();
        this.boxConvoyEvent();
        if ($("#tag_alliance").text() == "AD" && location.host.split(".")[0] == "s1") {
            this.optionAD()
        }
    };
    this.boxConvoy = function () {
        contenu = "<span class='titre'>Organiser un convoi</span><table class='tab1'><tr><td><img width='18' height='18' title='Nourriture' src='http://img3.fourmizzz.fr/images/icone/icone_pomme.gif' alt='nourriture'/><strong><span id='maxNourriture' class='cursor'> (max : " + formatNumber(g) + ")</span></strong></td><td>:</td><td><input id='nbNourriture' type='tel' size='15' onkeyup='javascript:calculOuvriere();' name='nbNourriture' value='0'/></td><td>, necessite :</td><td><input id='nbOuvriereNourriture' type='tel' size='15' onkeyup='javascript:calculRessource();' name='nbOuvriereNourriture' value='0'/></td><td> ouvrières.</td></tr><tr><td><img width='18' height='18' title='Materiaux' src='http://img3.fourmizzz.fr/images/icone/icone_bois.gif' alt='materiaux'/><strong><span id='maxMateriaux' class='cursor'> (max : " + formatNumber(a) + ")</span></strong></td><td>:</td><td><input id='nbMateriaux' type='tel' size='15' onkeyup='javascript:calculOuvriere();' name='nbMateriaux' value='0'/></td><td>, necessite :</td><td><input id='nbOuvriereMateriaux' type='tel' size='15' onkeyup='javascript:calculRessource();' name='nbOuvriereMateriaux' value='0'/></td><td> ouvrières.</td></tr><tr><td colspan=6>X : <input id='x' type='tel' size='4' name='x' value='" + $("#x").val() + "'/>, Y : <input id='y' type='tel' size='4' name='y' value='" + $("#y").val() + "'/>, Pseudo : <input id='login' class='my_input' type='text' name='login'/>, Ami : <select onchange='completeDestination(this.options[this.selectedIndex].value);' name='id'>" + $("select[name='id']").html() + "</select></td></tr><tr class='centre'><td colspan=6>Info : Niveau d'étable <strong>" + etable + "</strong>, 1 ouvrière peut transporter : <strong>" + (10 + (etable / 2)) + "</strong> ressources.</td></tr><tr class='centre'><td colspan=6><input type='button' value='Lancer le convoi' name='convoi'/><input type='button' value='Effacer' name='reset'/></td></tr></table>";
        $(".boite_membre").html(contenu)
    };
    this.boxConvoyEvent = function () {
        $("#maxNourriture").click(function () {
            quantite = $(this).text().replace(/\D+/g, "");
            if (quantite == removeSpace($("#nbNourriture").val())) {
                $("#nbNourriture").val(0);
                $("#nbOuvriereNourriture").val(0)
            } else {
                $("#nbNourriture").val(formatNumber(quantite));
                $("#nbOuvriereNourriture").val(formatNumber(Math.ceil(quantite / (10 + (etable / 2)))))
            }
        });
        $("#maxMateriaux").click(function () {
            quantite = $(this).text().replace(/\D+/g, "");
            if (quantite == removeSpace($("#nbMateriaux").val())) {
                $("#nbMateriaux").val(0);
                $("#nbOuvriereMateriaux").val(0)
            } else {
                $("#nbMateriaux").val(formatNumber(quantite));
                $("#nbOuvriereMateriaux").val(formatNumber(Math.ceil(quantite / (10 + (etable / 2)))))
            }
        });
        $("input[name=convoi]").click(function () {
            if ($("#idCommand").length && $("#idCommand").val() != "") {
                idCommande = $("#idCommand").val();
                quantite = 0;
                for (var h = 0; h < b.getCommandeMat().length; h++) {
                    if (b.getCommandeMat()[h]["id"] == idCommande) {
                        quantite = parseInt(removeSpace($("#nbMateriaux").val()));
                        break
                    }
                }
                for (var h = 0; h < b.getCommandeNou().length; h++) {
                    if (b.getCommandeNou()[h]["id"] == idCommande) {
                        quantite = parseInt(removeSpace($("#nbNourriture").val()));
                        break
                    }
                }
                if (quantite > 0) {
                    b.sendConvoi(idCommande, quantite)
                }
            } else {
                securiteKey = String($("form center input:hidden").attr("name"));
                securiteValue = $("form center input:hidden").attr("value");
                dataSend = {};
                dataSend[securiteKey] = securiteValue;
                dataSend.convoi = "1";
                dataSend.x = $("#x").val();
                dataSend.y = $("#y").val();
                dataSend.nbMateriaux = removeSpace($("#nbMateriaux").val());
                dataSend.nbNourriture = removeSpace($("#nbNourriture").val());
                $.ajax({
                    url: "/commerce.php",
                    type: "post",
                    data: dataSend,
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
    this.fillForm = function (m, h, l, k, i, j) {
        if (i == "M") {
            if (j < a) {
                $("#nbMateriaux").val(formatNumber(j))
            }
        }
        if (i == "N") {
            if (j < g) {
                $("#nbNourriture").val(formatNumber(j))
            }
        }
        $("#x").val(h);
        $("#y").val(l);
        $("#idCommand").val(m);
        $("#login").val(k)
    };
    this.optionAD = function () {
        c.__initAjax();
        d.__initAjax($("#pseudo").text());
        linkBottom();
        linkTop();
        $("input[name='convoi']").parent().parent().before("<tr class='centre'><td colspan=6><strong>Info : Envoie automatique vers l'utilitaire, uniquement si vous avez cliqué sur livrer auparavant !</strong></td></tr>");
        $(".boite_membre:first").append("<input type='hidden' id='idCommand' name='command'/>");
        this.formDemand();
        this.formDemandEvent();
        this.showCommand()
    };
    this.formDemand = function () {
        evolution = extractUrlParams()["evolution"] ? extractUrlParams()["evolution"] : 0;
        evo = ["Champignonnière", "Entrepôt de Nourriture", "Entrepôt de Matériaux", "Couveuse", "Solarium", "Laboratoire", "Salle d'analyse", "Salle de combat", "Caserne", "Dôme", "Loge Impériale", "Etable à pucerons", "Etable à cochenilles", "Technique de ponte", "Bouclier Thoracique", "Armes", "Architecture", "Communication avec les animaux", "Vitesse de chasse", "Vitesse d'attaque", "Génétique", "Acide", "Poison"];
        evoU = ["champi", "ent_nourriture", "ent_materiaux", "couveuse", "solarium", "laboratoire", "salle_analyse", "salle_combat", "caserne", "dome", "loge", "etable_pucerons", "etable_cochenille", "technique_ponte", "bouclier", "armes", "architecture", "com_annimaux", "vitesse_chasse", "vitesse_attaque", "genetique", "acide", "poison"];
        selectEvo = "<select id='evoDemande' class='my_input' title='Evolution souhaité'>";
        for (var h = 0; h < 23; h++) {
            if (h == evoU.indexOf(evolution)) {
                selectEvo += "<option value='" + h + "' selected>" + evo[h] + "</option>"
            } else {
                selectEvo += "<option value='" + h + "'>" + evo[h] + "</option>"
            }
        }
        selectEvo += "</select>";
        myForm = "<div class='boite_membre'><span class='titre'>Demander des ressources</span><table id='tableau_demande' class='tab2'><tr><td>Évolution*</td><td>:</td><td class='left'>" + selectEvo + "</td></tr><tr><td>Pour le*</td><td>:</td><td class='left'><input id='dateDemande' class='my_input' name='date' type='text' /> (format : aaaa-mm-jj)</td></tr><tr><td>À partir du</td><td>:</td><td class='left'><input id='dateDebut' class='my_input' name='dateD' type='text' /> (format : aaaa-mm-jj)</td></tr><tr class='centre'><td colspan=3><input type='button' id='envoyer' value='Envoyer'/></td></tr></table></div>";
        $(".boite_membre:last").after(myForm);
        b.__initDataPlayer()
    };
    this.formDemandEvent = function () {
        $("#dateDemande").datepicker({
            dateFormat: "yy-mm-dd",
            minDate: 0,
        });
        $("#dateDebut").datepicker({
            dateFormat: "yy-mm-dd",
            minDate: 0,
        });
        $("#envoyer").click(function () {
            tabEvo = ["champi", "ent_nourriture", "ent_materiaux", "couveuse", "solarium", "laboratoire", "salle_analyse", "salle_combat", "caserne", "dome", "loge", "etable_pucerons", "etable_cochenille", "technique_ponte", "bouclier", "armes", "architecture", "com_annimaux", "vitesse_chasse", "vitesse_attaque", "genetique", "acide", "poison"];
            evolution = tabEvo[$("#evoDemande").val()];
            date_prevu = $("#dateDemande").val();
            date_debut = $("#dateDebut").val();
            regexp = new RegExp("^[0-9]{4}-{1}[0-9]{2}-{1}[0-9]{2}$", "g");
            if (evolution && regexp.test(date_prevu)) {
                b.sendDemande(evolution, date_prevu, date_debut)
            } else {
                alert("Erreur de saisie !")
            }
        })
    };
    this.showCommand = function () {
        contenu = "<div class='boite_membre'><span class='titre'>Commandes en cours</span><table id='tabConvois' class='tab1 centre' cellspacing=0></table></div>";
        $(".boite_membre:first").before(contenu);
        b.__initCommand(d.getX(), d.getY(), c.getLevel()[6])
    }
};

function PageConstruction() {
    var a = "/construction.php";
    var b = new Array();
    this.getLevel = function () {
        return b
    };
    this.setLevel = function (c) {
        b = c
    };
    this.__init = function () {
        $(".niveau_amelioration").each(function (c) {
            b[c] = parseInt($(this).text().substring(6))
        })
    };
    this.__initAjax = function () {
        $.ajax({
            url: a,
            async: false,
            success: function (c) {
                $(c).find(".niveau_amelioration").each(function (d) {
                    b[d] = parseInt($(this).text().substring(6))
                })
            }
        })
    };
    this.__construct = function () {
        ouvriereDispo = parseInt($("#nb_ouvrieres").text()) - parseInt($("#quantite_tdc").text());
        sacrifice = (21 + b[11]) * (40 * Math.pow(2, (b[11] + 3)));
        if (ouvriereDispo > sacrifice) {
            $(".desciption_amelioration:eq(11) table").append("<tr><td>Utile si:</td><td class='green'><img width='18' height='18' src='http://img3.fourmizzz.fr/images/icone/icone_ouvriere.gif' alt='ouvrieres'/> > " + formatNumber(sacrifice) + "</td></tr>")
        } else {
            $(".desciption_amelioration:eq(11) table").append("<tr><td>Utile si:</td><td class='red'><img width='18' height='18' src='http://img3.fourmizzz.fr/images/icone/icone_ouvriere.gif' alt='ouvrieres'/> > " + formatNumber(sacrifice) + "</td></tr>")
        } if (!(comptePlus)) {
            this.comptePlus()
        }
        if ($("#tag_alliance").text() == "AD" && location.host.split(".")[0] == "s1") {
            this.optionAD();
            this.optionEventAD()
        }
    };
    this.comptePlus = function () {
        info = {
            evolution: "",
            time: 0
        };
        date = new Date();
        str = $("#centre").find("strong").text();
        info.evolution = str.substring(2, str.indexOf("se termine") - 1);
        if (info.evolution && !($.jCookies({
            get: "Construction"
        }))) {
            info.time = parseInt(str.split(",")[0].split("(")[1]);
            $.jCookies({
                name: "Construction",
                value: {
                    evolution: info.evolution,
                    time: ((info.time * 1000) + date.getTime())
                },
                seconds: info.time,
            });
            box.setConstruction(info);
            box.updateConstruction()
        }
        if ($("a:contains('Annuler')").length) {
            $("a:contains('Annuler')").click(function () {
                $.jCookies({
                    erase: "Construction"
                })
            })
        }
    };
    this.optionAD = function () {
        $(".cout_amelioration table").each(function (c) {
            $(this).append("<tr><td></td><td><input type='button' name='commander" + c + "' value='Commander'/></td></tr>")
        })
    };
    this.optionEventAD = function () {
        $("input[name^=commander]").click(function () {
            evol = ["champi", "ent_nourriture", "ent_materiaux", "couveuse", "solarium", "laboratoire", "salle_analyse", "salle_combat", "caserne", "dome", "loge", "etable_pucerons", "etable_cochenille"];
            document.location = "/commerce.php?evolution=" + evol[$(this).attr("name").slice(9)]
        })
    }
};

function PageEnnemie() {
    var d = "/ennemie.php";
    var b = new Utilitaire();
    var a = new PageLaboratoire();
    var c = new PageProfil();
    this.__construct = function () {
        if ($("#tag_alliance").text() == "AD" && location.host.split(".")[0] == "s1") {
            this.optionAD()
        }
    };
    this.optionAD = function () {
        a.__initAjax();
        c.__initAjax($("#pseudo").text());
        contenu = "<table id='tabAttaquer' class='simulateur centre tab1' cellspacing=0><tr><td colspan=10 style='padding-bottom:10px'><h2>Joueurs Backlistès</h2></td></tr><table><br/>";
        $(".simulateur:first").before(contenu)
    }
};

function PageLaboratoire() {
    var a = "/laboratoire.php";
    var b = new Array();
    this.getLevel = function () {
        return b
    };
    this.setLevel = function (c) {
        b = c
    };
    this.__init = function () {
        $(".niveau_amelioration").each(function (c) {
            b[c] = parseInt($(this).text().substring(6))
        })
    };
    this.__initAjax = function () {
        $.ajax({
            url: a,
            async: false,
            success: function (c) {
                $(c).find(".niveau_amelioration").each(function (d) {
                    b[d] = parseInt($(this).text().substring(6))
                })
            }
        })
    };
    this.__construct = function () {
        if (!(comptePlus)) {
            this.comptePlus()
        }
        if ($("#tag_alliance").text() == "AD" && location.host.split(".")[0] == "s1") {
            this.optionAD();
            this.optionEventAD()
        }
    };
    this.comptePlus = function () {
        info = {
            evolution: "",
            time: 0
        };
        date = new Date();
        str = $("#centre").find("strong").text();
        info.evolution = str.substring(2, str.indexOf("termin") - 1);
        if (info.evolution && !($.jCookies({
            get: "Laboratoire"
        }))) {
            info.time = parseInt(str.split(",")[0].split("(")[1]);
            $.jCookies({
                name: "Laboratoire",
                value: {
                    evolution: info.evolution,
                    time: ((info.time * 1000) + date.getTime())
                },
                seconds: info.time,
            });
            box.setRecherche(info);
            box.updateRecherche()
        }
        if ($("a:contains('Annuler')").length) {
            $("a:contains('Annuler')").click(function () {
                $.jCookies({
                    erase: "Laboratoire"
                })
            })
        }
    };
    this.optionAD = function () {
        $(".cout_amelioration table").each(function (c) {
            $(this).append("<tr><td></td><td><input type='button' value='Commander' name='commander" + c + "' /></td></tr>")
        })
    };
    this.optionEventAD = function () {
        $("input[name^=commander]").click(function () {
            evol = ["technique_ponte", "bouclier", "armes", "architecture", "com_annimaux", "vitesse_chasse", "vitesse_attaque", "genetique", "acide", "poison"];
            document.location = "/commerce.php?evolution=" + evol[$(this).attr("name").slice(9)]
        })
    }
};

function PageProfil() {
    var c = "/Membre.php?Pseudo=";
    var b = new PageLaboratoire();
    var a = 0;
    var f = 0;
    var e = 0;
    var d = 0;
    this.__init = function () {
        regexp = new RegExp("x=(\\d*) et y=(\\d*)");
        line = $(".boite_membre").find("a[href^='carte2.php?']").text();
        a = parseInt(line.replace(regexp, "$1"));
        f = parseInt(line.replace(regexp, "$2"))
    };
    this.__initAjax = function (g) {
        $.ajax({
            url: c + g,
            async: false,
            success: function (h) {
                regexp = new RegExp("x=(\\d*) et y=(\\d*)");
                e = $(h).find(".boite_membre:eq(1) td:first a").attr("href").replace("commerce.php?ID=", "");
                d = removeSpace($(h).find(".tableau_score tr:eq(3) td:eq(1)").text());
                line = $(h).find("a[href^='carte2.php?']").text();
                a = parseInt(line.replace(regexp, "$1"));
                f = parseInt(line.replace(regexp, "$2"))
            }
        })
    };
    this.getID = function () {
        return e
    };
    this.setID = function (g) {
        e = g
    };
    this.getLogin = function () {
        return login
    };
    this.setLogin = function (g) {
        login = g
    };
    this.getTerrain = function () {
        return d
    };
    this.setTerrain = function (g) {
        d = g
    };
    this.getX = function () {
        return a
    };
    this.setX = function (g) {
        a = g
    };
    this.getY = function () {
        return f
    };
    this.setY = function (g) {
        f = g
    };
    this.getDistance = function (h, g, i) {
        return Math.ceil(Math.pow(0.9, i) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(a - h, 2) + Math.pow(f - g, 2)) / 350))))
    };
    this.getNextDistance = function (h, g, i) {
        return Math.ceil(Math.pow(0.9, (i + 1)) * 637200 * (1 - Math.exp(-(Math.sqrt(Math.pow(a - h, 2) + Math.pow(f - g, 2)) / 350))))
    };
    this.__construct = function () {
        pseudoProfil = extractUrlParams()["Pseudo"];
        if ($("#pseudo").text() != pseudoProfil) {
            b.__initAjax();
            date = new Date();
            mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
            if (!comptePlus) {
                this.comptePlus()
            }
            date.setSeconds(date.getSeconds() + joueur.getNextDistance(a, f, b.getLevel()[6]));
            $("td:contains('Temps de trajet')").parent().attr("title", "Retour le " + date.getDate() + " " + mois[date.getMonth()] + " à " + date.getHours() + "h" + date.getMinutes() + "\nVA suivante : " + formatTime(joueur.getNextDistance(a, f, b.getLevel()[6])))
        }
        if (pseudoProfil == "Hraesvelg" && location.host.split(".")[0] == "s1") {
            $("#centre h2").text("Hraesvelg - Programmeur d'Outiiil")
        }
    };
    this.comptePlus = function () {
        ligne = "<tr><td style='text-align:right'>Temps de trajet :</td><td>" + formatTime(joueur.getDistance(a, f, b.getLevel()[6])) + "</td></tr>";
        $(".boite_membre:first div:first table").append(ligne)
    }
};

function PageReine() {
    var c = "/Reine.php";
    var b = new PageConstruction();
    var a = new PageLaboratoire();
    this.__init = function () {
        b.__initAjax();
        a.__initAjax()
    };
    this.__construct = function () {
        cout = [5, 16, 20, 26, 30, 36, 70, 100, 30, 34, 44, 100, 150, 80, 90];
        time = [60, 300, 450, 570, 740, 1000, 1410, -1, 1440, 1520, 1450, 1860, -1, 2740, 2740];
        nourriture = parseInt($("#nb_nourriture").text());
        $(".cout_amelioration").each(function (d) {
            if ($(this).find("input").length > 3) {
                sommePonte = b.getLevel()[3] + b.getLevel()[4] + a.getLevel()[0];
                if (comptePlus) {
                    if ($("#boiteComptePlus").text().indexOf("Couveuse") > -1) {
                        sommePonte -= 1
                    }
                    if ($("#boiteComptePlus").text().indexOf("Solarium") > -1) {
                        sommePonte -= 1
                    }
                    if ($("#boiteComptePlus").text().indexOf("Technique") > -1) {
                        sommePonte -= 1
                    }
                }
                boite = $(this).prev();
                max = Math.floor(nourriture / cout[d]);
                if (d == 0) {
                    table = "<br/><br/><table>";
                    table += "<tr><td>Max:</td><td class='cursor'>" + formatNumber(max) + "</td></tr>";
                    table += "<tr><td>Temps:</td><td id='time_total_" + d + "'>0 sec</td></tr>";
                    table += "</table>";
                    boite.append(table)
                } else {
                    ligne = "<tr><td>Max:</td><td class='cursor'>" + formatNumber(max) + "</td></tr>";
                    boite.find("table").append(ligne);
                    ligne = "<tr><td>Temps:</td><td id='time_total_" + d + "'>0 sec</td></tr>";
                    boite.find("table").append(ligne)
                }
                $(this).find("input").keyup(function () {
                    value = removeSpace($(this).val());
                    $("#time_total_" + d).text(formatTime(Math.ceil(value * time[d] * Math.pow(0.9, sommePonte))));
                    $(this).val(formatNumber(value))
                });
                boite.find(".cursor").click(function () {
                    input = $(".cout_amelioration:eq(" + d + ")").find("input");
                    if (removeSpace(input.val()) == Math.floor(nourriture / cout[d])) {
                        input.val(0)
                    } else {
                        input.val(formatNumber(Math.floor(nourriture / cout[d])))
                    }
                    $("#time_total_" + d).text(formatTime(Math.ceil(removeSpace(input.val()) * time[d] * Math.pow(0.9, sommePonte))))
                })
            }
        });
        $("select[name='destination']").each(function () {
            $(this).val("3")
        });
        if (!(comptePlus)) {
            this.comptePlus()
        }
    };
    this.comptePlus = function () {
        armes = a.getLevel()[2];
        bouclier = a.getLevel()[1];
        base_vie = [8, 10, 13, 16, 20, 30, 40, 10, 12, 27, 35, 50, 50, 55];
        base_att = [3, 5, 7, 10, 15, 1, 1, 30, 35, 24, 55, 80, 50, 55];
        base_def = [2, 4, 6, 9, 14, 25, 35, 15, 18, 23, 1, 1, 50, 55];
        $(".vie").each(function (d) {
            $(this).text(base_vie[d] + " (+" + (base_vie[d] / 10 * bouclier).toFixed(1) + ")")
        });
        $(".icone_degat_attaque").each(function (d) {
            $(this).next().text(base_att[d] + " (+" + (base_att[d] / 10 * armes).toFixed(1) + ")")
        });
        $(".degat_defense").each(function (d) {
            $(this).text(base_def[d] + " (+" + (base_def[d] / 10 * armes).toFixed(1) + ")")
        });
        info = {
            unit: "",
            time: 0
        };
        date = new Date();
        info.unit = $("#unites_restantes_premiere_ponte").text().replace(/[0-9]+/g, "").trim();
        if (info.unit && !($.jCookies({
            get: "Ponte"
        }))) {
            str = $("#centre").find("script:contains(unites_restantes_premiere_ponte)").html();
            info.time = parseInt(str.split(",")[0].split("(")[1]);
            $.jCookies({
                name: "Ponte",
                value: {
                    unit: info.unit,
                    time: ((info.time * 1000) + date.getTime())
                },
                seconds: info.time,
            });
            box.setPonte(info);
            box.updatePonte()
        }
        if ($("a:contains('Annuler la ponte')").length) {
            $("a:contains('Annuler la ponte')").click(function () {
                $.jCookies({
                    erase: "Ponte"
                })
            })
        }
    }
};

function PageRessource() {
    var d = "/Ressources.php";
    var c = new PageConstruction();
    var b = new PageLaboratoire();
    var a = new Armee();
    this.getArmee = function () {
        return a
    };
    this.__init = function () {
        c.__initAjax();
        b.__initAjax();
        a.__initAjax();
        a.__init(b.getLevel()[1], b.getLevel()[2], b.getLevel()[6], b.getLevel()[5], 0)
    };
    this.__construct = function () {
        this.calculator();
        this.calculatorEvent();
        this.launcher();
        this.launcherEvent();
        if (!(comptePlus)) {
            this.comptePlus()
        }
    };
    this.calculator = function () {
        selectEtable = "<select id='etable_colo' class='my_input' disabled='true'>";
        for (var e = 0; e <= 50; e++) {
            selectEtable += "<option>" + e + "</option>"
        }
        selectEtable += "</select>";
        conteneur = "<table class='boite_amelioration my_boite' cellspacing='15'><tr><td colspan=4><span class='titre'>Terrain Exploitable</span></td></tr><tr><td>Nombre de convoi par jour</td><td>:</td><td class='left'><input id='nbr_convoi' class='my_input' type='text' value='0' /></td><td class='left'>Ex : 0, 0.5, 1.3, 4.658...</td></tr><tr><td>Colonisé</td><td>:</td><td class='left'><input type='radio' name='colonise' value='oui' id='oui' /><label for='oui'>oui</label><input type='radio' name='colonise' value='non' id='non' checked/><label for='non'>non</label></td><td></td></tr><tr><td>Etable colonisateur</td><td>:</td><td class='left'>" + selectEtable + "</td><td></td></tr><tr><td>Terrain exploitable</td><td>:</td><td id='tdc_exploitable' class='left'><strong>" + formatNumber(this.computeField()) + " cm²</strong></td><td></td></tr><tr><td colspan=4><strong>Info : sans colonie, sans part personnelle et avec toute vos ouvrières présentes.</strong></td><td></td></tr></table><br/>";
        $("#boite_tdc").before(conteneur)
    };
    this.calculatorEvent = function () {
        $("#nbr_convoi").keyup(function () {
            $("#tdc_exploitable").html("<strong>" + formatNumber(page.computeField()) + " cm²</strong>")
        });
        $("#etable_colo").change(function () {
            $("#tdc_exploitable").html("<strong>" + formatNumber(page.computeField()) + " cm²</strong>")
        });
        $("#oui").click(function () {
            $("#etable_colo").removeAttr("disabled");
            $("#tdc_exploitable").html("<strong>" + formatNumber(page.computeField()) + " cm²</strong>")
        });
        $("#non").click(function () {
            $("#etable_colo").attr("disabled", "true");
            $("#tdc_exploitable").html("<strong>" + formatNumber(page.computeField()) + " cm²</strong>")
        })
    };
    this.computeField = function () {
        nbConvoi = 0;
        ouvriere = parseInt($("#nb_ouvrieres").text());
        etable = c.getLevel()[11];
        etableColo = parseInt($("#etable_colo").val());
        if ($("#nbr_convoi").length && $("#nbr_convoi").val() != "") {
            nbConvoi = parseFloat($("#nbr_convoi").val())
        }
        if (nbConvoi == 0) {
            return ouvriere
        }
        if ($("input[name='colonise']:checked").val() == "oui") {
            return Math.round((ouvriere * nbConvoi * (10 + (etable / 2))) / ((48 + (nbConvoi * (10 + (etable / 2)))) - (48 * ((20 + etableColo) / 100))))
        } else {
            return Math.round((ouvriere * nbConvoi * (10 + (etable / 2))) / (48 + (nbConvoi * (10 + (etable / 2)))))
        }
    };
    this.launcher = function () {
        terrain = parseInt($("#quantite_tdc").text());
        jsn = a.getJSN();
        selectDiff = "<select id='diff_chasse' class='my_input' title='Ratio (Attaque de votre Armée) / (Difficulté de chasse) : détermine les pertes et taux de réplique de votre chasse...'>";
        for (var e = 0; e < 13; e++) {
            if (a.getHuntRatio()[e] < 5) {
                selectDiff += "<option value='" + e + "' class='black'>"
            } else {
                if (a.getHuntRatio()[e] >= 5 && a.getHuntRatio()[e] < 6.5) {
                    selectDiff += "<option value='" + e + "' class='red'>"
                } else {
                    if (a.getHuntRatio()[e] >= 6.5 && a.getHuntRatio()[e] < 8) {
                        selectDiff += "<option value='" + e + "' class='orange'>"
                    } else {
                        if (e == 13 - 4) {
                            selectDiff += "<option value='" + e + "' class='green' selected>"
                        } else {
                            selectDiff += "<option value='" + e + "' class='green'>"
                        }
                    }
                }
            }
            selectDiff += a.getHuntRatio()[e].toFixed(2) + " → Rep10% : " + (a.getHuntReply()[e] >= 0.2 ? ((100 * a.getHuntReply()[e]).toFixed(2) + "%") : "< 20%");
            selectDiff += "</option>"
        }
        selectNbrChasse = "<select id='nbr_chasse' class='my_input' disabled='true' title='Nombre de chasse compris entre 0 et votre vitesse de chasse + 1'>";
        for (var e = 1; e <= b.getLevel()[5] + 1; e++) {
            selectNbrChasse += "<option>" + e + "</option>"
        }
        selectNbrChasse += "</select>";
        selectIntervalleChasse = "<select id='intervalle_chasse' class='my_input' title='Intervalle entre les chasses'><option value='2' >2 secondes</option><option value='10' selected>10 secondes</option>";
        for (var e = 20; e <= 90; e += 10) {
            selectIntervalleChasse += "<option value='" + e + "'>" + e + " secondes</option>"
        }
        selectIntervalleChasse += "</select>";
        conteneur = "<br/><table class='boite_amelioration my_boite' cellspacing='15'><tr><td colspan=4><span class='titre'>Agrandir Votre Terrain</span></td></tr>";
        if (terrain >= 1000000) {
            conteneur += "<tr><td>TDC estimé à l'arrivée</td><td>:</td><td class='left'><input id='tdc_depart' class='my_input' type='text' value='" + formatNumber(1000000) + "' /></td></tr>"
        } else {
            conteneur += "<tr><td>TDC estimé à l'arrivée</td><td>:</td><td class='left'><input id='tdc_depart' class='my_input' type='text' value='" + formatNumber(terrain) + "' /></td></tr>"
        }
        conteneur += "<tr><td>Nombre de chasse</td><td>:</td><td class='left'>" + selectNbrChasse + "</td><td><input id='autoNumberHunt' type='checkbox' checked='checked' name='optionAuto' value='Auto'>Auto</input></td></tr><tr><td>TDC par chasse</td><td>:</td><td class='left'><input id='tdc_chasse' class='my_input' type='text' disabled='true'/></td><td><input id='autoFieldHunt' type='checkbox' checked='checked' name='optionAuto' value='Auto'>Auto</input></td></tr><tr><td>Total</td><td>:</td><td id='valueTotal' class='left'>0 cm²</td></tr><tr><td>Temps requis</td><td>:</td><td colspan=2 id='dureeTotal' class='left'>0 sec</td></tr><tr><td>Ratio ~ Référence</td><td>:</td><td id='ratio_chasse' class='left'>8.33 ~ 8.33</td></tr><tr><td>Difficulté</td><td>:</td><td class='left'>" + selectDiff + "</td></tr><tr><td>Perte estimé JSN</td><td>:</td><td colspan=2 id='perteJSN' class='left'></td></tr><tr><td>Garder des JSN</td><td>:</td><td class='left'><input id='keepJSN' class='my_input' type='text' name='keepJSN' value='0' /></td><td>max : " + formatNumber(jsn) + "</td></tr><tr><td>Intervalle entre les chasses</td><td>:</td><td class='left'>" + selectIntervalleChasse + "</td></tr><tr><td colspan=4><input type='button' id='simulate' value='Simuler'/><input type='button' id='envoyer' value='Envoyer'/></td></tr><tr><td colspan=4><span class='gras'>Info : Veuillez rester sur cette page le temps du lancement !</span></td></tr><tr><td colspan=4><span class='gras'>Info : Basé sur le simulateur de <span class='violet'>Calystene</span>.</span></td></tr></table>";
        $("#boite_tdc").after(conteneur);
        a.computeData()
    };
    this.launcherEvent = function () {
        $("#tdc_depart").keyup(function () {
            $(this).val(formatNumber(removeSpace($(this).val())));
            a.computeData()
        });
        $("#nbr_chasse").click(function () {
            a.computeData()
        });
        $("#autoNumberHunt").click(function () {
            if (!$("#autoNumberHunt").is(":checked")) {
                $("#nbr_chasse").removeAttr("disabled")
            } else {
                $("#nbr_chasse").attr("disabled", "true")
            }
            a.computeData()
        });
        $("#tdc_chasse").keyup(function () {
            $(this).val(formatNumber(removeSpace($(this).val())));
            if ($(this).val() == "") {
                $(this).val(0)
            }
            a.computeData()
        });
        $("#autoFieldHunt").click(function () {
            if (!$("#autoFieldHunt").is(":checked")) {
                $("#tdc_chasse").removeAttr("disabled")
            } else {
                $("#tdc_chasse").attr("disabled", "true")
            }
            a.computeData()
        });
        $("#keepJSN").keyup(function () {
            $(this).val(formatNumber(removeSpace($(this).val())));
            a.retireJSN(parseInt(removeSpace($(this).val())));
            a.computeData()
        });
        $("#diff_chasse").change(function () {
            a.computeData()
        });
        $("#simulate").click(function () {
            a.simulerHunt()
        });
        $("#envoyer").click(function () {
            a.lancerHunt()
        })
    };
    this.comptePlus = function () {
        $("#RecolteNourriture").after("<a title='Affecter un maximum d’ouvrière à la nourriture' class='button_max' onclick='javascript:maxNourriture();' href='#max'><img width='23' height='23' src='http://img2.fourmizzz.fr/images/bouton/fleche_haut.gif'/></a>");
        $("#RecolteMateriaux").after("<a title='Affecter un maximum d’ouvrière aux matériaux' class='button_max' onclick='javascript:maxMateriaux();' href='#max'><img width='23' height='23' src='http://img2.fourmizzz.fr/images/bouton/fleche_haut.gif'/></a>")
    }
};
