---
locale: fr-CA
title: Installation RHEL4 sur un Dell PowerEdge 860
canonical: >-
  https://renoirboulanger.com/blog/2007/04/installation-rhel4-sur-un-dell-poweredge-860/
status: publish
revising: true
migrateCode: true
created: '2007-04-16'
updated: '2013-03-27'
tags:
  - linux
  - tutoriels
categories:
  - tranche-de-vie
excerpt: ''
---

Voici comment j'ai fait pour préparer un serveur web... d'autres directives pourraient suivre: ATTENTION; contenu très technique :)

<!--more-->

<strong>Étapes a suivre</strong>
<ul>
	<li>Insérer le CD "Installation and Server Management" fourni</li>
	<li>Suivre les étapes de configuration du serveur
<ul>
	<li>Qui consiste a faire linstallation</li>
	<li>Setter le "partitionning"</li>
	<li>Choisir la distribution Linux (RedHat Enterprise 4 X86)</li>
	<li>Suivre les directives a lecran</li>
</ul>
</li>
	<li>Une fois les étapes faites on se retrouve devant un login noir, tout va bien.
<ul>
	<li>Savoir son adresse ip   <tt class="nobr">#ifconfig</tt>  noter le ip de eth0 (généralement)</li>
</ul>
</li>
	<li>Un texte bizzare demande si on veut installer "Open Manage Server Assistant"
<ul>
	<li>Suivre les étapes pour installer (select all) puis "i" pour installer</li>
	<li>Lancer le programme pour la première fois "<tt class="nobr">  /usr/bin/srvadmin-services.sh start  </tt>"</li>
	<li>Pour se loguer, aller: https://(adresse ip):1311 avec le login root
<ul>
	<li>Sert a pouvoir avoir l'état de la machine a distance, faire un reboot, etc.</li>
</ul>
</li>
</ul>
</li>
	<li>executer   <tt class="nobr">#up2date --configure</tt>
<ul>
	<li>Ce qui enregistrera la machine dans notre compte avec RHN</li>
	<li>NOTE: demander les crédentiels pour pouvoir se loguer sur RHN</li>
</ul>
</li>
	<li>Aller sur <span class="nobr"><a href="http://www.redhat.com/network/" title="Visit page outside Confluence" rel="nofollow">http://www.redhat.com/network/</a></span> et se loguer avec lesdits credentiels</li>
	<li>Executer le fichier <a href="https://renoirboulanger.com/files/cleanRHEL.sh" title="Fichier de nettoyage RHEL4"><span class="nobr">cleanRHEL.sh</span></a><!--#TODO-Import-Code-From-External-->
<ul>
	<li>Voici comment:  <tt>#/bin/bash cleanRHEL.sh</tt></li>
</ul>
</li>
</ul>
<strong>Glitches que j'ai trouvé </strong>

RHEL 4 ET Open Manage Server Assistant installe des paquets qui cree un conflit pour lupdate alors il faut enlever ceux ci et FORCER l'update.

<pre lang="bash">#up2date -f seamonkey-nspr
#up2date -f mozilla-nspr</pre>  puis ensuite, lancer lupdate en ignorant les trucs qui boguent!
<pre lang="bash">#up2date -u -f --exclude=mozilla-nss,ethereal</pre>

<strong>Références</strong>
<ul>
	<li><span class="nobr"><a href="http://www.trilug.org/talks/2005-10-raid/md-lvm-presentation/index.html" title="Visit page outside Confluence" rel="nofollow">http://www.trilug.org/talks/2005-10-raid/md-lvm-presentation/index.html</a></span></li>
	<li><span class="nobr"><a href="http://www.sdmachelp.com/linuxraid.html" title="Visit page outside Confluence" rel="nofollow">http://www.sdmachelp.com/linuxraid.html</a></span></li>
	<li><span class="nobr"><a href="http://www.directadmin.com/forum/showthread.php?t=8643" title="Visit page outside Confluence" rel="nofollow">http://www.directadmin.com/forum/showthread.php?t=8643</a></span></li>
	<li><span class="nobr"><a href="http://www.tldp.org/HOWTO/Software-RAID-HOWTO-5.html" title="Visit page outside Confluence" rel="nofollow">http://www.tldp.org/HOWTO/Software-RAID-HOWTO-5.html</a></span></li>
</ul>
