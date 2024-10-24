__NUXT_JSONP__("/blog/tag/webplatform-docs", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax){return {data:[{},{},{contents:[{title:"Things I’ve worked on in the last two years while maintaining WebPlatform.org",locale:y,created:"2017-02-09T00:00:00.000Z",updated:"2023-11-20T00:00:00.000Z",canonical:"https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2017\u002F02\u002Fthings-i-ve-worked-on-while-maintaining-webplatform-org\u002F",status:z,revising:u,categories:[q],tags:[A,r],excerpt:"Before starting working on the WebPlatform Project, I knew that I was jumping in a complex project that required all my skills all at once.",toc:[{depth:B,text:"How was WebPlatform infrastructure when I started..."},{depth:B,text:K},{depth:o,text:L},{depth:o,text:M},{depth:o,text:N},{depth:o,text:O},{depth:o,text:P},{depth:o,text:Q},{depth:o,text:"7. Compatibility data on WebPlatform"},{depth:o,text:R}],body:{type:C,children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I’ve worked at the W3C for two years. My assignment was on the WebPlatform.org project and my responsibility was to keep everything in order."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"While I am archiving things and closing my notes of the last two years I thought I’d share with you from where I started, and what I’ve done."}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:a,value:"How was "},{type:b,tag:k,props:{},children:[{type:a,value:n}]},{type:a,value:" infrastructure when I started..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:n}]},{type:a,value:".org had been running on about 20 VMs. Until my most recent work to convert everything into static-site generators, It still was using that many virtual servers. More on that later."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When I arrived into the project, every component of the site was in a good shape. I could build any server by booting a from a blank Ubuntu 10.04 LTS with a name that’ll tell the configuration management what to install on the new \"minion\". "},{type:b,tag:l,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fryandlane.com\u002Fblog\u002F"},children:[{type:a,value:"Ryan Lane"}]}]},{type:a,value:", the person I came to replace, "},{type:b,tag:e,props:{href:S},children:[{type:a,value:"did a great job"}]},{type:a,value:"!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This was the first time in my career where I could replace any server using a configuration management tool. I’ve used Puppet, Chef on small projects, but "},{type:b,tag:k,props:{},children:[{type:a,value:n}]},{type:a,value:".org was much bigger and was using "},{type:b,tag:e,props:{href:"https:\u002F\u002Fsaltproject.io\u002F"},children:[{type:a,value:"Salt Stack"}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It felt great to be assured that almost every piece was replaceable without worrying about individual pieces. But still, to change a password required to dig in folders, edit and cross fingers. It was a cry for improvement."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As for the code WepPlatform was using to serve the community at that time was basically a bunch of open-source projects with a few manual edits here and there. The theme, the configuration, and so on."}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:T},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:n}]},{type:a,value:U}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We had backups, but yet, if \"deployment\" VM would lose its data, I would have also had to guess how each component were put together and rebuild every server. "},{type:b,tag:k,props:{},children:[{type:a,value:n}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Luckily it didn’t happen."}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:a,value:K}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"During the two years I’ve been on "},{type:b,tag:k,props:{},children:[{type:a,value:n}]},{type:a,value:", we’ve been through a full system software upgrade, we were initially running on Ubuntu 10.04 LTS, and 2 \"cloud hops\" (i.e. re-install everything on another "},{type:b,tag:k,props:{},children:[{type:a,value:"cloud"}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Our \"cloud-hops\" were from initial "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.hpcloud.com\u002F"},children:[{type:a,value:"HP Cloud"}]},{type:a,value:" in December 2013 to our very own Open-Stack cluster — a 4 blade server borrowed by our friends at "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.dreamhost.com\u002F"},children:[{type:a,value:W}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Thanks to my good friend "},{type:b,tag:k,props:{},children:[{type:a,value:"Etienne Lachance"}]},{type:a,value:" who helped "},{type:b,tag:l,props:{},children:[{type:a,value:"a lot"}]},{type:a,value:" installing the various components. The "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.openstack.org\u002F"},children:[{type:a,value:"Open-Stack documentation"}]},{type:a,value:" has a lot of rough edges, but we came through it and ran the system without too much issues for a year."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The second \"cloud-hop\" was between the self-managed Open-Stack cluster into the very beta "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.dreamhost.com\u002Fcloud\u002Fcomputing\u002F"},children:[{type:a,value:"DreamCompute"}]},{type:a,value:" platform that "},{type:b,tag:k,props:{},children:[{type:a,value:W}]},{type:a,value:" opened up."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All of this to tell that the challenge wasn’t always to keep things up when crisis was happening, but also the work involved in doing maintenance:"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Make everything refer to resources over SSL\u002FTLS"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"software upgrades and security patches, "}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"rewrite of every component; blog, wiki, issue tracker, etc, so their configuration are managed and the theme is applied on top of a clean code checkout"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A lot of "},{type:b,tag:k,props:{},children:[{type:a,value:"creeping dependencies"}]},{type:a,value:" and possible places to break."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Most of the code had "},{type:b,tag:X,props:{},children:[{type:a,value:"https:\u002F\u002F*.webplatform.org"}]},{type:a,value:" hardcoded manually. Meaning that I couldn’t install a full copy of the site. This made it hard to rework parts of the site without impacting the live site."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Like I was saying, the "},{type:b,tag:e,props:{href:S},children:[{type:a,value:"work that has been done before me was great"}]},{type:a,value:"! Everything was in place and the community was already writing docs! In fact, "},{type:b,tag:k,props:{},children:[{type:a,value:"before start working on WebPlatform, I knew that I was jumping in a complex project that required all my skills all at once"}]},{type:a,value:". "},{type:b,tag:k,props:{},children:[{type:a,value:"Rewriting deployment code"}]},{type:a,value:" crucially needed time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That’s what I did while making sure the site was running smoothly."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Not only the code was assembled quickly, but also the most important server, the  \"deployment\" server, was the only piece that needed work to be also replaceable like the other parts of the system."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The cherry on the sundae is that the configuration management scripts refactor is now public, it allowed me to re-deploy WordPress, MediaWiki, BugGenie, Dabblet, Etherpad, Piwik and others."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With this refactor, I achieved a \"sysadmin dream\"; I can control the passwords and secret from one file and apply the change to both the service and the appropriate configuration file at the next configuration management system run."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If your happen to manage servers that runs WordPress, MediaWiki, MariaDB, Memcached, ElasticSearch or a set of static HTML files, it shouldn’t be hard to reuse."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you want to use my work, you can fork "},{type:b,tag:e,props:{href:F},children:[{type:a,value:Y}]},{type:a,value:" and "},{type:b,tag:e,props:{href:Z},children:[{type:a,value:_}]},{type:a,value:" and use the same code as me to run our \"deployment\" server (now called \"salt\") for your own site."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All you need is an empty VM called \"salt\", install the two repositories plus one containing secrets, and you should be good to go."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The installation of the \"deployment\" VM is a bit more complex than two git-clone, you can refer to the "},{type:b,tag:l,props:{},children:[{type:a,value:$}]},{type:a,value:G},{type:b,tag:e,props:{href:v},children:[{type:a,value:w}]},{type:a,value:" and use the "},{type:b,tag:l,props:{},children:[{type:a,value:aa}]},{type:a,value:" to have your own local copy using Vagrant and Virtual Box — more on this later."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"NOTE"}]},{type:a,value:" You might need the "},{type:b,tag:l,props:{},children:[{type:a,value:"secrets"}]},{type:a,value:" repository, I will eventually publish an empty shell so people won’t need to reverse engineer."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:N}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Setup conventions in deployment strategy so I could run RubyOnRails, NodeJS, Python, PHP and static files without much change in how to to deploy them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That one was about harmonizing how things are deployed so I could handle separation of concerns when exposing on the web. You can "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fops\u002Fissues\u002F115#issuecomment-95629216"},children:[{type:a,value:"see my monologue on the subject"}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:O}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Create a local workspace so I can work on server deployment scripts on my local machine, build and destroy VMs to ensure all runs smoothly in the cloud."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Most of the time I was maintaining scripts "},{type:b,tag:e,props:{href:F},children:[{type:a,value:Y}]},{type:a,value:", "},{type:b,tag:e,props:{href:Z},children:[{type:a,value:_}]},{type:a,value:" on a VM called "},{type:b,tag:k,props:{},children:[{type:a,value:"deployment.webplatform.org"}]},{type:a,value:" (now called "},{type:b,tag:k,props:{},children:[{type:a,value:"salt.webplatform.org"}]},{type:a,value:") on production. With the work I did with the "},{type:b,tag:e,props:{href:F},children:[{type:a,value:"salt-states"}]},{type:a,value:", I could build a complete mirror of the whole site as "},{type:b,tag:k,props:{},children:[{type:a,value:"webplatformstaging.org"}]},{type:a,value:". But yet, I needed to use servers exposed to the public."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With my work on "},{type:b,tag:e,props:{href:v},children:[{type:a,value:w}]},{type:a,value:", I could run two or three VMs in VirtualBox and run quick tests prior to run them. I wished I had this when I started."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:x},{type:b,tag:l,props:{},children:[{type:a,value:$}]},{type:a,value:G},{type:b,tag:e,props:{href:v},children:[{type:a,value:w}]},{type:a,value:" are the scripts I wrote to achieve #1 but now aren’t limited to where you run them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:x},{type:b,tag:l,props:{},children:[{type:a,value:aa}]},{type:a,value:G},{type:b,tag:e,props:{href:v},children:[{type:a,value:w}]},{type:a,value:" is a VirtualBox and Vagrant script to create a \"salt\" master from which I could run locally."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The vagrant-minions\u002F folder is basically one YAML file where I describe nodes I need to bring up and Vagrant does the rest of the job for me."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"At the end of a "},{type:b,tag:X,props:{},children:[{type:a,value:"vagrant up elastic0"}]},{type:a,value:" I would see on my local vagrant-workbench VM’s salt-master a salt minion called \"elastic0\" ready to be managed locally."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Design and implement a prototype to achieve SSO for web apps without using SAML, Kerberos, or *LDAP."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I created a small javascript file that bootstraps the local web application to sync session state with a \"source of truth\"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It goes like that;"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Check if a session exists through a hidden iframe to accounts..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If a session exists, check if local web app has same data\n"},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If not the same data, destroy the local session"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If has no session, attempt to start a session\n"},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If no user exists locally, create one, then start a session"}]},{type:a,value:c}]}]},{type:a,value:c}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I had something running in two separate MediaWiki installations and I have recorded a screencast showing it"},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=rutwd1Z_1TE"},children:[{type:a,value:"6"}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Basically the JavaScript client "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fwww.webplatform.org\u002Fblob\u002Fmaster\u002Fsrc\u002Ffiles\u002Fassets\u002Fjs\u002Fsso.js"},children:[{type:a,value:"webplatform\u002Fwww.webplatform.org\u002F....sso.js"}]},{type:a,value:" requires the local web application ("},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fmediawiki-fxa-sso\u002Fblob\u002Fwebplatform-sso\u002Fincludes\u002FWebPlatformAuthHooks.php#L82"},children:[{type:a,value:"around here in the code"}]},{type:a,value:") to receive requests from it, communicate through its backend to \"source of truth\"  (\"profile.accounts.webplatform.org\") and return an HTTP return code (401, 400, 204) to confirm what happened."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I’ve made all this to have our Wiki, Issue tracker, Blog, and Annotation system to prevent users to have different username passwords to sync, but I lacked time to have it all working and the project died. Other priorities came up."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Luckily for me, that work got Mozilla Firefox Accounts team interested to invite me over to spend a week with them and it was great!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I have hopes to eventually publish a PHP module out of what I’ve done so I could prevent this to be wasted."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That was great! I enjoyed collaborating with an external provider and make something useful elsewhere at W3C."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"7. Compatibility data on "},{type:b,tag:k,props:{},children:[{type:a,value:n}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I had the chance to spend time with Doug and work out all the tiny details to create a schema to store data we could crawl from MDN."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I’ve worked on a system to keep a copy into Memcached of the generated HTML. This helped a lot on page render time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now that the site is going into static site generator, this is going to go to waste :("}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:R}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Hopefully with this in place we’ll be able to shut down everything of "},{type:b,tag:k,props:{},children:[{type:a,value:n}]},{type:a,value:", except a simple web server serving HTML files."}]}]},dir:"\u002Fblog\u002F2017\u002F02",path:"\u002Fblog\u002F2017\u002F02\u002Fthings-i-ve-worked-on-while-maintaining-webplatform-org",extension:H,slug:"things-i-ve-worked-on-while-maintaining-webplatform-org",createdAt:ab,updatedAt:ab,category:q,prettyfiedTemporalDate:{prettified:"Thursday, February 9, 2017",temporalDate:"2017-02-09"}},{title:"Leaving W3C",locale:y,created:"2015-07-30T00:00:00.000Z",updated:"2023-02-18T00:00:00.000Z",canonical:"https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F07\u002Fleaving-w3c\u002F",status:z,revising:u,categories:[q],tags:[A,r],coverImage:{src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F07\u002F20150727-Gift-W3C.jpg",alt:"Renoir’s picture",text:"Picture of me when I received a farewell gift from the W3C it\nwas an autographied book signed by [Sir Tim Berners-Lee][whois-timbl]\nand a small trophy. Today (2020), my name appears in\n[the W3C Team Alumni][w3t-alumni]\n[w3t-alumni]: https:\u002F\u002Fwww.w3.org\u002Fstaff\u002Falumni\u002F#renoir-boulanger\n[whois-timbl]: https:\u002F\u002Fwww.w3.org\u002FPeople\u002FBerners-Lee\u002FFAQ.html\n"},preamble:{disable:u,text:ac},toc:[{id:ad,depth:B,text:ae}],body:{type:C,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Two years ago I announced "},{type:b,tag:t,props:{to:af},children:[{type:a,value:"I was joining W3C"}]},{type:a,value:" as a full-time staff to "},{type:b,tag:e,props:{href:I,rel:[g,h,i],target:j},children:[{type:a,value:"work\non the WebPlatform project"}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A detail I didn't share was that, like many "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.w3.org\u002Fstaff\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"of my W3C teammates"}]},{type:a,value:", we are\nfreelancers attached to one of the W3C host sites --- mine was with "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.w3.org\u002FConsortium\u002Ffacts#org",rel:[g,h,i],target:j,title:"Facts about the W3C and its Organizational structure"},children:[{type:a,value:"MIT"}]},{type:a,value:".\nLike any contract, it has an ending date and by tomorrow, mine will be over."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I've spent two amazing years improving the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130115092509\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"WebPlatform.org website"}]},{type:a,value:". It was\nreally a dream that came true."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I've worked on many projects such as improving the server deployment strategy in\nwhich we can now basically shut down every component of the site and rebuild\nfrom scratch only using source-controlled configuration management scripts."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"One of the best things of being part of W3C, even though I was working most of\nthe time not in a team, was that I had a great opportunity to work in\ncollaboration with my wonderful colleagues, and my (now former) manager "},{type:b,tag:e,props:{href:"http:\u002F\u002Fschepers.cc\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Doug\nSchepers"}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's been a pleasure and a privilege to get to work with you all, and I won't\nforget the great moments, the conversations, the travels, the challenges. But my\ntime is up now, I got to hand my [ssh] keys."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I hope our paths will cross again."}]},{type:a,value:c},{type:b,tag:"app-image",props:{figcaption:"The W3C Team taken during TPAC 2013 in Shenzhen, China.",src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F07\u002Fteam-photo-med.jpg"},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Photo credits"}]},{type:a,value:": Richard Ishida (source: "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.w3.org\u002FPeople\u002Fgallery\u002F#year2013",rel:[g,h,i],target:j},children:[{type:a,value:"W3C team gallery"}]},{type:a,value:V}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"hr",props:{},children:[]},{type:a,value:c},{type:b,tag:D,props:{id:ad},children:[{type:b,tag:e,props:{href:"#in-retrospective",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:ae}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Note"}]},{type:a,value:": This was written on 2024-09-30"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After the project stopped receiving funding in 2015, I voluntarily sustained (2015-2017) the infrastructure until the W3C Systems Team took over to permanently archive the site’s contents on W3C’s infrastructure. Fortunately for me the server infrastructure was \""},{type:b,tag:k,props:{},children:[{type:a,value:"self-healing"}]},{type:a,value:"\", each service would regularly check if its service was OK and knew how to start it back again, so it was pretty hands-off."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The last billed hours I made for the project was to host a static HTML version "},{type:b,tag:t,props:{to:"\u002Fblog\u002F2015\u002F07\u002Fmigrating-webplatform-org-mediawiki-into-git-history-and-into-markdown-files\u002F"},children:[{type:a,value:"by having converted every pages, commits, deletes of every pages from MediaWiki into files as if they were commited into GitHub"}]},{type:a,value:" ("},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fdocs",rel:[g,h,i],target:j},children:[{type:a,value:"GitHub "},{type:b,tag:k,props:{},children:[{type:a,value:"webplatform\u002Fdocs"}]},{type:a,value:" repository"}]},{type:a,value:ag}]},{type:a,value:c}]},dir:"\u002Fblog\u002F2015\u002F07",path:"\u002Fblog\u002F2015\u002F07\u002Fleaving-w3c",extension:H,slug:"leaving-w3c",createdAt:ah,updatedAt:ah,category:q,prettyfiedTemporalDate:{prettified:"Thursday, July 30, 2015",temporalDate:"2015-07-30"}},{title:"I am joining W3C to work on the WebPlatform project!",locale:y,created:ai,updated:ai,canonical:"https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F08\u002Fi-am-joining-w3c-to-work-on-the-webplatform-project\u002F",status:z,revising:u,categories:[q],tags:[A,r,"w3c"],coverImage:{src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2013\u002F07\u002Fwebplatform_padding_xlg-300x283.png",text:"Colorful W Logo created for the WebPlatform Project.\n"},excerpt:"My new job is to contribute to the success of the WebPlatform project, a rapidly growing web development collaborative documentation website. I would even call it the Web developer's missing manual on the Internet.",waybackMachineSnapshots:[{orig:"http:\u002F\u002Fblog.webplatform.org\u002F2013\u002F08\u002Fhi-my-name-s-renoir-ill-be-your-devops-for-the-web-platform\u002F",snapshots:[I,"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20131005213607\u002Fhttp:\u002F\u002Fblog.webplatform.org\u002F2013\u002F08\u002Fhi-my-name-s-renoir-ill-be-your-devops-for-the-web-platform\u002F"]},{orig:"http:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002F",snapshots:[aj]},{orig:"http:\u002F\u002Fhtml.adobe.com\u002Fopensource\u002F#wpd",snapshots:[J,"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130903062156\u002Fhttp:\u002F\u002Fhtml.adobe.com\u002Fopensource\u002F#wpd"]},{orig:"http:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fgoogle\u002F",snapshots:["https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130807101413\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fgoogle\u002F"]},{orig:"http:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fintel\u002F",snapshots:[ak]},{orig:"http:\u002F\u002Fwebplatform.org\u002Fstewards\u002Ffacebook\u002F",snapshots:["https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130212083250\u002Fhttp:\u002F\u002Fwebplatform.org:80\u002Fstewards\u002Ffacebook\u002F"]},{orig:"http:\u002F\u002Fwebplatform.org\u002Fstewards\u002Fgoogle\u002F",snapshots:["https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130212083254\u002Fhttp:\u002F\u002Fwebplatform.org\u002Fstewards\u002Fgoogle\u002F"]},{orig:"http:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fhp\u002F",snapshots:[al]},{orig:"http:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fmozilla",snapshots:["https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130718224134\u002Fhttp:\u002F\u002Fwww.webplatform.org:80\u002Fstewards\u002Fmozilla"]},{orig:"http:\u002F\u002Fwebplatform.org\u002Fstewards\u002Fopera\u002F",snapshots:[am]},{orig:"http:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fmicrosoft\u002F",snapshots:[an]},{orig:"http:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fnokia\u002F",snapshots:[ao]},{orig:"http:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fw3c\u002F",snapshots:[ap]}],toc:[],body:{type:C,children:[{type:b,tag:d,props:{},children:[{type:a,value:"In a recent post, I was explaining that "},{type:b,tag:t,props:{to:"\u002Fblog\u002F2013\u002F07\u002Fi-just-resigned-from-my-new-job-to-start-on-an-exciting-project"},children:[{type:a,value:"I resigned my\nposition"}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:x},{type:b,tag:e,props:{href:I,rel:[g,h,i],target:j},children:[{type:a,value:"new "},{type:b,tag:k,props:{},children:[{type:a,value:"exciting project"}]}]},{type:a,value:" that I was referring\nto is the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20160304014419\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002F"},children:[{type:a,value:n}]},{type:a,value:" project at the\n"},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.w3.org\u002F2012\u002F10\u002Fwebplatform.html.en"},children:[{type:a,value:aq}]},{type:a,value:m}]},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For people who do not know what the W3C is, it is the main international standards organization for the World Wide Web."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The WebPlatform project is a rapidly growing web development "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwebplatform.github.io\u002Fdocs\u002FWPD\u002FCommunity"},children:[{type:a,value:"collaborative documentation website"}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I would even call it the Web developer's missing manual for web developers to build quality web applications using the latest techniques."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As for the sponsors, it is backed by well known companies, that we refer to as\n"},{type:b,tag:e,props:{href:aj,rel:[g,h,i],target:j},children:[{type:a,value:ar}]},{type:a,value:",\nsuch as "},{type:b,tag:e,props:{href:J,rel:[g,h,i],target:j,title:as},children:[{type:a,value:at}]},{type:a,value:au},{type:b,tag:e,props:{href:"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130404094726\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fgoogle",rel:[g,h,i],target:j},children:[{type:a,value:av}]},{type:a,value:au},{type:b,tag:e,props:{href:"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20140304140402\u002Fhttps:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FProject:MDN_content_on_WebPlatform.org",rel:[g,h,i],target:j},children:[{type:a,value:aw}]},{type:a,value:",\nand Microsoft to name a few."}]},{type:a,value:c},{type:b,tag:"rb-notice-box",props:{variant:"info",className:["my-5"]},children:[{type:a,value:T},{type:b,tag:l,props:{slot:"header"},children:[{type:a,value:x},{type:b,tag:ax,props:{},children:[{type:a,value:"sponsors"}]},{type:a,value:ac},{type:b,tag:"ins",props:{},children:[{type:a,value:ar}]},{type:a,value:" were..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since 2015, the site has stopped receiving funding, we can see a note:"}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The WebPlatform project, supported by various stewards between 2012 and 2015,\nhas been discontinued. ("},{type:b,tag:e,props:{href:"https:\u002F\u002Fwebplatform.github.io\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"..."}]},{type:a,value:ag}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For context: I worked from 2013, up to the end when the sponsors retracted.\nNotes about what I’ve done is in\n"},{type:b,tag:t,props:{to:"\u002Fblog\u002F2015\u002F07\u002Fleaving-w3c#in-retrospective"},children:[{type:a,value:"leaving W3C"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For the sake of completeness, here is the list of the sponsors as they were on\nthe public website:"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:J,rel:[g,h,i],target:j,title:as},children:[{type:a,value:at}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Apple"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130212083250\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Ffacebook\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Facebook"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130212083254\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fgoogle\u002F",rel:[g,h,i],target:j},children:[{type:a,value:av}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:al,rel:[g,h,i],target:j,title:"HewlettHewlett-Packard, HP Inc."},children:[{type:a,value:"HP"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:ak,rel:[g,h,i],target:j},children:[{type:a,value:"Intel"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:an,rel:[g,h,i],target:j},children:[{type:a,value:"Microsoft"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130718224134\u002Fhttp:\u002F\u002Fwww.webplatform.org:80\u002Fstewards\u002Fmozilla\u002F",rel:[g,h,i],target:j},children:[{type:a,value:aw}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:ao,rel:[g,h,i],target:j},children:[{type:a,value:"Nokia"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:am,rel:[g,h,i],target:j},children:[{type:a,value:"Opera"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:ap,rel:[g,h,i],target:j},children:[{type:a,value:aq}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Later on, HP stopped providing hosting and DreamHost graciously helped us."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I will contribute to the site as a Developer Operations engineer. My work will\nbe basically to enhance the features and manage the server infrastructure of the\nsite as much as continuing what "},{type:b,tag:t,props:{to:"\u002Fblog\u002F2013\u002F02\u002Fconference-comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite\u002F"},children:[{type:a,value:"I already do as a "},{type:b,tag:k,props:{},children:[{type:a,value:"hobbyist"}]},{type:a,value:"\nspeaker"}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Roughly, it consist of everything I always did or dreamed of:"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Work on a flagship site with heavy traffic usage, with and for respected\nprofessionals around all the world"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Use my favourite operating system and tools in System Administration"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Technical liaison with Open-source communities"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Develop and maintain the community platform, with web development, ensuring\napplication performance, and implement continuous deployment"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Speak and participate at conferences related to web standards"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Contribute to "},{type:b,tag:e,props:{href:"https:\u002F\u002Fmovethewebforward.org\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"moving the web forward"}]},{type:a,value:",\nfull-time (!)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you are living in Montreal and you would like me to share with you on how to\nparticipate in this exciting project, "},{type:b,tag:ax,props:{},children:[{type:a,value:"just send me an e-mail and I’ll gladly\nanswer"}]},{type:a,value:m}]}]},dir:"\u002Fblog\u002F2013\u002F08",path:af,extension:H,slug:"i-am-joining-w3c-to-work-on-the-webplatform-project",createdAt:"2024-10-24T19:43:51.718Z",updatedAt:"2024-10-24T19:43:51.719Z",category:q,prettyfiedTemporalDate:{prettified:"Thursday, August 1, 2013",temporalDate:"2013-08-01"}}],taxonomyKey:r,taxonomy:{key:r}}],fetch:[],mutations:void 0}}("text","element","\n","p","a","li","nofollow","noopener","noreferrer","_blank","em","strong",".","WebPlatform",3,"h3","tranche-de-vie","webplatform-docs","ul","nuxt-link",true,"https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fops","webplatform\u002Fops","The ","en-CA","publish","career",2,"root","h2","blockquote","https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fsalt-states"," folder in ",".md","https:\u002F\u002Fwebplatform.github.io\u002Fblog\u002F2013\u002F08\u002Fhi-my-name-s-renoir-ill-be-your-devops-for-the-web-platform\u002F","https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20141012080018\u002Fhttp:\u002F\u002Fhtml.adobe.com\u002Fopensource\u002F#wpd","Highlights","1. Software upgrades and \"Cloud hop\" re-deployments","2. Rewrite deployment code to enable us working on a feature without affecting the live site","3. Refactor deployment strategy to help scale web applications regardless of their programming languages","4. Create script to create deployment server from a blank VM, with local Vagrant workspace","5. Implement SSO proof of concept using Mozilla Firefox Accounts","6. Provide infrastructure for WebAt25 and work with Ian","6. Convert all of MediaWiki and WordPress content into a static site generator.","https:\u002F\u002Fwebplatform.github.io\u002Fblog\u002F2012\u002F10\u002Fbuilding-web-platforms-infrastructure\u002F","\n  ","’s Achille’s heel was the deployment server.",").","DreamHost","code","webplatform\u002Fsalt-states","https:\u002F\u002Fgithub.com\u002Fwebplatform\u002Fsalt-pillar","webplatform\u002Fsalt-pillar","salt-master\u002F","vagrant-workbench\u002F","2024-10-24T19:43:51.729Z"," ","in-retrospective","In retrospective","\u002Fblog\u002F2013\u002F08\u002Fi-am-joining-w3c-to-work-on-the-webplatform-project",")","2024-10-24T19:43:51.727Z","2013-08-01T00:00:00.000Z","https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130328132045\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002F","https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130116171710\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fintel\u002F","https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130806182941\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fhp\u002F","https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130213053724\u002Fhttp:\u002F\u002Fwebplatform.org\u002Fstewards\u002Fopera\u002F","https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130806125714\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fmicrosoft\u002F","https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20130808004756\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fnokia\u002F","https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20131204185043\u002Fhttp:\u002F\u002Fwww.webplatform.org\u002Fstewards\u002Fw3c\u002F","W3C","stewards","As it was visible at the time via the WebArchive.org Wayback Machine","Adobe",",\n","Google","Mozilla","del")));