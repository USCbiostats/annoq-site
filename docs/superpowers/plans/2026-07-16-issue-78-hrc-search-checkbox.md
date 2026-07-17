# "Search HRC data" Checkbox (Issue #78) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Search HRC data" checkbox to the search form that threads `search_hrc: true` into the api-v2 queries, restricting results to HRC r1.1–mapped SNPs in the hg19 coordinate basis.

**Architecture:** A reactive-form boolean control (`searchHRC`) drives (a) a `mat-checkbox` in the Input Query header, (b) hg19-aware labels/hints in the template, and (c) a `search_hrc` argument injected into the agg/count/snp query args (and the `gene_info` lookup) in `SnpService.getSnps` for the five supported search modes. The generated GraphQL types already expose `search_hrc`.

**Tech Stack:** Angular 13.3.11, Angular Material, apollo-angular (inline `gql`), TypeScript, GraphQL Code Generator.

## Global Constraints

- **api-v2 runs `auto_camel_case=False`** — the argument is used verbatim as `search_hrc`. Never camelCase it.
- **Keyword mode does NOT support `search_hrc`** — leave the `keyword` branch untouched.
- **Supported modes only:** chromosome, rsID, rsIDs, IDs (VCF File), gene_product — plus the `gene_info` lookup used by gene_product.
- **Never commit dev-only values:** `src/environments/environment.ts` (currently `http://localhost:8001` + `annoq-annotations-tm-hrc-test-20260709`) and `graphql_codegen.ts:6` (currently `http://localhost:8001/graphql`) must be reverted before any commit that would otherwise include them. Do not `git add` these files in Tasks 1–3.
- **Do not commit** the untracked scratch file `metadata/hrc_handling_annotation_tree.csv`.
- **Commit message form:** `For #78` (owning repo = annoq-site).
- **No unit-test infrastructure exists** in this repo (0 `.spec.ts` files). Per codebase convention, the per-task verification cycle is **(1) a TypeScript compile check** and **(2) functional verification against the running app** — not new Jasmine specs. Do not scaffold a test framework.

**Compile check command (fast gate, used by every task):**
```bash
npx tsc --noEmit -p src/tsconfig.app.json
```
Expected: exits `0` with no output. (Note: `tsc --noEmit` checks `.ts` files but not Angular HTML templates; template correctness is confirmed by the running app in the functional-verification steps, where `ng serve` AOT-compiles templates.)

**Functional verification prerequisites (Tasks 1–4):** the app is run against the local api-v2 that has the branch:
- `src/environments/environment.ts` → `annotationApiV2: 'http://localhost:8001'`, `dataset: 'annoq-annotations-tm-hrc-test-20260709'` (already set in the working tree).
- Local api-v2 running on `localhost:8001` serving index `annoq-annotations-tm-hrc-test-20260709`.
- Start the app: `npm start` (serves on port 4209 → http://localhost:4209). Search page is the default `/search` view.

---

### Task 1: Add `searchHRC` form control and the "Search HRC data" checkbox

**Files:**
- Modify: `src/app/main/apps/annotation/annotation.component.ts:74-94` (`createAnnotationForm`)
- Modify: `src/app/main/apps/annotation/annotation.component.html:3-19` (Input Query header)

**Interfaces:**
- Consumes: nothing (first task).
- Produces: a boolean reactive-form control `searchHRC` on `annotationForm`, readable as `annotationForm.value.searchHRC` (consumed by Task 3) and `annotationForm.get('searchHRC').value` in the template (consumed by Task 2). `MatCheckboxModule` is already imported via `src/@annoq/material.module.ts:44` — no module change needed.

- [ ] **Step 1: Add the form control**

In `src/app/main/apps/annotation/annotation.component.ts`, inside `createAnnotationForm()`'s `new FormGroup({...})`, add the control alongside `all`:

```ts
      all: new FormControl(false),
      searchHRC: new FormControl(false),
```

- [ ] **Step 2: Add the checkbox to the template**

In `src/app/main/apps/annotation/annotation.component.html`, in the `.annoq-section-header` block (lines 3-19), add a `mat-checkbox` before the `CHANGE` button. Replace:

```html
    <span fxFlex></span>
    <button mat-stroked-button class="annoq-rounded-button annoq-sm" [matMenuTriggerFor]="configurationMenu">
      CHANGE
    </button>
```

with:

```html
    <span fxFlex></span>
    <mat-checkbox class="annoq-search-hrc mr-8" formControlName="searchHRC">Search HRC data</mat-checkbox>
    <button mat-stroked-button class="annoq-rounded-button annoq-sm" [matMenuTriggerFor]="configurationMenu">
      CHANGE
    </button>
```

- [ ] **Step 3: Compile check**

Run: `npx tsc --noEmit -p src/tsconfig.app.json`
Expected: exit `0`, no output.

- [ ] **Step 4: Functional verification**

Start the app (`npm start`), open http://localhost:4209/search. Confirm a "Search HRC data" checkbox appears in the Input Query header, unchecked by default, and toggles on click. (Leaving it unchecked must not change existing search behavior.)

- [ ] **Step 5: Commit** (feature files only — NOT environment.ts / graphql_codegen.ts)

```bash
git add src/app/main/apps/annotation/annotation.component.ts src/app/main/apps/annotation/annotation.component.html
git commit -m "For #78

Add Search HRC data checkbox and searchHRC form control"
```

---

### Task 2: hg19-aware labels and hints when HRC mode is on

**Files:**
- Modify: `src/app/main/apps/annotation/annotation.component.html:7` (genome label), `:33-42` (chromosome Start/End), `:80-101` (VCF File case)

**Interfaces:**
- Consumes: `annotationForm.get('searchHRC').value` (Task 1).
- Produces: no new symbols; template-only display changes.

- [ ] **Step 1: Make the genome label dynamic**

In `src/app/main/apps/annotation/annotation.component.html`, replace line 7:

```html
      <small class="annoq-genome-version">AnnoQ is based on GRCh38/hg38</small>
```

with:

```html
      <small class="annoq-genome-version">AnnoQ is based on
        {{ annotationForm.get('searchHRC').value ? 'GRCh37/hg19 (HRC r1.1)' : 'GRCh38/hg38' }}</small>
```

- [ ] **Step 2: Relabel chromosome Start/End and add an hg19 hint**

In the chromosome `*ngSwitchCase` block, replace the Position section body (lines 33-42):

```html
      <div class="annoq-section-body" fxLayout="row" fxLayoutAlign="start center">
        <mat-form-field class=mr-4 fxFlex="50">
          <mat-label>Start</mat-label>
          <input matInput formControlName="start" placeholder="Start">
        </mat-form-field>
        <mat-form-field class="example-full-width" fxFlex="50">
          <mat-label>End</mat-label>
          <input matInput formControlName="end" placeholder="End">
        </mat-form-field>
      </div>
```

with:

```html
      <div class="annoq-section-body" fxLayout="row" fxLayoutAlign="start center">
        <mat-form-field class=mr-4 fxFlex="50">
          <mat-label>{{ annotationForm.get('searchHRC').value ? 'Start (hg19)' : 'Start' }}</mat-label>
          <input matInput formControlName="start" placeholder="Start">
        </mat-form-field>
        <mat-form-field class="example-full-width" fxFlex="50">
          <mat-label>{{ annotationForm.get('searchHRC').value ? 'End (hg19)' : 'End' }}</mat-label>
          <input matInput formControlName="end" placeholder="End">
        </mat-form-field>
      </div>
      <small class="annoq-hrc-hint" *ngIf="annotationForm.get('searchHRC').value">
        HRC mode: positions are interpreted as hg19 (GRCh37).
      </small>
```

- [ ] **Step 3: Add the hg19 hint to the VCF File case**

In the VCF File `*ngSwitchCase` block (the `snpService.inputType.chromosomeList.id` case, lines 80-101), add a hint immediately after the opening `<div [formGroupName]="'uploadList'" ...>` line. Change:

```html
      <div [formGroupName]="'uploadList'" fxLayout="column" fxLayoutAlign="start stretch">
        <div fxLayout="row" fxLayoutAlign="start center" class="pthr-file-upload-header">
```

to:

```html
      <div [formGroupName]="'uploadList'" fxLayout="column" fxLayoutAlign="start stretch">
        <small class="annoq-hrc-hint" *ngIf="annotationForm.get('searchHRC').value">
          HRC mode: VCF coordinates (CHROM/POS/REF/ALT) are matched against hg19 (GRCh37).
        </small>
        <div fxLayout="row" fxLayoutAlign="start center" class="pthr-file-upload-header">
```

- [ ] **Step 4: Compile check**

Run: `npx tsc --noEmit -p src/tsconfig.app.json`
Expected: exit `0`, no output.

- [ ] **Step 5: Functional verification**

With the app running: on the search page, toggle the checkbox and confirm the genome note switches between `GRCh38/hg38` and `GRCh37/hg19 (HRC r1.1)`. In the Chromosome input type the Start/End labels become `Start (hg19)` / `End (hg19)` and the hg19 hint appears; switch the input type (CHANGE → VCF File) and confirm the VCF hg19 hint appears only when the box is checked.

- [ ] **Step 6: Commit** (feature file only)

```bash
git add src/app/main/apps/annotation/annotation.component.html
git commit -m "For #78

Label coordinates/genome as hg19 when Search HRC data is checked"
```

---

### Task 3: Thread `search_hrc` into the queries in `SnpService.getSnps`

**Files:**
- Modify: `src/app/main/apps/snp/services/snp.service.ts:144-323` (`getSnps` — the mode `switch` and the gene_product `gene_info` query)

**Interfaces:**
- Consumes: `annotationQuery.searchHRC` (boolean from Task 1's form control; `getSnps(query, page)` is called with `annotationForm.value` in `AnnotationComponent.submit()`).
- Produces: `search_hrc` added to `aggQuery.args` / `countQuery.args` / `snpQuery.args` for the five supported modes, and to the `gene_info` args. `formatGraphQLArgs` (unchanged) serializes the boolean as `true`/`false`. The flag propagates through pagination (`setOriginalQuery` deep-clones args), filter re-queries (`updateSearch` clones `queryOriginal`), and download (`downloadSnp` reuses `this.query.snpQuery.args`) with no further changes.

- [ ] **Step 1: Capture the flag once at the top of `getSnps`**

In `src/app/main/apps/snp/services/snp.service.ts`, in `getSnps(annotationQuery, page)`, just after `self.loading = true;` (line 146), add:

```ts
        const search_hrc = !!annotationQuery.searchHRC;
```

- [ ] **Step 2: Add `search_hrc` to the chromosome mode args**

In the `case this.inputType.chromosome:` block, add `search_hrc` to each of the three args objects:

```ts
                graphqlQuery.aggQuery.args = {
                    chr: annotationQuery.chrom,
                    start: parseInt(annotationQuery.start),
                    end: parseInt(annotationQuery.end),
                    search_hrc
                };
                graphqlQuery.countQuery.args = {
                    chr: annotationQuery.chrom,
                    start: parseInt(annotationQuery.start),
                    end: parseInt(annotationQuery.end),
                    search_hrc
                };
                graphqlQuery.snpQuery.args = {
                    chr: annotationQuery.chrom,
                    start: parseInt(annotationQuery.start),
                    end: parseInt(annotationQuery.end),
                    search_hrc
                };
```

- [ ] **Step 3: Add `search_hrc` to the gene_product mode (including the `gene_info` lookup)**

In `case this.inputType.geneProduct:`, first add `search_hrc` to the `gene_info` query args. Replace:

```ts
                const geneInfoQuery = gql(`query geneInfoQuery {geneInfo: ${GeneInfoQuery}(${this.formatGraphQLArgs({ gene: annotationQuery.geneProduct })}){${['contig', 'end', 'start', 'gene_id'].join(',')}}}`);
```

with:

```ts
                const geneInfoQuery = gql(`query geneInfoQuery {geneInfo: ${GeneInfoQuery}(${this.formatGraphQLArgs({ gene: annotationQuery.geneProduct, search_hrc })}){${['contig', 'end', 'start', 'gene_id'].join(',')}}}`);
```

Then, inside the `next:` callback, add `search_hrc` to the three args objects:

```ts
                            graphqlQuery.aggQuery.args = {
                                gene: annotationQuery.geneProduct,
                                search_hrc
                            };
                            graphqlQuery.countQuery.args = {
                                gene: annotationQuery.geneProduct,
                                search_hrc
                            };
                            graphqlQuery.snpQuery.args = {
                                gene: annotationQuery.geneProduct,
                                search_hrc
                            };
```

- [ ] **Step 4: Add `search_hrc` to the rsID mode args**

In `case this.inputType.rsID:`:

```ts
                graphqlQuery.aggQuery.args = {
                    rsID: annotationQuery.rsID,
                    search_hrc
                };
                graphqlQuery.countQuery.args = {
                    rsID: annotationQuery.rsID,
                    search_hrc
                };
                graphqlQuery.snpQuery.args = {
                    rsID: annotationQuery.rsID,
                    search_hrc
                };
```

- [ ] **Step 5: Add `search_hrc` to the rsIDList mode args**

In `case this.inputType.rsIDList:` (after the `rsIDs` array is built):

```ts
                graphqlQuery.aggQuery.args = {
                    rsIDs,
                    search_hrc
                };
                graphqlQuery.countQuery.args = {
                    rsIDs,
                    search_hrc
                };
                graphqlQuery.snpQuery.args = {
                    rsIDs,
                    search_hrc
                };
```

- [ ] **Step 6: Add `search_hrc` to the chromosomeList (VCF/IDs) mode args**

In `case this.inputType.chromosomeList:` (after the `ids` array is built):

```ts
                graphqlQuery.aggQuery.args = {
                    ids,
                    search_hrc
                };
                graphqlQuery.countQuery.args = {
                    ids,
                    search_hrc
                };
                graphqlQuery.snpQuery.args = {
                    ids,
                    search_hrc
                };
```

- [ ] **Step 7: Leave the keyword case untouched**

Do NOT add `search_hrc` to `case this.inputType.keyword:` — api-v2's keyword family does not accept it. Verify that block is unchanged.

- [ ] **Step 8: Compile check**

Run: `npx tsc --noEmit -p src/tsconfig.app.json`
Expected: exit `0`, no output. (The `search_hrc?` field exists on the generated `QueryGet_SnPs_By_*Args` / `QueryGet_Aggs_By_*Args` / `QueryCount_SnPs_By_*Args` / `QueryGene_InfoArgs` unions, so the args assignments type-check.)

- [ ] **Step 9: Functional verification**

With the app running against local api-v2:
1. Chromosome search, box **unchecked** — note the result count / that full-dataset records return, and that the emitted GraphQL (browser DevTools → Network → the `pagequery` POST) contains **no** `search_hrc` on `count`/`snps`/`aggs`.

   > Note on serialization: `formatGraphQLArgs` emits `search_hrc:false` when unchecked (a valid no-op equal to the default). Confirming the *false* value is acceptable; the key assertion is `search_hrc:true` restricts results (step 2).
2. Chromosome search, box **checked** — confirm the request now contains `search_hrc:true` and results are restricted to HRC-mapped records; select the `Mapped_in_HRC`, `HRC_rs_dbSNP151`, `chr_hg19`, `pos_hg19` columns from the annotation tree and confirm hg19 coordinates render.
3. Repeat checked/unchecked for a **gene_product** search (e.g. `ZMYND11`); confirm the `geneInfoQuery` request also carries `search_hrc:true`.
4. Uncheck and re-run — confirm the normal full hg38 dataset is restored.

- [ ] **Step 10: Commit** (feature file only)

```bash
git add src/app/main/apps/snp/services/snp.service.ts
git commit -m "For #78

Thread search_hrc into SNP/agg/count/gene_info queries for supported modes"
```

---

### Task 4: Verify generated types, finalize, and clean up dev-only values

**Files:**
- Verify (no edit expected): `src/generated/graphql.ts`, `src/app/main/apps/snp/models/graphql.ts`
- Revert before final push: `graphql_codegen.ts:6`, `src/environments/environment.ts:6,8` (only when done testing locally)

**Interfaces:**
- Consumes: everything from Tasks 1-3.
- Produces: a clean branch state ready for PR (no committed dev URLs, no scratch CSV).

- [ ] **Step 1: Confirm the generated types carry `search_hrc`**

Run:
```bash
grep -c "search_hrc" src/generated/graphql.ts
```
Expected: `21` (5 modes × {get_SNPs, get_aggs, count, download} = 20, plus `gene_info` = 21). If this is `0`, codegen was not run — regenerate: temporarily set `graphql_codegen.ts:6` `schema:` to `http://localhost:8001/graphql`, run `npm run graphql_codegen`, then re-run the grep.

- [ ] **Step 2: Decide whether to commit the regenerated `src/generated/graphql.ts`**

Inspect the diff:
```bash
git diff --stat src/generated/graphql.ts
```
The regenerated types (including `search_hrc` and the `id` field becoming `id: Scalars['ID']`) are legitimate output of introspecting the api-v2 branch and are required for the feature to type-check. Commit this file:
```bash
git add src/generated/graphql.ts
git commit -m "For #78

Regenerate GraphQL types with search_hrc argument"
```

- [ ] **Step 3: Revert the dev-only codegen schema URL**

Edit `graphql_codegen.ts:6` back to the committed value:
```ts
  schema: "https://api-v2.topmed.annoq.org/graphql",
```
Confirm it is clean:
```bash
git diff graphql_codegen.ts
```
Expected: no diff.

- [ ] **Step 4: Revert the dev-only environment values (after local testing is complete)**

Edit `src/environments/environment.ts` back to the committed values:
```ts
  dataset: 'annoq-annotations-tm-20251208',
  ...
  annotationApiV2: 'https://api-v2.topmed.annoq.org', // 'http://bioghost2.usc.edu:9350',
```
Confirm clean:
```bash
git diff src/environments/environment.ts
```
Expected: no diff.

- [ ] **Step 5: Confirm the scratch CSV is not staged and the tree is clean**

Run:
```bash
git status --porcelain
```
Expected: `metadata/hrc_handling_annotation_tree.csv` still shows as untracked (`??`) and nothing else is staged/modified. Do not add it. (If it should become the canonical metadata update, that is a separate decision outside this plan.)

- [ ] **Step 6: Final compile check**

Run: `npx tsc --noEmit -p src/tsconfig.app.json`
Expected: exit `0`, no output.

- [ ] **Step 7: Update integrated docs**

Per the repo working rules, note the completed UI change in `docs/issue-78-hrc-mapping.md` (mark the "Site changes" as implemented). Commit:
```bash
git add docs/issue-78-hrc-mapping.md
git commit -m "For #78

Mark annoq-site HRC search changes as implemented"
```

---

## Self-Review Notes

- **Spec coverage:** form control (Task 1), checkbox (Task 1), dynamic genome label + chromosome/VCF hg19 labels/hints (Task 2), threading `search_hrc` into all five supported modes + `gene_info`, keyword excluded (Task 3), generated types + housekeeping/no-committed-dev-URLs + scratch CSV excluded + doc update (Task 4). All spec sections mapped.
- **HRC/hg19 columns:** per design decision, users select these from the annotation tree (already served by api-v2). No task adds auto-column logic — intentional.
- **Type consistency:** the form control is `searchHRC` everywhere (template + `annotationQuery.searchHRC`); the GraphQL key is `search_hrc` everywhere (never camelCased). `formatGraphQLArgs`, `setOriginalQuery`, `updateSearch`, `downloadSnp` are unchanged and propagate the flag by cloning args.
