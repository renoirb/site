---
locale: fr-CA
title: Ma critique sur l'intégration du site a25.com
canonical: >-
  https://renoirboulanger.com/blog/2012/08/ma-critique-sur-lintegration-du-site-a25-com/
status: publish
revising: true
created: '2012-08-28'
updated: '2023-11-18'
tags: []
categories: []
excerpt: >-
  Cet article est un premier d'une série de plusieurs où je propose mes
  commentaires constructifs pour informer et partager des concepts et bonnes
  pratiques en intégration web qu'un site pourrait prendre avantage.
---

<p>Dans la série "Revue de code en Intégration web" qui se veut une série de remarques pour améliorer le résultat final du site je commence avec ce premier site.</p>

<p>Le site <a href="https://a25.com/">a25.com</a> est un service web qui sert a amasser les paiements dus pour l'usage du pont de l'Autoroute 25. Une caméra capture les plaques d'immatriculation et envoit une enveloppe réclamant son dû.</p>

<p>&nbsp;</p>

<p>Quoi que très fonctionnel comme service, j'ai pas pu m'empêcher de regarder le code HTML envoyé aux visiteurs et remarquer ces détails.</p>

<p>Ce qui m'a frappé et incité a faire ces remarques est la mention "<em>Optimisé pour Internet Explorer</em>". J'ai tout de suite eu un flashback des années 2000.</p>

<p>&nbsp;</p>

<h3>Mes observations</h3>

<p><strong>Remarque</strong> Je suis conscient que la réalisation du site a pu être fait a la sauvette et qu'il y a peut être eu à faire plusieurs coins ronds, c'est malheureusement monaie courrante dans l'industrie du web. Le choix technologique imposé par la politique plutôt que l'expérience de celui réalisant le site peut aussi affecter la qualité. Pour contre-carrer les argumentaires vides, pourquoi ne pas s'armer en explications. Le but est constructif après tout :)</p>

<p>&nbsp;</p>

<h4>Annonce pour support spécifique <em>Internet Explorer</em></h4>

<p>Nous sommes en 2012. Le HTML5 est supporté et possible depuis 2009... même sous IE6.</p>

<p>Les conventions de navigation et la <strong>fonte du contenu</strong> par défaut est beaucoup trop petite, plus petite que la moyenne des sites</p>

<blockquote class="twitter-tweet tw-align-center"><p>Hé <a href="https://a25.com" title="https://a25.com">a25.com</a> 2002 called, they want their "Optimized for Internet Explorer" quote back. <a href="https://twitter.com/search/?q=%23W3C"><s>#</s><b>W3C</b></a> <a href="https://twitter.com/search/?q=%23standards"><s>#</s><b>standards</b></a></p>&mdash; Renoir Boulanger (@renoirb) <a href="https://twitter.com/renoirb/status/240557073270722561" data-datetime="2012-08-28T21:10:50+00:00">August 28, 2012</a></blockquote>

<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p>&nbsp;</p>

<h3>Données tableau en image</h3>

<p>Votre <a href="https://www.a25.com/#tarif"><strong>page tarifs</strong></a> donne des <strong>données tabulaire en image</strong></p>

<p>Quoi que très jolie image, des données alignées par des colones, un tableau est là pour ordonner des données par colones et rangées. La synthèse peut très mal se faire sur une image.</p>

<p>Je pourrai sortir l'argument de l'Accessibilité et vous allez me dire, un mal-voyant ne peut pas conduire. Peu importe. Une image c'est pour décorer.</p>

<p>&nbsp;</p>

<h3>Changement de pages en AJAX et URLs</h3>

<p>Les pages changent sous en AJAX (exemple <a href="https://a25.com/#joindre">#joindre</a> dans l'adresse) plutot qu'un URL unique par contenu avec adressage de langue au URL.</p>

<p>Si vous voulez réellement faire un changement à la AJAX, vous pouvez simplement capturer le clic sur certains liens (par usage d'une classe qui décrit le fonctionnement) puis un court bloc jQuery pourrait s'occuper de capturer le clic et changer le DOM via un <code>$.ajax</code></p>

<p>Le pire n'est pas que si votre visiteur n'utilise pas javascript pour des prétextes de sécurité. Mais aussi le SEO, vous perdez du contenu et ce sont pourtant des pages légitimes avec contenus qui vaudraient la peine d'être indexés et augumenteraient la qualité du point de vue SEO.</p>

<p>J'insiste sur ce fait car c'est du contenu référence. Un cas acceptable serait si ce serait du contenu en relation au temps (comme twitter par exemple) ou une vue spécifique a un utilisateur dans une application web.</p>

<p>&nbsp;</p>

<h3>Le SEO. Je l'ai dit</h3>

<p>D'accord, le SEO sert a optimiser la trouvabilité d'un document parmi plusieurs. Chaque partie d'un URI a son utilité. <a href="https://web.archive.org/web/20130827233642/https://rield.com/how-to/url-design"><em>Jonas Jacek</em> le décrit bien dans son billet à ce sujet</a>.</p>

<p>Je ne suis pas un expert du SEO, mais regardons plus loin que cet argument. peut etre la valeut du mot dans le URL ou simplement un mauvais usage detourné.</p>

<p>Un URI dans ses composantes represente chaque element a son role. e.g. <code>http://host/corps/du/uri?query=value#anchor</code> alors le document pour me contacter serait dans le corps du url.</p>

<p>Le #hash dans le URL est normalement la pour representer un anchor (partie) dans UN document (parmi plusieurs) pas une page complete. Le Javascript supporte le history avec le #hash. Mais encore. Il degrade sans JS. Cool.  Un hash est pour un anchor.</p>

<p>Pourquoi donc ne pas faire <code>&lt;div onclick="javascript:window.location=http://foo.bar/"&gt;Hola!&lt;/div&gt;?</code>. Parce que le &lt;a /&gt; sert a faire un lien. Meme chose pour un anchor.</p>

<p>&nbsp;</p>

<h3>Fichiers attachés utilisé pour toutes les "sauces"</h3>

<p>Vos <strong>fichiers attachés</strong> sont des <strong>fichiers PDF plutot que d'être vers d'autres pages</strong>, encore perte de contenu cohérent et un signe d'echec d'usage d'un site web (un PDF est bon sur le web pour des formulaires ou on nécécessite impression et signature)</p>

<p>Les<strong> fichiers attachés ont des noms sous forme de phrases avec caractères spéciaux</strong>, nous ne sommes plus a l'époque du <code>8.3</code> (exemple de nom à l'époque: <code>MONFIC~1.BMP</code>) mais quand même.</p>

<p>Un fichier avec un nom résumé de deux trois mots ne nuit pas. Investissez plutôt du temps sur les méta données avant conversion au PDF et éviter d'avoir une tonne de fichiers au titre "Document Microsoft Word".</p>

<p>&nbsp;</p>

<h3>CSS sur-spécifique avec utilisation de #ID inutile</h3>

<p>Les fichiers CSS et Javascript ne sont pas minifiés et/ou combinés, vous pourriez sauver du temps de chargement</p>

<p>Mais à mon opinion, la structure CSS démontre un certain manque de maîtrise de la structure en intégration de votre développeur web. Je ne suis pas parfait moi même, j'ai fait mon lot d'erreur, mais j'aimerai vous mettre au courrant qu'il y a beaucoup d'ouvrages et documentation sur les pratiques d'aujourd'hui que votre site pourrait profiter. La facilité de rendre votre site fonctionnel pour le mobile n'est qu'un parmi tant d'autres avantages.</p>

<p>Avez-vous déjà entendu parler de <a href="https://web.archive.org/web/20230307202104/http://oocss.org/" lang="en" title="Object-Oriented Cascading Style Sheet architecture">OOCSS</a>ou <a href="https://web.archive.org/web/20230919220609/https://smacss.com/" title="Scalable and Modular Architecture for Cascading Style Sheets" lang="en">SMACSS</a>?

<h3>Fin</h3>
</p>

<p>Voilà, c'est mon premier billet dans la série de "Revue de code en Intégration web". J'espère que vous trouverez inspirant</p>