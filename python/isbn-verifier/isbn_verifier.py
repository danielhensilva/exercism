def is_valid(isbn):
    total = 0
    index = 10

    for char in isbn:
        if char == '-':
            continue
        if char == 'X' and index == 1:
            total += 10
            index -= 1
            continue
        if char.isdigit():
            total += int(char) * index
            index -= 1
            continue
        return False

    return index == 0 and total % 11 == 0