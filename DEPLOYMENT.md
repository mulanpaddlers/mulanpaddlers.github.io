# Deployment (GitHub Pages)

## Target

* GitHub Pages
* Deploy from root

## Requirements

* Static export only
* No SSR or API routes

## Next.js Config

* output: 'export'
* images.unoptimized = true

## Build Steps

1. npm run build
2. output generated in /dist
3. copy /dist contents to repo root (or /public if configured)

## Rules

* index.html must exist at root
* All assets must use relative/static paths
* Test locally before pushing

## Domain

* Custom domain via CNAME if needed
