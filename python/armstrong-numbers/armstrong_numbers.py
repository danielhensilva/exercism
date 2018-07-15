import math


def is_armstrong(number):
    result = 0
    expected = number
    power = math.floor(math.log10(number) + 1)

    while number > 0:
        digit = number % 10
        number -= digit
        number /= 10
        result += pow(digit, power)

    return result == expected

