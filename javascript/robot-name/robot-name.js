export class Robot {

  get name() {
    return this._name;
  }

  set name(value) {
    throw new Error('Cannot change name');
  }

  constructor() {
    this._name = '';
    this.reset();
  }

  reset() {
    this._name = generateUniqueName();
    usedNames.push(this._name);
  }


}

const minLetterCode = 'A'.charCodeAt(0);
const maxLetterCode = 'Z'.charCodeAt(0);

function pickLetter() {
  const random = Math.random() * (maxLetterCode - minLetterCode);
  const code = Math.floor(random) + minLetterCode;
  return String.fromCharCode(code);
}

function pickNumber() {
  return Math.floor(Math.random() * 9);
}

function pickName() {
  return [
    pickLetter(),
    pickLetter(),
    pickNumber(),
    pickNumber(),
    pickNumber()
  ].join('');
}

function isDuplicated(name) {
  return usedNames.indexOf(name) >= 0;
}

function generateUniqueName() {
  let name = pickName();
  while (isDuplicated(name)) {
    name = pickName();
  }
  return name;
}

let usedNames = [];