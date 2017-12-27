using System;
using System.Linq;
using System.Collections.Generic;

public static class SumOfMultiples
{
    public static int Sum(IEnumerable<int> multiples, int max)
    {
        return Enumerable
            .Range(1, max-1)
            .Where(iterator => 
                multiples.Any(multiple => iterator % multiple == 0)
            )
            .Sum();
    }
}