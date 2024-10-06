---
title: >-
  Réalisation d'une application d'échange de cadeau avec RED L'agence le «club
  échangiste» [2009]
locale: fr-CA
created: 2010-02-03
updated: 2013-03-27
canonical: >-
  https://renoirboulanger.com/blog/2010/02/realisation-dune-application-dechange-de-cadeau-avec-red-lagence-le-%c2%abclub-echangiste%c2%bb-2009/
status: publish
revising: false
tags:
  - outils
  - php
  - symfony
  - web
categories:
  - portfolio
  - programmation
excerpt: >-
  Ce projet consistait en une application en ligne d'échange de cadeaux, conçue
  comme une carte de Noël interactive pour l'agence RED à Montréal.
  L'application a d'ailleurs remporté le Grenier d'Or lors de la 17ᵉ édition de
  la compétition. Le site web permettait aux participants de visualiser leur
  cadeau et de participer au « club échangiste » en volant le cadeau d'un autre
  participant. Chaque fois qu'un cadeau était volé, la personne concernée
  recevait un courriel l'informant du vol et l’annoncant quel cadeau lui a été
  remis.
coverImage:
  src: ~/assets/content/blog/2010/02/echangistes_mini.png
  alt: ' '
  text: RED propose de finir l'année dans un Club échangiste
---

Il s’agit d’une réalisation que j’ai effectuée en deux semaines pour
[RED L’agence](http://www.agencered.ca/). L’idée vient de François Sauvé lors
d’une rencontre pour un autre projet. Il m’a dit: «J’ai une idée de fou. Je ne
sais pas si on pourrait faire ça rapidement mais...».

C’est le genre de situation que j’aime! Une question, la possibilité de me
laisser aller, et hop!

[RED](http://www.agencered.ca/) voulait faire offrir un cadeau à chacun de ses
clients privilégiés d’une façon hors de l’ordinaire. Les participants étaient
invités a visionner leur cadeau par une petite carte de noël reçue par la poste
([devant](/blog/2010/02/realisation-dune-application-dechange-de-cadeau-avec-red-lagence#focus-devant),
[dos](/blog/2010/02/realisation-dune-application-dechange-de-cadeau-avec-red-lagence#focus-dos))
avec une _adresse web_ `http://echangiste.agencered.ca/` et un code qui permet
de participer.

Le concept graphique était, selon moi, bien rendu. Un club échangiste avec les
lumières tamisés, rien d’offensant mais tellement bien choisi pour le jeu.

Le site web devait permettre aux participants de voir leur cadeau et de pouvoir
«Participer au club échangiste» en volant le cadeau d’un autre participant.
Chaque participant qui se faisait voler son cadeau reçevait un courriel qui lui
annonçait qu’il s’était fait voler et qu’il pouvait aller le récupérer.

<!--more-->

Les échanges pouvaient avoir lieu jusqu’au 16 décembre 2009 à 23:59:59. Ensuite
une page affichait pour dire que l’échange était terminé.

Le lendemain même, [RED](http://www.agencered.ca/) a préparé tout les cadeaux et
les a envoyés avec une petite carte postale
([devant](~/assets/content/blog/2010/02/carte_postale_2_front.jpg),
[dos](~/assets/content/blog/2010/02/carte_postale_2_back.jpg)) et partait les
cadeaux de chaque récipiendaire vers leur résidence.

### PARTAGE DES TÂCHES

Je n’ai, évidemment, pas tout fait ça tout seul. En gros, je me suis occupé de
l’application tandis que RED a fait tout le reste.

#### [RED L’agence](http://www.agencered.ca/)

[RED](http://www.agencered.ca/) à fait une grosse partie du travail dans ce
projet: Le graphisme et le concept de tout le projet, l’intégration HTML, le
Javascript, les deux cartes, les photos de chaque cadeaux, chaque description

#### Ma participation

J’ai planifié, rédigé les besoins techniques, les cas d’utilisations et
programmé en utilisant _symfony framework (v1.2 en PHP)_.
[Stéphan Champagne](http://stephanchampagne.com/) m’a accompagné pour ce qui
concerne la normalisation de la base de donnée et les controleurs. Grâce à lui
j’ai pu produire dans les temps une grande charge de travail a moi seul.

Ce projet arrivait dans un bon timing car j’était dans une passe où je ne
voulait que coder pour passer ma
[certification ZCE](http://renoirboulanger.com/blog/2009/09/devenir-zend-certified-engineer-avec-php5/)
(que je n’ai toujours pas). Je cherchait des petits projets pour jouer avec des
frameworks PHP. Je crois que ce projet fut une réussite.

### AU FINAL

Il y a eu **plus d’une centaine d’échanges** et beaucoup de plaisir pour les
participants. J’ai su, ce week-end, que le projet **club échangiste** est en
nomination au 17^e  <!-- Janvier 2010 -->
[concours annuel «**Le Grenier d’Or**»](http://www.grenier.qc.ca/grenier-or/)
pour le monde des communications.

<!--
Traces still present 2024:
- https://www.facebook.com/departementdesmiracles.quebec/posts/pfbid04AoX9HannLPMXrL2VFVYkNeFFW3K5vp5KsxPxHMku6yLdgUYk5KCaCFaATzrna4Nl

Year after:
- XVIII Grenier https://www.facebook.com/departementdesmiracles.quebec/photos/pb.100046361871759.-2207520000/499361859674/?type=3

-->
**Mise à jour du lendemain des _Grenier d’Or_**: Durant la soirée, le projet a
été mentionné lauréat plusieurs fois. Le projet a remporté un **Certificat
d’Excellence** dans la catégorie **JEU ET INTERACTIVITÉ**.

<div style="overflow:hidden;clear:both;" class="thumbnails gallery flex flex-row flex-wrap">

<app-image class="w-1/3 focus-devant" id="focus-devant" src="~/assets/content/blog/2010/02/carte_postale_1_front.jpg" alt="Photo du devant de la carte postale. Il est écrit: RED propo de finir l’année dans un Club échangiste" figcaption="Devant"></app-image>

<app-image class="w-1/3 focus-dos" id="focus-dos" src="~/assets/content/blog/2010/02/carte_postale_1_back.jpg" alt="Photo du derrière de la carte postale. Il est écrit: Visitez echangiste.agencered.ca, entrez votre numéro d’accès exclusif et voyez le cadeau que RED vous offre (...)" figcaption="Dos"></app-image>

<app-image class="w-1/3" src="~/assets/content/blog/2010/02/scr_echange2009_Accueil.png" alt="Capture d’écran de l’application web avec image d’une porte avec affiche." figcaption="CLUB ÉCHANGISTE, entrez votre code."></app-image>

<app-image class="w-1/3" src="~/assets/content/blog/2010/02/scr_echange2009_Gifts.png" alt="Capture d’écran de l’application web on y voit une series de boîtes avec des photos de cadeaux. Nous voyons que c’est Eric T qui est connecté et le cadeau qu’il a pour le moment. Eric est présenté le choix de tenter d’échanger son cadeau encore 10 fois, et qu’il a jusqu’au 16 décembre 2009 a 23:00 pour le faire." figcaption=" ">(...)
Vous avez droit a 10 échanges d’ici au 16 décembre 2009 à 23:59. Ensuite, le
sort en est jeté et vous recevrez dans les heures qui suivent votre
cadeau.</app-image>

<app-image class="w-1/3" src="~/assets/content/blog/2010/02/scr_echange2009_Confirm.png" alt="Confirmation d'un échange" figcaption="Voulez-vous vraiment échanger votre cadeau avec celui de Francois S. Ensuite, il vous restera 9 echanges. voulez-vous continuer? OUI NON"></app-image>

<app-image class="w-1/3" src="~/assets/content/blog/2010/02/scr_echange2009_Ferme.png" alt="" figcaption=" "></app-image>

<app-image class="w-1/3" src="~/assets/content/blog/2010/02/carte_postale_2_front.jpg" alt="" figcaption=" "></app-image>

<app-image class="w-1/3" src="~/assets/content/blog/2010/02/carte_postale_2_back.jpg" alt="" figcaption=" "></app-image>

</div>
