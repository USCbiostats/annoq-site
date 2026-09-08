# CLAUDE.md — annoq-site

Standing context for Claude Code sessions in this repo. Terse; read the files it points to.

## What this repo is

**annoq-site** is the AnnoQ web UI (Angular 9) for the **TOPMed stack** — stage 4 of the pipeline
`annoq-data-builder → annoq-database → annoq-api-v2 → site`. It queries **annoq-api-v2**
(FastAPI + Strawberry GraphQL) and is served at **topmed.annoq.org** (TOPMed: Freeze 8).

**Stage 4 is split by stack.** `annoq-site-v2` (**React** + TypeScript, Vite) is **released** and
is the production UI at **annoq.org (HRC r1.1)**. annoq-site is **superseded on HRC but still the
TOPMed beta UI** — it is *not* deprecated, and TOPMed UI work still lands here. Until the **TOPMed
cutover**, a UI change meant for both stacks must be implemented **twice** (Angular here, React in
annoq-site-v2).

- GraphQL is called via **apollo-angular** with **inline `gql` template strings** (no `.graphql`
  files). The main query builder is `src/app/main/apps/snp/services/snp.service.ts`; the search form
  is the Annotation component (`src/app/main/apps/annotation/annotation.component.{ts,html}`).
- Generated GraphQL types live in `src/generated/graphql.ts`, produced by
  `npm run graphql_codegen` (config `graphql_codegen.ts`), which **introspects the live TOPMed
  api-v2** (`https://api-v2.topmed.annoq.org/graphql`). A new api-v2 field/arg must be deployed there
  (or codegen pointed at a local api-v2) before regeneration picks it up.
- **api-v2 has `auto_camel_case=False`** — GraphQL argument and field names are the exact
  Python/ES names (`search_hrc`, `Mapped_in_HRC`, `chr_hg19`, …). Do **not** camelCase them in
  queries. This is easy to get wrong.

## Cross-repo context lives in the hub

This repo is coordinated by **`../annoq-proj`** (docs + Claude skills, no app code). For the full
picture — the 4-stage pipeline, the **two parallel deployment stacks** (HRC = default branches;
TOPMed = named issue branches, **no `TopMed` branch**: the **issue-19** line is deployed at
topmed.annoq.org, the **issue-78** line is in flight),
shared contracts, and branch/commit naming — read `../annoq-proj/CLAUDE.md` and
`../annoq-proj/docs/`. A session here does **not** auto-load the hub's CLAUDE.md (sibling dir), so
consult it explicitly when scope crosses repos. Both stacks currently serve **SNPs only (no indels)**.

Note that `graphql_codegen` here introspects the **TOPMed** api-v2 — which matches this repo's
stack.

**annoq-site is the *owning repo* for many platform issues** — a fix here often spans api-v2 /
data-builder too, but branches/commits here use the owning form: branch `issue-<num>-<desc>`,
commit `For #<num>`.

## Active task

- **Issue #78 is the TOPMed-cutover umbrella** ("Integrate TopMed website into Annoq.org"); the
  work below is one task under it.
- **Issue #78 — add "Search HRC data" to the search page** (TOPMed stack). Branch
  `issue-78-add-hrc-mapping-info` — the **issue-78 line**, which is *not* what topmed.annoq.org
  currently serves (that is the **issue-19** line: `issue-19-load-topmed` here,
  `annoq-site-19-add-update-metadata-for-top-med-data` in data-builder / database / api-v2). The api-v2 side is implemented (its branch
  `annoq-site-78-add-hrc-mapping-info`). See **[`docs/issue-78-hrc-mapping.md`](docs/issue-78-hrc-mapping.md)**
  for the exact GraphQL contract to call and the UI change plan.

## Working rules

- api-v2's schema is the source of truth; match its exact (non-camelCased) names.
- After a user-facing change, update integrated docs; if a shared contract moved, run
  `../annoq-proj` → `/annoq-doc-sync`.
