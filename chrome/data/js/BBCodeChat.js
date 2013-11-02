
function setCookie(nom,valeur,jours) {
var expDate = new Date()
expDate.setTime(expDate.getTime() + (jours * 24 * 3600 * 1000))
document.cookie = nom + "=" + escape(valeur)
	+ ";expires=" + expDate.toGMTString()
}
function deleteCookie(nom) { setCookie(nom,"",-1) }

function getCookie(nom) {
deb = document.cookie.indexOf(nom + "=")
if (deb >= 0) {
	deb += nom.length + 1
	fin = document.cookie.indexOf(";",deb)
	if (fin < 0) fin = document.cookie.length
	return unescape(document.cookie.substring(deb,fin))
	}
return ""
}

//positions du curseur, de la selection dans un champs
//obtenir la selection
function getSelection(champs) {
	if (champs.setSelectionRange)
		return champs.value.substring(champs.selectionStart, champs.selectionEnd);
	else if (document.selection) {
		champs.focus();
		return document.selection.createRange().text;
	}
}

//obtenir les coordonnees du curseur
function getSelectionStart(champs) {
	if ( typeof champs.selectionStart != 'undefined' )
		return champs.selectionStart;
	// IE Support
	champs.focus();
	var range = champs.createTextRange();
	range.moveToBookmark(document.selection.createRange().getBookmark());
	range.moveEnd('character', champs.value.length);
	return champs.value.length - range.text.length;
}
function getSelectionEnd(champs) {
	if ( typeof champs.selectionEnd != 'undefined' )
		return champs.selectionEnd;
	// IE Support
	champs.focus();
	var range = champs.createTextRange();
	range.moveToBookmark(document.selection.createRange().getBookmark());
	range.moveStart('character', - champs.value.length);
	return range.text.length;
}


//Positionner le curseur
function setCaretPos(champs, start, end) {
	end = end || start; 	champs.focus();
	if (champs.setSelectionRange)
		champs.setSelectionRange(start, end);
	else if (document.selection) {
		var range = champs.createTextRange();
		range.moveStart('character', start);
		range.moveEnd('character', - champs.value.length + end);
		range.select();
	}
} 

//Remplacer la selection
function replaceSelection(champs, str, keep) {
	champs.focus();
	var start = getSelectionStart(champs);
	var stop = getSelectionEnd(champs);
	var end = start + str.length;
	var scrollPos = champs.scrollTop;
	champs.value = champs.value.substring(0, start) + str + champs.value.substring(stop);
	if ( keep ) setCaretPos(champs, start, end);
	else setCaretPos(champs, end);
	champs.scrollTop = scrollPos;
}

function miseEnCouleur(id,idChamps, numeroCouleur) {
var champs = document.getElementById(idChamps);
	// position avant/apres la balise ouvrante/fermante (au cas oÃ¹ elles existent dÃ©jÃ  )
	var baliseOuvranteStart = getSelectionStart(champs) - 7;
	var baliseFermanteEnd = getSelectionEnd(champs) + 8;

	// ajout des balises
	replaceSelection(champs, '[color=#'+numeroCouleur+']' + getSelection(champs) + '[/color]', true);
	setCaretPos(champs, getSelectionStart(champs) + 7+8, getSelectionEnd(champs) - 8);
	document.getElementById('listeCouleur'+id).style.display = 'none'

}


function miseEnForme(idChamps, forme) {
	switch(forme) {
		case 'italic':	addBalises(idChamps, 'i');	break;
		case 'gras':	addBalises(idChamps, 'b');	break;
		case 'souligne':addBalises(idChamps, 'u');	break;
		case 'left':	addBalises(idChamps, 'left');	break;
		case 'right':	addBalises(idChamps, 'right');	break;
		case 'center':	addBalises(idChamps, 'center');	break;
		case 'img':		addBalises(idChamps, 'img');	break;
		case 'player':		addBalises(idChamps, 'player');	break;
		case 'ally':		addBalises(idChamps, 'ally');	break;
		case 'url':		
			var champs = document.getElementById(idChamps);
			
			if(getSelection(champs) == '' || getSelection(champs).substring(0,4) == 'http') {
				var lien = getSelection(champs);
				replaceSelection(champs, '[url=' + lien + ']' + lien + '[/url]', true);
				var p1 = getSelectionStart(champs) + 5 + lien.length + 1;
				var p2 = getSelectionEnd(champs) - 6;
				setCaretPos(champs, p1, p2);
			} else {
				replaceSelection(champs, '[url=]'+getSelection(champs)+'[/url]', true);
				var p = getSelectionStart(champs) + 5;
				setCaretPos(champs, p, p);
			}
		break;
	}
}

function addRaccourciSmiley(idChamps, raccourcis) {
	replaceSelection(document.getElementById(idChamps), ' {' +raccourcis+'} ', false);
}

function changerCookieSmiley(id) {
var menuSmiley = getCookie('menuSmiley');
if (menuSmiley == '' || menuSmiley == 'non')
{setCookie('menuSmiley','oui','10');}
else
{setCookie('menuSmiley','non','10');}
afficherMenuSmiley(id);
}

function afficherMenuSmiley(id) {
var menuSmiley = getCookie('menuSmiley');
if (menuSmiley == '' || menuSmiley == 'non')
{document.getElementById('tousLesSmiley'+id).style.display = 'none';
document.getElementById('smileyPrecedent'+id).style.display = 'none';
document.getElementById('smileySuivant'+id).style.display = 'none';
}
else
{document.getElementById('tousLesSmiley'+id).style.display = '';
document.getElementById('smileyPrecedent'+id).style.display = '';
document.getElementById('smileySuivant'+id).style.display = '';
}
}
function changerCookieCouleur(numeroCouleur) {
setCookie('cookieCouleurChat',numeroCouleur,'10');
appliquerCouleurChat()
}

function testerCouleur(numeroCouleur) {
document.getElementById('chatAlliance').style.color= '#'+numeroCouleur ;
}

function colorierBouton() {
var numeroCouleur = getCookie('cookieCouleurChat');
if (numeroCouleur == '')
{numeroCouleur = '000000';}
document.getElementById('boutonCouleur').style.color= '#'+numeroCouleur ;
document.getElementById('inputCouleur').value= numeroCouleur ;
}

function appliquerCouleurChat() {
var numeroCouleur = getCookie('cookieCouleurChat');
document.getElementById('message').focus();
if (numeroCouleur == '')
{numeroCouleur = '000000';}

supprimerCadre('000000'); supprimerCadre('242424'); supprimerCadre('331000'); supprimerCadre('663300');
supprimerCadre('600000'); supprimerCadre('8B0000'); supprimerCadre('c5130f'); supprimerCadre('b21377');
supprimerCadre('800d55'); supprimerCadre('4c0833'); supprimerCadre('4B0082'); supprimerCadre('9400D3');
supprimerCadre('4d08f0'); supprimerCadre('0000FF'); supprimerCadre('000099'); supprimerCadre('000031');
supprimerCadre('004c4c'); supprimerCadre('007373'); supprimerCadre('09750c'); supprimerCadre('084c08');


document.getElementById('boutonCouleur').style.color= '#'+numeroCouleur ;
document.getElementById('inputCouleur').value= numeroCouleur ;
document.getElementById(numeroCouleur).style.borderWidth='2px';
document.getElementById(numeroCouleur).style.borderStyle='solid';
document.getElementById(numeroCouleur).style.padding='2px';
document.getElementById(numeroCouleur).style.position='relative';
document.getElementById(numeroCouleur).style.top='4px';
document.getElementById(numeroCouleur).style.marginRight='2px';

if (document.getElementById('listeCouleur0').style.display == 'none')
{document.getElementById('listeCouleur0').style.display = '';}
else
{document.getElementById('listeCouleur0').style.display = 'none'}
}

function supprimerCadre(numeroCouleur) {
document.getElementById(numeroCouleur).style.borderWidth='0px';
document.getElementById(numeroCouleur).style.borderStyle='';
document.getElementById(numeroCouleur).style.padding='0px 7px 0px 5px';
document.getElementById(numeroCouleur).style.position='';
document.getElementById(numeroCouleur).style.top='4px';
document.getElementById(numeroCouleur).style.marginRight='0px';
document.getElementById(numeroCouleur).style.marginLeft='-10px';
}

function changerCookiePack(sens,id) {
var packSmiley = getCookie('packSmiley');
if (packSmiley == ''|| isNaN(packSmiley))
{packSmiley = '1';}
packSmiley = parseInt(packSmiley);
if( sens =='precedent')
{packSmiley -= 1 ; }
else
{packSmiley += 1 ; }
if (packSmiley <= 0){packSmiley = '5';}
if (packSmiley > 5){packSmiley = '1';}
setCookie('packSmiley',packSmiley,'10');
afficherPackSmiley(id)
}

function afficherPackSmiley(id,numeroPack) {
var packSmiley = getCookie('packSmiley');

if (packSmiley ==''|| isNaN(packSmiley)){packSmiley = '1';}
packSmiley = parseInt(packSmiley);
if (numeroPack == '1')
{packSmiley = numeroPack;}
for (i=1;i<=5;i++)
	{
	if (packSmiley ==i)
		{document.getElementById('listeSmiley'+i+id).style.display = '';}
	else
		{document.getElementById('listeSmiley'+i+id).style.display = 'none';}
	}
}

function envoyerMessageAvecCouleur(message) {
var numeroCouleur = getCookie('cookieCouleurChat');
if (numeroCouleur != ''&& message != '')
{message = '[color=#'+numeroCouleur+']'+message+'[/color]';}
xajax_envoie(message);
}

function addBalises(idChamps, balise) {
	var champs = document.getElementById(idChamps);
	// position avant/apres la balise ouvrante/fermante (au cas oÃ¹ elles existent dÃ©jÃ  )
	var baliseOuvranteStart = getSelectionStart(champs) - balise.length - 2;
	var baliseFermanteEnd = getSelectionEnd(champs) + balise.length + 3;
	if(champs.value.substring(baliseOuvranteStart, getSelectionStart(champs)) == '['+balise+']'
	&& champs.value.substring(getSelectionEnd(champs), baliseFermanteEnd) == '[/'+balise+']') {
		// suppression des balises
		champs.value = champs.value.substring(0,baliseOuvranteStart) + getSelection(champs) + champs.value.substring(baliseFermanteEnd);
		setCaretPos(champs, baliseOuvranteStart, getSelectionEnd(champs));
	} else {
		// ajout des balises
		replaceSelection(champs, '['+balise+']' + getSelection(champs) + '[/'+balise+']', true);
		setCaretPos(champs, getSelectionStart(champs) + 2 + balise.length, getSelectionEnd(champs) - 3 - balise.length);
	}
}
