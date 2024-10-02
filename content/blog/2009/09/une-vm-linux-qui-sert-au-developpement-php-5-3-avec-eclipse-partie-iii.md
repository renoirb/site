---
locale: fr-CA
title: Une VM Linux qui sert au développement PHP 5.3 avec Eclipse - partie III
canonical: >-
  https://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-iii/
status: publish
revising: true
created: '2009-09-09'
updated: '2013-03-29'
tags:
  - linux
  - logiciel-libre
  - techniques
  - tutoriels
categories: []
excerpt: ''
---

Ce billet est le <strong>troisième</strong> d'une série d'articles décrivant la fabrication d'une Machine Virtuelle (VM) de développement pour une équipe de dévelopeurs.

Cette partie couvrira l'installation de Apache et de PHP 5.3 (la dernière version depuis Juin 2009) qui offre beaucoup d'avancées. Je pense que c'est devenu le juste minimum a cause de ces nouvelles fonctionnalités. Voir articles faits par  <span lang="en">IBM developerworks</span> "<span lang="en">What's new in PHP 5.3 (<a href="http://www.ibm.com/developerworks/opensource/library/os-php-5.3new1/index.html">part 1</a>, <a href="http://www.ibm.com/developerworks/opensource/library/os-php-5.3new2/index.html?S_TACT=105AGX44&S_CMP=ART">part 2</a>, <a href="http://www.ibm.com/developerworks/opensource/library/os-php-5.3new3/index.html?S_TACT=105AGX44&S_CMP=ART">part 3</a>, and <a href="http://www.ibm.com/developerworks/opensource/library/os-php-5.3new4/index.html?S_TACT=105AGX44&S_CMP=ART">part 4</a>)</span>".


<!--more-->

J'ai séparé cette série en quatre volets.
<ol>
<li><strong><a href="http://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-i/">Description du concept</a></strong>
Ce que je vais discuter dans cette série d'articles n'est pas nécessairement connu de tous. Je vais donc vulgariser un peu avant de commencer.</li>
<li><strong><a href="http://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-ii/">Installation du système</a></strong>
Je donne ici mon secret de magicien avec quelques configurations que je considère importantes pour un environement d'hébergement web pour améliorer la sécruité (le strict minimum pour cette série d'articles. Je pourrai en faire un plus poussé plus tard).</li>
<li><strong>Compilation de PHP 5.3</strong> (cet article)
Comment installer Apache 2.x avec le dernier cutting-edge PHP.</li>
<li><strong>Installation de l'environnement de développement avec Eclipse PDT</strong> (à venir)
La magie se passe par là! Avec ce setup votre équipe pourra répliquer l'installation de développement a volonté.</li>
</ol>
<h3>Avant tout, quelques précautions</h3>
<div style="background-color:#FFEEEE;border:1px solid #666600;color:#660000;margin:20px;padding:20px 30px;text-align:center;"><strong>Avertissement!  -  Changement environement:
</strong>Faire des modifications avec Apache et PHP sur un serveur en production peut causer des problèmes sérieux!  Il est conseillé de planifier et de pratiquer le déploiement AVANT de l'appliquer dans un environnement de production. Vous aurez été avertis!</div>
<strong>Varia:</strong>
<div>
<ul>
<li>Désinstallez toutes les instances de PHP que vous avez installé. Il est recommandé d'avoir la version stable pour un environement de production et que l'environement de développement réflète la production.</li>
<li>Dans mes environements de travail j'ai choisi d'utiliser <strong>Debian Linux (stable)</strong> courrant.  J'ai déjà utilisé d'autres distributions Linux pour des serveurs mais ça dépasse l'objectif de cet article.</li>
<li>Chaque ligne de commande commence soit par "$" (dollar sign)  ou "#" (hash mark). Le # signifie que vous entrez la commande en tant que <strong>root</strong></li>
<li>Le retour de chariot est illustré par un anti-slash "\"  car je veut éviter de changer la largeur du billet! Vous pouvez simplement tout coller sur une ligne.</li>
</ul>
</div>
<h3>Compilation de PHP 5.3</h3>
<span> </span>
<h4>1 Installer Apache</h4>
La première étape est d'installer Apache. Il est possible de le faire avec plusieurs autres serveurs (lighttpd par exemple) mais je ne l'utilise pas (lighttpd) pour autre chose que du caching statique ou du Proxying. Alors je ne couvrirai pas comment faire. <a href="http://www.howtoforge.com/lighttpd_mysql_php_debian_etch">Cet article le fait</a>, par contre.

Cette commande devrait faire le travail.
<pre lang="bash"># apt-get install apache2 apache2-mpm-prefork apache2-prefork-dev \
apache2-utils apache2.2-common</pre>
<h4>2. Installer MySQL et/ou PostgreSQL</h4>
L'engin de base de donnée utilisé est le choix de chacun. Je suis personnellement habitué avec MySQL mais pouvoir avoir les deux peut être utile.
<h5>PostgreSQL</h5>
<pre lang="bash"># apt-get install postgresql-8.3 postgresql-client-8.3 \
postgresql-client-common postgresql-common postgresql-server-dev-8.3</pre>
<h5>MySQL</h5>
<pre lang="bash"># apt-get install mysql-client mysql-client-5.0    mysql-common \
mysql-server mysql-server-5.0 mysql-server-core-5.0</pre>
<h5>3. Installer les librairies requises</h5>
PHP en tant que tel est facile a configurer mais les librairies externes font que c'est plus compliqué... malheureusement.  Ce qui est bien c'est qu'avec Debian la documentation est entretenue fréquemment et il est facile de se reprendre.

Plusieurs heures peuvent être prises pour simplement préparer la commande "configure".  Avec ces notes vous devriez vous en sortir pas pire :)

Voici les packages que Debian fournit pour ce que PHP demande, comme ça vous pourrez éviter d'installer arbitrairement plusieurs dizaines de paquets!
<pre lang="bash"># apt-get install libtidy-dev curl libcurl4-openssl-dev libcurl3 \
libcurl3-gnutls zlib1g zlib1g-dev libxslt1-dev libzip-dev libzip1 \
libxml2 libsnmp-base libsnmp15 libxml2-dev libsnmp-dev libjpeg62 \
libjpeg62-dev libpng12-0 libpng12-dev zlib1g zlib1g-dev libfreetype6 \
libfreetype6-dev libbz2-dev libxpm-dev libmcrypt-dev libmcrypt4</pre>
<strong>Note</strong>:  libxpm4-dev proposé dans <a href="http://www.brandonsavage.net/installing-php-5-3-on-ubuntu/">ma source d'information</a> n'est pas trouvé dans Debian Lenny mis a jour le 2009-09-09 j'ai donc rectifié (pour libxpm-dev) la commande ci-haut.
<h4>4. Télécharger le code source de PHP</h4>
Visiter <a href="http://www.php.net/">http://www.php.net</a> et télécharger la version désirée. Actuellement, la version production est la 5.3

Personnellement je recommande d'avoir les fichiers de compilation dans /usr/src quoi que j'ai pas la conaissance de la science infuse ;)
<pre lang="bash"># cd /usr/src/
# wget http://us3.php.net/get/php-5.3.0.tar.gz/from/this/mirror
# tar xvfz php-5-3-0.tar.gz
# cd php-5.3</pre>
<h4>5. La commande Configure.</h4>
La commande configure peut etre difficile a configurer surtout avec les librairies qu'on veut généralement mettre... généralement une certaine mesure du minimum.

Personnellement. Je recommande de faire la commande dans un fichier et de l'exécuter par la suite.
<pre lang="bash"># vi configure.sh
 ./configure --with-apxs2=/usr/bin/apxs2 \
   --with-tidy=/usr --with-curl=/usr/bin --with-curlwrappers \
   --with-openssl-dir=/usr --with-zlib-dir=/usr --enable-mbstring \
   --with-xpm-dir=/usr --with-xsl=/usr --with-ldap --with-xmlrpc \
   --with-iconv-dir=/usr --with-snmp=/usr --enable-exif --enable-calendar \
   --with-bz2=/usr --with-mcrypt=/usr --with-gd --with-jpeg-dir=/usr \
   --with-png-dir=/usr --with-zlib-dir=/usr --with-freetype-dir=/usr \
   --enable-mbstring --enable-zip --with-pear</pre>
Je suggère d'ajouter les commande ci bas au configure plus bas en fonction de votre choix de gestionnaire de base de donnée.
<h5>PostgreSQL</h5>
<pre lang="bash">--with-pdo-pgsql=/usr</pre>
<h5>MySQL</h5>
<pre lang="bash"> --with-pdo-mysql=/usr --with-mysqli=/usr/bin/mysql_config --with-mysql=/usr</pre>
Sortir avec :wq puis exécuter le script.
<pre lang="bash"># /bin/bash ./configure.sh</pre>
L'écran devrait bouger beaucoup... généralement dans la doc on conseille ici d'aller prendre un café!

... Si tout va bien tout devrait terminer par quelque chose qui ressemble à "Thanks for using php". Sinon.... je conseille ma <a href="http://renoirboulanger.com/blog/2009/08/processus-pour-regler-un-probleme-avec-un-ordinateur/">solution aux problèmes numéro un</a>. ;)

Faut pas s'en faire. Généralement c'est de tenter avec "<strong>apt-cache search</strong>" et "<strong>apt-get install</strong>" le nom de la librairie manquante.
<h4>6. Make et Make Install</h4>
Pour l'installer. Maintenant que PHP est "configure"-é  il faut le compiler et l'installer avec make.

La commande est bien simple.
<pre lang="bash"># make</pre>
Beaucoup de sortie ici aussi. Ça risque même d'être plus long dépendamment de la force du processeur disponible.  C'est le temps de prendre une marche, encore.

Une fois que tout est terminé avec make, vous pouvez faire, accessoirement un "make test".

La dernière étape est de faire le "install"
<pre lang="bash"># make -i install</pre>
Pourquoi le -i? Parceque Ubuntu/Debian risque d'avertir pour certaines erreurs a cause de la différence d'installation d'Apache de Debian/Ubuntu, nous le ferons nous même a bras plus loin dans ce document.
<h4>7. Ajouter le module PHP dans Apache</h4>
Il faut ajouter le module dans Apache pour qu'il puisse interpreter... c'est logique. Étant donné que la commande make -i a surement fait son travail (sous Debian), nous devons nous assurer que tout est en ordre dans la configuration d'Apache.

Premièrement, copier la librairie compilée:
<pre lang="bash"># updatedb
# locate libphp5
...
/usr/lib/apache2/modules/libphp5.so
/usr/src/php-5.3.0/libs/libphp5.la
/usr/src/php-5.3.0/libs/libphp5.so
...
# cp /usr/src/php-5.3.0/libs/libphp5.so /usr/lib/apache2/modules/libphp5_3.so</pre>
Je commencer par mettre a jour la base de donnée "locate", ensuite je cherche où est disponible la librairie, puis ensuite j'utilise "cp" pour déplacer sous un autre nom la librairie.

Ensuite,  dans le dossier:
<pre lang="bash"># cd /etc/apache2/mods-available</pre>
Créez un nouveau fichier appelé php5.load et copiez-y le contenu suivant:
<pre lang="bash">LoadModule php5_module /usr/lib/apache2/modules/libphp5_3.so</pre>
Enregistrer le fichier. Ensuite créez un fichier appelé php5.conf et collez-y ce contenu:
<pre lang="bash">AddType application/x-httpd-php .php .phtml .php3
AddType application/x-httpd-php-source .phps</pre>
On est prêts! Il faut le charger dans Apache:
<pre lang="bash"># a2enmod php5
Enabling module php5.
Run "/etc/init.d/apache2 restart" to activate new configuration!
# invoke-rc.d apache2 restart
* Restarting web server apache2
...waiting    ...done.</pre>
<h4>8. Tester l'installation</h4>
C'est assez simple rendus là.

On commence par le binaire en ligne de commande:
<pre lang="bash">$ php -v
PHP 5.3.0 (cli) (built: Aug  17 2009 19:08:32)
Copyright (c) 1997-2009 The PHP Group
Zend Engine v2.3.0, Copyright (c) 1998-2009 Zend Technologies</pre>
Tout va bien!

Ensuite, voir un phpinfo() dans le docroot. (Généralement /var/www/index.php).
<pre lang="php">< ?php
  phpinfo();
?></pre>
<img class="size-full wp-image-1113" style="border:none;" title="PHP 5.3 phpinfo()" src="http://renoirboulanger.com/wp-content/uploads/2009/09/phpinfo_php5_3.png" alt="PHP 5.3 phpinfo()" width="612" height="429" />
<h3>Conclusion</h3>
Je crois avoir bien réussi mon interprétation et ma traduction de l'article que j'ai utilisé. J'y ai ajouté mon grain de sel et rectifié ce qui a marché pour moi. Je vous conseille de documenter pour vos propres besoins ce que vous faites, on sait jamais quand on a besoin de refaire ce qu'on a déjà fait !
<h3>Références</h3>
<ul>
<li><strong><a lang="en" href="http://www.brandonsavage.net/installing-php-5-3-on-ubuntu/">BrandonSavage.net : Installing PHP 5.3 on Ubuntu</a> </strong></li>
<li><strong><a href="http://www.php-experts.org/developpement-web/5-plugins-indispensables-pour-coder-en-php-avec-lide-eclipse-22">5 plugins indispensables pour coder en PHP avec l'IDE Eclipse</a></strong><br />Un article que j'ai beaucoup apprécié car il mentionne ses propres plugins et j'ai cru bon les ajouter ici.</li>
<li><span lang="en">IBM developerworks</span> "<span lang="en">What's new in PHP 5.3 (<a href="http://www.ibm.com/developerworks/opensource/library/os-php-5.3new1/index.html">part 1</a>, <a href="http://www.ibm.com/developerworks/opensource/library/os-php-5.3new2/index.html?S_TACT=105AGX44&S_CMP=ART">part 2</a>, <a href="http://www.ibm.com/developerworks/opensource/library/os-php-5.3new3/index.html?S_TACT=105AGX44&S_CMP=ART">part 3</a>, and <a href="http://www.ibm.com/developerworks/opensource/library/os-php-5.3new4/index.html?S_TACT=105AGX44&S_CMP=ART">part 4</a>)</span>".</li>
<strong> </strong></ul>