def rotate(char):
    if char.isdigit():
        return char
    a_val = ord('a')
    z_val = ord('z')
    val = ord(char.lower())
    return chr(z_val - val + a_val)


def encode(plain_text):
    length = 0
    cipher = ''

    for _, c in enumerate(plain_text):
        if not c.isalnum():
            continue
        
        length += 1
        cipher += rotate(c)
        
        if length % 5 == 0:
            cipher += ' '

    return cipher.strip()


def decode(ciphered_text):
    plain = ''

    for c in ciphered_text:
        if c != ' ':
            plain += rotate(c)

    return plain
