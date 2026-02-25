export class AnnotationTreeFakeDb {
  public static data = [
    {
      "detail": null,
      "id": 0,
      "name": "root",
      "parent_id": null
    },
    {
      "detail": " chromosome number",
      "id": 1,
      "name": "#chr",
      "parent_id": 0
    },
    {
      "detail": " domain or conserved site on which the variant locates. Domain\t\tannotations come from Interpro database. The number in the brackets following\t\ta specific domain is the count of times Interpro assigns the variant position to\t\tthat domain, typically coming from different predicting databases. Multiple entries\t\tseparated by \";\".",
      "id": 2,
      "name": "Interpro_domain",
      "parent_id": 0
    },
    {
      "detail": " whether break a known motif (in-house script)",
      "id": 3,
      "name": "Motif_breaking",
      "parent_id": 0
    },
    {
      "detail": " Number of observed component scores (except the maximum frequency in\t\tthe 1000 genomes populations) for MetaSVM and MetaLR. Ranges from 1 to 10. As MetaSVM\t\tand MetaLR scores are calculated based on imputed data, the less missing component\t\tscores, the higher the reliability of the scores and predictions.",
      "id": 4,
      "name": "Reliability_index",
      "parent_id": 0
    },
    {
      "detail": " SLR test statistic for testing natural selection on codons.\t\tA negative value indicates negative selection, and a positive value indicates\t\tpositive selection. Larger magnitude of the value suggests stronger evidence.",
      "id": 5,
      "name": "SLR_test_statistic",
      "parent_id": 0
    },
    {
      "detail": " context++ score is a mearsue of favarableness of the\t\tsite for the miRNA family. The higer the percentile, the more favarable (from TargetScan)",
      "id": 6,
      "name": "TargetScan_context++_score_percentile",
      "parent_id": 0
    },
    {
      "detail": " the gene-miRNA pair, if the site is located within a predicted (conserved)\t\ttarget of conserved miRNA families(from TargetScan)",
      "id": 7,
      "name": "UTR3_miRNA_target",
      "parent_id": 0
    },
    {
      "detail": " alternative amino acid\t\t\"-\" if the variant is a splicing site SNP (2bp on each end of an intron)",
      "id": 8,
      "name": "aaalt",
      "parent_id": 0
    },
    {
      "detail": " amino acid position as to the protein\t\t\"-1\" if the variant is a splicing site SNP (2bp on each end of an intron)",
      "id": 9,
      "name": "aapos",
      "parent_id": 0
    },
    {
      "detail": " reference amino acid\t\t\"-\" if the variant is a splicing site SNP (2bp on each end of an intron)",
      "id": 10,
      "name": "aaref",
      "parent_id": 0
    },
    {
      "detail": " alternative allele",
      "id": 11,
      "name": "alt",
      "parent_id": 0
    },
    {
      "detail": " coding sequence (CDS) strand (+ or -)",
      "id": 12,
      "name": "cds_strand",
      "parent_id": 0
    },
    {
      "detail": " position on the codon (1, 2 or 3)",
      "id": 13,
      "name": "codonpos",
      "parent_id": 0
    },
    {
      "detail": " degenerate type (0, 2 or 3)",
      "id": 14,
      "name": "fold-degenerate",
      "parent_id": 0
    },
    {
      "detail": " funseq-like noncoding score range 0-6, each of the previous 5 columns\t\tcontribute 1 if \"YES\", or 0 if \"NO\"; the column Motif_breaking contribute 1 if it is\t\tnot a \".\"",
      "id": 15,
      "name": "funseq_noncoding_score",
      "parent_id": 0
    },
    {
      "detail": " gene name; if the nsSNV can be assigned to multiple genes, gene names are separated\t\tby \";\"",
      "id": 16,
      "name": "genename",
      "parent_id": 0
    },
    {
      "detail": " whether the target gene is a network hub based on funseq-0.1",
      "id": 17,
      "name": "network_hub",
      "parent_id": 0
    },
    {
      "detail": " position (hg38)",
      "id": 18,
      "name": "pos",
      "parent_id": 0
    },
    {
      "detail": " reference allele",
      "id": 19,
      "name": "ref",
      "parent_id": 0
    },
    {
      "detail": " reference codon",
      "id": 20,
      "name": "refcodon",
      "parent_id": 0
    },
    {
      "detail": " rs number from dbSNP150",
      "id": 21,
      "name": "rs_dbSNP150",
      "parent_id": 0
    },
    {
      "detail": " whether defined as sensitive region based on funseq-0.1",
      "id": 22,
      "name": "sensitive",
      "parent_id": 0
    },
    {
      "detail": " target gene (for promoter, enhancer, etc.) based on funseq-0.1",
      "id": 23,
      "name": "target_gene",
      "parent_id": 0
    },
    {
      "detail": " whether defined as ultra-sensitive region based funseq-0.1",
      "id": 24,
      "name": "ultra_sensitive",
      "parent_id": 0
    },
    {
      "detail": null,
      "id": 25,
      "name": "splicing",
      "parent_id": 0
    },
    {
      "detail": " splicing-change prediction for splicing consensus SNPs\t\tbased on adaboost. If the score >0.6, it predicts that the splicing will be changed,\t\totherwise it predicts the splicing will not be changed.",
      "id": 26,
      "name": "splicing_consensus_ada_score",
      "parent_id": 25
    },
    {
      "detail": " splicing-change prediction for splicing consensus SNPs\t\tbased on random forest. If the score >0.6, it predicts that the splicing will be changed,\t\totherwise it predicts the splicing will not be changed",
      "id": 27,
      "name": "splicing_consensus_rf_score",
      "parent_id": 25
    },
    {
      "detail": null,
      "id": 28,
      "name": "1000Gp3",
      "parent_id": 0
    },
    {
      "detail": " Alternative allele counts in the whole 1000 genomes phase 3 (1000Gp3) data.",
      "id": 29,
      "name": "1000Gp3_AC",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele frequency in the whole 1000Gp3 data.",
      "id": 30,
      "name": "1000Gp3_AF",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele counts in the 1000Gp3 African descendent samples.",
      "id": 31,
      "name": "1000Gp3_AFR_AC",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele frequency in the 1000Gp3 African descendent samples.",
      "id": 32,
      "name": "1000Gp3_AFR_AF",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele counts in the 1000Gp3 American descendent samples.",
      "id": 33,
      "name": "1000Gp3_AMR_AC",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele frequency in the 1000Gp3 American descendent samples.",
      "id": 34,
      "name": "1000Gp3_AMR_AF",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele counts in the 1000Gp3 East Asian descendent samples.",
      "id": 35,
      "name": "1000Gp3_EAS_AC",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele frequency in the 1000Gp3 East Asian descendent samples.",
      "id": 36,
      "name": "1000Gp3_EAS_AF",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele counts in the 1000Gp3 European descendent samples.",
      "id": 37,
      "name": "1000Gp3_EUR_AC",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele frequency in the 1000Gp3 European descendent samples.",
      "id": 38,
      "name": "1000Gp3_EUR_AF",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele counts in the 1000Gp3 South Asian descendent samples.",
      "id": 39,
      "name": "1000Gp3_SAS_AC",
      "parent_id": 28
    },
    {
      "detail": " Alternative allele frequency in the 1000Gp3 South Asian descendent samples.",
      "id": 40,
      "name": "1000Gp3_SAS_AF",
      "parent_id": 28
    },
    {
      "detail": null,
      "id": 41,
      "name": "UK10K",
      "parent_id": 0
    },
    {
      "detail": " Alternative allele count in called genotypes in UK10K cohorts.",
      "id": 42,
      "name": "UK10K_AC",
      "parent_id": 41
    },
    {
      "detail": " Alternative allele frequency in called genotypes in UK10K cohorts.",
      "id": 43,
      "name": "UK10K_AF",
      "parent_id": 41
    },
    {
      "detail": " Total allele count in called genotypes in UK10K cohorts.",
      "id": 44,
      "name": "UK10K_AN",
      "parent_id": 41
    },
    {
      "detail": null,
      "id": 45,
      "name": "Uniprot",
      "parent_id": 0
    },
    {
      "detail": " amino acid position as to Uniprot. Multiple entries separated by \";\".",
      "id": 46,
      "name": "Uniprot_aapos",
      "parent_id": 45
    },
    {
      "detail": " Uniprot accession number. Multiple entries separated by \";\".",
      "id": 47,
      "name": "Uniprot_acc",
      "parent_id": 45
    },
    {
      "detail": " Uniprot ID number. Multiple entries separated by \";\".",
      "id": 48,
      "name": "Uniprot_id",
      "parent_id": 45
    },
    {
      "detail": null,
      "id": 49,
      "name": "GWAS",
      "parent_id": 0
    },
    {
      "detail": " pubmedid of the paper describing the association",
      "id": 50,
      "name": "GWAS_catalog_pubmedid",
      "parent_id": 49
    },
    {
      "detail": " rs number according to GWAS catalog",
      "id": 51,
      "name": "GWAS_catalog_rs",
      "parent_id": 49
    },
    {
      "detail": " associated trait according to GWAS catalog",
      "id": 52,
      "name": "GWAS_catalog_trait",
      "parent_id": 49
    },
    {
      "detail": null,
      "id": 53,
      "name": "gnomAD",
      "parent_id": 0
    },
    {
      "detail": " Alternative allele count in the whole gnomAD exome samples (123,136 samples)",
      "id": 54,
      "name": "gnomAD_exomes_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the whole gnomAD exome samples (123,136 samples)",
      "id": 55,
      "name": "gnomAD_exomes_AF",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the African/African American gnomAD exome samples (7,652 samples)",
      "id": 56,
      "name": "gnomAD_exomes_AFR_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the African/African American gnomAD exome samples (7,652 samples)",
      "id": 57,
      "name": "gnomAD_exomes_AFR_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the African/African American gnomAD exome samples (7,652 samples)",
      "id": 58,
      "name": "gnomAD_exomes_AFR_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the Latino gnomAD exome samples (16,791 samples)",
      "id": 59,
      "name": "gnomAD_exomes_AMR_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the Latino gnomAD exome samples (16,791 samples)",
      "id": 60,
      "name": "gnomAD_exomes_AMR_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the Latino gnomAD exome samples (16,791 samples)",
      "id": 61,
      "name": "gnomAD_exomes_AMR_AN",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the whole gnomAD exome samples (123,136 samples)",
      "id": 62,
      "name": "gnomAD_exomes_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the Ashkenazi Jewish gnomAD exome samples (4,925 samples)",
      "id": 63,
      "name": "gnomAD_exomes_ASJ_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the Ashkenazi Jewish gnomAD exome samples (4,925 samples)",
      "id": 64,
      "name": "gnomAD_exomes_ASJ_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the Ashkenazi Jewish gnomAD exome samples (4,925 samples)",
      "id": 65,
      "name": "gnomAD_exomes_ASJ_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the East Asian gnomAD exome samples (8,624 samples)",
      "id": 66,
      "name": "gnomAD_exomes_EAS_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the East Asian gnomAD exome samples (8,624 samples)",
      "id": 67,
      "name": "gnomAD_exomes_EAS_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the East Asian gnomAD exome samples (8,624 samples)",
      "id": 68,
      "name": "gnomAD_exomes_EAS_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the Finnish gnomAD exome samples (11,150 samples)",
      "id": 69,
      "name": "gnomAD_exomes_FIN_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the Finnish gnomAD exome samples (11,150 samples)",
      "id": 70,
      "name": "gnomAD_exomes_FIN_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the Finnish gnomAD exome samples (11,150 samples)",
      "id": 71,
      "name": "gnomAD_exomes_FIN_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the Non-Finnish European gnomAD exome samples (55,860 samples)",
      "id": 72,
      "name": "gnomAD_exomes_NFE_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the Non-Finnish European gnomAD exome samples (55,860 samples)",
      "id": 73,
      "name": "gnomAD_exomes_NFE_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the Non-Finnish European gnomAD exome samples (55,860 samples)",
      "id": 74,
      "name": "gnomAD_exomes_NFE_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in other gnomAD exome samples (2,743 samples)",
      "id": 75,
      "name": "gnomAD_exomes_OTH_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in other gnomAD exome samples (2,743 samples)",
      "id": 76,
      "name": "gnomAD_exomes_OTH_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in other gnomAD exome samples (2,743 samples)",
      "id": 77,
      "name": "gnomAD_exomes_OTH_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the South Asian gnomAD exome samples (15,391 samples)",
      "id": 78,
      "name": "gnomAD_exomes_SAS_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the South Asian gnomAD exome samples (15,391 samples)",
      "id": 79,
      "name": "gnomAD_exomes_SAS_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the South Asian gnomAD exome samples (15,391 samples)",
      "id": 80,
      "name": "gnomAD_exomes_SAS_AN",
      "parent_id": 53
    },
    {
      "detail": " information from gnomAD exome data indicating whether the variant falling within low-complexity\t\t(lcr) or segmental duplication (segdup) regions. The flag can be either \".\" for high-quality PASS or not\t\treported/polymorphic in gnomAD exomes, \"lcr\" for within lcr, \"segdup\" for within segdup, or \"segdup;lcr\" for\t\twith both lcr and segdup.",
      "id": 81,
      "name": "gnomAD_exomes_flag",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the whole gnomAD genome samples (15,496 samples)",
      "id": 82,
      "name": "gnomAD_genomes_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the whole gnomAD genome samples (15,496 samples)",
      "id": 83,
      "name": "gnomAD_genomes_AF",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the African/African American gnomAD genome samples (4,368 samples)",
      "id": 84,
      "name": "gnomAD_genomes_AFR_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the African/African American gnomAD genome samples (4,368 samples)",
      "id": 85,
      "name": "gnomAD_genomes_AFR_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the African/African American gnomAD genome samples (4,368 samples)",
      "id": 86,
      "name": "gnomAD_genomes_AFR_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the Latino gnomAD genome samples (419 samples)",
      "id": 87,
      "name": "gnomAD_genomes_AMR_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the Latino gnomAD genome samples (419 samples)",
      "id": 88,
      "name": "gnomAD_genomes_AMR_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the Latino gnomAD genome samples (419 samples)",
      "id": 89,
      "name": "gnomAD_genomes_AMR_AN",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the whole gnomAD genome samples (15,496 samples)",
      "id": 90,
      "name": "gnomAD_genomes_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the Ashkenazi Jewish gnomAD genome samples (151 samples)",
      "id": 91,
      "name": "gnomAD_genomes_ASJ_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the Ashkenazi Jewish gnomAD genome samples (151 samples)",
      "id": 92,
      "name": "gnomAD_genomes_ASJ_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the Ashkenazi Jewish gnomAD genome samples (151 samples)",
      "id": 93,
      "name": "gnomAD_genomes_ASJ_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the East Asian gnomAD genome samples (811 samples)",
      "id": 94,
      "name": "gnomAD_genomes_EAS_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the East Asian gnomAD genome samples (811 samples)",
      "id": 95,
      "name": "gnomAD_genomes_EAS_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the East Asian gnomAD genome samples (811 samples)",
      "id": 96,
      "name": "gnomAD_genomes_EAS_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the Finnish gnomAD genome samples (1,747 samples)",
      "id": 97,
      "name": "gnomAD_genomes_FIN_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the Finnish gnomAD genome samples (1,747 samples)",
      "id": 98,
      "name": "gnomAD_genomes_FIN_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the Finnish gnomAD genome samples (1,747 samples)",
      "id": 99,
      "name": "gnomAD_genomes_FIN_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in the Non-Finnish European gnomAD genome samples (7,509 samples)",
      "id": 100,
      "name": "gnomAD_genomes_NFE_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in the Non-Finnish European gnomAD genome samples (7,509 samples)",
      "id": 101,
      "name": "gnomAD_genomes_NFE_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in the Non-Finnish European gnomAD genome samples (7,509 samples)",
      "id": 102,
      "name": "gnomAD_genomes_NFE_AN",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele count in other gnomAD genome samples (491 samples)",
      "id": 103,
      "name": "gnomAD_genomes_OTH_AC",
      "parent_id": 53
    },
    {
      "detail": " Alternative allele frequency in other gnomAD genome samples (491 samples)",
      "id": 104,
      "name": "gnomAD_genomes_OTH_AF",
      "parent_id": 53
    },
    {
      "detail": " Total allele count in other gnomAD genome samples (491 samples)",
      "id": 105,
      "name": "gnomAD_genomes_OTH_AN",
      "parent_id": 53
    },
    {
      "detail": " information from gnomAD genome data indicating whether the variant falling within low-complexity\t\t(lcr) or segmental duplication (segdup) regions. The flag can be either \".\" for high-quality PASS or not\t\treported/polymorphic in gnomAD genomes, \"lcr\" for within lcr, \"segdup\" for within segdup, or \"segdup;lcr\" for\t\twith both lcr and segdup.",
      "id": 106,
      "name": "gnomAD_genomes_flag",
      "parent_id": 53
    },
    {
      "detail": null,
      "id": 107,
      "name": "SnpEff",
      "parent_id": 0
    },
    {
      "detail": " CDS position and length as to a transcript.\t\tFormat: CDS position/CDS length\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 108,
      "name": "SnpEff_ensembl_CDS_position/CDS_len",
      "parent_id": 107
    },
    {
      "detail": " distance to feature.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 109,
      "name": "SnpEff_ensembl_Distance_to_feature",
      "parent_id": 107
    },
    {
      "detail": " SnpEff consequence with Ensembl as gene model.\t\tMultiple consequences are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 110,
      "name": "SnpEff_ensembl_Effect",
      "parent_id": 107
    },
    {
      "detail": " consequence impacts predicted by SnpEff.\t\tMultiple impacts are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 111,
      "name": "SnpEff_ensembl_Effect_impact",
      "parent_id": 107
    },
    {
      "detail": " exon (intron) rank and total number as to a transcript.\t\tFormat: exon or intron rank / total exon or intron number\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 112,
      "name": "SnpEff_ensembl_Exon_or_intron_rank/total",
      "parent_id": 107
    },
    {
      "detail": " Ensembl gene IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 113,
      "name": "SnpEff_ensembl_Gene_ID",
      "parent_id": 107
    },
    {
      "detail": " Ensembl gene names corresponding to transcripts.\t\tMultiple gene names are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 114,
      "name": "SnpEff_ensembl_Gene_name",
      "parent_id": 107
    },
    {
      "detail": " variant in format of HGVSc.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 115,
      "name": "SnpEff_ensembl_HGVSc",
      "parent_id": 107
    },
    {
      "detail": " variant in format of HGVSp.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 116,
      "name": "SnpEff_ensembl_HGVSp",
      "parent_id": 107
    },
    {
      "detail": " LOF or NMD by SnpEff.",
      "id": 117,
      "name": "SnpEff_ensembl_LOF/NMD",
      "parent_id": 107
    },
    {
      "detail": " gene ID corresponding to SnpEff_ensembl_LOF/NMD.",
      "id": 118,
      "name": "SnpEff_ensembl_LOF/NMD_gene_ID",
      "parent_id": 107
    },
    {
      "detail": " gene name corresponding to SnpEff_ensembl_LOF/NMD.",
      "id": 119,
      "name": "SnpEff_ensembl_LOF/NMD_gene_name",
      "parent_id": 107
    },
    {
      "detail": " number of transcripts affected\t\tcorresponding to SnpEff_ensembl_LOF/NMD.",
      "id": 120,
      "name": "SnpEff_ensembl_LOF/NMD_num_transcripts_affected",
      "parent_id": 107
    },
    {
      "detail": " percentage of transcripts affected\t\tcorresponding to SnpEff_ensembl_LOF/NMD.",
      "id": 121,
      "name": "SnpEff_ensembl_LOF/NMD_percent_transcripts_affected",
      "parent_id": 107
    },
    {
      "detail": " protein position and length as to a transcript.\t\tFormat: protein position/protein length\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 122,
      "name": "SnpEff_ensembl_Protein_position/Protein_len",
      "parent_id": 107
    },
    {
      "detail": " SnpEff consequence features.\t\tMultiple features are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 123,
      "name": "SnpEff_ensembl_Sequence_feature",
      "parent_id": 107
    },
    {
      "detail": " sequence feature impacts predicted by SnpEff.\t\tMultiple impacts are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 124,
      "name": "SnpEff_ensembl_Sequence_feature_impact",
      "parent_id": 107
    },
    {
      "detail": " ID of the TF",
      "id": 125,
      "name": "SnpEff_ensembl_TF_ID",
      "parent_id": 107
    },
    {
      "detail": " effect of TF binding by SnpEff",
      "id": 126,
      "name": "SnpEff_ensembl_TF_binding_effect",
      "parent_id": 107
    },
    {
      "detail": " name of the TF",
      "id": 127,
      "name": "SnpEff_ensembl_TF_name",
      "parent_id": 107
    },
    {
      "detail": " Ensembl transcript IDs corresponding to consequences.\t\tMultiple IDs are separated by \"|\"",
      "id": 128,
      "name": "SnpEff_ensembl_Transcript_ID",
      "parent_id": 107
    },
    {
      "detail": " biotype of transcript.\t\tMultiple biotypes are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 129,
      "name": "SnpEff_ensembl_Transcript_biotype",
      "parent_id": 107
    },
    {
      "detail": " SnpEff warnings.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 130,
      "name": "SnpEff_ensembl_Warnings",
      "parent_id": 107
    },
    {
      "detail": " cDNA position and length as to a transcript.\t\tFormat: cDNA position/cDNA length\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_ensembl_Transcript_ID",
      "id": 131,
      "name": "SnpEff_ensembl_cDNA_position/cDNA_len",
      "parent_id": 107
    },
    {
      "detail": " SnpEff consequence summary with Ensembl as gene model.\t\tFormat: GeneID(total number of transcripts):consequence#1(number of transcripts affected)\t\tconsequence#2(number of transcripts affected)... Multiple genes are separated by \"|\"",
      "id": 132,
      "name": "SnpEff_ensembl_summary",
      "parent_id": 107
    },
    {
      "detail": " CDS position and length as to a transcript.\t\tFormat: CDS position/CDS length\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 133,
      "name": "SnpEff_refseq_CDS_position/CDS_len",
      "parent_id": 107
    },
    {
      "detail": " distance to feature.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 134,
      "name": "SnpEff_refseq_Distance_to_feature",
      "parent_id": 107
    },
    {
      "detail": " SnpEff consequence with RefSeq as gene model.\t\tMultiple consequences are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 135,
      "name": "SnpEff_refseq_Effect",
      "parent_id": 107
    },
    {
      "detail": " consequence impacts predicted by SnpEff.\t\tMultiple impacts are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 136,
      "name": "SnpEff_refseq_Effect_impact",
      "parent_id": 107
    },
    {
      "detail": " exon (intron) rank and total number as to a transcript.\t\tFormat: exon or intron rank / total exon or intron number\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 137,
      "name": "SnpEff_refseq_Exon_or_intron_rank/total",
      "parent_id": 107
    },
    {
      "detail": " RefSeq gene IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 138,
      "name": "SnpEff_refseq_Gene_ID",
      "parent_id": 107
    },
    {
      "detail": " RefSeq gene names corresponding to transcripts.\t\tMultiple gene names are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 139,
      "name": "SnpEff_refseq_Gene_name",
      "parent_id": 107
    },
    {
      "detail": " variant in format of HGVSc.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 140,
      "name": "SnpEff_refseq_HGVSc",
      "parent_id": 107
    },
    {
      "detail": " variant in format of HGVSp.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 141,
      "name": "SnpEff_refseq_HGVSp",
      "parent_id": 107
    },
    {
      "detail": " LOF or NMD by SnpEff.",
      "id": 142,
      "name": "SnpEff_refseq_LOF/NMD",
      "parent_id": 107
    },
    {
      "detail": " gene ID corresponding to SnpEff_refseq_LOF/NMD.",
      "id": 143,
      "name": "SnpEff_refseq_LOF/NMD_gene_ID",
      "parent_id": 107
    },
    {
      "detail": " gene name corresponding to SnpEff_refseq_LOF/NMD.",
      "id": 144,
      "name": "SnpEff_refseq_LOF/NMD_gene_name",
      "parent_id": 107
    },
    {
      "detail": " number of transcripts affected\t\tcorresponding to SnpEff_refseq_LOF/NMD.",
      "id": 145,
      "name": "SnpEff_refseq_LOF/NMD_num_transcripts_affected",
      "parent_id": 107
    },
    {
      "detail": " percentage of transcripts affected\t\tcorresponding to SnpEff_refseq_LOF/NMD.",
      "id": 146,
      "name": "SnpEff_refseq_LOF/NMD_percent_transcripts_affected",
      "parent_id": 107
    },
    {
      "detail": " protein position and length as to a transcript.\t\tFormat: protein position/protein length\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 147,
      "name": "SnpEff_refseq_Protein_position/Protein_len",
      "parent_id": 107
    },
    {
      "detail": " SnpEff consequence features.\t\tMultiple features are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 148,
      "name": "SnpEff_refseq_Sequence_feature",
      "parent_id": 107
    },
    {
      "detail": " sequence feature impacts predicted by SnpEff.\t\tMultiple impacts are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 149,
      "name": "SnpEff_refseq_Sequence_feature_impact",
      "parent_id": 107
    },
    {
      "detail": " ID of the TF",
      "id": 150,
      "name": "SnpEff_refseq_TF_ID",
      "parent_id": 107
    },
    {
      "detail": " effect of TF binding by SnpEff",
      "id": 151,
      "name": "SnpEff_refseq_TF_binding_effect",
      "parent_id": 107
    },
    {
      "detail": " name of the TF",
      "id": 152,
      "name": "SnpEff_refseq_TF_name",
      "parent_id": 107
    },
    {
      "detail": " RefSeq transcript IDs corresponding to consequences.\t\tMultiple IDs are separated by \"|\"",
      "id": 153,
      "name": "SnpEff_refseq_Transcript_ID",
      "parent_id": 107
    },
    {
      "detail": " biotype of transcript.\t\tMultiple biotypes are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 154,
      "name": "SnpEff_refseq_Transcript_biotype",
      "parent_id": 107
    },
    {
      "detail": " SnpEff warnings.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 155,
      "name": "SnpEff_refseq_Warnings",
      "parent_id": 107
    },
    {
      "detail": " cDNA position and length as to a transcript.\t\tFormat: cDNA position/cDNA length\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to SnpEff_refseq_Transcript_ID",
      "id": 156,
      "name": "SnpEff_refseq_cDNA_position/cDNA_len",
      "parent_id": 107
    },
    {
      "detail": " SnpEff consequence summary with RefSeq as gene model.\t\tFormat: GeneID(total number of transcripts):consequence#1(number of transcripts affected)\t\tconsequence#2(number of transcripts affected)... Multiple genes are separated by \"|\"",
      "id": 157,
      "name": "SnpEff_refseq_summary",
      "parent_id": 107
    },
    {
      "detail": null,
      "id": 158,
      "name": "SIFT",
      "parent_id": 0
    },
    {
      "detail": " SIFTori scores were first converted to SIFTnew=1-SIFTori,\t\tthen ranked among all SIFTnew scores in dbNSFP. The rankscore is the ratio of\t\tthe rank the SIFTnew score over the total number of SIFTnew scores in dbNSFP.\t\tIf there are multiple scores, only the most damaging (largest) rankscore is presented.\t\tThe rankscores range from 0.02654 to 0.87932.",
      "id": 159,
      "name": "SIFT_converted_rankscore",
      "parent_id": 158
    },
    {
      "detail": " If SIFTori is smaller than 0.05 (rankscore>0.55) the corresponding NS is\t\tpredicted as \"D(amaging)\"; otherwise it is predicted as \"T(olerated)\".\t\tMultiple predictions separated by \";\"",
      "id": 160,
      "name": "SIFT_pred",
      "parent_id": 158
    },
    {
      "detail": " SIFT score (SIFTori). Scores range from 0 to 1. The smaller the score the\t\tmore likely the SNP has damaging effect. Multiple scores separated by \";\".",
      "id": 161,
      "name": "SIFT_score",
      "parent_id": 158
    },
    {
      "detail": null,
      "id": 162,
      "name": "CADD",
      "parent_id": 0
    },
    {
      "detail": " CADD phred-like score, ranges 1-99, the larger the number the more likely\t\tdamaging; score >10 means the variant in the top 10% (0.1) among the total\t\t8.6 billion possible SNVs, >20 means in the top 1%, >30 means in the top 0.1%, etc.\t\tCADD suggests a cutoff between 10 and 20 (e.g. 15)",
      "id": 163,
      "name": "CADD_phred",
      "parent_id": 162
    },
    {
      "detail": " CADD raw score, the larger the number the more likely damaging",
      "id": 164,
      "name": "CADD_raw",
      "parent_id": 162
    },
    {
      "detail": " the rank of the CADD_raw score among all CADD_raw scores in genome",
      "id": 165,
      "name": "CADD_raw_rankscore",
      "parent_id": 162
    },
    {
      "detail": null,
      "id": 166,
      "name": "M-CAP",
      "parent_id": 0
    },
    {
      "detail": " Prediction of M-CAP score based on the authors' recommendation, \"T(olerated)\" or\t\t\"D(amaging)\". The score cutoff between \"D\" and \"T\" is 0.025.\\n\"+",
      "id": 167,
      "name": "M-CAP_pred",
      "parent_id": 166
    },
    {
      "detail": " M-CAP scores were ranked among all M-CAP scores in dbNSFP. The rankscore is\t\tthe ratio of the rank of the score over the total number of M-CAP scores in dbNSFP.",
      "id": 168,
      "name": "M-CAP_rankscore",
      "parent_id": 166
    },
    {
      "detail": " M-CAP score (details in DOI\t\tthe score the more likely the SNP has damaging effect.",
      "id": 169,
      "name": "M-CAP_score",
      "parent_id": 166
    },
    {
      "detail": null,
      "id": 170,
      "name": "GRASP",
      "parent_id": 0
    },
    {
      "detail": " PMID number by GRASP",
      "id": 171,
      "name": "GRASP_PMID",
      "parent_id": 170
    },
    {
      "detail": " population ancestry of the samples on which the association test was based",
      "id": 172,
      "name": "GRASP_ancestry",
      "parent_id": 170
    },
    {
      "detail": " p-value of the association test based on the SNP",
      "id": 173,
      "name": "GRASP_p-value",
      "parent_id": 170
    },
    {
      "detail": " phenotype the SNP associated with",
      "id": 174,
      "name": "GRASP_phenotype",
      "parent_id": 170
    },
    {
      "detail": " SNP platform on which the association test was based",
      "id": 175,
      "name": "GRASP_platform",
      "parent_id": 170
    },
    {
      "detail": " rs number by GRASP",
      "id": 176,
      "name": "GRASP_rs",
      "parent_id": 170
    },
    {
      "detail": null,
      "id": 177,
      "name": "PROVEAN",
      "parent_id": 0
    },
    {
      "detail": " PROVEANori were first converted to PROVEANnew=1-(PROVEANori+14)/28,\t\tthen ranked among all PROVEANnew scores in dbNSFP. The rankscore is the ratio of\t\tthe rank the PROVEANnew score over the total number of PROVEANnew scores in dbNSFP.\t\tIf there are multiple scores, only the most damaging (largest) rankscore is presented.",
      "id": 178,
      "name": "PROVEAN_converted_rankscore",
      "parent_id": 177
    },
    {
      "detail": " If PROVEANori <= -2.5 (rankscore>=0.59) the corresponding NS is\t\tpredicted as \"D(amaging)\"; otherwise it is predicted as \"N(eutral)\".\t\tMultiple predictions separated by \";\"\\n\"+",
      "id": 179,
      "name": "PROVEAN_pred",
      "parent_id": 177
    },
    {
      "detail": " PROVEAN score (PROVEANori). Scores range from -14 to 14. The smaller the score\t\tthe more likely the SNP has damaging effect. Multiple scores separated by \";\". Details\t\tcan be found in DOI: 10.1371/journal.pone.0046688",
      "id": 180,
      "name": "PROVEAN_score",
      "parent_id": 177
    },
    {
      "detail": null,
      "id": 181,
      "name": "clinvar",
      "parent_id": 0
    },
    {
      "detail": " clinical significance by clinvar\t\t2 - Benign, 3 - Likely benign, 4 - Likely pathogenic, 5 - Pathogenic, 6 - drug response,\t\t7 - histocompatibility. A negative score means the score is for the ref allele",
      "id": 182,
      "name": "clinvar_clnsig",
      "parent_id": 181
    },
    {
      "detail": " ClinVar Review Status summary\t\t0 - no assertion criteria provided, 1 - criteria provided, single submitter,\t\t2 - criteria provided, multiple submitters, no conflicts,\t\t3 - reviewed by expert panel, 4 - practice guideline",
      "id": 183,
      "name": "clinvar_golden_stars",
      "parent_id": 181
    },
    {
      "detail": " rs number by clinvar",
      "id": 184,
      "name": "clinvar_rs",
      "parent_id": 181
    },
    {
      "detail": " the trait/disease the clinvar_clnsig referring to",
      "id": 185,
      "name": "clinvar_trait",
      "parent_id": 181
    },
    {
      "detail": null,
      "id": 186,
      "name": "VEST3",
      "parent_id": 0
    },
    {
      "detail": " VEST3 scores were ranked among all VEST3 scores in dbNSFP.\t\tThe rankscore is the ratio of the rank of the score over the total number of VEST3\t\tscores in dbNSFP. The scores range from 0 to 1.\t\tPlease note VEST score is free for non-commercial use. For more details please refer to\t\thttp://wiki.chasmsoftware.org/index.php/SoftwareLicense. Commercial users should contact\t\tthe Johns Hopkins Technology Transfer office.",
      "id": 187,
      "name": "VEST3_rankscore",
      "parent_id": 186
    },
    {
      "detail": " VEST 3.0 score. Score ranges from 0 to 1. The larger the score the more likely\t\tthe mutation may cause functional change. In case there are multiple scores for the\t\tsame variant, the largest score (most damaging) is presented. Please refer to\t\tCarter et al., (2013) BMC Genomics. 14(3) 1-16 for details.\t\tPlease note this score is free for non-commercial use. For more details please refer to\t\thttp://wiki.chasmsoftware.org/index.php/SoftwareLicense. Commercial users should contact\t\tthe Johns Hopkins Technology Transfer office.",
      "id": 188,
      "name": "VEST3_score",
      "parent_id": 186
    },
    {
      "detail": null,
      "id": 189,
      "name": "FATHMM",
      "parent_id": 0
    },
    {
      "detail": " If a FATHMMori score is <=-1.5 (or rankscore >=0.81415) the corresponding NS\t\tis predicted as \"D(AMAGING)\"; otherwise it is predicted as \"T(OLERATED)\".\t\tMultiple predictions separated by \";\"",
      "id": 190,
      "name": "FATHMM_pred",
      "parent_id": 189
    },
    {
      "detail": " FATHMMnew=-FATHMMori were ranked among all FATHMMnew scores in dbNSFP.\t\tThe rankscore is the ratio of the rank of the score over the total number of FATHMMnew\t\tscores in dbNSFP. If there are multiple scores, only the most damaging (smallest)\t\trankscore is presented. The scores range from 0 to 1.",
      "id": 191,
      "name": "FATHMM_rankscore",
      "parent_id": 189
    },
    {
      "detail": " FATHMM default score (weighted for human inherited-disease mutations with\t\tDisease Ontology) (FATHMMori). Scores range from -18.09 to 11.0. The smaller the score the\t\tmore likely the SNP has damaging effect. Multiple scores\t\tseparated by \";\" Please refer to Shihab et al. (2013) Human Mutation 34(1):57-65 for\t\tdetails.",
      "id": 192,
      "name": "FATHMM_score",
      "parent_id": 189
    },
    {
      "detail": null,
      "id": 193,
      "name": "COSMIC",
      "parent_id": 0
    },
    {
      "detail": " number of samples having this SNV in the COSMIC database",
      "id": 194,
      "name": "COSMIC_CNT",
      "parent_id": 193
    },
    {
      "detail": " ID of the SNV at the COSMIC (Catalogue Of Somatic Mutations In Cancer) database",
      "id": 195,
      "name": "COSMIC_ID",
      "parent_id": 193
    },
    {
      "detail": null,
      "id": 196,
      "name": "RegulomeDB",
      "parent_id": 0
    },
    {
      "detail": " motif the SNP resides (from RegulomeDB)",
      "id": 197,
      "name": "RegulomeDB_motif",
      "parent_id": 196
    },
    {
      "detail": " categorical score from RegulomeDB. The smaller, the more likely the SNP\t\taffects binding",
      "id": 198,
      "name": "RegulomeDB_score",
      "parent_id": 196
    },
    {
      "detail": null,
      "id": 199,
      "name": "MetaLR",
      "parent_id": 0
    },
    {
      "detail": " Prediction of our MetaLR based ensemble prediction score,\"T(olerated)\" or\t\t\"D(amaging)\". The score cutoff between \"D\" and \"T\" is 0.5. The rankscore cutoff between\t\t\"D\" and \"T\" is 0.82268.",
      "id": 200,
      "name": "MetaLR_pred",
      "parent_id": 199
    },
    {
      "detail": " MetaLR scores were ranked among all MetaLR scores in dbNSFP. The rankscore\t\tis the ratio of the rank of the score over the total number of MetaLR scores in dbNSFP.\t\tThe scores range from 0 to 1.",
      "id": 201,
      "name": "MetaLR_rankscore",
      "parent_id": 199
    },
    {
      "detail": " Our logistic regression (LR) based ensemble prediction score, which\t\tincorporated 10 scores (SIFT, PolyPhen-2 HDIV, PolyPhen-2 HVAR, GERP++, MutationTaster,\t\tMutation Assessor, FATHMM, LRT, SiPhy, PhyloP) and the maximum frequency observed in\t\tthe 1000 genomes populations. Larger value means the SNV is more likely to be damaging.\t\tScores range from 0 to 1.",
      "id": 202,
      "name": "MetaLR_score",
      "parent_id": 199
    },
    {
      "detail": null,
      "id": 203,
      "name": "fathmm-MKL",
      "parent_id": 0
    },
    {
      "detail": " fathmm-MKL coding group, the feature group used for the coding prediction.",
      "id": 204,
      "name": "fathmm-MKL_coding_group",
      "parent_id": 203
    },
    {
      "detail": " If a fathmm-MKL_coding_score is >0.5 the corresponding nsSNV\t\tis predicted as \"D(AMAGING)\"; otherwise it is predicted as \"N(EUTRAL)\".",
      "id": 205,
      "name": "fathmm-MKL_coding_pred",
      "parent_id": 203
    },
    {
      "detail": " the rank of the fathmm-MKL_coding_score among all fathmm-MKL_coding_scores in genome",
      "id": 206,
      "name": "fathmm-MKL_coding_rankscore",
      "parent_id": 203
    },
    {
      "detail": " fathmm-MKL coding prediction probability, the larger the number the more likely damaging\t\tthe threshold separating deleterious prediction and neutral prediction is 0.5.",
      "id": 207,
      "name": "fathmm-MKL_coding_score",
      "parent_id": 203
    },
    {
      "detail": " fathmm-MKL non-coding group, the feature group used for the non-coding prediction",
      "id": 208,
      "name": "fathmm-MKL_non-coding_group",
      "parent_id": 203
    },
    {
      "detail": " If a fathmm-MKL_non-coding_score is >0.5 the corresponding nsSNV\t\tis predicted as \"D(AMAGING)\"; otherwise it is predicted as \"N(EUTRAL)\".",
      "id": 209,
      "name": "fathmm-MKL_non-coding_pred",
      "parent_id": 203
    },
    {
      "detail": " the rank of the fathmm-MKL_non-coding_score among all fathmm-MKL_non-coding_scores in genome",
      "id": 210,
      "name": "fathmm-MKL_non-coding_rankscore",
      "parent_id": 203
    },
    {
      "detail": " fathmm-MKL non-coding prediction probability, the larger the number the more likely damaging;\t\tthe threshold separating deleterious prediction and neutral prediction is 0.5.",
      "id": 211,
      "name": "fathmm-MKL_non-coding_score",
      "parent_id": 203
    },
    {
      "detail": null,
      "id": 212,
      "name": "REVEL",
      "parent_id": 0
    },
    {
      "detail": " REVEL scores were ranked among all REVEL scores in dbNSFP. The rankscore is\t\tthe ratio of the rank of the score over the total number of REVEL scores in dbNSFP.",
      "id": 213,
      "name": "REVEL_rankscore",
      "parent_id": 212
    },
    {
      "detail": " REVEL is an ensemble score based on 13 individual scores for predicting the\t\tpathogenicity of missense variants. Scores range from 0 to 1. The larger the score the more\t\tlikely the SNP has damaging effect. \"REVEL scores are freely available for non-commercial use.\t\tFor other uses, please contact Weiva Sieh\" (weiva.sieh@mssm.edu)",
      "id": 214,
      "name": "REVEL_score",
      "parent_id": 212
    },
    {
      "detail": null,
      "id": 215,
      "name": "GERP",
      "parent_id": 0
    },
    {
      "detail": " GERP++ neutral rate",
      "id": 216,
      "name": "GERP_NR",
      "parent_id": 215
    },
    {
      "detail": " GERP++ RS score, the larger the score, the more conserved the site",
      "id": 217,
      "name": "GERP_RS",
      "parent_id": 215
    },
    {
      "detail": " the rank of the GERP_RS score among all GERP_RS scores in genome",
      "id": 218,
      "name": "GERP_RS_rankscore",
      "parent_id": 215
    },
    {
      "detail": null,
      "id": 219,
      "name": "ORegAnno",
      "parent_id": 0
    },
    {
      "detail": " the PMID of the paper describing the regulation",
      "id": 220,
      "name": "ORegAnno_PMID",
      "parent_id": 219
    },
    {
      "detail": " the type of regulatory region by ORegAnno",
      "id": 221,
      "name": "ORegAnno_type",
      "parent_id": 219
    },
    {
      "detail": null,
      "id": 222,
      "name": "ALSPAC",
      "parent_id": 0
    },
    {
      "detail": " Alternative allele count in called genotypes in UK10K TWINSUK cohort.",
      "id": 223,
      "name": "ALSPAC_AC",
      "parent_id": 222
    },
    {
      "detail": " Alternative allele frequency in called genotypes in UK10K TWINSUK cohort.",
      "id": 224,
      "name": "ALSPAC_AF",
      "parent_id": 222
    },
    {
      "detail": " Total allele count in called genotypes in UK10K TWINSUK cohort.",
      "id": 225,
      "name": "ALSPAC_AN",
      "parent_id": 222
    },
    {
      "detail": null,
      "id": 226,
      "name": "FANTOM5",
      "parent_id": 0
    },
    {
      "detail": " whether the site is within a FANTOM5 phase 1 permissive Cap Analysis of Gene Expression\t\t(CAGE) peak permissive set. Y (Yes) or N (No). A CAGE peak generally suggests a promoter region",
      "id": 227,
      "name": "FANTOM5_CAGE_peak_permissive",
      "parent_id": 226
    },
    {
      "detail": " whether the site is within a FANTOM5 phase 1+2 robust Cap Analysis of Gene Expression\t\t(CAGE) peak robust set. Y (Yes) or N (No). A CAGE peak generally suggests a promoter region",
      "id": 228,
      "name": "FANTOM5_CAGE_peak_robust",
      "parent_id": 226
    },
    {
      "detail": " tissue or cell the enhancer expressed differentially\t\t(from FANTOM5 phase 1). multiple values are separated by ;\t\tpossible values: neuronal_stem_cell,myoblast,osteoblast,ciliated_epithelial_cell,\t\tblood_vessel_endothelial_cell,mesothelial_cell,circulating_cell,T_cell,granulocyte,mast_cell,\t\tsensory_epithelial_cell,astrocyte,mesenchymal_cell,fat_cell,chondrocyte,melanocyte,hepatocyte,\t\tskeletal_muscle_cell,macrophage,keratinocyte,vascular_associated_smooth_muscle_cell,tendon_cell,\t\tdendritic_cell,stromal_cell,neuron,reticulocyte,corneal_epithelial_cell,monocyte,acinar_cell,\t\tnatural_killer_cell,hepatic_stellate_cell,pericyte_cell,urothelial_cell,cardiac_myocyte,basophil,\t\tneutrophil,lymphocyte_of_B_lineage,endothelial_cell_of_lymphatic_vessel,epithelial_cell_of_Malassez,\t\tlens_epithelial_cell,epithelial_cell_of_prostate,epithelial_cell_of_esophagus,\t\tmammary_epithelial_cell,preadipocyte,keratocyte,trabecular_meshwork_cell,respiratory_epithelial_cell,\t\tenteric_smooth_muscle_cell,kidney_epithelial_cell,amniotic_epithelial_cell,cardiac_fibroblast,\t\tfibroblast_of_choroid_plexus,fibroblast_of_the_conjuctiva,fibroblast_of_gingiva,\t\tfibroblast_of_lymphatic_vessel,fibroblast_of_periodontium,fibroblast_of_pulmonary_artery,\t\thair_follicle_cell,intestinal_epithelial_cell,iris_pigment_epithelial_cell,placental_epithelial_cell,\t\tretinal_pigment_epithelial_cell,bronchial_smooth_muscle_cell,smooth_muscle_cell_of_the_esophagus,\t\tsmooth_muscle_cell_of_trachea,uterine_smooth_muscle_cell,skin_fibroblast,gingival_epithelial_cell,\t\tfibroblast_of_tunica_adventitia_of_artery,endothelial_cell_of_hepatic_sinusoid,\t\tsmooth_muscle_cell_of_prostate,lymph_node,large_intestine,blood,throat,testis,stomach,heart,brain,\t\teye,penis,female_gonad,uterus,vagina,adipose_tissue,esophagus,salivary_gland,skeletal_muscle_tissue,\t\tsmooth_muscle_tissue,urinary_bladder,pancreas,tongue,submandibular_gland,parotid_gland,blood_vessel,\t\tplacenta,thyroid_gland,lung,skin_of_body,spleen,liver,small_intestine,gallbladder,kidney,spinal_cord,\t\tumbilical_cord,meninx,prostate_gland,thymus,tonsil,olfactory_region,internal_male_genitalia",
      "id": 229,
      "name": "FANTOM5_enhancer_differentially_expressed_tissue_cell",
      "parent_id": 226
    },
    {
      "detail": " tissue or cell the enhancer expressed (from FANTOM5 phase 1).\t\tmultiple values are separated by ;\t\tpossible values: neuronal_stem_cell,myoblast,osteoblast,ciliated_epithelial_cell,\t\tblood_vessel_endothelial_cell,mesothelial_cell,circulating_cell,T_cell,granulocyte,mast_cell,\t\tsensory_epithelial_cell,astrocyte,mesenchymal_cell,fat_cell,chondrocyte,melanocyte,hepatocyte,\t\tskeletal_muscle_cell,macrophage,keratinocyte,vascular_associated_smooth_muscle_cell,tendon_cell,\t\tdendritic_cell,stromal_cell,neuron,reticulocyte,corneal_epithelial_cell,monocyte,acinar_cell,\t\tnatural_killer_cell,hepatic_stellate_cell,pericyte_cell,urothelial_cell,cardiac_myocyte,basophil,\t\tneutrophil,lymphocyte_of_B_lineage,endothelial_cell_of_lymphatic_vessel,epithelial_cell_of_Malassez,\t\tlens_epithelial_cell,epithelial_cell_of_prostate,epithelial_cell_of_esophagus,\t\tmammary_epithelial_cell,preadipocyte,keratocyte,trabecular_meshwork_cell,respiratory_epithelial_cell,\t\tenteric_smooth_muscle_cell,kidney_epithelial_cell,amniotic_epithelial_cell,cardiac_fibroblast,\t\tfibroblast_of_choroid_plexus,fibroblast_of_the_conjuctiva,fibroblast_of_gingiva,\t\tfibroblast_of_lymphatic_vessel,fibroblast_of_periodontium,fibroblast_of_pulmonary_artery,\t\thair_follicle_cell,intestinal_epithelial_cell,iris_pigment_epithelial_cell,placental_epithelial_cell,\t\tretinal_pigment_epithelial_cell,bronchial_smooth_muscle_cell,smooth_muscle_cell_of_the_esophagus,\t\tsmooth_muscle_cell_of_trachea,uterine_smooth_muscle_cell,skin_fibroblast,gingival_epithelial_cell,\t\tfibroblast_of_tunica_adventitia_of_artery,endothelial_cell_of_hepatic_sinusoid,\t\tsmooth_muscle_cell_of_prostate,lymph_node,large_intestine,blood,throat,testis,stomach,heart,brain,\t\teye,penis,female_gonad,uterus,vagina,adipose_tissue,esophagus,salivary_gland,skeletal_muscle_tissue,\t\tsmooth_muscle_tissue,urinary_bladder,pancreas,tongue,submandibular_gland,parotid_gland,blood_vessel,\t\tplacenta,thyroid_gland,lung,skin_of_body,spleen,liver,small_intestine,gallbladder,kidney,spinal_cord,\t\tumbilical_cord,meninx,prostate_gland,thymus,tonsil,olfactory_region,internal_male_genitalia",
      "id": 230,
      "name": "FANTOM5_enhancer_expressed_tissue_cell",
      "parent_id": 226
    },
    {
      "detail": " whether the site is within a FANTOM5 phase 1+2 predicted permissive enhancer\t\tY (Yes) or N (No)",
      "id": 231,
      "name": "FANTOM5_enhancer_permissive",
      "parent_id": 226
    },
    {
      "detail": " whether the site is within a FANTOM5 phase 1 predicted robust enhancer\t\tY (Yes) or N (No)",
      "id": 232,
      "name": "FANTOM5_enhancer_robust",
      "parent_id": 226
    },
    {
      "detail": " if the site is within a FANTOM5 phase 1 predicted robust enhancer,\t\tthis is the name of the FANTOM5 predicted target gene of the enhancer.",
      "id": 233,
      "name": "FANTOM5_enhancer_target",
      "parent_id": 226
    },
    {
      "detail": null,
      "id": 234,
      "name": "MutPred",
      "parent_id": 0
    },
    {
      "detail": " Amino acid change used for MutPred_score calculation.",
      "id": 235,
      "name": "MutPred_AAchange",
      "parent_id": 234
    },
    {
      "detail": " Top 5 features (molecular mechanisms of disease) as predicted by MutPred with\t\tp values. MutPred_score > 0.5 and p < 0.05 are referred to as actionable hypotheses.\t\tMutPred_score > 0.75 and p < 0.05 are referred to as confident hypotheses.\t\tMutPred_score > 0.75 and p < 0.01 are referred to as very confident hypotheses.\");",
      "id": 236,
      "name": "MutPred_Top5features",
      "parent_id": 234
    },
    {
      "detail": " UniProt accession or Ensembl transcript ID used for MutPred_score calculation.",
      "id": 237,
      "name": "MutPred_protID",
      "parent_id": 234
    },
    {
      "detail": " MutPred scores were ranked among all MutPred scores in dbNSFP. The rankscore is\t\tthe ratio of the rank of the score over the total number of MutPred scores in dbNSFP.",
      "id": 238,
      "name": "MutPred_rankscore",
      "parent_id": 234
    },
    {
      "detail": " General MutPred score. Scores range from 0 to 1. The larger the score the more\t\tlikely the SNP has damaging effect.",
      "id": 239,
      "name": "MutPred_score",
      "parent_id": 234
    },
    {
      "detail": null,
      "id": 240,
      "name": "funseq2",
      "parent_id": 0
    },
    {
      "detail": " the rank of the funseq2_noncoding_score among all funseq2_noncoding_scores in genome",
      "id": 241,
      "name": "funseq2_noncoding_rankscore",
      "parent_id": 240
    },
    {
      "detail": " funseq2 noncoding score range 0-5.4\t\ta weighted score designed for damaging prediction of cancer somatic SNPs",
      "id": 242,
      "name": "funseq2_noncoding_score",
      "parent_id": 240
    },
    {
      "detail": null,
      "id": 243,
      "name": "VEP",
      "parent_id": 0
    },
    {
      "detail": " amino acid change as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID\t\t\"*\" represents a stop codon",
      "id": 244,
      "name": "VEP_ensembl_Amino_Acid_Change",
      "parent_id": 243
    },
    {
      "detail": " whether a transcript is canonical.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 245,
      "name": "VEP_ensembl_CANONICAL",
      "parent_id": 243
    },
    {
      "detail": " CCDS IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 246,
      "name": "VEP_ensembl_CCDS",
      "parent_id": 243
    },
    {
      "detail": " CDS position as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 247,
      "name": "VEP_ensembl_CDS_position",
      "parent_id": 243
    },
    {
      "detail": " codon change or distance as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 248,
      "name": "VEP_ensembl_Codon_Change_or_Distance",
      "parent_id": 243
    },
    {
      "detail": " VEP consequence with Ensembl as gene model.\t\tMultiple consequences are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 249,
      "name": "VEP_ensembl_Consequence",
      "parent_id": 243
    },
    {
      "detail": " exon (intron) rank as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 250,
      "name": "VEP_ensembl_Exon_or_Intron_Rank",
      "parent_id": 243
    },
    {
      "detail": " Ensembl gene IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 251,
      "name": "VEP_ensembl_Gene_ID",
      "parent_id": 243
    },
    {
      "detail": " Ensembl gene names corresponding to transcripts.\t\tMultiple gene names are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 252,
      "name": "VEP_ensembl_Gene_Name",
      "parent_id": 243
    },
    {
      "detail": " variant in format of HGVSc.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 253,
      "name": "VEP_ensembl_HGVSc",
      "parent_id": 243
    },
    {
      "detail": " variant in format of HGVSp.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 254,
      "name": "VEP_ensembl_HGVSp",
      "parent_id": 243
    },
    {
      "detail": " LOF by LOFTEE.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 255,
      "name": "VEP_ensembl_LoF",
      "parent_id": 243
    },
    {
      "detail": " LOF filter by LOFTEE.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 256,
      "name": "VEP_ensembl_LoF_filter",
      "parent_id": 243
    },
    {
      "detail": " LOF flags by LOFTEE.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 257,
      "name": "VEP_ensembl_LoF_flags",
      "parent_id": 243
    },
    {
      "detail": " LOF information by LOFTEE.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 258,
      "name": "VEP_ensembl_LoF_info",
      "parent_id": 243
    },
    {
      "detail": " Ensembl protein IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 259,
      "name": "VEP_ensembl_Protein_ID",
      "parent_id": 243
    },
    {
      "detail": " protein position as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 260,
      "name": "VEP_ensembl_Protein_position",
      "parent_id": 243
    },
    {
      "detail": " strand of CDS as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 261,
      "name": "VEP_ensembl_STRAND",
      "parent_id": 243
    },
    {
      "detail": " SWISSPROT IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 262,
      "name": "VEP_ensembl_SWISSPROT",
      "parent_id": 243
    },
    {
      "detail": " Ensembl transcript IDs corresponding to consequences.\t\tMultiple IDs are separated by \"|\"",
      "id": 263,
      "name": "VEP_ensembl_Transcript_ID",
      "parent_id": 243
    },
    {
      "detail": " cDNA position as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_ensembl_Transcript_ID",
      "id": 264,
      "name": "VEP_ensembl_cDNA_position",
      "parent_id": 243
    },
    {
      "detail": " VEP consequence summary with Ensembl as gene model.\t\tFormat: GeneID(total number of transcripts):consequence#1(number of transcripts affected)\t\tconsequence#2(number of transcripts affected)... Multiple genes are separated by \"|\"",
      "id": 265,
      "name": "VEP_ensembl_summary",
      "parent_id": 243
    },
    {
      "detail": " amino acid change as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID\t\t\"*\" represents a stop codon",
      "id": 266,
      "name": "VEP_refseq_Amino_Acid_Change",
      "parent_id": 243
    },
    {
      "detail": " whether a transcript is canonical.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 267,
      "name": "VEP_refseq_CANONICAL",
      "parent_id": 243
    },
    {
      "detail": " CDS position as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 268,
      "name": "VEP_refseq_CDS_position",
      "parent_id": 243
    },
    {
      "detail": " codon change or distance as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 269,
      "name": "VEP_refseq_Codon_Change_or_Distance",
      "parent_id": 243
    },
    {
      "detail": " VEP consequence with RefSeq as gene model.\t\tMultiple consequences are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 270,
      "name": "VEP_refseq_Consequence",
      "parent_id": 243
    },
    {
      "detail": " exon (intron) rank as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 271,
      "name": "VEP_refseq_Exon_or_Intron_Rank",
      "parent_id": 243
    },
    {
      "detail": " RefSeq gene IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 272,
      "name": "VEP_refseq_Gene_ID",
      "parent_id": 243
    },
    {
      "detail": " RefSeq gene names corresponding to transcripts.\t\tMultiple gene names are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 273,
      "name": "VEP_refseq_Gene_Name",
      "parent_id": 243
    },
    {
      "detail": " variant in format of HGVSc.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 274,
      "name": "VEP_refseq_HGVSc",
      "parent_id": 243
    },
    {
      "detail": " variant in format of HGVSp.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 275,
      "name": "VEP_refseq_HGVSp",
      "parent_id": 243
    },
    {
      "detail": " LOF by LOFTEE.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 276,
      "name": "VEP_refseq_LoF",
      "parent_id": 243
    },
    {
      "detail": " LOF filter by LOFTEE.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 277,
      "name": "VEP_refseq_LoF_filter",
      "parent_id": 243
    },
    {
      "detail": " LOF flags by LOFTEE.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 278,
      "name": "VEP_refseq_LoF_flags",
      "parent_id": 243
    },
    {
      "detail": " LOF information by LOFTEE.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 279,
      "name": "VEP_refseq_LoF_info",
      "parent_id": 243
    },
    {
      "detail": " RefSeq protein IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 280,
      "name": "VEP_refseq_Protein_ID",
      "parent_id": 243
    },
    {
      "detail": " protein position as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 281,
      "name": "VEP_refseq_Protein_position",
      "parent_id": 243
    },
    {
      "detail": " strand of CDS as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 282,
      "name": "VEP_refseq_STRAND",
      "parent_id": 243
    },
    {
      "detail": " RefSeq transcript IDs corresponding to consequences.\t\tMultiple IDs are separated by \"|\"",
      "id": 283,
      "name": "VEP_refseq_Transcript_ID",
      "parent_id": 243
    },
    {
      "detail": " cDNA position as to a transcript.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to VEP_refseq_Transcript_ID",
      "id": 284,
      "name": "VEP_refseq_cDNA_position",
      "parent_id": 243
    },
    {
      "detail": " VEP consequence summary with RefSeq as gene model.\t\tFormat: GeneID(total number of transcripts):consequence#1(number of transcripts affected)\t\tconsequence#2(number of transcripts affected)... Multiple genes are separated by \"|\"",
      "id": 285,
      "name": "VEP_refseq_summary",
      "parent_id": 243
    },
    {
      "detail": null,
      "id": 286,
      "name": "ANNOVAR",
      "parent_id": 0
    },
    {
      "detail": " cloest genes if the variant is intergenic.\t\tFormat: gene ID1:transcript ID1(dist=distance),gene ID2:transcript ID2(dist=distance)",
      "id": 287,
      "name": "ANNOVAR_refseq_Closest_gene(intergenic_only)",
      "parent_id": 286
    },
    {
      "detail": " ANNOVAR consequence with RefSeq as gene model.\t\tMultiple consequences are separated by \"|\"\t\tThe order corresponds to ANNOVAR_refseq_Transcript_ID",
      "id": 288,
      "name": "ANNOVAR_refseq_Effect",
      "parent_id": 286
    },
    {
      "detail": " exon number the variant locates (if applicable)\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to ANNOVAR_refseq_Transcript_ID",
      "id": 289,
      "name": "ANNOVAR_refseq_Exon_Rank",
      "parent_id": 286
    },
    {
      "detail": " RefSeq gene IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to ANNOVAR_refseq_Transcript_ID",
      "id": 290,
      "name": "ANNOVAR_refseq_Gene_ID",
      "parent_id": 286
    },
    {
      "detail": " variant in format of HGVSc.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to ANNOVAR_refseq_Transcript_ID",
      "id": 291,
      "name": "ANNOVAR_refseq_HGVSc",
      "parent_id": 286
    },
    {
      "detail": " variant in format of HGVSp.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to ANNOVAR_refseq_Transcript_ID",
      "id": 292,
      "name": "ANNOVAR_refseq_HGVSp",
      "parent_id": 286
    },
    {
      "detail": " RefSeq transcript IDs corresponding to consequences.\t\tMultiple IDs are separated by \"|\"",
      "id": 293,
      "name": "ANNOVAR_refseq_Transcript_ID",
      "parent_id": 286
    },
    {
      "detail": " ANNOVAR consequence summary with RefSeq as gene model.\t\tFormat: GeneID(total number of transcripts):consequence#1(number of transcripts affected)\t\tconsequence#2(number of transcripts affected)... Multiple genes are separated by \"|\"",
      "id": 294,
      "name": "ANNOVAR_refseq_summary",
      "parent_id": 286
    },
    {
      "detail": " cloest genes if the variant is intergenic.\t\tFormat: gene ID1:transcript ID1(dist=distance),gene ID2:transcript ID2(dist=distance)",
      "id": 295,
      "name": "ANNOVAR_ucsc_Closest_gene(intergenic_only)",
      "parent_id": 286
    },
    {
      "detail": " ANNOVAR consequence with UCSC knownGene as gene model.\t\tMultiple consequences are separated by \"|\"\t\tThe order corresponds to ANNOVAR_ucsc_Transcript_ID",
      "id": 296,
      "name": "ANNOVAR_ucsc_Effect",
      "parent_id": 286
    },
    {
      "detail": " exon number the variant locates (if applicable)\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to ANNOVAR_ucsc_Transcript_ID",
      "id": 297,
      "name": "ANNOVAR_ucsc_Exon_Rank",
      "parent_id": 286
    },
    {
      "detail": " UCSC gene IDs corresponding to transcripts.\t\tMultiple IDs are separated by \"|\"\t\tThe order corresponds to ANNOVAR_ucsc_Transcript_ID",
      "id": 298,
      "name": "ANNOVAR_ucsc_Gene_ID",
      "parent_id": 286
    },
    {
      "detail": " variant in format of HGVSc.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to ANNOVAR_ucsc_Transcript_ID",
      "id": 299,
      "name": "ANNOVAR_ucsc_HGVSc",
      "parent_id": 286
    },
    {
      "detail": " variant in format of HGVSp.\t\tMultiple annotations are separated by \"|\"\t\tThe order corresponds to ANNOVAR_ucsc_Transcript_ID",
      "id": 300,
      "name": "ANNOVAR_ucsc_HGVSp",
      "parent_id": 286
    },
    {
      "detail": " UCSC transcript IDs corresponding to consequences.\t\tMultiple IDs are separated by \"|\"",
      "id": 301,
      "name": "ANNOVAR_ucsc_Transcript_ID",
      "parent_id": 286
    },
    {
      "detail": " ANNOVAR consequence summary with UCSC as gene model.\t\tFormat: GeneID(total number of transcripts):consequence#1(number of transcripts affected)\t\tconsequence#2(number of transcripts affected)... Multiple genes are separated by \"|\"",
      "id": 302,
      "name": "ANNOVAR_ucsc_summary",
      "parent_id": 286
    },
    {
      "detail": null,
      "id": 303,
      "name": "sno",
      "parent_id": 0
    },
    {
      "detail": " the name of snoRNA or miRNA if the site is located within (from miRBase/snoRNABase)",
      "id": 304,
      "name": "sno_miRNA_name",
      "parent_id": 303
    },
    {
      "detail": " the type of snoRNA or miRNA (from miRBase/snoRNABase)",
      "id": 305,
      "name": "sno_miRNA_type",
      "parent_id": 303
    },
    {
      "detail": null,
      "id": 306,
      "name": "MutationAssessor",
      "parent_id": 0
    },
    {
      "detail": " MutationAssessor's functional impact of a variant -\t\tpredicted functional, i.e. high (\"H\") or medium (\"M\"), or predicted non-functional,\t\ti.e. low (\"L\") or neutral (\"N\"). The MAori score cutoffs between \"H\" and \"M\",\t\t\"M\" and \"L\", and \"L\" and \"N\", are 3.5, 1.935 and 0.8, respectively. The rankscore cutoffs\t\tbetween \"H\" and \"M\", \"M\" and \"L\", and \"L\" and \"N\", are 0.92924, 0.51945 and 0.19692,\t\trespectively.",
      "id": 307,
      "name": "MutationAssessor_pred",
      "parent_id": 306
    },
    {
      "detail": " MAori scores were ranked among all MAori scores in dbNSFP.\t\tThe rankscore is the ratio of the rank of the score over the total number of MAori\t\tscores in dbNSFP. The scores range from 0 to 1.",
      "id": 308,
      "name": "MutationAssessor_rankscore",
      "parent_id": 306
    },
    {
      "detail": " MutationAssessor functional impact combined score (MAori). The\t\tscore ranges from -5.135 to 6.49 in dbNSFP. Please refer to Reva et al. (2011)\t\tNucl. Acids Res. 39(17):e118 for details.",
      "id": 309,
      "name": "MutationAssessor_score",
      "parent_id": 306
    },
    {
      "detail": null,
      "id": 310,
      "name": "ESP6500",
      "parent_id": 0
    },
    {
      "detail": " Alternative allele counts in the African American samples of the\t\tNHLBI GO Exome Sequencing Project (ESP6500 data set).",
      "id": 311,
      "name": "ESP6500_AA_AC",
      "parent_id": 310
    },
    {
      "detail": " Alternative allele frequency in the African American samples of the\t\tNHLBI GO Exome Sequencing Project (ESP6500 data set).",
      "id": 312,
      "name": "ESP6500_AA_AF",
      "parent_id": 310
    },
    {
      "detail": " Alternative allele counts in the combined African/European American samples of the\t\tNHLBI GO Exome Sequencing Project (ESP6500 data set).",
      "id": 313,
      "name": "ESP6500_AC",
      "parent_id": 310
    },
    {
      "detail": " Alternative allele frequency in the combined African/European American samples of the\t\tNHLBI GO Exome Sequencing Project (ESP6500 data set).",
      "id": 314,
      "name": "ESP6500_AF",
      "parent_id": 310
    },
    {
      "detail": " Alternative allele counts in the European American samples of the\t\tNHLBI GO Exome Sequencing Project (ESP6500 data set).",
      "id": 315,
      "name": "ESP6500_EA_AC",
      "parent_id": 310
    },
    {
      "detail": " Alternative allele frequency in the European American samples of the\t\tNHLBI GO Exome Sequencing Project (ESP6500 data set).",
      "id": 316,
      "name": "ESP6500_EA_AF",
      "parent_id": 310
    },
    {
      "detail": null,
      "id": 317,
      "name": "MetaSVM",
      "parent_id": 0
    },
    {
      "detail": " Prediction of our SVM based ensemble prediction score,\"T(olerated)\" or\t\t\"D(amaging)\". The score cutoff between \"D\" and \"T\" is 0. The rankscore cutoff between\t\t\"D\" and \"T\" is 0.83357.",
      "id": 318,
      "name": "MetaSVM_pred",
      "parent_id": 317
    },
    {
      "detail": " MetaSVM scores were ranked among all MetaSVM scores in dbNSFP.\t\tThe rankscore is the ratio of the rank of the score over the total number of MetaSVM\t\tscores in dbNSFP. The scores range from 0 to 1.",
      "id": 319,
      "name": "MetaSVM_rankscore",
      "parent_id": 317
    },
    {
      "detail": " Our support vector machine (SVM) based ensemble prediction score, which\t\tincorporated 10 scores (SIFT, PolyPhen-2 HDIV, PolyPhen-2 HVAR, GERP++, MutationTaster,\t\tMutation Assessor, FATHMM, LRT, SiPhy, PhyloP) and the maximum frequency observed in\t\tthe 1000 genomes populations. Larger value means the SNV is more likely to be damaging.\t\tScores range from -2 to 3 in dbNSFP.",
      "id": 320,
      "name": "MetaSVM_score",
      "parent_id": 317
    },
    {
      "detail": null,
      "id": 321,
      "name": "Ensembl",
      "parent_id": 0
    },
    {
      "detail": " Ensembl ID for the regulatory feature",
      "id": 322,
      "name": "Ensembl_Regulatory_Build_ID",
      "parent_id": 321
    },
    {
      "detail": " TFBS from Ensembl Regulatory Build. Multiple TFBS separated by \";\"",
      "id": 323,
      "name": "Ensembl_Regulatory_Build_TFBS",
      "parent_id": 321
    },
    {
      "detail": " TF binding matrix ID",
      "id": 324,
      "name": "Ensembl_Regulatory_Build_TFBS_matrix",
      "parent_id": 321
    },
    {
      "detail": " genome segment prediction based on 68 cell types from\t\tENCODE, BLUEPRINT and Roadmap. Predicted states: CTCF_Binding_Site, Enhancer,\t\tOpen_chromatin, Promoter_Flanking_Region, TF_binding_site, Promoter",
      "id": 325,
      "name": "Ensembl_Regulatory_Build_feature_type",
      "parent_id": 321
    },
    {
      "detail": " Ensembl gene id",
      "id": 326,
      "name": "Ensembl_geneid",
      "parent_id": 321
    },
    {
      "detail": " Ensembl transcript ids (separated by \";\")",
      "id": 327,
      "name": "Ensembl_transcriptid",
      "parent_id": 321
    },
    {
      "detail": null,
      "id": 328,
      "name": "SiPhy",
      "parent_id": 0
    },
    {
      "detail": " SiPhy score based on 29 mammals genomes. The larger the score,\t\tthe more conserved the site",
      "id": 329,
      "name": "SiPhy_29way_logOdds",
      "parent_id": 328
    },
    {
      "detail": " the rank of the SiPhy_29way_logOdds score among all SiPhy_29way_logOdds scores in genome",
      "id": 330,
      "name": "SiPhy_29way_logOdds_rankscore",
      "parent_id": 328
    },
    {
      "detail": null,
      "id": 331,
      "name": "aapos",
      "parent_id": 0
    },
    {
      "detail": " ENSP id and amino acid positions corresponding to FATHMM scores.\t\tMultiple entries separated by \";\"",
      "id": 332,
      "name": "aapos_FATHMM",
      "parent_id": 331
    },
    {
      "detail": " ENSP id and amino acid positions corresponding to SIFT scores.\t\tMultiple entries separated by \";\"",
      "id": 333,
      "name": "aapos_SIFT",
      "parent_id": 331
    },
    {
      "detail": null,
      "id": 334,
      "name": "ExAC",
      "parent_id": 0
    },
    {
      "detail": " Allele count in total ExAC samples (60,706 samples)",
      "id": 335,
      "name": "ExAC_AC",
      "parent_id": 334
    },
    {
      "detail": " Allele frequency in total ExAC samples",
      "id": 336,
      "name": "ExAC_AF",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in African & African American ExAC samples",
      "id": 337,
      "name": "ExAC_AFR_AC",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in African & African American ExAC samples",
      "id": 338,
      "name": "ExAC_AFR_AF",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in American ExAC samples",
      "id": 339,
      "name": "ExAC_AMR_AC",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in American ExAC samples",
      "id": 340,
      "name": "ExAC_AMR_AF",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in total ExAC samples",
      "id": 341,
      "name": "ExAC_Adj_AC",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in total ExAC samples",
      "id": 342,
      "name": "ExAC_Adj_AF",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in East Asian ExAC samples",
      "id": 343,
      "name": "ExAC_EAS_AC",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in East Asian ExAC samples",
      "id": 344,
      "name": "ExAC_EAS_AF",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in Finnish ExAC samples",
      "id": 345,
      "name": "ExAC_FIN_AC",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in Finnish ExAC samples",
      "id": 346,
      "name": "ExAC_FIN_AF",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in Non-Finnish European ExAC samples",
      "id": 347,
      "name": "ExAC_NFE_AC",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in Non-Finnish European ExAC samples",
      "id": 348,
      "name": "ExAC_NFE_AF",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in South Asian ExAC samples",
      "id": 349,
      "name": "ExAC_SAS_AC",
      "parent_id": 334
    },
    {
      "detail": " Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in South Asian ExAC samples",
      "id": 350,
      "name": "ExAC_SAS_AF",
      "parent_id": 334
    },
    {
      "detail": null,
      "id": 351,
      "name": "Polyphen2",
      "parent_id": 0
    },
    {
      "detail": " Polyphen2 prediction based on HumDiv, \"D\" (\"probably damaging\",\t\tHDIV score in [0.957,1] or rankscore in [0.52996,0.89917]), \"P\" (\"possibly damaging\",\t\tHDIV score in [0.453,0.956] or rankscore in [0.34412,0.52842]) and \"B\" (\"benign\",\t\tHDIV score in [0,0.452] or rankscore in [0.02656,0.34399]). Score cutoff for binary\t\tclassification is 0.5 for HDIV score or 0.35411 for rankscore, i.e. the prediction is\t\t\"neutral\" if the HDIV score is smaller than 0.5 (rankscore is smaller than 0.35411),\t\tand \"deleterious\" if the HDIV score is larger than 0.5 (rankscore is larger than\t\t0.35411). Multiple entries are separated by \";\".",
      "id": 352,
      "name": "Polyphen2_HDIV_pred",
      "parent_id": 351
    },
    {
      "detail": " Polyphen2 HDIV scores were first ranked among all HDIV scores\t\tin dbNSFP. The rankscore is the ratio of the rank the score over the total number of\t\tthe scores in dbNSFP. If there are multiple scores, only the most damaging (largest)\t\trankscore is presented. The scores range from 0.02656 to 0.89917.",
      "id": 353,
      "name": "Polyphen2_HDIV_rankscore",
      "parent_id": 351
    },
    {
      "detail": " Polyphen2 score based on HumDiv, i.e. hdiv_prob.\t\tThe score ranges from 0 to 1. Multiple entries separated by \";\".",
      "id": 354,
      "name": "Polyphen2_HDIV_score",
      "parent_id": 351
    },
    {
      "detail": " Polyphen2 prediction based on HumVar, \"D\" (\"probably damaging\",\t\tHVAR score in [0.909,1] or rankscore in [0.62955,0.9711]), \"P\" (\"possibly damaging\",\t\tHVAR in [0.447,0.908] or rankscore in [0.44359,0.62885]) and \"B\" (\"benign\", HVAR\t\tscore in [0,0.446] or rankscore in [0.01281,0.44315]). Score cutoff for binary\t\tclassification is 0.5 for HVAR score or 0.45998 for rankscore, i.e. the prediction\t\tis \"neutral\" if the HVAR score is smaller than 0.5 (rankscore is smaller than\t\t0.45998), and \"deleterious\" if the HVAR score is larger than 0.5 (rankscore is larger\t\tthan 0.45998). Multiple entries are separated by \";\".",
      "id": 355,
      "name": "Polyphen2_HVAR_pred",
      "parent_id": 351
    },
    {
      "detail": " Polyphen2 HVAR scores were first ranked among all HVAR scores\t\tin dbNSFP. The rankscore is the ratio of the rank the score over the total number of\t\tthe scores in dbNSFP. If there are multiple scores, only the most damaging (largest)\t\trankscore is presented. The scores range from 0.01281 to 0.9711.",
      "id": 356,
      "name": "Polyphen2_HVAR_rankscore",
      "parent_id": 351
    },
    {
      "detail": " Polyphen2 score based on HumVar, i.e. hvar_prob.\t\tThe score ranges from 0 to 1. Multiple entries separated by \";\".",
      "id": 357,
      "name": "Polyphen2_HVAR_score",
      "parent_id": 351
    },
    {
      "detail": null,
      "id": 358,
      "name": "MutationTaster",
      "parent_id": 0
    },
    {
      "detail": " The MTori scores were first converted. If the prediction\t\tis \"A\" or \"D\" MTnew=MTori; if the prediction is \"N\" or \"P\", MTnew=1-MTori. Then MTnew\t\tscores were ranked among all MTnew scores in dbNSFP. The rankscore is the ratio of the\t\trank of the score over the total number of MTnew scores in dbNSFP. The scores range\t\tfrom 0.09067 to 0.80722.",
      "id": 359,
      "name": "MutationTaster_converted_rankscore",
      "parent_id": 358
    },
    {
      "detail": " MutationTaster prediction, \"A\" (\"disease_causing_automatic\"),\t\t\"D\" (\"disease_causing\"), \"N\" (\"polymorphism\") or \"P\" (\"polymorphism_automatic\"). The\t\tscore cutoff between \"D\" and \"N\" is 0.5 for MTori and 0.31655 for the rankscore.",
      "id": 360,
      "name": "MutationTaster_pred",
      "parent_id": 358
    },
    {
      "detail": " MutationTaster p-value (MTori), ranges from 0 to 1.",
      "id": 361,
      "name": "MutationTaster_score",
      "parent_id": 358
    },
    {
      "detail": null,
      "id": 362,
      "name": "LRT",
      "parent_id": 0
    },
    {
      "detail": " LRTori scores were first converted as LRTnew=1-LRTori*0.5 if\t\tOmega<1, or LRTnew=LRTori*0.5 if Omega>=1. Then LRTnew scores were ranked among all\t\tLRTnew scores in dbNSFP. The rankscore is the ratio of the rank over the total number\t\tof the scores in dbNSFP. The scores range from 0.00166 to 0.85682.",
      "id": 363,
      "name": "LRT_converted_rankscore",
      "parent_id": 362
    },
    {
      "detail": " LRT prediction, D(eleterious), N(eutral) or U(nknown), which is not solely\t\tdetermined by the score.",
      "id": 364,
      "name": "LRT_pred",
      "parent_id": 362
    },
    {
      "detail": " The original LRT two-sided p-value (LRTori), ranges from 0 to 1.",
      "id": 365,
      "name": "LRT_score",
      "parent_id": 362
    },
    {
      "detail": null,
      "id": 366,
      "name": "ENCODE",
      "parent_id": 0
    },
    {
      "detail": " number of cell lines supporting a DNase I hypersensitive site",
      "id": 367,
      "name": "ENCODE_Dnase_cells",
      "parent_id": 366
    },
    {
      "detail": " the higher the score the stronger the evidence of a DNase I\t\thypersensitive site",
      "id": 368,
      "name": "ENCODE_Dnase_score",
      "parent_id": 366
    },
    {
      "detail": " name of the transcription factors (separated by ;) if the site is within a TFBS",
      "id": 369,
      "name": "ENCODE_TFBS",
      "parent_id": 366
    },
    {
      "detail": " the cell lines (separated by ;) the TFBS was detected",
      "id": 370,
      "name": "ENCODE_TFBS_cells",
      "parent_id": 366
    },
    {
      "detail": " the higher the score the stronger the evidence of the TFBS",
      "id": 371,
      "name": "ENCODE_TFBS_score",
      "parent_id": 366
    },
    {
      "detail": " whether annotated by ENCODE based on funseq-0.1",
      "id": 372,
      "name": "ENCODE_annotated",
      "parent_id": 366
    },
    {
      "detail": null,
      "id": 373,
      "name": "TWINSUK",
      "parent_id": 0
    },
    {
      "detail": " Alternative allele count in called genotypes in UK10K TWINSUK cohort.",
      "id": 374,
      "name": "TWINSUK_AC",
      "parent_id": 373
    },
    {
      "detail": " Alternative allele frequency in called genotypes in UK10K TWINSUK cohort.",
      "id": 375,
      "name": "TWINSUK_AF",
      "parent_id": 373
    },
    {
      "detail": " Total allele count in called genotypes in UK10K TWINSUK cohort.",
      "id": 376,
      "name": "TWINSUK_AN",
      "parent_id": 373
    }
  ]
}