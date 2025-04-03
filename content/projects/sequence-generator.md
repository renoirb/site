---
title: Générateur de séquence
locale: fr-CA
createdAt: 2013-02-19
updatedAt: 2013-02-19
status: publish
revising: true
pageKey: page-projets-initiale-pour-faire-une-migration
---

**<em lang="en">Sequence generator Javascript</em>, contribution au projet <em lang="en">RoughDraft.js</em>.**

Un outil de génération de noms de classes CSS servant a préparer maquettes
statiques.

RoughDraft est utile pour insérer du texte, images, dates, et autres détails qui
seront ajustés via CSS plus tard. La maquette demeure donc simple sans contenu
«Lorem Ipsum» a insérer. Ce sont de simples attributs ajoutés aux balises qui
servent a faire ajouter dynamiquement les boucles de répétitions, textes, et
photos.

**Ma contribution:**

- Génère des noms de classes CSS dans un ordre prévisible
- Utilise un nom comme indice pour démarrer la séquence (e.g. `alfa`) puis
  continue les répétitions aux nouveaux enfants (e.g. `row-alfa`, `row-bravo`,
  etc)

**Note** lors de la réalisation de la maquette de ce site web, j’ai utilisé
[roughdraft.js](https://ndreckshage.github.io/roughdraft.js/) et
[j’ai publié ici la maquette](https://renoirboulanger.com/styleguide/) qui a
ensuite été intégrée dans WordPress.

[<em lang="en">Pull-request</em> sur GitHub](https://github.com/ndreckshage/roughdraft.js/pull/9)
