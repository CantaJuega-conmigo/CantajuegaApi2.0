FROM node:16-bullseye

WORKDIR /Cantajuegaserver

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm","start" ]