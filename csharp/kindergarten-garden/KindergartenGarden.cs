using System;
using System.Linq;
using System.Collections.Generic;

public enum Plant
{
    Violets = 'V',
    Radishes = 'R',
    Clover = 'C',
    Grass = 'G'
}

public enum Kid
{
    Alice = 0,
    Bob = 1,
    Charlie = 2,
    David = 3,
    Eve = 4,
    Fred = 5,
    Ginny = 6,
    Harriet = 7,
    Ileana = 8,
    Joseph = 9,
    Kincaid = 10,
    Larry = 11
}

public class KindergartenGarden
{    
    private string firstRow;

    private string secondRow;

    public KindergartenGarden(string diagram)
    {
        var rows = diagram.Split('\n');
        this.firstRow = rows[0];
        this.secondRow = rows[1];
    }

    public IEnumerable<Plant> Plants(string student)
    {
        return this.PlantsFromStudentIndex(
            (int) Enum.Parse(typeof(Kid), student)
        );
    }

    private IEnumerable<Plant> PlantsFromStudentIndex(int index)
    {
        var left = index * 2;
        var right = left + 1;

        return this.PlantsFromChars(
            this.firstRow[left],
            this.firstRow[right],
            this.secondRow[left],
            this.secondRow[right]
        );
    }

    private IEnumerable<Plant> PlantsFromChars(params char[] chars)
    {
        return
            from c in chars
            select (Plant) c;
    }
}