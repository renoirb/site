---
locale: fr-CA
title: Installer une Machine Virtuelle Linux roulant dans VMware Fusion sous Mac OS X
canonical: >-
  https://renoirboulanger.com/blog/2010/07/installer-une-machine-virtuelle-linux-roulant-dans-vmware-fusion-sous-mac-os-x/
status: publish
revising: true
caption: true
migrateImages: true
created: '2010-07-07'
updated: '2023-11-16'
tags: []
categories: []
excerpt: ''
coverImage:
  src: ~/assets/content/blog/2010/07/3_resultat.png
  alt: |
    Capture d’écran macOS coupée ou l’on voit en partie trois fenêtres superposées d’un dossier ouvert avec Finder, et Netbeans et VMWare Fusion ouvert.
  text: |
    Bureau Mac OS X avec applications provenant de la Machine Virtuelle roulant a l'intérieur de la Machine Virtuelle
---
<!--
migrateLinks:
  external: 1
  waybackMachine:
  - laurentbois.com
-->

<p>A force de travailler sur plusieurs environnement de projets il est venu le réflexe d'utiliser des Machines Virtuelles (VM) pour contenir mes espaces de travail. Avec ce type d'installation je peut partager avec mes collègues au bureau la même installation mais qui roule sur chacun de nos postes de travail.</p>

<p>J'en ai parlé plusieurs fois (dont <a href="/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-i/">ici</a>, <a href="/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-ii/">ici</a>. <a href="/blog/2007/11/mon-espace-de-travail/">Je le fait depuis 2007 même</a>). L'idée de cet article est de vous montrer comment j'ai fait pour mon poste de travail Mac OS X.</p>

<p>Les particularités de cette procédure est que:</p>

<ol>
    <li>J'utilise la fonction de partage de dossier de VMware Fusion sur Mac OS X
(Qui me permet d'avoir UN dossier dans le Mac et que la VM agit comme si c'était un dossier local)</li>
    <li>J'ai essayé Netbeans pour développer en PHP (<a href="https://netbeans.apache.org/front/main/download/index.html?platform=linux&lang=en&option=php">lien de téléchargement</a>)
(au lieu d'Eclipse... mais en fait, les programmes utilisés dans la VM n'ont pas d'importance)</li>
    <li>J'utilise VMware Fusion (sur la même machine de travail) plutôt que VMware Server ou d'utiliser un serveur distant de VM (<a href="http://www.vmware.com/products/server/">VMware server</a> et/ou <a href="https://www.vmware.com/products/cloud-infrastructure/esxi-and-esx">VMware ESXi</a>).</li>
    <li>(Pas illustré comment faire) Les dossiers que j'ai mis un label mauve (voir captures d'écran) sont des dossiers qui ne sont pas synchronisés dans le Timecapsule. Car ça sert a rien d'archiver des dossiers de travail qui sont déjà sauvegardés dans un gestionnaire de source (Subversion, eh oui, encore!)</li>
</ol>

<p>Les avantages de cette installation:</p>

<!--#TODO-inline-edit-->
<!-- FUSE (Filesystem in Userspace) is an interface for userspace programs to export a filesystem to the Linux kernel.  -->

<ol>
    <li>Plus besoin de faire SCP, ni NFS, et sans <a href="https://github.com/libfuse/libfuse">FUSE</a> (un <em>mount</em> (<a href="http://en.wikipedia.org/wiki/Mount_(Unix)">Wikipedia</a>) mais, en SSH) pour partager entre les deux machines les dossiers</li>
    <li>On peut l'installer sur un ordinateur portable et ne pas avoir a attendre d'être sur le réseau pour travailler</li>
    <li>On peut sauver de l'espace disque en réduisant la taille des disques de la VM. Car l'espace de stockage des fichiers de travail sera dans les dossiers locaux du Mac.</li>
</ol>

<!--more-->

<h3><a name="VMLinuxsousVMwareFusionsousMacOSX-Objectifs"></a>Objectifs</h3>

<ul>
    <li>Pouvoir <strong>utiliser l'espace de stockage du Mac natif</strong> pour les fichiers de travail plutot que d'utiliser l'espace disque de la machine virtuelle.</li>
</ul>

<h3><a name="VMLinuxsousVMwareFusionsousMacOSX-Cequ%27ilfaut"></a>Ce qu'il faut</h3>

<ul>
    <li>Avoir installé une VM sous Linux quelconque</li>
    <li>La VM doit être locale au Mac</li>
    <li>Une VM avec 10Go d'espace et moins est suffisant</li>
    <li>Réseau en mode «<strong>Bridged</strong>»</li>
    <li>Faire après une procédure similaire a NFS et d'avoir le meme uid et guid que le serveur</li>
</ul>

<h3><a name="VMLinuxsousVMwareFusionsousMacOSX-Proc%C3%A9dure"></a>Procédure</h3>

<h4><a name="VMLinuxsousVMwareFusionsousMacOSX-Changerle%7B%7Buid%7D%7Det%7B%7Bguid%7D%7Ddel%27utilisateurcourrant"></a>Changer le <tt>uid</tt> et <tt>guid</tt> de l'utilisateur courrant</h4>

<ol>
<li>Vérifier quel `uid` et `guid`, sous Mac, dans <strong>Applications</strong> &gt; <strong>Terminal</strong>

```bash
id
uid=20001(renoirb) gid=20(staff) groups=20(staff),404(com.apple.sharepoint.group.3),204(_developer),100(_lpoperator),98(_lpadmin),81(_appserveradm),80(admin),79(_appserverusr),61(localaccounts),12(everyone),401(com.apple.access_screensharing),403(com.apple.sharepoint.group.2),402(com.apple.sharepoint.group.1),406(com.apple.sharepoint.group.5)
```

<strong>Note</strong> sur le Mac, c'est <strong>20001</strong></li>

<li>Se connecter a la VM locale, et y créer un compte backup pour effectuer les opérations

```bash
ssh 192.168.0.100
sudo -
adduser patateuser
...
usermod -a -G admin patateuser
```

</li>
</ol>

<ol>
    <li>s'y déconnecter et se reconnecter

```bash
exit
ssh patateuser@192.168.0.100
```

</li>
    <li>Savoir son user id sur la machine Linux

```bash
id
uid=1000(renoirb) gid=1000(renoirb) groups=4(adm),20(dialout),24(cdrom),46(plugdev),105(lpadmin),119(admin),122(sambashare),1000(renoirb)
```

<strong>Note</strong> sur la VM, c'est <strong>1000</strong></li>

<li>Changer les permissions du dossier user <strong>vigr</strong> et <strong>vipw</strong>
<em>Commandes a faire en root, puis en <tt>vim</tt> pour modifier le uid d'un usager</em>

```bash
sudo -s
vipw
```

```
:%s/1000/20001/g
:wq
```

</li>
    <li>Changer les permissions du <tt>/home/PATATEUSER</tt>

<rb-notice-box variant="info" class="my-5">

Avant de faire le `chown` il faut s'assurer en regardant a l'intérieur du homedir cible à la VM si il n'y a pas un alias vers autre chose. Question de ne pas changer les permissions de d'autres fichiers dans l'arborescence et affecter ailleurs que dans le système

</rb-notice-box>

```bash
cd /home
chown -R renoirb:renoirb renoirb/
```

<strong>Attendre ...</strong></li>

<li>Tenter de se reconnecter <strong>DANS UN AUTRE SESSION SSH</strong>

<rb-notice-box variant="info" class="my-5">
  <strong slot="header">Pourquoi?</strong>

Parceque si quelque chose de malencontreux se serait produit durant le chown, le login ne pourrait pas marcher

</rb-notice-box>


```bash
ssh renoirb@192.168.0.100
```

</li>
    <li>Croiser les doigts</li>
    <li>Tester si le ID est changé

```bash
id
uid=20001(renoirb) gid=20001(renoirb) groups=4(adm),20(dialout),24(cdrom),46(plugdev),105(lpadmin),119(admin),122(sambashare),20001(renoirb)
```

<strong>Good!</strong></li>
</ol>

<h4><a name="VMLinuxsousVMwareFusionsousMacOSX-PartagedossiersentreleMacetlaVMLinux"></a>Partage dossiers entre le Mac et la VM Linux</h4>

<p>Idéal pour utiliser l'espace disque Mac pour y stocker des documents de travail utilisés a l'intérieur de la VM.</p>

<rb-notice-box variant="info" class="my-5">
  <strong slot="header">L’avantage de faire ça</strong>

Ce qui est bien de tout ça c'est que l'espace disque de la VM peut rester petit et contenir les outils de travail (Apache, PHP, Eclipse/netbeans) et avoir le gros des dossiers de travail (workspace) dans la machine native.

</rb-notice-box>

<ol>
    <li>Lancer <strong>VMWare Fusion</strong>

[caption id="attachment_2304" align="alignnone" width="216" caption="Panneau de paramètres VMware Fusion pour Mac OS X"]<a href="https://renoirb.github.io/site-assets/assets/content/blog/2010/07/0_settings.png"><img class="size-medium wp-image-2304 " title="Panneau de paramètres VMware Fusion pour Mac OS X" src="https://renoirb.github.io/site-assets/assets/content/blog/2010/07/0_settings-300x261.png" alt="" width="216" height="188" /></a>[/caption]</li>

<li>Aller dans <strong>Settings</strong> &gt; <strong>Sharing</strong> (Partage)

[caption id="attachment_2305" align="alignnone" width="300" caption="Panneau paramètres VMware Fusion pour Mac OS X écran Partage"]<a href="https://renoirb.github.io/site-assets/assets/content/blog/2010/07/1_sharing.png"><img class="size-medium wp-image-2305" title="Panneau paramètres VMware Fusion pour Mac OS X écran Partage" src="https://renoirb.github.io/site-assets/assets/content/blog/2010/07/1_sharing-300x228.png" alt="" width="300" height="228" /></a>[/caption]</li>

<li>Ajouter le partage désiré (le petit +)


<rb-notice-box variant="info" class="my-5">
  <strong slot="header">Recommendation</strong>

Pour éviter tout risque de souçis de chemins entre les deux machines. Ne pas utiliser un dossier avec des espaces.

</rb-notice-box>

</li>
    <li>Aller dans la VM

<rb-notice-box variant="info" class="my-5">
  <strong slot="header">Tunnel X11</strong>

L'idée du Tunnel X est pour permettre de rouler une application locale (a la VM) a l'extérieur (donc afficher sur le Mac).

</rb-notice-box>

```bash
ssh -X renoirb@192.168.0.100
```

</li>
    <li>Lier le dossier partagé du Mac a un dossier local a la VM (workspace)... <strong>Sur la VM</strong>

```bash
sudo -s
ln -s /mnt/hgfs/workspace/ /home/renoirb/workspace
```

</li>
    <li>Exécuter le programme distant

```bash
netbeans &
```

<strong>Note</strong> Le «amperstand» (&amp; ou perluet) sert a préciser que le programme roulera en arrière-plan.</li>
<li>Configurer l'outil de développement pour qu'il puise ses fichiers de travail DANS <tt>/home/renoirb/workspace</tt>

<rb-notice-box variant="info" class="my-5">
  <strong slot="header">Note</strong>

Netbeans n'utilise pas le meme type de chemin et c'est différent d'un outil de développement a l'autre.

</rb-notice-box>

</li>
    <li>Résultat
<a href="https://renoirb.github.io/site-assets/assets/content/blog/2010/07/3_resultat.png"><img class="alignnone size-medium wp-image-2306" style="border: none !important;" title="Bureau Mac OS X avec applications provenant de la Machine Virtuelle roulant a l'intérieur de la Machine Virtuelle" src="https://renoirb.github.io/site-assets/assets/content/blog/2010/07/3_resultat-300x242.png" alt="" width="300" height="242" /></a></li>
</ol>

<h3><a name="VMLinuxsousVMwareFusionsousMacOSX-R%C3%A9f%C3%A9rences"></a>Références</h3>

<ul>
    <li><a href="http://laurentbois.com/2008/04/26/install-ubuntu-804-using-vmware-fusion-on-mac-os-x/">http://laurentbois.com/2008/04/26/install-ubuntu-804-using-vmware-fusion-on-mac-os-x/</a></li>
    <li><a href="http://www.cyberciti.biz/faq/howto-linux-add-user-to-group/">http://www.cyberciti.biz/faq/howto-linux-add-user-to-group/</a></li>
</ul>
