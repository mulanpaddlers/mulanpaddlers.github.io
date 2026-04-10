# Deployment (GitHub Pages)

## Target
- GitHub Pages
- Publish from /docs on the selected branch

## Requirements
- Static export only
- No SSR or API routes
- /docs is deployment output only
- Source code must remain outside /docs

## Build Output Flow
1. Run `next build`
2. Next.js generates static files in `/dist`
3. Copy `/dist/*` into `/docs`
4. GitHub Pages serves the site from `/docs`

## Next.js Config
- output: 'export'
- images.unoptimized = true

## Rules
- Do not place application source files in /docs
- /docs must contain the generated static site only
- index.html must exist inside /docs after build