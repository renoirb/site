---
title: Effacer complètement un disque dur de façon sécuritaire
locale: fr-CA
created: 2008-04-16
updated: 2013-03-27
canonical: https://renoirboulanger.com/blog/2008/04/effacer-un-disque-dur/
status: publish
revising: true
categories:
  - projects
tags:
  - techniques
  - tutoriels
  - procedure
  - best-practices
  - security
keywords:
  - disque dur
  - disques
  - linux
  - script
excerpt: >-
  Une procédure qui explique comment complètement effacer un disque dur en
  écrivant plusieurs fois des données aléatoires pour rendre beaucoup plus
  difficile de recouvrer les données.
preamble:
  disable: true
---

Lorsqu’on se préocupe de ses informations personnelles et qu’on veut se
débarrasser d’un ordinateur ou d’un vieux disque dur il faut, idéalement, le
vider. J’ai une petite méthode pour le faire pas trop compliqué et totalement
sécuritaire pour les données.

Ma méthode implique

- Un disque dur qu’on veut wiper (effacer)
- Un LiveCD de Linux
- Du temps
- Une tour d’ordinateur pour le processus, idéalement inutilisée... sinon où
  chercher ou quoi utiliser pour se «dé-s’emmerder»
  - Un lecteur CD-Rom

Attention, un peu technique... mais tellement conseillé :)

### ÉTAPE UN... backups?!

C’est un peu stupide de le préciser... mais assurez-vous qu’il est vraiment vide
de vos données avant de faire quoi que ce soit!

**Je vous recommande DE NE PAS AVOIR D’AUTRES DISQUES D’INSTALLÉ lors de
l’exécution de ce script** Tant que vous exécutez pas le script a l’[étape
six][0] vous ne risquez rien (!).

### ÉTAPE DEUX... Graver le LiveCD

Pour faire la chose facile, vous pouvez prendre le LiveCD de Debian, ma
distribution préférée:

`http://live.debian.net/cdimage/release/current/i386/iso-cd/`

Une version
"<span lang="en" title="ISO de l’Image d’installation de Debian Linux">`debian-live-(.*)-i386-rescue.iso`</span>"
fera l’affaire.

#### OÙ TROUVER LINUX

Vous pouvez regarder [ici][1] pour d’autres versions de Debian.

Pour remplacer Windows, ce que je recommande c’est d’utiliser [Ubuntu Linux][2]
(ce que j’utilise pour mon environnement de Bureau).

Mais ce n’est pas le but de cet article.

Juste une dernière note comme ça: Debian, pour moi, sert pour les serveurs... et
Ubuntu est basé sur Debian.

Pour ce qui concerne Linux et notre utilisation actuelle, n’importe quelle
version fera l’affaire.

Les commandes nécessaires seront celles de base pour n’importe quel Linux depuis
ses débuts :

- `/dev/urandom`, ou
- `/dev/zero`
- <abbr lang="en" title="Device to Device command">`dd`</abbr>

Je ne me rappelle pas quand Linux en général a inclus ces trucs mais c’est ce
qu’il faut.

En gros les deux premiers sont des <span lang="en">device files</span> qui
fournissent du <span lang="en">junk</span> aléatoire... et l’autre. Que des
zéros!

Tandis que "dd" est un utilitaire pour écrire en <span lang="en">device to
device</span>. En d’autres mots: un périphérique vers l’autre.

### ÉTAPE TROIS, on vide

En fait, on enlève tout les autres disques durs question de ne pas se tromper!

Ensuite, il est bien de remarquer que le processus peut prendre du temps. Ce
serait idéal d’avoir une tour qui sert a rien... sinon on tombe a devoir
attendre après.

### ÉTAPE QUATRE, On démarre le LiveCD

On attend le command prompt. C’est comme du <abbr>DOS</abbr> à l’époque, sauf
que c’est vraiment plus puissant!

Pour reconnaitre un prompt linux, on voit quelque chose du genre:

    user@debian:~ $

ou encore... si on voit le dièze (`#`)... c’est qu’on est un super utilisateur
(root). Un LiveCD nous envoit généralement en root alors on devrait voir quelque
chose de similaire à:

    root@debian: ~ #

### ÉTAPE CINQ, on script un peu

On peut le faire de plusieurs façon la même chose. En gros, on se doit, pour
s’assurer d’effacer complètement le disque de le remplir au moins huit fois au
minimum de données random. Alors je propose le petit script qui se copie bien à
la main.

Si vous avez vidé vos disques durs le disque dur a vider devraît être /dev/hda

Pour vous en assurer, faites

    file /dev/hda

Un output similaire ceci devrait sortir...

    /dev/hda: block special (3/0)

#### «CRASH COURSE» SUR LES PARTITIONS ET LINUX

Pour vous assurer de ne pas effacer un bon disque dur, je vous **re-recommande
DE NE PAS AVOIR D’AUTRES DISQUES D’INSTALLÉ lors de l’exécution de ce script**
([étape six][0])!

Parceque si c’est pas le disque /dev/hda, c’est peut être /dev/sda ou même un
autre nom.

Petit cours rapide de partitionnement sous Linux.

Les disques durs n’ont pas de lettres... tout dépend où dans le système on
"monte" la partition.

En fait les noms vont ainsi

- <abbr>hda</abbr>, <abbr>hdb</abbr>, <abbr>hdc</abbr>... pour les disques durs
  <abbr>IDE</abbr>
- <abbr>sda</abbr>, <abbr>sdb</abbr>, <abbr>sdc.</abbr>... pour les disques
  <abbr>SATA</abbr> et <abbr>SCSI</abbr> et <abbr>USB</abbr>

Vous imaginez que le ’a’ (b,c,d...) représente l’ordre selon la nappe de
connecteurs.

La première partition du premier disque sera donc: <abbr>`/dev/sda1`</abbr>

Si tout est beau... on continue.

    vi wipedisk.sh

En <em title="Vim Editor" lang="en">vi</em>, il faut faire '`i`’ (lettre
<kbd>i</kbd> minuscule, pour entrer en mode "_insert_") avant de commencer
d’écrire...

```bash[wipedisk.sh]
#!/bin/bash
for (( i = 1 ; i <= 10 ; i += 1 )); do
  echo "Passe $i"
  dd if=/dev/urandom of=/dev/hda
  sleep 1
done
```

Ensuite on quitte **en faisant** <kbd title="Escape">ESC</kbd> "`:wq`" (deux
points, la lettres minuscules "`w`" et "`q`" qui signifient
<span lang="en">_write_ and _quit_</span>)

    chmod 755 wipedisk.sh

Qui va rendre le fichier exécutable.

### ÉTAPE SIX... on exécute.

    ./wipedisk.sh

En général, ça peut prendre du temps. Le disque devrait être totalement rempli
d’ordures aléatoire.

Au plaisir!

[0]: /blog/2008/04/effacer-un-disque-dur/#six
[1]: https://wiki.debian.org/LiveCD
[2]: https://www.ubuntu.com/
