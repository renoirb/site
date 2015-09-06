var  metalsmith = require('metalsmith')
    ,babelify = require('babelify')
    ,handlebars = require('handlebars')
    ,drafts = require('metalsmith-drafts')
    ,minifier = require('metalsmith-html-minifier')
    ,permalinks = require('metalsmith-permalinks')
    ,markdown = require('metalsmith-markdown-remarkable')
    ,slug = require('metalsmith-slug')
    ,templates = require('metalsmith-templates')
    ,changed = require('metalsmith-changed')
    ,browserify = require('./lib/metalsmith/browserify.js')
    ,pkg = require('./package.json');

var siteBuild = metalsmith(__dirname)
  .clean(false)
  .use(changed())
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
  .use(permalinks({
    pattern: ":date/:title",
    date: "YYYY/MM"
  }))
  .use(browserify({
    files: ["../lib/loader.js"],
    dest: "js/main.js",
    transforms: ["babelify"]
  }))
  .use(markdown('full', {
    breaks: true,
    typographer: true,
    html: true
  }))
  .use(templates({
    engine: "handlebars"
  }))
  .use(minifier())
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site build complete!');
    }
  });
