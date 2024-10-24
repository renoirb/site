__NUXT_JSONP__("/blog/2015/03/creating-new-ubuntu-salt-master-terminal-using-cloud-init", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{},{},{},{canonical:J,content:{title:"Creating a new Ubuntu Salt master from the terminal using Cloud-Init",locale:x,created:"2015-03-09T00:00:00.000Z",updated:"2023-02-18T00:00:00.000Z",canonical:J,status:"publish",revising:K,caption:q,caracteresBizzares:q,gallery:q,migrateCode:K,migrateImages:q,migrateLinks:q,categories:[L],tags:["operations","linux","salt-stack","cloud-computing"],keywords:["GNU","OpenStack","Cloud Init"],excerpt:"Cloud-Init is made in a way that it handles distribution specific package installation details automatically. With it, you can create a new salt master in a few commands.",coverImage:{src:M,text:N},description:"Creating new Salt master in a few commands with Cloud-Init",toc:[{id:O,depth:2,text:P}],body:{type:y,children:[{type:b,tag:f,props:{},children:[{type:a,value:"If you run on Virtual Machines on a provider that runs OpenStack you can also\nleverage a component that’s made to automatically install softwares at creation\ntime. With this, you can any new node in your cluster, including the salt-master\nin a few terminal commands."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Before starting out, you need to make sure your cloud provider runs Open Stack\nand has "},{type:b,tag:g,props:{href:s,rel:[h,i,j],target:k,title:t},children:[{type:a,value:o}]},{type:a,value:" enabled. To check it out, look in the \"Launch instance\"\ndialog to create a new VM a tab titled \"Post-Creation\", it might just simply\nwork."}]},{type:a,value:c},{type:b,tag:"app-image",props:{style:"float:unset;",src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F03\u002Fopenstack-cloudinit-launchinstance-dialog.png",alt:"OpenStack Cloud-Init dialog"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{href:s,rel:[h,i,j],target:k,title:t},children:[{type:a,value:o}]},{type:a,value:" is basically reading a manifest that declares what’s the\nspecifics of the new VM and is part of the conversion from the initial image\nOpenStack into the specific instance you will be using. You can follow those\n"},{type:b,tag:g,props:{href:u,rel:[h,i,j],target:k,title:Q},children:[{type:a,value:"two"}]},{type:a,value:" "},{type:b,tag:g,props:{href:u,rel:[h,i,j],target:k,title:z},children:[{type:a,value:"articles"}]},{type:a,value:" that describes well how "},{type:b,tag:v,props:{},children:[{type:a,value:o}]},{type:a,value:" works."}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{href:s,rel:[h,i,j],target:k,title:t},children:[{type:a,value:o}]},{type:a,value:" is made in a way that it handles distribution specific\npackage installation details automatically."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The following is specific to an "},{type:b,tag:v,props:{},children:[{type:a,value:"Ubuntu server"}]},{type:a,value:" VM, but you might need to adjust\nthe package names to match your current server distribution as those tools are\ngetting more and more popular in the industry."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Before testing out on a new VM, you could also check from an existing instance\nand ask through an HTTP request what was the current instance’ post-creation\nscript using cURL."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Note that the IP address you see below is a virtual interface provided by\nOpenStack but can be navigated through HTTP, try it out like this;"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{className:[e,R]},children:[{type:a,value:S}]},{type:a,value:" http:\u002F\u002F169.254.169.254\u002Fopenstack\u002F\n\n  "},{type:b,tag:d,props:{className:[e,F]},children:[{type:a,value:"2012"}]},{type:a,value:"-08-10\n  "},{type:b,tag:d,props:{className:[e,F]},children:[{type:a,value:T}]},{type:a,value:"-04-04\n  "},{type:b,tag:d,props:{className:[e,F]},children:[{type:a,value:T}]},{type:a,value:"-10-17\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you see a similar output, you can ask what was the post-creation\nconfiguration (\"userdata\") it used at creation time. You can dig the tree,\nhere’s how you can find it in an OpenStack (CURRENT VERSION NICKNAME) cluster."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"For instance, my a salt master would have the following configuration;"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{className:[e,R]},children:[{type:a,value:S}]},{type:a,value:" http:\u002F\u002F169.254.169.254\u002Fopenstack\u002F2013-10-17\u002Fuser_data\n\n  "},{type:b,tag:d,props:{className:[e,"comment"]},children:[{type:a,value:"#cloud-config"}]},{type:a,value:"\n  manage_etc_hosts: "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:U}]},{type:a,value:"\n  manage-resolv-conf: "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:U}]},{type:a,value:"\n  locale: en_US.UTF-8\n  timezone: America\u002FNew_York\n  package_upgrade: "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:w}]},{type:a,value:"\n  package_update: "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:w}]},{type:a,value:"\n  package_reboot_if_required: "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:w}]},{type:a,value:"\n\n  ssh_import_id: "},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"["}]},{type:a,value:"saltstack"},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"]"}]},{type:a,value:"\n  apt_sources:\n    - source: "},{type:b,tag:d,props:{className:[e,"string"]},children:[{type:a,value:"\"ppa:saltstack\u002Fsalt\""}]},{type:a,value:"\n\n  packages:\n    - salt-minion\n    - salt-common\n    - salt-master\n    - python-software-properties\n    - software-properties-common\n    - python-novaclient\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To boot an instance from the terminal, you can use the \"nova\" command like this;"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"nova boot "},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:p}]},{type:a,value:G},{type:b,tag:d,props:{className:[e,H,I]},children:[{type:a,value:"--image"}]},{type:a,value:" Ubuntu-14.04-Trusty "},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:p}]},{type:a,value:"\n     --user-data \u002Fsrv\u002Fcloudconfig.yml "},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:p}]},{type:a,value:G},{type:b,tag:d,props:{className:[e,H,I]},children:[{type:a,value:"--key_name"}]},{type:a,value:" keyname "},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:p}]},{type:a,value:G},{type:b,tag:d,props:{className:[e,H,I]},children:[{type:a,value:"--flavor"}]},{type:a,value:" subsonic "},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:p}]},{type:a,value:"\n     --security-groups default "},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:p}]},{type:a,value:"\n     salt\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"This assumes that you have the following available in your OpenStack dashboard:"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"An SSH public key called \"keyname\" in your tenant"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"A flavor called \"subsonic\" that has a predefined configuration of vCPU, vRAM,\netc."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"A security group called \"default\", you could use more than one by separating\nthem by comas; e.g. default,foo,bar"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"A text file in "},{type:b,tag:n,props:{},children:[{type:a,value:V}]},{type:a,value:" in YAML format that holds your\n"},{type:b,tag:g,props:{href:s,rel:[h,i,j],target:k,title:t},children:[{type:a,value:o}]},{type:a,value:" (a.k.a. \"userdata\") configuration."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"You have your nova configuration available (look in your cloud provider\ndashboard \"Download OpenStack RC File\" link in \"Access & Security\" and \"API\naccess\") and available in your server’s "},{type:b,tag:n,props:{},children:[{type:a,value:"\u002Fetc\u002Fprofile.d\u002F"}]},{type:a,value:" profile folder."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"You have \""},{type:b,tag:n,props:{},children:[{type:a,value:"python-novaclient"}]},{type:a,value:"\" (or its equivalent) installed"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"To test it out yourself, you could use the block I gave earlier and create a\nfile in "},{type:b,tag:n,props:{},children:[{type:a,value:V}]},{type:a,value:" and give the the "},{type:b,tag:v,props:{},children:[{type:a,value:"nova"}]},{type:a,value:" command a try."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In this case, you might want to call the new VM \"salt\" as the default Salt stack\nconfiguration will try to communicate to it to make it its salt master. In this\ncase, it’ll be itself."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The creation of the salt master could also contain a few git repositories to be\ncloned at the salt master creation time making your salt master as easily\nreplaceable as any other components in your \"cloud\"."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"A set of sample scripts I use to create a new salt master off of a few\n"},{type:b,tag:g,props:{href:"https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F01c09df78f05612c281f",rel:[h,i,j],target:k},children:[{type:a,value:"git repositories can be found in the following Gist"}]}]},{type:a,value:c},{type:b,tag:"h2",props:{id:O},children:[{type:b,tag:g,props:{href:"#read-more",ariaHidden:w,tabIndex:-1},children:[{type:b,tag:d,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The following articles was found to be describing in more detail what I\nintroduced in this article."}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{href:u,rel:[h,i,j],target:k,title:Q},children:[{type:a,value:"Easily automate The provisioning of your DigitalOcean Droplets"}]},{type:a,value:". Don’t be\nfooled by the name, the article is actually describing "},{type:b,tag:v,props:{},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{href:u,rel:[h,i,j],target:k,title:z},children:[{type:a,value:z}]}]},{type:a,value:c}]}]},text:"---\ntitle: Creating a new Ubuntu Salt master from the terminal using Cloud-Init\nlocale: en-CA\ncreated: 2015-03-09\nupdated: 2023-02-18\ncanonical: 'https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F03\u002Fcreating-new-ubuntu-salt-master-terminal-using-cloud-init\u002F'\nstatus: publish\nrevising: true\ncaption: false\ncaracteresBizzares: false\ngallery: false\nmigrateCode: true\nmigrateImages: false\nmigrateLinks: false\ncategories:\n  - projects\ntags:\n  - operations\n  - linux\n  - salt-stack\n  - cloud-computing\nkeywords:\n  - GNU\n  - OpenStack\n  - Cloud Init\nexcerpt: \u003E-\n  Cloud-Init is made in a way that it handles distribution specific package\n  installation details automatically. With it, you can create a new salt master\n  in a few commands.\ncoverImage:\n  src: ~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F03\u002Fopenstack-cloudinit-screenshot.jpg\n  text: |\n    [Open Stack Cloud-Init](https:\u002F\u002Fcloudinit.readthedocs.io\u002Fen\u002Flatest\u002F) documentation.\ndescription: Creating new Salt master in a few commands with Cloud-Init\n---\n\nIf you run on Virtual Machines on a provider that runs OpenStack you can also\nleverage a component that’s made to automatically install softwares at creation\ntime. With this, you can any new node in your cluster, including the salt-master\nin a few terminal commands.\n\nBefore starting out, you need to make sure your cloud provider runs Open Stack\nand has [Cloud-Init][0] enabled. To check it out, look in the \"Launch instance\"\ndialog to create a new VM a tab titled \"Post-Creation\", it might just simply\nwork.\n\n\u003Capp-image style=\"float:unset;\" src=\"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F03\u002Fopenstack-cloudinit-launchinstance-dialog.png\" alt=\"OpenStack Cloud-Init dialog\"\u003E\n\u003C\u002Fapp-image\u003E\n\n[Cloud-Init][0] is basically reading a manifest that declares what’s the\nspecifics of the new VM and is part of the conversion from the initial image\nOpenStack into the specific instance you will be using. You can follow those\n[two][1] [articles][2] that describes well how _Cloud-Init_ works.\n\n\u003E [Cloud-Init][0] is made in a way that it handles distribution specific\n\u003E package installation details automatically.\n\nThe following is specific to an _Ubuntu server_ VM, but you might need to adjust\nthe package names to match your current server distribution as those tools are\ngetting more and more popular in the industry.\n\nBefore testing out on a new VM, you could also check from an existing instance\nand ask through an HTTP request what was the current instance’ post-creation\nscript using cURL.\n\nNote that the IP address you see below is a virtual interface provided by\nOpenStack but can be navigated through HTTP, try it out like this;\n\n```bash\ncurl http:\u002F\u002F169.254.169.254\u002Fopenstack\u002F\n\n  2012-08-10\n  2013-04-04\n  2013-10-17\n```\n\nIf you see a similar output, you can ask what was the post-creation\nconfiguration (\"userdata\") it used at creation time. You can dig the tree,\nhere’s how you can find it in an OpenStack (CURRENT VERSION NICKNAME) cluster.\n\nFor instance, my a salt master would have the following configuration;\n\n```bash\ncurl http:\u002F\u002F169.254.169.254\u002Fopenstack\u002F2013-10-17\u002Fuser_data\n\n  #cloud-config\n  manage_etc_hosts: false\n  manage-resolv-conf: false\n  locale: en_US.UTF-8\n  timezone: America\u002FNew_York\n  package_upgrade: true\n  package_update: true\n  package_reboot_if_required: true\n\n  ssh_import_id: [saltstack]\n  apt_sources:\n    - source: \"ppa:saltstack\u002Fsalt\"\n\n  packages:\n    - salt-minion\n    - salt-common\n    - salt-master\n    - python-software-properties\n    - software-properties-common\n    - python-novaclient\n```\n\nTo boot an instance from the terminal, you can use the \"nova\" command like this;\n\n```bash\nnova boot \\\n     --image Ubuntu-14.04-Trusty \\\n     --user-data \u002Fsrv\u002Fcloudconfig.yml \\\n     --key_name keyname \\\n     --flavor subsonic \\\n     --security-groups default \\\n     salt\n```\n\nThis assumes that you have the following available in your OpenStack dashboard:\n\n1. An SSH public key called \"keyname\" in your tenant\n2. A flavor called \"subsonic\" that has a predefined configuration of vCPU, vRAM,\n   etc.\n3. A security group called \"default\", you could use more than one by separating\n   them by comas; e.g. default,foo,bar\n4. A text file in `\u002Fsrv\u002Fcloudconfig.yml` in YAML format that holds your\n   [Cloud-Init][0] (a.k.a. \"userdata\") configuration.\n5. You have your nova configuration available (look in your cloud provider\n   dashboard \"Download OpenStack RC File\" link in \"Access & Security\" and \"API\n   access\") and available in your server’s `\u002Fetc\u002Fprofile.d\u002F` profile folder.\n6. You have \"`python-novaclient`\" (or its equivalent) installed\n\nTo test it out yourself, you could use the block I gave earlier and create a\nfile in `\u002Fsrv\u002Fcloudconfig.yml` and give the the _nova_ command a try.\n\nIn this case, you might want to call the new VM \"salt\" as the default Salt stack\nconfiguration will try to communicate to it to make it its salt master. In this\ncase, it’ll be itself.\n\nThe creation of the salt master could also contain a few git repositories to be\ncloned at the salt master creation time making your salt master as easily\nreplaceable as any other components in your \"cloud\".\n\nA set of sample scripts I use to create a new salt master off of a few\n[git repositories can be found in the following Gist][3]\n\n## Read more\n\nThe following articles was found to be describing in more detail what I\nintroduced in this article.\n\n- [Easily automate The provisioning of your DigitalOcean Droplets][1]. Don’t be\n  fooled by the name, the article is actually describing _Cloud-Init_\n- [An introduction to cloud-config scripting][2]\n\n[0]:\n  https:\u002F\u002Fcloudinit.readthedocs.org\u002Fen\u002Flatest\u002F\n  'Cloud-Init reference documentation pages'\n[1]:\n  https:\u002F\u002Fwww.digitalocean.com\u002Fcommunity\u002Ftutorials\u002Fan-introduction-to-cloud-config-scripting\n  'Easily automate The provisioning of your DigitalOcean Droplets ... using Cloud-Init'\n[2]:\n  https:\u002F\u002Fwww.digitalocean.com\u002Fcommunity\u002Ftutorials\u002Fan-introduction-to-cloud-config-scripting\n  'An introduction to cloud-config scripting'\n[3]: https:\u002F\u002Fgist.github.com\u002FWebPlatformDocs\u002F01c09df78f05612c281f\n",dir:"\u002Fblog\u002F2015\u002F03",path:"\u002Fblog\u002F2015\u002F03\u002Fcreating-new-ubuntu-salt-master-terminal-using-cloud-init",extension:".md",slug:W,createdAt:X,updatedAt:X,category:L},coverImage:{toc:[],body:{type:y,children:[{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fcloudinit.readthedocs.io\u002Fen\u002Flatest\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"Open Stack Cloud-Init"}]},{type:a,value:" documentation."}]}]},text:N,src:M},month:"03",next:{title:"A few useful GNU\u002FLinux truth tests while creating salt states",locale:x,path:"\u002Fblog\u002F2015\u002F03\u002Fuseful-gnulinux-truth-tests",slug:"useful-gnulinux-truth-tests"},preamble:{toc:[],body:{type:y,children:[]},text:""},prettyfiedTemporalDate:{prettified:"Monday, March 9, 2015",temporalDate:"2015-03-09"},prev:{title:"Install PHP5 Memcached PECL extension and have it support igbinary",locale:x,path:"\u002Fblog\u002F2015\u002F02\u002Finstall-php5-memcached-pecl-extension-support-igbinary",slug:"install-php5-memcached-pecl-extension-support-igbinary"},slug:W,year:"2015"}],fetch:[],mutations:void 0}}("text","element","\n","span","token","p","a","nofollow","noopener","noreferrer","_blank","punctuation","li","code","Cloud-Init","\\",false,"boolean","https:\u002F\u002Fcloudinit.readthedocs.org\u002Fen\u002Flatest\u002F","Cloud-Init reference documentation pages","https:\u002F\u002Fwww.digitalocean.com\u002Fcommunity\u002Ftutorials\u002Fan-introduction-to-cloud-config-scripting","em","true","en-CA","root","An introduction to cloud-config scripting","div","nuxt-content-highlight","pre","language-bash","line-numbers","number","\n     ","parameter","variable","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F03\u002Fcreating-new-ubuntu-salt-master-terminal-using-cloud-init\u002F",true,"projects","~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F03\u002Fopenstack-cloudinit-screenshot.jpg","[Open Stack Cloud-Init](https:\u002F\u002Fcloudinit.readthedocs.io\u002Fen\u002Flatest\u002F) documentation.\n","read-more","Read more","Easily automate The provisioning of your DigitalOcean Droplets ... using Cloud-Init","function","curl","2013","false","\u002Fsrv\u002Fcloudconfig.yml","creating-new-ubuntu-salt-master-terminal-using-cloud-init","2024-10-24T19:43:51.724Z")));