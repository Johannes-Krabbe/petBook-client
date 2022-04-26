FROM node:alpine AS builder

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:alpine AS runner

ENV NODE_ENV production

COPY --from=builder /usr/src/app/ .

EXPOSE 3000
CMD [ "yarn", "start" ]