export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    array[array.indexOf(idx)] = appendString + idx; // eslint-disable-line no-param-reassign
  }

  return array;
}
