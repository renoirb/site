---
locale: fr-CA
title: >-
  Comment rapidement accéder aux logs d'un environnement de production symfony
  1.x en moins de tapes clavier posible
canonical: >-
  https://renoirboulanger.com/blog/2012/02/comment-rapidement-acceder-aux-logs-dun-environnement-de-production-symfony-1-x-en-moins-de-tapes-clavier-posible/
status: publish
revising: true
createdAt: '2012-02-15'
updatedAt: '2013-03-27'
tags:
  - symfony
  - trucs
categories:
  - tranche-de-vie
excerpt: ''
---

Est-ce que ça vous est arrivé de vouloir voir les logs de votre application symfony 1.4 en production pour un problème et qu'aucune info n'est disponible pour savoir quel est le problème.

Ça m'est arrivé une fois de trop cet après midi. Ma solution est simple, utiliser le concept du yaml de symfony qui accepte du PHP, puis de faire UNE switch qu'on peut "flipper" pour pouvoir consulter le log.

Sans interruptions de serveur, ni pertes dangeureuses de performances **

<h3>Comment j'ai fait</h3>
J'ai ajouté a mon projet un simple bloc conditionnel qui va comme suit.

<h4>1. Fichier factories.yml</h4>
Ajouter cette condition dans le bloc <strong>prod:</strong>
<pre lang="php">
prod:
< ?php 
/**
 * En cas de besoin debug, flipper 0/1 pour pouvoir accéder aux logs.
 *
 * 0 = Pas de debug
 *
 * Ne pas oublier de faire un ./symfony cc :)
 **/
if(0){  
echo'

  logging_enabled: true
  logger:
    class: sfAggregateLogger
    param:
      level: debug
      loggers:
        sf_file_degug:
          class: sfFileLogger
          param:
            level: debug
            file: %SF_LOG_DIR%%SF_APP%%SF_ENVIRONMENT%.log

';
} else {
echo'

  logger:
    class:   sfNoLogger
    param:
      level:   err
      loggers: ~

';
} ?>
</pre>

<h3>2. Nettoyer la cache</h3>
Tout simplement.

<pre lang="bash">
./symfony cc
</pre>

<h3>3. Suivre le log</h3>
<pre lang="bash">
tail -f log/frontend_prod.log
</pre>


Bonsoir!!