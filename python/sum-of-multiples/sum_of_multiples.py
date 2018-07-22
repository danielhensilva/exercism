def sum_of_multiples(limit, multiples):
    total = 0
    for n in range(1, limit):
        for m in multiples:
            if n % m == 0:
                total += n
                break
    return total
