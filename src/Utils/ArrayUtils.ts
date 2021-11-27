export default function removeArrayElement<T>(
  array: Array<T>,
  key: T
): Array<T> {
  const arrayCopy = [...array];
  const index = array.indexOf(key);
  if (index > -1) {
    arrayCopy.splice(index, 1);
  }
  return arrayCopy;
}
