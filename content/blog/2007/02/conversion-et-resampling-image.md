---
title: Conversion et resampling image
locale: fr-CA
created: 2007-02-21
updated: 2013-03-27
canonical: https://renoirboulanger.com/blog/2007/02/conversion-et-resampling-image/
status: publish
revising: true
categories: []
tags: []
excerpt: ''
waybackMachineSnapshots:
  - orig: http://www-128.ibm.com/developerworks/library/l-graf/?ca=dnt-428
    snapshots:
    - http://web.archive.org/web/20070305233450/http://www-128.ibm.com/developerworks/library/l-graf/?ca=dnt-428
  - orig: http://www-128.ibm.com/developerworks/linux/library/l-p101/
    snapshots:
    - https://web.archive.org/web/20070123020354/http://www-128.ibm.com/developerworks/linux/library/l-p101/
  - orig: http://jeanpaul.lefevre.free.fr/ariane/perls.html
    snapshots:
    - https://web.archive.org/web/20070329025336/http://jeanpaul.lefevre.free.fr/ariane/perls.html
---

ça vous est arrivé de recevoir un paquet d'images trop grosses pour les lire et que ce à-peu-près cent images pesent le poid d'un DVD (!!!).

C'est ce qui m'est arrivé. Un DVD plein de photos, tout en format TIF pesant 3 Gigas! Toutes en format assez grandes pour faire une affiche publicitaire grandeur de celles qu'on trouve sur nos autoroutes!

Resizer les photos a la main... Non merci!

Voici comment j'ai fait, en linux, pour transférer les TIF en JPG. Puis ensuite, rapetisser les photos d'une largeur plus raisonnable.

<!--more-->

## Convertir les TIf en JPG

Pour commencer, on va lister tout les fichiers TIF, formater la commande de conversion type avec ImageMagick (ex: convert original.TIF original.jpg)

<del><em>copier la ligne 1 du fichier texte, la ligne 2 donne un pointeur pour la description plus bas.</em>
<a href="http://www.renoirboulanger.com/wp-content/uploads/2007/02/commande_longue.txt" title="Commande">Afficher le fichier texte</a></del>

<rb-notice-box variant="info" class="my-5">
<strong slot="header">Renoir de 2024:</strong>
dix-sept ans plus tard, pendant que je relis ces vieux billets, je ne retrouve plus ce fichier et ne me rappelle plus de la commande. Dommage.
</rb-notice-box>

En gros `find` (a) cherche dans le dossier courrant (b) tout fichier du nom de (c)... tout ce qui a l'extension TIF (d). Ensuite envoie (e) le résultant dans à `sed` (f) (<em>Stream EDitor</em>) qui va modifier chaque résultat selon une expression régulière (ce qui est entre "//") (g) et entre les <em lang="en">single-quotes</em> "`'` "... qui enleve le "`.TIF`" la fin puis ensuite, enleve le nom de dossier actuel "`./`" que `find` donne comme résultat (i). Ensuite (j)... execute avec `perl` (k) les commandes suivantes: clarifie les début de ligne de la chaîne de résultat (l), renomme le fichier original `$name`, et écrit (n) la ligne de commande (o) a chaque résultat trouvé avec le format désiré: "`convert nom.tif nom.jpg`" puis envoie (p) chaque resultat sur une ligne différente dans un fichier appelé "test" (q).

Explicite, hein! de la science infuse... j'ai moi même pris deux heures a trouver la bonne ligne de commande!

Ensuite, c'est simple, on vérifie ce que le fichier a donné

```bash
cat test
```
pour exécuter, ensuite, rien de plus facile:

```bash
/bin/bash test
```

Attention ça peut être long... Moi j'ai passé d'une image moyenne de 40Mo... a 4Mo (!!!) pour des photos prises avec un apapreil jettable, 40mo une photo c'est fichtrement, inutile!


## Rapetisser les images trop grosses en largeur plus raisonnable


```bash
mogrify -resize "500&gt;" -density 96 *
```

Cette commande reformat les fichiers en fichier pas plus grand que 500pixels... avec une résolution de 96dpi... un peu plus raisonnable. Encore ici, cela peut prendre plusieurs minutes.

A plus tout le monde :)


## Références

- [<em lang=en>Some Perl Scripts</em> par Jean-Paul Le Fevre](https://web.archive.org/web/20070329025336/http://jeanpaul.lefevre.free.fr/ariane/perls.html)
- [<em lang=en>IBM DeveloperWorks Linux: **Cultured Perl: One-liners 101**](https://web.archive.org/web/20070123020354/http://www-128.ibm.com/developerworks/linux/library/l-p101/)
- [<em lang=en>IBM DeveloperWorks Linux: **Graphics from the command line** with ImageMagick</em>](http://web.archive.org/web/20070305233450/http://www-128.ibm.com/developerworks/library/l-graf/?ca=dnt-428)
- http://www.imagemagick.org
