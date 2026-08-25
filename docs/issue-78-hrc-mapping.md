# Issue #78 — "Search HRC data" on the search page (annoq-site handoff)

annoq-site is the **owning repo** for [#78](https://github.com/USCbiostats/annoq-site/issues/78).
The data (data-builder → local ES load) and **api-v2** sides are already implemented; this repo is
the last stage. Goal: replace the static hg38 genome label on the search page with a **"Search HRC
data" checkbox** that, when checked, restricts results to TOPMed SNPs mapped to HRC r1.1 (via a new
api-v2 argument), interpreting/returning **hg19** coordinates.

## The api-v2 contract (match it EXACTLY)

api-v2 runs Strawberry with **`auto_camel_case=False`** (`src/main.py`). So all names below are used
verbatim in GraphQL documents — **do not camelCase**.

- **Argument:** `search_hrc: Boolean` (Python `Optional[bool] = None`), **default off**. A standalone
  top-level argument on each query field — **not** a field on `filter_args`/`page_args`.
- **Query fields that accept it:** the chromosome, RsID, RsIDs, IDs, and gene_product families —
  each of `get_SNPs_by_*`, `get_aggs_by_*`, `count_SNPs_by_*`, `download_SNPs_by_*` — plus
  `gene_info`. **Not** accepted by the `*_by_keyword` family or `annotations`.
- **Behavior when `search_hrc: true`:**
  - Adds the subset filter `Mapped_in_HRC == "Y"`.
  - **Coordinate basis flips to hg19.** Chromosome `start`/`end` are matched against `pos_hg19`
    (and `chr_hg19`); gene regions resolve to hg19; VCF-id search matches `HRC_chr_pos_ref_alt`
    (hg19 `chr:posREF>ALT`, e.g. `18:10005A>T`); RsID search matches the normal `rs_dbSNP` field.
  - **Response shape is unchanged** — the flag only changes *which documents match*. To *display*
    hg19 data you must explicitly select the (already-existing) SNP fields:
    `Mapped_in_HRC`, `HRC_chr_pos`, `HRC_chr_pos_ref_alt`, `chr_pos`, `chr_hg19`, `pos_hg19`, `ref_hg19`, `alt_hg19`.
- **REST parity** (if any REST calls are used): `?search_hrc=true` on `/snp/chr`, `/snp/rsidList`,
  `/snp/gene_product` and their `/count/*` and `/download` variants. No REST IDs/keyword endpoint.

### Example GraphQL (chromosome search, HRC on)

```graphql
query ChrHRC($chr: String!, $start: Int!, $end: Int!, $hrc: Boolean) {
  get_SNPs_by_chromosome(
    chr: $chr, start: $start, end: $end,
    query_type_option: SNPS,
    page_args: { from: 0, size: 50 },
    search_hrc: $hrc
  ) {
    snps { id chr pos chr_hg19 pos_hg19 Mapped_in_HRC HRC_chr_pos HRC_chr_pos_ref_alt }
  }
}
```
Variables: `{ "chr": "18", "start": 100, "end": 200, "hrc": true }`. (Note `page_args.from`, enum
`query_type_option: SNPS|SCROLL`.)

## Site changes

1. **Replace the genome label with a checkbox.** Remove
   `src/app/main/apps/annotation/annotation.component.html:7`
   `<small class="annoq-genome-version">AnnoQ is based on GRCh38/hg38</small>` (and its unused SCSS
   `.annoq-genome-version` in `annotation.component.scss`) and add a `mat-checkbox` labeled
   **"Search HRC data"** bound to a new form control.

2. **Add the form control.** In `annotation.component.ts` → `createAnnotationForm()` add e.g.
   `searchHRC: new FormControl(false)`; bind the checkbox with `formControlName="searchHRC"`.

3. **Thread the flag into the query.** `submit()` reads `annotationForm.value` and calls
   `this.snpService.getSnps(query, 1)`. In `SnpService.getSnps`
   (`src/app/main/apps/snp/services/snp.service.ts`), the `switch` over search mode builds an `args`
   object per dimension; add `search_hrc: <value>` to the args for the **chromosome / RsID / RsIDs /
   IDs / gene_product** modes only (NOT keyword). `formatGraphQLArgs` serializes args automatically —
   just keep the key exactly `search_hrc` (no camelCase). Boolean serializes as `true`/`false`.

4. **Display hg19 / HRC fields.** Add `Mapped_in_HRC`, `HRC_chr_pos`, `HRC_chr_pos_ref_alt`, `chr_pos`, `chr_hg19`, `pos_hg19`
   (verbatim) to the SNP selection set and the results table/column config so users can see the HRC
   status and hg19 coordinates when the box is checked.

5. **Regenerate types.** The new arg must exist on the generated `QueryGet_SnPs_By_*Args` unions in
   `src/generated/graphql.ts` (referenced by `src/app/main/apps/snp/models/graphql.ts`). Run
   `npm run graphql_codegen` — but its `graphql_codegen.ts` introspects the **live TOPMed api-v2**,
   which won't have `search_hrc` until deployed. **Options:** (a) deploy the api-v2 branch to
   topmed first, or (b) temporarily point `graphql_codegen.ts` `schema:` at a local api-v2
   (e.g. `http://localhost:8000/graphql`) to regenerate against your branch. Don't commit the local
   URL.

## Implementation status (as built, annoq-site)

**Done** on branch `issue-78-add-hrc-mapping-info`. See design/plan under
[`docs/superpowers/`](superpowers/). As-built decisions that refine the plan above:

1. **Checkbox added; genome label kept.** A `mat-checkbox` "Search HRC data"
   (`formControlName="searchHRC"`) was added to the Input Query header. The genome label was **not
   removed** — AnnoQ data is based on GRCh38/hg38 (HRC is a *mapping*), so the label always reads
   "AnnoQ is based on GRCh38/hg38" and only appends "· searching HRC r1.1 mapping (hg19 coordinates)"
   when the box is checked.
2. **Form control** `searchHRC: new FormControl(false)` added in `createAnnotationForm()`.
3. **Flag threaded** in `SnpService.getSnps`: `search_hrc` added to the agg/count/snp args for
   chromosome / rsID / rsIDs / IDs / gene_product, plus the `gene_info` lookup. Keyword left untouched.
4. **hg19 / HRC fields — user-selected, not auto-added.** These fields already live under the
   "HG19 Info" tree category served by api-v2's `/annotations`, so users select them like any other
   column. No auto-column logic was added. (Chromosome Start/End inputs are relabeled "(hg19)" and an
   hg19 hint is shown for chromosome and VCF modes when the box is checked.)
5. **Types regenerated** against local api-v2 and committed; `graphql_codegen.ts` schema URL reverted
   to the live TOPMed endpoint (not committed pointing at local).

## UX note

In HRC mode the coordinate space is **hg19**, so the position inputs (chr start/end) and the
displayed coordinates should be labeled/collected as hg19. Consider surfacing that when the box is
checked (e.g. switch the coordinate hint, show the hg19 columns). Default (unchecked) is unchanged
hg38 full-dataset behavior.

## Branch / commit

Branch `issue-78-add-hrc-mapping-info` (owning repo = annoq-site, so `issue-<num>` form; currently in
sync with origin). Commit messages here: `For #78`. Sibling repos reference it as
`For #USCbiostats/annoq-site/issues/78`.

## Verify

Run the app against an api-v2 that has the branch (local api-v2 pointed at the local test index
`annoq-annotations-tm-hrc-test-20260709`, or deployed topmed): toggle the checkbox and confirm a
chromosome/gene search returns only HRC-mapped records with hg19 coordinates, and that unchecking
restores the normal full-dataset results.
