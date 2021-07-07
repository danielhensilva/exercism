export class Crypto {

  constructor(text) {
    this.text = text;
  }

  get ciphertext() {
    let normalized = this.text
      .replace(/[^a-zA-Z0-9]/gi, '')
      .toLowerCase();

    if (normalized.length <= 1) {
      return normalized;
    }

    const sqrt = Math.sqrt(normalized.length);
    let rows = Math.floor(sqrt);
    let columns = Math.ceil(sqrt);

    if (sqrt % 1 >= 0.5) {
      rows++;
    }

    normalized = normalized.padEnd(rows * columns, ' ');

    let coded = '';

    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        coded += normalized[r * columns + c];
      }
      if (c + 1 < columns) {
        coded += ' ';
      }
    }

    return coded;
  }

}
