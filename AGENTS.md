# AGENTS.md — Workspace Root

Instructions for AI agents modifying or working within this repository.

---

## Workspace Directory Structure

- **`/` (Root)**
  - **`README.md`** — The *Favor Manila Internet Team — Master SOP*. This is the single source of truth for operational procedures, schedules, volunteer roles, credentials, and troubleshooting.
  - **`AGENTS.md`** — This file (root-level developer and agent rules).
- **`Internet Schematic/`** — Subfolder for reference assets (floor plans, network topology/stream diagrams, and slides).
  - **`README.md`** — Annotation layer for local assets.
  - **`AGENTS.md`** — Instructions specific to updating `Internet Schematic/README.md` and maintaining asset consistency.
  - **`slide-generator/`** — Node.js utility for generating slides.

---

## General Rules for Agents

### 1. Package Management
- Always use **`pnpm`** (never `npm` or `yarn`) when installing or modifying dependencies.
- Run `pnpm install` after modifying dependencies to ensure `pnpm-lock.yaml` is kept up to date.

### 2. Testing & Validating NextJS
- For Next.js/React applications (e.g., inside `slide-generator/`), validate changes by running **lint tests only**. Do not run full production builds to save time.

### 3. Credential Updates
- Master credentials live in root `README.md` §11.
- Before modifying or displaying credentials, verify against active code/configs and the referenced Google Sheets.
- When password rotations occur:
  1. Update the credentials table in root `README.md` §11.
  2. Add an entry to the version history in root `README.md` §12.
  3. **Do not** modify the WiFi tables in `Internet Schematic/README.md` Slides 7 and 11, as those are kept as deprecated historical records.

### 4. Updating Documentation
- Maintain strict separation between operational procedures (root `README.md`) and asset/diagram descriptions (`Internet Schematic/README.md`).
- Follow the specific updating procedures in [Internet Schematic/AGENTS.md](file:///Users/rico/Documents/Claude/Projects/Tech Team/Internet Schematic/AGENTS.md) when working inside that folder.
