# Internet Schematic — Reference Assets

This folder contains all visual and reference assets extracted from the original Internet Schematic Google Slides deck (`1uGVDMJ8plObs9qfFBCXS6T3lSvJkxe-YSK6cTVcoZII`), now deprecated in favor of `INTERNET_MASTERFILE.md`.

---

## Folder Structure

```
Internet Schematic/
├── README.md                          ← this file (dissected slide content)
├── internet-schematic-slides.pdf      ← original slide export (reference only)
├── floor-plans/
│   ├── ynares-v6-2026-03-03.png       ← CURRENT Ynares layout (slide 10)
│   ├── metrotent-v2026-01-16.png      ← CURRENT Metrotent layout (slide 9)
│   └── archive/
│       ├── ynares-v5-2025-10-20.png
│       ├── ynares-v3-2025-06-17.png
│       ├── ynares-v3-2025-06-17-variant.png
│       ├── ynares-v3-2025-05-25.png
│       ├── ynares-christmas-2024-12-10.png
│       ├── ynares-2024.png
│       ├── metrotent-v2025-01-28.png
│       ├── metrotent-v2024-11-05.png
│       ├── podium-hall-2025-02-22.png
│       ├── crowne-plaza-2024-09-10.png
│       ├── crowne-plaza-2023.png
│       └── philsports-arena-2024.png
└── diagrams/
    ├── ynares-topology.svg            ← logical network diagram, Ynares Sports Arena
    ├── metrotent-topology.svg         ← logical network diagram, Metrotent
    └── stream-diagram.svg             ← Resi / AJA / Restream signal flow
```

---

## Slide Content — Dissected

### Slide 1: Title

**INTERNET SCHEMATIC DIAGRAM** — cover slide. No operational content.

---

### Slides 2–5: Restream Checklist

The original slides walked through a four-step Restream setup sequence. Translated to prose:

**Pre-check (before touching anything):**
- Confirm laptop is connected to **FVR MAIN** (SSID: [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0))
- Confirm AJA Helo is **OFF** (it will be toggled on by the Captain at 7:00 AM)
- The AJA IP is **10.6.33.5** (note: some slides showed this as the Resi IP — the authoritative IP for Resi Encoder is 10.6.33.5; AJA is DHCP-assigned)

**Step 1 — Restream toggle ON (7:00 AM):**
- Captain logs into app.restream.io
- Toggles the following destinations ON:
  - iWantTV
  - Favor Production (Ultra Low Latency / Unlisted)
  - Favor Church Manila (Normal Latency / Unlisted)

**Step 2 — Resi standby:**
- Resi encoder is on standby; auto-trigger fires at 9:48 AM
- Do not manually start Resi before this unless troubleshooting

**Step 3 — 9:45 AM link send:**
- At 9:45 AM, send the Restream YouTube link to the STREAM ASSIST TEAM GC
- Turn ON in Restream:
  - Favor Production YouTube (Unlisted)
  - Favor Church Manila YouTube Backup (Unlisted)
  - iWantTV (Public, via Oven Media Engine)
- Facebook: **OFF** (backup only — do not enable unless Resi is down)

> **Note:** The slides listed Favor Church Manila as "Backup." The stream visibility is: Favor Production = unlisted, Favor Church Manila = unlisted backup, iWantTV = public, Facebook = off by default.

---

### Slide 6: Stream Diagram

Visual flow of the full stream signal chain. See [`diagrams/stream-diagram.svg`](diagrams/stream-diagram.svg) for the new vector version. Original text labels from the slide:

```
Broadcast Switcher
  │
  ├─► Resi Production → studio.resi.io
  │     Trigger: 9:48 AM (auto) | TEST trigger: 7:07 AM (5 min)
  │     Stream delay: 2–5 min buffer
  │     └─► YouTube Production (Unlisted) [MAIN]
  │         Facebook (PUBLIC) [BACKUP — disabled Sundays]
  │
  └─► AJA Helo → app.restream.io
        Trigger: 7:30 AM / 9:45 AM | Realtime (<30s)
        └─► YouTube Production (Unlisted)
            YouTube Backup (Unlisted)
            iWantTV (PUBLIC, via Oven Media Engine, trigger: 9:20 AM → 4s test)
            Facebook (off on Sundays)
```

Additional timing from the stream diagram slide:
- `9:48 AM` — Restream auto-trigger (30s test stream via YT-Prod)
- `9:20 AM` — iWantTV via Oven Media Engine (4s test stream)
- `7:07 AM` — Resi TEST stream auto-fires (5 min duration)

---

### Slide 7: WiFi Access

Original WiFi credential table from the slides (now **superseded** by the reconciled credentials in `INTERNET_MASTERFILE.md §11`):

| SSID | Password (slides) | Status |
|---|---|---|
| FVR MAIN | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | **WRONG** — correct is [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) |
| FVR PROD WORSHIP | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | **DEPRECATED** |
| FVR CRTVS TECH SOCIALS | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | **DEPRECATED name** — current SSID is `FVR CRTVS SOCIALS`, password [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) |
| FVR KIDS | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | **WRONG** — correct is [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) |
| FVR STAFF | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | **DEPRECATED** |
| FVR CCTV | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Correct |

**Do not use this table for operations.** Use `INTERNET_MASTERFILE.md §11` (Credentials) instead.

---

### Slide 8: Stream Access

Placeholder slide listing Restream and Resi login points. Credentials were not shown (redacted). Full authoritative credentials are in `INTERNET_MASTERFILE.md §11`.

---

### Slide 9: Metrotent Network Layout (v2026.01.16) — CURRENT

**File:** [`floor-plans/metrotent-v2026-01-16.png`](floor-plans/metrotent-v2026-01-16.png)

Key elements visible in this layout:
- FVR MAIN: ASUS ROG Rapture (Wifi 7)
- CRTVS Mesh (VIP 2 position)
- Starlink
- Network Switch
- FVR KIDS Mesh (Babies position)
- 5G RESI (PLDT H153)
- Resi Hardware Encoder
- 5G JIREH (PLDT H153)
- AJA Helo

Logical topology: See [`diagrams/metrotent-topology.svg`](diagrams/metrotent-topology.svg).

---

### Slide 10: Ynares Sports Arena Network Layout (v6-2026-03-03) — CURRENT

**File:** [`floor-plans/ynares-v6-2026-03-03.png`](floor-plans/ynares-v6-2026-03-03.png)

Key elements visible in this layout:
- Starlink → ASUS ROG Rapture GT-BE98 (Wifi 7, 10.3.66.1) as FVR MAIN
- Netgear Switch
- 5G Resi (PLDT H153)
- X50 Mesh nodes: Babies, Kids Check-in, Royals, Heroes, CRTVS, IEM
- Resi Hardware Encoder
- Arena PC (Propres) and vMix Switcher
- AJA Helo
- 5G Jireh (PLDT H153)
- Broadcast Table (production position)

Logical topology: See [`diagrams/ynares-topology.svg`](diagrams/ynares-topology.svg).

---

### Slide 11: WiFi Settings

This slide listed router admin details (now outdated/incorrect — e.g., listed "TP-Link" as main router; current is ASUS ROG Rapture). Do not use for operations. See `INTERNET_MASTERFILE.md §11`.

Original entries for reference:
- Main Router (TP-Link): `Favor is Here` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) — **DEPRECATED**
- Satellite (Starlink): `Favor Starlink` / (hidden)
- Backup 5G Router (PLDT): `Favor Jireh` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)
- Backup 5G Router (PLDT): `Favor Resi` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)
- Kids Router (Smart): `FavorKids_5G` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) — **no longer active**

---

### Slide 12: Computer Checklist

Pre-service laptop/PC setup steps (now integrated into `INTERNET_MASTERFILE.md §5` Setup Playbook):

**Production computers:**
- MacBook — Astoria
- MacBook — Flair
- Arena PC (Propres)

**Steps:**
1. Check that all Deco/X50 units show "Ethernet" (wired backhaul, not wireless)
2. Confirm FOH Arena and Propres are using WIRED connection (WiFi off)
3. Go to https://fast.com for speed test
4. Speed should be ≥80 Mbps for stability

---

### Slides 13–26: Old Layouts

Slide 13 is a section divider ("OLD LAYOUTS"). Slides 14–26 are deprecated floor plan layouts, preserved in [`floor-plans/archive/`](floor-plans/archive/).

| Slide | File | Venue | Notes |
|---|---|---|---|
| 14 | `ynares-v5-2025-10-20.png` | Ynares | Load balancer era; Unicom/Shiloh still active; no IEM mesh |
| 15 | `ynares-v3-2025-06-17.png` | Ynares | 5G Jireh + Unicom; Load Balancer; VIP/Foyer mesh |
| 16 | `ynares-christmas-2024-12-10.png` | Ynares (Christmas) | v1: 5G Volu, UP/GRT areas |
| 17 | `ynares-v3-2025-06-17-variant.png` | Ynares | Variant of June 2025 layout with Babies position |
| 18 | `ynares-v3-2025-05-25.png` | Ynares | May 2025; Babies position; Load Balancer |
| 19 | (not archived) | Ynares (Christmas) | v2 of Christmas layout; minor variation from v1 |
| 20 | `podium-hall-2025-02-22.png` | Podium Hall | 2 5G routers + Load Balancer; Deaf/AJA positions |
| 21 | `metrotent-v2025-01-28.png` | Metrotent | Starlink 5/F; PLDT A+B; Unicom; Load Balancer |
| 22 | `ynares-2024.png` | Ynares | Old: 2 5G + Starlink + Load Balancer |
| 23 | `philsports-arena-2024.png` | PhilSports Arena | Same as Ynares 2024 config |
| 24 | `crowne-plaza-2023.png` | Crowne Plaza | PLDT + Kids at the back; CRTVS/Deaf/Kids positions |
| 25 | `crowne-plaza-2024-09-10.png` | Crowne Plaza | 2 5G + Starlink + LB; 10.100.x subnet |
| 26 | `metrotent-v2024-11-05.png` | Metrotent | Horizontal layout variant |

---

## Migration Notes

This folder was created on 2026-05-24 as part of the Internet SOP migration. The original Google Slides deck and Passwords Sheet are now **deprecated** as live operational documents. All current credentials and procedures are maintained in [`../INTERNET_MASTERFILE.md`](../INTERNET_MASTERFILE.md).

The original sources are preserved for historical reference:
- Google Slides: `1uGVDMJ8plObs9qfFBCXS6T3lSvJkxe-YSK6cTVcoZII`
- Google Sheets: `1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o`
- PDF export: `internet-schematic-slides.pdf` (in this folder)
