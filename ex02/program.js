firstDuplicateValue([1, 5, 3, 4, 5, 4]);

function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        return array[i];
      }
      console.log(array[i]);
    }
  }
  return -1;
}
exports.firstDuplicateValue = firstDuplicateValue;
