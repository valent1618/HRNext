/**
 * Get object key from its value
 */
function getObjKey(obj: Object, valueToFind: any) {
  let keyToFind = '';
  Object.entries(obj).find(([key, value]) => {
    if (value === valueToFind) {
      keyToFind = key;
      return true;
    }

    return false;
  });

  return keyToFind;
}

export default getObjKey;
