__NUXT_JSONP__("/blog/2015/02/install-php5-memcached-pecl-extension-support-igbinary", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw){return {data:[{},{},{},{canonical:_,content:{title:"Install PHP5 Memcached PECL extension and have it support igbinary",locale:$,created:"2015-02-18T00:00:00.000Z",updated:"2023-02-18T00:00:00.000Z",canonical:_,status:"publish",revising:G,migrateLinks:true,migrateImages:G,gallery:G,caption:G,categories:[aa],tags:["linux","cloud-computing","procedure"],keywords:["Memcached","PECL","Ubuntu","dpkg","PHP5","php-fpm"],coverImage:{src:ab,text:"[Igbinary][igbinary-github] is a drop in replacement for the standard *PHP serializer*.\nInstead of the time and space consuming textual representation used by PHP’s serialize, *igbinary* stores PHP data structures in a compact binary form.\n[igbinary-github]: https:\u002F\u002Fgithub.com\u002Figbinary\u002Figbinary\n"},excerpt:"Main part of my job is to make sure that its easy to reinstall a VM. Sometimes you need to build a package from source. How do you distribute it? Here’s one way",toc:[{id:ac,depth:w,text:ad},{id:ae,depth:w,text:af},{id:ag,depth:w,text:ah},{id:ai,depth:w,text:aj}],body:{type:P,children:[{type:b,tag:k,props:{},children:[{type:a,value:"I was trying to figure out why my PHP setup would never have both "},{type:b,tag:h,props:{},children:[{type:a,value:Q}]},{type:a,value:" to\nbe used to serialize sessions in Memcached using current Memcached PECL\nextension."}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"After some research I found a procedure in an answer on StackOverflow."}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"But it didn't solve my main requirement: "},{type:b,tag:ak,props:{},children:[{type:a,value:"Since I do automated deployment, I\nMUST be able to move packages around"}]},{type:a,value:". Since all my VMs are using the same\ndistribution and that I already have my own "},{type:b,tag:m,props:{},children:[{type:a,value:"apt"}]},{type:a,value:" repo, I could just add "},{type:b,tag:m,props:{},children:[{type:a,value:"one\nmore"}]},{type:a,value:" deb file."}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"My objective was then now to package it for deployment. To do this, I discovered\n"},{type:b,tag:n,props:{href:al,rel:[x,y,z],target:A},children:[{type:a,value:"Jordan Sissel's project called "},{type:b,tag:ak,props:{},children:[{type:a,value:am}]}]},{type:a,value:" which stands for \""},{type:b,tag:m,props:{},children:[{type:a,value:"Freaking Package\nManager"}]},{type:a,value:"\" (sic)"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"My target deployment runs on Ubuntu 14.04 LTS and I want it to replace upstream\n"},{type:b,tag:h,props:{},children:[{type:a,value:"php5-memcached"}]},{type:a,value:" package as a simple "},{type:b,tag:m,props:{},children:[{type:a,value:an}]},{type:a,value:" file."}]},{type:a,value:e},{type:b,tag:H,props:{id:ac},children:[{type:b,tag:n,props:{href:"#build-from-pecl-source",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:ad}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"NOTE"}]},{type:a,value:" The following was run on an Ubuntu 14.04 VM with "},{type:b,tag:n,props:{href:ao,rel:[x,y,z],target:A},children:[{type:a,value:"@rynop's procedure"}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"Setting the machine up to make a package."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,C,D]},children:[{type:a,value:S}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:U}]},{type:a,value:" php5-dev pkg-config php-pear\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{start:w},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"Follow steps from the procedure. Those were taken from the "},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{href:ao,rel:[x,y,z],target:A},children:[{type:a,value:"Original procedure"}]}]},{type:a,value:", just before issuing "},{type:b,tag:h,props:{},children:[{type:a,value:".\u002Fconfigure"}]},{type:a,value:R}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,"assign-left",g]},children:[{type:a,value:"pecl_memcached_ver"}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"\"2.2.0\""}]},{type:a,value:"\npecl download memcached-"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"tar"}]},{type:a,value:" xzvf memcached-"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:".tgz\n"},{type:b,tag:c,props:{className:[d,C,D]},children:[{type:a,value:S}]},{type:a,value:" memcached-"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:"\u002F\nphpize\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{start:aq},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"I realized that under Ubuntu 14.04 we also needed to "},{type:b,tag:m,props:{},children:[{type:a,value:"disable Memcached SASL"}]},{type:a,value:"\nso I had to do it differently"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:h,props:{},children:[{type:a,value:".\u002Fconfigure "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v}]},{type:a,value:"\n    --enable-memcached-igbinary "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v}]},{type:a,value:"\n    --disable-memcached-sasl\n"}]}]}]},{type:a,value:e},{type:b,tag:H,props:{id:ae},children:[{type:b,tag:n,props:{href:"#make-a-deb-package",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:af}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"Install "},{type:b,tag:n,props:{href:al,rel:[x,y,z],target:A},children:[{type:a,value:"jordansissel\u002Ffpm"}]},{type:a,value:". Ideally this should be done on a machine or VM\nimage you're OK building things on and you can re-use."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:U}]},{type:a,value:" ruby-dev gcc\n\n"},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"# Install fpm gem globally."}]},{type:a,value:"\ngem "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:" fpm\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{start:w},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"Check the package contents you want to replace and let's replicate for our\nown purposes."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:h,props:{},children:[{type:a,value:ar},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"--list"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:as}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"grep"}]},{type:a,value:" php5-memcached\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"find"}]},{type:a,value:" \u002Fvar\u002Fcache\u002Fapt "},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-type"}]},{type:a,value:" f "},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-name"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"'*php5-memcached*'"}]},{type:a,value:"\ndpkg "},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-c"}]},{type:a,value:" \u002Fvar\u002Fcache\u002Fapt\u002Farchives\u002Fphp5-memcached_2.1.0-6build1_amd64.deb\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{start:aq},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"I figured out in the output that I only needed a few folders,\n"},{type:b,tag:h,props:{},children:[{type:a,value:"etc\u002Fphp5\u002Fmods-available\u002F"}]},{type:a,value:" and "},{type:b,tag:h,props:{},children:[{type:a,value:"usr\u002Flib\u002Fphp5\u002Ffoo"}]},{type:a,value:", so I created them\nmanually."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:W}]},{type:a,value:" etc\u002Fphp5\u002Fmods-available\u002F\n\n"},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"# Adjust memcached.ini to suit your tastes, then prepare it for packaging"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:" memcached.ini etc\u002Fphp5\u002Fmods-available\u002F\n\n"},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"# Make sure the usr\u002Flib\u002Fphp5\u002Ffoo path matches in"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"# the result of `dpkg -c` you issued"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:W}]},{type:a,value:" usr\u002Flib\u002Fphp5\u002F20121212\u002F\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:" modules\u002Fmemcached.so usr\u002Flib\u002Fphp5\u002F20121212\u002F\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{start:4},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"Magic will happen"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"fpm "},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-s"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"dir"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-t"}]},{type:a,value:" deb "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-n"}]},{type:a,value:" php5-memcached "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-v"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"2.2"}]},{type:a,value:".0-wpd "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-m"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"'\u003Cyour@email.org\u003E'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"--description"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"'PHP 5.5 PECL igbinary + memcached support'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-d"}]},{type:a,value:" libmemcached10 "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v}]},{type:a,value:"\n    etc\u002F usr\u002F\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"I could have used "},{type:b,tag:h,props:{},children:[{type:a,value:"--replaces REPLACES"}]},{type:a,value:" in "},{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Fjordansissel\u002Ffpm\u002Fwiki",rel:[x,y,z],target:A},children:[{type:b,tag:h,props:{},children:[{type:a,value:am}]},{type:a,value:" options"}]},{type:a,value:", but when I did\nthis package, I didn't know which syntax to use. Its an optional argument\nanyway."}]},{type:a,value:e},{type:b,tag:o,props:{start:5},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"Test if the package works"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:h,props:{},children:[{type:a,value:ar},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-i"}]},{type:a,value:" \u002Fsrv\u002Fwebplatform\u002Fapt\u002Fphp5-memcached_2.2.0-wpd_amd64.deb\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"The output ..."}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,"language-text"]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"  (Reading database ... 118781 files and directories currently installed.)\n  Preparing to unpack ...\u002Fphp5-memcached_2.2.0-wpd_amd64.deb ...\n  Unpacking php5-memcached (2.2.0-wpd) over (2.1.0-6build1) ...\n  Setting up php5-memcached (2.2.0-wpd) ...\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Success!"}]},{type:a,value:e},{type:b,tag:o,props:{start:6},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"Look at the "},{type:b,tag:h,props:{},children:[{type:a,value:"phpinfo"}]},{type:a,value:" output"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:Y,props:{style:"float:unset;",src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F02\u002Fsessions_memcached_after.png",alt:Z},children:[{type:a,value:"\nAter: registered session handlers\n"}]},{type:a,value:e},{type:b,tag:H,props:{id:ag},children:[{type:b,tag:n,props:{href:"#update-your-private-apt-repository-or-create-one",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:ah}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"Then, in your own apt repository (if you do have one) here's how I rebuild\nthe index. If you only have a handful of packages, it can simply be a folder\nwith a bunch of deb files."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:W}]},{type:a,value:" \u002Fsrv\u002Fapt\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:" php5-memcached_2.2.0-wpd_amd64.deb \u002Fsrv\u002Fapt\n"},{type:b,tag:c,props:{className:[d,C,D]},children:[{type:a,value:S}]},{type:a,value:"  \u002Fsrv\u002Fapt\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:U}]},{type:a,value:" dpkg-dev\ndpkg-scanpackages "},{type:b,tag:c,props:{className:[d,C,D]},children:[{type:a,value:R}]},{type:a,value:" \u002Fdev\u002Fnull "},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:as}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"gzip"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,g]},children:[{type:a,value:"-9c"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:at}]},{type:a,value:" Packages.gz\n"},{type:b,tag:c,props:{className:[d,C,D]},children:[{type:a,value:"echo"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"'deb file:\u002Fsrv\u002Fapt .\u002F'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:at}]},{type:a,value:" \u002Fetc\u002Fapt\u002Fsources.list.d\u002Ffoo.list\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"If you want something more scalable than a directory with a bunch of "},{type:b,tag:h,props:{},children:[{type:a,value:an}]},{type:a,value:" and\na "},{type:b,tag:h,props:{},children:[{type:a,value:"Package.gz"}]},{type:a,value:" that you rsync around, there are other procedures available\nonline."}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Done!"}]},{type:a,value:e},{type:b,tag:H,props:{id:ai},children:[{type:b,tag:n,props:{href:"#screenshots",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:aj}]},{type:a,value:e},{type:b,tag:l,props:{style:"overflow:hidden;clear:both;",className:["thumbnails","gallery","flex","flex-row","flex-wrap"]},children:[{type:a,value:e},{type:b,tag:Y,props:{className:[au],src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F02\u002Fsessions_memcached_before2.png",alt:Z},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Session handlers shows memcached"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:Y,props:{className:[au],src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F02\u002Fsessions_memcached_before.png",alt:Z},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:Q}]},{type:a,value:" support no?"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},text:"---\ntitle: Install PHP5 Memcached PECL extension and have it support igbinary\nlocale: en-CA\ncreated: 2015-02-18\nupdated: 2023-02-18\ncanonical: 'https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F02\u002Finstall-php5-memcached-pecl-extension-support-igbinary\u002F'\nstatus: publish\nrevising: false\nmigrateLinks: true\nmigrateImages: false\ngallery: false\ncaption: false\ncategories:\n  - projects\ntags:\n  - linux\n  - cloud-computing\n  - procedure\nkeywords:\n  - Memcached\n  - PECL\n  - Ubuntu\n  - dpkg\n  - PHP5\n  - php-fpm\ncoverImage:\n  src: ~\u002Fassets\u002Fimages\u002Flogos\u002Fphp-igbinary.png\n  text: |\n    [Igbinary][igbinary-github] is a drop in replacement for the standard *PHP serializer*.\n    Instead of the time and space consuming textual representation used by PHP’s serialize, *igbinary* stores PHP data structures in a compact binary form.\n    [igbinary-github]: https:\u002F\u002Fgithub.com\u002Figbinary\u002Figbinary\nexcerpt: \u003E-\n  Main part of my job is to make sure that its easy to reinstall a VM. Sometimes\n  you need to build a package from source. How do you distribute it? Here’s one\n  way\n---\n\nI was trying to figure out why my PHP setup would never have both `igbinary` to\nbe used to serialize sessions in Memcached using current Memcached PECL\nextension.\n\nAfter some research I found a procedure in an answer on StackOverflow.\n\nBut it didn't solve my main requirement: **Since I do automated deployment, I\nMUST be able to move packages around**. Since all my VMs are using the same\ndistribution and that I already have my own _apt_ repo, I could just add _one\nmore_ deb file.\n\nMy objective was then now to package it for deployment. To do this, I discovered\n[Jordan Sissel's project called **fpm**][0] which stands for \"_Freaking Package\nManager_\" (sic)\n\nMy target deployment runs on Ubuntu 14.04 LTS and I want it to replace upstream\n`php5-memcached` package as a simple _.deb_ file.\n\n## Build from PECL source\n\n_NOTE_ The following was run on an Ubuntu 14.04 VM with [@rynop's procedure][1].\n\n1. Setting the machine up to make a package.\n\n```bash\nmkdir \u002Ftmp\u002Fphp5-memcached\ncd \u002Ftmp\u002Fphp5-memcached\napt-get install -y php5-dev pkg-config php-pear\n```\n\n2. Follow steps from the procedure. Those were taken from the _[Original procedure][1]_, just before issuing `.\u002Fconfigure`.\n\n```bash\npecl_memcached_ver=\"2.2.0\"\npecl download memcached-${pecl_memcached_ver}\ntar xzvf memcached-${pecl_memcached_ver}.tgz\ncd memcached-${pecl_memcached_ver}\u002F\nphpize\n```\n\n3. I realized that under Ubuntu 14.04 we also needed to _disable Memcached SASL_\n   so I had to do it differently\n\n```bash\n.\u002Fconfigure \\\n    --enable-memcached-igbinary \\\n    --disable-memcached-sasl\n```\n\n## Make a .deb package\n\n1. Install [jordansissel\u002Ffpm][0]. Ideally this should be done on a machine or VM\n   image you're OK building things on and you can re-use.\n\n```bash\napt-get install -y ruby-dev gcc\n\n# Install fpm gem globally.\ngem install fpm\n```\n\n2. Check the package contents you want to replace and let's replicate for our\n   own purposes.\n\n```bash\ndpkg --list | grep php5-memcached\nfind \u002Fvar\u002Fcache\u002Fapt -type f -name '*php5-memcached*'\ndpkg -c \u002Fvar\u002Fcache\u002Fapt\u002Farchives\u002Fphp5-memcached_2.1.0-6build1_amd64.deb\n```\n\n3. I figured out in the output that I only needed a few folders,\n   `etc\u002Fphp5\u002Fmods-available\u002F` and `usr\u002Flib\u002Fphp5\u002Ffoo`, so I created them\n   manually.\n\n```bash\nmkdir -p etc\u002Fphp5\u002Fmods-available\u002F\n\n# Adjust memcached.ini to suit your tastes, then prepare it for packaging\ncp memcached.ini etc\u002Fphp5\u002Fmods-available\u002F\n\n# Make sure the usr\u002Flib\u002Fphp5\u002Ffoo path matches in\n# the result of `dpkg -c` you issued\n\nmkdir -p usr\u002Flib\u002Fphp5\u002F20121212\u002F\ncp modules\u002Fmemcached.so usr\u002Flib\u002Fphp5\u002F20121212\u002F\n```\n\n4. Magic will happen\n\n```bash\nfpm -s dir \\\n    -t deb \\\n    -n php5-memcached \\\n    -v 2.2.0-wpd \\\n    -m '\u003Cyour@email.org\u003E' \\\n    --description 'PHP 5.5 PECL igbinary + memcached support' \\\n    -d libmemcached10 \\\n    etc\u002F usr\u002F\n```\n\nI could have used `--replaces REPLACES` in [`fpm` options][3], but when I did\nthis package, I didn't know which syntax to use. Its an optional argument\nanyway.\n\n5. Test if the package works\n\n```bash\ndpkg -i \u002Fsrv\u002Fwebplatform\u002Fapt\u002Fphp5-memcached_2.2.0-wpd_amd64.deb\n```\n\nThe output ...\n\n```\n  (Reading database ... 118781 files and directories currently installed.)\n  Preparing to unpack ...\u002Fphp5-memcached_2.2.0-wpd_amd64.deb ...\n  Unpacking php5-memcached (2.2.0-wpd) over (2.1.0-6build1) ...\n  Setting up php5-memcached (2.2.0-wpd) ...\n```\n\nSuccess!\n\n6. Look at the `phpinfo` output\n\n\u003Capp-image style=\"float:unset;\" src=\"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F02\u002Fsessions_memcached_after.png\" alt=\"OpenStack Cloud-Init dialog\"\u003E\nAter: registered session handlers\n\u003C\u002Fapp-image\u003E\n\n## Update your private apt repository (or create one)\n\n1. Then, in your own apt repository (if you do have one) here's how I rebuild\n   the index. If you only have a handful of packages, it can simply be a folder\n   with a bunch of deb files.\n\n```bash\nmkdir -p \u002Fsrv\u002Fapt\ncp php5-memcached_2.2.0-wpd_amd64.deb \u002Fsrv\u002Fapt\ncd  \u002Fsrv\u002Fapt\napt-get install -y dpkg-dev\ndpkg-scanpackages . \u002Fdev\u002Fnull | gzip -9c \u003E Packages.gz\necho 'deb file:\u002Fsrv\u002Fapt .\u002F' \u003E \u002Fetc\u002Fapt\u002Fsources.list.d\u002Ffoo.list\n```\n\nIf you want something more scalable than a directory with a bunch of `.deb` and\na `Package.gz` that you rsync around, there are other procedures available\nonline.\n\nDone!\n\n## Screenshots\n\n\u003Cdiv style=\"overflow:hidden;clear:both;\" class=\"thumbnails gallery flex flex-row flex-wrap\"\u003E\n\n\u003Capp-image class=\"w-1\u002F3\" src=\"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F02\u002Fsessions_memcached_before2.png\" alt=\"OpenStack Cloud-Init dialog\"\u003E\n\nSession handlers shows memcached\n\n\u003C\u002Fapp-image\u003E\n\n\u003Capp-image class=\"w-1\u002F3\" src=\"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F02\u002Fsessions_memcached_before.png\" alt=\"OpenStack Cloud-Init dialog\"\u003E\n\n*igbinary* support no?\n\n\u003C\u002Fapp-image\u003E\n\n\u003C\u002Fdiv\u003E\n\n\u003C!--#TODO-Improve-Code-Blocks--\u003E\n\n[0]: https:\u002F\u002Fgithub.com\u002Fjordansissel\u002Ffpm\n[1]:\n  https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F24407095\u002Ferror-when-installing-pecl-memcached\u002F28597188#answer-24892703\n[2]: \u002Fcdn-cgi\u002Fl\u002Femail-protection\n[3]: https:\u002F\u002Fgithub.com\u002Fjordansissel\u002Ffpm\u002Fwiki\n",dir:"\u002Fblog\u002F2015\u002F02",path:"\u002Fblog\u002F2015\u002F02\u002Finstall-php5-memcached-pecl-extension-support-igbinary",extension:".md",slug:av,createdAt:aw,updatedAt:aw,category:aa},coverImage:{toc:[],body:{type:P,children:[{type:b,tag:k,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Figbinary\u002Figbinary",rel:[x,y,z],target:A},children:[{type:a,value:"Igbinary"}]},{type:a,value:" is a drop in replacement for the standard "},{type:b,tag:m,props:{},children:[{type:a,value:"PHP serializer"}]},{type:a,value:".\nInstead of the time and space consuming textual representation used by PHP’s serialize, "},{type:b,tag:m,props:{},children:[{type:a,value:Q}]},{type:a,value:" stores "},{type:b,tag:"abbr",props:{lang:"en",title:"Hypertext Pre Processor Programming language"},children:[{type:a,value:"PHP"}]},{type:a,value:" data structures in a compact binary form."}]}]},text:"[Igbinary][igbinary-github] is a drop in replacement for the standard *PHP serializer*.\nInstead of the time and space consuming textual representation used by PHP’s serialize, *igbinary* stores \u003Cabbr lang=\"en\" title=\"Hypertext Pre Processor Programming language\"\u003EPHP\u003C\u002Fabbr\u003E data structures in a compact binary form.\n[igbinary-github]: https:\u002F\u002Fgithub.com\u002Figbinary\u002Figbinary\n",src:ab},month:"02",next:{title:"Creating a new Ubuntu Salt master from the terminal using Cloud-Init",locale:$,path:"\u002Fblog\u002F2015\u002F03\u002Fcreating-new-ubuntu-salt-master-terminal-using-cloud-init",slug:"creating-new-ubuntu-salt-master-terminal-using-cloud-init"},preamble:{toc:[],body:{type:P,children:[]},text:""},prettyfiedTemporalDate:{prettified:"Wednesday, February 18, 2015",temporalDate:"2015-02-18"},prev:{title:"HHVM et Hack; ce qui les distingue de PHP",locale:"fr-CA",path:"\u002Fblog\u002F2015\u002F02\u002Fhhvm-et-hack-ce-qui-les-distingue-de-php",slug:"hhvm-et-hack-ce-qui-les-distingue-de-php"},slug:av,year:"2015"}],fetch:[],mutations:void 0}}("text","element","span","token","\n"," ","variable","code","function","parameter","p","div","em","a","ol","li","nuxt-content-highlight","pre","line-numbers","language-bash","punctuation","\\",2,"nofollow","noopener","noreferrer","_blank","\n    ","builtin","class-name","operator","string",false,"h2","true",-1,"icon","icon-link","mkdir","install","comment","root","igbinary",".","cd","apt-get","-y","${pecl_memcached_ver}","-p","cp","app-image","OpenStack Cloud-Init dialog","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F02\u002Finstall-php5-memcached-pecl-extension-support-igbinary\u002F","en-CA","projects","~\u002Fassets\u002Fimages\u002Flogos\u002Fphp-igbinary.png","build-from-pecl-source","Build from PECL source","make-a-deb-package","Make a .deb package","update-your-private-apt-repository-or-create-one","Update your private apt repository (or create one)","screenshots","Screenshots","strong","https:\u002F\u002Fgithub.com\u002Fjordansissel\u002Ffpm","fpm",".deb","https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F24407095\u002Ferror-when-installing-pecl-memcached\u002F28597188#answer-24892703"," \u002Ftmp\u002Fphp5-memcached\n",3,"dpkg ","|","\u003E","w-1\u002F3","install-php5-memcached-pecl-extension-support-igbinary","2024-10-24T19:43:51.723Z")));