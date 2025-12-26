#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
./node_modules/.bin/tailwindcss -i ./tailwind/input.css -o ./tailwind/output.css --watch
