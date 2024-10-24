__NUXT_JSONP__("/blog/2007/04/login-ssh-sans-mot-de-passe", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {data:[{},{},{},{canonical:h,content:{locale:e,title:"Login SSH sans mot de passe",canonical:h,status:"publish",revising:i,migrateCode:i,created:"2007-04-10",updated:"2013-03-27",tags:["linux","tutoriels"],categories:[j],excerpt:f,toc:[],body:{type:g,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Voici comment générer un certificat qui sera utilisé par ssh pour se connecter à  un serveur sans demander de mot de passe à  l'usager."}]},{type:a,value:c},{type:b,tag:d,props:{className:["code"]},children:[{type:a,value:k}]},{type:a,value:c},{type:b,tag:d,props:{className:["codeContent"]},children:[{type:a,value:k}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sur le serveur client, exécuter (dans le HOME de l'usager):"}]},{type:a,value:c},{type:b,tag:l,props:{lang:m},children:[{type:a,value:"$ mkdir .ssh\n$ ssh-keygen -t dsa -f .ssh\u002Fid_dsa (Ne pas spécifier de mot de passe)\n$ cd .ssh\n$ scp id_dsa.pub user@remote:~\u002F.ssh\u002Fid_dsa.pub"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"user@remote représente l'usager et le serveur sur lequel le client voudra se connecter par SSH sans mot de passe. Maintenant, sur le serveur remote, exécuter (avec le même usager utiliser à  la commande précédente):"}]},{type:a,value:c},{type:b,tag:l,props:{lang:m},children:[{type:a,value:"$ cd .ssh\n$ cat id_dsa.pub \u003E\u003E authorized_keys2\n$ chmod 640 authorized_keys2\n$ rm id_dsa.pub"}]}]},text:"---\nlocale: fr-CA\ntitle: Login SSH sans mot de passe\ncanonical: https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2007\u002F04\u002Flogin-ssh-sans-mot-de-passe\u002F\nstatus: publish\nrevising: true\nmigrateCode: true\ncreated: '2007-04-10'\nupdated: '2013-03-27'\ntags:\n  - linux\n  - tutoriels\ncategories:\n  - tranche-de-vie\nexcerpt: ''\n---\n\nVoici comment générer un certificat qui sera utilisé par ssh pour se connecter à  un serveur sans demander de mot de passe à  l'usager.\n\u003Cp class=\"code\"\u003E&nbsp;\u003C\u002Fp\u003E\n\u003Cp class=\"codeContent\"\u003E&nbsp;\u003C\u002Fp\u003E\n\nSur le serveur client, exécuter (dans le HOME de l'usager):\n\u003Cpre lang=\"bash\"\u003E\n$ mkdir .ssh\n$ ssh-keygen -t dsa -f .ssh\u002Fid_dsa (Ne pas spécifier de mot de passe)\n$ cd .ssh\n$ scp id_dsa.pub user@remote:~\u002F.ssh\u002Fid_dsa.pub\u003C\u002Fpre\u003E\nuser@remote représente l'usager et le serveur sur lequel le client voudra se connecter par SSH sans mot de passe. Maintenant, sur le serveur remote, exécuter (avec le même usager utiliser à  la commande précédente):\n\u003Cpre lang=\"bash\"\u003E\n$ cd .ssh\n$ cat id_dsa.pub \u003E\u003E authorized_keys2\n$ chmod 640 authorized_keys2\n$ rm id_dsa.pub\u003C\u002Fpre\u003E\n",dir:"\u002Fblog\u002F2007\u002F04",path:"\u002Fblog\u002F2007\u002F04\u002Flogin-ssh-sans-mot-de-passe",extension:".md",slug:n,createdAt:o,updatedAt:o,category:j},coverImage:{toc:[],body:{type:g,children:[]},text:f},month:"04",next:{title:"Une machine virtuelle Gentoo",locale:e,path:"\u002Fblog\u002F2007\u002F02\u002Fune-machine-virtuelle-gentoo",slug:"une-machine-virtuelle-gentoo"},preamble:{toc:[],body:{type:g,children:[]},text:f},prettyfiedTemporalDate:{prettified:"mardi 10 avril 2007",temporalDate:"2007-04-10"},prev:{title:"Le futur du PC",locale:e,path:"\u002Fblog\u002F2007\u002F01\u002Fle-futur-du-pc",slug:"le-futur-du-pc"},slug:n,year:"2007"}],fetch:[],mutations:void 0}}("text","element","\n","p","fr-CA","","root","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2007\u002F04\u002Flogin-ssh-sans-mot-de-passe\u002F",true,"tranche-de-vie"," ","pre","bash","login-ssh-sans-mot-de-passe","2024-10-24T19:43:51.668Z")));