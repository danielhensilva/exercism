export class DiffieHellman {
  constructor(p, g) {
    if (!isPrime(p) || !isPrime(g)) {
      throw new Error('p and g must be prime numbers');
    }
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('Private key must be greater than 1 and less than p');
    }
    return (this.g ** privateKey) % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey ** myPrivateKey) % this.p;
  }

  static getPrivateKey(p) {
    return Math.floor(Math.random() * (p - 2)) + 2;
  }
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 6; i < (n / 2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
