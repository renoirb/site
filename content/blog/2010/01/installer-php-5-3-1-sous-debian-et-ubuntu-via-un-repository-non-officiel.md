---
title: Installer PHP 5.3.1 sous Debian et/ou Ubuntu via un repository non officiel
locale: fr-CA
createdAt: 2010-01-09
updatedAt: 2013-03-27
canonical: >-
  https://renoirboulanger.com/blog/2010/01/installer-php-5-3-1-sous-debian-et-ubuntu-via-un-repository-non-officiel/
status: publish
revising: true
categories:
  - tranche-de-vie
tags:
  - php
excerpt: ''
---

<p>Hier, j'étais en train d’expérimenter avec des appels SOAP pour préparer un projet et j'ai réalisé que ma version compilée de php 5.3.0 était défectueuse. </p><p>

</p><p>Je dis que mon installation est défectueuse car lorsque j'instantiait <tt>$client = new Zend_Soap_Client;</tt> plus rien ne répondait. Même aller en <tt>error_reporting(E_ALL);</tt> et tout ce qui est imaginable. C'est après quelques heures a tourner en rond je me suis dit que si même <tt>$client = new SoapClient;</tt> avec un résultat du genre "Class does not exists". C'est le PHP... pas le code ou le Framework. Pas de doute.</p>

<p>J'ai donc pensé recompiler la <em>dernière version</em> <strong>PHP 5.3.1</strong> qui est considérée stable... quant à recompiler, autant mettre à jour sur la <em>dernière</em> version!</p>

<p>Ce billet vous permettra d'installer la version stable <em>PHP 5.3.1</em> a partir d'un repository déjà configuré au lieu de le compiler.</p>
<p>&nbsp;</p>
<!--more-->

<h3>Tournage en rond avant d'en arriver là</h3>
<p>J'ai souvent entendu l'adage qui veut qu'on ne devrait pas installer un logiciel a sa première version majeure. On peut faire le parallèle avec les automobiles. Il y a des coins ronds qui doivent être réparés. La version 5.3.1 est justement la correction de plus de 100 bugs.</p>
<p>&nbsp;</p>

<h3>Quelques corrections dans PHP 5.3.1</h3>
<ul>
  <li>Ajouté "max_file_uploads" dans la configuration INI qui peut etre là pour éviter la quantité de fichiers téléversés a 20 par défaut. Ainsi éviter un tentative d'attaque <abbr title="Denial of Service" lang="en">DOS</abbr></li>
  <li>Ajouté des vérification de validité sur le moteur <tt>exif</tt></li>
  <li>Corrigé le "<tt>safe_mode</tt>" dans <tt>tempnam()</tt></li>
  <li>Corrigé <tt>open_basedir</tt> dans <tt>posix_mkfifo()</tt></li>
  <li>Corrigé la fonction brisée <tt>safe_mode_include_dir</tt></li>
</ul>
<p>Voir le "<a href="http://www.php.net/ChangeLog-5.php#5.3.1">ChangeLog (anglais)</a>" et son "<a href="http://www.php.net/releases/5_3_1.php">release announcement (anglais)</a>"</p>
<p>&nbsp;</p>

<h3>Ma station de travail</h3>
<p>Ma station de travail secondaire est en Ubuntu 8.10 sur mon vieux portable. J'avait compilé la version 5.3.0 il y a plusieurs mois (dès sa sortie) pour pouvoir jouer avec les nouvelles fonctions.</p>

<p>La version disponible en auto-installation sur Ubuntu est encore sur du PHP 5.2.x ce qui est innacceptable pour mes projets. J'avait même fait ma ligne <tt>configure</tt> et j'avait commencé a compiler la nouvelle version. C'est là que je me suis dit que j'était pas le premier a vouloir une version plus récente de PHP.</p>
<p>&nbsp;</p>
<!--more-->

<h3>Installer <strong>PHP 5.3.1</strong> sous Ubuntu Linux</h3>
<div style="background-color:#FFFEEB;border:1px solid #666600;margin:5px 0px;padding:18px 8px 8px 50px;">
<h4>Mise à jour</h4>
<p>Nous avons fait la migration de notre serveur d'hébergement public vers cette version de PHP 5.3.1 en suivant cette procédure. J'ai ajusté le tutoriel.</p>
<p>LE CHANGEMENT: Utiliser <tt><strong>aptitude</strong></tt> au lieu de <tt><strong>apt-get</strong></tt></p>
</div>

<p>C'est pas une version officielle selon Debian ou Ubuntu car jusqu'en mi-2010 sur la release <tt>Squeeze</tt> de Debian c'est comme ça.</p>

<div style="background:#ececec;margin:5px 0px;padding:18px 8px 8px 50px;border:1px solid #333"><h4 style="color:#777;margin-bottom:10px;">AVERTISSEMENT</h4>Il s'agit d'une version compilée par une source extérieure de Debian ou Ubuntu maintenaue par <a href="http://www.dotdeb.org/">Dotdeb</a>. Cette partie du tutoriel est largement inspirée (traduction quaisi verbatim) du <a href="http://www.dotdeb.org/2009/11/30/php-5-3-1-packages-for-debian-lenny-theyre-here/">billet suivant</a>.</div>



<p>Comparé a la version Debian, la version <em>Dotdeb</em> a ces changements</p>
<ul>
   <li>Les <tt>.deb</tt> ont le patch Suhosin appliqué par défaut</li>
   <li>mis a part <tt>apache2</tt>, <tt>apache2filter</tt>, <tt>CGI</tt>, et le <tt>CLI</tt> (pour la ligne de commande), le module <tt>FPM</tt> utilise la version custom [de <em>Dotdeb</em>] du paquet intitulé "<tt>php5-fpm</tt>". Il permet des meilleures performances et plus de fonctions comparables a une installation en mode <tt>CGI</tt>.</li>
   <li><strong>Note: </strong>Le module <tt>FPM</tt>: a un exemple de configuration, un "init script", et un gabarit de configuration pour <tt>NGINX</tt></li>
</ul>

<h4>Installer?!</h4>

<p>C'est fonctionnel sous <tt>Debian Lenny</tt> et probablement d'autres. Moi, personnellement, je l'ai essayée sous <tt>Ubuntu 9.04 Jaunty</tt>. Dites-moi si vous l'avez essayé sous d'autres version dans <a href="#comments">les commentaires</a></p>

<h5>Étape 1</h5>
<p>Modifier le <tt>sources.list</tt>
<pre lang="bash">$ sudo vi /etc/apt/sources.list</pre>
Ajouter les deux lignes suivantes.
<pre lang="bash">
deb http://php53.dotdeb.org stable all
deb-src http://php53.dotdeb.org stable all
</pre></p>

<h5>Étape 2</h5>
<p>Maintenant, simplement mettre a jour avec...
<pre lang="bash"># aptitude update && aptitude upgrade</pre>
Si vous aviez une version inférieure de PHP, elle devrait se mettre à jour.</p>


<h3>Sources</h3>
<a href="http://www.dotdeb.org/2009/11/30/php-5-3-1-packages-for-debian-lenny-theyre-here/">PHP 5.3.1 packages for Debian “Lenny” : they’re here!</a>
