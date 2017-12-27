using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

public static class Raindrops
{
    public static string Convert(int number)
    {
        var sounds = Raindrops.GetSounds(number).ToArray();

        if (sounds.Count() == 0)
            return number.ToString();

        return string.Join(string.Empty, sounds);
    }

    private static IEnumerable<string> GetSounds(int number)
    {
        if (number % 3 == 0)
            yield return "Pling";

        if (number % 5 == 0)
            yield return "Plang";

        if (number % 7 == 0)
            yield return "Plong";

        yield break;
    }
}