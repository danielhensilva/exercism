using System;
using System.Linq;
using System.Collections.Generic;

public static class ArmstrongNumbers
{
    public static bool IsArmstrongNumber(int number)
    {
        var decompose = number;
        var length = 0;

        while (decompose > 0)
        {
            decompose = decompose / 10;
            length++;
        }

        var sum = 0d;
        decompose = number;

        while (decompose > 0)
        {
            var digit = decompose % 10;
            sum += Math.Pow(digit, length);
            decompose = decompose / 10;
        }

        return number == sum;
    }
}