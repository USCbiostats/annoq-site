---
---
# annoq-py (Python Library)

A Python package for programmatically accessing SNP data from the AnnoQ API.

[GitHub Repo](https://github.com/USCbiostats/annoq-py){:target="_blank"}

## Installation

Install directly from GitHub using pip:

```bash
pip install git+https://github.com/USCbiostats/annoq-py.git
```

## Requirements

- Python 3.7 or higher

## Quick Start

```python
import annoq

# Get available SNP attributes
attributes = annoq.get_snp_attributes()

# Search SNPs on chromosome 1
snps = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=100000,
    fields=["chr", "pos", "ref", "alt", "rs_dbSNP151"]
)
```

## Core Functions

The package provides 7 main functions organized into three categories:

### Attribute Discovery

- `get_snp_attributes()` - List all available SNP attributes

### SNP Retrieval

- `get_snps_by_chr()` - Query by chromosome and position range
- `get_snps_by_rsid_list()` - Query by RSID identifiers
- `get_snps_by_gene_product()` - Query by gene information

### SNP Counting

- `count_snps_by_chr()` - Count SNPs by chromosome
- `count_snps_by_rsid_list()` - Count SNPs by RSID list
- `count_snps_by_gene_product()` - Count SNPs by gene

---

## Detailed Usage

### 1. Getting SNP Attributes

Retrieve the list of all available SNP attributes that can be queried.

```python
import annoq

# Get all available attributes
attributes = annoq.get_snp_attributes()

# attributes is a list of dictionaries with attribute metadata
for attr in attributes:
    print(f"{attr['label']}: {attr['description']}")
```

### 2. Querying SNPs by Chromosome

Search for SNPs within a specific chromosome region.

#### Basic Usage

```python
# Query chromosome 1 from position 1 to 100,000 and get basic fields
snps = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=100000,
    fields=["chr", "pos", "ref", "alt", "rs_dbSNP151"]
)

# Query the X chromosome from position 1,000 to 50,000 and get basic default fields
snps = annoq.get_snps_by_chr(
    chromosome_identifier="X",
    start_position=1000,
    end_position=50000
)
```

#### Selecting Specific Fields

You can specify which fields to return in three different ways:

**As a list of field names:**

```python
snps = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=10000,
    fields=["chr", "pos", "ref", "alt", "rs_dbSNP151"]
)
```

**As a string config exported from [AnnoQ](https://annoq.org):**

```python
snps = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=10000,
    fields='{"_source":["chr", "pos", "ref", "alt", "rs_dbSNP151"]}'
)
```

**From a JSON config exported from [AnnoQ](https://annoq.org):**

```python
# Export the config file: config.txt from AnnoQ
# {"_source":["chr", "pos", "ref", "alt", "rs_dbSNP151"]}

snps = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=10000,
    fields="/path/to/config.txt"
)
```

**Note:** The maximum number of fields you can request is **20**. For more fields you can make multiple queries and combine the results.

#### Filtering by Non-Empty Fields

Return only SNPs where specific annotation fields have values:

```python
snps = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=100000,
    filter_fields=["ANNOVAR_ucsc_Transcript_ID", "VEP_ensembl_Gene_ID"]
)
```

#### Pagination

By default, the API returns 1,000 results per page with a maximum of 10,000 results across all pages.

```python
# Get first 500 results
snps = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=1000000,
    pagination_from=0,
    pagination_size=500
)

# Get next 500 results
snps_page2 = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=1000000,
    pagination_from=500,
    pagination_size=500
)

# Note: pagination_from + pagination_size must be <= 10,000
```

#### Fetching All Results

To retrieve all matching SNPs (up to 1,000,000), use `fetch_all=True`:

```python
# This will download all matching SNPs
all_snps = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=100000,
    fetch_all=True
)

# When fetch_all=True, the pagination parameters are ignored
```

**Important:** When `fetch_all=True`, the function downloads a lot of data in a different format and may take a long time for large result sets.

### 3. Querying SNPs by RSID

Search for SNPs using RSID identifiers.

#### Basic Usage

```python
# Using a comma-separated string
snps = annoq.get_snps_by_rsid_list(
    rsid_list="rs1219648,rs2912774,rs2981582"
)

# Using a list
snps = annoq.get_snps_by_rsid_list(
    rsid_list=["rs1219648", "rs2912774", "rs2981582"]
)
```

#### With Custom Fields

```python
snps = annoq.get_snps_by_rsid_list(
    rsid_list=["rs1219648", "rs2912774", "rs2981582"],
    fields=["chr", "pos", "ref", "alt", "rs_dbSNP151"]
)
```

#### With Filtering

```python
snps = annoq.get_snps_by_rsid_list(
    rsid_list="rs1219648,rs2912774,rs2981582",
    filter_fields=["VEP_ensembl_Gene_ID"],
    pagination_from=0,
    pagination_size=100
)
```

#### Fetching All Matching RSIDs

```python
# Get all SNPs for a large list of RSIDs
all_snps = annoq.get_snps_by_rsid_list(
    rsid_list=["rs1219648", "rs2912774", "rs2981582", "rs123456", "rs789012"],
    fetch_all=True
)
```

### 4. Querying SNPs by Gene Product

Search for SNPs associated with a gene using gene ID, gene symbol, or UniProt ID.

#### Basic Usage

```python
# Search by gene symbol
snps = annoq.get_snps_by_gene_product(gene="BRCA1")

# Search by gene ID or UniProt ID
snps = annoq.get_snps_by_gene_product(gene="ENSG00000012048")
```

#### With Custom Fields and Filtering

```python
snps = annoq.get_snps_by_gene_product(
    gene="TP53",
    fields=["chr", "pos", "ref", "alt", "rs_dbSNP151"],
    filter_fields=["ANNOVAR_ucsc_Transcript_ID"]
)
```

#### With Pagination

```python
# Get first 500 SNPs for a gene
snps = annoq.get_snps_by_gene_product(
    gene="APOE",
    pagination_from=0,
    pagination_size=500
)
```

#### Fetching All Gene-Associated SNPs

```python
# Get all SNPs associated with a gene
all_snps = annoq.get_snps_by_gene_product(
    gene="ZMYND11",
    fetch_all=True
)
```

### 5. Counting SNPs

Count functions return the number of matching SNPs without retrieving the actual data.

#### Count by Chromosome

```python
# Count all SNPs in a region
count = annoq.count_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=100000
)
print(f"Found {count} SNPs")

# Count with filters
count = annoq.count_snps_by_chr(
    chromosome_identifier="X",
    start_position=1000,
    end_position=50000,
    filter_fields=["VEP_ensembl_Gene_ID", "ANNOVAR_ucsc_Transcript_ID"]
)
```

#### Count by RSID List

```python
# Count matching RSIDs
count = annoq.count_snps_by_rsid_list(
    rsid_list=["rs1219648", "rs2912774", "rs2981582"]
)

# Count with filters
count = annoq.count_snps_by_rsid_list(
    rsid_list="rs1219648,rs2912774,rs2981582",
    filter_fields=["ANNOVAR_ucsc_Transcript_ID"]
)
```

#### Count by Gene Product

```python
# Count SNPs for a gene
count = annoq.count_snps_by_gene_product(gene="BRCA1")

# Count with filters
count = annoq.count_snps_by_gene_product(
    gene="TP53",
    filter_fields=["VEP_ensembl_Gene_ID"]
)
```

---

## Common Patterns

### Example 1: Progressive Filtering

```python
# First, count to see how many SNPs match
total = annoq.count_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=1000000
)
print(f"Total SNPs: {total}")

# Count with filters applied
filtered_count = annoq.count_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=1000000,
    filter_fields=["VEP_ensembl_Gene_ID"]
)
print(f"Filtered SNPs: {filtered_count}")

# Retrieve the filtered data
snps = annoq.get_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=1000000,
    filter_fields=["VEP_ensembl_Gene_ID"],
    fields=["chr", "pos", "ref", "alt", "rs_dbSNP151", "VEP_ensembl_Gene_ID"]
)
```

### Example 2: Working with Large Datasets

```python
# For large regions, first check the count
count = annoq.count_snps_by_chr(
    chromosome_identifier="1",
    start_position=1,
    end_position=10000000
)

if count > 1000000:
    print(f"Warning: {count} SNPs found. Consider narrowing your search.")
elif count > 10000:
    # Use fetch_all for counts between 10K and 100K
    snps = annoq.get_snps_by_chr(
        chromosome_identifier="1",
        start_position=1,
        end_position=10000000,
        fetch_all=True
    )
else:
    # Use regular pagination for smaller datasets
    snps = annoq.get_snps_by_chr(
        chromosome_identifier="1",
        start_position=1,
        end_position=10000000,
        pagination_size=count # Get all in one go
    )
```

### Example 3: Gene-Focused Analysis

```python
# Get all SNPs for multiple genes
genes = ["BRCA1", "BRCA2", "TP53"]
all_gene_snps = {}

for gene in genes:
    count = annoq.count_snps_by_gene_product(gene=gene)
    print(f"{gene}: {count} SNPs")
    
    all_gene_snps[gene] = annoq.get_snps_by_gene_product(
        gene=gene,
        fields=["chr", "pos", "ref", "alt", "rs_dbSNP151"],
        fetch_all=True
    )
```

### Example 4: Batch RSID Lookup

```python
# Read RSIDs from a file
with open("rsid_list.txt", "r") as f:
    rsids = [line.strip() for line in f if line.strip()]

# Check how many exist in the database
count = annoq.count_snps_by_rsid_list(rsid_list=rsids)
print(f"{count} out of {len(rsids)} RSIDs found")

# Retrieve all matching SNPs
snps = annoq.get_snps_by_rsid_list(
    rsid_list=rsids,
    fields=["chr", "pos", "ref", "alt", "rs_dbSNP151"],
    fetch_all=True
)
```

---

## Important Limitations

### Pagination Constraints

- **Regular queries**: Maximum of 10,000 results across all pages (`pagination_from + pagination_size ≤ 10,000`)
- **Fetch all queries**: Maximum of 1,000,000 total results.
- **Note**: For large datasets, the results may be too large and could lead to performance issues. It is recommended to narrow down the query if possible.

### Field Selection

- Maximum of **20 fields** can be requested per query
- Use the `get_snp_attributes()` function to see all available fields

### Rate Limiting

- The API may implement rate limiting for excessive requests
- Use count functions before large retrievals to estimate data size

---

## Error Handling

All functions raise exceptions for common error cases:

```python
try:
    snps = annoq.get_snps_by_chr(
        chromosome_identifier="1",
        start_position=1,
        end_position=100000,
        pagination_from=9500,
        pagination_size=1000  # This exceeds the 10,000 limit
    )
except ValueError as e:
    print(f"Pagination error: {e}")

try:
    snps = annoq.get_snps_by_chr(
        chromosome_identifier="1",
        start_position=1,
        end_position=100000,
        fields="/nonexistent/file.json"
    )
except ValueError as e:
    print(f"File error: {e}")

try:
    snps = annoq.get_snps_by_chr(
        chromosome_identifier="invalid",
        start_position=1,
        end_position=100000
    )
except requests.exceptions.HTTPError as e:
    print(f"API error: {e}")
```

---

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/USCbiostats/annoq-py).

## License

This package is licensed under the MIT License.

## Support

For questions or issues related to AnnoQ itself, please visit the site [AnnoQ](https://annoq.org)


