using System;
using System.Collections.Generic;
using System.Linq;

public class SaddlePoints
{
    private int[,] values;

    public SaddlePoints(int[,] values)
    {
        this.values = values;
    }

    public IEnumerable<Tuple<int, int>> Calculate()
    {
        var query =
            from saddleRow in this.CalculateSaddleRows().ToArray()
            from saddleColumn in this.CalculateSaddleColumns().ToArray()
            where saddleRow.Item1 == saddleColumn.Item1
                && saddleRow.Item2 == saddleColumn.Item2
            select saddleRow;

        return query.ToArray();
    }

    private IEnumerable<Tuple<int, int>> CalculateSaddleRows()
    {
        for (var row = 0; row < this.values.GetLength(0); row++)
        {
            int higher = this.GetHigherValueFromRow(row);

            for (var col = 0; col < this.values.GetLength(1); col++)
                if (higher == this.values[row, col])
                    yield return Tuple.Create(row, col);
        }
    }

    private IEnumerable<Tuple<int, int>> CalculateSaddleColumns()
    {
        for (var col = 0; col < this.values.GetLength(1); col++)
        {
            int lower = this.GetLowerValueFromColumn(col);

            for (var row = 0; row < this.values.GetLength(0); row++)
                if (lower == this.values[row, col])
                    yield return Tuple.Create(row, col);
        }
    }

    private int GetHigherValueFromRow(int row)
    {
        var higher = this.values[row, 0];

        for (var col = 1; col < this.values.GetLength(1); col++)
            if (higher < this.values[row, col])
                higher = this.values[row, col];
        
        return higher;
    }

    private int GetLowerValueFromColumn(int col)
    {
        var lower = this.values[0, col];

        for (var row = 1; row < this.values.GetLength(0); row++)
            if (lower > this.values[row, col])
                lower = this.values[row, col];
        
        return lower;
    }
}