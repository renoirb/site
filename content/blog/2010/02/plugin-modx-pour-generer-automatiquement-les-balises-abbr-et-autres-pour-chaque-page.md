---
locale: fr-CA
title: >-
  Plugin MODx pour générer automatiquement les balises ABBR et autres pour
  chaque page
canonical: >-
  https://renoirboulanger.com/blog/2010/02/plugin-modx-pour-generer-automatiquement-les-balises-abbr-et-autres-pour-chaque-page/
status: publish
revising: true
images: true
created: '2010-02-12'
updated: '2013-03-27'
tags:
  - accessibility
  - html
  - integration
  - web
categories:
  - portfolio
  - programmation
excerpt: ''
---

<div style="width:230px;float:right;"><img src="http://renoirboulanger.com/wp-content/uploads/2010/01/modx_logo.png" alt="" title="MODx" width="230" height="64" style="border:none;float:right;margin-top:10px;margin-right:10px;" /></div>
<p>Il s'agit d'un plugin que j'ai fait, en <abbr title="PHP Hypertext Pre-Processor Languagte version 4." lang="en">PHP 4</abbr> il y a deux ans pour <a href="http://modxcms.com/download/">MODx 0.9.6.3</a>, pour un site web et je pense qu'il vaut la peine que je partage le code avec la communauté.</p>

<p>Le plugin sert a entourer des mots définis dans un fichier <abbr title="Coma Separated Values." lang="en">CSV</abbr> (séparé par des virgules) dans le contenu qui est retourné par le CMS. </p>
<p>&nbsp;</p>

<h3>LA SITUATION</h3>
<p>Lorsque je travaillait sur ce site web, mon employeur et mon collègue nous étions donné comme objectif de paufiner l'<a href="http://www.google.ca/search?hl=fr&safe=off&client=firefox-a&rls=org.mozilla:en-US:official&hs=8Lp&defl=fr&q=define:Ergonomie&ei=6PF0S7SiDcH08QbV2tnzCQ&sa=X&oi=glossary_definition&ct=title&ved=0CAcQkAE">Ergonomie</a> et l'<a href="http://www.google.ca/search?hl=fr&safe=off&client=firefox-a&rls=org.mozilla:en-US:official&hs=GhU&defl=fr&q=define:Accessibilit%C3%A9&ei=A_J0S6LQBNDj8QaLp6z0CQ&sa=X&oi=glossary_definition&ct=title&ved=0CAcQkAE">Accessibilité</a> du contenu. Ce qui est dommage c'est qu'il n'a jamais été évalué par <a href="http://www.accessibiliteweb.com/">AccessibilitéWeb</a>. J'ai pourtant reçu la formation pour évaluer les sites... mais je préfère, personnellement, programmer des applications.</p>
<p>&nbsp;</p>
<!--more-->

<h3>LES CRITÈRES QUE CE PLUGIN REMPLIT</h3>
<p>Lors de la réalisation du site je n'ai pas noté les points d'évaluation du <abbr title="Web Content Accessibility Guidelines version 1." lang="en">WCAG 1.0</abbr> que cet utilitaire remplit, mais en gros, d'un point de vue <em>utilisabilité</em> :</p>
<ul>
	<li>L'édimestre n'a pas a écrire à la main les balises ABBR, DFN, et ACRONYM, le plugin le fait tout seul;</li>
	<li>La liste est dans un fichier statique, ce qui rend facile, pour l'édimestre, d'ajouter de nouvelles définitions;</li>
	<li>Pouvoir automatiser le remplacement des abréviations dans des balises valides;</li>
</ul>
<p>Cette liste ne parle pas des critères d'évaluations mais si vous voulez en savoir plus au sujet de l'Accessibilité; je vous recommande chaudement de visiter la «<a href="http://accessibiliteweb.org/bdc/directives/documents-reference/">Base de conaissances</a>» de la fondation <a href="http://accessibiliteweb.org/">AccessibilitéWeb.org</a> qui a fait un IMMENSE EFFORT de vulgariation et de collaboration a l'élaboration du <abbr title="Web Content Accessibility Guidelines version 2." lang="en">WCAG 2.0</abbr> et de sa version française.</p>
<p>&nbsp;</p>

<h3>EXEMPLE</h3>
<p>Plutôt que d'écrire des paragraphes pour expliquer comment fonctionne le plugin, je vous propose de voir par un exemple</p>

<p>Le document <tt><abbr title="Coma Separated Values." lang="en">CSV</abbr></tt> a plusieurs lignes similaires à...</p>
<pre lang="html">fr;dfn;FAQ;Foire Aux Questions</pre>
<p>Avec le contenu de la page il remplacera les occurences dans le document HTML généré (même après la cache):</p>
<pre lang="html">(...) venez lire <strong>la FAQ</strong> (...)</pre>
<p>En le transformant ainsi...</p>
<pre lang="html">(...) venez lire <strong>la <dfn title="Foire Aux Questions">FAQ</dfn></strong> (...)</pre>
<p>Le plugin est configuré pour faire cette transformation pour tout les mots définis dans le CSV au moment du rendu de la page chez le client (trigger MODx "<tt>OnWebPagePrerender</tt>") ce qui évite d'avoir des définitions empilés.</p>
<p>&nbsp;</p>

<h3>UTILISER LE PLUGIN</h3>
<div style="background-color:#FFEEEE;border:1px solid #666600;color:#660000;margin:20px;padding:20px 30px;text-align:center;"><h4>Avertissement!<br />
</h4><p>Le plugin a été fait à l'époque de <a href="http://modxcms.com/download/">MODx 0.9.6.x</a> (regardez tout au bas). Il risque de bien fonctionner dans cette version mais n'est pas assuré de fonctionner dans la version stable présente. Vous aurez été avertis!</p>
<p>Si vous voulez que j'en fasse une adaptation, <a href="http://renoirboulanger.com/2010/02/plugin-modx-pour-generer-automatiquement-les-balises-abbr-et-autres-pour-chaque-page/#vote"><strong>laissez une note a ce billet</strong></a>!.</p></div>
<p>On ne peut s'attendre à simplement installer le plugin et que tout fonctionne. Voici les prérequis pour pouvoir utiliser le plugin</p>
<ul>
	<li>Au niveau 0 (enfant de la racine dans MODx) il y ait un répertoire servant à spécifier la langue de ses enfants.</li>
	<li><a href="http://renoirboulanger.com/wp-content/uploads/2010/02/ContentAbbrGenerator/ContentAbbrGenerator.txt"><strong>ContentAbbrGenerator</strong></a> (le plugin en question)<br />
Un plugin de base qui était fourni avec la version 0.9.6.x qui fournit le numéro ID de la page parent absolu</li>
	<li>Il faut 2 Snippet de code (fonctions PHP spécifique a MODx) pour utiliser mon plugin
<ul>
	<li><a href="http://renoirboulanger.com/wp-content/uploads/2010/02/ContentAbbrGenerator/Lang.txt">Lang</a><br />
Sert, justement a aller chercher le ID de la page ci-haut mentionnée.</li>
	<li><a href="http://renoirboulanger.com/wp-content/uploads/2010/02/ContentAbbrGenerator/UltimateParent.txt">UltimateParent</a><br />
Un plugin de base qui était fourni avec la version 0.9.6.x qui fournit le numéro ID de la page parent absolu</li>
</ul></li>
	<li><a href="http://renoirboulanger.com/wp-content/uploads/2010/02/ContentAbbrGenerator/abbreviations.txt">abbreviations.txt</a><br />
Le fichier CSV qui contient les valeurs pour le remplacement des balises. Le contenu de ce fichier peut être une page dans MODx (si <a href="http://httpd.apache.org/docs/2.0/mod/mod_rewrite.html">mod_rewrite</a> est activé) mais il doit être définitivement être disponible à l'adresse fournie dans le Snippet <a href="http://renoirboulanger.com/wp-content/uploads/2010/02/ContentAbbrGenerator/ContentAbbrGenerator.txt">ContentAbbrGenerator</a> définie par la variable de plugin "<tt>cagPluginAttrOverrideFileLoc</tt>"</li>
</ul>
<p>&nbsp;</p>

<h3>TÉLÉCHARGER ET INSTALLER</h3>
<p>Suivre les instructions dans chaque fichier de l'<strong><a href="http://renoirboulanger.com/wp-content/uploads/2010/02/ContentAbbrGenerator.tar.gz">Archive</a></strong></p>
<p>&nbsp;</p>

<h3>SOURCES ET  <em>CRÉDITS</em></h3>
<p>J'ai pris soin dans le code de laisser les notes des auteurs qui m'ont inspiré avec les pages qui parlent de ce que j'ai utilisé pour produire le plugin. Je n'ai rien inventé en soi, j'ai simplement produit un plugin pour remplir le besoin que j'avait</p>
<p>&nbsp;</p>

<h3>NOTE</h3>
<p>Vous avez le droit et la liberté d'utiliser le code que je rend disponible pour téléchargement car je n'ai pas mise sous licence. Considérez-le comme un don</p>
<p>&nbsp;</p>

<h3><a name="vote"></a>A VOS COMMENTAIRES...</h3>
<p>J'ai déjà considéré commencer a modifier ce plugin pour le rendre fonctionnel dans WordPress mais j'ai d'autres priorités. Alors, si vous avez un intérêt à ce que je produise un plugin pour WordPress ou MODx (pour la version courrante) laissez moi un commentaire!</p>