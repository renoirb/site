---
title: >-
  Redondance des serveurs : stratégie pour améliorer la résilience des sites web
locale: fr-CA
created: 2005-09-21
updated: 2023-11-15
canonical: https://renoirboulanger.com/blog/2005/09/redondance/
status: publish
revising: true
caracteresBizzares: true
categories:
  - techniques
tags:
  - entrepreneurial-life
excerpt: >-
  Je partage mes réflexions et mes récentes découvertes concernant les techniques d'amélioration de la résilience des sites web. J'y explore particulièrement l'utilisation de BIND et du mécanisme de 'Round Robin' dans le contexte d'une architecture multi-serveurs. Cette approche implique la mise en place de plusieurs serveurs, chacun hébergeant une copie identique des sites, et la configuration d'un système de distribution des requêtes permettant d'alterner efficacement entre les serveurs disponibles.
---

Travailler avec DNS Bind8 n'est pas toujours évident pour les novices.

<rb-notice-box variant="info" class="my-5">
<strong slot="header">Renoir de 2023:</strong>
Je dois dire qu’a l'époque ce n'était pas évident car il n’y avait pas autant de documentation et tutoriels. Mais aussi, pour être honnête en 2005 j’étais très débutant!
</rb-notice-box>

<p>Je suis a tenter de permettre une redondance dans mes sites web. On dirait que tous les «<em>host-masters</em>» de la planète se donnent le mot pour conserveur leur secrets concernant le <abbr title="DNSPro and Bind">RoundRobin</abbr> <abbr>Fail Over DNS</abbr> pour permettre aux sites d'aller sur une autre adresse <code>IP</code> lorsque l'hôte manque sa résolution... et permet ainsi d'avoir quand meme un site web encore plus stable!</p>

<p><strong>Erreur de vérification!</strong></p>

<!--#TODO notice caracteresBizzares √î -->
<p>Aujourd'hui, j'ai eu la brillante idée de vérifier ma configuration quand √î, Surprise!! mon domaine principal est vide... la zone dns (<code>/var/named/<em>mon-domaine-principal</em>.conf.db</code>) est vidée avec un truc que j'ai configuré pour le fun hier avec DirectAdmin! Vous savez l'option Sub-Domains... Bien, faites attention whiz du shell en SSH. Faites sûr que toutes vos configuraitons httpd sont bien faites DANS LE CONTROL PANEL! sinon, on peut faire le saut!</p>

<p><strong>Groupe du jour</strong>: Seether, <a href="http://music.yahoo.com/ar-292620-discography--Seether"><em>Karma and effect</em></a></p>

<p><strong>Citation du jour</strong> : Rien ne s'est fait de grand qui ne soit une espérance exagérée <em>[<a href="http://www.evene.fr/celebre/biographie/jules-verne-777.php">Jules Verne</a>]</em></p>
