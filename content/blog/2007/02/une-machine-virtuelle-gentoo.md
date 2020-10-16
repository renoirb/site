---
locale: fr-CA
date: &createdAt '2007-02-10T15:12:01-04:00'
createdAt: *createdAt
title: Une machine virtuelle Gentoo
canonical: 'https://renoirboulanger.com/blog/2007/02/une-machine-virtuelle-gentoo/'
categories:
  - Logiciel-Libre
tags:
  - Procedure
---

## Introduction

Pour monter une machine virtuelle, il faut VMWare player (www.vmware.com) J'ai
choisi d'utiliser Gentoo pour l'exemple car c'est un linux souple a la ligne de
commande et hyper customisable bare-bone. Bref, pas de fla-fla, juste ce que
l'on a besoin!

Voici les commandes que j'ai fait, je vulgariserai plus tard. La Gentoo VM a
obtenir

Voici un snip de la page ou j'ai été chercher la GentooVM pré-configurée

SOURCE: [gentoovm.com/.../Main_Page][main_page], [en date du le 14 février
2007][main_page_internetarchive]

[main_page]: http://gentoovm.com/wiki/index.php/Main_Page
[main_page_internetarchive]:
  https://web.archive.org/web/20070212083334/http://gentoovm.com/wiki/index.php/Main_Page
  'Internet Archive version of gentoovm.com Wiki du 14 février 2007'

```txt
This is a relatively bare bones install of gentoo. Xorg and WM not included. So you still have to build all the stuff.

Gentoo 2006.1 (Barebones) VMWare Appliance:
MD5 Source Comments
Mirror 1 gentoovm.com
Mirror 2 http://gentoo.chem.wisc.edu UW-Madison Dept. of Chemistry official Gentoo source mirror
Mirror 3 gentoovm.intarweb.net This mirror generously provided by Phaerus

* Created: September 23rd, 2006
* Filesize
  * Compressed: 409 MB (429,163,861 bytes)
  * Extracted: 1.16 GB (1,249,512,994 bytes)
  * Root Password: gentoo
  * Virtual Drive: 10.7 GB, 10737418240 bytes
* Partitions
  * /dev/hda1 boot ext2 32MB
  * /dev/hda2 swap 512MB
  * /dev/hda3 reiserfs 10GB
* Timezone: US/Pacific
* Hostname: gentoo-vm
* Kernel: gentoo-sources-2.6.17-r8
* Boot Loader: grub-0.97-r8
* Network Interface(s): DHCP
```

## Commencer

**La prise en main de la Gentoo VM**

<app-alert-box title="Dans le terminal">
Chaque ligne de commande peux être faite soit en tant que root, ou avec la commande `sudo`
</app-alert-box>

**Changer le mot de passe root**

```bash
passwd
```

Toujours utile de changer son mot de passe root, oubliez pas de faire les ajouts
des usagers... plus tard.

## Configuration clavier

**Changer le keymap** (configuration du input local (clavier))

```bash
nano -w /etc/conf.d/keymaps
```

Changer la variable `KEYMAP="us"` pour `KEYMAP="cf"` "`cf`" est le clavier
_Canadien Français_ avec le SHIFT+3 pour "`/`" et dièse "`#`" a coté du chiffre
"1" au clavier. Mon keymap favori quoi!

```ini{}[/etc/conf.d/keymaps]
KEYMAP="cf"
```

Appliquer les changements

```bash
env-update && source /etc/profile
```

## Configuration réseau

Changer le HOSTNAME de la machine, si désiré

```bash
nano -w /etc/conf.d/hostname
```

Mettre la valeur que vous voulez, dans l'exemple; simplement remplacer le "tux"

```bash{}[/etc/conf.d/hostname]
HOSTNAME="tux"
```

**Statique-ifier son adresse IP** au réseau

```bash
nano -w /etc/conf.d/net
```

Inscrire dans le fichier la configuration IP statique désirée

```bash{}[/etc/conf.d/net]
config_eth0=( "192.168.1.83 netmask 255.255.255.0 brd 192.168.1.255" )
routes_eth0=( "default gw 192.168.1.1" )
```

## Démarer le réseau par défaut

Cette commande ajuste la configuration interne pour s'assurer que l'interface
réseau `eth0` est active durant le processus de démarrage.

```bash
rc-update add net.eth0 default
```

## Mapper le réseau

```bash
nano -w /etc/hosts
```

```txt{}[/etc/hosts]
192.168.1.83 gentoo-vm
```

Ce peut être une bonne idée d'utiliser le fichier \> renoir-hosts.txt selon
l'adressage IP du bureau

## Installer VIM, mon éditeur favori

```bash
emerge vim vim-core
```

## S'assurer que SSHd de OpenSSH est au démarrage

```bash
rc-update add sshd default
```

## Installer Apache2

```bash
echo 'net-www/apache -mpm-worker mpm-prefork' > /etc/portage/package.use
emerge -aDNtuv apache
```

Répondre '<span lang="en">yes</span>' et attendre...

**Effacer les fichiers de config**, surtout si l'install est neuve

```bash
find /etc -iname '._cfg????_*' -exec rm -rf {} \\;
```

Effacer TOUT les fichiers trouvés portant la mention .\_cfgTRUC (fichiers
sauvegardés de config) safe a effacer si machine neuve, ca sert a rien de
"gosser" avec ça! Ajouter Apache2 au default runlevel

```bash
rc-update add apache2 default
```

## Installer le serveur FTPd

```bash
emerge vsftpd net-ftp/ftp
rc-update add vsftpd default
```

Quick-and-dirty pour installer le FTPd... Copier le fichier config, puis
configurer le serveur FTP

```bash
cp /etc/vsftpd/vsftpd.conf.example /etc/vsftpd/vsftpd.conf
```

**Éditer puis ensuite le démarrer**

```ini{}[/etc/vsftpd/vsftpd.conf]
ascii_upload_enable=YES
ascii_download_enable=YES
local_umask=022
anonymous_enable=NO
local_enable=YES
```

```bash
/etc/init.d/vsftpd start
```

## Rappels de base

- Nano et Pico son des éditeurs de base en UNIX, pour quiter après une
  modification, simplement faire <kbd>CTRL</kbd>+X (pour exit) et répondre aux
  questions
- Vi ou ViM (Vi-improved) est mon éditeur préféré! pour éditer, faire
  '<kbd style="text-transform:lowercase;">i</kbd>' (insert). Écrire.... puis,
  pour terminer; faire <kbd>ESC</kbd> ET
  <kbd>:</kbd><kbd style="text-transform:lowercase;">w</kbd><kbd style="text-transform:lowercase;">q</kbd>'
  (`:wq` = <span lang="en">command write and quit</span>)

## Ressources

- http://www.vmwhere.net/ Un blog sur le sujet des VM \* http://gentoovm.com/
  Qui offre un bon howto et une image bare-bone de Gentoo en VM
- http://www.gentoo.org/doc/en/handbook/ LE Handbook pour Gentoo linux
- http://gentoo-wiki.com/HOWTO\_Subversion\#Installation Notes sur
  l'installation de SVN
- http://gentoo-wiki.com/HOWTO\_Apache2\_with\_subversion\_SVN\_and\_DAV Howto
  pour DAV et svn... (le sharing à -la-samba)
