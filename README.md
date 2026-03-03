[![](https://raw.githubusercontent.com/USCbiostats/badges/master/tommy-image-badge.svg)](https://image.usc.edu)

# AnnoQ Site

AnnoQ site is located [here](https://annoq.org/)

Documentation is integrated into the app at [here](http://annoq.org/docs)


## Development

For the curious, this site uses Angular version 9

To run it locally and setup

Clone this git repository:
```
git clone https://github.com/USCbiostats/annoq-site.git
```

Change into the joint directory:
```
cd annoq-site
```


Update environment variables as necessary
```
nano src/environments/environment.prod.ts
nano src/envirnoments/environment.ts
```

If there are any changes to the API, ensure path to API is correct and update as necessary, then run the following:

```
npm run graphql_codegen
```


Install all NPM dependencies:
```
npm install
```


Run the installation for production

```
npm run start

```

Run the installation for locally
```
npm run start:local
```
