/* ï¿½ : \351    ï¿½ : \350 */
var delai_ouverture=100;var timeout_delai_ouverture;
var camp = new Array("ATT","DEF");
var vcaste = new Array(8,10,13,16,20,30,10,12,27,35,50,55,50,40);
var acaste = new Array(3,5,7,10,15,1,30,35,24,55,50,55,80,1);
var dcaste = new Array(2,4,6,9,14,25,15,18,23,1,50,55,1,35);
var nomMenu = new Array ;
var nomMenuFrancais = {
    fourmiliere:'Fourmili\350re',
	alliance:'Alliance',
    communaute:'Communaut\351',
	compteplus:'Compte +',
    aide:'Aide',
	
	reine:'Reine',
	ressources:'Ressources',
    construction:'Construction',
	laboratoire:'Laboratoire',
    armee:'Arm\351e',
	ennemies:'Ennemies',
	colonies:'Colonies',
    carte:'Carte',
	commerce:'Commerce',
    messagerie:'Messagerie',
	mafourmiliere:'Ma Fourmili\350re',
	
	chatalliance:'Chat',
	forum:'Forum',
    membres:'Membres',
	candidatures:'Candidatures',
    messagecollectif:'Message Collectif',
	diplomatie:'Diplomatie',
	description:'Description',
    options:'Options',
	
	chatgeneral:'Chat',
	echange:'Echange',
    propositions:'Propositions',
	classementjoueurs:'Classement Joueurs',
    classementalliances:'Classement Alliances',
	profil:'Mon Profil',
	compte:'Mon Compte',
	parrainage:'Parrainage',
	boutique:'Boutique',
	invitation:'Inviter mes Amis',
    forum:'Forum',
	
	achat:'Achat',
	simulateurcombat:'Simulateur Combat',
    simulateurchasse:'Simulateur Chasse',
	simulateurduree:'Simulateur Dur\351e',
    simulateurponte:'Simulateur Ponte',
	floodtdc:'Flood TdC',
	listeamis:'Liste d\047Amis',
	blocnote:'Bloc Note',
	profil:'Profil',
	
	intro:'Intro',
	premierjour:'Premier Jour',
    deuximejour:'Deuxi\350me Jour',
	terraindechasse:'Terrain de Chasse',
    lesconstructions:'Construction',
	lesrecherches:'Recherche',
	attaqueetdefense:'Attaque',
	lescombats:'Combats',
	lacolonie:'Colonie',
    divers:'Divers',
	regles:'R\350gles',
    moderateurs:'Mod\351rateurs',
	
	accueil:'Accueil',
	news:'News',
	inscription:'Jouer',
	presentation:'Pr\351sentation',
	forumfrancais:'Forum Fran\347ais',
	forumanglais:'Forum Anglais',
	encyclopedie:'Les Fourmis',
	anatomie:'Anatomie',
    reproduction:'Reproduction',
	developpement:'D\351veloppement',
    castes:'Castes',
	alimentation:'Alimentation',
	communication:'Communication',
	guerre:'Guerre',
    liens:'Liens',
	
	ouvrieres:'Ouvri\350res',
	nourriture:'Nourriture',
	materiaux:'Mat\351riaux',
    messages:'Messages',
	rapportdecombat:'Rapport de Combat',
    rapportdechasse:'Rapport de Chasse',
	
	compteplus:'Compte +',
	production:'Production de Nourriture',
	joueuroualliance:'Joueur ou Alliance',
	rechercher:'Rechercher',
	
	mini_jour:'J',
	mini_heure:'h',
	mini_minute:'m',
    mini_seconde:'s'
};

var nomMenuAnglais = {
    fourmiliere:'Anthill',
	alliance:'Alliance',
    communaute:'Community',
	compteplus:'Option +',
    aide:'Help',
	
	reine:'Queen',
	ressources:'Crops',
    construction:'Building',
	laboratoire:'Laboratory',
    armee:'Army',
	ennemies:'Enemies',
	colonies:'Colonies',
    carte:'Map',
	commerce:'Trade',
    messagerie:'Mail box',
	mafourmiliere:'My Anthill',
	
	chatalliance:'Chat',
	forum:'Message board',
    membres:'Member',
	candidatures:'Applications',
    messagecollectif:'Collective Message',
	diplomatie:'Diplomacy',
	description:'Description',
    options:'Options',
	
	chatgeneral:'Chat',
	echange:'Exchange',
    propositions:'Suggestions',
	classementjoueurs:'Players ranking',
    classementalliances:'Alliances ranking',
	profil:'My profile',
	compte:'My account',
	parrainage:'Godfathering',
	boutique:'Shop',
	invitation:'Invite my friends',
    forum:'Message board',
	
	achat:'Presentation',
	simulateurcombat:'Fight simulator',
    simulateurchasse:'Hunting simulator',
	simulateurduree:'Time simulator',
    simulateurponte:'Laying simulator',
	floodtdc:'HF Flood',
	listeamis:'Friend list',
	blocnote:'Notepad',
	profil:'Profile',
	
	intro:'Introduction',
	premierjour:'First Day',
    deuximejour:'Second Day',
	terraindechasse:'Hunting field',
    lesconstructions:'Buildings',
	lesrecherches:'Researches',
	attaqueetdefense:'Attack & defence',
	lescombats:'Fights',
	lacolonie:'Colony',
    divers:'General Stuff',
	regles:'Rules',
    moderateurs:'Moderators',
	
	
	accueil:'Home',
	news:'News',
	inscription:'Play',
	presentation:'Presentation',
	forumfrancais:'Forum Fran\347ais',
	forumanglais:'Forum Anglais',
	encyclopedie:'Ants',
	anatomie:'Anatomy',
    reproduction:'Reproduction',
	developpement:'Development',
    castes:'Castes',
	alimentation:'Food',
	communication:'Communication',
	guerre:'War',
    liens:'Links',
	
	ouvrieres:'Workers',
	nourriture:'Food',
	materiaux:'Materials',
    messages:'Messages',
	rapportdecombat:'Fight Report',
    rapportdechasse:'Hunting Report',
	
	compteplus:'Account +',
	production:'Food Production',
	joueuroualliance:'Player or Alliance',
	rechercher:'Search',
	
	mini_jour:'D',
	mini_heure:'h',
	mini_minute:'m',
    mini_seconde:'s'
};

nomMenu['fr_FR']= nomMenuFrancais ;
nomMenu['en_US.utf8']= nomMenuAnglais ;

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

function isTouchDevice(){
/* ne fonctionne pas avec windows mobile
try
	{document.createEvent("TouchEvent");return true;}
catch(e)
	{return false;}
*/
if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) 
	{return true;} 
else 
	{return false;}
}
function lireEtReecrireChamps(id){
var contenu = parseFloat(supprEspace(document.getElementById(id).value));
if(isNaN(contenu)||contenu < 0){contenu = 0;}
document.getElementById(id).value = (contenu).nombreFormate(0);
return contenu;
}
function changerPage(decalage)
{
resetFormulaire();
document.getElementById("page").value = parseFloat(document.getElementById("page").value) + decalage ;
document.getElementById("formulairePageEnnemie").submit();
}
function trierPage(critere)
{
resetFormulaire();
document.getElementById("page").value = 1 ;
if (critere == "tri_terrain")
	{
	document.getElementById("inverser_tri").value = "non";
	if (document.getElementById("tri").value == "tri_terrain_max")
		{document.getElementById("tri").value = "tri_terrain_min" ;}
	else
		{document.getElementById("tri").value = "tri_terrain_max" ;}
	}
else
	{
	if (document.getElementById("tri").value == critere)
		{
		if (document.getElementById("inverser_tri").value == "non")
			{document.getElementById("inverser_tri").value = "oui";}
		else
			{document.getElementById("inverser_tri").value = "non";}
		}
	else
		{document.getElementById("tri").value = critere ;
		document.getElementById("inverser_tri").value = "non";}
	}

document.getElementById("formulairePageEnnemie").submit();
}
function majTerrainPageEnnemieIcone()
{
var monTerrain = lireEtReecrireChamps ("ma_fourmiliere_terrain") ;
var fourmiliere_attaquante = document.getElementById("fourmiliere_attaquante").checked ;
var fourmiliere_attaquable = document.getElementById("fourmiliere_attaquable").checked ;
if (fourmiliere_attaquante ||fourmiliere_attaquable)
	{
	if (fourmiliere_attaquante)
		{
		if (fourmiliere_attaquable)
			{
			var terrain_min = Math.ceil(monTerrain/3) ;
			var terrain_max = Math.floor(monTerrain*3) ;
			}
		else
			{var terrain_min = Math.ceil(monTerrain/3) ;
			var terrain_max = Math.floor(monTerrain*2) ;}
		}
	else
		{var terrain_min = Math.ceil(monTerrain/2) ;
		var terrain_max = Math.floor(monTerrain*3) ;}
		
	document.getElementById("terrain_min").value= (terrain_min).nombreFormate(0) ;
	document.getElementById("terrain_max").value= (terrain_max).nombreFormate(0);
	}
}

function majTerrainPageEnnemieField()
{
document.getElementById("fourmiliere_attaquante").checked = false;
document.getElementById("fourmiliere_attaquable").checked = false;

lireEtReecrireChamps ("terrain_min") ;
lireEtReecrireChamps ("terrain_max") ;
}

function majStats(){
var ptahb = new Array(0,0);
var ptdhb = new Array(0,0);
var ptvhb = new Array(0,0);
var armes = new Array(lireEtReecrireChamps("ATTtechArme"),lireEtReecrireChamps("DEFtechArme"));
var bouclier = new Array(lireEtReecrireChamps("ATTtechBouclier"),lireEtReecrireChamps("DEFtechBouclier"));
var tmultLieu = new Array(0 , (0.1 + 0.05 * lireEtReecrireChamps("dome")) , (0.3+0.15*lireEtReecrireChamps("loge")));

for(i=0; i<3; i++) 
	{
	if(document.getElementById("dest"+i).checked)
	var dest=i;
	}

multLieu = new Array(0,tmultLieu[dest]);
for(i=0; i<acaste.length; i++)
	{
	for(j=0; j<2; j++) 
		{
		var val = lireEtReecrireChamps(camp[j]+"unite"+(i+1));
		if(val != 0)
			{
			var nb = parseInt(val);
			ptahb[j] += acaste[i] * nb;
			ptdhb[j] += dcaste[i] * nb;
			ptvhb[j] += vcaste[i] * nb;
			}
		}
	}
	
	for(i=0; i<2; i++) 
	{
	var pta = Math.round(ptahb[i] * (0.1 * armes[i] + 1));
	var ptd = Math.round(ptdhb[i] * (0.1 * armes[i] + 1));
	var ptv = Math.round(ptvhb[i] * (0.1 * bouclier[i] + multLieu[i] + 1));

	if (camp[i] == "ATT")
		{
		document.getElementById("pointDegatTotal"+camp[i]).innerHTML =(pta).nombreFormate(0);
		document.getElementById("pointDegatBase"+camp[i]).innerHTML = (ptahb[i]).nombreFormate(0);
		document.getElementById("pointDegatBonusArme"+camp[i]).innerHTML = Math.round(ptahb[i]*0.1* armes[i]).nombreFormate(0);
		}
	else
		{
		document.getElementById("pointDegatTotal"+camp[i]).innerHTML =(ptd).nombreFormate(0);
		document.getElementById("pointDegatBase"+camp[i]).innerHTML = (ptdhb[i]).nombreFormate(0);
		document.getElementById("pointDegatBonusArme"+camp[i]).innerHTML = Math.round(ptdhb[i]*0.1* armes[i]).nombreFormate(0);
		document.getElementById("pointVieBonusLieu"+camp[i]).innerHTML =Math.round(ptvhb[i]*multLieu[i]).nombreFormate(0);
		}

	document.getElementById("pointVieTotal"+camp[i]).innerHTML =(ptv).nombreFormate(0);
	document.getElementById("pointVieBase"+camp[i]).innerHTML =(ptvhb[i]).nombreFormate(0);
	document.getElementById("pointVieBonusBouclier"+camp[i]).innerHTML =Math.round(ptvhb[i] * 0.1 * bouclier[i]).nombreFormate(0);
	}
}
function echangerArmeeJoueur() 
{
	for(i=1; i<=acaste.length; i++) 
		{
		var tmp = document.getElementById("ATTunite"+(i)).value;
		document.getElementById("ATTunite"+(i)).value = document.getElementById("DEFunite"+(i)).value;
		document.getElementById("DEFunite"+(i)).value = tmp;
		}
	tmp = document.getElementById("ATTtechBouclier").value;
	document.getElementById("ATTtechBouclier").value = document.getElementById("DEFtechBouclier").value;
	document.getElementById("DEFtechBouclier").value = tmp;
	tmp = document.getElementById("ATTtechArme").value;
	document.getElementById("ATTtechArme").value = document.getElementById("DEFtechArme").value;
	document.getElementById("DEFtechArme").value = tmp;
	tmp = document.getElementById("ATTcochenille").value;
	document.getElementById("ATTcochenille").value = document.getElementById("DEFcochenille").value;
	document.getElementById("DEFcochenille").value = tmp;
	if(document.getElementById("attaquant").checked)
		document.getElementById("defenseur").checked = "checked";
	else
		document.getElementById("attaquant").checked = "checked";
	majStats();
}
function analyseArmee(texte) 
{
var RegExpToutSaufChiffre = new RegExp("[^0-9]", "g"); //Capture tout sauf les chiffres

var unite1 = new RegExp("(\\bjsn\\b)|(Jeunes? Soldates? Naines?)|(Young dwarf)|(Young dwarves)", "gi");
var unite2  = new RegExp("(\\bsn\\b)|(Soldates? Naines?)|(Dwarf)|(Dwarves)", "gi");
var unite3 = new RegExp("(\\bne\\b)|(Naines? d')|(Top dwarf)|(Top dwarves)", "gi");
var unite4  = new RegExp("(\\bjs\\b)|(Jeunes? Soldates?)|(Young soldiers?)", "gi");
var unite5  = new RegExp("(\\bs\\b)|(Soldates?)|(Soldiers?)", "gi");
var unite6  = new RegExp("(\\bc\\b)|(Concierges?)|(doorkeepers?)", "gi");
var unite14 = new RegExp("(\\bce\\b)|(Concierges? d')|(Top doorkeepers?)", "gi");
var unite7  = new RegExp("(\\ba\\b)|(Artilleuses?)|(Fire ants?)", "gi");
var unite8  = new RegExp("(\\bae\\b)|(Artilleuses? d')|(Top fire ants?)", "gi");
var unite9  = new RegExp("(\\bse\\b)|(Soldates? d')|(Top soldiers?)", "gi");
var unite10 = new RegExp("(\\bta\\b)|(\\btk\\b)|(Tanks?)", "gi");
var unite13 = new RegExp("(\\btae\\b)|(\\btke\\b)|(Tanks? d')|(Top tanks?)", "gi");
var unite11 = new RegExp("(\\btu\\b)|(Tueuses?)|(Killers?)", "gi");
var unite12 = new RegExp("(\\btue\\b)|(Tueuses? d'?)|(Top killers?)", "gi");
var unite   = new Array (unite1,unite2,unite3,unite4,unite5,unite6,unite7,unite8,unite9,unite10,unite11,unite12,unite13,unite14);
var interdit =new RegExp("(Vos chasseuses.*secondes?)|(Vous allez attaquer.*secondes?)|(inflige.*\.)|(Arriv.*[0-9]{2}h[0-9]{2})|(\\(s\\))", "gi");
var kilo = new RegExp("([0-9]+)k\\b|(kilos?)", "gi");
var mega = new RegExp("([0-9]+)m\\b|(megas?)", "gi");
var giga = new RegExp("([0-9]+)g\\b|(gigas?)", "gi");
var tera = new RegExp("([0-9]+)t\\b|(teras?)", "gi");
// L'ordre est important car sans lui ï¿½a va remplacer Top soldiers par Top unite5 qui est le soldier.
var ordre = new Array (0,2,1,3,8,4,13,5,7,6,12,9,11,10);

var quantiteUnite = new Array (0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); // le premier chiffre reste ï¿½ 0 car il n'y a pas unite0

texte = texte.replace( interdit,"");
for (i = 0; i < unite.length ; i++) 
{texte = texte.replace( unite[ordre[i]], "{separateur}unite"+(ordre[i]+1)+"{separateur}");}

texte = texte.replace( kilo,"$1 000");
texte = texte.replace( mega,"$1 000 000");
texte = texte.replace( giga,"$1 000 000 000");
texte = texte.replace( tera,"$1 000 000 000 000");

var texteSplit = texte.split("{separateur}");

// On regarde si il y a des chiffres dans le premier split
if (texteSplit[0].replace(RegExpToutSaufChiffre, '').length > 0)
	{var decalage=-1; }else{var decalage=1; }

var a = "";var b = "";var temp ="";
for (i = 0; i < texteSplit.length ; i++)
	{
	for (j = unite.length; j >0  ; j--)
		{
		if (texteSplit[i].indexOf("unite"+j) >= 0)
			{
			if (texteSplit[i+decalage].indexOf('\t') < 0) // Il n'y a pas de tabulation
				{
				temp = parseInt(texteSplit[i+decalage].replace(RegExpToutSaufChiffre, ''));
				if (isNaN(temp)) {temp = 0;}
				quantiteUnite[j] += temp;
				}
			else
				{
				var splitQuantite = texteSplit[i+decalage].split('\t');
				for (k = 0; k < splitQuantite.length; k++) 
					{
					temp = parseInt(splitQuantite[k].replace(RegExpToutSaufChiffre, ''),10); // on doit prï¿½ciser que c'est en base 10 au cas oï¿½ ï¿½a commence par 0
					if (isNaN(temp)) {temp = 0;}
					quantiteUnite[j] += temp;
					
					}
				}
			break;
			}
		}
	}
/*
for (i = 1; i < quantiteUnite.length ; i++)
{a += 'unite'+i+':'+quantiteUnite[i]+"\n" ;}

for (i = 0; i < texteSplit.length ; i++)
{b += texteSplit[i]+'<br/>' ;}
document.getElementById("sortie").value =b +"\n"+ a; */

return quantiteUnite
}

function AfficherCopieArmee(camp) {
document.getElementById("divccarmee").style.display = "";
document.getElementById("camp").value = camp;
document.getElementById("textAreaArmee").focus();
}
function ccarmee() {
var armee = analyseArmee(document.getElementById("textAreaArmee").value);
var camp=document.getElementById("camp").value;
for(i=1; i<armee.length; i++)
	{document.getElementById(camp+'unite'+i).value = armee[i];}
document.getElementById("textAreaArmee").value = "";
document.getElementById("divccarmee").style.display="none";
majStats();
}
function ccarmeeSimple() {
var armee = analyseArmee(document.getElementById("textAreaArmee").value);
var tailleTableau = armee.length;
for(i=1; i<tailleTableau; i++)
	{
	if (document.getElementById('unite'+i))
	document.getElementById('unite'+i).value = armee[i];}
document.getElementById("textAreaArmee").value = "";
document.getElementById("divccarmee").style.display="none";
}

/*
  * +-------------------------------------+
  * Number.prototype.nombreFormate
  * +-------------------------------------+
  * Params (facultatifs):
  * - Int decimales: nombre de decimales (exemple: 2)
  * - String signe: le signe precedent les decimales (exemple: "," ou ".")
  * - String separateurMilliers: comme son nom l'indique
  * Returns:
  * - String chaine formatee
  */
Number.prototype.nombreFormate = 
function (decimales, signe, separateurMilliers) {

var _sNombre = String(this), i, _sRetour = "", _sDecimales = "";
if (decimales == undefined) decimales = 2;
if (signe == undefined) signe = '';//'.';
if (separateurMilliers == undefined) separateurMilliers = ' ';
  
function separeMilliers (sNombre) {
var sRetour = "";
while (sNombre.length % 3 != 0) {
sNombre = "0"+sNombre;}
for (i = 0; i < sNombre.length; i += 3) {
if (i == sNombre.length-1) separateurMilliers = '';
	sRetour += sNombre.substr(i, 3)+separateurMilliers;
}
while (sRetour.substr(0, 1) == "0") {
sRetour = sRetour.substr(1);
}
return sRetour.substr(0, sRetour.lastIndexOf(separateurMilliers));
}
if(_sNombre == 0)
{_sRetour=0;}
else
{
if (_sNombre.indexOf('.') == -1) {
for (i = 0; i < decimales; i++) {
_sDecimales += "0";
}
_sRetour = separeMilliers(_sNombre)+signe+_sDecimales;
} else {
var sDecimalesTmp = (_sNombre.substr(_sNombre.indexOf('.')+1));
if (sDecimalesTmp.length > decimales) {
var nDecimalesManquantes = sDecimalesTmp.length - decimales;
var nDiv = 1;
for (i = 0; i < nDecimalesManquantes; i++) {
nDiv *= 10;
}
_sDecimales = Math.round(Number(sDecimalesTmp) / nDiv);
}
_sRetour = separeMilliers(_sNombre.substr(0, _sNombre.indexOf('.')))+String(signe)+_sDecimales;
}
}
return _sRetour;
}

function supprEspace(valeur){
var reg=new RegExp("( )", "g");
valeur = valeur.replace(reg,'');
return valeur;
}
function remplirChamps(id,valeur) {
if(supprEspace(document.getElementById(id).value)==valeur || valeur == 0)
	{document.getElementById(id).value=0;}
else
	{document.getElementById(id).value=valeur.nombreFormate(0);}
}
function remplirChampsMaj(id,valeur) {
if(supprEspace(document.getElementById(id).value)==valeur || valeur == 0)
	{document.getElementById(id).value=0;}
else
	{document.getElementById(id).value=valeur.nombreFormate(0);}
majStats();
}
function spoilerId(id) {
if($('#'+id).css('display') == 'none')
	{
	if ($('#'+id).get(0).tagName.toLowerCase()=='tr')
		$('#'+id).css('display','table-row');
	else
		{
		if ($('#'+id).get(0).tagName.toLowerCase()=='span')
			$('#'+id).css('display','inline');
		else
			$('#'+id).css('display','block');
		}
	}
	
else
	$('#'+id).css('display','none');
}

function creerMenu(langue,token,pseudo,alliance,message_forum,comptePlus,nom_forum,url_forum,nbCandidature,message_collectif,complement_menu,racine) {

if (langue != 'en_US.utf8'){langue='fr_FR';}


var menu = '<ul id="menuFourmiliere" class="menu_colonne">'
+'<li><a class="boutonReine" href="'+racine+'Reine.php"><div></div>'+nomMenu[langue]['reine']+'</a></li>'
+'<li><a class="boutonConstruction" href="'+racine+'construction.php"><div></div>'+nomMenu[langue]['construction']+'</a></li>'
+'<li><a class="boutonLaboratoire" href="'+racine+'laboratoire.php"><div></div>'+nomMenu[langue]['laboratoire']+'</a></li>'
+'<li><a class="boutonRessources" href="'+racine+'Ressources.php"><div></div>'+nomMenu[langue]['ressources']+'</a></li>'
+'<li><a class="boutonArmee" href="'+racine+'Armee.php"><div></div>'+nomMenu[langue]['armee']+'</a></li>'
+'<li><a class="boutonEnnemies" href="'+racine+'ennemie.php"><div></div>'+nomMenu[langue]['ennemies']+'</a></li>'
+'<li><a class="boutonColonies" href="'+racine+'colonies.php"><div></div>'+nomMenu[langue]['colonies']+'</a></li>'
+'<li><a class="boutonCarte" href="'+racine+'carte2.php"><div></div>'+nomMenu[langue]['carte']+'</a></li>'
+'<li><a class="boutonCommerce" href="'+racine+'commerce.php"><div></div>'+nomMenu[langue]['commerce']+'</a></li>'
+'<li><a class="boutonMessagerie" href="'+racine+'messagerie.php"><div></div>'+nomMenu[langue]['messagerie']+'</a></li>';
if (isTouchDevice()== false) 
	{menu += '<li><a class="boutonMaFourmiliere" href="'+racine+'fourmiliere.php"><div></div>'+nomMenu[langue]['mafourmiliere']+'</a></li>';}
menu += '</ul>';

if(alliance != "0") 
{
menu += '<ul id="menuAlliance" class="menu_colonne">'
+'<li><a class="boutonChat" href="'+racine+'alliance.php" ><div></div>'+nomMenu[langue]['chatalliance']+'</a></li>'
+'<li><a class="boutonForum" href="'+racine+'alliance.php?forum_menu"><div></div>'+nomMenu[langue]['forum']+'</a></li>';
if( nom_forum != false)
{menu += '<li><a class="boutonForumExt" '+url_forum+' ><div></div>'+nom_forum+'</a></li>';}
menu += '<li><a class="boutonMembres" href="'+racine+'alliance.php?Membres"><div></div>'+nomMenu[langue]['membres']+'</a></li>'
+'<li><a class="boutonCandidature" href="'+racine+'alliance.php?voirCandidature"><div></div>'+nomMenu[langue]['candidatures']+' '+nbCandidature+'</a></li>'; 
if( message_collectif == true)
{menu += '<li><a class="boutonMC" href="'+racine+'alliance.php?messCollectif"><div></div>'+nomMenu[langue]['messagecollectif']+'</a></li>';}
menu += '<li><a class="boutonDiplomatie" href="'+racine+'alliance.php?Diplomatie"><div></div>'+nomMenu[langue]['diplomatie']+'</a></li>'
+'<li><a class="boutonDescription" href="'+racine+'alliance.php?Description"><div></div>'+nomMenu[langue]['description']+'</a></li>'
+'<li><a class="boutonOptions" href="'+racine+'alliance.php?Options"><div></div>'+nomMenu[langue]['options']+'</a></li>'
+'</ul>';
}
else
{
menu += '<ul id="menuAlliance" class="menu_colonne">'
+'<li><a class="boutonChat" href="'+racine+'alliance.php" ><div></div>'+nomMenu[langue]['chatalliance']+'</a></li>'
+'</ul>';
}

menu += '<ul id="menuCommunaute" class="menu_colonne">'
+'<li><a class="boutonChat" href="'+racine+'chat.php"><div></div>'+nomMenu[langue]['chatgeneral']+'</a></li>'
+'<li><a class="boutonEchange" href="'+racine+'echange.php"><div></div>'+nomMenu[langue]['echange']+'</a></li>'
+'<li><a class="boutonPropositions" href="'+racine+'propositions.php"><div></div>'+nomMenu[langue]['propositions']+'</a></li>'
+'<li><a class="boutonClassementJoueurs" href="'+racine+'classement.php"><div></div>'+nomMenu[langue]['classementjoueurs']+'</a></li>'
+'<li><a class="boutonClassementAlliance" href="'+racine+'classementAlliance.php"><div></div>'+nomMenu[langue]['classementalliances']+'</a></li>'
+'<li><a class="boutonProfil" href="'+racine+'Membre.php?Pseudo='+pseudo+'"><div></div>'+nomMenu[langue]['profil']+'</a></li>'
+'<li><a class="boutonOptions" href="'+racine+'compte.php"><div></div>'+nomMenu[langue]['compte']+'</a></li>'
+'<li><a class="boutonParrainage" href="'+racine+'FourmilieresFilles.php"><div></div>'+nomMenu[langue]['parrainage']+'</a></li>'
+'<li><a class="boutonInvitation" href="'+racine+'invitation.php"><div></div>'+nomMenu[langue]['invitation']+'</a></li>'
+'<li><a class="boutonBoutique" href="http://fourmizzz.spreadshirt.fr/" target="_blank"><div></div>'+nomMenu[langue]['boutique']+'</a></li>';
if (langue == 'fr_FR')
{menu += '<li><a class="boutonForum" href="http://fourmizzz.cforum.info/index.php" target="_blank"><div></div>'+nomMenu[langue]['forum']+'</a></li>';}
else
{menu += '<li><a class="boutonForum" href="http://antzzz.freeforums.org/index.php" target="_blank"><div></div>'+nomMenu[langue]['forum']+'</a></li>';}
menu += '</ul>';
	
if(comptePlus==true){
menu += '<ul id="menuComptePlus" class="menu_colonne">'
+'<li><a class="boutonAchat" href="'+racine+'comptePlus.php"><div></div>'+nomMenu[langue]['achat']+'</a></li>'
+'<li><a class="boutonEnnemies" href="'+racine+'simulateur.php"><div></div>'+nomMenu[langue]['simulateurcombat']+'</a></li>'
+'<li><a class="boutonSimulateurChasse" href="'+racine+'simulateurChasse.php"><div></div>'+nomMenu[langue]['simulateurchasse']+'</a></li>'
+'<li><a class="boutonSimulateurDuree" href="'+racine+'simulateurDuree.php"><div></div>'+nomMenu[langue]['simulateurduree']+'</a></li>'
+'<li><a class="boutonSimulateurFlood" href="'+racine+'simulateurFlood.php"><div></div>'+nomMenu[langue]['floodtdc']+'</a></li>'
+'<li><a class="boutonReine" href="'+racine+'simulateurPonte.php"><div></div>'+nomMenu[langue]['simulateurponte']+'</a></li>'
+'<li><a class="boutonListeAmis" href="'+racine+'amis.php"><div></div>'+nomMenu[langue]['listeamis']+'</a></li>'
+'<li><a class="boutonBlocNote" href="'+racine+'blocnote.php"><div></div>'+nomMenu[langue]['blocnote']+'</a></li>'
+'<li><a class="boutonProfil" href="'+racine+'profil.php"><div></div>'+nomMenu[langue]['profil']+'</a></li>'
+'</ul>';
}
else
{
menu += '<ul id="menuComptePlus" class="menu_colonne">'
+'<li><a class="boutonAchat" href="'+racine+'comptePlus.php"><div></div>'+nomMenu[langue]['achat']+'</a></li>'
+'</ul>';
}

menu += '<ul id="menuAide" class="menu_colonne">'
+'<li><a class="boutonIntro" href="'+racine+'tutorial.php?partie=tuto_intro&amp;page=tutorial"><div></div>'+nomMenu[langue]['intro']+'</a></li>'
+'<li><a class="boutonPremierJour" href="'+racine+'tutorial.php?partie=tuto_premiers_pas&amp;page=tutorial"><div></div>'+nomMenu[langue]['premierjour']+'</a></li>'
+'<li><a class="boutonDeuxiemeJour" href="'+racine+'tutorial.php?partie=tuto_seconds_pas&amp;page=tutorial"><div></div>'+nomMenu[langue]['deuximejour']+'</a></li>'
+'<li><a class="boutonSimulateurChasse" href="'+racine+'tutorial.php?partie=tuto_tdc&amp;page=tutorial"><div></div>'+nomMenu[langue]['terraindechasse']+'</a></li>'
+'<li><a class="boutonConstruction" href="'+racine+'tutorial.php?partie=tuto_construction&amp;page=tutorial"><div></div>'+nomMenu[langue]['lesconstructions']+'</a></li>'
+'<li><a class="boutonLaboratoire" href="'+racine+'tutorial.php?partie=tuto_labo&amp;page=tutorial"><div></div>'+nomMenu[langue]['lesrecherches']+'</a></li>'
+'<li><a class="boutonArmee" href="'+racine+'tutorial.php?partie=tuto_attaque_defense&amp;page=tutorial"><div></div>'+nomMenu[langue]['attaqueetdefense']+'</a></li>'
+'<li><a class="boutonEnnemies" href="'+racine+'tutorial.php?partie=tuto_combat&amp;page=tutorial"><div></div>'+nomMenu[langue]['lescombats']+'</a></li>'
+'<li><a class="boutonColonies" href="'+racine+'tutorial.php?partie=tuto_colonie&amp;page=tutorial"><div></div>'+nomMenu[langue]['lacolonie']+'</a></li>'
+'<li><a class="boutonDivers" href="'+racine+'tutorial.php?partie=tuto_divers&amp;page=tutorial"><div></div>'+nomMenu[langue]['divers']+'</a></li>'
+'<li><a class="boutonRegles" href="'+racine+'tutorial.php?partie=tuto_regles&amp;page=tutorial"><div></div>'+nomMenu[langue]['regles']+'</a></li>'
+'<li><a class="boutonModerateur" href="'+racine+'tutorial.php?partie=moderateur&amp;page=tutorial"><div></div>'+nomMenu[langue]['moderateurs']+'</a></li>'
+'</ul>';
menu +=complement_menu;
menu += '<ul id="menu_horizontal">'
+'<li id="liBoutonRessource"><a id="boutonBoite" href="'+racine+'Ressources.php"><div></div></a></li>'
+'<li><a id="boutonFourmiliere" href="'+racine+'Reine.php"><div></div>'+nomMenu[langue]['fourmiliere']+'</a></li>'
+'<li><a id="boutonAlliance" href="'+racine+'alliance.php"><div></div>'+nomMenu[langue]['alliance']+'</a>';
if(message_forum==true) 
{menu +='<img class="bulleForum" onclick=\'document.location.href="'+racine+'alliance.php?forum_menu"\'  src="http://img.fourmizzz.fr/images/icone/bulle.gif"/>';}
menu +='</li><li><a id="boutonCommunaute" href="'+racine+'chat.php"><div></div>'+nomMenu[langue]['communaute']+'</a></li>'
+'<li><a id="boutonComptePlus" class="boutonSansColonne" href="'+racine+'comptePlus.php"><div></div>'+nomMenu[langue]['compteplus']+'</a></li>'
+'<li><a id="boutonAide" href="'+racine+'tutorial.php?partie=tuto_intro&amp;page=tutorial"><div></div>'+nomMenu[langue]['aide']+'</a></li>'
+'</ul>';

menu += '<a id="boutonDeconnexion" href="'+racine+'deconnexion.php?'+token+'"><div></div></a> ';
$('#menu').html(menu);

if (isTouchDevice()) 
	{
	$('#boutonBoite,#boutonFourmiliere,#boutonAlliance,#boutonCommunaute,#boutonComptePlus,#boutonAide').attr('href','#');
	$('#boutonBoite').click(function(){spoilerMenu('Boite');});
	$('#boutonFourmiliere').click(function(){spoilerMenu('Fourmiliere');return false;});
	$('#boutonAlliance').click(function(){spoilerMenu('Alliance');return false;});
	$('#boutonCommunaute').click(function(){spoilerMenu('Communaute');return false;});
	$('#boutonComptePlus').click(function(){spoilerMenu('ComptePlus');return false;});
	$('#boutonAide').click(function(){spoilerMenu('Aide');return false;});
	if(complement_menu!='')
	{$('#boutonDeconnexion').attr('href','#');$('#boutonDeconnexion').click(function(){spoilerMenu('Deconnexion');return false;});}
	}
else
	{
	$('#menuBoite,#boutonBoite')
	.mouseenter(function(){lancerOuvrirMenu('Boite');})
	.mouseleave(function(){lancerFermerMenu('Boite');});
	
	$('#menuFourmiliere,#boutonFourmiliere')
	.mouseenter(function(){lancerOuvrirMenu('Fourmiliere');})
	.mouseleave(function(){lancerFermerMenu('Fourmiliere');});
	
	$('#menuAlliance,#boutonAlliance')
	.mouseenter(function(){lancerOuvrirMenu('Alliance');})
	.mouseleave(function(){lancerFermerMenu('Alliance');});
	
	$('#menuCommunaute,#boutonCommunaute')
	.mouseenter(function(){lancerOuvrirMenu('Communaute');})
	.mouseleave(function(){lancerFermerMenu('Communaute');});
	

	$('#menuComptePlus,#boutonComptePlus')
	.mouseenter(function(){lancerOuvrirMenu('ComptePlus');})
	.mouseleave(function(){lancerFermerMenu('ComptePlus');});

	
	$('#menuAide,#boutonAide')
	.mouseenter(function(){lancerOuvrirMenu('Aide');})
	.mouseleave(function(){lancerFermerMenu('Aide');});
	
	$('#menuDeconnexion,#boutonDeconnexion')
	.mouseenter(function(){lancerOuvrirMenu('Deconnexion');})
	.mouseleave(function(){lancerFermerMenu('Deconnexion');});
	}
}
function creerMenuHorsLigne(langue) {

if (langue != 'en_US.utf8'){langue='fr_FR';}
var menu = '';

menu += '<ul id="menuAlliance" class="menu_colonne">'
+'<li><a class="boutonReine" href="tour_du_jeu.php?partie=page7"><div></div>'+nomMenu[langue]['fourmiliere']+'</a></li>'
+'<li><a class="boutonArmee" href="tour_du_jeu.php?partie=page8"><div></div>'+nomMenu[langue]['armee']+'</a></li>'
+'<li><a class="boutonEnnemies" href="tour_du_jeu.php?partie=page9"><div></div>'+nomMenu[langue]['guerre']+'</a></li>'
+'<li><a class="boutonCandidature" href="Inscription.php"><div></div>'+nomMenu[langue]['inscription']+'</a></li>'
+'</ul>';

menu += '<ul id="menuComptePlus" class="menu_colonne">'
+'<li><a class="boutonLivre" href="fourmis.php?fourmis=fourmis_intro"><div></div>'+nomMenu[langue]['intro']+'</a></li>'
+'<li><a class="boutonReine" href="fourmis.php?fourmis=fourmis_anatomie"><div></div>'+nomMenu[langue]['anatomie']+'</a></li>'
+'<li><a class="boutonReproduction" href="fourmis.php?fourmis=fourmis_reproduction"><div></div>'+nomMenu[langue]['reproduction']+'</a></li>'
+'<li><a class="boutonDev" href="fourmis.php?fourmis=fourmis_developpement"><div></div>'+nomMenu[langue]['developpement']+'</a></li>'
+'<li><a class="boutonCastes" href="fourmis.php?fourmis=fourmis_castes"><div></div>'+nomMenu[langue]['castes']+'</a></li>'
+'<li><a class="boutonHome" href="fourmis.php?fourmis=fourmis_fourmiliere"><div></div>'+nomMenu[langue]['fourmiliere']+'</a></li>'
+'<li><a class="boutonRessources" href="fourmis.php?fourmis=fourmis_alimentation"><div></div>'+nomMenu[langue]['alimentation']+'</a></li>'
+'<li><a class="boutonChat" href="fourmis.php?fourmis=fourmis_communication"><div></div>'+nomMenu[langue]['communication']+'</a></li>'
+'<li><a class="boutonEnnemies" href="fourmis.php?fourmis=fourmis_guerre"><div></div>'+nomMenu[langue]['guerre']+'</a></li>'
+'<li><a class="boutonLiens" href="fourmis.php?fourmis=fourmis_liens"><div></div>'+nomMenu[langue]['liens']+'</a></li>'
+'</ul>';


menu += '<ul id="menuAide" class="menu_colonne">'
+'<li><a class="boutonIntro" href="tutorial.php?partie=tuto_intro&amp;page=tutorial"><div></div>'+nomMenu[langue]['intro']+'</a></li>'
+'<li><a class="boutonPremierJour" href="tutorial.php?partie=tuto_premiers_pas&amp;page=tutorial"><div></div>'+nomMenu[langue]['premierjour']+'</a></li>'
+'<li><a class="boutonDeuxiemeJour" href="tutorial.php?partie=tuto_seconds_pas&amp;page=tutorial"><div></div>'+nomMenu[langue]['deuximejour']+'</a></li>'
+'<li><a class="boutonSimulateurChasse" href="tutorial.php?partie=tuto_tdc&amp;page=tutorial"><div></div>'+nomMenu[langue]['terraindechasse']+'</a></li>'
+'<li><a class="boutonConstruction" href="tutorial.php?partie=tuto_construction&amp;page=tutorial"><div></div>'+nomMenu[langue]['lesconstructions']+'</a></li>'
+'<li><a class="boutonLaboratoire" href="tutorial.php?partie=tuto_labo&amp;page=tutorial"><div></div>'+nomMenu[langue]['lesrecherches']+'</a></li>'
+'<li><a class="boutonArmee" href="tutorial.php?partie=tuto_attaque_defense&amp;page=tutorial"><div></div>'+nomMenu[langue]['attaqueetdefense']+'</a></li>'
+'<li><a class="boutonEnnemies" href="tutorial.php?partie=tuto_combat&amp;page=tutorial"><div></div>'+nomMenu[langue]['lescombats']+'</a></li>'
+'<li><a class="boutonColonies" href="tutorial.php?partie=tuto_colonie&amp;page=tutorial"><div></div>'+nomMenu[langue]['lacolonie']+'</a></li>'
+'<li><a class="boutonDivers" href="tutorial.php?partie=tuto_divers&amp;page=tutorial"><div></div>'+nomMenu[langue]['divers']+'</a></li>'
+'<li><a class="boutonRegles" href="tutorial.php?partie=tuto_regles&amp;page=tutorial"><div></div>'+nomMenu[langue]['regles']+'</a></li>'
+'<li><a class="boutonModerateur" href="tutorial.php?partie=moderateur&amp;page=tutorial"><div></div>'+nomMenu[langue]['moderateurs']+'</a></li>'
+'</ul>';

menu += '<div id="menuDrapeau">'
+'<a href="http://www.fourmizzz.fr"><div class="drapeau drapeau_francais"></div></a>'
+'<a href="http://www.antzzz.org"><div class="drapeau drapeau_anglais"></div></a>'
+'</div>';

menu += '<ul id="menu_horizontal">'
+'<li><a id="boutonHome" href="index.php"><div></div>'+nomMenu[langue]['accueil']+'</a></li>'
+'<li><a id="boutonAlliance" href="tour_du_jeu.php?partie=page7"><div></div>'+nomMenu[langue]['presentation']+'</a></li>'

if (langue == 'fr_FR')
{menu += '<li><a id="boutonForum" href="http://fourmizzz.cforum.info/index.php" target="_blank"><div></div>'+nomMenu[langue]['forum']+'</a></li>';}
else
{menu += '<li><a id="boutonForum" href="http://antzzz.freeforums.org/index.php" target="_blank"><div></div>'+nomMenu[langue]['forum']+'</a></li>';}
menu += '<li><a id="boutonComptePlus" href="fourmis.php?fourmis=fourmis_intro"><div></div>'+nomMenu[langue]['encyclopedie']+'</a></li>'
+'<li><a id="boutonAide" href="tutorial.php?partie=tuto_intro&amp;page=tutorial"><div></div>'+nomMenu[langue]['aide']+'</a></li>'
+'</ul>';
if (langue == 'fr_FR')
	{menu += '<div id="boutonDrapeau"><div class="drapeau drapeau_francais"></div><div>';}
else
	{menu += '<div id="boutonDrapeau"><div class="drapeau drapeau_anglais"></div><div>';}

$('#menu').html(menu);

if (isTouchDevice()) 
	{
	$('#boutonAlliance,#boutonComptePlus,#boutonAide').attr('href','#');
	$('#boutonAlliance').click(function(){spoilerMenu('Alliance');return false;});
	$('#boutonComptePlus').click(function(){spoilerMenu('ComptePlus');return false;});
	$('#boutonAide').click(function(){spoilerMenu('Aide');return false;});
	$('#boutonDrapeau').click(function(){spoilerMenu('Drapeau');return false;});
	}
else
	{
	$('#boutonHome')
	.mouseenter(function(){lancerOuvrirMenu('Home');})
	.mouseleave(function(){lancerFermerMenu('Home');});

	$('#menuAlliance,#boutonAlliance')
	.mouseenter(function(){lancerOuvrirMenu('Alliance');})
	.mouseleave(function(){lancerFermerMenu('Alliance');});

	$('#boutonForum')
	.mouseenter(function(){lancerOuvrirMenu('Forum');})
	.mouseleave(function(){lancerFermerMenu('Forum');});
	
	$('#menuComptePlus,#boutonComptePlus')
	.mouseenter(function(){lancerOuvrirMenu('ComptePlus');})
	.mouseleave(function(){lancerFermerMenu('ComptePlus');});
		
	$('#menuAide,#boutonAide')
	.mouseenter(function(){lancerOuvrirMenu('Aide');})
	.mouseleave(function(){lancerFermerMenu('Aide');});
	
	$('#menuDrapeau,#boutonDrapeau')
	.mouseenter(function(){lancerOuvrirMenu('Drapeau');})
	.mouseleave(function(){lancerFermerMenu('Drapeau');});
	}
}

var timeout_ouvrir;var timeout_fermer;
function lancerOuvrirMenu(id){
if($('.boutonActif').length>0)
	{ouvrirMenu(id);}
else
	{timeout_ouvrir = setTimeout(function(){ouvrirMenu(id);},50);}
clearTimeout(timeout_fermer);
}
function lancerFermerMenu(id){
timeout_fermer = setTimeout(function(){fermerMenu(id);},50);
clearTimeout(timeout_ouvrir);
}
function spoilerMenu(id){

if ($('#bouton'+id).hasClass('boutonActif'))
	{fermerMenu(id);}
else
	{ouvrirMenu(id);}
}
function ouvrirMenu(id){
$('.boutonActif').removeClass('boutonActif');
$('.menuActif').removeClass('menuActif');
$('#bouton'+id).addClass('boutonActif');
$('#menu'+id).addClass('menuActif');
}
function fermerMenu(id){
$('#menu'+id).removeClass('menuActif');
$('#bouton'+id).removeClass('boutonActif');
}
function creerBoiteInfo(langue,serveur,pseudo,nb_ouvriere,title_ouvriere,pourcentage_ouvriere,nourriture,title_nourriture,pourcentage_nourriture,materiaux,title_materiaux,pourcentage_materiaux,NonLuMess,NonLuRapComb,NonLuRapChass,racine) {

var boiteInfo ='';
boiteInfo +='<div class="titre_colonne_cliquable" onclick=\'document.location.href="'+racine+'Membre.php?Pseudo='+pseudo+'"  \'>'
+'<a href="'+racine+'Membre.php?Pseudo='+pseudo+'" class="titre_ressource">S'+serveur+' '+pseudo+'</a>'
+'</div>';

boiteInfo +='<div class="contenu_boite_info">'
+'<table>'
+'<tr onclick=\'document.location.href="'+racine+'Ressources.php"\' class="lien" title="'+nomMenu[langue]['ouvrieres']+'" >'
	+'<td>'
		+'<a href="'+racine+'Ressources.php" class="ouvriere">'
		+'<img class="icone_fourmis" alt="'+nomMenu[langue]['ouvrieres']+'" src="images/carte/rien.gif" width="18" height="18"/>'+nb_ouvriere+'</a>'
	+'</td>'
	+'<td title="'+title_ouvriere+'" style="background-color :#525543">'
		+'<div class="jauge">'
			+'<div class="decor_jauge"></div>'
			+'<div class="plein" style="width :'+pourcentage_ouvriere+'%;"></div>'
		+'</div>'
	+'</td>'
+'</tr>';

boiteInfo +='<tr onclick=\'document.location.href="'+racine+'Reine.php"\' class="lien" title="'+nomMenu[langue]['nourriture']+'">'
	+'<td>'
		+'<a href="'+racine+'Reine.php" class="nourriture">'
		+'<img class="icone_pomme" alt="'+nomMenu[langue]['nourriture']+'" src="images/carte/rien.gif" width="18" height="18"/>'+nourriture+'</a>'
	+'</td>'
	+'<td style="background-color:#525543" title="'+title_nourriture+'">'
		+'<div class="jauge">'
			+'<div class="decor_jauge"></div>'
			+'<div class="plein" style="width:'+pourcentage_nourriture+'% ; " ></div>'
		+'</div>'
	+'</td>'
+'</tr>';

boiteInfo +='<tr onclick=\'document.location.href="'+racine+'construction.php"\' class="lien" title="'+nomMenu[langue]['materiaux']+'">'
	+'<td>'
		+'<a href="'+racine+'construction.php" class="materiaux">'
		+'<img class="icone_bois" alt="'+nomMenu[langue]['materiaux']+'" src="images/carte/rien.gif" width="18" height="18"/>'+materiaux+'</a>'
	+'</td>'
	+'<td style="background-color:#525543" title="'+title_materiaux+'">'
		+'<div class="jauge">'
			+'<div class="plein" style="width :'+pourcentage_materiaux+'%;" ></div>'
			+'<div class="decor_jauge"></div>'
		+'</div>'
	+'</td>'
+'</tr>'
+'</table>';

boiteInfo +='<a href="'+racine+'messagerie.php" class="messages lien">'+nomMenu[langue]['messages']+' : '
+'<span id="NonLuMess">'+NonLuMess+'</span><img class="icone_lettre_blanche" alt="'+nomMenu[langue]['messages']+'" src="images/carte/rien.gif" width="18" height="18" title="'+nomMenu[langue]['messages']+'"/>'
+'<span id="NonLuRapComb">'+NonLuRapComb+'</span><img class="icone_lettre_rouge" alt="'+nomMenu[langue]['rapportdecombat']+'" src="images/carte/rien.gif" width="18" height="18" title="'+nomMenu[langue]['rapportdecombat']+'" />'
+'<span id="NonLuRapChass">'+NonLuRapChass+'</span><img class="icone_lettre_verte" alt="'+nomMenu[langue]['rapportdechasse']+'" src="images/carte/rien.gif" width="18" height="18" title="'+nomMenu[langue]['rapportdechasse']+'" />'
+'</a>'
+'</div>';

$('#boiteInfo').html(boiteInfo);
}

function creerBoiteComptePlus(langue,menuRapideHtmlCptPlus,nom_unite,temps_unite,nom_batiment,temps_batiment,nom_recherche,temps_recherche,pourcentage_rien,pourcentage_materiaux,tdc,title_tdc,solde_consommation,title_consommation,pourcentage_armee,menu_rapide,racine) {
var boiteComptePlus ='';
boiteComptePlus +='<div class="titre_colonne_cliquable" onclick=\'document.location.href="'+racine+'comptePlus.php"\'>'
+'<a href="'+racine+'comptePlus.php" class="titre_compte_plus">'+nomMenu[langue]['compteplus']+'</a>'
+'</div><div class="contenu_boite_compte_plus">';

if (menuRapideHtmlCptPlus)
{
boiteComptePlus +='<div id="lien_compte" style="text-align:center;">'
+'<a href="'+racine+'simulateur.php" class="boutonEnnemies" title="'+nomMenu[langue]['simulateurcombat']+'"><div><img alt="'+nomMenu[langue]['simulateurcombat']+'" src="images/carte/rien.gif" width="25" height="30"/></div></a>'
+'<a href="'+racine+'simulateurChasse.php" class="boutonSimulateurChasse" title="'+nomMenu[langue]['simulateurchasse']+'"><div><img alt="'+nomMenu[langue]['simulateurchasse']+'" src="images/carte/rien.gif" width="25" height="30"/></div></a>'
+'<a href="'+racine+'simulateurDuree.php" class="boutonSimulateurDuree" title="'+nomMenu[langue]['simulateurduree']+'"><div><img alt="'+nomMenu[langue]['simulateurduree']+'" src="images/carte/rien.gif" width="25" height="30"/></div></a>'
+'<a href="'+racine+'simulateurPonte.php" class="boutonReine" title="'+nomMenu[langue]['simulateurponte']+'"><div><img alt="'+nomMenu[langue]['simulateurponte']+'" src="images/carte/rien.gif" width="25" height="30"/></div></a>'
+'<a href="'+racine+'amis.php" class="boutonListeAmis" title="'+nomMenu[langue]['listeamis']+'"><div><img alt="'+nomMenu[langue]['listeamis']+'" src="images/carte/rien.gif" width="25" height="30"/></div></a>'
+'<a href="'+racine+'blocnote.php" class="boutonBlocNote" title="'+nomMenu[langue]['profil']+'"><div><img alt="'+nomMenu[langue]['profil']+'" src="images/carte/rien.gif" width="25" height="30"/></div></a></div>';
}

boiteComptePlus +='<table style="">'
   +'<tr onclick=\'document.location.href="'+racine+'Reine.php"\' class="lien" title="'+nomMenu[langue]['reine']+'" >'
        +'<td><a href="'+racine+'Reine.php"><div class="mini_icone_ponte"></div></a></td>'
		+'<td colspan="2"> <a href="'+racine+'Reine.php" ><span class="ligne_boite_compte_plus">'+nom_unite+'</span><br/><span class="ligne_boite_compte_plus" id="tempsUnite"></span></a></td>'
	+'</tr>';
if (temps_unite!='')
	{boiteComptePlus +='<script language="JavaScript">$(function() {resteTemps('+temps_unite+',"tempsUnite");});</script>';}
		
boiteComptePlus +='<tr onclick=\'document.location.href="'+racine+'construction.php"\' class="lien"  title="'+nomMenu[langue]['construction']+'">'
        +'<td><a href="'+racine+'construction.php"><div class="mini_icone_construction"></div></a></td>'
		+'<td colspan="2"><a href="'+racine+'construction.php"><span class="ligne_boite_compte_plus">'+nom_batiment+'</span><br/><span class="ligne_boite_compte_plus" id="tempsBatiment"></span></a></td>'
   +'</tr>';
if (temps_batiment!='')
	{boiteComptePlus +='<script language="JavaScript">$(function() {resteTemps('+temps_batiment+',"tempsBatiment");});</script>';}
	
boiteComptePlus +='<tr onclick=\'document.location.href="'+racine+'laboratoire.php"\' class="lien"  title="'+nomMenu[langue]['laboratoire']+'">'
        +'<td><a href="'+racine+'laboratoire.php"><div class="mini_icone_recherche"></div></a></td>'
		+'<td colspan="2"><a href="'+racine+'laboratoire.php"><span class="ligne_boite_compte_plus">'+nom_recherche+'</span><br/><span class="ligne_boite_compte_plus" id="tempsRecherche"></span></a></td>'
   +'</tr>';
if (temps_recherche!='')
	{boiteComptePlus +='<script language="JavaScript">$(function() {resteTemps('+temps_recherche+',"tempsRecherche");});</script>';}

if(pourcentage_rien !=0)
	{var largeur_background_rien =Math.round((parseInt(pourcentage_rien)*100)/(parseInt(pourcentage_rien)+parseInt(pourcentage_materiaux)));}
else
	{var largeur_background_rien =0;}
boiteComptePlus +='<tr onclick=\'document.location.href="'+racine+'Ressources.php"\' class="lien"  title="'+nomMenu[langue]['ressources']+'"><td';
if (pourcentage_rien!= 0)
	{boiteComptePlus +=' style="color:#f20c0c" ';}
boiteComptePlus +='><a href="'+racine+'Ressources.php" class="icone_tdc"></a></td>'
+'<td><a href="'+racine+'Ressources.php"><span class="tdc">'+tdc+'</span></a></td>'
+'<td  title= "'+title_tdc+'">'
+'<div class="jauge" style="background-color:green"><!-- couleur bouffe-->'
+'<div class="decor_jauge"></div>'
+'<div class="plein_marron" style="width:'+Math.round(parseInt(pourcentage_rien)+parseInt(pourcentage_materiaux))+'%;" > <!-- largeur materiaux + rien, couleur materiaux-->'
+'<div class="plein" style="width:'+largeur_background_rien+'% ; float :left" >'
+'</div><!-- largeur rien, couleur rien-->'
+'</div>'
+'</div>'
+'</td>'
+'</tr>';
boiteComptePlus +='<tr onclick=\'document.location.href="'+racine+'Armee.php"\' class="lien"  title="'+nomMenu[langue]['armee']+'">'
+'<td><a href="'+racine+'Armee.php" class="icone_pomme"></a></td>'
+'<td><a href="'+racine+'Armee.php"><span class="production_nourriture">'+solde_consommation+'</span></a></td>'
+'<td style="width:50px;overflow:hidden;" title="'+nomMenu[langue]['production']+' : '+title_consommation+'">'
+'<div class="jauge" style="background-color:green">'
+'<div class="decor_jauge"></div>'
+'<div class="plein" style="width :'+pourcentage_armee+'% ; float :left; background-color : #d41b1b" >'
+'</div></div>'
+'</td>'
+'</tr>'
+'</table>';

boiteComptePlus +='<form  method="post" action="classementAlliance.php" style="text-align:center;margin-top:5px;">'
+'<input type="text" name="requete" id="recherche" placeholder="'+nomMenu[langue]['joueuroualliance']+'" size="20"/>'
+'<input type="image" class="icone_loupe" value="submit" title="'+nomMenu[langue]['rechercher']+'" src="images/carte/rien.gif" name="recherche" align="center"/>'
+'</form>';

boiteComptePlus +=menu_rapide+'</div>';

$('#boiteComptePlus').html(boiteComptePlus);
}

function resteTemps(zetime, nom_id,langue) {
if (!langue){langue='fr_FR';}
if (zetime>0)
	{
	var jours = Math.floor(zetime / 86400);
	var temps = zetime-jours*86400;
	var heures = Math.floor(temps / 3600);
	var minutes = Math.floor( ( (temps / 3600) - Math.floor(temps / 3600) ) * 60);
	var secondes = temps - ((Math.floor(temps / 60)) * 60);
	var message = "";

	if(jours>=1)
		message+= jours+nomMenu[langue]['mini_jour']+' ';
	if(heures>=1)
		message+= heures+nomMenu[langue]['mini_heure']+' ';
	if(minutes>=1)
		message += minutes+nomMenu[langue]['mini_minute']+' ';
	if(secondes>=1)
		message += secondes+nomMenu[langue]['mini_seconde']+' ';
	$('#'+nom_id).html(message);
	var restant = zetime - 1;
	setTimeout("resteTemps("+restant+ ",'"+ nom_id +"')", 1000);
	}
else 
	{$('#'+nom_id).html("0 sec");}
}
function changerScreenshot(sens){
//alert ($('#numero_screenshot').html());
var numero= $('#numero_screenshot').html();
numero = parseInt(numero) + parseInt(sens) ;
if (numero < 1){numero = 4;}
if (numero > 4){numero = 1;}
$('#screenshot').css('background-position','0px -'+134*(numero-1)+'px');
$('#numero_screenshot').html(numero);
}
function changerMoyenDePaiement(id) {
if( id != 'paypal' ) { document.getElementById('paypal').style.display = 'none' ;document.getElementById('fleche_paypal').style.display = 'none' ;} 
else { document.getElementById('paypal').style.display = '';document.getElementById('fleche_paypal').style.display = '';}
if( id != 'sms' ) { document.getElementById('sms').style.display = 'none' ;document.getElementById('fleche_sms').style.display = 'none' ;} 
else { document.getElementById('sms').style.display = '';document.getElementById('fleche_sms').style.display = '';}
if( id != 'telephone' ) { document.getElementById('telephone').style.display = 'none' ;document.getElementById('fleche_telephone').style.display = 'none' ;}
else { document.getElementById('telephone').style.display = '';document.getElementById('fleche_telephone').style.display = '';}
if( id != 'internet_plus' ) { document.getElementById('internet_plus').style.display = 'none' ;document.getElementById('fleche_internet_plus').style.display = 'none' ;}
else { document.getElementById('internet_plus').style.display = '';document.getElementById('fleche_internet_plus').style.display = '';}
if( id != 'paysafecard' ) { document.getElementById('paysafecard').style.display = 'none' ;document.getElementById('fleche_paysafecard').style.display = 'none' ;}
else { document.getElementById('paysafecard').style.display = '';document.getElementById('fleche_paysafecard').style.display = '';}
}
// Pour la page Reine
function reste_unite(zetime, nom_id, nom_unite, nb_unite) {
var nom = nom_unite;
var nb = nb_unite;
if (zetime>0) 
	{
	var nb_seconde = nb / zetime;
	nb -= nb_seconde;
	var message = "";
	var nb_secondes_affichees = Math.ceil( nb );
	message= nb_secondes_affichees.nombreFormate(0) + " " + nom;
	document.getElementById(nom_id).innerHTML = message;
	var restant = zetime - 1;
	setTimeout("reste_unite('" + restant + "','" + nom_id +"','" + nom +"','" + nb +"')", 1000);
	}
else 
	{
	document.getElementById(nom_id).innerHTML = "0 "+ nom_unite ;
	setTimeout("redirectReine()", 1);
	}
}

function majChat(typeChat){
$.ajax({
	url : "appelAjax.php",
	type : 'GET',
	data: "actualiserChat="+typeChat,
	success : function(data){
		$('#anciensMessages').prepend($('#nouveauxMessages').html());
		$('#nouveauxMessages').html(data.message);
		$('#NonLuMess').html(data.NonLuMess);
		$('#NonLuRapComb').html(data.NonLuRapComb);
		$('#NonLuRapChass').html(data.NonLuRapChass);
	}
});
}
var timeout_chat;
function actualiserAuto(typeChat,i) {
if (!i) 
	{i = 50;}
else
	{i=i-1;majChat(typeChat);}
	
if(i>1)
	{
	timeout_chat = setTimeout(function () {
		actualiserAuto(typeChat,i);
		}, 5000);
	}
else
	{$('#actualiser').css('display','');$('#actualiserAuto').attr('checked', false);}
}
function envoiChat(typeChat){
$.ajax({
	url : "appelAjax.php",
	type : 'GET',
	data: "actualiserChat="+typeChat+"&message="+encodeURIComponent($('#message').val())+"&inputCouleur="+$('#inputCouleur').val()+'&t='+$('#t').val(),
	success : function(data){
		$('#anciensMessages').prepend($('#nouveauxMessages').html());
		$('#nouveauxMessages').html(data.message);
		$('#NonLuMess').html(data.NonLuMess);
		$('#NonLuRapComb').html(data.NonLuRapComb);
		$('#NonLuRapChass').html(data.NonLuRapChass);
	}
});
$('#message').val('').focus();
if($('#actualiserAuto').is(':checked')==true)
	{clearTimeout(timeout_chat);actualiserAuto(typeChat);}
}
