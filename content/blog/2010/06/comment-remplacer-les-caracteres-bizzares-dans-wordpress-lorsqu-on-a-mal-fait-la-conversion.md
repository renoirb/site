---
locale: fr-CA
title: >-
  Comment remplacer les caract√®res bizzares dans WordPress lorsqu'on a mal fait
  la conversion
canonical: >-
  https://renoirboulanger.com/blog/2010/06/comment-remplacer-les-caracteres-bizzares-dans-wordpress-lorsqu-on-a-mal-fait-la-conversion/
status: publish
revising: true
createdAt: '2010-06-10'
updatedAt: '2013-03-29'
tags:
  - linux
  - mysql
  - php
categories:
  - programmation
excerpt: ''
---

Accrocheur mon titre n'est-ce pas? Je trouve ça tellement pas drôle lorsque ça m'arrive ce genre de situation avec les caractères accentués. Le problème n'arrive pas tout le temps qu'avec WordPress.

Voici, enfin, une suite a mon billet <a href="/blog/2009/09/pourquoi-tout-ces-caracteres-bizzares/">Pourquoi tout ces caractères bizzares</a>.  Je devais travailler sur un problème de conversion de caractères pour un client dus a une conversion non réussie et/ou terminée entre <tt>latin1</tt> et <tt>utf-8</tt> puis je me suis remis a penser a ce problème. Pourquoi ne pas le régler, et documenter!

Voilà pourquoi ce billet ;)

<h3>La situation</h3>
Mon cas était bien simple. J'avait mal fait ma sauvegarde lors d'un transfert et j'avait tout mes commentaires, billets, et autres données qui avait des accents "<tt>transform√©s comme √áa</tt>" (transformés comme ça).

Ce genre de problème arrive pour toutes sortes de raisons. Mais le symptôme est le même. Si vous avez des
Je partage avec vous mon bout de code a «copier-coller» dans <tt>phpmyadmin</tt> pour votre blogue WordPress si vous avez ces problèmes (oubliez-pas de faire des sauvegardes là(!)).

Plusieurs tutoriels existent pour régler la situation mais mon cas était assez unique. J'ai conservé le problème puis j'ai publié plusieurs billets (qui sortent bien) et laissé ceux "<tt>ab√Æm√©s</tt>" là. <strong>Il n'était plus question d'extraire, convertir et ré-importer</strong>.

<h3>Pourquoi?!</h3>
C'est une réponse assez complexe. L'article <a href="http://tikiwiki.org/UTF-8"><strong>UTF-8</strong> sur TikiWiki.org</a> l'explique en détail.

<blockquote>In short, UTF-8 is a character encoding that uses 1 to 3 bytes for each character.
It is one of the existing character encodings of the UCS (Universal Character Set), that contains nearly a hundred thousand abstract characters (including ASCII characters).

UTF-8 greatly simplifies the task of internationalization by replacing multiple alternative encodings (such as ISO8859-15 Latin-9, which encodes those English, French, German, Spanish and Portuguese characters not available in ASCII).</blockquote>

En simple, le UTF-8 est un format d'encodage qui utilise 1 a 3 bytes pour chaque caractère. C'est un format d'encodage qui comprend près de plusieurs centaines de milliers de caractères (Incluant ceux du ASCII).

UTF-8 est fait pour contenir tout les caractères existants pour simplifier l'internationalisation.

C'est un standard qui est pas nécessairement jeune mais qui n'était pas non plus supporté partout.

MySQL a commencé a le supporter qu'a partir de la version 4.1.

Ce qui arrive c'est qu'avec le temps, les gens prennent de plus en plus soin de rendre accessible pour toutes les langues leur applications. Ainsi un russe pourrait écrire en cyrillic et un Japonais en Kanji dans la même base de donnée. Le coup est difficile! Surtout que les versions de MySQL et PHP et Java offrent maintenant le choix par défaut en UTF-8... lorsqu'on fait pas attention: on se fait coincer!

<!--more-->
<h3>Comment j'ai opéré</h3>
Comme il n'y a pas que WordPress qui peut avoir ce type de problème j'ai fait un petit script qui génère pour chaque table et colone affectée. J'ai passé dans chaque table et colone où je voyait des choses bizzares et j'ai représenté dans un array a deux dimensions. Avec cette méthode on peut faire la même chose avec n'importequel schéma de base de donnée.

<h4>Exemple: Représenter les tables et les colones</h4>
Avec ce format, en exemple, j'ai représenté les tables (<tt>wp_posts</tt>, etc...) et chaque array représente une colone où des caractères accentués sont mal convertis.
<pre lang="php">
$tables = array(
        'wp_posts' => array('post_content','post_title','post_excerpt')
        ,'wp_usermeta' => array('meta_value')
        ,'wp_term_taxonomy' => array('description')
        ,'wp_comments' => array('comment_content')
);
</pre>



<h3>Utiliser le script</h3>
Le script a été utilisé pratiquement tel quel sur ma base de donnée WordPress de ce site.

Seuls ajustements a faire.
<ul>
  <li>Remplacer les "&lt;&nbsp;pre&nbsp;&gt;" par "&lt;pre&gt;". Vous comprenez le principe ;)</li>
  <li>Afficher le contenu généré via un serveur Web avec PHP installé</li>
  <li>Aller dans <tt>phpmyadmin</tt>, <strong>faire une copie de la base de donnée à affecter</strong> (Voir dans onglet "<tt>Opérations</tt>" et "<tt>Copier la base de données vers:  </tt>")</li>
  <li>Aller dans cette base de donnée là dans phpmyadmin (!!)</li>
  <li>Exécuter le code généré (copier-coller) dans la fenêtre <tt>SQL</tt> de la base de donnée de tests</li>
  <li>Faire pareil avec la vraie si vous êtes satisfaits du résultat</li>
</ul>

<h4>Le code</h4>

```php
header('Content-type:text/html;charset=utf8');
$tables = array(
        'wp_posts' => array('post_content','post_title','post_excerpt')
        ,'wp_usermeta' => array('meta_value')
        ,'wp_term_taxonomy' => array('description')
        ,'wp_comments' => array('comment_content')
);

$chars = array(
 bin2hex('√Ä').'|À',
 bin2hex('√¥').'|ô',
 bin2hex('√Ç').'|â',
 bin2hex('√á').'|ç',
 bin2hex('√©').'|é',
 bin2hex('√â').'|É',
 bin2hex('√†').'|à',
 bin2hex('√®').'|è',
 bin2hex('√™').'|ê',
 bin2hex('√¢').'|â',
 bin2hex('‚Äô').'|‘',
 bin2hex('¬´').'|«',
 bin2hex('¬ª').'|»',
 bin2hex('√ß').'|ç',
 bin2hex('√π').'|ù',
 bin2hex('√ª').'|û',
 bin2hex('√Æ').'|î');

foreach($tables as $table => $elements){
  foreach($elements as $col){
    foreach($chars as $char){
        $elc = explode('|',$char);
        $update_line.= 'update '.$table.' set '.$col.' = REPLACE('.$col.', UNHEX(\''.$elc[0].'\'), \''.$elc[1].'\') ;'.PHP_EOL;
    }
  }
}
echo '< pre >'.$update_line.'< / pre >';
```
