# Character Submissions

Add one JSON file per character using the character slug for the filename:

`src/data/submissions/<character-slug>.json`

Each file is an array of submissions, newest first. The site reads the list in order,
so keep the latest entry at the top.

Minimum fields per entry:
- `date` (YYYY-MM-DD)
- `type` (intent, spotlight, memory, inspiration, bond, thread)
- `title` (short)
- `text` (1–3 sentences)
- `tags` (array of strings, optional)
- `session` (number or label, optional)

Example:

```json
[
  {
    "date": "2026-01-28",
    "type": "inspiration",
    "title": "Shield before pride",
    "text": "Macha stepped in front of the hostage before anyone could negotiate.",
    "tags": ["heroism", "protection"],
    "session": "S12"
  },
  {
    "date": "2026-01-21",
    "type": "intent",
    "title": "Mercy with steel behind it",
    "text": "Tonight I want a moment where Macha chooses restraint, even if it costs her leverage.",
    "tags": ["mercy"],
    "session": "S11"
  }
]
```
