# Changelog

All notable work on the EMPOWERALL landing page is recorded here, as one report per working day.

## [Unreleased]

### 2026-10-01

**Summary**
The header over the hero now reads in white while it is transparent, and the hero photograph lags behind the scroll. CSIC’s agreed copy for the 22 October revision is on the page. About pairs the challenge text with a photograph, and the key facts sit as a row beneath. “What needs to change?” is its own dark band of four mixed cards. Long-term Observation now has a white card on the photo that names what is monitored, without invented readings. Lock-ins framing, method wording, and merging sections 04 and 05 stay off the live site until partners decide.

**Done**
- **Header:** the wordmark, navigation, language control and menu icon are white over the hero. They return to ink and forest once the bar turns solid.
- **Hero:** a supporting line states that the Living Labs are embedded in LTSER Platforms of eLTER RI. The facts strip no longer sits under the photograph. The photograph lags by about 40% of the scroll while the hero leaves the screen, in the same way as the Verdano hero, and the crop at rest is unchanged. It stays still when reduced motion is on. Quick interface-feel review: Approve. The movement is transform only, and the photo still covers the frame while any of the hero is on screen.
- **About:** the challenge text sits beside a supporting landscape photograph, using the same rounded image card as Long-term Observation. The facts are a row below (4 Living Labs in 4 countries, 13 partners from 7 countries, 4 LTSER Platforms, Sep 2026 – Aug 2029), two-by-two on small screens. The fact numbers use Fraunces.
- **What needs to change?:** a Deep Forest band after About, with four cards in mixed rhythm — forest, Romania photo, sprout, Slovakia photo. Each card has the numbered index, title and body. Access includes farm succession.
- **Approach:** Learn & scale names eLTER observation and EU-level policy recommendations.
- **Living Labs:** each card shows the LTSER Platform name (Doñana, Zone Atelier Plaine et Val de Sèvre, Brăila Islands, Trnava). “Observe · Measure · Learn” is gone from this section.
- **Observation and People:** Observation names eLTER RI and the LTSER Platforms. A white card with a shadow sits on the photograph and lists soil, biodiversity, water, land use and farming practices, with no values. The card is hidden on small screens. People adds rural youth and consumers.
- **Partners:** the section now shows the title, intro and logo marquee. The three-column list (coordinator, beneficiaries, associated partners) is commented out until it is needed again.
- **Footer:** brand and tagline sit on the left; contact and navigation sit together on the right as two aligned columns, sharing the same top edge.
- **Terminology:** “youth-led” / “liderada pelos jovens” in the Open Graph description now uses new generation farmers. No “young farmers” remains in either locale.
- **KoM:** a static Option A sketch lives at `docs/kom/option-a.html` (nested Living Lab inside Platform, CSIC draft copy, one-line relationship left for each Platform team). It is not on the live site.
- **Interface-feel review:** quick, Approve on the needs cards, the About text-plus-image layout, and the Observation monitored card. The inner card uses `rounded-lg` so it stays concentric with the 1rem inset on the photograph. A portrait crop for the About photo was dropped because it dwarfed the copy. Unused `Eyebrow` import removed from the hero.

**Decisions**
- Lock-ins framing, the “transdisciplinary action research…” method line, and the 04/05 merge stay for the KoM. Option A is a discussion file only.
- Coordinator is listed in its own group, not repeated under beneficiaries.
- Project dates use `month: short` + `year` per locale (`Sep 2026 – Aug 2029` in English) rather than a count of years.
- The needs eyebrow “The barriers” / “As barreiras” is a draft with no source copy, so it can later become “lock-ins” from messages only.
- Photo cards in the needs band reuse the Romania silo and Slovakia trial photographs. They are decorative (`alt=""`); the titles carry the meaning.
- About uses a landscape photograph sized to sit with the copy, not a portrait crop or a full half-width of the band.
- The partner group columns stay in the code, commented out, so they can be restored without rewriting the list.
- The Observation overlay lists what is monitored, not sample sensor readings, so the page does not invent project data.
- The hero parallax is a second scroll-linked effect, alongside the Approach stack. It only moves the photograph.

**Needs attention**
- Every Portuguese string is a machine draft in impersonal European Portuguese and needs native review, including all keys added today and the drafted `needs.eyebrow` and `observation.monitored.*`.
- Partner-pending at the KoM: lock-ins framing, method wording, merge of Living Labs and long-term observation.
- Confirm with CSIC: the five monitored dimensions on the Observation card (soil, biodiversity, water, land use, farming practices).
- Missing assets: logos for INGENIO (CSIC-UPV), CEBC / INRAE, GODS, SAS DLR and AGROSMART CLUSTER; a Spain Living Lab photo; a dedicated About photograph (the France Living Lab aerial is used for now).
- Missing copy: Living Lab descriptions; the one-line Living Lab / Platform relationship for Option A (CSIC, CEBC, UB and SCDA, ILE).
- Placeholders to replace: `site.url`, footer email, social URLs, privacy and cookie links, the EU emblem, the funding statement, and the advisory panel names.
- Funding acknowledgement rule (Agroecology Partnership, EU emblem, six national funders) still has no owner.
- Not verified: Lighthouse on a production host; production `next build` failed this session on Google Fonts under Turbopack (`next/font/google` resolve), not on the copy changes. The hero parallax was measured from scroll position, not replayed in the Animations panel.

**Technical notes**
- Tokens: `--color-text-on-media` (white), `--color-surface-inverse` (forest-700), `--color-surface-highlight` (sprout-200), `--color-image-outline-inverse` (white at 10%), `--spacing-glass-card` (16rem). Section gained an `inverse` tone. No new dependencies. Partner group columns are commented out in `Partners.tsx` so they can be restored in place. Hero drift lives in `motionConfig.parallax.heroDrift` (`40%`). No new message keys.
- Messages: added `hero.distinctive`, `hero.facts.platforms.*`, `hero.facts.duration.range`, `livingLabs.labs.*.platform`, `people.actors.ruralYouth`, `people.actors.consumers`, `partners.groups.*`, `partners.associatedNote`, `partners.advisoryPlaceholder`, `needs` (eyebrow, title, items), `challenge.visualAlt`, `observation.monitored` (title, items). Moved `challenge.needsTitle` / `challenge.items.*` into `needs`. Removed `hero.facts.countries.*`, `hero.facts.duration.caption`, `livingLabs.process.*`. Coordinator label is now INGENIO (CSIC-UPV). 141 keys, English and Portuguese in sync.

**Checks**
typecheck pass · lint pass on the hero parallax files · i18n not re-run (no message changes) · build not re-run (still the earlier Turbopack Google Fonts failure) · hero parallax checked at 390 and at the desktop window in pt-PT

### 2026-09-30

**Summary**
The landing page went from an empty repository to a complete, bilingual (English and Portuguese) single page in one day. The foundation, all seven sections from the copy, consortium photography, and a polish pass on the header, footer and typography are done. Living Labs now sits on a dotted Europe map, and the partner logos that exist loop in a strip inside Partners. What remains is mostly content: Portuguese review, a few missing assets, and real contact and legal links.

**Done**
- **Foundation:** Next.js 16 app with Tailwind v4 design tokens, English at `/` and Portuguese at `/pt`, per-language metadata, sitemap and robots, a Motion animation setup, and a set of reusable UI building blocks.
- **Page sections:** Hero with key facts, Challenge, Approach, Living Labs, Observation, People, and Partners, in the order of the copy. English is taken verbatim from `/docs/copy`.
- **Partners:** a full-width logo strip on the page background, under the introduction. It loops, pauses on hover and focus, and stays still when reduced motion is on. There is no name-card grid. Only partners with a logo appear.
- **Living Labs:** a dotted map of Europe, centred and capped at the narrow width. Coastlines and borders follow the real country shapes (Italy and the Balkans included; the UK, Ireland and the Nordic countries are left out, since there is no Living Lab there), with Romania, Slovakia, France and Spain in coral. “Observe · Measure · Learn” sits at the top right of the section, above the map. On large screens each photo card sits beside its country, linked by a short line to a small pin; the cards show the country name only. On smaller screens the map is full width and the cards sit in a two-column grid below it.
- **Hero:** full-screen consortium photograph under a light top-to-bottom scrim. The headline is left-aligned on the standard display size, with `future` / `futuro` set in italic Fraunces as the accent. The “Discover the project” button stacks above the bottom frost (`z-sticky`) so it stays sharp.
- **Photography:** consortium photos for the hero, Observation, and the Living Lab cards. In Observation the photograph sits on the left and the text on the right.
- **Typography and colour:** Inter for body text, Sora for headings and interface, Fraunces only for accents. The page base is white; the footer sits on Deep Forest with its own inverse colours.
- **Header:** fixed at the top. On the landing page it is transparent over the hero with light controls, hides when scrolling down and comes back solid when scrolling up. Other pages get a solid bar. No bottom border. The logo scrolls back to the top on the landing page and goes home from anywhere else. The language control shows `EN` / `PT` and opens a list of full language names.
- **Footer:** an oversized wordmark built from the logo letterforms, sized fluidly and cleared above the bottom screen blur so no letters are cut off.
- **Screen-edge blur:** a soft frosted fade at the bottom of the viewport as content scrolls off. It never blocks clicks and is removed for users who ask for reduced transparency.
- **Smooth scrolling:** Lenis, which keeps native sticky behaviour, pauses while the mobile menu is open, and turns off under reduced motion.
- **Favicon:** the browser tab uses `src/app/favicon.ico`.
- **Accessibility and quality:** skip link, one `h1`, labelled sections, 44px touch targets, visible focus rings, `lang` on the language names, the Approach steps exposed to screen readers once rather than twice, and client components receiving only the translations they need.
- **Interface-feel review:** full pass, verdict Approve, followed by quick passes on each later change, including the Living Labs map and the partner logo strip (quick, Approve). The photo outline was left off the logos, because it would frame the empty padding around each mark.

**Decisions**
- Inter for body text departs from the moodboard, which names Sora for captions and technical text. It was requested as the reading face; Sora stays for display and interface.
- The header's hide and show is a plain CSS transition, not a Motion animation, so it does not count against the motion budget.
- The hero CTA uses `z-sticky` (same layer as the header) so it paints above the frost. `isolate` on the hero frame was removed so that z-index can reach the overlay.
- The Spain Living Lab reuses the France trial photo until a Spain photo is supplied.
- Social icons are small inline SVGs because the icon library (`lucide-react` 1.x) no longer ships brand logos.
- Coral is never used for small text, because it fails AA contrast. Primary buttons are forest on sand. On the Living Labs map, coral is used at a large enough size (filled country dots) that the pairing with sand holds.
- The Spain Living Lab card sits `bottom-end` of its pin, not `bottom-start`, so it stays on the peninsula at 1024px instead of overflowing the left edge.
- The Europe dots are generated once with `dotted-map` and committed; the package is a devDependency and does not ship to the browser.
- The logo SVG keeps its original green (`#0A5825`); the theme's forest token is `#0E582D`.

**Needs attention**
- Every Portuguese string is a machine draft in impersonal European Portuguese and needs native review, including the updated `livingLabs.mapLabel`.
- Missing assets: logos for CSIC / INGENIO, CEBC / INRAE, GODS, SAS DLR and AGROSMART CLUSTER. Those five are not on the page until a logo is added. Also missing: a Spain Living Lab photo. `eapa.png` and `university-of-bucharest.webp` are in the partners folder but are not used (`eapa` is not one of the 13 partners; the WebP repeats the Bucharest PNG).
- Missing copy: the Living Lab descriptions (`livingLabs.labs.*.description`) are empty.
- Placeholders to replace: `site.url`, footer email, social URLs, privacy and cookie links, the EU emblem, and the funding statement.
- Not verified: Lighthouse on a production host, replaying the animations at 10% speed, the logo strip under reduced motion, the screen-edge blur in Firefox on Windows, inverse text contrast over the lightest parts of the hero photo, headline wrapping at 320px, and a real inner page (none exists yet).
- Lint warning: `Eyebrow` is imported but unused in `Hero.tsx`.

**Technical notes**
- Dependencies: `next-intl` (translations), `motion` (animation), `lenis` (smooth scrolling), `clsx` and `tailwind-merge` (class merging), `lucide-react` (icons), `class-variance-authority` (component variants); dev: `dotted-map` (Europe dot generation only), `prettier`, `prettier-plugin-tailwindcss`. Fonts load through `next/font/google` (Sora, Fraunces, Inter, with `latin-ext` for Portuguese).
- Tokens: forest, sand, clay, coral, and sprout palettes; semantic colours including an inverse set for the footer; map colours (`--color-map-dot`, `--color-map-dot-active`); the type scale (`display-*`, `heading-*`, `body-*`, `eyebrow`, `stat`, `wordmark`); section spacing, header height, and hit-area spacing; `--size-map-card` / `--spacing-map-card` and `--spacing-map-pin`; the logo strip (`--spacing-marquee`, `--size-marquee-logo`, `--duration-marquee`, `--mask-marquee`); radii, layered shadows, motion durations and easings, press scale `0.96`; `--background-image-hero-scrim`; the screen-edge blur set (`--size-viewport-blur`, `--spacing-viewport-blur`, `--blur-viewport-1` to `-8`).
- Messages: `meta`, `common`, `languages`, `nav`, `footer`, `notFound`, `hero`, `challenge`, `approach`, `livingLabs`, `observation`, `people`, `partners` (124 keys, English and Portuguese in sync). `partners.logosLabel` names the logo strip. `livingLabs.mapLabel` describes the dotted map. Removed `partners.coordinatedBy` and `partners.logoMissing`.
- Scripts: `typecheck`, `check:i18n`, `check`, `format`, `generate:map`. Package manager is npm.

**Checks**
typecheck pass · i18n pass (124 keys) · lint and build not re-run after the logo strip, the Living Labs process-line move, or the Observation swap · checked in pt-PT: the process line sits at the top right of Living Labs, and the Observation photograph is on the left at 1440 with the text stacked above it at 390 (English not rechecked; the locale cookie stayed on Portuguese)
