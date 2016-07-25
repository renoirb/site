class: first-slide center adjust-title-overlay middle
background-image: url(images/MustangJoe-gears-1236578_1920.jpg)

# Delivery **engineering** <br/><small style="font-size:0.5em">and a workspace convention proposal</small>


.footnote[
<small>by [@renoirb](https://renoirboulanger.com/#is)</small>.
]


---
class: center middle

> “ We reject kings, presidents and voting. We believe in rough consensus and running code. ”

.footnote[
IETF "founding beliefs" is embodied in an [early quote about the IETF from David Clark](http://www.ietf.org/tao.html#rfc.section.2)
]


---
class: center middle

> “ Left unchecked, *technical debt* will ensure that<br/> the **only work** that gets done<br/> is *unplanned work*! ”

.footnote[
<small>[**Gene KIM**](http://itrevolution.com/), [The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win](http://itrevolution.com/books/phoenix-project-devops-book/)</small>
]


---
class: center middle

> “ If you're telling me that *all of our organization can’t do anything without him*, we’ve got a big problem! ”

.footnote[
<small>[**Gene KIM**](http://itrevolution.com/), [The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win](http://itrevolution.com/books/phoenix-project-devops-book/)</small>
]


---

# Set things up while talking

```terminal
# Open up VirtualBox, and a Terminal

cd workspace-proposal/

vagrant up

# Get back to the talk. We’ll talk about this later
```

.footnote[
A reminder to make the workspace setup while presenting
]










---
name: toc

# Table of Contents

.toc-items[
* [Table of Contents](#toc)
]









---
name: the-phoenix-project-tldr
class: adjust-title-overlay chapter
background-image: url(images/the-phoenix-project-novel.png)

# The Phoenix Project <br/><small>A TL;DR summary</small>

???

Types of work AND The Three ways are **heavily inspired** by the *Theory of constraints*

1. *Identify* system *constraints*
2. Decide how to *exploit* the system constraint
3. *Subordinate* everything else to 2
4. *Elevate* system constraints
5. If a constraint breaks at 4, get back to 1. <br/>*But do not allow inertia to cause a system's constraint*

<small>[**Eliyahu M. Goldratt**](http://www.goldratt.com/), [The Goal](https://www.toc-goldratt.com/en/product/The-Goal-A-Process-of-Ongoing-Improvement)</small>


---

# Types of work

.footnote[
<small>[**Gene KIM**](http://itrevolution.com/), [The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win](http://itrevolution.com/books/phoenix-project-devops-book/)</small>
]

1. **Business** *projects*

--

2. **Internal** *projects* <br/><small>Improve our infrastructure</small>

--

3. Operational *change* <br/><small>Deploy-day, hotfix, server reorganization</small>

--

4. *Unplanned work* <br/><small>Outage! Deadline</small>


---
class: middle

# Make *what matters* a **System**!

???

* There SHOULD be only one way: Forward
* Small batch sizes (number of features per deploy)
* Bottlenecks
  * What is brittle or a risk to resilience
* Analysis before automating
  * Machines
  * Men
  * Methods
  * Measures


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

# The three ways

.footnote[
<small>[**Gene KIM**](http://itrevolution.com/), [The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win](http://itrevolution.com/books/phoenix-project-devops-book/)</small>
]

1. Everything as a *system* <br/><small>Make things easier for everybody</small>

???

System:
* Performance of the whole. Not only your silo.
* Make things visible
* Leverage tools to lower defects going downstream

--

2. Amplify *feedback loops* <br/><small>Leverage systems to release work fast</small>

???

Feedback loops:
* Embed knowledge where needed
* Set in place testing run as part of feedback
* Involve client

--

3. Culture of *Continual experimentation* <br/><small>Take risks & Learn from failures</small>

???

Experimentation:
* Allocate time to reduce technical debt


---
class: center middle

> *[Running code being developed and deploying it]*<br/> “ Practicing five minutes daily is better than practicing once a week for three hours. ”

.footnote[
<small>[**Gene KIM**](http://itrevolution.com/), [The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win](http://itrevolution.com/books/phoenix-project-devops-book/)</small>
]










---
name: technical-debt
class: center chapter middle

# Technical *debt*



---
class: middle

## *Web* kicked in daily work at design agencies, *scaling is an afterthought*

.footnote[
<small>Not a quote, but rather a personal observation.</small>
]

???

- Web isn't print
- Focus on visuals more than features
- Expects quick and simple but IT isn’t


---
class: middle

## Agency *isn’t* like a <br/>*one-product* shop

???

- Projects in parallel
- Many One off projects
- Has to maintain past projects

Making features and performant sites requires engineering


---

# *You’ve got **constraints**!* <br/><small>Symptoms</small>

* Only a few can maintain the system

???

* Security, but also complexity

--

* Errors are found **only when deployed**

--

* It works on **my machine** <small>“it’s not that hard to setup”</small>

???

* There are tools for Desktop computers
* differs from what's in production.


---

# *Why* don’t we?

* But we *do* have automation!

???

* I don’t *have time* to set in place
* *Internal project not as important as business project*

--

* I’ve *always* worked like that

--

* We *can’t* deploy exactly the same as in development

???

* It’s *difficult* to automate well.
  * Dependencies *aren’t the same*
  * Lots of hardcoded details that *changes between projects*


---
class: middle

<blockquote class="twitter-tweet" lang="en"><p lang="und" dir="ltr"><img src="images/schrodigner-backup.png" alt="Schrodigner's Backup. The condition of any backup is unknown until a restore is attempted." style="max-width:100%;max-height:100%;" /><a href="https://twitter.com/hashtag/Sysadmin?src=hash">#Sysadmin</a> <a href="https://twitter.com/hashtag/Truth?src=hash">#Truth</a> <a href="https://twitter.com/hashtag/Backup?src=hash">#Backup</a> <a href="https://twitter.com/hashtag/Unix?src=hash">#Unix</a> <a href="https://twitter.com/hashtag/Linux?src=hash">#Linux</a> <a href="http://t.co/suCT9ME58V">pic.twitter.com/suCT9ME58V</a></p>&mdash; nixCraft (@nixcraft) <a href="https://twitter.com/nixcraft/status/613636528439345152">June 24, 2015</a></blockquote>


---
class: split-two

.left-column[## Murphy’s law
* Service we rely goes for maintenance

* Package dependency retired

* Major server outage, we need to rebuild everything!
]

--

.right-column[## Recovery plan!
* Mirror libraries our company depends on

* Set in place **systems** to **package what we deploy**

* Ability to run code **in the same environment** it'll run

* Make deployment easy, recovery will be like a normal day
]










---
name: introducing-the-workspace
class: center chapter middle

# Introducing the Workspace

???

* Something we can *start from*, so we can *iterate*
* Current form may not be how we'll use
 * Separation of concerns
 * Deployment topology (one server, multiple sites, etc.)


---

# Benefits

* *Won’t mess* your local machine

???

**Won’t mess**: Should even be untouched!

--

* *Levels the ground* for people using Windows, Mac, Linux

--

* *Save time setting up* a project and tools to start working

???

**Save time**:
* environment state: scratch everything or library version difference
* Testing tools, linters, ...
* Test in same environment (versions) as in production

--

* Save disk space. *No need to keep a VM* in case of need

???

**Save disk**: Because lowest common denominator, the OS.

--

* Improvements outside of code can be brought in right away

--

* Scripts out what’s then needed to run in production

???

**Script out**: e.g. schema migration



---
class: center middle

> “ We’re *putting in checklists everywhere*, especially when we do **handoffs** within the team. It’s really making a difference. *Error rates are way down*. ”

.footnote[
<small>[**Gene KIM**](http://itrevolution.com/), [The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win](http://itrevolution.com/books/phoenix-project-devops-book/)</small>
]

???

* Checklists or any notes in the context they'll be used in
* Lower mental workload
* Prevents rework


---

# Requirements

*Project repository* should

* *Describe* what it needs

--

* Encapsulate how we *manage protected secrets*

--

* Encapsulate *packaging* routines

--

* Install dependencies and Run code from within

???

* **Install dependencies**: We could even zip the folder, and re-open it in a few years and be able to Run

--

* *Should work* on *any* cloud provider

???

Whether or not the project to contain the Vagrant is up for debate.

* How do we want to deploy ideally?


---

# Requirements

*Configuration management* should

* Be as simple as possible

.footnote[
<small>**Ryan Lane**, [Moving away from Puppet: SaltStack or Ansible?](http://ryandlane.com/blog/2014/08/04/moving-away-from-puppet-saltstack-or-ansible/)</small>
]

???

* *As simple*: Syntax, not too heavy, easy to grasp for newbies,

--

* *No optimizations* that would make the code read in an *illogical order*

--

* Should be read in a *sequential order*

--

* *Split in parts*: **base** for what’s common and **service-specific** for each project, etc.

--

* Must work for *multiple deployment levels* (development, staging, etc)

--

* Should support managing *infrastructure dependencies*


---

# Assumptions

* [Oracle VirtualBox](https://www.virtualbox.org/), [Vagrant](https://www.vagrantup.com/) with a few plugins

???

Works on Windows, Linux and Macs

Requires a few Vagrant plugins.

--

* Fresh Ubuntu Long-Term Support release VM

???

No need to copy VM images around!

--

* Use *relative git* repository remotes references as *git@bitbucket.org*

???

Git supports non-changing format


---

# Rules

* *NO MANUAL* manipulations, only configuration

--

* *Make* dependency manager install files *where we want*

--

* Files that gets copied should ideally be copied around least possible

--

* Code should be checked-in source-control *ONLY once*

--

* Build artifacts should *NOT* be checked-in source-control



---

# Project root

```
.
+-- Makefile
+-- Vagrantfile
|
+-- lib/              <---- Backend code
|
+-- ops/              <---- Configuration management code
|
+-- .bowerrc          <--,
+-- .npmrc            <---- Dependency managers configuration
|
+-- node_modules/     <--,
+-- composer_modules/ <--,
+-- gem_modules/      <---- Dependencies
|
+-- Gemfile           <--,
+-- package.json      <--;
+-- composer.json     <--;
+-- bower.json        <---- Dependency managers manifests
|
+-- src/              <---- Project code
```


---

# Project’s code

```
.
+-- src/
    +-- .maintenance      <---- maintenance mode triggerer
    |
    +-- config.wordpress.php
    +-- config.gulp.json
    |
    +-- public/           <---- Public Document Root
        |
        +-- index.php     <--,
        +-- wp-config.php <---- Override WordPress
        |
        +-- wordpress/    <---- Untouched WordPress code
        |
        +-- wp-content/   <---- Where we install our stuff
            +-- plugins/
            +-- themes/

```


---

# Configuration management

```
.
+-- ops/
    +-- orchestration/
    |
    +-- provision/
    |
    +-- configuration/
```

---

# Configuration management

```
.
+-- ops/
    +-- orchestration/
    |   +-- (TBD!)
    |
    +-- provision/
    |
    +-- configuration/
```

???

Load order

    cat /etc/salt/minion.d/roots.conf
    ll /vagrant/ops/orchestration/
    cat /vagrant/ops/orchestration/vagrant/database/wordpress/anonymize.sls

We can use like this

    salt-call state.sls database.wordpress.anonymize
    salt-call state.sls wip.sysdig

---

# Configuration management

```
.
+-- ops/
    +-- orchestration/
    |
    +-- provision/
    |   |
    |   +-- cloud/
    |   |   +-- bootstrap.sh  <--,
    |   |                        |
    |   +-- vagrant/             |
    |   |   +-- bootstrap.sh  <--+--------------+
    |   |                                       |
    |   +-- init.sh           <----- (extends) -+
    |   +-- minion.conf
    |
    +-- configuration/
```

???

Provision sample

    more ops/provision/vagrant/bootstrap.sh
    more ops/provision/cloud/bootstrap.sh
    more ops/provision/init.sh


---

# Configuration management

```
.
+-- ops/
    +-- orchestration/
    |
    +-- provision/
    |
    +-- configuration/
        +-- formulas/
        |   +-- basesystem/
        |   +-- vagrant/
        |
        +-- pillars/     <---- More on this later
        |
        +-- states/
            +-- top.sls
            +-- local/
            +-- (TBD!)
```


---

# Configuration management

```
.
+-- ops/
    +-- orchestration/
    |
    +-- provision/
    |
    +-- configuration/
        +-- formulas/
        |   +-- basesystem/
        |   |   +-- debug.sls
        |   |
        |   +-- vagrant/
        |
        +-- pillars/
        |
        +-- states/       | # YAML!
            +-- top.sls  <| base:
            +-- local/    |   '*':
            +-- (TBD!)    |     - basesystem
                          |     - local
                          |   'level:vagrant':
                          |     - match: grain
                          |     - basesystem.debug
                          |     - vagrant
```


---
class: middle center

# Thank you!


**Questions?**



---
class: middle

# EOF










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

.figure[
![](//lorempixel.com/g/250/100/cats/)
]


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

.figure[
![](//lorempixel.com/g/250/100/cats/)
]

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

.figure[
![](//lorempixel.com/g/250/100/cats/)
]


  [devops-quotes]: http://www.grahamlea.com/2013/02/what-is-devops-bullet-points-quotes-tweets/
