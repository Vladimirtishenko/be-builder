#!/bin/bash

default='microservices'
path=$([ -z "$1" ] && echo "$default" || echo "$1")

cd $path

for f in *; do
    if [ -d "$f" ]; then
        if [ -f "$f/fixtures/index.js" ]; then
            node "$f/fixtures/index.js"
        fi
    fi
done
