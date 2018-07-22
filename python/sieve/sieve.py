def sieve(limit):
    primes = list(range(2, limit+1))
    for prime in primes:
        for non_prime in range(prime+prime, limit+1, prime):
            if non_prime in primes:
                primes.remove(non_prime)
    return primes
