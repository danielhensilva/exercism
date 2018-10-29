from __future__ import division


class Rational(object):
    def __init__(self, numer, denom):
        self.numer = numer
        self.denom = denom
        self._normalize_negatives()
        self._reduce_to_lowest_terms()

    def __eq__(self, other):
        return self.numer == other.numer and self.denom == other.denom

    def __repr__(self):
        return '{}/{}'.format(self.numer, self.denom)

    def __add__(self, other):
        numer = self.numer * other.denom + other.numer * self.denom
        denom = self.denom * other.denom
        return Rational(numer, denom)

    def __sub__(self, other):
        numer = self.numer * other.denom - other.numer * self.denom
        denom = self.denom * other.denom
        return Rational(numer, denom)

    def __mul__(self, other):
        numer = self.numer * other.numer
        denom = self.denom * other.denom
        return Rational(numer, denom)

    def __truediv__(self, other):
        numer = self.numer * other.denom
        denom = self.denom * other.numer
        return Rational(numer, denom)

    def __abs__(self):
        numer = abs(self.numer)
        denom = abs(self.denom)
        return Rational(numer, denom)

    def __pow__(self, power):
        power = abs(power)
        numer = self.numer ** power
        denom = self.denom ** power
        return Rational(numer, denom)

    def __rpow__(self, base):
        return (base ** self.numer) ** (1 / self.denom)

    def _normalize_negatives(self):
        if self.denom < 0:
            self.denom *= -1
            self.numer *= -1

    def _reduce_to_lowest_terms(self):
        if self.numer == 0:
            self.numer = 0
            self.denom = 1
            return

        gcd = self._greatest_common_divisor()
        self.numer //= gcd
        self.denom //= gcd
        
    def _greatest_common_divisor(self):
        first = 2
        last = 1 + min(abs(self.numer), abs(self.denom))
        for i in reversed(range(first, last)):
            if self.numer % i == 0 and self.denom % i == 0:
                return i
        return 1
