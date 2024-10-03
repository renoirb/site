---
locale: fr-CA
title: Comment automatiser une tâche avec CRON en utilisant Vim
canonical: >-
  https://renoirboulanger.com/blog/2010/04/comment-automatiser-une-tache-avec-cron-en-utilisant-vim/
status: publish
revising: true
caption: true
created: '2010-04-14'
updated: '2013-03-27'
tags:
  - logiciel-libre
  - tutoriels
  - unix
  - vocabulaire
  - vulgarisation
categories: []
excerpt: ''
---

[caption id="attachment_2079" align="alignright" width="270" caption="Logo Vim, qui signifie vi-improved (amélioré)"]<img class="size-full wp-image-2079 " title="Logo Vim" src="http://renoirboulanger.com/wp-content/uploads/2010/04/Vim_logo.png" alt="Vi - Vi.... Improved (amélioré)" width="270" height="270" />[/caption]

Deux tâches vraiment essentielles qu'on fait en administrant une machine sous Linux sont très souvent de modifier/créer un fichier et de planifier des tâches de maintenance.

Pour utiliser «<em>cron»</em> il faut savoir utiliser «<em>vi»</em>, les commandes sont très souvent les mêmes. Je dois spécifier que j'ai basé mon tutoriel sur CRON fourni par Ubuntu Linux qui est (de mémoire) le même paquet que celui fourni dans <a href="http://www.redhat.com/">Red Hat Linux</a>, <a href="http://www.debian.org/">Debian Linux</a> ou <a href="http://www.ubuntu.com/">Ubuntu Linux</a>.

Le but de ce billet est en fait de vous montrer sommairement comment automatiser une tâche (une commande) avec cron.

Je publierai plus tard un billet sur les différences entre les distributions de cron.

<!--more-->
<h3>Utiliser vi (prérequis)</h3>
Vi est un éditeur de texte en ligne de commande qui permet de faire bien des macros, il peut sembler compliquer mais l'essentiel se résume ainsi.
<ul>
	<li><strong>ESCAPE</strong> permet d'entrer une commande</li>
<blockquote>
	<li><strong>i</strong> mode Insertion</li>
	<li><strong>r</strong> mode remplacer le caractère courrant</li>
</blockquote>
	<li><strong>SHIFT+a</strong> insérer a partir de la fin de la ligne courrante</li>
	<li><strong>:</strong> entrer une commande spéciale</li>
<blockquote>
	<li><strong>:wq</strong> sauvegarder le fichier et quitter l'éditeur</li>
	<li><strong>:w</strong> sauvegarder le fichier courrant</li>
	<li><strong>:10</strong> sauter a la 10e ligne du document</li>
</blockquote>
	<li><strong>/text</strong> Chercher 'text' dans le document courrant</li>
<blockquote>
	<li><strong>n</strong> Chercher le prochain mon cherché (par rapport a ce qui a été dit ci-haut)</li>
</blockquote>
	<li><strong>dd</strong> supprimer la ligne courrante</li>
	<li><strong>5dd</strong> supprimer les 5 prochaines lignes</li>
</ul>
source: <a href="http://matrix.samizdat.net/pratique/documentation/guide-survie-VI.html">Guide de survie VI</a>
<h3>Créer une tâche CRON</h3>
Pour créer une tâche sur un système Linux il y a plusieurs méthodes possibles.
<ol>
	<li><a href="http://renoirboulanger.com/blog/2010/04/comment-automatiser-une-tache-avec-cron-en-utilisant-vim#crontab">Ajouter une ligne dans le «crontab», la table d'actions CRON</a></li>
	<li><a href="http://renoirboulanger.com/blog/2010/04/comment-automatiser-une-tache-avec-cron-en-utilisant-vim#crond">Ajouter fichier avec directives dans /etc/cron.d/</a></li>
	<li><a href="http://renoirboulanger.com/blog/2010/04/comment-automatiser-une-tache-avec-cron-en-utilisant-vim#etccron">Ajouter une ligne dans un des dossiers /etc/cron.daily/, /etc/cron.hourly/, /etc/cron.monthly</a></li>
</ol>
<h4><a name="crontab"></a>1. Ajouter une ligne dans le «crontab», la table d'actions CRON</h4>
C'est fait soit en utilisant la commande crontab, ou en éditant le fichier /etc/crontab

crontab roule tout le temps en tant que root, et l'idéal serait d'utiliser un fichier dans /etc/cron.d/
Savoir sur quel usager doit rouler la tâche (un user local qui peut rouler la commande, idéalement pas root!)
<ul>
	<li><pre lang="bash">someuser@ubuntu:~$ crontab -e</pre></li>
	<li>l'éditeur vi va s'ouvrir</li>
	<li>aller a l'endroit ou vous voulez éditer</li>
	<li>créez une nouvelle ligne en Insert mode, en utilisant le i, ou a la fin de la ligne courrante en faisant CTRL+a</li>
	<li>Entrer une ligne dans le format<pre lang="bash">* * * * * commande a être exécutée
- - - - -
| | | | |
| | | | +----- jour de la semaine (0 - 6) (Dimanche=0)
| | | +------- mois (1 - 12)
| | +--------- jour dans le mois (1 - 31)
| +----------- heure (0 - 23)
+------------- min (0 - 59)</pre>
exemple:
<pre lang="bash">30 18 * * * rm /home/someuser/tmp/*  > /home/someuser/cronlogs/clean_tmp_dir.log</pre></li>
	<li>... qui effacera le contenu de <tt>/home/someuser/tmp/</tt> a tout les 18h30 de tout les jours et qui log dans <tt>/home/someuser/cronlogs/clean_tmp_dir.log</tt></li>
	<li>Pour quitter faites ESCAPE  :wq     pour write quit.</li>
</ul>
source: <a href="http://adminschoice.com/crontab-quick-reference">Crontab Quick reference</a>
<h4><a name="crond"></a>2. Ajouter fichier avec directives dans /etc/cron.d/</h4>
C'est le même principe sauf qu'il s'agit d'un fichier nommé, généralement sous le même nom que le package Linux qu'il dessert. Exemple php5 aurait son package.

Sauf qu'on peut spécifier qui lancera la commande.

Comment faire...
<ul>
	<li>Créer un fichier, ex:
# vi /etc/cron.d/php5</li>
	<li>Coller la commande qui a été testée au par avant
<pre lang="bash">someuser@ubuntu:~$ rm /home/someuser/tmp/* > /home/someuser/cronlogs/clean_tmp_dir.log</pre></li>
	<li>Ajouter une ligne, ESCAPE+i</li>
	<li>Commencer par le moment de l'exécution comme avec «Ajouter une ligne dans le crontab»</li>
	<li><pre lang="bash">30 19  *  *  *</pre></li>
	<li>Ajouter le nom du username qui va rouler la commande</li>
	<li>ex: someuser</li>
	<li>Ajouter la commande testée tout a l'heure
ex: rm /home/someuser/tmp/* > /home/someuser/cronlogs/clean_tmp_dir.log</li>
	<li>Ce qui donnera:<br />

<pre lang="bash">30 19 * * * someuser rm /home/someuser/tmp/* > /home/someuser/cronlogs/clean_tmp_dir.log</pre>

</li>
	<li>Voilà!</li>
</ul>
<h4><a name="etccron"></a>3. Ajouter une ligne dans un des dossiers /etc/cron.daily/, /etc/cron.hourly/, /etc/cron.monthly</h4>
Même concept que le crontab sauf que l'on a pas a mentionner quand exécuter, c'est /etc/crontab  qui dit qand les fichiers sont exécuté
<h3>Sources</h3>
<ul>
	<li><a href="http://adminschoice.com/crontab-quick-reference">Crontab Quick reference</a></li>
	<li><a href="http://matrix.samizdat.net/pratique/documentation/guide-survie-VI.html">Guide de survie VI</a></li>
</ul>