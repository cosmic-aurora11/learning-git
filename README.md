# Arcane Relay — D&D Campaign Hub

A modern, responsive, static campaign hub built with [Astro](https://astro.build) and Markdown content collections. Everything is structured so you can add recaps, lore, and characters without editing layout code.

## Quick start

```bash
npm install
npm run dev
```

- Local site: `http://localhost:4321`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Content structure

```text
src/content/
  recaps/        # Session recaps (Markdown)
  characters/    # Character pages (Markdown)
  lore/          # Lore entries (Markdown)
  workouts/      # Player's Gym workouts (Markdown)

templates/
  recap-template.md
  character-template.md

src/data/siteData.json
```

## Add a recap

1. Copy the template:
   ```bash
   cp templates/recap-template.md src/content/recaps/session-02.md
   ```
2. Edit the frontmatter:
   - `title`
   - `sessionNumber`
   - `date` (YYYY-MM-DD)
   - `tags` (array)
   - `summary`
3. Fill in each section in the template.

Recaps are automatically sorted newest → oldest on the Recaps page and on the Home page.

## Add or edit a character

1. Copy the template:
   ```bash
   cp templates/character-template.md src/content/characters/new-character.md
   ```
2. Update the frontmatter:
   - `name`, `race`, `class`
   - `playerName` (optional)
   - `tags` (optional)
   - `portrait` (path to image)
   - `blurb` (short card text)
3. Update the body sections (Overview, known for, party role, spotlight).

## Add lore entries

1. Create a new Markdown file in `src/content/lore/`.
2. Use frontmatter:
   ```yaml
   title: "Entry title"
   category: "Regions/Locations" | "Factions" | "Important NPCs" | "Magical Oddities"
   summary: "1–2 sentence teaser"
   tags: ["optional", "tags"]
   ```
3. Write the lore entry below.

Lore entries show up as discoverable expandable cards on the Lore page.

## Update “Next Session” and “Party Gold”

Edit `src/data/siteData.json`:

- `nextSession.date`, `nextSession.time`, `nextSession.location`, `nextSession.note`
- `partyGold.total` and `partyGold.note`

These values automatically update the Home and Characters pages.

## Images

Place images in `public/images/` and reference them with absolute paths, for example:

```md
portrait: "/images/characters/macha.jpg"
```

Suggested folders:
- `public/images/characters/`
- `public/images/locations/`
- `public/images/npcs/`

## Deploy to GitHub Pages

1. Update `astro.config.mjs` with your GitHub Pages URL (set `site` and `base` if needed).
2. Build the site:
   ```bash
   npm run build
   ```
3. Deploy the `dist/` folder to GitHub Pages. You can use GitHub Actions or manual upload.

Astro docs: https://docs.astro.build/en/guides/deploy/github/
