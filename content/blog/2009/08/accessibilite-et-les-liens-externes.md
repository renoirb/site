---
locale: fr-CA
title: Accessibilité et les liens externes
canonical: https://renoirboulanger.com/blog/2009/08/accessibilite-et-les-liens-externes/
status: publish
revising: true
images: true
created: '2009-08-20'
updated: '2013-03-27'
tags:
  - accessibility
  - html
  - techniques
categories:
  - programmation
excerpt: ''
---

<p>Il existe plusieurs normes en accessibilité du web qui demande des choses qu'on ne prend pas nécessairement le temps de faire.</p>

<p>Soit que c'est pas manque de temps, trop de choses à penser, ou on n'y pense simplement pas.</p>

<p>Dans cet article j'exprime mon opinion sur l'importance (du point de vue utilisabilité) des icones de liens extérieurs. <del>Plus tard je montrerai une méthode pour automatiser</del> <ins>[EDIT 2009-08-23] J'ai documenté comment faire dans <a href="/blog/2009/08/manipulation-des-liens-exterieurs-et-les-popup-pour-ameliorer-laccessibilite">Manipulation des liens extérieurs et les popup pour améliorer l'Accessibilité</a>.</ins></p>

<!--more-->
<p>Le problème que j'ai voulu me pencher consiste avec la <a href="http://www.accessibiliteweb.org/bdc/directives/theme/comprehension#pc13_1">règle qui suit</a> :
<blockquote><strong>2.4.4 (niveau A)</strong>
Destination d'un lien :
La destination d'un lien peut Être déterminée à partir du libellé (label="") du lien ou du libellé et du contexte de ce lien déterminable par programmation, sauf pour un lien dont la destination serait ambigüe pour l'ensemble des utilisateur.</blockquote>
</p><p>Ce qui implique qu'on doit ajouter à la main une icône qui annonce le «popup» et si c'est un lien extérieur.</p>
<p>&nbsp;</p>

<h2>Pourquoi ne pas automatiser ce qui est automatisable?</h2>

<p>Lorsqu'on doit manuellement, faire l'option popup quand on édite un site et le faire à bras pour chacun.</p>

<p>Parfois, en programmant on finit par se demander...  "<em><strong>L'informatique au service de l'homme</strong></em>" (ou le contraire?)</p>
<p>&nbsp;</p>

<h2>L'objectif</h2>
<p>Alors, j'ai décidé de trouver une manière d'automatiser?</p>
<ul>
	<li>de prendre une balise standard
<pre lang="html"><a href="http://www.somesite.com/action/handler">Link</a></pre></li>
	<li>d'ajouter de l'image icône qui annonce que c'est un (lien externe + popup)</li>
	<li>d'instaurer le <tt>alt=""</tt> de l'image</li>
	<li>de transformer le lien en popup...
<pre lang="html"><a href="http://www.somesite.com/action/handler">Link<img src="/icons/external_link.png" alt="Avertissement: Ce lien ouvre dans une fenêtre externe car il ne fait pas partie du présent site" width="10" height="10" class="popuphreficon" /></a></pre></li>
</ul>
<p>... tout ça en Javascript qui manipule le <tt>DOM</tt> d'une manière valide... et qui suit les normes d'<strong>Accessibilité du web</strong> !!</p>
