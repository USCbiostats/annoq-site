# AnnoQ Help/Tutorial

AnnoQ is a platform that integrates a datastore of pre-annotated SNPs, APIs and packages for accessing the SNPs programmatically and a website for viewing the SNP data. The backend of the system is a large collection of pre-annotated variants from the Haplotype Reference Consortium ([HRC](http://www.haplotype-reference-consortium.org/))  (~39 million) with sequence features by [WGSA](https://sites.google.com/site/jpopgen/wgsa) and functions by [PANTHER](https://pantherdb.org) , [Gene Ontology](https://geneontology.org/), [Reactome](https://reactome.org/) and [PEREGRINE](https://www.peregrineproj.org/) enhancer mappings. The annotations have also been [categorized](https://annoq.org/detail) to allow users easy access to specific subsets of data. The data is built on an Elasticsearch framework which can be accessed via [API](/docs/services/api).

[AnnoQ Tutorials](/docs/tutorials) gives a high-level overview of the system with details about the [Interactive Query UI](/search), [API](/docs/services/api), and software packages for programmatic access.

 **This website is free and open to all users and there is no login requirement.**

## Browser Compatibility Summary

For more details on AnnoQ's browser support and future work check out [further reading](/docs/getting_started/browser_compatibility)

![](/assets/images/supported-versions.png)


## What can you do with AnnoQ?
Access large scale genetic variant annotations
  - [Interactive Query UI](/search): Retrieve and or view annotation data using a graphical user interface on standard web browsers.
    - Search for SNPs using uing:
      - Genome Coordinates
      - VCF file upload
      - Gene Product
      - rsID
    - Download search results formatted as:
      - csv file
      - tsv file
    - Export configuration file with search fields of interest to use with the API, or for future searches or sharing

  - [AnnoQ Services](/docs/services/): Retrieve annotation data from the command line or scripts.
  
  - [R Package](/docs/tutorials/r-package): Retrieve annotation data via the R programming language.

  - [Python Library](/docs/tutorials/annoq-py): Retrieve annotation data using the Python programming language.
  

## Quick Start

  <iframe width="1000" height="563" src="https://www.youtube.com/embed/plaU42-x4jE" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>


