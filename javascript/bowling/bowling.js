export class Bowling {
  constructor() {
    this.frames = new FrameCollection();
  }

  roll(pins) {
    this.frames.roll(pins);
  }

  score() {
    return this.frames.score();
  }
}

class FrameCollection {
  constructor() {
    this.frames = [];
    this.lastStrikes = [];
    this.lastSpare = null;
  }

  roll(pins) {
    const frame = this.currentFrame();
    frame.roll(pins);

    this.lastStrikes.forEach(x => x.addBonus(pins));
    this.lastStrikes = this.lastStrikes.filter(x => x.bonus.length < 2);

    if (frame.isStrike()) {
      this.lastStrikes.push(frame);
    }

    if (this.lastSpare) {
      this.lastSpare.addBonus(pins);
      this.lastSpare = null;
    }

    if (frame.isSpare()) {
      this.lastSpare = frame;
    }
  }

  currentFrame() {
    var frame;

    if (this.frames.length == 0) {
      frame = new Frame();
      this.frames.push(frame);
      return frame;
    }

    frame = this.frames[this.frames.length-1];

    if (frame.isComplete()) {
      frame = new Frame();
      this.frames.push(frame);
      return frame;
    }

    return frame;
  }

  score() {
    let value = 0;
    console.log('---');

    for (let i = 0; i < 10; i++) {
      console.log((i+1) + ' = ' + this.frames[i].toString());
      value += this.frames[i].score();
    }

    console.log('=> ' + value);
    return value;
  }
}

class Frame {
  constructor() {
    this.count = 0;
    this.firstThrow = 0;
    this.secondThrow = 0;
    this.bonus = [];
  }

  roll(pins) {
    this.count++;

    if (this.count == 1) {
      this.firstThrow = pins;
    }

    if (this.count == 2) {
      this.secondThrow = pins;
    }
  }

  addBonus(value) {
    this.bonus.push(value);
  }

  isStrike() {
    return this.firstThrow == 10;
  }

  isSpare() {
    return this.firstThrow < 10 && this.firstThrow + this.secondThrow == 10;
  }

  isComplete() {
    return this.count == 2 || this.isStrike();
  }

  score() {
    return this.firstThrow
      + this.secondThrow
      + this.bonus.reduce((prev, curr) => prev + curr, 0);
  }

  toString() {
    return `[${this.firstThrow}, ${this.secondThrow}, ${JSON.stringify(this.bonus)}]`;
  }
}
