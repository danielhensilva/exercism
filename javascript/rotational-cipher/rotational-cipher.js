export const rotate = (text, rotation) => {
  if (rotation % 26 == 0) {
    return text;
  }
  return text
    .split('')
    .map(code => rotateChar(code, rotation))
    .join('');
};

function rotateChar(char, rotation) {
  const code = char.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    const newCode = ((code - 65 + rotation) % 26) + 65;
    return String.fromCharCode(newCode);
  }
  if (code >= 97 && code <= 122) {
    const newCode = ((code - 97 + rotation) % 26) + 97;
    return String.fromCharCode(newCode);
  }
  return char;
}
