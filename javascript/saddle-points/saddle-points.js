export const saddlePoints = (matrix) => {
  const rowMatches = maxPerRow(matrix);
  const columnMatches = minPerColumn(matrix);

  console.log("rowMatches", rowMatches)
  console.log("columnMatches", columnMatches)

  const result = [];
  for (const rowMatch of rowMatches) {
    for (const columnMatch of columnMatches) {
      if (rowMatch[0] === columnMatch[0] && rowMatch[1] === columnMatch[1]) {
        result.push({ row: rowMatch[0], column: columnMatch[1] });
      }
    }
  }
  return result;
};

const minPerColumn = (matrix) => {
  const results = [];
  for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
    let minIndexes = [0];
    let minValue = matrix[0][columnIndex];
    for (let rowIndex = 1; rowIndex < matrix.length; rowIndex++) {
      const currentValue = matrix[rowIndex][columnIndex];
      if (currentValue < minValue) {
        minIndexes = [];
        minValue = currentValue;
      }
      if (currentValue === minValue) {
        minIndexes.push(rowIndex);
      }
    }
    for (const rowIndex of minIndexes) {
      results.push([rowIndex + 1, columnIndex + 1]);
    }
  }
  return results;
}

const maxPerRow = (matrix) => {
  const results = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    let maxIndexes = [0];
    let maxValue = matrix[rowIndex][0];
    for (let columnIndex = 1; columnIndex < matrix[rowIndex].length; columnIndex++) {
      const currentValue = matrix[rowIndex][columnIndex];
      if (currentValue > maxValue) {
        maxIndexes = [];
        maxValue = currentValue;
      }
      if (currentValue === maxValue) {
        maxIndexes.push(columnIndex);
      }
    }
    for (const columnIndex of maxIndexes) {
      results.push([rowIndex + 1, columnIndex + 1]);
    }
  }
  return results;
}
