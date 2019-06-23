export class Change {

  calculate(coins, value) {
    if (value < 0) {
      throw new Error('Negative totals are not allowed.');
    }

    if (value == 0) {
      return [];
    }

    const solution = execute(coins, value);

    if (solution) {
      return solution;
    }

    throw new Error(`The total ${value} cannot be represented in the given currency.`);
  }

}

function execute(coins, value) {
  let partials = initialise(coins, value);

  let solution = match(partials, value);
  if (solution) {
    return solution.coins;
  }

  while (true) {

    if (partials.length == 0) {
      return null;
    }

    const newPartials = [];

    for (const coin of coins) {
      for (const partial of partials) {

        const newPartial = merge(partial, coin);

        if (newPartial.sum == value)
          return newPartial.coins;

        if (newPartial.sum > value)
          continue;

        newPartials.push(newPartial);

      }
    }

    let solution = match(partials, value);
    if (solution) {
      return solution;
    }

    partials = newPartials;
  }
}

function initialise(coins, value) {
  return coins
    .filter(x => x <= value)
    .map(x => ({
      coins: [x],
      sum: x
    }));
}

function merge(partial, coin) {
  return {
    coins: sort([coin, ...partial.coins]),
    sum: coin + partial.sum
  };
}

function match(partials, value) {
  return partials.find(x => x.sum == value);
}

function sort(array) {
  array.sort((a, b) => a - b);
  return array;
}

