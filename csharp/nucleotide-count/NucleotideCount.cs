using System;
using System.Linq;
using System.Collections.Generic;

public class NucleotideCount
{
    private static readonly char[] validNucleotides = new[] { 'A', 'C', 'G', 'T' };

    public NucleotideCount(string sequence)
    {
        var counter = new Dictionary<char, int>();

        foreach (var validNucleotide in validNucleotides) 
        {
            counter[validNucleotide] = 0;
        }

        var nucleotides = sequence.ToCharArray();

        foreach (var nucleotide in nucleotides)
        {
            if (validNucleotides.Any(x => x == nucleotide))
            {
                counter[nucleotide]++;
            }
            else
            {
                throw new InvalidNucleotideException();
            }
        }

        this.NucleotideCounts = counter;
    }

    public IDictionary<char, int> NucleotideCounts { get; private set; }
}

public class InvalidNucleotideException : Exception { }
