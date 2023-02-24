FROM node:18.13-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm i

COPY tsconfig.json ./
COPY nest-cli.json ./
COPY prisma ./prisma
COPY src ./src
COPY ./.env .env

CMD npm start
