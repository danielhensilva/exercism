export const squareRoot = (number, estimate = 0) => {
  while (estimate * estimate < number) {
    estimate++;
  }
  if (estimate * estimate == number) {
    return estimate;
  }
  estimate--;
  let decimals = 1;
  while (true) {
    if (decimals > 4) {
      return estimate;
    }
    let inc = increment(decimals);
    estimate += inc * 10;
    while (estimate * estimate > number) {
      estimate -= inc;
    }
    estimate = round(estimate, decimals);
    decimals++;
  }
};

function round(number, decimals) {
  let inc = 1;
  while (decimals > 0) {
    inc *= 10;
    decimals--;
  }
  number *= inc;
  number = Math.round(number);
  number /= inc;
  return number;
}

function increment(decimals) {
  let inc = 1;
  while (decimals > 0) {
    inc /= 10;
    decimals--;
  }
  return inc;
}
