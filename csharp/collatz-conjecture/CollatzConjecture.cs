using System;

public static class CollatzConjecture
{
    public static int Steps(int number)
    {
        if (number <= 0)
            throw new ArgumentException();

        if (number == 1)
            return 0;

        if (number % 2 == 0)
            return 1 + CollatzConjecture.Steps(number / 2);

        else
            return 1 + CollatzConjecture.Steps(3 * number + 1); 
    }
}