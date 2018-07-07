def is_pangram(sentence):
    sentence = sentence.lower()
    char_codes = list(range(ord('a'), ord('z')))
    for char_code in char_codes:
        char = chr(char_code)
        if char not in sentence:
            return False
    return True

