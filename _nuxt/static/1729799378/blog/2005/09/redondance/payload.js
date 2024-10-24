__NUXT_JSONP__("/blog/2005/09/redondance", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:[{},{},{},{canonical:k,content:{title:"Redondance des serveurs : stratégie pour améliorer la résilience des sites web",locale:h,created:"2005-09-21T00:00:00.000Z",updated:"2023-11-15T00:00:00.000Z",canonical:k,status:"publish",revising:e,caption:i,caracteresBizzares:e,gallery:i,migrateCode:e,migrateImages:i,migrateLinks:e,categories:[l],tags:["entrepreneurial-life"],excerpt:"Je partage mes réflexions et mes récentes découvertes concernant les techniques d'amélioration de la résilience des sites web. J'y explore particulièrement l'utilisation de BIND et du mécanisme de 'Round Robin' dans le contexte d'une architecture multi-serveurs. Cette approche implique la mise en place de plusieurs serveurs, chacun hébergeant une copie identique des sites, et la configuration d'un système de distribution des requêtes permettant d'alterner efficacement entre les serveurs disponibles.",toc:[],body:{type:j,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Travailler avec DNS Bind8 n'est pas toujours évident pour les novices."}]},{type:a,value:c},{type:a,value:c},{type:b,tag:"rb-notice-box",props:{variant:"info",className:["my-5"]},children:[{type:a,value:c},{type:b,tag:f,props:{slot:"header"},children:[{type:a,value:"Renoir de 2024:"}]},{type:a,value:"\nJe dois dire qu’a l'époque ce n'était pas évident car il n’y avait pas autant de documentation et tutoriels. Mais aussi, pour être honnête en 2005 j’étais très débutant!\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je suis a tenter de permettre une redondance dans mes sites web. On dirait que tous les «"},{type:b,tag:g,props:{},children:[{type:a,value:"host-masters"}]},{type:a,value:"» de la planète se donnent le mot pour conserveur leur secrets concernant le "},{type:b,tag:m,props:{title:"DNSPro and Bind"},children:[{type:a,value:"RoundRobin"}]},{type:a,value:" "},{type:b,tag:m,props:{},children:[{type:a,value:"Fail Over DNS"}]},{type:a,value:" pour permettre aux sites d'aller sur une autre adresse "},{type:b,tag:n,props:{},children:[{type:a,value:"IP"}]},{type:a,value:" lorsque l'hôte manque sa résolution... et permet ainsi d'avoir quand meme un site web encore plus stable!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Erreur de vérification!"}]}]},{type:a,value:c},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Aujourd'hui, j'ai eu la brillante idée de vérifier ma configuration quand √î, Surprise!! mon domaine principal est vide... la zone dns ("},{type:b,tag:n,props:{},children:[{type:a,value:"\u002Fvar\u002Fnamed\u002F"},{type:b,tag:g,props:{},children:[{type:a,value:"mon-domaine-principal"}]},{type:a,value:".conf.db"}]},{type:a,value:") est vidée avec un truc que j'ai configuré pour le fun hier avec DirectAdmin! Vous savez l'option Sub-Domains... Bien, faites attention whiz du shell en SSH. Faites sûr que toutes vos configuraitons httpd sont bien faites DANS LE CONTROL PANEL! sinon, on peut faire le saut!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Groupe du jour"}]},{type:a,value:": Seether, "},{type:b,tag:o,props:{href:"http:\u002F\u002Fmusic.yahoo.com\u002Far-292620-discography--Seether"},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Karma and effect"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Citation du jour"}]},{type:a,value:" : Rien ne s'est fait de grand qui ne soit une espérance exagérée "},{type:b,tag:g,props:{},children:[{type:a,value:"["},{type:b,tag:o,props:{href:"http:\u002F\u002Fwww.evene.fr\u002Fcelebre\u002Fbiographie\u002Fjules-verne-777.php"},children:[{type:a,value:"Jules Verne"}]},{type:a,value:"]"}]}]}]},text:"---\ntitle: \u003E-\n  Redondance des serveurs : stratégie pour améliorer la résilience des sites web\nlocale: fr-CA\ncreated: 2005-09-21\nupdated: 2023-11-15\ncanonical: https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2005\u002F09\u002Fredondance\u002F\nstatus: publish\nrevising: true\ncaption: false\ncaracteresBizzares: true\ngallery: false\nmigrateCode: true\nmigrateImages: false\nmigrateLinks: true\ncategories:\n  - techniques\ntags:\n  - entrepreneurial-life\nexcerpt: \u003E-\n  Je partage mes réflexions et mes récentes découvertes concernant les techniques d'amélioration de la résilience des sites web. J'y explore particulièrement l'utilisation de BIND et du mécanisme de 'Round Robin' dans le contexte d'une architecture multi-serveurs. Cette approche implique la mise en place de plusieurs serveurs, chacun hébergeant une copie identique des sites, et la configuration d'un système de distribution des requêtes permettant d'alterner efficacement entre les serveurs disponibles.\n---\n\nTravailler avec DNS Bind8 n'est pas toujours évident pour les novices.\n\n\u003C!--#TODO-inline-edit Renoir de 2024--\u003E\n\u003Crb-notice-box variant=\"info\" class=\"my-5\"\u003E\n\u003Cstrong slot=\"header\"\u003ERenoir de 2024:\u003C\u002Fstrong\u003E\nJe dois dire qu’a l'époque ce n'était pas évident car il n’y avait pas autant de documentation et tutoriels. Mais aussi, pour être honnête en 2005 j’étais très débutant!\n\u003C\u002Frb-notice-box\u003E\n\n\u003Cp\u003EJe suis a tenter de permettre une redondance dans mes sites web. On dirait que tous les «\u003Cem\u003Ehost-masters\u003C\u002Fem\u003E» de la planète se donnent le mot pour conserveur leur secrets concernant le \u003Cabbr title=\"DNSPro and Bind\"\u003ERoundRobin\u003C\u002Fabbr\u003E \u003Cabbr\u003EFail Over DNS\u003C\u002Fabbr\u003E pour permettre aux sites d'aller sur une autre adresse \u003Ccode\u003EIP\u003C\u002Fcode\u003E lorsque l'hôte manque sa résolution... et permet ainsi d'avoir quand meme un site web encore plus stable!\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EErreur de vérification!\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003C!--#TODO notice caracteresBizzares √î --\u003E\n\u003Cp\u003EAujourd'hui, j'ai eu la brillante idée de vérifier ma configuration quand √î, Surprise!! mon domaine principal est vide... la zone dns (\u003Ccode\u003E\u002Fvar\u002Fnamed\u002F\u003Cem\u003Emon-domaine-principal\u003C\u002Fem\u003E.conf.db\u003C\u002Fcode\u003E) est vidée avec un truc que j'ai configuré pour le fun hier avec DirectAdmin! Vous savez l'option Sub-Domains... Bien, faites attention whiz du shell en SSH. Faites sûr que toutes vos configuraitons httpd sont bien faites DANS LE CONTROL PANEL! sinon, on peut faire le saut!\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EGroupe du jour\u003C\u002Fstrong\u003E: Seether, \u003Ca href=\"http:\u002F\u002Fmusic.yahoo.com\u002Far-292620-discography--Seether\"\u003E\u003Cem\u003EKarma and effect\u003C\u002Fem\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ECitation du jour\u003C\u002Fstrong\u003E : Rien ne s'est fait de grand qui ne soit une espérance exagérée \u003Cem\u003E[\u003Ca href=\"http:\u002F\u002Fwww.evene.fr\u002Fcelebre\u002Fbiographie\u002Fjules-verne-777.php\"\u003EJules Verne\u003C\u002Fa\u003E]\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n",dir:"\u002Fblog\u002F2005\u002F09",path:"\u002Fblog\u002F2005\u002F09\u002Fredondance",extension:".md",slug:p,createdAt:q,updatedAt:q,category:l},coverImage:{toc:[],body:{type:j,children:[]},text:r},month:"09",next:{title:"Journée blanche d’inquiétudes",locale:h,path:"\u002Fblog\u002F2005\u002F09\u002Fjournee-blanche-d-inquietudes",slug:"journee-blanche-d-inquietudes"},preamble:{toc:[],body:{type:j,children:[]},text:r},prettyfiedTemporalDate:{prettified:"mercredi 21 septembre 2005",temporalDate:"2005-09-21"},prev:{title:"Premier billet",locale:h,path:"\u002Fblog\u002F2005\u002F09\u002Ffirst-post",slug:"first-post"},slug:p,year:"2005"}],fetch:[],mutations:void 0}}("text","element","\n","p",true,"strong","em","fr-CA",false,"root","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2005\u002F09\u002Fredondance\u002F","techniques","abbr","code","a","redondance","2024-10-24T19:43:51.663Z","")));