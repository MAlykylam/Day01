function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; ++i) {
    if (array.lastIndexOf(array[i]) > i) {
      return array[i];
    }
  }
  return -1;
}

console.log(
  firstDuplicateValue([
    23, 25, 9, 26, 2, 19, 24, 18, 25, 17, 13, 3, 14, 17, 9, 20, 26, 15, 21, 2,
    6, 11, 2, 12, 23, 5, 4, 20,
  ])
);

// Merci de ne pas effacer la ligne en dessous.
exports.firstDuplicateValue = firstDuplicateValue;
