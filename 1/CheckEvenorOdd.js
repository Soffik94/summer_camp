function isEven(number) {
  const a = number % 2;
  if (a == 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isEven(5));
