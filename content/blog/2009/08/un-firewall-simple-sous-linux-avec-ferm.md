---
locale: fr-CA
title: Un firewall simple sous Linux avec «Ferm»
canonical: >-
  https://renoirboulanger.com/blog/2009/08/un-firewall-simple-sous-linux-avec-ferm/
status: publish
revising: true
created: '2009-08-19'
updated: '2013-03-27'
tags:
  - linux
  - securite
  - tutoriels
  - unix
categories:
  - tranche-de-vie
excerpt: ''
---

Attention: Article Technique!

Dans le but de faire profiter la postérité et ma mémoire personnelle voici mon premier post d'une série d'articles spécialisée sur Linux.

Ces articles proviennent de ma voûte documentaire professionnelle et personnelle.

Évidemment pour les publier ici je dois censurer les détails sensibles, vous me comprendrez (!)

Le fait de les avoir dans le format Wiki Markup de Confluence... et les traduire ici demande du temps pour les reformatter pour mon blogue.
<h2>D'autres articles spécialisés Debian Linux</h2>
D'autres articles technique (pour Debian Linux) seront aussi disponibles dans les prochaines semaines.

Voici une liste de quelques uns que je compte publier:
<ol>
	<li>Monter une machine en SNMP v2c en lecture seule</li>
	<li>Permettre des updates aux serveurs NTP a l'heure</li>
	<li>Installer VMware server 2 sur Debian</li>
	<li>Augumenter le niveau de sécurité pour Infra Publique sous Debian</li>
	<li>Procédure configuration SYSLOG-NG vers un serveur de log</li>
</ol>
J

<!--more-->
<h2>Installer et configurer</h2>
En fait, sous Debian c'est pas très compliqué, on ajoute le paquet, puis on le configure comme mentionné plus bas.
<pre lang="bash"># apt-get update
# apt-get install ferm libnet-dns-perl perl iptables</pre>
J'ai fait une petite version qui permet d'utiliser des variables et mettre le code un peu plus clean (d'un point de vue programmeur).

Vous pouvez remplacer par ce code ci:
<pre lang="bash"># -*- shell-script -*-
#
#  Configuration file for ferm(1).
#
# vmware-mgmt = 8333
# vmware-console = 902
# ntop = 3000
# ... ports ajoutes dans /etc/services

# Source http://www.krzywanski.net/archives/90
# Interfaces
@def $DEV_LOCAL = lo;
@def $DEV_LAN = (eth1 vmnet1 vmnet8);
@def $DEV_INTERNET = eth0;

# Ports
@def $PORTS = (ntp name http https smtp);

# Known IPs
@def $SSH_ALLOWED = (69.159.234.55 192.168.2.1);
@def $SSH_DYNDNS = @resolve((somehost.renoirboulanger.com someotherhost.somenetwork.net));

# SSH Clients
@def $SSH_CLIENTS = ($SSH_ALLOWED $SSH_DYNDNS);

table filter {
    chain INPUT {
        policy DROP;

        # connection tracking
        mod state state INVALID DROP;
        mod state state (ESTABLISHED RELATED) ACCEPT;

        # allow local packages
        interface $DEV_LOCAL ACCEPT;
        interface $DEV_LAN ACCEPT;

        # allow ping from the administrator's network
        interface $DEV_INTERNET saddr ($SSH_DYNDNS $SSH_ALLOWED) proto icmp icmp-type echo-request ACCEPT;

        # respond to ping
        proto icmp icmp-type echo-request ACCEPT;

        # allow SSH connections
        proto tcp dport 2522 ACCEPT;

        proto tcp dport $PORTS ACCEPT;
    }
    chain OUTPUT {
        policy ACCEPT;

        # connection tracking
        mod state state INVALID DROP;
        mod state state (ESTABLISHED RELATED) ACCEPT;
    }
    chain FORWARD {
        policy DROP;

        # connection tracking
        mod state state INVALID DROP;
        mod state state (ESTABLISHED RELATED) ACCEPT;
    }
}</pre>
Pour plus de détails a propos de la syntaxe, <a href="http://ferm.foo-projects.org/download/2.0/ferm.html">voir la documentation</a>.
<h2>Autres ressources</h2>
J'ai utilisé, entre autres ces ressources pour m'inspirer de ce mini-tutoriel
<ol>
	<li><a href="http://www.debian.org/doc/manuals/securing-debian-howto">Securing Debian HOWTO</a></li>
	<li><a href="http://www.tldp.org/HOWTO/Security-HOWTO/">Linux Security HOWTO</a></li>
	<li><a href="http://www.cromwell-intl.com/security/security-firewall.html">Firewall Tools</a></li>
	<li><a href="http://www.debian.org/security/">Debian Security</a></li>
	<li><a href="http://www.debian.org/doc/debian-policy/">Debian Policies</a></li>
</ol>