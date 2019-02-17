export function at(hour, minute) {
  return new Clock(hour, minute);
}

class Clock {

  constructor(hour, minute) {
    this._minute = 0;
    if (hour) this.plus(hour * 60);
    if (minute) this.plus(minute);
  }

  plus(minutes) {
    this._minute += minutes;
    while (this._minute < 0) {
      this._minute += 60*24;
    }
    while (this._minute >= 60*24) {
      this._minute -= 60*24;
    }
    return this;
  }

  minus(minutes) {
    return this.plus(minutes * -1);
  }

  equals(clock) {
    return this._minute === clock._minute;
  }

  toString() {
    const h = Math.floor(this._minute / 60);
    const m = this._minute % 60;
    const hh = h > 9 ? h : '0' + h;
    const mm = m > 9 ? m : '0' + m;
    return `${hh}:${mm}`;
  };

}