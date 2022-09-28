/**
 * Capitalize the first letter of each word in a string
 */
function capitalizeFirstLetter(string: string) {
  const lowerString = string.toLowerCase();
  const chars = lowerString.split('');
  chars[0] = chars[0].toUpperCase();
  for (let i = 1; i < chars.length; i++) {
    if (chars[i - 1] === ' ' || chars[i - 1] === '-') {
      chars[i] = chars[i].toUpperCase();
    }
  }
  return chars.join('');
}

export default capitalizeFirstLetter;
