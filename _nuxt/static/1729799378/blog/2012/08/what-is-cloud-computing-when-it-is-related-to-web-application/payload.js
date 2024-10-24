__NUXT_JSONP__("/blog/2012/08/what-is-cloud-computing-when-it-is-related-to-web-application", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{},{},{},{canonical:l,content:{locale:"fr-CA",title:"What is Cloud computing when it is related to web application",canonical:l,status:"publish",revising:true,created:"2012-08-15",updated:"2013-03-27",tags:["architecture","best-practices","cloud-computing","software","techniques"],categories:[m],excerpt:"Some guidelines on what is Cloud Computing related to the scaling point of view. This is the continuity of the thread about a shopping cart and payment gateway commerce site using a CMS. The conversation persisted on what to do and look for cloud hosting.",toc:[{depth:i,text:n},{depth:i,text:o},{depth:i,text:p}],body:{type:j,children:[{type:b,tag:d,props:{},children:[{type:a,value:"During the discussion, the contributor persisted on knowing what would be considered and thresholds to use some kind of push-button-scaling."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Knowing his context, "},{type:b,tag:"nuxt-link",props:{to:q},children:[{type:a,value:"a unzipped install CMS with a buch of plugins"}]},{type:a,value:" I felt the urge to explain that there is not always need to get a bigger server capacity. Here is an overview of what I mean when I talk about cloud computing and continuous integration."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's talk about cloud! "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I mean in the web application hosting realm. Not the storage (Google Drive, Dropbox) or software as a service (Salesforce, Basecamp)."}]},{type:a,value:c},{type:b,tag:"h4",props:{},children:[{type:a,value:"Let's talk about a use case before and my own experience."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"My former company "},{type:b,tag:e,props:{href:"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20110808064111\u002Fhttp:\u002F\u002Fevo.cat.io\u002F",rel:["nofollow"]},children:[{type:a,value:"Evocatio Solutions technologiques"}]},{type:a,value:" manage a pretty large site at the domain "},{type:b,tag:e,props:{href:"https:\u002F\u002Fuda.ca\u002F"},children:[{type:a,value:"uda.ca"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:o}]},{type:a,value:"\nThis is a complete business management web application that manages an union who represents french speaking artists in north america (mostly residents of Canada).  We built a complete web application that manages many aspects an artist needs to represent themselves and be found. A big part of it is a 140 tables worth of artist description listing details as small a hair length and types of musical instruments to voice tones. It also manages renewal, communication with agencies, portfolios, and management of contracts with managers and more.\n"},{type:b,tag:d,props:{},children:[{type:a,value:"Not to forget the very heavy databases queries we generate to search, for example: \u003Cexample\u003EAn "},{type:b,tag:f,props:{},children:[{type:a,value:"asian woman"}]},{type:a,value:" with "},{type:b,tag:f,props:{},children:[{type:a,value:"white hair"}]},{type:a,value:" playing "},{type:b,tag:f,props:{},children:[{type:a,value:"yuku lélé"}]},{type:a,value:" who can "},{type:b,tag:f,props:{},children:[{type:a,value:"pilot helicopter"}]},{type:a,value:" AND ride "},{type:b,tag:f,props:{},children:[{type:a,value:"motorcycle"}]},{type:a,value:" ...\u003C\u002Fexample\u003E"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Yes. Database queries get very big, very quickly. Not only in the search engine I described, but through all the features."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That, to my opinion, is heavy. Also considering that that Artist's Union has several thousand members."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This information is on top of my head, please do not take this into real numbers, I did not look the latest deployment needs.  But for the server side, it only uses a simple Virtual machine with 4Gb of RAM give or take."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That is my point about expanding hosting without optimizing stuff around."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Amazon and other Cloud service is about mostly about automated server deployment."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But the powerful offering of \"scale tour application\" with computing cubes that automatically scales requires more than just nodes."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It requires the code (here again) to support:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"multiple databases hosts and types support (Cassandra, Solr, MySQL) specialized for the type of data to store"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"User upload files replication"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"Database\u002FKeystore (CouchDB, Mongo)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All spanable on multiple hosts by a mere change of one configuration file."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The code itself should:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"Be deployable by a simple phing\u002Fant\u002Fnant task"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"Hosted on a NAS mount that you could create an other machine and use when time of computing need happens"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All this (for some parts)  is what is called "},{type:b,tag:e,props:{href:"http:\u002F\u002Fagile.dzone.com\u002Farticles\u002Fdigg-using-continuous"},children:[{type:a,value:"Continuous integration"}]},{type:a,value:s},{type:b,tag:e,props:{href:"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FContinuous_integration"},children:[{type:a,value:"Wikipedia"}]},{type:a,value:") some "},{type:b,tag:e,props:{href:"http:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F425692\u002Fwhat-is-your-preferred-php-deployment-strategy",title:"Reference on some good deployment strategies"},children:[{type:a,value:"deployment strategies"}]},{type:a,value:s},{type:b,tag:e,props:{href:"http:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F2180460\u002Fsetting-up-a-deployment-build-ci-cycle-for-php-projects",title:"Other relevant StackOverflow thread"},children:[{type:a,value:"also here"}]},{type:a,value:" and "},{type:b,tag:e,props:{href:"http:\u002F\u002Ferichogue.ca\u002F2011\u002F05\u002Fphp\u002Fcontinuous-integration-in-php\u002F",title:"Blog post and presentation about Continous Integration by EricHogue"},children:[{type:a,value:"this blog post too"}]},{type:a,value:"), and most of the time. It's not just the continuity and automation that matters, but the underlying deployment mechanism can be provided by third parties, like "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.iamproblematic.com\u002Fwhy-i-like-heroku\u002F",title:"Blog post about what is nice about Heroku"},children:[{type:a,value:"Heroku"}]},{type:a,value:" and many others."}]}]},text:"---\nlocale: fr-CA\ntitle: What is Cloud computing when it is related to web application\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2012\u002F08\u002Fwhat-is-cloud-computing-when-it-is-related-to-web-application\u002F\nstatus: publish\nrevising: true\ncreated: '2012-08-15'\nupdated: '2013-03-27'\ntags:\n  - architecture\n  - best-practices\n  - cloud-computing\n  - software\n  - techniques\ncategories:\n  - tranche-de-vie\nexcerpt: \u003E-\n  Some guidelines on what is Cloud Computing related to the scaling point of\n  view. This is the continuity of the thread about a shopping cart and payment\n  gateway commerce site using a CMS. The conversation persisted on what to do\n  and look for cloud hosting.\n---\n\nDuring the discussion, the contributor persisted on knowing what would be considered and thresholds to use some kind of push-button-scaling.\n\nKnowing his context, \u003Ca href=\"\u002Fblog\u002F2012\u002F08\u002Fsome-steps-you-can-look-for-if-you-feel-your-web-application-is-slow\"\u003Ea unzipped install CMS with a buch of plugins\u003C\u002Fa\u003E I felt the urge to explain that there is not always need to get a bigger server capacity. Here is an overview of what I mean when I talk about cloud computing and continuous integration.\n\n\u003Ch3\u003EThe E-Mail\u003C\u002Fh3\u003E\n\nLet's talk about cloud! \n\nI mean in the web application hosting realm. Not the storage (Google Drive, Dropbox) or software as a service (Salesforce, Basecamp).\n\n\u003Ch4\u003ELet's talk about a use case before and my own experience.\u003C\u002Fh4\u003E\n\nMy former company \u003Ca href=\"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20110808064111\u002Fhttp:\u002F\u002Fevo.cat.io\u002F\" rel=\"nofollow\"\u003EEvocatio Solutions technologiques\u003C\u002Fa\u003E manage a pretty large site at the domain \u003Ca href=\"https:\u002F\u002Fuda.ca\u002F\"\u003Euda.ca\u003C\u002Fa\u003E.\n\n\u003Ch3\u003EThe use-case on my recent experience\u003C\u002Fh3\u003E\nThis is a complete business management web application that manages an union who represents french speaking artists in north america (mostly residents of Canada).  We built a complete web application that manages many aspects an artist needs to represent themselves and be found. A big part of it is a 140 tables worth of artist description listing details as small a hair length and types of musical instruments to voice tones. It also manages renewal, communication with agencies, portfolios, and management of contracts with managers and more.\n\nNot to forget the very heavy databases queries we generate to search, for example: &lt;example&gt;An \u003Cem\u003Easian woman\u003C\u002Fem\u003E with \u003Cem\u003Ewhite hair\u003C\u002Fem\u003E playing \u003Cem\u003Eyuku lélé\u003C\u002Fem\u003E who can \u003Cem\u003Epilot helicopter\u003C\u002Fem\u003E AND ride \u003Cem\u003Emotorcycle\u003C\u002Fem\u003E ...&lt;\u002Fexample&gt;\n\nYes. Database queries get very big, very quickly. Not only in the search engine I described, but through all the features.\n\nThat, to my opinion, is heavy. Also considering that that Artist's Union has several thousand members.\n\nThis information is on top of my head, please do not take this into real numbers, I did not look the latest deployment needs.  But for the server side, it only uses a simple Virtual machine with 4Gb of RAM give or take.\n\nThat is my point about expanding hosting without optimizing stuff around.\n\n\u003Ch3\u003EWhat your web application has to consider then\u003C\u002Fh3\u003E\n\nAmazon and other Cloud service is about mostly about automated server deployment.\n\nBut the powerful offering of \"scale tour application\" with computing cubes that automatically scales requires more than just nodes.\n\nIt requires the code (here again) to support:\n\u003Cul\u003E\n\t\u003Cli\u003Emultiple databases hosts and types support (Cassandra, Solr, MySQL) specialized for the type of data to store\u003C\u002Fli\u003E\n\t\u003Cli\u003EUser upload files replication\u003C\u002Fli\u003E\n\t\u003Cli\u003EDatabase\u002FKeystore (CouchDB, Mongo)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\nAll spanable on multiple hosts by a mere change of one configuration file.\n\nThe code itself should:\n\u003Cul\u003E\n\t\u003Cli\u003EBe deployable by a simple phing\u002Fant\u002Fnant task\u003C\u002Fli\u003E\n\t\u003Cli\u003EHosted on a NAS mount that you could create an other machine and use when time of computing need happens\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\nAll this (for some parts)  is what is called \u003Ca href=\"http:\u002F\u002Fagile.dzone.com\u002Farticles\u002Fdigg-using-continuous\"\u003EContinuous integration\u003C\u002Fa\u003E (\u003Ca href=\"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FContinuous_integration\"\u003EWikipedia\u003C\u002Fa\u003E) some \u003Ca href=\"http:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F425692\u002Fwhat-is-your-preferred-php-deployment-strategy\" title=\"Reference on some good deployment strategies\"\u003Edeployment strategies\u003C\u002Fa\u003E (\u003Ca href=\"http:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F2180460\u002Fsetting-up-a-deployment-build-ci-cycle-for-php-projects\" title=\"Other relevant StackOverflow thread\"\u003Ealso here\u003C\u002Fa\u003E and \u003Ca href=\"http:\u002F\u002Ferichogue.ca\u002F2011\u002F05\u002Fphp\u002Fcontinuous-integration-in-php\u002F\" title=\"Blog post and presentation about Continous Integration by EricHogue\"\u003Ethis blog post too\u003C\u002Fa\u003E), and most of the time. It's not just the continuity and automation that matters, but the underlying deployment mechanism can be provided by third parties, like \u003Ca href=\"http:\u002F\u002Fwww.iamproblematic.com\u002Fwhy-i-like-heroku\u002F\" title=\"Blog post about what is nice about Heroku\"\u003EHeroku\u003C\u002Fa\u003E and many others.\n",dir:"\u002Fblog\u002F2012\u002F08",path:"\u002Fblog\u002F2012\u002F08\u002Fwhat-is-cloud-computing-when-it-is-related-to-web-application",extension:".md",slug:t,createdAt:"2024-10-24T19:43:51.713Z",updatedAt:"2024-10-24T19:43:51.714Z",category:m},coverImage:{toc:[],body:{type:j,children:[]},text:u},month:"08",next:{locale:v,title:"Introduction to the Hypermedia",path:"\u002Fblog\u002F2012\u002F10\u002Fmy-first-introduction-to-the-hypermedia",slug:"my-first-introduction-to-the-hypermedia"},preamble:{toc:[],body:{type:j,children:[]},text:u},prettyfiedTemporalDate:{prettified:"mercredi 15 août 2012",temporalDate:"2012-08-15"},prev:{locale:v,title:"Some steps you can look for if you feel your web application is slow",path:q,slug:"some-steps-you-can-look-for-if-you-feel-your-web-application-is-slow"},slug:t,year:"2012"}],fetch:[],mutations:void 0}}("text","element","\n","p","a","em","\n\t","li",3,"root","h3","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2012\u002F08\u002Fwhat-is-cloud-computing-when-it-is-related-to-web-application\u002F","tranche-de-vie","The E-Mail","The use-case on my recent experience","What your web application has to consider then","\u002Fblog\u002F2012\u002F08\u002Fsome-steps-you-can-look-for-if-you-feel-your-web-application-is-slow","ul"," (","what-is-cloud-computing-when-it-is-related-to-web-application","","en-CA")));