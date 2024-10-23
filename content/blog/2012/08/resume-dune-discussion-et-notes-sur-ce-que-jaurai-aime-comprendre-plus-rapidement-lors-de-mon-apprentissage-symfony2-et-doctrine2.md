---
locale: fr-CA
title: >-
  Résumé d'une discussion et notes sur ce que j'aurai aimé comprendre plus
  rapidement lors de mon apprentissage Symfony2 et Doctrine2
canonical: >-
  https://renoirboulanger.com/blog/2012/08/resume-dune-discussion-et-notes-sur-ce-que-jaurai-aime-comprendre-plus-rapidement-lors-de-mon-apprentissage-symfony2-et-doctrine2/
status: publish
revising: true
createdAt: '2012-08-10'
updatedAt: '2013-03-27'
tags: []
categories: []
excerpt: >-
  Ce billet est une compilation de courriels échangés avec un collaborateur de
  la communauté des logiciels libres. Le thème de l'échange était à propos des
  concepts architecturaux qu'utilise Symfony2. Du moins, ce que j'ai appris, et
  . J'ai peut être tord sur certains points, mais a tout le moins, ces indices
  peuvent peut-être vous aider autant que mon correspondant.
---

Durant les derniers mois j'ai lu et relu la documentation de <a href="http://symfony.com/">Symfony2</a> et voici quelques éléments qui ont attiré mon attention et que j'aimerai partager avec vous.

L'un des concepts architecturaux clé faisant que Symfony2 se démarque des autres frameworks PHP est l'usage des concepts de la <a title="Programmation Orienté Aspect sur Wikipedia" href="http://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_aspect">programmation orienté aspect (AOP)</a>.

L'idée directrice de la programmation orienté aspect est d'éviter au maximum dépendances fonctionnelles communes (appelé <strong>dépendances transversales</strong>). Ces fonctionnalités fréquentes comme l'accès a la base de donnée, par exemple. La manière de séparer ces besoins est de notamment utiliser les commentaires des classes et d'y ajouter des fonctionnalités avant ou apreès les méthodes. C'est ce qu'on appelle des <em>Intercepteurs </em>et des <em>Pointcut</em>.

Ce type d'architecture demande une capacité de compilation de code supporté par le langage de programmation.

Nous savons que PHP n'est <em>pas</em> un langage compilé. Il y a des alternatives, mais ce n'est pas comme ce qui peut être fait avec <a href="http://fr.wikipedia.org/wiki/AspectJ">AspectJ</a> et Spring AOP, pour Java, et ce qu'il existe pour le C#.

Pourtant, depuis peu, avec l'avènement de l'implémentation des normes <a title="PSR-0 étant le premier niveau de trois, voir la liste des fonctionnalités à supporter" href="https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md">PSR-<em>x</em></a>, et des librairies de <a href="https://github.com/schmittjoh/cg-library">génération de code</a>. <a title="AOP Meta programming and codegeneration with PHP" href="http://www.slideshare.net/SergeSmertin/aop-metaprogramming-and-codegeneration-with-php">C'est maintenant possible</a>.

<a title="Article anglais décrivant les changements a venir dans le domaine des CMS avec le partage du code" href="http://bergie.iki.fi/blog/my_secret_agenda_for_php_content_management_systems/">Beaucoup de changements</a> sont a venir dans le monde des CMS et pour beaucoup d'autres projets.

Le mouvement est tellement fort que les communautés de d'autres projets libres s'impliquent: Ce projet s'appelle le "<a href="http://www.php-fig.org/">PHP Framework Interoperability group</a>" Il y a notamment le projet Magento, Drupal, Joomla!, <a href="http://midgard-project.org/phpcr/">Midgard</a>, <a title="Article écrit sur le blogue de Infoglobe parlant de T3CON discutant des progrès de Typo3" href="http://blogue.infoglobe.ca/2011/06/10/t3con-%EF%BB%BFjour-1-fluent-development-with-flow3/">Typo3 (Flow3)</a>, <a href="https://github.com/php-fig/fig-standards">voir la liste des groupes et du draft sur github</a>.

Donc, ces choses que j'ai beaucoup apprécié lors de ma découverte de Symfony2.
<h3>Conversion des entités et éviter requêtes à la base de donnée</h3>
<a href="http://symfony.com/doc/current/book/http_fundamentals.html">Comme la documentation le décrit</a>, le travail d'une méthode de contrôleur est de convertir la requête qui lui a été demandée d'exécuter (via le routing). L'utilisation des patterns AOP vient permettre de maigrir énormément.

Au lieu d'utiliser manuellement les Exception, le render, et les appels à Doctrine faits "à bras" dans le corps de la méthode comme suit.
<pre lang="php">namespace PSS\Bundle\BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Blog Controller
 **/
class BlogController extends Controller
{

    /**
     * @Route("/{slug}")
     */
    public function showAction($slug)
    {
        $entityManager = $this-&gt;get('doctrine.orm.entity_manager');
        try {
            $post = $entityManager
                -&gt;getRepository('PSS\Bundle\BlogBundle\Entity\Post')
                -&gt;findPublishedPostOrPage($slug);
        } catch (\Doctrine\ORM\NoResultException $exception) {
            throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException('Page Not Found');

        }

        return $this-&gt;render('PSSBlogBundle:Blog:show.html.twig', array('post' =&gt; $post));
    }
}</pre>
On peut sauver des lignes de code et utiliser les <strong>@annotation</strong> pour définir le Template qui sera utilisé, va aller chercher l'entrée dans la base de donnée pour nous (via le <a href="http://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html">@ParamConverter</a>), retourner une Exception si elle existe pas.

Vous pouvez voir plus en détails l'implémentation dans Dans mon exemple pris de mon <a href="https://github.com/renoirb/PSSBlogBundle/tree/develop"> <em>fork</em> du bundle PSSBlogBundle</a> qui sert a lire la base de donnée WordPress de mon site, et utiliser Symfony2/Doctrine2/Twig pour le devant de mon site (<strong>beta</strong><tt>.renoirboulannger.com</tt>, à l'inverse de la version hébergée sur le domaine non "beta").
<pre lang="php">&lt; ?php
namespace PSS\Bundle\BlogBundle\Controller;

// Symfony/Doctrine internal
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

// Entities
use PSS\Bundle\BlogBundle\Entity\Post;
use PSS\Bundle\BlogBundle\Entity\Term;

/**
 * Base Blog Controller
 *
 * @Route("/blog")
 */
class BlogController extends Controller
{
    /**
     * @Route("/{year}/{month}/{slug}")
     * @Template()
     */
    public function showAction(Post $post, Request $request)
    {
        return array(
            'post' =&gt; $post-&gt;onlyIfPublished(),
            'comment_form' =&gt; $this-&gt;comment($request,$post)
        );
    }
}</pre>
Ok, toutes les lignes de codes sauvés sont devenues des lignes <em>use</em> au haut de la page. Mais tout ceci a le mérite d'être très explicite. La magie se passe principalement dans l'annotation <em>@Route</em> qui fait la relation avec l'entité <em>Post</em> et va ajuster la requête de recherche dans le <em>PostRepository</em> et limiter sa recherche au colones <tt>slug</tt>, <tt>year</tt>, et <tt>month</tt>. Ces colones peuvent ne pas exister mais simplement être des méthodes. C'est la magie de Doctrine2 et totalement hors du sujet de ce billet.
<h3>Autres annotations d'intérêt</h3>
<h4><a href="http://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/routing.html">@Route</a></h4>
Cette annotation permet de contrôler les requis que l'adresse doit remplir pour être utilisée. Elle nous permet de spécifier quelle propriétée est liée a l'entitée déclarée dans la déclaration de la méthode du contrôleur.
<h4><a href="http://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/view.html">@Template</a></h4>
Le <em>@Template</em> annotation sur un controleur sert a remplacer les appels a <em>render</em> avec nom de template et va suivre la convention du <a href="http://symfony.com/doc/current/book/routing.html#controller-string-syntax">nom logique</a>, exemple:  <strong>AcmeBlogBundle</strong>:<em>Blog</em>:<strong>show</strong> qui va aller chercher le fichier de template dans le dossier <tt>Acme/BlogBundle/Resources/Blog/show.html.twig</tt>.

Il est bien de remarquer ici que par défaut l'engin de templating est Twig et la sortie est HTML. Mais tout peut être configuré. Puis j'aimerai ajouter l'emphase que le système peut permettre de fournir les requis de sortie sous format JSON et nous n'aurions qu'a créer un fichier au même nom mais insérer <tt>json</tt> à la place de <tt>html</tt>, exemple:

Donc, plus tard dans le projet, il sera faccile d'ajuster l'attribut "<tt>_format</tt>" puis dire si header is xmlhttprequest accept`<tt>applcation/json</tt>, utilise le template au meme nom mais ...json.twig  et avoir les memes controlleurs repondre html ET JSON :)  la methode su controlleur qui a un <em>@Template</em> s'attend a cwe que tu donne un array cle valeur que tu peut utiliser dans ton template.
<h4>@Observe</h4>
Celle ci est ma découverte de la semaine avec <strong>@Inject</strong>. Au lieu de déclarer dans un fichier <em>services.yml</em>, il est possible de déclarer directement dans la méthode de la classe l'événement qu'elle est addressée à traiter.

On peut voir <a href="http://stackoverflow.com/questions/10694315/symfony2-where-to-set-a-user-defined-time-zone">dans cette réponse sur StackOverflow</a> comment on peut ajuster le <em>TimeZone</em> sans avoir a modifier d'autres fichiers dans le projet.
<h3>Mes autres références</h3>
Mon fil delicious <a href="http://delicious.com/inexisdotnet/symfony2+very-helpful">delicious avec tags: <em>symfony2</em> et <em>very-helpful</em></a> vous donnera ma sélection de références que j'ai apprécié.
<h3>Pour comprendre plus</h3>
Quelques autres références et billets qui m'ont inspiré et aidé a comprendre.
<ul>
	<li><a href="http://www.slideshare.net/SergeSmertin/aop-metaprogramming-and-codegeneration-with-php">Présentations slideshare: AOP, Metaprogramming, Codegeneration or the way of throwing elephants to a blackbox</a> by Serge Smertin</li>
	<li><a href="http://jmsyst.com/bundles/JMSDiExtraBundle/master/annotations">Annotations de classes/méthodes du bundle JMSDiExtraBundle</a> by Johanes Smith</li>
	<li><a href="http://www.slideshare.net/fabpot/dependency-injection-in-php-5354">Dependency Injection with PHP 5.3 with a bit of PHP 5.4</a> by Fabien Potencier</li>
</ul>
Des billets inspirants:
<ul>
	<li><a href="http://www.startuplessonslearned.com/2009/01/sharding-for-startups.html">Sharding for startups</a> by Eric Ries</li>
	<li><a href="http://www.zyxist.com/en/archives/103">Symfony2 Event dispatcher</a> by Thomasz Jedrzejewski</li>
</ul>
Outils à considérer
<ul>
	<li><a href="http://autowiring-bundle.info/">Autowriting bundle</a></li>
	<li><a href="https://github.com/doctrine/oxm">Doctrine Object to Xml Mapping (OXM) pour transférer des entitées converties en XML par de simples annotations</a></li>
</ul>
