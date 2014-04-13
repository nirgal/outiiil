// ==UserScript==
// @author         Hraesvelg
// @description    Extension pour www.fourmizzz.fr
// @match          http://*.fourmizzz.fr/*
// @match          http://*.antzzz.org/*
// @name           Outiiil
// @namespace      http://www.outiiil.fr/
// @version        1.2+nirgal6
// @updateURL      https://github.com/nirgal/outiiil/raw/master/outiiil.user.js
// ==/UserScript==

/*
    outiiil - A greasemonkey extension for antzzz game
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

var GM_Style = document.createElement('link');
GM_Style.rel = 'stylesheet';
GM_Style.type = 'text/css';
GM_Style.href = 'https://ad.nirgal.com/outiiil.css';

var GM_Loader = document.createElement('script');
GM_Loader.src = 'https://github.com/nirgal/outiiil/raw/master/outiiil.js';
GM_Loader.type = 'text/javascript';
GM_Loader.charset = 'utf-8';
document.getElementsByTagName('head')[0].appendChild(GM_Loader);
