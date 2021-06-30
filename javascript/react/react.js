export class InputCell {
  constructor(value) {
    this.listeners = [];
    this.value = value;
  }
  setValue(value) {
    this.value = value;
    this.onValueChanging();
    this.onValueChanged();
  }
  registerListener(listener) {
    this.listeners.push(listener);
  }
  onValueChanging() {
    this.listeners.forEach(x => x.onValueChanging());
  }
  onValueChanged() {
    this.listeners.forEach(x => x.onValueChanged());
  }
}

export class ComputeCell extends InputCell {
  constructor(inputCells, func) {
    super();
    this.callbacks = [];
    this.inputCells = inputCells;
    this.inputCells.forEach(x => x.registerListener(this));
    this.func = func;
    this.value = this.func(this.inputCells);
    this.stable = this.value;
  }
  addCallback(callback) {
    this.callbacks.push(callback);
  }
  removeCallback(callback) {
    this.callbacks = this.callbacks.filter(x => x !== callback);
  }
  onValueChanging() {
    this.value = this.func(this.inputCells);
    this.listeners.forEach(x => x.onValueChanging());
  }
  onValueChanged() {
    if (this.stable === this.value) return;
    this.stable = this.value;
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