const vowels = "aeiyou";

function countVowels(arr) {
  let numberOfVowels = 0;
  for (i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}

console.log(countVowels("hello"));
