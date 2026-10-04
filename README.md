# Favor Manila Internet Team — Master SOP

> **Single source of truth** as of 2026-10-04.  
> Passwords: [Google Sheet]((https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0))  
> Roster: [favor.church/techroster](https://favor.church/techroster) · Reference assets: [`Internet Schematic/`](Internet%20Schematic/)

---

## Table of Contents

1. [Welcome](#1-welcome)
2. [As a Volunteer](#2-as-a-volunteer)
3. [Schedule](#3-schedule)
4. [Roles](#4-roles)
5. [Setup Playbook](#5-setup-playbook)
6. [Stream Toggle Sequence](#6-stream-toggle-sequence)
7. [Packdown Playbook](#7-packdown-playbook)
8. [Troubleshooting](#8-troubleshooting)
9. [Equipment](#9-equipment)
10. [Venue Diagrams](#10-venue-diagrams)
11. [Credentials](#11-credentials)
12. [Appendix](#12-appendix)

---

## 1. Welcome

The Favor Manila Internet Team keeps Sunday running. We lay the cables, place the mesh nodes, watch the stream, and make sure every person — whether in the room or watching from home — experiences the service without interruption. We're a small team doing behind-the-scenes work that most people never notice, and that's exactly how we like it.

This document is the one place that has everything: roles, schedules, playbooks, credentials, floor plans. If you're a new volunteer figuring out what your role actually means, start here. If you're a Captain setting up for a 6 AM Sunday, start here. If something's broken and you need to fix it fast, go to [§8](#8-troubleshooting).

**Quick links:**
- Roster → [favor.church/techroster](https://favor.church/techroster)
- Floor plans & reference assets → [`Internet Schematic/`](Internet%20Schematic/)
- Stream diagram → [`Internet Schematic/diagrams/stream-diagram.svg`](Internet%20Schematic/diagrams/stream-diagram.svg)

---

## 2. As a Volunteer

### Onboarding Pipeline

1. **Sign-up form** — Fill out the team sign-up form (link from the Captain or favor.church/techroster).
2. **Interview** — Short conversation with the Captain to understand your availability, tech comfort level, and which roles suit you.
3. **Shadow Sunday** — Come for a full Sunday with no assigned responsibility. Just observe, ask questions, and get familiar with the flow.
4. **Rostered Sunday** — You're assigned a role and you're on.

### Roster Behavior Rules

1. **Unavailability** — Inform the Captain at least one week before your Sunday if you can't make it.
2. **Contact response** — Respond to GC messages within 24 hours. Silence is not an answer.
3. **Swaps** — Arrange swaps directly with another rostered volunteer. Inform the Captain once confirmed — don't leave them to find out on Sunday morning.
4. **Escalation** — If you can't find a swap or need urgent cover, contact the Captain directly. Don't wait.
5. **Attendance** — Be on time for your call time: Captain at 6:00 AM; all other volunteers at 6:15 AM. Late arrival without notice is noted.

### First-Sunday Checklist

For new volunteers on their first rostered Sunday:

- [ ] Arrive by 6:15 AM
- [ ] Find the Captain at setup or text them when you arrive
- [ ] Listen closely at the 8:10 AM all-in huddle — the Captain walks through any changes
- [ ] Follow your role's duty list in [§4](#4-roles)
- [ ] Ask your buddy or the Captain if anything is unclear — no question is dumb on Day 1

---

## 3. Schedule

### Sunday Services — Crowne Plaza Manila Galleria

| Service | Stream visibility | Expected end |
|---|---|---|
| **9:00 AM** | **Unlisted** | ~10:30 AM |
| **11:30 AM** | **PUBLIC — main livestream** | ~1:00 PM |
| **3:00 PM** | **Unlisted** | ~4:30 PM |
| **5:30 PM** | **Unlisted** | ~7:00 PM |

> **Stream rule:** all four services are streamed. The **11:30 AM service is the public livestream**; 9:00 AM, 3:00 PM, and 5:30 PM remain unlisted.

### Full Sunday Timeline

| Time | Event |
|---|---|
| 6:00 AM | **Captain call time.** Captain arrives and begins setup oversight. |
| 6:15 AM | **Volunteer call time.** Full Internet Team arrives; cable runs, mesh placement, CCTV, and CaptionKit hardware setup begin. |
| 7:00 AM | **Captain**: Restream systems ON. Favor Production remains unlisted for rehearsal / early-service testing. |
| 7:07 AM | Resi TEST stream auto-trigger (2–5 min delay; 1-hr test duration — expected, not an error). |
| 7:30 AM | **Deadline**: AJA rehearsal / preview link sent to STREAM ASSIST TEAM GC. |
| 8:00 AM | Captain at worship/production runsheet huddle. |
| 8:10 AM | **All-in huddle** — full Internet Team. |
| 8:45 AM | 9:00 AM service pre-stream window begins — **unlisted**. |
| 8:48 AM | Resi LIVE auto-trigger for 9:00 AM service. |
| 8:50 AM | Resi expected live after buffer. |
| 8:55 AM | **IF RESI NOT LIVE** → Captain triggers AJA Backup Streams; Stream Comms alerts all 4 GCs. |
| 9:00 AM | First service starts — **unlisted**. Internet Team remains operational while morning rehearsal / stream testing continues. |
| ~9:30 AM | **Captain signal**: AI Operator triggers CaptionKit translations ON. |
| ~10:30 AM | CaptionKit translations OFF; first service ends. |
| 10:45 AM | iWantTV / public-feed preparation for the 11:30 AM livestream. |
| 11:15 AM | **Main livestream pre-stream window begins.** Favor Production / public destinations go live. |
| 11:18 AM | Resi LIVE auto-trigger for 11:30 AM service. |
| 11:20 AM | Resi expected live after buffer. |
| 11:25 AM | **IF RESI NOT LIVE** → Captain triggers AJA Backup Streams; Stream Comms alerts all 4 GCs. |
| 11:30 AM | Second service starts — **PUBLIC main livestream**. |
| ~12:00 NN | **Captain signal**: AI Operator triggers CaptionKit translations ON. |
| ~1:00 PM | CaptionKit translations OFF; second service ends. Return service-stream visibility to **unlisted** for the afternoon. |
| 2:00 PM | Captain at afternoon worship/production runsheet huddle. |
| 2:10 PM | **All-in huddle** — afternoon team. This is the only PM huddle. |
| 2:45 PM | 3:00 PM service pre-stream window begins — **unlisted**. |
| 2:48 PM | Resi LIVE auto-trigger for 3:00 PM service. |
| 2:50 PM | Resi expected live after buffer. |
| 2:55 PM | **IF RESI NOT LIVE** → Captain triggers AJA Backup Streams; Stream Comms alerts all 4 GCs. |
| 3:00 PM | Third service starts — **unlisted**. |
| ~3:30 PM | **Captain signal**: AI Operator triggers CaptionKit translations ON. |
| ~4:30 PM | CaptionKit translations OFF; third service ends. |
| 5:15 PM | 5:30 PM service pre-stream window begins — **unlisted**. |
| 5:18 PM | Resi LIVE auto-trigger for 5:30 PM service. |
| 5:20 PM | Resi expected live after buffer. |
| 5:25 PM | **IF RESI NOT LIVE** → Captain triggers AJA Backup Streams; Stream Comms alerts all 4 GCs. |
| 5:30 PM | Fourth service starts — **unlisted**. No additional huddle. |
| ~6:00 PM | **Captain signal**: AI Operator triggers CaptionKit translations ON. |
| ~7:00 PM | CaptionKit translations OFF; final service ends. **Captain**: manual trigger OFF Resi encoder + Restream (all channels). |
| Post-service | Post-service huddle, then packdown. CRTVS area last (still uploading). |

### Other Events

Same SOP applies with a lean roster. The Captain confirms required roles per event — not all 15 roles are needed for smaller venues or special services. Captain specifies who's on for each event.

---

## 4. Roles

### Setup Roles (9)

---

#### Captain

The Captain owns the Sunday. They are the last decision-maker for all stream, network, and team issues. They run the 8:10 AM and 2:10 PM all-in huddles, handle all stream toggle actions, and are the escalation point for every role on the team.

**Duties:**
- Arrive at 6:00 AM; begin setup oversight
- Toggle Restream ON at 7:00 AM (Favor Production = unlisted)
- Send AJA link to STREAM ASSIST TEAM GC by 7:30 AM
- Attend AM runsheet huddle at 8:00 AM
- Run AM all-in huddle at 8:10 AM
- Confirm each service's pre-stream window and visibility; 11:30 AM is public, all other services unlisted
- Monitor each Resi auto-trigger / expected-live window; trigger AJA backup at the service-specific contingency time if needed
- Signal AI Operator for CaptionKit ON/OFF during every service per the timing table in §6
- Manual trigger OFF: Resi encoder + Restream at service end
- Attend PM runsheet huddle at 2:00 PM; run PM all-in huddle at 2:10 PM; oversee the 3:00 PM and 5:30 PM service sequences
- Escalation point for all troubleshooting — final call on any network or stream decision

**Hands off to:** Asst Captain for venue-floor coverage while Captain is at Broadcast Table.

---

#### Asst Captain

The Asst Captain is the Captain's eyes and ears across the venue floor. They handle field issues — slow zones, disconnected devices, mesh node problems — so the Captain can stay focused on the stream console.

**Duties:**
- Arrive at 6:15 AM; assist with mesh node placement and cable route decisions
- Receive and act on speedtest results from the Runner/Speedtester
- Escalate network issues to Captain with context (location, device, symptom)
- Cover Captain's floor presence during critical pre-stream / go-live windows
- Be reachable on GC throughout both services

**Hands off to:** Captain for all stream-critical decisions.

---

#### Stream Op

The Stream Op monitors the live stream quality throughout both services. They watch the Resi encoder, Restream dashboard, and YouTube/iWantTV outputs, and immediately alert the Captain if anything drops or degrades.

**Duties:**
- Confirm Resi encoder is online and receiving signal before each service's auto-trigger
- Monitor Favor Production YouTube after go-live; watch for buffering or quality alerts
- Watch Restream dashboard for destination status
- Alert Captain immediately if any destination drops
- Monitor CaptionKit translation feed during each translation window

**Hands off to:** Captain for all toggle decisions — Stream Op monitors, Captain acts.

---

#### Troubleshooting

The Troubleshooting volunteer is the technical first-responder for network issues during the service. They know the IP scheme, router admin panels, and mesh topology, and can diagnose problems without escalating everything to the Captain.

**Duties:**
- Memorize IP scheme before Sunday (see [§11 Credentials](#11-credentials))
- During setup: verify all routers and mesh nodes are online
- During service: respond to Asst Captain's field reports; access admin panels to diagnose
- Log any resolved or unresolved issues for post-service debrief
- Reference [§8 Troubleshooting playbooks](#8-troubleshooting)

**Hands off to:** Captain if issue cannot be resolved within 5 minutes.

---

#### Runner / Speedtester

The Runner is the team's physical logistics link. They carry cables and gear between areas, run speedtests across the venue, and stay mobile throughout the service.

**Duties:**
- Arrive at 6:15 AM; assist with cable carries and mesh node transport
- Run speedtest at every mesh node position before the 8:45 AM first-service pre-stream window (minimum ≥80 Mbps on LAN-wired connection; WiFi must be OFF during test)
- Report all zone results to Asst Captain via GC
- Remain mobile and available for ad-hoc fetch/carry requests during service
- Assist with packdown carry duties after service

---

#### Stream Comms

The Stream Comms volunteer manages all four communication GCs during the service. They are the information bridge between the Internet Team, other ministry teams, and platform contacts.

**Duties:**
- Monitor and post in all 4 GCs:
  1. **Stream Assist Team** — primary stream ops coordination
  2. **Tech x Socials** — socials team stream updates
  3. **iWantTV Viber** — iWantTV broadcast status
  4. **Kids x Tech x Babies** — Kids Ministry tech coordination
- At 7:30 AM: Forward AJA Restream link to STREAM ASSIST TEAM GC
- At each service pre-stream window: send / confirm the correct stream link and visibility; the 11:30 AM service is public, all others unlisted
- At any service contingency time (if Resi backup is triggered): alert all 4 GCs immediately
- During service: relay stream quality updates; flag any viewer-reported issues to Stream Op

**Hands off to:** Captain for any decisions triggered by GC reports.

---

#### Cable Hands

The Cable Hands volunteer lays all data and power cables across the venue during setup. They ensure every cable run is clean, taped down, and live before the service starts.

**Duties:**
- Arrive at 6:15 AM
- Lay and label all Ethernet runs from switch to fixed positions (Broadcast Table, Arena PCs, Resi encoder)
- Tape down and manage all cable runs in public walking areas (trip hazards = incident)
- Confirm all wired connections show green link lights before the 8:10 AM all-in huddle
- During packdown: collect and coil all cables; store in Box 1 (see [§9 Equipment](#9-equipment))

> **Note:** Cable Hands and CCTV are two separate roles. Do not double-assign.

---

#### CCTV

The CCTV volunteer sets up and monitors the Tapo C200C cameras connected to the FVR CCTV network.

**Duties:**
- Arrive at 6:15 AM; retrieve CCTV cameras from storage
- Connect each Tapo C200C to FVR CCTV ([********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)); confirm feeds in the Tapo app (`net@favor.church` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0))
- Position cameras per the Captain's direction for the venue
- During packdown: retrieve cameras, confirm offline in Tapo app, store in equipment box

> **Note:** CCTV and Cable Hands are separate roles. Do not double-assign.

---

#### AI Operator

The AI Operator runs CaptionKit live translation, providing real-time translated subtitles during every Sunday service. The connection uses the physical audio hardware at MC2.

**Duties:**
- Arrive at 6:15 AM
- Before the first service: connect M-Audio USB audio interface at MC2; connect the USB/printer cable to the CaptionKit input
- Open [captionkit.io](https://captionkit.io) and sign in as `shared@favor.church`; confirm audio signal is routing correctly
- At Captain's signal for each service: trigger CaptionKit translations ON/OFF according to the timing table in [§6](#6-stream-toggle-sequence)
- Keep CaptionKit operational across all four services, including the unlisted services
- During final packdown: disconnect M-Audio and USB/printer cable; store in equipment box

---

### Packdown Roles (6)

---

#### Captain *(Packdown)*

Oversees full packdown. Confirms all streams are OFF before packdown begins. Runs post-service huddle. Signs off on Tetris Master's equipment audit.

**Duties:**
- Confirm Resi encoder and Restream are both OFF after the final service ends
- Run post-service huddle (5–10 min debrief; shout-outs; issues log)
- Confirm CRTVS area stays active until upload is complete before giving the all-clear
- Sign off on Tetris Master's inventory check before anyone leaves

---

#### Cable *(Packdown)*

Leads cable collection during packdown.

**Duties:**
- Collect all Ethernet cables from switch positions and venue runs
- Coil cables correctly (over-under method); label if needed
- Store in Box 1 per [§9 Equipment](#9-equipment) inventory

---

#### Cable Asst ×2 *(Packdown)*

Two assistants supporting the Cable lead. They retrieve cables from distant positions (mesh node locations, far stage runs) and bring them to the Cable lead for coiling.

---

#### Tetris Master *(Packdown)*

Packs all equipment into storage boxes and performs the end-of-day inventory audit.

**Duties:**
- Pack all gear into boxes per [§9](#9-equipment) inventory list
- Perform item-by-item audit against the box inventory
- Flag any missing items to the Captain before anyone leaves
- Confirm all boxes are sealed and stored correctly

---

#### AI Operator *(Packdown)*

Same volunteer as the setup AI Operator.

**Duties:**
- Disconnect M-Audio interface and USB/printer cable from MC2
- Confirm CaptionKit session is closed / logged out
- Store hardware in the designated equipment box

---

## 5. Setup Playbook

### 6:00 AM — Captain Call Time

- [ ] Captain arrives and begins setup oversight
- [ ] Confirm storage / venue access and priority setup path
- [ ] Confirm stream and network systems are ready for volunteer setup

### 6:15 AM — Volunteer Call Time

- [ ] Full team arrival confirmed via GC
- [ ] Retrieve all equipment boxes from storage
- [ ] Begin cable runs: Switch → Broadcast Table, Switch → Arena PCs, Switch → Resi Encoder
- [ ] Asst Captain assigns mesh node positions per venue layout (see [§10](#10-venue-diagrams))
- [ ] CCTV: cameras out, connecting to FVR CCTV
- [ ] AI Operator: M-Audio and USB/printer cable to MC2; CaptionKit login / audio confirmed

### 7:00 AM — Stream Systems Up

- [ ] **Captain**: toggle Restream systems ON; Favor Production = unlisted for rehearsal / early testing
- [ ] Confirm AJA Helo is receiving signal (green link light; IP visible in ASUS admin panel)
- [ ] Confirm Resi Encoder is online (`studio.resi.io`)
- [ ] *Note: Resi TEST stream auto-fires at 7:07 AM — expected, not an error*

### 7:30 AM — AJA Link Deadline

- [ ] **Captain**: send AJA rehearsal / preview link to STREAM ASSIST TEAM GC
- [ ] **Stream Comms**: confirm message sent; forward to other GCs as appropriate

### 8:00 AM — Runsheet Huddle

- [ ] Captain attends worship/production runsheet huddle
- [ ] Asst Captain holds the floor

### 8:10 AM — All-In Huddle

- [ ] Full Internet Team gathers
- [ ] Captain confirms: stream status, any issues to watch, role reminders
- [ ] All volunteers confirm ready

### 8:10–8:45 AM — Final Checks

- [ ] **Runner/Speedtester**: test every mesh zone (≥80 Mbps on LAN-wired; WiFi OFF during test)
- [ ] Speedtest results reported to Asst Captain via GC
- [ ] **Computer checklist**: verify all Deco/X50 units show "Ethernet" (not wireless backhaul)
- [ ] Confirm Arena PC (Propres) and Arena PC (vMix/Switcher) are on wired connections (WiFi OFF)
- [ ] Go to [fast.com](https://fast.com) from a wired device; confirm ≥80 Mbps
- [ ] **AI Operator**: confirm CaptionKit receives clean audio at MC2

### 8:45 AM — First Pre-Stream Window

- [ ] 9:00 AM service stream begins **unlisted**
- [ ] **Captain / Stream Op**: follow the 8:48 / 8:50 / 8:55 Resi sequence in [§6](#6-stream-toggle-sequence)
- [ ] Keep Internet Team and CaptionKit operational through the 9:00 AM service and morning rehearsal / testing

### 11:15 AM — Public Livestream Window

- [ ] Switch the 11:30 AM service to **PUBLIC**
- [ ] Send / confirm the public Favor Production stream link
- [ ] **Captain / Stream Op**: follow the 11:18 / 11:20 / 11:25 Resi sequence
- [ ] After the 11:30 AM service ends (~1:00 PM), return service-stream visibility to **unlisted**

### 2:00 PM / 2:10 PM — PM Huddles

- [ ] Captain attends PM runsheet huddle at 2:00 PM
- [ ] Full PM all-in huddle at 2:10 PM
- [ ] No additional huddle before the 5:30 PM service

### Afternoon / Evening Services

- [ ] 3:00 PM service: unlisted; pre-stream at 2:45 PM
- [ ] 5:30 PM service: unlisted; pre-stream at 5:15 PM
- [ ] Follow the service-specific Resi and CaptionKit timing table in [§6](#6-stream-toggle-sequence)

---

## 6. Stream Toggle Sequence

### Fixed Early-Morning Systems

| Time | Action | Who |
|---|---|---|
| 7:00 AM | Restream systems ON · Favor Production unlisted for rehearsal / testing | Captain |
| 7:07 AM | Resi TEST stream auto-trigger | Resi (auto) |
| 7:30 AM | Send AJA rehearsal / preview link to STREAM ASSIST TEAM GC | Captain / Stream Comms |

### Per-Service Timing

The stream cadence is the same for every service: **pre-stream 15 minutes before service**, **Resi trigger 12 minutes before**, **expected live 10 minutes before**, and **AJA contingency 5 minutes before**.

| Service | Visibility | Pre-stream | Resi trigger | Expected live | AJA contingency | CaptionKit ON | CaptionKit OFF / service end |
|---|---|---|---|---|---|---|---|
| **9:00 AM** | Unlisted | 8:45 AM | 8:48 AM | 8:50 AM | 8:55 AM | ~9:30 AM | ~10:30 AM |
| **11:30 AM** | **PUBLIC** | 11:15 AM | 11:18 AM | 11:20 AM | 11:25 AM | ~12:00 NN | ~1:00 PM |
| **3:00 PM** | Unlisted | 2:45 PM | 2:48 PM | 2:50 PM | 2:55 PM | ~3:30 PM | ~4:30 PM |
| **5:30 PM** | Unlisted | 5:15 PM | 5:18 PM | 5:20 PM | 5:25 PM | ~6:00 PM | ~7:00 PM |

> The **11:30 AM service is the only public livestream**. Keep the 9:00 AM, 3:00 PM, and 5:30 PM service streams unlisted.

### Stream Destinations Matrix

| Destination | Path | Visibility | Default State | Notes |
|---|---|---|---|---|
| YT-Prod TEST | Resi → studio.resi.io | — | AUTO 7:07 AM | 1-hr test stream, 2–5 min delay |
| Favor Production YouTube | Resi → studio.resi.io | Unlisted except **11:30 AM PUBLIC** | Per-service auto-trigger | Main Resi stream; 2–5 min buffer |
| Facebook | Resi → studio.resi.io | — | **OFF — Sundays** | In Resi config; Captain enables only if needed |
| Favor Church Manila YouTube | AJA → Restream | **Unlisted backup** | Contingency only | AJA backup when Resi misses the service-specific go-live window |
| Favor Production YouTube | AJA → Restream | Unlisted / backup | Systems ON from 7:00 AM | Rehearsals, preview, and realtime backup |
| iWantTV | AJA → Restream → Oven Media Engine | **Public for 11:30 AM service** | Prep from 10:45 AM | Public broadcast destination |
| Facebook | AJA → Restream | — | **OFF — Sundays** | Backup only; Captain triggers if Resi is down |

### Resi Stream Metadata (YouTube / Facebook)

Use the following when creating or updating the YouTube / Facebook stream destination in `studio.resi.io`:

| Field | Value |
|---|---|
| **Title** | `Join us LIVE now at Favor Church!` |
| **Description** | See block below |

```
Favor Church Manila — Sunday Service
Join us live from Crowne Plaza Manila Galleria.

Service times: 9:00 AM · 11:30 AM · 3:00 PM · 5:30 PM
Public livestream: 11:30 AM
```

### Signal / Platform Flow

```
Production video/audio
 │
 ├──► Resi Encoder (DHCP)  ←── [PLDT RESI — dedicated connection]
 │     → studio.resi.io  |  2–5 min buffer
 │     ├──► YT-Prod [TEST]              AUTO 7:07 AM
 │     └──► Favor Production YouTube    Per-service triggers
 │           9:00 AM   [UNLISTED]
 │           11:30 AM  [PUBLIC · MAIN LIVESTREAM]
 │           3:00 PM   [UNLISTED]
 │           5:30 PM   [UNLISTED]
 │
 └──► AJA Helo (10.6.33.5 · FVR MAIN)
       → app.restream.io  |  Realtime (<30 s)
       Systems ON: 7:00 AM
       ├──► Favor Production YouTube    [REHEARSAL / BACKUP]
       ├──► Favor Church Manila YouTube [UNLISTED BACKUP]
       ├──► iWantTV                     [PUBLIC · 11:30 AM SERVICE]
       └──► Facebook                    [OFF — Sundays]

CaptionKit at MC2
  Audio Board → M-Audio → CaptionKit (AI Operator manually triggers)
  9:00 AM service:   ON ~9:30 AM  / OFF ~10:30 AM
  11:30 AM service: ON ~12:00 NN / OFF ~1:00 PM
  3:00 PM service:  ON ~3:30 PM  / OFF ~4:30 PM
  5:30 PM service:  ON ~6:00 PM  / OFF ~7:00 PM
```

### Afternoon / Evening Operations

- PM runsheet huddle: **2:00 PM**
- PM all-in huddle: **2:10 PM**
- No second PM huddle before the 5:30 PM service
- 3:00 PM and 5:30 PM streams remain unlisted
- After the final service (~7:00 PM), Captain manually turns OFF Resi + Restream

---

## 7. Packdown Playbook

### Post-Service (~7:00 PM)

**Step 1 — Captain confirms streams OFF**
- Resi encoder: manual trigger OFF in `studio.resi.io`
- Restream: toggle OFF all channels in `app.restream.io`
- AI Translations: CaptionKit closed after the final-service OFF signal

**Step 2 — Post-service huddle** (5–10 min)
- Brief debrief: what went well, what broke, shout-outs
- Captain notes any issues for follow-up

**Step 3 — CRTVS area: last to pack**
- CRTVS machines are still uploading service footage after the service ends
- Do NOT disconnect power or Ethernet from the CRTVS position until upload is confirmed complete
- Asst Captain confirms with CRTVS team before giving the all-clear to that area

**Step 4 — Cable collection**
- Cable (Packdown) leads; Cable Asst ×2 retrieves cables from far positions
- Coil using over-under method; place in Box 1

**Step 5 — Mesh node retrieval**
- Runner/Speedtester and Asst Captain retrieve all X50 nodes
- Count all nodes before packing (check against [§9 Equipment](#9-equipment) — 7 nodes for Ynares, 2 for Metrotent)

**Step 6 — CCTV packdown**
- CCTV volunteer retrieves all Tapo C200C cameras
- Confirm cameras show offline in Tapo app before packing

**Step 7 — AI Operator packdown**
- Disconnect M-Audio and printer cable from MC2
- Confirm CaptionKit session closed

**Step 8 — Tetris Master: final inventory**
- Pack all remaining gear into boxes (see §9)
- Perform item-by-item audit against box inventory
- Flag any missing items to Captain before leaving
- Boxes sealed and stored

---

## 8. Troubleshooting

**General principle — diagnose bottom-up:**

```
Power → Physical link lights → IP reachability → App/platform → Content
```

When in doubt: restart the device, wait 60 seconds, re-test. Most issues are physical (loose cable, unplugged node, wrong network).

---

### Playbook A — Starlink Down

**Symptoms:** No internet on FVR MAIN; speedtest = 0; Starlink app shows error.

1. Check Starlink app (`net@favor.church` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)) — is there an outage notice?
2. Check physical cable from Starlink dish to ASUS ROG Rapture WAN port — any damage or loose connection?
3. Power cycle Starlink (unplug, wait 30 s, replug); wait 2 min for reconnect
4. Re-run speedtest — is it recovering?
5. If still down: fail over to PLDT JIREH (FVR JIREH — already feeds Rapture as WAN 2; confirm it's active in ASUS admin panel `10.6.33.1`)
6. Re-run speedtest; confirm ≥80 Mbps on failover
7. Alert Captain; document in post-service debrief

---

### Playbook B — Resi / AJA Not Streaming

**Symptoms:** The active service stream is not live by its expected-live time; Resi dashboard shows no signal.

**Check Resi Encoder:**
1. Access `studio.resi.io` (`tech@favor.church` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0))
2. Confirm encoder status = "Connected"
3. Check PLDT RESI router (10.2.1.1) — is it online? The Resi Encoder connects via FVR RESI, not the main switch
4. If unreachable: check Ethernet cable from PLDT RESI router to encoder; confirm the cable is seated and the router's LAN port has a green link light
6. Power cycle Resi encoder; wait 90 s; re-check

**If Resi cannot recover by the service-specific AJA contingency time:**
7. Captain triggers AJA Backup Streams in Restream dashboard for the active service
8. Stream Comms notifies all 4 GCs immediately

**Check AJA Helo:**
1. Ping AJA from a laptop on FVR MAIN: `ping 10.6.33.5`
2. Confirm Restream is receiving signal: `app.restream.io` → AJA Helo source status
3. If AJA not connecting: power cycle AJA Helo; wait 60 s; confirm Restream receives signal

---

### Playbook C — Mesh Offline / Slow Zone

**Symptoms:** One area reports no WiFi or speed < 80 Mbps at that position.

1. Identify which X50 node serves the area (see [§10 Venue Diagrams](#10-venue-diagrams))
2. Check node LED: solid blue = good; red/amber/off = problem
3. In TP-Link Deco app (`net@favor.church` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)): check node status — does it show as Ethernet-wired or wireless backhaul?
4. If wireless backhaul instead of Ethernet: check the Ethernet cable to that node; reseat if loose
5. If node is offline: power cycle it; wait 2 min for reconnect; re-check Deco app
6. Re-run speedtest at that position
7. If issue persists: move the node to a closer position and re-test; alert Asst Captain

---

### Playbook D — Slow Speedtest (<80 Mbps)

**Symptoms:** fast.com shows < 80 Mbps during pre-service check or live service.

1. Confirm test is LAN-wired (not WiFi) — WiFi must be OFF on test device
2. Check if large uploads are running (CRTVS upload, Resi upload) — ask CRTVS to pause during critical pre-service window if possible
3. Check Starlink app for congestion or throttling notice
4. Check ASUS admin panel (10.6.33.1) for unusual client count or bandwidth hog
5. If LAN speed cannot be recovered: confirm streaming devices can failover to PLDT JIREH (WAN 2 already active on ASUS) or standalone 5G backup SSIDs
6. Alert Captain with measured speed and which connection is currently in use

---

## 9. Equipment

> Organized by storage box for audit-friendly packdown. Count items during Tetris Master's inventory pass.

### Box 1 — Cables

| Item | Qty | Notes |
|---|---|---|
| Cat6 Ethernet — long (20 m+) | 4 | Switch → Broadcast Table, Arena positions |
| Cat6 Ethernet — medium (10 m) | 4 | Switch → Resi Encoder, AJA, mesh nodes |
| Cat6 Ethernet — short (3 m) | 6 | Device connections at Broadcast Table |
| Extension cord / power strip | 3 | Broadcast Table, CRTVS position, Kids area |
| Gaffer tape / cable clips | 1 roll | Floor cable management |

### Box 2 — Networking Gear

| Item | Qty | Notes |
|---|---|---|
| ASUS ROG Rapture GT-BE98 (WiFi 7) | 1 | Main router; FVR MAIN + FVR CCTV SSIDs |
| TP-Link Deco X50 mesh nodes | 7 | Worship, CRTVS, Kids Check-in, Heroes, Royals, Babies, IEM (Ynares full setup) |
| Netgear 8-port switch | 1 | Wired distribution at Broadcast Table |
| PLDT H153 5G router (Jireh) | 1 | FVR JIREH — SIM 09645628645; WAN 2 into ASUS |
| PLDT H153 5G router (Resi) | 1 | FVR RESI — SIM 09645591755; dedicated to Resi Encoder |
| Unicom 5G router (Unicom) | 1 | FVR UNICOM — SIM 09281107622; standalone backup |
| Unicom 5G router (Shiloh) | 1 | FVR SHILOH — no SIM; standalone backup |
| Starlink Standard dish + router | 1 | WAN 1 into ASUS; deployed to optimal venue position |

### Box 3 — Streaming Gear

| Item | Qty | Notes |
|---|---|---|
| Resi Hardware Encoder | 1 | Connected via FVR RESI to PLDT H153; DHCP (no fixed IP) |
| AJA Helo | 1 | Fixed IP 10.6.33.5 via FVR MAIN; streams to Restream |
| Tapo C200C CCTV cameras | 2 | Ynares: CRTVS area + Tech area · Metrotent: CRTVS area + Prod Booth |

### AI Gear

| Item | Qty | Notes |
|---|---|---|
| M-Audio USB audio interface | 1 | MC2; CaptionKit audio input |
| USB printer cable | 1 | CaptionKit audio connection |

### Tools / Misc

| Item | Qty | Notes |
|---|---|---|
| Laptop (Troubleshooting) | 1 | Admin panel access; speedtest |
| Phone (Stream Comms) | 1 | 4 GC management |

---

## 10. Venue Diagrams

### Ynares Sports Arena (v6-2026-03-03)

**Floor plan:**

![Ynares Sports Arena floor plan v6-2026-03-03](Internet%20Schematic/floor-plans/ynares-v6-2026-03-03.png)

**Network topology diagram:**

![Ynares network topology](Internet%20Schematic/diagrams/ynares-topology.svg)

**Network topology (text):**

```
WAN Sources
  ├── Starlink ─────────────┐
  └── PLDT H153 (FVR JIREH) ┤ WAN 1 + WAN 2
                             ▼
                     ASUS ROG Rapture GT-BE98
                     FVR MAIN · 10.6.33.1 · WiFi 7
                          │
                ┌─────────┴──────────┐
                │ LAN                │ WiFi backhaul (dashed)
                ▼                    ▼
          Netgear Switch       X50 Mesh nodes (×7)
          (8-port)              ├── Worship
               │                ├── CRTVS
         ┌─────┴──────┐         ├── Kids Check-in
         ▼            ▼         ├── Heroes
      AJA Helo   Arena PCs      ├── Royals
      (10.6.33.5) ├── Propres   ├── Babies
                 └── vMix       └── IEM

Dedicated streaming path (independent):
  PLDT H153 (FVR RESI) ──direct──► Resi Encoder (DHCP)

Standalone backup SSIDs (independent from main network):
  ├── Unicom 5G (FVR UNICOM) — SIM 09281107622
  └── Unicom 5G (FVR SHILOH) — no SIM
```

---

### Metrotent (v2026-01-16)

**Floor plan:**

![Metrotent floor plan v2026-01-16](Internet%20Schematic/floor-plans/metrotent-v2026-01-16.png)

**Network topology diagram:**

![Metrotent network topology](Internet%20Schematic/diagrams/metrotent-topology.svg)

**Network topology (text):**

```
WAN Sources
  ├── Starlink ─────────────┐
  └── PLDT H153 (FVR JIREH) ┤ WAN 1 + WAN 2
                             ▼
                     ASUS ROG Rapture GT-BE98
                     FVR MAIN · 10.6.33.1 · WiFi 7
                          │
                ┌─────────┴──────────┐
                │ LAN                │ WiFi backhaul
                ▼                    ▼
          Network Switch       X50 Mesh nodes (×2)
               │                ├── CRTVS / VIP 2
               ▼                └── Babies
          AJA Helo (10.6.33.5)

Dedicated streaming path (independent):
  PLDT H153 (FVR RESI) ──direct──► Resi Encoder (DHCP)
```

---

### Archived Layouts

Deprecated floor plans are in [`Internet Schematic/floor-plans/archive/`](Internet%20Schematic/floor-plans/archive/). See [`Internet Schematic/README.md`](Internet%20Schematic/README.md) for slide-by-slide migration notes.

---

## 11. Credentials

> **Active as of 2026-10-04.** Passwords rotate periodically. When a rotation happens, the Captain shares updated credentials with relevant staff and volunteers. Update this file and add a line to the version history when you receive a rotation notice.

### WiFi SSIDs

| SSID | Password | Device | Notes |
|---|---|---|---|
| FVR MAIN | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | ASUS ROG Rapture | Main network (WiFi 7) |
| FVR KIDS | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | TP-Link X50 | Access point — extends FVR MAIN |
| FVR CRTVS SOCIALS | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | TP-Link X50 | Access point — extends FVR MAIN |
| FVR CCTV | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | ASUS ROG Rapture | Same device as FVR MAIN |
| Favor Starlink | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Starlink router | ₱3,800/mo |
| FVR JIREH | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | PLDT H153 | 5G · SIM 09645628645 · ₱999/mo |
| FVR RESI | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | PLDT H153 | 5G · SIM 09645591755 · ₱999/mo · dedicated to Resi Encoder |
| FVR UNICOM | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Unicom 5G | SIM 09281107622 · ₱499 Magic Data |
| FVR SHILOH | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Unicom 5G | No SIM · ₱499 Magic Data slot |
| ~~FVR PROD WORSHIP~~ | — | — | **DEPRECATED** |
| ~~FVR STAFF~~ | — | — | **DEPRECATED** |

### Router Admin Panels

| Device | IP | Username | Password | Notes |
|---|---|---|---|---|
| ASUS ROG Rapture (FVR MAIN + FVR CCTV) | 10.6.33.1 | `favor` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | WiFi 7 main router |
| PLDT H153 — Jireh | 10.3.1.1 | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | WAN 2 into ASUS |
| PLDT H153 — Resi | 10.2.1.1 | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Dedicated to Resi Encoder |
| Unicom 5G — FVR UNICOM | 10.102.0.1 | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Standalone backup |
| Unicom 5G — FVR SHILOH | 10.101.0.1 | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Standalone backup (no SIM) |
| ~~Load Balancer (TP-Link ER605)~~ | ~~10.100.0.1~~ | ~~`favor`~~ | ~~[********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)~~ | **DEPRECATED** |

### App Logins

| App | Username | Password | Notes |
|---|---|---|---|
| TP-Link Deco / Tapo | `net@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Tapo C200C = CCTV cameras |
| Starlink | `net@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | 2FA → tech@favor.church → Rico |
| CaptionKit | `shared@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [captionkit.io](https://captionkit.io) · AI Operator login |
| Restream | `socialmedia@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | AJA Helo destination |
| Resi | `tech@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Resi Encoder · studio.resi.io |
| YouTube (main) | `favorchurchsocmed@gmail.com` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | 2FA: Marketing, Tali, Em, Mica, Rico |

### Password Rotation Policy

Passwords rotate periodically. The **Captain** is responsible for sharing updated credentials with relevant staff and volunteers when a rotation happens. When you receive a rotation notice:
1. Update the relevant row(s) in this section
2. Add a line to the version history in [§12](#12-appendix) with the date and what changed (no need to list the new password in the history)
3. Notify relevant team members via GC

---

## 12. Appendix

### Glossary

| Term | Meaning |
|---|---|
| **Resi** | Church streaming platform (formerly Subsplash). The hardware Resi Encoder encodes the live feed and sends it to `studio.resi.io` for distribution to YouTube. |
| **AJA Helo** | Hardware streaming encoder from AJA. Sends a realtime stream (<30 s delay) to Restream via FVR MAIN. |
| **Restream** | `app.restream.io` — multi-destination streaming platform. Receives AJA's stream and distributes simultaneously to YouTube, Facebook, iWantTV. |
| **CaptionKit** | AI-powered live translation / captioning platform used by the AI Operator at MC2. Audio routes through the M-Audio interface; access via [captionkit.io](https://captionkit.io). |
| **X50 / Mesh** | TP-Link Deco X50 WiFi 6 mesh nodes. Extend FVR MAIN wireless coverage across the venue. Best on wired Ethernet backhaul. |
| **ASUS ROG Rapture** | ASUS ROG Rapture GT-BE98 — main WiFi 7 router. Hosts FVR MAIN and FVR CCTV. IP: 10.3.66.1. Accepts WAN 1 (Starlink) and WAN 2 (PLDT JIREH). |
| **PLDT JIREH** | PLDT 5G H153 router; WAN 2 input into the ASUS Rapture. SIM 09645628645. |
| **PLDT RESI** | PLDT 5G H153 router; connects directly and exclusively to the Resi Encoder — independent of the main network. SIM 09645591755. |
| **Load Balancer** | TP-Link ER605 — **DEPRECATED**. Was used to balance multiple WAN connections. No longer in use. |
| **iWantTV** | Philippine streaming platform. Public broadcast destination. Receives stream via Oven Media Engine. |
| **Oven Media Engine** | Open-source media server handling iWantTV stream relay. |
| **Favor Production** | Main YouTube channel for live service streams. Unlisted on Sundays. |
| **Favor Church Manila** | Backup YouTube channel. Unlisted, normal latency. |
| **GC** | Group Chat (Viber). The team uses 4 GCs for stream comms. |
| **MC2** | AI Operator position — the second control station near production. |
| **Magic Data** | Prepaid mobile data plan used by FVR UNICOM and FVR SHILOH (Unicom 5G routers). |
| **Broadcast Table** | The main production table where the Captain, Stream Op, and core stream equipment are positioned. |

---

### Version History

| Version | Date | Changes |
|---|---|---|
| v1.0 | 2026-05-24 | Initial creation. Full migration from Google Slides + Sheets. All credentials reconciled. 9 SETUP + 6 PACKDOWN roles documented. Topology corrected: JIREH = WAN 2 into ASUS; RESI = direct to Resi Encoder. |
| v1.1 | 2026-10-04 | Updated Crowne Sunday service cadence, captain/volunteer call times, AM/PM huddles, per-service streaming windows, and live translation workflow to CaptionKit. |

---

*Maintained by the Favor Manila Internet Team · Questions → Captain*
