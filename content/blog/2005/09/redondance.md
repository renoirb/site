---
title: Redondance
locale: fr-CA
created: 2005-09-21
updated: 2023-11-15
canonical: https://renoirboulanger.com/blog/2005/09/redondance/
status: publish
revising: true
categories:
  - tranche-de-vie
tags:
  - entrepreneurial-life
excerpt: ''
---

<p>Travailler avec DNS Bind8 n'est pas toujours évident pour les novices.

<rb-notice-box variant="info" class="my-5">
<strong slot="header">Renoir de 2023:</strong>
Je dois dire qu’a l'époque ce n'était pas évident car il n’y avait pas autant de documentation et tutoriels. Mais aussi, pour être honnête en 2005 j’étais très débutant!
</rb-notice-box>

<!--more-->

<p>Je suis a tenter de permettre une redondance dans mes sites web. On dirait que tous les «<em>host-masters</em>» de la planète se donnent le mot pour conserveur leur secrets concernant le <abbr title="DNSPro and Bind">RoundRobin</abbr> <abbr>Fail Over DNS</abbr> pour permettre aux sites d'aller sur une autre adresse <code>IP</code> lorsque l'hôte manque sa résolution... et permet ainsi d'avoir quand meme un site web encore plus stable!</p>

<p><strong>Erreur de vérification!</strong></p>

<p>Aujourd'hui, j'ai eu la brillante idée de vérifier ma configuration quand √î, Surprise!! mon domaine principal est vide... la zone dns (<code>/var/named/<em>mon-domaine-principal</em>.conf.db</code>) est vidée avec un truc que j'ai configuré pour le fun hier avec DirectAdmin! Vous savez l'option Sub-Domains... Bien, faites attention whiz du shell en SSH. Faites sûr que toutes vos configuraitons httpd sont bien faites DANS LE CONTROL PANEL! sinon, on peut faire le saut!</p>

<p><strong>Groupe du jour</strong>: Seether, <a href="http://music.yahoo.com/ar-292620-discography--Seether"><em>Karma and effect</em></a></p>

<p><strong>Citation du jour</strong> : Rien ne s'est fait de grand qui ne soit une espérance exagérée <em>[<a href="http://www.evene.fr/celebre/biographie/jules-verne-777.php">Jules Verne</a>]</em></p>
