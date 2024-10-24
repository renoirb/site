__NUXT_JSONP__("/blog/2007/10/tunnel-ssh-avec-session-distante-en-console-vmware", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:[{},{},{},{canonical:m,content:{locale:i,title:"Créer un tunnel SSH avec session distante en Console VMWare",canonical:m,status:"publish",revising:true,created:"2007-10-03",updated:"2013-03-27",tags:["linux","securite"],categories:[n],excerpt:j,toc:[{depth:o,text:p},{depth:o,text:q}],body:{type:k,children:[{type:b,tag:g,props:{},children:[{type:a,value:"Il existe plusieurs page de how-to's pour se connecter a une application a distance. Mais j'ai envie de mettre pour mes propres archives."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Ce billet prend en considérations que..."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Vous voulez vous connecter a un service précis (disons VMWare Server Console)"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Sur une machine parmi un réseau de X ordinateurs"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Le gateway (routeur) relie toutes les connections vers un host en Linux (proxysrv) qui sert a s'authentifier et accéder au reste du réseau."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Le serveur sur le réseau qui héberge des machines virtuelles avec VMWare Server (vmserver1)."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Le port 902 (le port TCP que vous voulez utiliser) sur le firewall interne (de vmserver1) est ouvert. Et"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Vous voulez vous connecter a un de ses VM."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"div",props:{style:"background: #ececec; margin: 5px 0px; padding: 18px 8px 8px 50px; border: 1px solid #333;"},children:[{type:a,value:c},{type:b,tag:"h4",props:{style:"color: #777; margin-bottom: 10px;"},children:[{type:a,value:"Mise à jour"}]},{type:a,value:"\nCe billet a été écrit originalement en 2007. À l'époque il n'existait pas de VMware ESXi, ni de VMware Server 2. Les concepts sont toujours bons par contre.\n"}]},{type:a,value:c},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Pour avoir accès a une application distante (ou une autre machine\u002FVM), il faut se créer un tunnel vers le réseau interne. En gros il faut avoir accès au réseau (dans mon exemple le serveur "},{type:b,tag:r,props:{},children:[{type:a,value:"proxysrv"}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Vous devez avoir un accès au réseau interne que vous avez accès, vous pouvez le demander a  votre Sysadmin de vous avoir un accès, mais ce n'est pas le point de ce billet."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Pour ouvrir une session SSH en tunnel, sous windows, il vous faut PuTTY. Si vous n'avez pas PuTTY faites une "},{type:b,tag:l,props:{href:"http:\u002F\u002Fwww.google.ca\u002Fsearch?q=putty"},children:[{type:a,value:"recherche google"}]},{type:a,value:" c'est une petite application libre de droits. En linux, c'est simple"}]},{type:a,value:c},{type:b,tag:"pre",props:{lang:"bash"},children:[{type:a,value:"ssh -l username -L 902:192.168.3.97:902 -L 80:192.168.3.88:80 serveurdistant.ca"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:"small",props:{},children:[{type:a,value:"NOTE: Remarquez que vous n'avez qu'a ajouter le nombre de -L nécessaires (-L LOCAL_PORT:ON_REMOTE_NETWORK_IP:REMOTE_IP_OPENED_PORT_NUMBER)"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Aussi, pour accéder a la console VMWare, il faut une version de "},{type:b,tag:f,props:{},children:[{type:a,value:"VMWare Server"}]},{type:a,value:" ou une console VMWare. Le site VMWare ne semble pas avoir de version stand-alone de la console ni pour Linux ni Windows. Alors, si vous n'avez pas encore VMWare sur votre machine, allez chercher votre exemplaire de "},{type:b,tag:l,props:{href:"http:\u002F\u002Fwww.vmware.com\u002Fdownload\u002Fserver\u002F"},children:[{type:a,value:"VMWare Server ici"}]},{type:a,value:". Si vous avez \"VMWare\" d'installé mais pas de moyen de vous connecter en local ou a distance, désinstallez la, et installez la version server prescrite."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Dans notre exemple, on va accéder a distance au "},{type:b,tag:f,props:{},children:[{type:a,value:"VMWare Server Console"}]},{type:a,value:" (sur vmserver1) qui utilise le port "},{type:b,tag:f,props:{},children:[{type:a,value:s}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:p}]},{type:a,value:"\nPour pouvoir trouver d'autre ports a ouvrir le fichier texte \u002Fetc\u002Fservices donne tout les ports et les alias qu'on peut utiliser comme alias. Ce fichier existe depuis longtemps dans tout ce qui est UNIX et Linux.\n"},{type:b,tag:t,props:{},children:[{type:a,value:q}]},{type:a,value:"\nUne fois PuTTY et VMWare Server Console (ou console) fonctionnels (pour cet exemple) vous n'avez qu'a suivre les paramêtre ici:\n"},{type:b,tag:h,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:" Hostname:"},{type:b,tag:r,props:{},children:[{type:a,value:" "},{type:b,tag:f,props:{},children:[{type:a,value:"serveurdistant.ca"}]},{type:a,value:c}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Port: "},{type:b,tag:f,props:{},children:[{type:a,value:"22"}]},{type:a,value:" (ssh)"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Donner un nom de session, mais ne sauvegardez pas tout de suite."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Aller a "},{type:b,tag:f,props:{},children:[{type:a,value:"SSH"}]},{type:a,value:u},{type:b,tag:f,props:{},children:[{type:a,value:"Tunnels"}]},{type:a,value:" (plus bas)"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Entrer, Source port : "},{type:b,tag:f,props:{},children:[{type:a,value:s}]},{type:a,value:" (votre port local), Destination: (ip de vmserver1:le port) , puis cliquer Add."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Aller dans "},{type:b,tag:f,props:{},children:[{type:a,value:"Connection"}]},{type:a,value:u},{type:b,tag:f,props:{},children:[{type:a,value:"Data"}]},{type:a,value:"; Auto-login username, vous pouvez entrer le login qu'il faut si vous l'avez"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Retourner au haut du menu et sauvegarder la session"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Puis... [Open]."}]},{type:a,value:c}]},{type:a,value:"\nEnsuite, connectez vous au service sur l'hôte localhost et le port que vous avez \"tunnellé\".\n"},{type:b,tag:h,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:" Connecter a VMWare Server"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Ouvrir VMWare sur votre machine hors réseau... maintenant tunnellée"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Connect to remote-host: "},{type:b,tag:f,props:{},children:[{type:a,value:"localhost"}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Login\u002Fpw: votre login pour accéder aux vm."}]},{type:a,value:c}]},{type:a,value:"\nUtiliser la VM comme si elle était locale.\n"},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Source"}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:l,props:{href:"ttp:\u002F\u002Fwww.medicalnerds.com\u002Fport-forwarding-with-sshputty\u002F"},children:[{type:a,value:"Exemple tunnel avec PuTTY."}]}]},{type:a,value:c}]}]},text:"---\nlocale: fr-CA\ntitle: Créer un tunnel SSH avec session distante en Console VMWare\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2007\u002F10\u002Ftunnel-ssh-avec-session-distante-en-console-vmware\u002F\nstatus: publish\nrevising: true\ncreated: '2007-10-03'\nupdated: '2013-03-27'\ntags:\n  - linux\n  - securite\ncategories:\n  - tranche-de-vie\nexcerpt: ''\n---\n\nIl existe plusieurs page de how-to's pour se connecter a une application a distance. Mais j'ai envie de mettre pour mes propres archives.\n\nCe billet prend en considérations que...\n\u003Cul\u003E\n\t\u003Cli\u003EVous voulez vous connecter a un service précis (disons VMWare Server Console)\u003C\u002Fli\u003E\n\t\u003Cli\u003ESur une machine parmi un réseau de X ordinateurs\u003C\u002Fli\u003E\n\t\u003Cli\u003ELe gateway (routeur) relie toutes les connections vers un host en Linux (proxysrv) qui sert a s'authentifier et accéder au reste du réseau.\u003C\u002Fli\u003E\n\t\u003Cli\u003ELe serveur sur le réseau qui héberge des machines virtuelles avec VMWare Server (vmserver1).\u003C\u002Fli\u003E\n\t\u003Cli\u003ELe port 902 (le port TCP que vous voulez utiliser) sur le firewall interne (de vmserver1) est ouvert. Et\u003C\u002Fli\u003E\n\t\u003Cli\u003EVous voulez vous connecter a un de ses VM.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cdiv style=\"background: #ececec; margin: 5px 0px; padding: 18px 8px 8px 50px; border: 1px solid #333;\"\u003E\n\u003Ch4 style=\"color: #777; margin-bottom: 10px;\"\u003EMise à jour\u003C\u002Fh4\u003E\nCe billet a été écrit originalement en 2007. À l'époque il n'existait pas de VMware ESXi, ni de VMware Server 2. Les concepts sont toujours bons par contre.\n\n\u003C\u002Fdiv\u003E\n\u003C!--more--\u003E\n\nPour avoir accès a une application distante (ou une autre machine\u002FVM), il faut se créer un tunnel vers le réseau interne. En gros il faut avoir accès au réseau (dans mon exemple le serveur \u003Cem\u003Eproxysrv\u003C\u002Fem\u003E).\n\nVous devez avoir un accès au réseau interne que vous avez accès, vous pouvez le demander a  votre Sysadmin de vous avoir un accès, mais ce n'est pas le point de ce billet.\n\nPour ouvrir une session SSH en tunnel, sous windows, il vous faut PuTTY. Si vous n'avez pas PuTTY faites une \u003Ca href=\"http:\u002F\u002Fwww.google.ca\u002Fsearch?q=putty\"\u003Erecherche google\u003C\u002Fa\u003E c'est une petite application libre de droits. En linux, c'est simple\n\u003Cpre lang=\"bash\"\u003Essh -l username -L 902:192.168.3.97:902 -L 80:192.168.3.88:80 serveurdistant.ca\u003C\u002Fpre\u003E\n\u003Csmall\u003ENOTE: Remarquez que vous n'avez qu'a ajouter le nombre de -L nécessaires (-L LOCAL_PORT:ON_REMOTE_NETWORK_IP:REMOTE_IP_OPENED_PORT_NUMBER)\u003C\u002Fsmall\u003E\n\nAussi, pour accéder a la console VMWare, il faut une version de \u003Cstrong\u003EVMWare Server\u003C\u002Fstrong\u003E ou une console VMWare. Le site VMWare ne semble pas avoir de version stand-alone de la console ni pour Linux ni Windows. Alors, si vous n'avez pas encore VMWare sur votre machine, allez chercher votre exemplaire de \u003Ca href=\"http:\u002F\u002Fwww.vmware.com\u002Fdownload\u002Fserver\u002F\"\u003EVMWare Server ici\u003C\u002Fa\u003E. Si vous avez \"VMWare\" d'installé mais pas de moyen de vous connecter en local ou a distance, désinstallez la, et installez la version server prescrite.\n\nDans notre exemple, on va accéder a distance au \u003Cstrong\u003EVMWare Server Console\u003C\u002Fstrong\u003E (sur vmserver1) qui utilise le port \u003Cstrong\u003E902\u003C\u002Fstrong\u003E.\n\u003Ch3\u003ELes ports TCP sous Linux\u003C\u002Fh3\u003E\nPour pouvoir trouver d'autre ports a ouvrir le fichier texte \u002Fetc\u002Fservices donne tout les ports et les alias qu'on peut utiliser comme alias. Ce fichier existe depuis longtemps dans tout ce qui est UNIX et Linux.\n\u003Ch3\u003EDirectives en résumé\u003C\u002Fh3\u003E\nUne fois PuTTY et VMWare Server Console (ou console) fonctionnels (pour cet exemple) vous n'avez qu'a suivre les paramêtre ici:\n\u003Cul\u003E\n\t\u003Cli\u003E Hostname:\u003Cem\u003E \u003Cstrong\u003Eserveurdistant.ca\u003C\u002Fstrong\u003E\n\u003C\u002Fem\u003E\u003C\u002Fli\u003E\n\t\u003Cli\u003EPort: \u003Cstrong\u003E22\u003C\u002Fstrong\u003E (ssh)\u003C\u002Fli\u003E\n\t\u003Cli\u003EDonner un nom de session, mais ne sauvegardez pas tout de suite.\u003C\u002Fli\u003E\n\t\u003Cli\u003EAller a \u003Cstrong\u003ESSH\u003C\u002Fstrong\u003E-&gt;\u003Cstrong\u003ETunnels\u003C\u002Fstrong\u003E (plus bas)\u003C\u002Fli\u003E\n\t\u003Cli\u003EEntrer, Source port : \u003Cstrong\u003E902\u003C\u002Fstrong\u003E (votre port local), Destination: (ip de vmserver1:le port) , puis cliquer Add.\u003C\u002Fli\u003E\n\t\u003Cli\u003EAller dans \u003Cstrong\u003EConnection\u003C\u002Fstrong\u003E-&gt;\u003Cstrong\u003EData\u003C\u002Fstrong\u003E; Auto-login username, vous pouvez entrer le login qu'il faut si vous l'avez\u003C\u002Fli\u003E\n\t\u003Cli\u003ERetourner au haut du menu et sauvegarder la session\u003C\u002Fli\u003E\n\t\u003Cli\u003EPuis... [Open].\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\nEnsuite, connectez vous au service sur l'hôte localhost et le port que vous avez \"tunnellé\".\n\u003Cul\u003E\n\t\u003Cli\u003E Connecter a VMWare Server\u003C\u002Fli\u003E\n\t\u003Cli\u003EOuvrir VMWare sur votre machine hors réseau... maintenant tunnellée\u003C\u002Fli\u003E\n\t\u003Cli\u003EConnect to remote-host: \u003Cstrong\u003Elocalhost\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\n\t\u003Cli\u003ELogin\u002Fpw: votre login pour accéder aux vm.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\nUtiliser la VM comme si elle était locale.\n\n\u003Cstrong\u003ESource\u003C\u002Fstrong\u003E\n\u003Cul\u003E\n\t\u003Cli\u003E\u003Ca href=\"ttp:\u002F\u002Fwww.medicalnerds.com\u002Fport-forwarding-with-sshputty\u002F\"\u003EExemple tunnel avec PuTTY.\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E",dir:"\u002Fblog\u002F2007\u002F10",path:"\u002Fblog\u002F2007\u002F10\u002Ftunnel-ssh-avec-session-distante-en-console-vmware",extension:".md",slug:v,createdAt:w,updatedAt:w,category:n},coverImage:{toc:[],body:{type:k,children:[]},text:j},month:"10",next:{locale:i,title:"Fait d'usabilité no2, Nous ne faisons pas de choix  optimaux. Nous choisisons le premier choix cohérent",path:"\u002Fblog\u002F2007\u002F10\u002Ffait-dusabilite-no2-nous-ne-faisons-pas-de-choix-optimaux-nous-choisisons-le-premier-choix-coherent",slug:"fait-dusabilite-no2-nous-ne-faisons-pas-de-choix-optimaux-nous-choisisons-le-premier-choix-coherent"},preamble:{toc:[],body:{type:k,children:[]},text:j},prettyfiedTemporalDate:{prettified:"mercredi 3 octobre 2007",temporalDate:"2007-10-03"},prev:{locale:i,title:"Lorsque gérer un réseau peut rimer avec vigilance plutôt que réparation",path:"\u002Fblog\u002F2007\u002F09\u002Florsque-gerer-un-reseau-peut-rimer-avec-vigilance-plutot-que-reparation",slug:"lorsque-gerer-un-reseau-peut-rimer-avec-vigilance-plutot-que-reparation"},slug:v,year:"2007"}],fetch:[],mutations:void 0}}("text","element","\n","\n\t","li","strong","p","ul","fr-CA","","root","a","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2007\u002F10\u002Ftunnel-ssh-avec-session-distante-en-console-vmware\u002F","tranche-de-vie",3,"Les ports TCP sous Linux","Directives en résumé","em","902","h3","-\u003E","tunnel-ssh-avec-session-distante-en-console-vmware","2024-10-24T19:50:04.876Z")));