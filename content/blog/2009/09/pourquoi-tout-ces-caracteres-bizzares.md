---
locale: fr-CA
title: Pourquoi tout ces caractères bizzares?
canonical: >-
  https://renoirboulanger.com/blog/2009/09/pourquoi-tout-ces-caracteres-bizzares/
status: publish
revising: true
created: '2009-09-19'
updated: '2013-03-27'
tags:
  - html
  - vulgarisation
categories:
  - tranche-de-vie
excerpt: ''
---

<div style="background:#ececec;margin:5px 0px;padding:18px 8px 8px 50px;border:1px solid #333">
<h3 style="color:#777;margin-bottom:10px;">UNE SOLUTION A ÉTÉ PUBLIÉE</h3>
<p>J'ai enfin réglé la situation! J'ai pris du temps avant de le faire, mais j'ai réussi. Suite sur <a href="http://renoirboulanger.com/blog/2010/06/comment-remplacer-les-caracteres-bizzares-dans-wordpress-lorsqu-on-a-mal-fait-la-conversion/">Comment remplacer les caractères bizzares dans WordPress lorsqu'on a mal fait la conversion</a>.</p></div>

C'est dommage.

C'est pour rester poli car vous pouvez vous imaginer que ça me met pas de bonne humeur ;)

Les lettres bizzares qui remplacent les accents (é, √ä)... c'est un problème de traduction de «<a href="http://fr.wikipedia.org/wiki/Codage_de_caract%C3%A8res">Character set</a>».

<h2>Pourquoi?</h2>
Parceque j'ai fait la gaffe de ne pas «Backuper» ma base de donnée de mon blogue avant de faire une mise a jour sur le serveur <a href="/blog/2009/08/geeknight-ce-soir/">des Geeks</a> et après l'avoir réinstallé. 

Ça m'apprendra!

Il faudrait donc que je regarde chaque endroit où j'écris en français et que je corrige «à bras».

Mais j'en ai pas envie!

Alors je suis, <strong>présentement</strong>, en train de faire un programme en PHP pour corriger la situation. Une fois qu'il sera terminé, je compte le publier ici ;)

<h2>En attendant?</h2>
Voici ce que signifie chaque symbole... en attendant que j'applique sur toute ma base de donnée les corrections:
<ul>
	<li> √© = é </li>
	<li> √â = É </li>
	<li> √† = à </li>
	<li> √® = è </li>
	<li> √™ = ê </li>
	<li> √¢ = â </li>
	<li> ‚Äô = ‘ </li>
	<li> ¬´ = « </li>
	<li> ¬ª = » </li>
	<li> √ß = ç </li>
	<li> √π = ù </li>
	<li> √ª = û </li>
	<li> √Æ = î </li>
</ul>

Si vous permettez, je vais retourner tenter de régler le problème :)