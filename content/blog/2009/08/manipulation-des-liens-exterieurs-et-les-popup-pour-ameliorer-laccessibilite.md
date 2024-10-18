---
locale: fr-CA
title: Manipulation des liens extérieurs et les popup pour améliorer l'Accessibilité
canonical: >-
  https://renoirboulanger.com/blog/2009/08/manipulation-des-liens-exterieurs-et-les-popup-pour-ameliorer-laccessibilite/
status: publish
revising: true
created: '2009-08-23'
updated: '2013-03-27'
categories:
  - programmation
tags:
  - accessibility
  - tutoriels
  - web
  - frontend
excerpt: ''
---

En rédigeant [Accessibilité et les liens externes](/blog/2009/08/accessibilite-et-les-liens-externes) j'ai réalisé qu'il serait mieux que je sépare l’implémentation du raisonnement sur le besoin.

Cet article décrit une méthode *programmatique* pour transformer tout les liens d'une page qui vont à l'extérieur du site courrant en ajoutant un icône approprié et la note disant qu'une fenêtre s'ouvrira.

<!--more-->

## Les méthodes généralement utilisés

Actuellement, il existe plusieurs manières de faire. Sauf qu'elles demandent souvent de le faire à la main pour <em>chaque lien</em> et ca peut être lourd.

Surtout pour la rédaction qui se fout un peu de faire du *HTML propre*

Les méthodes qui suit font bel et bien le travail mais elles ont leurs faiblesses. Aussi elles peuvent devenir rapidement hors de contrôle. Beaucoup d’attributs.

<!--#TODO-inline-edit Renoir de 2024-->
<rb-notice-box variant="info" class="my-5">
  <span slot="header">

[Renoir de <time datetime="2024-10">2024</time>](/blog/2024/10/refonte-majeure-de-mon-site-web): Remise en contexte

  </span>

Cet article a été écrit en 2009 et à l'époque, la majorité des gens n’utilisaient que Microsoft Internet Explorer et il n’y avait pas des onglets. Il s’agissait d’une fenêtre par site. Nous pouvions avoir une dizaines de fenêtres. Les onglets existaient en 2009, mais il fallait utiliser Mozilla Firefox, ou Opera.

</rb-notice-box>

Dans les exemples suivants, imaginons que nous sommes sur une autre page sur un autre nom de domaine que `http://example.org`, et que nous voulons ouvrir une fenêtre pour les liens extérieurs, comme `example.org`.


Voici une liste (non exhaustive) de techniques;

### Méthode idéale

L'idéal. Simple. Rien a faire.

```html
<a href="http://example.org">
  Texte en exemple
</a>
```

### Méthode target

```html
<a href="http://example.org" target="_blank">
  Texte en exemple
</a>
```

Mais le problème c'est que l'attribut `[target]` pour cet usage est obselete. Donc nous de devrions pas l'utiliser.

### Méthode avec fonction `window.open`

```html
<a href="javascript:window.open('http://example.org','mywindow','width=400,height=200')">
  Texte en exemple
</a>
```

Ceci fonctionnerait bien. Mais du point de vue SEO durant l’indexation crawling, nous compliquons la tâche et ne devrait pas etre utilisé car l'attribut `[href]` est fait pour avoir le URL, pas une chaîne de caractère a exécuter.

Elle n'est pas recommandée parceque la balise est altérée de son usage natuel: faire un lien et que l'attribut `[href]` ne devrait servir qu’a déclarer la relation, et séparer l’implémentaiton pour obtenir un comportement.


### Méthode onClick


<rb-notice-box variant="info" class="my-5">
  <strong slot="header">Remise en contexte</strong>

En 2009, utiliser `addEventListener` était encore pas si bien documenté. L'habitude était d'utiliser la vieille technique qui exploitait la nature XML du HTML. D'utiliser un attribut XML, d'y insérer une chaîne de caractères, et de le faire exécuter. Étant donné que XML et les attributs sont seulement majuscules ou minuscules et qu'il n'y a pas de tiret comme nous pouvons le faire avec [les `[data]` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) (e.g. `[data-open="true"]`, et l'obtenir via `dataset.open`) aujourd'hui.

Donc `[onclick]` était utilisé, il était impossible d'avoir plus d’un `[onclick]` parce que XML. Pour lire [sur l'histoire](https://en.wikipedia.org/wiki/DOM_event)

</rb-notice-box>


```html
<a href="http://example.org/" onclick="window.open('http://example.org/','mywindow','width=400,height=200')">
  Texte en exemple
</a>
```


Est une bonne méthode mais **pas facile a expliquer pour l'équipe de rédaction**.


---

## Règles pour les liens extérieurs


*   Une balise html doit être utilisée pour son usage
*   Le _markup_ doit être le plus simple possible pour éviter les erreurs d'entrée de l'édimestre.
*   On ne peut pas utiliser le CSS pour ajouter les icones **Note**: Parceque les _Lecteurs d'écran_ (aveugles) "lisent" le texte et non pas ce qui a été modifié via CSS.
*   On ne peut pas utiliser de Javascript invalide **Note**: Si on y va via le DOM, avec les manipulations valide, ca passe bien: bref on évite innerHTML et on se fie aux [Spécifications du DOM](http://www.w3.org/DOM/) et de WCAG 1 qui recommande d’éviter de modifier.

D'autres règles pourraient être mentionnées. Mais le message peut bien se résumer ainsi.

> **En HTML, on doit utiliser les balises pour l'usage qu'elles sont destinés à faire.**

... il ne reste pas tant d'options. La méthode que j’ai élaboré répond a toutes ces conditions.


### Les _autres_ choses que le lien doit faire

Dans les lignes guides de l'accessibilité du web (et en ergonomie/utilisabilité) on mentionne

> Qu'on doit avoir un indice qu'un lien est destiné à ouvrir _une page extérieure_ et/ou _un popup_

Source: ma mémoire... j'ai pas trouvé de lien référence.

ça veut donc dire qu'en plus de faire le lien en tant que tel, il faut ajouter une _image_ dans le lien qui va annoncer le popup... Ouf!

### Ce qu'il faudrait...

<!--#TODO-inline-edit Renoir de 2024-->
En gros, il faudrait, que pour chaque lien... (Renoir de <time datetime="2024-10">2024</time>: Il y en a probablement beaucoup aujourd’hui!)

*   Avertir qu'il y a un lien externe dans un icône image ajouté automatiquement
*   Placer l'icone avec la bonne balise et ne pas utiliser le CSS.
*   Avoir un alt="" pour l'image (icône) car sinon c'est du _html invalide_ en plus qu'il servirait a avertir
*   Que le alt="" soit dans la langue utilisée dans le site
*   Que le lien soit utilisable _SANS JAVASCRIPT_ donc, on oublie le href="javascript..." **Note**: C'est une approche qui veut que l'on puise ["_dégrader de façon élégante_"](/glossary/progressive-enhancement) le code dans la "_pire des situations_". Ce qu’on surnomme "[Graceful Degradation](/glossary/progressive-enhancement)" dans le métier.



### la Manière idéale

Il s'agit d'une méthode que j'ai élaborée avec un ancien collègue que l'on surnomme (alias) _Reynold Kirby_ pour être valide avec toutes les règles ci-haut mentionnés.

*   Lister tout les liens externes qui commencent par `http://`;
*   Éliminer de la liste les domaines qu'on ne veut pas qui se fassent transformer;
*   Créer, via le DOM, une image AVEC le bon attribut `[alt]`;
*   Ajouter un attribut `[rel="popup"]` pour le handler de popup;
*   Ajouter, finalement, une fonction qui réagit et gère à l’activation (souris)

### L’attrape

On va utiliser le `[onclick="..."]`, mais généré automatiquement via Javascript. Car de toute façon il est ridicule de s'interdire d'utiliser JavaScript. Dans ce contexte, ce serait donc acceptable. Et toujours mieux que de faire `[target="_blank"]` et/ou de demander aux édimestres de _faire chaque lien à bras_ (!!)


<rb-notice-box variant="info" class="my-5">
  <strong slot="header">Remise en contexte</strong>

En 2009, la très grande majorité du HTML et CSS ("<em lang="en">FrontEnd</em>") était des chaînes de caractères générés par un langage tel que PHP ou Java, Python ou Perl. C'était l’âge d’or de *jQuery*, et nous nous passions des morceaux de code JavaScript alignés avec peu de rigeur. Tout a chagé avec Node.js, Chromium, et ECMAScript 6 en 2015 bien sûr.

</rb-notice-box>

### Les possibilités

**Seulement un popup**

```html
<a href="http://example.org" rel="popup">...</a>
```

**Popup de 800 par 600 pixels de grand**

```html
<a href="http://example.org" rel="popup standard 800 600">...</a>
```


**Popup de 800 par 600 pixels de grand avec une console**

```html
<a href="http://example.org" rel="popup console 800 600">...</a>
```

**Popup plein écran**

```html
<a href="http://example.org" rel="popup fullscreen">...</a>
```


## Le code

Simplement ajouter ce bout de code Javascript *aux autres scripts du site*.


<code-group title="Le code">
  <code-block label="Version 2024" active>


```js
var ADDED_ICON_ALT_TEXT = 'Lien sur un site externe qui va ouvrir dans une nouvelle fenetre.'
var ADDED_ICON_IMG = '/icones/extlink.gif'

/* Initialisation */
addImageAtExternalLinks(document)


// Le reste -------
function addImageAtExternalLinks(d) {
  var anchorList = d.getElementsByTagName('a')
  for (var i = 0; i < anchorList.length; i++) {
    /**
     * Remarquez les indexOf()... remplacez renoirboulanger
     * par votre propre nom de domaine... addthis a été ajouté
     * au cas ou vous avez un service du genre.
     *
     * 2024: au lieu d'utiliser "renoirboulanger" dans le grand
     * if imbriqué, le `window.location.href` éviterait complètement
     * ce commentaire ici.
     **/
    if (
      anchorList[i].href !== '' &&
      !anchorList[i].href.includes('renoirboulanger') &&
      !anchorList[i].href.includes('javascript') &&
      !anchorList[i].href.includes('addthis')
    ) {
      var elContainer = anchorList[i]
      var createdEl = d.createElement('img')
      createdEl.setAttribute('alt', ADDED_ICON_ALT_TEXT)
      createdEl.setAtrribute('src', ADDED_ICON_IMG)
      elContainer.appendChild(createdEl)
      elContainer.setAttribute('rel', 'popup')
      // elContainer.onclick = handlePopupOpen
      // AVANT: La méthode ci-haut ^ etait ce que nous faisions
      // MAINTENANT (2015), c’est mieux d’utiliser addEventListener
      elContainer.addEventListener('click', handlePopupOpen)
    }
  }
}

/**
 * Gestionnaire d'evenement pour ouvrir popup.
 *
 * Permet de creer un popup en faisant un lien seulement avec attribut
 * href, et d’adapter chacun de facon configurable.
 *
 * Version révisée en 2024 par Renoir Boulanger lors de la refonte de son site et de voir comment
 * ce code était ravagé durant toutes ces années.
 *
 * @author Renoir Boulanger <hello@renoirboulanger.com>
 * @author Reynold Kirby (alias) <reynold.kirby@gmail.com>
 **/
function handlePopupOpen(e) {
  e.stopPropagation()
  e.preventDefault()
  // Source: http://www.accessify.com/features/tutorials/the-perfect-popup/
  // set defaults - if nothing in rel attrib, these will be used
  var t = 'standard'
  var w = null
  var h = null


  // var that = this
  // AVANT: Lorsqu'on utilise .onlcick, le "this" était disponible.
  // MAINTENANT (2015), c’est mieux d’utiliser addEventListener et currentTarget
  var that = e.currentTarget

  // look for parameters
  var attribs = that.rel.split(' ')
  if (attribs[1] != null) {
    t = attribs[1]
  }
  if (attribs[2] != null) {
    w = attribs[2]
  }
  if (attribs[3] != null) {
    h = attribs[3]
  }

  // call the popup script
  popUpWin(that.href, t, w, h)
}

function popUpWin(url, type, strWidth, strHeight) {
  closeWin()
  // calls function to close pop-up if already open,
  // to ensure it's re-opened every time, retainining focus
  type = type.toLowerCase()
  if (type === 'fullscreen') {
    strWidth = screen.availWidth
    strHeight = screen.availHeight
  }
  var tools = ''
  if (type === 'standard')
    tools =
      'resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width=' +
      strWidth +
      ',height=' +
      strHeight +
      ',top=0,left=0'
  if (type === 'console' || type === 'fullscreen')
    tools =
      'resizable,toolbar=no,location=no,scrollbars=no,width=' +
      strWidth +
      ',height=' +
      strHeight +
      ',left=0,top=0'
  newWindow = window.open(url, 'newWin', tools)
  newWindow.focus()
}

var newWindow = null

function closeWin() {
  if (newWindow !== null) {
    if (!newWindow.closed) newWindow.close()
  }
}
```


</code-block>
<code-block label="Version Originale">


```js
const strPopUpWarning = 'Lien sur un site externe qui va ouvrir dans une nouvelle fenetre.'

function addImageAtExternalLinks() {
  const anchorList = document.getElementsByTagName('a')
  for (let i = 0; i < anchorList.length; i++) {
    /**
     * Remarquez les indexOf()... remplacez renoirboulanger
     * par votre propre nom de domaine... addthis a été ajouté
     * au cas ou vous avez un service du genre
     **/
    if (
      anchorList[i].href != '' &&
      !anchorList[i].href.includes('renoirboulanger') &&
      !anchorList[i].href.includes('javascript') &&
      !anchorList[i].href.includes('addthis')
    ) {
      const elContainer = anchorList[i]
      const createdEl = document.createElement('img')
      createdEl.alt = strPopUpWarning
      createdEl.src = '/icones/extlink.gif'
      elContainer.setAttribute('rel', 'popup')
      elContainer.appendChild(createdEl)
      elContainer.onclick = dopopup
    }
  }
}

/* Ensuite... l'appel */
addImageAtExternalLinks()

/**
 * Fonctions pour les popup
 *
 * Permet de creer un popup en faisant un lien seulement avec attribut
 * href, et d’adapter chacun de facon configurable.
 *
 * @author Renoir Boulanger <lunique @renoirboulanger.com>
 * @author Reynold Kirby (alias) <reynold .kirby@gmail.com>
 **/
function dopopup(e) {
  // Source: http://www.accessify.com/features/tutorials/the-perfect-popup/
  // set defaults - if nothing in rel attrib, these will be used
  let t = 'standard'
  let w = null
  let h = null

  // look for parameters
  attribs = this.rel.split(' ')
  if (attribs[1] != null) {
    t = attribs[1]
  }
  if (attribs[2] != null) {
    w = attribs[2]
  }
  if (attribs[3] != null) {
    h = attribs[3]
  }

  // call the popup script
  popUpWin(this.href, t, w, h)

  // cancel the default link action if pop-up activated
  if (window.event) {
    window.event.returnValue = false
    window.event.cancelBubble = true
  } else if (e) {
    e.stopPropagation()
    e.preventDefault()
  }
}

function popUpWin(url, type, strWidth, strHeight) {
  closeWin()
  // calls function to close pop-up if already open,
  // to ensure it's re-opened every time, retainining focus
  type = type.toLowerCase()
  if (type == 'fullscreen') {
    strWidth = screen.availWidth
    strHeight = screen.availHeight
  }
  let tools = ''
  if (type == 'standard')
    tools =
      'resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width=' +
      strWidth +
      ',height=' +
      strHeight +
      ',top=0,left=0'
  if (type == 'console' || type == 'fullscreen')
    tools =
      'resizable,toolbar=no,location=no,scrollbars=no,width=' +
      strWidth +
      ',height=' +
      strHeight +
      ',left=0,top=0'
  newWindow = window.open(url, 'newWin', tools)
  newWindow.focus()
}
var newWindow = null

function closeWin() {
  if (newWindow != null) {
    if (!newWindow.closed) newWindow.close()
  }
}
```


  </code-block>
</code-group>
