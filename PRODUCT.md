# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are small-to-medium business owners and founders across varied local verticals (restaurants, clinics, beauty, construction, agriculture, retail) who make the hiring decision themselves — hands-on decision-makers, not in-house marketing departments. Confirmed real client base (see Evidence on Hand) is centered in Cuernavaca, Morelos, México.

## Product Purpose

This is Cliché Marketing Digital's own marketing/lead-generation website. It exists to convert visiting business owners into direct contact (WhatsApp, phone, email, or contact form) by demonstrating the agency's range of services, real client work, and results, and positioning Cliché as the agency worth hiring. Success is a qualified inbound inquiry.

## Positioning

"Tu mejor ángulo en el mundo virtual" (your best angle in the virtual world). Cliché's stated mechanism is finding each brand's own distinct "ángulo" — a strategic and creative direction specific to that business — rather than applying one generic playbook across clients. **Confirmed binding**: future work must preserve this angle-finding positioning, not soften it into generic "we do marketing" language.

## Operating Context

Full-service digital agency offering nine services, each with its own page/modal content already written: Estrategia Digital, Branding & Diseño, Social Media, Publicidad Digital, Desarrollo Web, Producción Audiovisual, Posicionamiento SEO, Automatizaciones, Fidelización de Clientes.

Contact channels: WhatsApp deep link with a prefilled message (`src/config/contact.ts`), phone, email, and a contact form (EmailJS integration). Visitors browse services, portfolio, and testimonials before reaching out.

## Capabilities and Constraints

- Single-page app (Vite + React + TypeScript) with anchor-linked sections (`#servicios`, `#portafolio`, `#nosotros`, `#testimonios`, `#contacto`).
- Light/dark theme toggle, persisted in `localStorage` (`useTheme` hook); logo swaps per theme.
- Contact form sends via EmailJS (`src/config/emailjs.ts`); WhatsApp button opens a prefilled `wa.me` link.
- SEO-optimized for Spanish-language search in Mexico: structured data (LocalBusiness/WebSite JSON-LD), `es-MX` hreflang, Open Graph/Twitter cards, canonical URL `cliche.com.mx`.
- Content and UI copy are Spanish (es-MX) only; no i18n currently.
- Official contact email is **contacto@cliche.com.mx** (confirmed by user), matching the JSON-LD schema in `index.html`.

## Brand Commitments

- Name: **Cliché Marketing Digital** (alternate form: "Cliche Marketing Digital", used where the accent isn't supported).
- Slogan: **"Tu mejor ángulo en el mundo virtual"** — binding, see Positioning.
- Ángulo (angle) positioning — binding, confirmed by user.
- Real logo assets already exist for light and dark modes (`src/assets/logoclicheoriginal.webp`, `logoclichemodooscuro.webp`, plus additional variants).
- Phone: +52 777 188 0691. Instagram: @cliche.digital. Facebook page and Google Maps listing exist (see `index.html` JSON-LD `sameAs`).

## Evidence on Hand

- **Portfolio (real, keep):** 11 real past/current clients with actual logo assets at `src/assets/portafolio/` — Callos, Faisán, Lucca, Félix, MS Agros, Campestre, Cerritos, Sirloncito, Beauty Master, Asbios, Clínica — each tagged with the service category delivered.
- **Stats (real, confirmed by user):** "5+ años de experiencia", "98% satisfacción del cliente", "100% atención personalizada", "99% tasa de retención de clientes" (`StatsSection.tsx`). User confirmed these are true, despite the casual/filler phrasing.
- **Testimonials — removed, not present:** The site previously carried a `TestimonialsSection.tsx` with six fabricated client quotes (invented names, invented growth percentages). Confirmed fake by the user; the component was deleted rather than reworked. The site currently has **no social-proof/testimonials section at all**. Future work must build any testimonials section from real client quotes obtained directly from the user — never invent names, roles, or numbers to fill the gap.
- **Geographic reach — aspirational, not current:** The site's SEO metadata and JSON-LD claim service across all of Mexico plus Colombia, Argentina, Spain, Chile, and the US. User confirmed this is a growth goal, not today's reality — the real, current client base is local to Cuernavaca/Morelos. Treat broad-LatAm framing as brand ambition, not a fact to build further claims on top of.

## Product Principles

1. Every business gets its own "ángulo" — reject generic, one-size-fits-all agency language or visuals.
2. Ground every claim in real proof: real client logos and real (if casually stated) numbers — never fabricate testimonials, names, or results.
3. Speak to the hands-on SMB owner directly — clear, jargon-light Spanish, not enterprise marketing-department language.
4. Local roots come first: Cuernavaca/Morelos is the real base today; broader Mexico/LatAm reach is where the brand is headed, not where it fully is.
5. Every surface should turn curiosity into a direct human contact (WhatsApp, call, form) — awareness alone isn't the goal.
