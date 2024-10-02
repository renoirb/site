---
locale: fr-CA
title: Manipulation des liens extérieurs et les popup pour améliorer l'Accessibilité
canonical: >-
  https://renoirboulanger.com/blog/2009/08/manipulation-des-liens-exterieurs-et-les-popup-pour-ameliorer-laccessibilite/
status: publish
revising: true
created: '2009-08-23'
updated: '2013-03-27'
tags:
  - accessibilite
  - tutoriels
  - web
categories:
  - programmation
excerpt: ''
---

<p>En rédigeant <a href="http://renoirboulanger.com/blog/2009/08/accessibilite-et-les-liens-externes/"><em>Accessibilité et les liens externes</em></a> j'ai réalisé qu'il y aurait trop de matière pour être lue dans un simple billet. Alors j'ai décidé d'aller plus en profondeur et de le documenter.</p>

<p>Cet article explique une méthode simple pour transformer tout les liens d'une page qui vont à l'extérieur du site courrant en ajoutant un icône approprié et la note disant qu'une fenêtre s'ouvrira</p>
<!--more-->
<p>&nbsp;</p>

<h3>Les méthodes généralement utilisés</h3>
<p>Actuellement, il existe plusieurs manières de faire. Sauf qu'elles demandent souvent de le faire à la main pour <em>chaque lien</em> et ca peut être lourd.</p>

<p>Surtout pour la rédaction qui se fout un peu de faire du <em>html propre</em></p>
<p>&nbsp;</p>


<h3>Comment faire un pop-up</h3>
<p>Voici quelques manières... rien d'extravagant.</p>
<div>
<ul>
	<li><strong>Méthode target</strong><pre lang="html"><a href="somelink.php" target="_blank">Link text</a></pre>Mais le problème c'est que l'attribut <tt>target=""</tt> est maintenant obselete. Donc <strong>on ne devrait pas l'utiliser</strong><br /><br /></li>
	<li><strong>Méthode href javascript window.open</strong><pre lang="html"><a href="javascript:window.open('http://renoirboulanger.com/','mywindow','width=400,height=200')">Link text</a></pre> Fonctionnerait bien. Mais du point de vue SEO et Crawling... on complique la tâche et ne devrait pas etre utilisé car l'attribut <tt>href=""</tt> est fait pour avoir le URL.<br />Elle n'est pas recommandée parceque la balise est altérée de son usage natuel: faire un lien et que l'attribut <tt>href</tt> dise QUOI lier.
<br /><br /></li>
	<li><strong>Méthode onClick</strong><pre lang="html"><a href="somelink.php" onclick="window.open('http://renoirboulanger.com/','mywindow','width=400,height=200')">Link text</a></pre>Est une bonne méthode mais <strong>pas facile a expliquer pour l'équipe de rédaction.</strong><br /><br /></li>
</ul>
</div>

<p>Ces méthodes font bel et bien le travail mais certaines d'entre elles (je ne les ai pas toutes listés) sont sémantiquement invalides... et donne un <a rel="nofollow" href="http://en.wikipedia.org/wiki/Tag_soup">du tagsoup</a></p>
<p>&nbsp;</p>


<h3>Règles pour les liens extérieurs</h3>
<ul>
	<li>Une balise html doit être utilisée pour son usage</li>
	<li>Le <em>markup</em> doit être le plus simple possible pour éviter les erreurs d'entrée de l'édimestre.</li>
	<li>On ne peut pas utiliser le <tt>CSS</tt> pour ajouter les icones
<strong>Note</strong>: Parceque les <em>Lecteurs d'écran</em> (aveugles) "lisent" le texte et non pas ce qui a été modifié via <tt>CSS</tt>.</li>
	<li>On ne peut pas utiliser de Javascript invalide
<strong>Note</strong>: Si on y va via le DOM, avec les manipulations valide, ca passe bien: bref on évite <tt>innerHTML</tt> et on se fie aux <a href="http://www.w3.org/DOM/">Spécifications du DOM</a></li>
</ul>
<p>D'autres règles pourraient être mentionnées. Mais le message peut bien se résumer ainsi.
<blockquote><strong>En <tt>HTML</tt>, on doit utiliser les balises pour l'usage qu'elles sont destinés à faire.</strong></blockquote>
... il ne reste pas tant d'options. La <a href="#mamethode">méthode que j'ai élaboré répond a toutes ces conditions</a>.</p>
<p>&nbsp;</p>


<h3>Les <em>autres</em> choses que le lien doit faire</h3>
<p>Dans les lignes guides de l'accessibilité du web (et en ergonomie/utilisabilité) on mentionne
<blockquote>Qu'on doit avoir un indice qu'un lien est destiné à ouvrir <em>une page extérieure</em> et/ou <em>un popup</em></blockquote>
Source: ma mémoire... j'ai pas trouvé de lien référence. Si vous en trouvez, faites <a href="/me-joindre/">moi signe</a></p>

<p>ça veut donc dire qu'en plus de faire le lien en tant que tel, il faut ajouter une <em>image</em> dans le lien qui va annoncer le popup... Ouf!</p>
<p>&nbsp;</p>


<h3>Ce qu'il faudrait...</h3>
<p>En gros, il faudrait, que pour chaque lien...
<ul>
	<li>Avertir qu'il y a un lien externe dans un icône image ajouté automatiquement</li>
	<li>Placer l'icone avec la bonne balise et ne pas utiliser le <tt>CSS</tt>.</li>
	<li>Avoir un <tt>alt=""</tt> pour l'image (icône) car sinon c'est du <em>html invalide</em> en plus qu'il servirait a avertir</li>
	<li>Que le <tt>alt=""</tt> soit dans la langue utilisée dans le site</li>
	<li>Que le lien soit utilisable <em>SANS JAVASCRIPT</em> donc, on oublie le <tt>href="javascript..."</tt>
<strong>Note</strong>: C'est une approche qui veut que l'on puise "<em>dégrader élégamment</em>" le code dans la "<em>pire des situations</em>"</li>
</ul></p>
<p>&nbsp;</p>


<h3><a name="mamethode"></a>la Manière idéale</h3>
<p>Il s'agit d'une méthode que j'ai élaborée avec un ancien collègue que l'on surnomme (alias) <em>Reynold Kirby</em> pour être valide avec toutes les règles ci-haut mentionnés.
<ul>
	<li>Lister tout les liens externes qui commencent par <tt>http://</tt>;</li>
	<li>Éliminer de la liste les domaines qu'on ne veut pas qui se fassent transformer;</li>
	<li>Créer, via le <tt>DOM</tt>, une image AVEC le bon <tt>alt=""</tt>;</li>
	<li>Ajouter un attribut <tt>rel="popup"</tt> pour le handler de popup;</li>
	<li>Ajouter, finalement, le handler <tt>onclick=""</tt>.</li>
</ul></p>

<h4>La "pogne"</h4>
<p>On va utiliser le <tt>onclick=""</tt>, mais généré automatiquement via Javascript. Car de toute façon il est ridicule de s'interdire d'utiliser javascipt. Dans ce contexte, ce serait donc acceptable. Et toujours mieux que de faire <tt>target="_blank"</tt> et/ou de demander aux édimestres de <em>faire chaque lien à bras</em> (!!)
</p>

<h4>Le code</h4>
<p>Simplement ajouter ce bout de code Javascript aux autres scripts du site.
<pre lang="javascript">
var strPopUpWarning = 'Lien sur un site externe qui va ouvrir dans une nouvelle fenetre.';

function addImageAtExternalLinks(){
  var anchorList = document.getElementsByTagName('a');
  for(var i=0; i < anchorList.length; i++) {
  /**
    * Remarquez les indexOf()... remplacez renoirboulanger 
    * par votre propre nom de domaine... addthis a été ajouté 
    * au cas ou vous avez un service du genre
    **/ 
    if(anchorList[i].href != '' &&
    anchorList[i].href.indexOf('renoirboulanger') == -1 &&
    anchorList[i].href.indexOf('javascript') == -1 &&
    anchorList[i].href.indexOf('addthis') == -1) {
      var elContainer = anchorList[i];
      var createdEl = document.createElement('img');
      createdEl.alt = strPopUpWarning;
      createdEl.src = '/icones/extlink.gif';
      elContainer.setAttribute('rel','popup');
      elContainer.appendChild(createdEl);
      elContainer.onclick = dopopup;
    }
  }
}

/* Ensuite... l'appel */
addImageAtExternalLinks();

/**
 * Fonctions pour les popup
 *
 * Permet de crere un popup en faisant un lien
 * <a href="http://www.othersite.com/url/" />text (usage normal)
 * Mais creer des liens popup au besoin selon des specifites que l'on veut. Donc, un
 *  lien comme ceux ci  genereront...)
 *   <a href="http://www.othersite.com/url/" rel="popup"></a>text et aussi
 *   <a href="http://www.othersite.com/url/" rel="popup standard 800 600"></a>text
 *     (un popup de 800x600 avec toolbars)
 *   <a href="http://www.othersite.com/url/" rel="popup console 800 600"></a>text
 *     (un popup de 800x600 mais sans toolbars)
 *   <a href="http://www.othersite.com/url/" rel="popup fullscreen"></a>text (un popup plein ecran)
 *
 * En plus, ce qui a ete ajoute est la possibilite (avec addImageAtExternalLinks();) de scanner toutes les
 * href de la page courrante qui ne sont pas interieurs (ou acceptes) et d'y ajouter une image qui dit que c'est
 * un popup (via le DOM) et qui annonce que ca va ouvrir un site exterieur... bref qui prendrait
 *
 * @author Renoir Boulanger <lunique @renoirboulanger.com>
 * @author Reynold Kirby (alias) <reynold .kirby@gmail.com>
 **/
function dopopup(e){
  // Source: http://www.accessify.com/features/tutorials/the-perfect-popup/
  //set defaults - if nothing in rel attrib, these will be used
  var t = "standard";
  var w = null;
  var h = null;

  //look for parameters
  attribs = this.rel.split(" ");
  if (attribs[1]!=null) {t = attribs[1];}
  if (attribs[2]!=null) {w = attribs[2];}
  if (attribs[3]!=null) {h = attribs[3];}

  //call the popup script
  popUpWin(this.href,t,w,h);

  //cancel the default link action if pop-up activated
  if (window.event) {
    window.event.returnValue = false;
    window.event.cancelBubble = true;
  } else if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
}

function popUpWin(url, type, strWidth, strHeight){
  closeWin();
  //calls function to close pop-up if already open,
  //to ensure it's re-opened every time, retainining focus
  type = type.toLowerCase();
  if (type == "fullscreen"){
    strWidth = screen.availWidth;
    strHeight = screen.availHeight;
  }
  var tools="";
  if (type == "standard")
  tools = "resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width="+strWidth+",height="+strHeight+",top=0,left=0";
  if (type == "console" || type == "fullscreen")
    tools = "resizable,toolbar=no,location=no,scrollbars=no,width="+strWidth+",height="+strHeight+",left=0,top=0";
  newWindow = window.open(url, 'newWin', tools);
  newWindow.focus();
}
var newWindow = null;

function closeWin(){

  if (newWindow != null){
    if(!newWindow.closed)
      newWindow.close();
  }
}</reynold></lunique></pre></p>