function runLengthEncoding(string) {
  if (!string) return "";
  let runLengthEncoding = "";

  for (let i = 0; i < string.length; i++) {
    let count = 1;
    for (let j = i; j < string.length; j++) {
      if (string[i] !== string[j + 1]) break;
      count++;
      i++;
    }
    runLengthEncoding += count === 1 ? string[i] : count + string[i];
    console.log(runLengthEncoding);
  }

  return runLengthEncoding;
}

runLengthEncoding("WWWWWWWWWWWWBWWWdddddWWWWWWWWB"); // "12WB12W3B24WB"

// Merci de ne pas effacer la ligne en dessous.
exports.runLengthEncoding = runLengthEncoding;
