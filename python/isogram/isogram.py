def is_isogram(string):
    for i in range(0, len(string)):
        if string[i] == '-':
            continue
        if string[i] == ' ':
            continue
        for j in range(0, i):
            if string[i].upper() == string[j].upper():
                return False
    return True
