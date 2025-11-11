export const annotate = (input) => {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    result.push('')
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === '*') {
        result[i] += '*'
      } else {
        result[i] += numberOfFlowers(input, i, j);
      }
    }
  }
  return result;
};

function numberOfFlowers(input, i, j) {
  let count = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (hasFlower(input, i + x, j + y)) {
        count++;
      }
    }
  }
  if (count === 0) {
    return ' ';
  }
  return count
}

function hasFlower(field, row, col) {
  if (row < 0 || row >= field.length) {
    return false;
  }
  if (col < 0 || col >= field[row].length) {
    return false;
  }
  if (field[row][col] === '*') {
    return true;
  }
  return false;
}
