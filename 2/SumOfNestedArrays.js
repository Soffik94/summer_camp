function sumNestedArrays(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      sum += sumNestedArrays(element);
    } else {
      sum += element;
    }
  });
  return sum;
}
console.log(sumNestedArrays([1, [2, [3, 4]], 5]));
