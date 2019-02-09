export function age(planet, seconds) {
  return round(seconds / orbitalPeriodInSeconds(planet));
}

function orbitalPeriodInSeconds(planet) {
  if (planet === 'earth')
    return 31557600;

  if (planet === 'mercury')
    return orbitalPeriodInSeconds('earth') * 0.2408467;

  if (planet === 'venus')
    return orbitalPeriodInSeconds('earth') * 0.61519726;

  if (planet === 'mars')
    return orbitalPeriodInSeconds('earth') * 1.8808158;

  if (planet === 'jupiter')
    return orbitalPeriodInSeconds('earth') * 11.862615;

  if (planet === 'saturn')
    return orbitalPeriodInSeconds('earth') * 29.447498;

  if (planet === 'uranus')
    return orbitalPeriodInSeconds('earth') * 84.016846;

  if (planet === 'neptune')
    return orbitalPeriodInSeconds('earth') * 164.79132;

  throw new Error("Unexpected planet");
}

function round(number, decimalDigits) {
  if (decimalDigits == null)
    decimalDigits = 2;

  const power = Math.pow(10, decimalDigits);
  return Math.round(number * power) / power;
}