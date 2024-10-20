---
locale: fr-CA
title: >-
  Procédure pour avoir un environnement de dévelopement local facile à
  configurer avec Apache
canonical: >-
  https://renoirboulanger.com/blog/2013/05/procedure-environnement-developement-local-facile-a-entretenir-avec-apache/
status: publish
revising: true
createdAt: '2013-05-23'
updatedAt: '2013-05-24'
tags:
  - best-practices
  - favourites
  - linux
  - php
  - techniques
  - tutoriels
categories:
  - projets
excerpt: >-
  Mon environment de développement est sous Linux depuis plusieurs années. Avec
  le temps j'ai traîné dans mes portails privé de documentation cette procédure.
  Elle utilise des variables utilisés dans l'URL qui pointe vers votre hôte
  local de votre espace de travail où l'on peut héberger les fichiers de
  travail. Tout ceci, sans avoir à configurer pour chaque projet client.
---

<p>Je ne sais pour vous, mais je ne peut plus programmer sans avoir l'environement serveur localement sur ma machine. Changer ou ajouter un fichier <code>VirtualHost</code> pour chaque nouveau projet est assez répétitif. Il doit y avoir une façon automatique de le faire?</p>

<p>Oui.</p>

<p>Ça s'appelle <code>VirtualDocumentRoot</code></p>

<p>J'ai ce tutoriel qui traîne dans mon Wiki personnel depuis des lustres, et c'est maintenant que je commence a migrer mes projets sous NGINX que je décide de le mettre en ligne. Il n'est jamais trop tard pour publier.</p>

<p>Cette méthode de configuration répond exactement au besoin précis de ne pas avoir a configurer un hôte virtuel apache pour chaque projet.</p>

<blockquote>
  <p>Avec cette procédure, vous n'aurez qu'a maintenir votre fichier <code>hosts</code>, le reste suivra tout seul.</p>
</blockquote>

<p>Vous pouvez appliquer cette technique avec n'importe quelle version du serveur http "Apache". Cette procédure peut même être faite si vous développez sous Windows ou Mac OS avec les distributions du serveur HTTP Apache sous Windows telles que MAMP, XAMPP, et EasyPHP.</p>

<p>Pourtant avec un serveur web local, ce type de configuration est possible depuis longtemps, il faut simplement savoir comment ça s'appelle: <code>VirtualDocumentRoot</code>.</p>

<p>Voici comment je configure mon environnement LAMP depuis quelques temps.</p>

<!-- more -->

<h2>Procédure</h2>

<h3>Établissement du standard</h3>

<p>Tout commence par une certaine convention. Avec celle-ci, tout devrait suivre automatiquement.</p>

<p>L'idée est de pouvoir accéder a un l'espace de travail du projet A du client B sur ma machine locale. L'adresse locale n'est plus <code>localhost</code>, mais quelque chose de plus explicite.</p>

<blockquote>
  <p>Ce que j'apprécie le plus de cette méthode car elle permet de conserver dans un dossier parent tout ce qui est spécifique pour le projet et le client. Le code a exécuter qui soit dans un sous-dossier ne feait que du sens.</p>
</blockquote>

<p>Par exemple, un projet appelé <code>projectname</code> du client <code>client</code> serait classé dans un dossier sous le chemin <code>/home/renoirb/workspace/client/projectname</code>.</p>

<p>Le code du projet web serait accessible via le serveur web à l'adresse <code>http://projectname.client.dev/</code> qui pointe vers l'adresse IP de la station de travail locale.</p>

<h3>L'espace de travail du projet</h3>

<blockquote>
  <p><strong>IMPORTANT</strong>
  Il faut que les noms de dossiers <em>soient en minuscule</em> et <em>aucun espace</em>, ni <em>caractères accentués</em>, sinon le serveur Apache risque de ne pas trouver le dossier. Principalement parce que l'adresse entrée dans le navigateur est convertie en bas de case, et que généralement un <em>système d'exploitation qui se respecte</em> fait une différence entre, par exemple 'Allo' et 'allo'.</p>
</blockquote>

<p>La convention suggérée va comme suit:</p>

<ul>
<li>chaque projet est classé dans un chemin prévisible, similaire à <code>/home/renoirb/workspace/client/projectname</code></li>
<li>le projet a un dossier <code>web/</code></li>
<li>les autres dossiers au même niveau que <code>web/</code> peuvent être n'importe quoi d'autre.</li>
</ul>

<p>Idéalement, la logique applicative ne devrait pas être visible publiquement de toute façon. Seulement le fichier principal appelle l'"autoloader" en dehors du <em>DocumentRoot</em>.</p>

<p>De cette façon le vous pouvez classer tout vos projets du même client, et séparer par projets.</p>

<p><em>La procédure tient aussi en compte</em>
* L'utilisateur courrant puisse écrire dans son dossier <code>workspace/</code> avec Apache2 comme s'il était son propre utilisateur avec <code>mpm-itk</code>
* Le nom de domaine utilisé définit dans quel dossier de l'utilisateur chercher</p>

<h3>Procédure</h3>

<ul>
<li>Assurer que les modules sont chargés</li>
</ul>

<pre><code>     sudo a2enmod vhost_alias
</code></pre>

<ul>
<li>Ajouter le fichier default a la config de apache</li>
</ul>

<pre><code>     sudo vi /etc/apache2/ports.conf
</code></pre>

<ul>
<li>Vérifier qu'il y a ceci:</li>
</ul>

<pre><code>    NameVirtualHost *:80 
    Listen 80 
    UseCanonicalName Off
</code></pre>

<ul>
<li>Modifier le fichier de config du VirtualHost par défaut</li>
<li>Fichier de configuration par magique</li>
</ul>

<pre><code>    sudo vi /etc/apache2/sites-available/default
</code></pre>

<ul>
<li>Verifier qu'il y a ce bloc dans <code>&lt;VirtualHost ...&gt;</code>:</li>
</ul>

<pre><code>    &lt;IfModule mpm_itk_module&gt;
        AssignUserId renoirb users
    &lt;/IfModule&gt;
</code></pre>

<ul>
<li>Remplacer la mention <code>DocumentRoot</code> par ce format:</li>
</ul>

<pre><code>    VirtualDocumentRoot /home/renoirb/workspaces/%1/%0/web
</code></pre>

<h2>Sources</h2>

<ul>
<li>Apache 2.2 documentation on <a href="http://httpd.apache.org/docs/2.2/mod/mod_vhost_alias.html">vhost_alias</a></li>
<li>J'attribue le crédit a mon ex-associé <a href="http://stephanchampagne.com">Stephan Champagne</a>, qui a trouvé la méthode et qui me l'a enseignée.</li>
<li><a href="http://groups.drupal.org/node/6266">How To Setup an Ubuntu LAMP Server for Development Purposes Only on Drupal groups</a></li>
<li><a href="http://serverfault.com/questions/278406/apache2-automatic-subdomains">ServerFault "Apache2 automatic Subdomains" thread</a></li>
</ul>