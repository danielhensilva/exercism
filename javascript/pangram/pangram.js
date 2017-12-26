String.prototype.removeNonAscii = function() {
  return this.replace(/[^a-z]/g, '');
}

Array.prototype.unique = function() {
  return Array.from(new Set(this));
}

const Pangram = function(phrase) {

  function toCharCode(char) {
    return char.charCodeAt(0);
  }

  function isSequencial(value, index) {
    return (value - index) === 97;
  }  

  function isPangram() {
    if (!phrase) {
      return false;
    }

    return phrase
      .toLowerCase()
      .removeNonAscii()
      .split('')
      .sort()
      .map(toCharCode)
      .unique()
      .every(isSequencial);
  }

  return {
    isPangram: isPangram
  }

};


module.exports = Pangram;