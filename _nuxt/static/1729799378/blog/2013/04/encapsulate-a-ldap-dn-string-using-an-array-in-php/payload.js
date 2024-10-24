__NUXT_JSONP__("/blog/2013/04/encapsulate-a-ldap-dn-string-using-an-array-in-php", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:[{},{},{},{canonical:q,content:{locale:j,title:"Encapsulate a LDAP DN string using Arrays in PHP",canonical:q,status:"publish",revising:r,caption:e,caracteresBizzares:e,gallery:e,migrateCode:r,migrateImages:e,migrateLinks:e,created:"2013-04-01",updated:"2013-04-02",categories:[s],tags:["techniques",k,"web"],excerpt:"While I was writing an authentication and privileges assignation mechanism using information provided by an ActiveDirectory's LDAP DN string into my project's web application, I realized that there was no documented way to extract information from it. This snippet is about reading a complex DN string, and \"explode\" it into a manageable PHP Array.",toc:[{depth:f,text:t},{depth:f,text:u},{depth:f,text:v},{depth:f,text:w}],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:a,value:"During a project I had to fork privileges assignation logic with information coming from an LDAP server. Since the DN string representing users can be very different for each user: their affiliations and roles. I had to find ways to interpret sub-parts of that string to figure out what privileges to attach to them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"My snippet's purpose is to get the capability to get a subset of that LDAP DN string, assuming that the first index is more precise than the last, but concatenated would give the full context."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"While I was trying to find already made function that explodes that string into manageable arrays in PHP, I realized that there was none. I then decided to contribute it as "},{type:b,tag:x,props:{title:y,href:z,target:A},children:[{type:a,value:B}]},{type:a,value:"."}]},{type:a,value:c},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:g}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:"\nAs a reminder, an LDAP DN string looks like the following:\n"},{type:b,tag:m,props:{lang:"bash"},children:[{type:a,value:"  CN=username,OU=UNITNAME,OU=Region,OU=Country,DC=subdomain,DC=domain,DC=com\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In such a string, we get basically everything a user may inherit from:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:n},{type:b,tag:o,props:{},children:[{type:a,value:"Group assignation"}]},{type:a,value:n},{type:b,tag:o,props:{},children:[{type:a,value:"Organization domain (either DNS or Microsoft's idea of a \"domain\" (aka. \"Active Directory\"))"}]},{type:a,value:n},{type:b,tag:o,props:{},children:[{type:a,value:"etc."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The main idea is to deal with different logic based on changes or assignment. The DN has all we need."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Reading the data from it can be done using successive "},{type:b,tag:p,props:{},children:[{type:a,value:"explode"}]},{type:a,value:" on the "},{type:b,tag:p,props:{},children:[{type:a,value:"="}]},{type:a,value:" and the "},{type:b,tag:p,props:{},children:[{type:a,value:","}]},{type:a,value:". But How about to use the implicit hierarchy the string conveys."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"My objective was to read the previously shown DN string, and parse a manageable array that would look like this:`"}]},{type:a,value:c},{type:b,tag:m,props:{lang:k},children:[{type:a,value:"    array(\n        'CN' =\u003E array(\"username\"),\n        'OU' =\u003E array(\"UNITNAME\",\"Region\",\"Country\"),\n        'DC' =\u003E array (\"subdomain\",\"domain\",\"com\")\n    );\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:g}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:"\nAssuming we want to work with changes in the OU field. We could do as:\n"},{type:b,tag:m,props:{lang:k},children:[{type:a,value:"find($userId); \u002F\u002F $user instanceof User\n\n\u002F\u002F This is coming from the LDAP\n$dn= 'CN=username,OU=UNITNAME,OU=Region,OU=Country,DC=subdomain,DC=domain,DC=com';\n\n$wrapper = parseLdapDn($dn);\n\u002F\u002F We are working with \"UNITNAME\" but there can be other ones\nswitch($wrapper['OU'][0]){\n    case 'UNITNAME':\n        \u002F\u002F Specific logic or authorization setters\n        $user-\u003EaddRole('ROLE_UNITNAME');\n    break;\n\n    default:\n      \u002F\u002F Default behavior, in case we did not grasp\n    break;\n}\n\n\u002F\u002F And so on...\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In this example I added a role using Symfony2's method on a Doctrine2 provided object. But you may see other use cases."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:g}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:v}]},{type:a,value:c},{type:b,tag:"script",props:{src:"https:\u002F\u002Fgist.github.com\u002Frenoirb\u002F3152719.js"},children:[]},{type:a,value:"\nI also published it as "},{type:b,tag:x,props:{title:y,href:z,target:A},children:[{type:a,value:B}]},{type:a,value:".\n"},{type:b,tag:d,props:{},children:[{type:a,value:g}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:w}]},{type:a,value:"\nIf you have other questions or suggestions, let me know."}]},text:"---\nlocale: en-CA\ntitle: Encapsulate a LDAP DN string using Arrays in PHP\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F04\u002Fencapsulate-a-ldap-dn-string-using-an-array-in-php\u002F\nstatus: publish\nrevising: true\ncaption: false\ncaracteresBizzares: false\ngallery: false\nmigrateCode: true\nmigrateImages: false\nmigrateLinks: false\ncreated: '2013-04-01'\nupdated: '2013-04-02'\ncategories:\n  - snippet\ntags:\n  - techniques\n  - php\n  - web\nexcerpt: \u003E-\n  While I was writing an authentication and privileges assignation mechanism\n  using information provided by an ActiveDirectory's LDAP DN string into my\n  project's web application, I realized that there was no documented way to\n  extract information from it. This snippet is about reading a complex DN\n  string, and \"explode\" it into a manageable PHP Array.\n---\n\nDuring a project I had to fork privileges assignation logic with information coming from an LDAP server. Since the DN string representing users can be very different for each user: their affiliations and roles. I had to find ways to interpret sub-parts of that string to figure out what privileges to attach to them.\n\nMy snippet's purpose is to get the capability to get a subset of that LDAP DN string, assuming that the first index is more precise than the last, but concatenated would give the full context.\n\nWhile I was trying to find already made function that explodes that string into manageable arrays in PHP, I realized that there was none. I then decided to contribute it as \u003Ca title=\"Parse, and format a DN string to Array \" href=\"http:\u002F\u002Fwww.php.net\u002Fmanual\u002Fen\u002Ffunction.ldap-explode-dn.php#109482\" target=\"_blank\"\u003Ea comment on the PHP.net website\u003C\u002Fa\u003E.\n\n\u003C!--more--\u003E\n\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E­\n\u003Ch3\u003EThe basics\u003C\u002Fh3\u003E\nAs a reminder, an LDAP DN string looks like the following:\n\n\u003Cpre lang=\"bash\"\u003E\n  CN=username,OU=UNITNAME,OU=Region,OU=Country,DC=subdomain,DC=domain,DC=com\n\u003C\u002Fpre\u003E\n\nIn such a string, we get basically everything a user may inherit from:\n\n\u003Cul\u003E\n\t\u003Cli\u003EGroup assignation\u003C\u002Fli\u003E\n\t\u003Cli\u003EOrganization domain (either DNS or Microsoft's idea of a \"domain\" (aka. \"Active Directory\"))\u003C\u002Fli\u003E\n\t\u003Cli\u003Eetc.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\nThe main idea is to deal with different logic based on changes or assignment. The DN has all we need.\n\nReading the data from it can be done using successive \u003Ccode\u003Eexplode\u003C\u002Fcode\u003E on the \u003Ccode\u003E=\u003C\u002Fcode\u003E and the \u003Ccode\u003E,\u003C\u002Fcode\u003E. But How about to use the implicit hierarchy the string conveys.\n\nMy objective was to read the previously shown DN string, and parse a manageable array that would look like this:`\n\n\u003Cpre lang=\"php\"\u003E\n    array(\n        'CN' =\u003E array(\"username\"),\n        'OU' =\u003E array(\"UNITNAME\",\"Region\",\"Country\"),\n        'DC' =\u003E array (\"subdomain\",\"domain\",\"com\")\n    );\n\u003C\u002Fpre\u003E\n\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E­\n\u003Ch3\u003EHow to use\u003C\u002Fh3\u003E\nAssuming we want to work with changes in the OU field. We could do as:\n\n\u003Cpre lang=\"php\"\u003E\n\u003C?php\n\n\u002F\u002F Fictive User object, coming from an ORM entity manager ($em)\n$user = $em-\u003Efind($userId); \u002F\u002F $user instanceof User\n\n\u002F\u002F This is coming from the LDAP\n$dn= 'CN=username,OU=UNITNAME,OU=Region,OU=Country,DC=subdomain,DC=domain,DC=com';\n\n$wrapper = parseLdapDn($dn);\n\u002F\u002F We are working with \"UNITNAME\" but there can be other ones\nswitch($wrapper['OU'][0]){\n    case 'UNITNAME':\n        \u002F\u002F Specific logic or authorization setters\n        $user-\u003EaddRole('ROLE_UNITNAME');\n    break;\n\n    default:\n      \u002F\u002F Default behavior, in case we did not grasp\n    break;\n}\n\n\u002F\u002F And so on...\n\u003C\u002Fpre\u003E\n\nIn this example I added a role using Symfony2's method on a Doctrine2 provided object. But you may see other use cases.\n\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E­\n\u003Ch3\u003ESnippet\u003C\u002Fh3\u003E\n\u003Cscript src=\"https:\u002F\u002Fgist.github.com\u002Frenoirb\u002F3152719.js\"\u003E\u003C\u002Fscript\u003E\nI also published it as \u003Ca title=\"Parse, and format a DN string to Array \" href=\"http:\u002F\u002Fwww.php.net\u002Fmanual\u002Fen\u002Ffunction.ldap-explode-dn.php#109482\" target=\"_blank\"\u003Ea comment on the PHP.net website\u003C\u002Fa\u003E.\n\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E­\n\u003Ch3\u003EThat is all folks\u003C\u002Fh3\u003E\nIf you have other questions or suggestions, let me know.\n",dir:"\u002Fblog\u002F2013\u002F04",path:"\u002Fblog\u002F2013\u002F04\u002Fencapsulate-a-ldap-dn-string-using-an-array-in-php",extension:".md",slug:C,createdAt:D,updatedAt:D,category:s},coverImage:{toc:[],body:{type:l,children:[]},text:E},month:"04",next:{locale:j,title:"Who else is using feature flipping thing on their web applications?",path:"\u002Fblog\u002F2013\u002F04\u002Fwho-else-is-using-that-feature-flipping-thing-on-their-web-applications",slug:"who-else-is-using-that-feature-flipping-thing-on-their-web-applications"},preamble:{toc:[],body:{type:l,children:[]},text:E},prettyfiedTemporalDate:{prettified:"Monday, April 1, 2013",temporalDate:"2013-04-01"},prev:{locale:j,title:"Creating and using Javascript events while combining events on two separates behaviors",path:"\u002Fblog\u002F2013\u002F03\u002Fcreating-and-using-javascript-events-while-combining-events-on-two-separates-behaviors",slug:"creating-and-using-javascript-events-while-combining-events-on-two-separates-behaviors"},slug:C,year:"2013"}],fetch:[],mutations:void 0}}("text","element","\n","p",false,3," ","­\n","h3","en-CA","php","root","pre","\n\t","li","code","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F04\u002Fencapsulate-a-ldap-dn-string-using-an-array-in-php\u002F",true,"snippet","The basics","How to use","Snippet","That is all folks","a","Parse, and format a DN string to Array ","http:\u002F\u002Fwww.php.net\u002Fmanual\u002Fen\u002Ffunction.ldap-explode-dn.php#109482","_blank","a comment on the PHP.net website","encapsulate-a-ldap-dn-string-using-an-array-in-php","2024-10-24T19:43:51.717Z","")));