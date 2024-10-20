---
title: >-
  Nouveau projet: Refonte de mon site en conservant WordPress comme back-office,
  mais Symfony2 / Doctrine2 / Twig pour générer les vues
locale: fr-CA
createdAt: 2012-08-10
updatedAt: 2013-03-27
canonical: >-
  https://renoirboulanger.com/blog/2012/08/nouveau-projet-refonte-de-mon-site-en-conservant-wordpress-comme-back-office-mais-symfony2doctrine2twig-pour-generer-les-vues/
status: publish
revising: true
migrateLinks: true
migrateImages: false
gallery: false
caption: false
categories: []
tags: []
preamble:
  date: 2024-09-12
  text: |
    Il semble que je n’ait pas continué sur cette idée, ni rien publié de concrêt.

    [Renoir de <time datetime="2024-10">2024</time>](/blog/2024/10/refonte-majeure-de-mon-site-web):
    Par contre, cette nouvelle mouture de mon site web fait en 2020, et terminé quatre
    ans plus tard (en 2024) a suivi l’ambition de séparer le contenu et le contenant
    en prenant soin de séparer les préoccupations.

    Sauf que j’utilise maintenant <abbr>ECMA</abbr>Script et Vue.js et du JavaScript natif
    comme des [*éléments <abbr>HTML</abbr> personnalisés*][chtml]
    ("<span lang="en">Custom Elements</span>").

    Puis encore, je risque d’aller vers encore plus simple lorsque tout ce contenu sera bien migré.
    [chtml]: https://developer.mozilla.org/fr/docs/Web/API/Web_components/Using_custom_elements "Je veux bien écrire en Français des trucs de programmation, mais là la. C’est LAID!"
excerpt: >-
  Je pense personnellement qu'il devrait y avoir une totale séparation entre le
  stockage des documents, sa gestion, et l'affichage du contenu. Ce projet va
  servir à intégrer Symfony2 à WordPress dans ce sens.
---

J'ai décidé de refaire mon site web. J'aime bien utiliser le backend de
WordPress mais je n'aime pas utiliser ce qui y est fourni coté code pour faire
le "frontend" d'un site web.

Il s'agit d'une première élaboration brute des concepts qui motivent mon choix
d'implémentation.

Je suis en plein effort d'élaboration des requis et si vous voulez voir le
[pendant rédigé en anglais, j'ai publié ici][english-version].

### But ultime des fonctionnalités

- Utiliser l'administration de WordPress pour gerer le contenu
- Avoir la latitude de Symfony2/Twig/Doctrine2 pour gerer le contenu e le code
- Aggreger le contenu provenant de d'autres sources (marqué favoris de Google
  reader, Tweets, status divers de d'autres services: forrst, github, geeklist,
  etc)
- Creer une libraire de macros Twig qui genere du HTML selon les formats de
  Schema.org
- Contribuer a un outil qui pourraitservir aux webmestres qui desirent utiliser
  WordPress mais qui veulent ce que Twig/Doctrine offre.

### Fonctionnalités prévues

- Extraire, purifier/harmoniser le html, et convertir les billets de blog en
  format markdown (version cachée)
- Utilisation des billets format markdown comme cache
- Conversion markdown a html pour consultation
- Commit-push des billets format markdown dans repository git configurable
- Processus Migration données WordPress (galleries, commentaires) vers version
  markdown
- Suite de macros reutilisable au format schema.org qui n'est pas lié a la base
  de donné
- Conversion de format markdown avec annotations des medias, publication, lien
  canonical, etc)

### Lignes guides d'un CMS idéal

- Le contenu doit être libéré de son système de conteneur.
- Le contenu doit être le plus vanille possible, le plus près possible du texte
  brut.
- annotation dans le contenu (titre, lien, gras, italique) doit être écrit dans
  un format texte SEULEMENT (markdown, reStructured, Textile). Permet l'édition
  sans avoir a maîtriser toutes les nuances du balisage (markup html) qui est
  requis pour l'accessibilité, ou la sémantique
- Les éléments de contenus sont des blocs de HTML distincts du contenur qui
  l'affiche. Dans le sens que la page et le style doit être aussi flexible que
  possible et que l'intégrateur ne soit pas emêtré dans des syntaxes abstraites
- Le système doit permettre d'utiliser plusieurs fournisseurs de contenu (une
  base de donnée WordPress, Drupal, un repository Git, etc)
- Le système doit permettre de comprendre l'entité de contenu et générer
  automatiquement le bloc HTML sémantique approprié pour être affiché dans son
  conteneur

### Le Code

J'utilise présentement mon implémentation en lisant la base de donnée WordPress
de mon site, et utiliser Symfony2/Doctrine2/Twig pour le "frontend". ~~On peut
voir la différence de vitesse d'exécution et le look entre
`beta.renoirboulanger.com`, à l'inverse de la version hébergée sur le domaine
non "`beta`"~~. <ins>Nous ne pouvons voir, l’<abbr>URL</abbr> n’a
[pas si bien archivé sur le Internet Web Archive](https://web.archive.org/web/20121226050718/http://beta.renoirboulanger.com/)</ins>

<!--#TODO-inline-edit-->

[english-version]:
  /blog/2012/08/project-manifest-content-management-publishing-platform-to-implement-accessibility-semantic-markup-and-ease-web-publishing
