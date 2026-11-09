---
name: Cliché Marketing Digital
description: A cinematic lens-studio system built on the brand's own camera logo — viewfinder framing, focus-pull motion, 35mm film-frame portfolio, and a scoped tally-light red against the inherited trust-blue palette.
colors:
  primary: "hsl(214, 99%, 33%)"
  primary-foreground: "hsl(0, 0%, 100%)"
  accent: "hsl(214, 75%, 42%)"
  accent-dark: "hsl(178, 100%, 75%)"
  accent-foreground: "hsl(0, 0%, 100%)"
  background: "hsl(0, 0%, 100%)"
  background-dark: "hsl(0, 0%, 0%)"
  foreground: "hsl(0, 0%, 7%)"
  foreground-dark: "hsl(0, 0%, 100%)"
  card: "hsl(214, 30%, 97%)"
  card-dark: "hsl(0, 0%, 5%)"
  secondary: "hsl(214, 20%, 93%)"
  secondary-dark: "hsl(0, 0%, 9%)"
  muted-foreground: "hsl(0, 0%, 40%)"
  muted-foreground-dark: "hsl(0, 0%, 68%)"
  border: "hsl(0, 0%, 84%)"
  border-dark: "hsl(0, 0%, 16%)"
  tally: "hsl(4, 88%, 58%)"
  status-error: "#ef4444"
  status-success: "#10b981"
  whatsapp-brand: "#25D366"
typography:
  display:
    fontFamily: "'Cinzel Decorative', serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  heading:
    fontFamily: "'Tenor Sans', serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "'Raleway', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  hud-caption:
    fontFamily: "'Raleway', sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.15em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  control: "12px"
  card: "16px"
  pill: "9999px"
spacing:
  xs: "0.75rem"
  sm: "1.25rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
    typography: "{typography.body}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
    typography: "{typography.body}"
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
    padding: "28px"
  input:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    typography: "{typography.body}"
---

# Design System: Cliché Marketing Digital

## Overview

**Creative North Star: "The Lens Studio"**

The system reads as a professional photo/film studio built around the brand's own mark — a camera. "Tu mejor ángulo" (your best angle) stops being a metaphor stated in copy and becomes the literal mechanism of the interface: sections come into view like a manual lens racking into focus, the portfolio is shot on 35mm contact-sheet frames, the hero is composed inside a viewfinder with real exposure data, and one scoped tally-light red marks the page's few "live" moments. The trust-blue from the existing camera-logo asset is inherited and committed harder, not replaced — the logo is real, fixed brand equity, and the whole system is built to sit correctly next to it in both themes.

Sections no longer open with a kicker-then-headline pattern; the display headline carries its own weight, occasionally paired with a small camera-HUD readout (an exposure value, a frame count) placed as a corner annotation rather than a label stacked above the title.

**Key Characteristics:**
- Deep trust-blue primary (unchanged, brand-locked by the logo), with the accent hue shifting medium-blue → cyan between light/dark, plus one new scoped exception: a tally-light red reserved for REC/live indicators only.
- Ornate decorative serif for display headlines, paired with a clean, light-weight sans body (typographic pairing inherited; unchanged by the redesign).
- Flat cards with soft borders at rest; shadow, lift, and viewfinder corner-brackets appear only as a hover response.
- Full pill-shaped buttons; rounded-2xl cards; the portfolio's sharp-cornered exception is now a 35mm film frame (sprocket holes, frame number, black stock) instead of a pinned Polaroid.
- Ambient atmosphere comes from faint aperture-iris rings (blurred, conic-gradient blade shapes) instead of plain blurred color blobs.
- The signature scroll-reveal is a **focus-pull**: elements enter blurred and settle sharp. Section thesis blocks additionally carry the inherited slight rotation, fusing "finding your angle" with "coming into focus" into one motion. Cards and grids get the plain focus-pull, no rotation.
- One authored entrance moment: an aperture-iris wipe reveals the page on first load. One cursor-reactive moment (the Hero, unchanged). Magnetic pull on primary CTAs (unchanged).
- A permanent, page-wide film-grain texture (very low opacity, `mix-blend-overlay`) gives every surface a physical, shot-on-film quality instead of a flat digital one.

## Colors

Same near-monochrome blue system as before, with one new scoped addition.

### Primary / Secondary / Accent / Neutral
Unchanged from the inherited system — see token values above. Primary blue is brand-locked by the existing camera-logo asset and is not renegotiable in a redesign.

### Tally light (new, scoped)
- **Tally Red** (`hsl(4, 88%, 58%)`): a small pulsing dot marking the one "recording/live" moment in the Hero's HUD strip. As tightly scoped as WhatsApp green — never used for status, error, or decoration elsewhere.

### Status & third-party (unchanged)
Error red / success emerald (hardcoded Tailwind utilities in `ContactSection`) and WhatsApp green remain scoped exactly as before.

### Named Rules
**The Single-Hue Rule.** Still holds: no third hue enters the system except the two prior scoped exceptions plus the new tally red, which is scoped just as tightly (one component, one purpose).

## Typography

Display/Heading/Body stack is unchanged (Cinzel Decorative → generic serif fallback; Tenor Sans → generic serif fallback; Raleway body) — see the prior fallback note, still accurate: `public/fonts/TheSeason.*` and `public/fonts/Montime.*` do not exist, so Cinzel Decorative and Tenor Sans are the real rendered faces.

**New: HUD caption.** A small (`10–11px`), tracked-out (`0.15em`), tabular-numeral caption style used for camera-readout details — the Hero's `∠ 37° · f/1.4 · Cuernavaca, MX` line, the frame counters in Stats and Portfolio, the section corner tags. Not a kicker: it never sits stacked above a headline as its label: it lives inline, in a corner, or as a HUD overlay on imagery.

### Named Rules
**The One-Word-Italic Rule.** Unchanged: every display headline commits its emphasis to exactly one italic, gradient-colored word.

**No Kicker Rule (replaces the old Eyebrow-First Rule).** Section headlines stand alone; nothing is stacked above them as a label. Where the old eyebrow's information still matters (agency label, "lo que hacemos"), it either merges into the HUD caption vocabulary at a different position (corner tag, HUD strip) or is dropped as redundant with the headline itself.

## Layout

Unchanged container/spacing rhythm (`max-w-7xl`, responsive `section-padding`).

Ambient atmosphere is now **aperture-iris rings** (`ApertureField`, `src/components/ApertureField.tsx`): large, heavily blurred conic-gradient rings echoing camera aperture blades, corner-anchored, 4–8% opacity — replacing the old plain blurred color blobs. Same restraint, new material.

Section thesis blocks (headline, and the Hero's slogan) enter via `useAngleReveal` (`src/hooks/useAngleReveal.ts`): rotated 3–4° off-axis **and** out of focus (`blur(10px)`), settling flat and sharp — a manual-lens-ring turn. Cards and grid items use the new `useFocusReveal`/`focusRevealProps` (same file): blur + fade + rise, no rotation. `prefers-reduced-motion` collapses both to a plain fade.

### Named Rules
**The Aperture Field Rule.** Ambient background atmosphere is always a blurred iris-ring shape from `ApertureField`, never a flat blob or a hard-edged shape.

**The Focus-Pull Rule.** Every scroll-triggered reveal on the page routes through `useAngleReveal` (thesis blocks only) or `useFocusReveal`/`focusRevealProps` (everything else). The thesis block's added rotation stays a one-place signature; grids and cards never get it.

## Elevation & Depth

Unchanged: flat-by-default, hover-triggered lift + tinted shadow. New: hovering a service card or the contact form now also flashes in `ViewfinderFrame` corner brackets (`src/components/ViewfinderFrame.tsx`) — the same "in-frame" motif used permanently on the Hero photo — rather than shadow alone carrying the hover state.

### Shadow Vocabulary
Unchanged glow tokens (`--glow-blue`, `--glow-cyan`), same scoping to primary CTAs only.

### Named Rules
**The Flat-Until-Touched Rule.** Unchanged.

## Shapes

Unchanged corner language (pills for buttons, `rounded-2xl` cards, `rounded-xl` inputs/icons).

The one deliberate break is now the **35mm film frame** (Portfolio), not the Polaroid: sharp corners, black film stock, a sprocket-hole strip (`.sprocket-row` in `index.css`) top and bottom, a frame number (`01A`, `02A`...), and category text styled as exposure data. No rotation — film runs straight through a gate, it doesn't tilt.

### Named Rules
**The Film Frame Exception (replaces the Polaroid Exception).** Sharp corners, black stock, and sprocket perforations exist in exactly one place: the portfolio grid. Do not extend this to other cards; do not soften it to match the rest of the system.

## Components

### Buttons
Unchanged shape/color/magnetic-pull system. Primary CTAs and the WhatsApp float now also carry `whileTap={{ scale: 0.95 }}` — a small shutter-click compression on press, reinforcing the camera mechanism at the moment of action.

### Cards / Containers
Unchanged base styling. Service cards and the contact form gain a `ViewfinderFrame` overlay that fades in on hover/focus.

### Navigation
Unchanged structure. The theme toggle gains a thin accent ring that blooms in on hover — an aperture-iris cue on the one control that changes the whole "exposure" of the page (light/dark).

### HUD Caption (new recurring pattern, replaces the Eyebrow Label)
Small, tracked-out, tabular-numeral text used for camera-readout details — positioned inline, in a corner, or over imagery, never stacked above a headline as its label. See Typography → HUD caption and → No Kicker Rule. `AngleMark` (the literal ∠ glyph) is retired from this pattern since eyebrows are gone; the aperture-iris SVG in `AboutSection` and the `ApertureField` rings now carry the "ángulo made graphic" role instead.

### WhatsApp Float (signature component)
Unchanged.

### Cursor Light (Hero-only signature moment)
Unchanged cyan radial glow, now layered under a permanent inset vignette (darkened corners) and `ViewfinderFrame` corner brackets on the same photo panel — together reading as "looking through a fast prime lens," not just a hover glow.

### Hero HUD Strip (new signature component)
A top overlay bar on the Hero photo panel: a pulsing tally-red dot plus "Agencia de Marketing Digital" in HUD caption type — the literal recording/live indicator of a camera, and the place the old eyebrow's copy now lives. Paired with a bottom bar (unchanged carousel controls) that already read as a frame counter and now leans into it further.

### 35mm Film Frame (signature component, Portfolio)
See Shapes → Named Rules. Non-interactive by design (no `cursor-pointer`, no click target) — same reasoning as the retired Polaroid: don't imply an affordance with nothing behind it. Focus brackets (`ViewfinderFrame`-style) flash in on hover as the one motion cue.

### Aperture Iris Loader (new, one-time entrance)
`src/components/ApertureIrisLoader.tsx`: a full-viewport black wipe that irises open over the already-mounted page on first load (`clip-path: circle()`, ~900ms), echoing the camera mechanism at the moment the site "opens its aperture" onto the visitor. No layout shift, no blocking. Fully skipped under `prefers-reduced-motion`.

### Film Grain (new, page-wide texture)
`.grain-overlay` in `index.css`: a fixed, fractal-noise SVG texture at very low opacity (`--grain-opacity`, 5–7%), `mix-blend-mode: overlay`, mounted once at the page root. Gives every surface a "shot on film" material quality. Disabled under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** let the display headline carry its own weight — no kicker stacked above it.
- **Do** route every scroll reveal through `useAngleReveal` (thesis blocks) or `focusRevealProps`/`useFocusReveal` (everything else); both are blur-based focus-pulls.
- **Do** use `ApertureField` for ambient atmosphere; keep it corner-anchored and low-opacity.
- **Do** keep every button a full pill; reserve `rounded-2xl`/`rounded-xl` for cards, panels, and inputs.
- **Do** keep cards flat and bordered at rest, adding lift + `ViewfinderFrame` brackets only on hover/focus.
- **Do** reserve glow shadows for primary CTA buttons only.
- **Do** keep the tally-red dot to the Hero's HUD strip and nowhere else.
- **Do** respect `prefers-reduced-motion` on every motion addition — it already governs the carousel, the WhatsApp bob, the focus-pull reveals, the cursor glow, the aperture-iris loader, and the film grain.

### Don't:
- **Don't** bring back a kicker/eyebrow label above a headline — it's a banned category default, not a style choice.
- **Don't** introduce a third hue beyond the blue/cyan family and the three scoped exceptions (status red/emerald, WhatsApp green, tally red).
- **Don't** extend the 35mm Film Frame's sharp corners, black stock, or sprocket perforations beyond the portfolio grid.
- **Don't** apply the thesis-block's rotation to cards, grid items, or body copy.
- **Don't** add a second cursor-reactive surface or a custom cursor elsewhere on the page — the Hero glow stays the page's one authored cursor moment.
- **Don't** assume `"THE SEASON"` or `"Montime"` render as-declared — the real display/heading typefaces are Cinzel Decorative and Tenor Sans until those font files exist.
