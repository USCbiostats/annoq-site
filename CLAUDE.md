# CLAUDE.md — annoq-site

Standing context for Claude Code sessions in this repo. Terse; read the files it points to.

## What this repo is

**annoq-site** is the **current** AnnoQ web UI (Angular 9) — stage 4 of the pipeline
`annoq-data-builder → annoq-database → annoq-api-v2 → annoq-site`. It queries **annoq-api-v2**
(FastAPI + Strawberry GraphQL). `annoq-site-v2` (React) is a separate, **unreleased** next-gen UI —
not this repo.

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
picture — the 4-stage pipeline, the **two parallel deployment stacks (HRC `main` / TOPMed beta)**,
shared contracts, and branch/commit naming — read `../annoq-proj/CLAUDE.md` and
`../annoq-proj/docs/`. A session here does **not** auto-load the hub's CLAUDE.md (sibling dir), so
consult it explicitly when scope crosses repos. Both stacks currently serve **SNPs only (no indels)**.

**annoq-site is the *owning repo* for many platform issues** — a fix here often spans api-v2 /
data-builder too, but branches/commits here use the owning form: branch `issue-<num>-<desc>`,
commit `For #<num>`.

## Active task

- **Issue #78 — add "Search HRC data" to the search page** (TOPMed stack). Branch
  `issue-78-add-hrc-mapping-info`. The api-v2 side is implemented (its branch
  `annoq-site-78-add-hrc-mapping-info`). See **[`docs/issue-78-hrc-mapping.md`](docs/issue-78-hrc-mapping.md)**
  for the exact GraphQL contract to call and the UI change plan.

## Working rules

- api-v2's schema is the source of truth; match its exact (non-camelCased) names.
- After a user-facing change, update integrated docs; if a shared contract moved, run
  `../annoq-proj` → `/annoq-doc-sync`.
