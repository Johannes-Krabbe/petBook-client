FROM node:alpine AS builder

RUN mkdir -p /usr/src/app
ENV PORT 3000
ENV NODE_ENV CI

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:alpine AS runner

COPY --from=builder /usr/src/app/ .

EXPOSE 3000
CMD [ "yarn", "start" ]