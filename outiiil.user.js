// ==UserScript==
// @author         Hraesvelg
// @description    Extension pour www.fourmizzz.fr
// @match          http://*.fourmizzz.fr/*
// @name           Outiiil
// @namespace      http://www.outiiil.fr/
// @version        1.2+nirgal1
// @updateURL      https://github.com/nirgal/outiiil/raw/master/outiiil.user.js
// ==/UserScript==

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

style = " \
/* --- Colors --- */ \
 \
.black { \
color:#000; \
} \
 \
.green { \
color:green; \
} \
 \
.red { \
color:#c5130f; \
} \
 \
.blue { \
color:blue; \
} \
 \
.orange { \
color:#9c4b00; \
} \
 \
.violet { \
color:#6D3A8A; \
} \
 \
.grey { \
color:grey; \
} \
 \
/* --- Aligments --- */ \
 \
.centre { \
text-align:center; \
} \
 \
.left { \
text-align:left; \
} \
 \
.right { \
text-align:right; \
} \
 \
/* --- Cursors --- */ \
 \
.cursor { \
cursor:pointer; \
} \
 \
/* --- Tables --- */ \
 \
.odd { \
background-color:#D7C384!important; \
} \
 \
.even { \
background-color:#C9AD63!important; \
} \
 \
/* --- XXX --- */ \
 \
.small { \
font-size:.9em; \
} \
 \
/* --- XXX --- */ \
 \
.button_max { \
position:relative; \
top:6px; \
} \
 \
/* --- XXX --- */ \
 \
.retour { \
font-size:.8em; \
font-style:italic; \
} \
 \
.total { \
border-top:1px solid #000; \
} \
 \
.my_input { \
width:200px; \
} \
 \
.my_boite { \
border:1px solid #665832; \
width:81%; \
} \
 \
.tab_commerce,.tab_attaque { \
margin:15px auto; \
} \
 \
.tab_commerce tr,.tab_attaque tr { \
height:30px; \
} \
 \
#boite_lance_hunt table { \
width:95%; \
margin:20px; \
} \
 \
/* --- Scroll --- */ \
 \
.scroll { \
color:green; \
cursor:pointer; \
display:block; \
text-align:right; \
text-transform:uppercase; \
font-weight:700; \
padding:5px 10px; \
} \
 \
#top { \
border-top:1px solid #000; \
border-right:5px solid #000; \
} \
 \
#bottom { \
border-bottom:1px solid #000; \
border-right:5px solid #000; \
} \
 \
/* --- Date picker --- */ \
 \
div.ui-datepicker { \
font-size:12px; \
} \
 \
/* --- Color pickers --- */ \
 \
.colorpicker { \
width:356px; \
height:176px; \
overflow:hidden; \
position:absolute; \
background:url(http://outiiil.fr/images/outiiil/colorpicker_background.png); \
font-family:Arial, Helvetica, sans-serif; \
display:none; \
z-index:3; \
} \
 \
.colorpicker_color { \
width:150px; \
height:150px; \
left:14px; \
top:13px; \
position:absolute; \
background:red; \
overflow:hidden; \
cursor:crosshair; \
} \
 \
.colorpicker_color div { \
position:absolute; \
top:0; \
left:0; \
width:150px; \
height:150px; \
background:url(http://outiiil.fr/images/outiiil/colorpicker_overlay.png); \
} \
 \
.colorpicker_color div div { \
position:absolute; \
top:0; \
left:0; \
width:11px; \
height:11px; \
overflow:hidden; \
background:url(http://outiiil.fr/images/outiiil/colorpicker_select.gif); \
margin:-5px 0 0 -5px; \
} \
 \
.colorpicker_hue { \
position:absolute; \
top:13px; \
left:171px; \
width:35px; \
height:150px; \
cursor:n-resize; \
} \
 \
.colorpicker_hue div { \
position:absolute; \
width:35px; \
height:9px; \
overflow:hidden; \
background:url(http://outiiil.fr/images/outiiil/colorpicker_indic.gif) left top; \
left:0; \
margin:-4px 0 0; \
} \
 \
.colorpicker_new_color { \
position:absolute; \
width:60px; \
height:30px; \
left:213px; \
top:13px; \
background:red; \
} \
 \
.colorpicker_current_color { \
position:absolute; \
width:60px; \
height:30px; \
left:283px; \
top:13px; \
background:red; \
} \
 \
.colorpicker input { \
background-color:transparent; \
border:1px solid transparent; \
position:absolute; \
font-size:10px; \
font-family:Arial, Helvetica, sans-serif; \
color:#898989; \
top:4px; \
right:11px; \
text-align:right; \
height:11px; \
margin:0; \
padding:0; \
} \
 \
.colorpicker_hex { \
position:absolute; \
width:72px; \
height:22px; \
background:url(http://outiiil.fr/images/outiiil/colorpicker_hex.png) top; \
left:212px; \
top:142px; \
} \
 \
.colorpicker_hex input { \
right:6px; \
} \
 \
.colorpicker_field { \
height:22px; \
width:62px; \
background-position:top; \
position:absolute; \
} \
 \
.colorpicker_field span { \
position:absolute; \
width:12px; \
height:22px; \
overflow:hidden; \
top:0; \
right:0; \
cursor:n-resize; \
} \
 \
.colorpicker_rgb_r { \
background-image:url(http://outiiil.fr/images/outiiil/colorpicker_rgb_r.png); \
top:52px; \
left:212px; \
} \
 \
.colorpicker_rgb_g { \
background-image:url(http://outiiil.fr/images/outiiil/colorpicker_rgb_g.png); \
top:82px; \
left:212px; \
} \
 \
.colorpicker_rgb_b { \
background-image:url(http://outiiil.fr/images/outiiil/colorpicker_rgb_b.png); \
top:112px; \
left:212px; \
} \
 \
.colorpicker_hsb_h { \
background-image:url(http://outiiil.fr/images/outiiil/colorpicker_hsb_h.png); \
top:52px; \
left:282px; \
} \
 \
.colorpicker_hsb_s { \
background-image:url(http://outiiil.fr/images/outiiil/colorpicker_hsb_s.png); \
top:82px; \
left:282px; \
} \
 \
.colorpicker_hsb_b { \
background-image:url(http://outiiil.fr/images/outiiil/colorpicker_hsb_b.png); \
top:112px; \
left:282px; \
} \
 \
.colorpicker_submit { \
position:absolute; \
width:22px; \
height:22px; \
background:url(http://outiiil.fr/images/outiiil/colorpicker_submit.png) top; \
left:322px; \
top:142px; \
overflow:hidden; \
} \
 \
.colorpicker_focus { \
background-position:center; \
} \
 \
.colorpicker_hex.colorpicker_focus,.colorpicker_submit.colorpicker_focus,.colorpicker_slider { \
background-position:bottom; \
} \
 \
/* --- Table sorter --- */ \
 \
th.headerSortUp { \
background-image:url(http://outiiil.fr/images/outiiil/asc.gif)!important; \
} \
 \
th.headerSortDown { \
background-image:url(http://outiiil.fr/images/outiiil/desc.gif)!important; \
} \
 \
th.header { \
background-image:url(http://outiiil.fr/images/outiiil/bg.gif); \
cursor:pointer; \
background-repeat:no-repeat; \
background-position:center right; \
padding-right:20px!important; \
} \
";

GM_addStyle(style);
//$("head").append('<link rel="stylesheet" type="text/css" href="http://userstyles.org/styles/80741.css" />');
//$("head").append('<script type="text/javascript" src="http://localhost/outiiil.js"></script>');

var GM_Loader = document.createElement('script');
GM_Loader.src = 'https://github.com/nirgal/outiiil/raw/master/outiiil.js';
GM_Loader.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(GM_Loader);


