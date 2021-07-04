export const chain = (dominoes) => {

  // Validates edge-cases

  if (dominoes == null) {
    return null;
  }
  if (dominoes.length == 0) {
    return dominoes;
  }

  // Take any random dominoes from the list
  // and start building a chain from it

  return build(
    except(dominoes, dominoes[0]),
    [first(dominoes)]
  );
};

function build(dominoes, chain) {

  // No more dominoes available in the list
  // check if the first and last element in
  // the chain can be put together
  // (a, b) ... (c, d) >==> a == d

  if (empty(dominoes)) {

    if (left(first(chain)) == right(last(chain))) {
      // Chain is the solution
      return chain;
    }

    // Chain is not the solution
    return null;

  }

  // Go through all dominoes list and
  // try to complete the chain for each
  // potential candidate

  for (let i = 0; i < dominoes.length; i++) {

    const currentDominoes = dominoes[i];
    const lastInTheChain = last(chain);

    // When the right-side of the last in the chain
    // matches the left-side of current dominoes,
    // it is a candidate

    if (right(lastInTheChain) == left(currentDominoes)) {
      const newDominoesList = except(dominoes, currentDominoes);
      const newChain = merge(chain, currentDominoes);

      // If build returns a chain, it is the solution
      // just need to bubble up
      const solution = build(newDominoesList, newChain);
      if (solution != null) return solution;
    }

    // When the right-side of the last in the chain
    // matches the right-side of current dominoes,
    // it is a candidate, but needs to be flipped

    if (right(lastInTheChain) == right(currentDominoes)) {
      const newDominoesList = except(dominoes, currentDominoes);
      const newChain = merge(chain, flip(currentDominoes));

      // If build returns a chain, it is the solution
      // just need to bubble up
      const solution = build(newDominoesList, newChain);
      if (solution != null) return solution;
    }
  }

  // When the candidates list is exhausted
  // returns null as no solution can be made
  // out of the current chain list

  return null;
}

// Methods for pairs

function left(pair) {
  return pair[0];
}
function right(pair) {
  return pair[1];
}
function flip(pair) {
  return [pair[1], pair[0]];
}

// Methods for arrays

function first(array) {
  return array[0];
}
function last(array) {
  return array[array.length-1];
}
function empty(array) {
  return array.length == 0;
}
function except(array, item) {
  return array.filter(x => x != item);
}
function merge(array, item) {
  return [...array, item];
}