export const keep = (collection, predicate) => {
  const result = [];
  for (const element of collection) {
    if (predicate(element)) {
      result.push(element);
    }
  }
  return result;
};

export const discard = (collection, predicate) => {
  const negate = (element) => !predicate(element);
  return keep(collection, negate);
};
