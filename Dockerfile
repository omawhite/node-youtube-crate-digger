# FROM node:18-bookworm as base
FROM nikolaik/python-nodejs:python3.11-nodejs18 as base
# install youtube-dl
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl && chmod a+rx /usr/local/bin/youtube-dl
#install ffmpeg
RUN apt update && apt install -y ffmpeg

FROM node:18-bookworm as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM base as runner

WORKDIR /app

COPY --from=builder /usr/src/app/build/index.js index.js

ENTRYPOINT [ "node", "index.js" ]