function factorial(n) {
  let factorial = n;
  if (n == 0) {
    factorial = 1;
  } else {
    for (i = n - 1; i >= 1; i--) {
      factorial = factorial * i;
    }
  }
  return factorial;
}

console.log(factorial(0));
