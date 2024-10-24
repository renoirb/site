---
locale: fr-CA
title: Rendre un mot de passe plus difficile à briser
canonical: >-
  https://renoirboulanger.com/blog/2009/10/rendre-un-mot-de-passe-plus-difficile-a-briser/
status: publish
revising: true
created: '2009-10-18'
updated: '2013-03-27'
tags: []
categories: []
excerpt: ''
---

<img class="size-full wp-image-1205" style="border:none !important;float:right;" title="Utiliser le même mot de passe pour tout ses services c'est mal... 'Voyez?" src="https://renoirb.github.io/site-assets/assets/content/blog/2009/10/hm36drugs-are-bad-posters.jpg" alt="Utiliser le même mot de passe pour tout ses services c'est mal... 'Voyez?" width="318" height="450" />

Durant mon ménage aujourd'hui je suis tombé mon archive de podcasts de <a href="http://www.grc.com/securitynow/">mon podast préféré: Security Now</a> avec Leo Laporte <a href="http://fr.wikipedia.org/wiki/Leo_Laporte"></a> et Steve Gibson<a href="http://en.wikipedia.org/wiki/Steve_Gibson_%28computer_programmer%29"></a> qui expliquait certains concepts pour améliorer la sécurité des mots de passe <a href="/blog/2009/10/rendre-un-mot-de-passe-plus-difficile-a-briser/#two">[2]</a>.

Il est prouvé que beaucoup trop de gens utilisent le même mot de passe pour tous les services qu'ils utilisent. Encore pire, plusieurs utilisent un mot de passe trop évident.

Je ne suis pas plus «saint que le Pape» moi même. J'utilise parfois, trop souvent, le même mot de passe.

Je vais donc partager avec vous certains trucs que fait pour protéger mon identité.
<h2>Utiliser toujours le même mot de passe c'est mal!</h2>
... m'kaaay?

Pour plusieurs raisons.
<ul>
	<li>C'est pas tout les gestionnaires de serveurs qui sont honnêtes;</li>
	<li><a href="http://www.win.tue.nl/hashclash/rogue-ca/">Briser</a> un algorithme «<a href="http://en.wikipedia.org/wiki/MD5">MD5</a> hash» est assez facile! <a href="/blog/2009/10/rendre-un-mot-de-passe-plus-difficile-a-briser/#one">[1]</a> (pas impossible, disons);</li>
	<li>Le code de crypto n'est pas toujours bien fait, et possible de faire du «reverse engineering»;</li>
	<li>C'est pas sûr que le code encrypte en autre chose que MD5 (SHA par exemple), mais encore... c'est aussi (potentiellement) brisable que le MD5;</li>
	<li>Si c'est un mot de passe trop facile a deviner qui cite quelque chose que tout le monde sait que vous aimez, par exemple, et sans même l'obscurcir.... et qu'il est utilisé partout.</li>
</ul>
<!--more-->

Vous pouvez facilement vous imaginer que si vous donnez votre mot de passe MSN a ce site qui vous permet de savoir qui vous bloque, par exemple, pourrait capturer votre mot de passe et essayer sur tout les endroits possibles.

Surtout si vous avez fourni votre adresse courriel.

On ne peut pas contrôler tout le temps si la connexion est sécurisée, c'est pour ça qu'il faut faire attention aux mots de passe qu'on utilise et où.
<blockquote style="color: #666666; font-size: small;"><strong>Steve Gibson</strong> (...) I wanted to sort of take our listeners through this very feasible scenario. (...) [some guy], did create a tool which does this, which exists on the Internet. He set it up in a WiFi hotspot, intercepted ARP packets, and performed ARP spoofing to insert himself into connections. During a 24-hour period of time, he intercepted <strong>114 </strong>logins to<strong> Yahoo.com</strong>, <strong>50 </strong>to<strong> Gmail</strong>, <strong>42 </strong>to<strong> Ticketmaster.com</strong>, <strong>14 </strong>to<strong> RapidShare.com</strong>, <strong>13 </strong>to<strong> Hotmail</strong>, <strong>9 </strong>to<strong> PayPal</strong>, <strong>9 </strong>to<strong> LinkedIn</strong>, <strong>3 </strong>to<strong> Facebook</strong>. And so in that 24-hour period he captured <strong>117 separate email account logons</strong>; <strong>16 credit card numbers</strong> along with all of the subsidiary, you know, expiration date and security code and everything, users' names, passwords, everything required to use those cards; <strong>9 secure PayPal logins</strong>; and over 300 other miscellaneous secure logins, using this tool.</blockquote>
Source: <a href="http://en.wikipedia.org/wiki/Steve_Gibson_%28computer_programmer%29">Steve Gibson</a>, <a href="http://www.grc.com/sn/sn-217.htm">Security now! épisode #117</a> à 1:02:10

Imaginez donc si tout ces mots de passes accumulés proviennent de personnes différentes un pour un (ce gars) aurait accès a (environ)  372 usagers et mots de passe pour trois services par série.

C'est sûr que dans ce cas-ci c'était sur un Hot-Spot WiFi ou il a laissé son portable rouler son programme. C'est un scénario «faisable» donc on est jamais trop prudent.

Ce n'est pas, pour autant, une bonne raison pour ne pas utiliser de service Wi-Fi public.
<h2>Attribuer un mot de passe en fonction de la nature du service utilisé</h2>
... et de la manière que je me connecte.

Je trouve plus logique d'attribuer un mot de passe en fonction de cette logique, car ainsi on peut s'aider soi même a savoir quel est le mot de passe.

Personnellement plus important le mot de passe est, plus compliqué devient mon mot de passe.

<strong>Nature du service</strong>

Voici comment je catégorise les services en fonction de la complexité du mot de passe:
<ol>
	<li>Service bancaire (Banque, Paypal, Crédit, etc)</li>
	<li>Service de courriel professionnel</li>
	<li>Service de courriel secondaire</li>
	<li>Varia</li>
	<li>Service de courriel pour les pourriels (ex: Hotmail)
Pour moi c'est là que je fait envoyer tout ce que je ne trouve pas important car je lis les courriels là qu'une fois par trois mois, environ)</li>
</ol>
Ensuite je m'assure que je peut avoir une connexion sécurisée (SSL... vous savez <strong>http<em>s</em></strong>) sur tout les moyens que j'utilise pour m'y connecter.

<strong>La manière que je me connecte au service</strong>
<ol>
	<li>via mon iPhone (une application) par 3G ou WiFi public ou non</li>
	<li>via une autre application que je ne fait pas nécessairement confiance</li>
	<li>via une connexion sécurisée ou non.</li>
</ol>
Vous pouvez-donc imaginer que selon la manière que je me connecte au service et son importance je sais pertinemment que mon schéma le plus complexe ne sera pas pour mon compte Facebook sur mon iPhone.
<h2>Sécuriser ses mots de passe</h2>
Comme je disais, je recommande d'avoir environ 5 mots de passe que vous catégorisez selon son importance.

A considérer lorsqu'on crée un mot de passe:
<ul>
	<li>Non basé sur des mots de dictionnaire</li>
	<li>Une version rapetissée d'une phrase</li>
	<li>Avoir des caractères spéciaux (!@#$%?&amp;)
(vous pouvez même faire ceux avec ALT si vous vous connectez toujours au service sur un ordinateur de bureau avec pavé numérique, voir <a href="http://pagesperso-orange.fr/jean-louis.pierre/code_ascii_avec_le_bouton_Alt.html">cette table qui dit comment faire</a>)</li>
	<li>Jouer avec la CasSe</li>
</ul>
<strong>Un mot de passe standard</strong>

Un concept pourrait être de faire un jeu d'association avec le site.

Exemple: Digg. Le premier mot qui te viendrait serait creuser, puis un truc qui te frappe quand tu va sur le site, disons son utilité, "mashup d'information".

On aurait donc les mots "Creuser" + "Mashup" + "information"; Remplacer aléatoirement... Cr3&amp;mA*ion... ouf, ça ressemble a crémation (ça pas rapport aux pompes funèbre ce mot là?).

Anyway c'est plaisant, ca peut faire un autre mot alors ça peut nous aider.

Ensuite, tu peut décider de remplacer ton "Cr3&amp;m4*i0n" eh voilà!

<strong>Un mot de passe plus complexe</strong>

Avec un peu le même concept que ci-haut, j'ajoute un autre caractère spécial et un sous-mot qui sert a changer le mot de passe. On y ajoute le caractère spécial ajouté "?"

Donnerait: "Cr3&amp;?m4*i0n"

Exemple: PayPal avec le concept ci-haut mentionné.

J'ajoute en plus le jeu de CasSe pour la deuxième lettre du sous-mot (disons 4 lettres) relatif au site.

PayPal deviendrait donc: pAyp

Donnerait: Cr3&amp;<strong>pAyp</strong>?m4*ion

Desjardins: dEsj

Donnerait: Cr3&amp;<strong>dEsj</strong>?m4*ion
<h2>Votre avis</h2>
Partagez avec nous vos trus de sécurité. D'ici peu je parlerai d'une méthode alternative d'authentification a Multiple-Facteurs sans utiliser nécessairement le concept du SecureID de Verisign.
<h2>Références</h2>
<ul>
	<li><a name="one"></a>Sotirov, Alexander; Marc Stevens, Jacob Appelbaum, Arjen Lenstra, David Molnar, Dag Arne Osvik, Benne de Weger (2008-12-30). "<a href="http://www.win.tue.nl/hashclash/rogue-ca/">MD5 considered harmful today</a>". . Retrieved 2008-12-30.  Announced at the 25th <a href="http://events.ccc.de/congress/2008/Fahrplan/events/3023.en.html">Chaos Communication Congress</a>. sur <a href="http://en.wikipedia.org/wiki/MD5#cite_note-sslHarmful-4">Wikipedia</a></li>
	<li><a name="two"></a>Security now! with <a href="http://en.wikipedia.org/wiki/Steve_Gibson_%28computer_programmer%29">Steve Gibson</a> and <a href="http://fr.wikipedia.org/wiki/Leo_Laporte">Leo Laporte</a> episodes #4, #98, #115, #117</li>
</ul>
