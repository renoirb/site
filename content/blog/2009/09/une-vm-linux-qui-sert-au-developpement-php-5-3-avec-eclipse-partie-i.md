---
locale: fr-CA
title: Une VM Linux qui sert au développement PHP 5.3 avec Eclipse - partie I
canonical: >-
  https://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-i/
status: publish
revising: true
created: '2009-09-03'
updated: '2013-03-27'
tags:
  - linux
  - tutoriels
  - techniques
categories:
  - tranche-de-vie
excerpt: >-
  Pour développer, j'utilise depuis deux ans une _machine virtuelle_ (VM) Linux
  (minimale) qui me sert de "bac à sable"... Le but de cette série d'articles.
  Dans cette VM il y a tout les outils nécessaires aux projets en-cours et ils
  sont configurés pour refléter l'environnement de production où je déploie mon
  travail. Ce type d'installation est idéal car il permet d'avoir a installer
  les prérequis une seule fois et pouvoir les dupliquer pour tout les
  dévelopeurs. Sans oublier que vous n'avez plus de préoccupations de licences
  logicielles. A la fin de cette série d'articles vous aurez accès a une VM qui
  représentera votre environement de production (ajuster à vos besoins de
  production, évidemment).
---

<img class="size-medium wp-image-1082" style="border: none; float: right;" title="La Virtualisation c'est comme des roches en équilibre" src="https://renoirboulanger.com/wp-content/uploads/2009/09/virtualization-200x300.jpg" alt="La Virtualisation c'est comme des roches en équilibre" width="200" height="300" />Ce billet est le <strong>premier</strong> d'une série d'articles décrivant la fabrication d'une Machine Virtuelle (VM) de développement pour une équipe de dévelopeurs.

Je mentionne PHP 5.3 mais en fait ce type d'installation pourrait être utilisé pour n'importe quelle technologie web qui peut rouler sous Linux (<tt>Ruby on Rails</tt>, <tt>Java</tt>, <tt>Perl</tt>, etc).

J'ai séparé cette série en quatre volets.
<ol>
	<li><strong>Description du concept</strong> (cet article)Ce que je vais discuter dans cette série d'articles n'est pas nécessairement connu de tous. Je vais donc vulgariser un peu avant de commencer.</li>
	<li><strong><a href="/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-ii/">Installation du système</a></strong>Je donne ici mon secret de magicien avec quelques configurations que je considère importantes pour un environement d'hébergement web pour améliorer la sécruité (le strict minimum pour cette série d'articles. Je pourrai en faire un plus poussé plus tard).</li>
	<li><strong><a href="/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-iii">Compilation de PHP 5.3</a></strong>Comment installer Apache 2.x avec le dernier cutting-edge PHP.</li>
	<li><strong>Installation de l'environnement de développement avec Eclipse PDT</strong> (à venir)La magie se passe par là! Avec ce setup votre équipe pourra répliquer l'installation de développement a volonté.</li>
</ol>

<div style="background: #ececec; margin: 5px 0px; padding: 18px 8px 8px 50px; border: 1px solid #333;"> 
<h4 style="color: #777; margin-bottom: 10px;">Mise à jour et façon différente de fonctionner</h4> 
<p>Dans un billet plus récent (que celui-ci) <a href="/blog/2010/07/installer-une-machine-virtuelle-linux-roulant-dans-vmware-fusion-sous-mac-os-x/">j'explique comment le faire pour un Mac</a>.</p>
</div> 

<h3>Mise en contexte</h3>
Pour développer, j'utilise depuis deux ans une <em>machine virtuelle</em> (VM) Linux (minimale) qui me sert de "bac à sable"... Le but de cette série d'articles. Dans cette VM il y a tout les outils nécessaires aux projets en-cours et ils sont configurés pour refléter l'environnement de production où je déploie mon travail.

Ce type d'installation est idéal car il permet d'avoir a installer les prérequis une seule fois et pouvoir les dupliquer pour tout les dévelopeurs. Sans oublier que vous n'avez plus de préoccupations de licences logicielles.

A la fin de cette série d'articles vous aurez accès a une VM qui représentera votre environement de production (ajuster à vos besoins de production, évidemment).
<!--more-->
<h3>Concept</h3>
Comme j'<a href="/blog/2007/11/mon-espace-de-travail/">en ai déjà parlé ici</a> une VM roule avec toutes les versions désirés pour pouvoir développer et tester live le code développé. Le code est envoyé au serveur de source (<tt>git</tt>, <tt>subversion</tt>, <tt>cvs</tt>, etc) de toute façon.  C'est ce qui rend cette VM "jettable" et facilement copiée pour des collègues.

C'est très utile car souvent, les outils utilisés (serveur applicatif, environement de développement, configuration de "debug", scripts sur mesure de l'équipe infrastructure) doivent être reproduits le plus fidèlement au niveau développement pour s'assurer de ne pas tomber sur des coquilles rendu au jour "J".

Ok. Trève de présentations!
<h3>Versions de VMware</h3>
Étant donné que tout roule dans une machine virtuelle, il faut savoir laquelle utiliser. Je résume ici leur usage recommandé. Personnellement j'ai seulement utilisé VMware comme outil de virtualisation. Vous êtes libres d'utiliser <a href="http://www.xen.org/">Xen</a> ou <a href="http://en.wikipedia.org/wiki/FreeBSD_jail">Jail (avec FreeBSD)</a> si vous avez plus d'Expérience.

Il y a aussi d'autres choix bien illustrés dans cet article <a lang="en" href="http://www.dedoimedo.com/computers/virtualization.html">Virtualization, plenty of choices</a>
<h4><a href="http://www.vmware.com/products/workstation/">VMware workstation</a></h4>
Est idéale pour chaque poste de travail qui va utiliser cette VM de développement.
<h4><a href="http://www.vmware.com/products/server/">VMware server</a></h4>
Pour les machines de l'environement de <em>staging</em> avec lesquelles vous voulez avoir le contrôle sur le système d'exploitation en dessous.

Mais selon-moi, le meilleur a utiliser c'est...
<h4><a href="http://www.vmware.com/products/esxi/">VMware server ESXi</a></h4>
Un serveur VMware de 30 Méga-octets qui ne fait QUE rouler des VMs. Le seul hic c'est qu'il faut que ce soit un serveur-rack plus ou moins récent (après 2005 environ).
<h4>Installation dans une VM</h4>
Je vous recommande de vous inspirer de ce tutoriel pour l'installation: <a lang="en" href="http://helpdeskgeek.com/virtualization/creating-a-virtual-machine-on-vmware-server/">Creating a Virtual Machine on VMware server</a>, en anglais)
<h3>Suite</h3>
Commençons par l'installation de la machine virtuelle.