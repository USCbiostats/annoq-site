---
---
# Interactive Query UI Tutorial

The UI for variants annotation query is available at [Interactive Query UI]({{site.annoq_search_url}})

It is composed of 3 main panels, the Query Panel, Result Panel and Result Summary Panel

![]({{ site.baseurl }}/assets/img/ui-overview.gif)

## 1 Queries (Query Panel)

The Query Panel allows a user to choose a query type (1.1) and select annotations (1.2).

### 1.1 Input Query

Select a query type and input the query term. There are 5 types of supported queries as described below (1.1.1 - 1.1.5). Click the "Change" button to choose a query from the dropdown menu. 

#### 1.1.1 Genome Coordinates Query

Select "Chromosome" from the dropdown menu to query by chromosome location. Specify the chromosome number, start and end positions. Please note that the current release supports hg19. 

#### 1.1.2 Query by Upload VCF file (Variants List)

Select "VCF File" from the dropdown menu. Upload a VCF file of up to 10,000 variants by clicking the "Populate from a File" button. A sample VCF file can be found at here. Note that only first 50 rows of result will be displayed by our website. For retrieving the full result please using the download function.

#### 1.1.3 Gene Product Query

Select "Gene Product" from the dropdown menu. Input a gene or protein ID (e.g., ZMYND11). All variants located in the gene region will be returned. Currently, the system can only query one gene at a time. The tools supports the following ID types:
-Ensembl: Ensembl gene identifier. Example: "ENSG00000126243"
-Ensembl_PRO: Ensembl protein identifier. Example: "ENSP00000337383"
-Ensembl_TRS: Ensembl transcript identifier. "Example: ENST00000391828"
-Gene ID: EntrezGene IDs. examples include, "GeneID:10203", "10203" (for Entrez gene GeneID:10203)
-Gene symbol: for example, "CALCA"
-GI: NCBI GI numbers. Example: "16033597"
-HGNC: HUGO Gene Nomenclature ids. Example: "HGNC:16673"
-IPI: International Protein Index ids. Example: "IPI00740702"
-UniGene: NCBI UniGene ids. Examples: "Hs.654587", "At.36040"
-UniProtKB:UniProt accession. Example: "O80536"
-UniProtKB-ID: UniProt ID. Example: "AGAP3_HUMAN"


#### 1.1.4 rsID query

Select "rsID" from the dropdown menu. Current system allows user to input a single rsID and retrieve annotations.

#### 1.1.5 General Keyword Search

Select "Keyword Search" from the dropdown menu. AnnoQ also supports full-text search by using a keyword. This keyword can be a gene name, a phenotype name or a GO term (e.g. Signaling by GPCR). If the keyword appears in any of the selected annotations (see below), the variant is returned. The search is case-insensitive.

### 1.2 Select annotations

The annotations are organized in a tree structure of categories and its individual annotations.

Select the entire category by clicking on the checkbox (such as ANNOVAR).

To choose individual annotations in a category, expand the tree by clicking the triangle next to the checkbox and click the desired checkboxes.

The entire list of the annotations can be found here.

### 1.3 Submit query

Submit query by clicking the “Submit” button in the bottom of the panel. The results will be displayed on the result panel of the page.

### 1.4 Export configuration file

There are over 400 annotation types stored in our database. Users may not need all of them in their analysis. Through the process above, users can view the results and decide which annotations to use in their analysis. The configuration file stores the annotation selections the user chooses (from 1.2 above), and is used for command-line query or embedded in a programming script such as R. To generate a configuration file, simply click the “Export Config” button, and follow the instruction to save the file on the computer. For instructions how to use the configuration file in the command-line query or programming scripts, please visit link and AnnoQR.

## 2. Query Results (Results Panel)

The results are represented in a table format, one row for each variant. The first 5 columns contain the basic information of the variant: chromosome number, position, reference base, alternative allele, and rsID if available. The remaining columns are annotations corresponding to the selection made in 1.2. When there are more than one annotations for a particular annotation type, each annotation is separated by a pipe sign ("|").

To select an individual row for detailed result, click the row and the summary panel will appear

### 2.1 Download results

The results displayed on the results panel can be downloaded. To do so, click the “Download” button on the right upper corner of the results panel. The downloaded file is generated on the server. A link will be displayed. The user can click the link to download the file.

It may take some time to generate the file for downloading.

## 3. Summary Panel

Click a row to see the summery page of the variant. The summary page is a reformat of the annotation data by displaying each annotation type as a row.

**What's Next**

- [API Documentation Tutorial]({{site.baseurl}}/docs/tutorials/api)
- [R package (AnnoQR) Tutorial]({{site.baseurl}}/docs/tutorials/r-package)
