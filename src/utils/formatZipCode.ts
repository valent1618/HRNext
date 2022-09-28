/**
 * Add 0 if zip code length is inferior to 5
 */
function formatZipCode(code: string) {
  return code.padStart(5, '0');
}

export default formatZipCode;
