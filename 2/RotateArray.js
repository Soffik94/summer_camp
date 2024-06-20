function rotateArray(arr, k) {
  let arrToRotate = arr;
  let i = 0;
  while (i < k) {
    const valueToRotate = arrToRotate[arrToRotate.length - 1];
    arrToRotate.unshift(valueToRotate);
    arrToRotate.pop();
    i++;
  }
  return arrToRotate;
}

console.log(rotateArray(["a", "b", "c", "d"], 1));
