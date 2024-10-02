---
locale: fr-CA
title: >-
  Résumé de mes essais avec composer sous Symfony 2.0.x et un manifeste
  composer.json pour vos propres tests
canonical: >-
  https://renoirboulanger.com/blog/2012/06/resume-de-mes-essais-avec-composer-sous-symfony-2-0-x-et-un-manifeste-composer-json-pour-vos-propres-tests/
status: publish
revising: true
created: '2012-06-18'
updated: '2013-03-31'
tags:
  - php
  - symfony2
categories:
  - programmation
excerpt: >-
  Composer sera la nouvelle façon de distribuer des paquets de fonctionnalités
  (appelés: "Bundle"). La version stable de symfony actuelle (2.0.x) n'utilise
  pas encore cette méthode de distribution. J'ai pris sur moi de documenter le
  résultat de ma tentative.
---

Ce soir j'ai pris le temps d'essayer de configurer une distribution Symfony 2.0.x sous Composer.  Je ne suis pas certain encore si j'ai totalement réussi.  J'aimerai votre avis sur ma proposition de fichier <a href="#composer-json">composer.json</a>.

<strong>Statut mis à jour</strong>
<p>Je suis <a href="http://beta.renoirboulanger.com/blog/2012/07/my-current-symfony-2-0-x-favourites-vendor-dependencies">retourné avec le fichier <strong>deps</strong></a> à cause que je n'ai pas réussi a avoir toutes mes dépendances fonctionnelles dans un délai raisonnable (trois soirs). J'essaierai à nouveau plus tard.

<h2>Résultat</h2>
En ce moment je n'arrive pas a faire fonctionner <strong>JmsDiExtraBundle</strong> ni la nouvelle version de <strong>MopaBootstrapBundle</strong> notamment pour le <em>mopa/bootstrap-sandbox-bundle</em>.   Je mettrai ce billet a jour lorsque j'aurai terminé mes essais.

<h2>Résultat escompté</h2>
Avoir un manifeste complet pour Symfony 2.0.x que je pourrai utiliser avec mes bundles préférés:
<ul>
  <li>jms/security-extra-bundle</li>
  <li>jms/di-extra-bundle</li>
  <li>jms/serializer-bundle</li>
  <li>gedmo/doctrine-extensions</li>
  <li>stof/doctrine-extensions-bundle</li>
  <li>knplabs/knp-components</li>
  <li>mopa/bootstrap-bundle</li>
  <li>knplabs/knp-paginator-bundle</li>
  <li>polishsymfonycommunity/blog-bundle</li>
</ul>




<h2 id="composer-json">Composer.json file</h2>
<pre lang="javascript">
{
    "description": "This bundle is meant to run latest 2.0.x Symfony-standard distribution, based on Composer.",
    "keywords": ["symfony2"],
    "type": "symfony-bundle",
    "license": "MIT",
    "authors": [{
        "name" : "Renoir Boulanger",
        "email" : "hello@renoirboulanger.com"
    }],
     "autoload": {
        "psr-0": { "": "src/" }
    },
    "require": {
        "php": ">=5.3",
        "symfony/symfony": "2.0.*",

        "twig/twig": "1.6.*",
        "doctrine/orm": "2.1.7",
        "doctrine/common": "2.1.4",
        "doctrine/dbal":   "2.1.7",
        "swiftmailer/swiftmailer": ">=4.1.7",
        "monolog/monolog": "1.0.*",

        "symfony/assetic-bundle": ">=1.0.1",
        "sensio/distribution-bundle": "2.0.*",
        "sensio/framework-extra-bundle": ">=2.0",
        "sensio/generator-bundle": "2.0.*",

        "jms/metadata": ">=1.1.0",
        "jms/security-extra-bundle": "1.0.x",
        "jms/di-extra-bundle": ">=1.0.0",
        "jms/serializer-bundle": "master",

        "gedmo/doctrine-extensions": "v2.2.2",
        "stof/doctrine-extensions-bundle": "1.0.2",
        "liip/imagine-bundle": "master",

        "knplabs/knp-components": "1.1.*",
        "mopa/bootstrap-bundle": "2.0.*",

        "knplabs/knp-paginator-bundle": "dev-master",
        "knplabs/knp-menu-bundle": "dev-master",
        "mopa/bootstrap-sandbox-bundle": "2.0.x-dev",
        "liip/theme-bundle": "dev-master"
    },
    "config": {
        "bin-dir": "bin"
    },
    "extra": {
        "symfony-app-dir": "app",
        "symfony-web-dir": "web"
    }
}
</pre></p>