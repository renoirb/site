__NUXT_JSONP__("/blog/tag/caching", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao){return {data:[{},{},{contents:[{title:"Setting up Discourse with Fastly as a CDN provider and TLS",locale:"en-CA",created:"2015-04-29T00:00:00.000Z",updated:"2023-02-18T00:00:00.000Z",canonical:"https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2015\u002F04\u002Fsetting-discourse-fastly-cdn-provider-ssl\u002F",status:"publish",revising:B,caption:z,caracteresBizzares:z,gallery:z,migrateCode:B,migrateImages:B,migrateLinks:z,categories:[I],tags:["operations","cloud-computing","webplatform","linux",C,"varnish"],keywords:["Discourse","Docker",w,"TLS","NGINX","Varnish"],preamble:{text:"It is possible the code shown here no longer works.\nMaybe the code shown here uses parts of Discourse that no longer exists.\n"},coverImage:{src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F11\u002Fdiscourse_migration_list_gravatar_images.png",text:"Side by side comparison while working on migrating Discourse\nwith WICG\n"},excerpt:"Here’s how I setup a Discourse web application so that I can scale it by adding more Docker instances while keeping a low number of exposed web servers",description:"Allow horizontal scaling by separating internal app servers from exposed frontend web servers",title_alternate:J,toc:[{id:K,depth:L,text:M},{id:N,depth:L,text:O}],body:{type:P,children:[{type:b,tag:m,props:{},children:[{type:a,value:"The following is a copy of what I published in a question on\n"},{type:b,tag:p,props:{href:"https:\u002F\u002Fmeta.discourse.org\u002Ft\u002Fenable-a-cdn-for-your-discourse\u002F14857\u002F26?u=renoirb",rel:[r,s,t],target:u},children:[{type:b,tag:g,props:{},children:[{type:a,value:"meta.discourse.org"}]},{type:a,value:" about \""},{type:b,tag:y,props:{},children:[{type:a,value:J}]},{type:a,value:"\""}]},{type:a,value:" while\nworking on "},{type:b,tag:g,props:{},children:[{type:a,value:"discuss.webplatform.org"}]},{type:a,value:Q}]},{type:a,value:e},{type:b,tag:R,props:{id:K},children:[{type:b,tag:p,props:{href:"#setup-detail",ariaHidden:S,tabIndex:T},children:[{type:b,tag:c,props:{className:[U,V]},children:[]}]},{type:a,value:M}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Our setup uses "},{type:b,tag:p,props:{href:"https:\u002F\u002Fwww.fastly.com\u002F",rel:[r,s,t],target:u},children:[{type:a,value:w}]},{type:a,value:", and leverage "},{type:b,tag:p,props:{href:W,rel:[r,s,t],target:u},children:[{type:a,value:"their SSL feature"}]},{type:a,value:". Note that in\norder for you to use SSL too, you'll have to contact them to have it onto your\naccount."}]},{type:a,value:e},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:y,props:{},children:[{type:a,value:"SEE ALSO"}]},{type:a,value:" this "},{type:b,tag:X,props:{to:Y},children:[{type:a,value:"post about "},{type:b,tag:g,props:{},children:[{type:a,value:Z}]}]},{type:a,value:". This step is "},{type:b,tag:y,props:{},children:[{type:a,value:"required"}]},{type:a,value:" and is a logical next step to this\nprocedure."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"In summary;"}]},{type:a,value:e},{type:b,tag:_,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:$},{type:b,tag:g,props:{},children:[{type:a,value:"users"}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:$},{type:b,tag:g,props:{},children:[{type:a,value:w}]},{type:a,value:" and \""},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:"\" servers. (That's the IP we put into\nFastly hosts configuration, and are also refered to as \"origins\" or \"backends\"\nin CDN-speak)"}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"Docker Discourse instance (\""},{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:"\") which listens only on private network\nand port (e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"10.10.10.3:8000"}]},{type:a,value:")"}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"More than two publicly exposed web servers (\""},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:"\"), with SSL, that we\nuse as \""},{type:b,tag:g,props:{},children:[{type:a,value:"backends"}]},{type:a,value:"\" in "},{type:b,tag:g,props:{},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:" server running NGINX with an "},{type:b,tag:p,props:{href:"https:\u002F\u002Fnginx.org\u002Fen\u002Fdocs\u002Fhttp\u002Fngx_http_upstream_module.html",rel:[r,s,t],target:u},children:[{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:" block"}]},{type:a,value:" proxying\ninternal "},{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:" web servers that the Discourse Docker provides."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"We use NGINX's "},{type:b,tag:j,props:{},children:[{type:a,value:aa}]},{type:a,value:" HTTP header in the frontend to make sure we\nminimize connections"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Using this method, if we need to scale, we only need add more internal\n"},{type:b,tag:g,props:{},children:[{type:a,value:"Discourse Docker instances"}]},{type:a,value:", we can add more NGINX upstream entries."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Note that I recommend to use direct private IP addresses instead of internal\nnames. It removes complexity and the need to rewrite "},{type:b,tag:j,props:{},children:[{type:a,value:"Hosts:"}]},{type:a,value:" HTTP headers."}]},{type:a,value:e},{type:b,tag:R,props:{id:N},children:[{type:b,tag:p,props:{href:"#steps",ariaHidden:S,tabIndex:T},children:[{type:b,tag:c,props:{className:[U,V]},children:[]}]},{type:a,value:O}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Everything is the same as basic Fastly configuration, refer to "},{type:b,tag:p,props:{href:"https:\u002F\u002Fdocs.fastly.com\u002Fguides\u002Fgetting-started\u002Fsign-up-and-create-your-first-service",rel:[r,s,t],target:u},children:[{type:a,value:"setup your\ndomain"}]},{type:a,value:Q}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Here are the differences;"}]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Setup your domain name with the CNAME Fastly will provide you ("},{type:b,tag:p,props:{href:W,rel:[r,s,t],target:u},children:[{type:a,value:"you will have\nto contact them for your account though"}]},{type:a,value:"), ours is like that ;"}]},{type:a,value:e},{type:b,tag:ab,props:{className:[ac]},children:[{type:b,tag:ad,props:{className:[ae,"language-dns-zone-file"]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"discuss.webplatform.org. "},{type:b,tag:c,props:{className:[d,"class",h]},children:[{type:a,value:"IN"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,"type",h]},children:[{type:a,value:"CNAME"}]},{type:a,value:" webplatform.map.fastly.net.\n"}]}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"In Fastly pannel at "},{type:b,tag:j,props:{},children:[{type:a,value:"Configure -\u003E Hosts"}]},{type:a,value:", we tell which publicly available\n"},{type:b,tag:g,props:{},children:[{type:a,value:af}]},{type:a,value:" IPs"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Notice we use port "},{type:b,tag:j,props:{},children:[{type:a,value:ag}]},{type:a,value:", "},{type:b,tag:p,props:{href:"https:\u002F\u002Fdocs.fastly.com\u002Fguides\u002Fssl\u002Fcan-i-use-ssl-to-communicate-to-my-backend-servers",rel:[r,s,t],target:u},children:[{type:a,value:"so SSL is between "},{type:b,tag:g,props:{},children:[{type:a,value:w}]},{type:a,value:" and our "},{type:b,tag:g,props:{},children:[{type:a,value:af}]}]},{type:a,value:".\nAlso, you "},{type:b,tag:y,props:{},children:[{type:a,value:"can"}]},{type:a,value:" setup "},{type:b,tag:g,props:{},children:[{type:a,value:"Shielding"}]},{type:a,value:" (which is how you activate the CDN behavior\nwithin Fastly) by enabling it on only one. I typically set it on the one I call\n\"first\"."}]},{type:a,value:e},{type:b,tag:ah,props:{style:ai,src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F04\u002Fdiscuss-fastly-origins.png",figcaption:"Fastly service configuration, at Hosts tab"},children:[{type:a,value:e}]},{type:a,value:e},{type:b,tag:E,props:{start:3},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"In Fastly pannel "},{type:b,tag:j,props:{},children:[{type:a,value:"Configure -\u003E Settings -\u003E Request Settings"}]},{type:a,value:"; we make sure we\nforward "},{type:b,tag:j,props:{},children:[{type:a,value:"X-Forwarded-For"}]},{type:a,value:" header. You "},{type:b,tag:y,props:{},children:[{type:a,value:"DONT"}]},{type:a,value:" need this; you can remove it."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:ah,props:{style:ai,src:"~\u002Fassets\u002Fcontent\u002Fblog\u002F2015\u002F04\u002Fdiscuss-fastly-XFF.png",figcaption:"Fastly service configuration, at Settings tab"},children:[{type:a,value:e}]},{type:a,value:e},{type:b,tag:E,props:{start:4},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"Frontend NGINX server has a block similar to this."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"In our case, we use "},{type:b,tag:p,props:{href:"https:\u002F\u002Fsaltstack.com\u002Fcommunity\u002F",rel:[r,s,t],target:u},children:[{type:a,value:"Salt Stack"}]},{type:a,value:" as the configuration management system, it\nbasically generates the Virtual Hosts for us as using "},{type:b,tag:p,props:{href:"https:\u002F\u002Fdocs.saltstack.com\u002Fen\u002Flatest\u002Ftopics\u002Freactor\u002F",rel:[r,s,t],target:u},children:[{type:a,value:"Salt reactor"}]},{type:a,value:" system.\nEvery time a Docker instance would become available, the configuration will be\nrewritten using this template."}]},{type:a,value:e},{type:b,tag:_,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"{{ upstream_port }}"}]},{type:a,value:" would be at "},{type:b,tag:j,props:{},children:[{type:a,value:"8000"}]},{type:a,value:" in this example"}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"{{ upstreams }}"}]},{type:a,value:" would be an array of current internal Docker instances, e.g.\n"},{type:b,tag:j,props:{},children:[{type:a,value:"['10.10.10.3','10.10.10.4']"}]}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"{{ tld }}"}]},{type:a,value:" would be "},{type:b,tag:g,props:{},children:[{type:a,value:"webplatform.org"}]},{type:a,value:" in production, but can be anything else\nwe need in other deployment, it gives great flexibility."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"Notice the use of "},{type:b,tag:j,props:{},children:[{type:a,value:"discoursepolling"}]},{type:a,value:" alongside the "},{type:b,tag:j,props:{},children:[{type:a,value:"discourse"}]},{type:a,value:" subdomain name.\nRefer to "},{type:b,tag:X,props:{to:Y},children:[{type:a,value:"this post about "},{type:b,tag:g,props:{},children:[{type:a,value:Z}]}]},{type:a,value:" to understand its purpose"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:ab,props:{className:[ac]},children:[{type:b,tag:ad,props:{className:[ae,"language-nginx"]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:" upstream_discourse"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:"%- for b in upstreams %"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]}]},{type:a,value:"    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:" b "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:":"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:" upstream_port "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:"%- endfor %"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aa}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:"16"}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"listen"}]},{type:a,value:"      "},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:ag}]},{type:a,value:" ssl"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"server_name"}]},{type:a,value:" discoursepolling."}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"discourse."}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:P}]},{type:a,value:"    \u002Fvar\u002Fwww\u002Fhtml"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:a,value:" common_params"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:a,value:" ssl_params"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"ssl"}]},{type:a,value:"                 "},{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:an}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"ssl_certificate"}]},{type:a,value:"     \u002Fetc\u002Fssl\u002F2015\u002Fdiscuss.pem"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"ssl_certificate_key"}]},{type:a,value:" \u002Fetc\u002Fssl\u002F2015\u002F201503.key"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"# Use internal Docker runner instance exposed port"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"location"}]},{type:a,value:" \u002F"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"proxy_pass"}]},{type:a,value:"             http:\u002F\u002Fupstream_discourse"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:a,value:"                proxy_params"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"proxy_intercept_errors"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:an}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:"\n\n        "},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"# Backend keepalive"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"# ref: http:\u002F\u002Fnginx.org\u002Fen\u002Fdocs\u002Fhttp\u002Fngx_http_upstream_module.html#keepalive"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"proxy_http_version"}]},{type:a,value:" 1.1"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"proxy_set_header"}]},{type:a,value:" Connection "},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"\"\""}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"Note that I removed the "},{type:b,tag:j,props:{},children:[{type:a,value:"include proxy_params;"}]},{type:a,value:" line. If you have lines similar\nto "},{type:b,tag:j,props:{},children:[{type:a,value:"proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;"}]},{type:a,value:", you don't\nneed them (!)"}]}]},dir:"\u002Fblog\u002F2015\u002F04",path:"\u002Fblog\u002F2015\u002F04\u002Fsetting-discourse-fastly-cdn-provider-ssl",extension:".md",slug:"setting-discourse-fastly-cdn-provider-ssl",createdAt:ao,updatedAt:ao,category:I,prettyfiedTemporalDate:{prettified:"Wednesday, April 29, 2015",temporalDate:"2015-04-29"}}],taxonomyKey:C,taxonomy:{key:C}}],fetch:[],mutations:void 0}}("text","element","span","token","\n","punctuation","em","keyword","directive","code",";","li","p","{","}","a","\n    ","nofollow","noopener","noreferrer","_blank"," ","Fastly","\n        ","strong",false,"upstream",true,"caching","frontend","ol","\n\n    ","include","comment","projects","Enable a CDN for your Discourse","setup-detail",2,"Setup detail","steps","Steps","root",".","h2","true",-1,"icon","icon-link","https:\u002F\u002Fdocs.fastly.com\u002Fguides\u002Fssl\u002Fwhich-ssl-options-are-available","nuxt-link","\u002Fblog\u002F2015\u002F05\u002Fmake-discourse-long-polling-work-behind-fastly\u002F","Make Discourse \"long polling\" work behind\nFastly","ul","SSL between ","keepalive","div","nuxt-content-highlight","pre","line-numbers","frontends","443","app-image","float:unset;","server","number"," tld ","boolean","on","2024-10-24T19:43:51.725Z")));