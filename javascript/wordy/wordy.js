export class WordProblem {

  constructor(question) {
    this.question = question;
  }

  answer() {
    const operators = this.parseQuestion();

    if (operators.length < 3) {
      throw new ArgumentError();
    }

    while (operators.length > 1) {
      const left = operators.shift();
      const op = operators.shift();
      const right = operators.shift();
      const result = op(left, right);
      operators.unshift(result);
    }

    return operators.pop();
  }

  parseQuestion() {
    return this.question
      .split(' ')
      .map(this.parseWord)
      .filter(x => !!x);
  }

  parseWord(word) {
    if (/-?\d/.test(word)) {
      return parseInt(word);
    }
    if (/plus/.test(word)) {
      return (left, right) => left + right;
    }
    if (/minus/.test(word)) {
      return (left, right) => left - right;
    }
    if (/multiplied/.test(word)) {
      return (left, right) => left * right;
    }
    if (/divided/.test(word)) {
      return (left, right) => left / right;
    }
    return null;
  }

}

export class ArgumentError extends Error {
}
