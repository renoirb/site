---
locale: fr-CA
published: true
title: Detection de langue
date: 2005-12-22
categories:
  - Programmation
tags:
  - i18n
  - l10n
  - php
---

Lorsqu’on travaille sur un site qui doit avoir plusieurs langues... il m’arrive
souvent de devoir détecter la langue du visiteur. Ce bout de code permet de
détecter la langue selon les données fournies dans
<strong>HTTP_ACCEPT_LANGUAGE</strong> <em>et</em>
<strong>HTTP_USER_AGENT</strong>. Il faut comprendre que ce n’est pas une
solution absolue, mais un bout de code qui peut s'avérer utile!

<!--more-->

Toujours utile pour configurer la langue. Ce bout de code permet de savoir la
préférence du language du visiteur... il est utile lorsqu'on place ensuite des
images ou des bouts de texte avec des conditions. Voici le code...

```php
 /**
  * Les langCodes disponibles
  **/
  $langCodes[] = 'fr'; # AUSSI LA LANGUE PAR DEFAUT
  $langCodes[] = 'en';

 /**
  * Avoir la liste des details HTTP_USER_AGENT et HTTP_ACCEPT_LANGUAGE dans $ua
  **/
 foreach(explode(';',$_SERVER['HTTP_USER_AGENT']) as $agent_details)
   $ua[] = substr(trim($agent_details), 0, 2);
 foreach(explode(';',$_SERVER['HTTP_ACCEPT_LANGUAGE']) as $agent_details)
   $ua[] = substr(trim($agent_details), 0, 2);

 /**
  * Avoir la liste des traductions possibles... puis setter la langue
  **/
 foreach($GLOBALS['langCodes'] as $trx) {
   if(in_array(substr($trx, 0, 2), $ua))
     $langue = "$trx";
   else
     $langue = $GLOBALS['langCodes'][0];
 }
```

Ensuite, on appelle la reponse avec
<tt>$GLOBALS['langue']</tt> (a l'intérieur d'une fonction), ou encore <tt>$langue</tt>...
vous pouvez utiliser évidemment la structure de noms que vous voulez. Un exemple
intéressant d'usage pourrait etre lorsqu'on veut charger une image en fonction
de la langue actuelle... on pourrait le faire ainsi:

```php
 return "<img src=\"/path/to/image/?={$langue}/design_slice_12.jpg\" alt=\"Welcome\" border=\"0\" />";
```
