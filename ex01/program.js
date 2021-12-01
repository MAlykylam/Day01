


function firstDuplicateValue(array){
  for(let i=0; i < array.length; ++i){
      if(array.lastIndexOf(array[i]) > i){
          return array[i];
  }
  return -1;
}

// Merci de ne pas effacer la ligne en dessous.
exports.firstDuplicateValue = firstDuplicateValue;
