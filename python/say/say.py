names = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    # 14-19
    20: 'twenty',
    # 21-29
}


def say(number):
    if number < 0 or number >= 1e12:
        raise ValueError('Invalid')
    if number in names:
        return names[number]
    if number >= 14 and number <= 19:
        return names[number-10] + 'teen'
    if number >= 21 and number <= 29:
        return names[20] + '-' + names[number-20]