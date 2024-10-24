__NUXT_JSONP__("/blog/2015/04/upgrade-python-2-7-9-ubuntu-14-04-lts-making-deb-package", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at){return {data:[{},{},{},{canonical:P,content:{title:"Upgrade to Python 2.7.9 on Ubuntu 14.04 LTS and make your own .deb package for deployment",locale:I,created:"2015-04-05T00:00:00.000Z",updated:"2023-02-18T00:00:00.000Z",canonical:P,status:"publish",revising:Q,caption:y,caracteresBizzares:y,gallery:y,migrateCode:Q,migrateImages:y,migrateLinks:y,categories:[R],tags:["webplatform",J,"operations","best-practices"],keywords:["Python","ubuntu"],excerpt:"Need to run your web app with Python 2.7.9, but server environment uses Ubuntu Long Term Support? Don’t replace Python, leverage VirtualEnv instead!",toc:[{id:S,depth:z,text:T},{id:J,depth:z,text:U},{id:V,depth:z,text:W},{id:X,depth:Y,text:Z},{id:_,depth:z,text:$}],body:{type:K,children:[{type:b,tag:j,props:{},children:[{type:a,value:"I had this post hanging in my drafts on how I attempted to install a valid\nPython 2.7.9 runtime environment on Ubuntu 14.04 and make my own .deb package\nfor easy re-deployment."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:L,props:{},children:[{type:a,value:"IMPORTANT"}]},{type:a,value:" This procedure isn't complete as I had to shift focus elsewhere. I\nmight rework this article to adjust what's missing."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"While I understand that Ubuntu 14.04 "},{type:b,tag:h,props:{href:"https:\u002F\u002Faskubuntu.com\u002Fquestions\u002F559036\u002Fwhen-will-the-python-2-7-9-upgrades-be-available-from-apt-get-for-14-04lts#answer-560159",rel:[k,l,m],target:n},children:[{type:a,value:"will"}]},{type:a,value:p},{type:b,tag:h,props:{href:"https:\u002F\u002Fserverfault.com\u002Fquestions\u002F669859\u002Fhow-can-i-upgrade-python-to-2-7-9-on-ubuntu-14-4",rel:[k,l,m],target:n},children:[{type:a,value:"remain"}]},{type:a,value:" using "},{type:b,tag:aa,props:{},children:[{type:a,value:"Python 2.7.6"}]},{type:a,value:"\ninternally, applications we run can be configured to use another python\nenvironment. Its what virtualenv is all about after all, isn't it."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"This post attempts to install, and make an installable "},{type:b,tag:aa,props:{},children:[{type:a,value:".deb"}]},{type:a,value:" package of\n"},{type:b,tag:L,props:{},children:[{type:a,value:"Python 2.7.9"}]},{type:a,value:" and is meant to be used by web applications without touching\nthe system's python runtime."}]},{type:a,value:e},{type:b,tag:F,props:{id:S},children:[{type:b,tag:h,props:{href:"#why-not-replacing-internal-python-version",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:T}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"The reason is simple. If you replace internal Python version, other softwares\nwithin the OS will have broken dependencies."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"I realized this while I wanted to upgrade the version and breaking an hard\ndependency I have on Salt Stack. Since many components within a given Ubuntu\nversion relies on Python, it could break anything else. This is why I stopped\nworking on the idea of replacing internally, but instead to configure VirtualEnv\nto use another version instead."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"If you see procedures that shows you to replace telling you to use\n"},{type:b,tag:q,props:{},children:[{type:a,value:"update-alternatives"}]},{type:a,value:" to replace python, don't do it! Go instead learn how to\nrun your own Python version in VirtualEnv."}]},{type:a,value:e},{type:b,tag:F,props:{id:J},children:[{type:b,tag:h,props:{href:"#procedure",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:G,props:{},children:[{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Install build dependencies"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Those were the ones I ran last before a successful build on "},{type:b,tag:L,props:{},children:[{type:a,value:"Ubuntu 14.04\nLTS"}]},{type:a,value:", if you aren't using the same distribution, you might get a different\nlist."}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:E}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:ac}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        autotools-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        blt-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"bzip2"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        dpkg-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        g++-multilib "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        gcc-multilib "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        libffi-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        libffi6 "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        libffi6-dbg "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        libgdbm-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        libgpm2 "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        libncursesw5-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        libreadline-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        libsqlite3-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        libtinfo-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        mime-support "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        net-tools "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        netbase "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        python-crypto "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        python-mox3 "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        python-pil "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        python-ply "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        quilt "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        tk-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        zlib1g-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        zlib1g-dev\n"}]}]}]},{type:a,value:e},{type:b,tag:G,props:{start:z},children:[{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Get Python sources and compile"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:" https:\u002F\u002Fwww.python.org\u002Fftp\u002Fpython\u002F2.7.9\u002FPython-2.7.9.tgz\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"tar"}]},{type:a,value:" xfz Python-2.7.9.tgz\n"},{type:b,tag:c,props:{className:[d,"builtin","class-name"]},children:[{type:a,value:"cd"}]},{type:a,value:" Python-2.7.9\u002F\n.\u002Fconfigure "},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:"--prefix"}]},{type:a,value:" \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9 --enable-ipv6\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ah}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:E}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:G,props:{start:Y},children:[{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Test if the version works"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"\u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Fpython "},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:"-V"}]},{type:a,value:"\n\nPython "},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"2.7"}]},{type:a,value:".9\n"}]}]}]},{type:a,value:e},{type:b,tag:G,props:{start:4},children:[{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Then prepare package through FPM"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:E}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:ac}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        ruby-dev "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"\n        gcc\n\ngem "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:E}]},{type:a,value:" fpm\n"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Its basically about creating a .deb based on your new runtime setup. You can do\nthat by using "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fjordansissel\u002Ffpm",rel:[k,l,m],target:n},children:[{type:a,value:"fpm"}]},{type:a,value:" (\"Fabulous Package Manager\"), I am "},{type:b,tag:h,props:{href:"https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F02\u002Finstall-php5-memcached-pecl-extension-support-igbinary\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"using this technique\nin a post I published recently about installing a PHP library"}]},{type:a,value:"."}]},{type:a,value:e},{type:b,tag:F,props:{id:V},children:[{type:b,tag:h,props:{href:"#incomplete-scratchpad",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:W}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"But that's as far as my notes goes for now. Sorry about that."}]},{type:a,value:e},{type:b,tag:"h3",props:{id:X},children:[{type:b,tag:h,props:{href:"#setuptools",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:Z}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"As per recommended in "},{type:b,tag:h,props:{href:"https:\u002F\u002Fpypi.python.org\u002Fpypi\u002Fsetuptools#unix-wget",rel:[k,l,m],target:n},children:[{type:a,value:"Setuptools instructions"}]},{type:a,value:", we can run "},{type:b,tag:q,props:{},children:[{type:a,value:"easy_install"}]},{type:a,value:"\nthrough a "},{type:b,tag:q,props:{},children:[{type:a,value:M}]},{type:a,value:", like so;"}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:" https:\u002F\u002Fbootstrap.pypa.io\u002Fez_setup.py "},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:"-O"}]},{type:a,value:" - "},{type:b,tag:c,props:{className:[d,"operator"]},children:[{type:a,value:"|"}]},{type:a,value:" \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Fpython\n\n  \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Feasy_install pip\n  \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Fpip "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:E}]},{type:a,value:" virtualenv\n\n"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Then, create symbolic links"}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ai}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:aj}]},{type:a,value:" \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Feasy_install \u002Fusr\u002Fbin\u002Feasy_install\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ai}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:aj}]},{type:a,value:" \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Fpip \u002Fusr\u002Fbin\u002Fpip\n"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"You can try if it worked"}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"pip list\n\n  pip "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"6.0"}]},{type:a,value:".8"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:"\n  setuptools "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"14.3"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:"\n  virtualenv "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"12.0"}]},{type:a,value:".7"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:F,props:{id:_},children:[{type:b,tag:h,props:{href:"#resources",ariaHidden:A,tabIndex:B},children:[{type:b,tag:c,props:{className:[C,D]},children:[]}]},{type:a,value:$}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:h,props:{href:ak,rel:[k,l,m],target:n},children:[{type:a,value:ak}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:h,props:{href:al,rel:[k,l,m],target:n},children:[{type:a,value:al}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:h,props:{href:am,rel:[k,l,m],target:n},children:[{type:a,value:am}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:h,props:{href:an,rel:[k,l,m],target:n},children:[{type:a,value:an}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:h,props:{href:ao,rel:[k,l,m],target:n},children:[{type:a,value:ao}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:h,props:{href:ap,rel:[k,l,m],target:n},children:[{type:a,value:ap}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:h,props:{href:aq,rel:[k,l,m],target:n},children:[{type:a,value:aq}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:h,props:{href:"http:\u002F\u002Fwww.stylesen.org\u002Fpython%5C_27%5C_debian%5C_squeeze%5C_60",rel:[k,l,m],target:n},children:[{type:a,value:"http:\u002F\u002Fwww.stylesen.org\u002Fpython\\_27\\_debian\\_squeeze\\_60"}]}]},{type:a,value:e}]}]},text:"---\ntitle:\n  Upgrade to Python 2.7.9 on Ubuntu 14.04 LTS and make your own .deb package\n  for deployment\nlocale: en-CA\ncreated: 2015-04-05\nupdated: 2023-02-18\ncanonical: https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F04\u002Fupgrade-python-2-7-9-ubuntu-14-04-lts-making-deb-package\u002F\nstatus: publish\nrevising: true\ncaption: false\ncaracteresBizzares: false\ngallery: false\nmigrateCode: true\nmigrateImages: false\nmigrateLinks: false\ncategories:\n  - projects\ntags:\n  - webplatform\n  - procedure\n  - operations\n  - best-practices\nkeywords:\n  - Python\n  - ubuntu\nexcerpt: \u003E-\n  Need to run your web app with Python 2.7.9, but server environment uses Ubuntu\n  Long Term Support? Don’t replace Python, leverage VirtualEnv instead!\n---\n\nI had this post hanging in my drafts on how I attempted to install a valid\nPython 2.7.9 runtime environment on Ubuntu 14.04 and make my own .deb package\nfor easy re-deployment.\n\n**IMPORTANT** This procedure isn't complete as I had to shift focus elsewhere. I\nmight rework this article to adjust what's missing.\n\nWhile I understand that Ubuntu 14.04 [will][0] [remain][1] using _Python 2.7.6_\ninternally, applications we run can be configured to use another python\nenvironment. Its what virtualenv is all about after all, isn't it.\n\nThis post attempts to install, and make an installable _.deb_ package of\n**Python 2.7.9** and is meant to be used by web applications without touching\nthe system's python runtime.\n\n## Why not replacing internal Python version?\n\nThe reason is simple. If you replace internal Python version, other softwares\nwithin the OS will have broken dependencies.\n\nI realized this while I wanted to upgrade the version and breaking an hard\ndependency I have on Salt Stack. Since many components within a given Ubuntu\nversion relies on Python, it could break anything else. This is why I stopped\nworking on the idea of replacing internally, but instead to configure VirtualEnv\nto use another version instead.\n\nIf you see procedures that shows you to replace telling you to use\n`update-alternatives` to replace python, don't do it! Go instead learn how to\nrun your own Python version in VirtualEnv.\n\n## Procedure\n\n1. Install build dependencies\n\nThose were the ones I ran last before a successful build on **Ubuntu 14.04\nLTS**, if you aren't using the same distribution, you might get a different\nlist.\n\n```bash\napt-get install -y \\\n        autotools-dev \\\n        blt-dev \\\n        bzip2 \\\n        dpkg-dev \\\n        g++-multilib \\\n        gcc-multilib \\\n        libbluetooth-dev \\\n        libbluetooth-dev \\\n        libbz2-dev \\\n        libbz2-dev \\\n        libexpat1-dev \\\n        libexpat1-dev \\\n        libffi-dev \\\n        libffi6 \\\n        libffi6-dbg \\\n        libgdbm-dev \\\n        libgpm2 \\\n        libncursesw5-dev \\\n        libreadline-dev \\\n        libsqlite3-dev \\\n        libssl-dev \\\n        libssl-dev \\\n        libtinfo-dev \\\n        mime-support \\\n        net-tools \\\n        netbase \\\n        python-crypto \\\n        python-mox3 \\\n        python-pil \\\n        python-ply \\\n        quilt \\\n        tk-dev \\\n        zlib1g-dev \\\n        zlib1g-dev\n```\n\n2. Get Python sources and compile\n\n```bash\nwget https:\u002F\u002Fwww.python.org\u002Fftp\u002Fpython\u002F2.7.9\u002FPython-2.7.9.tgz\ntar xfz Python-2.7.9.tgz\ncd Python-2.7.9\u002F\n.\u002Fconfigure --prefix \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9 --enable-ipv6\nmake\nmake install\n```\n\n3. Test if the version works\n\n```bash\n\u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Fpython -V\n\nPython 2.7.9\n```\n\n4. Then prepare package through FPM\n\n```bash\napt-get install -y \\\n        ruby-dev \\\n        gcc\n\ngem install fpm\n```\n\nIts basically about creating a .deb based on your new runtime setup. You can do\nthat by using [fpm][2] (\"Fabulous Package Manager\"), I am [using this technique\nin a post I published recently about installing a PHP library][3].\n\n## Incomplete scratchpad\n\nBut that's as far as my notes goes for now. Sorry about that.\n\n### Setuptools\n\nAs per recommended in [Setuptools instructions][4], we can run `easy_install`\nthrough a `wget`, like so;\n\n```bash\nwget https:\u002F\u002Fbootstrap.pypa.io\u002Fez_setup.py -O - | \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Fpython\n\n  \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Feasy_install pip\n  \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Fpip install virtualenv\n\n```\n\nThen, create symbolic links\n\n```bash\nln -s \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Feasy_install \u002Fusr\u002Fbin\u002Feasy_install\nln -s \u002Fusr\u002Flocal\u002Flib\u002Fpython2.7.9\u002Fbin\u002Fpip \u002Fusr\u002Fbin\u002Fpip\n```\n\nYou can try if it worked\n\n```bash\npip list\n\n  pip (6.0.8)\n  setuptools (14.3)\n  virtualenv (12.0.7)\n```\n\n## Resources\n\n- http:\u002F\u002Fdavebehnke.com\u002Fpython-pyenv-ubuntu.html\n- https:\u002F\u002Fgithub.com\u002Fyyuu\u002Fpyenv\n- https:\u002F\u002Fwww.python.org\u002Fdownloads\u002Frelease\u002Fpython-279\u002F\n- http:\u002F\u002Faboutsimon.com\u002F2012\u002F04\u002F16\u002Fbuilding-a-python-deb-in-a-bootstrapped-ubuntu-chroot-with-fpm\u002F\n- http:\u002F\u002Fserverfault.com\u002Fquestions\u002F669859\u002Fhow-can-i-upgrade-python-to-2-7-9-on-ubuntu-14-4\n- http:\u002F\u002Faskubuntu.com\u002Fquestions\u002F101591\u002Fhow-do-i-install-python-2-7-2-on-ubuntu\n- https:\u002F\u002Fwiki.debian.org\u002FDebootstrap\n- http:\u002F\u002Fwww.stylesen.org\u002Fpython\\_27\\_debian\\_squeeze\\_60\n\n[0]:\n  https:\u002F\u002Faskubuntu.com\u002Fquestions\u002F559036\u002Fwhen-will-the-python-2-7-9-upgrades-be-available-from-apt-get-for-14-04lts#answer-560159\n[1]:\n  https:\u002F\u002Fserverfault.com\u002Fquestions\u002F669859\u002Fhow-can-i-upgrade-python-to-2-7-9-on-ubuntu-14-4\n[2]: https:\u002F\u002Fgithub.com\u002Fjordansissel\u002Ffpm\n[3]:\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F02\u002Finstall-php5-memcached-pecl-extension-support-igbinary\u002F\n[4]: https:\u002F\u002Fpypi.python.org\u002Fpypi\u002Fsetuptools#unix-wget\n",dir:"\u002Fblog\u002F2015\u002F04",path:"\u002Fblog\u002F2015\u002F04\u002Fupgrade-python-2-7-9-ubuntu-14-04-lts-making-deb-package",extension:".md",slug:ar,createdAt:as,updatedAt:as,category:R},coverImage:{toc:[],body:{type:K,children:[]},text:at},month:"04",next:{title:"How to run your own OAuth Identity provider service",locale:I,path:"\u002Fblog\u002F2015\u002F04\u002Frun-oauth-identity-provider-service",slug:"run-oauth-identity-provider-service"},preamble:{toc:[],body:{type:K,children:[]},text:at},prettyfiedTemporalDate:{prettified:"Sunday, April 5, 2015",temporalDate:"2015-04-05"},prev:{title:"Install Discourse and Docker on Ubuntu 14.04 with aufs enabled",locale:I,path:"\u002Fblog\u002F2015\u002F04\u002Finstall-discourse-docker-ubuntu-14-04-aufs-enabled",slug:"install-discourse-docker-ubuntu-14-04-aufs-enabled"},slug:ar,year:"2015"}],fetch:[],mutations:void 0}}("text","element","span","token","\n","punctuation","\\","a","function","p","nofollow","noopener","noreferrer","_blank","li"," ","code","div","nuxt-content-highlight","pre","language-bash","line-numbers","parameter","variable",false,2,"true",-1,"icon","icon-link","install","h2","ol","number","en-CA","procedure","root","strong","wget","(",")","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F04\u002Fupgrade-python-2-7-9-ubuntu-14-04-lts-making-deb-package\u002F",true,"projects","why-not-replacing-internal-python-version","Why not replacing internal Python version?","Procedure","incomplete-scratchpad","Incomplete scratchpad","setuptools",3,"Setuptools","resources","Resources","em","apt-get","-y","\n        libbluetooth-dev ","\n        libbz2-dev ","\n        libexpat1-dev ","\n        libssl-dev ","make","ln","-s","http:\u002F\u002Fdavebehnke.com\u002Fpython-pyenv-ubuntu.html","https:\u002F\u002Fgithub.com\u002Fyyuu\u002Fpyenv","https:\u002F\u002Fwww.python.org\u002Fdownloads\u002Frelease\u002Fpython-279\u002F","http:\u002F\u002Faboutsimon.com\u002F2012\u002F04\u002F16\u002Fbuilding-a-python-deb-in-a-bootstrapped-ubuntu-chroot-with-fpm\u002F","http:\u002F\u002Fserverfault.com\u002Fquestions\u002F669859\u002Fhow-can-i-upgrade-python-to-2-7-9-on-ubuntu-14-4","http:\u002F\u002Faskubuntu.com\u002Fquestions\u002F101591\u002Fhow-do-i-install-python-2-7-2-on-ubuntu","https:\u002F\u002Fwiki.debian.org\u002FDebootstrap","upgrade-python-2-7-9-ubuntu-14-04-lts-making-deb-package","2024-10-24T19:43:51.725Z","")));