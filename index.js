var app = require('express')(),
    git = require('git-rest-api');

var port = 8081;
git.init(
  app,
  {
    installMiddleware: true,
    workDir: '/tmp/git/1161017-23323-pfc5zt' // dummy ATM, coupled with corresponding path in Dockerfile
  }
).then(function () {
  app.listen(port);
  console.log('Listening on', port);
});


