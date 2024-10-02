---
locale: fr-CA
title: Installer VMWare sur Ubuntu server avec le repositoire de Canonical
canonical: >-
  https://renoirboulanger.com/blog/2007/08/installer-vmware-sur-ubuntu-server-avec-le-repositoire-de-canonical-10/
status: publish
revising: true
created: '2007-08-22'
updated: '2013-03-27'
tags:
  - linux
  - tutoriels
categories:
  - tranche-de-vie
excerpt: ''
---

<div style="padding:5px;border:1px solid #888;background:#eaeaea;">
<p><strong>UPDATE 2009-08</strong>: Je prévois faire un nouvel article pour couvrir ce sujet car cette version de <tt>Ubuntu</tt> est désuète.<br /><br />
Personnellement, je n'utilise plus <tt>Ubuntu</tt> comme un serveur. J'utiliser <tt>Debian Linux</tt> pour mes serveurs. <tt>Ubuntu</tt> demeure mon poste de travail favori.
<br /><br />
Je donnerai le lien du bon post une fois qu'il sera en ligne.</p>
</div>
<p>&nbsp;</p>


<p>L'idée c'est d'avoir un serveur rack-mount minimal fait pour héberger les VM d'infrastructure du réseau. Actuellement plusieurs de nos serveurs *physiques* ont déjà X-Windows sur leur hôtes (SuSE v10, RHEL 4 U5, Gentoo 2007.0, Ubuntu, etc.) Mais ce sont des installations qui ont été faites avec tout ce qu'il sortait sans réfléchir ou se pencher sur l'économie de ressources. Ce serveur sera minimal coté installation, et maximisé sur VMWare... voici les étapes que j'ai fait.</p>

<!--more-->

<h2>Télécharger Ubuntu</h2>
<p>L'idée c'est d'installer le serveur en minimal... donc une visite sur <a href="http://www.ubuntu.com/getubuntu/download/">http://www.ubuntu.com/getubuntu/download/</a> s'impose.</p>

<p>La dernière mouture en version server suffit.</p>

<p>Celle utilisée dans ce tutoriel était <strong>Ubuntu server 7.04 Feisty Fawn</strong> de son nom.</p>

<p>Il ne reste qu'a brûler le ISO sur un CD.</p>
<p>&nbsp;</p><p>


<h2>Booter le médium d'installation</h2>
</p><p>Une fois le démarrage fait, un écran de la sorte apparaît.</p>

<p>Sélectionner le premier choix, on fait une installation.</p>

<p>Choisir la langue d'installation, personnellement je suis anglophone pour ce qui touche a mon OS, c'est à votre choix.</p>

<p>On choisit "Canada" (contrairement a l'image), choisir son pays... ça aide :)</p>

<p>Ensuite on demande le clavier. Ma combinaison de clavier préféré c'est "Canadien Français" (cf) ou Canadien tout court... c'est pas toujours clair mais le logiciel nous permet de faire nos propres choix et de le tester.</p>

<p>Setter un nom c'timportant. Fiez vous aux normes de votre data-center.</p>

<p>Setter son username habituel, car ensuite faire on peut copier sa clé publique direct dans le nouveau serveur</p>

<pre lang="bash">$ scp ~/.ssh/id_dsa.pub matt@vmserver:/home/matt/.ssh/authorized_keys</pre>
<p>.. et pouvoir vivre sans entrer son password a chaque fois :)¬† (hors du sujet mais j'ai mis la commande au cas où)</p>

<p>Personnellement je ne sélectionne rien ici, à moins de m'en servir... mais je n'aime pas ça que le serveur LAMP soit installable et upgradable automatiquement... Les applications web ne "s'upgradent" pas automatiquement, elles.</p>

<p>Installation complétée!</p>
<p>&nbsp;</p><p>


<h2>Installation des services</h2>
</p><p>Voici les étapes faites pour installer le reste.</p>

<p>Se logguer après le redémarrage avec les crédentiels fournis lors de l'installation.</p>

<p>Utiliser '<tt>sudo su -</tt>' (ou "<tt>sudo -s</tt>") pour s'élever au commandes d'un shell root.</p> 
<pre lang="bash">$ sudo -s
# vi /etc/apt/sources.list</pre>

<p>Puis ajouter la ligne suivante:</p>
<pre lang="bash">deb http://archive.canonical.com/ubuntu feisty-commercial main</pre>

<p>Ensuite un update et un upgrade s'impose... question de garder à jour le serveur.</p>

<pre lang="bash"># apt-get update
# apt-get upgrade</pre>


<p>Puis, installer les kernel-modules</p>
<pre lang="bash"># apt-get install vmware-server vmware-tools-kernel-modules</pre>
<p>Répondre oui a toutes les questions et entrer le numéro de série VMWare sur le site <a href="http://www.vmware.com/">http://www.vmware.com</a>, obligatoire.</p>
<p>&nbsp;</p><p>

<h2>La console VMWare</h2>
</p><p>Vù qu'on a pas de XWindows pour gérer, on utilise une console vmware-server à partir d'une autre machine sur notre LAN.</p>
<pre lang="bash"># cd /lib/security
# wget www.matthewbrowne.com/blog/wp-content/uploads/pam_unix_vm.so</pre>
<img src="/wp-content/uploads/2007/08/21/Vmserverinstallfromrepos010_thumb.jpg" border="0" alt="Vmserver install from repos 010" />
<p>Le blogeur de qui je prend mes sources avait fait une librairie <span style="font-family: Courier;">pam_unix_vm.so</span> pour remplacer <span style="font-family: Courier;">pam_unix2.so</span></p>

<p>De toute façon il lorsque j'éditait le fichier <tt>/etc/pam.d/vmware-authd</tt> (celui auto-généré par notre installation) Sortait avec des liens absolus qui semblaient bogus.</p>

<p>Alors j'ai suivi, récrit le fichier comme suit</p>

<p>Ensuite on redémarre la machine
<pre lang="bash"># init 6</pre>
Généralement, sur la console, tu pourrait te connecter sur "Remote host" avec tes crédentiels et ton host et gérer tes VM :)</p>

<span style="font-size: medium;">Source</span>
<ul>
	<li>Les notes très utiles et les screenshots de <del><a href="http://matthewbrowne.com/blog/?p=92">http://matthewbrowne.com/blog/?p=92</a></del><ins>Le site est fermé et ne répond plus. J'ai plus les images localement alors ce post est là pour des raisons historiques, simplement</ins></li>
	<li>Mon expérience, car en fait j'ai traduit son blog-post. Mais je conaissait pourtant déja les étapes, son post m'a principalement donné une structure pour la traduction.</li>
</ul>
<p style="text-align: right; font-size: 8px">Blogged with <a title="Flock" href="http://www.flock.com/blogged-with-flock" target="_new">Flock</a></p>