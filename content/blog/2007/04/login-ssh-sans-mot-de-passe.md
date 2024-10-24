---
locale: fr-CA
title: Login SSH sans mot de passe
canonical: https://renoirboulanger.com/blog/2007/04/login-ssh-sans-mot-de-passe/
status: publish
revising: true
migrateCode: true
created: '2007-04-10'
updated: '2013-03-27'
tags:
  - linux
  - tutoriels
categories:
  - tranche-de-vie
excerpt: ''
---

Voici comment générer un certificat qui sera utilisé par ssh pour se connecter à  un serveur sans demander de mot de passe à  l'usager.
<p class="code">&nbsp;</p>
<p class="codeContent">&nbsp;</p>

Sur le serveur client, exécuter (dans le HOME de l'usager):
<pre lang="bash">
$ mkdir .ssh
$ ssh-keygen -t dsa -f .ssh/id_dsa (Ne pas spécifier de mot de passe)
$ cd .ssh
$ scp id_dsa.pub user@remote:~/.ssh/id_dsa.pub</pre>
user@remote représente l'usager et le serveur sur lequel le client voudra se connecter par SSH sans mot de passe. Maintenant, sur le serveur remote, exécuter (avec le même usager utiliser à  la commande précédente):
<pre lang="bash">
$ cd .ssh
$ cat id_dsa.pub >> authorized_keys2
$ chmod 640 authorized_keys2
$ rm id_dsa.pub</pre>
