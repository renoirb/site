---
locale: fr-CA
title: >-
  Astuce concernant le rafraîchissement du contenu des pages avec utilisation
  d'AJAX en exemple
canonical: >-
  https://renoirboulanger.com/blog/2013/04/astuce-concernant-le-rafraichissement-du-contenu-des-pages-avec-utilisation-dajax/
status: publish
revising: true
caption: false
caracteresBizzares: false
gallery: false
migrateCode: true
migrateImages: false
migrateLinks: false
created: '2013-04-12'
updated: '2013-05-24'
categories:
  - programmation
tags:
  - accessibility
  - javascript
description: >-
  Réponse donnée a une question concernant l'Accessibilité et le
  rafraichissement de contenu en utilisant les promise object AJAX de jQuery
  1.7+
title_alternate: Astuce concernant le rafraîchissement du contenu avec AJAX
excerpt: >-
  En ce qui concerne l'Accessibilité et l'AJAX, contrairement a ce que le WCAG1
  disait (éviter d'utiliser), le WCAG2 est maintenant plus flexible. Selon ma
  compréhension, voici ce que je pense est nécessaire pour que l'on puisse
  utiliser AJAX de façon accessible.
---

<p>Parmi les listes de courriels que je suis, <a href="http://listes.rezo.net/mailman/listinfo/accesstech" title="La liste accesstech est une liste de discussion francophone technique sur l'accessibilité.">Accesstech</a>, une question a attiré mon attention et j'ai pensé partager ici la réponse que j'ai donnée avec un exemple en appui.</p>

<blockquote>
  <p>Concernant le rafraîchissement du contenu des pages avec utilisation d'AJAX, a-t-on trouvé une solution pour
  qu'un lecteur d'écran le détecte et retourne l'information à l'utilisateur ?</p>

  <p>Si non, quelles solutions alternatives avez-vous trouvées ( en dehors de recharger la page intégralement) ?</p>
</blockquote>

<h3>Ce que j'ai répondu</h3>

<p>Je ne suis pas expert, mais je pense que ce qui arrive et modifie le DOM de façon asynchrone en regard de l'accessibilité, demande au minimum:</p>

<h4>1. Faire une ecriture en creeant les elements DOM, puis les inserer</h4>

<p>Avec jQuery, par exemple, il est possible de créer un élément DOM de cette façon. Mais attention, l'élément existe dans le document qu'au moment de son insertion via la commande <code>element.append()</code>.</p>

<pre><code>&lt;script&gt;
// dom ready...
var newNode = JQuery('&lt;div id=patate&gt;Allo&lt;/div&gt;');
&lt;/script&gt;
</code></pre>

<h4>2. Assurer de donner le focus sur le nouvel element inséré</h4>

<p>Une fois l'élément construit, il est possible d'ajouter des attributs et évidemment de l'introduire, comme suit:</p>

<pre><code>&lt;script&gt;
// ...
newNode.appendTo('body');
newNode.trigger('focus');
// ...
&lt;/script&gt;
</code></pre>

<p>Ici, l'élément est inséré à l'intérieur du <code>body</code>, puis un événement <code>focus</code> est appelé. Notez ici que <a href="http://api.jquery.com/trigger/" title="Trigger events using jQuery trigger() method">lancer un événement de cette façon</a> peut être fait pour a peu près n'importe quel type d'événement, on <a href="http://htmlcsstherightway.org/#creating_and_using_jquery_events_the_thing_i_wished_i_knew_before">peut même créer nos propres événements</a></p>

<h4>3. Bonus: Faire la muse a jour de façon Asynchrone avec jQuery 1.7+ avec le concept de 'promise':</h4>

<p>Étant donné la nature d'AJAX; dans le sens que la resource demandée n'est pas nécessairement disponible à l'exact moment où la requête est faite. jQuery a instauré un concept qui permet de travailler avec l'objet demandé, et agir au moment de son arrivée: <a href="http://api.jquery.com/jQuery.ajax/">promise</a>.</p>

<p>Dans ce sens, il est maintenant recommandé d'utiliser un callback et le déclarer a la fin de l'action ajax, comme suit:</p>

<pre><code>&lt;script&gt;
var promiseCallback = function(data){   jQuery('#patate').replaceWith(jQuery(data)).trigger('focus');   };
// assumant que c'est du html reçu de /allo.html
var configObj ={dataType: 'html'};
jQuery.ajax('/allo.html', configObj).done( promiseCallback );
&lt;/script&gt;
</code></pre>

<h3>Finalement</h3>

<p>Ce qui est souvent oublié c'est que <code>$.ajax.done()</code> est <strong>executé après</strong> avoir reçu ses donnees.</p>

<p>De cette facon, le refraichissement se fait quand elle est prete et le focus suivra.</p>

<p>Par-contre il y a des precautions a prendre: Assurez-vous que ce code est executé apres un action de l'utilisateur et non pas n'importe quand car l'evenement risque de deplacer le focus du lecteur d'ecran et perdre l'utilisateur.</p>

<p>Espérant que j'ai connecté quelques fils :)</p>
