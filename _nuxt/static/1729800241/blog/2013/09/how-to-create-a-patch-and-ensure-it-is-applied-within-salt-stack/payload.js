__NUXT_JSONP__("/blog/2013/09/how-to-create-a-patch-and-ensure-it-is-applied-within-salt-stack", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:[{},{},{},{canonical:k,content:{locale:l,title:"How to create a patch and ensure it is applied within Salt Stack",canonical:k,status:"publish",revising:f,migrateCode:f,migrateLinks:f,created:"2013-09-12",updated:"2014-02-04",tags:["salt-stack","techniques"],categories:[],description:"This tutorial shows how to create a patch, sign it, and make sure it is applied.",excerpt:"When you need to adjust a file with a specific code modification and you are sure the file will not change over time, patch is a viable solution. This tutorial shows how to create a patch, sign it, and make sure it is applied.",toc:[{depth:m,text:n},{depth:m,text:o}],body:{type:g,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Quick tutorial on how to create a patch and ensure it is applied using "},{type:b,tag:h,props:{href:"https:\u002F\u002Fsaltproject.io\u002F"},children:[{type:a,value:"salt stack"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"Creating a patch"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Create a copy of original file"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"cp file file.orig"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Modify file, and test"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Create a md5 sum of the modified file for later use"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"cat file | md5sum"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Revert modification, then prepare patch"},{type:b,tag:r,props:{},children:[]},{type:a,value:"\nmv file file.mod"},{type:b,tag:r,props:{},children:[]},{type:a,value:"\ncp file.orig file"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Create diff"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"diff -Naur file file.mod \u003E file.patch\n"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"Create Salt stack manifest block in appropriate state file"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Add a block similar to this as a patch state definition. Make sure it is refered at least in your "},{type:b,tag:i,props:{},children:[{type:a,value:"top.sls"}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"    \u002Fusr\u002Fshare\u002Fganglia-webfrontend\u002Fauth.php:\n      file.patch:\n        - source: salt:\u002F\u002Fmonitor\u002Fauth.php.patch\n        - hash: md5=480ef2ae17fdfee85585ab887fa1ae5f\n"}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:o}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{href:"http:\u002F\u002Fdocs.saltstack.com\u002Fref\u002Fstates\u002Fall\u002Fsalt.states.file.html#salt.states.file.patch"},children:[{type:a,value:"Salt stack states.file.patch"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{href:"http:\u002F\u002Fjungels.net\u002Farticles\u002Fdiff-patch-ten-minutes.html"},children:[{type:a,value:"diff patch in ten minutes"}]}]},{type:a,value:c}]}]},text:"---\nlocale: en-CA\ntitle: How to create a patch and ensure it is applied within Salt Stack\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F09\u002Fhow-to-create-a-patch-and-ensure-it-is-applied-within-salt-stack\u002F\nstatus: publish\nrevising: true\nmigrateCode: true\nmigrateLinks: true\ncreated: '2013-09-12'\nupdated: '2014-02-04'\ntags:\n  - salt-stack\n  - techniques\ncategories: []\ndescription: \u003E-\n  This tutorial shows how to create a patch, sign it, and make sure it is\n  applied.\nexcerpt: \u003E-\n  When you need to adjust a file with a specific code modification and you are\n  sure the file will not change over time, patch is a viable solution. This\n  tutorial shows how to create a patch, sign it, and make sure it is applied.\n---\n\n\u003Cp\u003EQuick tutorial on how to create a patch and ensure it is applied using \u003Ca href=\"https:\u002F\u002Fsaltproject.io\u002F\"\u003Esalt stack\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Ch3\u003EProcedure\u003C\u002Fh3\u003E\n\n\u003Ch4\u003ECreating a patch\u003C\u002Fh4\u003E\n\n\u003Col\u003E\n\u003Cli\u003E\u003Cp\u003ECreate a copy of original file\u003C\u002Fp\u003E\n\n\u003Cp\u003Ecp file file.orig\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EModify file, and test\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003ECreate a md5 sum of the modified file for later use\u003C\u002Fp\u003E\n\n\u003Cp\u003Ecat file | md5sum\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003ERevert modification, then prepare patch\u003Cbr \u002F\u003E\nmv file file.mod\u003Cbr \u002F\u003E\ncp file.orig file\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003ECreate diff\u003C\u002Fp\u003E\n\n\u003Cpre\u003E\u003Ccode\u003Ediff -Naur file file.mod &gt; file.patch\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Ch4\u003ECreate Salt stack manifest block in appropriate state file\u003C\u002Fh4\u003E\n\n\u003Cp\u003EAdd a block similar to this as a patch state definition. Make sure it is refered at least in your \u003Ccode\u003Etop.sls\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\n\u003Cpre\u003E\u003Ccode\u003E    \u002Fusr\u002Fshare\u002Fganglia-webfrontend\u002Fauth.php:\n      file.patch:\n        - source: salt:\u002F\u002Fmonitor\u002Fauth.php.patch\n        - hash: md5=480ef2ae17fdfee85585ab887fa1ae5f\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\n\u003Ch3\u003EReferences\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"http:\u002F\u002Fdocs.saltstack.com\u002Fref\u002Fstates\u002Fall\u002Fsalt.states.file.html#salt.states.file.patch\"\u003ESalt stack states.file.patch\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"http:\u002F\u002Fjungels.net\u002Farticles\u002Fdiff-patch-ten-minutes.html\"\u003Ediff patch in ten minutes\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n",dir:"\u002Fblog\u002F2013\u002F09",path:"\u002Fblog\u002F2013\u002F09\u002Fhow-to-create-a-patch-and-ensure-it-is-applied-within-salt-stack",extension:".md",slug:t,createdAt:u,updatedAt:u,category:j},coverImage:{toc:[],body:{type:g,children:[]},text:j},month:"09",next:{locale:l,title:"Project idea: Creating a home made OpenStack cluster for development purposes",path:"\u002Fblog\u002F2013\u002F10\u002Fproject-idea-creating-a-home-made-openstack-cluster-for-development-purposes",slug:"project-idea-creating-a-home-made-openstack-cluster-for-development-purposes"},preamble:{toc:[],body:{type:g,children:[]},text:j},prettyfiedTemporalDate:{prettified:"Thursday, September 12, 2013",temporalDate:"2013-09-12"},prev:{locale:"fr-CA",title:"Procedure to create a re-usable configuration export script to move a virtual machine configuration to a new one",path:"\u002Fblog\u002F2013\u002F08\u002Fprocedure-to-create-a-re-usable-configuration-export-script-to-move-virtual-machine-configuration-to-a-new-one",slug:"procedure-to-create-a-re-usable-configuration-export-script-to-move-virtual-machine-configuration-to-a-new-one"},slug:t,year:"2013"}],fetch:[],mutations:void 0}}("text","element","\n","p","li",true,"root","a","code","","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F09\u002Fhow-to-create-a-patch-and-ensure-it-is-applied-within-salt-stack\u002F","en-CA",3,"Procedure","References","h3","h4","br","pre","how-to-create-a-patch-and-ensure-it-is-applied-within-salt-stack","2024-10-24T19:50:04.926Z")));