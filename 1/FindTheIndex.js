function findIndex(arr, element) {
  let index = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      index = i;
      break;
    } else {
      index = -1;
    }
  }
  return index;
}

console.log(findIndex([1, 2, 3, 4, 5], 6));
