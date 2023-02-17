FROM node:18.13-alpine

RUN mkdir /app
WORKDIR /app


COPY package*.json ./

RUN npm i

COPY assets ./assets
COPY components ./components
COPY composables ./composables
COPY lang ./lang
COPY layouts ./layouts
COPY pages ./pages
COPY public ./public
COPY .npmrc ./
COPY app.vue ./
COPY nuxt.config.ts ./
COPY tailwind.config.js ./
COPY tsconfig.json ./

CMD npm run dev
