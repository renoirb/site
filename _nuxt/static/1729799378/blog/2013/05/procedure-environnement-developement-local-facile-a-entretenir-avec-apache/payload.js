__NUXT_JSONP__("/blog/2013/05/procedure-environnement-developement-local-facile-a-entretenir-avec-apache", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){x[0]="~\u002Fassets\u002Fcontent\u002Fblog\u002F2013\u002F04\u002Fapache-et-virtual-document-root-logo.png 300w";x[1]="~\u002Fassets\u002Fcontent\u002Fblog\u002F2013\u002F04\u002Fapache-et-virtual-document-root-logo-150x150.png 150w";return {data:[{},{},{},{canonical:s,content:{locale:"fr-CA",title:"Procédure pour avoir un environnement de dévelopement local facile à configurer avec Apache",canonical:s,status:"publish",revising:t,caption:j,caracteresBizzares:j,gallery:j,migrateCode:t,migrateImages:j,migrateLinks:j,created:"2013-05-23",updated:"2013-05-24",tags:["best-practices","favourites","linux","php","techniques","tutoriels"],categories:[u],coverImage:{src:v,alt:w,srcset:x,sizes:y},excerpt:"Mon environment de développement est sous Linux depuis plusieurs années. Avec le temps j'ai traîné dans mes portails privé de documentation cette procédure. Elle utilise des variables utilisés dans l'URL qui pointe vers votre hôte local de votre espace de travail où l'on peut héberger les fichiers de travail. Tout ceci, sans avoir à configurer pour chaque projet client.",toc:[{depth:z,text:k},{depth:m,text:A},{depth:m,text:B},{depth:m,text:k},{depth:z,text:C}],body:{type:n,children:[{type:b,tag:e,props:{},children:[{type:a,value:"Je ne sais pour vous, mais je ne peut plus programmer sans avoir l'environement serveur localement sur ma machine. Changer ou ajouter un fichier "},{type:b,tag:d,props:{},children:[{type:a,value:"VirtualHost"}]},{type:a,value:" pour chaque nouveau projet est assez répétitif. Il doit y avoir une façon automatique de le faire?"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Oui."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ça s'appelle "},{type:b,tag:d,props:{},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"J'ai ce tutoriel qui traîne dans mon Wiki personnel depuis des lustres, et c'est maintenant que je commence a migrer mes projets sous NGINX que je décide de le mettre en ligne. Il n'est jamais trop tard pour publier."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Cette méthode de configuration répond exactement au besoin précis de ne pas avoir a configurer un hôte virtuel apache pour chaque projet."}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:e,props:{},children:[{type:a,value:"Avec cette procédure, vous n'aurez qu'a maintenir votre fichier "},{type:b,tag:d,props:{},children:[{type:a,value:"hosts"}]},{type:a,value:", le reste suivra tout seul."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Vous pouvez appliquer cette technique avec n'importe quelle version du serveur http \"Apache\". Cette procédure peut même être faite si vous développez sous Windows ou Mac OS avec les distributions du serveur HTTP Apache sous Windows telles que MAMP, XAMPP, et EasyPHP."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Pourtant avec un serveur web local, ce type de configuration est possible depuis longtemps, il faut simplement savoir comment ça s'appelle: "},{type:b,tag:d,props:{},children:[{type:a,value:D}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Voici comment je configure mon environnement LAMP depuis quelques temps."}]},{type:a,value:c},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:k}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Tout commence par une certaine convention. Avec celle-ci, tout devrait suivre automatiquement."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"L'idée est de pouvoir accéder a un l'espace de travail du projet A du client B sur ma machine locale. L'adresse locale n'est plus "},{type:b,tag:d,props:{},children:[{type:a,value:"localhost"}]},{type:a,value:", mais quelque chose de plus explicite."}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:e,props:{},children:[{type:a,value:"Ce que j'apprécie le plus de cette méthode car elle permet de conserver dans un dossier parent tout ce qui est spécifique pour le projet et le client. Le code a exécuter qui soit dans un sous-dossier ne feait que du sens."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Par exemple, un projet appelé "},{type:b,tag:d,props:{},children:[{type:a,value:"projectname"}]},{type:a,value:" du client "},{type:b,tag:d,props:{},children:[{type:a,value:"client"}]},{type:a,value:" serait classé dans un dossier sous le chemin "},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Le code du projet web serait accessible via le serveur web à l'adresse "},{type:b,tag:d,props:{},children:[{type:a,value:"http:\u002F\u002Fprojectname.client.dev\u002F"}]},{type:a,value:" qui pointe vers l'adresse IP de la station de travail locale."}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:p},{type:b,tag:e,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"IMPORTANT"}]},{type:a,value:"\n  Il faut que les noms de dossiers "},{type:b,tag:h,props:{},children:[{type:a,value:"soient en minuscule"}]},{type:a,value:" et "},{type:b,tag:h,props:{},children:[{type:a,value:"aucun espace"}]},{type:a,value:", ni "},{type:b,tag:h,props:{},children:[{type:a,value:"caractères accentués"}]},{type:a,value:", sinon le serveur Apache risque de ne pas trouver le dossier. Principalement parce que l'adresse entrée dans le navigateur est convertie en bas de case, et que généralement un "},{type:b,tag:h,props:{},children:[{type:a,value:"système d'exploitation qui se respecte"}]},{type:a,value:" fait une différence entre, par exemple 'Allo' et 'allo'."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"La convention suggérée va comme suit:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"chaque projet est classé dans un chemin prévisible, similaire à "},{type:b,tag:d,props:{},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"le projet a un dossier "},{type:b,tag:d,props:{},children:[{type:a,value:G}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"les autres dossiers au même niveau que "},{type:b,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:" peuvent être n'importe quoi d'autre."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Idéalement, la logique applicative ne devrait pas être visible publiquement de toute façon. Seulement le fichier principal appelle l'\"autoloader\" en dehors du "},{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"De cette façon le vous pouvez classer tout vos projets du même client, et séparer par projets."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"La procédure tient aussi en compte"}]},{type:a,value:"\n* L'utilisateur courrant puisse écrire dans son dossier "},{type:b,tag:d,props:{},children:[{type:a,value:"workspace\u002F"}]},{type:a,value:" avec Apache2 comme s'il était son propre utilisateur avec "},{type:b,tag:d,props:{},children:[{type:a,value:"mpm-itk"}]},{type:a,value:"\n* Le nom de domaine utilisé définit dans quel dossier de l'utilisateur chercher"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:k}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Assurer que les modules sont chargés"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"     sudo a2enmod vhost_alias\n"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Ajouter le fichier default a la config de apache"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"     sudo vi \u002Fetc\u002Fapache2\u002Fports.conf\n"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Vérifier qu'il y a ceci:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"    NameVirtualHost *:80\n    Listen 80\n    UseCanonicalName Off\n"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Modifier le fichier de config du VirtualHost par défaut"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Fichier de configuration par magique"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"    sudo vi \u002Fetc\u002Fapache2\u002Fsites-available\u002Fdefault\n"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Verifier qu'il y a ce bloc dans "},{type:b,tag:d,props:{},children:[{type:a,value:"\u003CVirtualHost ...\u003E"}]},{type:a,value:":"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"    \u003CIfModule mpm_itk_module\u003E\n        AssignUserId renoirb users\n    \u003C\u002FIfModule\u003E\n"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Remplacer la mention "},{type:b,tag:d,props:{},children:[{type:a,value:H}]},{type:a,value:" par ce format:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"    VirtualDocumentRoot \u002Fhome\u002Frenoirb\u002Fworkspaces\u002F%1\u002F%0\u002Fweb\n"}]}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:C}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Apache 2.2 documentation on "},{type:b,tag:l,props:{href:"http:\u002F\u002Fhttpd.apache.org\u002Fdocs\u002F2.2\u002Fmod\u002Fmod_vhost_alias.html"},children:[{type:a,value:"vhost_alias"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"J'attribue le crédit a mon ex-associé "},{type:b,tag:l,props:{href:"http:\u002F\u002Fstephanchampagne.com"},children:[{type:a,value:"Stephan Champagne"}]},{type:a,value:", qui a trouvé la méthode et qui me l'a enseignée."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:l,props:{href:"http:\u002F\u002Fgroups.drupal.org\u002Fnode\u002F6266"},children:[{type:a,value:"How To Setup an Ubuntu LAMP Server for Development Purposes Only on Drupal groups"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:l,props:{href:"http:\u002F\u002Fserverfault.com\u002Fquestions\u002F278406\u002Fapache2-automatic-subdomains"},children:[{type:a,value:"ServerFault \"Apache2 automatic Subdomains\" thread"}]}]},{type:a,value:c}]}]},text:"---\nlocale: fr-CA\ntitle: \u003E-\n  Procédure pour avoir un environnement de dévelopement local facile à\n  configurer avec Apache\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F05\u002Fprocedure-environnement-developement-local-facile-a-entretenir-avec-apache\u002F\nstatus: publish\nrevising: true\ncaption: false\ncaracteresBizzares: false\ngallery: false\nmigrateCode: true\nmigrateImages: false\nmigrateLinks: false\ncreated: '2013-05-23'\nupdated: '2013-05-24'\ntags:\n  - best-practices\n  - favourites\n  - linux\n  - php\n  - techniques\n  - tutoriels\ncategories:\n  - projets\ncoverImage:\n  src: ~\u002Fassets\u002Fcontent\u002Fblog\u002F2013\u002F04\u002Fapache-et-virtual-document-root-logo-300x300.png\n  alt: |\n    Image décorative d’une plume rapellant le logo du logiciel Apache.\n  srcset:\n    - ~\u002Fassets\u002Fcontent\u002Fblog\u002F2013\u002F04\u002Fapache-et-virtual-document-root-logo.png 300w\n    - ~\u002Fassets\u002Fcontent\u002Fblog\u002F2013\u002F04\u002Fapache-et-virtual-document-root-logo-150x150.png 150w\n  sizes: '(max-width: 300px) 100vw, 300px'\nexcerpt: \u003E-\n  Mon environment de développement est sous Linux depuis plusieurs années. Avec\n  le temps j'ai traîné dans mes portails privé de documentation cette procédure.\n  Elle utilise des variables utilisés dans l'URL qui pointe vers votre hôte\n  local de votre espace de travail où l'on peut héberger les fichiers de\n  travail. Tout ceci, sans avoir à configurer pour chaque projet client.\n---\n\n\u003Cp\u003EJe ne sais pour vous, mais je ne peut plus programmer sans avoir l'environement serveur localement sur ma machine. Changer ou ajouter un fichier \u003Ccode\u003EVirtualHost\u003C\u002Fcode\u003E pour chaque nouveau projet est assez répétitif. Il doit y avoir une façon automatique de le faire?\u003C\u002Fp\u003E\n\n\u003Cp\u003EOui.\u003C\u002Fp\u003E\n\n\u003Cp\u003EÇa s'appelle \u003Ccode\u003EVirtualDocumentRoot\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EJ'ai ce tutoriel qui traîne dans mon Wiki personnel depuis des lustres, et c'est maintenant que je commence a migrer mes projets sous NGINX que je décide de le mettre en ligne. Il n'est jamais trop tard pour publier.\u003C\u002Fp\u003E\n\n\u003Cp\u003ECette méthode de configuration répond exactement au besoin précis de ne pas avoir a configurer un hôte virtuel apache pour chaque projet.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003EAvec cette procédure, vous n'aurez qu'a maintenir votre fichier \u003Ccode\u003Ehosts\u003C\u002Fcode\u003E, le reste suivra tout seul.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EVous pouvez appliquer cette technique avec n'importe quelle version du serveur http \"Apache\". Cette procédure peut même être faite si vous développez sous Windows ou Mac OS avec les distributions du serveur HTTP Apache sous Windows telles que MAMP, XAMPP, et EasyPHP.\u003C\u002Fp\u003E\n\n\u003Cp\u003EPourtant avec un serveur web local, ce type de configuration est possible depuis longtemps, il faut simplement savoir comment ça s'appelle: \u003Ccode\u003EVirtualDocumentRoot\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EVoici comment je configure mon environnement LAMP depuis quelques temps.\u003C\u002Fp\u003E\n\n\u003C!-- more --\u003E\n\n\u003Ch2\u003EProcédure\u003C\u002Fh2\u003E\n\n\u003Ch3\u003EÉtablissement du standard\u003C\u002Fh3\u003E\n\n\u003Cp\u003ETout commence par une certaine convention. Avec celle-ci, tout devrait suivre automatiquement.\u003C\u002Fp\u003E\n\n\u003Cp\u003EL'idée est de pouvoir accéder a un l'espace de travail du projet A du client B sur ma machine locale. L'adresse locale n'est plus \u003Ccode\u003Elocalhost\u003C\u002Fcode\u003E, mais quelque chose de plus explicite.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003ECe que j'apprécie le plus de cette méthode car elle permet de conserver dans un dossier parent tout ce qui est spécifique pour le projet et le client. Le code a exécuter qui soit dans un sous-dossier ne feait que du sens.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EPar exemple, un projet appelé \u003Ccode\u003Eprojectname\u003C\u002Fcode\u003E du client \u003Ccode\u003Eclient\u003C\u002Fcode\u003E serait classé dans un dossier sous le chemin \u003Ccode\u003E\u002Fhome\u002Frenoirb\u002Fworkspace\u002Fclient\u002Fprojectname\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELe code du projet web serait accessible via le serveur web à l'adresse \u003Ccode\u003Ehttp:\u002F\u002Fprojectname.client.dev\u002F\u003C\u002Fcode\u003E qui pointe vers l'adresse IP de la station de travail locale.\u003C\u002Fp\u003E\n\n\u003Ch3\u003EL'espace de travail du projet\u003C\u002Fh3\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E\u003Cstrong\u003EIMPORTANT\u003C\u002Fstrong\u003E\n  Il faut que les noms de dossiers \u003Cem\u003Esoient en minuscule\u003C\u002Fem\u003E et \u003Cem\u003Eaucun espace\u003C\u002Fem\u003E, ni \u003Cem\u003Ecaractères accentués\u003C\u002Fem\u003E, sinon le serveur Apache risque de ne pas trouver le dossier. Principalement parce que l'adresse entrée dans le navigateur est convertie en bas de case, et que généralement un \u003Cem\u003Esystème d'exploitation qui se respecte\u003C\u002Fem\u003E fait une différence entre, par exemple 'Allo' et 'allo'.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003ELa convention suggérée va comme suit:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003Echaque projet est classé dans un chemin prévisible, similaire à \u003Ccode\u003E\u002Fhome\u002Frenoirb\u002Fworkspace\u002Fclient\u002Fprojectname\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003Ele projet a un dossier \u003Ccode\u003Eweb\u002F\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003Eles autres dossiers au même niveau que \u003Ccode\u003Eweb\u002F\u003C\u002Fcode\u003E peuvent être n'importe quoi d'autre.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EIdéalement, la logique applicative ne devrait pas être visible publiquement de toute façon. Seulement le fichier principal appelle l'\"autoloader\" en dehors du \u003Cem\u003EDocumentRoot\u003C\u002Fem\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EDe cette façon le vous pouvez classer tout vos projets du même client, et séparer par projets.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cem\u003ELa procédure tient aussi en compte\u003C\u002Fem\u003E\n* L'utilisateur courrant puisse écrire dans son dossier \u003Ccode\u003Eworkspace\u002F\u003C\u002Fcode\u003E avec Apache2 comme s'il était son propre utilisateur avec \u003Ccode\u003Empm-itk\u003C\u002Fcode\u003E\n* Le nom de domaine utilisé définit dans quel dossier de l'utilisateur chercher\u003C\u002Fp\u003E\n\n\u003Ch3\u003EProcédure\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EAssurer que les modules sont chargés\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E     sudo a2enmod vhost_alias\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EAjouter le fichier default a la config de apache\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E     sudo vi \u002Fetc\u002Fapache2\u002Fports.conf\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EVérifier qu'il y a ceci:\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E    NameVirtualHost *:80\n    Listen 80\n    UseCanonicalName Off\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EModifier le fichier de config du VirtualHost par défaut\u003C\u002Fli\u003E\n\u003Cli\u003EFichier de configuration par magique\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E    sudo vi \u002Fetc\u002Fapache2\u002Fsites-available\u002Fdefault\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EVerifier qu'il y a ce bloc dans \u003Ccode\u003E&lt;VirtualHost ...&gt;\u003C\u002Fcode\u003E:\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E    &lt;IfModule mpm_itk_module&gt;\n        AssignUserId renoirb users\n    &lt;\u002FIfModule&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Cul\u003E\n\u003Cli\u003ERemplacer la mention \u003Ccode\u003EDocumentRoot\u003C\u002Fcode\u003E par ce format:\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E    VirtualDocumentRoot \u002Fhome\u002Frenoirb\u002Fworkspaces\u002F%1\u002F%0\u002Fweb\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Ch2\u003ESources\u003C\u002Fh2\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EApache 2.2 documentation on \u003Ca href=\"http:\u002F\u002Fhttpd.apache.org\u002Fdocs\u002F2.2\u002Fmod\u002Fmod_vhost_alias.html\"\u003Evhost_alias\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003EJ'attribue le crédit a mon ex-associé \u003Ca href=\"http:\u002F\u002Fstephanchampagne.com\"\u003EStephan Champagne\u003C\u002Fa\u003E, qui a trouvé la méthode et qui me l'a enseignée.\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"http:\u002F\u002Fgroups.drupal.org\u002Fnode\u002F6266\"\u003EHow To Setup an Ubuntu LAMP Server for Development Purposes Only on Drupal groups\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"http:\u002F\u002Fserverfault.com\u002Fquestions\u002F278406\u002Fapache2-automatic-subdomains\"\u003EServerFault \"Apache2 automatic Subdomains\" thread\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n",dir:"\u002Fblog\u002F2013\u002F05",path:"\u002Fblog\u002F2013\u002F05\u002Fprocedure-environnement-developement-local-facile-a-entretenir-avec-apache",extension:".md",slug:I,createdAt:J,updatedAt:J,category:u},coverImage:{toc:[],body:{type:n,children:[]},text:K,src:v,alt:w,srcset:x,sizes:y},month:"05",next:{title:"Managing Email Aliases with ProtonMail and SimpleLogin to sort automatically into inbox folders based local part",locale:L,path:"\u002Fblog\u002F2013\u002F07\u002Fi-am-joining-w3c-to-work-on-the-webplatform-project",slug:"i-am-joining-w3c-to-work-on-the-webplatform-project"},preamble:{toc:[],body:{type:n,children:[]},text:K},prettyfiedTemporalDate:{prettified:"jeudi 23 mai 2013",temporalDate:"2013-05-23"},prev:{locale:L,title:"Who else is using feature flipping thing on their web applications?",path:"\u002Fblog\u002F2013\u002F04\u002Fwho-else-is-using-that-feature-flipping-thing-on-their-web-applications",slug:"who-else-is-using-that-feature-flipping-thing-on-their-web-applications"},slug:I,year:"2013"}],fetch:[],mutations:void 0}}("text","element","\n","code","p","li","ul","em","pre",false,"Procédure","a",3,"root","blockquote","\n  ",".","h3","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F05\u002Fprocedure-environnement-developement-local-facile-a-entretenir-avec-apache\u002F",true,"projets","~\u002Fassets\u002Fcontent\u002Fblog\u002F2013\u002F04\u002Fapache-et-virtual-document-root-logo-300x300.png","Image décorative d’une plume rapellant le logo du logiciel Apache.\n",Array(2),"(max-width: 300px) 100vw, 300px",2,"Établissement du standard","L'espace de travail du projet","Sources","VirtualDocumentRoot","h2","\u002Fhome\u002Frenoirb\u002Fworkspace\u002Fclient\u002Fprojectname","web\u002F","DocumentRoot","procedure-environnement-developement-local-facile-a-entretenir-avec-apache","2024-10-24T19:43:51.718Z","","en-CA")));