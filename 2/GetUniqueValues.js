function getUniqueValues(arr) {
  let uniqueArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5]));
