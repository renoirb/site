---
locale: fr-CA
title: >-
  Copier un fichier d'un serveur à l'autre en le compressant pour la route via
  NetCat et
canonical: >-
  https://renoirboulanger.com/blog/2007/09/copier-un-fichier-dun-serveur-a-lautre-en-le-compressant-pour-la-route/
status: publish
revising: true
createdAt: '2007-09-25'
updatedAt: '2013-03-27'
tags:
  - linux
  - outils
  - tutoriels
categories:
  - tranche-de-vie
excerpt: ''
---

J'ai voulu un jour transférer des fichiers entre deux machines et les fichiers je les trouvaient lourds. Habituellement j'aurait utilisé soit <a href="http://en.wikipedia.org/wiki/Rsync" target="_blank">rsync</a> ou <a href="http://en.wikipedia.org/wiki/SCP" target="_blank">scp</a> mais cette fois ci je voulait utiliser un processus un peu différent. Pourquoi ne pas compresser le contenu durant le transfert?<!--more-->

Une méthode de compression-transfert-décompression aurait été, traditionnellement, de lancer une commande de création d'archive, attendre qu'elle finisse... (ça peut être long)... puis transférer... (attendre)... puis se loguer sur l'hôte distant. Ensuite décompresser le fichie (ou le conserver as-is).

Rsync est bien il permet de synchroniser BEAUCOUP de fichiers entre des machines et j'aime l'utiliser. Scp est très bien aussi il me permet de transférer des fichiers crées simplement, comme il se doit... Mais pourquoi attendre après les commandes de la procédure d'avant quand on peut tout automatiser en une seule commande?

En tant que <em>Geek</em> moi même,  j'aime trouver des solutions élégantes pour faire quelque chose de la sorte sans avoir a attendre après un <em>input.</em>

Dans mon nouveau <em>blogroll</em> j'ai découvert un <a href="http://www.hostinggeek.com/">blogeur</a> qui semble avoir les mêmes intérêts que moi  coté hosting et machines serveurs. C'est pour ça que je l'ai ajouté. Ensuite en tant que bon bilingue je vais traduire l'essentiel de <a href="http://www.hostinggeek.com/2005/08/tar-over-ssh.html">son post</a> et le lier comme référence :).

<strong>La technique</strong>

En gros,  il suffit de lancer la commande suivante:
<pre lang="bash">$tar -zcf - ./ | ssh remoteuser@remotehost tar -C /path/to/remote/dir -zxf -</pre>
C'est simple que qui se passe.

En fait il crée une archive compressée par <strong>tar</strong> du dossier courrant (<strong>./</strong>) ou peu importe le dossier il suffit de le mentionner là.) et envoie "l'<em>archive</em>" au
<em>stdout</em> (standard output) Ensuite le pipe(<strong>|</strong>), attrape le contenu du <em>stdout</em>) puis appelle <em>ssh(secure shell) </em>pour se connecter en connection sécurisée entre les deux machines par ligne de commande qui exécute presto une autre instance de tar et roule une décompression dans le stdin (<strong>- </strong>aka. standard input).

La seule attrape possible c'est que le serveur distant doit avoir la commande tar disponible dans son <em>path </em>(logue toi sur la machine et si
<em>tar </em>répond... c'est ok. Sinon faites "<strong>$which tar</strong>" ou "<strong>$locate tar</strong>" pour trouver le binaire.