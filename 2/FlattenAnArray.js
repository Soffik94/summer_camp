function flattenArray(arr) {
  let flattenedArr = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenedArr = flattenedArr.concat(flattenArray(element));
    } else {
      flattenedArr.push(element);
    }
  });
  return flattenedArr;
}
console.log(flattenArray([1, [2, [3, 4]], 5]));
