---
locale: fr-CA
title: >-
  Créer un tunnel SSH inverse pour pouvoir supporter à distance un ami utilisant
  Linux
canonical: >-
  https://renoirboulanger.com/blog/2012/02/creer-un-tunnel-ssh-inverse-pour-pouvoir-supporter-a-distance-un-ami-utilisant-linux/
status: publish
revising: true
createdAt: '2012-02-29'
updatedAt: '2013-03-29'
tags:
  - linux
  - logiciel-libre
  - securite
  - unix
categories: []
excerpt: ''
---

Avez-vous déjà voulu accéder a votre ordinateur Unix/Linux/MacOS d'un ami, chez ou ailleurs, et que vous avez besoin de l'aider a distance?   En tant qu'utilisateur de Linux, si vous aider quelqu'un d'autre qui n'Est pas habitué, il peut vouloir votre aide. Cette procédure peut vous aider a l'aider, a distance.

Ça vient de m'arriver. Je vais vous montrer comment j'ai fait.

Ce que j'ai utilisé:
<ol>
	<li>Une machine avec OpenSSH que chaque personne à accès (une instance Amazon EC2?)</li>
	<li>Créer un nouvel utilisateur temporaire pour la personne a aider</li>
	<li>Ordinateur a réparer roulant Linux/Unix/MacOS/Cygwin (qui a OpenSSH serveur et client)</li>
</ol>
Ce que j'avait fait avec, en plus de cette procédure, c'est <a href="https://help.ubuntu.com/community/UbuntuBootupHowto">un script RC</a> qui créait une connection permanente, avec <a href="http://www.debian-administration.org/articles/152">une connection SSH qui ne requiert pas de mot de passe</a>.

L'idée étaait que peu importe le lieu ou mon ami se trouve, dès qu'il/elle a un lien à Internet, j'ai accès a son ordinateur portable.

Ma procédure décrit comment créer un lien entre ces deux machines.

<!--more-->
<h3>L'historique</h3>
Il y a quelques années j'ai fait le cadeau a ma mère d'un vieil ordinateur portable. Étant donné qu'il était vieux et qu'elle n'a jamais vraiment utilisé d'ordinateur dans sa vie, j'ai pensé lui configurer un Ubuntu qui avait tout ce qui est nécessaire.

Elle l'a utilisée pendant environ 3 ans. Je crois que ma maman sait maintenant qu'un navigateur web n'est pas nécessairement Internet Explorer. Qu'un document n'est pas obligatoirement un fichier "Word".  Aujourd'hui elle roule sous Windows. Parce que quelqu'un d'autre lui a fait le cadeau et qu'il n'est pas porté a utiliser Linux comme moi.

Toujours est-il que pour l'aider j'utilisait ce processus pour entretenir son ordinateur sans qu'elle ait rien a faire.
<h3>0. La machine accessible pour les deux</h3>
Surnommons cette machine "<em>vm.somehost.com</em>".

Il faut que vous et votre ami ayez accès a cette machine sur le port 22. Si c'est votre machine, vous pouvez forcément créer un nouveau compte pour votre ami qu'il utilisera pour initier le tunnel entre sa machine et cet machine.
<h3>1. Sur le poste de votre ami</h3>
Dans mon exemple, son compte est "<em>user</em>", sa machine s'appelle "<em>friend-machine</em>".﻿

<strong>Prérequis</strong>
<ol>
	<li><strong>OpenSSH</strong> qui est installé et qui roule.
En Mac OS, c'est dans Préférences, Partage, il y a une option Accès a distance &lt;rant rel="windows"&gt;... ah ces changements de noms pour la même chose&lt;/rant&gt;.</li>
	<li><strong>Un compte utilisateur</strong> pour vos propres besoins
... Ou le même que votre ami, s'il vous donne un mot de passe &lt;truc&gt;Pssiiit. <em>passwd</em> sert a changer un mot de passe en terminal!&lt;/truc&gt;</li>
</ol>
<strong>Donc, assurez-vous que votre ami...</strong>
<ol>
	<li>vous fournit un compte pour vous connecter sur sa machine ("<em>friend-machine</em>")</li>
	<li>Assurer que OpenSSH  roule</li>
</ol>
Je vous écrit tout ça de mémoire. Une recherche sur comment activer OpenSSH et créer un utilisateur qui y aura accès sur cette  machine MacOS/Linux vous aidera plus que cet article.
<h3>2. Créer le tunnel sur la machine de votre ami</h3>
Si tout est fonctionnel, vous avez déjà passé le pire, lui expliquer c'est quoi un utilisateur, si l'accès a distance ou SSH c'est quoi, et pourquoi vous lui demandez d'y accéder.

Expliquez-lui de ne pas utiliesr de mot de passe simple.  Qu'il ne vous donne pas non plus son mot de passe... s'il l'utilise ailleeurs (ou partout, c'est bien d'enseigner ça a ses amis).

<strong>Donc... lui faire taper la commande dans un terminal:</strong>

Le BUT de cet article, LA commande, UNE LINGE!
<pre lang="bash">user@friend-machine$ ssh -nNT -R 1103:localhost:22 friendusername@vm.somehost.com</pre>
Ce qui se passera c'est que l'ami (qui a une machine qui s'appelle "friend-machine" dans cet exemple) initie un tunnel SSH silencieux vers "vm.somehost.com" (le serveur accessible par vous et votre ami) qui s'y connecte avec l'usager temporaire ("friendusername").

Les options utilisés:
<ul>
	<li><strong>n</strong> Sert pour éviter d'afficher des choses sur son terminal n'affiche rien (envoie vers /dev/null)</li>
	<li><strong>N</strong> Sert pour préciser de ne pas utiliser la ligne de commande,   une fois connecté, il ne dira rien.</li>
	<li><strong>T</strong> Sert à ne pas allouer de pseudo terminal (pseudo-tty)</li>
	<li><strong>R</strong> Sert a préciser un Tunnel inversé (Reverse) qui servira a exposer <em>dans</em> ("<em>vm.somehost.com</em>") au tunnel initié par ("<em>friend-machine</em>") au port <em>22</em> à partir du port <em>1103</em> de ("<em>vm.somehost.com</em>").</li>
</ul>
<h3>3. Vous connecter de VOTRE poste, à la machine commune,  à finalement le poste de votre ami.</h3>
Enfin. Il ne reste qu'a vous, vous connecter a cette machine commune, pour accéder au tunnel que vous lui avez fait créer, et utiliser SA machine.

Il ne suffit que de se  connecter  sur <em>vm.somehost.com</em> sous votre compte habituel, initialiser un <em>screen</em> puis vous re-connecter sur le port spécial qui vous donnera accès au poste "<em>friend-machine</em>".

Facile!!
<h4>En ordre:</h4>
<pre lang="bash">renoirb@mon-laptop:~$  ssh vm.somehost.com
renoirb@vm:~$ screen
renoirb@vm: ~$ ssh user@localhost -p 1103
user@friend-machine:~$ uname -a
Darwin friend-machine 10.8.0 Darwin Kernel Version 10.8.0: Tue Jun  7 16:33:36 PDT 2011; root:xnu-1504.15.3~1/RELEASE_I386 i386</pre>
En gros, je me connecte a <em>vm.somehost.com</em>, j'y initie une session <em>screen</em>, puis je me re-connecte en SSH sur le port local 1103 ouvert par mon ami <em>user@friend-machine</em> (vous suivez toujours?) et hop! Je suis sur la machine distante.
<h3>Screen</h3>
Avec Screen, je peut ainsi me détacher du terminal et m'y reconnecter plus tard sans arrêter les choses en cours.

Pour se déconnecter et se reconnecter je fais ainsi
<ol>
	<li>Connecter/reconnecter:   screen -dd -R</li>
	<li>Détacher (combinaison de touches):  ctrl+a d</li>
</ol>
<h3>Finalement</h3>
Nous aurons entré quelques lignes de terminal et hop, nous avons accès a la machine de notre ami.  C'est sûr que vous pouvez jouer avec les tunnels et accéder aux autres services, mais je ne vous expliquerai pas comment spécifiquement utiliser chaque cas.

Je vous laisse imaginer les cas de figure possible:
<ul>
	<li>Faire une mise a jour de paquets</li>
	<li>Réinstaller des programmes</li>
	<li>Accéder a un service qu'il a localement, comme un serveur web, etc.</li>
</ul>
... J'aime linux!
<h3>Sources</h3>
<ol>
	<li><a href="http://www.techrepublic.com/article/setting-up-a-reverse-ssh-tunnel/5779944">TechRepublic article Setting up a reverse SSH tunnel</a></li>
	<li><a href="http://www.howtoforge.com/reverse-ssh-tunneling">HowTo Forge: Reverse SSH Tunneling</a></li>
	<li><a href="http://www.linuxjournal.com/article/6340">LinuxJournal: Power sessions with Screen</a></li>
</ol>