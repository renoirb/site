---
locale: fr-CA
title: Bug trouvé et corrigé sur un thème WordPress rtTheme
canonical: >-
  https://renoirboulanger.com/blog/2010/07/bug-trouve-et-corrige-sur-un-theme-wordpress-rttheme/
status: publish
revising: true
created: '2010-07-01'
updated: '2013-03-27'
tags: []
categories:
  - portfolio
  - programmation
excerpt: ''
---

<p>Depuis que nous avons fondé <a href="http://evocatio.com/" rel="nofollow">EVOCATIO Solutions technologiques</a> nous avons pris une position d'experts dans le domaine des acrobaties techniques. C'est ce qu'on faisait dans nos journées de tout les jours <em>avant</em>.</p>
<p>Ce que j'avait pas pensé c'est que je trouverait de la demande pour des tâches pointues et qu'on devait  «faire marcher». L'une d'elles a été fait, justement, pour un ami que je respecte beaucoup: <a href="http://geoffroigaron.com/">Geoffroi Garon</a>.</p>
<p>Avec sa permission je publie ici comment j'ai réglé un petit bug Javascript. Rien d'extraordinaire mais quand même bête lorsqu'on s'attend a ce que de quoi fonctionne qu'on a acheté et qu'il ne fonctionne pas. <ins>Finalement, tout juste avant de publier ce billet, j'ai réalisé que, l'auteur (<a href="http://twitter.com/ftolgacan">@ftolgacan</a>) a réparé le code. Comme quoi j'ai pris trop de temps avant de le publier.</ins></p>
<p>Il s'agit d'un thème adapté qui a été acheté sur <a href="http://themeforest.net/">ThemeForest</a> pour un site fait en <a href="http://www.wordpress.org">WordPress</a>. Étant donné que le thème fourni n'a pas vraiment d'endroit ou proposer les correctifs j'ai décidé de publier sur mon blogue.</p>
<p>Je contribue en français mais ferai une courte explication de ma correction en anglais sur l'<a href="http://themeforest.net/item/rttheme-6-bussiness-theme-5-in-1-for-wordpress/83648">item précis sur le site officiel</a>.
<div>Pour voir le démo du thème, allez dans la section "Preview" puis dans la section "products" du site qui est illustré.</div></p>

<!--more-->

<h3>Explication du problème</h3>
<p>Lorsqu'on achète un thème on s'attend a ce que tout fonctionne... même avec les choses qu'on peut configurer dans le paneau d'administration. D'un point de vue fonctionnel... ça fait du sens.</p>
<p>Dans le cas ici ce n'était PAS le cas.</p>
<p><img class="alignright size-medium wp-image-2268" title="Les «Tabs» illustrant un produit provenant d'une liste" src="http://renoirboulanger.com/wp-content/uploads/2010/07/mathetmots_tabs-300x141.png" alt="Les «Tabs» illustrant un produit provenant d'une liste" width="300" height="141" /> Le problème était le suivant. Une fois avoir modifié une liste d'items dans le catalogue utilisant le panneau de contrôle de WordPress. Un mini javascript permettant d'avoir une liste avec Tabs (a droite).</p>
<p>Mais les autres «tab» ne fonctionnaient pas et on ne comprenait pas pourquoi.</p>
<p>C'est là que j'ai intervenu.</p>

<h3>Explication de la problématique</h3>

<p>Le problème consistait a la génération des attributs id="" une liste UL avec un thème et où le thème allait chercher ses valeurs du <em>id</em>. Ci-bas on voit comment Firebug voit le code généré.</p>

<center>[caption id="attachment_2267" align="aligncenter" width="480" caption="Les elements de la liste (LI) avec l&#39;attribut id (exemple: id=&quot;technical_details&quot;) est générée à partir d&#39;une variable qui utilise le input d&#39;un usager (dans le panneau de contrôle WordPress) qui n&#39;a aucune idée de l&#39;incidence possible de son entrée (espaces, accents, etc)."]<img class="size-full wp-image-2267 " title="Markup HTML débug avec Firebug" src="http://renoirboulanger.com/wp-content/uploads/2010/07/mathetmots_bug_markup.png" alt="Les deux listes avec les ID générés" width="480" height="211" />[/caption]</center>

<p>Cet exemple de code (ci-haut) est fonctionnel. Mais dans le cas du client, les <tt>&lt;div id="" /&gt;</tt>  de la liste <tt>&lt;div id="content" /&gt;</tt> avaient des noms qui provenaient du <strong>nom</strong> de l'item (je ne peut illustrer où ils prenaient la valeur... je n'ai plus accès pour faire une capture d'écran).</p>

<h3>La solution au problème</h3>
<p>Au lieu d'utiliser un input de l'usager comme id d'une liste. Utiliser le fait qu'on sait que le <tt>&lt;div <strong>id="tabs"</strong> /&gt;</tt> a deux <em>enfants</em>... <tt>&lt;div <strong>class="product_tabs" /&gt;</strong></tt> (avec une liste ordonnée... pour les boutons qui seront transformés en «tab») et <tt>&lt;div <strong>id="content" /&gt;</strong></tt> (qui a une liste dans le même ordre que "product_tabs"). J'ai donc utilisé ce concept.</p>


<h3>Le code</h3>
<p>Comme c'est étrange. J'ai écrit ce billet que j'ai commencé en Mai lorsque j'ai eu a faire le petit travail. Depuis le temps, le développeur a réglé le problème. Ce que vous voyez de commenté (précédé par <tt>//</tt> et en vert) dans "Le code original" est ce qui était utilisé en <a href="http://jquery.com">jQuery</a>.</p>
<p>J'ai donc trop pris de temps avant de publier ma solution :)</p>

<h4>Le code original</h4>
Près de la <strong>ligne 107</strong> dans <a href="http://www.mathetmots.com/wp-content/themes/rttheme6/js/script.js">ce fichier</a>.
<pre lang="javascript">
//product tabs
	$(document).ready(function(){
			var tabs= $("#tabs ul li");
			var content = $("#tabs #content");
			var kids = content.children();
			kids.attr("style","display:none;");
			$("#tabs #content div:first").attr("style","display:block;");
			tabs.click(
				function(){
//					var show=$(this).attr("title");
					var show=$("#tabs ul li").index(this);
					
					//change clicked tab class
					$("#tabs ul li").removeClass("active");
					$(this).addClass("active");
					//view clicked tab content
					kids.attr("style","display:none;");
					content.slideUp(400);
					$(function(){
						content.slideUp(400);
//						$("#"+show+"").attr("style","display:block;");
						$("#tabs #content div:eq("+show+")").attr("style","display:block;");
						content.slideDown(400);
					});
				}
			);
	});
</pre>
Le code tel qu'il est aujourd'hui a la <strong>ligne 10</strong> et <strong>ligne 21</strong> (qui est commenté mais qui n'était pas comme ça avant) illustre qu'il utilisait l'attribut <strong>title</strong>.

<h4>Le code remplacé par</h4>
<pre lang="javascript">
//product tabs
	$(document).ready(function(){
			var tabs= $("#tabs ul li");
			var content = $("#tabs #content");
			var kids = content.children();
			kids.attr("style","display:none;");
			$("#tabs #content div:first").attr("style","display:block;");
			tabs.click(
				function(){
					var show=$("#tabs ul li").index(this);	
					//change clicked tab class
					$("#tabs ul li").removeClass("active");
					$(this).addClass("active");
					//view clicked tab content
					kids.attr("style","display:none;");
					content.slideUp(400);
					$(function(){
						content.slideUp(400);
						$("#tabs #content div:eq("+show+")").attr("style","display:block;");
						content.slideDown(400);
					});
				}
			);
	});
</pre>
Ici c'est le code que j'avait donné a <a href="http://www.geoffroigaron.com">Geoffroi</a> le 31 mai dernier. 

<h3>Finalement</h3>
<p>J'ai pris trop de temps pour publier mon billet de solution et il a été corrigé. Tant mieux!</p>