export class List {

  constructor(values) {
    this.values = values || [];
  }

  append(list) {
    const newValues = [];

    for (const i of this.values) {
      newValues.push(i);
    }

    for (const i of list.values) {
      newValues.push(i);
    }

    return new List(newValues);
  }

  concat(list) {
    const newValues = [];

    for (const i of this.values) {
      newValues.push(i);
    }

    for (const i of list.values) {
      if (i.values) {
        for (const j of i.values) {
          newValues.push(j);
        }
      }
      else {
        newValues.push(i);
      }
    }

    return new List(newValues);
  }

  reverse() {
    const newValues = [];

    for (const i of this.values) {
      newValues.unshift(i);
    }

    return new List(newValues);
  }

  foldl(func, init) {
    for (const i of this.values) {
      init = func(init, i);
    }
    return init;
  }

  foldr(func, init) {
    for (const i of this.reverse().values) {
      init = func(init, i);
    }
    return init;
  }

  map(func) {
    const newValues = [];

    for (const i of this.values) {
      newValues.push(func(i));
    }

    return new List(newValues);
  }

  length() {
    let counter = 0;

    for (const i of this.values) {
      counter++;
    }

    return counter;
  }

  filter(func) {
    const newValues = [];

    for (const i of this.values) {
      if (func(i)) {
        newValues.push(i);
      }
    }

    return new List(newValues);
  }

}