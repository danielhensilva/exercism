export const convert = (text) => {
  const lines = text.split('\n');
  let result = '';
  for (let lineStart = 0; lineStart < lines.length; lineStart += 4) {
    if (result.length > 0) {
      result += ',';
    }
    for (let digitStart = 0; digitStart < lines[0].length; digitStart += 3) {
      const digitEnd = digitStart + 3;

      const digit = [
        lines[lineStart + 0].substring(digitStart, digitEnd),
        lines[lineStart + 1].substring(digitStart, digitEnd),
        lines[lineStart + 2].substring(digitStart, digitEnd),
        lines[lineStart + 3].substring(digitStart, digitEnd),
      ];

      result += parse(digit);
    }
  }
  return result;
};

function parse(digit) {
  if (
    digit[0] == " _ " &&
    digit[1] == "| |" &&
    digit[2] == "|_|" &&
    digit[3] == "   "
  ) {
    return "0";
  }

  if (
    digit[0] == "   " &&
    digit[1] == "  |" &&
    digit[2] == "  |" &&
    digit[3] == "   "
  ) {
    return "1";
  }

  if (
    digit[0] == " _ " &&
    digit[1] == " _|" &&
    digit[2] == "|_ " &&
    digit[3] == "   "
  ) {
    return "2";
  }

  if (
    digit[0] == " _ " &&
    digit[1] == " _|" &&
    digit[2] == " _|" &&
    digit[3] == "   "
  ) {
    return "3";
  }

  if (
    digit[0] == "   " &&
    digit[1] == "|_|" &&
    digit[2] == "  |" &&
    digit[3] == "   "
  ) {
    return "4";
  }

  if (
    digit[0] == " _ " &&
    digit[1] == "|_ " &&
    digit[2] == " _|" &&
    digit[3] == "   "
  ) {
    return "5";
  }

  if (
    digit[0] == " _ " &&
    digit[1] == "|_ " &&
    digit[2] == "|_|" &&
    digit[3] == "   "
  ) {
    return "6";
  }

  if (
    digit[0] == " _ " &&
    digit[1] == "  |" &&
    digit[2] == "  |" &&
    digit[3] == "   "
  ) {
    return "7";
  }

  if (
    digit[0] == " _ " &&
    digit[1] == "|_|" &&
    digit[2] == "|_|" &&
    digit[3] == "   "
  ) {
    return "8";
  }

  if (
    digit[0] == " _ " &&
    digit[1] == "|_|" &&
    digit[2] == " _|" &&
    digit[3] == "   "
  ) {
    return "9";
  }

  return "?";
}
