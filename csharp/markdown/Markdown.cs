using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Text.RegularExpressions;

public static class Markdown
{
    public static string Parse(string markdown)
    {
        markdown = ParseSingleLine(markdown);
        markdown = ParseMultiline(markdown);
        return markdown;
    }

    private static string ParseSingleLine(string markdown)
    {
        var output = "";
        var lines = markdown.Split("\n");

        foreach (var line in lines)
            output += ApplyPatterns(line, SingleLineTagPatterns);

        return output;
    }

    private static string ParseMultiline(string markdown)
    {
        return ApplyPatterns(markdown, MultilineTagPatterns);
    }

    private static string ApplyPatterns(string markdown, NameValueCollection collection)
    {
        collection.ForEach((tag, pattern) =>
            markdown = ApplyPattern(markdown, tag, pattern)
        );
        return markdown;
    }

    private static string ApplyPattern(string markdown, string tag, string pattern)
    {
        var regex = new Regex(pattern);
        var matches = regex.Matches(markdown);

        foreach (Match match in matches) 
        {
            var oldSection = match.Value;
            var newSection = match.Groups[1].Value.ToTag(tag);
            markdown = markdown.Replace(oldSection, newSection);
        }

        return markdown;
    }

    private static NameValueCollection SingleLineTagPatterns = new NameValueCollection
    {
        { "strong", "__(.+?)__" },
        { "em", "_(.+?)_" },
        { "p", "^([^*#].+)$"},
        { "li", "^\\* (.+)$" },
        { "h1", "^# (.+)$" },
        { "h2", "^## (.+)$" },
        { "h3", "^### (.+)$" },
        { "h4", "^#### (.+)$" },
        { "h5", "^##### (.+)$" },
        { "h6", "^###### (.+)$" },
    };

    private static NameValueCollection MultilineTagPatterns = new NameValueCollection
    {
        { "ul", "(<li>.+</li>)" }
    };

    private static string ToTag(this string value, string tag) 
    {
        return $"<{tag}>{value}</{tag}>";
    }

    private static void ForEach(this NameValueCollection collection, Action<string, string> action)
    {
        foreach (string name in collection)
        {
            string value = collection[name];
            action(name, value);
        }
    }
}