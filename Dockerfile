FROM mhart/alpine-node
# node
# node:alpine

WORKDIR /code/node-git-rest-api

# copied from https://github.com/shadiakiki1986/jenkins2docker/blob/master/slave_core.sh
RUN apk --update add openssh git > /dev/null && \
    rm -rf /var/cache/apk/*

COPY . .
RUN npm install
RUN mkdir -p /tmp/git/1161017-23323-pfc5zt

ENTRYPOINT node index.js
