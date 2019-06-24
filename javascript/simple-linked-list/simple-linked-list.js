export class List {
  constructor(values = []) {
    this.head = null;
    this.length = 0;
    values.forEach(value =>
      this.add(new Element(value)));
  }

  add(element) {
    this.length++;

    if (this.head == null) {
      this.head = element;
      return;
    }

    element.next = this.head;
    this.head = element;
  }

  toArray() {
    var output = [];
    var curr = this.head;
    while (curr) {
      output.push(curr.value);
      curr = curr.next;
    }
    return output;
  }

  reverse() {
    const values = this.toArray();
    const newList = new List(values);
    return newList;
  }
}

export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}