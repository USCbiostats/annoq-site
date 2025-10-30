---
layout: page
title: AnnoQ Help/Tutorial
permalink: /
---

# AnnoQ Help/Tutorial

AnnoQ is a platform that integrates a datastore of pre-annotated SNPs, APIs and packages for accessing the SNPs programmatically and a website for viewing the SNP data. The backend of the system is a large collection of pre-annotated variants from the Haplotype Reference Consortium ([HRC](http://www.haplotype-reference-consortium.org/){:target="_blank"})  (~39 million) with sequence features by [WGSA](https://sites.google.com/site/jpopgen/wgsa){:target="_blank"} and functions by [PANTHER](https://pantherdb.org){:target="_blank"} , [Gene Ontology](https://geneontology.org/){:target="_blank"}, [Reactome](https://reactome.org/){:target="_blank"} and [PEREGRINE](https://www.peregrineproj.org/){:target="_blank"}. The data is built on an Elasticsearch framework which can be accessed via API.

[AnnoQ Tutorials]({{site.baseurl}}/docs/tutorials) gives a high-level overview of the system with details about the [Interactive Query UI]({{site.annoq_search_url}}), [API]({{site.api_url}}), and software packages for programmatic access.

 **This website is free and open to all users and there is no login requirement.**

## Browser Compatibility Summary

For more details on AnnoQ's browser support and future work check out [further reading]({{site.baseurl}}/docs/getting_started/browser_compatibility)

![]({{ site.baseurl }}/assets/img/supported-versions.png)


## What can you do with AnnoQ?
Access large scale genetic variant annotations
  - [Interactive Query UI]({{site.annoq_search_url}}): Retrieve and or view annotation data using a graphical user interface on standard web browsers.
    - Search for SNPs using uing:
      - Genome Coordinates
      - VCF file upload
      - Gene Product
      - rsID
    - Download search results formatted as:
      - csv file
      - tsv file
    - Export configuration file with search fields of interest to use with the API, or for future searches or sharing

  - [API Data Access]({{site.baseurl}}/docs/tutorials/api): Retrieve annotation data from the command line or scripts.
  
  - [R Package]({{site.baseurl}}/docs/tutorials/r-package): Retrieve annotation data via the R programming language.

  - [Python Library]({{site.baseurl}}/docs/tutorials/annoq-py): Retrieve annotation data using the Python programming language.
  

## Quick Start

  <iframe width="1000" height="563" src="https://www.youtube.com/embed/plaU42-x4jE" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>


For release notes, check out [Changelog]({{site.baseurl}}/docs/changelog/features)
