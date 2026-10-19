# EMPOWERALL

EMPOWERALL is a European agroecology project. It brings new generation farmers, researchers, advisors, policymakers and local communities together to co-create agroecological pathways for change.

Four Agroecology Living Labs sit inside Long-Term Socio-Ecological Research (LTSER) Platforms of eLTER RI:

- Romania — Brăila Islands
- Slovakia — Trnava
- France — Zone Atelier Plaine et Val de Sèvre
- Spain — Doñana

The project runs from September 2026 to August 2029, with 4 Living Labs in 4 countries, 13 partners from 7 countries, and 4 LTSER Platforms.

This repository is the public landing page for that project.

## The site

A single bilingual page: English at `/`, Portuguese at `/pt`. Day-by-day work is recorded in [CHANGELOG.md](CHANGELOG.md).

The page, in order:

- **Hero** — full-screen consortium photograph, headline, and key facts
- **About** — the challenge for new generation farmers, with a supporting photograph and a facts row
- **What needs to change?** — Access, Knowledge, Networks, Voice
- **Approach** — Listen, Connect, Co-create, Learn & scale
- **Living Labs** — dotted map of Europe with the four labs and their LTSER Platform names
- **Long-term Observation** — how the labs connect to eLTER monitoring (soil, biodiversity, water, land use, farming practices)
- **People** — the actors the project is built with
- **Partners** — title, intro, and a logo strip of partners that already have a mark

The header is transparent over the hero, hides on scroll down, and returns solid on scroll up. A language switcher sits in the header and footer. The footer carries the wordmark, tagline, and navigation.

Around the page: design tokens in Tailwind v4, per-locale metadata, sitemap and robots.

## Still open

- Portuguese copy is a machine draft in impersonal European Portuguese and needs native review.
- Living Lab descriptions are empty.
- Missing logos: INGENIO (CSIC-UPV), CEBC / INRAE, GODS, SAS DLR, AGROSMART CLUSTER. Missing a Spain Living Lab photo. About currently uses the France aerial.
- Placeholders still to replace: public URL, contact email, social links, privacy and cookie pages, EU emblem, and the funding statement.
- Held for the kick-off meeting: lock-ins framing, method wording, and merging Living Labs with Long-term Observation. A discussion sketch lives at [`docs/kom/option-a.html`](docs/kom/option-a.html) and is not on the site.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`@theme` tokens)
- next-intl
- Motion (`motion/react`)

## Scripts

```bash
npm run dev
npm run check
npm run format
npm run generate:map
```

`check` runs lint, typecheck, i18n key sync, and production build. `format` runs Prettier. `generate:map` rebuilds the committed Europe dots used by the Living Labs map.

## Where things live

- `messages/` — all user-visible copy (`en.json` is the source of truth; `pt-PT.json` must match its keys)
- `src/app/[locale]/` — the page, layout, and not-found
- `src/components/sections/` — one folder per section
- `src/config/site.ts` — site name, nav, locales, and placeholders for URL, email, and legal links
