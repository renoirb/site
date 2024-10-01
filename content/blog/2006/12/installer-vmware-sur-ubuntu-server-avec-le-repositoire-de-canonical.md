---
title: Installer VMWare sur Ubuntu server avec le repositoire de Canonical
locale: fr-CA
created: 2006-12-21
updated: 2006-12-25
canonical: 'https://renoirboulanger.com/blog/2006/12/installer-vmware-sur-ubuntu-server-avec-le-repositoire-de-canonical/'
status: publish
revising: false
categories:
  - experiments
tags:
  - linux
  - open-source
  - procedure
keywords:
  - VMWare Server
  - Ubuntu 7.04
  - Fiesty Fawn
  - Canonical Repository
excerpt: ''
description: Procedure pour installer Ubuntu 7.04 Fiesty Fawn pour faire rouler VMWare Server
preamble:
  text: |
    Dans le temps où le «cloud computing» n’était pas très fréquent, ni
    l’automatisation avec Puppet, SaltStack, Ansible. Aussi, les images qui
    étaient originalement incluses dans cet article ne sont plus disponibles, ce
    qui rend cet article peu utilisable. J’ai décidé de conserver quand-même,
    comme preuve qu’avant d’avoir pris l’habitude de tout automatiser, les
    procédures avec captures d’écran sont éphémères et perdent tout leur sens sans
    images.
    D’ailleurs, pour que les services soient résilients, comme par exemple
    les relais SMTP ou DNS qui sont faits pour s’entraîder, ces services sont
    pensés pour être composé de plusieurs «nodes» qui ont la même responsabilité
    et qu’il est possible de rapidement appliquer la même configuration rapidement.
---

L’idée c’est de d’avoir un serveur rack-mount minimal fait pour héberger les VM
d’infrastructure du réseau. Actuellement plusieurs de nos serveurs _physiques_
ont déjà X-Windows sur leur hôtes (SuSE v10, RHEL 4 U5, Gentoo 2007.0, Ubuntu,
etc.) Mais ce sont des installations qui ont été faites avec tout ce qu’il
sortait sans réfléchir ou se pencher sur l’économie de ressources. Ce serveur
sera minimal coté installation, et maximisé sur VMWare... voici les étapes que
j’ai fait.

## Télécharger Ubuntu

L'idée c'est d'installer le serveur en minimal... donc une visite sur
[http://www.ubuntu.com/getubuntu/download/][0] s'impose.

La dernière mouture en version server suffit.

Actuellement, celle utilisée a été la Ubuntu server 7.04 Feisty Fawn de son nom.

Il ne reste qu'a brûler le ISO sur un CD.

Booter le médium d'installation Une fois le démarrage fait, un écran de la sorte
apparaît.

<app-image src="lost-image"></app-image>

Sélectionner le premier choix, on fait une installation.

<app-image src="lost-image"></app-image>

Choisir la langue d'installation, personnellement je suis anglophone pour ce qui
touche a mon OS, c'est à votre choix.

<app-image src="lost-image"></app-image>

On choisit "Canada" (contrairement a l'image), choisir son pays... ça aide :)

Ensuite on demande le clavier. Ma combinaison de clavier préféré c'est "Canadien
Français" (cf) ou Canadien tout court... c'est pas toujours clair mais le
logiciel nous permet de faire nos propres choix et de le tester.

<app-image src="lost-image"></app-image>

Setter un nom c’t’important. Fiez vous aux normes de votre data-center.

<app-image src="lost-image"></app-image>

Setter son username habituel, car ensuite faire on peut copier sa clé publique
direct dans le nouveau serveur

```bash
scp ~/.ssh/id_dsa.pub ubuntu:~/.ssh/authorized_keys
```

et pouvoir vivre sans entrer son password a chaque fois :) (hors du sujet mais
j'ai mis la commande au cas où)

<app-image src="lost-image"></app-image>

Personnellement je ne sélectionne rien ici, à moins de m'en servir... mais je
n'aime pas ça que le serveur LAMP soit installable et upgradable
automatiquement... Les applications web ne "s'upgradent" pas automatiquement,
elles.

<app-image src="lost-image"></app-image>

Installation complétée!

Installation des services Voici les étapes faites pour installer le reste.

Se logguer après le redémarrage avec les crédentiels fournis lors de
l'installation.

Utiliser `sudo su --` (ou "`sudo -s`") pour s'élever au commandes d'un shell
root.

```bash
sudo -s
vi /etc/apt/sources.list
```

<app-image src="lost-image"></app-image>

Ajoutez la ligne suivante:

```
deb http://archive.canonical.com/ubuntu feisty/commercial main
```

<app-image src="lost-image"></app-image>

Ensuite un update et un upgrade s'impose... question de garder à jour le
serveur.

```bash
apt-get update
apt-get upgrade
```

<app-image src="lost-image"></app-image>

Puis, installer les kernel-modules

```bash
apt-get install vmware-server vmware-tools-kernel-modules
```

Répondre oui a toutes les questions et entrer le numéro de série VMWare sur le
site [http://www.vmware.com][21], obligatoire.

<app-image src="lost-image"></app-image>

La console VMWare Vù qu'on a pas de XWindows pour gérer, on utilise une console
vmware-server à partir d'une autre machine sur notre LAN.

<!-- #XXX rb-notice-box -->
<app-alert-box alert-type="error" title="Note lors de la migration 2020-09-26" message="Après re-lecture (et 14 ans plus tard) je réalise les risques que j’aurai pu causer sur mon propre serveur. Ne suivez pas aveuglément ce type de conseil! Assurez-vous de seulement installer des binaires de sources que vous faites confiance, comme celles provenant du vendeur. Pas d’un blogue au hasard! A moins que vous puissiez lire le code, et compiler vous-même."></app-alert-box>

```bash
cd /lib/security
wget www.matthewbrowne.com/blog/wp-content/uploads/pam_unix_vm.so
```

<app-image src="lost-image"></app-image>

Le blogeur de qui je prend mes sources avait fait une librairie `pam_unix_vm.so`
pour remplacer `pam_unix2.so`

De toute façon il lorsque j'éditait le fichier `/etc/pam.d/vmware-authd` (celui
auto-généré par notre installation) Sortait avec des liens absolus qui
semblaient bogus.

Alors j'ai suivi, récrit le fichier comme suit

<app-image src="lost-image"></app-image>

Ensuite on redémarre la machine

```bash
init 6
```

Généralement, sur la console, tu pourrait te connecter sur "Remote host" avec
tes crédentiels et ton host et gérer tes VM :)

Source

- Les notes très utiles et les screenshots de
  ~~`http://matthewbrowne.com/blog/?p=92`~~ (site maintenant hors-ligne)
- Last.fm et la musique et le café :PpP

[0]: https://www.ubuntu.com/getubuntu/download/
[21]: https://www.vmware.com/


<!--
https://web.archive.org/web/20060916043739/http://www.flock.com/
https://web.archive.org/web/20071109134548/http://www.flock.com/blogged-with-flock
-->
