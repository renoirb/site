---
locale: fr-CA
title: >-
  Nouveau projet: Refonte de mon site en conservant WordPress comme back-office,
  mais Symfony2/Doctrine2/Twig pour générer les vues
canonical: >-
  https://renoirboulanger.com/blog/2012/08/nouveau-projet-refonte-de-mon-site-en-conservant-wordpress-comme-back-office-mais-symfony2doctrine2twig-pour-generer-les-vues/
status: publish
revising: true
created: '2012-08-10'
updated: '2013-03-27'
tags: []
categories: []
excerpt: >-
  Je pense personnellement qu'il devrait y avoir une totale séparation entre le
  stockage des documents, sa gestion, et l'affichage du contenu. Ce projet va
  servir à intégrer Symfony2 à WordPress dans ce sens.
---

J'ai décidé de refaire mon site web. J'aime bien utiliser le backend de WordPress mais je n'aime pas utiliser ce qui y est fourni coté code pour faire le "frontend" d'un site web.

Il s'agit d'une première élaboration brute des concepts qui motivent mon choix d'implémentation.

Je suis en plein effort d'élaboration des requis et si vous voulez voir le <a href="/blog/2012/08/project-manifest-content-management-publishing-platform-to-implement-accessibility-semantic-markup-and-ease-web-publishing">pendant rédigé en anglais, j'ai publié ici</a>.
<h3>But ultime des fonctionnalités</h3>
<ul>
	<li>Utiliser l'administration de WordPress pour gerer le contenu</li>
	<li>Avoir la latitude de Symfony2/Twig/Doctrine2 pour gerer le contenu e le code</li>
	<li>Aggreger le contenu provenant de d'autres sources (marqué favoris de Google reader, Tweets, status divers de d'autres services: forrst, github, geeklist, etc)</li>
	<li>Creer une libraire de macros Twig qui genere du HTML selon les formats de Schema.org</li>
	<li>Contribuer a un outil qui pourraitservir aux webmestres qui desirent utiliser WordPress mais qui veulent ce que Twig/Doctrine offre.</li>
</ul>
<h3>Fonctionnalités prévues</h3>
<ul>
	<li>Extraire, purifier/harmoniser le html, et convertir les billets de blog en format markdown (version cachée)</li>
	<li>Utilisation des billets format markdown comme cache</li>
	<li>Conversion markdown a html pour consultation</li>
	<li>Commit-push des billets format markdown dans repository git configurable</li>
	<li>Processus Migration données WordPress (galleries, commentaires) vers version markdown</li>
	<li>Suite de macros reutilisable au format schema.org qui n'est pas lié a la base de donné</li>
	<li>Conversion de format markdown avec annotations des medias, publication, lien canonical, etc)</li>
</ul>
<h3>Lignes guides d'un CMS idéal</h3>
<ul>
	<li>Le contenu doit être libéré de son système de conteneur.</li>
	<li>Le contenu doit être le plus vanille possible, le plus près possible du texte brut.</li>
	<li>annotation dans le contenu (titre, lien, gras, italique) doit être écrit dans un format texte SEULEMENT (markdown, reStructured, Textile). Permet l'édition sans avoir a maîtriser toutes les nuances du balisage (markup html) qui est requis pour l'accessibilité, ou la sémantique</li>
	<li>Les éléments de contenus sont des blocs de HTML distincts du contenur qui l'affiche. Dans le sens que la page et le style doit être aussi flexible que possible et que l'intégrateur ne soit pas emêtré dans des syntaxes abstraites</li>
	<li>Le système doit permettre d'utiliser plusieurs fournisseurs de contenu (une base de donnée WordPress, Drupal, un repository Git, etc)</li>
	<li>Le système doit permettre de comprendre l'entité de contenu et générer automatiquement le bloc HTML sémantique approprié pour être affiché dans son conteneur</li>
</ul>
<h3>Le Code</h3>
J'utilise présentement mon implémentation en lisant la base de donnée WordPress de mon site, et utiliser Symfony2/Doctrine2/Twig pour le "frontend". On peut voir la différence de vitesse d'exécution et le look entre <a href="http://beta.renoirboulanger.com/"><strong>beta</strong>.renoirboulannger.com</a>, à l'inverse de la version hébergée sur le domaine non "beta".

<a style="display: block; position: absolute; top: 0; right: 0; border: 0;" href="https://github.com/renoirb/PSSBlogBundle"><img style="border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub" /></a>
