#!/bin/bash

# Image Optimization Script
# This script will compress your JPG images to reduce file sizes

echo "Image Optimization Script"
echo "========================="
echo ""

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed."
    echo "Install it with: brew install imagemagick"
    echo ""
    echo "Alternative: Use online tools like TinyJPG or Squoosh"
    exit 1
fi

# Create optimized directory if it doesn't exist
mkdir -p images/optimized

echo "Optimizing images..."
echo "This will:"
echo "  - Resize to max 1920px width (maintain aspect ratio)"
echo "  - Compress to 85% quality"
echo "  - Save to images/optimized/"
echo ""

# Use magick or convert depending on what's available
CMD="convert"
if command -v magick &> /dev/null; then
    CMD="magick"
fi

for img in images/memory-*.jpg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        echo "Optimizing $filename..."
        $CMD "$img" -resize '1920x1920>' -quality 85 "images/optimized/$filename"
    fi
done

echo ""
echo "Done! Optimized images are in images/optimized/"
echo ""
echo "Original size:"
du -sh images/memory-*.jpg | awk '{sum+=$1} END {print sum " total"}'
echo ""
echo "Optimized size:"
du -sh images/optimized/
echo ""
echo "To use optimized images, run:"
echo "  mv images/optimized/* images/"
