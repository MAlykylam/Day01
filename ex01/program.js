function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        return array[i];
      }
    }
  }
  return -1;
}

// Merci de ne pas effacer la ligne en dessous.
exports.firstDuplicateValue = firstDuplicateValue;
