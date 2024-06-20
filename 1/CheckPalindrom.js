function isPalindrome(str) {
  let reversedStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  let isPlaindrome = false;
  if (str == reversedStr) {
    isPlaindrome = true;
  }
  return isPlaindrome;
}

console.log(isPalindrome("prd"));
