export class InputCell {
  constructor(value) {
    this.listeners = [];
    this.value = value;
  }
  setValue(value) {
    this.value = value;
    this.onValueChanged();
  }
  registerListener(listener) {
    this.listeners.push(listener);
  }
  onValueChanged() {
    this.listeners.forEach(x => x.onValueChanged());
  }
}

export class ComputeCell {
  constructor(inputCells, func) {
    this.callbacks = [];
    this.listeners = [];
    this.inputCells = inputCells;
    this.inputCells.forEach(x => x.registerListener(this));
    this.func = func;
    this.value = this.func(this.inputCells);
  }
  addCallback(callback) {
    this.callbacks.push(callback);
  }
  removeCallback(callback) {
    throw new Error('Not implemented yet.');
  }
  registerListener(listener) {
    this.listeners.push(listener);
  }
  onValueChanged() {
    const newValue = this.func(this.inputCells);
    if (newValue === this.value) return;
    this.value = newValue;
    this.listeners.forEach(x => x.onValueChanged());
    this.callbacks.forEach(x => x.onValueChanged(this));
  }
}

export class CallbackCell {
  constructor(func) {
    this.values = [];
    this.func = func;
  }
  onValueChanged(value) {
    this.values.push(this.func(value));
  }
}