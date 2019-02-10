export class Cipher {

  constructor(key) {
    this.key = validate(key) || generateKey();
  }

  encode(phrase) {
    const output = [];

    for (let i = 0; i < phrase.length; i++) {
      output.push(cipher(
        phrase.charAt(i),
        this.key.charAt(i % this.key.length),
      ));
    }

    return output.join('');
  }

  decode(phrase) {
    const output = [];

    for (let i = 0; i < phrase.length; i++) {
      output.push(decipher(
        phrase.charAt(i),
        this.key.charAt(i % this.key.length),
      ));
    }

    return output.join('');
  }

}

const first = 'a'.charCodeAt(0);
const last = 'z'.charCodeAt(0);
const size = last - first + 1;

function pickLetter() {
  const random = Math.random() * (last - first);
  const code = Math.floor(random) + first;
  return String.fromCharCode(code);
}

function generateKey() {
  const key = [];
  for (let i = 0; i < 100; i++) {
    key.push(pickLetter());
  }
  return key.join('');
}

function isValidKey(key) {
  return /^[a-z]+$/.test(key);
}

function validate(key) {
  if (key == null) {
    return null;
  }
  if (isValidKey(key)) {
    return key;
  }
  throw new Error('Bad key');
}

function cipher(letter, keyChar) {
  const distLetter = letter.charCodeAt(0) - first;
  const distKey = keyChar.charCodeAt(0) - first;
  const ciphered = (distLetter + distKey) % size;
  return String.fromCharCode(ciphered + first);
}

function decipher(ciphered, keyChar) {
  const distCiphered = ciphered.charCodeAt(0) - first;
  const distKey = keyChar.charCodeAt(0) - first;
  let letterCode = distCiphered - distKey;
  if (letterCode < 0) {
    letterCode += size;
  }
  return String.fromCharCode(letterCode + first);
}

