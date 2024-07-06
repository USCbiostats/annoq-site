---
title: AnnoQ 1.1
---

# AnnoQ 1.1
### Released July 5rd, 2024

This release of AnnoQ includes annotations based on Gene Ontology annotations from GO database released 2024-01-17, DOI: 10.5281/zenodo.10536401 and PANTHER GO slim annotations  (version 18.0, based on GO release 2023-07-25, released 2023-08-01). A new annotation data type-PANTHER Protein Class (version 18.0, released 2023-08-01) has also been added. These have resulted in the addition of the following annotation types:
- ANNOVAR ensembl PANTHER Protein Class
- ANNOVAR refseq PANTHER Protein Class
- VEP ensembl PANTHER Protein Class
- VEP refseq PANTHER Protein Class
- SnpEff ensembl PANTHER Protein Class
- SnpEff refseq PANTHER Protein Class
- Flanking region 0 PANTHER Protein Class
- Flanking region 10000 PANTHER Protein Class
- Flanking region 20000 PANTHER Protein Class
- PEREGRINE enhancer linked PANTHER protein class

A new annotation column PEREGRINE enhancer linked PANTHER pathways has also been added. 


### Bug Fixes
- Incorrect allele frequency data issue has been resolved
- Chromosome X data is now accessible
- Display issue where annotation data was not displayed in the SNP table for some columns has been resolved
- Parsing of enhancer_linked_genes data in detailed view has been resolvved
- URL links for Gene Ontology terms, PANTHER Protein class terms, PANTHER pathways, PANTHER genes and Reactome have been fixed 


