// functional solution
export const value1 = (colors) => {
  return parseInt(
    colors
      .map(x => COLORS.indexOf(x).toString())
      .reduce((acc, x) => acc + x)
  );
};

// Optimised solution
export const value = (colors) => {
  let power = 10 ** colors.length;
  let result = 0;
  for (const color of colors) {
    power /= 10;
    result += COLORS.indexOf(color) * power;
  }
  return result;
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
