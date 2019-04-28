export default class WordSearch {

  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    const matches = {};
    const grid = this.grid;

    const xLength = grid[0].length;
    const yLength = grid.length;

    for (const word of words) {

      matches[word] = [
        findLeftRight(word, grid, xLength, yLength),
        findRightLeft(word, grid, xLength, yLength),
        findTopBottom(word, grid, xLength, yLength),
        findBottomTop(word, grid, xLength, yLength),
      ].filter(x => Boolean(x))[0]

    }

    return matches;
  }

}

function findLeftRight(word, grid, xLength, yLength) {
  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {

      let match = true;

      for (let i = 0; i < word.length; i++) {

        if (grid[y][x + i] == word[i]) {
          continue;
        }

        match = false;
        break;
      }

      if (match) {
        const start = [y + 1, x + 1];
        const end = [y + 1, x + word.length];
        return { start, end }
      }

    }
  }
}

function findRightLeft(word, grid, xLength, yLength) {
  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {

      let match = true;

      for (let i = 0; i < word.length; i++) {

        if (grid[y][x + i] == word[word.length - i - 1]) {
          continue;
        }

        match = false;
        break;
      }

      if (match) {
        const start = [y + 1, x + word.length];
        const end = [y + 1, x + 1];
        return { start, end }
      }

    }
  }
}

function findTopBottom(word, grid, xLength, yLength) {
  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {

      let match = true;

      for (let i = 0; i < word.length; i++) {

        if (!grid[y + i]) {
          match = false;
          break;
        }

        if (grid[y + i][x] != word[i]) {
          match = false;
          break;
        }

      }

      if (match) {
        const start = [y + 1, x + 1];
        const end = [y + word.length, x + 1];
        return { start, end }
      }

    }
  }
}

function findBottomTop(word, grid, xLength, yLength) {
  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {

      let match = true;

      for (let i = 0; i < word.length; i++) {

        if (!grid[y - i]) {
          match = false;
          break;
        }

        if (grid[y - i][x] != word[i]) {
          match = false;
          break;
        }

      }

      if (match) {
        const start = [y + 1, x + 1];
        const end = [y - word.length, x + 1];
        return { start, end }
      }

    }
  }
}