---
locale: fr-CA
title: Une VM Linux qui sert au développement PHP 5.3 avec Eclipse - partie II
canonical: >-
  https://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-ii/
status: publish
revising: true
created: '2009-09-03'
updated: '2013-03-27'
tags:
  - linux
  - logiciel-libre
  - securite
  - tutoriels
  - techniques
categories: []
excerpt: ''
---

Ce billet est le <strong>deuxième</strong> d'une série d'articles décrivant la fabrication d'une Machine Virtuelle (VM) de développement pour une équipe de dévelopeurs.

Ce billet expliquera comment j'installe un système Linux que je considère de base pour une infrastructure d'hébergement applicatif. Je ne couvrirai pas les configurations plus avancés pour améliorer la sécurité. Je risque de le faire plus tard.
<!--more-->
J'ai séparé cette série en quatre volets.
<ol>
	<li><strong><a href="http://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-i">Description du concept</a></strong> (article précédent)

Ce que je vais discuter dans cette série d'articles n'est pas nécessairement connu de tous. Je vais donc vulgariser un peu avant de commencer.</li>
	<li><strong>Installation du système</strong> (cet article)

Je donne ici mon secret de magicien avec quelques configurations que je considère importantes pour un environement d'hébergement web pour améliorer la sécruité (le strict minimum pour cette série d'articles. Je pourrai en faire un plus poussé plus tard).</li>
	<li><strong><a href="http://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-iii">Compilation de PHP 5.3</a></strong>

Comment installer Apache 2.x avec le dernier cutting-edge PHP.</li>
	<li><strong>Installation de l'environnement de développement avec Eclipse PDT</strong> (à venir)

La magie se passe par là! Avec ce setup votre équipe pourra répliquer l'installation de développement a volonté.</li>
</ol>


<h3><a name="BaseSystem"></a>Installation du système de base</h3>
J'utilise personnellement Debian Linux depuis quelques années car je le trouve plus léger que Red Hat Enterprise Linux ou n'importe quelle saveur de RedHat (Fedora, CentOS, etc)

<strong>Note: </strong>Je n'expliquerai pas comment faire pour  <a href="http://linux.justinhartman.com/Installing_a_Debian_Etch_base_system">installer Debian Linux de base (dans une VM)</a> car c'est un sujet déjà largement couvert.

Personnellement j'installe le système avec la version actuelle provenant d'un mini boot server que j'ai sur un réseau que je partage avec quelques amis.

Une installation simple <a href="http://linux.justinhartman.com/Installing_a_Debian_Etch_base_system">comme celle ci</a>, ferait très bien l'affaire.
<ul>
	<li>Utiliser le dernier Debian stable</li>
	<li>à l'écran "<strong>Debian Software Installation</strong>" <strong>Je coche</strong> généralement ~<strong>rien</strong>~, car<strong> je vais donner plus de détails</strong> ici.</li>
</ul>

Les étapes...
<ol>
	<li>Modifier le
<pre lang="bash">/etc/apt/sources.list</pre>
et <strong>Enlever la mention du CD-rom</strong> et <strong>Ajouter la mention "<tt>contrib</tt>"</strong>
<pre lang="bash">deb http://debian.savoirfairelinux.net/debian/ lenny main
deb-src http://debian.savoirfairelinux.net/debian/ lenny main
deb http://security.debian.org/ lenny/updates main contrib
deb-src http://security.debian.org/ lenny/updates main contrib

deb http://ftp.debian.org/debian lenny contrib
deb-src http://ftp.debian.org/debian lenny contrib

deb http://debian-multimedia.org/ lenny main
deb-src http://debian-multimedia.org/ lenny main</pre>
<strong>Note:</strong> Il s'agit de mon propre <tt>sources.list</tt> ayant trouvé <tt>savoirfairelinux</tt> comme étant le plus rapide en utilisant <a href="http://linuxhelp.blogspot.com/2007/05/using-netselect-apt-tip-to-select.html">netselect-apt</a> et la liste des <a href="http://www.debian.org/mirror/list">mirroirs Debian</a></li>
	<li>Updater les sources
<pre lang="bash"># apt-get update</pre>
</li>
	<li>Installer les paquets essentiels
<pre lang="bash"># apt-get install openssh-server mlocate screen sudo vim ntpdate linux-headers-$(uname -r) syslog-ng build-essential open-vm-tools</pre>
<strong>Note:</strong> remarquez la présence de <tt>open-vm-tools</tt> il s'agit d'un package provenant de Debian contrib pour les VM <strong>VMware</strong> (n'installez pas si vous utilisez <tt>Xen</tt>)... au lieu de compiler vm-ware-tools pour le kernel... Debian s'en occupe (!!)</li>
	<li>Ajouter les droits sudo à <tt>sudo</tt>
<pre lang="bash"># visudo</pre>
<ol>
	<li>Va ouvrir <tt><a href="http://en.wikipedia.org/wiki/Pico_%28text_editor%29">pico</a></tt></li>
	<li>Décommenter <strong><tt>%sudo ALL=NOPASSWD: ALL</tt></strong></li>
	<li>Pour quitter, faire CTRL+x y ENTER</li>
</ol>
</li>
	<li>Updater la DB de mlocate
<pre lang="bash"># updatedb</pre>
</li>
	<li>Lier killall5 sous le nom legacy de <tt>killall</tt>
<pre lang="bash"># ln -s /sbin/killall5 /sbin/killall</pre>
</li>
	<li>suivre <strong>Procédure de configuration de NTP pour les serveurs</strong>.
<strong>Note</strong> L'idée est d'éviter d'utiliser en mémoire les démons le plus possible. Si utile soit-il (comme ajuster l'heure, ici). Il est plus pratique qu'elle soit ajustée aux heures et laisser l'espace mémoire pour son usage primaire.
<ol>
	<li>Entrer en édition dans le fichier
<pre lang="bash">$ sudo vi /etc/default/ntpdate</pre>
</li>
	<li>Trouver dans le fichier la variable <strong><tt>NTPSERVERS</tt></strong>, <strong>Remplacer</strong>, soit par...
<pre lang="bash">NTPSERVERS="0.ca.pool.ntp.org 1.ca.pool.ntp.org 2.ca.pool.ntp.org"</pre>
</li>
	<li>Faire i (pour Insert)</li>
	<li>Ajouter a <tt>NTPOPTIONS</tt>
<pre lang="bash">NTPOPTIONS="-u"</pre>
</li>
	<li>Faire ESCAPE</li>
	<li>:wq</li>
	<li>Créer un fichier <tt>cron.hourly</tt>
<pre lang="bash">$ sudo vi /etc/cron.hourly/ntpdate</pre>
</li>
	<li>Ajouter le contenu
<pre lang="bash">#!/bin/sh
PATH=/sbin:/bin
test -f /usr/sbin/ntpdate || exit 0
if test -f /etc/default/ntpdate ; then
        . /etc/default/ntpdate
else
        NTPSERVERS="0.ca.pool.ntp.org"
fi
test -n "$NTPSERVERS" || exit 0
/usr/sbin/ntpdate -s $NTPOPTIONS $NTPSERVERS &gt;&gt; /dev/null 2&gt;&amp;1
# Exit with a succes anyway, avoids spamming root.
exit 0</pre>
</li>
	<li>Changer les permissions pour qu'il puisse être exécuté
<pre lang="bash">$ sudo chmod 755 /etc/cron.hourly/ntpdate</pre>
</li>
	<li>Essayer
<pre lang="bash">$ sudo /etc/cron.hourly/ntpdate</pre>
</li>
	<li>Voir dans syslog, ça devrait ressembler à...
<pre lang="bash"># tail /var/log/syslog
...
Dec 30 13:39:35 willow ntpdate[1912]: adjust time server 192.168.1.5 offset 0.005642 sec
...</pre>
</li></ol></li>
<li>Installer le service d'envoi courriel...

Question de pouvoir <strong>recevoir les avertissements</strong> par courriel 
<pre lang="bash"># apt-get install postfix</pre>
<ol>
	<li>Satellite System (On veut envoyer les courriels ailleurs et rien garder ici)</li>
	<li>"Mail name?"...  <strong><tt>NOMDELAVM</tt></strong></li>
	<li>"SMTP relay host?"...  votre relai SMTP fourni par votre fournisseur</li>
	<li>"Other destinations..." Ajuster les noms</li>
	<li>Enter</li>
	<li>"Local networks?"... ENTER</li>
	<li>...</li>
	<li>Tester l'envoi
(<strong>NOTE:</strong> vous pouvez aussi utiliser l'outil Debian <tt>swaks</tt>)
<pre lang="bash"># mail test@test.com
Subject: Patate 1 am
Message, qui doit terminer avec une ligne seule et un point .
.
Cc:</pre></li>
	<li>Regarder les mails du destinataire.</li>
</ol></li>
</ol>


<h3>Références</h3>
<ul>
	<li><a lang="en" href="http://www.vmware.com/products/server/">VMware Server</a> (anglais seulement)</li>
	<li><a lang="en" href="http://linux.justinhartman.com/Installing_a_Debian_Etch_base_system">Installing a Debian Base system</a> (anglais seulement)</li>
	<li><a lang="en" href="http://helpdeskgeek.com/virtualization/creating-a-virtual-machine-on-vmware-server/">Creating a Virtual Machine on VMware server</a> (anglais seulement)</li>
	<li><a lang="en" href="http://linuxhelp.blogspot.com/2007/05/using-netselect-apt-tip-to-select.html">Using <tt>netselect-apt</tt> tip to select</a> (anglais seulement)</li>
</ul>