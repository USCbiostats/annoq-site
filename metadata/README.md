Collection of metadata files used by the Annoq website

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
1. https://github.com/USCbiostats/annoq-api/blob/main/data/anno_tree.json generated via https://github.com/USCbiostats/annoq-data-builder/blob/master/tools/annotation_tree_gen.py
2. https://github.com/USCbiostats/annoq-database/blob/master/data/annoq_mappings.json generated via https://github.com/USCbiostats/annoq-data-builder/blob/master/tools/annotation_tree_gen.py
3. https://github.com/USCbiostats/annoq-database/blob/master/data/doc_type.pkl generated via https://github.com/USCbiostats/annoq-data-builder/blob/master/tools/mappings_data_type_gen.py