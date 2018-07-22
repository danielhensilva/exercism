def rotate(char):
    if char.isdigit():
        return char
    a_val = ord('a')
    z_val = ord('z')
    val = ord(char.lower())
    return chr(z_val - val + a_val)


def encode(plain_text):
    cipher = ''

    for i, c in enumerate(plain_text):
        if not c.isalpha():
            continue
        cipher += rotate(c)
        if len(cipher) % 5 != 0:
            continue
        if i == len(plain_text):
            continue
        cipher += ' '

    return cipher


def decode(ciphered_text):
    plain = ''

    for c in ciphered_text:
        if c != ' ':
            plain += rotate(c)

    return plain
