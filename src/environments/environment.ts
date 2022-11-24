// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  dataset: 'annoq-test',
  production: false,
  annotationApi: 'http://bioghost2.usc.edu:3403',//'http://68.181.46.17:3403/annoq-test', //'http://bioghost.usc.edu:5000',
  snpResultsSize: 50,
  amigoTermUrl: "http://amigo.geneontology.org/amigo/term/",
  pubmedUrl: "https://www.ncbi.nlm.nih.gov/pubmed/",

  tempTreeApi: 'http://localhost:3403'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
