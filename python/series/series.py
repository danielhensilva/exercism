def slices(series, length):
    if length <= 0:
        raise ValueError("Length cannot be lower than or equals zero")

    len_series = len(series)

    if length > len_series:
        raise ValueError('Length cannot be higher than series length')

    array = []

    for index in range(0, len_series):
        if index + length <= len_series:
            array.append(series[index:length+index])

    return array
