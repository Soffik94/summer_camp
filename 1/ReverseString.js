function reverseString(str) {
  let reversedStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }

  return reversedStr;
}

console.log(reverseString("nazdar"));
