---
locale: fr-CA
title: Mon espace de travail
canonical: https://renoirboulanger.com/blog/2007/11/mon-espace-de-travail/
status: publish
revising: true
created: '2007-11-26'
updated: '2013-03-27'
tags: []
categories: []
excerpt: ''
---

[caption id="attachment_726" align="alignright" width="150" caption="Ecran Eclipse de configuration Tomcat avec mention &quot;on tsc-lamp-dev&quot; "]<a href="http://renoirboulanger.com/wp-content/uploads/2007/11/desktoprenoir1.png"><img class="size-thumbnail wp-image-726" title="desktoprenoir" src="http://renoirboulanger.com/wp-content/uploads/2007/11/desktoprenoir1-150x150.png" alt="Ecran Eclipse de configuration Tomcat avec mention &quot;on tsc-lamp-dev&quot; " width="150" height="150" /></a>[/caption]

[Edit: 2009-08-17 je vais mettre a jour ce billet avec une nouvelle version des outils et plus de détails sur comment faire]

<div style="background: #ececec; margin: 5px 0px; padding: 18px 8px 8px 50px; border: 1px solid #333;"> 
<h4 style="color: #777; margin-bottom: 10px;">Mise à jour et façon différente de fonctionner</h4> 
<p>Dans un billet plus récent (que celui-ci) <a href="http://renoirboulanger.com/blog/2010/07/installer-une-machine-virtuelle-linux-roulant-dans-vmware-fusion-sous-mac-os-x/">j'explique comment le faire pour un Mac</a>.</p> 
</div> 

J'ai discuté lors d'un dîner d'apprentissage avec quelques collegues et montré comment j'ai monté mon setup de dev avec VMWare.

Au bureau on marche, généralement, avec une machine virtuelle qui a tout nos outils d'installé: Rational, la JRE, Tomcat ou Websphere, Eclipse, Cygwin, etc. Personnellement j'ai toujours un shell Bash d'ouvert, tant en Linux qu'en Windows (cygwin).

En tant que Linuxien que je suis, moi et un collègue on s'était dit qu'un moment donné, on pourrait rouler nos vm de developpement en linux point-barre.
<!--more-->
Actuellement, nous avons Ubuntu Linux qui roule et VMWare Server fait rouler la machine de developpement.

Nous avons donc monté une machine virtuelle linux de 4Go qui roule un xUbuntu minimal avec les JRE, Apache et nos autre outils.

Mais nous ne l'utilisions pas, jusqu'à  ce que j'ai décidé, un soir, de m'occuper du noeud et me débarrasser de Windows.

Dans mon cas, ma VM était tellement lente que même mon poste, qui est assez puissant, semble aussi rapide qu'un Pentium 3 200Mhz. Je me suis lâssé d'attendre.

Généralement nous travaillons en mode plein écran dans leur machine virtuelle windows. Quel gâchis.

Pourquoi ne pas avoir la VM de developpement en Linux qui roule nativement nos outils déja compatibles linux,
puis les exporter via un tunnel XWindows déjà  inclus depuis plusieurs années!?

C'est ce que je fait.

En gros, la vm a d'installé: Sun JDK1.5.0 et Tomcat 6.0.15 puis Éclipse Europa (qui contrôle le serveur tomcat installé pour l'usager générique).

Ce que ça fait, c'est exécuter un programme de la vm... sur mon poste local, en dehors de la console vmware.

Voilà  ce que ça donne (voir photo début article).
NOTE: remarquez le (on lamp-dev)...  ça veut dire que le éclipse est exécuté DANS la vm. Mais elle est AFFICHÉE LOCALEMENT

Comment j'ai fait?

En gros, pour travailler, je part ma vm (qui a l'ip 192.168.1.131) sur mon poste.

Ensuite, j'ai envoyé par scp a ma vm, mon
<pre lang="bash">~/.ssh/id_dsa.pub</pre>
pour que je n'ai pas de mot de passe a entrer, petit rappel:
<pre lang="bash">scp .ssh/id_dsa.pub \
      user@192.168.5.1:/home/user/.ssh/authorized_keys</pre>
Puis je lance le script suivant:
<pre lang="bash">#!/bin/bash
sshfs user@192.168.5.1:/home/user/workspaces/project/ \
     /home/user/drives/userworkspace/
ssh -X user@192.168.5.1 -L 8080:localhost:8080 \
     eclipse-europa/eclipse</pre>
Ce que le script fait:
<ul>
	<li>Il ouvre une share sshfs pour monter mon workspace eclipse de la vm dans mon dossier de drives share local en tunnel crypté entre la machine locale et la machine distante.</li>
	<li>Ensuite il ouvre une session ssh avec forward X (pour l'application s'affiche localement) sur ma vm (192.168.5.1) puis il forwarde le port 8080 pour que j'ai accès a mon tomcat de la vm localement.</li>
	<li> puis il lance eclipse dans le dossier "eclipse-europa/" qui est affiché localment dû au X port forwarding.</li>
</ul>
J'ai fait un petit icon eclipse sur mon desktop (la barre en haut d'Ubuntu). Qui exécute le script.

Puis on a le résultat affiché sur le thumbnail en haut.

<strong>Pour faire pareil</strong>

Il vous faudrait que demander une copie de vm-lamp-dev qui doit existe copiée dans nos backups.

Pour le share, il faut les paquets suivants Ubuntu.
<pre lang="bash"># apt-get install sshfs</pre>
Puis simplement modifier le script avec l'ip que la vm donnera.

<strong>Adapter</strong>
J'aimerai, un moment donné, avec d'autre collègues, améliorer le setup de lamp-dev pour que Rational 6 et/ou 7 soit exécuté dans la vm. Un peu plus tard.

Le concept de commande ssh avec l'option -X permet de forwarder n'importequelle applications que vous n'avez PAS localment mais quel la machine distante peut avoir, ce peut être utile a bien des égards.