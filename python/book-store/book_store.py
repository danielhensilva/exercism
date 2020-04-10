def total(basket):
    values = []
    limit = len(set(basket))
    basket.sort()
    for i in range(1, limit + 1):
        basket_copy = basket[:]
        groups = extract_groups(basket_copy, i)
        value = calculate_value(groups)
        values.append(value)
    return min(values) if len(values) > 0 else 0


def calculate_discount(quantity):
    if quantity == 5:
        return 0.25
    if quantity == 4:
        return 0.20
    if quantity == 3:
        return 0.10
    if quantity == 2:
        return 0.05
    return 0


def extract_group(basket, quantity):
    group = []
    index = 0
    while len(basket) > 0 and len(basket) > index and len(group) < quantity:
        if basket[index] in group:
            index += 1
            continue
        basket_item = basket.pop(index)
        group.append(basket_item)
    return group


def extract_groups(basket, quantity):
    groups = []
    while len(basket) > 0:
        group = extract_group(basket, quantity)
        groups.append(group)
    return groups


def calculate_value(groups):
    value = 0
    for group in groups:
        group_length = len(group)
        group_discount = calculate_discount(group_length)
        value += 800 * group_length * (1 - group_discount)
    return value

