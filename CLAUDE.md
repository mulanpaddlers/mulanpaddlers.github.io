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

## Design Implementation Rules
- Use HTML5 UP Dimension as a visual inspiration only
- Do NOT copy or port the original HTML/CSS/JS directly
- Do NOT use jQuery
- Recreate the experience using Next.js, TypeScript, Tailwind CSS, and modern React patterns
- Preserve the following qualities from the reference:
    - one-page feel
    - panel-style section navigation
    - restrained depth effect
    - minimal, immersive layout
- Avoid outdated template structure and legacy dependencies

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

## Deployment Guardrails
- Deployment target is GitHub Pages using the /docs folder
- Treat /docs as generated output only
- Do NOT place source code in /docs
- Build the app as a static export
- After build, copy the contents of /dist into /docs
- All routing and assets must work from a static host