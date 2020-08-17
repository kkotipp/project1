FROM node:alpine
WORKDIR /usr/src/app
ADD src/* ./
RUN apk add --update python make g++ && rm -rf /var/cache/apk/*
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]
