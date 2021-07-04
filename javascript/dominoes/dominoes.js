export const chain = (items) => {
  if (items == null) {
    return null;
  }
  if (items.length == 0) {
    return items;
  }
  return build(
    items.filter(x => x != items[0]),
    [items[0]]
  );
};

function build(items, chain) {
  if (items.length == 0) {
    if (chain[0][0] == chain[chain.length-1][1]) {
      return chain;
    }
    return null;
  }

  const last = chain[chain.length-1];
  const number = last[1];

  for (let i = 0; i < items.length; i++) {

    if (items[i][0] == number) {
      const foundChain = build(
        items.filter(x => x != items[i]),
        [...chain, items[i]]
      );
      if (foundChain != null) {
        return foundChain;
      }
    }

    if (items[i][1] == number) {
      const foundChain = build(
        items.filter(x => x != items[i]),
        [...chain, [items[i][1], items[i][0]]]
      );
      if (foundChain != null) {
        return foundChain;
      }
    }

  }

  return null;
}