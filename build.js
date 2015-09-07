var  fs         = require('fs')
    ,metalsmith = require('metalsmith')
    ,babelify   = require('babelify')
    ,Handlebars = require('handlebars')
    ,drafts     = require('metalsmith-drafts')
    ,minifier   = require('metalsmith-html-minifier')
    ,markdown   = require('metalsmith-markdown-remarkable')
    ,layouts    = require('metalsmith-layouts')
    ,changed    = require('metalsmith-changed')
    ,browserify = require('./lib/metalsmith/browserify.js')
    ,prism      = require('metalsmith-prism')
    ,pkg        = require('./package.json');

metalsmith(__dirname)
  .metadata({
    site: {
      title: pkg.name,
      url: 'http://renoirb.com',
      description: pkg.description
    }
  })
  .source('./contents')
  .destination('./build')
  .clean(false)
  .use(changed())
  .use(drafts())
  .use(markdown('full', {
    breaks: true,
    typographer: true,
    html: true
  }))
  .use(prism())
  .use(layouts({
    engine: "handlebars",
    default: "base.html",
    pattern: "**/*.md"
  }))
  .use(browserify({
    files: ["../lib/loader.js"],
    dest: "js/main.js",
    transforms: ["babelify"]
  }))
  //.use(minifier())
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site build complete!');
    }
  });
