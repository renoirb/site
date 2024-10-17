---
title: Journée blanche d’inquiétudes
locale: fr-CA
created: 2005-09-23
updated: 2023-11-15
canonical: https://renoirboulanger.com/blog/2005/09/journee-blanche-d-inquietudes/
status: publish
revising: true
categories:
  - tranche-de-vie
tags:
  - entrepreneurial-life
  - inexis
excerpt: >-
  J’adore mon travail d'administrateur système Linux. Sauf que lorsque lorsque
  je passe une nuit blanche pour un simple détail… c’est frustrant si je ne peux
  dire.
---

<p>Chaque métier a ses propres inconvénients. J'adore le mien, mais lorsque je dois passer la nuit et perdre une journée entière a chercher UN SEUL bug... c’est enrageant!</p>

## Mon serveur web

<p>Vous ne savez pas mais l'entreprise que je possède (<a href="https://web.archive.org/web/20050210131137/http://inexis.net/">INEXIS Solution Web Inc</a>) a son propre serveur web. Voici ses spécifités! :</p>

<ul>
<li>Intel(R) Pentium(R) 4 CPU 2.80GHz</li>
<li>Double ATA Maxtor 60Go SATA</li>
<li>Sous <a href="http://www.centos.org">CentOS 3.3</a>, kernel 2.4.21-27.0.1.ELsmp</li>
<li><em>LAMP</em> (Linux, Apache, Mysql, Php) Standard</li>
<li>Exim version 4.42&#42;</li>
<li>Direct Admin 1.25.0</li>
</ul>

<p>C'est avec Exim&#42; Que j'ai eu des problèmes hier... Mon panneau de contrôle <em>Direct Admin</em> a décidé d'effacer le fichier <code>/etc/virtual/domains</code> entretenu par le <code>/etc/exim.conf</code> que Direct Admin s'occupe.</p>

<p>Dans le <code>/var/log/mainlog</code> je ne voyais que le message d'erreur suivant:</p>

<pre><code>(...) remote host address is the local host (...)
</code></pre>

<div style="border:1px solid #777;padding:4px;"><tt> 2005-09-21 22:57:17 1EIHGv-0003dZ-6d  for admin@[HOSTNAME] for [CLIENT EMAIL] 2005-09-21 22:57:17 1EIHGv-0003dZ-6d =&gt; [CLIENT USERNAME]  F= R=localuser T=local_delivery S=543 2005-09-21 22:57:17 1EIHGv-0003dZ-6d =&gt; admin  F= R=localuser T=local_delivery S=535 2005-09-21 22:57:17 1EIHGv-0003dZ-6d Completed 2005-09-21 22:58:02 1EIHHe-0003dr-Gi  for [CLIENT EMAIL] 2005-09-21 22:58:02 1EIHHe-0003du-Ht  for [CLIENT EMAIL] <strong>2005-09-21 22:58:02 1EIHHe-0003du-Ht remote host address is the local host: [HOSTNAME]</strong> </tt></div>

Alors lorsque vous voyez ce type d'erreur. Assurez vous que le fichier possède bel et bien a quelque part le nom de votre `hostname`

Évidemment, c'étais pas brillant de vouloir enlever du panneau de controle le hostname de la machine pour le changer de place dans mon compte d'administrateur du panneau de contrôle... parcequ'il y avait une liste de noms de domaines, meme ceux que je ne me servirais jamais pour faire un site web... dont celui du `[HOSTNAME]`. Alors, faites attention a votre `hostname`!

<p>Pour ceux qui ont le même problème actuellement, pour votre bénéfice, j'ai eu de l'aide avec la page <a href="http://www.exim.org/exim-html-4.10/doc/html/FAQ_3.html#TOC88">suivante</a></p>

<p><strong>Pensée du jour</strong> : A l'échelle d'une carte, le monde est un jeu d'enfant. --Laurent Graff</p>

<p><strong>Album du jour</strong> : <a href="http://music.yahoo.com/ar-285635-discography--Black-Eyed-Peas">Elephunk</a>, des Black Eyed Peas</p>
