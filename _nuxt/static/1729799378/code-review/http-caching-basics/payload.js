__NUXT_JSONP__("/code-review/http-caching-basics", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{title:"Code-review",contentFirstDirName:"code-review"},{content:{title:"HTTP Caching basics",locale:"en-CA",created:r,updated:r,status:"publish",revising:false,tags:["ecmascript","javascript","http","performance"],toc:[{id:s,depth:t,text:u},{id:v,depth:w,text:x},{id:y,depth:w,text:z},{id:A,depth:t,text:B}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"There is a way to tell the server you previously received something from it, as\na way to ask if you need to “"},{type:b,tag:"em",props:{},children:[{type:a,value:"download again"}]},{type:a,value:"”."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If a server sends “"},{type:b,tag:d,props:{},children:[{type:a,value:f}]},{type:a,value:"” in its response header, when you query the\nsecond time, use that value in a "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" request header the next\ntime."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The first time, it sends the payload. Whatever it is."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The second time, it can return "},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:" and nothing. Then, the client,\nwill just use what it received previously."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The browser natively does this."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For a JavaScript client-side HTTP client (Axios, fetch, ky, …), we have to keep\ntrack of the URL and the "},{type:b,tag:d,props:{},children:[{type:a,value:f}]},{type:a,value:". When we make another call to a\npreviously made URL, add the "},{type:b,tag:d,props:{},children:[{type:a,value:f}]},{type:a,value:" value we received and add it as a\n"},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" request header. Then the HTTP Client (i.e. "},{type:b,tag:d,props:{},children:[{type:a,value:"fetch"}]},{type:a,value:",\ninternally) may pick that up too. (To be confirmed exactly how to setup)"}]},{type:a,value:c},{type:b,tag:C,props:{id:s},children:[{type:b,tag:g,props:{href:"#example",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The example shows a file requested. Web servers do add those headers\nautomatically with them. But a backend service can do that too."}]},{type:a,value:c},{type:b,tag:D,props:{id:v},children:[{type:b,tag:g,props:{href:"#first-request",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:E,props:{style:F,figcaption:G,src:"~\u002Fassets\u002Fcontent\u002Fcode-review\u002Fhttp-caching-basics\u002Fhttp-request-step1.png"},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The initial request without any argument."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Notice"}]},{type:a,value:" the "},{type:b,tag:d,props:{},children:[{type:a,value:f}]},{type:a,value:" response header."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:D,props:{id:y},children:[{type:b,tag:g,props:{href:"#2nd-request",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:E,props:{style:F,figcaption:"The second request, we add If-Modified-Since.",src:"~\u002Fassets\u002Fcontent\u002Fcode-review\u002Fhttp-caching-basics\u002Fhttp-request-step2.png"},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Notice it just sends"}]},{type:a,value:G},{type:b,tag:d,props:{},children:[{type:a,value:o}]},{type:a,value:", no data."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:C,props:{id:A},children:[{type:b,tag:g,props:{href:"#server-side",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"While for files, web servers do that automatically. For Backend generated\nresponse, its an exercise left to the reader."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"It's basically having the server to keep track of “what makes a request unique”,\nand store it somewhere for a short period of time. There are software solutions\nthat you can send data, and add an expiration date, and that entry gets removed\nafter that time."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"That server then while it sends response can track a few properties and store\nthem at that place and add the "},{type:b,tag:d,props:{},children:[{type:a,value:f}]},{type:a,value:" when it got it. (PS: this is just\nthe bare minimum, it works. But for a more complete, refer to\n"},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.mnot.net\u002Fcache_docs\u002F#VALIDATE",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Mark Notthingham’s "},{type:b,tag:p,props:{},children:[{type:a,value:"Cache docs"}]}]},{type:a,value:")"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Say the backend is always called with an "},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:" header. That its a\n"},{type:b,tag:d,props:{},children:[{type:a,value:"Bearer 1111.2222.3333"}]},{type:a,value:". HTTP Server treats requests with "},{type:b,tag:d,props:{},children:[{type:a,value:H}]},{type:a,value:" and\n"},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:" header as private and don't cache. But on the server that\nmanages the returning data already validated that, it can do that logic. In the\ncase of a JWT token, all we can use is the last part of the "},{type:b,tag:d,props:{},children:[{type:a,value:"111.222.333"}]},{type:a,value:". The\nsignature. And a part of it. That way it's not filling up memory. And the\nsignature is unique to the rest anyway. (TODO: Double check some more about that\n— but thus far wasn't said insecure in the context I'm proposing this)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The things we keep in memory temporarily can be:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"The URL (Just make sure the URL is always the same, including the ?query part)"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"The "},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:" header's (or "},{type:b,tag:d,props:{},children:[{type:a,value:H}]},{type:a,value:") snippet of it (because in either\ncase, most of that regularily change, but some part of it changes less\nfrequently and uniquely identify the person)"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"The time it happened"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"So that when the server sees a request without "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" (and all rest\nvalidated), store the above, and pass "},{type:b,tag:d,props:{},children:[{type:a,value:f}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The complying client will be able to do the same, and pass "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:"\nwhen they request again, including passing their currently applicable\n"},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:" headers anyway."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"So the client can notify it saw. The server can say it's the same. Nothing to\ndownload. "},{type:b,tag:d,props:{},children:[{type:a,value:o}]}]}]},dir:"\u002Fcode-review",path:"\u002Fcode-review\u002Fhttp-caching-basics",extension:".md",slug:"http-caching-basics",createdAt:"2024-10-24T19:43:51.731Z",updatedAt:"2024-10-24T19:43:51.732Z",categories:[],category:""}}],fetch:[],mutations:void 0}}("text","element","\n","code","p","Last-Modified","a","If-Modified-Since","true",-1,"span","icon","icon-link","Authorization","304 Not Modified","strong","li","2022-04-06T00:00:00.000Z","example",2,"Example","first-request",3,"First request","2nd-request","2nd request","server-side","Server-Side","h2","h3","app-image","float:initial;width:100%;"," ","Cookie")));