function wordFrequency(str) {
  let objOfFrequency = {};
  const arrOfWords = str.split(" ");

  for (j = 0; j < arrOfWords.length; j++) {
    let word = arrOfWords[j];
    if (objOfFrequency[word]) {
      objOfFrequency[word] += 1;
    } else {
      objOfFrequency[word] = 1;
    }
  }
  return objOfFrequency;
}

console.log(wordFrequency("hello world hello"));
