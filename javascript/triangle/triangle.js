export class Triangle {

  constructor(a, b, c) {
    this.sizes = [a, b, c].sort((x, y) => x - y);
  }

  kind() {
    if (this.sizes.some(x => x <= 0)) {
      throw new Error();
    }
    if (this.sizes[0] + this.sizes[1] < this.sizes[2]) {
      throw new Error();
    }
    if (this.sizes[0] === this.sizes[1] && this.sizes[1] === this.sizes[2]) {
      return 'equilateral';
    }
    if (this.sizes[0] === this.sizes[1] || this.sizes[1] === this.sizes[2]) {
      return 'isosceles';
    }
    return 'scalene';
  }

}