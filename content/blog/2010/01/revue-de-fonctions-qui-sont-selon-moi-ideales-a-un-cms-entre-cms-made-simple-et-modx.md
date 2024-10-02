---
locale: fr-CA
title: >-
  Revue de fonctions qui sont, selon-moi, idéales a un CMS entre CMS Made Simple
  et MODx
canonical: >-
  https://renoirboulanger.com/blog/2010/01/revue-de-fonctions-qui-sont-selon-moi-ideales-a-un-cms-entre-cms-made-simple-et-modx/
status: publish
revising: true
created: '2010-01-12'
updated: '2013-03-27'
tags: []
categories: []
excerpt: ''
---

<div style="width:430px;float:right;"><img src="http://renoirboulanger.com/wp-content/uploads/2010/01/cmsmslogo.gif" alt="" title="CMS Made Simple" width="174" height="78" style="border:1px solid #888;float:right;" /><img src="http://renoirboulanger.com/wp-content/uploads/2010/01/modx_logo.png" alt="" title="MODx" width="230" height="64" style="border:none;float:right;margin-top:10px;margin-right:10px;" /></div><p>C'est en cherchant ce que j'ai publié sur le web dans les dernières années que je suis tombé sur un envoi que j'ai fait sur la liste AccessTech de <a href="http://www.netaccessible.com/">NetAccessible</a>. Un lecteur avait demandé si CMSMS (CMS Made Simple) était si "simple".</p>

<p><ins>a mon avis, <strong>CMS Made Simple n'est pas idéal</strong>. Mais j'ai pensé le re-publier ici quand même, pour les biens de la postérité. Vous remarquerez que ce qui est ajouté est dans des balises &lt;INS&gt;. Ce message a été rédigé en 2008 et il est possible que CMS Made Simple ait changé.</ins></p>

<p><ins>J'avoue d'emblée et je suis conscient que je n'ai pas passé au travers de ses fonctions car j'ai passé déjà beaucoup de temps sur des sites web dans les dernières années et j'ai passé a autre chose.</ins></p>
<p>&nbsp;</p>

<h3>Revue très légère de CMS Made Simple</h3>
<p>A mon avis, quand on dit "simple" dans le nom. J'ai une certaine réticence. <ins>C'est presque comme une insulte à l'intelligence du webmestre.</ins>.</p><p>

</p><p>J'ai fouillé un peu sur le sujet avant de le discréditer. A ce que j'ai vu, CMSMS utilise <a href="http://www.smarty.net/">Smarty</a> <ins>(un engin de templating open-source)</ins> alors deux logiciels open-source devraient avoir un bon résultat à mon avis. </p><p>

<!--more-->

</p><p>Mais lorsqu'on doit utiliser des tags du genre:
<pre lang="php"><h4>< ?php    echo 'Hello ' . $params['name'] . '!';    ?></h4></pre></p><p>

</p><p>Dans du contenu... ca manque de paufinement. Remarquez que j'ai mis que quelques minutes pour lire. Je ne connait pas tout le produit.</p>

<p><ins>C'est que l'engin de template est absent car, dans cet exemple, il s'agit de simple PHP dans un tableau (Array) appelé <tt>$params</tt>. Faut dire que je n'ai pris qu'un exemple dans la mêlée et que en cherchant un peu j'ai trouvé des exemples qui font plus de sens que ce dernier. Si je me fie a la <a href="http://wiki.cmsmadesimple.org/index.php/User_Handbook/Getting_Started/Designer/Templates/fr">documentation ici</a> il y a quand même beaucoup de fonctions similaires a celles de MODx, ma référence.</ins></p>
<p>&nbsp;</p>

<h3>Il y a mieux<strong>, Selon moi!</strong>... <strong>MODx</strong></h3>
<p>J'ai beaucoup d'expérience dans les CMS car j'ai moi même entretenu mon propre CMS avec mon ancienne entreprise (4 ans de travail). Je l'ai vendu a mon employeur, et ils me l'on fait mettre de coté. Question de voir s'il y a mieux.

</p><p>J'ai trouvé mieux, a mon avis!</p>

<p>J'ai trouvé le site <a href="http://www.cmsmatrix.org/">CMS Matrix</a> <ins>qui semble compiler un bel effort de comparaison de fonctions d'un CMS à l'autre</ins> et j'ai voulu comparer les fonctions que je voulait entre plusieurs reconnus. J'ai, au préalable ciblé. J'en suis venu a un choix qui tournait autour de (en ordre)</p>

<ul>
   <li><a href="http://typo3.org/">Typo3</a></li>
   <li><a href="http://www.typolight.org/">TypoLight</a></li>
   <li><a href="http://modxcms.com/">MODx</a></li>
</ul>

<p>J'ai choisi <a href="http://modxcms.com/"><strong>MODx</strong></a> car il avait un principe que j'aime beaucoup.</p>

<ul>
   <li>Il est un framework de gestion de contenu (!!) <ins>On peut donc utiliser un <tt>API</tt> et «jongler» avec le contenu en PHP</ins></li>
   <li>Il laisse les éditeur faire leur contenu sans html (aucune "wizarderie"... je vous l'assure)</li>
   <li>Les pires mots a voir serait du type {{patente}} (un Chunk), [[Gadget]] (un Snippet)... des trucs qui sont évident qui ont un usage</li>
   <li>Il permet de dissocier totalement le contenu de la gestion</li>
   <li>Peut cacher le contenu</li>
</ul>

<p>En gros, il y a</p>

<ul>
   <li>Les plugins (ce qui est exécuté a des moments clé que l'on peut "triggerer" <ins>dans la vie d'une page. Exemple: au "page save", au "page pre-render"... il y a plus d'une vingtaine de "triggers" configurés</ins>)</li>
   <li>Les Snippets (cachable, ou non, avec des parametres... peut être vu comme une "fonction" PHP)</li>
   <li>Les Chunks (bout de code html, qu'on peut utiliser pour les répétitions, et meme appeler des Snippets)</li>
   <li>Templates (c'est ce que ca dit. On peut appeler des Snippets (cachable ou non) et des Chunks)</li>
   <li>Template variables (pour ajouter des extensions spécifiques)</li>
   <li>Documents... (peut envoyer le content-type qu'on veut, associer un template (meme empty), etc)</li>
</ul>

<p>Bref... c'est le cms que j'ai toujours voulu. Espérance que mon choix techno vous ait inspiré autant qu'il m'a inspiré!</p>

<p>Coté accessibilité.... a mon avis, c'est le programmeur qui rend accessible son code. Rarement l'outil. L'outil,doit, quant a lui, aider a faire ce qu'il faut.</p>

<p>MODx le fait a merveille!</p>

<p><ins>Fin du courriel envoyé a NetAccessible</ins></p>
<p>&nbsp;</p>

<h3>J'ai été publié</h3>
<p>Lorsque j'ai terminé le site de TechSolCom (billet pas encore publié dans mon blogue) j'ai fait application au <em>Showcase</em> du site de MODx. Voici la <a href="http://modxcms.com/learn/showcase/site.html?site=29">page que j'ai rédigée</a>.</p>
<p>&nbsp;</p>

<h3>Votre opinion</h3>
<p>Si vous avez d'autres revues vous pouvez les ajouter en commentaire.</p>