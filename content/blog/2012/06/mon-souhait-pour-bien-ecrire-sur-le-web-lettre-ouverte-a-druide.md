---
locale: fr-CA
title: 'Mon souhait pour bien écrire sur le web: Lettre ouverte à Druide'
canonical: >-
  https://renoirboulanger.com/blog/2012/06/mon-souhait-pour-bien-ecrire-sur-le-web-lettre-ouverte-a-druide/
status: publish
revising: true
createdAt: '2012-06-28'
updatedAt: '2013-03-31'
tags:
  - outils
  - web
categories:
  - technologies
excerpt: >-
  J'ai écrit ce courriel à l'éditeur de logiciel de correction grammaticale
  Druide, parce que je souhaite améliorer la qualité de mon français sur mon
  site. Si vous trouvez un outil de la sorte, veuillez me contacter.
---

Bonjour

Je suis un développeur web et je regarde sur le web s'il existe un service qui me permettrait de faire valider mon texte. Plusieurs gens dans le monde du marketing ne jurent que par vos produits. Mais je ne vois pas d'offre de la sorte autre que WebElixir.

Selon moi, plusieurs développeurs web aimeraient avoir accès a votre service pour ajouter votre outil au processus d'édition leur contenus.

De façon interactive.
<h3>Mon point de vue</h3>
J'aimerai pouvoir avoir un accès a un service REST avec token OAuth pour envoyer mon texte, et le recevoir révisé.

Je suis un développeur PHP qui utilise Symfony2 et ce qui suit est basé sur les outils que j'utilise en PHP.  Soyez assuré qu'il existe une alternative pour les autres langages du web tel que le .NET, Python et Ruby car les concepts que j'apporte ici sont monnaie courrante d'une technologie web à l'autre.
<h3>Potentiel</h3>
<p>
<ul>
	<li>pouvoir avoir une aide directement dans une fenêtre d'édition de l'administration d'un site géré par WordPress (l'un des CMS les plus utilisés au monde).</li>
	<li>Outil de publication de Tweet avec vérification de syntaxe pour widget de portail d'entreprise</li>
	<li>Décentraliser l'architecture (WebElixir à sûrement un API via http?)</li>
	<li>Outil allégé pour téléphones intelligents (seulement supporter le pastebin qui sert d'entrée de texte)</li>
	<li>Connectivité aux API de iOS, et Android</li>
	<li>Les services web sont offerts pour presque tout (<a href="https://dev.twitter.com//" target="_blank">Twitter</a>, <a href="http://developers.facebook.com/" target="_blank">Facebook</a>, <a href="http://dev.evernote.com/" target="_blank">Evernote</a>, Solr (Lucene, index de recherche),  et <a href="http://www.programmableweb.com/" target="_blank">beaucoup d'autres</a>)</li>
</ul>
</p>

<h3>Ébauche préliminaire d'une solution</h3>

<p>
<ul>
	<li>Il y a déjà les technologies de consommation (PHP Guzzle, PHP Buzz, et de validation d'identité (OAuth))</li>
	<li>Format de transfert de donnée avec représentation REST  (ex:  POST <a href="http://api.druide.com/webelixir/v1/grammar.json/token/33333333333333333" target="_blank">api.druide.com/webelixir/v1/grammar.json/token/33333333333333333</a> { texte a valider } )</li>
	<li>Format convertible XML/JSON</li>
</ul>
</p>
<p>&nbsp;</p>
<p>Avez-vous de quoi de similaire? (Autre que WebElixir?)</p>
<p>&nbsp;</p>

<p>Merci de m'avoir lu.</p>

<hr />

<h3>Réponse reçue de <em>Druide Informatique</em></h3>

<p>Bonjour Monsieur Renoir,</p>

<p>Nous n'avons rien de similaire à ce que vous mentionnez dans votre message, ni d'API pour développer sur la base de WebElixir.</p>

<p>Toutefois, nous vous remercions de votre commentaire. Au fil du temps, nos produits ne cessent de s'améliorer, et ce sont en grande partie les remarques et suggestions de ses utilisateurs qui orientent notre travail.</p>

<p>Les commentaires comme le vôtre sont dument notés et font tous l'objet d'une analyse diligente. Il est ainsi possible que l'amélioration que vous suggérez, ainsi que plusieurs autres, fasse un jour partie d'une version ou d'une édition future d'Antidote ou de WebElixir.</p>

<p>Nos salutations les plus sincères.</p>

<p>(...)</p>