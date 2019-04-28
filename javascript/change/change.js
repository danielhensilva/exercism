export class Change {

  calculate(coins, value) {
    if (value < 0) {
      throw new Error('Negative totals are not allowed.');
    }

    if (value == 0) {
      return [];
    }

    const bestOption = best(coins, value);

    if (bestOption) {
      return bestOption;
    }

    throw new Error(`The total ${value} cannot be represented in the given currency.`);
  }

}

function best(coins, value) {
  let best = null;
  const options = generate(coins, value);

  for (const option of options) {
    if (option == null) {
      continue;
    }
    if (best == null) {
      best = option;
      continue;
    }
    if (best.length > option.length) {
      best = option;
    }
  }

  return best;
}

function generate(coins, value) {
  const options = [];

  const topDownCoins = [...coins];
  while (topDownCoins.length) {
    const option = calculate(topDownCoins, value);
    options.push(option);
    topDownCoins.pop();
  }

  const bottomUpCoins = [...coins].reverse();
  while (bottomUpCoins.length) {
    const option = calculate(bottomUpCoins, value);
    options.push(option);
    bottomUpCoins.shift();
  }

  return options;
}

function calculate(coins, value) {
  const change = [];

  coins.forEach(coin => {
    while (value > 0 && value >= coin) {
      value -= coin;
      change.unshift(coin);
    }
  });

  if (value == 0) {
    return change;
  }
}

