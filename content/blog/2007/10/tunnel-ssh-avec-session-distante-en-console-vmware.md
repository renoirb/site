---
locale: fr-CA
title: Créer un tunnel SSH avec session distante en Console VMWare
canonical: >-
  https://renoirboulanger.com/blog/2007/10/tunnel-ssh-avec-session-distante-en-console-vmware/
status: publish
revising: true
created: '2007-10-03'
updated: '2013-03-27'
tags:
  - linux
  - securite
categories:
  - tranche-de-vie
excerpt: ''
---

Il existe plusieurs page de how-to's pour se connecter a une application a distance. Mais j'ai envie de mettre pour mes propres archives.

Ce billet prend en considérations que...
<ul>
	<li>Vous voulez vous connecter a un service précis (disons VMWare Server Console)</li>
	<li>Sur une machine parmi un réseau de X ordinateurs</li>
	<li>Le gateway (routeur) relie toutes les connections vers un host en Linux (proxysrv) qui sert a s'authentifier et accéder au reste du réseau.</li>
	<li>Le serveur sur le réseau qui héberge des machines virtuelles avec VMWare Server (vmserver1).</li>
	<li>Le port 902 (le port TCP que vous voulez utiliser) sur le firewall interne (de vmserver1) est ouvert. Et</li>
	<li>Vous voulez vous connecter a un de ses VM.</li>
</ul>
<div style="background: #ececec; margin: 5px 0px; padding: 18px 8px 8px 50px; border: 1px solid #333;">
<h4 style="color: #777; margin-bottom: 10px;">Mise à jour</h4>
Ce billet a été écrit originalement en 2007. À l'époque il n'existait pas de VMware ESXi, ni de VMware Server 2. Les concepts sont toujours bons par contre.

</div>
<!--more-->

Pour avoir accès a une application distante (ou une autre machine/VM), il faut se créer un tunnel vers le réseau interne. En gros il faut avoir accès au réseau (dans mon exemple le serveur <em>proxysrv</em>).

Vous devez avoir un accès au réseau interne que vous avez accès, vous pouvez le demander a  votre Sysadmin de vous avoir un accès, mais ce n'est pas le point de ce billet.

Pour ouvrir une session SSH en tunnel, sous windows, il vous faut PuTTY. Si vous n'avez pas PuTTY faites une <a href="http://www.google.ca/search?q=putty">recherche google</a> c'est une petite application libre de droits. En linux, c'est simple
<pre lang="bash">ssh -l username -L 902:192.168.3.97:902 -L 80:192.168.3.88:80 serveurdistant.ca</pre>
<small>NOTE: Remarquez que vous n'avez qu'a ajouter le nombre de -L nécessaires (-L LOCAL_PORT:ON_REMOTE_NETWORK_IP:REMOTE_IP_OPENED_PORT_NUMBER)</small>

Aussi, pour accéder a la console VMWare, il faut une version de <strong>VMWare Server</strong> ou une console VMWare. Le site VMWare ne semble pas avoir de version stand-alone de la console ni pour Linux ni Windows. Alors, si vous n'avez pas encore VMWare sur votre machine, allez chercher votre exemplaire de <a href="http://www.vmware.com/download/server/">VMWare Server ici</a>. Si vous avez "VMWare" d'installé mais pas de moyen de vous connecter en local ou a distance, désinstallez la, et installez la version server prescrite.

Dans notre exemple, on va accéder a distance au <strong>VMWare Server Console</strong> (sur vmserver1) qui utilise le port <strong>902</strong>.
<h3>Les ports TCP sous Linux</h3>
Pour pouvoir trouver d'autre ports a ouvrir le fichier texte /etc/services donne tout les ports et les alias qu'on peut utiliser comme alias. Ce fichier existe depuis longtemps dans tout ce qui est UNIX et Linux.
<h3>Directives en résumé</h3>
Une fois PuTTY et VMWare Server Console (ou console) fonctionnels (pour cet exemple) vous n'avez qu'a suivre les paramêtre ici:
<ul>
	<li> Hostname:<em> <strong>serveurdistant.ca</strong>
</em></li>
	<li>Port: <strong>22</strong> (ssh)</li>
	<li>Donner un nom de session, mais ne sauvegardez pas tout de suite.</li>
	<li>Aller a <strong>SSH</strong>-&gt;<strong>Tunnels</strong> (plus bas)</li>
	<li>Entrer, Source port : <strong>902</strong> (votre port local), Destination: (ip de vmserver1:le port) , puis cliquer Add.</li>
	<li>Aller dans <strong>Connection</strong>-&gt;<strong>Data</strong>; Auto-login username, vous pouvez entrer le login qu'il faut si vous l'avez</li>
	<li>Retourner au haut du menu et sauvegarder la session</li>
	<li>Puis... [Open].</li>
</ul>
Ensuite, connectez vous au service sur l'hôte localhost et le port que vous avez "tunnellé".
<ul>
	<li> Connecter a VMWare Server</li>
	<li>Ouvrir VMWare sur votre machine hors réseau... maintenant tunnellée</li>
	<li>Connect to remote-host: <strong>localhost</strong></li>
	<li>Login/pw: votre login pour accéder aux vm.</li>
</ul>
Utiliser la VM comme si elle était locale.

<strong>Source</strong>
<ul>
	<li><a href="ttp://www.medicalnerds.com/port-forwarding-with-sshputty/">Exemple tunnel avec PuTTY.</a></li>
</ul>