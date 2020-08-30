---
locale: fr-CA
keywords:
  - disque dur
  - disques
  - linux
  - script
canonical: 'https://renoirboulanger.com/blog/2008/04/effacer-un-disque-dur/'
title: Effacer complètement un disque dur de façon sécuritaire
categories: ['Techniques']
tags: ['Tutoriels']
date: '2008-04-16T00:45:08-04:00'
---

Lorsqu'on se préocupe de ses informations personnelles et qu'on veut se débarrasser d'un ordinateur ou d'un vieux disque dur il faut, idéalement, le vider. J'ai une petite méthode pour le faire pas trop compliqué et totalement sécuritaire pour les données.

Ma méthode implique

- Un disque dur qu'on veut wiper (effacer)
- Un LiveCD de Linux
- Du temps
- Une tour d'ordinateur pour le processus, idéalement inutilisée... sinon où chercher ou quoi utiliser pour se «dé-s'emmerder»
  - Un lecteur CD-Rom

Attention, un peu technique... mais tellement conseillé :)

### ÉTAPE UN... backups?!

C'est un peu stupide de le préciser... mais assurez-vous qu'il est vraiment vide de vos données avant de faire quoi que ce soit!

**Je vous recommande DE NE PAS AVOIR D'AUTRES DISQUES D'INSTALLÉ lors de l'exécution de ce script** Tant que vous exécutez pas le script a l'[étape six][0] vous ne risquez rien (!).

### ÉTAPE DEUX... Graver le LiveCD

Pour faire la chose facile, vous pouvez prendre le LiveCD de Debian, ma distribution préférée:

`http://live.debian.net/cdimage/release/current/i386/iso-cd/`

Une version 'debian-live-(.\*)-i386-rescue.iso' fera l'affaire.

#### OÙ TROUVER LINUX

Vous pouvez regarder [ici][1] pour d'autres versions de Debian.

Pour remplacer Windows, ce que je recommande c'est d'utiliser [Ubuntu Linux][2] (ce que j'utilise pour mon environnement de Bureau).

Mais ce n'est pas le but de cet article ;)

Juste une dernière note comme ça: Debian, pour moi, sert pour les serveurs... et Ubuntu est basé sur Debian.

Pour ce qui concerne Linux et notre utilisation actuelle, n'importe quelle version fera l'affaire.

Les commandes nécessaires seront celles de base pour n'importe quel Linux depuis ses débuts :

- /dev/urandom, ou
- /dev/zero
- dd

Je ne me rappelle pas quand Linux en général a inclus ces trucs mais c'est ce qu'il faut.

En gros les deux premiers sont des device files qui fournissent du junk aléatoire... et l'autre. Que des zéros!

Tandis que "dd" est un utilitaire pour écrire en device to device.... (aka. dd) :)

### ÉTAPE TROIS, on vide

En fait, on enlève tout les autres disques durs question de ne pas se tromper!

Ensuite, il est bien de remarquer que le processus peut prendre du temps. Ce serait idéal d'avoir une tour qui sert a rien... sinon on tombe a devoir attendre après.

### ÉTAPE QUATRE, On démarre le LiveCD

... On attend le command prompt. C'est comme du DOS à l'époque, sauf que c'est vraiment plus puissant!

Pour reconnaitre un prompt linux, on voit quelque chose du genre:

    user@debian:~ $

ou encore... si on voit le dièze (\#)... c'est qu'on est un super utilisateur (root). Un LiveCD nous envoit généralement en root alors on devrait voir quelque chose de similaire à:

    root@debian: ~ #

### ÉTAPE CINQ, on script un peu

On peut le faire de plusieurs façon la même chose. En gros, on se doit, pour s'assurer d'effacer complètement le disque de le remplir au moins huit fois au minimum de données random. Alors je propose le petit script qui se copie bien à la main.

Si vous avez vidé vos disques durs le disque dur a vider devraît être /dev/hda

Pour vous en assurer, faites

    root@debian: ~# file /dev/hda

Un output similaire ceci devrait sortir...

    /dev/hda: block special (3/0)

#### «CRASH COURSE» SUR LES PARTITIONS ET LINUX

Pour vous assurer de ne pas effacer un bon disque dur, je vous **re-recommande DE NE PAS AVOIR D'AUTRES DISQUES D'INSTALLÉ lors de l'exécution de ce script** ([étape six][0])!!!

Parceque si c'est pas le disque /dev/hda, c'est peut être /dev/sda ou même un autre nom.

Petit cours rapide de partitionnement sous Linux.

Les disques durs n'ont pas de lettres... tout dépend où dans le système on "monte" la partition.

En fait les noms vont ainsi

- hda, hdb, hdc... pour les disques durs IDE
- sda, sdb, sdc.... pour les disques SATA et SCSI et USB

Vous imaginez que le 'a' (b,c,d...) représente l'ordre selon la nappe de connecteurs.

La première partition du premier disque sera donc: /dev/sda1

Si tout est beau... on continue.

    root@debian: ~# vi wipedisk.sh

En VI, il faut faire 'i' avant de commencer d'écrire...

    #!/bin/bash for ((i=1;i&lt;=10;i+=1)); do echo "Passe $i" dd if=/dev/urandom of=/dev/hda sleep 1 done

Ensuite on quitte **en faisant** **\[escape\]** on **écrit** "**:wq**" (deux points... "w" et "q"... qui signifie commande write quit)

    root@debian: ~# chmod 755 wipedisk.sh

Qui va rendre le fichier exécutable.

### ÉTAPE SIX... on exécute.

    root@debian: ~# ./wipedisk.sh

En général, ça peut prendre du temps. Mais à la fin d'une soirée de film... le disque devrait être totalement rempli d'ordures aléatoire.

Au plaisir!

[0]: http://renoirboulanger.com/blog/2008/04/effacer-un-disque-dur/#six
[1]: https://wiki.debian.org/LiveCD
[2]: https://www.ubuntu.com/
