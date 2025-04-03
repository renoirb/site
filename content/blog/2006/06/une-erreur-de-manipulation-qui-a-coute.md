---
title: Une erreur de manipulation qui a coûté
locale: fr-CA
createdAt: 2006-06-10
updatedAt: 2023-11-15
canonical: >-
  https://renoirboulanger.com/blog/2006/06/une-erreur-de-manipulation-qui-a-coute/
status: publish
revising: true
categories:
  - tranche-de-vie
tags:
  - entrepreneurial-life
excerpt: >-
  J’ai, encore, eu un probleme de serveur et ce n’est pas de ma faute cette
  fois. Un autre événement qui m'a fait réaliser qu’il faut toujours valider et
  tester ce qu’on installe.
---

<p>Je dois refaire la configuration de mon blogue <ins class="renoirb-2023">(qui était sur Mambo CMS)</ins> car j’ai perdu trois mois de billets. Je continurai a partir d’ici <ins class="renoirb-2023">(avec WordPress)</ins> mes billets — <ins class="renoirb-2023">J’ai perdu ces billets et le Internet Archive ne peux m’aider.</ins> Dommage.</p>

<!--more-->

<p>J’ai, encore, eu un probleme de serveur et ce n’est pas de ma faute cette fois.</p>

<p>En faisant une commande de backup j’ai (a mon insu) fait atteindre des clusters defectueux sur mon disue RAID primaire... ce qui a fait "jammer" l'ordinateur au complet. Deux semaines de merde vous dites... j’en ai eu toute une!!!</p>

<p>Ça m’a prit deux semaines a tout re-calibrer. Faire des copies de sauvegarde avec ce qui était récupérable. Rouler sur le RAID1 secondaire, croiser les doigts, attendre Dell pour le nouveau disque dur. Dealer avec les clients parceque tout leur services ne fonctionnent pas! Des clients stressés qui appellent deux fois par jour pour une situation qu'ils connaissent... et moi qui doit tolérer tout ceci. c'est terminé maintenant. tout est réparé. UNE CHANCE!</p>

<p>La «merde» la dedans c'est que mes bases de données elles... ne faisaient <strong>pas</strong> partie des données sauvées... meme en brut (les FYI et ainsi de suite... dans <code>/var/lib/mysql</code>) alors j’ai perdu mes posts de mes blogs... et quelques clients aussi. <ins class="renoirb-2023">— J’ai pu éventuellement pu recouvrir. Ce fut un événement très éducatif</ins></p>
