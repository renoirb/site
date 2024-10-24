__NUXT_JSONP__("/blog/2015/01/quelques-bouts-de-code-pour-automatiser-le-deploiement", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){z[0]="https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F01\u002Fautomate-all-the-things-300x284.png 300w";z[1]="https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F01\u002Fautomate-all-the-things-1024x971.png 1024w";z[2]="https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F01\u002Fautomate-all-the-things.png 1600w";return {data:[{},{},{},{canonical:v,content:{title:"Quelques bouts de code pour automatiser le déploiement",locale:w,created:"2015-01-28T00:00:00.000Z",updated:"2015-02-17T00:00:00.000Z",canonical:v,status:"publish",revising:j,migrateLinks:l,migrateImages:j,gallery:j,caption:j,categories:[x],tags:["cloud-computing","development","operations","salt-stack"],coverImage:{src:y,srcset:z,sizes:A,alt:B,text:C},preamble:{disable:l,text:D},excerpt:"Avez-vous déjà voulu automatiser le déploiement de votre infrastructure serveurs web de A-Z? C’est exactement sur quoi je travaille en ce moment.",toc:[{id:E,depth:m,text:F},{id:G,depth:m,text:H},{id:I,depth:m,text:J}],body:{type:n,children:[{type:b,tag:k,props:{},children:[{type:a,value:"Ce billet n’est qu’un simple «link dump» pour retrouver parmi plusieurs notes\néparpillés. Je compte éventuellement publier la totalité de mon travail dans des\nprojets publics sur GitHub une fois la boucle complétée. Le tout sans fournir\nles données privés, évidemment."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Faire le saut vers l’automatisation demande beaucoup de préparation et je prends\nle temps de publier ici quelques bouts de code que j’ai écrits pour compléter la\ntâche."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Au final, mon projet permettra de déployer un site qui s’appuie sur un cluster\nMariaDB, Memcached, une stack LAMP («prefork») lorsqu’on a pas le choix, une\nstack [HHVM\u002Fphp5-fpm, Python, nodejs] app servers pour le reste servi par un\nfrontend NGINX. Mes scripts vont déployer une série d’applications web avec\ntoutes les dépendances qui les adaptent géré dans leur propre «git repo» parent.\nDans mon cas, ce sera: WordPress, MediaWiki, Discourse, et quelques autres."}]},{type:a,value:c},{type:b,tag:o,props:{id:E},children:[{type:b,tag:e,props:{href:"#requis",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Instantiation à partir de commandes "},{type:b,tag:"code",props:{},children:[{type:a,value:"nova"}]},{type:a,value:" du terminal, crée une nouvelle VM\nmise à jour et son nom définit son rôle dans le réseau interne"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Les VMs sont uniquement accessible par un Jump box (i.e. réseau interne\nseulement)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Un système regarde si un répertoire clone git à eu des changements sur la\nbranche «master», lance un événement si c’est le cas"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Chaque machine sont construites à partir d’une VM minimale. Dans ce cas-ci;\nUbuntu 14.04 LTS"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Système doit s’assurer que TOUTES les mises à jour sont appliqués\nrégulièrement"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Système doit s’assurer que ses services interne sont fonctionnels"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans le cas d’une situation où une VM atteint le seuil critique OOM, la VM\nredémarre automatiquement"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le nom de la VM décrit son rôle, et les scripts d’installation installent les\nrequis qui y sont affectés"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Les configurations utilisent les détails (e.g. adresses IP privés et\npubliques) de chaque pool (e.g. redis, memcache, mariadb) et ajuste\nautomatiquement les configurations dans chaque application"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"... etc."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:G},children:[{type:b,tag:e,props:{href:"#bouts-de-code",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F01\u002Fcreate-mariadb-cluster-replication-ssl-salt-stack\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Installation automatisée d’un cluster MariaDB avec réplication SSL"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F6ecf0d852a9148741bef",rel:[f,g,h],target:i},children:[{type:a,value:"Configuration SSH pour accéder aux VMs du réseau interne"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F437f763b948c926ca7ba",rel:[f,g,h],target:i},children:[{type:a,value:"Vérifier si un git repo a changé"}]},{type:a,value:", j’ai prévu faire un \"salt-call\" qui\ntrigger un événement Salt Reactor pour lancer un build run"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:K,rel:[f,g,h],target:i},children:[{type:a,value:"Configuration Monit"}]},{type:a,value:" pour s’assurer que les services «sont up and running»"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:L,rel:[f,g,h],target:i},children:[{type:a,value:"Installer automatiquement une VM enregistrée au salt-master"}]},{type:a,value:" via Salt\nReactor. Le nom de la VM déclare son rôle, le reste se fait tout seul\n(incomplet mais un début)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgist.github.com\u002Frenoirb\u002F1b42edac44c723185c9d",rel:[f,g,h],target:i},children:[{type:a,value:"Installer des plugins WordPress à partir des repos Git\u002FSVN\u002FFichiers Zip"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:M,rel:[f,g,h],target:i},children:[{type:a,value:"Installation automatique d’un salt-master"}]},{type:a,value:" et des dépendances de build"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgist.github.com\u002Frenoirb\u002Fb2e0222ad52e5d453298",rel:[f,g,h],target:i},children:[{type:a,value:"Définir le rôle d’une VM basé sur son nom + TLD"}]},{type:a,value:" (e.g.\nredis-sessions.production.wpdn)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgist.github.com\u002Frenoirb\u002F11258261",rel:[f,g,h],target:i},children:[{type:a,value:"Vérifier avec l’origine d’un clone git s’il y a des changements upstream,\nlancer un événement si c’est le cas"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:L,rel:[f,g,h],target:i},children:[{type:a,value:"Automatiser des commands selon certains événemnts dans un cluster géré par\nSalt"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:M,rel:[f,g,h],target:i},children:[{type:a,value:"Automatiser l’installation d’un salt master basé uniquement sur une série de\ngit repos et d’un bootstrapper script"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002Fe925fee9b6085d7cbec4",rel:[f,g,h],target:i},children:[{type:a,value:"Automatiser les backups ElasticSearch"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:K,rel:[f,g,h],target:i},children:[{type:a,value:"Système pour s’assurer que tous les services son fonctionnels, comment tester\ns’ils fonctionnent et comment les redémarrer"}]},{type:a,value:" avec "},{type:b,tag:"strong",props:{},children:[{type:a,value:"Monit"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:I},children:[{type:b,tag:e,props:{href:"#billets-inspirants-sur-le-sujet",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fblog.hendrikvolkmer.de\u002F2013\u002F04\u002F03\u002Fthere-will-be-no-reliable-cloud-part-1\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"There will be no reliable cloud (part 1)"}]},{type:a,value:N},{type:b,tag:e,props:{href:"http:\u002F\u002Fblog.hendrikvolkmer.de\u002F2013\u002F04\u002F09\u002Fthere-will-be-no-reliable-cloud-part-2\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"part 2"}]},{type:a,value:N},{type:b,tag:e,props:{href:"http:\u002F\u002Fblog.hendrikvolkmer.de\u002F2013\u002F04\u002F12\u002Fthere-will-be-no-reliable-cloud-part-3\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"part 3"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fblog.hendrikvolkmer.de\u002F2013\u002F10\u002F11\u002Fthe-missing-piece-operating-systems-for-web-scale-cloud-apps\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"The missing piece operating systems for \"Web Scale\" Cloud Apps"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.rightbrainnetworks.com\u002Fblog\u002Fwhy-an-ec2-instance-isnt-a-server\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Why an X (VM) \"instance\" isn’t a server"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fsamj.net\u002F2012\u002F03\u002F08\u002Fsimplifying-cloud-reliability\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Simplifying cloud reliability"}]}]},{type:a,value:c}]},{type:a,value:c}]},text:"---\ntitle: Quelques bouts de code pour automatiser le déploiement\nlocale: fr-CA\ncreated: 2015-01-28\nupdated: 2015-02-17\ncanonical: 'https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F01\u002Fquelques-bouts-de-code-pour-automatiser-le-deploiement\u002F'\nstatus: publish\nrevising: false\nmigrateLinks: true\nmigrateImages: false\ngallery: false\ncaption: false\ncategories:\n  - projects\ntags:\n  - cloud-computing\n  - development\n  - operations\n  - salt-stack\ncoverImage:\n  src: ~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F01\u002Fautomate-all-the-things-300x284.png\n  srcset:\n    - https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F01\u002Fautomate-all-the-things-300x284.png 300w\n    - https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F01\u002Fautomate-all-the-things-1024x971.png 1024w\n    - https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F01\u002Fautomate-all-the-things.png 1600w\n  sizes: \u003E-\n    (max-width: 300px) 100vw, 300px\n  alt: \u003E-\n    Illustration souvent utilisée pour un mème de l’Internet d’un dessin fait rapidement à la main illustrant un personnage avec une lumière éclatante derrière comme l’introduction d’un super héros. Le personnage tient un balai d’une main et brandissant l’autre bras et les yeux pas très alignés. Il proclame Automatisons tout!\n  text: |\n    Automatisons Tout!!1\npreamble:\n  disable: true\n  text: ' '\nexcerpt: \u003E-\n  Avez-vous déjà voulu automatiser le déploiement de votre infrastructure\n  serveurs web de A-Z? C’est exactement sur quoi je travaille en ce moment.\n---\n\nCe billet n’est qu’un simple «link dump» pour retrouver parmi plusieurs notes\néparpillés. Je compte éventuellement publier la totalité de mon travail dans des\nprojets publics sur GitHub une fois la boucle complétée. Le tout sans fournir\nles données privés, évidemment.\n\nFaire le saut vers l’automatisation demande beaucoup de préparation et je prends\nle temps de publier ici quelques bouts de code que j’ai écrits pour compléter la\ntâche.\n\nAu final, mon projet permettra de déployer un site qui s’appuie sur un cluster\nMariaDB, Memcached, une stack LAMP («prefork») lorsqu’on a pas le choix, une\nstack \\[HHVM\u002Fphp5-fpm, Python, nodejs\\] app servers pour le reste servi par un\nfrontend NGINX. Mes scripts vont déployer une série d’applications web avec\ntoutes les dépendances qui les adaptent géré dans leur propre «git repo» parent.\nDans mon cas, ce sera: WordPress, MediaWiki, Discourse, et quelques autres.\n\n## Requis\n\n- Instantiation à partir de commandes `nova` du terminal, crée une nouvelle VM\n  mise à jour et son nom définit son rôle dans le réseau interne\n- Les VMs sont uniquement accessible par un Jump box (i.e. réseau interne\n  seulement)\n- Un système regarde si un répertoire clone git à eu des changements sur la\n  branche «master», lance un événement si c’est le cas\n- Chaque machine sont construites à partir d’une VM minimale. Dans ce cas-ci;\n  Ubuntu 14.04 LTS\n- Système doit s’assurer que TOUTES les mises à jour sont appliqués\n  régulièrement\n- Système doit s’assurer que ses services interne sont fonctionnels\n- Dans le cas d’une situation où une VM atteint le seuil critique OOM, la VM\n  redémarre automatiquement\n- Le nom de la VM décrit son rôle, et les scripts d’installation installent les\n  requis qui y sont affectés\n- Les configurations utilisent les détails (e.g. adresses IP privés et\n  publiques) de chaque pool (e.g. redis, memcache, mariadb) et ajuste\n  automatiquement les configurations dans chaque application\n- ... etc.\n\n## Bouts de code\n\n- [Installation automatisée d’un cluster MariaDB avec réplication SSL][0]\n- [Configuration SSH pour accéder aux VMs du réseau interne][1]\n- [Vérifier si un git repo a changé][2], j’ai prévu faire un \"salt-call\" qui\n  trigger un événement Salt Reactor pour lancer un build run\n- [Configuration Monit][3] pour s’assurer que les services «sont up and running»\n- [Installer automatiquement une VM enregistrée au salt-master][4] via Salt\n  Reactor. Le nom de la VM déclare son rôle, le reste se fait tout seul\n  (incomplet mais un début)\n- [Installer des plugins WordPress à partir des repos Git\u002FSVN\u002FFichiers Zip][5]\n- [Installation automatique d’un salt-master][6] et des dépendances de build\n- [Définir le rôle d’une VM basé sur son nom + TLD][7] (e.g.\n  redis-sessions.production.wpdn)\n- [Vérifier avec l’origine d’un clone git s’il y a des changements upstream,\n  lancer un événement si c’est le cas][8]\n- [Automatiser des commands selon certains événemnts dans un cluster géré par\n  Salt][4]\n- [Automatiser l’installation d’un salt master basé uniquement sur une série de\n  git repos et d’un bootstrapper script][6]\n- [Automatiser les backups ElasticSearch][9]\n- [Système pour s’assurer que tous les services son fonctionnels, comment tester\n  s’ils fonctionnent et comment les redémarrer][3] avec **Monit**\n\n## Billets inspirants sur le sujet\n\n- [There will be no reliable cloud (part 1)][10], [part 2][11], [part 3][12]\n- [The missing piece operating systems for \"Web Scale\" Cloud Apps][13]\n- [Why an X (VM) \"instance\" isn’t a server][14]\n- [Simplifying cloud reliability][15]\n\n\u003C!--#TODO-Display-Or-Migrate-Gists--\u003E\n\n[0]:\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F01\u002Fcreate-mariadb-cluster-replication-ssl-salt-stack\u002F\n[1]: https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F6ecf0d852a9148741bef\n[2]: https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F437f763b948c926ca7ba\n[3]: https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F780307ff289864ba02f5\n[4]: https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F563cb12326b92b22a452\n[5]: https:\u002F\u002Fgist.github.com\u002Frenoirb\u002F1b42edac44c723185c9d\n[6]: https:\u002F\u002Fgist.github.com\u002Frenoirb\u002Fa66b533c46ef7a8de8e3\n[7]: https:\u002F\u002Fgist.github.com\u002Frenoirb\u002Fb2e0222ad52e5d453298\n[8]: https:\u002F\u002Fgist.github.com\u002Frenoirb\u002F11258261\n[9]: https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002Fe925fee9b6085d7cbec4\n[10]:\n  http:\u002F\u002Fblog.hendrikvolkmer.de\u002F2013\u002F04\u002F03\u002Fthere-will-be-no-reliable-cloud-part-1\u002F\n[11]:\n  http:\u002F\u002Fblog.hendrikvolkmer.de\u002F2013\u002F04\u002F09\u002Fthere-will-be-no-reliable-cloud-part-2\u002F\n[12]:\n  http:\u002F\u002Fblog.hendrikvolkmer.de\u002F2013\u002F04\u002F12\u002Fthere-will-be-no-reliable-cloud-part-3\u002F\n[13]:\n  http:\u002F\u002Fblog.hendrikvolkmer.de\u002F2013\u002F10\u002F11\u002Fthe-missing-piece-operating-systems-for-web-scale-cloud-apps\u002F\n[14]: http:\u002F\u002Fwww.rightbrainnetworks.com\u002Fblog\u002Fwhy-an-ec2-instance-isnt-a-server\u002F\n[15]: http:\u002F\u002Fsamj.net\u002F2012\u002F03\u002F08\u002Fsimplifying-cloud-reliability\u002F\n",dir:"\u002Fblog\u002F2015\u002F01",path:"\u002Fblog\u002F2015\u002F01\u002Fquelques-bouts-de-code-pour-automatiser-le-deploiement",extension:".md",slug:O,createdAt:P,updatedAt:P,category:x},coverImage:{toc:[],body:{type:n,children:[{type:b,tag:k,props:{},children:[{type:a,value:"Automatisons Tout!!1"}]}]},text:C,src:y,srcset:z,sizes:A,alt:B},month:"01",next:{title:"HHVM et Hack; ce qui les distingue de PHP",locale:w,path:"\u002Fblog\u002F2015\u002F02\u002Fhhvm-et-hack-ce-qui-les-distingue-de-php",slug:"hhvm-et-hack-ce-qui-les-distingue-de-php"},preamble:{toc:[],body:{type:n,children:[]},text:D,disable:l},prettyfiedTemporalDate:{prettified:"mercredi 28 janvier 2015",temporalDate:"2015-01-28"},prev:{title:"Create a MariaDB cluster with replication over SSL with Salt Stack",locale:"en-CA",path:"\u002Fblog\u002F2015\u002F01\u002Fcreate-mariadb-cluster-replication-ssl-salt-stack",slug:"create-mariadb-cluster-replication-ssl-salt-stack"},slug:O,year:"2015"}],fetch:[],mutations:void 0}}("text","element","\n","li","a","nofollow","noopener","noreferrer","_blank",false,"p",true,2,"root","h2","true",-1,"span","icon","icon-link","ul","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F01\u002Fquelques-bouts-de-code-pour-automatiser-le-deploiement\u002F","fr-CA","projects","~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F01\u002Fautomate-all-the-things-300x284.png",Array(3),"(max-width: 300px) 100vw, 300px","Illustration souvent utilisée pour un mème de l’Internet d’un dessin fait rapidement à la main illustrant un personnage avec une lumière éclatante derrière comme l’introduction d’un super héros. Le personnage tient un balai d’une main et brandissant l’autre bras et les yeux pas très alignés. Il proclame Automatisons tout!","Automatisons Tout!!1\n"," ","requis","Requis","bouts-de-code","Bouts de code","billets-inspirants-sur-le-sujet","Billets inspirants sur le sujet","https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F780307ff289864ba02f5","https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F563cb12326b92b22a452","https:\u002F\u002Fgist.github.com\u002Frenoirb\u002Fa66b533c46ef7a8de8e3",", ","quelques-bouts-de-code-pour-automatiser-le-deploiement","2024-10-24T19:50:04.929Z")));