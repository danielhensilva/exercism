export default function circularBuffer(size) {

  let readIndex = -1;
  let writeIndex = -1;
  let buffer = [];

  function empty() {
    return buffer.every(x => !x);
  }

  function full() {
    return !!buffer[(writeIndex + 1) % size];
  }

  function nextRead() {
    return readIndex = (readIndex + 1) % size;
  }

  function nextWrite() {
    return writeIndex = (writeIndex + 1) % size;
  }

  function read() {
    if (empty()) {
      throw new BufferEmptyError();
    }
    const i = nextRead();
    const char = buffer[i];
    buffer[i] = null;
    return char;
  }

  function write(char, force = false) {
    if (char == null) {
      return;
    }
    if (full()) {
      if (force) read();
      else throw new BufferFullError();
    }
    const i = nextWrite();
    buffer[i] = char;
  }

  function forceWrite(char) {
    write(char, true);
  }

  function clear() {
    readIndex = -1;
    writeIndex = -1;
    buffer = [];
  }

  return {
    read: read,
    write: write,
    forceWrite: forceWrite,
    clear: clear,
  }
}

export class BufferEmptyError extends Error {
}

export class BufferFullError extends Error {
}