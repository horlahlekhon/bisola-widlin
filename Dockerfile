FROM node:16

WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
RUN rm  yarn.lock
EXPOSE 3000
RUN yarn build
CMD ["node", ".output/server/index.mjs"]
