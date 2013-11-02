/**
 * main.js
 * @description		Permet l'installation d'Outiiil dans Firefox avec la mise en place du code.
 * @auhtor			Hraesvelg
 * @version			1.0
 */

//Dépendance
var {Cc, Ci} = require("chrome");
var pageMod  = require("sdk/page-mod");
var data     = require("self").data;

var mediator = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator);

exports.main = function(options, callbacks) {
	// Accès à la barre de navigation
	var document = mediator.getMostRecentWindow('navigator:browser').document;
	var navBar   = document.getElementById('nav-bar');
	if(!navBar) return;
	
	// Si on installe, on ajoute l'icone
	if(options.loadReason === "install" || !document.getElementById("outiiil-toolbarbutton")){
		addToolbarButton(document, navBar);
	}
	
	// Si on active ou re-active Outiiil
	if(options.loadReason === "enable"){
		document.getElementById("outiiil-toolbarbutton").setAttribute('image', data.url('img/gear-enabled.png'));
		document.getElementById("outiiil-item-1").setAttribute('checked', 'true');
	}
	
	// Peu importe l'evenement ici on lance le script
	pageMod.PageMod({
		include: "*.fourmizzz.fr",
		contentScriptFile: [data.url("js/jQuery.js"), data.url("js/jQueryUI.js"), data.url("js/utils.js"), data.url("js/BBCodeChat.js"), data.url("js/outiiil.js")],
		contentStyleFile: [data.url("css/outiiil.css")]
	});
};
 
exports.onUnload = function(reason) {
	// Accès à la barre de navigation
	var document = mediator.getMostRecentWindow('navigator:browser').document;		
	var navBar   = document.getElementById('nav-bar');
	
	// Si on desinstalle, on supprime l'icone
	//if(reason === "uninstall"){
	//	navBar.removeChild(document.getElementById('outiiil-toolbarbutton'));
	//}
	
	// Si on desactive Outiiil
	if(reason === "disable"){
		document.getElementById("outiiil-toolbarbutton").setAttribute('image', data.url('img/gear-disabled.png'));
		//document.getElementById("outiiil-toolbarbutton").removeEventListener('click', dis());
		//document.getElementById("outiiil-toolbarbutton").addEventListener('click', function ena() {exports.main({loadReason : "disable"}, null)}, false);
		document.getElementById("outiiil-item-1").setAttribute('checked', 'false');
	}
};

function addToolbarButton(document, navBar){
	var btn = document.createElement('toolbarbutton');	
	btn.setAttribute('id', 'outiiil-toolbarbutton');
	btn.setAttribute('type', 'menu-button');
	btn.setAttribute('class', 'toolbarbutton-1');
	btn.setAttribute('image', data.url('img/gear-enabled.png'));
	btn.setAttribute('label', 'Outiiil');
	btn.setAttribute('tooltiptext', 'Outiiil');
	//btn.addEventListener('click', function() {exports.onUnload("disable")}, false);
	
	var menupopup = document.createElement('menupopup');
	
	var menuitem1 = document.createElement('menuitem');
	menuitem1.setAttribute('id', 'outiiil-item-1');
	menuitem1.setAttribute('label', 'Activé');
	menuitem1.setAttribute('accesskey', 'A');
	menuitem1.setAttribute('type', 'checkbox');
	menuitem1.setAttribute('checked', 'true');
	menuitem1.addEventListener('click', function() {}, false);
	
	var menuseparator = document.createElement('menuseparator');
	
	var menuitem2 = document.createElement('menuitem');
	menuitem2.setAttribute('id', 'outiiil-item-2');
	menuitem2.setAttribute('label', 'Ajouter du Style');
	menuitem2.setAttribute('accesskey', 'S');
	menuitem2.setAttribute('type', 'checkbox');
	menuitem2.setAttribute('checked', 'false');
	menuitem2.addEventListener('click', function() {}, false);
	
	var menuitem3 = document.createElement('menuitem');
	menuitem3.setAttribute('id', 'outiiil-item-3');
	menuitem3.setAttribute('label', 'Gérer votre Utilitaire');
	menuitem3.setAttribute('accesskey', 'U');
	menuitem3.addEventListener('click', function() {}, false);
	
	menupopup.appendChild(menuitem1);
	menupopup.appendChild(menuseparator);
	menupopup.appendChild(menuitem2);
	menupopup.appendChild(menuitem3);
	
	btn.appendChild(menupopup);
	
	navBar.appendChild(btn);
};
