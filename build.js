var  metalsmith = require('metalsmith')
    ,babelify = require('babelify')
    ,handlebars = require('handlebars')
    ,drafts = require('metalsmith-drafts')
    ,minifier = require('metalsmith-html-minifier')
    ,markdown = require('metalsmith-markdown-remarkable')
    ,slug = require('metalsmith-slug')
    ,templates = require('metalsmith-templates')
    ,changed = require('metalsmith-changed')
    ,browserify = require('./lib/metalsmith/browserify.js')
    ,prism = require('metalsmith-prism')
    ,assets = require('metalsmith-assets')
    ,permalinks = require('metalsmith-permalinks')
    ,collections = require('metalsmith-collections')
    ,tags = require('metalsmith-tags')
    ,archive = require('metalsmith-archive')
    ,pkg = require('./package.json');

metalsmith(__dirname)
  .clean(false)
  .use(changed({
    extnames: {
        '.md': '.html' // build if src/file.md is newer than build/file.html
    }
  }))
  .metadata({
    site: {
      title: pkg.name,
      url: 'http://renoirb.com',
      description: pkg.description
    }
  })
  .source('./contents')
  .destination('./build')
  .use(drafts())
  .use(markdown('full', {
    breaks: true,
    typographer: true,
    html: true
  }))
  //.use(prism())
  .use(templates({
    engine: "handlebars"
  }))
  //.use(minifier())
  .use(collections({
    posts: {
      pattern: 'blog/*.md',
      sortyBy: 'date',
      reverse: true
    }
  }))
  .use(permalinks({
    pattern: 'blog/:date/:title',
    date: 'YYYY/MM',
    relative: true
  }))
  .use(tags({
    layout: '/layouts/tagindex.hbs'
  }))
  .use(archive({
    collections: ['posts']
  }))
  .use(browserify({
    files: ["../lib/loader.js"],
    dest: "js/main.js",
    transforms: ["babelify"]
  }))
  .use(assets({
    source: "./static",
    destination: "./"
  }))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site build complete!');
    }
  });
