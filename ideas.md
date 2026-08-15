# GoTime Public Website — Design Direction

## Brand Findings

The supplied GoTime brand guide establishes a bold, community-minded identity centred on movement, momentum, sport, and shared excitement. The core mark is a geometric rounded-square device with a purposeful diagonal forward cut: soft enough to feel friendly, exact enough to feel technologically credible. Its visual language is expressed through deep navy, electric cyan, a quiet lavender, warm ivory, and black. The guide specifies **Varien Regular** as the weighty display direction and **Damaris Regular** as the calmer supporting typographic direction. Until licensed webfont files are supplied, the implementation will preserve the hierarchy with close web-safe fallbacks rather than pretending to embed unavailable fonts.

## Three Possible Directions

### 1. Orbiting Availability
**Very Brief Intro:** A nocturnal spatial interface where venue fragments and glowing time cards are gathered into one clear, organised booking moment. It makes GoTime feel active, premium, and profoundly useful.

**Probability:** 0.04

### 2. Venue Field Notes
**Very Brief Intro:** A more editorial, ivory-led visual journal about the places people play, mixing oversized type, graphic maps, and tactile photography. It feels human, local, and carefully curated.

**Probability:** 0.08

### 3. The Booking Current
**Very Brief Intro:** A kinetic blue current carries players, venue cards, and time slots across a fluid layout. The result is sporty, extroverted, and visibly in motion.

**Probability:** 0.02

## Chosen Direction — Orbiting Availability

### Design Movement

**Neo-futurist wayfinding**, tempered by contemporary sports identity. The website should feel like a beautifully choreographed navigation system for real-world places, rather than a generic software interface or an esports aesthetic.

### Core Principles

1. **From scattered to certain:** Every dense visual cluster resolves into a clear decision or route.
2. **Kinetic geometry:** The brand mark’s rounded mass and forward diagonal cut become the foundation for panels, crops, masks, and motion paths.
3. **Depth with restraint:** Use layered cards, luminosity, and atmospheric grain for spatial richness, while reserving glass and blur for genuinely dimensional moments.
4. **Editorial breathing room:** Pair high-energy hero interactions with generous calm surfaces for an experience that feels premium and readable.

### Color Philosophy

Deep **GoTime Navy** is the base field: it creates credibility, focus, and cinematic depth. **GoTime Cyan** signals discovery, live possibility, and action; it is used sparingly but unmistakably for routes, active states, and the most important CTAs. **GoTime Lavender** introduces a human, optimistic lift at transition moments. **Warm Ivory** provides an analogue counterweight so that venue stories and legal content do not feel sterile. Black remains functional, not decorative.

### Layout Paradigm

The experience moves along a **discovery corridor**, not a centred card grid. Sections alternate between an expansive, asymmetric field and a quieter reading/browsing edge. The hero uses a left-origin story and a right-side depth stage. Later sections use orbital clusters, linear booking rails, and offset editorial panels so visitors feel they are travelling from options to a booked session.

### Signature Elements

1. **Orbit rails:** fine cyan paths, dots, and directional fragments showing the movement from venue discovery to a chosen time.
2. **Diagonal momentum cuts:** the logo’s precise angled notch shapes card corners, image frames, CTA surfaces, and section edges.
3. **Availability chips in depth:** rounded time tiles and subtle glowing status dots float at different planes, always grounded by real UI-like hierarchy.

### Interaction Philosophy

Interactions should reveal organisation: hovering a venue card brings its time options into focus, motion on the hero gathers previously scattered elements, and buttons compress slightly before releasing forward. Navigation remains exceptionally direct. The experience should reward curiosity without ever making basic information hard to reach.

### Animation

The page follows **impact → calm → impact → calm**. The hero performs one controlled convergence sequence; spatial cards respond gently to pointer movement on desktop; scroll reveals use short opacity-and-transform movements with a 40–70 ms stagger. Orbit paths pulse very subtly, never distractingly. On mobile, all depth effects simplify to a single composed scene and essential motion remains optional under `prefers-reduced-motion`.

### Typography System

The display hierarchy follows the supplied **Varien** intent: compact, athletic, heavy, and often uppercase. The site will use a close bold display fallback where the licensed font is unavailable, with slightly tightened tracking and short, decisive lines. Body copy follows the supplied **Damaris** intent: light, open, and clear, using a restrained geometric sans fallback. Headlines are large and declarative; supporting copy is concise, sentence case, and rarely exceeds two lines on desktop.

### Brand Essence

**GoTime turns the scattered search for a place to play into one confident booking journey for players and venues.**

**Personality:** kinetic, confident, welcoming.

### Brand Voice

Headlines should be compact, directional, and active. Calls to action should feel like the next sensible step, not like generic conversion language. Microcopy should explain availability and movement plainly.

> “Find your place. Pick your time. Go.”

> “Make your venue easier to discover.”

### Wordmark & Logo

Use the supplied GoTime mark and wordmark as the authoritative brand asset. Reinforce—not redraw—the mark through an abstract rounded-square container with a forward diagonal cut. Do not generate or typeset an imitation wordmark.

### Signature Brand Color

**GoTime Cyan — #39A9E2**. It is the unmistakable signal of possibility and forward movement within a navy-led system.

## Implementation Commitments

- Use the supplied logo image as the site logo and favicon source; do not invent a new mark.
- Keep store and support destinations configurable; do not invent live app-store, support, or contact URLs.
- Use clear marked placeholders for legal text because final approved policy and terms have not been supplied.
- Build all layouts using logical CSS where practical so an Arabic RTL layer can be introduced cleanly later.

## Style Decisions

- The forward diagonal cut from the GoTime mark is now a recurring structural motif across primary CTAs, booking steps, editorial frames, support panels, and legal notices. Plain rounded rectangles are reserved for small utility inputs only.
- Every page carries at least one restrained wayfinding signal. Homepage calm sections use booking rails and route markers; support and legal routes use subtle orbital fields, directional cuts, and cyan status anchors.
- GoTime Cyan remains tied to action, availability, route progress, and live status. Lavender is used only as a soft depth and transition accent, not a competing action colour.
