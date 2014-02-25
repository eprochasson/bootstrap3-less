#!/bin/bash

# Make sure we're at right place
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

git clone https://github.com/twbs/bootstrap.git source

# LESS files
echo "Processing LESS files..."
rm lib/less/*.lessimport
cp source/less/*.less lib/less/
cd lib/less/
for file in *.less; do
    mv "$file" "`basename $file .less`.lessimport"
done
cd "$SCRIPT_DIR"

# JS files
echo "Processing JS files..."
rm lib/js/*.js
cp source/js/*.js lib/js/

# Font files
echo "Processing font files..."
rm -rf lib/fonts/*
cp source/fonts/* lib/fonts/


echo "Cleaning source..."
rm -rf source


echo "Done! Now update README.md, package.js"