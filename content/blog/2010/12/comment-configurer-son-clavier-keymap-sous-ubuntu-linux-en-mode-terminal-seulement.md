---
title: >-
  Comment configurer son clavier («keymap») sous Ubuntu Linux en mode terminal
  seulement
locale: fr-CA
created: 2010-12-08
updated: 2024-10-05
canonical: >-
  https://renoirboulanger.com/blog/2010/12/comment-configurer-son-clavier-keymap-sous-ubuntu-linux-en-mode-terminal-seulement/
status: publish
revising: false
tags: []
categories: []
coverImage:
  src: ~/assets/content/blog/2010/12/Configure-console-data.png
  srcset:
  -  ~/assets/content/blog/2010/12/Configure-console-data-150x150.png 150w
  text: Écran console-data
  alt: Capture d’écran configuration clavier Ubuntu
excerpt: >-
  Dans cet article, je vous montre comment configurer votre clavier sous Linux, spécifiquement pour les besoins des programmeurs québécois ou canadiens-français. Cela inclut la prise en charge des lettres accentuées et des caractères spéciaux essentiels pour la programmation.
  En tant que programmeur Québecois (Canadien-Français), j'ai grandi en apprenant à taper au clavier durant mon adolescence. Cela m'a amené à m'habituer non seulement aux lettres accentuées, une disposition essentielle pour moi lors de chaque moment que je suis devant un clavier.
preamble:
  date: 2024-10-05
  text: |
    La configuration du clavier n’a probablement pas changé. Mais Linux est devenu de plus en plus visuel et la
    [documentation liée][LocaleConf] est prévue d’être effacée. Alors j’ira probablement vers la
    [documentation <em lang="en">Keyboard Portal</em>][0] de Debian Linux.
    [LocaleConf]: https://help.ubuntu.com/community/LocaleConf
    [0]: https://wiki.debian.org/Keyboard "Debian Linux Keyboard Portal"
---

Mise en situation.

J'était en train de me monter une Machine Virtuelle minimale de développement (j'en parle [ici](/blog/2010/07/installer-une-machine-virtuelle-linux-roulant-dans-vmware-fusion-sous-mac-os-x/ "Installer une Machine Virtuelle Linux roulant dans VMware Fusion sous Mac OS X"), [ici](/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-iii/ "Une VM Linux qui sert au développement PHP 5.3 avec Eclipse – partie 3"), [ici](/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-ii/ "Une VM Linux qui sert au développement PHP 5.3 avec Eclipse – partie 2"), [ici](/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-i/ "Une VM Linux qui sert au développement PHP 5.3 avec Eclipse – partie I"), et finalement [ici aussi](/blog/2007/11/mon-espace-de-travail/ "Mon espace de travail buntu Linux qui roule et VMWare Server fait rouler la machine de developpement")).

Toujours est-il que mon Mac commence a être vieux et même s'il est maximisé a 3GB de RAM sur un processeur 1.66 Ghz Core Duo et 500GiB d'espace disque, lorsque je roule Eclipse, c'est lourd! Alors je me suis crée une nouvelle machine virtuelle. Par erreur j'ai mis le mauvais clavier. Imagine essayer de faire une commande terminal sans savoir comment trouver tes touches spéciales.

Vous savez, les touches pour écrire des choses qui semblent obscures lorsque l’on est pas habitué, comme par exemple

<figure>

```js
let nom = 'Bob';
({ [nom]: `C’est ${nom}!` })[nom]
```
  <figcaption>
  <small>

(**Note**: Cet exemple est écrit en 2024 [lors de la refonte de mon site](/blog/2024/10/refonte-majeure-de-mon-site-web). JavaScript de 2010 ne supportait pas toute cette syntaxe)

  </small>
  </figcaption>
</figure>

Je sais pas si vous êtes comme moi. J’aime avoir le bon clavier pour pouvoir bien écrire en français et en anglais. Alors je n'ai pas le choix.

... à moins que j'apprenne le Dvorak <del>(un jour!)</del>

Ma solution
-----------

J'ai trouvé cet article dans le [Wiki de Ubuntu Linux qui portait un nom très peu évocateur («LocaleConf»)](https://help.ubuntu.com/community/LocaleConf "LocaleConf  you need to change the language and keyboard configuration, follow these instructions").

En gros c'est simple, il faut:

*   `console-tools`
*   `console-data`
*   `localeconf`

### Installer

```sh
sudo apt-get install console-data console-tools
```

Puis configurer avec `dpkg-reconfigure`

```sh
sudo dpkg-reconfigure console-data
```

J'ai suivi:

1.  «Select keymap from arch list»
2.  «Qwerty»
3.  «Canadian»
4.  «French»


<div style="overflow:hidden;clear:both" class="thumbnails gallery">
<app-image data-larger-src="~/assets/content/blog/2010/12/Configure-console-data.png" src="~/assets/content/blog/2010/12/Configure-console-data-150x150.png" alt="Console text base user interface" figcaption=" ">

Configure console-data


</app-image>
<app-image data-larger-src="~/assets/content/blog/2010/12/Configure_console-data_Keyboard_variant_french.png" src="~/assets/content/blog/2010/12/Configure_console-data_Keyboard_variant_french-150x150.png" alt="Console text base user interface" figcaption=" ">

</app-image>
<app-image data-larger-src="~/assets/content/blog/2010/12/Configure_console-data_specify_layout_family.png" src="~/assets/content/blog/2010/12/Configure_console-data_specify_layout_family-150x150.png" alt="Console text base user interface" figcaption=" ">

</app-image>
<app-image data-larger-src="~/assets/content/blog/2010/12/Configuring_console-data_Keyboard_layout_Canadian.png" src="~/assets/content/blog/2010/12/Configuring_console-data_Keyboard_layout_Canadian-150x150.png" alt="Console text base user interface" figcaption=" ">

</app-image>
</div>

