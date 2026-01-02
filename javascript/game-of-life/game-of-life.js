//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(matrix) {
    this.matrix = matrix;
  }

  tick() {
    const newMatrix = [];
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {

        // Count the number of neighbors
        const neighbours = this.#countNeighbors(i, j);

        // If the cell is alive
        // and there are 2 or 3 neighbors, it stays alive
        if (this.matrix[i][j] === 1 && (neighbours === 2 || neighbours === 3)) {
          GameOfLife.#setPosition(newMatrix, i, j, 1);
          continue;
        }

        // If the cell is dead
        // and there are exactly 3 neighbors, it becomes alive
        if (this.matrix[i][j] === 0 && neighbours === 3) {
          GameOfLife.#setPosition(newMatrix, i, j, 1);
          continue;
        }

        // Otherwise, it stays dead
        GameOfLife.#setPosition(newMatrix, i, j, 0);
      }
    }
    this.matrix = newMatrix;
  }

  state() {
    return this.matrix;
  }

  #countNeighbors(i, j) {
    let count = 0;
    const iterator = [-1, 0, 1];
    for (const x of iterator) {
      for (const y of iterator) {
        if (x === 0 && y === 0) continue;
        count += this.#getCellValue(i + x, j + y);
      }
    }
    return count;
  }

  #getCellValue(x, y) {
    if (x < 0 || y < 0 || x >= this.matrix.length || y >= this.matrix[x].length) return 0;
    return this.matrix[x][y];
  }

  static #setPosition(matrix, x, y, value) {
    if (matrix[x] === undefined) matrix[x] = [];
    matrix[x][y] = value;
  }
}
