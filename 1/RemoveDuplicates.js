function removeDuplicates(arr) {
  let trimedArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!trimedArr.includes(arr[i])) {
      trimedArr.push(arr[i]);
    }
  }
  return trimedArr;
}

console.log(removeDuplicates([5, 5, 5, 5, 5]));
