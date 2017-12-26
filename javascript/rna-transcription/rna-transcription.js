const RnaTranscriber = function() {
};

function convert(dnaNucleotice) {
  switch (dnaNucleotice) {
    case 'G': return 'C';
    case 'C': return 'G';
    case 'T': return 'A';
    case 'A': return 'U';
    default: throw new Error('Invalid input');
  }
}

RnaTranscriber.prototype.toRna = function(input) {
  return input.split('').map(convert).join('');
};

module.exports = RnaTranscriber;