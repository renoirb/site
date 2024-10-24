__NUXT_JSONP__("/blog/2017/02/things-i-ve-worked-on-while-maintaining-webplatform-org", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{},{},{},{canonical:t,content:{title:"Things I’ve worked on in the last two years while maintaining WebPlatform.org",locale:o,created:"2017-02-09T00:00:00.000Z",updated:"2023-11-20T00:00:00.000Z",canonical:t,status:"publish",revising:true,categories:[u],tags:["career","webplatform-docs"],excerpt:"Before starting working on the WebPlatform Project, I knew that I was jumping in a complex project that required all my skills all at once.",toc:[{depth:v,text:"How was WebPlatform infrastructure when I started..."},{depth:v,text:w},{depth:g,text:x},{depth:g,text:y},{depth:g,text:z},{depth:g,text:A},{depth:g,text:B},{depth:g,text:C},{depth:g,text:"7. Compatibility data on WebPlatform"},{depth:g,text:D}],body:{type:p,children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I’ve worked at the W3C for two years. My assignment was on the WebPlatform.org project and my responsibility was to keep everything in order."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"While I am archiving things and closing my notes of the last two years I thought I’d share with you from where I started, and what I’ve done."}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:"How was "},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:" infrastructure when I started..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:".org had been running on about 20 VMs. Until my most recent work to convert everything into static-site generators, It still was using that many virtual servers. More on that later."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When I arrived into the project, every component of the site was in a good shape. I could build any server by booting a from a blank Ubuntu 10.04 LTS with a name that’ll tell the configuration management what to install on the new \"minion\". "},{type:b,tag:i,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fryandlane.com\u002Fblog\u002F"},children:[{type:a,value:"Ryan Lane"}]}]},{type:a,value:", the person I came to replace, "},{type:b,tag:e,props:{href:F},children:[{type:a,value:"did a great job"}]},{type:a,value:"!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This was the first time in my career where I could replace any server using a configuration management tool. I’ve used Puppet, Chef on small projects, but "},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:".org was much bigger and was using "},{type:b,tag:e,props:{href:"https:\u002F\u002Fsaltproject.io\u002F"},children:[{type:a,value:"Salt Stack"}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It felt great to be assured that almost every piece was replaceable without worrying about individual pieces. But still, to change a password required to dig in folders, edit and cross fingers. It was a cry for improvement."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As for the code WepPlatform was using to serve the community at that time was basically a bunch of open-source projects with a few manual edits here and there. The theme, the configuration, and so on."}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:"\n  "},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:G}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We had backups, but yet, if \"deployment\" VM would lose its data, I would have also had to guess how each component were put together and rebuild every server. "},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Luckily it didn’t happen."}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"During the two years I’ve been on "},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:", we’ve been through a full system software upgrade, we were initially running on Ubuntu 10.04 LTS, and 2 \"cloud hops\" (i.e. re-install everything on another "},{type:b,tag:f,props:{},children:[{type:a,value:"cloud"}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Our \"cloud-hops\" were from initial "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.hpcloud.com\u002F"},children:[{type:a,value:"HP Cloud"}]},{type:a,value:" in December 2013 to our very own Open-Stack cluster — a 4 blade server borrowed by our friends at "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.dreamhost.com\u002F"},children:[{type:a,value:H}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Thanks to my good friend "},{type:b,tag:f,props:{},children:[{type:a,value:"Etienne Lachance"}]},{type:a,value:" who helped "},{type:b,tag:i,props:{},children:[{type:a,value:"a lot"}]},{type:a,value:" installing the various components. The "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.openstack.org\u002F"},children:[{type:a,value:"Open-Stack documentation"}]},{type:a,value:" has a lot of rough edges, but we came through it and ran the system without too much issues for a year."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The second \"cloud-hop\" was between the self-managed Open-Stack cluster into the very beta "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.dreamhost.com\u002Fcloud\u002Fcomputing\u002F"},children:[{type:a,value:"DreamCompute"}]},{type:a,value:" platform that "},{type:b,tag:f,props:{},children:[{type:a,value:H}]},{type:a,value:" opened up."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All of this to tell that the challenge wasn’t always to keep things up when crisis was happening, but also the work involved in doing maintenance:"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Make everything refer to resources over SSL\u002FTLS"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"software upgrades and security patches, "}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"rewrite of every component; blog, wiki, issue tracker, etc, so their configuration are managed and the theme is applied on top of a clean code checkout"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A lot of "},{type:b,tag:f,props:{},children:[{type:a,value:"creeping dependencies"}]},{type:a,value:" and possible places to break."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Most of the code had "},{type:b,tag:I,props:{},children:[{type:a,value:"https:\u002F\u002F*.webplatform.org"}]},{type:a,value:" hardcoded manually. Meaning that I couldn’t install a full copy of the site. This made it hard to rework parts of the site without impacting the live site."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Like I was saying, the "},{type:b,tag:e,props:{href:F},children:[{type:a,value:"work that has been done before me was great"}]},{type:a,value:"! Everything was in place and the community was already writing docs! In fact, "},{type:b,tag:f,props:{},children:[{type:a,value:"before start working on WebPlatform, I knew that I was jumping in a complex project that required all my skills all at once"}]},{type:a,value:". "},{type:b,tag:f,props:{},children:[{type:a,value:"Rewriting deployment code"}]},{type:a,value:" crucially needed time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That’s what I did while making sure the site was running smoothly."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Not only the code was assembled quickly, but also the most important server, the  \"deployment\" server, was the only piece that needed work to be also replaceable like the other parts of the system."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The cherry on the sundae is that the configuration management scripts refactor is now public, it allowed me to re-deploy WordPress, MediaWiki, BugGenie, Dabblet, Etherpad, Piwik and others."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With this refactor, I achieved a \"sysadmin dream\"; I can control the passwords and secret from one file and apply the change to both the service and the appropriate configuration file at the next configuration management system run."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If your happen to manage servers that runs WordPress, MediaWiki, MariaDB, Memcached, ElasticSearch or a set of static HTML files, it shouldn’t be hard to reuse."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you want to use my work, you can fork "},{type:b,tag:e,props:{href:r},children:[{type:a,value:J}]},{type:a,value:" and "},{type:b,tag:e,props:{href:K},children:[{type:a,value:L}]},{type:a,value:" and use the same code as me to run our \"deployment\" server (now called \"salt\") for your own site."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All you need is an empty VM called \"salt\", install the two repositories plus one containing secrets, and you should be good to go."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The installation of the \"deployment\" VM is a bit more complex than two git-clone, you can refer to the "},{type:b,tag:i,props:{},children:[{type:a,value:M}]},{type:a,value:s},{type:b,tag:e,props:{href:m},children:[{type:a,value:n}]},{type:a,value:" and use the "},{type:b,tag:i,props:{},children:[{type:a,value:N}]},{type:a,value:" to have your own local copy using Vagrant and Virtual Box — more on this later."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"NOTE"}]},{type:a,value:" You might need the "},{type:b,tag:i,props:{},children:[{type:a,value:"secrets"}]},{type:a,value:" repository, I will eventually publish an empty shell so people won’t need to reverse engineer."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Setup conventions in deployment strategy so I could run RubyOnRails, NodeJS, Python, PHP and static files without much change in how to to deploy them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That one was about harmonizing how things are deployed so I could handle separation of concerns when exposing on the web. You can "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fops\u002Fissues\u002F115#issuecomment-95629216"},children:[{type:a,value:"see my monologue on the subject"}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Create a local workspace so I can work on server deployment scripts on my local machine, build and destroy VMs to ensure all runs smoothly in the cloud."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Most of the time I was maintaining scripts "},{type:b,tag:e,props:{href:r},children:[{type:a,value:J}]},{type:a,value:", "},{type:b,tag:e,props:{href:K},children:[{type:a,value:L}]},{type:a,value:" on a VM called "},{type:b,tag:f,props:{},children:[{type:a,value:"deployment.webplatform.org"}]},{type:a,value:" (now called "},{type:b,tag:f,props:{},children:[{type:a,value:"salt.webplatform.org"}]},{type:a,value:") on production. With the work I did with the "},{type:b,tag:e,props:{href:r},children:[{type:a,value:"salt-states"}]},{type:a,value:", I could build a complete mirror of the whole site as "},{type:b,tag:f,props:{},children:[{type:a,value:"webplatformstaging.org"}]},{type:a,value:". But yet, I needed to use servers exposed to the public."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With my work on "},{type:b,tag:e,props:{href:m},children:[{type:a,value:n}]},{type:a,value:", I could run two or three VMs in VirtualBox and run quick tests prior to run them. I wished I had this when I started."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:O},{type:b,tag:i,props:{},children:[{type:a,value:M}]},{type:a,value:s},{type:b,tag:e,props:{href:m},children:[{type:a,value:n}]},{type:a,value:" are the scripts I wrote to achieve #1 but now aren’t limited to where you run them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:O},{type:b,tag:i,props:{},children:[{type:a,value:N}]},{type:a,value:s},{type:b,tag:e,props:{href:m},children:[{type:a,value:n}]},{type:a,value:" is a VirtualBox and Vagrant script to create a \"salt\" master from which I could run locally."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The vagrant-minions\u002F folder is basically one YAML file where I describe nodes I need to bring up and Vagrant does the rest of the job for me."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"At the end of a "},{type:b,tag:I,props:{},children:[{type:a,value:"vagrant up elastic0"}]},{type:a,value:" I would see on my local vagrant-workbench VM’s salt-master a salt minion called \"elastic0\" ready to be managed locally."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Design and implement a prototype to achieve SSO for web apps without using SAML, Kerberos, or *LDAP."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I created a small javascript file that bootstraps the local web application to sync session state with a \"source of truth\"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It goes like that;"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Check if a session exists through a hidden iframe to accounts..."}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"If a session exists, check if local web app has same data\n"},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"If not the same data, destroy the local session"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"If has no session, attempt to start a session\n"},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"If no user exists locally, create one, then start a session"}]},{type:a,value:c}]}]},{type:a,value:c}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I had something running in two separate MediaWiki installations and I have recorded a screencast showing it"},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=rutwd1Z_1TE"},children:[{type:a,value:"6"}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Basically the JavaScript client "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fwww.webplatform.org\u002Fblob\u002Fmaster\u002Fsrc\u002Ffiles\u002Fassets\u002Fjs\u002Fsso.js"},children:[{type:a,value:"webplatform\u002Fwww.webplatform.org\u002F....sso.js"}]},{type:a,value:" requires the local web application ("},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fmediawiki-fxa-sso\u002Fblob\u002Fwebplatform-sso\u002Fincludes\u002FWebPlatformAuthHooks.php#L82"},children:[{type:a,value:"around here in the code"}]},{type:a,value:") to receive requests from it, communicate through its backend to \"source of truth\"  (\"profile.accounts.webplatform.org\") and return an HTTP return code (401, 400, 204) to confirm what happened."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I’ve made all this to have our Wiki, Issue tracker, Blog, and Annotation system to prevent users to have different username passwords to sync, but I lacked time to have it all working and the project died. Other priorities came up."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Luckily for me, that work got Mozilla Firefox Accounts team interested to invite me over to spend a week with them and it was great!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I have hopes to eventually publish a PHP module out of what I’ve done so I could prevent this to be wasted."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That was great! I enjoyed collaborating with an external provider and make something useful elsewhere at W3C."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"7. Compatibility data on "},{type:b,tag:f,props:{},children:[{type:a,value:h}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I had the chance to spend time with Doug and work out all the tiny details to create a schema to store data we could crawl from MDN."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I’ve worked on a system to keep a copy into Memcached of the generated HTML. This helped a lot on page render time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now that the site is going into static site generator, this is going to go to waste :("}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Hopefully with this in place we’ll be able to shut down everything of "},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:", except a simple web server serving HTML files."}]}]},text:"---\ntitle: Things I’ve worked on in the last two years while maintaining WebPlatform.org\nlocale: en-CA\ncreated: 2017-02-09\nupdated: 2023-11-20\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2017\u002F02\u002Fthings-i-ve-worked-on-while-maintaining-webplatform-org\u002F\nstatus: publish\nrevising: true\ncategories:\n  - tranche-de-vie\ntags:\n  - career\n  - webplatform docs\nexcerpt: \u003E-\n  Before starting working on the WebPlatform Project, I knew that I was jumping in a complex\n  project that required all my skills all at once.\n---\n\n\u003C!--#TODO With Hypothes.is annotations--\u003E\n\n\u003Cp\u003EI’ve worked at the W3C for two years. My assignment was on the WebPlatform.org project and my responsibility was to keep everything in order.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWhile I am archiving things and closing my notes of the last two years I thought I’d share with you from where I started, and what I’ve done.\u003C\u002Fp\u003E\n\n\u003Ch2\u003EHow was \u003Cem\u003EWebPlatform\u003C\u002Fem\u003E infrastructure when I started...\u003C\u002Fh2\u003E\n\n\u003Cp\u003E\u003Cem\u003EWebPlatform\u003C\u002Fem\u003E.org had been running on about 20 VMs. Until my most recent work to convert everything into static-site generators, It still was using that many virtual servers. More on that later.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWhen I arrived into the project, every component of the site was in a good shape. I could build any server by booting a from a blank Ubuntu 10.04 LTS with a name that’ll tell the configuration management what to install on the new \"minion\". \u003Cstrong\u003E\u003Ca href=\"https:\u002F\u002Fryandlane.com\u002Fblog\u002F\"\u003ERyan Lane\u003C\u002Fa\u003E\u003C\u002Fstrong\u003E, the person I came to replace, \u003Ca href=\"https:\u002F\u002Fwebplatform.github.io\u002Fblog\u002F2012\u002F10\u002Fbuilding-web-platforms-infrastructure\u002F\"\u003Edid a great job\u003C\u002Fa\u003E!\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis was the first time in my career where I could replace any server using a configuration management tool. I’ve used Puppet, Chef on small projects, but \u003Cem\u003EWebPlatform\u003C\u002Fem\u003E.org was much bigger and was using \u003Ca href=\"https:\u002F\u002Fsaltproject.io\u002F\"\u003ESalt Stack\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIt felt great to be assured that almost every piece was replaceable without worrying about individual pieces. But still, to change a password required to dig in folders, edit and cross fingers. It was a cry for improvement.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAs for the code WepPlatform was using to serve the community at that time was basically a bunch of open-source projects with a few manual edits here and there. The theme, the configuration, and so on.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n  \u003Cp\u003E\u003Cem\u003EWebPlatform\u003C\u002Fem\u003E’s Achille’s heel was the deployment server.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EWe had backups, but yet, if \"deployment\" VM would lose its data, I would have also had to guess how each component were put together and rebuild every server. \u003Cem\u003EWebPlatform\u003C\u002Fem\u003E’s Achille’s heel was the deployment server.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELuckily it didn’t happen.\u003C\u002Fp\u003E\n\n\u003Ch2\u003EHighlights\u003C\u002Fh2\u003E\n\n\u003Ch3\u003E1. Software upgrades and \"Cloud hop\" re-deployments\u003C\u002Fh3\u003E\n\n\u003Cp\u003EDuring the two years I’ve been on \u003Cem\u003EWebPlatform\u003C\u002Fem\u003E, we’ve been through a full system software upgrade, we were initially running on Ubuntu 10.04 LTS, and 2 \"cloud hops\" (i.e. re-install everything on another \u003Cem\u003Ecloud\u003C\u002Fem\u003E).\u003C\u002Fp\u003E\n\n\u003Cp\u003EOur \"cloud-hops\" were from initial \u003Ca href=\"https:\u002F\u002Fwww.hpcloud.com\u002F\"\u003EHP Cloud\u003C\u002Fa\u003E in December 2013 to our very own Open-Stack cluster — a 4 blade server borrowed by our friends at \u003Ca href=\"https:\u002F\u002Fwww.dreamhost.com\u002F\"\u003EDreamHost\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThanks to my good friend \u003Cem\u003EEtienne Lachance\u003C\u002Fem\u003E who helped \u003Cstrong\u003Ea lot\u003C\u002Fstrong\u003E installing the various components. The \u003Ca href=\"https:\u002F\u002Fdocs.openstack.org\u002F\"\u003EOpen-Stack documentation\u003C\u002Fa\u003E has a lot of rough edges, but we came through it and ran the system without too much issues for a year.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe second \"cloud-hop\" was between the self-managed Open-Stack cluster into the very beta \u003Ca href=\"https:\u002F\u002Fwww.dreamhost.com\u002Fcloud\u002Fcomputing\u002F\"\u003EDreamCompute\u003C\u002Fa\u003E platform that \u003Cem\u003EDreamHost\u003C\u002Fem\u003E opened up.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAll of this to tell that the challenge wasn’t always to keep things up when crisis was happening, but also the work involved in doing maintenance:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EMake everything refer to resources over SSL\u002FTLS\u003C\u002Fli\u003E\n\u003Cli\u003Esoftware upgrades and security patches, \u003C\u002Fli\u003E\n\u003Cli\u003Erewrite of every component; blog, wiki, issue tracker, etc, so their configuration are managed and the theme is applied on top of a clean code checkout\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EA lot of \u003Cem\u003Ecreeping dependencies\u003C\u002Fem\u003E and possible places to break.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E2. Rewrite deployment code to enable us working on a feature without affecting the live site\u003C\u002Fh3\u003E\n\n\u003Cp\u003EMost of the code had \u003Ccode\u003Ehttps:\u002F\u002F*.webplatform.org\u003C\u002Fcode\u003E hardcoded manually. Meaning that I couldn’t install a full copy of the site. This made it hard to rework parts of the site without impacting the live site.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELike I was saying, the \u003Ca href=\"https:\u002F\u002Fwebplatform.github.io\u002Fblog\u002F2012\u002F10\u002Fbuilding-web-platforms-infrastructure\u002F\"\u003Ework that has been done before me was great\u003C\u002Fa\u003E! Everything was in place and the community was already writing docs! In fact, \u003Cem\u003Ebefore start working on WebPlatform, I knew that I was jumping in a complex project that required all my skills all at once\u003C\u002Fem\u003E. \u003Cem\u003ERewriting deployment code\u003C\u002Fem\u003E crucially needed time.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThat’s what I did while making sure the site was running smoothly.\u003C\u002Fp\u003E\n\n\u003Cp\u003ENot only the code was assembled quickly, but also the most important server, the  \"deployment\" server, was the only piece that needed work to be also replaceable like the other parts of the system.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe cherry on the sundae is that the configuration management scripts refactor is now public, it allowed me to re-deploy WordPress, MediaWiki, BugGenie, Dabblet, Etherpad, Piwik and others.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWith this refactor, I achieved a \"sysadmin dream\"; I can control the passwords and secret from one file and apply the change to both the service and the appropriate configuration file at the next configuration management system run.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf your happen to manage servers that runs WordPress, MediaWiki, MariaDB, Memcached, ElasticSearch or a set of static HTML files, it shouldn’t be hard to reuse.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf you want to use my work, you can fork \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fsalt-states\"\u003Ewebplatform\u002Fsalt-states\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fsalt-pillar\"\u003Ewebplatform\u002Fsalt-pillar\u003C\u002Fa\u003E and use the same code as me to run our \"deployment\" server (now called \"salt\") for your own site.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAll you need is an empty VM called \"salt\", install the two repositories plus one containing secrets, and you should be good to go.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe installation of the \"deployment\" VM is a bit more complex than two git-clone, you can refer to the \u003Cstrong\u003Esalt-master\u002F\u003C\u002Fstrong\u003E folder in \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fops\"\u003Ewebplatform\u002Fops\u003C\u002Fa\u003E and use the \u003Cstrong\u003Evagrant-workbench\u002F\u003C\u002Fstrong\u003E to have your own local copy using Vagrant and Virtual Box — more on this later.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ENOTE\u003C\u002Fstrong\u003E You might need the \u003Cstrong\u003Esecrets\u003C\u002Fstrong\u003E repository, I will eventually publish an empty shell so people won’t need to reverse engineer.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E3. Refactor deployment strategy to help scale web applications regardless of their programming languages\u003C\u002Fh3\u003E\n\n\u003Cp\u003ESetup conventions in deployment strategy so I could run RubyOnRails, NodeJS, Python, PHP and static files without much change in how to to deploy them.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThat one was about harmonizing how things are deployed so I could handle separation of concerns when exposing on the web. You can \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fops\u002Fissues\u002F115#issuecomment-95629216\"\u003Esee my monologue on the subject\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E4. Create script to create deployment server from a blank VM, with local Vagrant workspace\u003C\u002Fh3\u003E\n\n\u003Cp\u003ECreate a local workspace so I can work on server deployment scripts on my local machine, build and destroy VMs to ensure all runs smoothly in the cloud.\u003C\u002Fp\u003E\n\n\u003Cp\u003EMost of the time I was maintaining scripts \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fsalt-states\"\u003Ewebplatform\u002Fsalt-states\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fsalt-pillar\"\u003Ewebplatform\u002Fsalt-pillar\u003C\u002Fa\u003E on a VM called \u003Cem\u003Edeployment.webplatform.org\u003C\u002Fem\u003E (now called \u003Cem\u003Esalt.webplatform.org\u003C\u002Fem\u003E) on production. With the work I did with the \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fsalt-states\"\u003Esalt-states\u003C\u002Fa\u003E, I could build a complete mirror of the whole site as \u003Cem\u003Ewebplatformstaging.org\u003C\u002Fem\u003E. But yet, I needed to use servers exposed to the public.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWith my work on \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fops\"\u003Ewebplatform\u002Fops\u003C\u002Fa\u003E, I could run two or three VMs in VirtualBox and run quick tests prior to run them. I wished I had this when I started.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe \u003Cstrong\u003Esalt-master\u002F\u003C\u002Fstrong\u003E folder in \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fops\"\u003Ewebplatform\u002Fops\u003C\u002Fa\u003E are the scripts I wrote to achieve #1 but now aren’t limited to where you run them.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe \u003Cstrong\u003Evagrant-workbench\u002F\u003C\u002Fstrong\u003E folder in \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fops\"\u003Ewebplatform\u002Fops\u003C\u002Fa\u003E is a VirtualBox and Vagrant script to create a \"salt\" master from which I could run locally.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe vagrant-minions\u002F folder is basically one YAML file where I describe nodes I need to bring up and Vagrant does the rest of the job for me.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAt the end of a \u003Ccode\u003Evagrant up elastic0\u003C\u002Fcode\u003E I would see on my local vagrant-workbench VM’s salt-master a salt minion called \"elastic0\" ready to be managed locally.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E5. Implement SSO proof of concept using Mozilla Firefox Accounts\u003C\u002Fh3\u003E\n\n\u003Cp\u003EDesign and implement a prototype to achieve SSO for web apps without using SAML, Kerberos, or *LDAP.\u003C\u002Fp\u003E\n\n\u003Cp\u003EI created a small javascript file that bootstraps the local web application to sync session state with a \"source of truth\".\u003C\u002Fp\u003E\n\n\u003Cp\u003EIt goes like that;\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003ECheck if a session exists through a hidden iframe to accounts...\u003C\u002Fli\u003E\n\u003Cli\u003EIf a session exists, check if local web app has same data\n\n\u003Cul\u003E\n\u003Cli\u003EIf not the same data, destroy the local session\u003C\u002Fli\u003E\n\u003Cli\u003EIf has no session, attempt to start a session\n\n\u003Cul\u003E\n\u003Cli\u003EIf no user exists locally, create one, then start a session\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003EI had something running in two separate MediaWiki installations and I have recorded a screencast showing it\u003Ca href=\"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=rutwd1Z_1TE\"\u003E6\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EBasically the JavaScript client \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fwww.webplatform.org\u002Fblob\u002Fmaster\u002Fsrc\u002Ffiles\u002Fassets\u002Fjs\u002Fsso.js\"\u003Ewebplatform\u002Fwww.webplatform.org\u002F....sso.js\u003C\u002Fa\u003E requires the local web application (\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fmediawiki-fxa-sso\u002Fblob\u002Fwebplatform-sso\u002Fincludes\u002FWebPlatformAuthHooks.php#L82\"\u003Earound here in the code\u003C\u002Fa\u003E) to receive requests from it, communicate through its backend to \"source of truth\"  (\"profile.accounts.webplatform.org\") and return an HTTP return code (401, 400, 204) to confirm what happened.\u003C\u002Fp\u003E\n\n\u003Cp\u003EI’ve made all this to have our Wiki, Issue tracker, Blog, and Annotation system to prevent users to have different username passwords to sync, but I lacked time to have it all working and the project died. Other priorities came up.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELuckily for me, that work got Mozilla Firefox Accounts team interested to invite me over to spend a week with them and it was great!\u003C\u002Fp\u003E\n\n\u003Cp\u003EI have hopes to eventually publish a PHP module out of what I’ve done so I could prevent this to be wasted.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E6. Provide infrastructure for WebAt25 and work with Ian\u003C\u002Fh3\u003E\n\n\u003Cp\u003EThat was great! I enjoyed collaborating with an external provider and make something useful elsewhere at W3C.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E7. Compatibility data on \u003Cem\u003EWebPlatform\u003C\u002Fem\u003E\u003C\u002Fh3\u003E\n\n\u003Cp\u003EI had the chance to spend time with Doug and work out all the tiny details to create a schema to store data we could crawl from MDN.\u003C\u002Fp\u003E\n\n\u003Cp\u003EI’ve worked on a system to keep a copy into Memcached of the generated HTML. This helped a lot on page render time.\u003C\u002Fp\u003E\n\n\u003Cp\u003ENow that the site is going into static site generator, this is going to go to waste :(\u003C\u002Fp\u003E\n\n\u003Ch3\u003E6. Convert all of MediaWiki and WordPress content into a static site generator.\u003C\u002Fh3\u003E\n\n\u003Cp\u003EHopefully with this in place we’ll be able to shut down everything of \u003Cem\u003EWebPlatform\u003C\u002Fem\u003E, except a simple web server serving HTML files.\u003C\u002Fp\u003E\n",dir:"\u002Fblog\u002F2017\u002F02",path:"\u002Fblog\u002F2017\u002F02\u002Fthings-i-ve-worked-on-while-maintaining-webplatform-org",extension:".md",slug:P,createdAt:Q,updatedAt:Q,category:u},coverImage:{toc:[],body:{type:p,children:[]},text:R},month:"02",next:{title:"Managing Email Aliases with ProtonMail and SimpleLogin to sort automatically into inbox folders based local part",locale:o,path:"\u002Fblog\u002F2024\u002F03\u002Fmanaging-email-aliases-with-protonmail-and-simplelogin-to-sort-automatically-into-inbox-folders-based-local-part",slug:"managing-email-aliases-with-protonmail-and-simplelogin-to-sort-automatically-into-inbox-folders-based-local-part"},preamble:{toc:[],body:{type:p,children:[]},text:R},prettyfiedTemporalDate:{prettified:"Thursday, February 9, 2017",temporalDate:"2017-02-09"},prev:{title:"Recover Discourse from a backup, adjust domain name",locale:o,path:"\u002Fblog\u002F2015\u002F11\u002Frecover-discourse-backup-change-domain-name",slug:"recover-discourse-backup-change-domain-name"},slug:P,year:"2017"}],fetch:[],mutations:void 0}}("text","element","\n","p","a","em",3,"WebPlatform","strong","h3","li",".","https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fops","webplatform\u002Fops","en-CA","root","ul","https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fsalt-states"," folder in ","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2017\u002F02\u002Fthings-i-ve-worked-on-while-maintaining-webplatform-org\u002F","tranche-de-vie",2,"Highlights","1. Software upgrades and \"Cloud hop\" re-deployments","2. Rewrite deployment code to enable us working on a feature without affecting the live site","3. Refactor deployment strategy to help scale web applications regardless of their programming languages","4. Create script to create deployment server from a blank VM, with local Vagrant workspace","5. Implement SSO proof of concept using Mozilla Firefox Accounts","6. Provide infrastructure for WebAt25 and work with Ian","6. Convert all of MediaWiki and WordPress content into a static site generator.","h2","https:\u002F\u002Fwebplatform.github.io\u002Fblog\u002F2012\u002F10\u002Fbuilding-web-platforms-infrastructure\u002F","’s Achille’s heel was the deployment server.","DreamHost","code","webplatform\u002Fsalt-states","https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fsalt-pillar","webplatform\u002Fsalt-pillar","salt-master\u002F","vagrant-workbench\u002F","The ","things-i-ve-worked-on-while-maintaining-webplatform-org","2024-10-24T19:50:04.935Z","")));