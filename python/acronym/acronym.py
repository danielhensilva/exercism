import re


def abbreviate(words):
    regex = r'\b(\w+?)'
    matches = re.findall(regex, words)
    acronym = ''.join(matches).upper()
    return acronym
