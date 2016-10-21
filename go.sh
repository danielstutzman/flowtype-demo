#!/bin/bash -ex

node_modules/.bin/flow

node_modules/.bin/browserify -e index.js -t unflowify >browserified.js
node browserified.js
