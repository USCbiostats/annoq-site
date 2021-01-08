---
---
# Interactive Query UI Tutorial

The UI for variants annotation query is available at [Interactive Query UI]({{site.annoq_search_url}})

It is composed of 3 main panels, the Query Panel, Result Panel and Result Summary Panel

![]({{ site.baseurl }}/assets/img/ui-overview.gif)

## 1 Queries (Query Panel)

Select a query type and input the query term. Choose a query type from the dropdown labeled “Change”.

### 1.1 Choose Query Type

There 5 types of supported queries as described below (1.1.1 - 1.1.5).

#### 1.1.1 Genome Coordinates Query

Chromosome location. Specify the chromosome number and the range. All data is based on hg19. 

#### 1.1.2 Query by Upload VCF file (Variants List)

Upload a VCF file of up to 10,000 variants by clicking the "Populate from a File" button. A sample VCF file can be found at here. Note that only first 50 rows of result will be displayed by our website. For retrieving the full result please using the download function.

#### 1.1.3 Gene Product Query

Input a gene or protein ID (e.g., ZMYND11). All variants located in the gene region will be returned. Currently, the system can only query one gene at a time. Gene name will be mapped to HGNC gene id by PANTHER gene mapping API. 

#### 1.1.4 rsID query

Input a single rs ID and retrieve annotations

#### 1.1.5 General Keyword Search

AnnoQ also supports full-text search by using a keyword. This keyword can be a gene name, a phenotype name or a GO term (e.g. Signaling by GPCR).

### 1.2 Select annotations

The annotations are organized in a tree structure of categories and its individual annotations.

Select the entire category by clicking on the checkbox (such as ANNOVAR).

To choose individual annotations in a category, expand the tree by clicking the triangle next to the checkbox and click the desired checkboxes.

### 1.3 Submit query

Submit query by clicking the “Submit” button in the bottom of the panel. The results will be displayed on the result panel of the page.

### 1.4 Export configuration file

There are over 400 annotation types stored in our database. Users may not need all of them in their analysis. Through the process above, users can view the results and decide which annotation to use in their analysis. The configuration file stores the annotation selections the user chooses (from B above), and is used for command-line query or embedded in a programming script such as R. To generate a configuration file, simply click the “Export Config” button, and follow the instruction to save the file on the computer. For instructions how to use the configuration file in the command-line query or programming scripts, please visit link and AnnoQR.

## 2. Query Results (Results Panel)

The results are represented in a table format where each column ….

To select an individual row for detailed result, click the row and the summary panel will appear

### 2.1 Download results

The results displayed on the results panel can be downloaded. To do so, click the “Download” button on the right upper corner of the results panel. The downloaded file is generated on the server. A link will be displayed. The user can click the link to download the file.

It may take some time to generate the file for downloading.

## 3. Summary Panel

Select a row to see it in a detailed summary

**Whats Next**

- [API Documentation Tutorial]({{site.baseurl}}/docs/tutorials/api)
- [R package (AnnoQR) Tutorial]({{site.baseurl}}/docs/tutorials/r-package)
