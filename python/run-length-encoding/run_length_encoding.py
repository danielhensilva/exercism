def decode(string):
    if len(string) == 0:
        return string

    decoded = ''
    count = ''

    for char in string:
        if char.isdigit():
            count += char
            continue

        if count == '':
            decoded += char
            continue

        for i in range(0, int(count)):
            decoded += char

        count = ''

    return decoded


def encode(string):
    if len(string) == 0:
        return string

    encoded = ''
    count = 1
    last_char = string[0]

    for char in string[1:]:
        if char == last_char:
            count += 1
            continue

        if count == 1:
            encoded += last_char
            last_char = char
            continue

        encoded += str(count) + last_char
        last_char = char
        count = 1

    if count == 1:
        return encoded + last_char

    return encoded + str(count) + last_char
