---
title: HHVM et Hack; ce qui les distingue de PHP
locale: fr-CA
created: 2015-02-03
updated: 2023-11-16
canonical: >-
  https://renoirboulanger.com/blog/2015/02/hhvm-et-hack-ce-qui-les-distingue-de-php/
status: publish
revising: true
categories:
  - tranche-de-vie
tags:
  - logiciel-libre
excerpt: >-
  C’est une réécriture complète de PHP, qui a apporté aussi une syntaxe qui
  permet d’annoter les signatures des arguments d’entrée et de sortie, et plus.
---

<ol>
<li>Il y a <a href="https://wiki.php.net/phpng">php-ng</a> qui est une réécriture par la communauté</li>
<li>celle refaite par Facebook (<a href="https://github.com/facebook/hhvm">HHVM</a> et <a href="http://hacklang.org/">Hack</a>) pour optimiser la performance</p></li>
</ol>

<p>PHP, comme Python, stockent en quelque part une version qu’elle seule comprendra (a.k.a. bytecode) et réutilise cette version.  En Python tu va voir des fichiers ".pyc" dans le même dossier que l’original ".py".  Pour PHP, c’est ailleurs. Parfois ça peut être dans APC ou d’autres composantes.</p>

<p>PHP est comme un noyau Linux. Il y a un core, et des modules à coté. C’est ce que PECL est en fait. Une librairie d’extensions PHP en C.</p>

<p>Donc, ce que Facebook a fait c’est de réécrire pour enlever ce qui ralentit l’exécution et utiliser des concepts différents de ce que PHP fait en ce moment.</p>

<p>Il y a quelques incompatibilités avec PHP, <a href="http://docs.hhvm.com/manual/en/hack.unsupported.php">mais c’est pas impossible à utiliser</a>.  Pour te dire c’est possible d’utiliser maintenant, pour preuve la Wikimedia Foundation (wikipedia.org) l’utilise déja dans ses datacenters et <a href="https://www.mediawiki.org/wiki/MediaWiki-Vagrant">leur VM de développement «Vagrant» l’utilise aussi</a>.</p>

<p>L’une des différences avec PHP avec Hack (a.k.a. XHP) est la possibilité d’intégrer directement du XML dans le code. Sans fermer les balises</p>

<p>Donc, pas...</p>

<pre><code>&lt;xml&gt;&lt;?php /* ... */ ?&gt;&lt;/xml&gt;
</code></pre>

<p>... ni...</p>

<pre><code>&lt;?php   $foo = "&lt;xml attrib="value" /&gt;"; echo $foo; ?&gt;
</code></pre>

<p>Mais plutôt...</p>

<pre><code>&lt;?hh
$foo = &lt;bootstrap:page-header title={$title} /&gt;;
</code></pre>

<p>Étrange non?</p>

<p>Note le <code>&lt;?hh</code> et qu’il n’y a besoin de faire une string qui ressemble a du XML.</p>

<p>Ce qui fait ça c’est la partie appelés XHP de Hack, qui fait partie de HHVM. L’exemple que je donne ici <a href="https://github.com/hhvm/xhp-bootstrap/">provient de  XHP Bootstrap</a> qui permet d’utiliser les patterns <a href="http://getbootstrap.com/">HTML/CSS provenant de la librairie connue sous le nom de Twitter Bootstrap</a>.</p>

<p><strong>XHP</strong> est donc un «layer» qui permet d’abstraire les patterns HTML dans le code backend... mais de préciser quand même où ils sont requis.</p>
