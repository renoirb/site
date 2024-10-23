---
locale: fr-CA
title: Enfin! J'ai refait mon site
canonical: https://renoirboulanger.com/blog/2013/04/enfin-jai-refait-mon-site/
status: publish
revising: true
createdAt: '2013-04-09'
updatedAt: '2013-05-23'
tags:
  - integration
  - symfony2
categories:
  - projets
excerpt: >-
  La dernière fois que j'ai fait mon site c'était en 2007. Comme plusieurs
  j'était comme un «cordonnier mal chaussé». Je viens de remédier à la
  situation.
---

<p>Après plusieurs mois a avoir une partie du projet de fait, et laissé là. J'ai mis en ligne.</p>

<p>C'est la saison des refontes de sites personnels à ce qu'il paraît, <a href="http://brendanserashriar.com/" title="Brendan Sera-Shriar; blogeur, conférencier professionnel et organisateur d'événements">beaucoup</a> <a href="http://carlalexander.ca/" title="Carl Alexander: Man in the arena">de</a> <a href="http://gabiviana.com/" title="Gabriela Viana, mais celui-là, c'est moi qui l'a intégré">monde</a> l'<a href="http://nicolasroberge.com/" title="Nicolas Roberge: Médias sociaux, Informatique en nuage, Evolia">ont</a> <a href="http://jpmurray.net/" title="Jean-Philippe Murray; Pas un foodie, ni un photographe">refait</a>.</p>

<p>Il n'est pas parfait. Il n'est pas final. Mais il est utilisable et en meilleur état que la version précédente.</p>

<p>Pourtant ça faisait un bon moment que j'avait déjà de quoi de fait. Mais je voulait faire <em>plus</em> grand!</p>

<p>Comme je disait, l'intégration était déjà faite avec mon espace de travail sous <a href="http://yeoman.io/">Yeoman</a> (Grunt), les patterns de <a href="http://ndreckshage.github.io/roughdraft.js/">RoughDraft.js</a> et <em>Twitter Bootstrap</em>, tout était prêt sous forme statique  (<a href="https://renoirboulanger.com/styleguide/" title="Espace de travail statique pour intégration HTML utilisant LESS, RoughDraft.js, Twitter Bootstrap, et Yeoman">voir le styleguide</a>).</p>

<p>Avant de publier, je voulait en plus;</p>

<ul>
<li>refaire le backend avec <a href="/blog/2012/08/project-manifest-content-management-publishing-platform-to-implement-accessibility-semantic-markup-and-ease-web-publishing/"><em>Symfony 2</em>, <em>Twig</em></a> </li>
<li>Créer un backend qui <a href="/blog/2012/08/nouveau-projet-refonte-de-mon-site-en-conservant-wordpress-comme-back-office-mais-symfony2doctrine2twig-pour-generer-les-vues/">utilise la base de donnée et le backend de <em>WordPress</em></a></li>
<li>créer un module de <a href="/blog/2012/06/trying-to-find-templating-engine-library-of-markup-generating-schema-orgrdfa-content/">génération de balises HTML avec micro-format RDFa à intégré</a>, et récemment</li>
<li>utiliser Octopress pour avoir une version statique</li>
</ul>

<p>Puis un moment donné je me suis dit:</p>

<blockquote>
  <p>Je veut juste publier!</p>
</blockquote>

<p>Deux soirs de travail plus tard, tout a été intégré dans WordPress!</p>

<p>C'est une leçon de vie: apprendre en utilisant de nouvelles techniques, mais c'est important aussi de livrer.</p>

<p>Même pour des projets personnels.</p>

<h2>Fonctionnalités</h2>

<ul>
<li>Écriture sous format <a href="http://daringfireball.net/projects/markdown/syntax">Markdown</a></li>
<li>Servi via SSL seulement</li>
<li>Caching du contenu avec Memcached</li>
<li>Billets balisés avec micro-format RDFa</li>
</ul>

<h2>Outils de travail utilisé</h2>

<ul>
<li>Thème enfant de Roots, adapté</li>
<li>Twitter Bootstrap, avec mon propre thème utilisant LESS</li>
</ul>

<p>J'ai aussi crée une maquette statique spécifiquement pour le balisage HTML. Tout ceci dans le but de me concentrer sur l'aspect intégration web du projet, à coté de la partie blogue, base de donnée ou serveur.</p>

<p>Pour ceux que ça intéresse, j'ai commencé a utiliser intensivement <a href="http://yeoman.io/">Yeoman</a> et <a href="http://ndreckshage.github.io/roughdraft.js/">RoughDraft.js</a>.</p>

<p>Voir le <strong><a href="https://renoirboulanger.com/styleguide/" title="Espace de travail statique pour intégration HTML utilisant LESS, RoughDraft.js, Twitter Bootstrap, et Yeoman">Styleguide statique de mon site web</a></strong></p>

<h2>À venir</h2>

<p>Maintenant que le site est en ligne, j'ai déjà prévu d'autres choses pour l'améliorer.</p>

<p>Notamment:</p>

<ul>
<li>Migration du serveur web sous NGINX avec module SPDY (au lieu d'Apache)</li>
<li>Caching HTTP seulement (Varnish ou Memcached, a déterminer)</li>
<li>Quelques effets Javascript chargés progressivement</li>
<li>Relire, et corriger tout le contenu (ce billet n'a pas été révisé, je l'ai écrit rapidement)</li>
<li>Ajouter de nouvelles vues</li>
</ul>

<h2>Mercis</h2>

<p>Je voulait donner un beau merci à <a href="http://gabiviana.com/" title="Gabriela Viana, mais celui-là, c'est moi qui l'a intégré">Gabriela Viana</a> qui est la responsable du design de mon site.</p>