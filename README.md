# Favor Manila Internet Team — Master SOP

> **Single source of truth** as of 2026-05-24.  
> Replaces: Internet Schematic Google Slides · Passwords Google Sheet  
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

This document is the one place that has everything: roles, schedules, playbooks, credentials, floor plans. If you're a new volunteer figuring out what your role actually means, start here. If you're a Captain setting up for a 6 AM Sunday, start here. If something's broken and you need to fix it fast, go to §8.

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
5. **Attendance** — Be on time for call time (6:00 AM). Late arrival without notice is noted.

### First-Sunday Checklist

For new volunteers on their first rostered Sunday:

- [ ] Arrive by 6:00 AM
- [ ] Find the Captain at setup or text them when you arrive
- [ ] Listen closely at the 9:00 AM all-in huddle — the Captain walks through any changes
- [ ] Follow your role's duty list in §4
- [ ] Ask your buddy or the Captain if anything is unclear — no question is dumb on Day 1

---

## 3. Schedule

### Morning Service (10 AM)

| Time | Event |
|---|---|
| 6:00 AM | Team gather. Cable runs begin. Mesh nodes placed. Early setup huddle. |
| 7:00 AM | **Captain**: toggle Restream ON. Favor Production = unlisted. |
| 7:07 AM | Resi TEST stream auto-trigger (2–5 min delay; 1-hr test duration — expected, not an error). |
| 7:30 AM | **Deadline**: AJA Restream link sent to STREAM ASSIST TEAM GC. |
| 8:45 AM | Captain at worship/production runsheet huddle. |
| 9:00 AM | All-in huddle — full Internet Team. |
| 9:15 AM | iWantTV stream live via Oven Media Engine. |
| 9:45 AM | **Captain**: send Favor Production YT link to STREAM ASSIST TEAM GC. Visibility: Favor Production = unlisted · Favor Church Manila = unlisted backup · iWantTV = public · Facebook = OFF. |
| 9:48 AM | Resi LIVE auto-trigger. |
| 9:50 AM | Resi live with 2–5 min buffer delay. |
| 9:55 AM | **IF RESI NOT LIVE** → Captain triggers AJA Backup Streams; Stream Comms alerts all 4 GCs. |
| 10:00 AM | Morning service starts. |
| ~10:30 AM | **Captain signal**: AI Operator triggers AI Translations ON (MC2 / SPF.IO). |
| ~11:30 AM | **Captain signal**: AI Operator triggers AI Translations OFF (before ministry time). |
| ~12:00 NN | Service ends. **Captain**: manual trigger OFF Resi encoder + Restream (all channels). |

### Afternoon Service (4 PM — live, unlisted)

| Time | Event |
|---|---|
| 1:30 PM | Captain solo arrival. Toggle Favor Production unlisted ON. Send link to STREAM ASSIST TEAM GC. Speedtest all areas (≥80 Mbps, LAN-wired, WiFi OFF). |
| 2:45 PM | Captain at afternoon runsheet huddle. |
| 3:00 PM | All-in huddle (afternoon team). |
| 4:00 PM | Afternoon service starts. Resend stream link to STREAM ASSIST TEAM GC during pre-roll. |
| ~4:30 PM | **Captain signal**: AI Operator triggers AI Translations ON. |
| ~5:30 PM | **Captain signal**: AI Operator triggers AI Translations OFF. |
| ~6:00 PM | Afternoon service ends. **Captain**: manual trigger OFF Resi encoder + Restream. |
| Post-service | Post-service huddle, then packdown. CRTVS area last (still uploading). |

### Other Events

Same SOP applies with a lean roster. The Captain confirms required roles per event — not all 15 roles are needed for smaller venues or special services. Captain specifies who's on for each event.

---

## 4. Roles

### Setup Roles (9)

---

#### Captain

The Captain owns the Sunday. They are the last decision-maker for all stream, network, and team issues. They run the 9:00 AM and 3:00 PM huddles, handle all stream toggle actions, and are the escalation point for every role on the team.

**Duties:**
- Arrive at 6:00 AM; begin setup oversight
- Toggle Restream ON at 7:00 AM (Favor Production = unlisted)
- Send AJA link to STREAM ASSIST TEAM GC by 7:30 AM
- Attend runsheet huddle at 8:45 AM
- Run all-in huddle at 9:00 AM
- Send Favor Production YT link to GC at 9:45 AM; confirm stream visibility
- Monitor Resi auto-trigger at 9:48–9:50 AM; trigger AJA backup if Resi not live by 9:55 AM
- Signal AI Operator: Translations ON (~10:30 AM) and OFF (~11:30 AM)
- Manual trigger OFF: Resi encoder + Restream at service end
- Solo arrival at 1:30 PM for afternoon service; run full afternoon toggle sequence
- Escalation point for all troubleshooting — final call on any network or stream decision

**Hands off to:** Asst Captain for venue-floor coverage while Captain is at Broadcast Table.

---

#### Asst Captain

The Asst Captain is the Captain's eyes and ears across the venue floor. They handle field issues — slow zones, disconnected devices, mesh node problems — so the Captain can stay focused on the stream console.

**Duties:**
- Arrive at 6:00 AM; assist with mesh node placement and cable route decisions
- Receive and act on speedtest results from the Runner/Speedtester
- Escalate network issues to Captain with context (location, device, symptom)
- Cover Captain's floor presence during critical stream windows (9:45–10:05 AM)
- Be reachable on GC throughout both services

**Hands off to:** Captain for all stream-critical decisions.

---

#### Stream Op

The Stream Op monitors the live stream quality throughout both services. They watch the Resi encoder, Restream dashboard, and YouTube/iWantTV outputs, and immediately alert the Captain if anything drops or degrades.

**Duties:**
- Confirm Resi encoder is online and receiving signal before 9:48 AM auto-trigger
- Monitor Favor Production YouTube after go-live; watch for buffering or quality alerts
- Watch Restream dashboard for destination status
- Alert Captain immediately if any destination drops
- Monitor AI Translations feed during translation window

**Hands off to:** Captain for all toggle decisions — Stream Op monitors, Captain acts.

---

#### Troubleshooting

The Troubleshooting volunteer is the technical first-responder for network issues during the service. They know the IP scheme, router admin panels, and mesh topology, and can diagnose problems without escalating everything to the Captain.

**Duties:**
- Memorize IP scheme before Sunday (see §11 Credentials)
- During setup: verify all routers and mesh nodes are online
- During service: respond to Asst Captain's field reports; access admin panels to diagnose
- Log any resolved or unresolved issues for post-service debrief
- Reference §8 Troubleshooting playbooks

**Hands off to:** Captain if issue cannot be resolved within 5 minutes.

---

#### Runner / Speedtester

The Runner is the team's physical logistics link. They carry cables and gear between areas, run speedtests across the venue, and stay mobile throughout the service.

**Duties:**
- Arrive at 6:00 AM; assist with cable carries and mesh node transport
- Run speedtest at every mesh node position before 9:45 AM (minimum ≥80 Mbps on LAN-wired connection; WiFi must be OFF during test)
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
- At 9:45 AM: Send Favor Production YT link to STREAM ASSIST TEAM GC; forward to other GCs as needed
- At 9:55 AM (if Resi backup triggered): alert all 4 GCs immediately
- During service: relay stream quality updates; flag any viewer-reported issues to Stream Op

**Hands off to:** Captain for any decisions triggered by GC reports.

---

#### Cable Hands

The Cable Hands volunteer lays all data and power cables across the venue during setup. They ensure every cable run is clean, taped down, and live before the service starts.

**Duties:**
- Arrive at 6:00 AM
- Lay and label all Ethernet runs from switch to fixed positions (Broadcast Table, Arena PCs, Resi encoder)
- Tape down and manage all cable runs in public walking areas (trip hazards = incident)
- Confirm all wired connections show green link lights before 9:00 AM
- During packdown: collect and coil all cables; store in Box 1 (see §9 Equipment)

> **Note:** Cable Hands and CCTV are two separate roles. Do not double-assign.

---

#### CCTV

The CCTV volunteer sets up and monitors the Tapo C200C cameras connected to the FVR CCTV network.

**Duties:**
- Arrive at 6:00 AM; retrieve CCTV cameras from storage
- Connect each Tapo C200C to FVR CCTV ([********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)); confirm feeds in the Tapo app (`net@favor.church` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0))
- Position cameras per the Captain's direction for the venue
- During packdown: retrieve cameras, confirm offline in Tapo app, store in equipment box

> **Note:** CCTV and Cable Hands are separate roles. Do not double-assign.

---

#### AI Operator

The AI Operator runs SPF.IO live translation, providing real-time translated subtitles during the sermon. The connection requires physical hardware at MC2.

**Duties:**
- Before service: connect M-Audio USB audio interface at MC2; connect printer cable to SPF.IO input
- Confirm SPF.IO login: `tech@favor.church` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0); confirm audio signal is routing correctly
- At Captain's signal (~10:30 AM): manually trigger AI Translations ON
- At Captain's signal (~11:30 AM, before ministry time): manually trigger AI Translations OFF
- During packdown: disconnect M-Audio and printer cable; store in equipment box

---

### Packdown Roles (6)

---

#### Captain *(Packdown)*

Oversees full packdown. Confirms all streams are OFF before packdown begins. Runs post-service huddle. Signs off on Tetris Master's equipment audit.

**Duties:**
- Confirm Resi encoder and Restream are both OFF after service ends
- Run post-service huddle (5–10 min debrief; shout-outs; issues log)
- Confirm CRTVS area stays active until upload is complete before giving the all-clear
- Sign off on Tetris Master's inventory check before anyone leaves

---

#### Cable *(Packdown)*

Leads cable collection during packdown.

**Duties:**
- Collect all Ethernet cables from switch positions and venue runs
- Coil cables correctly (over-under method); label if needed
- Store in Box 1 per §9 Equipment inventory

---

#### Cable Asst ×2 *(Packdown)*

Two assistants supporting the Cable lead. They retrieve cables from distant positions (mesh node locations, far stage runs) and bring them to the Cable lead for coiling.

---

#### Tetris Master *(Packdown)*

Packs all equipment into storage boxes and performs the end-of-day inventory audit.

**Duties:**
- Pack all gear into boxes per §9 inventory list
- Perform item-by-item audit against the box inventory
- Flag any missing items to the Captain before anyone leaves
- Confirm all boxes are sealed and stored correctly

---

#### AI Operator *(Packdown)*

Same volunteer as the setup AI Operator.

**Duties:**
- Disconnect M-Audio interface and printer cable from MC2
- Confirm SPF.IO session is closed / logged out
- Store hardware in the designated equipment box

---

## 5. Setup Playbook

### 6:00 AM — Gather

- [ ] Full team arrival confirmed via GC
- [ ] Retrieve all equipment boxes from storage
- [ ] Begin cable runs: Switch → Broadcast Table, Switch → Arena PCs, Switch → Resi Encoder
- [ ] Asst Captain assigns mesh node positions per venue layout (see §10)
- [ ] CCTV: cameras out, connecting to FVR CCTV
- [ ] AI Operator: M-Audio and printer cable to MC2, SPF.IO login confirmed

### 7:00 AM — Stream Systems Up

- [ ] **Captain**: toggle Restream ON; Favor Production = unlisted
- [ ] Confirm AJA Helo is receiving signal (green link light; IP visible in ASUS admin panel)
- [ ] Confirm Resi Encoder is online (`studio.resi.io`)
- [ ] *Note: Resi TEST stream auto-fires at 7:07 AM — expected, not an error*

### 7:30 AM — AJA Link Deadline

- [ ] **Captain**: send AJA Restream link to STREAM ASSIST TEAM GC
- [ ] **Stream Comms**: confirm message sent; forward to other GCs as appropriate

### 8:45 AM — Runsheet Huddle

- [ ] Captain attends worship/production runsheet huddle
- [ ] Asst Captain holds the floor

### 9:00 AM — All-In Huddle

- [ ] Full Internet Team gathers
- [ ] Captain confirms: stream status, any issues to watch, role reminders
- [ ] All volunteers confirm ready

### 9:00–9:45 AM — Final Checks

- [ ] **Runner/Speedtester**: test every mesh zone (≥80 Mbps on LAN-wired; WiFi OFF during test)
- [ ] Speedtest results reported to Asst Captain via GC
- [ ] **Computer checklist**: verify all Deco/X50 units show "Ethernet" (not wireless backhaul)
- [ ] Confirm Arena PC (Propres) and Arena PC (vMix/Switcher) are on wired connections (WiFi OFF)
- [ ] Go to [fast.com](https://fast.com) from a wired device; confirm ≥80 Mbps

### 9:15 AM

- [ ] iWantTV stream live via Oven Media Engine

### 9:45 AM — Pre-Service Final

- [ ] **Captain**: send Favor Production YT link to STREAM ASSIST TEAM GC
- [ ] Stream visibility confirmed: Favor Production = unlisted · Favor Church Manila = unlisted backup · iWantTV = public · Facebook = OFF
- [ ] **Stream Comms**: forward to Tech x Socials and Kids x Tech x Babies GCs

### 9:48 AM

- [ ] Resi LIVE auto-trigger fires
- [ ] **Stream Op**: confirm Resi stream visible in `studio.resi.io`

### 9:50 AM

- [ ] Resi should be live (accounting for 2–5 min buffer delay)
- [ ] **Stream Op**: confirm YouTube Production shows live stream

### 9:55 AM — Contingency Window

- [ ] **IF Resi NOT live**: Captain triggers AJA Backup Streams immediately
- [ ] **Stream Comms**: alert all 4 GCs

### 10:00 AM — Service Starts

- [ ] All positions held; Stream Op monitoring; Troubleshooting on standby

---

## 6. Stream Toggle Sequence

### Timing Table

See full schedule in §3. Key toggle moments:

| Time | Action | Who |
|---|---|---|
| 7:00 AM | Restream ON · Favor Production unlisted | Captain |
| 7:30 AM | Send AJA link to STREAM ASSIST TEAM GC | Captain / Stream Comms |
| 9:15 AM | iWantTV live | Oven Media Engine (auto) |
| 9:45 AM | Send Favor Production YT link to GC | Captain |
| 9:48 AM | Resi auto-trigger (LIVE) | Resi (auto) |
| 9:55 AM | AJA Backup if Resi not live | Captain |
| ~10:30 AM | AI Translations ON | AI Operator (Captain signal) |
| ~11:30 AM | AI Translations OFF | AI Operator (Captain signal) |
| ~12:00 NN | Resi OFF + Restream OFF | Captain |

### Stream Destinations Matrix

| Destination | Path | Visibility | Default State | Notes |
|---|---|---|---|---|
| YT-Prod TEST | Resi → studio.resi.io | — | AUTO 7:07 AM | 1-hr test stream, 2–5 min delay |
| Favor Production YouTube | Resi → studio.resi.io | **Unlisted** | AUTO 9:48 AM | Main live stream; 2–5 min buffer |
| Facebook | Resi → studio.resi.io | — | **OFF — Sundays** | In Resi config; Captain enables only if needed |
| Favor Church Manila YouTube | AJA → Restream | **Unlisted** | ON 9:45 AM | YT-Backup; 30 s stream |
| Favor Production YouTube | AJA → Restream | — | ON 7:30 AM / 9:45 AM | YT-Prod realtime; used for rehearsals/preview |
| iWantTV | AJA → Restream → Oven Media Engine | **Public** | ON 9:20 AM | 4 s test trigger; then live |
| Facebook | AJA → Restream | — | **OFF — Sundays** | Backup only; Captain triggers if Resi down |

### Resi Stream Metadata (YouTube / Facebook)

Use the following when creating or updating the YouTube / Facebook stream destination in `studio.resi.io`:

| Field | Value |
|---|---|
| **Title** | `Join us LIVE now at Favor Church!` |
| **Description** | See block below |

**Description (copy-paste):**

```
If you have any prayer requests, want to submit a testimony or want to know what your next step is after praying the salvation prayer, head to our website through the link in our bio!

__

📱CONNECT WITH US:
Instagram: @favor.mnl
Threads: @favor.mnl
Twitter/X: @favor_mnl

__
#favorchurch
#churchforimperfectpeople
#thefamilyyouvebeenlookingfor
```

### Stream Diagram

![Stream diagram](Internet%20Schematic/diagrams/stream-diagram.svg)

**ASCII version:**

```
Broadcast Switcher (vMix / Tricaster)
 │
 ├──► Resi Encoder (DHCP)  ←── [PLDT RESI — dedicated connection]
 │     → studio.resi.io  |  2–5 min buffer
 │     ├──► YT-Prod [TEST]              AUTO 7:07 AM  (1 hr)
 │     ├──► Favor Production YouTube    [UNLISTED · MAIN]  AUTO 9:48 AM  (live ~9:53 AM)
 │     └──► Facebook                   [OFF — Sundays]    AUTO 9:48 AM  (in config; disabled)
 │
 └──► AJA Helo (10.6.33.5 · FVR MAIN)
       → app.restream.io  |  Realtime (<30 s)
       ON: 7:00 AM
       ├──► Favor Church Manila YouTube [UNLISTED · Backup]  9:45 AM  (30 s)
       ├──► Favor Production YouTube    [REHEARSALS/Preview] 7:30 AM / 9:45 AM  (realtime)
       ├──► iWantTV                     [PUBLIC]             9:20 AM  (4 s test → live)
       └──► Facebook                   [OFF — Sundays]      Backup only

AI Translations (SPF.IO) at MC2
  Audio Board → M-Audio → SPF.IO (AI Operator manually triggers)
  ON:  ~10:30 AM  (Captain signal)
  OFF: ~11:30 AM  (Captain signal, before ministry time)
```

### Afternoon Service (4 PM)

- Captain solo at 1:30 PM: toggle Favor Production unlisted ON, send link to GC, speedtest all areas
- 4:00 PM: resend stream link to STREAM ASSIST TEAM GC during pre-roll
- AI Translations: ON ~4:30 PM / OFF ~5:30 PM
- Service ends ~6:00 PM: Captain triggers Resi OFF + Restream OFF

---

## 7. Packdown Playbook

### Post-Service (~6:00 PM)

**Step 1 — Captain confirms streams OFF**
- Resi encoder: manual trigger OFF in `studio.resi.io`
- Restream: toggle OFF all channels in `app.restream.io`
- AI Translations: SPF.IO closed (should already be OFF from ~5:30 PM signal)

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
- Count all nodes before packing (check against §9 Equipment — 7 nodes for Ynares, 2 for Metrotent)

**Step 6 — CCTV packdown**
- CCTV volunteer retrieves all Tapo C200C cameras
- Confirm cameras show offline in Tapo app before packing

**Step 7 — AI Operator packdown**
- Disconnect M-Audio and printer cable from MC2
- Confirm SPF.IO session closed

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
5. If still down: fail over to PLDT JIREH (FVR JIREH — already feeds Rapture as WAN 2; confirm it's active in ASUS admin panel `10.3.66.1`)
6. Re-run speedtest; confirm ≥80 Mbps on failover
7. Alert Captain; document in post-service debrief

---

### Playbook B — Resi / AJA Not Streaming

**Symptoms:** YouTube Production not live after 9:50 AM; Resi dashboard shows no signal.

**Check Resi Encoder:**
1. Access `studio.resi.io` (`tech@favor.church` / [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0))
2. Confirm encoder status = "Connected"
3. Check PLDT RESI router (10.2.1.1) — is it online? The Resi Encoder connects via FVR RESI, not the main switch
4. If unreachable: check Ethernet cable from PLDT RESI router to encoder; confirm the cable is seated and the router's LAN port has a green link light
6. Power cycle Resi encoder; wait 90 s; re-check

**If Resi cannot recover within 5 min:**
7. Captain triggers AJA Backup Streams in Restream dashboard
8. Stream Comms notifies all 4 GCs immediately

**Check AJA Helo:**
1. Ping AJA from a laptop on FVR MAIN: `ping 10.6.33.5`
2. Confirm Restream is receiving signal: `app.restream.io` → AJA Helo source status
3. If AJA not connecting: power cycle AJA Helo; wait 60 s; confirm Restream receives signal

---

### Playbook C — Mesh Offline / Slow Zone

**Symptoms:** One area reports no WiFi or speed < 80 Mbps at that position.

1. Identify which X50 node serves the area (see §10 Venue Diagrams)
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
4. Check ASUS admin panel (10.3.66.1) for unusual client count or bandwidth hog
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
| M-Audio USB audio interface | 1 | MC2; SPF.IO audio input |
| USB printer cable | 1 | SPF.IO audio connection |

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
                     FVR MAIN · 10.3.66.1 · WiFi 7
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
                     FVR MAIN · 10.3.66.1 · WiFi 7
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

> **Active as of 2026-05-24.** Passwords rotate periodically. When a rotation happens, the Captain shares updated credentials with relevant staff and volunteers. Update this file and add a line to the version history when you receive a rotation notice.

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
| ASUS ROG Rapture (FVR MAIN + FVR CCTV) | 10.3.66.1 | `favor` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | WiFi 7 main router |
| PLDT H153 — Jireh | 10.3.1.1 | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | WAN 2 into ASUS |
| PLDT H153 — Resi | 10.2.1.1 | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Dedicated to Resi Encoder |
| Unicom 5G — FVR UNICOM | 10.101.0.1 | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Standalone backup |
| Unicom 5G — FVR SHILOH | 10.101.0.1 | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Standalone backup (no SIM) |
| ~~Load Balancer (TP-Link ER605)~~ | ~~10.100.0.1~~ | ~~`favor`~~ | ~~[********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)~~ | **DEPRECATED** |

### App Logins

| App | Username | Password | Notes |
|---|---|---|---|
| TP-Link Deco / Tapo | `net@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Tapo C200C = CCTV cameras |
| Starlink | `net@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | 2FA → tech@favor.church → Rico |
| SPF.IO | `tech@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | AI Operator login |
| Restream | `socialmedia@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | AJA Helo destination |
| Resi | `tech@favor.church` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | Resi Encoder · studio.resi.io |
| YouTube (main) | `favorchurchsocmed@gmail.com` | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | 2FA: Marketing, Tali, Em, Mica, Rico |

### Password Rotation Policy

Passwords rotate periodically. The **Captain** is responsible for sharing updated credentials with relevant staff and volunteers when a rotation happens. When you receive a rotation notice:
1. Update the relevant row(s) in this section
2. Add a line to the version history in §12 with the date and what changed (no need to list the new password in the history)
3. Notify relevant team members via GC

---

## 12. Appendix

### Glossary

| Term | Meaning |
|---|---|
| **Resi** | Church streaming platform (formerly Subsplash). The hardware Resi Encoder encodes the live feed and sends it to `studio.resi.io` for distribution to YouTube. |
| **AJA Helo** | Hardware streaming encoder from AJA. Sends a realtime stream (<30 s delay) to Restream via FVR MAIN. |
| **Restream** | `app.restream.io` — multi-destination streaming platform. Receives AJA's stream and distributes simultaneously to YouTube, Facebook, iWantTV. |
| **SPF.IO** | AI-powered live translation tool. Runs at MC2 via M-Audio interface. Provides real-time translated subtitles for the sermon. |
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

### Migration Notes

This masterfile was created **2026-05-24** to consolidate and replace:

| Source | ID / Location | Status |
|---|---|---|
| Internet Schematic Google Slides | `1uGVDMJ8plObs9qfFBCXS6T3lSvJkxe-YSK6cTVcoZII` | **DEPRECATED** — PDF preserved in `Internet Schematic/internet-schematic-slides.pdf` |
| Passwords Google Sheet | `1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o` | **DEPRECATED** — all credentials migrated to §11 |
| Tech Sunday Checklist PDF | `Tech Sunday Checklist.pdf` (local) | Kept as historical reference |

**Inconsistencies resolved during migration (user-confirmed):**

| Item | Slides value | Sheet value | Authoritative (this file) |
|---|---|---|---|
| FVR MAIN password | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | **[********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)** |
| FVR CRTVS SOCIALS password | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) (old SSID name) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | **[********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)** |
| FVR KIDS password | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | [********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0) | **[********](https://docs.google.com/spreadsheets/d/1tNCQqS9vz9uSEQTAPdAlrHpOCR1E-s07DiRClT66s3o/edit?gid=0#gid=0)** |
| Main router | TP-Link (slides) | ASUS ROG Rapture (sheet) | **ASUS ROG Rapture GT-BE98** |
| FVR PROD WORSHIP | Listed as active | — | **DEPRECATED** |
| FVR STAFF | Listed as active | — | **DEPRECATED** |
| Load Balancer (TP-Link ER605) | Listed as admin | Listed as admin | **DEPRECATED** |
| Network topology — JIREH | Shown as standalone 5G | — | **WAN 2 input into ASUS Rapture** |
| Network topology — RESI | Shown as standalone 5G | — | **Direct connection to Resi Encoder** |

---

### Version History

| Version | Date | Changes |
|---|---|---|
| v1.0 | 2026-05-24 | Initial creation. Full migration from Google Slides + Sheets. All credentials reconciled. 9 SETUP + 6 PACKDOWN roles documented. Topology corrected: JIREH = WAN 2 into ASUS; RESI = direct to Resi Encoder. |

---

*Maintained by the Favor Manila Internet Team · Questions → Captain*
