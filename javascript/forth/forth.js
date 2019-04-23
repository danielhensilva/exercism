export class Forth {

  constructor() {
    this.stack = [];
    this.defs = {};
  }

  evaluate(input) {

    input = input.toLowerCase();

    for (const word in this.defs) {
      const searchValue = word;
      const replaceValue = this.defs[word];
      input = input.split(searchValue).join(replaceValue);
    }

    const elements = input.split(' ');

    input[0] === ':'
      ? this.evaluateDefinition(elements)
      : this.evaluateStack(elements);
  }

  evaluateDefinition(elements) {
    elements.shift();
    elements.pop();

    const word = elements.shift();
    const value = elements.join(' ');

    if (!isNaN(word)) {
      throw new Error('Invalid definition');
    }

    this.defs[word] = value;
  }

  evaluateStack(elements) {

    if (this.areValids(elements)) {
      throw new Error('Unknown command');
    }

    for (const current of elements) {

      if (!isNaN(current)) {
        this.stack.push(+current);
        continue;
      }

      if (this.stack.length < 1) {
        throw new Error('Stack empty');
      }

      const last = this.stack.pop();

      if (current === 'dup') {
        this.stack.push(last);
        this.stack.push(last);
        continue;
      }

      if (current === 'drop') {
        continue;
      }

      if (this.stack.length < 1) {
        throw new Error('Stack empty');
      }

      const secondLast = this.stack.pop();

      if (current === 'swap') {
        this.stack.push(last);
        this.stack.push(secondLast);
        continue;
      }

      if (current === 'over') {
        this.stack.push(secondLast);
        this.stack.push(last);
        this.stack.push(secondLast);
        continue;
      }

      if (current === '+') {
        this.stack.push(secondLast + last);
        continue;
      }

      if (current === '-') {
        this.stack.push(secondLast - last);
        continue;
      }

      if (current === '*') {
        this.stack.push(secondLast * last);
        continue;
      }

      if (current === '/') {

        if (last === 0) {
          throw new Error('Division by zero');
        }

        const result = Math.floor(secondLast / last);
        this.stack.push(result);
        continue;
      }
    }
  }

  areValids(elements) {
    return !!elements.find(x =>
      isNaN(x) && ![
        'dup',
        'drop',
        'swap',
        'over',
        '+',
        '-',
        '*',
        '/'
      ].includes(x)
    );
  }
}