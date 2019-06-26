export class Flattener {

  flatten(items) {

    if (items == null) {
      return [];
    }

    if (!Array.isArray(items)) {
      return [items];
    }

    const flat = [];

    for (const item of items) {
      flat.push(...this.flatten(item));
    }

    return flat;
  }

}
