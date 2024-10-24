__NUXT_JSONP__("/blog/2012/04/feuille-de-style-pour-imprimante-pour-les-pages-de-documentation-de-doctrine2-et-symfony2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:[{},{},{},{canonical:l,content:{locale:h,title:"Feuille de style pour imprimante pour les pages de documentation de Doctrine2 et Symfony2",canonical:l,status:"publish",revising:g,migrateCode:g,migrateImages:g,migrateLinks:g,created:"2012-04-07",updated:"2023-11-16",tags:[],categories:[],excerpt:e,toc:[{depth:i,text:m},{depth:i,text:"Documentation Doctrine2"},{depth:i,text:"Documentation Symfony2"}],body:{type:j,children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2012\u002F04\u002FScreenshot-at-2012-04-07-200750-d.png"},children:[{type:b,tag:"img",props:{className:["alignright","size-thumbnail","wp-image-2552"],title:"View of the document for print after applying my @media print css",src:"https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2012\u002F04\u002FScreenshot-at-2012-04-07-200750-d-150x150.png",alt:e,width:n,height:n},children:[]}]},{type:a,value:"Je suis  en train d'étudier activement "},{type:b,tag:f,props:{href:"http:\u002F\u002Fsymfony.com\u002F"},children:[{type:a,value:o}]},{type:a,value:" et "},{type:b,tag:f,props:{href:"http:\u002F\u002Fdoctrine-project.org\u002F"},children:[{type:a,value:p}]},{type:a,value:" car j'ai fait le saut du coté développement applicatif a temps plein."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mon apprentissage va très bien et j'ai appris beaucoup sur les meilleurs pratiques et je ne me vois plus dutout faire de php sans le Dependency Injection, les pratiques de namespacing et fonctions lambda de PHP 5.3."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Alors, pour étudier, j'ai décidé d'imprimer les pages de la documentation. Malheureusement il y a beaucoup de perte d'espace pour du contenu de navigation et temporel qui se ramasse dans mes PDF."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J'ai converti en PDF plus de cent documents, puis, finalement j'ai repassé les imprimer en ajustant certaines règles CSS."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je partage ici le CSS que j'ai élaboré pour pouvoir imprimer les documents sans avoir de perte d'espace pour le lecteur tablette."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour appliquer mon impression, j'ai simplement crée ces blocs CSS, puis inséré ces derniers dans chaque document via l'inspecteur de Google Chrome, puis imprimé."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J'ai aussi contacté les auteurss des sites respectifs pour leur proposer d'y insérer mes règles."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je pense ne pas être le seul a avoir eu besoin d'imprimer leur documentation."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"f"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:q},{type:b,tag:r,props:{},children:[{type:a,value:p}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je me suis basé sur les "},{type:b,tag:f,props:{href:"http:\u002F\u002Fdocs.doctrine-project.org\u002Fprojects\u002Fdoctrine-orm\u002Fen\u002Flatest\u002Findex.html"},children:[{type:a,value:"pages de cette section"}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J'ai aussi ajusté le fait que les blocs de configuration alternatifs (yml, php, xml) soient tous visible. En imprimé si on veut comparer la syntaxe, on n'a pas javascript pour activer les tabs."}]},{type:a,value:c},{type:a,value:c},{type:b,tag:t,props:{lang:u},children:[{type:a,value:"@media print {\n  #footer,\n  .footer_popout,\n  #nav.cls,\n  #content .sphinxsidebar,\n  #content .related,\n  body a[href~=\"github\"] {\n     display:none !important;\n  }\n  #content .bodywrapper {\n      margin:0;\n  }\n  #content .bodywrapper .body {\n      max-width:initial;\n  }\n  #content {\n      font-size:120%;\n  }\n  #content div.body h1,\n  #content div.body h2,\n  #content div.body h3,\n  #content div.body h4,\n  #content div.body h5,\n  #content div.body h6 {\n      background:none;\n  }\n}"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:q},{type:b,tag:r,props:{},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sur toutes les "},{type:b,tag:f,props:{href:"http:\u002F\u002Fsymfony.com\u002Fdoc\u002Fcurrent\u002Fbook\u002Findex.html"},children:[{type:a,value:"sous pages de la documentation"}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:t,props:{lang:u},children:[{type:a,value:"@media print {\n  #content_wrapper .box_download.clear_fix,\n  #content_wrapper .main_menu.clear_fix,\n  #content_wrapper .main_content .column_01,\n  #content_wrapper .main_content .column_02 .navigation,\n  #content_wrapper .box_relative_content,\n  #content_wrapper .footer .box_menu_footer.clear_fix,\n  #content_wrapper .footer h2 img,\n  #sln {\n      display:none !important;\n  }\n  #content_wrapper .main_content .column_02 {\n      width: 100%;\n      padding:0;\n      font-size:120%;\n  }\n  #content_wrapper .footer {\n      background-color: #FFF;\n  }\n  #content_wrapper .footer h2 {\n      color: #444;\n  }\n  #content_wrapper .footer h2:before {\n      content: \"Symfony\";\n  }\n  #content_wrapper .highlight-jinja {\n      font-weight:bold;\n      font-size:130%;\n      width: 100% !important;\n  }\n  #content_wrapper .highlight-jinja .hilight {\n      background:none;\n      border:1px solid #444;\n  }\n  #content_wrapper .highlight-jinja .hilight:before {\n      content: \"Code block\";\n  }\n  #content_wrapper .configuration-block.jsactive.clearfix {\n\n  }\n  #content_wrapper .configuration-block.jsactive ul {\n        height:initial !important;\n  }\n  #content_wrapper .configuration-block.jsactive ul.simple {\n        overflow:hidden;\n        height:initial !important;\n  }\n  #content_wrapper div.jsactive div div,\n  #content_wrapper div.jsactive div {\n        position: relative !important;\n  }\n  #content_wrapper .configuration-block.jsactive ul.simple li {\n        float: none;\n  }\n  #content_wrapper .configuration-block.jsactive ul.simple li \u003E div{\n        display: block !important;\n        width: 100% !important;\n  }\n}"}]}]},text:"---\nlocale: fr-CA\ntitle: \u003E-\n  Feuille de style pour imprimante pour les pages de documentation de Doctrine2\n  et Symfony2\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2012\u002F04\u002Ffeuille-de-style-pour-imprimante-pour-les-pages-de-documentation-de-doctrine2-et-symfony2\u002F\nstatus: publish\nrevising: true\nmigrateCode: true\nmigrateImages: true\nmigrateLinks: true\ncreated: '2012-04-07'\nupdated: '2023-11-16'\ntags: []\ncategories: []\nexcerpt: ''\n---\n\n\u003C!--#TODO-missing-image \u002Fwp-content\u002Fuploads\u002F2012\u002F04\u002FScreenshot-at-2012-04-07-200750-d-150x150.png --\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2012\u002F04\u002FScreenshot-at-2012-04-07-200750-d.png\"\u003E\u003Cimg class=\"alignright size-thumbnail wp-image-2552\" title=\"View of the document for print after applying my @media print css\" src=\"https:\u002F\u002Frenoirb.github.io\u002Fsite-assets\u002Fassets\u002Fcontent\u002Fblog\u002F2012\u002F04\u002FScreenshot-at-2012-04-07-200750-d-150x150.png\" alt=\"\" width=\"150\" height=\"150\" \u002F\u003E\u003C\u002Fa\u003EJe suis  en train d'étudier activement \u003Ca href=\"http:\u002F\u002Fsymfony.com\u002F\"\u003ESymfony2\u003C\u002Fa\u003E et \u003Ca href=\"http:\u002F\u002Fdoctrine-project.org\u002F\"\u003EDoctrine2\u003C\u002Fa\u003E car j'ai fait le saut du coté développement applicatif a temps plein.\u003C\u002Fp\u003E\n\n\u003Cp\u003EMon apprentissage va très bien et j'ai appris beaucoup sur les meilleurs pratiques et je ne me vois plus dutout faire de php sans le Dependency Injection, les pratiques de namespacing et fonctions lambda de PHP 5.3.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAlors, pour étudier, j'ai décidé d'imprimer les pages de la documentation. Malheureusement il y a beaucoup de perte d'espace pour du contenu de navigation et temporel qui se ramasse dans mes PDF.\u003C\u002Fp\u003E\n\n\u003Cp\u003EJ'ai converti en PDF plus de cent documents, puis, finalement j'ai repassé les imprimer en ajustant certaines règles CSS.\u003C\u002Fp\u003E\n\n\u003Cp\u003EJe partage ici le CSS que j'ai élaboré pour pouvoir imprimer les documents sans avoir de perte d'espace pour le lecteur tablette.\u003C\u002Fp\u003E\n\n\u003Ch2\u003EComment utiliser\u003C\u002Fh2\u003E\n\n\u003Cp\u003EPour appliquer mon impression, j'ai simplement crée ces blocs CSS, puis inséré ces derniers dans chaque document via l'inspecteur de Google Chrome, puis imprimé.\u003C\u002Fp\u003E\n\n\u003Cp\u003EJ'ai aussi contacté les auteurss des sites respectifs pour leur proposer d'y insérer mes règles.\u003C\u002Fp\u003E\n\n\u003Cp\u003EJe pense ne pas être le seul a avoir eu besoin d'imprimer leur documentation.\u003C\u002Fp\u003E\n\n\u003Cp\u003Ef\u003C\u002Fp\u003E\n\n\u003Ch2\u003EDocumentation \u003Cem\u003EDoctrine2\u003C\u002Fem\u003E\u003C\u002Fh2\u003E\n\n\u003Cp\u003EJe me suis basé sur les \u003Ca href=\"http:\u002F\u002Fdocs.doctrine-project.org\u002Fprojects\u002Fdoctrine-orm\u002Fen\u002Flatest\u002Findex.html\"\u003Epages de cette section\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EJ'ai aussi ajusté le fait que les blocs de configuration alternatifs (yml, php, xml) soient tous visible. En imprimé si on veut comparer la syntaxe, on n'a pas javascript pour activer les tabs.\u003C\u002Fp\u003E\n\n\u003C!--#TODO-Improve-Code-Blocks--\u003E\n\u003Cpre lang=\"css\"\u003E@media print {\n  #footer,\n  .footer_popout,\n  #nav.cls,\n  #content .sphinxsidebar,\n  #content .related,\n  body a[href~=\"github\"] {\n     display:none !important;\n  }\n  #content .bodywrapper {\n      margin:0;\n  }\n  #content .bodywrapper .body {\n      max-width:initial;\n  }\n  #content {\n      font-size:120%;\n  }\n  #content div.body h1,\n  #content div.body h2,\n  #content div.body h3,\n  #content div.body h4,\n  #content div.body h5,\n  #content div.body h6 {\n      background:none;\n  }\n}\u003C\u002Fpre\u003E\n\n\u003Ch2\u003EDocumentation \u003Cem\u003ESymfony2\u003C\u002Fem\u003E\u003C\u002Fh2\u003E\n\n\u003Cp\u003ESur toutes les \u003Ca href=\"http:\u002F\u002Fsymfony.com\u002Fdoc\u002Fcurrent\u002Fbook\u002Findex.html\"\u003Esous pages de la documentation\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cpre lang=\"css\"\u003E@media print {\n  #content_wrapper .box_download.clear_fix,\n  #content_wrapper .main_menu.clear_fix,\n  #content_wrapper .main_content .column_01,\n  #content_wrapper .main_content .column_02 .navigation,\n  #content_wrapper .box_relative_content,\n  #content_wrapper .footer .box_menu_footer.clear_fix,\n  #content_wrapper .footer h2 img,\n  #sln {\n      display:none !important;\n  }\n  #content_wrapper .main_content .column_02 {\n      width: 100%;\n      padding:0;\n      font-size:120%;\n  }\n  #content_wrapper .footer {\n      background-color: #FFF;\n  }\n  #content_wrapper .footer h2 {\n      color: #444;\n  }\n  #content_wrapper .footer h2:before {\n      content: \"Symfony\";\n  }\n  #content_wrapper .highlight-jinja {\n      font-weight:bold;\n      font-size:130%;\n      width: 100% !important;\n  }\n  #content_wrapper .highlight-jinja .hilight {\n      background:none;\n      border:1px solid #444;\n  }\n  #content_wrapper .highlight-jinja .hilight:before {\n      content: \"Code block\";\n  }\n  #content_wrapper .configuration-block.jsactive.clearfix {\n\n  }\n  #content_wrapper .configuration-block.jsactive ul {\n        height:initial !important;\n  }\n  #content_wrapper .configuration-block.jsactive ul.simple {\n        overflow:hidden;\n        height:initial !important;\n  }\n  #content_wrapper div.jsactive div div,\n  #content_wrapper div.jsactive div {\n        position: relative !important;\n  }\n  #content_wrapper .configuration-block.jsactive ul.simple li {\n        float: none;\n  }\n  #content_wrapper .configuration-block.jsactive ul.simple li &gt; div{\n        display: block !important;\n        width: 100% !important;\n  }\n}\u003C\u002Fpre\u003E\n",dir:"\u002Fblog\u002F2012\u002F04",path:"\u002Fblog\u002F2012\u002F04\u002Ffeuille-de-style-pour-imprimante-pour-les-pages-de-documentation-de-doctrine2-et-symfony2",extension:".md",slug:v,createdAt:w,updatedAt:w,category:e},coverImage:{toc:[],body:{type:j,children:[]},text:e},month:"04",next:{locale:h,title:"Les diapositives de ma présentation au HTML5Mtl \"Comment entretenir et utiliser une architecture modulaire et réutilisable CSS\" est publié",path:"\u002Fblog\u002F2012\u002F04\u002Fles-diapositives-de-ma-presentation-au-html5mtl-comment-entretenir-et-utiliser-une-architecture-modulaire-et-reutilisable-css-est-publie",slug:"les-diapositives-de-ma-presentation-au-html5mtl-comment-entretenir-et-utiliser-une-architecture-modulaire-et-reutilisable-css-est-publie"},preamble:{toc:[],body:{type:j,children:[]},text:e},prettyfiedTemporalDate:{prettified:"samedi 7 avril 2012",temporalDate:"2012-04-07"},prev:{locale:h,title:"Créer un tunnel SSH inverse pour pouvoir supporter à distance un ami utilisant Linux",path:"\u002Fblog\u002F2012\u002F02\u002Fcreer-un-tunnel-ssh-inverse-pour-pouvoir-supporter-a-distance-un-ami-utilisant-linux",slug:"creer-un-tunnel-ssh-inverse-pour-pouvoir-supporter-a-distance-un-ami-utilisant-linux"},slug:v,year:"2012"}],fetch:[],mutations:void 0}}("text","element","\n","p","","a",true,"fr-CA",2,"root","h2","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2012\u002F04\u002Ffeuille-de-style-pour-imprimante-pour-les-pages-de-documentation-de-doctrine2-et-symfony2\u002F","Comment utiliser",150,"Symfony2","Doctrine2","Documentation ","em",".","pre","css","feuille-de-style-pour-imprimante-pour-les-pages-de-documentation-de-doctrine2-et-symfony2","2024-10-24T19:43:51.708Z")));