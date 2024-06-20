function findCommonElements(arr1, arr2) {
  let commonElements = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonElements.push(arr2[j]);
        break;
      }
    }
  }
  return commonElements;
}

console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"]));
