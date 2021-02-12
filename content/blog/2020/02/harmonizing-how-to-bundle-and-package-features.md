---
locale: en-CA
title: Harmonizing how to bundle and package JavaScript/ECMAScript features
description:
  Research summary on experiments made in 2018 and 2019 about related to
  ECMASCript/JavaScript packaging, publishing and bundling
date: &createdAt '2020-02-04T20:55:06-04:00'
createdAt: *createdAt
preamble:
  disable: true
  text: ' '
categories:
  - Research Summary
tags:
  - front-end
  - architecture
---

Part of my time has been spent on finding a flexible way to organize code and
make it reusable between projects.

I enjoy writing in TypeScript, but not all projects are always the same. Some
projects are written as a component library, sometimes they aren’t written in
TypeScript. We wanted a way to tell an entry-point, and flexibility to re-use
the same configuration even when we have many build output targets.

I’ve found a way to harmonize how to bundle JavaScript projects following
closely NPM’s packaging conventions. To do so, I’ve found and successfully been
able to manage many small projects, each with their respective way of testing
and bundling. All of this, without imposing choices when using them.

The objective was that we can write modern ECMAScript, and leverage polyfills
that Babel,Rollup and core-js can give us.

For example, a library can be written in TypeScript, but is known to be destined
to be used in an Express middleware in ECMAScript 5 on a legacy Node.js service
at v8.0.0 LTS. We can have a build target for this. We could equally have a
build target to be transpiled to run on Node.js v12.0.0 too.

In this example below you’ll see that I use the same "convention enforcement"
tool would be used between many small modules.

I called that tool "`@renoirb/conventions-use-bili`", it’s a micro package
[inside a monorepo][1] (using Microsoft [Rush.js][rushjsio], [link to monorepo’s
`rush.json`][experiments-201908-rush-json]), and [published on NPM][2].

[1]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/e1e5a43e/conventions/use-bili/package.json
[2]: https://www.npmjs.com/package/@renoirb/conventions-use-bili

Notice that "`@renoirb/...`" packages shown here are public copies (my employer
allowed me sharing publicly) of our internal packages namespaced as
"`@frontend-bindings/...`" that I’ve been working on in the last months. The
original package name is _@frontend-bindings/conventions-use-bili_ and is
effectively the same as shown throught this document. In the following [Video is
on YouTube _Publishing and importing vue-app-layout into a Nuxt.js
project_][vue-app-layout] shown in "Data-Driven UI" document, we can also see
_conventions-use-bili_ in use.

[vue-app-layout]: https://youtu.be/NHJiCwLUakE 'Video on YouTube'

(Aside: I’m showing code maintained on two distinct projects, one hosted on
GitLab, and a library maintained on GitHub, published on NPM.)

## Introduction

Before this library, I was regularly copy-pasting Babel+Rollup.js configuration
code around resulting about 50 lines and more of code that would sometimes be
the same, or with just slight modifications.  Making it hard to peers to see the
difference. Copy-Pasting 50 lines for a project or two is OK, but when we have
more than 30 packages, it becomes wild, quickly. Even more so when we know we’ll
have many more small packages coming up.

It’s been useful to me on many occasions. I would have to copy-paste many lines
and tweaks around, until I created that module.

I’d like to make this example an illustration of code publicly visible of
infrastructure package and a few example modules leveraging that infrastructure
package.

Design:

1. Simplest usage surface (i.e. one file, a handful of lines)
2. Support modern ESM module in `src/*`
3. Support loading tests system
4. Support using TypeScript, but not mandatory
5. Support multiple build targets

## Scenario

[egoist/bili][3] is a tool written by a popular Vue.js contributor @egoist which
helps setting Rollup.js, and Babel, and TypeScript together. It helps with
managing configuration but had a few options missing (notice that there are
other packages that helps with missing features mentioned here, but won’t be
covered here).

The module mostly piggy-back on `BROWSERSLIST`, [whether or not to add
node_modules dependencies as part of the build output
(`hasBiliBundleNodeModulesOption`)][4], and with core-js.

[3]: https://github.com/egoist/bili
[4]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/e1e5a43e/conventions/use-bili/src/plugins.ts#L74

_@renoirb/conventions-use-bili_ is used in a project with simplest usage surface
(e.g. [`jsonschema-aware-loader`][5], [`date-epoch`][5a], [`validatable`][5b] in
their respective `bili.config.js`’ [_conventions-use-bili_’s
config][use-bili-src-input]). Then the rest is handled by [build CLI
arguments][6]. _convention-use-bili_ is a package that is published through NPM
([public copy][bili-npmjs]), and is [part of many other
packaging][conventions-use-npmjs-search] (see _conventions-use-bili_’s
[package.json][use-bili-package]) specialized packages. See the
_conventions-use-bili_’s top-level [Rush.js][rushjsio] [`rush.json` monorepo
configuration][experiments-201908-rush-json].

[5]:
  https://gitlab.com/renoirb/renoirb-particles/blob/master/libraries/jsonschema-aware-loader/bili.config.ts#L4
[5a]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/e1e5a43e/packages/date-epoch/bili.config.ts#L4
[5b]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/e1e5a43e/packages/validatable/bili.config.ts#L4
[6]:
  https://gitlab.com/renoirb/renoirb-particles/blob/master/libraries/jsonschema-aware-loader/package.json#L34
[use-bili-src-input]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/e1e5a43e/conventions/use-bili/src/main.ts#L13
[use-bili-package]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/e1e5a43e/conventions/use-bili/package.json#L46-L50
[bili-npmjs]: https://www.npmjs.com/package/@renoirb/conventions-use-bili
[conventions-use-npmjs-search]:
  https://www.npmjs.com/search?q=renoirb%2Fconventions-use
[experiments-201908-rush-json]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/e1e5a43e/rush.json#L357-L386
[rushjsio]: https://rushjs.io/ 'Rush.js a scalable monorepo manager for the web'
[secondary-monorepo-gitlab]:
  https://gitlab.com/renoirb/renoirb-particles/-/tree/master/

Breaking into smaller packages doesn’t make us forced to put ALL projects
together, for example _JSONSchema Aware Loader_ is maintained [in a separate
monorepo hosted on GitLab][secondary-monorepo-gitlab]. So we have full
flexibility in where we maintain and in what language packages are written in.

Notice that `@renoirb/validatable` [validatable][5b] isn’t maintained in
TypeScript, yet it is managed using the same tooling.

In the case of _JSONSchema Aware Loader_, a utility I’m using to enforce JSON
schema validation BEFORE importing, we won’t need many build variants.

But what if we do need many variants.

Let’s say we have a bit of code that uses for-of ECMAScript 2015 iteration
([for-of-example module][7]), and we want the same code, with same tests, to be
deployed on both modern and legacy.

[7]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/2c040828/polyfill/for-of-example/src/index.ts#L7

We’d need two build outputs [for-of-example module as ESM module][8] (notice the
code is used as-is), [for-of-example module to work on Internet Explorer 6 up to
9][9].

Notice in the case of Internet Explorer’s version, [we are
inlining][core-js-src-iterator-inlined] automatically from [publicly maintained
list of "polyfills" (see `core-js` source)][core-js-src-iterator]. All of which
is possible because [one of the build target _is specifically targetted for
Internet Explorer_][for-of-example-package-json]

```bash
use-cross-env BROWSERSLIST='ie 6-9' \
    use-bili \
       --target browser \
       --format iife \
       --module-name ForOfExample \
       --file-name index.browser.ie6to9.js \
       --bundle-node-modules
```

With all of this in place, we can write modern code with all testing and
maintenance tooling and have multiple bundles of the same tested code to run in
different run-time conditions.

![Rush running build script for Internet Explorer build target](./rushx-build-for-of-example.png)

[8]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/2c040828/polyfill/for-of-example/dist/index.esm.js#L39
  'Notice the code is copied as-is'
[9]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/2c040828/polyfill/for-of-example/dist/index.browser.ie6to9.js
[for-of-example-package-json]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/2c040828/polyfill/for-of-example/package.json#L25-L32
[publishing-and-importing-vue-app-layout]: https://youtu.be/NHJiCwLUakE?t=180
[core-js-src-iterator]:
  https://github.com/zloirock/core-js/blob/6929d43/packages/core-js/internals/iterators-core.js#L15
[core-js-src-iterator-inlined]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/2c04082/polyfill/for-of-example/dist/index.browser.ie6to9.js#L475
