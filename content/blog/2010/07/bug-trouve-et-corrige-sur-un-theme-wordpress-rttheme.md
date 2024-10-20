---
title: Bug trouvé et corrigé sur un thème WordPress rtTheme
locale: fr-CA
createdAt: 2010-07-01
updatedAt: 2013-03-27
canonical: >-
  https://renoirboulanger.com/blog/2010/07/bug-trouve-et-corrige-sur-un-theme-wordpress-rttheme/
status: publish
revising: true
migrateLinks: true
migrateImages: false
categories:
  - portfolio
tags: []
webarchiveSnapshots:
  - key: themeforest
    orig: http://themeforest.net/
  - key: wordpress
    orig: http://www.wordpress.org
  - key: geoffroigaron
    orig: http://geoffroigaron.com/
  - key: jquery
    orig: http://jquery.com
excerpt: >-
  Je partage le processus de communication et de recherche et comment réparer un
  problème trouvé pour un paquet logiciel, un thème pour WordPress, et comment
  j’ai trouvé l’erreur, à quoi elle consistait et comment je l’ai réparée.
---

<!--#TODO-inline-edit: Evocatio and links to tag in blog? -->

Depuis que nous avons fondé **EVOCATIO Solutions technologiques** nous avons
pris une position d’experts dans le domaine des acrobaties techniques. C’est ce
qu’on faisait dans nos journées de tout les jours _avant_.

Ce que j’avait pas pensé c’est que je trouverait de la demande pour des tâches
pointues et qu’on devait «faire marcher». L’une d’elles a été fait, justement,
pour un ami que je respecte beaucoup: [Geoffroi Garon][geoffroigaron].

Avec sa permission je publie ici comment j’ai réglé un petit bug
<span lang="en">Javascript</span>. Rien d’extraordinaire mais quand même bête
lorsqu’on s’attend a ce que de quoi fonctionne qu’on a acheté et qu’il ne
fonctionne pas. <ins>Finalement, tout juste avant de publier ce billet, j’ai
réalisé que, l’auteur (_@ftolgacan_) a réparé le code. Comme quoi j’ai pris trop
de temps avant de le publier.</ins>

Il s’agit d’un thème adapté qui a été acheté sur [ThemeForest][themeforest] pour
un site fait en [WordPress][wordpress]. Étant donné que le thème fourni n’a pas
vraiment d’endroit ou proposer les correctifs j’ai décidé de publier sur mon
blogue.

<del>Je contribue en français mais ferai une courte explication de ma correction
en anglais sur l’[item précis sur le site officiel][rttheme-preview].</del>
<ins>Le thème n’existe plus et il n’est plus possible de voir ce à quoi
il ressemblait</ins>

<!--#TODO-inline-edit-->

Pour voir le démo du thème, allez dans la section
"<span lang="en">Preview</span>" puis dans la section
"<span lang="en">products</span>" du site qui est illustré.

<!--more-->

### Explication du problème

Lorsqu’on achète un thème on s’attend a ce que tout fonctionne... même avec les
choses qu’on peut configurer dans le paneau d’administration. D’un point de vue
fonctionnel... ça fait du sens.

Dans le cas ici ce n’était PAS le cas.

<app-image src="~/assets/content/blog/2010/07/mathetmots_tabs-300x141.png" alt="Les «Tabs» illustrant un produit provenant d’une liste" figcaption="Les «Tabs» illustrant un produit provenant d’une liste">
</app-image>

Le problème était le suivant. Une fois avoir modifié une liste d’items dans le
catalogue utilisant le panneau de contrôle de <span lang="en">WordPress</span>.
Un mini <span lang="en">javascript</span> permettant d’avoir une liste avec
<span lang="en">Tabs</span> (a droite).

Mais les autres _onglets_ ne fonctionnaient pas et nous ne comprenions pas
pourquoi.

C’est là que j’ai intervenu.

### Explication de la problématique

Le problème consistait a la génération des attributs
<span lang="en">`id=""`</span> une liste <span lang="en">UL</span> avec un thème
et où le thème allait chercher ses valeurs du _id_. Ci-bas on voit comment
<span lang="en">Firebug</span> voit le code généré.

<app-image src="~/assets/content/blog/2010/07/mathetmots_bug_markup.png" alt="Les deux listes avec les ID générés" figcaption=" ">

Les elements de la liste (`li`) avec l’attribut `id` (exemple:
<span lang="en">`id="technical_details"`</span>) est générée à partir d’une
variable qui utilise le input d’un usager (dans le panneau de contrôle
WordPress) qui n’a aucune idée de l’incidence possible de son entrée (espaces,
accents, etc).

</app-image>

Cet exemple de code (ci-haut) est fonctionnel. Mais dans le cas du client, les
`<div id="" />` de la liste `<div id="content" />` avaient des noms qui
provenaient du **nom** de l’item (je ne peut illustrer où ils prenaient la
valeur... je n’ai plus accès pour faire une capture d’écran).

### La solution au problème

Au lieu d’utiliser un <span lang="en">input</span> de l’usager comme
<span lang="en">id</span> d’une liste. Utiliser le fait qu’on sait que le
`<div id="tabs" />` a deux _enfants_... `<div class="product_tabs" />` (avec une
liste ordonnée... pour les boutons qui seront transformés en _onglet_) et
`<div id="content" />` (qui a une liste dans le même ordre que
"<span lang="en">product_tabs</span>"). J’ai donc utilisé ce concept.

### Le code

Comme c’est étrange. J’ai écrit ce billet que j’ai commencé en
<time datetime="2010-05">Mai</time> lorsque j’ai eu a faire le petit travail.
Depuis le temps, le développeur a réglé le problème. Ce que vous voyez de
commenté (précédé par `//` et en vert) dans "Le code original" est ce qui était
utilisé en [jQuery][jquery].

J’ai donc trop pris de temps avant de publier ma solution.

#### Le code original

La section qui suit, qui inclut les lignes qui sont la source du problème
présentement commentées.

```js{8,18}[/wp-content/themes/rttheme6/js/script.js]
$(document).ready(function(){
    var tabs = $("#tabs ul li");
    var content = $("#tabs #content");
    var kids = content.children();
    kids.attr("style","display:none;");
    $("#tabs #content div:first").attr("style","display:block;");
    tabs.click(
      function(){
//      var show = $(this).attr("title");
        var show = $("#tabs ul li").index(this);
        // change clicked tab class
        $("#tabs ul li").removeClass("active");
        $(this).addClass("active");
        // view clicked tab content
        kids.attr("style","display:none;");
        content.slideUp(400);
        $(function(){
          content.slideUp(400);
//        $("#"+show+"").attr("style","display:block;");
          $("#tabs #content div:eq("+show+")").attr("style","display:block;");
          content.slideDown(400);
        });
      }
    );
});
```

Le code tel qu’il <del>est aujourd’hui</del><ins>était au monent de l’écriture
de cet article</ins> a la **ligne 8** et **ligne 18** (qui sont mis en évidence
comme commentaire ci-haut) illustre qu’il utilisait l’attribut **title**.

<!--#TODO-inline-edit-->

#### Le code remplacé par

```js{9,20}[/wp-content/themes/rttheme6/js/script.js]
$(document).ready(function(){
    var tabs = $("#tabs ul li");
    var content = $("#tabs #content");
    var kids = content.children();
    kids.attr("style","display:none;");
    $("#tabs #content div:first").attr("style","display:block;");
    tabs.click(
      function(){
        var show = $("#tabs ul li").index(this);
        // change clicked tab class
        $("#tabs ul li").removeClass("active");
        $(this).addClass("active");
        // view clicked tab content
        kids.attr("style","display:none;");
        content.slideUp(400);
        $(function(){
          content.slideUp(400);
          $("#tabs #content div:eq("+show+")").attr("style","display:block;");
          content.slideDown(400);
        });
      }
    );
});
```

Ici c’est le code que j’avait donné a [Geoffroi][geoffroigaron] le
<time datetime="2010-05">31 mai</time> dernier.

### Finalement

J’ai pris trop de temps pour publier ce billet de solution et il a été corrigé.
Tant mieux!

[themeforest]: http://themeforest.net/
[wordpress]: http://www.wordpress.org
[geoffroigaron]: http://geoffroigaron.com/
[jquery]: http://jquery.com
