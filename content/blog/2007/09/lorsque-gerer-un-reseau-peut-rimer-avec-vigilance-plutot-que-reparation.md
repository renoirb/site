---
locale: fr-CA
title: Lorsque gérer un réseau peut rimer avec vigilance plutôt que réparation
canonical: >-
  https://renoirboulanger.com/blog/2007/09/lorsque-gerer-un-reseau-peut-rimer-avec-vigilance-plutot-que-reparation/
status: publish
revising: true
caracteresBizzares: true
createdAt: '2007-09-28'
updatedAt: '2013-03-27'
tags:
  - linux
  - outils
  - securite
  - tutoriels
categories:
  - tranche-de-vie
excerpt: ''
---

Les collègues qui travaillent avec moi pour le réseau savent ce que qu'implique chaque modification dans le réseau. Nous travaillons pour remonter le réseau et atteindre un certain niveau côté qualité qui rendra notre travail plus facile pour tous.

Parmi ces améliorations, il s'agit d'un moyen de savoir si tout est correct et être averti si un changement à été opéré et même savoir "où est le bobo".

Il s'agit du service de monitoring avec <a href="http://www.nagios.org/" target="_blank">Nagios</a>. Il ne s'agit ici pas d'un howo-to technique mais plutôt ma "review" de ce que l'installation que j'ai monté peut faire.

<!--more-->

Il y a un mois ou deux je me suis commandé le livre "<a href="https://www.goodreads.com/book/show/1348002.Building_a_Monitoring_Infrastructure_with_Nagios">Building a monitoring infrastructure with Nagios</a>" de David Josephsen <!--#TODO-inline-edit--> qui s'avère être très utile pour comprendre le fonctionnement.

Je ne l'ai pas tout lu car j'avait déja de l'expérience avec Nagios. Puis de toute façon je voulait faire comme on fait souvent, me débrouiller et apprendre avant de "lire le manuel".

La façon qu'on l'a implantée consiste a utilser une <a href="http://www.vmware.com/appliances/directory/1002" target="_blank">VM déjà montée</a> (avec un <a href="http://www.oreon-project.org/" target="_blank">pannel appelé Centreon</a> (<a href="http://www.oreon-project.org/Newsflash/Oreon-became-Centreon.html" target="_blank">Anciennement Oreon</a>) le changement de nom de projet est tout récent).

En gros il s'agit d'une VM qui roule l'application et merge plusieurs applications fort utiles:
<ul>
	<li> Authentification avec notre serveur LDAP</li>
	<li>RRDTools pour les graphiques</li>
	<li>... et <a href="http://wiki.oreon-project.org/index.php/Plugins#More_plugins">bien d'autres</a>.</li>
</ul>
Le pannel Centreon donne beaucoup d'avantages pour la gestion, dont;
<ul>
	<li> Un pannel plus complet [que celui fourni par Nagios] qui donne beaucoup plus d'options de configuration</li>
	<li>Un processus de configuration qui te permet de tester AVANT "d'appliquer"</li>
	<li>Un moyen de conserver une historique des états et même leurs graphiques.</li>
	<li>Beaucoup d'options qui deviennent à portée de la main sur des fonctions de Nagios qu'on ne penserait pas nécessairement.</li>
</ul>
Étant¬†une¬†"techie"¬†qui¬†utilise¬†beaucoup¬†la¬†ligne¬†de¬†commande,¬†j'ai¬†pourtant¬†été¬†surpris¬†d'être¬†rassuré¬†par l'interface aux premiers abords lourd mais complet de l'outil.

Dans¬†le¬†futur,¬†j'aimerai¬†entre-autre¬†améliorer¬†les¬†features¬†de¬†la¬†VM.¬†En voici quelques unes:
<ul>
	<li><a href="http://www.syslog.org/wiki/Main/CentralSyslogTip" target="_blank">Centraliser les logs</a> pour pouvoir les consulter en un seul endroit.</li>
	<li>Utiliser Centreon/Nagios comme "<a href="http://wiki.oreon-project.org/index.php/SyslogNG" target="_blank">alerteur</a>" AVEC les <em>logs</em> CENTRALISÉS, un gros plus!</li>
	<li>Avoir accès a une application du type <a href="http://www.splunk.com/" target="_blank">Splunk</a> pour "fouiller" dans les <em>logs</em>.</li>
	<li> Intégrer les traps SNMP et pouvoir utiliser dans Nagios</li>
	<li> Intégrer le plugin <a href="http://www.network-weathermap.com/node/49" target="_blank">WeatherMap</a> qui affiche l'état complet du réseau.</li>
</ul>
Plus tard j'aurai probablement quelques indices du comment j'ai créé mes propres commandes pour gérer les plugins de nagios.
