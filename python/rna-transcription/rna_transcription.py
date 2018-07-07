def convert(nucleotide):
    if nucleotide == 'G':
        return 'C'
    if nucleotide == 'C':
        return 'G'
    if nucleotide == 'T':
        return 'A'
    if nucleotide == 'A': return 'U'


def to_rna(dna_strand):
    return ''.join(map(convert, dna_strand))


