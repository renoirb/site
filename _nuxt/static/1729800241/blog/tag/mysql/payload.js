__NUXT_JSONP__("/blog/tag/mysql", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah){return {data:[{},{},{contents:[{locale:"fr-CA",title:"Comment remplacer les caract√®res bizzares dans WordPress lorsqu'on a mal fait la conversion",canonical:"https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2010\u002F06\u002Fcomment-remplacer-les-caracteres-bizzares-dans-wordpress-lorsqu-on-a-mal-fait-la-conversion\u002F",status:"publish",revising:D,migrateCode:D,migrateLinks:D,created:"2010-06-10",updated:"2013-03-29",tags:["linux",E,N],categories:[O],excerpt:"",toc:[{depth:B,text:P},{depth:B,text:Q},{depth:B,text:R},{depth:B,text:S}],body:{type:"root",children:[{type:b,tag:s,props:{},children:[{type:a,value:"Accrocheur mon titre n'est-ce pas? Je trouve ça tellement pas drôle lorsque ça m'arrive ce genre de situation avec les caractères accentués. Le problème n'arrive pas tout le temps qu'avec WordPress."}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"Voici, enfin, une suite a mon billet "},{type:b,tag:"nuxt-link",props:{to:"\u002Fblog\u002F2009\u002F09\u002Fpourquoi-tout-ces-caracteres-bizzares\u002F"},children:[{type:a,value:"Pourquoi tout ces caractères bizzares"}]},{type:a,value:".  Je devais travailler sur un problème de conversion de caractères pour un client dus a une conversion non réussie et\u002Fou terminée entre "},{type:b,tag:u,props:{},children:[{type:a,value:"latin1"}]},{type:a,value:" et "},{type:b,tag:u,props:{},children:[{type:a,value:"utf-8"}]},{type:a,value:" puis je me suis remis a penser a ce problème. Pourquoi ne pas le régler, et documenter!"}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"Voilà pourquoi ce billet ;)"}]},{type:a,value:m},{type:b,tag:C,props:{},children:[{type:a,value:P}]},{type:a,value:"\nMon cas était bien simple. J'avait mal fait ma sauvegarde lors d'un transfert et j'avait tout mes commentaires, billets, et autres données qui avait des accents \""},{type:b,tag:u,props:{},children:[{type:a,value:"transform√©s comme √áa"}]},{type:a,value:"\" (transformés comme ça).\n"},{type:b,tag:s,props:{},children:[{type:a,value:"Ce genre de problème arrive pour toutes sortes de raisons. Mais le symptôme est le même. Si vous avez des\nJe partage avec vous mon bout de code a «copier-coller» dans "},{type:b,tag:u,props:{},children:[{type:a,value:T}]},{type:a,value:" pour votre blogue WordPress si vous avez ces problèmes (oubliez-pas de faire des sauvegardes là(!))."}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"Plusieurs tutoriels existent pour régler la situation mais mon cas était assez unique. J'ai conservé le problème puis j'ai publié plusieurs billets (qui sortent bien) et laissé ceux \""},{type:b,tag:u,props:{},children:[{type:a,value:"ab√Æm√©s"}]},{type:a,value:"\" là. "},{type:b,tag:F,props:{},children:[{type:a,value:"Il n'était plus question d'extraire, convertir et ré-importer"}]},{type:a,value:i}]},{type:a,value:m},{type:b,tag:C,props:{},children:[{type:a,value:Q}]},{type:a,value:"\nC'est une réponse assez complexe. L'article "},{type:b,tag:"a",props:{href:"http:\u002F\u002Ftikiwiki.org\u002FUTF-8"},children:[{type:b,tag:F,props:{},children:[{type:a,value:"UTF-8"}]},{type:a,value:" sur TikiWiki.org"}]},{type:a,value:" l'explique en détail.\n"},{type:b,tag:"blockquote",props:{},children:[{type:a,value:"In short, UTF-8 is a character encoding that uses 1 to 3 bytes for each character.\nIt is one of the existing character encodings of the UCS (Universal Character Set), that contains nearly a hundred thousand abstract characters (including ASCII characters).\n"},{type:b,tag:s,props:{},children:[{type:a,value:"UTF-8 greatly simplifies the task of internationalization by replacing multiple alternative encodings (such as ISO8859-15 Latin-9, which encodes those English, French, German, Spanish and Portuguese characters not available in ASCII)."}]}]},{type:b,tag:s,props:{},children:[]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"En simple, le UTF-8 est un format d'encodage qui utilise 1 a 3 bytes pour chaque caractère. C'est un format d'encodage qui comprend près de plusieurs centaines de milliers de caractères (Incluant ceux du ASCII)."}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"UTF-8 est fait pour contenir tout les caractères existants pour simplifier l'internationalisation."}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"C'est un standard qui est pas nécessairement jeune mais qui n'était pas non plus supporté partout."}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"MySQL a commencé a le supporter qu'a partir de la version 4.1."}]},{type:a,value:m},{type:b,tag:s,props:{},children:[{type:a,value:"Ce qui arrive c'est qu'avec le temps, les gens prennent de plus en plus soin de rendre accessible pour toutes les langues leur applications. Ainsi un russe pourrait écrire en cyrillic et un Japonais en Kanji dans la même base de donnée. Le coup est difficile! Surtout que les versions de MySQL et PHP et Java offrent maintenant le choix par défaut en UTF-8... lorsqu'on fait pas attention: on se fait coincer!"}]},{type:a,value:m},{type:a,value:m},{type:b,tag:C,props:{},children:[{type:a,value:R}]},{type:a,value:"\nComme il n'y a pas que WordPress qui peut avoir ce type de problème j'ai fait un petit script qui génère pour chaque table et colone affectée. J'ai passé dans chaque table et colone où je voyait des choses bizzares et j'ai représenté dans un array a deux dimensions. Avec cette méthode on peut faire la même chose avec n'importequel schéma de base de donnée.\n"},{type:b,tag:U,props:{},children:[{type:a,value:"Exemple: Représenter les tables et les colones"}]},{type:a,value:"\nAvec ce format, en exemple, j'ai représenté les tables ("},{type:b,tag:u,props:{},children:[{type:a,value:"wp_posts"}]},{type:a,value:", etc...) et chaque array représente une colone où des caractères accentués sont mal convertis.\n"},{type:b,tag:V,props:{lang:N},children:[{type:a,value:"$tables = array(\n        'wp_posts' =\u003E array('post_content','post_title','post_excerpt')\n        ,'wp_usermeta' =\u003E array('meta_value')\n        ,'wp_term_taxonomy' =\u003E array('description')\n        ,'wp_comments' =\u003E array('comment_content')\n);\n"}]},{type:a,value:m},{type:b,tag:C,props:{},children:[{type:a,value:S}]},{type:a,value:"\nLe script a été utilisé pratiquement tel quel sur ma base de donnée WordPress de ce site.\n"},{type:b,tag:s,props:{},children:[{type:a,value:"Seuls ajustements a faire."}]},{type:a,value:m},{type:b,tag:"ul",props:{},children:[{type:a,value:v},{type:b,tag:w,props:{},children:[{type:a,value:"Remplacer les \"\u003C pre \u003E\" par \"\u003Cpre\u003E\". Vous comprenez le principe ;)"}]},{type:a,value:v},{type:b,tag:w,props:{},children:[{type:a,value:"Afficher le contenu généré via un serveur Web avec PHP installé"}]},{type:a,value:v},{type:b,tag:w,props:{},children:[{type:a,value:"Aller dans "},{type:b,tag:u,props:{},children:[{type:a,value:T}]},{type:a,value:", "},{type:b,tag:F,props:{},children:[{type:a,value:"faire une copie de la base de donnée à affecter"}]},{type:a,value:" (Voir dans onglet \""},{type:b,tag:u,props:{},children:[{type:a,value:"Opérations"}]},{type:a,value:"\" et \""},{type:b,tag:u,props:{},children:[{type:a,value:"Copier la base de données vers:  "}]},{type:a,value:"\")"}]},{type:a,value:v},{type:b,tag:w,props:{},children:[{type:a,value:"Aller dans cette base de donnée là dans phpmyadmin (!!)"}]},{type:a,value:v},{type:b,tag:w,props:{},children:[{type:a,value:"Exécuter le code généré (copier-coller) dans la fenêtre "},{type:b,tag:u,props:{},children:[{type:a,value:"SQL"}]},{type:a,value:" de la base de donnée de tests"}]},{type:a,value:v},{type:b,tag:w,props:{},children:[{type:a,value:"Faire pareil avec la vraie si vous êtes satisfaits du résultat"}]},{type:a,value:m}]},{type:a,value:m},{type:b,tag:U,props:{},children:[{type:a,value:"Le code"}]},{type:a,value:m},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:V,props:{className:["language-php","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"header"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'Content-type:text\u002Fhtml;charset=utf8'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:W}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'wp_posts'"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'post_content'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'post_title'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'post_excerpt'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'wp_usermeta'"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'meta_value'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'wp_term_taxonomy'"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'description'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'wp_comments'"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'comment_content'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Y}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√Ä'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|À'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√¥'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|ô'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√Ç'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√á'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√©'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|é'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√â'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|É'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√†'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|à'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√®'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|è'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√™'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|ê'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√¢'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'‚Äô'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|‘'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'¬´'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|«'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'¬ª'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|»'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√ß'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√π'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|ù'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√ª'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|û'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'√Æ'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|î'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:W}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:I}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:$}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aa}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:I}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Y}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:I}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:L}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"explode"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'|'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:".="}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'update '"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"' set '"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"' = REPLACE('"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"', UNHEX(\\''"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'\\'), \\''"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'\\') ;'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:"PHP_EOL"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"echo"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'\u003C pre \u003E'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"'\u003C \u002F pre \u003E'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:m}]}]}]}]},dir:"\u002Fblog\u002F2010\u002F06",path:"\u002Fblog\u002F2010\u002F06\u002Fcomment-remplacer-les-caracteres-bizzares-dans-wordpress-lorsqu-on-a-mal-fait-la-conversion",extension:".md",slug:"comment-remplacer-les-caracteres-bizzares-dans-wordpress-lorsqu-on-a-mal-fait-la-conversion",createdAt:ah,updatedAt:ah,category:O,prettyfiedTemporalDate:{prettified:"jeudi 10 juin 2010",temporalDate:"2010-06-10"}}],taxonomyKey:E,taxonomy:{key:E}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","string","single-quoted-string","operator",".","(",")"," ","\n",",","function","variable","\n ","bin2hex","p","keyword","tt","\n  ","li",";","array","\n        ","=\u003E",3,"h3",true,"mysql","strong","=","foreach","as","{","$col","$elc","}","php","programmation","La situation","Pourquoi?!","Comment j'ai opéré","Utiliser le script","phpmyadmin","h4","pre","$tables","\n\n","$chars","'|â'","'|ç'","$table","$elements","\n    ","$char","$update_line","[","number","]","2024-10-24T19:50:04.910Z")));