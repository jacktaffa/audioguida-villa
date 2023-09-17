#!/bin/bash

NODE_ENV=production
rm -r out out.zip
yarn build && mkdir out
cp -r ./.next/standalone/* ./.next/standalone/.next ./public ./out
cp -r ./.next/static ./out/.next/static
mv ./out/server.js ./out/app.js
zip -r out.zip ./out