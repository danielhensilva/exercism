module.exports = function Bob() {

  function isYelling(phrase) {
    return /[a-z]/i.test(phrase) && phrase.toUpperCase() === phrase;
  }

  function isSilence(phrase) {
    return !phrase.trim().length;
  }

  function isQuestion(phrase) {
    return /\?$/.test(phrase);
  }

  function hey(phrase) {
    if (isYelling(phrase)) 
      return 'Whoa, chill out!';

    if (isSilence(phrase)) 
      return 'Fine. Be that way!';
    
    if (isQuestion(phrase)) 
      return 'Sure.';

    return 'Whatever.'
  }

  return {
    hey: hey
  };
};