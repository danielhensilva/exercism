export default class WordSearch {

  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    const matches = {};
    const grid = this.grid;

    for (const word of words) {

      const operations = [
        searchLeftToRight,
        searchRightToLeft,
        searchTopToBottom,
        searchBottomToTop,
      ];

      const result = findResult(
        operations,
        grid,
        word);

      if (result)
        matches[word] = result;
    }
    return matches;
  }

}

function findResult(operations, grid, word) {
  for (const operation of operations) {
    const result = operation(grid, word);
    if (result)
      return result;
  }
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

function reverseArray(array) {
  if (array) return array.reverse();
}

function reverseStartArray(match) {
  if (match) return {
    start: reverseArray(match.start),
    end: match.end
  }
}

function reverseEndArray(match) {
  if (match) return {
    start: match.start,
    end: reverseArray(match.end)
  }
}

function permuteStartEnd(match) {
  if (match) return {
    start: match.end,
    end: match.start
  };
}

function crossStartEnd(match) {
  if (match) return {
    start: [match.start[0], match.end[1]],
    end: [match.end[0], match.start[1]],
  }
}

function rotateGrid270Degrees(grid) {
  const rotated = [];
  for (let c = 0; c < grid[0].length; c++) {
    rotated[c] = '';
    for (let l = 0; l < grid.length; l++) {
      rotated[c] += grid[l][c];
    }
  }
  return rotated;
}

function startsWith(text, target, fromIndex) {
  const subtext = text.substring(fromIndex);
  const length = Math.min(subtext.length, target.length);
  for (let i = 0; i < length ; i++) {
    if (subtext[i] != target[i])
      return false;
  }
  return true;
}

function searchSingleLine(line, target) {
  const length = line.length - target.length + 1;
  for (let i = 0; i < length; i++) {
    if (startsWith(line, target, i)) return {
      start: i + 1,
      end: i + target.length
    }
  }
}

function searchBottomToTop(grid, word) {
  const drow = reverseWord(word);
  const match = searchTopToBottom(grid, drow);
  return reverseStartArray(
    permuteStartEnd(match));
}

function searchTopToBottom(grid, word) {
  const rotated = rotateGrid270Degrees(grid);
  const match = searchLeftToRight(rotated, word);
  return reverseStartArray(match);
}

function searchRightToLeft(grid, word) {
  const drow = reverseWord(word);
  const match = searchLeftToRight(grid, drow);
  return crossStartEnd(match);
}

function searchLeftToRight(grid, word) {
  for (let i = 0; i < grid.length; i++) {
    const lineMatch = searchSingleLine(grid[i], word);
    if (!lineMatch) continue;
    return {
      start: [i + 1, lineMatch.start],
      end: [i + 1, lineMatch.end]
    }
  }
}