# Session Recap Creation Instructions

Use this guide every time a new recap is added.

## 1) Create the file

- Path: `src/content/recaps/session-XX.md`
- File name pattern: `session-06.md`, `session-07.md`, etc.
- Session number in the file name, frontmatter, and title must match.

## 2) Frontmatter rules

Use this shape:

```md
---
title: "Session Recap - <Session Title>"
sessionNumber: <number>
date: "M/D/YY"
tags: ["tag-one", "tag-two", "tag-three"]
summary: "One sentence summary of the session."
---
```

Notes:
- Current recap files use `M/D/YY` format (for consistency, keep using it unless the project migrates all recaps to ISO).
- Keep `summary` short and specific; this appears on Recaps and Home.

## 3) Section structure (required)

Use this order and separators:

1. `## Current Situation`
2. `## Events`
3. `## Learned`
4. `## Unresolved`
5. `## Stakes`

Put `---` between each section.

## 4) Highlight and color rules

Allowed highlight classes:
- `<span class="recap-npc">...</span>` for NPCs/creatures
- `<span class="recap-location">...</span>` for places
- `<span class="recap-faction">...</span>` for groups/factions
- `<span class="recap-item">...</span>` for key items/objects

Strict typing:
- People and creatures -> `recap-npc`
- Places -> `recap-location`
- Factions/groups -> `recap-faction`
- Tangible important objects -> `recap-item`

Party-member exception:
- Do not highlight these party names in recaps: `Eris`, `Rock`, `Pompo`, `Macha`.
- Keep those names as plain text.

## 5) Connection to previous/next session

No manual linking is needed inside recap markdown.

Navigation behavior is automatic in `src/pages/recaps/[slug].astro`:
- Recaps are sorted by `new Date(recap.data.date)` descending.
- On a session page:
  - `Previous` points to older recap.
  - `Next` points to newer recap.

Important:
- Date controls order. If order looks wrong, check `date` first.

## 6) Recaps page behavior

Recaps list is automatic in `src/pages/recaps/index.astro`:
- Timeline uses all sorted recaps (`timelineRecaps = sortedRecaps`).
- New recap appears automatically when file is added correctly.

No per-session hardcoding should be added.

## 7) Home page behavior

Home page latest recap is automatic in `src/pages/index.astro`:
- `latestRecap` is computed from all recaps sorted by date.
- New session appears in "Latest Recap" automatically when it is the newest by date.

## 8) Recommended workflow checklist

1. Copy structure from the latest recap or template.
2. Set frontmatter (`title`, `sessionNumber`, `date`, `tags`, `summary`).
3. Fill all five sections.
4. Apply highlight rules and party-name exception.
5. Run build:
   - `npm run build`
6. Verify:
   - New recap route exists (`/recaps/session-XX`)
   - Previous/Next links are correct
   - Recaps index shows the new session
   - Home page "Latest Recap" is correct

## 9) Troubleshooting (Windows EPERM issues)

If build fails due to Vite cache file locks:
- Remove Vite cache folder: `node_modules/.vite`
- Re-run: `npm run build`

If Astro sync fails with content errors:
- Re-check frontmatter keys and Markdown syntax in the new recap file.
