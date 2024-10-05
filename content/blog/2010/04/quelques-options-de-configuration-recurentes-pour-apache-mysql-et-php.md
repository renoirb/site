---
locale: fr-CA
title: Quelques options de configuration récurentes pour Apache, MySQL et PHP
canonical: >-
  https://renoirboulanger.com/blog/2010/04/quelques-options-de-configuration-recurentes-pour-apache-mysql-et-php/
status: publish
revising: true
caracteresBizzares: true
created: '2010-04-22'
updated: '2013-03-27'
tags: []
categories: []
excerpt: ''
---

<img class="alignnone size-full wp-image-2143" style="border: none; float: right;" title="Apache Logo" src="http://renoirboulanger.com/wp-content/uploads/2010/04/apache_logo.png" alt="Apache" width="200" height="178" />J'était en train de configurer pour la ènième fois un des serveurs avec lequel je travaille et je réalise que je passe mon temps pour chercher comment configurer.

J'ai pensé vous fournir mes switch préférés.
<h3>Sortir les options du <tt>.htaccess</tt></h3>
Il est recommandé d'utiliser un pannel pour les configurations. Question de sécurité, permettre a tout le monde de modifier le serveur apache par un .htaccess, c'est dangeureux. Alors, j'ai mis la syntaxe pour l'ajouter au bloc du <tt>&lt;VirtualHost/&gt;</tt> directement.

Sous <strong>ISPConfig</strong> Simplement aller dans "Sites", choisir un domaine, puis "Options".
<!--more-->
<h3>Configurations</h3>
<h4>Redirect de tout les domaines</h4>
Ça permet d'éviter d'avoir l'indexation sur n'importequel domaine que celui voulu. Personnellement je n'aime pas les domaines www.truc.com car ça rallonge. Mais beaucoup de monde utilise encore cette syntaxe... alors j'utilise un bloc <tt>mod_rewrite</tt>

<tt></tt>

<tt>
<pre lang="virtualhost">RewriteEngine On
RewriteCond %{HTTP_HOST} !^renoirboulanger\.com
RewriteRule ^/(.*)         http://renoirboulanger.com/$1 [R=301]</pre>
<h4>Encoding UTF-8 pour tous!!</h4>
Vous savez les "é" et "√ä" caractères nuisibles, souvent dus au fait que soit; la base de donnée communique <em>pas</em> dans le même <em>Character Encoding</em> que ce que Apache donne comme document... et le document-type du html. Trois sources d'erreur. Plein de combinaisons possibles!
<h5>Apache</h5>
</tt>

<tt>Ajouter au bloc </tt>&lt;VirtualHost/&gt; du site.
<pre lang="virtualhost">AddDefaultCharset utf-8</pre>
<h5>MySQL</h5>
Généralement (Debian et Ubuntu) dans "<tt>/etc/mysql/my.cnf</tt>"
<pre lang="bash">[mysqld]
default-character-set=utf8
~
[mysql]
default-character-set=utf8</pre>
<h4>Augumenter la mémoire PHP</h4>
Parceque WordPress semble partir des fois en balloune... j'aime mieux le configurer dans le bloc <tt>&lt;VirtualHost/&gt;</tt> par site qui vit ce problème.
{code:title=Dans ISPConfig, Sites, sitename, Options}
php_value memory_limit 56M
{code}