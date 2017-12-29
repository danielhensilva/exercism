using System;
using System.Linq;
using System.Collections.Generic;

[Flags]
public enum AllergyTypes
{
    Eggs = 1,
    Peanuts = 2,
    Shellfish = 4,
    Strawberries = 8,
    Tomatoes = 16,
    Chocolate = 32,
    Pollen = 64,
    Cats = 128,
} 

public class Allergies
{
    private AllergyTypes types;

    public Allergies(int mask)
    {
        this.types = (AllergyTypes)mask;
    }

    public bool IsAllergicTo(string allergy)
    {
        var type = (AllergyTypes)Enum.Parse(typeof(AllergyTypes), allergy, ignoreCase: true);
        return (this.types & type) > 0;
    }

    public IList<string> List()
    {
        var query =
            from name in Enum.GetNames(typeof(AllergyTypes))
            where this.IsAllergicTo(name)
            select name.ToLowerInvariant();

        return query.ToList();
    }
}