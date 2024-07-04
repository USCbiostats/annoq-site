// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  dataset: 'annoq-annotations-v3',
  production: false,
  annotationApi: 'http://bioghost2.usc.edu:9350', // 'http://localhost:3403',// 'http://annoq.org/api',
  snpResultsSize: 50,
  termsDisplayedSize: 8,
  genesDisplayedSize: 5,
  amigoTermUrl: "http://amigo.geneontology.org/amigo/term/",
  pubmedUrl: "https://www.ncbi.nlm.nih.gov/pubmed/",
  ucscUrl: 'https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg38&lastVirtModeType=default&lastVirtModeExtraState=&virtModeType=default&virtMode=0&nonVirtPosition=&position=chr',

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
