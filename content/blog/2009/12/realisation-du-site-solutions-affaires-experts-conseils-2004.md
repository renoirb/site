---
title: Réalisation du site Solutions Affaires experts-conseils [2004]
locale: fr-CA
created: 2009-12-04
updated: 2013-03-27
canonical: >-
  https://renoirboulanger.com/blog/2009/12/realisation-du-site-solutions-affaires-experts-conseils-2004/
status: publish
revising: false
categories:
  - portfolio
tags:
  - css
  - geraniumcms
  - html
  - inexis
  - integration
  - web
excerpt: ''
coverImage:
  src: ~/assets/content/blog/2009/12/screenshot_saffaires_home.png
  alt: ' '
  text: 'Solutions Affaires Experts-Conseils : Accueil'
waybackMachineSnapshots:
- orig: http://www.htdig.org/
  snapshots:
  - https://web.archive.org/web/20040816030226/http://www.htdig.org/
  - https://web.archive.org/web/20090217134607/http://www.htdig.org/
- orig: http://www.htdig.org/htsearch.html
  snapshots:
  - https://web.archive.org/web/20040816032810/http://www.htdig.org/htsearch.html
---

Il s’agit d’un site que j’ai fait en 2004 qui provient du graphisme produit par [Tatou Communication visuelle](http://www.tatou.ca/). Je n’avait pas dans mon dossier d’archives tout les documents ni de captures d’écran car à l’époque je ne faisait pas attention a ce genre de truc.

<!--more-->

Ce site web a été développé durant une période où l’approche de l’identité visuelle et de l’impact sur le web était encore en phase d’exploration. À cette époque, certaines pratiques de design incluaient l’utilisation d’éléments décoratifs pour mettre en valeur des informations spécifiques, telles que les crédits des entreprises responsables du design et de la programmation. Une autre tendance consistait à centrer le contenu au milieu de l’écran, parfois en masquant les barres de défilement lorsque le contenu dépassait la zone visible. Ces choix de design reflétaient les tendances et les possibilités techniques de l’époque, mais aussi à des choses à changer lorsque l’industrie a évolué et que les critères d’accessibilité du web sont devenues de plus en plus reconnues.


<dl>
  <dt>Graphisme</dt>
    <dd><a href="http://www.tatou.ca/">Tatou Communication visuelle</a></dd>
  <dt>Date de réalisation</dt>
    <dd><time datetime="2004-03">Mars 2004</time> (environ)</dd>
  <dt>Nom de domaine</dt>
    <dd><a href="https://www.solutionsaffaires.ca/" title="Robert Savage Agronome MBA">SolutionsAffaires.ca</a></dd>
</dl>



## Mon implication

Si on ne considère pas la direction artistique, le graphisme, et la gestion avec le client. J’ai tout fait le reste. Sur ce site j’avait même intégré un engin de recherche [ht://dig][htdig-home].

Je n’ai pas pris de capture du résultat de recherche car je n’avait pas archivé tout de l’engin et le site brisait lorsque je faisait une recherche.

Voici quelques fonctions que j’ai intégré

- GéraniumCMS
  Maintenant c’est une version extraite en html statique qui est en ligne alors il est impossible de voir toute trace de son usage.
- Intégragion de [ht://dig][htdig-home] et de la librairie [HtSearch](https://web.archive.org/web/20040816032810/http://www.htdig.org/htsearch.html)
  Cette fonction qui Indexait les pages et on pouvait y chercher à l’intérieur du site sans utiliser un engin de recherche externe.
- Intégragion HTML et JavaScript des fonctions dictées par le design, notamment les *barres de défilement stylisées*.
  Le concept original laissait une hauteur de document fixe pour certaines pages, pour rappeller une carte d’affaire interactive.

<rb-notice-box variant="info" class="my-5" date="2024-10-07">
<strong slot="header">Les barres de défilement stylisées</strong>

À l’époque (2004) il était la mode de cacher les barres de défilement incluses avec le navigateur, et d’en faire pour qu’elles s’intègrent visuellement. Le design priorisait l’emballage visuel que ce qu’il y est; ce que le client final paie pour se publier sur le Web. Ce ne devait pas être très accessible au clavier non plus.

</rb-notice-box>

## Captures d’écran

<div style="overflow:hidden;clear:both" class="thumbnails gallery flex flex-row flex-wrap">
<app-image class="w-1/3" src="~/assets/content/blog/2009/12/screenshot_saffaires3.png" data-smaller-src="~/assets/content/blog/2009/12/screenshot_saffaires3-150x150.png" alt="" figcaption="La page de contact">

</app-image>
<app-image class="w-1/3" src="~/assets/content/blog/2009/12/screenshot_saffaires21.png" data-smaller-src="~/assets/content/blog/2009/12/screenshot_saffaires21-150x150.png" alt="" figcaption="Une page intérieure">

</app-image>
<app-image class="w-1/3" src="~/assets/content/blog/2009/12/Screenshot_saffaires_2004_scroll.png" data-smaller-src="~/assets/content/blog/2009/12/Screenshot_saffaires_2004_scroll-150x150.png" alt="" figcaption=" ">

Une page intérieure avec *barres de défilement stylisées*

</app-image>
<app-image class="w-1/3" src="~/assets/content/blog/2009/12/Screenshot_saffaires_2004_noscroll.png" data-smaller-src="~/assets/content/blog/2009/12/Screenshot_saffaires_2004_noscroll-150x150.png" alt="" figcaption=" ">

Une page intérieure avec *barres de défilement stylisées*

</app-image>
<app-image class="w-1/3" src="~/assets/content/blog/2009/12/Screenshot_saffaires_2004_geranium_modifier.png" data-smaller-src="~/assets/content/blog/2009/12/Screenshot_saffaires_2004_geranium_modifier-150x150.png" alt="" figcaption=" ">

Modifier le contenu possible via le site. Malheureusement je n’ai plus le code pour avoir plus d’images à l’intérieur.

</app-image>
<app-image class="w-1/3" src="~/assets/content/blog/2009/12/Screenshot_saffaires_2004_GeraniumCMS.png" data-smaller-src="~/assets/content/blog/2009/12/Screenshot_saffaires_2004_GeraniumCMS-150x150.png" alt="" figcaption=" ">

Nous pouvons voir très subtilement le noms Geranium CMS et de Tatou communication visuelle qui sont écrits d’un ton à peine plus foncé que la couleur de fond. À l’époque (2004) je n’étais pas conscient des critères d’accessibilité WCAG et de l’importance du contraste du texte alors. J’ai probablement choisi une couleur très subtile pour ne pas distraire dur contenu du site.

</app-image>
</div>

[htdig-home]: https://web.archive.org/web/20040816030226/http://www.htdig.org/
