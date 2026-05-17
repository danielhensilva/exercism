export const isValid = (text) => {
  let total = 0;
  let multiplier = 10;
  const code = text.split('');
  for (let i = 0; i < code.length; i++) {
    const digit = code[i];

    if (digit == 'X') {
      // Must be last digit
      if (i+1 == code.length) {
        total += 10
        multiplier--;
        continue;
      }
      // Otherwise, invalid
      return false;
    }

    // Skip valid separators
    if (digit == ' ' || digit == '-') {
      continue;
    }

    // Parse digit to integer
    const parsedDigit = parseInt(digit);
    if (parsedDigit < 0 || parsedDigit > 9) {
      return false;
    }

    // If we have more digits than expected, it is invalid
    if (multiplier < 0) {
      return false;
    }

    // Apply validation logic
    total += parsedDigit * multiplier;
    multiplier--;
  }

  // If loop finished before or after the expected
  // case, it means we have a too short or too long
  // code, therefore invalid
  if (multiplier != 0) {
    return false;
  }

  return total % 11 == 0;
};
