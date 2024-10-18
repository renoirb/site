---
title: Montage de dossiers distants via SSHFS
locale: fr-CA
created: 2007-05-31
updated: 2013-03-27
canonical: >-
  https://renoirboulanger.com/blog/2007/05/montage-de-dossiers-distants-via-sshfs/
status: publish
revising: true
migrateLinks: true
migrateImages: false
gallery: false
caption: false
categories:
  - procedure
tags:
  - linux
excerpt: ''
waybackMachineSnapshots:
- orig: http://ubuntu.wordpress.com/2005/10/28/how-to-mount-a-remote-ssh-filesystem-using-sshfs/
  snapshots:
  - https://web.archive.org/web/20070324014306/http://ubuntu.wordpress.com/2005/10/28/how-to-mount-a-remote-ssh-filesystem-using-sshfs/
- orig: https://renoirboulanger.com/blog/2007/05/montage-de-dossiers-distants-via-sshfs/
  snapshots:
  - https://web.archive.org/web/20090903051709/https://renoirboulanger.com/blog/2007/05/montage-de-dossiers-distants-via-sshfs/
---

J’ai souvent vanté les mérites du SSHFS mais je n’ai jamais réellement expliqué
le concept du partage à-la-Windows... mais sécuritaire!

Le concept est simple. Un dossier de mount points sur diverses machines dans le
local en Linux. Disons que votre dossier ~ est dans /home/username, ajoutez vos
serveurs, par exemple, dans un dossier "Drives".

Attention aux non initiés en Linux... c’est un howto très technique!

Le résultat de cette procédure vous permettra d’accéder a des fichiers sur une
autre machine comme si vous y étiez. Ce n’est pas un système qui synchronise les
fichiers sur plus d’une machine. Ce n'est pas une copie de sauvegarde.

<!--more-->

## Assomptions

J’assumerai que vous avez deux machines Linux.

Pour la procédure, j’utiliserai les informations suivantes.

Veuillez ajuster pour votre situation:

<dl>
  <dt>Utilistaeur distant</dt>
    <dd>sa-storage</dd>
  <dt>Hôte Linux qui va stocker les fichiers</dt>
    <dd>192.168.0.2</dd>
  <dt>Chemin pour fichiers sur l’hôte Linux</dt>
    <dd>/home/sa-storage/Drives/web1</dd>
    <dd>/home/sa-storage/Drives/web2</dd>
</dl>

### Considérations

Je suis prends pour acquis les détails suivants;

- Le caractère `~` est un caractère qui de décrire le chemin vers le dossier
  Maison de l’utilisateur courrant, si vous êtes connecté en tant que "bob", le
  dossier sera `/home/bob`
- J’ai utilisé Ubuntu, le nom du paquet peut changer et le gestionnaire de
  paquet aussi, mais le reste devrait demeurer la même chose.
- Synonymes: _fusermount_, _sshfs_
- La commande <kbd>ALT</kbd>+<kbd>F2</kbd> est un raccourci clavier pour faire
  exécuter une commande, on pourrait trouver <kbd>RUN</kbd> dans le menu aussi.

## Prodécure

Sur notre machine locale, si dans le Terminal.

```sh
mkdir ~/Drives
```

Ajoutez y tout vos hosts que vous voulez... Je ne prendrai pas d’exemple réel
étant donné qu’on a pas nécessairement tous les même droits partout sur les
machines et vm. Personnellement, je l’ai fait sur les serveurs web1 et web2 deux
serveurs redondants d’hébergement de services web. J’ai donc créé ~/Drives/web1
et ~/Drives/web2

```sh
mkdir ~/Drives/web1
mkdir ~/Drives/web2
```

Dans mon exemple, sur ces deux machines j’ai mon propre usager et j’ai ajouté
mon login dans le ~/.ssh/authorized_keys de mon homedir. Si vous avez pas ça,
faites vous le en suivant le howto ici:
[login ssh sans mot de passe](/blog/2007/04/login-ssh-sans-mot-de-passe 'SSH sans mot de passe').
Vous pourrez tester en faisant $ ssh hostname il devrait se loguer tout seul. Si
vous ne faites pas cela, vous serez oubligé d’entrer vos mots de passes de
TOUTES vos machines... A chaque login. Pour continuer, on doit aussi installer
le paquetage sshfs

```sh
sudo apt-get install sshfs
```

Pour avoir le droit de monter les hôtes en sshfs, vous devez vous autoriser
l’exécution du mount sinon vous êtes condamné a entrer le mot de passe root a
chaque login. Vous pouvez aller via: <kbd class="nav">System <kbd>Administration
<kbd>Users</kbd></kbd></kbd> and Groups Puis ajoutez dans Manage groups (ou
quelque chose qui parle de ça) puis trouvez le groupe fuse puis dans Properties
ajoutez votre propre login qui est probablement non coché. Aussi: Une manière
alternative de s’ajouter le droit fuse, serait de faire en shell

```sh
sudo usermod -G fuse username
```

Finalement... l’auto exécution. Il faut aller dans <kbd class="nav">System
<kbd>Préférences <kbd>Sessions</kbd></kbd></kbd> puis ajouter un Startup
programs avec la commande suivante:

```sh
sshfs sa-storage@192.168.0.2:/home/sa-storage/Drives/web1 \
      ~/Drives/web1 \
      -o reconnect
```

Vous devinerez comment écrire correctement la commande en l’appliquant a vos
besoins. Oubliez pas de faire sauvegarder votre session GNOME,
<kbd>ALT</kbd>+<kbd>F2</kbd> puis tapez `gnome-session-save` puis enter.

Déconnectez et re-connectez-vous. En naviguant dans votre dossier _Maison_
(`~`), dans le dossier `~/Drives/` vous avez maintenant vos dossiers sur toutes
vos machines distantes... localement!

### Références

Mon expérience... et un peu de;

- [**How to mount a remote ssh filesystem using sshfs** October 28, 2005](https://web.archive.org/web/20070324014306/http://ubuntu.wordpress.com/2005/10/28/how-to-mount-a-remote-ssh-filesystem-using-sshfs/)
