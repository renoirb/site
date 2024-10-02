---
locale: fr-CA
title: Les différentes versions du service de tâches planifié CRON
canonical: >-
  https://renoirboulanger.com/blog/2010/04/les-differentes-versions-du-service-de-taches-planifie-cron/
status: publish
revising: true
created: '2010-04-19'
updated: '2013-03-27'
tags:
  - linux
  - outils
  - techniques
  - unix
  - vocabulaire
categories:
  - tranche-de-vie
excerpt: ''
---

<img class="size-full wp-image-2104" style="float: right; border: 0px;" title="Une horloge" src="http://renoirboulanger.com/wp-content/uploads/2010/04/Clock-icon.png" alt="" width="205" height="205" />Suite a mon article «<a href="http://renoirboulanger.com/blog/2010/04/comment-automatiser-une-tache-avec-cron-en-utilisant-vim/">Comment automatiser une tâche avec <em>CRON</em> en utilisant Vim</a>» je me suis venu aux questions sur les différences essentielles entre les versions de <em>CRON</em>.

Le concept de <em>CRON</em> est, un «lanceur de commandes» planifié pour les systèmes UNIX. Le nom est inspiré du dieu grec Chronos.

Ayant déjà utilise Gentoo Linux j'avait vu qu'il était possible d'utiliser plus d'une version de CRON mais je ne m'était jamais penché sur les différences. Je l'ai fait aujourd'hui.

<!--more-->
<h3>Une question de choix et de distribution</h3>
Généralement chaque distribution de système d'exploitation UNIX (Linux, Unix, Qnx, etc) a son lot d'outils standards dont CRON fait partie. Chaque éditeur de distribution choisit sa version préférée mais permet d'interchanger (avec <a href="http://wiki.debian.org/DebianAlternatives">Alternatives sous Debian</a>, par exemple).
<h3>Versions de <em>CRON</em></h3>
<h4>Anacron</h4>
La différence d'<em>Anacron</em> avec <em>cron</em> (traditionnel) est le fait qu'Anacron ne roule pas en permanence comme un démon en arrière plan. Il est idéal sur des système qui ne roule pas nécessairement 24 heures par jour ou avec peu de ressources processeur.

<a href="http://anacron.sourceforge.net/">site officiel</a>
<h4>vixie-cron</h4>
La version de cron la plus utilisée (selon mon expérience, notamment sous les installation par défaut de Ubuntu, Debian et Red Hat et CentOS)

<a href="http://troy.jdmz.net/cron/">site officiel</a>
<h4>bcron</h4>
L'auteur a crée cette version car il avait besoin de précision concernant les délais entre les commandes et les changements de saisons (Heure d'été).

J'ai remarqué plusieurs autres outils intéressant que l'auteur a publié. Je l'ai ajouté a mes marque-pages.
<h4>fcron</h4>
L'auteur a crée cette version de cron dans l'optique que la machine peut ne pas être allumée 24/24 et 7 jours/7. fcron se base plutôt sur le temps que le système fonctionne (le «uptime») plutot qu'un moment précis. L'auteur dit que fcron veut remplacer Vixie-cron et anacron mais en <em>mieux</em>.

Le genre de tâche qu'on peut faire est:
<ul>
	<li>Lance une commande aux chaque 3heures que le système est allumé</li>
	<li>Lance une commande au moins une fois entre 3h00 am et 6h00 am tout les jours.</li>
</ul>
<a href="http://fcron.free.fr/">site officiel</a>
<h4>incron</h4>
incron est une fonctionnalité cron a l'application inotify qui est un système basé sur le système de fichiers plutôt que sur des plages de temps. Un cas d'utilisation serait, par exemple, de pouvoir lancer une commande lorsqu'un logrotate a été lancé ou si un fichier a été ajouté dans un dossier.

<a href="http://linux.die.net/man/5/incron.conf">pages manuel</a> - <a href="http://inotify.aiken.cz/">site officiel</a>

<strong>Autres versions</strong>

Avez-vous utilisé l'un d'eux dans vos projets?