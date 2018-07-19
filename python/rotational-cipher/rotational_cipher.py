def rotate(text, key):

    if text is None or len(text) == 0:
        raise Exception('Invalid text')

    if key < 0 or key > 26:
        raise Exception('Invalid key')

    cipher = ''

    for char in list(text):

        if not char.isalpha():
            cipher += char
            continue

        if char.istitle():
            base = 65
        else:
            base = 97

        val = ord(char) - base
        val += key
        val %= 26
        char = chr(val + base)
        cipher += char

    return cipher
