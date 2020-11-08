---
locale: fr-CA
title: Quelques bouts de code pour automatiser le déploiement
canonical: https://renoirboulanger.com/blog/2015/01/quelques-bouts-de-code-pour-automatiser-le-deploiement
date: &createdAt '2015-01-28T11:30:24-04:00'
createdAt: *createdAt
preamble:
  disable: true
  text: ' '
categories:
  - experiments
tags:
  - cloud-computing
  - development
  - Favourites
  - operations
  - Salt stack
---

Ce billet n'est qu'un simple «link dump» pour retrouver parmi plusieurs notes
éparpillés. Je compte éventuellement publier la totalité de mon travail dans des
projets publics sur GitHub une fois la boucle complétée. Le tout sans fournir
les données privés, évidemment.

Faire le saut vers l'automatisation demande beaucoup de préparation et je prends
le temps de publier ici quelques bouts de code que j'ai écrits pour compléter la
tâche.

Au final, mon projet permettra de déployer un site qui s'appuie sur un cluster
MariaDB, Memcached, une stack LAMP («prefork») lorsqu'on a pas le choix, une
stack \[HHVM/php5-fpm, Python, nodejs\] app servers pour le reste servi par un
frontend NGINX. Mes scripts vont déployer une série d'applications web avec
toutes les dépendances qui les adaptent géré dans leur propre «git repo» parent.
Dans mon cas, ce sera: WordPress, MediaWiki, Discourse, et quelques autres.

## Requis

- Instantiation à partir de commandes `nova` du terminal, crée une nouvelle VM
  mise à jour et son nom définit son rôle dans le réseau interne
- Les VMs sont uniquement accessible par un Jump box (i.e. réseau interne
  seulement)
- Un système regarde si un répertoire clone git à eu des changements sur la
  branche «master», lance un événement si c'est le cas
- Chaque machine sont construites à partir d'une VM minimale. Dans ce cas-ci;
  Ubuntu 14.04 LTS
- Système doit s'assurer que TOUTES les mises à jour sont appliqués
  régulièrement
- Système doit s'assurer que ses services interne sont fonctionnels
- Dans le cas d'une situation où une VM atteint le seuil critique OOM, la VM
  redémarre automatiquement
- Le nom de la VM décrit son rôle, et les scripts d'installation installent les
  requis qui y sont affectés
- Les configurations utilisent les détails (e.g. adresses IP privés et
  publiques) de chaque pool (e.g. redis, memcache, mariadb) et ajuste
  automatiquement les configurations dans chaque application
- ... etc.

## Bouts de code

- [Installation automatisée d'un cluster MariaDB avec réplication SSL][0]
- [Configuration SSH pour accéder aux VMs du réseau interne][1]
- [Vérifier si un git repo a changé][2], j'ai prévu faire un "salt-call" qui
  trigger un événement Salt Reactor pour lancer un build run
- [Configuration Monit][3] pour s'assurer que les services «sont up and running»
- [Installer automatiquement une VM enregistrée au salt-master][4] via Salt
  Reactor. Le nom de la VM déclare son rôle, le reste se fait tout seul
  (incomplet mais un début)
- [Installer des plugins WordPress à partir des repos Git/SVN/Fichiers Zip][5]
- [Installation automatique d'un salt-master][6] et des dépendances de build
- [Définir le rôle d'une VM basé sur son nom + TLD][7] (e.g.
  redis-sessions.production.wpdn)
- [Vérifier avec l'origine d'un clone git s'il y a des changements upstream,
  lancer un événement si c'est le cas][8]
- [Automatiser des commands selon certains événemnts dans un cluster géré par
  Salt][4]
- [Automatiser l'installation d'un salt master basé uniquement sur une série de
  git repos et d'un bootstrapper script][6]
- [Automatiser les backups ElasticSearch][9]
- [Système pour s'assurer que tous les services son fonctionnels, comment tester
  s'ils fonctionnent et comment les redémarrer][3] avec **Monit**

## Billets inspirants sur le sujet

- [There will be no reliable cloud (part 1)][10], [part 2][11], [part 3][12]
- [The missing piece operating systems for "Web Scale" Cloud Apps][13]
- [Why an X (VM) "instance" isn't a server][14]
- [Simplifying cloud reliability][15]

[0]:
  https://renoirboulanger.com/blog/2015/01/create-mariadb-cluster-replication-ssl-salt-stack/
[1]: https://gist.github.com/WebPlatformDocs/6ecf0d852a9148741bef
[2]: https://gist.github.com/WebPlatformDocs/437f763b948c926ca7ba
[3]: https://gist.github.com/WebPlatformDocs/780307ff289864ba02f5
[4]: https://gist.github.com/WebPlatformDocs/563cb12326b92b22a452
[5]: https://gist.github.com/renoirb/1b42edac44c723185c9d
[6]: https://gist.github.com/renoirb/a66b533c46ef7a8de8e3
[7]: https://gist.github.com/renoirb/b2e0222ad52e5d453298
[8]: https://gist.github.com/renoirb/11258261
[9]: https://gist.github.com/WebPlatformDocs/e925fee9b6085d7cbec4
[10]:
  http://blog.hendrikvolkmer.de/2013/04/03/there-will-be-no-reliable-cloud-part-1/
[11]:
  http://blog.hendrikvolkmer.de/2013/04/09/there-will-be-no-reliable-cloud-part-2/
[12]:
  http://blog.hendrikvolkmer.de/2013/04/12/there-will-be-no-reliable-cloud-part-3/
[13]:
  http://blog.hendrikvolkmer.de/2013/10/11/the-missing-piece-operating-systems-for-web-scale-cloud-apps/
[14]: http://www.rightbrainnetworks.com/blog/why-an-ec2-instance-isnt-a-server/
[15]: http://samj.net/2012/03/08/simplifying-cloud-reliability/
