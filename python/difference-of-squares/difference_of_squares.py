from functools import reduce


def square_of_sum(count):
    return pow(
        reduce(
            lambda memo, i: memo + i,
            range(1, count + 1),
            0),
        2)


def sum_of_squares(count):
    return reduce(
        lambda memo, i: memo + pow(i, 2),
        range(1, count + 1),
        0)


def difference(count):
    return square_of_sum(count) - sum_of_squares(count)
