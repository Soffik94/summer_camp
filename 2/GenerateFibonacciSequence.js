function generateFibonacci(n) {
  fibonacciArr = [0, 1];
  if (n === 0) {
    fibonacciArr = [];
  } else if (n === 1) {
    fibonacciArr = [0];
  } else if (n === 2) {
    fibonacciArr = [0, 1];
  } else {
    for (i = 0; i < n - 2; i++) {
      fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i + 1]);
    }
  }
  return fibonacciArr;
}
console.log(generateFibonacci(50));

//trošku ochcávka, já vím :D :D :D
