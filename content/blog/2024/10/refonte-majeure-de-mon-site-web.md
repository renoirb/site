---
title: J'ai refait et migré tout mon site web
locale: fr-CA
createdAt: 2024-10-26
updatedAt: 2024-10-26
status: draft
categories:
  - projects
tags:
  - vuejs
  - nuxt
  - migration
  - wordpress
  - static-site
  - on-front-page
keywords:
  - migration wordpress
  - site statique
  - nuxt content
  - taxonomie
  - tailwind css
description:
  Récit technique de la migration d'un site WordPress vers une solution moderne
  basée sur Nuxt et Vue.js, incluant un système de taxonomie multilingue et une
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

Puis la pandémie de <abbr title="Coronavirus disease 2019" lang="en">COVID-19</abbr>
est arrivée, me forçant à mettre le projet en pause pour me concentrer sur mon
emploi. En 2022, un heureux événement est venu bouleverser mes priorités : je
suis devenu père. Après avoir bénéficié du
[Régime Québécois d'Assurance Parentale](https://www.rqap.gouv.qc.ca/fr) avec
mon épouse, j'ai choisi de devenir père à temps plein.

Ce n'est qu'à l'automne 2024, lorsque mon enfant a commencé la garderie, que
j'ai pu reprendre ce projet qui ne m'avait jamais vraiment quitté l'esprit.

## Objectifs du projet

Mon but est de faire un site qui est :

- Multilingue et fait ainsi nativement. Si je peux me permettre; d'adapter
  l'expression
  <a lang="en" href="https://www.interaction-design.org/literature/topics/mobile-first">Mobile first</a>,
  je dirais: <span lang="en">Multilingual first</span> — puis pouvoir
  afficher correctement et de façon adaptée aux préférences du visiteur les
  dates, nombres, libellés de navigation, fuseau horaire, etc.
- Pouvoir travailler avec le contenu comme je le fais avec mes notes. Des
  fichiers texte, dans des dossiers. Bien que j'utilise Markdown tous les jours
  depuis 2013, mon site web n'était pas fait pour me permettre ceci sans que
  j'ai a faire tout ce travail.
- Minimiser la dépendance d'un serveur pour mon site web, quelque chose comme
  des fichiers HTML peut vivre très longtemps

## Le défi de la migration

Les derniers 20% du projet représentaient un défi majeur : la migration du
contenu. Pour faciliter ce processus, j'ai développé et publié un outil
spécialisé: [process-wordpress-xml][process-wordpress-xml], qui permet
d'extraire le contenu des sauvegardes WordPress au format XML.

### Processus de migration automatisé

Le processus de migration comprend plusieurs étapes :

1. Export du contenu WordPress en format XML
2. Traitement automatisé avec `process-wordpress-xml` pour :
   - Extraire les articles et pages
   - Préserver les métadonnées
3. Organisation des fichiers dans la nouvelle structure
4. Validation et nettoyage du contenu converti

<rb-notice-box variant="info" class="my-5">
<strong slot="header">Pourquoi un nouvel outil ?</strong>

J'ai choisi de développer mon propre outil de migration car je n'en avais pas
trouvé qui permettait de prendre le contenu directement du fichier de sauvegarde
de WordPress au format XML.

Ce format me semblait très approprié pour une migration car il est déjà utilisé
pour faire des migrations.

Aussi, j'ai pu:

- Débroussailler les articles écrits en Français et ceux en Anglais, puis
  détecter et ajouter un attribut `locale: fr-CA` (et `en-CA`) pour chaque page.
  Je compte rendre ce site complètement multilingue et de savoir la langue pour
  chaque page va aider.
- Adapter plus spécifiquement pour mon choix technologique de fichiers HTML
  statique dans un dossier.
- Faciliter la réutilisation pour d'autres projets similaires

</rb-notice-box>

Une fois les données extraites du fichier backup en <abbr>XML</abbr> de
WordPress, je pourrai graduellement:


- Faire une conversion Markdown
- Remplacer et ajuster les balises
  <a href="https://wordpress.com/support/wordpress-editor/blocks/shortcode-block/" lang="en" title="A WordPress-specific code that would normally require lots of complicated code.">WordPress "short codes"</a>
  comme par exemple «[`[gallery]`](https://codex.wordpress.org/Gallery_Shortcode)»,
  «`[youtube]`» et autre du genre.
- Ajuster ou je ferai héberger séparément les médias du contenu pour les faire
  héberger sur un CDN. Je les entretiens sur
  [GitHub.com/renoirb/site-assets](https://github.com/renoirb/site-assets/) et
  j'ai pu y ajouter un alias du genre
  `~/assets/content/blog/2020/02/storybook-value-number.png` et savoir ou aller
  chercher l'image dynamiquement et de façon "lazy" ce qui aidera la vitesse de
  chargement de la page.
- Annoter dans le <abbr>HTML</abbr> les abbreviations, et les mots qui ne sont
  pas dans la langue de l'article

Pour cette partie de la conversion, j'ai décidé d'expérimenter avec les
<span lang="en">Large Language Models</span> (<abbr>LLM</abbr>) et peux
conserver le même contenu. Extraire le contenu et l'écrire dans des fichiers,
c'est facile. Mais ré-écrire et normaliser des fichiers textes qui changent
beaucoup d'une page a l'autre, un <abbr>LLM</abbr> peux faire ça très bien!

### Système de taxonomie amélioré

L'un des aspects les plus intéressants de cette migration a été la mise en place
d'un système de taxonomie flexible et multilingue qui permet :

- La gestion des tags et catégories via des fichiers YAML
- Des libellés personnalisés en Français et en Anglais
- Une structure claire pour la navigation et la découverte du contenu

## Prochaines étapes

Bien que le site soit maintenant fonctionnel, plusieurs améliorations sont
prévues :

- Finalisation de l'interface multilingue (voir
  [ticket **renoirb/site** #77](https://github.com/renoirb/site/issues/77))
- Mise a jour de Vue, Nuxt, et Nuxt Content
- Restructuration dans le code pour que le projet Nuxt (e.g. dans
  [GitHub **renoirb/site**](https://github.com/renoirb/site)), qu'il n'y ait que
  le contenu, la définition des routes et que le reste soit dans des modules
  écrits en isolation.

[process-wordpress-xml]:
  https://github.com/renoirb/process-wordpress-xml
  'Extract WordPress Contents by processing WordPress XML backup'
[own-website-migration-2020]:
  /blog/2020/09/porting-all-my-content
  'Porting all my content into a static-site'
[tailwind1-homepage]:
  https://v1.tailwindcss.com/
  'A utility-first CSS framework for rapidly building custom designs.'
