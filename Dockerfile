FROM mhart/alpine-node
# node
# node:alpine
WORKDIR /code/node-git-rest-api
COPY . .
RUN npm install
ENTRYPOINT node index.js
