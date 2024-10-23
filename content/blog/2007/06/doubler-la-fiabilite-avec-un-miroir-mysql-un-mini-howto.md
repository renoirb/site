---
locale: fr-CA
title: Doubler la fiabilité avec un miroir MySQL, un mini-Howto
canonical: >-
  https://renoirboulanger.com/blog/2007/06/doubler-la-fiabilite-avec-un-miroir-mysql-un-mini-howto/
status: publish
revising: true
caracteresBizzares: true
createdAt: '2007-06-14'
updatedAt: '2013-03-27'
tags:
  - linux
  - tutoriels
categories:
  - tranche-de-vie
excerpt: ''
---

Imaginez que vous avec plusieurs sites a gérer. Sur un serveur, disons, monté en RAID-1 sur deux disques SATA en md-devices. C'est bien, les données sont dupliqués et si un disque dur brise, les données survivent. Évidemment ça ne nous protège pas des erreur de manipulation.

Une redondance comme je l'ai monté implique deux serveurs distincts qui ont chacun leur adresse ip et leur setup. Les serveurs ont deux adapteurs réseau et je les ai reliés ensemble et donné une adresse ip privé pour qu'ils puissent parler ensemble sans passer par Internet. Chaque serveur à les fichiers de sites pour chaque usager et chacun se connecte a mysql en localhost. La réplication se passe donc par l'adresse privée donc aucune encryption est nécessaire entre les peers.

Plus tard je devrai monter un service de miroirisation via rsync mais ce n'est pas le but de "ce" post.

Veuillez noter qu'il s'agit d'un howto TR√àS TECHNIQUE et je NE PEUT PAS nécessairement GARANTIR le FONCTIONNEMENT si vous faites simplement que COPIER SANS RÉFLÉCHIR.
<!--more-->

Voici ce que j'ai fait pour préparer la redondance des serveurs. Actuellement seulement une Base de donnée est répliquée sur les deux machines, plus tard la redondance sera faite sur tout les sites publics et les applications, je teste encore pour m'assurer de savoir les choses a ne pas faire.

La réplication de base de donnée est un processus qui demande de la préparation. J'ai commencé avec:
<ul>
	<li>Quelles tables répliquer</li>
	<li>Quelles machines seront les nodes</li>
	<li>Quelle version du serveur</li>
</ul>
Dans mon exemple je ne fait que répliquer qu'une seule BdD, si vous voulez en faire plus, faudra attendre que je sorte un autre billet, ou faire comme je fait... chercher :)
<h3>Considérations</h3>
Les serveurs sont connectés entre eux avec un cross-over cable et ont chacun leur adresses privés dans leur <tt>/etc/hosts</tt> que l'un pointe vers l'autre et vice versa.

Dans mon setup:
La machine <tt>web1</tt> <strong>EST</strong> <tt>mysql1</tt>, et <tt>web2</tt> <strong>EST</strong> <tt>mysql2</tt>
<h3>Préparer l'espace de travail</h3>
<ul class="alternate" type="square">
	<li><strong>Screen window 1</strong>, par exemple:</li>
	<li>Faire un tail-follow sur les fichiers log, sur les deux machines.<pre lang="bash">
$ sudo tail -f /var/log/mysql/error_log.err</pre></li>
	<li><strong>Screen window 0</strong>, par exemple:</li>
	<li>se connecter en shell mysql sur la machine locale, sur chaque machine:
<pre lang="bash">$ mysql -u da_admin -p</pre>
(utiliser le compte qui a les acces nécessaires, da_admin devrait suffir, sinon root)</li>
	<li><strong>Screen window 2</strong>, par exemple:</li>
	<li>Avoir une session root, pour redémarrer les services au besoin et éditer les fichiers</li>
</ul>
<h3>MODIFIER les fichiers de config</h3>
<ul class="alternate" type="square">
	<li>Vérifier /etc/my.cnf, modifier en fonction des besoins</li>
	<li>Modifier au niveau du bloc <tt>[mysqld]</tt></li>
	<li>AVOIR, un équivalent logique au web2:</li>
	<li>/etc/my.ini sur web2, exemple
<pre lang="bash">server-id                       = 2
log-bin                         = mysql-bin
log-slave-updates
auto_increment_increment        = 10
auto_increment_offset           = 2
log-error = /var/log/mysql/error_log
replicate-do-db=renoirb_blog</pre>
</li>
	<li>AVOIR, un équivalent logique au web1:</li>
	<li>Voir dans le fichier /etc/my.ini, et modifier le code.
<pre lang="bash">server-id = 1
log-bin = mysql-bin
log-slave-updates
auto_increment_increment = 10
auto_increment_offset  = 1
log-error = /var/log/mysql/error_log
replicate-do-db = renoirb_blog</pre>
</li>
</ul>
<h3>Créer les logfiles</h3>
<pre lang="bash">$ sudo vdir /var/log/mysql                    # VOIR si existant, sinon;
$ sudo mkdir /var/log/mysql
$ ps aux | grep mysqld                        # VOIR LE USER QUI ROULE MYSQLD
$ chown mysql.root /var/log/mysql        # DONNER les permissions au dossier
# service mysqld restart                      # REDEMARRER, en root, mysqld</pre>
<h3>Création des usagers</h3>
<ul class="alternate" type="square">
	<li>Aller sur l'application phpmyadmin de votre serveur</li>
	<li>Dans phpmyadmin, aller dans la <strong>page d'accueil</strong> et <strong>privileges</strong>, Ajouter un unager avec les droits <tt>RELOAD, REPLICATION CLIENT, REPLICATION SLAVE</tt></li>
	<li>Ne pas oublier de le faire sur les deux machines</li>
	<li>J'ai aussi ajouté les droits d'utilisation aux tables que je veut répliquer.</li>
	<li>Aller sur le screen window 0 (le shell SQL)&gt;</li>
	<li>Le faire sur chaque machine
<pre lang="bash">
mysql> FLUSH PRIVILEGES;                            # RECHARGER les privileges
mysql> USE renoirb_blog;                                # ALLER dans table desiree de replication
mysql> FLUSH TABLES WITH READ LOCK;       # Deverrouiller les tables, au cas
mysql> SHOW MASTER STATUS;                     # Voir le log</pre>
</li>
	<li>Donne un output similaire a ceci:
<pre lang="bash">
+------------------+----------+--------------+------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB |
+------------------+----------+--------------+------------------+
| mysql-bin.000003 | 325617   |              |                  |
+------------------+----------+--------------+------------------+
</pre>
</li>
	<li>Ensuite, on prépare la réplication</li>
	<li>MODIFIER accordignly a la machine EN SHELL mysql:</li>
	<li>SI vous êtes sur web2, placer mysql1 comme <tt>MASTER_HOST</tt>, et vice versa.
<pre lang="bash">
mysql> CHANGE MASTER TO MASTER_HOST='mysql1',
> MASTER_USER='replication_user',
> MASTER_PASSWORD='LE MOT DE PASSE',
> MASTER_LOG_FILE='mysql-bin.<logfile_ext>',
> MASTER_LOG_POS=<position>;
mysql> SLAVE START;                        # DEMARRER LA REPLICATION sur chaque machine</position></logfile_ext></pre>
</li>
</ul>
<h3>Sources</h3>
<ul>
	<li><span class="nobr"><tt><a href="http://www.howtoforge.com/mysql_database_replication" rel="nofollow">http://www.howtoforge.com/mysql_database_replication</a></tt></span></li>
</ul>