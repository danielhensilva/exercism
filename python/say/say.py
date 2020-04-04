dict = {
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
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    1e2: 'hundred',
    1e3: 'thousand',
    1e6: 'million',
    1e9: 'billion',
}


def say(number):
    if number < 0:
        raise ValueError('Cannot handle negative numbers')
    if number >= 1e12:
        raise ValueError('Cannot handle number too big')
    if 0 <= number <= 20:
        return dict.get(number)
    if 21 <= number <= 99:
        return dict.get((number // 10) * 10) + '-' + dict.get(number % 10)
    if 1e2 <= number < 1e3:
        return say(number // 1e2) + ' ' + dict.get(1e2) + say_remain(number, 1e2)
    if 1e3 <= number < 1e6:
        return say(number // 1e3) + ' ' + dict.get(1e3) + say_remain(number, 1e3)
    if 1e6 <= number < 1e9:
        return say(number // 1e6) + ' ' + dict.get(1e6) + say_remain(number, 1e6)
    if 1e9 <= number < 1e12:
        return say(number // 1e9) + ' ' + dict.get(1e9) + say_remain(number, 1e9)


def say_remain(number, cut):
    if number % cut == 0:
        return ''
    if number % cut < 1e2:
        return ' and ' + say(number % cut)
    return ' ' + say(number % cut)
