import calendar
from datetime import date


class MeetupDayException(Exception):
    def __init__(self, message):
        super(MeetupDayException, self).__init__(message)


def weekday_name_to_number(name):
    for i, n in enumerate(calendar.day_name):
        if n == name:
            return i


def meetup_day_by_range(year, month, days, weekday_number, times=1):
    counter = 1
    for day in days:
        d = date(year, month, day)
        if d.weekday() == weekday_number:
            if times == counter:
                return d
            counter += 1


def meetup_day(year, month, weekday_name, which):
    weekday_number = weekday_name_to_number(weekday_name)

    if which == 'teenth':
        days = range(13, 20)
        return meetup_day_by_range(year, month, days, weekday_number)

    last_day = calendar.monthrange(year, month)[1]
    days = range(1, last_day + 1)

    if which == 'last':
        days = reversed(days)
        return meetup_day_by_range(year, month, days, weekday_number)

    if which == '1st':
        times = 1
    elif which == '2nd':
        times = 2
    elif which == '3rd':
        times = 3
    elif which == '4th':
        times = 4
    elif which == '5th':
        times = 5
    else:
        raise MeetupDayException('Unexpected \"which\" value')

    result = meetup_day_by_range(year, month, days, weekday_number, times)

    if result is None:
        raise MeetupDayException('Cannot find a suitable day')

    return result
