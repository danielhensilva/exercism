from __future__ import division

from math import gcd

class Rational(object):
    def __init__(self, numer, denom):
        if numer == 0:
            self.numer = 0
            self.denom = 1
            return

        div = gcd(abs(numer), abs(denom))
        self.numer = numer // div
        self.denom = denom // div

        if self.denom < 0:
            self.numer *= -1
            self.denom *= -1

    def __eq__(self, other):
        return self.numer == other.numer and self.denom == other.denom

    def __repr__(self):
        return '{}/{}'.format(self.numer, self.denom)

    def __add__(self, other):
        return Rational(self.numer * other.denom + other.numer * self.denom, self.denom * other.denom)

    def __sub__(self, other):
        return Rational(self.numer * other.denom - other.numer * self.denom, self.denom * other.denom)

    def __mul__(self, other):
        return Rational(self.numer * other.numer, self.denom * other.denom)

    def __truediv__(self, other):
        return Rational(self.numer * other.denom, self.denom * other.numer)

    def __abs__(self):
        return Rational(abs(self.numer), abs(self.denom))

    def __pow__(self, power):
        if power > 0:
            return Rational(self.numer ** power, self.denom ** power)
        else:
            power = abs(power)
            return Rational(self.denom ** power, self.numer ** power)

    def __rpow__(self, base):
        return base ** (self.numer / self.denom)

