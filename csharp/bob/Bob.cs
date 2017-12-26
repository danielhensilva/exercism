using System;
using System.Text.RegularExpressions;

public static class Bob
{
    public static string Hey(string statement)
    {
        statement = statement.Trim();

        if (IsNothing(statement))
            return "Fine. Be that way!";

        if (IsYelling(statement))
            return "Whoa, chill out!";

        if (isQuestion(statement))
            return "Sure.";

        return "Whatever.";

    }

    private static bool IsYelling(string statement)
    {
        if (!new Regex("[a-zA-Z]").IsMatch(statement))
            return false;

        if (statement != statement.ToUpper())
            return false;

        return true;
    }

    private static bool isQuestion(string statement)
    {
        return statement.EndsWith("?");
    }

    private static bool IsNothing(string statement)
    {
        return statement?.Length == 0;
    }
}