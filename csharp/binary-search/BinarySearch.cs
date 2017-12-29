using System;

public class BinarySearch
{
    private int[] input;

    public BinarySearch(int[] input)
    {
        this.input = input;
    }

    public int Find(int value)
    {
        var lower = 0;        
        var upper = this.input.Length - 1;

        while (lower <= upper) 
        {
            var i = (upper + lower) / 2;

            if (value == this.input[i])
                return i;

            if (value < this.input[i])
                upper = i - 1;
            else
                lower = i + 1;
        }

        return -1;
    }
}