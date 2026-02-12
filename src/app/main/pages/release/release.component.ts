import { Component, OnInit } from '@angular/core';                                                                                               
                                                                                                                                                 
  export interface ReleaseDescription {
    heading?: string;
    items: string[];
    subitems?: string[];
  }                                                                                                                                                

  export interface ReleaseInfo {
    date: string;
    title: string;
    version: string;
    description: ReleaseDescription[];
  }

  @Component({
    selector: 'app-release',
    templateUrl: './release.component.html',
    styleUrls: ['./release.component.scss']
  })
  export class ReleaseComponent implements OnInit {

    releaseColumns = ['date', 'title', 'version', 'description'];

    releases: ReleaseInfo[] = [
      {
        date: 'November 10, 2025',
        title: 'AnnoQ 1.3',
        version: '1.3',
        description: [{
          heading: 'Software Updates',
          items: [
            'A new <a href="https://api-v2.annoq.org/docs" target="_blank">API</a> has been released for the AnnoQ website. Refer to <a href="https://uscbiostats.github.io/annoq-site/docs/services/" target="_blank">AnnoQ Services</a> for detailed information.',
            'Two libraries <a href="https://github.com/USCbiostats/AnnoQR" target="_blank">AnnoQR</a> and <a href="https://github.com/USCbiostats/annoq-py" target="_blank">annoq-py</a> that utilize the API have also been released. Tutorials for the <a href="https://uscbiostats.github.io/annoq-site/docs/tutorials/r-package" target="_blank">R package</a> and <a href="https://uscbiostats.github.io/annoq-site/docs/tutorials/annoq-py" target="_blank">python package</a> are also available.',
            'The backend of the API has also been updated to optimize performance and the client UI has also been updated to use the new API.'
          ]
        }]
      },
      {
        date: 'July 9, 2025',
        title: 'AnnoQ 1.2',
        version: '1.2',
        description: [{
          heading: 'Data Updates',
          items: [
            'Gene Ontology annotations from GO database released 2025-03-16, DOI: 10.5281/zenodo.15066566',
            'PANTHER GO slim annotations from version 19.0, based on GO release 2024-01-17, released 2024-06-20',
            'PANTHER Protein Class and PANTHER pathways annotations from version 19.0, released 2024-06-20',
            'Reactome annotations based on Reactome database version 86, released 2023-09-07',
            'PEREGRINE Functional Annotations have been mapped to human genes in PANTHER version 19.0, released 2024-06-20',
            'Please refer to <a href="https://annoq.org/version">Data Source and Annotation Tool Version Summary</a> for more details.'
          ]
        }]
      },
      {
        date: 'August 12, 2024',
        title: 'AnnoQ 1.11',
        version: '1.11',
        description: [{
          items: [
            'This release of AnnoQ added <a href="http://annoq.org/version">version information</a> about annotation packages that are used for building <a href="https://sites.google.com/site/jpopgen/wgsa" target="_blank">WGSA</a> and also version information about other external annotations that have been integrated into the system.'
          ]
        }]
      },
      {
        date: 'July 5, 2024',
        title: 'AnnoQ 1.1',
        version: '1.1',
        description: [
          {
            items: [
              'This release of AnnoQ includes annotations based on Gene Ontology annotations from GO database released 2024-01-17, DOI: 10.5281/zenodo.10536401 and PANTHER GO slim annotations (version 18.0, based on GO release 2023-07-25, released 2023-08-01). A new annotation data type-PANTHER Protein Class (version 18.0, released 2023-08-01) has also been added. These have resulted in the addition of the following annotation types:'
            ],
            subitems: [
              'ANNOVAR ensembl PANTHER Protein Class',
              'ANNOVAR refseq PANTHER Protein Class',
              'VEP ensembl PANTHER Protein Class',
              'VEP refseq PANTHER Protein Class',
              'SnpEff ensembl PANTHER Protein Class',
              'SnpEff refseq PANTHER Protein Class',
              'Flanking region 0 PANTHER Protein Class',
              'Flanking region 10000 PANTHER Protein Class',
              'Flanking region 20000 PANTHER Protein Class',
              'PEREGRINE enhancer linked PANTHER protein class'
            ]
          },
          {
            items: [
              'A new annotation column PEREGRINE enhancer linked PANTHER pathways has also been added.'
            ]
          },
          {
            heading: 'Bug Fixes',
            items: [
              'Incorrect allele frequency data issue has been resolved',
              'Chromosome X data is now accessible',
              'Display issue where annotation data was not displayed in the SNP table for some columns has been resolved',
              'Parsing of enhancer_linked_genes data in detailed view has been resolved',
              'URL links for Gene Ontology terms, PANTHER Protein class terms, PANTHER pathways, PANTHER genes and Reactome have been fixed'
            ]
          }
        ]
      },
      {
        date: '',
        title: 'AnnoQ 1.0',
        version: '1.0',
        description: [
          {
            heading: 'Added',
            items: [
              'ElasticSearch Backend',
              'AnnoQR (R Package)',
              'AnnoQ API',
              'Thorough Documentation',
              'Row Summary'
            ]
          },
          {
            heading: 'Changed',
            items: [
              'Details on Tree View',
              'Faster Table View and supports many columns and rows on web'
            ]
          },
          {
            heading: 'Removed',
            items: [
              'Retired SQL'
            ]
          }
        ]
      },
      {
        date: '',
        title: 'AnnoQ 0.1',
        version: '0.1',
        description: [{
          heading: 'Added',
          items: [
            'A basic table viewer',
            'Tree view for annotation and categories',
            'SQL Backend',
            'Keyword Search'
          ]
        }]
      }
    ];

    constructor() { }

    ngOnInit(): void { }
  }

