class Allergies(object):

    score = 0

    allergies = [
        'eggs',
        'peanuts',
        'shellfish',
        'strawberries',
        'tomatoes',
        'chocolate',
        'pollen',
        'cats'
    ]

    def __init__(self, score):
        self.score = score

    def is_allergic_to(self, item):
        return item in self.lst

    @property
    def lst(self):
        match = []

        for index, allergy in enumerate(self.allergies):
            index += 1
            value = pow(2, index) // 2
            if self.score & value == value:
                match.append(allergy)

        return match