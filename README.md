Dockerfile for [node-git-rest-api](https://github.com/korya/node-git-rest-api)

Published on [Docker hub](https://hub.docker.com/r/shadiakiki1986/docker-node-git-rest-api/builds/)

To use published docker: `docker run -p 8081:8081 -it shadiakiki1986/docker-node-git-rest-api`

To build locally: `docker build -t shadiakiki1986/docker-node-git-rest-api .`

To use local build: `docker run -p 8081:8081 -it shadiakiki1986/docker-node-git-rest-api`

An example php client is https://github.com/shadiakiki1986/git-rest-api-client-php

Can pass environment variables supported by [node-git-rest-api](https://github.com/shadiakiki1986/node-git-rest-api#environment-variables),
e.g. `docker run -p 8081:8081 --env LOGLEVEL=info -it shadiakiki1986/docker-node-git-rest-api`

# TODO
This is pending https://github.com/korya/node-git-rest-api/issues/1
ATM, I just apply the patch
```
git-rest-api/rest-api.js line 78
var workDir = '/tmp/git/1161017-23323-pfc5zt'
```
and build locally

When the issue is resolved, I can modify the workdir path in index.js and the one in the dockerfile

# trigger automatic build
Upon updates to `node-git-rest-api`,
just update the version in package.json to the latest `node-git-rest-api` version, commit, and push.
This will trigger an automatic build on docker hub.
