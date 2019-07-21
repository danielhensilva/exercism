export const score = word => {
  return word
    .toUpperCase()
    .split('')
    .map(scoreLetter)
    .reduce((prev, value) => prev + value, 0);
};

const scoreLetter = letter => {
  for (const key in LETTERS_SCORES) {
    if (key.includes(letter)) {
      return LETTERS_SCORES[key];
    }
  }
}

const LETTERS_SCORES = {
  "AEIOULNRST": 1,
  "DG": 2,
  "BCMP": 3,
  "FHVWY": 4,
  "K": 5,
  "JX": 8,
  "QZ": 10,
}