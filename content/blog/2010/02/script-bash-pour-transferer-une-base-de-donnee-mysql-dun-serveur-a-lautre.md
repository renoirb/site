---
title:
  Script bash pour transférer une base de donnée MySQL d’un serveur à l’autre
locale: fr-CA
created: 2010-02-09
updated: 2013-06-12
canonical: 'https://renoirboulanger.com/blog/2010/02/script-bash-pour-transferer-une-base-de-donnee-mysql-dun-serveur-a-lautre/'
status: publish
revising: true
categories:
  - projects
tags:
  - linux
  - bash
  - script
  - sql
---

Il m’est arrivé récemment de devoir transférer plusieurs dizaines de sites web
d’un serveur à l’autre manuellement.

Dans ce billet j’expliquerai le processus que j’ai utilisé pour en finir par
produire un script bash qui pourrait vous être utile.

### à propos du projet

Considérant que certains sites avaient plus d’une base de données il était hors
de question de faire a bras les lignes _mysqldump_, _ssh_ (en fait le transfert
se fait en compressant le fichier et le copiant via une redirection gzip avec
cat), _mysql_ pour, en ordre, dumper la base de données, la transférer, et la
restaurer.... sans oublier les _CREATE users_ pour chaque.

Je me suis dit: _faisons-en un script_!

### Les prérequis

Nous voulions...

- Faciliter le travail car on savait qu’il faudrait souvent transférer, plus
  d’une fois, chacune des bases de données; Car nous devions faire fonctionner
  le site sur le nouveau serveur _avant_ de transférer les DNS.
- Entrer une commande _minimale_ et en conserver les configurations;
- Que le _nouveau_ serveur réalise la tâche a lui-seul, sans prérequis sur le
  serveur distant;
- Utiliser les commandes minimales et pouvoir réutiliser le scripts dans ma
  propre librairie de script bash;
- Éviter de répéter, parceque c’est «_con_» ;)

### Ce que le script fait

#### 1\. _Transférer_ la base de donnée

    $ migratemysql transfer

1. Lire le fichier de configuration \*migratemysql.conf \* dans le dossier
   courrant (ou en créer un)
2. Se connecter en SSH
3. Lancer `mysqldump` en conservant le `tmp/` paramétrable (éviter de remplir le
   disque)
4. Compresser le fichier `.sql` avec _gzip_ (`.sql.gz`)
5. Transférer via `scp`

#### 2\. Importer dans le serveur local

    $ migratemysql import

1. Lire le fichier de configuration _migratemysql.conf_ dans le dossier actuel
2. Véfirier si le `.sql.gz` existe...
3. oui: le décompresser
4. si le `.sql` existe déjà, écrire par dessus? (**attente d’une réponse a
   l’usager**)
5. oui: réécrire, continuer...
6. non: arrêter l’exécution
7. non: continuer
8. Véfifier si le `.sql` existe...
9. oui: continuer
10. non: cesser l’exécution
11. Se connecter au serveur précisé, si erreur... DIE!
12. Véfifier si la base de donnée existe
13. oui...
14. _Retenir_ de ne pas _effacer_ le compte de base de donnée (PRIVILEGES)
    (variable "`OVERRIDEUSERCREATION`")
15. Effacer pour ré-insérer? (**attente d’une réponse a l’usager**)
16. Créer les commandes `DROP` manipulé via l’option "`ALT_PURGE`"
17. oui: générer le script, puis _continuer_
18. non: _continuer_ (utile si le fichier SQL a les commandes de `DROP`
19. non: _continuer_...
20. Vérifier si l’option "`OVERRIDEUSERCREATION`" existe, ne pas faire) Créer
    les PRIVILEGES spécifique pour la table a créer
21. Exécuter le `.sql`
22. Afficher a l’écran un morceau de code PHP pour le fichier de configuration
    sous le format spécifique à WordPress

### Le script

**Version disponible sous GitHub gist**

J'ai crée une copie dans un [gist github pour partager le script][0].

<code-block label="MigrateMySQL" active>

```bash
#!/bin/bash

# ////////////////  Some config  //////////////
TMPDIR="/tmp/"
mysql=`which mysql`
mysqldump=`which mysqldump`

#
#    MigrateMySQL v 1.0
#    by Etienne Lachance and Renoir Boulanger
#
#    https://renoirboulanger.com/projets/
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#

# ////////////////  Actual script  //////////////
PN=`basename "$0"`  		# program name
VER='1.0'

usage () {
echo "
USAGE INFORMATION

  NAME
       $PN

  DESCRIPTION
       Tool to help transfer a MySQL database from a remote site using ssh and
       mysqldump. You only need one copy of this script, on the server you want
       to import the databases to.

  SYNOPSIS
       $PN transfer
       $PN import

  OPTIONS
       transfer     transfer database dump file from remote host to localhost
       import       import database dump to database

  FILES
       $PN.conf
                    Config file saved in the directory that you invoked $PN

  LICENCE
       MigrateMySQL is a software provided under the GNU GENERAL PUBLIC LICENCE
       Copyright (C) 2010 by Etienne Lachance and Renoir Boulanger
       This program comes with ABSOLUTELY NO WARRANTY; for details, see source code.
       This is free software, and you are welcome to redistribute it
       under certain conditions;

                                     https://renoirboulanger.com/
"
    exit 1
}

dump_config_file () {
echo "#
# Generated by $PN version $VER on `date`
#" > ${PWD}/$PN.conf
echo 'SSH_SOURCE="hostname"
SSH_PORT=
SSH_USER="username"
#SSH_PASS=""
ALT_PURGE=""                      # En cas ou le mysqldump utilise a pas de DROP TABLE (default: false)
DB_SOURCE_DBNAME=""
DB_SOURCE_USER=""
DB_SOURCE_PASS=""
DB_SOURCE_HOST=""         	      # e.g. mysql4.local    (defaults: localhost)
DB_DEST_DBNAME=$DB_SOURCE_DBNAME
DB_DEST_USER="root"
DB_DEST_PASS="root"
DB_DEST_HOST=""                   # e.g. mysql4.local    (defaults: localhost)
DB_DEST_USERHOST=""	              # e.g. webservers-%    (defaults: localhost)
DB_DEST_USERNAME="root"	          # site username
DB_DEST_USERPW="root"             # site password
#OPTS_KEEP_COMPRESSED=""          # 1 or 0               (1=true) (not yet implemented)
OPTS_COMPRESSION_PROG="gzip"	    # bzip2,gzip,zip       (only gzip is implemented)
' >> ${PWD}/$PN.conf
echo " * Config file ${PWD}/$PN.conf created, modify it, then run $PN again.";
}

function dump_prepare_sql {
  echo "-- Generated by $PN version $VER on `date`" > ${TMPDIR}/$PN.$DB_DEST_DBNAME.sql.tmp
}

function dump_prepare_createdb {
  echo "CREATE DATABASE $DB_DEST_DBNAME;" >> ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.tmp
}

function dump_prepare_addpriv {
  echo "CREATE USER '$DB_DEST_USERNAME'@'$DB_DEST_USERHOST' IDENTIFIED BY '$DB_DEST_USERPW';" >> ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.tmp
  echo "GRANT USAGE ON * . * TO '$DB_DEST_USERNAME'@'$DB_DEST_USERHOST' IDENTIFIED BY '$DB_DEST_USERPW';" >> ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.tmp
  echo "GRANT ALL PRIVILEGES ON \`$DB_DEST_DBNAME\` . * TO '$DB_DEST_USERNAME'@'$DB_DEST_USERHOST';" >> ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.tmp
  echo "FLUSH PRIVILEGES;" >> ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.tmp
}

function dump_stdout_tellpasswords {
  echo "
Here is the application database credentials.

 --------------------------------------------------------
|         for WordPress, copy that code block            |
 --------------------------------------------------------
define('DB_SERVER',   '$DB_DEST_HOST');
define('DB_NAME',     '$DB_DEST_DBNAME');
define('DB_LOGIN',    '$DB_DEST_USERNAME');
define('DB_PASSWORD', '$DB_DEST_USERPW');
 --------------------------------------------------------
"
}
function fatal { echo "FAILED: $1"; exit 1; }

function purge_tables {
  echo -n " * Will purge tables from $DB_DEST_DBNAME ... "
  echo "-- Generated by $PN version $VER on `date`" > ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.purge.tmp

  echo -n 'Generating tmp file ... '
  DROPTABLES=`$mysql -u $DB_DEST_USER -h $DB_DEST_HOST -p"$DB_DEST_PASS" -Bse 'show tables' $DB_DEST_DBNAME |sed 's/^/drop table /g' | sed 's/$/;/g'`
  echo $DROPTABLES >> ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.purge.tmp

  echo -n 'Executing ... '
  cat ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.purge.tmp | $mysql -h $DB_DEST_HOST -u $DB_DEST_USER -p"$DB_DEST_PASS" $DB_DEST_DBNAME

  echo -n 'Deleting tmp file ... '
  rm -rf ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.purge.tmp
  echo "DONE"
}

# ///////////////////// ACTUAL EXECUTION //////////////////////
echo >&2 "$PN - Migrate MySQL database, $VER by Evocatio Solutions Technologies  http://evocatio.com/"
if [ ! -z $1 ]; then
  if [ ! -f ${PWD}/$PN.conf ]; then
    echo " * You need to have a configuration file"
    dump_config_file
    exit 1
  fi
  echo -n " * Reading configuration file ${PWD}/$PN.conf ... "
    source ${PWD}/$PN.conf
  echo "DONE"
fi

case "$1" in
  transfer)				# Initiate transfer
      echo -n " * Checking if needed vars are set ... "
        ERROR_MSG=""
        if [ "$SSH_SOURCE" = "" ]; then ERROR_MSG="$ERROR_MSG NO SSH_SOURCE";fi
      if [ -z "$SSH_USER" ]; then ERROR_MSG="$ERROR_MSG NO SSH_USER";fi
      if [ ! -z "$SSH_PORT" ]; then SSH_PORT_STR="-p $SSH_PORT";fi
      if [ -z "$DB_SOURCE_DBNAME" ]; then ERROR_MSG="$ERROR_MSG NO DB_SOURCE_DBNAME";fi
      if [ -z "$DB_SOURCE_USER" ]; then ERROR_MSG="$ERROR_MSG NO DB_SOURCE_USER";fi
      if [ -z "$DB_SOURCE_PASS" ]; then ERROR_MSG="$ERROR_MSG NO DB_SOURCE_PASS";fi
      if [ -z "$DB_SOURCE_HOST" ]; then DB_SOURCE_HOST="localhost";fi
      if [ -z "$OPTS_KEEP_COMPRESSED" ]; then OPTS_KEEP_COMPRESSED="1";fi
      if [ -z "$OPTS_COMPRESSION_PROG" ]; then OPTS_COMPRESSION_PROG="gzip";fi
      if [ ! -z "$ERROR_MSG" ]; then fatal "$ERROR_MSG";fi
    echo "DONE"

      echo -n " * Checking if remote database exist ... "
        DB_EXIST=0
        DBS=`ssh $SSH_PORT_STR $SSH_USER@$SSH_SOURCE "$mysql  -h $DB_SOURCE_HOST -u $DB_SOURCE_USER -p\"$DB_SOURCE_PASS\" -Bse 'show databases'| egrep -v 'information_schema|$mysql'"`
      for db in $DBS; do
        if [ "$db" = "$DB_SOURCE_DBNAME" ]; then DB_EXIST=1; fi;
      done
      if [ "$DB_EXIST" = "0"  ]; then fatal "DB_SOURCE_DBNAME : $DB_SOURCE_DBNAME does not exist";fi
      echo "DONE"

      echo -n " * Get remote database dump file ... "
        ssh $SSH_PORT_STR $SSH_USER@$SSH_SOURCE "$mysqldump -u $DB_SOURCE_USER -p"$DB_SOURCE_PASS" --opt $DB_SOURCE_DBNAME > ${TMPDIR}$DB_SOURCE_DBNAME.sql; gzip -f ${TMPDIR}$DB_SOURCE_DBNAME.sql; cat ${TMPDIR}$DB_SOURCE_DBNAME.sql.gz" > $DB_SOURCE_DBNAME.sql.gz
      echo "DONE"

      echo " * The local database file is $DB_SOURCE_DBNAME.sql.gz"
      echo "Finished!"
      exit 0;;


  import)					# Initiate import
      echo -n " * Checking if needed vars are set ... "
        ERROR_MSG=""
      if [ -z "$DB_DEST_DBNAME" ]; then ERROR_MSG="$ERROR_MSG NO_DEST_DBNAME";fi
      if [ -z "$DB_DEST_USER" ]; then ERROR_MSG="$ERROR_MSG NO_DEST_USER";fi
      if [ -z "$DB_DEST_PASS" ]; then ERROR_MSG="$ERROR_MSG NO_DEST_PASS";fi
      if [ -z "$DB_DEST_HOST" ]; then DB_DEST_HOST="localhost";fi
      if [ -z "$DB_DEST_USERHOST" ]; then DB_DEST_USERHOST="localhost";fi
      if [ -z "$OPTS_COMPRESSION_PROG" ]; then OPTS_COMPRESSION_PROG="gzip";fi
      if [ ! -z "$ERROR_MSG" ]; then fatal "$ERROR_MSG";fi
    echo "DONE"

    if [ -f $DB_SOURCE_DBNAME.sql.gz ]; then
      echo -n " * Uncompressing the database dump (Only gzip is supported) ... "
      gunzip $DB_SOURCE_DBNAME.sql.gz
      echo "DONE"
    fi

    if [ ! -f $DB_SOURCE_DBNAME.sql ]; then
      fatal "You should have a database dump $DB_SOURCE_DBNAME.sql"
    fi

    echo -n " * Checking if the requested database exists ... "
        DB_EXIST=0
        DBS=`$mysql -u $DB_DEST_USER -h $DB_DEST_HOST -p"$DB_DEST_PASS" -Bse 'show databases'| egrep -v 'information_schema|$mysql'`
      for db in $DBS; do
        if [ "$db" = "$DB_DEST_DBNAME" ]; then DB_EXIST=1; fi;
      done
      if [ "$DB_EXIST" = "1"  ]; then
        echo -n "$DB_DEST_DBNAME exists, overwrite? 'y/n': "
        read DOWEPURGE

        case "$DOWEPURGE" in
            'y')
            if [ ! -z $ALT_PURGE ]; then
                            purge_tables
            fi
            OVERRIDEUSERCREATION="true"
            ;;
            *)
              fatal "DB_DEST_DBNAME : $DB_DEST_DBNAME exists. And we did not understand the answer to purge DB.";
              ;;
        esac
      else
          echo "DONE"
        echo -n " * Creating database ... "
        dump_prepare_sql
        dump_prepare_createdb
        cat ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.tmp | $mysql -h $DB_DEST_HOST -u $DB_DEST_USER -p"$DB_DEST_PASS"
        echo "DONE"
      fi

    if [ -z $OVERRIDEUSERCREATION ] ; then
    echo -n " * Creating default user ... "
      dump_prepare_sql
      dump_prepare_addpriv
      cat ${TMPDIR}$PN.$DB_DEST_DBNAME.sql.tmp | $mysql -h $DB_DEST_HOST -u $DB_DEST_USER -p"$DB_DEST_PASS"
    echo "DONE"
    fi

    echo -n " * Restoring database ... "
      cat $DB_SOURCE_DBNAME.sql | $mysql -h $DB_DEST_HOST -u $DB_DEST_USER -p"$DB_DEST_PASS" $DB_DEST_DBNAME
    echo "DONE"

    dump_stdout_tellpasswords

      echo "Finished!"

      exit 0;;
  *)  usage;exit 0;;
esac
```

</code-block>

[0]: https://gist.github.com/renoirb/5770703
