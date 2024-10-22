---
locale: fr-CA
title: Période de tests
canonical: https://renoirboulanger.com/blog/2007/04/periode-de-tests/
status: publish
revising: true
migrateLinks: false
migrateImages: false
gallery: false
caption: false
created: '2007-04-25'
updated: '2013-03-27'
tags: []
categories: []
excerpt: ''
---

Je me suis souvent demandé comment on pouvait pour faire fonctionner un site web mais sur deux serveurs: On appelle ca du Load Balancing. Le concept est facile a illustrer... mais à  faire, ouf!

En passant... Je suis actuellement a faire des tests de load balancing... et actuellement vous êtes en train de lire mon blogue sur le <span style="text-decoration: line-through;"><strong>serveur 2</strong> (goretex)</span>.

UPDATE: le serveur est maintenant en redondance SQL alors chaque post est identique sur les deux machines :)

<!--more-->

La théorie est facile, voici un schéma:<a href="https://renoirb.github.io/site-assets/assets/content/blog/2007/04/lvs_ha.jpg"><img class="aligncenter size-full wp-image-1163" title="lvs_ha" src="https://renoirb.github.io/site-assets/assets/content/blog/2007/04/lvs_ha.jpg" alt="lvs_ha" width="531" height="599" style="border:none !important" /></a>
<small>Source:  <a title="Linux virtual server tutorial" href="http://www.linuxvirtualserver.org/">http://www.linuxvirtualserver.org</a></small>

Le principe est assez simple. Pour que ce soit optimal, il faut au minimum, plus de quatre serveurs. Il faudrait que les deux premiers (LinuxDirector, Backup) servent pour rediriger le traffic vers les serveurs redondants (Real Server 1, RealServer2, etc...).

Idéalement, il faut avoir un accès a un Data center qui donne une largeur de bande raisonnable et pouvoir héberger ses machines là. Idéalement aussi, il faudrait que d'autres serveurs soient situés a d'autres endroits géographiques... autre ville, pays, planête :P~ (je blague!) Mais on a pas nécessairement les moyens de faire cela!

Alors, dans mon cas... je ne peut pas me permettre de faire ce type de setup mais je vais vous laisser ici ce que j'ai trouvé comme documentation au ca où vous cherchiez cette voie.

Je reviendrai plus tard poster le setup que j'ai pensé faire avec seulement deux serveurs.
