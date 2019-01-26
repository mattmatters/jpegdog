FROM node:11.8-alpine

COPY package.json yarn.lock ./

RUN apk add yarn && \
        yarn install && \
        apk del yarn

COPY ./ ./

CMD node ./index.js
