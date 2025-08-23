---
---

# AnnoQ API-v2
Currently Annoq API v2 is live at http://annoq.org/api-v2/.

## Examples
[Here](https://github.com/USCbiostats/annoq-api-v2/blob/master/demo/usage.ipynb) are some examples of how to use the graphql endpoint of the API. 

## Annotation tree structure
* endpoint 
`/annotations` - Returns a json with the annotation tree

## Download request
* endpoint 
`/download/{folder}/{name}` - Downloads a text file using the download path returned in the download graphql query.

## All other queries
* endpoint 
`/graphql`


**What's Next**

- [Interactive Query UI Tutorial]({{site.baseurl}}/docs/tutorials/ui-query)
- [Python package (Annoq-py) Tutorial]({{site.baseurl}}/docs/tutorials/python-package)