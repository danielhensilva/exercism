using System;

public struct Clock
{
    private const int Day = 24 * 60;

    private int minutes;

    public Clock(int hours, int minutes)
    {
        this.minutes = minutes + (hours * 60);

        while (this.minutes < 0)
            this.minutes += Day;

        this.minutes %= Day;
    }

    public int Hours
    {
        get => this.minutes / 60;
    }

    public int Minutes
    {
        get => this.minutes % 60;
    }

    public Clock Add(int minutesToAdd)
    {
        return new Clock(0, this.minutes + minutesToAdd);
    }

    public Clock Subtract(int minutesToSubtract)
    {        
        return new Clock(0, this.minutes - minutesToSubtract);
    }

    public override string ToString()
    {
        return $"{this.Hours:00}:{this.Minutes:00}";
    }
}