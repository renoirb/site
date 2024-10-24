__NUXT_JSONP__("/blog/2010/04/les-differentes-versions-du-service-de-taches-planifie-cron", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:[{},{},{},{canonical:m,content:{locale:k,title:"Les différentes versions du service de tâches planifié CRON",canonical:m,status:"publish",revising:true,created:"2010-04-19",updated:"2013-03-27",tags:["linux","outils","techniques","unix","vocabulaire"],categories:[n],excerpt:h,toc:[{depth:o,text:p},{depth:o,text:"Versions de CRON"}],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:b,tag:"img",props:{className:["size-full","wp-image-2104"],style:"float: right; border: 0px;",title:"Une horloge",src:"https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2010\u002F04\u002FClock-icon.png",alt:h,width:q,height:q},children:[]},{type:a,value:"Suite a mon article «"},{type:b,tag:"nuxt-link",props:{to:"\u002Fblog\u002F2010\u002F04\u002Fcomment-automatiser-une-tache-avec-cron-en-utilisant-vim\u002F"},children:[{type:a,value:"Comment automatiser une tâche avec "},{type:b,tag:e,props:{},children:[{type:a,value:i}]},{type:a,value:" en utilisant Vim"}]},{type:a,value:"» je me suis venu aux questions sur les différences essentielles entre les versions de "},{type:b,tag:e,props:{},children:[{type:a,value:i}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le concept de "},{type:b,tag:e,props:{},children:[{type:a,value:i}]},{type:a,value:" est, un «lanceur de commandes» planifié pour les systèmes UNIX. Le nom est inspiré du dieu grec Chronos."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ayant déjà utilise Gentoo Linux j'avait vu qu'il était possible d'utiliser plus d'une version de CRON mais je ne m'était jamais penché sur les différences. Je l'ai fait aujourd'hui."}]},{type:a,value:c},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:p}]},{type:a,value:"\nGénéralement chaque distribution de système d'exploitation UNIX (Linux, Unix, Qnx, etc) a son lot d'outils standards dont CRON fait partie. Chaque éditeur de distribution choisit sa version préférée mais permet d'interchanger (avec "},{type:b,tag:f,props:{href:"http:\u002F\u002Fwiki.debian.org\u002FDebianAlternatives"},children:[{type:a,value:"Alternatives sous Debian"}]},{type:a,value:", par exemple).\n"},{type:b,tag:r,props:{},children:[{type:a,value:"Versions de "},{type:b,tag:e,props:{},children:[{type:a,value:i}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:s}]},{type:a,value:"\nLa différence d'"},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" avec "},{type:b,tag:e,props:{},children:[{type:a,value:"cron"}]},{type:a,value:" (traditionnel) est le fait qu'Anacron ne roule pas en permanence comme un démon en arrière plan. Il est idéal sur des système qui ne roule pas nécessairement 24 heures par jour ou avec peu de ressources processeur.\n"},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Fanacron.sourceforge.net\u002F"},children:[{type:a,value:j}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"vixie-cron"}]},{type:a,value:"\nLa version de cron la plus utilisée (selon mon expérience, notamment sous les installation par défaut de Ubuntu, Debian et Red Hat et CentOS)\n"},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Ftroy.jdmz.net\u002Fcron\u002F"},children:[{type:a,value:j}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"bcron"}]},{type:a,value:"\nL'auteur a crée cette version car il avait besoin de précision concernant les délais entre les commandes et les changements de saisons (Heure d'été).\n"},{type:b,tag:d,props:{},children:[{type:a,value:"J'ai remarqué plusieurs autres outils intéressant que l'auteur a publié. Je l'ai ajouté a mes marque-pages."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"fcron"}]},{type:a,value:"\nL'auteur a crée cette version de cron dans l'optique que la machine peut ne pas être allumée 24\u002F24 et 7 jours\u002F7. fcron se base plutôt sur le temps que le système fonctionne (le «uptime») plutot qu'un moment précis. L'auteur dit que fcron veut remplacer Vixie-cron et anacron mais en "},{type:b,tag:e,props:{},children:[{type:a,value:"mieux"}]},{type:a,value:".\n"},{type:b,tag:d,props:{},children:[{type:a,value:"Le genre de tâche qu'on peut faire est:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:t},{type:b,tag:u,props:{},children:[{type:a,value:"Lance une commande aux chaque 3heures que le système est allumé"}]},{type:a,value:t},{type:b,tag:u,props:{},children:[{type:a,value:"Lance une commande au moins une fois entre 3h00 am et 6h00 am tout les jours."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{href:"http:\u002F\u002Ffcron.free.fr\u002F"},children:[{type:a,value:j}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"incron"}]},{type:a,value:"\nincron est une fonctionnalité cron a l'application inotify qui est un système basé sur le système de fichiers plutôt que sur des plages de temps. Un cas d'utilisation serait, par exemple, de pouvoir lancer une commande lorsqu'un logrotate a été lancé ou si un fichier a été ajouté dans un dossier.\n"},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Flinux.die.net\u002Fman\u002F5\u002Fincron.conf"},children:[{type:a,value:"pages manuel"}]},{type:a,value:" - "},{type:b,tag:f,props:{href:"http:\u002F\u002Finotify.aiken.cz\u002F"},children:[{type:a,value:j}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Autres versions"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Avez-vous utilisé l'un d'eux dans vos projets?"}]}]},text:"---\nlocale: fr-CA\ntitle: Les différentes versions du service de tâches planifié CRON\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2010\u002F04\u002Fles-differentes-versions-du-service-de-taches-planifie-cron\u002F\nstatus: publish\nrevising: true\ncreated: '2010-04-19'\nupdated: '2013-03-27'\ntags:\n  - linux\n  - outils\n  - techniques\n  - unix\n  - vocabulaire\ncategories:\n  - tranche-de-vie\nexcerpt: ''\n---\n\n\u003Cimg class=\"size-full wp-image-2104\" style=\"float: right; border: 0px;\" title=\"Une horloge\" src=\"https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2010\u002F04\u002FClock-icon.png\" alt=\"\" width=\"205\" height=\"205\" \u002F\u003ESuite a mon article «\u003Ca href=\"\u002Fblog\u002F2010\u002F04\u002Fcomment-automatiser-une-tache-avec-cron-en-utilisant-vim\u002F\"\u003EComment automatiser une tâche avec \u003Cem\u003ECRON\u003C\u002Fem\u003E en utilisant Vim\u003C\u002Fa\u003E» je me suis venu aux questions sur les différences essentielles entre les versions de \u003Cem\u003ECRON\u003C\u002Fem\u003E.\n\nLe concept de \u003Cem\u003ECRON\u003C\u002Fem\u003E est, un «lanceur de commandes» planifié pour les systèmes UNIX. Le nom est inspiré du dieu grec Chronos.\n\nAyant déjà utilise Gentoo Linux j'avait vu qu'il était possible d'utiliser plus d'une version de CRON mais je ne m'était jamais penché sur les différences. Je l'ai fait aujourd'hui.\n\n\u003C!--more--\u003E\n\u003Ch3\u003EUne question de choix et de distribution\u003C\u002Fh3\u003E\nGénéralement chaque distribution de système d'exploitation UNIX (Linux, Unix, Qnx, etc) a son lot d'outils standards dont CRON fait partie. Chaque éditeur de distribution choisit sa version préférée mais permet d'interchanger (avec \u003Ca href=\"http:\u002F\u002Fwiki.debian.org\u002FDebianAlternatives\"\u003EAlternatives sous Debian\u003C\u002Fa\u003E, par exemple).\n\u003Ch3\u003EVersions de \u003Cem\u003ECRON\u003C\u002Fem\u003E\u003C\u002Fh3\u003E\n\u003Ch4\u003EAnacron\u003C\u002Fh4\u003E\nLa différence d'\u003Cem\u003EAnacron\u003C\u002Fem\u003E avec \u003Cem\u003Ecron\u003C\u002Fem\u003E (traditionnel) est le fait qu'Anacron ne roule pas en permanence comme un démon en arrière plan. Il est idéal sur des système qui ne roule pas nécessairement 24 heures par jour ou avec peu de ressources processeur.\n\n\u003Ca href=\"http:\u002F\u002Fanacron.sourceforge.net\u002F\"\u003Esite officiel\u003C\u002Fa\u003E\n\u003Ch4\u003Evixie-cron\u003C\u002Fh4\u003E\nLa version de cron la plus utilisée (selon mon expérience, notamment sous les installation par défaut de Ubuntu, Debian et Red Hat et CentOS)\n\n\u003Ca href=\"http:\u002F\u002Ftroy.jdmz.net\u002Fcron\u002F\"\u003Esite officiel\u003C\u002Fa\u003E\n\u003Ch4\u003Ebcron\u003C\u002Fh4\u003E\nL'auteur a crée cette version car il avait besoin de précision concernant les délais entre les commandes et les changements de saisons (Heure d'été).\n\nJ'ai remarqué plusieurs autres outils intéressant que l'auteur a publié. Je l'ai ajouté a mes marque-pages.\n\u003Ch4\u003Efcron\u003C\u002Fh4\u003E\nL'auteur a crée cette version de cron dans l'optique que la machine peut ne pas être allumée 24\u002F24 et 7 jours\u002F7. fcron se base plutôt sur le temps que le système fonctionne (le «uptime») plutot qu'un moment précis. L'auteur dit que fcron veut remplacer Vixie-cron et anacron mais en \u003Cem\u003Emieux\u003C\u002Fem\u003E.\n\nLe genre de tâche qu'on peut faire est:\n\u003Cul\u003E\n\t\u003Cli\u003ELance une commande aux chaque 3heures que le système est allumé\u003C\u002Fli\u003E\n\t\u003Cli\u003ELance une commande au moins une fois entre 3h00 am et 6h00 am tout les jours.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ca href=\"http:\u002F\u002Ffcron.free.fr\u002F\"\u003Esite officiel\u003C\u002Fa\u003E\n\u003Ch4\u003Eincron\u003C\u002Fh4\u003E\nincron est une fonctionnalité cron a l'application inotify qui est un système basé sur le système de fichiers plutôt que sur des plages de temps. Un cas d'utilisation serait, par exemple, de pouvoir lancer une commande lorsqu'un logrotate a été lancé ou si un fichier a été ajouté dans un dossier.\n\n\u003Ca href=\"http:\u002F\u002Flinux.die.net\u002Fman\u002F5\u002Fincron.conf\"\u003Epages manuel\u003C\u002Fa\u003E - \u003Ca href=\"http:\u002F\u002Finotify.aiken.cz\u002F\"\u003Esite officiel\u003C\u002Fa\u003E\n\n\u003Cstrong\u003EAutres versions\u003C\u002Fstrong\u003E\n\nAvez-vous utilisé l'un d'eux dans vos projets?\n",dir:"\u002Fblog\u002F2010\u002F04",path:"\u002Fblog\u002F2010\u002F04\u002Fles-differentes-versions-du-service-de-taches-planifie-cron",extension:".md",slug:v,createdAt:w,updatedAt:w,category:n},coverImage:{toc:[],body:{type:l,children:[]},text:h},month:"04",next:{locale:k,title:"Comment dire à Apache le mime-type d'un document Office 2007",path:"\u002Fblog\u002F2010\u002F04\u002Fcomment-dire-a-apache-le-mime-type-dun-document-office-2007",slug:"comment-dire-a-apache-le-mime-type-dun-document-office-2007"},preamble:{toc:[],body:{type:l,children:[]},text:h},prettyfiedTemporalDate:{prettified:"lundi 19 avril 2010",temporalDate:"2010-04-19"},prev:{locale:k,title:"La semaine Des logiciels libres à Montréal «MonDev»",path:"\u002Fblog\u002F2010\u002F04\u002Fla-semaine-des-logiciels-libres-a-montreal-mondev",slug:"la-semaine-des-logiciels-libres-a-montreal-mondev"},slug:v,year:"2010"}],fetch:[],mutations:void 0}}("text","element","\n","p","em","a","h4","","CRON","site officiel","fr-CA","root","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2010\u002F04\u002Fles-differentes-versions-du-service-de-taches-planifie-cron\u002F","tranche-de-vie",3,"Une question de choix et de distribution",205,"h3","Anacron","\n\t","li","les-differentes-versions-du-service-de-taches-planifie-cron","2024-10-24T19:43:51.699Z")));