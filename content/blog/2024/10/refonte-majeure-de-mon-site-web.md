---
title: >-
  J’ai refait et migré tout mon site web
locale: fr-CA
created: 2024-10-26
updated: 2024-10-26
status: draft
categories:
  - projects
tags:
  - vuejs
  - nuxt
  - migration
  - wordpress
  - static-site
keywords:
  - migration wordpress
  - site statique
  - nuxt content
  - taxonomie bilingue
  - tailwind css
description:
  Récit technique de la migration d'un site WordPress vers une solution moderne
  basée sur Nuxt et Vue.js, incluant un système de taxonomie bilingue et une
  gestion de contenu optimisée pour les développeurs.
excerpt: >-
  Cela faisait plusieurs années que je n'avais rien publié, principalement parce
  que je n'avais pas d'endroit adapté pour partager mon code et éditer mes
  textes avec la même fluidité que lorsque je programme. Dans cet article, je
  vous présente les fonctionnalités que j'ai mises en place, ainsi que le
  travail de migration que j'ai accompli pour retrouver un espace de travail
  optimal.
---

## Un projet de longue haleine

En 2020, j'[avais commencé la refonte de mon site
web][own-website-migration-2020]. Le projet était déjà bien avancé avec environ
80% du travail complété, incluant :

- Une ré-implémentation complète du système de taxonomie (étiquettes,
  catégories)
- L'intégration de [Tailwind CSS][tailwind1-homepage], qui commençait alors à
  gagner en popularité
- Une base solide pour une architecture moderne

Puis la pandémie de <abbr title="Coronavirus disease 2019">COVID-19</abbr> est
arrivée, me forçant à mettre le projet en pause pour me concentrer sur mon
emploi. En 2022, un heureux événement est venu bouleverser mes priorités : je
suis devenu père. Après avoir bénéficié du
[Régime Québécois d'Assurance Parentale](https://www.rqap.gouv.qc.ca/fr) avec
mon épouse, j'ai choisi de devenir père à temps plein.

Ce n'est qu'à l'automne 2024, lorsque mon enfant a commencé la garderie, que
j'ai pu reprendre ce projet qui ne m'avait jamais vraiment quitté l'esprit.

## Le défi de la migration

Les derniers 20% du projet représentaient un défi majeur : la migration du
contenu. Pour faciliter ce processus, j'ai développé et publié un outil
spécialisé : [process-wordpress-xml][process-wordpress-xml], qui permet
d'extraire le contenu des sauvegardes WordPress au format XML.

### Processus de migration automatisé

Le processus de migration comprend plusieurs étapes :

1. Export du contenu WordPress en format XML
2. Traitement automatisé avec `process-wordpress-xml` pour :
   - Extraire les articles et pages
   - Préserver les métadonnées
   - Convertir le contenu en Markdown
3. Organisation des fichiers dans la nouvelle structure
4. Validation et nettoyage du contenu converti

<rb-notice-box variant="info" class="my-5">
<strong slot="header">Pourquoi un nouvel outil ?</strong>

J'ai choisi de développer mon propre outil de migration car je voulais un
contrôle total sur le processus de conversion, notamment pour :

- Gérer correctement les contenus bilingues
- Adapter la structure des fichiers à mon architecture Nuxt
- Faciliter la réutilisation pour d'autres projets similaires

</rb-notice-box>

[process-wordpress-xml]:
  https://github.com/renoirb/process-wordpress-xml
  'Extract WordPress Contents by processing WordPress XML backup'

### Système de taxonomie amélioré

L'un des aspects les plus intéressants de cette migration a été la mise en place
d'un système de taxonomie flexible et bilingue qui permet :

- La gestion des tags et catégories via des fichiers YAML
- Des libellés personnalisés en français et en anglais
- Une structure claire pour la navigation et la découverte du contenu

<rb-notice-box variant="info" class="my-5">
<strong slot="header">À propos de la taxonomie</strong>

Le nouveau système permet de définir des étiquettes (tags) avec des descriptions
riches en plusieurs langues, tout en maintenant des URLs cohérentes et des
libellés adaptés à chaque langue.

</rb-notice-box>

## Prochaines étapes

Bien que le site soit maintenant fonctionnel, plusieurs améliorations sont
prévues :

- Finalisation de l'interface multilingue (voir
  [ticket **renoirb/site** #77](https://github.com/renoirb/site/issues/77))
- Migration des images et ressources médias restantes
- Amélioration de l'expérience de développement
- Mise a jour de Vue, Nuxt, et Nuxt Content
- Restructuration dans le code pour que le projet Nuxt (e.g. dans
  [GitHub **renoirb/site**](https://github.com/renoirb/site)), qu'il n'y ait que
  le contenu, la définition des routes et que le reste soit dans des modules
  écrits en isolation.

[own-website-migration-2020]:
  /blog/2020/09/porting-all-my-content
  'Porting all my content into a static-site'
[tailwind1-homepage]:
  https://v1.tailwindcss.com/
  'A utility-first CSS framework for rapidly building custom designs.'
