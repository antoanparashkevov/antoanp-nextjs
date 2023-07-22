FROM node:16

WORKDIR /usr/src/app

EXPOSE 3000
COPY . .
RUN npm install
CMD ["npm","run","dev"]