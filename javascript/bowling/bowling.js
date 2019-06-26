/* eslint-disable no-console */

export class Bowling {
  constructor() {
    this.frames = new FrameCollection();
  }

  roll(pins) {
    if (this.frames.isOver()) {
      throw new Error('Cannot roll after game is over');
    }

    this.frames.roll(pins);
  }

  score() {
    if (!this.frames.isOver()) {
      throw new Error('Score cannot be taken until the end of the game');
    }

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

    if (this.frames.length === 0) {
      frame = new Frame();
      this.frames.push(frame);
      return frame;
    }

    frame = this.getLastFrame();

    if (frame.isComplete()) {
      frame = new Frame();
      this.frames.push(frame);
    }

    return frame;
  }

  isOver() {
    if (this.frames.length < 10) {
      return false;
    }

    const tenthFrame = this.getFrame(10);

    if (!tenthFrame.isComplete()) {
      return false;
    }

    if (tenthFrame.isRegular()) {
      return true;
    }

    const eleventhFrame = this.getFrame(11);

    if (eleventhFrame == null) {
      return false;
    }

    if (tenthFrame.isSpare()) {
      return eleventhFrame.throws() === 1;
    }

    if (tenthFrame.isStrike()) {

      if (!eleventhFrame.isComplete()) {
        return false;
      }

      if (eleventhFrame.isStrike()) {

        const twelfthFrame = this.getFrame(12);

        if (twelfthFrame == null) {
          return false;
        }

        return twelfthFrame.throws() === 1;
      }

    }

    return true;
  }

  score() {
    let value = 0;
    console.log('---');

    for (let i = 0; i < 10; i++) {
      console.log((i + 1) + ' = ' + this.frames[i].toString());
      value += this.frames[i].score();
    }

    console.log('=> ' + value);
    return value;
  }

  getFrame(number) {
    if (number > this.frames.length) {
      return null;
    }
    return this.frames[number - 1];
  }

  getLastFrame() {
    return this.frames[this.frames.length - 1];
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

    if (this.count === 1) {
      this.firstThrow = pins;
    }

    if (this.count === 2) {
      this.secondThrow = pins;
    }

    if (pins < 0) {
      throw new Error('Negative roll is invalid');
    }

    if (pins > 10 || this.scorePins() > 10) {
      throw new Error('Pin count exceeds pins on the lane')
    }
  }

  addBonus(value) {
    this.bonus.push(value);
  }

  isStrike() {
    return this.firstThrow === 10;
  }

  isSpare() {
    return this.firstThrow < 10 && this.firstThrow + this.secondThrow === 10;
  }

  isComplete() {
    return this.count === 2 || this.isStrike();
  }

  isRegular() {
    return !this.isSpecial();
  }

  isSpecial() {
    return this.isSpare() || this.isStrike();
  }

  scorePins() {
    return this.firstThrow + this.secondThrow;
  }

  scoreBonus() {
    return this.bonus.reduce((prev, curr) => prev + curr, 0);
  }

  score() {
    return this.scorePins() + this.scoreBonus();
  }

  throws() {
    return this.count;
  }

  toString() {
    return `[${this.firstThrow}, ${this.secondThrow}, ${JSON.stringify(this.bonus)}]`;
  }
}
