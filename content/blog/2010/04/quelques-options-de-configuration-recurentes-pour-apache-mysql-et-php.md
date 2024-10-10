---
title: Quelques options de configuration récurentes pour Apache, MySQL et PHP
locale: fr-CA
created: 2010-04-22
updated: 2013-03-27
canonical: >-
  https://renoirboulanger.com/blog/2010/04/quelques-options-de-configuration-recurentes-pour-apache-mysql-et-php/
status: publish
revising: true
migrateLinks: true
migrateImages: true
categories: []
tags: []
webarchiveSnapshots: []
coverImage:
  src: ~/assets/content/blog/2010/04/apache_logo.png
  alt: Apache Logo
  text: Apache Logo
excerpt: ''
---

J’était en train de configurer pour la ènième fois un des serveurs avec lequel
je travaille et je réalise que je passe mon temps pour chercher comment
configurer.

J’ai pensé vous fournir mes switch préférés.

### Sortir les options du `.htaccess`

Il est recommandé d’utiliser un pannel pour les configurations. Question de
sécurité, permettre a tout le monde de modifier le serveur apache par un
.htaccess, c’est dangeureux. Alors, j’ai mis la syntaxe pour l’ajouter au bloc
du `<VirtualHost/>` directement.

Sous **ISPConfig** Simplement aller dans "Sites", choisir un domaine, puis
"Options".

<!--more-->

### Configurations

#### Redirect de tout les domaines

Ça permet d’éviter d’avoir l’indexation sur n’importequel domaine que celui
voulu. Personnellement je n’aime pas les domaines `www.example.org` car ça
rallonge. Mais beaucoup de monde utilise encore cette syntaxe... alors j’utilise
un bloc `mod_rewrite`

```apache
RewriteEngine  On
RewriteCond    %{HTTP_HOST}   !^renoirboulanger\.com
RewriteRule    ^/(.*)         http://renoirboulanger.com/$1 [R=301]
```

#### Encoding UTF-8 pour tous!!

Vous savez les "`é`" et "`√ä`" [caractères
nuisibles][pourquoi-caracteres-bizzares], souvent dus au fait que soit; la base
de donnée communique _pas_ dans le même _Character Encoding_ que ce que Apache
donne comme document... et le document-type du html. Trois sources d’erreur.
Plein de combinaisons possibles!

<!--#TODO-inline-edit a propos des caractères bizzares -->

##### Apache

Ajouter au bloc `<VirtualHost/>` du site.

```apache
AddDefaultCharset utf-8
```

##### MySQL

Généralement (Debian et Ubuntu) dans "`/etc/mysql/my.cnf`"

```ini[/etc/mysql/my.cnf]
[mysqld]
default-character-set=utf8

[mysql]
default-character-set=utf8
```

#### Augumenter la mémoire PHP

Parceque WordPress semble partir des fois en balloune... j’aime mieux le
configurer dans le bloc `<VirtualHost/>` par site qui vit ce problème.

Dans ISPConfig, Sites, sitename, Options:

```apache
php_value memory_limit 56M
```

[pourquoi-caracteres-bizzares]:
  /blog/2009/09/pourquoi-tout-ces-caracteres-bizzares/
