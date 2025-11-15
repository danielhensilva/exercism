//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(input) {
  if (!input || input.length === 0 || input[0].length === 0) return 0;
  const rowCount = input.length;
  const colCount = input[0].length;
  let rectangleCount = 0;
  for (let topRow = 0; topRow < rowCount; topRow++) {
    for (let leftCol = 0; leftCol < colCount; leftCol++) {
      if (!isCorner(input, topRow, leftCol)) continue;
      for (let rightCol = leftCol + 1; rightCol < colCount; rightCol++) {
        if (!isCorner(input, topRow, rightCol)) continue;
        for (let bottomRow = topRow + 1; bottomRow < rowCount; bottomRow++) {
          if (!isCorner(input, bottomRow, leftCol)) continue;
          if (!isCorner(input, bottomRow, rightCol)) continue;
          if (isRectangle(input, topRow, leftCol, bottomRow, rightCol)) {
            rectangleCount++;
          }
        }
      }
    }
  }
  return rectangleCount;
}

function isCorner(input, row, col) {
  return input[row][col] === '+';
}

function isHorizontalEdge(input, row, colStart, colEnd) {
  for (let col = colStart + 1; col < colEnd; col++) {
    if (!('-+'.includes(input[row][col]))) return false;
  }
  return true;
}

function isVerticalEdge(input, col, rowStart, rowEnd) {
  for (let row = rowStart + 1; row < rowEnd; row++) {
    if (!('|+'.includes(input[row][col]))) return false;
  }
  return true;
}

function isRectangle(input, topRow, leftCol, bottomRow, rightCol) {
  return (
    isHorizontalEdge(input, topRow, leftCol, rightCol) &&
    isHorizontalEdge(input, bottomRow, leftCol, rightCol) &&
    isVerticalEdge(input, leftCol, topRow, bottomRow) &&
    isVerticalEdge(input, rightCol, topRow, bottomRow)
  );
}

