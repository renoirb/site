var  metalsmith = require('metalsmith')
    ,serve = require('metalsmith-serve');

metalsmith(__dirname)
  .use(serve())
  .build();
