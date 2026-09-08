[![](https://raw.githubusercontent.com/USCbiostats/badges/master/tommy-image-badge.svg)](https://image.usc.edu)

# AnnoQ Site

This repo is the **TOPMed beta UI**, served at [topmed.annoq.org](https://topmed.annoq.org/)
(TOPMed: Freeze 8).

> **Stage 4 is split by stack.** The **production** UI at [annoq.org](https://annoq.org/)
> (HRC r1.1) is now [**annoq-site-v2**](https://github.com/USCbiostats/annoq-site-v2) (React) —
> annoq-site is **superseded on HRC** but is still the TOPMed beta UI, pending the **TOPMed
> cutover**. This repo is *not* deprecated; TOPMed UI work still lands here, and anything
> long-lived should be implemented in annoq-site-v2 as well.

Documentation is integrated into the app at [here](https://topmed.annoq.org/docs)


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

Install all NPM dependencies:
```
npm install
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4205/`. The app will automatically reload if you change any of the source files.
