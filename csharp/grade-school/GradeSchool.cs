using System;
using System.Linq;
using System.Collections.Generic;

public class School
{
    public School()
    {
        this.studentGrades = new Dictionary<string, int>();
    }

    private Dictionary<string, int> studentGrades;

    public void Add(string student, int grade)
    {
        this.studentGrades.Add(student, grade);
    }

    public IEnumerable<string> Roster()
    {
        return
            from pair in this.studentGrades
            orderby pair.Value, pair.Key
            select pair.Key;
    }

    public IEnumerable<string> Grade(int grade)
    {
        return
            from pair in this.studentGrades
            where pair.Value == grade
            orderby pair.Key
            select pair.Key;
    }
}