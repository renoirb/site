__NUXT_JSONP__("/blog/2007/09/copier-un-fichier-dun-serveur-a-lautre-en-le-compressant-pour-la-route", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:[{},{},{},{canonical:k,content:{locale:h,title:"Copier un fichier d'un serveur à l'autre en le compressant pour la route via NetCat et",canonical:k,status:"publish",revising:l,migrateCode:l,created:"2007-09-25",updated:"2013-03-27",tags:["linux","outils","tutoriels"],categories:[m],excerpt:i,toc:[],body:{type:j,children:[{type:b,tag:c,props:{},children:[{type:a,value:"J'ai voulu un jour transférer des fichiers entre deux machines et les fichiers je les trouvaient lourds. Habituellement j'aurait utilisé soit "},{type:b,tag:g,props:{href:"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FRsync",target:n},children:[{type:a,value:"rsync"}]},{type:a,value:" ou "},{type:b,tag:g,props:{href:"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSCP",target:n},children:[{type:a,value:"scp"}]},{type:a,value:" mais cette fois ci je voulait utiliser un processus un peu différent. Pourquoi ne pas compresser le contenu durant le transfert?"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Une méthode de compression-transfert-décompression aurait été, traditionnellement, de lancer une commande de création d'archive, attendre qu'elle finisse... (ça peut être long)... puis transférer... (attendre)... puis se loguer sur l'hôte distant. Ensuite décompresser le fichie (ou le conserver as-is)."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Rsync est bien il permet de synchroniser BEAUCOUP de fichiers entre des machines et j'aime l'utiliser. Scp est très bien aussi il me permet de transférer des fichiers crées simplement, comme il se doit... Mais pourquoi attendre après les commandes de la procédure d'avant quand on peut tout automatiser en une seule commande?"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"En tant que "},{type:b,tag:e,props:{},children:[{type:a,value:"Geek"}]},{type:a,value:" moi même,  j'aime trouver des solutions élégantes pour faire quelque chose de la sorte sans avoir a attendre après un "},{type:b,tag:e,props:{},children:[{type:a,value:"input."}]}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Dans mon nouveau "},{type:b,tag:e,props:{},children:[{type:a,value:"blogroll"}]},{type:a,value:" j'ai découvert un "},{type:b,tag:g,props:{href:"http:\u002F\u002Fwww.hostinggeek.com\u002F"},children:[{type:a,value:"blogeur"}]},{type:a,value:" qui semble avoir les mêmes intérêts que moi  coté hosting et machines serveurs. C'est pour ça que je l'ai ajouté. Ensuite en tant que bon bilingue je vais traduire l'essentiel de "},{type:b,tag:g,props:{href:"http:\u002F\u002Fwww.hostinggeek.com\u002F2005\u002F08\u002Ftar-over-ssh.html"},children:[{type:a,value:"son post"}]},{type:a,value:" et le lier comme référence :)."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"La technique"}]}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"En gros,  il suffit de lancer la commande suivante:"}]},{type:a,value:d},{type:b,tag:"pre",props:{lang:"bash"},children:[{type:a,value:"$tar -zcf - .\u002F | ssh remoteuser@remotehost tar -C \u002Fpath\u002Fto\u002Fremote\u002Fdir -zxf -"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"C'est simple que qui se passe."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"En fait il crée une archive compressée par "},{type:b,tag:f,props:{},children:[{type:a,value:"tar"}]},{type:a,value:" du dossier courrant ("},{type:b,tag:f,props:{},children:[{type:a,value:".\u002F"}]},{type:a,value:") ou peu importe le dossier il suffit de le mentionner là.) et envoie \"l'"},{type:b,tag:e,props:{},children:[{type:a,value:"archive"}]},{type:a,value:"\" au\n"},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:" (standard output) Ensuite le pipe("},{type:b,tag:f,props:{},children:[{type:a,value:"|"}]},{type:a,value:"), attrape le contenu du "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:") puis appelle "},{type:b,tag:e,props:{},children:[{type:a,value:"ssh(secure shell) "}]},{type:a,value:"pour se connecter en connection sécurisée entre les deux machines par ligne de commande qui exécute presto une autre instance de tar et roule une décompression dans le stdin ("},{type:b,tag:f,props:{},children:[{type:a,value:"- "}]},{type:a,value:"aka. standard input)."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"La seule attrape possible c'est que le serveur distant doit avoir la commande tar disponible dans son "},{type:b,tag:e,props:{},children:[{type:a,value:"path "}]},{type:a,value:"(logue toi sur la machine et si\n"},{type:b,tag:e,props:{},children:[{type:a,value:"tar "}]},{type:a,value:"répond... c'est ok. Sinon faites \""},{type:b,tag:f,props:{},children:[{type:a,value:"$which tar"}]},{type:a,value:"\" ou \""},{type:b,tag:f,props:{},children:[{type:a,value:"$locate tar"}]},{type:a,value:"\" pour trouver le binaire."}]}]},text:"---\nlocale: fr-CA\ntitle: \u003E-\n  Copier un fichier d'un serveur à l'autre en le compressant pour la route via\n  NetCat et\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2007\u002F09\u002Fcopier-un-fichier-dun-serveur-a-lautre-en-le-compressant-pour-la-route\u002F\nstatus: publish\nrevising: true\nmigrateCode: true\ncreated: '2007-09-25'\nupdated: '2013-03-27'\ntags:\n  - linux\n  - outils\n  - tutoriels\ncategories:\n  - tranche-de-vie\nexcerpt: ''\n---\n\nJ'ai voulu un jour transférer des fichiers entre deux machines et les fichiers je les trouvaient lourds. Habituellement j'aurait utilisé soit \u003Ca href=\"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FRsync\" target=\"_blank\"\u003Ersync\u003C\u002Fa\u003E ou \u003Ca href=\"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSCP\" target=\"_blank\"\u003Escp\u003C\u002Fa\u003E mais cette fois ci je voulait utiliser un processus un peu différent. Pourquoi ne pas compresser le contenu durant le transfert?\u003C!--more--\u003E\n\nUne méthode de compression-transfert-décompression aurait été, traditionnellement, de lancer une commande de création d'archive, attendre qu'elle finisse... (ça peut être long)... puis transférer... (attendre)... puis se loguer sur l'hôte distant. Ensuite décompresser le fichie (ou le conserver as-is).\n\nRsync est bien il permet de synchroniser BEAUCOUP de fichiers entre des machines et j'aime l'utiliser. Scp est très bien aussi il me permet de transférer des fichiers crées simplement, comme il se doit... Mais pourquoi attendre après les commandes de la procédure d'avant quand on peut tout automatiser en une seule commande?\n\nEn tant que \u003Cem\u003EGeek\u003C\u002Fem\u003E moi même,  j'aime trouver des solutions élégantes pour faire quelque chose de la sorte sans avoir a attendre après un \u003Cem\u003Einput.\u003C\u002Fem\u003E\n\nDans mon nouveau \u003Cem\u003Eblogroll\u003C\u002Fem\u003E j'ai découvert un \u003Ca href=\"http:\u002F\u002Fwww.hostinggeek.com\u002F\"\u003Eblogeur\u003C\u002Fa\u003E qui semble avoir les mêmes intérêts que moi  coté hosting et machines serveurs. C'est pour ça que je l'ai ajouté. Ensuite en tant que bon bilingue je vais traduire l'essentiel de \u003Ca href=\"http:\u002F\u002Fwww.hostinggeek.com\u002F2005\u002F08\u002Ftar-over-ssh.html\"\u003Eson post\u003C\u002Fa\u003E et le lier comme référence :).\n\n\u003Cstrong\u003ELa technique\u003C\u002Fstrong\u003E\n\nEn gros,  il suffit de lancer la commande suivante:\n\u003Cpre lang=\"bash\"\u003E$tar -zcf - .\u002F | ssh remoteuser@remotehost tar -C \u002Fpath\u002Fto\u002Fremote\u002Fdir -zxf -\u003C\u002Fpre\u003E\nC'est simple que qui se passe.\n\nEn fait il crée une archive compressée par \u003Cstrong\u003Etar\u003C\u002Fstrong\u003E du dossier courrant (\u003Cstrong\u003E.\u002F\u003C\u002Fstrong\u003E) ou peu importe le dossier il suffit de le mentionner là.) et envoie \"l'\u003Cem\u003Earchive\u003C\u002Fem\u003E\" au\n\u003Cem\u003Estdout\u003C\u002Fem\u003E (standard output) Ensuite le pipe(\u003Cstrong\u003E|\u003C\u002Fstrong\u003E), attrape le contenu du \u003Cem\u003Estdout\u003C\u002Fem\u003E) puis appelle \u003Cem\u003Essh(secure shell) \u003C\u002Fem\u003Epour se connecter en connection sécurisée entre les deux machines par ligne de commande qui exécute presto une autre instance de tar et roule une décompression dans le stdin (\u003Cstrong\u003E- \u003C\u002Fstrong\u003Eaka. standard input).\n\nLa seule attrape possible c'est que le serveur distant doit avoir la commande tar disponible dans son \u003Cem\u003Epath \u003C\u002Fem\u003E(logue toi sur la machine et si\n\u003Cem\u003Etar \u003C\u002Fem\u003Erépond... c'est ok. Sinon faites \"\u003Cstrong\u003E$which tar\u003C\u002Fstrong\u003E\" ou \"\u003Cstrong\u003E$locate tar\u003C\u002Fstrong\u003E\" pour trouver le binaire.\n",dir:"\u002Fblog\u002F2007\u002F09",path:"\u002Fblog\u002F2007\u002F09\u002Fcopier-un-fichier-dun-serveur-a-lautre-en-le-compressant-pour-la-route",extension:".md",slug:p,createdAt:"2024-10-24T19:43:51.671Z",updatedAt:"2024-10-24T19:43:51.672Z",category:m},coverImage:{toc:[],body:{type:j,children:[]},text:i},month:"09",next:{locale:h,title:"Lorsque gérer un réseau peut rimer avec vigilance plutôt que réparation",path:"\u002Fblog\u002F2007\u002F09\u002Florsque-gerer-un-reseau-peut-rimer-avec-vigilance-plutot-que-reparation",slug:"lorsque-gerer-un-reseau-peut-rimer-avec-vigilance-plutot-que-reparation"},preamble:{toc:[],body:{type:j,children:[]},text:i},prettyfiedTemporalDate:{prettified:"mardi 25 septembre 2007",temporalDate:"2007-09-25"},prev:{locale:h,title:"Quelques blogs que je lis fréquemment",path:"\u002Fblog\u002F2007\u002F09\u002Fquelques-blogs-que-je-lis-frequemment",slug:"quelques-blogs-que-je-lis-frequemment"},slug:p,year:"2007"}],fetch:[],mutations:void 0}}("text","element","p","\n","em","strong","a","fr-CA","","root","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2007\u002F09\u002Fcopier-un-fichier-dun-serveur-a-lautre-en-le-compressant-pour-la-route\u002F",true,"tranche-de-vie","_blank","stdout","copier-un-fichier-dun-serveur-a-lautre-en-le-compressant-pour-la-route")));