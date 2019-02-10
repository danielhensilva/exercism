export class LinkedList {

  constructor() {
    this.nodes = [];
  }

  push(value) {
    this.nodes.push(value);
  }

  pop() {
    return this.nodes.pop();
  }

  shift() {
    return this.nodes.shift()
  }

  unshift(value) {
    return this.nodes.unshift(value);
  }

  count() {
    return this.nodes.length;
  }

  delete(value) {
    this.nodes = this.nodes.filter(x => x !== value);
  }

}