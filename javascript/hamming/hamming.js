const Hamming = function() {
}

Hamming.prototype.compute = function (firstStrand, secondStrand) {
  if (firstStrand.length != secondStrand.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  let diffs = 0;
  for (let i = 0; i < firstStrand.length; i++) {
    if (firstStrand[i] !== secondStrand[i]) {
      diffs++;
    }
  }
  return diffs;
}

module.exports = Hamming;