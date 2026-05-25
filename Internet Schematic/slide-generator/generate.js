import pptxgen from "pptxgenjs";
import path from "path";

// Initialize Presentation
const pptx = new pptxgen();
pptx.layout = "LAYOUT_4x3"; // Set Standard 4:3 aspect ratio (10" x 7.5")

// Design Tokens (Light Mode Theme)
const COLORS = {
  bg: "FAFAFA",
  cardBg: "FFFFFF",
  cardLine: "E0E0E0",
  blue: "1A73E8",
  blueBg: "E5F1FF",
  orange: "E65100",
  orangeBg: "FFF3E0",
  red: "C62828",
  redBg: "FFEBEE",
  textDark: "12151A",
  textMuted: "7F8C8D",
  white: "FFFFFF"
};

// Helper: Create Standard Background
function setSlideBackground(slide, isDivider = false) {
  slide.background = { fill: isDivider ? COLORS.bg : COLORS.white };
}

// Helper: Add Title
function addSlideTitle(slide, text, category = "") {
  if (category) {
    slide.addText(category.toUpperCase(), {
      x: 0.5,
      y: 0.3,
      w: 9.0,
      h: 0.25,
      fontSize: 10,
      fontFace: "Outfit",
      color: COLORS.blue,
      bold: true,
      charSpacing: 2
    });
  }
  slide.addText(text, {
    x: 0.5,
    y: category ? 0.55 : 0.4,
    w: 9.0,
    h: 0.6,
    fontSize: 24,
    fontFace: "Outfit",
    color: COLORS.textDark,
    bold: true
  });
}

// Helper: Draw Card
function addCard(slide, x, y, w, h, fillType = "normal") {
  let fill = COLORS.cardBg;
  let lineColor = COLORS.cardLine;
  
  if (fillType === "blue") {
    fill = COLORS.blueBg;
    lineColor = COLORS.blue;
  } else if (fillType === "red") {
    fill = COLORS.redBg;
    lineColor = COLORS.red;
  } else if (fillType === "orange") {
    fill = COLORS.orangeBg;
    lineColor = COLORS.orange;
  }

  slide.addShape(pptx.ShapeType.rect, {
    x, y, w, h,
    fill: { color: fill },
    line: { color: lineColor, width: 1 }
  });
}

// Helper: Add Bullet List
function addBulletList(slide, items, x, y, w, h) {
  let textObjects = [];
  items.forEach((item, index) => {
    // Format text
    textObjects.push({
      text: item.text + (index === items.length - 1 ? "" : "\n"),
      options: {
        bullet: item.bullet !== false,
        bold: !!item.bold,
        color: item.color || COLORS.textDark,
        fontSize: item.fontSize || 11,
        fontFace: item.fontFace || "Inter",
        indent: item.indent || 0
      }
    });
  });
  slide.addText(textObjects, { x, y, w, h, valign: "top" });
}

// Helper: Add Card Header
function addCardHeader(slide, text, x, y, w, h = 0.4, isAlert = false) {
  slide.addText(text.toUpperCase(), {
    x, y, w, h,
    fontSize: 12,
    fontFace: "Outfit",
    bold: true,
    color: isAlert ? COLORS.red : COLORS.blue
  });
}

// Helper: Add Section Divider Slide
function addSectionDivider(pptx, moduleTitle, subtitle) {
  let slide = pptx.addSlide();
  setSlideBackground(slide, true);

  // Large decorative line
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5,
    y: 2.8,
    w: 9.0,
    h: 0.08,
    fill: { color: COLORS.blue }
  });

  // Module Title
  slide.addText(moduleTitle.toUpperCase(), {
    x: 0.5,
    y: 3.1,
    w: 9.0,
    h: 0.8,
    fontSize: 32,
    fontFace: "Outfit",
    color: COLORS.textDark,
    bold: true
  });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.5,
    y: 4.0,
    w: 9.0,
    h: 0.5,
    fontSize: 16,
    fontFace: "Inter",
    color: COLORS.textMuted
  });

  slide.notes = `We are now starting ${moduleTitle}. This section covers: ${subtitle}`;
  return slide;
}

// ==========================================
// MODULE 1: INTRODUCTION & VOLUNTEER CULTURE
// ==========================================

// Slide 1: Title Slide
{
  let slide = pptx.addSlide();
  setSlideBackground(slide, true);
  
  // Left vertical accent line
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.6, y: 2.0, w: 0.15, h: 3.5,
    fill: { color: COLORS.blue }
  });

  // Main Title
  slide.addText("FAVOR MANILA\nINTERNET TEAM", {
    x: 0.9, y: 2.0, w: 8.5, h: 1.5,
    fontSize: 36, fontFace: "Outfit", color: COLORS.textDark, bold: true
  });

  // Subtitle
  slide.addText("Master Standard Operating Procedure (SOP)", {
    x: 0.9, y: 3.7, w: 8.5, h: 0.6,
    fontSize: 18, fontFace: "Outfit", color: COLORS.textMuted
  });

  // Version Info
  slide.addText("Version 1.0 • Effective May 2026\nSingle Source of Truth", {
    x: 0.9, y: 4.6, w: 8.5, h: 0.6,
    fontSize: 12, fontFace: "Inter", color: COLORS.textMuted
  });

  slide.notes = "Welcome to the training for the Favor Manila Internet Team. This slide deck is our operational blueprint. It translates our Master SOP README into a clear walkthrough of how we keep our Sunday services running seamlessly, both in the physical room and online. Let's get started.";
}

// Slide 2: Welcome & Our Vision
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Welcome & Our Vision", "Module 1");

  // Left Column - Quote Card
  addCard(slide, 0.5, 1.3, 4.35, 5.5, "blue");
  slide.addText([
    { text: "OUR CORE MISSION:\n\n", options: { bold: true, fontSize: 13, color: COLORS.blue } },
    { text: "\"We lay the cables, place the mesh nodes, watch the stream, and make sure every person — whether in the room or watching from home — experiences the service without interruption.\"", options: { italic: true, fontSize: 15, color: COLORS.textDark } }
  ], { x: 0.8, y: 1.6, w: 3.75, h: 4.8, valign: "middle" });

  // Right Column - 3 Cards Stacked
  addCard(slide, 5.15, 1.3, 4.35, 1.7);
  addCardHeader(slide, "Behind the Scenes", 5.35, 1.45, 3.9);
  addBulletList(slide, [{ text: "We do the invisible, critical infrastructure work that keeps Sundays online.", bullet: false }], 5.35, 1.85, 3.9, 1.0);

  addCard(slide, 5.15, 3.2, 4.35, 1.7);
  addCardHeader(slide, "Single Source of Truth", 5.35, 3.35, 3.9);
  addBulletList(slide, [{ text: "This deck reflects the master README.md, replacing all deprecated slides & spreadsheets.", bullet: false }], 5.35, 3.75, 3.9, 1.0);

  addCard(slide, 5.15, 5.1, 4.35, 1.7);
  addCardHeader(slide, "Team Rosters & Hub", 5.35, 5.25, 3.9);
  addBulletList(slide, [{ text: "Roster details can always be checked at favor.church/techroster", bullet: false }], 5.35, 5.65, 3.9, 1.0);

  slide.notes = "Our team's mission is simple: keep the service connected. We are the backbone of the broadcast. If we do our jobs well, no one notices we are there — and that's the goal. Everything we cover today is synchronized with the master README.md on the team repository, which is our single source of truth.";
}

// Slide 3: Onboarding Pipeline
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "The Volunteer Onboarding Pipeline", "Module 1");

  // 2x2 Grid card layout
  // Step 1: Sign-Up
  addCard(slide, 0.5, 1.3, 4.35, 2.65);
  addCardHeader(slide, "Step 1: Sign-Up Form", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Fill out the team sign-up form.", bold: true },
    { text: "Access link from Captain or favor.church/techroster." }
  ], 0.7, 1.9, 3.95, 1.95);

  // Step 2: Interview
  addCard(slide, 5.15, 1.3, 4.35, 2.65);
  addCardHeader(slide, "Step 2: Interview", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Short conversation with Captain.", bold: true },
    { text: "Understand availability, tech comfort, and assign roles." }
  ], 5.35, 1.9, 3.95, 1.95);

  // Step 3: Shadow Sunday
  addCard(slide, 0.5, 4.15, 4.35, 2.65);
  addCardHeader(slide, "Step 3: Shadow Sunday", 0.7, 4.35, 3.95);
  addBulletList(slide, [
    { text: "Observe a full Sunday with ZERO duties.", bold: true },
    { text: "Get familiar with workflows, huddles, and ask questions." }
  ], 0.7, 4.75, 3.95, 1.95);

  // Step 4: Rostered Sunday
  addCard(slide, 5.15, 4.15, 4.35, 2.65, "blue");
  addCardHeader(slide, "Step 4: Rostered Sunday", 5.35, 4.35, 3.95);
  addBulletList(slide, [
    { text: "Active assignment with a buddy.", bold: true, color: COLORS.blue },
    { text: "Own your role and follow the SOP card.", color: COLORS.textDark }
  ], 5.35, 4.75, 3.95, 1.95);

  slide.notes = "For anyone new joining the team, we use a structured 4-step onboarding pipeline. It starts with the sign-up form, followed by an informal chat with the Captain. Step 3 is crucial: a Shadow Sunday. If you are shadowing, you have no duties; your only job is to watch the rhythm of the day. Finally, you move into active rotation on a Rostered Sunday.";
}

// Slide 4: Roster Rules of Engagement
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Roster Rules of Engagement", "Module 1");

  // 2x2 Grid Card Layout
  // Card 1: Unavailability
  addCard(slide, 0.5, 1.3, 4.35, 2.65);
  addCardHeader(slide, "1. Unavailability", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Inform the Captain at least ONE WEEK in advance if you cannot make it.", bold: true },
    { text: "Allows sufficient time to re-roster or adjust shifts." }
  ], 0.7, 1.9, 3.95, 1.95);

  // Card 2: Comm Response
  addCard(slide, 5.15, 1.3, 4.35, 2.65);
  addCardHeader(slide, "2. Communication", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Respond to Viber GC messages within 24 hours.", bold: true },
    { text: "Silence is not an answer. Clear communication keeps us aligned." }
  ], 5.35, 1.9, 3.95, 1.95);

  // Card 3: Swaps
  addCard(slide, 0.5, 4.15, 4.35, 2.65);
  addCardHeader(slide, "3. Role Swaps", 0.7, 4.35, 3.95);
  addBulletList(slide, [
    { text: "Arrange swaps directly with another rostered volunteer.", bold: true },
    { text: "Inform the Captain once confirmed. Don't leave them guessing." }
  ], 0.7, 4.75, 3.95, 1.95);

  // Card 4: Punctuality
  addCard(slide, 5.15, 4.15, 4.35, 2.65, "red");
  addCardHeader(slide, "4. Attendance & Punctuality", 5.35, 4.35, 3.95, 0.4, true);
  addBulletList(slide, [
    { text: "Call time is 6:00 AM sharp.", bold: true, color: COLORS.red },
    { text: "Arriving late without notice is logged and hurts early setup." }
  ], 5.35, 4.75, 3.95, 1.95);

  slide.notes = "To run a smooth production, we rely on mutual accountability. If you can't make it, let us know a week in advance. If you need a swap, make the swap yourself and just report the outcome. Most importantly, call time is sharp at 6:00 AM. A late arrival can delay our stream check windows.";
}

// Slide 5: First-Sunday Checklist
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Your First Sunday Checklist", "Module 1");

  // Left Column - Call Time Badge
  addCard(slide, 0.5, 1.3, 3.0, 5.5, "blue");
  slide.addText("CALL TIME\n\n6:00 AM\n\nSHARP", {
    x: 0.7, y: 1.5, w: 2.6, h: 5.1,
    fontSize: 28, fontFace: "Outfit", color: COLORS.blue, bold: true, align: "center", valign: "middle"
  });

  // Right Column - Checklist card
  addCard(slide, 3.8, 1.3, 5.7, 5.5);
  addCardHeader(slide, "Day 1 Action Items", 4.0, 1.5, 5.3);
  addBulletList(slide, [
    { text: "Arrive by 6:00 AM: Find the Captain at setup or text immediately." },
    { text: "Listen closely at the 9:00 AM Huddle: Capture venue changes or updates." },
    { text: "Follow your role SOP Card: Keep duty checklists open at all times." },
    { text: "Partner with your Buddy: Stick with your assigned experienced volunteer." },
    { text: "Ask Questions: No question is a dumb question on your first day." }
  ], 4.0, 2.0, 5.3, 4.5);

  slide.notes = "If it is your first time being rostered, do these five things. Get in early, check in with the Captain, find your assigned buddy, stay focused during the 9:00 AM huddle, and never hesitate to ask questions if something is unclear.";
}

// ==========================================
// MODULE 2: TEAM ROLES & DUTIES
// ==========================================
addSectionDivider(pptx, "Module 2: Team Roles & Duties", "Setup Roles (9) and Packdown Roles (6)");

// Slide 6: Role Overview
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Setup vs. Packdown Roles", "Module 2");

  // Two columns
  // Left: Setup Roles
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Setup Roles (9 Positions)", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Captain", bold: true }, { text: "Operations lead and toggle execution." },
    { text: "Asst Captain", bold: true }, { text: "Floor management and field diagnostics." },
    { text: "Stream Op", bold: true }, { text: "Live feed quality and encoder monitoring." },
    { text: "Troubleshooting", bold: true }, { text: "Network support and admin panels." },
    { text: "Runner / Speedtester", bold: true }, { text: "Physical checks and node audits." },
    { text: "Stream Comms", bold: true }, { text: "Viber chat bridging (4 GCs)." },
    { text: "Cable Hands", bold: true }, { text: "Lay/tape Ethernet lines (Separate from CCTV)." },
    { text: "CCTV", bold: true }, { text: "Tapo camera installation." },
    { text: "AI Operator", bold: true }, { text: "Subtitles & SPF.IO setup." }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Packdown Roles
  addCard(slide, 5.15, 1.3, 4.35, 5.5, "blue");
  addCardHeader(slide, "Packdown Roles (6 Positions)", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Captain", bold: true, color: COLORS.blue }, { text: "Debrief huddle and inventory sign-off." },
    { text: "Cable Lead", bold: true, color: COLORS.blue }, { text: "Coils and audits all Ethernet cables (Box 1)." },
    { text: "Cable Asst ×2", bold: true, color: COLORS.blue }, { text: "Retrieve lines from far-field nodes." },
    { text: "Tetris Master", bold: true, color: COLORS.blue }, { text: "Box packaging & item-by-item final audit.", bold: true },
    { text: "AI Operator", bold: true, color: COLORS.blue }, { text: "Pack M-Audio interface and close sessions." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "On Sundays, we split our operations into 9 Setup roles and 6 Packdown roles. Note that CCTV and Cable Hands are distinct roles during setup to ensure quality control, and during packdown, we introduce the 'Tetris Master' who is responsible for the physical audit. Let's look at the specific duties for each.";
}

// Slide 7: Command Center Roles
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Command Center: Captain & Asst Captain", "Module 2");

  // Two columns
  // Left: Captain
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Captain (Operations Owner)", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Final Decision-Maker:", bold: true },
    { text: "Resolves all stream, network, and team escalation points." },
    { text: "Timeline Responsibilities:", bold: true },
    { text: "Toggle Restream (7 AM), runsheet huddle (8:45 AM), all-in huddle (9 AM), YT link GC (9:45 AM)." },
    { text: "Manual Shutdown:", bold: true },
    { text: "Turns off Resi and Restream encoders post-service." }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Asst Captain
  addCard(slide, 5.15, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Asst Captain (Floor Lead)", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Eyes & Ears on the Floor:", bold: true },
    { text: "Manages network mesh node placements, cable runs, and client drops." },
    { text: "Incident Diagnostics:", bold: true },
    { text: "Addresses slow wifi coverage zones and physical disconnects." },
    { text: "Critical Hand-off:", bold: true },
    { text: "Covers floor presence so Captain can stay focused on Broadcast consoles." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "The Captain owns the Sunday and stays focused on the Broadcast Table and stream consoles. The Assistant Captain covers the venue floor, handling physical nodes, cable issues, and slow spots, reporting up to the Captain only when critical choices are needed.";
}

// Slide 8: Monitoring & Comms Roles
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Broadcast Console: Stream Op & Stream Comms", "Module 2");

  // Two columns
  // Left: Stream Op
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Stream Op (Live Monitor)", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Continuous Monitoring:", bold: true },
    { text: "Tracks Resi encoder signal, Restream dashboards, and YouTube/iWantTV quality." },
    { text: "Alert Rule:", bold: true },
    { text: "Immediately alerts Captain if any destination drops or buffers." },
    { text: "Translations Oversight:", bold: true },
    { text: "Monitors the AI translation subtitle feed during active windows." },
    { text: "*Stream Op monitors and flags; Captain executes toggles.*", italic: true }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Stream Comms
  addCard(slide, 5.15, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Stream Comms (Viber Bridge)", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Manage Four Key Viber GCs:", bold: true },
    { text: "1. Stream Assist Team (Ops coord)\n2. Tech x Socials (Social updates)\n3. iWantTV Viber (iWantTV status)\n4. Kids x Tech x Babies (Ministry updates)" },
    { text: "Key Deliverables:", bold: true },
    { text: "Forward AJA link at 7:30 AM; forward YT link at 9:45 AM." },
    { text: "Backup Alerts:", bold: true },
    { text: "Alerts all 4 GCs immediately if AJA backup is triggered." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "The Stream Operator and Stream Comms sit together at the Broadcast Table. The Stream Op watches the feed and dashboards for quality drops. Stream Comms is the voice of our team, sending links and updates to our four target Viber Group Chats, bridging us with other ministries.";
}

// Slide 9: Technical Troubleshooting & Logistics
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Technical Support: Troubleshooting & Runner", "Module 2");

  // Two columns
  // Left: Troubleshooting
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Troubleshooting (Network First-Responder)", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Infrastructure Knowledge:", bold: true },
    { text: "Memorizes IP schemes, router log panels, and network topology." },
    { text: "Setup Checks:", bold: true },
    { text: "Verifies all routers, mesh backhauls, and switch ports are online." },
    { text: "Service Standby:", bold: true },
    { text: "Monitors admin panels during service to troubleshoot network drops." },
    { text: "*Escalates to Captain if issue exceeds 5 minutes.*", bold: true, color: COLORS.red }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Runner
  addCard(slide, 5.15, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Runner / Speedtester (Logistics)", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Physical Validation:", bold: true },
    { text: "Carries cables and deploys mesh hardware to assigned spots." },
    { text: "Speedtest Checkpoints:", bold: true },
    { text: "Speedtests every mesh node position before 9:45 AM." },
    { text: "Wired Rules Only:", bold: true },
    { text: "Tests must be LAN-wired with WiFi OFF on test device (Target ≥80 Mbps)." },
    { text: "GC Reports:", bold: true },
    { text: "Reports all zones back to Asst Captain via Viber." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "The Troubleshooting volunteer is the network engineer of the day. They have router access and handle quick configuration fixes. The Runner handles logistics and drives validation, speedtesting every single mesh zone before the service starts using wired connections. Remember: we only count wired tests, and the target is at least 80 Mbps.";
}

// Slide 10: Physical & AI Setup Roles
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Infrastructure: Cables, CCTV, & AI Operator", "Module 2");

  // Asymmetric layout
  // Column 1 - Left Stacked Cards
  addCard(slide, 0.5, 1.3, 4.35, 2.65);
  addCardHeader(slide, "Cable Hands", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Route & Label Ethernet:", bold: true },
    { text: "Switch to Broadcast, Arena PCs, and Resi Encoder." },
    { text: "Public Cable Safety:", bold: true },
    { text: "Tape down runs in public pathways to prevent trip hazards." }
  ], 0.7, 1.9, 3.95, 1.9);

  addCard(slide, 0.5, 4.15, 4.35, 2.65);
  addCardHeader(slide, "CCTV Setup", 0.7, 4.35, 3.95);
  addBulletList(slide, [
    { text: "Tapo Camera Deploys:", bold: true },
    { text: "Deploy Tapo C200C units at target locations." },
    { text: "SSID Connection:", bold: true },
    { text: "Connect to FVR CCTV network and verify in Tapo app." },
    { text: "*Do not double-assign with Cable Hands!*", bold: true, color: COLORS.red }
  ], 0.7, 4.75, 3.95, 1.9);

  // Column 2 - Right Card (AI Operator)
  addCard(slide, 5.15, 1.3, 4.35, 5.5, "blue");
  addCardHeader(slide, "AI Operator (Translations)", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Hardware Connections:", bold: true },
    { text: "Connect M-Audio USB audio interface and printer cable at MC2." },
    { text: "SPF.IO Settings:", bold: true },
    { text: "Login to tech@favor.church and route audio signal correctly." },
    { text: "Active Toggle Windows:", bold: true },
    { text: "Trigger AI Translations ON (~10:30 AM) and OFF (~11:30 AM) on Captain's signal." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "These roles lay the physical foundation. Cable Hands route and tape down Ethernet, keeping the public space safe. CCTV handles visual monitoring cameras, which are connected to a dedicated FVR CCTV SSID. The AI Operator manages the live sermon subtitles via SPF.IO and M-Audio audio capture.";
}

// Slide 11: Packdown Roles
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Post-Service Packdown & Audits", "Module 2");

  // Left Column - Stacked cards of roles
  addCard(slide, 0.5, 1.3, 4.35, 1.7);
  addCardHeader(slide, "Packdown Leader & Cables", 0.7, 1.45, 3.95);
  addBulletList(slide, [
    { text: "Captain:", bold: true }, { text: "Verify streams are OFF, run huddle debrief." },
    { text: "Cable Lead & Asst (x2):", bold: true }, { text: "Collect Ethernet runs, coil (over-under), store in Box 1." }
  ], 0.7, 1.85, 3.95, 1.05);

  addCard(slide, 0.5, 3.2, 4.35, 1.7);
  addCardHeader(slide, "AI & CCTV Packdown", 0.7, 3.35, 3.95);
  addBulletList(slide, [
    { text: "AI Operator:", bold: true }, { text: "Disconnect interface, close SPF.IO, pack gear." },
    { text: "CCTV:", bold: true }, { text: "Retrieve Tapo cameras, confirm offline in app." }
  ], 0.7, 3.75, 3.95, 1.05);

  addCard(slide, 0.5, 5.1, 4.35, 1.7, "red");
  addCardHeader(slide, "The CRTVS Packdown Rule", 0.7, 5.25, 3.95, 0.4, true);
  addBulletList(slide, [
    { text: "Do NOT unplug the CRTVS table early!", bold: true, color: COLORS.red },
    { text: "They upload files post-service. Wait for Asst Captain clear." }
  ], 0.7, 5.65, 3.95, 1.05);

  // Right Column - The Tetris Master Card
  addCard(slide, 5.15, 1.3, 4.35, 5.5, "blue");
  addCardHeader(slide, "The Tetris Master (Audit)", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Core Responsibility:", bold: true, color: COLORS.blue },
    { text: "Packs all technical equipment into designated storage boxes." },
    { text: "Item-by-Item Inventory Audit:", bold: true, color: COLORS.blue },
    { text: "Audits packed gear against Box Inventory lists (§9)." },
    { text: "Pre-Dismissal Sign-off:", bold: true, color: COLORS.blue },
    { text: "Flags any missing items to Captain before anyone is allowed to leave." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "When the service ends, we transition into packdown. The Captain runs the debrief. Cable leads coil using the over-under method. Crucially, the Tetris Master audits all gear item-by-item against our inventory list to ensure we don't leave anything at the venue.";
}

// ==========================================
// MODULE 3: SERVICE SCHEDULES & PLAYBOOKS
// ==========================================
addSectionDivider(pptx, "Module 3: Schedules & Playbooks", "Sunday Timeline and Step-by-Step Playbooks");

// Slide 12: Morning Service Timeline (10 AM)
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Sunday Morning Timeline (10 AM)", "Module 3");

  // Timeline table
  let rows = [
    [
      { text: "Time", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } },
      { text: "Event Details & Milestones", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } },
      { text: "Lead Role", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } }
    ],
    [{ text: "6:00 AM", options: { bold: true } }, { text: "Cable runs begin, mesh node placement, CCTV & AI setups." }, { text: "All" }],
    [{ text: "7:00 AM", options: { bold: true, color: COLORS.orange } }, { text: "Restream ON. Set Favor Production YouTube to Unlisted." }, { text: "Captain" }],
    [{ text: "7:30 AM", options: { bold: true } }, { text: "Deadline: Send AJA Restream link to STREAM ASSIST GC." }, { text: "Comms" }],
    [{ text: "9:00 AM", options: { bold: true } }, { text: "All-in Internet Team huddle huddle. Run speedtest checks." }, { text: "Captain/Runner" }],
    [{ text: "9:15 AM", options: { bold: true } }, { text: "iWantTV stream goes live via Oven Media Engine." }, { text: "Automatic" }],
    [{ text: "9:45 AM", options: { bold: true, color: COLORS.orange } }, { text: "YT link to GC. Verify visibilities (FB off, iWantTV public)." }, { text: "Captain" }],
    [{ text: "9:48 AM", options: { bold: true } }, { text: "Resi LIVE auto-trigger. Feed live at ~9:50 AM." }, { text: "Automatic" }],
    [{ text: "9:55 AM", options: { bold: true, color: COLORS.red } }, { text: "Contingency Gate: Trigger AJA backup if Resi not live." }, { text: "Captain" }],
    [{ text: "10:00 AM", options: { bold: true } }, { text: "Morning Service Starts. Stream Op monitors consoles." }, { text: "Stream Op" }],
    [{ text: "12:NN", options: { bold: true } }, { text: "Service ends. Manually shut off Resi & Restream." }, { text: "Captain" }]
  ];

  slide.addTable(rows, {
    x: 0.5,
    y: 1.3,
    w: 9.0,
    h: 5.5,
    colW: [1.2, 6.3, 1.5],
    border: { type: "solid", color: "E0E0E0", pt: 1 },
    fontFace: "Inter",
    fontSize: 10,
    valign: "middle"
  });

  slide.notes = "This is our morning timeline. The orange highlighted times are critical streaming milestones. At 7:00 AM we turn on Restream. At 7:30 AM we must have sent the AJA preview link. At 9:48 AM, the Resi encoder auto-starts. If it isn't live on YouTube by 9:55 AM, we trigger the manual AJA failover.";
}

// Slide 13: Setup Playbook: 6:00 AM – 7:30 AM
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Early Morning Playbook (6:00 – 7:30 AM)", "Module 3");

  // Two columns
  // Left: 6:00 AM Setup
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "6:00 AM — Physical Deployment", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Huddle Gather:", bold: true },
    { text: "Confirm full volunteer arrival. Assign buddy pairs." },
    { text: "Cables Deployment:", bold: true },
    { text: "Switch to Broadcast, Arena PCs, and Resi Encoder runs." },
    { text: "Mesh Placements:", bold: true },
    { text: "Asst Captain positions X50 nodes per venue layout." },
    { text: "Devices Check:", bold: true },
    { text: "Launch Tapo CCTV cameras, mount AI gear at MC2." }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: 7:00 AM Setup
  addCard(slide, 5.15, 1.3, 4.35, 5.5, "blue");
  addCardHeader(slide, "7:00 – 7:30 AM — Stream Activation", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Toggle Restream ON (7:00 AM):", bold: true, color: COLORS.blue },
    { text: "Set Favor Production YouTube destination to unlisted." },
    { text: "Hardware Encoders verification:", bold: true },
    { text: "Confirm AJA Helo link light (Green) and IP in ASUS panel." },
    { text: "Check studio.resi.io status for Resi Encoder." },
    { text: "AJA Preview Link sent (7:30 AM):", bold: true, color: COLORS.blue },
    { text: "Send preview link to STREAM ASSIST GC. Stream Comms verifies." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "Our first block of the day is pure setup. From 6:00 AM to 7:00 AM, we lay the physical network cables, nodes, CCTV, and AI gear. At 7:00 AM, we turn on our stream systems. By 7:30 AM, we must send the AJA preview link to the Stream Assist Viber group so the rest of the tech team can review rehearsals.";
}

// Slide 14: Setup Playbook: 8:45 AM – 9:15 AM
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Mid-Morning Playbook (8:45 – 9:15 AM)", "Module 3");

  // Asymmetric layout
  // Top Card: Huddles
  addCard(slide, 0.5, 1.3, 9.0, 2.5);
  addCardHeader(slide, "Production Huddles", 0.7, 1.5, 8.6);
  addBulletList(slide, [
    { text: "8:45 AM runsheet huddle:", bold: true },
    { text: "Captain attends coordination meeting with worship and production teams. Asst Captain manages floor." },
    { text: "9:00 AM all-in huddle:", bold: true },
    { text: "Full Internet Team huddles. Captain briefs team on today's stream, updates, and target assignments." }
  ], 0.7, 1.9, 8.6, 1.8);

  // Bottom Columns
  // Bottom Left Card
  addCard(slide, 0.5, 4.0, 4.35, 2.8);
  addCardHeader(slide, "Wired Backhaul Audit", 0.7, 4.2, 3.95);
  addBulletList(slide, [
    { text: "Confirm all Deco X50 nodes show \"Ethernet backhaul\" (not wireless) in Deco app.", fontSize: 10 },
    { text: "Verify Arena PCs (Propres / vMix switcher) have WiFi disabled and show link lights.", fontSize: 10 }
  ], 0.7, 4.6, 3.95, 2.1);

  // Bottom Right Card
  addCard(slide, 5.15, 4.0, 4.35, 2.8, "blue");
  addCardHeader(slide, "Runner Speedtest Run", 5.35, 4.2, 3.95);
  addBulletList(slide, [
    { text: "Test all mesh locations.", bold: true, color: COLORS.blue, fontSize: 10 },
    { text: "Tests MUST be LAN-wired with WiFi OFF on test device.", fontSize: 10 },
    { text: "Minimum required speed is ≥80 Mbps at every point.", bold: true, fontSize: 10 },
    { text: "Report all zone metrics back to Asst Captain via GC.", fontSize: 10 }
  ], 5.35, 4.6, 3.95, 2.1);

  slide.notes = "Between 8:45 AM and 9:15 AM, we focus on communication and network validation. The Captain coordinates with production, then leads our team huddle at 9:00 AM. Simultaneously, the Runner begins physical speedtesting at every mesh node. Remember: we only count wired tests, and the target is at least 80 Mbps.";
}

// Slide 15: Setup Playbook: 9:45 AM – 10:00 AM
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Live Go-Live Window (9:45 – 10:00 AM)", "Module 3");

  // Vertical stacked timeline cards (4 cards)
  addCard(slide, 0.5, 1.3, 9.0, 1.25);
  slide.addText("9:45 AM", { x: 0.7, y: 1.45, w: 1.5, h: 0.9, fontSize: 20, fontFace: "Outfit", bold: true, color: COLORS.blue });
  addBulletList(slide, [
    { text: "Send YouTube link to GC. Verify final visibilities:", bold: true },
    { text: "YT Prod = Unlisted | Backup = Unlisted | iWantTV = Public | Facebook = OFF", italic: true }
  ], 2.2, 1.45, 7.1, 0.95);

  addCard(slide, 0.5, 2.7, 9.0, 1.25);
  slide.addText("9:48 AM", { x: 0.7, y: 2.85, w: 1.5, h: 0.9, fontSize: 20, fontFace: "Outfit", bold: true, color: COLORS.orange });
  addBulletList(slide, [
    { text: "Resi LIVE auto-trigger fires.", bold: true },
    { text: "Stream Op verifies encoder online status in studio.resi.io dashboard." }
  ], 2.2, 2.85, 7.1, 0.95);

  addCard(slide, 0.5, 4.1, 9.0, 1.25);
  slide.addText("9:50 AM", { x: 0.7, y: 4.25, w: 1.5, h: 0.9, fontSize: 20, fontFace: "Outfit", bold: true, color: COLORS.textDark });
  addBulletList(slide, [
    { text: "Broadcast Feed Active (2-5 min buffer delay).", bold: true },
    { text: "Stream Op confirms visual YouTube live feed is stable with normal audio." }
  ], 2.2, 4.25, 7.1, 0.95);

  addCard(slide, 0.5, 5.5, 9.0, 1.35, "red");
  slide.addText("9:55 AM", { x: 0.7, y: 5.65, w: 1.5, h: 1.0, fontSize: 20, fontFace: "Outfit", bold: true, color: COLORS.red });
  addBulletList(slide, [
    { text: "CONTINGENCY WINDOW (Resi offline check):", bold: true, color: COLORS.red },
    { text: "If Resi is not live, Captain manually triggers AJA backup streams in Restream." },
    { text: "Stream Comms alerts all 4 Viber GCs immediately.", bold: true }
  ], 2.2, 5.65, 7.1, 1.05);

  slide.notes = "This is our most critical 15-minute window. At 9:45 AM we verify the stream visibilities. At 9:48 AM, Resi auto-starts. Because of Resi's 2 to 5-minute stream buffer, the feed appears around 9:50 AM. If by 9:55 AM we do not see a live feed on YouTube, we trigger the backup AJA stream immediately. No delays.";
}

// Slide 16: Afternoon Service Playbook (4 PM)
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Afternoon Service Playbook (4 PM)", "Module 3");

  // Two columns
  // Left: Afternoon Timeline
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Afternoon Timeline", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "1:30 PM — Captain Solo Arrival:", bold: true },
    { text: "Set YouTube unlisted. Send link to GC. Run Speedtests (target ≥80 Mbps)." },
    { text: "2:45 PM — Runsheet Huddle:", bold: true },
    { text: "Captain attends production runsheet huddle." },
    { text: "3:00 PM — Afternoon Huddle:", bold: true },
    { text: "Gather afternoon volunteers. Verify settings." },
    { text: "4:00 PM — Service Starts:", bold: true },
    { text: "Resend YT link in Viber GC during pre-roll." },
    { text: "6:00 PM — Post-Service:", bold: true },
    { text: "Manual stop encoders. Post-service debrief huddle." }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Differences Card
  addCard(slide, 5.15, 1.3, 4.35, 5.5, "blue");
  addCardHeader(slide, "Core Differences from Morning", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Solo Setup Start:", bold: true, color: COLORS.blue },
    { text: "Captain handles early setup checks alone. No Cable Hands or CCTV setup required (hardware stays deployed)." },
    { text: "Speedtest Validation:", bold: true, color: COLORS.blue },
    { text: "Must re-verify WAN bandwidth at 1:30 PM (ensure no congestion)." },
    { text: "No Auto-Trigger (Resi):", bold: true, color: COLORS.blue },
    { text: "Captain verifies Resi manually toggled in afternoon if schedule fails." },
    { text: "AI Translations:", bold: true, color: COLORS.blue },
    { text: "Toggled ON (~4:30 PM) and OFF (~5:30 PM)." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "The afternoon service starts at 4:00 PM, but setup begins at 1:30 PM. The Captain arrives solo to check the networks, run speedtests, and prepare the links. We re-huddle at 3:00 PM and follow the same stream launch procedure. When the service ends around 6:00 PM, the Captain manually shuts down both encoders.";
}

// ==========================================
// MODULE 4: STREAM SIGNAL CHAIN & TOGGLE MATRIX
// ==========================================
addSectionDivider(pptx, "Module 4: Signal Chain & Matrix", "Stream Destinations, Signal Flow, and Metadata");

// Slide 17: Stream Destinations Matrix
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Stream Destinations Matrix", "Module 4");

  // Table
  let rows = [
    [
      { text: "Destination", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } },
      { text: "Path", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } },
      { text: "Visibility", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } },
      { text: "Default State", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } },
      { text: "Notes", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } }
    ],
    [{ text: "YT-Prod TEST", options: { bold: true } }, { text: "Resi" }, { text: "—" }, { text: "AUTO 7:07 AM" }, { text: "1-hr test; 2-5m delay" }],
    [{ text: "YT Production", options: { bold: true } }, { text: "Resi" }, { text: "UNLISTED" }, { text: "AUTO 9:48 AM" }, { text: "Main live stream" }],
    [{ text: "Facebook", options: { bold: true } }, { text: "Resi" }, { text: "—" }, { text: "OFF" }, { text: "Sundays (Disabled)" }],
    [{ text: "YT Backup", options: { bold: true } }, { text: "AJA → Restream" }, { text: "UNLISTED" }, { text: "ON 9:45 AM" }, { text: "30s latency backup" }],
    [{ text: "YT Prod Preview", options: { bold: true } }, { text: "AJA → Restream" }, { text: "—" }, { text: "ON 7:30 AM" }, { text: "Realtime preview" }],
    [{ text: "iWantTV", options: { bold: true } }, { text: "AJA → Restream" }, { text: "PUBLIC" }, { text: "ON 9:20 AM" }, { text: "Oven Media relay" }],
    [{ text: "Facebook Backup", options: { bold: true } }, { text: "AJA → Restream" }, { text: "—" }, { text: "OFF" }, { text: "Emergency toggle only" }]
  ];

  slide.addTable(rows, {
    x: 0.5,
    y: 1.3,
    w: 9.0,
    h: 5.5,
    colW: [2.0, 1.8, 1.3, 1.5, 2.4],
    border: { type: "solid", color: "E0E0E0", pt: 1 },
    fontFace: "Inter",
    fontSize: 9,
    valign: "middle"
  });

  slide.notes = "This matrix shows where our streams go and their visibility. The main stream runs through Resi to Favor Production YouTube as unlisted. AJA Helo feeds Restream, which handles our realtime backup to Favor Manila YouTube, iWantTV (which is public), and Facebook (which remains off unless a major backup scenario occurs).";
}

// Slide 18: Stream Signal Flow Diagram
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Stream Signal Chain Flow", "Module 4");

  // Center Block: Switcher
  addCard(slide, 3.25, 1.3, 3.5, 1.0, "blue");
  slide.addText("BROADCAST SWITCHER\n(vMix / Tricaster Outputs)", {
    x: 3.35, y: 1.4, w: 3.3, h: 0.8,
    fontSize: 12, fontFace: "Outfit", bold: true, color: COLORS.blue, align: "center", valign: "middle"
  });

  // Left Block: Resi Path
  addCard(slide, 0.5, 3.0, 4.25, 3.8);
  addCardHeader(slide, "Resi Path (Dedicated ISP)", 0.7, 3.15, 3.85);
  addBulletList(slide, [
    { text: "1. Resi Hardware Encoder", bold: true },
    { text: "Connects via FVR RESI (Dedicated PLDT 5G)." },
    { text: "2. studio.resi.io Cloud", bold: true },
    { text: "Recieves stream (2-5 min buffer delay)." },
    { text: "3. YT Production (Unlisted)", bold: true },
    { text: "Primary broadcast destination." }
  ], 0.7, 3.65, 3.85, 3.0);

  // Right Block: AJA/Restream Path
  addCard(slide, 5.25, 3.0, 4.25, 3.8);
  addCardHeader(slide, "AJA/Restream Path (FVR MAIN)", 5.45, 3.15, 3.85);
  addBulletList(slide, [
    { text: "1. AJA Helo Encoder", bold: true },
    { text: "IP 10.6.33.5 via FVR MAIN (Starlink/Jireh)." },
    { text: "2. app.restream.io Cloud", bold: true },
    { text: "Recieves realtime stream (<30s latency)." },
    { text: "3. Multi-Destinations:", bold: true },
    { text: "• YT Backup (Unlisted)\n• iWantTV (Public via Oven)\n• FB Backup (OFF by default)" }
  ], 5.45, 3.65, 3.85, 3.0);

  slide.notes = "This diagram visualizes our dual stream paths. The switcher outputs video to both encoders. The Resi encoder uses a dedicated, isolated PLDT RESI connection directly to the cloud. The AJA Helo encoder uses our main network (ASUS Rapture backed by Starlink and Jireh) to feed Restream. This ensures a network failure on one path doesn't take down both streams.";
}

// Slide 19: Stream Toggle Sequence
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Stream Control Toggle Sequence", "Module 4");

  // Table
  let rows = [
    [
      { text: "Time", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } },
      { text: "Toggle Action Required", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } },
      { text: "Platform", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } },
      { text: "Responsible", options: { fill: "1A73E8", bold: true, fontFace: "Outfit", color: "FFFFFF" } }
    ],
    [{ text: "7:00 AM", options: { bold: true } }, { text: "Restream ON (YT Prod unlisted)" }, { text: "Restream" }, { text: "Captain" }],
    [{ text: "7:30 AM", options: { bold: true } }, { text: "Send AJA link to GC" }, { text: "Viber" }, { text: "Captain/Comms" }],
    [{ text: "9:15 AM", options: { bold: true } }, { text: "iWantTV live (auto Oven trigger)" }, { text: "Oven Engine" }, { text: "Automatic" }],
    [{ text: "9:45 AM", options: { bold: true } }, { text: "Send YT link to GC" }, { text: "Viber" }, { text: "Captain" }],
    [{ text: "9:48 AM", options: { bold: true } }, { text: "Resi auto-trigger (LIVE)" }, { text: "Resi" }, { text: "Automatic" }],
    [{ text: "9:55 AM", options: { bold: true, color: COLORS.red } }, { text: "AJA Backup if Resi not live" }, { text: "Restream" }, { text: "Captain" }],
    [{ text: "~10:30 AM", options: { bold: true } }, { text: "AI Translations ON" }, { text: "SPF.IO" }, { text: "AI Operator" }],
    [{ text: "~11:30 AM", options: { bold: true } }, { text: "AI Translations OFF" }, { text: "SPF.IO" }, { text: "AI Operator" }],
    [{ text: "~12:NN", options: { bold: true } }, { text: "Resi OFF + Restream OFF" }, { text: "Resi/Restream" }, { text: "Captain" }]
  ];

  slide.addTable(rows, {
    x: 0.5,
    y: 1.3,
    w: 9.0,
    h: 5.5,
    colW: [1.2, 4.3, 2.0, 1.5],
    border: { type: "solid", color: "E0E0E0", pt: 1 },
    fontFace: "Inter",
    fontSize: 9,
    valign: "middle"
  });

  slide.notes = "This is our checklist for streaming actions. We have automated triggers for Resi and iWantTV, but the Captain and AI Operator must manually execute the rest. Refer to this slide during services to ensure you don't miss a toggle window.";
}

// Slide 20: YouTube Stream Metadata
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "YouTube Stream Metadata Setup", "Module 4");

  // Two columns
  // Left: Settings card
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Destination Settings", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Configure settings in studio.resi.io or Restream:", bold: true },
    { text: "Title:", bold: true, color: COLORS.blue },
    { text: "Join us LIVE now at Favor Church!", italic: true },
    { text: "Category:", bold: true, color: COLORS.blue },
    { text: "Nonprofit & Activism" },
    { text: "Privacy:", bold: true, color: COLORS.blue },
    { text: "Unlisted (Sundays main stream)" }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Copy description card
  addCard(slide, 5.15, 1.3, 4.35, 5.5, "blue");
  addCardHeader(slide, "Description Block (Copy-Paste)", 5.35, 1.5, 3.95);
  slide.addText(
    "If you have any prayer requests, want to submit a testimony or want to know what your next step is after praying the salvation prayer, head to our website through the link in our bio!\n\n" +
    "__\n\n" +
    "📱CONNECT WITH US:\n" +
    "Instagram: @favor.mnl\n" +
    "Threads: @favor.mnl\n" +
    "Twitter/X: @favor_mnl\n\n" +
    "__\n" +
    "#favorchurch\n" +
    "#churchforimperfectpeople\n" +
    "#thefamilyyouvebeenlookingfor",
    {
      x: 5.35,
      y: 1.9,
      w: 3.95,
      h: 4.7,
      fontSize: 8.5,
      fontFace: "Courier New", // Monospaced feel for copy paste
      color: COLORS.textDark,
      valign: "top"
    }
  );

  slide.notes = "When setting up the YouTube destination metadata in studio.resi.io or Restream, use these exact values. The title is always 'Join us LIVE now at Favor Church!' and the description must be copy-pasted exactly as shown here to keep our socials and links uniform.";
}

// ==========================================
// MODULE 5: PACKDOWN & STORAGE
// ==========================================
addSectionDivider(pptx, "Module 5: Packdown & Storage", "Post-Service Sequence, Audits, and Box Inventory");

// Slide 21: Post-Service Packdown Sequence
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Post-Service Packdown Sequence", "Module 5");

  // Vertical stacked timeline cards (4 cards)
  addCard(slide, 0.5, 1.3, 9.0, 1.25);
  slide.addText("Step 1", { x: 0.7, y: 1.45, w: 1.5, h: 0.9, fontSize: 18, fontFace: "Outfit", bold: true, color: COLORS.blue });
  addBulletList(slide, [
    { text: "Terminate All Active Streams:", bold: true },
    { text: "Stop Resi encoder in studio.resi.io. Toggle OFF Restream channels. Close SPF.IO session." }
  ], 2.2, 1.45, 7.1, 0.95);

  addCard(slide, 0.5, 2.7, 9.0, 1.25);
  slide.addText("Step 2", { x: 0.7, y: 2.85, w: 1.5, h: 0.9, fontSize: 18, fontFace: "Outfit", bold: true, color: COLORS.blue });
  addBulletList(slide, [
    { text: "Post-Service Huddle (5-10 mins):", bold: true },
    { text: "Brief debrief: what went well, log issues, celebrate wins, and dismiss shadows." }
  ], 2.2, 2.85, 7.1, 0.95);

  addCard(slide, 0.5, 4.1, 9.0, 1.25, "red");
  slide.addText("Step 3", { x: 0.7, y: 4.25, w: 1.5, h: 0.9, fontSize: 18, fontFace: "Outfit", bold: true, color: COLORS.red });
  addBulletList(slide, [
    { text: "The CRTVS Packdown Rule (CRITICAL):", bold: true, color: COLORS.red },
    { text: "CRTVS table stays live post-service to upload footage. Do NOT pack power or lines there until cleared." }
  ], 2.2, 4.25, 7.1, 0.95);

  addCard(slide, 0.5, 5.5, 9.0, 1.35);
  slide.addText("Step 4", { x: 0.7, y: 5.65, w: 1.5, h: 1.0, fontSize: 18, fontFace: "Outfit", bold: true, color: COLORS.textDark });
  addBulletList(slide, [
    { text: "Cable & Node collection:", bold: true },
    { text: "Coil Ethernet cables (over-under) -> Box 1. Gather Deco X50 nodes (check counts) -> Box 2." }
  ], 2.2, 5.65, 7.1, 1.05);

  slide.notes = "Packdown has a strict sequence. First, turn off all stream encoders. Second, hold our team huddle. Third — and this is a major rule — do not unplug the CRTVS table! They upload files after service ends. Only pack their lines after the Assistant Captain gives the all-clear. Finally, collect and coil all cables and nodes.";
}

// Slide 22: Equipment Audit — Box 1 & Box 2
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Equipment Audit: Box 1 & Box 2", "Module 5");

  // Two columns with tables
  // Left: Box 1
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Box 1: Cables Inventory", 0.7, 1.5, 3.95);
  let rows1 = [
    [{ text: "Item", options: { fill: "F5F6F8", bold: true } }, { text: "Qty", options: { fill: "F5F6F8", bold: true } }, { text: "Notes", options: { fill: "F5F6F8", bold: true } }],
    [{ text: "Cat6 Ethernet (Long 20m+)" }, { text: "4" }, { text: "Switch to Broadcast/Arena" }],
    [{ text: "Cat6 Ethernet (Med 10m)" }, { text: "4" }, { text: "Switch to Resi/AJA/Mesh" }],
    [{ text: "Cat6 Ethernet (Short 3m)" }, { text: "6" }, { text: "Broadcast Table patch" }],
    [{ text: "Extension Strip" }, { text: "3" }, { text: "Broadcast, CRTVS, Kids" }],
    [{ text: "Gaffer Tape" }, { text: "1" }, { text: "Floor cable taping" }]
  ];
  slide.addTable(rows1, {
    x: 0.7, y: 1.9, w: 3.95, h: 4.6,
    colW: [1.8, 0.5, 1.65],
    border: { type: "solid", color: "E0E0E0", pt: 1 },
    fontFace: "Inter", fontSize: 9, valign: "middle"
  });

  // Right: Box 2
  addCard(slide, 5.15, 1.3, 4.35, 5.5, "blue");
  addCardHeader(slide, "Box 2: Networking Gear", 5.35, 1.5, 3.95);
  let rows2 = [
    [{ text: "Item", options: { fill: "F5F6F8", bold: true } }, { text: "Qty", options: { fill: "F5F6F8", bold: true } }, { text: "Notes", options: { fill: "F5F6F8", bold: true } }],
    [{ text: "ASUS GT-BE98 Router" }, { text: "1" }, { text: "Main WiFi 7 router" }],
    [{ text: "Deco X50 Mesh Nodes" }, { text: "7" }, { text: "Audit node count!" }],
    [{ text: "Netgear 8-Port Switch" }, { text: "1" }, { text: "Broadcast distribution" }],
    [{ text: "PLDT H153 (Jireh)" }, { text: "1" }, { text: "WAN 2 backup into ASUS" }],
    [{ text: "PLDT H153 (Resi)" }, { text: "1" }, { text: "Dedicated to Resi" }],
    [{ text: "Unicom 5G Router" }, { text: "2" }, { text: "UNICOM & SHILOH backup" }],
    [{ text: "Starlink Dish + Router" }, { text: "1" }, { text: "WAN 1 main source" }]
  ];
  slide.addTable(rows2, {
    x: 5.35, y: 1.9, w: 3.95, h: 4.6,
    colW: [1.8, 0.5, 1.65],
    border: { type: "solid", color: "E0E0E0", pt: 1 },
    fontFace: "Inter", fontSize: 9, valign: "middle"
  });

  slide.notes = "Here is our equipment list for Box 1 and Box 2. Box 1 holds our Ethernet cables and power strips. Box 2 contains our networking core, including our main ASUS WiFi 7 router, the 7 mesh nodes, our three backup 5G routers, and the Starlink dish. The Tetris Master must check these off item-by-item.";
}

// Slide 23: Equipment Audit — Box 3, AI & Tools
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Equipment Audit: Box 3, AI, & Tools", "Module 5");

  // Asymmetric Column Layout
  // Left Column: Box 3
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Box 3: Streaming Gear", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Resi Hardware Encoder (Qty: 1)", bold: true },
    { text: "Direct connect to PLDT Resi 5G router. Handled via studio.resi.io." },
    { text: "AJA Helo Encoder (Qty: 1)", bold: true },
    { text: "Fixed IP 10.6.33.5 via FVR MAIN. Handled via app.restream.io." },
    { text: "Tapo C200C CCTV Cameras (Qty: 2)", bold: true },
    { text: "Main monitoring cameras. Check Tapo app configuration." }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right Column Stacked
  addCard(slide, 5.15, 1.3, 4.35, 2.65, "blue");
  addCardHeader(slide, "AI Gear (Translations)", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "M-Audio USB interface (Qty: 1)", bold: true, color: COLORS.blue },
    { text: "Deploys at MC2 for audio capture." },
    { text: "USB Printer Cable (Qty: 1)", bold: true, color: COLORS.blue },
    { text: "SPF.IO audio routing connector." }
  ], 5.35, 1.9, 3.95, 1.9);

  addCard(slide, 5.15, 4.15, 4.35, 2.65);
  addCardHeader(slide, "Tools & Miscellaneous", 5.35, 4.35, 3.95);
  addBulletList(slide, [
    { text: "Troubleshooting Laptop (Qty: 1)", bold: true },
    { text: "Admin panels access & speedtest verification." },
    { text: "Stream Comms Phone (Qty: 1)", bold: true },
    { text: "GC Viber communication monitor." }
  ], 5.35, 4.75, 3.95, 1.9);

  slide.notes = "Box 3 holds our streaming encoders — the Resi hardware unit and the AJA Helo — as well as our Tapo CCTV cameras. The AI Gear consists of the M-Audio interface and printer cable for subtitles. We also track our admin laptop and Viber phone. Make sure these are packed securely in their designated slots.";
}

// ==========================================
// MODULE 6: VENUES, TOPOLOGY & CREDENTIALS
// ==========================================
addSectionDivider(pptx, "Module 6: Venues & Credentials", "Ynares Arena & Metrotent layouts, credentials, and rot. policy");

// Slide 24: Ynares Sports Arena Layout
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Ynares Sports Arena Layout (v6)", "Module 6");

  // Two columns
  // Left: Topology description
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Network Architecture Rules", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Dual-WAN Failover Setup:", bold: true },
    { text: "ASUS GT-BE98 main router accepts WAN 1 (Starlink) + WAN 2 (PLDT JIREH)." },
    { text: "Wired Network Path:", bold: true },
    { text: "ASUS LAN -> Netgear Switch -> AJA Helo (10.6.33.5) + Arena PCs (vMix/Propres)." },
    { text: "Wired Mesh backhaul:", bold: true },
    { text: "Mesh nodes must be wired to switch for backhaul (Ethernet status in Deco App)." },
    { text: "Isolated Streaming Path:", bold: true },
    { text: "PLDT RESI connects directly and exclusively to the Resi Encoder." },
    { text: "Mesh Node Placements (7):", bold: true, color: COLORS.blue },
    { text: "Worship, CRTVS, Kids, Heroes, Royals, Babies, IEM." }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Diagram Placeholder
  addCard(slide, 5.15, 1.3, 4.35, 5.5, "blue");
  slide.addShape(pptx.ShapeType.rect, { x: 5.35, y: 1.5, w: 3.95, h: 5.1, fill: { color: COLORS.white }, line: { color: COLORS.cardLine } });
  slide.addText(
    "DIAGRAM PLACEHOLDER\n\n" +
    "Double-click to insert:\n" +
    "1. floor-plans/ynares-v6-2026-03-03.png\n" +
    "2. diagrams/ynares-topology.svg\n\n" +
    "Ensure nodes layout matches locations list.",
    { x: 5.45, y: 1.6, w: 3.75, h: 4.9, fontSize: 11, fontFace: "Outfit", color: COLORS.blue, align: "center", valign: "middle" }
  );

  slide.notes = "This is our layout for Ynares Sports Arena. We run a dual-WAN setup on the main router, combining Starlink and PLDT Jireh. We deploy 7 Deco mesh nodes across the venue. Note that the Resi stream is entirely isolated on its own PLDT Resi 5G router and doesn't touch the main network.";
}

// Slide 25: Metrotent Layout
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Metrotent Venue Layout", "Module 6");

  // Two columns
  // Left: Topology description
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Lean Network Rules", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "WAN Configuration:", bold: true },
    { text: "WAN 1 (Starlink) + WAN 2 (PLDT JIREH) feed into the ASUS ROG Rapture router." },
    { text: "Wired Distribution:", bold: true },
    { text: "Network Switch connects AJA Helo (10.6.33.5) in the production booth." },
    { text: "Dedicated Stream Path:", bold: true },
    { text: "PLDT RESI router connects directly to the Resi Hardware Encoder." },
    { text: "Mesh Node Placements (2):", bold: true, color: COLORS.blue },
    { text: "• Node 1: CRTVS / VIP 2 area\n• Node 2: Babies area" }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Diagram Placeholder
  addCard(slide, 5.15, 1.3, 4.35, 5.5, "blue");
  slide.addShape(pptx.ShapeType.rect, { x: 5.35, y: 1.5, w: 3.95, h: 5.1, fill: { color: COLORS.white }, line: { color: COLORS.cardLine } });
  slide.addText(
    "DIAGRAM PLACEHOLDER\n\n" +
    "Double-click to insert:\n" +
    "1. floor-plans/metrotent-v2026-01-16.png\n" +
    "2. diagrams/metrotent-topology.svg\n\n" +
    "Verify node placement boundaries.",
    { x: 5.45, y: 1.6, w: 3.75, h: 4.9, fontSize: 11, fontFace: "Outfit", color: COLORS.blue, align: "center", valign: "middle" }
  );

  slide.notes = "For Metrotent, we use a much leaner layout. Instead of 7 nodes, we only deploy 2 mesh nodes: one for the CRTVS and VIP area, and one for the Babies room. The WAN routing and isolated Resi stream setup remain identical to our Ynares configuration.";
}

// Slide 26: Credentials & Security
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Credentials & Security Policy", "Module 6");

  // Main centered card
  addCard(slide, 0.5, 1.3, 9.0, 5.5, "red");
  addCardHeader(slide, "CRITICAL CREDENTIAL SECURITY RULES", 0.7, 1.5, 8.6, 0.4, true);

  addBulletList(slide, [
    { text: "No Live Passwords on Slides:", bold: true, color: COLORS.red },
    { text: "Passwords rotate periodically. Slides must NEVER hold active raw passwords to prevent breach exposures." },
    { text: "Authoritative Live Sources:", bold: true },
    { text: "• Master Google Sheet: favor.church/techpasswords (link below)\n• Master SOP File: README.md Section 11 in codebase" }
  ], 0.7, 2.0, 8.6, 1.8);

  // Link box
  slide.addShape(pptx.ShapeType.rect, { x: 0.7, y: 3.9, w: 8.6, h: 1.1, fill: { color: COLORS.blueBg }, line: { color: COLORS.blue } });
  slide.addText("MASTER PASSWORDS GOOGLE SHEET\n(Google Drive Auth Required to View)", {
    x: 0.8, y: 4.0, w: 8.4, h: 0.9,
    fontSize: 14, fontFace: "Outfit", bold: true, color: COLORS.blue, align: "center", valign: "middle"
  });

  // Table summary of SSIDs
  let rows = [
    [{ text: "SSID", options: { fill: "F5F6F8", bold: true } }, { text: "SSID Purpose", options: { fill: "F5F6F8", bold: true } }, { text: "Panel IP", options: { fill: "F5F6F8", bold: true } }],
    [{ text: "FVR MAIN" }, { text: "ASUS GT-BE98 main router network" }, { text: "10.6.33.1" }],
    [{ text: "FVR CCTV" }, { text: "Tapo C200C CCTV camera network" }, { text: "10.6.33.1" }],
    [{ text: "FVR JIREH" }, { text: "PLDT H153 5G WAN 2 failover router" }, { text: "10.3.1.1" }],
    [{ text: "FVR RESI" }, { text: "PLDT H153 5G dedicated Resi encoder router" }, { text: "10.2.1.1" }]
  ];
  slide.addTable(rows, {
    x: 0.7, y: 5.15, w: 8.6, h: 1.5,
    colW: [2.0, 4.6, 2.0],
    border: { type: "solid", color: "E0E0E0", pt: 1 },
    fontFace: "Inter", fontSize: 8.5, valign: "middle"
  });

  slide.notes = "To maintain security, we do not print live passwords on these training slides. The SSID configurations are shown here, but to get active, real-time passwords, you must click the link to our Master Passwords Google Sheet or refer directly to Section 11 of the README.md in our repository.";
}

// ==========================================
// MODULE 7: TROUBLESHOOTING PLAYBOOKS
// ==========================================
addSectionDivider(pptx, "Module 7: Troubleshooting Playbooks", "Core Diagnostic Flow and Playbooks A, B, C, & D");

// Slide 27: Troubleshooting Core Principles
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Troubleshooting Principles", "Module 7");

  // Diagnostic flow shapes
  const startX = 0.5;
  const boxW = 1.35;
  const boxH = 0.8;
  const gap = 0.5;
  const steps = ["1. POWER", "2. PHYSICAL", "3. IP REACH", "4. PLATFORM", "5. CONTENT"];

  steps.forEach((step, index) => {
    let x = startX + index * (boxW + gap);
    // Draw box
    addCard(slide, x, 1.5, boxW, boxH, index === 0 ? "blue" : "normal");
    slide.addText(step, {
      x, y: 1.5, w: boxW, h: boxH,
      fontSize: 10, fontFace: "Outfit", bold: true, color: index === 0 ? COLORS.blue : COLORS.textDark,
      align: "center", valign: "middle"
    });

    // Draw arrow if not last
    if (index < steps.length - 1) {
      slide.addShape(pptx.ShapeType.rightArrow, {
        x: x + boxW + 0.1,
        y: 1.75,
        w: 0.3,
        h: 0.3,
        fill: { color: COLORS.cardLine },
        line: { color: COLORS.cardLine }
      });
    }
  });

  // Guidelines Card
  addCard(slide, 0.5, 2.7, 9.0, 4.1);
  addCardHeader(slide, "Bottom-Up Troubleshooting Rules", 0.7, 2.9, 8.6);
  addBulletList(slide, [
    { text: "Diagnose Bottom-Up:", bold: true },
    { text: "Follow the sequence shown above. Never debug software (SPF.IO/Restream) until power and ethernet link lights show active connections." },
    { text: "The 60-Second Rule:", bold: true },
    { text: "When in doubt, restart the device, wait 60 seconds, and re-test. Fixes 90% of router issues." },
    { text: "Verify local IP segment:", bold: true },
    { text: "Laptop must show IP in FVR MAIN segment (10.6.33.x) to reach ASUS console." },
    { text: "5-Minute Escalation Limit:", bold: true, color: COLORS.red },
    { text: "If a troubleshooting volunteer cannot solve a network issue within 5 minutes, immediately escalate to the Captain.", bold: true }
  ], 0.7, 3.3, 8.6, 3.3);

  slide.notes = "When something goes wrong, don't panic. Follow the Bottom-Up rule. Start with power and physical link lights, then check IP routing, then the apps, and finally the stream content itself. If you can't fix it in 5 minutes, escalate to the Captain so we don't blow our stream windows.";
}

// Slide 28: Playbook A: Starlink Down
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Playbook A: Starlink Outage Failover", "Module 7");

  // Two columns
  // Left: Symptoms
  addCard(slide, 0.5, 1.3, 4.35, 5.5, "red");
  addCardHeader(slide, "Outage Symptoms", 0.7, 1.5, 3.95, 0.4, true);
  addBulletList(slide, [
    { text: "No Internet access on FVR MAIN.", bold: true, color: COLORS.red },
    { text: "Speedtest registers 0 Mbps." },
    { text: "Deco / ASUS logs report WAN disconnection." },
    { text: "Starlink App displays orbital outage error alert.", bold: true }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Action steps
  addCard(slide, 5.15, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Standard Failover Actions", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "1. Check Starlink App:", bold: true },
    { text: "Verify system outage notice in admin logs." },
    { text: "2. Inspect WAN Cable:", bold: true },
    { text: "Verify cable connection from Starlink WAN box into ASUS ROG Rapture WAN 1 port." },
    { text: "3. Power Cycle Starlink:", bold: true },
    { text: "Unplug Starlink power, wait 30 seconds, replug. Wait 2 minutes for orbit locks." },
    { text: "4. Confirm Failover WAN 2:", bold: true, color: COLORS.blue },
    { text: "Verify ASUS console (10.6.33.1) has failed over to PLDT JIREH (WAN 2 active)." },
    { text: "5. Test LAN Speed:", bold: true },
    { text: "Run fast.com wired to confirm bandwidth speed is ≥80 Mbps." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "If our main Starlink dish goes down, we verify the app and physical cables first, then power cycle the dish. Our main ASUS router is configured to automatically failover to our PLDT Jireh router on WAN 2. We just need to check the ASUS admin page to confirm WAN 2 is routing traffic and test the speed.";
}

// Slide 29: Playbook B: Resi / AJA Not Streaming
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Playbook B: Encoder Streaming Failures", "Module 7");

  // Two columns
  // Left: Resi
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Resi Encoder Troubleshooting", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Symptom: YT Production shows offline after 9:50 AM.", color: COLORS.red },
    { text: "1. Access studio.resi.io:", bold: true },
    { text: "Verify if encoder shows 'Connected' status." },
    { text: "2. Check PLDT RESI (10.2.1.1):", bold: true },
    { text: "Ensure dedicated router is online and has active LTE/5G signal." },
    { text: "3. Check Resi Cable:", bold: true },
    { text: "Verify physical Ethernet between PLDT Resi LAN and Resi unit." },
    { text: "4. Reboot Resi unit:", bold: true },
    { text: "Power cycle encoder. Wait 90 seconds." },
    { text: "*Contingency (9:55 AM):*", bold: true, color: COLORS.red },
    { text: "Trigger AJA Backup streams immediately in Restream." }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: AJA Helo
  addCard(slide, 5.15, 1.3, 4.35, 5.5);
  addCardHeader(slide, "AJA Helo Troubleshooting", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Symptom: Restream shows no AJA source input.", color: COLORS.red },
    { text: "1. Ping AJA Unit:", bold: true },
    { text: "Run: `ping 10.6.33.5` from laptop." },
    { text: "2. Check Restream status:", bold: true },
    { text: "Confirm AJA Helo channel is toggled ON." },
    { text: "3. Check AJA Input:", bold: true },
    { text: "Verify SDI/HDMI video input cable from switcher." },
    { text: "4. Power Cycle AJA:", bold: true },
    { text: "Reboot hardware encoder. Wait 60 seconds." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "If our main stream doesn't go live by 9:50 AM, we check the Resi status dashboard and physical connections to the PLDT Resi router. If we can't recover Resi by 9:55 AM, we switch to AJA Helo backup. For AJA issues, we ping its fixed IP 10.6.33.5 and verify the source status in Restream.";
}

// Slide 30: Playbooks C & D: Mesh & Slow Speeds
{
  let slide = pptx.addSlide();
  setSlideBackground(slide);
  addSlideTitle(slide, "Playbooks C & D: Mesh & Slow Speeds", "Module 7");

  // Two columns
  // Left: Playbook C
  addCard(slide, 0.5, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Playbook C: Mesh Offline / Slow Zone", 0.7, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Symptom: A specific venue area reports wifi dropouts.", color: COLORS.red },
    { text: "1. Check Deco Node LED:", bold: true },
    { text: "• [Solid Blue] = Normal\n• [Red/Amber/Off] = Error / Offline" },
    { text: "2. Verify Backhaul Mode:", bold: true },
    { text: "Check Deco App. If node is in 'Wireless backhaul', check and reseat the Ethernet cable." },
    { text: "3. Reboot Node:", bold: true },
    { text: "Power cycle node. Wait 2 minutes." },
    { text: "4. Relocate Node:", bold: true },
    { text: "Move closer to main router if Ethernet run is damaged." }
  ], 0.7, 1.9, 3.95, 4.7);

  // Right: Playbook D
  addCard(slide, 5.15, 1.3, 4.35, 5.5);
  addCardHeader(slide, "Playbook D: Slow Speedtest (<80 Mbps)", 5.35, 1.5, 3.95);
  addBulletList(slide, [
    { text: "Symptom: fast.com shows low speed during pre-service.", color: COLORS.red },
    { text: "1. Verify wired test:", bold: true },
    { text: "Confirm test device has WiFi OFF and is LAN-wired." },
    { text: "2. Check Bandwidth Hogs:", bold: true },
    { text: "Check ASUS router client list (10.6.33.1)." },
    { text: "Pause heavy uploads (CRTVS footage uploads) during early streams." },
    { text: "3. Congestion Notice:", bold: true },
    { text: "Check Starlink app for regional satellite congestion." },
    { text: "4. Failover Check:", bold: true, color: COLORS.blue },
    { text: "Failover streaming units to standalone 5G backup routers (Unicom/Shiloh) if LAN drops." }
  ], 5.35, 1.9, 3.95, 4.7);

  slide.notes = "Our final playbooks deal with mesh nodes and speed issues. For mesh nodes, check the LED color: solid blue is what we want. If it is red or wireless backhaul, reseat the Ethernet cable. If speedtests show under 80 Mbps, confirm the tester turned off their WiFi, and check if anyone is running heavy uploads like CRTVS footage.";
}

// Write the PowerPoint presentation to a file
const outputFilePath = path.join("/Users/rico/Documents/Claude/Projects/Tech Team/Internet Schematic", "Favor_Manila_Internet_Team_SOP.pptx");
pptx.writeFile({ fileName: outputFilePath })
  .then(fileName => {
    console.log(`PowerPoint file generated successfully at: ${fileName}`);
  })
  .catch(err => {
    console.error("Error writing PowerPoint file:", err);
    process.exit(1);
  });
