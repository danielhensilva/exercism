class Direction {
  #values = ['north', 'east', 'south', 'west']

  isValid(value) {
    return this.#values.indexOf(value) !== -1
  }

  ensureValid(value) {
    if (!this.isValid(value)) {
      throw new InvalidInputError(`Value ${value} is not valid`)
    }
  }

  rotateLeft(value) {
    this.ensureValid(value)
    const index = this.#values.indexOf(value) -1
    const nextIndex = index === -1 ? 3 : index
    return this.#values[nextIndex]
  }

  rotateRight(value) {
    this.ensureValid(value)
    const index = this.#values.indexOf(value) +1
    const nextIndex = index === 4 ? 0 : index
    return this.#values[nextIndex]
  }

  advanceX(value) {
    this.ensureValid(value)
    if (value === 'west') return -1
    if (value === 'east') return +1
    return 0
  }

  advanceY(value) {
    this.ensureValid(value)
    if (value === 'south') return -1
    if (value === 'north') return +1
    return 0
  }
}

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  #d = new Direction()
  bearing = 'north'
  x = 0
  y = 0

  get coordinates() {
    return [this.x, this.y]
  }

  place({ x, y, direction }) {
    this.#d.ensureValid(direction)
    this.bearing = direction
    this.x = x
    this.y = y
  }

  evaluate(instructions) {
    for (const i of instructions) {
      if (i === 'L') {
        this.bearing = this.#d.rotateLeft(this.bearing)
        continue
      }
      if (i === 'R') {
        this.bearing = this.#d.rotateRight(this.bearing)
        continue
      }
      if (i === 'A') {
        this.x += this.#d.advanceX(this.bearing)
        this.y += this.#d.advanceY(this.bearing)
        continue
      }
      throw new InvalidInputError(`Invalid instruction ${i}`)
    }
  }
}

