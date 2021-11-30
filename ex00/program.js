function tabTriCarre(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = Math.pow(array[i], 2);

    console.log(array[i], result[i]);
    console.log("----------------");
  }
  return result;
}

tabTriCarre([1, 2, 3, 4]);

exports.tabTriCarre = tabTriCarre;
git;
