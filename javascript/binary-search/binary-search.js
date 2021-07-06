export const find = (array, element) => {
  if (array == null || array.length == 0) {
    throw new Error('Value not in array');
  }

  let lowerBound = 0;
  let upperBound = array.length - 1;

  while (lowerBound <= upperBound) {

    let index = Math.floor((upperBound - lowerBound) / 2) + lowerBound;

    if (array[index] === element) {
      return index;
    }

    if (element < array[index]) {
      upperBound = index - 1;
    } else if (element > array[index]) {
      lowerBound = index + 1;
    }

  }

  throw new Error('Value not in array');
};
