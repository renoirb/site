class: first-slide center
name: index

# Déployer **WordPress** <br/>de façon *consistante* <br/>et le rendre *résilient*

<svg viewBox="0 0 400 400" width="400px" height="300px"><use  xlink:href="assets/sprites.svg#WordPressIcon"></use></svg>

.footnote[
Par [@renoirb](https://renoirboulanger.com/#is)
]

???

Il n'y a pas d'experts dans tout

*AgencyLife*

- Date driven, marketing, sans toujours avoir temps de bien faire
- AgencyLife Vite, Pas cher, Bien fait.  Pick 2
- Veulent fonctionalités app web pas cher #lourd

*Patterns*

- Tendance de mettre haute resolution #lent
- Problemes inexplicable de base de donnee #instable
- Entretien de plusieurs sites, certains peuvent briser inexplicablement



---
background-image: url(assets/150.jpg)

???

*Experience*

- Champ de travail stimulant
- Beaucoup de nouveauté
- Peux faire beaucoup

*Souvent vu...*

- Passer de FTP on Save a XAMPP
- Site fonctionne, mais sur serveur manque de quoi
- QA et Tests sont faits par des personnes manuellement
- Sysadmin?

*Et moi*

- commencé vers 1998
- Compagnie Inc en 2003 sous-traitant agences graphisme
- Serveur mail avec mon vieux laptop
- Demenage a Montreal, travaillé avec firme consultant J2EE
- ´Integrateur'
- Travail frontend directement avec code en dev, meme vitesse que backend devs
- jQuery venait de commencer, Firebug était la revolution



---
background-image: url(assets/People-of-the-W3C-2013.png)

???

*W3C*

- Employé Wikipedia, maintenant chez Lyft avait monté infra initiale
- Blogue WordPress, 2 Mediawiki, applications Python,  et autres PHP
- Incapable de travailler ailleurs que prod
- Seulement via gestion de configuration mais inflexible



---
background-image: url(assets/webplatform-components.jpg)

???

*Fait*

- Transformé en espace de travail local
- Staging
- Revu comment deployer: App from upstream, add extensions, own extension et theme, ecrit configuration du moment
- Changer mot de passe et sync



---
background-image: url(assets/webat25_browser.png)

???

- Supporté site 25e Anniversaire du www
- Presqu'aucun Impact


---
background-image: url(assets/webat25_google_doodle.png)



---
name: toc

# Table of Contents

.toc-items[
* [Table of Contents](#toc)
]



---
name: preamble
class: chapter middle

# Principes de base

???

**Les outils ne font pas le moine**

*Beaucoup d'outils*

- chef, ansible, Puppet, Mcollective, Serverspec, saltstack, terraform
- OpsWorks, Heroku,
- Ganglia, StatsD, Nagios, Grafana,


*Essentiel*

- Infrastructure as code
- Enforcer conventions code pour faciliter deploiement continu
- Mesurer



---
background-image: url(assets/schemas_Dev_Ops.png)

.footnote[
<small>*Velocity 2009*: [10+ Deploys Per Day][10-deploys-a-day], par John ALLSPAW et Paul HAMMOND</small>
]

???

- «Super tribe», voir comme un tout entre dev et operations
- La présentation qui a tout changé,
  - *Velocity 2009* avec
    - John *Allspaw* et
    - Paul *Hammond*


  ---
  class: center middle

  > “ any improvements made *anywhere besides* the bottlenecks are **an illusion**. ”

  .footnote[
  <small>[**Gene KIM**](http://itrevolution.com/), [The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win](http://itrevolution.com/books/phoenix-project-devops-book/)</small>
  ]

  ???

  Any improvement made after the bottleneck is useless, because it will always remain starved, waiting for work from the bottleneck.

  And any improvements made before the bottleneck merely results in more inventory piling up at the bottleneck.



---
class: middle

# Failure * **will** happen*.<br/>Not a question of *if*,<br/>but *when*.

.footnote[
*Velocity 2009*: [10+ Deploys Per Day][10-deploys-a-day], par John ALLSPAW et Paul HAMMOND
]

???

- Il y a toujours des changements
- Ne jamais payer la «dette technique» peux coûter cher
- Healthy attitude about failure
- Changer mindset de blame



---
class: adjust-title-overlay
background-image: url(assets/the-phoenix-project-novel.png)

# The Phoenix Project <br/><small>A TL;DR summary</small>

.footnote[
<small>[**Gene KIM**](http://itrevolution.com/), [The Phoenix Project](http://itrevolution.com/books/phoenix-project-devops-book/)</small>
]

???

Types of work AND The Three ways are **heavily inspired** by the *Theory of constraints*

1. *Identify* system *constraints*
2. Decide how to *exploit* the system constraint
3. *Subordinate* everything else to 2
4. *Elevate* system constraints
5. If a constraint breaks at 4, get back to 1. <br/>*But do not allow inertia to cause a system's constraint*

<small>**Source** [**Eliyahu M. Goldratt**](http://www.goldratt.com/), [The Goal](https://www.toc-goldratt.com/en/product/The-Goal-A-Process-of-Ongoing-Improvement)</small>



---
name: how-to-start
class: chapter middle

# *Expérimenter*, *mesurer* <br/>et *automatiser* !

???

- Théorie des contraintes
- Automatiser et/ou merger complexité



---
background-image: url(assets/schemas_A_server.png)

## Un serveur

???

*Problème serveur le plus commun*: plus d'espace mémoire

**Vitals**
- Mémoire
- CPU
- Espace disque




---
background-image: url(assets/schemas_Service.png)

## Un service

???

*Utilise* le système

- Utilisateur propriétaire
- Expose output

Nos besoins sont **sensible** au contexte

- Dev;
  - debugging/logging enabled
  - File permissions uploads might be different
  - Utiliser MySQL localement

- Prod;
  - Utiliser RDS



---
background-image: url(assets/schemas_Deployed_package.png)

## Paquet *installable*

???

RPM, DEB, etc.

Une *archive compressée* avec *script*

Fichiers dans dossiers, *changer paramètres*


---
background-image: url(assets/schemas_Lowest_common_denominators.png)

## «&nbsp;Infrastructure *as code*&nbsp;»

???

- Tout doit pouvoir **rouler** de **façon indépendante**
- **Idempotency**
- Avoir en place une *image de base* qui est *disponible partout*
- Partager système de configuration

Différence entre rouler les scripts et *le cloud*



---
background-image: url(assets/schemas_Pillars_of_delivery_cloud.png)

.footnote[
*Velocity 2009*: [10+ Deploys Per Day][10-deploys-a-day], par John ALLSPAW et Paul HAMMOND
]

???

Une autre façon de voir et de s'imaginer une *Pyramide*

- *Rôle* permet de différencier quoi est installé


---
## Cibler par rôle

```yaml

# SaltStack!

base:

  '*':
    - salt
    - basesystem

  'web*':
    - php
    - mysql
    - apache2

  'db* and G@level:vagrant':
    - match: compound
    - mysql.server
    - level.vagrant.db

```



---
## S’assurer de *l’état désiré*

```yaml

# apache2/init.sls

apache2:
  pkg.installed: []
  service.running:
    - reload: True
    - enable: True

{% for modName in [
   'ssl'
  ,'status'
  ,'rewrite'
  ,'headers'
] %}
Enable apache2 {{ modName }} module:
  apache_module.enabled:
    - name: {{ modName }}
    - unless: test -L /etc/apache2/mods-enabled/{{ modName }}.load
    - watch_in:
      - service: apache2
{% endfor %}
```



---
name: web-app-deployment
class: middle center chapter

# Comment déployer *?*

???

- Question que je me suis longtemps demandé
- Continuous delivery
- Revenir en arrière
- Restaurer tel qu’au moment de la mise en ligne
- Aucune dépendances! Unzip, done!



---
background-image: url(assets/schemas_Web_Application.png)

## Une Application Web



---
background-image: url(assets/schemas_Packaging.png)

## Emballer une Application Web



---
background-image: url(assets/schemas_Deployment_actions.png)

## Processus d’emballage



---
name: topologie-reseau
class: chapter middle

# Topologie réseau



---
background-image: url(assets/schemas_Modele_classique.png)

## Classique



---
background-image: url(assets/cpu.gif)

## Classique



---
background-image: url(assets/schemas_Modele_classique_annotated.png)

## Classique



---
class: middle

## Processus de génération d’une page


---
background-image: url(assets/VisiterUnSiteWeb_top.png)




---
background-image: url(assets/screenshots-multiple-hosts.png)



---
background-image: url(assets/VisiterUnSiteWeb_bottom.png)



---
background-image: url(assets/schemas_Modele_distribue.png)

## Distribué



---
background-image: url(assets/schemas_VirtualHost_file_layout.png)



---
background-image: url(assets/schemas_VirtualHost_network_layout_public.png)



---
background-image: url(assets/screenshots-redirect-to-varnish.png)



---
background-image: url(assets/schemas_VirtualHost_network_layout_origin.png)



---
background-image: url(assets/screenshots-origin-restriction.png)



---
background-image: url(assets/screenshots-origin-restriction-vhost.png)



---
background-image: url(assets/screenshots-origin-restriction-vhost-circumvent.png)



---
background-image: url(assets/schemas_VirtualHost_network_layout_admin.png)



---
background-image: url(assets/schemas_Modele_distribue_2tier.png)

## Distribué avec *«&nbsp;load&nbsp;balancer&nbsp;»*



---
class: middle center

# Merci!


**Questions?**
















---
name: eof
class: middle

# EOF



---

# Imported from External

![](assets/sprites.svg#WordPressIcon)



---
class: center
background-image: url(assets/sprites.svg#WordPressIcon)

# Background Image



---
class: middle center svg-use-tag

# SVG &lt;use/&gt; (external)

<svg viewBox="10 10 400 300" width="500px" height="500px"><use xlink:href="assets/sprites.svg#WordPressIcon"></use></svg>



---
class: middle center svg-use-tag

# SVG &lt;use/&gt; (external)

<svg viewBox="0 0 960 560" width="960px" height="560px"><use xlink:href="assets/sprites.svg#A_Server"></use></svg>



---
name: colors
class: black-background

<!-- 23241f -->

# Color tests

.center[
![Failing the un-failable](../../funstuff/fail-simpson-burn-cereals.jpg)
]



---
class: black-background adjust-title-overlay
background-image: url(../../funstuff/fail-simpson-burn-cereals.jpg)

# With **title** `overlay` <small>(inverted)</small>



---
class: adjust-title-overlay
background-image: url(../2015-Mozilla-MDN-Browser-Compatibility-Data-Project-vision/images/data-in-excel-alpha.png)

# With **title** `overlay` <small>(default)</small>



---
class: black-background

## Testing *one* .keyword[two] **three** <small>(black)</small>

* Hi [mom](#mom)!
* Testing `keyword`

``` css
foo { background-color: purple; }
```

And *of course*, **bleh**, <abbr title="Dog">DAWG</abbr>

``` js
var hi = 'dude';
```


---
class: inverted

## Testing *one* .keyword[two] **three** <small>(inverted)</small>

* Hi [mom](#mom)!
* Testing `keyword`

``` css
foo { background-color: purple; }
```

And *of course*, **bleh**, <abbr title="Dog">DAWG</abbr>

``` js
var hi = 'dude';
```

---

## Testing *one* .keyword[two] **three** <small>(default)</small>

* Hi [mom](#mom)!
* Testing `keyword`

``` css
foo { background-color: purple; }
```

And *of course*, **bleh**, <abbr title="Dog">DAWG</abbr>

``` js
var hi = 'dude';
```


  [devops-quotes]: http://www.grahamlea.com/2013/02/what-is-devops-bullet-points-quotes-tweets/
  [10-deploys-a-day]: https://www.youtube.com/watch?v=LdOe18KhtT4
