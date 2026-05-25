# AGENTS.md — Internet Schematic Folder

Instructions for any AI agent updating `README.md` in this folder.

---

## What This Folder Is

`Internet Schematic/` is the reference asset subfolder for the Favor Manila Internet Team SOP. It holds:

- **`README.md`** — dissected slide content; the folder's own index and annotation layer
- **`floor-plans/`** — PNG floor plan exports (current + archive)
- **`diagrams/`** — SVG network topology and stream diagrams
- **`internet-schematic-slides.pdf`** — original slide export (read-only reference)

The parent SOP lives at `../README.md` (titled *Favor Manila Internet Team — Master SOP*). This folder's `README.md` is a companion document — it annotates assets, not operational procedures.

---

## When to Update README.md

Update this file when any of the following happen:

| Trigger | Section(s) affected |
|---|---|
| New floor plan PNG added | Folder structure tree · Current layout slide entry (§Slide 9 or §Slide 10) |
| Old floor plan archived | Folder structure tree · Archive table (§Slides 13–26) |
| New SVG diagram added or renamed | Folder structure tree · Relevant slide entry |
| Venue name or layout version changes | Slide 9 / Slide 10 entries + folder structure tree |
| Restream / Resi / stream timing changes | Slides 2–5 (Restream checklist) and/or Slide 6 (Stream Diagram) |
| WiFi credentials or router hardware changes | Slide 7 (WiFi Access) |
| Router admin / ISP details change | Slide 11 (WiFi Settings) |
| New venue added (new slide) | New slide entry + folder structure tree + archive table if applicable |

Do **not** update README.md for changes that only affect `../README.md` (operational procedures, credentials). Keep README.md scoped to asset annotation.

---

## Folder Structure Tree

The tree at the top of README.md must exactly match the real directory contents. Rules:

- List `floor-plans/` contents in reverse chronological order (newest first).
- Archive entries go inside `floor-plans/archive/` in the tree.
- Diagrams go under `diagrams/` in alphabetical order.
- Always include the `← CURRENT` annotation on the active floor plan for each venue.
- Always include a `← this file` or similar annotation on `README.md` itself.

**Example entry format:**
```
├── ynares-v7-2026-06-01.png       ← CURRENT Ynares layout (slide 10)
```

When a current floor plan is superseded:
1. Move it to `archive/` (rename the file if needed — keep the date suffix).
2. Remove `← CURRENT` from its tree entry and move the line under `archive/`.
3. Add the new file with `← CURRENT`.

---

## Slide Content Sections

### Slides 2–5 (Restream Checklist)

Update when Restream destinations, toggle sequence, or timing changes. Keep the prose format. Use `>` blockquotes for notes/caveats. Do not convert to a table.

Key fields to keep accurate:
- SSID for pre-check (`FVR MAIN`)
- AJA Helo status at 7:00 AM
- Destination names and visibility (unlisted / public / off)
- Send-link timing (9:45 AM)

### Slide 6 (Stream Diagram)

Keep the ASCII block in sync with `diagrams/stream-diagram.svg`. If the SVG changes, update the ASCII block to match. The canonical fields are:

```
Broadcast Switcher
  ├─► Resi Production → studio.resi.io
  │     Trigger: [time] (auto) | TEST trigger: [time] ([duration])
  │     Stream delay: [delay]
  │     └─► [destinations]
  │
  └─► AJA Helo → app.restream.io
        Trigger: [time] | Realtime (<30s)
        └─► [destinations]
```

Timing values must match the SVG exactly. If there is a conflict, the SVG is authoritative.

### Slide 7 (WiFi Access)

**This table is intentionally marked "WRONG / DEPRECATED."** Do not correct the values in this table — it is a historical record of the original (incorrect) slide content. The note `Do not use this table for operations. Use ../README.md §11 (Credentials) instead.` must remain.

### Slide 9 (Metrotent — CURRENT)

Update when a new Metrotent floor plan is added. Change:
- The version string in the heading (e.g., `v2026.01.16` → next version)
- The `**File:**` link to the new PNG
- The "Key elements" bullet list if hardware has changed

### Slide 10 (Ynares Sports Arena — CURRENT)

Same rules as Slide 9. Use venue name **Ynares Sports Arena** (never "Ynares Centre").

### Slide 11 (WiFi Settings)

**Intentionally marked DEPRECATED.** Same rule as Slide 7 — do not correct the values; this is historical record only.

### Slides 13–26 (Archive Table)

When a floor plan is archived, append a new row to this table:

| Column | Value |
|---|---|
| Slide | Next slide number in sequence (or `—` if not from original slides) |
| File | Filename relative to `floor-plans/archive/` |
| Venue | Venue name |
| Notes | Brief description of what made this layout distinct (hardware era, mesh config, ISP setup) |

Do not delete or edit existing rows — the archive is append-only.

---

## File Naming Conventions

### Floor plan PNGs

```
{venue-slug}-v{version}-{yyyy-mm-dd}.png
```

- `venue-slug`: `ynares`, `metrotent`, `podium-hall`, `crowne-plaza`, `philsports-arena`
- `version`: integer (e.g., `v6`, `v7`) or omit for non-versioned events (e.g., christmas, specific event)
- `yyyy-mm-dd`: date of the layout

Examples:
```
ynares-v7-2026-06-01.png
metrotent-v2026-06-01.png
ynares-christmas-2026-12-07.png
```

### SVG Diagrams

```
{venue-slug}-topology.svg     ← network topology per venue
stream-diagram.svg            ← Resi / AJA / Restream signal flow (single file, all venues share the same stream path)
```

Do not create per-venue stream diagrams. The stream signal chain is venue-agnostic.

---

## SVG Diagram Guidelines

When updating or creating SVG diagrams:

- **`stream-diagram.svg`**: Use the existing 1120×720 viewBox. Do not resize. Timing labels use `class="trg"` (orange) for Resi triggers and `class="trg-b"` (blue) for auto/background triggers. All timing notation uses `Delay:` (not `Stream:`) as the label prefix.
- **`{venue}-topology.svg`**: Use 900px-wide viewBox. Dual-WAN inputs (Starlink + PLDT JIREH) feed into the ASUS ROG Rapture. PLDT RESI connects directly to Resi Encoder — it does not pass through the main router or switch. Mark this dedicated path clearly with a dashed separator and a `Stream Path` label.
- Arrowhead markers are defined in `<defs>` at the top of each SVG — do not duplicate them.
- Use consistent color coding: orange = ASUS/main router, teal = mesh nodes, purple = PLDT WAN inputs, red = Resi Encoder, gray = AJA/switches.

---

## Cross-References to Check

After updating README.md, verify these locations in `../README.md` (the master SOP) stay in sync:

| README.md change | Check in ../README.md |
|---|---|
| Current floor plan updated | §10 Venue Diagrams — floor plan image links and ASCII topology |
| Restream / Resi timing changed | §3 Schedule table · §6 Stream Toggle Sequence · §6 Stream Destinations Matrix · ASCII stream block |
| WiFi credentials changed | §11 Credentials — WiFi table |
| Hardware added/removed | §9 Equipment — box tables |
| New venue added | §10 Venue Diagrams — new venue section |

---

## What NOT to Change

- The `## Migration Notes` section at the bottom — append-only; do not rewrite.
- The `Status` column in the Slide 7 WiFi table — intentionally shows `WRONG` / `DEPRECATED`; do not "fix" it.
- The `Slide 11` router entries — same; historical record only.
- Archive table rows — never edit existing entries.
- The source Google Slides / Sheets IDs at the bottom of Migration Notes.

---

## Versioning

README.md itself does not carry a version header. Changes are tracked via git. When making a significant update (new venue, major hardware change), add a one-line note to the `## Migration Notes` section:

```markdown
- **{yyyy-mm-dd}** — {Brief description of what changed and why.}
```
