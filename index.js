// apply patch
// git-rest-api/rest-api.js line 78
// var workDir = '/tmp/git/1161017-23323-pfc5zt'

var app = require('express')(),
    git = require('git-rest-api');

var port = 8081;
git.init(app, { installMiddleware: true}).then(function () {
  app.listen(port);
  console.log('Listening on', port);
});


