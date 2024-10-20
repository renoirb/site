---
locale: fr-CA
title: Ajouter de la valeur a un mot de passe, des astuces
canonical: >-
  https://renoirboulanger.com/blog/2007/11/ajouter-de-la-valeur-a-un-mot-de-passe-des-astuces/
status: publish
revising: true
caracteresBizzares: true
createdAt: '2007-11-20'
updatedAt: '2013-03-27'
tags: []
categories: []
excerpt: ''
---

Durant mes rollups de podcasts, mon <a TARGET="_blank" HREF="http://www.grc.com/securitynow/">podcast préféré</a> expliquait certains concepts pour améliorer la sécurité des mots de passe.

En gros;
<ul>
	<li>Non basé sur des mots de dictionnaire</li>
	<li>Rapetisser une phrase</li>
	<li>Authentification avec Multi facteurs</li>
</ul>
Il s'agira d'une série de posts sur le sujet que je mettrai a jour de temps en temps. Je n'ai pas encore décidé le nombre de posts, mais j'ai créé un nouveau tag pour mes posts: "saferpasswords"
<!--more-->
<strong>Non basé sur des mots de dictionnaire</strong>

En gros, on devrait tous faire ça, utiliser des mots de passe avec du "CaMeLcaSe" (Jeux de majuscules) et "H3X0rR3Pl4C3mEn7" (Haxor replacement, 3=e, t=7, 0=o, 4=a, etc.).

Ces trucs et le case-sensitiveness aide a rendre un mot difficile a faire une attaque de force brute par un script qui essaie les mots d'un dictionnaire.



<strong>Rapetisser une phrase</strong>

Un concept pourrait être de faire un jeu d'association avec le site. Exemple: Digg. Le premier mot qui te viendrait serait creuser, puis un truc qui te frappe quand tu va sur le site, disons son utilité, "mashup d'information".

On aurait donc les mots "<strong>Creuser</strong>" + "<strong>Mashup</strong>" + "<strong>information</strong>"; Remplacer aléatoirement... "c<strong>re ma ion</strong>"... ouf (je vient de monter avec CRE (du premier mot), MA (du¬†second),¬†puis¬†ION (du¬†dernier))  .

ça ressemble a crémation (ça pas rapport aux pompes funèbre ce mot là?).

Anyway c'est plaisant, ca peut faire un autre mot alors ça peut nous aider a se rappeler du jeu de mot.

Ensuite, tu peut décider de remplacer ton¬†mot¬†de¬†passe¬†avec¬†du¬†camelcase,¬†le¬†remplacement¬†haxor¬†et¬†des¬†caractères¬†divers¬†donnerait: "<strong>Cr3&amp;m4*i0n</strong>" eh voilà! Un mot de passe dur a deviner.



<strong>Authentification avec Multi facteurs</strong>

PayPal a rendu accessible <a TARGET="_blank" HREF="https://idprotect.verisign.com/">deux moyens</a> pour ajouter de la sécurité. Le premier est ce que plusieurs utilisent déja. Il s'agit d'un porte clé qui change de numéro.

L'innovation ici que je veut souligner est qu'ils ont aussi commercialisé un truc qui est pas plus gros qu'une carte de guichet.

Qui fait le meme travail, mais en moins embarassant.


<strong>Fin pour le moment</strong>

Suite la semaine prochaine, je pourrait continuer avec d'autres trucs dont un concept similaire a celui accessibilisé par PayPal et Verisign... mais home made, avec même des plugins PAM pour les stations UNIX, je vous tiendrai au courrant.