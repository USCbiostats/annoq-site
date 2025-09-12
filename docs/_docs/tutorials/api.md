---
---

# Programmatic Access to AnnoQ

> This page documents how to query AnnoQ using the API

The AnnoQ API implementation and its associated Swagger documentation are available at [https://api.annoq.org/docs](https://api.annoq.org/docs).

The API provides access to AnnoQ's rich annotations for Human SNPs from the [Haplotype Reference Consortium](https://www.sanger.ac.uk/collaboration/haplotype-reference-consortium/).  The end-points can be utilized independently or as part of large workflows to analyze and make coorelations on large data sets. A SNP (single nucleotide polymorphism) by definition is a genomic variant at a single base position in the DNA.  Each SNP in the system can be uniquely identified by the chromosome, its position, the reference nucleotide and the alternate nucleotide or its RSID (Reference SNP cluster ID).  Note, SNP's are not defined for all positions of the chromosome, but, a given chromosome and position, can have more than one SNP. Indels are not supported.


The procedure for retrieving SNP's and associated attributes is as follows:
1.  Identify the attributes of interest and optionally SNP's that should not be retrieved (i.e. filtered) if a given attribute is not set
2.  Identify the SNP's of interest.  This can be through chromosome position or RSID or gene product.
3.  Identify the number of SNP's that fit the search criteria
4.  Retrieve the SNP's.  Since a large number of SNP's can meet the search criteria, pagination is used to retrieve sets of SNP's.


## SNP Attributes
The list of SNP attributes, including the chromosome identifier, position, reference nucleotide, alternate nucleotide and RSID can be retrieved via the <strong>fastapi/snpAttributes</strong> end point.  This end-point returns the list of attributes available for each SNP as well as the following for each attribute:
1. api_label - This is the label used by the API for the attribute.  Use this label when specifying the attribute field to retrieve as well as the attribute field to filter
2. display_label - This is the label used by annoq.org website for the attribute.
3. definition - Description of the attribute
4. data_type - Type of data for the attribute 
5. version - The version of the data for this attribute. 

The list of attributes can be constructed by downloading the configuration from the [seaarch page](https://annoq.org/search) by selecting the attributes of interest and clicking on the export config button or by opening the [detail page](https://annoq.org/detail), selecting attributes of interest and clicking on the export config button. The contents of the downloaded file can be used for the <strong>fields</strong> parameter for the search and count end points.  Note, the maximum number of attributes that can be retrieved for a request is 20. Therefore, multiple configurations may be required, if more than 20 attributes have to be retrieved.


## SNP Search criteria
These end-points will return zero or more records with the requested attributes as well as the version number of the attributes
1.  End-point <strong>/fastapi/snp/chr?</strong> search via chromosome number (or 'X' for the X-chromosome), the chromosome start and stop position.
2.  End-point <strong>/fastapi/snp/rsidList?</strong> search via list of RSIDs.  The RSIDs can be parsed from VCF files.
3.  End-point <strong>/fastapi/snp/gene?</strong> search for SNPs associated with a gene product.


## SNP Count criteria
1.  End-point <strong>/fastapi/snp/chr?</strong>Count of SNPs matching search criteria of chromosome number (or 'X' for the X-chromosome), the chromosome start and stop position.
2.  End-point <strong>/fastapi/snp/rsidList?</strong> Count of SNPs matching search criteria of RSIDs.
3.  End-point <strong>/fastapi/snp/gene?</strong> Count of SNPs associated with gene product.



**What's Next**

- [Interactive Query UI Tutorial]({{site.baseurl}}/docs/tutorials/ui-query)
- [R package (AnnoQR) Tutorial]({{site.baseurl}}/docs/tutorials/r-package)
