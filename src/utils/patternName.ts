/**
 * Regex for name, accepts compound names and accents
 */
const PATTERN_NAME = {
  regex: '[A-zÜ-ü]{2,24}([ -]{1}[A-zÜ-ü]{1,24})?',
  message:
    'Accepts compound names (space or -) and accents. Special characters are not allowed.',
};

export default PATTERN_NAME;
