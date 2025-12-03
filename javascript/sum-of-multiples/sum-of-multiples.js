export const sum = (items, level) => {
  const poitns = items.flatMap(item => range(item, level))
  const deduped = dedupe(poitns)
  return deduped.reduce((acc, curr) => acc + curr, 0)
}

function dedupe(array) {
  return [...new Set(array)];
}

function range(item, level) {
  if (item == 0) {
    return [];
  }
  const result = [];
  for (let i = item; i < level; i += item) {
    result.push(i);
  }
  return result;
}

