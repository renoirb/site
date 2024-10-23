---
locale: fr-CA
title: Google lance un nouveau protocole pour remplacer http, hello SPDY!
canonical: >-
  https://renoirboulanger.com/blog/2009/11/google-lance-un-nouveau-protocole-pour-remplacer-http-hello-spdy/
status: publish
revising: true
createdAt: '2009-11-12'
updatedAt: '2023-11-20'
tags: []
categories: []
excerpt: ''
---

<p><img src="/wp-content/uploads/2009/11/speedy_gonzales.jpg" alt="Image de Speedy Gonzales par Warner Bros." title="Image de Speedy Gonzales par Warner Bros." width="270" height="312" class="size-full wp-image-1386" style="float:right;border:none;"/>Je viens de voir passer la nouvelle mais elle semble pas passer inaperçue (voir <a href="https://twitter.com/#search?q=%23spdy">Twitter</a>). L'idée serait de voir si on pourrait accélérer les choses en <del>réécrivant un protocole</del><ins>ajoutant des modules pour compléter et améliorer le protocole HTTP (EDIT: J'ai mal interprété)</ins> plus adapté que celui écrit il y plus de dix ans.</p>

<p>L'initiative est décrite dans le billet appelé «<a href="https://code.google.com/speed/">Let's make the web faster</a>» (Rendons le web plus rapide) le nom du projet serait Chromium (voir dans <a href="https://blog.chromium.org/2009/11/2x-faster-web.html">ce billet</a>) qui décrit ce qu'il pourrait être fait pour... rendre le web plus rapide.</p>

<p>Le blog «Google’s Chromium» parle de ce <del>nouveau protocole</del> <ins>processus</ins> qu'ils veulent introduire sera appelé, <strong>SPDY</strong>, prononcé «<strong>SPeeDY</strong>». Est déja en prototypage chez Google et apporte déja un résultat de performance de 55% plus rapide :

<blockquote>SPDY is at its core an application-layer protocol for transporting content over the web. It is designed specifically for minimizing latency through features such as multiplexed streams, request prioritization and HTTP header compression.</blockquote>
<!--more-->
<div style="background:#ececec;margin:5px 0px;padding:18px 8px 8px 50px;border:1px solid #333">
<h4 style="color:#777;margin-bottom:10px;">EN GROS...</h4>
<p>SPDY est un protocole de transmission de donnée par le web (au même sens que le HTTP). Il a été conçu spécifiquement pour minimiser la latence réseau avec des améliorations techniques comme les transferts concurrentes, la priorisation des requêtes et la compression des entêtes.</p>
</div>
<small><strong>Attention</strong>: j'ai grossièrement traduit et j'ai peut être fait une erreur.</small>

</p>

<p>Le développement a été fait en parallèle avec le projet Chrome qui est déjà connu et ils l'ont déjà de fonctionnel et stable. Le rendement estimé a ce jour est déjà a 55% plus rapide (<a href="https://dev.chromium.org/spdy/spdy-whitepaper#TOC-Preliminary-results">source</a>) que le protocole HTTP qu'on connait.</p>

<p>Comme Google l'a déclaré: «Le HTTP nous a servi très bien dans les dernières années» (<a href="https://www.webmonkey.com/blog/Move_Over__HTTPDOT_Say__Hello_World__to_SPDY">source</a>). Ils ajoutent: «Nous voulons uniquement continuer de pousser l'amélioration comme il est si fréquent sur le web».</p>

<p>Le plus gros du changement serait de faire une conversion de bien des serveurs mais il serait possible d'utiliser des proxy (<a href="https://nginx.net/">NGINX</a>, <a href="https://www.lighttpd.net/">LigHTTPd</a> par exemple) mais il est trop tôt pour rendre le tout en production car ils sont en phase d'appel pour commentaires. On peu même y trouver de la <a href="https://dev.chromium.org/spdy">documentation sur le protocole</a> et l'<a href="https://src.chromium.org/viewvc/chrome/trunk/src/net/flip/">accès au code</a> car ils ont offert au grand public la chance de collaborer.</p>

<p>On est loin de la tentative de brevet sur SUDO (un logiciel qui existe en Linux depuis très longtemps !!) par Microsoft. Ref: voir «<a href="https://www.groklaw.net/article.php?story=20091111094923390">Groklaw - Microsoft Patents Sudo?!!.</a>».</p>

<div style="font-size:120%"><p>Pour les développeurs web parmi nous, vous pouvez commencer par regarder ces trucs pour accélérer sans tout changer via la voute documentaire <em>speed</em> de Google.</p><p style="float:right"> voir <a href="https://code.google.com/speed/" style="text-decoration:none;"><span style="font-size:140%color:#158ccb">code.google.com/speed</span></a></p></div>

<h3>Références</h3>

<ul>
    <li><a href="https://blog.chromium.org/"><strong>Google Chromium project </strong>Blog</a></li>
    <li><a href="https://dev.chromium.org/spdy/spdy-whitepaper"><strong>Google Chromium Development community </strong> : SPDY White paper</a></li>
    <li><a href="https://code.google.com/intl/fr-CA/speed/"><strong>Google Chromium Code vault </strong>: Let's make the web Faster</a></li>
    <li><a href="https://www.webmonkey.com/blog/Move_Over__HTTPDOT_Say__Hello_World__to_SPDY"><strong>Webmonkey : Monkey bites</strong> :  Move Over, HTTP. Say ‘Hello World’ to SPDY</a></li>
    <li><a href="https://ajaxian.com/archives/spdy-make-http-chatter-a-lot-faster?utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed%3A+ajaxian+%28Ajaxian+Blog%29&amp;utm_content=Twitter"><strong>Ajaxian</strong> : SPDY : Make HTTP chatter a lot faster</a></li>
    <li><a href="https://technologytreason.blogspot.com/2009/11/spdy-could-gain-acceptence-very-quickly.html"><strong>Technology treason </strong>: SPDY could gain acceptence very quickly - with some product innovation</a></li>
  <li><a href="https://mashable.com/2009/11/12/google-spdy/">Google’s Plan to Make the Web Twice as Fast</a></li>
</ul>

<p><small>Image: <em>Warner Brothers</em></small></p>