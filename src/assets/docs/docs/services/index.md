# AnnoQ Services

In addition to viewing and downloading SNP annotations from the [AnnoQ Website](/), users can use AnnoQ Services to retrieve information programatically.  The [API](https://api-v2.topmed.annoq.org/docs) with Swagger documentation can be used from the command line for impromptu access or as part of scripts within large workflows. 

To facilitate easy integration, two libraries that encapsulate the AnnoQ API have been developed:
1.  [R package (AnnoQR)](https://github.com/USCbiostats/AnnoQR/tree/annoq-site-19-update-for-topmed)
2.  [python package (annoq-py)](https://github.com/USCbiostats/annoq-py/tree/annoq-site-19-update-for-topmed)  

Utilizing the libraries allows for abstraction, realiability, performance optimization and portability. They expose essential features of the system and allow developers freedom from having to focus on the internal workings of the system.  Refer to the tutorials for the [R package](/docs/tutorials/r-package) and [python package](/docs/tutorials/annoq-py) for more details.
