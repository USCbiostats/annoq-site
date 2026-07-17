# Issue #78 — "Search HRC data" checkbox (annoq-site) — Design

Owning repo: **annoq-site** (TOPMed stack). Branch `issue-78-add-hrc-mapping-info`, commits `For #78`.
Companion handoff: [`docs/issue-78-hrc-mapping.md`](../../issue-78-hrc-mapping.md) (the api-v2 contract).

## Goal

Add a **"Search HRC data"** checkbox to the search form. When checked, the site threads the
api-v2 argument `search_hrc: true` into the relevant queries, restricting results to TOPMed SNPs
mapped to HRC r1.1 (`Mapped_in_HRC == "Y"`) and interpreting/returning **hg19** coordinates.
Default (unchecked) is unchanged hg38 full-dataset behavior.

## Backend status (already in place)

- Local api-v2 at `http://localhost:8001` exposes `search_hrc: Boolean` on `get_SNPs_by_*`,
  `get_aggs_by_*`, `count_SNPs_by_*`, `download_SNPs_by_*`, and `gene_info` (verified via
  introspection). **Not** on the `*_by_keyword` family or `annotations`.
- api-v2 runs `auto_camel_case=False` — the arg is used verbatim as `search_hrc` (no camelCase).
- The HRC/hg19 SNP fields (`chr_hg19`, `pos_hg19`, `ref_hg19`, `alt_hg19`, `Mapped_in_HRC`,
  `HRC_rs_dbSNP151`) are served by api-v2's `/annotations` endpoint under the "HG19 Info" tree
  category, so they are already selectable from the annotation tree at runtime.

## Design decisions

1. **HRC/hg19 columns — user picks from the tree.** No auto-add logic. The fields already exist in
   the annotation tree; users select them like any other column. Keeps the change minimal and avoids
   coupling the checkbox to column-selection state.
2. **Coordinate UX — relabel + hint.** While the box is checked, the coordinate space is hg19, so
   the chromosome Start/End labels and the genome note reflect hg19; a short hint surfaces the flip.
3. **Codegen — regenerate against local api-v2**, then revert the schema URL (see below).

## Changes

### 1. Form control — `src/app/main/apps/annotation/annotation.component.ts`
In `createAnnotationForm()` add `searchHRC: new FormControl(false)`.

### 2. Template — `src/app/main/apps/annotation/annotation.component.html`
- Add a `mat-checkbox` bound `formControlName="searchHRC"`, labeled **"Search HRC data"**, in the
  Input Query header area (visible across all active input modes; keyword mode is disabled).
- Make the genome `<small class="annoq-genome-version">` dynamic:
  `AnnoQ is based on GRCh38/hg38` normally → `AnnoQ is based on GRCh37/hg19 (HRC r1.1)` when checked.
- In the chromosome `*ngSwitchCase`, relabel Start/End (e.g. `Start (hg19)` / `End (hg19)`) and show
  a short hint when `searchHRC` is checked.
- In the VCF File `*ngSwitchCase`, show a short hint when `searchHRC` is checked that coordinates in
  the uploaded VCF are read as **hg19** in HRC mode. (The site builds the id string
  `chr:pos<ref>>alt` identically either way; api-v2 reinterprets it against hg19 position/ref/alt when
  `search_hrc: true`, so the user must supply hg19 coordinates.)

### 3. Thread the flag — `src/app/main/apps/snp/services/snp.service.ts`
In `getSnps()`, add `search_hrc: annotationQuery.searchHRC` to the `aggQuery.args`,
`countQuery.args`, and `snpQuery.args` for the supported modes only:
**chromosome, rsID, rsIDs, IDs (chromosomeList / VCF), gene_product**. Do **not** add it to the
keyword mode.

For **gene_product**, also pass `search_hrc` to the `gene_info` query
(`this.formatGraphQLArgs({ gene: ..., search_hrc: ... })`) so gene coordinates resolve to hg19.

`formatGraphQLArgs` already serializes booleans as `true`/`false`. The flag propagates for free
through pagination (`setOriginalQuery` deep-clones args), filter re-queries (`updateSearch` clones
`queryOriginal`), and downloads (`downloadSnp` reuses `this.query.snpQuery.args`).

Keep the key exactly `search_hrc` — no camelCase.

### 4. Types — `src/app/main/apps/snp/models/graphql.ts`
No manual edit expected. After codegen, `search_hrc?: InputMaybe<Scalars['Boolean']>` appears on the
generated `QueryGet_SnPs_By_*Args` / `QueryGet_Aggs_By_*Args` / `QueryCount_SnPs_By_*Args` /
`QueryGene_InfoArgs` unions that `SNPQueryArgs` / `AggsQueryArgs` / `CountQueryArgs` are built from,
so the args object assignments type-check.

### 5. Codegen — `graphql_codegen.ts` (already done by the user)
The user has already pointed `environment.ts` at the local api-v2 and run codegen against it, so
`src/generated/graphql.ts` already contains `search_hrc` on the generated arg types. Remaining task:
**verify** `search_hrc?` is present on the `QueryGet_SnPs_By_*Args` / `QueryGet_Aggs_By_*Args` /
`QueryCount_SnPs_By_*Args` / `QueryGene_InfoArgs` types, and ensure the local schema URL is not left
committed in `graphql_codegen.ts`.

## Verify

1. Type-check / build the Angular app (no new type errors from the args objects).
2. Run the app against local api-v2 (`localhost:8001`, index `annoq-annotations-tm-hrc-test-20260709`):
   - Check the box, select the HRC/hg19 columns, run a chromosome search → only HRC-mapped records,
     hg19 coordinates.
   - Repeat for a gene_product search.
   - Uncheck → normal full hg38 dataset restored.

## Out of scope / housekeeping (must NOT be committed)

- `src/environments/environment.ts` currently has dev-only edits (`localhost:8001` +
  `annoq-annotations-tm-hrc-test-20260709`). Revert before committing.
- The `graphql_codegen.ts` local schema URL must be reverted after regenerating.
- `metadata/hrc_handling_annotation_tree.csv` (untracked) is scratch, not consumed by annoq-site at
  runtime — leave out of the commit.
- Keyword mode does not support `search_hrc` — intentionally untouched.
