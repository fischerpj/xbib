#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Create the target parent directory if it doesn't exist
TARGET="$HOME/EXT/_myIT/_DOCKER/_BUNH"
echo $TARGET
#mkdir -p $TARGET

# Copy the /docs folder to _sites/docs
# -r enables recursive copying for directories
# -v enables verbose mode to show files being copied
SOURCE="docs"
cp -r -v "$SOURCE" "$TARGET"

cp -v posts/ps44/index-speaker.html "$TARGET/docs"

echo "Successfully copied $SOURCE to $TARGET"
