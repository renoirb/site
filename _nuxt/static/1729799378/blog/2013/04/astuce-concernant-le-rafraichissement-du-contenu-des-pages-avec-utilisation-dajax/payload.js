__NUXT_JSONP__("/blog/2013/04/astuce-concernant-le-rafraichissement-du-contenu-des-pages-avec-utilisation-dajax", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{},{},{},{canonical:k,content:{locale:l,title:"Astuce concernant le rafraîchissement du contenu des pages avec utilisation d'AJAX en exemple",canonical:k,status:"publish",revising:m,caption:f,caracteresBizzares:f,gallery:f,migrateCode:m,migrateImages:f,migrateLinks:f,created:"2013-04-12",updated:"2013-05-24",categories:[n],tags:["accessibility","javascript"],description:"Réponse donnée a une question concernant l'Accessibilité et le rafraichissement de contenu en utilisant les promise object AJAX de jQuery 1.7+",title_alternate:"Astuce concernant le rafraîchissement du contenu avec AJAX",excerpt:"En ce qui concerne l'Accessibilité et l'AJAX, contrairement a ce que le WCAG1 disait (éviter d'utiliser), le WCAG2 est maintenant plus flexible. Selon ma compréhension, voici ce que je pense est nécessaire pour que l'on puisse utiliser AJAX de façon accessible.",toc:[{depth:o,text:p},{depth:o,text:q}],body:{type:h,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Parmi les listes de courriels que je suis, "},{type:b,tag:g,props:{href:"http:\u002F\u002Flistes.rezo.net\u002Fmailman\u002Flistinfo\u002Faccesstech",title:"La liste accesstech est une liste de discussion francophone technique sur l'accessibilité."},children:[{type:a,value:"Accesstech"}]},{type:a,value:", une question a attiré mon attention et j'ai pensé partager ici la réponse que j'ai donnée avec un exemple en appui."}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:r},{type:b,tag:d,props:{},children:[{type:a,value:"Concernant le rafraîchissement du contenu des pages avec utilisation d'AJAX, a-t-on trouvé une solution pour\n  qu'un lecteur d'écran le détecte et retourne l'information à l'utilisateur ?"}]},{type:a,value:r},{type:b,tag:d,props:{},children:[{type:a,value:"Si non, quelles solutions alternatives avez-vous trouvées ( en dehors de recharger la page intégralement) ?"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je ne suis pas expert, mais je pense que ce qui arrive et modifie le DOM de façon asynchrone en regard de l'accessibilité, demande au minimum:"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"1. Faire une ecriture en creeant les elements DOM, puis les inserer"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Avec jQuery, par exemple, il est possible de créer un élément DOM de cette façon. Mais attention, l'élément existe dans le document qu'au moment de son insertion via la commande "},{type:b,tag:e,props:{},children:[{type:a,value:"element.append()"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u003Cscript\u003E\n\u002F\u002F dom ready...\nvar newNode = JQuery('\u003Cdiv id=patate\u003EAllo\u003C\u002Fdiv\u003E');\n\u003C\u002Fscript\u003E\n"}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"2. Assurer de donner le focus sur le nouvel element inséré"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Une fois l'élément construit, il est possible d'ajouter des attributs et évidemment de l'introduire, comme suit:"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u003Cscript\u003E\n\u002F\u002F ...\nnewNode.appendTo('body');\nnewNode.trigger('focus');\n\u002F\u002F ...\n\u003C\u002Fscript\u003E\n"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ici, l'élément est inséré à l'intérieur du "},{type:b,tag:e,props:{},children:[{type:a,value:"body"}]},{type:a,value:", puis un événement "},{type:b,tag:e,props:{},children:[{type:a,value:"focus"}]},{type:a,value:" est appelé. Notez ici que "},{type:b,tag:g,props:{href:"http:\u002F\u002Fapi.jquery.com\u002Ftrigger\u002F",title:"Trigger events using jQuery trigger() method"},children:[{type:a,value:"lancer un événement de cette façon"}]},{type:a,value:" peut être fait pour a peu près n'importe quel type d'événement, on "},{type:b,tag:g,props:{href:"http:\u002F\u002Fhtmlcsstherightway.org\u002F#creating_and_using_jquery_events_the_thing_i_wished_i_knew_before"},children:[{type:a,value:"peut même créer nos propres événements"}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"3. Bonus: Faire la muse a jour de façon Asynchrone avec jQuery 1.7+ avec le concept de 'promise':"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Étant donné la nature d'AJAX; dans le sens que la resource demandée n'est pas nécessairement disponible à l'exact moment où la requête est faite. jQuery a instauré un concept qui permet de travailler avec l'objet demandé, et agir au moment de son arrivée: "},{type:b,tag:g,props:{href:"http:\u002F\u002Fapi.jquery.com\u002FjQuery.ajax\u002F"},children:[{type:a,value:"promise"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans ce sens, il est maintenant recommandé d'utiliser un callback et le déclarer a la fin de l'action ajax, comme suit:"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u003Cscript\u003E\nvar promiseCallback = function(data){   jQuery('#patate').replaceWith(jQuery(data)).trigger('focus');   };\n\u002F\u002F assumant que c'est du html reçu de \u002Fallo.html\nvar configObj ={dataType: 'html'};\njQuery.ajax('\u002Fallo.html', configObj).done( promiseCallback );\n\u003C\u002Fscript\u003E\n"}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ce qui est souvent oublié c'est que "},{type:b,tag:e,props:{},children:[{type:a,value:"$.ajax.done()"}]},{type:a,value:" est "},{type:b,tag:"strong",props:{},children:[{type:a,value:"executé après"}]},{type:a,value:" avoir reçu ses donnees."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"De cette facon, le refraichissement se fait quand elle est prete et le focus suivra."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Par-contre il y a des precautions a prendre: Assurez-vous que ce code est executé apres un action de l'utilisateur et non pas n'importe quand car l'evenement risque de deplacer le focus du lecteur d'ecran et perdre l'utilisateur."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Espérant que j'ai connecté quelques fils :)"}]}]},text:"---\nlocale: fr-CA\ntitle: \u003E-\n  Astuce concernant le rafraîchissement du contenu des pages avec utilisation\n  d'AJAX en exemple\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F04\u002Fastuce-concernant-le-rafraichissement-du-contenu-des-pages-avec-utilisation-dajax\u002F\nstatus: publish\nrevising: true\ncaption: false\ncaracteresBizzares: false\ngallery: false\nmigrateCode: true\nmigrateImages: false\nmigrateLinks: false\ncreated: '2013-04-12'\nupdated: '2013-05-24'\ncategories:\n  - programmation\ntags:\n  - accessibility\n  - javascript\ndescription: \u003E-\n  Réponse donnée a une question concernant l'Accessibilité et le\n  rafraichissement de contenu en utilisant les promise object AJAX de jQuery\n  1.7+\ntitle_alternate: Astuce concernant le rafraîchissement du contenu avec AJAX\nexcerpt: \u003E-\n  En ce qui concerne l'Accessibilité et l'AJAX, contrairement a ce que le WCAG1\n  disait (éviter d'utiliser), le WCAG2 est maintenant plus flexible. Selon ma\n  compréhension, voici ce que je pense est nécessaire pour que l'on puisse\n  utiliser AJAX de façon accessible.\n---\n\n\u003Cp\u003EParmi les listes de courriels que je suis, \u003Ca href=\"http:\u002F\u002Flistes.rezo.net\u002Fmailman\u002Flistinfo\u002Faccesstech\" title=\"La liste accesstech est une liste de discussion francophone technique sur l'accessibilité.\"\u003EAccesstech\u003C\u002Fa\u003E, une question a attiré mon attention et j'ai pensé partager ici la réponse que j'ai donnée avec un exemple en appui.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003EConcernant le rafraîchissement du contenu des pages avec utilisation d'AJAX, a-t-on trouvé une solution pour\n  qu'un lecteur d'écran le détecte et retourne l'information à l'utilisateur ?\u003C\u002Fp\u003E\n\n  \u003Cp\u003ESi non, quelles solutions alternatives avez-vous trouvées ( en dehors de recharger la page intégralement) ?\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Ch3\u003ECe que j'ai répondu\u003C\u002Fh3\u003E\n\n\u003Cp\u003EJe ne suis pas expert, mais je pense que ce qui arrive et modifie le DOM de façon asynchrone en regard de l'accessibilité, demande au minimum:\u003C\u002Fp\u003E\n\n\u003Ch4\u003E1. Faire une ecriture en creeant les elements DOM, puis les inserer\u003C\u002Fh4\u003E\n\n\u003Cp\u003EAvec jQuery, par exemple, il est possible de créer un élément DOM de cette façon. Mais attention, l'élément existe dans le document qu'au moment de son insertion via la commande \u003Ccode\u003Eelement.append()\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E&lt;script&gt;\n\u002F\u002F dom ready...\nvar newNode = JQuery('&lt;div id=patate&gt;Allo&lt;\u002Fdiv&gt;');\n&lt;\u002Fscript&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Ch4\u003E2. Assurer de donner le focus sur le nouvel element inséré\u003C\u002Fh4\u003E\n\n\u003Cp\u003EUne fois l'élément construit, il est possible d'ajouter des attributs et évidemment de l'introduire, comme suit:\u003C\u002Fp\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E&lt;script&gt;\n\u002F\u002F ...\nnewNode.appendTo('body');\nnewNode.trigger('focus');\n\u002F\u002F ...\n&lt;\u002Fscript&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Cp\u003EIci, l'élément est inséré à l'intérieur du \u003Ccode\u003Ebody\u003C\u002Fcode\u003E, puis un événement \u003Ccode\u003Efocus\u003C\u002Fcode\u003E est appelé. Notez ici que \u003Ca href=\"http:\u002F\u002Fapi.jquery.com\u002Ftrigger\u002F\" title=\"Trigger events using jQuery trigger() method\"\u003Elancer un événement de cette façon\u003C\u002Fa\u003E peut être fait pour a peu près n'importe quel type d'événement, on \u003Ca href=\"http:\u002F\u002Fhtmlcsstherightway.org\u002F#creating_and_using_jquery_events_the_thing_i_wished_i_knew_before\"\u003Epeut même créer nos propres événements\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch4\u003E3. Bonus: Faire la muse a jour de façon Asynchrone avec jQuery 1.7+ avec le concept de 'promise':\u003C\u002Fh4\u003E\n\n\u003Cp\u003EÉtant donné la nature d'AJAX; dans le sens que la resource demandée n'est pas nécessairement disponible à l'exact moment où la requête est faite. jQuery a instauré un concept qui permet de travailler avec l'objet demandé, et agir au moment de son arrivée: \u003Ca href=\"http:\u002F\u002Fapi.jquery.com\u002FjQuery.ajax\u002F\"\u003Epromise\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EDans ce sens, il est maintenant recommandé d'utiliser un callback et le déclarer a la fin de l'action ajax, comme suit:\u003C\u002Fp\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E&lt;script&gt;\nvar promiseCallback = function(data){   jQuery('#patate').replaceWith(jQuery(data)).trigger('focus');   };\n\u002F\u002F assumant que c'est du html reçu de \u002Fallo.html\nvar configObj ={dataType: 'html'};\njQuery.ajax('\u002Fallo.html', configObj).done( promiseCallback );\n&lt;\u002Fscript&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Ch3\u003EFinalement\u003C\u002Fh3\u003E\n\n\u003Cp\u003ECe qui est souvent oublié c'est que \u003Ccode\u003E$.ajax.done()\u003C\u002Fcode\u003E est \u003Cstrong\u003Eexecuté après\u003C\u002Fstrong\u003E avoir reçu ses donnees.\u003C\u002Fp\u003E\n\n\u003Cp\u003EDe cette facon, le refraichissement se fait quand elle est prete et le focus suivra.\u003C\u002Fp\u003E\n\n\u003Cp\u003EPar-contre il y a des precautions a prendre: Assurez-vous que ce code est executé apres un action de l'utilisateur et non pas n'importe quand car l'evenement risque de deplacer le focus du lecteur d'ecran et perdre l'utilisateur.\u003C\u002Fp\u003E\n\n\u003Cp\u003EEspérant que j'ai connecté quelques fils :)\u003C\u002Fp\u003E\n",dir:"\u002Fblog\u002F2013\u002F04",path:"\u002Fblog\u002F2013\u002F04\u002Fastuce-concernant-le-rafraichissement-du-contenu-des-pages-avec-utilisation-dajax",extension:".md",slug:u,createdAt:"2024-10-24T19:43:51.716Z",updatedAt:"2024-10-24T19:43:51.717Z",category:n},coverImage:{toc:[],body:{type:h,children:[]},text:v},month:"04",next:{locale:"en-CA",title:"I have just resigned from my new job to start on an exciting project!",path:"\u002Fblog\u002F2013\u002F07\u002Fi-just-resigned-from-my-new-job-to-start-on-an-exciting-project",slug:"i-just-resigned-from-my-new-job-to-start-on-an-exciting-project"},preamble:{toc:[],body:{type:h,children:[]},text:v},prettyfiedTemporalDate:{prettified:"vendredi 12 avril 2013",temporalDate:"2013-04-12"},prev:{locale:l,title:"Enfin! J'ai refait mon site",path:"\u002Fblog\u002F2013\u002F04\u002Fenfin-jai-refait-mon-site",slug:"enfin-jai-refait-mon-site"},slug:u,year:"2013"}],fetch:[],mutations:void 0}}("text","element","\n","p","code",false,"a","root","h4","pre","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F04\u002Fastuce-concernant-le-rafraichissement-du-contenu-des-pages-avec-utilisation-dajax\u002F","fr-CA",true,"programmation",3,"Ce que j'ai répondu","Finalement","\n  ","h3",".","astuce-concernant-le-rafraichissement-du-contenu-des-pages-avec-utilisation-dajax","")));