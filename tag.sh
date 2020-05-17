#!/bin/bash

set -e

NEW_VERSION=$1
VERSION_REGEXP='[0-9]+\.[0-9]+\.[0-9]+'
FULL_VERSION_REGEXP="^${VERSION_REGEXP}$"

if [[ ! $NEW_VERSION =~ $FULL_VERSION_REGEXP ]]; then
  echo "[Umi] First param should be a version like X.X.X"
  exit 1
fi

echo "[Umi] Updating version..."
sed -i -r "s/VERSION = \"${VERSION_REGEXP}/VERSION = \"${NEW_VERSION}/" gem/lib/Umi/version.rb
sed -i -r "s/\"version\": \"${VERSION_REGEXP}/\"version\": \"${NEW_VERSION}/" package.json

echo "[Umi] Running tests..."
npm test

echo "[Umi] Commiting files..."
git commit gem/lib/umi/version.rb package.json -m "Welcome ${NEW_VERSION}!"

echo "[Umi] Tagging v$NEW_VERSION..."
git tag "v${NEW_VERSION}"

echo "[Umi] Pushing..."
git push origin HEAD --tags

echo "[Umi] Pushed. Travis will do the rest"
