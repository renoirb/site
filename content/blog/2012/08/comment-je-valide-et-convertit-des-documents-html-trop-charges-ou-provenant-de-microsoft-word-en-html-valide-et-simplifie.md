---
title: >-
  Comment je valide et convertit des documents HTML trop chargés ou provenant de
  Microsoft Word en HTML valide et simplifié
locale: fr-CA
created: 2012-08-30
updated: 2013-06-11
canonical: >-
  https://renoirboulanger.com/blog/2012/08/comment-je-valide-et-convertit-des-documents-html-trop-charges-ou-provenant-de-microsoft-word-en-html-valide-et-simplifie/
status: publish
revising: true
migrateLinks: true
migrateImages: false
gallery: false
caption: false
categories:
  - programmation
tags:
  - integration
  - outils
  - techniques
  - tutoriels
  - php
webarchiveSnapshots:
  - key: unoconv
    orig: http://dag.wieers.com/home-made/unoconv/#download
  - key: stackoverflow-openoffice
    orig: http://stackoverflow.com/questions/3405687/openoffice-org-using-uno-to-convert-docx-to-html
  - key: tidy-options
    orig: http://tidy.sourceforge.net/docs/quickref.html
  - key: htmlawed-docs
    orig: http://www.bioinformatics.org/phplabware/internal_utilities/htmLawed/more.htm
  - key: htmlawed-settings
    orig: http://www.bioinformatics.org/phplabware/internal_utilities/htmLawed/example_settings.htm
  - key: htmlawed-home
    orig: http://www.bioinformatics.org/phplabware/internal_utilities/htmLawed/index.php
preamble:
  date: 2024-09-12
  text: |
    Il est fort possible que la méthode utilisée ne sois plus reproduisible car les dépendances
    ne sont plus disponibles aux versions utilisées.

    Cette méthode a été très utile pour convertir des fichiers complexes en pages HTML simplifiées
    pour affichier des documents légaux.

    Le site qui utilisait cette méthode était pour [l’Union des Artistes (UDA)](https://site.uda.ca/)
    pour les [ententes collectives](https://site.uda.ca/page/ententes-collectives) et l’engin de recherche
    des documents pour les membres.
    L’autre partie que j’ai été impliquée pour l'<abbr>UDA</abbr> était notamment l’**écriture**
    et l’**architecture** du HTML et le styling CSS pour l’ensemble du site.

    La [maquette de travail («<span lang="en">styleguide</span>») est
    disponible ici](https://renoirb.com/past-projects/2012/UnionDesArtistes/)
excerpt: >-
  Cette procédure est faite pour permettre de prendre n'importe quel fichier
  Word ou HTML généré avec beaucoup de tagsoup en en simplifier a sa plus simple
  expression html. Valide.
---

### Description

Cette procédure est faite optimiser la conversion document word en html,
spécialement ceux qui sont généré avec beaucoup de «tagsoup» en en simplifier a
sa plus simple expression <abbr>HTML</abbr>. Valide.

#### Exemple

##### Avant

Le HTML a les balises brisées à l'intérieur de chaque balise pour illustrer le
poid et la répétition

<div lang="en">

```html
<h2
  class="Standard"
  dir="ltr"
  lang="fr-FR"
  style="margin-top: 0; margin-bottom: 0; text-align: center;"
  xml:lang="fr-FR"
>
  <span
    lang="en-CA"
    style="font-weight: bold; font-size: 16.0px;"
    xml:lang="en-CA"
  >
    TERMS AND CONDITIONS OF 1
  </span>
  <span
    lang="en-CA"
    style="font-weight: bold; font-size: 16.0px;"
    xml:lang="en-CA"
    >‐</span
  >
  <span
    lang="en-CA"
    style="font-weight: bold; font-size: 16.0px;"
    xml:lang="en-CA"
  >
    YEAR OR 30
  </span>
  <span
    lang="en-CA"
    style="font-weight: bold; font-size: 16.0px;"
    xml:lang="en-CA"
    >‐</span
  >
  <span
    lang="en-CA"
    style="font-weight: bold; font-size: 16.0px;"
    xml:lang="en-CA"
  >
    DAY ACCESS AND USE
  </span>
</h2>

<span
  lang="en-CA"
  style="font-weight: bold; font-size: 16.0px;"
  xml:lang="en-CA"
  >OF THE SERVICE BY SUBSCRIBERS</span
>
<span
  lang="en-CA"
  style="font-weight: bold; font-size: 16.0px;"
  xml:lang="en-CA"
  >SECTION 1</span
>
<span
  lang="en-CA"
  style="font-weight: bold; font-size: 16.0px;"
  xml:lang="en-CA"
>
  PURPOSE OF THE SERVICE
</span>
```

</div>


##### Après

<div lang="en">

```html
<h2>TERMS AND CONDITIONS OF 1 ‐ YEAR OR 30 ‐ DAY ACCESS AND USE</h2>

<span>OF THE SERVICE BY SUBSCRIBERS SECTION 1 PURPOSE OF THE SERVICE</span>
```

</div>

### Inspiration et pistes

1. Convertir de format document en ligne de commande De *Microsoft Word 2000* vers du <abbr>HTML</abbr>.
   Pour ce faire, j’ai suivi [la documentation d’**<abbr>UNOCONV</abbr>**][unoconv].

2. Utiliser open office en mode "headless" (en le transformant en service) et y
   envoyer les documents pour conversion. (Renoir de
   <time datetime="2024-10">2024</time>: l’article original sur _StackOverflow_
   a été supprimé par l’auteur. Probablement que cette méthode n’est plus
   valide.)

<!--#TODO-inline-edit-->

### Procédure

#### Version abstraite

1. Utiliser Open Office (ou peu importe) pour exporter le document en HTML

- Purifier via `HTMLTidy`
- Nettoyer les attributs inutiles avec la classe `htmLawed`

### Use cases

#### Document texte seulement

- Pas de formulaire, ni images, etc.
- Idéal pour un document légal, par exemple.

### Étapes concrètes:

1. A partir du fichier HTML généré **exemple**: Fichier appelé "`1.1.2.en.html`"

- Extraire le fichier `htmLawed.zip` ([voir site officiel][htmlawed-home])
qui contient la classe <abbr>PHP</abbr> que nous allons utiliser.

```bash
cd ~
mkdir htmlawed
mv htmLawed.zip htmlawed/
cd htmlawed
unzip htmLawed.zip
```

Passer au travers de la classe `htmLawed`

```php
require('htmLawed.php');
$config = array('safe'=>1,'elements'=>'a,em,strong,p,ul,li,ol,h1,h2,h3,h4,h5,div,tr,td,table','deny_attribute'=>'* -title -href');
$out = htmLawed(file_get_contents('in.html'), $config);
echo $out;
```

Rouler le script. Déplacer le fichier a utiliser, puis exécuter le script pour
en générer dans `out.html`

```bash
cp ~/1.1.2.en.tidy.html in.html
php cleanup.php > out.html
```

Rouler Tidy. **Normaliser le fichier "`1.1.2.en.html`", Nettoyer les balises,
minuscules, etc**

```bash
tidy \
  --drop-font-tags 1 \
  --logical-emphasis 1 \
  --clean 1 \
  --merge-spans 1 \
  --show-body-only 1 \
  --output-xhtml 1 \
  --word-2000 1 \
  --indent "auto" \
  --char-encoding "utf8" \
  --indent-spaces "2" \
  --wrap "90" \
  1.1.2.en.html > 1.1.2.en.tidy.html
```

tada!

### Précautions

Ordre d'exécution des tâches

**Remarque:**

J'ai essayé de passer Tidy avant htmLawed et j'ai réalisé que le nettoyage de
htmLawed est assez drastique et que Tidy rend le code plus propre. Sans oublier
que htmLawed peut générer des balises vides que Tidy va éliminer.

### Références

1. [Options Tidy][tidy-options]
2. htmLawed Documentation a PHP Html purification Class
   1. [original documentation][htmlawed-docs]
   2. [Example settings][htmlawed-settings]

[unoconv]: http://dag.wieers.com/home-made/unoconv/#download
[stackoverflow-openoffice]:
  http://stackoverflow.com/questions/3405687/openoffice-org-using-uno-to-convert-docx-to-html
[tidy-options]: http://tidy.sourceforge.net/docs/quickref.html
[htmlawed-docs]:
  http://www.bioinformatics.org/phplabware/internal_utilities/htmLawed/more.htm
[htmlawed-settings]:
  http://www.bioinformatics.org/phplabware/internal_utilities/htmLawed/example_settings.htm
[htmlawed-home]:
  http://www.bioinformatics.org/phplabware/internal_utilities/htmLawed/index.php
