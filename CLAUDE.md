# Instructions for Claude (Project Guardrails)

## Hard Rules

* DO NOT use jQuery
* DO NOT import or copy HTML5 UP template code
* Recreate the design using modern React patterns (Next.js)
* Keep dependencies minimal

## Architecture

* Component-based design
* Reusable, small components
* Centralized panel navigation state
* No hardcoded UI text in components (use i18n)

## UI/UX

* Clean, minimal, high contrast
* Strong spacing and typography hierarchy
* Subtle transitions only (no flashy motion)

## Workflow

* ALWAYS propose a plan before major changes
* Keep diffs small and reviewable
* Do not refactor large areas without approval
* Explain tradeoffs briefly when suggesting changes

## Quality Bar

* Mobile-first and responsive
* Accessible (semantic HTML, focus states)
* No console errors
* Build must succeed with static export

## Performance

* Avoid large libraries
* Optimize images (use Next Image with unoptimized=true for export)
* Keep bundle size reasonable

## When Uncertain

* Ask clarifying questions before coding
* Prefer simpler solution

## Assets
* Use placeholder images only where real assets are missing
* Do not hardcode external image URLs deep in components
* Keep image paths easy to swap (centralized or clearly referenced)