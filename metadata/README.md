Collection of metadata files used by the Annoq website

> ## This directory is moving to annoq-site-v2
>
> `annotation_tree.csv` is the hand-maintained source of truth for the annotation tree, consumed at
> build time by [annoq-data-builder](https://github.com/USCbiostats/annoq-data-builder). Now that
> [annoq-site-v2](https://github.com/USCbiostats/annoq-site-v2) serves
> [annoq.org](https://annoq.org), the directory has been **replicated** to
> `annoq-site-v2/metadata/` and will become canonical there.
>
> **This copy is still the authoritative one** — keep editing it here until
> [#78](https://github.com/USCbiostats/annoq-site/issues/78) merges to `master`. The copy in
> annoq-site-v2 is seeded from this repo's `master` (558 rows) and is intentionally behind this
> branch's version (840 rows, which adds the HRC mapping columns).
>
> After #78 merges: refresh `annoq-site-v2/metadata/annotation_tree.csv` from the merged `master`,
> repoint the generator docs, and this copy becomes the stale one. Checklist in
> [annoq-proj](https://github.com/USCbiostats/annoq-proj) → `.claude/skills/annoq-data-build/SKILL.md`.

# annotation_tree.csv
Content:
Currently, comma separated file with the following information:
1.  Columns in the SNP table and fields in the SNP detail view.  This includes:
    1.  Label, 
    2.  Header
    3.  Additional text display about the field
    4.  URL link for parent terms
    5.  PMID for parent terms
    6.  Sort order for parent terms
    7.  URL for child terms
    8.  Field Type
    9.  Keyword searchable (boolean)
    10.  Value Type 
2.  Parent to child relationship for column grouping


This file will be modified in the future to support sorting of columns based on rank. Format may also change.  This file is used to generate JSON and pickle files that have to be copied into the following locations:
1. https://github.com/USCbiostats/annoq-api-v2/blob/main/data/anno_tree.json generated via https://github.com/USCbiostats/annoq-data-builder/blob/master/tools/annotation_tree_gen.py
2. https://github.com/USCbiostats/annoq-api-v2/blob/main/data/api_mapping_anno_tree.json generated via https://github.com/USCbiostats/annoq-data-builder/blob/master/tools/annotation_tree_gen.py
3. https://github.com/USCbiostats/annoq-database/blob/master/data/annoq_mappings.json generated via https://github.com/USCbiostats/annoq-data-builder/blob/master/tools/annotation_tree_gen.py
4. https://github.com/USCbiostats/annoq-database/blob/master/data/doc_type.pkl generated via https://github.com/USCbiostats/annoq-data-builder/blob/master/tools/mappings_data_type_gen.py



# merge_hrc_topmed_stats.json
This file is generated when HRC mapping information is added.