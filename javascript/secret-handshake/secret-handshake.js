export function secretHandshake(value) {
  let sequence = [];

  if (value & 1) {
    value -= 1;
    sequence.push('wink');
  }

  if (value & 2) {
    value -= 2;
    sequence.push('double blink');
  }

  if (value & 4) {
    value -= 4;
    sequence.push('close your eyes');
  }

  if (value & 8) {
    value -= 8;
    sequence.push('jump');
  }

  if (value & 16) {
    value -= 16;
    sequence = sequence.reverse();
  }

  if (value !== 0) {
    throw new Error('Handshake must be a number');
  }

  return sequence;
}
