---
locale: fr-CA
title: Le "Cloud computing" vulgarisé
canonical: https://renoirboulanger.com/blog/2009/08/le-cloud-computing-vulgarise/
status: publish
revising: true
createdAt: '2009-08-17'
updatedAt: '2013-03-27'
tags: []
categories: []
excerpt: >-
  Une passion que j'ai depuis quelques temps c'est l'automatisation des
  déploiements dans des projets. Le Cloud-Computing fait partie des concepts qui
  permettent d'automatiser le travail. Mais qu'est-ce que le Cloud-Computing en
  fait? Voici ma description de vulgarisation personnelle provenant d'un post
  que j'ai fait dans un Intranet Privé il y a plusieurs mois.
---

Attention: Article technique :)

Une passion que j'ai depuis quelques temps c'est l'automatisation des déploiements dans des projets. Le Cloud-Computing fait partie des concepts qui permettent d'automatiser le travail.

Mais qu'est-ce que le Cloud-Computing en fait?

Voici ma description de vulgarisation personnelle provenant d'un post que j'ai fait dans un Intranet Privé il y a plusieurs mois.

<!--more-->

En gros, le Cloud Computing est une manière de faire abstraction du matériel et du système d'exploitation qui roule l'application web qui est affichée au public.

Application web?: GMail, Facebook, Wikipedia, etc... Ce sont toutes des applications web. D'un point de vue d'un utilisateur commun, certains pensent que ce sont des "pages" mais en fait, tout ce qui se passe en dessous fait qu'il s'agit effectivement d'une "application".

En gros, le Cloud Computing demande...
<ul>
	<li> Contrôler une VM (<a href="http://en.wikipedia.org/wiki/Virtual_machine" target="_blank">Virtual Machine... Machine Virtuelle</a>)</li>
	<li>Propager les updates d'une VM a une autre</li>
</ul>
<strong> L'idée</strong>
<ol>
	<li> Une <em>nouvelle VM</em> est montée, et elle est hébergée sur un serveur de VM (VMware, Xen, Jail).</li>
	<li><strong>Une copie est faite</strong> pour les <strong>tests</strong> de pré-production et pouvoir <strong>faire les updates sans nuire à la prod</strong>.</li>
	<li>Une application <em>dans</em> la VM <em>détecte</em> les <em>changements</em>, et conserve les actions</li>
	<li>Un jour de maintenance, on peut fermer la vm de production</li>
	<li>Faire appliquer les updates de la vm de staging, en production!</li>
</ol>
ça règlerait bien de problèmes de stress d'update des éléments en production versus notre procédé d'entretien.

<strong> Un Exemple concrêt</strong>

Je voulait tester une appliance (une VM déjà montée préconfigurée pour un usage précis) qui servirait pour le courrier électronique.

On l'avait utilisé et trouvé <em>magique</em> l'idée que l'appliance s'<em>update</em> tout seul!

<strong>Un trouvaille</strong>

Il s'agit en fait d'un outil qui sert à justement faire un "master" qui sert pour tester les mises a jour et les appliquer. Pour, ensuite, les appliquer aux autres VM du même groupe automatiquement.

Actuellement, il s'agit d'une utopie mais j'aimerai bien voir ce type de procédé exister un jour.

<strong>Un produit: rPath</strong>

<a href="http://www.rpath.com/corp/cloudinenglish">rPath</a> c''est la compagnie derrière <strong>rBuilder</strong>, un logiciel d'automatisation pour le cloud computing.... ce qu'on veut faire.

<strong> Cloud computing selon rPath</strong>
Ils (rPath) résument ça comme étant le mélange entre...
<ul>
	<li> L'Application</li>
	<li>Le serveur applicatif</li>
	<li>Le OS (système d'exploitation)</li>
	<li>La virtualisation</li>
</ul>
<strong> Vidéo vulgarisateur</strong>
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="425" height="344" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="src" value="http://www.youtube.com/v/XdBd14rjcs0&amp;color1=0xb1b1b1&amp;color2=0xcfcfcf&amp;feature=player_embedded&amp;fs=1" /><param name="allowfullscreen" value="true" /><embed type="application/x-shockwave-flash" width="425" height="344" src="http://www.youtube.com/v/XdBd14rjcs0&amp;color1=0xb1b1b1&amp;color2=0xcfcfcf&amp;feature=player_embedded&amp;fs=1" allowfullscreen="true"/></object>